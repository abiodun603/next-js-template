import CatCard from '../components/cards/cat/CatCard';
import { mockCatCardProps } from '../components/cards/cat/CatCard.mocks';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <CatCard {...mockCatCardProps.base} />
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return(
    <PrimaryLayout>{page}</PrimaryLayout>
  );
};