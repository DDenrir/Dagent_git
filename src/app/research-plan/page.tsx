
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function ResearchPlansPage() {
    const plans = [
        {
            id: 1,
            year: "2568 - 2570",
            title: "แผนงานวิจัยและพัฒนานวัตกรรมเพื่อเพิ่มขีดความสามารถในการแข่งขันของผู้ประกอบการวิสาหกิจชุมชน",
            budget: "2,500,000 บาท",
            leader: "ผศ.ดร.วิไลพร วงษ์อินทร์",
            status: "กำลังดำเนินการ",
            objectives: "เพื่อพัฒนาผลิตภัณฑ์และบรรจุภัณฑ์ให้ได้มาตรฐานสากล และเพิ่มช่องทางการตลาดออนไลน์"
        },
        {
            id: 2,
            year: "2568",
            title: "แผนการบริหารจัดการทรัพยากรธรรมชาติและสิ่งแวดล้อมอย่างยั่งยืนในเขตพื้นที่ลุ่มน้ำป่าสัก",
            budget: "1,200,000 บาท",
            leader: "ดร.ปราณี มีสุข",
            status: "กำลังดำเนินการ",
            objectives: "ศึกษาผลกระทบสิ่งแวดล้อมและแนวทางการฟื้นฟูระบบนิเวศแหล่งน้ำ"
        },
        {
            id: 3,
            year: "2567",
            title: "การยกระดับคุณภาพการศึกษาในโรงเรียนขนาดเล็กด้วยนวัตกรรมการเรียนรู้ดิจิทัล",
            budget: "800,000 บาท",
            leader: "ผศ.ดร.สมชาย ใจดี",
            status: "เสร็จสิ้น",
            objectives: "พัฒนาสื่อการสอนดิจิทัลและคู่มือการใช้งานสำหรับครูในพื้นที่ห่างไกล"
        }
    ];

    return (
        <div className={styles.pageContainer}>
            <Sidebar />
            <main className={styles.mainContent}>
                <Navbar />
                <div className={styles.contentWrapper}>

                    <div className={styles.pageHeader}>
                        <h1 className={styles.pageTitle}>แผนงานวิจัย (Research Plans)</h1>
                        <p className={styles.pageSubtitle}>แผนแม่บทและทิศทางการวิจัยของมหาวิทยาลัยตามยุทธศาสตร์</p>
                    </div>

                    <div className={styles.planList}>
                        {plans.map((plan) => (
                            <div key={plan.id} className={styles.planItem}>
                                <div className={styles.planCard}>
                                    <div className={styles.planHeader}>
                                        <h3 className={styles.planName}>{plan.title}</h3>
                                        <span className={styles.planYear}>{plan.year}</span>
                                    </div>

                                    <div className={styles.planDetails}>
                                        <div className={styles.detailItem}>
                                            <span className={styles.detailLabel}>หัวหน้าแผนงาน</span>
                                            <span className={styles.detailValue}><i className="fa fa-user-circle"></i> {plan.leader}</span>
                                        </div>
                                        <div className={styles.detailItem}>
                                            <span className={styles.detailLabel}>งบประมาณรวม</span>
                                            <span className={styles.detailValue}>{plan.budget}</span>
                                        </div>
                                        <div className={styles.detailItem}>
                                            <span className={styles.detailLabel}>สถานะ</span>
                                            <span className={`${styles.statusIndicator} ${plan.status === 'กำลังดำเนินการ' ? styles.statusActive : styles.statusCompleted}`}>
                                                {plan.status === 'กำลังดำเนินการ' ? <i className="fa fa-spinner fa-spin"></i> : <i className="fa fa-check-circle"></i>}
                                                {plan.status}
                                            </span>
                                        </div>
                                    </div>

                                    <div className={styles.detailItem}>
                                        <span className={styles.detailLabel}>วัตถุประสงค์หลัก</span>
                                        <p className={styles.objectivesText}>
                                            {plan.objectives}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </main>
        </div>
    );
}
