import React, { useEffect, useState } from 'react';

const Bt10: React.FC = () => {
  const [keyInfo, setKeyInfo] = useState<{ key: string; keyCode: number }>();

  //keycode theo console
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key, keyCode } = event;
      setKeyInfo({ key, keyCode });
    };

    window.addEventListener('keydown', handleKeyDown);

  }, []); 

  //bảng mã ascii
  // useEffect(() => {
  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     const { key } = event;
  //     const keyCode = key.charCodeAt(0);
  //     setKeyInfo({ key ,keyCode });
  //   };

  //   window.addEventListener('keydown', handleKeyDown);

  // }, []); 


  return (
    <div>
        <h1>bt10</h1>
      {keyInfo && (
        <div>
          <p>Tên phím: {keyInfo.key}</p>
          <p>Mã phím: {keyInfo.keyCode}</p>
        </div>
      )}
    </div>
  );
};

export default Bt10;
