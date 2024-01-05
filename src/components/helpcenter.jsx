const Helpcenter = () => {
  return (
    <div style={{ height: "auto", width: "100%", border: "1px solid white" }}>
      <p style={{ color: "#4285F4", textDecoration: "underline" ,fontWeight:"600",fontSize:"20px"}}>
        Contact us
      </p>

      <hr />
      <br />
      <button
        className="button"
        style={{
          display: "flex",
        //   justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={"/contact.jpg"} />
       
        <p>Contact us</p>
      </button>
     
      <br />
      <button
       className="button"
        style={{
          display: "flex",
        //   justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={"/whatsapp.jpg"} />
        
        <p>WhatsApp</p>
      </button>
     
      
      <br />
      <button
       className="button"
        style={{
          display: "flex",
        //   justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={"/insta.jpg"} />
        
        <p>Instagram</p>
      </button>
     
      
      <br />
      <button
       className="button"
        style={{
          display: "flex",
        //   justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={"/fb.jpg"} />
       
        <p>Facebook</p>
      </button>
     
    
      <br />
      <button
       className="button"
        style={{
          display: "flex",
        //   justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={"/twitter.jpg"} />
       
        <p>Twitter</p>
      </button>
     
      
      <br />
      <button
       className="button"
        style={{
          display: "flex",
        //   justifyContent: "center",
       
          alignItems: "center",
        }}
      >
        <img src={"/website.jpg"} />
       
        <p>Website</p>
      </button>
     
    </div>
  );
};

export default Helpcenter;
