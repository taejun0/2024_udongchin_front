import { useState } from "react";
import { urgentService } from "@services/ugentService";

export const useUrgent = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const Urgent = async () => {
    setIsLoading(true);
    setError(false);

    try { 
      await urgentService(id);
      window.location.reload();

    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    Urgent, isLoading, error
  };
}