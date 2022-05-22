import React from "react";
import { Button } from "react-bootstrap";

const TwoSection = () => {
  return (
    <div>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row gx-0">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="content">
                <h3>Who We Are</h3>
                <h2>
                  We are team from Bangladesh and we help you to manage your
                  Electronic store easily.
                </h2>
                <p>
                  A warehouse is a building for storing goods. Warehouses are
                  used by manufacturers, importers, exporters, wholesalers,
                  transport businesses, customs, etc. They are usually large
                  plain buildings in industrial parks on the outskirts of
                  cities, towns, or villages.
                </p>
                <div className="text-center text-lg-start">
                  <Button>
                    Read more <i className="bi bi-arrow-right"></i>
                  </Button>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out-left"
              data-aos-duration="1500"
            >
              <img
                src="https://img.freepik.com/free-vector/logistic-workers-carrying-boxes-with-loaders_74855-6541.jpg?t=st=1651397689~exp=1651398289~hmac=987c9400f6992d1799795727920b09381aa83b3dfb732b83e4c58c53396bb5c3&w=740"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="values">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Our Values</h2>
            <p>Your Satisfactions is our main priority</p>
          </header>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="box">
                <img
                  src="https://i.ibb.co/Z8Bmbfz/values-1.png"
                  className="img-fluid"
                  alt=""
                />
                <h3>Manage Your Inventory</h3>
                <p>
                  You'll always need to keep your inventory at an optimal level
                  for your retail business growth. It minimizes the risk of a
                  profit deficit.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="box">
                <img
                  src="https://i.ibb.co/CvcJ2qJ/values-2.png"
                  className="img-fluid"
                  alt=""
                />
                <h3>Take Faster support</h3>
                <p>
                  An effective way to lower employee turnover is to hire the
                  right employees from the start. The hiring process needs to
                  select candidates whose skill sets fit the job description.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="box">
                <img
                  src="https://i.ibb.co/HzfY2Cr/values-3.png"
                  className="img-fluid"
                  alt=""
                />
                <h3>Modern management tools</h3>
                <p>
                  You always need to innovate store management processes and
                  streamline them in the long term. However, human error is
                  inevitable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TwoSection;
