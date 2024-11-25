import React from 'react';
import './Discount.css'; // Make sure to keep your custom styles

function Discount({ allitems }) {
  return (
    <div className="container mt-5">
      <div className="row">
        {allitems.map(item => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={item.imgUrl}
                alt={item.productName}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{item.productName}</h5>
                <p className="card-text">
                  <strong>Category:</strong> {item.category}
                </p>
                <p className="card-text">
                  <strong>Price:</strong> ${item.price}
                </p>
                <p className="card-text">
                  <strong>Discount:</strong> {item.discount}%
                </p>
                <p className="card-text">
                  <strong>Rating:</strong> {item.avgRating} / 5
                </p>
                <button className="btn btn-primary">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discount;
