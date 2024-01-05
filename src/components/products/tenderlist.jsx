"use client";

import { FavoriteBorderOutlined } from "@mui/icons-material";
import { Rating, Typography, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Pagination, Stack } from "@mui/material";
import BasicPagination from "@/components/pagination.jsx";
import baseurl from "@/components/base.js";
export default function Example() {
  const router = useRouter();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // Default severity
  const [data, setdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    getdata(page);
  };

  const getdata = (page) => {
    const perPage = 9;
    fetch(
      `${baseurl}/api/tender/allTender?page=${page}&perPage=${perPage}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setdata(data.items);
        setTotalPages(Math.ceil(data.totalCount / perPage));
        setLoading(false);
      })
      .then((err) => {
        console.log(err);
      });
  };
  const handlecart = (product) => {
    const { brand, image, moq, price, rating, seller, title, id, stock } =
      product;
    const obj = {
      buyid: id,
      brand,
      image,
      moq,
      price,
      rating,
      seller,
      title,
      stock,
    };

    fetch(`${baseurl}/api/buycart/addCartBuy`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        // if (!res.ok) {
        //   throw new Error(`HTTP error! Status: ${res.status}`);
        // }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.err && data.err.name === "TokenExpiredError") {
          //alert("Please Login First!!");
          setSnackbarSeverity("error");
          setSnackbarMessage("Please Login First!!");
          setSnackbarOpen(true);
        } else if (
          data.message &&
          data.message.includes("Product is already in the cart")
        ) {
          //alert("Product is already in Cart");
          setSnackbarSeverity("warning");
          setSnackbarMessage("Product is already in Cart!!");
          setSnackbarOpen(true);
        } else if (data.err && data.err.name == "JsonWebTokenError") {
          // alert("Please Login First!!");
          setSnackbarSeverity("error");
          setSnackbarMessage("Please Login First!!");
          setSnackbarOpen(true);
        } else {
          //alert("Product is added to the cart!!");
          setSnackbarSeverity("success");
          setSnackbarMessage("Product is added to the cart!!");
          setSnackbarOpen(true);
        }
      })
      .catch((error) => {
        // console.error("Error:", error);
        // alert("An error occurred while adding the product to the cart.");
        setSnackbarSeverity("error");
        setSnackbarMessage(
          "An error occurred while adding the product to the cart."
        );
        setSnackbarOpen(true);
      });
  };
  useState(() => {
    getdata(currentPage);
  }, [currentPage]);
  // console.log(data);
  return (
    <>
      {loading ? (
        // Display CircularProgress while loading
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "400px",
          }}
        >
          <CircularProgress color="primary" size={50} />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {data.map((index, i) => (
            <div
              key={index}
              className="p-2 rounded-md "
              // onClick={() => router.push(`/products/${index.id}`)}
              style={{ backgroundColor: "#FFFFFF", margin: "10px" }}
            >
              <li
                className="flex p-2 rounded-md"
                style={{ border: "2px solid cadetblue" }}
              >
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                  <img
                    onClick={() => router.push(`/products/${index.id}`)}
                    src={`https://picsum.photos/id/${i}/400/600`}
                    alt="img"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base">
                      <Typography variant="body2" className="font-bold">
                        {index.title}
                        {/* Iron Rod */}
                      </Typography>
                      <FavoriteBorderOutlined
                        onClick={() => handlecart(index)}
                        style={{ color: "aquamarine" }}
                      ></FavoriteBorderOutlined>
                    </div>
                    <Typography variant="body2" color="purple">
                      Seller : {index.seller}
                    </Typography>

                    <Typography variant="caption" paragraph>
                      Brand: {index.brand} | MOQ:{index.moq}
                    </Typography>
                  </div>

                  <div className="flex flex-1 items-end justify-between text-sm">
                    {/* <p className="text-gray-500">Qty 2</p> */}
                    <Rating value={index.rating} size="small" readOnly></Rating>
                    <div className="flex">
                      <Typography
                        variant="subtitle2"
                        paragraph
                        style={{
                          lineHeight: "0px",
                          fontWeight: "bold",
                          color: "#9124a8",
                        }}
                      >
                        ₹{index.price}
                        {/* ₹40,00,00,00 */}
                      </Typography>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          ))}
          {/* Snackbar component */}
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={() => setSnackbarOpen(false)}
          >
            <MuiAlert
              elevation={6}
              variant="filled"
              onClose={() => setSnackbarOpen(false)}
              severity={snackbarSeverity}
            >
              {snackbarMessage}
            </MuiAlert>
          </Snackbar>
        </div>
      )}
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
    </>
  );
}
