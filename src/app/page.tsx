import styles from './page.module.css';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

export default function Home() {
  const stats = [
    { title: 'โครงการวิจัยทั้งหมด', value: '2,814', unit: 'เรื่อง', icon: 'fa-book' },
    { title: 'งานวิจัยตีพิมพ์', value: '1,722', unit: 'บทความ', icon: 'fa-file-text' },
    { title: 'ทรัพย์สินทางปัญญา', value: '57', unit: 'รายการ', icon: 'fa-lightbulb-o' },
    { title: 'งบประมาณปี 2568', value: '15.4', unit: 'ล้านบาท', icon: 'fa-money' },
  ];

  const news = [
    { title: 'ม.ราชภัฏเพชรบูรณ์ จับมือชุมชนพัฒนาสินค้า OTOP สู่ตลาดสากล', date: '17 กุมภาพันธ์ 2569', image: '#' },
    { title: 'นักวิจัยคณะวิทย์ฯ ค้นพบสารสกัดจากพืชท้องถิ่นต้านอนุมูลอิสระ', date: '15 กุมภาพันธ์ 2569', image: '#' },
    { title: 'เปิดรับข้อเสนอโครงการวิจัย ทุนงบประมาณรายได้ ประจำปี 2570', date: '10 กุมภาพันธ์ 2569', image: '#' },
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <Navbar /> {/* Navbar inside Hero for transparency effect */}
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              ระบบบริหารจัดการงานวิจัย
              <br />
              มหาวิทยาลัยราชภัฏเพชรบูรณ์
            </h1>
            <p className={styles.heroSubtitle}>Research Management System (RMS) PCRU</p>
          </div>
        </section>

        {/* Floating Stats Cards */}
        <section className={styles.statsContainer}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div>
                <div className={styles.statHeader}>
                  <span className={styles.statTitle}>{stat.title}</span>
                  <div className={styles.statIcon}>
                    <i className={`fa ${stat.icon}`}></i>
                  </div>
                </div>
                <div>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statUnit}>{stat.unit}</span>
                </div>
              </div>
              <div className={styles.statFooter}>
                <a href="#" className={styles.statLink}>
                  ดูข้อมูล <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Action Shortcuts */}
        <h2 className={styles.sectionTitle}>เมนูทางลัด</h2>
        <div className={styles.shortcutsContainer}>
          <a href="/research" className={styles.shortcutBtn}>
            <i className={`fa fa-search ${styles.shortcutIcon}`}></i>
            ค้นหางานวิจัย
          </a>
          <a href="/research-plan" className={`${styles.shortcutBtn} ${styles.secondary}`}>
            <i className={`fa fa-map-o ${styles.shortcutIcon}`}></i>
            แผนงานวิจัย
          </a>
          <a href="/publications" className={`${styles.shortcutBtn} ${styles.accent}`}>
            <i className={`fa fa-newspaper-o ${styles.shortcutIcon}`}></i>
            ผลงานตีพิมพ์
          </a>
          <a href="/ip" className={`${styles.shortcutBtn} ${styles.secondary}`}>
            <i className={`fa fa-certificate ${styles.shortcutIcon}`}></i>
            ทรัพย์สินทางปัญญา
          </a>
        </div>

        {/* Lateast News */}
        <h2 className={`${styles.sectionHeader} ${styles.sectionHeaderNews}`}>ข่าวประชาสัมพันธ์</h2>
        <div className={styles.newsGrid}>
          {news.map((item, index) => (
            <div key={index} className={styles.newsCard}>
              <div className={styles.newsImage}>
                <div className={styles.newsImagePlaceholder}>
                  <i className="fa fa-image"></i>
                </div>
              </div>
              <div className={styles.newsContent}>
                <div className={styles.newsDate}>
                  <i className="fa fa-calendar"></i> {item.date}
                </div>
                <h3 className={styles.newsTitle}>{item.title}</h3>
                <a href="#" className={styles.newsReadMore}>
                  อ่านต่อ <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <footer className={styles.footer}>&copy; 2026 สถาบันวิจัยและพัฒนา มหาวิทยาลัยราชภัฏเพชรบูรณ์</footer>
      </main>
    </div>
  );
}
