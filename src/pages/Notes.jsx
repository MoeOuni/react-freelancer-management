import { faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SectionTitle from "../components/SectionTitle";

const Notes = () => {
  return (
    <div>
      <SectionTitle
        icon={<FontAwesomeIcon icon={faStickyNote} />}
        title="Notes"
      />
    </div>
  );
};

export default Notes;
