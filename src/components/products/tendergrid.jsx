"use client";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { Typography, Rating, Grid, CircularProgress } from "@mui/material";
//import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Pagination, Stack } from "@mui/material";
import BasicPagination from "@/components/pagination.jsx";
import baseurl from "@/components/base.js";
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

export default function tendergrid() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // Default severity
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const products = [
    {
      id: 1,
      name: "Earthen Bottle",
      href: "#",
      price: "$48",
      imageSrc: "https://picsum.photos/id/29/200/300",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 2,
      name: "Nomad Tumbler",
      href: "#",
      price: "$35",
      imageSrc: "https://picsum.photos/id/22/200/300",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 3,
      name: "Focus Paper Refill",
      href: "#",
      price: "$89",
      imageSrc: "https://picsum.photos/id/20/200/300",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 4,
      name: "Machined Mechanical Pencil",
      href: "#",
      price: "$35",
      imageSrc: "https://picsum.photos/id/38/200/300",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 3,
      name: "Focus Paper Refill",
      href: "#",
      price: "$89",
      imageSrc: "https://picsum.photos/id/30/200/300",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 4,
      name: "Machined Mechanical Pencil",
      href: "#",
      price: "$35",
      imageSrc: "https://picsum.photos/id/58/200/300",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    // More products...
  ];
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
          // alert("Please Login First!!");
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
          //alert("Please Login First!!");
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
        console.error("Error:", error);
        setSnackbarSeverity("error");
        setSnackbarMessage(
          "An error occurred while adding the product to the cart."
        );
        setSnackbarOpen(true);
        // alert("An error occurred while adding the product to the cart.");
      });
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
    getdata(page);
  };

  const getdata = (page) => {
    const perPage = 8;
    // fetch("http://localhost:8080/api/buy/allBuy")
    fetch(
      `${baseurl}/api/tender/allTender?page=${page}&perPage=${perPage}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setdata(data.items);
        setLoading(false);

        setTotalPages(Math.ceil(data.totalCount / perPage));
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getdata(currentPage);
  }, [currentPage]);
  console.log(data);
  return (
    <React.Fragment>
      <div className="bg-#F5F9FF">
        <div className="mx-auto max-w-2xl px-3 sm:px-4 sm:py-18 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          {loading ? ( // Display CircularProgress while loading
            <CircularProgress
              color="secondary"
              size={50}
              style={{ margin: "auto" }}
            />
          ) : (
            // size={100}
            <Grid container spacing={1}>
              {data.map((product, index) => (
                <Grid item xs={6} md={4} sm={6} lg={3} xl={2} key={index}>
                  <div id="productcard">
                    <FavoriteBorderOutlined
                      style={{
                        position: "absolute",
                        right: 12,
                        top: 12,
                        color: "aquamarine",
                      }}
                      onClick={() => handlecart(product)}
                    ></FavoriteBorderOutlined>
                    <img
                      src={`https://picsum.photos/id/${product.id}/367/267`}
                      alt="no image"
                      className="rounded-md"
                      id="productimage"
                    />
                    <div
                      id="productcardtitle"
                      onClick={() => router.push(`/products/${product.id}`)}
                    >
                      <Typography variant="body2" className="font-bold">
                        {product.title}
                      </Typography>
                      <Typography variant="body2" color="purple">
                        Seller : {product.seller}
                      </Typography>
                      <Typography variant="caption" paragraph>
                        Brand: {product.brand} | MOQ:{product.moq}
                      </Typography>
                      <Rating value={product.rating} size="small" readOnly />
                      <Typography
                        variant="subtitle2"
                        paragraph
                        style={{
                          lineHeight: "0px",
                          fontWeight: "bold",
                          color: "#9124a8",
                        }}
                      >
                        ₹{product.price}
                      </Typography>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          )}
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
        </div>
      </div>
    </React.Fragment>
  );
}
