"use strict";(self.webpackChunkowncast_admin=self.webpackChunkowncast_admin||[]).push([[8900],{"./node_modules/mermaid/dist/styles-1e36f090.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>DEFAULT_STATE_TYPE,S:()=>STMT_RELATION,a:()=>DIVIDER_TYPE,b:()=>STMT_STATE,c:()=>DEFAULT_NESTED_DOC_DIR,d:()=>db,p:()=>parser$1,s:()=>styles});var _mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/mermaid/dist/mermaid-306576ad.js"),parser=function(){var o=function(k,v,o2,l){for(o2=o2||{},l=k.length;l--;o2[k[l]]=v);return o2},$V0=[1,2],$V1=[1,3],$V2=[1,5],$V3=[1,7],$V4=[2,5],$V5=[1,15],$V6=[1,17],$V7=[1,21],$V8=[1,22],$V9=[1,23],$Va=[1,24],$Vb=[1,37],$Vc=[1,25],$Vd=[1,26],$Ve=[1,27],$Vf=[1,28],$Vg=[1,29],$Vh=[1,32],$Vi=[1,33],$Vj=[1,34],$Vk=[1,35],$Vl=[1,36],$Vm=[1,39],$Vn=[1,40],$Vo=[1,41],$Vp=[1,42],$Vq=[1,38],$Vr=[1,45],$Vs=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],$Vt=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],$Vu=[1,4,5,7,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],$Vv=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],parser2={trace:function trace(){},yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,directive:6,SD:7,document:8,line:9,statement:10,classDefStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"--\x3e":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,classDef:38,CLASSDEF_ID:39,CLASSDEF_STYLEOPTS:40,DEFAULT:41,class:42,CLASSENTITY_IDS:43,STYLECLASS:44,openDirective:45,typeDirective:46,closeDirective:47,":":48,argDirective:49,direction_tb:50,direction_bt:51,direction_rl:52,direction_lr:53,eol:54,";":55,EDGE_STATE:56,STYLE_SEPARATOR:57,left_of:58,right_of:59,open_directive:60,type_directive:61,arg_directive:62,close_directive:63,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",7:"SD",14:"DESCR",15:"--\x3e",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"classDef",39:"CLASSDEF_ID",40:"CLASSDEF_STYLEOPTS",41:"DEFAULT",42:"class",43:"CLASSENTITY_IDS",44:"STYLECLASS",48:":",50:"direction_tb",51:"direction_bt",52:"direction_rl",53:"direction_lr",55:";",56:"EDGE_STATE",57:"STYLE_SEPARATOR",58:"left_of",59:"right_of",60:"open_directive",61:"type_directive",62:"arg_directive",63:"close_directive"},productions_:[0,[3,2],[3,2],[3,2],[3,2],[8,0],[8,2],[9,2],[9,1],[9,1],[10,1],[10,1],[10,1],[10,2],[10,3],[10,4],[10,1],[10,2],[10,1],[10,4],[10,3],[10,6],[10,1],[10,1],[10,1],[10,1],[10,4],[10,4],[10,1],[10,1],[10,2],[10,2],[10,1],[11,3],[11,3],[12,3],[6,3],[6,5],[32,1],[32,1],[32,1],[32,1],[54,1],[54,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1],[45,1],[46,1],[49,1],[47,1]],performAction:function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$){var $0=$$.length-1;switch(yystate){case 4:return yy.setRootDoc($$[$0]),$$[$0];case 5:this.$=[];break;case 6:"nl"!=$$[$0]&&($$[$0-1].push($$[$0]),this.$=$$[$0-1]);break;case 7:case 8:case 12:this.$=$$[$0];break;case 9:this.$="nl";break;case 13:const stateStmt=$$[$0-1];stateStmt.description=yy.trimColon($$[$0]),this.$=stateStmt;break;case 14:this.$={stmt:"relation",state1:$$[$0-2],state2:$$[$0]};break;case 15:const relDescription=yy.trimColon($$[$0]);this.$={stmt:"relation",state1:$$[$0-3],state2:$$[$0-1],description:relDescription};break;case 19:this.$={stmt:"state",id:$$[$0-3],type:"default",description:"",doc:$$[$0-1]};break;case 20:var id=$$[$0],description=$$[$0-2].trim();if($$[$0].match(":")){var parts=$$[$0].split(":");id=parts[0],description=[description,parts[1]]}this.$={stmt:"state",id,type:"default",description};break;case 21:this.$={stmt:"state",id:$$[$0-3],type:"default",description:$$[$0-5],doc:$$[$0-1]};break;case 22:this.$={stmt:"state",id:$$[$0],type:"fork"};break;case 23:this.$={stmt:"state",id:$$[$0],type:"join"};break;case 24:this.$={stmt:"state",id:$$[$0],type:"choice"};break;case 25:this.$={stmt:"state",id:yy.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:$$[$0-1].trim(),note:{position:$$[$0-2].trim(),text:$$[$0].trim()}};break;case 30:this.$=$$[$0].trim(),yy.setAccTitle(this.$);break;case 31:case 32:this.$=$$[$0].trim(),yy.setAccDescription(this.$);break;case 33:case 34:this.$={stmt:"classDef",id:$$[$0-1].trim(),classes:$$[$0].trim()};break;case 35:this.$={stmt:"applyClass",id:$$[$0-1].trim(),styleClass:$$[$0].trim()};break;case 38:yy.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 39:yy.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 40:yy.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 41:yy.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 44:case 45:this.$={stmt:"state",id:$$[$0].trim(),type:"default",description:""};break;case 46:case 47:this.$={stmt:"state",id:$$[$0-2].trim(),classes:[$$[$0].trim()],type:"default",description:""};break;case 50:yy.parseDirective("%%{","open_directive");break;case 51:yy.parseDirective($$[$0],"type_directive");break;case 52:$$[$0]=$$[$0].trim().replace(/'/g,'"'),yy.parseDirective($$[$0],"arg_directive");break;case 53:yy.parseDirective("}%%","close_directive","state")}},table:[{3:1,4:$V0,5:$V1,6:4,7:$V2,45:6,60:$V3},{1:[3]},{3:8,4:$V0,5:$V1,6:4,7:$V2,45:6,60:$V3},{3:9,4:$V0,5:$V1,6:4,7:$V2,45:6,60:$V3},{3:10,4:$V0,5:$V1,6:4,7:$V2,45:6,60:$V3},o([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],$V4,{8:11}),{46:12,61:[1,13]},{61:[2,50]},{1:[2,1]},{1:[2,2]},{1:[2,3]},{1:[2,4],4:$V5,5:$V6,6:30,9:14,10:16,11:18,12:19,13:20,16:$V7,17:$V8,19:$V9,22:$Va,24:$Vb,25:$Vc,26:$Vd,27:$Ve,28:$Vf,29:$Vg,32:31,33:$Vh,35:$Vi,37:$Vj,38:$Vk,42:$Vl,45:6,50:$Vm,51:$Vn,52:$Vo,53:$Vp,56:$Vq,60:$V3},{47:43,48:[1,44],63:$Vr},o([48,63],[2,51]),o($Vs,[2,6]),{6:30,10:46,11:18,12:19,13:20,16:$V7,17:$V8,19:$V9,22:$Va,24:$Vb,25:$Vc,26:$Vd,27:$Ve,28:$Vf,29:$Vg,32:31,33:$Vh,35:$Vi,37:$Vj,38:$Vk,42:$Vl,45:6,50:$Vm,51:$Vn,52:$Vo,53:$Vp,56:$Vq,60:$V3},o($Vs,[2,8]),o($Vs,[2,9]),o($Vs,[2,10]),o($Vs,[2,11]),o($Vs,[2,12],{14:[1,47],15:[1,48]}),o($Vs,[2,16]),{18:[1,49]},o($Vs,[2,18],{20:[1,50]}),{23:[1,51]},o($Vs,[2,22]),o($Vs,[2,23]),o($Vs,[2,24]),o($Vs,[2,25]),{30:52,31:[1,53],58:[1,54],59:[1,55]},o($Vs,[2,28]),o($Vs,[2,29]),{34:[1,56]},{36:[1,57]},o($Vs,[2,32]),{39:[1,58],41:[1,59]},{43:[1,60]},o($Vt,[2,44],{57:[1,61]}),o($Vt,[2,45],{57:[1,62]}),o($Vs,[2,38]),o($Vs,[2,39]),o($Vs,[2,40]),o($Vs,[2,41]),o($Vu,[2,36]),{49:63,62:[1,64]},o($Vu,[2,53]),o($Vs,[2,7]),o($Vs,[2,13]),{13:65,24:$Vb,56:$Vq},o($Vs,[2,17]),o($Vv,$V4,{8:66}),{24:[1,67]},{24:[1,68]},{23:[1,69]},{24:[2,48]},{24:[2,49]},o($Vs,[2,30]),o($Vs,[2,31]),{40:[1,70]},{40:[1,71]},{44:[1,72]},{24:[1,73]},{24:[1,74]},{47:75,63:$Vr},{63:[2,52]},o($Vs,[2,14],{14:[1,76]}),{4:$V5,5:$V6,6:30,9:14,10:16,11:18,12:19,13:20,16:$V7,17:$V8,19:$V9,21:[1,77],22:$Va,24:$Vb,25:$Vc,26:$Vd,27:$Ve,28:$Vf,29:$Vg,32:31,33:$Vh,35:$Vi,37:$Vj,38:$Vk,42:$Vl,45:6,50:$Vm,51:$Vn,52:$Vo,53:$Vp,56:$Vq,60:$V3},o($Vs,[2,20],{20:[1,78]}),{31:[1,79]},{24:[1,80]},o($Vs,[2,33]),o($Vs,[2,34]),o($Vs,[2,35]),o($Vt,[2,46]),o($Vt,[2,47]),o($Vu,[2,37]),o($Vs,[2,15]),o($Vs,[2,19]),o($Vv,$V4,{8:81}),o($Vs,[2,26]),o($Vs,[2,27]),{4:$V5,5:$V6,6:30,9:14,10:16,11:18,12:19,13:20,16:$V7,17:$V8,19:$V9,21:[1,82],22:$Va,24:$Vb,25:$Vc,26:$Vd,27:$Ve,28:$Vf,29:$Vg,32:31,33:$Vh,35:$Vi,37:$Vj,38:$Vk,42:$Vl,45:6,50:$Vm,51:$Vn,52:$Vo,53:$Vp,56:$Vq,60:$V3},o($Vs,[2,21])],defaultActions:{7:[2,50],8:[2,1],9:[2,2],10:[2,3],54:[2,48],55:[2,49],64:[2,52]},parseError:function parseError(str,hash){if(!hash.recoverable){var error=new Error(str);throw error.hash=hash,error}this.trace(str)},parse:function parse(input){var self=this,stack=[0],tstack=[],vstack=[null],lstack=[],table=this.table,yytext="",yylineno=0,yyleng=0,args=lstack.slice.call(arguments,1),lexer2=Object.create(this.lexer),sharedState={yy:{}};for(var k in this.yy)Object.prototype.hasOwnProperty.call(this.yy,k)&&(sharedState.yy[k]=this.yy[k]);lexer2.setInput(input,sharedState.yy),sharedState.yy.lexer=lexer2,sharedState.yy.parser=this,void 0===lexer2.yylloc&&(lexer2.yylloc={});var yyloc=lexer2.yylloc;lstack.push(yyloc);var ranges=lexer2.options&&lexer2.options.ranges;"function"==typeof sharedState.yy.parseError?this.parseError=sharedState.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var symbol,state,action,r,p,len,newState,expected,token,yyval={};;){if(state=stack[stack.length-1],this.defaultActions[state]?action=this.defaultActions[state]:(null==symbol&&(token=void 0,"number"!=typeof(token=tstack.pop()||lexer2.lex()||1)&&(token instanceof Array&&(token=(tstack=token).pop()),token=self.symbols_[token]||token),symbol=token),action=table[state]&&table[state][symbol]),void 0===action||!action.length||!action[0]){var errStr="";for(p in expected=[],table[state])this.terminals_[p]&&p>2&&expected.push("'"+this.terminals_[p]+"'");errStr=lexer2.showPosition?"Parse error on line "+(yylineno+1)+":\n"+lexer2.showPosition()+"\nExpecting "+expected.join(", ")+", got '"+(this.terminals_[symbol]||symbol)+"'":"Parse error on line "+(yylineno+1)+": Unexpected "+(1==symbol?"end of input":"'"+(this.terminals_[symbol]||symbol)+"'"),this.parseError(errStr,{text:lexer2.match,token:this.terminals_[symbol]||symbol,line:lexer2.yylineno,loc:yyloc,expected})}if(action[0]instanceof Array&&action.length>1)throw new Error("Parse Error: multiple actions possible at state: "+state+", token: "+symbol);switch(action[0]){case 1:stack.push(symbol),vstack.push(lexer2.yytext),lstack.push(lexer2.yylloc),stack.push(action[1]),symbol=null,yyleng=lexer2.yyleng,yytext=lexer2.yytext,yylineno=lexer2.yylineno,yyloc=lexer2.yylloc;break;case 2:if(len=this.productions_[action[1]][1],yyval.$=vstack[vstack.length-len],yyval._$={first_line:lstack[lstack.length-(len||1)].first_line,last_line:lstack[lstack.length-1].last_line,first_column:lstack[lstack.length-(len||1)].first_column,last_column:lstack[lstack.length-1].last_column},ranges&&(yyval._$.range=[lstack[lstack.length-(len||1)].range[0],lstack[lstack.length-1].range[1]]),void 0!==(r=this.performAction.apply(yyval,[yytext,yyleng,yylineno,sharedState.yy,action[1],vstack,lstack].concat(args))))return r;len&&(stack=stack.slice(0,-1*len*2),vstack=vstack.slice(0,-1*len),lstack=lstack.slice(0,-1*len)),stack.push(this.productions_[action[1]][0]),vstack.push(yyval.$),lstack.push(yyval._$),newState=table[stack[stack.length-2]][stack[stack.length-1]],stack.push(newState);break;case 3:return!0}}return!0}},lexer={EOF:1,parseError:function parseError(str,hash){if(!this.yy.parser)throw new Error(str);this.yy.parser.parseError(str,hash)},setInput:function(input,yy){return this.yy=yy||this.yy||{},this._input=input,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var ch=this._input[0];return this.yytext+=ch,this.yyleng++,this.offset++,this.match+=ch,this.matched+=ch,ch.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),ch},unput:function(ch){var len=ch.length,lines=ch.split(/(?:\r\n?|\n)/g);this._input=ch+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-len),this.offset-=len;var oldLines=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),lines.length-1&&(this.yylineno-=lines.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:lines?(lines.length===oldLines.length?this.yylloc.first_column:0)+oldLines[oldLines.length-lines.length].length-lines[0].length:this.yylloc.first_column-len},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-len]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(n){this.unput(this.match.slice(n))},pastInput:function(){var past=this.matched.substr(0,this.matched.length-this.match.length);return(past.length>20?"...":"")+past.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var next=this.match;return next.length<20&&(next+=this._input.substr(0,20-next.length)),(next.substr(0,20)+(next.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var pre=this.pastInput(),c=new Array(pre.length+1).join("-");return pre+this.upcomingInput()+"\n"+c+"^"},test_match:function(match,indexed_rule){var token,lines,backup;if(this.options.backtrack_lexer&&(backup={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(backup.yylloc.range=this.yylloc.range.slice(0))),(lines=match[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=lines.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+match[0].length},this.yytext+=match[0],this.match+=match[0],this.matches=match,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(match[0].length),this.matched+=match[0],token=this.performAction.call(this,this.yy,this,indexed_rule,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),token)return token;if(this._backtrack){for(var k in backup)this[k]=backup[k];return!1}return!1},next:function(){if(this.done)return this.EOF;var token,match,tempMatch,index;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var rules=this._currentRules(),i=0;i<rules.length;i++)if((tempMatch=this._input.match(this.rules[rules[i]]))&&(!match||tempMatch[0].length>match[0].length)){if(match=tempMatch,index=i,this.options.backtrack_lexer){if(!1!==(token=this.test_match(tempMatch,rules[i])))return token;if(this._backtrack){match=!1;continue}return!1}if(!this.options.flex)break}return match?!1!==(token=this.test_match(match,rules[index]))&&token:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function lex(){var r=this.next();return r||this.lex()},begin:function begin(condition){this.conditionStack.push(condition)},popState:function popState(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function _currentRules(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function topState(n){return(n=this.conditionStack.length-1-Math.abs(n||0))>=0?this.conditionStack[n]:"INITIAL"},pushState:function pushState(condition){this.begin(condition)},stateStackSize:function stateStackSize(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function anonymous(yy,yy_,$avoiding_name_collisions,YY_START){switch($avoiding_name_collisions){case 0:return 41;case 1:case 44:return 50;case 2:case 45:return 51;case 3:case 46:return 52;case 4:case 47:return 53;case 5:return this.begin("open_directive"),60;case 6:return this.begin("type_directive"),61;case 7:return this.popState(),this.begin("arg_directive"),48;case 8:return this.popState(),this.popState(),63;case 9:return 62;case 10:case 11:case 13:case 14:case 15:case 16:case 56:case 58:case 64:break;case 12:case 79:return 5;case 17:case 34:return this.pushState("SCALE"),17;case 18:case 35:return 18;case 19:case 25:case 36:case 51:case 54:this.popState();break;case 20:return this.begin("acc_title"),33;case 21:return this.popState(),"acc_title_value";case 22:return this.begin("acc_descr"),35;case 23:return this.popState(),"acc_descr_value";case 24:this.begin("acc_descr_multiline");break;case 26:return"acc_descr_multiline_value";case 27:return this.pushState("CLASSDEF"),38;case 28:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 29:return this.popState(),this.pushState("CLASSDEFID"),39;case 30:return this.popState(),40;case 31:return this.pushState("CLASS"),42;case 32:return this.popState(),this.pushState("CLASS_STYLE"),43;case 33:return this.popState(),44;case 37:this.pushState("STATE");break;case 38:case 41:return this.popState(),yy_.yytext=yy_.yytext.slice(0,-8).trim(),25;case 39:case 42:return this.popState(),yy_.yytext=yy_.yytext.slice(0,-8).trim(),26;case 40:case 43:return this.popState(),yy_.yytext=yy_.yytext.slice(0,-10).trim(),27;case 48:this.pushState("STATE_STRING");break;case 49:return this.pushState("STATE_ID"),"AS";case 50:case 66:return this.popState(),"ID";case 52:return"STATE_DESCR";case 53:return 19;case 55:return this.popState(),this.pushState("struct"),20;case 57:return this.popState(),21;case 59:return this.begin("NOTE"),29;case 60:return this.popState(),this.pushState("NOTE_ID"),58;case 61:return this.popState(),this.pushState("NOTE_ID"),59;case 62:this.popState(),this.pushState("FLOATING_NOTE");break;case 63:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 65:return"NOTE_TEXT";case 67:return this.popState(),this.pushState("NOTE_TEXT"),24;case 68:return this.popState(),yy_.yytext=yy_.yytext.substr(2).trim(),31;case 69:return this.popState(),yy_.yytext=yy_.yytext.slice(0,-8).trim(),31;case 70:case 71:return 7;case 72:return 16;case 73:return 56;case 74:return 24;case 75:return yy_.yytext=yy_.yytext.trim(),14;case 76:return 15;case 77:return 28;case 78:return 57;case 80:return"INVALID"}},rules:[/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[14,15],inclusive:!1},close_directive:{rules:[14,15],inclusive:!1},arg_directive:{rules:[8,9,14,15],inclusive:!1},type_directive:{rules:[7,8,14,15],inclusive:!1},open_directive:{rules:[6,14,15],inclusive:!1},struct:{rules:[14,15,27,31,37,44,45,46,47,56,57,58,59,73,74,75,76,77],inclusive:!1},FLOATING_NOTE_ID:{rules:[66],inclusive:!1},FLOATING_NOTE:{rules:[63,64,65],inclusive:!1},NOTE_TEXT:{rules:[68,69],inclusive:!1},NOTE_ID:{rules:[67],inclusive:!1},NOTE:{rules:[60,61,62],inclusive:!1},CLASS_STYLE:{rules:[33],inclusive:!1},CLASS:{rules:[32],inclusive:!1},CLASSDEFID:{rules:[30],inclusive:!1},CLASSDEF:{rules:[28,29],inclusive:!1},acc_descr_multiline:{rules:[25,26],inclusive:!1},acc_descr:{rules:[23],inclusive:!1},acc_title:{rules:[21],inclusive:!1},SCALE:{rules:[18,19,35,36],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[50],inclusive:!1},STATE_STRING:{rules:[51,52],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[14,15,38,39,40,41,42,43,48,49,53,54,55],inclusive:!1},ID:{rules:[14,15],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,10,11,12,13,15,16,17,20,22,24,27,31,34,37,55,59,70,71,72,73,74,75,76,78,79,80],inclusive:!0}}};function Parser(){this.yy={}}return parser2.lexer=lexer,Parser.prototype=parser2,parser2.Parser=Parser,new Parser}();parser.parser=parser;const parser$1=parser,DEFAULT_NESTED_DOC_DIR="TB",STMT_STATE="state",STMT_RELATION="relation",DEFAULT_STATE_TYPE="default",DIVIDER_TYPE="divider",START_NODE="[*]",START_TYPE="start",END_NODE=START_NODE;let direction="LR",rootDoc=[],classes={};let documents={root:{relations:[],states:{},documents:{}}},currentDocument=documents.root,startEndCount=0,dividerCnt=0;const clone=o=>JSON.parse(JSON.stringify(o)),docTranslator=(parent,node,first)=>{if(node.stmt===STMT_RELATION)docTranslator(parent,node.state1,!0),docTranslator(parent,node.state2,!1);else if(node.stmt===STMT_STATE&&("[*]"===node.id?(node.id=first?parent.id+"_start":parent.id+"_end",node.start=first):node.id=node.id.trim()),node.doc){const doc=[];let i,currentDoc=[];for(i=0;i<node.doc.length;i++)if(node.doc[i].type===DIVIDER_TYPE){const newNode=clone(node.doc[i]);newNode.doc=clone(currentDoc),doc.push(newNode),currentDoc=[]}else currentDoc.push(node.doc[i]);if(doc.length>0&&currentDoc.length>0){const newNode={stmt:STMT_STATE,id:(0,_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.G)(),type:"divider",doc:clone(currentDoc)};doc.push(clone(newNode)),node.doc=doc}node.doc.forEach((docNode=>docTranslator(node,docNode,!0)))}},addState=function(id,type=DEFAULT_STATE_TYPE,doc=null,descr=null,note=null,classes2=null,styles2=null,textStyles=null){const trimmedId=null==id?void 0:id.trim();if(void 0===currentDocument.states[trimmedId]?(_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.l.info("Adding state ",trimmedId,descr),currentDocument.states[trimmedId]={id:trimmedId,descriptions:[],type,doc,note,classes:[],styles:[],textStyles:[]}):(currentDocument.states[trimmedId].doc||(currentDocument.states[trimmedId].doc=doc),currentDocument.states[trimmedId].type||(currentDocument.states[trimmedId].type=type)),descr&&(_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.l.info("Setting state description",trimmedId,descr),"string"==typeof descr&&addDescription(trimmedId,descr.trim()),"object"==typeof descr&&descr.forEach((des=>addDescription(trimmedId,des.trim())))),note&&(currentDocument.states[trimmedId].note=note,currentDocument.states[trimmedId].note.text=_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.e.sanitizeText(currentDocument.states[trimmedId].note.text,(0,_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.c)())),classes2){_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.l.info("Setting state classes",trimmedId,classes2);("string"==typeof classes2?[classes2]:classes2).forEach((klass=>setCssClass(trimmedId,klass.trim())))}if(styles2){_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.l.info("Setting state styles",trimmedId,styles2);("string"==typeof styles2?[styles2]:styles2).forEach((style=>setStyle(trimmedId,style.trim())))}if(textStyles){_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.l.info("Setting state styles",trimmedId,styles2);("string"==typeof textStyles?[textStyles]:textStyles).forEach((textStyle=>setTextStyle(trimmedId,textStyle.trim())))}},clear=function(saveCommon){documents={root:{relations:[],states:{},documents:{}}},currentDocument=documents.root,startEndCount=0,classes={},saveCommon||(0,_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.v)()},getState=function(id){return currentDocument.states[id]};function startIdIfNeeded(id=""){let fixedId=id;return id===START_NODE&&(startEndCount++,fixedId=`${START_TYPE}${startEndCount}`),fixedId}function startTypeIfNeeded(id="",type=DEFAULT_STATE_TYPE){return id===START_NODE?START_TYPE:type}const addRelation=function(item1,item2,title){if("object"==typeof item1)!function addRelationObjs(item1,item2,relationTitle){let id1=startIdIfNeeded(item1.id.trim()),type1=startTypeIfNeeded(item1.id.trim(),item1.type),id2=startIdIfNeeded(item2.id.trim()),type2=startTypeIfNeeded(item2.id.trim(),item2.type);addState(id1,type1,item1.doc,item1.description,item1.note,item1.classes,item1.styles,item1.textStyles),addState(id2,type2,item2.doc,item2.description,item2.note,item2.classes,item2.styles,item2.textStyles),currentDocument.relations.push({id1,id2,relationTitle:_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.e.sanitizeText(relationTitle,(0,_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.c)())})}(item1,item2,title);else{const id1=startIdIfNeeded(item1.trim()),type1=startTypeIfNeeded(item1),id2=function endIdIfNeeded(id=""){let fixedId=id;return id===END_NODE&&(startEndCount++,fixedId=`end${startEndCount}`),fixedId}(item2.trim()),type2=function endTypeIfNeeded(id="",type=DEFAULT_STATE_TYPE){return id===END_NODE?"end":type}(item2);addState(id1,type1),addState(id2,type2),currentDocument.relations.push({id1,id2,title:_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.e.sanitizeText(title,(0,_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.c)())})}},addDescription=function(id,descr){const theState=currentDocument.states[id],_descr=descr.startsWith(":")?descr.replace(":","").trim():descr;theState.descriptions.push(_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.e.sanitizeText(_descr,(0,_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.c)()))},addStyleClass=function(id,styleAttributes=""){void 0===classes[id]&&(classes[id]={id,styles:[],textStyles:[]});const foundClass=classes[id];null!=styleAttributes&&styleAttributes.split(",").forEach((attrib=>{const fixedAttrib=attrib.replace(/([^;]*);/,"$1").trim();if(attrib.match("color")){const newStyle2=fixedAttrib.replace("fill","bgFill").replace("color","fill");foundClass.textStyles.push(newStyle2)}foundClass.styles.push(fixedAttrib)}))},setCssClass=function(itemIds,cssClassName){itemIds.split(",").forEach((function(id){let foundState=getState(id);if(void 0===foundState){const trimmedId=id.trim();addState(trimmedId),foundState=getState(trimmedId)}foundState.classes.push(cssClassName)}))},setStyle=function(itemId,styleText){const item=getState(itemId);void 0!==item&&item.textStyles.push(styleText)},setTextStyle=function(itemId,cssClassName){const item=getState(itemId);void 0!==item&&item.textStyles.push(cssClassName)},db={parseDirective:function(statement,context,type){_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.m.parseDirective(this,statement,context,type)},getConfig:()=>(0,_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.c)().state,addState,clear,getState,getStates:function(){return currentDocument.states},getRelations:function(){return currentDocument.relations},getClasses:function(){return classes},getDirection:()=>direction,addRelation,getDividerId:()=>(dividerCnt++,"divider-id-"+dividerCnt),setDirection:dir=>{direction=dir},cleanupLabel:function(label){return":"===label.substring(0,1)?label.substr(2).trim():label.trim()},lineType:{LINE:0,DOTTED_LINE:1},relationType:{AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},logDocuments:function(){_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.l.info("Documents = ",documents)},getRootDoc:()=>rootDoc,setRootDoc:o=>{_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.l.info("Setting root doc",o),rootDoc=o},getRootDocV2:()=>(docTranslator({id:"root"},{id:"root",doc:rootDoc},!0),{id:"root",doc:rootDoc}),extract:_doc=>{let doc;doc=_doc.doc?_doc.doc:_doc,_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.l.info(doc),clear(!0),_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.l.info("Extract",doc),doc.forEach((item=>{switch(item.stmt){case STMT_STATE:addState(item.id.trim(),item.type,item.doc,item.description,item.note,item.classes,item.styles,item.textStyles);break;case STMT_RELATION:addRelation(item.state1,item.state2,item.description);break;case"classDef":addStyleClass(item.id.trim(),item.classes);break;case"applyClass":setCssClass(item.id.trim(),item.styleClass)}}))},trimColon:str=>str&&":"===str[0]?str.substr(1).trim():str.trim(),getAccTitle:_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.g,setAccTitle:_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.s,getAccDescription:_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.a,setAccDescription:_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.b,addStyleClass,setCssClass,addDescription,setDiagramTitle:_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.r,getDiagramTitle:_mermaid_306576ad_js__WEBPACK_IMPORTED_MODULE_0__.t},styles=options=>`\ndefs #statediagram-barbEnd {\n    fill: ${options.transitionColor};\n    stroke: ${options.transitionColor};\n  }\ng.stateGroup text {\n  fill: ${options.nodeBorder};\n  stroke: none;\n  font-size: 10px;\n}\ng.stateGroup text {\n  fill: ${options.textColor};\n  stroke: none;\n  font-size: 10px;\n\n}\ng.stateGroup .state-title {\n  font-weight: bolder;\n  fill: ${options.stateLabelColor};\n}\n\ng.stateGroup rect {\n  fill: ${options.mainBkg};\n  stroke: ${options.nodeBorder};\n}\n\ng.stateGroup line {\n  stroke: ${options.lineColor};\n  stroke-width: 1;\n}\n\n.transition {\n  stroke: ${options.transitionColor};\n  stroke-width: 1;\n  fill: none;\n}\n\n.stateGroup .composit {\n  fill: ${options.background};\n  border-bottom: 1px\n}\n\n.stateGroup .alt-composit {\n  fill: #e0e0e0;\n  border-bottom: 1px\n}\n\n.state-note {\n  stroke: ${options.noteBorderColor};\n  fill: ${options.noteBkgColor};\n\n  text {\n    fill: ${options.noteTextColor};\n    stroke: none;\n    font-size: 10px;\n  }\n}\n\n.stateLabel .box {\n  stroke: none;\n  stroke-width: 0;\n  fill: ${options.mainBkg};\n  opacity: 0.5;\n}\n\n.edgeLabel .label rect {\n  fill: ${options.labelBackgroundColor};\n  opacity: 0.5;\n}\n.edgeLabel .label text {\n  fill: ${options.transitionLabelColor||options.tertiaryTextColor};\n}\n.label div .edgeLabel {\n  color: ${options.transitionLabelColor||options.tertiaryTextColor};\n}\n\n.stateLabel text {\n  fill: ${options.stateLabelColor};\n  font-size: 10px;\n  font-weight: bold;\n}\n\n.node circle.state-start {\n  fill: ${options.specialStateColor};\n  stroke: ${options.specialStateColor};\n}\n\n.node .fork-join {\n  fill: ${options.specialStateColor};\n  stroke: ${options.specialStateColor};\n}\n\n.node circle.state-end {\n  fill: ${options.innerEndBackground};\n  stroke: ${options.background};\n  stroke-width: 1.5\n}\n.end-state-inner {\n  fill: ${options.compositeBackground||options.background};\n  // stroke: ${options.background};\n  stroke-width: 1.5\n}\n\n.node rect {\n  fill: ${options.stateBkg||options.mainBkg};\n  stroke: ${options.stateBorder||options.nodeBorder};\n  stroke-width: 1px;\n}\n.node polygon {\n  fill: ${options.mainBkg};\n  stroke: ${options.stateBorder||options.nodeBorder};;\n  stroke-width: 1px;\n}\n#statediagram-barbEnd {\n  fill: ${options.lineColor};\n}\n\n.statediagram-cluster rect {\n  fill: ${options.compositeTitleBackground};\n  stroke: ${options.stateBorder||options.nodeBorder};\n  stroke-width: 1px;\n}\n\n.cluster-label, .nodeLabel {\n  color: ${options.stateLabelColor};\n}\n\n.statediagram-cluster rect.outer {\n  rx: 5px;\n  ry: 5px;\n}\n.statediagram-state .divider {\n  stroke: ${options.stateBorder||options.nodeBorder};\n}\n\n.statediagram-state .title-state {\n  rx: 5px;\n  ry: 5px;\n}\n.statediagram-cluster.statediagram-cluster .inner {\n  fill: ${options.compositeBackground||options.background};\n}\n.statediagram-cluster.statediagram-cluster-alt .inner {\n  fill: ${options.altBackground?options.altBackground:"#efefef"};\n}\n\n.statediagram-cluster .inner {\n  rx:0;\n  ry:0;\n}\n\n.statediagram-state rect.basic {\n  rx: 5px;\n  ry: 5px;\n}\n.statediagram-state rect.divider {\n  stroke-dasharray: 10,10;\n  fill: ${options.altBackground?options.altBackground:"#efefef"};\n}\n\n.note-edge {\n  stroke-dasharray: 5;\n}\n\n.statediagram-note rect {\n  fill: ${options.noteBkgColor};\n  stroke: ${options.noteBorderColor};\n  stroke-width: 1px;\n  rx: 0;\n  ry: 0;\n}\n.statediagram-note rect {\n  fill: ${options.noteBkgColor};\n  stroke: ${options.noteBorderColor};\n  stroke-width: 1px;\n  rx: 0;\n  ry: 0;\n}\n\n.statediagram-note text {\n  fill: ${options.noteTextColor};\n}\n\n.statediagram-note .nodeLabel {\n  color: ${options.noteTextColor};\n}\n.statediagram .edgeLabel {\n  color: red; // ${options.noteTextColor};\n}\n\n#dependencyStart, #dependencyEnd {\n  fill: ${options.lineColor};\n  stroke: ${options.lineColor};\n  stroke-width: 1;\n}\n\n.statediagramTitleText {\n  text-anchor: middle;\n  font-size: 18px;\n  fill: ${options.textColor};\n}\n`}}]);