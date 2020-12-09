import './App.css';
import { Layout } from 'antd';
import Navbar from 'components/Navbar';
import FooterSection from 'components/FooterSection';

// Section
import Hero from 'components/sections/Hero';
import About from 'components/sections/About';
// import Skills from 'components/sections/Skills';
import Contact from 'components/sections/Contact';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <Navbar />
      </Header>
      <Content className="content">
        <Hero />
        <About />
        {/* <Skills /> */}
        <Contact />
      </Content>
      <Footer style={{ backgroundColor: '#0a192f', color: '#ccd6f6' }}>
        <FooterSection />
      </Footer>
    </Layout>
  );
}

export default App;
