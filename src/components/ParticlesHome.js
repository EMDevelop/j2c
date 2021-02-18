import React from 'react'
import Particles from 'react-particles-js';
import "pathseg";

function ParticlesHome() {
    return (
        <div><Particles
        params={{
          fps_limit: 60,
          particles: {
            collisions: {
              enable: false,
            },
            number: {
              value: 500,
              density: {
                enable: false,
              },
            },
            color: {
              value: "#1f306d",
            },
            shape: {
              type: "edge",
              stroke: {
                width: 1,
                color: "#4a5c9e",
              },
            },
            line_linked: {
              enable: true,
              distance: 25,
              opacity: 0.7,
              color: "#1f306d",
              width: 1,
              // shadow: {
              // enable: false,
              //  blur: 2,
              // color: "black",
              //  },
            },
            size: {
              value: 1,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            move: {
              speed: 0.25,
            },
            opacity: {
              anim: {
                enable: true,
                opacity_min: 0.05,
                speed: 4,
                sync: false,
              },
              value: 0.4,
            },
          },
          polygon: {
            enable: true,
            scale: 1.5,
            type: "inline", //can change to "outside" or "inside" or "inline"//
            move: {
              radius: 2, //this will change the radius from the lines in the svg file//
            },
            url:
              "https://raw.githubusercontent.com/juliazieniewicz/backgroundsvg/4eeafe37c01df39add4a5d095a7ba47829fb1706/untitled%20(12).svg",
            inline: {
              arrangement: "equidistant",
            },
            draw: {
              enable: false,
              stroke: {
                color: "rgba(255, 255, 255, .2)",
              },
            },
          },
          retina_detect: false,
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
            },
            modes: {
              bubble: {
                size: 4,
                distance: 50,
                opacity: 1,
                // duration: 3,
              },
              repulse: {
                distance: 100,
                duration: 1,
              },
            },
          },
        }}
      height='600px' 
      width='600px'
      />

        </div>
    )
}

export default ParticlesHome
