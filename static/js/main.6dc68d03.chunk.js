(this["webpackJsonpreact-pexels-wallpapers"]=this["webpackJsonpreact-pexels-wallpapers"]||[]).push([[0],{15:function(e,t,r){e.exports=r(38)},37:function(e,t,r){},38:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(13),c=r.n(o),s=r(2),l=r(3),i=r(14);var u=r.n(i).a.create({baseURL:"https://api.pexels.com/v1",headers:{Authorization:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PEXELS_API_KEY}}),p=function(){var e=Object(a.useRef)(),t=Object(a.useState)(null),r=Object(s.a)(t,2),n=r[0],o=r[1];return Object(a.useEffect)((function(){return e.current=new IntersectionObserver((function(t,r){t.forEach((function(t){if(t.isIntersecting){var r=t.target.getAttribute("data-src");t.target.setAttribute("src",r),e.current.unobserve(n)}}))}),{threshold:[.25,.5,.75,1]}),n&&e.current.observe(n),function(){return e.current.disconnect()}}),[n]),o},h=function(e){var t=e.photo,r=p();return n.a.createElement("div",{className:"p-3 rounded-lg"},n.a.createElement("img",{className:"w-full",ref:r,src:"https://via.placeholder.com/300.png",alt:t.url,"data-src":t.src.tiny}),n.a.createElement("p",{className:"text-center mt-2 text-sm"},"Photo provided by Pexels, taken by"," ",n.a.createElement("a",{href:t.photographer_url,rel:"nofollow noopener noreferrer",target:"_blank",className:"text-blue-400 hover:text-blue-600"},t.photographer)))},m=function(e,t){switch(t.type){case"success":return Object(l.a)({},e,{isLoading:!1,photos:t.photos});case"failure":return Object(l.a)({},e,{isLoading:!1,isErr:!0});default:return e}};var d=function(){var e=Object(a.useReducer)(m,{isLoading:!0,isErr:!1}),t=Object(s.a)(e,2),r=t[0],o=t[1];return Object(a.useEffect)((function(){u.get("/search?query=Cats&per_page=50").then((function(e){o({type:"success",photos:e.data.photos})})).catch((function(e){console.error("Fetch error: ",e),o({type:"failure"})}))}),[]),n.a.createElement("div",{className:"container p-4 mx-auto"},n.a.createElement("header",{className:"flex justify-between items-center py-4 flex-col md:flex-row"},n.a.createElement("h1",{className:"text-center text-xs md:text-2xl lg:text-4xl"},"Lazy Loading Images with the Intersection Observer API"),n.a.createElement("a",{className:"hover:text-blue-500",href:"https://github.com/gomorizsolt/react-pexels-wallpapers",rel:"nofollow noopener noreferrer",target:"_blank"},"GitHub")),n.a.createElement("main",null,r.isLoading?n.a.createElement("p",{className:"text-center"},"Loading ..."):n.a.createElement("div",{className:"grid grid-cols-2 gap-2"},r.photos.map((function(e){return n.a.createElement(h,{key:e.id,photo:e})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(37);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.6dc68d03.chunk.js.map