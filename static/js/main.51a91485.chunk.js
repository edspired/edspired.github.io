(this.webpackJsonpedspired=this.webpackJsonpedspired||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},34:function(e,t,a){e.exports=a.p+"static/media/logo.2810a88b.svg"},35:function(e,t,a){e.exports=a.p+"static/media/features-split-image-02.3c569239.png"},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(21),o=a.n(n),l=a(11),s=a(6),c=a(2),m=function(e){var t=e.component,a=e.layout,r=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return i.a.createElement(i.a.Fragment,null,e.children)}:a,i.a.createElement(l.a,Object.assign({},r,{render:function(e){return i.a.createElement(a,null,i.a.createElement(t,e))}}))},d=a(10),u=a(3),v=a.n(u),h=a(17),p=i.a.forwardRef((function(e,t){var a=Object(r.useState)(window.innerHeight),n=Object(d.a)(a,2),o=n[0],l=n[1],s=Object(r.useState)([]),c=Object(d.a)(s,2),m=c[0],u=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},p=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),r=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=o-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,r)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(r.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(r.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",f),window.addEventListener("resize",g)),p())}),[m]);var b=function(){v()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",g))},f=Object(h.throttle)((function(){b(),p()}),30),g=Object(h.throttle)((function(){l(window.innerHeight)}),30);return Object(r.useEffect)((function(){b(),p()}),[o]),i.a.createElement(i.a.Fragment,null,e.children())}));p.propTypes={children:v.a.func.isRequired};var b=p,f=a(13),g=a(1),E=a.n(g),N=a(9),w=function(e){var t=e.className,a=e.src,n=e.width,o=e.height,l=e.alt,s=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(r.useState)(!1),u=Object(d.a)(m,2),v=u[0],h=u[1],p=Object(r.useRef)(null);Object(r.useEffect)((function(){b(p.current)}),[]);var b=function(e){var t,a,r=document.createElement("img");v||(e.style.display="none",e.before(r),r.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),r.width=e.getAttribute("width"),r.height=e.getAttribute("height"),r.style.opacity="0",e.className&&r.classList.add(e.className),r.remove(),e.style.display="")};return i.a.createElement("img",Object.assign({},s,{ref:p,className:t,src:a,width:n,height:o,alt:l,onLoad:function(){h(!0)}}))};w.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var O=w,j=function(e){var t=e.className,r=Object(c.a)(e,["className"]),n=E()("brand",t);return i.a.createElement("div",Object.assign({},r,{className:n}),i.a.createElement("h1",{className:"m-0"},i.a.createElement(N.a,{to:"/"},i.a.createElement(O,{src:a(34),alt:"Open",width:32,height:32}))))},y=function(e){var t=e.className,a=e.navPosition,n=e.hideNav,o=e.hideSignin,l=e.bottomOuterDivider,s=e.bottomDivider,m=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(r.useState)(!1),v=Object(d.a)(u,2),h=v[0],p=v[1],b=Object(r.useRef)(null),f=Object(r.useRef)(null);Object(r.useEffect)((function(){return h&&g(),document.addEventListener("keydown",O),document.addEventListener("click",y),function(){document.removeEventListener("keydown",O),document.removeEventListener("click",y),w()}}));var g=function(){document.body.classList.add("off-nav-is-active"),b.current.style.maxHeight=b.current.scrollHeight+"px",p(!0)},w=function(){document.body.classList.remove("off-nav-is-active"),b.current&&(b.current.style.maxHeight=null),p(!1)},O=function(e){h&&27===e.keyCode&&w()},y=function(e){b.current&&h&&!b.current.contains(e.target)&&e.target!==f.current&&w()},D=E()("site-header",l&&"has-bottom-divider",t);return i.a.createElement("header",Object.assign({},m,{className:D}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:E()("site-header-inner",s&&"has-bottom-divider")},i.a.createElement(j,null),!n&&i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{ref:f,className:"header-nav-toggle",onClick:h?w:g},i.a.createElement("span",{className:"screen-reader"},"Menu"),i.a.createElement("span",{className:"hamburger"},i.a.createElement("span",{className:"hamburger-inner"}))),i.a.createElement("nav",{ref:b,className:E()("header-nav",h&&"is-active")},i.a.createElement("div",{className:"header-nav-inner"},i.a.createElement("ul",{className:E()("list-reset text-xs",a&&"header-nav-".concat(a))}),!o&&i.a.createElement("ul",{className:"list-reset header-nav-right"},i.a.createElement("li",null,i.a.createElement(N.a,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:w},"Sign up")))))))))};y.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var D=y,k=function(e){var t=e.className,a=Object(c.a)(e,["className"]),r=E()("footer-nav",t);return i.a.createElement("nav",Object.assign({},a,{className:r}),i.a.createElement("ul",{className:"list-reset"},i.a.createElement("li",null,i.a.createElement("a",{href:"mailto:recruitment@edspired.ml"},"Careers")),i.a.createElement("li",null,i.a.createElement(N.a,{to:"#0"},"About us"))))},C=function(e){var t=e.className,a=Object(c.a)(e,["className"]),r=E()("footer-social",t);return i.a.createElement("div",Object.assign({},a,{className:r}),i.a.createElement("ul",{className:"list-reset"},i.a.createElement("li",null,i.a.createElement("a",{href:"https://facebook.com/"},i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Facebook"),i.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://twitter.com/"},i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Twitter"),i.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://google.com/"},i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Instagram"),i.a.createElement("g",null,i.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),i.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),i.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},x=function(e){var t=e.className,a=e.topOuterDivider,r=e.topDivider,n=Object(c.a)(e,["className","topOuterDivider","topDivider"]),o=E()("site-footer center-content-mobile",a&&"has-top-divider",t);return i.a.createElement("footer",Object.assign({},n,{className:o}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:E()("site-footer-inner",r&&"has-top-divider")},i.a.createElement("div",{className:"footer-top space-between text-xxs"},i.a.createElement(j,null),i.a.createElement(C,null)),i.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},i.a.createElement(k,null),i.a.createElement("div",{className:"footer-copyright"},"Made by ",i.a.createElement("a",{href:"https://cruip.com"},"Edspired"),". All right reserved")))))};x.defaultProps={topOuterDivider:!1,topDivider:!1};var L=x,H=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(D,{navPosition:"right",className:"reveal-from-bottom"}),i.a.createElement("main",{className:"site-content"},t),i.a.createElement(L,null))},P=a(5),A={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},S={types:Object(P.a)({},A.types),defaults:Object(P.a)({},A.defaults)},B={types:Object(P.a)({},A.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(P.a)({},A.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},T={types:Object(P.a)({},A.types,{pushLeft:v.a.bool}),defaults:Object(P.a)({},A.defaults,{pushLeft:!1})},F=function(e){var t=e.className,a=e.tag,r=e.color,n=e.size,o=e.loading,l=e.wide,s=e.wideMobile,m=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=E()("button",r&&"button-".concat(r),n&&"button-".concat(n),o&&"is-loading",l&&"button-block",s&&"button-wide-mobile",t),v=a;return i.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};F.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var z=function(e){var t=e.className,a=e.children,n=e.handleClose,o=e.show,l=e.closeHidden,s=e.video,m=e.videoTag,d=Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(r.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",h),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",h)}})),Object(r.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&n(e)},h=function(e){e.stopPropagation()},p=E()("modal",o&&"is-active",s&&"modal-video",t);return i.a.createElement(i.a.Fragment,null,o&&i.a.createElement("div",Object.assign({},d,{className:p,onClick:n}),i.a.createElement("div",{className:"modal-inner",onClick:h},s?i.a.createElement("div",{className:"responsive-video"},"iframe"===m?i.a.createElement("iframe",{title:"video",src:s,frameBorder:"0",allowFullScreen:!0}):i.a.createElement("video",{"v-else":!0,controls:!0,src:s})):i.a.createElement(i.a.Fragment,null,!l&&i.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:n}),i.a.createElement("div",{className:"modal-content"},a)))))};z.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var M=Object(P.a)({},S.defaults),I=function(e){var t=e.className,a=e.topOuterDivider,n=e.bottomOuterDivider,o=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),v=Object(r.useState)(!1),h=Object(d.a)(v,2),p=(h[0],h[1],E()("hero section center-content",a&&"has-top-divider",n&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t));E()("hero-inner section-inner",o&&"has-top-divider",l&&"has-bottom-divider");return i.a.createElement("section",Object.assign({},u,{className:p}))};I.defaultProps=M;var R=I,_=function(e){var t=e.className,a=e.data,r=e.children,n=e.tag,o=Object(c.a)(e,["className","data","children","tag"]),l=E()("section-header",t),s=n;return i.a.createElement(i.a.Fragment,null,(a.title||a.paragraph)&&i.a.createElement("div",Object.assign({},o,{className:l}),i.a.createElement("div",{className:"container-xs"},r,a.title&&i.a.createElement(s,{className:E()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&i.a.createElement("p",{className:"m-0"},a.paragraph))))};_.defaultProps={children:null,tag:"h2"};var W=_,q=Object(P.a)({},T.defaults),V=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,o=e.bottomDivider,l=e.hasBgColor,s=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=E()("features-tiles section",a&&"has-top-divider",r&&"has-bottom-divider",l&&"has-bg-color",s&&"invert-color",t);E()("features-tiles-inner section-inner pt-0",n&&"has-top-divider",o&&"has-bottom-divider"),E()("tiles-wrap center-content",m&&"push-left");return i.a.createElement("section",Object.assign({},d,{className:u}))};V.defaultProps=q;var G=V,K=Object(P.a)({},B.defaults),J=function(e){var t=e.className,r=e.topOuterDivider,n=e.bottomOuterDivider,o=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,h=e.imageFill,p=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),b=E()("features-split section",r&&"has-top-divider",n&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),f=E()("features-split-inner section-inner",o&&"has-top-divider",l&&"has-bottom-divider"),g=E()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return i.a.createElement("section",Object.assign({},p,{className:b}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:f},i.a.createElement(W,{data:{title:"An Education yesterday, An Inspiration Today, A Bright Future Tomorrow.",paragraph:"We are an ML-based startup specializing in solving the formidable challenge of how dependent businesses are on unstructured content yet lack the frameworks, systems and tools to manage it effectively. Edspired provides an enterprise-ready A.I. platform that organizes unstructured content while streamlining and automating back-office tasks. Edspired is noteworthy given its track record of helping organizations automate manual, labor-intensive, document-based workflows. Our breakthrough in solving these challenges is an approach known as transfer learning, which allows users to train machine learning models with orders of magnitude fewer data than required by traditional rule-based techniques. Edspired enables enterprises to deploy A.I. to unstructured content challenges more effectively while eliminating many common barriers to A.I. & ML adoption."},className:"center-content"}),i.a.createElement("div",{className:g},i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Choose the best, build the wisest"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Why us?"),i.a.createElement("p",{className:"m-0"},i.a.createElement("li",null,"Higher education should give both knowledge and wisdom."),i.a.createElement("li",null,"Educational system must find its guiding principle in the aims of the social order."),i.a.createElement("li",null,"It should inculcate democratic idealism among the learners."))),i.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(O,{src:a(35),alt:"Features split 02",width:528,height:396})))))))};J.defaultProps=K;var U=J,$=Object(P.a)({},T.defaults),Q=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,o=e.bottomDivider,l=e.hasBgColor,s=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=E()("testimonial section",a&&"has-top-divider",r&&"has-bottom-divider",l&&"has-bg-color",s&&"invert-color",t),v=E()("testimonial-inner section-inner",n&&"has-top-divider",o&&"has-bottom-divider"),h=E()("tiles-wrap",m&&"push-left");return i.a.createElement("section",Object.assign({},d,{className:u}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:v},i.a.createElement(W,{data:{title:"Student testimonials",paragraph:"Read our recent feedback from our dearest students"},className:"center-content"}),i.a.createElement("div",{className:h},i.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"},"\u2014 I've been so lucky to work with such great people: people that are such hard workers and have such a respect and appreciation for one another.")),i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Soumyadeep Bhowmick"),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"},"EPAM Systems"))))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"},"\u2014 By taking the time to stop and appreciate who you are and what you've achieved - and perhaps learned through a few mistakes, stumbles and losses - you actually can enhance everything about you. Self-acknowledgment and appreciation are what give you the insights and awareness to move forward toward higher goals and accomplishments.")),i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Saikumaravel Thangarajavel"),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"},"Threat Researcher at K7 Computing Pvt. Ltd.")))))))))};Q.defaultProps=$;var X=Q,Y=function(e){var t=e.className,a=e.children,r=e.labelHidden,n=e.id,o=Object(c.a)(e,["className","children","labelHidden","id"]),l=E()("form-label",r&&"screen-reader",t);return i.a.createElement("label",Object.assign({},o,{className:l,htmlFor:n}),a)};Y.defaultProps={children:null,labelHidden:!1,id:null};var Z=Y,ee=function(e){var t=e.children,a=e.className,r=e.status,n=Object(c.a)(e,["children","className","status"]),o=E()("form-hint",r&&"text-color-".concat(r),a);return i.a.createElement("div",Object.assign({},n,{className:o}),t)};ee.defaultProps={children:null,status:!1};var te=ee,ae=function(e){var t=e.className,a=e.children,r=e.label,n=e.labelHidden,o=e.type,l=e.name,s=e.status,m=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,h=e.size,p=e.placeholder,b=e.rows,f=e.hint,g=Object(c.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=E()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),w=E()("form-input",h&&"form-input-".concat(h),s&&"form-".concat(s),t),O="textarea"===o?"textarea":"input";return i.a.createElement(i.a.Fragment,null,r&&i.a.createElement(Z,{labelHidden:n,id:g.id},r),i.a.createElement("div",{className:N},i.a.createElement(O,Object.assign({},g,{type:"textarea"!==o?o:null,className:w,name:l,disabled:m,value:d,placeholder:p,rows:"textarea"===o?b:null})),a),f&&i.a.createElement(te,{status:s},f))};ae.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var re=Object(P.a)({},S.defaults,{split:!1}),ie=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,o=e.bottomDivider,l=e.hasBgColor,s=e.invertColor,m=e.split,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=E()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",r&&"has-bottom-divider",l&&"has-bg-color",s&&"invert-color",t);E()("cta-inner section-inner",n&&"has-top-divider",o&&"has-bottom-divider",m&&"cta-split");return i.a.createElement("section",Object.assign({},d,{className:u}))};ie.defaultProps=re;var ne=ie,oe=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(R,{className:"illustration-section-01"}),i.a.createElement(G,null),i.a.createElement(U,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),i.a.createElement(X,{topDivider:!0}),i.a.createElement(ne,{split:!0}))};f.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var le=function(){var e=Object(r.useRef)(),t=Object(l.f)();return Object(r.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){f.a.set({page:e}),f.a.pageview(e)}(a)}),[t]),i.a.createElement(b,{ref:e,children:function(){return i.a.createElement(l.c,null,i.a.createElement(m,{exact:!0,path:"/",component:oe,layout:H}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(36);var se=Object(s.a)();o.a.render(i.a.createElement(l.b,{history:se},i.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.51a91485.chunk.js.map