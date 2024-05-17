import { useEffect, useState } from 'react';

const Bt9 = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Bt9</h1>
      <p>Thời gian đã trôi qua: {seconds} giây</p>
    </div>
  );
};

export default Bt9;
