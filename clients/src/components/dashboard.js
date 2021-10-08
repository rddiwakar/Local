import React,{useState, useEffect} from "react";
import DesktopDashBoard from "./desktopdeshboard";
import MobileDashboard from "./mobiledashboard";
function Dashboard(){
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        console.log("useEffect");
        function updateScreenSize() {
            setScreenSize(window.innerWidth);
        }

        window.addEventListener("resize", updateScreenSize);
    }, []);

    return(
        <div>
            {screenSize < 760 ? <MobileDashboard /> : <DesktopDashBoard />}
        </div>
    )
}
export default Dashboard