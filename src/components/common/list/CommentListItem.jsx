import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    background: white;
`;

const ProfileImage = styled.div`
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: #d9d9d9;
    margin-right: 9px;
`;

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    gap: 5px;
    flex-direction: column;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #333;
`;

const Nickname = styled.span`
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    margin-right: 6px;
    line-height: 18px;
`;

const DateText = styled.span`
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    color: var(--dark-gray, #575757);
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
`;

const ContentText = styled.p`
    color: var(--dark-gray, #575757);
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
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
                <span style={{ marginLeft: "4px" }}>{comment.likes}개</span>
            </LikeWrapper>
        </Wrapper>
    );
}

export default CommentListItem;
