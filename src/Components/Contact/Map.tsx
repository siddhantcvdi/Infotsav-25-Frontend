type MapProps = {};

const Map = ({}: MapProps) => {
  return (
    <div className="w-full flex items-center md:justify-end justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.376170487436!2d78.17156387541677!3d26.2494520770488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6e5d32a4d53%3A0xf834069adc0c9b89!2sAtal%20Bihari%20Vajpayee%20Indian%20Institute%20of%20Information%20Technology%20and%20Management%20Gwalior!5e0!3m2!1sen!2sin!4v1722790172995!5m2!1sen!2sin"
        className="aspect-square"
        style={{
          border: 0,
          outline: 0,
          width: "100%",
          maxWidth: "570px",
        }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
