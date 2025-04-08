
import React, { useState } from 'react';

function App() {
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({ customer: '', name: '', width: '', height: '' });

  const convertToChi = (cm) => Math.round((cm / 30.3) * 10) / 10;

  const handleAdd = () => {
    const newRecord = {
      customer: form.customer,
      name: form.name,
      widthCm: form.width,
      heightCm: form.height,
      widthChi: convertToChi(form.width),
      heightChi: convertToChi(form.height)
    };
    setRecords([...records, newRecord]);
    setForm({ customer: '', name: '', width: '', height: '' });
  };

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>窗簾尺寸換算器</h1>
      <input placeholder="客戶名稱" value={form.customer} onChange={e => setForm({...form, customer: e.target.value})} />
      <input placeholder="窗簾名稱" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="寬度 (cm)" type="number" value={form.width} onChange={e => setForm({...form, width: e.target.value})} />
      <input placeholder="高度 (cm)" type="number" value={form.height} onChange={e => setForm({...form, height: e.target.value})} />
      <button onClick={handleAdd}>加入紀錄</button>
      <table border="1" cellPadding="5" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>客戶</th><th>名稱</th><th>寬度 (cm)</th><th>高度 (cm)</th><th>寬 (尺)</th><th>高 (尺)</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={i}>
              <td>{r.customer}</td>
              <td>{r.name}</td>
              <td>{r.widthCm}</td>
              <td>{r.heightCm}</td>
              <td>{r.widthChi}</td>
              <td>{r.heightChi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
