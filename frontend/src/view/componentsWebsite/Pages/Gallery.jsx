import { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import { useTheme } from "../DarkLightMode";

export default function Gallery() {
  const [galleryList, setGalleryList] = useState([]);
  const { darkMode } = useTheme();

  // Fetch Gallery List
  const fetchGallery = async () => {
    try {
      const res = await axios.get("http://localhost:3000/gallery");
      setGalleryList(res.data.data || []);
    } catch (err) {
      toast.error("Error fetching gallery");
    }
  };
  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <>
      <div className='container mt-5' data-bs-theme={darkMode ? 'dark' : 'light'}>
        <div className="row py-3">

          {galleryList.length === 0 ? (
            <p>No gallery images found.</p>
          ) : (
            galleryList.map((item, index) => (
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 mb-5" key={index}>
                <div className="card shadow text-center">
                  <img src={`http://localhost:3000/uploads/gallery/${item.gallery_image}`} alt={item.gallery_title || "Gallery Image"} className="img-fluid rounded-top" />

                  <div className="p-2 text-center">
                    <small>{item.gallery_title}</small>
                  </div>
                </div>
              </div>
            ))
          )}

        </div>
      </div>
    </>
  );
}
