import React from "react";

export default function Footer() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  var date = date.toDateString();
  return (
    <>
      <div class="card text-center border-0">
        <div class="card-body">
          <h5 class="card-title">Enter email for News Letters</h5>
          <p class="card-text">
            <input type="email" className="" id="" placeholder="email" />
          </p>
          <a href="#" class="btn btn-primary">
            Submit
          </a>
        </div>
        <div class="card-footer text-muted">{strTime + "    " + date}</div>
      </div>
    </>
  );
}
