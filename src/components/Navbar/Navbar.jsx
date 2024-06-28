import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='h-20 flex justify-between items-center bg-slate-700 text-white'>
      <img
        src='./images/LogoSaeros.jpg'
        alt='logo de test'
        className='h-14 w-20 ml-8 rounded'
      />
      <div className='mr-12'>
        <Link className='ml-6 font-bold text-2xl' to='/plan-medias'>
          Plan Médias
        </Link>
        <Link className='ml-6 font-bold text-2xl' to='/annonceurs'>
          Annonceurs
        </Link>
        <Link className='ml-6 font-bold text-2xl' to='/messages'>
          Messages
        </Link>
        <Link className='ml-6 font-bold text-2xl' to='/users'>
          Users
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
