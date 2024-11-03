import { useState } from "react";
import { QnaMarkerData } from "@services/qna";

export const useQnaMarkerPost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitMarkerData = async (markerData) => {
    setLoading(true);
    setError(null);

    try {
      await QnaMarkerData(markerData); // API 요청
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { submitMarkerData, loading, error };
};
