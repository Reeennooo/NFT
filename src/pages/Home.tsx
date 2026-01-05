import {Layout} from 'shared/ui/Layout/Layout.tsx';
import {Container} from 'shared/ui/Container/Container.tsx';
import styles from './home.module.scss';
import {Header} from 'shared/ui/Header/Header.tsx';
import {Hero} from 'features/Hero/ui/Hero.tsx';

export const Home = () => {
  return (
    <Layout
      header={<Header/>}
    >
      <Hero />
    </Layout>
  );
};