import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contact-us.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            For any query or info about the product, feel free to call !
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.iitjswapshop@ecom.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +91-7461967775
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
