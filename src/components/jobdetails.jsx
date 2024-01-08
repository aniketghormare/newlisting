"use client";
import "@/style/singlejob.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
//import { useRouter, useParams } from "next/navigation";
// import Banner from ".../../icons/tenderbanner.png";
import { IconButton } from "@mui/material";
import { Button, Grid, Typography } from "@mui/material";
import ScrollDialog from "@/components/Jobform.jsx";
import baseurl from "@/components/base.js";

export default function JobDetails({params}) {
  const [singlejob, setsinglejob] = useState({});
  const [jobid, setjobid] = useState(null);
  const [jobdialog, setjobdialog] = useState(true);
  const orderStatus = [
    { name: "All" },
    { name: "Buy" },
    { name: "Rent" },
    { name: "Tender" },
    { name: "Auction" },
    { name: "Directories" },
    { name: "Jobs" },
  ];
  //console.log(params)
  const singledata = (id) => {
    fetch(`${baseurl}/api/job/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setsinglejob(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setjobid(+params.singlejob);
    singledata(+params.singlejob);
  }, []);
  return (
    <div
      id="mainContainer"
      style={{ height: "auto", border: "1px solid white" }}
    >
      <div className="bigimgdiv">
        <Image
          className="banner"
          src="/jobbanner.png"
          alt="My Image"
          width={400}
          height={400}
        />
      </div>
      <br />
      <div className="containerdiv">
        <p className="text">Jobs For You</p>
        <br />
        <div className="listdiv">
          {/* backgroundColor={index%2==0? "#f1f7fc":"white"} */}
          <p className="typo">
            {singlejob.post}
            {/* Senior Civil Engineer */}
          </p>

          <div
            style={{
              height: "30px",
              width: "auto",
              borderColor: "#f1f7fc",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "5px",
            }}
          >
            <div className="blue1">
              <span
                style={{
                  backgroundColor: "#def1ff",
                  alignItems: "center",
                  padding: "1px",
                }}
              >
                {singlejob.exp_start}- {singlejob.exp_end} Year
              </span>
            </div>
            <div className="blue2">
              <span style={{ backgroundColor: "#def1ff", padding: "2px" }}>
                {singlejob.education}
                {/* Graduation/Diploma */}
              </span>
            </div>
          </div>
          <Typography className="typocompany">
            {singlejob.company}
            {/* Oriental Structure Engineers Private Limited */}
          </Typography>

          <div
            className="upper2"
            style={{
              borderColor: "white",
              marginTop: "14px",
              display: "flex",
              textAlign: "left",
            }}
          >
            <p className="pricetypo" style={{ textAlign: "left" }}>
              ₹ {singlejob.sal_start}-{singlejob.sal_end} LPA
            </p>
            <Typography className="placetypo">
              {singlejob.place}
              {/* Gurugram, HR */}
            </Typography>
            <Typography className="emptypo">
              {singlejob.emp_start}-{singlejob.emp_end} Emp
            </Typography>
            <Typography className="emptypo" style={{ color: "#4285F4" }}>
              {singlejob.working}
              {/* Remote */}
            </Typography>
            {/* <div
            className="remotediv"
            style={{
              borderColor: "white",
            }}
          >
            <Image src="/remote.png" height={13} width={15} />
            <Typography className="emptypo" style={{ color: "#4285F4" }}>
              {singlejob.working}
             
            </Typography>
          </div> */}
          </div>
          <br />
          <div>
            <Typography className="desctext">
              {singlejob.description}
              {/* Computer Engineer who can code and work on Autodesk an... */}
            </Typography>
          </div>
          <br />
          <Grid container spacing={2}>
            {orderStatus &&
              orderStatus.map((item, index) => (
                <Grid item xs={3} md={3} sm={3} lg={2} xl={2} key={index}>
                  <div className="statuscard" style={{ alignItems: "center" }}>
                    {item.name}
                  </div>
                </Grid>
              ))}
          </Grid>
          <br />
          <Typography className="typo">Job Description </Typography>
          <br />
          <Box className="descbox">
            <ul style={{ listStyle: "disc" }}>
              <li>
                Computer Engineer who can code and work on Autodesk
                an...Computer Engineer who can code and work on Autodesk an..
              </li>
              <li>
                Computer Engineer who can code and work on Autodesk
                an...Computer Engineer who can code and work on Autodesk an...
              </li>
              <li>
                Computer Engineer who can code and work on Autodesk
                an...Computer Engineer who can code and work on Autodesk an...
              </li>
            </ul>
          </Box>
          <br />
          {/* <Button
          style={{
            backgroundColor: "#4285F4",
            width: "100%",
            color: "white",
          }}
        >
          Apply For This Job
        </Button> */}
          {jobdialog ? <ScrollDialog productid={singlejob.id} /> : null}
          <br />
        </div>
      </div>
    </div>
  );
}
