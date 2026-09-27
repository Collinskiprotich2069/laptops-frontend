import { useState, useEffect } from "react";

function LaptopDetails() {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/laptops/")
      .then((res) => res.json())
      .then((data) => setLaptops(data));
  }, []);

  return (
    <>
      <div className="laptops-card">
              <p>These are the laptop details</p>
              {laptops.map((laptop) => {
                  return (
                      <li key={laptop.id}>
                          <ul>{laptop.name}</ul>
                          <ul>{laptop.brand}</ul>
                          <ul><img src={laptop.image} alt="img" /></ul>
                          <ul><img src={laptop.first_image} alt="img" /></ul>
                          <ul><img src={laptop.second_image} alt="img" /></ul>
                          <ul><img src={laptop.third_image} alt="img" /></ul>
                          <ul>{laptop.rom}</ul>
                          <ul>{laptop.ram}</ul>
                          <ul>{laptop.storage_type}</ul>
                          <ul>{laptop.inches}</ul>
                          <ul>{laptop.description}</ul>
                          <ul>{laptop.availability}</ul>
                      </li>
                  )
              })}
      </div>
    </>
  );
}

export default LaptopDetails;
