import React, { Component } from 'react';
import './CanvasStyle.css'

class Canvas extends Component {

    componentDidMount(){
        
        let numberOfDots =window.innerWidth<600?20:70;
        

        // eslint-disable-next-line no-undef
        particlesJS(
            "particles-js", 
            {"particles":{
                "number":{
                    "value":numberOfDots,
                    "density":{
                        "enable":false,
                        "value_area":3077.6818742293467
                    }
                },
                "color":{
                    "value":"#6d59ff"
                },
                "shape":{
                    "type":"dot",
                    "stroke":{
                        "width":0,
                        "color":"#2c25a0"
                    },
                    "polygon":{
                        "nb_sides":5
                    },
                    "image":{
                        "src":"img/github.svg",
                        "width":100,
                        "height":10
                    }
                },
                "opacity":{
                    "value":0.5932606789427534,
                    "random":true,
                    "anim":{
                        "enable":false,
                        "speed":1.705367339170156,
                        "opacity_min":0.12181195279786829,
                        "sync":false
                    }
                },
                "size":{
                    "value":11,
                    // eslint-disable-next-line no-undef
                    "random":false,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":545.1584617311788,"color":"#FFFFFF","opacity":0.21645997745208567,"width":2.725792308655894},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":1763.747964424402,"rotateY":4489.540273080296}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":803.9588884659306,"line_linked":{"opacity":0.8719794344473007}},"bubble":{"distance":40,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":121.81195279786829,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end();  requestAnimationFrame(update); }; requestAnimationFrame(update);;
                    if(document.getElementsByTagName("canvas")[1]){
                        document.getElementsByTagName("canvas")[1].parentElement.style.display="none";
                    }
    }

    componentDidUpdate(){
        if(document.getElementsByTagName("canvas")[1]){
            document.getElementsByTagName("canvas")[1].parentElement.style.display="none";
        }
    }

    render() {
        return (
            <>
                <div id="particles-js"></div>
                <p id="canvasText">MERAKI</p>
                <p id="canvasMidText">
                    Education and Career Guidance
                </p>
                <hr id="midLine" />
                <p id="canvasSubText">
                    The only way to do great work is to love what you do. If you haven't found it yet, keep looking. 
                </p>
                <div></div>
            </>
        );
    }
}

export default Canvas;