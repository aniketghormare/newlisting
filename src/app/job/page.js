"use client";
import "./job.css";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Banner from "../../icons/tenderbanner.png";
import { IconButton, Typography } from "@mui/material";
import { Pagination, Stack } from "@mui/material";
import Link from "next/link";
import BasicPagination from "@/components/pagination.jsx";
import baseurl from "@/components/base.js"
const page = () => {
  const [jobdata, setjobdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const getjobdata = (page) => {
    const perPage = 8;
    fetch(
      `${baseurl}/api/job/allJob?page=${page}&perPage=${perPage}`
    )
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
    <div
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
          {jobdata.length>0 && jobdata.map((el, index) => {
            return (
              <Link href={`/job/${el.id}`} key={el.id}>
                <div
                  className="card"
                  style={{
                    backgroundColor: index % 2 !== 0 ? "#f1f7fc" : "white" ,
                    borderColor: index % 2 !== 0 ? "#f1f7fc" : "white" ,
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
    </div>
  );
};

export default page;
