(function(){"use strict";var e={7253:function(e,t,r){var n={};r.r(n),r.d(n,{fork:function(){return he},home:function(){return G},logo:function(){return Ze},signOut:function(){return Se},star:function(){return pe},triangle:function(){return ae}});var a=r(9963),s=r(6252);function o(e,t,r,n,a,o){const i=(0,s.up)("feeds");return(0,s.wg)(),(0,s.j4)(i)}const i={class:"topline"},c={class:"stories"},l={class:"x-container page-content"},u={class:"feeds"};function p(e,t,r,n,a,o){const p=(0,s.up)("page-header"),d=(0,s.up)("mainMenu"),m=(0,s.up)("story-user-item"),C=(0,s.up)("topline"),v=(0,s.up)("repository"),f=(0,s.up)("feed");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",i,[(0,s.Wm)(C,null,{headline:(0,s.w5)((()=>[(0,s.Wm)(p),(0,s.Wm)(d)])),content:(0,s.w5)((()=>[(0,s._)("ul",c,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.stories,(e=>((0,s.wg)(),(0,s.iD)("li",{class:"stories-item",key:e.id},[(0,s.Wm)(m,{avatar:e.avatar,username:e.username,onOnPress:t=>o.handlePress(e.id)},null,8,["avatar","username","onOnPress"])])))),128))])])),_:1})]),(0,s._)("div",l,[(0,s._)("ul",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.items,(e=>((0,s.wg)(),(0,s.iD)("li",{class:"feeds__item",key:e.id},[(0,s.Wm)(f,{class:"feed",username:e.owner.login,avatarImgSrc:e.owner.avatar_url},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{title:e.name,description:e.description,starsNumber:e.stargazers_count,forksNumber:e.forks_count},null,8,["title","description","starsNumber","forksNumber"])])),_:2},1032,["username","avatarImgSrc"])])))),128))])])],64)}r(6229),r(7330),r(2062);var d=r(6154);const m="https://api.github.com",C=({url:e,method:t="get",data:r={},headers:n={}})=>(0,d.Z)({url:e,method:t,data:r,baseURL:m,headers:n}),v=e=>e<10?`0${e}`:e,f=(e="javascript")=>{const t=new URLSearchParams,r=6048e5,n=new Date(Date.now()-r),a=[n.getFullYear(),v(n.getMonth()+1),v(n.getDate())].join("-");return t.append("order","desc"),t.append("sort","stars"),t.append("per_page",10),t.append("q",`language:${e} created:>${a}`),C({url:`/search/repositories?${t}`})},g={class:"c-topline"},h={class:"x-container"},_={class:"headline"},w={key:0,class:"content"};function b(e,t){return(0,s.wg)(),(0,s.iD)("div",g,[(0,s._)("div",h,[(0,s._)("div",_,[(0,s.WI)(e.$slots,"headline",{},void 0,!0)]),e.$slots.content?((0,s.wg)(),(0,s.iD)("div",w,[(0,s.WI)(e.$slots,"content",{},void 0,!0)])):(0,s.kq)("",!0)])])}var L=r(3744);const y={},x=(0,L.Z)(y,[["render",b],["__scopeId","data-v-db09ca1a"]]);var Z=x,V=r(3577);const k={class:"avatar"},H=["src"],D={class:"username"};function M(e,t,r,n,a,o){return(0,s.wg)(),(0,s.iD)("button",{class:"c-story-user-item",onClick:t[0]||(t[0]=t=>e.$emit("onPress"))},[(0,s._)("div",k,[(0,s._)("img",{src:r.avatar,class:"avatar__img",alt:"User Avatar"},null,8,H)]),(0,s._)("div",D,(0,V.zw)(r.username),1)])}var I={props:{avatar:{type:String,required:!0},username:{type:String,required:!0}}};const S=(0,L.Z)(I,[["render",M],["__scopeId","data-v-a9779e2e"]]);var N=S,O=JSON.parse('[{"id":"0","avatar":"https://placehold.co/300x300","username":"Josh"},{"id":"1","avatar":"https://placehold.co/300x300","username":"Andrew"},{"id":"2","avatar":"https://placehold.co/300x300","username":"Camille"},{"id":"3","avatar":"https://placehold.co/300x300","username":"Marselle"},{"id":"4","avatar":"https://placehold.co/300x300","username":"Piter"},{"id":"5","avatar":"https://placehold.co/300x300","username":"Can"},{"id":"6","avatar":"https://placehold.co/300x300","username":"Iloveanime"},{"id":"7","avatar":"https://placehold.co/300x300","username":"Diself"},{"id":"8","avatar":"https://placehold.co/300x300","username":"Gartor"},{"id":"9","avatar":"https://placehold.co/300x300","username":"Camilr"},{"id":"10","avatar":"https://placehold.co/300x300","username":"Josh"},{"id":"11","avatar":"https://placehold.co/300x300","username":"Andrew"},{"id":"12","avatar":"https://placehold.co/300x300","username":"Camille"},{"id":"13","avatar":"https://placehold.co/300x300","username":"Marselle"},{"id":"14","avatar":"https://placehold.co/300x300","username":"Piter"},{"id":"15","avatar":"https://placehold.co/300x300","username":"Can"},{"id":"16","avatar":"https://placehold.co/300x300","username":"Iloveanime"},{"id":"17","avatar":"https://placehold.co/300x300","username":"Diself"},{"id":"18","avatar":"https://placehold.co/300x300","username":"Gartor"},{"id":"19","avatar":"https://placehold.co/300x300","username":"Camilr"}]');const q=e=>((0,s.dD)("data-v-9f6a8e5a"),e=e(),(0,s.Cn)(),e),W={class:"c-feed"},j={key:0,class:"comments"},z={class:"comments-list"},P=q((()=>(0,s._)("div",{class:"feed-date"},"15 MAY",-1)));function A(e,t,r,n,a,o){const i=(0,s.up)("person"),c=(0,s.up)("toggler"),l=(0,s.up)("comment");return(0,s.wg)(),(0,s.iD)("div",W,[(0,s.Wm)(i,{avatarImgSrc:r.avatarImgSrc,userName:e.username},null,8,["avatarImgSrc","userName"]),(0,s.WI)(e.$slots,"default",{},void 0,!0),(0,s.Wm)(c,{class:"toggler",onOnToggle:o.toggle},null,8,["onOnToggle"]),a.shown?((0,s.wg)(),(0,s.iD)("div",j,[(0,s._)("ul",z,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.comments,(e=>((0,s.wg)(),(0,s.iD)("li",{class:"comments-item",key:e.username},[(0,s.Wm)(l,{text:e.text,username:e.username},null,8,["text","username"])])))),128))])])):(0,s.kq)("",!0),P])}const $={class:"text"},U={class:"icon"};function R(e,t,r,n,a,o){const i=(0,s.up)("icon");return(0,s.wg)(),(0,s.iD)("button",{class:(0,V.C_)(["button",{active:a.isOpened}]),onClick:t[0]||(t[0]=(...e)=>o.toggle&&o.toggle(...e))},[(0,s._)("span",$,(0,V.zw)(a.isOpened?"Hide":"View")+" issues",1),(0,s._)("span",U,[(0,s.Wm)(i,{name:"triangle"})])],2)}function T(e,t,r,n,a,o){return(0,s.wg)(),(0,s.j4)((0,s.LL)(r.name))}const B={preserveAspectRatio:"none",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Y=(0,s._)("path",{d:"M14.0692 4.06704C15.1853 3.12849 16.8147 3.12849 17.9308 4.06704L26.9308 11.6352C27.6087 12.2052 28 13.0456 28 13.9313V26.5C28 27.6046 27.1046 28.5 26 28.5H20.5C19.3954 28.5 18.5 27.6046 18.5 26.5V19.5H13.5V26.5C13.5 27.6046 12.6046 28.5 11.5 28.5H6C4.89543 28.5 4 27.6046 4 26.5V13.9313C4 13.0456 4.39135 12.2052 5.0692 11.6352L14.0692 4.06704Z",fill:"currentColor"},null,-1),E=[Y];function F(e,t){return(0,s.wg)(),(0,s.iD)("svg",B,E)}const J={},K=(0,L.Z)(J,[["render",F]]);var G=K;const Q={preserveAspectRatio:"none",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},X=(0,s._)("path",{d:"M12.7996 10.2603C12.5177 10.5639 12.0432 10.5814 11.7397 10.2996L8 6.77348L4.26033 10.2996C3.9568 10.5814 3.48225 10.5639 3.2004 10.2603C2.91855 9.9568 2.93612 9.48225 3.23966 9.2004L7.48966 5.2004C7.77742 4.9332 8.22257 4.9332 8.51033 5.2004L12.7603 9.2004C13.0639 9.48225 13.0814 9.9568 12.7996 10.2603Z",fill:"currentColor"},null,-1),ee=[X];function te(e,t){return(0,s.wg)(),(0,s.iD)("svg",Q,ee)}const re={},ne=(0,L.Z)(re,[["render",te]]);var ae=ne;const se={preserveAspectRatio:"none",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},oe=(0,s._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.00004 0.25C8.14006 0.24991 8.2773 0.289014 8.39624 0.362887C8.51518 0.43676 8.61106 0.542452 8.67304 0.668L10.555 4.483L14.765 5.095C14.9035 5.11511 15.0336 5.17355 15.1405 5.26372C15.2475 5.35388 15.3272 5.47218 15.3704 5.60523C15.4137 5.73829 15.4189 5.8808 15.3854 6.01665C15.352 6.1525 15.2812 6.27628 15.181 6.374L12.135 9.344L12.854 13.536C12.8777 13.6739 12.8624 13.8157 12.8097 13.9454C12.757 14.0751 12.6691 14.1874 12.5559 14.2697C12.4427 14.352 12.3087 14.401 12.1691 14.4111C12.0295 14.4212 11.8899 14.3921 11.766 14.327L8.00004 12.347L4.23404 14.327C4.11023 14.392 3.97071 14.4211 3.83123 14.411C3.69176 14.4009 3.55788 14.352 3.44472 14.2699C3.33157 14.1877 3.24363 14.0755 3.19086 13.946C3.13808 13.8165 3.12255 13.6749 3.14604 13.537L3.86604 9.343L0.818042 6.374C0.717608 6.27632 0.646541 6.15247 0.612894 6.01647C0.579246 5.88047 0.584364 5.73777 0.627666 5.60453C0.670969 5.47129 0.750725 5.35284 0.857898 5.26261C0.96507 5.17238 1.09537 5.11397 1.23404 5.094L5.44404 4.483L7.32704 0.668C7.38902 0.542452 7.48491 0.43676 7.60385 0.362887C7.72279 0.289014 7.86003 0.24991 8.00004 0.25ZM8.00004 2.695L6.61504 5.5C6.56126 5.6089 6.48183 5.70311 6.38359 5.77453C6.28534 5.84595 6.17122 5.89244 6.05104 5.91L2.95404 6.36L5.19404 8.544C5.28119 8.62886 5.3464 8.73365 5.38403 8.84933C5.42166 8.96501 5.43059 9.0881 5.41004 9.208L4.88204 12.292L7.65104 10.836C7.75867 10.7794 7.87845 10.7499 8.00004 10.7499C8.12164 10.7499 8.24141 10.7794 8.34904 10.836L11.119 12.292L10.589 9.208C10.5685 9.0881 10.5774 8.96501 10.615 8.84933C10.6527 8.73365 10.7179 8.62886 10.805 8.544L13.045 6.361L9.94904 5.911C9.82886 5.89344 9.71474 5.84695 9.6165 5.77553C9.51825 5.70411 9.43883 5.6099 9.38504 5.501L8.00004 2.694V2.695Z",fill:"currentColor"},null,-1),ie=[oe];function ce(e,t){return(0,s.wg)(),(0,s.iD)("svg",se,ie)}const le={},ue=(0,L.Z)(le,[["render",ce]]);var pe=ue;const de={preserveAspectRatio:"none",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},me=(0,s._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5 3.25001C5 3.44892 4.92099 3.63969 4.78033 3.78034C4.63968 3.92099 4.44892 4.00001 4.25 4.00001C4.05109 4.00001 3.86033 3.92099 3.71967 3.78034C3.57902 3.63969 3.5 3.44892 3.5 3.25001C3.5 3.05109 3.57902 2.86033 3.71967 2.71968C3.86033 2.57902 4.05109 2.50001 4.25 2.50001C4.44892 2.50001 4.63968 2.57902 4.78033 2.71968C4.92099 2.86033 5 3.05109 5 3.25001ZM5 5.37201C5.50042 5.19509 5.92217 4.84696 6.19073 4.38915C6.45929 3.93134 6.55735 3.39333 6.4676 2.87021C6.37785 2.34709 6.10605 1.87253 5.70025 1.53043C5.29445 1.18832 4.78077 1.00069 4.25 1.00069C3.71924 1.00069 3.20556 1.18832 2.79976 1.53043C2.39396 1.87253 2.12216 2.34709 2.03241 2.87021C1.94265 3.39333 2.04072 3.93134 2.30928 4.38915C2.57784 4.84696 2.99959 5.19509 3.5 5.37201V6.25001C3.5 6.84674 3.73706 7.41904 4.15901 7.841C4.58097 8.26295 5.15327 8.50001 5.75 8.50001H7.25V10.628C6.74932 10.8049 6.3273 11.1532 6.05855 11.6112C5.78981 12.0692 5.69164 12.6075 5.78139 13.1309C5.87115 13.6543 6.14306 14.1291 6.54905 14.4714C6.95504 14.8136 7.46897 15.0014 8 15.0014C8.53104 15.0014 9.04497 14.8136 9.45096 14.4714C9.85695 14.1291 10.1289 13.6543 10.2186 13.1309C10.3084 12.6075 10.2102 12.0692 9.94146 11.6112C9.67271 11.1532 9.25069 10.8049 8.75 10.628V8.50001H10.25C10.8467 8.50001 11.419 8.26295 11.841 7.841C12.263 7.41904 12.5 6.84674 12.5 6.25001V5.37201C13.0004 5.19509 13.4222 4.84696 13.6907 4.38915C13.9593 3.93134 14.0574 3.39333 13.9676 2.87021C13.8778 2.34709 13.6061 1.87253 13.2002 1.53043C12.7944 1.18832 12.2808 1.00069 11.75 1.00069C11.2192 1.00069 10.7056 1.18832 10.2998 1.53043C9.89396 1.87253 9.62216 2.34709 9.53241 2.87021C9.44265 3.39333 9.54072 3.93134 9.80928 4.38915C10.0778 4.84696 10.4996 5.19509 11 5.37201V6.25001C11 6.44892 10.921 6.63969 10.7803 6.78034C10.6397 6.92099 10.4489 7.00001 10.25 7.00001H5.75C5.55109 7.00001 5.36033 6.92099 5.21967 6.78034C5.07902 6.63969 5 6.44892 5 6.25001V5.37201ZM8.75 12.75C8.75 12.9489 8.67099 13.1397 8.53033 13.2803C8.38968 13.421 8.19892 13.5 8 13.5C7.80109 13.5 7.61033 13.421 7.46967 13.2803C7.32902 13.1397 7.25 12.9489 7.25 12.75C7.25 12.5511 7.32902 12.3603 7.46967 12.2197C7.61033 12.079 7.80109 12 8 12C8.19892 12 8.38968 12.079 8.53033 12.2197C8.67099 12.3603 8.75 12.5511 8.75 12.75ZM11.75 4.00001C11.9489 4.00001 12.1397 3.92099 12.2803 3.78034C12.421 3.63969 12.5 3.44892 12.5 3.25001C12.5 3.05109 12.421 2.86033 12.2803 2.71968C12.1397 2.57902 11.9489 2.50001 11.75 2.50001C11.5511 2.50001 11.3603 2.57902 11.2197 2.71968C11.079 2.86033 11 3.05109 11 3.25001C11 3.44892 11.079 3.63969 11.2197 3.78034C11.3603 3.92099 11.5511 4.00001 11.75 4.00001Z",fill:"currentColor"},null,-1),Ce=[me];function ve(e,t){return(0,s.wg)(),(0,s.iD)("svg",de,Ce)}const fe={},ge=(0,L.Z)(fe,[["render",ve]]);var he=ge;const _e={preserveAspectRatio:"none",viewBox:"0 0 175 37",fill:"none",xmlns:"http://www.w3.org/2000/svg"},we=(0,s.uE)('<path d="M18.6664 10.4756H24.3009C23.5838 5.28933 19.0122 1.63971 13.0832 1.63971C6.15528 1.63971 0.815308 6.63393 0.815308 15.1369C0.815308 23.435 5.80953 28.5829 13.1984 28.5829C19.819 28.5829 24.5443 24.3954 24.5443 17.4931V14.1893H13.5698V18.3639H19.2043C19.1274 21.6166 16.9121 23.6783 13.224 23.6783C9.06217 23.6783 6.43701 20.5665 6.43701 15.0857C6.43701 9.63046 9.16462 6.54429 13.1728 6.54429C16.0285 6.54429 17.9621 8.01694 18.6664 10.4756Z" fill="currentColor"></path><path d="M28.5773 28.2243H34.0325V8.55478H28.5773V28.2243ZM31.3177 6.01925C32.944 6.01925 34.2758 4.7771 34.2758 3.25322C34.2758 1.74215 32.944 0.5 31.3177 0.5C29.7042 0.5 28.3724 1.74215 28.3724 3.25322C28.3724 4.7771 29.7042 6.01925 31.3177 6.01925Z" fill="currentColor"></path><path d="M47.6026 8.55478H43.9017V3.84229H38.4465V8.55478H35.7573V12.6526H38.4465V22.8972C38.4209 26.7517 41.046 28.6597 45.003 28.4932C46.4116 28.442 47.4105 28.1603 47.9611 27.981L47.1031 23.9216C46.8342 23.9728 46.258 24.1009 45.7457 24.1009C44.6572 24.1009 43.9017 23.6911 43.9017 22.18V12.6526H47.6026V8.55478Z" fill="currentColor"></path><path d="M58.5699 28.6085C64.5373 28.6085 68.251 24.5235 68.251 18.4664C68.251 12.3709 64.5373 8.29867 58.5699 8.29867C52.6024 8.29867 48.8888 12.3709 48.8888 18.4664C48.8888 24.5235 52.6024 28.6085 58.5699 28.6085ZM58.5955 24.3826C55.8422 24.3826 54.4336 21.8599 54.4336 18.428C54.4336 14.996 55.8422 12.4605 58.5955 12.4605C61.2975 12.4605 62.7061 14.996 62.7061 18.428C62.7061 21.8599 61.2975 24.3826 58.5955 24.3826Z" fill="currentColor"></path><path d="M79.3975 36.0102C85.0192 36.0102 89.0146 33.449 89.0146 28.4164V8.55478H83.5978V11.8586H83.3929C82.663 10.2579 81.0623 8.29867 77.7712 8.29867C73.4557 8.29867 69.8061 11.6538 69.8061 18.3511C69.8061 24.8948 73.3533 27.9426 77.784 27.9426C80.9214 27.9426 82.6758 26.3675 83.3929 24.7412H83.6234V28.3396C83.6234 31.0416 81.8947 32.0916 79.5256 32.0916C77.1181 32.0916 75.9016 31.0416 75.4534 29.8506L70.4079 30.5293C71.061 33.6283 74.096 36.0102 79.3975 36.0102ZM79.5128 23.8448C76.8364 23.8448 75.3766 21.719 75.3766 18.3255C75.3766 14.9832 76.8108 12.6398 79.5128 12.6398C82.1636 12.6398 83.649 14.8808 83.649 18.3255C83.649 21.7959 82.138 23.8448 79.5128 23.8448Z" fill="currentColor"></path><path d="M92.0936 28.2243H97.5488V17.0962C97.5488 14.6759 99.316 13.0112 101.723 13.0112C102.479 13.0112 103.516 13.1392 104.029 13.3057V8.46514C103.542 8.34989 102.863 8.27305 102.313 8.27305C100.11 8.27305 98.3044 9.55362 97.5873 11.9867H97.3824V8.55478H92.0936V28.2243Z" fill="currentColor"></path><path d="M110.632 28.5957C113.539 28.5957 115.422 27.3279 116.382 25.4967H116.536V28.2243H121.709V14.9576C121.709 10.2707 117.739 8.29867 113.36 8.29867C108.647 8.29867 105.548 10.5525 104.793 14.1381L109.838 14.5478C110.21 13.2417 111.375 12.2812 113.334 12.2812C115.191 12.2812 116.254 13.2161 116.254 14.8296V14.9064C116.254 16.1742 114.909 16.3406 111.49 16.6736C107.597 17.0321 104.101 18.3383 104.101 22.7307C104.101 26.6236 106.88 28.5957 110.632 28.5957ZM112.195 24.8308C110.517 24.8308 109.313 24.0497 109.313 22.5514C109.313 21.0147 110.581 20.2592 112.502 19.9903C113.693 19.8238 115.639 19.5421 116.292 19.1067V21.194C116.292 23.2557 114.589 24.8308 112.195 24.8308Z" fill="currentColor"></path><path d="M124.679 28.2243H130.135V16.4175C130.135 14.2405 131.518 12.7935 133.336 12.7935C135.129 12.7935 136.333 14.0228 136.333 15.9565V28.2243H141.621V16.2126C141.621 14.1765 142.787 12.7935 144.771 12.7935C146.513 12.7935 147.819 13.8819 147.819 16.0717V28.2243H153.262V14.996C153.262 10.7317 150.726 8.29867 147.064 8.29867C144.182 8.29867 141.941 9.77132 141.135 12.0251H140.93C140.302 9.74571 138.292 8.29867 135.59 8.29867C132.939 8.29867 130.929 9.70729 130.109 12.0251H129.878V8.55478H124.679V28.2243Z" fill="currentColor"></path><path d="M174.815 0.768919H170.116L161.664 32.1685H166.364L174.815 0.768919Z" fill="#292929"></path>',9),be=[we];function Le(e,t){return(0,s.wg)(),(0,s.iD)("svg",_e,be)}const ye={},xe=(0,L.Z)(ye,[["render",Le]]);var Ze=xe;const Ve={preserveAspectRatio:"none",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ke=(0,s._)("path",{d:"M16 6.94273V14.625L16.0007 15.2562L25.3025 15.255L23.1495 13.1003C22.8167 12.7674 22.7865 12.2466 23.0589 11.8796L23.1497 11.7745C23.4826 11.4417 24.0034 11.4116 24.3704 11.6839L24.4755 11.7747L28.2213 15.5218C28.5538 15.8544 28.5842 16.3746 28.3125 16.7416L28.2219 16.8467L24.4762 20.601C24.1105 20.9676 23.5169 20.9683 23.1503 20.6026C22.8171 20.2701 22.7863 19.7493 23.0582 19.382L23.1488 19.2767L25.29 17.13L16.0007 17.1312L16 25.5625C16 26.1455 15.4735 26.5871 14.8994 26.4857L4.27444 24.6091C3.82651 24.53 3.5 24.1408 3.5 23.6859V8.68752C3.5 8.22839 3.83252 7.83681 4.28558 7.76241L14.9106 6.01762C15.4813 5.92389 16 6.36432 16 6.94273ZM11.6277 15.875C10.9358 15.875 10.375 16.4359 10.375 17.1277C10.375 17.8196 10.9358 18.3804 11.6277 18.3804C12.3195 18.3804 12.8804 17.8196 12.8804 17.1277C12.8804 16.4359 12.3195 15.875 11.6277 15.875ZM17.25 24.6266L18.2064 24.6268L18.3338 24.6183C18.7919 24.556 19.1447 24.163 19.1439 23.6878L19.135 18.375H17.25V24.6266ZM17.2525 14L17.25 12.4067V7.75002L18.1816 7.75002C18.6556 7.75002 19.0476 8.10192 19.1103 8.55891L19.1191 8.68597L19.1275 14H17.2525Z",fill:"currentColor"},null,-1),He=[ke];function De(e,t){return(0,s.wg)(),(0,s.iD)("svg",Ve,He)}const Me={},Ie=(0,L.Z)(Me,[["render",De]]);var Se=Ie,Ne={name:"icon",components:{...n},props:{name:{type:String,required:!0,validator(e){return Object.keys(n).includes(e)}}}};const Oe=(0,L.Z)(Ne,[["render",T]]);var qe=Oe,We={name:"toggler",components:{icon:qe},data(){return{isOpened:!1}},methods:{toggle(){this.isOpened=!this.isOpened,this.$emit("onToggle",this.isOpened)}}};const je=(0,L.Z)(We,[["render",R],["__scopeId","data-v-250d6cd7"]]);var ze=je;const Pe={class:"c-comment"},Ae={class:"username"};function $e(e,t,r,n,a,o){return(0,s.wg)(),(0,s.iD)("div",Pe,[(0,s._)("span",Ae,(0,V.zw)(r.username),1),(0,s.Uk)(" "+(0,V.zw)(r.text),1)])}var Ue={name:"comment",props:{username:{type:String,required:!0},text:{type:String,required:!0}}};const Re=(0,L.Z)(Ue,[["render",$e],["__scopeId","data-v-bc8dba44"]]);var Te=Re;const Be=e=>((0,s.dD)("data-v-bb6930ae"),e=e(),(0,s.Cn)(),e),Ye={class:"c-person"},Ee={href:"#",class:"profile-link"},Fe=["src"],Je={class:"person-info"},Ke={class:"person-info__username"},Ge={key:0,class:"person-info__connections connections"},Qe={class:"connections__number"},Xe={class:"connections__number"},et=Be((()=>(0,s._)("a",{href:"#",class:"connections__link"},"watchers",-1))),tt={key:1,class:"person-info__realName"};function rt(e,t,r,n,a,o){return(0,s.wg)(),(0,s.iD)("div",Ye,[(0,s._)("a",Ee,[(0,s._)("img",{src:r.avatarImgSrc,alt:"user avatar",class:"profile-link__avatar"},null,8,Fe)]),(0,s._)("div",Je,[(0,s._)("div",Ke,(0,V.zw)(r.userName),1),r.reposts?((0,s.wg)(),(0,s.iD)("div",Ge,[(0,s._)("span",Qe,(0,V.zw)(r.reposts),1),(0,s.Uk)(" reposts "),(0,s._)("span",Xe,(0,V.zw)(r.watchers),1),(0,s.Uk)(),et])):(0,s.kq)("",!0),r.realName?((0,s.wg)(),(0,s.iD)("div",tt,(0,V.zw)(r.realName),1)):(0,s.kq)("",!0)])])}var nt={name:"person",props:{avatarImgSrc:{type:String,required:!0},userName:{type:String,required:!0},realName:{type:String},reposts:{type:Number},watchers:{type:Number}}};const at=(0,L.Z)(nt,[["render",rt],["__scopeId","data-v-bb6930ae"]]);var st=at,ot={name:"feed-item",components:{toggler:ze,comment:Te,person:st},props:{avatarImgSrc:{type:String,requeried:!0}},data(){return{shown:!0,comments:[{username:"joshua_l",text:"Enable performance measuring in production, at the user's request"},{username:"Camille",text:"It's Impossible to Rename an Inherited Slot"},{username:"Marselle",text:"transition-group with flex parent causes removed items to fly"}]}},methods:{toggle(e){this.shown=e}}};const it=(0,L.Z)(ot,[["render",A],["__scopeId","data-v-9f6a8e5a"]]);var ct=it;const lt={class:"c-page-header"},ut={class:"logoIcon"};function pt(e,t,r,n,a,o){const i=(0,s.up)("icon");return(0,s.wg)(),(0,s.iD)("div",lt,[(0,s._)("div",ut,[(0,s.Wm)(i,{name:"logo"})])])}var dt={name:"page-header",components:{icon:qe}};const mt=(0,L.Z)(dt,[["render",pt],["__scopeId","data-v-553ccc6a"]]);var Ct=mt;const vt=e=>((0,s.dD)("data-v-ee2bf9d0"),e=e(),(0,s.Cn)(),e),ft={class:"c-menu"},gt={class:"home-icon",href:"#"},ht=vt((()=>(0,s._)("a",{class:"profile-icon",href:"#"},[(0,s._)("img",{src:"https://placehold.co/300x300",alt:"Profile",class:"profile-icon__image"})],-1))),_t={class:"signOut-icon",href:"#"};function wt(e,t,r,n,a,o){const i=(0,s.up)("icon");return(0,s.wg)(),(0,s.iD)("div",ft,[(0,s._)("a",gt,[(0,s.Wm)(i,{name:"home"})]),ht,(0,s._)("a",_t,[(0,s.Wm)(i,{name:"signOut"})])])}var bt={name:"menuComp",components:{icon:qe}};const Lt=(0,L.Z)(bt,[["render",wt],["__scopeId","data-v-ee2bf9d0"]]);var yt=Lt;const xt={class:"c-repository"},Zt={class:"repository-title"},Vt={class:"repository-description"};function kt(e,t,r,n,a,o){const i=(0,s.up)("statistic");return(0,s.wg)(),(0,s.iD)("div",xt,[(0,s._)("h2",Zt,(0,V.zw)(r.title),1),(0,s._)("div",Vt,(0,V.zw)(r.description),1),(0,s.Wm)(i,{class:"statistic",starsNumber:r.starsNumber,forksNumber:r.forksNumber},null,8,["starsNumber","forksNumber"])])}const Ht={class:"c-statistic"},Dt={class:"stars"},Mt={class:"stars__content-wrapper slot"},It={class:"slot__icon"},St={class:"stars__number-wrapper slot"},Nt={class:"slot__number"},Ot={class:"forks"},qt={class:"forks__content-wrapper slot"},Wt={class:"slot__icon"},jt={class:"forks__number-wrapper slot"},zt={class:"slot__number"};function Pt(e,t,r,n,a,o){const i=(0,s.up)("icon");return(0,s.wg)(),(0,s.iD)("div",Ht,[(0,s._)("div",Dt,[(0,s._)("div",Mt,[(0,s._)("span",It,[(0,s.Wm)(i,{name:"star"})]),(0,s.Uk)(" Star ")]),(0,s._)("div",St,[(0,s._)("span",Nt,(0,V.zw)(r.starsNumber),1)])]),(0,s._)("div",Ot,[(0,s._)("div",qt,[(0,s._)("span",Wt,[(0,s.Wm)(i,{name:"fork"})]),(0,s.Uk)(" Fork ")]),(0,s._)("div",jt,[(0,s._)("span",zt,(0,V.zw)(r.forksNumber),1)])])])}var At={name:"statistic",components:{icon:qe},props:{starsNumber:{type:String,require:!0},forksNumber:{type:String,require:!0}}};const $t=(0,L.Z)(At,[["render",Pt],["__scopeId","data-v-7d3f2182"]]);var Ut=$t,Rt={name:"repository",components:{statistic:Ut},props:{title:{type:String,require:!0},description:{type:String,require:!0},starsNumber:{type:Number,required:!0},forksNumber:{type:Number,required:!0}}};const Tt=(0,L.Z)(Rt,[["render",kt],["__scopeId","data-v-016950af"]]);var Bt=Tt,Yt={name:"feeds",components:{topline:Z,mainMenu:yt,storyUserItem:N,feed:ct,pageHeader:Ct,repository:Bt},data(){return{stories:O,items:[]}},methods:{handlePress(e){console.log(`User's ID: ${e}`)}},async created(){try{const{data:e}=await f();this.items=e.items}catch(e){console.log(e)}}};const Et=(0,L.Z)(Yt,[["render",p],["__scopeId","data-v-8c34a9b2"]]);var Ft=Et,Jt={name:"App",components:{feeds:Ft}};const Kt=(0,L.Z)(Jt,[["render",o]]);var Gt=Kt;(0,a.ri)(Gt).mount("#app")}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,s){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],s=e[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&s||o>=s)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(i=!1,s<o&&(o=s));if(i){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,a,s]}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,s,o=n[0],i=n[1],c=n[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(c)var u=c(r)}for(t&&t(n);l<o.length;l++)s=o[l],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(u)},n=self["webpackChunkgitogram"]=self["webpackChunkgitogram"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(7253)}));n=r.O(n)})();
//# sourceMappingURL=app.44a925bf.js.map