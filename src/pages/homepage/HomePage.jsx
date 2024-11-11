import React, { useEffect, useState, useCallback } from "react";
import * as S from "./styled";
import { Navermap } from "@components/specific/maps/Navermap";
import useNavermaps from "@hooks/useNavermaps";
import { useAuthContext } from "@contexts/AuthContext";
import { mockLocations } from "@constants/mockLocations";
import { QnaMarkerModal } from "@components/common/modals/QnaMarkerModal";
import { useNavigate } from "react-router-dom";
import adding_pencil from "/images/adding_pencil.svg";
import adding_exclamation from "/images/adding_exclamation.svg";
import adding_dots from "/images/adding_dots.svg";
import adding_chat from "/images/adding_chat.svg";
import sidebar_his from "/images/sidebar_his.svg";
import RightLowHome from "/images/RightLowHome.svg";
import RightLowHome_ch from "/images/RightLowHome_ch.svg";
import { MapSelector } from "@components/specific/maps/MapSelector";
import { WarningLoginModal } from "@components/common/modals/WarningLoginModal";
import { MapModal } from "@components/common/modals/MapModal";

export const HomePage = () => {
  const { nickname } = useAuthContext();
  const {locations, loading, error} = useNavermaps();
  const [QnaModalOpen, setQnaModalOpen] = useState(false);
  const [LoginModalOpen, setLoginModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [isExpand, setExpand] = useState(false);
  const [isExpand2, setExpand2] = useState(false);
  const [selectmy, setSelectmy] = useState("my");
  const [followUser, setFollowUser] = useState(false);
  const [viewtype, setViewtype] = useState("전체");
  const [mapRef, setMapRef] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);

  const navigate = useNavigate();

  const toggleVeiwtype = (type) => {
    setViewtype(type);
  }

  const toglleUser = () => {
    setFollowUser((prev) => !prev);
  }

  const handleselectMY = () => {
    setSelectmy((prev) => (prev=== "my" ? "mymy" : "my"));
  };

  const LocationFiltering = isExpand2 ? locations.filter((location) => location.nickname === nickname) : locations;

  const handleRestrictedAction = () => {
    if (!nickname) {
      setLoginModalOpen(true);
      return false;
    }
    return true;
  };

  const handleExpand = useCallback(() => {
    if (!isExpand && mapRef && currentPosition) {
      mapRef.panTo(currentPosition); // 현재 위치로 지도 이동
    }
    setExpand((prev) => !prev);
  }, [isExpand, mapRef, currentPosition]);

  const onMapReady = useCallback((mapInstance, userPosition) => {
    setMapRef(mapInstance);
    setCurrentPosition(userPosition);
  }, []);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{position: "relative"}}>
      <S.SelectBox>
        <S.SelectL
          onClick={() => toggleVeiwtype("전체")}
          $Selected = {viewtype === "전체"}
        >전체</S.SelectL>
        <S.SelectR 
          onClick={() => {
            if (handleRestrictedAction()) {
              toggleVeiwtype("내작성");
            }
          }}
          $Selected = {viewtype === "내작성"}
        >내작성</S.SelectR>
      </S.SelectBox>
      <Navermap 
        locations={mockLocations} // LocationFiltering 넣기
        followUser={followUser}
        setFollowUser={setFollowUser}
        onMapReady={onMapReady}
        viewtype={viewtype}
      />
      {viewtype === "전체" && 
        <S.Buttons>
          <S.Button
            $isExpand = {isExpand}
            onClick={handleExpand}
            style={{zIndex:5, width: "60px", height:"60px"}}
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
            onClick={() => navigate("/community")}
          >
            <img src={adding_chat} />
            커뮤니티
          </S.ExpandableButton>

          <S.ExpandableButton2
            $isExpand = {isExpand}
            $delay = {0.2}
            onClick={()=> navigate("/report")}
          >
            <img src={adding_exclamation} />
            동물 제보
          </S.ExpandableButton2>
        </S.Buttons>
      }
      {viewtype === "내작성" && 
        <S.Buttons>
          <S.Button
            onClick={() => {
              setModalType("기록");
              setQnaModalOpen(true);
            }} 
          >
            <img src={adding_pencil} style={{width: "44px", height:"44px"}}/>
            실시간 작성
          </S.Button>
          <S.Button
            onClick={() => navigate("myudchistory")}
          >
            <img src={sidebar_his} style={{width: "44px", height:"44px"}}/>
            내 활동기록
          </S.Button>
        </S.Buttons>
      }


      {/* <S.SideButtons>
        <S.SideButton
          onClick={() => {
            setExpand2(!isExpand2);
            handleselectMY(selectmy);
          }
          }
        >
          <img src={selectmy === "my" ? sidebar_my : sidebar_mymy} />
          내 우동친
        </S.SideButton>

        <S.SideButton2
          onClick={() => navigate("myudchistory")}
          $isExpand2 = {isExpand2}
          $delay = {0.2}
        >
          <img src={sidebar_his} />
          내 우동친 기록
        </S.SideButton2>
        
        <S.SideButton1
          onClick={() => navigate("udcmanual")}
          $isExpand2 = {isExpand2}
          $delay = {0.2}
        >
          <img src={sidebar_how} />
          사용 설명서
        </S.SideButton1>
      </S.SideButtons> */}
      <S.RightLowButton
        onClick={toglleUser}
      >
        <S.ImageRightLow src={followUser === false ? RightLowHome : RightLowHome_ch}/>
      </S.RightLowButton>

      {QnaModalOpen && (
        <QnaMarkerModal 
          type={modalType}
          onClose={() => setQnaModalOpen(false)} 
        />
      )}
      {LoginModalOpen && (
        <WarningLoginModal onClose={() => setLoginModalOpen(false)}/>
      )}
    </div>
  );
}

export default HomePage;
