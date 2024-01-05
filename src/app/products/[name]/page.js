"use client";
import React, { useState, useEffect } from "react";
//import "./singleproduct.css";
import { usePathname, useSearchParams } from "next/navigation";
//import { useRouter } from 'next/router'
// import { useRouter } from 'next/router';
// import { useParams } from 'next/router';
import { useRouter } from "next/navigation";
import { IconButton, Typography } from "@mui/material";
import { Rating, Grid } from "@mui/material";
import baseurl from "@/components/base.js";
import styled from "styled-components";
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
    <DIV id="mainContainer" className="container">
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
                  // fontSize: "20px",
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
    </DIV>
  );
};

export default page;

const DIV = styled.div`
  
  .container {
    height: auto;
    width: 100vw;
    border: 1px solid #f5f9ff;
    margin: auto;
    background-color: #f5f9ff;
    /* border-color:#f5f9ff */
  }

  .upperimgdiv {
    margin-top: 30px;
    height: auto;
    width: 100%;
    border: 1px solid #f5f9ff;
  }

  .upperimgdiv:hover {
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 2px;
  }

  .boldertext {
    width: 90%;
    height: auto;
    border: 1px solid #f5f9ff;
    margin: auto;
    text-align: center;
    margin-top: 30px;
  }

  .bannerdiv {
    height: auto;
    width: 100%;
    border: 1px solid #f5f9ff;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 30px;
  }

  .imgconteiner {
    height: auto;
    width: 80%;
    border: 1px solid #f5f9ff;
    margin: auto;
    margin-top: 30px;
  }

  .imgconteiner {
    display: flex;

    justify-content: space-between;
    align-items: center;
  }

  .imgdiv {
    height: 100%;
    width: 100px;
    border: 1px solid #f5f9ff;
    border-radius: 16px;
    /* margin-left: 20px; */
  }

  .imgdiv:hover {
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 1px;
  }

  .rating {
    height: auto;
    width: 80%;
    border: 1px solid #f5f9ff;
    margin: auto;
    margin-top: 30px;
  }

  .gridbox {
    height: auto;
    width: 90%;
    border: 1px solid #f5f9ff;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 30px;
  }

  .card {
    height: 90px;
    width: 250px;
    border: 1px solid #f5f9ff;
    margin: auto;
    background-color: white;
    border-radius: 12px;
    display: flex;
    font-size: 16px;
  }

  .card:hover {
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 1px;
    font-weight: 900;
  }

  .imggridbox {
    height: 100%;
    width: 40%;
    border: 1px solid #f5f9ff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contentdiv {
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .text {
    /* class="text-3xl font-bold text-black-600 text-justify" */
    font-size: 30px;
    line-height: 36px;
    font-weight: bold;
    color: black;
  }

  .highdiv {
    height: auto;
    width: 80%;
    border: 1px solid #f5f9ff;
    margin: auto;
    margin-top: 30px;
  }

  .hightext {
    color: #4285f4;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: bolder;
    line-height: normal;
  }

  .hoverspan:hover {
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 2px;
    border-radius: 12px;
    background-color: white;
  }

  .specificationdiv {
    height: auto;
    width: 80%;
    border: 1px solid #f5f9ff;
    margin: auto;
    margin-top: 20px;
  }

  .specifications {
    height: auto;
    width: 100%;
    border: 1px solid #f5f9ff;
    display: flex;
  }

  .arrowimg {
    width: 10%;
    border: 1px solid #f5f9ff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }

  .spcificationcontent {
    width: 90%;
    height: 100%;
    border: 1px solid #f5f9ff;
    display: flex;
    text-align: justify;
    align-items: center;
    padding: 5px;

    font-size: 20px;
    margin-bottom: 3px;
  }

  .downlodbuttons {
    width: 80%;
    height: auto;
    border: 1px solid #f5f9ff;
    margin: auto;

    margin-bottom: 20px;
  }

  .btnimg {
    height: 100%;

    width: 20%;
    border: 1px solid #5d8deb;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
  }

  .btncontent {
    height: 100%;
    width: 80%;
    border: 1px solid #5d8deb;
    display: flex;
    align-items: center;
    padding: 15px;
    font-size: 18px;
    border-radius: 12px;
  }

  .bigbutton {
    width: 100%;
    height: 60px;
    border: 1px solid #f5f9ff;
    background-color: #5d8deb;
    color: white;
    border-radius: 12px;
    display: flex;
  }

  .bigbutton:hover {
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 2px;
  }

  .descriptiondiv {
    height: auto;
    width: 98%;
    border: 1px solid blue;
    margin: auto;
    margin-top: 20px;
  }

  .descbutton {
    width: 100%;
    height: 50px;
    border: 1px solid #f5f9ff;
    background-color: #0061a7;
    color: white;

    display: flex;
  }

  .descbutton:hover {
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 2px;
  }

  .contentdescription {
    width: 100%;
    height: auto;
    border: 1px solid #f5f9ff;
    background-color: white;
  }

  /* style={{width:"100%",height:"100px",border:"1px solid #2F6FED",backgroundColor:"#5D8DEB",color:"white",borderShadow:"0px 0px 14px -3px #2F6FED",borderRadius:"12px",display:"flex"}} */
  @media (max-width: 1000px) and (min-width: 501px) {
    .gridbox {
      grid-template-columns: repeat(2, 1fr);
    }

    .card {
      width: 280px;
    }

    .text {
      text-align: justify;
    }

    .imgconteiner {
      width: 96%;
    }

    .bannerdiv {
      grid-template-columns: repeat(2, 1fr);
    }

    .pre {
      display: none;
    }

    .btncontent {
      font-size: 16px;
    }
  }

  @media (max-width: 500px) {
    .gridbox {
      grid-gap: 7px;
      grid-template-columns: repeat(1, 1fr) !important;
    }

    .card {
      width: 320px;
    }

    .text {
      text-align: justify;
    }

    .imgconteiner {
      width: 96%;
    }

    .bannerdiv {
      grid-template-columns: repeat(1, 1fr) !important;
    }

    .pre {
      display: none;
    }

    .nxt {
      display: none;
    }

    .spcificationcontent {
      font-size: 16px;
      margin-bottom: 0px;
    }

    .btncontent {
      font-size: 22px;
    }

    .bigbutton {
      height: 65px;
    }

    .hightext {
      font-size: 24px;
    }
  }
`;
