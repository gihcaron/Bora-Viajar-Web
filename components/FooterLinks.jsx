"use client";

import React from "react";

import styles from "./../styles/FooterLinks.module.css";

const FooterLinks = ({LinkTitle, linkList }) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.link_Title}>{LinkTitle}</h3>
            <ul className={styles.list}>
                {linkList.map((link, index) => ( 
                      <li key={index}>
                      <a href={link.url} className={styles.link}>{link.text}</a>
                  </li>
              ))} 
            </ul>
            
        </div>
    );
};

export default FooterLinks;