import { Layout } from 'antd';
import './App.css';
import FooterInner from './Components/page/Footer/Footer';
import 'antd/dist/antd.css';
import MainPage from './Components/page/MainPage/MainPage';
import Header from './Components/page/Header/Header';

const { Content } = Layout;

const App = () => (
  <>
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Content>
        <MainPage />
      </Content>
      <FooterInner />
    </Layout>
  </>
);

export default App;
