"use client";
//import "@/style/singlejob.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
//import { useRouter, useParams } from "next/navigation";
// import Banner from ".../../icons/tenderbanner.png";
import { IconButton } from "@mui/material";
import { Button, Grid, Typography } from "@mui/material";
import ScrollDialog from "@/components/Jobform.jsx";
import baseurl from "@/components/base.js";
import styled from "styled-components";
export default function JobDetails({ params }) {
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
    <DIV
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
    </DIV>
  );
}

const DIV = styled.div`
  * {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .bigimgdiv {
    height: auto;
    width: 100%;
    border: 1px solid white;
    margin-top: 65px;
  }

  .containerdiv {
    width: 94%;
    height: auto;
    border: 1px solid white;
    margin: auto;
    margin-top: 20px;
  }

  .text {
    color: #012a4a;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .listdiv {
    height: auto;
    width: 100%;
    border: 1px solid white;
  }

  .banner {
    width: 98vw;
    margin: auto;
  }

  .card {
    height: 200px;
    width: 100%;
    margin: auto;
    border-radius: 10px;
    margin-top: 15px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border: 3px solid white;
  }

  .card:hover {
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  }

  .cardupper {
    height: 70%;
    border: 1px solid white;
    margin: auto;
    width: 100%;
    border-radius: 10px 10px 0px 0px;
    display: flex;
    padding: 10px;
    align-items: center;
  }

  .cardlower {
    height: 30%;
    border: 1px solid white;
    margin: auto;
    width: 100%;
    border-radius: 0px 0px 10px 10px;
    padding: 10px;
  }

  .upper1 {
    width: 75%;
    border: 1px solid white;
    height: 100%;
    border-radius: 10px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .upper2 {
    width: 25%;
    border: 1px solid white;
    height: 100%;
    border-radius: 0px 10px 0px 0px;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .typo {
    color: black;
    font-family: Poppins;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .blue1 {
    width: 20%;
    height: 100%;
    align-items: center;
    font-size: 16px;
    padding: 1px;
    color: var(--4285-f-4, #4285f4);
  }

  .blue2 {
    width: 80%;
    height: 100%;
    align-items: center;
    font-size: 16px;
    padding: 1px;
    color: var(--4285-f-4, #4285f4);
  }

  .typocompany {
    color: #000;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .desctext {
    color: #000;
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .pricetypo {
    color: #4285f4;
    text-align: right;
    font-family: Poppins;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .placetypo {
    color: #000;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .emptypo {
    color: #000;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .remotediv {
    height: 18px;
    width: 100%;
    border: 1px solid white;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    text-align: right !important;
  }

  @media (max-width: 700px) {
    .text {
      font-size: 24px;
    }

    .card {
      height: 185px;
      border: 3px solid white;
    }

    .blue1 {
      width: 25%;
      font-size: 9px;
    }

    .blue2 {
      width: 75%;
      font-size: 9px;
    }

    .cardupper {
      padding: 3px;
    }

    .cardlower {
      padding: 3px;
    }

    .typo {
      font-size: 20px;
    }

    .pricetypo {
      font-size: 13px;
    }

    .typocompany {
      font-size: 16px;
    }

    .desctext {
      font-size: 18px;
    }

    .placetypo {
      font-size: 11px;
    }

    .emptypo {
      font-size: 12px;
    }

    .remotediv {
      font-size: 12px;
    }

    .bigimgdiv {
      margin-top: 7px;
    }
  }
`;
