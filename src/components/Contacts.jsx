import React from "react";
import AnimatedPage from "./AnimatedPage";

function Contacts() {
  return (
    <>
      <AnimatedPage>
        <body>
          <h1>Contact me: </h1>
          <div className="contacts-wrapper">
            <div className="data-wrapper">
              <a href="mailto:t3roh@uwaterloo.ca" className="link">
                <div className="text">
                  t3roh@uwaterloo.ca
                </div>
              </a>
            </div>
            <div className="data-wrapper">
              <a href="https://www.linkedin.com/in/theoroh/" className="link">
                <div className="text">
                  https://www.linkedin.com/in/theoroh/
                </div>
              </a>
            </div>
            <div className="data-wrapper">
              <div>(778) 979-2114</div>
            </div>
          </div>
        </body>

      </AnimatedPage>
    </>
  );
};

export default Contacts;