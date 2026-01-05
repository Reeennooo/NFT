import {Layout} from 'shared/ui/Layout/Layout.tsx';
import {Header} from 'shared/ui/Header/Header.tsx';
import {Hero} from 'features/Hero/ui/Hero.tsx';
import {CardsSlider} from 'features/CardsSlider/ui/CardsSlider.tsx';

export const Home = () => {
  return (
    <Layout
      header={<Header/>}
    >
      <Hero />
      <CardsSlider />
    </Layout>
  );
};