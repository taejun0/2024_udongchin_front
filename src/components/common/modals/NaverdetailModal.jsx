import * as S from "./styled";
import React, { useState } from "react";
import { useLike } from "@hooks/useLike";
import { useUrgent } from "@hooks/useUrgent";
import { WarningModal } from "./WarningModal";
import { useNavigate } from "react-router-dom";

import X from "/images/Vector.svg";
import Warning from "/images/warning.svg";
import Warning_now from "/images/warning_now.svg";
import Heart from "/images/Heart.svg";
import FilledHeart from "/images/FilledHeart.svg";
import rightArrow from "/images/rightArrow.svg";

export const NaverDetailModal = ({ location, markerImages, onClose }) => {
  const { isLiked, likesCount, toggleLike } = useLike(location.id, location.likesCount);
  const { Urgent, isLoading } = useUrgent(location.id);
  const [modalOpen, setModalOpen] = useState(false);
  const dateOnly = location.createdAt.substring(0, 10);
  const imageUrl = markerImages[location.imageUrl] || "/images/default-marker.png";

  const navigate = useNavigate();

  const handleConfirm = () => {
    Urgent();
    setModalOpen(false);
  };

  return (
    <S.ModalOverlay >
      <S.ModalContent $Urgent = {location.urgent}>
        <S.InformationHeader>
          <S.User>
            <img src={location.imageUrl} style={{width: "34px", height: "34px", borderRadius: "50%"}} />
            <S.UserInfo>
              <S.UserName>{location.nickname}</S.UserName>
              <S.UserCreated>{dateOnly} 작성</S.UserCreated>
            </S.UserInfo>
          </S.User>
          <S.Buttons>
          {location.mode === "실시간 Q&A" ? (location.urgent === false ? (<button onClick={() => setModalOpen(true)}><img src={Warning} style={{ width: "14px", height: "14px", cursor: "pointer" }} /></button>) : (<img src={Warning_now} style={{ width: "50px"}}/>)) : null}
            <button onClick={onClose}><img src={X} style={{width: "12px", height: "12px", cursor: "pointer", transform:"translateY(3px)"}} /></button>
          </S.Buttons>
        </S.InformationHeader>
        <img src={imageUrl} style={{width: "100%", height: "100%"}} />
        <div>
          <S.RowBetween>
            <S.InfoTitle>{location.title}</S.InfoTitle>
            <S.HeartRaTe>
              <img
                src={isLiked ? FilledHeart : Heart}
                onClick={toggleLike}
                style={{width: "16px", height: "16px", cursor: "pointer"}} />
              <S.HeartCount>{location.likesCount}개</S.HeartCount>
            </S.HeartRaTe>
          </S.RowBetween>
          <S.InfoContent>{location.content}</S.InfoContent>
        </div>
        <S.LinePad />
        <S.CommentText>전체 답변 {location.commentCount}건</S.CommentText>
        <S.RowBetween>
          <S.CommentText2 onClick={() => {
            if (location.type === "자유게시판") {
              navigate(`/freeboard/${location.id}`)
            } else if (location.type === "홍보게시판") {
              navigate(`/prboard/${location.id}`)
            }
            navigate()
          }}>답변 작성하러 가기</S.CommentText2>
          <img src={rightArrow} />
        </S.RowBetween>
      </S.ModalContent>
      {modalOpen && <WarningModal onConfirm={handleConfirm} onCancel={()=>setModalOpen(false)}/>}
    </S.ModalOverlay>
  );
};