// src/components/LoginPage.jsx
import React from 'react';
import styles from './LoginStyle.js';

function LoginPage() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <button style={styles.backButton}>←</button>
        <h1 style={styles.title}>로그인</h1>
      </header>
      <main style={styles.main}>
        <h2 style={styles.loginTitle}>로고</h2>
        
        <label style={styles.label}>
          아이디 입력
          <input
            type="text"
            placeholder="아이디를 입력해주세요."
            style={styles.input}
          />
        </label>
        
        <label style={styles.label}>
          비밀번호 입력
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            style={styles.input}
          />
        </label>
        
        <button style={styles.loginButton}>로그인</button>
        <button style={styles.signupButton}>회원가입</button>
      </main>
    </div>
  );
}

export { LoginPage };
