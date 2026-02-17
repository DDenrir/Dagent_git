import styles from './Sidebar.module.css';
// import Link from "next/link"; // Use Link for client-side navigation in real app

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.userPanel}>
        <div className={styles.userImage}>
          <i className="fa fa-user"></i>
        </div>
        <div className={styles.userInfo}>
          <h4>ผู้ใช้งานทั่วไป</h4>
          <p>
            <i className={`fa fa-circle ${styles.textSuccess}`}></i>
            Offline
          </p>
        </div>
      </div>

      <ul className={styles.sidebarMenu}>
        <li className={styles.sidebarHeader}>เมนูหลัก</li>
        <li className={styles.menuItem}>
          <a href="/reports">
            <i>📊</i> <span>รายงานสรุปผล</span>
            <span className={styles.badge}>ใหม่</span>
          </a>
        </li>
        <li className={styles.sidebarHeader}>รายละเอียดข้อมูล</li>
        <li className={styles.menuItem}>
          <a href="/research">
            <i>📚</i> <span>งานวิจัย</span>
            <span className={styles.badge}>2,814</span>
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="/research-plan">
            <i>🗺️</i> <span>แผนงานวิจัย</span>
            <span className={styles.badge}>127</span>
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="/researchers">
            <i>👥</i> <span>ทำเนียบนักวิจัย</span>
            <span className={styles.badge}>552</span>
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="/publications">
            <i>📢</i> <span>ตีพิมพ์เผยแพร่</span>
            <span className={styles.badge}>1,722</span>
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="/ip">
            <i>💡</i> <span>ทรัพย์สินทางปัญญา</span>
            <span className={styles.badge}>57</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
