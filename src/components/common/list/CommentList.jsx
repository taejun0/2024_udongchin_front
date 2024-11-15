import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  margin-top: 14px;
`;

//commentList라는 이름의 함수 컴포넌트를 만들고 이 컴포넌트의 프롭스로는 comments라는 배열이 들어온다.
//이 배열에는 comment 객체들이 들어있으며, 이 배열에 map함수를 사용해서 각 댓글객체를 commentListitem컴포넌트로 넘겨 화면에 댓글을 표시합니다.
function CommentList(props) {
  const { comments } = props;

  return (
    <Wrapper>
      {comments.map((comment, index) => {
        return (
          <CommentListItem
          key={comment.commentId || index}
          comment={comment}
          />
        );
      })}
    </Wrapper>
  );
}

export default CommentList;
