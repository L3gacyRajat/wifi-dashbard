import { useParams} from "react-router-dom";
import React, { useState } from "react";
import Selector from "../../layouts/Selector";
import Attenuatorsettings from "./Attenuatorsettings"
import SnifferSettings from "./SnifferSettings"
import GenericInstrumentSettings from "./GenericInstrumentSettings"
import TurnTableSettings from "./TurnTableSettings"


const data = [
  "Attenuator Settings",
  "TurnTable settings ",
  "Generic Instuments Settings",
  "Sniffer Settings",
];

const Instruments = () => {
  const { dID } = useParams();
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <>
    <div className="text-textcolor dark:text-black text-1xl px-3">Instruments</div>
    <div className="bg-graphbg shadow-md rounded-sm m-4 p-4">
    <Selector data={data} onSelect={setSelectedOption} dropdownname="Instrument Settings" width="w-72"/>
    {selectedOption === "Attenuator Settings" && <Attenuatorsettings />}
    {selectedOption === "Sniffer Settings" && <SnifferSettings  />}
    {selectedOption === "Generic Instuments Settings" && <GenericInstrumentSettings />}
    {selectedOption === "TurnTable settings " && <TurnTableSettings />}
    </div>
  </>
  )
}

export default Instruments

