import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard"
import Testgen from "./pages/Testgen"
import Instruments from "./pages/testgen/Instruments";
import Adv from "./pages/testgen/adv";
import InstrumentsWindow from "./pages/InstrumentsWindow";
import ReportPannel from "./pages/ReportPannel";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/testgen/:dID" element={<Testgen/>} />
        {/* <Route path="/instruments" element={<Instruments/>}/> */}
        <Route path="/instrumentswindow" element={<InstrumentsWindow/>}/>
        <Route path="/reportpannel" element={<ReportPannel/>}/>
        <Route path="/adv" element={<Adv/>}/>
        

      </Routes>
    </RootLayout>
  );
};

export default App;
