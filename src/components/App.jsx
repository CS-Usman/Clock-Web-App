import React,{useState} from "react";
function App(){
    setInterval(updateTime,1000);
    // Date
    let date = new Date().getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    let month= monthNames[new Date().getMonth()];
    let year = new Date().getFullYear();

    // Day

    const dayNames = ["MONDAY", "TUESDAY", "WEDNESDAY ","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];
    let day = dayNames[new Date().getDay()];

    // 12 Hour format

    let now = new Date().toLocaleTimeString();
    let [time, setTime] = useState(now);

    function updateTime(){
        
        let newTime= new Date().toLocaleTimeString();
        setTime(newTime); 
    }

    

    return(
        <div className = "flexContainer">
            <div className = "flexItems ">{month} {date}, {year}</div>
            <div className = "flexItems ">{day}</div>
            <div className = "flexItems Time">{time}</div>
            <div className="name">USMAN</div>

        

        </div>
    );
}

export default App;