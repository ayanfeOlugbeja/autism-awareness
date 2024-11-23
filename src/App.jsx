import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { lazy, Suspense } from 'react';
import './index.css';
// import 'react-toastify/dist/ReactToastify.css';
// import FrequentlyAQ from './Pages/FAQS/FrequentlyAQ';
import Header from './Components/Header';
// import Footer from './Pages/Home/Footer';
// import Contact from './Pages/Contact/Contact';
// import About from './Pages/About/About';
// import Booking from './Pages/BookCourse/Booking';
// import Loader from './Components/Loader';
// import NotFound from './NotFound';
// import LegalPage from './Pages/LegalPage';
// import Services from './Pages/Services';
// import { ToastContainer } from 'react-toastify';
const Home = lazy(() => import('./Pages/Home'));
// const Admin = lazy(() => import('./admin/Admin'));
// const Login = lazy(() => import('./admin/Login'));
// const Register = lazy(() => import('./admin/Register'));

function App() {
  return (
    // <Suspense fallback={<Loader />}>
    <BrowserRouter>
      <div className='App'>
        {/* <ToastContainer
            position='top-right'
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
          /> */}
        <Header />
        <main>
          <Routes>
            <Route index element={<Home />} />

            {/* <Route path='/faqs' element={<FrequentlyAQ />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/bookcourse' element={<Booking />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/services' element={<Services />} />
              <Route path='/terms' element={<LegalPage type='terms' />} />
              <Route path='/privacy' element={<LegalPage type='privacy' />} />  */}
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
    // </Suspense>
  );
}

export default App;
