"use strict";(self["webpackChunkdinojuice"]=self["webpackChunkdinojuice"]||[]).push([[671],{9671:(t,e,n)=>{n.r(e),n.d(e,{default:()=>h});var o=n(3673);function c(t,e,n,c,r,u){const l=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(l,{class:"row items-center justify-evenly"})}n(71);var r=n(2323);function u(t,e,n,c,u,l){return(0,o.wg)(),(0,o.j4)("div",null,[(0,o.Wm)("p",null,(0,r.zw)(t.title),1),(0,o.Wm)("ul",null,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(t.todos,(n=>((0,o.wg)(),(0,o.j4)("li",{key:n.id,onClick:e[1]||(e[1]=(...e)=>t.increment&&t.increment(...e))},(0,r.zw)(n.id)+" - "+(0,r.zw)(n.content),1)))),128))]),(0,o.Wm)("p",null,"Count: "+(0,r.zw)(t.todoCount)+" / "+(0,r.zw)(t.meta.totalCount),1),(0,o.Wm)("p",null,"Active: "+(0,r.zw)(t.active?"yes":"no"),1),(0,o.Wm)("p",null,"Clicks on todos: "+(0,r.zw)(t.clickCount),1)])}const l=(0,o.aZ)({name:"OptionsComponent",props:{title:{type:String,required:!0},todos:{type:Array,default:()=>[]},meta:{type:Object,required:!0},active:{type:Boolean}},data(){return{clickCount:0}},methods:{increment(){this.clickCount+=1}},computed:{todoCount(){return this.todos.length}}});l.render=u;const s=l;var i=n(2942);const d=(0,o.aZ)({name:"PageIndex",components:{ExampleComponent:s},data(){const t=[{id:1,content:"ct1"},{id:2,content:"ct2"},{id:3,content:"ct3"},{id:4,content:"ct4"},{id:5,content:"ct5"}],e={totalCount:1200};return{todos:t,meta:e,storeNumber:{storeNumber:""}}},methods:{AddStore(t){i.db.collection("StoreNumbers").add(t).then((()=>{alert("store successfully created!"),this.storeNumber.storeNumber=""})).catch((t=>{console.log(t)}))}}});var a=n(4379),m=n(8240),p=n(4842),w=n(7518),C=n.n(w);d.render=c;const h=d;C()(d,"components",{QPage:a.Z,QBtn:m.Z,QInput:p.Z})}}]);