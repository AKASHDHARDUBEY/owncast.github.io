"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[1325],{"./node_modules/mermaid/dist/erDiagram-9d236eb7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{diagram:()=>diagram});var mermaid_8af3addd=__webpack_require__("./node_modules/mermaid/dist/mermaid-8af3addd.js"),graphlib=__webpack_require__("./node_modules/dagre-d3-es/src/graphlib/index.js"),src=__webpack_require__("./node_modules/d3/src/index.js"),dagre=__webpack_require__("./node_modules/dagre-d3-es/src/dagre/index.js"),stringify=__webpack_require__("./node_modules/uuid/dist/esm-browser/stringify.js");const regex=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const esm_browser_validate=function validate(uuid){return"string"==typeof uuid&&regex.test(uuid)};const esm_browser_parse=function parse(uuid){if(!esm_browser_validate(uuid))throw TypeError("Invalid UUID");let v;const arr=new Uint8Array(16);return arr[0]=(v=parseInt(uuid.slice(0,8),16))>>>24,arr[1]=v>>>16&255,arr[2]=v>>>8&255,arr[3]=255&v,arr[4]=(v=parseInt(uuid.slice(9,13),16))>>>8,arr[5]=255&v,arr[6]=(v=parseInt(uuid.slice(14,18),16))>>>8,arr[7]=255&v,arr[8]=(v=parseInt(uuid.slice(19,23),16))>>>8,arr[9]=255&v,arr[10]=(v=parseInt(uuid.slice(24,36),16))/1099511627776&255,arr[11]=v/4294967296&255,arr[12]=v>>>24&255,arr[13]=v>>>16&255,arr[14]=v>>>8&255,arr[15]=255&v,arr};function f(s,x,y,z){switch(s){case 0:return x&y^~x&z;case 1:case 3:return x^y^z;case 2:return x&y^x&z^y&z}}function ROTL(x,n){return x<<n|x>>>32-n}const esm_browser_v5=function v35(name,version,hashfunc){function generateUUID(value,namespace,buf,offset){var _namespace;if("string"==typeof value&&(value=function stringToBytes(str){str=unescape(encodeURIComponent(str));const bytes=[];for(let i=0;i<str.length;++i)bytes.push(str.charCodeAt(i));return bytes}(value)),"string"==typeof namespace&&(namespace=esm_browser_parse(namespace)),16!==(null===(_namespace=namespace)||void 0===_namespace?void 0:_namespace.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let bytes=new Uint8Array(16+value.length);if(bytes.set(namespace),bytes.set(value,namespace.length),bytes=hashfunc(bytes),bytes[6]=15&bytes[6]|version,bytes[8]=63&bytes[8]|128,buf){offset=offset||0;for(let i=0;i<16;++i)buf[offset+i]=bytes[i];return buf}return(0,stringify.S)(bytes)}try{generateUUID.name=name}catch(err){}return generateUUID.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",generateUUID.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",generateUUID}("v5",80,(function sha1(bytes){const K=[1518500249,1859775393,2400959708,3395469782],H=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof bytes){const msg=unescape(encodeURIComponent(bytes));bytes=[];for(let i=0;i<msg.length;++i)bytes.push(msg.charCodeAt(i))}else Array.isArray(bytes)||(bytes=Array.prototype.slice.call(bytes));bytes.push(128);const l=bytes.length/4+2,N=Math.ceil(l/16),M=new Array(N);for(let i=0;i<N;++i){const arr=new Uint32Array(16);for(let j=0;j<16;++j)arr[j]=bytes[64*i+4*j]<<24|bytes[64*i+4*j+1]<<16|bytes[64*i+4*j+2]<<8|bytes[64*i+4*j+3];M[i]=arr}M[N-1][14]=8*(bytes.length-1)/Math.pow(2,32),M[N-1][14]=Math.floor(M[N-1][14]),M[N-1][15]=8*(bytes.length-1)&4294967295;for(let i=0;i<N;++i){const W=new Uint32Array(80);for(let t=0;t<16;++t)W[t]=M[i][t];for(let t=16;t<80;++t)W[t]=ROTL(W[t-3]^W[t-8]^W[t-14]^W[t-16],1);let a=H[0],b=H[1],c=H[2],d=H[3],e=H[4];for(let t=0;t<80;++t){const s=Math.floor(t/20),T=ROTL(a,5)+f(s,b,c,d)+e+K[s]+W[t]>>>0;e=d,d=c,c=ROTL(b,30)>>>0,b=a,a=T}H[0]=H[0]+a>>>0,H[1]=H[1]+b>>>0,H[2]=H[2]+c>>>0,H[3]=H[3]+d>>>0,H[4]=H[4]+e>>>0}return[H[0]>>24&255,H[0]>>16&255,H[0]>>8&255,255&H[0],H[1]>>24&255,H[1]>>16&255,H[1]>>8&255,255&H[1],H[2]>>24&255,H[2]>>16&255,H[2]>>8&255,255&H[2],H[3]>>24&255,H[3]>>16&255,H[3]>>8&255,255&H[3],H[4]>>24&255,H[4]>>16&255,H[4]>>8&255,255&H[4]]}));__webpack_require__("./node_modules/dayjs/dayjs.min.js"),__webpack_require__("./node_modules/@braintree/sanitize-url/dist/index.js"),__webpack_require__("./node_modules/dompurify/dist/purify.js");var parser=function(){var o=function(k,v,o2,l){for(o2=o2||{},l=k.length;l--;o2[k[l]]=v);return o2},$V0=[6,8,10,20,22,24,26,27,28],$V1=[1,10],$V2=[1,11],$V3=[1,12],$V4=[1,13],$V5=[1,14],$V6=[1,15],$V7=[1,21],$V8=[1,22],$V9=[1,23],$Va=[1,24],$Vb=[1,25],$Vc=[6,8,10,13,15,18,19,20,22,24,26,27,28,41,42,43,44,45],$Vd=[1,34],$Ve=[27,28,46,47],$Vf=[41,42,43,44,45],$Vg=[17,34],$Vh=[1,54],$Vi=[1,53],$Vj=[17,34,36,38],parser2={trace:function trace(){},yy:{},symbols_:{error:2,start:3,ER_DIAGRAM:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,entityName:11,relSpec:12,":":13,role:14,BLOCK_START:15,attributes:16,BLOCK_STOP:17,SQS:18,SQE:19,title:20,title_value:21,acc_title:22,acc_title_value:23,acc_descr:24,acc_descr_value:25,acc_descr_multiline_value:26,ALPHANUM:27,ENTITY_NAME:28,attribute:29,attributeType:30,attributeName:31,attributeKeyTypeList:32,attributeComment:33,ATTRIBUTE_WORD:34,attributeKeyType:35,COMMA:36,ATTRIBUTE_KEY:37,COMMENT:38,cardinality:39,relType:40,ZERO_OR_ONE:41,ZERO_OR_MORE:42,ONE_OR_MORE:43,ONLY_ONE:44,MD_PARENT:45,NON_IDENTIFYING:46,IDENTIFYING:47,WORD:48,$accept:0,$end:1},terminals_:{2:"error",4:"ER_DIAGRAM",6:"EOF",8:"SPACE",10:"NEWLINE",13:":",15:"BLOCK_START",17:"BLOCK_STOP",18:"SQS",19:"SQE",20:"title",21:"title_value",22:"acc_title",23:"acc_title_value",24:"acc_descr",25:"acc_descr_value",26:"acc_descr_multiline_value",27:"ALPHANUM",28:"ENTITY_NAME",34:"ATTRIBUTE_WORD",36:"COMMA",37:"ATTRIBUTE_KEY",38:"COMMENT",41:"ZERO_OR_ONE",42:"ZERO_OR_MORE",43:"ONE_OR_MORE",44:"ONLY_ONE",45:"MD_PARENT",46:"NON_IDENTIFYING",47:"IDENTIFYING",48:"WORD"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,5],[9,4],[9,3],[9,1],[9,7],[9,6],[9,4],[9,2],[9,2],[9,2],[9,1],[11,1],[11,1],[16,1],[16,2],[29,2],[29,3],[29,3],[29,4],[30,1],[31,1],[32,1],[32,3],[35,1],[33,1],[12,3],[39,1],[39,1],[39,1],[39,1],[39,1],[40,1],[40,1],[14,1],[14,1],[14,1]],performAction:function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$){var $0=$$.length-1;switch(yystate){case 1:break;case 2:case 6:case 7:this.$=[];break;case 3:$$[$0-1].push($$[$0]),this.$=$$[$0-1];break;case 4:case 5:case 19:case 43:case 27:case 28:case 31:this.$=$$[$0];break;case 8:yy.addEntity($$[$0-4]),yy.addEntity($$[$0-2]),yy.addRelationship($$[$0-4],$$[$0],$$[$0-2],$$[$0-3]);break;case 9:yy.addEntity($$[$0-3]),yy.addAttributes($$[$0-3],$$[$0-1]);break;case 10:yy.addEntity($$[$0-2]);break;case 11:yy.addEntity($$[$0]);break;case 12:yy.addEntity($$[$0-6],$$[$0-4]),yy.addAttributes($$[$0-6],$$[$0-1]);break;case 13:yy.addEntity($$[$0-5],$$[$0-3]);break;case 14:yy.addEntity($$[$0-3],$$[$0-1]);break;case 15:case 16:this.$=$$[$0].trim(),yy.setAccTitle(this.$);break;case 17:case 18:this.$=$$[$0].trim(),yy.setAccDescription(this.$);break;case 20:case 41:case 42:case 32:this.$=$$[$0].replace(/"/g,"");break;case 21:case 29:this.$=[$$[$0]];break;case 22:$$[$0].push($$[$0-1]),this.$=$$[$0];break;case 23:this.$={attributeType:$$[$0-1],attributeName:$$[$0]};break;case 24:this.$={attributeType:$$[$0-2],attributeName:$$[$0-1],attributeKeyTypeList:$$[$0]};break;case 25:this.$={attributeType:$$[$0-2],attributeName:$$[$0-1],attributeComment:$$[$0]};break;case 26:this.$={attributeType:$$[$0-3],attributeName:$$[$0-2],attributeKeyTypeList:$$[$0-1],attributeComment:$$[$0]};break;case 30:$$[$0-2].push($$[$0]),this.$=$$[$0-2];break;case 33:this.$={cardA:$$[$0],relType:$$[$0-1],cardB:$$[$0-2]};break;case 34:this.$=yy.Cardinality.ZERO_OR_ONE;break;case 35:this.$=yy.Cardinality.ZERO_OR_MORE;break;case 36:this.$=yy.Cardinality.ONE_OR_MORE;break;case 37:this.$=yy.Cardinality.ONLY_ONE;break;case 38:this.$=yy.Cardinality.MD_PARENT;break;case 39:this.$=yy.Identification.NON_IDENTIFYING;break;case 40:this.$=yy.Identification.IDENTIFYING}},table:[{3:1,4:[1,2]},{1:[3]},o($V0,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:9,20:$V1,22:$V2,24:$V3,26:$V4,27:$V5,28:$V6},o($V0,[2,7],{1:[2,1]}),o($V0,[2,3]),{9:16,11:9,20:$V1,22:$V2,24:$V3,26:$V4,27:$V5,28:$V6},o($V0,[2,5]),o($V0,[2,6]),o($V0,[2,11],{12:17,39:20,15:[1,18],18:[1,19],41:$V7,42:$V8,43:$V9,44:$Va,45:$Vb}),{21:[1,26]},{23:[1,27]},{25:[1,28]},o($V0,[2,18]),o($Vc,[2,19]),o($Vc,[2,20]),o($V0,[2,4]),{11:29,27:$V5,28:$V6},{16:30,17:[1,31],29:32,30:33,34:$Vd},{11:35,27:$V5,28:$V6},{40:36,46:[1,37],47:[1,38]},o($Ve,[2,34]),o($Ve,[2,35]),o($Ve,[2,36]),o($Ve,[2,37]),o($Ve,[2,38]),o($V0,[2,15]),o($V0,[2,16]),o($V0,[2,17]),{13:[1,39]},{17:[1,40]},o($V0,[2,10]),{16:41,17:[2,21],29:32,30:33,34:$Vd},{31:42,34:[1,43]},{34:[2,27]},{19:[1,44]},{39:45,41:$V7,42:$V8,43:$V9,44:$Va,45:$Vb},o($Vf,[2,39]),o($Vf,[2,40]),{14:46,27:[1,49],28:[1,48],48:[1,47]},o($V0,[2,9]),{17:[2,22]},o($Vg,[2,23],{32:50,33:51,35:52,37:$Vh,38:$Vi}),o([17,34,37,38],[2,28]),o($V0,[2,14],{15:[1,55]}),o([27,28],[2,33]),o($V0,[2,8]),o($V0,[2,41]),o($V0,[2,42]),o($V0,[2,43]),o($Vg,[2,24],{33:56,36:[1,57],38:$Vi}),o($Vg,[2,25]),o($Vj,[2,29]),o($Vg,[2,32]),o($Vj,[2,31]),{16:58,17:[1,59],29:32,30:33,34:$Vd},o($Vg,[2,26]),{35:60,37:$Vh},{17:[1,61]},o($V0,[2,13]),o($Vj,[2,30]),o($V0,[2,12])],defaultActions:{34:[2,27],41:[2,22]},parseError:function parseError(str,hash){if(!hash.recoverable){var error=new Error(str);throw error.hash=hash,error}this.trace(str)},parse:function parse(input){var self=this,stack=[0],tstack=[],vstack=[null],lstack=[],table=this.table,yytext="",yylineno=0,yyleng=0,args=lstack.slice.call(arguments,1),lexer2=Object.create(this.lexer),sharedState={yy:{}};for(var k in this.yy)Object.prototype.hasOwnProperty.call(this.yy,k)&&(sharedState.yy[k]=this.yy[k]);lexer2.setInput(input,sharedState.yy),sharedState.yy.lexer=lexer2,sharedState.yy.parser=this,void 0===lexer2.yylloc&&(lexer2.yylloc={});var yyloc=lexer2.yylloc;lstack.push(yyloc);var ranges=lexer2.options&&lexer2.options.ranges;"function"==typeof sharedState.yy.parseError?this.parseError=sharedState.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var symbol,state,action,r,p,len,newState,expected,token,yyval={};;){if(state=stack[stack.length-1],this.defaultActions[state]?action=this.defaultActions[state]:(null==symbol&&(token=void 0,"number"!=typeof(token=tstack.pop()||lexer2.lex()||1)&&(token instanceof Array&&(token=(tstack=token).pop()),token=self.symbols_[token]||token),symbol=token),action=table[state]&&table[state][symbol]),void 0===action||!action.length||!action[0]){var errStr="";for(p in expected=[],table[state])this.terminals_[p]&&p>2&&expected.push("'"+this.terminals_[p]+"'");errStr=lexer2.showPosition?"Parse error on line "+(yylineno+1)+":\n"+lexer2.showPosition()+"\nExpecting "+expected.join(", ")+", got '"+(this.terminals_[symbol]||symbol)+"'":"Parse error on line "+(yylineno+1)+": Unexpected "+(1==symbol?"end of input":"'"+(this.terminals_[symbol]||symbol)+"'"),this.parseError(errStr,{text:lexer2.match,token:this.terminals_[symbol]||symbol,line:lexer2.yylineno,loc:yyloc,expected})}if(action[0]instanceof Array&&action.length>1)throw new Error("Parse Error: multiple actions possible at state: "+state+", token: "+symbol);switch(action[0]){case 1:stack.push(symbol),vstack.push(lexer2.yytext),lstack.push(lexer2.yylloc),stack.push(action[1]),symbol=null,yyleng=lexer2.yyleng,yytext=lexer2.yytext,yylineno=lexer2.yylineno,yyloc=lexer2.yylloc;break;case 2:if(len=this.productions_[action[1]][1],yyval.$=vstack[vstack.length-len],yyval._$={first_line:lstack[lstack.length-(len||1)].first_line,last_line:lstack[lstack.length-1].last_line,first_column:lstack[lstack.length-(len||1)].first_column,last_column:lstack[lstack.length-1].last_column},ranges&&(yyval._$.range=[lstack[lstack.length-(len||1)].range[0],lstack[lstack.length-1].range[1]]),void 0!==(r=this.performAction.apply(yyval,[yytext,yyleng,yylineno,sharedState.yy,action[1],vstack,lstack].concat(args))))return r;len&&(stack=stack.slice(0,-1*len*2),vstack=vstack.slice(0,-1*len),lstack=lstack.slice(0,-1*len)),stack.push(this.productions_[action[1]][0]),vstack.push(yyval.$),lstack.push(yyval._$),newState=table[stack[stack.length-2]][stack[stack.length-1]],stack.push(newState);break;case 3:return!0}}return!0}},lexer={EOF:1,parseError:function parseError(str,hash){if(!this.yy.parser)throw new Error(str);this.yy.parser.parseError(str,hash)},setInput:function(input,yy){return this.yy=yy||this.yy||{},this._input=input,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var ch=this._input[0];return this.yytext+=ch,this.yyleng++,this.offset++,this.match+=ch,this.matched+=ch,ch.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),ch},unput:function(ch){var len=ch.length,lines=ch.split(/(?:\r\n?|\n)/g);this._input=ch+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-len),this.offset-=len;var oldLines=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),lines.length-1&&(this.yylineno-=lines.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:lines?(lines.length===oldLines.length?this.yylloc.first_column:0)+oldLines[oldLines.length-lines.length].length-lines[0].length:this.yylloc.first_column-len},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-len]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(n){this.unput(this.match.slice(n))},pastInput:function(){var past=this.matched.substr(0,this.matched.length-this.match.length);return(past.length>20?"...":"")+past.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var next=this.match;return next.length<20&&(next+=this._input.substr(0,20-next.length)),(next.substr(0,20)+(next.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var pre=this.pastInput(),c=new Array(pre.length+1).join("-");return pre+this.upcomingInput()+"\n"+c+"^"},test_match:function(match,indexed_rule){var token,lines,backup;if(this.options.backtrack_lexer&&(backup={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(backup.yylloc.range=this.yylloc.range.slice(0))),(lines=match[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=lines.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+match[0].length},this.yytext+=match[0],this.match+=match[0],this.matches=match,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(match[0].length),this.matched+=match[0],token=this.performAction.call(this,this.yy,this,indexed_rule,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),token)return token;if(this._backtrack){for(var k in backup)this[k]=backup[k];return!1}return!1},next:function(){if(this.done)return this.EOF;var token,match,tempMatch,index;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var rules=this._currentRules(),i=0;i<rules.length;i++)if((tempMatch=this._input.match(this.rules[rules[i]]))&&(!match||tempMatch[0].length>match[0].length)){if(match=tempMatch,index=i,this.options.backtrack_lexer){if(!1!==(token=this.test_match(tempMatch,rules[i])))return token;if(this._backtrack){match=!1;continue}return!1}if(!this.options.flex)break}return match?!1!==(token=this.test_match(match,rules[index]))&&token:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function lex(){var r=this.next();return r||this.lex()},begin:function begin(condition){this.conditionStack.push(condition)},popState:function popState(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function _currentRules(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function topState(n){return(n=this.conditionStack.length-1-Math.abs(n||0))>=0?this.conditionStack[n]:"INITIAL"},pushState:function pushState(condition){this.begin(condition)},stateStackSize:function stateStackSize(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function anonymous(yy,yy_,$avoiding_name_collisions,YY_START){switch($avoiding_name_collisions){case 0:return this.begin("acc_title"),22;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),24;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 10;case 8:case 15:case 20:break;case 9:return 8;case 10:return 28;case 11:return 48;case 12:return 4;case 13:return this.begin("block"),15;case 14:return 36;case 16:return 37;case 17:case 18:return 34;case 19:return 38;case 21:return this.popState(),17;case 22:case 54:return yy_.yytext[0];case 23:return 18;case 24:return 19;case 25:case 29:case 30:case 43:return 41;case 26:case 27:case 28:case 36:case 38:case 45:return 43;case 31:case 32:case 33:case 34:case 35:case 37:case 44:return 42;case 39:case 40:case 41:case 42:return 44;case 46:return 45;case 47:case 50:case 51:case 52:return 46;case 48:case 49:return 47;case 53:return 27;case 55:return 6}},rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:[\s]+)/i,/^(?:"[^"%\r\n\v\b\\]+")/i,/^(?:"[^"]*")/i,/^(?:erDiagram\b)/i,/^(?:\{)/i,/^(?:,)/i,/^(?:\s+)/i,/^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,/^(?:(.*?)[~](.*?)*[~])/i,/^(?:[\*A-Za-z_][A-Za-z0-9\-_\[\]\(\)]*)/i,/^(?:"[^"]*")/i,/^(?:[\n]+)/i,/^(?:\})/i,/^(?:.)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:one or zero\b)/i,/^(?:one or more\b)/i,/^(?:one or many\b)/i,/^(?:1\+)/i,/^(?:\|o\b)/i,/^(?:zero or one\b)/i,/^(?:zero or more\b)/i,/^(?:zero or many\b)/i,/^(?:0\+)/i,/^(?:\}o\b)/i,/^(?:many\(0\))/i,/^(?:many\(1\))/i,/^(?:many\b)/i,/^(?:\}\|)/i,/^(?:one\b)/i,/^(?:only one\b)/i,/^(?:1\b)/i,/^(?:\|\|)/i,/^(?:o\|)/i,/^(?:o\{)/i,/^(?:\|\{)/i,/^(?:\s*u\b)/i,/^(?:\.\.)/i,/^(?:--)/i,/^(?:to\b)/i,/^(?:optionally to\b)/i,/^(?:\.-)/i,/^(?:-\.)/i,/^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i,/^(?:.)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},block:{rules:[14,15,16,17,18,19,20,21,22],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],inclusive:!0}}};function Parser(){this.yy={}}return parser2.lexer=lexer,Parser.prototype=parser2,parser2.Parser=Parser,new Parser}();parser.parser=parser;const erParser=parser;let entities={},relationships=[];const addEntity=function(name,alias=void 0){return void 0===entities[name]?(entities[name]={attributes:[],alias},mermaid_8af3addd.l.info("Added new entity :",name)):entities[name]&&!entities[name].alias&&alias&&(entities[name].alias=alias,mermaid_8af3addd.l.info(`Add alias '${alias}' to entity '${name}'`)),entities[name]},erDb={Cardinality:{ZERO_OR_ONE:"ZERO_OR_ONE",ZERO_OR_MORE:"ZERO_OR_MORE",ONE_OR_MORE:"ONE_OR_MORE",ONLY_ONE:"ONLY_ONE",MD_PARENT:"MD_PARENT"},Identification:{NON_IDENTIFYING:"NON_IDENTIFYING",IDENTIFYING:"IDENTIFYING"},getConfig:()=>(0,mermaid_8af3addd.c)().er,addEntity,addAttributes:function(entityName,attribs){let i,entity=addEntity(entityName);for(i=attribs.length-1;i>=0;i--)entity.attributes.push(attribs[i]),mermaid_8af3addd.l.debug("Added attribute ",attribs[i].attributeName)},getEntities:()=>entities,addRelationship:function(entA,rolA,entB,rSpec){let rel={entityA:entA,roleA:rolA,entityB:entB,relSpec:rSpec};relationships.push(rel),mermaid_8af3addd.l.debug("Added new relationship :",rel)},getRelationships:()=>relationships,clear:function(){entities={},relationships=[],(0,mermaid_8af3addd.t)()},setAccTitle:mermaid_8af3addd.s,getAccTitle:mermaid_8af3addd.g,setAccDescription:mermaid_8af3addd.b,getAccDescription:mermaid_8af3addd.a,setDiagramTitle:mermaid_8af3addd.q,getDiagramTitle:mermaid_8af3addd.r},ERMarkers={ONLY_ONE_START:"ONLY_ONE_START",ONLY_ONE_END:"ONLY_ONE_END",ZERO_OR_ONE_START:"ZERO_OR_ONE_START",ZERO_OR_ONE_END:"ZERO_OR_ONE_END",ONE_OR_MORE_START:"ONE_OR_MORE_START",ONE_OR_MORE_END:"ONE_OR_MORE_END",ZERO_OR_MORE_START:"ZERO_OR_MORE_START",ZERO_OR_MORE_END:"ZERO_OR_MORE_END",MD_PARENT_END:"MD_PARENT_END",MD_PARENT_START:"MD_PARENT_START"},erMarkers_ERMarkers=ERMarkers,erMarkers_insertMarkers=function(elem,conf2){let marker;elem.append("defs").append("marker").attr("id",ERMarkers.MD_PARENT_START).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),elem.append("defs").append("marker").attr("id",ERMarkers.MD_PARENT_END).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),elem.append("defs").append("marker").attr("id",ERMarkers.ONLY_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",conf2.stroke).attr("fill","none").attr("d","M9,0 L9,18 M15,0 L15,18"),elem.append("defs").append("marker").attr("id",ERMarkers.ONLY_ONE_END).attr("refX",18).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",conf2.stroke).attr("fill","none").attr("d","M3,0 L3,18 M9,0 L9,18"),marker=elem.append("defs").append("marker").attr("id",ERMarkers.ZERO_OR_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),marker.append("circle").attr("stroke",conf2.stroke).attr("fill","white").attr("cx",21).attr("cy",9).attr("r",6),marker.append("path").attr("stroke",conf2.stroke).attr("fill","none").attr("d","M9,0 L9,18"),marker=elem.append("defs").append("marker").attr("id",ERMarkers.ZERO_OR_ONE_END).attr("refX",30).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),marker.append("circle").attr("stroke",conf2.stroke).attr("fill","white").attr("cx",9).attr("cy",9).attr("r",6),marker.append("path").attr("stroke",conf2.stroke).attr("fill","none").attr("d","M21,0 L21,18"),elem.append("defs").append("marker").attr("id",ERMarkers.ONE_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",conf2.stroke).attr("fill","none").attr("d","M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"),elem.append("defs").append("marker").attr("id",ERMarkers.ONE_OR_MORE_END).attr("refX",27).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",conf2.stroke).attr("fill","none").attr("d","M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18"),marker=elem.append("defs").append("marker").attr("id",ERMarkers.ZERO_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),marker.append("circle").attr("stroke",conf2.stroke).attr("fill","white").attr("cx",48).attr("cy",18).attr("r",6),marker.append("path").attr("stroke",conf2.stroke).attr("fill","none").attr("d","M0,18 Q18,0 36,18 Q18,36 0,18"),marker=elem.append("defs").append("marker").attr("id",ERMarkers.ZERO_OR_MORE_END).attr("refX",39).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),marker.append("circle").attr("stroke",conf2.stroke).attr("fill","white").attr("cx",9).attr("cy",18).attr("r",6),marker.append("path").attr("stroke",conf2.stroke).attr("fill","none").attr("d","M21,18 Q39,0 57,18 Q39,36 21,18")},BAD_ID_CHARS_REGEXP=/[^\dA-Za-z](\W)*/g;let conf={},entityNameIds=new Map;const drawEntities=function(svgNode,entities2,graph){let firstOne;return Object.keys(entities2).forEach((function(entityName){const entityId=function generateId(str="",prefix=""){const simplifiedStr=str.replace(BAD_ID_CHARS_REGEXP,"");return`${strWithHyphen(prefix)}${strWithHyphen(simplifiedStr)}${esm_browser_v5(str,MERMAID_ERDIAGRAM_UUID)}`}(entityName,"entity");entityNameIds.set(entityName,entityId);const groupNode=svgNode.append("g").attr("id",entityId);firstOne=void 0===firstOne?entityId:firstOne;const textId="text-"+entityId,textNode=groupNode.append("text").classed("er entityLabel",!0).attr("id",textId).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","middle").style("font-family",(0,mermaid_8af3addd.c)().fontFamily).style("font-size",conf.fontSize+"px").text(entities2[entityName].alias??entityName),{width:entityWidth,height:entityHeight}=((groupNode,entityTextNode,attributes)=>{const heightPadding=conf.entityPadding/3,widthPadding=conf.entityPadding/3,attrFontSize=.85*conf.fontSize,labelBBox=entityTextNode.node().getBBox(),attributeNodes=[];let hasKeyType=!1,hasComment=!1,maxTypeWidth=0,maxNameWidth=0,maxKeyWidth=0,maxCommentWidth=0,cumulativeHeight=labelBBox.height+2*heightPadding,attrNum=1;attributes.forEach((item=>{void 0!==item.attributeKeyTypeList&&item.attributeKeyTypeList.length>0&&(hasKeyType=!0),void 0!==item.attributeComment&&(hasComment=!0)})),attributes.forEach((item=>{const attrPrefix=`${entityTextNode.node().id}-attr-${attrNum}`;let nodeHeight=0;const attributeType=(0,mermaid_8af3addd.v)(item.attributeType),typeNode=groupNode.append("text").classed("er entityLabel",!0).attr("id",`${attrPrefix}-type`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,mermaid_8af3addd.c)().fontFamily).style("font-size",attrFontSize+"px").text(attributeType),nameNode=groupNode.append("text").classed("er entityLabel",!0).attr("id",`${attrPrefix}-name`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,mermaid_8af3addd.c)().fontFamily).style("font-size",attrFontSize+"px").text(item.attributeName),attributeNode={};attributeNode.tn=typeNode,attributeNode.nn=nameNode;const typeBBox=typeNode.node().getBBox(),nameBBox=nameNode.node().getBBox();if(maxTypeWidth=Math.max(maxTypeWidth,typeBBox.width),maxNameWidth=Math.max(maxNameWidth,nameBBox.width),nodeHeight=Math.max(typeBBox.height,nameBBox.height),hasKeyType){const keyTypeNodeText=void 0!==item.attributeKeyTypeList?item.attributeKeyTypeList.join(","):"",keyTypeNode=groupNode.append("text").classed("er entityLabel",!0).attr("id",`${attrPrefix}-key`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,mermaid_8af3addd.c)().fontFamily).style("font-size",attrFontSize+"px").text(keyTypeNodeText);attributeNode.kn=keyTypeNode;const keyTypeBBox=keyTypeNode.node().getBBox();maxKeyWidth=Math.max(maxKeyWidth,keyTypeBBox.width),nodeHeight=Math.max(nodeHeight,keyTypeBBox.height)}if(hasComment){const commentNode=groupNode.append("text").classed("er entityLabel",!0).attr("id",`${attrPrefix}-comment`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,mermaid_8af3addd.c)().fontFamily).style("font-size",attrFontSize+"px").text(item.attributeComment||"");attributeNode.cn=commentNode;const commentNodeBBox=commentNode.node().getBBox();maxCommentWidth=Math.max(maxCommentWidth,commentNodeBBox.width),nodeHeight=Math.max(nodeHeight,commentNodeBBox.height)}attributeNode.height=nodeHeight,attributeNodes.push(attributeNode),cumulativeHeight+=nodeHeight+2*heightPadding,attrNum+=1}));let widthPaddingFactor=4;hasKeyType&&(widthPaddingFactor+=2),hasComment&&(widthPaddingFactor+=2);const maxWidth=maxTypeWidth+maxNameWidth+maxKeyWidth+maxCommentWidth,bBox={width:Math.max(conf.minEntityWidth,Math.max(labelBBox.width+2*conf.entityPadding,maxWidth+widthPadding*widthPaddingFactor)),height:attributes.length>0?cumulativeHeight:Math.max(conf.minEntityHeight,labelBBox.height+2*conf.entityPadding)};if(attributes.length>0){const spareColumnWidth=Math.max(0,(bBox.width-maxWidth-widthPadding*widthPaddingFactor)/(widthPaddingFactor/2));entityTextNode.attr("transform","translate("+bBox.width/2+","+(heightPadding+labelBBox.height/2)+")");let heightOffset=labelBBox.height+2*heightPadding,attribStyle="attributeBoxOdd";attributeNodes.forEach((attributeNode=>{const alignY=heightOffset+heightPadding+attributeNode.height/2;attributeNode.tn.attr("transform","translate("+widthPadding+","+alignY+")");const typeRect=groupNode.insert("rect","#"+attributeNode.tn.node().id).classed(`er ${attribStyle}`,!0).attr("x",0).attr("y",heightOffset).attr("width",maxTypeWidth+2*widthPadding+spareColumnWidth).attr("height",attributeNode.height+2*heightPadding),nameXOffset=parseFloat(typeRect.attr("x"))+parseFloat(typeRect.attr("width"));attributeNode.nn.attr("transform","translate("+(nameXOffset+widthPadding)+","+alignY+")");const nameRect=groupNode.insert("rect","#"+attributeNode.nn.node().id).classed(`er ${attribStyle}`,!0).attr("x",nameXOffset).attr("y",heightOffset).attr("width",maxNameWidth+2*widthPadding+spareColumnWidth).attr("height",attributeNode.height+2*heightPadding);let keyTypeAndCommentXOffset=parseFloat(nameRect.attr("x"))+parseFloat(nameRect.attr("width"));if(hasKeyType){attributeNode.kn.attr("transform","translate("+(keyTypeAndCommentXOffset+widthPadding)+","+alignY+")");const keyTypeRect=groupNode.insert("rect","#"+attributeNode.kn.node().id).classed(`er ${attribStyle}`,!0).attr("x",keyTypeAndCommentXOffset).attr("y",heightOffset).attr("width",maxKeyWidth+2*widthPadding+spareColumnWidth).attr("height",attributeNode.height+2*heightPadding);keyTypeAndCommentXOffset=parseFloat(keyTypeRect.attr("x"))+parseFloat(keyTypeRect.attr("width"))}hasComment&&(attributeNode.cn.attr("transform","translate("+(keyTypeAndCommentXOffset+widthPadding)+","+alignY+")"),groupNode.insert("rect","#"+attributeNode.cn.node().id).classed(`er ${attribStyle}`,"true").attr("x",keyTypeAndCommentXOffset).attr("y",heightOffset).attr("width",maxCommentWidth+2*widthPadding+spareColumnWidth).attr("height",attributeNode.height+2*heightPadding)),heightOffset+=attributeNode.height+2*heightPadding,attribStyle="attributeBoxOdd"===attribStyle?"attributeBoxEven":"attributeBoxOdd"}))}else bBox.height=Math.max(conf.minEntityHeight,cumulativeHeight),entityTextNode.attr("transform","translate("+bBox.width/2+","+bBox.height/2+")");return bBox})(groupNode,textNode,entities2[entityName].attributes),rectBBox=groupNode.insert("rect","#"+textId).classed("er entityBox",!0).attr("x",0).attr("y",0).attr("width",entityWidth).attr("height",entityHeight).node().getBBox();graph.setNode(entityId,{width:rectBBox.width,height:rectBBox.height,shape:"rect",id:entityId})})),firstOne},getEdgeName=function(rel){return(rel.entityA+rel.roleA+rel.entityB).replace(/\s/g,"")};let relCnt=0;const MERMAID_ERDIAGRAM_UUID="28e9f9db-3c8d-5aa5-9faf-44286ae5937c";function strWithHyphen(str=""){return str.length>0?`${str}-`:""}const diagram={parser:erParser,db:erDb,renderer:{setConf:function(cnf){const keys=Object.keys(cnf);for(const key of keys)conf[key]=cnf[key]},draw:function(text,id,_version,diagObj){conf=(0,mermaid_8af3addd.c)().er,mermaid_8af3addd.l.info("Drawing ER diagram");const securityLevel=(0,mermaid_8af3addd.c)().securityLevel;let sandboxElement;"sandbox"===securityLevel&&(sandboxElement=(0,src.Ys)("#i"+id));const svg=("sandbox"===securityLevel?(0,src.Ys)(sandboxElement.nodes()[0].contentDocument.body):(0,src.Ys)("body")).select(`[id='${id}']`);let g;erMarkers_insertMarkers(svg,conf),g=new graphlib.k({multigraph:!0,directed:!0,compound:!1}).setGraph({rankdir:conf.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel((function(){return{}}));const firstEntity=drawEntities(svg,diagObj.db.getEntities(),g),relationships2=function(relationships2,g){return relationships2.forEach((function(r){g.setEdge(entityNameIds.get(r.entityA),entityNameIds.get(r.entityB),{relationship:r},getEdgeName(r))})),relationships2}(diagObj.db.getRelationships(),g);var svgNode,graph;(0,dagre.bK)(g),svgNode=svg,(graph=g).nodes().forEach((function(v){void 0!==v&&void 0!==graph.node(v)&&svgNode.select("#"+v).attr("transform","translate("+(graph.node(v).x-graph.node(v).width/2)+","+(graph.node(v).y-graph.node(v).height/2)+" )")})),relationships2.forEach((function(rel){!function(svg,rel,g,insert,diagObj){relCnt++;const edge=g.edge(entityNameIds.get(rel.entityA),entityNameIds.get(rel.entityB),getEdgeName(rel)),lineFunction=(0,src.jvg)().x((function(d){return d.x})).y((function(d){return d.y})).curve(src.$0Z),svgPath=svg.insert("path","#"+insert).classed("er relationshipLine",!0).attr("d",lineFunction(edge.points)).style("stroke",conf.stroke).style("fill","none");rel.relSpec.relType===diagObj.db.Identification.NON_IDENTIFYING&&svgPath.attr("stroke-dasharray","8,8");let url="";switch(conf.arrowMarkerAbsolute&&(url=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,url=url.replace(/\(/g,"\\("),url=url.replace(/\)/g,"\\)")),rel.relSpec.cardA){case diagObj.db.Cardinality.ZERO_OR_ONE:svgPath.attr("marker-end","url("+url+"#"+erMarkers_ERMarkers.ZERO_OR_ONE_END+")");break;case diagObj.db.Cardinality.ZERO_OR_MORE:svgPath.attr("marker-end","url("+url+"#"+erMarkers_ERMarkers.ZERO_OR_MORE_END+")");break;case diagObj.db.Cardinality.ONE_OR_MORE:svgPath.attr("marker-end","url("+url+"#"+erMarkers_ERMarkers.ONE_OR_MORE_END+")");break;case diagObj.db.Cardinality.ONLY_ONE:svgPath.attr("marker-end","url("+url+"#"+erMarkers_ERMarkers.ONLY_ONE_END+")");break;case diagObj.db.Cardinality.MD_PARENT:svgPath.attr("marker-end","url("+url+"#"+erMarkers_ERMarkers.MD_PARENT_END+")")}switch(rel.relSpec.cardB){case diagObj.db.Cardinality.ZERO_OR_ONE:svgPath.attr("marker-start","url("+url+"#"+erMarkers_ERMarkers.ZERO_OR_ONE_START+")");break;case diagObj.db.Cardinality.ZERO_OR_MORE:svgPath.attr("marker-start","url("+url+"#"+erMarkers_ERMarkers.ZERO_OR_MORE_START+")");break;case diagObj.db.Cardinality.ONE_OR_MORE:svgPath.attr("marker-start","url("+url+"#"+erMarkers_ERMarkers.ONE_OR_MORE_START+")");break;case diagObj.db.Cardinality.ONLY_ONE:svgPath.attr("marker-start","url("+url+"#"+erMarkers_ERMarkers.ONLY_ONE_START+")");break;case diagObj.db.Cardinality.MD_PARENT:svgPath.attr("marker-start","url("+url+"#"+erMarkers_ERMarkers.MD_PARENT_START+")")}const len=svgPath.node().getTotalLength(),labelPoint=svgPath.node().getPointAtLength(.5*len),labelId="rel"+relCnt,labelBBox=svg.append("text").classed("er relationshipLabel",!0).attr("id",labelId).attr("x",labelPoint.x).attr("y",labelPoint.y).style("text-anchor","middle").style("dominant-baseline","middle").style("font-family",(0,mermaid_8af3addd.c)().fontFamily).style("font-size",conf.fontSize+"px").text(rel.roleA).node().getBBox();svg.insert("rect","#"+labelId).classed("er relationshipLabelBox",!0).attr("x",labelPoint.x-labelBBox.width/2).attr("y",labelPoint.y-labelBBox.height/2).attr("width",labelBBox.width).attr("height",labelBBox.height)}(svg,rel,g,firstEntity,diagObj)}));const padding=conf.diagramPadding;mermaid_8af3addd.u.insertTitle(svg,"entityTitleText",conf.titleTopMargin,diagObj.db.getDiagramTitle());const svgBounds=svg.node().getBBox(),width=svgBounds.width+2*padding,height=svgBounds.height+2*padding;(0,mermaid_8af3addd.i)(svg,height,width,conf.useMaxWidth),svg.attr("viewBox",`${svgBounds.x-padding} ${svgBounds.y-padding} ${width} ${height}`)}},styles:options=>`\n  .entityBox {\n    fill: ${options.mainBkg};\n    stroke: ${options.nodeBorder};\n  }\n\n  .attributeBoxOdd {\n    fill: ${options.attributeBackgroundColorOdd};\n    stroke: ${options.nodeBorder};\n  }\n\n  .attributeBoxEven {\n    fill:  ${options.attributeBackgroundColorEven};\n    stroke: ${options.nodeBorder};\n  }\n\n  .relationshipLabelBox {\n    fill: ${options.tertiaryColor};\n    opacity: 0.7;\n    background-color: ${options.tertiaryColor};\n      rect {\n        opacity: 0.5;\n      }\n  }\n\n    .relationshipLine {\n      stroke: ${options.lineColor};\n    }\n\n  .entityTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${options.textColor};\n  }    \n  #MD_PARENT_START {\n    fill: #f5f5f5 !important;\n    stroke: ${options.lineColor} !important;\n    stroke-width: 1;\n  }\n  #MD_PARENT_END {\n    fill: #f5f5f5 !important;\n    stroke: ${options.lineColor} !important;\n    stroke-width: 1;\n  }\n  \n`}}}]);