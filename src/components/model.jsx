// AddressModel.jsx
import React, { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";

function AddressModel({
  country,
  setCountry,
  street,
  setStreet,
  state,
  setState,
  postalCode,
  city,
  name,
  setName,
  setCity,
  setPostalCode,
  handleOpen,
  open,
  handleClose,
  handleSave,
}) {
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Add/Edit Address
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle color="primary">Enter Address</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            sx={{ mb: 2 }}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Street"
            variant="outlined"
            fullWidth
            value={street}
            sx={{ mb: 2 }}
            onChange={(e) => setStreet(e.target.value)}
          />

          <TextField
            label="City"
            variant="outlined"
            fullWidth
            value={city}
            sx={{ mb: 2 }}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            label="State"
            variant="outlined"
            fullWidth
            value={state}
            sx={{ mb: 2 }}
            onChange={(e) => setState(e.target.value)}
          />
          <TextField
            label="Country"
            variant="outlined"
            fullWidth
            value={country}
            sx={{ mb: 2 }}
            onChange={(e) => setCountry(e.target.value)}
          />

          <TextField
            label="Postal Code"
            variant="outlined"
            fullWidth
            value={postalCode}
            sx={{ mb: 2 }}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button style={{ backgroundColor: "#337ab7",color:"#fff",borderColor:"#2e6da4" }}  onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddressModel;
