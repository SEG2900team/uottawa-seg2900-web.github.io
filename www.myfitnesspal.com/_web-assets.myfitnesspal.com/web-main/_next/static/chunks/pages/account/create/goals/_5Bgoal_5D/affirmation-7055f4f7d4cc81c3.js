(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8019],{30344:function(e,t,r){"use strict";var n=r(46288),a=r(43131),o=r(52983),i=r(14517),s=r(73605),l=r(57606),c=r(41983),u=r(66666),f=r(36068),d=r(45509),m=r(82978),b=r(94178),p=r(97458);const x=["className","color","value","valueBuffer","variant"];let h,g,v,y,P,Z,w=e=>e;const j=(0,l.F4)(h||(h=w`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),O=(0,l.F4)(g||(g=w`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),S=(0,l.F4)(v||(v=w`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),C=(e,t)=>"inherit"===t?"currentColor":e.vars?e.vars.palette.LinearProgress[`${t}Bg`]:"light"===e.palette.mode?(0,c.$n)(e.palette[t].main,.62):(0,c._j)(e.palette[t].main,.5),_=(0,d.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`color${(0,u.Z)(r.color)}`],t[r.variant]]}})((({ownerState:e,theme:t})=>(0,a.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:C(t,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"}))),k=(0,d.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.dashed,t[`dashedColor${(0,u.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>{const r=C(t,e.color);return(0,a.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,l.iv)(y||(y=w`
    animation: ${0} 3s infinite linear;
  `),S)),B=(0,d.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.bar,t[`barColor${(0,u.Z)(r.color)}`],("indeterminate"===r.variant||"query"===r.variant)&&t.bar1Indeterminate,"determinate"===r.variant&&t.bar1Determinate,"buffer"===r.variant&&t.bar1Buffer]}})((({ownerState:e,theme:t})=>(0,a.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":(t.vars||t).palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,l.iv)(P||(P=w`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),j))),I=(0,d.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.bar,t[`barColor${(0,u.Z)(r.color)}`],("indeterminate"===r.variant||"query"===r.variant)&&t.bar2Indeterminate,"buffer"===r.variant&&t.bar2Buffer]}})((({ownerState:e,theme:t})=>(0,a.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":(t.vars||t).palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:C(t,e.color),transition:"transform .4s linear"})),(({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,l.iv)(Z||(Z=w`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),O))),T=o.forwardRef((function(e,t){const r=(0,m.Z)({props:e,name:"MuiLinearProgress"}),{className:o,color:l="primary",value:c,valueBuffer:d,variant:h="indeterminate"}=r,g=(0,n.Z)(r,x),v=(0,a.Z)({},r,{color:l,variant:h}),y=(e=>{const{classes:t,variant:r,color:n}=e,a={root:["root",`color${(0,u.Z)(n)}`,r],dashed:["dashed",`dashedColor${(0,u.Z)(n)}`],bar1:["bar",`barColor${(0,u.Z)(n)}`,("indeterminate"===r||"query"===r)&&"bar1Indeterminate","determinate"===r&&"bar1Determinate","buffer"===r&&"bar1Buffer"],bar2:["bar","buffer"!==r&&`barColor${(0,u.Z)(n)}`,"buffer"===r&&`color${(0,u.Z)(n)}`,("indeterminate"===r||"query"===r)&&"bar2Indeterminate","buffer"===r&&"bar2Buffer"]};return(0,s.Z)(a,b.E,t)})(v),P=(0,f.Z)(),Z={},w={bar1:{},bar2:{}};if("determinate"===h||"buffer"===h)if(void 0!==c){Z["aria-valuenow"]=Math.round(c),Z["aria-valuemin"]=0,Z["aria-valuemax"]=100;let e=c-100;"rtl"===P.direction&&(e=-e),w.bar1.transform=`translateX(${e}%)`}else 0;if("buffer"===h)if(void 0!==d){let e=(d||0)-100;"rtl"===P.direction&&(e=-e),w.bar2.transform=`translateX(${e}%)`}else 0;return(0,p.jsxs)(_,(0,a.Z)({className:(0,i.Z)(y.root,o),ownerState:v,role:"progressbar"},Z,{ref:t},g,{children:["buffer"===h?(0,p.jsx)(k,{className:y.dashed,ownerState:v}):null,(0,p.jsx)(B,{className:y.bar1,ownerState:v,style:w.bar1}),"determinate"===h?null:(0,p.jsx)(I,{className:y.bar2,ownerState:v,style:w.bar2})]}))}));t.Z=T},94178:function(e,t,r){"use strict";r.d(t,{E:function(){return a}});var n=r(25715);function a(e){return(0,n.ZP)("MuiLinearProgress",e)}const o=(0,r(62792).Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);t.Z=o},72495:function(e,t,r){"use strict";var n=r(87830),a=r(59394),o=r(89145),i=r(43405),s=r(75574),l=r(97458),c={container:{display:"flex",justifyContent:"center",zIndex:2,position:{sm:"sticky"},bottom:0,left:{xs:0,sm:"unset"},bgcolor:"common.neutrals.white",py:{xs:4,sm:0},width:{xs:"100%",sm:"auto"},mt:{xs:16,sm:0}},backButton:{maxWidth:{xs:"100%",sm:181},mr:{xs:1,sm:4},width:{xs:"100%"},height:{sm:56}},submitButtonContainer:{position:{xs:"fixed",sm:"unset"},bottom:{xs:0,sm:"unset"},bgcolor:{xs:"white",sm:"unset"},py:{xs:2,sm:"unset"},width:{xs:"calc(100% - 32px)"},maxWidth:{xs:"none",sm:181}},submitButton:{py:{sm:3},height:{sm:56}}};t.Z=function(e){var t=e.backUrl,r=e.loadingStatus,u=e.nextButtonDisplayFinish,f=e.disabled,d=void 0!==f&&f,m=(0,i.wx)(),b=(0,o.Z)((function(e){return e.breakpoints.only("xs")}));return(0,l.jsxs)(n.Z,{component:"nav",sx:c.container,children:[!b&&(0,l.jsx)(s.Z,{fullWidth:!0,sx:c.backButton,variant:"outlined",href:t,children:(0,l.jsx)(a.Z,{variant:"Button/Caps/LG",children:m("back")})}),(0,l.jsx)(n.Z,{sx:c.submitButtonContainer,children:(0,l.jsx)(s.Z,{type:"submit",fullWidth:!0,loading:r,disabled:r||d,sx:c.submitButton,children:(0,l.jsx)(a.Z,{variant:"Button/Caps/LG",children:m(u?"finish":"next")})})})]})}},24159:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(87830),a=r(40508),o=r(29360),i=(r(52983),r(43405)),s=r(97458);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={container:{display:"flex","& > * + *":{marginLeft:2}}};function f(e){var t=(0,i.wx)();return(0,s.jsx)(n.Z,{sx:u.container,children:(0,s.jsx)(o.Z,c({disableShrink:!0,title:t("circularProgressBarLabel")},e))})}},420:function(e,t,r){"use strict";r.d(t,{a:function(){return u}});var n=r(87830),a=r(40508),o=(r(52983),r(24159)),i=r(97458);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c={display:"flex",justifyContent:"center",alignItems:"center",minHeight:{xs:"calc(100vh - 283px)",md:"calc(100vh - 240px)"}},u=function(e){var t=e.sx,r=e.size;return(0,i.jsx)(n.Z,{sx:l(l({},c),t),children:(0,i.jsx)(o.Z,{size:r})})}},77892:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return g}});var n=r(87830),a=r(59394),o=r(34456),i=r(52983),s=r(43405),l=r(85442),c=r(66187),u=r(52246),f=r(420),d=r(75162),m=r(72495),b=r(66080),p=r(97458),x={textContainer:{textAlign:{xs:"left",sm:"center"}},titleText:{fontSize:{sm:20},fontWeight:700},subText:{fontSize:{sm:14},mt:{xs:4},mx:{sm:4}},leadInText:{fontSize:{sm:14},mt:{xs:6,sm:8},mb:{sm:50},mx:{sm:4}},loaderContainer:{minHeight:550},loader:{height:"50%"}};function h(){var e=(0,s.wx)(),t=(0,o.useRouter)(),r=(0,l.oR)(c.zO),b=r.data,h=r.setData,g=(0,i.useState)(!1),v=g[0],y=g[1],P=(0,i.useMemo)((function(){return function(e,t){if(null===e||void 0===e||!e.unified_goals)return{};var r=e.unified_goals.find((function(e){return e.selection===u.hP["primary-account-goal"].id})),n=u.hP["primary-account-goal"].options.find((function(e){return e.goalsRoute===t.query.goal})).value,a=e.unified_goals.find((function(e){return e.selection===u.hP[t.query.goal].id})).subSelections[0],o=u.hP[t.query.goal].options.find((function(e){return e.value===a})),i=r.subSelections.indexOf(n)+1,s=i>r.subSelections.length-1,l={title:null===o||void 0===o?void 0:o.affirmationPageTitle,subText:null===o||void 0===o?void 0:o.affirmationPageSubtext,currentPrimaryGoal:n,isFinalUnifiedGoalsPage:s};if(s)l.nextPageValue=null,l.leadInText=u.hP.defaultLeadInText,l.nextPageUrl="/account/create/activity-level";else{var c=u.hP["primary-account-goal"].options.find((function(e){return e.value===(null===r||void 0===r?void 0:r.subSelections[i])}));l.nextPageValue=c.value,l.leadInText=c.affirmationPageLeadInText,l.nextPageUrl="/account/create/goals/".concat(c.goalsRoute,"/options")}return l}(b,t)}),[b,t]),Z=P.title,w=P.subText,j=P.leadInText,O=P.nextPageUrl,S=P.isFinalUnifiedGoalsPage,C=P.currentPrimaryGoal,_=P.nextPageValue;(0,i.useEffect)((function(){b.isBigStepPageComplete||t.push("/account/create/welcome")}),[b,t]);return(0,p.jsx)(p.Fragment,{children:b.unified_goals?(0,p.jsxs)(n.Z,{component:"form",onSubmit:function(e){e.preventDefault(),y(!0),S&&h("isUnifiedGoalsComplete",!0),(0,d.hV)([d.Tw],"cta_tapped_onboarding",{action:"next",screen_name:"affirmation_".concat(C,"_2"),destination:S?"activity_level_response":"onboarding_".concat(_,"_options")}),t.push(O)},children:[(0,p.jsxs)(n.Z,{sx:x.textContainer,children:[(0,p.jsx)(a.Z,{variant:"h4",component:"h1",sx:x.titleText,children:e(Z)}),(0,p.jsx)(a.Z,{sx:x.subText,children:e(w)}),(0,p.jsx)(a.Z,{sx:x.leadInText,children:e(j)})]}),(0,p.jsx)(m.Z,{backUrl:"/account/create/goals/".concat(t.query.goal,"/options"),loadingStatus:v})]}):(0,p.jsx)(n.Z,{sx:x.loaderContainer,children:(0,p.jsx)(f.a,{sx:x.loader})})})}h.Layout=b.Z;var g=!0;t.default=h},15727:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push([(_SiteOneUrlDepth > 0 ? "../".repeat(_SiteOneUrlDepth) : "./")+"/account/create/goals/[goal]/affirmation",function(){return r(77892)}])}},function(e){e.O(0,[2246,6080,2888,9774,179],(function(){return t=15727,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=affirmation-7055f4f7d4cc81c3.js.map