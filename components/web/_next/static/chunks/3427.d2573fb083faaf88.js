(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3427],{63606:function(e,n,o){"use strict";o.d(n,{Z:function(){return s}});var a=o(1413),t=o(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},l=o(42135),i=function(e,n){return t.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:r}))};i.displayName="CheckOutlined";var s=t.forwardRef(i)},7783:function(e,n,o){"use strict";o.r(n),o.d(n,{NameChangeModal:function(){return C}});var a=o(85893),t=o(67294),r=o(4480),l=o(34041),i=o(71577),s=o(79292),c=o(79531),d=o(28997),u=o(44974),h=o(51801),p=o.n(h);let{Option:m}=l.Z,g=e=>{let{color:n}=e;return(0,a.jsx)("div",{style:{textAlign:"center",backgroundColor:"var(--theme-color-users-".concat(n,")"),width:"100%",height:"100%"}})},C=e=>{let{closeModal:n}=e,o=(0,r.sJ)(u.db),h=(0,r.sJ)(u.Gt),[C,f]=(0,t.useState)(null==o?void 0:o.displayName);if(!o)return null;let{displayName:y,displayColor:v}=o,w=()=>C!==y&&""!==C&&(null==h?void 0:h.isConnected()),E=()=>{if(!w())return;let e={type:d.C.NAME_CHANGE,newName:C};h.send(e),n()},M=[...Array(8)].map((e,n)=>n),S=(0,a.jsx)(i.Z,{type:"primary",id:"name-change-submit",onClick:E,disabled:!w(),children:"Change name"});return(0,a.jsxs)("div",{children:["Your chat display name is what people see when you send chat messages.",(0,a.jsx)(s.Z,{onSubmitCapture:E,className:p().form,children:(0,a.jsx)(c.Z.Search,{enterButton:S,id:"name-change-field",value:C,onChange:e=>f(e.target.value),placeholder:"Your chat display name","aria-label":"Your chat display name",maxLength:30,showCount:!0,defaultValue:y,className:p().inputGroup})}),(0,a.jsx)(s.Z.Item,{label:"Your Color",className:p().colorChange,children:(0,a.jsx)(l.Z,{style:{width:120},onChange:e=>{let n={type:d.C.COLOR_CHANGE,newColor:Number(e)};h.send(n)},defaultValue:v.toString(),className:p().colorDropdown,children:M.map(e=>(0,a.jsx)(m,{title:e,children:(0,a.jsx)(g,{color:e,"aria-label":e.toString()})},e.toString()))})}),'You can also authenticate an IndieAuth or Fediverse account via the "Authenticate" menu.']})}},51801:function(e){e.exports={inputGroup:"NameChangeModal_inputGroup__q0Ee2",colorChange:"NameChangeModal_colorChange__WVMTh",colorDropdown:"NameChangeModal_colorDropdown__hzNqB","ant-select-customize-input":"NameChangeModal_ant-select-customize-input__sDPfE"}},64217:function(e,n,o){"use strict";o.d(n,{Z:function(){return l}});var a=o(1413),t="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/);function r(e,n){return 0===e.indexOf(n)}function l(e){var n,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n=!1===o?{aria:!0,data:!0,attr:!0}:!0===o?{aria:!0}:(0,a.Z)({},o);var l={};return Object.keys(e).forEach(function(o){(n.aria&&("role"===o||r(o,"aria-"))||n.data&&r(o,"data-")||n.attr&&t.includes(o))&&(l[o]=e[o])}),l}}}]);