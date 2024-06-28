import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import Router from '@/Router/Router';

const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
