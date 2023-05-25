import "./map.css";

const Map = () => {
  return (
    <div className="map">
      <iframe
        className="map__content"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A24a00f668189c7dc5ef84b2c4ca4aa6ec4634118a784c9e430cf151e5cfb97e4&amp;source=constructor"
        width="539"
        height="374"
        frameBorder="0"
        title="Карта"
      />
    </div>
  );
};

export default Map;
