import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartIcon from '../components/CartIcon';
import { useJQueryPlugins } from '../hooks/useJQueryPlugins';

function Home() {
  useJQueryPlugins();

  useEffect(() => {
    // Initialize carousel when component mounts
    if (window.$ && window.$.fn.carousel) {
      window.$('#customCarousel1').carousel();
    }
  }, []);

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

  useEffect(() => {
    let mapInstance = null;
    let checkInterval = null;
    let timeoutId = null;

    const initMap = () => {
      const mapElement = document.getElementById('googleMap');
      if (window.google && window.google.maps && mapElement && !mapInstance) {
        mapInstance = new window.google.maps.Map(mapElement, {
          zoom: 18,
          center: { lat: 40.712775, lng: -74.005973 },
        });
        new window.google.maps.Marker({
          position: { lat: 40.712775, lng: -74.005973 },
          map: mapInstance,
        });
      }
    };

    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) {
      // Small delay to ensure DOM is ready
      timeoutId = setTimeout(initMap, 100);
    } else {
      // Wait for Google Maps to load
      checkInterval = setInterval(() => {
        if (window.google && window.google.maps) {
          clearInterval(checkInterval);
          timeoutId = setTimeout(initMap, 100);
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => {
        if (checkInterval) clearInterval(checkInterval);
      }, 10000);
    }

    // Cleanup function
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (checkInterval) clearInterval(checkInterval);
    };
  }, []);

  return (
    <>
      <div className="hero_area">
        <div className="bg-box">
          <img src="/images/hero-bg.jpg" alt="" />
        </div>
        <Header />
        <section className="slider_section ">
          <div id="customCarousel1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {[1, 2, 3].map((item, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <div className="container ">
                    <div className="row">
                      <div className="col-md-7 col-lg-6 ">
                        <div className="detail-box">
                          <h1>Fast Food Restaurant</h1>
                          <p>
                            Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                          </p>
                          <div className="btn-box">
                            <a href="" className="btn1">
                              Order Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="container">
              <ol className="carousel-indicators">
                {[0, 1, 2].map((index) => (
                  <li key={index} data-target="#customCarousel1" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </div>

      <section className="offer_section layout_padding-bottom">
        <div className="offer_container">
          <div className="container ">
            <div className="row">
              <div className="col-md-6  ">
                <div className="box ">
                  <div className="img-box">
                    <img src="/images/o1.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Tasty Thursdays</h5>
                    <h6>
                      <span>20%</span> Off
                    </h6>
                    <a href="">
                      Order Now <CartIcon />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6  ">
                <div className="box ">
                  <div className="img-box">
                    <img src="/images/o2.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Pizza Days</h5>
                    <h6>
                      <span>15%</span> Off
                    </h6>
                    <a href="">
                      Order Now <CartIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="food_section layout_padding-bottom">
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

      <section className="about_section layout_padding">
        <div className="container  ">
          <div className="row">
            <div className="col-md-6 ">
              <div className="img-box">
                <img src="/images/about-img.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>We Are Feane</h2>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                  in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                  are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                  the middle of text. All
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="book_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Book A Table</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form_container">
                <form action="">
                  <div>
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div>
                    <input type="text" className="form-control" placeholder="Phone Number" />
                  </div>
                  <div>
                    <input type="email" className="form-control" placeholder="Your Email" />
                  </div>
                  <div>
                    <select className="form-control nice-select wide">
                      <option value="" disabled defaultValue>
                        How many persons?
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="btn_box">
                    <button>Book Now</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map_container ">
                <div id="googleMap" style={{ height: '400px', width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2>What Says Our Customers</h2>
          </div>
          <div className="carousel-wrap row ">
            <div className="owl-carousel client_owl-carousel">
              <div className="item">
                <div className="box">
                  <div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </p>
                    <h6>Moana Michell</h6>
                    <p>magna aliqua</p>
                  </div>
                  <div className="img-box">
                    <img src="/images/client1.jpg" alt="" className="box-img" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </p>
                    <h6>Mike Hamell</h6>
                    <p>magna aliqua</p>
                  </div>
                  <div className="img-box">
                    <img src="/images/client2.jpg" alt="" className="box-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;

