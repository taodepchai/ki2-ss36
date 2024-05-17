import React, { useState } from 'react';
import "./Bt3.css"

const Bt3 = () => {
  const [activeTab, setActiveTab] = useState<string>('home');

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
        <h1>bt3</h1><br />
      <button
        className={activeTab === 'home' ? 'active' : 'inactive'}
        onClick={() => handleTabClick('home')}
      >
        Trang chủ
      </button>
      <button
        className={activeTab === 'products' ? 'active' : 'inactive'}
        onClick={() => handleTabClick('products')}
      >
        Sản phẩm
      </button>
      <button
        className={activeTab === 'about' ? 'active' : 'inactive'}
        onClick={() => handleTabClick('about')}
      >
        Giới thiệu
      </button>
      <button
        className={activeTab === 'contact' ? 'active' : 'inactive'}
        onClick={() => handleTabClick('contact')}
      >
        Liên hệ
      </button>
    </div>
  );
};

export default Bt3;
