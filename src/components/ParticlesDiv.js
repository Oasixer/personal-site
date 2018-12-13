import React from 'react';
import Particles from 'react-particles-js';
const styleForBackground=JSON.parse(`{"position":"absolute","width":"100%","height":"100%","margin":"0px","padding":"0px", "justify-content":"center"}`);

const ParticlesDiv = (props) => (
    <div id="particles-div" >
        <Particles {...props} style={styleForBackground} />
        {props.children}
    </div>
);

export default ParticlesDiv;