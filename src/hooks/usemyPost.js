import { useState, useEffect } from "react";
import { fetchPosts } from "@services/mypostService";

export const usemyPost = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadPosts();
  }, []);

  return { posts, isLoading, error };
};