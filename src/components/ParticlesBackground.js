import React from "react";
import Particles from "react-particles-js";

function ParticlesBackground()  {

    return (
    <div
        style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
        }}>
         <Particles
        height={window.outerHeight}
        params={{
            "particles": {
                "number": {
                    "value": 100
                },
                "size": {
                    "value": 3
                },
                "color": {
                    "value": "#e51a94"
                },

                "line_linked": {
                    "enable": true,
                    "distance": 80,
                    "color": "#e51a94",
                    "opacity": 1,
                    "width": 1
                },
            },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": false,
                            "mode": "repulse"
                        }
                    }
                }
        }} />
        </div>
        )
    };

 export default  ParticlesBackground; 