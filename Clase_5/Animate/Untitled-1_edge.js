/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Text',
            type:'text',
            rect:['4.3%','30px','312px','auto','auto','auto'],
            text:"Bienvenido a mi sitio HTML5",
            font:['Arial, Helvetica, sans-serif',[24,""],"rgba(0,0,0,1)","normal","none",""],
            textShadow:["rgba(0,0,0,0)",0,0,0]
         },
         {
            id:'HTML5_Logo_512',
            type:'image',
            rect:['78.2%','12.9%','104px','104px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"HTML5_Logo_512.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(39,208,229,0.29)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '140px'],
            ["gradient", "background-image", [270,[['rgba(158,194,218,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "width", '100%']
         ],
         "${_Text}": [
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "left", '4.31%'],
            ["style", "width", '312px'],
            ["style", "top", '30px'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'block'],
            ["subproperty", "filter.blur", '0px']
         ],
         "${_HTML5_Logo_512}": [
            ["transform", "rotateZ", '0deg'],
            ["style", "left", '78.17%'],
            ["style", "width", '104px'],
            ["style", "top", '12.86%'],
            ["style", "height", '104px'],
            ["subproperty", "filter.drop-shadow.offsetV", '-50px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid23", tween: [ "transform", "${_HTML5_Logo_512}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutBounce" },
            { id: "eid28", tween: [ "subproperty", "${_HTML5_Logo_512}", "filter.drop-shadow.offsetV", '-50px', { fromValue: '-50px'}], position: 2000, duration: 0, easing: "easeOutBounce" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-001");
