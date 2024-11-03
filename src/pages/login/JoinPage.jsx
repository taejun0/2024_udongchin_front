import React from 'react';
import styles from './JoinStyle';

const JoinPage = () => {
    return (
        <div style={styles['signup-container']}>
            <header style={styles.header}>
                <button style={styles['back-button']}>←</button>
                <h1 style={styles.title}>회원가입</h1>
            </header>
        <main style={styles.main}>
            <div style={styles['form-group']}>
                <label htmlFor="nickname">닉네임 입력</label>
                <input type="text" id="nickname" placeholder="춤추는 개구리" style={styles['input-field']}/>
            </div>

            <div style={styles['form-group']}>
                <div style={styles['input-with-check']}>
                    <label htmlFor="username">아이디 입력</label>
                    <button style={styles['check-button']}>중복확인</button>
                </div>
                    <input type="text" id="username" placeholder="아이디를 입력해주세요." style={styles['input-field']} />
            </div>

            <div style={styles['form-group']}>
                <label htmlFor="password">비밀번호 입력</label>
                <input type="password" id="password" placeholder="비밀번호를 입력해주세요." style={styles['input-field']} />
            </div>

            <div style={styles['form-group']}>
                <label htmlFor="passwordConfirm">비밀번호 확인</label>
                <input type="password" id="passwordConfirm" placeholder="비밀번호를 입력해주세요." style={styles['input-field']} />
            </div>

            <button style={styles['submit-button']}>다음</button>
        </main>
        </div>
    );
};

export { JoinPage };
