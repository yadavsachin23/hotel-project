import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Book() {

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
      <div className="hero_area sub_page">
        <div className="bg-box">
          <img src="/images/hero-bg.jpg" alt="" />
        </div>
        <Header />
      </div>

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

      <Footer />
    </>
  );
}

export default Book;

