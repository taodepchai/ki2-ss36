import { useEffect, useState } from 'react';

const Bt5 = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
        <h1>bt5</h1>
      <h1>thời gian hiện tại:</h1>
      <p>
        {currentTime.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default Bt5;
