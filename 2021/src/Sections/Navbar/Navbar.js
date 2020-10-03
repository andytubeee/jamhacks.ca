import React, { Component } from "react";
import { Button } from "antd";
import { motion } from "framer-motion";

import "./Navbar.css";

import { ReactComponent as Linkedin } from "../../Assets/linkedin.svg";
import { ReactComponent as Instagram } from "../../Assets/instagram.svg";

import { ReactComponent as Twitter } from "../../Assets/twitter.svg";
import { ReactComponent as Facebook } from "../../Assets/facebook.svg";

import { ReactComponent as LinkedinS } from "../../Assets/linkedinS.svg";
import { ReactComponent as InstagramS } from "../../Assets/instagramS.svg";
import { ReactComponent as TwitterS } from "../../Assets/twitterS.svg";
import { ReactComponent as FacebookS } from "../../Assets/facebookS.svg";

//animation variants
const MobileVariants = {
  open: { height: "100vh" },
  closed: { height: 0 },
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.addEventListener("scroll", function (e) {
      var scrollTop =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;

      if (scrollTop > 10) {
        document
          .getElementsByClassName("navbar-div")[0]
          .classList.add("scrolled-navbar");
        // for (item in document.getElementsByClassName("navbar-link-item")){
        for (
          var i = 0;
          i < document.getElementsByClassName("navbar-link-item").length;
          i++
        ) {
          document
            .getElementsByClassName("navbar-link-item")
            [i].classList.add("navbar-scrolled-link");
        }
        for (
          var i = 0;
          i < document.getElementsByClassName("navbar-social-icon").length;
          i++
        ) {
          document
            .getElementsByClassName("navbar-social-icon")
            [i].classList.add("navbar-social-icon-scrolled");
          if (
            document.getElementsByClassName("navbar-scrolled-social-icon")[i]
          ) {
            document.getElementsByClassName("navbar-scrolled-social-icon")[
              i
            ].style.display = "flex";
          }
          // console.log(document.getElementsByClassName("navbar-scrolled-social-icon"))
        }
      } else {
        document
          .getElementsByClassName("navbar-div")[0]
          .classList.remove("scrolled-navbar");
        for (
          var i = 0;
          i < document.getElementsByClassName("navbar-link-item").length;
          i++
        ) {
          document
            .getElementsByClassName("navbar-link-item")
            [i].classList.remove("navbar-scrolled-link");
        }
        for (
          var i = 0;
          i < document.getElementsByClassName("navbar-social-icon").length;
          i++
        ) {
          document
            .getElementsByClassName("navbar-social-icon")
            [i].classList.remove("navbar-social-icon-scrolled");
          if (
            document.getElementsByClassName("navbar-scrolled-social-icon")[i]
          ) {
            document.getElementsByClassName("navbar-scrolled-social-icon")[
              i
            ].style.display = "none";
          }
        }
      }
    });
  }

  handleClick() {
    if (this.state.open) {
      document.getElementById("hamburger-1").classList.remove("is-active");
      this.setState({ open: false });
    } else {
      document.getElementById("hamburger-1").classList.add("is-active");
      this.setState({ open: true });
    }
  }

  render() {
    return (
      <div className="navbar-div">
        <motion.div
          className="navbar-mobile-div"
          variants={MobileVariants}
          initial={"closed"}
          animate={this.state.open ? "open" : "closed"}
          transition={{ ease: "easeOut", duration: 0.25 }}
        >
          <div className="navbar-mobile-links-div">
            <div className="navbar-mobile-link-container">
              <div
                className="navbar-mobile-link-item"
                onClick={() => {
                  this.handleClick();
                  window.scrollTo({
                    top:
                      document.getElementsByClassName("about-div")[0]
                        .offsetTop - 80,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                About
              </div>
            </div>
            <div className="navbar-mobile-link-container">
              <div
                className="navbar-mobile-link-item"
                onClick={() => {
                  this.handleClick();
                  window.scrollTo({
                    top:
                      document.getElementsByClassName("about-div")[0]
                        .offsetTop - 80,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Register
              </div>
            </div>
            <div className="navbar-mobile-link-container">
              <div
                className="navbar-mobile-link-item"
                onClick={() => {
                  this.handleClick();
                  window.scrollTo({
                    top:
                      document.getElementsByClassName("projects-div")[0]
                        .offsetTop - 80,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Schedule
              </div>
            </div>
            <div className="navbar-mobile-link-container">
              <div
                className="navbar-mobile-link-item"
                onClick={() => {
                  this.handleClick();
                  window.scrollTo({
                    top:
                      document.getElementsByClassName("faq-div")[0].offsetTop -
                      80,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Sponsors
              </div>
            </div>
            <div className="navbar-mobile-link-container">
              <div
                className="navbar-mobile-link-item"
                onClick={() => {
                  this.handleClick();
                  window.scrollTo({
                    top:
                      document.getElementsByClassName("sponsor-div")[0]
                        .offsetTop - 80,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                FAQ
              </div>
            </div>
            <div className="navbar-mobile-link-container">
              <div
                className="navbar-mobile-link-item"
                onClick={() => {
                  this.handleClick();
                  window.scrollTo({
                    top:
                      document.getElementsByClassName("sponsor-div")[1]
                        .offsetTop - 80,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Contact
              </div>
            </div>
          </div>
          <a
            href="/"
            target="_blank"
            style={{
              marginLeft: "70px",
              marginTop: "10px",
            }}
          >
            <Button
              type="primary"
              ghost={false}
              style={{ height: "40px", fontSize: "14px" }}
            >
              Register
            </Button>
          </a>
          <div
            className="footer-icons-div"
            style={{
              marginTop: "10px",
              marginLeft: "70px",
              justifyContent: "space-between",
            }}
          >
            <a
              href="https://www.linkedin.com/company/visionary-development-studios/"
              target="_blank"
              className="social-icon linkedin "
            >
              <Linkedin className="hover-icon"></Linkedin>
            </a>
            <a
              href="https://www.instagram.com/visionary_app/"
              target="_blank"
              className="social-icon instagram "
            >
              <Instagram className="hover-icon"></Instagram>
            </a>
            <a
              href="mailto:markos@visionary.app"
              className="social-icon twitter "
            >
              <Twitter className="hover-icon"></Twitter>
            </a>
            <a
              href="mailto:markos@visionary.app"
              className="social-icon facebook "
            >
              <Facebook className="hover-icon"></Facebook>
            </a>
          </div>
        </motion.div>
        <div className="navbar-logo-div">
          <div
            className="navbar-logo"
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }
          ></div>
        </div>
        <div className="navbar-links-div">
          <div
            className="navbar-link-item"
            onClick={() =>
              window.scrollTo({
                top:
                  document.getElementsByClassName("about-content-row-div")[0]
                    .offsetTop - 80,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            About
          </div>
          <div
            className="navbar-link-item"
            onClick={() =>
              window.scrollTo({
                top:
                  document.getElementsByClassName("about-content-row-div")[1]
                    .offsetTop - 80,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            Register
          </div>
          <div
            className="navbar-link-item"
            onClick={() =>
              window.scrollTo({
                top:
                  document.getElementsByClassName("faq-div")[0].offsetTop - 80,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            Schedule
          </div>
          <div
            className="navbar-link-item"
            onClick={() =>
              window.scrollTo({
                top:
                  document.getElementsByClassName("sponsor-div")[0].offsetTop -
                  80,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            Sponsors
          </div>
          <div
            className="navbar-link-item"
            onClick={() =>
              window.scrollTo({
                top:
                  document.getElementsByClassName("faq-div")[0].offsetTop - 80,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            FAQ
          </div>
          <div
            className="navbar-link-item"
            onClick={() =>
              window.scrollTo({
                top:
                  document.getElementsByClassName("contact-div")[0].offsetTop -
                  80,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            Contact
          </div>
        </div>
        <div className="navbar-filler-div"></div>
        <div className="navbar-icons-div">
          <a
            href="https://www.linkedin.com/company/visionary-development-studios/"
            target="_blank"
            className="social-icon linkedin navbar-social-icon"
          >
            <Linkedin className="hover-icon"></Linkedin>
          </a>
          <a
            href="https://www.instagram.com/visionary_app/"
            target="_blank"
            className="social-icon instagram navbar-social-icon"
          >
            <Instagram className="hover-icon"></Instagram>
          </a>
          <a
            href="mailto:markos@visionary.app"
            className="social-icon twitter navbar-social-icon"
          >
            <Twitter className="hover-icon"></Twitter>
          </a>
          <a
            href="mailto:markos@visionary.app"
            className="social-icon facebook navbar-social-icon"
          >
            <Facebook className="hover-icon"></Facebook>
          </a>
        </div>
        <a
          href="https://bit.ly/visionaryapplication"
          target="_blank"
          className="navbar-action-div"
        >
          <Button
            type="primary"
            ghost={false}
            style={{ height: "40px", fontSize: "14px" }}
          >
            Register
          </Button>
        </a>
        <div
          class="hamburger"
          id="hamburger-1"
          onClick={() => this.handleClick()}
        >
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
    );
  }
}

export default Navbar;
