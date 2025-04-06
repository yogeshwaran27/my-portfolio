"use client"
import Head from 'next/head';
import Image from 'next/image';
import { FaLinkedin, FaDownload, FaGraduationCap, FaCode, FaProjectDiagram, FaMapMarkerAlt, FaEnvelope, FaPhone, FaHandsHelping } from 'react-icons/fa';
import styles from './styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1200);
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Yogeshwaran Pandian - Web Developer Portfolio</title>
        <meta name="description" content="Professional portfolio of Yogeshwaran Pandian, Full Stack Web Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.profileContainer}>
            <div className={styles.profileImageWrapper}>
              <Image 
                src="/images/yogesh.jpg" 
                alt="Yogeshwaran Pandian" 
                width={200} 
                height={200} 
                className={styles.profileImage}
                priority
              />
            </div>
            <div className={styles.profileDetails}>
              <h1 className={styles.title}>Yogeshwaran Pandian</h1>
              <h2 className={styles.subtitle}>Web Developer</h2>
              <div className={styles.contactInfo}>
                <p><FaMapMarkerAlt /> Vellore, India 632013</p>
                <p><FaPhone /> +91 7904594398</p>
                <p><FaEnvelope /> yogeshpandian27@gmail.com</p>
              </div>
              <div className={styles.actionButtons}>
                <a 
                  href="https://www.linkedin.com/in/yogeshwaran-pandian-a880b9152/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.linkedinButton}
                >
                  <FaLinkedin /> LinkedIn
                </a>
                {/* <a 
                  href="/files/yogeshwaran-pandian-resume.pdf" 
                  download 
                  className={styles.resumeButton}
                >
                  <FaDownload /> Resume
                </a> */}
              </div>
            </div>
          </div>
        </header>

        <section className={styles.summary}>
          <h2><FaCode /> Professional Summary</h2>
          <p>Experienced Web Developer with a passion for creating attractive and interactive websites tailored to customer needs and exceeding expectations. Well-versed in developing custom websites with expertise in HTML, CSS, JavaScript, and modern web frameworks.</p>
        </section>

        <section className={styles.skills}>
          <h2><FaCode /> Technical Skills</h2>
          <ul>
            <li><strong>Languages & Frameworks:</strong> JavaScript, TypeScript, Python</li>
            <li><strong>Frontend:</strong> React.js, HTML, CSS</li>
            <li><strong>Backend:</strong> Node.js, Express, NestJS, FastAPI</li>
            <li><strong>Database:</strong> SQL, PostgreSQL</li>
            <li><strong>Other:</strong> Azure, Firebase, D3.js, Leaflet</li>
          </ul>
        </section>

        <section className={styles.experience}>
          <h2><FaProjectDiagram /> Professional Experience</h2>
          <div className={styles.experienceItem}>
            <h3>Apprentice Leader – Mu Sigma, Bangalore</h3>
            <p className={styles.period}>Jan 2025 – Present</p>
            <ul>
              <li>Managed projects by prioritizing tasks, allocating resources, and ensuring timely delivery.</li>
              <li>Addressed client concerns promptly and provided exceptional service to improve satisfaction.</li>
            </ul>
          </div>
          <div className={styles.experienceItem}>
            <h3>Decision Scientist – Mu Sigma, Bangalore</h3>
            <p className={styles.period}>Aug 2021 – Dec 2024</p>
            <ul>
              <li>Collaborated with Fortune 500 clients to design scalable data-driven solutions.</li>
              <li>Built real-time analytics apps using React.js, NestJS, FastAPI.</li>
              <li>Developed Azure cloud-based dashboards and APIs.</li>
              <li>Led frontend development for healthcare and supply chain tools.</li>
            </ul>
          </div>
        </section>

        <section className={styles.projects}>
          <h2><FaProjectDiagram /> Key Projects</h2>
          <ul>
            <li><strong>LRPP – Long Range Portfolio Planning:</strong> Forecasted medical device inventory. (Tech: Python, SQL, React.js)</li>
            <li><strong>MCMP – M Community My Pharmacy:</strong> Mapped underserved populations. (Tech: React.js, Leaflet, Firebase)</li>
            <li><strong>CCDR – Critical Care Drug Reserve:</strong> Visualized drug stockpiles. (Tech: NestJS, PostgreSQL, Azure)</li>
            <li><strong>SCRM – Supply Chain Resiliency Mapping:</strong> Disaster impact monitoring. (Tech: D3.js, React, FastAPI)</li>
          </ul>
        </section>

        <section className={styles.education}>
          <h2><FaGraduationCap /> Education</h2>
          <p><strong>B.Tech in Computer Science and Engineering</strong><br />Vellore Institute of Technology, Vellore (2017 – 2021)</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Yogeshwaran Pandian.</p>
      </footer>
    </div>
  );
}
