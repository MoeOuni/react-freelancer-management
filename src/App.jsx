import { useContext, useEffect } from "react";
import { ConfigProvider } from "antd";
import AppContext from "./context/AppContext";
import UserContext from "./context/UserContext";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Todos from "./pages/Todos";
import Notes from "./pages/Notes";
import Time from "./pages/Time";
import Projects from "./pages/Projects";
import Settings from "./pages/Settings";
import Calendar from "./pages/Calendar";

function App() {
  const { theme } = useContext(AppContext);
  const { user } = useContext(UserContext);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#052047",
          colorInfo: "#052047",
        },
      }}
    >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/todos" element={<Todos />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/time" element={<Time />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
}

export default App;
