(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[275],{"./components/chat/ChatUserMessage/ChatUserMessage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FromAuthenticatedUser:()=>FromAuthenticatedUser,FromBotUser:()=>FromBotUser,FromModeratorUser:()=>FromModeratorUser,WithLinkAndCustomEmoji:()=>WithLinkAndCustomEmoji,WithModeratorMenu:()=>WithModeratorMenu,WithStringHighlighted:()=>WithStringHighlighted,WithoutModeratorMenu:()=>WithoutModeratorMenu,default:()=>ChatUserMessage_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),ChatUserMessage=__webpack_require__("./components/chat/ChatUserMessage/ChatUserMessage.tsx");var _WithoutModeratorMenu,_WithoutModeratorMenu2,_WithLinkAndCustomEmo,_WithLinkAndCustomEmo2,_WithModeratorMenu$pa,_WithModeratorMenu$pa2,_FromModeratorUser$pa,_FromModeratorUser$pa2,_FromAuthenticatedUse,_FromAuthenticatedUse2,_FromBotUser$paramete,_FromBotUser$paramete2,_WithStringHighlighte,_WithStringHighlighte2,__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const ChatUserMessage_stories={title:"owncast/Chat/Messages/Standard user",component:ChatUserMessage.A,parameters:{design:{type:"image",url:{src:"static/media/chatmessage-user.55c8d31e.png",height:351,width:437,blurDataURL:"static/media/chatmessage-user.55c8d31e.png"},scale:.5},docs:{description:{component:"This is the standard text message design that is used when a user sends a message in Owncast chat."}}}};var Template=function Template(args){return __jsx(es.Wh,null,__jsx(ChatUserMessage.A,args))};Template.displayName="Template";var standardMessage=JSON.parse('{\n  "type": "CHAT",\n  "id": "wY-MEXwnR",\n  "timestamp": "2022-04-28T20:30:27.001762726Z",\n  "user": {\n    "id": "h_5GQ6E7R",\n    "displayName": "EliteMooseTaskForce",\n    "displayColor": 3,\n    "createdAt": "2022-03-24T03:52:37.966584694Z",\n    "previousNames": ["gifted-nobel", "EliteMooseTaskForce"],\n    "nameChangedAt": "2022-04-26T23:56:05.531287897Z",\n    "scopes": []\n  },\n  "body": "Test message from a regular user."}'),messageWithLinkAndCustomEmoji=JSON.parse('{\n        "type": "CHAT",\n        "id": "wY-MEXwnR",\n        "timestamp": "2022-04-28T20:30:27.001762726Z",\n        "user": {\n            "id": "h_5GQ6E7R",\n            "displayName": "EliteMooseTaskForce",\n            "displayColor": 3,\n            "createdAt": "2022-03-24T03:52:37.966584694Z",\n            "previousNames": ["gifted-nobel", "EliteMooseTaskForce"],\n            "nameChangedAt": "2022-04-26T23:56:05.531287897Z",\n            "scopes": []\n        },\n        "body": "Test message with a link https://owncast.online and a custom emoji <img src=\'/img/emoji/mutant/skull.svg\' width=\'30px\'/> ."}'),moderatorMessage=JSON.parse('{\n    "type": "CHAT",\n    "id": "wY-MEXwnR",\n    "timestamp": "2022-04-28T20:30:27.001762726Z",\n    "user": {\n      "id": "h_5GQ6E7R",\n      "displayName": "EliteMooseTaskForce",\n      "displayColor": 2,\n      "createdAt": "2022-03-24T03:52:37.966584694Z",\n      "previousNames": ["gifted-nobel", "EliteMooseTaskForce"],\n      "nameChangedAt": "2022-04-26T23:56:05.531287897Z",\n      "scopes": ["moderator"]\n    },\n    "body": "I am a moderator user."}'),authenticatedUserMessage=JSON.parse('{\n      "type": "CHAT",\n      "id": "wY-MEXwnR",\n      "timestamp": "2022-04-28T20:30:27.001762726Z",\n      "user": {\n        "id": "h_5GQ6E7R",\n        "displayName": "EliteMooseTaskForce",\n        "displayColor": 7,\n        "createdAt": "2022-03-24T03:52:37.966584694Z",\n        "previousNames": ["gifted-nobel", "EliteMooseTaskForce"],\n        "nameChangedAt": "2022-04-26T23:56:05.531287897Z",\n        "authenticated": true,\n        "scopes": []\n      },\n      "body": "I am an authenticated user."}'),botUserMessage=JSON.parse('{\n                "type": "CHAT",\n                "id": "wY-MEXwnR",\n                "timestamp": "2022-04-28T20:30:27.001762726Z",\n                "user": {\n                    "id": "h_5GQ6E7R",\n                    "displayName": "EliteMooseTaskForce",\n                    "displayColor": 7,\n                    "createdAt": "2022-03-24T03:52:37.966584694Z",\n                    "previousNames": ["gifted-nobel", "EliteMooseTaskForce"],\n                    "nameChangedAt": "2022-04-26T23:56:05.531287897Z",\n                    "authenticated": true,\n                    "scopes": ["bot"]\n                },\n                "body": "I am a bot."}'),WithoutModeratorMenu={render:Template,args:{message:standardMessage,showModeratorMenu:!1}},WithLinkAndCustomEmoji={render:Template,args:{message:messageWithLinkAndCustomEmoji,showModeratorMenu:!1}},WithModeratorMenu={render:Template,args:{message:standardMessage,showModeratorMenu:!0}},FromModeratorUser={render:Template,args:{message:moderatorMessage,showModeratorMenu:!1,isAuthorModerator:!0}},FromAuthenticatedUser={render:Template,args:{message:authenticatedUserMessage,showModeratorMenu:!1,isAuthorAuthenticated:!0}},FromBotUser={render:Template,args:{message:botUserMessage,showModeratorMenu:!1,isAuthorBot:!0}},WithStringHighlighted={render:Template,args:{message:standardMessage,showModeratorMenu:!1,highlightString:"message"}};WithoutModeratorMenu.parameters=_objectSpread(_objectSpread({},WithoutModeratorMenu.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithoutModeratorMenu=WithoutModeratorMenu.parameters)||void 0===_WithoutModeratorMenu?void 0:_WithoutModeratorMenu.docs),{},{source:_objectSpread({originalSource:"{\n  render: Template,\n  args: {\n    message: standardMessage,\n    showModeratorMenu: false\n  }\n}"},null===(_WithoutModeratorMenu2=WithoutModeratorMenu.parameters)||void 0===_WithoutModeratorMenu2||null===(_WithoutModeratorMenu2=_WithoutModeratorMenu2.docs)||void 0===_WithoutModeratorMenu2?void 0:_WithoutModeratorMenu2.source)})}),WithLinkAndCustomEmoji.parameters=_objectSpread(_objectSpread({},WithLinkAndCustomEmoji.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithLinkAndCustomEmo=WithLinkAndCustomEmoji.parameters)||void 0===_WithLinkAndCustomEmo?void 0:_WithLinkAndCustomEmo.docs),{},{source:_objectSpread({originalSource:"{\n  render: Template,\n  args: {\n    message: messageWithLinkAndCustomEmoji,\n    showModeratorMenu: false\n  }\n}"},null===(_WithLinkAndCustomEmo2=WithLinkAndCustomEmoji.parameters)||void 0===_WithLinkAndCustomEmo2||null===(_WithLinkAndCustomEmo2=_WithLinkAndCustomEmo2.docs)||void 0===_WithLinkAndCustomEmo2?void 0:_WithLinkAndCustomEmo2.source)})}),WithModeratorMenu.parameters=_objectSpread(_objectSpread({},WithModeratorMenu.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithModeratorMenu$pa=WithModeratorMenu.parameters)||void 0===_WithModeratorMenu$pa?void 0:_WithModeratorMenu$pa.docs),{},{source:_objectSpread({originalSource:"{\n  render: Template,\n  args: {\n    message: standardMessage,\n    showModeratorMenu: true\n  }\n}"},null===(_WithModeratorMenu$pa2=WithModeratorMenu.parameters)||void 0===_WithModeratorMenu$pa2||null===(_WithModeratorMenu$pa2=_WithModeratorMenu$pa2.docs)||void 0===_WithModeratorMenu$pa2?void 0:_WithModeratorMenu$pa2.source)})}),FromModeratorUser.parameters=_objectSpread(_objectSpread({},FromModeratorUser.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_FromModeratorUser$pa=FromModeratorUser.parameters)||void 0===_FromModeratorUser$pa?void 0:_FromModeratorUser$pa.docs),{},{source:_objectSpread({originalSource:"{\n  render: Template,\n  args: {\n    message: moderatorMessage,\n    showModeratorMenu: false,\n    isAuthorModerator: true\n  }\n}"},null===(_FromModeratorUser$pa2=FromModeratorUser.parameters)||void 0===_FromModeratorUser$pa2||null===(_FromModeratorUser$pa2=_FromModeratorUser$pa2.docs)||void 0===_FromModeratorUser$pa2?void 0:_FromModeratorUser$pa2.source)})}),FromAuthenticatedUser.parameters=_objectSpread(_objectSpread({},FromAuthenticatedUser.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_FromAuthenticatedUse=FromAuthenticatedUser.parameters)||void 0===_FromAuthenticatedUse?void 0:_FromAuthenticatedUse.docs),{},{source:_objectSpread({originalSource:"{\n  render: Template,\n  args: {\n    message: authenticatedUserMessage,\n    showModeratorMenu: false,\n    isAuthorAuthenticated: true\n  }\n}"},null===(_FromAuthenticatedUse2=FromAuthenticatedUser.parameters)||void 0===_FromAuthenticatedUse2||null===(_FromAuthenticatedUse2=_FromAuthenticatedUse2.docs)||void 0===_FromAuthenticatedUse2?void 0:_FromAuthenticatedUse2.source)})}),FromBotUser.parameters=_objectSpread(_objectSpread({},FromBotUser.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_FromBotUser$paramete=FromBotUser.parameters)||void 0===_FromBotUser$paramete?void 0:_FromBotUser$paramete.docs),{},{source:_objectSpread({originalSource:"{\n  render: Template,\n  args: {\n    message: botUserMessage,\n    showModeratorMenu: false,\n    isAuthorBot: true\n  }\n}"},null===(_FromBotUser$paramete2=FromBotUser.parameters)||void 0===_FromBotUser$paramete2||null===(_FromBotUser$paramete2=_FromBotUser$paramete2.docs)||void 0===_FromBotUser$paramete2?void 0:_FromBotUser$paramete2.source)})}),WithStringHighlighted.parameters=_objectSpread(_objectSpread({},WithStringHighlighted.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithStringHighlighte=WithStringHighlighted.parameters)||void 0===_WithStringHighlighte?void 0:_WithStringHighlighte.docs),{},{source:_objectSpread({originalSource:"{\n  render: Template,\n  args: {\n    message: standardMessage,\n    showModeratorMenu: false,\n    highlightString: 'message'\n  }\n}"},null===(_WithStringHighlighte2=WithStringHighlighted.parameters)||void 0===_WithStringHighlighte2||null===(_WithStringHighlighte2=_WithStringHighlighte2.docs)||void 0===_WithStringHighlighte2?void 0:_WithStringHighlighte2.source)})})},"./node_modules/next/dist/shared/lib/dynamic.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{noSSR:function(){return noSSR},default:function(){return dynamic}});const _interop_require_default=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs"),_react=_interop_require_default._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")),_loadablesharedruntime=_interop_require_default._(__webpack_require__("./node_modules/next/dist/shared/lib/loadable.shared-runtime.js")),isServerSide="undefined"==typeof window;function convertModule(mod){return{default:(null==mod?void 0:mod.default)||mod}}function noSSR(LoadableInitializer,loadableOptions){if(delete loadableOptions.webpack,delete loadableOptions.modules,!isServerSide)return LoadableInitializer(loadableOptions);const Loading=loadableOptions.loading;return()=>_react.default.createElement(Loading,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function dynamic(dynamicOptions,options){let loadableFn=_loadablesharedruntime.default,loadableOptions={loading:param=>{let{error,isLoading,pastDelay}=param;return null}};dynamicOptions instanceof Promise?loadableOptions.loader=()=>dynamicOptions:"function"==typeof dynamicOptions?loadableOptions.loader=dynamicOptions:"object"==typeof dynamicOptions&&(loadableOptions={...loadableOptions,...dynamicOptions}),loadableOptions={...loadableOptions,...options};const loaderFn=loadableOptions.loader;return loadableOptions.loadableGenerated&&(loadableOptions={...loadableOptions,...loadableOptions.loadableGenerated},delete loadableOptions.loadableGenerated),"boolean"!=typeof loadableOptions.ssr||loadableOptions.ssr?loadableFn({...loadableOptions,loader:()=>null!=loaderFn?loaderFn().then(convertModule):Promise.resolve(convertModule((()=>null)))}):(delete loadableOptions.webpack,delete loadableOptions.modules,noSSR(loadableFn,loadableOptions))}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/shared/lib/loadable-context.shared-runtime.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"LoadableContext",{enumerable:!0,get:function(){return LoadableContext}});const LoadableContext=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs")._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")).default.createContext(null)},"./node_modules/next/dist/shared/lib/loadable.shared-runtime.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _default}});const _react=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs")._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")),_loadablecontextsharedruntime=__webpack_require__("./node_modules/next/dist/shared/lib/loadable-context.shared-runtime.js");const ALL_INITIALIZERS=[],READY_INITIALIZERS=[];let initialized=!1;function load(loader){let promise=loader(),state={loading:!0,loaded:null,error:null};return state.promise=promise.then((loaded=>(state.loading=!1,state.loaded=loaded,loaded))).catch((err=>{throw state.loading=!1,state.error=err,err})),state}function createLoadableComponent(loadFn,options){let opts=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},options),subscription=null;function init(){if(!subscription){const sub=new LoadableSubscription(loadFn,opts);subscription={getCurrentValue:sub.getCurrentValue.bind(sub),subscribe:sub.subscribe.bind(sub),retry:sub.retry.bind(sub),promise:sub.promise.bind(sub)}}return subscription.promise()}if("undefined"==typeof window&&ALL_INITIALIZERS.push(init),!initialized&&"undefined"!=typeof window){const moduleIds=opts.webpack?opts.webpack():opts.modules;moduleIds&&READY_INITIALIZERS.push((ids=>{for(const moduleId of moduleIds)if(ids.includes(moduleId))return init()}))}function LoadableComponent(props,ref){!function useLoadableModule(){init();const context=_react.default.useContext(_loadablecontextsharedruntime.LoadableContext);context&&Array.isArray(opts.modules)&&opts.modules.forEach((moduleName=>{context(moduleName)}))}();const state=_react.default.useSyncExternalStore(subscription.subscribe,subscription.getCurrentValue,subscription.getCurrentValue);return _react.default.useImperativeHandle(ref,(()=>({retry:subscription.retry})),[]),_react.default.useMemo((()=>state.loading||state.error?_react.default.createElement(opts.loading,{isLoading:state.loading,pastDelay:state.pastDelay,timedOut:state.timedOut,error:state.error,retry:subscription.retry}):state.loaded?_react.default.createElement(function resolve(obj){return obj&&obj.default?obj.default:obj}(state.loaded),props):null),[props,state])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",_react.default.forwardRef(LoadableComponent)}class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};const{_res:res,_opts:opts}=this;res.loading&&("number"==typeof opts.delay&&(0===opts.delay?this._state.pastDelay=!0:this._delay=setTimeout((()=>{this._update({pastDelay:!0})}),opts.delay)),"number"==typeof opts.timeout&&(this._timeout=setTimeout((()=>{this._update({timedOut:!0})}),opts.timeout))),this._res.promise.then((()=>{this._update({}),this._clearTimeouts()})).catch((_err=>{this._update({}),this._clearTimeouts()})),this._update({})}_update(partial){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...partial},this._callbacks.forEach((callback=>callback()))}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(callback){return this._callbacks.add(callback),()=>{this._callbacks.delete(callback)}}constructor(loadFn,opts){this._loadFn=loadFn,this._opts=opts,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function Loadable(opts){return createLoadableComponent(load,opts)}function flushInitializers(initializers,ids){let promises=[];for(;initializers.length;){let init=initializers.pop();promises.push(init(ids))}return Promise.all(promises).then((()=>{if(initializers.length)return flushInitializers(initializers,ids)}))}Loadable.preloadAll=()=>new Promise(((resolveInitializers,reject)=>{flushInitializers(ALL_INITIALIZERS).then(resolveInitializers,reject)})),Loadable.preloadReady=ids=>(void 0===ids&&(ids=[]),new Promise((resolvePreload=>{const res=()=>(initialized=!0,resolvePreload());flushInitializers(READY_INITIALIZERS,ids).then(res,res)}))),"undefined"!=typeof window&&(window.__NEXT_PRELOADREADY=Loadable.preloadReady);const _default=Loadable},"./node_modules/next/dynamic.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/shared/lib/dynamic.js")}}]);