import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "@/style/myorder.css";
import baseurl from "@/components/base.js";
const Myorder = () => {
  const [alldata, setalldata] = useState([]);
  const getalldata = () => {
    fetch(`${baseurl}/api/orderitem/allOrderItem`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        setalldata(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getalldata();
  }, []);
  //console.log(alldata);
  return (
    <div style={{ height: "auto", width: "100%", border: "1px solid white" }}>
      <p
        style={{
          color: "#4285F4",
          textDecoration: "underline",
          fontWeight: "600",
          fontSize: "20px",
        }}
      >
        My Order
      </p>
      <hr />
      {/*  */}
      {alldata.length>0 ? (
        alldata.map((item, index) => {
          return (
            <Grid item xs={12} md={6} sm={6} lg={4} xl={1} key={index}>
              <div className="ordercard">
                {/* ... Your content ... */}
                <div className="ordercardsection">
                  <Typography variant="subtitle2">
                    <span style={{ color: "#A9A9A9" }}>Order Id:</span>{" "}
                    <span style={{ color: "#4D4D4D", fontWeight: "600" }}>
                      {item.orderId}
                      {/* #000023 */}
                    </span>
                  </Typography>
                  <Typography variant="subtitle2">
                    <span style={{ color: "#A9A9A9" }}>
                      {item.createdAt.substring(0, 10)}
                      {/* 20-02-2024 */}
                    </span>
                  </Typography>
                </div>
                <hr />
                <div className="ordercardsection">
                  <Typography variant="subtitle2">
                    <span style={{ color: "#4D4D4D", fontWeight: "600" }}>
                      Product:
                      {item.title}
                      {/* Material one */}
                    </span>
                  </Typography>
                  <Typography variant="subtitle2">
                    Qty-
                    {item.quantity}
                  </Typography>
                </div>
                <div className="ordercardsection">
                  <div>
                    <Link href={`/singleorder`}>
                      <Button
                        size="text-blue-200"
                        color="#20B288"
                        variant="filled"
                        className="detailsbtn"
                        backgroundColor="#E6F5F1"
                      >
                        Details
                      </Button>
                    </Link>
                  </div>

                  {/* <Typography variant="subtitle2" color={"primary"} mt={1}>
                    <div style={{ display: "flex" }}>
                      <img width="50%" src="/process.png" />
                      &nbsp;Processing...
                    </div>
                  </Typography> */}
                </div>
                {/*  */}
              </div>
            </Grid>
          );
        })
      ) : (
        <p  style={{
          textAlign: "center",
          fontSize: "18px",
          color: "#888",
          marginTop: "40px",
          margin: "auto",
        }}>No Data to Display</p>
      )}

      {/*  */}
    </div>
  );
};

export default Myorder;
