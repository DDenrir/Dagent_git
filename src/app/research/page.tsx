
"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { mockProjects, mockUsers } from "@/data/mock";

export default function ResearchProjectsPage() {
    const [filter, setFilter] = useState("ทั้งหมด");

    // Enhance mock projects with researcher names (Join logic)
    const projectsWithResearcher = mockProjects.map(project => {
        const researcher = mockUsers.find(u => u.id === project.researcherId);
        return {
            ...project,
            researcherName: researcher?.fullName || "ไม่ระบุ",
            researcherFaculty: researcher?.faculty || "ไม่ระบุ"
        };
    });

    const filteredProjects = filter === "ทั้งหมด"
        ? projectsWithResearcher
        : projectsWithResearcher.filter(p =>
            (p.status === 'planned' && filter === 'วางแผน') ||
            (p.status === 'ongoing' && filter === 'ดำเนินการ') ||
            (p.status === 'completed' && filter === 'เสร็จสิ้น') ||
            (p.fiscalYear.toString() === filter)
        );

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
                                    <span className={styles.yearBadge}>ปี {project.fiscalYear}</span>
                                    <span className={`${styles.statusBadge} ${project.status === 'planned' ? styles.statusPlan :
                                            project.status === 'ongoing' ? styles.statusProcessing : styles.statusCompleted
                                        }`}>
                                        {project.status === 'planned' ? 'วางแผน' :
                                            project.status === 'ongoing' ? 'ดำเนินการ' : 'เสร็จสิ้น'}
                                    </span>
                                </div>
                                <div className={styles.cardBody}>
                                    <h3 className={styles.cardTitle}>{project.title}</h3>
                                    <div className={styles.cardMeta}>
                                        <i className="fa fa-user"></i> {project.researcherName}
                                    </div>
                                    <div className={styles.cardMeta}>
                                        <i className="fa fa-university"></i> {project.researcherFaculty}
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
