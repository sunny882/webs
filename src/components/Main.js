import React from "react";
import Cards from "./Cards";
import Hukamnama from "./Hukamnama";
// import PanjTakht from "./PanjTakht";
// import { useNavigate } from "react-router-dom";
import Nitnem from "./Nitnem";

export default function Main() {
  // let nav = useNavigate();
  return (
    <>
      <div className="row gx-1">
        <div className="col-md-7 col-sm-12">
          <div className="shadow p-3 mb-2 ms-1 bg-body rounded">
            <Cards />
          </div>
          <div className="shadow p-3 mb-2 ms-1 bg-body rounded">
            <Nitnem />
          </div>
        </div>
        <div className="col-md-5 col-sm-12">
          <div className="shadow p-3 mb-2 ms-1 bg-body rounded">
            <Hukamnama />
          </div>
        </div>
      </div>
    </>
  );
}
