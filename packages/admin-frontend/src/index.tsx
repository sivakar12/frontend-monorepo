import React from 'react';
import ReactDOM from 'react-dom/client';
import { Footer } from '@frontend-monorepo/shared';

const App = () => {
  return (
    <div>
      <h1>Admin Frontend App</h1>
      <Footer />
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />); 