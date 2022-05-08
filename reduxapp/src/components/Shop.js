import React from "react";

const Shop = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Deposit/Withdrow money</h5>
              <p className="card-text">Update balance</p>
            </div>
            <div className="card-footer border-success ">
              <a href="/" className="btn btn-primary mx-2">
                -
              </a>
              <a href="/" className="btn btn-primary mx-2">
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
