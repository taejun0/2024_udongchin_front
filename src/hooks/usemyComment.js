import { useState, useEffect } from "react";
import { fetchComments } from "@services/mycommentService";

export const usemyComments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadComments = async () => {
      try {
        const data = await fetchComments();
        setComments(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadComments();
  }, []);

  return { comments, isLoading, error };
};