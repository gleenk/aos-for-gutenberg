(()=>{const{__:e}=wp.i18n,{addFilter:t}=wp.hooks,{Fragment:l}=wp.element,{InspectorControls:a}=wp.blockEditor,{createHigherOrderComponent:n,withState:o}=wp.compose,{ToggleControl:u,SelectControl:r,PanelBody:i,PanelRow:g,TextControl:b}=wp.components,s=n((t=>n=>{if("core/"!==n.name.substring(0,5))return React.createElement(l,null,React.createElement(t,n));const{attributes:o,setAttributes:s,isSelected:m}=n,{gutenbergUseAOS:d,gutenbergAOSAnimation:c,gutenbergAOSDelay:p,gutenbergAOSDuration:f}=o;return React.createElement(l,null,React.createElement(t,n),m&&React.createElement(a,null,React.createElement(i,{title:e("AOS Settings","gutenberg-aos")},React.createElement(g,null,React.createElement(u,{label:e("Animate on scroll","gutenberg-aos"),checked:!!d,onChange:()=>s({gutenbergUseAOS:!d}),help:e(d?"Animate Element when it's inside the users viewport":"Don't animate Element when it's inside the users viewport","gutenberg-aos")})),React.createElement(g,null,React.createElement(r,{label:"Animation",value:c,options:[{label:"Fade",value:"fade"},{label:"Fade Up",value:"fade-up"},{label:"Fade Down",value:"fade-down"},{label:"Fade Right",value:"fade-right"},{label:"Fade Left",value:"fade-left"},{label:"Fade Up Right",value:"fade-up-right"},{label:"Fade Up Left",value:"fade-up-left"},{label:"Fade Down Left",value:"fade-down-left"},{label:"Fade Down Right",value:"fade-down-right"},{label:"Flip Left",value:"flip-left"},{label:"Flip Right",value:"flip-right"},{label:"Flip Up",value:"flip-up"},{label:"Flip Down",value:"flip-down"},{label:"Slide Up",value:"slide-up"},{label:"Slide Down",value:"slide-down"},{label:"Slide Left",value:"slide-left"},{label:"Slide Right",value:"slide-right"},{label:"Zoom In",value:"zoom-in"},{label:"Zoom In Up",value:"zoom-in-up"},{label:"Zoom In Down",value:"zoom-in-down"},{label:"Zoom In Left",value:"zoom-in-left"},{label:"Zoom In Right",value:"zoom-in-right"},{label:"Zoom Out",value:"zoom-out"},{label:"Zoom Out Up",value:"zoom-out-up"},{label:"Zoom Out Down",value:"zoom-out-down"},{label:"Zoom Out Right",value:"zoom-out-right"},{label:"Zoom Out Left",value:"zoom-out-left"}],onChange:e=>n.setAttributes({gutenbergAOSAnimation:e})})),React.createElement(g,null,React.createElement(b,{label:e("Delay (ms)","gutenberg-aos"),value:p,onChange:e=>s({gutenbergAOSDelay:parseInt(e)||0}),type:"number",min:0,max:2e3,step:50})),React.createElement(g,null,React.createElement(b,{label:e("Duration (ms)","gutenberg-aos"),value:f,onChange:e=>s({gutenbergAOSDuration:parseInt(e)||400}),type:"number",min:0,max:2e3,step:50})))))}),"gutenbergAOSControls");t("blocks.registerBlockType","gutenbergaos/attributes",(function(e){return void 0!==e.attributes&&(e.attributes=Object.assign(e.attributes,{gutenbergUseAOS:{type:"boolean",default:!1},gutenbergAOSAnimation:{type:"select",default:"fade-up"},gutenbergAOSDelay:{type:"number",default:0},gutenbergAOSDuration:{type:"number",default:400}})),e})),t("editor.BlockEdit","gutenbergaos/controls",s),t("blocks.getSaveContent.extraProps","gutenbergaos/applyAttributes",(function(e,t,l){if("core/"!==t.name.substring(0,5))return e;const{gutenbergUseAOS:a,gutenbergAOSAnimation:n,gutenbergAOSDelay:o,gutenbergAOSDuration:u}=l;if(void 0!==a&&a){let t;t=void 0!==n&&n?n:"fade-up",e["data-aos"]=t,void 0!==o&&0!==o&&(e["data-aos-delay"]=o),void 0!==u&&400!==u&&(e["data-aos-duration"]=u)}return e}))})();