import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../../components/common/inputs/TextInput";
import Button from "../../components/common/buttons/PostButton";
import ImageUploaderWithCrop from "@components/specific/imageuploader/ImageUploader";


const Wrapper = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    padding: 20px;
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
`;

const Header = styled.div`
    display: flex;
    width: 400px;
    height: 44px;
    flex-shrink: 0;
    border-bottom: 1px solid var(--Yellow, #E3B05F);
    background: var(--light-yellow, #FFFFE5);
    color: var(--black, #232323);
    font-family: ${({theme}) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    align-items: center;
    justify-content: center;
`;

const Location = styled.h3`
    display: flex;
    width: 359px;
    align-items: flex-start;
    gap: 15px;
    color: #575757;
    margin-bottom: 16px;
`;

const Title = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;

const Contents = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-top: 11px;
    margin-bottom: 18px;
`;

const Heading = styled.h2`
    color: var(--black, #232323);
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

function PostWritePage(props) {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [uploadedImage, setUploadedImage] = useState(null);

    const isSubmitEnabled = title && content && uploadedImage && !loading; // 모든 필드가 채워진 경우



    const handleImageUpload = (file) => {
        setUploadedImage(file);
        console.log('업로드된 파일:', file);
    };

    return (
        <Wrapper>
            <Header>글쓰기</Header>
            <Container>
                <Location>서울시 중구 신당동</Location>
                <Title>
                    <Heading>제목</Heading>
                    <TextInput
                        height={38}
                        placeholder="공백 포함 25글자 이내로 작성"
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />
                </Title>
                <Contents>
                    <Heading>내용</Heading>
                    <ImageUploaderWithCrop onImageUpload={handleImageUpload}/>
                    <TextInput
                        height={367}
                        placeholder="내용"
                        value={content}
                        onChange={(event) => {
                            setContent(event.target.value);
                        }}
                    />
                </Contents>
                <Button
                    height="37px"
                    title="제출하기"
                    backgroundColor="#5b3200"
                    color="#fff"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </Container>
        </Wrapper>
    );
}
export {PostWritePage};
