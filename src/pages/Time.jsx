import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SectionTitle from "../components/SectionTitle";
import TimeTable from "../components/TimeTable";

const Time = () => {
  return (
    <div>
      <SectionTitle
        icon={<FontAwesomeIcon icon={faStopwatch} />}
        title="Time"
      />
      <TimeTable />
    </div>
  );
};

export default Time;
