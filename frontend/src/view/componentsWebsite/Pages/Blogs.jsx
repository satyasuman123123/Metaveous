import { useEffect, useState } from 'react'
import { useTheme } from '../DarkLightMode';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Blogs() {
  const [blogsList, setBlogsList] = useState([]);
  const { darkMode } = useTheme();

  // Fetch Blogs List
  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:3000/blogs");
      setBlogsList(res.data.data || []);
    } catch (err) {
      toast.error("Error fetching blogs");
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <div className="container mt-5" data-bs-theme={darkMode ? 'dark' : 'light'}>
        <div className="row py-3">

          {blogsList.length === 0 ? (
            <p>No blogs found.</p>
          ) : (
            blogsList.map((item, index) => (
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mb-5" key={index}>
                <img src={`http://localhost:3000/uploads/blogs/${item.blog_image}`} alt={item.blog_title || "Blog Image"} className="img-fluid rounded" />
                <div className="p-2">
                  <small className='font-11 text-uppercase text-primary fw-bold'>{item.blog_category}</small>
                  <h4 className='tableRow2_style'>{item.blog_title}</h4>
                  <p className='tableRow_style'>{item.blog_content}</p>
                  <small className='font-11 text-uppercase text-primary fw-bold'>
                    {new Date(item.createdAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                  </small>

                </div>
              </div>
            ))
          )}

        </div>
      </div>
    </>
  )
}