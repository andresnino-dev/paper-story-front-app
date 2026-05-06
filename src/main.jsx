import { createRoot } from 'react-dom/client';
import './index.css';
import { AppRouter } from './AppRouter';
import { GlobalProvider } from './context/GlobalProvider.jsx';

createRoot(document.getElementById('root')).render(
    <GlobalProvider>
        <AppRouter />
    </GlobalProvider>
);
