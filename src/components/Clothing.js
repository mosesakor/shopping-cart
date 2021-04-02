import bag1 from './images/bags/bag1.jpg'
import bag2 from './images/bags/bag2.jpg'
import bag3 from './images/bags/bag3.jpg'
import bag4 from './images/bags/bag4.jpg'
import bag5 from './images/bags/bag5.jpg'
import bag6 from './images/bags/bag6.jpg'
import bag7 from './images/bags/bag7.jpg'
import bag8 from './images/bags/bag8.jpg'
import bag9 from './images/bags/bag9.jpg'


export default function Clothing() {
    return (
      <div className="clothing">
        <header className="clothing__header">
          <h1>Hello from Clothing</h1>
        </header>
        <aside className="clothing__aside">
          Sidebar
        </aside>
        <section className="products">
          <div className="a__product">
            <img src={bag1} className="img" ></img>
          </div>
          <div className="a__product">
            <img src={bag2} className="img"></img>
          </div>
          <div className="a__product">
            <img src={bag3} className="img"></img>
          </div>
          <div className="a__product">
            <img src={bag4} className="img"></img>
          </div>
          <div className="a__product">
            <img src={bag5} className="img"></img>
          </div>
          <div className="a__product">
            <img src={bag6} className="img"></img>
          </div>
          <div className="a__product">
            <img src={bag7} className="img"></img>
          </div>
          <div className="a__product">
            <img src={bag8} className="img"></img>
          </div>
          <div className="a__product">
            <img src={bag9} className="img"></img>
          </div>
        </section>
        <footer className="clothing__footer">
          <h2>footer</h2>
        </footer>
      </div>
    );
  };