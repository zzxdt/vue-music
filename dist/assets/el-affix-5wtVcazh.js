import{a3 as y,a4 as b,_ as w,d as S,u as $,a5 as c,r as E,e as u,w as T,o as H,a6 as z,a7 as B,a8 as h,j as C,k as R,l as A,A as I,s as m,B as g,L as N}from"./index-nvWmsnf9.js";const _=y({zIndex:{type:b([Number,String]),default:100},target:{type:String,default:""},offset:{type:Number,default:0},position:{type:String,values:["top","bottom"],default:"top"}}),k={scroll:({scrollTop:t,fixed:l})=>typeof t=="number"&&typeof l=="boolean",change:t=>typeof t=="boolean"},P=S({name:"ElAffix",props:_,emits:k,setup(t,{emit:l}){const d=$("affix"),n=c(),s=c(),a=c(),e=E({fixed:!1,height:0,width:0,scrollTop:0,clientHeight:0,transform:0}),x=u(()=>({height:e.fixed?`${e.height}px`:"",width:e.fixed?`${e.width}px`:""})),v=u(()=>{if(!e.fixed)return;const o=t.offset?`${t.offset}px`:0,i=e.transform?`translateY(${e.transform}px)`:"";return{height:`${e.height}px`,width:`${e.width}px`,top:t.position==="top"?o:"",bottom:t.position==="bottom"?o:"",transform:i,zIndex:t.zIndex}}),r=()=>{if(!s.value||!n.value||!a.value)return;const o=s.value.getBoundingClientRect(),i=n.value.getBoundingClientRect();if(e.height=o.height,e.width=o.width,e.scrollTop=a.value instanceof Window?document.documentElement.scrollTop:a.value.scrollTop||0,e.clientHeight=document.documentElement.clientHeight,t.position==="top")if(t.target){const f=i.bottom-t.offset-e.height;e.fixed=t.offset>o.top&&i.bottom>0,e.transform=f<0?f:0}else e.fixed=t.offset>o.top;else if(t.target){const f=e.clientHeight-i.top-t.offset-e.height;e.fixed=e.clientHeight-t.offset<o.bottom&&e.clientHeight>i.top,e.transform=f<0?-f:0}else e.fixed=e.clientHeight-t.offset<o.bottom},p=()=>{r(),l("scroll",{scrollTop:e.scrollTop,fixed:e.fixed})};return T(()=>e.fixed,()=>{l("change",e.fixed)}),H(()=>{var o;if(t.target){if(n.value=(o=document.querySelector(t.target))!=null?o:void 0,!n.value)throw new Error(`Target is not existed: ${t.target}`)}else n.value=document.documentElement;a.value=z(s.value,!0)}),B(a,"scroll",p),h(s,()=>r()),h(n,()=>r()),{ns:d,root:s,state:e,rootStyle:x,affixStyle:v,update:r}}});function L(t,l,d,n,s,a){return C(),R("div",{ref:"root",class:m(t.ns.b()),style:g(t.rootStyle)},[A("div",{class:m({[t.ns.m("fixed")]:t.state.fixed}),style:g(t.affixStyle)},[I(t.$slots,"default")],6)],6)}var j=w(P,[["render",L]]);const M=N(j);export{M as E};
