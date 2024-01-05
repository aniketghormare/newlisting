 "use client";
import { IconButton, Typography } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "@/style/home.css";
import { ArrowForwardIos } from "@mui/icons-material";
import Link from "next/link";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useRouter } from "next/navigation";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function page() {
  const router = useRouter();
  // const [banners, setBanners] = useState([]);
  // const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [show, setshow] = useState(false);
  // Simulated data for banner images
  // const bannerData = [
  //   {
  //     id: 1,
  //     imageUrl: "https://picsum.photos/id/32/1200/600",
  //   },
  //   {
  //     id: 2,
  //     imageUrl: "https://picsum.photos/id/43/1200/600",
  //   },
  //   {
  //     id: 3,
  //     imageUrl: "https://picsum.photos/id/54/1200/600",
  //   },
  //   {
  //     id: 4,
  //     imageUrl: "https://picsum.photos/id/36/1200/600",
  //   },
  //   {
  //     id: 5,
  //     imageUrl: "https://picsum.photos/id/55/1200/600",
  //   },
  // ];

  useEffect(() => {
    setshow(true);
    // Fetch banners from an API or perform any asynchronous operation
    // In this example, we'll simply set the banner data
    // setBanners(bannerData);
  }, []);

  // useEffect(() => {
  //   // Automatically change the banner every 5 seconds
  //   const interval = setInterval(() => {
  //     setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
  //   }, 3000);

  //   return () => {
  //     clearInterval(interval); // Clean up the interval on component unmount
  //   };
  // }, [banners]);

  // if (banners.length === 0) {
  //   return <div>Loading...</div>; // Placeholder for when banners are still loading
  // }

  // const currentBanner = banners[currentBannerIndex];
  return (
    <React.Fragment>
      {show && (
        <div id="mainContainer">
          <div id="bannersection">
            <Carousel autoPlay={true} infiniteLoop>
              <div>
                <img src={"https://picsum.photos/id/32/1200/600"} />
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img src={"https://picsum.photos/id/32/1200/600"} />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src={"https://picsum.photos/id/32/1200/600"} />
                <p className="legend">Legend 3</p>
              </div>
            </Carousel>
            {/* <IconButton>
          <img
            className="banner"
            src={currentBanner.imageUrl}
            alt={`Banner ${currentBanner.id}`}
          />
        </IconButton> */}
          </div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 3, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              id="mainservice"
            >
              <Grid item xs={2} sm={4} md={4}>
                <Link href="/job">
                  <Item id="maingrid">
                    <Image
                      className="mainicon"
                      src="/bussiness.svg"
                      alt="My Image"
                      width={100}
                      height={100}
                    />
                  </Item>
                </Link>
                <Typography variant="subtitle" paragraph align="center">
                  {" "}
                  Jobs
                </Typography>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Link href="/products">
                  <Item id="maingrid">
                    <Image
                      className="mainicon"
                      src="/checklist.svg"
                      alt="My Image"
                      width={100}
                      height={100}
                    />
                  </Item>{" "}
                </Link>
                <Typography variant="subtitle" paragraph align="center">
                  {" "}
                  Buy/Rent
                </Typography>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Link href="/tender">
                  <Item id="maingrid">
                    <Image
                      className="mainicon"
                      src="/tenders.svg"
                      alt="My Image"
                      width={100}
                      height={100}
                    />
                  </Item>{" "}
                </Link>
                <Typography variant="subtitle" paragraph align="center">
                  {" "}
                  Tenders/Auctions
                </Typography>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Link href="/categories">
                  <Item id="maingrid">
                    <Image
                      className="mainicon"
                      src="/checklist.svg"
                      alt="My Image"
                      width={100}
                      height={100}
                    />
                  </Item>
                </Link>
                <Typography variant="subtitle" paragraph align="center">
                  {" "}
                  Directories
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <div
            style={{
              display: "block",
              textAlign: "end",
              marginTop: "16px",
            }}
          >
            <Typography
              variant="h6"
              style={{ display: "table", fontWeight: "bolder" }}
            >
              &nbsp; Buy : Trending Near You
            </Typography>
            <Link href="/products">
              <IconButton>
                <ArrowForwardIos
                  style={{ marginTop: "-60px" }}
                ></ArrowForwardIos>
              </IconButton>
            </Link>
          </div>
          <Grid item xs={12}>
            <Grid id="buytrending">
              {[39, 38, 32, 43, 33, 44, 66, 77, 56, 58, 59, 60].map((value) => (
                <Grid key={value} item style={{ paddingTop: "inherit" }}>
                  <div id="card">
                    <img
                      src={`https://picsum.photos/id/${value}/367/267`}
                      alt="no image"
                      className="rounded-md"
                      id="buytrendingimg"
                    />

                    <div id="cardtitle">
                      {" "}
                      <Typography variant="subtitle2">JCB-0422</Typography>
                    </div>
                    <div id="cardfoot">
                      {" "}
                      <Typography
                        variant="subtitle2"
                        className="font-bold"
                        style={{ padding: 3 }}
                      >
                        ₹18000
                      </Typography>
                    </div>
                    {/* <Paper
                  elevation={2}
                  sx={{
                    height: "35.5vmin",
                    width: "25.5vmin",
                  }}
                  style={{ backgroundColor: "yellow" }}
                >
                  <img
                    src={`https://picsum.photos/id/${value}/367/267`}
                    alt="no image"
                    style={{ height: "inherit" }}
                    className="rounded-md"
                  />

                  <Typography variant="body">Tenders</Typography>
                </Paper> */}
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <br></br>
          {/* second banner sections */}
          <Image
            className="construction banner"
            src="/buysell.svg"
            alt="My Image"
            width={100}
            height={200}
          />
          <br></br>
          {/* // grid 2 */}
          <Grid item xs={12} style={{ marginTop: 5 }}>
            <Grid container justifyContent="center" spacing={2}>
              {[10, 21, 32, 43, 54, 65].map((item) => (
                <Grid key={item} item>
                  <div className="pb-8">
                    <Paper
                      elevation={2}
                      sx={{
                        height: "25.5vmin",
                        width: "25.5vmin",
                        // backgroundColor: (theme) =>
                        //   theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                      }}
                    >
                      <img
                        src={`https://picsum.photos/id/${item}/367/267`}
                        alt="no image"
                        style={{ height: "inherit" }}
                        // width={100}
                        // height={100}
                        className="rounded-md"
                      />
                      <Typography variant="subtitle2" paragraph align="center">
                        Construction Jobs
                      </Typography>
                    </Paper>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <br></br>
          <div
            style={{
              display: "block",
              textAlign: "end",
              marginTop: "16px",
            }}
          >
            <Typography
              variant="h6"
              style={{ display: "table", fontWeight: "bolder" }}
            >
              &nbsp; Rent : Trending Near You
            </Typography>

            <IconButton onClick={() => router.push("/products")}>
              <ArrowForwardIos style={{ marginTop: "-60px" }}></ArrowForwardIos>
            </IconButton>
          </div>
          <Grid item xs={12}>
            <Grid id="buytrending">
              {[39, 38, 32, 43, 33, 44, 66, 77, 56, 58, 59, 60].map((value) => (
                <Grid key={value} item style={{ paddingTop: "inherit" }}>
                  <div id="card">
                    <img
                      src={`https://picsum.photos/id/${value}/367/267`}
                      alt="no image"
                      className="rounded-md"
                      id="buytrendingimg"
                    />
                    <div id="cardtitle">
                      <Typography variant="subtitle2">JCB:422</Typography>
                    </div>
                    <div id="cardfoot">
                      <Typography
                        variant="subtitle2"
                        className="font-bold"
                        style={{ padding: 3 }}
                      >
                        ₹18000
                      </Typography>
                    </div>
                    {/* <Paper
                  elevation={2}
                  sx={{
                    height: "35.5vmin",
                    width: "25.5vmin",
                  }}
                  style={{ backgroundColor: "yellow" }}
                >
                  <img
                    src={`https://picsum.photos/id/${value}/367/267`}
                    alt="no image"
                    style={{ height: "inherit" }}
                    className="rounded-md"
                  />

                  <Typography variant="body">Tenders</Typography>
                </Paper> */}
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <br></br>
          <br></br>
          <div
            className="space-x-15"
            style={{ display: "block", textAlign: "end" }}
          >
            <Typography
              variant="h6"
              style={{ display: "table", fontWeight: "bolder" }}
            >
              &nbsp; Jobs for you
            </Typography>

            <Link href="/products">
              <IconButton>
                <ArrowForwardIos
                  style={{ marginTop: "-60px" }}
                ></ArrowForwardIos>
              </IconButton>
            </Link>
          </div>

          {/* jobs for you */}

          <Grid item xs={12}>
            <Grid id="jobsection">
              {[23, 24, 25, 26, 27, 28, 68, 69, 45].map((value) => (
                <Grid key={value} item style={{ paddingTop: "inherit" }}>
                  <div id="jobcard">
                    <div id="jobcardtitle">
                      <Stack direction="row" spacing={1}>
                        <Chip label="Graduate" size="small" />
                        <Chip label="PG" size="small" variant="outlined" />
                      </Stack>
                      <Typography variant="subtitle2" className="font-bold">
                        Senior Field Engineer
                      </Typography>
                      <Typography variant="body2" color="purple">
                        Sikarwar pvt ltd
                      </Typography>
                      <Typography variant="body2">
                        Any Graduate/diploma
                      </Typography>
                      <Typography variant="caption" paragraph align="center">
                        Mumbai | <Chip label="Remote" size="small" />
                      </Typography>
                    </div>
                    <div id="jobcardfoot">
                      <Typography
                        variant="body2"
                        paragraph
                        align="center"
                        style={{ padding: 3 }}
                      >
                        7+ Yr | 4.8 LPA
                      </Typography>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <br></br>
          <Image
            className="construction banner"
            src="/onlineconstruction.svg"
            alt="My Image"
            width={100}
            height={200}
          />
          <br></br>
          <br></br>
          <div
            className="space-x-15"
            style={{ display: "block", textAlign: "end" }}
          >
            <Typography
              variant="h6"
              style={{ display: "table", fontWeight: "bolder" }}
            >
              &nbsp; Trending Auctions near you
            </Typography>
            <Link href="/products">
              <IconButton>
                <ArrowForwardIos
                  style={{ marginTop: "-60px" }}
                ></ArrowForwardIos>
              </IconButton>
            </Link>
          </div>

          {/* jobs for you */}
          <Grid item xs={12}>
            <Grid id="buytrending">
              {[43, 44, 45, 46, 47, 48, 53, 56, 57].map((value) => (
                <Grid key={value} item style={{ paddingTop: "inherit" }}>
                  <div id="auctioncard">
                    <div className="flex">
                      <img
                        src={`https://picsum.photos/id/${value}/367/267`}
                        alt="no image"
                        className="rounded-md"
                        style={{ width: "55%", padding: 3 }}
                      />

                      <div id="auctioncardtitle">
                        {" "}
                        <Typography variant="body2" color="purple">
                          JCB 480
                        </Typography>
                        <Typography variant="body2">
                          2017 model Noida
                        </Typography>
                      </div>
                    </div>

                    <div id="auctioncardfoot">
                      {" "}
                      <Typography variant="subtitle2" style={{ padding: 3 }}>
                        ₹18000
                      </Typography>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <br></br>
          <Image
            className="construction banner"
            src="/tenderBanner.svg"
            alt="My Image"
            width={100}
            height={200}
          />

          <br></br>
          {/* Trending Tenders near you */}

          <br></br>
          <div
            className="space-x-15"
            style={{ display: "block", textAlign: "end" }}
          >
            <Typography
              variant="h6"
              style={{ display: "table", fontWeight: "bolder" }}
            >
              &nbsp; Trending Tenders Near You
            </Typography>

            <Link href="/products">
              <IconButton>
                <ArrowForwardIos
                  style={{ marginTop: "-60px" }}
                ></ArrowForwardIos>
              </IconButton>
            </Link>
          </div>

          {/* jobs for you */}

          <Grid item xs={12}>
            <Grid id="trendingtender">
              {[43, 44, 45, 46, 47, 48].map((value) => (
                <Grid key={value} item style={{ paddingTop: "inherit" }}>
                  <div id="tendercard">
                    <img
                      src={`https://picsum.photos/id/${value}/367/267`}
                      alt="no image"
                      className="rounded-md"
                    />
                    <div id="tendercardtitle">
                      <Typography variant="subtitle2" className="font-bold">
                        Construction of 1km Flyover
                      </Typography>
                      <Typography variant="body2" color="purple">
                        Seller : OEM
                      </Typography>
                      <Typography variant="body2">
                        Any Graduate/diploma
                      </Typography>
                      <Typography variant="caption" paragraph align="center">
                        Bramd: MCD | MOQ:1
                      </Typography>
                    </div>

                    <Typography
                      variant="subtitle2"
                      paragraph
                      style={{ lineHeight: "0px", fontWeight: "bold" }}
                    >
                      RS 40,00,00,00
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <br></br>
        </div>
      )}
    </React.Fragment>
  );
}
