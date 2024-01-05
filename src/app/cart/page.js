"use client";
import React, { useEffect, useState, useMemo } from "react";
import "./cart.css";
import { useRouter } from "next/navigation";
import { Grid, Typography } from "@mui/material";
import { Check, DeleteOutline } from "@mui/icons-material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { Input } from "@mui/material";
import { Checkbox } from "@mui/material";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import AddressModel from "@/components/model.jsx";
import baseurl from "@/components/base.js"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
function page() {
  const router = useRouter();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // Default severity
  const [itemQuantities, setItemQuantities] = useState({});
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setquantity] = useState(1);
  const [rentitemQuantities, setrentItemQuantities] = useState({});
  const [renttotal, setrentTotal] = useState(0);
  const [rentquantity, setrentquantity] = useState(1);
  const [cartdata, setcartdata] = useState([]);
  const [rentcartdata, setrentcartdata] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  //
  const [address, setaddress] = useState({});

  const [finalorder, setfinalorder] = useState([]);
  const [temp, settemp] = useState({});
  //

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(rentitemQuantities);
  const handleSave = () => {
    // You can save the address data here or send it to your API
    // For simplicity, we're just logging it to the console in this example.
    const obj = {
      name,
      city,
      postalCode,
      state,
      country,
      street,
    };
    setaddress(obj);
    //console.log(obj);
    // console.log("Address:", address);
    // console.log("City:", city);
    // console.log("Postal Code:", postalCode);
    handleClose(); // Close the modal after saving
  };
  //

  const getdata = () => {
    setIsLoading(true);
    fetch(`${baseurl}/api/buycart/getCartBuy`, {
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
        console.log(data);
        if (data.err && data.err.name == "TokenExpiredError") {
          setSnackbarSeverity("error");
          setSnackbarMessage("Session Expire Login one more time!!");
          setSnackbarOpen(true);
        } else {
          const initialQuantities = {};
          data.forEach((item) => {
            initialQuantities[item.id] = 1;
          });

          setcartdata(data);
          setItemQuantities(initialQuantities);
          calculateTotal(data, initialQuantities);
          // let obj={}
          // for (let i = 0; i <= data.length - 1; i++) {
          //   obj[data.id] = data.id;
          // }
          // settemp(obj)
        }
      })
      .then((err) => {
        setIsLoading(false);
        console.log(err);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // Set loading to false in case of an error
      });
  };

  //console.log(temp);
  const calculateTotal = (data, quantities) => {
    let newTotal = 0;
    data.forEach((item) => {
      const itemId = item.id;
      const itemPrice = item.price;
      const itemQuantity = quantities[itemId] || 0;
      newTotal += itemPrice * itemQuantity;
    });
    setTotal(newTotal);
  };

  const calculateRentTotal = (data, quantities) => {
    let newTotal = 0;
    data.forEach((item) => {
      const itemId = item.id;
      const itemPrice = item.price;
      const itemQuantity = quantities[itemId] || 0;
      newTotal += itemPrice * itemQuantity;
    });
    setrentTotal(newTotal);
  };

  const handleCartDelete = (id) => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (!token) {
      setSnackbarSeverity("error");
      setSnackbarMessage("Please Login First!!");
      setSnackbarOpen(true);
      return;
    }

    const apiUrl = `${baseurl}/api/buycart/${id}`;

    fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res);
        return res;
      })
      .then((data) => {
        console.log(data);
        if (data.err && data.err.name === "JsonWebTokenError") {
          setSnackbarSeverity("error");
          setSnackbarMessage("Please Login First!!");
          setSnackbarOpen(true);
        } else {
          const updatedCartData = cartdata.filter((item) => item.id !== id);
          setcartdata(updatedCartData);
          calculateTotal(updatedCartData, itemQuantities);
          console.log("Deletion Response:", data);
        }
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
      });
  };

  const handlerentCartDelete = (id) => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (!token) {
      setSnackbarSeverity("error");
      setSnackbarMessage("Please Login First!!");
      setSnackbarOpen(true);
      return;
    }

    const apiUrl = `${baseurl}/api/rentcart/${id}`;

    fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res);
        return res;
      })
      .then((data) => {
        console.log(data);
        if (data.err && data.err.name === "JsonWebTokenError") {
          setSnackbarSeverity("error");
          setSnackbarMessage("Please Login First!!");
          setSnackbarOpen(true);
        } else {
          const updatedCartData = rentcartdata.filter((item) => item.id !== id);
          setrentcartdata(updatedCartData);
          calculateRentTotal(updatedCartData, rentitemQuantities);
          console.log("Deletion Response:", data);
        }
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
      });
  };

  const handleDecrement = (id) => {
    if (itemQuantities[id] && itemQuantities[id] > 1) {
      const updatedQuantities = { ...itemQuantities };

      updatedQuantities[id]--;

      setItemQuantities(updatedQuantities);
      calculateTotal(cartdata, updatedQuantities);
    }
  };

  const handleRentDecrement = (id) => {
    if (rentitemQuantities[id] && rentitemQuantities[id] > 1) {
      const updatedQuantities = { ...rentitemQuantities };

      updatedQuantities[id]--;

      setrentItemQuantities(updatedQuantities);
      calculateRentTotal(rentcartdata, updatedQuantities);
    }
  };

  const handleIncrement = (id) => {
    if (itemQuantities[id]) {
      const updatedQuantities = { ...itemQuantities };
      updatedQuantities[id]++;

      setItemQuantities(updatedQuantities);
      calculateTotal(cartdata, updatedQuantities);
    }
  };

  const handleRentIncrement = (id) => {
    if (rentitemQuantities[id]) {
      const updatedQuantities = { ...rentitemQuantities };
      updatedQuantities[id]++;

      setrentItemQuantities(updatedQuantities);
      calculateRentTotal(rentcartdata, updatedQuantities);
    }
  };

  const getrentcart = async () => {
    await fetch(`${baseurl}/api/rentcart/getCartRent`, {
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
        console.log(data);
        if (data.err && data.err.name == "TokenExpiredError") {
          setSnackbarSeverity("error");
          setSnackbarMessage("Session Expire Login one more time!!");
          setSnackbarOpen(true);
        } else if (data.err && data.err.name === "JsonWebTokenError") {
          setSnackbarSeverity("error");
          setSnackbarMessage("Please Login First!!");
          setSnackbarOpen(true);
        } else {
          console.log(data);
          const initialrentQuantities = {};
          data.forEach((item) => {
            initialrentQuantities[item.id] = 1;
          });

          setrentcartdata(data);
          console.log(initialrentQuantities);
          setrentItemQuantities(initialrentQuantities);
          calculateRentTotal(data, initialrentQuantities);
        }
      })
      .then((err) => {
        console.log(err);
      });
  };

  const loadScript = (src) => {
    return new Promise((res) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        res(true);
      };

      script.onerror = () => {
        res(false);
      };
      document.body.appendChild(script);
    });
  };

  const handleCheckout = async () => {
    // Generate a unique order ID
    if (cartdata.length == 0 && rentcartdata.length == 0) {
      setSnackbarSeverity("info");
      setSnackbarMessage("Cart Is Empty!!");
      setSnackbarOpen(true);
      return;
    }
    if (
      Object.keys(address).length === 0 ||
      address.name === "" ||
      address.city === "" ||
      address.street === "" ||
      address.state === "" ||
      address.postalCode === "" ||
      address.country === ""
    ) {
      setSnackbarSeverity("error");
      setSnackbarMessage("Please fill in your address details.");
      setSnackbarOpen(true);
      return;
    }
    const orderId = "OD" + Math.floor(Math.random() * Date.now());

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      setSnackbarSeverity("error");
      setSnackbarMessage("Razorpay SDK failed to load. Are you online.");
      setSnackbarOpen(true);

      return;
    }
    console.log("hello");
    const paymentRes = {
      order_id: orderId,
      amount: 1,
      currency: "INR",
      payment_capture: 1,
    };

    fetch(`${baseurl}/api/payment/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify(paymentRes),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.err && data.err.name == "TokenExpiredError") {
          setSnackbarSeverity("error");
          setSnackbarMessage("Please Login First!!");
          setSnackbarOpen(true);
          return;
        }
        console.log(data.data);
        if (data.success) {
          let options = {
            key: "rzp_test_Fbyu1RzXhu3iVj",
            currency: data.data.currency,
            amount: data.data.amount,
            order_id: data.data.id,
            name: "Ayushree App",
            description: "Test Transaction",
            image: "",
            handler: async function (res) {
              console.log("res", res);
              let obj = {
                id: res.razorpay_payment_id,
              };
              fetch(`${baseurl}/api/payment/card-detail`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${JSON.parse(
                    localStorage.getItem("token")
                  )}`,
                },
                body: JSON.stringify(obj),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.success) {
                    setSnackbarSeverity("success");
                    setSnackbarMessage("Payment has Done!!");
                    setSnackbarOpen(true);
                    //alert("Payment has done");
                    let orderobj = {
                      orderAmount: data.data.amount,
                      currency: data.data.currency,
                      customerId: 13,
                      paymentId: data.data.id,
                      orderStatus: "pending",
                      orderDate: Date.now(),
                      orderId: data.data.order_id,
                    };

                    fetch(`${baseurl}/api/order/addOrder`, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${JSON.parse(
                          localStorage.getItem("token")
                        )}`,
                      },
                      body: JSON.stringify(orderobj),
                    })
                      .then((res) => {
                        if (res.status == 200) {
                          for (let i = 0; i <= cartdata.length - 1; i++) {
                            // {
                            //   "orderId": 1,
                            //   "productId": 101,
                            //   "quantity": 3,
                            //   "price": 50.00,
                            //   "image":{},
                            //   "title":"abc",
                            //   "seller":"abc",
                            //   "brand":"abc",
                            //   "moq":2,
                            //   "rating":5,
                            //   "stock":2,
                            //  "orderCategory":"buy"
                            // }
                            console.log(cartdata[i]);
                            let obj = {
                             // id:data.data.order_id,
                              orderId: data.data.order_id,
                              productId: cartdata[i].buyid,
                              quantity: cartdata[i].quantity,
                              price: cartdata[i].price,
                              image: cartdata[i].image,
                              title: cartdata[i].title,
                              seller: cartdata[i].seller,
                              brand: cartdata[i].brand,
                              moq: cartdata[i].moq,
                              rating: cartdata[i].rating,
                              stock: cartdata[i].stock,
                              orderCategory: "buy",
                              paymentId: data.data.id,
                            };

                            // {
                            //   brand: "MCD"
                            //   buyid: 1
                            //   createdAt: "2023-11-02T07:08:29.000Z"
                            //   id: 137
                            //   image: {type: 'Buffer', data: Array(15)}
                            //   moq: 5
                            //   price: 3300000
                            //   quantity: 1
                            //   rating: 4
                            //   seller: "Birla"
                            //   stock: 22
                            //   title: "Iron Rod11"
                            //   uid: "1696593516447Aniket 51"
                            //   updatedAt: "2023-11-02T07:08:29.000Z"
                            //   }

                            console.log(obj);

                            productitem(obj);
                          }
                          for (let i = 0; i <= rentcartdata.length - 1; i++) {
                            // {
                            //   "orderId": 1,
                            //   "productId": 101,
                            //   "quantity": 3,
                            //   "price": 50.00,
                            //   "image":{},
                            //   "title":"abc",
                            //   "seller":"abc",
                            //   "brand":"abc",
                            //   "moq":2,
                            //   "rating":5,
                            //   "stock":2,
                            //  "orderCategory":"buy"
                            // }

                            // rentitemQuantities
                            let obj2 = {
                              //id:data.data.order_id,
                              orderId: data.data.order_id,
                              productId: rentcartdata[i].rentid,
                              quantity: rentcartdata[i].quantity,
                              price: rentcartdata[i].price,
                              image: rentcartdata[i].image,
                              title: rentcartdata[i].title,
                              seller: rentcartdata[i].seller,
                              brand: rentcartdata[i].brand,
                              moq: rentcartdata[i].moq,
                              rating: rentcartdata[i].rating,
                              stock: rentcartdata[i].stock,
                              orderCategory: "rent",
                              paymentId: data.data.id,
                            };
                            console.log(rentcartdata[i]);
                            // {
                            //   brand: "MCD"
                            //   buyid: 1
                            //   createdAt: "2023-11-02T07:08:29.000Z"
                            //   id: 137
                            //   image: {type: 'Buffer', data: Array(15)}
                            //   moq: 5
                            //   price: 3300000
                            //   quantity: 1
                            //   rating: 4
                            //   seller: "Birla"
                            //   stock: 22
                            //   title: "Iron Rod11"
                            //   uid: "1696593516447Aniket 51"
                            //   updatedAt: "2023-11-02T07:08:29.000Z"
                            //   }

                            //console.log(obj2);

                            productitemrent(obj2);
                          }
                          address.orderId = data.data.order_id;
                          addressfun(address);
                          removecartitem(cartdata[0].uid);
                          removecartitemrent(rentcartdata[0].uid);
                          return res.json();
                        } else {
                          //alert("something wrong");
                          setSnackbarSeverity("error");
                          setSnackbarMessage(
                            "something wrong, Please Login First!!"
                          );
                          setSnackbarOpen(true);
                        }
                      })
                      // .then((data) => {
                      //   console.log(data);
                      // })
                      .catch((err) => {
                        console.log(err);
                      });

                    console.log(orderobj);
                    for (let i = 0; i <= cartdata.length - 1; i++) {
                      for (let key in itemQuantities) {
                        if (cartdata[i].id == key) {
                          cartdata[i].quantity = itemQuantities[key];
                        }
                      }
                    }
                    // console.log(rentItemQuantities);
                    //  rentitemQuantities
                    for (let i = 0; i <= rentcartdata.length - 1; i++) {
                      for (let key in rentitemQuantities) {
                        if (rentcartdata[i].id == key) {
                          rentcartdata[i].quantity = rentitemQuantities[key];
                        }
                      }
                    }
                    console.log(rentcartdata);
                    //setrentItemQuantities
                    console.log(cartdata);
                    // console.log(itemQuantities);

                    router.push("/orders");
                  }
                })
                .catch((err) => {
                  console.log(err);
                });

              // const result = await GetOrderDetails.getPaymentOrderList(
              //   res.razorpay_payment_id
              // );
              // console.log(result)
              // if (result) {
              //   const finalList = {
              //     orderId: orderId,
              //     apyment: result.data.method,
              //     addressId: newCart.addressId,
              //     shippingPrice: newCart.shippingPrice,
              //     total: result.data.amount / 100,
              //     cart: nreCart.cart,
              //     status: result.data.status,
              //     razorpay_payment_id: res.razorpay_payment_id,
              //     razorpay_order_id: res.razorpay_order_id,
              //   };
              //   console.log(finalList)
              // }
            },
            prefill: {
              email: "aniketghormare62@gmail.com",
              contact: 9340877390,
            },
            notes: {
              address: "Rozerpay Corporate Ltd",
            },
            theme: {
              color: "#1f5215",
            },
          };
          let paymentObject = new window.Razorpay(options);
          paymentObject.open();
        } else {
          alert("something is wrong");
        }
        // Initialize and open the Razorpay payment modal here using the data from the server response.
        // You are missing this part in your code.
      })
      .catch((error) => {
        console.error("Error while creating the order:", error);
      });
  };

  const addressfun = (address) => {
    console.log(address);
    fetch(`${baseurl}/api/address/addAddress`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify(address),
    })
      .then((res) => {
        if (res.status == 200) {
          //alert("Add Added");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Address", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removecartitem = (uid) => {
    // console.log(uid);
    let obj = {
      uid,
    };
    // console.log(id)
    console.log("allcartdel");
    fetch(`${baseurl}/api/buycart/deleteAllBuyCart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        if (res.status == 200) {
          //alert("cart empty");
        }
        return res.json();
      })
      .then((data) => {
        console.log("cartdel", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removecartitemrent = (uid) => {
    // console.log(uid);
    let obj = {
      uid,
    };
    // console.log(id)
    console.log("allcartdel");
    fetch(`${baseurl}/api/rentcart/deleteAllRentCart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        if (res.status == 200) {
          //alert("cart empty");
        }
        return res.json();
      })
      .then((data) => {
        console.log("cartdel", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const productitem = (obj) => {
    fetch(`${baseurl}/api/orderitem/addOrderItem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const productitemrent = (obj) => {
    fetch(`${baseurl}/api/orderitem/addOrderItem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(rentitemQuantities);
  useEffect(() => {
    //console.log("inner");
    getdata();
    getrentcart();
  }, []);
  //console.log("outer");

  return (
    <div id="mainContainer">
      <br />
      <br />
      <div className="flex justify-between">
        {/* <Typography variant="body2"  sx={{ fontSize: 24 }}>Deliver to</Typography> */}
        <p>Deliver to</p>
        <span
          style={{
            fontSize: "22px",
            color: "#4285F4",
            textDecoration: "underline",
          }}
        >
          <AddressModel
            handleOpen={handleOpen}
            open={open}
            handleClose={handleClose}
            handleSave={handleSave}
            setCity={setCity}
            setPostalCode={setPostalCode}
            city={city}
            postalCode={postalCode}
            state={state}
            setState={setState}
            name={name}
            street={street}
            country={country}
            setName={setName}
            setStreet={setStreet}
            setCountry={setCountry}
          />
        </span>
      </div>
      <hr></hr>
      <br />
      <Grid sm={12} md={12} lg={6} xl={6}>
        <Grid sm={12} md={12} lg={6} xl={6}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            cartdata.length > 0 && (
              <label>
                BUY
                <div
                  style={{
                    height: "auto",
                    width: "100%",
                    border: "2px solid blue",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  {cartdata.map((item, index) => (
                    <div key={index}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          minHeight: "64px",
                        }}
                      >
                        <div>
                          <img
                            src="/deletebutton.png"
                            onClick={() => handleCartDelete(item.id)}
                          ></img>
                        </div>
                        <div>
                          <img
                            src="https://picsum.photos/id/32/1200/600"
                            className="productIcon"
                          ></img>
                        </div>
                        <div>
                          <p>{item.title}</p>
                          <p style={{ color: "green" }}>₹{item.price}</p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div>
                            <IndeterminateCheckBoxIcon
                              onClick={() => handleDecrement(item.id)}
                              className={
                                itemQuantities[item.id] === 1
                                  ? "disabled-icon"
                                  : ""
                              }
                            />
                          </div>
                          <div>{itemQuantities[item.id] || 0}</div>
                          <div>
                            <AddBoxIcon
                              onClick={() => handleIncrement(item.id)}
                            />
                          </div>
                        </div>
                      </div>
                      <hr></hr>
                    </div>
                  ))}
                </div>
              </label>
            )
          )}
        </Grid>
        <br />
        <Grid sm={12} md={12} lg={6} xl={6}>
          {rentcartdata.length > 0 && (
            <label>
              RENT
              <div
                style={{
                  height: "auto",
                  width: "100%",
                  border: "2px solid blue",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                {rentcartdata.map((item, index) => (
                  <div key={index}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        minHeight: "64px",
                      }}
                    >
                      <div>
                        <img
                          src="/deletebutton.png"
                          onClick={() => handlerentCartDelete(item.id)}
                        ></img>
                      </div>
                      <div>
                        <img
                          src="https://picsum.photos/id/32/1200/600"
                          className="productIcon"
                        ></img>
                      </div>
                      <div>
                        <p>{item.title}</p>
                        <p style={{ color: "green" }}>₹{item.price}</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <IndeterminateCheckBoxIcon
                            onClick={() => handleRentDecrement(item.id)}
                            className={
                              rentitemQuantities[item.id] === 1
                                ? "disabled-icon"
                                : ""
                            }
                          />
                        </div>
                        <div>{rentitemQuantities[item.id] || 0}</div>
                        <div>
                          <AddBoxIcon
                            onClick={() => handleRentIncrement(item.id)}
                          />
                        </div>
                      </div>
                    </div>
                    <hr></hr>
                  </div>
                ))}
              </div>
            </label>
          )}
        </Grid>
        <Grid sm={12} md={12} xl={6} lg={6}>
          <br></br>
          <br></br>
          <div className="cartSummary">
            <div className="pricerow">
              <Typography variant="subtitle2">Subtotal</Typography>
              <Typography variant="subtitle2" fontWeight={"bold"}>
                ₹{total + renttotal}
              </Typography>
            </div>
            <div className="pricerow">
              <Typography variant="subtitle2">Tax</Typography>
              <Typography variant="subtitle2" fontWeight={"bold"}>
                ₹20
              </Typography>
            </div>
            <div className="pricerow">
              <Typography variant="subtitle2">
                Delivery Fee (inc Tax)
              </Typography>
              <Typography variant="subtitle2" fontWeight={"bold"}>
                ₹300
              </Typography>
            </div>
            <div className="pricerow">
              <Typography variant="subtitle2">Security Deposit</Typography>
              <Typography variant="subtitle2" fontWeight={"bold"}>
                ₹200
              </Typography>
            </div>
            <div className="pricerow">
              <Typography variant="subtitle2">Net Discount</Typography>
              <Typography variant="subtitle2" fontWeight={"bold"}>
                ₹800
              </Typography>
            </div>
            <div className="pricerow">
              <Typography variant="subtitle2">Net Payable</Typography>
              <Typography variant="subtitle2" fontWeight={"bold"}>
                ₹{total + renttotal + 20 + 300 + 200 - 800}
              </Typography>
            </div>
            <hr></hr>
            <div className="pricerow">
              <Typography variant="subtitle2">Grand Total</Typography>
              <Typography variant="h6" fontWeight={"bold"} color={"#4285F4"}>
                ₹{total + renttotal + 20 + 300 + 200 - 800}
              </Typography>
            </div>
            <br></br>
            <div
              className="buttonPay"
              onClick={handleCheckout}
              // onClick={() => router.push("/orders")}
            >
              Continue To Pay
            </div>
          </div>
        </Grid>
      </Grid>
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
  );
}

export default page;
