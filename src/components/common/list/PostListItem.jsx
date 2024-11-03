import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    cursor: pointer;
    background: #F4F4F4;
    border-radius: 2px;
    margin-bottom: 5px;
`;

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 10px;
`;

const TitleText = styled.p`
    font-size: 12px;
    font-weight: bold;
    color: #000000;
    margin: 0;
`;

const ContentText = styled.p`
    font-size: 10px;
    color: #000000;
    margin: 4px 0 8px;
`;

const InfoText = styled.div`
    font-size: 8px;
    color: #575757;
`;

const Thumbnail = styled.div`
    width: 48px;
    height: 48px;
    background-color: #D9D9D9;
    margin-right: 12px;
`;

function PostListItem(props) {
    const { post, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
            <ContentWrapper>
                <TitleText>{post.title}</TitleText>
                <ContentText>{post.content}</ContentText>
                <InfoText>
                    {post.date} 좋아요 {post.likes}개 댓글 {post.comments}개
                </InfoText>
            </ContentWrapper>
            <Thumbnail />
        </Wrapper>
    );
}

export default PostListItem;
