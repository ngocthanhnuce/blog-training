/* eslint-disable linebreak-style */
import React, {useState, Fragment} from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { v4 as uuidv4 } from 'uuid';
import EditBlog from './edit-blog';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const AddBlog = () => {
  const listBlog = [];
  const initialState = { id: '', name: '', content: '', date: '', category: ''};
  localStorage.getItem('myData', JSON.stringify(listBlog));
  const item = JSON.parse(localStorage.getItem('myData', (listBlog)));
  const [items, setItem] = useState(item ? item : []);
  const [currentBlog, setCurrentBlog] = useState(initialState);
  const [blog, setBlog] = useState(initialState);
  const [image, setImage] = useState('');
  
  const handleChange = (key) => (e) => { 
    setBlog({...blog, [key] : e.target.value});
  }
  
  //Add Blog
  const addBlog = (blog) => {
    blog.id = uuidv4();
    setItem([...items, blog])
  };
   const valueCreate = {
     id: blog.id,
     name: blog.name, 
     content:  blog.content, 
     img: image.name, 
     date: blog.date,
     category: blog.category
   } 
  const handleSubmit = (e) => {
    e.preventDefault();
    if( !valueCreate.name || !valueCreate.content) return;
    addBlog(valueCreate);
    setBlog(initialState);
    localStorage.setItem('myData', JSON.stringify([...items, valueCreate]));
    NotificationManager.success('Thêm thành công', 'Thông báo!');
  }

  //Delete Blog
  const deleteBlog = (id) =>{
    const arr = items.filter((blog) => (
      blog.id !==id
    ));
    setItem(arr);
    localStorage.setItem('myData', JSON.stringify(arr));
    NotificationManager.error('Xóa thành công', 'Thông báo!');

  };
  
  //Edit Blog
  const [editing, setEditing] = useState(false);
  const updateBlog = (id, updateBlog) => {
    setEditing(false);
    const arrEdit = items.map( blog => (blog.id === id ? updateBlog : blog))
    setItem(arrEdit);
    localStorage.setItem('myData', JSON.stringify(arrEdit));
    NotificationManager.info('Sửa thành công', 'Thông báo!');
  }

  const editRow = blog => {
		setEditing(true)
    setCurrentBlog({ id: blog.id, name: blog.name, content: blog.content, date: blog.date,  img : blog.img, category: blog.category});
  }

  return(
    <Layout>
        <SEO title="Page two" />
          <div className="row">
            <div className="col-8">
              {
                editing ? (
                  <EditBlog currentBlog = {currentBlog} updateBlog = {updateBlog} editing = {editing}/>
                ) : (
                  <Fragment>
                    <h2 className="text">Thêm mới</h2>
                    <form onSubmit = {handleSubmit}>
                      <div className="form-group row">
                        <p className="col-sm-2 col-form-label">Tên:</p>
                        <div className="col-sm-10">
                            <input className="form-control col-sm-10" type="text" name = "name" value = {blog.name} placeholder="Tên bài viết" onChange = { handleChange('name') } required/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <p className="col-sm-2 col-form-label">Nội dung:</p>
                        <textarea className="form-control col-sm-8 mt-15" value = {blog.content} name = "content" rows={4} onChange = { handleChange('content') } placeholder="Nội dung" required/>
                      </div>
                      <div className="form-group row">
                        <p className="col-sm-2 col-form-label">Ngày viết:</p>
                        <div className="col-sm-6">
                            <input type="date" name = "date" value = {blog.date} className="form-control" onChange = { handleChange('date') } required/>
                        </div>
                      </div>
                      <div className="row">
                        <p  className="col-sm-2 col-form-label mt-20">Chọn ảnh:</p>
                        <div> <input className="form-control-file col-sm-10 " type="file" name = "img"  onChange = { (e)=> setImage(e.target.files[0]) } /></div>
                      </div>
                      <div className="form-group row ">
                        <p className="col-sm-2 col-form-label">Danh mục:</p>
                        <div className="col-sm-9"> 
                          <select className="custom-select" name = "category" value = {blog.category} placeholder="Danh mục" onChange = { handleChange('category') }>
                          <option>Tất cả</option>
                            <option value={0}>Thể thao</option>
                            <option value={1}>Giáo dục</option>
                            <option value={2}>Xã hội</option>
                            <option value={3}>Sức khỏe</option>
                            <option value={4}>Thời tiết</option>
                            <option value={5}>Du lịch - Văn hóa</option>
                          </select>
                        </div>
                      </div>
                       <div className = "mt-5">
                        <button className="button btn btn-primary" >Add new blog</button>
                       </div>
                    </form>
                    <NotificationContainer/>
                  </Fragment>       
                )
              }     
            </div> 
            <div className="col-4">
              <h2>Danh sách bài viết</h2>
              <Fragment>
                <table>
                  <thead>
                    <tr>
                      <th>Tên bài viết</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.length > 0 ? (
                      items.map((blog) => (
                          <tr key={blog.id}>
                            <td className="note-name" >{blog.name}</td>
                            <td>
                            <button className="button muted-button btn btn-warning mt" onClick={() => {editRow(blog)}}>Edit</button>
                            <button className="button muted-button btn btn-danger" onClick = {() => {deleteBlog(blog.id)}}>Delete</button>
                            </td>
                        </tr>  
                        ))
                      ) : (
                        <tr>
                          <td colSpan={3}>No users</td>
                        </tr> 
                    )}
                  </tbody>
                </table>
              </Fragment>
            </div>
          </div>      
        <Link to="/">Go back to the homepage</Link>      
  </Layout>
  )
}
export default AddBlog
