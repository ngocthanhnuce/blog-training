import React, {Fragment, useState} from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Blog = () => {
  const data = JSON.parse(localStorage.getItem('myData'));
  const [arrDetail, setArrDetail] = useState(data);
  const [arrSearch] = useState(data);
  const category = [{id : '0', name: 'Thể thao'}, {id : '1', name: 'Giáo dục'}, {id : '2', name: 'Xã hội'}, {id : '3', name: "Sức khỏe"}, {id : '4', name: 'Thời tiết'}, {id : '5', name: 'Du lịch - Văn hóa'}];

  //Search theo danh mục
  const handleFilter = (listCategory) => {
    const arr = arrSearch.filter((blog) => (
      blog.category ===listCategory
    ));
    setArrDetail(arr);
  }

  const showElementStatus = (cate) => {
    let elmCategory = <span className="label label-info">Thể thao</span>;
    if (cate === "1") {
      elmCategory = <span className="label label-success">Giáo dục</span>;
    } else if (cate === "2") {
      elmCategory = <span className="label label-danger">Xã hội</span>;
    }else if (cate === "3") {
      elmCategory = <span className="label label-danger">Sức khỏe</span>;
    }
    else if (cate === "4") {
      elmCategory = <span className="label label-danger">Thời tiết</span>;
    }
    else if (cate === "5") {
      elmCategory = <span className="label label-danger">Du lịch - Văn hóa</span>;
    }
    return elmCategory;
}

 return (
  <Layout>
    <SEO title="Page two" />
    <h1 style = {{paddingLeft: "30.4%"}}>Tin tức</h1>
    <Fragment>
      <div className="row">
        <div className="col-9">
            {
              arrDetail.map((blog, index) => (
              <div className="detail" key={index}>
                <div className="blog-card-container" key={blog.id}>
                  <div className="blog-card-title">
                    <h4>{blog.name}</h4>
                  </div>
                  <div className="blog-img">
                    <img className="img" src = {`/images/${blog.img}`}/>
                  </div>
                  <div className="blog-content">
                    <div className="blog-card-content">
                      {blog.content}
                    </div>
                    <div className="blog-card-category">
                      #{showElementStatus(blog.category)}
                    </div>
                    <div className="blog-card-date">
                      #{blog.date}
                    </div>   
                  </div>      
                </div>        
              </div>  
            ))
          }
        </div>
        <div className="col-3 category">
        <h3>Danh mục</h3> 
          <div className="list-group">         
            <Fragment>
              {category.map((item) => (
                <a key = {item.id} href="#" className="list-group-item active" onClick = {() => handleFilter(item.id)}>{item.name}</a> 
                ))}
            </Fragment>
          </div>
        </div>
      </div>
    </Fragment>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
 )
}

export default Blog;
