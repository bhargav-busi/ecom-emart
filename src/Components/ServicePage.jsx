import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './Servicepage.css'
 

const ServicePage = () => {
  const features = [
    {
      icon: "fa-solid fa-truck",
      title: "Free Shipping",
      description: "Lorem ipsum dolor sit amet.",
      bgColor: "bg-light-orange",
    },
    {
      icon: "fa-solid fa-credit-card",
      title: "Safe Payment",
      description: "Lorem ipsum dolor sit amet.",
      bgColor: "bg-light-green",
    },
    {
      icon: "fa-solid fa-shield-alt",
      title: "Secure Payment",
      description: "Lorem ipsum dolor sit amet.",
      bgColor: "bg-light-yellow",
    },
    {
      icon: "fa-solid fa-headphones-alt",
      title: "Back Guarantee",
      description: "Lorem ipsum dolor sit amet.",
      bgColor: "bg-light-blue",
    },
  ];

  return (
    <div className="container py-5">
      <div className="row g-4">
        {features.map((feature, index) => (
          <div key={index} className="col-md-3">
            <div
              className={`card text-center p-4 ${feature.bgColor} shadow-sm`}
            >
              <div className="mb-3">
                <i className={`${feature.icon} fa-2x text-dark`}></i>
              </div>
              <h5 className="card-title">{feature.title}</h5>
              <p className="card-text text-muted">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
