import { useState, useEffect } from 'react';
import { instance } from '@services/instance';

const useNavermaps = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await instance.get('/api/post/qa');
        setLocations(response.data || []); // undefined일 경우 빈 배열로 설정
      } catch (err) {
        if (err.response && err.response.status === 401) {
          console.error("Unauthorized - Please check your login status.");
          setError("로그인이 필요합니다. 다시 로그인해주세요.");
        } else {
          console.error("Error fetching locations:", err);
          setError("데이터를 가져오는 중 오류가 발생했습니다.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  return { locations, loading, error };
};

export default useNavermaps;