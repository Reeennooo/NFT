import {Layout} from 'shared/ui/Layout/Layout.tsx';
import {Header} from 'shared/ui/Header/Header.tsx';
import {Hero} from 'features/Hero/ui/Hero.tsx';
import {CardsSlider} from 'features/CardsSlider/ui/CardsSlider.tsx';
import {Banner} from 'shared/ui/Banner/Banner.tsx';
import styles from './Home.module.scss';
import {Container} from 'shared/ui/Container/Container.tsx';
import {Footer} from 'shared/ui/Footer/Footer.tsx';

export const Home = () => {
  return (
    <Layout
      header={<Header/>}
      footer={<Footer />}
    >
      <Hero />
      <CardsSlider />
      <section className={styles.bannerSection}>
        <Container>
          <Banner
            title={'Create and Sell NFTs'}
            text={'World’s Largest NFT Place'}
          />
        </Container>
      </section>
    </Layout>
  );
};