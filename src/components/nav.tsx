"use client"; // เพิ่ม directive นี้ที่ด้านบนสุด

import React, { useState } from 'react';
import styles from "@/components/nav.module.css"; // ใช้ CSS Module และเปลี่ยนชื่อตัวแปรเป็น styles

function Nav() { // ปรับชื่อเป็นตัวใหญ่ตาม convention
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>Donation Platform</div>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </div>

      {/* Menu */}
      <ul className={`${styles.menu} ${isMenuOpen ? styles.active : ''}`}>
        <li><a href="#">คำขอรับบริจาค</a></li>
        <li><a href="#">วิธีใช้งาน</a></li>
        <li><a href="#">ติดต่อเรา</a></li>
      </ul>

      {/* Authentication */}
      <div className={styles["auth-buttons"]}>
        <button className={styles.login}>ล็อกอิน</button>
        <button className={styles.register}>ลงทะเบียน</button>
      </div>
    </nav>
  );
}

export default Nav;