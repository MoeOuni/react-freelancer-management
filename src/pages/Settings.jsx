import React from "react";
import SectionTitle from "../components/SectionTitle";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Settings = () => {
  return (
    <div>
      <SectionTitle icon={<FontAwesomeIcon icon={faGear} />} title="Settings" />
    </div>
  );
};

export default Settings;
