(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({144:"chat-ChatContainer-ChatContainer-stories",275:"chat-ChatUserMessage-ChatUserMessage-stories",338:"action-buttons-ActionButtonMenu-ActionButtonMenu-stories",349:"ui-NotifyReminderPopup-NotifyReminderPopup-stories",572:"screenshots-macos-Screenshots-macOS-safari-stories-mdx",702:"SocialPlatformImages-stories-mdx",910:"ReadwriteChat-stories",954:"LogosAndGraphics-stories-mdx",1442:"PageLogo-stories",1784:"examples-BasicInfrastructureExamples-stories-mdx",1790:"ui-SocialLinks-SocialLinks-stories",2405:"action-buttons-ActionButton-ActionButton-stories",2561:"screenshots-windows-Screenshots-windows-firefox-stories-mdx",2632:"Typography-stories-mdx",2646:"modals-FatalErrorStateModal-FatalErrorStateModal-stories",2778:"modals-FediAuthModal-FediAuthModal-stories",2791:"screenshots-android-Screenshots-android-stock-browser-landscape-stories-mdx",2928:"examples-CDNInfrastructureExamples-stories-mdx",3e3:"ReadonlyChat-stories",3135:"modals-NameChangeModal-NameChangeModal-stories",3191:"common-ContentHeader-ContentHeader-stories",3253:"colors-OwncastColorPalette-stories-mdx",3257:"action-buttons-ActionButtonRow-ActionButtonRow-stories",3289:"layouts-Main-Main-stories",3345:"common-UserDropdown-UserDropdown-stories",3374:"chat-ChatModerationDetailsModal-ChatModerationDetailsModal-stories",3775:"ProductDefinition-stories-mdx",3835:"chat-ChatModerationActionMenu-ChatModerationActionMenu-stories",4175:"screenshots-macos-Screenshots-macOS-chrome-stories-mdx",4436:"modals-IndieAuthModal-IndieAuthModal-stories",4511:"modals-FollowModal-FollowModal-stories",4559:"Tshirt-stories-mdx",4563:"screenshots-ipad-Screenshots-iPad-landscape-safari-stories-mdx",4588:"ui-CustomPageContent-CustomPageContent-stories",4714:"ui-followers-FollowerCollection-FollowerCollection-stories",4763:"chat-ChatTextField-ChatTextField-stories",4777:"ui-Modal-Modal-stories",4796:"screenshots-iphone-Screenshots-iPhone-safari-landscape-stories-mdx",4861:"chat-ChatSystemMessage-ChatSystemMessage-stories",4903:"ui-OfflineBanner-OfflineBanner-stories",5092:"chat-ChatActionMessage-ChatActionMessage-stories",5224:"modals-BrowserNotifyModal-BrowserNotifyModal-stories",5244:"chat-ChatPartMessage-ChatPartMessage-stories",5504:"ui-ComponentError-ComponentError-stories",5842:"Development-stories-mdx",5930:"ui-Footer-Footer-stories",6137:"ui-Header-Header-stories",6396:"Emoji-stories-mdx",6443:"video-VideoPoster-VideoPoster-stories",6454:"screenshots-ipad-Screenshots-iPad-portrait-safari-stories-mdx",6703:"screenshots-macos-Screenshots-macOS-firefox-stories-mdx",6709:"Images-stories-mdx",6815:"ui-Statusbar-StatusBar-stories",6877:"video-OwncastPlayer-OwncastPlayer-stories",6996:"common-OwncastLogo-OwncastLogo-stories",7042:"colors-ComponentColors-stories-mdx",7086:"chat-ChatJoinMessage-ChatJoinMessage-stories",7162:"WebComponents-stories-mdx",7425:"examples-S3InfrastructureExamples-stories-mdx",7539:"chat-ChatUserBadge-ChatUserBadge-stories",7670:"modals-AuthModal-AuthModal-stories",8310:"screenshots-iphone-Screenshots-iPhone-safari-portrait-stories-mdx",8361:"modals-ChatModal-ChatModal-stories",8658:"examples-CDN-S3InfrastructureExamples-stories-mdx",8702:"ui-followers-SingleFollower-SingleFollower-stories",8740:"screenshots-windows-Screenshots-windows-chrome-stories-mdx",8749:"Design-stories-mdx",8947:"chat-ChatNameChangeMessage-ChatNameChangeMessage-stories",9360:"colors-UserColors-stories-mdx",9427:"chat-ChatSocialMessage-ChatSocialMessage-stories",9536:"screenshots-android-Screenshots-android-stock-browser-portrait-stories-mdx",9861:"chat-ChatModeratorNotification-ChatModeratorNotification-stories"}[chunkId]||chunkId)+"."+{62:"66a8742a",144:"4499b5e6",146:"fd57dfd7",275:"afd491ff",338:"76052749",349:"6ee027d6",437:"73a18b0c",500:"dfcd8e73",510:"71c6278d",531:"ade3d5dc",572:"3c955ed3",702:"8801e85c",710:"4f35ab6b",725:"e8651a59",729:"2ffbdf62",774:"730d8a47",775:"0b9b46e0",832:"2230f2bd",903:"78947cd3",910:"f47e4ab4",921:"7dfdf996",954:"45727f65",1002:"e36b9156",1008:"6806c4e6",1325:"dddf0213",1411:"8dbbda48",1412:"a9de1865",1421:"108acebf",1442:"99cc48f9",1458:"11e0755e",1541:"4c542e3c",1577:"4e911778",1592:"5ac7d7e6",1654:"340f4a04",1664:"781f45ef",1729:"bd74566c",1784:"1e60027e",1790:"daa118d9",1833:"0f2e861d",1857:"01653df9",1916:"309dba0c",1965:"fcfd02eb",1984:"243b0916",2074:"c5ecdc61",2091:"75a579db",2238:"1ad482bb",2348:"ecbf9fb6",2405:"0d9cb6d8",2462:"e46f59f1",2561:"cfa79a43",2576:"16c9c3ff",2632:"4d24b743",2646:"9291d47e",2658:"3335ca2f",2685:"3b4df2c2",2778:"62b13507",2791:"c776eaa7",2928:"4659f402",2975:"c8606eb9",3e3:"5242a228",3007:"8897afae",3013:"fc0a9a30",3085:"5443ca50",3135:"f78aa2f2",3142:"cab1c6db",3191:"d70d42ca",3216:"82282798",3253:"c653d7ea",3257:"500e7f71",3287:"a3d15993",3289:"ef59b2e0",3345:"7870ac1a",3366:"36a9b01b",3374:"66e26b9d",3426:"8c4792cb",3455:"f453b99a",3525:"3a7f1a14",3685:"d54878c8",3689:"575c3f45",3731:"36d7f2bd",3775:"edf27a6c",3835:"bfc86446",3864:"b225eb3c",3904:"34fde740",3991:"de31dc6c",4041:"4735a4ef",4088:"620e8e2d",4175:"69589a4e",4302:"a28fb3ad",4324:"915f2df1",4337:"ddf806c9",4436:"3cbbd57f",4480:"84d45b47",4504:"f2fbf3db",4511:"a890b768",4559:"8b63ba75",4563:"00c79f35",4588:"0bfafa5d",4633:"7f2e580b",4645:"571bc762",4714:"26bd6a73",4754:"23f9c7ef",4763:"79d8cd22",4777:"3941c023",4796:"784979b4",4861:"abf5c8be",4892:"a9498e7d",4903:"47a05ce5",4908:"5955ad17",5040:"62c2bf5c",5089:"97be1ee9",5092:"8e9ab174",5152:"1d88e1e6",5223:"7db1ffca",5224:"3cd94772",5244:"73c46115",5412:"1697631f",5504:"26f0c188",5512:"cd9aaa4f",5542:"eedd44fb",5584:"6cb1adfd",5672:"99e524e1",5777:"39dac1f4",5842:"9c852a6e",5903:"0f89df57",5930:"d5f70a82",5961:"9e27dabe",5982:"fd7f3dfa",6051:"e65b03dc",6086:"b3d3a482",6133:"5dfc0c66",6137:"e53bbb10",6205:"81ffa0dc",6275:"ebefedcc",6373:"a87e49fd",6396:"2e2bc404",6443:"f730ab7a",6454:"ca6d37a8",6583:"c4e0e5e6",6700:"f98c9e3a",6703:"d5340673",6709:"5a12a14a",6771:"40e30f82",6772:"7f8e9698",6815:"c24c5727",6820:"ff37a89d",6877:"91212599",6922:"134ff260",6937:"2bec5e17",6996:"8fe84067",7016:"5127bd10",7027:"0db4d05e",7039:"9d2441f2",7042:"64673ab2",7086:"27fcd0ae",7162:"3765ef04",7209:"174b181a",7255:"c7b82306",7268:"88bfb1eb",7291:"fabb7f19",7425:"ee6fa37a",7448:"03e79d59",7491:"b32a3246",7539:"daca3bbd",7552:"4dd694be",7605:"7a4a9d1c",7653:"99d645bb",7670:"fa6b4fe8",7719:"3db320b2",7748:"055afeb6",7854:"71d938c7",7897:"dc1c0db0",7923:"efd75738",7949:"a598bfb3",7996:"6e051206",8244:"d152f1f4",8272:"de9841ad",8310:"a125d338",8335:"08351df2",8361:"c82939b2",8568:"c4b24603",8658:"45bd2093",8702:"65259f0b",8703:"15e4d4d5",8725:"d4aedffb",8740:"5a5ec719",8749:"589277c2",8938:"c5df7588",8947:"c1e04d46",9051:"83248b6b",9069:"ed24b334",9095:"4874e402",9115:"ed67367f",9125:"19706312",9296:"51bda6b6",9360:"461e9385",9427:"8676bc01",9506:"e4ee2a94",9536:"69666ef6",9572:"135fcb72",9602:"e8c816b8",9625:"23d00bca",9676:"8ffe91bd",9715:"3d7b9979",9775:"1206e7ee",9861:"d8920c77",9954:"4d14389d"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="owncast-web:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","owncast-web:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkowncast_web=self.webpackChunkowncast_web||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();