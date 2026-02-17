import styles from './page.module.css';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Mock Data
  const projects: Record<string, any> = {
    '1': {
      id: '1',
      titleTh:
        'อิทธิพลความโปร่งใสของห่วงโซ่อุปทานและการจัดการความเสี่ยงที่มีผลต่อประสิทธิภาพการดำเนินงานของวิสาหกิจชุมชน',
      titleEn:
        'The Influence of Supply Chain Transparency and Risk Management on Operational Performance of Community Enterprises',
      researcher: 'วิไลพร วงษ์อินทร์',
      faculty: 'คณะวิทยาการจัดการ',
      budgetYear: '2569',
      budgetAmount: '50,000 บาท',
      fundingType: 'ทุนภายในคณะ',
      status: 'ดำเนินการ',
      abstract:
        'การวิจัยนี้มีวัตถุประสงค์เพื่อศึกษาอิทธิพลของความโปร่งใสของห่วงโซ่อุปทานและการจัดการความเสี่ยงที่มีผลต่อประสิทธิภาพการดำเนินงานของวิสาหกิจชุมชน ในจังหวัดเพชรบูรณ์...',
    },
    '2': {
      id: '2',
      titleTh: 'อิทธิพลของคุณลักษณะผู้นำทางความคิดที่มีต่อการตัดสินใจซื้อสินค้า OTOP ผ่านช่องทางออนไลน์ของผู้บริโภค',
      titleEn:
        'The Influence of Opinion Leadership Characteristics on Consumer Online Purchasing Decisions of OTOP Products',
      researcher: 'ศิริพงษ์ เหมมั่น',
      faculty: 'คณะวิทยาการจัดการ',
      budgetYear: '2569',
      budgetAmount: '45,000 บาท',
      fundingType: 'ทุนภายในคณะ',
      status: 'ดำเนินการ',
      abstract:
        'การศึกษาวิจัยครั้งนี้มีวัตถุประสงค์เพื่อศึกษาอิทธิพลของคุณลักษณะผู้นำทางความคิดที่มีต่อการตัดสินใจซื้อสินค้า OTOP ผ่านช่องทางออนไลน์...',
    },
    '3': {
      id: '3',
      titleTh: 'การพัฒนาเว็บไซต์ประชาสัมพันธ์ผ้าทอไทหล่ม อำเภอหล่มสัก จังหวัดเพชรบูรณ์',
      titleEn:
        'Development of a Public Relations Website for Tai Lom Woven Fabric, Lom Sak District, Phetchabun Province',
      researcher: 'ศุภรัตน์ แก้วเสริม',
      faculty: 'คณะวิทยาการจัดการ',
      budgetYear: '2569',
      budgetAmount: '40,000 บาท',
      fundingType: 'ทุนภายในคณะ',
      status: 'ดำเนินการ',
      abstract:
        'โครงการนี้มุ่งเน้นการพัฒนาเว็บไซต์เพื่อส่งเสริมและประชาสัมพันธ์ผ้าทอไทหล่ม ซึ่งเป็นภูมิปัญญาท้องถิ่นอันทรงคุณค่า...',
    },
  };

  const project = projects[id] || projects['1']; // Default to 1 if not found

  return (
    <div className={styles.pageContainer}>
      <Sidebar />

      <main className={styles.mainContent}>
        {/* Navbar */}
        <Navbar />

        <div className={styles.contentWrapper}>
          <div className={styles.cardHeader}>
            <a href="/" className={styles.backBtn}>
              <i className="fa fa-arrow-left"></i> ย้อนกลับ
            </a>
            <span>รายละเอียดโครงการ</span>
          </div>

          <div className={styles.card}>
            <div className={styles.cardBody}>
              <h2 className={styles.detailTitle}>{project.titleTh}</h2>
              <h3 className={styles.detailSubtitle}>{project.titleEn}</h3>

              <div className={styles.detailRow}>
                <div className={styles.detailLabel}>รหัสโครงการ:</div>
                <div className={styles.detailValue}>-</div>
              </div>

              <div className={styles.detailRow}>
                <div className={styles.detailLabel}>ปีงบประมาณ:</div>
                <div className={styles.detailValue}>{project.budgetYear}</div>
              </div>

              <div className={styles.detailRow}>
                <div className={styles.detailLabel}>นักวิจัยหัวหน้าโครงการ:</div>
                <div className={styles.detailValue}>
                  {project.researcher} ({project.faculty})
                </div>
              </div>

              <div className={styles.detailRow}>
                <div className={styles.detailLabel}>งบประมาณ:</div>
                <div className={styles.detailValue}>{project.budgetAmount}</div>
              </div>

              <div className={styles.detailRow}>
                <div className={styles.detailLabel}>แหล่งทุน:</div>
                <div className={styles.detailValue}>{project.fundingType}</div>
              </div>

              <div className={styles.detailRow}>
                <div className={styles.detailLabel}>สถานะ:</div>
                <div className={styles.detailValue}>
                  <span className={styles.badge}>{project.status}</span>
                </div>
              </div>

              <div className={styles.detailRow}>
                <div className={styles.detailLabel}>บทคัดย่อ:</div>
                <div className={styles.detailValue}>
                  <p>{project.abstract}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
