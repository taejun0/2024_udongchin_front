import React, { useState, useEffect } from "react";
import { useLocation } from "@contexts/LocationContext";
import { useQnaMarkerPost } from "@hooks/useQnaMarkerPost";
import * as S from "./styled";
import Vector from "/images/Vector.svg";
import ImageUploaderWithCrop from "@components/specific/imageuploader/ImageUploader";

export const QnaMarkerModal = ({ type, onClose, latitude, longitude, dongAddress }) => {
  const { submitMarkerData, loading, error } = useQnaMarkerPost();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedType, setSelectedType] = useState("실시간 기록");

  const isSubmitEnabled = title && content && uploadedImage && selectedType && !loading; // 모든 필드가 채워진 경우

  const handlePost = async () => {
    if (!dongAddress) {
      alert("주소를 가져오는 데 실패했습니다.");
      return;
    }
  
    const markerData = {
      title,
      content,
      photo: uploadedImage,
      type: selectedType,
      locations: [latitude, longitude, dongAddress],
    };
  
    await submitMarkerData(markerData);
  
    if (!error) onClose();
  };

  const handleImageUpload = (file) => {
    setUploadedImage(file);
    setPhoto(file);
  };

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ModalSection>
          <S.TextType>{type === "실시간 기록" ? "실시간 우동친 작성" : "우동친 제보"}<img src={Vector} onClick={onClose} style={{width: "12px", height: "12px", cursor:"pointer"}}/></S.TextType>
          <S.LINE></S.LINE>
          <S.SubText>해당 기록은 [작성 당시의 현재 위치] 기준으로 7일동안 지도에 공유되며,<br />동네 커뮤니티에 자동으로 글이 업로드됩니다.</S.SubText>
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
        <S.Radios>
            <S.RadioLabel2
              onClick={() => setSelectedType("실시간 기록")}
              $isSelected={selectedType === "실시간 기록"} // 선택 여부에 따라 스타일 적용
            >
              <S.RadioInput
                type="radio"
                value="실시간 기록"
                checked={selectedType === "실시간 기록"}
                readOnly
              />
              실시간 기록
            </S.RadioLabel2>
            <S.RadioLabel2
              onClick={() => setSelectedType("실시간 Q&A")}
              $isSelected={selectedType === "실시간 Q&A"}
            >
              <S.RadioInput
                type="radio"
                value="실시간 Q&A"
                checked={selectedType === "실시간 Q&A"}
                readOnly
              />
              실시간 Q&A
            </S.RadioLabel2>
          </S.Radios>
          <S.SubTextType>실시간 우동친 유형 선택</S.SubTextType>
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