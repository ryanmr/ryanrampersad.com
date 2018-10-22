import React from "react";
import moment from "moment";
import { Link } from "gatsby";

const currentYear = moment().format("YYYY");

const Footer = () => (
  <footer className="universe-footer">
    <div className="container has-text-centered">
      <div className="footer-content">
        <hr className="lightspeed" />
        <p>
          &copy; {currentYear} &mdash; <Link to="/">ryan rampersad</Link>{" "}
          &mdash; <Link to="/made-by-ryan">made by ryan</Link>
        </p>
      </div>
    </div>
  </footer>
);

export { Footer };
