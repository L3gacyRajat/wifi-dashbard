import ToggleButton from "./ToggleButton"
const ToggleComponent = ({ detailhandleToggle, detailstoggleOn, infohandleToggle, infotoggleOn }) => {
    return (
        <>
            <div className="flex gap-2 items-center">
                <ToggleButton onToggle={detailhandleToggle} isOn={detailstoggleOn} />
                <h>Detailed logs</h>
            </div>
            <div className="flex gap-2 items-center">
                <ToggleButton onToggle={infohandleToggle} isOn={infotoggleOn} />
                <h>Info logs</h>
            </div>
        </>
    )
}
export default ToggleComponent
