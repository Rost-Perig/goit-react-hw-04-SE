(this["webpackJsonpgoit-react-hw-04-SE"]=this["webpackJsonpgoit-react-hw-04-SE"]||[]).push([[0],{10:function(e,t,r){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3LYS2",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3olG-",homePageUrl:"ImageGalleryItem_homePageUrl__1BoYu",homeIcon:"ImageGalleryItem_homeIcon__3Gfhq"}},18:function(e,t,r){e.exports={SearchForm:"Searchbar_SearchForm__3bCm9",SearchFormButton:"Searchbar_SearchFormButton__Cy5Un",SearchFormInput:"Searchbar_SearchFormInput__2vu-K"}},21:function(e,t,r){e.exports={Overlay:"Modal_Overlay__1F42f",Modal:"Modal_Modal__157gd"}},30:function(e,t,r){e.exports={topBar:"TopBar_topBar__2iXTN"}},32:function(e,t,r){e.exports={loaderBox:"Spiner_loaderBox__33xoH"}},33:function(e,t,r){e.exports={ImageGallery:"ImageGallery_ImageGallery__2hNPW"}},37:function(e,t,r){e.exports={loadMoreButton:"ButtonMore_loadMoreButton__2j4Yf"}},39:function(e,t,r){e.exports={btnToTop:"BtnToTop_btnToTop__2x6OO","hide-el":"BtnToTop_hide-el__2kg3F"}},44:function(e,t,r){},47:function(e,t,r){},7:function(e,t,r){e.exports={scrollToggle:"ScrollToggle_scrollToggle__3ZuVT",buttonFrame:"ScrollToggle_buttonFrame__1X0Kd",scrollButton:"ScrollToggle_scrollButton__wKYsS",itemText:"ScrollToggle_itemText__u2c8H",scrollName:"ScrollToggle_scrollName__2vjaa"}},88:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),c=r(8),o=r.n(c),s=(r(44),r(45),r(6)),l=r.n(s),i=r(19),u=r(9),m=r(4),h=(r(47),r(17)),j=(r(48),r(30)),d=r.n(j),g=r(2),b=function(e){var t=e.children;return Object(g.jsx)("div",{className:d.a.topBar,children:t})},f=r(15),p=r(18),O=r.n(p),x=function(e){var t=e.searchQueryToUp,r=Object(a.useState)("hdr"),n=Object(m.a)(r,2),c=n[0],o=n[1],s=Object(a.useRef)();Object(a.useEffect)((function(){""!==c.trim()&&(t(c),s.current.placeholder=c,o(""))}),[]);return Object(g.jsxs)("form",{className:O.a.SearchForm,onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),s.current.placeholder=c,o("")):h.b.warn("\u0412\u0432\u0435\u0434\u0438 \u0447\u0442\u043e-\u0442\u043e!",{autoClose:2e3,theme:"colored",icon:!1})},children:[Object(g.jsx)("button",{type:"submit",className:O.a.SearchFormButton,children:Object(g.jsx)(f.b,{})}),Object(g.jsx)("label",{children:Object(g.jsx)("input",{className:O.a.SearchFormInput,type:"text",name:"searchInput",ref:s,placeholder:"search",value:c,onChange:function(e){return o(e.currentTarget.value)},pattern:"^[0-9a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u041f\u043e\u0438\u0441\u043a\u043e\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435, \u0446\u0438\u0444\u0440 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432."})})]})},v=r(31),_=r.n(v),y=r(32),I=r.n(y),S=function(){return Object(g.jsx)("div",{className:I.a.loaderBox,children:Object(g.jsx)(_.a,{type:"Circles",color:"#617a53",height:160,width:160,timeout:5e3})})},T=r(33),N=r.n(T),w=function(e){var t=e.children;return Object(g.jsx)("ul",{id:"gallery",className:N.a.ImageGallery,children:t})},E=r(10),k=r.n(E),B=function(e){var t=e.contactObj,r=e.imgIdToUp,a=t.webformatURL,n=t.tags,c=t.largeImageURL,o=t.id,s=t.pageURL;return Object(g.jsxs)("li",{className:k.a.ImageGalleryItem,children:[Object(g.jsx)("a",{href:c,id:o,className:k.a.ImageGalleryItemLink,onClick:function(e){return e.preventDefault(),r(e.currentTarget.id)},children:Object(g.jsx)("img",{src:a,alt:n,className:k.a.ImageGalleryItemImage})}),Object(g.jsx)("a",{href:s,className:k.a.homePageUrl,target:"_blank",rel:"noreferrer",children:Object(g.jsx)(f.a,{className:k.a.homeIcon})})]})},U=r(34),F=r(35),L=r(36),C=r.n(L),G=function(){function e(){Object(U.a)(this,e),this.searchQuery="",this.KEY="22984321-98218ca8e9b1f3be57a008ac4&q",this.BASE_URL="https://pixabay.com/api/",this.page=1,this.orientation="all",this.imgType="all"}return Object(F.a)(e,[{key:"fetchImages",value:function(){var e=Object(u.a)(l.a.mark((function e(t,r){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.searchQuery=t,this.page=r,a="".concat(this.BASE_URL,"?image_type=").concat(this.imgType,"&orientation=").concat(this.orientation,"&page=").concat(this.page,"&per_page=12&key=").concat(this.KEY,"&q=").concat(this.searchQuery),e.next=5,C.a.get(a);case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),e}(),R=new G,M=r(37),q=r.n(M),H=function(e){var t=e.clickOn;return Object(g.jsx)("button",{type:"button",className:q.a.loadMoreButton,onClick:function(){return t(!0)},children:"Load more"})},Y=r(21),A=r.n(Y),K=document.querySelector("#modal-root"),P=function(e){var t=e.closeModalClick,r=(e.changeImg,e.closeModalEsc),n=(e.modalOn,e.changeImgKey,e.children);Object(a.useEffect)((function(){window.addEventListener("keydown",(function(e){return o(e)}))}));var o=function(e){"Escape"===e.code&&r()};return Object(c.createPortal)(Object(g.jsx)("div",{className:A.a.Overlay,onClick:function(e){e.target===e.currentTarget&&t(!0)},children:Object(g.jsx)("div",{className:A.a.Modal,children:n})}),K)},Q=r(38),D=r(16),Z=r(39),z=r.n(Z),W=function(){var e=Object(a.useState)("hide"),t=Object(m.a)(e,2),r=t[0],n=t[1];Object(a.useEffect)((function(){window.addEventListener("scroll",Object(Q.a)(500,(function(e){return c()})))}));var c=function(){var e=window.scrollY;n(e>140?"visible":"hide")};return Object(g.jsxs)(g.Fragment,{children:["visible"===r&&Object(g.jsx)("button",{type:"button",className:z.a.btnToTop,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(g.jsx)(D.a,{})}),Object(g.jsx)(g.Fragment,{})]})},X=r(7),J=r.n(X),V=function(e){var t=e.toggleScroll,r=e.position;return Object(g.jsxs)("div",{className:J.a.scrollToggle,children:[Object(g.jsx)("span",{className:J.a.scrollName,children:"ENDLESS SCROLL"}),Object(g.jsxs)("div",{className:J.a.buttonFrame,children:[Object(g.jsx)("span",{className:J.a.itemText,children:"ON"}),Object(g.jsx)("span",{className:J.a.itemText,children:"OFF"}),Object(g.jsx)("button",{type:"button",className:J.a.scrollButton,style:r?{right:"2px"}:{left:"2px"},onClick:function(){return t(!r)},children:Object(g.jsx)(D.b,{})})]})]})};var $=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)("pending"),o=Object(m.a)(c,2),s=o[0],j=o[1],d=Object(a.useState)(0),f=Object(m.a)(d,2),p=f[0],O=f[1],v=Object(a.useState)(1),_=Object(m.a)(v,2),y=_[0],I=_[1],T=Object(a.useState)([]),N=Object(m.a)(T,2),E=N[0],k=N[1],U=Object(a.useState)(!1),F=Object(m.a)(U,2),L=F[0],C=F[1],G=Object(a.useState)(""),M=Object(m.a)(G,2),q=M[0],Y=M[1],A=Object(a.useState)(""),K=Object(m.a)(A,2),Q=K[0],D=K[1],Z=Object(a.useState)(0),z=Object(m.a)(Z,2),X=z[0],J=z[1],$=Object(a.useState)(0),ee=Object(m.a)($,2),te=ee[0],re=ee[1],ae=Object(a.useState)(!1),ne=Object(m.a)(ae,2),ce=ne[0],oe=ne[1];Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.fetchImages(r,1);case 3:t=e.sent,k(Object(i.a)(t.data.hits)),O(t.data.totalHits),j((function(){return 0===t.data.totalHits?"rejected":"resolved"})),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),console.log("Error: request failed"),e.abrupt("return",j("failed"));case 13:case 14:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]),Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.fetchImages(r,y);case 3:if(0!==(t=e.sent).data.hits.length){e.next=6;break}return e.abrupt("return");case 6:k((function(e){return[].concat(Object(i.a)(e),Object(i.a)(t.data.hits))})),O(t.data.totalHits),e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),console.log("Error: request failed"),e.abrupt("return",j("failed"));case 14:case 15:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}1!==y&&function(){e.apply(this,arguments)}()}),[r,y]),Object(a.useEffect)((function(){setTimeout((function(){if(1!==y&&!ce){var e=te+60;window.scrollTo({top:e,behavior:"smooth"})}}),600)}),[te,y,ce]),Object(a.useEffect)((function(){if(0!==E.length&&ce){var e=E[E.length-1].id;setTimeout((function(){var t=document.getElementById(e);new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(re(0!==E.length&&document.querySelector('[id="gallery"]').offsetHeight),I((function(e){return e+1})),t.unobserve(e.target))}))}),{threshold:.2}).observe(t)}),600)}}),[E,ce]);var se=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(document.querySelector('[id="gallery"]').offsetHeight),re(0!==E.length&&document.querySelector('[id="gallery"]').offsetHeight),I((function(e){return e+1}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=function(){return C(!L)},ie=function(e){var t=function(e,t){var r=t.findIndex((function(t){return t.id===Number.parseInt(e)}));return{lrgImgURL:t[r].largeImageURL,imgTags:t[r].tags,imgNo:t[r].id}}(e,E),r=t.lrgImgURL,a=t.imgTags,n=t.imgNo;C(!L),J(n),Y(r),D(a)},ue=function(e){var t=function(e,t,r){var a="";return e>=window.innerWidth/2&&(a="right"),e<window.innerWidth/2&&(a="left"),function(e,t,r){var a=r.findIndex((function(e){return e.id===t})),n=0;return{lrgImgURL:r[n="right"===e?a===r.length-1?0:a+1:0===a?r.length-1:a-1].largeImageURL,imgTags:r[n].tags,imgNo:r[n].id}}(a,t,r)}(e,X,E),r=t.lrgImgURL,a=t.imgTags,n=t.imgNo;J(n),Y(r),D(a)};return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)(b,{children:[Object(g.jsx)("h1",{className:"serviceTitle",children:"search images"}),Object(g.jsx)(x,{searchQueryToUp:function(e){n(e),I(1)}}),Object(g.jsx)(V,{toggleScroll:function(e){return oe(e)},position:ce})]}),"idle"===s&&Object(g.jsx)("h2",{className:"galleryTitle",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441"}),"pending"===s&&Object(g.jsx)(S,{}),"rejected"===s&&Object(g.jsxs)("h2",{className:"galleryTitle",children:['\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 "',r.toUpperCase(),'" \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e']}),"failed"===s&&Object(g.jsx)("h2",{className:"galleryTitle",children:"Error: request failed. \u041d\u0435\u0442 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c"}),"resolved"===s&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("h2",{className:"galleryTitle",children:["\u041d\u0430\u0439\u0434\u0435\u043d\u043e ",p,' \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 "',r.toUpperCase(),'":']}),Object(g.jsx)(w,{children:E.map((function(e){var t=e.id;return Object(g.jsx)(B,{contactObj:e,imgIdToUp:ie},t)}))}),console.log("!RENDER!")]}),"resolved"===s&&12*y<p&&!ce&&Object(g.jsx)(H,{clickOn:se}),12*y>=p&&"resolved"===s&&Object(g.jsxs)("h2",{className:"galleryTitle",children:['\u0417\u0430\u043f\u0440\u043e\u0441 "',r.toUpperCase(),'" \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d']}),Object(g.jsx)(h.a,{}),Object(g.jsx)(W,{}),L&&Object(g.jsx)(P,{closeModalClick:function(e){e&&le()},closeModalEsc:le,changeImg:ue,modalOn:L,children:Object(g.jsx)("img",{src:q,alt:Q,className:"modalImg",onClick:function(e){return ue(e.clientX)}})})]})};o.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)($,{})}),document.getElementById("root")),console.log("\u041f\u0440\u0438\u0432\u0456\u0442, \u0441\u0432\u0456\u0442! \u0416\u0438\u0442\u0442\u044f \u0445\u0438\u043c\u0435\u0440\u043d\u0435!")}},[[88,1,2]]]);
//# sourceMappingURL=main.c8440379.chunk.js.map