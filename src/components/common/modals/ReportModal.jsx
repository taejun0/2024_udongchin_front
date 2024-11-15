import React, { useState } from "react";
import { instance } from "../../../services/instance";
import * as S from "./styled";

export const ReportModal = ({ onConfirm, onCancel, postId }) => {
    const [reason, setReason] = useState("");
    const [otherReason, setOtherReason] = useState("");

    const handleReasonChange = (event) => {
        setReason(event.target.value);
    };

    // 신고 요청을 보내는 함수
    const handleSubmit = async () => {
        try {
            // 신고 데이터 객체 생성
            const reportData = {
                post_id: postId, // props로 받은 postId 사용
                reason: reason === "other" ? "기타" : reason,
            };

            // reason이 "other"인 경우에만 customReason 추가
            if (reason === "other") {
                reportData.customReason = otherReason;
            }

            // API 요청 보내기
            const response = await instance.post(`/api/post/community/{postId}/warn`, reportData);

            // 성공 시 onConfirm 호출
            onConfirm(response.data.message);
        } catch (error) {
            console.error("신고 접수 중 오류 발생:", error);
            alert("신고를 접수하는 중에 오류가 발생했습니다.");
        }
    };

    return (
        <S.ModalOverlay>
            <S.ModalContent>
                <S.TextType2>해당 게시물을 신고하시겠습니까?</S.TextType2>
                <S.RModalSection>
                    <S.RTextType>신고 사유</S.RTextType>
                    <S.RModalSection2>
                        <S.RadioLabel>
                            <S.RadioButton
                                type="radio"
                                name="reason"
                                value="inappropriate_content"
                                checked={reason === 'inappropriate_content'}
                                onChange={handleReasonChange}
                            />
                            부적절한 내용이 표기됨
                        </S.RadioLabel>
                        <S.RadioLabel>
                            <S.RadioButton
                                type="radio"
                                name="reason"
                                value="animal_abuse"
                                checked={reason === 'animal_abuse'}
                                onChange={handleReasonChange}
                            />
                            동물 학대 및 유기, 납치 범죄 의심
                        </S.RadioLabel>
                    </S.RModalSection2>
                    <S.RModalSection2>
                        <S.RadioLabel>
                            <S.RadioButton
                                type="radio"
                                name="reason"
                                value="other"
                                checked={reason === 'other'}
                                onChange={handleReasonChange}
                            />
                            기타
                        </S.RadioLabel>
                        {reason === 'other' && (
                            <S.OtherReasonInput
                                type="text"
                                placeholder="사유를 작성해주세요"
                                value={otherReason}
                                onChange={(e) => setOtherReason(e.target.value)}
                            />
                        )}
                    </S.RModalSection2>
                </S.RModalSection>
                <S.RSubText>
                    신고 시, 우동친 운영진이 직접 확인 후 신고 사유에 따라 조치할 예정입니다.
                </S.RSubText>
                <S.Row>
                    <S.Button color="#5B3200" onClick={handleSubmit}>신고하기</S.Button>
                    <S.Button color="#989898" onClick={onCancel}>취소하기</S.Button>
                </S.Row>
            </S.ModalContent>
        </S.ModalOverlay>
    );
};

export default ReportModal;
