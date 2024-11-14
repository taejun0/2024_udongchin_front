// login.js
import { instance } from "./instance";

export const onSubmitHandler = async (memberId, password, navigate, setErrorMessage) => {
    const requestBody = {
        memberId,
        password,
    };

    try {
        const response = await instance.post("https://43.203.40.221.nip.io/api/signIn", requestBody);

        if (response.data.success) {
            alert("로그인 실패: " + response.data.message);
        } else {
            alert("로그인 성공!");
            navigate("/");             
        }
    } catch (error) {
        console.error("로그인 요청 오류:", error);
        setErrorMessage("아이디 혹은 비밀번호를 다시 확인해 주세요.");
    }
};
