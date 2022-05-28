import ReactAudioPlayer from "react-audio-player";
import React from "react";
import Video from "./Video";

import JPS from "./audio/JapjiSahib.mp3";
import JAPS from "./audio/JaapSahib.mp3";
import TPS from "./audio/TPS.mp3";
import CHAUP from "./audio/ChaupaiSahib.mp3";
import ANAND from "./audio/AnandSahib.mp3";

import JPSV from "./Videos/JapjiSahib.mp4"
import JAPSV from "./Videos/JaapSahib.mp4"
import TPSV from "./Videos/TPS.mp4"
import CHAUPV from "./Videos/Chaupai.mp4"
import ANANDV from "./Videos/AnandSahib.mp4"
export default function Nitnem() {
    return (
        <div>
            <div className="heading text-center pb-2">
                <h1 className="fs-2">Nitnem</h1>
            </div>

            <div className="accordion accordion-flush " id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button
                            className="accordion-button collapsed my-2  fs-4"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                        >
                            Japji Sahib - ਜਪੁਜੀ ਸਾਹਿਬ
                        </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div
                            className="accordion-body "
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Video
                                heading="video-Japji Sahib"
                                title="Japji Sahib | Read Along | Bhai Gurpreet Singh Shimla Wale | "
                                src={JPSV}
                                target="#exampleModal"
                                exml="exampleModalLabel"
                                id="exampleModal"
                            />
                            <hr />
                            <div
                                className="fw-bold "
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                Tap to play -
                                <ReactAudioPlayer className="center" src={JPS} controls />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button
                            className="accordion-button collapsed my-2  fs-4"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                        >
                            Jaap Sahib - ਜਾਪੁ ਸਾਹਿਬ
                        </button>
                    </h2>
                    <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div
                            className="accordion-body "
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Video
                                heading="video - Jaap Sahib"
                                title="Jaap sahib | Bhai Gurpreet Singh Shimla Wale | Read Along | "
                                src={JAPSV}
                                target="#exampleModal1"
                                exml="exampleModalLabel1"
                                id="exampleModal1"
                            />
                            <hr />
                            <div
                                className="fw-bold "
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                Tap to play -
                                <ReactAudioPlayer className="center" src={JAPS} controls />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button
                            className="accordion-button collapsed my-2  fs-4"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                        >
                            Tav Parsad Savaiye - ਤ੍ਵਪ੍ਰਸਾਦਿ ਸ੍ਵਯੇ
                        </button>
                    </h2>
                    <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div
                            className="accordion-body "
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Video
                                heading="video - Tav Prasad Savaiye"
                                title="Tav Prasad Savaiye | Read Along | Bhai Gurpreet Singh Ji Shimla wale |  "
                                src={TPSV}
                                target="#exampleModal2"
                                exml="exampleModalLabel2"
                                id="exampleModal2"
                            />
                            <hr />
                            <div
                                className="fw-bold "
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                Tap to play -
                                <ReactAudioPlayer className="center" src={TPS} controls />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                        <button
                            className="accordion-button collapsed my-2  fs-4"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFour"
                            aria-expanded="false"
                            aria-controls="flush-collapseFour"
                        >
                            Chaupai Sahib - ਚੋਪਈ ਸਾਹਿਬ
                        </button>
                    </h2>
                    <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div
                            className="accordion-body "
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Video
                                heading="video - Chaupai Sahib"
                                title="Chaupai Sahib | Read Along | Bhai Gurpreet Singh Shimla Wale |"
                                src={CHAUPV}
                                target="#exampleModal3"
                                exml="exampleModalLabel3"
                                id="exampleModal3"
                            />
                            <hr />
                            <div
                                className="fw-bold "
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                Tap to play -
                                <ReactAudioPlayer className="center" src={CHAUP} controls />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFive">
                        <button
                            className="accordion-button collapsed my-2  fs-4"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFive"
                            aria-expanded="false"
                            aria-controls="flush-collapseFive"
                        >
                            Anand Sahib - ਅਨੰਦ ਸਾਹਿਬ
                        </button>
                    </h2>
                    <div
                        id="flush-collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFive"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div
                            className="accordion-body "
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Video
                                heading="video - Anand Sahib"
                                title="Anand Sahib | Read Along | Bhai Gurpreet Singh Shimla Wale |"
                                src={ANANDV}
                                target="#exampleModal4"
                                exml="exampleModalLabel4"
                                id="exampleModal4"
                            />
                            <hr />
                            <div
                                className="fw-bold "
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                Tap to play -
                                <ReactAudioPlayer className="center" src={ANAND} controls />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
