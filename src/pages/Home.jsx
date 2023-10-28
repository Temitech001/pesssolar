import HeroSection from '../components/HeroSection';
import Ourservices from '../components/Ourservices';
import Stats from '../components/Stats';
import Growth from '../components/Growth';
import FAQs from '../components/FAQs';
import Blog from '../components/Blog';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Work from '../components/Work';

function Home() {
  return (
    <div className="">
      <HeroSection />
      <Ourservices />
      <Stats />
      <Growth />
      <Work />

      <FAQs />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
