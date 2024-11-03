import React, { createContext, useContext, useState, useEffect } from "react";

// Context 생성
const LocationContext = createContext();

// Provider 컴포넌트 생성
export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null); // 전역 위치 상태 관리
  const [address, setAddress] = useState(""); // godwjdrndur

  return (
    <LocationContext.Provider value={{ location, setLocation, address, setAddress }}>
      {children}
    </LocationContext.Provider>
  );
};

// Custom Hook으로 Context 데이터 접근
export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
};