import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../../components/common/list/PostList";
import Button from "../../components/common/buttons/MoveButton";
import styles from './FullStyle';

function FullBoard() {
    const navigate = useNavigate();
    return (
        <div style={styles.container}>
            {/* Header Section */}
            <header style={styles.header}>
                <h1 style={styles.title}>우동친</h1>
            </header>
            {/* Location Section */}
            <Nav>
            <button style={styles.backButton} onClick={() => navigate(-1)}>❮ 전체게시판</button>
                <h3 style={styles.subtitle}>우리 동네 커뮤니티</h3>
            </Nav>
            <Bar>
                <button>▼ 최신순</button>
                <button>▼ 좋아요순</button>
                <button>▼ 댓글순</button>
                <Button
                        title="글쓰기"
                        onClick={() => navigate("/postwrite")}
                        style={styles.arrowButton}
                    />
            </Bar>
            <main>
                <PostList/>
            </main>
        </div>
    );
}

const Nav = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 16px;
`;

const Bar = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 16px;
`;


export {FullBoard};