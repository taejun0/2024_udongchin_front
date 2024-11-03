import React, { useState } from "react";
import { useLocation } from "@contexts/LocationContext";
import { useQnaMarkerPost } from "@hooks/useQnaMarkerPost";
import * as S from "./styled";
import Vector from "/images/Vector.svg";
import ImageUploaderWithCrop from "@components/specific/imageuploader/ImageUploader";

export const QnaMarkerModal = ({ type, onClose }) => {
  const { location } = useLocation();
  const { submitMarkerData, loading, error } = useQnaMarkerPost();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedType, setSelectedType] = useState("기록");

  const isSubmitEnabled = title && content && uploadedImage && selectedType && !loading; // 모든 필드가 채워진 경우


  const handlePost = async () => {
    if (!location) {
      alert("위치 정보를 가져오지 못했습니다.");
      return;
    }

    const markerData = {
      title,
      content,
      photo,
      lat: location.lat(),
      lng: location.lng(),
      type: selectedType,
    };

    await submitMarkerData(markerData); // 데이터 제출

    if (!error) onClose(); // 에러가 없으면 모달 닫기
  };

  const handleImageUpload = (file) => {
    setUploadedImage(file);
    console.log('업로드된 파일:', file);
  };

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ModalSection>
          <S.TextType>{type === "기록" ? "실시간 우동친 작성" : "우동친 제보"}<img src={Vector} onClick={onClose} style={{cursor:"pointer"}}/></S.TextType>
          <S.LINE></S.LINE>
          <S.SubText>실시간 우동친 작성 시 해당 기록은 7일동안 지도에 공유되며,<br />동네 커뮤니티에 자동으로 글이 업로드됩니다.</S.SubText>
        </S.ModalSection>
        <S.ModalSection2>
          <S.SubTextType>사진 업로드</S.SubTextType>
          <ImageUploaderWithCrop onImageUpload={handleImageUpload} />
          <S.SubTextType>제목 작성</S.SubTextType>
          <S.TextInput
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="공백 포함 25글자 이내로 작성"
            style={{height: 38}}
          />
          <S.SubTextType>한줄 설명</S.SubTextType>
          <S.TextInput
            type="textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="공백 포함 50글자 이내로 작성"
            style={{minHeight: 100}}
          />
        </S.ModalSection2>
        <S.ModalSection3>
          <S.SubTextType>실시간 우동친 유형 선택</S.SubTextType>
          <S.ToggleButton>
            <S.ToggleOption
              $isSelected={selectedType === "기록"}
              onClick={() => setSelectedType("기록")}
            >
              실시간 기록
            </S.ToggleOption>
            <S.ToggleOption
              $isSelected={selectedType === "Q&A"}
              onClick={() => setSelectedType("Q&A")}
            >
              실시간 Q&A
            </S.ToggleOption>
          </S.ToggleButton>
          <S.SubText>실시간 기록으로 진행 시 해당 기록은 우리 동네 사람들에게만 공유됩니다.<br />실시간 Q&A로 진행 시 해당 기록은 모든 동네 사람들에게 공유되며,<br />커뮤니티 댓글을 통해 빠르게 답변받을 수 있습니다.</S.SubText>
        </S.ModalSection3>

        <S.SubmitButton
          onClick={handlePost}
          disabled={!isSubmitEnabled}
          $isSubmitEnabled={isSubmitEnabled}
        >
          {loading ? "추가 중..." : "제출하기"}
        </S.SubmitButton>
        {error && <p style={{ color: "red", marginTop: "10px" }}>에러: {error}</p>}
      </S.ModalContent>
    </S.ModalOverlay>
  );
};
