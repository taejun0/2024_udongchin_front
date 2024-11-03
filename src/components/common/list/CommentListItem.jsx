import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 8px 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
    background: white;
`;

const ProfileImage = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #d3d3d3;
    margin-right: 12px;
`;

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #333;
`;

const Nickname = styled.span`
    font-weight: bold;
    margin-right: 8px;
`;

const DateText = styled.span`
    color: #888;
    font-size: 12px;
`;

const ContentText = styled.p`
    font-size: 14px;
    color: #555;
    margin: 4px 0 0 0;
`;

const LikeWrapper = styled.div`
    display: flex;
    align-items: center;
    color: #888;
    font-size: 12px;
    margin-left: 8px;
    cursor: pointer;

    &:hover {
        color: #e74c3c;
    }
`;

function CommentListItem(props) {
    const { comment } = props;

    return (
        <Wrapper>
            <ProfileImage />
            <ContentWrapper>
                <Header>
                    <Nickname>{comment.nickname}</Nickname>
                    <DateText>{comment.date}</DateText>
                </Header>
                <ContentText>{comment.content}</ContentText>
            </ContentWrapper>
            <LikeWrapper>
                <FaHeart />
                <span style={{ marginLeft: "4px" }}>{comment.likes}개</span>
            </LikeWrapper>
        </Wrapper>
    );
}

export default CommentListItem;
