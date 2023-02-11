import CatCard from '../../components/cards/CatCard';
import { mockCatCardProps } from '../../components/cards/CatCard.mocks';
import PrimaryLayout from '../../components/layouts/PrimaryLayout';
import SidebarLayout from '../../components/layouts/SidebarLayout';
import { NextPageWithLayout } from '../page';

const Home: NextPageWithLayout = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <CatCard {...mockCatCardProps.base} />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
