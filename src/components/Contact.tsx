import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/n-upadhyay/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                linkedin.com/in/n-upadhyay/
              </a>
            </p>
            <p>
              <a href="tel:+917051145505" data-cursor="disable">
                +91 7051145505
              </a>
            </p>
            <p>
              <a href="mailto:nikhilupadhyayin@gmail.com" data-cursor="disable">
                nikhilupadhyayin@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech, Computer Science and Engineering, Shri Mata Vaishno Devi
              University (2022 - Present) - 7 CGPA
            </p>
            <p>
              Senior Secondary, St. Michael&apos;s High School, Patna - 84.40%
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/nilhilupadhyay"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/n-upadhyay/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="/resumes/NIKHIL_KUMAR_RESUME.pdf"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Resume 1 <MdArrowOutward />
            </a>
            <a
              href="/resumes/NIKHIL_KUMAR_RESUME_ALT.pdf"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Alternate Resume <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Nikhil Kumar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
