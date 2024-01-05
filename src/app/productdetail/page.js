"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Rating,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Banner from "../../icons/tenderbanner.png";
import baseurl from "@/components/base.js"
function page() {
  const [show, setshow] = useState(false);
  const router = useRouter();
  useEffect(() => {
    import("./productdetail.css")
      .then((module) => {
        // CSS module has been loaded
      })
      .catch((error) => {
        // Error occurred while loading CSS module
      });
    setshow(true);
  }, []);

  return (
    <React.Fragment>
      {show == true && (
        <div id="mainContainer">
          <br />
          <Image
            className="banner"
            src="https://ibb.co/DYgF15r"
            alt="My Image"
            width={400}
            height={400}
          />
          <br />
          <Typography variant="h6">
            Sokia total station model ml12323 China made, pearl yellow
          </Typography>

          <br></br>
          <div id="bannersection">
            <Carousel>
              <div>
                <img src={"https://picsum.photos/id/32/1200/600"} />
                <p className="legend">Image 1</p>
              </div>
              <div>
                <img src={"https://picsum.photos/id/32/1200/600"} />
                <p className="legend">Image 2</p>
              </div>
              <div>
                <img src={"https://picsum.photos/id/32/1200/600"} />
                <p className="legend">Image 3</p>
              </div>
            </Carousel>
          </div>
          <div style={{ display: "flex" }}>
            <Rating value={4} size="small"></Rating>
            <Typography variant="caption">(20)</Typography>
          </div>
          <br></br>
          <br></br>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3} sm={6} lg={2} xl={2}>
              <div className="mincard">
                <Image
                  src={"/detailicon.svg"}
                  className="mincardicon"
                  width="20"
                  height="20"
                ></Image>
                <div className="mincardText">
                  <Typography variant="body2" fontWeight={"bold"}>
                    Brand
                  </Typography>
                  <Typography variant="caption">
                    <span style={{ color: "#A9A9A9" }}>
                      Sokia by abc Pvt Ltd
                    </span>
                  </Typography>
                  {/* <p>Sokia by abc Pvt Ltd</p> */}
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={3} sm={6} lg={2} xl={2}>
              <div className="mincard">
                {" "}
                <Image
                  src={"/timeicon.svg"}
                  className="mincardicon"
                  width="20"
                  height="20"
                ></Image>
                <div className="mincardText">
                  <Typography variant="body2" fontWeight={"bold"}>
                    Min Order
                  </Typography>
                  <Typography variant="caption">
                    <span style={{ color: "#A9A9A9" }}>100 Kg</span>
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={3} sm={6} lg={2} xl={2}>
              <div className="mincard">
                {" "}
                <Image
                  src={"/locationicon.svg"}
                  className="mincardicon"
                  width="20"
                  height="20"
                ></Image>
                <div className="mincardText">
                  <Typography variant="body2" fontWeight={"bold"}>
                    Location
                  </Typography>
                  <Typography variant="caption">
                    <span style={{ color: "#A9A9A9" }}>Gurugram, HR India</span>
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={3} sm={6} lg={2} xl={2}>
              <div className="mincard">
                {" "}
                <Image
                  src={"/sellericon.svg"}
                  className="mincardicon"
                  width="20"
                  height="20"
                ></Image>
                <div className="mincardText">
                  <Typography variant="body2" fontWeight={"bold"}>
                    Seller
                  </Typography>
                  <Typography variant="caption">
                    <span style={{ color: "#A9A9A9" }}>
                      ABCD Private Limited
                    </span>
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={3} sm={6} lg={2} xl={2}>
              <div className="mincard">
                {" "}
                <Image
                  src={"/calender.svg"}
                  className="mincardicon"
                  width="25"
                  height="25"
                ></Image>
                <div className="mincardText">
                  <Typography variant="body2" fontWeight={"bold"}>
                    Shipped In
                  </Typography>
                  <Typography variant="caption">
                    <span style={{ color: "#A9A9A9" }}>3-7 Working Days</span>
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={3} sm={6} lg={2} xl={2}>
              <div className="mincard">
                {" "}
                <Image
                  src={"/timeicon.svg"}
                  className="mincardicon"
                  width="20"
                  height="20"
                ></Image>
                <div className="mincardText">
                  <Typography variant="body2" fontWeight={"bold"}>
                    Min Qty
                  </Typography>
                  <Typography variant="caption">
                    <span style={{ color: "#A9A9A9" }}>5</span>
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
          <br></br>
          <Typography variant="h6" color="#4285F4">
            Quick Highlights
          </Typography>
          <ol>
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <li key={index}>
                <div style={{ display: "flex" }}>
                  <Image
                    src="/arrow.svg"
                    alt="My Image"
                    width={15}
                    height={15}
                  />
                  &nbsp; 12 GB RAM | 256 GB ROM
                </div>
              </li>
            ))}
          </ol>
          <br></br>
          <Grid item xs={12} md={12} sm={12} lg={6} xl={6}>
            {" "}
            <div
              className="paper"
              style={{ diplay: "flex", justifyContent: "center" }}
            >
              <Image
                src={"/pdficon.svg"}
                className="mincardicon"
                width="20"
                height="20"
              ></Image>
              Download Product Doc
            </div>
            <div
              className="paper"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Image
                src={"/emailicon.svg"}
                className="mincardicon"
                width="20"
                height="20"
              ></Image>
              Contact Supplier
            </div>
          </Grid>

          <br></br>

          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Description</Typography>
            </AccordionSummary>
            <AccordionDetails>
              A product description is a piece of writing that conveys the
              features and benefits of a product, ranging from basic facts to
              stories that make a product compelling to an ideal buyer.
            </AccordionDetails>
          </Accordion>

          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Manufacturer Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              A product description is a piece of writing that conveys the
              features and benefits of a product, ranging from basic facts to
              stories that make a product compelling to an ideal buyer.
            </AccordionDetails>
          </Accordion>

          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Customization</Typography>
            </AccordionSummary>
            <AccordionDetails>
              A product description is a piece of writing that conveys the
              features and benefits of a product, ranging from basic facts to
              stories that make a product compelling to an ideal buyer.
            </AccordionDetails>
          </Accordion>

          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Shipping</Typography>
            </AccordionSummary>
            <AccordionDetails>
              A product description is a piece of writing that conveys the
              features and benefits of a product, ranging from basic facts to
              stories that make a product compelling to an ideal buyer.
            </AccordionDetails>
          </Accordion>

          <div className="buynowsection">
            ₹500000
            <Button
              color="success"
              variant="contained"
              onClick={() => router.push("/cart")}
            >
              Buy Now
            </Button>
          </div>
          <br></br>
        </div>
      )}
    </React.Fragment>
  );
}

export default page;
