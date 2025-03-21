const CalendlyIframe = () => {
  return (
    <iframe
      src="https://calendly.com/asvisionpartners/30min?hide_event_type_details=1"
      style={{ width: "100%", height: "600px" }} // Ajusta el height según tus necesidades
      frameBorder="0"
      scrolling="no"
      // className="border-2"
    />
  );
};

export default CalendlyIframe;