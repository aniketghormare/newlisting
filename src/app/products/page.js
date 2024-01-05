"use client";
import React, { useEffect, useState } from "react";
import ProductGrid from "@/components/products/productgrid";
import ProductList from "@/components/products/productlist";
import RentGrid from "@/components/products/rentgrid";
import RentList from "@/components/products/rentlist";
import FilterListIcon from "@mui/icons-material/FilterList";
import { IconButton, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import Image from "next/image";
import Banner from "../../icons/tenderbanner.png";
import BasicPagination from "@/components/pagination.jsx";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
function Page() {
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
      <br /> <br /> <br />
      <Image
        className="banner"
        // src="https://ibb.co/DYgF15r"
        src={"/tenderbanner.png"}
        alt="My Image"
        width={400}
        height={400}
      />
      <div style={{ display: "flex", alignItems: "center" }} className="p-2">
        <Typography style={{ padding: "7px" ,fontSize:"20px"}}>
          {viewbuy ? "Buy" : "Rent"}
        </Typography>
        <div className="ml-auto" style={{ padding: "7px" }}>
          <IconButton>
            <FilterListIcon />
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
            view === "buy"
              ? {
                  backgroundColor: "#002b4a",
                  color: "white",
                  textTransform: "capitalize",
                }
              : { textTransform: "capitalize" }
          }
          onClick={() => setviewbuy(true)}
        >
          Buy
        </ToggleButton>
        <ToggleButton
          value="rent"
          aria-label="module"
          style={
            view === "rent"
              ? {
                  backgroundColor: "#002b4a",
                  color: "white",
                  textTransform: "capitalize",
                }
              : { textTransform: "capitalize" }
          }
          onClick={() => setviewbuy(false)}
        >
          Rent
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
            viewgrid === "grid"
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
            viewgrid === "row"
              ? {
                  backgroundColor: "#002b4a",
                  color: "white",
                  textTransform: "capitalize",
                }
              : { textTransform: "capitalize" }
          }
        >
          Row
        </ToggleButton>
      </ToggleButtonGroup>
      {viewbuy ? (
        viewgrid === "grid" ? (
          <ProductGrid />
        ) : (
          <ProductList />
        )
      ) : viewgrid === "grid" ? (
        <RentGrid />
      ) : (
        <RentList />
      )}
      <br />
      {/* <div style={{width:"100%",display:"flex",justifyContent:"space-around"}}>
        <BasicPagination />
      </div> */}
      <br />
    </div>
  );
}

export default Page;
