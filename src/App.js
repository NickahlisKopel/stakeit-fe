import logo from './logo.svg';
import './App.css';
import AppRouter from './components/Routers/AppRouter';
import {BrowserRouter} from "react-router-dom";
import { AuthProvider } from './components/Providers/AuthProvider';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <AppRouter/>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
