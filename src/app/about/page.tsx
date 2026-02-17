
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function AboutPage() {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f6f9', fontFamily: '"Kanit", sans-serif' }}>
            <Sidebar />
            <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Navbar />
                <div style={{ padding: '20px' }}>
                    <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '4px', boxShadow: '0 1px 1px rgba(0,0,0,0.1)' }}>
                        <h1 style={{ fontSize: '28px', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>เกี่ยวกับสถาบันวิจัยและพัฒนา</h1>

                        <p>สถาบันวิจัยและพัฒนา มหาวิทยาลัยราชภัฏเพชรบูรณ์ (Research and Development Institute, Phetchabun Rajabhat University)</p>

                        <h3 style={{ marginTop: '20px', color: '#555' }}>วิสัยทัศน์</h3>
                        <p>เป็นองค์กรชั้นนำด้านการบริหารจัดการงานวิจัยเพื่อพัฒนาท้องถิ่นอย่างยั่งยืน</p>

                        <h3 style={{ marginTop: '20px', color: '#555' }}>พันธกิจ</h3>
                        <ol style={{ marginLeft: '20px' }}>
                            <li>ส่งเสริมและสนับสนุนการทำวิจัยและงานสร้างสรรค์เพื่อพัฒนาท้องถิ่น</li>
                            <li>บริหารจัดการงานวิจัยและงานสร้างสรรค์ให้มีคุณภาพและประสิทธิภาพ</li>
                            <li>ส่งเสริมการนำผลงานวิจัยไปใช้ประโยชน์เพื่อพัฒนาท้องถิ่นและสร้างมูลค่าเพิ่ม</li>
                            <li>พัฒนาศักยภาพนักวิจัยและบุคลากรด้านการวิจัย</li>
                        </ol>

                        <h3 style={{ marginTop: '20px', color: '#555' }}>ติดต่อเรา</h3>
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
