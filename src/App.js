import './App.css';
import Header from './component/layout/Header'
import NewArrival from './component/layout/NewArrival';
import Brand from './component/layout/Brand';
import Collection from './component/layout/Collection';
import Product from './component/layout/JustForYou';
import Trendingnfashion from './component/layout/TrendingnFashionTags';
import Followus from './component/layout/Followus';
import Footer from './component/layout/Footer';
function App() {
  return (
    <div className="App mainDiv">
      <Header></Header>
      <NewArrival></NewArrival>
      <Brand></Brand>
      <Collection></Collection>
      <Product></Product>
      <Trendingnfashion></Trendingnfashion>
      <Followus></Followus>
      <Footer></Footer>
    </div>
  );
}

export default App;
