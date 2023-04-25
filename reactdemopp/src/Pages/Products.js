import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [items, setItems] = useState([]);

  const fetchData = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setItems(response.data);
      console.log(response.data);
      console.log(items);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <section>
        <div class="container my-5">
          <header class="mb-4">
            <h3>New products</h3>
          </header>

          {/* {items.map((item) => (
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div class="card w-100 my-2 shadow-2-strong">
                  <img
                    src={item.image}
                    class="card-img-top"
                  />
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">
                      {item.title}
                    </h5>
                    <p class="card-text">$ {item.price}</p>
                    <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                      <a href="#!" class="btn btn-primary shadow-0 me-1">
                        Add to cart
                      </a>
                      <a
                        href="#!"
                        class="btn btn-light border px-2 pt-2 icon-hover"
                      >
                        <i class="fas fa-heart fa-lg text-secondary px-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))} */}

          <div class="col-lg-9">
              <div class="row">
            {items.map((item) => (
                <div class="col-lg-4 col-md-6 col-sm-6 d-flex">
                  <div class="card w-100 my-2 shadow-2-strong">
                    <img
                      src={item.image}
                      class="card-img-top "
                    />
                    <div class="card-body d-flex flex-column">
                      <div class="d-flex flex-row">
                        <h5 class="mb-1 me-1">$ {item.price}</h5>
                        {/* <span class="text-danger">
                          <s>$49.99</s>
                        </span> */}
                      </div>
                      <p class="card-text">
                        {item.title}
                      </p>
                      <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                        <a href="#!" class="btn btn-primary shadow-0 me-1">
                          Add to cart
                        </a>
                        <a
                          href="#!"
                          class="btn btn-light border icon-hover px-2 pt-2"
                        >
                          <i class="fas fa-heart fa-lg text-secondary px-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
            </div>

            <hr />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
