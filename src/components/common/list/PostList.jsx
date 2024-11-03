import React from "react";
import styled from "styled-components";
//앞에서 만든 PostListItem 컴포넌트를 사용하기 위해 import했음
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

//postList 컴포넌트의 프롭스로 받은 posts라는 배열에는 post객체들이 들어있습니다. 
//이 post 배열의 map 함수를 이용하여 각 post객체에 대해 postlist컴포넌트를 만들어서 렌더링하게 된다.
/*function PostList(props) {
  const { posts, onClickItem } = props;

  return (
    <Wrapper>
      {posts.map((post, index) => {
        return (
          <PostListItem
            key={post.id}
            post={post}
            onClick={() => {
              onClickItem(post);
            }}
          />
        );
      })}
    </Wrapper>
  );
}*/

function PostList({ posts = [] }) { // posts의 기본값을 빈 배열로 설정
  return (
      <div>
          {posts.map((post, index) => (
              <div key={index}>
                  <h4>{post.title}</h4>
                  <p>{post.content}</p>
              </div>
          ))}
      </div>
  );
}

export default PostList;