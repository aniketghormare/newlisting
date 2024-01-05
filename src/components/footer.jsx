"use client";
import Link from "next/link";
import { Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h2">
              About Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum fermentum, sem vel commodo volutpat, nibh velit cursus
              odio, id mattis ligula dui eu mauris.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h2">
              Quick Links
            </Typography>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h2">
              Categories
            </Typography>
            <ul>
              <li>
                <Link href="/category/electronics">Electronics</Link>
              </li>
              <li>
                <Link href="/category/clothing">Clothing</Link>
              </li>
              <li>
                <Link href="/category/home">Home</Link>
              </li>
              <li>
                <Link href="/category/sports">Sports</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h2">
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              123 Main Street, City, Country
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Phone: +1 123 456 7890
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
