import React, { useState } from "react";
import * as S from "./styled";
import { Navermap } from "@components/specific/maps/Navermap";
import useNavermaps from "@hooks/useNavermaps";
import { mockLocations } from "@constants/mockLocations";
import { QnaMarkerModal } from "@components/common/modals/QnaMarkerModal";
import { useNavigate } from "react-router-dom";
import adding_pencil from "/images/adding_pencil.svg";
import adding_exclamation from "/images/adding_exclamation.svg";
import adding_dots from "/images/adding_dots.svg";
import adding_chat from "/images/adding_chat.svg";
import sidebar_how from "/images/sidebar_how.svg";
import sidebar_my from "/images/sidebar_my.svg";
import sidebar_mymy from "/images/sidebar_mymy.svg";
import sidebar_his from "/images/sidebar_his.svg";
import RightLowHome from "/images/RightLowHome.svg";

export const HomePage = () => {
  const {locations, loading, error} = useNavermaps();
  const [QnaModalOpen, setQnaModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [isExpand, setExpand] = useState(false);
  const [selectmy, setSelectmy] = useState("my");
  const [followUser, setFollowUser] = useState(false);

  const toglleUser = () => {
    setFollowUser((prev) => !prev);
  }

  const handleselectMY = () => {
    setSelectmy((prev) => (prev=== "my" ? "mymy" : "my"));
  };

  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Navermap 
        locations={mockLocations}
        followUser={followUser}
        setFollowUser={setFollowUser}
      />
      <S.Buttons>
        <S.Button
          $isExpand = {isExpand}
          onClick={() => setExpand(!isExpand)}
          style={{zIndex:5}}
        >
          <img src={adding_dots} style={{width: "44px", height:"44px"}}/>
        </S.Button>

        <S.ExpandableButton 
          $isExpand = {isExpand}
          $delay = {0.1}
          onClick={() => {
            setModalType("기록");
            setQnaModalOpen(true);
          }} 
        >
          <img src={adding_pencil} />
          실시간 작성
        </S.ExpandableButton>

        <S.ExpandableButton
          $isExpand = {isExpand}
          $delay = {0.2}
          onClick={()=> navigate("/report")}
        >
          <img src={adding_exclamation} />
          우동친 제보
        </S.ExpandableButton>

        <S.ExpandableButton
          $isExpand = {isExpand}
          $delay = {0.3}
        >
          <img src={adding_chat} />
          커뮤니티
        </S.ExpandableButton>
      </S.Buttons>

      <S.SideButtons>
        <S.SideButton
          onClick={handleselectMY}
        >
          <img src={selectmy === "my" ? sidebar_my : sidebar_mymy} />
          내 우동친
        </S.SideButton>

        <S.SideButton
          onClick={() => navigate("myudchistory")}
        >
          <img src={sidebar_his} />
          내 우동친 기록
        </S.SideButton>
        
        <S.SideButton
          onClick={() => navigate("udcmanual")}
        >
          <img src={sidebar_how} />
          사용 설명서
        </S.SideButton>
      </S.SideButtons>
      <S.RightLowButton
        onClick={toglleUser}
      >
        <img src={followUser === false ? RightLowHome : sidebar_his} />
      </S.RightLowButton>

      {/* 모달 열림 상태에 따라 표시 */}
      {QnaModalOpen && (
        <QnaMarkerModal 
          type={modalType} // 모달에 유형 전달
          onClose={() => setQnaModalOpen(false)} 
        />
      )}
    </div>
  );
}

export default HomePage;
