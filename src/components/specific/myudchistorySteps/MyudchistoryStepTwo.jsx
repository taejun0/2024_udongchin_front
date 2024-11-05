import React, { useState } from "react";
import * as S from "./styled2";
import folder from "/images/folder.svg";
import npencil from "/images/history_npencil.svg";
import nheart from "/images/history_nheart.svg";
import nchat from "/images/history_nchat.svg";
import pencil from "/images/history_pencil.svg";
import heart from "/images/history_heart.svg";
import chat from "/images/history_chat.svg";
import ntri from "/images/history_ntri.svg";
import tri from "/images/history_tri.svg";
import location from "/images/history_location.svg";

export const MyudchistoryStepTwo = () => {
  const [filter1, setFilter1] = useState("pen");
  const [filter2, setFilter2] = useState("his");

  const handleFilter1 = (filter1) => {
    setFilter1(filter1);
  }
  return (
    <>
      <S.Header>
        <S.CustomImage src={folder} /> 
        <S.Title>전체 보기</S.Title>
      </S.Header>
      <S.Filter>
        <S.FilterItem
          onClick={() => handleFilter1("pen")}
          $isSelected={filter1 === "pen"}
        ><S.CustomImage2 src={filter1 === "pen" ? pencil : npencil}/></S.FilterItem>
        <S.FilterItem
          onClick={() => handleFilter1("heart")}
          $isSelected={filter1 === "heart"}
        ><S.CustomImage2 src={filter1 === "heart" ? heart : nheart}/></S.FilterItem>
        <S.FilterItem
          onClick={() => handleFilter1("chat")}
          $isSelected={filter1 === "chat"}
        ><S.CustomImage2 src={filter1 === "chat" ? chat : nchat}/></S.FilterItem>
      </S.Filter>
      <S.Section>
        <S.FilterSec>
          <S.Text>내가 작성한 우동친 (12)</S.Text>
          <S.LINE />
          <S.Filter2>
            <S.FilterItem2><S.CustomImage3 src={ntri} />우동친 기록</S.FilterItem2>
            <S.FilterItem2><S.CustomImage3 src={ntri} />우동친 Q&A</S.FilterItem2>
          </S.Filter2>
        </S.FilterSec>
        <S.ImageSec>
          <S.Location><S.CustomImage3 src={location} />서울시 중구 신당동</S.Location>
          <S.Images>
            <S.Image src={folder}></S.Image>
            <S.Image src={folder}></S.Image>
            <S.Image src={folder}></S.Image>
            <S.Image src={folder}></S.Image>
            <S.Image src={folder}></S.Image>
          </S.Images>
        </S.ImageSec>
      </S.Section>
      
      
    </>
  )
}