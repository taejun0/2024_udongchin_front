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
      alert("실시간 기록이 성공적으로 완료되었습니다!");
      window.location.reload();
    } catch (err) {
      console.error("QnA 제보 실패:", err.message);
      setError(err.message);
      alert("제보에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return { submitMarkerData, loading, error };
};