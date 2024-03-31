import InstrumentTable from "./InstrumentsWindow/InstrumentTable";
import AttenuatorTable from "./InstrumentsWindow/AttenuatorTable";
import TurntableTable from "./InstrumentsWindow/TurntableTable";
import { useState } from "react";

const InstrumentsWindow = () => {
    // Initialize state to only show the InstrumentTable by default
    const [visibleTable, setVisibleTable] = useState('instrument');

    // Function to dynamically set button classes
    const buttonClass = (tableName) => {
        return `border ml-4 ${visibleTable === tableName ? 'bg-[#0B1739]' : 'active:bg-[#0B1739] focus:bg-[#0B1739]'} text-white mr-2 rounded-md px-3 py-2`;
    };

    return (
        <div className="mt-7">
            <button onClick={() => setVisibleTable('instrument')} className={buttonClass('instrument')}>
                Instruments
            </button>
            <button onClick={() => setVisibleTable('attenuator')} className={buttonClass('attenuator')}>
                Attenuator
            </button>
            <button onClick={() => setVisibleTable('turntable')} className={buttonClass('turntable')}>
                Turntable
            </button>

            {visibleTable === 'instrument' && <InstrumentTable/>}
            {visibleTable === 'attenuator' && <AttenuatorTable />}
            {visibleTable === 'turntable' && <TurntableTable />}
        </div>
    );
};

export default InstrumentsWindow;
