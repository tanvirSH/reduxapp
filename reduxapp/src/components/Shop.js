import React from "react";

const Shop = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Add to cart
              </a>
            </div>
            <div class="card-footer border-success text-end">
              <a href="#" className="btn btn-primary mx-2">
                -
              </a>
              <a href="#" className="btn btn-primary mx-2">
                +
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
