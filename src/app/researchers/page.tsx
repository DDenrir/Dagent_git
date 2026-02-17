
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import styles from "./page.module.css";

export default function ResearchersPage() {
    const researchers = [
        { name: "ผศ.ดร.วิไลพร วงษ์อินทร์", faculty: "คณะวิทยาการจัดการ", expertise: "การจัดการห่วงโซ่อุปทาน" },
        { name: "ดร.ศิริพงษ์ เหมมั่น", faculty: "คณะวิทยาการจัดการ", expertise: "การตลาดออนไลน์" },
        { name: "อ.ศุภรัตน์ แก้วเสริม", faculty: "คณะวิทยาการจัดการ", expertise: "เทคโนโลยีสารสนเทศ" },
        { name: "ผศ.ดร.สมชาย ใจดี", faculty: "คณะครุศาสตร์", expertise: "นวัตกรรมการศึกษา" },
        { name: "ดร.ปราณี มีสุข", faculty: "คณะวิทยาศาสตร์และเทคโนโลยี", expertise: "เคมีสิ่งแวดล้อม" },
    ];

    return (
        <div className={styles.pageContainer}>
            <Sidebar />
            <main className={styles.mainContent}>
                <Navbar />
                <div className={styles.contentWrapper}>
                    <h1 className={styles.pageTitle}>ทำเนียบนักวิจัย (Researchers)</h1>

                    <div className={styles.researchersGrid}>
                        {researchers.map((r, index) => (
                            <div key={index} className={styles.researcherCard}>
                                <div className={styles.imageWrapper}>
                                    <div className={styles.researcherImage}>
                                        <i className="fa fa-user"></i>
                                    </div>
                                </div>
                                <h3 className={styles.researcherName}>{r.name}</h3>
                                <p className={styles.researcherFaculty}>{r.faculty}</p>
                                <div className={styles.expertiseSection}>
                                    <strong>ความเชี่ยวชาญ:</strong> {r.expertise}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
