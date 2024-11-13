import { instance } from "./instance";

export const onSubmitHandler = async ( nickname, memberId, password, navigate, alert) => {
    const requestBody = {
        nickname,
        memberId,
        password,
    }
    
    try {
        const response = await instance.post("https://43.203.40.221.nip.io/api/signUp", requestBody);

        if (response.data.success) {
            alert("회원가입 성공!");
            navigate("/");
        } else {
            alert("회원가입 실패: " + response.data.message);
        }
    } catch (error) {
        console.error("회원가입 요청 오류:", error);
        alert("회원가입 요청 중 오류가 발생했습니다.");
    }
};
