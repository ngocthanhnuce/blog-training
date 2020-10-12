import React from "react";

const Footer = () => (
  <div
    style={{
      background: "#086A87",
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        marginTop: " 15%",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <div>
        <footer>
            <div className="container footer">
                <p>© Do Ngoc Thanh Website 2020. All Rights Reserved.</p>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="/">Privacy</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/">Terms</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/">FAQ</a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
          
    </div>
  </div>
);
export default Footer
