import { Link } from "gatsby";
import React from "react";

const Header = () => (
  <nav className="fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar">
    <div className="collapse navbar-collapse"
    style={{
      background: "#086A87",
      marginBottom: "1.45rem",
      padding: 0
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Blogs
        </Link>
        <ul style={{ listStyle: "none", float: "right" }}>
          <li style={{ display: "inline-block", marginRight: "1rem" }}>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "x-large",
                marginLeft: 500
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li style={{ display: "inline-block", marginRight: "1rem" }}>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "x-large"
              }}
              to="/add-blog"
            >
              Admin
            </Link>
          </li>
          <li style={{ display: "inline-block", marginRight: "1rem" }}>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "x-large"
              }}
              to="/blog"
            >
              Blog
            </Link>
          </li>
        </ul>
      </h1>
    </div>
  </div>
  </nav>
);
export default Header
