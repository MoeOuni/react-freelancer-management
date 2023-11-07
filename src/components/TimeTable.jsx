import React, { useContext, useState } from "react";
import { Button, Divider, Radio, Space, Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePause,
  faCirclePlay,
  faClock,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import AppContext from "../context/AppContext";
import dayjs from "dayjs";

const data = [
  {
    key: "1",
    title: "Sprint Product Launch",
    task: "Strategy Planning",
    dueDate: "2023-11-07T18:00:00.907Z",
    totalTime: "2023-11-07T01:00:00.907Z",
  },
  {
    key: "2",
    title: "Marketing Meeting",
    task: "Content Planning",
    dueDate: "2023-11-08T09:30:00.907Z",
    totalTime: "2023-11-08T01:30:00.907Z",
  },
  {
    key: "3",
    title: "Client Presentation",
    task: "Client Engagement",
    dueDate: "2023-11-09T15:00:00.907Z",
    totalTime: "2023-11-09T01:00:00.907Z",
  },
  {
    key: "4",
    title: "Team Workshop",
    task: "Ideation Session",
    dueDate: "2023-11-10T14:00:00.907Z",
    totalTime: "2023-11-10T01:30:00.907Z",
  },
  {
    key: "5",
    title: "Product Development",
    task: "Coding and Testing",
    dueDate: "2023-11-11T10:30:00.907Z",
    totalTime: "2023-11-11T01:00:00.907Z",
  },
  {
    key: "6",
    title: "Marketing Campaign",
    task: "Ad Design",
    dueDate: "2023-11-12T13:45:00.907Z",
    totalTime: "2023-11-12T01:00:00.907Z",
  },
  {
    key: "7",
    title: "Financial Report",
    task: "Data Analysis",
    dueDate: "2023-11-13T11:00:00.907Z",
    totalTime: "2023-11-13T02:30:00.907Z",
  },
  {
    key: "8",
    title: "Team Meeting",
    task: "Project Updates",
    dueDate: "2023-11-14T09:15:00.907Z",
    totalTime: "2023-11-14T01:15:00.907Z",
  },
  {
    key: "9",
    title: "Product Launch Event",
    task: "Event Setup",
    dueDate: "2023-11-15T16:30:00.907Z",
    totalTime: "2023-11-15T01:30:00.907Z",
  },
  {
    key: "10",
    title: "Sales Call",
    task: "Customer Outreach",
    dueDate: "2023-11-16T14:00:00.907Z",
    totalTime: "2023-11-16T04:45:00.907Z",
  },
  {
    key: "1",
    title: "Sprint Product Launch",
    task: "Strategy Planning",
    dueDate: "2023-11-07T18:00:00.907Z",
    totalTime: "2023-11-07T01:00:00.907Z",
  },
  {
    key: "2",
    title: "Marketing Meeting",
    task: "Content Planning",
    dueDate: "2023-11-08T09:30:00.907Z",
    totalTime: "2023-11-08T01:30:00.907Z",
  },
  {
    key: "3",
    title: "Client Presentation",
    task: "Client Engagement",
    dueDate: "2023-11-09T15:00:00.907Z",
    totalTime: "2023-11-09T01:00:00.907Z",
  },
  {
    key: "4",
    title: "Team Workshop",
    task: "Ideation Session",
    dueDate: "2023-11-10T14:00:00.907Z",
    totalTime: "2023-11-10T01:30:00.907Z",
  },
  // Add more items as needed
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },

  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};

const TimeTable = () => {
  const { dateTimeFormat, timeFormat } = useContext(AppContext);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      render: (text) => (
        <a href="#" className="text-decoration-none fw-bold">
          {text}
        </a>
      ),
    },
    {
      title: "Task",
      dataIndex: "task",
      render: (text) => (
        <span style={{ borderLeft: "2px solid #D3ADF7", paddingLeft: "5px" }}>
          {text}
        </span>
      ),
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      render: (text) => (
        <span
          style={{
            borderLeft: `2px solid ${
              dayjs(text).isAfter(dayjs()) ? "#389E0D" : "#CF1322"
            }`,
            paddingLeft: "5px",
          }}
        >
          {dayjs(text).format(dateTimeFormat)}
        </span>
      ),
    },
    {
      title: "Total Time",
      dataIndex: "totalTime",
      render: (text) => (
        <span
          className="fw-bold"
          style={{
            color: dayjs(text).isAfter(dayjs()) ? "#389E0D" : "#CF1322",
          }}
        >
          <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faClock} />
          {dayjs(text).format(timeFormat)}
        </span>
      ),
    },
    {
      title: "Operation(s)",
      render: (_, record) => (
        <Space>
          <Button
            size="small"
            shape="round"
            icon={<FontAwesomeIcon icon={faCirclePlay} />}
          >
            Start
          </Button>
          {/* <Button
          size="small"
          shape="rounded"
          icon={<FontAwesomeIcon icon={faCirclePause} />}
        >
          Pause
        </Button> */}
          <Button
            size="small"
            shape="round"
            icon={<FontAwesomeIcon icon={faPen} />}
          >
            Edit
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
export default TimeTable;
