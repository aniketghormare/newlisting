import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Tags from "react-tag-autocomplete";
import "@/style/Jobform.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import baseurl from "@/components/base.js";
export default function ScrollDialog({ productid }) {
 
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  // console.log(productid)
  const [showSuccessModal, setShowSuccessModal] = useState(false);
 
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
  };
  const descriptionElementRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    jobPosition: "",
    // skills: [],
    highestQualification: "",
    experience: "",
    relocate: false,
    currentCtc: "",
    expectedCtc: "",
    currentLocation: "",
    resume: null, // Add this field
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resume: file });
  };

  const suggestions = [
    { name: "JavaScript" },
    { name: "React" },
    { name: "Node.js" },
  ];

  const handleTagAddition = (tag) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, tag.text],
    }));
  };

  const handleTagDelete = (i) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((tag, index) => index !== i),
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "file") {
      // For file input, you cannot set its value, so leave it as null
      setFormData((prevData) => ({
        ...prevData,
        [name]: null,
      }));
    } else if (type === "checkbox") {
      // For checkboxes, set the value to the boolean checked state
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      // For other input types, set the value as usual
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    // console.log("Submitting the form");
    let store = {};
    formDataToSend.forEach((value, key) => {
      // console.log(key, value);
      if (key == "experience") {
        store[key] = +value;
      } else if (key == "relocate") {
        if (value == "true") {
          store[key] = true;
        } else {
          store[key] = value;
        }
      } else {
        store[key] = value;
      }
    });
    store["jobid"] = productid;
    //setobj(store)
    fetch(`${baseurl}/api/job-applications/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify(store),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
       // console.log(obj)
        if (data.status == "success") {
          //alert("Your Job Application Submitted Successfully!!");
          // setSnackbarSeverity("success");
          // setSnackbarMessage("🎉 Your Job Application Submitted Successfully! 🎉");
          // setSnackbarOpen(true);
          setShowSuccessModal(true);
          setFormData({
            fullName: "",
            email: "",
            phoneNumber: "",
            jobPosition: "",
            highestQualification: "",
            experience: "",
            relocate: false,
            currentCtc: "",
            expectedCtc: "",
            currentLocation: "",
            resume: null,
          });
          handleClose();
        } else if (data.err && data.err.name == "TokenExpiredError") {
          setSnackbarSeverity("error");
          setSnackbarMessage("Login First!!");
          setSnackbarOpen(true);
        } else if (
          data.message &&
          data.message == "You have already applied for this job!!"
        ) {
          setSnackbarSeverity("info");
          setSnackbarMessage("You have already applied for this job!!");
          setSnackbarOpen(true);
        } else {
          console.log(data);
          setSnackbarSeverity("error");
          setSnackbarMessage("Login First!!");
          setSnackbarOpen(true);
        }
      })
      .catch((err) => {
        //console.log(err);
        setSnackbarSeverity("error");
        setSnackbarMessage(err);
        setSnackbarOpen(true);
      });
    //console.log(obj);
  };

  return (
    <div>
      <div className="container">
        <Button id="bigbutton"   onClick={handleClickOpen("body")}>
          Apply For This Job
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        fullWidth={true}
        maxWidth="sm"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle style={{ color: "#007bff" }} id="scroll-dialog-title">
          Apply
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <form>
              {[
                "fullName",
                "email",
                "phoneNumber",
                "jobPosition",
                "highestQualification",
                "experience",
                "currentCtc",
                "expectedCtc",
                "currentLocation",
              ].map((field) => (
                <div key={field}>
                  <label>
                    {field.charAt(0).toUpperCase() +
                      field.slice(1).replace(/([A-Z])/g, " $1") +
                      ":"}
                    <br />
                    <input
                      type={
                        field === "email"
                          ? "email"
                          : field === "phoneNumber"
                          ? "tel"
                          : field === "experience"
                          ? "number"
                          : "text"
                      }
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              ))}
              <div>
                <label>
                  Resume (PDF, Word, or other common formats):
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf, .doc, .docx"
                    onChange={handleFileChange}
                  />
                </label>
              </div>

              <div>
                <label>
                  Are you willing to relocate?&nbsp;
                  <input
                    type="checkbox"
                    name="relocate"
                    checked={formData.relocate}
                    onChange={handleChange}
                  />
                </label>
              </div>

              {/* Skills Tags */}
              {/* <div>
                <label>
                  Skills:
                  <br />
                  <Tags
                    tags={formData.skills}
                    suggestions={suggestions}
                    handleAddition={handleTagAddition}
                    handleDelete={handleTagDelete}
                  />
                </label>
              </div> */}
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button id="submitbutton" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar component */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
      {/* Success Modal */}
      <Dialog open={showSuccessModal} onClose={handleSuccessModalClose}>
        <DialogTitle style={{ color: "#007bff" }}>Success! 🎉</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your Job Application has been submitted successfully.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSuccessModalClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
