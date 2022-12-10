import { useEffect, useState } from "react"

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if(!response.ok) {setHasError(response.statusText)}
        const data = await response.json();
        setData(data);
      }
      catch (e) {
        setHasError(e);
      }
      finally {
        setIsLoading(false);
      }
    }

    fetchData()
  },[url]);


  return [data, isLoading, hasError]
}