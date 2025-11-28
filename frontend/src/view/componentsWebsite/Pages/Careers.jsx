import React, { useEffect, useState } from 'react'
import { useTheme } from '../DarkLightMode';
import axios from 'axios';

// ICONS
import { RxLapTimer, RxDrawingPinFilled } from "react-icons/rx";
import { MdPeopleAlt, MdLocationPin } from "react-icons/md";

export default function Careers() {
  const [careerList, setCareerList] = useState([]);
  const { darkMode } = useTheme();

  // Fetch Careers List
  const fetchCareerList = async () => {
    try {
      const res = await axios.get("http://localhost:3000/careers");
      setCareerList(res.data.data || []);
    } catch (err) {
      console.error("Error fetching careers:", err);
    }
  };

  useEffect(() => {
    fetchCareerList();
  }, []);

  return (
    <>
      <div className="container my-5" data-bs-theme={darkMode ? 'dark' : 'light'}>

        {careerList.length === 0 ? (
          <span>No careers found.</span>
        ) : (
          <div className="row">
            {careerList.map((item, index) => (
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-5" key={index}>
                <div className="job-card card p-4 shadow">
                  <div className="job-card-header">

                    <div>
                      <h3 className="job-title">{item.job_role}</h3>
                      <span className="job-tag">{item.job_type}</span>
                      <p className="job-desc">{item.job_description}</p>
                    </div>

                    <div className="job-location">
                      <MdLocationPin size={21} /> <span>{item.job_location}</span>
                    </div>
                  </div>

                  <div className="job-footer">
                    <div className="me-5">
                      <RxLapTimer className='me-1' /> {item.job_type}
                    </div>
                    <div className="me-5">
                      <RxDrawingPinFilled className='me-1' /> Experience: {item.job_experience}
                    </div>
                    <div className="me-5">
                      <MdPeopleAlt className='me-1' /> Vacancy: {item.job_vacancy}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </>
  )
}