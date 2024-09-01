import React from 'react';
import styles from "./header.module.css"

export default function Header() {

    return (
        <div className={styles.headerContainer} id='header'>
            <img src="https://static.thenounproject.com/png/778835-200.png" alt="Logo" className={styles.headerImg} />
            <nav className={styles.headerNav}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Quem somos</a></li>
                    <li><a href="#products">Produtos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </div>
    );
}
