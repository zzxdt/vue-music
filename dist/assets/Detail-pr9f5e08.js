import{Q as M,ag as S,G as T,Y as q,W as N,r as V,a1 as b,o as w,J as O,i as f,j as c,k as r,l as s,X as m,D as a,F as $,C as k,v,z as y,m as C,q as p,U as B,V as U,S as P}from"./index-nvWmsnf9.js";import{C as E}from"./Comments-AlU7rqLJ.js";const L={name:"mvDetail",components:{CommentList:E,videoPlay:S},setup(e){const{proxy:n}=T(),g=q(),I=N(),i=V({mId:"0",mvDetail:{},type:1,videoOptions:{src:"",poster:""},simiMv:[]}),D=async()=>{const{data:o}=await n.$http.mvDetail({id:i.mId});if(o.code!==200)return n.$msg.error("数据请求失败");i.mvDetail=o.data,i.videoOptions.poster=o.data.cover},d=async o=>{const{data:t}=await n.$http.mvUrl({id:i.mId,r:o});if(t.code!==200)return n.$msg.error("数据请求失败");i.videoOptions.src=t.data.url},u=async()=>{const{data:o}=await n.$http.simiMv({id:i.mId});if(o.code!==200)return n.$msg.error("数据请求失败");i.simiMv=o.mvs},_=()=>{D(),d(),u()};return b(o=>{i.mId=o.query.id,_()}),w(()=>{i.mId=g.query.id,_(),I.commit("SET_PLAYSTATUS",!1)}),{...O(i)}}},l=e=>(B("data-v-465254ff"),e=e(),U(),e),R={key:0,class:"mv-detail"},A={class:"mv-main"},F={class:"mv-info-hd"},Y={class:"info-name"},j=l(()=>s("i",{class:"iconfont icon-mv"},null,-1)),z={class:"video-main"},G={class:"mv-comment"},J={class:"aside-box"},Q={class:"mv-info"},W=l(()=>s("h3",{class:"aside-title"},"MV简介",-1)),X={class:"mv-info-count"},H={class:"info-time"},K={class:"info-count"},Z={class:"mv-desc"},x={class:"simi-mv"},ss=l(()=>s("h3",{class:"aside-title"},"相似MV",-1)),ts={class:"aside-main mv-main"},es=l(()=>s("i",{class:"iconfont icon-play"},null,-1)),os=l(()=>s("div",{slot:"placeholder",class:"image-slot"},[s("i",{class:"iconfont icon-placeholder"})],-1)),is={class:"info"},as={class:"mv-playCount"},ns=l(()=>s("i",{class:"iconfont icon-mvlist"},null,-1)),cs={key:1,class:"mv-time"};function ds(e,n,g,I,i,D){const d=f("router-link"),u=f("videoPlay"),_=f("comment-list"),o=P;return e.videoOptions.src?(c(),r("div",R,[s("div",A,[s("div",F,[s("div",Y,[j,m(a(e.mvDetail.name),1)]),(c(!0),r($,null,k(e.mvDetail.artists,(t,h)=>(c(),C(d,{to:{path:"/singer",query:{id:t.id}},class:"song-author",key:t.name},{default:p(()=>[m(a(h!==0?" / "+t.name:t.name),1)]),_:2},1032,["to"]))),128))]),s("div",z,[v(u,{width:"100%",height:"100%",poster:e.videoOptions.poster,src:e.videoOptions.src},null,8,["poster","src"])]),s("div",G,[v(_,{type:e.type,sId:e.mId},null,8,["type","sId"])])]),s("div",J,[s("div",Q,[W,s("div",X,[s("div",H,"发布时间："+a(e.mvDetail.publishTime),1),s("div",K,"播放量："+a(e.$utils.formartNum(e.mvDetail.playCount)),1)]),s("div",Z,a(e.mvDetail.desc?e.mvDetail.desc:"暂无简介"),1)]),s("div",x,[ss,s("div",ts,[(c(!0),r($,null,k(e.simiMv,(t,h)=>(c(),r("div",{class:"item",key:""+t.id+h},[v(d,{to:{path:"/mvlist/mv",query:{id:t.id}},class:"faceImg"},{default:p(()=>[es,v(o,{src:t.cover||t.imgurl},{default:p(()=>[os]),_:2},1032,["src"])]),_:2},1032,["to"]),s("div",is,[v(d,{to:{path:"/mvlist/mv",query:{id:t.id}},class:"mv-name"},{default:p(()=>[m(a(t.name),1)]),_:2},1032,["to"]),t.publishTime?y("",!0):(c(),C(d,{key:0,to:{path:"/singer",query:{id:t.artistId}},class:"mv-author"},{default:p(()=>[m(a(t.artistName),1)]),_:2},1032,["to"])),s("div",as,[ns,m(" "+a(e.$utils.formartNum(t.playCount)),1)]),t.publishTime?(c(),r("div",cs,"发布时间："+a(t.publishTime),1)):y("",!0)])]))),128))])])])])):y("",!0)}const ms=M(L,[["render",ds],["__scopeId","data-v-465254ff"]]);export{ms as default};