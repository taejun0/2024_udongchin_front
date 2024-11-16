import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../../components/common/inputs/TextInput";
import X from "/images/Vector.svg";
import Button from "../../components/common/buttons/PostButton";
import ImageUploaderWithCrop from "@components/specific/imageuploader/ImageUploader";
import { instance } from "../../services/instance"; // Axios instance

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    padding: 20px;
    font-family: ${({ theme }) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
`;

const Header = styled.div`
    display: flex;
    width: 100%;
    height: 44px;
    flex-shrink: 0;
    border-bottom: 1px solid var(--Yellow, #E3B05F);
    background: var(--light-yellow, #FFFFE5);
    color: var(--black, #232323);
    font-family: ${({ theme }) => theme.fonts.NanumSquareRoundOTFR["font-family"]};
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

function PostEditPage(props) {
    const navigate = useNavigate();
    const { id: postId } = useParams();
    console.log("Fetched postId:", postId); // postId 값을 콘솔에 출력


    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [uploadedImage, setUploadedImage] = useState(null);

    // 게시물 데이터 로드
    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const response = await instance.get(`/api/post/community/free/${postId}`);
                if (response.status === 200) {
                    const { title, content, imageUrl } = response.data.data;
                    setTitle(title); // 제목 설정
                    setContent(content); // 내용 설정
                    setUploadedImage(imageUrl); // 기존 이미지 설정
                } else {
                    console.error("게시물 데이터를 불러오는 데 실패했습니다:", response);
                }
            } catch (error) {
                console.error("게시물 데이터를 불러오는 중 오류 발생:", error);
            }
        };

        fetchPostData();
    }, [postId]);

    const handleImageUpload = (file) => {
        setUploadedImage(file);
        // console.log('업로드된 파일:', file);
        console.log("업로드된 파일:", file);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("title", title); // 제목 추가
        formData.append("content", content); // 내용 추가
        if (uploadedImage instanceof File) {
            formData.append("image", uploadedImage); // 새로운 이미지 파일 추가
        }

        try {
            const response = await instance.update(`/api/post/community/free/${postId}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status === 200) {
                alert("게시물이 성공적으로 수정되었습니다.");
                navigate("/"); // 수정 성공 후 메인 페이지로 이동
            } else {
                console.error("게시물 수정 실패:", response);
                alert("게시물 수정에 실패했습니다.");
            }
        } catch (error) {
            console.error("게시물 수정 중 오류 발생:", error);
            alert("게시물 수정 중 오류가 발생했습니다.");
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
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </Title>
                <Contents>
                    <Heading>내용</Heading>
                    <ImageUploaderWithCrop onImageUpload={handleImageUpload} />
                    <TextInput
                        height={367}
                        placeholder="내용"
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                    />
                </Contents>
                <Button
                    height="37px"
                    title="제출하기"
                    backgroundColor="#5b3200"
                    color="#fff"
                    onClick={handleSubmit} // 제출 버튼 클릭 시 API 호출
                />
            </Container>
        </Wrapper>
    );
}

export { PostEditPage };
