import React from "react";
import gIcon from "../../images/github-icon_3.png";
import lIcon from "../../images/linkedin-icon_3.png";


const Contact = () => {
  return (
    <div>
      <section className="container col-11 col-sm-7 col-lg-8 p-4 m-3 mx-auto bg-white">
        <div className="row">
          {/* <!-- page title --> */}
          <div className="col-12 bg-white px-3">
            <a href="https://github.com/cgriffin332" 
            rel="noreferrer"
            target="_blank">
              <img
                id="icon"
                className="float-right mx-2"
                src={gIcon}
                alt="github icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/calvin-griffin-8247521b7/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                id="icon"
                className="float-right"
                src={lIcon}
                alt="linkedin icon"
              />
            </a>
            <h1>Contact</h1>
            <a
              className="text-dark float-right"
              href="https://docs.google.com/document/d/15ZuKnC6Rd6-zxL8zG5k4jfUj6cL0JcDl_nTcH423B6I/edit?usp=sharing"
              el="noreferrer"
              target="_blank"
            >
              View Resume
            </a>
            <p>Email: cgriffin332@gmail.com</p>
            {/* <!-- contact form --> */}
            <form>
              {/* <!-- name input --> */}
              <div className="mx-4 mt-4 form-group">
                <label for="nameEntry">Name</label>
                <input
                  type="name"
                  className="form-control inside-icon"
                  placeholder="Name"
                  id="name"
                  aria-describedby="nameEntry"
                />
              </div>
              {/* <!-- email input --> */}
              <div className="mx-4 form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control inside-icon"
                  placeholder="Email"
                  id="email"
                  aria-describedby="emailContact"
                />
              </div>
              {/* <!-- message input --> */}
              <div className="mx-4 mb-4 form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  placeholder="Message"
                  id="message"
                  rows="4"
                ></textarea>
              </div>
              <div>
                {/* <!-- submit button --> */}
                <button className="submitBtn" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
