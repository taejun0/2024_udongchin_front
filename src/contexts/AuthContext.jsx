import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({ userId: null });

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token"); // JWT 토큰이 저장된 위치
    
    if (token) {
      try {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const decodedPayload = JSON.parse(atob(base64));

        setUserId(decodedPayload.sub || null);
      } catch (error) {
        console.error("Error decoding token:", error);
        setUserId(null); // 오류 발생 시 로그아웃 상태로 설정
      }
    } else {
      setUserId(null); // 토큰이 없을 때 로그아웃 상태로 설정
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userId }}>
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