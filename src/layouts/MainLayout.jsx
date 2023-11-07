import React from "react";
import { Layout, Menu, theme } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faFolderTree,
  faGear,
  faListCheck,
  faNoteSticky,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import getItem from "../utils/getIMenutem";

const { Header, Content, Footer, Sider } = Layout;
const MainLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="vh-100">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          className="min-vh-100"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={[
            getItem(
              <Link className="text-decoration-none" to="/todos">
                To do list
              </Link>,
              "/todos",
              <FontAwesomeIcon icon={faListCheck} />
            ),
            getItem(
              <Link className="text-decoration-none" to="/calendar">
                Calendar
              </Link>,
              "/calendar",
              <FontAwesomeIcon icon={faCalendarDays} />
            ),
            getItem(
              <Link className="text-decoration-none" to="/notes">
                Notes
              </Link>,
              "/notes",
              <FontAwesomeIcon icon={faNoteSticky} />
            ),

            getItem(
              <Link className="text-decoration-none" to="/time">
                Time
              </Link>,
              "/time",
              <FontAwesomeIcon icon={faStopwatch} />
            ),
            getItem(
              <Link className="text-decoration-none" to="/projects">
                Projects
              </Link>,
              "/projects",
              <FontAwesomeIcon icon={faFolderTree} />
            ),
            getItem(
              <Link className="text-decoration-none" to="/settings">
                Settings
              </Link>,
              "/settings",
              <FontAwesomeIcon icon={faGear} />
            ),
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 24px 16px",
          }}
        >
          <div
            style={{
              padding: 24,
              height: "100%",
              minHeight: 360,
              background: colorBgContainer,
              overflowY: "scroll",
            }}
            className="rounded-3 shadow-sm"
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Made with ❤️ by Moe
        </Footer>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
