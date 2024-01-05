"use client";
import React from "react";
import "./singleorder.css";
const page = () => {
  return (
    <div id="mainContainer"  style={{ backgroundColor: "#f5f9ff" }}>
     <br />
        <br/>
      <div style={{ backgroundColor: "#f5f9ff", padding: "15px" }}>
        
        <p className="orderno">
          Order no:<span className="idcolor">#BU9856421</span>
        </p>
        <br />
        <hr />
        <br />
        <p className="bigtext">
          Sokia total station DGPS MX56794 Sokia total station DGPS MX56794{" "}
        </p>
        <br />
        <div className="bluecontainer">
          <div className="smalldiv">
            <div className="smalldivimg">
              <img src="/blue1.png" alt="blue img" />
            </div>
            <div className="smalldivcontent">
              <p>Delivered on 27-04-2023</p>
            </div>
          </div>
          <div className="smalldiv">
            <div className="smalldivimg">
              <img src="/blue2.png" alt="blue img" />
            </div>
            <div className="smalldivcontent">
              A186, JMD Garden, Sector 47, Sohna road, Gurugram-HR 122001
            </div>
          </div>
          <div className="smalldiv">
            <div className="smalldivimg">
              <img src="/blue3.png" alt="blue img" />
            </div>
            <div className="smalldivcontent">Krishna Thakur, 7011583846</div>
          </div>
        </div>
        {/*  */}
        <br />
        <p className="status">Status</p>
        <br />
        <div className="progresscontainer" id="border">
          <div className="smalldiv">
            <div
              className="smalldivimg"
              style={{ backgroundColor: "#dfeef1", borderRadius: "7px" }}
            >
              <img src="/checkout.png" alt="blue img" />
            </div>
            <div className="progresssmalldivcontent" style={{ color: "black" }}>
              <div>
                <div style={{ fontWeight: "600" }}>Order Placed</div>
                <div>24-04-1999 | 12:15:59</div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="progresssmalldiv">
            <div className="smalldivimg">
              <img src="/lineblue.png" alt="blue img" />
            </div>
            <div
              className="progresssmalldivcontent"
              style={{ color: "black" }}
            ></div>
          </div>
          {/*  */}
          <div className="smalldiv">
            <div
              className="smalldivimg"
              style={{ backgroundColor: "#fdecc6", borderRadius: "7px" }}
            >
              <img src="/progress2.png" alt="blue img" />
            </div>
            <div className="progresssmalldivcontent" style={{ color: "black" }}>
              <div>
                <div style={{ fontWeight: "600" }}>Order Accepted</div>
                <div>24-04-1999 | 12:15:59</div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="progresssmalldiv">
            <div className="smalldivimg">
              <img src="/lineblue.png" alt="blue img" />
            </div>
            <div
              className="progresssmalldivcontent"
              style={{ color: "black" }}
            ></div>
          </div>
          {/*  */}
          <div className="smalldiv">
            <div
              className="smalldivimg"
              style={{ backgroundColor: "#e5e1fe", borderRadius: "7px" }}
            >
              <img src="/progress4.png" alt="blue img" />
            </div>
            <div className="progresssmalldivcontent" style={{ color: "black" }}>
              <div>
                <div style={{ fontWeight: "600" }}>Order Shipped</div>
                <div style={{ textAlign: "justify" }}>
                  24-04-1999 | 12:15:59 Blue Dart AWB 46587568716819
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="progresssmalldiv">
            <div className="smalldivimg">
              <img src="/lineblue.png" alt="blue img" />
            </div>
            <div
              className="progresssmalldivcontent"
              style={{ color: "black" }}
            ></div>
          </div>
          {/*  */}
          <div className="smalldiv">
            <div
              className="smalldivimg"
              style={{ backgroundColor: "#cde7ff", borderRadius: "7px" }}
            >
              <img src="/progress3.png" alt="blue img" />
            </div>
            <div className="progresssmalldivcontent" style={{ color: "black" }}>
              <div>
                <div style={{ fontWeight: "600" }}>Order Delivered</div>
                <div>24-04-1999 | 12:15:59</div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <br />
        <div className="pricediv" style={{ backgroundColor: "#f5f9ff" }}>
          <div className="pricecontent">
            <p>QTY</p>
            <p>Subtotal</p>
            <p>Tax</p>
            <p>Delivery Fee inc Tax</p>
            <p>Net Discount</p>
            <p>Net Payble</p>
            <p>Paid</p>
            <p>Due</p>
            <p>Tracking no</p>
            <p>Carrier</p>
          </div>
          <div className="pricedigits">
            <p>5</p>
            <p>₹549198</p>
            <p>₹4546</p>
            <p>₹4564</p>
            <p>₹98911</p>
            <p>₹548878489</p>
            <p>₹548878489</p>
            <p>₹0</p>
            <p>IN652685699AR</p>
            <p>India Post</p>
          </div>
        </div>
        {/*  */}
        <div className="invoicediv">
          <button className="invoicebtn">
            <div
              style={{
                width: "20%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#0992ff",
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src="/invoice1.png" />
              </div>
            </div>
            <div
              style={{
                width: "60%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>Download Invoice</div>
              <div>INV-65464174654</div>
            </div>
            <div
              style={{
                width: "20%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src="/cloude.png" />
              </div>
            </div>
          </button>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default page;
