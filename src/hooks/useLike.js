import { useState, useEffect } from "react";
import { fetchLikeStatus, addLike, removeLike } from "@services/LikeService";

export const useLike = (id, initialLikesCount) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(initialLikesCount);

  useEffect(() => {
    const initializeLikeStatus = async () => {
      try {
        const data = await fetchLikeStatus(id);
        setIsLiked(data.isLiked);
      } catch (error) {
        console.error("Error initializing like status:", error);
      }
    };
    initializeLikeStatus();
  }, [id]);

  const toggleLike = async () => {
    try {
      if (isLiked) {
        await removeLike(id);
        setIsLiked(false);
        setLikesCount((prevCount) => prevCount - 1);
      } else {
        await addLike(id);
        setIsLiked(true);
        setLikesCount((prevCount) => prevCount + 1);
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  return { isLiked, likesCount, toggleLike };
};
