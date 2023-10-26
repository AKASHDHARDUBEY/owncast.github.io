"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[3007],{"./node_modules/rc-overflow/es/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>rc_overflow_es});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),es=__webpack_require__("./node_modules/rc-resize-observer/es/index.js"),useLayoutEffect=__webpack_require__("./node_modules/rc-util/es/hooks/useLayoutEffect.js"),_excluded=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"];function InternalItem(props,ref){var prefixCls=props.prefixCls,invalidate=props.invalidate,item=props.item,renderItem=props.renderItem,responsive=props.responsive,responsiveDisabled=props.responsiveDisabled,registerSize=props.registerSize,itemKey=props.itemKey,className=props.className,style=props.style,children=props.children,display=props.display,order=props.order,_props$component=props.component,Component=void 0===_props$component?"div":_props$component,restProps=(0,objectWithoutProperties.Z)(props,_excluded),mergedHidden=responsive&&!display;function internalRegisterSize(width){registerSize(itemKey,width)}react.useEffect((function(){return function(){internalRegisterSize(null)}}),[]);var overflowStyle,childNode=renderItem&&undefined!==item?renderItem(item):children;invalidate||(overflowStyle={opacity:mergedHidden?0:1,height:mergedHidden?0:undefined,overflowY:mergedHidden?"hidden":undefined,order:responsive?order:undefined,pointerEvents:mergedHidden?"none":undefined,position:mergedHidden?"absolute":undefined});var overflowProps={};mergedHidden&&(overflowProps["aria-hidden"]=!0);var itemNode=react.createElement(Component,(0,esm_extends.Z)({className:classnames_default()(!invalidate&&prefixCls,className),style:(0,objectSpread2.Z)((0,objectSpread2.Z)({},overflowStyle),style)},overflowProps,restProps,{ref}),childNode);return responsive&&(itemNode=react.createElement(es.Z,{onResize:function onResize(_ref){internalRegisterSize(_ref.offsetWidth)},disabled:responsiveDisabled},itemNode)),itemNode}var Item=react.forwardRef(InternalItem);Item.displayName="Item";const es_Item=Item;var useEvent=__webpack_require__("./node_modules/rc-util/es/hooks/useEvent.js"),react_dom=__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js"),raf=__webpack_require__("./node_modules/rc-util/es/raf.js");function useBatcher(){var updateFuncRef=react.useRef(null);return function notifyEffectUpdate(callback){updateFuncRef.current||(updateFuncRef.current=[],function channelUpdate(callback){if("undefined"==typeof MessageChannel)(0,raf.Z)(callback);else{var channel=new MessageChannel;channel.port1.onmessage=function(){return callback()},channel.port2.postMessage(void 0)}}((function(){(0,react_dom.unstable_batchedUpdates)((function(){updateFuncRef.current.forEach((function(fn){fn()})),updateFuncRef.current=null}))}))),updateFuncRef.current.push(callback)}}function useEffectState(notifyEffectUpdate,defaultValue){var _React$useState=react.useState(defaultValue),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),stateValue=_React$useState2[0],setStateValue=_React$useState2[1];return[stateValue,(0,useEvent.Z)((function(nextValue){notifyEffectUpdate((function(){setStateValue(nextValue)}))}))]}var OverflowContext=react.createContext(null),RawItem_excluded=["component"],_excluded2=["className"],_excluded3=["className"],InternalRawItem=function InternalRawItem(props,ref){var context=react.useContext(OverflowContext);if(!context){var _props$component=props.component,Component=void 0===_props$component?"div":_props$component,_restProps=(0,objectWithoutProperties.Z)(props,RawItem_excluded);return react.createElement(Component,(0,esm_extends.Z)({},_restProps,{ref}))}var contextClassName=context.className,restContext=(0,objectWithoutProperties.Z)(context,_excluded2),className=props.className,restProps=(0,objectWithoutProperties.Z)(props,_excluded3);return react.createElement(OverflowContext.Provider,{value:null},react.createElement(es_Item,(0,esm_extends.Z)({ref,className:classnames_default()(contextClassName,className)},restContext,restProps)))},RawItem=react.forwardRef(InternalRawItem);RawItem.displayName="RawItem";const es_RawItem=RawItem;var Overflow_excluded=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"];function defaultRenderRest(omittedItems){return"+ ".concat(omittedItems.length," ...")}function Overflow(props,ref){var _props$prefixCls=props.prefixCls,prefixCls=void 0===_props$prefixCls?"rc-overflow":_props$prefixCls,_props$data=props.data,data=void 0===_props$data?[]:_props$data,renderItem=props.renderItem,renderRawItem=props.renderRawItem,itemKey=props.itemKey,_props$itemWidth=props.itemWidth,itemWidth=void 0===_props$itemWidth?10:_props$itemWidth,ssr=props.ssr,style=props.style,className=props.className,maxCount=props.maxCount,renderRest=props.renderRest,renderRawRest=props.renderRawRest,suffix=props.suffix,_props$component=props.component,Component=void 0===_props$component?"div":_props$component,itemComponent=props.itemComponent,onVisibleChange=props.onVisibleChange,restProps=(0,objectWithoutProperties.Z)(props,Overflow_excluded),fullySSR="full"===ssr,notifyEffectUpdate=useBatcher(),_useEffectState=useEffectState(notifyEffectUpdate,null),_useEffectState2=(0,slicedToArray.Z)(_useEffectState,2),containerWidth=_useEffectState2[0],setContainerWidth=_useEffectState2[1],mergedContainerWidth=containerWidth||0,_useEffectState3=useEffectState(notifyEffectUpdate,new Map),_useEffectState4=(0,slicedToArray.Z)(_useEffectState3,2),itemWidths=_useEffectState4[0],setItemWidths=_useEffectState4[1],_useEffectState5=useEffectState(notifyEffectUpdate,0),_useEffectState6=(0,slicedToArray.Z)(_useEffectState5,2),prevRestWidth=_useEffectState6[0],setPrevRestWidth=_useEffectState6[1],_useEffectState7=useEffectState(notifyEffectUpdate,0),_useEffectState8=(0,slicedToArray.Z)(_useEffectState7,2),restWidth=_useEffectState8[0],setRestWidth=_useEffectState8[1],_useEffectState9=useEffectState(notifyEffectUpdate,0),_useEffectState10=(0,slicedToArray.Z)(_useEffectState9,2),suffixWidth=_useEffectState10[0],setSuffixWidth=_useEffectState10[1],_useState=(0,react.useState)(null),_useState2=(0,slicedToArray.Z)(_useState,2),suffixFixedStart=_useState2[0],setSuffixFixedStart=_useState2[1],_useState3=(0,react.useState)(null),_useState4=(0,slicedToArray.Z)(_useState3,2),displayCount=_useState4[0],setDisplayCount=_useState4[1],mergedDisplayCount=react.useMemo((function(){return null===displayCount&&fullySSR?Number.MAX_SAFE_INTEGER:displayCount||0}),[displayCount,containerWidth]),_useState5=(0,react.useState)(!1),_useState6=(0,slicedToArray.Z)(_useState5,2),restReady=_useState6[0],setRestReady=_useState6[1],itemPrefixCls="".concat(prefixCls,"-item"),mergedRestWidth=Math.max(prevRestWidth,restWidth),isResponsive="responsive"===maxCount,shouldResponsive=data.length&&isResponsive,invalidate="invalidate"===maxCount,showRest=shouldResponsive||"number"==typeof maxCount&&data.length>maxCount,mergedData=(0,react.useMemo)((function(){var items=data;return shouldResponsive?items=null===containerWidth&&fullySSR?data:data.slice(0,Math.min(data.length,mergedContainerWidth/itemWidth)):"number"==typeof maxCount&&(items=data.slice(0,maxCount)),items}),[data,itemWidth,containerWidth,maxCount,shouldResponsive]),omittedItems=(0,react.useMemo)((function(){return shouldResponsive?data.slice(mergedDisplayCount+1):data.slice(mergedData.length)}),[data,mergedData,shouldResponsive,mergedDisplayCount]),getKey=(0,react.useCallback)((function(item,index){var _ref;return"function"==typeof itemKey?itemKey(item):null!==(_ref=itemKey&&(null==item?void 0:item[itemKey]))&&void 0!==_ref?_ref:index}),[itemKey]),mergedRenderItem=(0,react.useCallback)(renderItem||function(item){return item},[renderItem]);function updateDisplayCount(count,suffixFixedStartVal,notReady){(displayCount!==count||void 0!==suffixFixedStartVal&&suffixFixedStartVal!==suffixFixedStart)&&(setDisplayCount(count),notReady||(setRestReady(count<data.length-1),null==onVisibleChange||onVisibleChange(count)),void 0!==suffixFixedStartVal&&setSuffixFixedStart(suffixFixedStartVal))}function registerSize(key,width){setItemWidths((function(origin){var clone=new Map(origin);return null===width?clone.delete(key):clone.set(key,width),clone}))}function getItemWidth(index){return itemWidths.get(getKey(mergedData[index],index))}(0,useLayoutEffect.Z)((function(){if(mergedContainerWidth&&"number"==typeof mergedRestWidth&&mergedData){var totalWidth=suffixWidth,len=mergedData.length,lastIndex=len-1;if(!len)return void updateDisplayCount(0,null);for(var i=0;i<len;i+=1){var currentItemWidth=getItemWidth(i);if(fullySSR&&(currentItemWidth=currentItemWidth||0),void 0===currentItemWidth){updateDisplayCount(i-1,void 0,!0);break}if(totalWidth+=currentItemWidth,0===lastIndex&&totalWidth<=mergedContainerWidth||i===lastIndex-1&&totalWidth+getItemWidth(lastIndex)<=mergedContainerWidth){updateDisplayCount(lastIndex,null);break}if(totalWidth+mergedRestWidth>mergedContainerWidth){updateDisplayCount(i-1,totalWidth-currentItemWidth-suffixWidth+restWidth);break}}suffix&&getItemWidth(0)+suffixWidth>mergedContainerWidth&&setSuffixFixedStart(null)}}),[mergedContainerWidth,itemWidths,restWidth,suffixWidth,getKey,mergedData]);var displayRest=restReady&&!!omittedItems.length,suffixStyle={};null!==suffixFixedStart&&shouldResponsive&&(suffixStyle={position:"absolute",left:suffixFixedStart,top:0});var restNode,itemSharedProps={prefixCls:itemPrefixCls,responsive:shouldResponsive,component:itemComponent,invalidate},internalRenderItemNode=renderRawItem?function(item,index){var key=getKey(item,index);return react.createElement(OverflowContext.Provider,{key,value:(0,objectSpread2.Z)((0,objectSpread2.Z)({},itemSharedProps),{},{order:index,item,itemKey:key,registerSize,display:index<=mergedDisplayCount})},renderRawItem(item,index))}:function(item,index){var key=getKey(item,index);return react.createElement(es_Item,(0,esm_extends.Z)({},itemSharedProps,{order:index,key,item,renderItem:mergedRenderItem,itemKey:key,registerSize,display:index<=mergedDisplayCount}))},restContextProps={order:displayRest?mergedDisplayCount:Number.MAX_SAFE_INTEGER,className:"".concat(itemPrefixCls,"-rest"),registerSize:function registerOverflowSize(_,width){setRestWidth(width),setPrevRestWidth(restWidth)},display:displayRest};if(renderRawRest)renderRawRest&&(restNode=react.createElement(OverflowContext.Provider,{value:(0,objectSpread2.Z)((0,objectSpread2.Z)({},itemSharedProps),restContextProps)},renderRawRest(omittedItems)));else{var mergedRenderRest=renderRest||defaultRenderRest;restNode=react.createElement(es_Item,(0,esm_extends.Z)({},itemSharedProps,restContextProps),"function"==typeof mergedRenderRest?mergedRenderRest(omittedItems):mergedRenderRest)}var overflowNode=react.createElement(Component,(0,esm_extends.Z)({className:classnames_default()(!invalidate&&prefixCls,className),style,ref},restProps),mergedData.map(internalRenderItemNode),showRest?restNode:null,suffix&&react.createElement(es_Item,(0,esm_extends.Z)({},itemSharedProps,{responsive:isResponsive,responsiveDisabled:!shouldResponsive,order:mergedDisplayCount,className:"".concat(itemPrefixCls,"-suffix"),registerSize:function registerSuffixSize(_,width){setSuffixWidth(width)},display:!0,style:suffixStyle}),suffix));return isResponsive&&(overflowNode=react.createElement(es.Z,{onResize:function onOverflowResize(_,element){setContainerWidth(element.clientWidth)},disabled:!shouldResponsive},overflowNode)),overflowNode}var ForwardOverflow=react.forwardRef(Overflow);ForwardOverflow.displayName="Overflow",ForwardOverflow.Item=es_RawItem,ForwardOverflow.RESPONSIVE="responsive",ForwardOverflow.INVALIDATE="invalidate";const rc_overflow_es=ForwardOverflow},"./node_modules/rc-util/es/KeyCode.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var KeyCode={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function isTextModifyingKeyEvent(e){var keyCode=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||keyCode>=KeyCode.F1&&keyCode<=KeyCode.F12)return!1;switch(keyCode){case KeyCode.ALT:case KeyCode.CAPS_LOCK:case KeyCode.CONTEXT_MENU:case KeyCode.CTRL:case KeyCode.DOWN:case KeyCode.END:case KeyCode.ESC:case KeyCode.HOME:case KeyCode.INSERT:case KeyCode.LEFT:case KeyCode.MAC_FF_META:case KeyCode.META:case KeyCode.NUMLOCK:case KeyCode.NUM_CENTER:case KeyCode.PAGE_DOWN:case KeyCode.PAGE_UP:case KeyCode.PAUSE:case KeyCode.PRINT_SCREEN:case KeyCode.RIGHT:case KeyCode.SHIFT:case KeyCode.UP:case KeyCode.WIN_KEY:case KeyCode.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function isCharacterKey(keyCode){if(keyCode>=KeyCode.ZERO&&keyCode<=KeyCode.NINE)return!0;if(keyCode>=KeyCode.NUM_ZERO&&keyCode<=KeyCode.NUM_MULTIPLY)return!0;if(keyCode>=KeyCode.A&&keyCode<=KeyCode.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===keyCode)return!0;switch(keyCode){case KeyCode.SPACE:case KeyCode.QUESTION_MARK:case KeyCode.NUM_PLUS:case KeyCode.NUM_MINUS:case KeyCode.NUM_PERIOD:case KeyCode.NUM_DIVISION:case KeyCode.SEMICOLON:case KeyCode.DASH:case KeyCode.EQUALS:case KeyCode.COMMA:case KeyCode.PERIOD:case KeyCode.SLASH:case KeyCode.APOSTROPHE:case KeyCode.SINGLE_QUOTE:case KeyCode.OPEN_SQUARE_BRACKET:case KeyCode.BACKSLASH:case KeyCode.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const __WEBPACK_DEFAULT_EXPORT__=KeyCode}}]);