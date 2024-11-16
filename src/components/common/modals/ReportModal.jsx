import React, { useState } from "react";
import * as S from "./styled";

export const ReportModal = ({ onConfirm, onCancel }) => {
    const [reason, setReason] = useState(""); // 신고 사유 상태
    const [otherReason, setOtherReason] = useState(""); // 기타 사유 상태

    const handleReasonChange = (event) => {
        setReason(event.target.value);
        if (event.target.value !== "other") {
            setOtherReason(""); // "기타"가 아닌 경우, 기타 사유 초기화
        }
    };

    const handleConfirm = () => {
        onConfirm(reason, otherReason); // 신고 사유와 기타 사유 전달
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
                                checked={reason === "inappropriate_content"}
                                onChange={handleReasonChange}
                            />
                            부적절한 내용이 표기됨
                        </S.RadioLabel>
                        <S.RadioLabel>
                            <S.RadioButton
                                type="radio"
                                name="reason"
                                value="animal_abuse"
                                checked={reason === "animal_abuse"}
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
                                checked={reason === "other"}
                                onChange={handleReasonChange}
                            />
                            기타
                        </S.RadioLabel>
                        {reason === "other" && (
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
                    <S.Button color="#5B3200" onClick={handleConfirm}>
                        신고하기
                    </S.Button>
                    <S.Button color="#989898" onClick={onCancel}>
                        취소하기
                    </S.Button>
                </S.Row>
            </S.ModalContent>
        </S.ModalOverlay>
    );
};

export default ReportModal;
