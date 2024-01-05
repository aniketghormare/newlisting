"use client";
import React, { useEffect, useState } from "react";
import TenderGrid from "@/components/products/tendergrid";
import TenderList from "@/components/products/tenderlist";

import AuctionGrid from "@/components/products/auctiongrid";
import AuctionList from "@/components/products/auctionlist";
import FilterListIcon from "@mui/icons-material/FilterList";
import { IconButton, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import Banner from "../../icons/tenderbanner.png";
import Image from "next/image";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
function page() {
  const [view, setView] = React.useState("buy");
  const [viewgrid, setViewgrid] = React.useState("grid");
  const [viewbuy, setviewbuy] = React.useState(true);

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  const handleChange2 = (event, nextView) => {
    setViewgrid(nextView);
  };
  useEffect(() => {
    import("@/style/products.css")
      .then((module) => {
        // CSS module has been loaded
      })
      .catch((error) => {
        // Error occurred while loading CSS module
      });
  }, []);

  return (
    <div id="mainContainer">
      <br></br>
      <Image
        className="banner"
        src="/tenderbanner1.png"
        alt="My Image"
        width={400}
        height={400}
      />
      <div style={{ display: "flex", alignItems: "center" }} className="p-2">
        <Typography style={{ padding: "7px", fontSize: "20px" }}>
          {viewbuy ? "Tender" : "Auction"}
        </Typography>
        <div className="ml-auto" style={{ padding: "7px" }}>
          {/* <GridView onClick={() => setgrid(true)}></GridView>
          <ViewList
            onClick={() => setgrid(false)}
            style={{ margin: "9px" }}
          ></ViewList> */}
          <IconButton>
            {" "}
            <FilterListIcon></FilterListIcon>
          </IconButton>
        </div>
      </div>
      <ToggleButtonGroup
        orientation="horizontal"
        value={view}
        color="primary"
        exclusive
        onChange={handleChange}
        className="togglebutton"
      >
        <ToggleButton
          value="buy"
          aria-label="list"
          style={
            view == "buy"
              ? {
                  backgroundColor: "#002b4a",
                  color: "white",
                  textTransform: "capitalize",
                }
              : { textTransform: "capitalize" }
          }
          onClick={() => setviewbuy(true)}
        >
          Tender
        </ToggleButton>
        <ToggleButton
          value="rent"
          aria-label="module"
          style={
            view == "rent"
              ? {
                  backgroundColor: "#002b4a",
                  color: "white",
                  textTransform: "capitalize",
                }
              : { textTransform: "capitalize" }
          }
          onClick={() => setviewbuy(false)}
        >
          Auction
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        orientation="horizontal"
        value={viewgrid}
        color="primary"
        exclusive
        onChange={handleChange2}
        className="togglebutton"
      >
        <ToggleButton
          value="grid"
          aria-label="grid"
          style={
            viewgrid == "grid"
              ? {
                  backgroundColor: "#002b4a",
                  color: "white",
                  textTransform: "capitalize",
                }
              : { textTransform: "capitalize" }
          }
        >
          Grid
        </ToggleButton>
        <ToggleButton
          value="row"
          aria-label="row"
          style={
            viewgrid == "row"
              ? {
                  backgroundColor: "#002b4a",
                  color: "white",
                  textTransform: "capitalize",
                }
              : { textTransform: "capitalize" }
          }
        >
          List
        </ToggleButton>
      </ToggleButtonGroup>

      {/* {viewgrid == "grid" ? (
        <ProductGrid></ProductGrid>
      ) : (
        <ProductList></ProductList>
      )} */}

      {viewbuy ? (
        viewgrid === "grid" ? (
          <TenderGrid />
        ) : (
          <TenderList />
        )
      ) : viewgrid === "grid" ? (
        <AuctionGrid />
      ) : (
        <AuctionList />
      )}
      <br></br>
    </div>
  );
}

export default page;
