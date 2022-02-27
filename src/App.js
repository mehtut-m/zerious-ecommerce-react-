import Header from './layouts/Header';
import { ToastContainer } from 'react-toastify';
import RouteConfig from './routes/routeConfig';
import './App.css';
import { useEffect, useState } from 'react';
import MainLayout from './layouts/MainLayout';
import { useLocation } from 'react-router-dom';
import Footer from './layouts/Footer';

function App() {
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    document.title = 'Zerious : Be Zerious on hobbies.';
  }, []);

  return (
    <div className="App relative">
      <Header />
      <MainLayout>
        <RouteConfig />
        <ToastContainer theme="dark" />
      </MainLayout>
      <Footer />
    </div>
  );
}

export default App;
