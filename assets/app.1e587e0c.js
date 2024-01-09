import{l as R,E as Q,h as b,x as z,j as S,z as X,M as H,d as L,a3 as K,a4 as D,s as C,a5 as W,a6 as J,a7 as Z,a8 as O,a9 as ee,aa as te,ab as ae,ac as ne,ad as oe,ae as re,X as se,u as ie,y as ue,af as le,ag as ce,ah as pe}from"./chunks/framework.27542019.js";import{t as de}from"./chunks/theme.7656fec6.js";const he="https://www.youtube-nocookie.com",ye="https://www.youtube.com",I="vue-youtube";var V=(e=>(e[e.UNSTARTED=-1]="UNSTARTED",e[e.ENDED=0]="ENDED",e[e.PLAYING=1]="PLAYING",e[e.PAUSED=2]="PAUSED",e[e.BUFFERING=3]="BUFFERING",e[e.VIDEO_CUED=5]="VIDEO_CUED",e))(V||{});function fe(e){const a=R(e);return(a==null?void 0:a.$el)??a}const ge=e=>({playerVars:e.playerVars??{},cookie:e.cookie??!0,height:e.height??720,width:e.width??1280}),ve=()=>{const e=H(I);if(!e)throw new Error("You may forget to apply app.use(manager). See https://vue-youtube.github.io/docs/usage/manager.html for more information");return e},me=e=>{const a={install(n){var o;n.provide(I,a),(o=this._state.options.deferLoading)!=null&&o.enabled||this._insert()},register(n,o){var l;const c=n.id||`vue-youtube-${this._state.counter++}`,p=this._state.players.get(c);if(p!==void 0){p({factory:this._state.factory,id:c});return}this._state.factory===void 0?(this._state.backlog.set(c,o),(l=this._state.options.deferLoading)!=null&&l.enabled&&this._state.options.deferLoading.autoLoad&&this._insert()):o({factory:this._state.factory,id:c})},load(){this._state.factory===void 0&&this._insert()},_insert(){var n;const o=document.createElement("script");o.src="https://www.youtube.com/player_api";const l=document.querySelectorAll("script")[0];(n=l.parentNode)==null||n.insertBefore(o,l),window.onYouTubeIframeAPIReady=()=>{this._state.factory=window.YT;for(const[c,p]of this._state.backlog.entries())this._state.backlog.delete(c),this._state.players.set(c,p),p({factory:this._state.factory,id:c})}},_state:{backlog:new Map,players:new Map,options:e||{deferLoading:{enabled:!1,autoLoad:!1}},factory:void 0,counter:1}};return a},we=(e,a,n={})=>{const{playerVars:o,cookie:l,height:c,width:p}=ge(n),A=l?ye:he,_=ve(),f=new Array,g=new Array,v=new Array,m=new Array,w=new Array,s=new Array,i=Q(),k=b(e),P=b(!1),E=b(!1),h=(t,r)=>{for(const d of r)d(t)},T=(...t)=>{f.push(...t)},M=(...t)=>{g.push(...t)},$=(...t)=>{v.push(...t)},U=(...t)=>{m.push(...t)},Y=(...t)=>{w.push(...t)},F=(...t)=>{s.push(...t)},j=()=>{var t,r,d;const u=(t=i.value)==null?void 0:t.getPlayerState();if(u&&u===V.PLAYING){(r=i.value)==null||r.pauseVideo();return}(d=i.value)==null||d.playVideo()},x=()=>{var t,r;if((t=i.value)!=null&&t.isMuted()){i.value.unMute();return}(r=i.value)==null||r.mute()},B=()=>{var t,r;if(P.value){(t=i.value)==null||t.setShuffle(!1),P.value=!1;return}(r=i.value)==null||r.setShuffle(!0),P.value=!0},G=()=>{var t,r;if(E.value){(t=i.value)==null||t.setLoop(!1),E.value=!1;return}(r=i.value)==null||r.setLoop(!0),E.value=!0},q=z(k,t=>{var r;(r=i.value)==null||r.loadVideoById(t)});return S(()=>{const t=fe(a);t&&_.register(t,({factory:r,id:d})=>{t.id=d,i.value=new r.Player(d,{videoId:R(k),playerVars:o,height:c,width:p,host:A,events:{onPlaybackQualityChange:u=>{h(u,f)},onPlaybackRateChange:u=>{h(u,g)},onStateChange:u=>{h(u,v)},onApiChange:u=>{h(u,m)},onError:u=>{h(u,w)},onReady:u=>{h(u,s)}}})})}),X(()=>{var t;(t=i.value)==null||t.destroy(),q()}),{instance:i,togglePlay:j,toggleMute:x,toggleLoop:G,toggleShuffle:B,onPlaybackQualityChange:T,onPlaybackRateChange:M,onStateChange:$,onApiChange:U,onError:Y,onReady:F}},be=L({name:"YoutubeIframe",props:{width:{type:[String,Number],default:1280},height:{type:[String,Number],default:720},playerVars:{type:Object,default:()=>({autoplay:0,time:0,mute:0})},videoId:{type:String,default:""},cookie:{type:Boolean,default:!0}},emits:["playback-quality-change","playback-rate-change","state-change","api-change","error","ready"],setup(e,{emit:a,expose:n}){const{videoId:o}=K(e),l=b(),{instance:c,togglePlay:p,toggleMute:A,onPlaybackQualityChange:_,onPlaybackRateChange:f,onStateChange:g,onApiChange:v,onError:m,onReady:w}=we(o,l,{playerVars:e.playerVars,height:e.height,cookie:e.cookie,width:e.width});return _(s=>{a("playback-quality-change",s)}),f(s=>{a("playback-rate-change",s)}),g(s=>{a("state-change",s)}),v(s=>{a("api-change",s)}),m(s=>{a("error",s)}),w(s=>{a("ready",s)}),n({instance:c,togglePlay:p,toggleMute:A}),()=>D("div",{ref:l})}});const Ae={extends:de,async enhanceApp({app:e}){e.use(me({deferLoading:{enabled:!0,autoLoad:!0}})).component("YoutubeIframe",be)}};function N(e){if(e.extends){const a=N(e.extends);return{...a,...e,async enhanceApp(n){a.enhanceApp&&await a.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const y=N(Ae),_e=L({name:"VitePressApp",setup(){const{site:e}=ie();return S(()=>{ue(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),le(),ce(),pe(),y.setup&&y.setup(),()=>D(y.Layout)}});async function Pe(){const e=Ce(),a=Ee();a.provide(J,e);const n=Z(e.route);return a.provide(O,n),a.component("Content",ee),a.component("ClientOnly",te),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),y.enhanceApp&&await y.enhanceApp({app:a,router:e,siteData:ae}),{app:a,router:e,data:n}}function Ee(){return ne(_e)}function Ce(){let e=C,a;return oe(n=>{let o=re(n),l=null;return o&&(e&&(a=o),(e||a===o)&&(o=o.replace(/\.js$/,".lean.js")),l=se(()=>import(o),[])),C&&(e=!1),l},y.NotFound)}C&&Pe().then(({app:e,router:a,data:n})=>{a.go().then(()=>{W(a.route,n.site),e.mount("#app")})});export{Pe as createApp};
