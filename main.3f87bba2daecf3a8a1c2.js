(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2mXJ":function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,i){var l,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"                    "+e.escapeExpression("function"==typeof(l=null!=(l=o(n,"name")||(null!=t?o(t,"name"):t))?l:e.hooks.helperMissing)?l.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:i,loc:{start:{line:29,column:20},end:{line:29,column:28}}}):l)+"&nbsp;&nbsp;\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var l,o=e.lambda,s=e.escapeExpression,r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\x3c!-- Шаблон модалки одного фильма --\x3e\n\n<div class="movie-container">\n    <div class="movie-image">\n        <img src="'+s(o(null!=t?r(t,"img"):t,t))+'" alt="'+s(o(null!=t?r(t,"title"):t,t))+'">\n    </div>\n    <div class="movie-description">\n        <h1 class="movie-description-title">'+s(o(null!=t?r(t,"title"):t,t))+'</h1>\n        <div class="movie-description-block">\n            <ul class="movie-description-list-left">\n                <li class="movie-description-list-left-item">Vote / Votes</li>\n                <li class="movie-description-list-left-item">Popularity</li>\n                <li class="movie-description-list-left-item">Original title</li>\n                <li class="movie-description-list-left-item">Genre</li>\n            </ul>\n            <ul class="movie-description-list-right">\n                <li class="movie-description-list-right-item">\n                    <span class="movie-rating filler">'+s(o(null!=t?r(t,"vote_average"):t,t))+'</span> /\n                    <span class="movie-vote-count filler">'+s(o(null!=t?r(t,"vote_count"):t,t))+'</span>\n                </li>\n                <li class="movie-description-list-right-item">\n                    '+s(o(null!=t?r(t,"popularity"):t,t))+'\n                </li>\n                <li class="movie-description-list-right-item">\n                    <span class="original-title">'+s(o(null!=t?r(t,"original_title"):t,t))+'</span>\n                </li>\n                <li class="movie-description-list-right-item">\n'+(null!=(l=r(n,"each").call(null!=t?t:e.nullContext||{},null!=t?r(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:28,column:20},end:{line:30,column:29}}}))?l:"")+'                </li>\n            </ul>\n        </div>\n        <div class="movie-about">\n            <p class="movie-about-title">ABOUT</p>\n            <p class="movie-about-text">'+s(o(null!=t?r(t,"overview"):t,t))+'</p>\n        </div>\n        <button class="add-to-watched active-btn-style" type="button" data-action-watched="watched"\n            data-movie-id="'+s(o(null!=t?r(t,"id"):t,t))+'">ADD TO\n            WATCHED</button>\n        <button class="add-to-queue active-btn-style" type="button" data-action-queue="queue"\n            data-movie-id="'+s(o(null!=t?r(t,"id"):t,t))+'">ADD TO\n            QUEUE</button>\n    </div>\n</div>'},useData:!0})},"Dv/5":function(e,t,n){},Dywu:function(e,t,n){e.exports=n.p+"img/empty-img.jpg"},GwTD:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){return'<div class="btn-wrapper">\n  <button id="watched-film-btn" data-watched-film-btn="watch-btn" class="btn btn-active-style" disabled>Watched</button>\n  <button id="watched-queue-btn" data-queue-film-btn="queue-btn" class="btn btn-nonactive-style">queue</button>\n</div>'},useData:!0})},QfWi:function(e,t,n){"use strict";n.r(t);const a=e=>{let t;return(n=!1)=>(t&&!n||(t=document.querySelector(e)),t)};var i={headerBtnWrapper:a("div.btn-wrapper"),body:document.querySelector("body"),upBtn:document.querySelector(".up-btn-wrapper"),gallery:document.querySelector("#gallery"),form:document.querySelector(".search-form"),input:document.querySelector(".search-field"),modalDiv:document.querySelector(".js-lightbox"),lightbox:document.querySelector(".lightbox"),overlayDiv:document.querySelector(".lightbox__overlay"),btnClose:document.querySelector(".lightbox__btn"),modalDivContent:document.querySelector(".lightbox__content"),libraryButton:document.querySelector(".library-ref"),container:document.getElementById(".container"),header:document.querySelector("#page-header"),galleryList:document.querySelector(".gallery"),watchedBtn:document.querySelector("#watched-film-btn"),homeBtn:document.querySelector(".home-ref"),pagination:document.querySelector(".pagination"),btnPage1:document.querySelector(".btn-page1"),btnPage2:document.querySelector(".btn-page2"),btnPage3:document.querySelector(".btn-page3"),btnPage4:document.querySelector(".btn-page4"),btnPage5:document.querySelector(".btn-page5"),previous:document.querySelector(".previous"),next:document.querySelector(".next"),dots1:document.querySelector(".js-dots1"),dots2:document.querySelector(".js-dots2"),btnMore:document.querySelector(".btn-load-more"),queueBtn:a("#watched-queue-btn"),watchedBtn:a("#watched-film-btn"),delMovieBtn:document.querySelectorAll("#delMovieBtn"),addToWatched:a(".add-to-watched"),addToQueue:a(".add-to-queue"),signIn:document.querySelector("#sign_in"),signOut:document.querySelector("#sign_out"),userInfo:document.querySelector(".user-info"),searchBtn:document.querySelector(".search-btn")};(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector(".team-modal-close-button"),modal:document.querySelector(".backdrop")};function t(){i.body.classList.remove("scroll-hidden"),e.closeModalBtn.removeEventListener("click",t),e.modal.classList.add("is-hidden"),e.modal.removeEventListener("click",t),window.removeEventListener("keydown",n)}function n(e){"Escape"===e.code&&t()}function a(e){e.currentTarget===e.target&&t()}e.openModalBtn.addEventListener("click",(function(){e.modal.classList.remove("is-hidden"),window.addEventListener("keydown",n),e.closeModalBtn.addEventListener("click",t),e.modal.addEventListener("click",a),i.body.classList.add("scroll-hidden")}))})();n("Dv/5");var l=n("v+qO"),o=n.n(l);var s=function(e){let t="";"404"!==e.status&&(t=o()(e)),i.gallery.insertAdjacentHTML("beforeend",t)};var r=function(e,t){return fetch(`https://api.themoviedb.org/3/search/movie?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0&language=en-US&page=${t}&include_adult=false&query=${e}`).then(e=>e.json()).catch(e=>console.log(e))},c=(n("bzha"),n("QJ3N"));n("zrP5");var d=function(e){c.notice({text:`The movie has been added to the ${e} list`,icon:!0,styling:"custom",delay:700,overlayClosesPinned:!0})};let u="",m=1;const p=[];i.btnMore.addEventListener("click",(function(){m+=1,i.searchBtn.click()}));var h=function(){i.form.addEventListener("submit",e=>{if(e.preventDefault(),u=e.currentTarget.elements.search.value,p.push(u),p[0]!==u&&(i.gallery.innerHTML="",m=1),p.reverse(),u.length>0?(i.pagination.hidden=!0,i.btnMore.style.display="block"):i.pagination.hidden=!1,console.log("page>",m),1===m&&(i.gallery.innerHTML=""),""===i.input.value)return c.error({text:"Please, fill in the query field",icon:!0,styling:"custom",delay:2e3,overlayClosesPinned:!0}),i.gallery.innerHTML="",i.pagination.hidden=!0,void(i.btnMore.style.display="none");r(u,m).then(({results:e})=>{if(console.log("search",{results:e}),0===e.length)return c.error({text:"There was found nothing for your query",icon:!0,styling:"custom",delay:2e3,overlayClosesPinned:!0}),void(i.btnMore.style.display="none");x().then(({genres:t})=>{q(e,t)})})})};var v=function(){i.gallery.innerHTML="",u.length>0?i.searchBtn.click():k()};i.pagination.addEventListener("click",(function(e){if("BUTTON"===e.target.tagName){const t=e.target.dataset.index;g=Number(t),i.previous.hidden=!0,i.dots1.hidden=!0;const n=i.btnPage1,a=i.btnPage2,l=i.btnPage3,o=i.btnPage4,s=i.btnPage5,r=i.previous,c=i.next;e.target.classList.contains("next")&&g<999&&(y.forEach(e=>e.classList.remove("active")),n.classList.add("active"),c.dataset.index=Number(c.dataset.index)+5,n.textContent=Number(n.textContent)+5,a.textContent=Number(a.textContent)+5,l.textContent=Number(l.textContent)+5,o.textContent=Number(o.textContent)+5,s.textContent=Number(s.textContent)+5,n.dataset.index=Number(n.dataset.index)+5,a.dataset.index=Number(a.dataset.index)+5,l.dataset.index=Number(l.dataset.index)+5,o.dataset.index=Number(o.dataset.index)+5,s.dataset.index=Number(s.dataset.index)+5,g=c.dataset.index),r.dataset.index=g,e.target.classList.contains("previous")&&g>5&&(c.dataset.index=Number(c.dataset.index)-5,r.dataset.index=c.dataset.index,n.textContent=Number(n.textContent)-5,a.textContent=Number(a.textContent)-5,l.textContent=Number(l.textContent)-5,o.textContent=Number(o.textContent)-5,s.textContent=Number(s.textContent)-5,n.dataset.index=Number(n.dataset.index)-5,a.dataset.index=Number(a.dataset.index)-5,l.dataset.index=Number(l.dataset.index)-5,o.dataset.index=Number(o.dataset.index)-5,s.dataset.index=Number(s.dataset.index)-5,g=r.dataset.index),console.log("currentPage>",g),e.target.classList.contains("btn")&&function(e){let t=e.target;y.forEach(e=>e.classList.remove("active")),t.classList.contains("btn")&&t.classList.add("active")}(e),v()}Number(g)>5&&(i.previous.hidden=!1,i.dots1.hidden=!1);Number(g)>995&&(i.next.hidden=!0,i.dots2.hidden=!0)}));let g=1;i.previous.hidden=!0,i.dots1.hidden=!0;let y=document.querySelectorAll(".btn");var b=n("ZEAl"),f={lines:15,length:0,width:10,radius:31,scale:1.25,corners:1,speed:1.4,rotate:0,animation:"spinner-line-fade-default",direction:1,color:"#FF6B08",fadeColor:"transparent",top:"42%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"},L=n("Dywu"),w=n.n(L);function x(){return fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0").then(e=>e.json())}function q(e,t){e.map(({id:e,poster_path:n,title:a,release_date:i,genre_ids:l})=>{const o=t.filter(e=>l.includes(e.id)).map(({name:e})=>e);o.length>3&&o.splice(3,0,"Other");const r=o.slice(0,4).join(", "),c=i.split("-")[0];let d=n?"https://image.tmdb.org/t/p/w500"+n:w.a;s([{id:e,img:d,title:a,movieGenres:r,releaseDate:c}])})}var k=function(){const e="https://api.themoviedb.org/3/trending/movie/week?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0&page="+g;var t=document.getElementById("gallery"),n=new b.a(f).spin(t);return fetch(e).then(e=>e.json()).then(({results:e})=>{x().then(({genres:t})=>{q(e,t)}).finally(()=>{n.stop()})})};n("Sokc");var S=function(e){const t=`https://api.themoviedb.org/3/movie/${e}?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0`;var n=document.querySelector(".lightbox__content"),a=new b.a(f).spin(n);return fetch(t).then(e=>e.json()).catch(e=>console.log(e)).finally(()=>{a.stop()})},E=n("2mXJ"),T=n.n(E);var B=function(e){let t="";"404"!==e.status&&(e.popularity=Math.round(e.popularity),t=T()(e)),i.modalDivContent.insertAdjacentHTML("beforeend",t)},C=n("SzhR");n("VwVG"),n("SHTW");var _={apiKey:"AIzaSyB5lNJzTc-Z4QORSfsSo5KzvK6lek8SvPI",authDomain:"filmoteka-team05.firebaseapp.com",projectId:"filmoteka-team05",storageBucket:"filmoteka-team05.appspot.com",messagingSenderId:"689167922546",appId:"1:689167922546:web:27596dcde99cd690ab99eb",measurementId:"G-5VVKZRMCCH",databaseURL:"https://filmoteka-team05-default-rtdb.firebaseio.com"},M=n("GwTD"),A=n.n(M),D=n("mZ/l"),N=n.n(D);var P=function(){console.log(i.galleryList.hasChildNodes()),i.galleryList.hasChildNodes()||(i.gallery.innerHTML="",i.galleryList.classList.add("empty-page-style"),i.galleryList.classList.remove("gallery"),i.gallery.innerHTML=`<li><h2>EMPTY<h2><p>Nothing has been added yet :(</p><img class="image" data-empty-page="empty-page" src=${N.a} alt="empty page pic"></li>`)},I=n("SJqc"),O=n.n(I);function H(){c.notice({text:"Please sign in first",icon:!0,styling:"custom",delay:1500,overlayClosesPinned:!0})}function U(e,t){C.a.database().ref("users/"+e).update({queue:t},e=>{e?console.log("Failed!"):console.log("Data added successfully!")})}function j(e,t){C.a.database().ref("users/"+e).update({watched:t},e=>{e?console.log("Failed!"):console.log("Data added successfully!")})}var W=function(e,t){"#library"===window.location.hash&&function(e,t){ae(e).then(e=>e.val()).then(n=>{if(n.watched){let a=n.watched||[];if(a.includes(t)){let e=a.indexOf(t);a.splice(e,1),console.log("new watched",a)}j(e,[...a]),i.gallery.innerHTML="",G(e)}})}(t,e.id),"#queue"===window.location.hash&&function(e,t){ae(e).then(e=>e.val()).then(n=>{if(n.queue){let a=n.queue||[];if(a.includes(t)){let e=a.indexOf(t);a.splice(e,1),console.log(e),console.log("new queue",a)}U(e,[...a]),i.gallery.innerHTML="",Q(e)}})}(t,e.id)};function G(e){ae(e).then(e=>e.val()).then(async e=>{if(i.pagination.setAttribute("hidden","true"),e.watched){let t=e.watched,n=await Promise.all(t.map(async e=>(await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0&`)).json()));i.gallery.innerHTML="",n.map(({id:e,name:t,poster_path:n,title:a,release_date:i,genres:l,vote_average:o})=>{const s=i.split("-")[0],r=l.map(({name:e})=>e).join(", ");z([{id:e,name:t,img:n?"https://image.tmdb.org/t/p/w500"+n:emptyJpg,title:a,releaseDate:s,movieGenres:r,vote_average:o}])})}else P()})}function Q(e){ae(e).then(e=>e.val()).then(async e=>{if(i.pagination.setAttribute("hidden","true"),e.queue){let t=e.queue;(await Promise.all(t.map(async e=>(await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0&`)).json()))).map(({id:e,name:t,poster_path:n,title:a,release_date:i,genres:l,vote_average:o})=>{const s=i.split("-")[0],r=l.map(({name:e})=>e).join(", ");z([{id:e,name:t,img:n?"https://image.tmdb.org/t/p/w500"+n:emptyJpg,title:a,releaseDate:s,movieGenres:r,vote_average:o}])})}else P()})}function z(e){let t="";"404"!==e.status&&(t=O()(e)),i.gallery.insertAdjacentHTML("beforeend",t)}i.gallery.addEventListener("click",e=>{if(e.target.classList.contains("delMovieBtn")){const t=e.target;console.log("Hello");const n=C.a.auth().currentUser.uid;W(t,n)}});n("KzXF");function J(){window.location.hash="#queue",i.gallery.innerHTML="",C.a.auth().currentUser.uid&&(i.gallery.classList.contains("empty-page-style")&&(i.gallery.classList.remove("empty-page-style"),i.gallery.classList.add("gallery")),Q(C.a.auth().currentUser.uid),R(i.queueBtn()),R(i.watchedBtn()),i.queueBtn().setAttribute("disabled",!0),i.watchedBtn().removeAttribute("disabled"))}function R(e){["btn-nonactive-style","btn-active-style"].map(t=>e.classList.toggle(t))}i.homeBtn.addEventListener("click",()=>{i.libraryButton.classList.contains("activ-link-style")&&(i.homeBtn.classList.add("activ-link-style"),i.libraryButton.classList.remove("activ-link-style"))});var $=function(){i.homeBtn.classList.contains("activ-link-style")&&(i.homeBtn.classList.remove("activ-link-style"),i.libraryButton.classList.add("activ-link-style")),"#library"===window.location.hash&&(i.pagination.setAttribute("hidden","true"),i.gallery.innerHTML="",G(C.a.auth().currentUser.uid)),"#queue"===window.location.hash&&(i.pagination.setAttribute("hidden","true"),i.gallery.innerHTML="",J())};const F=document.querySelector("#page-header"),V=document.querySelector(".library-ref"),Y=document.querySelector(".search-form"),K=document.querySelector(".ref-wrapper");document.querySelector(".remove");let Z="";Z=A()();const X=()=>{Y.remove();let e=i.headerBtnWrapper(!0);e&&(e.innerHTML=""),K.insertAdjacentHTML("afterend",Z),F.classList.replace("page-header","page-header-library")};V.addEventListener("click",()=>{C.a.auth().currentUser&&X()});var ee=function(){location.hash&&(X(),$())};var te,ne=function(){location.hash?C.a.auth().currentUser?ee():H():k()};function ae(e){return C.a.database().ref("/users/"+e).once("value")}function ie(e){let t=C.a.auth().currentUser;t&&ae(t.uid).then(e=>e.val()).then(t=>{if(t.watched||t.queue){console.log("we are in!");const n=t.watched,a=t.queue;console.log("ok");const l=i.addToWatched(!0),o=i.addToQueue(!0);n.includes(e)&&l.classList.contains("active-btn-style")&&(l.classList.remove("active-btn-style"),l.classList.add("inactive-btn-style"),l.textContent="ALREADY IN WATCHED",l.setAttribute("disabled","true")),a.includes(e)&&o.classList.contains("active-btn-style")&&(o.classList.remove("active-btn-style"),o.classList.add("inactive-btn-style"),o.textContent="ALREADY IN QUEUE",o.setAttribute("disabled","true"))}})}function le(){window.removeEventListener("keydown",oe),i.modalDiv.classList.remove("is-open"),i.body.classList.remove("scroll-hidden"),i.upBtn.hidden=!1}function oe(e){"Escape"===e.code&&le()}C.a.initializeApp(_),i.signIn.addEventListener("click",(function(){const e=new C.a.auth.GoogleAuthProvider;C.a.auth().signInWithPopup(e).then(e=>{e.credential.accessToken;const t=e.user,n=t.uid,a=t.displayName,i=t.email,l=t.photoURL;console.log(t),console.log("Success!"),function(){const e=C.a.auth().currentUser.uid;return C.a.database().ref("/users/"+e).once("value")}().then(e=>{e.exists()?(console.log("User exist in database"),ae(n)):(console.log("User NOT exist in database"),function(e,t,n,a){database.ref("users/"+e).set({username:t,email:n,profile_picture:a},e=>{e?console.log("Failed!"):console.log("User data saved successfully!")})}(n,a,i,l))})}).catch(e=>{e.code;const t=e.message;e.email,e.credential;console.log(t),console.log("Failed!")})})),i.signOut.addEventListener("click",(function(){C.a.auth().signOut().then(()=>{console.log("Sign-out successful."),window.location.href="index.html",ne(),i.userInfo.innerHTML="",i.userInfo.hidden=!0}).catch(e=>{console.log("An error happened")})})),i.gallery.addEventListener("click",(function(e){e.target===document.querySelectorAll(".movie-poster-lib")&&console.log(e.target);if("IMG"!==e.target.nodeName)return;if(e.target.dataset.emptyPage)return;const t=e.target;t.dataset.src;!function(e){window.addEventListener("keydown",oe),i.modalDiv.classList.add("is-open"),i.body.classList.add("scroll-hidden"),i.upBtn.hidden=!0,i.modalDivContent.innerHTML="",S(e).then(({id:e,poster_path:t,title:n,release_date:a,genre_ids:i,vote_average:l,vote_count:o,original_title:s,genres:r,overview:c,popularity:d})=>{let u=t?"https://image.tmdb.org/t/p/w500"+t:w.a;B({id:e,title:n,release_date:a,genre_ids:i,img:u,vote_average:l,vote_count:o,original_title:s,genres:r,overview:c,popularity:d})}).then(()=>ie(e))}(t.dataset.movieId)})),i.gallery.addEventListener("click",e=>{ie(e.movieId)}),i.btnClose.addEventListener("click",le),i.overlayDiv.addEventListener("click",le),h(),i.libraryButton.addEventListener("click",()=>{i.btnMore.style.display="none",i.pagination.setAttribute("hidden","true"),i.gallery.innerHTML="",C.a.auth().currentUser?(G(C.a.auth().currentUser.uid),i.homeBtn.classList.contains("activ-link-style")&&(i.homeBtn.classList.remove("activ-link-style"),i.libraryButton.classList.add("activ-link-style")),i.queueBtn().classList.contains("btn-active-style")&&(console.log("hello"),R(i.queueBtn()),R(i.watchedBtn()),i.queueBtn().toggleAttribute("disabled"),i.watchedBtn().toggleAttribute("disabled"))):H()}),i.header.addEventListener("click",e=>{e.target.dataset.queueFilmBtn&&J(),e.target.dataset.watchedFilmBtn&&(window.location.hash="#library",i.gallery.innerHTML="",C.a.auth().currentUser?G(C.a.auth().currentUser.uid):H(),R(i.watchedBtn()),R(i.queueBtn()),i.queueBtn().removeAttribute("disabled"),i.watchedBtn().setAttribute("disabled",!0))}),i.lightbox.addEventListener("click",e=>{if(e.target.dataset.actionWatched){const t=C.a.auth().currentUser;if(t){let n=t.uid,a=e.target.dataset.movieId;const l=i.addToWatched(!0);ae(n).then(e=>e.val()).then(e=>{let t=e.watched||[];t.includes(a)||(j(n,[...t,a]),d("WATCHED"))}),l.classList.contains("active-btn-style")&&(l.classList.remove("active-btn-style"),l.classList.add("inactive-btn-style"),l.textContent="ALREADY IN WATCHED",l.setAttribute("disabled","true"))}else H()}if(e.target.dataset.actionQueue){const t=C.a.auth().currentUser;if(t){let n=t.uid,a=e.target.dataset.movieId;const l=i.addToQueue(!0);ae(n).then(e=>e.val()).then(e=>{let t=e.queue||[];t.includes(a)||(U(n,[...t,a]),d("QUEUE"))}),l.classList.contains("active-btn-style")&&(l.classList.remove("active-btn-style"),l.classList.add("inactive-btn-style"),l.textContent="ALREADY IN QUEUE",l.setAttribute("disabled","true"))}else H()}}),te=ne,C.a.auth().onAuthStateChanged((function(e){if(e){const t=e.displayName,n=e.photoURL,a=e.email,l=e.uid;i.signOut.hidden=!1,i.signIn.hidden=!0,i.userInfo.hidden=!1,i.userInfo.innerHTML=`<img class="user-img" src="${n}"> \n            <div class="user-block">\n              <p class="user-name">${t}</p>\n              <p class="user-email">${a}</p>\n            </div>`,console.log("Current user: "+t,"userId: "+l),ae(l)}else i.signOut.hidden=!0,i.signIn.hidden=!1,i.userInfo.hidden=!0,i.userInfo.innerHTML="";te()}));var se=n("yWWw"),re=n.n(se);const ce=document.querySelector("[data-up-btn]");var de;window.addEventListener("scroll",re()((de=ce,function(e){pageYOffset<document.documentElement.clientHeight?de.classList.add("visually-hidden"):de.classList.remove("visually-hidden")}),250)),ce.addEventListener("click",(function(e){window.scrollTo({top:0,behavior:"smooth"})}))},SJqc:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,i){var l,o=e.lambda,s=e.escapeExpression,r=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="movie-card">\n    <div class="movie-wrapper">\n        <img class="movie-poster-lib" src="'+s(o(null!=t?d(t,"img"):t,t))+'" alt="'+s("function"==typeof(l=null!=(l=d(n,"title")||(null!=t?d(t,"title"):t))?l:c)?l.call(r,{name:"title",hash:{},data:i,loc:{start:{line:4,column:62},end:{line:4,column:71}}}):l)+'" data-movie-id="'+s("function"==typeof(l=null!=(l=d(n,"id")||(null!=t?d(t,"id"):t))?l:c)?l.call(r,{name:"id",hash:{},data:i,loc:{start:{line:4,column:88},end:{line:4,column:94}}}):l)+'">\n        <button class="delMovieBtn" id='+s(o(null!=t?d(t,"id"):t,t))+'>x</button>\n    </div>\n\n    <div class="movie-title-wrapper">\n        <h1 class="movie-title">'+s(o(null!=t?d(t,"title"):t,t))+'</h1>\n\n    </div>\n    <div class="info-wrapper">\n        <p class="movie-info">\n            '+s(o(null!=t?d(t,"movieGenres"):t,t))+" | "+s(o(null!=t?d(t,"releaseDate"):t,t))+'\n        </p>\n        <p class="vote">'+s(o(null!=t?d(t,"vote_average"):t,t))+"</p>\n\n    </div>\n\n</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var l;return null!=(l=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:1,column:0},end:{line:21,column:9}}}))?l:""},useData:!0})},Sokc:function(e,t){const n=document.querySelector("body"),a=document.querySelector(".theme-switch__toggle"),i=document.querySelector(".lightbox__content"),l="light-theme",o="dark-theme";a.addEventListener("change",()=>{n.classList.remove(l,o),i.classList.remove(l,o),a.checked?(localStorage.setItem("Theme","darkTheme"),n.classList.add(o),i.classList.add(o)):(localStorage.setItem("Theme","lightTheme"),n.classList.add(l),i.classList.add(l))}),"darkTheme"===localStorage.getItem("Theme")&&(a.setAttribute("checked",!0),n.classList.add(o),i.classList.add(o))},"mZ/l":function(e,t,n){e.exports=n.p+"img/empty-page-optimaze.png"},"v+qO":function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,i){var l,o,s=null!=t?t:e.nullContext||{},r=e.hooks.helperMissing,c="function",d=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="movie-card">\n    <img class="movie-poster" src='+d(typeof(o=null!=(o=u(n,"img")||(null!=t?u(t,"img"):t))?o:r)===c?o.call(s,{name:"img",hash:{},data:i,loc:{start:{line:5,column:34},end:{line:5,column:41}}}):o)+' alt="'+d(typeof(o=null!=(o=u(n,"title")||(null!=t?u(t,"title"):t))?o:r)===c?o.call(s,{name:"title",hash:{},data:i,loc:{start:{line:5,column:47},end:{line:5,column:56}}}):o)+'" data-movie-id="'+d(typeof(o=null!=(o=u(n,"id")||(null!=t?u(t,"id"):t))?o:r)===c?o.call(s,{name:"id",hash:{},data:i,loc:{start:{line:5,column:73},end:{line:5,column:79}}}):o)+'">\n    <h1 class="movie-title">'+d(typeof(o=null!=(o=u(n,"title")||(null!=t?u(t,"title"):t))?o:r)===c?o.call(s,{name:"title",hash:{},data:i,loc:{start:{line:6,column:28},end:{line:6,column:37}}}):o)+'</h1>\n    <p class="movie-info"> '+(null!=(l=u(n,"if").call(s,null!=t?u(t,"movieGenres"):t,{name:"if",hash:{},fn:e.program(2,i,0),inverse:e.program(4,i,0),data:i,loc:{start:{line:7,column:27},end:{line:7,column:81}}}))?l:"")+" | "+d(typeof(o=null!=(o=u(n,"releaseDate")||(null!=t?u(t,"releaseDate"):t))?o:r)===c?o.call(s,{name:"releaseDate",hash:{},data:i,loc:{start:{line:7,column:84},end:{line:7,column:99}}}):o)+"</p>\n</li>\n"},2:function(e,t,n,a,i){var l,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return e.escapeExpression("function"==typeof(l=null!=(l=o(n,"movieGenres")||(null!=t?o(t,"movieGenres"):t))?l:e.hooks.helperMissing)?l.call(null!=t?t:e.nullContext||{},{name:"movieGenres",hash:{},data:i,loc:{start:{line:7,column:46},end:{line:7,column:61}}}):l)},4:function(e,t,n,a,i){return"Genre"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var l;return"\x3c!-- Шаблон карточки фильмов --\x3e\n\n"+(null!=(l=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:3,column:0},end:{line:9,column:9}}}))?l:"")},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.3f87bba2daecf3a8a1c2.js.map