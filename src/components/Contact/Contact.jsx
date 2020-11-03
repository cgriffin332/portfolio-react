import React from 'react';

const Contact = () => {
    return (
        <div>
            <section
        class="container col-11 col-sm-7 col-lg-8 p-4 m-3 mx-auto bg-white"
      >
        <div class="row">
          <!-- page title -->
          <div class="col-12 bg-white px-3">
            <a href="https://github.com/cgriffin332" target="_blank"
              ><img
                id="icon"
                class="float-right mx-2"
                src="./assets/images/github-icon_3.png"
                alt="github icon"
            /></a>
            <a
              href="https://www.linkedin.com/in/calvin-griffin-8247521b7/"
              target="_blank"
              ><img
                id="icon"
                class="float-right"
                src="./assets/images/linkedin-icon_3.png"
                alt="linkedin icon"
            /></a>
            <h1>Contact</h1>
            <a
              class="text-dark float-right"
              href="https://docs.google.com/document/d/15ZuKnC6Rd6-zxL8zG5k4jfUj6cL0JcDl_nTcH423B6I/edit?usp=sharing"
              target="_blank"
              >View Resume</a
            >
            <p>Email: cgriffin332@gmail.com</p>
            <!-- contact form -->
            <form>
              <!-- name input -->
              <div class="mx-4 mt-4 form-group">
                <label for="nameEntry">Name</label>
                <input
                  type="name"
                  class="form-control inside-icon"
                  placeholder="Name"
                  id="name"
                  aria-describedby="nameEntry"
                />
              </div>
              <!-- email input -->
              <div class="mx-4 form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  class="form-control inside-icon"
                  placeholder="Email"
                  id="email"
                  aria-describedby="emailContact"
                />
              </div>
              <!-- message input -->
              <div class="mx-4 mb-4 form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  class="form-control"
                  placeholder="Message"
                  id="message"
                  rows="4"
                ></textarea>
              </div>
              <div>
                <!-- submit button -->
                <button class="submitBtn" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Contact;