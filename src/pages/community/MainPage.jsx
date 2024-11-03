import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostListItem from "../../components/common/list/PostListItem";
import Button from "../../components/common/buttons/MoveButton";
import styles from './MainStyle';

function MainPage() {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            {/* Header Section */}
            <header style={styles.header}>
                <button style={styles.backButton} onClick={() => navigate(-1)}>❮</button>
                <h1 style={styles.title}>우동친</h1>
            </header>

            {/* Location Section */}
            <Nav>
                <div style={styles.location}>📍 서울시 중구 신당동</div>
                <h3 style={styles.subtitle}>우리 동네 커뮤니티</h3>
            </Nav>

            {/* Main Content Section */}
            <main style={styles.main}>
                {/* 전체게시판 Section */}
                <SectionHeader>
                    <h4>전체게시판</h4>
                    <Button
                        title="❯"
                        onClick={() => navigate("/fullboard")}
                        style={styles.arrowButton}
                    />
                </SectionHeader>
                <Content>
                    <PostListItem post={{ title: "제목 1", content: "내용 1", date: "2024-10-25", likes: 5, comments: 2 }} />
                    <PostListItem post={{ title: "제목 1", content: "내용 1", date: "2024-10-25", likes: 5, comments: 2 }} />
                    <PostListItem post={{ title: "제목 1", content: "내용 1", date: "2024-10-25", likes: 5, comments: 2 }} />
                </Content>
                {/* 자유게시판 Section */}
                <SectionHeader>
                    <h4>자유게시판</h4>
                    <Button
                        title="❯"
                        onClick={() => navigate("/freeboard")}
                        style={styles.arrowButton}
                    />
                </SectionHeader>
                <Content>
                    <PostListItem post={{ title: "제목 1", content: "내용 1", date: "2024-10-25", likes: 5, comments: 2 }} />
                    <PostListItem post={{ title: "제목 1", content: "내용 1", date: "2024-10-25", likes: 5, comments: 2 }} />
                    <PostListItem post={{ title: "제목 1", content: "내용 1", date: "2024-10-25", likes: 5, comments: 2 }} />
                </Content>
                {/* Help Section */}
                <HelpSection>
                    <h4>도움이 필요한 동물을 발견하셨나요?</h4>
                </HelpSection>
            </main>
        </div>
    );
}

// Styled Components
const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 21px;
`;

const HelpSection = styled.div`
    width: 100%;
    background-color: #f5f5f5;
    padding: 16px;
    margin-top: 24px;
    text-align: center;
    font-size: 14px;
`;

const HelpButton = styled.button`
    margin-top: 8px;
    padding: 8px 12px;
    font-size: 14px;
    color: white;
    background-color: #4CAF50;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const Nav = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 16px;
`;

const Content = styled.div`
    display: flex;
    width: 90%;
    flex-direction: column;
    margin-top: 8px;
    margin-bottom: 5px;
`;
export {MainPage};
