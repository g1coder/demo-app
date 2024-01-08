import ReactDOM from 'react-dom/client';
import {App} from '@app/index';
import reportWebVitals from './reportWebVitals';
import '@processes/mocks';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

reportWebVitals();
