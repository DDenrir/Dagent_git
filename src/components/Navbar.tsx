
"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";
// import Link from "next/link"; // Use Link for client-side navigation in real app

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            alert(`คุณกำลังค้นหา: ${searchQuery}\n(ระบบค้นหายังไม่ได้เชื่อมต่อกับฐานข้อมูลจริง)`);
        }
    };

    return (
        <nav className={styles.navbarFilled}>
            <a href="/" className={styles.brand}>
                <div className={styles.brandLogo}>
                    <i className="fa fa-leaf"></i>
                </div>
                <span>Research@PCRU</span>
            </a>

            <div className={styles.navLinks}>
                <a href="/" className={styles.navLink}>หน้าหลัก</a>
                <a href="/research" className={styles.navLink}>งานวิจัย</a>
                <a href="/about" className={styles.navLink}>เกี่ยวกับเรา</a>
            </div>

            <form onSubmit={handleSearch} className={styles.searchForm}>
                <div className={styles.inputGroup}>
                    <button type="submit" className={styles.searchBtn} aria-label="ค้นหา">
                        <i className="fa fa-search"></i>
                    </button>
                    <input
                        type="text"
                        placeholder="ค้นหาข้อมูล..."
                        className={styles.searchInput}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </form>

            <a href="/login" className={styles.loginBtn}>
                เข้าสู่ระบบ
            </a>
        </nav>
    );
}
