import React from "react";

function Category() {
     return (
          <main>
               <div className="cat-head">
                    <h1>Category</h1>
                    <div className="btn-cont">
                         <button><h5 className="prev">Previous</h5></button>
                         <button><h5 className="next">Next</h5></button>
                    </div>
               </div>


               <div className="cont">
                    <div className="cat-img">
                         <h3>Real Estate</h3>
                    </div>
                    <div className="yacht cat-img ">
                         <h3>Yachts</h3>
                    </div>
                    <div className="hotel cat-img">
                         <h3>Hotels</h3>
                    </div>
                    <div className="car cat-img">
                         <h3>Cars</h3>
                    </div>
                    <div className="j cat-img">
                         <h3>Real Estate</h3>
                    </div>


               </div>

          </main>




     )
}

export default Category