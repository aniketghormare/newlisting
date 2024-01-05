"use client";
//import "./job.css";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Banner from "../../icons/tenderbanner.png";
import { IconButton, Typography } from "@mui/material";
import { Pagination, Stack } from "@mui/material";
import Link from "next/link";
import BasicPagination from "@/components/pagination.jsx";
import baseurl from "@/components/base.js";
import styled from "styled-components";
const page = () => {
  const [jobdata, setjobdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const getjobdata = (page) => {
    const perPage = 8;
    fetch(`${baseurl}/api/job/allJob?page=${page}&perPage=${perPage}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setjobdata(data.items);
        setTotalPages(Math.ceil(data.totalCount / perPage));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
    getjobdata(page);
    //console.log("hello1")
  };
  useEffect(() => {
    getjobdata(currentPage);
  }, [currentPage]);

  //console.log(jobdata);
  //console.log("hello2");
  return (
    <DIV
      id="mainContainer"
      style={{ height: "auto", border: "1px solid white" }}
    >
      <div className="bigimgdiv">
        <Image
          className="banner"
          src={Banner}
          alt="My Image"
          width={400}
          height={400}
        />
      </div>
      <div className="containerdiv">
        <p className="text">Jobs For You</p>
        <div className="listdiv">
          {/* backgroundColor={index%2==0? "#f1f7fc":"white"} */}
          {jobdata.length > 0 &&
            jobdata.map((el, index) => {
              return (
                <Link href={`/job/${el.id}`} key={el.id}>
                  <div
                    className="card"
                    style={{
                      backgroundColor: index % 2 !== 0 ? "#f1f7fc" : "white",
                      borderColor: index % 2 !== 0 ? "#f1f7fc" : "white",
                    }}
                  >
                    <div
                      className="cardupper"
                      style={{
                        borderColor: index % 2 !== 0 ? "#f1f7fc" : "white",
                      }}
                    >
                      <div
                        className="upper1"
                        style={{
                          borderColor: index % 2 !== 0 ? "#f1f7fc" : "white",
                        }}
                      >
                        <p className="typo">
                          {/* Senior Civil Engineer */}
                          {el.post}
                        </p>
                        <div
                          style={{
                            height: "30px",
                            width: "auto",
                            borderColor: index % 2 !== 0 ? "#f1f7fc" : "white",
                            display: "flex",
                            alignItems: "center",
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
                              {el.exp_start}-{el.exp_end} Year
                            </span>
                          </div>
                          <div className="blue2">
                            <span
                              style={{
                                backgroundColor: "#def1ff",
                                padding: "2px",
                              }}
                            >
                              {el.education}
                              {/* Graduation/Diploma */}
                            </span>
                          </div>
                        </div>
                        <Typography className="typocompany">
                          {el.company}
                          {/* Oriental Structure Engineers Private Limited */}
                        </Typography>
                      </div>
                      <div
                        className="upper2"
                        style={{
                          borderColor: index % 2 !== 0 ? "#f1f7fc" : "white",
                          textAlign: "right",
                        }}
                      >
                        <Typography
                          className="pricetypo"
                          style={{ textAlign: "right" }}
                        >
                          ₹ {el.sal_start}-{el.sal_end} LPA
                        </Typography>
                        <Typography className="placetypo">
                          {/* Gurugram, HR */}
                          {el.place}
                        </Typography>
                        <Typography className="emptypo">
                          {el.emp_start}-{el.emp_end} Emp
                        </Typography>
                        <Typography
                          className="emptypo"
                          style={{
                            color: "#4285F4",
                            textAlign: "right",
                          }}
                        >
                          {el.working}
                          {/* Remote */}
                        </Typography>
                        {/* <div
                        className="remotediv"
                        marginRight={0}
                        style={{
                          borderColor: index % 2 !== 0 ? "#f1f7fc" : "white",
                          textAlign: "right",
                        }}
                      >
                        <Image src="/remote.png" height={13} width={15} />
                        <Typography
                          className="emptypo"
                          style={{
                            color: "#4285F4",
                            textAlign: "right",
                          }}
                        >
                          {el.working}
                          
                        </Typography>
                      </div> */}
                      </div>
                    </div>
                    <div
                      className="cardlower"
                      style={{
                        borderColor: index % 2 !== 0 ? "#f1f7fc" : "white",
                      }}
                    >
                      <div>
                        <Typography className="desctext">
                          {el.description}
                          {/* Computer Engineer who can code and work on Autodesk
                        an... */}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
      <br />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <BasicPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <br />
    </DIV>
  );
};

export default page;

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
    text-align: right;
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
