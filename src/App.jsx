import { useContext, useEffect } from "react";
import AppContext from "./context/AppContext";
import UserContext from "./context/UserContext";

function App() {
  const { theme } = useContext(AppContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log("theme : " + theme);
    console.log("user : " + user);
  }, []);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h4 style={{ textAlign: "center" }}>React Freelancer Management.</h4>
    </div>
  );
}

export default App;
