import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import "font-awesome/css/font-awesome.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="row">
      <div className = "col-6">
        <h1>Trang tin tức</h1>
        <p>Welcome to your news blogs</p>
        <p>Now go build something great.</p>
        <Link to="/blog/">Xem tin tức</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </div>
      <div className = "col-6">
        <div className="blog-img">
          <img className="img" src = {`/images/real-madrid.png`}/>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage;