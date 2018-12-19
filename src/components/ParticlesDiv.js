import React from 'react';
import Particles from 'react-particles-js';
const styleForBackground=JSON.parse(`{"z-index":"0","position":"absolute","width":"100%","height":"100%","margin":"0px","padding":"0px", "justify-content":"center"}`);
const param={particles:{
    number: {
    value: 70,
    density: {
      enable: true,
      value_area: 1000
    }
  },
  shape: {
    type: "circle",
    stroke: {
      width: 2,
      color: "#fff"
    },
    polygon: {
      nb_sides: 7
    },
    image: {
      src: "img/github.svg",
      width: 100,
      height: 100
    }
  },
  opacity: {
    value: 1,
    random: false,
    anim: {
      enable: false,
      speed: 3,
      opacity_min: 0.1,
      sync: false
    }
  },
  size: {
    value: 3,
    random: true,
    anim: {
      enable: false,
      speed: 40,
      size_min: 0.1,
      sync: false
    }
  },
  line_linked: {
    enable: true,
    distance: 250,
    color: "fff",
    opacity: 0.4,
    width: 1
  },
  move: {
    enable: true,
    speed: 6, 
    direction: "none",
    random: false,
    straight: false,
    out_mode: "out",
    bounce: false,
    attract: {
      enable: false,
      rotateX: 600,
      rotateY: 1200
    }
    
  }
},
interactivity: {
  detect_on: "canvas",
  events: {
    onhover: {
      enable: true,
      mode: "grab"
    },
    onclick: {
      enable: true,
      mode: "push"
      
    },
    resize: true
  },
  modes: {
    grab: {
      distance: 140,
      line_linked: {
        opacity: 1
      }
    },
    bubble: {
      distance: 300,
      size: 70,
      duration: 2,
      opacity: 8,
      speed: 3
    },
    repulse: {
      distance: 500,
      duration: 0.4
    },
    push: {
      particles_nb: 4
    },
    remove: {
      particles_nb: 5
    }
  }
},
retina_detect: true
}


const ParticlesDiv = (props) => (
    <div id="particles-div" >
        <Particles {...props} style={styleForBackground} params={param} />
        {props.children}
    </div>
);

export default ParticlesDiv;