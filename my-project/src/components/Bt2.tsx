import { useEffect, useState } from 'react';

const Bt2 = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = `Click ${count} lần`;
  }, [count]); 

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
        <h1>bt2</h1>
      <button onClick={handleClick}>
        Click {count} lần
      </button>
    </div>
  );
};

export default Bt2;
