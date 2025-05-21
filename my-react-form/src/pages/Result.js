import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2>Form Submission Successful!</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={() => navigate('/')}>Back to Form</button>
    </div>
  );
}

export default Result;
