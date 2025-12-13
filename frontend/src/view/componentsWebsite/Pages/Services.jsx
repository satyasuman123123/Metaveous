import React from 'react'

export default function Services() {
  return (
    <>
      <div className="container mt-5">
        <div className="row py-3">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mb-5">
                <img src="./services/security-default-offer-card.avif" alt="Services image" className="img-fluid rounded" />
                <div className="p-2">
                  <small className='font-11 text-uppercase text-primary fw-bold'>2</small>
                  <h4 className='tableRow2_style'>qq</h4>
                  <p className='tableRow_style'>ww</p>
                  <small className='font-11 text-uppercase text-primary fw-bold'>
                    {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                  </small>

                </div>
              </div>
        </div>
      </div>
    </>
  )
}
