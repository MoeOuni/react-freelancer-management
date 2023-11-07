import React from "react";
import PropTypes from "prop-types";
import { theme } from "antd";

const SectionTitle = ({ icon, title }) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  return (
    <div className="mb-3">
      <h5 style={{ color: colorPrimary }}>
        <span style={{ marginRight: "5px" }}>{icon}</span>
        {title}
      </h5>
    </div>
  );
};

SectionTitle.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
