import React, { useRef, useState, useEffect } from "react";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import baseurl from "@/components/base.js";
const PersonalInfo = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
 // const [initdata, setinitdata] = useState({});
  //const [initdata, setInitData] = useState(null);
  const [initdata, setInitData] = useState({});
  const [change, setchange] = useState(false);
  const [formData, setFormData] = useState({
    fullName: initdata.fullName || "",
    phoneNumber: initdata.phoneNumber || "",
    email: initdata.email || "",
    gender: initdata.gender || "",
    dateOfBirth: initdata.dateOfBirth || "",
    streetAddress: initdata.streetAddress || "",
  });
  const [isEditable, setIsEditable] = useState(false);

  const getdata = () => {
    console.log("hello");
    const token = JSON.parse(localStorage.getItem("token"));

    if (token) {
      // User is authenticated, fetch data
      fetch(`${baseurl}/api/personalInfo/getinfo`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // Update the form data with fetched user information
          setInitData(data.data);
          setFormData(data.data);
          // setFormData(data.data);
        })
        .catch((err) => {
          console.error("Error fetching user info:", err);
        });
    } else {
      let data = {
        fullName: "",
        phoneNumber: "",
        email: "",
        gender: "",
        dateOfBirth: "",
        streetAddress: "",
      };
      setInitData(data);
      setFormData(data);
    }
  };

  useEffect(() => {
    // Check if the user is authenticated and fetch data if available
    getdata();
  }, [change]); // Empty dependency array ensures it runs only once when the component mounts

  const handleImgBox = () => {
    if (isEditable || !isEditable) {
      inputRef.current.click();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditToggle = () => {
    setIsEditable((prev) => !prev);
  };

  const handleSave = () => {
    const updatedFormData = { ...formData, image };
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      setSnackbarSeverity("error");
      setSnackbarMessage("Login First!!");
      setSnackbarOpen(true);
      return;
    }
    fetch(`${baseurl}/api/personalInfo/addinfo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedFormData),
    })
      .then((res) => {
        if (res.status === 200) {
          // Display success message
          setSnackbarSeverity("success");
          setSnackbarMessage("Your Profile Updated!!");
          setSnackbarOpen(true);
          setFormData(updatedFormData);
          setchange(!change);
          // getdata()
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ height: "auto", width: "100%", border: "1px solid white" }}>
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <p
          style={{
            color: "#4285F4",
            textDecoration: "underline",
            fontWeight: "600",
            fontSize: "20px",
          }}
        >
          Personal Info
        </p>
        <img
          src={"/edit.jpg"}
          style={{
            width: 17,
            height: 17,
            marginTop: "10px",
            cursor: "pointer",
          }}
          onClick={handleEditToggle}
        />
      </Box>

      <hr />
      <br />
      <ListItem button>
        <Box style={{ margin: "auto" }} onClick={handleImgBox}>
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              style={{ width: 80, height: 80, borderRadius: "50%" }}
              alt="User"
            />
          ) : (
            <img
              src="https://picsum.photos/id/55/1200/600"
              style={{ width: 80, height: 80, borderRadius: "50%" }}
              alt="Default"
            />
          )}
          <img
            src="/getimage.jpg"
            style={{
              width: 20,
              height: 20,
              marginLeft: 60,
              marginTop: -15,
              borderRadius: 4,
            }}
            alt="Edit"
          />
          <input
            type="file"
            ref={inputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </Box>
      </ListItem>

      <ListItem>
        <form>
          <label htmlFor="fname">Full Name:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
          <br />

          <hr style={{ backgroundColor: "#4285f4" }} />

          <label htmlFor="lname">Phone Number:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
          <br />

          <hr />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
          <br />

          <hr />
          <label htmlFor="gender">Gender:</label>
          <br />
          <select
            style={{ width: "auto" }}
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            disabled={!isEditable}
          >
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <br />
          <hr />
          <label htmlFor="dob">Date of Birth:</label>
          <br />
          <input
            type="date"
            id="dob"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
          <br />

          <hr />
          <label htmlFor="address">Street Address:</label>
          <br />
          <input
            type="text"
            id="address"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
          <br />

          <hr />
        </form>
      </ListItem>

      {isEditable && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            style={{
              backgroundColor: "#4285F4",
              color: "white",
              padding: "6px",
              borderRadius: "6px",
            }}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      )}

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
    </div>
  );
};

export default PersonalInfo;
