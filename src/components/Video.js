import React from 'react'
import ReactPlayer from 'react-player'
function Video(props) {
    return (
        <div>
            <button
                type="button"
                className="btn btn-outline-secondary btn-lg"
                data-bs-toggle="modal"
                data-bs-target={props.target}
            >
                {props.heading}
            </button>
            <div
                className="modal fade"
                id={props.id}
                tabindex="-1"
                aria-labelledby={props.exml}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fs-6" id={props.exml}>
                                {props.title}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div
                                className="video"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    minWidth: "55vw",
                                    minHeight: "auto",
                                }}
                            >
                                <ReactPlayer width={"100%"} height={"100%"} url={props.src} controls />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video