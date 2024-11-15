// PostList.js
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    & > * {
        :not(:last-child) {
            margin-bottom: 1px;
        }
    }
`;

function PostList({ posts = [] }) {
    const navigate = useNavigate();

    const handlePostClick = (postId) => {
        navigate(`/postview/${postId}`); // 클릭한 게시글의 ID를 포함하여 이동
    };

    return (
        <Wrapper>
            {posts.map((post) => (
                <PostListItem
                    key={post.id}
                    post={{
                        title: post.title,
                        content: post.content,
                        date: new Date(post.createdAt).toLocaleDateString(),
                        likes: post.likesCount,
                        comments: post.commentCount,
                        imageUrl: post.imageUrl,
                    }}
                    onClick={() => handlePostClick(post.id)} // 클릭 시 이동 처리
                />
            ))}
        </Wrapper>
    );
}

export default PostList;
