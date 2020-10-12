/* eslint-disable linebreak-style */
import React, {useState, Fragment, useEffect} from "react";
import { Link } from "gatsby";

const EditBlog = (props) => {
    const [blog, setBlog] = useState(props.currentBlog);
    useEffect(
        () => {
            setBlog(props.currentBlog)
        },
        [props]
        )

    const handleChange = (e)=> {
        const {name, value} = e.target;
        setBlog({...blog, [name] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.updateBlog(blog.id, blog);
        }
    
    return(
        <Fragment>
            <h1 className="text">Sửa bài viết</h1>
                <form onSubmit = {handleSubmit}>
                    <div className="form-group row">
                        <p className="col-sm-2 col-form-label">Tên bài viết:</p>
                        <div className="col-sm-10">
                            <input className="form-control col-sm-10" type="text" name = "name" value = {blog.name} placeholder="Tên" onChange = { handleChange } required/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <p className="col-sm-2 col-form-label">Nội dung:</p>
                        <textarea className="form-control col-sm-8 mt-15" value = {blog.content} name = "content" rows={4} onChange = { handleChange } placeholder="Nội dung" required/>
                    </div>
                    <div className="form-group row">
                        <p className="col-sm-2 col-form-label">Ngày viết:</p>
                        <div className="col-sm-6">
                            <input type="date" name = "date" value = {blog.date} className="form-control" onChange = { handleChange } required/>
                        </div>
                    </div>
                    <div className="form-group row">
                    <p className="col-sm-2 col-form-label">Danh mục:</p>
                    <div className="col-sm-10"> 
                      <select className="custom-select" name = "category" value = {blog.category} placeholder="Danh mục" onChange = { handleChange}>
                        <option value={0}>Thể thao</option>
                        <option value={1}>Giáo dục</option>
                        <option value={2}>Xã hội</option>
                        <option value={3}>Sức khỏe</option>
                        <option value={4}>Thời tiết</option>
                        <option value={5}>Du lịch - Văn hóa</option>
                      </select>
                    </div>
                  </div>
                    <button className="button btn btn-primary mt-5">Edit blog</button>
                </form>
                <Link to="/">Go back to the homepage</Link>      
        </Fragment>
    )
}

export default EditBlog;
