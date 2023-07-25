import { useEffect, useState } from 'react';
import BarGraph from './components/BarGraph';
import fetchData from './controllers/fetchData';

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const barData = await fetchData();
      setData(barData.data);
    };

    fetchDataAsync();
  }, []);


  return (
    <div id='container'>
      <h1 id="title">United State's GDP</h1>
      {data && <BarGraph data={data} />}
    </div>
  );
}
