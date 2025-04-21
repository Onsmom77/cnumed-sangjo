import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import PaymentHistory from './components/PaymentHistory';

function App() {
  const [excelData, setExcelData] = useState([]);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>CNUMED 상조회</h1>
      <h3>엑셀 파일 업로드 후 납입 내역 확인</h3>
      <FileUpload onDataParsed={setExcelData} />
      {excelData.length > 0 && <PaymentHistory data={excelData} />}
    </div>
  );
}

export default App;
