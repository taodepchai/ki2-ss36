import { useEffect, useState } from 'react';

export default function Bt8() {
  const [season, setSeason] = useState<string>('');
  const monthIndex = new Date().getMonth();

  useEffect(() => {
    if (monthIndex < 3) {
      setSeason('Mùa Xuân');
    } else if (monthIndex > 2 && monthIndex < 6) {
      setSeason('Mùa Hè');
    } else if (monthIndex > 5 && monthIndex < 9) {
      setSeason('Mùa Thu');
    } else if (monthIndex > 8) {
      setSeason('Mùa Đông');
    }
  }, [monthIndex]);

  return (
    <div>
      <h1>bt8</h1>
      <p>Đây là tháng: {monthIndex + 1}</p> 
      <p>Đang là mùa: {season}</p>
    </div>
  );
}
