import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => fetchData(), []);

  const fetchData = () => {
    setLoading(true);
    fetch(url, {method:"GET"})
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
    setLoading(false);
  };

  return { error, loading, data };
}


// Note: another solution to get data from API:

// const [data, setData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const data = await (await fetch("http://localhost:7000/Blogs")).json();

//       return setData(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);