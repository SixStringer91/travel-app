import { Layout } from 'antd';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import HeaderInner from './Components/Header/Header';
import FooterInner from './Components/Footer/Footer';
import 'antd/dist/antd.css';

const { Content } = Layout;

const App = () => (
  <>
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderInner />
      <Content>
        <MainPage />
      </Content>
      <FooterInner />
    </Layout>
  </>
);

export default App;
