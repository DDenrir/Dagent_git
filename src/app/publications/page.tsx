
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function PublicationsPage() {
    const papers = [
        {
            id: 1,
            title: "Supply Chain Transparency and Risk Management in Community Enterprises: A Case Study of Phetchabun Province",
            authors: "Wongin, W., & Meesuuk, P.",
            journal: "Journal of Community Development Research (Humanities and Social Sciences)",
            year: "2025",
            volume: "18(2)",
            pages: "120-135",
            type: "TCI 1",
            citation: 12
        },
        {
            id: 2,
            title: "Factors Influencing Online Purchasing Decisions of OTOP Products",
            authors: "Hemman, S.",
            journal: "Management Sciences Review",
            year: "2024",
            volume: "10(1)",
            pages: "45-60",
            type: "TCI 2",
            citation: 5
        },
        {
            id: 3,
            title: "Sustainable Water Resource Management for Agriculture using IoT",
            authors: "Meesuuk, P., & Jaidee, S.",
            journal: "International Journal of Environmental Science and Technology",
            year: "2024",
            volume: "21(4)",
            pages: "305-320",
            type: "Scopus",
            citation: 28
        }
    ];

    const getTypeClass = (type: string) => {
        switch (type) {
            case 'TCI 1': return styles.tci1;
            case 'TCI 2': return styles.tci2;
            case 'Scopus': return styles.scopus;
            default: return '';
        }
    };

    const getBadgeClass = (type: string) => {
        switch (type) {
            case 'TCI 1': return styles.badgeTci1;
            case 'TCI 2': return styles.badgeTci2;
            case 'Scopus': return styles.badgeScopus;
            default: return '';
        }
    };

    return (
        <div className={styles.pageContainer}>
            <Sidebar />
            <main className={styles.mainContent}>
                <Navbar />
                <div className={styles.contentWrapper}>

                    <div className={styles.pageHeader}>
                        <h1 className={styles.pageTitle}>ตีพิมพ์เผยแพร่ (Publications)</h1>
                        <p className={styles.pageSubtitle}>บทความวิจัยและวิชาการที่ได้รับการตีพิมพ์ในระดับชาติและนานาชาติ</p>
                    </div>

                    <div className={styles.journalList}>
                        {papers.map((paper) => (
                            <div key={paper.id} className={`${styles.journalCard} ${getTypeClass(paper.type)}`}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.articleTitle}>{paper.title}</h3>
                                    <span className={`${styles.journalBadge} ${getBadgeClass(paper.type)}`}>{paper.type}</span>
                                </div>

                                <div className={styles.authorList}>
                                    <i className="fa fa-users"></i> {paper.authors}
                                </div>

                                <div className={styles.metaInfo}>
                                    <span className={styles.journalName}>{paper.journal}</span>
                                    <span>Vol. {paper.volume}, No. {paper.year}</span>
                                    <span>pp. {paper.pages}</span>
                                    <span><i className="fa fa-quote-right"></i> Cited by {paper.citation}</span>
                                </div>

                                <div className={styles.actions}>
                                    <a href="#" className={styles.actionBtn}>
                                        <i className="fa fa-file-pdf-o"></i> Abstract
                                    </a>
                                    <a href="#" className={styles.actionBtn}>
                                        <i className="fa fa-external-link"></i> Full Text
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
