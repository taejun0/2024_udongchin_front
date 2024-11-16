// login.js
import { instance } from "./instance";

export const onSubmitHandler = async (memberId, password, navigate, setErrorMessage) => {
    const requestBody = {
        memberId,
        password,
    };

    try {
        const response = await instance.post("/api/signIn", requestBody);


        if (response.data.token) {
            // 로그인 성공 시
            const token = response.data.token; // 백엔드에서 반환한 토큰

            // 토큰을 로컬 스토리지에 저장
            localStorage.setItem("token", token);

            // Axios 기본 헤더에 Authorization 설정
            instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            alert("로그인 성공!");
            navigate("/"); // 메인 페이지로 이동
        } else {
            // 로그인 실패 시
            alert("로그인 실패: " + response.data.message);
        }
    } catch (error) {
        // 오류 내용 콘솔 출력
        console.error("로그인 요청 오류:", error);

        if (error.response) {
            // 서버 응답이 있을 때, 응답 코드와 응답 데이터=
        } else if (error.request) {
            // 요청이 만들어졌으나 서버에 응답이 없을 때
        } else {
            // 요청 설정 중 오류가 발생했을 때
        }

        setErrorMessage("아이디 혹은 비밀번호를 다시 확인해 주세요.");
    }
};