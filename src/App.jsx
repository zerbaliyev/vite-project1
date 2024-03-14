import './App.css';
import Header from './components/Header/Header';
import Frame from './components/frame/Frame';
import MainSection from './components/main/MainSection';
import InfoSection from './components/info/InfoSection';
import TeaSection from './components/tea/TeaSection';
import GuestSection from './components/guest/GuestSection';
import CardSection from './components/card/CardSection';
import Container from './components/container/Container';
import FooterSection from './components/footer/FooterSection';


function App(){
  return (
   <>
   <Header />
   <MainSection />
   <Frame />
   <InfoSection />
   <TeaSection />
   <GuestSection />
   <CardSection />
   <FooterSection />
   <Container />
   </>
  )
}


export default App
