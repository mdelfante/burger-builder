import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

const app = () => {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
};

export default app;
