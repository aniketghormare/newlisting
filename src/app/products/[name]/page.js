"use client";
import React, { useState, useEffect } from "react";
import "./singleproduct.css";
import { usePathname, useSearchParams } from "next/navigation";
//import { useRouter } from 'next/router'
// import { useRouter } from 'next/router';
// import { useParams } from 'next/router';
import { useRouter } from "next/navigation";
import { IconButton, Typography } from "@mui/material";
import { Rating, Grid } from "@mui/material";
import baseurl from "@/components/base.js";
const page = ({ params }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // const params = useParams();
  const [getid, setgetid] = useState(null);
  const [banners, setBanners] = useState([]);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(1);
  const [descshow, setdescshow] = useState(false);
  const [manushow, setmanushow] = useState(false);
  const [customshow, setcustomshow] = useState(false);
  const [shippingshow, setshippingshow] = useState(false);
  const [singledata, setsingledata] = useState({});

  const router = useRouter();

  const bannerData = [
    {
      id: 1,
      imageUrl: "https://picsum.photos/id/32/1200/600",
    },
    {
      id: 2,
      imageUrl: "https://picsum.photos/id/43/1200/600",
    },
    {
      id: 3,
      imageUrl: "https://picsum.photos/id/54/1200/600",
    },
    {
      id: 4,
      imageUrl: "https://picsum.photos/id/36/1200/600",
    },
    {
      id: 5,
      imageUrl: "https://picsum.photos/id/55/1200/600",
    },
  ];
  const getdata = () => {
    fetch(`${baseurl}/api/buy/${getid}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setsingledata(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setBanners(bannerData);
    setgetid(+params.name);
  }, []);
  useEffect(() => {
    getdata();
  }, [getid]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [banners]);

  if (banners.length === 0) {
    return <div>Loading...</div>;
  }

  const currentBanner = banners[currentBannerIndex];
  const preBanner = banners[currentBannerIndex - 1];
  const nxtBanner = banners[currentBannerIndex + 1];

  if (currentBannerIndex == bannerData.length - 2) {
    setCurrentBannerIndex(1);
  }

  return (
    <div id="mainContainer" className="container">
      <br /> <br />
      <div className="upperimgdiv">
        <img
          className="upperbigimg"
          height="100%"
          width="100%"
          className="w-screen h-40 rounded-md banner"
          src="/bottleimg.png"
          alt="img"
        />
      </div>
      <div className="boldertext">
        <p className="text">{singledata.title}</p>
      </div>
      <div className="bannerdiv">
        <IconButton className="pre">
          <img
            className="w-screen h-auto rounded-md banner"
            src={preBanner.imageUrl}
            alt={`Banner ${preBanner.id}`}
          />
        </IconButton>
        <IconButton>
          <img
            className="w-screen h-auto rounded-md banner"
            src={currentBanner.imageUrl}
            alt={`Banner ${currentBanner.id}`}
          />
        </IconButton>
        <IconButton className="nxt">
          <img
            className="w-screen h-auto rounded-md banner"
            src={nxtBanner.imageUrl}
            alt={`Banner ${nxtBanner.id}`}
          />
        </IconButton>
      </div>
      <div className="imgconteiner">
        {[0, 1, 2, 3, 4].map((el, index) => {
          return (
            <div key={index + 1} className="imgdiv">
              <img width="100%" src="/manimg.png" />
            </div>
          );
        })}
      </div>
      <div className="rating">
        <Rating value={4} size="small" readOnly></Rating>
      </div>
      <div className="gridbox">
        {[0, 1, 2, 3, 4, 5].map((el, index) => {
          return (
            <div key={index + 1} className="card">
              <div className="imggridbox">
                <img src="/gridimg.png" />
              </div>
              <div className="contentdiv">
                <p style={{ fontSize: "18px", fontWeight: "600" }}>Brand</p>
                <p style={{ fontSize: "14px", fontWeight: "300" }}>
                  Sokia By ABCD
                </p>
                <p style={{ fontSize: "14px", fontWeight: "300" }}>
                  Gurugran, India
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="highdiv">
        <p className="hightext">
          <span className="hoverspan">Quick highlights</span>
        </p>
      </div>
      <div className="specificationdiv">
        <div className="specifications">
          <div className="arrowimg">
            <div>
              <img src="/arrow.png" />
            </div>
          </div>
          <div className="spcificationcontent">
            <div>
              <p>Seller: {singledata.seller}</p>
            </div>
          </div>
        </div>
        <div className="specifications">
          <div className="arrowimg">
            <div>
              <img src="/arrow.png" />
            </div>
          </div>
          <div className="spcificationcontent">
            <div>
              <p>Brand: {singledata.brand}</p>
            </div>
          </div>
        </div>
        <div className="specifications">
          <div className="arrowimg">
            <div>
              <img src="/arrow.png" />
            </div>
          </div>
          <div className="spcificationcontent">
            <div>
              <p>Stock: {singledata.stock}</p>
            </div>
          </div>
        </div>
        <div className="specifications">
          <div className="arrowimg">
            <div>
              <img src="/arrow.png" />
            </div>
          </div>
          <div className="spcificationcontent">
            <div>
              <p>Rating: {singledata.rating}</p>
            </div>
          </div>
        </div>
        <div className="specifications">
          <div className="arrowimg">
            <div>
              <img src="/arrow.png" />
            </div>
          </div>
          <div className="spcificationcontent">
            <div>
              <p>MOQ: {singledata.moq}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="downlodbuttons">
        <div style={{ marginTop: "20px" }}>
          <button
            className="bigbutton"
            style={{ borderShadow: "0px 0px 14px -3px #2F6FED" }}
          >
            <div className="btnimg">
              <img src="/downlodimg.png" />
            </div>
            <div className="btncontent">Download Product Doc</div>
          </button>
        </div>
        <div style={{ marginTop: "20px" }}>
          <button
            className="bigbutton"
            style={{ borderShadow: "0px 0px 14px -3px #2F6FED" }}
          >
            <div className="btnimg">
              <img src="/emailimg.png" />
            </div>
            <div className="btncontent">Contact Supllier</div>
          </button>
        </div>
      </div>
      <div className="descriptiondiv">
        <div>
          <button className="descbutton" style={{ borderColor: "#0061A7" }}>
            <div className="btncontent" style={{ borderColor: "#0061A7" }}>
              Description
            </div>
            <div className="btnimg" style={{ borderColor: "#0061A7" }}>
              <img
                src="/Vectorwhite.png"
                onClick={() => setdescshow(!descshow)}
              />
            </div>
          </button>
        </div>
        {descshow && (
          <div className="contentdescription">
            <p style={{ padding: "20px", textAlign: "justify" }}>
              Lorem Ipsum is a dummy text used to fill in webpages with
              placeholder content. It's a simple way to add text without the
              need to write complex sentences. Lorem Ipsum generators are
              available online and are used by web designers and developers to
              quickly and easily produce content for websites. The Lorem Ipsum
              generator uses a library of more than 200 Latin words to generate
              randomized content that looks realistic and is easy to read.
            </p>
          </div>
        )}
      </div>
      <div className="descriptiondiv">
        <div>
          <button className="descbutton" style={{ borderColor: "#0061A7" }}>
            <div className="btncontent" style={{ borderColor: "#0061A7" }}>
              Manufacturer Details
            </div>
            <div className="btnimg" style={{ borderColor: "#0061A7" }}>
              <img
                src="/Vectorwhite.png"
                onClick={() => setmanushow(!manushow)}
              />
            </div>
          </button>
        </div>
        {manushow && (
          <div className="contentdescription">
            <p style={{ padding: "20px", textAlign: "justify" }}>
              Lorem Ipsum is a dummy text used to fill in webpages with
              placeholder content. It's a simple way to add text without the
              need to write complex sentences. Lorem Ipsum generators are
              available online and are used by web designers and developers to
              quickly and easily produce content for websites. The Lorem Ipsum
              generator uses a library of more than 200 Latin words to generate
              randomized content that looks realistic and is easy to read.
            </p>
          </div>
        )}
      </div>
      <div className="descriptiondiv">
        <div>
          <button className="descbutton" style={{ borderColor: "#0061A7" }}>
            <div className="btncontent" style={{ borderColor: "#0061A7" }}>
              Customization
            </div>
            <div className="btnimg" style={{ borderColor: "#0061A7" }}>
              <img
                src="/Vectorwhite.png"
                onClick={() => setcustomshow(!customshow)}
              />
            </div>
          </button>
        </div>
        {customshow && (
          <div className="contentdescription">
            <p style={{ padding: "20px", textAlign: "justify" }}>
              Lorem Ipsum is a dummy text used to fill in webpages with
              placeholder content. It's a simple way to add text without the
              need to write complex sentences. Lorem Ipsum generators are
              available online and are used by web designers and developers to
              quickly and easily produce content for websites. The Lorem Ipsum
              generator uses a library of more than 200 Latin words to generate
              randomized content that looks realistic and is easy to read.
            </p>
          </div>
        )}
      </div>
      <div className="descriptiondiv">
        <div>
          <button className="descbutton" style={{ borderColor: "#0061A7" }}>
            <div className="btncontent" style={{ borderColor: "#0061A7" }}>
              Shipping
            </div>
            <div className="btnimg" style={{ borderColor: "#0061A7" }}>
              <img
                src="/Vectorwhite.png"
                onClick={() => setshippingshow(!shippingshow)}
              />
            </div>
          </button>
        </div>
        {shippingshow && (
          <div className="contentdescription">
            <p style={{ padding: "20px", textAlign: "justify" }}>
              Lorem Ipsum is a dummy text used to fill in webpages with
              placeholder content. It's a simple way to add text without the
              need to write complex sentences. Lorem Ipsum generators are
              available online and are used by web designers and developers to
              quickly and easily produce content for websites. The Lorem Ipsum
              generator uses a library of more than 200 Latin words to generate
              randomized content that looks realistic and is easy to read.
            </p>
          </div>
        )}
      </div>
      <div className="descriptiondiv">
        <div>
          <button
            className="descbutton"
            style={{
              borderColor: "#0061A7",
              backgroundColor: "rgb(14,68,109)",
            }}
          >
            <div
              className="btncontent"
              style={{
                borderColor: "rgb(14,68,109)",
                width: "50%",
                fontSize: "20px",
                justifyContent: "center",
              }}
            >
              ₹ {singledata.price}
            </div>
            <div
              className="btnimg"
              style={{ borderColor: "rgb(14,68,109)", width: "50%" }}
            >
              <button
                className="btncontent"
                style={{
                  borderColor: "rgb(14,68,109)",
                  fontSize: "20px",
                  justifyContent: "center",
                }}
                onClick={() => router.push(`/cart`)}
              >
                Buy Now
              </button>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
