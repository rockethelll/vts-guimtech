import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-96'>
      <p>Erreur 404 la page n'est pas trouvée</p>
      <Link to='/' className='mt-8 text-slate-700 font-semibold'>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default ErrorPage;
