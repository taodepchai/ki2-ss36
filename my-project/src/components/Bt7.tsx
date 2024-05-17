import { useEffect, useRef, useState } from 'react';

const Bt7 = () => {
  const [count, setCount] = useState<number>(0);
  const prevCountRef  = useRef<number>(0);
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
        <h1>bt7</h1>
        <p>trước đó:{prevCountRef.current}</p>
        <p>sau:{count}</p>
      <button onClick={handleClick}>
        Click </button>
    </div>
  );
};

export default Bt7;
