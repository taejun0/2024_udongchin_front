// login.js
import { instance } from "./instance";

export const onSubmitHandler = async (memberId, password, navigate, setErrorMessage) => {
    const requestBody = {
        memberId,
        password,
    };

    try {
        const response = await instance.post("/api/signIn", requestBody);

        if (response.data.success) {
            alert("로그인 성공!");
            navigate("/"); 
        } else {
            alert("로그인 실패: " + response.data.message);
        }
    } catch (error) {
        console.error("로그인 요청 오류:", error);
        setErrorMessage("아이디 혹은 비밀번호를 다시 확인해 주세요.");
    }
};
