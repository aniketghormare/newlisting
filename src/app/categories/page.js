"use client";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/navigation";
import { Grid, Paper } from "@mui/material";
import { useEffect } from "react";
import Image from "next/image";
import Banner from "../../icons/tenderbanner.png";
import baseurl from "@/components/base.js"
export default function page() {
  const router = useRouter();

  useEffect(() => {
    import("@/style/category.css")
      .then((module) => {
        // CSS module has been loaded
      })
      .catch((error) => {
        // Error occurred while loading CSS module
      });
  }, []);

  const cat = [
    {
      name: "Civil Supplies",
      image: 22,
      subcat: [
        {
          title: "Cements & White",
          image: 23,
        },
        {
          title: "TMT Steel Bars",
          image: 33,
        },
        {
          title: "AAC Blocks",
          image: 43,
        },
        {
          title: "Granite & Marbles",
          image: 53,
        },
      ],
    },
    {
      name: "Electricals",
      image: 52,
      subcat: [
        {
          title: "Cements & White",
          image: 23,
        },
        {
          title: "TMT Steel Bars",
          image: 33,
        },
        {
          title: "AAC Blocks",
          image: 43,
        },
        {
          title: "Granite & Marbles",
          image: 53,
        },
      ],
    },
    {
      name: "Plumbing",
      image: 62,
      subcat: [
        {
          title: "Cements & White",
          image: 23,
        },
        {
          title: "TMT Steel Bars",
          image: 33,
        },
        {
          title: "AAC Blocks",
          image: 43,
        },
        {
          title: "Granite & Marbles",
          image: 53,
        },
      ],
    },
    {
      name: "Sanitary",
      image: 72,
      subcat: [
        {
          title: "Cements & White",
          image: 23,
        },
        {
          title: "TMT Steel Bars",
          image: 33,
        },
        {
          title: "AAC Blocks",
          image: 43,
        },
        {
          title: "Granite & Marbles",
          image: 53,
        },
      ],
    },
    {
      name: "Paints & Finishes",
      image: 82,
      subcat: [
        {
          title: "Cements & White",
          image: 23,
        },
        {
          title: "TMT Steel Bars",
          image: 33,
        },
        {
          title: "AAC Blocks",
          image: 43,
        },
        {
          title: "Granite & Marbles",
          image: 53,
        },
      ],
    },
    {
      name: "Hardware & Glass",
      image: 92,
      subcat: [
        {
          title: "Cements & White",
          image: 23,
        },
        {
          title: "TMT Steel Bars",
          image: 33,
        },
        {
          title: "AAC Blocks",
          image: 43,
        },
        {
          title: "Granite & Marbles",
          image: 53,
        },
      ],
    },
  ];

  return (
    <div id="maincategory">
      <br></br>
      <Image
        className="banner"
        src={Banner}
        alt="My Image"
        width={400}
        height={400}
      />
      <Typography variant="h6" className="p-4">
        Choose from Categories
      </Typography>
      {cat.map((item, index) => (
        <Accordion key={++index} TransitionProps={{ unmountOnExit: true }} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
           
          >
            <img
              src={`https://picsum.photos/id/${item.image}/367/267`}
              style={{ width: "62px", height: "55px", borderRadius: "7px" }}
            ></img>
            <Typography>&nbsp;&nbsp;{item.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid item xs={12} style={{ marginTop: 5 }}>
              <Grid container justifyContent="center" spacing={2}>
                {item.subcat.map((data, index) => (
                  <Grid key={index} item>
                    <div className="pb-8" >
                      <Paper
                        elevation={2}
                        onClick={() => router.push("/products")}
                        sx={{
                          height: "17.5vmin",
                          width: "17.5vmin",

                          // backgroundColor: (theme) =>
                          //   theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                        }}
                      >
                        <img
                          src={`https://picsum.photos/id/${data.image}/367/267`}
                          alt="no image"
                          style={{ height: "inherit" }}
                          // width={100}
                          // height={100}
                          className="rounded-md"
                        />
                        <Typography
                          variant="subtitle2"
                          paragraph
                          align="center"
                        >
                          {data.title}
                        </Typography>
                      </Paper>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
