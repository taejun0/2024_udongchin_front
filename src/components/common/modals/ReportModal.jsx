import React, { useState } from "react";
import * as S from "./styled";

export const ReportModal = ({ onConfirm, onCancel }) => {
    const [reason, setReason] = useState("");
    const [otherReason, setOtherReason] = useState("");

    const handleReasonChange = (event) => {
        setReason(event.target.value);
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
            <S.RSubText>신고 시, 우동친 운영진이 직접 확인 후 신고 사유에 따라 조치할 예정입니다.</S.RSubText>
            <S.Row>
            <S.Button color="#5B3200" onClick={() => onConfirm(reason, customReason)}>신고하기</S.Button>
            <S.Button color="#989898" onClick={onCancel}>취소하기</S.Button>
            </S.Row>
        </S.ModalContent>
        </S.ModalOverlay>
    );
};

export default ReportModal; 