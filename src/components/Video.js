import React from "react";
export default function Video(props) {
  return (
    <div>
      <button
        type="button"
        class="btn btn-outline-secondary btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {props.heading}
      </button>
      <div
        class="modal fade "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {props.title}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div
                className="video"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  minWidth: "55vw",
                  minHeight: "65vh",
                }}
              >
                <iframe
                  src={props.src}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  }}
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
