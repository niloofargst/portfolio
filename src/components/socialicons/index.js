import React from "react";
import "./style.css";
import { FaGithub, FaDeviantart, FaInstagram, FaLinkedin } from "react-icons/fa";
import { socialprofils } from "../../content_option";

export default function Socialicons(params) {
  return (
    <div className="stick_follow_icon">
      <ul>
        <li>
          <a href={socialprofils.deviantart}>
            <FaDeviantart />
          </a>
        </li>
        <li>
          <a href={socialprofils.github}>
            <FaGithub />
          </a>
        </li>
        <li>
          <a href={socialprofils.Instagram}>
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href={socialprofils.linkedin}>
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p>Follow Me</p>
    </div>
  );
}
