import { faFolderTree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SectionTitle from "../components/SectionTitle";

const Projects = () => {
  return (
    <div>
      <SectionTitle
        icon={<FontAwesomeIcon icon={faFolderTree} />}
        title="Projects"
      />
    </div>
  );
};

export default Projects;
