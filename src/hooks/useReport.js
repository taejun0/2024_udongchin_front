import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { reportService } from "@services/reportService";

export const useReport = () => {
  const navigate = useNavigate();
  const [reportData, setReportData] = useState({
    imageUrl: [],
    no_image: false,
    location: [],
    location_description: "",
    animal: "동물",
    no_animal: false,
    animal_description: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateStepData = (data) => {
    setReportData((prevData) => ({ ...prevData, ...data }));
  };

  const submitFinalReport = async () => {
    setLoading(true);
    setError(null);
  
    const formData = new FormData();
    
    if (reportData.imageUrl && reportData.imageUrl.length > 0) {
      reportData.imageUrl.forEach((file, index) => {
        formData.append(`imageUrl[]`, file);
      });
    }
  
    formData.append("no_image", reportData.no_image);
    formData.append("location", JSON.stringify(reportData.location));
    formData.append("location_description", reportData.location_description);
    formData.append("animal", reportData.animal);
    formData.append("no_animal", reportData.no_animal);
    formData.append("animal_description", reportData.animal_description);
  
    // FormData의 최종 상태를 출력
    // console.log("Final FormData to be submitted:");
    // formData.forEach((value, key) => {
    //   console.log(`${key}:`, value);
    // });
  
    try {
      const response = await reportService(formData);
      alert("제보가 성공적으로 완료되었습니다!");
      navigate("/");
      return response.data;
    } catch (err) {
      console.error("Failed to submit report:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    reportData,
    updateStepData,
    submitFinalReport,
    loading,
    error,
  };
};