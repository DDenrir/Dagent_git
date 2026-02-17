
"use client";

import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function ReportsPage() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Mock Data
    const budgetByCategory = [
        { name: 'งบบุคลากร', amount: 3500000 },
        { name: 'งบดำเนินงาน', amount: 2100000 },
        { name: 'งบลงทุน', amount: 1500000 },
        { name: 'งบกลาง', amount: 800000 },
        { name: 'งบเงินอุดหนุน', amount: 450000 },
    ];

    const budgetByPlan = [
        { name: 'แผนงานสาธารณสุข', amount: 4200000 },
        { name: 'แผนงานบริหารทั่วไป', amount: 2800000 },
        { name: 'แผนงานการศึกษา', amount: 1200000 },
        { name: 'แผนงานสังคมสงเคราะห์', amount: 600000 },
    ];

    const topProjects = [
        { id: 1, name: "โครงการพัฒนาศักยภาพนักวิจัยรุ่นใหม่ (Young Researcher Development)", budget: "1,500,000", disbursed: "0", remaining: "1,500,000", status: "วางแผนแล้ว" },
        { id: 2, name: "โครงการยกระดับผลิตภัณฑ์ชุมชนด้วยนวัตกรรม (OTOP Innovation)", budget: "850,000", disbursed: "0", remaining: "850,000", status: "วางแผนแล้ว" },
        { id: 3, name: "โครงการจัดการองค์ความรู้เพื่อการพัฒนาท้องถิ่น (KM for Local Deb)", budget: "500,000", disbursed: "0", remaining: "500,000", status: "วางแผนแล้ว" },
        { id: 4, name: "โครงการวิจัยและพัฒนาพืชสมุนไพรเพื่อสุขภาพ (Herbal R&D)", budget: "450,000", disbursed: "0", remaining: "450,000", status: "วางแผนแล้ว" },
        { id: 5, name: "โครงการส่งเสริมการท่องเที่ยวเชิงวัฒนธรรม (Cultural Tourism)", budget: "300,000", disbursed: "0", remaining: "300,000", status: "วางแผนแล้ว" },
    ];

    if (!isMounted) return null;

    return (
        <div className={styles.pageContainer}>
            <Sidebar />

            <main className={styles.mainContent}>
                <Navbar />

                <div className={styles.contentWrapper}>
                    <div className={styles.pageHeader}>
                        <h1 className={styles.pageTitle}>ภาพรวมงบประมาณ (Budget Overview)</h1>
                        <p className={styles.pageSubtitle}>แสดงข้อมูลสรุปงบประมาณประจำปี 2569 ของมหาวิทยาลัยราชภัฏเพชรบูรณ์</p>
                    </div>

                    <div className={styles.filterContainer}>
                        <span>ปีงบประมาณ:</span>
                        <select className={styles.yearSelect} defaultValue="2569">
                            <option value="2569">2569</option>
                            <option value="2568">2568</option>
                        </select>
                    </div>

                    {/* Metrics Cards - June Rain Theme Icons */}
                    <div className={styles.metricsGrid}>
                        <div className={styles.metricCard}>
                            <div className={styles.metricHeader}>
                                <span className={styles.metricTitle}>งบประมาณทั้งหมด</span>
                                <div className={`${styles.metricIcon}`} style={{ backgroundColor: '#5f5baf' }}> {/* Misty Violet */}
                                    <i className="fa fa-money"></i>
                                </div>
                            </div>
                            <div className={styles.metricValue}>11,727,000</div>
                            <div className={styles.metricSubtext}>งบประมาณรายจ่ายประจำปี 2569</div>
                        </div>

                        <div className={styles.metricCard}>
                            <div className={styles.metricHeader}>
                                <span className={styles.metricTitle}>งบลงทุน</span>
                                <div className={`${styles.metricIcon}`} style={{ backgroundColor: '#9a64c5' }}> {/* Rain Purple */}
                                    <i className="fa fa-line-chart"></i>
                                </div>
                            </div>
                            <div className={styles.metricValue}>3,500,000</div>
                            <div className={styles.metricSubtext}>คิดเป็น 29.8% ของงบทั้งหมด</div>
                        </div>

                        <div className={styles.metricCard}>
                            <div className={styles.metricHeader}>
                                <span className={styles.metricTitle}>งบดำเนินงาน</span>
                                <div className={`${styles.metricIcon}`} style={{ backgroundColor: '#568de4', color: 'white' }}> {/* Rainy Blue */}
                                    <i className="fa fa-cogs"></i>
                                </div>
                            </div>
                            <div className={styles.metricValue}>8,227,000</div>
                            <div className={styles.metricSubtext}>คิดเป็น 70.2% ของงบทั้งหมด</div>
                        </div>

                        <div className={styles.metricCard}>
                            <div className={styles.metricHeader}>
                                <span className={styles.metricTitle}>จำนวนโครงการ</span>
                                <div className={`${styles.metricIcon}`} style={{ backgroundColor: '#ba9fe1', color: 'white' }}> {/* Light Purple/Lilac */}
                                    <i className="fa fa-list-alt"></i>
                                </div>
                            </div>
                            <div className={styles.metricValue}>108 รายการ</div>
                            <div className={styles.metricSubtext}>จำนวนรายการงบประมาณทั้งหมด</div>
                        </div>
                    </div>

                    {/* Charts Stats - June Rain Palette */}
                    <div className={styles.chartsSection}>
                        <div className={styles.chartCard}>
                            <div className={styles.chartHeader}>
                                <h3 className={styles.chartTitle}>การจัดสรรงบประมาณตามหมวดหมู่</h3>
                                <p className={styles.chartSubtitle}>แสดงสัดส่วนงบประมาณแยกตามหมวดงบประมาณหลัก</p>
                            </div>
                            <div className={styles.chartBody}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        layout="vertical"
                                        data={budgetByCategory}
                                        margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                                        <XAxis type="number" hide />
                                        <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} />
                                        <Tooltip formatter={(value) => new Intl.NumberFormat('th-TH').format(value as number)} />
                                        <Bar dataKey="amount" fill="#5f5baf" radius={[0, 4, 4, 0]} barSize={20} name="งบประมาณ" /> {/* Misty Violet */}
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className={styles.chartCard}>
                            <div className={styles.chartHeader}>
                                <h3 className={styles.chartTitle}>การจัดสรรงบประมาณตามแผนงาน</h3>
                                <p className={styles.chartSubtitle}>แสดงสัดส่วนงบประมาณแยกตามแผนงานหลัก</p>
                            </div>
                            <div className={styles.chartBody}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        layout="vertical"
                                        data={budgetByPlan}
                                        margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                                        <XAxis type="number" hide />
                                        <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 12 }} />
                                        <Tooltip formatter={(value) => new Intl.NumberFormat('th-TH').format(value as number)} />
                                        <Bar dataKey="amount" fill="#568de4" radius={[0, 4, 4, 0]} barSize={20} name="งบประมาณ" /> {/* Rainy Blue */}
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    {/* Projects Table */}
                    <div className={styles.tableCard}>
                        <div className={styles.tableHeader}>
                            <h3 className={styles.tableTitle}>โครงการลงทุนมูลค่าสูงสุด</h3>
                            <button className={styles.viewAllBtn}>ดูโครงการทั้งหมด <i className="fa fa-arrow-right"></i></button>
                        </div>
                        <div className={styles.tableWrapper}>
                            <table className={styles.projectsTable}>
                                <thead>
                                    <tr>
                                        <th>ชื่อโครงการ</th>
                                        <th>งบประมาณ (บาท)</th>
                                        <th>เบิกจ่าย (บาท)</th>
                                        <th>คงเหลือ (บาท)</th>
                                        <th>สถานะ</th>
                                        <th>แผนที่</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topProjects.map((project) => (
                                        <tr key={project.id}>
                                            <td>{project.name}</td>
                                            <td>{project.budget}</td>
                                            <td>{project.disbursed}</td>
                                            <td>{project.remaining}</td>
                                            <td><span className={`${styles.projectStatus} ${styles.statusPlan}`}>{project.status}</span></td>
                                            <td><button style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#999' }}><i className="fa fa-map-marker"></i></button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
