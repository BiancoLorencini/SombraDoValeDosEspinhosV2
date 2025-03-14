import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Opening from './src/Opening.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Opening />
  </StrictMode>,
)