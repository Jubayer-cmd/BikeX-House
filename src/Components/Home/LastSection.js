import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
const LastSection = () => {
  return (
    <div>
      <section id="counts" className="counts text-center">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <p>Business Summary</p>
          </header>
          <div className="row gy-2">
            <div className="col-lg-3 col-md-6">
              <div
                className="count-box"
                data-aos-delay="800"
                data-aos="fade-up"
              >
                <i className="bi bi-emoji-smile"></i>
                <div>
                  <CountUp end={36} redraw={true} suffix="+">
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="count-box"
                data-aos-delay="600"
                data-aos="fade-up"
              >
                <i className="bi bi-journal-richtext"></i>
                <div>
                  <CountUp end={24} redraw={true} suffix="+">
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                  <p>Projects</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="count-box"
                data-aos-delay="400"
                data-aos="fade-up"
              >
                <i className="bi bi-headset"></i>
                <div>
                  <CountUp end={80} redraw={true} suffix="+">
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                  <p>Hours Of Support</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="count-box"
                data-aos-delay="200"
                data-aos="fade-up"
              >
                <i className="bi bi-people"></i>
                <div>
                  <CountUp end={20} redraw={true} suffix="+">
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="footer-newsletter"
        data-aos="fade-up-right"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h4>Our Newsletter</h4>
              <p>
                Subscribe to get our mothly dose of Warehouse knowledge,
                inspiration and news.
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <input type="email" name="email" id="" placeholder="E-mail" />
              <input type="submit" value="Subscribe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
