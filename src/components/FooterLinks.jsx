"use client";

import React from "react";

import styles from "./../styles/FooterLinks.module.css";

const FooterLinks = ({ LinkTitle, linkList }) => {
    return (
    <div className={styles.container}>
    <h3 className={styles.link_Title}>{LinkTitle}</h3>
    <ul className={styles.list}>
        {linkList.map((item, idx) => (
        <li key={idx}>
            <a href={item.url}>
            {item.icon && <span style={{ marginRight: 8 }}>{item.icon}</span>}
            {item.text}
            </a>
        </li>
        ))}
    </ul>
    </div>
);
};

export default FooterLinks;