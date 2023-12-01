"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[144],{"./components/chat/ChatContainer/ChatContainer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChatDisabled:()=>ChatDisabled,Example:()=>Example,SingleMessage:()=>SingleMessage,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Example$parameters,_Example$parameters2,_ChatDisabled$paramet,_ChatDisabled$paramet2,_SingleMessage$parame,_SingleMessage$parame2,_tmp_tmp_P56aoZKWoq_owncast_web_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_tmp_tmp_P56aoZKWoq_owncast_web_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),recoil__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/recoil/es/index.js"),_ChatContainer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/chat/ChatContainer/ChatContainer.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_tmp_tmp_P56aoZKWoq_owncast_web_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"owncast/Chat/Chat messages container",component:_ChatContainer__WEBPACK_IMPORTED_MODULE_3__.ChatContainer,parameters:{chromatic:{diffThreshold:.8},docs:{description:{component:"\n- Renders a list of messages from the bottom up.\n- Auto-scrolls to the bottom as new messages come in.\n- Pauses auto-scroll when reading backlog.\n- Uses [Virtuoso](https://virtuoso.dev/) for rendering."}}}};var messages=JSON.parse('[\n        {\n            "type": "CHAT",\n            "id": "wY-MEXwnR",\n            "timestamp": "2022-04-28T20:30:27.001762726Z",\n            "user": {\n                "id": "h_5GQ6E7R",\n                "displayName": "iAmABot",\n                "displayColor": 329,\n                "createdAt": "2022-03-24T03:52:37.966584694Z",\n                "isBot": true,\n                "previousNames": [\n                    "gifted-nobel",\n                    "EliteMooseTaskForce"\n                ],\n                "nameChangedAt": "2022-04-26T23:56:05.531287897Z",\n                "scopes": [\n                    ""\n                ]\n            },\n            "body": "this is a test message"\n        },\n        {\n            "type": "CHAT",\n            "id": "VhLGEXwnR",\n            "timestamp": "2022-04-28T20:30:28.806999545Z",\n            "user": {\n                "id": "h_5GQ6E7R",\n                "displayName": "IAmABot",\n                "displayColor": 329,\n                "createdAt": "2022-03-24T03:52:37.966584694Z",\n                "previousNames": [\n                    "gifted-nobel",\n                    "EliteMooseTaskForce"\n                ],\n                "isBot": true,\n                "nameChangedAt": "2022-04-26T23:56:05.531287897Z",\n                "scopes": [\n                    ""\n                ]\n            },\n            "body": "Hit 3"\n        },\n        {\n            "type": "CHAT",\n            "id": "GguMEuw7R",\n            "timestamp": "2022-04-28T20:30:34.500150601Z",\n            "user": {\n                "id": "h_5GQ6E7R",\n                "displayName": "IAmABot",\n                "displayColor": 329,\n                "createdAt": "2022-03-24T03:52:37.966584694Z",\n                "previousNames": [\n                    "gifted-nobel",\n                    "EliteMooseTaskForce"\n                ],\n                "isBot": true,\n                "nameChangedAt": "2022-04-26T23:56:05.531287897Z",\n                "scopes": [\n                    ""\n                ]\n            },\n            "body": "Jkjk"\n        },\n        {\n            "type": "CHAT",\n            "id": "y_-VEXwnR",\n            "timestamp": "2022-04-28T20:31:32.695583044Z",\n            "user": {\n                "id": "h_5GQ6E7R",\n                "displayName": "EliteMooseTaskForce",\n                "displayColor": 329,\n                "createdAt": "2022-03-24T03:52:37.966584694Z",\n                "previousNames": [\n                    "gifted-nobel",\n                    "EliteMooseTaskForce"\n                ],\n                "nameChangedAt": "2022-04-26T23:56:05.531287897Z",\n                "scopes": [\n                    ""\n                ]\n            },\n            "body": "I\\u0026#39;m doing alright. How about you Hatnix?"\n        },\n        {\n            "type": "CHAT",\n            "id": "qAaKEuwng",\n            "timestamp": "2022-04-28T20:34:16.22275314Z",\n            "user": {\n                "id": "h_5GQ6E7R",\n                "displayName": "EliteMooseTaskForce",\n                "displayColor": 329,\n                "createdAt": "2022-03-24T03:52:37.966584694Z",\n                "previousNames": [\n                    "gifted-nobel",\n                    "EliteMooseTaskForce"\n                ],\n                "nameChangedAt": "2022-04-26T23:56:05.531287897Z",\n                "scopes": [\n                    ""\n                ]\n            },\n            "body": "Oh shiet I didn\\u0026#39;t think you would kill him"\n        },\n        {\n            "type": "CHAT",\n            "id": "8wUFEuwnR",\n            "timestamp": "2022-04-28T20:34:21.624898714Z",\n            "user": {\n                "id": "h_5GQ6E7R",\n                "displayName": "EliteMooseTaskForce",\n                "displayColor": 329,\n                "createdAt": "2022-03-24T03:52:37.966584694Z",\n                "previousNames": [\n                    "gifted-nobel",\n                    "EliteMooseTaskForce"\n                ],\n                "nameChangedAt": "2022-04-26T23:56:05.531287897Z",\n                "scopes": [\n                    ""\n                ]\n            },\n            "body": "Hahaha, ruthless"\n        },\n        {\n            "type": "CHAT",\n            "id": "onYcPuQnR",\n            "timestamp": "2022-04-28T20:34:50.671024312Z",\n            "user": {\n                "id": "h_5GQ6E7R",\n                "displayName": "EliteMooseTaskForce",\n                "displayColor": 329,\n                "createdAt": "2022-03-24T03:52:37.966584694Z",\n                "previousNames": [\n                    "gifted-nobel",\n                    "EliteMooseTaskForce"\n                ],\n                "nameChangedAt": "2022-04-26T23:56:05.531287897Z",\n                "scopes": [\n                    ""\n                ]\n            },\n            "body": "I\\u0026#39;ve never played it before"\n        },\n        {\n            "type": "CHAT",\n            "id": "kORyEXQ7R",\n            "timestamp": "2022-04-28T20:40:29.761977233Z",\n            "user": {\n                "id": "h_5GQ6E7R",\n                "displayName": "EliteMooseTaskForce",\n                "displayColor": 329,\n                "createdAt": "2022-03-24T03:52:37.966584694Z",\n                "previousNames": [\n                    "gifted-nobel",\n                    "EliteMooseTaskForce"\n                ],\n                "nameChangedAt": "2022-04-26T23:56:05.531287897Z",\n                "scopes": [\n                    ""\n                ]\n            },\n            "body": "brb real quick"\n        },\n        {\n            "type": "CHAT",\n            "id": "F3DvsuQ7g",\n            "timestamp": "2022-04-28T20:50:29.451341783Z",\n            "user": {\n                "id": "h_5GQ6E7R",\n                "displayName": "EliteMooseTaskForce",\n                "displayColor": 329,\n                "createdAt": "2022-03-24T03:52:37.966584694Z",\n                "previousNames": [\n                    "gifted-nobel",\n                    "EliteMooseTaskForce"\n                ],\n                "nameChangedAt": "2022-04-26T23:56:05.531287897Z",\n                "scopes": [\n                    ""\n                ]\n            },\n            "body": "I\\u0026#39;m back"\n        },\n        {\n            "type": "CHAT",\n            "id": "AH2vsXwnR",\n            "timestamp": "2022-04-28T20:50:33.872156152Z",\n            "user": {\n                "id": "h_5GQ6E7R",\n                "displayName": "EliteMooseTaskForce",\n                "displayColor": 329,\n                "createdAt": "2022-03-24T03:52:37.966584694Z",\n                "previousNames": [\n                    "gifted-nobel",\n                    "EliteMooseTaskForce"\n                ],\n                "nameChangedAt": "2022-04-26T23:56:05.531287897Z",\n                "scopes": [\n                    ""\n                ]\n            },\n            "body": "Whoa what happened here?"\n        },\n        {\n            "type": "CHAT",\n            "id": "xGkOsuw7R",\n            "timestamp": "2022-04-28T20:50:53.202147658Z",\n            "user": {\n                "id": "h_5GQ6E7R",\n                "displayName": "EliteMooseTaskForce",\n                "displayColor": 329,\n                "createdAt": "2022-03-24T03:52:37.966584694Z",\n                "previousNames": [\n                    "gifted-nobel",\n                    "EliteMooseTaskForce"\n                ],\n                "nameChangedAt": "2022-04-26T23:56:05.531287897Z",\n                "scopes": [\n                    ""\n                ]\n            },\n            "body": "Your dwarf was half naked."\n        },\n        {\n            "type": "CHAT",\n            "id": "opIdsuw7g",\n            "timestamp": "2022-04-28T20:50:59.631595947Z",\n            "user": {\n                "id": "h_5GQ6E7R",\n                "displayName": "EliteMooseTaskForce",\n                "displayColor": 329,\n                "createdAt": "2022-03-24T03:52:37.966584694Z",\n                "previousNames": [\n                    "gifted-nobel",\n                    "EliteMooseTaskForce"\n                ],\n                "nameChangedAt": "2022-04-26T23:56:05.531287897Z",\n                "scopes": [\n                    ""\n                ]\n            },\n            "body": "lol"\n        },\n        {\n            "type": "CHAT",\n            "id": "JpwdsuQnR",\n            "timestamp": "2022-04-28T20:51:18.065535459Z",\n            "user": {\n                "id": "vbh9gtPng",\n                "displayName": "𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™",\n                "displayColor": 276,\n                "createdAt": "2022-03-16T21:02:32.009965702Z",\n                "previousNames": [\n                    "goth-volhard",\n                    "𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™",\n                    "𝒽𝒶𝓅𝓅𝓎 𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™",\n                    "𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™",\n                    "𝓈𝓉𝒶𝒶𝓇𝒻𝒶𝒶𝓇𝑒𝑒𝓇™",\n                    "𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™"\n                ],\n                "nameChangedAt": "2022-04-14T21:51:50.97992512Z",\n                "scopes": [\n                    ""\n                ]\n            },\n            "body": "evening did i just see you running around in... nothing"\n        },\n        {\n            "type": "CHAT",\n            "id": "R4WKsXw7R",\n            "timestamp": "2022-04-28T20:51:28.064914803Z",\n            "user": {\n                "id": "vbh9gtPng",\n                "displayName": "𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™",\n                "displayColor": 276,\n                "createdAt": "2022-03-16T21:02:32.009965702Z",\n                "previousNames": [\n                    "goth-volhard",\n                    "𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™",\n                    "𝒽𝒶𝓅𝓅𝓎 𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™",\n                    "𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™",\n                    "𝓈𝓉𝒶𝒶𝓇𝒻𝒶𝒶𝓇𝑒𝑒𝓇™",\n                    "𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™"\n                ],\n                "nameChangedAt": "2022-04-14T21:51:50.97992512Z",\n                "scopes": [\n                    ""\n                ]\n            },\n            "body": "^^"\n        },\n        {\n            "type": "CHAT",\n            "id": "g-PKyXw7g",\n            "timestamp": "2022-04-28T20:51:47.936500772Z",\n            "user": {\n                "id": "h_5GQ6E7R",\n                "displayName": "EliteMooseTaskForce",\n                "displayColor": 329,\n                "createdAt": "2022-03-24T03:52:37.966584694Z",\n                "previousNames": [\n                    "gifted-nobel",\n                    "EliteMooseTaskForce"\n                ],\n                "nameChangedAt": "2022-04-26T23:56:05.531287897Z",\n                "scopes": [\n                    ""\n                ]\n            },\n            "body": "Lol Starfarer, so my eyes didnt deceive me."\n        },\n        {\n            "type": "CHAT",\n            "id": "fV8Ksuw7R",\n            "timestamp": "2022-04-28T20:51:49.588744112Z",\n            "user": {\n                "id": "h_5GQ6E7R",\n                "displayName": "EliteMooseTaskForce",\n                "displayColor": 329,\n                "createdAt": "2022-03-24T03:52:37.966584694Z",\n                "previousNames": [\n                    "gifted-nobel",\n                    "EliteMooseTaskForce"\n                ],\n                "nameChangedAt": "2022-04-26T23:56:05.531287897Z",\n                "scopes": [\n                    ""\n                ]\n            },\n            "body": "hahahaha"\n        },\n        {\n            "type": "CHAT",\n            "id": "TaStyuwnR",\n            "timestamp": "2022-04-28T20:52:38.127528579Z",\n            "user": {\n                "id": "vbh9gtPng",\n                "displayName": "𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™",\n                "displayColor": 276,\n                "createdAt": "2022-03-16T21:02:32.009965702Z",\n                "previousNames": [\n                    "goth-volhard",\n                    "𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™",\n                    "𝒽𝒶𝓅𝓅𝓎 𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™",\n                    "𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™",\n                    "𝓈𝓉𝒶𝒶𝓇𝒻𝒶𝒶𝓇𝑒𝑒𝓇™",\n                    "𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™"\n                ],\n                "nameChangedAt": "2022-04-14T21:51:50.97992512Z",\n                "scopes": [\n                    ""\n                ]\n            },\n            "body": "lol sounds nice"\n        },\n        {\n            "type": "CHAT",\n            "id": "JGposuwng",\n            "timestamp": "2022-04-28T20:53:49.329567087Z",\n            "user": {\n                "id": "GCa3J9P7R",\n                "displayName": "(ghost of)^10  * toudy49",\n                "displayColor": 147,\n                "createdAt": "2022-03-22T21:49:25.284237821Z",\n                "previousNames": [\n                    "lucid-pike",\n                    "toudy49",\n                    "ghost of toudy49",\n                    "ghost of ghost of toudy49",\n                    "ghost of ghost of ghost of toudy49",\n                    "ghost of ghost of ghost of ghost of toudy49",\n                    "ghost of ghost of ghost of ghost of ghost of toudy49",\n                    "ghost ofghost of ghost of ghost of ghost of ghost of toudy49",\n                    "ghostof ghost of ghost of ghost of ghost of ghost of toudy49",\n                    "(ghost of)^6  * toudy49",\n                    "(ghost of)^7  * toudy49",\n                    "(ghost of)^8  * toudy49",\n                    "(ghost of)^9  * toudy49",\n                    "(ghost of)^10  * toudy49"\n                ],\n                "nameChangedAt": "2022-04-11T21:01:19.938445828Z",\n                "scopes": [\n                    ""\n                ]\n            },\n            "body": "!hydrate"\n        },\n        {\n            "type": "CHAT",\n            "id": "T4tTsuwng",\n            "timestamp": "2022-04-28T20:53:49.391636551Z",\n            "user": {\n                "id": "fKINHKpnR",\n                "displayName": "hatnixbot",\n                "displayColor": 325,\n                "createdAt": "2021-11-24T08:11:32Z",\n                "previousNames": [\n                    "hatnixbot"\n                ],\n                "scopes": [\n                    "CAN_SEND_SYSTEM_MESSAGES",\n                    "CAN_SEND_MESSAGES",\n                    "HAS_ADMIN_ACCESS"\n                ]\n            },\n            "body": "test 123"\n        },\n        {\n            "type": "CHAT",\n            "id": "wUJTsuw7R",\n            "timestamp": "2022-04-28T20:53:54.073218761Z",\n            "user": {\n                "id": "GCa3J9P7R",\n                "displayName": "(ghost of)^10  * toudy49",\n                "displayColor": 147,\n                "createdAt": "2022-03-22T21:49:25.284237821Z",\n                "previousNames": [\n                    "lucid-pike",\n                    "toudy49",\n                    "ghost of toudy49",\n                    "ghost of ghost of toudy49",\n                    "ghost of ghost of ghost of toudy49",\n                    "ghost of ghost of ghost of ghost of toudy49",\n                    "ghost of ghost of ghost of ghost of ghost of toudy49",\n                    "ghost ofghost of ghost of ghost of ghost of ghost of toudy49",\n                    "ghostof ghost of ghost of ghost of ghost of ghost of toudy49",\n                    "(ghost of)^6  * toudy49",\n                    "(ghost of)^7  * toudy49",\n                    "(ghost of)^8  * toudy49",\n                    "(ghost of)^9  * toudy49",\n                    "(ghost of)^10  * toudy49"\n                ],\n                "nameChangedAt": "2022-04-11T21:01:19.938445828Z",\n                "scopes": [\n                    ""\n                ]\n            },\n            "body": "!stretch"\n        },\n        {\n            "id": "xDHBYL4Vgz",\n            "timestamp": "2022-10-05T01:50:08.178863235Z",\n            "type": "USER_JOINED",\n            "user": {\n                "id": "fg9tcCnVg",\n                "displayName": "brave-khorana",\n                "displayColor": 293,\n                "createdAt": "2022-09-25T15:27:35.444193966Z",\n                "previousNames": [\n                    "brave-khorana"\n                ],\n                "nameChangedAt": "0001-01-01T00:00:00Z",\n                "isBot": false,\n                "authenticated": false\n            }\n        },\n        {\n            "type": "CHAT",\n            "id": "S_Joyuw7R",\n            "timestamp": "2022-04-28T20:53:54.119778013Z",\n            "user": {\n                "id": "fKINHKpnR",\n                "displayName": "hatnixbot",\n                "displayColor": 325,\n                "createdAt": "2021-11-24T08:11:32Z",\n                "previousNames": [\n                    "hatnixbot"\n                ],\n                "scopes": [\n                    "CAN_SEND_SYSTEM_MESSAGES",\n                    "CAN_SEND_MESSAGES",\n                    "HAS_ADMIN_ACCESS"\n                ]\n            },\n            "body": "blah blah"\n        },\n        {\n            "body": "Bonjour gabe. What a pleasure to meet you.",\n            "id": "YZqhLYV4g",\n            "timestamp": "2022-10-05T01:47:13.909247665Z",\n            "type": "SYSTEM",\n            "user": {\n                "displayName": "Owncast TV"\n            }\n        },\n        {\n            "type": "CHAT",\n            "id": "MtYTyXwnR",\n            "timestamp": "2022-04-28T20:53:57.796985761Z",\n            "user": {\n                "id": "vbh9gtPng",\n                "displayName": "𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™",\n                "displayColor": 276,\n                "createdAt": "2022-03-16T21:02:32.009965702Z",\n                "previousNames": [\n                    "goth-volhard",\n                    "𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™",\n                    "𝒽𝒶𝓅𝓅𝓎 𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™",\n                    "𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™",\n                    "𝓈𝓉𝒶𝒶𝓇𝒻𝒶𝒶𝓇𝑒𝑒𝓇™",\n                    "𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™"\n                ],\n                "nameChangedAt": "2022-04-14T21:51:50.97992512Z",\n                "scopes": [\n                    ""\n                ]\n            },\n            "body": "heyy toudy"\n        },\n        {\n            "type": "CHAT",\n            "id": "MtYTyXwnR",\n            "timestamp": "2022-04-28T20:53:57.796985761Z",\n            "user": {\n                "id": "vbh9gtPng",\n                "displayName": "𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™",\n                "displayColor": 276,\n                "createdAt": "2022-03-16T21:02:32.009965702Z",\n                "previousNames": [\n                    "goth-volhard",\n                    "𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™",\n                    "𝒽𝒶𝓅𝓅𝓎 𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™",\n                    "𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™",\n                    "𝓈𝓉𝒶𝒶𝓇𝒻𝒶𝒶𝓇𝑒𝑒𝓇™",\n                    "𝓈𝓉𝒶𝓇𝒻𝒶𝓇𝑒𝓇™"\n                ],\n                "nameChangedAt": "2022-04-14T21:51:50.97992512Z",\n                "scopes": [\n                    ""\n                ]\n            },\n            "body": "how is everyone?"\n        },\n        {\n            "body": "Gabe Test liked that this stream went live.",\n            "id": "FTprqf0VR",\n            "image": "https://media.mastodon.cloud/accounts/avatars/000/463/008/original/d0bc0971a54ffc75.jpg",\n            "link": "https://mastodon.cloud/users/gabektest",\n            "timestamp": "2023-02-05T17:49:36.619470844-08:00",\n            "title": "gabektest@mastodon.cloud",\n            "type": "FEDIVERSE_ENGAGEMENT_LIKE",\n            "user": {\n                "displayName": "New Owncast Server"\n            }\n        }\n    ]'),AddMessagesChatExample=function AddMessagesChatExample(args){var m=args.messages,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(m),chatMessages=_useState[0],setChatMessages=_useState[1];return __jsx(recoil__WEBPACK_IMPORTED_MODULE_2__.Wh,null,__jsx("div",{style:{height:"70vh",position:"relative"}},__jsx("button",{type:"button",onClick:function onClick(){return setChatMessages([].concat((0,_tmp_tmp_P56aoZKWoq_owncast_web_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(chatMessages),[chatMessages[0]]))}},"Add message"),__jsx(_ChatContainer__WEBPACK_IMPORTED_MODULE_3__.ChatContainer,args)))};AddMessagesChatExample.displayName="AddMessagesChatExample";var Template=function Template(args){return __jsx(AddMessagesChatExample,args)};Template.displayName="Template";var Example={render:Template,args:{loading:!1,messages,usernameToHighlight:"testuser",chatUserId:"testuser",isModerator:!0,showInput:!0,chatAvailable:!0}},ChatDisabled={render:Template,args:{loading:!1,messages,usernameToHighlight:"testuser",chatUserId:"testuser",isModerator:!0,showInput:!0,chatAvailable:!1}},SingleMessage={render:Template,args:{loading:!1,messages:[messages[0]],usernameToHighlight:"testuser",chatUserId:"testuser",isModerator:!0,showInput:!0,chatAvailable:!0}};Example.parameters=_objectSpread(_objectSpread({},Example.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  render: Template,\n  args: {\n    loading: false,\n    messages,\n    usernameToHighlight: 'testuser',\n    chatUserId: 'testuser',\n    isModerator: true,\n    showInput: true,\n    chatAvailable: true\n  }\n}"},null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2=_Example$parameters2.docs)||void 0===_Example$parameters2?void 0:_Example$parameters2.source)})}),ChatDisabled.parameters=_objectSpread(_objectSpread({},ChatDisabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ChatDisabled$paramet=ChatDisabled.parameters)||void 0===_ChatDisabled$paramet?void 0:_ChatDisabled$paramet.docs),{},{source:_objectSpread({originalSource:"{\n  render: Template,\n  args: {\n    loading: false,\n    messages,\n    usernameToHighlight: 'testuser',\n    chatUserId: 'testuser',\n    isModerator: true,\n    showInput: true,\n    chatAvailable: false\n  }\n}"},null===(_ChatDisabled$paramet2=ChatDisabled.parameters)||void 0===_ChatDisabled$paramet2||null===(_ChatDisabled$paramet2=_ChatDisabled$paramet2.docs)||void 0===_ChatDisabled$paramet2?void 0:_ChatDisabled$paramet2.source)})}),SingleMessage.parameters=_objectSpread(_objectSpread({},SingleMessage.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SingleMessage$parame=SingleMessage.parameters)||void 0===_SingleMessage$parame?void 0:_SingleMessage$parame.docs),{},{source:_objectSpread({originalSource:"{\n  render: Template,\n  args: {\n    loading: false,\n    messages: [messages[0]],\n    usernameToHighlight: 'testuser',\n    chatUserId: 'testuser',\n    isModerator: true,\n    showInput: true,\n    chatAvailable: true\n  }\n}"},null===(_SingleMessage$parame2=SingleMessage.parameters)||void 0===_SingleMessage$parame2||null===(_SingleMessage$parame2=_SingleMessage$parame2.docs)||void 0===_SingleMessage$parame2?void 0:_SingleMessage$parame2.source)})})}}]);