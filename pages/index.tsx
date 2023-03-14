import Login from './auth/signin';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return <Login />;
};

export default Home;

// Home.getLayout = (page) => {
//   return(
//     <PrimaryLayout>{page}</PrimaryLayout>
//   );
// };
