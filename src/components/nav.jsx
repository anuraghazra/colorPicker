import React, { Fragment } from "react";
import style from "./css/nav.module.css";
import logo from "./../logo/logo.jpg";
import github from "./../logo/github.png";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <Fragment>
      <nav>
        <div className={style.logo}>
          <a href="https://www.facebook.com/groups/askbuddie/">
            <img src={logo} alt="Ask Buddie Logo" />
          </a>
        </div>

        <ul>
          <Link
            activeClass="active"
            to="blue"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li>
              <a href="blue" className={style.active}>
                Blue
              </a>
            </li>
          </Link>
          <Link
            activeClass="active"
            to="green"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li>
              <a href="green" className={style.active1}>
                Green
              </a>
            </li>
          </Link>
          <Link
            activeClass="active"
            to="red"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li>
              <a href="red" className={style.active2}>
                Red
              </a>
            </li>
          </Link>
          <Link
            activeClass="active"
            to="yellow"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li>
              <a href="yellow" className={style.active3}>
                Yellow
              </a>
            </li>
          </Link>
          <Link
            activeClass="active"
            to="grey"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li>
              <a href="grey" className={style.active4}>
                Grey
              </a>
            </li>
          </Link>
          <Link
            activeClass="active"
            to="more"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li>
              <a href="more" className={style.active5}>
                More
              </a>
            </li>
          </Link>
          <Link
            activeClass="active"
            to="contributor"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          />
          <div className={style.sourcecode}>
            <a href="https://github.com/Alidhuniya/colorPicker">
              <img src={github} alt="Source Code" />
            </a>
          </div>
        </ul>
      </nav>
    </Fragment>
  );
};
export default Nav;
