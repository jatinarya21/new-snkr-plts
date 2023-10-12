import logo from './logo.svg';
import './App.css';
import Header from "./component/MyNav.jsx"
import Hero_section from "./component/HeroSection.jsx"
import Section_2 from './component/Section_2';
import Review_section from './component/Review_section';
import Related_product from './component/Related_product';
import Last_section from "./component/Last_section"



function App() {
  return (
    <div className="App">
      <Header />
      <Hero_section />
      <Section_2 />
      <Review_section />
      <Related_product />
      <Last_section/>
    </div>
  );
}

export default App;
