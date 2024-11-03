import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../../components/common/list/CommentList";
import TextInput from "../../components/common/inputs/TextInput";
import Button from "../../components/common/buttons/MoveButton";

function PostViewPage(props) {
    const navigate = useNavigate();
    const [comment, setComment] = useState("");

    return (
        <Container>
            {/* Header Section */}
            <Header></Header>
            <Nav>
                <BackButton onClick={() => navigate(-1)}>❮ 자유게시판</BackButton>
            </Nav>
            <Main>
                <TitleText>
                    <Title>제목</Title>
                    <SubTitle>
                        <DateText>2024-10-25</DateText>
                        <ReportButton>신고하기</ReportButton>
                    </SubTitle>
                </TitleText>
                <Thumbnail />
                <ContentText>내용</ContentText>
                <BottomBar>
                    {/*임시이미지*/}
                    <IconText>❤️ 좋아요 n개</IconText>
                    <IconText>💬 댓글 n개</IconText>
                </BottomBar>
                <CommentContainer>
                    <TextInput
                        height={30}
                        placeholder="답변을 작성해주세요"
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                    />
                    <Button
                        title="→"
                        onClick={() => {
                            console.log("댓글 작성:", comment);
                            setComment("");
                        }}
                    />
                </CommentContainer>
            </Main>
        </Container>
    );
}

// 스타일 컴포넌트 정의
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    font-family: sans-serif;
    background-color: #fff;
`;

const Header = styled.header`
    width: 100%;
    height: 44px;
    background-color: #4caf50;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`;

const Nav = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 16px;
    justify-content: flex-start;
    margin-top:10px;
`;

const BackButton = styled.button`
    font-size: 14px;
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    width: 100%;
`;

const TitleText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
    margin: 0;
`;

const SubTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 4px;
`;

const DateText = styled.p`
    font-size: 14px;
    color: #888;
    margin: 0;
`;

const ReportButton = styled.button`
    background-color: #f2c94c;
    color: white;
    font-size: 12px;
    border: none;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
`;

const Thumbnail = styled.div`
    width: 100%;
    height: 200px;
    background-color: #d9d9d9;
    border-radius: 8px;
    margin-bottom: 16px;
`;

const ContentText = styled.div`
    font-size: 16px;
    color: #333;
    margin-bottom: 16px;
`;

const BottomBar = styled.div`
    display: flex;
    width: 100%;
    justify-content: left;
    align-items: center;
    font-size: 14px;
    color: #888;
    gap: 10px;
    margin-bottom: 16px;

`;

const IconText = styled.p`
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0;
`;

const CommentContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    background: #f4f4f4;
    padding: 8px;
    border-radius: 8px;
`;

export {PostViewPage};
