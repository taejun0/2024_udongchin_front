import { useState } from "react";
import { reportService } from "@services/reportService";

export const useReport = () => {
  const [reportData, setReportData] = useState({
    images: [],
    location_coords: { latitude: null, longitude: null},
    locstion_description: "",
    animal_type: "",
    animal_description: "",
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
