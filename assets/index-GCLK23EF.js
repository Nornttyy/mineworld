var bm=Object.defineProperty;var Tm=(i,t,e)=>t in i?bm(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var x=(i,t,e)=>(Tm(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gc="165",Am=0,nh=1,Rm=2,Zd=1,Jd=2,On=3,ui=0,Ue=1,Be=2,li=0,Es=1,Wl=2,ih=3,sh=4,Cm=5,Pi=100,Pm=101,Lm=102,Dm=103,Im=104,Um=200,km=201,Nm=202,Fm=203,Xl=204,ql=205,Om=206,zm=207,Bm=208,Hm=209,Gm=210,Vm=211,Wm=212,Xm=213,qm=214,Ym=0,$m=1,Km=2,Go=3,jm=4,Zm=5,Jm=6,Qm=7,Qd=0,t0=1,e0=2,Wn=0,n0=1,i0=2,s0=3,r0=4,o0=5,a0=6,l0=7,tf=300,Is=301,Us=302,Yl=303,$l=304,ga=306,di=1e3,Ii=1001,Kl=1002,le=1003,vc=1004,Or=1005,fe=1006,Pa=1007,ri=1008,fi=1009,c0=1010,h0=1011,Vo=1012,ef=1013,pi=1014,oi=1015,mi=1016,nf=1017,sf=1018,ks=1020,u0=35902,d0=1021,f0=1022,dn=1023,p0=1024,m0=1025,bs=1026,Ns=1027,g0=1028,rf=1029,v0=1030,of=1031,af=1033,La=33776,Da=33777,Ia=33778,Ua=33779,rh=35840,oh=35841,ah=35842,lh=35843,ch=36196,hh=37492,uh=37496,dh=37808,fh=37809,ph=37810,mh=37811,gh=37812,vh=37813,_h=37814,xh=37815,yh=37816,Mh=37817,Sh=37818,wh=37819,Eh=37820,bh=37821,ka=36492,Th=36494,Ah=36495,_0=36283,Rh=36284,Ch=36285,Ph=36286,x0=3200,lf=3201,y0=0,M0=1,An="",Qt="srgb",vi="srgb-linear",_c="display-p3",va="display-p3-linear",Wo="linear",de="srgb",Xo="rec709",qo="p3",Xi=7680,Lh=519,S0=512,w0=513,E0=514,cf=515,b0=516,T0=517,A0=518,R0=519,jl=35044,Dh=35048,Ih="300 es",Vn=2e3,Yo=2001;class qs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zo=Math.PI/180,Zl=180/Math.PI;function ci(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function je(i,t,e){return Math.max(t,Math.min(e,i))}function C0(i,t){return(i%t+t)%t}function Na(i,t,e){return(1-e)*i+e*t}function Rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,s,r,o,a,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=s[0],p=s[3],g=s[6],y=s[1],_=s[4],b=s[7],I=s[2],R=s[5],C=s[8];return r[0]=o*v+a*y+l*I,r[3]=o*p+a*_+l*R,r[6]=o*g+a*b+l*C,r[1]=c*v+h*y+u*I,r[4]=c*p+h*_+u*R,r[7]=c*g+h*b+u*C,r[2]=d*v+f*y+m*I,r[5]=d*p+f*_+m*R,r[8]=d*g+f*b+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fa.makeScale(t,e)),this}rotate(t){return this.premultiply(Fa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new Gt;function hf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function P0(){const i=br("canvas");return i.style.display="block",i}const Uh={};function xc(i){i in Uh||(Uh[i]=!0,console.warn(i))}function L0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const kh=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nh=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zr={[vi]:{transfer:Wo,primaries:Xo,toReference:i=>i,fromReference:i=>i},[Qt]:{transfer:de,primaries:Xo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[va]:{transfer:Wo,primaries:qo,toReference:i=>i.applyMatrix3(Nh),fromReference:i=>i.applyMatrix3(kh)},[_c]:{transfer:de,primaries:qo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Nh),fromReference:i=>i.applyMatrix3(kh).convertLinearToSRGB()}},D0=new Set([vi,va]),ie={enabled:!0,_workingColorSpace:vi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!D0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=zr[t].toReference,s=zr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return zr[i].primaries},getTransfer:function(i){return i===An?Wo:zr[i].transfer}};function Ts(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qi;class I0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qi===void 0&&(qi=br("canvas")),qi.width=t.width,qi.height=t.height;const n=qi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=br("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ts(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ts(e[n]/255)*255):e[n]=Ts(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let U0=0;class uf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=ci(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(za(s[o].image)):r.push(za(s[o]))}else r=za(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function za(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?I0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let k0=0;class ke extends qs{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=Ii,s=Ii,r=fe,o=ri,a=dn,l=fi,c=ke.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=ci(),this.name="",this.source=new uf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case di:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case Kl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case di:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case Kl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=tf;ke.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],v=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,b=(f+1)/2,I=(g+1)/2,R=(h+d)/4,C=(u+v)/4,F=(m+p)/4;return _>b&&_>I?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=R/n,r=C/n):b>I?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=R/s,r=F/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=C/r,s=F/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-m)*(p-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class N0 extends qs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new uf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends N0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class df extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=le,this.minFilter=le,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class F0 extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=le,this.minFilter=le,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ys{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==m){let p=1-a;const g=l*d+c*f+h*m+u*v,y=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const I=Math.sqrt(_),R=Math.atan2(I,g*y);p=Math.sin(p*R)/I,a=Math.sin(a*R)/I}const b=a*y;if(l=l*p+d*b,c=c*p+f*b,h=h*p+m*b,u=u*p+v*b,p===1-a){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ba.copy(this).projectOnVector(t),this.sub(Ba)}reflect(t){return this.sub(Ba.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ba=new N,Fh=new Ys;class Pr{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(t.matrixWorld),this.union(Br)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),Hr.subVectors(this.max,Zs),Yi.subVectors(t.a,Zs),$i.subVectors(t.b,Zs),Ki.subVectors(t.c,Zs),Kn.subVectors($i,Yi),jn.subVectors(Ki,$i),yi.subVectors(Yi,Ki);let e=[0,-Kn.z,Kn.y,0,-jn.z,jn.y,0,-yi.z,yi.y,Kn.z,0,-Kn.x,jn.z,0,-jn.x,yi.z,0,-yi.x,-Kn.y,Kn.x,0,-jn.y,jn.x,0,-yi.y,yi.x,0];return!Ha(e,Yi,$i,Ki,Hr)||(e=[1,0,0,0,1,0,0,0,1],!Ha(e,Yi,$i,Ki,Hr))?!1:(Gr.crossVectors(Kn,jn),e=[Gr.x,Gr.y,Gr.z],Ha(e,Yi,$i,Ki,Hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pn=[new N,new N,new N,new N,new N,new N,new N,new N],pn=new N,Br=new Pr,Yi=new N,$i=new N,Ki=new N,Kn=new N,jn=new N,yi=new N,Zs=new N,Hr=new N,Gr=new N,Mi=new N;function Ha(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Mi.fromArray(i,r);const a=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),l=t.dot(Mi),c=e.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const O0=new Pr,Js=new N,Ga=new N;class Lr{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):O0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);const e=Js.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ga.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(Ga)),this.expandByPoint(Js.copy(t.center).sub(Ga))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new N,Va=new N,Vr=new N,Zn=new N,Wa=new N,Wr=new N,Xa=new N;class yc{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Va.copy(t).add(e).multiplyScalar(.5),Vr.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(Va);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Vr),a=Zn.dot(this.direction),l=-Zn.dot(Vr),c=Zn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Va).addScaledVector(Vr,d),f}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){Wa.subVectors(e,t),Wr.subVectors(n,t),Xa.crossVectors(Wa,Wr);let o=this.direction.dot(Xa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,t);const l=a*this.direction.dot(Wr.crossVectors(Zn,Wr));if(l<0)return null;const c=a*this.direction.dot(Wa.cross(Zn));if(c<0||l+c>o)return null;const h=-a*Zn.dot(Xa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,m,v,p){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,m,v,p)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,m,v,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ji.setFromMatrixColumn(t,0).length(),r=1/ji.setFromMatrixColumn(t,1).length(),o=1/ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,m=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,m=c*h,v=c*u;e[0]=d+v*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,m=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,m=a*h,v=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,m=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,f=o*c,m=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(z0,t,B0)}lookAt(t,e,n){const s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),Jn.crossVectors(n,Qe),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),Jn.crossVectors(n,Qe)),Jn.normalize(),Xr.crossVectors(Qe,Jn),s[0]=Jn.x,s[4]=Xr.x,s[8]=Qe.x,s[1]=Jn.y,s[5]=Xr.y,s[9]=Qe.y,s[2]=Jn.z,s[6]=Xr.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],p=n[10],g=n[14],y=n[3],_=n[7],b=n[11],I=n[15],R=s[0],C=s[4],F=s[8],E=s[12],S=s[1],P=s[5],X=s[9],W=s[13],j=s[2],Z=s[6],K=s[10],it=s[14],Y=s[3],gt=s[7],O=s[11],B=s[15];return r[0]=o*R+a*S+l*j+c*Y,r[4]=o*C+a*P+l*Z+c*gt,r[8]=o*F+a*X+l*K+c*O,r[12]=o*E+a*W+l*it+c*B,r[1]=h*R+u*S+d*j+f*Y,r[5]=h*C+u*P+d*Z+f*gt,r[9]=h*F+u*X+d*K+f*O,r[13]=h*E+u*W+d*it+f*B,r[2]=m*R+v*S+p*j+g*Y,r[6]=m*C+v*P+p*Z+g*gt,r[10]=m*F+v*X+p*K+g*O,r[14]=m*E+v*W+p*it+g*B,r[3]=y*R+_*S+b*j+I*Y,r[7]=y*C+_*P+b*Z+I*gt,r[11]=y*F+_*X+b*K+I*O,r[15]=y*E+_*W+b*it+I*B,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],v=t[7],p=t[11],g=t[15];return m*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+v*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+g*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],v=t[13],p=t[14],g=t[15],y=u*p*c-v*d*c+v*l*f-a*p*f-u*l*g+a*d*g,_=m*d*c-h*p*c-m*l*f+o*p*f+h*l*g-o*d*g,b=h*v*c-m*u*c+m*a*f-o*v*f-h*a*g+o*u*g,I=m*u*l-h*v*l-m*a*d+o*v*d+h*a*p-o*u*p,R=e*y+n*_+s*b+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=y*C,t[1]=(v*d*r-u*p*r-v*s*f+n*p*f+u*s*g-n*d*g)*C,t[2]=(a*p*r-v*l*r+v*s*c-n*p*c-a*s*g+n*l*g)*C,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*C,t[4]=_*C,t[5]=(h*p*r-m*d*r+m*s*f-e*p*f-h*s*g+e*d*g)*C,t[6]=(m*l*r-o*p*r-m*s*c+e*p*c+o*s*g-e*l*g)*C,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*C,t[8]=b*C,t[9]=(m*u*r-h*v*r-m*n*f+e*v*f+h*n*g-e*u*g)*C,t[10]=(o*v*r-m*a*r+m*n*c-e*v*c-o*n*g+e*a*g)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*C,t[12]=I*C,t[13]=(h*v*s-m*u*s+m*n*d-e*v*d-h*n*p+e*u*p)*C,t[14]=(m*a*s-o*v*s-m*n*l+e*v*l+o*n*p-e*a*p)*C,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,v=o*h,p=o*u,g=a*u,y=l*c,_=l*h,b=l*u,I=n.x,R=n.y,C=n.z;return s[0]=(1-(v+g))*I,s[1]=(f+b)*I,s[2]=(m-_)*I,s[3]=0,s[4]=(f-b)*R,s[5]=(1-(d+g))*R,s[6]=(p+y)*R,s[7]=0,s[8]=(m+_)*C,s[9]=(p-y)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ji.set(s[0],s[1],s[2]).length();const o=ji.set(s[4],s[5],s[6]).length(),a=ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],mn.copy(this);const c=1/r,h=1/o,u=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,e.setFromRotationMatrix(mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Vn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,m;if(a===Vn)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Yo)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Vn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h;let m,v;if(a===Vn)m=(o+r)*u,v=-2*u;else if(a===Yo)m=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ji=new N,mn=new ce,z0=new N(0,0,0),B0=new N(1,1,1),Jn=new N,Xr=new N,Qe=new N,Oh=new ce,zh=new Ys;class Xn{constructor(t=0,e=0,n=0,s=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Oh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zh.setFromEuler(this),this.setFromQuaternion(zh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class ff{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let H0=0;const Bh=new N,Zi=new Ys,Dn=new ce,qr=new N,Qs=new N,G0=new N,V0=new Ys,Hh=new N(1,0,0),Gh=new N(0,1,0),Vh=new N(0,0,1),Wh={type:"added"},W0={type:"removed"},Ji={type:"childadded",child:null},qa={type:"childremoved",child:null};class Te extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new N,e=new Xn,n=new Ys,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Gt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ff,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(Hh,t)}rotateY(t){return this.rotateOnAxis(Gh,t)}rotateZ(t){return this.rotateOnAxis(Vh,t)}translateOnAxis(t,e){return Bh.copy(t).applyQuaternion(this.quaternion),this.position.add(Bh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hh,t)}translateY(t){return this.translateOnAxis(Gh,t)}translateZ(t){return this.translateOnAxis(Vh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qr.copy(t):qr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Qs,qr,this.up):Dn.lookAt(qr,Qs,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wh),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(W0),qa.child=t,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wh),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,G0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,V0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Te.DEFAULT_UP=new N(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new N,In=new N,Ya=new N,Un=new N,Qi=new N,ts=new N,Xh=new N,$a=new N,Ka=new N,ja=new N;class un{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),In.subVectors(n,e),Ya.subVectors(t,e);const o=gn.dot(gn),a=gn.dot(In),l=gn.dot(Ya),c=In.dot(In),h=In.dot(Ya),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Un.x),l.addScaledVector(o,Un.y),l.addScaledVector(a,Un.z),l)}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),In.subVectors(t,e),gn.cross(In).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),gn.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return un.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Qi.subVectors(s,n),ts.subVectors(r,n),$a.subVectors(t,n);const l=Qi.dot($a),c=ts.dot($a);if(l<=0&&c<=0)return e.copy(n);Ka.subVectors(t,s);const h=Qi.dot(Ka),u=ts.dot(Ka);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Qi,o);ja.subVectors(t,r);const f=Qi.dot(ja),m=ts.dot(ja);if(m>=0&&f<=m)return e.copy(r);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ts,a);const p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return Xh.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Xh,a);const g=1/(p+v+d);return o=v*g,a=d*g,e.copy(n).addScaledVector(Qi,o).addScaledVector(ts,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function Za(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=C0(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Za(o,r,t+1/3),this.g=Za(o,r,t),this.b=Za(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=Qt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qt){const n=pf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}copyLinearToSRGB(t){return this.r=Oa(t.r),this.g=Oa(t.g),this.b=Oa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qt){return ie.fromWorkingColorSpace(Oe.copy(this),t),Math.round(je(Oe.r*255,0,255))*65536+Math.round(je(Oe.g*255,0,255))*256+Math.round(je(Oe.b*255,0,255))}getHexString(t=Qt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Oe.copy(this),e);const n=Oe.r,s=Oe.g,r=Oe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Qt){ie.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,s=Oe.b;return t!==Qt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(Yr);const n=Na(Qn.h,Yr.h,e),s=Na(Qn.s,Yr.s,e),r=Na(Qn.l,Yr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new Ct;Ct.NAMES=pf;let X0=0;class Hi extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=Es,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=ql,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xl&&(n.blendSrc=this.blendSrc),this.blendDst!==ql&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Go&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class me extends Hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new N,$r=new Bt;class ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return xc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jl&&(t.usage=this.usage),t}}class mf extends ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class gf extends ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ae extends ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let q0=0;const ln=new ce,Ja=new Te,es=new N,tn=new Pr,tr=new Pr,De=new N;class Ne extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hf(t)?gf:mf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return Ja.lookAt(t),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(tn.min,tr.min),tn.expandByPoint(De),De.addVectors(tn.max,tr.max),tn.expandByPoint(De)):(tn.expandByPoint(tr.min),tn.expandByPoint(tr.max))}tn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)De.fromBufferAttribute(a,c),l&&(es.fromBufferAttribute(t,c),De.add(es)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new N,l[F]=new N;const c=new N,h=new N,u=new N,d=new Bt,f=new Bt,m=new Bt,v=new N,p=new N;function g(F,E,S){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,F),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),a[F].add(v),a[E].add(v),a[S].add(v),l[F].add(p),l[E].add(p),l[S].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let F=0,E=y.length;F<E;++F){const S=y[F],P=S.start,X=S.count;for(let W=P,j=P+X;W<j;W+=3)g(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const _=new N,b=new N,I=new N,R=new N;function C(F){I.fromBufferAttribute(s,F),R.copy(I);const E=a[F];_.copy(E),_.sub(I.multiplyScalar(I.dot(E))).normalize(),b.crossVectors(R,E);const P=b.dot(l[F])<0?-1:1;o.setXYZW(F,_.x,_.y,_.z,P)}for(let F=0,E=y.length;F<E;++F){const S=y[F],P=S.start,X=S.count;for(let W=P,j=P+X;W<j;W+=3)C(t.getX(W+0)),C(t.getX(W+1)),C(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new ue(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qh=new ce,Si=new yc,Kr=new Lr,Yh=new N,ns=new N,is=new N,ss=new N,Qa=new N,jr=new N,Zr=new Bt,Jr=new Bt,Qr=new Bt,$h=new N,Kh=new N,jh=new N,to=new N,eo=new N;class Kt extends Te{constructor(t=new Ne,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Qa.fromBufferAttribute(u,t),o?jr.addScaledVector(Qa,h):jr.addScaledVector(Qa.sub(e),h))}e.add(jr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Si.copy(t.ray).recast(t.near),!(Kr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Kr,Yh)===null||Si.origin.distanceToSquared(Yh)>(t.far-t.near)**2))&&(qh.copy(r).invert(),Si.copy(t.ray).applyMatrix4(qh),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const p=d[m],g=o[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let b=y,I=_;b<I;b+=3){const R=a.getX(b),C=a.getX(b+1),F=a.getX(b+2);s=no(this,g,t,n,c,h,u,R,C,F),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const y=a.getX(p),_=a.getX(p+1),b=a.getX(p+2);s=no(this,o,t,n,c,h,u,y,_,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const p=d[m],g=o[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=y,I=_;b<I;b+=3){const R=b,C=b+1,F=b+2;s=no(this,g,t,n,c,h,u,R,C,F),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const y=p,_=p+1,b=p+2;s=no(this,o,t,n,c,h,u,y,_,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Y0(i,t,e,n,s,r,o,a){let l;if(t.side===Ue?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ui,a),l===null)return null;eo.copy(a),eo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(eo);return c<e.near||c>e.far?null:{distance:c,point:eo.clone(),object:i}}function no(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ns),i.getVertexPosition(l,is),i.getVertexPosition(c,ss);const h=Y0(i,t,e,n,ns,is,ss,to);if(h){s&&(Zr.fromBufferAttribute(s,a),Jr.fromBufferAttribute(s,l),Qr.fromBufferAttribute(s,c),h.uv=un.getInterpolation(to,ns,is,ss,Zr,Jr,Qr,new Bt)),r&&(Zr.fromBufferAttribute(r,a),Jr.fromBufferAttribute(r,l),Qr.fromBufferAttribute(r,c),h.uv1=un.getInterpolation(to,ns,is,ss,Zr,Jr,Qr,new Bt)),o&&($h.fromBufferAttribute(o,a),Kh.fromBufferAttribute(o,l),jh.fromBufferAttribute(o,c),h.normal=un.getInterpolation(to,ns,is,ss,$h,Kh,jh,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new N,materialIndex:0};un.getNormal(ns,is,ss,u.normal),h.face=u}return h}class $e extends Ne{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2));function m(v,p,g,y,_,b,I,R,C,F,E){const S=b/C,P=I/F,X=b/2,W=I/2,j=R/2,Z=C+1,K=F+1;let it=0,Y=0;const gt=new N;for(let O=0;O<K;O++){const B=O*P-W;for(let q=0;q<Z;q++){const J=q*S-X;gt[v]=J*y,gt[p]=B*_,gt[g]=j,c.push(gt.x,gt.y,gt.z),gt[v]=0,gt[p]=0,gt[g]=R>0?1:-1,h.push(gt.x,gt.y,gt.z),u.push(q/C),u.push(1-O/F),it+=1}}for(let O=0;O<F;O++)for(let B=0;B<C;B++){const q=d+B+Z*O,J=d+B+Z*(O+1),L=d+(B+1)+Z*(O+1),U=d+(B+1)+Z*O;l.push(q,J,U),l.push(J,L,U),Y+=6}a.addGroup(f,Y,E),f+=Y,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){const t={};for(let e=0;e<i.length;e++){const n=Fs(i[e]);for(const s in n)t[s]=n[s]}return t}function $0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const K0={clone:Fs,merge:Ve};var j0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends Hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j0,this.fragmentShader=Z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=$0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _f extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new N,Zh=new Bt,Jh=new Bt;class Xe extends _f{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zl*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,Zh,Jh),e.subVectors(Jh,Zh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rs=-90,os=1;class J0 extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xe(rs,os,t,e);s.layers=this.layers,this.add(s);const r=new Xe(rs,os,t,e);r.layers=this.layers,this.add(r);const o=new Xe(rs,os,t,e);o.layers=this.layers,this.add(o);const a=new Xe(rs,os,t,e);a.layers=this.layers,this.add(a);const l=new Xe(rs,os,t,e);l.layers=this.layers,this.add(l);const c=new Xe(rs,os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class xf extends ke{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Is,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Q0 extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $e(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:li});r.uniforms.tEquirect.value=e;const o=new Kt(s,r),a=e.minFilter;return e.minFilter===ri&&(e.minFilter=fe),new J0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const tl=new N,tg=new N,eg=new Gt;class Hn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=tl.subVectors(n,e).cross(tg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(tl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||eg.getNormalMatrix(t),s=this.coplanarPoint(tl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new Lr,io=new N;class Mc{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,o=new Hn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],v=s[10],p=s[11],g=s[12],y=s[13],_=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,p-f,b-g).normalize(),n[1].setComponents(l+r,d+c,p+f,b+g).normalize(),n[2].setComponents(l+o,d+h,p+m,b+y).normalize(),n[3].setComponents(l-o,d-h,p-m,b-y).normalize(),n[4].setComponents(l-a,d-u,p-v,b-_).normalize(),e===Vn)n[5].setComponents(l+a,d+u,p+v,b+_).normalize();else if(e===Yo)n[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(io.x=s.normal.x>0?t.max.x:t.min.x,io.y=s.normal.y>0?t.max.y:t.min.y,io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(io)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ng(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,a),u.count===-1&&d.length===0&&i.bufferSubData(c,0,h),d.length!==0){for(let f=0,m=d.length;f<m;f++){const v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class qe extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],v=[],p=[];for(let g=0;g<h;g++){const y=g*d-o;for(let _=0;_<c;_++){const b=_*u-r;m.push(b,-y,0),v.push(0,0,1),p.push(_/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){const _=y+c*g,b=y+c*(g+1),I=y+1+c*(g+1),R=y+1+c*g;f.push(_,b,R),f.push(b,I,R)}this.setIndex(f),this.setAttribute("position",new Ae(m,3)),this.setAttribute("normal",new Ae(v,3)),this.setAttribute("uv",new Ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.width,t.height,t.widthSegments,t.heightSegments)}}var ig=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sg=`#ifdef USE_ALPHAHASH
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
#endif`,rg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,og=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ag=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cg=`#ifdef USE_AOMAP
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
#endif`,hg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ug=`#ifdef USE_BATCHING
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
#endif`,dg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gg=`#ifdef USE_IRIDESCENCE
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
#endif`,vg=`#ifdef USE_BUMPMAP
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
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Eg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tg=`#define PI 3.141592653589793
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
} // validated`,Ag=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rg=`vec3 transformedNormal = objectNormal;
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
#endif`,Cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ug=`
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
}`,kg=`#ifdef USE_ENVMAP
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
#endif`,Ng=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fg=`#ifdef USE_ENVMAP
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
#endif`,Og=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
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
#endif`,Bg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wg=`#ifdef USE_GRADIENTMAP
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
}`,Xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$g=`uniform bool receiveShadow;
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
#endif`,Kg=`#ifdef USE_ENVMAP
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
#endif`,jg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tv=`PhysicalMaterial material;
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
#endif`,ev=`struct PhysicalMaterial {
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
}`,nv=`
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
#endif`,iv=`#if defined( RE_IndirectDiffuse )
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
#endif`,sv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ov=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,av=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dv=`#if defined( USE_POINTS_UV )
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
#endif`,fv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_v=`#ifdef USE_MORPHTARGETS
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
#endif`,xv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ev=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bv=`#ifdef USE_NORMALMAP
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
#endif`,Tv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Av=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ov=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hv=`float getShadowMask() {
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
}`,Gv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vv=`#ifdef USE_SKINNING
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
#endif`,Wv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xv=`#ifdef USE_SKINNING
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
#endif`,qv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$v=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jv=`#ifdef USE_TRANSMISSION
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
#endif`,Zv=`#ifdef USE_TRANSMISSION
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
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i_=`uniform sampler2D t2D;
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
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`#include <common>
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
}`,c_=`#if DEPTH_PACKING == 3200
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
}`,h_=`#define DISTANCE
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
}`,u_=`#define DISTANCE
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
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`uniform float scale;
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
}`,m_=`uniform vec3 diffuse;
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
}`,g_=`#include <common>
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
}`,v_=`uniform vec3 diffuse;
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
}`,__=`#define LAMBERT
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
}`,x_=`#define LAMBERT
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
}`,y_=`#define MATCAP
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
}`,M_=`#define MATCAP
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
}`,S_=`#define NORMAL
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
}`,w_=`#define NORMAL
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
}`,E_=`#define PHONG
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
}`,b_=`#define PHONG
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
}`,T_=`#define STANDARD
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
}`,A_=`#define STANDARD
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
}`,R_=`#define TOON
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
}`,C_=`#define TOON
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
}`,P_=`uniform float size;
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
}`,L_=`uniform vec3 diffuse;
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
}`,D_=`#include <common>
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
}`,I_=`uniform vec3 color;
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
}`,U_=`uniform float rotation;
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
}`,k_=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:ig,alphahash_pars_fragment:sg,alphamap_fragment:rg,alphamap_pars_fragment:og,alphatest_fragment:ag,alphatest_pars_fragment:lg,aomap_fragment:cg,aomap_pars_fragment:hg,batching_pars_vertex:ug,batching_vertex:dg,begin_vertex:fg,beginnormal_vertex:pg,bsdfs:mg,iridescence_fragment:gg,bumpmap_pars_fragment:vg,clipping_planes_fragment:_g,clipping_planes_pars_fragment:xg,clipping_planes_pars_vertex:yg,clipping_planes_vertex:Mg,color_fragment:Sg,color_pars_fragment:wg,color_pars_vertex:Eg,color_vertex:bg,common:Tg,cube_uv_reflection_fragment:Ag,defaultnormal_vertex:Rg,displacementmap_pars_vertex:Cg,displacementmap_vertex:Pg,emissivemap_fragment:Lg,emissivemap_pars_fragment:Dg,colorspace_fragment:Ig,colorspace_pars_fragment:Ug,envmap_fragment:kg,envmap_common_pars_fragment:Ng,envmap_pars_fragment:Fg,envmap_pars_vertex:Og,envmap_physical_pars_fragment:Kg,envmap_vertex:zg,fog_vertex:Bg,fog_pars_vertex:Hg,fog_fragment:Gg,fog_pars_fragment:Vg,gradientmap_pars_fragment:Wg,lightmap_pars_fragment:Xg,lights_lambert_fragment:qg,lights_lambert_pars_fragment:Yg,lights_pars_begin:$g,lights_toon_fragment:jg,lights_toon_pars_fragment:Zg,lights_phong_fragment:Jg,lights_phong_pars_fragment:Qg,lights_physical_fragment:tv,lights_physical_pars_fragment:ev,lights_fragment_begin:nv,lights_fragment_maps:iv,lights_fragment_end:sv,logdepthbuf_fragment:rv,logdepthbuf_pars_fragment:ov,logdepthbuf_pars_vertex:av,logdepthbuf_vertex:lv,map_fragment:cv,map_pars_fragment:hv,map_particle_fragment:uv,map_particle_pars_fragment:dv,metalnessmap_fragment:fv,metalnessmap_pars_fragment:pv,morphinstance_vertex:mv,morphcolor_vertex:gv,morphnormal_vertex:vv,morphtarget_pars_vertex:_v,morphtarget_vertex:xv,normal_fragment_begin:yv,normal_fragment_maps:Mv,normal_pars_fragment:Sv,normal_pars_vertex:wv,normal_vertex:Ev,normalmap_pars_fragment:bv,clearcoat_normal_fragment_begin:Tv,clearcoat_normal_fragment_maps:Av,clearcoat_pars_fragment:Rv,iridescence_pars_fragment:Cv,opaque_fragment:Pv,packing:Lv,premultiplied_alpha_fragment:Dv,project_vertex:Iv,dithering_fragment:Uv,dithering_pars_fragment:kv,roughnessmap_fragment:Nv,roughnessmap_pars_fragment:Fv,shadowmap_pars_fragment:Ov,shadowmap_pars_vertex:zv,shadowmap_vertex:Bv,shadowmask_pars_fragment:Hv,skinbase_vertex:Gv,skinning_pars_vertex:Vv,skinning_vertex:Wv,skinnormal_vertex:Xv,specularmap_fragment:qv,specularmap_pars_fragment:Yv,tonemapping_fragment:$v,tonemapping_pars_fragment:Kv,transmission_fragment:jv,transmission_pars_fragment:Zv,uv_pars_fragment:Jv,uv_pars_vertex:Qv,uv_vertex:t_,worldpos_vertex:e_,background_vert:n_,background_frag:i_,backgroundCube_vert:s_,backgroundCube_frag:r_,cube_vert:o_,cube_frag:a_,depth_vert:l_,depth_frag:c_,distanceRGBA_vert:h_,distanceRGBA_frag:u_,equirect_vert:d_,equirect_frag:f_,linedashed_vert:p_,linedashed_frag:m_,meshbasic_vert:g_,meshbasic_frag:v_,meshlambert_vert:__,meshlambert_frag:x_,meshmatcap_vert:y_,meshmatcap_frag:M_,meshnormal_vert:S_,meshnormal_frag:w_,meshphong_vert:E_,meshphong_frag:b_,meshphysical_vert:T_,meshphysical_frag:A_,meshtoon_vert:R_,meshtoon_frag:C_,points_vert:P_,points_frag:L_,shadow_vert:D_,shadow_frag:I_,sprite_vert:U_,sprite_frag:k_},ut={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Tn={basic:{uniforms:Ve([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ve([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ve([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ve([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ve([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ve([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ve([ut.points,ut.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ve([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ve([ut.common,ut.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ve([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ve([ut.sprite,ut.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ve([ut.common,ut.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ve([ut.lights,ut.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Tn.physical={uniforms:Ve([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const so={r:0,b:0,g:0},Ei=new Xn,N_=new ce;function F_(i,t,e,n,s,r,o){const a=new Ct(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function v(y){let _=!1;const b=m(y);b===null?g(a,l):b&&b.isColor&&(g(b,1),_=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,_){const b=m(_);b&&(b.isCubeTexture||b.mapping===ga)?(h===void 0&&(h=new Kt(new $e(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Fs(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ei.copy(_.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(N_.makeRotationFromEuler(Ei)),h.material.toneMapped=ie.getTransfer(b.colorSpace)!==de,(u!==b||d!==b.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Kt(new qe(2,2),new fn({name:"BackgroundMaterial",uniforms:Fs(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ie.getTransfer(b.colorSpace)!==de,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,_){y.getRGB(so,vf(i)),n.buffers.color.setClear(so.r,so.g,so.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,g(a,l)},render:v,addToRenderList:p}}function O_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(S,P,X,W,j){let Z=!1;const K=u(W,X,P);r!==K&&(r=K,c(r.object)),Z=f(S,W,X,j),Z&&m(S,W,X,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,b(S,P,X,W),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,P,X){const W=X.wireframe===!0;let j=n[S.id];j===void 0&&(j={},n[S.id]=j);let Z=j[P.id];Z===void 0&&(Z={},j[P.id]=Z);let K=Z[W];return K===void 0&&(K=d(l()),Z[W]=K),K}function d(S){const P=[],X=[],W=[];for(let j=0;j<e;j++)P[j]=0,X[j]=0,W[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:X,attributeDivisors:W,object:S,attributes:{},index:null}}function f(S,P,X,W){const j=r.attributes,Z=P.attributes;let K=0;const it=X.getAttributes();for(const Y in it)if(it[Y].location>=0){const O=j[Y];let B=Z[Y];if(B===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(B=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(B=S.instanceColor)),O===void 0||O.attribute!==B||B&&O.data!==B.data)return!0;K++}return r.attributesNum!==K||r.index!==W}function m(S,P,X,W){const j={},Z=P.attributes;let K=0;const it=X.getAttributes();for(const Y in it)if(it[Y].location>=0){let O=Z[Y];O===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(O=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(O=S.instanceColor));const B={};B.attribute=O,O&&O.data&&(B.data=O.data),j[Y]=B,K++}r.attributes=j,r.attributesNum=K,r.index=W}function v(){const S=r.newAttributes;for(let P=0,X=S.length;P<X;P++)S[P]=0}function p(S){g(S,0)}function g(S,P){const X=r.newAttributes,W=r.enabledAttributes,j=r.attributeDivisors;X[S]=1,W[S]===0&&(i.enableVertexAttribArray(S),W[S]=1),j[S]!==P&&(i.vertexAttribDivisor(S,P),j[S]=P)}function y(){const S=r.newAttributes,P=r.enabledAttributes;for(let X=0,W=P.length;X<W;X++)P[X]!==S[X]&&(i.disableVertexAttribArray(X),P[X]=0)}function _(S,P,X,W,j,Z,K){K===!0?i.vertexAttribIPointer(S,P,X,j,Z):i.vertexAttribPointer(S,P,X,W,j,Z)}function b(S,P,X,W){v();const j=W.attributes,Z=X.getAttributes(),K=P.defaultAttributeValues;for(const it in Z){const Y=Z[it];if(Y.location>=0){let gt=j[it];if(gt===void 0&&(it==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),it==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor)),gt!==void 0){const O=gt.normalized,B=gt.itemSize,q=t.get(gt);if(q===void 0)continue;const J=q.buffer,L=q.type,U=q.bytesPerElement,Q=L===i.INT||L===i.UNSIGNED_INT||gt.gpuType===ef;if(gt.isInterleavedBufferAttribute){const et=gt.data,xt=et.stride,ct=gt.offset;if(et.isInstancedInterleavedBuffer){for(let ht=0;ht<Y.locationSize;ht++)g(Y.location+ht,et.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ht=0;ht<Y.locationSize;ht++)p(Y.location+ht);i.bindBuffer(i.ARRAY_BUFFER,J);for(let ht=0;ht<Y.locationSize;ht++)_(Y.location+ht,B/Y.locationSize,L,O,xt*U,(ct+B/Y.locationSize*ht)*U,Q)}else{if(gt.isInstancedBufferAttribute){for(let et=0;et<Y.locationSize;et++)g(Y.location+et,gt.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let et=0;et<Y.locationSize;et++)p(Y.location+et);i.bindBuffer(i.ARRAY_BUFFER,J);for(let et=0;et<Y.locationSize;et++)_(Y.location+et,B/Y.locationSize,L,O,B*U,B/Y.locationSize*et*U,Q)}}else if(K!==void 0){const O=K[it];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(Y.location,O);break;case 3:i.vertexAttrib3fv(Y.location,O);break;case 4:i.vertexAttrib4fv(Y.location,O);break;default:i.vertexAttrib1fv(Y.location,O)}}}}y()}function I(){F();for(const S in n){const P=n[S];for(const X in P){const W=P[X];for(const j in W)h(W[j].object),delete W[j];delete P[X]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const X in P){const W=P[X];for(const j in W)h(W[j].object),delete W[j];delete P[X]}delete n[S.id]}function C(S){for(const P in n){const X=n[P];if(X[S.id]===void 0)continue;const W=X[S.id];for(const j in W)h(W[j].object),delete W[j];delete X[S.id]}}function F(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function z_(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(c[f],h[f]);else{d.multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v];for(let v=0;v<d.length;v++)e.update(m,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function B_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==dn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const C=R===mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==fi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==oi&&!C)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=f>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:b,maxSamples:I}}function H_(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Hn,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{const y=r?0:n,_=y*4;let b=g.clippingState||null;l.value=b,b=h(m,d,_,f);for(let I=0;I!==_;++I)b[I]=e[I];g.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,m!==!0||p===null){const g=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let _=0,b=f;_!==v;++_,b+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function G_(i){let t=new WeakMap;function e(o,a){return a===Yl?o.mapping=Is:a===$l&&(o.mapping=Us),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yl||a===$l)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Q0(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Tr extends _f{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ms=4,Qh=[.125,.215,.35,.446,.526,.582],Li=20,el=new Tr,tu=new Ct;let nl=null,il=0,sl=0,rl=!1;const Ci=(1+Math.sqrt(5))/2,as=1/Ci,eu=[new N(-Ci,as,0),new N(Ci,as,0),new N(-as,0,Ci),new N(as,0,Ci),new N(0,Ci,-as),new N(0,Ci,as),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class nu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){nl=this._renderer.getRenderTarget(),il=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nl,il,sl),this._renderer.xr.enabled=rl,t.scissorTest=!1,ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Is||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nl=this._renderer.getRenderTarget(),il=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fe,minFilter:fe,generateMipmaps:!1,type:mi,format:dn,colorSpace:vi,depthBuffer:!1},s=iu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V_(r)),this._blurMaterial=W_(r,t,e)}return s}_compileMaterial(t){const e=new Kt(this._lodPlanes[0],t);this._renderer.compile(e,el)}_sceneToCubeUV(t,e,n,s){const a=new Xe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(tu),h.toneMapping=Wn,h.autoClear=!1;const f=new me({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),m=new Kt(new $e,f);let v=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,v=!0):(f.color.copy(tu),v=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):y===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const _=this._cubeSize;ro(s,y*_,g>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Is||t.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=su());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ro(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,el)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=eu[(s-r-1)%eu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Kt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Li-1),v=r/m,p=isFinite(r)?1+Math.floor(h*v):Li;p>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Li}`);const g=[];let y=0;for(let C=0;C<Li;++C){const F=C/v,E=Math.exp(-F*F/2);g.push(E),C===0?y+=E:C<p&&(y+=2*E)}for(let C=0;C<g.length;C++)g[C]=g[C]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;const b=this._sizeLods[s],I=3*b*(s>_-Ms?s-_+Ms:0),R=4*(this._cubeSize-b);ro(e,I,R,3*b,2*b),l.setRenderTarget(e),l.render(u,el)}}function V_(i){const t=[],e=[],n=[];let s=i;const r=i-Ms+1+Qh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ms?l=Qh[o-i+Ms-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,p=2,g=1,y=new Float32Array(v*m*f),_=new Float32Array(p*m*f),b=new Float32Array(g*m*f);for(let R=0;R<f;R++){const C=R%3*2/3-1,F=R>2?0:-1,E=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];y.set(E,v*m*R),_.set(d,p*m*R);const S=[R,R,R,R,R,R];b.set(S,g*m*R)}const I=new Ne;I.setAttribute("position",new ue(y,v)),I.setAttribute("uv",new ue(_,p)),I.setAttribute("faceIndex",new ue(b,g)),t.push(I),s>Ms&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function iu(i,t,e){const n=new Sn(i,t,e);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ro(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function W_(i,t,e){const n=new Float32Array(Li),s=new N(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function su(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function ru(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Sc(){return`

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
	`}function X_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yl||l===$l,h=l===Is||l===Us;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new nu(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new nu(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function q_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&xc("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Y_(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const v=d.morphAttributes[m];for(let p=0,g=v.length;p<g;p++)t.remove(v[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const v=f[m];for(let p=0,g=v.length;p<g;p++)t.update(v[p],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,b=y.length;_<b;_+=3){const I=y[_+0],R=y[_+1],C=y[_+2];d.push(I,R,R,C,C,I)}}else if(m!==void 0){const y=m.array;v=m.version;for(let _=0,b=y.length/3-1;_<b;_+=3){const I=_+0,R=_+1,C=_+2;d.push(I,R,R,C,C,I)}}else return;const p=new(hf(d)?gf:mf)(d,1);p.version=v;const g=r.get(u);g&&t.remove(g),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function $_(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<m;p++)this.render(d[p]/o,f[p]);else{v.multiDrawElementsWEBGL(n,f,0,r,d,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];e.update(p,n,1)}}function u(d,f,m,v){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)c(d[g]/o,f[g],v[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,m);let g=0;for(let y=0;y<m;y++)g+=f[y];for(let y=0;y<v.length;y++)e.update(g,n,v[y])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function K_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function j_(i,t,e){const n=new WeakMap,s=new _e;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let b=0;m===!0&&(b=1),v===!0&&(b=2),p===!0&&(b=3);let I=a.attributes.position.count*b,R=1;I>t.maxTextureSize&&(R=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const C=new Float32Array(I*R*4*u),F=new df(C,I,R,u);F.type=oi,F.needsUpdate=!0;const E=b*4;for(let P=0;P<u;P++){const X=g[P],W=y[P],j=_[P],Z=I*R*4*P;for(let K=0;K<X.count;K++){const it=K*E;m===!0&&(s.fromBufferAttribute(X,K),C[Z+it+0]=s.x,C[Z+it+1]=s.y,C[Z+it+2]=s.z,C[Z+it+3]=0),v===!0&&(s.fromBufferAttribute(W,K),C[Z+it+4]=s.x,C[Z+it+5]=s.y,C[Z+it+6]=s.z,C[Z+it+7]=0),p===!0&&(s.fromBufferAttribute(j,K),C[Z+it+8]=s.x,C[Z+it+9]=s.y,C[Z+it+10]=s.z,C[Z+it+11]=j.itemSize===4?s.w:1)}}d={count:u,texture:F,size:new Bt(I,R)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Z_(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class $o extends ke{constructor(t,e,n,s,r,o,a,l,c,h=bs){if(h!==bs&&h!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bs&&(n=pi),n===void 0&&h===Ns&&(n=ks),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:le,this.minFilter=l!==void 0?l:le,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Mf=new ke,Sf=new $o(1,1);Sf.compareFunction=cf;const wf=new df,Ef=new F0,bf=new xf,ou=[],au=[],lu=new Float32Array(16),cu=new Float32Array(9),hu=new Float32Array(4);function $s(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ou[s];if(r===void 0&&(r=new Float32Array(s),ou[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _a(i,t){let e=au[t];e===void 0&&(e=new Int32Array(t),au[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function J_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Q_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function tx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function ex(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function nx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;hu.set(n),i.uniformMatrix2fv(this.addr,!1,hu),Ce(e,n)}}function ix(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;cu.set(n),i.uniformMatrix3fv(this.addr,!1,cu),Ce(e,n)}}function sx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;lu.set(n),i.uniformMatrix4fv(this.addr,!1,lu),Ce(e,n)}}function rx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ox(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function ax(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function lx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function cx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function ux(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function dx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function fx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Sf:Mf;e.setTexture2D(t||r,s)}function px(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ef,s)}function mx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bf,s)}function gx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||wf,s)}function vx(i){switch(i){case 5126:return J_;case 35664:return Q_;case 35665:return tx;case 35666:return ex;case 35674:return nx;case 35675:return ix;case 35676:return sx;case 5124:case 35670:return rx;case 35667:case 35671:return ox;case 35668:case 35672:return ax;case 35669:case 35673:return lx;case 5125:return cx;case 36294:return hx;case 36295:return ux;case 36296:return dx;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return gx}}function _x(i,t){i.uniform1fv(this.addr,t)}function xx(i,t){const e=$s(t,this.size,2);i.uniform2fv(this.addr,e)}function yx(i,t){const e=$s(t,this.size,3);i.uniform3fv(this.addr,e)}function Mx(i,t){const e=$s(t,this.size,4);i.uniform4fv(this.addr,e)}function Sx(i,t){const e=$s(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function wx(i,t){const e=$s(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ex(i,t){const e=$s(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bx(i,t){i.uniform1iv(this.addr,t)}function Tx(i,t){i.uniform2iv(this.addr,t)}function Ax(i,t){i.uniform3iv(this.addr,t)}function Rx(i,t){i.uniform4iv(this.addr,t)}function Cx(i,t){i.uniform1uiv(this.addr,t)}function Px(i,t){i.uniform2uiv(this.addr,t)}function Lx(i,t){i.uniform3uiv(this.addr,t)}function Dx(i,t){i.uniform4uiv(this.addr,t)}function Ix(i,t,e){const n=this.cache,s=t.length,r=_a(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Mf,r[o])}function Ux(i,t,e){const n=this.cache,s=t.length,r=_a(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ef,r[o])}function kx(i,t,e){const n=this.cache,s=t.length,r=_a(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||bf,r[o])}function Nx(i,t,e){const n=this.cache,s=t.length,r=_a(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||wf,r[o])}function Fx(i){switch(i){case 5126:return _x;case 35664:return xx;case 35665:return yx;case 35666:return Mx;case 35674:return Sx;case 35675:return wx;case 35676:return Ex;case 5124:case 35670:return bx;case 35667:case 35671:return Tx;case 35668:case 35672:return Ax;case 35669:case 35673:return Rx;case 5125:return Cx;case 36294:return Px;case 36295:return Lx;case 36296:return Dx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return Nx}}class Ox{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vx(e.type)}}class zx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fx(e.type)}}class Bx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ol=/(\w+)(\])?(\[|\.)?/g;function uu(i,t){i.seq.push(t),i.map[t.id]=t}function Hx(i,t,e){const n=i.name,s=n.length;for(ol.lastIndex=0;;){const r=ol.exec(n),o=ol.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){uu(e,c===void 0?new Ox(a,i,t):new zx(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Bx(a),uu(e,u)),e=u}}}class Bo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Hx(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function du(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Gx=37297;let Vx=0;function Wx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Xx(i){const t=ie.getPrimaries(ie.workingColorSpace),e=ie.getPrimaries(i);let n;switch(t===e?n="":t===qo&&e===Xo?n="LinearDisplayP3ToLinearSRGB":t===Xo&&e===qo&&(n="LinearSRGBToLinearDisplayP3"),i){case vi:case va:return[n,"LinearTransferOETF"];case Qt:case _c:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function fu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Wx(i.getShaderSource(t),o)}else return s}function qx(i,t){const e=Xx(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Yx(i,t){let e;switch(t){case n0:e="Linear";break;case i0:e="Reinhard";break;case s0:e="OptimizedCineon";break;case r0:e="ACESFilmic";break;case a0:e="AgX";break;case l0:e="Neutral";break;case o0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $x(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function Kx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function pr(i){return i!==""}function pu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(i){return i.replace(Zx,Qx)}const Jx=new Map;function Qx(i,t){let e=Ht[t];if(e===void 0){const n=Jx.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jl(e)}const ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gu(i){return i.replace(ty,ey)}function ey(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function ny(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Jd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function iy(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Is:case Us:t="ENVMAP_TYPE_CUBE";break;case ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sy(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Us:t="ENVMAP_MODE_REFRACTION";break}return t}function ry(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qd:t="ENVMAP_BLENDING_MULTIPLY";break;case t0:t="ENVMAP_BLENDING_MIX";break;case e0:t="ENVMAP_BLENDING_ADD";break}return t}function oy(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ay(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=ny(e),c=iy(e),h=sy(e),u=ry(e),d=oy(e),f=$x(e),m=Kx(r),v=s.createProgram();let p,g,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(pr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(pr).join(`
`),g.length>0&&(g+=`
`)):(p=[vu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),g=[vu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Wn?Yx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,qx("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),o=Jl(o),o=pu(o,e),o=mu(o,e),a=Jl(a),a=pu(a,e),a=mu(a,e),o=gu(o),a=gu(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=y+p+o,b=y+g+a,I=du(s,s.VERTEX_SHADER,_),R=du(s,s.FRAGMENT_SHADER,b);s.attachShader(v,I),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(P){if(i.debug.checkShaderErrors){const X=s.getProgramInfoLog(v).trim(),W=s.getShaderInfoLog(I).trim(),j=s.getShaderInfoLog(R).trim();let Z=!0,K=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,I,R);else{const it=fu(s,I,"vertex"),Y=fu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+it+`
`+Y)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||j==="")&&(K=!1);K&&(P.diagnostics={runnable:Z,programLog:X,vertexShader:{log:W,prefix:p},fragmentShader:{log:j,prefix:g}})}s.deleteShader(I),s.deleteShader(R),F=new Bo(s,v),E=jx(s,v)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,Gx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vx++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=R,this}let ly=0;class cy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new hy(t),e.set(t,n)),n}}class hy{constructor(t){this.id=ly++,this.code=t,this.usedTimes=0}}function uy(i,t,e,n,s,r,o){const a=new ff,l=new cy,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,S,P,X,W){const j=X.fog,Z=W.geometry,K=E.isMeshStandardMaterial?X.environment:null,it=(E.isMeshStandardMaterial?e:t).get(E.envMap||K),Y=it&&it.mapping===ga?it.image.height:null,gt=m[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const O=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,B=O!==void 0?O.length:0;let q=0;Z.morphAttributes.position!==void 0&&(q=1),Z.morphAttributes.normal!==void 0&&(q=2),Z.morphAttributes.color!==void 0&&(q=3);let J,L,U,Q;if(gt){const se=Tn[gt];J=se.vertexShader,L=se.fragmentShader}else J=E.vertexShader,L=E.fragmentShader,l.update(E),U=l.getVertexShaderID(E),Q=l.getFragmentShaderID(E);const et=i.getRenderTarget(),xt=W.isInstancedMesh===!0,ct=W.isBatchedMesh===!0,ht=!!E.map,A=!!E.matcap,Mt=!!it,At=!!E.aoMap,Nt=!!E.lightMap,dt=!!E.bumpMap,It=!!E.normalMap,Tt=!!E.displacementMap,Lt=!!E.emissiveMap,te=!!E.metalnessMap,T=!!E.roughnessMap,M=E.anisotropy>0,V=E.clearcoat>0,nt=E.dispersion>0,st=E.iridescence>0,rt=E.sheen>0,Pt=E.transmission>0,ft=M&&!!E.anisotropyMap,pt=V&&!!E.clearcoatMap,Vt=V&&!!E.clearcoatNormalMap,ot=V&&!!E.clearcoatRoughnessMap,Et=st&&!!E.iridescenceMap,qt=st&&!!E.iridescenceThicknessMap,Ft=rt&&!!E.sheenColorMap,mt=rt&&!!E.sheenRoughnessMap,Wt=!!E.specularMap,Yt=!!E.specularColorMap,xe=!!E.specularIntensityMap,D=Pt&&!!E.transmissionMap,vt=Pt&&!!E.thicknessMap,$=!!E.gradientMap,tt=!!E.alphaMap,lt=E.alphaTest>0,Ot=!!E.alphaHash,Jt=!!E.extensions;let ye=Wn;E.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ye=i.toneMapping);const Pe={shaderID:gt,shaderType:E.type,shaderName:E.name,vertexShader:J,fragmentShader:L,defines:E.defines,customVertexShaderID:U,customFragmentShaderID:Q,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:ct,batchingColor:ct&&W._colorsTexture!==null,instancing:xt,instancingColor:xt&&W.instanceColor!==null,instancingMorph:xt&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:vi,alphaToCoverage:!!E.alphaToCoverage,map:ht,matcap:A,envMap:Mt,envMapMode:Mt&&it.mapping,envMapCubeUVHeight:Y,aoMap:At,lightMap:Nt,bumpMap:dt,normalMap:It,displacementMap:d&&Tt,emissiveMap:Lt,normalMapObjectSpace:It&&E.normalMapType===M0,normalMapTangentSpace:It&&E.normalMapType===y0,metalnessMap:te,roughnessMap:T,anisotropy:M,anisotropyMap:ft,clearcoat:V,clearcoatMap:pt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:ot,dispersion:nt,iridescence:st,iridescenceMap:Et,iridescenceThicknessMap:qt,sheen:rt,sheenColorMap:Ft,sheenRoughnessMap:mt,specularMap:Wt,specularColorMap:Yt,specularIntensityMap:xe,transmission:Pt,transmissionMap:D,thicknessMap:vt,gradientMap:$,opaque:E.transparent===!1&&E.blending===Es&&E.alphaToCoverage===!1,alphaMap:tt,alphaTest:lt,alphaHash:Ot,combine:E.combine,mapUv:ht&&v(E.map.channel),aoMapUv:At&&v(E.aoMap.channel),lightMapUv:Nt&&v(E.lightMap.channel),bumpMapUv:dt&&v(E.bumpMap.channel),normalMapUv:It&&v(E.normalMap.channel),displacementMapUv:Tt&&v(E.displacementMap.channel),emissiveMapUv:Lt&&v(E.emissiveMap.channel),metalnessMapUv:te&&v(E.metalnessMap.channel),roughnessMapUv:T&&v(E.roughnessMap.channel),anisotropyMapUv:ft&&v(E.anisotropyMap.channel),clearcoatMapUv:pt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:mt&&v(E.sheenRoughnessMap.channel),specularMapUv:Wt&&v(E.specularMap.channel),specularColorMapUv:Yt&&v(E.specularColorMap.channel),specularIntensityMapUv:xe&&v(E.specularIntensityMap.channel),transmissionMapUv:D&&v(E.transmissionMap.channel),thicknessMapUv:vt&&v(E.thicknessMap.channel),alphaMapUv:tt&&v(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(It||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Z.attributes.uv&&(ht||tt),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:W.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:q,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,decodeVideoTexture:ht&&E.map.isVideoTexture===!0&&ie.getTransfer(E.map.colorSpace)===de,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Be,flipSided:E.side===Ue,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Jt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Jt&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function g(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)S.push(P),S.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(y(S,E),_(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function y(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function _(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),E.push(a.mask)}function b(E){const S=m[E.type];let P;if(S){const X=Tn[S];P=K0.clone(X.uniforms)}else P=E.uniforms;return P}function I(E,S){let P;for(let X=0,W=h.length;X<W;X++){const j=h[X];if(j.cacheKey===S){P=j,++P.usedTimes;break}}return P===void 0&&(P=new ay(i,S,E,r),h.push(P)),P}function R(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function C(E){l.remove(E)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:b,acquireProgram:I,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:F}}function dy(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function fy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function _u(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,m,v,p){let g=i[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:p},i[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=v,g.group=p),t++,g}function a(u,d,f,m,v,p){const g=o(u,d,f,m,v,p);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):e.push(g)}function l(u,d,f,m,v,p){const g=o(u,d,f,m,v,p);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):e.unshift(g)}function c(u,d){e.length>1&&e.sort(u||fy),n.length>1&&n.sort(d||_u),s.length>1&&s.sort(d||_u)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function py(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new xu,i.set(n,[o])):s>=r.length?(o=new xu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function my(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Ct};break;case"SpotLight":e={position:new N,direction:new N,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function gy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let vy=0;function _y(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function xy(i){const t=new my,e=gy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,r=new ce,o=new ce;function a(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,v=0,p=0,g=0,y=0,_=0,b=0,I=0,R=0,C=0;c.sort(_y);for(let E=0,S=c.length;E<S;E++){const P=c[E],X=P.color,W=P.intensity,j=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=X.r*W,u+=X.g*W,d+=X.b*W;else if(P.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(P.sh.coefficients[K],W);C++}else if(P.isDirectionalLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const it=P.shadow,Y=e.get(P);Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=K,f++}else if(P.isSpotLight){const K=t.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(X).multiplyScalar(W),K.distance=j,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,n.spot[v]=K;const it=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,it.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[v]=it.matrix,P.castShadow){const Y=e.get(P);Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=Z,b++}v++}else if(P.isRectAreaLight){const K=t.get(P);K.color.copy(X).multiplyScalar(W),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=K,p++}else if(P.isPointLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),K.distance=P.distance,K.decay=P.decay,P.castShadow){const it=P.shadow,Y=e.get(P);Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,Y.shadowCameraNear=it.camera.near,Y.shadowCameraFar=it.camera.far,n.pointShadow[m]=Y,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=P.shadow.matrix,_++}n.point[m]=K,m++}else if(P.isHemisphereLight){const K=t.get(P);K.skyColor.copy(P.color).multiplyScalar(W),K.groundColor.copy(P.groundColor).multiplyScalar(W),n.hemi[g]=K,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const F=n.hash;(F.directionalLength!==f||F.pointLength!==m||F.spotLength!==v||F.rectAreaLength!==p||F.hemiLength!==g||F.numDirectionalShadows!==y||F.numPointShadows!==_||F.numSpotShadows!==b||F.numSpotMaps!==I||F.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=b+I-R,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,F.directionalLength=f,F.pointLength=m,F.spotLength=v,F.rectAreaLength=p,F.hemiLength=g,F.numDirectionalShadows=y,F.numPointShadows=_,F.numSpotShadows=b,F.numSpotMaps=I,F.numLightProbes=C,n.version=vy++)}function l(c,h){let u=0,d=0,f=0,m=0,v=0;const p=h.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){const _=c[g];if(_.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(_.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),f++}else if(_.isRectAreaLight){const b=n.rectArea[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){const b=n.hemi[v];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function yu(i){const t=new xy(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function yy(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new yu(i),t.set(s,[a])):r>=o.length?(a=new yu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Tf extends Hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=x0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class My extends Hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wy=`uniform sampler2D shadow_pass;
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
}`;function Ey(i,t,e){let n=new Mc;const s=new Bt,r=new Bt,o=new _e,a=new Tf({depthPacking:lf}),l=new My,c={},h=e.maxTextureSize,u={[ui]:Ue,[Ue]:ui,[Be]:Be},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:Sy,fragmentShader:wy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ne;m.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Kt(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zd;let g=this.type;this.render=function(R,C,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const E=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),X=i.state;X.setBlending(li),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const W=g!==On&&this.type===On,j=g===On&&this.type!==On;for(let Z=0,K=R.length;Z<K;Z++){const it=R[Z],Y=it.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const gt=Y.getFrameExtents();if(s.multiply(gt),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/gt.x),s.x=r.x*gt.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/gt.y),s.y=r.y*gt.y,Y.mapSize.y=r.y)),Y.map===null||W===!0||j===!0){const B=this.type!==On?{minFilter:le,magFilter:le}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Sn(s.x,s.y,B),Y.map.texture.name=it.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const O=Y.getViewportCount();for(let B=0;B<O;B++){const q=Y.getViewport(B);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),X.viewport(o),Y.updateMatrices(it,B),n=Y.getFrustum(),b(C,F,Y.camera,it,this.type)}Y.isPointLightShadow!==!0&&this.type===On&&y(Y,F),Y.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(E,S,P)};function y(R,C){const F=t.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Sn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,F,d,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,F,f,v,null)}function _(R,C,F,E){let S=null;const P=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)S=P;else if(S=F.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const X=S.uuid,W=C.uuid;let j=c[X];j===void 0&&(j={},c[X]=j);let Z=j[W];Z===void 0&&(Z=S.clone(),j[W]=Z,C.addEventListener("dispose",I)),S=Z}if(S.visible=C.visible,S.wireframe=C.wireframe,E===On?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=i.properties.get(S);X.light=F}return S}function b(R,C,F,E,S){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===On)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const W=t.update(R),j=R.material;if(Array.isArray(j)){const Z=W.groups;for(let K=0,it=Z.length;K<it;K++){const Y=Z[K],gt=j[Y.materialIndex];if(gt&&gt.visible){const O=_(R,gt,E,S);R.onBeforeShadow(i,R,C,F,W,O,Y),i.renderBufferDirect(F,null,W,O,R,Y),R.onAfterShadow(i,R,C,F,W,O,Y)}}}else if(j.visible){const Z=_(R,j,E,S);R.onBeforeShadow(i,R,C,F,W,Z,null),i.renderBufferDirect(F,null,W,Z,R,null),R.onAfterShadow(i,R,C,F,W,Z,null)}}const X=R.children;for(let W=0,j=X.length;W<j;W++)b(X[W],C,F,E,S)}function I(R){R.target.removeEventListener("dispose",I);for(const F in c){const E=c[F],S=R.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function by(i){function t(){let D=!1;const vt=new _e;let $=null;const tt=new _e(0,0,0,0);return{setMask:function(lt){$!==lt&&!D&&(i.colorMask(lt,lt,lt,lt),$=lt)},setLocked:function(lt){D=lt},setClear:function(lt,Ot,Jt,ye,Pe){Pe===!0&&(lt*=ye,Ot*=ye,Jt*=ye),vt.set(lt,Ot,Jt,ye),tt.equals(vt)===!1&&(i.clearColor(lt,Ot,Jt,ye),tt.copy(vt))},reset:function(){D=!1,$=null,tt.set(-1,0,0,0)}}}function e(){let D=!1,vt=null,$=null,tt=null;return{setTest:function(lt){lt?Q(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(lt){vt!==lt&&!D&&(i.depthMask(lt),vt=lt)},setFunc:function(lt){if($!==lt){switch(lt){case Ym:i.depthFunc(i.NEVER);break;case $m:i.depthFunc(i.ALWAYS);break;case Km:i.depthFunc(i.LESS);break;case Go:i.depthFunc(i.LEQUAL);break;case jm:i.depthFunc(i.EQUAL);break;case Zm:i.depthFunc(i.GEQUAL);break;case Jm:i.depthFunc(i.GREATER);break;case Qm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=lt}},setLocked:function(lt){D=lt},setClear:function(lt){tt!==lt&&(i.clearDepth(lt),tt=lt)},reset:function(){D=!1,vt=null,$=null,tt=null}}}function n(){let D=!1,vt=null,$=null,tt=null,lt=null,Ot=null,Jt=null,ye=null,Pe=null;return{setTest:function(se){D||(se?Q(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(se){vt!==se&&!D&&(i.stencilMask(se),vt=se)},setFunc:function(se,En,bn){($!==se||tt!==En||lt!==bn)&&(i.stencilFunc(se,En,bn),$=se,tt=En,lt=bn)},setOp:function(se,En,bn){(Ot!==se||Jt!==En||ye!==bn)&&(i.stencilOp(se,En,bn),Ot=se,Jt=En,ye=bn)},setLocked:function(se){D=se},setClear:function(se){Pe!==se&&(i.clearStencil(se),Pe=se)},reset:function(){D=!1,vt=null,$=null,tt=null,lt=null,Ot=null,Jt=null,ye=null,Pe=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,m=!1,v=null,p=null,g=null,y=null,_=null,b=null,I=null,R=new Ct(0,0,0),C=0,F=!1,E=null,S=null,P=null,X=null,W=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,K=0;const it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(it)[1]),Z=K>=1):it.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),Z=K>=2);let Y=null,gt={};const O=i.getParameter(i.SCISSOR_BOX),B=i.getParameter(i.VIEWPORT),q=new _e().fromArray(O),J=new _e().fromArray(B);function L(D,vt,$,tt){const lt=new Uint8Array(4),Ot=i.createTexture();i.bindTexture(D,Ot),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<$;Jt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(vt+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return Ot}const U={};U[i.TEXTURE_2D]=L(i.TEXTURE_2D,i.TEXTURE_2D,1),U[i.TEXTURE_CUBE_MAP]=L(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[i.TEXTURE_2D_ARRAY]=L(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),U[i.TEXTURE_3D]=L(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),r.setFunc(Go),dt(!1),It(nh),Q(i.CULL_FACE),At(li);function Q(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function et(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function xt(D,vt){return h[D]!==vt?(i.bindFramebuffer(D,vt),h[D]=vt,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=vt),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function ct(D,vt){let $=d,tt=!1;if(D){$=u.get(vt),$===void 0&&($=[],u.set(vt,$));const lt=D.textures;if($.length!==lt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Ot=0,Jt=lt.length;Ot<Jt;Ot++)$[Ot]=i.COLOR_ATTACHMENT0+Ot;$.length=lt.length,tt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,tt=!0);tt&&i.drawBuffers($)}function ht(D){return f!==D?(i.useProgram(D),f=D,!0):!1}const A={[Pi]:i.FUNC_ADD,[Pm]:i.FUNC_SUBTRACT,[Lm]:i.FUNC_REVERSE_SUBTRACT};A[Dm]=i.MIN,A[Im]=i.MAX;const Mt={[Um]:i.ZERO,[km]:i.ONE,[Nm]:i.SRC_COLOR,[Xl]:i.SRC_ALPHA,[Gm]:i.SRC_ALPHA_SATURATE,[Bm]:i.DST_COLOR,[Om]:i.DST_ALPHA,[Fm]:i.ONE_MINUS_SRC_COLOR,[ql]:i.ONE_MINUS_SRC_ALPHA,[Hm]:i.ONE_MINUS_DST_COLOR,[zm]:i.ONE_MINUS_DST_ALPHA,[Vm]:i.CONSTANT_COLOR,[Wm]:i.ONE_MINUS_CONSTANT_COLOR,[Xm]:i.CONSTANT_ALPHA,[qm]:i.ONE_MINUS_CONSTANT_ALPHA};function At(D,vt,$,tt,lt,Ot,Jt,ye,Pe,se){if(D===li){m===!0&&(et(i.BLEND),m=!1);return}if(m===!1&&(Q(i.BLEND),m=!0),D!==Cm){if(D!==v||se!==F){if((p!==Pi||_!==Pi)&&(i.blendEquation(i.FUNC_ADD),p=Pi,_=Pi),se)switch(D){case Es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFunc(i.ONE,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}g=null,y=null,b=null,I=null,R.set(0,0,0),C=0,v=D,F=se}return}lt=lt||vt,Ot=Ot||$,Jt=Jt||tt,(vt!==p||lt!==_)&&(i.blendEquationSeparate(A[vt],A[lt]),p=vt,_=lt),($!==g||tt!==y||Ot!==b||Jt!==I)&&(i.blendFuncSeparate(Mt[$],Mt[tt],Mt[Ot],Mt[Jt]),g=$,y=tt,b=Ot,I=Jt),(ye.equals(R)===!1||Pe!==C)&&(i.blendColor(ye.r,ye.g,ye.b,Pe),R.copy(ye),C=Pe),v=D,F=!1}function Nt(D,vt){D.side===Be?et(i.CULL_FACE):Q(i.CULL_FACE);let $=D.side===Ue;vt&&($=!$),dt($),D.blending===Es&&D.transparent===!1?At(li):At(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const tt=D.stencilWrite;o.setTest(tt),tt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Lt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(D){E!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),E=D)}function It(D){D!==Am?(Q(i.CULL_FACE),D!==S&&(D===nh?i.cullFace(i.BACK):D===Rm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),S=D}function Tt(D){D!==P&&(Z&&i.lineWidth(D),P=D)}function Lt(D,vt,$){D?(Q(i.POLYGON_OFFSET_FILL),(X!==vt||W!==$)&&(i.polygonOffset(vt,$),X=vt,W=$)):et(i.POLYGON_OFFSET_FILL)}function te(D){D?Q(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function T(D){D===void 0&&(D=i.TEXTURE0+j-1),Y!==D&&(i.activeTexture(D),Y=D)}function M(D,vt,$){$===void 0&&(Y===null?$=i.TEXTURE0+j-1:$=Y);let tt=gt[$];tt===void 0&&(tt={type:void 0,texture:void 0},gt[$]=tt),(tt.type!==D||tt.texture!==vt)&&(Y!==$&&(i.activeTexture($),Y=$),i.bindTexture(D,vt||U[D]),tt.type=D,tt.texture=vt)}function V(){const D=gt[Y];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function nt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Vt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ft(D){q.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),q.copy(D))}function mt(D){J.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),J.copy(D))}function Wt(D,vt){let $=l.get(vt);$===void 0&&($=new WeakMap,l.set(vt,$));let tt=$.get(D);tt===void 0&&(tt=i.getUniformBlockIndex(vt,D.name),$.set(D,tt))}function Yt(D,vt){const tt=l.get(vt).get(D);a.get(vt)!==tt&&(i.uniformBlockBinding(vt,tt,D.__bindingPointIndex),a.set(vt,tt))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},Y=null,gt={},h={},u=new WeakMap,d=[],f=null,m=!1,v=null,p=null,g=null,y=null,_=null,b=null,I=null,R=new Ct(0,0,0),C=0,F=!1,E=null,S=null,P=null,X=null,W=null,q.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Q,disable:et,bindFramebuffer:xt,drawBuffers:ct,useProgram:ht,setBlending:At,setMaterial:Nt,setFlipSided:dt,setCullFace:It,setLineWidth:Tt,setPolygonOffset:Lt,setScissorTest:te,activeTexture:T,bindTexture:M,unbindTexture:V,compressedTexImage2D:nt,compressedTexImage3D:st,texImage2D:Et,texImage3D:qt,updateUBOMapping:Wt,uniformBlockBinding:Yt,texStorage2D:Vt,texStorage3D:ot,texSubImage2D:rt,texSubImage3D:Pt,compressedTexSubImage2D:ft,compressedTexSubImage3D:pt,scissor:Ft,viewport:mt,reset:xe}}function Ty(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,M){return f?new OffscreenCanvas(T,M):br("canvas")}function v(T,M,V){let nt=1;const st=te(T);if((st.width>V||st.height>V)&&(nt=V/Math.max(st.width,st.height)),nt<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const rt=Math.floor(nt*st.width),Pt=Math.floor(nt*st.height);u===void 0&&(u=m(rt,Pt));const ft=M?m(rt,Pt):u;return ft.width=rt,ft.height=Pt,ft.getContext("2d").drawImage(T,0,0,rt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+rt+"x"+Pt+")."),ft}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==le&&T.minFilter!==fe}function g(T){i.generateMipmap(T)}function y(T,M,V,nt,st=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let rt=M;if(M===i.RED&&(V===i.FLOAT&&(rt=i.R32F),V===i.HALF_FLOAT&&(rt=i.R16F),V===i.UNSIGNED_BYTE&&(rt=i.R8)),M===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(rt=i.R8UI),V===i.UNSIGNED_SHORT&&(rt=i.R16UI),V===i.UNSIGNED_INT&&(rt=i.R32UI),V===i.BYTE&&(rt=i.R8I),V===i.SHORT&&(rt=i.R16I),V===i.INT&&(rt=i.R32I)),M===i.RG&&(V===i.FLOAT&&(rt=i.RG32F),V===i.HALF_FLOAT&&(rt=i.RG16F),V===i.UNSIGNED_BYTE&&(rt=i.RG8)),M===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(rt=i.RG8UI),V===i.UNSIGNED_SHORT&&(rt=i.RG16UI),V===i.UNSIGNED_INT&&(rt=i.RG32UI),V===i.BYTE&&(rt=i.RG8I),V===i.SHORT&&(rt=i.RG16I),V===i.INT&&(rt=i.RG32I)),M===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),M===i.RGBA){const Pt=st?Wo:ie.getTransfer(nt);V===i.FLOAT&&(rt=i.RGBA32F),V===i.HALF_FLOAT&&(rt=i.RGBA16F),V===i.UNSIGNED_BYTE&&(rt=Pt===de?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function _(T,M){let V;return T?M===null||M===pi||M===ks?V=i.DEPTH24_STENCIL8:M===oi?V=i.DEPTH32F_STENCIL8:M===Vo&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===pi||M===ks?V=i.DEPTH_COMPONENT24:M===oi?V=i.DEPTH_COMPONENT32F:M===Vo&&(V=i.DEPTH_COMPONENT16),V}function b(T,M){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==le&&T.minFilter!==fe?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function I(T){const M=T.target;M.removeEventListener("dispose",I),C(M),M.isVideoTexture&&h.delete(M)}function R(T){const M=T.target;M.removeEventListener("dispose",R),E(M)}function C(T){const M=n.get(T);if(M.__webglInit===void 0)return;const V=T.source,nt=d.get(V);if(nt){const st=nt[M.__cacheKey];st.usedTimes--,st.usedTimes===0&&F(T),Object.keys(nt).length===0&&d.delete(V)}n.remove(T)}function F(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const V=T.source,nt=d.get(V);delete nt[M.__cacheKey],o.memory.textures--}function E(T){const M=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(M.__webglFramebuffer[nt]))for(let st=0;st<M.__webglFramebuffer[nt].length;st++)i.deleteFramebuffer(M.__webglFramebuffer[nt][st]);else i.deleteFramebuffer(M.__webglFramebuffer[nt]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[nt])}else{if(Array.isArray(M.__webglFramebuffer))for(let nt=0;nt<M.__webglFramebuffer.length;nt++)i.deleteFramebuffer(M.__webglFramebuffer[nt]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let nt=0;nt<M.__webglColorRenderbuffer.length;nt++)M.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[nt]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=T.textures;for(let nt=0,st=V.length;nt<st;nt++){const rt=n.get(V[nt]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(V[nt])}n.remove(T)}let S=0;function P(){S=0}function X(){const T=S;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),S+=1,T}function W(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function j(T,M){const V=n.get(T);if(T.isVideoTexture&&Tt(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){const nt=T.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(V,T,M);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+M)}function Z(T,M){const V=n.get(T);if(T.version>0&&V.__version!==T.version){J(V,T,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+M)}function K(T,M){const V=n.get(T);if(T.version>0&&V.__version!==T.version){J(V,T,M);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+M)}function it(T,M){const V=n.get(T);if(T.version>0&&V.__version!==T.version){L(V,T,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+M)}const Y={[di]:i.REPEAT,[Ii]:i.CLAMP_TO_EDGE,[Kl]:i.MIRRORED_REPEAT},gt={[le]:i.NEAREST,[vc]:i.NEAREST_MIPMAP_NEAREST,[Or]:i.NEAREST_MIPMAP_LINEAR,[fe]:i.LINEAR,[Pa]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},O={[S0]:i.NEVER,[R0]:i.ALWAYS,[w0]:i.LESS,[cf]:i.LEQUAL,[E0]:i.EQUAL,[A0]:i.GEQUAL,[b0]:i.GREATER,[T0]:i.NOTEQUAL};function B(T,M){if(M.type===oi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===fe||M.magFilter===Pa||M.magFilter===Or||M.magFilter===ri||M.minFilter===fe||M.minFilter===Pa||M.minFilter===Or||M.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Y[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Y[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Y[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,gt[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,gt[M.minFilter]),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,O[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===le||M.minFilter!==Or&&M.minFilter!==ri||M.type===oi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function q(T,M){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",I));const nt=M.source;let st=d.get(nt);st===void 0&&(st={},d.set(nt,st));const rt=W(M);if(rt!==T.__cacheKey){st[rt]===void 0&&(st[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),st[rt].usedTimes++;const Pt=st[T.__cacheKey];Pt!==void 0&&(st[T.__cacheKey].usedTimes--,Pt.usedTimes===0&&F(M)),T.__cacheKey=rt,T.__webglTexture=st[rt].texture}return V}function J(T,M,V){let nt=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(nt=i.TEXTURE_3D);const st=q(T,M),rt=M.source;e.bindTexture(nt,T.__webglTexture,i.TEXTURE0+V);const Pt=n.get(rt);if(rt.version!==Pt.__version||st===!0){e.activeTexture(i.TEXTURE0+V);const ft=ie.getPrimaries(ie.workingColorSpace),pt=M.colorSpace===An?null:ie.getPrimaries(M.colorSpace),Vt=M.colorSpace===An||ft===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let ot=v(M.image,!1,s.maxTextureSize);ot=Lt(M,ot);const Et=r.convert(M.format,M.colorSpace),qt=r.convert(M.type);let Ft=y(M.internalFormat,Et,qt,M.colorSpace,M.isVideoTexture);B(nt,M);let mt;const Wt=M.mipmaps,Yt=M.isVideoTexture!==!0,xe=Pt.__version===void 0||st===!0,D=rt.dataReady,vt=b(M,ot);if(M.isDepthTexture)Ft=_(M.format===Ns,M.type),xe&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Ft,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Ft,ot.width,ot.height,0,Et,qt,null));else if(M.isDataTexture)if(Wt.length>0){Yt&&xe&&e.texStorage2D(i.TEXTURE_2D,vt,Ft,Wt[0].width,Wt[0].height);for(let $=0,tt=Wt.length;$<tt;$++)mt=Wt[$],Yt?D&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,mt.width,mt.height,Et,qt,mt.data):e.texImage2D(i.TEXTURE_2D,$,Ft,mt.width,mt.height,0,Et,qt,mt.data);M.generateMipmaps=!1}else Yt?(xe&&e.texStorage2D(i.TEXTURE_2D,vt,Ft,ot.width,ot.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,Et,qt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,ot.width,ot.height,0,Et,qt,ot.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Yt&&xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Ft,Wt[0].width,Wt[0].height,ot.depth);for(let $=0,tt=Wt.length;$<tt;$++)if(mt=Wt[$],M.format!==dn)if(Et!==null)if(Yt){if(D)if(M.layerUpdates.size>0){for(const lt of M.layerUpdates){const Ot=mt.width*mt.height;e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,lt,mt.width,mt.height,1,Et,mt.data.slice(Ot*lt,Ot*(lt+1)),0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,mt.width,mt.height,ot.depth,Et,mt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Ft,mt.width,mt.height,ot.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,mt.width,mt.height,ot.depth,Et,qt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Ft,mt.width,mt.height,ot.depth,0,Et,qt,mt.data)}else{Yt&&xe&&e.texStorage2D(i.TEXTURE_2D,vt,Ft,Wt[0].width,Wt[0].height);for(let $=0,tt=Wt.length;$<tt;$++)mt=Wt[$],M.format!==dn?Et!==null?Yt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,mt.width,mt.height,Et,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Ft,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?D&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,mt.width,mt.height,Et,qt,mt.data):e.texImage2D(i.TEXTURE_2D,$,Ft,mt.width,mt.height,0,Et,qt,mt.data)}else if(M.isDataArrayTexture)if(Yt){if(xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Ft,ot.width,ot.height,ot.depth),D)if(M.layerUpdates.size>0){let $;switch(qt){case i.UNSIGNED_BYTE:switch(Et){case i.ALPHA:$=1;break;case i.LUMINANCE:$=1;break;case i.LUMINANCE_ALPHA:$=2;break;case i.RGB:$=3;break;case i.RGBA:$=4;break;default:throw new Error(`Unknown texel size for format ${Et}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:$=1;break;default:throw new Error(`Unknown texel size for type ${qt}.`)}const tt=ot.width*ot.height*$;for(const lt of M.layerUpdates)e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,ot.width,ot.height,1,Et,qt,ot.data.slice(tt*lt,tt*(lt+1)));M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Et,qt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,ot.width,ot.height,ot.depth,0,Et,qt,ot.data);else if(M.isData3DTexture)Yt?(xe&&e.texStorage3D(i.TEXTURE_3D,vt,Ft,ot.width,ot.height,ot.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Et,qt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,ot.width,ot.height,ot.depth,0,Et,qt,ot.data);else if(M.isFramebufferTexture){if(xe)if(Yt)e.texStorage2D(i.TEXTURE_2D,vt,Ft,ot.width,ot.height);else{let $=ot.width,tt=ot.height;for(let lt=0;lt<vt;lt++)e.texImage2D(i.TEXTURE_2D,lt,Ft,$,tt,0,Et,qt,null),$>>=1,tt>>=1}}else if(Wt.length>0){if(Yt&&xe){const $=te(Wt[0]);e.texStorage2D(i.TEXTURE_2D,vt,Ft,$.width,$.height)}for(let $=0,tt=Wt.length;$<tt;$++)mt=Wt[$],Yt?D&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Et,qt,mt):e.texImage2D(i.TEXTURE_2D,$,Ft,Et,qt,mt);M.generateMipmaps=!1}else if(Yt){if(xe){const $=te(ot);e.texStorage2D(i.TEXTURE_2D,vt,Ft,$.width,$.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,qt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Ft,Et,qt,ot);p(M)&&g(nt),Pt.__version=rt.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function L(T,M,V){if(M.image.length!==6)return;const nt=q(T,M),st=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+V);const rt=n.get(st);if(st.version!==rt.__version||nt===!0){e.activeTexture(i.TEXTURE0+V);const Pt=ie.getPrimaries(ie.workingColorSpace),ft=M.colorSpace===An?null:ie.getPrimaries(M.colorSpace),pt=M.colorSpace===An||Pt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Vt=M.isCompressedTexture||M.image[0].isCompressedTexture,ot=M.image[0]&&M.image[0].isDataTexture,Et=[];for(let tt=0;tt<6;tt++)!Vt&&!ot?Et[tt]=v(M.image[tt],!0,s.maxCubemapSize):Et[tt]=ot?M.image[tt].image:M.image[tt],Et[tt]=Lt(M,Et[tt]);const qt=Et[0],Ft=r.convert(M.format,M.colorSpace),mt=r.convert(M.type),Wt=y(M.internalFormat,Ft,mt,M.colorSpace),Yt=M.isVideoTexture!==!0,xe=rt.__version===void 0||nt===!0,D=st.dataReady;let vt=b(M,qt);B(i.TEXTURE_CUBE_MAP,M);let $;if(Vt){Yt&&xe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Wt,qt.width,qt.height);for(let tt=0;tt<6;tt++){$=Et[tt].mipmaps;for(let lt=0;lt<$.length;lt++){const Ot=$[lt];M.format!==dn?Ft!==null?Yt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt,0,0,Ot.width,Ot.height,Ft,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt,Wt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt,0,0,Ot.width,Ot.height,Ft,mt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt,Wt,Ot.width,Ot.height,0,Ft,mt,Ot.data)}}}else{if($=M.mipmaps,Yt&&xe){$.length>0&&vt++;const tt=te(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Wt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ot){Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Et[tt].width,Et[tt].height,Ft,mt,Et[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Wt,Et[tt].width,Et[tt].height,0,Ft,mt,Et[tt].data);for(let lt=0;lt<$.length;lt++){const Jt=$[lt].image[tt].image;Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt+1,0,0,Jt.width,Jt.height,Ft,mt,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt+1,Wt,Jt.width,Jt.height,0,Ft,mt,Jt.data)}}else{Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ft,mt,Et[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Wt,Ft,mt,Et[tt]);for(let lt=0;lt<$.length;lt++){const Ot=$[lt];Yt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt+1,0,0,Ft,mt,Ot.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt+1,Wt,Ft,mt,Ot.image[tt])}}}p(M)&&g(i.TEXTURE_CUBE_MAP),rt.__version=st.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function U(T,M,V,nt,st,rt){const Pt=r.convert(V.format,V.colorSpace),ft=r.convert(V.type),pt=y(V.internalFormat,Pt,ft,V.colorSpace);if(!n.get(M).__hasExternalTextures){const ot=Math.max(1,M.width>>rt),Et=Math.max(1,M.height>>rt);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,rt,pt,ot,Et,M.depth,0,Pt,ft,null):e.texImage2D(st,rt,pt,ot,Et,0,Pt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),It(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,st,n.get(V).__webglTexture,0,dt(M)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,st,n.get(V).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Q(T,M,V){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer){const nt=M.depthTexture,st=nt&&nt.isDepthTexture?nt.type:null,rt=_(M.stencilBuffer,st),Pt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=dt(M);It(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,rt,M.width,M.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,rt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,rt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,T)}else{const nt=M.textures;for(let st=0;st<nt.length;st++){const rt=nt[st],Pt=r.convert(rt.format,rt.colorSpace),ft=r.convert(rt.type),pt=y(rt.internalFormat,Pt,ft,rt.colorSpace),Vt=dt(M);V&&It(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,pt,M.width,M.height):It(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,pt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,pt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const nt=n.get(M.depthTexture).__webglTexture,st=dt(M);if(M.depthTexture.format===bs)It(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(M.depthTexture.format===Ns)It(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function xt(T){const M=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");et(M.__webglFramebuffer,T)}else if(V){M.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[nt]),M.__webglDepthbuffer[nt]=i.createRenderbuffer(),Q(M.__webglDepthbuffer[nt],T,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Q(M.__webglDepthbuffer,T,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(T,M,V){const nt=n.get(T);M!==void 0&&U(nt.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&xt(T)}function ht(T){const M=T.texture,V=n.get(T),nt=n.get(M);T.addEventListener("dispose",R);const st=T.textures,rt=T.isWebGLCubeRenderTarget===!0,Pt=st.length>1;if(Pt||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=M.version,o.memory.textures++),rt){V.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[ft]=[];for(let pt=0;pt<M.mipmaps.length;pt++)V.__webglFramebuffer[ft][pt]=i.createFramebuffer()}else V.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let ft=0;ft<M.mipmaps.length;ft++)V.__webglFramebuffer[ft]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let ft=0,pt=st.length;ft<pt;ft++){const Vt=n.get(st[ft]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&It(T)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ft=0;ft<st.length;ft++){const pt=st[ft];V.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ft]);const Vt=r.convert(pt.format,pt.colorSpace),ot=r.convert(pt.type),Et=y(pt.internalFormat,Vt,ot,pt.colorSpace,T.isXRRenderTarget===!0),qt=dt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,Et,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,V.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Q(V.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),B(i.TEXTURE_CUBE_MAP,M);for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)U(V.__webglFramebuffer[ft][pt],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,pt);else U(V.__webglFramebuffer[ft],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);p(M)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let ft=0,pt=st.length;ft<pt;ft++){const Vt=st[ft],ot=n.get(Vt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),B(i.TEXTURE_2D,Vt),U(V.__webglFramebuffer,T,Vt,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),p(Vt)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ft=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,nt.__webglTexture),B(ft,M),M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)U(V.__webglFramebuffer[pt],T,M,i.COLOR_ATTACHMENT0,ft,pt);else U(V.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,ft,0);p(M)&&g(ft),e.unbindTexture()}T.depthBuffer&&xt(T)}function A(T){const M=T.textures;for(let V=0,nt=M.length;V<nt;V++){const st=M[V];if(p(st)){const rt=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pt=n.get(st).__webglTexture;e.bindTexture(rt,Pt),g(rt),e.unbindTexture()}}}const Mt=[],At=[];function Nt(T){if(T.samples>0){if(It(T)===!1){const M=T.textures,V=T.width,nt=T.height;let st=i.COLOR_BUFFER_BIT;const rt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(T),ft=M.length>1;if(ft)for(let pt=0;pt<M.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let pt=0;pt<M.length;pt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[pt]);const Vt=n.get(M[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,V,nt,0,0,V,nt,st,i.NEAREST),l===!0&&(Mt.length=0,At.length=0,Mt.push(i.COLOR_ATTACHMENT0+pt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Mt.push(rt),At.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,At)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let pt=0;pt<M.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[pt]);const Vt=n.get(M[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function dt(T){return Math.min(s.maxSamples,T.samples)}function It(T){const M=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Tt(T){const M=o.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function Lt(T,M){const V=T.colorSpace,nt=T.format,st=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==vi&&V!==An&&(ie.getTransfer(V)===de?(nt!==dn||st!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function te(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=P,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=K,this.setTextureCube=it,this.rebindTextures=ct,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=U,this.useMultisampledRTT=It}function Ay(i,t){function e(n,s=An){let r;const o=ie.getTransfer(s);if(n===fi)return i.UNSIGNED_BYTE;if(n===nf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===u0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===c0)return i.BYTE;if(n===h0)return i.SHORT;if(n===Vo)return i.UNSIGNED_SHORT;if(n===ef)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===oi)return i.FLOAT;if(n===mi)return i.HALF_FLOAT;if(n===d0)return i.ALPHA;if(n===f0)return i.RGB;if(n===dn)return i.RGBA;if(n===p0)return i.LUMINANCE;if(n===m0)return i.LUMINANCE_ALPHA;if(n===bs)return i.DEPTH_COMPONENT;if(n===Ns)return i.DEPTH_STENCIL;if(n===g0)return i.RED;if(n===rf)return i.RED_INTEGER;if(n===v0)return i.RG;if(n===of)return i.RG_INTEGER;if(n===af)return i.RGBA_INTEGER;if(n===La||n===Da||n===Ia||n===Ua)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===La)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===La)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rh||n===oh||n===ah||n===lh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===rh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ah)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ch||n===hh||n===uh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ch||n===hh)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===dh||n===fh||n===ph||n===mh||n===gh||n===vh||n===_h||n===xh||n===yh||n===Mh||n===Sh||n===wh||n===Eh||n===bh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===dh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ph)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_h)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bh)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ka||n===Th||n===Ah)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ka)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Th)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ah)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_0||n===Rh||n===Ch||n===Ph)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ka)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Rh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ch)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ph)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Ry extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class rn extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cy={type:"move"};class al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Py=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ly=`
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

}`;class Dy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new fn({vertexShader:Py,fragmentShader:Ly,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Iy extends qs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const v=new Dy,p=e.getContextAttributes();let g=null,y=null;const _=[],b=[],I=new Bt;let R=null;const C=new Xe;C.layers.enable(1),C.viewport=new _e;const F=new Xe;F.layers.enable(2),F.viewport=new _e;const E=[C,F],S=new Ry;S.layers.enable(1),S.layers.enable(2);let P=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let U=_[L];return U===void 0&&(U=new al,_[L]=U),U.getTargetRaySpace()},this.getControllerGrip=function(L){let U=_[L];return U===void 0&&(U=new al,_[L]=U),U.getGripSpace()},this.getHand=function(L){let U=_[L];return U===void 0&&(U=new al,_[L]=U),U.getHandSpace()};function W(L){const U=b.indexOf(L.inputSource);if(U===-1)return;const Q=_[U];Q!==void 0&&(Q.update(L.inputSource,L.frame,c||o),Q.dispatchEvent({type:L.type,data:L.inputSource}))}function j(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",Z);for(let L=0;L<_.length;L++){const U=b[L];U!==null&&(b[L]=null,_[L].disconnect(U))}P=null,X=null,v.reset(),t.setRenderTarget(g),f=null,d=null,u=null,s=null,y=null,J.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",j),s.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const U={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,U),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Sn(f.framebufferWidth,f.framebufferHeight,{format:dn,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let U=null,Q=null,et=null;p.depth&&(et=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,U=p.stencil?Ns:bs,Q=p.stencil?ks:pi);const xt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(xt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Sn(d.textureWidth,d.textureHeight,{format:dn,type:fi,depthTexture:new $o(d.textureWidth,d.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),J.setContext(s),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function Z(L){for(let U=0;U<L.removed.length;U++){const Q=L.removed[U],et=b.indexOf(Q);et>=0&&(b[et]=null,_[et].disconnect(Q))}for(let U=0;U<L.added.length;U++){const Q=L.added[U];let et=b.indexOf(Q);if(et===-1){for(let ct=0;ct<_.length;ct++)if(ct>=b.length){b.push(Q),et=ct;break}else if(b[ct]===null){b[ct]=Q,et=ct;break}if(et===-1)break}const xt=_[et];xt&&xt.connect(Q)}}const K=new N,it=new N;function Y(L,U,Q){K.setFromMatrixPosition(U.matrixWorld),it.setFromMatrixPosition(Q.matrixWorld);const et=K.distanceTo(it),xt=U.projectionMatrix.elements,ct=Q.projectionMatrix.elements,ht=xt[14]/(xt[10]-1),A=xt[14]/(xt[10]+1),Mt=(xt[9]+1)/xt[5],At=(xt[9]-1)/xt[5],Nt=(xt[8]-1)/xt[0],dt=(ct[8]+1)/ct[0],It=ht*Nt,Tt=ht*dt,Lt=et/(-Nt+dt),te=Lt*-Nt;U.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(te),L.translateZ(Lt),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const T=ht+Lt,M=A+Lt,V=It-te,nt=Tt+(et-te),st=Mt*A/M*T,rt=At*A/M*T;L.projectionMatrix.makePerspective(V,nt,st,rt,T,M),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function gt(L,U){U===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(U.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(s===null)return;v.texture!==null&&(L.near=v.depthNear,L.far=v.depthFar),S.near=F.near=C.near=L.near,S.far=F.far=C.far=L.far,(P!==S.near||X!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,X=S.far,C.near=P,C.far=X,F.near=P,F.far=X,C.updateProjectionMatrix(),F.updateProjectionMatrix(),L.updateProjectionMatrix());const U=L.parent,Q=S.cameras;gt(S,U);for(let et=0;et<Q.length;et++)gt(Q[et],U);Q.length===2?Y(S,C,F):S.projectionMatrix.copy(C.projectionMatrix),O(L,S,U)};function O(L,U,Q){Q===null?L.matrix.copy(U.matrixWorld):(L.matrix.copy(Q.matrixWorld),L.matrix.invert(),L.matrix.multiply(U.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(U.projectionMatrix),L.projectionMatrixInverse.copy(U.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Zl*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(L){l=L,d!==null&&(d.fixedFoveation=L),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=L)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let B=null;function q(L,U){if(h=U.getViewerPose(c||o),m=U,h!==null){const Q=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let et=!1;Q.length!==S.cameras.length&&(S.cameras.length=0,et=!0);for(let ct=0;ct<Q.length;ct++){const ht=Q[ct];let A=null;if(f!==null)A=f.getViewport(ht);else{const At=u.getViewSubImage(d,ht);A=At.viewport,ct===0&&(t.setRenderTargetTextures(y,At.colorTexture,d.ignoreDepthValues?void 0:At.depthStencilTexture),t.setRenderTarget(y))}let Mt=E[ct];Mt===void 0&&(Mt=new Xe,Mt.layers.enable(ct),Mt.viewport=new _e,E[ct]=Mt),Mt.matrix.fromArray(ht.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(ht.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(A.x,A.y,A.width,A.height),ct===0&&(S.matrix.copy(Mt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),et===!0&&S.cameras.push(Mt)}const xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")){const ct=u.getDepthInformation(Q[0]);ct&&ct.isValid&&ct.texture&&v.init(t,ct,s.renderState)}}for(let Q=0;Q<_.length;Q++){const et=b[Q],xt=_[Q];et!==null&&xt!==void 0&&xt.update(et,U,c||o)}B&&B(L,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),m=null}const J=new yf;J.setAnimationLoop(q),this.setAnimationLoop=function(L){B=L},this.dispose=function(){}}}const bi=new Xn,Uy=new ce;function ky(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,vf(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,y,_,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,b)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),v(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,y,_):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Ue&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Ue&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const y=t.get(g),_=y.envMap,b=y.envMapRotation;_&&(p.envMap.value=_,bi.copy(b),bi.x*=-1,bi.y*=-1,bi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),p.envMapRotation.value.setFromMatrix4(Uy.makeRotationFromEuler(bi)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,y,_){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=_*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,y){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ue&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){const y=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ny(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const b=_.program;n.uniformBlockBinding(y,b)}function c(y,_){let b=s[y.id];b===void 0&&(m(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",p));const I=_.program;n.updateUBOMapping(y,I);const R=t.render.frame;r[y.id]!==R&&(d(y),r[y.id]=R)}function h(y){const _=u();y.__bindingPointIndex=_;const b=i.createBuffer(),I=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,I,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,b),b}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=s[y.id],b=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let R=0,C=b.length;R<C;R++){const F=Array.isArray(b[R])?b[R]:[b[R]];for(let E=0,S=F.length;E<S;E++){const P=F[E];if(f(P,R,E,I)===!0){const X=P.__offset,W=Array.isArray(P.value)?P.value:[P.value];let j=0;for(let Z=0;Z<W.length;Z++){const K=W[Z],it=v(K);typeof K=="number"||typeof K=="boolean"?(P.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,X+j,P.__data)):K.isMatrix3?(P.__data[0]=K.elements[0],P.__data[1]=K.elements[1],P.__data[2]=K.elements[2],P.__data[3]=0,P.__data[4]=K.elements[3],P.__data[5]=K.elements[4],P.__data[6]=K.elements[5],P.__data[7]=0,P.__data[8]=K.elements[6],P.__data[9]=K.elements[7],P.__data[10]=K.elements[8],P.__data[11]=0):(K.toArray(P.__data,j),j+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,b,I){const R=y.value,C=_+"_"+b;if(I[C]===void 0)return typeof R=="number"||typeof R=="boolean"?I[C]=R:I[C]=R.clone(),!0;{const F=I[C];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return I[C]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function m(y){const _=y.uniforms;let b=0;const I=16;for(let C=0,F=_.length;C<F;C++){const E=Array.isArray(_[C])?_[C]:[_[C]];for(let S=0,P=E.length;S<P;S++){const X=E[S],W=Array.isArray(X.value)?X.value:[X.value];for(let j=0,Z=W.length;j<Z;j++){const K=W[j],it=v(K),Y=b%I;Y!==0&&I-Y<it.boundary&&(b+=I-Y),X.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=b,b+=it.storage}}}const R=b%I;return R>0&&(b+=I-R),y.__size=b,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function p(y){const _=y.target;_.removeEventListener("dispose",p);const b=o.indexOf(_.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function g(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}class Af{constructor(t={}){const{canvas:e=P0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),m=new Int32Array(4);let v=null,p=null;const g=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this.toneMapping=Wn,this.toneMappingExposure=1;const _=this;let b=!1,I=0,R=0,C=null,F=-1,E=null;const S=new _e,P=new _e;let X=null;const W=new Ct(0);let j=0,Z=e.width,K=e.height,it=1,Y=null,gt=null;const O=new _e(0,0,Z,K),B=new _e(0,0,Z,K);let q=!1;const J=new Mc;let L=!1,U=!1;const Q=new ce,et=new N,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function ht(){return C===null?it:1}let A=n;function Mt(w,k){return e.getContext(w,k)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gc}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",$,!1),e.addEventListener("webglcontextcreationerror",tt,!1),A===null){const k="webgl2";if(A=Mt(k,w),A===null)throw Mt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let At,Nt,dt,It,Tt,Lt,te,T,M,V,nt,st,rt,Pt,ft,pt,Vt,ot,Et,qt,Ft,mt,Wt,Yt;function xe(){At=new q_(A),At.init(),mt=new Ay(A,At),Nt=new B_(A,At,t,mt),dt=new by(A),It=new K_(A),Tt=new dy,Lt=new Ty(A,At,dt,Tt,Nt,mt,It),te=new G_(_),T=new X_(_),M=new ng(A),Wt=new O_(A,M),V=new Y_(A,M,It,Wt),nt=new Z_(A,V,M,It),Et=new j_(A,Nt,Lt),pt=new H_(Tt),st=new uy(_,te,T,At,Nt,Wt,pt),rt=new ky(_,Tt),Pt=new py,ft=new yy(At),ot=new F_(_,te,T,dt,nt,d,l),Vt=new Ey(_,nt,Nt),Yt=new Ny(A,It,Nt,dt),qt=new z_(A,At,It),Ft=new $_(A,At,It),It.programs=st.programs,_.capabilities=Nt,_.extensions=At,_.properties=Tt,_.renderLists=Pt,_.shadowMap=Vt,_.state=dt,_.info=It}xe();const D=new Iy(_,A);this.xr=D,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const w=At.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=At.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(w){w!==void 0&&(it=w,this.setSize(Z,K,!1))},this.getSize=function(w){return w.set(Z,K)},this.setSize=function(w,k,H=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,K=k,e.width=Math.floor(w*it),e.height=Math.floor(k*it),H===!0&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(Z*it,K*it).floor()},this.setDrawingBufferSize=function(w,k,H){Z=w,K=k,it=H,e.width=Math.floor(w*H),e.height=Math.floor(k*H),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(O)},this.setViewport=function(w,k,H,G){w.isVector4?O.set(w.x,w.y,w.z,w.w):O.set(w,k,H,G),dt.viewport(S.copy(O).multiplyScalar(it).round())},this.getScissor=function(w){return w.copy(B)},this.setScissor=function(w,k,H,G){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,k,H,G),dt.scissor(P.copy(B).multiplyScalar(it).round())},this.getScissorTest=function(){return q},this.setScissorTest=function(w){dt.setScissorTest(q=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){gt=w},this.getClearColor=function(w){return w.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(w=!0,k=!0,H=!0){let G=0;if(w){let z=!1;if(C!==null){const at=C.texture.format;z=at===af||at===of||at===rf}if(z){const at=C.texture.type,_t=at===fi||at===pi||at===Vo||at===ks||at===nf||at===sf,yt=ot.getClearColor(),St=ot.getClearAlpha(),Ut=yt.r,kt=yt.g,Dt=yt.b;_t?(f[0]=Ut,f[1]=kt,f[2]=Dt,f[3]=St,A.clearBufferuiv(A.COLOR,0,f)):(m[0]=Ut,m[1]=kt,m[2]=Dt,m[3]=St,A.clearBufferiv(A.COLOR,0,m))}else G|=A.COLOR_BUFFER_BIT}k&&(G|=A.DEPTH_BUFFER_BIT),H&&(G|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",$,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),Pt.dispose(),ft.dispose(),Tt.dispose(),te.dispose(),T.dispose(),nt.dispose(),Wt.dispose(),Yt.dispose(),st.dispose(),D.dispose(),D.removeEventListener("sessionstart",En),D.removeEventListener("sessionend",bn),_i.stop()};function vt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const w=It.autoReset,k=Vt.enabled,H=Vt.autoUpdate,G=Vt.needsUpdate,z=Vt.type;xe(),It.autoReset=w,Vt.enabled=k,Vt.autoUpdate=H,Vt.needsUpdate=G,Vt.type=z}function tt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function lt(w){const k=w.target;k.removeEventListener("dispose",lt),Ot(k)}function Ot(w){Jt(w),Tt.remove(w)}function Jt(w){const k=Tt.get(w).programs;k!==void 0&&(k.forEach(function(H){st.releaseProgram(H)}),w.isShaderMaterial&&st.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,H,G,z,at){k===null&&(k=xt);const _t=z.isMesh&&z.matrixWorld.determinant()<0,yt=Mm(w,k,H,G,z);dt.setMaterial(G,_t);let St=H.index,Ut=1;if(G.wireframe===!0){if(St=V.getWireframeAttribute(H),St===void 0)return;Ut=2}const kt=H.drawRange,Dt=H.attributes.position;let ee=kt.start*Ut,ge=(kt.start+kt.count)*Ut;at!==null&&(ee=Math.max(ee,at.start*Ut),ge=Math.min(ge,(at.start+at.count)*Ut)),St!==null?(ee=Math.max(ee,0),ge=Math.min(ge,St.count)):Dt!=null&&(ee=Math.max(ee,0),ge=Math.min(ge,Dt.count));const ve=ge-ee;if(ve<0||ve===1/0)return;Wt.setup(z,G,yt,H,St);let Je,ne=qt;if(St!==null&&(Je=M.get(St),ne=Ft,ne.setIndex(Je)),z.isMesh)G.wireframe===!0?(dt.setLineWidth(G.wireframeLinewidth*ht()),ne.setMode(A.LINES)):ne.setMode(A.TRIANGLES);else if(z.isLine){let Rt=G.linewidth;Rt===void 0&&(Rt=1),dt.setLineWidth(Rt*ht()),z.isLineSegments?ne.setMode(A.LINES):z.isLineLoop?ne.setMode(A.LINE_LOOP):ne.setMode(A.LINE_STRIP)}else z.isPoints?ne.setMode(A.POINTS):z.isSprite&&ne.setMode(A.TRIANGLES);if(z.isBatchedMesh)z._multiDrawInstances!==null?ne.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances):ne.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ne.renderInstances(ee,ve,z.count);else if(H.isInstancedBufferGeometry){const Rt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,He=Math.min(H.instanceCount,Rt);ne.renderInstances(ee,ve,He)}else ne.render(ee,ve)};function ye(w,k,H){w.transparent===!0&&w.side===Be&&w.forceSinglePass===!1?(w.side=Ue,w.needsUpdate=!0,Nr(w,k,H),w.side=ui,w.needsUpdate=!0,Nr(w,k,H),w.side=Be):Nr(w,k,H)}this.compile=function(w,k,H=null){H===null&&(H=w),p=ft.get(H),p.init(k),y.push(p),H.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),w!==H&&w.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const G=new Set;return w.traverse(function(z){const at=z.material;if(at)if(Array.isArray(at))for(let _t=0;_t<at.length;_t++){const yt=at[_t];ye(yt,H,z),G.add(yt)}else ye(at,H,z),G.add(at)}),y.pop(),p=null,G},this.compileAsync=function(w,k,H=null){const G=this.compile(w,k,H);return new Promise(z=>{function at(){if(G.forEach(function(_t){Tt.get(_t).currentProgram.isReady()&&G.delete(_t)}),G.size===0){z(w);return}setTimeout(at,10)}At.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Pe=null;function se(w){Pe&&Pe(w)}function En(){_i.stop()}function bn(){_i.start()}const _i=new yf;_i.setAnimationLoop(se),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(w){Pe=w,D.setAnimationLoop(w),w===null?_i.stop():_i.start()},D.addEventListener("sessionstart",En),D.addEventListener("sessionend",bn),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(k),k=D.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,k,C),p=ft.get(w,y.length),p.init(k),y.push(p),Q.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),J.setFromProjectionMatrix(Q),U=this.localClippingEnabled,L=pt.init(this.clippingPlanes,U),v=Pt.get(w,g.length),v.init(),g.push(v),D.enabled===!0&&D.isPresenting===!0){const at=_.xr.getDepthSensingMesh();at!==null&&Ta(at,k,-1/0,_.sortObjects)}Ta(w,k,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(Y,gt),ct=D.enabled===!1||D.isPresenting===!1||D.hasDepthSensing()===!1,ct&&ot.addToRenderList(v,w),this.info.render.frame++,L===!0&&pt.beginShadows();const H=p.state.shadowsArray;Vt.render(H,w,k),L===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=v.opaque,z=v.transmissive;if(p.setupLights(),k.isArrayCamera){const at=k.cameras;if(z.length>0)for(let _t=0,yt=at.length;_t<yt;_t++){const St=at[_t];Zc(G,z,w,St)}ct&&ot.render(w);for(let _t=0,yt=at.length;_t<yt;_t++){const St=at[_t];jc(v,w,St,St.viewport)}}else z.length>0&&Zc(G,z,w,k),ct&&ot.render(w),jc(v,w,k);C!==null&&(Lt.updateMultisampleRenderTarget(C),Lt.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(_,w,k),Wt.resetDefaultState(),F=-1,E=null,y.pop(),y.length>0?(p=y[y.length-1],L===!0&&pt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function Ta(w,k,H,G){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||J.intersectsSprite(w)){G&&et.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Q);const _t=nt.update(w),yt=w.material;yt.visible&&v.push(w,_t,yt,H,et.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||J.intersectsObject(w))){const _t=nt.update(w),yt=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),et.copy(w.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),et.copy(_t.boundingSphere.center)),et.applyMatrix4(w.matrixWorld).applyMatrix4(Q)),Array.isArray(yt)){const St=_t.groups;for(let Ut=0,kt=St.length;Ut<kt;Ut++){const Dt=St[Ut],ee=yt[Dt.materialIndex];ee&&ee.visible&&v.push(w,_t,ee,H,et.z,Dt)}}else yt.visible&&v.push(w,_t,yt,H,et.z,null)}}const at=w.children;for(let _t=0,yt=at.length;_t<yt;_t++)Ta(at[_t],k,H,G)}function jc(w,k,H,G){const z=w.opaque,at=w.transmissive,_t=w.transparent;p.setupLightsView(H),L===!0&&pt.setGlobalState(_.clippingPlanes,H),G&&dt.viewport(S.copy(G)),z.length>0&&kr(z,k,H),at.length>0&&kr(at,k,H),_t.length>0&&kr(_t,k,H),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Zc(w,k,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Sn(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float")?mi:fi,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const at=p.state.transmissionRenderTarget[G.id],_t=G.viewport||S;at.setSize(_t.z,_t.w);const yt=_.getRenderTarget();_.setRenderTarget(at),_.getClearColor(W),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),ct?ot.render(H):_.clear();const St=_.toneMapping;_.toneMapping=Wn;const Ut=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),L===!0&&pt.setGlobalState(_.clippingPlanes,G),kr(w,H,G),Lt.updateMultisampleRenderTarget(at),Lt.updateRenderTargetMipmap(at),At.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Dt=0,ee=k.length;Dt<ee;Dt++){const ge=k[Dt],ve=ge.object,Je=ge.geometry,ne=ge.material,Rt=ge.group;if(ne.side===Be&&ve.layers.test(G.layers)){const He=ne.side;ne.side=Ue,ne.needsUpdate=!0,Jc(ve,H,G,Je,ne,Rt),ne.side=He,ne.needsUpdate=!0,kt=!0}}kt===!0&&(Lt.updateMultisampleRenderTarget(at),Lt.updateRenderTargetMipmap(at))}_.setRenderTarget(yt),_.setClearColor(W,j),Ut!==void 0&&(G.viewport=Ut),_.toneMapping=St}function kr(w,k,H){const G=k.isScene===!0?k.overrideMaterial:null;for(let z=0,at=w.length;z<at;z++){const _t=w[z],yt=_t.object,St=_t.geometry,Ut=G===null?_t.material:G,kt=_t.group;yt.layers.test(H.layers)&&Jc(yt,k,H,St,Ut,kt)}}function Jc(w,k,H,G,z,at){w.onBeforeRender(_,k,H,G,z,at),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(_,k,H,G,w,at),z.transparent===!0&&z.side===Be&&z.forceSinglePass===!1?(z.side=Ue,z.needsUpdate=!0,_.renderBufferDirect(H,k,G,z,w,at),z.side=ui,z.needsUpdate=!0,_.renderBufferDirect(H,k,G,z,w,at),z.side=Be):_.renderBufferDirect(H,k,G,z,w,at),w.onAfterRender(_,k,H,G,z,at)}function Nr(w,k,H){k.isScene!==!0&&(k=xt);const G=Tt.get(w),z=p.state.lights,at=p.state.shadowsArray,_t=z.state.version,yt=st.getParameters(w,z.state,at,k,H),St=st.getProgramCacheKey(yt);let Ut=G.programs;G.environment=w.isMeshStandardMaterial?k.environment:null,G.fog=k.fog,G.envMap=(w.isMeshStandardMaterial?T:te).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Ut===void 0&&(w.addEventListener("dispose",lt),Ut=new Map,G.programs=Ut);let kt=Ut.get(St);if(kt!==void 0){if(G.currentProgram===kt&&G.lightsStateVersion===_t)return th(w,yt),kt}else yt.uniforms=st.getUniforms(w),w.onBuild(H,yt,_),w.onBeforeCompile(yt,_),kt=st.acquireProgram(yt,St),Ut.set(St,kt),G.uniforms=yt.uniforms;const Dt=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Dt.clippingPlanes=pt.uniform),th(w,yt),G.needsLights=wm(w),G.lightsStateVersion=_t,G.needsLights&&(Dt.ambientLightColor.value=z.state.ambient,Dt.lightProbe.value=z.state.probe,Dt.directionalLights.value=z.state.directional,Dt.directionalLightShadows.value=z.state.directionalShadow,Dt.spotLights.value=z.state.spot,Dt.spotLightShadows.value=z.state.spotShadow,Dt.rectAreaLights.value=z.state.rectArea,Dt.ltc_1.value=z.state.rectAreaLTC1,Dt.ltc_2.value=z.state.rectAreaLTC2,Dt.pointLights.value=z.state.point,Dt.pointLightShadows.value=z.state.pointShadow,Dt.hemisphereLights.value=z.state.hemi,Dt.directionalShadowMap.value=z.state.directionalShadowMap,Dt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Dt.spotShadowMap.value=z.state.spotShadowMap,Dt.spotLightMatrix.value=z.state.spotLightMatrix,Dt.spotLightMap.value=z.state.spotLightMap,Dt.pointShadowMap.value=z.state.pointShadowMap,Dt.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=kt,G.uniformsList=null,kt}function Qc(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=Bo.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function th(w,k){const H=Tt.get(w);H.outputColorSpace=k.outputColorSpace,H.batching=k.batching,H.batchingColor=k.batchingColor,H.instancing=k.instancing,H.instancingColor=k.instancingColor,H.instancingMorph=k.instancingMorph,H.skinning=k.skinning,H.morphTargets=k.morphTargets,H.morphNormals=k.morphNormals,H.morphColors=k.morphColors,H.morphTargetsCount=k.morphTargetsCount,H.numClippingPlanes=k.numClippingPlanes,H.numIntersection=k.numClipIntersection,H.vertexAlphas=k.vertexAlphas,H.vertexTangents=k.vertexTangents,H.toneMapping=k.toneMapping}function Mm(w,k,H,G,z){k.isScene!==!0&&(k=xt),Lt.resetTextureUnits();const at=k.fog,_t=G.isMeshStandardMaterial?k.environment:null,yt=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:vi,St=(G.isMeshStandardMaterial?T:te).get(G.envMap||_t),Ut=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,kt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Dt=!!H.morphAttributes.position,ee=!!H.morphAttributes.normal,ge=!!H.morphAttributes.color;let ve=Wn;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ve=_.toneMapping);const Je=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ne=Je!==void 0?Je.length:0,Rt=Tt.get(G),He=p.state.lights;if(L===!0&&(U===!0||w!==E)){const an=w===E&&G.id===F;pt.setState(G,w,an)}let re=!1;G.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==He.state.version||Rt.outputColorSpace!==yt||z.isBatchedMesh&&Rt.batching===!1||!z.isBatchedMesh&&Rt.batching===!0||z.isBatchedMesh&&Rt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Rt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Rt.instancing===!1||!z.isInstancedMesh&&Rt.instancing===!0||z.isSkinnedMesh&&Rt.skinning===!1||!z.isSkinnedMesh&&Rt.skinning===!0||z.isInstancedMesh&&Rt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Rt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Rt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Rt.instancingMorph===!1&&z.morphTexture!==null||Rt.envMap!==St||G.fog===!0&&Rt.fog!==at||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==pt.numPlanes||Rt.numIntersection!==pt.numIntersection)||Rt.vertexAlphas!==Ut||Rt.vertexTangents!==kt||Rt.morphTargets!==Dt||Rt.morphNormals!==ee||Rt.morphColors!==ge||Rt.toneMapping!==ve||Rt.morphTargetsCount!==ne)&&(re=!0):(re=!0,Rt.__version=G.version);let Cn=Rt.currentProgram;re===!0&&(Cn=Nr(G,k,z));let Fr=!1,xi=!1,Aa=!1;const Le=Cn.getUniforms(),$n=Rt.uniforms;if(dt.useProgram(Cn.program)&&(Fr=!0,xi=!0,Aa=!0),G.id!==F&&(F=G.id,xi=!0),Fr||E!==w){Le.setValue(A,"projectionMatrix",w.projectionMatrix),Le.setValue(A,"viewMatrix",w.matrixWorldInverse);const an=Le.map.cameraPosition;an!==void 0&&an.setValue(A,et.setFromMatrixPosition(w.matrixWorld)),Nt.logarithmicDepthBuffer&&Le.setValue(A,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Le.setValue(A,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,xi=!0,Aa=!0)}if(z.isSkinnedMesh){Le.setOptional(A,z,"bindMatrix"),Le.setOptional(A,z,"bindMatrixInverse");const an=z.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Le.setValue(A,"boneTexture",an.boneTexture,Lt))}z.isBatchedMesh&&(Le.setOptional(A,z,"batchingTexture"),Le.setValue(A,"batchingTexture",z._matricesTexture,Lt),Le.setOptional(A,z,"batchingColorTexture"),z._colorsTexture!==null&&Le.setValue(A,"batchingColorTexture",z._colorsTexture,Lt));const Ra=H.morphAttributes;if((Ra.position!==void 0||Ra.normal!==void 0||Ra.color!==void 0)&&Et.update(z,H,Cn),(xi||Rt.receiveShadow!==z.receiveShadow)&&(Rt.receiveShadow=z.receiveShadow,Le.setValue(A,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&($n.envMap.value=St,$n.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&k.environment!==null&&($n.envMapIntensity.value=k.environmentIntensity),xi&&(Le.setValue(A,"toneMappingExposure",_.toneMappingExposure),Rt.needsLights&&Sm($n,Aa),at&&G.fog===!0&&rt.refreshFogUniforms($n,at),rt.refreshMaterialUniforms($n,G,it,K,p.state.transmissionRenderTarget[w.id]),Bo.upload(A,Qc(Rt),$n,Lt)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Bo.upload(A,Qc(Rt),$n,Lt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Le.setValue(A,"center",z.center),Le.setValue(A,"modelViewMatrix",z.modelViewMatrix),Le.setValue(A,"normalMatrix",z.normalMatrix),Le.setValue(A,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const an=G.uniformsGroups;for(let Ca=0,Em=an.length;Ca<Em;Ca++){const eh=an[Ca];Yt.update(eh,Cn),Yt.bind(eh,Cn)}}return Cn}function Sm(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function wm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,k,H){Tt.get(w.texture).__webglTexture=k,Tt.get(w.depthTexture).__webglTexture=H;const G=Tt.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const H=Tt.get(w);H.__webglFramebuffer=k,H.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,H=0){C=w,I=k,R=H;let G=!0,z=null,at=!1,_t=!1;if(w){const St=Tt.get(w);St.__useDefaultFramebuffer!==void 0?(dt.bindFramebuffer(A.FRAMEBUFFER,null),G=!1):St.__webglFramebuffer===void 0?Lt.setupRenderTarget(w):St.__hasExternalTextures&&Lt.rebindTextures(w,Tt.get(w.texture).__webglTexture,Tt.get(w.depthTexture).__webglTexture);const Ut=w.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(_t=!0);const kt=Tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(kt[k])?z=kt[k][H]:z=kt[k],at=!0):w.samples>0&&Lt.useMultisampledRTT(w)===!1?z=Tt.get(w).__webglMultisampledFramebuffer:Array.isArray(kt)?z=kt[H]:z=kt,S.copy(w.viewport),P.copy(w.scissor),X=w.scissorTest}else S.copy(O).multiplyScalar(it).floor(),P.copy(B).multiplyScalar(it).floor(),X=q;if(dt.bindFramebuffer(A.FRAMEBUFFER,z)&&G&&dt.drawBuffers(w,z),dt.viewport(S),dt.scissor(P),dt.setScissorTest(X),at){const St=Tt.get(w.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+k,St.__webglTexture,H)}else if(_t){const St=Tt.get(w.texture),Ut=k||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,St.__webglTexture,H||0,Ut)}F=-1},this.readRenderTargetPixels=function(w,k,H,G,z,at,_t){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt){dt.bindFramebuffer(A.FRAMEBUFFER,yt);try{const St=w.texture,Ut=St.format,kt=St.type;if(!Nt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-G&&H>=0&&H<=w.height-z&&A.readPixels(k,H,G,z,mt.convert(Ut),mt.convert(kt),at)}finally{const St=C!==null?Tt.get(C).__webglFramebuffer:null;dt.bindFramebuffer(A.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(w,k,H,G,z,at,_t){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt){dt.bindFramebuffer(A.FRAMEBUFFER,yt);try{const St=w.texture,Ut=St.format,kt=St.type;if(!Nt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-G&&H>=0&&H<=w.height-z){const Dt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Dt),A.bufferData(A.PIXEL_PACK_BUFFER,at.byteLength,A.STREAM_READ),A.readPixels(k,H,G,z,mt.convert(Ut),mt.convert(kt),0),A.flush();const ee=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);await L0(A,ee,4);try{A.bindBuffer(A.PIXEL_PACK_BUFFER,Dt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,at)}finally{A.deleteBuffer(Dt),A.deleteSync(ee)}return at}}finally{const St=C!==null?Tt.get(C).__webglFramebuffer:null;dt.bindFramebuffer(A.FRAMEBUFFER,St)}}},this.copyFramebufferToTexture=function(w,k=null,H=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-H),z=Math.floor(w.image.width*G),at=Math.floor(w.image.height*G),_t=k!==null?k.x:0,yt=k!==null?k.y:0;Lt.setTexture2D(w,0),A.copyTexSubImage2D(A.TEXTURE_2D,H,0,0,_t,yt,z,at),dt.unbindTexture()},this.copyTextureToTexture=function(w,k,H=null,G=null,z=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],k=arguments[2],z=arguments[3]||0,H=null);let at,_t,yt,St,Ut,kt;H!==null?(at=H.max.x-H.min.x,_t=H.max.y-H.min.y,yt=H.min.x,St=H.min.y):(at=w.image.width,_t=w.image.height,yt=0,St=0),G!==null?(Ut=G.x,kt=G.y):(Ut=0,kt=0);const Dt=mt.convert(k.format),ee=mt.convert(k.type);Lt.setTexture2D(k,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,k.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,k.unpackAlignment);const ge=A.getParameter(A.UNPACK_ROW_LENGTH),ve=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Je=A.getParameter(A.UNPACK_SKIP_PIXELS),ne=A.getParameter(A.UNPACK_SKIP_ROWS),Rt=A.getParameter(A.UNPACK_SKIP_IMAGES),He=w.isCompressedTexture?w.mipmaps[z]:w.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,He.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,He.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,yt),A.pixelStorei(A.UNPACK_SKIP_ROWS,St),w.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,z,Ut,kt,at,_t,Dt,ee,He.data):w.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,z,Ut,kt,He.width,He.height,Dt,He.data):A.texSubImage2D(A.TEXTURE_2D,z,Ut,kt,Dt,ee,He),A.pixelStorei(A.UNPACK_ROW_LENGTH,ge),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ve),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Je),A.pixelStorei(A.UNPACK_SKIP_ROWS,ne),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Rt),z===0&&k.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),dt.unbindTexture()},this.copyTextureToTexture3D=function(w,k,H=null,G=null,z=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,w=arguments[2],k=arguments[3],z=arguments[4]||0);let at,_t,yt,St,Ut,kt,Dt,ee,ge;const ve=w.isCompressedTexture?w.mipmaps[z]:w.image;H!==null?(at=H.max.x-H.min.x,_t=H.max.y-H.min.y,yt=H.max.z-H.min.z,St=H.min.x,Ut=H.min.y,kt=H.min.z):(at=ve.width,_t=ve.height,yt=ve.depth,St=0,Ut=0,kt=0),G!==null?(Dt=G.x,ee=G.y,ge=G.z):(Dt=0,ee=0,ge=0);const Je=mt.convert(k.format),ne=mt.convert(k.type);let Rt;if(k.isData3DTexture)Lt.setTexture3D(k,0),Rt=A.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)Lt.setTexture2DArray(k,0),Rt=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,k.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,k.unpackAlignment);const He=A.getParameter(A.UNPACK_ROW_LENGTH),re=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Cn=A.getParameter(A.UNPACK_SKIP_PIXELS),Fr=A.getParameter(A.UNPACK_SKIP_ROWS),xi=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ve.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ve.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,St),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ut),A.pixelStorei(A.UNPACK_SKIP_IMAGES,kt),w.isDataTexture||w.isData3DTexture?A.texSubImage3D(Rt,z,Dt,ee,ge,at,_t,yt,Je,ne,ve.data):k.isCompressedArrayTexture?A.compressedTexSubImage3D(Rt,z,Dt,ee,ge,at,_t,yt,Je,ve.data):A.texSubImage3D(Rt,z,Dt,ee,ge,at,_t,yt,Je,ne,ve),A.pixelStorei(A.UNPACK_ROW_LENGTH,He),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,re),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Cn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Fr),A.pixelStorei(A.UNPACK_SKIP_IMAGES,xi),z===0&&k.generateMipmaps&&A.generateMipmap(Rt),dt.unbindTexture()},this.initRenderTarget=function(w){Tt.get(w).__webglFramebuffer===void 0&&Lt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Lt.setTextureCube(w,0):w.isData3DTexture?Lt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Lt.setTexture2DArray(w,0):Lt.setTexture2D(w,0),dt.unbindTexture()},this.resetState=function(){I=0,R=0,C=null,dt.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===_c?"display-p3":"srgb",e.unpackColorSpace=ie.workingColorSpace===va?"display-p3":"srgb"}}class Os{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=n}clone(){return new Os(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zs extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Fy{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=jl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return xc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ge=new N;class Ko{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ko(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Rf extends Hi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ls;const er=new N,cs=new N,hs=new N,us=new Bt,nr=new Bt,Cf=new ce,oo=new N,ir=new N,ao=new N,Mu=new Bt,ll=new Bt,Su=new Bt;class Oy extends Te{constructor(t=new Rf){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new Ne;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fy(e,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new Ko(n,3,0,!1)),ls.setAttribute("uv",new Ko(n,2,3,!1))}this.geometry=ls,this.material=t,this.center=new Bt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),Cf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-hs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;lo(oo.set(-.5,-.5,0),hs,o,cs,s,r),lo(ir.set(.5,-.5,0),hs,o,cs,s,r),lo(ao.set(.5,.5,0),hs,o,cs,s,r),Mu.set(0,0),ll.set(1,0),Su.set(1,1);let a=t.ray.intersectTriangle(oo,ir,ao,!1,er);if(a===null&&(lo(ir.set(-.5,.5,0),hs,o,cs,s,r),ll.set(0,1),a=t.ray.intersectTriangle(oo,ao,ir,!1,er),a===null))return;const l=t.ray.origin.distanceTo(er);l<t.near||l>t.far||e.push({distance:l,point:er.clone(),uv:un.getInterpolation(er,oo,ir,ao,Mu,ll,Su,new Bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function lo(i,t,e,n,s,r){us.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(nr.x=r*us.x-s*us.y,nr.y=s*us.x+r*us.y):nr.copy(us),i.copy(t),i.x+=nr.x,i.y+=nr.y,i.applyMatrix4(Cf)}class Pf extends ke{constructor(t=null,e=1,n=1,s,r,o,a,l,c=le,h=le,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lf extends Hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const jo=new N,Zo=new N,wu=new ce,sr=new yc,co=new Lr,cl=new N,Eu=new N;class zy extends Te{constructor(t=new Ne,e=new Lf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)jo.fromBufferAttribute(e,s-1),Zo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=jo.distanceTo(Zo);t.setAttribute("lineDistance",new Ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),co.radius+=r,t.ray.intersectsSphere(co)===!1)return;wu.copy(s).invert(),sr.copy(t.ray).applyMatrix4(wu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,p=m-1;v<p;v+=c){const g=h.getX(v),y=h.getX(v+1),_=ho(this,t,sr,l,g,y);_&&e.push(_)}if(this.isLineLoop){const v=h.getX(m-1),p=h.getX(f),g=ho(this,t,sr,l,v,p);g&&e.push(g)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=f,p=m-1;v<p;v+=c){const g=ho(this,t,sr,l,v,v+1);g&&e.push(g)}if(this.isLineLoop){const v=ho(this,t,sr,l,m-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ho(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(jo.fromBufferAttribute(o,s),Zo.fromBufferAttribute(o,r),e.distanceSqToSegment(jo,Zo,cl,Eu)>n)return;cl.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(cl);if(!(l<t.near||l>t.far))return{distance:l,point:Eu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,object:i}}const bu=new N,Tu=new N;class By extends zy{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)bu.fromBufferAttribute(e,s),Tu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bu.distanceTo(Tu);t.setAttribute("lineDistance",new Ae(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wc extends Hi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Au=new ce,Ql=new yc,uo=new Lr,fo=new N;class Df extends Te{constructor(t=new Ne,e=new wc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(s),uo.radius+=r,t.ray.intersectsSphere(uo)===!1)return;Au.copy(s).invert(),Ql.copy(t.ray).applyMatrix4(Au);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,v=f;m<v;m++){const p=c.getX(m);fo.fromBufferAttribute(u,p),Ru(fo,p,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,v=f;m<v;m++)fo.fromBufferAttribute(u,m),Ru(fo,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ru(i,t,e,n,s,r,o){const a=Ql.distanceSqToPoint(i);if(a<e){const l=new N;Ql.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Gi extends ke{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const po=new N,mo=new N,hl=new N,go=new un;class Hy extends Ne{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(zo*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:v,b:p,c:g}=go;if(v.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),go.getNormal(hl),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const _=(y+1)%3,b=u[y],I=u[_],R=go[h[y]],C=go[h[_]],F=`${b}_${I}`,E=`${I}_${b}`;E in d&&d[E]?(hl.dot(d[E].normal)<=r&&(f.push(R.x,R.y,R.z),f.push(C.x,C.y,C.z)),d[E]=null):F in d||(d[F]={index0:c[y],index1:c[_],normal:hl.clone()})}}for(const m in d)if(d[m]){const{index0:v,index1:p}=d[m];po.fromBufferAttribute(a,v),mo.fromBufferAttribute(a,p),f.push(po.x,po.y,po.z),f.push(mo.x,mo.y,mo.z)}this.setAttribute("position",new Ae(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ec extends Ne{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new N,d=new N,f=[],m=[],v=[],p=[];for(let g=0;g<=n;g++){const y=[],_=g/n;let b=0;g===0&&o===0?b=.5/e:g===n&&l===Math.PI&&(b=-.5/e);for(let I=0;I<=e;I++){const R=I/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+_*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(R+b,1-_),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){const _=h[g][y+1],b=h[g][y],I=h[g+1][y],R=h[g+1][y+1];(g!==0||o>0)&&f.push(_,b,R),(g!==n-1||l<Math.PI)&&f.push(b,I,R)}this.setIndex(f),this.setAttribute("position",new Ae(m,3)),this.setAttribute("normal",new Ae(v,3)),this.setAttribute("uv",new Ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ec(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}const Cu={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Gy{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const Vy=new Gy;class bc{constructor(t){this.manager=t!==void 0?t:Vy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}bc.DEFAULT_MATERIAL_NAME="__DEFAULT";class Wy extends bc{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Cu.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=br("img");function l(){h(),Cu.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Ks extends bc{constructor(t){super(t)}load(t,e,n,s){const r=new ke,o=new Wy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Xy extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ul=new ce,Pu=new N,Lu=new N;class qy{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mc,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Pu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pu),Lu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lu),e.updateMatrixWorld(),ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Yy extends qy{constructor(){super(new Tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $y extends Xy{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Yy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);const If=13625079,Ky=[.3,.52,.79],jy=[.81,.9,.97],dl=i=>`rgb(${Math.round(i[0]*255)},${Math.round(i[1]*255)},${Math.round(i[2]*255)})`;function Zy(i,t,e){const n=[(t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2],s=i.createLinearGradient(0,0,0,256);s.addColorStop(0,dl(t)),s.addColorStop(.55,dl(n)),s.addColorStop(1,dl(e)),i.fillStyle=s,i.fillRect(0,0,2,256)}function Jy(){const i=document.createElement("canvas");i.width=2,i.height=256;const t=i.getContext("2d");t&&Zy(t,Ky,jy);const e=new Gi(i);return e.colorSpace=Qt,e}function Qy(i){const t=i|0,e=`
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

// Three.js Neutral tone mapping 的同等曲线：中间调几乎不动，只在 0.76 以上
// 滚降 HDR 高光并轻微降饱和。比逐通道 clamp 更能保住雪、云和太阳边缘的层次。
vec3 mwNeutralToneMap(vec3 color) {
  color = max(color, vec3(0.0)) * 0.98;
  const float startCompression = 0.76;
  const float desaturation = 0.15;
  float x = min(color.r, min(color.g, color.b));
  float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
  color -= offset;
  float peak = max(color.r, max(color.g, color.b));
  if (peak < startCompression) return color;
  float d = 1.0 - startCompression;
  float newPeak = 1.0 - d * d / (peak + d - startCompression);
  color *= newPeak / max(peak, 1e-5);
  float g = 1.0 - 1.0 / (desaturation * (peak - newPeak) + 1.0);
  return mix(color, vec3(newPeak), g);
}

// 准确的 IEC sRGB OETF。旧 pow(1/2.2) 会把暗部抬得过高，并放大线性空间噪点。
vec3 mwLinearToSRGB(vec3 color) {
  color = max(color, vec3(0.0));
  vec3 lo = color * 12.92;
  vec3 hi = 1.055 * pow(color, vec3(1.0 / 2.4)) - 0.055;
  return mix(lo, hi, step(vec3(0.0031308), color));
}

// 体积光源只存在于太阳附近的天空。地形仍由深度遮挡，但远处普通天空
// 不再被当成整屏面光源，从根本上去掉“白纱”。
float mwSunSource(vec2 uv) {
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return 0.0;
  float sky = step(0.9999, texture2D(tDepth, uv).x);
  float radial = 1.0 - smoothstep(0.025, 0.16, length(uv - uSunUV));
  return sky * radial;
}

void main() {
  vec3 scene = texture2D(tColor, vUv).rgb;
  vec3 bloomColor = texture2D(tBloom, vUv).rgb;

  // AO 只压场景本体，不压 Bloom/体积光。uAO=0 时不去采样未绑定的兜底纹理。
  if (uAO > 0.001) {
    float aoValue = texture2D(tAO, vUv).r;
    scene *= mix(1.0, aoValue, uAO);
  }

  float shaft = 0.0;
  if (uIntensity > 0.001) {
    // 每步从当前像素走向太阳。uDecay 以 24 samples 为基准换算每步衰减，
    // 因此 24/48/64 samples 改变的只是平滑度，不会让高档反而更暗。
    vec2 dir = (uSunUV - vUv) / float(${t});
    vec2 uv = vUv;
    float illum = 1.0;
    float weightSum = 0.0;
    float stepDecay = pow(clamp(uDecay, 0.001, 0.9999), 24.0 / float(${t}));
    for (int i = 0; i < ${t}; i++) {
      uv += dir;
      shaft += mwSunSource(uv) * illum;
      weightSum += illum;
      illum *= stepDecay;
    }
    // 用实际几何权重和归一，不再简单除 samples。UV 越界时 source=0，
    // 不会像旧实现一样在太阳靠近屏幕边缘时突然把全屏提亮。
    shaft = (shaft / max(weightSum, 1e-5)) * uWeight;
  }

  // Bloom 在 Renderer 中仍保留档位差异；这里收敛到原合成量的 42%，
  // 得到明显但不蒙白的 HDR 辉光。
  vec3 hdr = scene + shaft * uSunColor * uIntensity + bloomColor * (uBloom * 0.42);
  vec3 outc = mwNeutralToneMap(hdr);

  // 只给中间调增加很少的色彩密度；高光自动降饱和，防止草地荧光绿/夕阳死橙。
  float luma = dot(outc, vec3(0.2126, 0.7152, 0.0722));
  float vibrance = mix(1.04, 0.93, smoothstep(0.68, 0.96, luma));
  outc = mix(vec3(luma), outc, vibrance);

  vec3 encoded = mwLinearToSRGB(clamp(outc, 0.0, 1.0));
  // 抖动必须加在编码后的 8-bit 输出域。±0.5 code value 只打散天空色带，不污染暗部。
  float dn = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  encoded += vec3((dn - 0.5) / 255.0);
  gl_FragColor = vec4(clamp(encoded, 0.0, 1.0), 1.0);
}
`.trim();return new fn({uniforms:{tColor:{value:null},tDepth:{value:null},tBloom:{value:null},tAO:{value:null},uSunUV:{value:new Bt(.5,.5)},uSunColor:{value:new Ct(1,.95,.8)},uIntensity:{value:0},uDecay:{value:.96},uWeight:{value:.9},uBloom:{value:0},uAO:{value:0}},vertexShader:e,fragmentShader:n,depthTest:!1,depthWrite:!1})}class Du{constructor(t){x(this,"material");x(this,"quad");x(this,"quadScene",new zs);x(this,"quadCam",new Tr(-1,1,1,-1,0,1));this.material=Qy(t),this.quad=new Kt(new qe(2,2),this.material),this.quadScene.add(this.quad)}render(t){t.render(this.quadScene,this.quadCam)}dispose(){this.material.dispose(),this.quad.geometry.dispose()}}const tM=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim(),eM=`
uniform sampler2D tScene;
uniform float uThreshold;
uniform float uKnee;
uniform vec2 uSourceTexel;
varying vec2 vUv;

vec3 extractHighlight(vec2 sampleUv) {
  vec3 c = texture2D(tScene, sampleUv).rgb;
  // 亮度（感知加权）
  float luma = dot(c, vec3(0.2126, 0.7152, 0.0722));
  // Soft-knee 只让真正的 HDR 光源/镜面高光进入 Bloom。
  // 普通天空、雪和沙子都在 1.0 左右，最多只落在很轻的 knee 尾端，
  // 不会再整片被抽出后糊成白纱。
  float soft = clamp(luma - uThreshold + uKnee, 0.0, 2.0 * uKnee);
  soft = soft * soft / max(4.0 * uKnee, 0.0001);
  float contribution = max(luma - uThreshold, soft);
  // 按比例缩放颜色，保持色调
  float scale = (luma > 0.0001) ? (contribution / luma) : 0.0;
  return c * scale;
}

void main() {
  // 1/4 分辨率直接单点取样会让细小水光/火光随镜头闪烁。
  // 在【亮部提取后】再做 5-tap 抗闪烁降采：不会把普通像素平均成伪高光，
  // 同时能保留小面积 HDR 高光。
  vec2 o = uSourceTexel * 1.5;
  vec3 result = extractHighlight(vUv) * 0.20;
  result += extractHighlight(vUv + vec2(-o.x, -o.y)) * 0.20;
  result += extractHighlight(vUv + vec2( o.x, -o.y)) * 0.20;
  result += extractHighlight(vUv + vec2(-o.x,  o.y)) * 0.20;
  result += extractHighlight(vUv + vec2( o.x,  o.y)) * 0.20;
  gl_FragColor = vec4(result, 1.0);
}
`.trim(),nM=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim(),iM=`
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
`.trim();class sM{constructor(t,e){x(this,"bloomA");x(this,"bloomB");x(this,"extractMat");x(this,"extractScene",new zs);x(this,"extractCam",new Tr(-1,1,1,-1,0,1));x(this,"blurMat");x(this,"blurScene",new zs);x(this,"blurCam",new Tr(-1,1,1,-1,0,1));this.bloomA=this.buildRT(1,1),this.bloomB=this.buildRT(1,1),this.extractMat=new fn({uniforms:{tScene:{value:null},uThreshold:{value:1.05},uKnee:{value:.22},uSourceTexel:{value:new Bt(1,1)}},vertexShader:tM,fragmentShader:eM,depthTest:!1,depthWrite:!1});const n=new Kt(new qe(2,2),this.extractMat);this.extractScene.add(n),this.blurMat=new fn({uniforms:{tBlur:{value:null},uTexelSize:{value:new Bt(1,1)},uHorizontal:{value:1}},vertexShader:nM,fragmentShader:iM,depthTest:!1,depthWrite:!1});const s=new Kt(new qe(2,2),this.blurMat);this.blurScene.add(s),this.setSize(t,e)}get texture(){return this.bloomA.texture}setSize(t,e){this.bloomA.dispose(),this.bloomB.dispose();const n=Math.max(1,Math.round(t)),s=Math.max(1,Math.round(e));this.bloomA=this.buildRT(n,s),this.bloomB=this.buildRT(n,s),this.extractMat.uniforms.uSourceTexel.value.set(1/(n*4),1/(s*4)),this.blurMat.uniforms.uTexelSize.value.set(1/n,1/s)}render(t,e){this.extractMat.uniforms.tScene.value=e,t.setRenderTarget(this.bloomA),t.clear(),t.render(this.extractScene,this.extractCam);for(let n=0;n<2;n++)this.blurMat.uniforms.tBlur.value=this.bloomA.texture,this.blurMat.uniforms.uHorizontal.value=1,t.setRenderTarget(this.bloomB),t.clear(),t.render(this.blurScene,this.blurCam),this.blurMat.uniforms.tBlur.value=this.bloomB.texture,this.blurMat.uniforms.uHorizontal.value=0,t.setRenderTarget(this.bloomA),t.clear(),t.render(this.blurScene,this.blurCam);t.setRenderTarget(null)}dispose(){this.bloomA.dispose(),this.bloomB.dispose(),this.extractMat.dispose(),this.blurMat.dispose()}buildRT(t,e){return new Sn(t,e,{type:mi,depthBuffer:!1})}}function Uf(i){const t=i.visualViewport,e=t&&t.width>0?t.width:i.innerWidth,n=t&&t.height>0?t.height:i.innerHeight;return{width:Math.max(1,Math.ceil(e)),height:Math.max(1,Math.ceil(n))}}const Jo=1,wt=16,pe=192;class Dr{constructor(){x(this,"blocks",new Uint16Array(wt*pe*wt));x(this,"fluid",new Uint8Array(wt*pe*wt));x(this,"dirty",!0)}idx(t,e,n){return t+n*wt+e*wt*wt}inBounds(t,e,n){return t>=0&&t<wt&&e>=0&&e<pe&&n>=0&&n<wt}get(t,e,n){return this.inBounds(t,e,n)?this.blocks[this.idx(t,e,n)]:0}set(t,e,n,s){this.inBounds(t,e,n)&&(this.blocks[this.idx(t,e,n)]=s)}getFluid(t,e,n){return this.inBounds(t,e,n)?this.fluid[this.idx(t,e,n)]:0}setFluid(t,e,n,s){this.inBounds(t,e,n)&&(this.fluid[this.idx(t,e,n)]=s)}static fromBuffers(t,e){const n=new Dr;return n.blocks.set(new Uint16Array(t)),n.fluid.set(new Uint8Array(e)),n}}const kf=16,Nf=32,rM=i=>i&15,oM=i=>(i&kf)!==0,aM=i=>(i&Nf)!==0,Ff=(i,t,e)=>i&15|(t?kf:0)|(e?Nf:0),jt=i=>i>>4,Ke=i=>i&15;function hn(i,t,e){let n=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,1274126177);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}const yr=i=>i*i*(3-2*i);function lM(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=hn(n,s,e),l=hn(n+1,s,e),c=hn(n,s+1,e),h=hn(n+1,s+1,e),u=yr(r),d=yr(o),f=a+(l-a)*u,m=c+(h-c)*u;return f+(m-f)*d}function Ss(i,t,e,n=4){let s=1,r=1,o=0,a=0;for(let l=0;l<n;l++)o+=s*lM(i*r,t*r,e+l*101),a+=s,s*=.5,r*=2;return o/a}function Of(i,t,e,n){let s=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,2147483647)^Math.imul(n|0,1274126177);return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296}function We(i,t,e,n){const s=Math.floor(i),r=Math.floor(t),o=Math.floor(e),a=yr(i-s),l=yr(t-r),c=yr(e-o),h=(p,g,y)=>p+(g-p)*y,u=(p,g,y)=>Of(s+p,r+g,o+y,n),d=h(u(0,0,0),u(1,0,0),a),f=h(u(0,1,0),u(1,1,0),a),m=h(u(0,0,1),u(1,0,1),a),v=h(u(0,1,1),u(1,1,1),a);return h(h(d,f,l),h(m,v,l),c)}function zf(i){let t=i>>>0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var zn=(i=>(i[i.PosX=0]="PosX",i[i.NegX=1]="NegX",i[i.PosY=2]="PosY",i[i.NegY=3]="NegY",i[i.PosZ=4]="PosZ",i[i.NegZ=5]="NegZ",i))(zn||{});const zt={stone:0,dirt:1,grass_top:2,grass_side:3,cobblestone:4,sand:5,oak_log_top:6,oak_log_side:7,oak_planks:8,coal_ore:9,water:10,oak_leaves:11,crafting_table_top:12,crafting_table_side:13,iron_ore:14,furnace_front:15,gravel:16,grass_plant:17,obsidian:18,netherrack:19,soul_sand:20,glowstone:21,nether_quartz_ore:22,lava:23,bedrock:24,nether_portal:25,sandstone:26,cactus:27,ice:28,snow:29,spruce_log:30,spruce_leaves:31,coal_block:32,iron_block:33,quartz_block:34,diamond_ore:35,diamond_block:36},Zt=i=>[i,i,i,i,i,i],rr=(i,t,e)=>[i,i,t,e,i,i],cM=258,hM=296,on=[{id:0,name:"air",solid:!1,transparent:!0,faces:Zt(0),hardness:0,drop:null,needsTool:!1,tool:null},{id:1,name:"stone",solid:!0,transparent:!1,faces:Zt(zt.stone),hardness:1.5,drop:4,needsTool:!0,tool:"pickaxe"},{id:2,name:"dirt",solid:!0,transparent:!1,faces:Zt(zt.dirt),hardness:.5,drop:2,needsTool:!1,tool:"shovel"},{id:3,name:"grass",solid:!0,transparent:!1,faces:rr(zt.grass_side,zt.grass_top,zt.dirt),hardness:.6,drop:2,needsTool:!1,tool:"shovel"},{id:4,name:"cobblestone",solid:!0,transparent:!1,faces:Zt(zt.cobblestone),hardness:2,drop:4,needsTool:!0,tool:"pickaxe"},{id:5,name:"sand",solid:!0,transparent:!1,faces:Zt(zt.sand),hardness:.5,drop:5,needsTool:!1,tool:"shovel"},{id:6,name:"oak_log",solid:!0,transparent:!1,faces:rr(zt.oak_log_side,zt.oak_log_top,zt.oak_log_top),hardness:2,drop:6,needsTool:!1,tool:"axe"},{id:7,name:"oak_planks",solid:!0,transparent:!1,faces:Zt(zt.oak_planks),hardness:2,drop:7,needsTool:!1,tool:"axe"},{id:8,name:"coal_ore",solid:!0,transparent:!1,faces:Zt(zt.coal_ore),hardness:3,drop:cM,needsTool:!0,tool:"pickaxe"},{id:9,name:"water",solid:!1,transparent:!0,faces:Zt(zt.water),hardness:0,drop:null,needsTool:!1,tool:null},{id:10,name:"oak_leaves",solid:!0,transparent:!0,faces:Zt(zt.oak_leaves),hardness:.2,drop:null,needsTool:!1,tool:null},{id:11,name:"crafting_table",solid:!0,transparent:!1,faces:rr(zt.crafting_table_side,zt.crafting_table_top,zt.oak_planks),hardness:2.5,drop:11,needsTool:!1,tool:"axe"},{id:12,name:"iron_ore",solid:!0,transparent:!1,faces:Zt(zt.iron_ore),hardness:3,drop:12,needsTool:!0,tool:"pickaxe",minTier:2},{id:13,name:"furnace",solid:!0,transparent:!1,faces:rr(zt.furnace_front,zt.cobblestone,zt.cobblestone),hardness:3.5,drop:13,needsTool:!0,tool:"pickaxe"},{id:14,name:"torch",solid:!1,transparent:!0,faces:Zt(0),hardness:0,drop:14,needsTool:!1,tool:null,light:14},{id:15,name:"gravel",solid:!0,transparent:!1,faces:Zt(zt.gravel),hardness:.6,drop:15,needsTool:!1,tool:"shovel"},{id:16,name:"grass_plant",solid:!1,transparent:!0,faces:Zt(zt.grass_plant),hardness:0,drop:null,needsTool:!1,tool:null},{id:17,name:"tall_grass",solid:!1,transparent:!0,faces:Zt(zt.grass_plant),hardness:0,drop:null,needsTool:!1,tool:null},{id:18,name:"obsidian",solid:!0,transparent:!1,faces:Zt(zt.obsidian),hardness:50,drop:18,needsTool:!0,tool:"pickaxe",minTier:4},{id:19,name:"netherrack",solid:!0,transparent:!1,faces:Zt(zt.netherrack),hardness:.4,drop:19,needsTool:!0,tool:"pickaxe"},{id:20,name:"soul_sand",solid:!0,transparent:!1,faces:Zt(zt.soul_sand),hardness:.5,drop:20,needsTool:!1,tool:"shovel"},{id:21,name:"glowstone",solid:!0,transparent:!1,faces:Zt(zt.glowstone),hardness:.3,drop:21,needsTool:!1,tool:null,light:15},{id:22,name:"nether_quartz_ore",solid:!0,transparent:!1,faces:Zt(zt.nether_quartz_ore),hardness:3,drop:295,needsTool:!0,tool:"pickaxe",minTier:1},{id:23,name:"lava",solid:!1,transparent:!0,faces:Zt(zt.lava),hardness:100,drop:null,needsTool:!1,tool:null,light:15},{id:24,name:"bedrock",solid:!0,transparent:!1,faces:Zt(zt.bedrock),hardness:-1,drop:null,needsTool:!1,tool:null},{id:25,name:"nether_portal",solid:!1,transparent:!0,faces:Zt(zt.nether_portal),hardness:-1,drop:null,needsTool:!1,tool:null,light:11},{id:26,name:"sandstone",solid:!0,transparent:!1,faces:Zt(zt.sandstone),hardness:.8,drop:26,needsTool:!0,tool:"pickaxe"},{id:27,name:"cactus",solid:!0,transparent:!1,faces:Zt(zt.cactus),hardness:.4,drop:27,needsTool:!1,tool:null},{id:28,name:"ice",solid:!0,transparent:!1,faces:Zt(zt.ice),hardness:.5,drop:null,needsTool:!1,tool:"pickaxe"},{id:29,name:"snow_layer",solid:!1,transparent:!0,faces:Zt(zt.snow),hardness:0,drop:null,needsTool:!1,tool:"shovel"},{id:30,name:"spruce_log",solid:!0,transparent:!1,faces:rr(zt.spruce_log,zt.oak_log_top,zt.oak_log_top),hardness:2,drop:30,needsTool:!1,tool:"axe"},{id:31,name:"spruce_leaves",solid:!0,transparent:!0,faces:Zt(zt.spruce_leaves),hardness:.2,drop:null,needsTool:!1,tool:null},{id:32,name:"coal_block",solid:!0,transparent:!1,faces:Zt(zt.coal_block),hardness:5,drop:32,needsTool:!0,tool:"pickaxe"},{id:33,name:"iron_block",solid:!0,transparent:!1,faces:Zt(zt.iron_block),hardness:5,drop:33,needsTool:!0,tool:"pickaxe",minTier:2},{id:34,name:"quartz_block",solid:!0,transparent:!1,faces:Zt(zt.quartz_block),hardness:.8,drop:34,needsTool:!0,tool:"pickaxe"},{id:35,name:"diamond_ore",solid:!0,transparent:!1,faces:Zt(zt.diamond_ore),hardness:3,drop:hM,needsTool:!0,tool:"pickaxe",minTier:3},{id:36,name:"diamond_block",solid:!0,transparent:!1,faces:Zt(zt.diamond_block),hardness:5,drop:36,needsTool:!0,tool:"pickaxe",minTier:3}],Bf=3,Gn=9,Ar=10,xa=6,uM=7,dM=4,Hf=11,fM=12,Iu=13,As=14,Uu=15,pM=16,Gf=17,Bn=18,mM=19,gM=5,Vf=20,vM=21,_M=22,Qo=23,Tc=24,ya=25,xM=26,vs=27,Rs=28,Ac=29,Ma=30,Sa=31,yM=32,MM=35,tc=i=>i===Qo,SM=i=>i===ya,Ee=i=>{var t;return((t=on[i])==null?void 0:t.solid)??!1},yn=i=>i===Gn,ku=i=>i===Ar||i===Sa,Ni=i=>i===pM||i===Gf||i===Ac,Nu=i=>Ee(i)||Ni(i),Fu=i=>i===0||i===Gn||Ni(i)||i===ya,ds=i=>{const t=on[i];return t?t.solid&&!t.transparent:!1},fl=(i,t)=>on[i].faces[t],Wf=i=>{var t;return((t=on[i])==null?void 0:t.hardness)??0},wM=i=>{var t;return((t=on[i])==null?void 0:t.needsTool)??!1},EM=i=>{var t;return((t=on[i])==null?void 0:t.light)??0};function Xf(i,t){var n;const e=((n=on[i])==null?void 0:n.tool)??null;return t!==null&&e!==null&&t.kind===e}const qf=(i,t=null)=>{var e;return wM(i)?Xf(i,t)?t.tier>=(((e=on[i])==null?void 0:e.minTier)??1):!1:!0},bM=(i,t=null)=>{if(Ni(i))return 0;const e=Math.max(0,Wf(i));if(e===0)return 0;const n=Xf(i,t)?t.speed:1,s=qf(i,t)?30:100;return Math.ceil(s*e/n)*50},TM=(i,t=null)=>{var e;return qf(i,t)?((e=on[i])==null?void 0:e.drop)??null:null},AM=i=>i===vs,RM=i=>i===Rs?.98:.6,Ou=320,CM=.38,PM=.66;function Yf(i,t,e){return Ss(i/130,t/130,e+4321,2)}function LM(i,t,e){return Ss(i/Ou,t/Ou,e+9001,3)}function _s(i,t,e){const n=LM(i,t,e);return n<CM?"snow":n>PM?"desert":Yf(i,t,e)>.62?"forest":"plains"}const Rc=1,DM=2,pl=3,or=5,IM=8,UM=12,kM=15,NM=16,FM=17,be=116,OM=Ff(8,!0,!1);function zM(i,t,e){const n=ze(i,t,e);return Math.abs(ze(i+5,t,e)-n)<=3&&Math.abs(ze(i-5,t,e)-n)<=3&&Math.abs(ze(i,t+5,e)-n)<=3&&Math.abs(ze(i,t-5,e)-n)<=3}function BM(i,t,e,n,s){const r=n-t;if(r<12)return!1;const o=i+(We(i/36,t/30,e/36,s+991)-.5)*26,a=t+(We(t/30,i/34,e/34,s+993)-.5)*22,l=e+(We(e/36,t/30,i/36,s+992)-.5)*26;return r<50?Math.abs(We(o/14,a/14,l/14,s+222)-.5)<.03:r<100?Math.abs(We(o/18,a/18,l/18,s+333)-.5)<.05?!0:We(o/22,a/22,l/22,s+700)<.07:We(o/26,a/26,l/26,s+700)<.07?!0:Math.abs(We(o/18,a/18,l/18,s+333)-.5)<.04}function ml(i,t,e,n){return We(i/5,t/5,e/5,n+303)>.82?kM:Rc}const HM=[{id:IM,attempts:20,size:17,minY:5,maxY:128,salt:2887841},{id:UM,attempts:20,size:9,minY:5,maxY:64,salt:2044082},{id:MM,attempts:1,size:8,minY:5,maxY:16,salt:5053075}],vo=1,GM=(i,t,e)=>Math.max(t,Math.min(e,i));function VM(i,t,e,n,s){const r=Of(t,e,s,i+n.salt|0);return zf(Math.floor(r*4294967296))}function WM(i,t,e,n,s,r,o,a){const l=VM(r,n,s,o,a),c=n*wt+l()*wt,h=s*wt+l()*wt,u=o.minY+Math.floor(l()*(o.maxY-o.minY+1)),d=GM(u+Math.floor(l()*5)-2,o.minY,o.maxY),f=l()*Math.PI,m=o.size/8,v=c+Math.sin(f)*m,p=c-Math.sin(f)*m,g=h+Math.cos(f)*m,y=h-Math.cos(f)*m;for(let _=0;_<o.size;_++){const b=_/o.size,I=v+(p-v)*b,R=u+(d-u)*b,C=g+(y-g)*b,F=(Math.sin(Math.PI*b)+1)*l()*o.size/16+1,E=F/2,S=F*(.55+l()*.15)/2,P=E,X=Math.floor(I-E),W=Math.floor(I+E),j=Math.max(o.minY,Math.floor(R-S)),Z=Math.min(o.maxY,pe-1,Math.floor(R+S)),K=Math.floor(C-P),it=Math.floor(C+P);for(let Y=X;Y<=W;Y++){if(jt(Y)!==t)continue;const gt=(Y+.5-I)/E,O=gt*gt;if(!(O>=1))for(let B=K;B<=it;B++){if(jt(B)!==e)continue;const q=(B+.5-C)/P,J=O+q*q;if(!(J>=1))for(let L=j;L<=Z;L++){const U=(L+.5-R)/S;if(J+U*U>=1)continue;const Q=Ke(Y),et=Ke(B);i.get(Q,L,et)===Rc&&i.set(Q,L,et,o.id)}}}}}function XM(i,t,e,n){for(const s of HM)for(let r=t-vo;r<=t+vo;r++)for(let o=e-vo;o<=e+vo;o++)for(let a=0;a<s.attempts;a++)WM(i,t,e,r,o,n,s,a)}function ze(i,t,e){const n=Ss(i/260,t/260,e,4),s=Ss(i/72,t/72,e+17,3);let r;n<.46?r=90+n*56:n<.56?r=116+(n-.46)*80:r=124+(n-.56)*180;let o=r+(s-.5)*8;{const a=Ss(i/140,t/140,e+777,3),l=Math.abs(a-.5),c=.028+s*.022+Math.max(0,n-.54)*.4;if(l<c){let h=1-l/c;h=h*h*(3-2*h);const u=2+Math.floor(Ss(i/60,t/60,e+555,2)*3),d=be-u;o=o*(1-h)+d*h}}return Math.floor(o)}const ei=2,qM=.08;function YM(i,t,e){const n=Yf(i,t,e);return n<.45?.003:n>.62?.08:.003+(n-.45)/.17*.077}function $M(i,t,e){return 4+Math.floor(hn(i,t,e*31+5)*3)}function zu(i,t,e,n,s,r,o,a=xa,l=Ar,c=!1){const h=r+$M(n,s,o),u=(f,m,v,p,g)=>{if(m<0||m>=pe||jt(f)!==t||jt(v)!==e)return;const y=Ke(f),_=Ke(v);g&&i.get(y,m,_)!==0||i.set(y,m,_,p)};if(c){const f=h+2,m=r+3;for(let v=m;v<=f;v++){const p=f-v,g=p===0?0:Math.min(2,Math.floor((p+1)/2));for(let y=-g;y<=g;y++)for(let _=-g;_<=g;_++)Math.abs(y)+Math.abs(_)>g||u(n+y,v,s+_,l,!0)}}else{for(const m of[-2,-1])for(let v=-2;v<=2;v++)for(let p=-2;p<=2;p++)Math.abs(v)===2&&Math.abs(p)===2||u(n+v,h+m,s+p,l,!0);for(let m=-1;m<=1;m++)for(let v=-1;v<=1;v++)u(n+m,h,s+v,l,!0);const f=[[0,0],[1,0],[-1,0],[0,1],[0,-1]];for(const[m,v]of f)u(n+m,h+1,s+v,l,!0)}const d=c?h+1:h;for(let f=r+1;f<=d;f++)u(n,f,s,a,!1)}const _o=127,KM=31;function jM(i,t,e){const n=new Dr,s=e+7e4;for(let r=0;r<wt;r++)for(let o=0;o<wt;o++){const a=i*wt+o,l=t*wt+r;for(let c=0;c<=_o;c++){if(c<=1||c>=_o-1){n.set(o,c,r,Tc);continue}if(We(a/18,c/16,l/18,s+1)>.55||We(a/9,c/10,l/9,s+2)>.78){c<=KM&&n.set(o,c,r,Qo);continue}let u=mM;We(a/4,c/4,l/4,s+3)>.86?u=_M:We(a/10,c/10,l/10,s+4)>.9&&(u=Vf),n.set(o,c,r,u)}if(hn(a,l,s+5)<.012){for(let c=_o-2;c>_o-7;c--)if(n.get(o,c,r)===0){n.set(o,c,r,vM);break}}}return n.dirty=!0,n}function $f(i,t,e,n="overworld"){if(n==="nether")return jM(i,t,e);const s=new Dr;for(let a=0;a<wt;a++)for(let l=0;l<wt;l++){const c=i*wt+l,h=t*wt+a,u=ze(c,h,e),d=Math.min(u,ze(c+4,h,e),ze(c-4,h,e),ze(c,h+4,e),ze(c,h-4,e)),f=zM(c,h,e),m=u<=be+1,v=_s(c,h,e);for(let p=0;p<=u;p++){const g=f&&We((c+p*.8)/8,p/120,(h+p*.6)/8,e+888)>.9;if(p>1&&(g||p<u&&BM(c,p,h,d,e)))continue;let y=Rc;p===0||p<=4&&We(c*.7,p*3.3,h*.7,e+4242)<(5-p)/5?y=Tc:m?p===u||p>=u-3?y=or:y=ml(c,p,h,e):v==="desert"?p===u||p>=u-3?y=or:p>=u-7?y=xM:y=ml(c,p,h,e):p===u?y=pl:p>=u-3?y=DM:y=ml(c,p,h,e),s.set(l,p,a,y)}for(let p=u+1;p<=be;p++)s.set(l,p,a,Gn),s.setFluid(l,p,a,OM);if(u<be&&v==="snow"&&s.set(l,be,a,Rs),!m&&u>be+1&&v==="snow"){const p=s.get(l,u,a),g=s.get(l,u+1,a);p===pl&&g===0&&hn(c+1,h+3,e*19+41)<.85&&s.set(l,u+1,a,Ac)}}XM(s,i,t,e);const r=i*wt,o=t*wt;for(let a=r-ei;a<r+wt+ei;a++)for(let l=o-ei;l<o+wt+ei;l++){const c=hn(a,l,e*13+7);if(c>=qM)continue;const h=ze(a,l,e);if(h<=be+1)continue;const u=_s(a,l,e);u!=="plains"&&u!=="forest"||c<YM(a,l,e)&&zu(s,i,t,a,l,h,e)}for(let a=r-ei;a<r+wt+ei;a++)for(let l=o-ei;l<o+wt+ei;l++){if(_s(a,l,e)!=="snow")continue;const c=ze(a,l,e);c<=be+1||hn(a,l,e*17+3)>=.03||zu(s,i,t,a,l,c,e,Ma,Sa,!0)}for(let a=0;a<wt;a++)for(let l=0;l<wt;l++){const c=r+l,h=o+a;if(_s(c,h,e)!=="desert")continue;const u=ze(c,h,e);if(u<=be+1||s.get(l,u,a)!==or||s.get(l,u+1,a)!==0||hn(c,h,e*11+53)>=.02)continue;const f=u+1;if(l>0&&(s.get(l-1,f,a)===vs||Ee(s.get(l-1,f,a)))||l<wt-1&&(s.get(l+1,f,a)===vs||Ee(s.get(l+1,f,a)))||a>0&&(s.get(l,f,a-1)===vs||Ee(s.get(l,f,a-1)))||a<wt-1&&(s.get(l,f,a+1)===vs||Ee(s.get(l,f,a+1))))continue;const m=1+Math.floor(hn(c*3,h*3,e*7+13)*3);for(let v=1;v<=m;v++){const p=u+v;if(p>=pe)break;s.set(l,p,a,vs)}}for(let a=0;a<wt;a++)for(let l=0;l<wt;l++){const c=r+l,h=o+a,u=_s(c,h,e);if(u!=="plains"&&u!=="forest")continue;const d=ze(c,h,e);if(d<=be+1||s.get(l,d,a)!==pl||s.get(l,d+1,a)!==0)continue;const f=hn(c,h,e*7+31);f>.4||s.set(l,d+1,a,f<.08?FM:NM)}return s.dirty=!0,s}const ZM=be+8/9,JM=new ce().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);class QM{constructor(t=1,e=1,n={}){x(this,"camera",new Xe);x(this,"textureMatrix",new ce);x(this,"renderTarget");x(this,"planeY");x(this,"clipBias");x(this,"plane",new Hn);x(this,"cameraPlane",new Hn);x(this,"planeNormal",new N(0,1,0));x(this,"sourcePosition",new N);x(this,"reflectedPosition",new N);x(this,"reflectedDirection",new N);x(this,"reflectedUp",new N);x(this,"lookTarget",new N);x(this,"sourceQuaternion",new Ys);x(this,"clipPlane",new _e);x(this,"clipCorner",new _e);x(this,"savedViewport",new _e);x(this,"savedScissor",new _e);this.planeY=n.planeY??ZM,this.clipBias=n.clipBias??.001,this.plane.set(this.planeNormal,-this.planeY),this.renderTarget=new Sn(Math.max(1,Math.round(t)),Math.max(1,Math.round(e)),{type:mi,minFilter:fe,magFilter:fe,generateMipmaps:!1,depthBuffer:!0,stencilBuffer:!1,samples:Math.max(0,Math.round(n.samples??4))}),this.renderTarget.texture.name="mineworld-planar-reflection",this.renderTarget.texture.colorSpace=An,this.camera.layers.set(0)}get texture(){return this.renderTarget.texture}resize(t,e){this.renderTarget.setSize(Math.max(1,Math.round(t)),Math.max(1,Math.round(e)))}render(t,e,n,s,r){this.updateCamera(n);const o=t.getRenderTarget();t.getViewport(this.savedViewport),t.getScissor(this.savedScissor);const a=t.getScissorTest(),l=t.xr.enabled,c=t.shadowMap.autoUpdate;try{s==null||s(this.camera,this.renderTarget),t.xr.enabled=!1,t.shadowMap.autoUpdate=!1,t.setRenderTarget(this.renderTarget),t.setViewport(0,0,this.renderTarget.width,this.renderTarget.height),t.setScissorTest(!1),t.state.buffers.depth.setMask(!0),t.clear(!0,!0,!0),t.render(e,this.camera)}finally{t.xr.enabled=l,t.shadowMap.autoUpdate=c,t.setRenderTarget(o),t.setViewport(this.savedViewport),t.setScissor(this.savedScissor),t.setScissorTest(a),r==null||r(this.camera,this.renderTarget)}}dispose(){this.renderTarget.dispose()}updateCamera(t){t.updateWorldMatrix(!0,!1),t.getWorldPosition(this.sourcePosition),t.getWorldQuaternion(this.sourceQuaternion),this.reflectedPosition.copy(this.sourcePosition).addScaledVector(this.planeNormal,-2*this.plane.distanceToPoint(this.sourcePosition)),this.reflectedDirection.set(0,0,-1).applyQuaternion(this.sourceQuaternion).reflect(this.planeNormal),this.reflectedUp.set(0,1,0).applyQuaternion(this.sourceQuaternion).reflect(this.planeNormal),this.camera.position.copy(this.reflectedPosition),this.camera.up.copy(this.reflectedUp),this.lookTarget.copy(this.reflectedPosition).add(this.reflectedDirection),this.camera.lookAt(this.lookTarget),this.camera.updateMatrixWorld(!0),this.camera.near=t.near,this.camera.far=t.far,this.camera.fov=t.fov,this.camera.aspect=t.aspect,this.camera.zoom=t.zoom,this.camera.focus=t.focus,this.camera.filmGauge=t.filmGauge,this.camera.filmOffset=t.filmOffset,this.camera.projectionMatrix.copy(t.projectionMatrix),this.applyObliqueNearPlane(),this.camera.projectionMatrixInverse.copy(this.camera.projectionMatrix).invert(),this.textureMatrix.copy(JM).multiply(this.camera.projectionMatrix).multiply(this.camera.matrixWorldInverse)}applyObliqueNearPlane(){this.cameraPlane.copy(this.plane).applyMatrix4(this.camera.matrixWorldInverse),this.clipPlane.set(this.cameraPlane.normal.x,this.cameraPlane.normal.y,this.cameraPlane.normal.z,this.cameraPlane.constant);const e=this.camera.projectionMatrix.elements;this.clipCorner.set((Math.sign(this.clipPlane.x)+e[8])/e[0],(Math.sign(this.clipPlane.y)+e[9])/e[5],-1,(1+e[10])/e[14]);const n=this.clipPlane.dot(this.clipCorner);Math.abs(n)<1e-7||(this.clipPlane.multiplyScalar(2/n),e[2]=this.clipPlane.x,e[6]=this.clipPlane.y,e[10]=this.clipPlane.z+1-this.clipBias,e[14]=this.clipPlane.w)}}class tS{constructor(t){x(this,"scene",new zs);x(this,"camera");x(this,"gl");x(this,"viewportW",1);x(this,"viewportH",1);x(this,"resizeQueued",!1);x(this,"onViewportChange",()=>{this.resizeQueued||(this.resizeQueued=!0,requestAnimationFrame(()=>{this.resizeQueued=!1,this.resize()}))});x(this,"skyDome");x(this,"skyDomeColors");x(this,"lastSky","");x(this,"rt",null);x(this,"refractionRT",null);x(this,"waterRefractionSink",null);x(this,"planarReflection",null);x(this,"waterReflectionSink",null);x(this,"godStd",new Du(24));x(this,"godHigh",new Du(48));x(this,"god",null);x(this,"bloom",null);x(this,"ssao",null);var r,o;this.gl=new Af({canvas:t,antialias:!0}),this.gl.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.gl.toneMapping=Wn,this.gl.shadowMap.enabled=!0,this.gl.shadowMap.type=Jd,this.gl.shadowMap.autoUpdate=!1;const e=new Ec(750,32,24),n=e.getAttribute("position").count;this.skyDomeColors=new ue(new Float32Array(n*3),3),e.setAttribute("color",this.skyDomeColors);const s=new me({vertexColors:!0,side:Ue,depthWrite:!1,fog:!1});this.skyDome=new Kt(e,s),this.skyDome.frustumCulled=!1,this.skyDome.renderOrder=-1e3,this.scene.add(this.skyDome),this.setSkyColors([.3,.52,.79],[.81,.9,.97]),this.scene.fog=new Os(If,30,110),this.camera=new Xe(70,1,.1,1e3),this.camera.layers.enable(Jo),this.resize(),window.addEventListener("resize",this.onViewportChange),window.addEventListener("orientationchange",this.onViewportChange),(r=window.visualViewport)==null||r.addEventListener("resize",this.onViewportChange),(o=window.visualViewport)==null||o.addEventListener("scroll",this.onViewportChange)}setSkyColors(t,e,n=0,s=0){const r=`${t.join()}|${e.join()}|${Math.round(n*50)}|${Math.round(s*25)}`;if(r===this.lastSky)return;this.lastSky=r;const o=new Ct().setRGB(t[0],t[1],t[2],Qt),a=new Ct().setRGB(e[0],e[1],e[2],Qt),l=this.skyDome.geometry.getAttribute("position"),c=this.skyDomeColors.array;for(let h=0;h<l.count;h++){const u=l.getY(h)/750,d=u<=0?0:Math.min(1,u/.45),f=d*d*(3-2*d);let m=a.r+(o.r-a.r)*f,v=a.g+(o.g-a.g)*f,p=a.b+(o.b-a.b)*f;if(s>.01){const g=Math.atan2(l.getZ(h),l.getX(h)),y=Math.pow(Math.max(0,Math.cos(g-n)*.5+.5),2.5),_=s*(1-f),b=.88+(1.24-.88)*y,I=.9+(.97-.9)*y,R=1.05+(.75-1.05)*y;m*=1+(b-1)*_,v*=1+(I-1)*_,p*=1+(R-1)*_}c[h*3]=m,c[h*3+1]=v,c[h*3+2]=p}this.skyDomeColors.needsUpdate=!0}resize(){const{width:t,height:e}=Uf(window);if(this.viewportW=t,this.viewportH=e,this.gl.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.rt!==null&&(this.rt.dispose(),this.rt=this.buildRT(t,e)),this.refractionRT!==null&&(this.refractionRT.dispose(),this.refractionRT=this.buildRefractionRT(t,e),this.publishRefractionTarget()),this.planarReflection!==null){const n=this.gl.getPixelRatio();this.planarReflection.resize(Math.max(1,Math.round(t*n)),Math.max(1,Math.round(e*n))),this.publishReflectionTarget()}if(this.bloom!==null){const n=this.gl.getPixelRatio();this.bloom.setSize(Math.max(1,Math.round(t*n/4)),Math.max(1,Math.round(e*n/4)))}if(this.ssao!==null){const n=this.gl.getPixelRatio();this.ssao.setSize(Math.max(1,Math.round(t*n/2)),Math.max(1,Math.round(e*n/2)))}}markShadowDirty(){this.gl.shadowMap.needsUpdate=!0}setWaterRefractionSink(t){this.waterRefractionSink=t,this.publishRefractionTarget()}setWaterReflectionSink(t){this.waterReflectionSink=t,this.publishReflectionTarget()}setGodRays(t){if(t===null||t.quality==="off"){this.rt!==null&&(this.rt.dispose(),this.rt=null),this.refractionRT!==null&&(this.refractionRT.dispose(),this.refractionRT=null),this.publishRefractionTarget(),this.planarReflection!==null&&(this.planarReflection.dispose(),this.planarReflection=null),this.publishReflectionTarget(),this.bloom!==null&&(this.bloom.dispose(),this.bloom=null),this.ssao!==null&&(this.ssao.dispose(),this.ssao=null),this.god=null;return}if(this.rt===null&&(this.rt=this.buildRT(this.viewportW,this.viewportH)),this.refractionRT===null&&(this.refractionRT=this.buildRefractionRT(this.viewportW,this.viewportH),this.publishRefractionTarget()),this.planarReflection===null){const e=this.gl.getPixelRatio();this.planarReflection=new QM(Math.max(1,Math.round(this.viewportW*e)),Math.max(1,Math.round(this.viewportH*e))),this.publishReflectionTarget()}if(this.bloom===null){const e=this.gl.getPixelRatio(),n=this.viewportW,s=this.viewportH;this.bloom=new sM(Math.max(1,Math.round(n*e/4)),Math.max(1,Math.round(s*e/4)))}this.god=t}render(){if(this.skyDome.position.copy(this.camera.position),this.god===null||this.rt===null||this.bloom===null){this.gl.render(this.scene,this.camera);return}if(this.planarReflection!==null&&(this.planarReflection.render(this.gl,this.scene,this.camera,n=>this.skyDome.position.copy(n.position),()=>this.skyDome.position.copy(this.camera.position)),this.publishReflectionTarget()),this.refractionRT!==null){const n=this.camera.layers.mask;this.camera.layers.disable(Jo),this.gl.setRenderTarget(this.refractionRT),this.gl.clear(),this.gl.render(this.scene,this.camera),this.camera.layers.mask=n}this.gl.setRenderTarget(this.rt),this.gl.clear(),this.gl.render(this.scene,this.camera),this.bloom.render(this.gl,this.rt.texture),this.ssao!==null&&this.ssao.render(this.gl,this.rt.depthTexture,this.camera);const t=this.god.quality==="high"?this.godHigh:this.godStd,e=t.material.uniforms;e.tColor.value=this.rt.texture,e.tDepth.value=this.rt.depthTexture,e.tBloom.value=this.bloom.texture,e.uSunUV.value.copy(this.god.sunUV),e.uIntensity.value=this.god.intensity,e.uSunColor.value.copy(this.god.sunColor),e.uBloom.value=this.god.quality==="high"?.68:.5,this.ssao!==null?(e.tAO.value=this.ssao.texture,e.uAO.value=this.god.quality==="high"?.55:.4):(e.tAO.value=null,e.uAO.value=0),t.render(this.gl)}renderOverlay(t,e){this.gl.autoClear=!1,this.gl.clearDepth(),this.gl.render(t,e),this.gl.autoClear=!0}buildRT(t,e){const n=this.gl.getPixelRatio(),s=Math.max(1,Math.round(t*n)),r=Math.max(1,Math.round(e*n)),o=new $o(s,r);return o.type=pi,new Sn(s,r,{type:mi,depthTexture:o,depthBuffer:!0,samples:4})}buildRefractionRT(t,e){const n=this.gl.getPixelRatio(),s=Math.max(1,Math.round(t*n)),r=Math.max(1,Math.round(e*n)),o=new $o(s,r,pi),a=new Sn(s,r,{type:mi,depthTexture:o,depthBuffer:!0});return a.texture.magFilter=fe,a.texture.minFilter=fe,a.texture.generateMipmaps=!1,a}publishRefractionTarget(){if(this.waterRefractionSink){if(!this.refractionRT){this.waterRefractionSink(null,null,1,1);return}this.waterRefractionSink(this.refractionRT.texture,this.refractionRT.depthTexture,this.refractionRT.width,this.refractionRT.height)}}publishReflectionTarget(){if(this.waterReflectionSink){if(!this.planarReflection){this.waterReflectionSink(null);return}this.waterReflectionSink(this.planarReflection.texture,this.planarReflection.textureMatrix)}}}function eS(i){return new Worker("/mineworld/assets/chunkGen.worker-CSpXbyWk.js",{name:i==null?void 0:i.name})}const Bu=()=>typeof performance<"u"?performance.now():Date.now();class Kf{constructor(t,e="overworld"){x(this,"chunks",new Map);x(this,"pending",new Set);x(this,"pendingSince",new Map);x(this,"genFails",new Map);x(this,"workers",[]);x(this,"rr",0);x(this,"editHook",null);if(this.seed=t,this.dimension=e,typeof Worker<"u"){const n=typeof navigator<"u"&&navigator.hardwareConcurrency||4,s=Math.max(1,Math.min(4,n));for(let r=0;r<s;r++){const o=new eS;o.onmessage=a=>{var v;const{cx:l,cz:c,blocks:h,fluid:u,error:d}=a.data,f=this.key(l,c);if(this.pending.delete(f),this.pendingSince.delete(f),d){const p=(this.genFails.get(f)??0)+1;this.genFails.set(f,p),console.warn(`[chunkgen] 区块(${l},${c}) 生成失败 #${p}: ${d.split(`
`)[0]}`);return}if(this.genFails.delete(f),this.chunks.has(f)||!h||!u)return;const m=Dr.fromBuffers(h,u);(v=this.editHook)==null||v.call(this,l,c,m),m.dirty=!0,this.chunks.set(f,m)},o.onerror=a=>{console.error("[chunkgen worker] 致命错误(整个 worker 挂了，会拖慢加载):",a.message)},this.workers.push(o)}}}key(t,e){return`${t},${e}`}dispose(){for(const t of this.workers)t.terminate();this.workers.length=0,this.chunks.clear(),this.pending.clear(),this.pendingSince.clear(),this.genFails.clear(),this.editHook=null}hasChunk(t,e){return this.chunks.has(this.key(t,e))}request(t,e){const n=this.key(t,e);if(!(this.chunks.has(n)||this.pending.has(n))&&!((this.genFails.get(n)??0)>=3)){if(this.workers.length===0){this.getChunk(t,e);return}this.pending.add(n),this.pendingSince.set(n,Bu()),this.workers[this.rr].postMessage({cx:t,cz:e,seed:this.seed,dimension:this.dimension}),this.rr=(this.rr+1)%this.workers.length}}retryStuckGen(t=8e3){const e=Bu();for(const[n,s]of this.pendingSince)e-s>t&&(this.pending.delete(n),this.pendingSince.delete(n),console.warn(`[chunkgen] 区块 ${n} 生成 ${Math.round((e-s)/1e3)}s 未回(worker 丢消息?) → 重试`))}peek(t,e){return this.chunks.get(this.key(t,e))}evictBeyond(t,e,n){for(const s of[...this.chunks.keys()]){const r=s.indexOf(","),o=+s.slice(0,r),a=+s.slice(r+1);(Math.abs(o-t)>n||Math.abs(a-e)>n)&&this.chunks.delete(s)}}getChunk(t,e){var r;const n=this.key(t,e);let s=this.chunks.get(n);return s||(s=$f(t,e,this.seed,this.dimension),(r=this.editHook)==null||r.call(this,t,e,s),this.chunks.set(n,s),this.pending.delete(n)),s}getBlock(t,e,n){return e<0||e>=pe?0:this.getChunk(jt(t),jt(n)).get(Ke(t),e,Ke(n))}setBlock(t,e,n,s){if(e<0||e>=pe)return;const r=jt(t),o=jt(n),a=Ke(t),l=Ke(n),c=this.getChunk(r,o);c.set(a,e,l,s),s!==Gn&&c.setFluid(a,e,l,0),c.dirty=!0,this.markNeighborsDirty(r,o,a,l,8)}fluidByte(t,e,n){return e<0||e>=pe?0:this.getChunk(jt(t),jt(n)).getFluid(Ke(t),e,Ke(n))}waterAmount(t,e,n){return this.getBlock(t,e,n)!==Gn?0:rM(this.fluidByte(t,e,n))}isWaterSource(t,e,n){return this.getBlock(t,e,n)===Gn&&oM(this.fluidByte(t,e,n))}isWaterFalling(t,e,n){return this.getBlock(t,e,n)===Gn&&aM(this.fluidByte(t,e,n))}setWater(t,e,n,s,r,o){if(e<0||e>=pe)return;const a=jt(t),l=jt(n),c=Ke(t),h=Ke(n),u=this.getChunk(a,l);s<=0?(u.get(c,e,h)===Gn&&u.set(c,e,h,0),u.setFluid(c,e,h,0)):(u.set(c,e,h,Gn),u.setFluid(c,e,h,Ff(s,r,o))),u.dirty=!0,this.markNeighborsDirty(a,l,c,h)}markNeighborsDirty(t,e,n,s,r=1){const o=n<r,a=n>15-r,l=s<r,c=s>15-r;o&&this.markDirty(t-1,e),a&&this.markDirty(t+1,e),l&&this.markDirty(t,e-1),c&&this.markDirty(t,e+1),o&&l&&this.markDirty(t-1,e-1),o&&c&&this.markDirty(t-1,e+1),a&&l&&this.markDirty(t+1,e-1),a&&c&&this.markDirty(t+1,e+1)}markDirty(t,e){const n=this.chunks.get(this.key(t,e));n&&(n.dirty=!0)}}function Hu(i,t,e,n){let s=Math.floor(i.x),r=Math.floor(i.y),o=Math.floor(i.z);const a=Math.sign(t.x),l=Math.sign(t.y),c=Math.sign(t.z),h=t.x!==0?Math.abs(1/t.x):1/0,u=t.y!==0?Math.abs(1/t.y):1/0,d=t.z!==0?Math.abs(1/t.z):1/0,f=(y,_)=>_>0?Math.floor(y)+1-y:_<0?y-Math.floor(y):1/0;let m=t.x!==0?f(i.x,a)*h:1/0,v=t.y!==0?f(i.y,l)*u:1/0,p=t.z!==0?f(i.z,c)*d:1/0;if(n(s,r,o))return{x:s,y:r,z:o,nx:0,ny:0,nz:0};let g=0;for(let y=0;y<256;y++){let _=0,b=0,I=0;if(m<v&&m<p?(s+=a,g=m,m+=h,_=-a):v<p?(r+=l,g=v,v+=u,b=-l):(o+=c,g=p,p+=d,I=-c),g>e)break;if(n(s,r,o))return{x:s,y:r,z:o,nx:_,ny:b,nz:I}}return null}const nS=new Set([xa,Ma]),Gu=new Set([Ar,Sa]),gl=4,iS=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],xo=(i,t,e)=>`${i},${t},${e}`;function sS(i,t,e,n,s=gl){const r=s+gl,o=new Map,a=[];for(let c=t-r;c<=t+r;c++)for(let h=e-r;h<=e+r;h++)for(let u=n-r;u<=n+r;u++)nS.has(i(c,h,u))&&(o.set(xo(c,h,u),0),a.push({x:c,y:h,z:u}));for(let c=0;c<a.length;c++){const h=a[c],u=o.get(xo(h.x,h.y,h.z))??0;if(!(u>=gl))for(const[d,f,m]of iS){const v=h.x+d,p=h.y+f,g=h.z+m;if(!Gu.has(i(v,p,g)))continue;const y=xo(v,p,g);o.has(y)||(o.set(y,u+1),a.push({x:v,y:p,z:g}))}}const l=[];for(let c=t-s;c<=t+s;c++)for(let h=e-s;h<=e+s;h++)for(let u=n-s;u<=n+s;u++)Gu.has(i(c,h,u))&&!o.has(xo(c,h,u))&&l.push({x:c,y:h,z:u});return l}const rS="msx9nd2w";function js(i){return`/mineworld/${i}?v=${rS}`}const Vu=new Map;function ec(i="classic"){const t=Vu.get(i);if(t)return t;const e=i==="classic"?"textures/atlas_classic.png":"textures/atlas.png",n=new Ks().load(js(e));return n.magFilter=le,n.minFilter=vc,n.generateMipmaps=!0,n.colorSpace=Qt,Vu.set(i,n),n}function oS(){const i=new Ks().load(js("textures/torch_block.png"));return i.magFilter=le,i.minFilter=le,i.generateMipmaps=!1,i.colorSpace=Qt,i}function aS(i){const t=new Ks,e=[];for(let n=0;n<i;n++){const s=t.load(js(`textures/blocks/water_${n}.png`));s.magFilter=le,s.minFilter=vc,s.generateMipmaps=!0,s.colorSpace=Qt,s.wrapS=di,s.wrapT=di,e.push(s)}return e}const Mr={volume:70,lightingQuality:"standard",texturePack:"classic",renderDistance:6},nc="mineworld.settings",Cc=3,lS=["off","standard","high"];function jf(i){const t=i??{},e=typeof t.volume=="number"&&isFinite(t.volume)?Math.max(0,Math.min(100,Math.round(t.volume))):Mr.volume;let n;typeof t.lightingQuality=="string"&&lS.includes(t.lightingQuality)?n=t.lightingQuality:typeof t.shaders=="boolean"?n=t.shaders?"high":"standard":n=Mr.lightingQuality;const s=t.texturePack==="cartoon"?"cartoon":"classic",r=typeof t.renderDistance=="number"&&isFinite(t.renderDistance)?Math.max(3,Math.min(12,Math.round(t.renderDistance))):Mr.renderDistance;return{volume:e,lightingQuality:n,texturePack:s,renderDistance:r}}function cS(i){const t=jf(i);return(i??{}).textureStyleVersion===Cc?t:{...t,texturePack:"classic"}}function Zf(){try{const i=localStorage.getItem(nc);if(!i)return{...Mr};const t=JSON.parse(i),e=cS(t);return localStorage.setItem(nc,JSON.stringify({...e,textureStyleVersion:Cc})),e}catch{return{...Mr}}}function hS(i){try{localStorage.setItem(nc,JSON.stringify({...jf(i),textureStyleVersion:Cc}))}catch{}}const Jf=15,Qf=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function uS(i,t,e,n){const s=n??(()=>0),r=new Uint8Array(i*t*i),o=(l,c,h)=>l+h*i+c*i*i,a=[];for(let l=0;l<i;l++)for(let c=0;c<i;c++){let h=Jf;for(let u=t-1;u>=0&&!e(c,u,l);u--){h=Math.max(0,h-s(c,u,l));const d=o(c,u,l);r[d]=h,h>0&&a.push(d)}}for(let l=0;l<a.length;l++){const c=a[l],h=r[c];if(h<=1)continue;const u=c/(i*i)|0,d=c-u*i*i,f=d/i|0,m=d-f*i;for(const[v,p,g]of Qf){const y=m+v,_=u+p,b=f+g;if(y<0||y>=i||_<0||_>=t||b<0||b>=i||e(y,_,b))continue;const I=h-1-s(y,_,b);if(I<=0)continue;const R=o(y,_,b);r[R]>=I||(r[R]=I,a.push(R))}}return r}function dS(i,t,e,n,s){const r=s??(()=>0),o=new Uint8Array(i*t*i),a=(c,h,u)=>c+u*i+h*i*i,l=[];for(let c=0;c<t;c++)for(let h=0;h<i;h++)for(let u=0;u<i;u++){const d=e(u,c,h);if(d>0){const f=a(u,c,h);d>o[f]&&(o[f]=Math.min(Jf,d),l.push(f))}}for(let c=0;c<l.length;c++){const h=l[c],u=o[h];if(u<=1)continue;const d=h/(i*i)|0,f=h-d*i*i,m=f/i|0,v=f-m*i;for(const[p,g,y]of Qf){const _=v+p,b=d+g,I=m+y;if(_<0||_>=i||b<0||b>=t||I<0||I>=i||n(_,b,I))continue;const R=u-1-r(_,b,I);if(R<=0)continue;const C=a(_,b,I);o[C]>=R||(o[C]=R,l.push(C))}}return o}const vn=4,yo=10,fS=16,Wu=[.6,.6,1,.5,.8,.8],si=[{n:[1,0,0],o:[1,0,0],c:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],uv:[[0,0],[0,1],[1,1],[1,0]]},{n:[-1,0,0],o:[-1,0,0],c:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,1,0],o:[0,1,0],c:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],uv:[[0,0],[0,1],[1,1],[1,0]]},{n:[0,-1,0],o:[0,-1,0],c:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,1],o:[0,0,1],c:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,-1],o:[0,0,-1],c:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],uv:[[0,0],[0,1],[1,1],[1,0]]}],pS=[.5,.7,.86,1];function mS(i,t,e){return i&&t?0:3-(Number(i)+Number(t)+Number(e))}const tp=[{u:[0,1,0],v:[0,0,1],ui:1,vi:2},{u:[0,1,0],v:[0,0,1],ui:1,vi:2},{u:[1,0,0],v:[0,0,1],ui:0,vi:2},{u:[1,0,0],v:[0,0,1],ui:0,vi:2},{u:[1,0,0],v:[0,1,0],ui:0,vi:1},{u:[1,0,0],v:[0,1,0],ui:0,vi:1}];function gS(i,t,e,n,s,r){const o=si[s],a=tp[s],l=o.c[r],c=l[a.ui]===1?1:-1,h=l[a.vi]===1?1:-1,u=t+o.n[0],d=e+o.n[1],f=n+o.n[2],m=i(u+c*a.u[0],d+c*a.u[1],f+c*a.u[2]),v=i(u+h*a.v[0],d+h*a.v[1],f+h*a.v[2]),p=i(u+c*a.u[0]+h*a.v[0],d+c*a.u[1]+h*a.v[1],f+c*a.u[2]+h*a.v[2]);return pS[mS(m,v,p)]}const ar=()=>({P:[],U:[],C:[],I:[],L:[],UW:[],T:[],SH:[],SW:[]}),lr=i=>{const t=i.P.length/3;return{positions:new Float32Array(i.P),uvs:new Float32Array(i.U),colors:new Float32Array(i.C),indices:t<=65535?new Uint16Array(i.I):new Uint32Array(i.I),light:new Float32Array(i.L),underwater:i.UW.length?new Float32Array(i.UW):void 0,top:i.T.length?new Float32Array(i.T):void 0,shore:i.SH.length?new Float32Array(i.SH):void 0,sway:i.SW.length?new Float32Array(i.SW):void 0}};function vS(i,t,e,n){const s=i*wt,r=t*wt,o=ar(),a=ar(),l=ar(),c=ar(),h=ar(),u=.01/(fS*vn),d=1/vn-2*u,f=1/yo-2*u,m=(O,B,q)=>ds(e(O,B,q)),v=8,p=wt+2*v,g=(O,B,q)=>{const J=e(s+O-v,B,r+q-v);return yn(J)||ku(J)?1:0},y=uS(p,pe,(O,B,q)=>m(s+O-v,B,r+q-v),g),_=dS(p,pe,(O,B,q)=>EM(e(s+O-v,B,r+q-v)),(O,B,q)=>m(s+O-v,B,r+q-v),g),b=(O,B,q)=>B>=pe?15:B<0?0:y[O+v+(q+v)*p+B*p*p],I=(O,B,q)=>B>=pe||B<0?0:_[O+v+(q+v)*p+B*p*p],R=(O,B,q)=>{let J=0;for(let L=B;L<pe&&J<8&&n(O,L,q)>0;L++)J++;return J},C=(O,B,q,J,L)=>{const U=tp[J],Q=si[J].c[L],et=Q[U.ui]===1?1:-1,xt=Q[U.vi]===1?1:-1,ct=O+et*U.u[0],ht=B+et*U.u[1],A=q+et*U.u[2],Mt=O+xt*U.v[0],At=B+xt*U.v[1],Nt=q+xt*U.v[2],dt=ct+xt*U.v[0],It=ht+xt*U.v[1],Tt=A+xt*U.v[2],Lt=m(s+ct,ht,r+A),te=m(s+Mt,At,r+Nt),T=m(s+dt,It,r+Tt);let M=b(O,B,q),V=I(O,B,q),nt=1;return Lt||(M+=b(ct,ht,A),V+=I(ct,ht,A),nt++),te||(M+=b(Mt,At,Nt),V+=I(Mt,At,Nt),nt++),!(Lt&&te)&&!T&&(M+=b(dt,It,Tt),V+=I(dt,It,Tt),nt++),[M/nt/15,V/nt/15]},F=(O,B,q,J,L,U)=>{const Q=si[U],et=fl(L,U),xt=et%vn/vn+u,ct=1-(Math.floor(et/vn)+1)/yo+u,ht=Wu[U],A=B+Q.o[0],Mt=q+Q.o[1],At=J+Q.o[2],Nt=O===o?R(s+A,Mt,r+At):0,dt=O.P.length/3,It=[0,0,0,0];for(let Tt=0;Tt<4;Tt++){const Lt=Q.c[Tt];It[Tt]=gS(m,s+B,q,r+J,U,Tt);const te=ht*It[Tt],[T,M]=C(A,Mt,At,U,Tt);O.P.push(B+Lt[0],q+Lt[1],J+Lt[2]),O.U.push(xt+Q.uv[Tt][0]*d,ct+Q.uv[Tt][1]*f),O.C.push(te,te,te),O.L.push(T,M),O===o&&O.UW.push(Nt)}It[0]+It[2]>It[1]+It[3]?O.I.push(dt,dt+1,dt+2,dt,dt+2,dt+3):O.I.push(dt+1,dt+2,dt+3,dt+1,dt+3,dt),O===l&&O.SW.push(1,1,1,1)},E=(O,B,q)=>{const J=O+.5,L=B+.5,U=.28,Q=.92,et=[[[J-U,q,L],[J+U,q,L],[J+U,q+Q,L],[J-U,q+Q,L]],[[J,q,L-U],[J,q,L+U],[J,q+Q,L+U],[J,q+Q,L-U]]],xt=[[0,0],[1,0],[1,1],[0,1]];for(const ct of et){const ht=h.P.length/3;for(let A=0;A<4;A++)h.P.push(ct[A][0],ct[A][1],ct[A][2]),h.U.push(xt[A][0],xt[A][1]),h.C.push(1,1,1);h.I.push(ht,ht+1,ht+2,ht,ht+2,ht+3)}},S=(O,B,q,J,L)=>{const U=J%vn/vn+u,Q=U+d,et=1-(Math.floor(J/vn)+1)/yo+u,xt=et+f,ct=b(O,B,q)/15,ht=I(O,B,q)/15,A=.9,Mt=O+.5,At=q+.5,Nt=.5,dt=[[Mt-Nt,At-Nt,Mt+Nt,At+Nt],[Mt-Nt,At+Nt,Mt+Nt,At-Nt]];for(const[It,Tt,Lt,te]of dt){const T=l.P.length/3;l.P.push(It,B,Tt,Lt,B,te,Lt,B+L,te,It,B+L,Tt),l.U.push(U,et,Q,et,Q,xt,U,xt),l.C.push(A,A,A,A,A,A,A,A,A,A,A,A),l.L.push(ct,ht,ct,ht,ct,ht,ct,ht),l.SW.push(0,0,1,1),l.I.push(T,T+1,T+2,T,T+2,T+3)}},P=(O,B,q,J)=>{const L=J%vn/vn+u,U=L+d,Q=1-(Math.floor(J/vn)+1)/yo+u,et=Q+f,xt=b(O,B,q)/15,ct=I(O,B,q)/15,ht=1,A=B+.06,Mt=l.P.length/3;l.P.push(O,A,q,O,A,q+1,O+1,A,q+1,O+1,A,q),l.U.push(L,Q,L,et,U,et,U,Q),l.C.push(ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht),l.L.push(xt,ct,xt,ct,xt,ct,xt,ct),l.SW.push(0,0,0,0),l.I.push(Mt,Mt+1,Mt+2,Mt,Mt+2,Mt+3)};let X=1;const W=(O,B,q)=>e(O,B,q)===Rs,j=(O,B,q)=>{if(n(O,B,q)===0&&!W(O,B,q))return 0;let J=1;for(let L=B+1;J<7&&L<pe&&n(O,L,q)>0;L++)J++;for(let L=B-1;J<7&&L>=0&&n(O,L,q)>0;L--)J++;return J},Z=(O,B,q)=>(j(O-1,B,q-1)+j(O,B,q-1)+j(O-1,B,q)+j(O,B,q))/4,K=(O,B,q)=>{const J=(U,Q)=>n(U,B,Q)>0||W(U,B,Q);return 1-(Number(J(O-1,q-1))+Number(J(O,q-1))+Number(J(O-1,q))+Number(J(O,q)))/4},it=(O,B,q,J,L)=>{const U=si[J],Q=Wu[J],et=b(O+U.o[0],B+U.o[1],q+U.o[2])/15,xt=I(O+U.o[0],B+U.o[1],q+U.o[2])/15,ct=c.P.length/3,ht=J===2;for(let A=0;A<4;A++){const Mt=U.c[A],At=B+L[A];c.P.push(O+Mt[0],At,q+Mt[2]);const Nt=s+O+Mt[0],dt=r+q+Mt[2];J===2||J===3?c.U.push(Nt,dt):J===0||J===1?c.U.push(dt,At):c.U.push(Nt,At),c.C.push(Q,Q,Q),c.L.push(et,xt);const It=ht||L[A]>.01?X:0;c.T.push((It>0?1:-1)*Z(Nt,B,dt)),c.SH.push(K(Nt,B,dt))}c.I.push(ct,ct+1,ct+2,ct,ct+2,ct+3)},Y=(O,B)=>{let q=0,J=0;for(const[L,U]of B){const Q=n(L,O,U);if(n(L,O+1,U)>0)return 1;if(Q>0){const et=Q/9;et>=.8?(q+=et*10,J+=10):(q+=et,J+=1)}else Ee(e(L,O,U))||(J+=1)}return J>0?q/J:.5};for(let O=0;O<pe;O++)for(let B=0;B<wt;B++)for(let q=0;q<wt;q++){const J=e(s+q,O,r+B);if(ds(J)&&J!==Rs)for(let L=0;L<6;L++){const U=si[L];ds(e(s+q+U.o[0],O+U.o[1],r+B+U.o[2]))||F(o,q,O,B,J,L)}else if(ku(J))for(let L=0;L<6;L++){const U=si[L];ds(e(s+q+U.o[0],O+U.o[1],r+B+U.o[2]))||F(l,q,O,B,J,L)}else if(yn(J)){const L=s+q,U=r+B;X=n(L,O+1,U)>0?0:1;const Q=Y(O,[[L,U],[L-1,U],[L,U-1],[L-1,U-1]]),et=Y(O,[[L,U],[L-1,U],[L,U+1],[L-1,U+1]]),xt=Y(O,[[L,U],[L+1,U],[L,U+1],[L+1,U+1]]),ct=Y(O,[[L,U],[L+1,U],[L,U-1],[L+1,U-1]]);n(L,O+1,U)===0&&it(q,O,B,zn.PosY,[Q,et,xt,ct]),e(L,O-1,U)===0&&it(q,O,B,zn.NegY,[0,0,0,0]);const ht=(A,Mt,At,Nt)=>{e(L+Mt,O,U+At)===0&&it(q,O,B,A,Nt)};ht(zn.PosX,1,0,[0,ct,xt,0]),ht(zn.NegX,-1,0,[0,0,et,Q]),ht(zn.PosZ,0,1,[0,0,xt,et]),ht(zn.NegZ,0,-1,[0,Q,ct,0])}else if(J===As)E(q,B,O);else if(Ni(J))J===Ac?P(q,O,B,fl(J,zn.PosY)):S(q,O,B,fl(J,zn.PosY),J===Gf?1.45:.82);else if(J===Rs)for(let L=0;L<6;L++){const U=si[L];ds(e(s+q+U.o[0],O+U.o[1],r+B+U.o[2]))||F(a,q,O,B,J,L)}else if(J===Qo)for(let L=0;L<6;L++){const U=si[L],Q=e(s+q+U.o[0],O+U.o[1],r+B+U.o[2]);ds(Q)||Q===Qo||F(o,q,O,B,J,L)}}const gt=new Uint8Array(4*48*4);for(let O=0;O<48;O++)for(let B=0;B<4;B++)for(let q=0;q<4;q++){let J=0,L=0;for(let U=0;U<4;U++){const Q=(O*4+U)*p*p;for(let et=0;et<4;et++){const xt=Q+(B*4+et+v)*p+v+q*4;for(let ct=0;ct<4;ct++){const ht=y[xt+ct];ht>J&&(J=ht);const A=_[xt+ct];A>L&&(L=A)}}}gt[q+B*4+O*16]=J<<4|L}return{opaque:lr(o),ice:lr(a),cutout:lr(l),water:lr(c),torch:lr(h),light3d:gt}}function _S(i,t,e){return vS(t,e,(n,s,r)=>i.getBlock(n,s,r),(n,s,r)=>i.waterAmount(n,s,r))}function xS(i){return new Worker("/mineworld/assets/meshGen.worker-BNKx1dly.js",{name:i==null?void 0:i.name})}const yS=.15,MS=24*24;function SS(i,t,e,n,s,r,o=yS,a=MS){const l=i-e,c=t-n,h=l*l+c*c;return h<=a?!0:(l*s+c*r)/Math.sqrt(h)>=o}const wS=-.2,ES=2.25;function bS(i,t,e,n,s=wS,r=ES){const o=i*i+t*t;return o<=r?!0:(i*e+t*n)/Math.sqrt(o)>=s}const Ze=24e3,TS=1e3,fs=[{t:0,top:[.36,.48,.66],hor:[1,.62,.36],tint:[.72,.64,.62]},{t:1800,top:[.3,.52,.79],hor:[.81,.9,.97],tint:[1,1,1]},{t:11e3,top:[.3,.52,.79],hor:[.81,.9,.97],tint:[1,1,1]},{t:12200,top:[.24,.34,.55],hor:[1,.5,.24],tint:[.86,.62,.5]},{t:13600,top:[.05,.07,.16],hor:[.09,.12,.24],tint:[.3,.34,.5]},{t:22e3,top:[.05,.07,.16],hor:[.09,.12,.24],tint:[.3,.34,.5]},{t:23200,top:[.36,.48,.66],hor:[1,.62,.36],tint:[.72,.64,.62]}],vl=(i,t,e)=>i+(t-i)*e,_l=(i,t,e)=>[vl(i[0],t[0],e),vl(i[1],t[1],e),vl(i[2],t[2],e)];function ep(i){return(i%Ze+Ze)%Ze}function ic(i){const e=(ep(i)-6e3)/Ze*Math.PI*2;return Math.max(0,Math.min(1,.5-2*Math.cos(e)))*11}const AS={skyTop:[.18,.05,.05],skyHorizon:[.34,.09,.07],worldTint:[.62,.32,.28],light:.3,isNight:!0};function sc(i,t="overworld"){if(t==="nether")return AS;const e=ep(i);let n=fs[0],s={...fs[0],t:Ze};for(let a=0;a<fs.length;a++){const l=fs[a],c=fs[a+1]??{...fs[0],t:Ze};if(e>=l.t&&e<c.t){n=l,s=c;break}}const r=s.t===n.t?0:(e-n.t)/(s.t-n.t),o=_l(n.tint,s.tint,r);return{skyTop:_l(n.top,s.top,r),skyHorizon:_l(n.hor,s.hor,r),worldTint:o,light:(o[0]+o[1]+o[2])/3,isNight:e>=13e3&&e<23e3}}const np=64,Ho=256,rc=i=>i*i*(3-2*i),Xu=i=>Math.max(0,Math.min(1,i)),xs=Math.PI*2,mr=(i,t)=>{let e=Math.imul(i^2654435769,2246822507)^Math.imul(t^3266489909,668265261);return e^=e>>>15,e=Math.imul(e,2246822507),e^=e>>>13,(e>>>0)/4294967295},ai=(i,t)=>(i%t+t)%t,ip=(i,t,e)=>{if(!Number.isInteger(i)||i<t||i&i-1)throw new Error(`${e} size must be a power of two >= ${t}`)},RS=(i,t,e,n)=>{const s=i/e*n,r=t/e*n,o=Math.floor(s),a=Math.floor(r),l=rc(s-o),c=rc(r-a),h=ai(o,n),u=ai(o+1,n),d=ai(a,n),f=ai(a+1,n),m=mr(h,d),v=mr(u,d),p=mr(h,f),g=mr(u,f);return(m+(v-m)*l)*(1-c)+(p+(g-p)*l)*c};function CS(i=np){ip(i,16,"cloud-shadow");const t=new Float32Array(i*i);let e=1/0,n=-1/0;for(let a=0;a<i;a++)for(let l=0;l<i;l++){let c=0,h=0,u=1;for(const d of[2,4,8,16])c+=RS(l,a,i,d)*u,h+=u,u*=.52;c/=h,t[l+a*i]=c,e=Math.min(e,c),n=Math.max(n,c)}const s=Math.max(1e-6,n-e);for(let a=0;a<t.length;a++)t[a]=(t[a]-e)/s;const r=new Uint8Array(i*i*4),o=(a,l)=>t[ai(a,i)+ai(l,i)*i];for(let a=0;a<i;a++)for(let l=0;l<i;l++){const c=(o(l+1,a)-o(l-1,a))*3.8,h=(o(l,a+1)-o(l,a-1))*3.8,u=1/Math.hypot(c,1,h),d=-c*u,f=-h*u,m=o(l,a),v=Math.pow(Math.max(0,1-Math.abs(m*2-1)),2.5),p=(l+a*i)*4;r[p]=Math.round((d*.5+.5)*255),r[p+1]=Math.round((f*.5+.5)*255),r[p+2]=Math.round(m*255),r[p+3]=Math.round(v*255)}return r}const sp=(i,t,e=1)=>(i.name=t,i.wrapS=di,i.wrapT=di,i.magFilter=fe,i.minFilter=ri,i.generateMipmaps=!0,i.colorSpace=An,i.anisotropy=e,i.needsUpdate=!0,i);function PS(i=np){const t=new Pf(CS(i),i,i,dn);return sp(t,"mineworld-cloud-shadow-noise")}const qu=[{kx:3,ky:1,amplitude:.32},{kx:4,ky:1,amplitude:.27},{kx:5,ky:2,amplitude:.23},{kx:7,ky:2,amplitude:.19},{kx:9,ky:3,amplitude:.155},{kx:11,ky:4,amplitude:.126},{kx:14,ky:5,amplitude:.1},{kx:17,ky:6,amplitude:.079},{kx:21,ky:7,amplitude:.062},{kx:26,ky:9,amplitude:.048},{kx:32,ky:11,amplitude:.037},{kx:39,ky:14,amplitude:.028},{kx:5,ky:-2,amplitude:.105},{kx:8,ky:-3,amplitude:.077},{kx:13,ky:-5,amplitude:.052},{kx:20,ky:-7,amplitude:.035},{kx:-2,ky:6,amplitude:.055},{kx:-3,ky:10,amplitude:.036}],LS=(i,t)=>mr(i.kx+t*37+101,i.ky-t*53-211)*xs;function DS(i=Ho){ip(i,Ho,"directional-wave");const t=i*i,e=new Float32Array(t);let n=1/0,s=-1/0;for(let u=0;u<i;u++){const d=u/i;for(let f=0;f<i;f++){const m=f/i,v=Math.sin(xs*(2*m+d)+1.71)*.013+Math.sin(xs*(-m+3*d)+4.19)*.006,p=Math.sin(xs*(m-2*d)+.63)*.009+Math.sin(xs*(3*m+d)+2.77)*.004;let g=0,y=0;for(let _=0;_<qu.length;_++){const b=qu[_],I=LS(b,_),R=xs*(b.kx*(m+v)+b.ky*(d+p))+I,C=Math.sin(R)+Math.sin(R*2+I*.37)*.16;g+=C*b.amplitude,y+=b.amplitude}g/=y*1.16,e[f+u*i]=g,n=Math.min(n,g),s=Math.max(s,g)}}const r=Math.max(1e-6,s-n);for(let u=0;u<t;u++)e[u]=(e[u]-n)/r;const o=(u,d)=>e[ai(u,i)+ai(d,i)*i],a=5.2*(i/Ho),l=new Float32Array(t);let c=1e-6;for(let u=0;u<i;u++)for(let d=0;d<i;d++){const f=o(d,u),m=f*4-o(d-1,u)-o(d+1,u)-o(d,u-1)-o(d,u+1),v=Math.max(0,m)*rc(Xu((f-.38)/.52));l[d+u*i]=v,c=Math.max(c,v)}const h=new Uint8Array(t*4);for(let u=0;u<i;u++)for(let d=0;d<i;d++){const f=(o(d+1,u)-o(d-1,u))*a,m=(o(d,u+1)-o(d,u-1))*a,v=1/Math.hypot(f,1,m),p=-f*v,g=-m*v,y=o(d,u),_=Math.pow(Xu(l[d+u*i]/(c*.42)),.72),b=(d+u*i)*4;h[b]=Math.round((p*.5+.5)*255),h[b+1]=Math.round((g*.5+.5)*255),h[b+2]=Math.round(y*255),h[b+3]=Math.round(_*255)}return h}function IS(i=Ho){const t=new Pf(DS(i),i,i,dn);return sp(t,"mineworld-directional-wave",8)}const Yu=()=>typeof performance<"u"?performance.now():Date.now(),US=24,cr=2048,Mo=36,kS=110,$u=(i,t,e)=>{const n=Math.max(0,Math.abs(i)-.5),s=Math.max(0,Math.abs(t)-.5);return n*n+s*s>e},xl="float mcBright(float lv){ float f = clamp(lv,0.0,15.0)/15.0; return f/(4.0-3.0*f); }",yl="{ float skyLv = aLight.x*15.0; float blkLv = aLight.y*15.0; float bs = mcBright(max(skyLv - uSkyDarken, 0.0)); float bb = mcBright(blkLv); float drkFloor = (skyLv < 0.5) ? 0.03 : 0.04; vLF = max(bs, bb) * 0.96 + drkFloor; float sf = (bs + bb) > 0.0001 ? bs / (bs + bb) : 1.0; vTint = mix(vec3(1.0, 0.91, 0.78), uSkyTint, sf); }",Ku=i=>{const t=Math.max(0,Math.min(15,i))/15;return t/(4-3*t)};class rp{constructor(t,e,n){x(this,"meshes",new Map);x(this,"lightGrids",new Map);x(this,"opaqueMat");x(this,"iceMat");x(this,"cutoutMat");x(this,"waterMat");x(this,"torchMat");x(this,"waterFrames");x(this,"waterTex");x(this,"cloudNoiseTex");x(this,"waterWaveTex");x(this,"waterAnimT",0);x(this,"waterFrame",0);x(this,"uSkyMul",{value:1});x(this,"uSkyTint",{value:new Ct(1,1,1)});x(this,"uSkyDarken",{value:0});x(this,"uShaders",{value:0});x(this,"uTime",{value:0});x(this,"uSkyRefl",{value:new Ct().setRGB(.55,.72,.95,Qt)});x(this,"uSkyTop",{value:new Ct().setRGB(.35,.55,.85,Qt)});x(this,"uSunDir",{value:new N(.4,.85,.3)});x(this,"uRefractionColor",{value:null});x(this,"uRefractionDepth",{value:null});x(this,"uRefractionSize",{value:new Bt(1,1)});x(this,"uHasRefraction",{value:0});x(this,"uReflectionColor",{value:null});x(this,"uReflectionMatrix",{value:new ce});x(this,"uHasReflection",{value:0});x(this,"sun",new $y(16777215,0));x(this,"uShadowMap",{value:null});x(this,"uShadowMatrix",{value:new ce});x(this,"uShadowTexel",{value:new Bt(1/cr,1/cr)});x(this,"uShadowOn",{value:0});x(this,"uHq",{value:0});x(this,"uSunUp",{value:0});x(this,"leafDepthMat",null);x(this,"meshWorkers",[]);x(this,"meshRr",0);x(this,"meshPending",new Set);x(this,"meshPendingSince",new Map);x(this,"meshFails",new Map);x(this,"meshQueue",[]);x(this,"editKeys",new Set);x(this,"priorityQueue",[]);x(this,"fogCullR2",(kS/wt)**2);x(this,"lastTint","");this.scene=t,this.world=e,this.opaqueMat=new me({map:n,vertexColors:!0}),this.opaqueMat.shadowSide=Ue,this.iceMat=new me({map:n,vertexColors:!0}),this.iceMat.shadowSide=Ue,this.cutoutMat=new me({map:n,vertexColors:!0,alphaTest:.5,side:Be}),this.waterFrames=aS(US),this.waterTex=this.waterFrames[0].clone(),this.waterTex.needsUpdate=!0,this.cloudNoiseTex=PS(128),this.waterWaveTex=IS(),this.waterMat=new me({map:this.waterTex,vertexColors:!0,transparent:!0,opacity:.78,depthWrite:!1,side:Be}),this.waterMat.forceSinglePass=!0,this.installLight(this.opaqueMat,!1,!0),this.installLight(this.cutoutMat,!0,!1),this.installWaterShader(this.waterMat),this.installIceShader(this.iceMat),this.torchMat=new me({map:oS(),transparent:!0,alphaTest:.5,side:Be}),this.sun.castShadow=!1,this.sun.shadow.mapSize.set(cr,cr);const s=this.sun.shadow.camera;if(s.left=-Mo,s.right=Mo,s.top=Mo,s.bottom=-Mo,s.near=1,s.far=260,this.scene.add(this.sun),this.scene.add(this.sun.target),this.leafDepthMat=new Tf({depthPacking:lf,map:n,alphaTest:.5}),typeof Worker<"u"){const r=typeof navigator<"u"&&navigator.hardwareConcurrency||4,o=Math.max(1,Math.min(4,r-1));for(let a=0;a<o;a++){const l=new xS;l.onmessage=c=>{var v;const{cx:h,cz:u,mesh:d,error:f}=c.data,m=this.key(h,u);if(this.meshPending.has(m)){if(this.meshPending.delete(m),this.meshPendingSince.delete(m),f){const p=(this.meshFails.get(m)??0)+1;this.meshFails.set(m,p),console.warn(`[meshgen] 区块(${h},${u}) 网格化失败 #${p}: ${f.split(`
`)[0]}`);return}this.meshFails.delete(m),!(!d||!this.world.peek(h,u))&&(this.editKeys.has(m)?(this.priorityQueue.push({cx:h,cz:u,mesh:d}),(v=this.world.peek(h,u))!=null&&v.dirty||this.editKeys.delete(m)):this.meshQueue.push({cx:h,cz:u,mesh:d}))}},l.onerror=c=>{console.error("[meshgen worker] 致命错误(整个 worker 挂了，区块会停止网格化):",c.message)},this.meshWorkers.push(l)}}}installLight(t,e=!1,n=!1){t.onBeforeCompile=s=>{s.uniforms.uSkyTint=this.uSkyTint,s.uniforms.uSkyDarken=this.uSkyDarken,s.uniforms.uShadowMap=this.uShadowMap,s.uniforms.uShadowMatrix=this.uShadowMatrix,s.uniforms.uShadowTexel=this.uShadowTexel,s.uniforms.uShadowOn=this.uShadowOn,s.uniforms.uHq=this.uHq,s.uniforms.uSunUp=this.uSunUp,s.uniforms.uShaders=this.uShaders,s.uniforms.uSunDirW=this.uSunDir,s.uniforms.uTime=this.uTime,s.uniforms.uSurfaceNoise={value:this.cloudNoiseTex},s.uniforms.uWaterWaves={value:this.waterWaveTex};const r=e?`{ float sw = uShaders * 0.06 * aSway; vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz; float ph = wp.x*0.6 + wp.z*0.5 + wp.y*0.3; transformed.x += sin(ph + uTime*1.4) * sw; transformed.z += sin(ph*1.3 + uTime*1.1) * sw; transformed.y += sin(ph*0.8 + uTime*1.7) * sw * 0.5; }
`:"";s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aLight;
uniform vec3 uSkyTint;
uniform float uSkyDarken;
uniform mat4 uShadowMatrix;
uniform float uShaders;
`+(e?`uniform float uTime;
attribute float aSway;
`:"")+(n?`attribute float aUnderwater;
`:"")+`varying float vLF;
varying vec3 vTint;
varying vec4 vShadowCoord;
varying float vSky;
varying vec3 vWp;
varying float vUnderwater;
`+xl).replace("#include <begin_vertex>",`#include <begin_vertex>
`+r+yl+`
vSky = aLight.x;
vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;
`+(n?`vUnderwater = aUnderwater;
`:`vUnderwater = 0.0;
`)+"vShadowCoord = uShadowMatrix * (modelMatrix * vec4(transformed, 1.0));"),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying float vLF;
varying vec3 vTint;
varying vec4 vShadowCoord;
varying float vSky;
varying vec3 vWp;
varying float vUnderwater;
uniform sampler2D uShadowMap;
uniform vec2 uShadowTexel;
uniform float uShadowOn;
uniform float uHq;
uniform float uSunUp;
uniform float uShaders;
uniform vec3 uSunDirW;
uniform float uTime;
uniform sampler2D uSurfaceNoise;
uniform sampler2D uWaterWaves;
float mwUnpackDepth(vec4 v){ const vec4 f = (255.0/256.0)/vec4(16777216.0,65536.0,256.0,1.0); return dot(v,f); }
float mwShadow(vec4 sc){
  vec3 c = sc.xyz / sc.w;
  if (c.z >= 1.0 || c.x < 0.0 || c.x > 1.0 || c.y < 0.0 || c.y > 1.0) return 1.0;
  float bias = 0.00032;
  float r = mix(1.35, 2.75, uHq);
  float s = 0.0;
  s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2(-0.613, 0.617)*uShadowTexel*r)))?1.0:0.0;
  s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2( 0.170,-0.040)*uShadowTexel*r)))?1.0:0.0;
  s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2(-0.299,-0.791)*uShadowTexel*r)))?1.0:0.0;
  s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2( 0.646, 0.494)*uShadowTexel*r)))?1.0:0.0;
  s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2(-0.768,-0.250)*uShadowTexel*r)))?1.0:0.0;
  s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2( 0.421,-0.644)*uShadowTexel*r)))?1.0:0.0;
  s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2( 0.904, 0.032)*uShadowTexel*r)))?1.0:0.0;
  s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2(-0.058, 0.934)*uShadowTexel*r)))?1.0:0.0;
  if (uHq > 0.5) {
    s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2(-0.332, 0.220)*uShadowTexel*r)))?1.0:0.0;
    s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2( 0.292, 0.821)*uShadowTexel*r)))?1.0:0.0;
    s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2( 0.744,-0.312)*uShadowTexel*r)))?1.0:0.0;
    s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2(-0.897, 0.195)*uShadowTexel*r)))?1.0:0.0;
    s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2( 0.079,-0.956)*uShadowTexel*r)))?1.0:0.0;
    s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2( 0.508, 0.246)*uShadowTexel*r)))?1.0:0.0;
    s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2(-0.482,-0.512)*uShadowTexel*r)))?1.0:0.0;
    s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2( 0.255,-0.356)*uShadowTexel*r)))?1.0:0.0;
    s /= 16.0;
  } else { s /= 8.0; }
  float m = min(min(c.x, 1.0 - c.x), min(c.y, 1.0 - c.y));
  return mix(1.0, s, smoothstep(0.0, 0.08, m));
}`).replace("#include <color_fragment>",`#include <color_fragment>
float vis = 1.0;
if (uShadowOn > 0.5) {
  float sh = mwShadow(vShadowCoord);
  float gate = vSky * uSunUp;
  vis = mix(1.0, mix(0.61, 1.0, sh), gate);
}
vec3 shTint = mix(vec3(0.9, 0.95, 1.06), vec3(1.0), vis);
diffuseColor.rgb *= vLF * vTint * vis * shTint;
float cloud = 0.0;
float openSun = vSky * uSunUp * uShaders * vis;
if (openSun > 0.003) {
  vec2 cuv = vWp.xz * 0.0055 + vec2(uTime * 0.0014, uTime * 0.0008);
  cloud = smoothstep(0.54, 0.78, texture2D(uSurfaceNoise, cuv).b);
  float cloudDim = cloud * mix(0.75, 1.0, uHq) * openSun;
  diffuseColor.rgb *= vec3(1.0) - vec3(0.11, 0.085, 0.045) * cloudDim;
}
float sunLit = vSky * uSunUp * uShaders * vis;
if (sunLit > 0.003) {
  vec3 Nw = normalize(cross(dFdx(vWp), dFdy(vWp)));
  vec3 Vd = normalize(cameraPosition - vWp);
  Nw *= sign(dot(Nw, Vd));
  vec3 sunDir = normalize(uSunDirW);
  float nd = max(dot(Nw, sunDir), 0.0);
  float sunHeight = clamp(sunDir.y * 3.0, 0.0, 1.0);
  vec3 sunTone = mix(vec3(1.32, 0.66, 0.22), vec3(1.04, 0.98, 0.86), sunHeight);
  diffuseColor.rgb *= 1.0 + sunTone * nd * sunLit * (1.0 - cloud * 0.7) * 0.075;
}
if (uShaders > 0.5 && vUnderwater > 0.05 && uSunUp > 0.01) {
  vec2 sunProjected = vWp.xz - normalize(uSunDirW).xz / max(normalize(uSunDirW).y, 0.25) * vWp.y;
  vec2 cUv0 = sunProjected * 0.145 + vec2(uTime * 0.011, -uTime * 0.008);
  vec2 cUv1 = vec2(cUv0.x * 0.76 - cUv0.y * 0.65, cUv0.x * 0.65 + cUv0.y * 0.76) * 1.65 + vec2(-uTime * 0.007, uTime * 0.012);
  float crest0 = texture2D(uWaterWaves, cUv0).a;
  float crest1 = texture2D(uWaterWaves, cUv1).a;
  float c0 = smoothstep(0.62, 0.91, crest0);
  float c1 = smoothstep(0.62, 0.91, crest1);
  float caustic = pow(max(c0, c1) * 0.55 + c0 * c1 * 0.75, 1.8);
  float depthFade = exp(-vUnderwater * 0.3) * smoothstep(0.02, 0.25, vUnderwater);
  vec3 causticColor = mix(vec3(0.52, 0.76, 0.66), vec3(1.18, 1.08, 0.78), uSunUp);
  diffuseColor.rgb += diffuseColor.rgb * causticColor * caustic * depthFade * uSunUp * 0.44;
}`)}}updateSun(t,e,n,s){const r=t/Ze*Math.PI*2;let o=Math.cos(r),a=Math.sin(r),l=.1;const c=Math.hypot(o,a,l)||1;o/=c,a/=c,l/=c;const h=Math.round(e),u=Math.round(n),d=Math.round(s);this.sun.target.position.set(h,u,d),this.sun.position.set(h+o*120,u+a*120,d+l*120),this.sun.target.updateMatrixWorld(),this.sun.updateMatrixWorld(),this.uSunUp.value=Math.max(0,Math.min(1,(a-.02)/.2));const f=this.sun.shadow.map;this.sun.castShadow&&f&&f.texture&&this.uSunUp.value>.001?(this.uShadowMap.value=f.texture,this.uShadowMatrix.value=this.sun.shadow.matrix,this.uShadowOn.value=1):this.uShadowOn.value=0}installWaterShader(t){t.onBeforeCompile=e=>{e.uniforms.uSkyMul=this.uSkyMul,e.uniforms.uSkyTint=this.uSkyTint,e.uniforms.uSkyDarken=this.uSkyDarken,e.uniforms.uShaders=this.uShaders,e.uniforms.uTime=this.uTime,e.uniforms.uSkyRefl=this.uSkyRefl,e.uniforms.uSkyTop=this.uSkyTop,e.uniforms.uSunDir=this.uSunDir,e.uniforms.uHq=this.uHq,e.uniforms.uSurfaceNoise={value:this.waterWaveTex},e.uniforms.uCloudNoise={value:this.cloudNoiseTex},e.uniforms.uRefractionColor=this.uRefractionColor,e.uniforms.uRefractionDepth=this.uRefractionDepth,e.uniforms.uRefractionSize=this.uRefractionSize,e.uniforms.uHasRefraction=this.uHasRefraction,e.uniforms.uReflectionColor=this.uReflectionColor,e.uniforms.uReflectionMatrix=this.uReflectionMatrix,e.uniforms.uHasReflection=this.uHasReflection,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aLight;
attribute float aTop;
attribute float aShore;
uniform vec3 uSkyTint;
uniform float uSkyDarken;
uniform float uShaders;
uniform float uTime;
uniform float uHq;
uniform mat4 uReflectionMatrix;
varying float vLF;
varying vec3 vTint;
varying vec3 vWPos;
varying float vWaterDepth;
varying float vSkyVis;
varying float vShore;
varying vec4 vReflectionCoord;
float mwWaveV(vec2 p, float t) {
  float a = sin(dot(p, vec2(0.78, 0.63)) * 0.449 + t * 0.72) * 0.045;
  float b = sin(dot(p, vec2(-0.42, 0.91)) * 0.785 - t * 0.54) * 0.026;
  float c = sin(dot(p, vec2(0.96, -0.28)) * 1.396 + t * 0.39) * 0.013;
  float d = sin(dot(p, vec2(-0.83, -0.56)) * 2.513 - t * 0.31) * 0.006 * uHq;
  return a + b + c + d;
}
${xl}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${yl}
vec3 mwWp0 = (modelMatrix * vec4(transformed, 1.0)).xyz;
transformed.y += mwWaveV(mwWp0.xz, uTime) * step(0.45, aTop) * uShaders;
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vWaterDepth = abs(aTop);
vSkyVis = aLight.x;
vShore = aShore;
vReflectionCoord = uReflectionMatrix * vec4(vWPos, 1.0);`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uSkyMul;
uniform float uShaders;
uniform float uTime;
uniform float uHq;
uniform vec3 uSkyRefl;
uniform vec3 uSkyTop;
uniform vec3 uSunDir;
uniform sampler2D uSurfaceNoise;
uniform sampler2D uCloudNoise;
uniform sampler2D uRefractionColor;
uniform sampler2D uRefractionDepth;
uniform vec2 uRefractionSize;
uniform float uHasRefraction;
uniform sampler2D uReflectionColor;
uniform float uHasReflection;
varying float vLF;
varying vec3 vTint;
varying vec3 vWPos;
varying float vWaterDepth;
varying float vSkyVis;
varying float vShore;
varying vec4 vReflectionCoord;
vec2 mwTurn(vec2 p) { return vec2(p.x * 0.8 - p.y * 0.6, p.x * 0.6 + p.y * 0.8); }
float mwLinearDepth(float z) {
  float n = 0.1;
  float f = 1000.0;
  float ndc = z * 2.0 - 1.0;
  return (2.0 * n * f) / max(0.0001, f + n - ndc * (f - n));
}`).replace("#include <map_fragment>",`#ifdef USE_MAP
if (uShaders < 0.5) diffuseColor *= texture2D(map, vMapUv);
#endif`).replace("#include <color_fragment>",`#include <color_fragment>
float mwFaceShade = clamp(max(max(diffuseColor.r, diffuseColor.g), diffuseColor.b), 0.48, 1.0);
if (uShaders < 0.5) {
  diffuseColor.rgb *= vLF * vTint;
} else if (uHasRefraction > 0.5) {
  vec3 toEye = cameraPosition - vWPos;
  float dist = length(toEye);
  vec3 V = toEye / max(dist, 0.0001);
  vec3 faceN = normalize(cross(dFdx(vWPos), dFdy(vWPos)));
  faceN *= sign(dot(faceN, V));
  float horiz = smoothstep(0.5, 0.92, abs(faceN.y));

  // 三层方向不同的微波法线。坡度严格控制在真实水面的范围，避免旧版大片灰色油污。
  vec2 p = vWPos.xz;
  vec4 rippleA = texture2D(uSurfaceNoise, p * 0.037 + vec2(uTime * 0.0065, -uTime * 0.0042));
  vec4 rippleB = texture2D(uSurfaceNoise, mwTurn(p) * 0.091 + vec2(-uTime * 0.011, uTime * 0.007));
  vec4 rippleC = texture2D(uSurfaceNoise, mwTurn(p.yx) * 0.21 + vec2(uTime * 0.016, uTime * 0.012));
  vec2 slope = (rippleA.rg * 2.0 - 1.0) * 0.095;
  slope += (rippleB.rg * 2.0 - 1.0) * 0.08;
  slope += (rippleC.rg * 2.0 - 1.0) * mix(0.034, 0.045, uHq);
  slope *= horiz;
  vec3 waveN = normalize(vec3(-slope.x, 1.0, -slope.y));
  vec3 N = normalize(mix(faceN, waveN, horiz));

  // 无水 HDR RT 的真实屏幕空间折射：用微法线轻推 UV，并用深度拒绝前景串色。
  vec2 screenUv = gl_FragCoord.xy / max(uRefractionSize, vec2(1.0));
  vec2 maxRefraction = vec2(6.0) / max(uRefractionSize, vec2(1.0));
  vec2 refrOffset = clamp(slope * mix(0.01, 0.016, uHq), -maxRefraction, maxRefraction);
  vec2 refrUv = clamp(screenUv + refrOffset, vec2(0.002), vec2(0.998));
  float centerDepth = texture2D(uRefractionDepth, screenUv).r;
  float centerDistance = mwLinearDepth(centerDepth);
  float waterDistance = mwLinearDepth(gl_FragCoord.z);
  float centerThickness = max(0.0, centerDistance - waterDistance);
  float sceneDepth = texture2D(uRefractionDepth, refrUv).r;
  float sampledDistance = mwLinearDepth(sceneDepth);
  float depthDiscontinuity = abs(sampledDistance - centerDistance);
  if (sceneDepth <= gl_FragCoord.z + 0.00012 || depthDiscontinuity > max(0.8, centerThickness * 0.25)) {
    refrUv = screenUv;
    sceneDepth = centerDepth;
    sampledDistance = centerDistance;
  }
  float sceneDistance = sampledDistance;
  float thickness = clamp(sceneDistance - waterDistance, 0.0, 48.0);
  float blurPx = clamp(thickness * 0.08, 0.0, 3.0);
  vec2 blurStep = vec2(blurPx) / max(uRefractionSize, vec2(1.0));
  vec3 opaqueBehind = texture2D(uRefractionColor, refrUv).rgb * 0.4;
  opaqueBehind += texture2D(uRefractionColor, refrUv + vec2( blurStep.x, 0.0)).rgb * 0.15;
  opaqueBehind += texture2D(uRefractionColor, refrUv + vec2(-blurStep.x, 0.0)).rgb * 0.15;
  opaqueBehind += texture2D(uRefractionColor, refrUv + vec2(0.0,  blurStep.y)).rgb * 0.15;
  opaqueBehind += texture2D(uRefractionColor, refrUv + vec2(0.0, -blurStep.y)).rgb * 0.15;

  // Beer-Lambert 吸收与水体散射：浅水保留清晰水底，深水逐渐转为青蓝而非一层透明贴纸。
  vec3 transmittance = exp(-vec3(0.115, 0.052, 0.028) * thickness);
  vec3 waterScatter = vec3(0.005, 0.072, 0.14) * mix(0.62, 1.0, vLF) * vTint;
  vec3 refracted = opaqueBehind * transmittance + waterScatter * (vec3(1.0) - transmittance);

  // 天空与云层反射。用反射光线和虚拟云层求交，同一噪声也驱动地面云影，方向一致。
  vec3 R = reflect(-V, N);
  float skyHeight = smoothstep(-0.02, 0.72, R.y);
  vec3 reflectedSky = mix(uSkyRefl, uSkyTop, skyHeight);
  float cloudTravel = max(0.0, 196.0 - vWPos.y) / max(R.y, 0.08);
  vec2 cloudUv = (p + R.xz * min(cloudTravel, 1200.0)) * 0.0034 + vec2(uTime * 0.0014, uTime * 0.0008);
  float cloudA = texture2D(uCloudNoise, cloudUv).b;
  float cloudB = texture2D(uCloudNoise, cloudUv * 1.83 + vec2(0.31, -0.17)).b;
  float cloud = smoothstep(0.55, 0.79, cloudA * 0.68 + cloudB * 0.32) * smoothstep(0.01, 0.18, R.y);
  vec3 cloudColor = mix(vec3(0.34, 0.41, 0.5), vec3(1.22, 1.16, 1.04), uSkyMul);
  reflectedSky = mix(reflectedSky, cloudColor, cloud * 0.72);

  // 海平面镜像相机提供真实岸线、树林、云和日月倒影；微法线只做小幅扰动。
  vec2 reflectionUv = vReflectionCoord.xy / max(vReflectionCoord.w, 0.0001);
  reflectionUv += slope * mix(0.008, 0.014, uHq);
  float reflectionInside = step(0.002, reflectionUv.x) * step(reflectionUv.x, 0.998)
    * step(0.002, reflectionUv.y) * step(reflectionUv.y, 0.998);
  if (uHasReflection > 0.5 && reflectionInside > 0.5) {
    vec2 reflectionTexel = vec2(1.5) / max(uRefractionSize, vec2(1.0));
    vec3 planarReflection = texture2D(uReflectionColor, reflectionUv).rgb * 0.4;
    planarReflection += texture2D(uReflectionColor, reflectionUv + vec2( reflectionTexel.x, 0.0)).rgb * 0.15;
    planarReflection += texture2D(uReflectionColor, reflectionUv + vec2(-reflectionTexel.x, 0.0)).rgb * 0.15;
    planarReflection += texture2D(uReflectionColor, reflectionUv + vec2(0.0,  reflectionTexel.y)).rgb * 0.15;
    planarReflection += texture2D(uReflectionColor, reflectionUv + vec2(0.0, -reflectionTexel.y)).rgb * 0.15;
    reflectedSky = mix(reflectedSky, planarReflection, 0.81);
  }

  float NoV = clamp(abs(dot(N, V)), 0.0, 1.0);
  float fresnel = 0.02 + 0.98 * pow(1.0 - NoV, 5.0);
  float reflectionGate = horiz * vSkyVis * smoothstep(-0.08, 0.03, V.y);
  vec3 col = mix(refracted, reflectedSky, fresnel * reflectionGate);

  // 低粗糙度 GGX 太阳反光：只让真正的 HDR 粼光进入 Bloom，普通水色不会发白。
  vec3 L = normalize(uSunDir);
  vec3 H = normalize(L + V);
  float NoL = max(dot(N, L), 0.0);
  float NoH = max(dot(N, H), 0.0);
  float roughness = mix(0.082, 0.064, uHq);
  float alpha2 = roughness * roughness;
  float ggxDenom = NoH * NoH * (alpha2 - 1.0) + 1.0;
  float D = alpha2 / max(0.0005, 3.14159265 * ggxDenom * ggxDenom);
  float specEnergy = min(5.0, D * 0.04) * NoL;
  specEnergy += pow(NoH, 28.0) * 0.16 * NoL;
  specEnergy *= mix(0.68, 1.18, rippleB.b * 0.6 + rippleC.b * 0.4);
  float sunHeight = clamp(L.y * 3.0, 0.0, 1.0);
  vec3 sunColor = mix(vec3(2.8, 0.92, 0.18), vec3(3.25, 2.92, 2.36), sunHeight);
  float sunVisible = smoothstep(0.005, 0.16, L.y) * uSkyMul * vSkyVis * horiz;
  col += sunColor * specEnergy * sunVisible;

  // 岸边只保留窄接触泡沫，不再把整片浅海刷成白边。
  float contact = 1.0 - smoothstep(0.055, 0.42, thickness);
  float shore = smoothstep(0.12, 0.86, vShore) * horiz;
  float foamNoise = smoothstep(0.58, 0.88, rippleA.a * 0.55 + rippleC.a * 0.45);
  float foam = max(contact * 0.48, shore * (0.14 + foamNoise * 0.36)) * vSkyVis;
  vec3 foamColor = mix(vec3(0.16, 0.31, 0.39), vec3(0.74, 0.91, 0.96), uSkyMul);
  col = mix(col, foamColor, clamp(foam, 0.0, 0.34));

  // 远景只做一次统一大气融合；折射源本身已带雾，避免旧版重复雾化成灰白海面。
  float atmosphere = 0.0;
  vec3 atmosphereColor = uSkyRefl;
  #ifdef USE_FOG
    atmosphereColor = fogColor;
    #ifdef FOG_EXP2
      atmosphere = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
    #else
      atmosphere = smoothstep(fogNear, fogFar, vFogDepth);
    #endif
  #else
    atmosphere = smoothstep(68.0, 96.0, dist);
  #endif
  col = mix(col, atmosphereColor, atmosphere);
  float below = smoothstep(0.02, 0.28, -V.y) * horiz;
  col = mix(col, col * vec3(0.54, 0.82, 1.08) + vec3(0.0, 0.016, 0.035), below * 0.34);
  diffuseColor.rgb = col;
  diffuseColor.a = mix(0.86, 0.985, horiz);
} else {
  vec3 toEye = cameraPosition - vWPos;
  float dist = length(toEye);
  vec3 V = toEye / max(dist, 0.0001);

  // Only horizontal faces receive sky reflection. This is the main guard against
  // bright vertical “ice shelves” along distant chunk and waterfall walls.
  vec3 geoN = normalize(cross(dFdx(vWPos), dFdy(vWPos)));
  float horiz = smoothstep(0.46, 0.82, abs(geoN.y));
  float nearDetail = 1.0 - smoothstep(30.0, 100.0, dist);
  vec2 p = vWPos.xz;
  vec4 rippleA = texture2D(uSurfaceNoise, p * 0.026 + vec2(uTime * 0.0062, -uTime * 0.0041));
  vec4 rippleB = texture2D(uSurfaceNoise, mwTurn(p) * 0.073 + vec2(-uTime * 0.0103, uTime * 0.0074));
  vec2 slope = (rippleA.rg * 2.0 - 1.0) * 0.72 + (rippleB.rg * 2.0 - 1.0) * 0.38;
  float ridge = rippleA.a * 0.62 + rippleB.a * 0.48;
  if (uHq > 0.5) {
    vec4 rippleC = texture2D(uSurfaceNoise, mwTurn(p.yx) * 0.17 + vec2(uTime * 0.014, uTime * 0.009));
    slope += (rippleC.rg * 2.0 - 1.0) * 0.18 * nearDetail;
    ridge += rippleC.a * 0.16;
  }
  slope *= mix(0.28, 1.0, nearDetail) * horiz;
  vec3 N = normalize(vec3(slope.x * 0.86, 1.0, slope.y * 0.86));

  // Beer-Lambert-style view-path absorption: clear cyan shallows, saturated blue
  // depths, and denser water at a grazing angle without block-by-block cutoffs.
  float opticalDepth = max(0.12, vWaterDepth) / max(abs(V.y), 0.22);
  float absorption = 1.0 - exp(-opticalDepth * 0.34);
  float deep = smoothstep(0.16, 0.91, absorption);
  vec3 shallowWater = vec3(0.004, 0.19, 0.32);
  vec3 deepWater = vec3(0.002, 0.045, 0.15);
  vec3 base = mix(shallowWater, deepWater, deep) * vLF * vTint * mwFaceShade;

  float skyGate = smoothstep(-0.015, 0.025, V.y) * horiz * vSkyVis;
  vec3 reflected = reflect(-V, N);
  float skyHeight = smoothstep(0.0, 0.78, clamp(reflected.y, 0.0, 1.0));
  vec3 skyReflection = mix(uSkyRefl, uSkyTop, skyHeight) * mix(0.72, 0.92, skyHeight);
  skyReflection /= vec3(1.0) + skyReflection * 0.12;
  float fresnel = min(0.62, 0.025 + 0.975 * pow(1.0 - max(dot(V, N), 0.0), 5.0));
  vec3 col = mix(base, skyReflection, fresnel * skyGate);

  // Interference ridges imitate the moving caustic web visible through shallow
  // water. It is deliberately sunlight/sky gated so cave lakes never self-glow.
  float caustic = pow(smoothstep(0.42, 0.93, ridge), 2.0);
  col += vec3(0.23, 0.52, 0.62) * caustic * (1.0 - deep) * 0.24 * uSkyMul * vSkyVis * horiz;

  // Broad lobe forms a continuous sun road; sharp lobe breaks it into HDR sparks
  // which bloom. Low sun is amber, noon is warm white.
  vec3 L = normalize(uSunDir);
  vec3 H = normalize(L + V);
  float sunHeight = clamp(L.y * 3.0, 0.0, 1.0);
  float sunVisible = smoothstep(0.01, 0.18, L.y) * uSkyMul * skyGate;
  float nh = max(dot(N, H), 0.0);
  float broadSpec = pow(nh, 20.0) * 0.27;
  float sparkle = pow(nh, 110.0) * (1.25 + uHq * 0.55) * mix(0.65, 1.15, rippleB.b);
  vec3 sunColor = mix(vec3(1.45, 0.48, 0.12), vec3(1.22, 1.08, 0.82), sunHeight);
  col += sunColor * (broadSpec + sparkle) * sunVisible * mix(0.72, 1.0, nearDetail);

  // Exact mesher-provided shoreline mask: a narrow, animated contact line instead
  // of whitening every shallow-water tile.
  float shore = smoothstep(0.06, 0.72, vShore) * horiz;
  float foamBreakup = smoothstep(0.3, 0.86, rippleA.a * 0.7 + rippleB.a * 0.52);
  float foam = shore * (0.22 + foamBreakup * 0.78) * (0.38 + uSkyMul * 0.62) * vSkyVis;
  vec3 foamColor = mix(vec3(0.12, 0.34, 0.5), vec3(0.72, 0.92, 1.08), uSkyMul);
  col = mix(col, foamColor, min(0.48, foam * 0.42));
  col += foamColor * foam * 0.1;

  // The newly double-sided surface remains readable from below instead of
  // disappearing when the player swims underwater and looks up.
  float below = smoothstep(0.015, 0.24, -V.y) * horiz;
  col = mix(col, col * vec3(0.46, 0.8, 1.12) + vec3(0.0, 0.018, 0.045), below * 0.38);
  diffuseColor.rgb = col;

  float depthAlpha = mix(0.25, 0.76, absorption);
  float topAlpha = clamp(depthAlpha + fresnel * skyGate * 0.23 + foam * 0.16, 0.24, 0.88);
  diffuseColor.a = mix(0.52, topAlpha, horiz);
}`).replace("#include <fog_fragment>",`#ifdef USE_FOG
if (uShaders < 0.5) {
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
  #else
    float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
  #endif
  gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor);
}
#endif`)}}installIceShader(t){t.onBeforeCompile=e=>{e.uniforms.uSkyTint=this.uSkyTint,e.uniforms.uSkyDarken=this.uSkyDarken,e.uniforms.uShaders=this.uShaders,e.uniforms.uTime=this.uTime,e.uniforms.uSunDir=this.uSunDir,e.uniforms.uSunUp=this.uSunUp,e.uniforms.uSkyRefl=this.uSkyRefl,e.uniforms.uSkyTop=this.uSkyTop,e.uniforms.uWaterWaves={value:this.waterWaveTex},e.uniforms.uRefractionColor=this.uRefractionColor,e.uniforms.uRefractionDepth=this.uRefractionDepth,e.uniforms.uRefractionSize=this.uRefractionSize,e.uniforms.uHasRefraction=this.uHasRefraction,e.uniforms.uReflectionColor=this.uReflectionColor,e.uniforms.uReflectionMatrix=this.uReflectionMatrix,e.uniforms.uHasReflection=this.uHasReflection,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aLight;
uniform vec3 uSkyTint;
uniform float uSkyDarken;
uniform mat4 uReflectionMatrix;
varying float vLF;
varying vec3 vTint;
varying float vSkyVis;
varying vec3 vWPos;
varying vec4 vReflectionCoord;
${xl}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${yl}
vSkyVis = aLight.x;
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vReflectionCoord = uReflectionMatrix * vec4(vWPos, 1.0);`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uShaders;
uniform float uTime;
uniform float uSunUp;
uniform vec3 uSunDir;
uniform vec3 uSkyRefl;
uniform vec3 uSkyTop;
uniform sampler2D uWaterWaves;
uniform sampler2D uRefractionColor;
uniform sampler2D uRefractionDepth;
uniform vec2 uRefractionSize;
uniform float uHasRefraction;
uniform sampler2D uReflectionColor;
uniform float uHasReflection;
varying float vLF;
varying vec3 vTint;
varying float vSkyVis;
varying vec3 vWPos;
varying vec4 vReflectionCoord;
vec2 mwIceTurn(vec2 p) { return vec2(p.x * 0.78 - p.y * 0.63, p.x * 0.63 + p.y * 0.78); }`).replace("#include <color_fragment>",`#include <color_fragment>
if (uShaders < 0.5 || uHasRefraction < 0.5) {
  diffuseColor.rgb *= vLF * vTint;
} else {
  vec3 toEye = cameraPosition - vWPos;
  vec3 V = normalize(toEye);
  vec3 faceN = normalize(cross(dFdx(vWPos), dFdy(vWPos)));
  faceN *= sign(dot(faceN, V));
  float horiz = smoothstep(0.45, 0.9, abs(faceN.y));
  // 冰的微表面固定在世界坐标，不跟水纹一起流动；两层方向交错形成细小晶纹。
  vec4 iceWave0 = texture2D(uWaterWaves, vWPos.xz * 0.12 + vec2(0.17, 0.43));
  vec4 iceWave1 = texture2D(uWaterWaves, mwIceTurn(vWPos.xz) * 0.27 + vec2(0.61, 0.09));
  vec2 slope = ((iceWave0.rg * 2.0 - 1.0) * 0.032 + (iceWave1.rg * 2.0 - 1.0) * 0.016) * horiz;
  vec3 microN = normalize(vec3(-slope.x, 1.0, -slope.y));
  vec3 N = normalize(mix(faceN, microN, horiz));

  vec2 screenUv = gl_FragCoord.xy / max(uRefractionSize, vec2(1.0));
  vec2 maxOffset = vec2(4.0) / max(uRefractionSize, vec2(1.0));
  vec2 refrUv = clamp(screenUv + clamp(slope * 0.007, -maxOffset, maxOffset), vec2(0.002), vec2(0.998));
  float refrDepth = texture2D(uRefractionDepth, refrUv).r;
  if (refrDepth <= gl_FragCoord.z + 0.0001) refrUv = screenUv;
  vec2 refrBlur = vec2(1.25) / max(uRefractionSize, vec2(1.0));
  vec3 behind = texture2D(uRefractionColor, refrUv).rgb * 0.4;
  behind += texture2D(uRefractionColor, refrUv + vec2( refrBlur.x, 0.0)).rgb * 0.15;
  behind += texture2D(uRefractionColor, refrUv + vec2(-refrBlur.x, 0.0)).rgb * 0.15;
  behind += texture2D(uRefractionColor, refrUv + vec2(0.0,  refrBlur.y)).rgb * 0.15;
  behind += texture2D(uRefractionColor, refrUv + vec2(0.0, -refrBlur.y)).rgb * 0.15;

  float NoV = clamp(abs(dot(N, V)), 0.0, 1.0);
  float opticalPath = 0.82 / max(NoV, 0.24);
  vec3 transmission = exp(-vec3(0.035, 0.018, 0.008) * opticalPath);
  vec3 iceScatter = vec3(0.055, 0.16, 0.27) * vLF * vTint;
  vec3 transmitted = behind * transmission + iceScatter * (vec3(1.0) - transmission);

  vec3 R = reflect(-V, N);
  vec3 reflected = mix(uSkyRefl, uSkyTop, smoothstep(0.0, 0.72, R.y));
  vec2 reflectionUv = vReflectionCoord.xy / max(vReflectionCoord.w, 0.0001) + slope * 0.006;
  float inside = step(0.002, reflectionUv.x) * step(reflectionUv.x, 0.998)
    * step(0.002, reflectionUv.y) * step(reflectionUv.y, 0.998);
  if (uHasReflection > 0.5 && inside > 0.5) {
    vec2 rBlur = vec2(2.0) / max(uRefractionSize, vec2(1.0));
    vec3 rp = texture2D(uReflectionColor, reflectionUv).rgb * 0.5;
    rp += texture2D(uReflectionColor, reflectionUv + vec2(rBlur.x, 0.0)).rgb * 0.125;
    rp += texture2D(uReflectionColor, reflectionUv - vec2(rBlur.x, 0.0)).rgb * 0.125;
    rp += texture2D(uReflectionColor, reflectionUv + vec2(0.0, rBlur.y)).rgb * 0.125;
    rp += texture2D(uReflectionColor, reflectionUv - vec2(0.0, rBlur.y)).rgb * 0.125;
    reflected = mix(reflected, rp, 0.82);
  }

  float fresnel = 0.04 + 0.96 * pow(1.0 - NoV, 5.0);
  vec3 col = mix(transmitted, reflected, fresnel * vSkyVis);
  float texLuma = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float frost = max(smoothstep(0.58, 0.96, texLuma) * 0.72, pow(max(iceWave0.a, iceWave1.a), 4.0) * 0.42);
  vec3 iceBody = vec3(0.31, 0.53, 0.78) * vLF * vTint * mix(0.86, 1.08, frost);
  // 保留大部分真实透射/倒影，只用一层薄霜把它与流动水区分开。
  col = mix(col, iceBody, 0.12 + frost * 0.16);
  col = mix(col, col * vec3(0.86, 0.96, 1.06) + vec3(0.018, 0.042, 0.07), 0.08);

  vec3 L = normalize(uSunDir);
  vec3 H = normalize(L + V);
  float iceSpec = pow(max(dot(N, H), 0.0), 52.0) * max(dot(N, L), 0.0);
  vec3 sunColor = mix(vec3(1.8, 0.68, 0.2), vec3(2.4, 2.2, 1.85), clamp(L.y * 3.0, 0.0, 1.0));
  col += sunColor * iceSpec * uSunUp * vSkyVis * 0.65;
  diffuseColor.rgb = col;
  diffuseColor.a = 1.0;
}`)}}setTint(t){const e=t.join();e!==this.lastTint&&(this.lastTint=e,this.uSkyTint.value.setRGB(t[0],t[1],t[2]))}setSkyMul(t){this.uSkyMul.value=t}setSkyDarken(t){this.uSkyDarken.value=t}setLightingQuality(t){var r;this.uShaders.value=t!=="off"?1:0,this.sun.castShadow=t!=="off",this.uHq.value=t==="high"?1:0;const e=t==="high"?4096:cr;this.sun.shadow.mapSize.x!==e&&(this.sun.shadow.mapSize.set(e,e),(r=this.sun.shadow.map)==null||r.dispose(),this.sun.shadow.map=null,this.uShadowTexel.value.set(1/e,1/e));const n=t==="high"?56:46,s=this.sun.shadow.camera;s.left!==-n&&(s.left=-n,s.right=n,s.top=n,s.bottom=-n,s.updateProjectionMatrix()),t==="off"&&(this.uShadowOn.value=0)}setFogFar(t){this.fogCullR2=(t/wt)**2}setSkyReflection(t,e){this.uSkyRefl.value.setRGB(t[0],t[1],t[2],Qt),e&&this.uSkyTop.value.setRGB(e[0],e[1],e[2],Qt)}setWaterRefraction(t,e,n,s){this.uRefractionColor.value=t,this.uRefractionDepth.value=e,this.uRefractionSize.value.set(Math.max(1,n),Math.max(1,s)),this.uHasRefraction.value=t&&e?1:0}setWaterReflection(t,e){this.uReflectionColor.value=t,e&&this.uReflectionMatrix.value.copy(e),this.uHasReflection.value=t?1:0}setSunDir(t,e,n){this.uSunDir.value.set(t,e,n)}setAtlas(t){this.opaqueMat.map=t,this.iceMat.map=t,this.cutoutMat.map=t,this.opaqueMat.needsUpdate=!0,this.iceMat.needsUpdate=!0,this.cutoutMat.needsUpdate=!0}animateWater(t){if(this.uTime.value+=t,this.uShaders.value>.5)return;this.waterAnimT+=t;const e=.09;for(;this.waterAnimT>=e;){this.waterAnimT-=e,this.waterFrame=(this.waterFrame+1)%this.waterFrames.length;const n=this.waterFrames[this.waterFrame];n.image&&(this.waterTex.image=n.image,this.waterTex.needsUpdate=!0)}}key(t,e){return`${t},${e}`}setWorld(t){for(const e of[...this.meshes.keys()])this.unload(e);this.lightGrids.clear(),this.meshQueue.length=0,this.priorityQueue.length=0,this.meshPending.clear(),this.meshPendingSince.clear(),this.meshFails.clear(),this.editKeys.clear(),this.world=t}dispose(){var t;for(const e of[...this.meshes.keys()])this.unload(e);this.lightGrids.clear();for(const e of this.meshWorkers)e.terminate();this.meshWorkers.length=0,this.opaqueMat.dispose(),this.iceMat.dispose(),this.cutoutMat.dispose(),this.waterMat.dispose(),this.torchMat.dispose(),this.waterTex.dispose(),this.cloudNoiseTex.dispose(),this.waterWaveTex.dispose(),(t=this.leafDepthMat)==null||t.dispose(),this.scene.remove(this.sun),this.scene.remove(this.sun.target)}buildGeo(t){const e=new Ne;return e.setAttribute("position",new ue(t.positions,3)),t.normals&&e.setAttribute("normal",new ue(t.normals,3)),e.setAttribute("uv",new ue(t.uvs,2)),e.setAttribute("color",new ue(t.colors,3)),t.light&&t.light.length&&e.setAttribute("aLight",new ue(t.light,2)),t.underwater&&t.underwater.length&&e.setAttribute("aUnderwater",new ue(t.underwater,1)),t.top&&t.top.length&&e.setAttribute("aTop",new ue(t.top,1)),t.shore&&t.shore.length&&e.setAttribute("aShore",new ue(t.shore,1)),t.sway&&t.sway.length&&e.setAttribute("aSway",new ue(t.sway,1)),e.setIndex(new ue(t.indices,1)),e}lightLevelAt(t,e,n){const s=Math.floor(Math.floor(t)/wt),r=Math.floor(Math.floor(n)/wt),o=this.lightGrids.get(this.key(s,r));if(!o)return[15,0];const a=Math.min(3,Math.max(0,Math.floor((t-s*wt)/4))),l=Math.min(3,Math.max(0,Math.floor((n-r*wt)/4))),c=Math.min(47,Math.max(0,Math.floor(e/4))),h=o[a+l*4+c*16];return[h>>4,h&15]}brightnessAt(t,e,n,s){const[r,o]=this.lightLevelAt(t,e,n),a=r<.5?.03:.04;return Math.min(1,Math.max(Ku(r-s),Ku(o))*.96+a)}unload(t){this.editKeys.delete(t),this.meshPendingSince.delete(t),this.meshFails.delete(t),this.lightGrids.delete(t);const e=this.meshes.get(t);if(e){for(const n of[e.opaque,e.ice,e.cutout,e.water,e.torch])n&&(this.scene.remove(n),n.geometry.dispose());this.meshes.delete(t)}}addMesh(t,e,n,s){if(t.indices.length===0)return null;const r=new Kt(this.buildGeo(t),e);return r.position.set(n*wt,0,s*wt),(e===this.waterMat||e===this.iceMat)&&r.layers.set(Jo),this.scene.add(r),r}flushMesh(t){for(let e=0;e<8&&this.priorityQueue.length>0;e++){const n=this.priorityQueue.shift();n&&this.world.peek(n.cx,n.cz)&&this.applyMesh(n.cx,n.cz,n.mesh)}for(let e=0;e<t&&this.meshQueue.length>0;e++){const n=this.meshQueue.shift();n&&this.world.peek(n.cx,n.cz)&&this.applyMesh(n.cx,n.cz,n.mesh)}}meshBusy(){return this.meshQueue.length>0||this.priorityQueue.length>0||this.meshPending.size>0}meshQueueLen(){return this.meshQueue.length+this.priorityQueue.length}pipelineStats(){let t=0;for(const e of this.meshes.values())[e.opaque,e.ice,e.cutout,e.water,e.torch].some(n=>n&&n.visible)&&t++;return{meshed:this.meshes.size,visible:t,pending:this.meshPending.size,queued:this.meshQueueLen()}}applyMesh(t,e,n){this.unload(this.key(t,e)),this.lightGrids.set(this.key(t,e),n.light3d);const s=this.addMesh(n.opaque,this.opaqueMat,t,e)??new Kt,r=this.addMesh(n.ice,this.iceMat,t,e),o=this.addMesh(n.cutout,this.cutoutMat,t,e),a=this.addMesh(n.water,this.waterMat,t,e),l=this.addMesh(n.torch,this.torchMat,t,e);s.castShadow=!0,s.receiveShadow=!0,r&&(r.castShadow=!0,r.receiveShadow=!0),o&&(o.castShadow=!0,o.receiveShadow=!0,this.leafDepthMat&&(o.customDepthMaterial=this.leafDepthMat)),this.meshes.set(this.key(t,e),{opaque:s,ice:r,cutout:o,water:a,torch:l})}rebuildSync(t,e){const n=this.key(t,e);this.meshPending.delete(n),this.meshPendingSince.delete(n);const s=this.meshQueue.findIndex(a=>a.cx===t&&a.cz===e);s>=0&&this.meshQueue.splice(s,1);const r=this.priorityQueue.findIndex(a=>a.cx===t&&a.cz===e);r>=0&&this.priorityQueue.splice(r,1),this.applyMesh(t,e,_S(this.world,t,e));const o=this.world.peek(t,e);o&&(o.dirty=!1)}collectNeighbors(t,e){const n=[],s=[];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){const a=this.world.peek(t+r,e+o);if(!a)return null;n.push(a.blocks.slice()),s.push(a.fluid.slice())}return{blocks:n,fluid:s}}rebuild(t,e){if(this.meshWorkers.length===0){this.rebuildSync(t,e);return}const n=this.key(t,e);if(this.meshPending.has(n)||(this.meshFails.get(n)??0)>=3)return;const s=this.collectNeighbors(t,e);if(!s)return;this.meshPending.add(n),this.meshPendingSince.set(n,Yu());const r=[...s.blocks.map(a=>a.buffer),...s.fluid.map(a=>a.buffer)];this.meshWorkers[this.meshRr].postMessage({cx:t,cz:e,blocks:s.blocks,fluid:s.fluid},r),this.meshRr=(this.meshRr+1)%this.meshWorkers.length;const o=this.world.peek(t,e);o&&(o.dirty=!1)}retryStuckMeshes(t=8e3){const e=Yu();for(const[n,s]of this.meshPendingSince)e-s>t&&(this.meshPending.delete(n),this.meshPendingSince.delete(n),console.warn(`[meshgen] 区块 ${n} 网格化 ${Math.round((e-s)/1e3)}s 未回(worker 丢消息?) → 重试`))}update(t,e,n,s=2,r=0,o=0){this.retryStuckMeshes(),this.world.retryStuckGen();for(const l of[...this.meshes.keys()]){const[c,h]=l.split(",").map(Number);(Math.abs(c-t)>n+1||Math.abs(h-e)>n+1)&&this.unload(l)}for(let l=-n-1;l<=n+1;l++)for(let c=-n-1;c<=n+1;c++)this.world.request(t+c,e+l);const a=[];for(let l=-n;l<=n;l++)for(let c=-n;c<=n;c++){if($u(c,l,this.fogCullR2))continue;const h=t+c,u=e+l,d=this.world.peek(h,u);d&&(!this.meshes.has(this.key(h,u))||d.dirty)&&a.push({cx:h,cz:u,d:c*c+l*l,ahead:bS(c,l,r,o)})}a.sort((l,c)=>l.ahead===c.ahead?l.d-c.d:l.ahead?-1:1);for(let l=0;l<Math.min(s,a.length);l++)this.rebuild(a[l].cx,a[l].cz);for(const[l,c]of this.meshes){const[h,u]=l.split(",").map(Number),d=!$u(h-t,u-e,this.fogCullR2);for(const f of[c.opaque,c.ice,c.cutout,c.water,c.torch])f&&(f.visible=d)}}cullToView(t,e,n,s){for(const[r,o]of this.meshes){const[a,l]=r.split(",").map(Number);if(!SS(a*wt+wt/2,l*wt+wt/2,t,e,n,s))for(const c of[o.opaque,o.ice,o.cutout,o.water,o.torch])c&&(c.visible=!1)}}remeshDirty(){var t;for(const e of[...this.meshes.keys()]){const[n,s]=e.split(",").map(Number);(t=this.world.peek(n,s))!=null&&t.dirty&&(this.editKeys.add(e),this.rebuild(n,s))}}}const So=10;class NS{constructor(t){x(this,"mesh");x(this,"tex");this.tex=new Ks().load("/mineworld/textures/crack.png"),this.tex.magFilter=le,this.tex.minFilter=le,this.tex.generateMipmaps=!1,this.tex.colorSpace=Qt,this.tex.wrapS=di,this.tex.repeat.set(1/So,1);const e=new me({map:this.tex,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});this.mesh=new Kt(new $e(1.002,1.002,1.002),e),this.mesh.renderOrder=2,this.mesh.visible=!1,t.add(this.mesh)}show(t,e,n,s){const r=Math.max(0,Math.min(So-1,Math.floor(s*So)));this.tex.offset.x=r/So,this.mesh.position.set(t+.5,e+.5,n+.5),this.mesh.visible=!0}hide(){this.mesh.visible=!1}}const ta=256,op=257,ap=258,lp=259,cp=260,hp=261,up=262,dp=263,FS=264,OS=265,zS=266,BS=267,HS=268,GS=269,VS=270,WS=271,XS=272,qS=273,fp=274,Pc=275,pp=276,Lc=277,mp=278,Dc=279,gp=280,Ic=281,vp=282,_p=283,xp=284,yp=285,Mp=286,Sp=287,wp=288,Ep=289,bp=290,Ui=291,ws=292,Tp=293,Ap=294,YS=295,$S=296,Rp=297,Cp=298,Pp=299,Lp=300,Dp=301;function Se(i,t,e,n){return{name:i,maxStack:1,food:null,tool:{kind:t,tier:e,speed:t==="sword"?1.5:t==="hoe"?1:n,maxDurability:e===1?59:e===2?131:e===3?250:1561}}}const Vi={[ta]:{name:"apple",maxStack:64,food:{nutrition:4,saturationModifier:.3},tool:null},[Ap]:{name:"flint_and_steel",maxStack:1,food:null,tool:null},[YS]:{name:"nether_quartz",maxStack:64,food:null,tool:null},[$S]:{name:"diamond",maxStack:64,food:null,tool:null},[op]:{name:"stick",maxStack:64,food:null,tool:null},[ap]:{name:"coal",maxStack:64,food:null,tool:null},[lp]:Se("wooden_pickaxe","pickaxe",1,2),[cp]:Se("wooden_axe","axe",1,2),[hp]:Se("wooden_shovel","shovel",1,2),[up]:Se("wooden_sword","sword",1,2),[dp]:Se("wooden_hoe","hoe",1,2),[FS]:Se("stone_pickaxe","pickaxe",2,4),[OS]:Se("stone_axe","axe",2,4),[zS]:Se("stone_shovel","shovel",2,4),[BS]:Se("stone_sword","sword",2,4),[HS]:Se("stone_hoe","hoe",2,4),[GS]:Se("iron_pickaxe","pickaxe",3,6),[VS]:Se("iron_axe","axe",3,6),[WS]:Se("iron_shovel","shovel",3,6),[XS]:Se("iron_sword","sword",3,6),[qS]:Se("iron_hoe","hoe",3,6),[fp]:{name:"iron_ingot",maxStack:64,food:null,tool:null},[Rp]:Se("diamond_pickaxe","pickaxe",4,8),[Cp]:Se("diamond_axe","axe",4,8),[Pp]:Se("diamond_shovel","shovel",4,8),[Lp]:Se("diamond_sword","sword",4,8),[Dp]:Se("diamond_hoe","hoe",4,8),[Pc]:{name:"raw_porkchop",maxStack:64,food:{nutrition:3,saturationModifier:.3},tool:null},[pp]:{name:"cooked_porkchop",maxStack:64,food:{nutrition:8,saturationModifier:.8},tool:null},[Lc]:{name:"raw_beef",maxStack:64,food:{nutrition:3,saturationModifier:.3},tool:null},[mp]:{name:"cooked_beef",maxStack:64,food:{nutrition:8,saturationModifier:.8},tool:null},[Dc]:{name:"raw_mutton",maxStack:64,food:{nutrition:2,saturationModifier:.3},tool:null},[gp]:{name:"cooked_mutton",maxStack:64,food:{nutrition:6,saturationModifier:.8},tool:null},[Ic]:{name:"raw_chicken",maxStack:64,food:{nutrition:2,saturationModifier:.3},tool:null},[vp]:{name:"cooked_chicken",maxStack:64,food:{nutrition:6,saturationModifier:.6},tool:null},[_p]:{name:"leather",maxStack:64,food:null,tool:null},[xp]:{name:"wool",maxStack:64,food:null,tool:null},[yp]:{name:"feather",maxStack:64,food:null,tool:null},[Mp]:{name:"egg",maxStack:16,food:null,tool:null},[Sp]:{name:"rotten_flesh",maxStack:64,food:{nutrition:4,saturationModifier:.1},tool:null},[wp]:{name:"bone",maxStack:64,food:null,tool:null},[Ep]:{name:"flint",maxStack:64,food:null,tool:null},[bp]:{name:"string",maxStack:64,food:null,tool:null},[Ui]:{name:"arrow",maxStack:64,food:null,tool:null},[ws]:{name:"bow",maxStack:1,food:null,tool:null},[Tp]:{name:"gunpowder",maxStack:64,food:null,tool:null}},KS=Object.keys(Vi).map(Number);function Ml(i){return i in Vi}function Sl(i){var t;return((t=Vi[i])==null?void 0:t.food)!=null}function jS(i){var t;return((t=Vi[i])==null?void 0:t.food)??null}function ZS(i){var t;return((t=Vi[i])==null?void 0:t.name)??null}function ea(i){var t;return((t=Vi[i])==null?void 0:t.maxStack)??64}function Sr(i){var t;return((t=Vi[i])==null?void 0:t.tool)??null}const JS={1:"stone",2:"dirt",3:"grass",4:"cobblestone",5:"sand",6:"oak_log",7:"oak_planks",8:"coal_ore",10:"oak_leaves",11:"crafting_table",12:"iron_ore",13:"furnace",14:"torch",15:"gravel",26:"sandstone",18:"obsidian",19:"netherrack",20:"soul_sand",21:"glowstone",22:"nether_quartz_ore",24:"bedrock",27:"cactus",28:"ice",30:"spruce_log",31:"spruce_leaves",32:"coal_block",33:"iron_block",34:"quartz_block",35:"diamond_ore",36:"diamond_block",[ta]:"apple",257:"stick",258:"coal",259:"wooden_pickaxe",260:"wooden_axe",261:"wooden_shovel",262:"wooden_sword",263:"wooden_hoe",264:"stone_pickaxe",265:"stone_axe",266:"stone_shovel",267:"stone_sword",268:"stone_hoe",269:"iron_pickaxe",270:"iron_axe",271:"iron_shovel",272:"iron_sword",273:"iron_hoe",274:"iron_ingot",275:"raw_porkchop",276:"cooked_porkchop",277:"raw_beef",278:"cooked_beef",279:"raw_mutton",280:"cooked_mutton",281:"raw_chicken",282:"cooked_chicken",283:"leather",284:"wool",285:"feather",286:"egg",287:"rotten_flesh",288:"bone",289:"flint",290:"string",291:"arrow",292:"bow",293:"gunpowder",294:"flint_and_steel",295:"nether_quartz",296:"diamond",297:"diamond_pickaxe",298:"diamond_axe",299:"diamond_shovel",300:"diamond_sword",301:"diamond_hoe"},QS=new Set(["stone","dirt","grass","cobblestone","sand","oak_log","oak_planks","coal_ore","oak_leaves","crafting_table","iron_ore","furnace","gravel","sandstone","obsidian","netherrack","soul_sand","glowstone","nether_quartz_ore","bedrock","cactus","ice","spruce_log","spruce_leaves","coal_block","iron_block","quartz_block","diamond_ore","diamond_block"]);let Ip="classic";function ju(i){Ip=i}const t1={1:"石头",2:"泥土",3:"草方块",4:"圆石",5:"沙子",6:"原木",7:"木板",8:"煤矿",10:"树叶",11:"工作台",12:"铁矿",13:"熔炉",14:"火把",15:"砂砾",26:"沙石",32:"煤炭块",33:"铁块",34:"石英块",35:"钻石矿石",36:"钻石块",256:"苹果",257:"木棍",258:"煤炭",259:"木镐",260:"木斧",261:"木锹",262:"木剑",263:"木锄",264:"石镐",265:"石斧",266:"石锹",267:"石剑",268:"石锄",269:"铁镐",270:"铁斧",271:"铁锹",272:"铁剑",273:"铁锄",274:"铁锭",275:"生猪排",276:"熟猪排",277:"生牛肉",278:"牛排",279:"生羊肉",280:"熟羊肉",281:"生鸡肉",282:"熟鸡肉",283:"皮革",284:"羊毛",285:"羽毛",286:"鸡蛋",287:"腐肉",288:"骨头",289:"燧石",290:"线",291:"箭",292:"弓",293:"火药",294:"打火石",295:"下界石英",296:"钻石",297:"钻石镐",298:"钻石斧",299:"钻石锹",300:"钻石剑",301:"钻石锄"},Oi=i=>{const t=JS[i];if(!t)return null;const e=Ip==="classic"&&QS.has(t)?"icons_classic":"icons";return js(`textures/${e}/${t}.png`)},Up=i=>t1[i]??`#${i}`,Cs=.25,e1=22,Zu=Cs/2;function _n(i,t,e,n,s=Math.random,r=1,o){return{id:i,count:r,dur:o,x:t+.5,y:e+.5,z:n+.5,vx:(s()-.5)*2,vy:2.5,vz:(s()-.5)*2,age:0}}function n1(i,t,e=.75){const n=e*e;for(let s=0;s<i.length;s++){const r=i[s],o=t(r.id);if(!(r.count>=o))for(let a=i.length-1;a>s;a--){const l=i[a];if(l.id!==r.id||r.dur!==void 0||l.dur!==void 0)continue;const c=r.x-l.x,h=r.y-l.y,u=r.z-l.z;if(c*c+h*h+u*u>n)continue;const d=Math.min(o-r.count,l.count);if(!(d<=0)&&(r.count+=d,l.count-=d,l.age<r.age&&(r.age=l.age),l.count<=0&&i.splice(a,1),r.count>=o))break}}}function i1(i,t,e){i.age+=e,i.vy-=e1*e;const n=i.x+i.vx*e,s=i.z+i.vz*e;let r=i.y+i.vy*e;const o=r-Zu;return i.vy<=0&&t.isSolid(Math.floor(n),Math.floor(o),Math.floor(s))&&(r=Math.floor(o)+1+Zu,i.vy=0,i.vx*=.6,i.vz*=.6),i.x=n,i.y=r,i.z=s,i}function s1(i,t,e,n){if(i.age<.3)return!1;const s=i.x-t,r=i.y-e,o=i.z-n;return s*s+r*r+o*o<1.4*1.4}const gr=4,Ju=10,r1=16,wo=.5/(r1*gr);function o1(i){const t=new $e(Cs,Cs,Cs),e=on[i].faces,n=t.attributes.uv;for(let s=0;s<6;s++){const r=e[s],o=r%gr,a=Math.floor(r/gr),l=o/gr+wo,c=(o+1)/gr-wo,h=1-(a+1)/Ju+wo,u=1-a/Ju-wo,d=s*4;n.setXY(d+0,l,u),n.setXY(d+1,c,u),n.setXY(d+2,l,h),n.setXY(d+3,c,h)}return n.needsUpdate=!0,t}class a1{constructor(t,e){x(this,"meshes",new Map);x(this,"geoCache",new Map);x(this,"mat");x(this,"itemMats",new Map);this.scene=t,this.mat=new me({map:e})}setAtlas(t){this.mat.map=t,this.mat.needsUpdate=!0;for(const[e,n]of this.meshes)Ml(e.id)||(n.material.map=t,n.material.needsUpdate=!0)}itemMat(t){let e=this.itemMats.get(t);if(!e){const n=new Ks().load(Oi(t)??js("textures/icons/apple.png"));n.magFilter=le,n.minFilter=le,n.colorSpace=Qt,e=new me({map:n,transparent:!0,alphaTest:.5,side:Be}),this.itemMats.set(t,e)}return e}geo(t){let e=this.geoCache.get(t);return e||(e=Ml(t)?new qe(Cs,Cs):o1(t),this.geoCache.set(t,e)),e}sync(t,e){const n=new Set(t);for(const[s,r]of this.meshes)n.has(s)||(this.scene.remove(r),r.material.dispose(),this.meshes.delete(s));for(const s of t){let r=this.meshes.get(s);if(r||(r=new Kt(this.geo(s.id),(Ml(s.id)?this.itemMat(s.id):this.mat).clone()),this.scene.add(r),this.meshes.set(s,r)),e){const a=e(s.x,s.y+.5,s.z);r.material.color.setScalar(a)}const o=.1+Math.sin(s.age*3)*.06;r.position.set(s.x,s.y+o,s.z),r.rotation.y=s.age*1.8}}clear(){for(const[,t]of this.meshes)this.scene.remove(t),t.material.dispose();this.meshes.clear()}}function l1(i){return i===null||i<=0?"none":i===As?Oi(i)?"sprite":"none":on[i]?"block":Oi(i)?"sprite":"none"}const wl=.8;function c1(i){const t=Math.PI/180,e=Math.sin(Math.sqrt(Math.max(0,i))*Math.PI),n=Math.sin(i*i*Math.PI);return{tx:-.4*e*wl,ty:.2*Math.sin(Math.sqrt(Math.max(0,i))*Math.PI*2)*wl,tz:-.2*Math.sin(i*Math.PI)*wl,ry1:(45+n*-20)*t,rz:e*-20*t,rx:e*-80*t,ry2:-45*t}}const vr=4,Qu=10,h1=16,Eo=.01/(h1*vr),Ps=[.6,.6,1,.5,.8,.8],u1=.3,d1=new N(1,0,0),f1=new N(0,1,0);function p1(i,t,e,n){const s=new $e(i,t,e),r=new Ct(n),o=[];for(let a=0;a<6;a++)for(let l=0;l<4;l++)o.push(r.r*Ps[a],r.g*Ps[a],r.b*Ps[a]);return s.setAttribute("color",new Ae(o,3)),s}function m1(i,t){const e=new $e(t,t,t),n=on[i].faces,s=e.attributes.uv,r=[];for(let o=0;o<6;o++){const a=n[o],l=a%vr,c=Math.floor(a/vr),h=l/vr+Eo,u=(l+1)/vr-Eo,d=1-(c+1)/Qu+Eo,f=1-c/Qu-Eo,m=o*4;s.setXY(m+0,h,f),s.setXY(m+1,u,f),s.setXY(m+2,h,d),s.setXY(m+3,u,d);for(let v=0;v<4;v++)r.push(Ps[o],Ps[o],Ps[o])}return s.needsUpdate=!0,e.setAttribute("color",new Ae(r,3)),e}class g1{constructor(t){x(this,"scene",new zs);x(this,"camera",new Xe(70,1,.01,10));x(this,"atlas");x(this,"root",new rn);x(this,"arm");x(this,"item",null);x(this,"itemId",null);x(this,"spriteTex",new Map);x(this,"swingT",0);x(this,"wantSwing",!1);x(this,"bobPhase",0);x(this,"eating",!1);x(this,"eatT",0);x(this,"hurtT",0);x(this,"bright",1);this.atlas=t,this.arm=new Kt(p1(.14,.5,.14,15249530),new me({vertexColors:!0})),this.arm.position.set(0,-.22,0),this.root.add(this.arm),this.root.position.set(.5,-.45,-.7),this.root.rotation.set(.2,-.5,.45),this.scene.add(this.root)}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}itemTexture(t){const e=this.spriteTex.get(t);if(e)return e;const n=Oi(t);if(!n)return null;const s=new Ks().load(n);return s.magFilter=le,s.minFilter=le,s.generateMipmaps=!1,s.colorSpace=Qt,this.spriteTex.set(t,s),s}setBrightness(t){this.bright+=(t-this.bright)*.12;const e=this.bright;this.arm.material.color.setScalar(e),this.item&&this.item.material.color.setScalar(e)}setHeld(t){if(t===this.itemId)return;this.itemId=t,this.item&&(this.root.remove(this.item),this.item.geometry.dispose(),this.item=null);const e=l1(t);if(e==="block"&&t!==null)this.item=new Kt(m1(t,.32),new me({map:this.atlas,vertexColors:!0})),this.item.position.set(-.02,.16,.04),this.item.rotation.set(-.1,.6,.1),this.root.add(this.item);else if(e==="sprite"&&t!==null){const n=this.itemTexture(t);n&&(this.item=new Kt(new qe(.34,.34),new me({map:n,transparent:!0,alphaTest:.5,side:Be})),this.item.position.set(.04,.2,.04),this.item.rotation.set(0,-.35,.35),this.root.add(this.item))}}swing(){this.wantSwing=!0}hurtShake(){this.hurtT=1}setAtlas(t){this.atlas=t;const e=this.itemId;this.itemId=null,this.setHeld(e)}setEating(t){this.eating=t,t||(this.eatT=0)}update(t,e){this.wantSwing&&this.swingT===0&&(this.swingT=1e-4),this.swingT>0&&(this.swingT+=t/u1,this.swingT>=1&&(this.swingT=this.wantSwing?1e-4:0)),this.wantSwing=!1,this.bobPhase+=t*e*7;const n=Math.cos(this.bobPhase)*.012*Math.min(1,e),s=Math.abs(Math.sin(this.bobPhase))*.012*Math.min(1,e),r=c1(this.swingT);if(this.root.position.set(.42+n+r.tx,-.28+s+r.ty,-.72+r.tz),this.root.rotation.set(.1,-.5,.4),this.root.rotateOnWorldAxis(d1,r.rx),this.root.rotateOnWorldAxis(f1,r.rz),this.eating){this.eatT+=t;const o=Math.sin(this.eatT*30);this.root.position.x+=-.18+o*.015,this.root.position.y+=.16+o*.02,this.root.position.z+=.18,this.root.rotateX(.4+o*.12),this.root.rotateZ(-.25)}if(this.hurtT>0){this.hurtT=Math.max(0,this.hurtT-t*4);const o=this.hurtT*this.hurtT,a=Math.sin(this.hurtT*45);this.root.position.x+=a*.05*o,this.root.position.y+=-.06*o,this.root.rotateZ(a*.35*o)}}}const td=.6,na=.6,zi=1.8,kn=1.62,v1=1.8,_1=1.54,x1=.3,y1=.2,ia=.08,sa=.98,Rr=.42,ed=4.317/20,M1=5.612/20,S1=.42,w1=.84,nd=.42,bo=na/2;function ra(i,t,e=zi){const s=Math.floor(i.x-bo+1e-6),r=Math.ceil(i.x+bo-1e-6)-1,o=Math.floor(i.y+1e-6),a=Math.ceil(i.y+e-1e-6)-1,l=Math.floor(i.z-bo+1e-6),c=Math.ceil(i.z+bo-1e-6)-1;for(let h=o;h<=a;h++)for(let u=s;u<=r;u++)for(let d=l;d<=c;d++)if(t.isSolid(u,h,d))return!0;return!1}function ps(i,t,e,n,s=zi){if(e===0)return!1;const r=Math.sign(e),o=.2;let a=Math.abs(e);for(;a>1e-9;){const l=Math.min(a,o)*r;if(a-=Math.abs(l),i[t]+=l,ra(i,n,s)){i[t]-=l;let c=l/2;for(let h=0;h<24&&Math.abs(c)>1e-5;h++)i[t]+=c,ra(i,n,s)&&(i[t]-=c),c/=2;return!0}}return!1}function id(i){const t=Math.cos(i.yaw),e=Math.sin(i.yaw);let n=i.forward*t-i.right*e,s=i.forward*e+i.right*t;const r=Math.hypot(n,s);return r>1e-9?(n/=r,s/=r):(n=0,s=0),{x:n,z:s}}function hr(i,t,e=zi){return ra(i,t,e)?!1:ra({x:i.x,y:i.y-.06,z:i.z},t,e)}function E1(i,t,e){var I,R,C;const n={...i.pos},s={...i.vel};if(t.fly){const F=id(t),E=t.sprint?w1:S1;return s.x=F.x*E,s.z=F.z*E,s.y=(t.flyUp?nd:0)-(t.flyDown?nd:0),ps(n,"y",s.y,e)&&(s.y=0),ps(n,"x",s.x,e)&&(s.x=0),ps(n,"z",s.z,e)&&(s.z=0),{pos:n,vel:s,onGround:hr(n,e),kbx:0,kbz:0}}const r=t.crouch===!0,o=r?v1:zi,a=hr(n,e,o),l=((I=e.isWater)==null?void 0:I.call(e,Math.floor(n.x),Math.floor(n.y+.1),Math.floor(n.z)))??!1;let c=!1;t.jump&&(a||l)&&(s.y=l?.5:Rr,c=!0);const h=id(t);let u=l?ed*.7:t.sprint&&!r?M1:ed;r&&(u*=x1),t.slow&&(u*=y1);const d=i.kbx??0,f=i.kbz??0,m=Math.hypot(h.x,h.z)>1e-9;if(!a&&!l)s.x=s.x*.91+h.x*u*.09+d,s.z=s.z*.91+h.z*u*.09+f;else if(m||l){let F=u;if(m&&a&&!l){const E=Math.floor(n.x),S=Math.floor(n.y-.1),P=Math.floor(n.z);(((R=e.getBlock)==null?void 0:R.call(e,E,S,P))??0)===Vf&&(F*=.4)}s.x=h.x*F+d,s.z=h.z*F+f}else{const F=Math.floor(n.x),E=Math.floor(n.y-.1),S=Math.floor(n.z),P=((C=e.getBlock)==null?void 0:C.call(e,F,E,S))??0,X=RM(P);s.x=s.x*X+d,s.z=s.z*X+f}ps(n,"y",s.y,e,o)&&(s.y=0);const v=r&&a&&s.y<=0,p=n.x;ps(n,"x",s.x,e,o)&&(s.x=0),v&&!hr(n,e,o)&&(n.x=p,s.x=0);const g=n.z;ps(n,"z",s.z,e,o)&&(s.z=0),v&&!hr(n,e,o)&&(n.z=g,s.z=0);const y=hr(n,e,o);c?s.y=(s.y-ia)*sa:l?t.swimUp?s.y=.16:s.y=Math.max(s.y*.8-.02,-.15):y?s.y=0:s.y=(s.y-ia)*sa;const _=s.x===0?0:d*td,b=s.z===0?0:f*td;return{pos:n,vel:s,onGround:y,kbx:Math.abs(_)<.005?0:_,kbz:Math.abs(b)<.005?0:b}}const kp=.05,El=.99,b1=.25;function sd(i,t,e,n,s,r,o,a,l){const c=Math.hypot(n,s,r)||1;return{x:i,y:t,z:e,vx:n/c*o,vy:s/c*o,vz:r/c*o,age:0,stuck:!1,fromPlayer:a,damage:l}}function T1(i,t){if(i.age++,i.stuck)return i;i.vy-=kp,i.vx*=El,i.vy*=El,i.vz*=El;const e=Math.hypot(i.vx,i.vy,i.vz),n=Math.max(1,Math.ceil(e/b1)),s=i.vx/n,r=i.vy/n,o=i.vz/n;for(let a=0;a<n;a++){const l=i.x+s,c=i.y+r,h=i.z+o;if(t.isSolid(Math.floor(l),Math.floor(c),Math.floor(h)))return i.stuck=!0,i.vx=i.vy=i.vz=0,i;i.x=l,i.y=c,i.z=h}return i}const A1=new N(0,0,1);class R1{constructor(t){x(this,"meshes",new Map);x(this,"geoShaft",new $e(.05,.05,.5));x(this,"geoHead",new $e(.09,.09,.14));x(this,"geoFletch",new $e(.16,.02,.12));x(this,"matShaft",new me({color:7031339}));x(this,"matHead",new me({color:10132130}));x(this,"matFletch",new me({color:15263980}));x(this,"tmp",new N);this.scene=t}make(){const t=new rn;t.add(new Kt(this.geoShaft,this.matShaft));const e=new Kt(this.geoHead,this.matHead);e.position.z=.3,t.add(e);const n=new Kt(this.geoFletch,this.matFletch);n.position.z=-.22,t.add(n);const s=new Kt(this.geoFletch,this.matFletch);return s.position.z=-.22,s.rotation.z=Math.PI/2,t.add(s),t}sync(t){const e=new Set(t);for(const[n,s]of this.meshes)e.has(n)||(this.scene.remove(s),this.meshes.delete(n));for(const n of t){let s=this.meshes.get(n);s||(s=this.make(),this.scene.add(s),this.meshes.set(n,s)),s.position.set(n.x,n.y,n.z);const r=Math.hypot(n.vx,n.vy,n.vz);r>1e-4&&(this.tmp.set(n.vx/r,n.vy/r,n.vz/r),s.quaternion.setFromUnitVectors(A1,this.tmp))}}clear(){for(const[,t]of this.meshes)this.scene.remove(t);this.meshes.clear()}}function oa(i,t,e,n){const r=Math.floor(i.x-t+1e-6),o=Math.ceil(i.x+t-1e-6)-1,a=Math.floor(i.y+1e-6),l=Math.ceil(i.y+e-1e-6)-1,c=Math.floor(i.z-t+1e-6),h=Math.ceil(i.z+t-1e-6)-1;for(let u=a;u<=l;u++)for(let d=r;d<=o;d++)for(let f=c;f<=h;f++)if(n.isSolid(d,u,f))return!0;return!1}function bl(i,t,e,n,s,r){if(e===0)return!1;const o=Math.sign(e),a=.2;let l=Math.abs(e);for(;l>1e-9;){const c=Math.min(l,a)*o;if(l-=Math.abs(c),i[t]+=c,oa(i,n,s,r)){i[t]-=c;let h=c/2;for(let u=0;u<24&&Math.abs(h)>1e-5;u++)i[t]+=h,oa(i,n,s,r)&&(i[t]-=h),h/=2;return!0}}return!1}function C1(i,t,e,n){return oa(i,t,e,n)?!1:oa({x:i.x,y:i.y-.06,z:i.z},t,e,n)}function Np(i,t,e,n,s){const r=t/2,o={...i},a={...n};return bl(o,"y",a.y,r,e,s)&&(a.y=0),bl(o,"x",a.x,r,e,s)&&(a.x=0),bl(o,"z",a.z,r,e,s)&&(a.z=0),{pos:o,vel:a,onGround:C1(o,r,e,s)}}const gi={pig:{hp:10,width:.9,height:.9,moveSpeed:.09,fallImmune:!1},cow:{hp:10,width:.9,height:1.4,moveSpeed:.08,fallImmune:!1},sheep:{hp:8,width:.9,height:1.3,moveSpeed:.08,fallImmune:!1},chicken:{hp:4,width:.4,height:.7,moveSpeed:.07,fallImmune:!0},zombie:{hp:20,width:.6,height:1.9,moveSpeed:.13,fallImmune:!1,hostile:!0,attack:3,sense:35},skeleton:{hp:20,width:.6,height:1.95,moveSpeed:.15,fallImmune:!1,hostile:!0,attack:2,sense:16,ranged:!0},creeper:{hp:20,width:.6,height:1.7,moveSpeed:.15,fallImmune:!1,hostile:!0,attack:43,sense:16,explosive:!0,sunImmune:!0},husk:{hp:20,width:.6,height:1.95,moveSpeed:.13,fallImmune:!1,hostile:!0,attack:3,sense:35,sunImmune:!0}},P1=i=>gi[i].hostile===!0,L1=1.8,D1=10,rd=.4,I1=.36,od=-.05,U1=.06,ad=.85,k1=.12;function wa(i,t,e,n){return{kind:i,pos:{x:t,y:e,z:n},vel:{x:0,y:0,z:0},yaw:0,onGround:!1,health:gi[i].hp,hurtCooldown:0,ai:{state:"idle",timer:20,target:null},eggTimer:i==="chicken"?6e3:0,atkCd:0,fuse:0}}function Fp(i){return{...i,pos:{...i.pos},vel:{...i.vel},ai:{...i.ai,target:i.ai.target?{...i.ai.target}:null}}}function N1(i,t){return{x:i.x+(t()*2-1)*8,y:i.y,z:i.z+(t()*2-1)*8}}const Tl=i=>20+Math.floor(i()*40);function F1(i,t,e){var v,p;const n=gi[i.kind],s=Fp(i),r=[];s.hurtCooldown>0&&s.hurtCooldown--,s.ai.timer--;let o=0,a=0,l=n.moveSpeed;if(s.ai.state==="idle")s.ai.timer<=0&&(s.ai.state="wander",s.ai.target=N1(s.pos,e),s.ai.timer=40+Math.floor(e()*60));else if(s.ai.state==="wander")if(!s.ai.target||s.ai.timer<=0)s.ai.state="idle",s.ai.target=null,s.ai.timer=Tl(e);else{const g=s.ai.target.x-s.pos.x,y=s.ai.target.z-s.pos.z,_=Math.hypot(g,y);_<.7?(s.ai.state="idle",s.ai.target=null,s.ai.timer=Tl(e)):(o=g/_,a=y/_)}else l=n.moveSpeed*L1,s.ai.timer<=0?(s.ai.state="idle",s.ai.target=null,s.ai.timer=Tl(e)):(o=Math.cos(s.yaw),a=Math.sin(s.yaw));if((o!==0||a!==0)&&s.onGround){const g=.5+n.width/2,y=Math.floor(s.pos.x+o*g),_=Math.floor(s.pos.z+a*g),b=Math.floor(s.pos.y);!t.isSolid(y,b-1,_)&&!t.isSolid(y,b-2,_)&&(o=0,a=0,s.ai.target=null)}let c=!1;if(o!==0||a!==0){const g=Math.hypot(o,a)||1,y=Math.floor(s.pos.x+o/g*(n.width/2+.3)),_=Math.floor(s.pos.z+a/g*(n.width/2+.3)),b=Math.floor(s.pos.y);t.isSolid(y,b,_)&&!t.isSolid(y,b+1,_)&&(c=!0)}const h=c&&s.onGround,u=(s.kbx??0)*.8,d=(s.kbz??0)*.8;if(s.kbx=Math.abs(u)<.01?0:u,s.kbz=Math.abs(d)<.01?0:d,s.vel.x=o*l+(s.kbx??0),s.vel.z=a*l+(s.kbz??0),((v=t.isWater)==null?void 0:v.call(t,Math.floor(s.pos.x),Math.floor(s.pos.y),Math.floor(s.pos.z)))??!1){const g=((p=t.isWater)==null?void 0:p.call(t,Math.floor(s.pos.x),Math.floor(s.pos.y)+1,Math.floor(s.pos.z)))??!1;c?s.vel.y=Rr:s.vel.y=g?Math.min((s.vel.y+U1)*ad,k1):Math.min(s.vel.y*ad,0)}else s.vel.y=(s.vel.y-ia)*sa,h&&(s.vel.y=Rr),n.fallImmune&&s.vel.y<od&&(s.vel.y=od);const m=Np(s.pos,n.width,n.height,s.vel,t);return s.pos=m.pos,s.vel=m.vel,s.onGround=m.onGround,s.onGround&&s.vel.y<0&&(s.vel.y=0),(Math.abs(s.vel.x)>1e-4||Math.abs(s.vel.z)>1e-4)&&(s.yaw=Math.atan2(s.vel.z,s.vel.x)),s.kind==="chicken"&&(s.eggTimer--,s.eggTimer<=0&&(r.push({kind:"layEgg",pos:{...s.pos}}),s.eggTimer=6e3+Math.floor(e()*6001))),{mob:s,events:r}}function Al(i,t,e,n){const s=Fp(i),r=[];if(s.hurtCooldown>0)return{mob:s,events:r};s.health-=t,s.hurtCooldown=D1,r.push({kind:"hurt"});const o=Math.hypot(e.x,e.z)||1;return s.kbx=e.x/o*rd,s.kbz=e.z/o*rd,s.vel.x=s.kbx,s.vel.z=s.kbz,s.vel.y=I1,s.onGround=!1,s.yaw=Math.atan2(s.vel.z,s.vel.x),gi[s.kind].hostile?(s.ai.state="chase",s.ai.timer=0,s.aggro=300):(s.ai.state="panic",s.ai.target=null,s.ai.timer=30+Math.floor(n()*10)),s.health<=0&&(r.push({kind:"drops",items:Op(s.kind,n),pos:{...s.pos}}),r.push({kind:"death",pos:{...s.pos}})),{mob:s,events:r}}function Op(i,t){switch(i){case"pig":return[{id:Pc,count:1+Math.floor(t()*3)}];case"cow":{const e=[{id:Lc,count:1+Math.floor(t()*3)}],n=Math.floor(t()*3);return n>0&&e.push({id:_p,count:n}),e}case"sheep":return[{id:xp,count:1},{id:Dc,count:1+Math.floor(t()*2)}];case"chicken":{const e=[{id:Ic,count:1}],n=Math.floor(t()*3);return n>0&&e.push({id:yp,count:n}),e}case"zombie":case"husk":{const e=Math.floor(t()*3);return e>0?[{id:Sp,count:e}]:[]}case"skeleton":{const e=[],n=Math.floor(t()*3);n>0&&e.push({id:wp,count:n});const s=Math.floor(t()*3);s>0&&e.push({id:bp,count:s});const r=Math.floor(t()*3);return r>0&&e.push({id:Ui,count:r}),e}case"creeper":{const e=Math.floor(t()*3);return e>0?[{id:Tp,count:e}]:[]}}}const zp=1.9,O1=1,z1=1.7,B1=18,H1=.05,G1=.6,V1=15,W1=5,X1=10,q1=35,Y1=3,$1=30,K1=3,j1=.06,ld=.85,Z1=.12;function Rl(i,t,e){const n=e.x-t.x,s=e.y-t.y,r=e.z-t.z,o=Math.ceil(Math.hypot(n,s,r)/.5);for(let a=1;a<o;a++){const l=a/o;if(i.isSolid(Math.floor(t.x+n*l),Math.floor(t.y+s*l),Math.floor(t.z+r*l)))return!1}return!0}function J1(i){return{...i,pos:{...i.pos},vel:{...i.vel},ai:{...i.ai,target:i.ai.target?{...i.ai.target}:null}}}function Q1(i,t,e,n,s){var C,F;const r=gi[i.kind],o=J1(i),a=[];o.hurtCooldown>0&&(o.hurtCooldown-=O1),o.atkCd>0&&o.atkCd--;let l=0,c=0,h=r.moveSpeed;const u=Math.max(0,(o.aggro??0)-1);o.aggro=u;const d=u>0?64:r.sense??16;let f=1/0,m=null;if(n){const E=n.x-o.pos.x,S=n.z-o.pos.z;if(f=Math.hypot(E,n.y-o.pos.y,S),f<=d&&f>.001){o.ai.state="chase",o.ai.target={...n};const P=E/f,X=S/f;r.ranged?(m=n,f<W1?(l=-P,c=-X):f>X1&&(l=P,c=X)):(l=P,c=X)}}if(l===0&&c===0)if(h=r.moveSpeed*G1,o.ai.timer--,o.ai.state==="chase")o.ai.state="idle",o.ai.target=null,o.ai.timer=20+Math.floor(e()*40);else if(o.ai.state==="wander"&&o.ai.target){const E=o.ai.target.x-o.pos.x,S=o.ai.target.z-o.pos.z,P=Math.hypot(E,S);P<.7||o.ai.timer<=0?(o.ai.state="idle",o.ai.target=null,o.ai.timer=20+Math.floor(e()*40)):(l=E/P,c=S/P)}else o.ai.timer<=0&&(o.ai.state="wander",o.ai.target={x:o.pos.x+(e()*2-1)*8,y:o.pos.y,z:o.pos.z+(e()*2-1)*8},o.ai.timer=40+Math.floor(e()*60));const v={x:o.pos.x,y:o.pos.y+r.height*.85,z:o.pos.z},p=n?{x:n.x,y:n.y+1,z:n.z}:null;if(r.ranged){if(p&&f<=V1&&o.atkCd<=0&&Rl(t,v,p)){const E=f/zp,S=.5*kp*E*E*1.15,P=p.x-v.x,X=p.y+S-v.y,W=p.z-v.z,j=Math.hypot(P,X,W)||1;a.push({kind:"shootArrow",from:v,dir:{x:P/j,y:X/j,z:W/j},damage:1+Math.floor(e()*4)}),o.atkCd=q1}}else if(r.explosive){const E=o.fuse>0?7:Y1;if(p&&f<=E&&Rl(t,v,p)){if(o.fuse++,l=0,c=0,o.fuse>=$1)return a.push({kind:"explode",pos:{...o.pos},radius:K1,damage:r.attack??43}),a.push({kind:"death",pos:{...o.pos}}),{mob:o,events:a}}else o.fuse=Math.max(0,o.fuse-1)}else p&&f<=z1&&o.atkCd<=0&&Rl(t,v,p)&&(a.push({kind:"attackPlayer",damage:r.attack??2}),o.atkCd=B1);if((l!==0||c!==0)&&o.onGround){const E=.5+r.width/2,S=Math.floor(o.pos.x+l*E),P=Math.floor(o.pos.z+c*E),X=Math.floor(o.pos.y);!t.isSolid(S,X-1,P)&&!t.isSolid(S,X-2,P)&&(l=0,c=0,o.ai.target=null)}let g=!1;if(l!==0||c!==0){const E=Math.hypot(l,c)||1,S=Math.floor(o.pos.x+l/E*(r.width/2+.3)),P=Math.floor(o.pos.z+c/E*(r.width/2+.3)),X=Math.floor(o.pos.y);t.isSolid(S,X,P)&&!t.isSolid(S,X+1,P)&&(g=!0)}const y=g&&o.onGround,_=(o.kbx??0)*.8,b=(o.kbz??0)*.8;if(o.kbx=Math.abs(_)<.01?0:_,o.kbz=Math.abs(b)<.01?0:b,o.vel.x=l*h+(o.kbx??0),o.vel.z=c*h+(o.kbz??0),((C=t.isWater)==null?void 0:C.call(t,Math.floor(o.pos.x),Math.floor(o.pos.y),Math.floor(o.pos.z)))??!1){const E=((F=t.isWater)==null?void 0:F.call(t,Math.floor(o.pos.x),Math.floor(o.pos.y)+1,Math.floor(o.pos.z)))??!1;g?o.vel.y=Rr:o.vel.y=E?Math.min((o.vel.y+j1)*ld,Z1):Math.min(o.vel.y*ld,0)}else o.vel.y=(o.vel.y-ia)*sa,y&&(o.vel.y=Rr);const R=Np(o.pos,r.width,r.height,o.vel,t);return o.pos=R.pos,o.vel=R.vel,o.onGround=R.onGround,o.onGround&&o.vel.y<0&&(o.vel.y=0),(Math.abs(o.vel.x)>1e-4||Math.abs(o.vel.z)>1e-4)&&(o.yaw=Math.atan2(o.vel.z,o.vel.x)),m&&(o.yaw=Math.atan2(m.z-o.pos.z,m.x-o.pos.x)),s&&!r.sunImmune&&(o.health-=H1),o.health<=0&&(a.push({kind:"drops",items:Op(o.kind,e),pos:{...o.pos}}),a.push({kind:"death",pos:{...o.pos}})),{mob:o,events:a}}const tw=14;function ew(i,t){return t<.4?i==="desert"?"husk":"zombie":t<.75?"skeleton":"creeper"}function nw(i,t,e,n){return!(i.getBlock(t,e-1,n)!==Bf||Ee(i.getBlock(t,e,n))||Ee(i.getBlock(t,e+1,n)))}function cd(i,t,e,n,s,r,o=24,a=44,l=null,c=Math.PI){for(let h=0;h<12;h++){const u=l===null?n()*Math.PI*2:l+(n()*2-1)*c,d=o+n()*(a-o),f=Math.floor(t+Math.cos(u)*d),m=Math.floor(e+Math.sin(u)*d),v=r(f,m);if(s.getBlock(f,v,m)===Bf)return rw(i,f+.5,v+1,m+.5,n,s)}return[]}function oc(i,t,e,n){return!(!Ee(i.getBlock(t,e-1,n))||Ee(i.getBlock(t,e,n))||Ee(i.getBlock(t,e+1,n)))}function Bp(i,t,e,n){const s=tw-1;for(let r=-s;r<=s;r++){const o=s-Math.abs(r);for(let a=-o;a<=o;a++){const l=o-Math.abs(a);for(let c=-l;c<=l;c++)if(i.getBlock(t+c,e+r,n+a)===As)return!1}}return!0}function iw(i,t,e,n,s,r,o=16,a=32,l){for(let c=0;c<14;c++){const h=n()*Math.PI*2,u=o+n()*(a-o),d=Math.floor(t+Math.cos(h)*u),f=Math.floor(e+Math.sin(h)*u),m=r(d,f);if(l?l(d,m+1,f)>7:!Bp(s,d,m+1,f))continue;const v=[],p=1+Math.floor(n()*3);for(let g=0;g<p;g++){const y=d+Math.floor((n()*2-1)*2),_=f+Math.floor((n()*2-1)*2),b=r(y,_);oc(s,y,b+1,_)&&v.push(wa(i,y+.5,b+1,_+.5))}if(v.length)return v}return[]}function sw(i,t,e,n,s,r,o,a=5,l=24,c){for(let u=0;u<24;u++){const d=s()*Math.PI*2,f=a+s()*(l-a),m=Math.floor(t+Math.cos(d)*f),v=Math.floor(n+Math.sin(d)*f),p=Math.min(Math.floor(e)+8,o(m,v)-5),g=Math.max(2,Math.floor(e)-14);for(let y=p;y>=g;y--){if(!oc(r,m,y,v)||(c?c(m,y,v)>7:!Bp(r,m,y,v)))continue;const _=[],b=1+Math.floor(s()*2);for(let I=0;I<b;I++){const R=m+Math.floor((s()*2-1)*2),C=v+Math.floor((s()*2-1)*2);for(let F=1;F>=-1;F--){const E=y+F;if(E<o(R,C)-5&&oc(r,R,E,C)){_.push(wa(i,R+.5,E,C+.5));break}}}if(_.length)return _}}return[]}function rw(i,t,e,n,s,r){const o=[];for(let a=0;a<16&&o.length<4;a++){const l=Math.floor(t)+Math.floor((s()*2-1)*4),c=Math.floor(n)+Math.floor((s()*2-1)*4);for(let h=3;h>=-3;h--){const u=Math.floor(e)+h;if(nw(r,l,u,c)){o.push(wa(i,l+.5,u,c+.5));break}}}return o}function hd(i){const t={kind:i.kind,x:i.pos.x,y:i.pos.y,z:i.pos.z,yaw:i.yaw,health:i.health};return i.kind==="chicken"&&(t.egg=i.eggTimer),t}function ud(i){const t=wa(i.kind,i.x,i.y,i.z);return t.yaw=i.yaw,t.health=i.health,i.egg!==void 0&&(t.eggTimer=i.egg),t}function ow(i,t,e){if(e)return!1;const n=Math.floor(i.pos.x),s=Math.floor(i.pos.z),r=Math.floor(i.pos.y+gi[i.kind].height);for(let o=Math.floor(i.pos.y);o<=r;o++)if(yn(t.getBlock(n,o,s)))return!1;for(let o=r+1;o<pe;o++){const a=t.getBlock(n,o,s);if(Ee(a)||yn(a))return!1}return!0}const ki=64,Xt={head:{u:0,v:0,x:8,y:8,z:8},snout:{u:32,v:0,x:4,y:3,z:6},animalBody:{u:0,v:16,x:12,y:8,z:8},humanBody:{u:0,v:16,x:4,y:12,z:8},leg:{u:0,v:36,x:4,y:12,z:4},arm:{u:16,v:36,x:4,y:12,z:4},wing:{u:32,v:16,x:8,y:6,z:2},tail:{u:32,v:36,x:2,y:8,z:2}};function hi(i,t){const{u:e,v:n,x:s,y:r,z:o}=i;switch(t){case"top":return{x:e+o,y:n,w:s,h:o};case"bottom":return{x:e+o+s,y:n,w:s,h:o};case"right":return{x:e,y:n+o,w:o,h:r};case"front":return{x:e+o,y:n+o,w:s,h:r};case"left":return{x:e+o+s,y:n+o,w:o,h:r};case"back":return{x:e+o+s+o,y:n+o,w:s,h:r}}}const dd=new Map;function aw(i){let t=i%2147483647;return t<=0&&(t+=2147483646),()=>(t=t*16807%2147483647)/2147483647}function lw(i){const t=Number.parseInt(i.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function wr(i,t){const[e,n,s]=lw(i),r=o=>Math.max(0,Math.min(255,Math.round(o*t))).toString(16).padStart(2,"0");return`#${r(e)}${r(n)}${r(s)}`}function cw(i,t,e){i.fillStyle=t,i.fillRect(e.x,e.y,e.w,e.h)}function Mn(i,t,e,n,s=1,r=1){i.fillStyle=t,i.fillRect(Math.round(e),Math.round(n),Math.round(s),Math.round(r))}function he(i,t,e,n,s){const r={top:1.08,bottom:.62,right:.96,front:.88,left:.78,back:.83},o=aw(s),a=["right","front","left","back","top","bottom"];for(const l of a){const c=hi(t,l);cw(i,wr(e,r[l]),c);const h=Math.max(2,Math.floor(c.w*c.h/12));for(let u=0;u<h;u++)Mn(i,wr(n,r[l]),c.x+Math.floor(o()*c.w),c.y+Math.floor(o()*c.h))}}function oe(i,t,e,n,s,r,o=1,a=1){const l=hi(t,e);Mn(i,n,l.x+s,l.y+r,o,a)}function hw(i,t){const e=Xt.head,n=Xt.animalBody,s=Xt.leg,r=Xt.snout;if(t==="pig")he(i,e,"#e7a39d","#f0b2ab",11),he(i,n,"#e5a09a","#d98e8b",12),he(i,s,"#dc9692","#c97f7d",13),he(i,r,"#d88b8b","#efaaa4",14),oe(i,e,"right","#202020",1,2,2,2),oe(i,e,"right","#202020",5,2,2,2),oe(i,r,"right","#7c4d55",1,1),oe(i,r,"right","#7c4d55",4,1);else if(t==="cow"){he(i,e,"#554033","#382b23",21),he(i,n,"#594435","#3f3026",22),he(i,s,"#4c382c","#2f241d",23),he(i,r,"#b9a28e","#8e7663",24);for(const o of["right","front","left","back","top"]){const a=hi(n,o);Mn(i,"#e7ddcd",a.x+1,a.y+1,Math.max(2,Math.floor(a.w/3)),Math.max(2,Math.floor(a.h/2))),Mn(i,"#e7ddcd",a.x+Math.max(1,a.w-4),a.y+Math.max(1,a.h-3),3,2)}oe(i,e,"right","#f0e7d9",0,0,3,5),oe(i,e,"right","#171717",1,2,2,2),oe(i,e,"right","#171717",5,2,2,2),oe(i,r,"right","#4b3834",1,1),oe(i,r,"right","#4b3834",4,1)}else if(t==="sheep"){he(i,e,"#4a433d","#625950",31),he(i,n,"#ece9e1","#d7d3c9",32),he(i,s,"#4a433d","#312d29",33);for(const o of["front","back","top","right","left"]){const a=hi(n,o);for(let l=0;l<a.h;l+=3)for(let c=l/3%2;c<a.w;c+=3)Mn(i,"#f8f6ef",a.x+c,a.y+l,2,2)}oe(i,e,"right","#ece9e1",0,0,8,2),oe(i,e,"right","#171717",1,3,2,2),oe(i,e,"right","#171717",5,3,2,2)}else he(i,e,"#f1f1ef","#d9d9d6",41),he(i,n,"#eeeeeb","#d6d6d2",42),he(i,s,"#d99020","#a96917",43),he(i,Xt.wing,"#f7f7f5","#d4d4d0",44),oe(i,e,"right","#151515",1,2,2,2),oe(i,e,"right","#151515",5,2,2,2),oe(i,e,"right","#ffffff",1,2),oe(i,e,"right","#ffffff",5,2)}function uw(i,t){const e=Xt.head,n=Xt.humanBody,s=Xt.arm,r=Xt.leg;if(t==="skeleton"){he(i,e,"#dcdcd0","#bcbcaf",71),he(i,n,"#d8d8cc","#9f9f91",72),he(i,s,"#d6d6ca","#a5a598",73),he(i,r,"#d6d6ca","#a5a598",74),oe(i,e,"right","#1b1b1b",1,2,2,2),oe(i,e,"right","#1b1b1b",5,2,2,2),oe(i,e,"right","#77776d",3,4,2,1),oe(i,e,"right","#77776d",1,6,6,1);const f=hi(n,"right");Mn(i,"#9b9b8e",f.x+3,f.y+1,2,10);for(const m of[2,5,8])Mn(i,"#85857a",f.x,f.y+m,3,1),Mn(i,"#85857a",f.x+5,f.y+m,3,1);return}const o=t==="husk",a=o?"#b29a5e":"#568746",l=o?"#8f783f":"#3f6e37",c=o?"#b9a66d":"#2f6a69",h=o?"#8c7645":"#244f50",u=o?"#66542e":"#2d3158";he(i,e,a,l,o?67:61),he(i,n,c,h,o?68:62),he(i,s,c,a,o?69:63),he(i,r,u,wr(u,.75),o?70:64);for(const f of["right","front","left","back"]){const m=hi(s,f);Mn(i,wr(a,f==="left"?.8:.95),m.x,m.y+7,m.w,5)}oe(i,e,"right","#242022",1,2,2,1),oe(i,e,"right","#242022",5,2,2,1),oe(i,e,"right",o?"#5e4724":"#31562c",2,6,4,1);const d=hi(n,"right");Mn(i,l,d.x+1,d.y+7,2,3),Mn(i,wr(c,.72),d.x+5,d.y+10,3,2)}function dw(i){const t=Xt.head,e=Xt.humanBody;he(i,t,"#5d9f43","#407c31",81),he(i,e,"#5a9840","#3d762e",82),he(i,Xt.leg,"#4d8937","#326628",83),oe(i,t,"right","#101010",1,2,2,2),oe(i,t,"right","#101010",5,2,2,2),oe(i,t,"right","#101010",3,4,2,2),oe(i,t,"right","#101010",2,6,2,2),oe(i,t,"right","#101010",4,6,2,2)}function fw(i,t){t.clearRect(0,0,ki,ki),t.imageSmoothingEnabled=!1,i==="pig"||i==="cow"||i==="sheep"||i==="chicken"?hw(t,i):i==="creeper"?dw(t):uw(t,i)}function pw(i){const t=dd.get(i);if(t)return t;const e=document.createElement("canvas");e.width=e.height=ki;const n=e.getContext("2d");n&&fw(i,n);const s=new Gi(e);return s.magFilter=le,s.minFilter=le,s.generateMipmaps=!1,s.colorSpace=Qt,dd.set(i,s),s}function mw(i,t=30){if(i<=0)return{whiteness:0,swell:1};const e=Math.min(1,i/t+.3*Math.abs(Math.sin(i*.7)));return{whiteness:e,swell:1+.5*e}}const gw=[.8,.8,1,.42,.8,.8],vw=3.4,fd=["right","left","top","bottom","front","back"];function _w(i,t,e,n,s){const r=new $e(i,t,e),o=new Ct(n),a=[];for(let l=0;l<6;l++){const c=gw[l];for(let h=0;h<4;h++)a.push(o.r*c,o.g*c,o.b*c)}if(r.setAttribute("color",new Ae(a,3)),s){const l=r.attributes.uv;for(let c=0;c<fd.length;c++){const h=hi(s,fd[c]),u=h.x/ki,d=(h.x+h.w)/ki,f=1-(h.y+h.h)/ki,m=1-h.y/ki,v=c*4;l.setXY(v,u,m),l.setXY(v+1,d,m),l.setXY(v+2,u,f),l.setXY(v+3,d,f)}l.needsUpdate=!0}return r}function aa(i,t,e,n,s,r,o,a,l,c){const h=new Kt(_w(e,n,s,r,c),t);return h.position.set(o,a,l),i.add(h),h}function ni(i,t,e,n,s,r,o){const a=new rn;a.position.set(n,r,s),aa(a,t,o,r,o,16777215,0,-r/2,0,Xt.leg),i.add(a),e.push(a)}function ms(i,t,e,n,s,r,o,a,l=0){const c=new rn;return c.position.set(n,s,r),c.rotation.z=l,aa(c,t,a,o,a,16777215,0,-o/2,0,Xt.arm),i.add(c),e.push(c),c}function xw(i){const t=new rn,e=[],n=[],s=new me({vertexColors:!0}),r=new me({map:pw(i),vertexColors:!0}),o=[s,r],a=(v,p,g,y,_,b,I)=>aa(t,s,v,p,g,y,_,b,I),l=(v,p,g,y,_,b,I)=>aa(t,r,p,g,y,16777215,_,b,I,v);let c,h;if(i==="pig"){l(Xt.animalBody,.9,.5,.6,0,.26+.25,0),c=l(Xt.head,.44,.44,.5,.55,.26+.28,0),l(Xt.snout,.16,.15,.3,.79,.26+.2,0),a(.14,.12,.04,14257292,.5,.26+.52,.2),a(.14,.12,.04,14257292,.5,.26+.52,-.2),h=l(Xt.tail,.1,.14,.1,-.47,.26+.36,0);for(const[p,g]of[[.3,.2],[.3,-.2],[-.32,.2],[-.32,-.2]])ni(t,r,e,p,g,.26,.16)}else if(i==="cow"){l(Xt.animalBody,1,.6,.62,0,.52+.3,0),c=l(Xt.head,.45,.48,.52,.6,.52+.4,0),l(Xt.snout,.18,.2,.42,.86,.52+.28,0),a(.09,.14,.09,14471352,.61,.52+.7,.2),a(.09,.14,.09,14471352,.61,.52+.7,-.2),a(.16,.1,.34,15709892,-.18,.52-.02,0),h=l(Xt.tail,.1,.32,.1,-.51,.52+.38,0);for(const[g,y]of[[.34,.21],[.34,-.21],[-.34,.21],[-.34,-.21]])ni(t,r,e,g,y,.52,.18)}else if(i==="sheep"){l(Xt.animalBody,.94,.7,.76,0,.46+.36,0),a(.5,.34,.42,15526627,.4,.46+.6,0),c=l(Xt.head,.3,.38,.36,.57,.46+.38,0),a(.1,.1,.04,4669498,.52,.46+.56,.18),a(.1,.1,.04,4669498,.52,.46+.56,-.18);for(const[y,_]of[[.28,.22],[.28,-.22],[-.3,.22],[-.3,-.22]])ni(t,r,e,y,_,.46,.15)}else if(i==="zombie"){l(Xt.humanBody,.28,.66,.5,0,.82+.33,0),c=l(Xt.head,.44,.44,.44,0,.82+.88,0),ms(t,r,n,.08,.82+.63,.35,.62,.18,1.28),ms(t,r,n,.08,.82+.63,-.35,.62,.18,1.28);for(const[,p]of[[0,.12],[0,-.12]])ni(t,r,e,0,p,.82,.2)}else if(i==="skeleton"){l(Xt.humanBody,.2,.62,.34,0,.84+.31,0),c=l(Xt.head,.42,.42,.42,0,.84+.81,0),ms(t,r,n,.04,.84+.58,.24,.58,.11,1.18),ms(t,r,n,0,.84+.58,-.24,.58,.11,.12);const p=7031339;a(.06,.62,.06,p,.52,.84+.32,.16),a(.06,.14,.06,p,.47,.84+.62,.16),a(.06,.14,.06,p,.47,.84+.02,.16),a(.02,.6,.02,15394520,.55,.84+.32,.16);for(const[,g]of[[0,.1],[0,-.1]])ni(t,r,e,0,g,.84,.12)}else if(i==="husk"){l(Xt.humanBody,.28,.66,.5,0,.82+.33,0),c=l(Xt.head,.44,.44,.44,0,.82+.88,0),ms(t,r,n,.08,.82+.63,.35,.62,.18,1.28),ms(t,r,n,.08,.82+.63,-.35,.62,.18,1.28);for(const[,p]of[[0,.12],[0,-.12]])ni(t,r,e,0,p,.82,.2)}else if(i==="creeper"){l(Xt.humanBody,.34,.82,.5,0,.36+.5,0),c=l(Xt.head,.48,.48,.48,0,.36+1.12,0);for(const[p,g]of[[.16,.13],[.16,-.13],[-.16,.13],[-.16,-.13]])ni(t,r,e,p,g,.36,.16)}else{l(Xt.animalBody,.34,.34,.3,-.02,.22+.17,0),l(Xt.wing,.32,.24,.06,-.18,.22+.2,.17),l(Xt.wing,.32,.24,.06,-.18,.22+.2,-.17),h=l(Xt.tail,.18,.26,.16,-.34,.22+.34,0),c=l(Xt.head,.22,.24,.2,.2,.22+.4,0),a(.13,.08,.1,15176991,.36,.22+.4,0),a(.05,.1,.14,13384496,.18,.22+.55,0),a(.06,.08,.06,13384496,.32,.22+.32,0);for(const[y,_]of[[.06,.09],[.06,-.09]])ni(t,r,e,y,_,.22,.07)}const u=.9+Math.random()*.22;t.scale.setScalar(u);const d=.9+Math.random()*.16,f=(Math.random()-.5)*.06,m=new Ct(Math.min(1,d+f),d,Math.max(0,d-f));return{group:t,legs:e,arms:n,mats:o,base:m,head:c,tail:h,headY:c?c.position.y:0}}const yw=new Ct(16734810),Mw=new Ct(1,1,1);function pd(i){i.group.traverse(t=>{t instanceof Kt&&t.geometry.dispose()});for(const t of i.mats)t.dispose()}class Sw{constructor(t){x(this,"models",new Map);this.scene=t}sync(t,e,n){const s=new Set(t);for(const[r,o]of this.models)s.has(r)||(this.scene.remove(o.group),pd(o),this.models.delete(r));for(const r of t){let o=this.models.get(r);if(!o){const m=xw(r.kind);this.scene.add(m.group),o={...m,phase:0,t:Math.random()*10,baseScale:m.group.scale.x,bright:1,dispYaw:r.yaw,swingAmt:0},this.models.set(r,o)}o.t+=e;let a=-r.yaw-o.dispYaw;a=((a+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,o.dispYaw+=a*Math.min(1,e*10),o.group.rotation.y=o.dispYaw,o.group.rotation.z=Math.max(-.18,Math.min(.22,-r.vel.y*2.2));const l=n?n(r.pos.x,r.pos.y+.6,r.pos.z):1;o.bright+=(l-o.bright)*Math.min(1,e*10);const c=r.hurtCooldown>0?yw:o.base;for(const m of o.mats)m.color.copy(c).multiplyScalar(o.bright);const h=mw(r.kind==="creeper"?r.fuse:0);if(h.whiteness>0){const m=c.clone().lerp(Mw,h.whiteness);for(const v of o.mats)v.color.copy(m).multiplyScalar(o.bright)}o.group.scale.setScalar(o.baseScale*h.swell);const u=Math.hypot(r.vel.x,r.vel.z),d=u>.002;d&&(o.phase+=u*20*e*vw),o.swingAmt+=((d?1:0)-o.swingAmt)*Math.min(1,e*8);const f=Math.sin(o.phase)*.6*o.swingAmt;if(o.legs.forEach((m,v)=>m.rotation.z=v%2===0?f:-f),r.kind==="zombie"||r.kind==="husk"?o.arms.forEach((m,v)=>m.rotation.z=1.28+(v?-1:1)*Math.sin(o.phase)*.08*o.swingAmt):r.kind==="skeleton"&&(o.arms[0]&&(o.arms[0].rotation.z=1.18+Math.sin(o.phase)*.06*o.swingAmt),o.arms[1]&&(o.arms[1].rotation.z=.12-f*.45)),o.group.position.set(r.pos.x,r.pos.y+Math.abs(Math.sin(o.phase))*.035*o.swingAmt,r.pos.z),o.head)if(d)o.head.position.y=o.headY+Math.sin(o.phase*2)*.015,o.head.rotation.z=Math.sin(o.phase)*.05;else if(r.kind==="chicken"){const m=Math.max(0,Math.sin(o.t*1.6));o.head.rotation.z=-m*.5,o.head.position.y=o.headY-m*.04}else o.head.position.y=o.headY+Math.sin(o.t*1.4)*.012,o.head.rotation.z=0,o.head.rotation.y=Math.sin(o.t*.55)*.4*(1-o.swingAmt);o.tail&&(o.tail.rotation.z=Math.sin(o.t*4+o.phase)*.3)}}clear(){for(const[,t]of this.models)this.scene.remove(t.group),pd(t);this.models.clear()}}const Ti=8,md=1,Cl=4,To=[[1,0],[-1,0],[0,1],[0,-1]],Pl={amount:0,source:!1,falling:!1},ur=(i,t,e)=>`${i},${t},${e}`;class ww{constructor(t=4e3){x(this,"active",new Set);x(this,"maxPerTick");this.maxPerTick=t}get activeCount(){return this.active.size}activate(t,e,n){this.active.add(ur(t,e,n));for(const[s,r]of To)this.active.add(ur(t+s,e,n+r));this.active.add(ur(t,e+1,n)),this.active.add(ur(t,e-1,n))}tick(t){if(this.active.size===0)return;const e=[...this.active];this.active.clear();const n=new Map,s=(o,a,l,c)=>{const h=ur(o,a,l),u=n.get(h);(!u||c.amount>u.c.amount||c.amount===u.c.amount&&c.source&&!u.c.source)&&n.set(h,{x:o,y:a,z:l,c})};let r=this.maxPerTick;for(const o of e){if(r--<=0){this.active.add(o);continue}const[a,l,c]=o.split(",").map(Number);this.evaluate(t,a,l,c,s)}for(const{x:o,y:a,z:l,c}of n.values())(c.amount!==t.amount(o,a,l)||c.source!==t.isSource(o,a,l)||c.falling!==t.isFalling(o,a,l))&&(t.setWater(o,a,l,c.amount,c.source,c.falling),this.activate(o,a,l))}evaluate(t,e,n,s,r){if(t.isSolid(e,n,s)){t.amount(e,n,s)>0&&r(e,n,s,Pl);return}if(!(t.amount(e,n,s)>0||t.isSource(e,n,s)))return;if(t.amount(e,n,s)>0&&!t.isSource(e,n,s)){const l=[[e+1,n,s],[e-1,n,s],[e,n,s+1],[e,n,s-1],[e,n+1,s],[e,n-1,s]];for(const[c,h,u]of l)if(t.getBlock(c,h,u)===23){t.setBlock(c,h,u,18),r(e,n,s,Pl);return}}const a=t.isSource(e,n,s)?{amount:Ti,source:!0,falling:!1}:this.getNewLiquid(t,e,n,s);r(e,n,s,a),a.amount>0&&this.spread(t,e,n,s,a,r)}getNewLiquid(t,e,n,s){if(t.amount(e,n+1,s)>0)return{amount:Ti,source:!1,falling:!0};let r=0,o=0;for(const[l,c]of To){const h=t.amount(e+l,n,s+c);h>0&&(h>r&&(r=h),t.isSource(e+l,n,s+c)&&o++)}if(o>=2&&(t.isSolid(e,n-1,s)||t.isSource(e,n-1,s)))return{amount:Ti,source:!0,falling:!1};const a=r-md;return a>0?{amount:a,source:!1,falling:!1}:Pl}spread(t,e,n,s,r,o){const a=n-1,l=t.amount(e,a,s)===Ti&&!t.isFalling(e,a,s);if(!t.isSolid(e,a,s)&&!l){(t.getBlock(e,a,s)===0||t.amount(e,a,s)>0)&&o(e,a,s,{amount:Ti,source:!1,falling:!0});return}if(!r.source&&!t.isSolid(e,a,s))return;const c=r.source?Ti:r.amount,h=c-md;if(!(h<1))for(const[u,d]of this.getSpreadDirs(t,e,n,s,c)){const f=e+u,m=s+d;t.isSolid(f,n,m)||t.isSource(f,n,m)||t.getBlock(f,n,m)!==0&&t.amount(f,n,m)===0||t.amount(f,n,m)>=h||o(f,n,m,{amount:h,source:!1,falling:!1})}}getSpreadDirs(t,e,n,s,r){let o=Cl+1;const a=[];for(const l of To){const c=e+l[0],h=s+l[1];if(t.isSolid(c,n,h)||t.amount(c,n,h)>=r)continue;const u=this.isHole(t,c,n,h)?0:this.slopeDistance(t,c,n,h,1,[-l[0],-l[1]]);u<o?(o=u,a.length=0,a.push(l)):u===o&&a.push(l)}return a}isHole(t,e,n,s){return!t.isSolid(e,n-1,s)&&t.amount(e,n-1,s)<Ti}slopeDistance(t,e,n,s,r,o){let a=Cl;for(const l of To){if(l[0]===o[0]&&l[1]===o[1])continue;const c=e+l[0],h=s+l[1];if(!t.isSolid(c,n,h)){if(this.isHole(t,c,n,h))return r;if(r<Cl){const u=this.slopeDistance(t,c,n,h,r+1,[-l[0],-l[1]]);u<a&&(a=u)}}}return a}}function Ew(i,t,e=240){let n=0;for(;i.activeCount>0&&n<e;)i.tick(t),n++;return n}function gd(i,t,e){let n=0;for(let s=e.minY;s<=e.maxY;s++)for(let r=e.minX;r<=e.maxX;r++)for(let o=e.minZ;o<=e.maxZ;o++)t.isWater(r,s,o)&&(t.isAir(r,s-1,o)||t.isAir(r+1,s,o)||t.isAir(r-1,s,o)||t.isAir(r,s,o+1)||t.isAir(r,s,o-1))&&(i.activate(r,s,o),n++);return n}function bw(i,t,e,n){const s=[];for(let r=i-e;r<=i+e;r++)for(let o=t-e;o<=t+e;o++){const a=`${r},${o}`;if(n.has(a))continue;const l=r-i,c=o-t;s.push({key:a,d:l*l+c*c})}return s.sort((r,o)=>r.d-o.d),s.map(r=>r.key)}const Tw=9,Aw=27,Hp=Tw+Aw,Gp=64;function Uc(){return Array.from({length:Hp},()=>null)}function Bs(i,t,e,n=Gp,s=0,r=i.length){for(let o=s;o<r&&e>0;o++){const a=i[o];if(a&&a.id===t&&a.count<n){const l=Math.min(n-a.count,e);a.count+=l,e-=l}}for(let o=s;o<r&&e>0;o++)if(!i[o]){const a=Math.min(n,e);i[o]={id:t,count:a},e-=a}return e}function Rw(i,t,e){for(let n=0;n<i.length;n++)if(!i[n])return i[n]={id:t,count:1,dur:e},!0;return!1}function vd(i,t){let e=0;for(const n of i)n&&n.id===t&&(e+=n.count);return e}function Cw(i,t,e){let n=e;for(let s=0;s<i.length&&n>0;s++){const r=i[s];if(r&&r.id===t){const o=Math.min(r.count,n);r.count-=o,n-=o,r.count<=0&&(i[s]=null)}}return e-n}function _d(i,t){const e=i[t];if(!e||e.count<=0)return null;e.count--;const n=e.id;return e.count<=0&&(i[t]=null),n}function Pw(i){return i.map(t=>t?{id:t.id,count:t.count,dur:t.dur}:null)}function Lw(i){const t=Uc();if(!Array.isArray(i))return t;for(let e=0;e<Hp;e++){const n=i[e];if(n&&typeof n.id=="number"&&typeof n.count=="number"&&n.count>0){const s={id:n.id,count:Math.min(Gp,n.count)};typeof n.dur=="number"&&(s.dur=n.dur),t[e]=s}}return t}function xd(i,t,e){const n=i[t];if(!n)return!1;const s=(n.dur??e)-1;return s<=0?(i[t]=null,!0):(n.dur=s,!1)}const en=new Set,Dw=300;let ac=-1/0,Ea=!1,la=!1;window.addEventListener("keydown",i=>{if(i.code==="KeyW"&&!en.has("KeyW")){const t=performance.now();t-ac<Dw&&(Ea=!0),ac=t}i.code==="Space"&&!en.has("Space")&&(la=!0),en.add(i.code)});window.addEventListener("keyup",i=>{en.delete(i.code),i.code==="KeyW"&&(Ea=!1)});function Vp(){en.clear(),Ea=!1,la=!1,ac=-1/0}window.addEventListener("blur",Vp);document.addEventListener("visibilitychange",()=>{document.hidden&&Vp()});function Iw(){let i=0,t=0;en.has("KeyW")&&(i+=1),en.has("KeyS")&&(i-=1),en.has("KeyD")&&(t+=1),en.has("KeyA")&&(t-=1);const e=en.has("ShiftLeft")||en.has("ShiftRight")||en.has("KeyC");return{forward:i,right:t,sprint:Ea&&i>0&&!e,jumpHeld:en.has("Space"),crouch:e}}function Uw(){const i=la;return la=!1,i}const yd=.0025,Md=1.55;class kw{constructor(t,e=!0){x(this,"yaw",0);x(this,"pitch",0);e&&t.addEventListener("click",()=>void t.requestPointerLock()),document.addEventListener("mousemove",n=>{document.pointerLockElement===t&&this.rotate(n.movementX*yd,-n.movementY*yd)})}rotate(t,e){this.yaw+=t,this.pitch=Math.max(-Md,Math.min(Md,this.pitch+e))}}const Sd=.006,Nw=320,Wp=380,Fw=8,Ao=96,Ow=.2,wd=1+Math.SQRT2;function zw(i,t){if(Math.hypot(i,t)<Ow)return{forward:0,right:0};const n=Math.abs(i),s=Math.abs(t);return s>n*wd?{forward:t<0?1:-1,right:0}:n>s*wd?{forward:0,right:i>0?1:-1}:{forward:t<0?1:-1,right:i>0?1:-1}}function Bw(i,t){return t-i>=0&&t-i<=Nw}function Hw(i,t,e,n){return Math.hypot(e-i,n-t)>=Fw}function Gw(i,t,e=!1,n=0){return e?"none":t?"hold-end":i?"none":n>=Wp?"hold-end":"tap"}function Xp(){return new URLSearchParams(window.location.search).get("touch")==="1"?!0:navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches}let Ed=!1;function Vw(){if(Ed)return;Ed=!0;const i=r=>r.preventDefault();document.addEventListener("gesturestart",i,{passive:!1}),document.addEventListener("gesturechange",i,{passive:!1}),document.addEventListener("gestureend",i,{passive:!1}),document.addEventListener("dblclick",i,{passive:!1}),document.addEventListener("touchmove",r=>{r.touches.length>1&&r.preventDefault()},{passive:!1});let t=-1/0,e=null,n=0,s=0;document.addEventListener("touchend",r=>{const o=performance.now(),a=r.changedTouches[0],l=a!==void 0&&Math.hypot(a.clientX-n,a.clientY-s)<28;o-t<320&&r.target===e&&l&&r.preventDefault(),t=o,e=r.target,a&&(n=a.clientX,s=a.clientY)},{passive:!1})}class Ww{constructor(t,e){x(this,"root");x(this,"actions");x(this,"lookPointer",null);x(this,"lookPoint",null);x(this,"lookStartedAt",0);x(this,"lookGesture",0);x(this,"lookStartX",0);x(this,"lookStartY",0);x(this,"lookX",0);x(this,"lookY",0);x(this,"lookDragging",!1);x(this,"lookHoldStarted",!1);x(this,"lookHoldTimer",null);x(this,"releaseLookCapture",null);x(this,"dpadPointer",null);x(this,"forward",0);x(this,"right",0);x(this,"lastForwardPress",-1/0);x(this,"sprinting",!1);x(this,"jumpHeld",!1);x(this,"crouchHeld",!1);x(this,"pendingJump",!1);x(this,"active",!1);x(this,"releaseHolds",[]);this.root=t,this.actions=e;const n=t.querySelector(".touch-look");n.addEventListener("pointerdown",l=>{if(!this.active||(l.preventDefault(),this.lookPointer!==null))return;this.lookPointer=l.pointerId,this.lookPoint={x:l.clientX,y:l.clientY},this.lookStartedAt=performance.now();const c=++this.lookGesture;this.lookStartX=l.clientX,this.lookStartY=l.clientY,this.lookX=l.clientX,this.lookY=l.clientY,this.lookDragging=!1,this.lookHoldStarted=!1,this.capturePointer(n,l.pointerId),this.lookHoldTimer=window.setTimeout(()=>{if(this.lookHoldTimer=null,this.lookPointer!==l.pointerId||this.lookGesture!==c||this.lookDragging||!this.active)return;const h=this.lookPoint;h!==null&&(this.lookHoldStarted=!0,this.actions.interactHoldStart(h))},Wp)});const s=l=>{if(l.pointerId!==this.lookPointer)return;l.preventDefault();const c=typeof l.getCoalescedEvents=="function"?l.getCoalescedEvents():[],h=c.length>0?c:[l];for(const u of h)this.moveLookTo(u.clientX,u.clientY)},r=(l,c)=>{const h=this.lookPointer,u=this.lookPoint;if(h===null||u===null)return;!l&&c&&this.moveLookTo(c.x,c.y);const d=this.lookHoldStarted,f=Gw(this.lookDragging,d,l,performance.now()-this.lookStartedAt);this.clearLookHoldTimer(),this.lookPointer=null,this.lookPoint=null,this.lookStartedAt=0,this.lookDragging=!1,this.lookHoldStarted=!1,this.releasePointerCapture(n,h),f==="tap"?this.actions.interactTap(u):f==="hold-end"?(d||this.actions.interactHoldStart(u),this.actions.interactHoldEnd(u)):d&&this.actions.interactHoldCancel(u)};this.releaseLookCapture=()=>r(!0);const o=l=>{l.pointerId===this.lookPointer&&(l.preventDefault(),r(!1,{x:l.clientX,y:l.clientY}))},a=l=>{l.pointerId===this.lookPointer&&(l.preventDefault(),r(!0))};window.addEventListener("pointermove",s),window.addEventListener("pointerup",o),window.addEventListener("pointercancel",a),n.addEventListener("lostpointercapture",a),this.bindSlidingDpad(t.querySelector("#touch-dpad")),this.bindHold("touch-jump",()=>{this.jumpHeld||(this.pendingJump=!0),this.jumpHeld=!0},()=>this.jumpHeld=!1),this.bindHold("touch-crouch",()=>this.crouchHeld=!0,()=>this.crouchHeld=!1),this.bindTap("touch-inventory",()=>this.actions.inventory()),this.bindTap("touch-pause",()=>this.actions.pause()),window.addEventListener("blur",()=>this.reset()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.reset()}),window.addEventListener("pagehide",()=>this.reset())}setActive(t){this.active=t,this.root.classList.toggle("active",t),this.root.setAttribute("aria-hidden",String(!t)),t||this.reset()}get isActive(){return this.active}readMove(){return{forward:this.forward,right:this.right,sprint:this.sprinting&&this.forward>0&&!this.crouchHeld,jumpHeld:this.jumpHeld,crouch:this.crouchHeld}}consumeJump(){const t=this.pendingJump;return this.pendingJump=!1,t}moveLookTo(t,e){if(this.lookPoint===null)return;if(!this.lookDragging&&Hw(this.lookStartX,this.lookStartY,t,e)){this.lookDragging=!0,this.clearLookHoldTimer(),this.lookX=t,this.lookY=e;return}if(!this.lookDragging)return;const s=Math.max(-Ao,Math.min(Ao,t-this.lookX)),r=Math.max(-Ao,Math.min(Ao,e-this.lookY));this.lookX=t,this.lookY=e,this.actions.look(s*Sd,-r*Sd)}bindSlidingDpad(t){const e=(o,a)=>this.updateSlidingDpad(t,o,a),n=()=>{const o=this.dpadPointer;o!==null&&(this.dpadPointer=null,this.setMoveAxes(t,{forward:0,right:0}),t.style.setProperty("--touch-dpad-stick-x","0px"),t.style.setProperty("--touch-dpad-stick-y","0px"),t.dataset.moving="false",this.releasePointerCapture(t,o))};t.addEventListener("pointerdown",o=>{!this.active||this.dpadPointer!==null||(o.preventDefault(),o.stopPropagation(),this.dpadPointer=o.pointerId,this.capturePointer(t,o.pointerId),e(o.clientX,o.clientY))});const s=o=>{o.pointerId===this.dpadPointer&&(o.preventDefault(),e(o.clientX,o.clientY))},r=o=>{o.pointerId===this.dpadPointer&&(o.preventDefault(),n())};window.addEventListener("pointermove",s),window.addEventListener("pointerup",r),window.addEventListener("pointercancel",r),t.addEventListener("lostpointercapture",r),this.releaseHolds.push(n)}updateSlidingDpad(t,e,n){const s=t.getBoundingClientRect(),r=Math.max(1,Math.min(s.width,s.height)/2),o=(e-(s.left+s.width/2))/r,a=(n-(s.top+s.height/2))/r,l=zw(o,a);this.setMoveAxes(t,l);const c=Math.hypot(o,a),h=c>0?Math.min(1,c)/c:0,u=r*.42;t.style.setProperty("--touch-dpad-stick-x",`${Math.round(o*h*u)}px`),t.style.setProperty("--touch-dpad-stick-y",`${Math.round(a*h*u)}px`),t.dataset.moving=String(l.forward!==0||l.right!==0)}setMoveAxes(t,e){if(e.forward>0&&this.forward<=0){const n=performance.now();Bw(this.lastForwardPress,n)&&(this.sprinting=!0),this.lastForwardPress=n}e.forward<=0&&(this.sprinting=!1),this.forward=e.forward,this.right=e.right,t.dataset.forward=String(e.forward),t.dataset.right=String(e.right)}releasePointerCapture(t,e){if(t.hasPointerCapture(e))try{t.releasePointerCapture(e)}catch{}}capturePointer(t,e){try{t.setPointerCapture(e)}catch{}}clearLookHoldTimer(){this.lookHoldTimer!==null&&(window.clearTimeout(this.lookHoldTimer),this.lookHoldTimer=null)}bindHold(t,e,n,s=n){const r=document.getElementById(t);let o=null;r.addEventListener("pointerdown",h=>{!this.active||o!==null||(h.preventDefault(),h.stopPropagation(),o=h.pointerId,this.capturePointer(r,h.pointerId),r.classList.add("pressed"),e())});const a=h=>{const u=o;u!==null&&(o=null,r.classList.remove("pressed"),h(),this.releasePointerCapture(r,u))},l=h=>{h.pointerId===o&&a(n)},c=h=>{h.pointerId===o&&a(s)};r.addEventListener("pointerup",l),r.addEventListener("pointercancel",c),r.addEventListener("lostpointercapture",c),this.releaseHolds.push(()=>a(s))}bindTap(t,e){const n=document.getElementById(t);n.addEventListener("pointerdown",s=>{this.active&&(s.preventDefault(),s.stopPropagation(),n.classList.add("pressed"),window.setTimeout(()=>n.classList.remove("pressed"),100),e())})}reset(){var t;(t=this.releaseLookCapture)==null||t.call(this);for(const e of this.releaseHolds)e();this.dpadPointer=null,this.forward=0,this.right=0,this.lastForwardPress=-1/0,this.sprinting=!1,this.jumpHeld=!1,this.crouchHeld=!1,this.pendingJump=!1}}class Xw{constructor(t,e=9){x(this,"icons",[]);x(this,"counts",[]);x(this,"cells",[]);x(this,"durTracks",[]);x(this,"durFills",[]);x(this,"selected",0);x(this,"size");this.size=e,t.innerHTML="";for(let n=0;n<e;n++){const s=document.createElement("div");s.className="hotbar-slot",s.style.position="relative";const r=document.createElement("div");r.className="hotbar-icon";const o=document.createElement("div");o.className="hotbar-count";const a=document.createElement("div");a.style.cssText="position:absolute;left:12%;right:12%;bottom:9%;height:3px;background:rgba(0,0,0,.55);border-radius:1px;display:none;overflow:hidden;";const l=document.createElement("div");l.style.cssText="height:100%;width:100%;",a.appendChild(l),s.append(r,o,a),s.addEventListener("pointerdown",c=>{c.pointerType!=="mouse"&&(c.preventDefault(),c.stopPropagation(),this.setSelected(n))}),t.appendChild(s),this.cells.push(s),this.icons.push(r),this.counts.push(o),this.durTracks.push(a),this.durFills.push(l)}this.setSelected(0)}render(t){var e;for(let n=0;n<this.size;n++){const s=t[n]??null,r=this.icons[n],o=this.counts[n];if(s&&s.count>0){const l=Oi(s.id);r.style.backgroundImage=l?`url(${l})`:"none",o.textContent=s.count>1?String(s.count):""}else r.style.backgroundImage="none",o.textContent="";const a=s&&s.count>0?(e=Sr(s.id))==null?void 0:e.maxDurability:void 0;if(s&&a&&(s.dur??a)<a){const l=Math.max(0,(s.dur??a)/a);this.durTracks[n].style.display="block",this.durFills[n].style.width=`${l*100}%`,this.durFills[n].style.background=`hsl(${Math.round(l*120)},85%,45%)`}else this.durTracks[n].style.display="none"}}setSelected(t){this.selected=(t%this.size+this.size)%this.size,this.cells.forEach((e,n)=>e.classList.toggle("selected",n===this.selected))}scroll(t){this.setSelected(this.selected+t)}get index(){return this.selected}}const _r=20,Ls=20,kc=10,qw=7,Yw=1,bd=6,Td=80,$w=10,Kw=30,jw=20;function Ll(){return{health:_r,food:Ls,saturation:5,exhaustion:0,foodTimer:0,oxygen:kc,oxygenTimer:0}}function Zw(i){return i.food>=qw}function Di(i,t){i.exhaustion=Math.min(i.exhaustion+t,40)}function ca(i,t){i.health=Math.max(0,i.health-t)}function Dl(i){return i.health<=0}function Jw(i,t){i.food=Math.min(Ls,i.food+t.nutrition),i.saturation=Math.min(i.saturation+t.nutrition*t.saturationModifier*2,i.food)}function Qw(i){return Math.max(0,Math.ceil(i-3))}function tE(i,t,e,n){return n?{fallDistance:0,damage:0}:e?{fallDistance:0,damage:Qw(i)}:{fallDistance:t<0?i-t:i,damage:0}}function eE(i){i.exhaustion>4&&(i.exhaustion-=4,i.saturation>0?i.saturation=Math.max(0,i.saturation-1):i.food=Math.max(0,i.food-1)),i.food>=Ls&&i.saturation>0&&i.health<_r?++i.foodTimer>=$w&&(i.health=Math.min(_r,i.health+1),Di(i,bd),i.foodTimer=0):i.food>=18&&i.health<_r?++i.foodTimer>=Td&&(i.health=Math.min(_r,i.health+1),Di(i,bd),i.foodTimer=0):i.food<=0?++i.foodTimer>=Td&&(i.health>Yw&&ca(i,1),i.foodTimer=0):i.foodTimer=0}function nE(i,t){if(!t){i.oxygen=kc,i.oxygenTimer=0;return}i.oxygenTimer++,i.oxygen>0?i.oxygenTimer>=Kw&&(i.oxygen=Math.max(0,i.oxygen-1),i.oxygenTimer=0):i.oxygenTimer>=jw&&(ca(i,2),i.oxygenTimer=0)}const Ad=i=>`url(${js(`textures/ui/${i}.png`)})`;class iE{constructor(t,e,n=10){x(this,"hearts");x(this,"foods");x(this,"bubbles",[]);x(this,"healthEl");x(this,"hungerEl");x(this,"oxygenEl");this.healthEl=t,this.hungerEl=e,this.oxygenEl=document.getElementById("oxygen"),this.hearts=this.build(t,n),this.foods=this.build(e,n),this.oxygenEl&&(this.bubbles=this.build(this.oxygenEl,n))}build(t,e){t.innerHTML="";const n=[];for(let s=0;s<e;s++){const r=document.createElement("div");r.className="hud-icon",t.appendChild(r),n.push(r)}return n}render(t){if(this.fill(this.hearts,t.health,"heart"),this.fill(this.foods,t.food,"food"),this.healthEl.classList.toggle("low",t.health<=4),this.hungerEl.classList.toggle("low",t.food<=4),this.oxygenEl){const e=t.oxygen<kc;if(this.oxygenEl.style.display=e?"flex":"none",e)for(let n=0;n<this.bubbles.length;n++)this.bubbles[n].style.backgroundImage=Ad(t.oxygen>n?"bubble_full":"bubble_empty")}}fill(t,e,n){for(let s=0;s<t.length;s++){const r=e-s*2,o=r>=2?"full":r===1?"half":"empty";t[s].style.backgroundImage=Ad(`${n}_${o}`)}}}function ha(i,t,e,n){const s=i[t];if(!e)return i[t]=null,s;if(!s)return i[t]=e,null;if(s.id===e.id){const r=Math.max(0,n(s.id)-s.count),o=Math.min(r,e.count);return s.count+=o,e.count-=o,e.count>0?e:null}return i[t]=e,s}function ua(i,t,e,n){const s=i[t];if(!e){if(!s)return null;const r=Math.ceil(s.count/2),o=s.count-r;return i[t]=o>0?{id:s.id,count:o}:null,{id:s.id,count:r}}return s?s.id===e.id?s.count<n(s.id)?(s.count+=1,e.count-=1,e.count>0?e:null):e:(i[t]=e,s):(i[t]={id:e.id,count:1},e.count-=1,e.count>0?e:null)}function Il(i,t,e,n,s=0,r=e.length){const o=i[t];if(!o)return;const a=Bs(e,o.id,o.count,n(o.id),s,r);i[t]=a>0?{id:o.id,count:a}:null}function sE(i,t,e){if(!t)return t;const n=t.id,s=e(n),r=i.filter(c=>{const h=c.get();return!h||h.id===n&&h.count<s});if(r.length===0)return t;const o=Math.floor(t.count/r.length);if(o===0)return t;let a=0;for(const c of r){const h=c.get(),u=h?h.count:0,d=Math.min(o,s-u);d<=0||(c.set({id:n,count:u+d}),a+=d)}const l=t.count-a;return l>0?{id:n,count:l}:null}function rE(i,t,e){if(!t)return t;const n=t.id,s=e(n);let r=t.count;for(const o of i){if(r<=0)break;const a=o.get();a?a.id===n&&a.count<s&&(a.count+=1,r--):(o.set({id:n,count:1}),r--)}return r>0?{id:n,count:r}:null}const Ro=["PPP"," S "," S "],Co=["PP","PS"," S"],Po=["P","S","S"],Lo=["P","P","S"],Do=["PP"," S"," S"];function we(i,t,e){return{type:"shaped",pattern:i,key:{P:t,S:"stick"},result:{item:e,count:1}}}const oE=[{type:"shapeless",ingredients:["oak_log"],result:{item:"oak_planks",count:4}},{type:"shapeless",ingredients:["flint","iron_ingot"],result:{item:"flint_and_steel",count:1}},{type:"shaped",pattern:["#","#"],key:{"#":"oak_planks"},result:{item:"stick",count:4}},{type:"shaped",pattern:["##","##"],key:{"#":"oak_planks"},result:{item:"crafting_table",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"string"},result:{item:"wool",count:1}},{type:"shaped",pattern:["###","# #","###"],key:{"#":"cobblestone"},result:{item:"furnace",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"sand"},result:{item:"sandstone",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"nether_quartz"},result:{item:"quartz_block",count:1}},{type:"shaped",pattern:["###","###","###"],key:{"#":"coal"},result:{item:"coal_block",count:1}},{type:"shapeless",ingredients:["coal_block"],result:{item:"coal",count:9}},{type:"shaped",pattern:["###","###","###"],key:{"#":"iron_ingot"},result:{item:"iron_block",count:1}},{type:"shapeless",ingredients:["iron_block"],result:{item:"iron_ingot",count:9}},{type:"shaped",pattern:["###","###","###"],key:{"#":"diamond"},result:{item:"diamond_block",count:1}},{type:"shapeless",ingredients:["diamond_block"],result:{item:"diamond",count:9}},{type:"shaped",pattern:["C","S"],key:{C:"coal",S:"stick"},result:{item:"torch",count:4}},{type:"shaped",pattern:["F","S","E"],key:{F:"flint",S:"stick",E:"feather"},result:{item:"arrow",count:4}},{type:"shaped",pattern:[" TS","T S"," TS"],key:{T:"stick",S:"string"},result:{item:"bow",count:1}},we(Ro,"oak_planks","wooden_pickaxe"),we(Co,"oak_planks","wooden_axe"),we(Po,"oak_planks","wooden_shovel"),we(Lo,"oak_planks","wooden_sword"),we(Do,"oak_planks","wooden_hoe"),we(Ro,"cobblestone","stone_pickaxe"),we(Co,"cobblestone","stone_axe"),we(Po,"cobblestone","stone_shovel"),we(Lo,"cobblestone","stone_sword"),we(Do,"cobblestone","stone_hoe"),we(Ro,"iron_ingot","iron_pickaxe"),we(Co,"iron_ingot","iron_axe"),we(Po,"iron_ingot","iron_shovel"),we(Lo,"iron_ingot","iron_sword"),we(Do,"iron_ingot","iron_hoe"),we(Ro,"diamond","diamond_pickaxe"),we(Co,"diamond","diamond_axe"),we(Po,"diamond","diamond_shovel"),we(Lo,"diamond","diamond_sword"),we(Do,"diamond","diamond_hoe")];function qp(i){return i&&i.count>=1?i.item:null}function aE(i){return i.map(t=>t.map(qp))}function lE(i){const t=[];for(const e of i)for(const n of e){const s=qp(n);s&&t.push(s)}return t}function Yp(i){let t=1/0,e=-1,n=1/0,s=-1;for(let o=0;o<i.length;o++)for(let a=0;a<i[o].length;a++)i[o][a]!==null&&(o<t&&(t=o),o>e&&(e=o),a<n&&(n=a),a>s&&(s=a));if(e===-1)return null;const r=[];for(let o=t;o<=e;o++)r.push(i[o].slice(n,s+1));return r}function cE(i){return i.pattern.map(t=>Array.from(t,e=>e===" "?null:i.key[e]??null))}function hE(i){return i.map(t=>[...t].reverse())}function Rd(i,t){if(i.length!==t.length)return!1;for(let e=0;e<i.length;e++){if(i[e].length!==t[e].length)return!1;for(let n=0;n<i[e].length;n++)if(i[e][n]!==t[e][n])return!1}return!0}function uE(i,t){const e=Yp(cE(i));return e?Rd(e,t)||Rd(hE(e),t):!1}function Cd(i){const t=new Map;for(const e of i)t.set(e,(t.get(e)??0)+1);return t}function dE(i,t){if(i.ingredients.length!==t.length)return!1;const e=Cd(i.ingredients),n=Cd(t);if(e.size!==n.size)return!1;for(const[s,r]of e)if(n.get(s)!==r)return!1;return!0}function fE(i){const t=lE(i);if(t.length===0)return null;const e=Yp(aE(i));for(const n of oE)if(n.type==="shaped"){if(e&&uE(n,e))return n}else if(dE(n,t))return n;return null}function pE(i){const t=fE(i);return t?{item:t.result.item,count:t.result.count}:null}const Nc=new Map,Fc=new Map;for(const i of on)i.id!==0&&(Nc.set(i.id,i.name),Fc.set(i.name,i.id));for(const i of KS){const t=ZS(i);t&&(Nc.set(i,t),Fc.set(t,i))}function Pd(i){const t=i.map(s=>s.map(r=>{if(!r)return null;const o=Nc.get(r.id);return o?{item:o,count:r.count}:null})),e=pE(t);if(!e)return null;const n=Fc.get(e.item);return n==null?null:{id:n,count:e.count}}function mE(i){for(const t of i)for(let e=0;e<t.length;e++){const n=t[e];n&&(n.count-=1,n.count<=0&&(t[e]=null))}}const cn=i=>ea(i),Nn=9,Ul=27,gE=420,vE=12;class _E{constructor(t){x(this,"root");x(this,"inv",null);x(this,"gridN",2);x(this,"craft",[]);x(this,"cursor",null);x(this,"open",!1);x(this,"cursorEl");x(this,"cursorIcon");x(this,"cursorCnt");x(this,"titleEl");x(this,"cgridEl");x(this,"outCell");x(this,"mainCells",[]);x(this,"hotbarCells",[]);x(this,"craftCells",[]);x(this,"drag",null);x(this,"onChange",null);x(this,"onClose",null);this.root=t,t.classList.add("hidden"),t.innerHTML=`
      <div class="inv-panel">
        <div class="inv-title-row">
          <div class="inv-title">合成</div>
          <button class="inv-close" type="button">关闭</button>
        </div>
        <div class="inv-top">
          <div class="inv-cgrid"></div>
          <div class="inv-arrow">▶</div>
          <div class="inv-out-wrap"></div>
        </div>
        <div class="inv-main"></div>
        <div class="inv-hotbar"></div>
        <div class="inv-hint">轻点拿放 · 长按放一个/拿一半 · Shift 快速转移 · E / Esc 关闭</div>
      </div>`,this.titleEl=t.querySelector(".inv-title"),t.querySelector(".inv-close").addEventListener("click",()=>{var s;return(s=this.onClose)==null?void 0:s.call(this)}),this.cgridEl=t.querySelector(".inv-cgrid");const e=t.querySelector(".inv-main"),n=t.querySelector(".inv-hotbar");for(let s=0;s<Ul;s++)this.mainCells.push(this.makeSlot(e,"main",s));for(let s=0;s<Nn;s++)this.hotbarCells.push(this.makeSlot(n,"hotbar",s));this.outCell=this.makeSlot(t.querySelector(".inv-out-wrap"),"output",0),this.outCell.el.classList.add("inv-out"),this.cursorEl=document.createElement("div"),this.cursorEl.className="inv-cursor",this.cursorIcon=document.createElement("div"),this.cursorIcon.className="slot-icon",this.cursorCnt=document.createElement("div"),this.cursorCnt.className="slot-count",this.cursorEl.append(this.cursorIcon,this.cursorCnt),this.cursorEl.style.display="none",this.cursorEl.style.pointerEvents="none",document.body.appendChild(this.cursorEl),document.addEventListener("pointermove",s=>{this.open&&(this.cursorEl.style.left=`${s.clientX}px`,this.cursorEl.style.top=`${s.clientY}px`,this.drag&&this.onDragMove(s))}),document.addEventListener("pointerup",s=>{this.open&&this.drag&&this.endDrag(s)}),document.addEventListener("pointercancel",s=>{var r;this.open&&((r=this.drag)==null?void 0:r.pointerId)===s.pointerId&&this.cancelDrag()})}makeSlot(t,e,n){const s=document.createElement("div");s.className="inv-slot",s.dataset.region=e,s.dataset.idx=String(n),s.style.touchAction="none";const r=document.createElement("div");r.className="slot-icon";const o=document.createElement("div");return o.className="slot-count",s.append(r,o),s.addEventListener("pointerdown",a=>{!a.isPrimary||a.pointerType==="mouse"&&a.button!==0&&a.button!==2||(a.preventDefault(),this.beginDrag(e,n,a))}),s.addEventListener("contextmenu",a=>a.preventDefault()),t.appendChild(s),{el:s,icon:r,cnt:o}}isOpen(){return this.open}show(t,e){this.inv=t,this.gridN=e,this.craft=Array.from({length:e},()=>Array(e).fill(null)),this.buildCraftGrid(e),this.titleEl.textContent=e>=3?"工作台":"背包",this.open=!0,this.root.classList.remove("hidden"),this.render()}hide(){var t;if(this.cancelDrag(),this.inv){for(const e of this.craft)for(let n=0;n<e.length;n++){const s=e[n];s&&(Bs(this.inv,s.id,s.count,cn(s.id)),e[n]=null)}this.cursor&&(Bs(this.inv,this.cursor.id,this.cursor.count,cn(this.cursor.id)),this.cursor=null)}this.open=!1,this.root.classList.add("hidden"),this.cursorEl.style.display="none",(t=this.onChange)==null||t.call(this)}buildCraftGrid(t){this.cgridEl.innerHTML="",this.cgridEl.style.gridTemplateColumns=`repeat(${t}, 1fr)`,this.craftCells=[];for(let e=0;e<t*t;e++)this.craftCells.push(this.makeSlot(this.cgridEl,"craft",e))}beginDrag(t,e,n){var s,r;if(this.inv){if(this.cursorEl.style.left=`${n.clientX}px`,this.cursorEl.style.top=`${n.clientY}px`,t==="output"){this.takeOutput(),this.render(),(s=this.onChange)==null||s.call(this);return}if(n.shiftKey){this.quickMoveFrom(t,e),this.render(),(r=this.onChange)==null||r.call(this);return}this.drag={region:t,i:e,right:n.button===2,started:!1,mode:this.cursor?"distribute":"move",swept:[],sweptKeys:new Set,sweptCells:[],pointerId:n.pointerId,touch:n.pointerType==="touch",startX:n.clientX,startY:n.clientY,holdTimer:null,longPressed:!1},this.drag.touch&&this.startTouchHold(this.drag)}}onDragMove(t){const e=this.drag;if(!e||!this.inv||e.pointerId!==t.pointerId||(e.touch&&!e.longPressed&&Math.hypot(t.clientX-e.startX,t.clientY-e.startY)>vE&&this.clearTouchHold(e),e.longPressed))return;const n=this.slotAt(t);if(!e.started){if(!n||n.region===e.region&&n.i===e.i)return;e.started=!0,e.mode==="distribute"?(this.addSwept(e,e.region,e.i),this.addSwept(e,n.region,n.i)):(this.applyClick(e.region,e.i,!1),this.render());return}e.mode==="distribute"&&n&&this.addSwept(e,n.region,n.i)}endDrag(t){var n;const e=this.drag;if(!(!e||e.pointerId!==t.pointerId)){this.clearTouchHold(e),this.drag=null;for(const s of(e==null?void 0:e.sweptCells)??[])s.el.classList.remove("inv-drag-hi");if(this.inv&&!e.longPressed){if(!e.started)this.applyClick(e.region,e.i,e.right);else if(e.mode==="distribute")this.cursor=e.right?rE(e.swept,this.cursor,cn):sE(e.swept,this.cursor,cn);else{const s=this.slotAt(t);s&&s.region!=="output"&&!(s.region===e.region&&s.i===e.i)&&this.applyClick(s.region,s.i,!1)}this.render(),(n=this.onChange)==null||n.call(this)}}}cancelDrag(){if(this.drag){this.clearTouchHold(this.drag);for(const t of this.drag.sweptCells)t.el.classList.remove("inv-drag-hi");this.drag=null}}startTouchHold(t){t.holdTimer=window.setTimeout(()=>{var e;t.holdTimer=null,!(!this.open||this.drag!==t||t.started||!this.inv)&&(t.longPressed=!0,this.applyClick(t.region,t.i,!0),this.render(),(e=this.onChange)==null||e.call(this))},gE)}clearTouchHold(t){t.holdTimer!==null&&(window.clearTimeout(t.holdTimer),t.holdTimer=null)}addSwept(t,e,n){if(e==="output")return;const s=`${e}:${n}`;if(t.sweptKeys.has(s))return;t.sweptKeys.add(s),t.swept.push(this.slotRef(e,n));const r=this.cellOf(e,n);r&&(r.el.classList.add("inv-drag-hi"),t.sweptCells.push(r))}applyClick(t,e,n){if(this.inv)if(t==="craft"){const s=this.gridN,r=this.craft[Math.floor(e/s)],o=e%s;this.cursor=n?ua(r,o,this.cursor,cn):ha(r,o,this.cursor,cn)}else{const s=t==="main"?Nn+e:e;this.cursor=n?ua(this.inv,s,this.cursor,cn):ha(this.inv,s,this.cursor,cn)}}slotRef(t,e){if(t==="craft"){const r=this.gridN,o=this.craft[Math.floor(e/r)],a=e%r;return{get:()=>o[a],set:l=>o[a]=l}}const n=this.inv,s=t==="main"?Nn+e:e;return{get:()=>n[s],set:r=>n[s]=r}}slotAt(t){const e=document.elementFromPoint(t.clientX,t.clientY),n=e==null?void 0:e.closest(".inv-slot");return!n||n.dataset.region===void 0?null:{region:n.dataset.region,i:Number(n.dataset.idx)}}cellOf(t,e){return t==="main"?this.mainCells[e]??null:t==="hotbar"?this.hotbarCells[e]??null:t==="craft"?this.craftCells[e]??null:null}quickMoveFrom(t,e){if(this.inv)if(t==="craft"){const n=this.gridN;Il(this.craft[Math.floor(e/n)],e%n,this.inv,cn)}else t==="main"?Il(this.inv,Nn+e,this.inv,cn,0,Nn):Il(this.inv,e,this.inv,cn,Nn,Nn+Ul)}takeOutput(){const t=Pd(this.craft);if(t){if(!this.cursor)this.cursor={id:t.id,count:t.count};else if(this.cursor.id===t.id&&this.cursor.count+t.count<=cn(t.id))this.cursor.count+=t.count;else return;mE(this.craft)}}render(){if(!this.inv)return;for(let e=0;e<Ul;e++)this.paint(this.mainCells[e],this.inv[Nn+e]);for(let e=0;e<Nn;e++)this.paint(this.hotbarCells[e],this.inv[e]);const t=this.gridN;for(let e=0;e<this.craftCells.length;e++)this.paint(this.craftCells[e],this.craft[Math.floor(e/t)][e%t]);this.paint(this.outCell,Pd(this.craft)),this.cursor?(this.cursorEl.style.display="block",this.fill(this.cursorIcon,this.cursorCnt,this.cursor)):this.cursorEl.style.display="none"}paint(t,e){this.fill(t.icon,t.cnt,e)}fill(t,e,n){if(n&&n.count>0){const s=Oi(n.id);s?(t.style.backgroundImage=`url(${s})`,t.textContent="",t.classList.remove("txt")):(t.style.backgroundImage="none",t.textContent=Up(n.id),t.classList.add("txt")),e.textContent=n.count>1?String(n.count):""}else t.style.backgroundImage="none",t.textContent="",t.classList.remove("txt"),e.textContent=""}}const $p=200,xE=64,Kp={[dM]:1,[fM]:fp,[Pc]:pp,[Lc]:mp,[Dc]:gp,[Ic]:vp},yE={[ap]:1600,[yM]:16e3,[xa]:300,[Ma]:300,[uM]:300,[Hf]:300,[op]:100,[lp]:200,[cp]:200,[hp]:200,[up]:200,[dp]:200},jp=i=>Kp[i],lc=i=>yE[i]??0,Ld=i=>lc(i)>0,ME=i=>i in Kp;function SE(){return{input:0,inputN:0,fuel:0,fuelN:0,output:0,outputN:0,burn:0,burnMax:0,cook:0}}function Zp(i){if(i.inputN<=0)return!1;const t=jp(i.input);return t===void 0?!1:i.outputN===0||i.output===t&&i.outputN<xE}function wE(i){const t=i.burn>0||i.cook>0,e=Zp(i);if(i.burn>0&&i.burn--,i.burn===0&&e&&i.fuelN>0&&lc(i.fuel)>0&&(i.burnMax=lc(i.fuel),i.burn=i.burnMax,i.fuelN--,i.fuelN===0&&(i.fuel=0)),i.burn>0&&e){if(i.cook++,i.cook>=$p){i.cook=0;const n=jp(i.input);i.inputN--,i.inputN===0&&(i.input=0),i.output=n,i.outputN++}}else i.cook=Math.max(0,i.cook-2);return t||i.burn>0||i.cook>0}function EE(i){return i.burn>0||i.fuelN>0&&Zp(i)}const ii=i=>ea(i),Io=9,Dd=27,bE=420,TE=12;class AE{constructor(t){x(this,"root");x(this,"inv",null);x(this,"furnace",null);x(this,"cursor",null);x(this,"open",!1);x(this,"cursorEl");x(this,"cursorIcon");x(this,"cursorCnt");x(this,"inputCell");x(this,"fuelCell");x(this,"outCell");x(this,"flameEl");x(this,"arrowFillEl");x(this,"mainCells",[]);x(this,"hotbarCells",[]);x(this,"touchPress",null);x(this,"onChange",null);x(this,"onClose",null);this.root=t,t.classList.add("hidden"),t.innerHTML=`
      <div class="inv-panel">
        <div class="inv-title-row">
          <div class="inv-title">熔炉</div>
          <button class="inv-close" type="button">关闭</button>
        </div>
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
        <div class="inv-hint">轻点拿放 · 长按放一个/拿一半 · 上槽放矿、下槽放燃料 · E / Esc 关闭</div>
      </div>`,t.querySelector(".inv-close").addEventListener("click",()=>{var r;return(r=this.onClose)==null?void 0:r.call(this)});const e=r=>this.bindSlot(t.querySelector(r));this.inputCell=e(".fur-input"),this.fuelCell=e(".fur-fuel"),this.outCell=e(".fur-out"),this.inputCell.el.addEventListener("pointerdown",r=>this.onFurnacePointerDown("input",r)),this.fuelCell.el.addEventListener("pointerdown",r=>this.onFurnacePointerDown("fuel",r)),this.outCell.el.addEventListener("pointerdown",r=>this.onFurnacePointerDown("output",r)),this.flameEl=t.querySelector(".fur-flame-fill"),this.arrowFillEl=t.querySelector(".fur-arrow-fill");const n=t.querySelector(".inv-main"),s=t.querySelector(".inv-hotbar");for(let r=0;r<Dd;r++)this.mainCells.push(this.makeInvSlot(n,"main",r));for(let r=0;r<Io;r++)this.hotbarCells.push(this.makeInvSlot(s,"hotbar",r));this.cursorEl=document.createElement("div"),this.cursorEl.className="inv-cursor",this.cursorIcon=document.createElement("div"),this.cursorIcon.className="slot-icon",this.cursorCnt=document.createElement("div"),this.cursorCnt.className="slot-count",this.cursorEl.append(this.cursorIcon,this.cursorCnt),this.cursorEl.style.display="none",this.cursorEl.style.pointerEvents="none",document.body.appendChild(this.cursorEl),document.addEventListener("pointermove",r=>{this.open&&(this.cursorEl.style.left=`${r.clientX}px`,this.cursorEl.style.top=`${r.clientY}px`,this.updateTouchPressMove(r))}),document.addEventListener("pointerup",r=>this.endTouchPress(r)),document.addEventListener("pointercancel",r=>{var o;((o=this.touchPress)==null?void 0:o.pointerId)===r.pointerId&&this.cancelTouchPress()})}bindSlot(t){t.classList.add("inv-slot"),t.style.touchAction="none";const e=document.createElement("div");e.className="slot-icon";const n=document.createElement("div");return n.className="slot-count",t.append(e,n),t.addEventListener("contextmenu",s=>s.preventDefault()),{el:t,icon:e,cnt:n}}makeInvSlot(t,e,n){const s=document.createElement("div");s.className="inv-slot",s.style.touchAction="none";const r=document.createElement("div");r.className="slot-icon";const o=document.createElement("div");return o.className="slot-count",s.append(r,o),s.addEventListener("pointerdown",a=>{this.onInventoryPointerDown(e,n,a)}),s.addEventListener("contextmenu",a=>a.preventDefault()),t.appendChild(s),{el:s,icon:r,cnt:o}}isOpen(){return this.open}show(t,e){this.inv=t,this.furnace=e,this.open=!0,this.root.classList.remove("hidden"),this.render()}hide(){var t;this.cancelTouchPress(),this.inv&&this.cursor&&(Bs(this.inv,this.cursor.id,this.cursor.count,ii(this.cursor.id)),this.cursor=null),this.open=!1,this.root.classList.add("hidden"),this.cursorEl.style.display="none",(t=this.onChange)==null||t.call(this)}onInventoryPointerDown(t,e,n){this.isSupportedPointer(n)&&(n.preventDefault(),this.positionCursor(n),n.pointerType==="touch"?this.beginTouchPress(n,s=>this.performInventoryClick(t,e,s,!1)):this.performInventoryClick(t,e,n.button===2,n.shiftKey))}onFurnacePointerDown(t,e){this.isSupportedPointer(e)&&(e.preventDefault(),this.positionCursor(e),e.pointerType==="touch"?this.beginTouchPress(e,n=>this.performFurnaceClick(t,n)):this.performFurnaceClick(t,e.button===2))}isSupportedPointer(t){return t.isPrimary&&(t.pointerType!=="mouse"||t.button===0||t.button===2)}positionCursor(t){this.cursorEl.style.left=`${t.clientX}px`,this.cursorEl.style.top=`${t.clientY}px`}performInventoryClick(t,e,n,s){var o;if(!this.inv)return;const r=t==="main"?Io+e:e;s?this.shiftToFurnace(r):this.cursor=n?ua(this.inv,r,this.cursor,ii):ha(this.inv,r,this.cursor,ii),this.render(),(o=this.onChange)==null||o.call(this)}shiftToFurnace(t){const e=this.furnace,n=this.inv;if(!e||!n)return;const s=n[t];if(!s)return;const r=Ld(s.id);if(r&&(e.fuel===0||e.fuel===s.id)){const o=ii(s.id)-e.fuelN,a=Math.min(o,s.count);e.fuel=s.id,e.fuelN+=a,s.count-=a,s.count<=0&&(n[t]=null)}else if(!r&&ME(s.id)&&(e.input===0||e.input===s.id)){const o=ii(s.id)-e.inputN,a=Math.min(o,s.count);e.input=s.id,e.inputN+=a,s.count-=a,s.count<=0&&(n[t]=null)}}performFurnaceClick(t,e){var s;const n=this.furnace;if(n){if(t==="output")this.takeOutput();else{const r=t==="input"?n.input:n.fuel,o=t==="input"?n.inputN:n.fuelN,a=[o>0?{id:r,count:o}:null];if(t==="fuel"&&this.cursor&&!Ld(this.cursor.id))return;this.cursor=e?ua(a,0,this.cursor,ii):ha(a,0,this.cursor,ii);const l=a[0];t==="input"?(n.input=(l==null?void 0:l.id)??0,n.inputN=(l==null?void 0:l.count)??0):(n.fuel=(l==null?void 0:l.id)??0,n.fuelN=(l==null?void 0:l.count)??0)}this.render(),(s=this.onChange)==null||s.call(this)}}beginTouchPress(t,e){this.cancelTouchPress();const n={pointerId:t.pointerId,startX:t.clientX,startY:t.clientY,holdTimer:null,moved:!1,longPressed:!1,activate:e};this.touchPress=n,n.holdTimer=window.setTimeout(()=>{n.holdTimer=null,!(!this.open||this.touchPress!==n||n.moved)&&(n.longPressed=!0,n.activate(!0))},bE)}updateTouchPressMove(t){const e=this.touchPress;!e||e.pointerId!==t.pointerId||e.longPressed||Math.hypot(t.clientX-e.startX,t.clientY-e.startY)<=TE||(e.moved=!0,this.clearTouchPressTimer(e))}endTouchPress(t){const e=this.touchPress;!e||e.pointerId!==t.pointerId||(this.clearTouchPressTimer(e),this.touchPress=null,!e.moved&&!e.longPressed&&e.activate(!1))}cancelTouchPress(){this.touchPress&&(this.clearTouchPressTimer(this.touchPress),this.touchPress=null)}clearTouchPressTimer(t){t.holdTimer!==null&&(window.clearTimeout(t.holdTimer),t.holdTimer=null)}takeOutput(){const t=this.furnace;!t||t.outputN<=0||(this.cursor?this.cursor.id===t.output&&this.cursor.count+t.outputN<=ii(t.output)&&(this.cursor.count+=t.outputN,t.output=0,t.outputN=0):(this.cursor={id:t.output,count:t.outputN},t.output=0,t.outputN=0))}render(){if(!this.inv||!this.furnace)return;const t=this.furnace;for(let e=0;e<Dd;e++)this.fill(this.mainCells[e],this.inv[Io+e]);for(let e=0;e<Io;e++)this.fill(this.hotbarCells[e],this.inv[e]);this.fill(this.inputCell,t.inputN>0?{id:t.input,count:t.inputN}:null),this.fill(this.fuelCell,t.fuelN>0?{id:t.fuel,count:t.fuelN}:null),this.fill(this.outCell,t.outputN>0?{id:t.output,count:t.outputN}:null),this.flameEl.style.height=`${t.burnMax>0?Math.round(t.burn/t.burnMax*100):0}%`,this.arrowFillEl.style.width=`${Math.round(t.cook/$p*100)}%`,this.cursor?(this.cursorEl.style.display="block",this.fillRaw(this.cursorIcon,this.cursorCnt,this.cursor)):this.cursorEl.style.display="none"}fill(t,e){this.fillRaw(t.icon,t.cnt,e)}fillRaw(t,e,n){if(n&&n.count>0){const s=Oi(n.id);s?(t.style.backgroundImage=`url(${s})`,t.textContent="",t.classList.remove("txt")):(t.style.backgroundImage="none",t.textContent=Up(n.id),t.classList.add("txt")),e.textContent=n.count>1?String(n.count):""}else t.style.backgroundImage="none",t.textContent="",t.classList.remove("txt"),e.textContent=""}}const kl=21,Nl=21;function Id(i,t,e,n,s,r){const o=(p,g)=>r==="x"?[e+p,n+g,s]:[e,n+g,s+p],a=(p,g)=>t(...o(p,g)),l=(p,g)=>i(...o(p,g));if(!a(0,0))return null;let c=0;for(;-c<kl&&a(c-1,0);)c--;let h=0;for(;h<kl&&a(h+1,0);)h++;let u=0;for(;-u<Nl&&a(0,u-1);)u--;let d=0;for(;d<Nl&&a(0,d+1);)d++;const f=h-c+1,m=d-u+1;if(f<2||f>kl||m<3||m>Nl)return null;for(let p=c;p<=h;p++)for(let g=u;g<=d;g++)if(!a(p,g))return null;for(let p=u;p<=d;p++)if(!l(c-1,p)||!l(h+1,p))return null;for(let p=c;p<=h;p++)if(!l(p,u-1)||!l(p,d+1))return null;const v=[];for(let p=c;p<=h;p++)for(let g=u;g<=d;g++)v.push(o(p,g));return{axis:r,inner:v}}function RE(i,t,e,n,s){return Id(i,t,e,n,s,"x")??Id(i,t,e,n,s,"z")}const Jp=31,CE=127,PE=191;function LE(i,t,e,n){const o=RE((a,l,c)=>i(a,l,c)===18,(a,l,c)=>{const h=i(a,l,c);return h===0||h===25},t,e+1,n);return o?o.inner:null}function DE(i,t,e){return i==="overworld"?[Math.floor(t/8),Math.floor(e/8)]:[t*8,e*8]}function IE(i,t,e,n){if(t==="overworld"){for(let o=PE;o>1;o--)if(Ee(i(e,o,n))&&!Ee(i(e,o+1,n)))return o+1;return null}const s=Jp+2,r=CE-8;for(let o=s;o<=r;o++){if(!Ee(i(e,o-1,n)))continue;let a=!1;for(let l=0;l<3;l++)if(tc(i(e,o+l,n))){a=!0;break}if(!a)return o}return null}function UE(i,t,e,n){let s=IE(i,t,e,n),r=!1;s===null&&(s=t==="nether"?Jp+10:64,r=!0);const o=new Map,a=(d,f,m)=>`${d},${f},${m}`,l=(d,f,m,v)=>{o.set(a(d,f,m),[d,f,m,v])},c=e,h=e+1,u=s+2;for(let d=e-1;d<=e+2;d++)for(let f=s-1;f<=s+3;f++)for(let m=n-1;m<=n+1;m++)l(d,f,m,0);for(let d=e-1;d<=e+2;d++)l(d,s-1,n,Bn),l(d,s+3,n,Bn);for(let d=s-1;d<=s+3;d++)l(e-1,d,n,Bn),l(e+2,d,n,Bn);for(let d=c;d<=h;d++)for(let f=s;f<=u;f++)l(d,f,n,ya);if(l(c,s-1,n-1,Bn),l(h,s-1,n-1,Bn),r)for(let d=e-1;d<=e+2;d++)for(let f=n-1;f<=n+1;f++)l(d,s-1,f,Bn);return{edits:[...o.values()],spawn:{x:c+.5,y:s,z:n+.5}}}const Fl=600;class kE{constructor(t){x(this,"geom",new Ne);x(this,"pos",new Float32Array(Fl*3));x(this,"col",new Float32Array(Fl*3));x(this,"posAttr");x(this,"colAttr");x(this,"points");this.posAttr=new ue(this.pos,3),this.colAttr=new ue(this.col,3),this.posAttr.setUsage(Dh),this.colAttr.setUsage(Dh),this.geom.setAttribute("position",this.posAttr),this.geom.setAttribute("color",this.colAttr),this.geom.setDrawRange(0,0);const e=new wc({size:.13,vertexColors:!0,sizeAttenuation:!0,transparent:!0,depthWrite:!1});this.points=new Df(this.geom,e),this.points.frustumCulled=!1,t.add(this.points)}sync(t){const e=Math.min(t.length,Fl);for(let n=0;n<e;n++){const s=t[n];this.pos[n*3]=s.x,this.pos[n*3+1]=s.y,this.pos[n*3+2]=s.z,this.col[n*3]=s.r,this.col[n*3+1]=s.g,this.col[n*3+2]=s.b}this.geom.setDrawRange(0,e),this.posAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0}}const NE=`
varying vec3 vW;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vW = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`.trim(),FE=`
uniform float uTime;
uniform vec3 uTint;
uniform vec3 uSunDir;
varying vec3 vW;
float mwH2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float mwVN(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  float a = mwH2(i); float b = mwH2(i + vec2(1.0, 0.0)); float c = mwH2(i + vec2(0.0, 1.0)); float d = mwH2(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float mwFBM(vec2 p){
  float n = 0.0; float amp = 0.5;
  for (int o = 0; o < 4; o++) { n += mwVN(p) * amp; p = p * 2.13 + vec2(17.3, 9.1); amp *= 0.5; }
  return n / 0.9375;
}
void main() {
  vec2 p = vW.xz * 0.006;
  // domain warp(一次,两处 fbm 共用)：云缘卷曲成团,不是均匀雾斑；第二时间尺度让云形慢慢演变
  vec2 q = p + 0.42 * vec2(mwFBM(p * 1.7 + vec2(0.0, uTime * 0.0020)), mwFBM(p * 1.7 + vec2(5.2, uTime * 0.0017)));
  vec2 drift = vec2(uTime * 0.0110, uTime * 0.0032); // 整体缓飘
  float d = mwFBM(q + drift);
  float cov = smoothstep(0.55, 0.595, d); // 收紧云缘，避免低分辨率烟片感
  if (cov < 0.004) discard;
  // 体积感：朝太阳水平方向偏移再采一次,密度差→向阳侧亮、厚处底部暗(白天云要白,暗部别压狠)
  vec2 sunXZ = normalize(uSunDir.xz + vec2(1e-4, 0.0));
  float d2 = mwFBM(q + drift + sunXZ * 0.085);
  float lit = clamp(0.76 + (d2 - d) * 6.5, 0.5, 1.04);
  float dense = smoothstep(0.50, 0.88, d); // 厚处更白亮
  vec3 col = uTint * mix(0.86, 1.02, dense) * lit;
  float dist = length(vW.xz - cameraPosition.xz);
  float fade = 1.0 - smoothstep(360.0, 620.0, dist); // 远处淡出融进地平线雾
  gl_FragColor = vec4(col, cov * 0.8 * fade);
  #include <colorspace_fragment>
}
`.trim();function OE(){const t=new Float32Array(2550),e=new Float32Array(850*3),n=310;let s=12345;const r=()=>(s=s*1664525+1013904223>>>0,s/4294967296);for(let c=0;c<850;c++){const h=r()*2-1,u=r()*Math.PI*2,d=Math.sqrt(1-h*h);t[c*3]=Math.cos(u)*d*n,t[c*3+1]=Math.sin(u)*d*n,t[c*3+2]=h*n;const f=.35+r()*.65;e[c*3]=f,e[c*3+1]=f,e[c*3+2]=Math.min(1,f*(.92+r()*.16))}const o=new Ne;o.setAttribute("position",new ue(t,3)),o.setAttribute("color",new ue(e,3));const a=new wc({size:1.7,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),l=new Df(o,a);return l.frustumCulled=!1,l}function zE(){const i=document.createElement("canvas");i.width=i.height=16;const t=i.getContext("2d");return t.fillStyle="#fff6c0",t.fillRect(1,1,14,14),t.fillStyle="#ffe25a",t.fillRect(3,3,10,10),t.fillStyle="#ffcf26",t.fillRect(5,5,6,6),Qp(i)}function BE(){const i=document.createElement("canvas");i.width=i.height=16;const t=i.getContext("2d");return t.fillStyle="#eef2f7",t.fillRect(2,2,12,12),t.fillStyle="#c2ccd8",t.fillRect(5,4,3,3),t.fillRect(9,7,2,2),t.fillRect(4,9,2,3),t.fillRect(10,11,2,2),Qp(i)}function HE(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=64/2,s=64/2,r=e.createRadialGradient(n,n,0,n,n,s);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,240,1)"),r.addColorStop(.7,"rgba(255,251,214,1)"),r.addColorStop(.88,"rgba(255,248,200,0.5)"),r.addColorStop(1,"rgba(255,246,190,0)"),e.fillStyle=r,e.beginPath(),e.arc(n,n,s,0,Math.PI*2),e.fill();const o=new Gi(t);return o.minFilter=fe,o.magFilter=fe,o.colorSpace=Qt,o}function GE(){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),n=128/2,s=128/2,r=e.createRadialGradient(n,n,0,n,n,s);r.addColorStop(0,"rgba(255,255,238,0.30)"),r.addColorStop(.25,"rgba(255,252,224,0.16)"),r.addColorStop(.55,"rgba(255,249,208,0.07)"),r.addColorStop(.8,"rgba(255,247,198,0.02)"),r.addColorStop(1,"rgba(255,245,188,0)"),e.fillStyle=r,e.beginPath(),e.arc(n,n,s,0,Math.PI*2),e.fill();const o=new Gi(t);return o.minFilter=fe,o.magFilter=fe,o.colorSpace=Qt,o}function VE(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=64/2,s=64/2,r=e.createRadialGradient(n-s*.15,n-s*.15,0,n,n,s);r.addColorStop(0,"rgba(245,248,255,1)"),r.addColorStop(.55,"rgba(220,228,242,1)"),r.addColorStop(.82,"rgba(190,200,220,1)"),r.addColorStop(.92,"rgba(170,180,205,0.5)"),r.addColorStop(1,"rgba(150,165,195,0)"),e.fillStyle=r,e.beginPath(),e.arc(n,n,s,0,Math.PI*2),e.fill();const o=[[.38,.32,.09],[.62,.55,.07],[.28,.6,.055],[.55,.3,.05],[.45,.68,.065]];for(const[l,c,h]of o){const u=n+(l-.5)*44.8,d=n+(c-.5)*(64*.7),f=h*64,m=e.createRadialGradient(u,d,0,u,d,f);m.addColorStop(0,"rgba(140,150,170,0.28)"),m.addColorStop(.6,"rgba(160,168,185,0.12)"),m.addColorStop(1,"rgba(170,178,195,0)"),e.fillStyle=m,e.beginPath(),e.arc(u,d,f,0,Math.PI*2),e.fill()}const a=new Gi(t);return a.minFilter=fe,a.magFilter=fe,a.colorSpace=Qt,a}function Qp(i){const t=new Gi(i);return t.magFilter=le,t.minFilter=le,t.colorSpace=Qt,t}function Uo(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Ol(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=Uo(e,n),c=Uo(e+1,n),h=Uo(e,n+1),u=Uo(e+1,n+1);return l*(1-o)*(1-a)+c*o*(1-a)+h*(1-o)*a+u*o*a}function WE(i,t){return Ol(i,t)*.6+Ol(i*2.3+5.1,t*2.3-3.7)*.3+Ol(i*4.7,t*4.7)*.1}const Fn=16,XE=5,ko=28,Ud=196,kd=.18,qE=.62,YE=.012;function $E(i,t){return WE(i*kd,t*kd)>qE}const KE=[{o:[[1,-1,-1],[1,1,-1],[1,1,1],[1,-1,1]],s:.82},{o:[[-1,-1,1],[-1,1,1],[-1,1,-1],[-1,-1,-1]],s:.82},{o:[[-1,1,-1],[-1,1,1],[1,1,1],[1,1,-1]],s:1},{o:[[-1,-1,1],[-1,-1,-1],[1,-1,-1],[1,-1,1]],s:.6},{o:[[1,-1,1],[1,1,1],[-1,1,1],[-1,-1,1]],s:.88},{o:[[-1,-1,-1],[-1,1,-1],[1,1,-1],[1,-1,-1]],s:.88}];function jE(i,t,e,n,s,r,o,a,l){const c=o/2,h=a/2,u=l/2;for(const d of KE){const f=i.length/3;for(const[m,v,p]of d.o)i.push(n+m*c,s+v*h,r+p*u),t.push(d.s,d.s,d.s);e.push(f,f+1,f+2,f,f+2,f+3)}}class ZE{constructor(t){x(this,"sun");x(this,"moon");x(this,"realSun");x(this,"sunGlow");x(this,"realMoon");x(this,"voxelClouds");x(this,"realClouds");x(this,"cloudUniforms");x(this,"stars");x(this,"starGroup");x(this,"dir",new N);x(this,"drift",0);x(this,"cloudOriginX",NaN);x(this,"cloudOriginZ",NaN);x(this,"lq","off");x(this,"dim","overworld");const e=r=>new me({map:r,transparent:!0,depthWrite:!1,fog:!1});this.sun=new Kt(new qe(46,46),e(zE())),this.moon=new Kt(new qe(38,38),e(BE())),this.realSun=new Kt(new qe(52,52),e(HE())),this.sunGlow=new Kt(new qe(88,88),new me({map:GE(),transparent:!0,depthWrite:!1,fog:!1,blending:Wl})),this.realMoon=new Kt(new qe(44,44),e(VE())),this.realSun.visible=this.sunGlow.visible=this.realMoon.visible=!1;const n=new me({vertexColors:!0,color:16777215,transparent:!0,opacity:.85,depthWrite:!1,side:Be});this.voxelClouds=new Kt(new Ne,n),this.voxelClouds.frustumCulled=!1,this.cloudUniforms={uTime:{value:0},uTint:{value:new Ct(1,1,1)},uSunDir:{value:new N(.5,.8,.28)}};const s=new fn({uniforms:this.cloudUniforms,vertexShader:NE,fragmentShader:FE,transparent:!0,depthWrite:!1,side:Be});this.realClouds=new Kt(new qe(1400,1400),s),this.realClouds.rotation.x=-Math.PI/2,this.realClouds.frustumCulled=!1,this.realClouds.visible=!1,this.stars=OE(),this.starGroup=new rn,this.starGroup.add(this.stars),this.stars.renderOrder=-900;for(const r of[this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon])r.renderOrder=-850;this.realClouds.renderOrder=-800,this.voxelClouds.renderOrder=-800,t.add(this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon,this.voxelClouds,this.realClouds,this.starGroup)}setDimension(t){if(this.dim=t,t==="nether")for(const e of[this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon,this.voxelClouds,this.realClouds,this.starGroup])e.visible=!1;else this.starGroup.visible=!0,this.setLightingQuality(this.lq)}setLightingQuality(t){this.lq=t;const e=t!=="off";this.voxelClouds.visible=!e,this.realClouds.visible=e,this.sun.visible=!e,this.moon.visible=!e,this.realSun.visible=e,this.sunGlow.visible=e,this.realMoon.visible=e}rebuildVoxelClouds(t,e){const n=[],s=[],r=[],o=Fn-1;for(let l=0;l<ko;l++)for(let c=0;c<ko;c++)$E(t+l,e+c)&&jE(n,s,r,l*Fn+Fn/2,0,c*Fn+Fn/2,o,XE,o);const a=new Ne;a.setAttribute("position",new Ae(n,3)),a.setAttribute("color",new Ae(s,3)),a.setIndex(r),this.voxelClouds.geometry.dispose(),this.voxelClouds.geometry=a}update(t,e){if(this.dim==="nether")return;const n=t/Ze*Math.PI*2;this.dir.set(Math.cos(n),Math.sin(n),.1).normalize();const s=280;this.sun.position.copy(e).addScaledVector(this.dir,s),this.sun.lookAt(e),this.moon.position.copy(e).addScaledVector(this.dir,-s),this.moon.lookAt(e),this.realSun.position.copy(this.sun.position),this.realSun.lookAt(e),this.sunGlow.position.copy(this.sun.position),this.sunGlow.lookAt(e),this.realMoon.position.copy(this.moon.position),this.realMoon.lookAt(e),this.drift+=YE,this.starGroup.position.copy(e),this.starGroup.rotation.z=n;const r=ic(t)/11;if(this.stars.material.opacity=Math.pow(r,1.5)*.9,this.realClouds.visible){this.realClouds.position.set(e.x,Ud,e.z),this.cloudUniforms.uTime.value=this.drift;const l=sc(t).worldTint;this.cloudUniforms.uTint.value.setRGB(l[0],l[1],l[2],Qt),this.cloudUniforms.uSunDir.value.copy(this.dir);return}const o=Math.floor((e.x-this.drift)/Fn)-ko/2,a=Math.floor(e.z/Fn)-ko/2;(o!==this.cloudOriginX||a!==this.cloudOriginZ)&&(this.rebuildVoxelClouds(o,a),this.cloudOriginX=o,this.cloudOriginZ=a),this.voxelClouds.position.set(o*Fn+this.drift,Ud,a*Fn)}}const JE=16,QE={1:[.54,.54,.54],2:[.55,.42,.25],3:[.42,.67,.25],4:[.53,.53,.53],5:[.91,.86,.63],6:[.45,.33,.18],7:[.69,.54,.31],8:[.34,.34,.34],10:[.25,.48,.19],11:[.5,.36,.2],35:[.18,.69,.72],36:[.16,.68,.71],16:[.44,.7,.28],17:[.44,.7,.28],256:[.79,.16,.13],296:[.28,.78,.75]},gs=i=>QE[i]??[.5,.5,.5];function Ai(i,t,e,n,s,r=Math.random){const o=[];for(let a=0;a<s;a++){const l=r()*Math.PI*2,c=.6+r()*1.8;o.push({x:i+(r()-.5)*.6,y:t+(r()-.5)*.6,z:e+(r()-.5)*.6,vx:Math.cos(l)*c,vy:1.5+r()*2.5,vz:Math.sin(l)*c,age:0,life:.4+r()*.45,r:n[0],g:n[1],b:n[2]})}return o}function tb(i,t){const e=[];for(const n of i)n.age+=t,!(n.age>=n.life)&&(n.vy-=JE*t,n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,e.push(n));return e}const tm="mineworld.saves";function Oc(){try{const i=localStorage.getItem(tm);return i?JSON.parse(i):[]}catch{return[]}}function em(i){try{localStorage.setItem(tm,JSON.stringify(i))}catch(t){console.warn("[mineworld] 存档写入失败(localStorage 配额满或不可用):",t)}}function eb(){return Oc().sort((i,t)=>t.lastPlayed-i.lastPlayed)}function nb(i){const t=i.trim();if(!t)return null;if(/^-?\d+$/.test(t))return Math.abs(Math.floor(Number(t)))%2e9;let e=0;for(let n=0;n<t.length;n++)e=Math.imul(e,31)+t.charCodeAt(n)|0;return Math.abs(e)%2e9}function ib(i,t,e="survival"){const n={id:`${Date.now().toString(36)}-${Math.floor(Math.random()*1e6).toString(36)}`,name:i.trim()||"新的世界",seed:t??Math.floor(Math.random()*2e9),gameMode:e,lastPlayed:Date.now(),edits:{}};return nm(n),n}function nm(i){const t=Oc().filter(e=>e.id!==i.id);t.push(i),em(t)}function sb(i){em(Oc().filter(t=>t.id!==i))}function ys(i,t,e,n){return i==="nether"?`nether:${t},${e},${n}`:`${t},${e},${n}`}function cc(i){if(i.startsWith("nether:")){const[s,r,o]=i.slice(7).split(",").map(Number);return{dim:"nether",x:s,y:r,z:o}}const[t,e,n]=i.split(",").map(Number);return{dim:"overworld",x:t,y:e,z:n}}function rb(i,t,e,n){const r=na/2,o=Math.floor(i-r-.1),a=Math.floor(i+r+.1),l=Math.floor(t-.1),c=Math.floor(t+zi),h=Math.floor(e-r-.1),u=Math.floor(e+r+.1);for(let d=o;d<=a;d++)for(let f=l;f<=c;f++)for(let m=h;m<=u;m++)if(AM(n(d,f,m)))return!0;return!1}const ob=[.8,.8,1,.42,.8,.8],ab=14,lb=16,cb=10,Nd=14;function im(i){return Math.max(0,Math.min(1,i))}function dr(i,t){return Number.isFinite(i)?i:t}function No(i,t){return 1-Math.exp(-Math.max(0,Math.min(i,.2))*t)}function sm(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function hb(i){const t=sm(i)%360/360;return new Ct().setHSL(t,.6,.48).getHex()}function ub(i,t,e){const n=im(e);let s=t-i;return s=((s+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,i+s*n}function db(i,t,e){const n=new $e(i,t,e),s=[];for(let r=0;r<6;r++){const o=ob[r];for(let a=0;a<4;a++)s.push(o,o,o)}return n.setAttribute("color",new Ae(s,3)),n}function Ri(i,t,e,n,s,r,o,a){const l=new Kt(db(e,n,s),t);return l.position.set(r,o,a),i.add(l),l}function fr(i,t){const e=new me({color:i,vertexColors:!0});return t.push({material:e,base:i.clone()}),e}function hc(i){var e;const t=(e=i.name)==null?void 0:e.trim();return t?t.slice(0,18):i.id.slice(0,10)||"玩家"}function fb(i,t,e,n,s,r){const o=Math.min(r,n/2,s/2);i.beginPath(),i.moveTo(t+o,e),i.arcTo(t+n,e,t+n,e+s,o),i.arcTo(t+n,e+s,t,e+s,o),i.arcTo(t,e+s,t,e,o),i.arcTo(t,e,t+n,e,o),i.closePath()}function pb(i){const t=document.createElement("canvas");t.width=256,t.height=64;const e=t.getContext("2d");if(!e)throw new Error("无法创建远端玩家名字牌画布");const n=new Gi(t);n.colorSpace=Qt,n.minFilter=fe,n.magFilter=fe;const s=new Rf({map:n,transparent:!0,depthWrite:!1,depthTest:!1}),r=new Oy(s);r.position.set(0,2.38,0),r.scale.set(1.65,.4125,1);const o={canvas:t,context:e,texture:n,material:s,sprite:r};return rm(o,i),o}function rm(i,t){const{canvas:e,context:n}=i;n.clearRect(0,0,e.width,e.height),n.fillStyle="rgba(0, 0, 0, 0.58)",fb(n,7,7,e.width-14,e.height-14,11),n.fill(),n.font="bold 27px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.lineWidth=4,n.strokeStyle="rgba(0, 0, 0, 0.7)",n.strokeText(t,e.width/2,e.height/2+1),n.fillStyle="#ffffff",n.fillText(t,e.width/2,e.height/2+1),i.texture.needsUpdate=!0}function mb(i){const t=sm(i),e=t%360/360,n=[16041889,14260842,11036225,7356973],s=new Ct(n[(t>>>9)%n.length]),r=new Ct(hb(i)),o=new Ct().setHSL((e+.57)%1,.35,.31),a=new Ct().setHSL((t>>>17)%360/360,.32,.18+(t>>>25)%7*.025);return{skin:s,shirt:r,trousers:o,hair:a}}function gb(i){const t=new rn;t.name=`remote-player:${i.id}`;const e=[],n=mb(i.id),s=fr(n.skin,e),r=fr(n.shirt,e),o=fr(n.trousers,e),a=fr(n.hair,e),l=fr(new Ct(2041648),e);Ri(t,r,.5,.72,.26,0,1.16,0),Ri(t,s,.5,.5,.5,0,1.77,0),Ri(t,a,.52,.12,.52,0,2.02,0),Ri(t,l,.016,.1,.09,.258,1.8,-.13),Ri(t,l,.016,.1,.09,.258,1.8,.13);const c=[],h=[];for(const f of[-.13,.13]){const m=new rn;m.position.set(0,.8,f),Ri(m,o,.24,.8,.24,0,-.4,0),t.add(m),c.push(m)}for(const f of[-.36,.36]){const m=new rn;m.position.set(0,1.47,f),Ri(m,r,.24,.72,.24,0,-.36,0),t.add(m),h.push(m)}const u=pb(hc(i));t.add(u.sprite);const d=new N(i.x,i.y,i.z);return{group:t,legs:c,arms:h,materials:e,target:d.clone(),displayed:d,targetYaw:i.yaw,displayedYaw:i.yaw,walkPhase:0,walkAmount:0,brightness:1,tag:u,label:hc(i)}}function Fd(i){i.group.traverse(t=>{t instanceof Kt&&t.geometry.dispose()});for(const t of i.materials)t.material.dispose();i.tag.texture.dispose(),i.tag.material.dispose()}class vb{constructor(t){x(this,"models",new Map);this.scene=t}sync(t,e,n){const s=new Set,r=Math.max(0,Math.min(e,.2)),o=im(dr(n,1));for(const a of t){if(!a.id||s.has(a.id))continue;s.add(a.id);let l=this.models.get(a.id);if(!l)l=gb(a),this.models.set(a.id,l),this.scene.add(l.group);else{const v=dr(a.x,l.target.x),p=dr(a.y,l.target.y),g=dr(a.z,l.target.z),y=l.target.clone();l.target.set(v,p,g),y.distanceToSquared(l.target)>Nd*Nd&&l.displayed.copy(l.target),l.targetYaw=dr(a.yaw,l.targetYaw);const _=hc(a);_!==l.label&&(l.label=_,rm(l.tag,_))}const c=No(r,ab),h=l.displayed.clone();l.displayed.lerp(l.target,c);const u=l.displayed.distanceTo(h),d=u>4e-4;l.walkAmount+=((d?1:0)-l.walkAmount)*No(r,11),d&&(l.walkPhase+=u*11),l.displayedYaw=ub(l.displayedYaw,l.targetYaw,No(r,lb)),l.brightness+=(o-l.brightness)*No(r,cb);for(const v of l.materials)v.material.color.copy(v.base).multiplyScalar(l.brightness);l.tag.material.color.setScalar(.68+l.brightness*.32);const f=Math.sin(l.walkPhase)*.72*l.walkAmount;l.legs.forEach((v,p)=>v.rotation.z=p===0?f:-f),l.arms.forEach((v,p)=>v.rotation.z=p===0?-f*.72:f*.72);const m=Math.abs(Math.sin(l.walkPhase))*.032*l.walkAmount;l.group.position.set(l.displayed.x,l.displayed.y+m,l.displayed.z),l.group.rotation.set(0,-l.displayedYaw,0)}for(const[a,l]of this.models)s.has(a)||(this.scene.remove(l.group),Fd(l),this.models.delete(a))}dispose(){for(const[,t]of this.models)this.scene.remove(t.group),Fd(t);this.models.clear()}}const Fo=50,_b=4.5,xb=5,Od=9,yb=300,Mb=-125,xn=0,zd=[{id:3,count:64},{id:2,count:64},{id:1,count:64},{id:4,count:64},{id:7,count:64},{id:6,count:64},{id:5,count:64},{id:21,count:64},{id:14,count:64},{id:15,count:64},{id:26,count:64},{id:32,count:64},{id:33,count:64},{id:34,count:64},{id:36,count:64},{id:18,count:64},{id:19,count:64},{id:20,count:64},{id:10,count:64},{id:30,count:64},{id:8,count:64},{id:12,count:64},{id:35,count:64},{id:11,count:64},{id:13,count:64},{id:27,count:64},{id:28,count:64},{id:269,count:1},{id:Rp,count:1},{id:Cp,count:1},{id:Pp,count:1},{id:Lp,count:1},{id:Dp,count:1},{id:ws,count:1},{id:Ui,count:64}];function Sb(){const i=Uc();for(let t=0;t<zd.length&&t<i.length;t++)i[t]={...zd[t]};return i}const wb=1.6,Bd=.005,Eb=.1,bb=.05,Tb=.2,Ab=.005,Rb=.1,Cb=3,Hd=16,Gd=88,Vd=48,Pb=3,Lb=4,Db=8,Ib=50,Wd=["pig","cow","sheep","chicken"],Ub=1200,kb=10,zl=.25,Xd=1,qd=.6,Nb=2.4,Fb=9,Yd=.42,Ob=.36;function zb(i){if(i==null)return 1;const t=Sr(i);return(t==null?void 0:t.kind)==="sword"?t.tier===1?4:t.tier===2?5:t.tier===3?6:7:1}function Bb(i,t,e,n,s,r,o,a,l,c,h,u){let d=0,f=1/0;const m=(v,p,g,y)=>{if(Math.abs(p)<1e-9)return v>=g&&v<=y;let _=(g-v)/p,b=(y-v)/p;return _>b&&([_,b]=[b,_]),d=Math.max(d,_),f=Math.min(f,b),f>=d};return!m(i,n,o,c)||!m(t,s,a,h)||!m(e,r,l,u)?null:d}class Hb{constructor(t,e,n=null){x(this,"canvas");x(this,"save");x(this,"renderer");x(this,"multiplayer");x(this,"remotePlayers");x(this,"look");x(this,"touch");x(this,"world");x(this,"physWorld");x(this,"chunks");x(this,"highlight");x(this,"underwaterEl");x(this,"normalFog");x(this,"underFog",new Os(2383754,.1,16));x(this,"player");x(this,"prev");x(this,"hotbar");x(this,"inv");x(this,"crack");x(this,"dropRenderer");x(this,"hand");x(this,"particleFx");x(this,"skyObjects");x(this,"dimension","overworld");x(this,"portalCooldown",0);x(this,"portalTimer",0);x(this,"portalArmed",!0);x(this,"particles",[]);x(this,"digFxT",0);x(this,"invUI");x(this,"craftingGrid",0);x(this,"furnaceUI");x(this,"furnaces",new Map);x(this,"furnaceKey",null);x(this,"touchHoldAction",null);x(this,"touchDigging",!1);x(this,"touchDigHit",null);x(this,"drops",[]);x(this,"arrows",[]);x(this,"arrowRenderer");x(this,"drawingBow",!1);x(this,"bowCharge",0);x(this,"mobs",[]);x(this,"mobRenderer");x(this,"mobRng");x(this,"spawnWorld");x(this,"surfaceY",(t,e)=>ze(t,e,this.save.seed));x(this,"mobSpawnTick",0);x(this,"digging",!1);x(this,"lastMeleeMs",0);x(this,"digTarget",null);x(this,"digProgress",0);x(this,"fluidSim",new ww);x(this,"fluidGrid");x(this,"fluidTick",0);x(this,"wateredChunks",new Set);x(this,"worldTime");x(this,"fov",70);x(this,"actualSprinting",!1);x(this,"shadowTick",99);x(this,"evictCt",0);x(this,"last",0);x(this,"acc",0);x(this,"survival");x(this,"statusBar");x(this,"worldSpawn");x(this,"dead",!1);x(this,"creative");x(this,"flying",!1);x(this,"flyTapWindow",0);x(this,"fallDistance",0);x(this,"hurtCd",0);x(this,"coordEl");x(this,"coordOn",!1);x(this,"eating",!1);x(this,"eatProgress",0);x(this,"eatFxT",0);x(this,"crouching",!1);x(this,"camEye",kn);x(this,"decayQueue",[]);x(this,"texturePack");x(this,"lightingQuality");x(this,"renderDistance");x(this,"_godSunUV",new Bt);x(this,"_godSunColor",new Ct);x(this,"_godSunWorld",new N);x(this,"_godFwd",new N);x(this,"hurtWindowMax",0);x(this,"skyDarkenNow",0);x(this,"entityLight",(t,e,n)=>this.chunks.brightnessAt(t,e,n,this.skyDarkenNow));var d,f;const s=Zf();ju(s.texturePack),this.canvas=t,this.save=e,this.creative=e.gameMode==="creative",this.renderer=new tS(t),this.multiplayer=n,this.remotePlayers=new vb(this.renderer.scene),this.normalFog=this.renderer.scene.fog,this.underwaterEl=document.getElementById("underwater"),this.hotbar=new Xw(document.getElementById("hotbar"),Od),this.inv=e.inv?Lw(e.inv):this.creative?Sb():Uc(),this.hotbar.render(this.inv);const r=e.survival;this.survival=r&&r.health>0?{...Ll(),...r,foodTimer:0}:Ll(),this.statusBar=new iE(document.getElementById("health"),document.getElementById("hunger")),this.statusBar.render(this.survival),this.worldTime=e.worldTime??TS,this.fluidGrid={isSolid:(m,v,p)=>v<0||v>=pe||Ee(this.world.getBlock(m,v,p)),amount:(m,v,p)=>this.world.waterAmount(m,v,p),isSource:(m,v,p)=>this.world.isWaterSource(m,v,p),isFalling:(m,v,p)=>this.world.isWaterFalling(m,v,p),setWater:(m,v,p,g,y,_)=>this.world.setWater(m,v,p,g,y,_),getBlock:(m,v,p)=>this.world.getBlock(m,v,p),setBlock:(m,v,p,g)=>this.edit(m,v,p,g)},this.dimension=e.currentDimension??"overworld",this.buildDimension(this.dimension),this.texturePack=s.texturePack,this.lightingQuality=s.lightingQuality,this.renderDistance=s.renderDistance;const o=ec(this.texturePack);this.chunks=new rp(this.renderer.scene,this.world,o),this.renderer.setWaterRefractionSink((m,v,p,g)=>this.chunks.setWaterRefraction(m,v,p,g)),this.renderer.setWaterReflectionSink((m,v)=>this.chunks.setWaterReflection(m,v)),this.chunks.setLightingQuality(s.lightingQuality),this.setRenderDistance(this.renderDistance),this.multiplayer&&this.bindMultiplayer(this.multiplayer),this.crack=new NS(this.renderer.scene),this.dropRenderer=new a1(this.renderer.scene,o),this.arrowRenderer=new R1(this.renderer.scene),this.mobRenderer=new Sw(this.renderer.scene),this.mobRng=zf((e.seed^2654435769)>>>0),this.spawnWorld={getBlock:(m,v,p)=>this.world.getBlock(m,v,p)},this.hand=new g1(o),this.particleFx=new kE(this.renderer.scene),this.skyObjects=new ZE(this.renderer.scene),this.skyObjects.setLightingQuality(s.lightingQuality),this.skyObjects.setDimension(this.dimension),this.invUI=new _E(document.getElementById("inventory")),this.furnaceUI=new AE(document.getElementById("furnace")),this.coordEl=document.createElement("div"),this.coordEl.style.cssText="position:fixed;left:8px;top:8px;z-index:30;padding:4px 8px;font:14px Zpix,monospace;color:#fff;background:rgba(0,0,0,.45);white-space:pre;display:none;pointer-events:none;text-shadow:1px 1px 0 #000;",document.body.appendChild(this.coordEl),this.furnaceUI.onChange=()=>this.hotbar.render(this.inv),this.furnaceUI.onClose=()=>this.closeFurnace(),this.invUI.onChange=()=>this.hotbar.render(this.inv),this.invUI.onClose=()=>this.closeCrafting(),this.physWorld={isSolid:(m,v,p)=>Ee(this.world.getBlock(m,v,p)),isWater:(m,v,p)=>yn(this.world.getBlock(m,v,p))};const a=((d=e.playerByDimension)==null?void 0:d[this.dimension])??e.player;this.worldSpawn=this.findSpawn(e.seed);const l=a?{x:a.x,y:a.y,z:a.z}:this.worldSpawn;this.player={pos:{...l},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.chunks.update(jt(Math.floor(l.x)),jt(Math.floor(l.z)),2,999);const c=((f=e.mobsByDimension)==null?void 0:f[this.dimension])??e.mobs;if(c&&c.length)for(const m of c)this.mobs.push(ud(m));else for(let m=0;m<4;m++)this.mobs.push(...cd(Wd[m%4],l.x,l.z,this.mobRng,this.spawnWorld,this.surfaceY,6,26));if(e.furnaces)for(const[m,v]of Object.entries(e.furnaces))this.furnaces.set(m,v);const h=new $e(1.001,1.001,1.001);this.highlight=new By(new Hy(h),new Lf({color:0,transparent:!0,opacity:.35})),this.highlight.visible=!1,this.renderer.scene.add(this.highlight);const u=Xp();this.look=new kw(t,!u),this.look.yaw=a?a.yaw:Math.atan2(-l.z,-l.x),this.look.pitch=a?a.pitch:-.18,this.touch=u?new Ww(document.getElementById("touch-controls"),{look:(m,v)=>this.look.rotate(m,v),interactTap:()=>this.onTouchInteractTap(),interactHoldStart:()=>this.beginTouchHoldAction(),interactHoldEnd:()=>this.endTouchHoldAction(),interactHoldCancel:()=>this.cancelTouchHoldAction(),inventory:()=>{this.furnaceKey?this.closeFurnace():this.craftingGrid>0?this.closeCrafting():this.openCrafting(2)},pause:()=>window.dispatchEvent(new Event("mineworld:touch-pause"))}):null,t.addEventListener("contextmenu",m=>m.preventDefault()),t.addEventListener("mousedown",m=>{document.pointerLockElement===t&&(m.button===0?this.beginPrimaryAction():m.button===2&&this.onUseDown())}),window.addEventListener("mouseup",m=>{m.button===0?this.stopDigging():m.button===2&&(this.releaseBow(),this.stopEating())}),document.addEventListener("pointerlockchange",()=>{this.touch||document.pointerLockElement!==t&&(this.stopDigging(),this.drawingBow=!1,this.bowCharge=0,this.stopEating())}),window.addEventListener("keydown",m=>{if(m.code==="KeyE"){this.furnaceKey?this.closeFurnace():this.craftingGrid>0?this.closeCrafting():this.isGameplayActive()&&this.openCrafting(2);return}if(m.code==="F3"){m.preventDefault(),this.coordOn=!this.coordOn,this.coordEl.style.display=this.coordOn?"block":"none";return}if(m.code==="Escape"&&this.furnaceKey){this.closeFurnace();return}if(m.code==="Escape"&&this.craftingGrid>0){this.closeCrafting();return}const v=Number(m.key);Number.isInteger(v)&&v>=1&&v<=Od&&this.hotbar.setSelected(v-1)}),t.addEventListener("wheel",m=>{m.preventDefault(),this.hotbar.scroll(Math.sign(m.deltaY))},{passive:!1})}isGameplayActive(){var t;return((t=this.touch)==null?void 0:t.isActive)??document.pointerLockElement===this.canvas}usesTouchControls(){return this.touch!==null}setTouchActive(t){var e;(e=this.touch)==null||e.setActive(t&&!this.dead&&this.craftingGrid===0&&!this.furnaceKey)}attachMultiplayer(t){return this.multiplayer!==null?!1:(this.multiplayer=t,this.bindMultiplayer(t),this.publishMultiplayerState(),!0)}bindMultiplayer(t){t.setBlockHandler(e=>this.applyRemoteBlockEdit(e)),t.setWorldTimeHandler(e=>this.setNetworkWorldTime(e))}readMovement(){var n;const t=Iw();if(!((n=this.touch)!=null&&n.isActive))return t;const e=this.touch.readMove();return{forward:Math.max(-1,Math.min(1,t.forward+e.forward)),right:Math.max(-1,Math.min(1,t.right+e.right)),sprint:t.sprint||e.sprint,jumpHeld:t.jumpHeld||e.jumpHeld,crouch:t.crouch||e.crouch}}publishMultiplayerState(){if(!this.multiplayer)return;const t=this.player.pos;this.multiplayer.sendState({x:t.x,y:t.y,z:t.z,yaw:this.look.yaw,pitch:this.look.pitch,dimension:this.dimension})}beginPrimaryAction(t){if(!this.isGameplayActive())return;this.touchDigging=!1,this.touchDigHit=null;const e=this.mobUnderRay(t);if(e){const n=performance.now();n-this.lastMeleeMs>=500&&(this.attackMob(e,t),this.lastMeleeMs=n);return}this.touchDigging=t!==void 0,this.touchDigHit=t?this.rayHitFor(t):null,this.digging=!0,this.digTarget=null}stopDigging(){this.digging=!1,this.touchDigging=!1,this.touchDigHit=null,this.digProgress=0,this.digTarget=null,this.crack.hide()}onTouchInteractTap(){if(!this.isGameplayActive())return;const t=this.rayHit();if(this.useTargetedBlock(t))return;const e=this.inv[this.hotbar.index];this.tryIgnitePortal(t,(e==null?void 0:e.id)??null)||this.placeBlock(t)}shouldUseHeldItemOnTouchHold(){const t=this.inv[this.hotbar.index];return!t||t.count<=0?!1:t.id===ws?vd(this.inv,Ui)>0:Sl(t.id)&&this.survival.food<Ls}beginTouchHoldAction(){if(!(!this.isGameplayActive()||this.touchHoldAction!==null)){if(this.shouldUseHeldItemOnTouchHold()&&this.beginHeldItemUse()){this.touchHoldAction="use";return}this.touchHoldAction="primary",this.beginPrimaryAction(this.crosshairRay())}}endTouchHoldAction(){const t=this.touchHoldAction;if(this.touchHoldAction=null,t==="primary"){this.stopDigging();return}t==="use"&&(this.releaseBow(),this.stopEating())}cancelTouchHoldAction(){const t=this.touchHoldAction;if(this.touchHoldAction=null,t==="primary"){this.stopDigging();return}t==="use"&&(this.drawingBow=!1,this.bowCharge=0,this.stopEating())}buildDimension(t){this.world=new Kf(this.save.seed,t),this.world.editHook=(e,n,s)=>{for(const r in this.save.edits){const o=cc(r);o.dim===t&&o.x>>4===e&&o.z>>4===n&&s.set(o.x&15,o.y,o.z&15,this.save.edits[r])}};for(const e of Object.keys(this.save.edits)){const n=cc(e);n.dim===t&&(this.world.setBlock(n.x,n.y,n.z,this.save.edits[e]),this.fluidSim.activate(n.x,n.y,n.z))}}switchDimension(t,e){var o,a,l;((o=this.save).playerByDimension??(o.playerByDimension={}))[this.dimension]={x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.look.yaw,pitch:this.look.pitch},((a=this.save).mobsByDimension??(a.mobsByDimension={}))[this.dimension]=this.mobs.map(hd);const n=this.world;this.dimension=t,this.save.currentDimension=t,this.buildDimension(t),this.chunks.setWorld(this.world),n.dispose(),this.mobs.length=0;for(const c of((l=this.save.mobsByDimension)==null?void 0:l[t])??[])this.mobs.push(ud(c));this.player={pos:{...e},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.skyObjects.setDimension(t);const s=jt(Math.floor(e.x)),r=jt(Math.floor(e.z));this.chunks.update(s,r,2,999),this.chunks.flushMesh(64),this.portalCooldown=60}snapshot(){var e,n;this.save.player={x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.look.yaw,pitch:this.look.pitch},this.save.inv=Pw(this.inv);const t=this.survival;return this.save.survival={health:t.health,food:t.food,saturation:t.saturation,exhaustion:t.exhaustion,oxygen:t.oxygen,oxygenTimer:t.oxygenTimer},this.save.worldTime=this.worldTime,this.save.mobs=this.mobs.map(hd),this.save.furnaces=Object.fromEntries(this.furnaces),this.save.currentDimension=this.dimension,((e=this.save).playerByDimension??(e.playerByDimension={}))[this.dimension]={...this.save.player},((n=this.save).mobsByDimension??(n.mobsByDimension={}))[this.dimension]=this.save.mobs,this.save.lastPlayed=Date.now(),this.save}findSpawn(t){for(let e=1;e<160;e++)for(let n=-e;n<=e;n++)for(const[s,r]of[[n,-e],[n,e],[-e,n],[e,n]]){const o=ze(s,r,t),a=(c,h)=>this.world.getBlock(c,o+1,h)===0&&this.world.getBlock(c,o+2,h)===0,l=this.world.getBlock(s,o,r)!==0&&this.world.getBlock(s,o-1,r)!==0&&this.world.getBlock(s,o-2,r)!==0;if(o>be&&o<=be+4&&l&&a(s,r)&&a(s+1,r)&&a(s-1,r)&&a(s,r+1)&&a(s,r-1))return{x:s+.5,y:o+1,z:r+.5}}return{x:.5,y:be+3,z:.5}}async preloadSpawn(t=3){const e=jt(Math.floor(this.player.pos.x)),n=jt(Math.floor(this.player.pos.z));for(let l=-t;l<=t;l++)for(let c=-t;c<=t;c++)this.world.request(e+c,n+l);await new Promise(l=>{const c=()=>{let h=!0;for(let u=-t;u<=t&&h;u++)for(let d=-t;d<=t&&h;d++)this.world.peek(e+d,n+u)||(h=!1);h?l():setTimeout(c,30)};c()});const s=(t+1)*wt,r=Math.floor(this.player.pos.x),o=Math.floor(this.player.pos.z);gd(this.fluidSim,{isWater:(l,c,h)=>yn(this.world.getBlock(l,c,h)),isAir:(l,c,h)=>this.world.getBlock(l,c,h)===xn},{minX:r-s,maxX:r+s,minZ:o-s,maxZ:o+s,minY:Math.max(1,be-48),maxY:Math.min(pe-1,be+2)}),Ew(this.fluidSim,this.fluidGrid,1200);for(let l=-t;l<=t;l++)for(let c=-t;c<=t;c++)this.wateredChunks.add(`${e+c},${n+l}`);const a=Math.ceil((t*2+1)**2/4)+1;for(let l=0;l<a+240&&(this.chunks.update(e,n,t,4),this.chunks.flushMesh(8),await new Promise(c=>requestAnimationFrame(()=>c())),!(l>=a&&!this.chunks.meshBusy()));l++);}activateNearbyWater(){const n=jt(Math.floor(this.player.pos.x)),s=jt(Math.floor(this.player.pos.z)),r=Math.max(1,be-48),o=Math.min(pe-1,be+2);let a=0;for(const l of bw(n,s,4,this.wateredChunks)){if(a>=3)break;const[c,h]=l.split(",").map(Number);this.world.peek(c,h)&&(gd(this.fluidSim,{isWater:(u,d,f)=>yn(this.world.getBlock(u,d,f)),isAir:(u,d,f)=>this.world.getBlock(u,d,f)===xn},{minX:c*wt,maxX:c*wt+wt-1,minZ:h*wt,maxZ:h*wt+wt-1,minY:r,maxY:o}),this.wateredChunks.add(l),a++)}}start(){this.last=performance.now(),this.publishMultiplayerState();const t=e=>{var h,u;requestAnimationFrame(t);const n=Math.min(e-this.last,100)/1e3;this.acc+=e-this.last,this.last=e,this.acc>250&&(this.acc=250);const s=this.isGameplayActive();for(;s&&this.acc>=Fo;){this.prev=this.player;const d=this.readMovement(),f=Uw()||(((h=this.touch)==null?void 0:h.consumeJump())??!1);this.creative&&f&&(this.flyTapWindow>0?(this.flying=!this.flying,this.flyTapWindow=0):this.flyTapWindow=6),this.flyTapWindow>0&&this.flyTapWindow--,this.creative||(this.flying=!1),this.crouching=this.flying?!1:d.crouch,this.actualSprinting=d.sprint&&(this.creative||Zw(this.survival)),this.player=E1(this.player,{forward:d.forward,right:d.right,yaw:this.look.yaw,jump:f,swimUp:d.jumpHeld,sprint:this.actualSprinting,crouch:this.flying?!1:d.crouch,slow:this.eating,fly:this.flying,flyUp:d.jumpHeld,flyDown:d.crouch},this.physWorld),this.publishMultiplayerState(),this.stepSurvival(this.actualSprinting,f),++this.worldTime>=Ze&&(this.worldTime=0),++this.fluidTick>=5&&(this.fluidTick=0,this.activateNearbyWater(),this.fluidSim.tick(this.fluidGrid),this.chunks.remeshDirty());for(const m of this.furnaces.values())EE(m)&&wE(m);this.furnaceKey&&this.furnaceUI.render(),this.tickMobs(),this.tickArrows(),this.tickLeafDecay(),this.portalCooldown>0&&this.portalCooldown--,this.tickPortalTravel(),this.acc-=Fo}s||(this.acc=0);const r=n>.026?3:(n>.018,4);this.chunks.update(jt(Math.floor(this.player.pos.x)),jt(Math.floor(this.player.pos.z)),this.renderDistance,r,Math.cos(this.look.yaw),Math.sin(this.look.yaw));const o=performance.now()+6;for(;this.chunks.meshQueueLen()>0&&performance.now()<o;)this.chunks.flushMesh(1);if(++this.evictCt>=45){this.evictCt=0;const d=Math.max(this.renderDistance+4,12);this.world.evictBeyond(jt(Math.floor(this.player.pos.x)),jt(Math.floor(this.player.pos.z)),d)}this.chunks.cullToView(this.player.pos.x,this.player.pos.z,Math.cos(this.look.yaw),Math.sin(this.look.yaw));const a=s&&this.actualSprinting?80:70;this.fov+=(a-this.fov)*.15,this.renderer.camera.fov=this.fov,this.renderer.camera.updateProjectionMatrix(),s?(this.updateMining(n),this.updateDrops(n),this.updateEating(n),this.updateBow(n),this.statusBar.render(this.survival),this.digging&&this.hand.swing()):this.crack.hide(),this.chunks.animateWater(n),this.updateDayNight(),this.skyObjects.update(this.worldTime,this.renderer.camera.position),++this.shadowTick>=6&&(this.shadowTick=0,this.chunks.updateSun(this.worldTime,this.player.pos.x,this.player.pos.y,this.player.pos.z),this.renderer.markShadowDirty()),this.updateWater(),this.updateHighlight(),this.updateCamera(this.acc/Fo),this.particles=tb(this.particles,n),this.particleFx.sync(this.particles),this.mobRenderer.sync(this.mobs,n,this.entityLight),this.remotePlayers.sync(((u=this.multiplayer)==null?void 0:u.remotePlayers.filter(d=>d.dimension===this.dimension))??[],n,this.entityLight(this.player.pos.x,this.player.pos.y+kn,this.player.pos.z)),this.arrowRenderer.sync(this.arrows);const l=this.inv[this.hotbar.index];this.hand.setHeld(l?l.id:null),this.hand.setEating(s&&this.eating);const c=Math.min(1,Math.hypot(this.player.vel.x,this.player.vel.z)/.22);if(this.hand.update(n,s?c:0),this.hand.setBrightness(this.entityLight(this.player.pos.x,this.player.pos.y+kn,this.player.pos.z)),this.hand.camera.aspect!==this.renderer.camera.aspect&&this.hand.resize(this.renderer.camera.aspect),this.coordOn){const d=this.player.pos,f=this.chunks.pipelineStats();this.coordEl.textContent=`XYZ  ${Math.floor(d.x)} / ${Math.floor(d.y)+Mb} / ${Math.floor(d.z)}
区块 已上屏${f.meshed} 可见${f.visible} 派发中${f.pending} 待上屏${f.queued}`}this.updateGodRays(),this.renderer.render(),this.renderer.renderOverlay(this.hand.scene,this.hand.camera)};requestAnimationFrame(t)}stepSurvival(t,e){if(this.creative){this.fallDistance=0;return}this.hurtCd>0&&this.hurtCd--;const n=this.player.pos.x-this.prev.pos.x,s=this.player.pos.z-this.prev.pos.z,r=this.player.pos.y-this.prev.pos.y;t&&Di(this.survival,Eb*Math.hypot(n,s)),e&&Di(this.survival,t?Tb:bb);const o=Math.floor(this.player.pos.x),a=Math.floor(this.player.pos.z),l=yn(this.world.getBlock(o,Math.floor(this.player.pos.y),a)),c=tE(this.fallDistance,r,this.player.onGround,l);this.fallDistance=c.fallDistance,c.damage>0&&(this.hurtPlayer(c.damage,0,0,!0),Di(this.survival,Rb)),rb(this.player.pos.x,this.player.pos.y,this.player.pos.z,(m,v,p)=>this.world.getBlock(m,v,p))&&this.hurtPlayer(1,0,0,!0);const h=tc(this.world.getBlock(o,Math.floor(this.player.pos.y),a)),u=tc(this.world.getBlock(o,Math.floor(this.player.pos.y+.9),a));(h||u)&&this.hurtPlayer(4,0,0,!0);const d=yn(this.world.getBlock(o,Math.floor(this.player.pos.y+kn),a)),f=this.survival.health;nE(this.survival,d),this.survival.health<f&&this.flashHurt(),eE(this.survival),Dl(this.survival)&&!this.dead&&this.die()}flashHurt(){this.hand.hurtShake();const t=document.getElementById("hurt");t&&(t.classList.remove("flash"),t.offsetWidth,t.classList.add("flash"))}hurtPlayer(t,e,n,s=!1){if(!this.creative){if(this.hurtCd>0){t>this.hurtWindowMax&&(ca(this.survival,t-this.hurtWindowMax),this.hurtWindowMax=t,this.flashHurt(),Dl(this.survival)&&!this.dead&&this.die());return}if(this.hurtCd=10,this.hurtWindowMax=t,ca(this.survival,t),this.flashHurt(),!s){const r=Math.hypot(e,n)||1;this.player.kbx=e/r*Yd,this.player.kbz=n/r*Yd,this.player.vel.y=Ob}Dl(this.survival)&&!this.dead&&this.die()}}die(){this.dead=!0,this.stopDigging(),this.stopEating();const t=Math.floor(this.player.pos.x),e=Math.floor(this.player.pos.y),n=Math.floor(this.player.pos.z);for(let s=0;s<this.inv.length;s++){const r=this.inv[s];r&&r.count>0&&this.drops.push(_n(r.id,t,e,n,Math.random,r.count,r.dur)),this.inv[s]=null}this.hotbar.render(this.inv),this.dropRenderer.sync(this.drops,this.entityLight),this.touch?(this.touch.setActive(!1),window.dispatchEvent(new Event("mineworld:touch-death"))):document.exitPointerLock()}isDead(){return this.dead}setTexturePack(t){if(t===this.texturePack)return;this.texturePack=t,ju(t);const e=ec(t);this.chunks.setAtlas(e),this.hand.setAtlas(e),this.dropRenderer.setAtlas(e),this.hotbar.render(this.inv)}setLightingQuality(t){this.lightingQuality=t,this.chunks.setLightingQuality(t),this.skyObjects.setLightingQuality(t),t==="off"&&this.renderer.setGodRays(null)}setRenderDistance(t){this.renderDistance=t;const e=t*16;this.normalFog instanceof Os&&(this.normalFog.near=e*.72,this.normalFog.far=e),this.chunks.setFogFar(e)}respawn(){this.survival=Ll(),this.dead=!1,this.fallDistance=0;const t=this.worldSpawn;this.player={pos:{...t},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.chunks.update(jt(Math.floor(t.x)),jt(Math.floor(t.z)),2,999),this.statusBar.render(this.survival)}useTargetedBlock(t){return t?this.world.getBlock(t.x,t.y,t.z)===Hf?(this.openCrafting(3),!0):this.world.getBlock(t.x,t.y,t.z)===Iu?(this.openFurnace(t.x,t.y,t.z),!0):!1:!1}tryIgnitePortal(t,e){if(!t||e!==Ap||this.world.getBlock(t.x,t.y,t.z)!==Bn)return!1;const n=LE((s,r,o)=>this.world.getBlock(s,r,o),t.x,t.y,t.z);if(!n)return!1;for(const[s,r,o]of n)this.edit(s,r,o,ya);return!0}beginHeldItemUse(){const t=this.inv[this.hotbar.index];return t&&t.id===ws&&vd(this.inv,Ui)>0?(this.drawingBow=!0,this.bowCharge=0,!0):t&&t.count>0&&Sl(t.id)&&this.survival.food<Ls?(this.eating=!0,this.eatProgress=0,!0):!1}onUseDown(){const t=this.rayHit();if(this.useTargetedBlock(t))return;const e=this.inv[this.hotbar.index];this.tryIgnitePortal(t,(e==null?void 0:e.id)??null)||this.beginHeldItemUse()||this.placeBlock(t)}updateBow(t){if(!this.drawingBow)return;const e=this.inv[this.hotbar.index];if(!e||e.id!==ws){this.drawingBow=!1,this.bowCharge=0;return}this.bowCharge=Math.min(this.bowCharge+t,Xd)}releaseBow(){if(!this.drawingBow)return;this.drawingBow=!1;const t=this.bowCharge;this.bowCharge=0;const e=this.inv[this.hotbar.index];if(!e||e.id!==ws||t<zl||Cw(this.inv,Ui,1)<1)return;this.hotbar.render(this.inv);const n=(t-zl)/(Xd-zl),s=qd+n*(Nb-qd),r=Math.max(1,Math.round(2+n*(Fb-2))),o=Math.cos(this.look.yaw),a=Math.sin(this.look.yaw),l=Math.cos(this.look.pitch),c=Math.sin(this.look.pitch),h=this.player.pos.x,u=this.player.pos.y+kn,d=this.player.pos.z;this.arrows.push(sd(h+o*l*.4,u+c*.4,d+a*l*.4,o*l,c,a*l,s,!0,r)),this.hand.swing()}isCraftingOpen(){return this.craftingGrid>0}openCrafting(t){this.craftingGrid=t,this.invUI.show(this.inv,t),this.touch?this.touch.setActive(!1):document.exitPointerLock()}closeCrafting(){this.craftingGrid=0,this.invUI.hide(),this.touch?this.touch.setActive(!this.dead):this.canvas.requestPointerLock()}openFurnace(t,e,n){const s=`${t},${e},${n}`;let r=this.furnaces.get(s);r||(r=SE(),this.furnaces.set(s,r)),this.furnaceKey=s,this.furnaceUI.show(this.inv,r),this.touch?this.touch.setActive(!1):document.exitPointerLock()}closeFurnace(){this.furnaceKey=null,this.furnaceUI.hide(),this.touch?this.touch.setActive(!this.dead):this.canvas.requestPointerLock()}stopEating(){this.eating=!1,this.eatProgress=0}updateEating(t){if(!this.eating)return;const e=this.hotbar.index,n=this.inv[e];if(!n||n.count<=0||!Sl(n.id)||this.survival.food>=Ls){this.stopEating();return}if(this.eatProgress+=t,this.eatFxT+=t,this.eatFxT>=.09){this.eatFxT=0;const s=Math.cos(this.look.yaw),r=Math.sin(this.look.yaw),o=Math.cos(this.look.pitch),a=Math.sin(this.look.pitch),l=this.player.pos.x+s*o*.4,c=this.player.pos.y+kn-.18+a*.4,h=this.player.pos.z+r*o*.4;this.particles.push(...Ai(l,c,h,gs(n.id),2))}if(this.eatProgress>=wb){const s=jS(n.id),r=_d(this.inv,e);s&&r!==null&&(Jw(this.survival,s),this.hotbar.render(this.inv)),this.eatProgress=0}}crosshairRay(){const t={x:this.player.pos.x,y:this.player.pos.y+kn,z:this.player.pos.z},e=Math.cos(this.look.yaw),n=Math.sin(this.look.yaw),s=Math.cos(this.look.pitch),r=Math.sin(this.look.pitch);return{origin:t,direction:{x:e*s,y:r,z:n*s}}}rayHitFor(t){return Hu(t.origin,t.direction,this.creative?xb:_b,(e,n,s)=>Nu(this.world.getBlock(e,n,s)))}rayHit(){return this.rayHitFor(this.crosshairRay())}edit(t,e,n,s){var r;this.world.setBlock(t,e,n,s),this.save.edits[ys(this.dimension,t,e,n)]=s,this.fluidSim.activate(t,e,n),this.chunks.remeshDirty(),(r=this.multiplayer)==null||r.sendBlock({dimension:this.dimension,x:t,y:e,z:n,id:s})}applyRemoteBlockEdit(t){t.dimension!=="overworld"&&t.dimension!=="nether"||!Number.isInteger(t.x)||!Number.isInteger(t.y)||!Number.isInteger(t.z)||!Number.isInteger(t.id)||t.y<0||t.y>=pe||(this.save.edits[ys(t.dimension,t.x,t.y,t.z)]=t.id,t.dimension===this.dimension&&this.world.peek(jt(t.x),jt(t.z))&&(this.world.setBlock(t.x,t.y,t.z,t.id),this.fluidSim.activate(t.x,t.y,t.z),this.chunks.remeshDirty()))}setNetworkWorldTime(t){if(!Number.isFinite(t))return;const e=Math.floor(t)%Ze;this.worldTime=e<0?e+Ze:e}editDim(t,e,n,s,r){this.save.edits[ys(t,e,n,s)]=r}worldAt(t,e,n,s,r){if(t===this.dimension)return this.world.getBlock(e,n,s);const o=this.save.edits[ys(t,e,n,s)];if(o!==void 0)return o;if(n<0||n>=pe)return 0;const a=jt(e),l=jt(s),c=`${t}:${a},${l}`;let h=r==null?void 0:r.get(c);return h||(h=$f(a,l,this.save.seed,t),r==null||r.set(c,h)),h.get(Ke(e),n,Ke(s))}tickPortalTravel(){var h;const t=this.player.pos,e=Math.floor(t.x),n=Math.floor(t.y),s=Math.floor(t.z),r=SM(this.world.getBlock(e,n,s));if(this.portalTimer=r?this.portalTimer+Fo/1e3:0,r||(this.portalArmed=!0),!r||!this.portalArmed||this.portalCooldown!==0||this.portalTimer<4)return;const o=this.dimension==="overworld"?"nether":"overworld",a=`${this.dimension}:${e},${n},${s}`,l=(h=this.save).portalLinks??(h.portalLinks={});let c=l[a];if(!c){const u=new Map,[d,f]=DE(this.dimension,t.x,t.z),m=UE((v,p,g)=>this.worldAt(o,v,p,g,u),o,d,f);u.clear();for(const[v,p,g,y]of m.edits)this.editDim(o,v,p,g,y);c=[m.spawn.x,m.spawn.y,m.spawn.z],l[a]=c,l[`${o}:${Math.floor(c[0])},${Math.floor(c[1])},${Math.floor(c[2])}`]=[t.x,t.y,t.z]}this.portalArmed=!1,this.portalTimer=0,this.switchDimension(o,{x:c[0],y:c[1],z:c[2]})}queueLeafDecay(t,e,n){for(const s of sS((r,o,a)=>this.world.getBlock(r,o,a),t,e,n))this.decayQueue.some(r=>r.x===s.x&&r.y===s.y&&r.z===s.z)||this.decayQueue.push({x:s.x,y:s.y,z:s.z,t:40+Math.floor(Math.random()*160)})}tickLeafDecay(){if(this.decayQueue.length!==0)for(let t=this.decayQueue.length-1;t>=0;t--){const e=this.decayQueue[t];if(--e.t>0)continue;this.decayQueue.splice(t,1);const n=this.world.getBlock(e.x,e.y,e.z);n!==Ar&&n!==Sa||(this.edit(e.x,e.y,e.z,xn),this.particles.push(...Ai(e.x+.5,e.y+.5,e.z+.5,gs(n),8)),Math.random()<Bd&&this.drops.push(_n(ta,e.x,e.y,e.z)))}}updateMining(t){if(!this.digging){this.crack.hide();return}const e=this.touchDigging?this.touchDigHit:this.rayHit();if(!e){this.digProgress=0,this.digTarget=null,this.crack.hide(),this.touchDigging&&this.stopDigging();return}const n=this.world.getBlock(e.x,e.y,e.z);if(this.touchDigging&&!Nu(n)){this.stopDigging();return}if((!this.digTarget||this.digTarget.x!==e.x||this.digTarget.y!==e.y||this.digTarget.z!==e.z)&&(this.digTarget={x:e.x,y:e.y,z:e.z},this.digProgress=0),Wf(n)<0){this.crack.hide();return}const s=this.creative?0:bM(n,this.heldTool())/1e3;if(s<=0){this.mineBlock(e.x,e.y,e.z,n),this.touchDigging&&this.stopDigging();return}this.digProgress+=t,this.digProgress>=s?(this.mineBlock(e.x,e.y,e.z,n),this.touchDigging&&this.stopDigging()):(this.crack.show(e.x,e.y,e.z,this.digProgress/s),this.digFxT+=t,this.digFxT>=.07&&(this.digFxT=0,this.particles.push(...Ai(e.x+.5,e.y+.5,e.z+.5,gs(n),3))))}heldTool(){const t=this.inv[this.hotbar.index];return t?Sr(t.id):null}settleFallingAt(t,e,n){let s=e+1;for(;;){const r=this.world.getBlock(t,s,n);if(r!==gM&&r!==Uu)break;let o=s-1;for(;o>1&&this.world.getBlock(t,o-1,n)===xn;)o--;if(o>=s)break;this.edit(t,s,n,xn),this.edit(t,o,n,r),s++}}mineBlock(t,e,n,s){if(Ni(s)){this.edit(t,e,n,xn),this.particles.push(...Ai(t+.5,e+.5,n+.5,gs(s),6)),this.digProgress=0,this.digTarget=null,this.crack.hide();return}let r=this.creative?null:TM(s,this.heldTool());r===Uu&&Math.random()<.1&&(r=Ep),this.edit(t,e,n,xn),s===Rs&&!this.creative&&this.world.getBlock(t,e-1,n)!==xn&&(this.world.setWater(t,e,n,8,!0,!1),this.fluidSim.activate(t,e,n));const o=this.world.getBlock(t,e+1,n);if((Ni(o)||o===As)&&(this.edit(t,e+1,n,xn),o===As&&!this.creative&&this.drops.push(_n(As,t,e+1,n)),this.particles.push(...Ai(t+.5,e+1.5,n+.5,gs(o),6))),this.settleFallingAt(t,e,n),this.particles.push(...Ai(t+.5,e+.5,n+.5,gs(s),16)),r!==null&&this.drops.push(_n(r,t,e,n)),!this.creative&&s===Ar&&Math.random()<Bd&&this.drops.push(_n(ta,t,e,n)),(s===xa||s===Ma)&&this.queueLeafDecay(t,e,n),s===Iu){const c=this.furnaces.get(`${t},${e},${n}`);if(c){const h=[[c.input,c.inputN],[c.fuel,c.fuelN],[c.output,c.outputN]];for(const[u,d]of h)d>0&&this.drops.push(_n(u,t,e,n,Math.random,d));this.furnaces.delete(`${t},${e},${n}`)}}Di(this.survival,Ab);const a=this.inv[this.hotbar.index],l=a?Sr(a.id):null;l&&(xd(this.inv,this.hotbar.index,l.maxDurability),this.hotbar.render(this.inv)),this.digProgress=0,this.digTarget=null,this.crack.hide()}updateDrops(t){const e=this.player.pos.x,n=this.player.pos.y+.9,s=this.player.pos.z;n1(this.drops,ea);for(let r=this.drops.length-1;r>=0;r--){const o=this.drops[r];if(i1(o,this.physWorld,t),o.age>yb){this.drops.splice(r,1);continue}if(s1(o,e,n,s))if(o.dur!==void 0)Rw(this.inv,o.id,o.dur)&&(this.drops.splice(r,1),this.hotbar.render(this.inv));else{const a=Bs(this.inv,o.id,o.count,ea(o.id));a<o.count&&this.hotbar.render(this.inv),a===0?this.drops.splice(r,1):o.count=a}}this.dropRenderer.sync(this.drops,this.entityLight)}tickMobs(){const t=this.player.pos.x,e=this.player.pos.z,n={x:t,y:this.player.pos.y,z:e};let s=0,r=0,o=0;for(let a=this.mobs.length-1;a>=0;a--){const l=this.mobs[a],c=l.pos.x-t,h=l.pos.z-e,u=c*c+h*h;if(u>Gd*Gd){this.mobs.splice(a,1);continue}const d=P1(l.kind);d&&o++,u<Vd*Vd&&(s++,d&&r++);const f=d?Q1(l,this.physWorld,this.mobRng,n,this.isSunlit(l)):F1(l,this.physWorld,this.mobRng);Object.assign(l,f.mob);let m=!1;for(const v of f.events)if(v.kind==="layEgg")this.drops.push(_n(Mp,Math.floor(v.pos.x),Math.floor(v.pos.y),Math.floor(v.pos.z)));else if(v.kind==="attackPlayer")this.hurtPlayer(v.damage,t-l.pos.x,e-l.pos.z),l.kind==="husk"&&Di(this.survival,3);else if(v.kind==="shootArrow")this.arrows.push(sd(v.from.x,v.from.y,v.from.z,v.dir.x,v.dir.y,v.dir.z,zp,!1,v.damage));else if(v.kind==="explode")this.explode(v.pos,v.radius,v.damage);else if(v.kind==="drops")for(const p of v.items)this.drops.push(_n(p.id,Math.floor(v.pos.x),Math.floor(v.pos.y),Math.floor(v.pos.z),Math.random,p.count));else v.kind==="death"&&(m=!0);m&&this.mobs.splice(a,1)}if(++this.mobSpawnTick>=Ib){if(this.mobSpawnTick=0,s<Pb&&this.mobs.length<Hd){const l=this.player.vel,c=Math.hypot(l.x,l.z)>.001?Math.atan2(l.z,l.x):null;this.mobs.push(...cd(Wd[Math.floor(this.mobRng()*4)],t,e,this.mobRng,this.spawnWorld,this.surfaceY,24,44,c,Math.PI/2))}let a=Math.min(Db-o,Hd-this.mobs.length);if(r<Lb&&a>0){const l=this.mobRng(),c=_s(t,e,this.save.seed),h=ew(c,l),u=(f,m,v)=>{const[p,g]=this.chunks.lightLevelAt(f,m,v);return Math.max(g,p-this.skyDarkenNow)},d=sw(h,t,this.player.pos.y,e,this.mobRng,this.spawnWorld,this.surfaceY,void 0,void 0,u).slice(0,a);this.mobs.push(...d),a-=d.length,a>0&&this.mobs.push(...iw(h,t,e,this.mobRng,this.spawnWorld,this.surfaceY,void 0,void 0,u).slice(0,a))}}}explode(t,e,n){const s=Math.floor(t.x),r=Math.floor(t.y),o=Math.floor(t.z),a=e*e,l=Math.ceil(e);for(let m=-l;m<=l;m++)for(let v=-l;v<=l;v++)for(let p=-l;p<=l;p++){if(p*p+m*m+v*v>a)continue;const g=s+p,y=r+m,_=o+v,b=this.world.getBlock(g,y,_);!Ee(b)&&!Ni(b)||b===Tc||b===Bn||(this.world.setBlock(g,y,_,xn),this.save.edits[ys(this.dimension,g,y,_)]=xn,this.fluidSim.activate(g,y,_))}for(let m=-l;m<=l;m++)for(let v=-l;v<=l;v++)this.settleFallingAt(s+v,r-l,o+m);this.chunks.remeshDirty(),this.particles.push(...Ai(t.x,t.y+.4,t.z,[.33,.33,.33],30));const c=this.player.pos,h=c.x-t.x,u=c.z-t.z,d=Math.hypot(h,c.y+.9-t.y,u);let f=Math.round(n*(1-d/(e+1.5)));f>0&&this.explosionBlocked(t,{x:c.x,y:c.y+.9,z:c.z})&&(f=Math.round(f*.3)),f>0&&this.hurtPlayer(f,h,u);for(let m=this.mobs.length-1;m>=0;m--){const v=this.mobs[m],p=v.pos.x-t.x,g=v.pos.z-t.z,y=Math.hypot(p,v.pos.y+.5-t.y,g);let _=Math.round(n*(1-y/(e+1.5)));if(_>0&&this.explosionBlocked(t,{x:v.pos.x,y:v.pos.y+.5,z:v.pos.z})&&(_=Math.round(_*.3)),_<=0)continue;const b=Al(v,_,{x:p,z:g},this.mobRng);Object.assign(v,b.mob);for(const I of b.events)if(I.kind==="drops")for(const R of I.items)this.drops.push(_n(R.id,Math.floor(I.pos.x),Math.floor(I.pos.y),Math.floor(I.pos.z),Math.random,R.count));else I.kind==="death"&&this.mobs.splice(m,1)}}explosionBlocked(t,e){for(let s=1;s<8;s++){const r=s/8,o=Math.floor(t.x+(e.x-t.x)*r),a=Math.floor(t.y+(e.y-t.y)*r),l=Math.floor(t.z+(e.z-t.z)*r);if(Ee(this.world.getBlock(o,a,l)))return!0}return!1}isSunlit(t){return ow(t,this.world,sc(this.worldTime).isNight)}tickArrows(){const t=(e,n,s,r,o,a,l,c)=>e>=r-l&&e<=r+l&&n>=a&&n<=a+c&&s>=o-l&&s<=o+l;for(let e=this.arrows.length-1;e>=0;e--){const n=this.arrows[e];if(n.age>Ub){this.arrows.splice(e,1);continue}if(n.stuck){if(n.age++,n.age>kb){const d=n.x-this.player.pos.x,f=n.y-(this.player.pos.y+.9),m=n.z-this.player.pos.z;d*d+f*f+m*m<1.4*1.4&&Bs(this.inv,Ui,1)===0&&(this.hotbar.render(this.inv),this.arrows.splice(e,1))}continue}const s=n.x,r=n.y,o=n.z;T1(n,this.physWorld);const a=n.x-s,l=n.y-r,c=n.z-o,h=Math.max(1,Math.ceil(Math.hypot(a,l,c)/.2));let u=!1;for(let d=1;d<=h&&!u;d++){const f=d/h,m=s+a*f,v=r+l*f,p=o+c*f;if(n.fromPlayer)for(const g of this.mobs){const y=gi[g.kind];if(t(m,v,p,g.pos.x,g.pos.z,g.pos.y,y.width/2,y.height)){this.damageMobWithArrow(g,n),u=!0;break}}else t(m,v,p,this.player.pos.x,this.player.pos.z,this.player.pos.y,na/2,zi)&&(this.hurtPlayer(n.damage,n.vx,n.vz),u=!0)}u&&this.arrows.splice(e,1)}}damageMobWithArrow(t,e){const n=Al(t,e.damage,{x:e.vx,z:e.vz},this.mobRng);Object.assign(t,n.mob);for(const s of n.events)if(s.kind==="drops")for(const r of s.items)this.drops.push(_n(r.id,Math.floor(s.pos.x),Math.floor(s.pos.y),Math.floor(s.pos.z),Math.random,r.count));else if(s.kind==="death"){const r=this.mobs.indexOf(t);r>=0&&this.mobs.splice(r,1)}}mobUnderRay(t=this.crosshairRay()){const{origin:e,direction:n}=t,{x:s,y:r,z:o}=e,{x:a,y:l,z:c}=n;let h=null,u=Cb;for(const d of this.mobs){const f=gi[d.kind],m=f.width/2,v=Bb(s,r,o,a,l,c,d.pos.x-m,d.pos.y,d.pos.z-m,d.pos.x+m,d.pos.y+f.height,d.pos.z+m);v!==null&&v<u&&(u=v,h=d)}return h!==null&&Hu({x:s,y:r,z:o},{x:a,y:l,z:c},u,(f,m,v)=>Ee(this.world.getBlock(f,m,v)))?null:h}attackMob(t,e){this.hand.swing();const n=this.inv[this.hotbar.index],s=zb(n?n.id:null),r=n?Sr(n.id):null;if(r){for(let u=r.kind==="sword"?1:2;u>0;u--)xd(this.inv,this.hotbar.index,r.maxDurability);this.hotbar.render(this.inv)}const o=e==null?void 0:e.direction,a=o?Math.hypot(o.x,o.z):0,l=o&&a>1e-6?o.x/a:Math.cos(this.look.yaw),c=o&&a>1e-6?o.z/a:Math.sin(this.look.yaw),h=Al(t,s,{x:l,z:c},this.mobRng);Object.assign(t,h.mob);for(const u of h.events)if(u.kind==="drops")for(const d of u.items)this.drops.push(_n(d.id,Math.floor(u.pos.x),Math.floor(u.pos.y),Math.floor(u.pos.z),Math.random,d.count));else if(u.kind==="death"){const d=this.mobs.indexOf(t);d>=0&&this.mobs.splice(d,1)}}placeBlock(t=this.rayHit()){const e=this.hotbar.index,n=this.inv[e];if(!n||n.count<=0||n.id>=256||!t)return;const s=Fu(this.world.getBlock(t.x,t.y,t.z)),r=s?t.x:t.x+t.nx,o=s?t.y:t.y+t.ny,a=s?t.z:t.z+t.nz,l=this.world.getBlock(r,o,a);if(!Fu(l)||this.overlapsPlayer(r,o,a))return;const c=this.creative?n.id:_d(this.inv,e);c!==null&&(this.edit(r,o,a,c),this.hotbar.render(this.inv),this.hand.swing())}overlapsPlayer(t,e,n){const s=this.player.pos,r=na/2;return t<s.x+r&&t+1>s.x-r&&e<s.y+zi&&e+1>s.y&&n<s.z+r&&n+1>s.z-r}updateDayNight(){const t=sc(this.worldTime,this.dimension),e=this.worldTime/Ze*Math.PI*2,n=Math.sin(e);let s=0;this.dimension==="overworld"&&n>-.15&&(s=Math.max(0,1-Math.abs(n)/.3)*Math.min(1,(n+.15)/.15)),this.renderer.setSkyColors(t.skyTop,t.skyHorizon,Math.atan2(.1,Math.cos(e)),s);const r=this.normalFog;r&&r.color.setRGB(t.skyHorizon[0],t.skyHorizon[1],t.skyHorizon[2],Qt);const o=t.worldTint,a=Math.max(o[0],o[1],o[2],.001),l=1-ic(this.worldTime)/11;this.chunks.setTint([o[0]/a,o[1]/a*(1-l*.02),o[2]/a*(1-l*.06)]);const c=ic(this.worldTime),h=this.lightingQuality==="off"?c:c*.86;this.skyDarkenNow=h,this.chunks.setSkyDarken(h),this.chunks.setSkyMul(1-c/11),this.chunks.setSkyReflection(t.skyHorizon,t.skyTop);const u=this.worldTime/Ze*Math.PI*2;this.chunks.setSunDir(Math.cos(u),Math.sin(u),.1)}updateGodRays(){if(this.lightingQuality==="off")return;const t=this.worldTime/Ze*Math.PI*2,e=Math.cos(t),n=Math.sin(t),s=.1,r=Math.hypot(e,n,s)||1,o=n/r,a=this.renderer.camera;a.getWorldDirection(this._godFwd);const l=this._godFwd.x*(e/r)+this._godFwd.y*(n/r)+this._godFwd.z*(s/r),c=500;this._godSunWorld.set(a.position.x+e/r*c,a.position.y+n/r*c,a.position.z+s/r*c),this._godSunWorld.project(a);const h=this._godSunWorld,u=h.x*.5+.5,d=h.y*.5+.5,f=u>=0&&u<=1&&d>=0&&d<=1;let m=0;o>0&&l>0&&f&&(m=Math.min(.6,o*2.6));const v=1,p=.6+o*.7,g=.3+o*1;this._godSunColor.setRGB(v,Math.min(1,p),Math.min(1,g)),this._godSunUV.set(u,d),this.renderer.setGodRays({quality:this.lightingQuality,sunUV:this._godSunUV,intensity:m,sunColor:this._godSunColor})}updateWater(){const t=Math.floor(this.player.pos.x),e=Math.floor(this.player.pos.y+kn),n=Math.floor(this.player.pos.z),s=yn(this.world.getBlock(t,e,n));this.renderer.scene.fog=s?this.underFog:this.normalFog,this.underwaterEl&&(this.underwaterEl.style.display=s?"block":"none")}updateHighlight(){const t=this.rayHit();t?(this.highlight.position.set(t.x+.5,t.y+.5,t.z+.5),this.highlight.visible=!0):this.highlight.visible=!1}updateCamera(t){const e=this.prev.pos,n=this.player.pos,s=e.x+(n.x-e.x)*t,r=e.y+(n.y-e.y)*t,o=e.z+(n.z-e.z)*t,a=this.renderer.camera;this.camEye+=((this.crouching?_1:kn)-this.camEye)*.3;const l=this.camEye;a.position.set(s,r+l,o);const c=Math.cos(this.look.yaw),h=Math.sin(this.look.yaw),u=Math.cos(this.look.pitch),d=Math.sin(this.look.pitch);a.lookAt(s+c*u,r+l+d,o+h*u)}}const Bl=4;class Gb{constructor(t,e=4242){x(this,"gl");x(this,"scene",new zs);x(this,"camera",new Xe(70,1,.1,1e3));x(this,"world");x(this,"chunks");x(this,"running",!1);x(this,"x",.5);x(this,"z",.5);x(this,"heading",.7);x(this,"y",175);x(this,"onResize",()=>this.resize());var n,s;this.gl=new Af({canvas:t,antialias:!1}),this.gl.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene.background=Jy(),this.scene.fog=new Os(If,40,Bl*16),this.camera.layers.enable(Jo),this.world=new Kf(e),this.seekWater(),this.chunks=new rp(this.scene,this.world,ec()),this.chunks.update(jt(Math.floor(this.x)),jt(Math.floor(this.z)),Bl,999),this.resize(),window.addEventListener("resize",this.onResize),window.addEventListener("orientationchange",this.onResize),(n=window.visualViewport)==null||n.addEventListener("resize",this.onResize),(s=window.visualViewport)==null||s.addEventListener("scroll",this.onResize)}seekWater(){for(let t=4;t<120;t+=3)for(let e=0;e<12;e++){const n=e/12*Math.PI*2,s=Math.round(Math.cos(n)*t),r=Math.round(Math.sin(n)*t);if(yn(this.world.getBlock(s,be,r))){this.heading=n,this.x=s-Math.cos(n)*14+.5,this.z=r-Math.sin(n)*14+.5;return}}}resize(){const{width:t,height:e}=Uf(window);this.gl.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}async preload(t=Bl){const e=jt(Math.floor(this.x)),n=jt(Math.floor(this.z));for(let s=-t;s<=t;s++)for(let r=-t;r<=t;r++)this.world.request(e+r,n+s);await new Promise(s=>{const r=()=>{let o=!0;for(let a=-t;a<=t&&o;a++)for(let l=-t;l<=t&&o;l++)this.world.peek(e+l,n+a)||(o=!1);o?s():setTimeout(r,30)};r()});for(let s=0;s<600&&(s<3||this.chunks.meshBusy());s++)this.chunks.update(e,n,t,999),this.chunks.flushMesh(999),await new Promise(r=>requestAnimationFrame(()=>r()))}start(){if(this.running)return;this.running=!0;const t=()=>{this.running&&(requestAnimationFrame(t),this.heading+=6e-4,this.camera.position.set(this.x,this.y,this.z),this.camera.lookAt(this.x+Math.cos(this.heading)*26,this.y-17,this.z+Math.sin(this.heading)*26),this.chunks.flushMesh(2),this.gl.render(this.scene,this.camera))};requestAnimationFrame(t)}stop(){this.running=!1}dispose(){var t,e;this.running=!1,window.removeEventListener("resize",this.onResize),window.removeEventListener("orientationchange",this.onResize),(t=window.visualViewport)==null||t.removeEventListener("resize",this.onResize),(e=window.visualViewport)==null||e.removeEventListener("scroll",this.onResize),this.chunks.dispose(),this.world.dispose(),this.gl.dispose(),this.gl.forceContextLoss()}}function Vb(){if(document.getElementById("mw-settings-css"))return;const i=document.createElement("style");i.id="mw-settings-css",i.textContent=`
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
    #settings input[type=checkbox]:checked::after{content:'';position:absolute;inset:4px;background:#0e1a28;}`,document.head.appendChild(i)}class Wb{constructor(t){x(this,"root");x(this,"settings");x(this,"onChange",null);this.root=t,this.settings=Zf(),t.classList.remove("hidden"),Vb(),t.style.cssText="position:fixed;inset:0;z-index:40;display:none;align-items:center;justify-content:center;background:#0e1a28;overflow-y:auto;overscroll-behavior:contain;touch-action:pan-y;-webkit-overflow-scrolling:touch;",t.innerHTML=`
      <div class="settings-card" style="width:min(560px,90vw);margin:24px auto;color:#dce8f2;font-family:'Zpix',monospace;display:flex;flex-direction:column;gap:24px;">
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
            <option value="high">超高</option>
          </select>
        </label>
        <div style="display:flex;align-items:center;gap:12px;">
          <span style="width:108px;">材质</span>
          <button id="set-tex-classic" class="btn" type="button">标准像素</button>
          <button id="set-tex-cartoon" class="btn" type="button">鲜艳像素</button>
        </div>
        <label style="display:flex;align-items:center;gap:12px;">
          <span style="width:108px;">渲染距离</span>
          <input id="set-rd" type="range" min="3" max="12" style="flex:1;" />
          <span id="set-rd-val" style="width:46px;text-align:right;"></span>
        </label>
        <div style="font-size:12px;color:#8aa;margin-top:-10px;margin-left:120px;">小=白雾更近、更流畅；大=看得远、更吃性能</div>
        <button id="set-close" class="btn btn-wide" type="button" style="margin-top:6px;">返回</button>
      </div>`;const e=t.querySelector("#set-vol"),n=t.querySelector("#set-vol-val"),s=t.querySelector("#set-lighting"),r=t.querySelector("#set-tex-cartoon"),o=t.querySelector("#set-tex-classic"),a=()=>{r.classList.toggle("active",this.settings.texturePack==="cartoon"),o.classList.toggle("active",this.settings.texturePack==="classic"),r.style.outline=this.settings.texturePack==="cartoon"?"2px solid #6ab0ff":"none",o.style.outline=this.settings.texturePack==="classic"?"2px solid #6ab0ff":"none"},l=()=>{var m;hS(this.settings),(m=this.onChange)==null||m.call(this,this.settings)},c=m=>{this.settings={...this.settings,texturePack:m},a(),l()},h=()=>e.style.setProperty("--fill",`${this.settings.volume}%`);e.addEventListener("input",()=>{this.settings={...this.settings,volume:Number(e.value)},n.textContent=`${this.settings.volume}%`,h(),l()}),s.addEventListener("change",()=>{this.settings={...this.settings,lightingQuality:s.value},l()}),r.addEventListener("click",()=>c("cartoon")),o.addEventListener("click",()=>c("classic"));const u=t.querySelector("#set-rd"),d=t.querySelector("#set-rd-val"),f=()=>u.style.setProperty("--fill",`${(this.settings.renderDistance-3)/9*100}%`);u.addEventListener("input",()=>{this.settings={...this.settings,renderDistance:Number(u.value)},d.textContent=String(this.settings.renderDistance),f(),l()}),t.querySelector("#set-close").addEventListener("click",()=>this.hide()),e.value=String(this.settings.volume),n.textContent=`${this.settings.volume}%`,h(),s.value=this.settings.lightingQuality,u.value=String(this.settings.renderDistance),d.textContent=String(this.settings.renderDistance),f(),a()}get current(){return this.settings}show(){this.root.style.display="flex"}hide(){this.root.style.display="none"}get visible(){return this.root.style.display!=="none"}}var Xb={};const qb=1e3/15,Yb=1e4,uc="wss://mineworld-multiplayer-nornttyy.onrender.com/ws",dc=5e3;function Cr(i){return typeof i=="object"&&i!==null}function sn(i){return typeof i=="number"&&Number.isFinite(i)}function xr(i){return typeof i=="number"&&Number.isInteger(i)}function zc(i){return i==="overworld"||i==="nether"?i:null}function om(i){return i==="survival"||i==="creative"?i:null}function fc(i){if(!Cr(i))return null;const t=zc(i.dimension);return typeof i.id!="string"||typeof i.name!="string"||typeof i.skin!="string"||!sn(i.x)||!sn(i.y)||!sn(i.z)||!sn(i.yaw)||!sn(i.pitch)||t===null?null:{id:i.id,name:i.name,skin:i.skin,x:i.x,y:i.y,z:i.z,yaw:i.yaw,pitch:i.pitch,dimension:t}}function Hs(i){if(!Cr(i))return null;const t=zc(i.dimension);return t===null||!xr(i.x)||!xr(i.y)||!xr(i.z)||!xr(i.id)?null:{dimension:t,x:i.x,y:i.y,z:i.z,id:i.id}}function $b(i){return Number.isInteger(i.seed)&&i.seed>=0&&i.seed<=2e9&&om(i.gameMode)!==null&&sn(i.worldTime)&&Math.abs(i.worldTime)<=2e9&&Array.isArray(i.edits)&&i.edits.length<=dc&&i.edits.every(t=>Hs(t)!==null)}function Kb(i){const t=[];for(const[e,n]of Object.entries(i.edits)){const s=cc(e),r={dimension:s.dim,x:s.x,y:s.y,z:s.z,id:n};Hs(r)!==null&&t.push(r)}if(t.length>dc)throw new Error(`这个世界有 ${t.length} 个方块改动，联机房间最多可带入 ${dc} 个。`);return{seed:Math.floor(i.seed),gameMode:i.gameMode??"survival",worldTime:i.worldTime??1e3,edits:t}}function jb(i){if(!Cr(i)||i.type!=="welcome"||typeof i.id!="string"||!Cr(i.room))return null;const t=om(i.room.gameMode);if(typeof i.room.id!="string"||!xr(i.room.seed)||t===null||!sn(i.room.worldTime)||!Array.isArray(i.players)||!Array.isArray(i.edits))return null;const e=i.players.map(fc),n=i.edits.map(Hs);return e.some(s=>s===null)||n.some(s=>s===null)?null:{type:"welcome",id:i.id,room:{id:i.room.id,seed:i.room.seed,gameMode:t,worldTime:i.room.worldTime},players:e,edits:n}}function Zb(i){if(!Cr(i)||typeof i.type!="string")return null;if(i.type==="welcome")return jb(i);if(i.type==="error"&&typeof i.message=="string")return{type:"error",message:i.message};if(i.type==="player-join"){const t=fc(i.player);return t?{type:"player-join",player:t}:null}if(i.type==="player-leave"&&typeof i.id=="string")return{type:"player-leave",id:i.id};if(i.type==="state"&&typeof i.id=="string"){const t=fc(i.player);return t?{type:"state",id:i.id,player:t}:null}if(i.type==="block"){const t=Hs(i.edit),e=Hs(i),n=t??e;return n?{type:"block",edit:n}:null}return i.type==="time"&&sn(i.worldTime)?{type:"time",worldTime:i.worldTime}:null}function Bc(i){return i.toUpperCase().replace(/[^A-Z0-9-]/g,"").slice(0,16)}function am(i){return i.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,16)||"玩家"}function Jb(){const i=new URLSearchParams(window.location.search).get("server"),t=localStorage.getItem("mineworld.multiplayer.server"),e=Xb.VITE_MULTIPLAYER_URL,n=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",s=i||t||e||(n?`ws://${window.location.hostname}:8787/ws`:uc);try{const r=new URL(s);if(r.protocol==="ws:"||r.protocol==="wss:")return r.toString()}catch{}return uc}class Hc{constructor(t){x(this,"socket");x(this,"players",new Map);x(this,"_id","");x(this,"_room",null);x(this,"_initialEdits",[]);x(this,"_closed",!1);x(this,"lastStateSent",-1/0);x(this,"disconnectReason","");x(this,"blockHandler",null);x(this,"worldTimeHandler",null);x(this,"pendingBlocks",[]);x(this,"pendingWorldTime",null);x(this,"onPlayersChanged",null);x(this,"onDisconnect",null);this.socket=t}static connect(t){var r;const e=Bc(t.room);if(e.length<3)return Promise.reject(new Error("房间号至少需要 3 个字符"));const n=am(t.name);if(t.action!=="create"&&t.world!==void 0)return Promise.reject(new Error("只有创建房间时才能带入本地世界"));if(t.world!==void 0&&!$b(t.world))return Promise.reject(new Error("当前世界数据不适合开启联机房间"));const s=((r=t.world)==null?void 0:r.gameMode)??t.gameMode??"creative";return new Promise((o,a)=>{let l=!1,c=0,h;try{h=new Hc(new WebSocket(t.url))}catch{a(new Error("联机地址无效"));return}const u=d=>{l||(l=!0,window.clearTimeout(c),h.socket.close(),a(new Error(d)))};c=window.setTimeout(()=>u("连接超时，请检查联机服务器是否已启动"),Yb),h.socket.addEventListener("open",()=>{h.send({type:"join",action:t.action,room:e,name:n,skin:"default",gameMode:s,world:t.world})}),h.socket.addEventListener("message",d=>{h.receive(d.data)&&!l&&(l=!0,window.clearTimeout(c),o(h))}),h.socket.addEventListener("error",()=>{const d=t.url===uc;u(d?"联机服务器暂时不可用或仍在启动，请稍后重试。":"无法连接联机服务器")}),h.socket.addEventListener("close",d=>{const f=h.disconnectReason||(d.code===1e3?"已断开联机":"联机连接已断开");l?h.close(f):u(f)})})}get id(){return this._id}get room(){if(this._room===null)throw new Error("联机房间尚未就绪");return this._room}get isConnected(){return!this._closed&&this.socket.readyState===WebSocket.OPEN}get playerCount(){return this.players.size+(this._id?1:0)}get remotePlayers(){return[...this.players.values()]}get initialEdits(){return this._initialEdits}sendState(t){if(!this.isConnected)return;const e=performance.now();e-this.lastStateSent<qb||!sn(t.x)||!sn(t.y)||!sn(t.z)||!sn(t.yaw)||!sn(t.pitch)||zc(t.dimension)===null||(this.lastStateSent=e,this.send({type:"state",player:t}))}sendBlock(t){!this.isConnected||Hs(t)===null||this.send({type:"block",...t})}setBlockHandler(t){if(this.blockHandler=t,!!t)for(const e of this.pendingBlocks.splice(0))t(e)}setWorldTimeHandler(t){this.worldTimeHandler=t,t&&this.pendingWorldTime!==null&&(t(this.pendingWorldTime),this.pendingWorldTime=null)}disconnect(t="已退出房间"){this.disconnectReason=t,this._closed||this.socket.close(1e3,t.slice(0,120)),this.close(t)}receive(t){var s,r,o,a;let e;try{e=JSON.parse(typeof t=="string"?t:String(t))}catch{return null}const n=Zb(e);if(!n)return null;if(n.type==="error")return this.disconnectReason=n.message,this.socket.close(1008,n.message.slice(0,120)),null;if(n.type==="welcome"){this._id=n.id,this._room=n.room,this._initialEdits=n.edits,this.players.clear();for(const l of n.players)l.id!==this._id&&this.players.set(l.id,l);return(s=this.onPlayersChanged)==null||s.call(this),n}if(n.type==="player-join")n.player.id!==this._id&&this.players.set(n.player.id,n.player),(r=this.onPlayersChanged)==null||r.call(this);else if(n.type==="player-leave")this.players.delete(n.id),(o=this.onPlayersChanged)==null||o.call(this);else if(n.type==="state")n.id!==this._id&&this.players.set(n.id,n.player),(a=this.onPlayersChanged)==null||a.call(this);else if(n.type==="block"){const l=n.edit;this.blockHandler?this.blockHandler(l):this.pendingBlocks.push(l)}else n.type==="time"&&(this.worldTimeHandler?this.worldTimeHandler(n.worldTime):this.pendingWorldTime=n.worldTime);return null}send(t){this.socket.readyState===WebSocket.OPEN&&this.socket.send(JSON.stringify(t))}close(t){var e,n;this._closed||(this._closed=!0,this.players.size>0&&(this.players.clear(),(e=this.onPlayersChanged)==null||e.call(this)),(n=this.onDisconnect)==null||n.call(this,t))}}const Gs=document.getElementById("app"),bt=i=>document.getElementById(i),Yn=Xp();document.documentElement.classList.toggle("touch-device",Yn);Yn&&Vw();const Gc=bt("menubg");let Ye=new Gb(Gc);const Vs=bt("menu"),da=bt("worldlist"),Ws=bt("multiplayer"),qn=bt("pause"),Hl=bt("world-rows"),Ds=bt("online-hud");let $t=null,Ie=null;const ba=bt("boot"),Qb=ba.querySelector(".boot-tip"),nn=(i,t="加载中…")=>{ba.classList.toggle("hidden",!i),i&&(Qb.textContent=t)};let lm=!1;const cm=i=>{lm||nn(!0,`出错了：${i}（请把这行字发给开发）`)};window.addEventListener("error",i=>cm(i.message||String(i.error)));window.addEventListener("unhandledrejection",i=>cm(String(i.reason&&(i.reason.message||i.reason.stack)||i.reason)));const fa=["100% 纯方块!","无限的世界!","由 Three.js 驱动!","会挖会放会跳!","试试双击 W 疾跑~","支持 WebGL2!","像素手工打造!","水快会流动了!","也试试我的世界!"];bt("splash").textContent=fa[Math.floor(Math.random()*fa.length)];const $d=ba.querySelector(".boot-splash");$d&&($d.textContent=fa[Math.floor(Math.random()*fa.length)]);const Oo=Yn?["提示: 左侧滑动方向盘移动，空白处拖动视角","提示: 双击前进后按住可以疾跑","提示: 轻点空白处可互动或放置方块","提示: 长按空白处可挖方块或攻击","提示: 可以直接点快捷栏切换物品","提示: 石头要用镐才挖得动"]:["提示: 按住左键挖方块","提示: 双击 W 可以疾跑","提示: 右键放方块(会消耗物品)","提示: 数字键 1-9 / 滚轮 切换物品","提示: 石头要用镐才挖得动","提示: 砍树 → 木板 → 工作台 → 工具","提示: 熔炉能把铁矿炼成铁锭","提示: 天黑了小心怪物"],Gl=ba.querySelector(".boot-hint");if(Gl){let i=Math.floor(Math.random()*Oo.length);Gl.textContent=Oo[i],setInterval(()=>{i=(i+1)%Oo.length,Gl.textContent=Oo[i]},2600)}function wn(i){bt("crosshair").style.display=i?"block":"none",bt("hotbar").style.display=i?"flex":"none",bt("status").style.display=i?"flex":"none",Ds.classList.toggle("hidden",!i||Ie===null),$t==null||$t.setTouchActive(i&&Yn)}function Wi(i){for(const e of[Vs,da,Ws,qn])e.classList.add("hidden");bt("newworld").classList.add("hidden"),i&&i.classList.remove("hidden"),wn(!1);const t=i===Vs||i===da||i===Ws;Gc.style.display=t?"block":"none",t?Ye==null||Ye.start():Ye==null||Ye.stop()}const hm=i=>new Promise(t=>setTimeout(t,i));(async()=>{nn(!0,"加载中…");try{Ye&&await Promise.race([Ye.preload(),hm(8e3)])}catch(i){console.error("[menubg] preload 失败:",i)}Wi(Vs),nn(!1)})();const Vc=new Wb(bt("settings"));Vc.onChange=i=>{$t==null||$t.setTexturePack(i.texturePack),$t==null||$t.setLightingQuality(i.lightingQuality),$t==null||$t.setRenderDistance(i.renderDistance)};bt("settings-btn").addEventListener("click",()=>Vc.show());bt("settings-btn-pause").addEventListener("click",()=>Vc.show());bt("play").addEventListener("click",()=>aT());const Xs=bt("mp-name"),Fi=bt("mp-room"),Kd=bt("mp-status"),pc=bt("mp-create"),mc=bt("mp-join"),tT=bt("mp-title"),eT=bt("mp-intro"),nT=bt("mp-mode-field"),um=bt("mp-back");let Ir="join",Bi=null,dm="creative",Vl=!1;function Er(i,t=!1){Kd.textContent=i,Kd.classList.toggle("error",t)}function fm(i){dm=i,bt("mp-current-mode").textContent=i==="creative"?"创造模式":"生存模式",bt("mp-mode-desc").textContent=i==="creative"?"适合和朋友一起搭建；玩家与方块会实时同步。":"玩家与方块会实时同步；生物、掉落物和背包暂各自本地运行。"}function pm(){try{Xs.value=localStorage.getItem("mineworld.multiplayer.name")??""}catch{}}function mm(i){Ir=i;const t=i==="host";tT.textContent=t?"开启联机房间":"加入联机房间",eT.textContent=t?"当前单人世界会成为这个房间的世界。把房间号告诉朋友即可一起游玩。":"输入朋友给你的房间号，即可进入同一个世界。",nT.classList.toggle("hidden",!t),pc.classList.toggle("hidden",!t),mc.classList.toggle("hidden",t),um.textContent=t?"返回暂停菜单":"返回"}function gm(){const i="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let t="MW";for(let e=0;e<5;e++)t+=i[Math.floor(Math.random()*i.length)];return t}function jd(i=""){if(!Ie){Ds.classList.add("hidden");return}Ds.textContent=i||`联机 · 房间 ${Ie.room.id.toUpperCase()}
${Ie.playerCount} 名玩家`}function Wc(){if(Ir==="join"){Wi(Ws);return}for(const i of[Vs,da,qn])i.classList.add("hidden");bt("newworld").classList.add("hidden"),Ws.classList.remove("hidden"),wn(!1),Gc.style.display="none",Ye==null||Ye.stop()}function iT(){mm("join"),Bi=null,pm(),Fi.value=Bc(new URLSearchParams(location.search).get("room")??Fi.value),fm("creative"),Er("输入房间号后加入。"),Wc(),Xs.focus()}function sT(){!$t||Ie!==null||(Bi=$t.snapshot(),mm("host"),pm(),Fi.value=gm(),fm(Bi.gameMode??"survival"),Er("房间号已生成。开启后，把它告诉朋友。"),Wc(),Xs.focus())}function rT(){if(Ir==="host"&&$t&&Ie===null){Bi=null,Ws.classList.add("hidden"),qn.classList.remove("hidden"),wn(!1);return}Bi=null,Wi(Vs)}function vm(i){if(Ie=i,bt("save-quit").textContent=i?"退出房间":"保存并退出",bt("open-room").classList.toggle("hidden",i!==null),!i){Ds.classList.add("hidden");return}i.onPlayersChanged=()=>jd(),i.onDisconnect=t=>{Ie===i&&(Ds.classList.remove("hidden"),Ds.textContent=`联机已断开
${t}`)},jd()}function oT(i){const t={};for(const n of i.initialEdits)t[ys(n.dimension,n.x,n.y,n.z)]=n.id;const e=i.room;return{id:`online:${e.id}:${e.seed}`,name:`联机 · ${e.id.toUpperCase()}`,seed:e.seed,gameMode:e.gameMode,lastPlayed:Date.now(),edits:t,worldTime:e.worldTime}}async function Xc(i){if(Vl)return;const t=i==="create"&&Ir==="host"?Bi:null;if(i==="create"&&t===null){Er("请先进入一个单人世界，再从暂停菜单开启房间。",!0);return}let e=Bc(Fi.value);if(i==="create"&&e.length<3&&(e=gm()),e.length<3){Er("请输入至少 3 位的房间号。",!0),Fi.focus();return}const n=am(Xs.value);Fi.value=e,Xs.value=n;try{localStorage.setItem("mineworld.multiplayer.name",n)}catch{}Vl=!0,pc.disabled=!0,mc.disabled=!0,Wi(null),nn(!0,i==="create"?"正在创建联机房间…":"正在加入联机房间…");try{const s=await Hc.connect({url:Jb(),action:i,room:e,name:n,gameMode:dm,world:t?Kb(t):void 0});if(t){if(!$t||!$t.attachMultiplayer(s))throw s.disconnect("无法切换到联机房间"),new Error("当前世界已经不在单人状态，请返回后重试。");vm(s),Bi=null,Ws.classList.add("hidden"),qn.classList.add("hidden"),nn(!1),wn(!0),Yn||Gs.requestPointerLock()}else Kc(oT(s),s)}catch(s){nn(!1),Er(s instanceof Error?s.message:"连接联机服务器失败。",!0),Wc()}finally{Vl=!1,pc.disabled=!1,mc.disabled=!1}}bt("multiplayer-play").addEventListener("click",()=>iT());bt("open-room").addEventListener("click",()=>sT());bt("mp-create").addEventListener("click",()=>void Xc("create"));bt("mp-join").addEventListener("click",()=>void Xc("join"));um.addEventListener("click",()=>rT());for(const i of[Xs,Fi])i.addEventListener("keydown",t=>{t.key==="Enter"&&Xc(Ir==="host"?"create":"join")});bt("fullscreen").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()});bt("about").addEventListener("click",()=>bt("about-panel").classList.remove("hidden"));bt("about-close").addEventListener("click",()=>bt("about-panel").classList.add("hidden"));function aT(){_m(),Wi(da)}function _m(){Hl.innerHTML="";const i=eb();if(i.length===0){const t=document.createElement("div");t.className="world-empty",t.textContent="还没有世界, 点 创建新世界 开始吧",Hl.appendChild(t);return}for(const t of i){const e=document.createElement("div");e.className="world-row";const n=document.createElement("span");n.className="wname",n.textContent=t.name;const s=document.createElement("span");s.className="wmeta",s.textContent=`种子 ${t.seed}${t.gameMode==="creative"?" · 创造":""}`;const r=document.createElement("span");r.className="wdel",r.textContent="删除",r.addEventListener("click",o=>{o.stopPropagation(),sb(t.id),_m()}),e.append(n,s,r),e.addEventListener("click",()=>Kc(t)),Hl.appendChild(e)}}const qc=bt("newworld"),pa=bt("nw-name"),Yc=bt("nw-seed"),lT=bt("nw-mode-desc");let xm="survival";function $c(i){xm=i,bt("nw-survival").classList.toggle("active",i==="survival"),bt("nw-creative").classList.toggle("active",i==="creative"),lT.textContent=i==="creative"?"无限方块、自由飞行（双击空格）、无敌不饿——专心建造。":"挖矿、合成、打怪，会饿会死。"}function ym(){const i=ib(pa.value,nb(Yc.value)??void 0,xm);qc.classList.add("hidden"),Kc(i)}bt("nw-survival").addEventListener("click",()=>$c("survival"));bt("nw-creative").addEventListener("click",()=>$c("creative"));bt("create-world").addEventListener("click",()=>{pa.value="",Yc.value="",$c("survival"),qc.classList.remove("hidden"),pa.focus()});bt("nw-create").addEventListener("click",ym);bt("nw-cancel").addEventListener("click",()=>qc.classList.add("hidden"));for(const i of[pa,Yc])i.addEventListener("keydown",t=>{t.key==="Enter"&&ym()});bt("worldlist-back").addEventListener("click",()=>Wi(Vs));function Kc(i,t=null){if($t){t==null||t.disconnect("游戏已经在运行");return}vm(t),Wi(null),nn(!0,"进入中…");try{Ye==null||Ye.dispose()}catch(e){console.error("[startGame] 菜单背景释放出错(忽略,继续):",e)}Ye=null,requestAnimationFrame(()=>requestAnimationFrame(async()=>{try{nn(!0,"进入中…①构建世界"),$t=new Hb(Gs,i,t),nn(!0,"进入中…②生成出生区块"),await Promise.race([$t.preloadSpawn(),hm(12e3)]),nn(!0,"进入中…③启动渲染"),$t.start(),lm=!0,window.__mw=$t,nn(!1),Yn?(wn(!0),$t.setTouchActive(!0)):Gs.requestPointerLock()}catch(e){console.error("[startGame] 进入游戏失败:",e),Ie===t&&(t==null||t.disconnect("进入世界失败"),Ie=null);const n=e instanceof Error?`${e.stack??e.message}`:String(e);nn(!0,`进入失败：${n}`)}}))}function Ur(){$t&&Ie===null&&nm($t.snapshot())}bt("resume").addEventListener("click",()=>{Yn?(qn.classList.add("hidden"),wn(!0)):Gs.requestPointerLock()});bt("save-quit").addEventListener("click",()=>{const i=Ie!==null;Ur(),Ie==null||Ie.disconnect("玩家退出房间"),nn(!0,i?"正在退出联机房间…":"保存并返回主菜单…"),location.reload()});const ma=bt("death");document.addEventListener("pointerlockchange",()=>{if(Yn)return;if(document.pointerLockElement===Gs)qn.classList.add("hidden"),ma.style.display="none",wn(!0);else if($t){if(Ur(),$t.isCraftingOpen())return;wn(!1),$t.isDead()?ma.style.display="flex":qn.classList.remove("hidden")}});window.addEventListener("mineworld:touch-pause",()=>{!$t||$t.isDead()||(Ur(),wn(!1),qn.classList.remove("hidden"))});window.addEventListener("mineworld:touch-death",()=>{wn(!1),qn.classList.add("hidden"),ma.style.display="flex"});bt("respawn").addEventListener("click",()=>{$t&&($t.respawn(),ma.style.display="none",Yn?wn(!0):Gs.requestPointerLock())});setInterval(()=>{$t!=null&&$t.isGameplayActive()&&Ur()},15e3);window.addEventListener("beforeunload",()=>{Ur(),Ie==null||Ie.disconnect("页面关闭")});
