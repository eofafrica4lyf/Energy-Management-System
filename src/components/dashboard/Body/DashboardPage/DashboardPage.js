import React from "react";
import Cost from "../../Charts/Cost";
// import swal from 'sweetalert';
import Doughnut2d from "../../Charts/Doughnut2d";


function DashboardHome() {
  return (
    <div
      id="dashboard-home"
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "5 0 0",
        padding: " 0 1.5rem"
      }}
    >
      <section style={{ flex: "1 0 auto" }}>
        <h1 style={{ padding: "1rem 1rem 0 1rem", marginTop: "1em", marginBottom: '0.15em' }}>
          Dashboard Home
        </h1>
        <div className="switch" style={{ padding: "5px" }}>
            <ul className="buttonwrapper">
              <li id="today" className="">
                <label id="l1">TODAY</label>
              </li>
              <li id="month" className="active">
                <label id="l2">MONTH</label>
              </li>
              <li id="year" className="">
                <label id="l3">YEAR</label>
              </li>
            </ul>

            <div className="text-right date-indicator" id="date">
              July 2019
            </div>
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          <Doughnut2d background="#1D2C52"/>
          <Cost background="#1F375D"/>
          <Cost background="#1F3A5F"/>
          <Cost background="#1B214A"/>
          <Cost background="#1F345A"/>
          <Cost background="#1E365C"/>
        </div>
        
        <div>
          {/* {swal("Good job!", "You clicked the button!", "success")} */}
        </div>
      </section>
    </div>
  );
}

export default DashboardHome;
