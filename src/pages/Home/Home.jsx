import { useParams } from 'react-router';

import DataRenderer from '@/components/ui/DataRenderer';
import { useFetch } from '@/hooks/useFetch';

const Home = () => {
  const { url } = useParams();
  const { data, isLoading, isError } = useFetch(url);
  return (
    <DataRenderer isLoading={isLoading} isError={isError}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </DataRenderer>
  );
};

export default Home;
