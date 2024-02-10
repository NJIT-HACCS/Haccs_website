import '../Pages/Events.css'

const Events = () => {
  return (
    <>
      <iframe className='calendar'
        title="Google Calender"
        src="https://calendar.google.com/calendar/embed?src=njithaccs%40gmail.com&ctz=America%2FNew_York"
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </>
  );
};

export default Events;
