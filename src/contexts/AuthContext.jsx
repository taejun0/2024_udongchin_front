import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({ nickname: null });

export const AuthProvider = ({ children }) => {
  const [nickname, setNickname] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token"); // JWT 토큰이 저장된 위치
    if (token) {
      try {
        // JWT의 payload 부분만 디코딩
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const decodedPayload = JSON.parse(atob(base64)); // 디코딩 후 JSON 파싱
        setNickname(decodedPayload.nickname || null); // nickname 설정
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ nickname }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
