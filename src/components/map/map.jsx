import "./map.css";

const Map = () => {
  return (
    <div className="map">
      <iframe
        className="map__content"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11653.545554684148!2d30.421982569177427!3d59.89182948083917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46962fcfb8a352d9%3A0xb82e71104897c413!2z0YPQuy4g0J7Qu9GM0LPQuCDQkdC10YDQs9Cz0L7Qu9GM0YYsIDM2INC60L7RgNC_0YPRgSAyLCAxLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMTkyMTQ4!5e0!3m2!1sru!2sru!4v1683745780809!5m2!1sru!2sru"
        // style={{ border: 0, width: 1000 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Карта"
      />
    </div>
  );
};

export default Map;
