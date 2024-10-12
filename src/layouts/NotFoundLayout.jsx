import styled from "styled-components";

export const NotFoundLayout = () => {
  return (
    <>
      <Wrapper>
        못 찾 겠 다 꾀 꼬 리    
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
`;


export default NotFoundLayout;
