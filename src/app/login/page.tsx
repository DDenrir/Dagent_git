'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
// Note: FontAwesome is already included in layout.tsx via CDN

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Mock Authentication Logic
    // In a real app, this would call an API endpoint
    if (username === 'admin' && password === 'password') {
      // Successful login
      // For now, just redirect to the dashboard
      router.push('/');
    } else {
      setError('ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.loginLogo}>
          <b>Research</b>@PCRU
        </div>
        <div className={styles.loginBoxBody}>
          <p className={styles.loginMsg}>เข้าสู่ระบบเพื่อเริ่มใช้งาน</p>

          <form onSubmit={handleLogin}>
            {error && <div className={styles.error}>{error}</div>}

            <div className={styles.formGroup}>
              <input
                type="text"
                className={styles.formControl}
                placeholder="ชื่อผู้ใช้งาน"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <span className={`${styles.formIcon} fa fa-user`}></span>
            </div>

            <div className={styles.formGroup}>
              <input
                type="password"
                className={styles.formControl}
                placeholder="รหัสผ่าน"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className={`${styles.formIcon} fa fa-lock`}></span>
            </div>

            <button type="submit" className={styles.btn}>
              เข้าสู่ระบบ
            </button>
          </form>

          <div className={styles.links}>
            <a href="#">ลืมรหัสผ่าน?</a>
            <br />
            <a href="/" className={`text-center ${styles.homeLink}`}>
              ดูลายละเอียดหน้าแรก
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
