"use client";
import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import "./orders.css";
import Link from "next/link";
import baseurl from "@/components/base.js";
function Page() {
  const [showGrid, setShowGrid] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All"); // Default status

  const [alldata, setalldata] = useState([]);
  const [allbuy, setallbuy] = useState([]);
  const [allrent, setallrent] = useState([]);
  const getalldata = () => {
    fetch(`${baseurl}/api/orderitem/allOrderItem`, {
      //mode: 'no-cors',
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setalldata(data);
        let buydata =
          data.length > 0 &&
          data.filter((item) => {
            return item.orderCategory == "buy";
          });
        setallbuy(buydata);
        let rentdata =
          data.length > 0 &&
          data.filter((item) => {
            return item.orderCategory == "rent";
          });
        setallrent(rentdata);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const orderStatus = [
    { name: "All" },
    { name: "Buy" },
    { name: "Rent" },
    { name: "Tender" },
    { name: "Auction" },
    { name: "Directories" },
    { name: "Jobs" },
  ];

  useEffect(() => {
    // Initially set the showGrid state to true to show all grid items during mounting
    setShowGrid(true);
    getalldata();
  }, []);

  const handleStatusCardClick = (status) => {
    // Set the selected status to determine what to render
    setSelectedStatus(status);
  };
  console.log(alldata);
  return (
    <React.Fragment>
      <div id="mainContainer">
        <br />
        All orders
        <br></br>
        <br></br>
        <Grid container spacing={2}>
          {orderStatus &&
            orderStatus.map((item, index) => (
              <Grid item xs={3} md={3} sm={3} lg={2} xl={2} key={index}>
                <div
                  className="statuscard"
                  style={{ alignItems: "center", cursor: "pointer" }}
                  onClick={() => handleStatusCardClick(item.name)}
                >
                  {item.name}
                </div>
              </Grid>
            ))}
        </Grid>
        <br></br>
        <hr></hr>
        <br></br>
        {showGrid && (
          <Grid container spacing={1}>
            {renderGridItems(selectedStatus, alldata, allbuy, allrent)}
          </Grid>
        )}
      </div>
    </React.Fragment>
  );
}

function renderGridItems(status, alldata, allbuy, allrent) {
  // Define different sets of data to render based on status

  const dataSets = {
    All: alldata,
    Buy: allbuy,
    Rent: allrent,
    Tender: [],
    Auction: [],
    Directories: [],

    Jobs: [],
    // Add other statuses and their respective data sets here
  };

  const data = dataSets[status] || [];

  return data.length > 0 ? (
    data.map((item, index) => (
      <Grid item xs={12} md={6} sm={6} lg={4} xl={3} key={index}>
        {/* Render the Grid items based on the selected status */}
        {/* You can customize the content here */}
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
                Product: {item.title}
                {/* Material one */}
              </span>
            </Typography>
            <Typography variant="subtitle2">Qty-{item.quantity}</Typography>
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

            <Typography variant="subtitle2" color={"primary"} mt={1}>
              <div style={{ display: "flex" }}>
                <img width="50%" src="/process.png" />
                &nbsp;Processing...
              </div>
            </Typography>
          </div>
          {/*  */}
        </div>
      </Grid>
    ))
  ) : (
    <p
      style={{
        textAlign: "center",
        fontSize: "18px",
        color: "#888",
        marginTop: "20px",
        margin: "auto",
      }}
    >
      No Data to Display
    </p>
  );
}

export default Page;
