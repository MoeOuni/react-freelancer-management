import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SectionTitle from "../components/SectionTitle";

const Todos = () => {
  return (
    <div>
      <SectionTitle
        icon={<FontAwesomeIcon icon={faListCheck} />}
        title="To do list"
      />
    </div>
  );
};

export default Todos;
