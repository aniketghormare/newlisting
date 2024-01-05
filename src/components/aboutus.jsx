import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
const Aboutus = () => {
  return (
    <div style={{ height: "auto", width: "100%", border: "1px solid white" }} >
      <p
        style={{
          color: "#4285F4",
          textDecoration: "underline",
          fontWeight: "600",
          fontSize: "20px",
        }}
      >
        About Ayushree App
      </p>

      <hr />
      
      <ListItem button style={{ display: "flex", flexDirection: "column" }}>
        <Box style={{ margin: "auto" }}>
          <img src="/logosign.jpg" style={{ width: 80, height: 80 }}></img>
        </Box>
        <Box style={{fontSize:"20px"}} className="namelogo">Ayushree App v9.5.7</Box>
      </ListItem>
      <hr/>
      <ListItem
        button
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <ListItemText primary="Job Vacancy" />
        <img
          src="/forward.jpg"
          // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
        ></img>
      </ListItem>
      <ListItem
        button
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <ListItemText primary="Developer" />
        <img
          src="/forward.jpg"
          // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
        ></img>
      </ListItem>
      <ListItem
        button
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <ListItemText primary="Partner" />
        <img
          src="/forward.jpg"
          // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
        ></img>
      </ListItem>
      <ListItem
        button
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <ListItemText primary="Accessibility" />
        <img
          src="/forward.jpg"
          // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
        ></img>
      </ListItem>
      <ListItem
        button
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <ListItemText primary="Terms of Use" />
        <img
          src="/forward.jpg"
          // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
        ></img>
      </ListItem>
      <ListItem
        button
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <ListItemText primary="Feedback" />
        <img
          src="/forward.jpg"
          // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
        ></img>
      </ListItem>
      <ListItem
        button
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <ListItemText primary="Rate us" />
        <img
          src="/forward.jpg"
          // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
        ></img>
      </ListItem>
      <ListItem
        button
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <ListItemText primary="Visit Our Website" />
        <img
          src="/forward.jpg"
          // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
        ></img>
      </ListItem>
      <ListItem
        button
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <ListItemText primary="Follow us on Social Media" />
        <img
          src="/forward.jpg"
          // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
        ></img>
      </ListItem>
    </div>
  );
};

export default Aboutus;
