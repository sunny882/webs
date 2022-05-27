import React from "react";

export default function Footer() {
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
        <div class="card-footer text-muted">
          <div class="text-muted">In Progress By Satwinder Singh</div>
          <div class="text-muted">Email- sany.toor@gmail.com</div>
        </div>
      </div>
    </>
  );
}
