import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../../components/common/inputs/TextInput";
import Button from "../../components/common/buttons/PostButton";
import styles from "./PostWriteStyle";


const Wrapper = styled.div`
    width: 400px;
    height: 668px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    padding: 20px;
`;

//postwritepage 컴포넌트는 두개의 state를 가지고 있습니다.
//하나는 글의 제목을 위한 state이고, 다른 하나는 글의 내용을 위한 state입니다.
//두개의 state 모두 useState hook을 이용하여 선언했습니다.
function PostWritePage(props) {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <Wrapper>
            <Header>

            </Header>
            <Container>
                <Location>서울시 중구 신당동</Location>
                <Title>
                <h2 style={styles.h2}>제목</h2>
                <TextInput
                    height={38}
                    placeholder="공백 포함 25글자 이내로 작성"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                </Title>
                <Contents>
                <h2 style={styles.h2}>내용</h2>
                <button style={styles.uploadBtn}>이미지 업로드</button>
                <TextInput
                    height={367}
                    placeholder="내용"
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                />
                </Contents>
                <Button
                    height = "37px"
                    title="제출하기"
                    backgroundColor="#5b3200"
                    color= "#fff"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </Container>
        </Wrapper>
    );
}

const Header = styled.div`
    width: 400px;
    height: 44px;
    flex-shrink: 0;
    border-bottom: 1px solid var(--Yellow, #E3B05F);
    background: var(--light-yellow, #FFFFE5);
`;
const Location = styled.h3`
    display: flex;
    width: 359px;
    align-items: flex-start;
    gap: 15px;
    color: #575757;
    margin-bottom: 16px;
`
const Title = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: flex-start;
gap: 10px;
`

const Contents = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: flex-start;
gap: 10px;
margin-top: 11px;
margin-bottom: 18px
`

export {PostWritePage};