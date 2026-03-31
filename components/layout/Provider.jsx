"use client"
import Header from './header/Header'
import Footer from './footer/Footer'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import Cart from '../cart/Cart';
import "aos/dist/aos.css";
import "react-phone-number-input/style.css";
import { useEffect } from "react";
import AOS from "aos";
import UnAuth from '@/_ui/auth/dialog/UnAuth';
import "aos/dist/aos.css";

function ProviderContainer({ children, customer }) {
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        duration: 800,
        once: true,
      });

      AOS.refresh();
    };
    setTimeout(initAOS, 200);
  }, []);

  return (
    <div className='max-layout mx-auto relative'>
      <Provider store={store}>
        <Header {...customer} />
        {children}
        <Footer />
        <Cart />
        <UnAuth />
        <ToastContainer theme="dark" position="bottom-right" draggable />
      </Provider>
    </div>
  )
}

export default ProviderContainer