(()=>{var e={4184:(e,t)=>{var o;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)){if(o.length){var l=a.apply(null,o);l&&e.push(l)}}else if("object"===i)if(o.toString===Object.prototype.toString)for(var r in o)n.call(o,r)&&o[r]&&e.push(r);else e.push(o.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(t,[]))||(e.exports=o)}()},9196:e=>{"use strict";e.exports=window.React},2819:e=>{"use strict";e.exports=window.lodash},9543:e=>{"use strict";e.exports=window.kadence.components},6222:e=>{"use strict";e.exports=window.kadence.helpers},9995:e=>{"use strict";e.exports=window.kadence.icons},2175:e=>{"use strict";e.exports=window.wp.blockEditor},4981:e=>{"use strict";e.exports=window.wp.blocks},5609:e=>{"use strict";e.exports=window.wp.components},9818:e=>{"use strict";e.exports=window.wp.data},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n},444:e=>{"use strict";e.exports=window.wp.primitives}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";o.r(n);const e=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"title":"Single Button","name":"kadence/singlebtn","parent":["kadence/advancedbtn"],"category":"kadence-blocks","attributes":{"uniqueID":{"type":"string","default":""},"text":{"type":"string","default":"","__experimentalRole":"content"},"link":{"type":"string","default":"","__experimentalRole":"content"},"target":{"type":"string","default":"_self","__experimentalRole":"content"},"noFollow":{"type":"boolean","default":false,"__experimentalRole":"content"},"sponsored":{"type":"boolean","default":false,"__experimentalRole":"content"},"download":{"type":"boolean","default":false,"__experimentalRole":"content"},"style":{"type":"string","default":"basic"},"sizePreset":{"type":"string","default":"standard"},"gap":{"type":"array","default":["","",""]},"width":{"type":"array","default":["","",""]},"widthUnit":{"type":"string","default":"px"},"widthType":{"type":"string","default":"auto"},"padding":{"type":"array","default":["","","",""]},"tabletPadding":{"type":"array","default":["","","",""]},"mobilePadding":{"type":"array","default":["","","",""]},"paddingUnit":{"type":"string","default":"px"},"margin":{"type":"array","default":["","","",""]},"tabletMargin":{"type":"array","default":["","","",""]},"mobileMargin":{"type":"array","default":["","","",""]},"marginUnit":{"type":"string","default":"px"},"color":{"type":"string","default":""},"background":{"type":"string","default":""},"gradient":{"type":"string","default":""},"backgroundType":{"type":"string","default":"normal"},"colorHover":{"type":"string","default":""},"backgroundHover":{"type":"string","default":""},"backgroundHoverType":{"type":"string","default":"normal"},"gradientHover":{"type":"string","default":""},"borderStyle":{"type":"array","default":[{"top":["","",""],"right":["","",""],"bottom":["","",""],"left":["","",""],"unit":"px"}]},"tabletBorderStyle":{"type":"array","default":[{"top":["","",""],"right":["","",""],"bottom":["","",""],"left":["","",""],"unit":"px"}]},"mobileBorderStyle":{"type":"array","default":[{"top":["","",""],"right":["","",""],"bottom":["","",""],"left":["","",""],"unit":"px"}]},"borderHoverStyle":{"type":"array","default":[{"top":["","",""],"right":["","",""],"bottom":["","",""],"left":["","",""],"unit":"px"}]},"tabletBorderHoverStyle":{"type":"array","default":[{"top":["","",""],"right":["","",""],"bottom":["","",""],"left":["","",""],"unit":"px"}]},"mobileBorderHoverStyle":{"type":"array","default":[{"top":["","",""],"right":["","",""],"bottom":["","",""],"left":["","",""],"unit":"px"}]},"borderRadius":{"type":"array","default":["","","",""]},"tabletBorderRadius":{"type":"array","default":["","","",""]},"mobileBorderRadius":{"type":"array","default":["","","",""]},"borderRadiusUnit":{"type":"string","default":"px"},"borderHoverRadius":{"type":"array","default":["","","",""]},"tabletBorderHoverRadius":{"type":"array","default":["","","",""]},"mobileBorderHoverRadius":{"type":"array","default":["","","",""]},"borderHoverRadiusUnit":{"type":"string","default":"px"},"icon":{"type":"string","default":""},"iconColor":{"type":"string","default":""},"iconColorHover":{"type":"string","default":""},"iconSide":{"type":"string","default":"right"},"iconHover":{"type":"boolean","default":false},"iconPadding":{"type":"array","default":["","","",""]},"iconPaddingUnit":{"type":"string","default":"px"},"tabletIconPadding":{"type":"array","default":["","","",""]},"mobileIconPadding":{"type":"array","default":["","","",""]},"iconSize":{"type":"array","default":["","",""]},"iconSizeUnit":{"type":"string","default":"px"},"onlyIcon":{"type":"array","default":[false,"",""]},"label":{"type":"string","default":""},"inheritStyles":{"type":"string","default":"fill"},"typography":{"type":"array","default":[{"size":["","",""],"sizeType":"px","lineHeight":["","",""],"lineType":"","letterSpacing":["","",""],"letterType":"px","textTransform":"","family":"","google":"","style":"","weight":"","variant":"","subset":"","loadGoogle":true}]},"displayShadow":{"type":"boolean","default":false},"displayHoverShadow":{"type":"boolean","default":false},"shadow":{"type":"array","default":[{"color":"#000000","opacity":0.2,"spread":0,"blur":2,"hOffset":1,"vOffset":1,"inset":false}]},"shadowHover":{"type":"array","default":[{"color":"#000000","opacity":0.4,"spread":0,"blur":3,"hOffset":2,"vOffset":2,"inset":false}]},"inQueryBlock":{"type":"boolean","default":false},"textUnderline":{"type":"string"},"anchor":{"type":"string"},"hideLink":{"type":"boolean","default":false},"noCustomDefaults":{"type":"boolean","default":false},"iconTitle":{"type":"string","default":""}},"supports":{"anchor":true,"ktanimate":true,"ktanimateadd":true,"ktanimatepreview":true,"ktdynamic":true,"html":false,"reusable":false,"kbMetadata":true,"kbContentLabel":"text"},"usesContext":["postId","queryId","kadence/dynamicSource","kadence/repeaterRowData","kadence/repeaterRow"]}');var t=o(9995),a=o(9196),i=o(6222),l=o(9543),r=o(4184),d=o.n(r),s=(o(2819),o(5736)),c=o(9818),u=o(9307),p=o(444);const g=(0,u.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,u.createElement)(p.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),v=window.wp.keycodes;var b=o(2175),m=o(5609);const k=window.wp.hooks;(0,o(4981).registerBlockType)("kadence/singlebtn",{...e,title:(0,s.__)("Single Button","kadence-blocks"),description:(0,s.__)("Single button within a button block","kadence-blocks"),keywords:[(0,s.__)("Button","kadence-blocks"),(0,s.__)("btn","kadence-blocks"),"KB"],icon:{src:t.advancedBtnIcon},edit:function(t){const{attributes:o,setAttributes:n,isSelected:r,context:p,clientId:y,name:h}=t,{uniqueID:f,text:S,link:C,target:w,sponsored:x,download:_,noFollow:O,sizePreset:B,padding:T,tabletPadding:E,mobilePadding:R,paddingUnit:P,color:I,background:H,backgroundType:z,gradient:U,colorHover:A,backgroundHover:F,backgroundHoverType:M,gradientHover:D,borderStyle:L,tabletBorderStyle:V,mobileBorderStyle:N,borderHoverStyle:K,tabletBorderHoverStyle:$,mobileBorderHoverStyle:q,typography:G,borderRadius:j,tabletBorderRadius:W,mobileBorderRadius:Q,borderRadiusUnit:J,borderHoverRadius:X,tabletBorderHoverRadius:Y,mobileBorderHoverRadius:Z,borderHoverRadiusUnit:ee,icon:te,iconSide:oe,iconHover:ne,width:ae,widthUnit:ie,widthType:le,displayShadow:re,shadow:de,displayHoverShadow:se,shadowHover:ce,inheritStyles:ue,iconSize:pe,iconPadding:ge,tabletIconPadding:ve,mobileIconPadding:be,iconPaddingUnit:me,onlyIcon:ke,iconColor:ye,iconColorHover:he,label:fe,marginUnit:Se,margin:Ce,iconSizeUnit:we,tabletMargin:xe,mobileMargin:_e,kadenceAOSOptions:Oe,kadenceAnimation:Be,hideLink:Te,iconTitle:Ee,textUnderline:Re,inQueryBlock:Pe,kadenceDynamic:Ie,className:He}=o;if(""!==f){const e="\x3c!-- KB:BTN:"+f+" --\x3e"+(""!==C?'<a href="'+C+'">'+S+"</a>":"<button>"+S+"</button>")+"\x3c!-- /KB:BTN:"+f+" --\x3e";(0,k.addFilter)("rank_math_content","kadence/advbtn",(t=>{const o=new RegExp("\x3c!-- KB:BTN:"+f+" --\x3e[^]*?\x3c!-- /KB:BTN:"+f+" --\x3e","g");return t.replace(o,"")+e}))}const{updateBlockAttributes:ze}=(0,c.useDispatch)(b.store),{btnsBlock:Ue,rootID:Ae}=(0,c.useSelect)((e=>{const{getBlockRootClientId:t,getBlocksByClientId:o}=e(b.store),n=t(y),a=o(n);return{btnsBlock:void 0!==a?a:"",rootID:void 0!==n?n:""}}),[y]),Fe=(e,t)=>{ze(Ae,{[e]:t})},{addUniqueID:Me}=(0,c.useDispatch)("kadenceblocks/data"),{isUniqueID:De,isUniqueBlock:Le,previewDevice:Ve,parentData:Ne}=(0,c.useSelect)((e=>({isUniqueID:t=>e("kadenceblocks/data").isUniqueID(t),isUniqueBlock:(t,o)=>e("kadenceblocks/data").isUniqueBlock(t,o),previewDevice:e("kadenceblocks/data").getPreviewDeviceType(),parentData:{rootBlock:e("core/block-editor").getBlock(e("core/block-editor").getBlockHierarchyRootClientId(y)),postId:e("core/editor")?.getCurrentPostId()?e("core/editor")?.getCurrentPostId():"",reusableParent:e("core/block-editor").getBlockAttributes(e("core/block-editor").getBlockParentsByBlockName(y,"core/block").slice(-1)[0]),editedPostId:!!e("core/edit-site")&&e("core/edit-site").getEditedPostId()}})),[y]),Ke=(0,i.mouseOverVisualizer)(),$e=(0,i.mouseOverVisualizer)();(0,u.useEffect)((()=>{(0,i.setBlockDefaults)("kadence/singlebtn",o);const e=(0,i.getPostOrFseId)(t,Ne);let a=(0,i.getUniqueId)(f,y,De,Le,e);a!==f?(o.uniqueID=a,n({uniqueID:a}),Me(a,y)):Me(f,y),n({inQueryBlock:(0,i.getInQueryBlock)(p,Pe)}),(0,k.doAction)("kadence.triggerDynamicUpdate","link","link",t)}),[]);const[qe,Ge]=(0,u.useState)("general"),[je,We]=(0,u.useState)(!1);(0,u.useEffect)((()=>{r||We(!1)}),[r]);const Qe=e=>{const t=G.map(((t,o)=>(0===o&&(t={...t,...e}),t)));n({typography:t})},Je=e=>{const t=de.map(((t,o)=>(0===o&&(t={...t,...e}),t)));n({shadow:t})},Xe=e=>{const t=ce.map(((t,o)=>(0===o&&(t={...t,...e}),t)));n({shadowHover:t})},Ye=[{value:"small",label:(0,s.__)("SM","kadence-blocks")},{value:"standard",label:(0,s.__)("MD","kadence-blocks")},{value:"large",label:(0,s.__)("LG","kadence-blocks")},{value:"xlarge",label:(0,s.__)("XL","kadence-blocks")}],Ze=[{value:"auto",label:(0,s.__)("Auto","kadence-blocks")},{value:"fixed",label:(0,s.__)("Fixed","kadence-blocks")},{value:"full",label:(0,s.__)("Full","kadence-blocks")}],et=[{value:"fill",label:(0,s.__)("Fill","kadence-blocks")},{value:"outline",label:(0,s.__)("Outline","kadence-blocks")},{value:"inherit",label:(0,s.__)("Theme","kadence-blocks")}],tt=(0,i.getPreviewSize)(Ve,void 0!==Ce?.[0]?Ce[0]:"",void 0!==xe?.[0]?xe[0]:"",void 0!==_e?.[0]?_e[0]:""),ot=(0,i.getPreviewSize)(Ve,void 0!==Ce?.[1]?Ce[1]:"",void 0!==xe?.[1]?xe[1]:"",void 0!==_e?.[1]?_e[1]:""),nt=(0,i.getPreviewSize)(Ve,void 0!==Ce?.[2]?Ce[2]:"",void 0!==xe?.[2]?xe[2]:"",void 0!==_e?.[2]?_e[2]:""),at=(0,i.getPreviewSize)(Ve,void 0!==Ce?.[3]?Ce[3]:"",void 0!==xe?.[3]?xe[3]:"",void 0!==_e?.[3]?_e[3]:""),it=Se||"px",lt=(0,i.getPreviewSize)(Ve,void 0!==T?.[0]?T[0]:"",void 0!==E?.[0]?E[0]:"",void 0!==R?.[0]?R[0]:""),rt=(0,i.getPreviewSize)(Ve,void 0!==T?.[1]?T[1]:"",void 0!==E?.[1]?E[1]:"",void 0!==R?.[1]?R[1]:""),dt=(0,i.getPreviewSize)(Ve,void 0!==T?.[2]?T[2]:"",void 0!==E?.[2]?E[2]:"",void 0!==R?.[2]?R[2]:""),st=(0,i.getPreviewSize)(Ve,void 0!==T?.[3]?T[3]:"",void 0!==E?.[3]?E[3]:"",void 0!==R?.[3]?R[3]:""),ct=(0,i.getPreviewSize)(Ve,void 0!==j?j[0]:"",void 0!==W?W[0]:"",void 0!==Q?Q[0]:""),ut=(0,i.getPreviewSize)(Ve,void 0!==j?j[1]:"",void 0!==W?W[1]:"",void 0!==Q?Q[1]:""),pt=(0,i.getPreviewSize)(Ve,void 0!==j?j[2]:"",void 0!==W?W[2]:"",void 0!==Q?Q[2]:""),gt=(0,i.getPreviewSize)(Ve,void 0!==j?j[3]:"",void 0!==W?W[3]:"",void 0!==Q?Q[3]:""),vt=(0,i.getPreviewSize)(Ve,void 0!==pe?.[0]?pe[0]:"",void 0!==pe?.[1]?pe[1]:"",void 0!==pe?.[2]?pe[2]:""),bt=(0,i.getPreviewSize)(Ve,void 0!==ge?.[0]?ge[0]:"",void 0!==ve?.[0]?ve[0]:"",void 0!==be?.[0]?be[0]:""),mt=(0,i.getPreviewSize)(Ve,void 0!==ge?.[1]?ge[1]:"",void 0!==ve?.[1]?ve[1]:"",void 0!==be?.[1]?be[1]:""),kt=(0,i.getPreviewSize)(Ve,void 0!==ge?.[2]?ge[2]:"",void 0!==ve?.[2]?ve[2]:"",void 0!==be?.[2]?be[2]:""),yt=(0,i.getPreviewSize)(Ve,void 0!==ge?.[3]?ge[3]:"",void 0!==ve?.[3]?ve[3]:"",void 0!==be?.[3]?be[3]:""),ht=(0,i.getPreviewSize)(Ve,void 0!==ae?.[0]?ae[0]:"",void 0!==ae?.[1]?ae[1]:void 0,void 0!==ae?.[2]?ae[2]:void 0),ft=(0,i.getBorderStyle)(Ve,"top",L,V,N),St=(0,i.getBorderStyle)(Ve,"right",L,V,N),Ct=(0,i.getBorderStyle)(Ve,"bottom",L,V,N),wt=(0,i.getBorderStyle)(Ve,"left",L,V,N),xt=(0,i.getBorderColor)(Ve,"top",L,V,N),_t=(0,i.getBorderColor)(Ve,"right",L,V,N),Ot=(0,i.getBorderColor)(Ve,"bottom",L,V,N),Bt=(0,i.getBorderColor)(Ve,"left",L,V,N),Tt=[L,V,N],Et=(0,i.getBorderStyle)(Ve,"top",K,$,q,Tt),Rt=(0,i.getBorderStyle)(Ve,"right",K,$,q,Tt),Pt=(0,i.getBorderStyle)(Ve,"bottom",K,$,q,Tt),It=(0,i.getBorderStyle)(Ve,"left",K,$,q,Tt),Ht=(0,i.getBorderColor)(Ve,"top",K,$,q,Tt),zt=(0,i.getBorderColor)(Ve,"right",K,$,q,Tt),Ut=(0,i.getBorderColor)(Ve,"bottom",K,$,q,Tt),At=(0,i.getBorderColor)(Ve,"left",K,$,q,Tt),Ft=(0,i.getPreviewSize)(Ve,void 0!==X?X[0]:"",void 0!==Y?Y[0]:"",void 0!==Z?Z[0]:""),Mt=(0,i.getPreviewSize)(Ve,void 0!==X?X[1]:"",void 0!==Y?Y[1]:"",void 0!==Z?Z[1]:""),Dt=(0,i.getPreviewSize)(Ve,void 0!==X?X[2]:"",void 0!==Y?Y[2]:"",void 0!==Z?Z[2]:""),Lt=(0,i.getPreviewSize)(Ve,void 0!==X?X[3]:"",void 0!==Y?Y[3]:"",void 0!==Z?Z[3]:""),Vt=(0,i.getPreviewSize)(Ve,void 0!==Ue?.[0]?.attributes?.hAlign?Ue?.[0]?.attributes?.hAlign:"",void 0!==Ue?.[0]?.attributes?.thAlign?Ue?.[0]?.attributes?.thAlign:"",void 0!==Ue?.[0]?.attributes?.mhAlign?Ue?.[0]?.attributes?.mhAlign:""),Nt=(0,i.getPreviewSize)(Ve,void 0!==Ue?.[0]?.attributes?.vAlign?Ue?.[0]?.attributes?.vAlign:"",void 0!==Ue?.[0]?.attributes?.tvAlign?Ue?.[0]?.attributes?.tvAlign:"",void 0!==Ue?.[0]?.attributes?.mvAlign?Ue?.[0]?.attributes?.mvAlign:""),Kt=(0,i.getPreviewSize)(Ve,void 0!==ke?.[0]?ke[0]:"",void 0!==ke?.[1]?ke[1]:void 0,void 0!==ke?.[2]?ke[2]:void 0);let $t;$t=void 0!==z&&"gradient"===z?U:"transparent"===H||void 0===H?void 0:(0,i.KadenceColorOutput)(H);const qt=["hideLink","link","target","download","text","sponsor"],Gt=d()({"kt-button":!0,[`kt-button-${f}`]:!0,[`kb-btn-global-${ue}`]:ue,"wp-block-button__link":ue&&"inherit"===ue,"kb-btn-has-icon":te,["kt-btn-svg-show-"+(ne?"hover":"always")]:te,"kb-btn-only-icon":Kt,[`kt-btn-size-${B||"standard"}`]:!0,[`kb-btn-underline-${Re}`]:Re,[`${He}`]:He}),jt=d()({[`kb-single-btn-${f}`]:!0,[`kt-btn-width-type-${le||"auto"}`]:!0}),Wt=(0,b.useBlockProps)({className:jt,style:{width:void 0!==le&&"fixed"===le&&"%"===(void 0!==ie?ie:"px")&&""!==ht?ht+(void 0!==ie?ie:"px"):void 0}});let Qt="0",Jt="",Xt="";const Yt="gradient"===M?D:(0,i.KadenceColorOutput)(F);void 0!==se&&se&&void 0!==ce?.[0]&&void 0!==ce?.[0].inset&&!1===ce?.[0].inset&&(Jt=(void 0!==ce?.[0].inset&&ce[0].inset?"inset ":"")+(void 0!==ce?.[0].hOffset?ce[0].hOffset:0)+"px "+(void 0!==ce?.[0].vOffset?ce[0].vOffset:0)+"px "+(void 0!==ce?.[0].blur?ce[0].blur:14)+"px "+(void 0!==ce?.[0].spread?ce[0].spread:0)+"px "+(0,i.KadenceColorOutput)(void 0!==ce?.[0].color?ce[0].color:"#000000",void 0!==ce?.[0].opacity?ce[0].opacity:1),Xt="none",Qt="0"),void 0!==se&&se&&void 0!==ce?.[0]&&void 0!==ce?.[0].inset&&!0===ce?.[0].inset&&(Xt=(void 0!==ce?.[0].inset&&ce[0].inset?"inset ":"")+(void 0!==ce?.[0].hOffset?ce[0].hOffset:0)+"px "+(void 0!==ce?.[0].vOffset?ce[0].vOffset:0)+"px "+(void 0!==ce?.[0].blur?ce[0].blur:14)+"px "+(void 0!==ce?.[0].spread?ce[0].spread:0)+"px "+(0,i.KadenceColorOutput)(void 0!==ce?.[0].color?ce[0].color:"#000000",void 0!==ce?.[0].opacity?ce[0].opacity:1),Qt=void 0!==j?j:"3",Jt="none");const Zt=(0,i.typographyStyle)(G,`.editor-styles-wrapper .wp-block-kadence-advancedbtn .kb-single-btn-${f} .kt-button-${f}`,Ve),eo=(0,a.createElement)("style",null,""!==Zt?Zt:"",`.kb-single-btn-${f} .kt-button-${f}.kb-btn-global-outline {`,!ft&&xt?"border-top-color:"+xt+";":"",!St&&_t?"border-right-color:"+_t+";":"",!wt&&Bt?"border-left-color:"+Bt+";":"",!Ct&&Ot?"border-bottom-color:"+Ot+";":"","}",`.kb-single-btn-${f} .kt-button-${f}.kb-btn-global-outline:hover {`,!Et&&Ht?"border-top-color:"+Ht+";":"",!Rt&&zt?"border-right-color:"+zt+";":"",!It&&At?"border-left-color:"+At+";":"",!Pt&&Ut?"border-bottom-color:"+Ut+";":"","}",`.kb-single-btn-${f} .kt-button-${f}:hover {`,A?"color:"+(0,i.KadenceColorOutput)(A)+"!important;":"",Jt?"box-shadow:"+Jt+"!important;":"",Et?"border-top:"+Et+"!important;":"",Rt?"border-right:"+Rt+"!important;":"",It?"border-left:"+It+"!important;":"",Pt?"border-bottom:"+Pt+"!important;":"",""!==Ft?"border-top-left-radius:"+Ft+(ee||"px")+"!important;":"",""!==Mt?"border-top-right-radius:"+Mt+(ee||"px")+"!important;":"",""!==Lt?"border-bottom-left-radius:"+Lt+(ee||"px")+"!important;":"",""!==Dt?"border-bottom-right-radius:"+Dt+(ee||"px")+"!important;":"","}",he?`.kb-single-btn-${f} .kt-button-${f}:hover .kt-btn-svg-icon { color:${(0,i.KadenceColorOutput)(he)} !important;}`:"",`.kb-single-btn-${f} .kt-button-${f}::before {`,Yt?"background:"+Yt+";":"",Xt?"box-shadow:"+Xt+";":"",Qt?"border-radius:"+Qt+"px;":"","}"),to=void 0!==Ie&&void 0!==Ie.text&&void 0!==Ie.text.enable&&Ie.text.enable,oo=["core/bold","core/italic","core/strikethrough","toolset/inline-field"],no=Ie?.text?.shouldReplace?oo:["kadence/insert-dynamic",...oo];return(0,a.createElement)("div",{...Wt},eo,(0,a.createElement)(b.BlockControls,null,(0,a.createElement)(m.ToolbarGroup,null,(0,a.createElement)(b.JustifyContentControl,{value:Vt,onChange:e=>{"Mobile"===Ve?Fe("mhAlign",e||""):"Tablet"===Ve?Fe("thAlign",e||""):Fe("hAlign",e||"center")}}),(0,a.createElement)(b.BlockVerticalAlignmentControl,{value:Nt,onChange:e=>{"Mobile"===Ve?Fe("mvAlign",e||""):"Tablet"===Ve?Fe("tvAlign",e||""):Fe("vAlign",e||"center")}})),!Te&&(0,a.createElement)(m.ToolbarGroup,null,(0,a.createElement)(m.ToolbarButton,{name:"link",icon:g,title:(0,s.__)("Link","kadence-blocks"),shortcut:v.displayShortcut.primary("k"),onClick:function(e){e.preventDefault(),We(!0)}})),(0,a.createElement)(l.CopyPasteAttributes,{attributes:o,excludedAttrs:qt,defaultAttributes:e.attributes,blockSlug:e.name,onPaste:e=>n(e)}),Boolean(Ie?.text?.shouldReplace)&&(0,a.createElement)(l.DynamicTextControl,{dynamicAttribute:"text",...t})),!Te&&r&&je&&(0,a.createElement)(l.URLInputInline,{url:C,onChangeUrl:e=>{n({link:e})},additionalControls:!0,changeTargetType:!0,opensInNewTab:void 0!==w?w:"",onChangeTarget:e=>{n({target:e})},linkNoFollow:void 0!==O&&O,onChangeFollow:e=>{n({noFollow:e})},linkSponsored:void 0!==x&&x,onChangeSponsored:e=>{n({sponsored:e})},linkDownload:void 0!==_&&_,onChangeDownload:e=>{n({download:e})},dynamicAttribute:"link",allowClear:!0,isSelected:r,attributes:o,setAttributes:n,name:h,clientId:y,context:p}),(0,i.showSettings)("allSettings","kadence/advancedbtn")&&(0,a.createElement)(u.Fragment,null,(0,a.createElement)(b.InspectorControls,null,(0,a.createElement)(l.InspectorControlTabs,{panelName:"singlebtn",setActiveTab:e=>Ge(e),activeTab:qe}),"general"===qe&&(0,a.createElement)(u.Fragment,null,(0,a.createElement)(l.KadencePanelBody,{title:(0,s.__)("Button Settings","kadence-blocks"),initialOpen:!0,panelName:"kb-adv-single-btn"},!Te&&(0,a.createElement)(l.URLInputControl,{label:(0,s.__)("Button Link","kadence-blocks"),url:C,onChangeUrl:e=>{n({link:e})},additionalControls:!0,changeTargetType:!0,opensInNewTab:void 0!==w?w:"",onChangeTarget:e=>{n({target:e})},linkNoFollow:void 0!==O&&O,onChangeFollow:e=>{n({noFollow:e})},linkSponsored:void 0!==x&&x,onChangeSponsored:e=>{n({sponsored:e})},linkDownload:void 0!==_&&_,onChangeDownload:e=>{n({download:e})},dynamicAttribute:"link",allowClear:!0,isSelected:r,attributes:o,setAttributes:n,name:h,clientId:y,context:p}),(0,a.createElement)(l.KadenceRadioButtons,{value:ue,options:et,hideLabel:!1,label:(0,s.__)("Button Inherit Styles","kadence-blocks"),onChange:e=>{n({inheritStyles:e})}}),(0,i.showSettings)("sizeSettings","kadence/advancedbtn")&&(0,a.createElement)(u.Fragment,null,(0,a.createElement)(l.KadenceRadioButtons,{value:B,options:Ye,hideLabel:!1,label:(0,s.__)("Button Size","kadence-blocks"),onChange:e=>{n({sizePreset:e})}}),(0,a.createElement)(l.KadenceRadioButtons,{value:le,options:Ze,hideLabel:!1,label:(0,s.__)("Button Width","kadence-blocks"),onChange:e=>{n({widthType:e})}}),"fixed"===le&&(0,a.createElement)("div",{className:"kt-inner-sub-section"},(0,a.createElement)(l.ResponsiveRangeControls,{label:(0,s.__)("Fixed Width","kadence-blocks"),value:void 0!==ae?.[0]?ae[0]:void 0,onChange:e=>{n({width:[e,void 0!==ae?.[1]?ae[1]:"",void 0!==ae?.[2]?ae[2]:""]})},tabletValue:void 0!==ae?.[1]?ae[1]:void 0,onChangeTablet:e=>{n({width:[void 0!==ae?.[0]?ae[0]:"",e,void 0!==ae?.[2]?ae[2]:""]})},mobileValue:void 0!==ae?.[2]?ae[2]:void 0,onChangeMobile:e=>{n({width:[void 0!==ae?.[0]?ae[0]:"",void 0!==ae?.[1]?ae[1]:"",e]})},min:0,max:"px"!==(ie||"px")?100:600,step:1,unit:ie||"px",onUnit:e=>{n({widthUnit:e})},units:["px","%"]}))))),"style"===qe&&(0,a.createElement)(u.Fragment,null,(0,i.showSettings)("colorSettings","kadence/advancedbtn")&&(0,a.createElement)(l.KadencePanelBody,{title:(0,s.__)("Button Styles","kadence-blocks"),initialOpen:!0,panelName:"kb-adv-single-btn-styles"},(0,a.createElement)(l.HoverToggleControl,{hover:(0,a.createElement)(u.Fragment,null,(0,a.createElement)(l.PopColorControl,{label:(0,s.__)("Color Hover","kadence-blocks"),value:A||"",default:"",onChange:e=>n({colorHover:e})}),(0,a.createElement)(l.BackgroundTypeControl,{label:(0,s.__)("Hover Type","kadence-blocks"),type:M||"normal",onChange:e=>n({backgroundHoverType:e}),allowedTypes:["normal","gradient"]}),"gradient"===M&&(0,a.createElement)(l.GradientControl,{value:D,onChange:e=>n({gradientHover:e}),gradients:[]}),"normal"===M&&(0,a.createElement)(l.PopColorControl,{label:(0,s.__)("Background Color","kadence-blocks"),value:F||"",default:"",onChange:e=>n({backgroundHover:e})}),(0,a.createElement)(l.ResponsiveBorderControl,{label:(0,s.__)("Border","kadence-blocks"),value:K,tabletValue:$,mobileValue:q,onChange:e=>n({borderHoverStyle:e}),onChangeTablet:e=>n({tabletBorderHoverStyle:e}),onChangeMobile:e=>n({mobileBorderHoverStyle:e})}),(0,a.createElement)(l.ResponsiveMeasurementControls,{label:(0,s.__)("Border Radius","kadence-blocks"),value:X,tabletValue:Y,mobileValue:Z,onChange:e=>n({borderHoverRadius:e}),onChangeTablet:e=>n({tabletBorderHoverRadius:e}),onChangeMobile:e=>n({mobileBorderHoverRadius:e}),unit:ee,units:["px","em","rem","%"],onUnit:e=>n({borderHoverRadiusUnit:e}),max:"em"===ee||"rem"===ee?24:500,step:"em"===ee||"rem"===ee?.1:1,min:0,isBorderRadius:!0,allowEmpty:!0}),(0,a.createElement)(l.BoxShadowControl,{label:(0,s.__)("Box Shadow","kadence-blocks"),enable:void 0!==se&&se,color:void 0!==ce&&void 0!==ce[0]&&void 0!==ce[0].color?ce[0].color:"#000000",colorDefault:"#000000",onArrayChange:(e,t)=>{Xe({color:e,opacity:t})},opacity:void 0!==ce&&void 0!==ce[0]&&void 0!==ce[0].opacity?ce[0].opacity:.2,hOffset:void 0!==ce&&void 0!==ce[0]&&void 0!==ce[0].hOffset?ce[0].hOffset:0,vOffset:void 0!==ce&&void 0!==ce[0]&&void 0!==ce[0].vOffset?ce[0].vOffset:0,blur:void 0!==ce&&void 0!==ce[0]&&void 0!==ce[0].blur?ce[0].blur:14,spread:void 0!==ce&&void 0!==ce[0]&&void 0!==ce[0].spread?ce[0].spread:0,inset:void 0!==ce&&void 0!==ce[0]&&void 0!==ce[0].inset&&ce[0].inset,onEnableChange:e=>{n({displayHoverShadow:e})},onColorChange:e=>{Xe({color:e})},onOpacityChange:e=>{Xe({opacity:e})},onHOffsetChange:e=>{Xe({hOffset:e})},onVOffsetChange:e=>{Xe({vOffset:e})},onBlurChange:e=>{Xe({blur:e})},onSpreadChange:e=>{Xe({spread:e})},onInsetChange:e=>{Xe({inset:e})}})),normal:(0,a.createElement)(u.Fragment,null,(0,a.createElement)(l.PopColorControl,{label:(0,s.__)("Color","kadence-blocks"),value:I||"",default:"",onChange:e=>n({color:e})}),(0,a.createElement)(l.BackgroundTypeControl,{label:(0,s.__)("Type","kadence-blocks"),type:z||"normal",onChange:e=>n({backgroundType:e}),allowedTypes:["normal","gradient"]}),"gradient"===z&&(0,a.createElement)(l.GradientControl,{value:U,onChange:e=>n({gradient:e}),gradients:[]}),"normal"===z&&(0,a.createElement)(l.PopColorControl,{label:(0,s.__)("Background Color","kadence-blocks"),value:H||"",default:"",onChange:e=>n({background:e})}),(0,a.createElement)(l.ResponsiveBorderControl,{label:(0,s.__)("Border","kadence-blocks"),value:L,tabletValue:V,mobileValue:N,onChange:e=>n({borderStyle:e}),onChangeTablet:e=>n({tabletBorderStyle:e}),onChangeMobile:e=>n({mobileBorderStyle:e})}),(0,a.createElement)(l.ResponsiveMeasurementControls,{label:(0,s.__)("Border Radius","kadence-blocks"),value:j,tabletValue:W,mobileValue:Q,onChange:e=>n({borderRadius:e}),onChangeTablet:e=>n({tabletBorderRadius:e}),onChangeMobile:e=>n({mobileBorderRadius:e}),unit:J,units:["px","em","rem","%"],onUnit:e=>n({borderRadiusUnit:e}),max:"em"===J||"rem"===J?24:500,step:"em"===J||"rem"===J?.1:1,min:0,isBorderRadius:!0,allowEmpty:!0}),(0,a.createElement)(l.BoxShadowControl,{label:(0,s.__)("Box Shadow","kadence-blocks"),enable:void 0!==re&&re,color:void 0!==de&&void 0!==de[0]&&void 0!==de[0].color?de[0].color:"#000000",colorDefault:"#000000",onArrayChange:(e,t)=>{Je({color:e,opacity:t})},opacity:void 0!==de&&void 0!==de[0]&&void 0!==de[0].opacity?de[0].opacity:.2,hOffset:void 0!==de&&void 0!==de[0]&&void 0!==de[0].hOffset?de[0].hOffset:0,vOffset:void 0!==de&&void 0!==de[0]&&void 0!==de[0].vOffset?de[0].vOffset:0,blur:void 0!==de&&void 0!==de[0]&&void 0!==de[0].blur?de[0].blur:14,spread:void 0!==de&&void 0!==de[0]&&void 0!==de[0].spread?de[0].spread:0,inset:void 0!==de&&void 0!==de[0]&&void 0!==de[0].inset&&de[0].inset,onEnableChange:e=>{n({displayShadow:e})},onColorChange:e=>{Je({color:e})},onOpacityChange:e=>{Je({opacity:e})},onHOffsetChange:e=>{Je({hOffset:e})},onVOffsetChange:e=>{Je({vOffset:e})},onBlurChange:e=>{Je({blur:e})},onSpreadChange:e=>{Je({spread:e})},onInsetChange:e=>{Je({inset:e})}}))})),(0,i.showSettings)("iconSettings","kadence/advancedbtn")&&(0,a.createElement)(l.KadencePanelBody,{title:(0,s.__)("Icon Settings","kadence-blocks"),initialOpen:!1,panelName:"kb-adv-single-btn-icons"},(0,a.createElement)("div",{className:"kt-select-icon-container"},(0,a.createElement)(l.KadenceIconPicker,{value:te,onChange:e=>{n({icon:e})},allowClear:!0})),(0,a.createElement)(l.SmallResponsiveControl,{label:(0,s.__)("Icon and Text Display","kadence-blocks"),desktopChildren:(0,a.createElement)(m.SelectControl,{value:void 0!==ke?.[0]&&ke[0]?"true":"false",options:[{value:"false",label:(0,s.__)("Show Icon and Text","kadence-blocks")},{value:"true",label:(0,s.__)("Show Only Icon","kadence-blocks")}],onChange:e=>{n({onlyIcon:["true"===e,void 0!==ke?.[1]?ke[1]:"",void 0!==ke?.[2]?ke[2]:""]})}}),tabletChildren:(0,a.createElement)(m.SelectControl,{value:void 0!==ke?.[1]&&ke[1]?"true":void 0!==ke?.[1]&&!1===ke[1]?"false":"",options:[{value:"",label:(0,s.__)("Inherit","kadence-blocks")},{value:"false",label:(0,s.__)("Show Icon and Text","kadence-blocks")},{value:"true",label:(0,s.__)("Show Only Icon","kadence-blocks")}],onChange:e=>{let t=e;"true"===e?t=!0:"false"===e&&(t=!1),n({onlyIcon:[void 0!==ke?.[0]?ke[0]:"",t,void 0!==ke?.[2]?ke[2]:""]})}}),mobileChildren:(0,a.createElement)(m.SelectControl,{value:void 0!==ke?.[2]&&ke[2]?"true":void 0!==ke?.[2]&&!1===ke[2]?"false":"",options:[{value:"",label:(0,s.__)("Inherit","kadence-blocks")},{value:"false",label:(0,s.__)("Show Icon and Text","kadence-blocks")},{value:"true",label:(0,s.__)("Show Only Icon","kadence-blocks")}],onChange:e=>{let t=e;"true"===e?t=!0:"false"===e&&(t=!1),n({onlyIcon:[void 0!==ke?.[0]?ke[0]:"",void 0!==ke?.[1]?ke[1]:"",t]})}})}),(0,a.createElement)(m.SelectControl,{label:(0,s.__)("Icon Location","kadence-blocks"),value:oe,options:[{value:"right",label:(0,s.__)("Right")},{value:"left",label:(0,s.__)("Left")}],onChange:e=>{n({iconSide:e})}}),(0,a.createElement)(l.ResponsiveRangeControls,{label:(0,s.__)("Icon Size","kadence-blocks"),value:void 0!==pe?.[0]?pe[0]:"",onChange:e=>{n({iconSize:[e,void 0!==pe[1]?pe[1]:"",void 0!==pe?.[2]&&pe[2]?pe[2]:""]})},tabletValue:void 0!==pe?.[1]?pe[1]:"",onChangeTablet:e=>{n({iconSize:[void 0!==pe?.[0]?pe[0]:"",e,void 0!==pe?.[2]?pe[2]:""]})},mobileValue:void 0!==pe?.[2]?pe[2]:"",onChangeMobile:e=>{n({iconSize:[void 0!==pe?.[0]?pe[0]:"",void 0!==pe?.[1]?pe[1]:"",e]})},min:0,max:"px"!==(we||"px")?12:200,step:"px"!==(we||"px")?.1:1,unit:we||"px",onUnit:e=>{n({iconSizeUnit:e})},units:["px","em","rem"]}),(0,a.createElement)(l.PopColorControl,{label:(0,s.__)("Icon Color","kadence-blocks"),value:ye||"",default:"",onChange:e=>{n({iconColor:e})},swatchLabel2:(0,s.__)("Hover Color","kadence-blocks"),value2:he||"",default2:"",onChange2:e=>{n({iconColorHover:e})}}),(0,a.createElement)(l.ResponsiveMeasureRangeControl,{label:(0,s.__)("Icon Padding","kadence-blocks"),value:void 0!==ge?ge:["","","",""],tabletValue:void 0!==ve?ve:["","","",""],mobileValue:void 0!==be?be:["","","",""],onChange:e=>n({iconPadding:e}),onChangeTablet:e=>n({tabletIconPadding:e}),onChangeMobile:e=>n({mobileIconPadding:e}),min:"em"===me||"rem"===me?-2:-200,max:"em"===me||"rem"===me?12:200,step:"em"===me||"rem"===me?.1:1,unit:me,units:["px","em","rem"],onUnit:e=>n({iconPaddingUnit:e})}),(0,a.createElement)(m.TextControl,{label:(0,s.__)("Title for screen readers","kadence-blocks"),help:(0,s.__)("If no title added screen readers will ignore, good if the icon is purely decorative.","kadence-blocks"),value:Ee,onChange:e=>{n({iconTitle:e})}})),(0,i.showSettings)("fontSettings","kadence/advancedbtn")&&(0,a.createElement)(l.KadencePanelBody,{title:(0,s.__)("Typography Settings","kadence-blocks"),initialOpen:!1,panelName:"kb-adv-btn-font-family"},(0,a.createElement)(l.TypographyControls,{fontGroup:"button",fontSize:G[0].size,onFontSize:e=>Qe({size:e}),fontSizeType:G[0].sizeType,onFontSizeType:e=>Qe({sizeType:e}),lineHeight:G[0].lineHeight,onLineHeight:e=>Qe({lineHeight:e}),lineHeightType:G[0].lineType,onLineHeightType:e=>Qe({lineType:e}),reLetterSpacing:G[0].letterSpacing,onLetterSpacing:e=>Qe({letterSpacing:e}),letterSpacingType:G[0].letterType,onLetterSpacingType:e=>Qe({letterType:e}),textTransform:G[0].textTransform,onTextTransform:e=>Qe({textTransform:e}),fontFamily:G[0].family,onFontFamily:e=>Qe({family:e}),onFontChange:e=>{Qe({family:e.value,google:e.google})},onFontArrayChange:e=>Qe(e),googleFont:G[0].google,onGoogleFont:e=>Qe({google:e}),loadGoogleFont:G[0].loadGoogle,onLoadGoogleFont:e=>Qe({loadGoogle:e}),fontVariant:G[0].variant,onFontVariant:e=>Qe({variant:e}),fontWeight:G[0].weight,onFontWeight:e=>Qe({weight:e}),fontStyle:G[0].style,onFontStyle:e=>Qe({style:e}),fontSubset:G[0].subset,onFontSubset:e=>Qe({subset:e})}),(0,a.createElement)(m.SelectControl,{label:(0,s.__)("Text Underline","kadence-blocks"),value:Re,options:[{value:"",label:(0,s.__)("Unset","kadence-blocks")},{value:"none",label:(0,s.__)("None","kadence-blocks")},{value:"underline",label:(0,s.__)("Underline","kadence-blocks")}],onChange:e=>n({textUnderline:e})}))),"advanced"===qe&&(0,a.createElement)(u.Fragment,null,(0,i.showSettings)("marginSettings","kadence/advancedbtn")&&(0,a.createElement)(u.Fragment,null,(0,a.createElement)(l.KadencePanelBody,{panelName:"kb-single-button-margin-settings"},(0,a.createElement)(l.ResponsiveMeasureRangeControl,{label:(0,s.__)("Padding","kadence-blocks"),value:T,onChange:e=>n({padding:e}),tabletValue:E,onChangeTablet:e=>n({tabletPadding:e}),mobileValue:R,onChangeMobile:e=>n({mobilePadding:e}),min:"em"===P||"rem"===P?-25:-400,max:"em"===P||"rem"===P?25:400,step:"em"===P||"rem"===P?.1:1,unit:P,units:["px","em","rem"],onUnit:e=>n({paddingUnit:e}),onMouseOver:$e.onMouseOver,onMouseOut:$e.onMouseOut}),(0,a.createElement)(l.ResponsiveMeasureRangeControl,{label:(0,s.__)("Margin","kadence-blocks"),value:Ce,onChange:e=>n({margin:e}),tabletValue:xe,onChangeTablet:e=>n({tabletMargin:e}),mobileValue:_e,onChangeMobile:e=>n({mobileMargin:e}),min:"em"===Se||"rem"===Se?-25:-400,max:"em"===Se||"rem"===Se?25:400,step:"em"===Se||"rem"===Se?.1:1,unit:Se,units:["px","em","rem"],onUnit:e=>n({marginUnit:e}),onMouseOver:Ke.onMouseOver,onMouseOut:Ke.onMouseOut,allowAuto:!0}),(0,a.createElement)(m.TextControl,{label:(0,s.__)("Add Aria Label","kadence-blocks"),value:fe||"",onChange:e=>n({label:e}),className:"kb-textbox-style"})),(0,a.createElement)("div",{className:"kt-sidebar-settings-spacer"})),(0,a.createElement)(l.KadenceBlockDefaults,{attributes:o,defaultAttributes:e.attributes,blockSlug:e.name,excludedAttrs:qt}))),(0,a.createElement)(l.DynamicInlineReplaceControl,{dynamicAttribute:"text",...t})),(0,a.createElement)("div",{id:`animate-id${f}`,className:"btn-inner-wrap aos-animate kt-animation-wrap","data-aos":Be||void 0,"data-aos-duration":Oe&&Oe[0]&&Oe[0].duration?Oe[0].duration:void 0,"data-aos-easing":Oe&&Oe[0]&&Oe[0].easing?Oe[0].easing:void 0},(0,a.createElement)("span",{className:Gt,style:{paddingTop:""!==lt?(0,i.getSpacingOptionOutput)(lt,P):void 0,paddingRight:""!==rt?(0,i.getSpacingOptionOutput)(rt,P):void 0,paddingBottom:""!==dt?(0,i.getSpacingOptionOutput)(dt,P):void 0,paddingLeft:""!==st?(0,i.getSpacingOptionOutput)(st,P):void 0,marginTop:""!==tt?(0,i.getSpacingOptionOutput)(tt,it):void 0,marginRight:""!==ot?(0,i.getSpacingOptionOutput)(ot,it):void 0,marginBottom:""!==nt?(0,i.getSpacingOptionOutput)(nt,it):void 0,marginLeft:""!==at?(0,i.getSpacingOptionOutput)(at,it):void 0,borderTop:ft||void 0,borderRight:St||void 0,borderBottom:Ct||void 0,borderLeft:wt||void 0,borderTopLeftRadius:""!==ct?ct+(J||"px"):void 0,borderTopRightRadius:""!==ut?ut+(J||"px"):void 0,borderBottomRightRadius:""!==pt?pt+(J||"px"):void 0,borderBottomLeftRadius:""!==gt?gt+(J||"px"):void 0,boxShadow:void 0!==re&&re&&void 0!==de&&void 0!==de[0]&&void 0!==de[0].color?(void 0!==de[0].inset&&de[0].inset?"inset ":"")+(void 0!==de[0].hOffset?de[0].hOffset:0)+"px "+(void 0!==de[0].vOffset?de[0].vOffset:0)+"px "+(void 0!==de[0].blur?de[0].blur:14)+"px "+(void 0!==de[0].spread?de[0].spread:0)+"px "+(0,i.KadenceColorOutput)(void 0!==de[0].color?de[0].color:"#000000",void 0!==de[0].opacity?de[0].opacity:1):void 0,background:void 0!==$t?$t:void 0,color:void 0!==I?(0,i.KadenceColorOutput)(I):void 0,width:void 0!==le&&"fixed"===le&&"px"===(void 0!==ie?ie:"px")&&""!==ht?ht+(void 0!==ie?ie:"px"):void 0}},te&&"left"===oe&&(0,a.createElement)(l.IconRender,{className:`kt-btn-svg-icon kt-btn-svg-icon-${te} kt-btn-side-${oe}`,name:te,size:"1em",style:{fontSize:vt?(0,i.getFontSizeOptionOutput)(vt,void 0!==we?we:"px"):void 0,color:""!==ye?(0,i.KadenceColorOutput)(ye):void 0,paddingTop:bt?(0,i.getSpacingOptionOutput)(bt,me):void 0,paddingRight:mt?(0,i.getSpacingOptionOutput)(mt,me):void 0,paddingBottom:kt?(0,i.getSpacingOptionOutput)(kt,me):void 0,paddingLeft:yt?(0,i.getSpacingOptionOutput)(yt,me):void 0}}),!to&&(0,a.createElement)(b.RichText,{tagName:"div",placeholder:(0,s.__)("Button...","kadence-blocks"),value:S,onChange:e=>n({text:e}),allowedFormats:(0,k.applyFilters)("kadence.whitelist_richtext_formats",no,"kadence/advancedbtn"),className:"kt-button-text",keepPlaceholderOnFocus:!0}),to&&(0,a.createElement)(u.Fragment,null,(0,k.applyFilters)("kadence.dynamicContent",(0,a.createElement)(m.Spinner,null),o,"text",n,p)),te&&"left"!==oe&&(0,a.createElement)(l.IconRender,{className:`kt-btn-svg-icon kt-btn-svg-icon-${te} kt-btn-side-${oe}`,name:te,size:"1em",style:{fontSize:vt?(0,i.getFontSizeOptionOutput)(vt,void 0!==we?we:"px"):void 0,color:""!==ye?(0,i.KadenceColorOutput)(ye):void 0,paddingTop:bt?(0,i.getSpacingOptionOutput)(bt,me):void 0,paddingRight:mt?(0,i.getSpacingOptionOutput)(mt,me):void 0,paddingBottom:kt?(0,i.getSpacingOptionOutput)(kt,me):void 0,paddingLeft:yt?(0,i.getSpacingOptionOutput)(yt,me):void 0}}),(0,a.createElement)(l.SpacingVisualizer,{type:"inside",forceShow:$e.isMouseOver,spacing:[(0,i.getSpacingOptionOutput)(lt,P),(0,i.getSpacingOptionOutput)(rt,P),(0,i.getSpacingOptionOutput)(dt,P),(0,i.getSpacingOptionOutput)(st,P)]})),(0,a.createElement)(l.SpacingVisualizer,{type:"inside",forceShow:Ke.isMouseOver,spacing:[(0,i.getSpacingOptionOutput)(tt,it),(0,i.getSpacingOptionOutput)(ot,it),(0,i.getSpacingOptionOutput)(nt,it),(0,i.getSpacingOptionOutput)(at,it)]}),G?.[0]?.google&&(0,a.createElement)(l.KadenceWebfontLoader,{typography:G,clientId:y,id:"typography"})))},save:()=>null,example:{attributes:{text:(0,s.__)("Click Me!","kadence-blocks")}}})})(),(this.kadence=this.kadence||{})["blocks-singlebtn"]=n})();