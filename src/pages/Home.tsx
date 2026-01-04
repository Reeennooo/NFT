import {Layout} from 'shared/ui/Layout/Layout.tsx';
import {Container} from 'shared/ui/Container/Container.tsx';
import styles from './home.module.scss';
import {Header} from 'shared/ui/Header/Header.tsx';

export const Home = () => {
  return (
    <Layout
      header={<Header/>}
    >
      <Container className="flex flex-col gap-4 pt-4">
        <p className={styles.title}>Discover And Create NFTs</p>
      </Container>
    </Layout>
  );
};