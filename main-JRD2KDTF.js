import{H as c,I as u,K as d,O as m,c as e,d as s,e as r,w as l}from"./chunk-XCUSQLWW.js";var h=[{path:"",loadChildren:()=>import("./chunk-MFWBKQUB.js").then(o=>o.HomeModule)},{path:"inicio",redirectTo:"",pathMatch:"full"},{path:":house",loadChildren:()=>import("./chunk-MIE4PABX.js").then(o=>o.HouseModule)},{path:"**",loadChildren:()=>import("./chunk-J3LN4LSK.js").then(o=>o.ErrorModule)}],i=class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=r({type:o});static \u0275inj=e({imports:[m.forRoot(h),m]})};var p=class o{title="harryPotter";static \u0275fac=function(t){return new(t||o)};static \u0275cmp=s({type:o,selectors:[["app-root"]],decls:1,vars:0,template:function(t,M){t&1&&l(0,"router-outlet")},dependencies:[d]})};var n=class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=r({type:o,bootstrap:[p]});static \u0275inj=e({imports:[u,i]})};c().bootstrapModule(n,{ngZoneEventCoalescing:!0}).catch(o=>console.error(o));