import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='h-20 flex justify-between items-center bg-slate-700 text-white'>
      <img
        src='./images/image.png'
        alt='logo de test'
        className='h-12 w-12 ml-8'
      />
      <div className='mr-12'>
        <Link className='ml-6 font-bold text-2xl' to='/'>
          Accueil
        </Link>
        <Link className='ml-6 font-bold text-2xl' to='/test'>
          Test
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
