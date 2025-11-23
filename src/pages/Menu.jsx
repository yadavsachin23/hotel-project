import Header from '../components/Header';
import Footer from '../components/Footer';
import CartIcon from '../components/CartIcon';
import { useJQueryPlugins } from '../hooks/useJQueryPlugins';

function Menu() {
  useJQueryPlugins();

  const menuItems = [
    { img: 'f1.png', name: 'Delicious Pizza', price: '$20', category: 'pizza' },
    { img: 'f2.png', name: 'Delicious Burger', price: '$15', category: 'burger' },
    { img: 'f3.png', name: 'Delicious Pizza', price: '$17', category: 'pizza' },
    { img: 'f4.png', name: 'Delicious Pasta', price: '$18', category: 'pasta' },
    { img: 'f5.png', name: 'French Fries', price: '$10', category: 'fries' },
    { img: 'f6.png', name: 'Delicious Pizza', price: '$15', category: 'pizza' },
    { img: 'f7.png', name: 'Tasty Burger', price: '$12', category: 'burger' },
    { img: 'f8.png', name: 'Tasty Burger', price: '$14', category: 'burger' },
    { img: 'f9.png', name: 'Delicious Pasta', price: '$10', category: 'pasta' },
  ];

  return (
    <>
      <div className="hero_area sub_page">
        <div className="bg-box">
          <img src="/images/hero-bg.jpg" alt="" />
        </div>
        <Header />
      </div>

      <section className="food_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Menu</h2>
          </div>

          <ul className="filters_menu">
            <li className="active" data-filter="*">All</li>
            <li data-filter=".burger">Burger</li>
            <li data-filter=".pizza">Pizza</li>
            <li data-filter=".pasta">Pasta</li>
            <li data-filter=".fries">Fries</li>
          </ul>

          <div className="filters-content">
            <div className="row grid">
              {menuItems.map((item, index) => (
                <div key={index} className={`col-sm-6 col-lg-4 all ${item.category}`}>
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img src={`/images/${item.img}`} alt="" />
                      </div>
                      <div className="detail-box">
                        <h5>{item.name}</h5>
                        <p>
                          Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                        </p>
                        <div className="options">
                          <h6>{item.price}</h6>
                          <a href="">
                            <CartIcon />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="btn-box">
            <a href="">View More</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Menu;

