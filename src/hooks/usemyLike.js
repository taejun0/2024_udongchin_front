import { useState, useEffect } from "react";
import { fetchLikes } from "@services/mylikeService";

export const usemyLike = () => {
  const [likes, setLikes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadLikes = async () => {
      try {
        const data = await fetchLikes();
        setLikes(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadLikes();
  }, []);

  return { likes, isLoading, error };
};