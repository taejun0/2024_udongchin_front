import React, { useState } from "react";
import * as S from "./styled2";
import { useNavigate } from "react-router-dom";

import { usemyComments } from "@hooks/usemyComment";
import { usemyLike } from "@hooks/usemyLike";
import { usemyPost } from "@hooks/usemyPost";

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

export const MyudchistoryStepTwo = ({ selectedLocation }) => {
  const [filter1, setFilter1] = useState("pen");
  const [filter2, setFilter2] = useState("record");

  const navigate = useNavigate();

  const { posts, isLoading: loadingPosts, error: errorPosts } = usemyPost();
  const { likes, isLoading: loadingLikes, error: errorLikes } = usemyLike();
  const { comments, isLoading: loadingComments, error: errorComments } = usemyComments();

  const getFilteredData = () => {
    switch (filter1) {
      case "pen":
        return { data: posts, isLoading: loadingPosts, error: errorPosts };
      case "heart":
        return { data: likes, isLoading: loadingLikes, error: errorLikes };
      case "chat":
        return { data: comments, isLoading: loadingComments, error: errorComments };
      default:
        return { data: [], isLoading: false, error: null };
    }
  };

  const { data, isLoading, error } = getFilteredData();

  const filteredPosts =
  filter1 === "pen"
    ? data.filter((post) => {
        const isMatchingLocation =
          post.location &&
          post.location[2] &&
          post.location[2].toString() === selectedLocation.toString();
        const isMatchingMode =
          filter2 === "record"
            ? post.mode === "실시간 기록"
            : post.mode === "실시간 Q&A";
        return isMatchingLocation && isMatchingMode;
      })
    : [];


  const handleNavigaePost = (id) => {
    navigate(`/community/${id}`);
  };

  const handleFilter1 = (filter1) => {
    setFilter1(filter1);
  };

  const handleFilter2 = (filter2) => {
    setFilter2(filter2);
  };
  return (
    <>
      <S.Header>
        <S.CustomImage src={folder} /> 
        <S.Title>전체 보기</S.Title>
      </S.Header>
      <S.Filter>
        {["pen", "heart", "chat"].map((type) => (
          <S.FilterItem
            key={type}
            onClick={() => handleFilter1(type)}
            $isSelected={filter1 === type}
          >
            <S.CustomImage2
              src={filter1 === type ? { pen: pencil, heart: heart, chat: chat }[type] : { pen: npencil, heart: nheart, chat: nchat }[type]}
            />
          </S.FilterItem>
        ))}
      </S.Filter>
      {filter1 === "pen" && (
        <S.Section>
          <S.FilterSec>
            <S.Text>내가 작성한 우동친 ({filteredPosts.length})</S.Text>
            <S.LINE />
            <S.Filter2>
              <S.FilterItem2
                onClick={() => handleFilter2("record")}
                $isSelected={filter2 === "record"}
              ><S.CustomImage3 src={ntri} />우동친 기록</S.FilterItem2>
              <S.FilterItem2
                onClick={() => handleFilter2("qna")}
                $isSelected={filter2 === "qna"}
              ><S.CustomImage3 src={ntri} />우동친 Q&A</S.FilterItem2>
            </S.Filter2>
          </S.FilterSec>
          <S.ImageSec>
            <S.Location><S.CustomImage3 src={location} />{selectedLocation}</S.Location>
            <S.Images>
              {filteredPosts.map((post) => (
                <S.Image
                  key={post.id}
                  src={post.imageUrl || folder}
                  onClick={() => handleNavigaePost(post.id)} // 이미지 클릭 시 이동
                />
              ))}
            </S.Images>
          </S.ImageSec>
        </S.Section>
      )}
      
      
      
    </>
  )
}