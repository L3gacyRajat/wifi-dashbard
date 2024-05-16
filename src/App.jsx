import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Wifi from "./pages/Wifi";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Wifi/>} />
      </Routes>
    </RootLayout>
  );
};

export default App;
