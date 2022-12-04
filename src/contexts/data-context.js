import React, { useState, createContext, useEffect } from 'react';
import { useApi } from '../hooks';
import { getDataRequest } from '../api';
const initialContext = {};
const DataContext = createContext(initialContext);
function DataProvider({ children }) {
  const [data, setData] = useState(initialContext);
  const getData = useApi(getDataRequest);
  useEffect(() => {
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      // fetch data from api
      getData.request();
      setData(getData.requestedData);
    }
    return () => (isApiSubscribed = false);
  }, []);

  if (getData.loading) return <div>Loading Component...</div>;
  else if (getData.error) return <div>{getData.error}</div>;
  else
    return (
      <DataContext.Provider value={[data, setData]}>
        {children}
      </DataContext.Provider>
    );
}

export { DataProvider, DataContext };
