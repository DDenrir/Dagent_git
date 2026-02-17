
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import styles from "./page.module.css";

export default function AboutPage() {
    return (
        <div className={styles.pageContainer}>
            <Sidebar />
            <main className={styles.mainContent}>
                <Navbar />
                <div className={styles.contentWrapper}>
                    <div className={styles.card}>
                        <h1 className={styles.pageTitle}>เกี่ยวกับสถาบันวิจัยและพัฒนา</h1>

                        <p>สถาบันวิจัยและพัฒนา มหาวิทยาลัยราชภัฏเพชรบูรณ์ (Research and Development Institute, Phetchabun Rajabhat University)</p>

                        <h3 className={styles.sectionTitle}>วิสัยทัศน์</h3>
                        <p>เป็นองค์กรชั้นนำด้านการบริหารจัดการงานวิจัยเพื่อพัฒนาท้องถิ่นอย่างยั่งยืน</p>

                        <h3 className={styles.sectionTitle}>พันธกิจ</h3>
                        <ol className={styles.missionList}>
                            <li>ส่งเสริมและสนับสนุนการทำวิจัยและงานสร้างสรรค์เพื่อพัฒนาท้องถิ่น</li>
                            <li>บริหารจัดการงานวิจัยและงานสร้างสรรค์ให้มีคุณภาพและประสิทธิภาพ</li>
                            <li>ส่งเสริมการนำผลงานวิจัยไปใช้ประโยชน์เพื่อพัฒนาท้องถิ่นและสร้างมูลค่าเพิ่ม</li>
                            <li>พัฒนาศักยภาพนักวิจัยและบุคลากรด้านการวิจัย</li>
                        </ol>

                        <h3 className={styles.sectionTitle}>ติดต่อเรา</h3>
                        <p>
                            สถาบันวิจัยและพัฒนา มหาวิทยาลัยราชภัฏเพชรบูรณ์<br />
                            83 หมู่ 11 ตำบลสะเดียง อำเภอเมือง จังหวัดเพชรบูรณ์ 67000<br />
                            โทรศัพท์: 056-717100 ต่อ 2800
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
