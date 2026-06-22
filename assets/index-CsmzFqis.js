var rf=Object.defineProperty;var of=(i,t,e)=>t in i?rf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var b=(i,t,e)=>(of(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Za="165",af=0,Tl=1,lf=2,uu=1,du=2,An=3,Qn=0,Ge=1,Fe=2,Zn=0,ji=1,Ua=2,wl=3,Al=4,cf=5,mi=100,hf=101,uf=102,df=103,ff=104,pf=200,mf=201,gf=202,_f=203,Ia=204,Na=205,vf=206,xf=207,Mf=208,Sf=209,yf=210,Ef=211,bf=212,Tf=213,wf=214,Af=0,Cf=1,Rf=2,Gr=3,Pf=4,Lf=5,Df=6,Uf=7,fu=0,If=1,Nf=2,Ln=0,Ff=1,Of=2,kf=3,zf=4,Bf=5,Hf=6,Gf=7,pu=300,is=301,ss=302,Fa=303,Oa=304,co=306,Si=1e3,vi=1001,ka=1002,ne=1003,Vf=1004,Ks=1005,ye=1006,yo=1007,Yn=1008,Dn=1009,Wf=1010,Xf=1011,Vr=1012,mu=1013,yi=1014,$n=1015,ho=1016,gu=1017,_u=1018,rs=1020,qf=35902,Yf=1021,$f=1022,gn=1023,Kf=1024,Zf=1025,Qi=1026,os=1027,jf=1028,vu=1029,Qf=1030,xu=1031,Mu=1033,Eo=33776,bo=33777,To=33778,wo=33779,Cl=35840,Rl=35841,Pl=35842,Ll=35843,Dl=36196,Ul=37492,Il=37496,Nl=37808,Fl=37809,Ol=37810,kl=37811,zl=37812,Bl=37813,Hl=37814,Gl=37815,Vl=37816,Wl=37817,Xl=37818,ql=37819,Yl=37820,$l=37821,Ao=36492,Kl=36494,Zl=36495,Jf=36283,jl=36284,Ql=36285,Jl=36286,tp=3200,Su=3201,ep=0,np=1,qn="",oe="srgb",ti="srgb-linear",ja="display-p3",uo="display-p3-linear",Wr="linear",se="srgb",Xr="rec709",qr="p3",wi=7680,tc=519,ip=512,sp=513,rp=514,yu=515,op=516,ap=517,lp=518,cp=519,ec=35044,nc=35048,ic="300 es",Pn=2e3,Yr=2001;class us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zr=Math.PI/180,za=180/Math.PI;function ks(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function hp(i,t){return(i%t+t)%t}function Co(i,t,e){return(1-e)*i+e*t}function ms(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,s,r,o,a,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],M=s[1],v=s[4],T=s[7],k=s[2],C=s[5],w=s[8];return r[0]=o*_+a*M+l*k,r[3]=o*p+a*v+l*C,r[6]=o*m+a*T+l*w,r[1]=c*_+h*M+u*k,r[4]=c*p+h*v+u*C,r[7]=c*m+h*T+u*w,r[2]=d*_+f*M+g*k,r[5]=d*p+f*v+g*C,r[8]=d*m+f*T+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ro.makeScale(t,e)),this}rotate(t){return this.premultiply(Ro.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ro.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ro=new Ot;function Eu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function up(){const i=Ns("canvas");return i.style.display="block",i}const sc={};function bu(i){i in sc||(sc[i]=!0,console.warn(i))}function dp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const rc=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),oc=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zs={[ti]:{transfer:Wr,primaries:Xr,toReference:i=>i,fromReference:i=>i},[oe]:{transfer:se,primaries:Xr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[uo]:{transfer:Wr,primaries:qr,toReference:i=>i.applyMatrix3(oc),fromReference:i=>i.applyMatrix3(rc)},[ja]:{transfer:se,primaries:qr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(oc),fromReference:i=>i.applyMatrix3(rc).convertLinearToSRGB()}},fp=new Set([ti,uo]),jt={enabled:!0,_workingColorSpace:ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!fp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Zs[t].toReference,s=Zs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Zs[i].primaries},getTransfer:function(i){return i===qn?Wr:Zs[i].transfer}};function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Po(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ai;class pp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ai===void 0&&(Ai=Ns("canvas")),Ai.width=t.width,Ai.height=t.height;const n=Ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ns("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ji(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ji(e[n]/255)*255):e[n]=Ji(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mp=0;class Tu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=ks(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Lo(s[o].image)):r.push(Lo(s[o]))}else r=Lo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gp=0;class Le extends us{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=vi,s=vi,r=ye,o=Yn,a=gn,l=Dn,c=Le.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=ks(),this.name="",this.source=new Tu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Si:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Si:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=pu;Le.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,n=0,s=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,T=(f+1)/2,k=(m+1)/2,C=(h+d)/4,w=(u+_)/4,N=(g+p)/4;return v>T&&v>k?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=C/n,r=w/n):T>k?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=C/s,r=N/s):k<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),n=w/r,s=N/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _p extends us{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ye,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Le(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Tu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends _p{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class wu extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ne,this.minFilter=ne,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vp extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ne,this.minFilter=ne,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let p=1-a;const m=l*d+c*f+h*g+u*_,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const k=Math.sqrt(v),C=Math.atan2(k,m*M);p=Math.sin(p*C)/k,a=Math.sin(a*C)/k}const T=a*M;if(l=l*p+d*T,c=c*p+f*T,h=h*p+g*T,u=u*p+_*T,p===1-a){const k=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=k,c*=k,h*=k,u*=k}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ac.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ac.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Do.copy(this).projectOnVector(t),this.sub(Do)}reflect(t){return this.sub(Do.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new H,ac=new zs;class Bs{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox)),js.applyMatrix4(t.matrixWorld),this.union(js)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),Qs.subVectors(this.max,gs),Ci.subVectors(t.a,gs),Ri.subVectors(t.b,gs),Pi.subVectors(t.c,gs),Nn.subVectors(Ri,Ci),Fn.subVectors(Pi,Ri),si.subVectors(Ci,Pi);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-si.z,si.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,si.z,0,-si.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-si.y,si.x,0];return!Uo(e,Ci,Ri,Pi,Qs)||(e=[1,0,0,0,1,0,0,0,1],!Uo(e,Ci,Ri,Pi,Qs))?!1:(Js.crossVectors(Nn,Fn),e=[Js.x,Js.y,Js.z],Uo(e,Ci,Ri,Pi,Qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new H,new H,new H,new H,new H,new H,new H,new H],sn=new H,js=new Bs,Ci=new H,Ri=new H,Pi=new H,Nn=new H,Fn=new H,si=new H,gs=new H,Qs=new H,Js=new H,ri=new H;function Uo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ri.fromArray(i,r);const a=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),l=t.dot(ri),c=e.dot(ri),h=n.dot(ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const xp=new Bs,_s=new H,Io=new H;class Hs{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(Io)),this.expandByPoint(_s.copy(t.center).sub(Io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new H,No=new H,tr=new H,On=new H,Fo=new H,er=new H,Oo=new H;class Qa{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){No.copy(t).add(e).multiplyScalar(.5),tr.copy(e).sub(t).normalize(),On.copy(this.origin).sub(No);const r=t.distanceTo(e)*.5,o=-this.direction.dot(tr),a=On.dot(this.direction),l=-On.dot(tr),c=On.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(No).addScaledVector(tr,d),f}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,s,r){Fo.subVectors(e,t),er.subVectors(n,t),Oo.crossVectors(Fo,er);let o=this.direction.dot(Oo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,t);const l=a*this.direction.dot(er.crossVectors(On,er));if(l<0)return null;const c=a*this.direction.dot(Fo.cross(On));if(c<0||l+c>o)return null;const h=-a*On.dot(Oo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,p){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,p)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Li.setFromMatrixColumn(t,0).length(),r=1/Li.setFromMatrixColumn(t,1).length(),o=1/Li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mp,t,Sp)}lookAt(t,e,n){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),kn.crossVectors(n,qe),kn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),kn.crossVectors(n,qe)),kn.normalize(),nr.crossVectors(qe,kn),s[0]=kn.x,s[4]=nr.x,s[8]=qe.x,s[1]=kn.y,s[5]=nr.y,s[9]=qe.y,s[2]=kn.z,s[6]=nr.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],M=n[3],v=n[7],T=n[11],k=n[15],C=s[0],w=s[4],N=s[8],E=s[12],y=s[1],U=s[5],$=s[9],R=s[13],O=s[2],F=s[6],B=s[10],G=s[14],L=s[3],J=s[7],nt=s[11],st=s[15];return r[0]=o*C+a*y+l*O+c*L,r[4]=o*w+a*U+l*F+c*J,r[8]=o*N+a*$+l*B+c*nt,r[12]=o*E+a*R+l*G+c*st,r[1]=h*C+u*y+d*O+f*L,r[5]=h*w+u*U+d*F+f*J,r[9]=h*N+u*$+d*B+f*nt,r[13]=h*E+u*R+d*G+f*st,r[2]=g*C+_*y+p*O+m*L,r[6]=g*w+_*U+p*F+m*J,r[10]=g*N+_*$+p*B+m*nt,r[14]=g*E+_*R+p*G+m*st,r[3]=M*C+v*y+T*O+k*L,r[7]=M*w+v*U+T*F+k*J,r[11]=M*N+v*$+T*B+k*nt,r[15]=M*E+v*R+T*G+k*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],M=u*p*c-_*d*c+_*l*f-a*p*f-u*l*m+a*d*m,v=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,T=h*_*c-g*u*c+g*a*f-o*_*f-h*a*m+o*u*m,k=g*u*l-h*_*l-g*a*d+o*_*d+h*a*p-o*u*p,C=e*M+n*v+s*T+r*k;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return t[0]=M*w,t[1]=(_*d*r-u*p*r-_*s*f+n*p*f+u*s*m-n*d*m)*w,t[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*m+n*l*m)*w,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*w,t[4]=v*w,t[5]=(h*p*r-g*d*r+g*s*f-e*p*f-h*s*m+e*d*m)*w,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*w,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*w,t[8]=T*w,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*m-e*u*m)*w,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*m+e*a*m)*w,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*w,t[12]=k*w,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*p+e*u*p)*w,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*p-e*a*p)*w,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,p=o*u,m=a*u,M=l*c,v=l*h,T=l*u,k=n.x,C=n.y,w=n.z;return s[0]=(1-(_+m))*k,s[1]=(f+T)*k,s[2]=(g-v)*k,s[3]=0,s[4]=(f-T)*C,s[5]=(1-(d+m))*C,s[6]=(p+M)*C,s[7]=0,s[8]=(g+v)*w,s[9]=(p-M)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Li.set(s[0],s[1],s[2]).length();const o=Li.set(s[4],s[5],s[6]).length(),a=Li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],rn.copy(this);const c=1/r,h=1/o,u=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,e.setFromRotationMatrix(rn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Pn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===Pn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Yr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Pn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h;let g,_;if(a===Pn)g=(o+r)*u,_=-2*u;else if(a===Yr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Li=new H,rn=new ie,Mp=new H(0,0,0),Sp=new H(1,1,1),kn=new H,nr=new H,qe=new H,lc=new ie,cc=new zs;class Un{constructor(t=0,e=0,n=0,s=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cc.setFromEuler(this),this.setFromQuaternion(cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class Au{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yp=0;const hc=new H,Di=new zs,Sn=new ie,ir=new H,vs=new H,Ep=new H,bp=new zs,uc=new H(1,0,0),dc=new H(0,1,0),fc=new H(0,0,1),pc={type:"added"},Tp={type:"removed"},Ui={type:"childadded",child:null},ko={type:"childremoved",child:null};class be extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new H,e=new Un,n=new zs,s=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ot}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Au,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.multiply(Di),this}rotateOnWorldAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.premultiply(Di),this}rotateX(t){return this.rotateOnAxis(uc,t)}rotateY(t){return this.rotateOnAxis(dc,t)}rotateZ(t){return this.rotateOnAxis(fc,t)}translateOnAxis(t,e){return hc.copy(t).applyQuaternion(this.quaternion),this.position.add(hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uc,t)}translateY(t){return this.translateOnAxis(dc,t)}translateZ(t){return this.translateOnAxis(fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ir.copy(t):ir.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(vs,ir,this.up):Sn.lookAt(ir,vs,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(Sn),this.quaternion.premultiply(Di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pc),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tp),ko.child=t,this.dispatchEvent(ko),ko.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pc),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,t,Ep),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,bp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}be.DEFAULT_UP=new H(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new H,yn=new H,zo=new H,En=new H,Ii=new H,Ni=new H,mc=new H,Bo=new H,Ho=new H,Go=new H;class cn{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),yn.subVectors(n,e),zo.subVectors(t,e);const o=on.dot(on),a=on.dot(yn),l=on.dot(zo),c=yn.dot(yn),h=yn.dot(zo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l)}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),yn.subVectors(t,e),on.cross(yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),on.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ii.subVectors(s,n),Ni.subVectors(r,n),Bo.subVectors(t,n);const l=Ii.dot(Bo),c=Ni.dot(Bo);if(l<=0&&c<=0)return e.copy(n);Ho.subVectors(t,s);const h=Ii.dot(Ho),u=Ni.dot(Ho);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ii,o);Go.subVectors(t,r);const f=Ii.dot(Go),g=Ni.dot(Go);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ni,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return mc.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(mc,a);const m=1/(p+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(Ii,o).addScaledVector(Ni,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},sr={h:0,s:0,l:0};function Vo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=hp(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Vo(o,r,t+1/3),this.g=Vo(o,r,t),this.b=Vo(o,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=oe){const n=Cu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}copyLinearToSRGB(t){return this.r=Po(t.r),this.g=Po(t.g),this.b=Po(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oe){return jt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Be(Ae.r*255,0,255))*65536+Math.round(Be(Ae.g*255,0,255))*256+Math.round(Be(Ae.b*255,0,255))}getHexString(t=oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,s=Ae.g,r=Ae.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=oe){jt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,s=Ae.b;return t!==oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(sr);const n=Co(zn.h,sr.h,e),s=Co(zn.s,sr.s,e),r=Co(zn.l,sr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new It;It.NAMES=Cu;let wp=0;class ds extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=ji,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=Na,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ia&&(n.blendSrc=this.blendSrc),this.blendDst!==Na&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ce extends ds{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new H,rr=new Ht;class pe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ec,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return bu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)rr.fromBufferAttribute(this,e),rr.applyMatrix3(t),this.setXY(e,rr.x,rr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ec&&(t.usage=this.usage),t}}class Ru extends pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Pu extends pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Oe extends pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ap=0;const je=new ie,Wo=new be,Fi=new H,Ye=new Bs,xs=new Bs,Me=new H;class We extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eu(t)?Pu:Ru)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return Wo.lookAt(t),Wo.updateMatrix(),this.applyMatrix4(Wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(Ye.min,xs.min),Ye.expandByPoint(Me),Me.addVectors(Ye.max,xs.max),Ye.expandByPoint(Me)):(Ye.expandByPoint(xs.min),Ye.expandByPoint(xs.max))}Ye.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Me.fromBufferAttribute(a,c),l&&(Fi.fromBufferAttribute(t,c),Me.add(Fi)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new H,l[N]=new H;const c=new H,h=new H,u=new H,d=new Ht,f=new Ht,g=new Ht,_=new H,p=new H;function m(N,E,y){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(U),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(U),a[N].add(_),a[E].add(_),a[y].add(_),l[N].add(p),l[E].add(p),l[y].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let N=0,E=M.length;N<E;++N){const y=M[N],U=y.start,$=y.count;for(let R=U,O=U+$;R<O;R+=3)m(t.getX(R+0),t.getX(R+1),t.getX(R+2))}const v=new H,T=new H,k=new H,C=new H;function w(N){k.fromBufferAttribute(s,N),C.copy(k);const E=a[N];v.copy(E),v.sub(k.multiplyScalar(k.dot(E))).normalize(),T.crossVectors(C,E);const U=T.dot(l[N])<0?-1:1;o.setXYZW(N,v.x,v.y,v.z,U)}for(let N=0,E=M.length;N<E;++N){const y=M[N],U=y.start,$=y.count;for(let R=U,O=U+$;R<O;R+=3)w(t.getX(R+0)),w(t.getX(R+1)),w(t.getX(R+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,h=new H,u=new H;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new pe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new We,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gc=new ie,oi=new Qa,or=new Hs,_c=new H,Oi=new H,ki=new H,zi=new H,Xo=new H,ar=new H,lr=new Ht,cr=new Ht,hr=new Ht,vc=new H,xc=new H,Mc=new H,ur=new H,dr=new H;class qt extends be{constructor(t=new We,e=new ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ar.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Xo.fromBufferAttribute(u,t),o?ar.addScaledVector(Xo,h):ar.addScaledVector(Xo.sub(e),h))}e.add(ar)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(r),oi.copy(t.ray).recast(t.near),!(or.containsPoint(oi.origin)===!1&&(oi.intersectSphere(or,_c)===null||oi.origin.distanceToSquared(_c)>(t.far-t.near)**2))&&(gc.copy(r).invert(),oi.copy(t.ray).applyMatrix4(gc),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let T=M,k=v;T<k;T+=3){const C=a.getX(T),w=a.getX(T+1),N=a.getX(T+2);s=fr(this,m,t,n,c,h,u,C,w,N),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const M=a.getX(p),v=a.getX(p+1),T=a.getX(p+2);s=fr(this,o,t,n,c,h,u,M,v,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let T=M,k=v;T<k;T+=3){const C=T,w=T+1,N=T+2;s=fr(this,m,t,n,c,h,u,C,w,N),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const M=p,v=p+1,T=p+2;s=fr(this,o,t,n,c,h,u,M,v,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Cp(i,t,e,n,s,r,o,a){let l;if(t.side===Ge?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Qn,a),l===null)return null;dr.copy(a),dr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(dr);return c<e.near||c>e.far?null:{distance:c,point:dr.clone(),object:i}}function fr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Oi),i.getVertexPosition(l,ki),i.getVertexPosition(c,zi);const h=Cp(i,t,e,n,Oi,ki,zi,ur);if(h){s&&(lr.fromBufferAttribute(s,a),cr.fromBufferAttribute(s,l),hr.fromBufferAttribute(s,c),h.uv=cn.getInterpolation(ur,Oi,ki,zi,lr,cr,hr,new Ht)),r&&(lr.fromBufferAttribute(r,a),cr.fromBufferAttribute(r,l),hr.fromBufferAttribute(r,c),h.uv1=cn.getInterpolation(ur,Oi,ki,zi,lr,cr,hr,new Ht)),o&&(vc.fromBufferAttribute(o,a),xc.fromBufferAttribute(o,l),Mc.fromBufferAttribute(o,c),h.normal=cn.getInterpolation(ur,Oi,ki,zi,vc,xc,Mc,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new H,materialIndex:0};cn.getNormal(Oi,ki,zi,u.normal),h.face=u}return h}class Ve extends We{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(u,2));function g(_,p,m,M,v,T,k,C,w,N,E){const y=T/w,U=k/N,$=T/2,R=k/2,O=C/2,F=w+1,B=N+1;let G=0,L=0;const J=new H;for(let nt=0;nt<B;nt++){const st=nt*U-R;for(let mt=0;mt<F;mt++){const gt=mt*y-$;J[_]=gt*M,J[p]=st*v,J[m]=O,c.push(J.x,J.y,J.z),J[_]=0,J[p]=0,J[m]=C>0?1:-1,h.push(J.x,J.y,J.z),u.push(mt/w),u.push(1-nt/N),G+=1}}for(let nt=0;nt<N;nt++)for(let st=0;st<w;st++){const mt=d+st+F*nt,gt=d+st+F*(nt+1),V=d+(st+1)+F*(nt+1),Y=d+(st+1)+F*nt;l.push(mt,gt,Y),l.push(gt,V,Y),L+=6}a.addGroup(f,L,E),f+=L,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function as(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ne(i){const t={};for(let e=0;e<i.length;e++){const n=as(i[e]);for(const s in n)t[s]=n[s]}return t}function Rp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Lu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const Pp={clone:as,merge:Ne};var Lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $e extends ds{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lp,this.fragmentShader=Dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=Rp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Du extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new H,Sc=new Ht,yc=new Ht;class He extends Du{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=za*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return za*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,Sc,yc),e.subVectors(yc,Sc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bi=-90,Hi=1;class Up extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new He(Bi,Hi,t,e);s.layers=this.layers,this.add(s);const r=new He(Bi,Hi,t,e);r.layers=this.layers,this.add(r);const o=new He(Bi,Hi,t,e);o.layers=this.layers,this.add(o);const a=new He(Bi,Hi,t,e);a.layers=this.layers,this.add(a);const l=new He(Bi,Hi,t,e);l.layers=this.layers,this.add(l);const c=new He(Bi,Hi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Uu extends Le{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:is,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ip extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Uu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ve(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Zn});r.uniforms.tEquirect.value=e;const o=new qt(s,r),a=e.minFilter;return e.minFilter===Yn&&(e.minFilter=ye),new Up(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const qo=new H,Np=new H,Fp=new Ot;class di{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=qo.subVectors(n,e).cross(Np.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(qo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Fp.getNormalMatrix(t),s=this.coplanarPoint(qo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new Hs,pr=new H;class Ja{constructor(t=new di,e=new di,n=new di,s=new di,r=new di,o=new di){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],p=s[11],m=s[12],M=s[13],v=s[14],T=s[15];if(n[0].setComponents(l-r,d-c,p-f,T-m).normalize(),n[1].setComponents(l+r,d+c,p+f,T+m).normalize(),n[2].setComponents(l+o,d+h,p+g,T+M).normalize(),n[3].setComponents(l-o,d-h,p-g,T-M).normalize(),n[4].setComponents(l-a,d-u,p-_,T-v).normalize(),e===Pn)n[5].setComponents(l+a,d+u,p+_,T+v).normalize();else if(e===Yr)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(pr.x=s.normal.x>0?t.max.x:t.min.x,pr.y=s.normal.y>0?t.max.y:t.min.y,pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Iu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Op(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,a),u.count===-1&&d.length===0&&i.bufferSubData(c,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Te extends We{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const M=m*d-o;for(let v=0;v<c;v++){const T=v*u-r;g.push(T,-M,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const v=M+c*m,T=M+c*(m+1),k=M+1+c*(m+1),C=M+1+c*m;f.push(v,T,C),f.push(T,k,C)}this.setIndex(f),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(_,3)),this.setAttribute("uv",new Oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.width,t.height,t.widthSegments,t.heightSegments)}}var kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,am=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pm="gl_FragColor = linearToOutputTexel( gl_FragColor );",mm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,gm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Im=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Om=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,km=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ym=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,t0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,n0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,a0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,f0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,S0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,y0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,E0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,T0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,A0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,L0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,D0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,F0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,W0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,X0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,q0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ng=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:kp,alphahash_pars_fragment:zp,alphamap_fragment:Bp,alphamap_pars_fragment:Hp,alphatest_fragment:Gp,alphatest_pars_fragment:Vp,aomap_fragment:Wp,aomap_pars_fragment:Xp,batching_pars_vertex:qp,batching_vertex:Yp,begin_vertex:$p,beginnormal_vertex:Kp,bsdfs:Zp,iridescence_fragment:jp,bumpmap_pars_fragment:Qp,clipping_planes_fragment:Jp,clipping_planes_pars_fragment:tm,clipping_planes_pars_vertex:em,clipping_planes_vertex:nm,color_fragment:im,color_pars_fragment:sm,color_pars_vertex:rm,color_vertex:om,common:am,cube_uv_reflection_fragment:lm,defaultnormal_vertex:cm,displacementmap_pars_vertex:hm,displacementmap_vertex:um,emissivemap_fragment:dm,emissivemap_pars_fragment:fm,colorspace_fragment:pm,colorspace_pars_fragment:mm,envmap_fragment:gm,envmap_common_pars_fragment:_m,envmap_pars_fragment:vm,envmap_pars_vertex:xm,envmap_physical_pars_fragment:Pm,envmap_vertex:Mm,fog_vertex:Sm,fog_pars_vertex:ym,fog_fragment:Em,fog_pars_fragment:bm,gradientmap_pars_fragment:Tm,lightmap_pars_fragment:wm,lights_lambert_fragment:Am,lights_lambert_pars_fragment:Cm,lights_pars_begin:Rm,lights_toon_fragment:Lm,lights_toon_pars_fragment:Dm,lights_phong_fragment:Um,lights_phong_pars_fragment:Im,lights_physical_fragment:Nm,lights_physical_pars_fragment:Fm,lights_fragment_begin:Om,lights_fragment_maps:km,lights_fragment_end:zm,logdepthbuf_fragment:Bm,logdepthbuf_pars_fragment:Hm,logdepthbuf_pars_vertex:Gm,logdepthbuf_vertex:Vm,map_fragment:Wm,map_pars_fragment:Xm,map_particle_fragment:qm,map_particle_pars_fragment:Ym,metalnessmap_fragment:$m,metalnessmap_pars_fragment:Km,morphinstance_vertex:Zm,morphcolor_vertex:jm,morphnormal_vertex:Qm,morphtarget_pars_vertex:Jm,morphtarget_vertex:t0,normal_fragment_begin:e0,normal_fragment_maps:n0,normal_pars_fragment:i0,normal_pars_vertex:s0,normal_vertex:r0,normalmap_pars_fragment:o0,clearcoat_normal_fragment_begin:a0,clearcoat_normal_fragment_maps:l0,clearcoat_pars_fragment:c0,iridescence_pars_fragment:h0,opaque_fragment:u0,packing:d0,premultiplied_alpha_fragment:f0,project_vertex:p0,dithering_fragment:m0,dithering_pars_fragment:g0,roughnessmap_fragment:_0,roughnessmap_pars_fragment:v0,shadowmap_pars_fragment:x0,shadowmap_pars_vertex:M0,shadowmap_vertex:S0,shadowmask_pars_fragment:y0,skinbase_vertex:E0,skinning_pars_vertex:b0,skinning_vertex:T0,skinnormal_vertex:w0,specularmap_fragment:A0,specularmap_pars_fragment:C0,tonemapping_fragment:R0,tonemapping_pars_fragment:P0,transmission_fragment:L0,transmission_pars_fragment:D0,uv_pars_fragment:U0,uv_pars_vertex:I0,uv_vertex:N0,worldpos_vertex:F0,background_vert:O0,background_frag:k0,backgroundCube_vert:z0,backgroundCube_frag:B0,cube_vert:H0,cube_frag:G0,depth_vert:V0,depth_frag:W0,distanceRGBA_vert:X0,distanceRGBA_frag:q0,equirect_vert:Y0,equirect_frag:$0,linedashed_vert:K0,linedashed_frag:Z0,meshbasic_vert:j0,meshbasic_frag:Q0,meshlambert_vert:J0,meshlambert_frag:tg,meshmatcap_vert:eg,meshmatcap_frag:ng,meshnormal_vert:ig,meshnormal_frag:sg,meshphong_vert:rg,meshphong_frag:og,meshphysical_vert:ag,meshphysical_frag:lg,meshtoon_vert:cg,meshtoon_frag:hg,points_vert:ug,points_frag:dg,shadow_vert:fg,shadow_frag:pg,sprite_vert:mg,sprite_frag:gg},lt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},pn={basic:{uniforms:Ne([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ne([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new It(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ne([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ne([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ne([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new It(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ne([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ne([lt.points,lt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ne([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ne([lt.common,lt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ne([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ne([lt.sprite,lt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ne([lt.common,lt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ne([lt.lights,lt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};pn.physical={uniforms:Ne([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const mr={r:0,b:0,g:0},li=new Un,_g=new ie;function vg(i,t,e,n,s,r,o){const a=new It(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const T=g(M);T===null?m(a,l):T&&T.isColor&&(m(T,1),v=!0);const k=i.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,o):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,v){const T=g(v);T&&(T.isCubeTexture||T.mapping===co)?(h===void 0&&(h=new qt(new Ve(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:as(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),li.copy(v.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_g.makeRotationFromEuler(li)),h.material.toneMapped=jt.getTransfer(T.colorSpace)!==se,(u!==T||d!==T.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new qt(new Te(2,2),new $e({name:"BackgroundMaterial",uniforms:as(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=jt.getTransfer(T.colorSpace)!==se,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,v){M.getRGB(mr,Lu(i)),n.buffers.color.setClear(mr.r,mr.g,mr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:_,addToRenderList:p}}function xg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,U,$,R,O){let F=!1;const B=u(R,$,U);r!==B&&(r=B,c(r.object)),F=f(y,R,$,O),F&&g(y,R,$,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,T(y,U,$,R),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,U,$){const R=$.wireframe===!0;let O=n[y.id];O===void 0&&(O={},n[y.id]=O);let F=O[U.id];F===void 0&&(F={},O[U.id]=F);let B=F[R];return B===void 0&&(B=d(l()),F[R]=B),B}function d(y){const U=[],$=[],R=[];for(let O=0;O<e;O++)U[O]=0,$[O]=0,R[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:$,attributeDivisors:R,object:y,attributes:{},index:null}}function f(y,U,$,R){const O=r.attributes,F=U.attributes;let B=0;const G=$.getAttributes();for(const L in G)if(G[L].location>=0){const nt=O[L];let st=F[L];if(st===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),nt===void 0||nt.attribute!==st||st&&nt.data!==st.data)return!0;B++}return r.attributesNum!==B||r.index!==R}function g(y,U,$,R){const O={},F=U.attributes;let B=0;const G=$.getAttributes();for(const L in G)if(G[L].location>=0){let nt=F[L];nt===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor));const st={};st.attribute=nt,nt&&nt.data&&(st.data=nt.data),O[L]=st,B++}r.attributes=O,r.attributesNum=B,r.index=R}function _(){const y=r.newAttributes;for(let U=0,$=y.length;U<$;U++)y[U]=0}function p(y){m(y,0)}function m(y,U){const $=r.newAttributes,R=r.enabledAttributes,O=r.attributeDivisors;$[y]=1,R[y]===0&&(i.enableVertexAttribArray(y),R[y]=1),O[y]!==U&&(i.vertexAttribDivisor(y,U),O[y]=U)}function M(){const y=r.newAttributes,U=r.enabledAttributes;for(let $=0,R=U.length;$<R;$++)U[$]!==y[$]&&(i.disableVertexAttribArray($),U[$]=0)}function v(y,U,$,R,O,F,B){B===!0?i.vertexAttribIPointer(y,U,$,O,F):i.vertexAttribPointer(y,U,$,R,O,F)}function T(y,U,$,R){_();const O=R.attributes,F=$.getAttributes(),B=U.defaultAttributeValues;for(const G in F){const L=F[G];if(L.location>=0){let J=O[G];if(J===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(J=y.instanceColor)),J!==void 0){const nt=J.normalized,st=J.itemSize,mt=t.get(J);if(mt===void 0)continue;const gt=mt.buffer,V=mt.type,Y=mt.bytesPerElement,at=V===i.INT||V===i.UNSIGNED_INT||J.gpuType===mu;if(J.isInterleavedBufferAttribute){const Z=J.data,xt=Z.stride,pt=J.offset;if(Z.isInstancedInterleavedBuffer){for(let Lt=0;Lt<L.locationSize;Lt++)m(L.location+Lt,Z.meshPerAttribute);y.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Lt=0;Lt<L.locationSize;Lt++)p(L.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let Lt=0;Lt<L.locationSize;Lt++)v(L.location+Lt,st/L.locationSize,V,nt,xt*Y,(pt+st/L.locationSize*Lt)*Y,at)}else{if(J.isInstancedBufferAttribute){for(let Z=0;Z<L.locationSize;Z++)m(L.location+Z,J.meshPerAttribute);y.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Z=0;Z<L.locationSize;Z++)p(L.location+Z);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let Z=0;Z<L.locationSize;Z++)v(L.location+Z,st/L.locationSize,V,nt,st*Y,st/L.locationSize*Z*Y,at)}}else if(B!==void 0){const nt=B[G];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(L.location,nt);break;case 3:i.vertexAttrib3fv(L.location,nt);break;case 4:i.vertexAttrib4fv(L.location,nt);break;default:i.vertexAttrib1fv(L.location,nt)}}}}M()}function k(){N();for(const y in n){const U=n[y];for(const $ in U){const R=U[$];for(const O in R)h(R[O].object),delete R[O];delete U[$]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;const U=n[y.id];for(const $ in U){const R=U[$];for(const O in R)h(R[O].object),delete R[O];delete U[$]}delete n[y.id]}function w(y){for(const U in n){const $=n[U];if($[y.id]===void 0)continue;const R=$[y.id];for(const O in R)h(R[O].object),delete R[O];delete $[y.id]}}function N(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:E,dispose:k,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function Mg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(c[f],h[f]);else{d.multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Sg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==gn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const w=C===ho&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Dn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==$n&&!w)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=f>0,k=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:T,maxSamples:k}}function yg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new di,a=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const M=r?0:n,v=M*4;let T=m.clippingState||null;l.value=T,T=h(g,d,v,f);for(let k=0;k!==v;++k)T[k]=e[k];m.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,T=f;v!==_;++v,T+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Eg(i){let t=new WeakMap;function e(o,a){return a===Fa?o.mapping=is:a===Oa&&(o.mapping=ss),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fa||a===Oa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ip(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ei extends Du{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ki=4,Ec=[.125,.215,.35,.446,.526,.582],gi=20,Yo=new Ei,bc=new It;let $o=null,Ko=0,Zo=0,jo=!1;const fi=(1+Math.sqrt(5))/2,Gi=1/fi,Tc=[new H(-fi,Gi,0),new H(fi,Gi,0),new H(-Gi,0,fi),new H(Gi,0,fi),new H(0,fi,-Gi),new H(0,fi,Gi),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class wc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){$o=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($o,Ko,Zo),this._renderer.xr.enabled=jo,t.scissorTest=!1,gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$o=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ye,minFilter:ye,generateMipmaps:!1,type:ho,format:gn,colorSpace:ti,depthBuffer:!1},s=Ac(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ac(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bg(r)),this._blurMaterial=Tg(r,t,e)}return s}_compileMaterial(t){const e=new qt(this._lodPlanes[0],t);this._renderer.compile(e,Yo)}_sceneToCubeUV(t,e,n,s){const a=new He(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(bc),h.toneMapping=Ln,h.autoClear=!1;const f=new ce({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new qt(new Ve,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(bc),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;gr(s,M*v,m>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===is||t.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;gr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Yo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Tc[(s-r-1)%Tc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new qt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*gi-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):gi;p>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gi}`);const m=[];let M=0;for(let w=0;w<gi;++w){const N=w/_,E=Math.exp(-N*N/2);m.push(E),w===0?M+=E:w<p&&(M+=2*E)}for(let w=0;w<m.length;w++)m[w]=m[w]/M;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const T=this._sizeLods[s],k=3*T*(s>v-Ki?s-v+Ki:0),C=4*(this._cubeSize-T);gr(e,k,C,3*T,2*T),l.setRenderTarget(e),l.render(u,Yo)}}function bg(i){const t=[],e=[],n=[];let s=i;const r=i-Ki+1+Ec.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ki?l=Ec[o-i+Ki-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,M=new Float32Array(_*g*f),v=new Float32Array(p*g*f),T=new Float32Array(m*g*f);for(let C=0;C<f;C++){const w=C%3*2/3-1,N=C>2?0:-1,E=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];M.set(E,_*g*C),v.set(d,p*g*C);const y=[C,C,C,C,C,C];T.set(y,m*g*C)}const k=new We;k.setAttribute("position",new pe(M,_)),k.setAttribute("uv",new pe(v,p)),k.setAttribute("faceIndex",new pe(T,m)),t.push(k),s>Ki&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ac(i,t,e){const n=new _n(i,t,e);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Tg(i,t,e){const n=new Float32Array(gi),s=new H(0,1,0);return new $e({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Cc(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Rc(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function tl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fa||l===Oa,h=l===is||l===ss;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new wc(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new wc(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ag(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&bu("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Cg(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let v=0,T=M.length;v<T;v+=3){const k=M[v+0],C=M[v+1],w=M[v+2];d.push(k,C,C,w,w,k)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,T=M.length/3-1;v<T;v+=3){const k=v+0,C=v+1,w=v+2;d.push(k,C,C,w,w,k)}}else return;const p=new(Eu(d)?Pu:Ru)(d,1);p.version=_;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Rg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<g;p++)this.render(d[p]/o,f[p]);else{_.multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}}function u(d,f,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=f[M];for(let M=0;M<_.length;M++)e.update(m,n,_[M])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Pg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Lg(i,t,e){const n=new WeakMap,s=new Ee;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let y=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let T=0;g===!0&&(T=1),_===!0&&(T=2),p===!0&&(T=3);let k=a.attributes.position.count*T,C=1;k>t.maxTextureSize&&(C=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const w=new Float32Array(k*C*4*u),N=new wu(w,k,C,u);N.type=$n,N.needsUpdate=!0;const E=T*4;for(let U=0;U<u;U++){const $=m[U],R=M[U],O=v[U],F=k*C*4*U;for(let B=0;B<$.count;B++){const G=B*E;g===!0&&(s.fromBufferAttribute($,B),w[F+G+0]=s.x,w[F+G+1]=s.y,w[F+G+2]=s.z,w[F+G+3]=0),_===!0&&(s.fromBufferAttribute(R,B),w[F+G+4]=s.x,w[F+G+5]=s.y,w[F+G+6]=s.z,w[F+G+7]=0),p===!0&&(s.fromBufferAttribute(O,B),w[F+G+8]=s.x,w[F+G+9]=s.y,w[F+G+10]=s.z,w[F+G+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:N,size:new Ht(k,C)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Dg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class el extends Le{constructor(t,e,n,s,r,o,a,l,c,h=Qi){if(h!==Qi&&h!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Qi&&(n=yi),n===void 0&&h===os&&(n=rs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ne,this.minFilter=l!==void 0?l:ne,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Nu=new Le,Fu=new el(1,1);Fu.compareFunction=yu;const Ou=new wu,ku=new vp,zu=new Uu,Pc=[],Lc=[],Dc=new Float32Array(16),Uc=new Float32Array(9),Ic=new Float32Array(4);function fs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Pc[s];if(r===void 0&&(r=new Float32Array(s),Pc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fo(i,t){let e=Lc[t];e===void 0&&(e=new Int32Array(t),Lc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ug(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function Ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function Fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function Og(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Ic.set(n),i.uniformMatrix2fv(this.addr,!1,Ic),_e(e,n)}}function kg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Uc.set(n),i.uniformMatrix3fv(this.addr,!1,Uc),_e(e,n)}}function zg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Dc.set(n),i.uniformMatrix4fv(this.addr,!1,Dc),_e(e,n)}}function Bg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function Gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function Vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function Wg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function $g(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Fu:Nu;e.setTexture2D(t||r,s)}function Kg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ku,s)}function Zg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zu,s)}function jg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ou,s)}function Qg(i){switch(i){case 5126:return Ug;case 35664:return Ig;case 35665:return Ng;case 35666:return Fg;case 35674:return Og;case 35675:return kg;case 35676:return zg;case 5124:case 35670:return Bg;case 35667:case 35671:return Hg;case 35668:case 35672:return Gg;case 35669:case 35673:return Vg;case 5125:return Wg;case 36294:return Xg;case 36295:return qg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return jg}}function Jg(i,t){i.uniform1fv(this.addr,t)}function t_(i,t){const e=fs(t,this.size,2);i.uniform2fv(this.addr,e)}function e_(i,t){const e=fs(t,this.size,3);i.uniform3fv(this.addr,e)}function n_(i,t){const e=fs(t,this.size,4);i.uniform4fv(this.addr,e)}function i_(i,t){const e=fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function s_(i,t){const e=fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function r_(i,t){const e=fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function o_(i,t){i.uniform1iv(this.addr,t)}function a_(i,t){i.uniform2iv(this.addr,t)}function l_(i,t){i.uniform3iv(this.addr,t)}function c_(i,t){i.uniform4iv(this.addr,t)}function h_(i,t){i.uniform1uiv(this.addr,t)}function u_(i,t){i.uniform2uiv(this.addr,t)}function d_(i,t){i.uniform3uiv(this.addr,t)}function f_(i,t){i.uniform4uiv(this.addr,t)}function p_(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Nu,r[o])}function m_(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ku,r[o])}function g_(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||zu,r[o])}function __(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ou,r[o])}function v_(i){switch(i){case 5126:return Jg;case 35664:return t_;case 35665:return e_;case 35666:return n_;case 35674:return i_;case 35675:return s_;case 35676:return r_;case 5124:case 35670:return o_;case 35667:case 35671:return a_;case 35668:case 35672:return l_;case 35669:case 35673:return c_;case 5125:return h_;case 36294:return u_;case 36295:return d_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return __}}class x_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qg(e.type)}}class M_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=v_(e.type)}}class S_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function Nc(i,t){i.seq.push(t),i.map[t.id]=t}function y_(i,t,e){const n=i.name,s=n.length;for(Qo.lastIndex=0;;){const r=Qo.exec(n),o=Qo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Nc(e,c===void 0?new x_(a,i,t):new M_(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new S_(a),Nc(e,u)),e=u}}}class Br{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);y_(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Fc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const E_=37297;let b_=0;function T_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function w_(i){const t=jt.getPrimaries(jt.workingColorSpace),e=jt.getPrimaries(i);let n;switch(t===e?n="":t===qr&&e===Xr?n="LinearDisplayP3ToLinearSRGB":t===Xr&&e===qr&&(n="LinearSRGBToLinearDisplayP3"),i){case ti:case uo:return[n,"LinearTransferOETF"];case oe:case ja:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Oc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+T_(i.getShaderSource(t),o)}else return s}function A_(i,t){const e=w_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function C_(i,t){let e;switch(t){case Ff:e="Linear";break;case Of:e="Reinhard";break;case kf:e="OptimizedCineon";break;case zf:e="ACESFilmic";break;case Hf:e="AgX";break;case Gf:e="Neutral";break;case Bf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function R_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function P_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function L_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ws(i){return i!==""}function kc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const D_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(i){return i.replace(D_,I_)}const U_=new Map;function I_(i,t){let e=Ft[t];if(e===void 0){const n=U_.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ba(e)}const N_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(i){return i.replace(N_,F_)}function F_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function O_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===uu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===du?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function k_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case is:case ss:t="ENVMAP_TYPE_CUBE";break;case co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function z_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ss:t="ENVMAP_MODE_REFRACTION";break}return t}function B_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fu:t="ENVMAP_BLENDING_MULTIPLY";break;case If:t="ENVMAP_BLENDING_MIX";break;case Nf:t="ENVMAP_BLENDING_ADD";break}return t}function H_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function G_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=O_(e),c=k_(e),h=z_(e),u=B_(e),d=H_(e),f=R_(e),g=P_(r),_=s.createProgram();let p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ws).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ws).join(`
`),m.length>0&&(m+=`
`)):(p=[Hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),m=[Hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Ln?C_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,A_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ws).join(`
`)),o=Ba(o),o=kc(o,e),o=zc(o,e),a=Ba(a),a=kc(a,e),a=zc(a,e),o=Bc(o),a=Bc(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=M+p+o,T=M+m+a,k=Fc(s,s.VERTEX_SHADER,v),C=Fc(s,s.FRAGMENT_SHADER,T);s.attachShader(_,k),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(U){if(i.debug.checkShaderErrors){const $=s.getProgramInfoLog(_).trim(),R=s.getShaderInfoLog(k).trim(),O=s.getShaderInfoLog(C).trim();let F=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,k,C);else{const G=Oc(s,k,"vertex"),L=Oc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+$+`
`+G+`
`+L)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(R===""||O==="")&&(B=!1);B&&(U.diagnostics={runnable:F,programLog:$,vertexShader:{log:R,prefix:p},fragmentShader:{log:O,prefix:m}})}s.deleteShader(k),s.deleteShader(C),N=new Br(s,_),E=L_(s,_)}let N;this.getUniforms=function(){return N===void 0&&w(this),N};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,E_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=b_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=k,this.fragmentShader=C,this}let V_=0;class W_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new X_(t),e.set(t,n)),n}}class X_{constructor(t){this.id=V_++,this.code=t,this.usedTimes=0}}function q_(i,t,e,n,s,r,o){const a=new Au,l=new W_,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,y,U,$,R){const O=$.fog,F=R.geometry,B=E.isMeshStandardMaterial?$.environment:null,G=(E.isMeshStandardMaterial?e:t).get(E.envMap||B),L=G&&G.mapping===co?G.image.height:null,J=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const nt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,st=nt!==void 0?nt.length:0;let mt=0;F.morphAttributes.position!==void 0&&(mt=1),F.morphAttributes.normal!==void 0&&(mt=2),F.morphAttributes.color!==void 0&&(mt=3);let gt,V,Y,at;if(J){const Jt=pn[J];gt=Jt.vertexShader,V=Jt.fragmentShader}else gt=E.vertexShader,V=E.fragmentShader,l.update(E),Y=l.getVertexShaderID(E),at=l.getFragmentShaderID(E);const Z=i.getRenderTarget(),xt=R.isInstancedMesh===!0,pt=R.isBatchedMesh===!0,Lt=!!E.map,P=!!E.matcap,Ut=!!G,At=!!E.aoMap,Qt=!!E.lightMap,St=!!E.bumpMap,Bt=!!E.normalMap,Gt=!!E.displacementMap,Nt=!!E.emissiveMap,de=!!E.metalnessMap,A=!!E.roughnessMap,x=E.anisotropy>0,q=E.clearcoat>0,Q=E.dispersion>0,tt=E.iridescence>0,et=E.sheen>0,Et=E.transmission>0,ct=x&&!!E.anisotropyMap,ht=q&&!!E.clearcoatMap,kt=q&&!!E.clearcoatNormalMap,it=q&&!!E.clearcoatRoughnessMap,Mt=tt&&!!E.iridescenceMap,Vt=tt&&!!E.iridescenceThicknessMap,Rt=et&&!!E.sheenColorMap,ut=et&&!!E.sheenRoughnessMap,zt=!!E.specularMap,Xt=!!E.specularColorMap,he=!!E.specularIntensityMap,D=Et&&!!E.transmissionMap,dt=Et&&!!E.thicknessMap,K=!!E.gradientMap,j=!!E.alphaMap,ot=E.alphaTest>0,Pt=!!E.alphaHash,Yt=!!E.extensions;let ue=Ln;E.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ue=i.toneMapping);const ve={shaderID:J,shaderType:E.type,shaderName:E.name,vertexShader:gt,fragmentShader:V,defines:E.defines,customVertexShaderID:Y,customFragmentShaderID:at,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:pt,batchingColor:pt&&R._colorsTexture!==null,instancing:xt,instancingColor:xt&&R.instanceColor!==null,instancingMorph:xt&&R.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ti,alphaToCoverage:!!E.alphaToCoverage,map:Lt,matcap:P,envMap:Ut,envMapMode:Ut&&G.mapping,envMapCubeUVHeight:L,aoMap:At,lightMap:Qt,bumpMap:St,normalMap:Bt,displacementMap:d&&Gt,emissiveMap:Nt,normalMapObjectSpace:Bt&&E.normalMapType===np,normalMapTangentSpace:Bt&&E.normalMapType===ep,metalnessMap:de,roughnessMap:A,anisotropy:x,anisotropyMap:ct,clearcoat:q,clearcoatMap:ht,clearcoatNormalMap:kt,clearcoatRoughnessMap:it,dispersion:Q,iridescence:tt,iridescenceMap:Mt,iridescenceThicknessMap:Vt,sheen:et,sheenColorMap:Rt,sheenRoughnessMap:ut,specularMap:zt,specularColorMap:Xt,specularIntensityMap:he,transmission:Et,transmissionMap:D,thicknessMap:dt,gradientMap:K,opaque:E.transparent===!1&&E.blending===ji&&E.alphaToCoverage===!1,alphaMap:j,alphaTest:ot,alphaHash:Pt,combine:E.combine,mapUv:Lt&&_(E.map.channel),aoMapUv:At&&_(E.aoMap.channel),lightMapUv:Qt&&_(E.lightMap.channel),bumpMapUv:St&&_(E.bumpMap.channel),normalMapUv:Bt&&_(E.normalMap.channel),displacementMapUv:Gt&&_(E.displacementMap.channel),emissiveMapUv:Nt&&_(E.emissiveMap.channel),metalnessMapUv:de&&_(E.metalnessMap.channel),roughnessMapUv:A&&_(E.roughnessMap.channel),anisotropyMapUv:ct&&_(E.anisotropyMap.channel),clearcoatMapUv:ht&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:kt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:ut&&_(E.sheenRoughnessMap.channel),specularMapUv:zt&&_(E.specularMap.channel),specularColorMapUv:Xt&&_(E.specularColorMap.channel),specularIntensityMapUv:he&&_(E.specularIntensityMap.channel),transmissionMapUv:D&&_(E.transmissionMap.channel),thicknessMapUv:dt&&_(E.thicknessMap.channel),alphaMapUv:j&&_(E.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Bt||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!F.attributes.uv&&(Lt||j),fog:!!O,useFog:E.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:R.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:mt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:Lt&&E.map.isVideoTexture===!0&&jt.getTransfer(E.map.colorSpace)===se,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Fe,flipSided:E.side===Ge,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Yt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Yt&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function m(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)y.push(U),y.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(M(y,E),v(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function M(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function v(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),E.push(a.mask)}function T(E){const y=g[E.type];let U;if(y){const $=pn[y];U=Pp.clone($.uniforms)}else U=E.uniforms;return U}function k(E,y){let U;for(let $=0,R=h.length;$<R;$++){const O=h[$];if(O.cacheKey===y){U=O,++U.usedTimes;break}}return U===void 0&&(U=new G_(i,y,E,r),h.push(U)),U}function C(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function w(E){l.remove(E)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:T,acquireProgram:k,releaseProgram:C,releaseShaderCache:w,programs:h,dispose:N}}function Y_(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function $_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Gc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Vc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function a(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||$_),n.length>1&&n.sort(d||Gc),s.length>1&&s.sort(d||Gc)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function K_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Vc,i.set(n,[o])):s>=r.length?(o=new Vc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Z_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new It};break;case"SpotLight":e={position:new H,direction:new H,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function j_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Q_=0;function J_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tv(i){const t=new Z_,e=j_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const s=new H,r=new ie,o=new ie;function a(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,M=0,v=0,T=0,k=0,C=0,w=0;c.sort(J_);for(let E=0,y=c.length;E<y;E++){const U=c[E],$=U.color,R=U.intensity,O=U.distance,F=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=$.r*R,u+=$.g*R,d+=$.b*R;else if(U.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(U.sh.coefficients[B],R);w++}else if(U.isDirectionalLight){const B=t.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const G=U.shadow,L=e.get(U);L.shadowBias=G.bias,L.shadowNormalBias=G.normalBias,L.shadowRadius=G.radius,L.shadowMapSize=G.mapSize,n.directionalShadow[f]=L,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=U.shadow.matrix,M++}n.directional[f]=B,f++}else if(U.isSpotLight){const B=t.get(U);B.position.setFromMatrixPosition(U.matrixWorld),B.color.copy($).multiplyScalar(R),B.distance=O,B.coneCos=Math.cos(U.angle),B.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),B.decay=U.decay,n.spot[_]=B;const G=U.shadow;if(U.map&&(n.spotLightMap[k]=U.map,k++,G.updateMatrices(U),U.castShadow&&C++),n.spotLightMatrix[_]=G.matrix,U.castShadow){const L=e.get(U);L.shadowBias=G.bias,L.shadowNormalBias=G.normalBias,L.shadowRadius=G.radius,L.shadowMapSize=G.mapSize,n.spotShadow[_]=L,n.spotShadowMap[_]=F,T++}_++}else if(U.isRectAreaLight){const B=t.get(U);B.color.copy($).multiplyScalar(R),B.halfWidth.set(U.width*.5,0,0),B.halfHeight.set(0,U.height*.5,0),n.rectArea[p]=B,p++}else if(U.isPointLight){const B=t.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity),B.distance=U.distance,B.decay=U.decay,U.castShadow){const G=U.shadow,L=e.get(U);L.shadowBias=G.bias,L.shadowNormalBias=G.normalBias,L.shadowRadius=G.radius,L.shadowMapSize=G.mapSize,L.shadowCameraNear=G.camera.near,L.shadowCameraFar=G.camera.far,n.pointShadow[g]=L,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=U.shadow.matrix,v++}n.point[g]=B,g++}else if(U.isHemisphereLight){const B=t.get(U);B.skyColor.copy(U.color).multiplyScalar(R),B.groundColor.copy(U.groundColor).multiplyScalar(R),n.hemi[m]=B,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const N=n.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==p||N.hemiLength!==m||N.numDirectionalShadows!==M||N.numPointShadows!==v||N.numSpotShadows!==T||N.numSpotMaps!==k||N.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=T+k-C,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,N.directionalLength=f,N.pointLength=g,N.spotLength=_,N.rectAreaLength=p,N.hemiLength=m,N.numDirectionalShadows=M,N.numPointShadows=v,N.numSpotShadows=T,N.numSpotMaps=k,N.numLightProbes=w,n.version=Q_++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const v=c[m];if(v.isDirectionalLight){const T=n.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),u++}else if(v.isSpotLight){const T=n.spot[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),f++}else if(v.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const T=n.point[d];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const T=n.hemi[_];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function Wc(i){const t=new tv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ev(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Wc(i),t.set(s,[a])):r>=o.length?(a=new Wc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Bu extends ds{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nv extends ds{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rv(i,t,e){let n=new Ja;const s=new Ht,r=new Ht,o=new Ee,a=new Bu({depthPacking:Su}),l=new nv,c={},h=e.maxTextureSize,u={[Qn]:Ge,[Ge]:Qn,[Fe]:Fe},d=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:iv,fragmentShader:sv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new We;g.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new qt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uu;let m=this.type;this.render=function(C,w,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),$=i.state;$.setBlending(Zn),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const R=m!==An&&this.type===An,O=m===An&&this.type!==An;for(let F=0,B=C.length;F<B;F++){const G=C[F],L=G.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);const J=L.getFrameExtents();if(s.multiply(J),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,L.mapSize.y=r.y)),L.map===null||R===!0||O===!0){const st=this.type!==An?{minFilter:ne,magFilter:ne}:{};L.map!==null&&L.map.dispose(),L.map=new _n(s.x,s.y,st),L.map.texture.name=G.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();const nt=L.getViewportCount();for(let st=0;st<nt;st++){const mt=L.getViewport(st);o.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),$.viewport(o),L.updateMatrices(G,st),n=L.getFrustum(),T(w,N,L.camera,G,this.type)}L.isPointLightShadow!==!0&&this.type===An&&M(L,N),L.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(E,y,U)};function M(C,w){const N=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new _n(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(w,null,N,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(w,null,N,f,_,null)}function v(C,w,N,E){let y=null;const U=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)y=U;else if(y=N.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const $=y.uuid,R=w.uuid;let O=c[$];O===void 0&&(O={},c[$]=O);let F=O[R];F===void 0&&(F=y.clone(),O[R]=F,w.addEventListener("dispose",k)),y=F}if(y.visible=w.visible,y.wireframe=w.wireframe,E===An?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const $=i.properties.get(y);$.light=N}return y}function T(C,w,N,E,y){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===An)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const R=t.update(C),O=C.material;if(Array.isArray(O)){const F=R.groups;for(let B=0,G=F.length;B<G;B++){const L=F[B],J=O[L.materialIndex];if(J&&J.visible){const nt=v(C,J,E,y);C.onBeforeShadow(i,C,w,N,R,nt,L),i.renderBufferDirect(N,null,R,nt,C,L),C.onAfterShadow(i,C,w,N,R,nt,L)}}}else if(O.visible){const F=v(C,O,E,y);C.onBeforeShadow(i,C,w,N,R,F,null),i.renderBufferDirect(N,null,R,F,C,null),C.onAfterShadow(i,C,w,N,R,F,null)}}const $=C.children;for(let R=0,O=$.length;R<O;R++)T($[R],w,N,E,y)}function k(C){C.target.removeEventListener("dispose",k);for(const N in c){const E=c[N],y=C.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}function ov(i){function t(){let D=!1;const dt=new Ee;let K=null;const j=new Ee(0,0,0,0);return{setMask:function(ot){K!==ot&&!D&&(i.colorMask(ot,ot,ot,ot),K=ot)},setLocked:function(ot){D=ot},setClear:function(ot,Pt,Yt,ue,ve){ve===!0&&(ot*=ue,Pt*=ue,Yt*=ue),dt.set(ot,Pt,Yt,ue),j.equals(dt)===!1&&(i.clearColor(ot,Pt,Yt,ue),j.copy(dt))},reset:function(){D=!1,K=null,j.set(-1,0,0,0)}}}function e(){let D=!1,dt=null,K=null,j=null;return{setTest:function(ot){ot?at(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(ot){dt!==ot&&!D&&(i.depthMask(ot),dt=ot)},setFunc:function(ot){if(K!==ot){switch(ot){case Af:i.depthFunc(i.NEVER);break;case Cf:i.depthFunc(i.ALWAYS);break;case Rf:i.depthFunc(i.LESS);break;case Gr:i.depthFunc(i.LEQUAL);break;case Pf:i.depthFunc(i.EQUAL);break;case Lf:i.depthFunc(i.GEQUAL);break;case Df:i.depthFunc(i.GREATER);break;case Uf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ot}},setLocked:function(ot){D=ot},setClear:function(ot){j!==ot&&(i.clearDepth(ot),j=ot)},reset:function(){D=!1,dt=null,K=null,j=null}}}function n(){let D=!1,dt=null,K=null,j=null,ot=null,Pt=null,Yt=null,ue=null,ve=null;return{setTest:function(Jt){D||(Jt?at(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(Jt){dt!==Jt&&!D&&(i.stencilMask(Jt),dt=Jt)},setFunc:function(Jt,un,dn){(K!==Jt||j!==un||ot!==dn)&&(i.stencilFunc(Jt,un,dn),K=Jt,j=un,ot=dn)},setOp:function(Jt,un,dn){(Pt!==Jt||Yt!==un||ue!==dn)&&(i.stencilOp(Jt,un,dn),Pt=Jt,Yt=un,ue=dn)},setLocked:function(Jt){D=Jt},setClear:function(Jt){ve!==Jt&&(i.clearStencil(Jt),ve=Jt)},reset:function(){D=!1,dt=null,K=null,j=null,ot=null,Pt=null,Yt=null,ue=null,ve=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,M=null,v=null,T=null,k=null,C=new It(0,0,0),w=0,N=!1,E=null,y=null,U=null,$=null,R=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,B=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(G)[1]),F=B>=1):G.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),F=B>=2);let L=null,J={};const nt=i.getParameter(i.SCISSOR_BOX),st=i.getParameter(i.VIEWPORT),mt=new Ee().fromArray(nt),gt=new Ee().fromArray(st);function V(D,dt,K,j){const ot=new Uint8Array(4),Pt=i.createTexture();i.bindTexture(D,Pt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<K;Yt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(dt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return Pt}const Y={};Y[i.TEXTURE_2D]=V(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=V(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=V(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=V(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),at(i.DEPTH_TEST),r.setFunc(Gr),St(!1),Bt(Tl),at(i.CULL_FACE),At(Zn);function at(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function Z(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function xt(D,dt){return h[D]!==dt?(i.bindFramebuffer(D,dt),h[D]=dt,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=dt),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function pt(D,dt){let K=d,j=!1;if(D){K=u.get(dt),K===void 0&&(K=[],u.set(dt,K));const ot=D.textures;if(K.length!==ot.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Pt=0,Yt=ot.length;Pt<Yt;Pt++)K[Pt]=i.COLOR_ATTACHMENT0+Pt;K.length=ot.length,j=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,j=!0);j&&i.drawBuffers(K)}function Lt(D){return f!==D?(i.useProgram(D),f=D,!0):!1}const P={[mi]:i.FUNC_ADD,[hf]:i.FUNC_SUBTRACT,[uf]:i.FUNC_REVERSE_SUBTRACT};P[df]=i.MIN,P[ff]=i.MAX;const Ut={[pf]:i.ZERO,[mf]:i.ONE,[gf]:i.SRC_COLOR,[Ia]:i.SRC_ALPHA,[yf]:i.SRC_ALPHA_SATURATE,[Mf]:i.DST_COLOR,[vf]:i.DST_ALPHA,[_f]:i.ONE_MINUS_SRC_COLOR,[Na]:i.ONE_MINUS_SRC_ALPHA,[Sf]:i.ONE_MINUS_DST_COLOR,[xf]:i.ONE_MINUS_DST_ALPHA,[Ef]:i.CONSTANT_COLOR,[bf]:i.ONE_MINUS_CONSTANT_COLOR,[Tf]:i.CONSTANT_ALPHA,[wf]:i.ONE_MINUS_CONSTANT_ALPHA};function At(D,dt,K,j,ot,Pt,Yt,ue,ve,Jt){if(D===Zn){g===!0&&(Z(i.BLEND),g=!1);return}if(g===!1&&(at(i.BLEND),g=!0),D!==cf){if(D!==_||Jt!==N){if((p!==mi||v!==mi)&&(i.blendEquation(i.FUNC_ADD),p=mi,v=mi),Jt)switch(D){case ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ua:i.blendFunc(i.ONE,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ua:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,M=null,T=null,k=null,C.set(0,0,0),w=0,_=D,N=Jt}return}ot=ot||dt,Pt=Pt||K,Yt=Yt||j,(dt!==p||ot!==v)&&(i.blendEquationSeparate(P[dt],P[ot]),p=dt,v=ot),(K!==m||j!==M||Pt!==T||Yt!==k)&&(i.blendFuncSeparate(Ut[K],Ut[j],Ut[Pt],Ut[Yt]),m=K,M=j,T=Pt,k=Yt),(ue.equals(C)===!1||ve!==w)&&(i.blendColor(ue.r,ue.g,ue.b,ve),C.copy(ue),w=ve),_=D,N=!1}function Qt(D,dt){D.side===Fe?Z(i.CULL_FACE):at(i.CULL_FACE);let K=D.side===Ge;dt&&(K=!K),St(K),D.blending===ji&&D.transparent===!1?At(Zn):At(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const j=D.stencilWrite;o.setTest(j),j&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Nt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function St(D){E!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),E=D)}function Bt(D){D!==af?(at(i.CULL_FACE),D!==y&&(D===Tl?i.cullFace(i.BACK):D===lf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),y=D}function Gt(D){D!==U&&(F&&i.lineWidth(D),U=D)}function Nt(D,dt,K){D?(at(i.POLYGON_OFFSET_FILL),($!==dt||R!==K)&&(i.polygonOffset(dt,K),$=dt,R=K)):Z(i.POLYGON_OFFSET_FILL)}function de(D){D?at(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+O-1),L!==D&&(i.activeTexture(D),L=D)}function x(D,dt,K){K===void 0&&(L===null?K=i.TEXTURE0+O-1:K=L);let j=J[K];j===void 0&&(j={type:void 0,texture:void 0},J[K]=j),(j.type!==D||j.texture!==dt)&&(L!==K&&(i.activeTexture(K),L=K),i.bindTexture(D,dt||Y[D]),j.type=D,j.texture=dt)}function q(){const D=J[L];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function kt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(D){mt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),mt.copy(D))}function ut(D){gt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),gt.copy(D))}function zt(D,dt){let K=l.get(dt);K===void 0&&(K=new WeakMap,l.set(dt,K));let j=K.get(D);j===void 0&&(j=i.getUniformBlockIndex(dt,D.name),K.set(D,j))}function Xt(D,dt){const j=l.get(dt).get(D);a.get(dt)!==j&&(i.uniformBlockBinding(dt,j,D.__bindingPointIndex),a.set(dt,j))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},L=null,J={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,M=null,v=null,T=null,k=null,C=new It(0,0,0),w=0,N=!1,E=null,y=null,U=null,$=null,R=null,mt.set(0,0,i.canvas.width,i.canvas.height),gt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:at,disable:Z,bindFramebuffer:xt,drawBuffers:pt,useProgram:Lt,setBlending:At,setMaterial:Qt,setFlipSided:St,setCullFace:Bt,setLineWidth:Gt,setPolygonOffset:Nt,setScissorTest:de,activeTexture:A,bindTexture:x,unbindTexture:q,compressedTexImage2D:Q,compressedTexImage3D:tt,texImage2D:Mt,texImage3D:Vt,updateUBOMapping:zt,uniformBlockBinding:Xt,texStorage2D:kt,texStorage3D:it,texSubImage2D:et,texSubImage3D:Et,compressedTexSubImage2D:ct,compressedTexSubImage3D:ht,scissor:Rt,viewport:ut,reset:he}}function av(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ht,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return f?new OffscreenCanvas(A,x):Ns("canvas")}function _(A,x,q){let Q=1;const tt=de(A);if((tt.width>q||tt.height>q)&&(Q=q/Math.max(tt.width,tt.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const et=Math.floor(Q*tt.width),Et=Math.floor(Q*tt.height);u===void 0&&(u=g(et,Et));const ct=x?g(et,Et):u;return ct.width=et,ct.height=Et,ct.getContext("2d").drawImage(A,0,0,et,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+et+"x"+Et+")."),ct}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==ne&&A.minFilter!==ye}function m(A){i.generateMipmap(A)}function M(A,x,q,Q,tt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let et=x;if(x===i.RED&&(q===i.FLOAT&&(et=i.R32F),q===i.HALF_FLOAT&&(et=i.R16F),q===i.UNSIGNED_BYTE&&(et=i.R8)),x===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.R8UI),q===i.UNSIGNED_SHORT&&(et=i.R16UI),q===i.UNSIGNED_INT&&(et=i.R32UI),q===i.BYTE&&(et=i.R8I),q===i.SHORT&&(et=i.R16I),q===i.INT&&(et=i.R32I)),x===i.RG&&(q===i.FLOAT&&(et=i.RG32F),q===i.HALF_FLOAT&&(et=i.RG16F),q===i.UNSIGNED_BYTE&&(et=i.RG8)),x===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.RG8UI),q===i.UNSIGNED_SHORT&&(et=i.RG16UI),q===i.UNSIGNED_INT&&(et=i.RG32UI),q===i.BYTE&&(et=i.RG8I),q===i.SHORT&&(et=i.RG16I),q===i.INT&&(et=i.RG32I)),x===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),x===i.RGBA){const Et=tt?Wr:jt.getTransfer(Q);q===i.FLOAT&&(et=i.RGBA32F),q===i.HALF_FLOAT&&(et=i.RGBA16F),q===i.UNSIGNED_BYTE&&(et=Et===se?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function v(A,x){let q;return A?x===null||x===yi||x===rs?q=i.DEPTH24_STENCIL8:x===$n?q=i.DEPTH32F_STENCIL8:x===Vr&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===yi||x===rs?q=i.DEPTH_COMPONENT24:x===$n?q=i.DEPTH_COMPONENT32F:x===Vr&&(q=i.DEPTH_COMPONENT16),q}function T(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==ne&&A.minFilter!==ye?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function k(A){const x=A.target;x.removeEventListener("dispose",k),w(x),x.isVideoTexture&&h.delete(x)}function C(A){const x=A.target;x.removeEventListener("dispose",C),E(x)}function w(A){const x=n.get(A);if(x.__webglInit===void 0)return;const q=A.source,Q=d.get(q);if(Q){const tt=Q[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&N(A),Object.keys(Q).length===0&&d.delete(q)}n.remove(A)}function N(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const q=A.source,Q=d.get(q);delete Q[x.__cacheKey],o.memory.textures--}function E(A){const x=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let tt=0;tt<x.__webglFramebuffer[Q].length;tt++)i.deleteFramebuffer(x.__webglFramebuffer[Q][tt]);else i.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[Q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const q=A.textures;for(let Q=0,tt=q.length;Q<tt;Q++){const et=n.get(q[Q]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(q[Q])}n.remove(A)}let y=0;function U(){y=0}function $(){const A=y;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),y+=1,A}function R(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function O(A,x){const q=n.get(A);if(A.isVideoTexture&&Gt(A),A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(q,A,x);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+x)}function F(A,x){const q=n.get(A);if(A.version>0&&q.__version!==A.version){gt(q,A,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+x)}function B(A,x){const q=n.get(A);if(A.version>0&&q.__version!==A.version){gt(q,A,x);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+x)}function G(A,x){const q=n.get(A);if(A.version>0&&q.__version!==A.version){V(q,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+x)}const L={[Si]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[ka]:i.MIRRORED_REPEAT},J={[ne]:i.NEAREST,[Vf]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[ye]:i.LINEAR,[yo]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},nt={[ip]:i.NEVER,[cp]:i.ALWAYS,[sp]:i.LESS,[yu]:i.LEQUAL,[rp]:i.EQUAL,[lp]:i.GEQUAL,[op]:i.GREATER,[ap]:i.NOTEQUAL};function st(A,x){if(x.type===$n&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ye||x.magFilter===yo||x.magFilter===Ks||x.magFilter===Yn||x.minFilter===ye||x.minFilter===yo||x.minFilter===Ks||x.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,L[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,L[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,L[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,J[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,J[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,nt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ne||x.minFilter!==Ks&&x.minFilter!==Yn||x.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function mt(A,x){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",k));const Q=x.source;let tt=d.get(Q);tt===void 0&&(tt={},d.set(Q,tt));const et=R(x);if(et!==A.__cacheKey){tt[et]===void 0&&(tt[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),tt[et].usedTimes++;const Et=tt[A.__cacheKey];Et!==void 0&&(tt[A.__cacheKey].usedTimes--,Et.usedTimes===0&&N(x)),A.__cacheKey=et,A.__webglTexture=tt[et].texture}return q}function gt(A,x,q){let Q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=i.TEXTURE_3D);const tt=mt(A,x),et=x.source;e.bindTexture(Q,A.__webglTexture,i.TEXTURE0+q);const Et=n.get(et);if(et.version!==Et.__version||tt===!0){e.activeTexture(i.TEXTURE0+q);const ct=jt.getPrimaries(jt.workingColorSpace),ht=x.colorSpace===qn?null:jt.getPrimaries(x.colorSpace),kt=x.colorSpace===qn||ct===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let it=_(x.image,!1,s.maxTextureSize);it=Nt(x,it);const Mt=r.convert(x.format,x.colorSpace),Vt=r.convert(x.type);let Rt=M(x.internalFormat,Mt,Vt,x.colorSpace,x.isVideoTexture);st(Q,x);let ut;const zt=x.mipmaps,Xt=x.isVideoTexture!==!0,he=Et.__version===void 0||tt===!0,D=et.dataReady,dt=T(x,it);if(x.isDepthTexture)Rt=v(x.format===os,x.type),he&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Rt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Rt,it.width,it.height,0,Mt,Vt,null));else if(x.isDataTexture)if(zt.length>0){Xt&&he&&e.texStorage2D(i.TEXTURE_2D,dt,Rt,zt[0].width,zt[0].height);for(let K=0,j=zt.length;K<j;K++)ut=zt[K],Xt?D&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ut.width,ut.height,Mt,Vt,ut.data):e.texImage2D(i.TEXTURE_2D,K,Rt,ut.width,ut.height,0,Mt,Vt,ut.data);x.generateMipmaps=!1}else Xt?(he&&e.texStorage2D(i.TEXTURE_2D,dt,Rt,it.width,it.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,Mt,Vt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,it.width,it.height,0,Mt,Vt,it.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Xt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Rt,zt[0].width,zt[0].height,it.depth);for(let K=0,j=zt.length;K<j;K++)if(ut=zt[K],x.format!==gn)if(Mt!==null)if(Xt){if(D)if(x.layerUpdates.size>0){for(const ot of x.layerUpdates){const Pt=ut.width*ut.height;e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,ot,ut.width,ut.height,1,Mt,ut.data.slice(Pt*ot,Pt*(ot+1)),0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ut.width,ut.height,it.depth,Mt,ut.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Rt,ut.width,ut.height,it.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ut.width,ut.height,it.depth,Mt,Vt,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,Rt,ut.width,ut.height,it.depth,0,Mt,Vt,ut.data)}else{Xt&&he&&e.texStorage2D(i.TEXTURE_2D,dt,Rt,zt[0].width,zt[0].height);for(let K=0,j=zt.length;K<j;K++)ut=zt[K],x.format!==gn?Mt!==null?Xt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ut.width,ut.height,Mt,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,K,Rt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?D&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ut.width,ut.height,Mt,Vt,ut.data):e.texImage2D(i.TEXTURE_2D,K,Rt,ut.width,ut.height,0,Mt,Vt,ut.data)}else if(x.isDataArrayTexture)if(Xt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Rt,it.width,it.height,it.depth),D)if(x.layerUpdates.size>0){let K;switch(Vt){case i.UNSIGNED_BYTE:switch(Mt){case i.ALPHA:K=1;break;case i.LUMINANCE:K=1;break;case i.LUMINANCE_ALPHA:K=2;break;case i.RGB:K=3;break;case i.RGBA:K=4;break;default:throw new Error(`Unknown texel size for format ${Mt}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:K=1;break;default:throw new Error(`Unknown texel size for type ${Vt}.`)}const j=it.width*it.height*K;for(const ot of x.layerUpdates)e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,it.width,it.height,1,Mt,Vt,it.data.slice(j*ot,j*(ot+1)));x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,Mt,Vt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,it.width,it.height,it.depth,0,Mt,Vt,it.data);else if(x.isData3DTexture)Xt?(he&&e.texStorage3D(i.TEXTURE_3D,dt,Rt,it.width,it.height,it.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,Mt,Vt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,it.width,it.height,it.depth,0,Mt,Vt,it.data);else if(x.isFramebufferTexture){if(he)if(Xt)e.texStorage2D(i.TEXTURE_2D,dt,Rt,it.width,it.height);else{let K=it.width,j=it.height;for(let ot=0;ot<dt;ot++)e.texImage2D(i.TEXTURE_2D,ot,Rt,K,j,0,Mt,Vt,null),K>>=1,j>>=1}}else if(zt.length>0){if(Xt&&he){const K=de(zt[0]);e.texStorage2D(i.TEXTURE_2D,dt,Rt,K.width,K.height)}for(let K=0,j=zt.length;K<j;K++)ut=zt[K],Xt?D&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Mt,Vt,ut):e.texImage2D(i.TEXTURE_2D,K,Rt,Mt,Vt,ut);x.generateMipmaps=!1}else if(Xt){if(he){const K=de(it);e.texStorage2D(i.TEXTURE_2D,dt,Rt,K.width,K.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Vt,it)}else e.texImage2D(i.TEXTURE_2D,0,Rt,Mt,Vt,it);p(x)&&m(Q),Et.__version=et.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function V(A,x,q){if(x.image.length!==6)return;const Q=mt(A,x),tt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+q);const et=n.get(tt);if(tt.version!==et.__version||Q===!0){e.activeTexture(i.TEXTURE0+q);const Et=jt.getPrimaries(jt.workingColorSpace),ct=x.colorSpace===qn?null:jt.getPrimaries(x.colorSpace),ht=x.colorSpace===qn||Et===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const kt=x.isCompressedTexture||x.image[0].isCompressedTexture,it=x.image[0]&&x.image[0].isDataTexture,Mt=[];for(let j=0;j<6;j++)!kt&&!it?Mt[j]=_(x.image[j],!0,s.maxCubemapSize):Mt[j]=it?x.image[j].image:x.image[j],Mt[j]=Nt(x,Mt[j]);const Vt=Mt[0],Rt=r.convert(x.format,x.colorSpace),ut=r.convert(x.type),zt=M(x.internalFormat,Rt,ut,x.colorSpace),Xt=x.isVideoTexture!==!0,he=et.__version===void 0||Q===!0,D=tt.dataReady;let dt=T(x,Vt);st(i.TEXTURE_CUBE_MAP,x);let K;if(kt){Xt&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,zt,Vt.width,Vt.height);for(let j=0;j<6;j++){K=Mt[j].mipmaps;for(let ot=0;ot<K.length;ot++){const Pt=K[ot];x.format!==gn?Rt!==null?Xt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot,0,0,Pt.width,Pt.height,Rt,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot,zt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot,0,0,Pt.width,Pt.height,Rt,ut,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot,zt,Pt.width,Pt.height,0,Rt,ut,Pt.data)}}}else{if(K=x.mipmaps,Xt&&he){K.length>0&&dt++;const j=de(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,zt,j.width,j.height)}for(let j=0;j<6;j++)if(it){Xt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Mt[j].width,Mt[j].height,Rt,ut,Mt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,zt,Mt[j].width,Mt[j].height,0,Rt,ut,Mt[j].data);for(let ot=0;ot<K.length;ot++){const Yt=K[ot].image[j].image;Xt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot+1,0,0,Yt.width,Yt.height,Rt,ut,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot+1,zt,Yt.width,Yt.height,0,Rt,ut,Yt.data)}}else{Xt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Rt,ut,Mt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,zt,Rt,ut,Mt[j]);for(let ot=0;ot<K.length;ot++){const Pt=K[ot];Xt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot+1,0,0,Rt,ut,Pt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot+1,zt,Rt,ut,Pt.image[j])}}}p(x)&&m(i.TEXTURE_CUBE_MAP),et.__version=tt.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Y(A,x,q,Q,tt,et){const Et=r.convert(q.format,q.colorSpace),ct=r.convert(q.type),ht=M(q.internalFormat,Et,ct,q.colorSpace);if(!n.get(x).__hasExternalTextures){const it=Math.max(1,x.width>>et),Mt=Math.max(1,x.height>>et);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,et,ht,it,Mt,x.depth,0,Et,ct,null):e.texImage2D(tt,et,ht,it,Mt,0,Et,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Bt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,tt,n.get(q).__webglTexture,0,St(x)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,tt,n.get(q).__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(A,x,q){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const Q=x.depthTexture,tt=Q&&Q.isDepthTexture?Q.type:null,et=v(x.stencilBuffer,tt),Et=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=St(x);Bt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,et,x.width,x.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,et,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,et,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,A)}else{const Q=x.textures;for(let tt=0;tt<Q.length;tt++){const et=Q[tt],Et=r.convert(et.format,et.colorSpace),ct=r.convert(et.type),ht=M(et.internalFormat,Et,ct,et.colorSpace),kt=St(x);q&&Bt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,ht,x.width,x.height):Bt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt,ht,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ht,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Z(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),O(x.depthTexture,0);const Q=n.get(x.depthTexture).__webglTexture,tt=St(x);if(x.depthTexture.format===Qi)Bt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(x.depthTexture.format===os)Bt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function xt(A){const x=n.get(A),q=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Z(x.__webglFramebuffer,A)}else if(q){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]=i.createRenderbuffer(),at(x.__webglDepthbuffer[Q],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),at(x.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(A,x,q){const Q=n.get(A);x!==void 0&&Y(Q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&xt(A)}function Lt(A){const x=A.texture,q=n.get(A),Q=n.get(x);A.addEventListener("dispose",C);const tt=A.textures,et=A.isWebGLCubeRenderTarget===!0,Et=tt.length>1;if(Et||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=x.version,o.memory.textures++),et){q.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){q.__webglFramebuffer[ct]=[];for(let ht=0;ht<x.mipmaps.length;ht++)q.__webglFramebuffer[ct][ht]=i.createFramebuffer()}else q.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){q.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)q.__webglFramebuffer[ct]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ct=0,ht=tt.length;ct<ht;ct++){const kt=n.get(tt[ct]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Bt(A)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ct=0;ct<tt.length;ct++){const ht=tt[ct];q.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ct]);const kt=r.convert(ht.format,ht.colorSpace),it=r.convert(ht.type),Mt=M(ht.internalFormat,kt,it,ht.colorSpace,A.isXRRenderTarget===!0),Vt=St(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Mt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,q.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),at(q.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),st(i.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)Y(q.__webglFramebuffer[ct][ht],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ht);else Y(q.__webglFramebuffer[ct],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);p(x)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ct=0,ht=tt.length;ct<ht;ct++){const kt=tt[ct],it=n.get(kt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),st(i.TEXTURE_2D,kt),Y(q.__webglFramebuffer,A,kt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),p(kt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ct=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,Q.__webglTexture),st(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)Y(q.__webglFramebuffer[ht],A,x,i.COLOR_ATTACHMENT0,ct,ht);else Y(q.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,ct,0);p(x)&&m(ct),e.unbindTexture()}A.depthBuffer&&xt(A)}function P(A){const x=A.textures;for(let q=0,Q=x.length;q<Q;q++){const tt=x[q];if(p(tt)){const et=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Et=n.get(tt).__webglTexture;e.bindTexture(et,Et),m(et),e.unbindTexture()}}}const Ut=[],At=[];function Qt(A){if(A.samples>0){if(Bt(A)===!1){const x=A.textures,q=A.width,Q=A.height;let tt=i.COLOR_BUFFER_BIT;const et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(A),ct=x.length>1;if(ct)for(let ht=0;ht<x.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let ht=0;ht<x.length;ht++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[ht]);const kt=n.get(x[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,q,Q,0,0,q,Q,tt,i.NEAREST),l===!0&&(Ut.length=0,At.length=0,Ut.push(i.COLOR_ATTACHMENT0+ht),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ut.push(et),At.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,At)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let ht=0;ht<x.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,Et.__webglColorRenderbuffer[ht]);const kt=n.get(x[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function St(A){return Math.min(s.maxSamples,A.samples)}function Bt(A){const x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Gt(A){const x=o.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Nt(A,x){const q=A.colorSpace,Q=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||q!==ti&&q!==qn&&(jt.getTransfer(q)===se?(Q!==gn||tt!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),x}function de(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=U,this.setTexture2D=O,this.setTexture2DArray=F,this.setTexture3D=B,this.setTextureCube=G,this.rebindTextures=pt,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=Bt}function lv(i,t){function e(n,s=qn){let r;const o=jt.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===gu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_u)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wf)return i.BYTE;if(n===Xf)return i.SHORT;if(n===Vr)return i.UNSIGNED_SHORT;if(n===mu)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===ho)return i.HALF_FLOAT;if(n===Yf)return i.ALPHA;if(n===$f)return i.RGB;if(n===gn)return i.RGBA;if(n===Kf)return i.LUMINANCE;if(n===Zf)return i.LUMINANCE_ALPHA;if(n===Qi)return i.DEPTH_COMPONENT;if(n===os)return i.DEPTH_STENCIL;if(n===jf)return i.RED;if(n===vu)return i.RED_INTEGER;if(n===Qf)return i.RG;if(n===xu)return i.RG_INTEGER;if(n===Mu)return i.RGBA_INTEGER;if(n===Eo||n===bo||n===To||n===wo)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cl||n===Rl||n===Pl||n===Ll)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dl||n===Ul||n===Il)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dl||n===Ul)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Il)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nl||n===Fl||n===Ol||n===kl||n===zl||n===Bl||n===Hl||n===Gl||n===Vl||n===Wl||n===Xl||n===ql||n===Yl||n===$l)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ol)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ql)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$l)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ao||n===Kl||n===Zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ao)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jf||n===jl||n===Ql||n===Jl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ql)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class cv extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Kn extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hv={type:"move"};class Jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Kn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const uv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Le,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new $e({vertexShader:uv,fragmentShader:dv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new Te(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class pv extends us{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new fv,p=e.getContextAttributes();let m=null,M=null;const v=[],T=[],k=new Ht;let C=null;const w=new He;w.layers.enable(1),w.viewport=new Ee;const N=new He;N.layers.enable(2),N.viewport=new Ee;const E=[w,N],y=new cv;y.layers.enable(1),y.layers.enable(2);let U=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Y=v[V];return Y===void 0&&(Y=new Jo,v[V]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(V){let Y=v[V];return Y===void 0&&(Y=new Jo,v[V]=Y),Y.getGripSpace()},this.getHand=function(V){let Y=v[V];return Y===void 0&&(Y=new Jo,v[V]=Y),Y.getHandSpace()};function R(V){const Y=T.indexOf(V.inputSource);if(Y===-1)return;const at=v[Y];at!==void 0&&(at.update(V.inputSource,V.frame,c||o),at.dispatchEvent({type:V.type,data:V.inputSource}))}function O(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",F);for(let V=0;V<v.length;V++){const Y=T[V];Y!==null&&(T[V]=null,v[V].disconnect(Y))}U=null,$=null,_.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,M=null,gt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",O),s.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(k),s.renderState.layers===void 0){const Y={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Y),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new _n(f.framebufferWidth,f.framebufferHeight,{format:gn,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Y=null,at=null,Z=null;p.depth&&(Z=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=p.stencil?os:Qi,at=p.stencil?rs:yi);const xt={colorFormat:e.RGBA8,depthFormat:Z,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(xt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new _n(d.textureWidth,d.textureHeight,{format:gn,type:Dn,depthTexture:new el(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),gt.setContext(s),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(V){for(let Y=0;Y<V.removed.length;Y++){const at=V.removed[Y],Z=T.indexOf(at);Z>=0&&(T[Z]=null,v[Z].disconnect(at))}for(let Y=0;Y<V.added.length;Y++){const at=V.added[Y];let Z=T.indexOf(at);if(Z===-1){for(let pt=0;pt<v.length;pt++)if(pt>=T.length){T.push(at),Z=pt;break}else if(T[pt]===null){T[pt]=at,Z=pt;break}if(Z===-1)break}const xt=v[Z];xt&&xt.connect(at)}}const B=new H,G=new H;function L(V,Y,at){B.setFromMatrixPosition(Y.matrixWorld),G.setFromMatrixPosition(at.matrixWorld);const Z=B.distanceTo(G),xt=Y.projectionMatrix.elements,pt=at.projectionMatrix.elements,Lt=xt[14]/(xt[10]-1),P=xt[14]/(xt[10]+1),Ut=(xt[9]+1)/xt[5],At=(xt[9]-1)/xt[5],Qt=(xt[8]-1)/xt[0],St=(pt[8]+1)/pt[0],Bt=Lt*Qt,Gt=Lt*St,Nt=Z/(-Qt+St),de=Nt*-Qt;Y.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(de),V.translateZ(Nt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const A=Lt+Nt,x=P+Nt,q=Bt-de,Q=Gt+(Z-de),tt=Ut*P/x*A,et=At*P/x*A;V.projectionMatrix.makePerspective(q,Q,tt,et,A,x),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function J(V,Y){Y===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Y.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;_.texture!==null&&(V.near=_.depthNear,V.far=_.depthFar),y.near=N.near=w.near=V.near,y.far=N.far=w.far=V.far,(U!==y.near||$!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),U=y.near,$=y.far,w.near=U,w.far=$,N.near=U,N.far=$,w.updateProjectionMatrix(),N.updateProjectionMatrix(),V.updateProjectionMatrix());const Y=V.parent,at=y.cameras;J(y,Y);for(let Z=0;Z<at.length;Z++)J(at[Z],Y);at.length===2?L(y,w,N):y.projectionMatrix.copy(w.projectionMatrix),nt(V,y,Y)};function nt(V,Y,at){at===null?V.matrix.copy(Y.matrixWorld):(V.matrix.copy(at.matrixWorld),V.matrix.invert(),V.matrix.multiply(Y.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=za*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let st=null;function mt(V,Y){if(h=Y.getViewerPose(c||o),g=Y,h!==null){const at=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Z=!1;at.length!==y.cameras.length&&(y.cameras.length=0,Z=!0);for(let pt=0;pt<at.length;pt++){const Lt=at[pt];let P=null;if(f!==null)P=f.getViewport(Lt);else{const At=u.getViewSubImage(d,Lt);P=At.viewport,pt===0&&(t.setRenderTargetTextures(M,At.colorTexture,d.ignoreDepthValues?void 0:At.depthStencilTexture),t.setRenderTarget(M))}let Ut=E[pt];Ut===void 0&&(Ut=new He,Ut.layers.enable(pt),Ut.viewport=new Ee,E[pt]=Ut),Ut.matrix.fromArray(Lt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Lt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(P.x,P.y,P.width,P.height),pt===0&&(y.matrix.copy(Ut.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Z===!0&&y.cameras.push(Ut)}const xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")){const pt=u.getDepthInformation(at[0]);pt&&pt.isValid&&pt.texture&&_.init(t,pt,s.renderState)}}for(let at=0;at<v.length;at++){const Z=T[at],xt=v[at];Z!==null&&xt!==void 0&&xt.update(Z,Y,c||o)}st&&st(V,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const gt=new Iu;gt.setAnimationLoop(mt),this.setAnimationLoop=function(V){st=V},this.dispose=function(){}}}const ci=new Un,mv=new ie;function gv(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Lu(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,v,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,T)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ge&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ge&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=t.get(m),v=M.envMap,T=M.envMapRotation;v&&(p.envMap.value=v,ci.copy(T),ci.x*=-1,ci.y*=-1,ci.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),p.envMapRotation.value.setFromMatrix4(mv.makeRotationFromEuler(ci)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ge&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _v(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const T=v.program;n.uniformBlockBinding(M,T)}function c(M,v){let T=s[M.id];T===void 0&&(g(M),T=h(M),s[M.id]=T,M.addEventListener("dispose",p));const k=v.program;n.updateUBOMapping(M,k);const C=t.render.frame;r[M.id]!==C&&(d(M),r[M.id]=C)}function h(M){const v=u();M.__bindingPointIndex=v;const T=i.createBuffer(),k=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,k,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,T),T}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=s[M.id],T=M.uniforms,k=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let C=0,w=T.length;C<w;C++){const N=Array.isArray(T[C])?T[C]:[T[C]];for(let E=0,y=N.length;E<y;E++){const U=N[E];if(f(U,C,E,k)===!0){const $=U.__offset,R=Array.isArray(U.value)?U.value:[U.value];let O=0;for(let F=0;F<R.length;F++){const B=R[F],G=_(B);typeof B=="number"||typeof B=="boolean"?(U.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,$+O,U.__data)):B.isMatrix3?(U.__data[0]=B.elements[0],U.__data[1]=B.elements[1],U.__data[2]=B.elements[2],U.__data[3]=0,U.__data[4]=B.elements[3],U.__data[5]=B.elements[4],U.__data[6]=B.elements[5],U.__data[7]=0,U.__data[8]=B.elements[6],U.__data[9]=B.elements[7],U.__data[10]=B.elements[8],U.__data[11]=0):(B.toArray(U.__data,O),O+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,v,T,k){const C=M.value,w=v+"_"+T;if(k[w]===void 0)return typeof C=="number"||typeof C=="boolean"?k[w]=C:k[w]=C.clone(),!0;{const N=k[w];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return k[w]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function g(M){const v=M.uniforms;let T=0;const k=16;for(let w=0,N=v.length;w<N;w++){const E=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,U=E.length;y<U;y++){const $=E[y],R=Array.isArray($.value)?$.value:[$.value];for(let O=0,F=R.length;O<F;O++){const B=R[O],G=_(B),L=T%k;L!==0&&k-L<G.boundary&&(T+=k-L),$.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=T,T+=G.storage}}}const C=T%k;return C>0&&(T+=k-C),M.__size=T,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){const v=M.target;v.removeEventListener("dispose",p);const T=o.indexOf(v.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Hu{constructor(t={}){const{canvas:e=up(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oe,this.toneMapping=Ln,this.toneMappingExposure=1;const v=this;let T=!1,k=0,C=0,w=null,N=-1,E=null;const y=new Ee,U=new Ee;let $=null;const R=new It(0);let O=0,F=e.width,B=e.height,G=1,L=null,J=null;const nt=new Ee(0,0,F,B),st=new Ee(0,0,F,B);let mt=!1;const gt=new Ja;let V=!1,Y=!1;const at=new ie,Z=new H,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Lt(){return w===null?G:1}let P=n;function Ut(S,I){return e.getContext(S,I)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Za}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",K,!1),e.addEventListener("webglcontextcreationerror",j,!1),P===null){const I="webgl2";if(P=Ut(I,S),P===null)throw Ut(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let At,Qt,St,Bt,Gt,Nt,de,A,x,q,Q,tt,et,Et,ct,ht,kt,it,Mt,Vt,Rt,ut,zt,Xt;function he(){At=new Ag(P),At.init(),ut=new lv(P,At),Qt=new Sg(P,At,t,ut),St=new ov(P),Bt=new Pg(P),Gt=new Y_,Nt=new av(P,At,St,Gt,Qt,ut,Bt),de=new Eg(v),A=new wg(v),x=new Op(P),zt=new xg(P,x),q=new Cg(P,x,Bt,zt),Q=new Dg(P,q,x,Bt),Mt=new Lg(P,Qt,Nt),ht=new yg(Gt),tt=new q_(v,de,A,At,Qt,zt,ht),et=new gv(v,Gt),Et=new K_,ct=new ev(At),it=new vg(v,de,A,St,Q,d,l),kt=new rv(v,Q,Qt),Xt=new _v(P,Bt,Qt,St),Vt=new Mg(P,At,Bt),Rt=new Rg(P,At,Bt),Bt.programs=tt.programs,v.capabilities=Qt,v.extensions=At,v.properties=Gt,v.renderLists=Et,v.shadowMap=kt,v.state=St,v.info=Bt}he();const D=new pv(v,P);this.xr=D,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=At.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=At.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(F,B,!1))},this.getSize=function(S){return S.set(F,B)},this.setSize=function(S,I,W=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=S,B=I,e.width=Math.floor(S*G),e.height=Math.floor(I*G),W===!0&&(e.style.width=S+"px",e.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(F*G,B*G).floor()},this.setDrawingBufferSize=function(S,I,W){F=S,B=I,G=W,e.width=Math.floor(S*W),e.height=Math.floor(I*W),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(y)},this.getViewport=function(S){return S.copy(nt)},this.setViewport=function(S,I,W,X){S.isVector4?nt.set(S.x,S.y,S.z,S.w):nt.set(S,I,W,X),St.viewport(y.copy(nt).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(st)},this.setScissor=function(S,I,W,X){S.isVector4?st.set(S.x,S.y,S.z,S.w):st.set(S,I,W,X),St.scissor(U.copy(st).multiplyScalar(G).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(S){St.setScissorTest(mt=S)},this.setOpaqueSort=function(S){L=S},this.setTransparentSort=function(S){J=S},this.getClearColor=function(S){return S.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(S=!0,I=!0,W=!0){let X=0;if(S){let z=!1;if(w!==null){const rt=w.texture.format;z=rt===Mu||rt===xu||rt===vu}if(z){const rt=w.texture.type,ft=rt===Dn||rt===yi||rt===Vr||rt===rs||rt===gu||rt===_u,_t=it.getClearColor(),vt=it.getClearAlpha(),wt=_t.r,Ct=_t.g,bt=_t.b;ft?(f[0]=wt,f[1]=Ct,f[2]=bt,f[3]=vt,P.clearBufferuiv(P.COLOR,0,f)):(g[0]=wt,g[1]=Ct,g[2]=bt,g[3]=vt,P.clearBufferiv(P.COLOR,0,g))}else X|=P.COLOR_BUFFER_BIT}I&&(X|=P.DEPTH_BUFFER_BIT),W&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",j,!1),Et.dispose(),ct.dispose(),Gt.dispose(),de.dispose(),A.dispose(),Q.dispose(),zt.dispose(),Xt.dispose(),tt.dispose(),D.dispose(),D.removeEventListener("sessionstart",un),D.removeEventListener("sessionend",dn),ni.stop()};function dt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=Bt.autoReset,I=kt.enabled,W=kt.autoUpdate,X=kt.needsUpdate,z=kt.type;he(),Bt.autoReset=S,kt.enabled=I,kt.autoUpdate=W,kt.needsUpdate=X,kt.type=z}function j(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ot(S){const I=S.target;I.removeEventListener("dispose",ot),Pt(I)}function Pt(S){Yt(S),Gt.remove(S)}function Yt(S){const I=Gt.get(S).programs;I!==void 0&&(I.forEach(function(W){tt.releaseProgram(W)}),S.isShaderMaterial&&tt.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,W,X,z,rt){I===null&&(I=xt);const ft=z.isMesh&&z.matrixWorld.determinant()<0,_t=tf(S,I,W,X,z);St.setMaterial(X,ft);let vt=W.index,wt=1;if(X.wireframe===!0){if(vt=q.getWireframeAttribute(W),vt===void 0)return;wt=2}const Ct=W.drawRange,bt=W.attributes.position;let $t=Ct.start*wt,ae=(Ct.start+Ct.count)*wt;rt!==null&&($t=Math.max($t,rt.start*wt),ae=Math.min(ae,(rt.start+rt.count)*wt)),vt!==null?($t=Math.max($t,0),ae=Math.min(ae,vt.count)):bt!=null&&($t=Math.max($t,0),ae=Math.min(ae,bt.count));const le=ae-$t;if(le<0||le===1/0)return;zt.setup(z,X,_t,W,vt);let Xe,Zt=Vt;if(vt!==null&&(Xe=x.get(vt),Zt=Rt,Zt.setIndex(Xe)),z.isMesh)X.wireframe===!0?(St.setLineWidth(X.wireframeLinewidth*Lt()),Zt.setMode(P.LINES)):Zt.setMode(P.TRIANGLES);else if(z.isLine){let yt=X.linewidth;yt===void 0&&(yt=1),St.setLineWidth(yt*Lt()),z.isLineSegments?Zt.setMode(P.LINES):z.isLineLoop?Zt.setMode(P.LINE_LOOP):Zt.setMode(P.LINE_STRIP)}else z.isPoints?Zt.setMode(P.POINTS):z.isSprite&&Zt.setMode(P.TRIANGLES);if(z.isBatchedMesh)z._multiDrawInstances!==null?Zt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances):Zt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)Zt.renderInstances($t,le,z.count);else if(W.isInstancedBufferGeometry){const yt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,De=Math.min(W.instanceCount,yt);Zt.renderInstances($t,le,De)}else Zt.render($t,le)};function ue(S,I,W){S.transparent===!0&&S.side===Fe&&S.forceSinglePass===!1?(S.side=Ge,S.needsUpdate=!0,Ys(S,I,W),S.side=Qn,S.needsUpdate=!0,Ys(S,I,W),S.side=Fe):Ys(S,I,W)}this.compile=function(S,I,W=null){W===null&&(W=S),p=ct.get(W),p.init(I),M.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),S!==W&&S.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const X=new Set;return S.traverse(function(z){const rt=z.material;if(rt)if(Array.isArray(rt))for(let ft=0;ft<rt.length;ft++){const _t=rt[ft];ue(_t,W,z),X.add(_t)}else ue(rt,W,z),X.add(rt)}),M.pop(),p=null,X},this.compileAsync=function(S,I,W=null){const X=this.compile(S,I,W);return new Promise(z=>{function rt(){if(X.forEach(function(ft){Gt.get(ft).currentProgram.isReady()&&X.delete(ft)}),X.size===0){z(S);return}setTimeout(rt,10)}At.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let ve=null;function Jt(S){ve&&ve(S)}function un(){ni.stop()}function dn(){ni.start()}const ni=new Iu;ni.setAnimationLoop(Jt),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(S){ve=S,D.setAnimationLoop(S),S===null?ni.stop():ni.start()},D.addEventListener("sessionstart",un),D.addEventListener("sessionend",dn),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(I),I=D.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,I,w),p=ct.get(S,M.length),p.init(I),M.push(p),at.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),gt.setFromProjectionMatrix(at),Y=this.localClippingEnabled,V=ht.init(this.clippingPlanes,Y),_=Et.get(S,m.length),_.init(),m.push(_),D.enabled===!0&&D.isPresenting===!0){const rt=v.xr.getDepthSensingMesh();rt!==null&&vo(rt,I,-1/0,v.sortObjects)}vo(S,I,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(L,J),pt=D.enabled===!1||D.isPresenting===!1||D.hasDepthSensing()===!1,pt&&it.addToRenderList(_,S),this.info.render.frame++,V===!0&&ht.beginShadows();const W=p.state.shadowsArray;kt.render(W,S,I),V===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,z=_.transmissive;if(p.setupLights(),I.isArrayCamera){const rt=I.cameras;if(z.length>0)for(let ft=0,_t=rt.length;ft<_t;ft++){const vt=rt[ft];Ml(X,z,S,vt)}pt&&it.render(S);for(let ft=0,_t=rt.length;ft<_t;ft++){const vt=rt[ft];xl(_,S,vt,vt.viewport)}}else z.length>0&&Ml(X,z,S,I),pt&&it.render(S),xl(_,S,I);w!==null&&(Nt.updateMultisampleRenderTarget(w),Nt.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(v,S,I),zt.resetDefaultState(),N=-1,E=null,M.pop(),M.length>0?(p=M[M.length-1],V===!0&&ht.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function vo(S,I,W,X){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||gt.intersectsSprite(S)){X&&Z.setFromMatrixPosition(S.matrixWorld).applyMatrix4(at);const ft=Q.update(S),_t=S.material;_t.visible&&_.push(S,ft,_t,W,Z.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||gt.intersectsObject(S))){const ft=Q.update(S),_t=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Z.copy(S.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Z.copy(ft.boundingSphere.center)),Z.applyMatrix4(S.matrixWorld).applyMatrix4(at)),Array.isArray(_t)){const vt=ft.groups;for(let wt=0,Ct=vt.length;wt<Ct;wt++){const bt=vt[wt],$t=_t[bt.materialIndex];$t&&$t.visible&&_.push(S,ft,$t,W,Z.z,bt)}}else _t.visible&&_.push(S,ft,_t,W,Z.z,null)}}const rt=S.children;for(let ft=0,_t=rt.length;ft<_t;ft++)vo(rt[ft],I,W,X)}function xl(S,I,W,X){const z=S.opaque,rt=S.transmissive,ft=S.transparent;p.setupLightsView(W),V===!0&&ht.setGlobalState(v.clippingPlanes,W),X&&St.viewport(y.copy(X)),z.length>0&&qs(z,I,W),rt.length>0&&qs(rt,I,W),ft.length>0&&qs(ft,I,W),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Ml(S,I,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new _n(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float")?ho:Dn,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const rt=p.state.transmissionRenderTarget[X.id],ft=X.viewport||y;rt.setSize(ft.z,ft.w);const _t=v.getRenderTarget();v.setRenderTarget(rt),v.getClearColor(R),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),pt?it.render(W):v.clear();const vt=v.toneMapping;v.toneMapping=Ln;const wt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),V===!0&&ht.setGlobalState(v.clippingPlanes,X),qs(S,W,X),Nt.updateMultisampleRenderTarget(rt),Nt.updateRenderTargetMipmap(rt),At.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let bt=0,$t=I.length;bt<$t;bt++){const ae=I[bt],le=ae.object,Xe=ae.geometry,Zt=ae.material,yt=ae.group;if(Zt.side===Fe&&le.layers.test(X.layers)){const De=Zt.side;Zt.side=Ge,Zt.needsUpdate=!0,Sl(le,W,X,Xe,Zt,yt),Zt.side=De,Zt.needsUpdate=!0,Ct=!0}}Ct===!0&&(Nt.updateMultisampleRenderTarget(rt),Nt.updateRenderTargetMipmap(rt))}v.setRenderTarget(_t),v.setClearColor(R,O),wt!==void 0&&(X.viewport=wt),v.toneMapping=vt}function qs(S,I,W){const X=I.isScene===!0?I.overrideMaterial:null;for(let z=0,rt=S.length;z<rt;z++){const ft=S[z],_t=ft.object,vt=ft.geometry,wt=X===null?ft.material:X,Ct=ft.group;_t.layers.test(W.layers)&&Sl(_t,I,W,vt,wt,Ct)}}function Sl(S,I,W,X,z,rt){S.onBeforeRender(v,I,W,X,z,rt),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(v,I,W,X,S,rt),z.transparent===!0&&z.side===Fe&&z.forceSinglePass===!1?(z.side=Ge,z.needsUpdate=!0,v.renderBufferDirect(W,I,X,z,S,rt),z.side=Qn,z.needsUpdate=!0,v.renderBufferDirect(W,I,X,z,S,rt),z.side=Fe):v.renderBufferDirect(W,I,X,z,S,rt),S.onAfterRender(v,I,W,X,z,rt)}function Ys(S,I,W){I.isScene!==!0&&(I=xt);const X=Gt.get(S),z=p.state.lights,rt=p.state.shadowsArray,ft=z.state.version,_t=tt.getParameters(S,z.state,rt,I,W),vt=tt.getProgramCacheKey(_t);let wt=X.programs;X.environment=S.isMeshStandardMaterial?I.environment:null,X.fog=I.fog,X.envMap=(S.isMeshStandardMaterial?A:de).get(S.envMap||X.environment),X.envMapRotation=X.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,wt===void 0&&(S.addEventListener("dispose",ot),wt=new Map,X.programs=wt);let Ct=wt.get(vt);if(Ct!==void 0){if(X.currentProgram===Ct&&X.lightsStateVersion===ft)return El(S,_t),Ct}else _t.uniforms=tt.getUniforms(S),S.onBuild(W,_t,v),S.onBeforeCompile(_t,v),Ct=tt.acquireProgram(_t,vt),wt.set(vt,Ct),X.uniforms=_t.uniforms;const bt=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(bt.clippingPlanes=ht.uniform),El(S,_t),X.needsLights=nf(S),X.lightsStateVersion=ft,X.needsLights&&(bt.ambientLightColor.value=z.state.ambient,bt.lightProbe.value=z.state.probe,bt.directionalLights.value=z.state.directional,bt.directionalLightShadows.value=z.state.directionalShadow,bt.spotLights.value=z.state.spot,bt.spotLightShadows.value=z.state.spotShadow,bt.rectAreaLights.value=z.state.rectArea,bt.ltc_1.value=z.state.rectAreaLTC1,bt.ltc_2.value=z.state.rectAreaLTC2,bt.pointLights.value=z.state.point,bt.pointLightShadows.value=z.state.pointShadow,bt.hemisphereLights.value=z.state.hemi,bt.directionalShadowMap.value=z.state.directionalShadowMap,bt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,bt.spotShadowMap.value=z.state.spotShadowMap,bt.spotLightMatrix.value=z.state.spotLightMatrix,bt.spotLightMap.value=z.state.spotLightMap,bt.pointShadowMap.value=z.state.pointShadowMap,bt.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Ct,X.uniformsList=null,Ct}function yl(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=Br.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function El(S,I){const W=Gt.get(S);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function tf(S,I,W,X,z){I.isScene!==!0&&(I=xt),Nt.resetTextureUnits();const rt=I.fog,ft=X.isMeshStandardMaterial?I.environment:null,_t=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ti,vt=(X.isMeshStandardMaterial?A:de).get(X.envMap||ft),wt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ct=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),bt=!!W.morphAttributes.position,$t=!!W.morphAttributes.normal,ae=!!W.morphAttributes.color;let le=Ln;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(le=v.toneMapping);const Xe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Zt=Xe!==void 0?Xe.length:0,yt=Gt.get(X),De=p.state.lights;if(V===!0&&(Y===!0||S!==E)){const Ze=S===E&&X.id===N;ht.setState(X,S,Ze)}let te=!1;X.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==De.state.version||yt.outputColorSpace!==_t||z.isBatchedMesh&&yt.batching===!1||!z.isBatchedMesh&&yt.batching===!0||z.isBatchedMesh&&yt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&yt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&yt.instancing===!1||!z.isInstancedMesh&&yt.instancing===!0||z.isSkinnedMesh&&yt.skinning===!1||!z.isSkinnedMesh&&yt.skinning===!0||z.isInstancedMesh&&yt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&yt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&yt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&yt.instancingMorph===!1&&z.morphTexture!==null||yt.envMap!==vt||X.fog===!0&&yt.fog!==rt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==ht.numPlanes||yt.numIntersection!==ht.numIntersection)||yt.vertexAlphas!==wt||yt.vertexTangents!==Ct||yt.morphTargets!==bt||yt.morphNormals!==$t||yt.morphColors!==ae||yt.toneMapping!==le||yt.morphTargetsCount!==Zt)&&(te=!0):(te=!0,yt.__version=X.version);let vn=yt.currentProgram;te===!0&&(vn=Ys(X,I,z));let $s=!1,ii=!1,xo=!1;const xe=vn.getUniforms(),In=yt.uniforms;if(St.useProgram(vn.program)&&($s=!0,ii=!0,xo=!0),X.id!==N&&(N=X.id,ii=!0),$s||E!==S){xe.setValue(P,"projectionMatrix",S.projectionMatrix),xe.setValue(P,"viewMatrix",S.matrixWorldInverse);const Ze=xe.map.cameraPosition;Ze!==void 0&&Ze.setValue(P,Z.setFromMatrixPosition(S.matrixWorld)),Qt.logarithmicDepthBuffer&&xe.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xe.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,ii=!0,xo=!0)}if(z.isSkinnedMesh){xe.setOptional(P,z,"bindMatrix"),xe.setOptional(P,z,"bindMatrixInverse");const Ze=z.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),xe.setValue(P,"boneTexture",Ze.boneTexture,Nt))}z.isBatchedMesh&&(xe.setOptional(P,z,"batchingTexture"),xe.setValue(P,"batchingTexture",z._matricesTexture,Nt),xe.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&xe.setValue(P,"batchingColorTexture",z._colorsTexture,Nt));const Mo=W.morphAttributes;if((Mo.position!==void 0||Mo.normal!==void 0||Mo.color!==void 0)&&Mt.update(z,W,vn),(ii||yt.receiveShadow!==z.receiveShadow)&&(yt.receiveShadow=z.receiveShadow,xe.setValue(P,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(In.envMap.value=vt,In.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&I.environment!==null&&(In.envMapIntensity.value=I.environmentIntensity),ii&&(xe.setValue(P,"toneMappingExposure",v.toneMappingExposure),yt.needsLights&&ef(In,xo),rt&&X.fog===!0&&et.refreshFogUniforms(In,rt),et.refreshMaterialUniforms(In,X,G,B,p.state.transmissionRenderTarget[S.id]),Br.upload(P,yl(yt),In,Nt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Br.upload(P,yl(yt),In,Nt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xe.setValue(P,"center",z.center),xe.setValue(P,"modelViewMatrix",z.modelViewMatrix),xe.setValue(P,"normalMatrix",z.normalMatrix),xe.setValue(P,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ze=X.uniformsGroups;for(let So=0,sf=Ze.length;So<sf;So++){const bl=Ze[So];Xt.update(bl,vn),Xt.bind(bl,vn)}}return vn}function ef(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function nf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,I,W){Gt.get(S.texture).__webglTexture=I,Gt.get(S.depthTexture).__webglTexture=W;const X=Gt.get(S);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,I){const W=Gt.get(S);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,W=0){w=S,k=I,C=W;let X=!0,z=null,rt=!1,ft=!1;if(S){const vt=Gt.get(S);vt.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(P.FRAMEBUFFER,null),X=!1):vt.__webglFramebuffer===void 0?Nt.setupRenderTarget(S):vt.__hasExternalTextures&&Nt.rebindTextures(S,Gt.get(S.texture).__webglTexture,Gt.get(S.depthTexture).__webglTexture);const wt=S.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(ft=!0);const Ct=Gt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ct[I])?z=Ct[I][W]:z=Ct[I],rt=!0):S.samples>0&&Nt.useMultisampledRTT(S)===!1?z=Gt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ct)?z=Ct[W]:z=Ct,y.copy(S.viewport),U.copy(S.scissor),$=S.scissorTest}else y.copy(nt).multiplyScalar(G).floor(),U.copy(st).multiplyScalar(G).floor(),$=mt;if(St.bindFramebuffer(P.FRAMEBUFFER,z)&&X&&St.drawBuffers(S,z),St.viewport(y),St.scissor(U),St.setScissorTest($),rt){const vt=Gt.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,vt.__webglTexture,W)}else if(ft){const vt=Gt.get(S.texture),wt=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.__webglTexture,W||0,wt)}N=-1},this.readRenderTargetPixels=function(S,I,W,X,z,rt,ft){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Gt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(_t=_t[ft]),_t){St.bindFramebuffer(P.FRAMEBUFFER,_t);try{const vt=S.texture,wt=vt.format,Ct=vt.type;if(!Qt.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-X&&W>=0&&W<=S.height-z&&P.readPixels(I,W,X,z,ut.convert(wt),ut.convert(Ct),rt)}finally{const vt=w!==null?Gt.get(w).__webglFramebuffer:null;St.bindFramebuffer(P.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(S,I,W,X,z,rt,ft){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Gt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(_t=_t[ft]),_t){St.bindFramebuffer(P.FRAMEBUFFER,_t);try{const vt=S.texture,wt=vt.format,Ct=vt.type;if(!Qt.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=S.width-X&&W>=0&&W<=S.height-z){const bt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,bt),P.bufferData(P.PIXEL_PACK_BUFFER,rt.byteLength,P.STREAM_READ),P.readPixels(I,W,X,z,ut.convert(wt),ut.convert(Ct),0),P.flush();const $t=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await dp(P,$t,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,bt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,rt)}finally{P.deleteBuffer(bt),P.deleteSync($t)}return rt}}finally{const vt=w!==null?Gt.get(w).__webglFramebuffer:null;St.bindFramebuffer(P.FRAMEBUFFER,vt)}}},this.copyFramebufferToTexture=function(S,I=null,W=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,S=arguments[1]);const X=Math.pow(2,-W),z=Math.floor(S.image.width*X),rt=Math.floor(S.image.height*X),ft=I!==null?I.x:0,_t=I!==null?I.y:0;Nt.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,ft,_t,z,rt),St.unbindTexture()},this.copyTextureToTexture=function(S,I,W=null,X=null,z=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,S=arguments[1],I=arguments[2],z=arguments[3]||0,W=null);let rt,ft,_t,vt,wt,Ct;W!==null?(rt=W.max.x-W.min.x,ft=W.max.y-W.min.y,_t=W.min.x,vt=W.min.y):(rt=S.image.width,ft=S.image.height,_t=0,vt=0),X!==null?(wt=X.x,Ct=X.y):(wt=0,Ct=0);const bt=ut.convert(I.format),$t=ut.convert(I.type);Nt.setTexture2D(I,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const ae=P.getParameter(P.UNPACK_ROW_LENGTH),le=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Xe=P.getParameter(P.UNPACK_SKIP_PIXELS),Zt=P.getParameter(P.UNPACK_SKIP_ROWS),yt=P.getParameter(P.UNPACK_SKIP_IMAGES),De=S.isCompressedTexture?S.mipmaps[z]:S.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,De.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,De.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_t),P.pixelStorei(P.UNPACK_SKIP_ROWS,vt),S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,z,wt,Ct,rt,ft,bt,$t,De.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,z,wt,Ct,De.width,De.height,bt,De.data):P.texSubImage2D(P.TEXTURE_2D,z,wt,Ct,bt,$t,De),P.pixelStorei(P.UNPACK_ROW_LENGTH,ae),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,le),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Xe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Zt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,yt),z===0&&I.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(S,I,W=null,X=null,z=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,S=arguments[2],I=arguments[3],z=arguments[4]||0);let rt,ft,_t,vt,wt,Ct,bt,$t,ae;const le=S.isCompressedTexture?S.mipmaps[z]:S.image;W!==null?(rt=W.max.x-W.min.x,ft=W.max.y-W.min.y,_t=W.max.z-W.min.z,vt=W.min.x,wt=W.min.y,Ct=W.min.z):(rt=le.width,ft=le.height,_t=le.depth,vt=0,wt=0,Ct=0),X!==null?(bt=X.x,$t=X.y,ae=X.z):(bt=0,$t=0,ae=0);const Xe=ut.convert(I.format),Zt=ut.convert(I.type);let yt;if(I.isData3DTexture)Nt.setTexture3D(I,0),yt=P.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Nt.setTexture2DArray(I,0),yt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const De=P.getParameter(P.UNPACK_ROW_LENGTH),te=P.getParameter(P.UNPACK_IMAGE_HEIGHT),vn=P.getParameter(P.UNPACK_SKIP_PIXELS),$s=P.getParameter(P.UNPACK_SKIP_ROWS),ii=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,le.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,le.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,vt),P.pixelStorei(P.UNPACK_SKIP_ROWS,wt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ct),S.isDataTexture||S.isData3DTexture?P.texSubImage3D(yt,z,bt,$t,ae,rt,ft,_t,Xe,Zt,le.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(yt,z,bt,$t,ae,rt,ft,_t,Xe,le.data):P.texSubImage3D(yt,z,bt,$t,ae,rt,ft,_t,Xe,Zt,le),P.pixelStorei(P.UNPACK_ROW_LENGTH,De),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,te),P.pixelStorei(P.UNPACK_SKIP_PIXELS,vn),P.pixelStorei(P.UNPACK_SKIP_ROWS,$s),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ii),z===0&&I.generateMipmaps&&P.generateMipmap(yt),St.unbindTexture()},this.initRenderTarget=function(S){Gt.get(S).__webglFramebuffer===void 0&&Nt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Nt.setTextureCube(S,0):S.isData3DTexture?Nt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Nt.setTexture2DArray(S,0):Nt.setTexture2D(S,0),St.unbindTexture()},this.resetState=function(){k=0,C=0,w=null,St.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ja?"display-p3":"srgb",e.unpackColorSpace=jt.workingColorSpace===uo?"display-p3":"srgb"}}class ls{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new ls(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jn extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gu extends ds{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const $r=new H,Kr=new H,Xc=new ie,Ms=new Qa,_r=new Hs,ta=new H,qc=new H;class vv extends be{constructor(t=new We,e=new Gu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)$r.fromBufferAttribute(e,s-1),Kr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=$r.distanceTo(Kr);t.setAttribute("lineDistance",new Oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(s),_r.radius+=r,t.ray.intersectsSphere(_r)===!1)return;Xc.copy(s).invert(),Ms.copy(t.ray).applyMatrix4(Xc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){const m=h.getX(_),M=h.getX(_+1),v=vr(this,t,Ms,l,m,M);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(f),m=vr(this,t,Ms,l,_,p);m&&e.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){const m=vr(this,t,Ms,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=vr(this,t,Ms,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if($r.fromBufferAttribute(o,s),Kr.fromBufferAttribute(o,r),e.distanceSqToSegment($r,Kr,ta,qc)>n)return;ta.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ta);if(!(l<t.near||l>t.far))return{distance:l,point:qc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,object:i}}const Yc=new H,$c=new H;class xv extends vv{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Yc.fromBufferAttribute(e,s),$c.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Yc.distanceTo($c);t.setAttribute("lineDistance",new Oe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vu extends ds{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Kc=new ie,Ha=new Qa,xr=new Hs,Mr=new H;class Mv extends be{constructor(t=new We,e=new Vu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(s),xr.radius+=r,t.ray.intersectsSphere(xr)===!1)return;Kc.copy(s).invert(),Ha.copy(t.ray).applyMatrix4(Kc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const p=c.getX(g);Mr.fromBufferAttribute(u,p),Zc(Mr,p,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Mr.fromBufferAttribute(u,g),Zc(Mr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zc(i,t,e,n,s,r,o){const a=Ha.distanceSqToPoint(i);if(a<e){const l=new H;Ha.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class ei extends Le{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Sr=new H,yr=new H,ea=new H,Er=new cn;class Sv extends We{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(zr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:m}=Er;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Er.getNormal(ea),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){const v=(M+1)%3,T=u[M],k=u[v],C=Er[h[M]],w=Er[h[v]],N=`${T}_${k}`,E=`${k}_${T}`;E in d&&d[E]?(ea.dot(d[E].normal)<=r&&(f.push(C.x,C.y,C.z),f.push(w.x,w.y,w.z)),d[E]=null):N in d||(d[N]={index0:c[M],index1:c[v],normal:ea.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:p}=d[g];Sr.fromBufferAttribute(a,_),yr.fromBufferAttribute(a,p),f.push(Sr.x,Sr.y,Sr.z),f.push(yr.x,yr.y,yr.z)}this.setAttribute("position",new Oe(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}const jc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class yv{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Ev=new yv;class nl{constructor(t){this.manager=t!==void 0?t:Ev,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}nl.DEFAULT_MATERIAL_NAME="__DEFAULT";class bv extends nl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=jc.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Ns("img");function l(){h(),jc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Gs extends nl{constructor(t){super(t)}load(t,e,n,s){const r=new Le,o=new bv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Tv extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const na=new ie,Qc=new H,Jc=new H;class wv{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ja,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Qc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qc),Jc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jc),e.updateMatrixWorld(),na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Av extends wv{constructor(){super(new Ei(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cv extends Tv{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Av}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);const Wu=13625079,Rv=[.3,.52,.79],Pv=[.81,.9,.97],ia=i=>`rgb(${Math.round(i[0]*255)},${Math.round(i[1]*255)},${Math.round(i[2]*255)})`;function Ga(i,t,e){const n=[(t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2],s=i.createLinearGradient(0,0,0,256);s.addColorStop(0,ia(t)),s.addColorStop(.55,ia(n)),s.addColorStop(1,ia(e)),i.fillStyle=s,i.fillRect(0,0,2,256)}function Lv(){const i=document.createElement("canvas");i.width=2,i.height=256;const t=i.getContext("2d");t&&Ga(t,Rv,Pv);const e=new ei(i);return e.colorSpace=oe,e}function Dv(i){const t=i|0,e=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim(),n=`
uniform sampler2D tColor;
uniform sampler2D tDepth;
uniform sampler2D tBloom;
uniform sampler2D tAO;
uniform vec2 uSunUV;
uniform vec3 uSunColor;
uniform float uIntensity;
uniform float uDecay;
uniform float uWeight;
uniform float uBloom;
uniform float uAO;

varying vec2 vUv;

void main() {
  vec3 scene = texture2D(tColor, vUv).rgb;
  vec3 bloomColor = texture2D(tBloom, vUv).rgb;

  // AO：只压暗场景色（环境光遮蔽），不影响体积光光束或 bloom 辉光。
  // uAO = 0 时 mix 结果 = 1.0 → 无任何暗化（完全兜底）。
  // tAO.r = 1（全白）时也无暗化；tAO.r = 0（完全遮蔽）× uAO 最多暗化 uAO 比例。
  float aoValue = texture2D(tAO, vUv).r;
  float aoFactor = mix(1.0, aoValue, uAO);
  scene *= aoFactor;

  // 太阳不可见时（强度 0）跳过体积光采样循环，但 bloom 仍叠加。
  if (uIntensity <= 0.001) {
    // 合成是自定义 ShaderMaterial，three.js 不自动做 linear→sRGB；RT 存的是线性场景，
    // 故这里手动 sRGB 编码，否则直接输出线性值会整体偏暗。
    vec3 outc = scene + bloomColor * uBloom;
    gl_FragColor = vec4(pow(clamp(outc * 1.15 * vec3(1.08, 1.0, 0.9), 0.0, 1.0), vec3(0.4545)), 1.0);
    return;
  }

  // 每步从当前像素向太阳 UV 方向移动一格（等分 [vUv → sunUV]）。
  vec2 dir = (uSunUV - vUv) / float(${t});
  vec2 uv = vUv;
  float illum = 1.0;
  float shaft = 0.0;

  for (int i = 0; i < ${t}; i++) {
    uv += dir;
    // UV 超出 [0,1] → 视为天空（不读纹理，直接计为 lit）。
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
      shaft += illum * uWeight;
    } else {
      float d = texture2D(tDepth, uv).x; // 深度缓冲：天空 ≈ 1.0
      // step(edge, x) = 1 if x >= edge，0 otherwise；0.9999 ≈ far plane
      float lit = step(0.9999, d);
      shaft += lit * illum * uWeight;
    }
    illum *= uDecay;
  }

  // 归一化：除以采样数，避免 weight×decay 累加超出合理范围。
  shaft /= float(${t});

  // 体积光光束 + bloom 辉光叠加到场景色（AO 已乘到 scene 上）；末尾手动 sRGB 编码
  vec3 outc = scene + shaft * uSunColor * uIntensity + bloomColor * uBloom;
  gl_FragColor = vec4(pow(clamp(outc * 1.15 * vec3(1.08, 1.0, 0.9), 0.0, 1.0), vec3(0.4545)), 1.0);
}
`.trim();return new $e({uniforms:{tColor:{value:null},tDepth:{value:null},tBloom:{value:null},tAO:{value:null},uSunUV:{value:new Ht(.5,.5)},uSunColor:{value:new It(1,.95,.8)},uIntensity:{value:0},uDecay:{value:.96},uWeight:{value:.5},uBloom:{value:0},uAO:{value:0}},vertexShader:e,fragmentShader:n,depthTest:!1,depthWrite:!1})}class th{constructor(t){b(this,"material");b(this,"quad");b(this,"quadScene",new Jn);b(this,"quadCam",new Ei(-1,1,1,-1,0,1));this.material=Dv(t),this.quad=new qt(new Te(2,2),this.material),this.quadScene.add(this.quad)}render(t){t.render(this.quadScene,this.quadCam)}dispose(){this.material.dispose(),this.quad.geometry.dispose()}}const Uv=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim(),Iv=`
uniform sampler2D tScene;
uniform float uThreshold;
varying vec2 vUv;
void main() {
  vec3 c = texture2D(tScene, vUv).rgb;
  // 亮度（感知加权）
  float luma = dot(c, vec3(0.2126, 0.7152, 0.0722));
  // 亮部提取：亮度超过阈值的部分保留，其余置零
  float contribution = max(0.0, luma - uThreshold);
  // 按比例缩放颜色，保持色调
  float scale = (luma > 0.0001) ? (contribution / luma) : 0.0;
  gl_FragColor = vec4(c * scale, 1.0);
}
`.trim(),Nv=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim(),Fv=`
uniform sampler2D tBlur;
uniform vec2 uTexelSize;
uniform int uHorizontal;
varying vec2 vUv;

void main() {
  // 9-tap 高斯，sigma≈2，归一化权重（和=1.0）
  // 偏移 -4..+4，步长 = texel
  vec2 step0 = uTexelSize;

  vec2 d1 = (uHorizontal == 1) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);

  vec3 result = vec3(0.0);
  // weights and offsets hardcoded as constants (GLSL ES requirement for constant loop bounds)
  // w[-4]=0.02, w[-3]=0.05, w[-2]=0.12, w[-1]=0.20, w[0]=0.22, w[1]=0.20, w[2]=0.12, w[3]=0.05, w[4]=0.02
  result += texture2D(tBlur, vUv + d1 * (-4.0) * step0).rgb * 0.02;
  result += texture2D(tBlur, vUv + d1 * (-3.0) * step0).rgb * 0.05;
  result += texture2D(tBlur, vUv + d1 * (-2.0) * step0).rgb * 0.12;
  result += texture2D(tBlur, vUv + d1 * (-1.0) * step0).rgb * 0.20;
  result += texture2D(tBlur, vUv                       ).rgb * 0.22;
  result += texture2D(tBlur, vUv + d1 * ( 1.0) * step0).rgb * 0.20;
  result += texture2D(tBlur, vUv + d1 * ( 2.0) * step0).rgb * 0.12;
  result += texture2D(tBlur, vUv + d1 * ( 3.0) * step0).rgb * 0.05;
  result += texture2D(tBlur, vUv + d1 * ( 4.0) * step0).rgb * 0.02;

  gl_FragColor = vec4(result, 1.0);
}
`.trim();class Ov{constructor(t,e){b(this,"bloomA");b(this,"bloomB");b(this,"extractMat");b(this,"extractScene",new Jn);b(this,"extractCam",new Ei(-1,1,1,-1,0,1));b(this,"blurMat");b(this,"blurScene",new Jn);b(this,"blurCam",new Ei(-1,1,1,-1,0,1));this.bloomA=this.buildRT(1,1),this.bloomB=this.buildRT(1,1),this.extractMat=new $e({uniforms:{tScene:{value:null},uThreshold:{value:.7}},vertexShader:Uv,fragmentShader:Iv,depthTest:!1,depthWrite:!1});const n=new qt(new Te(2,2),this.extractMat);this.extractScene.add(n),this.blurMat=new $e({uniforms:{tBlur:{value:null},uTexelSize:{value:new Ht(1,1)},uHorizontal:{value:1}},vertexShader:Nv,fragmentShader:Fv,depthTest:!1,depthWrite:!1});const s=new qt(new Te(2,2),this.blurMat);this.blurScene.add(s),this.setSize(t,e)}get texture(){return this.bloomA.texture}setSize(t,e){this.bloomA.dispose(),this.bloomB.dispose();const n=Math.max(1,Math.round(t)),s=Math.max(1,Math.round(e));this.bloomA=this.buildRT(n,s),this.bloomB=this.buildRT(n,s),this.blurMat.uniforms.uTexelSize.value.set(1/n,1/s)}render(t,e){this.extractMat.uniforms.tScene.value=e,t.setRenderTarget(this.bloomA),t.clear(),t.render(this.extractScene,this.extractCam),this.blurMat.uniforms.tBlur.value=this.bloomA.texture,this.blurMat.uniforms.uHorizontal.value=1,t.setRenderTarget(this.bloomB),t.clear(),t.render(this.blurScene,this.blurCam),this.blurMat.uniforms.tBlur.value=this.bloomB.texture,this.blurMat.uniforms.uHorizontal.value=0,t.setRenderTarget(this.bloomA),t.clear(),t.render(this.blurScene,this.blurCam),t.setRenderTarget(null)}dispose(){this.bloomA.dispose(),this.bloomB.dispose(),this.extractMat.dispose(),this.blurMat.dispose()}buildRT(t,e){return new _n(t,e,{depthBuffer:!1})}}const kv=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim(),zv=`
precision highp float;

uniform sampler2D tDepth;
uniform vec2 uTexelSize;    // 1/width, 1/height（AO RT 分辨率）
uniform float uNear;
uniform float uFar;
uniform float uRadius;      // 采样半径（texel 数，默认 6.0）
uniform float uBias;        // 法线偏置防自遮挡（默认 0.025 视空间单位）
uniform mat4 uProjection;
uniform mat4 uProjectionInv;

varying vec2 vUv;

// 从非线性深度缓冲值重建线性化深度（视空间 Z，正值，范围 [near, far]）。
// WebGL depth: z_ndc = (2*z_clip/w_clip - 1) ∈ [-1,1]；depth_buf = z_ndc*0.5+0.5 ∈ [0,1]。
// 线性化公式（透视投影）：
//   z_eye = near * far / (far - depth_buf * (far - near))
// 深度为 1（天空/far plane）→ z_eye = far；直接用 max 保护除零。
float linearizeDepth(float d) {
  float denom = uFar - d * (uFar - uNear);
  // denom 最小值：当 d=1 时 = uFar - (uFar - uNear) = uNear > 0，故无除零风险
  return uNear * uFar / max(denom, 0.0001);
}

// 从 UV + 线性深度重建视空间位置。
// 思路：UV→NDC→裁剪空间→乘投影逆矩阵→除 w 得视空间。
vec3 posFromDepth(vec2 uv, float zLinear) {
  // NDC xy（[-1,1]）
  vec2 ndc = uv * 2.0 - 1.0;
  // 用投影逆矩阵把 NDC 位置还原到视空间（不需要真实 w）：
  // 对于纯透视投影，视空间 xy = ndc * zLinear / proj[0][0/1]（对角分量）
  // uProjectionInv 传了就用；否则用简化版（proj 对角分量）。
  // 此处直接用投影逆矩阵的精确路径：
  vec4 clip = vec4(ndc, 0.0, 1.0);
  vec4 vs = uProjectionInv * clip;
  // vs.w 可能是 0 → 保护
  float wInv = 1.0 / max(abs(vs.w), 0.0001);
  vec2 vsXY = vs.xy * wInv * zLinear; // 视空间 xy 按 z 缩放
  return vec3(vsXY, -zLinear); // 视空间 Z 轴朝屏幕外为负（three.js 约定）
}

void main() {
  // ── 读取当前像素深度 ──
  float d0 = texture2D(tDepth, vUv).r;

  // 天空/远平面：直接输出全白（AO = 1，不遮蔽）
  if (d0 >= 0.9999) {
    gl_FragColor = vec4(1.0);
    return;
  }

  float z0 = linearizeDepth(d0);
  vec3 pos = posFromDepth(vUv, z0);

  // ── 用 4 邻域重建法线（差分叉积法）──
  // 取相邻像素的视空间位置，叉乘得法线，指向相机（视空间 +Z 方向）。
  vec2 tx = uTexelSize;
  float dR = texture2D(tDepth, vUv + vec2(tx.x, 0.0)).r;
  float dL = texture2D(tDepth, vUv - vec2(tx.x, 0.0)).r;
  float dU = texture2D(tDepth, vUv + vec2(0.0, tx.y)).r;
  float dD = texture2D(tDepth, vUv - vec2(0.0, tx.y)).r;

  vec3 posR = posFromDepth(vUv + vec2(tx.x, 0.0), linearizeDepth(dR));
  vec3 posL = posFromDepth(vUv - vec2(tx.x, 0.0), linearizeDepth(dL));
  vec3 posU = posFromDepth(vUv + vec2(0.0, tx.y), linearizeDepth(dU));
  vec3 posD = posFromDepth(vUv - vec2(0.0, tx.y), linearizeDepth(dD));

  vec3 dpdx = posR - posL;
  vec3 dpdy = posU - posD;
  // 叉积，指向相机（视空间 Z 朝外）
  vec3 normal = normalize(cross(dpdx, dpdy));
  // 确保法线指向相机（视空间 Z 正方向 = 朝相机；但 pos.z 是负值）
  // three.js 视空间：相机看 -Z，法线朝相机应 z > 0；若 z < 0 翻转。
  if (normal.z < 0.0) normal = -normal;

  // ── 16 个固定螺旋采样点（偏移在 [-1,1]² 均匀分布）──
  // Golden-ratio 螺旋（n=16，angle=n*137.508°，radius=sqrt(n/16)）
  // 以下为预计算值（已归一化到 [-1,1]）：
  vec2 samples[16];
  samples[0]  = vec2( 0.0,       0.125);
  samples[1]  = vec2(-0.1710,   -0.0723);
  samples[2]  = vec2( 0.0872,   -0.3028);
  samples[3]  = vec2( 0.2378,    0.3553);
  samples[4]  = vec2(-0.4507,    0.1475);
  samples[5]  = vec2( 0.4120,   -0.3634);
  samples[6]  = vec2(-0.0156,   -0.5590);
  samples[7]  = vec2(-0.4270,    0.4687);
  samples[8]  = vec2( 0.6123,    0.1250);
  samples[9]  = vec2(-0.6360,   -0.3028);
  samples[10] = vec2( 0.3163,    0.6748);
  samples[11] = vec2( 0.2378,   -0.7553);
  samples[12] = vec2(-0.6507,    0.5475);
  samples[13] = vec2( 0.7120,   -0.3134);
  samples[14] = vec2(-0.2656,   -0.7590);
  samples[15] = vec2(-0.5270,    0.6487);

  float occlusion = 0.0;

  // 展开为 16 次固定采样（GLSL ES：循环上界须为常量字面量）
  for (int i = 0; i < 16; i++) {
    // 采样偏移（texel 空间）
    vec2 offset = samples[i] * uRadius;
    vec2 sampleUv = vUv + offset * uTexelSize;

    // UV 超出边界→视为无遮蔽（贡献 0）
    if (sampleUv.x < 0.0 || sampleUv.x > 1.0 ||
        sampleUv.y < 0.0 || sampleUv.y > 1.0) {
      continue;
    }

    float dSample = texture2D(tDepth, sampleUv).r;
    float zSample = linearizeDepth(dSample);
    vec3 samplePos = posFromDepth(sampleUv, zSample);

    // 从当前点到采样点的向量
    vec3 dir = samplePos - pos;
    float dist = length(dir);

    // Range check：遮蔽只来自附近（防止远处墙壁遮蔽近处表面）
    // 距离超过采样半径的 3 倍线性衰减到 0
    float rangeCheck = smoothstep(0.0, 1.0, uRadius * 0.5 / max(dist, 0.0001));

    // 法线点积：采样点在法线半球内才算遮蔽（biased 防自遮蔽）
    float nDotDir = dot(normal, normalize(dir));
    float contribution = step(uBias, nDotDir) * rangeCheck;
    occlusion += contribution;
  }

  // 归一化 [0, 1]，AO = 1 - 遮蔽率（1=无遮蔽，0=全遮蔽）
  float ao = 1.0 - occlusion / 16.0;
  // 轻微 power curve：让 AO 效果更明显但不过暗（gamma ~1.5）
  ao = pow(clamp(ao, 0.0, 1.0), 1.5);

  gl_FragColor = vec4(vec3(ao), 1.0);
}
`.trim(),Bv=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim(),Hv=`
precision highp float;

uniform sampler2D tAO;
uniform vec2 uTexelSize;

varying vec2 vUv;

void main() {
  vec2 tx = uTexelSize;
  float ao = 0.0;
  ao += texture2D(tAO, vUv + vec2(-tx.x, -tx.y)).r;
  ao += texture2D(tAO, vUv + vec2( 0.0,  -tx.y)).r;
  ao += texture2D(tAO, vUv + vec2( tx.x, -tx.y)).r;
  ao += texture2D(tAO, vUv + vec2(-tx.x,  0.0 )).r;
  ao += texture2D(tAO, vUv                       ).r;
  ao += texture2D(tAO, vUv + vec2( tx.x,  0.0 )).r;
  ao += texture2D(tAO, vUv + vec2(-tx.x,  tx.y )).r;
  ao += texture2D(tAO, vUv + vec2( 0.0,   tx.y )).r;
  ao += texture2D(tAO, vUv + vec2( tx.x,  tx.y )).r;
  ao /= 9.0;
  gl_FragColor = vec4(vec3(ao), 1.0);
}
`.trim();class Gv{constructor(){b(this,"rtAO");b(this,"rtBlur");b(this,"fallbackRT");b(this,"aoMat");b(this,"aoScene",new Jn);b(this,"aoCam",new Ei(-1,1,1,-1,0,1));b(this,"blurMat");b(this,"blurScene",new Jn);b(this,"blurCam",new Ei(-1,1,1,-1,0,1));b(this,"halfW",1);b(this,"halfH",1);this.rtAO=this.buildRT(1,1),this.rtBlur=this.buildRT(1,1),this.fallbackRT=this.buildRT(1,1),this.aoMat=new $e({uniforms:{tDepth:{value:null},uTexelSize:{value:new Ht(1,1)},uNear:{value:.1},uFar:{value:1e3},uRadius:{value:6},uBias:{value:.025},uProjection:{value:new ie},uProjectionInv:{value:new ie}},vertexShader:kv,fragmentShader:zv,depthTest:!1,depthWrite:!1});const t=new qt(new Te(2,2),this.aoMat);this.aoScene.add(t),this.blurMat=new $e({uniforms:{tAO:{value:null},uTexelSize:{value:new Ht(1,1)}},vertexShader:Bv,fragmentShader:Hv,depthTest:!1,depthWrite:!1});const e=new qt(new Te(2,2),this.blurMat);this.blurScene.add(e)}get texture(){return this.rtBlur.texture}setSize(t,e){this.halfW=Math.max(1,Math.round(t)),this.halfH=Math.max(1,Math.round(e)),this.rtAO.dispose(),this.rtBlur.dispose(),this.rtAO=this.buildRT(this.halfW,this.halfH),this.rtBlur=this.buildRT(this.halfW,this.halfH);const n=1/this.halfW,s=1/this.halfH;this.aoMat.uniforms.uTexelSize.value.set(n,s),this.blurMat.uniforms.uTexelSize.value.set(n,s)}render(t,e,n){if(e===null){t.setRenderTarget(null);return}try{const s=this.aoMat.uniforms;s.tDepth.value=e,s.uNear.value=n.near,s.uFar.value=n.far,s.uProjection.value.copy(n.projectionMatrix),s.uProjectionInv.value.copy(n.projectionMatrixInverse),t.setRenderTarget(this.rtAO),t.clear(),t.render(this.aoScene,this.aoCam),this.blurMat.uniforms.tAO.value=this.rtAO.texture,t.setRenderTarget(this.rtBlur),t.clear(),t.render(this.blurScene,this.blurCam)}catch{}finally{t.setRenderTarget(null)}}dispose(){this.rtAO.dispose(),this.rtBlur.dispose(),this.fallbackRT.dispose(),this.aoMat.dispose(),this.blurMat.dispose()}buildRT(t,e){return new _n(t,e,{depthBuffer:!1,type:Dn})}}class Vv{constructor(t){b(this,"scene",new Jn);b(this,"camera");b(this,"gl");b(this,"skyCanvas",document.createElement("canvas"));b(this,"skyCtx");b(this,"skyTex");b(this,"lastSky","");b(this,"rt",null);b(this,"godStd",new th(24));b(this,"godHigh",new th(48));b(this,"god",null);b(this,"bloom",null);b(this,"ssao",null);this.gl=new Hu({canvas:t,antialias:!1}),this.gl.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.gl.toneMapping=Ln,this.gl.shadowMap.enabled=!0,this.gl.shadowMap.type=du,this.gl.shadowMap.autoUpdate=!1,this.skyCanvas.width=2,this.skyCanvas.height=256,this.skyCtx=this.skyCanvas.getContext("2d"),this.skyCtx&&Ga(this.skyCtx,[.3,.52,.79],[.81,.9,.97]),this.skyTex=new ei(this.skyCanvas),this.skyTex.colorSpace=oe,this.scene.background=this.skyTex,this.scene.fog=new ls(Wu,30,110),this.camera=new He(70,1,.1,1e3),this.resize(),window.addEventListener("resize",()=>this.resize())}setSkyColors(t,e){const n=`${t.join()}|${e.join()}`;n===this.lastSky||!this.skyCtx||(this.lastSky=n,Ga(this.skyCtx,t,e),this.skyTex.needsUpdate=!0)}resize(){const t=window.innerWidth,e=window.innerHeight;if(this.gl.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.rt!==null&&(this.rt.dispose(),this.rt=this.buildRT(t,e)),this.bloom!==null){const n=this.gl.getPixelRatio();this.bloom.setSize(Math.max(1,Math.round(t*n/4)),Math.max(1,Math.round(e*n/4)))}if(this.ssao!==null){const n=this.gl.getPixelRatio();this.ssao.setSize(Math.max(1,Math.round(t*n/2)),Math.max(1,Math.round(e*n/2)))}}markShadowDirty(){this.gl.shadowMap.needsUpdate=!0}setGodRays(t){if(t===null||t.quality==="off"){this.rt!==null&&(this.rt.dispose(),this.rt=null),this.bloom!==null&&(this.bloom.dispose(),this.bloom=null),this.ssao!==null&&(this.ssao.dispose(),this.ssao=null),this.god=null;return}if(this.rt===null&&(this.rt=this.buildRT(window.innerWidth,window.innerHeight)),this.bloom===null){const e=this.gl.getPixelRatio(),n=window.innerWidth,s=window.innerHeight;this.bloom=new Ov(Math.max(1,Math.round(n*e/4)),Math.max(1,Math.round(s*e/4)))}if(this.ssao===null){const e=this.gl.getPixelRatio(),n=window.innerWidth,s=window.innerHeight;this.ssao=new Gv,this.ssao.setSize(Math.max(1,Math.round(n*e/2)),Math.max(1,Math.round(s*e/2)))}this.god=t}render(){if(this.god===null||this.rt===null||this.bloom===null){this.gl.render(this.scene,this.camera);return}this.gl.setRenderTarget(this.rt),this.gl.clear(),this.gl.render(this.scene,this.camera),this.bloom.render(this.gl,this.rt.texture),this.ssao!==null&&this.ssao.render(this.gl,this.rt.depthTexture,this.camera);const t=this.god.quality==="high"?this.godHigh:this.godStd,e=t.material.uniforms;e.tColor.value=this.rt.texture,e.tDepth.value=this.rt.depthTexture,e.tBloom.value=this.bloom.texture,e.uSunUV.value.copy(this.god.sunUV),e.uIntensity.value=this.god.intensity,e.uSunColor.value.copy(this.god.sunColor),e.uBloom.value=this.god.quality==="high"?1:.6,this.ssao!==null?(e.tAO.value=this.ssao.texture,e.uAO.value=this.god.quality==="high"?.55:.4):(e.tAO.value=null,e.uAO.value=0),t.render(this.gl)}renderOverlay(t,e){this.gl.autoClear=!1,this.gl.clearDepth(),this.gl.render(t,e),this.gl.autoClear=!0}buildRT(t,e){const n=this.gl.getPixelRatio(),s=Math.max(1,Math.round(t*n)),r=Math.max(1,Math.round(e*n)),o=new el(s,r);return o.type=yi,new _n(s,r,{depthTexture:o,depthBuffer:!0})}}const Tt=16,me=192;class Vs{constructor(){b(this,"blocks",new Uint16Array(Tt*me*Tt));b(this,"fluid",new Uint8Array(Tt*me*Tt));b(this,"dirty",!0)}idx(t,e,n){return t+n*Tt+e*Tt*Tt}inBounds(t,e,n){return t>=0&&t<Tt&&e>=0&&e<me&&n>=0&&n<Tt}get(t,e,n){return this.inBounds(t,e,n)?this.blocks[this.idx(t,e,n)]:0}set(t,e,n,s){this.inBounds(t,e,n)&&(this.blocks[this.idx(t,e,n)]=s)}getFluid(t,e,n){return this.inBounds(t,e,n)?this.fluid[this.idx(t,e,n)]:0}setFluid(t,e,n,s){this.inBounds(t,e,n)&&(this.fluid[this.idx(t,e,n)]=s)}static fromBuffers(t,e){const n=new Vs;return n.blocks.set(new Uint16Array(t)),n.fluid.set(new Uint8Array(e)),n}}const Xu=16,qu=32,Wv=i=>i&15,Xv=i=>(i&Xu)!==0,qv=i=>(i&qu)!==0,Yu=(i,t,e)=>i&15|(t?Xu:0)|(e?qu:0),ee=i=>i>>4,fn=i=>i&15;function en(i,t,e){let n=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,1274126177);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}const Ls=i=>i*i*(3-2*i);function Yv(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=en(n,s,e),l=en(n+1,s,e),c=en(n,s+1,e),h=en(n+1,s+1,e),u=Ls(r),d=Ls(o),f=a+(l-a)*u,g=c+(h-c)*u;return f+(g-f)*d}function Zi(i,t,e,n=4){let s=1,r=1,o=0,a=0;for(let l=0;l<n;l++)o+=s*Yv(i*r,t*r,e+l*101),a+=s,s*=.5,r*=2;return o/a}function $v(i,t,e,n){let s=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,2147483647)^Math.imul(n|0,1274126177);return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296}function Re(i,t,e,n){const s=Math.floor(i),r=Math.floor(t),o=Math.floor(e),a=Ls(i-s),l=Ls(t-r),c=Ls(e-o),h=(p,m,M)=>p+(m-p)*M,u=(p,m,M)=>$v(s+p,r+m,o+M,n),d=h(u(0,0,0),u(1,0,0),a),f=h(u(0,1,0),u(1,1,0),a),g=h(u(0,0,1),u(1,0,1),a),_=h(u(0,1,1),u(1,1,1),a);return h(h(d,f,l),h(g,_,l),c)}var Cn=(i=>(i[i.PosX=0]="PosX",i[i.NegX=1]="NegX",i[i.PosY=2]="PosY",i[i.NegY=3]="NegY",i[i.PosZ=4]="PosZ",i[i.NegZ=5]="NegZ",i))(Cn||{});const Dt={stone:0,dirt:1,grass_top:2,grass_side:3,cobblestone:4,sand:5,oak_log_top:6,oak_log_side:7,oak_planks:8,coal_ore:9,water:10,oak_leaves:11,crafting_table_top:12,crafting_table_side:13,iron_ore:14,furnace_front:15,gravel:16,grass_plant:17,obsidian:18,netherrack:19,soul_sand:20,glowstone:21,nether_quartz_ore:22,lava:23,bedrock:24,nether_portal:25,sandstone:26,cactus:27,ice:28,snow:29,spruce_log:30,spruce_leaves:31,coal_block:32,iron_block:33,quartz_block:34},Kt=i=>[i,i,i,i,i,i],Ss=(i,t,e)=>[i,i,t,e,i,i],Kv=258,Ke=[{id:0,name:"air",solid:!1,transparent:!0,faces:Kt(0),hardness:0,drop:null,needsTool:!1,tool:null},{id:1,name:"stone",solid:!0,transparent:!1,faces:Kt(Dt.stone),hardness:2,drop:4,needsTool:!0,tool:"pickaxe"},{id:2,name:"dirt",solid:!0,transparent:!1,faces:Kt(Dt.dirt),hardness:.5,drop:2,needsTool:!1,tool:"shovel"},{id:3,name:"grass",solid:!0,transparent:!1,faces:Ss(Dt.grass_side,Dt.grass_top,Dt.dirt),hardness:.6,drop:2,needsTool:!1,tool:"shovel"},{id:4,name:"cobblestone",solid:!0,transparent:!1,faces:Kt(Dt.cobblestone),hardness:2,drop:4,needsTool:!0,tool:"pickaxe"},{id:5,name:"sand",solid:!0,transparent:!1,faces:Kt(Dt.sand),hardness:.5,drop:5,needsTool:!1,tool:"shovel"},{id:6,name:"oak_log",solid:!0,transparent:!1,faces:Ss(Dt.oak_log_side,Dt.oak_log_top,Dt.oak_log_top),hardness:3.33,drop:6,needsTool:!1,tool:"axe"},{id:7,name:"oak_planks",solid:!0,transparent:!1,faces:Kt(Dt.oak_planks),hardness:2,drop:7,needsTool:!1,tool:"axe"},{id:8,name:"coal_ore",solid:!0,transparent:!1,faces:Kt(Dt.coal_ore),hardness:3,drop:Kv,needsTool:!0,tool:"pickaxe"},{id:9,name:"water",solid:!1,transparent:!0,faces:Kt(Dt.water),hardness:0,drop:null,needsTool:!1,tool:null},{id:10,name:"oak_leaves",solid:!0,transparent:!0,faces:Kt(Dt.oak_leaves),hardness:.2,drop:null,needsTool:!1,tool:null},{id:11,name:"crafting_table",solid:!0,transparent:!1,faces:Ss(Dt.crafting_table_side,Dt.crafting_table_top,Dt.oak_planks),hardness:2.5,drop:11,needsTool:!1,tool:"axe"},{id:12,name:"iron_ore",solid:!0,transparent:!1,faces:Kt(Dt.iron_ore),hardness:3,drop:12,needsTool:!0,tool:"pickaxe",minTier:2},{id:13,name:"furnace",solid:!0,transparent:!1,faces:Ss(Dt.furnace_front,Dt.cobblestone,Dt.cobblestone),hardness:3.5,drop:13,needsTool:!0,tool:"pickaxe"},{id:14,name:"torch",solid:!1,transparent:!0,faces:Kt(0),hardness:0,drop:14,needsTool:!1,tool:null,light:14},{id:15,name:"gravel",solid:!0,transparent:!1,faces:Kt(Dt.gravel),hardness:.6,drop:15,needsTool:!1,tool:"shovel"},{id:16,name:"grass_plant",solid:!1,transparent:!0,faces:Kt(Dt.grass_plant),hardness:0,drop:null,needsTool:!1,tool:null},{id:17,name:"tall_grass",solid:!1,transparent:!0,faces:Kt(Dt.grass_plant),hardness:0,drop:null,needsTool:!1,tool:null},{id:18,name:"obsidian",solid:!0,transparent:!1,faces:Kt(Dt.obsidian),hardness:12,drop:18,needsTool:!0,tool:"pickaxe",minTier:2},{id:19,name:"netherrack",solid:!0,transparent:!1,faces:Kt(Dt.netherrack),hardness:.4,drop:19,needsTool:!1,tool:"pickaxe"},{id:20,name:"soul_sand",solid:!0,transparent:!1,faces:Kt(Dt.soul_sand),hardness:.5,drop:20,needsTool:!1,tool:"shovel"},{id:21,name:"glowstone",solid:!0,transparent:!1,faces:Kt(Dt.glowstone),hardness:.3,drop:21,needsTool:!1,tool:null,light:15},{id:22,name:"nether_quartz_ore",solid:!0,transparent:!1,faces:Kt(Dt.nether_quartz_ore),hardness:3,drop:295,needsTool:!0,tool:"pickaxe",minTier:1},{id:23,name:"lava",solid:!1,transparent:!0,faces:Kt(Dt.lava),hardness:100,drop:null,needsTool:!1,tool:null,light:15},{id:24,name:"bedrock",solid:!0,transparent:!1,faces:Kt(Dt.bedrock),hardness:-1,drop:null,needsTool:!1,tool:null},{id:25,name:"nether_portal",solid:!1,transparent:!0,faces:Kt(Dt.nether_portal),hardness:-1,drop:null,needsTool:!1,tool:null,light:11},{id:26,name:"sandstone",solid:!0,transparent:!1,faces:Kt(Dt.sandstone),hardness:.8,drop:26,needsTool:!0,tool:"pickaxe"},{id:27,name:"cactus",solid:!0,transparent:!1,faces:Kt(Dt.cactus),hardness:.4,drop:27,needsTool:!1,tool:null},{id:28,name:"ice",solid:!0,transparent:!0,faces:Kt(Dt.ice),hardness:.5,drop:null,needsTool:!0,tool:"pickaxe"},{id:29,name:"snow_layer",solid:!1,transparent:!0,faces:Kt(Dt.snow),hardness:0,drop:null,needsTool:!1,tool:"shovel"},{id:30,name:"spruce_log",solid:!0,transparent:!1,faces:Ss(Dt.spruce_log,Dt.oak_log_top,Dt.oak_log_top),hardness:3.33,drop:30,needsTool:!1,tool:"axe"},{id:31,name:"spruce_leaves",solid:!0,transparent:!0,faces:Kt(Dt.spruce_leaves),hardness:.2,drop:null,needsTool:!1,tool:null},{id:32,name:"coal_block",solid:!0,transparent:!1,faces:Kt(Dt.coal_block),hardness:5,drop:32,needsTool:!0,tool:"pickaxe"},{id:33,name:"iron_block",solid:!0,transparent:!1,faces:Kt(Dt.iron_block),hardness:5,drop:33,needsTool:!0,tool:"pickaxe",minTier:2},{id:34,name:"quartz_block",solid:!0,transparent:!1,faces:Kt(Dt.quartz_block),hardness:.8,drop:34,needsTool:!0,tool:"pickaxe"}],$u=3,Rn=9,xi=10,po=6,Zv=7,jv=11,Qv=12,eh=13,Ku=14,Jv=15,tx=16,Zu=17,ex=19,nx=20,ix=21,sx=22,rx=23,ox=24,ax=25,lx=26,qi=27,il=28,sl=29,cx=30,ju=31,Pe=i=>{var t;return((t=Ke[i])==null?void 0:t.solid)??!1},ln=i=>i===Rn,nh=i=>i===xi||i===ju,Mi=i=>i===tx||i===Zu||i===sl,hx=i=>Pe(i)||Mi(i),ih=i=>i===0||i===Rn||Mi(i)||i===ax,ys=i=>{const t=Ke[i];return t?t.solid&&!t.transparent:!1},sa=(i,t)=>Ke[i].faces[t],Qu=i=>{var t;return((t=Ke[i])==null?void 0:t.hardness)??0},ux=i=>{var t;return((t=Ke[i])==null?void 0:t.needsTool)??!1},dx=i=>{var t;return((t=Ke[i])==null?void 0:t.light)??0};function Ju(i,t){var n;const e=((n=Ke[i])==null?void 0:n.tool)??null;return t!==null&&e!==null&&t.kind===e}const td=(i,t=null)=>{var e;return ux(i)?Ju(i,t)?t.tier>=(((e=Ke[i])==null?void 0:e.minTier)??1):!1:!0},fx=(i,t=null)=>{if(Mi(i))return 0;if(t&&t.kind==="sword")return 1/0;const e=Math.max(0,Qu(i));if(e===0)return 0;const n=Ju(i,t)?t.speed:1,s=td(i,t)?30:100;return Math.ceil(s*e/n)*50},px=(i,t=null)=>{var e;return td(i,t)?((e=Ke[i])==null?void 0:e.drop)??null:null},mx=i=>i===qi,gx=i=>i===il?.98:.6,sh=320,_x=.38,vx=.66;function ed(i,t,e){return Zi(i/130,t/130,e+4321,2)}function xx(i,t,e){return Zi(i/sh,t/sh,e+9001,3)}function Yi(i,t,e){const n=xx(i,t,e);return n<_x?"snow":n>vx?"desert":ed(i,t,e)>.62?"forest":"plains"}const nd=1,Mx=2,ra=3,Es=5,Sx=8,yx=12,Ex=15,bx=16,Tx=17,Se=116,wx=Yu(8,!0,!1);function Ax(i,t,e){const n=Ce(i,t,e);return Math.abs(Ce(i+5,t,e)-n)<=3&&Math.abs(Ce(i-5,t,e)-n)<=3&&Math.abs(Ce(i,t+5,e)-n)<=3&&Math.abs(Ce(i,t-5,e)-n)<=3}function Cx(i,t,e,n,s){const r=n-t;if(r<12)return!1;const o=i+(Re(i/36,t/30,e/36,s+991)-.5)*26,a=t+(Re(t/30,i/34,e/34,s+993)-.5)*22,l=e+(Re(e/36,t/30,i/36,s+992)-.5)*26;return r<50?Math.abs(Re(o/14,a/14,l/14,s+222)-.5)<.03:r<100?Math.abs(Re(o/18,a/18,l/18,s+333)-.5)<.05?!0:Re(o/22,a/22,l/22,s+700)<.07:Re(o/26,a/26,l/26,s+700)<.16?!0:Math.abs(Re(o/18,a/18,l/18,s+333)-.5)<.04}function oa(i,t,e,n,s){return Re(i/4.5,t/4.5,e/4.5,s+101)>.84?Sx:Re(i/4,t/4,e/4,s+202)>.83&&t<=n*.6?yx:Re(i/5,t/5,e/5,s+303)>.82?Ex:nd}function Ce(i,t,e){const n=Zi(i/260,t/260,e,4),s=Zi(i/72,t/72,e+17,3);let r;n<.46?r=90+n*56:n<.56?r=116+(n-.46)*80:r=124+(n-.56)*180;let o=r+(s-.5)*8;{const a=Zi(i/140,t/140,e+777,3),l=Math.abs(a-.5),c=.028+s*.022+Math.max(0,n-.54)*.4;if(l<c){let h=1-l/c;h=h*h*(3-2*h);const u=2+Math.floor(Zi(i/60,t/60,e+555,2)*3),d=Se-u;o=o*(1-h)+d*h}}return Math.floor(o)}const Hn=2,Rx=.08;function Px(i,t,e){const n=ed(i,t,e);return n<.45?.003:n>.62?.08:.003+(n-.45)/.17*.077}function Lx(i,t,e){return 4+Math.floor(en(i,t,e*31+5)*3)}function rh(i,t,e,n,s,r,o,a=po,l=xi){const c=r+Lx(n,s,o),h=(d,f,g,_,p)=>{if(f<0||f>=me||ee(d)!==t||ee(g)!==e)return;const m=fn(d),M=fn(g);p&&i.get(m,f,M)!==0||i.set(m,f,M,_)};for(const d of[-2,-1])for(let f=-2;f<=2;f++)for(let g=-2;g<=2;g++)Math.abs(f)===2&&Math.abs(g)===2||h(n+f,c+d,s+g,l,!0);for(let d=-1;d<=1;d++)for(let f=-1;f<=1;f++)h(n+d,c,s+f,l,!0);const u=[[0,0],[1,0],[-1,0],[0,1],[0,-1]];for(const[d,f]of u)h(n+d,c+1,s+f,l,!0);for(let d=r+1;d<=c;d++)h(n,d,s,a,!1)}const br=127,Dx=31;function Ux(i,t,e){const n=new Vs,s=e+7e4;for(let r=0;r<Tt;r++)for(let o=0;o<Tt;o++){const a=i*Tt+o,l=t*Tt+r;for(let c=0;c<=br;c++){if(c<=1||c>=br-1){n.set(o,c,r,ox);continue}if(Re(a/18,c/16,l/18,s+1)>.55||Re(a/9,c/10,l/9,s+2)>.78){c<=Dx&&n.set(o,c,r,rx);continue}let u=ex;Re(a/4,c/4,l/4,s+3)>.86?u=sx:Re(a/10,c/10,l/10,s+4)>.9&&(u=nx),n.set(o,c,r,u)}if(en(a,l,s+5)<.012){for(let c=br-2;c>br-7;c--)if(n.get(o,c,r)===0){n.set(o,c,r,ix);break}}}return n.dirty=!0,n}function Ix(i,t,e,n="overworld"){if(n==="nether")return Ux(i,t,e);const s=new Vs;for(let a=0;a<Tt;a++)for(let l=0;l<Tt;l++){const c=i*Tt+l,h=t*Tt+a,u=Ce(c,h,e),d=Math.min(u,Ce(c+4,h,e),Ce(c-4,h,e),Ce(c,h+4,e),Ce(c,h-4,e)),f=Ax(c,h,e),g=u<=Se+1,_=Yi(c,h,e);for(let p=0;p<=u;p++){const m=f&&Re((c+p*.8)/8,p/120,(h+p*.6)/8,e+888)>.9;if(p>1&&(m||p<u&&Cx(c,p,h,d,e)))continue;let M=nd;g?p===u||p>=u-3?M=Es:M=oa(c,p,h,u,e):_==="desert"?p===u||p>=u-3?M=Es:p>=u-7?M=lx:M=oa(c,p,h,u,e):p===u?M=ra:p>=u-3?M=Mx:M=oa(c,p,h,u,e),s.set(l,p,a,M)}for(let p=u+1;p<=Se;p++)s.set(l,p,a,Rn),s.setFluid(l,p,a,wx);if(u<Se&&_==="snow"&&s.set(l,Se,a,il),!g&&u>Se+1&&_==="snow"){const p=s.get(l,u,a),m=s.get(l,u+1,a);p===ra&&m===0&&en(c+1,h+3,e*19+41)<.85&&s.set(l,u+1,a,sl)}}const r=i*Tt,o=t*Tt;for(let a=r-Hn;a<r+Tt+Hn;a++)for(let l=o-Hn;l<o+Tt+Hn;l++){const c=en(a,l,e*13+7);if(c>=Rx)continue;const h=Ce(a,l,e);if(h<=Se+1)continue;const u=Yi(a,l,e);u!=="plains"&&u!=="forest"||c<Px(a,l,e)&&rh(s,i,t,a,l,h,e)}for(let a=r-Hn;a<r+Tt+Hn;a++)for(let l=o-Hn;l<o+Tt+Hn;l++){if(Yi(a,l,e)!=="snow")continue;const c=Ce(a,l,e);c<=Se+1||en(a,l,e*17+3)>=.03||rh(s,i,t,a,l,c,e,cx,ju)}for(let a=0;a<Tt;a++)for(let l=0;l<Tt;l++){const c=r+l,h=o+a;if(Yi(c,h,e)!=="desert")continue;const u=Ce(c,h,e);if(u<=Se+1||s.get(l,u,a)!==Es||s.get(l,u+1,a)!==0||en(c,h,e*11+53)>=.02)continue;const f=u+1;if(l>0&&(s.get(l-1,f,a)===qi||Pe(s.get(l-1,f,a)))||l<Tt-1&&(s.get(l+1,f,a)===qi||Pe(s.get(l+1,f,a)))||a>0&&(s.get(l,f,a-1)===qi||Pe(s.get(l,f,a-1)))||a<Tt-1&&(s.get(l,f,a+1)===qi||Pe(s.get(l,f,a+1))))continue;const g=1+Math.floor(en(c*3,h*3,e*7+13)*3);for(let _=1;_<=g;_++){const p=u+_;if(p>=me)break;s.set(l,p,a,qi)}}for(let a=0;a<Tt;a++)for(let l=0;l<Tt;l++){const c=r+l,h=o+a,u=Yi(c,h,e);if(u!=="plains"&&u!=="forest")continue;const d=Ce(c,h,e);if(d<=Se+1||s.get(l,d,a)!==ra||s.get(l,d+1,a)!==0)continue;const f=en(c,h,e*7+31);f>.4||s.set(l,d+1,a,f<.08?Tx:bx)}return s.dirty=!0,s}function Nx(i){return new Worker("/mineworld/assets/chunkGen.worker-CTv2IoUP.js",{name:i==null?void 0:i.name})}const oh=()=>typeof performance<"u"?performance.now():Date.now();class id{constructor(t){b(this,"chunks",new Map);b(this,"pending",new Set);b(this,"pendingSince",new Map);b(this,"genFails",new Map);b(this,"workers",[]);b(this,"rr",0);b(this,"editHook",null);if(this.seed=t,typeof Worker<"u"){const e=typeof navigator<"u"&&navigator.hardwareConcurrency||4,n=Math.max(1,Math.min(4,e));for(let s=0;s<n;s++){const r=new Nx;r.onmessage=o=>{var g;const{cx:a,cz:l,blocks:c,fluid:h,error:u}=o.data,d=this.key(a,l);if(this.pending.delete(d),this.pendingSince.delete(d),u){const _=(this.genFails.get(d)??0)+1;this.genFails.set(d,_),console.warn(`[chunkgen] 区块(${a},${l}) 生成失败 #${_}: ${u.split(`
`)[0]}`);return}if(this.genFails.delete(d),this.chunks.has(d)||!c||!h)return;const f=Vs.fromBuffers(c,h);(g=this.editHook)==null||g.call(this,a,l,f),f.dirty=!0,this.chunks.set(d,f)},r.onerror=o=>{console.error("[chunkgen worker] 致命错误(整个 worker 挂了，会拖慢加载):",o.message)},this.workers.push(r)}}}key(t,e){return`${t},${e}`}dispose(){for(const t of this.workers)t.terminate();this.workers.length=0,this.chunks.clear(),this.pending.clear(),this.pendingSince.clear(),this.genFails.clear(),this.editHook=null}hasChunk(t,e){return this.chunks.has(this.key(t,e))}request(t,e){const n=this.key(t,e);if(!(this.chunks.has(n)||this.pending.has(n))&&!((this.genFails.get(n)??0)>=3)){if(this.workers.length===0){this.getChunk(t,e);return}this.pending.add(n),this.pendingSince.set(n,oh()),this.workers[this.rr].postMessage({cx:t,cz:e,seed:this.seed}),this.rr=(this.rr+1)%this.workers.length}}retryStuckGen(t=8e3){const e=oh();for(const[n,s]of this.pendingSince)e-s>t&&(this.pending.delete(n),this.pendingSince.delete(n),console.warn(`[chunkgen] 区块 ${n} 生成 ${Math.round((e-s)/1e3)}s 未回(worker 丢消息?) → 重试`))}peek(t,e){return this.chunks.get(this.key(t,e))}evictBeyond(t,e,n){for(const s of[...this.chunks.keys()]){const r=s.indexOf(","),o=+s.slice(0,r),a=+s.slice(r+1);(Math.abs(o-t)>n||Math.abs(a-e)>n)&&this.chunks.delete(s)}}getChunk(t,e){var r;const n=this.key(t,e);let s=this.chunks.get(n);return s||(s=Ix(t,e,this.seed),(r=this.editHook)==null||r.call(this,t,e,s),this.chunks.set(n,s),this.pending.delete(n)),s}getBlock(t,e,n){return e<0||e>=me?0:this.getChunk(ee(t),ee(n)).get(fn(t),e,fn(n))}setBlock(t,e,n,s){if(e<0||e>=me)return;const r=ee(t),o=ee(n),a=fn(t),l=fn(n),c=this.getChunk(r,o);c.set(a,e,l,s),s!==Rn&&c.setFluid(a,e,l,0),c.dirty=!0,this.markNeighborsDirty(r,o,a,l)}fluidByte(t,e,n){return e<0||e>=me?0:this.getChunk(ee(t),ee(n)).getFluid(fn(t),e,fn(n))}waterAmount(t,e,n){return this.getBlock(t,e,n)!==Rn?0:Wv(this.fluidByte(t,e,n))}isWaterSource(t,e,n){return this.getBlock(t,e,n)===Rn&&Xv(this.fluidByte(t,e,n))}isWaterFalling(t,e,n){return this.getBlock(t,e,n)===Rn&&qv(this.fluidByte(t,e,n))}setWater(t,e,n,s,r,o){if(e<0||e>=me)return;const a=ee(t),l=ee(n),c=fn(t),h=fn(n),u=this.getChunk(a,l);s<=0?(u.get(c,e,h)===Rn&&u.set(c,e,h,0),u.setFluid(c,e,h,0)):(u.set(c,e,h,Rn),u.setFluid(c,e,h,Yu(s,r,o))),u.dirty=!0,this.markNeighborsDirty(a,l,c,h)}markNeighborsDirty(t,e,n,s){n===0&&this.markDirty(t-1,e),n===15&&this.markDirty(t+1,e),s===0&&this.markDirty(t,e-1),s===15&&this.markDirty(t,e+1),n===0&&s===0&&this.markDirty(t-1,e-1),n===0&&s===15&&this.markDirty(t-1,e+1),n===15&&s===0&&this.markDirty(t+1,e-1),n===15&&s===15&&this.markDirty(t+1,e+1)}markDirty(t,e){const n=this.chunks.get(this.key(t,e));n&&(n.dirty=!0)}}function ah(i,t,e,n){let s=Math.floor(i.x),r=Math.floor(i.y),o=Math.floor(i.z);const a=Math.sign(t.x),l=Math.sign(t.y),c=Math.sign(t.z),h=t.x!==0?Math.abs(1/t.x):1/0,u=t.y!==0?Math.abs(1/t.y):1/0,d=t.z!==0?Math.abs(1/t.z):1/0,f=(M,v)=>v>0?Math.floor(M)+1-M:v<0?M-Math.floor(M):1/0;let g=t.x!==0?f(i.x,a)*h:1/0,_=t.y!==0?f(i.y,l)*u:1/0,p=t.z!==0?f(i.z,c)*d:1/0;if(n(s,r,o))return{x:s,y:r,z:o,nx:0,ny:0,nz:0};let m=0;for(let M=0;M<256;M++){let v=0,T=0,k=0;if(g<_&&g<p?(s+=a,m=g,g+=h,v=-a):_<p?(r+=l,m=_,_+=u,T=-l):(o+=c,m=p,p+=d,k=-c),m>e)break;if(n(s,r,o))return{x:s,y:r,z:o,nx:v,ny:T,nz:k}}return null}const aa=6,Fx=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Tr=(i,t,e)=>`${i},${t},${e}`;function Ox(i,t,e,n,s=aa){const r=s+aa,o=new Map,a=[];for(let c=t-r;c<=t+r;c++)for(let h=e-r;h<=e+r;h++)for(let u=n-r;u<=n+r;u++)i(c,h,u)===po&&(o.set(Tr(c,h,u),0),a.push({x:c,y:h,z:u}));for(let c=0;c<a.length;c++){const h=a[c],u=o.get(Tr(h.x,h.y,h.z))??0;if(!(u>=aa))for(const[d,f,g]of Fx){const _=h.x+d,p=h.y+f,m=h.z+g;if(i(_,p,m)!==xi)continue;const M=Tr(_,p,m);o.has(M)||(o.set(M,u+1),a.push({x:_,y:p,z:m}))}}const l=[];for(let c=t-s;c<=t+s;c++)for(let h=e-s;h<=e+s;h++)for(let u=n-s;u<=n+s;u++)i(c,h,u)===xi&&!o.has(Tr(c,h,u))&&l.push({x:c,y:h,z:u});return l}const kx="mqpvkhep";function Ws(i){return`/mineworld/${i}?v=${kx}`}const lh=new Map;function Va(i="cartoon"){const t=lh.get(i);if(t)return t;const e=i==="classic"?"textures/atlas_classic.png":"textures/atlas.png",n=new Gs().load(Ws(e));return n.magFilter=ne,n.minFilter=ne,n.generateMipmaps=!1,n.colorSpace=oe,lh.set(i,n),n}function zx(i){const t=new Gs,e=[];for(let n=0;n<i;n++){const s=t.load(Ws(`textures/blocks/water_${n}.png`));s.magFilter=ne,s.minFilter=ne,s.generateMipmaps=!1,s.colorSpace=oe,s.wrapS=Si,s.wrapT=Si,e.push(s)}return e}const Hr={volume:70,lightingQuality:"standard",texturePack:"cartoon",renderDistance:6},sd="mineworld.settings",Bx=["off","standard","high"];function rd(i){const t=i??{},e=typeof t.volume=="number"&&isFinite(t.volume)?Math.max(0,Math.min(100,Math.round(t.volume))):Hr.volume;let n;typeof t.lightingQuality=="string"&&Bx.includes(t.lightingQuality)?n=t.lightingQuality:typeof t.shaders=="boolean"?n=t.shaders?"high":"standard":n=Hr.lightingQuality;const s=t.texturePack==="classic"?"classic":"cartoon",r=typeof t.renderDistance=="number"&&isFinite(t.renderDistance)?Math.max(3,Math.min(12,Math.round(t.renderDistance))):Hr.renderDistance;return{volume:e,lightingQuality:n,texturePack:s,renderDistance:r}}function $i(){try{const i=localStorage.getItem(sd);return rd(i?JSON.parse(i):null)}catch{return{...Hr}}}function Hx(i){try{localStorage.setItem(sd,JSON.stringify(rd(i)))}catch{}}const od=15,ad=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function Gx(i,t,e,n){const s=n??(()=>0),r=new Uint8Array(i*t*i),o=(l,c,h)=>l+h*i+c*i*i,a=[];for(let l=0;l<i;l++)for(let c=0;c<i;c++){let h=od;for(let u=t-1;u>=0&&!e(c,u,l);u--){h=Math.max(0,h-s(c,u,l));const d=o(c,u,l);r[d]=h,h>0&&a.push(d)}}for(let l=0;l<a.length;l++){const c=a[l],h=r[c];if(h<=1)continue;const u=c/(i*i)|0,d=c-u*i*i,f=d/i|0,g=d-f*i;for(const[_,p,m]of ad){const M=g+_,v=u+p,T=f+m;if(M<0||M>=i||v<0||v>=t||T<0||T>=i||e(M,v,T))continue;const k=h-1-s(M,v,T);if(k<=0)continue;const C=o(M,v,T);r[C]>=k||(r[C]=k,a.push(C))}}return r}function Vx(i,t,e,n,s){const r=s??(()=>0),o=new Uint8Array(i*t*i),a=(c,h,u)=>c+u*i+h*i*i,l=[];for(let c=0;c<t;c++)for(let h=0;h<i;h++)for(let u=0;u<i;u++){const d=e(u,c,h);if(d>0){const f=a(u,c,h);d>o[f]&&(o[f]=Math.min(od,d),l.push(f))}}for(let c=0;c<l.length;c++){const h=l[c],u=o[h];if(u<=1)continue;const d=h/(i*i)|0,f=h-d*i*i,g=f/i|0,_=f-g*i;for(const[p,m,M]of ad){const v=_+p,T=d+m,k=g+M;if(v<0||v>=i||T<0||T>=t||k<0||k>=i||n(v,T,k))continue;const C=u-1-r(v,T,k);if(C<=0)continue;const w=a(v,T,k);o[w]>=C||(o[w]=C,l.push(w))}}return o}const an=4,wr=9,Wx=16,ch=[.6,.6,1,.5,.8,.8],pi=[{n:[1,0,0],o:[1,0,0],c:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],uv:[[0,0],[0,1],[1,1],[1,0]]},{n:[-1,0,0],o:[-1,0,0],c:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,1,0],o:[0,1,0],c:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],uv:[[0,0],[0,1],[1,1],[1,0]]},{n:[0,-1,0],o:[0,-1,0],c:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,1],o:[0,0,1],c:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,-1],o:[0,0,-1],c:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],uv:[[0,0],[0,1],[1,1],[1,0]]}],Xx=[.5,.7,.86,1];function qx(i,t,e){return i&&t?0:3-(Number(i)+Number(t)+Number(e))}const ld=[{u:[0,1,0],v:[0,0,1],ui:1,vi:2},{u:[0,1,0],v:[0,0,1],ui:1,vi:2},{u:[1,0,0],v:[0,0,1],ui:0,vi:2},{u:[1,0,0],v:[0,0,1],ui:0,vi:2},{u:[1,0,0],v:[0,1,0],ui:0,vi:1},{u:[1,0,0],v:[0,1,0],ui:0,vi:1}];function Yx(i,t,e,n,s,r){const o=pi[s],a=ld[s],l=o.c[r],c=l[a.ui]===1?1:-1,h=l[a.vi]===1?1:-1,u=t+o.n[0],d=e+o.n[1],f=n+o.n[2],g=i(u+c*a.u[0],d+c*a.u[1],f+c*a.u[2]),_=i(u+h*a.v[0],d+h*a.v[1],f+h*a.v[2]),p=i(u+c*a.u[0]+h*a.v[0],d+c*a.u[1]+h*a.v[1],f+c*a.u[2]+h*a.v[2]);return Xx[qx(g,_,p)]}const Ar=()=>({P:[],U:[],C:[],I:[],L:[],T:[],SW:[]}),Cr=i=>{const t=i.P.length/3;return{positions:new Float32Array(i.P),uvs:new Float32Array(i.U),colors:new Float32Array(i.C),indices:t<=65535?new Uint16Array(i.I):new Uint32Array(i.I),light:new Float32Array(i.L),top:i.T.length?new Float32Array(i.T):void 0,sway:i.SW.length?new Float32Array(i.SW):void 0}};function $x(i,t,e,n){const s=i*Tt,r=t*Tt,o=Ar(),a=Ar(),l=Ar(),c=Ar(),h=.01/(Wx*an),u=1/an-2*h,d=1/wr-2*h,f=(R,O,F)=>ys(e(R,O,F)),g=Tt+2,_=(R,O,F)=>{const B=e(s+R-1,O,r+F-1);return ln(B)||nh(B)?1:0},p=Gx(g,me,(R,O,F)=>f(s+R-1,O,r+F-1),_),m=Vx(g,me,(R,O,F)=>dx(e(s+R-1,O,r+F-1)),(R,O,F)=>f(s+R-1,O,r+F-1),_),M=(R,O,F)=>O>=me?15:O<0?0:p[R+1+(F+1)*g+O*g*g],v=(R,O,F)=>O>=me||O<0?0:m[R+1+(F+1)*g+O*g*g],T=(R,O,F,B,G)=>{const L=ld[B],J=pi[B].c[G],nt=J[L.ui]===1?1:-1,st=J[L.vi]===1?1:-1,mt=R+nt*L.u[0],gt=O+nt*L.u[1],V=F+nt*L.u[2],Y=R+st*L.v[0],at=O+st*L.v[1],Z=F+st*L.v[2],xt=mt+st*L.v[0],pt=gt+st*L.v[1],Lt=V+st*L.v[2],P=f(s+mt,gt,r+V),Ut=f(s+Y,at,r+Z),At=f(s+xt,pt,r+Lt);let Qt=M(R,O,F),St=v(R,O,F),Bt=1;return P||(Qt+=M(mt,gt,V),St+=v(mt,gt,V),Bt++),Ut||(Qt+=M(Y,at,Z),St+=v(Y,at,Z),Bt++),!(P&&Ut)&&!At&&(Qt+=M(xt,pt,Lt),St+=v(xt,pt,Lt),Bt++),[Qt/Bt/15,St/Bt/15]},k=(R,O,F,B,G,L)=>{const J=pi[L],nt=sa(G,L),st=nt%an/an+h,mt=1-(Math.floor(nt/an)+1)/wr+h,gt=ch[L],V=O+J.o[0],Y=F+J.o[1],at=B+J.o[2],Z=R.P.length/3,xt=[0,0,0,0];for(let pt=0;pt<4;pt++){const Lt=J.c[pt];xt[pt]=Yx(f,s+O,F,r+B,L,pt);const P=gt*xt[pt],[Ut,At]=T(V,Y,at,L,pt);R.P.push(O+Lt[0],F+Lt[1],B+Lt[2]),R.U.push(st+J.uv[pt][0]*u,mt+J.uv[pt][1]*d),R.C.push(P,P,P),R.L.push(Ut,At)}xt[0]+xt[2]>xt[1]+xt[3]?R.I.push(Z,Z+1,Z+2,Z,Z+2,Z+3):R.I.push(Z+1,Z+2,Z+3,Z+1,Z+3,Z),R===a&&R.SW.push(1,1,1,1)},C=(R,O,F)=>{const B=R+.5,G=O+.5,L=.34,J=.62,nt=[.5,.32,.14],st=[1,.74,.24],mt=[[B-L,G-L,B+L,G+L],[B-L,G+L,B+L,G-L]];for(const[gt,V,Y,at]of mt){const Z=c.P.length/3,xt=[[gt,F,V,...nt],[Y,F,at,...nt],[Y,F+J,at,...st],[gt,F+J,V,...st]];for(const pt of xt)c.P.push(pt[0],pt[1],pt[2]),c.U.push(0,0),c.C.push(pt[3],pt[4],pt[5]);c.I.push(Z,Z+1,Z+2,Z,Z+2,Z+3)}},w=(R,O,F,B,G)=>{const L=B%an/an+h,J=L+u,nt=1-(Math.floor(B/an)+1)/wr+h,st=nt+d,mt=M(R,O,F)/15,gt=v(R,O,F)/15,V=.9,Y=R+.5,at=F+.5,Z=.5,xt=[[Y-Z,at-Z,Y+Z,at+Z],[Y-Z,at+Z,Y+Z,at-Z]];for(const[pt,Lt,P,Ut]of xt){const At=a.P.length/3;a.P.push(pt,O,Lt,P,O,Ut,P,O+G,Ut,pt,O+G,Lt),a.U.push(L,nt,J,nt,J,st,L,st),a.C.push(V,V,V,V,V,V,V,V,V,V,V,V),a.L.push(mt,gt,mt,gt,mt,gt,mt,gt),a.SW.push(0,0,1,1),a.I.push(At,At+1,At+2,At,At+2,At+3)}},N=(R,O,F,B)=>{const G=B%an/an+h,L=G+u,J=1-(Math.floor(B/an)+1)/wr+h,nt=J+d,st=M(R,O,F)/15,mt=v(R,O,F)/15,gt=1,V=O+.06,Y=a.P.length/3;a.P.push(R,V,F,R,V,F+1,R+1,V,F+1,R+1,V,F),a.U.push(G,J,G,nt,L,nt,L,J),a.C.push(gt,gt,gt,gt,gt,gt,gt,gt,gt,gt,gt,gt),a.L.push(st,mt,st,mt,st,mt,st,mt),a.I.push(Y,Y+1,Y+2,Y,Y+2,Y+3)};let E=1,y=1;const U=(R,O,F,B,G)=>{const L=pi[B],J=ch[B],nt=M(R+L.o[0],O+L.o[1],F+L.o[2])/15,st=v(R+L.o[0],O+L.o[1],F+L.o[2])/15,mt=l.P.length/3,gt=B===2;for(let V=0;V<4;V++){const Y=L.c[V],at=O+G[V];l.P.push(R+Y[0],at,F+Y[2]);const Z=s+R+Y[0],xt=r+F+Y[2];B===2||B===3?l.U.push(Z,xt):B===0||B===1?l.U.push(xt,at):l.U.push(Z,at),l.C.push(J,J,J),l.L.push(nt,st);const pt=gt||G[V]>.01?E:0;l.T.push((pt>0?1:-1)*y)}l.I.push(mt,mt+1,mt+2,mt,mt+2,mt+3)},$=(R,O)=>{let F=0,B=0;for(const[G,L]of O){const J=n(G,R,L);if(n(G,R+1,L)>0)return 1;if(J>0){const nt=J/9;nt>=.8?(F+=nt*10,B+=10):(F+=nt,B+=1)}else Pe(e(G,R,L))||(B+=1)}return B>0?F/B:.5};for(let R=0;R<me;R++)for(let O=0;O<Tt;O++)for(let F=0;F<Tt;F++){const B=e(s+F,R,r+O);if(ys(B))for(let G=0;G<6;G++){const L=pi[G];ys(e(s+F+L.o[0],R+L.o[1],r+O+L.o[2]))||k(o,F,R,O,B,G)}else if(nh(B))for(let G=0;G<6;G++){const L=pi[G];ys(e(s+F+L.o[0],R+L.o[1],r+O+L.o[2]))||k(a,F,R,O,B,G)}else if(ln(B)){const G=s+F,L=r+O;E=n(G,R+1,L)>0?0:1;let J=1;for(let Y=R+1;J<7&&Y<me&&n(G,Y,L)>0;Y++)J++;for(let Y=R-1;J<7&&Y>=0&&n(G,Y,L)>0;Y--)J++;y=J;const nt=$(R,[[G,L],[G-1,L],[G,L-1],[G-1,L-1]]),st=$(R,[[G,L],[G-1,L],[G,L+1],[G-1,L+1]]),mt=$(R,[[G,L],[G+1,L],[G,L+1],[G+1,L+1]]),gt=$(R,[[G,L],[G+1,L],[G,L-1],[G+1,L-1]]);n(G,R+1,L)===0&&U(F,R,O,Cn.PosY,[nt,st,mt,gt]),e(G,R-1,L)===0&&U(F,R,O,Cn.NegY,[0,0,0,0]);const V=(Y,at,Z,xt)=>{e(G+at,R,L+Z)===0&&U(F,R,O,Y,xt)};V(Cn.PosX,1,0,[0,gt,mt,0]),V(Cn.NegX,-1,0,[0,0,st,nt]),V(Cn.PosZ,0,1,[0,0,mt,st]),V(Cn.NegZ,0,-1,[0,nt,gt,0])}else if(B===Ku)C(F,O,R);else if(Mi(B))B===sl?N(F,R,O,sa(B,Cn.PosY)):w(F,R,O,sa(B,Cn.PosY),B===Zu?1.45:.82);else if(B===il)for(let G=0;G<6;G++){const L=pi[G];ys(e(s+F+L.o[0],R+L.o[1],r+O+L.o[2]))||k(o,F,R,O,B,G)}}return{opaque:Cr(o),cutout:Cr(a),water:Cr(l),torch:Cr(c)}}function Kx(i,t,e){return $x(t,e,(n,s,r)=>i.getBlock(n,s,r),(n,s,r)=>i.waterAmount(n,s,r))}function Zx(i){return new Worker("/mineworld/assets/meshGen.worker-CFUhNDTW.js",{name:i==null?void 0:i.name})}const jx=.15,Qx=24*24;function Jx(i,t,e,n,s,r,o=jx,a=Qx){const l=i-e,c=t-n,h=l*l+c*c;return h<=a?!0:(l*s+c*r)/Math.sqrt(h)>=o}const tM=-.2,eM=2.25;function nM(i,t,e,n,s=tM,r=eM){const o=i*i+t*t;return o<=r?!0:(i*e+t*n)/Math.sqrt(o)>=s}const hn=24e3,iM=1e3,Vi=[{t:0,top:[.36,.48,.66],hor:[1,.62,.36],tint:[.72,.64,.62]},{t:1800,top:[.3,.52,.79],hor:[.81,.9,.97],tint:[1,1,1]},{t:11e3,top:[.3,.52,.79],hor:[.81,.9,.97],tint:[1,1,1]},{t:12200,top:[.24,.34,.55],hor:[1,.5,.24],tint:[.86,.62,.5]},{t:13600,top:[.05,.07,.16],hor:[.09,.12,.24],tint:[.3,.34,.5]},{t:22e3,top:[.05,.07,.16],hor:[.09,.12,.24],tint:[.3,.34,.5]},{t:23200,top:[.36,.48,.66],hor:[1,.62,.36],tint:[.72,.64,.62]}],la=(i,t,e)=>i+(t-i)*e,ca=(i,t,e)=>[la(i[0],t[0],e),la(i[1],t[1],e),la(i[2],t[2],e)];function cd(i){return(i%hn+hn)%hn}function hh(i){const e=(cd(i)-6e3)/hn*Math.PI*2;return Math.max(0,Math.min(1,.5-2*Math.cos(e)))*11}const sM={skyTop:[.18,.05,.05],skyHorizon:[.34,.09,.07],worldTint:[.62,.32,.28],light:.3,isNight:!0};function ha(i,t="overworld"){if(t==="nether")return sM;const e=cd(i);let n=Vi[0],s={...Vi[0],t:hn};for(let a=0;a<Vi.length;a++){const l=Vi[a],c=Vi[a+1]??{...Vi[0],t:hn};if(e>=l.t&&e<c.t){n=l,s=c;break}}const r=s.t===n.t?0:(e-n.t)/(s.t-n.t),o=ca(n.tint,s.tint,r);return{skyTop:ca(n.top,s.top,r),skyHorizon:ca(n.hor,s.hor,r),worldTint:o,light:(o[0]+o[1]+o[2])/3,isNight:e>=13e3&&e<23e3}}const uh=()=>typeof performance<"u"?performance.now():Date.now(),rM=24,Rr=1024,Pr=36,oM=110,dh=(i,t,e)=>{const n=Math.max(0,Math.abs(i)-.5),s=Math.max(0,Math.abs(t)-.5);return n*n+s*s>e},fh="float mcBright(float lv){ float f = clamp(lv,0.0,15.0)/15.0; return f/(4.0-3.0*f); }",ph="{ float skyLv = aLight.x*15.0; float blkLv = aLight.y*15.0; float bs = mcBright(max(skyLv - uSkyDarken, 0.0)); float bb = mcBright(blkLv); vLF = max(bs, bb) * 0.96 + 0.04; float sf = (bs + bb) > 0.0001 ? bs / (bs + bb) : 1.0; vTint = mix(vec3(1.0, 0.91, 0.78), uSkyTint, sf); }";class hd{constructor(t,e,n){b(this,"meshes",new Map);b(this,"opaqueMat");b(this,"cutoutMat");b(this,"waterMat");b(this,"torchMat");b(this,"waterFrames");b(this,"waterTex");b(this,"waterAnimT",0);b(this,"waterFrame",0);b(this,"uSkyMul",{value:1});b(this,"uSkyTint",{value:new It(1,1,1)});b(this,"uSkyDarken",{value:0});b(this,"uShaders",{value:0});b(this,"uTime",{value:0});b(this,"uSkyRefl",{value:new It(.55,.72,.95)});b(this,"uSkyTop",{value:new It(.35,.55,.85)});b(this,"uSunDir",{value:new H(.4,.85,.3)});b(this,"sun",new Cv(16777215,0));b(this,"uShadowMap",{value:null});b(this,"uShadowMatrix",{value:new ie});b(this,"uShadowTexel",{value:new Ht(1/Rr,1/Rr)});b(this,"uShadowOn",{value:0});b(this,"uSunUp",{value:0});b(this,"leafDepthMat",null);b(this,"meshWorkers",[]);b(this,"meshRr",0);b(this,"meshPending",new Set);b(this,"meshPendingSince",new Map);b(this,"meshFails",new Map);b(this,"meshQueue",[]);b(this,"editKeys",new Set);b(this,"priorityQueue",[]);b(this,"fogCullR2",(oM/Tt)**2);b(this,"lastTint","");this.scene=t,this.world=e,this.opaqueMat=new ce({map:n,vertexColors:!0}),this.cutoutMat=new ce({map:n,vertexColors:!0,alphaTest:.5,side:Fe}),this.waterFrames=zx(rM),this.waterTex=this.waterFrames[0].clone(),this.waterTex.needsUpdate=!0,this.waterMat=new ce({map:this.waterTex,vertexColors:!0,transparent:!0,opacity:.78,depthWrite:!1}),this.installLight(this.opaqueMat),this.installLight(this.cutoutMat,!0),this.installWaterShader(this.waterMat),this.torchMat=new ce({vertexColors:!0,side:Fe}),this.sun.castShadow=!1,this.sun.shadow.mapSize.set(Rr,Rr);const s=this.sun.shadow.camera;if(s.left=-Pr,s.right=Pr,s.top=Pr,s.bottom=-Pr,s.near=1,s.far=260,this.scene.add(this.sun),this.scene.add(this.sun.target),this.leafDepthMat=new Bu({depthPacking:Su,map:n,alphaTest:.5}),typeof Worker<"u"){const r=typeof navigator<"u"&&navigator.hardwareConcurrency||4,o=Math.max(1,Math.min(4,r-1));for(let a=0;a<o;a++){const l=new Zx;l.onmessage=c=>{var _;const{cx:h,cz:u,mesh:d,error:f}=c.data,g=this.key(h,u);if(this.meshPending.has(g)){if(this.meshPending.delete(g),this.meshPendingSince.delete(g),f){const p=(this.meshFails.get(g)??0)+1;this.meshFails.set(g,p),console.warn(`[meshgen] 区块(${h},${u}) 网格化失败 #${p}: ${f.split(`
`)[0]}`);return}this.meshFails.delete(g),!(!d||!this.world.peek(h,u))&&(this.editKeys.has(g)?(this.priorityQueue.push({cx:h,cz:u,mesh:d}),(_=this.world.peek(h,u))!=null&&_.dirty||this.editKeys.delete(g)):this.meshQueue.push({cx:h,cz:u,mesh:d}))}},l.onerror=c=>{console.error("[meshgen worker] 致命错误(整个 worker 挂了，区块会停止网格化):",c.message)},this.meshWorkers.push(l)}}}installLight(t,e=!1){t.onBeforeCompile=n=>{n.uniforms.uSkyTint=this.uSkyTint,n.uniforms.uSkyDarken=this.uSkyDarken,n.uniforms.uShadowMap=this.uShadowMap,n.uniforms.uShadowMatrix=this.uShadowMatrix,n.uniforms.uShadowTexel=this.uShadowTexel,n.uniforms.uShadowOn=this.uShadowOn,n.uniforms.uSunUp=this.uSunUp,e&&(n.uniforms.uTime=this.uTime,n.uniforms.uShaders=this.uShaders);const s=e?`{ float sw = uShaders * 0.06 * aSway; vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz; float ph = wp.x*0.6 + wp.z*0.5 + wp.y*0.3; transformed.x += sin(ph + uTime*1.4) * sw; transformed.z += sin(ph*1.3 + uTime*1.1) * sw; transformed.y += sin(ph*0.8 + uTime*1.7) * sw * 0.5; }
`:"";n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aLight;
uniform vec3 uSkyTint;
uniform float uSkyDarken;
uniform mat4 uShadowMatrix;
`+(e?`uniform float uTime;
uniform float uShaders;
attribute float aSway;
`:"")+`varying float vLF;
varying vec3 vTint;
varying vec4 vShadowCoord;
varying float vSky;
`+fh).replace("#include <begin_vertex>",`#include <begin_vertex>
`+s+ph+`
vSky = aLight.x;
vShadowCoord = uShadowMatrix * (modelMatrix * vec4(transformed, 1.0));`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vLF;
varying vec3 vTint;
varying vec4 vShadowCoord;
varying float vSky;
uniform sampler2D uShadowMap;
uniform vec2 uShadowTexel;
uniform float uShadowOn;
uniform float uSunUp;
float mwUnpackDepth(vec4 v){ const vec4 f = (255.0/256.0)/vec4(16777216.0,65536.0,256.0,256.0); return dot(v,f); }
float mwShadow(vec4 sc){
  vec3 c = sc.xyz / sc.w;
  if (c.z >= 1.0 || c.x < 0.0 || c.x > 1.0 || c.y < 0.0 || c.y > 1.0) return 1.0;
  float bias = 0.0018;
  float s = 0.0;
  s += (c.z - bias <= mwUnpackDepth(texture2D(uShadowMap, c.xy + vec2( 0.9, 0.3)*uShadowTexel))) ? 1.0 : 0.0;
  s += (c.z - bias <= mwUnpackDepth(texture2D(uShadowMap, c.xy + vec2(-0.3, 0.9)*uShadowTexel))) ? 1.0 : 0.0;
  s += (c.z - bias <= mwUnpackDepth(texture2D(uShadowMap, c.xy + vec2(-0.9,-0.3)*uShadowTexel))) ? 1.0 : 0.0;
  s += (c.z - bias <= mwUnpackDepth(texture2D(uShadowMap, c.xy + vec2( 0.3,-0.9)*uShadowTexel))) ? 1.0 : 0.0;
  return s / 4.0;
}`).replace("#include <color_fragment>",`#include <color_fragment>
float vis = 1.0;
if (uShadowOn > 0.5) {
  float sh = mwShadow(vShadowCoord);
  float gate = vSky * uSunUp;
  vis = mix(1.0, mix(0.5, 1.0, sh), gate);
}
diffuseColor.rgb *= vLF * vTint * vis;`)}}updateSun(t,e,n,s){const r=t/hn*Math.PI*2;let o=Math.cos(r),a=Math.sin(r),l=.28;const c=Math.hypot(o,a,l)||1;o/=c,a/=c,l/=c;const h=Math.round(e),u=Math.round(n),d=Math.round(s);this.sun.target.position.set(h,u,d),this.sun.position.set(h+o*120,u+a*120,d+l*120),this.sun.target.updateMatrixWorld(),this.sun.updateMatrixWorld(),this.uSunUp.value=Math.max(0,Math.min(1,(a-.02)/.2));const f=this.sun.shadow.map;this.sun.castShadow&&f&&f.texture&&this.uSunUp.value>.001?(this.uShadowMap.value=f.texture,this.uShadowMatrix.value=this.sun.shadow.matrix,this.uShadowOn.value=1):this.uShadowOn.value=0}installWaterShader(t){t.onBeforeCompile=e=>{e.uniforms.uSkyMul=this.uSkyMul,e.uniforms.uSkyTint=this.uSkyTint,e.uniforms.uSkyDarken=this.uSkyDarken,e.uniforms.uShaders=this.uShaders,e.uniforms.uTime=this.uTime,e.uniforms.uSkyRefl=this.uSkyRefl,e.uniforms.uSkyTop=this.uSkyTop,e.uniforms.uSunDir=this.uSunDir,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aLight;
attribute float aTop;
varying float vWaterDepth;
uniform vec3 uSkyTint;
uniform float uSkyDarken;
uniform float uShaders;
uniform float uTime;
varying float vLF;
varying vec3 vTint;
varying vec3 vWPos;
float mwHv(vec2 p){ vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  float a = fract(sin(dot(i, vec2(127.1, 311.7))) * 43758.5453);
  float b = fract(sin(dot(i + vec2(1.0, 0.0), vec2(127.1, 311.7))) * 43758.5453);
  float c = fract(sin(dot(i + vec2(0.0, 1.0), vec2(127.1, 311.7))) * 43758.5453);
  float d = fract(sin(dot(i + vec2(1.0, 1.0), vec2(127.1, 311.7))) * 43758.5453);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y); }
float mwWaveV(vec2 q, float t){ return mwHv(q * 0.5 + vec2(t * 0.30, t * 0.21)) * 0.6 + mwHv(q * 1.3 + vec2(-t * 0.26, t * 0.42)) * 0.4; }
`+fh).replace("#include <begin_vertex>",`#include <begin_vertex>
`+ph+`
vec3 mwWp0 = (modelMatrix * vec4(transformed, 1.0)).xyz;
transformed.y += (mwWaveV(mwWp0.xz, uTime) - 0.5) * 0.6 * step(0.5, aTop) * uShaders;
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vWaterDepth = abs(aTop);`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uSkyMul;
uniform float uShaders;
uniform float uTime;
uniform vec3 uSkyRefl;
uniform vec3 uSkyTop;
uniform vec3 uSunDir;
varying float vLF;
varying vec3 vTint;
varying vec3 vWPos;
varying float vWaterDepth;
float mwH(vec2 p){ vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  float a = fract(sin(dot(i, vec2(127.1, 311.7))) * 43758.5453);
  float b = fract(sin(dot(i + vec2(1.0, 0.0), vec2(127.1, 311.7))) * 43758.5453);
  float c = fract(sin(dot(i + vec2(0.0, 1.0), vec2(127.1, 311.7))) * 43758.5453);
  float d = fract(sin(dot(i + vec2(1.0, 1.0), vec2(127.1, 311.7))) * 43758.5453);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y); }
float mwWave(vec2 q, float t){
  return mwH(q * 0.5 + vec2(t * 0.30, t * 0.21)) * 0.6 + mwH(q * 1.3 + vec2(-t * 0.26, t * 0.42)) * 0.4; }`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= vLF * vTint;
if (uShaders > 0.5) {
  vec2 wq = vWPos.xz; float e = 0.35;
  float h0 = mwWave(wq, uTime);
  float hx = mwWave(wq + vec2(e, 0.0), uTime);
  float hz = mwWave(wq + vec2(0.0, e), uTime);
  vec3 N = normalize(vec3((h0 - hx) / e * 1.0, 1.0, (h0 - hz) / e * 1.0));
  vec3 V = normalize(cameraPosition - vWPos);
  float above = clamp(V.y * 4.0 + 0.2, 0.0, 1.0);
  vec3 Rr = reflect(-V, N);
  vec3 skyR = mix(uSkyRefl, uSkyTop, clamp(Rr.y, 0.0, 1.0)) * 0.6;
  float fres = clamp(0.02 + 0.98 * pow(1.0 - max(dot(V, N), 0.0), 5.0), 0.0, 0.40);
  float dN = clamp((vWaterDepth - 1.0) / 5.0, 0.0, 1.0);
  vec3 base = mix(vec3(0.10, 0.58, 0.92), vec3(0.0, 0.34, 0.70), dN) * vLF * vTint;
  vec3 col = mix(base, skyR, fres * above);
  vec3 Rs = reflect(-normalize(uSunDir), N);
  col += pow(max(dot(Rs, V), 0.0), 90.0) * uSkyMul * vec3(1.0, 0.96, 0.85) * 0.7 * above;
  diffuseColor.rgb = col;
  float depthA = mix(0.06, 0.82, dN);
  diffuseColor.a = mix(depthA, 0.85, fres);
}`)}}setTint(t){const e=t.join();e!==this.lastTint&&(this.lastTint=e,this.uSkyTint.value.setRGB(t[0],t[1],t[2]))}setSkyMul(t){this.uSkyMul.value=t}setSkyDarken(t){this.uSkyDarken.value=t}setLightingQuality(t){this.uShaders.value=t!=="off"?1:0,this.sun.castShadow=t==="high",t!=="high"&&(this.uShadowOn.value=0)}setFogFar(t){this.fogCullR2=(t/Tt)**2}setSkyReflection(t,e){this.uSkyRefl.value.setRGB(t[0],t[1],t[2]),e&&this.uSkyTop.value.setRGB(e[0],e[1],e[2])}setSunDir(t,e,n){this.uSunDir.value.set(t,e,n)}setAtlas(t){this.opaqueMat.map=t,this.cutoutMat.map=t,this.opaqueMat.needsUpdate=!0,this.cutoutMat.needsUpdate=!0}animateWater(t){this.uTime.value+=t,this.waterAnimT+=t;const e=.09;for(;this.waterAnimT>=e;){this.waterAnimT-=e,this.waterFrame=(this.waterFrame+1)%this.waterFrames.length;const n=this.waterFrames[this.waterFrame];n.image&&(this.waterTex.image=n.image,this.waterTex.needsUpdate=!0)}}key(t,e){return`${t},${e}`}dispose(){var t;for(const e of[...this.meshes.keys()])this.unload(e);for(const e of this.meshWorkers)e.terminate();this.meshWorkers.length=0,this.opaqueMat.dispose(),this.cutoutMat.dispose(),this.waterMat.dispose(),this.torchMat.dispose(),this.waterTex.dispose(),(t=this.leafDepthMat)==null||t.dispose(),this.scene.remove(this.sun),this.scene.remove(this.sun.target)}buildGeo(t){const e=new We;return e.setAttribute("position",new pe(t.positions,3)),t.normals&&e.setAttribute("normal",new pe(t.normals,3)),e.setAttribute("uv",new pe(t.uvs,2)),e.setAttribute("color",new pe(t.colors,3)),t.light&&t.light.length&&e.setAttribute("aLight",new pe(t.light,2)),t.top&&t.top.length&&e.setAttribute("aTop",new pe(t.top,1)),t.sway&&t.sway.length&&e.setAttribute("aSway",new pe(t.sway,1)),e.setIndex(new pe(t.indices,1)),e}unload(t){this.editKeys.delete(t),this.meshPendingSince.delete(t),this.meshFails.delete(t);const e=this.meshes.get(t);if(e){for(const n of[e.opaque,e.cutout,e.water,e.torch])n&&(this.scene.remove(n),n.geometry.dispose());this.meshes.delete(t)}}addMesh(t,e,n,s){if(t.indices.length===0)return null;const r=new qt(this.buildGeo(t),e);return r.position.set(n*Tt,0,s*Tt),this.scene.add(r),r}flushMesh(t){for(let e=0;e<8&&this.priorityQueue.length>0;e++){const n=this.priorityQueue.shift();n&&this.world.peek(n.cx,n.cz)&&this.applyMesh(n.cx,n.cz,n.mesh)}for(let e=0;e<t&&this.meshQueue.length>0;e++){const n=this.meshQueue.shift();n&&this.world.peek(n.cx,n.cz)&&this.applyMesh(n.cx,n.cz,n.mesh)}}meshBusy(){return this.meshQueue.length>0||this.priorityQueue.length>0||this.meshPending.size>0}meshQueueLen(){return this.meshQueue.length+this.priorityQueue.length}pipelineStats(){let t=0;for(const e of this.meshes.values())[e.opaque,e.cutout,e.water,e.torch].some(n=>n&&n.visible)&&t++;return{meshed:this.meshes.size,visible:t,pending:this.meshPending.size,queued:this.meshQueueLen()}}applyMesh(t,e,n){this.unload(this.key(t,e));const s=this.addMesh(n.opaque,this.opaqueMat,t,e)??new qt,r=this.addMesh(n.cutout,this.cutoutMat,t,e),o=this.addMesh(n.water,this.waterMat,t,e),a=this.addMesh(n.torch,this.torchMat,t,e);s.castShadow=!0,s.receiveShadow=!0,r&&(r.castShadow=!0,r.receiveShadow=!0,this.leafDepthMat&&(r.customDepthMaterial=this.leafDepthMat)),this.meshes.set(this.key(t,e),{opaque:s,cutout:r,water:o,torch:a})}rebuildSync(t,e){const n=this.key(t,e);this.meshPending.delete(n),this.meshPendingSince.delete(n);const s=this.meshQueue.findIndex(a=>a.cx===t&&a.cz===e);s>=0&&this.meshQueue.splice(s,1);const r=this.priorityQueue.findIndex(a=>a.cx===t&&a.cz===e);r>=0&&this.priorityQueue.splice(r,1),this.applyMesh(t,e,Kx(this.world,t,e));const o=this.world.peek(t,e);o&&(o.dirty=!1)}collectNeighbors(t,e){const n=[],s=[];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){const a=this.world.peek(t+r,e+o);if(!a)return null;n.push(a.blocks.slice()),s.push(a.fluid.slice())}return{blocks:n,fluid:s}}rebuild(t,e){if(this.meshWorkers.length===0){this.rebuildSync(t,e);return}const n=this.key(t,e);if(this.meshPending.has(n)||(this.meshFails.get(n)??0)>=3)return;const s=this.collectNeighbors(t,e);if(!s)return;this.meshPending.add(n),this.meshPendingSince.set(n,uh());const r=[...s.blocks.map(a=>a.buffer),...s.fluid.map(a=>a.buffer)];this.meshWorkers[this.meshRr].postMessage({cx:t,cz:e,blocks:s.blocks,fluid:s.fluid},r),this.meshRr=(this.meshRr+1)%this.meshWorkers.length;const o=this.world.peek(t,e);o&&(o.dirty=!1)}retryStuckMeshes(t=8e3){const e=uh();for(const[n,s]of this.meshPendingSince)e-s>t&&(this.meshPending.delete(n),this.meshPendingSince.delete(n),console.warn(`[meshgen] 区块 ${n} 网格化 ${Math.round((e-s)/1e3)}s 未回(worker 丢消息?) → 重试`))}update(t,e,n,s=2,r=0,o=0){this.retryStuckMeshes(),this.world.retryStuckGen();for(const l of[...this.meshes.keys()]){const[c,h]=l.split(",").map(Number);(Math.abs(c-t)>n+1||Math.abs(h-e)>n+1)&&this.unload(l)}for(let l=-n-1;l<=n+1;l++)for(let c=-n-1;c<=n+1;c++)this.world.request(t+c,e+l);const a=[];for(let l=-n;l<=n;l++)for(let c=-n;c<=n;c++){if(dh(c,l,this.fogCullR2))continue;const h=t+c,u=e+l,d=this.world.peek(h,u);d&&(!this.meshes.has(this.key(h,u))||d.dirty)&&a.push({cx:h,cz:u,d:c*c+l*l,ahead:nM(c,l,r,o)})}a.sort((l,c)=>l.ahead===c.ahead?l.d-c.d:l.ahead?-1:1);for(let l=0;l<Math.min(s,a.length);l++)this.rebuild(a[l].cx,a[l].cz);for(const[l,c]of this.meshes){const[h,u]=l.split(",").map(Number),d=!dh(h-t,u-e,this.fogCullR2);for(const f of[c.opaque,c.cutout,c.water,c.torch])f&&(f.visible=d)}}cullToView(t,e,n,s){for(const[r,o]of this.meshes){const[a,l]=r.split(",").map(Number);if(!Jx(a*Tt+Tt/2,l*Tt+Tt/2,t,e,n,s))for(const c of[o.opaque,o.cutout,o.water,o.torch])c&&(c.visible=!1)}}remeshDirty(){var t;for(const e of[...this.meshes.keys()]){const[n,s]=e.split(",").map(Number);(t=this.world.peek(n,s))!=null&&t.dirty&&(this.editKeys.add(e),this.rebuild(n,s))}}}const Lr=10;class aM{constructor(t){b(this,"mesh");b(this,"tex");this.tex=new Gs().load("/mineworld/textures/crack.png"),this.tex.magFilter=ne,this.tex.minFilter=ne,this.tex.generateMipmaps=!1,this.tex.colorSpace=oe,this.tex.wrapS=Si,this.tex.repeat.set(1/Lr,1);const e=new ce({map:this.tex,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});this.mesh=new qt(new Ve(1.002,1.002,1.002),e),this.mesh.renderOrder=2,this.mesh.visible=!1,t.add(this.mesh)}show(t,e,n,s){const r=Math.max(0,Math.min(Lr-1,Math.floor(s*Lr)));this.tex.offset.x=r/Lr,this.mesh.position.set(t+.5,e+.5,n+.5),this.mesh.visible=!0}hide(){this.mesh.visible=!1}}const Zr=256,ud=257,dd=258,lM=259,cM=260,hM=261,uM=262,dM=263,fM=264,pM=265,mM=266,gM=267,_M=268,vM=269,xM=270,MM=271,SM=272,yM=273,fd=274,rl=275,pd=276,ol=277,md=278,al=279,gd=280,ll=281,_d=282,vd=283,xd=284,Md=285,Sd=286,yd=287,Ed=288,bd=289,Td=290,ts=291,Ds=292,wd=293,EM=294,bM=295;function Ue(i,t,e,n){return{name:i,maxStack:1,food:null,tool:{kind:t,tier:e,speed:t==="sword"?1.5:t==="hoe"?1:n,maxDurability:e===1?59:e===2?131:250}}}const Ti={[Zr]:{name:"apple",maxStack:64,food:{nutrition:4,saturationModifier:.3},tool:null},[EM]:{name:"flint_and_steel",maxStack:1,food:null,tool:null},[bM]:{name:"nether_quartz",maxStack:64,food:null,tool:null},[ud]:{name:"stick",maxStack:64,food:null,tool:null},[dd]:{name:"coal",maxStack:64,food:null,tool:null},[lM]:Ue("wooden_pickaxe","pickaxe",1,2),[cM]:Ue("wooden_axe","axe",1,2),[hM]:Ue("wooden_shovel","shovel",1,2),[uM]:Ue("wooden_sword","sword",1,2),[dM]:Ue("wooden_hoe","hoe",1,2),[fM]:Ue("stone_pickaxe","pickaxe",2,4),[pM]:Ue("stone_axe","axe",2,4),[mM]:Ue("stone_shovel","shovel",2,4),[gM]:Ue("stone_sword","sword",2,4),[_M]:Ue("stone_hoe","hoe",2,4),[vM]:Ue("iron_pickaxe","pickaxe",3,6),[xM]:Ue("iron_axe","axe",3,6),[MM]:Ue("iron_shovel","shovel",3,6),[SM]:Ue("iron_sword","sword",3,6),[yM]:Ue("iron_hoe","hoe",3,6),[fd]:{name:"iron_ingot",maxStack:64,food:null,tool:null},[rl]:{name:"raw_porkchop",maxStack:64,food:{nutrition:3,saturationModifier:.3},tool:null},[pd]:{name:"cooked_porkchop",maxStack:64,food:{nutrition:8,saturationModifier:.8},tool:null},[ol]:{name:"raw_beef",maxStack:64,food:{nutrition:3,saturationModifier:.3},tool:null},[md]:{name:"cooked_beef",maxStack:64,food:{nutrition:8,saturationModifier:.8},tool:null},[al]:{name:"raw_mutton",maxStack:64,food:{nutrition:2,saturationModifier:.3},tool:null},[gd]:{name:"cooked_mutton",maxStack:64,food:{nutrition:6,saturationModifier:.8},tool:null},[ll]:{name:"raw_chicken",maxStack:64,food:{nutrition:2,saturationModifier:.3},tool:null},[_d]:{name:"cooked_chicken",maxStack:64,food:{nutrition:6,saturationModifier:.6},tool:null},[vd]:{name:"leather",maxStack:64,food:null,tool:null},[xd]:{name:"wool",maxStack:64,food:null,tool:null},[Md]:{name:"feather",maxStack:64,food:null,tool:null},[Sd]:{name:"egg",maxStack:16,food:null,tool:null},[yd]:{name:"rotten_flesh",maxStack:64,food:{nutrition:4,saturationModifier:.1},tool:null},[Ed]:{name:"bone",maxStack:64,food:null,tool:null},[bd]:{name:"flint",maxStack:64,food:null,tool:null},[Td]:{name:"string",maxStack:64,food:null,tool:null},[ts]:{name:"arrow",maxStack:64,food:null,tool:null},[Ds]:{name:"bow",maxStack:1,food:null,tool:null},[wd]:{name:"gunpowder",maxStack:64,food:null,tool:null}},TM=Object.keys(Ti).map(Number);function mh(i){return i in Ti}function gh(i){var t;return((t=Ti[i])==null?void 0:t.food)!=null}function wM(i){var t;return((t=Ti[i])==null?void 0:t.food)??null}function AM(i){var t;return((t=Ti[i])==null?void 0:t.name)??null}function jr(i){var t;return((t=Ti[i])==null?void 0:t.maxStack)??64}function Us(i){var t;return((t=Ti[i])==null?void 0:t.tool)??null}const _h={1:"stone",2:"dirt",3:"grass",4:"cobblestone",5:"sand",6:"oak_log",7:"oak_planks",8:"coal_ore",10:"oak_leaves",11:"crafting_table",12:"iron_ore",13:"furnace",14:"torch",15:"gravel",26:"sandstone",32:"coal_block",33:"iron_block",34:"quartz_block",[Zr]:"apple",257:"stick",258:"coal",259:"wooden_pickaxe",260:"wooden_axe",261:"wooden_shovel",262:"wooden_sword",263:"wooden_hoe",264:"stone_pickaxe",265:"stone_axe",266:"stone_shovel",267:"stone_sword",268:"stone_hoe",269:"iron_pickaxe",270:"iron_axe",271:"iron_shovel",272:"iron_sword",273:"iron_hoe",274:"iron_ingot",275:"raw_porkchop",276:"cooked_porkchop",277:"raw_beef",278:"cooked_beef",279:"raw_mutton",280:"cooked_mutton",281:"raw_chicken",282:"cooked_chicken",283:"leather",284:"wool",285:"feather",286:"egg",287:"rotten_flesh",288:"bone",289:"flint",290:"string",291:"arrow",292:"bow"},CM={1:"石头",2:"泥土",3:"草方块",4:"圆石",5:"沙子",6:"原木",7:"木板",8:"煤矿",10:"树叶",11:"工作台",12:"铁矿",13:"熔炉",14:"火把",15:"砂砾",26:"沙石",32:"煤炭块",33:"铁块",34:"石英块",256:"苹果",257:"木棍",258:"煤炭",259:"木镐",260:"木斧",261:"木锹",262:"木剑",263:"木锄",264:"石镐",265:"石斧",266:"石锹",267:"石剑",268:"石锄",269:"铁镐",270:"铁斧",271:"铁锹",272:"铁剑",273:"铁锄",274:"铁锭",275:"生猪排",276:"熟猪排",277:"生牛肉",278:"牛排",279:"生羊肉",280:"熟羊肉",281:"生鸡肉",282:"熟鸡肉",283:"皮革",284:"羊毛",285:"羽毛",286:"鸡蛋",287:"腐肉",288:"骨头",289:"燧石",290:"线",291:"箭",292:"弓"},ps=i=>_h[i]?Ws(`textures/icons/${_h[i]}.png`):null,Ad=i=>CM[i]??`#${i}`,es=.25,RM=22,vh=es/2;function bn(i,t,e,n,s=Math.random,r=1,o){return{id:i,count:r,dur:o,x:t+.5,y:e+.5,z:n+.5,vx:(s()-.5)*2,vy:2.5,vz:(s()-.5)*2,age:0}}function PM(i,t,e=.75){const n=e*e;for(let s=0;s<i.length;s++){const r=i[s],o=t(r.id);if(!(r.count>=o))for(let a=i.length-1;a>s;a--){const l=i[a];if(l.id!==r.id||r.dur!==void 0||l.dur!==void 0)continue;const c=r.x-l.x,h=r.y-l.y,u=r.z-l.z;if(c*c+h*h+u*u>n)continue;const d=Math.min(o-r.count,l.count);if(!(d<=0)&&(r.count+=d,l.count-=d,l.age<r.age&&(r.age=l.age),l.count<=0&&i.splice(a,1),r.count>=o))break}}}function LM(i,t,e){i.age+=e,i.vy-=RM*e;const n=i.x+i.vx*e,s=i.z+i.vz*e;let r=i.y+i.vy*e;const o=r-vh;return i.vy<=0&&t.isSolid(Math.floor(n),Math.floor(o),Math.floor(s))&&(r=Math.floor(o)+1+vh,i.vy=0,i.vx*=.6,i.vz*=.6),i.x=n,i.y=r,i.z=s,i}function DM(i,t,e,n){if(i.age<.3)return!1;const s=i.x-t,r=i.y-e,o=i.z-n;return s*s+r*r+o*o<1.4*1.4}const As=4,xh=9,UM=16,Dr=.5/(UM*As);function IM(i){const t=new Ve(es,es,es),e=Ke[i].faces,n=t.attributes.uv;for(let s=0;s<6;s++){const r=e[s],o=r%As,a=Math.floor(r/As),l=o/As+Dr,c=(o+1)/As-Dr,h=1-(a+1)/xh+Dr,u=1-a/xh-Dr,d=s*4;n.setXY(d+0,l,u),n.setXY(d+1,c,u),n.setXY(d+2,l,h),n.setXY(d+3,c,h)}return n.needsUpdate=!0,t}class NM{constructor(t,e){b(this,"meshes",new Map);b(this,"geoCache",new Map);b(this,"mat");b(this,"itemMats",new Map);this.scene=t,this.mat=new ce({map:e})}setAtlas(t){this.mat.map=t,this.mat.needsUpdate=!0}itemMat(t){let e=this.itemMats.get(t);if(!e){const n=new Gs().load(ps(t)??Ws("textures/icons/apple.png"));n.magFilter=ne,n.minFilter=ne,n.colorSpace=oe,e=new ce({map:n,transparent:!0,alphaTest:.5,side:Fe}),this.itemMats.set(t,e)}return e}geo(t){let e=this.geoCache.get(t);return e||(e=mh(t)?new Te(es,es):IM(t),this.geoCache.set(t,e)),e}sync(t){const e=new Set(t);for(const[n,s]of this.meshes)e.has(n)||(this.scene.remove(s),this.meshes.delete(n));for(const n of t){let s=this.meshes.get(n);s||(s=new qt(this.geo(n.id),mh(n.id)?this.itemMat(n.id):this.mat),this.scene.add(s),this.meshes.set(n,s));const r=.1+Math.sin(n.age*3)*.06;s.position.set(n.x,n.y+r,n.z),s.rotation.y=n.age*1.8}}clear(){for(const[,t]of this.meshes)this.scene.remove(t);this.meshes.clear()}}function FM(i){return i===null||i<=0?"none":Ke[i]?"block":ps(i)?"sprite":"none"}const ua=.8;function OM(i){const t=Math.PI/180,e=Math.sin(Math.sqrt(Math.max(0,i))*Math.PI),n=Math.sin(i*i*Math.PI);return{tx:-.4*e*ua,ty:.2*Math.sin(Math.sqrt(Math.max(0,i))*Math.PI*2)*ua,tz:-.2*Math.sin(i*Math.PI)*ua,ry1:(45+n*-20)*t,rz:e*-20*t,rx:e*-80*t,ry2:-45*t}}const Cs=4,Mh=9,kM=16,Ur=.01/(kM*Cs),ns=[.6,.6,1,.5,.8,.8],zM=.3,BM=new H(1,0,0),HM=new H(0,1,0);function GM(i,t,e,n){const s=new Ve(i,t,e),r=new It(n),o=[];for(let a=0;a<6;a++)for(let l=0;l<4;l++)o.push(r.r*ns[a],r.g*ns[a],r.b*ns[a]);return s.setAttribute("color",new Oe(o,3)),s}function VM(i,t){const e=new Ve(t,t,t),n=Ke[i].faces,s=e.attributes.uv,r=[];for(let o=0;o<6;o++){const a=n[o],l=a%Cs,c=Math.floor(a/Cs),h=l/Cs+Ur,u=(l+1)/Cs-Ur,d=1-(c+1)/Mh+Ur,f=1-c/Mh-Ur,g=o*4;s.setXY(g+0,h,f),s.setXY(g+1,u,f),s.setXY(g+2,h,d),s.setXY(g+3,u,d);for(let _=0;_<4;_++)r.push(ns[o],ns[o],ns[o])}return s.needsUpdate=!0,e.setAttribute("color",new Oe(r,3)),e}class WM{constructor(t){b(this,"scene",new Jn);b(this,"camera",new He(70,1,.01,10));b(this,"atlas");b(this,"root",new Kn);b(this,"arm");b(this,"item",null);b(this,"itemId",null);b(this,"spriteTex",new Map);b(this,"swingT",0);b(this,"wantSwing",!1);b(this,"bobPhase",0);b(this,"eating",!1);b(this,"eatT",0);b(this,"hurtT",0);this.atlas=t,this.arm=new qt(GM(.14,.5,.14,15249530),new ce({vertexColors:!0})),this.arm.position.set(0,-.22,0),this.root.add(this.arm),this.root.position.set(.5,-.45,-.7),this.root.rotation.set(.2,-.5,.45),this.scene.add(this.root)}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}itemTexture(t){const e=this.spriteTex.get(t);if(e)return e;const n=ps(t);if(!n)return null;const s=new Gs().load(n);return s.magFilter=ne,s.minFilter=ne,s.generateMipmaps=!1,s.colorSpace=oe,this.spriteTex.set(t,s),s}setHeld(t){if(t===this.itemId)return;this.itemId=t,this.item&&(this.root.remove(this.item),this.item.geometry.dispose(),this.item=null);const e=FM(t);if(e==="block"&&t!==null)this.item=new qt(VM(t,.32),new ce({map:this.atlas,vertexColors:!0})),this.item.position.set(-.02,.16,.04),this.item.rotation.set(-.1,.6,.1),this.root.add(this.item);else if(e==="sprite"&&t!==null){const n=this.itemTexture(t);n&&(this.item=new qt(new Te(.34,.34),new ce({map:n,transparent:!0,alphaTest:.5,side:Fe})),this.item.position.set(.04,.2,.04),this.item.rotation.set(0,-.35,.35),this.root.add(this.item))}}swing(){this.wantSwing=!0}hurtShake(){this.hurtT=1}setAtlas(t){this.atlas=t;const e=this.itemId;this.itemId=null,this.setHeld(e)}setEating(t){this.eating=t,t||(this.eatT=0)}update(t,e){this.wantSwing&&this.swingT===0&&(this.swingT=1e-4),this.swingT>0&&(this.swingT+=t/zM,this.swingT>=1&&(this.swingT=this.wantSwing?1e-4:0)),this.wantSwing=!1,this.bobPhase+=t*e*7;const n=Math.cos(this.bobPhase)*.012*Math.min(1,e),s=Math.abs(Math.sin(this.bobPhase))*.012*Math.min(1,e),r=OM(this.swingT);if(this.root.position.set(.42+n+r.tx,-.28+s+r.ty,-.72+r.tz),this.root.rotation.set(.1,-.5,.4),this.root.rotateOnWorldAxis(BM,r.rx),this.root.rotateOnWorldAxis(HM,r.rz),this.eating){this.eatT+=t;const o=Math.sin(this.eatT*30);this.root.position.x+=-.18+o*.015,this.root.position.y+=.16+o*.02,this.root.position.z+=.18,this.root.rotateX(.4+o*.12),this.root.rotateZ(-.25)}if(this.hurtT>0){this.hurtT=Math.max(0,this.hurtT-t*4);const o=this.hurtT*this.hurtT,a=Math.sin(this.hurtT*45);this.root.position.x+=a*.05*o,this.root.position.y+=-.06*o,this.root.rotateZ(a*.35*o)}}}const Sh=.6,Qr=.6,bi=1.8,Gn=1.62,XM=1.25,qM=1.1,YM=.3,$M=.2,Jr=.08,to=.98,Fs=.42,yh=4.317/20,KM=5.612/20,ZM=.42,jM=.84,Eh=.42,Ir=Qr/2;function eo(i,t,e=bi){const s=Math.floor(i.x-Ir+1e-6),r=Math.ceil(i.x+Ir-1e-6)-1,o=Math.floor(i.y+1e-6),a=Math.ceil(i.y+e-1e-6)-1,l=Math.floor(i.z-Ir+1e-6),c=Math.ceil(i.z+Ir-1e-6)-1;for(let h=o;h<=a;h++)for(let u=s;u<=r;u++)for(let d=l;d<=c;d++)if(t.isSolid(u,h,d))return!0;return!1}function Wi(i,t,e,n,s=bi){if(e===0)return!1;const r=Math.sign(e),o=.2;let a=Math.abs(e);for(;a>1e-9;){const l=Math.min(a,o)*r;if(a-=Math.abs(l),i[t]+=l,eo(i,n,s)){i[t]-=l;let c=l/2;for(let h=0;h<24&&Math.abs(c)>1e-5;h++)i[t]+=c,eo(i,n,s)&&(i[t]-=c),c/=2;return!0}}return!1}function bh(i){const t=Math.cos(i.yaw),e=Math.sin(i.yaw);let n=i.forward*t-i.right*e,s=i.forward*e+i.right*t;const r=Math.hypot(n,s);return r>1e-9?(n/=r,s/=r):(n=0,s=0),{x:n,z:s}}function bs(i,t,e=bi){return eo(i,t,e)?!1:eo({x:i.x,y:i.y-.06,z:i.z},t,e)}function QM(i,t,e){var k,C;const n={...i.pos},s={...i.vel};if(t.fly){const w=bh(t),N=t.sprint?jM:ZM;return s.x=w.x*N,s.z=w.z*N,s.y=(t.flyUp?Eh:0)-(t.flyDown?Eh:0),Wi(n,"y",s.y,e)&&(s.y=0),Wi(n,"x",s.x,e)&&(s.x=0),Wi(n,"z",s.z,e)&&(s.z=0),{pos:n,vel:s,onGround:bs(n,e),kbx:0,kbz:0}}const r=t.crouch===!0,o=r?XM:bi,a=bs(n,e,o),l=((k=e.isWater)==null?void 0:k.call(e,Math.floor(n.x),Math.floor(n.y+.1),Math.floor(n.z)))??!1;let c=!1;t.jump&&(a||l)&&(s.y=l?.5:Fs,c=!0);const h=bh(t);let u=l?yh*.7:t.sprint&&!r?KM:yh;r&&(u*=YM),t.slow&&(u*=$M);const d=i.kbx??0,f=i.kbz??0;if(Math.hypot(h.x,h.z)>1e-9||!a||l)s.x=h.x*u+d,s.z=h.z*u+f;else{const w=Math.floor(n.x),N=Math.floor(n.y-.1),E=Math.floor(n.z),y=((C=e.getBlock)==null?void 0:C.call(e,w,N,E))??0,U=gx(y);s.x=s.x*U+d,s.z=s.z*U+f}Wi(n,"y",s.y,e,o)&&(s.y=0);const _=r&&a&&s.y<=0,p=n.x;Wi(n,"x",s.x,e,o)&&(s.x=0),_&&!bs(n,e,o)&&(n.x=p,s.x=0);const m=n.z;Wi(n,"z",s.z,e,o)&&(s.z=0),_&&!bs(n,e,o)&&(n.z=m,s.z=0);const M=bs(n,e,o);c?s.y=(s.y-Jr)*to:l?t.swimUp?s.y=.16:s.y=Math.max(s.y*.8-.02,-.15):M?s.y=0:s.y=(s.y-Jr)*to;const v=s.x===0?0:d*Sh,T=s.z===0?0:f*Sh;return{pos:n,vel:s,onGround:M,kbx:Math.abs(v)<.005?0:v,kbz:Math.abs(T)<.005?0:T}}const Cd=.05,da=.99,JM=.25;function Th(i,t,e,n,s,r,o,a,l){const c=Math.hypot(n,s,r)||1;return{x:i,y:t,z:e,vx:n/c*o,vy:s/c*o,vz:r/c*o,age:0,stuck:!1,fromPlayer:a,damage:l}}function tS(i,t){if(i.age++,i.stuck)return i;i.vy-=Cd,i.vx*=da,i.vy*=da,i.vz*=da;const e=Math.hypot(i.vx,i.vy,i.vz),n=Math.max(1,Math.ceil(e/JM)),s=i.vx/n,r=i.vy/n,o=i.vz/n;for(let a=0;a<n;a++){const l=i.x+s,c=i.y+r,h=i.z+o;if(t.isSolid(Math.floor(l),Math.floor(c),Math.floor(h)))return i.stuck=!0,i.vx=i.vy=i.vz=0,i;i.x=l,i.y=c,i.z=h}return i}const eS=new H(0,0,1);class nS{constructor(t){b(this,"meshes",new Map);b(this,"geoShaft",new Ve(.05,.05,.5));b(this,"geoHead",new Ve(.09,.09,.14));b(this,"geoFletch",new Ve(.16,.02,.12));b(this,"matShaft",new ce({color:7031339}));b(this,"matHead",new ce({color:10132130}));b(this,"matFletch",new ce({color:15263980}));b(this,"tmp",new H);this.scene=t}make(){const t=new Kn;t.add(new qt(this.geoShaft,this.matShaft));const e=new qt(this.geoHead,this.matHead);e.position.z=.3,t.add(e);const n=new qt(this.geoFletch,this.matFletch);n.position.z=-.22,t.add(n);const s=new qt(this.geoFletch,this.matFletch);return s.position.z=-.22,s.rotation.z=Math.PI/2,t.add(s),t}sync(t){const e=new Set(t);for(const[n,s]of this.meshes)e.has(n)||(this.scene.remove(s),this.meshes.delete(n));for(const n of t){let s=this.meshes.get(n);s||(s=this.make(),this.scene.add(s),this.meshes.set(n,s)),s.position.set(n.x,n.y,n.z);const r=Math.hypot(n.vx,n.vy,n.vz);r>1e-4&&(this.tmp.set(n.vx/r,n.vy/r,n.vz/r),s.quaternion.setFromUnitVectors(eS,this.tmp))}}clear(){for(const[,t]of this.meshes)this.scene.remove(t);this.meshes.clear()}}function no(i,t,e,n){const r=Math.floor(i.x-t+1e-6),o=Math.ceil(i.x+t-1e-6)-1,a=Math.floor(i.y+1e-6),l=Math.ceil(i.y+e-1e-6)-1,c=Math.floor(i.z-t+1e-6),h=Math.ceil(i.z+t-1e-6)-1;for(let u=a;u<=l;u++)for(let d=r;d<=o;d++)for(let f=c;f<=h;f++)if(n.isSolid(d,u,f))return!0;return!1}function fa(i,t,e,n,s,r){if(e===0)return!1;const o=Math.sign(e),a=.2;let l=Math.abs(e);for(;l>1e-9;){const c=Math.min(l,a)*o;if(l-=Math.abs(c),i[t]+=c,no(i,n,s,r)){i[t]-=c;let h=c/2;for(let u=0;u<24&&Math.abs(h)>1e-5;u++)i[t]+=h,no(i,n,s,r)&&(i[t]-=h),h/=2;return!0}}return!1}function iS(i,t,e,n){return no(i,t,e,n)?!1:no({x:i.x,y:i.y-.06,z:i.z},t,e,n)}function Rd(i,t,e,n,s){const r=t/2,o={...i},a={...n};return fa(o,"y",a.y,r,e,s)&&(a.y=0),fa(o,"x",a.x,r,e,s)&&(a.x=0),fa(o,"z",a.z,r,e,s)&&(a.z=0),{pos:o,vel:a,onGround:iS(o,r,e,s)}}const jn={pig:{hp:10,width:.9,height:.9,moveSpeed:.09,fallImmune:!1},cow:{hp:10,width:.9,height:1.4,moveSpeed:.08,fallImmune:!1},sheep:{hp:8,width:.9,height:1.3,moveSpeed:.08,fallImmune:!1},chicken:{hp:4,width:.4,height:.7,moveSpeed:.07,fallImmune:!0},zombie:{hp:20,width:.6,height:1.9,moveSpeed:.048,fallImmune:!1,hostile:!0,attack:3,sense:16},skeleton:{hp:20,width:.6,height:1.95,moveSpeed:.052,fallImmune:!1,hostile:!0,attack:2,sense:16,ranged:!0},creeper:{hp:20,width:.6,height:1.7,moveSpeed:.05,fallImmune:!1,hostile:!0,attack:22,sense:16,explosive:!0,sunImmune:!0},husk:{hp:20,width:.6,height:1.95,moveSpeed:.048,fallImmune:!1,hostile:!0,attack:3,sense:16,sunImmune:!0}},sS=i=>jn[i].hostile===!0,rS=1.8,oS=10,wh=.4,aS=.36,Ah=-.05,lS=.06,Ch=.85,cS=.12;function mo(i,t,e,n){return{kind:i,pos:{x:t,y:e,z:n},vel:{x:0,y:0,z:0},yaw:0,onGround:!1,health:jn[i].hp,hurtCooldown:0,ai:{state:"idle",timer:20,target:null},eggTimer:i==="chicken"?6e3:0,atkCd:0,fuse:0}}function Pd(i){return{...i,pos:{...i.pos},vel:{...i.vel},ai:{...i.ai,target:i.ai.target?{...i.ai.target}:null}}}function hS(i,t){return{x:i.x+(t()*2-1)*8,y:i.y,z:i.z+(t()*2-1)*8}}const pa=i=>20+Math.floor(i()*40);function uS(i,t,e){var f,g;const n=jn[i.kind],s=Pd(i),r=[];s.hurtCooldown>0&&s.hurtCooldown--,s.ai.timer--;let o=0,a=0,l=n.moveSpeed;if(s.ai.state==="idle")s.ai.timer<=0&&(s.ai.state="wander",s.ai.target=hS(s.pos,e),s.ai.timer=40+Math.floor(e()*60));else if(s.ai.state==="wander")if(!s.ai.target||s.ai.timer<=0)s.ai.state="idle",s.ai.target=null,s.ai.timer=pa(e);else{const _=s.ai.target.x-s.pos.x,p=s.ai.target.z-s.pos.z,m=Math.hypot(_,p);m<.7?(s.ai.state="idle",s.ai.target=null,s.ai.timer=pa(e)):(o=_/m,a=p/m)}else l=n.moveSpeed*rS,s.ai.timer<=0?(s.ai.state="idle",s.ai.target=null,s.ai.timer=pa(e)):(o=Math.cos(s.yaw),a=Math.sin(s.yaw));if((o!==0||a!==0)&&s.onGround){const _=.5+n.width/2,p=Math.floor(s.pos.x+o*_),m=Math.floor(s.pos.z+a*_),M=Math.floor(s.pos.y);!t.isSolid(p,M-1,m)&&!t.isSolid(p,M-2,m)&&(o=0,a=0,s.ai.target=null)}let c=!1;if(o!==0||a!==0){const _=Math.hypot(o,a)||1,p=Math.floor(s.pos.x+o/_*(n.width/2+.3)),m=Math.floor(s.pos.z+a/_*(n.width/2+.3)),M=Math.floor(s.pos.y);t.isSolid(p,M,m)&&!t.isSolid(p,M+1,m)&&(c=!0)}const h=c&&s.onGround;if(s.vel.x=o*l,s.vel.z=a*l,((f=t.isWater)==null?void 0:f.call(t,Math.floor(s.pos.x),Math.floor(s.pos.y),Math.floor(s.pos.z)))??!1){const _=((g=t.isWater)==null?void 0:g.call(t,Math.floor(s.pos.x),Math.floor(s.pos.y)+1,Math.floor(s.pos.z)))??!1;c?s.vel.y=Fs:s.vel.y=_?Math.min((s.vel.y+lS)*Ch,cS):Math.min(s.vel.y*Ch,0)}else s.vel.y=(s.vel.y-Jr)*to,h&&(s.vel.y=Fs),n.fallImmune&&s.vel.y<Ah&&(s.vel.y=Ah);const d=Rd(s.pos,n.width,n.height,s.vel,t);return s.pos=d.pos,s.vel=d.vel,s.onGround=d.onGround,s.onGround&&s.vel.y<0&&(s.vel.y=0),(Math.abs(s.vel.x)>1e-4||Math.abs(s.vel.z)>1e-4)&&(s.yaw=Math.atan2(s.vel.z,s.vel.x)),s.kind==="chicken"&&(s.eggTimer--,s.eggTimer<=0&&(r.push({kind:"layEgg",pos:{...s.pos}}),s.eggTimer=6e3+Math.floor(e()*6001))),{mob:s,events:r}}function Rh(i,t,e,n){const s=Pd(i),r=[];if(s.hurtCooldown>0)return{mob:s,events:r};s.health-=t,s.hurtCooldown=oS,r.push({kind:"hurt"});const o=Math.hypot(e.x,e.z)||1;return s.vel.x=e.x/o*wh,s.vel.z=e.z/o*wh,s.vel.y=aS,s.onGround=!1,s.yaw=Math.atan2(s.vel.z,s.vel.x),s.ai.state="panic",s.ai.target=null,s.ai.timer=30+Math.floor(n()*10),s.health<=0&&(r.push({kind:"drops",items:Ld(s.kind,n),pos:{...s.pos}}),r.push({kind:"death",pos:{...s.pos}})),{mob:s,events:r}}function Ld(i,t){switch(i){case"pig":return[{id:rl,count:1+Math.floor(t()*3)}];case"cow":{const e=[{id:ol,count:1+Math.floor(t()*3)}],n=Math.floor(t()*3);return n>0&&e.push({id:vd,count:n}),e}case"sheep":return[{id:xd,count:1},{id:al,count:1+Math.floor(t()*2)}];case"chicken":{const e=[{id:ll,count:1}],n=Math.floor(t()*3);return n>0&&e.push({id:Md,count:n}),e}case"zombie":case"husk":{const e=Math.floor(t()*3);return e>0?[{id:yd,count:e}]:[]}case"skeleton":{const e=[],n=Math.floor(t()*3);n>0&&e.push({id:Ed,count:n});const s=Math.floor(t()*3);s>0&&e.push({id:Td,count:s});const r=Math.floor(t()*2);return r>0&&e.push({id:ts,count:r}),e}case"creeper":{const e=Math.floor(t()*3);return e>0?[{id:wd,count:e}]:[]}}}const Dd=1.9,dS=1,fS=1.7,pS=18,mS=.18,gS=.6,_S=15,vS=5,xS=10,MS=35,SS=3,yS=30,ES=3,bS=.06,Ph=.85,TS=.12;function ma(i,t,e){const n=e.x-t.x,s=e.y-t.y,r=e.z-t.z,o=Math.ceil(Math.hypot(n,s,r)/.5);for(let a=1;a<o;a++){const l=a/o;if(i.isSolid(Math.floor(t.x+n*l),Math.floor(t.y+s*l),Math.floor(t.z+r*l)))return!1}return!0}function wS(i){return{...i,pos:{...i.pos},vel:{...i.vel},ai:{...i.ai,target:i.ai.target?{...i.ai.target}:null}}}function AS(i,t,e,n,s){var T,k;const r=jn[i.kind],o=wS(i),a=[];o.hurtCooldown>0&&(o.hurtCooldown-=dS),o.atkCd>0&&o.atkCd--;let l=0,c=0,h=r.moveSpeed;const u=r.sense??16;let d=1/0,f=null;if(n){const C=n.x-o.pos.x,w=n.z-o.pos.z;if(d=Math.hypot(C,w),d<=u&&d>.001){o.ai.state="chase",o.ai.target={...n};const N=C/d,E=w/d;r.ranged?(f=n,d<vS?(l=-N,c=-E):d>xS&&(l=N,c=E)):(l=N,c=E)}}if(l===0&&c===0)if(h=r.moveSpeed*gS,o.ai.timer--,o.ai.state==="chase")o.ai.state="idle",o.ai.target=null,o.ai.timer=20+Math.floor(e()*40);else if(o.ai.state==="wander"&&o.ai.target){const C=o.ai.target.x-o.pos.x,w=o.ai.target.z-o.pos.z,N=Math.hypot(C,w);N<.7||o.ai.timer<=0?(o.ai.state="idle",o.ai.target=null,o.ai.timer=20+Math.floor(e()*40)):(l=C/N,c=w/N)}else o.ai.timer<=0&&(o.ai.state="wander",o.ai.target={x:o.pos.x+(e()*2-1)*8,y:o.pos.y,z:o.pos.z+(e()*2-1)*8},o.ai.timer=40+Math.floor(e()*60));const g={x:o.pos.x,y:o.pos.y+r.height*.85,z:o.pos.z},_=n?{x:n.x,y:n.y+1,z:n.z}:null;if(r.ranged){if(_&&d<=_S&&o.atkCd<=0&&ma(t,g,_)){const C=d/Dd,w=.5*Cd*C*C*1.15,N=_.x-g.x,E=_.y+w-g.y,y=_.z-g.z,U=Math.hypot(N,E,y)||1;a.push({kind:"shootArrow",from:g,dir:{x:N/U,y:E/U,z:y/U},damage:r.attack??2}),o.atkCd=MS}}else if(r.explosive)if(_&&d<=SS&&ma(t,g,_)){if(o.fuse++,l=0,c=0,o.fuse>=yS)return a.push({kind:"explode",pos:{...o.pos},radius:ES,damage:r.attack??22}),a.push({kind:"death",pos:{...o.pos}}),{mob:o,events:a}}else o.fuse=0;else _&&d<=fS&&o.atkCd<=0&&ma(t,g,_)&&(a.push({kind:"attackPlayer",damage:r.attack??2}),o.atkCd=pS);if((l!==0||c!==0)&&o.onGround){const C=.5+r.width/2,w=Math.floor(o.pos.x+l*C),N=Math.floor(o.pos.z+c*C),E=Math.floor(o.pos.y);!t.isSolid(w,E-1,N)&&!t.isSolid(w,E-2,N)&&(l=0,c=0,o.ai.target=null)}let p=!1;if(l!==0||c!==0){const C=Math.hypot(l,c)||1,w=Math.floor(o.pos.x+l/C*(r.width/2+.3)),N=Math.floor(o.pos.z+c/C*(r.width/2+.3)),E=Math.floor(o.pos.y);t.isSolid(w,E,N)&&!t.isSolid(w,E+1,N)&&(p=!0)}const m=p&&o.onGround;if(o.vel.x=l*h,o.vel.z=c*h,((T=t.isWater)==null?void 0:T.call(t,Math.floor(o.pos.x),Math.floor(o.pos.y),Math.floor(o.pos.z)))??!1){const C=((k=t.isWater)==null?void 0:k.call(t,Math.floor(o.pos.x),Math.floor(o.pos.y)+1,Math.floor(o.pos.z)))??!1;p?o.vel.y=Fs:o.vel.y=C?Math.min((o.vel.y+bS)*Ph,TS):Math.min(o.vel.y*Ph,0)}else o.vel.y=(o.vel.y-Jr)*to,m&&(o.vel.y=Fs);const v=Rd(o.pos,r.width,r.height,o.vel,t);return o.pos=v.pos,o.vel=v.vel,o.onGround=v.onGround,o.onGround&&o.vel.y<0&&(o.vel.y=0),(Math.abs(o.vel.x)>1e-4||Math.abs(o.vel.z)>1e-4)&&(o.yaw=Math.atan2(o.vel.z,o.vel.x)),f&&(o.yaw=Math.atan2(f.z-o.pos.z,f.x-o.pos.x)),s&&!r.sunImmune&&(o.health-=mS),o.health<=0&&(a.push({kind:"drops",items:Ld(o.kind,e),pos:{...o.pos}}),a.push({kind:"death",pos:{...o.pos}})),{mob:o,events:a}}const CS=14;function RS(i,t){return t<.4?i==="desert"?"husk":"zombie":t<.75?"skeleton":"creeper"}function PS(i,t,e,n){return!(i.getBlock(t,e-1,n)!==$u||Pe(i.getBlock(t,e,n))||Pe(i.getBlock(t,e+1,n)))}function Lh(i,t,e,n,s,r,o=24,a=44,l=null,c=Math.PI){for(let h=0;h<12;h++){const u=l===null?n()*Math.PI*2:l+(n()*2-1)*c,d=o+n()*(a-o),f=Math.floor(t+Math.cos(u)*d),g=Math.floor(e+Math.sin(u)*d),_=r(f,g);if(s.getBlock(f,_,g)===$u)return US(i,f+.5,_+1,g+.5,n,s)}return[]}function Wa(i,t,e,n){return!(!Pe(i.getBlock(t,e-1,n))||Pe(i.getBlock(t,e,n))||Pe(i.getBlock(t,e+1,n)))}function Ud(i,t,e,n){const s=CS-1;for(let r=-s;r<=s;r++){const o=s-Math.abs(r);for(let a=-o;a<=o;a++){const l=o-Math.abs(a);for(let c=-l;c<=l;c++)if(i.getBlock(t+c,e+r,n+a)===Ku)return!1}}return!0}function LS(i,t,e,n,s,r,o=16,a=32){for(let l=0;l<14;l++){const c=n()*Math.PI*2,h=o+n()*(a-o),u=Math.floor(t+Math.cos(c)*h),d=Math.floor(e+Math.sin(c)*h),f=r(u,d);if(!Ud(s,u,f+1,d))continue;const g=[],_=1+Math.floor(n()*3);for(let p=0;p<_;p++){const m=u+Math.floor((n()*2-1)*2),M=d+Math.floor((n()*2-1)*2),v=r(m,M);Wa(s,m,v+1,M)&&g.push(mo(i,m+.5,v+1,M+.5))}if(g.length)return g}return[]}function DS(i,t,e,n,s,r,o,a=5,l=24){for(let h=0;h<24;h++){const u=s()*Math.PI*2,d=a+s()*(l-a),f=Math.floor(t+Math.cos(u)*d),g=Math.floor(n+Math.sin(u)*d),_=Math.min(Math.floor(e)+8,o(f,g)-5),p=Math.max(2,Math.floor(e)-14);for(let m=_;m>=p;m--){if(!Wa(r,f,m,g)||!Ud(r,f,m,g))continue;const M=[],v=1+Math.floor(s()*2);for(let T=0;T<v;T++){const k=f+Math.floor((s()*2-1)*2),C=g+Math.floor((s()*2-1)*2);for(let w=1;w>=-1;w--){const N=m+w;if(N<o(k,C)-5&&Wa(r,k,N,C)){M.push(mo(i,k+.5,N,C+.5));break}}}if(M.length)return M}}return[]}function US(i,t,e,n,s,r){const o=[];for(let a=0;a<16&&o.length<4;a++){const l=Math.floor(t)+Math.floor((s()*2-1)*4),c=Math.floor(n)+Math.floor((s()*2-1)*4);for(let h=3;h>=-3;h--){const u=Math.floor(e)+h;if(PS(r,l,u,c)){o.push(mo(i,l+.5,u,c+.5));break}}}return o}function IS(i){const t={kind:i.kind,x:i.pos.x,y:i.pos.y,z:i.pos.z,yaw:i.yaw,health:i.health};return i.kind==="chicken"&&(t.egg=i.eggTimer),t}function NS(i){const t=mo(i.kind,i.x,i.y,i.z);return t.yaw=i.yaw,t.health=i.health,i.egg!==void 0&&(t.eggTimer=i.egg),t}function FS(i,t,e){if(e)return!1;const n=Math.floor(i.pos.x),s=Math.floor(i.pos.z),r=Math.floor(i.pos.y+jn[i.kind].height);for(let o=Math.floor(i.pos.y);o<=r;o++)if(ln(t.getBlock(n,o,s)))return!1;for(let o=r+1;o<me;o++){const a=t.getBlock(n,o,s);if(Pe(a)||ln(a))return!1}return!0}const Dh=new Map;function Je(i){let t=i%2147483647;return t<=0&&(t+=2147483646),()=>(t=t*16807%2147483647)/2147483647}function Id(i,t){let e=Dh.get(i);if(e)return e;const n=16,s=document.createElement("canvas");s.width=s.height=n;const r=s.getContext("2d");return r&&t(r,n),e=new ei(s),e.magFilter=ne,e.minFilter=ne,e.colorSpace=oe,Dh.set(i,e),e}function OS(i,t,e){const n=(s,r,o,a=1,l=1)=>{t.fillStyle=s,t.fillRect(r,o,a,l)};if(i==="pig"){n("#e7a39d",0,0,e,e);const s=Je(11);for(let r=0;r<14;r++)n(s()>.5?"#dd9890":"#efb0aa",Math.floor(s()*e),Math.floor(s()*e));n("#d98c8c",0,e-2,e,2)}else if(i==="cow"){n("#5b4636",0,0,e,e),t.fillStyle="#e7ddcd";for(const[r,o,a,l]of[[2,2,5,4],[9,7,6,5],[3,10,4,4],[12,1,3,4],[7,4,2,2]])t.fillRect(r,o,a,l);const s=Je(23);for(let r=0;r<6;r++)n("#4a3a2c",Math.floor(s()*e),Math.floor(s()*e))}else if(i==="sheep"){n("#ece9e1",0,0,e,e);const s=Je(31);for(let r=0;r<30;r++)n(s()>.55?"#dcd8cc":"#f7f5ef",Math.floor(s()*e),Math.floor(s()*e),2,2)}else if(i==="zombie"){n("#2f6a6a",0,0,e,e);const s=Je(51);for(let r=0;r<12;r++)n(s()>.5?"#234e4e":"#356f6f",Math.floor(s()*e),Math.floor(s()*e),1+Math.floor(s()*2),1+Math.floor(s()*2));n("#5a8f4a",4,9,3,3),n("#4f7e42",5,10,1,1);for(let r=0;r<e;r++)Je(90+r)()>.45&&n("#264f4f",r,e-1,1,1)}else if(i==="skeleton"){n("#d8d8cc",0,0,e,e),n("#c6c6b8",7,1,2,e-2);for(const s of[3,6,9,12])n("#9c9c8e",1,s,6,1),n("#9c9c8e",9,s,6,1),n("#84847a",1,s+1,6,1),n("#84847a",9,s+1,6,1)}else if(i==="husk"){n("#c2b280",0,0,e,e);const s=Je(57);for(let r=0;r<12;r++)n(s()>.5?"#a89660":"#d4c898",Math.floor(s()*e),Math.floor(s()*e),1+Math.floor(s()*2),1+Math.floor(s()*2));n("#8b7340",4,9,3,3),n("#7a6535",5,10,1,1);for(let r=0;r<e;r++)Je(95+r)()>.45&&n("#9b8050",r,e-1,1,1)}else if(i==="creeper"){n("#5fa044",0,0,e,e);const s=Je(81);for(let r=0;r<22;r++)n(s()>.5?"#4d8a36":"#6fb050",Math.floor(s()*e),Math.floor(s()*e),1,1+Math.floor(s()*2))}else{n("#f1f1f1",0,0,e,e);const s=Je(41);for(let r=0;r<10;r++)n("#e0e0e0",Math.floor(s()*e),Math.floor(s()*e),1,2);n("#dadada",0,e-2,e,2)}}function kS(i,t,e){const n=(s,r,o,a=1,l=1)=>{t.fillStyle=s,t.fillRect(r,o,a,l)};if(i==="zombie"){n("#5a8f4a",0,0,e,e);const s=Je(61);for(let r=0;r<18;r++)n(s()>.5?"#4c7a3e":"#6aa055",Math.floor(s()*e),Math.floor(s()*e));n("#3f6a34",0,e-2,e,2)}else if(i==="husk"){n("#b8a060",0,0,e,e);const s=Je(67);for(let r=0;r<18;r++)n(s()>.5?"#9a8448":"#ceb878",Math.floor(s()*e),Math.floor(s()*e));n("#7a6535",0,e-2,e,2)}else{n("#dcdcd0",0,0,e,e);const s=Je(71);for(let r=0;r<9;r++)n("#bdbdb0",Math.floor(s()*e),Math.floor(s()*e),1,1+Math.floor(s()*2))}}function zS(i){return Id("b-"+i,(t,e)=>OS(i,t,e))}function ga(i){return i!=="zombie"&&i!=="skeleton"&&i!=="husk"?null:Id("h-"+i,(t,e)=>kS(i,t,e))}function BS(i,t=30){if(i<=0)return{whiteness:0,swell:1};const e=Math.min(1,i/t+.3*Math.abs(Math.sin(i*.7)));return{whiteness:e,swell:1+.5*e}}const HS=[.8,.8,1,.42,.8,.8],ze=1315860,GS=3.4;function VS(i,t,e,n){const s=new Ve(i,t,e),r=new It(n),o=[];for(let a=0;a<6;a++){const l=HS[a];for(let c=0;c<4;c++)o.push(r.r*l,r.g*l,r.b*l)}return s.setAttribute("color",new Oe(o,3)),s}function Is(i,t,e,n,s,r,o,a,l){const c=new qt(VS(e,n,s,r),t);return c.position.set(o,a,l),i.add(c),c}function Vn(i,t,e,n,s,r,o,a,l){const c=new Kn;c.position.set(s,o,r),Is(c,t,a,o,a,n,0,-o/2,0),l!==void 0&&Is(c,t,a+.02,.06,a+.02,l,0,-o+.03,0),i.add(c),e.push(c)}function WS(i){const t=new Kn,e=[],n=new ce({vertexColors:!0}),s=new ce({map:zS(i),vertexColors:!0}),r=[n,s],o=(_,p,m,M,v,T,k)=>Is(t,n,_,p,m,M,v,T,k),a=(_,p,m,M,v,T)=>Is(t,s,_,p,m,16777215,M,v,T),l=(_,p,m,M,v,T,k)=>{const C=new ce({map:_,vertexColors:!0});return r.push(C),Is(t,C,p,m,M,16777215,v,T,k)};let c,h;if(i==="pig"){a(.9,.5,.6,0,.26+.25,0),c=o(.42,.44,.5,15378080,.55,.26+.28,0),o(.16,.16,.3,14257292,.78,.26+.2,0),o(.05,.09,.08,ze,.77,.26+.36,.14),o(.05,.09,.08,ze,.77,.26+.36,-.14),o(.14,.12,.04,14257292,.5,.26+.52,.2),o(.14,.12,.04,14257292,.5,.26+.52,-.2),h=o(.1,.1,.1,14257292,-.46,.26+.36,0);for(const[M,v]of[[.3,.2],[.3,-.2],[-.32,.2],[-.32,-.2]])Vn(t,n,e,14257292,M,v,.26,.16)}else if(i==="cow"){a(1,.6,.62,0,.52+.3,0),c=o(.42,.46,.5,5192493,.6,.52+.38,0),o(.3,.28,.52,15195597,.72,.52+.3,0),o(.16,.18,.42,7297605,.84,.52+.28,0),o(.05,.1,.09,ze,.82,.52+.46,.16),o(.05,.1,.09,ze,.82,.52+.46,-.16),o(.1,.13,.1,14471352,.6,.52+.66,.2),o(.1,.13,.1,14471352,.6,.52+.66,-.2),o(.16,.1,.34,15709892,-.18,.52-.02,0),h=o(.1,.12,.1,5192493,-.5,.52+.4,0);for(const[v,T]of[[.34,.21],[.34,-.21],[-.34,.21],[-.34,-.21]])Vn(t,n,e,5192493,v,T,.52,.18,15195597)}else if(i==="sheep"){a(.9,.66,.74,0,.46+.34,0),o(.5,.34,.42,15526627,.4,.46+.6,0),c=o(.28,.36,.34,4669498,.56,.46+.36,0),o(.04,.08,.07,ze,.71,.46+.4,.11),o(.04,.08,.07,ze,.71,.46+.4,-.11),o(.1,.1,.04,4669498,.52,.46+.56,.18),o(.1,.1,.04,4669498,.52,.46+.56,-.18);for(const[M,v]of[[.28,.22],[.28,-.22],[-.3,.22],[-.3,-.22]])Vn(t,n,e,4669498,M,v,.46,.15)}else if(i==="zombie"){a(.5,.66,.28,0,.82+.33,0),c=l(ga("zombie"),.44,.44,.44,0,.82+.88,0),o(.07,.1,.08,ze,.22,.82+.94,.11),o(.07,.1,.08,ze,.22,.82+.94,-.11),o(.06,.05,.22,3298858,.22,.82+.8,0),o(.6,.18,.18,5934922,.34,.82+.56,.3),o(.6,.18,.18,5934922,.34,.82+.56,-.3);for(const[M,v]of[[0,.12],[0,-.12]])Vn(t,n,e,2764629,M,v,.82,.2)}else if(i==="skeleton"){a(.32,.6,.2,0,.84+.3,0),c=l(ga("skeleton"),.42,.42,.42,0,.84+.81,0),o(.07,.09,.08,ze,.21,.84+.87,.1),o(.07,.09,.08,ze,.21,.84+.87,-.1),o(.05,.05,.06,9079422,.22,.84+.79,0),o(.05,.05,.22,8026736,.21,.84+.72,0),o(.46,.13,.13,14211276,.26,.84+.34,.16),o(.1,.58,.1,14211276,0,.84+.3,-.22);const m=7031339;o(.06,.62,.06,m,.52,.84+.32,.16),o(.06,.14,.06,m,.47,.84+.62,.16),o(.06,.14,.06,m,.47,.84+.02,.16),o(.02,.6,.02,15394520,.55,.84+.32,.16);for(const[M,v]of[[0,.1],[0,-.1]])Vn(t,n,e,14211276,M,v,.84,.12)}else if(i==="husk"){a(.5,.66,.28,0,.82+.33,0),c=l(ga("husk"),.44,.44,.44,0,.82+.88,0),o(.07,.1,.08,ze,.22,.82+.94,.11),o(.07,.1,.08,ze,.22,.82+.94,-.11),o(.06,.05,.22,5916704,.22,.82+.8,0),o(.6,.18,.18,12099680,.34,.82+.56,.3),o(.6,.18,.18,12099680,.34,.82+.56,-.3);for(const[M,v]of[[0,.12],[0,-.12]])Vn(t,n,e,8021301,M,v,.82,.2)}else if(i==="creeper"){a(.5,.82,.32,0,.36+.5,0),c=o(.46,.46,.46,6266948,0,.36+1.12,0);const M=855309;o(.13,.14,.06,M,.11,.36+1.18,.22),o(.13,.14,.06,M,-.11,.36+1.18,.22),o(.1,.16,.06,M,0,.36+1.06,.22),o(.1,.1,.06,M,.1,.36+.98,.22),o(.1,.1,.06,M,-.1,.36+.98,.22);for(const[v,T]of[[.16,.13],[.16,-.13],[-.16,.13],[-.16,-.13]])Vn(t,n,e,4160046,v,T,.36,.16)}else{a(.34,.34,.3,-.02,.22+.17,0),o(.32,.24,.06,15921906,-.18,.22+.2,.16),o(.32,.24,.06,15921906,-.18,.22+.2,-.16),h=o(.18,.26,.16,15921906,-.34,.22+.34,0),c=o(.22,.24,.2,15921906,.2,.22+.4,0),o(.04,.06,.05,ze,.31,.22+.46,.07),o(.04,.06,.05,ze,.31,.22+.46,-.07),o(.13,.08,.1,15176991,.36,.22+.4,0),o(.05,.1,.14,13384496,.18,.22+.55,0),o(.06,.08,.06,13384496,.32,.22+.32,0);for(const[v,T]of[[.06,.09],[.06,-.09]])Vn(t,n,e,15176991,v,T,.22,.07)}const u=.9+Math.random()*.22;t.scale.setScalar(u);const d=.9+Math.random()*.16,f=(Math.random()-.5)*.06,g=new It(Math.min(1,d+f),d,Math.max(0,d-f));return{group:t,legs:e,mats:r,base:g,head:c,tail:h,headY:c?c.position.y:0}}const XS=new It(16734810),qS=new It(1,1,1);class YS{constructor(t){b(this,"models",new Map);this.scene=t}sync(t,e){const n=new Set(t);for(const[s,r]of this.models)n.has(s)||(this.scene.remove(r.group),this.models.delete(s));for(const s of t){let r=this.models.get(s);if(!r){const u=WS(s.kind);this.scene.add(u.group),r={...u,phase:0,t:Math.random()*10,baseScale:u.group.scale.x},this.models.set(s,r)}r.t+=e,r.group.position.set(s.pos.x,s.pos.y,s.pos.z),r.group.rotation.y=-s.yaw;const o=s.hurtCooldown>0?XS:r.base;for(const u of r.mats)u.color.copy(o);const a=BS(s.kind==="creeper"?s.fuse:0);if(a.whiteness>0){const u=o.clone().lerp(qS,a.whiteness);for(const d of r.mats)d.color.copy(u)}r.group.scale.setScalar(r.baseScale*a.swell);const l=Math.hypot(s.vel.x,s.vel.z),c=l>.002;c&&(r.phase+=l*20*e*GS);const h=c?Math.sin(r.phase)*.6:0;if(r.legs.forEach((u,d)=>u.rotation.z=d%2===0?h:-h),r.head)if(c)r.head.position.y=r.headY+Math.sin(r.phase*2)*.015,r.head.rotation.z=Math.sin(r.phase)*.05;else if(s.kind==="chicken"){const u=Math.max(0,Math.sin(r.t*1.6));r.head.rotation.z=-u*.5,r.head.position.y=r.headY-u*.04}else r.head.position.y=r.headY+Math.sin(r.t*1.4)*.012,r.head.rotation.z=0;r.tail&&(r.tail.rotation.z=Math.sin(r.t*4+r.phase)*.3)}}clear(){for(const[,t]of this.models)this.scene.remove(t.group);this.models.clear()}}function $S(i){let t=i>>>0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const hi=8,Uh=1,_a=4,Nr=[[1,0],[-1,0],[0,1],[0,-1]],Ih={amount:0,source:!1,falling:!1},Ts=(i,t,e)=>`${i},${t},${e}`;class KS{constructor(t=4e3){b(this,"active",new Set);b(this,"maxPerTick");this.maxPerTick=t}get activeCount(){return this.active.size}activate(t,e,n){this.active.add(Ts(t,e,n));for(const[s,r]of Nr)this.active.add(Ts(t+s,e,n+r));this.active.add(Ts(t,e+1,n)),this.active.add(Ts(t,e-1,n))}tick(t){if(this.active.size===0)return;const e=[...this.active];this.active.clear();const n=new Map,s=(o,a,l,c)=>{const h=Ts(o,a,l),u=n.get(h);(!u||c.amount>u.c.amount||c.amount===u.c.amount&&c.source&&!u.c.source)&&n.set(h,{x:o,y:a,z:l,c})};let r=this.maxPerTick;for(const o of e){if(r--<=0){this.active.add(o);continue}const[a,l,c]=o.split(",").map(Number);this.evaluate(t,a,l,c,s)}for(const{x:o,y:a,z:l,c}of n.values())(c.amount!==t.amount(o,a,l)||c.source!==t.isSource(o,a,l)||c.falling!==t.isFalling(o,a,l))&&(t.setWater(o,a,l,c.amount,c.source,c.falling),this.activate(o,a,l))}evaluate(t,e,n,s,r){if(t.isSolid(e,n,s)){t.amount(e,n,s)>0&&r(e,n,s,Ih);return}if(!(t.amount(e,n,s)>0||t.isSource(e,n,s)))return;const a=t.isSource(e,n,s)?{amount:hi,source:!0,falling:!1}:this.getNewLiquid(t,e,n,s);r(e,n,s,a),a.amount>0&&this.spread(t,e,n,s,a,r)}getNewLiquid(t,e,n,s){if(t.amount(e,n+1,s)>0)return{amount:hi,source:!1,falling:!0};let r=0,o=0;for(const[l,c]of Nr){const h=t.amount(e+l,n,s+c);h>0&&(h>r&&(r=h),t.isSource(e+l,n,s+c)&&o++)}if(o>=2)return{amount:hi,source:!0,falling:!1};const a=r-Uh;return a>0?{amount:a,source:!1,falling:!1}:Ih}spread(t,e,n,s,r,o){const a=n-1,l=t.amount(e,a,s)===hi&&!t.isFalling(e,a,s);if(!t.isSolid(e,a,s)&&!l){o(e,a,s,{amount:hi,source:!1,falling:!0});return}const c=r.source?hi:r.amount,h=c-Uh;if(!(h<1))for(const[u,d]of this.getSpreadDirs(t,e,n,s,c)){const f=e+u,g=s+d;t.isSolid(f,n,g)||t.isSource(f,n,g)||t.amount(f,n,g)>=h||o(f,n,g,{amount:h,source:!1,falling:!1})}}getSpreadDirs(t,e,n,s,r){let o=_a+1;const a=[];for(const l of Nr){const c=e+l[0],h=s+l[1];if(t.isSolid(c,n,h)||t.amount(c,n,h)>=r)continue;const u=this.isHole(t,c,n,h)?0:this.slopeDistance(t,c,n,h,1,[-l[0],-l[1]]);u<o?(o=u,a.length=0,a.push(l)):u===o&&a.push(l)}return a}isHole(t,e,n,s){return!t.isSolid(e,n-1,s)&&t.amount(e,n-1,s)<hi}slopeDistance(t,e,n,s,r,o){let a=_a;for(const l of Nr){if(l[0]===o[0]&&l[1]===o[1])continue;const c=e+l[0],h=s+l[1];if(!t.isSolid(c,n,h)){if(this.isHole(t,c,n,h))return r;if(r<_a){const u=this.slopeDistance(t,c,n,h,r+1,[-l[0],-l[1]]);u<a&&(a=u)}}}return a}}function ZS(i,t,e=240){let n=0;for(;i.activeCount>0&&n<e;)i.tick(t),n++;return n}function Nh(i,t,e){let n=0;for(let s=e.minY;s<=e.maxY;s++)for(let r=e.minX;r<=e.maxX;r++)for(let o=e.minZ;o<=e.maxZ;o++)t.isWater(r,s,o)&&(t.isAir(r,s-1,o)||t.isAir(r+1,s,o)||t.isAir(r-1,s,o)||t.isAir(r,s,o+1)||t.isAir(r,s,o-1))&&(i.activate(r,s,o),n++);return n}function jS(i,t,e,n){const s=[];for(let r=i-e;r<=i+e;r++)for(let o=t-e;o<=t+e;o++){const a=`${r},${o}`;if(n.has(a))continue;const l=r-i,c=o-t;s.push({key:a,d:l*l+c*c})}return s.sort((r,o)=>r.d-o.d),s.map(r=>r.key)}const QS=9,JS=27,Nd=QS+JS,Fd=64;function cl(){return Array.from({length:Nd},()=>null)}function cs(i,t,e,n=Fd,s=0,r=i.length){for(let o=s;o<r&&e>0;o++){const a=i[o];if(a&&a.id===t&&a.count<n){const l=Math.min(n-a.count,e);a.count+=l,e-=l}}for(let o=s;o<r&&e>0;o++)if(!i[o]){const a=Math.min(n,e);i[o]={id:t,count:a},e-=a}return e}function ty(i,t,e){for(let n=0;n<i.length;n++)if(!i[n])return i[n]={id:t,count:1,dur:e},!0;return!1}function ey(i,t){let e=0;for(const n of i)n&&n.id===t&&(e+=n.count);return e}function ny(i,t,e){let n=e;for(let s=0;s<i.length&&n>0;s++){const r=i[s];if(r&&r.id===t){const o=Math.min(r.count,n);r.count-=o,n-=o,r.count<=0&&(i[s]=null)}}return e-n}function Fh(i,t){const e=i[t];if(!e||e.count<=0)return null;e.count--;const n=e.id;return e.count<=0&&(i[t]=null),n}function iy(i){return i.map(t=>t?{id:t.id,count:t.count,dur:t.dur}:null)}function sy(i){const t=cl();if(!Array.isArray(i))return t;for(let e=0;e<Nd;e++){const n=i[e];if(n&&typeof n.id=="number"&&typeof n.count=="number"&&n.count>0){const s={id:n.id,count:Math.min(Fd,n.count)};typeof n.dur=="number"&&(s.dur=n.dur),t[e]=s}}return t}function Oh(i,t,e){const n=i[t];if(!n)return!1;const s=(n.dur??e)-1;return s<=0?(i[t]=null,!0):(n.dur=s,!1)}const tn=new Set,ry=300;let kh=-1/0,hl=!1,Xa=!1;window.addEventListener("keydown",i=>{if(i.code==="KeyW"&&!tn.has("KeyW")){const t=performance.now();t-kh<ry&&(hl=!0),kh=t}i.code==="Space"&&!tn.has("Space")&&(Xa=!0),tn.add(i.code)});window.addEventListener("keyup",i=>{tn.delete(i.code),i.code==="KeyW"&&(hl=!1)});function zh(){let i=0,t=0;tn.has("KeyW")&&(i+=1),tn.has("KeyS")&&(i-=1),tn.has("KeyD")&&(t+=1),tn.has("KeyA")&&(t-=1);const e=tn.has("ShiftLeft")||tn.has("ShiftRight")||tn.has("KeyC");return{forward:i,right:t,sprint:hl&&i>0&&!e,jumpHeld:tn.has("Space"),crouch:e}}function oy(){const i=Xa;return Xa=!1,i}const Bh=.0025,Hh=1.55;class ay{constructor(t){b(this,"yaw",0);b(this,"pitch",0);t.addEventListener("click",()=>void t.requestPointerLock()),document.addEventListener("mousemove",e=>{document.pointerLockElement===t&&(this.yaw+=e.movementX*Bh,this.pitch=Math.max(-Hh,Math.min(Hh,this.pitch-e.movementY*Bh)))})}}class ly{constructor(t,e=9){b(this,"icons",[]);b(this,"counts",[]);b(this,"cells",[]);b(this,"durTracks",[]);b(this,"durFills",[]);b(this,"selected",0);b(this,"size");this.size=e,t.innerHTML="";for(let n=0;n<e;n++){const s=document.createElement("div");s.className="hotbar-slot",s.style.position="relative";const r=document.createElement("div");r.className="hotbar-icon";const o=document.createElement("div");o.className="hotbar-count";const a=document.createElement("div");a.style.cssText="position:absolute;left:12%;right:12%;bottom:9%;height:3px;background:rgba(0,0,0,.55);border-radius:1px;display:none;overflow:hidden;";const l=document.createElement("div");l.style.cssText="height:100%;width:100%;",a.appendChild(l),s.append(r,o,a),t.appendChild(s),this.cells.push(s),this.icons.push(r),this.counts.push(o),this.durTracks.push(a),this.durFills.push(l)}this.setSelected(0)}render(t){var e;for(let n=0;n<this.size;n++){const s=t[n]??null,r=this.icons[n],o=this.counts[n];if(s&&s.count>0){const l=ps(s.id);r.style.backgroundImage=l?`url(${l})`:"none",o.textContent=s.count>1?String(s.count):""}else r.style.backgroundImage="none",o.textContent="";const a=s&&s.count>0?(e=Us(s.id))==null?void 0:e.maxDurability:void 0;if(s&&a&&(s.dur??a)<a){const l=Math.max(0,(s.dur??a)/a);this.durTracks[n].style.display="block",this.durFills[n].style.width=`${l*100}%`,this.durFills[n].style.background=`hsl(${Math.round(l*120)},85%,45%)`}else this.durTracks[n].style.display="none"}}setSelected(t){this.selected=(t%this.size+this.size)%this.size,this.cells.forEach((e,n)=>e.classList.toggle("selected",n===this.selected))}scroll(t){this.setSelected(this.selected+t)}get index(){return this.selected}}const Rs=20,Os=20,ul=10,cy=1,Gh=6,Vh=80,hy=10,uy=30,dy=20;function va(){return{health:Rs,food:Os,saturation:5,exhaustion:0,foodTimer:0,oxygen:ul,oxygenTimer:0}}function _i(i,t){i.exhaustion=Math.min(i.exhaustion+t,40)}function io(i,t){i.health=Math.max(0,i.health-t)}function Wh(i){return i.health<=0}function fy(i,t){i.food=Math.min(Os,i.food+t.nutrition),i.saturation=Math.min(i.saturation+t.nutrition*t.saturationModifier*2,i.food)}function py(i){return Math.max(0,Math.floor(i-3))}function my(i,t,e,n){return n?{fallDistance:0,damage:0}:e?{fallDistance:0,damage:py(i)}:{fallDistance:t<0?i-t:i,damage:0}}function gy(i){i.exhaustion>4&&(i.exhaustion-=4,i.saturation>0?i.saturation=Math.max(0,i.saturation-1):i.food=Math.max(0,i.food-1)),i.food>=Os&&i.saturation>0&&i.health<Rs?++i.foodTimer>=hy&&(i.health=Math.min(Rs,i.health+1),_i(i,Gh),i.foodTimer=0):i.food>=18&&i.health<Rs?++i.foodTimer>=Vh&&(i.health=Math.min(Rs,i.health+1),_i(i,Gh),i.foodTimer=0):i.food<=0?++i.foodTimer>=Vh&&(i.health>cy&&io(i,1),i.foodTimer=0):i.foodTimer=0}function _y(i,t){if(!t){i.oxygen=ul,i.oxygenTimer=0;return}i.oxygenTimer++,i.oxygen>0?i.oxygenTimer>=uy&&(i.oxygen=Math.max(0,i.oxygen-1),i.oxygenTimer=0):i.oxygenTimer>=dy&&(io(i,2),i.oxygenTimer=0)}const Xh=i=>`url(${Ws(`textures/ui/${i}.png`)})`;class vy{constructor(t,e,n=10){b(this,"hearts");b(this,"foods");b(this,"bubbles",[]);b(this,"healthEl");b(this,"hungerEl");b(this,"oxygenEl");this.healthEl=t,this.hungerEl=e,this.oxygenEl=document.getElementById("oxygen"),this.hearts=this.build(t,n),this.foods=this.build(e,n),this.oxygenEl&&(this.bubbles=this.build(this.oxygenEl,n))}build(t,e){t.innerHTML="";const n=[];for(let s=0;s<e;s++){const r=document.createElement("div");r.className="hud-icon",t.appendChild(r),n.push(r)}return n}render(t){if(this.fill(this.hearts,t.health,"heart"),this.fill(this.foods,t.food,"food"),this.healthEl.classList.toggle("low",t.health<=4),this.hungerEl.classList.toggle("low",t.food<=4),this.oxygenEl){const e=t.oxygen<ul;if(this.oxygenEl.style.display=e?"flex":"none",e)for(let n=0;n<this.bubbles.length;n++)this.bubbles[n].style.backgroundImage=Xh(t.oxygen>n?"bubble_full":"bubble_empty")}}fill(t,e,n){for(let s=0;s<t.length;s++){const r=e-s*2,o=r>=2?"full":r===1?"half":"empty";t[s].style.backgroundImage=Xh(`${n}_${o}`)}}}function so(i,t,e,n){const s=i[t];if(!e)return i[t]=null,s;if(!s)return i[t]=e,null;if(s.id===e.id){const r=Math.max(0,n(s.id)-s.count),o=Math.min(r,e.count);return s.count+=o,e.count-=o,e.count>0?e:null}return i[t]=e,s}function ro(i,t,e,n){const s=i[t];if(!e){if(!s)return null;const r=Math.ceil(s.count/2),o=s.count-r;return i[t]=o>0?{id:s.id,count:o}:null,{id:s.id,count:r}}return s?s.id===e.id?s.count<n(s.id)?(s.count+=1,e.count-=1,e.count>0?e:null):e:(i[t]=e,s):(i[t]={id:e.id,count:1},e.count-=1,e.count>0?e:null)}function xa(i,t,e,n,s=0,r=e.length){const o=i[t];if(!o)return;const a=cs(e,o.id,o.count,n(o.id),s,r);i[t]=a>0?{id:o.id,count:a}:null}function xy(i,t,e){if(!t)return t;const n=t.id,s=e(n),r=i.filter(c=>{const h=c.get();return!h||h.id===n&&h.count<s});if(r.length===0)return t;const o=Math.floor(t.count/r.length);if(o===0)return t;let a=0;for(const c of r){const h=c.get(),u=h?h.count:0,d=Math.min(o,s-u);d<=0||(c.set({id:n,count:u+d}),a+=d)}const l=t.count-a;return l>0?{id:n,count:l}:null}function My(i,t,e){if(!t)return t;const n=t.id,s=e(n);let r=t.count;for(const o of i){if(r<=0)break;const a=o.get();a?a.id===n&&a.count<s&&(a.count+=1,r--):(o.set({id:n,count:1}),r--)}return r>0?{id:n,count:r}:null}const Ma=["PPP"," S "," S "],Sa=["PP","PS"," S"],ya=["P","S","S"],Ea=["P","P","S"],ba=["PP"," S"," S"];function Ie(i,t,e){return{type:"shaped",pattern:i,key:{P:t,S:"stick"},result:{item:e,count:1}}}const Sy=[{type:"shapeless",ingredients:["oak_log"],result:{item:"oak_planks",count:4}},{type:"shapeless",ingredients:["flint","iron_ingot"],result:{item:"flint_and_steel",count:1}},{type:"shaped",pattern:["#","#"],key:{"#":"oak_planks"},result:{item:"stick",count:4}},{type:"shaped",pattern:["##","##"],key:{"#":"oak_planks"},result:{item:"crafting_table",count:1}},{type:"shaped",pattern:["###","# #","###"],key:{"#":"oak_planks"},result:{item:"chest",count:1}},{type:"shaped",pattern:["###","# #","###"],key:{"#":"cobblestone"},result:{item:"furnace",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"sand"},result:{item:"sandstone",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"nether_quartz"},result:{item:"quartz_block",count:1}},{type:"shaped",pattern:["###","###","###"],key:{"#":"coal"},result:{item:"coal_block",count:1}},{type:"shapeless",ingredients:["coal_block"],result:{item:"coal",count:9}},{type:"shaped",pattern:["###","###","###"],key:{"#":"iron_ingot"},result:{item:"iron_block",count:1}},{type:"shapeless",ingredients:["iron_block"],result:{item:"iron_ingot",count:9}},{type:"shaped",pattern:["C","S"],key:{C:"coal",S:"stick"},result:{item:"torch",count:4}},{type:"shaped",pattern:["F","S","E"],key:{F:"flint",S:"stick",E:"feather"},result:{item:"arrow",count:4}},{type:"shaped",pattern:[" TS","T S"," TS"],key:{T:"stick",S:"string"},result:{item:"bow",count:1}},Ie(Ma,"oak_planks","wooden_pickaxe"),Ie(Sa,"oak_planks","wooden_axe"),Ie(ya,"oak_planks","wooden_shovel"),Ie(Ea,"oak_planks","wooden_sword"),Ie(ba,"oak_planks","wooden_hoe"),Ie(Ma,"cobblestone","stone_pickaxe"),Ie(Sa,"cobblestone","stone_axe"),Ie(ya,"cobblestone","stone_shovel"),Ie(Ea,"cobblestone","stone_sword"),Ie(ba,"cobblestone","stone_hoe"),Ie(Ma,"iron_ingot","iron_pickaxe"),Ie(Sa,"iron_ingot","iron_axe"),Ie(ya,"iron_ingot","iron_shovel"),Ie(Ea,"iron_ingot","iron_sword"),Ie(ba,"iron_ingot","iron_hoe")];function Od(i){return i&&i.count>=1?i.item:null}function yy(i){return i.map(t=>t.map(Od))}function Ey(i){const t=[];for(const e of i)for(const n of e){const s=Od(n);s&&t.push(s)}return t}function kd(i){let t=1/0,e=-1,n=1/0,s=-1;for(let o=0;o<i.length;o++)for(let a=0;a<i[o].length;a++)i[o][a]!==null&&(o<t&&(t=o),o>e&&(e=o),a<n&&(n=a),a>s&&(s=a));if(e===-1)return null;const r=[];for(let o=t;o<=e;o++)r.push(i[o].slice(n,s+1));return r}function by(i){return i.pattern.map(t=>Array.from(t,e=>e===" "?null:i.key[e]??null))}function Ty(i){return i.map(t=>[...t].reverse())}function qh(i,t){if(i.length!==t.length)return!1;for(let e=0;e<i.length;e++){if(i[e].length!==t[e].length)return!1;for(let n=0;n<i[e].length;n++)if(i[e][n]!==t[e][n])return!1}return!0}function wy(i,t){const e=kd(by(i));return e?qh(e,t)||qh(Ty(e),t):!1}function Yh(i){const t=new Map;for(const e of i)t.set(e,(t.get(e)??0)+1);return t}function Ay(i,t){if(i.ingredients.length!==t.length)return!1;const e=Yh(i.ingredients),n=Yh(t);if(e.size!==n.size)return!1;for(const[s,r]of e)if(n.get(s)!==r)return!1;return!0}function Cy(i){const t=Ey(i);if(t.length===0)return null;const e=kd(yy(i));for(const n of Sy)if(n.type==="shaped"){if(e&&wy(n,e))return n}else if(Ay(n,t))return n;return null}function Ry(i){const t=Cy(i);return t?{item:t.result.item,count:t.result.count}:null}const dl=new Map,fl=new Map;for(const i of Ke)i.id!==0&&(dl.set(i.id,i.name),fl.set(i.name,i.id));for(const i of TM){const t=AM(i);t&&(dl.set(i,t),fl.set(t,i))}function $h(i){const t=i.map(s=>s.map(r=>{if(!r)return null;const o=dl.get(r.id);return o?{item:o,count:r.count}:null})),e=Ry(t);if(!e)return null;const n=fl.get(e.item);return n==null?null:{id:n,count:e.count}}function Py(i){for(const t of i)for(let e=0;e<t.length;e++){const n=t[e];n&&(n.count-=1,n.count<=0&&(t[e]=null))}}const Qe=i=>jr(i),Tn=9,Ta=27;class Ly{constructor(t){b(this,"root");b(this,"inv",null);b(this,"gridN",2);b(this,"craft",[]);b(this,"cursor",null);b(this,"open",!1);b(this,"cursorEl");b(this,"cursorIcon");b(this,"cursorCnt");b(this,"titleEl");b(this,"cgridEl");b(this,"outCell");b(this,"mainCells",[]);b(this,"hotbarCells",[]);b(this,"craftCells",[]);b(this,"drag",null);b(this,"onChange",null);this.root=t,t.classList.add("hidden"),t.innerHTML=`
      <div class="inv-panel">
        <div class="inv-title">合成</div>
        <div class="inv-top">
          <div class="inv-cgrid"></div>
          <div class="inv-arrow">▶</div>
          <div class="inv-out-wrap"></div>
        </div>
        <div class="inv-main"></div>
        <div class="inv-hotbar"></div>
        <div class="inv-hint">E / Esc 关闭 · 左键拿放 · 右键放一个/拿一半 · Shift 快速转移</div>
      </div>`,this.titleEl=t.querySelector(".inv-title"),this.cgridEl=t.querySelector(".inv-cgrid");const e=t.querySelector(".inv-main"),n=t.querySelector(".inv-hotbar");for(let s=0;s<Ta;s++)this.mainCells.push(this.makeSlot(e,"main",s));for(let s=0;s<Tn;s++)this.hotbarCells.push(this.makeSlot(n,"hotbar",s));this.outCell=this.makeSlot(t.querySelector(".inv-out-wrap"),"output",0),this.outCell.el.classList.add("inv-out"),this.cursorEl=document.createElement("div"),this.cursorEl.className="inv-cursor",this.cursorIcon=document.createElement("div"),this.cursorIcon.className="slot-icon",this.cursorCnt=document.createElement("div"),this.cursorCnt.className="slot-count",this.cursorEl.append(this.cursorIcon,this.cursorCnt),this.cursorEl.style.display="none",this.cursorEl.style.pointerEvents="none",document.body.appendChild(this.cursorEl),document.addEventListener("mousemove",s=>{this.open&&(this.cursorEl.style.left=`${s.clientX}px`,this.cursorEl.style.top=`${s.clientY}px`,this.drag&&this.onDragMove(s))}),document.addEventListener("mouseup",s=>{this.open&&this.drag&&this.endDrag(s)})}makeSlot(t,e,n){const s=document.createElement("div");s.className="inv-slot",s.dataset.region=e,s.dataset.idx=String(n);const r=document.createElement("div");r.className="slot-icon";const o=document.createElement("div");return o.className="slot-count",s.append(r,o),s.addEventListener("mousedown",a=>{a.preventDefault(),this.beginDrag(e,n,a)}),s.addEventListener("contextmenu",a=>a.preventDefault()),t.appendChild(s),{el:s,icon:r,cnt:o}}isOpen(){return this.open}show(t,e){this.inv=t,this.gridN=e,this.craft=Array.from({length:e},()=>Array(e).fill(null)),this.buildCraftGrid(e),this.titleEl.textContent=e>=3?"工作台":"背包",this.open=!0,this.root.classList.remove("hidden"),this.render()}hide(){var t;if(this.cancelDrag(),this.inv){for(const e of this.craft)for(let n=0;n<e.length;n++){const s=e[n];s&&(cs(this.inv,s.id,s.count,Qe(s.id)),e[n]=null)}this.cursor&&(cs(this.inv,this.cursor.id,this.cursor.count,Qe(this.cursor.id)),this.cursor=null)}this.open=!1,this.root.classList.add("hidden"),this.cursorEl.style.display="none",(t=this.onChange)==null||t.call(this)}buildCraftGrid(t){this.cgridEl.innerHTML="",this.cgridEl.style.gridTemplateColumns=`repeat(${t}, 1fr)`,this.craftCells=[];for(let e=0;e<t*t;e++)this.craftCells.push(this.makeSlot(this.cgridEl,"craft",e))}beginDrag(t,e,n){var s,r;if(this.inv){if(t==="output"){this.takeOutput(),this.render(),(s=this.onChange)==null||s.call(this);return}if(n.shiftKey){this.quickMoveFrom(t,e),this.render(),(r=this.onChange)==null||r.call(this);return}this.drag={region:t,i:e,right:n.button===2,started:!1,mode:this.cursor?"distribute":"move",swept:[],sweptKeys:new Set,sweptCells:[]}}}onDragMove(t){const e=this.drag;if(!e||!this.inv)return;const n=this.slotAt(t);if(!e.started){if(!n||n.region===e.region&&n.i===e.i)return;e.started=!0,e.mode==="distribute"?(this.addSwept(e,e.region,e.i),this.addSwept(e,n.region,n.i)):(this.applyClick(e.region,e.i,!1),this.render());return}e.mode==="distribute"&&n&&this.addSwept(e,n.region,n.i)}endDrag(t){var n;const e=this.drag;this.drag=null;for(const s of(e==null?void 0:e.sweptCells)??[])s.el.classList.remove("inv-drag-hi");if(!(!e||!this.inv)){if(!e.started)this.applyClick(e.region,e.i,e.right);else if(e.mode==="distribute")this.cursor=e.right?My(e.swept,this.cursor,Qe):xy(e.swept,this.cursor,Qe);else{const s=this.slotAt(t);s&&s.region!=="output"&&!(s.region===e.region&&s.i===e.i)&&this.applyClick(s.region,s.i,!1)}this.render(),(n=this.onChange)==null||n.call(this)}}cancelDrag(){if(this.drag){for(const t of this.drag.sweptCells)t.el.classList.remove("inv-drag-hi");this.drag=null}}addSwept(t,e,n){if(e==="output")return;const s=`${e}:${n}`;if(t.sweptKeys.has(s))return;t.sweptKeys.add(s),t.swept.push(this.slotRef(e,n));const r=this.cellOf(e,n);r&&(r.el.classList.add("inv-drag-hi"),t.sweptCells.push(r))}applyClick(t,e,n){if(this.inv)if(t==="craft"){const s=this.gridN,r=this.craft[Math.floor(e/s)],o=e%s;this.cursor=n?ro(r,o,this.cursor,Qe):so(r,o,this.cursor,Qe)}else{const s=t==="main"?Tn+e:e;this.cursor=n?ro(this.inv,s,this.cursor,Qe):so(this.inv,s,this.cursor,Qe)}}slotRef(t,e){if(t==="craft"){const r=this.gridN,o=this.craft[Math.floor(e/r)],a=e%r;return{get:()=>o[a],set:l=>o[a]=l}}const n=this.inv,s=t==="main"?Tn+e:e;return{get:()=>n[s],set:r=>n[s]=r}}slotAt(t){const e=document.elementFromPoint(t.clientX,t.clientY),n=e==null?void 0:e.closest(".inv-slot");return!n||n.dataset.region===void 0?null:{region:n.dataset.region,i:Number(n.dataset.idx)}}cellOf(t,e){return t==="main"?this.mainCells[e]??null:t==="hotbar"?this.hotbarCells[e]??null:t==="craft"?this.craftCells[e]??null:null}quickMoveFrom(t,e){if(this.inv)if(t==="craft"){const n=this.gridN;xa(this.craft[Math.floor(e/n)],e%n,this.inv,Qe)}else t==="main"?xa(this.inv,Tn+e,this.inv,Qe,0,Tn):xa(this.inv,e,this.inv,Qe,Tn,Tn+Ta)}takeOutput(){const t=$h(this.craft);if(t){if(!this.cursor)this.cursor={id:t.id,count:t.count};else if(this.cursor.id===t.id&&this.cursor.count+t.count<=Qe(t.id))this.cursor.count+=t.count;else return;Py(this.craft)}}render(){if(!this.inv)return;for(let e=0;e<Ta;e++)this.paint(this.mainCells[e],this.inv[Tn+e]);for(let e=0;e<Tn;e++)this.paint(this.hotbarCells[e],this.inv[e]);const t=this.gridN;for(let e=0;e<this.craftCells.length;e++)this.paint(this.craftCells[e],this.craft[Math.floor(e/t)][e%t]);this.paint(this.outCell,$h(this.craft)),this.cursor?(this.cursorEl.style.display="block",this.fill(this.cursorIcon,this.cursorCnt,this.cursor)):this.cursorEl.style.display="none"}paint(t,e){this.fill(t.icon,t.cnt,e)}fill(t,e,n){if(n&&n.count>0){const s=ps(n.id);s?(t.style.backgroundImage=`url(${s})`,t.textContent="",t.classList.remove("txt")):(t.style.backgroundImage="none",t.textContent=Ad(n.id),t.classList.add("txt")),e.textContent=n.count>1?String(n.count):""}else t.style.backgroundImage="none",t.textContent="",t.classList.remove("txt"),e.textContent=""}}const zd=200,Dy=64,Uy={[Qv]:fd,[rl]:pd,[ol]:md,[al]:gd,[ll]:_d},Iy={[dd]:1600,[po]:300,[Zv]:300,[ud]:100},Bd=i=>Uy[i],Hd=i=>Iy[i]??0,Kh=i=>Hd(i)>0;function Ny(){return{input:0,inputN:0,fuel:0,fuelN:0,output:0,outputN:0,burn:0,burnMax:0,cook:0}}function Gd(i){if(i.inputN<=0)return!1;const t=Bd(i.input);return t===void 0?!1:i.outputN===0||i.output===t&&i.outputN<Dy}function Fy(i){const t=i.burn>0||i.cook>0,e=Gd(i);if(i.burn>0&&i.burn--,i.burn===0&&e&&i.fuelN>0&&(i.burnMax=Hd(i.fuel),i.burn=i.burnMax,i.fuelN--,i.fuelN===0&&(i.fuel=0)),i.burn>0&&e){if(i.cook++,i.cook>=zd){i.cook=0;const n=Bd(i.input);i.inputN--,i.inputN===0&&(i.input=0),i.output=n,i.outputN++}}else i.cook=0;return t||i.burn>0||i.cook>0}function Oy(i){return i.burn>0||i.fuelN>0&&Gd(i)}const Wn=i=>jr(i),Fr=9,Zh=27;class ky{constructor(t){b(this,"root");b(this,"inv",null);b(this,"furnace",null);b(this,"cursor",null);b(this,"open",!1);b(this,"cursorEl");b(this,"cursorIcon");b(this,"cursorCnt");b(this,"inputCell");b(this,"fuelCell");b(this,"outCell");b(this,"flameEl");b(this,"arrowFillEl");b(this,"mainCells",[]);b(this,"hotbarCells",[]);b(this,"onChange",null);this.root=t,t.classList.add("hidden"),t.innerHTML=`
      <div class="inv-panel">
        <div class="inv-title">熔炉</div>
        <div class="fur-top">
          <div class="fur-col">
            <div class="fur-slot fur-input"></div>
            <div class="fur-flame"><div class="fur-flame-fill"></div></div>
            <div class="fur-slot fur-fuel"></div>
          </div>
          <div class="fur-arrow"><div class="fur-arrow-fill"></div></div>
          <div class="fur-slot fur-out"></div>
        </div>
        <div class="inv-main"></div>
        <div class="inv-hotbar"></div>
        <div class="inv-hint">E / Esc 关闭 · 上槽放矿、下槽放燃料(煤/木) · 取走成品</div>
      </div>`;const e=r=>this.bindSlot(t.querySelector(r));this.inputCell=e(".fur-input"),this.fuelCell=e(".fur-fuel"),this.outCell=e(".fur-out"),this.inputCell.el.addEventListener("mousedown",r=>this.clickFur("input",r)),this.fuelCell.el.addEventListener("mousedown",r=>this.clickFur("fuel",r)),this.outCell.el.addEventListener("mousedown",r=>this.clickFur("output",r)),this.flameEl=t.querySelector(".fur-flame-fill"),this.arrowFillEl=t.querySelector(".fur-arrow-fill");const n=t.querySelector(".inv-main"),s=t.querySelector(".inv-hotbar");for(let r=0;r<Zh;r++)this.mainCells.push(this.makeInvSlot(n,"main",r));for(let r=0;r<Fr;r++)this.hotbarCells.push(this.makeInvSlot(s,"hotbar",r));this.cursorEl=document.createElement("div"),this.cursorEl.className="inv-cursor",this.cursorIcon=document.createElement("div"),this.cursorIcon.className="slot-icon",this.cursorCnt=document.createElement("div"),this.cursorCnt.className="slot-count",this.cursorEl.append(this.cursorIcon,this.cursorCnt),this.cursorEl.style.display="none",document.body.appendChild(this.cursorEl),document.addEventListener("mousemove",r=>{this.open&&(this.cursorEl.style.left=`${r.clientX}px`,this.cursorEl.style.top=`${r.clientY}px`)})}bindSlot(t){t.classList.add("inv-slot");const e=document.createElement("div");e.className="slot-icon";const n=document.createElement("div");return n.className="slot-count",t.append(e,n),t.addEventListener("contextmenu",s=>s.preventDefault()),{el:t,icon:e,cnt:n}}makeInvSlot(t,e,n){const s=document.createElement("div");s.className="inv-slot";const r=document.createElement("div");r.className="slot-icon";const o=document.createElement("div");return o.className="slot-count",s.append(r,o),s.addEventListener("mousedown",a=>{a.preventDefault(),this.clickInv(e,n,a)}),s.addEventListener("contextmenu",a=>a.preventDefault()),t.appendChild(s),{el:s,icon:r,cnt:o}}isOpen(){return this.open}show(t,e){this.inv=t,this.furnace=e,this.open=!0,this.root.classList.remove("hidden"),this.render()}hide(){var t;this.inv&&this.cursor&&(cs(this.inv,this.cursor.id,this.cursor.count,Wn(this.cursor.id)),this.cursor=null),this.open=!1,this.root.classList.add("hidden"),this.cursorEl.style.display="none",(t=this.onChange)==null||t.call(this)}clickInv(t,e,n){var r;if(!this.inv)return;const s=t==="main"?Fr+e:e;n.shiftKey?this.shiftToFurnace(s):this.cursor=n.button===2?ro(this.inv,s,this.cursor,Wn):so(this.inv,s,this.cursor,Wn),this.render(),(r=this.onChange)==null||r.call(this)}shiftToFurnace(t){const e=this.furnace,n=this.inv;if(!e||!n)return;const s=n[t];if(!s)return;const r=Kh(s.id);if(r&&(e.fuel===0||e.fuel===s.id)){const o=Wn(s.id)-e.fuelN,a=Math.min(o,s.count);e.fuel=s.id,e.fuelN+=a,s.count-=a,s.count<=0&&(n[t]=null)}else if(!r&&(e.input===0||e.input===s.id)){const o=Wn(s.id)-e.inputN,a=Math.min(o,s.count);e.input=s.id,e.inputN+=a,s.count-=a,s.count<=0&&(n[t]=null)}}clickFur(t,e){var s;e.preventDefault();const n=this.furnace;if(n){if(t==="output")this.takeOutput();else{const r=t==="input"?n.input:n.fuel,o=t==="input"?n.inputN:n.fuelN,a=[o>0?{id:r,count:o}:null];if(t==="fuel"&&a[0]===null&&this.cursor&&!Kh(this.cursor.id))return;this.cursor=e.button===2?ro(a,0,this.cursor,Wn):so(a,0,this.cursor,Wn);const l=a[0];t==="input"?(n.input=(l==null?void 0:l.id)??0,n.inputN=(l==null?void 0:l.count)??0):(n.fuel=(l==null?void 0:l.id)??0,n.fuelN=(l==null?void 0:l.count)??0)}this.render(),(s=this.onChange)==null||s.call(this)}}takeOutput(){const t=this.furnace;!t||t.outputN<=0||(this.cursor?this.cursor.id===t.output&&this.cursor.count+t.outputN<=Wn(t.output)&&(this.cursor.count+=t.outputN,t.output=0,t.outputN=0):(this.cursor={id:t.output,count:t.outputN},t.output=0,t.outputN=0))}render(){if(!this.inv||!this.furnace)return;const t=this.furnace;for(let e=0;e<Zh;e++)this.fill(this.mainCells[e],this.inv[Fr+e]);for(let e=0;e<Fr;e++)this.fill(this.hotbarCells[e],this.inv[e]);this.fill(this.inputCell,t.inputN>0?{id:t.input,count:t.inputN}:null),this.fill(this.fuelCell,t.fuelN>0?{id:t.fuel,count:t.fuelN}:null),this.fill(this.outCell,t.outputN>0?{id:t.output,count:t.outputN}:null),this.flameEl.style.height=`${t.burnMax>0?Math.round(t.burn/t.burnMax*100):0}%`,this.arrowFillEl.style.width=`${Math.round(t.cook/zd*100)}%`,this.cursor?(this.cursorEl.style.display="block",this.fillRaw(this.cursorIcon,this.cursorCnt,this.cursor)):this.cursorEl.style.display="none"}fill(t,e){this.fillRaw(t.icon,t.cnt,e)}fillRaw(t,e,n){if(n&&n.count>0){const s=ps(n.id);s?(t.style.backgroundImage=`url(${s})`,t.textContent="",t.classList.remove("txt")):(t.style.backgroundImage="none",t.textContent=Ad(n.id),t.classList.add("txt")),e.textContent=n.count>1?String(n.count):""}else t.style.backgroundImage="none",t.textContent="",t.classList.remove("txt"),e.textContent=""}}const wa=600;class zy{constructor(t){b(this,"geom",new We);b(this,"pos",new Float32Array(wa*3));b(this,"col",new Float32Array(wa*3));b(this,"posAttr");b(this,"colAttr");b(this,"points");this.posAttr=new pe(this.pos,3),this.colAttr=new pe(this.col,3),this.posAttr.setUsage(nc),this.colAttr.setUsage(nc),this.geom.setAttribute("position",this.posAttr),this.geom.setAttribute("color",this.colAttr),this.geom.setDrawRange(0,0);const e=new Vu({size:.13,vertexColors:!0,sizeAttenuation:!0,transparent:!0,depthWrite:!1});this.points=new Mv(this.geom,e),this.points.frustumCulled=!1,t.add(this.points)}sync(t){const e=Math.min(t.length,wa);for(let n=0;n<e;n++){const s=t[n];this.pos[n*3]=s.x,this.pos[n*3+1]=s.y,this.pos[n*3+2]=s.z,this.col[n*3]=s.r,this.col[n*3+1]=s.g,this.col[n*3+2]=s.b}this.geom.setDrawRange(0,e),this.posAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0}}function By(){const i=document.createElement("canvas");i.width=i.height=16;const t=i.getContext("2d");return t.fillStyle="#fff6c0",t.fillRect(1,1,14,14),t.fillStyle="#ffe25a",t.fillRect(3,3,10,10),t.fillStyle="#ffcf26",t.fillRect(5,5,6,6),Vd(i)}function Hy(){const i=document.createElement("canvas");i.width=i.height=16;const t=i.getContext("2d");return t.fillStyle="#eef2f7",t.fillRect(2,2,12,12),t.fillStyle="#c2ccd8",t.fillRect(5,4,3,3),t.fillRect(9,7,2,2),t.fillRect(4,9,2,3),t.fillRect(10,11,2,2),Vd(i)}function Gy(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=64/2,s=64/2,r=e.createRadialGradient(n,n,0,n,n,s);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,240,1)"),r.addColorStop(.7,"rgba(255,251,214,1)"),r.addColorStop(.88,"rgba(255,248,200,0.5)"),r.addColorStop(1,"rgba(255,246,190,0)"),e.fillStyle=r,e.beginPath(),e.arc(n,n,s,0,Math.PI*2),e.fill();const o=new ei(t);return o.minFilter=ye,o.magFilter=ye,o.colorSpace=oe,o}function Vy(){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),n=128/2,s=128/2,r=e.createRadialGradient(n,n,0,n,n,s);r.addColorStop(0,"rgba(255,255,238,0.5)"),r.addColorStop(.25,"rgba(255,252,224,0.32)"),r.addColorStop(.55,"rgba(255,249,208,0.14)"),r.addColorStop(.8,"rgba(255,247,198,0.04)"),r.addColorStop(1,"rgba(255,245,188,0)"),e.fillStyle=r,e.beginPath(),e.arc(n,n,s,0,Math.PI*2),e.fill();const o=new ei(t);return o.minFilter=ye,o.magFilter=ye,o.colorSpace=oe,o}function Wy(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=64/2,s=64/2,r=e.createRadialGradient(n-s*.15,n-s*.15,0,n,n,s);r.addColorStop(0,"rgba(245,248,255,1)"),r.addColorStop(.55,"rgba(220,228,242,1)"),r.addColorStop(.82,"rgba(190,200,220,1)"),r.addColorStop(.92,"rgba(170,180,205,0.5)"),r.addColorStop(1,"rgba(150,165,195,0)"),e.fillStyle=r,e.beginPath(),e.arc(n,n,s,0,Math.PI*2),e.fill();const o=[[.38,.32,.09],[.62,.55,.07],[.28,.6,.055],[.55,.3,.05],[.45,.68,.065]];for(const[l,c,h]of o){const u=n+(l-.5)*44.8,d=n+(c-.5)*(64*.7),f=h*64,g=e.createRadialGradient(u,d,0,u,d,f);g.addColorStop(0,"rgba(140,150,170,0.28)"),g.addColorStop(.6,"rgba(160,168,185,0.12)"),g.addColorStop(1,"rgba(170,178,195,0)"),e.fillStyle=g,e.beginPath(),e.arc(u,d,f,0,Math.PI*2),e.fill()}const a=new ei(t);return a.minFilter=ye,a.magFilter=ye,a.colorSpace=oe,a}function Vd(i){const t=new ei(i);return t.magFilter=ne,t.minFilter=ne,t.colorSpace=oe,t}function Ps(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Aa(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=Ps(e,n),c=Ps(e+1,n),h=Ps(e,n+1),u=Ps(e+1,n+1);return l*(1-o)*(1-a)+c*o*(1-a)+h*(1-o)*a+u*o*a}function Xy(i,t){return Aa(i,t)*.6+Aa(i*2.3+5.1,t*2.3-3.7)*.3+Aa(i*4.7,t*4.7)*.1}const wn=16,qy=5,Or=28,jh=196,Qh=.18,Yy=.62,$y=.012;function Ky(i,t){return Xy(i*Qh,t*Qh)>Yy}const Zy=[{o:[[1,-1,-1],[1,1,-1],[1,1,1],[1,-1,1]],s:.82},{o:[[-1,-1,1],[-1,1,1],[-1,1,-1],[-1,-1,-1]],s:.82},{o:[[-1,1,-1],[-1,1,1],[1,1,1],[1,1,-1]],s:1},{o:[[-1,-1,1],[-1,-1,-1],[1,-1,-1],[1,-1,1]],s:.6},{o:[[1,-1,1],[1,1,1],[-1,1,1],[-1,-1,1]],s:.88},{o:[[-1,-1,-1],[-1,1,-1],[1,1,-1],[1,-1,-1]],s:.88}];function jy(i,t,e,n,s,r,o,a,l){const c=o/2,h=a/2,u=l/2;for(const d of Zy){const f=i.length/3;for(const[g,_,p]of d.o)i.push(n+g*c,s+_*h,r+p*u),t.push(d.s,d.s,d.s);e.push(f,f+1,f+2,f,f+2,f+3)}}class Qy{constructor(t){b(this,"sun");b(this,"moon");b(this,"realSun");b(this,"sunGlow");b(this,"realMoon");b(this,"voxelClouds");b(this,"softClouds");b(this,"softMat");b(this,"dir",new H);b(this,"shaders",!1);b(this,"drift",0);b(this,"cloudOriginX",NaN);b(this,"cloudOriginZ",NaN);const e=s=>new ce({map:s,transparent:!0,depthWrite:!1,fog:!1});this.sun=new qt(new Te(46,46),e(By())),this.moon=new qt(new Te(38,38),e(Hy())),this.realSun=new qt(new Te(52,52),e(Gy())),this.sunGlow=new qt(new Te(150,150),new ce({map:Vy(),transparent:!0,depthWrite:!1,fog:!1,blending:Ua})),this.realMoon=new qt(new Te(44,44),e(Wy())),this.realSun.visible=this.sunGlow.visible=this.realMoon.visible=!1;const n=new ce({vertexColors:!0,color:16777215,transparent:!0,opacity:.85,depthWrite:!1,side:Fe});this.voxelClouds=new qt(new We,n),this.voxelClouds.frustumCulled=!1,this.softMat=new ce({map:t1(),transparent:!0,depthWrite:!1,opacity:.8,side:Fe,fog:!1}),this.softClouds=new qt(new Te(900,900),this.softMat),this.softClouds.rotation.x=-Math.PI/2,this.softClouds.visible=!1,this.softMat.map&&(this.softMat.map.wrapS=this.softMat.map.wrapT=Si,this.softMat.map.repeat.set(3,3)),t.add(this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon,this.voxelClouds,this.softClouds)}setLightingQuality(t){const e=t!=="off";this.shaders=e,this.voxelClouds.visible=!e,this.softClouds.visible=e,this.sun.visible=!e,this.moon.visible=!e,this.realSun.visible=e,this.sunGlow.visible=e,this.realMoon.visible=e}rebuildVoxelClouds(t,e){const n=[],s=[],r=[],o=wn-1;for(let l=0;l<Or;l++)for(let c=0;c<Or;c++)Ky(t+l,e+c)&&jy(n,s,r,l*wn+wn/2,0,c*wn+wn/2,o,qy,o);const a=new We;a.setAttribute("position",new Oe(n,3)),a.setAttribute("color",new Oe(s,3)),a.setIndex(r),this.voxelClouds.geometry.dispose(),this.voxelClouds.geometry=a}update(t,e){const n=t/hn*Math.PI*2;this.dir.set(Math.cos(n),Math.sin(n),.28).normalize();const s=280;if(this.sun.position.copy(e).addScaledVector(this.dir,s),this.sun.lookAt(e),this.moon.position.copy(e).addScaledVector(this.dir,-s),this.moon.lookAt(e),this.realSun.position.copy(this.sun.position),this.realSun.lookAt(e),this.sunGlow.position.copy(this.sun.position),this.sunGlow.lookAt(e),this.realMoon.position.copy(this.moon.position),this.realMoon.lookAt(e),this.drift+=$y,this.shaders)this.softClouds.position.set(e.x,jh,e.z),this.softMat.map&&(this.softMat.map.offset.x=this.drift*.0016%1);else{const r=Math.floor((e.x-this.drift)/wn)-Or/2,o=Math.floor(e.z/wn)-Or/2;(r!==this.cloudOriginX||o!==this.cloudOriginZ)&&(this.rebuildVoxelClouds(r,o),this.cloudOriginX=r,this.cloudOriginZ=o),this.voxelClouds.position.set(r*wn+this.drift,jh,o*wn)}}}const Jh=(i,t)=>(i%t+t)%t;function Jy(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=r*r*(3-2*r),l=o*o*(3-2*o),c=(g,_)=>Ps(Jh(g,e),Jh(_,e)),h=c(n,s),u=c(n+1,s),d=c(n,s+1),f=c(n+1,s+1);return h*(1-a)*(1-l)+u*a*(1-l)+d*(1-a)*l+f*a*l}function t1(){const e=document.createElement("canvas");e.width=e.height=512;const n=e.getContext("2d"),s=n.createImageData(512,512),r=(a,l)=>{let c=0,h=.5,u=1,d=0;for(let f=0;f<4;f++)c+=Jy(a*u,l*u,8*u)*h,d+=h,h*=.5,u*=2;return c/d};for(let a=0;a<512;a++)for(let l=0;l<512;l++){const c=l/512*8,h=a/512*8;let u=r(c,h);u=Math.max(0,Math.min(1,(u-.46)/.3));const d=u*u*(3-2*u),f=224+31*d,g=(a*512+l)*4;s.data[g]=f,s.data[g+1]=f,s.data[g+2]=Math.min(255,f+6),s.data[g+3]=d*230}n.putImageData(s,0,0);const o=new ei(e);return o.minFilter=Yn,o.magFilter=ye,o.anisotropy=4,o.colorSpace=oe,o}const e1=16,n1={1:[.54,.54,.54],2:[.55,.42,.25],3:[.42,.67,.25],4:[.53,.53,.53],5:[.91,.86,.63],6:[.45,.33,.18],7:[.69,.54,.31],8:[.34,.34,.34],10:[.25,.48,.19],11:[.5,.36,.2],16:[.44,.7,.28],17:[.44,.7,.28],256:[.79,.16,.13]},Xi=i=>n1[i]??[.5,.5,.5];function ui(i,t,e,n,s,r=Math.random){const o=[];for(let a=0;a<s;a++){const l=r()*Math.PI*2,c=.6+r()*1.8;o.push({x:i+(r()-.5)*.6,y:t+(r()-.5)*.6,z:e+(r()-.5)*.6,vx:Math.cos(l)*c,vy:1.5+r()*2.5,vz:Math.sin(l)*c,age:0,life:.4+r()*.45,r:n[0],g:n[1],b:n[2]})}return o}function i1(i,t){const e=[];for(const n of i)n.age+=t,!(n.age>=n.life)&&(n.vy-=e1*t,n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,e.push(n));return e}function s1(i,t,e,n){const r=Qr/2,o=Math.floor(i-r-.1),a=Math.floor(i+r+.1),l=Math.floor(t),c=Math.floor(t+bi),h=Math.floor(e-r-.1),u=Math.floor(e+r+.1);for(let d=o;d<=a;d++)for(let f=l;f<=c;f++)for(let g=h;g<=u;g++)if(mx(n(d,f,g)))return!0;return!1}const Ca=50,r1=5,tu=9,o1=300,a1=-125,Xn=0,eu=[{id:3,count:64},{id:2,count:64},{id:1,count:64},{id:4,count:64},{id:7,count:64},{id:6,count:64},{id:5,count:64},{id:21,count:64},{id:14,count:64},{id:15,count:64},{id:26,count:64},{id:32,count:64},{id:33,count:64},{id:34,count:64},{id:18,count:64},{id:19,count:64},{id:20,count:64},{id:10,count:64},{id:30,count:64},{id:8,count:64},{id:12,count:64},{id:11,count:64},{id:13,count:64},{id:27,count:64},{id:28,count:64},{id:269,count:1},{id:270,count:1},{id:271,count:1},{id:272,count:1},{id:Ds,count:1},{id:ts,count:64}];function l1(){const i=cl();for(let t=0;t<eu.length&&t<i.length;t++)i[t]={...eu[t]};return i}const c1=1.6,nu=.05,h1=.1,u1=.05,d1=.2,f1=.005,p1=.1,m1=3.5,iu=16,su=88,ru=48,g1=3,_1=4,v1=8,x1=50,ou=["pig","cow","sheep","chicken"],M1=1200,S1=10,Ra=.25,au=1,lu=.6,y1=2.4,E1=6,cu=.42,b1=.36;function T1(i){if(i==null)return 1;const t=Us(i);return(t==null?void 0:t.kind)==="sword"?t.tier===1?4:t.tier===2?5:6:1}function w1(i,t,e,n,s,r,o,a,l,c,h,u){let d=0,f=1/0;const g=(_,p,m,M)=>{if(Math.abs(p)<1e-9)return _>=m&&_<=M;let v=(m-_)/p,T=(M-_)/p;return v>T&&([v,T]=[T,v]),d=Math.max(d,v),f=Math.min(f,T),f>=d};return!g(i,n,o,c)||!g(t,s,a,h)||!g(e,r,l,u)?null:d}class A1{constructor(t,e){b(this,"canvas");b(this,"save");b(this,"renderer");b(this,"look");b(this,"world");b(this,"physWorld");b(this,"chunks");b(this,"highlight");b(this,"underwaterEl");b(this,"normalFog");b(this,"underFog",new ls(2383754,.1,16));b(this,"player");b(this,"prev");b(this,"hotbar");b(this,"inv");b(this,"crack");b(this,"dropRenderer");b(this,"hand");b(this,"particleFx");b(this,"skyObjects");b(this,"particles",[]);b(this,"digFxT",0);b(this,"invUI");b(this,"craftingGrid",0);b(this,"furnaceUI");b(this,"furnaces",new Map);b(this,"furnaceKey",null);b(this,"drops",[]);b(this,"arrows",[]);b(this,"arrowRenderer");b(this,"drawingBow",!1);b(this,"bowCharge",0);b(this,"mobs",[]);b(this,"mobRenderer");b(this,"mobRng");b(this,"spawnWorld");b(this,"surfaceY",(t,e)=>Ce(t,e,this.save.seed));b(this,"mobSpawnTick",0);b(this,"digging",!1);b(this,"digTarget",null);b(this,"digProgress",0);b(this,"fluidSim",new KS);b(this,"fluidGrid");b(this,"fluidTick",0);b(this,"wateredChunks",new Set);b(this,"worldTime");b(this,"fov",70);b(this,"shadowTick",99);b(this,"evictCt",0);b(this,"last",0);b(this,"acc",0);b(this,"survival");b(this,"statusBar");b(this,"worldSpawn");b(this,"dead",!1);b(this,"creative");b(this,"flying",!1);b(this,"flyTapWindow",0);b(this,"fallDistance",0);b(this,"hurtCd",0);b(this,"coordEl");b(this,"coordOn",!1);b(this,"eating",!1);b(this,"eatProgress",0);b(this,"eatFxT",0);b(this,"crouching",!1);b(this,"camEye",Gn);b(this,"decayQueue",[]);b(this,"texturePack");b(this,"lightingQuality");b(this,"renderDistance");b(this,"_godSunUV",new Ht);b(this,"_godSunColor",new It);b(this,"_godSunWorld",new H);b(this,"_godFwd",new H);this.canvas=t,this.save=e,this.creative=e.gameMode==="creative",this.renderer=new Vv(t),this.normalFog=this.renderer.scene.fog,this.underwaterEl=document.getElementById("underwater"),this.hotbar=new ly(document.getElementById("hotbar"),tu),this.inv=e.inv?sy(e.inv):this.creative?l1():cl(),this.hotbar.render(this.inv);const n=e.survival;this.survival=n&&n.health>0?{...va(),...n,foodTimer:0}:va(),this.statusBar=new vy(document.getElementById("health"),document.getElementById("hunger")),this.statusBar.render(this.survival),this.worldTime=e.worldTime??iM,this.world=new id(e.seed),this.fluidGrid={isSolid:(c,h,u)=>h<0||h>=me||Pe(this.world.getBlock(c,h,u)),amount:(c,h,u)=>this.world.waterAmount(c,h,u),isSource:(c,h,u)=>this.world.isWaterSource(c,h,u),isFalling:(c,h,u)=>this.world.isWaterFalling(c,h,u),setWater:(c,h,u,d,f,g)=>this.world.setWater(c,h,u,d,f,g)};for(const c of Object.keys(e.edits)){const[h,u,d]=c.split(",").map(Number);this.world.setBlock(h,u,d,e.edits[c]),this.fluidSim.activate(h,u,d)}this.world.editHook=(c,h,u)=>{for(const d in this.save.edits){const f=d.indexOf(","),g=d.indexOf(",",f+1),_=+d.slice(0,f),p=+d.slice(g+1);_>>4===c&&p>>4===h&&u.set(_&15,+d.slice(f+1,g),p&15,this.save.edits[d])}},this.texturePack=$i().texturePack,this.lightingQuality=$i().lightingQuality,this.renderDistance=$i().renderDistance;const s=Va(this.texturePack);this.chunks=new hd(this.renderer.scene,this.world,s),this.chunks.setLightingQuality($i().lightingQuality),this.setRenderDistance(this.renderDistance),this.crack=new aM(this.renderer.scene),this.dropRenderer=new NM(this.renderer.scene,s),this.arrowRenderer=new nS(this.renderer.scene),this.mobRenderer=new YS(this.renderer.scene),this.mobRng=$S((e.seed^2654435769)>>>0),this.spawnWorld={getBlock:(c,h,u)=>this.world.getBlock(c,h,u)},this.hand=new WM(s),this.particleFx=new zy(this.renderer.scene),this.skyObjects=new Qy(this.renderer.scene),this.skyObjects.setLightingQuality($i().lightingQuality),this.invUI=new Ly(document.getElementById("inventory")),this.furnaceUI=new ky(document.getElementById("furnace")),this.coordEl=document.createElement("div"),this.coordEl.style.cssText="position:fixed;left:8px;top:8px;z-index:30;padding:4px 8px;font:14px Zpix,monospace;color:#fff;background:rgba(0,0,0,.45);white-space:pre;display:none;pointer-events:none;text-shadow:1px 1px 0 #000;",document.body.appendChild(this.coordEl),this.furnaceUI.onChange=()=>this.hotbar.render(this.inv),this.invUI.onChange=()=>this.hotbar.render(this.inv),this.physWorld={isSolid:(c,h,u)=>Pe(this.world.getBlock(c,h,u)),isWater:(c,h,u)=>ln(this.world.getBlock(c,h,u))};const r=e.player;this.worldSpawn=this.findSpawn(e.seed);const o=r?{x:r.x,y:r.y,z:r.z}:this.worldSpawn;if(this.player={pos:{...o},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.chunks.update(ee(Math.floor(o.x)),ee(Math.floor(o.z)),2,999),e.mobs&&e.mobs.length)for(const c of e.mobs)this.mobs.push(NS(c));else for(let c=0;c<4;c++)this.mobs.push(...Lh(ou[c%4],o.x,o.z,this.mobRng,this.spawnWorld,this.surfaceY,6,26));if(e.furnaces)for(const[c,h]of Object.entries(e.furnaces))this.furnaces.set(c,h);const a=new Ve(1.001,1.001,1.001);this.highlight=new xv(new Sv(a),new Gu({color:0,transparent:!0,opacity:.35})),this.highlight.visible=!1,this.renderer.scene.add(this.highlight),this.look=new ay(t),this.look.yaw=r?r.yaw:Math.atan2(-o.z,-o.x),this.look.pitch=r?r.pitch:-.18,t.addEventListener("contextmenu",c=>c.preventDefault()),t.addEventListener("mousedown",c=>{if(document.pointerLockElement===t)if(c.button===0){const h=this.mobUnderCrosshair();if(h){this.attackMob(h);return}this.digging=!0,this.digTarget=null}else c.button===2&&this.onUseDown()});const l=()=>{this.digging=!1,this.digProgress=0,this.digTarget=null,this.crack.hide()};window.addEventListener("mouseup",c=>{c.button===0?l():c.button===2&&(this.releaseBow(),this.stopEating())}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==t&&(l(),this.drawingBow=!1,this.bowCharge=0,this.stopEating())}),window.addEventListener("keydown",c=>{if(c.code==="KeyE"){this.furnaceKey?this.closeFurnace():this.craftingGrid>0?this.closeCrafting():document.pointerLockElement===t&&this.openCrafting(2);return}if(c.code==="F3"){c.preventDefault(),this.coordOn=!this.coordOn,this.coordEl.style.display=this.coordOn?"block":"none";return}if(c.code==="Escape"&&this.furnaceKey){this.closeFurnace();return}if(c.code==="Escape"&&this.craftingGrid>0){this.closeCrafting();return}const h=Number(c.key);Number.isInteger(h)&&h>=1&&h<=tu&&this.hotbar.setSelected(h-1)}),t.addEventListener("wheel",c=>{c.preventDefault(),this.hotbar.scroll(Math.sign(c.deltaY))},{passive:!1})}snapshot(){this.save.player={x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.look.yaw,pitch:this.look.pitch},this.save.inv=iy(this.inv);const t=this.survival;return this.save.survival={health:t.health,food:t.food,saturation:t.saturation,exhaustion:t.exhaustion},this.save.worldTime=this.worldTime,this.save.mobs=this.mobs.map(IS),this.save.furnaces=Object.fromEntries(this.furnaces),this.save.lastPlayed=Date.now(),this.save}findSpawn(t){for(let e=1;e<160;e++)for(let n=-e;n<=e;n++)for(const[s,r]of[[n,-e],[n,e],[-e,n],[e,n]]){const o=Ce(s,r,t),a=(c,h)=>this.world.getBlock(c,o+1,h)===0&&this.world.getBlock(c,o+2,h)===0,l=this.world.getBlock(s,o,r)!==0&&this.world.getBlock(s,o-1,r)!==0&&this.world.getBlock(s,o-2,r)!==0;if(o>Se&&o<=Se+4&&l&&a(s,r)&&a(s+1,r)&&a(s-1,r)&&a(s,r+1)&&a(s,r-1))return{x:s+.5,y:o+1,z:r+.5}}return{x:.5,y:Se+3,z:.5}}async preloadSpawn(t=3){const e=ee(Math.floor(this.player.pos.x)),n=ee(Math.floor(this.player.pos.z));for(let l=-t;l<=t;l++)for(let c=-t;c<=t;c++)this.world.request(e+c,n+l);await new Promise(l=>{const c=()=>{let h=!0;for(let u=-t;u<=t&&h;u++)for(let d=-t;d<=t&&h;d++)this.world.peek(e+d,n+u)||(h=!1);h?l():setTimeout(c,30)};c()});const s=(t+1)*Tt,r=Math.floor(this.player.pos.x),o=Math.floor(this.player.pos.z);Nh(this.fluidSim,{isWater:(l,c,h)=>ln(this.world.getBlock(l,c,h)),isAir:(l,c,h)=>this.world.getBlock(l,c,h)===Xn},{minX:r-s,maxX:r+s,minZ:o-s,maxZ:o+s,minY:Math.max(1,Se-48),maxY:Math.min(me-1,Se+2)}),ZS(this.fluidSim,this.fluidGrid,1200);for(let l=-t;l<=t;l++)for(let c=-t;c<=t;c++)this.wateredChunks.add(`${e+c},${n+l}`);const a=Math.ceil((t*2+1)**2/4)+1;for(let l=0;l<a+240&&(this.chunks.update(e,n,t,4),this.chunks.flushMesh(8),await new Promise(c=>requestAnimationFrame(()=>c())),!(l>=a&&!this.chunks.meshBusy()));l++);}activateNearbyWater(){const n=ee(Math.floor(this.player.pos.x)),s=ee(Math.floor(this.player.pos.z)),r=Math.max(1,Se-48),o=Math.min(me-1,Se+2);let a=0;for(const l of jS(n,s,4,this.wateredChunks)){if(a>=3)break;const[c,h]=l.split(",").map(Number);this.world.peek(c,h)&&(Nh(this.fluidSim,{isWater:(u,d,f)=>ln(this.world.getBlock(u,d,f)),isAir:(u,d,f)=>this.world.getBlock(u,d,f)===Xn},{minX:c*Tt,maxX:c*Tt+Tt-1,minZ:h*Tt,maxZ:h*Tt+Tt-1,minY:r,maxY:o}),this.wateredChunks.add(l),a++)}}start(){this.last=performance.now();const t=e=>{requestAnimationFrame(t);const n=Math.min(e-this.last,100)/1e3;this.acc+=e-this.last,this.last=e,this.acc>250&&(this.acc=250);const s=document.pointerLockElement===this.canvas;for(;s&&this.acc>=Ca;){this.prev=this.player;const h=zh(),u=oy();this.creative&&u&&(this.flyTapWindow>0?(this.flying=!this.flying,this.flyTapWindow=0):this.flyTapWindow=6),this.flyTapWindow>0&&this.flyTapWindow--,this.creative||(this.flying=!1),this.crouching=this.flying?!1:h.crouch,this.player=QM(this.player,{forward:h.forward,right:h.right,yaw:this.look.yaw,jump:u,swimUp:h.jumpHeld,sprint:h.sprint,crouch:this.flying?!1:h.crouch,slow:this.eating,fly:this.flying,flyUp:h.jumpHeld,flyDown:h.crouch},this.physWorld),this.stepSurvival(h.sprint,u),++this.worldTime>=hn&&(this.worldTime=0),++this.fluidTick>=5&&(this.fluidTick=0,this.activateNearbyWater(),this.fluidSim.tick(this.fluidGrid),this.chunks.remeshDirty());for(const d of this.furnaces.values())Oy(d)&&Fy(d);this.furnaceKey&&this.furnaceUI.render(),this.tickMobs(),this.tickArrows(),this.tickLeafDecay(),this.acc-=Ca}s||(this.acc=0);const r=n>.026?3:(n>.018,4);this.chunks.update(ee(Math.floor(this.player.pos.x)),ee(Math.floor(this.player.pos.z)),this.renderDistance,r,Math.cos(this.look.yaw),Math.sin(this.look.yaw));const o=performance.now()+6;for(;this.chunks.meshQueueLen()>0&&performance.now()<o;)this.chunks.flushMesh(1);if(++this.evictCt>=45){this.evictCt=0;const h=Math.max(this.renderDistance+4,12);this.world.evictBeyond(ee(Math.floor(this.player.pos.x)),ee(Math.floor(this.player.pos.z)),h)}this.chunks.cullToView(this.player.pos.x,this.player.pos.z,Math.cos(this.look.yaw),Math.sin(this.look.yaw));const a=s&&zh().sprint?80:70;this.fov+=(a-this.fov)*.15,this.renderer.camera.fov=this.fov,this.renderer.camera.updateProjectionMatrix(),s?(this.updateMining(n),this.updateDrops(n),this.updateEating(n),this.updateBow(n),this.statusBar.render(this.survival),this.digging&&this.hand.swing()):this.crack.hide(),this.chunks.animateWater(n),this.updateDayNight(),this.skyObjects.update(this.worldTime,this.renderer.camera.position),++this.shadowTick>=6&&(this.shadowTick=0,this.chunks.updateSun(this.worldTime,this.player.pos.x,this.player.pos.y,this.player.pos.z),this.renderer.markShadowDirty()),this.updateWater(),this.updateHighlight(),this.updateCamera(this.acc/Ca),this.particles=i1(this.particles,n),this.particleFx.sync(this.particles),this.mobRenderer.sync(this.mobs,n),this.arrowRenderer.sync(this.arrows);const l=this.inv[this.hotbar.index];this.hand.setHeld(l?l.id:null),this.hand.setEating(s&&this.eating);const c=Math.min(1,Math.hypot(this.player.vel.x,this.player.vel.z)/.22);if(this.hand.update(n,s?c:0),this.hand.camera.aspect!==this.renderer.camera.aspect&&this.hand.resize(this.renderer.camera.aspect),this.coordOn){const h=this.player.pos,u=this.chunks.pipelineStats();this.coordEl.textContent=`XYZ  ${Math.floor(h.x)} / ${Math.floor(h.y)+a1} / ${Math.floor(h.z)}
区块 已上屏${u.meshed} 可见${u.visible} 派发中${u.pending} 待上屏${u.queued}`}this.updateGodRays(),this.renderer.render(),this.renderer.renderOverlay(this.hand.scene,this.hand.camera)};requestAnimationFrame(t)}stepSurvival(t,e){if(this.creative){this.fallDistance=0;return}this.hurtCd>0&&this.hurtCd--;const n=this.player.pos.x-this.prev.pos.x,s=this.player.pos.z-this.prev.pos.z,r=this.player.pos.y-this.prev.pos.y;t&&_i(this.survival,h1*Math.hypot(n,s)),e&&_i(this.survival,t?d1:u1);const o=Math.floor(this.player.pos.x),a=Math.floor(this.player.pos.z),l=ln(this.world.getBlock(o,Math.floor(this.player.pos.y),a)),c=my(this.fallDistance,r,this.player.onGround,l);this.fallDistance=c.fallDistance,c.damage>0&&(io(this.survival,c.damage),_i(this.survival,p1),this.flashHurt()),s1(this.player.pos.x,this.player.pos.y,this.player.pos.z,(d,f,g)=>this.world.getBlock(d,f,g))&&this.hurtPlayer(1,0,0);const h=ln(this.world.getBlock(o,Math.floor(this.player.pos.y+Gn),a)),u=this.survival.health;_y(this.survival,h),this.survival.health<u&&this.flashHurt(),gy(this.survival),Wh(this.survival)&&!this.dead&&this.die()}flashHurt(){this.hand.hurtShake();const t=document.getElementById("hurt");t&&(t.classList.remove("flash"),t.offsetWidth,t.classList.add("flash"))}hurtPlayer(t,e,n){if(this.creative||this.hurtCd>0)return;this.hurtCd=10,io(this.survival,t),this.flashHurt();const s=Math.hypot(e,n)||1;this.player.kbx=e/s*cu,this.player.kbz=n/s*cu,this.player.vel.y=b1,Wh(this.survival)&&!this.dead&&this.die()}die(){this.dead=!0,this.digging=!1,this.stopEating();const t=Math.floor(this.player.pos.x),e=Math.floor(this.player.pos.y),n=Math.floor(this.player.pos.z);for(let s=0;s<this.inv.length;s++){const r=this.inv[s];r&&r.count>0&&this.drops.push(bn(r.id,t,e,n,Math.random,r.count,r.dur)),this.inv[s]=null}this.hotbar.render(this.inv),this.dropRenderer.sync(this.drops),document.exitPointerLock()}isDead(){return this.dead}setTexturePack(t){if(t===this.texturePack)return;this.texturePack=t;const e=Va(t);this.chunks.setAtlas(e),this.hand.setAtlas(e),this.dropRenderer.setAtlas(e)}setLightingQuality(t){this.lightingQuality=t,this.chunks.setLightingQuality(t),this.skyObjects.setLightingQuality(t),t==="off"&&this.renderer.setGodRays(null)}setRenderDistance(t){this.renderDistance=t;const e=t*16;this.normalFog instanceof ls&&(this.normalFog.near=e*.5,this.normalFog.far=e),this.chunks.setFogFar(e)}respawn(){this.survival=va(),this.dead=!1,this.fallDistance=0;const t=this.worldSpawn;this.player={pos:{...t},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.chunks.update(ee(Math.floor(t.x)),ee(Math.floor(t.z)),2,999),this.statusBar.render(this.survival)}onUseDown(){const t=this.rayHit();if(t&&this.world.getBlock(t.x,t.y,t.z)===jv){this.openCrafting(3);return}if(t&&this.world.getBlock(t.x,t.y,t.z)===eh){this.openFurnace(t.x,t.y,t.z);return}const e=this.inv[this.hotbar.index];if(e&&e.id===Ds&&ey(this.inv,ts)>0){this.drawingBow=!0,this.bowCharge=0;return}e&&e.count>0&&gh(e.id)&&this.survival.food<Os?(this.eating=!0,this.eatProgress=0):this.placeBlock()}updateBow(t){if(!this.drawingBow)return;const e=this.inv[this.hotbar.index];if(!e||e.id!==Ds){this.drawingBow=!1,this.bowCharge=0;return}this.bowCharge=Math.min(this.bowCharge+t,au)}releaseBow(){if(!this.drawingBow)return;this.drawingBow=!1;const t=this.bowCharge;this.bowCharge=0;const e=this.inv[this.hotbar.index];if(!e||e.id!==Ds||t<Ra||ny(this.inv,ts,1)<1)return;this.hotbar.render(this.inv);const n=(t-Ra)/(au-Ra),s=lu+n*(y1-lu),r=Math.max(1,Math.round(2+n*(E1-2))),o=Math.cos(this.look.yaw),a=Math.sin(this.look.yaw),l=Math.cos(this.look.pitch),c=Math.sin(this.look.pitch),h=this.player.pos.x,u=this.player.pos.y+Gn,d=this.player.pos.z;this.arrows.push(Th(h+o*l*.4,u+c*.4,d+a*l*.4,o*l,c,a*l,s,!0,r)),this.hand.swing()}isCraftingOpen(){return this.craftingGrid>0}openCrafting(t){this.craftingGrid=t,this.invUI.show(this.inv,t),document.exitPointerLock()}closeCrafting(){this.craftingGrid=0,this.invUI.hide(),this.canvas.requestPointerLock()}openFurnace(t,e,n){const s=`${t},${e},${n}`;let r=this.furnaces.get(s);r||(r=Ny(),this.furnaces.set(s,r)),this.furnaceKey=s,this.furnaceUI.show(this.inv,r),document.exitPointerLock()}closeFurnace(){this.furnaceKey=null,this.furnaceUI.hide(),this.canvas.requestPointerLock()}stopEating(){this.eating=!1,this.eatProgress=0}updateEating(t){if(!this.eating)return;const e=this.hotbar.index,n=this.inv[e];if(!n||n.count<=0||!gh(n.id)||this.survival.food>=Os){this.eatProgress=0;return}if(this.eatProgress+=t,this.eatFxT+=t,this.eatFxT>=.09){this.eatFxT=0;const s=Math.cos(this.look.yaw),r=Math.sin(this.look.yaw),o=Math.cos(this.look.pitch),a=Math.sin(this.look.pitch),l=this.player.pos.x+s*o*.4,c=this.player.pos.y+Gn-.18+a*.4,h=this.player.pos.z+r*o*.4;this.particles.push(...ui(l,c,h,Xi(n.id),2))}if(this.eatProgress>=c1){const s=wM(n.id),r=Fh(this.inv,e);s&&r!==null&&(fy(this.survival,s),this.hotbar.render(this.inv)),this.eatProgress=0}}rayHit(){const t={x:this.player.pos.x,y:this.player.pos.y+Gn,z:this.player.pos.z},e=Math.cos(this.look.yaw),n=Math.sin(this.look.yaw),s=Math.cos(this.look.pitch),r=Math.sin(this.look.pitch),o={x:e*s,y:r,z:n*s};return ah(t,o,r1,(a,l,c)=>hx(this.world.getBlock(a,l,c)))}edit(t,e,n,s){this.world.setBlock(t,e,n,s),this.save.edits[`${t},${e},${n}`]=s,this.fluidSim.activate(t,e,n),this.chunks.remeshDirty()}queueLeafDecay(t,e,n){for(const s of Ox((r,o,a)=>this.world.getBlock(r,o,a),t,e,n))this.decayQueue.some(r=>r.x===s.x&&r.y===s.y&&r.z===s.z)||this.decayQueue.push({x:s.x,y:s.y,z:s.z,t:40+Math.floor(Math.random()*160)})}tickLeafDecay(){if(this.decayQueue.length!==0)for(let t=this.decayQueue.length-1;t>=0;t--){const e=this.decayQueue[t];--e.t>0||(this.decayQueue.splice(t,1),this.world.getBlock(e.x,e.y,e.z)===xi&&(this.edit(e.x,e.y,e.z,Xn),this.particles.push(...ui(e.x+.5,e.y+.5,e.z+.5,Xi(xi),8)),Math.random()<nu&&this.drops.push(bn(Zr,e.x,e.y,e.z))))}}updateMining(t){if(!this.digging){this.crack.hide();return}const e=this.rayHit();if(!e){this.digProgress=0,this.digTarget=null,this.crack.hide();return}(!this.digTarget||this.digTarget.x!==e.x||this.digTarget.y!==e.y||this.digTarget.z!==e.z)&&(this.digTarget={x:e.x,y:e.y,z:e.z},this.digProgress=0);const n=this.world.getBlock(e.x,e.y,e.z);if(Qu(n)<0){this.crack.hide();return}const s=this.creative?0:fx(n,this.heldTool())/1e3;if(s<=0){this.mineBlock(e.x,e.y,e.z,n);return}this.digProgress+=t,this.digProgress>=s?this.mineBlock(e.x,e.y,e.z,n):(this.crack.show(e.x,e.y,e.z,this.digProgress/s),this.digFxT+=t,this.digFxT>=.07&&(this.digFxT=0,this.particles.push(...ui(e.x+.5,e.y+.5,e.z+.5,Xi(n),3))))}heldTool(){const t=this.inv[this.hotbar.index];return t?Us(t.id):null}mineBlock(t,e,n,s){if(Mi(s)){this.edit(t,e,n,Xn),this.particles.push(...ui(t+.5,e+.5,n+.5,Xi(s),6)),this.digProgress=0,this.digTarget=null,this.crack.hide();return}let r=this.creative?null:px(s,this.heldTool());r===Jv&&Math.random()<.1&&(r=bd),this.edit(t,e,n,Xn);const o=this.world.getBlock(t,e+1,n);if(Mi(o)&&(this.edit(t,e+1,n,Xn),this.particles.push(...ui(t+.5,e+1.5,n+.5,Xi(o),6))),this.particles.push(...ui(t+.5,e+.5,n+.5,Xi(s),16)),r!==null&&this.drops.push(bn(r,t,e,n)),!this.creative&&s===xi&&Math.random()<nu&&this.drops.push(bn(Zr,t,e,n)),s===po&&this.queueLeafDecay(t,e,n),s===eh){const c=this.furnaces.get(`${t},${e},${n}`);if(c){const h=[[c.input,c.inputN],[c.fuel,c.fuelN],[c.output,c.outputN]];for(const[u,d]of h)d>0&&this.drops.push(bn(u,t,e,n,Math.random,d));this.furnaces.delete(`${t},${e},${n}`)}}_i(this.survival,f1);const a=this.inv[this.hotbar.index],l=a?Us(a.id):null;l&&(Oh(this.inv,this.hotbar.index,l.maxDurability),this.hotbar.render(this.inv)),this.digProgress=0,this.digTarget=null,this.crack.hide()}updateDrops(t){const e=this.player.pos.x,n=this.player.pos.y+.9,s=this.player.pos.z;PM(this.drops,jr);for(let r=this.drops.length-1;r>=0;r--){const o=this.drops[r];if(LM(o,this.physWorld,t),o.age>o1){this.drops.splice(r,1);continue}if(DM(o,e,n,s))if(o.dur!==void 0)ty(this.inv,o.id,o.dur)&&(this.drops.splice(r,1),this.hotbar.render(this.inv));else{const a=cs(this.inv,o.id,o.count,jr(o.id));a<o.count&&this.hotbar.render(this.inv),a===0?this.drops.splice(r,1):o.count=a}}this.dropRenderer.sync(this.drops)}tickMobs(){const t=this.player.pos.x,e=this.player.pos.z,n={x:t,y:this.player.pos.y,z:e};let s=0,r=0,o=0;for(let a=this.mobs.length-1;a>=0;a--){const l=this.mobs[a],c=l.pos.x-t,h=l.pos.z-e,u=c*c+h*h;if(u>su*su){this.mobs.splice(a,1);continue}const d=sS(l.kind);d&&o++,u<ru*ru&&(s++,d&&r++);const f=d?AS(l,this.physWorld,this.mobRng,n,this.isSunlit(l)):uS(l,this.physWorld,this.mobRng);Object.assign(l,f.mob);let g=!1;for(const _ of f.events)if(_.kind==="layEgg")this.drops.push(bn(Sd,Math.floor(_.pos.x),Math.floor(_.pos.y),Math.floor(_.pos.z)));else if(_.kind==="attackPlayer")this.hurtPlayer(_.damage,t-l.pos.x,e-l.pos.z),l.kind==="husk"&&_i(this.survival,3);else if(_.kind==="shootArrow")this.arrows.push(Th(_.from.x,_.from.y,_.from.z,_.dir.x,_.dir.y,_.dir.z,Dd,!1,_.damage));else if(_.kind==="explode")this.explode(_.pos,_.radius,_.damage);else if(_.kind==="drops")for(const p of _.items)this.drops.push(bn(p.id,Math.floor(_.pos.x),Math.floor(_.pos.y),Math.floor(_.pos.z),Math.random,p.count));else _.kind==="death"&&(g=!0);g&&this.mobs.splice(a,1)}if(++this.mobSpawnTick>=x1){if(this.mobSpawnTick=0,s<g1&&this.mobs.length<iu){const l=this.player.vel,c=Math.hypot(l.x,l.z)>.001?Math.atan2(l.z,l.x):null;this.mobs.push(...Lh(ou[Math.floor(this.mobRng()*4)],t,e,this.mobRng,this.spawnWorld,this.surfaceY,24,44,c,Math.PI/2))}let a=Math.min(v1-o,iu-this.mobs.length);if(r<_1&&a>0){const l=this.mobRng(),c=Yi(t,e,this.save.seed),h=RS(c,l),u=DS(h,t,this.player.pos.y,e,this.mobRng,this.spawnWorld,this.surfaceY).slice(0,a);this.mobs.push(...u),a-=u.length,a>0&&(ha(this.worldTime).isNight||jn[h].sunImmune)&&this.mobs.push(...LS(h,t,e,this.mobRng,this.spawnWorld,this.surfaceY).slice(0,a))}}}explode(t,e,n){const s=Math.floor(t.x),r=Math.floor(t.y),o=Math.floor(t.z),a=e*e,l=Math.ceil(e);for(let g=-l;g<=l;g++)for(let _=-l;_<=l;_++)for(let p=-l;p<=l;p++){if(p*p+g*g+_*_>a)continue;const m=s+p,M=r+g,v=o+_,T=this.world.getBlock(m,M,v);!Pe(T)&&!Mi(T)||(this.world.setBlock(m,M,v,Xn),this.save.edits[`${m},${M},${v}`]=Xn,this.fluidSim.activate(m,M,v))}this.chunks.remeshDirty(),this.particles.push(...ui(t.x,t.y+.4,t.z,[.33,.33,.33],30));const c=this.player.pos,h=c.x-t.x,u=c.z-t.z,d=Math.hypot(h,c.y+.9-t.y,u),f=Math.round(n*(1-d/(e+1.5)));f>0&&this.hurtPlayer(f,h,u)}isSunlit(t){return FS(t,this.world,ha(this.worldTime).isNight)}tickArrows(){const t=(e,n,s,r,o,a,l,c)=>e>=r-l&&e<=r+l&&n>=a&&n<=a+c&&s>=o-l&&s<=o+l;for(let e=this.arrows.length-1;e>=0;e--){const n=this.arrows[e];if(n.age>M1){this.arrows.splice(e,1);continue}if(n.stuck){if(n.age++,n.age>S1){const d=n.x-this.player.pos.x,f=n.y-(this.player.pos.y+.9),g=n.z-this.player.pos.z;d*d+f*f+g*g<1.4*1.4&&cs(this.inv,ts,1)===0&&(this.hotbar.render(this.inv),this.arrows.splice(e,1))}continue}const s=n.x,r=n.y,o=n.z;tS(n,this.physWorld);const a=n.x-s,l=n.y-r,c=n.z-o,h=Math.max(1,Math.ceil(Math.hypot(a,l,c)/.2));let u=!1;for(let d=1;d<=h&&!u;d++){const f=d/h,g=s+a*f,_=r+l*f,p=o+c*f;if(n.fromPlayer)for(const m of this.mobs){const M=jn[m.kind];if(t(g,_,p,m.pos.x,m.pos.z,m.pos.y,M.width/2,M.height)){this.damageMobWithArrow(m,n),u=!0;break}}else t(g,_,p,this.player.pos.x,this.player.pos.z,this.player.pos.y,Qr/2,bi)&&(this.hurtPlayer(n.damage,n.vx,n.vz),u=!0)}u&&this.arrows.splice(e,1)}}damageMobWithArrow(t,e){const n=Rh(t,e.damage,{x:e.vx,z:e.vz},this.mobRng);Object.assign(t,n.mob);for(const s of n.events)if(s.kind==="drops")for(const r of s.items)this.drops.push(bn(r.id,Math.floor(s.pos.x),Math.floor(s.pos.y),Math.floor(s.pos.z),Math.random,r.count));else if(s.kind==="death"){const r=this.mobs.indexOf(t);r>=0&&this.mobs.splice(r,1)}}mobUnderCrosshair(){const t=this.player.pos.x,e=this.player.pos.y+Gn,n=this.player.pos.z,s=Math.cos(this.look.yaw),r=Math.sin(this.look.yaw),o=Math.cos(this.look.pitch),a=Math.sin(this.look.pitch),l=s*o,c=a,h=r*o;let u=null,d=m1;for(const f of this.mobs){const g=jn[f.kind],_=g.width/2,p=w1(t,e,n,l,c,h,f.pos.x-_,f.pos.y,f.pos.z-_,f.pos.x+_,f.pos.y+g.height,f.pos.z+_);p!==null&&p<d&&(d=p,u=f)}return u!==null&&ah({x:t,y:e,z:n},{x:l,y:c,z:h},d,(g,_,p)=>Pe(this.world.getBlock(g,_,p)))?null:u}attackMob(t){this.hand.swing();const e=this.inv[this.hotbar.index],n=T1(e?e.id:null),s=e?Us(e.id):null;if(s){for(let l=s.kind==="sword"?1:2;l>0;l--)Oh(this.inv,this.hotbar.index,s.maxDurability);this.hotbar.render(this.inv)}const r=Math.cos(this.look.yaw),o=Math.sin(this.look.yaw),a=Rh(t,n,{x:r,z:o},this.mobRng);Object.assign(t,a.mob);for(const l of a.events)if(l.kind==="drops")for(const c of l.items)this.drops.push(bn(c.id,Math.floor(l.pos.x),Math.floor(l.pos.y),Math.floor(l.pos.z),Math.random,c.count));else if(l.kind==="death"){const c=this.mobs.indexOf(t);c>=0&&this.mobs.splice(c,1)}}placeBlock(){const t=this.hotbar.index,e=this.inv[t];if(!e||e.count<=0||e.id>=256)return;const n=this.rayHit();if(!n)return;const s=ih(this.world.getBlock(n.x,n.y,n.z)),r=s?n.x:n.x+n.nx,o=s?n.y:n.y+n.ny,a=s?n.z:n.z+n.nz,l=this.world.getBlock(r,o,a);if(!ih(l)||this.overlapsPlayer(r,o,a))return;const c=this.creative?e.id:Fh(this.inv,t);c!==null&&(this.edit(r,o,a,c),this.hotbar.render(this.inv),this.hand.swing())}overlapsPlayer(t,e,n){const s=this.player.pos,r=Qr/2;return t<s.x+r&&t+1>s.x-r&&e<s.y+bi&&e+1>s.y&&n<s.z+r&&n+1>s.z-r}updateDayNight(){const t=ha(this.worldTime);this.renderer.setSkyColors(t.skyTop,t.skyHorizon);const e=this.normalFog;e&&e.color.setRGB(t.skyHorizon[0],t.skyHorizon[1],t.skyHorizon[2],oe);const n=t.worldTint,s=Math.max(n[0],n[1],n[2],.001),r=1-hh(this.worldTime)/11;this.chunks.setTint([n[0]/s,n[1]/s*(1-r*.05),n[2]/s*(1-r*.15)]);const o=hh(this.worldTime);this.chunks.setSkyDarken(o),this.chunks.setSkyMul(1-o/11),this.chunks.setSkyReflection(t.skyHorizon,t.skyTop);const a=this.worldTime/hn*Math.PI*2;this.chunks.setSunDir(Math.cos(a),Math.sin(a),.35)}updateGodRays(){if(this.lightingQuality==="off")return;const t=this.worldTime/hn*Math.PI*2,e=Math.cos(t),n=Math.sin(t),s=.35,r=Math.hypot(e,n,s)||1,o=n/r,a=this.renderer.camera;a.getWorldDirection(this._godFwd);const l=this._godFwd.x*(e/r)+this._godFwd.y*(n/r)+this._godFwd.z*(s/r),c=500;this._godSunWorld.set(a.position.x+e/r*c,a.position.y+n/r*c,a.position.z+s/r*c),this._godSunWorld.project(a);const h=this._godSunWorld,u=h.x*.5+.5,d=h.y*.5+.5,f=u>=0&&u<=1&&d>=0&&d<=1;let g=0;o>0&&l>0&&f&&(g=Math.min(.6,o*2.5));const _=1,p=.6+o*.7,m=.3+o*1;this._godSunColor.setRGB(_,Math.min(1,p),Math.min(1,m)),this._godSunUV.set(u,d),this.renderer.setGodRays({quality:this.lightingQuality,sunUV:this._godSunUV,intensity:g,sunColor:this._godSunColor})}updateWater(){const t=Math.floor(this.player.pos.x),e=Math.floor(this.player.pos.y+Gn),n=Math.floor(this.player.pos.z),s=ln(this.world.getBlock(t,e,n));this.renderer.scene.fog=s?this.underFog:this.normalFog,this.underwaterEl&&(this.underwaterEl.style.display=s?"block":"none")}updateHighlight(){const t=this.rayHit();t?(this.highlight.position.set(t.x+.5,t.y+.5,t.z+.5),this.highlight.visible=!0):this.highlight.visible=!1}updateCamera(t){const e=this.prev.pos,n=this.player.pos,s=e.x+(n.x-e.x)*t,r=e.y+(n.y-e.y)*t,o=e.z+(n.z-e.z)*t,a=this.renderer.camera;this.camEye+=((this.crouching?qM:Gn)-this.camEye)*.3;const l=this.camEye;a.position.set(s,r+l,o);const c=Math.cos(this.look.yaw),h=Math.sin(this.look.yaw),u=Math.cos(this.look.pitch),d=Math.sin(this.look.pitch);a.lookAt(s+c*u,r+l+d,o+h*u)}}const Pa=4;class C1{constructor(t,e=4242){b(this,"gl");b(this,"scene",new Jn);b(this,"camera",new He(70,1,.1,1e3));b(this,"world");b(this,"chunks");b(this,"running",!1);b(this,"x",.5);b(this,"z",.5);b(this,"heading",.7);b(this,"y",175);b(this,"onResize",()=>this.resize());this.gl=new Hu({canvas:t,antialias:!1}),this.gl.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene.background=Lv(),this.scene.fog=new ls(Wu,40,Pa*16),this.world=new id(e),this.seekWater(),this.chunks=new hd(this.scene,this.world,Va()),this.chunks.update(ee(Math.floor(this.x)),ee(Math.floor(this.z)),Pa,999),this.resize(),window.addEventListener("resize",this.onResize)}seekWater(){for(let t=4;t<120;t+=3)for(let e=0;e<12;e++){const n=e/12*Math.PI*2,s=Math.round(Math.cos(n)*t),r=Math.round(Math.sin(n)*t);if(ln(this.world.getBlock(s,Se,r))){this.heading=n,this.x=s-Math.cos(n)*14+.5,this.z=r-Math.sin(n)*14+.5;return}}}resize(){const t=window.innerWidth,e=window.innerHeight;this.gl.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}async preload(t=Pa){const e=ee(Math.floor(this.x)),n=ee(Math.floor(this.z));for(let s=-t;s<=t;s++)for(let r=-t;r<=t;r++)this.world.request(e+r,n+s);await new Promise(s=>{const r=()=>{let o=!0;for(let a=-t;a<=t&&o;a++)for(let l=-t;l<=t&&o;l++)this.world.peek(e+l,n+a)||(o=!1);o?s():setTimeout(r,30)};r()});for(let s=0;s<600&&(s<3||this.chunks.meshBusy());s++)this.chunks.update(e,n,t,999),this.chunks.flushMesh(999),await new Promise(r=>requestAnimationFrame(()=>r()))}start(){if(this.running)return;this.running=!0;const t=()=>{this.running&&(requestAnimationFrame(t),this.heading+=6e-4,this.camera.position.set(this.x,this.y,this.z),this.camera.lookAt(this.x+Math.cos(this.heading)*26,this.y-17,this.z+Math.sin(this.heading)*26),this.chunks.flushMesh(2),this.gl.render(this.scene,this.camera))};requestAnimationFrame(t)}stop(){this.running=!1}dispose(){this.running=!1,window.removeEventListener("resize",this.onResize),this.chunks.dispose(),this.world.dispose(),this.gl.dispose(),this.gl.forceContextLoss()}}const Wd="mineworld.saves";function pl(){try{const i=localStorage.getItem(Wd);return i?JSON.parse(i):[]}catch{return[]}}function Xd(i){try{localStorage.setItem(Wd,JSON.stringify(i))}catch(t){console.warn("[mineworld] 存档写入失败(localStorage 配额满或不可用):",t)}}function R1(){return pl().sort((i,t)=>t.lastPlayed-i.lastPlayed)}function P1(i){const t=i.trim();if(!t)return null;if(/^-?\d+$/.test(t))return Math.abs(Math.floor(Number(t)))%2e9;let e=0;for(let n=0;n<t.length;n++)e=Math.imul(e,31)+t.charCodeAt(n)|0;return Math.abs(e)%2e9}function L1(i,t,e="survival"){const n={id:`${Date.now().toString(36)}-${Math.floor(Math.random()*1e6).toString(36)}`,name:i.trim()||"新的世界",seed:t??Math.floor(Math.random()*2e9),gameMode:e,lastPlayed:Date.now(),edits:{}};return Xs(n),n}function Xs(i){const t=pl().filter(e=>e.id!==i.id);t.push(i),Xd(t)}function D1(i){Xd(pl().filter(t=>t.id!==i))}function U1(){if(document.getElementById("mw-settings-css"))return;const i=document.createElement("style");i.id="mw-settings-css",i.textContent=`
    #settings input[type=range]{-webkit-appearance:none;appearance:none;height:20px;background:transparent;cursor:pointer;}
    #settings input[type=range]::-webkit-slider-runnable-track{height:12px;border:2px solid #5a7390;border-radius:0;box-sizing:border-box;
      background:linear-gradient(to right,#6ab0ff 0,#6ab0ff var(--fill,70%),#16212e var(--fill,70%));}
    #settings input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:10px;height:20px;margin-top:-6px;
      background:#dce8f2;border:2px solid #2a3b4d;border-radius:0;box-sizing:border-box;}
    #settings input[type=range]::-moz-range-track{height:12px;border:2px solid #5a7390;border-radius:0;box-sizing:border-box;background:#16212e;}
    #settings input[type=range]::-moz-range-progress{height:12px;background:#6ab0ff;}
    #settings input[type=range]::-moz-range-thumb{width:10px;height:20px;background:#dce8f2;border:2px solid #2a3b4d;border-radius:0;box-sizing:border-box;}
    #settings input[type=checkbox]{-webkit-appearance:none;appearance:none;width:22px;height:22px;box-sizing:border-box;margin:0;
      background:#16212e;border:2px solid #5a7390;border-radius:0;cursor:pointer;position:relative;}
    #settings input[type=checkbox]:checked{background:#6ab0ff;}
    #settings input[type=checkbox]:checked::after{content:'';position:absolute;inset:4px;background:#0e1a28;}`,document.head.appendChild(i)}class I1{constructor(t){b(this,"root");b(this,"settings");b(this,"onChange",null);this.root=t,this.settings=$i(),t.classList.remove("hidden"),U1(),t.style.cssText="position:fixed;inset:0;z-index:40;display:none;align-items:center;justify-content:center;background:#0e1a28;",t.innerHTML=`
      <div class="settings-card" style="width:min(560px,90vw);color:#dce8f2;font-family:'Zpix',monospace;display:flex;flex-direction:column;gap:24px;">
        <h2 class="screen-title" style="margin:0 0 4px;text-align:center;">设置</h2>
        <label style="display:flex;align-items:center;gap:12px;">
          <span style="width:108px;">音量</span>
          <input id="set-vol" type="range" min="0" max="100" style="flex:1;" />
          <span id="set-vol-val" style="width:46px;text-align:right;"></span>
        </label>
        <div style="font-size:12px;color:#8aa;margin-top:-10px;margin-left:120px;">音效尚未开发，先存着</div>
        <label style="display:flex;align-items:center;gap:12px;">
          <span style="width:108px;">光影</span>
          <select id="set-lighting" style="background:#16212e;color:#dce8f2;border:2px solid #5a7390;padding:2px 6px;font-family:'Zpix',monospace;font-size:14px;cursor:pointer;">
            <option value="off">关</option>
            <option value="standard">标准</option>
            <option value="high">高</option>
          </select>
        </label>
        <div style="display:flex;align-items:center;gap:12px;">
          <span style="width:108px;">材质</span>
          <button id="set-tex-cartoon" class="btn" type="button">卡通</button>
          <button id="set-tex-classic" class="btn" type="button">经典</button>
        </div>
        <label style="display:flex;align-items:center;gap:12px;">
          <span style="width:108px;">渲染距离</span>
          <input id="set-rd" type="range" min="3" max="12" style="flex:1;" />
          <span id="set-rd-val" style="width:46px;text-align:right;"></span>
        </label>
        <div style="font-size:12px;color:#8aa;margin-top:-10px;margin-left:120px;">小=白雾更近、更流畅；大=看得远、更吃性能</div>
        <button id="set-close" class="btn btn-wide" type="button" style="margin-top:6px;">返回</button>
      </div>`;const e=t.querySelector("#set-vol"),n=t.querySelector("#set-vol-val"),s=t.querySelector("#set-lighting"),r=t.querySelector("#set-tex-cartoon"),o=t.querySelector("#set-tex-classic"),a=()=>{r.classList.toggle("active",this.settings.texturePack==="cartoon"),o.classList.toggle("active",this.settings.texturePack==="classic"),r.style.outline=this.settings.texturePack==="cartoon"?"2px solid #6ab0ff":"none",o.style.outline=this.settings.texturePack==="classic"?"2px solid #6ab0ff":"none"},l=()=>{var g;Hx(this.settings),(g=this.onChange)==null||g.call(this,this.settings)},c=g=>{this.settings={...this.settings,texturePack:g},a(),l()},h=()=>e.style.setProperty("--fill",`${this.settings.volume}%`);e.addEventListener("input",()=>{this.settings={...this.settings,volume:Number(e.value)},n.textContent=`${this.settings.volume}%`,h(),l()}),s.addEventListener("change",()=>{this.settings={...this.settings,lightingQuality:s.value},l()}),r.addEventListener("click",()=>c("cartoon")),o.addEventListener("click",()=>c("classic"));const u=t.querySelector("#set-rd"),d=t.querySelector("#set-rd-val"),f=()=>u.style.setProperty("--fill",`${(this.settings.renderDistance-3)/9*100}%`);u.addEventListener("input",()=>{this.settings={...this.settings,renderDistance:Number(u.value)},d.textContent=String(this.settings.renderDistance),f(),l()}),t.querySelector("#set-close").addEventListener("click",()=>this.hide()),e.value=String(this.settings.volume),n.textContent=`${this.settings.volume}%`,h(),s.value=this.settings.lightingQuality,u.value=String(this.settings.renderDistance),d.textContent=String(this.settings.renderDistance),f(),a()}get current(){return this.settings}show(){this.root.style.display="flex"}hide(){this.root.style.display="none"}get visible(){return this.root.style.display!=="none"}}const hs=document.getElementById("app"),Wt=i=>document.getElementById(i),qd=Wt("menubg");let nn=new C1(qd);const oo=Wt("menu"),qa=Wt("worldlist"),Ya=Wt("pause"),La=Wt("world-rows");let re=null;const go=Wt("boot"),N1=go.querySelector(".boot-tip"),mn=(i,t="加载中…")=>{go.classList.toggle("hidden",!i),i&&(N1.textContent=t)};let Yd=!1;const $d=i=>{Yd||mn(!0,`出错了：${i}（请把这行字发给开发）`)};window.addEventListener("error",i=>$d(i.message||String(i.error)));window.addEventListener("unhandledrejection",i=>$d(String(i.reason&&(i.reason.message||i.reason.stack)||i.reason)));const ao=["100% 纯方块!","无限的世界!","由 Three.js 驱动!","会挖会放会跳!","试试双击 W 疾跑~","支持 WebGL2!","像素手工打造!","水快会流动了!","也试试我的世界!"];Wt("splash").textContent=ao[Math.floor(Math.random()*ao.length)];const hu=go.querySelector(".boot-splash");hu&&(hu.textContent=ao[Math.floor(Math.random()*ao.length)]);const kr=["提示: 按住左键挖方块","提示: 双击 W 可以疾跑","提示: 右键放方块(会消耗物品)","提示: 数字键 1-9 / 滚轮 切换物品","提示: 石头要用镐才挖得动","提示: 砍树 → 木板 → 工作台 → 工具","提示: 熔炉能把铁矿炼成铁锭","提示: 天黑了小心怪物"],Da=go.querySelector(".boot-hint");if(Da){let i=Math.floor(Math.random()*kr.length);Da.textContent=kr[i],setInterval(()=>{i=(i+1)%kr.length,Da.textContent=kr[i]},2600)}function $a(i){Wt("crosshair").style.display=i?"block":"none",Wt("hotbar").style.display=i?"flex":"none",Wt("status").style.display=i?"flex":"none"}function _o(i){for(const e of[oo,qa,Ya])e.classList.add("hidden");Wt("newworld").classList.add("hidden"),i&&i.classList.remove("hidden"),$a(!1);const t=i===oo||i===qa;qd.style.display=t?"block":"none",t?nn==null||nn.start():nn==null||nn.stop()}const Kd=i=>new Promise(t=>setTimeout(t,i));(async()=>{mn(!0,"加载中…");try{nn&&await Promise.race([nn.preload(),Kd(8e3)])}catch(i){console.error("[menubg] preload 失败:",i)}_o(oo),mn(!1)})();const ml=new I1(Wt("settings"));ml.onChange=i=>{re==null||re.setTexturePack(i.texturePack),re==null||re.setLightingQuality(i.lightingQuality),re==null||re.setRenderDistance(i.renderDistance)};Wt("settings-btn").addEventListener("click",()=>ml.show());Wt("settings-btn-pause").addEventListener("click",()=>ml.show());Wt("play").addEventListener("click",()=>F1());Wt("fullscreen").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()});Wt("about").addEventListener("click",()=>Wt("about-panel").classList.remove("hidden"));Wt("about-close").addEventListener("click",()=>Wt("about-panel").classList.add("hidden"));function F1(){Zd(),_o(qa)}function Zd(){La.innerHTML="";const i=R1();if(i.length===0){const t=document.createElement("div");t.className="world-empty",t.textContent="还没有世界, 点 创建新世界 开始吧",La.appendChild(t);return}for(const t of i){const e=document.createElement("div");e.className="world-row";const n=document.createElement("span");n.className="wname",n.textContent=t.name;const s=document.createElement("span");s.className="wmeta",s.textContent=`种子 ${t.seed}${t.gameMode==="creative"?" · 创造":""}`;const r=document.createElement("span");r.className="wdel",r.textContent="删除",r.addEventListener("click",o=>{o.stopPropagation(),D1(t.id),Zd()}),e.append(n,s,r),e.addEventListener("click",()=>Jd(t)),La.appendChild(e)}}const gl=Wt("newworld"),lo=Wt("nw-name"),_l=Wt("nw-seed"),O1=Wt("nw-mode-desc");let jd="survival";function vl(i){jd=i,Wt("nw-survival").classList.toggle("active",i==="survival"),Wt("nw-creative").classList.toggle("active",i==="creative"),O1.textContent=i==="creative"?"无限方块、自由飞行（双击空格）、无敌不饿——专心建造。":"挖矿、合成、打怪，会饿会死。"}function Qd(){const i=L1(lo.value,P1(_l.value)??void 0,jd);gl.classList.add("hidden"),Jd(i)}Wt("nw-survival").addEventListener("click",()=>vl("survival"));Wt("nw-creative").addEventListener("click",()=>vl("creative"));Wt("create-world").addEventListener("click",()=>{lo.value="",_l.value="",vl("survival"),gl.classList.remove("hidden"),lo.focus()});Wt("nw-create").addEventListener("click",Qd);Wt("nw-cancel").addEventListener("click",()=>gl.classList.add("hidden"));for(const i of[lo,_l])i.addEventListener("keydown",t=>{t.key==="Enter"&&Qd()});Wt("worldlist-back").addEventListener("click",()=>_o(oo));function Jd(i){if(!re){_o(null),mn(!0,"进入中…");try{nn==null||nn.dispose()}catch(t){console.error("[startGame] 菜单背景释放出错(忽略,继续):",t)}nn=null,requestAnimationFrame(()=>requestAnimationFrame(async()=>{try{mn(!0,"进入中…①构建世界"),re=new A1(hs,i),mn(!0,"进入中…②生成出生区块"),await Promise.race([re.preloadSpawn(),Kd(12e3)]),mn(!0,"进入中…③启动渲染"),re.start(),Yd=!0,mn(!1),hs.requestPointerLock()}catch(t){console.error("[startGame] 进入游戏失败:",t);const e=t instanceof Error?`${t.stack??t.message}`:String(t);mn(!0,`进入失败：${e}`)}}))}}Wt("resume").addEventListener("click",()=>void hs.requestPointerLock());Wt("save-quit").addEventListener("click",()=>{re&&Xs(re.snapshot()),mn(!0,"保存并返回主菜单…"),location.reload()});const Ka=Wt("death");document.addEventListener("pointerlockchange",()=>{if(document.pointerLockElement===hs)Ya.classList.add("hidden"),Ka.style.display="none",$a(!0);else if(re){if(Xs(re.snapshot()),re.isCraftingOpen())return;$a(!1),re.isDead()?Ka.style.display="flex":Ya.classList.remove("hidden")}});Wt("respawn").addEventListener("click",()=>{re&&(re.respawn(),Ka.style.display="none",hs.requestPointerLock())});setInterval(()=>{re&&document.pointerLockElement===hs&&Xs(re.snapshot())},15e3);window.addEventListener("beforeunload",()=>{re&&Xs(re.snapshot())});
