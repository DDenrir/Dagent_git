
"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function ResearchProjectsPage() {
    const [filter, setFilter] = useState("ทั้งหมด");

    const projects = [
        {
            id: 1,
            title: "อิทธิพลความโปร่งใสของห่วงโซ่อุปทานและการจัดการความเสี่ยงที่มีผลต่อประสิทธิภาพการดำเนินงานของวิสาหกิจชุมชน",
            researcher: "วิไลพร วงษ์อินทร์",
            year: "2569",
            status: "ดำเนินการ",
            faculty: "คณะวิทยาการจัดการ"
        },
        {
            id: 2,
            title: "อิทธิพลของคุณลักษณะผู้นำทางความคิดที่มีต่อการตัดสินใจซื้อสินค้า OTOP ผ่านช่องทางออนไลน์ของผู้บริโภค",
            researcher: "ศิริพงษ์ เหมมั่น",
            year: "2569",
            status: "ดำเนินการ",
            faculty: "คณะวิทยาการจัดการ"
        },
        {
            id: 3,
            title: "การพัฒนาเว็บไซต์ประชาสัมพันธ์ผ้าทอไทหล่ม อำเภอหล่มสัก จังหวัดเพชรบูรณ์",
            researcher: "ศุภรัตน์ แก้วเสริม",
            year: "2569",
            status: "ดำเนินการ",
            faculty: "คณะวิทยาการจัดการ"
        },
        {
            id: 4,
            title: "รูปแบบการจัดการเรียนรู้เชิงรุกเพื่อส่งเสริมทักษะการคิดวิเคราะห์สำหรับนักศึกษาครู",
            researcher: "สมชาย ใจดี",
            year: "2568",
            status: "เสร็จสิ้น",
            faculty: "คณะครุศาสตร์"
        },
        {
            id: 5,
            title: "การศึกษาคุณภาพน้ำในแหล่งน้ำธรรมชาติเพื่อการเกษตรยั่งยืนในเขตอำเภอเมืองเพชรบูรณ์",
            researcher: "ปราณี มีสุข",
            year: "2568",
            status: "เสร็จสิ้น",
            faculty: "คณะวิทยาศาสตร์และเทคโนโลยี"
        }
    ];

    const filteredProjects = filter === "ทั้งหมด"
        ? projects
        : projects.filter(p => p.status === filter || p.year === filter);

    return (
        <div className={styles.pageContainer}>
            <Sidebar />
            <main className={styles.mainContent}>
                <Navbar />
                <div className={styles.contentWrapper}>

                    <div className={styles.pageHeader}>
                        <div>
                            <h1 className={styles.pageTitle}>งานวิจัย (Research Projects)</h1>
                            <p className={styles.pageSubtitle}>รายการโครงการวิจัยทั้งหมดของมหาวิทยาลัย</p>
                        </div>
                        <div className={styles.filterBar}>
                            <button
                                className={`${styles.filterBtn} ${filter === 'ทั้งหมด' ? styles.active : ''}`}
                                onClick={() => setFilter("ทั้งหมด")}
                            >
                                ทั้งหมด
                            </button>
                            <button
                                className={`${styles.filterBtn} ${filter === 'ดำเนินการ' ? styles.active : ''}`}
                                onClick={() => setFilter("ดำเนินการ")}
                            >
                                กำลังดำเนินการ
                            </button>
                            <button
                                className={`${styles.filterBtn} ${filter === 'เสร็จสิ้น' ? styles.active : ''}`}
                                onClick={() => setFilter("เสร็จสิ้น")}
                            >
                                เสร็จสิ้น
                            </button>
                            <button
                                className={`${styles.filterBtn} ${filter === '2569' ? styles.active : ''}`}
                                onClick={() => setFilter("2569")}
                            >
                                ปี 2569
                            </button>
                        </div>
                    </div>

                    <div className={styles.researchGrid}>
                        {filteredProjects.map((project) => (
                            <div key={project.id} className={styles.researchCard}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.yearBadge}>ปี {project.year}</span>
                                    <span className={`${styles.statusBadge} ${project.status === 'ดำเนินการ' ? styles.statusProcessing : styles.statusCompleted}`}>
                                        {project.status}
                                    </span>
                                </div>
                                <div className={styles.cardBody}>
                                    <h3 className={styles.cardTitle}>{project.title}</h3>
                                    <div className={styles.cardMeta}>
                                        <i className="fa fa-user"></i> {project.researcher}
                                    </div>
                                    <div className={styles.cardMeta}>
                                        <i className="fa fa-university"></i> {project.faculty}
                                    </div>
                                </div>
                                <div className={styles.cardFooter}>
                                    <a href={`/project/${project.id}`} className={styles.viewBtn}>
                                        ดูรายละเอียด <i className="fa fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </main>
        </div>
    );
}
