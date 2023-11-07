import React from "react";
import SectionTitle from "../components/SectionTitle";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CalendarComponent from "../components/CalendarComponent";

const Calendar = () => {
  return (
    <div>
      <SectionTitle
        icon={<FontAwesomeIcon icon={faCalendarDays} />}
        title="Calendar"
      />
      <CalendarComponent />
    </div>
  );
};

export default Calendar;
