import "./Calendar.css";
import Sidebar from "../components/Sidebar";
import CalendarLog from "../components/calendarlogcomponents/Calendarlog";

const Calendar = () => {
  return (
    <div className="cal">
      <Sidebar />
      <CalendarLog />
    </div>
  );
};

export default Calendar;
