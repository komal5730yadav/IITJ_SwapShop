import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />

        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "IITJ SwapShop",
  description:
    "A MERN Stack website for Trading your used products for IITJ Students",
  keywords: "mern,react,node,mongodb,express,bootstrap",
  author: "Komal Priya(B20MT025)",
};

export default Layout;
