import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  const containerStyle = {
    paddingTop: "30px",
    paddingBottom: "30px",
  };

  const imageStyle = {
    width: "100%",
  };

  const titleStyle = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const descriptionStyle = {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#333",
  };

  return (
    <Layout title={"About Us - IITJ SwapShop"}>
      <div className="container mt-4" style={containerStyle}>
        <div className="row">
          <div className="col-md-6">
            <img
              src="/images/about.jpeg"
              alt="About IITSwapShop"
              style={imageStyle}
            />
          </div>
          <div className="col-md-6">
            <h1> </h1>
            <h1 style={titleStyle}>Welcome to IITSwapShop</h1>
            <p style={descriptionStyle}>
              At IITSwapShop, we believe in the power of community and
              sustainability. Our platform is designed to bring together the
              vibrant and dynamic community of IIT Jodhpur, fostering a culture
              of sharing, reusing, and helping one another.
            </p>
            <p style={descriptionStyle}>
              Buy and sell pre-loved items within the IITJ community, whether
              you're looking for textbooks, electronics, furniture, or anything
              else. Join us in building a more eco-conscious campus while
              benefiting from the treasures within our own community.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
