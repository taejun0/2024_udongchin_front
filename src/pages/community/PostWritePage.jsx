import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../../components/common/inputs/TextInput";
import X from "/images/Vector.svg";
import Button from "../../components/common/buttons/PostButton";
import ImageUploaderWithCrop from "@components/specific/imageuploader/ImageUploader";
import { instance } from "../../services/instance";


const Wrapper = styled.div`
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
    width: 100%;
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


const RightImage = styled.img`
    position: absolute;
    cursor: pointer;
    right: 12px;
    width: 12px;
    height: 16px;
`;

function PostWritePage() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [uploadedImage, setUploadedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const isSubmitEnabled = title && content && !loading; // 제목과 내용만 필요한 경우


    const handleImageUpload = (file) => {
        setUploadedImage(file);
        console.log("업로드된 파일:", file);
    };

    const handleSubmit = async () => {
        if (!isSubmitEnabled) return;
    
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("image", uploadedImage);
    
        try {
            setLoading(true);
            const response = await instance.post("/api/post/community/free", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
    
            if (response.status === 200) {
                console.log("게시물 등록 성공:", response.data);
                const token = response.data.token; // 서버에서 받은 토큰
                if (token) {
                    localStorage.setItem("accessToken", token); // 토큰 저장
                    console.log("받은 토큰 및 저장된 토큰:", token);
                }
                navigate("/freeboard"); // 성공 시 메인 페이지로 이동
            } else {
                console.error("게시물 등록 실패:", response.data);
            }
        } catch (error) {
            if (error.response) {
                // 서버가 응답했지만 status가 2xx가 아닌 경우
                console.error("서버 응답 에러:", error.response.status);
                console.error("에러 메시지:", error.response.data);
                
                // 실패 응답 내 토큰 확인
                const token = error.response.data?.token;
                if (token) {
                    localStorage.setItem("accessToken", token); // 토큰 저장
                    console.log("에러 발생 시 받은 토큰 및 저장된 토큰:", token);
                }
            } else if (error.request) {
                console.error("요청 후 응답 없음:", error.request);
            } else {
                console.error("요청 설정 중 오류 발생:", error.message);
            }
            console.error("전체 에러 정보:", error.config);
        } finally {
            setLoading(false);
        }
    };
    
    

    return (
        <Wrapper>
            <Header>
                글쓰기
                <RightImage
                    onClick={() => navigate(-1)} // 이전 화면으로 이동
                    src={X}
                    alt="Close"
                />
            </Header>
            <Container>
                <Location>서울시 중구 신당동</Location>
                <Title>
                    <Heading>제목</Heading>
                    <TextInput
                        height={38}
                        placeholder="제목을 작성해주세요(공백 포함 30자 제한)"
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />
                </Title>
                <Contents>
                    <Heading>내용</Heading>
                    <ImageUploaderWithCrop onImageUpload={handleImageUpload} />
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
                    onClick={handleSubmit}
                    disabled={!isSubmitEnabled} // 버튼 비활성화
                />
            </Container>
        </Wrapper>
    );
}

export { PostWritePage };