import { useState, useEffect } from 'react';
import { instance } from '@services/instance';

const useKakaomaps = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await instance.get('YOUR_BACKEND_ENDPOINT/locations'); // 백엔드 API 주소
        setLocations(response.data || []); // undefined일 경우 빈 배열로 설정
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  return { locations, loading, error };
};

export default useKakaomaps;
