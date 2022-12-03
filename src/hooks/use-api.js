import { useState } from 'react';

function useApi(apiFunc) {
  const [requestedData, setRequestedData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    try {
      const result = await (await apiFunc(...args)).json();
      setRequestedData(result);
    } catch (err) {
      setError(err.message || 'Unexpected Error!');
    } finally {
      setLoading(false);
    }
  };

  return {
    requestedData,
    error,
    loading,
    request,
  };
}

export default useApi;
