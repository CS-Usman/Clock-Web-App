import React,{useState} from "react";

function App(){
    // Date

    var date = new Date().getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    var month= monthNames[new Date().getMonth()];
    var year = new Date().getFullYear();

    // Day

    const dayNames = ["MONDAY ", " TUESDAY ", " WEDNESDAY ", " THURSDAY ", " FRIDAY ", " SATURDAY "," SUNDAY"];
    var day = dayNames[new Date().getDay()];

    // 24 Hour format
    var now = new Date().toLocaleTimeString("it-IT");
    var [time, setTime] = useState(now);

    function updateTimein24(){
        var newTime = new Date().toLocaleTimeString("it-IT");
        setTime(newTime); 
    }

    // 12 Hour format

    function updateTimein12(){
        var newTime= new Date().toLocaleTimeString(); // setting to 12
        setTime(newTime); 
    }

    
    

    return(
        <div className = "flexContainer">
            <div className = "flexItems Date">{month} {date}, {year}</div>
            <div className = "flexItems Day">{day}</div>
            <div className = "flexItems Time">{time}</div>
            <div>
                <button className = "Hour12 "onClick={updateTimein12}>12 Hour</button>
                <button className = "Hour24 "onClick={updateTimein24}>24 Hour</button>
            </div>

        

        </div>
    );
}

export default App;