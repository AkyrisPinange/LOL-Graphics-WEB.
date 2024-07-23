import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClientProvider } from '@tanstack/react-query';

import queryClient from './service/queryClient.ts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(    
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
)
