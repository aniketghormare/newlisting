import Box from "@mui/material/Box";
const Privacy = () => {
  return (
    <div style={{ height: "auto", width: "100%", border: "1px solid white" }}>
      <p
        style={{
          color: "#4285F4",
          textDecoration: "underline",
          fontWeight: "600",
          fontSize: "20px",
        }}
      >
        Privacy Policy
      </p>
      <hr />
      <br />
      <p>
        At ChagePe, we respect and protect the privacy of our users. This
        Privacy Policy outlines the types of personal information we collect,
        how we use it, and how we protect your information.
      </p>
      <br />
      <p style={{ fontSize: "20px", fontWeight: "600" }}>
        Information We Collect
      </p>

      <p>
        When you use our app, we may collect the following types of personal
        information:
      </p>
      <Box style={{ marginLeft: 16 }}>
        <ul style={{ listStyle: "disc" }}>
          <li>
            Device Information: We may collect information about the type of
            device you use, its operating system, and other technical details to
            help us improve our app.
          </li>
          <li>
            TeUsage Information: We may collect information about how you use
            our app, such as which features you use and how often you use them.
          </li>
          <li>
            Personal Information: We may collect personal information, such as
            your name, email address, or phone number, if you choose to provide
            it to us.
          </li>
        </ul>
      </Box>
      <br />
      <p style={{ fontSize: "20px", fontWeight: "600" }}>
        How We Use Your Information
      </p>

      <p>
        When you use our app, we may collect the following types of personal
        information:
      </p>
      <Box style={{ marginLeft: 16 }}>
        <ul style={{ listStyle: "disc" }}>
          <li>
            Device Information: We may collect information about the type of
            device you use, its operating system, and other technical details to
            help us improve our app.
          </li>
          <li>
            TeUsage Information: We may collect information about how you use
            our app, such as which features you use and how often you use them.
          </li>
          <li>
            Personal Information: We may collect personal information, such as
            your name, email address, or phone number, if you choose to provide
            it to us.
          </li>
        </ul>
      </Box>
    </div>
  );
};

export default Privacy;
