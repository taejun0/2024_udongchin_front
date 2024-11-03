import { useState } from "react";
import { reportService } from "@services/reportService";

export const useReport = () => {
  const [reportData, setReportData] = useState({
    photos: [],
    location: { lat: null, lng: null, description: "" },
    animalInfo: { estimatedAnimal: "", appearance: "" },
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateStepData = (step, data) => {
    setReportData((prevData) => ({ ...prevData, [step]: data }));
  };

  const submitFinalReport = async () => {
    setLoading(true);
    setError(null);
    try {
      await reportService(reportData);
    } catch (err) {
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
