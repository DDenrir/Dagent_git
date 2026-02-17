import styles from './page.module.css';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

export default function IntellectualPropertyPage() {
  const ipList = [
    {
      id: 1,
      type: 'สิทธิบัตร',
      number: '1903001234',
      title: 'กระบวนการผลิตข้าวกล้องงอกเสริมใยอาหารจากเปลือกกล้วย',
      owner: 'ผศ.ดร.วิไลพร วงษ์อินทร์ และคณะ',
      date: '12 มกราคม 2568',
    },
    {
      id: 2,
      type: 'อนุสิทธิบัตร',
      number: '1803005678',
      title: 'ผลิตภัณฑ์เครื่องสำอางจากสารสกัดมะขามป้อม',
      owner: 'ดร.ปราณี มีสุข',
      date: '15 พฤศจิกายน 2567',
    },
    {
      id: 3,
      type: 'ลิขสิทธิ์',
      number: 'ว.044813',
      title: 'โปรแกรมคอมพิวเตอร์ระบบบริหารจัดการวิสาหกิจชุมชน',
      owner: 'อ.ศุภรัตน์ แก้วเสริม',
      date: '30 กันยายน 2567',
    },
    {
      id: 4,
      type: 'เครื่องหมายการค้า',
      number: '-',
      title: 'ตราสินค้าผลิตภัณฑ์เกษตรอินทรีย์เพชรบูรณ์',
      owner: 'มหาวิทยาลัยราชภัฏเพชรบูรณ์',
      date: 'อยู่ระหว่างดำเนินการ',
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <main className={styles.mainContent}>
        <Navbar />
        <div className={styles.contentWrapper}>
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>ทรัพย์สินทางปัญญา (Intellectual Property)</h1>
            <p className={styles.pageSubtitle}>ผลงานนวัตกรรมและทรัพย์สินทางปัญญาที่ได้รับการจดทะเบียน</p>
          </div>

          <div className={styles.ipGrid}>
            {ipList.map((item) => (
              <div key={item.id} className={styles.ipCard}>
                <div className={styles.iconWrapper}>
                  <i className="fa fa-certificate"></i>
                </div>
                <div className={styles.ipType}>{item.type}</div>
                <h3 className={styles.ipTitle}>{item.title}</h3>
                <div className={styles.ipNumber}>เลขที่: {item.number}</div>
                <div className={styles.ipOwner}>
                  <i className="fa fa-user"></i> {item.owner}
                </div>
                <div className={styles.ipDate}>วันที่ยื่น/ได้รับ: {item.date}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
