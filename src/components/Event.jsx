export const Event = ({ event, starDate, endDate }) => {
  return (
    <div className="event-container ">
      <h3>{event}</h3>
      <p>Inicio: {starDate}</p>
      <p>Final: {endDate}</p>
    </div>
  );
};
