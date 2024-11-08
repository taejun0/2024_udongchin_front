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
    margin-bottom: 10px;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
`;

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px 12px;
    align-items: flex-start;
    justify-content: center;
`;

const TitleText = styled.p`
    font-size: 12px;
    font-weight: 600;
    color: #000000;
    margin-top: 5px;
`;

const ContentText = styled.p`
    font-size: 10px;
    color: #000000;
    margin: 6px 0 3px;
`;

const InfoText = styled.div`
    font-size: 8px;
    color: #575757;
    display: flex;
    gap: 5px;
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
                    <span>{post.date}</span> 
                    <span>좋아요 {post.likes}개</span> 
                    <span>댓글 {post.comments}개</span>
                </InfoText>
            </ContentWrapper>
            <Thumbnail />
        </Wrapper>
    );
}

export default PostListItem;
