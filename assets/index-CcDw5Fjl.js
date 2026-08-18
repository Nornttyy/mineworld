var Um=Object.defineProperty;var Nm=(i,t,e)=>t in i?Um(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var _=(i,t,e)=>(Nm(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xc="165",Fm=0,ah=1,Om=2,of=1,rf=2,zn=3,di=0,Ie=1,He=2,hi=0,As=1,jl=2,lh=3,ch=4,Bm=5,Li=100,zm=101,Hm=102,Gm=103,Vm=104,Wm=200,Xm=201,qm=202,Ym=203,Zl=204,Ql=205,$m=206,Km=207,jm=208,Zm=209,Qm=210,Jm=211,t0=212,e0=213,n0=214,i0=0,s0=1,o0=2,Kr=3,r0=4,a0=5,l0=6,c0=7,af=0,h0=1,u0=2,qn=0,d0=1,f0=2,p0=3,m0=4,g0=5,v0=6,_0=7,lf=300,Fs=301,Os=302,Jl=303,tc=304,wa=306,fi=1e3,Ui=1001,ec=1002,le=1003,yc=1004,Xo=1005,fe=1006,Fa=1007,ai=1008,pi=1009,x0=1010,y0=1011,jr=1012,cf=1013,mi=1014,li=1015,gi=1016,hf=1017,uf=1018,Bs=1020,M0=35902,S0=1021,w0=1022,dn=1023,b0=1024,E0=1025,Rs=1026,zs=1027,T0=1028,df=1029,A0=1030,ff=1031,pf=1033,Oa=33776,Ba=33777,za=33778,Ha=33779,hh=35840,uh=35841,dh=35842,fh=35843,ph=36196,mh=37492,gh=37496,vh=37808,_h=37809,xh=37810,yh=37811,Mh=37812,Sh=37813,wh=37814,bh=37815,Eh=37816,Th=37817,Ah=37818,Rh=37819,Ch=37820,Ph=37821,Ga=36492,Dh=36494,Lh=36495,R0=36283,kh=36284,Ih=36285,Uh=36286,C0=3200,mf=3201,gf=0,P0=1,Pn="",Qt="srgb",_i="srgb-linear",Mc="display-p3",ba="display-p3-linear",Zr="linear",de="srgb",Qr="rec709",Jr="p3",Yi=7680,Nh=519,D0=512,L0=513,k0=514,vf=515,I0=516,U0=517,N0=518,F0=519,nc=35044,Fh=35048,Oh="300 es",Xn=2e3,ta=2001;class js{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bh=1234567;const Cs=Math.PI/180,Do=180/Math.PI;function Yn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function Sc(i,t){return(i%t+t)%t}function O0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function B0(i,t,e){return i!==t?(e-i)/(t-i):0}function Eo(i,t,e){return(1-e)*i+e*t}function z0(i,t,e,n){return Eo(i,t,1-Math.exp(-e*n))}function H0(i,t=1){return t-Math.abs(Sc(i,t*2)-t)}function G0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function V0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function W0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function X0(i,t){return i+Math.random()*(t-i)}function q0(i){return i*(.5-Math.random())}function Y0(i){i!==void 0&&(Bh=i);let t=Bh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $0(i){return i*Cs}function K0(i){return i*Do}function j0(i){return(i&i-1)===0&&i!==0}function Z0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Q0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function J0(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),u=o((t-n)/2),d=r((t-n)/2),p=o((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const _o={DEG2RAD:Cs,RAD2DEG:Do,generateUUID:Yn,clamp:ze,euclideanModulo:Sc,mapLinear:O0,inverseLerp:B0,lerp:Eo,damp:z0,pingpong:H0,smoothstep:G0,smootherstep:V0,randInt:W0,randFloat:X0,randFloatSpread:q0,seededRandom:Y0,degToRad:$0,radToDeg:K0,isPowerOfTwo:j0,ceilPowerOfTwo:Z0,floorPowerOfTwo:Q0,setQuaternionFromProperEuler:J0,normalize:ie,denormalize:Sn};class Ut{constructor(t=0,e=0){Ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,s,o,r,a,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],v=s[0],f=s[3],m=s[6],y=s[1],x=s[4],E=s[7],k=s[2],R=s[5],C=s[8];return o[0]=r*v+a*y+l*k,o[3]=r*f+a*x+l*R,o[6]=r*m+a*E+l*C,o[1]=c*v+h*y+u*k,o[4]=c*f+h*x+u*R,o[7]=c*m+h*E+u*C,o[2]=d*v+p*y+g*k,o[5]=d*f+p*x+g*R,o[8]=d*m+p*E+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,d=a*l-h*o,p=c*o-r*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*r)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*o-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(r*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Va.makeScale(t,e)),this}rotate(t){return this.premultiply(Va.makeRotation(-t)),this}translate(t,e){return this.premultiply(Va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Va=new Gt;function _f(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Lo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tg(){const i=Lo("canvas");return i.style.display="block",i}const zh={};function wc(i){i in zh||(zh[i]=!0,console.warn(i))}function eg(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const Hh=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gh=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qo={[_i]:{transfer:Zr,primaries:Qr,toReference:i=>i,fromReference:i=>i},[Qt]:{transfer:de,primaries:Qr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ba]:{transfer:Zr,primaries:Jr,toReference:i=>i.applyMatrix3(Gh),fromReference:i=>i.applyMatrix3(Hh)},[Mc]:{transfer:de,primaries:Jr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Gh),fromReference:i=>i.applyMatrix3(Hh).convertLinearToSRGB()}},ng=new Set([_i,ba]),se={enabled:!0,_workingColorSpace:_i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ng.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=qo[t].toReference,s=qo[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return qo[i].primaries},getTransfer:function(i){return i===Pn?Zr:qo[i].transfer}};function Ps(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $i;class ig{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$i===void 0&&($i=Lo("canvas")),$i.width=t.width,$i.height=t.height;const n=$i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Lo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Ps(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ps(e[n]/255)*255):e[n]=Ps(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sg=0;class xf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=Yn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Xa(s[r].image)):o.push(Xa(s[r]))}else o=Xa(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ig.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let og=0;class Ue extends js{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=Ui,s=Ui,o=fe,r=ai,a=dn,l=pi,c=Ue.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Yn(),this.name="",this.source=new xf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fi:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fi:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=lf;Ue.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],f=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,E=(p+1)/2,k=(m+1)/2,R=(h+d)/4,C=(u+v)/4,F=(g+f)/4;return x>E&&x>k?x<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(x),s=R/n,o=C/n):E>k?E<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(E),n=R/s,o=F/s):k<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(k),n=C/o,s=F/o),this.set(n,s,o,e),this}let y=Math.sqrt((f-g)*(f-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rg extends js{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ue(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends rg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yf extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=le,this.minFilter=le,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ag extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=le,this.minFilter=le,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=o[r+0],p=o[r+1],g=o[r+2],v=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let f=1-a;const m=l*d+c*p+h*g+u*v,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const k=Math.sqrt(x),R=Math.atan2(k,m*y);f=Math.sin(f*R)/k,a=Math.sin(a*R)/k}const E=a*y;if(l=l*f+d*E,c=c*f+p*E,h=h*f+g*E,u=u*f+v*E,f===1-a){const k=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=k,c*=k,h*=k,u*=k}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=o[r],d=o[r+1],p=o[r+2],g=o[r+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(o/2),d=l(n/2),p=l(s/2),g=l(o/2);switch(r){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(o-c)*p,this._z=(r-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(o-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(r-s)/p,this._x=(o+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),u=2*(o*n-r*e);return this.x=e+l*c+r*u-a*h,this.y=n+l*h+a*c-o*u,this.z=s+l*u+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qa.copy(this).projectOnVector(t),this.sub(qa)}reflect(t){return this.sub(qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qa=new I,Vh=new Vi;class Fo{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,pn):pn.fromBufferAttribute(o,r),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yo.copy(n.boundingBox)),Yo.applyMatrix4(t.matrixWorld),this.union(Yo)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(to),$o.subVectors(this.max,to),Ki.subVectors(t.a,to),ji.subVectors(t.b,to),Zi.subVectors(t.c,to),Zn.subVectors(ji,Ki),Qn.subVectors(Zi,ji),Si.subVectors(Ki,Zi);let e=[0,-Zn.z,Zn.y,0,-Qn.z,Qn.y,0,-Si.z,Si.y,Zn.z,0,-Zn.x,Qn.z,0,-Qn.x,Si.z,0,-Si.x,-Zn.y,Zn.x,0,-Qn.y,Qn.x,0,-Si.y,Si.x,0];return!Ya(e,Ki,ji,Zi,$o)||(e=[1,0,0,0,1,0,0,0,1],!Ya(e,Ki,ji,Zi,$o))?!1:(Ko.crossVectors(Zn,Qn),e=[Ko.x,Ko.y,Ko.z],Ya(e,Ki,ji,Zi,$o))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const kn=[new I,new I,new I,new I,new I,new I,new I,new I],pn=new I,Yo=new Fo,Ki=new I,ji=new I,Zi=new I,Zn=new I,Qn=new I,Si=new I,to=new I,$o=new I,Ko=new I,wi=new I;function Ya(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){wi.fromArray(i,o);const a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const lg=new Fo,eo=new I,$a=new I;class Oo{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):lg.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;eo.subVectors(t,this.center);const e=eo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(eo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(eo.copy(t.center).add($a)),this.expandByPoint(eo.copy(t.center).sub($a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new I,Ka=new I,jo=new I,Jn=new I,ja=new I,Zo=new I,Za=new I;class bc{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ka.copy(t).add(e).multiplyScalar(.5),jo.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub(Ka);const o=t.distanceTo(e)*.5,r=-this.direction.dot(jo),a=Jn.dot(this.direction),l=-Jn.dot(jo),c=Jn.lengthSq(),h=Math.abs(1-r*r);let u,d,p,g;if(h>0)if(u=r*l-a,d=r*a-l,g=o*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,p=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-l),o),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-o,-l),o),p=d*(d+2*l)+c):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-l),o),p=-u*u+d*(d+2*l)+c);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ka).addScaledVector(jo,d),p}intersectSphere(t,e){In.subVectors(t.center,this.origin);const n=In.dot(this.direction),s=In.dot(In)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,s,o){ja.subVectors(e,t),Zo.subVectors(n,t),Za.crossVectors(ja,Zo);let r=this.direction.dot(Za),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Jn.subVectors(this.origin,t);const l=a*this.direction.dot(Zo.crossVectors(Jn,Zo));if(l<0)return null;const c=a*this.direction.dot(ja.cross(Jn));if(c<0||l+c>r)return null;const h=-a*Jn.dot(Za);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,s,o,r,a,l,c,h,u,d,p,g,v,f){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,u,d,p,g,v,f)}set(t,e,n,s,o,r,a,l,c,h,u,d,p,g,v,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=g,m[11]=v,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Qi.setFromMatrixColumn(t,0).length(),o=1/Qi.setFromMatrixColumn(t,1).length(),r=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,p=r*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+p*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d+v*a,e[4]=g*a-p,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=p*a-g,e[6]=v+d*a,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d-v*a,e[4]=-r*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=r*h,e[9]=v-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,p=r*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,p=r*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+p,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=r*l,p=r*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=r*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cg,t,hg)}lookAt(t,e,n){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ti.crossVectors(n,tn),ti.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ti.crossVectors(n,tn)),ti.normalize(),Qo.crossVectors(tn,ti),s[0]=ti.x,s[4]=Qo.x,s[8]=tn.x,s[1]=ti.y,s[5]=Qo.y,s[9]=tn.y,s[2]=ti.z,s[6]=Qo.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],v=n[6],f=n[10],m=n[14],y=n[3],x=n[7],E=n[11],k=n[15],R=s[0],C=s[4],F=s[8],b=s[12],S=s[1],P=s[5],X=s[9],W=s[13],$=s[2],Z=s[6],j=s[10],it=s[14],Y=s[3],gt=s[7],O=s[11],z=s[15];return o[0]=r*R+a*S+l*$+c*Y,o[4]=r*C+a*P+l*Z+c*gt,o[8]=r*F+a*X+l*j+c*O,o[12]=r*b+a*W+l*it+c*z,o[1]=h*R+u*S+d*$+p*Y,o[5]=h*C+u*P+d*Z+p*gt,o[9]=h*F+u*X+d*j+p*O,o[13]=h*b+u*W+d*it+p*z,o[2]=g*R+v*S+f*$+m*Y,o[6]=g*C+v*P+f*Z+m*gt,o[10]=g*F+v*X+f*j+m*O,o[14]=g*b+v*W+f*it+m*z,o[3]=y*R+x*S+E*$+k*Y,o[7]=y*C+x*P+E*Z+k*gt,o[11]=y*F+x*X+E*j+k*O,o[15]=y*b+x*W+E*it+k*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],f=t[11],m=t[15];return g*(+o*l*u-s*c*u-o*a*d+n*c*d+s*a*p-n*l*p)+v*(+e*l*p-e*c*d+o*r*d-s*r*p+s*c*h-o*l*h)+f*(+e*c*u-e*a*p-o*r*u+n*r*p+o*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*r*u-n*r*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],f=t[14],m=t[15],y=u*f*c-v*d*c+v*l*p-a*f*p-u*l*m+a*d*m,x=g*d*c-h*f*c-g*l*p+r*f*p+h*l*m-r*d*m,E=h*v*c-g*u*c+g*a*p-r*v*p-h*a*m+r*u*m,k=g*u*l-h*v*l-g*a*d+r*v*d+h*a*f-r*u*f,R=e*y+n*x+s*E+o*k;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=y*C,t[1]=(v*d*o-u*f*o-v*s*p+n*f*p+u*s*m-n*d*m)*C,t[2]=(a*f*o-v*l*o+v*s*c-n*f*c-a*s*m+n*l*m)*C,t[3]=(u*l*o-a*d*o-u*s*c+n*d*c+a*s*p-n*l*p)*C,t[4]=x*C,t[5]=(h*f*o-g*d*o+g*s*p-e*f*p-h*s*m+e*d*m)*C,t[6]=(g*l*o-r*f*o-g*s*c+e*f*c+r*s*m-e*l*m)*C,t[7]=(r*d*o-h*l*o+h*s*c-e*d*c-r*s*p+e*l*p)*C,t[8]=E*C,t[9]=(g*u*o-h*v*o-g*n*p+e*v*p+h*n*m-e*u*m)*C,t[10]=(r*v*o-g*a*o+g*n*c-e*v*c-r*n*m+e*a*m)*C,t[11]=(h*a*o-r*u*o-h*n*c+e*u*c+r*n*p-e*a*p)*C,t[12]=k*C,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*f+e*u*f)*C,t[14]=(g*a*s-r*v*s-g*n*l+e*v*l+r*n*f-e*a*f)*C,t[15]=(r*u*s-h*a*s+h*n*l-e*u*l-r*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,u=a+a,d=o*c,p=o*h,g=o*u,v=r*h,f=r*u,m=a*u,y=l*c,x=l*h,E=l*u,k=n.x,R=n.y,C=n.z;return s[0]=(1-(v+m))*k,s[1]=(p+E)*k,s[2]=(g-x)*k,s[3]=0,s[4]=(p-E)*R,s[5]=(1-(d+m))*R,s[6]=(f+y)*R,s[7]=0,s[8]=(g+x)*C,s[9]=(f-y)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Qi.set(s[0],s[1],s[2]).length();const r=Qi.set(s[4],s[5],s[6]).length(),a=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],mn.copy(this);const c=1/o,h=1/r,u=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,e.setFromRotationMatrix(mn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Xn){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(a===Xn)p=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===ta)p=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Xn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(r-o),d=(e+t)*c,p=(n+s)*h;let g,v;if(a===Xn)g=(r+o)*u,v=-2*u;else if(a===ta)g=o*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qi=new I,mn=new ce,cg=new I(0,0,0),hg=new I(1,1,1),ti=new I,Qo=new I,tn=new I,Wh=new ce,Xh=new Vi;class Dn{constructor(t=0,e=0,n=0,s=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ze(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class Mf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ug=0;const qh=new I,Ji=new Vi,Un=new ce,Jo=new I,no=new I,dg=new I,fg=new Vi,Yh=new I(1,0,0),$h=new I(0,1,0),Kh=new I(0,0,1),jh={type:"added"},pg={type:"removed"},ts={type:"childadded",child:null},Qa={type:"childremoved",child:null};class Ee extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new I,e=new Dn,n=new Vi,s=new I(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Gt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(Yh,t)}rotateY(t){return this.rotateOnAxis($h,t)}rotateZ(t){return this.rotateOnAxis(Kh,t)}translateOnAxis(t,e){return qh.copy(t).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yh,t)}translateY(t){return this.translateOnAxis($h,t)}translateZ(t){return this.translateOnAxis(Kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jo.copy(t):Jo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(no,Jo,this.up):Un.lookAt(Jo,no,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Un),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jh),ts.child=t,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pg),Qa.child=t,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jh),ts.child=t,this.dispatchEvent(ts),ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,t,dg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,fg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const o=e[n];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++){const a=s[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),p=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ee.DEFAULT_UP=new I(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new I,Nn=new I,Ja=new I,Fn=new I,es=new I,ns=new I,Zh=new I,tl=new I,el=new I,nl=new I;class un{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){gn.subVectors(s,e),Nn.subVectors(n,e),Ja.subVectors(t,e);const r=gn.dot(gn),a=gn.dot(Nn),l=gn.dot(Ja),c=Nn.dot(Nn),h=Nn.dot(Ja),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(r*h-a*l)*d;return o.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Fn.x),l.addScaledVector(r,Fn.y),l.addScaledVector(a,Fn.z),l)}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),Nn.subVectors(t,e),gn.cross(Nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),gn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return un.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;es.subVectors(s,n),ns.subVectors(o,n),tl.subVectors(t,n);const l=es.dot(tl),c=ns.dot(tl);if(l<=0&&c<=0)return e.copy(n);el.subVectors(t,s);const h=es.dot(el),u=ns.dot(el);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(es,r);nl.subVectors(t,o);const p=es.dot(nl),g=ns.dot(nl);if(g>=0&&p<=g)return e.copy(o);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ns,a);const f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return Zh.subVectors(o,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Zh,a);const m=1/(f+v+d);return r=v*m,a=d*m,e.copy(n).addScaledVector(es,r).addScaledVector(ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},tr={h:0,s:0,l:0};function il(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=Sc(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=il(r,o,t+1/3),this.g=il(r,o,t),this.b=il(r,o,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=Qt){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qt){const n=Sf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}copyLinearToSRGB(t){return this.r=Wa(t.r),this.g=Wa(t.g),this.b=Wa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qt){return se.fromWorkingColorSpace(Oe.copy(this),t),Math.round(ze(Oe.r*255,0,255))*65536+Math.round(ze(Oe.g*255,0,255))*256+Math.round(ze(Oe.b*255,0,255))}getHexString(t=Qt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Oe.copy(this),e);const n=Oe.r,s=Oe.g,o=Oe.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-n)/u+2;break;case o:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Qt){se.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,s=Oe.b;return t!==Qt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(tr);const n=Eo(ei.h,tr.h,e),s=Eo(ei.s,tr.s,e),o=Eo(ei.l,tr.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new Mt;Mt.NAMES=Sf;let mg=0;class xi extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=As,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=Ql,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ql&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class pe extends xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new I,er=new Ut;class ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return wc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)er.fromBufferAttribute(this,e),er.applyMatrix3(t),this.setXY(e,er.x,er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array),o=ie(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nc&&(t.usage=this.usage),t}}class wf extends ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bf extends ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ae extends ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gg=0;const ln=new ce,sl=new Ee,is=new I,en=new Fo,io=new Fo,Le=new I;class Ne extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_f(t)?bf:wf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Gt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return sl.lookAt(t),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];en.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];io.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(en.min,io.min),en.expandByPoint(Le),Le.addVectors(en.max,io.max),en.expandByPoint(Le)):(en.expandByPoint(io.min),en.expandByPoint(io.max))}en.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Le.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Le.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(t,c),Le.add(is)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new I,l[F]=new I;const c=new I,h=new I,u=new I,d=new Ut,p=new Ut,g=new Ut,v=new I,f=new I;function m(F,b,S){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(o,F),p.fromBufferAttribute(o,b),g.fromBufferAttribute(o,S),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[F].add(v),a[b].add(v),a[S].add(v),l[F].add(f),l[b].add(f),l[S].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let F=0,b=y.length;F<b;++F){const S=y[F],P=S.start,X=S.count;for(let W=P,$=P+X;W<$;W+=3)m(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const x=new I,E=new I,k=new I,R=new I;function C(F){k.fromBufferAttribute(s,F),R.copy(k);const b=a[F];x.copy(b),x.sub(k.multiplyScalar(k.dot(b))).normalize(),E.crossVectors(R,b);const P=E.dot(l[F])<0?-1:1;r.setXYZW(F,x.x,x.y,x.z,P)}for(let F=0,b=y.length;F<b;++F){const S=y[F],P=S.start,X=S.count;for(let W=P,$=P+X;W<$;W+=3)C(t.getX(W+0)),C(t.getX(W+1)),C(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new I,o=new I,r=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,v),r.fromBufferAttribute(e,f),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,f=l.length;v<f;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let m=0;m<h;m++)d[g++]=c[p++]}return new ue(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qh=new ce,bi=new bc,nr=new Oo,Jh=new I,ss=new I,os=new I,rs=new I,ol=new I,ir=new I,sr=new Ut,or=new Ut,rr=new Ut,tu=new I,eu=new I,nu=new I,ar=new I,lr=new I;class Kt extends Ee{constructor(t=new Ne,e=new pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){ir.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],u=o[l];h!==0&&(ol.fromBufferAttribute(u,t),r?ir.addScaledVector(ol,h):ir.addScaledVector(ol.sub(e),h))}e.add(ir)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(o),bi.copy(t.ray).recast(t.near),!(nr.containsPoint(bi.origin)===!1&&(bi.intersectSphere(nr,Jh)===null||bi.origin.distanceToSquared(Jh)>(t.far-t.near)**2))&&(Qh.copy(o).invert(),bi.copy(t.ray).applyMatrix4(Qh),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,v=d.length;g<v;g++){const f=d[g],m=r[f.materialIndex],y=Math.max(f.start,p.start),x=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let E=y,k=x;E<k;E+=3){const R=a.getX(E),C=a.getX(E+1),F=a.getX(E+2);s=cr(this,m,t,n,c,h,u,R,C,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let f=g,m=v;f<m;f+=3){const y=a.getX(f),x=a.getX(f+1),E=a.getX(f+2);s=cr(this,r,t,n,c,h,u,y,x,E),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=d.length;g<v;g++){const f=d[g],m=r[f.materialIndex],y=Math.max(f.start,p.start),x=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let E=y,k=x;E<k;E+=3){const R=E,C=E+1,F=E+2;s=cr(this,m,t,n,c,h,u,R,C,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let f=g,m=v;f<m;f+=3){const y=f,x=f+1,E=f+2;s=cr(this,r,t,n,c,h,u,y,x,E),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function vg(i,t,e,n,s,o,r,a){let l;if(t.side===Ie?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===di,a),l===null)return null;lr.copy(a),lr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(lr);return c<e.near||c>e.far?null:{distance:c,point:lr.clone(),object:i}}function cr(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,ss),i.getVertexPosition(l,os),i.getVertexPosition(c,rs);const h=vg(i,t,e,n,ss,os,rs,ar);if(h){s&&(sr.fromBufferAttribute(s,a),or.fromBufferAttribute(s,l),rr.fromBufferAttribute(s,c),h.uv=un.getInterpolation(ar,ss,os,rs,sr,or,rr,new Ut)),o&&(sr.fromBufferAttribute(o,a),or.fromBufferAttribute(o,l),rr.fromBufferAttribute(o,c),h.uv1=un.getInterpolation(ar,ss,os,rs,sr,or,rr,new Ut)),r&&(tu.fromBufferAttribute(r,a),eu.fromBufferAttribute(r,l),nu.fromBufferAttribute(r,c),h.normal=un.getInterpolation(ar,ss,os,rs,tu,eu,nu,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new I,materialIndex:0};un.getNormal(ss,os,rs,u.normal),h.face=u}return h}class je extends Ne{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2));function g(v,f,m,y,x,E,k,R,C,F,b){const S=E/C,P=k/F,X=E/2,W=k/2,$=R/2,Z=C+1,j=F+1;let it=0,Y=0;const gt=new I;for(let O=0;O<j;O++){const z=O*P-W;for(let q=0;q<Z;q++){const Q=q*S-X;gt[v]=Q*y,gt[f]=z*x,gt[m]=$,c.push(gt.x,gt.y,gt.z),gt[v]=0,gt[f]=0,gt[m]=R>0?1:-1,h.push(gt.x,gt.y,gt.z),u.push(q/C),u.push(1-O/F),it+=1}}for(let O=0;O<F;O++)for(let z=0;z<C;z++){const q=d+z+Z*O,Q=d+z+Z*(O+1),D=d+(z+1)+Z*(O+1),U=d+(z+1)+Z*O;l.push(q,Q,U),l.push(Q,D,U),Y+=6}a.addGroup(p,Y,b),p+=Y,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function We(i){const t={};for(let e=0;e<i.length;e++){const n=Hs(i[e]);for(const s in n)t[s]=n[s]}return t}function _g(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ef(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const xg={clone:Hs,merge:We};var yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yg,this.fragmentShader=Mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=_g(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Tf extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new I,iu=new Ut,su=new Ut;class Ye extends Tf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Do*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,iu,su),e.subVectors(su,iu)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const as=-90,ls=1;class Sg extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ye(as,ls,t,e);s.layers=this.layers,this.add(s);const o=new Ye(as,ls,t,e);o.layers=this.layers,this.add(o);const r=new Ye(as,ls,t,e);r.layers=this.layers,this.add(r);const a=new Ye(as,ls,t,e);a.layers=this.layers,this.add(a);const l=new Ye(as,ls,t,e);l.layers=this.layers,this.add(l);const c=new Ye(as,ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Af extends Ue{constructor(t,e,n,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Fs,super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wg extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Af(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new je(5,5,5),o=new fn({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:hi});o.uniforms.tEquirect.value=e;const r=new Kt(s,o),a=e.minFilter;return e.minFilter===ai&&(e.minFilter=fe),new Sg(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const rl=new I,bg=new I,Eg=new Gt;class Vn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=rl.subVectors(n,e).cross(bg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(rl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Eg.getNormalMatrix(t),s=this.coplanarPoint(rl).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Oo,hr=new I;class Ec{constructor(t=new Vn,e=new Vn,n=new Vn,s=new Vn,o=new Vn,r=new Vn){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],v=s[10],f=s[11],m=s[12],y=s[13],x=s[14],E=s[15];if(n[0].setComponents(l-o,d-c,f-p,E-m).normalize(),n[1].setComponents(l+o,d+c,f+p,E+m).normalize(),n[2].setComponents(l+r,d+h,f+g,E+y).normalize(),n[3].setComponents(l-r,d-h,f-g,E-y).normalize(),n[4].setComponents(l-a,d-u,f-v,E-x).normalize(),e===Xn)n[5].setComponents(l+a,d+u,f+v,E+x).normalize();else if(e===ta)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(hr.x=s.normal.x>0?t.max.x:t.min.x,hr.y=s.normal.y>0?t.max.y:t.min.y,hr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(hr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rf(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Tg(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,a),u.count===-1&&d.length===0&&i.bufferSubData(c,0,h),d.length!==0){for(let p=0,g=d.length;p<g;p++){const v=d[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class $e extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],v=[],f=[];for(let m=0;m<h;m++){const y=m*d-r;for(let x=0;x<c;x++){const E=x*u-o;g.push(E,-y,0),v.push(0,0,1),f.push(x/a),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const x=y+c*m,E=y+c*(m+1),k=y+1+c*(m+1),R=y+1+c*m;p.push(x,E,R),p.push(E,k,R)}this.setIndex(p),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(v,3)),this.setAttribute("uv",new Ae(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rg=`#ifdef USE_ALPHAHASH
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
#endif`,Cg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kg=`#ifdef USE_AOMAP
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
#endif`,Ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ug=`#ifdef USE_BATCHING
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
#endif`,Ng=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Fg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zg=`#ifdef USE_IRIDESCENCE
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
#endif`,Hg=`#ifdef USE_BUMPMAP
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
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jg=`#define PI 3.141592653589793
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
} // validated`,Zg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qg=`vec3 transformedNormal = objectNormal;
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
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ev=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iv="gl_FragColor = linearToOutputTexel( gl_FragColor );",sv=`
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
}`,ov=`#ifdef USE_ENVMAP
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
#endif`,rv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,av=`#ifdef USE_ENVMAP
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
#endif`,lv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cv=`#ifdef USE_ENVMAP
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
#endif`,hv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pv=`#ifdef USE_GRADIENTMAP
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
}`,mv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_v=`uniform bool receiveShadow;
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
#endif`,xv=`#ifdef USE_ENVMAP
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
#endif`,yv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bv=`PhysicalMaterial material;
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
#endif`,Ev=`struct PhysicalMaterial {
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
}`,Tv=`
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
#endif`,Av=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nv=`#if defined( USE_POINTS_UV )
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
#endif`,Fv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ov=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gv=`#ifdef USE_MORPHTARGETS
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
#endif`,Vv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$v=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kv=`#ifdef USE_NORMALMAP
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
#endif`,jv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,n_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,u_=`float getShadowMask() {
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
}`,d_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f_=`#ifdef USE_SKINNING
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
#endif`,p_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m_=`#ifdef USE_SKINNING
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
#endif`,g_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,__=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y_=`#ifdef USE_TRANSMISSION
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
#endif`,M_=`#ifdef USE_TRANSMISSION
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
#endif`,S_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const T_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A_=`uniform sampler2D t2D;
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
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`#include <common>
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
}`,k_=`#if DEPTH_PACKING == 3200
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
}`,I_=`#define DISTANCE
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
}`,U_=`#define DISTANCE
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
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O_=`uniform float scale;
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
}`,B_=`uniform vec3 diffuse;
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
}`,z_=`#include <common>
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
}`,H_=`uniform vec3 diffuse;
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
}`,G_=`#define LAMBERT
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
}`,V_=`#define LAMBERT
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
}`,W_=`#define MATCAP
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
}`,X_=`#define MATCAP
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
}`,q_=`#define NORMAL
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
}`,Y_=`#define NORMAL
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
}`,$_=`#define PHONG
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
}`,K_=`#define PHONG
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
}`,j_=`#define STANDARD
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
}`,Z_=`#define STANDARD
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
}`,Q_=`#define TOON
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
}`,J_=`#define TOON
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
}`,tx=`uniform float size;
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
}`,ex=`uniform vec3 diffuse;
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
}`,nx=`#include <common>
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
}`,ix=`uniform vec3 color;
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
}`,sx=`uniform float rotation;
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
}`,ox=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Ag,alphahash_pars_fragment:Rg,alphamap_fragment:Cg,alphamap_pars_fragment:Pg,alphatest_fragment:Dg,alphatest_pars_fragment:Lg,aomap_fragment:kg,aomap_pars_fragment:Ig,batching_pars_vertex:Ug,batching_vertex:Ng,begin_vertex:Fg,beginnormal_vertex:Og,bsdfs:Bg,iridescence_fragment:zg,bumpmap_pars_fragment:Hg,clipping_planes_fragment:Gg,clipping_planes_pars_fragment:Vg,clipping_planes_pars_vertex:Wg,clipping_planes_vertex:Xg,color_fragment:qg,color_pars_fragment:Yg,color_pars_vertex:$g,color_vertex:Kg,common:jg,cube_uv_reflection_fragment:Zg,defaultnormal_vertex:Qg,displacementmap_pars_vertex:Jg,displacementmap_vertex:tv,emissivemap_fragment:ev,emissivemap_pars_fragment:nv,colorspace_fragment:iv,colorspace_pars_fragment:sv,envmap_fragment:ov,envmap_common_pars_fragment:rv,envmap_pars_fragment:av,envmap_pars_vertex:lv,envmap_physical_pars_fragment:xv,envmap_vertex:cv,fog_vertex:hv,fog_pars_vertex:uv,fog_fragment:dv,fog_pars_fragment:fv,gradientmap_pars_fragment:pv,lightmap_pars_fragment:mv,lights_lambert_fragment:gv,lights_lambert_pars_fragment:vv,lights_pars_begin:_v,lights_toon_fragment:yv,lights_toon_pars_fragment:Mv,lights_phong_fragment:Sv,lights_phong_pars_fragment:wv,lights_physical_fragment:bv,lights_physical_pars_fragment:Ev,lights_fragment_begin:Tv,lights_fragment_maps:Av,lights_fragment_end:Rv,logdepthbuf_fragment:Cv,logdepthbuf_pars_fragment:Pv,logdepthbuf_pars_vertex:Dv,logdepthbuf_vertex:Lv,map_fragment:kv,map_pars_fragment:Iv,map_particle_fragment:Uv,map_particle_pars_fragment:Nv,metalnessmap_fragment:Fv,metalnessmap_pars_fragment:Ov,morphinstance_vertex:Bv,morphcolor_vertex:zv,morphnormal_vertex:Hv,morphtarget_pars_vertex:Gv,morphtarget_vertex:Vv,normal_fragment_begin:Wv,normal_fragment_maps:Xv,normal_pars_fragment:qv,normal_pars_vertex:Yv,normal_vertex:$v,normalmap_pars_fragment:Kv,clearcoat_normal_fragment_begin:jv,clearcoat_normal_fragment_maps:Zv,clearcoat_pars_fragment:Qv,iridescence_pars_fragment:Jv,opaque_fragment:t_,packing:e_,premultiplied_alpha_fragment:n_,project_vertex:i_,dithering_fragment:s_,dithering_pars_fragment:o_,roughnessmap_fragment:r_,roughnessmap_pars_fragment:a_,shadowmap_pars_fragment:l_,shadowmap_pars_vertex:c_,shadowmap_vertex:h_,shadowmask_pars_fragment:u_,skinbase_vertex:d_,skinning_pars_vertex:f_,skinning_vertex:p_,skinnormal_vertex:m_,specularmap_fragment:g_,specularmap_pars_fragment:v_,tonemapping_fragment:__,tonemapping_pars_fragment:x_,transmission_fragment:y_,transmission_pars_fragment:M_,uv_pars_fragment:S_,uv_pars_vertex:w_,uv_vertex:b_,worldpos_vertex:E_,background_vert:T_,background_frag:A_,backgroundCube_vert:R_,backgroundCube_frag:C_,cube_vert:P_,cube_frag:D_,depth_vert:L_,depth_frag:k_,distanceRGBA_vert:I_,distanceRGBA_frag:U_,equirect_vert:N_,equirect_frag:F_,linedashed_vert:O_,linedashed_frag:B_,meshbasic_vert:z_,meshbasic_frag:H_,meshlambert_vert:G_,meshlambert_frag:V_,meshmatcap_vert:W_,meshmatcap_frag:X_,meshnormal_vert:q_,meshnormal_frag:Y_,meshphong_vert:$_,meshphong_frag:K_,meshphysical_vert:j_,meshphysical_frag:Z_,meshtoon_vert:Q_,meshtoon_frag:J_,points_vert:tx,points_frag:ex,shadow_vert:nx,shadow_frag:ix,sprite_vert:sx,sprite_frag:ox},ut={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Cn={basic:{uniforms:We([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:We([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:We([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:We([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:We([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:We([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:We([ut.points,ut.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:We([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:We([ut.common,ut.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:We([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:We([ut.sprite,ut.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:We([ut.common,ut.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:We([ut.lights,ut.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Cn.physical={uniforms:We([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const ur={r:0,b:0,g:0},Ti=new Dn,rx=new ce;function ax(i,t,e,n,s,o,r){const a=new Mt(0);let l=o===!0?0:1,c,h,u=null,d=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function v(y){let x=!1;const E=g(y);E===null?m(a,l):E&&E.isColor&&(m(E,1),x=!0);const k=i.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,r):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(y,x){const E=g(x);E&&(E.isCubeTexture||E.mapping===wa)?(h===void 0&&(h=new Kt(new je(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Hs(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ti.copy(x.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rx.makeRotationFromEuler(Ti)),h.material.toneMapped=se.getTransfer(E.colorSpace)!==de,(u!==E||d!==E.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Kt(new $e(2,2),new fn({name:"BackgroundMaterial",uniforms:Hs(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=se.getTransfer(E.colorSpace)!==de,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(ur,Ef(i)),n.buffers.color.setClear(ur.r,ur.g,ur.b,x,r)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:v,addToRenderList:f}}function lx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(S,P,X,W,$){let Z=!1;const j=u(W,X,P);o!==j&&(o=j,c(o.object)),Z=p(S,W,X,$),Z&&g(S,W,X,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(Z||r)&&(r=!1,E(S,P,X,W),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,P,X){const W=X.wireframe===!0;let $=n[S.id];$===void 0&&($={},n[S.id]=$);let Z=$[P.id];Z===void 0&&(Z={},$[P.id]=Z);let j=Z[W];return j===void 0&&(j=d(l()),Z[W]=j),j}function d(S){const P=[],X=[],W=[];for(let $=0;$<e;$++)P[$]=0,X[$]=0,W[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:X,attributeDivisors:W,object:S,attributes:{},index:null}}function p(S,P,X,W){const $=o.attributes,Z=P.attributes;let j=0;const it=X.getAttributes();for(const Y in it)if(it[Y].location>=0){const O=$[Y];let z=Z[Y];if(z===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(z=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(z=S.instanceColor)),O===void 0||O.attribute!==z||z&&O.data!==z.data)return!0;j++}return o.attributesNum!==j||o.index!==W}function g(S,P,X,W){const $={},Z=P.attributes;let j=0;const it=X.getAttributes();for(const Y in it)if(it[Y].location>=0){let O=Z[Y];O===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(O=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(O=S.instanceColor));const z={};z.attribute=O,O&&O.data&&(z.data=O.data),$[Y]=z,j++}o.attributes=$,o.attributesNum=j,o.index=W}function v(){const S=o.newAttributes;for(let P=0,X=S.length;P<X;P++)S[P]=0}function f(S){m(S,0)}function m(S,P){const X=o.newAttributes,W=o.enabledAttributes,$=o.attributeDivisors;X[S]=1,W[S]===0&&(i.enableVertexAttribArray(S),W[S]=1),$[S]!==P&&(i.vertexAttribDivisor(S,P),$[S]=P)}function y(){const S=o.newAttributes,P=o.enabledAttributes;for(let X=0,W=P.length;X<W;X++)P[X]!==S[X]&&(i.disableVertexAttribArray(X),P[X]=0)}function x(S,P,X,W,$,Z,j){j===!0?i.vertexAttribIPointer(S,P,X,$,Z):i.vertexAttribPointer(S,P,X,W,$,Z)}function E(S,P,X,W){v();const $=W.attributes,Z=X.getAttributes(),j=P.defaultAttributeValues;for(const it in Z){const Y=Z[it];if(Y.location>=0){let gt=$[it];if(gt===void 0&&(it==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),it==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor)),gt!==void 0){const O=gt.normalized,z=gt.itemSize,q=t.get(gt);if(q===void 0)continue;const Q=q.buffer,D=q.type,U=q.bytesPerElement,J=D===i.INT||D===i.UNSIGNED_INT||gt.gpuType===cf;if(gt.isInterleavedBufferAttribute){const et=gt.data,xt=et.stride,ct=gt.offset;if(et.isInstancedInterleavedBuffer){for(let ht=0;ht<Y.locationSize;ht++)m(Y.location+ht,et.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ht=0;ht<Y.locationSize;ht++)f(Y.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let ht=0;ht<Y.locationSize;ht++)x(Y.location+ht,z/Y.locationSize,D,O,xt*U,(ct+z/Y.locationSize*ht)*U,J)}else{if(gt.isInstancedBufferAttribute){for(let et=0;et<Y.locationSize;et++)m(Y.location+et,gt.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let et=0;et<Y.locationSize;et++)f(Y.location+et);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let et=0;et<Y.locationSize;et++)x(Y.location+et,z/Y.locationSize,D,O,z*U,z/Y.locationSize*et*U,J)}}else if(j!==void 0){const O=j[it];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(Y.location,O);break;case 3:i.vertexAttrib3fv(Y.location,O);break;case 4:i.vertexAttrib4fv(Y.location,O);break;default:i.vertexAttrib1fv(Y.location,O)}}}}y()}function k(){F();for(const S in n){const P=n[S];for(const X in P){const W=P[X];for(const $ in W)h(W[$].object),delete W[$];delete P[X]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const X in P){const W=P[X];for(const $ in W)h(W[$].object),delete W[$];delete P[X]}delete n[S.id]}function C(S){for(const P in n){const X=n[P];if(X[S.id]===void 0)continue;const W=X[S.id];for(const $ in W)h(W[$].object),delete W[$];delete X[S.id]}}function F(){b(),r=!0,o!==s&&(o=s,c(o.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:b,dispose:k,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:f,disableUnusedAttributes:y}}function cx(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<u;p++)this.render(c[p],h[p]);else{d.multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hx(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==dn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const C=R===gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==pi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==li&&!C)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,k=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:f,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:E,maxSamples:k}}function ux(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new Vn,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,f=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||o&&!f)o?h(null):c();else{const y=o?0:n,x=y*4;let E=m.clippingState||null;l.value=E,E=h(g,d,x,p);for(let k=0;k!==x;++k)E[k]=e[k];m.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const v=u!==null?u.length:0;let f=null;if(v!==0){if(f=l.value,g!==!0||f===null){const m=p+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(f===null||f.length<m)&&(f=new Float32Array(m));for(let x=0,E=p;x!==v;++x,E+=4)r.copy(u[x]).applyMatrix4(y,a),r.normal.toArray(f,E),f[E+3]=r.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}function dx(i){let t=new WeakMap;function e(r,a){return a===Jl?r.mapping=Fs:a===tc&&(r.mapping=Os),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Jl||a===tc)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new wg(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class ko extends Tf{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ss=4,ou=[.125,.215,.35,.446,.526,.582],ki=20,al=new ko,ru=new Mt;let ll=null,cl=0,hl=0,ul=!1;const Di=(1+Math.sqrt(5))/2,cs=1/Di,au=[new I(-Di,cs,0),new I(Di,cs,0),new I(-cs,0,Di),new I(cs,0,Di),new I(0,Di,-cs),new I(0,Di,cs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class lu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ll,cl,hl),this._renderer.xr.enabled=ul,t.scissorTest=!1,dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fs||t.mapping===Os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fe,minFilter:fe,generateMipmaps:!1,type:gi,format:dn,colorSpace:_i,depthBuffer:!1},s=cu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cu(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fx(o)),this._blurMaterial=px(o,t,e)}return s}_compileMaterial(t){const e=new Kt(this._lodPlanes[0],t);this._renderer.compile(e,al)}_sceneToCubeUV(t,e,n,s){const a=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ru),h.toneMapping=qn,h.autoClear=!1;const p=new pe({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new Kt(new je,p);let v=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,v=!0):(p.color.copy(ru),v=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;dr(s,y*x,m>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Fs||t.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hu());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Kt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;dr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,al)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=au[(s-o-1)%au.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Kt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*ki-1),v=o/g,f=isFinite(o)?1+Math.floor(h*v):ki;f>ki&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ki}`);const m=[];let y=0;for(let C=0;C<ki;++C){const F=C/v,b=Math.exp(-F*F/2);m.push(b),C===0?y+=b:C<f&&(y+=2*b)}for(let C=0;C<m.length;C++)m[C]=m[C]/y;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const E=this._sizeLods[s],k=3*E*(s>x-Ss?s-x+Ss:0),R=4*(this._cubeSize-E);dr(e,k,R,3*E,2*E),l.setRenderTarget(e),l.render(u,al)}}function fx(i){const t=[],e=[],n=[];let s=i;const o=i-Ss+1+ou.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>i-Ss?l=ou[r-i+Ss-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,f=2,m=1,y=new Float32Array(v*g*p),x=new Float32Array(f*g*p),E=new Float32Array(m*g*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,F=R>2?0:-1,b=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];y.set(b,v*g*R),x.set(d,f*g*R);const S=[R,R,R,R,R,R];E.set(S,m*g*R)}const k=new Ne;k.setAttribute("position",new ue(y,v)),k.setAttribute("uv",new ue(x,f)),k.setAttribute("faceIndex",new ue(E,m)),t.push(k),s>Ss&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function cu(i,t,e){const n=new wn(i,t,e);return n.texture.mapping=wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function dr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function px(i,t,e){const n=new Float32Array(ki),s=new I(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function hu(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function uu(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Tc(){return`

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
	`}function mx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jl||l===tc,h=l===Fs||l===Os;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new lu(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new lu(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function gx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&wc("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function vx(i,t,e,n){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let f=0,m=v.length;f<m;f++)t.remove(v[f])}d.removeEventListener("dispose",r),delete s[d.id];const p=o.get(d);p&&(t.remove(p),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let f=0,m=v.length;f<m;f++)t.update(v[f],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let x=0,E=y.length;x<E;x+=3){const k=y[x+0],R=y[x+1],C=y[x+2];d.push(k,R,R,C,C,k)}}else if(g!==void 0){const y=g.array;v=g.version;for(let x=0,E=y.length/3-1;x<E;x+=3){const k=x+0,R=x+1,C=x+2;d.push(k,R,R,C,C,k)}}else return;const f=new(_f(d)?bf:wf)(d,1);f.version=v;const m=o.get(u);m&&t.remove(m),o.set(u,f)}function h(u){const d=o.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function _x(i,t,e){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function l(d,p){i.drawElements(n,p,o,d*r),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,o,d*r,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let f=0;f<g;f++)this.render(d[f]/r,p[f]);else{v.multiDrawElementsWEBGL(n,p,0,o,d,0,g);let f=0;for(let m=0;m<g;m++)f+=p[m];e.update(f,n,1)}}function u(d,p,g,v){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)c(d[m]/r,p[m],v[m]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,o,d,0,v,0,g);let m=0;for(let y=0;y<g;y++)m+=p[y];for(let y=0;y<v.length;y++)e.update(m,n,v[y])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function yx(i,t,e){const n=new WeakMap,s=new _e;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),f===!0&&(E=3);let k=a.attributes.position.count*E,R=1;k>t.maxTextureSize&&(R=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const C=new Float32Array(k*R*4*u),F=new yf(C,k,R,u);F.type=li,F.needsUpdate=!0;const b=E*4;for(let P=0;P<u;P++){const X=m[P],W=y[P],$=x[P],Z=k*R*4*P;for(let j=0;j<X.count;j++){const it=j*b;g===!0&&(s.fromBufferAttribute(X,j),C[Z+it+0]=s.x,C[Z+it+1]=s.y,C[Z+it+2]=s.z,C[Z+it+3]=0),v===!0&&(s.fromBufferAttribute(W,j),C[Z+it+4]=s.x,C[Z+it+5]=s.y,C[Z+it+6]=s.z,C[Z+it+7]=0),f===!0&&(s.fromBufferAttribute($,j),C[Z+it+8]=s.x,C[Z+it+9]=s.y,C[Z+it+10]=s.z,C[Z+it+11]=$.itemSize===4?s.w:1)}}d={count:u,texture:F,size:new Ut(k,R)},n.set(a,d),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function Mx(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class ea extends Ue{constructor(t,e,n,s,o,r,a,l,c,h=Rs){if(h!==Rs&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Rs&&(n=mi),n===void 0&&h===zs&&(n=Bs),super(null,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:le,this.minFilter=l!==void 0?l:le,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Cf=new Ue,Pf=new ea(1,1);Pf.compareFunction=vf;const Df=new yf,Lf=new ag,kf=new Af,du=[],fu=[],pu=new Float32Array(16),mu=new Float32Array(9),gu=new Float32Array(4);function Zs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=du[s];if(o===void 0&&(o=new Float32Array(s),du[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ea(i,t){let e=fu[t];e===void 0&&(e=new Int32Array(t),fu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Sx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function bx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function Ex(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function Tx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;gu.set(n),i.uniformMatrix2fv(this.addr,!1,gu),Ce(e,n)}}function Ax(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;mu.set(n),i.uniformMatrix3fv(this.addr,!1,mu),Ce(e,n)}}function Rx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;pu.set(n),i.uniformMatrix4fv(this.addr,!1,pu),Ce(e,n)}}function Cx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Px(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function Dx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function Lx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function kx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ix(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function Ux(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function Nx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function Fx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const o=this.type===i.SAMPLER_2D_SHADOW?Pf:Cf;e.setTexture2D(t||o,s)}function Ox(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Lf,s)}function Bx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||kf,s)}function zx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Df,s)}function Hx(i){switch(i){case 5126:return Sx;case 35664:return wx;case 35665:return bx;case 35666:return Ex;case 35674:return Tx;case 35675:return Ax;case 35676:return Rx;case 5124:case 35670:return Cx;case 35667:case 35671:return Px;case 35668:case 35672:return Dx;case 35669:case 35673:return Lx;case 5125:return kx;case 36294:return Ix;case 36295:return Ux;case 36296:return Nx;case 35678:case 36198:case 36298:case 36306:case 35682:return Fx;case 35679:case 36299:case 36307:return Ox;case 35680:case 36300:case 36308:case 36293:return Bx;case 36289:case 36303:case 36311:case 36292:return zx}}function Gx(i,t){i.uniform1fv(this.addr,t)}function Vx(i,t){const e=Zs(t,this.size,2);i.uniform2fv(this.addr,e)}function Wx(i,t){const e=Zs(t,this.size,3);i.uniform3fv(this.addr,e)}function Xx(i,t){const e=Zs(t,this.size,4);i.uniform4fv(this.addr,e)}function qx(i,t){const e=Zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Yx(i,t){const e=Zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $x(i,t){const e=Zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Kx(i,t){i.uniform1iv(this.addr,t)}function jx(i,t){i.uniform2iv(this.addr,t)}function Zx(i,t){i.uniform3iv(this.addr,t)}function Qx(i,t){i.uniform4iv(this.addr,t)}function Jx(i,t){i.uniform1uiv(this.addr,t)}function ty(i,t){i.uniform2uiv(this.addr,t)}function ey(i,t){i.uniform3uiv(this.addr,t)}function ny(i,t){i.uniform4uiv(this.addr,t)}function iy(i,t,e){const n=this.cache,s=t.length,o=Ea(e,s);Re(n,o)||(i.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Cf,o[r])}function sy(i,t,e){const n=this.cache,s=t.length,o=Ea(e,s);Re(n,o)||(i.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Lf,o[r])}function oy(i,t,e){const n=this.cache,s=t.length,o=Ea(e,s);Re(n,o)||(i.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||kf,o[r])}function ry(i,t,e){const n=this.cache,s=t.length,o=Ea(e,s);Re(n,o)||(i.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Df,o[r])}function ay(i){switch(i){case 5126:return Gx;case 35664:return Vx;case 35665:return Wx;case 35666:return Xx;case 35674:return qx;case 35675:return Yx;case 35676:return $x;case 5124:case 35670:return Kx;case 35667:case 35671:return jx;case 35668:case 35672:return Zx;case 35669:case 35673:return Qx;case 5125:return Jx;case 36294:return ty;case 36295:return ey;case 36296:return ny;case 35678:case 36198:case 36298:case 36306:case 35682:return iy;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return oy;case 36289:case 36303:case 36311:case 36292:return ry}}class ly{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hx(e.type)}}class cy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ay(e.type)}}class hy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const dl=/(\w+)(\])?(\[|\.)?/g;function vu(i,t){i.seq.push(t),i.map[t.id]=t}function uy(i,t,e){const n=i.name,s=n.length;for(dl.lastIndex=0;;){const o=dl.exec(n),r=dl.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){vu(e,c===void 0?new ly(a,i,t):new cy(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new hy(a),vu(e,u)),e=u}}}class qr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);uy(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function _u(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const dy=37297;let fy=0;function py(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function my(i){const t=se.getPrimaries(se.workingColorSpace),e=se.getPrimaries(i);let n;switch(t===e?n="":t===Jr&&e===Qr?n="LinearDisplayP3ToLinearSRGB":t===Qr&&e===Jr&&(n="LinearSRGBToLinearDisplayP3"),i){case _i:case ba:return[n,"LinearTransferOETF"];case Qt:case Mc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function xu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+py(i.getShaderSource(t),r)}else return s}function gy(i,t){const e=my(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function vy(i,t){let e;switch(t){case d0:e="Linear";break;case f0:e="Reinhard";break;case p0:e="OptimizedCineon";break;case m0:e="ACESFilmic";break;case v0:e="AgX";break;case _0:e="Neutral";break;case g0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function _y(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function xy(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yy(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function xo(i){return i!==""}function yu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const My=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(i){return i.replace(My,wy)}const Sy=new Map;function wy(i,t){let e=Ht[t];if(e===void 0){const n=Sy.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ic(e)}const by=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Su(i){return i.replace(by,Ey)}function Ey(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function wu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Ty(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===of?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===rf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ay(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fs:case Os:t="ENVMAP_TYPE_CUBE";break;case wa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ry(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Os:t="ENVMAP_MODE_REFRACTION";break}return t}function Cy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case af:t="ENVMAP_BLENDING_MULTIPLY";break;case h0:t="ENVMAP_BLENDING_MIX";break;case u0:t="ENVMAP_BLENDING_ADD";break}return t}function Py(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Dy(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=Ty(e),c=Ay(e),h=Ry(e),u=Cy(e),d=Py(e),p=_y(e),g=xy(o),v=s.createProgram();let f,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xo).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xo).join(`
`),m.length>0&&(m+=`
`)):(f=[wu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),m=[wu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==qn?vy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,gy("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xo).join(`
`)),r=ic(r),r=yu(r,e),r=Mu(r,e),a=ic(a),a=yu(a,e),a=Mu(a,e),r=Su(r),a=Su(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",e.glslVersion===Oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+f+r,E=y+m+a,k=_u(s,s.VERTEX_SHADER,x),R=_u(s,s.FRAGMENT_SHADER,E);s.attachShader(v,k),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(P){if(i.debug.checkShaderErrors){const X=s.getProgramInfoLog(v).trim(),W=s.getShaderInfoLog(k).trim(),$=s.getShaderInfoLog(R).trim();let Z=!0,j=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,k,R);else{const it=xu(s,k,"vertex"),Y=xu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+it+`
`+Y)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||$==="")&&(j=!1);j&&(P.diagnostics={runnable:Z,programLog:X,vertexShader:{log:W,prefix:f},fragmentShader:{log:$,prefix:m}})}s.deleteShader(k),s.deleteShader(R),F=new qr(s,v),b=yy(s,v)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,dy)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fy++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=k,this.fragmentShader=R,this}let Ly=0;class ky{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Iy(t),e.set(t,n)),n}}class Iy{constructor(t){this.id=Ly++,this.code=t,this.usedTimes=0}}function Uy(i,t,e,n,s,o,r){const a=new Mf,l=new ky,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function f(b,S,P,X,W){const $=X.fog,Z=W.geometry,j=b.isMeshStandardMaterial?X.environment:null,it=(b.isMeshStandardMaterial?e:t).get(b.envMap||j),Y=it&&it.mapping===wa?it.image.height:null,gt=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const O=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,z=O!==void 0?O.length:0;let q=0;Z.morphAttributes.position!==void 0&&(q=1),Z.morphAttributes.normal!==void 0&&(q=2),Z.morphAttributes.color!==void 0&&(q=3);let Q,D,U,J;if(gt){const oe=Cn[gt];Q=oe.vertexShader,D=oe.fragmentShader}else Q=b.vertexShader,D=b.fragmentShader,l.update(b),U=l.getVertexShaderID(b),J=l.getFragmentShaderID(b);const et=i.getRenderTarget(),xt=W.isInstancedMesh===!0,ct=W.isBatchedMesh===!0,ht=!!b.map,A=!!b.matcap,St=!!it,Rt=!!b.aoMap,Ft=!!b.lightMap,dt=!!b.bumpMap,kt=!!b.normalMap,At=!!b.displacementMap,Dt=!!b.emissiveMap,te=!!b.metalnessMap,T=!!b.roughnessMap,M=b.anisotropy>0,V=b.clearcoat>0,nt=b.dispersion>0,st=b.iridescence>0,ot=b.sheen>0,Pt=b.transmission>0,ft=M&&!!b.anisotropyMap,pt=V&&!!b.clearcoatMap,Vt=V&&!!b.clearcoatNormalMap,rt=V&&!!b.clearcoatRoughnessMap,Et=st&&!!b.iridescenceMap,qt=st&&!!b.iridescenceThicknessMap,Ot=ot&&!!b.sheenColorMap,mt=ot&&!!b.sheenRoughnessMap,Wt=!!b.specularMap,Yt=!!b.specularColorMap,xe=!!b.specularIntensityMap,L=Pt&&!!b.transmissionMap,vt=Pt&&!!b.thicknessMap,K=!!b.gradientMap,tt=!!b.alphaMap,lt=b.alphaTest>0,Bt=!!b.alphaHash,Jt=!!b.extensions;let ye=qn;b.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ye=i.toneMapping);const Pe={shaderID:gt,shaderType:b.type,shaderName:b.name,vertexShader:Q,fragmentShader:D,defines:b.defines,customVertexShaderID:U,customFragmentShaderID:J,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:ct,batchingColor:ct&&W._colorsTexture!==null,instancing:xt,instancingColor:xt&&W.instanceColor!==null,instancingMorph:xt&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:_i,alphaToCoverage:!!b.alphaToCoverage,map:ht,matcap:A,envMap:St,envMapMode:St&&it.mapping,envMapCubeUVHeight:Y,aoMap:Rt,lightMap:Ft,bumpMap:dt,normalMap:kt,displacementMap:d&&At,emissiveMap:Dt,normalMapObjectSpace:kt&&b.normalMapType===P0,normalMapTangentSpace:kt&&b.normalMapType===gf,metalnessMap:te,roughnessMap:T,anisotropy:M,anisotropyMap:ft,clearcoat:V,clearcoatMap:pt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:rt,dispersion:nt,iridescence:st,iridescenceMap:Et,iridescenceThicknessMap:qt,sheen:ot,sheenColorMap:Ot,sheenRoughnessMap:mt,specularMap:Wt,specularColorMap:Yt,specularIntensityMap:xe,transmission:Pt,transmissionMap:L,thicknessMap:vt,gradientMap:K,opaque:b.transparent===!1&&b.blending===As&&b.alphaToCoverage===!1,alphaMap:tt,alphaTest:lt,alphaHash:Bt,combine:b.combine,mapUv:ht&&v(b.map.channel),aoMapUv:Rt&&v(b.aoMap.channel),lightMapUv:Ft&&v(b.lightMap.channel),bumpMapUv:dt&&v(b.bumpMap.channel),normalMapUv:kt&&v(b.normalMap.channel),displacementMapUv:At&&v(b.displacementMap.channel),emissiveMapUv:Dt&&v(b.emissiveMap.channel),metalnessMapUv:te&&v(b.metalnessMap.channel),roughnessMapUv:T&&v(b.roughnessMap.channel),anisotropyMapUv:ft&&v(b.anisotropyMap.channel),clearcoatMapUv:pt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:mt&&v(b.sheenRoughnessMap.channel),specularMapUv:Wt&&v(b.specularMap.channel),specularColorMapUv:Yt&&v(b.specularColorMap.channel),specularIntensityMapUv:xe&&v(b.specularIntensityMap.channel),transmissionMapUv:L&&v(b.transmissionMap.channel),thicknessMapUv:vt&&v(b.thicknessMap.channel),alphaMapUv:tt&&v(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(kt||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Z.attributes.uv&&(ht||tt),fog:!!$,useFog:b.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:W.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:q,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,decodeVideoTexture:ht&&b.map.isVideoTexture===!0&&se.getTransfer(b.map.colorSpace)===de,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===He,flipSided:b.side===Ie,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Jt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Jt&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function m(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)S.push(P),S.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(y(S,b),x(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function y(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function x(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),b.push(a.mask)}function E(b){const S=g[b.type];let P;if(S){const X=Cn[S];P=xg.clone(X.uniforms)}else P=b.uniforms;return P}function k(b,S){let P;for(let X=0,W=h.length;X<W;X++){const $=h[X];if($.cacheKey===S){P=$,++P.usedTimes;break}}return P===void 0&&(P=new Dy(i,S,b,o),h.push(P)),P}function R(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function C(b){l.remove(b)}function F(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:E,acquireProgram:k,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:F}}function Ny(){let i=new WeakMap;function t(o){let r=i.get(o);return r===void 0&&(r={},i.set(o,r)),r}function e(o){i.delete(o)}function n(o,r,a){i.get(o)[r]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Fy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function bu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Eu(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u,d,p,g,v,f){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:f},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=f),t++,m}function a(u,d,p,g,v,f){const m=r(u,d,p,g,v,f);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):e.push(m)}function l(u,d,p,g,v,f){const m=r(u,d,p,g,v,f);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||Fy),n.length>1&&n.sort(d||bu),s.length>1&&s.sort(d||bu)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function Oy(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Eu,i.set(n,[r])):s>=o.length?(r=new Eu,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function By(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Mt};break;case"SpotLight":e={position:new I,direction:new I,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function zy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Hy=0;function Gy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vy(i){const t=new By,e=zy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,o=new ce,r=new ce;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,v=0,f=0,m=0,y=0,x=0,E=0,k=0,R=0,C=0;c.sort(Gy);for(let b=0,S=c.length;b<S;b++){const P=c[b],X=P.color,W=P.intensity,$=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=X.r*W,u+=X.g*W,d+=X.b*W;else if(P.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(P.sh.coefficients[j],W);C++}else if(P.isDirectionalLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const it=P.shadow,Y=e.get(P);Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=P.shadow.matrix,y++}n.directional[p]=j,p++}else if(P.isSpotLight){const j=t.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(X).multiplyScalar(W),j.distance=$,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,n.spot[v]=j;const it=P.shadow;if(P.map&&(n.spotLightMap[k]=P.map,k++,it.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[v]=it.matrix,P.castShadow){const Y=e.get(P);Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=Z,E++}v++}else if(P.isRectAreaLight){const j=t.get(P);j.color.copy(X).multiplyScalar(W),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),n.rectArea[f]=j,f++}else if(P.isPointLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),j.distance=P.distance,j.decay=P.decay,P.castShadow){const it=P.shadow,Y=e.get(P);Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,Y.shadowCameraNear=it.camera.near,Y.shadowCameraFar=it.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=j,g++}else if(P.isHemisphereLight){const j=t.get(P);j.skyColor.copy(P.color).multiplyScalar(W),j.groundColor.copy(P.groundColor).multiplyScalar(W),n.hemi[m]=j,m++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const F=n.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==f||F.hemiLength!==m||F.numDirectionalShadows!==y||F.numPointShadows!==x||F.numSpotShadows!==E||F.numSpotMaps!==k||F.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=f,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=E+k-R,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,F.directionalLength=p,F.pointLength=g,F.spotLength=v,F.rectAreaLength=f,F.hemiLength=m,F.numDirectionalShadows=y,F.numPointShadows=x,F.numSpotShadows=E,F.numSpotMaps=k,F.numLightProbes=C,n.version=Hy++)}function l(c,h){let u=0,d=0,p=0,g=0,v=0;const f=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const x=c[m];if(x.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),u++}else if(x.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),p++}else if(x.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),r.identity(),o.copy(x.matrixWorld),o.premultiply(f),r.extractRotation(o),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),g++}else if(x.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),d++}else if(x.isHemisphereLight){const E=n.hemi[v];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(f),v++}}}return{setup:a,setupView:l,state:n}}function Tu(i){const t=new Vy(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function Wy(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Tu(i),t.set(s,[a])):o>=r.length?(a=new Tu(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class If extends xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=C0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xy extends xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const qy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yy=`uniform sampler2D shadow_pass;
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
}`;function $y(i,t,e){let n=new Ec;const s=new Ut,o=new Ut,r=new _e,a=new If({depthPacking:mf}),l=new Xy,c={},h=e.maxTextureSize,u={[di]:Ie,[Ie]:di,[He]:He},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:qy,fragmentShader:Yy}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ne;g.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Kt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=of;let m=this.type;this.render=function(R,C,F){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),X=i.state;X.setBlending(hi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const W=m!==zn&&this.type===zn,$=m===zn&&this.type!==zn;for(let Z=0,j=R.length;Z<j;Z++){const it=R[Z],Y=it.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const gt=Y.getFrameExtents();if(s.multiply(gt),o.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/gt.x),s.x=o.x*gt.x,Y.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/gt.y),s.y=o.y*gt.y,Y.mapSize.y=o.y)),Y.map===null||W===!0||$===!0){const z=this.type!==zn?{minFilter:le,magFilter:le}:{};Y.map!==null&&Y.map.dispose(),Y.map=new wn(s.x,s.y,z),Y.map.texture.name=it.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const O=Y.getViewportCount();for(let z=0;z<O;z++){const q=Y.getViewport(z);r.set(o.x*q.x,o.y*q.y,o.x*q.z,o.y*q.w),X.viewport(r),Y.updateMatrices(it,z),n=Y.getFrustum(),E(C,F,Y.camera,it,this.type)}Y.isPointLightShadow!==!0&&this.type===zn&&y(Y,F),Y.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(b,S,P)};function y(R,C){const F=t.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new wn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,F,d,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,F,p,v,null)}function x(R,C,F,b){let S=null;const P=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)S=P;else if(S=F.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const X=S.uuid,W=C.uuid;let $=c[X];$===void 0&&($={},c[X]=$);let Z=$[W];Z===void 0&&(Z=S.clone(),$[W]=Z,C.addEventListener("dispose",k)),S=Z}if(S.visible=C.visible,S.wireframe=C.wireframe,b===zn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=i.properties.get(S);X.light=F}return S}function E(R,C,F,b,S){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===zn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const W=t.update(R),$=R.material;if(Array.isArray($)){const Z=W.groups;for(let j=0,it=Z.length;j<it;j++){const Y=Z[j],gt=$[Y.materialIndex];if(gt&&gt.visible){const O=x(R,gt,b,S);R.onBeforeShadow(i,R,C,F,W,O,Y),i.renderBufferDirect(F,null,W,O,R,Y),R.onAfterShadow(i,R,C,F,W,O,Y)}}}else if($.visible){const Z=x(R,$,b,S);R.onBeforeShadow(i,R,C,F,W,Z,null),i.renderBufferDirect(F,null,W,Z,R,null),R.onAfterShadow(i,R,C,F,W,Z,null)}}const X=R.children;for(let W=0,$=X.length;W<$;W++)E(X[W],C,F,b,S)}function k(R){R.target.removeEventListener("dispose",k);for(const F in c){const b=c[F],S=R.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function Ky(i){function t(){let L=!1;const vt=new _e;let K=null;const tt=new _e(0,0,0,0);return{setMask:function(lt){K!==lt&&!L&&(i.colorMask(lt,lt,lt,lt),K=lt)},setLocked:function(lt){L=lt},setClear:function(lt,Bt,Jt,ye,Pe){Pe===!0&&(lt*=ye,Bt*=ye,Jt*=ye),vt.set(lt,Bt,Jt,ye),tt.equals(vt)===!1&&(i.clearColor(lt,Bt,Jt,ye),tt.copy(vt))},reset:function(){L=!1,K=null,tt.set(-1,0,0,0)}}}function e(){let L=!1,vt=null,K=null,tt=null;return{setTest:function(lt){lt?J(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(lt){vt!==lt&&!L&&(i.depthMask(lt),vt=lt)},setFunc:function(lt){if(K!==lt){switch(lt){case i0:i.depthFunc(i.NEVER);break;case s0:i.depthFunc(i.ALWAYS);break;case o0:i.depthFunc(i.LESS);break;case Kr:i.depthFunc(i.LEQUAL);break;case r0:i.depthFunc(i.EQUAL);break;case a0:i.depthFunc(i.GEQUAL);break;case l0:i.depthFunc(i.GREATER);break;case c0:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=lt}},setLocked:function(lt){L=lt},setClear:function(lt){tt!==lt&&(i.clearDepth(lt),tt=lt)},reset:function(){L=!1,vt=null,K=null,tt=null}}}function n(){let L=!1,vt=null,K=null,tt=null,lt=null,Bt=null,Jt=null,ye=null,Pe=null;return{setTest:function(oe){L||(oe?J(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(oe){vt!==oe&&!L&&(i.stencilMask(oe),vt=oe)},setFunc:function(oe,En,Tn){(K!==oe||tt!==En||lt!==Tn)&&(i.stencilFunc(oe,En,Tn),K=oe,tt=En,lt=Tn)},setOp:function(oe,En,Tn){(Bt!==oe||Jt!==En||ye!==Tn)&&(i.stencilOp(oe,En,Tn),Bt=oe,Jt=En,ye=Tn)},setLocked:function(oe){L=oe},setClear:function(oe){Pe!==oe&&(i.clearStencil(oe),Pe=oe)},reset:function(){L=!1,vt=null,K=null,tt=null,lt=null,Bt=null,Jt=null,ye=null,Pe=null}}}const s=new t,o=new e,r=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],p=null,g=!1,v=null,f=null,m=null,y=null,x=null,E=null,k=null,R=new Mt(0,0,0),C=0,F=!1,b=null,S=null,P=null,X=null,W=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,j=0;const it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(it)[1]),Z=j>=1):it.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),Z=j>=2);let Y=null,gt={};const O=i.getParameter(i.SCISSOR_BOX),z=i.getParameter(i.VIEWPORT),q=new _e().fromArray(O),Q=new _e().fromArray(z);function D(L,vt,K,tt){const lt=new Uint8Array(4),Bt=i.createTexture();i.bindTexture(L,Bt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<K;Jt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(vt+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return Bt}const U={};U[i.TEXTURE_2D]=D(i.TEXTURE_2D,i.TEXTURE_2D,1),U[i.TEXTURE_CUBE_MAP]=D(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[i.TEXTURE_2D_ARRAY]=D(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),U[i.TEXTURE_3D]=D(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),J(i.DEPTH_TEST),o.setFunc(Kr),dt(!1),kt(ah),J(i.CULL_FACE),Rt(hi);function J(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function et(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function xt(L,vt){return h[L]!==vt?(i.bindFramebuffer(L,vt),h[L]=vt,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=vt),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function ct(L,vt){let K=d,tt=!1;if(L){K=u.get(vt),K===void 0&&(K=[],u.set(vt,K));const lt=L.textures;if(K.length!==lt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Bt=0,Jt=lt.length;Bt<Jt;Bt++)K[Bt]=i.COLOR_ATTACHMENT0+Bt;K.length=lt.length,tt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,tt=!0);tt&&i.drawBuffers(K)}function ht(L){return p!==L?(i.useProgram(L),p=L,!0):!1}const A={[Li]:i.FUNC_ADD,[zm]:i.FUNC_SUBTRACT,[Hm]:i.FUNC_REVERSE_SUBTRACT};A[Gm]=i.MIN,A[Vm]=i.MAX;const St={[Wm]:i.ZERO,[Xm]:i.ONE,[qm]:i.SRC_COLOR,[Zl]:i.SRC_ALPHA,[Qm]:i.SRC_ALPHA_SATURATE,[jm]:i.DST_COLOR,[$m]:i.DST_ALPHA,[Ym]:i.ONE_MINUS_SRC_COLOR,[Ql]:i.ONE_MINUS_SRC_ALPHA,[Zm]:i.ONE_MINUS_DST_COLOR,[Km]:i.ONE_MINUS_DST_ALPHA,[Jm]:i.CONSTANT_COLOR,[t0]:i.ONE_MINUS_CONSTANT_COLOR,[e0]:i.CONSTANT_ALPHA,[n0]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(L,vt,K,tt,lt,Bt,Jt,ye,Pe,oe){if(L===hi){g===!0&&(et(i.BLEND),g=!1);return}if(g===!1&&(J(i.BLEND),g=!0),L!==Bm){if(L!==v||oe!==F){if((f!==Li||x!==Li)&&(i.blendEquation(i.FUNC_ADD),f=Li,x=Li),oe)switch(L){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jl:i.blendFunc(i.ONE,i.ONE);break;case lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ch:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ch:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}m=null,y=null,E=null,k=null,R.set(0,0,0),C=0,v=L,F=oe}return}lt=lt||vt,Bt=Bt||K,Jt=Jt||tt,(vt!==f||lt!==x)&&(i.blendEquationSeparate(A[vt],A[lt]),f=vt,x=lt),(K!==m||tt!==y||Bt!==E||Jt!==k)&&(i.blendFuncSeparate(St[K],St[tt],St[Bt],St[Jt]),m=K,y=tt,E=Bt,k=Jt),(ye.equals(R)===!1||Pe!==C)&&(i.blendColor(ye.r,ye.g,ye.b,Pe),R.copy(ye),C=Pe),v=L,F=!1}function Ft(L,vt){L.side===He?et(i.CULL_FACE):J(i.CULL_FACE);let K=L.side===Ie;vt&&(K=!K),dt(K),L.blending===As&&L.transparent===!1?Rt(hi):Rt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const tt=L.stencilWrite;r.setTest(tt),tt&&(r.setMask(L.stencilWriteMask),r.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),r.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Dt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(L){b!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),b=L)}function kt(L){L!==Fm?(J(i.CULL_FACE),L!==S&&(L===ah?i.cullFace(i.BACK):L===Om?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),S=L}function At(L){L!==P&&(Z&&i.lineWidth(L),P=L)}function Dt(L,vt,K){L?(J(i.POLYGON_OFFSET_FILL),(X!==vt||W!==K)&&(i.polygonOffset(vt,K),X=vt,W=K)):et(i.POLYGON_OFFSET_FILL)}function te(L){L?J(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function T(L){L===void 0&&(L=i.TEXTURE0+$-1),Y!==L&&(i.activeTexture(L),Y=L)}function M(L,vt,K){K===void 0&&(Y===null?K=i.TEXTURE0+$-1:K=Y);let tt=gt[K];tt===void 0&&(tt={type:void 0,texture:void 0},gt[K]=tt),(tt.type!==L||tt.texture!==vt)&&(Y!==K&&(i.activeTexture(K),Y=K),i.bindTexture(L,vt||U[L]),tt.type=L,tt.texture=vt)}function V(){const L=gt[Y];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function nt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Vt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ot(L){q.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),q.copy(L))}function mt(L){Q.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Q.copy(L))}function Wt(L,vt){let K=l.get(vt);K===void 0&&(K=new WeakMap,l.set(vt,K));let tt=K.get(L);tt===void 0&&(tt=i.getUniformBlockIndex(vt,L.name),K.set(L,tt))}function Yt(L,vt){const tt=l.get(vt).get(L);a.get(vt)!==tt&&(i.uniformBlockBinding(vt,tt,L.__bindingPointIndex),a.set(vt,tt))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},Y=null,gt={},h={},u=new WeakMap,d=[],p=null,g=!1,v=null,f=null,m=null,y=null,x=null,E=null,k=null,R=new Mt(0,0,0),C=0,F=!1,b=null,S=null,P=null,X=null,W=null,q.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:J,disable:et,bindFramebuffer:xt,drawBuffers:ct,useProgram:ht,setBlending:Rt,setMaterial:Ft,setFlipSided:dt,setCullFace:kt,setLineWidth:At,setPolygonOffset:Dt,setScissorTest:te,activeTexture:T,bindTexture:M,unbindTexture:V,compressedTexImage2D:nt,compressedTexImage3D:st,texImage2D:Et,texImage3D:qt,updateUBOMapping:Wt,uniformBlockBinding:Yt,texStorage2D:Vt,texStorage3D:rt,texSubImage2D:ot,texSubImage3D:Pt,compressedTexSubImage2D:ft,compressedTexSubImage3D:pt,scissor:Ot,viewport:mt,reset:xe}}function jy(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return p?new OffscreenCanvas(T,M):Lo("canvas")}function v(T,M,V){let nt=1;const st=te(T);if((st.width>V||st.height>V)&&(nt=V/Math.max(st.width,st.height)),nt<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ot=Math.floor(nt*st.width),Pt=Math.floor(nt*st.height);u===void 0&&(u=g(ot,Pt));const ft=M?g(ot,Pt):u;return ft.width=ot,ft.height=Pt,ft.getContext("2d").drawImage(T,0,0,ot,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+ot+"x"+Pt+")."),ft}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),T;return T}function f(T){return T.generateMipmaps&&T.minFilter!==le&&T.minFilter!==fe}function m(T){i.generateMipmap(T)}function y(T,M,V,nt,st=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ot=M;if(M===i.RED&&(V===i.FLOAT&&(ot=i.R32F),V===i.HALF_FLOAT&&(ot=i.R16F),V===i.UNSIGNED_BYTE&&(ot=i.R8)),M===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(ot=i.R8UI),V===i.UNSIGNED_SHORT&&(ot=i.R16UI),V===i.UNSIGNED_INT&&(ot=i.R32UI),V===i.BYTE&&(ot=i.R8I),V===i.SHORT&&(ot=i.R16I),V===i.INT&&(ot=i.R32I)),M===i.RG&&(V===i.FLOAT&&(ot=i.RG32F),V===i.HALF_FLOAT&&(ot=i.RG16F),V===i.UNSIGNED_BYTE&&(ot=i.RG8)),M===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(ot=i.RG8UI),V===i.UNSIGNED_SHORT&&(ot=i.RG16UI),V===i.UNSIGNED_INT&&(ot=i.RG32UI),V===i.BYTE&&(ot=i.RG8I),V===i.SHORT&&(ot=i.RG16I),V===i.INT&&(ot=i.RG32I)),M===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),M===i.RGBA){const Pt=st?Zr:se.getTransfer(nt);V===i.FLOAT&&(ot=i.RGBA32F),V===i.HALF_FLOAT&&(ot=i.RGBA16F),V===i.UNSIGNED_BYTE&&(ot=Pt===de?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function x(T,M){let V;return T?M===null||M===mi||M===Bs?V=i.DEPTH24_STENCIL8:M===li?V=i.DEPTH32F_STENCIL8:M===jr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===mi||M===Bs?V=i.DEPTH_COMPONENT24:M===li?V=i.DEPTH_COMPONENT32F:M===jr&&(V=i.DEPTH_COMPONENT16),V}function E(T,M){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==le&&T.minFilter!==fe?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function k(T){const M=T.target;M.removeEventListener("dispose",k),C(M),M.isVideoTexture&&h.delete(M)}function R(T){const M=T.target;M.removeEventListener("dispose",R),b(M)}function C(T){const M=n.get(T);if(M.__webglInit===void 0)return;const V=T.source,nt=d.get(V);if(nt){const st=nt[M.__cacheKey];st.usedTimes--,st.usedTimes===0&&F(T),Object.keys(nt).length===0&&d.delete(V)}n.remove(T)}function F(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const V=T.source,nt=d.get(V);delete nt[M.__cacheKey],r.memory.textures--}function b(T){const M=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(M.__webglFramebuffer[nt]))for(let st=0;st<M.__webglFramebuffer[nt].length;st++)i.deleteFramebuffer(M.__webglFramebuffer[nt][st]);else i.deleteFramebuffer(M.__webglFramebuffer[nt]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[nt])}else{if(Array.isArray(M.__webglFramebuffer))for(let nt=0;nt<M.__webglFramebuffer.length;nt++)i.deleteFramebuffer(M.__webglFramebuffer[nt]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let nt=0;nt<M.__webglColorRenderbuffer.length;nt++)M.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[nt]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=T.textures;for(let nt=0,st=V.length;nt<st;nt++){const ot=n.get(V[nt]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),r.memory.textures--),n.remove(V[nt])}n.remove(T)}let S=0;function P(){S=0}function X(){const T=S;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),S+=1,T}function W(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function $(T,M){const V=n.get(T);if(T.isVideoTexture&&At(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){const nt=T.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,T,M);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+M)}function Z(T,M){const V=n.get(T);if(T.version>0&&V.__version!==T.version){Q(V,T,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+M)}function j(T,M){const V=n.get(T);if(T.version>0&&V.__version!==T.version){Q(V,T,M);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+M)}function it(T,M){const V=n.get(T);if(T.version>0&&V.__version!==T.version){D(V,T,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+M)}const Y={[fi]:i.REPEAT,[Ui]:i.CLAMP_TO_EDGE,[ec]:i.MIRRORED_REPEAT},gt={[le]:i.NEAREST,[yc]:i.NEAREST_MIPMAP_NEAREST,[Xo]:i.NEAREST_MIPMAP_LINEAR,[fe]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},O={[D0]:i.NEVER,[F0]:i.ALWAYS,[L0]:i.LESS,[vf]:i.LEQUAL,[k0]:i.EQUAL,[N0]:i.GEQUAL,[I0]:i.GREATER,[U0]:i.NOTEQUAL};function z(T,M){if(M.type===li&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===fe||M.magFilter===Fa||M.magFilter===Xo||M.magFilter===ai||M.minFilter===fe||M.minFilter===Fa||M.minFilter===Xo||M.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Y[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Y[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Y[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,gt[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,gt[M.minFilter]),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,O[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===le||M.minFilter!==Xo&&M.minFilter!==ai||M.type===li&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function q(T,M){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",k));const nt=M.source;let st=d.get(nt);st===void 0&&(st={},d.set(nt,st));const ot=W(M);if(ot!==T.__cacheKey){st[ot]===void 0&&(st[ot]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,V=!0),st[ot].usedTimes++;const Pt=st[T.__cacheKey];Pt!==void 0&&(st[T.__cacheKey].usedTimes--,Pt.usedTimes===0&&F(M)),T.__cacheKey=ot,T.__webglTexture=st[ot].texture}return V}function Q(T,M,V){let nt=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(nt=i.TEXTURE_3D);const st=q(T,M),ot=M.source;e.bindTexture(nt,T.__webglTexture,i.TEXTURE0+V);const Pt=n.get(ot);if(ot.version!==Pt.__version||st===!0){e.activeTexture(i.TEXTURE0+V);const ft=se.getPrimaries(se.workingColorSpace),pt=M.colorSpace===Pn?null:se.getPrimaries(M.colorSpace),Vt=M.colorSpace===Pn||ft===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let rt=v(M.image,!1,s.maxTextureSize);rt=Dt(M,rt);const Et=o.convert(M.format,M.colorSpace),qt=o.convert(M.type);let Ot=y(M.internalFormat,Et,qt,M.colorSpace,M.isVideoTexture);z(nt,M);let mt;const Wt=M.mipmaps,Yt=M.isVideoTexture!==!0,xe=Pt.__version===void 0||st===!0,L=ot.dataReady,vt=E(M,rt);if(M.isDepthTexture)Ot=x(M.format===zs,M.type),xe&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Ot,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Ot,rt.width,rt.height,0,Et,qt,null));else if(M.isDataTexture)if(Wt.length>0){Yt&&xe&&e.texStorage2D(i.TEXTURE_2D,vt,Ot,Wt[0].width,Wt[0].height);for(let K=0,tt=Wt.length;K<tt;K++)mt=Wt[K],Yt?L&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,mt.width,mt.height,Et,qt,mt.data):e.texImage2D(i.TEXTURE_2D,K,Ot,mt.width,mt.height,0,Et,qt,mt.data);M.generateMipmaps=!1}else Yt?(xe&&e.texStorage2D(i.TEXTURE_2D,vt,Ot,rt.width,rt.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,Et,qt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,rt.width,rt.height,0,Et,qt,rt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Yt&&xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Ot,Wt[0].width,Wt[0].height,rt.depth);for(let K=0,tt=Wt.length;K<tt;K++)if(mt=Wt[K],M.format!==dn)if(Et!==null)if(Yt){if(L)if(M.layerUpdates.size>0){for(const lt of M.layerUpdates){const Bt=mt.width*mt.height;e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,lt,mt.width,mt.height,1,Et,mt.data.slice(Bt*lt,Bt*(lt+1)),0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,mt.width,mt.height,rt.depth,Et,mt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Ot,mt.width,mt.height,rt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,mt.width,mt.height,rt.depth,Et,qt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,Ot,mt.width,mt.height,rt.depth,0,Et,qt,mt.data)}else{Yt&&xe&&e.texStorage2D(i.TEXTURE_2D,vt,Ot,Wt[0].width,Wt[0].height);for(let K=0,tt=Wt.length;K<tt;K++)mt=Wt[K],M.format!==dn?Et!==null?Yt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,mt.width,mt.height,Et,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,Ot,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?L&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,mt.width,mt.height,Et,qt,mt.data):e.texImage2D(i.TEXTURE_2D,K,Ot,mt.width,mt.height,0,Et,qt,mt.data)}else if(M.isDataArrayTexture)if(Yt){if(xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Ot,rt.width,rt.height,rt.depth),L)if(M.layerUpdates.size>0){let K;switch(qt){case i.UNSIGNED_BYTE:switch(Et){case i.ALPHA:K=1;break;case i.LUMINANCE:K=1;break;case i.LUMINANCE_ALPHA:K=2;break;case i.RGB:K=3;break;case i.RGBA:K=4;break;default:throw new Error(`Unknown texel size for format ${Et}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:K=1;break;default:throw new Error(`Unknown texel size for type ${qt}.`)}const tt=rt.width*rt.height*K;for(const lt of M.layerUpdates)e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,rt.width,rt.height,1,Et,qt,rt.data.slice(tt*lt,tt*(lt+1)));M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Et,qt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,rt.width,rt.height,rt.depth,0,Et,qt,rt.data);else if(M.isData3DTexture)Yt?(xe&&e.texStorage3D(i.TEXTURE_3D,vt,Ot,rt.width,rt.height,rt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Et,qt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,rt.width,rt.height,rt.depth,0,Et,qt,rt.data);else if(M.isFramebufferTexture){if(xe)if(Yt)e.texStorage2D(i.TEXTURE_2D,vt,Ot,rt.width,rt.height);else{let K=rt.width,tt=rt.height;for(let lt=0;lt<vt;lt++)e.texImage2D(i.TEXTURE_2D,lt,Ot,K,tt,0,Et,qt,null),K>>=1,tt>>=1}}else if(Wt.length>0){if(Yt&&xe){const K=te(Wt[0]);e.texStorage2D(i.TEXTURE_2D,vt,Ot,K.width,K.height)}for(let K=0,tt=Wt.length;K<tt;K++)mt=Wt[K],Yt?L&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Et,qt,mt):e.texImage2D(i.TEXTURE_2D,K,Ot,Et,qt,mt);M.generateMipmaps=!1}else if(Yt){if(xe){const K=te(rt);e.texStorage2D(i.TEXTURE_2D,vt,Ot,K.width,K.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,qt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Et,qt,rt);f(M)&&m(nt),Pt.__version=ot.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function D(T,M,V){if(M.image.length!==6)return;const nt=q(T,M),st=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+V);const ot=n.get(st);if(st.version!==ot.__version||nt===!0){e.activeTexture(i.TEXTURE0+V);const Pt=se.getPrimaries(se.workingColorSpace),ft=M.colorSpace===Pn?null:se.getPrimaries(M.colorSpace),pt=M.colorSpace===Pn||Pt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Vt=M.isCompressedTexture||M.image[0].isCompressedTexture,rt=M.image[0]&&M.image[0].isDataTexture,Et=[];for(let tt=0;tt<6;tt++)!Vt&&!rt?Et[tt]=v(M.image[tt],!0,s.maxCubemapSize):Et[tt]=rt?M.image[tt].image:M.image[tt],Et[tt]=Dt(M,Et[tt]);const qt=Et[0],Ot=o.convert(M.format,M.colorSpace),mt=o.convert(M.type),Wt=y(M.internalFormat,Ot,mt,M.colorSpace),Yt=M.isVideoTexture!==!0,xe=ot.__version===void 0||nt===!0,L=st.dataReady;let vt=E(M,qt);z(i.TEXTURE_CUBE_MAP,M);let K;if(Vt){Yt&&xe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Wt,qt.width,qt.height);for(let tt=0;tt<6;tt++){K=Et[tt].mipmaps;for(let lt=0;lt<K.length;lt++){const Bt=K[lt];M.format!==dn?Ot!==null?Yt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt,0,0,Bt.width,Bt.height,Ot,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt,Wt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt,0,0,Bt.width,Bt.height,Ot,mt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt,Wt,Bt.width,Bt.height,0,Ot,mt,Bt.data)}}}else{if(K=M.mipmaps,Yt&&xe){K.length>0&&vt++;const tt=te(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Wt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(rt){Yt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Et[tt].width,Et[tt].height,Ot,mt,Et[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Wt,Et[tt].width,Et[tt].height,0,Ot,mt,Et[tt].data);for(let lt=0;lt<K.length;lt++){const Jt=K[lt].image[tt].image;Yt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt+1,0,0,Jt.width,Jt.height,Ot,mt,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt+1,Wt,Jt.width,Jt.height,0,Ot,mt,Jt.data)}}else{Yt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ot,mt,Et[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Wt,Ot,mt,Et[tt]);for(let lt=0;lt<K.length;lt++){const Bt=K[lt];Yt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt+1,0,0,Ot,mt,Bt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt+1,Wt,Ot,mt,Bt.image[tt])}}}f(M)&&m(i.TEXTURE_CUBE_MAP),ot.__version=st.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function U(T,M,V,nt,st,ot){const Pt=o.convert(V.format,V.colorSpace),ft=o.convert(V.type),pt=y(V.internalFormat,Pt,ft,V.colorSpace);if(!n.get(M).__hasExternalTextures){const rt=Math.max(1,M.width>>ot),Et=Math.max(1,M.height>>ot);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,ot,pt,rt,Et,M.depth,0,Pt,ft,null):e.texImage2D(st,ot,pt,rt,Et,0,Pt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),kt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,st,n.get(V).__webglTexture,0,dt(M)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,st,n.get(V).__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function J(T,M,V){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer){const nt=M.depthTexture,st=nt&&nt.isDepthTexture?nt.type:null,ot=x(M.stencilBuffer,st),Pt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=dt(M);kt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,ot,M.width,M.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,ot,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ot,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,T)}else{const nt=M.textures;for(let st=0;st<nt.length;st++){const ot=nt[st],Pt=o.convert(ot.format,ot.colorSpace),ft=o.convert(ot.type),pt=y(ot.internalFormat,Pt,ft,ot.colorSpace),Vt=dt(M);V&&kt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,pt,M.width,M.height):kt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,pt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,pt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const nt=n.get(M.depthTexture).__webglTexture,st=dt(M);if(M.depthTexture.format===Rs)kt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(M.depthTexture.format===zs)kt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function xt(T){const M=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");et(M.__webglFramebuffer,T)}else if(V){M.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[nt]),M.__webglDepthbuffer[nt]=i.createRenderbuffer(),J(M.__webglDepthbuffer[nt],T,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),J(M.__webglDepthbuffer,T,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(T,M,V){const nt=n.get(T);M!==void 0&&U(nt.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&xt(T)}function ht(T){const M=T.texture,V=n.get(T),nt=n.get(M);T.addEventListener("dispose",R);const st=T.textures,ot=T.isWebGLCubeRenderTarget===!0,Pt=st.length>1;if(Pt||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=M.version,r.memory.textures++),ot){V.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[ft]=[];for(let pt=0;pt<M.mipmaps.length;pt++)V.__webglFramebuffer[ft][pt]=i.createFramebuffer()}else V.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let ft=0;ft<M.mipmaps.length;ft++)V.__webglFramebuffer[ft]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let ft=0,pt=st.length;ft<pt;ft++){const Vt=n.get(st[ft]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),r.memory.textures++)}if(T.samples>0&&kt(T)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ft=0;ft<st.length;ft++){const pt=st[ft];V.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ft]);const Vt=o.convert(pt.format,pt.colorSpace),rt=o.convert(pt.type),Et=y(pt.internalFormat,Vt,rt,pt.colorSpace,T.isXRRenderTarget===!0),qt=dt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,Et,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,V.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),J(V.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),z(i.TEXTURE_CUBE_MAP,M);for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)U(V.__webglFramebuffer[ft][pt],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,pt);else U(V.__webglFramebuffer[ft],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);f(M)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let ft=0,pt=st.length;ft<pt;ft++){const Vt=st[ft],rt=n.get(Vt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),z(i.TEXTURE_2D,Vt),U(V.__webglFramebuffer,T,Vt,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),f(Vt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ft=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,nt.__webglTexture),z(ft,M),M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)U(V.__webglFramebuffer[pt],T,M,i.COLOR_ATTACHMENT0,ft,pt);else U(V.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,ft,0);f(M)&&m(ft),e.unbindTexture()}T.depthBuffer&&xt(T)}function A(T){const M=T.textures;for(let V=0,nt=M.length;V<nt;V++){const st=M[V];if(f(st)){const ot=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pt=n.get(st).__webglTexture;e.bindTexture(ot,Pt),m(ot),e.unbindTexture()}}}const St=[],Rt=[];function Ft(T){if(T.samples>0){if(kt(T)===!1){const M=T.textures,V=T.width,nt=T.height;let st=i.COLOR_BUFFER_BIT;const ot=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(T),ft=M.length>1;if(ft)for(let pt=0;pt<M.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let pt=0;pt<M.length;pt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[pt]);const Vt=n.get(M[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,V,nt,0,0,V,nt,st,i.NEAREST),l===!0&&(St.length=0,Rt.length=0,St.push(i.COLOR_ATTACHMENT0+pt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(St.push(ot),Rt.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,St))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let pt=0;pt<M.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[pt]);const Vt=n.get(M[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function dt(T){return Math.min(s.maxSamples,T.samples)}function kt(T){const M=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function At(T){const M=r.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function Dt(T,M){const V=T.colorSpace,nt=T.format,st=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==_i&&V!==Pn&&(se.getTransfer(V)===de?(nt!==dn||st!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function te(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=P,this.setTexture2D=$,this.setTexture2DArray=Z,this.setTexture3D=j,this.setTextureCube=it,this.rebindTextures=ct,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=U,this.useMultisampledRTT=kt}function Zy(i,t){function e(n,s=Pn){let o;const r=se.getTransfer(s);if(n===pi)return i.UNSIGNED_BYTE;if(n===hf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===M0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===x0)return i.BYTE;if(n===y0)return i.SHORT;if(n===jr)return i.UNSIGNED_SHORT;if(n===cf)return i.INT;if(n===mi)return i.UNSIGNED_INT;if(n===li)return i.FLOAT;if(n===gi)return i.HALF_FLOAT;if(n===S0)return i.ALPHA;if(n===w0)return i.RGB;if(n===dn)return i.RGBA;if(n===b0)return i.LUMINANCE;if(n===E0)return i.LUMINANCE_ALPHA;if(n===Rs)return i.DEPTH_COMPONENT;if(n===zs)return i.DEPTH_STENCIL;if(n===T0)return i.RED;if(n===df)return i.RED_INTEGER;if(n===A0)return i.RG;if(n===ff)return i.RG_INTEGER;if(n===pf)return i.RGBA_INTEGER;if(n===Oa||n===Ba||n===za||n===Ha)if(r===de)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Oa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===za)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Oa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===za)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ha)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hh||n===uh||n===dh||n===fh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===hh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ph||n===mh||n===gh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===ph||n===mh)return r===de?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===gh)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vh||n===_h||n===xh||n===yh||n===Mh||n===Sh||n===wh||n===bh||n===Eh||n===Th||n===Ah||n===Rh||n===Ch||n===Ph)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===vh)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_h)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xh)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yh)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mh)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sh)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wh)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bh)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eh)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Th)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ah)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rh)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ch)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ph)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===Dh||n===Lh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Ga)return r===de?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===R0||n===kh||n===Ih||n===Uh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Ga)return o.COMPRESSED_RED_RGTC1_EXT;if(n===kh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ih)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Qy extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class rn extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jy={type:"move"};class fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const v of t.hand.values()){const f=e.getJointPose(v,n),m=this._getHandJoint(c,v);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const tM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eM=`
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

}`;class nM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ue,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new fn({vertexShader:tM,fragmentShader:eM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new $e(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class iM extends js{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const v=new nM,f=e.getContextAttributes();let m=null,y=null;const x=[],E=[],k=new Ut;let R=null;const C=new Ye;C.layers.enable(1),C.viewport=new _e;const F=new Ye;F.layers.enable(2),F.viewport=new _e;const b=[C,F],S=new Qy;S.layers.enable(1),S.layers.enable(2);let P=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let U=x[D];return U===void 0&&(U=new fl,x[D]=U),U.getTargetRaySpace()},this.getControllerGrip=function(D){let U=x[D];return U===void 0&&(U=new fl,x[D]=U),U.getGripSpace()},this.getHand=function(D){let U=x[D];return U===void 0&&(U=new fl,x[D]=U),U.getHandSpace()};function W(D){const U=E.indexOf(D.inputSource);if(U===-1)return;const J=x[U];J!==void 0&&(J.update(D.inputSource,D.frame,c||r),J.dispatchEvent({type:D.type,data:D.inputSource}))}function $(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",Z);for(let D=0;D<x.length;D++){const U=E[D];U!==null&&(E[D]=null,x[D].disconnect(U))}P=null,X=null,v.reset(),t.setRenderTarget(m),p=null,d=null,u=null,s=null,y=null,Q.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){o=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(D){if(s=D,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",$),s.addEventListener("inputsourceschange",Z),f.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(k),s.renderState.layers===void 0){const U={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,e,U),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new wn(p.framebufferWidth,p.framebufferHeight,{format:dn,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let U=null,J=null,et=null;f.depth&&(et=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,U=f.stencil?zs:Rs,J=f.stencil?Bs:mi);const xt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(xt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new wn(d.textureWidth,d.textureHeight,{format:dn,type:pi,depthTexture:new ea(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),Q.setContext(s),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function Z(D){for(let U=0;U<D.removed.length;U++){const J=D.removed[U],et=E.indexOf(J);et>=0&&(E[et]=null,x[et].disconnect(J))}for(let U=0;U<D.added.length;U++){const J=D.added[U];let et=E.indexOf(J);if(et===-1){for(let ct=0;ct<x.length;ct++)if(ct>=E.length){E.push(J),et=ct;break}else if(E[ct]===null){E[ct]=J,et=ct;break}if(et===-1)break}const xt=x[et];xt&&xt.connect(J)}}const j=new I,it=new I;function Y(D,U,J){j.setFromMatrixPosition(U.matrixWorld),it.setFromMatrixPosition(J.matrixWorld);const et=j.distanceTo(it),xt=U.projectionMatrix.elements,ct=J.projectionMatrix.elements,ht=xt[14]/(xt[10]-1),A=xt[14]/(xt[10]+1),St=(xt[9]+1)/xt[5],Rt=(xt[9]-1)/xt[5],Ft=(xt[8]-1)/xt[0],dt=(ct[8]+1)/ct[0],kt=ht*Ft,At=ht*dt,Dt=et/(-Ft+dt),te=Dt*-Ft;U.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(te),D.translateZ(Dt),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const T=ht+Dt,M=A+Dt,V=kt-te,nt=At+(et-te),st=St*A/M*T,ot=Rt*A/M*T;D.projectionMatrix.makePerspective(V,nt,st,ot,T,M),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function gt(D,U){U===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(U.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(s===null)return;v.texture!==null&&(D.near=v.depthNear,D.far=v.depthFar),S.near=F.near=C.near=D.near,S.far=F.far=C.far=D.far,(P!==S.near||X!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,X=S.far,C.near=P,C.far=X,F.near=P,F.far=X,C.updateProjectionMatrix(),F.updateProjectionMatrix(),D.updateProjectionMatrix());const U=D.parent,J=S.cameras;gt(S,U);for(let et=0;et<J.length;et++)gt(J[et],U);J.length===2?Y(S,C,F):S.projectionMatrix.copy(C.projectionMatrix),O(D,S,U)};function O(D,U,J){J===null?D.matrix.copy(U.matrixWorld):(D.matrix.copy(J.matrixWorld),D.matrix.invert(),D.matrix.multiply(U.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(U.projectionMatrix),D.projectionMatrixInverse.copy(U.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Do*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(D){l=D,d!==null&&(d.fixedFoveation=D),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=D)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let z=null;function q(D,U){if(h=U.getViewerPose(c||r),g=U,h!==null){const J=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let et=!1;J.length!==S.cameras.length&&(S.cameras.length=0,et=!0);for(let ct=0;ct<J.length;ct++){const ht=J[ct];let A=null;if(p!==null)A=p.getViewport(ht);else{const Rt=u.getViewSubImage(d,ht);A=Rt.viewport,ct===0&&(t.setRenderTargetTextures(y,Rt.colorTexture,d.ignoreDepthValues?void 0:Rt.depthStencilTexture),t.setRenderTarget(y))}let St=b[ct];St===void 0&&(St=new Ye,St.layers.enable(ct),St.viewport=new _e,b[ct]=St),St.matrix.fromArray(ht.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(ht.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(A.x,A.y,A.width,A.height),ct===0&&(S.matrix.copy(St.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),et===!0&&S.cameras.push(St)}const xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")){const ct=u.getDepthInformation(J[0]);ct&&ct.isValid&&ct.texture&&v.init(t,ct,s.renderState)}}for(let J=0;J<x.length;J++){const et=E[J],xt=x[J];et!==null&&xt!==void 0&&xt.update(et,U,c||r)}z&&z(D,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),g=null}const Q=new Rf;Q.setAnimationLoop(q),this.setAnimationLoop=function(D){z=D},this.dispose=function(){}}}const Ai=new Dn,sM=new ce;function oM(i,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,Ef(i)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,y,x,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(f,m):m.isMeshToonMaterial?(o(f,m),u(f,m)):m.isMeshPhongMaterial?(o(f,m),h(f,m)):m.isMeshStandardMaterial?(o(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,E)):m.isMeshMatcapMaterial?(o(f,m),g(f,m)):m.isMeshDepthMaterial?o(f,m):m.isMeshDistanceMaterial?(o(f,m),v(f,m)):m.isMeshNormalMaterial?o(f,m):m.isLineBasicMaterial?(r(f,m),m.isLineDashedMaterial&&a(f,m)):m.isPointsMaterial?l(f,m,y,x):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Ie&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Ie&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const y=t.get(m),x=y.envMap,E=y.envMapRotation;x&&(f.envMap.value=x,Ai.copy(E),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),f.envMapRotation.value.setFromMatrix4(sM.makeRotationFromEuler(Ai)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function r(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,y,x){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*y,f.scale.value=x*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,y){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ie&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function v(f,m){const y=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rM(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const E=x.program;n.uniformBlockBinding(y,E)}function c(y,x){let E=s[y.id];E===void 0&&(g(y),E=h(y),s[y.id]=E,y.addEventListener("dispose",f));const k=x.program;n.updateUBOMapping(y,k);const R=t.render.frame;o[y.id]!==R&&(d(y),o[y.id]=R)}function h(y){const x=u();y.__bindingPointIndex=x;const E=i.createBuffer(),k=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,k,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,E),E}function u(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=s[y.id],E=y.uniforms,k=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,C=E.length;R<C;R++){const F=Array.isArray(E[R])?E[R]:[E[R]];for(let b=0,S=F.length;b<S;b++){const P=F[b];if(p(P,R,b,k)===!0){const X=P.__offset,W=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let Z=0;Z<W.length;Z++){const j=W[Z],it=v(j);typeof j=="number"||typeof j=="boolean"?(P.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,X+$,P.__data)):j.isMatrix3?(P.__data[0]=j.elements[0],P.__data[1]=j.elements[1],P.__data[2]=j.elements[2],P.__data[3]=0,P.__data[4]=j.elements[3],P.__data[5]=j.elements[4],P.__data[6]=j.elements[5],P.__data[7]=0,P.__data[8]=j.elements[6],P.__data[9]=j.elements[7],P.__data[10]=j.elements[8],P.__data[11]=0):(j.toArray(P.__data,$),$+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,E,k){const R=y.value,C=x+"_"+E;if(k[C]===void 0)return typeof R=="number"||typeof R=="boolean"?k[C]=R:k[C]=R.clone(),!0;{const F=k[C];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return k[C]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function g(y){const x=y.uniforms;let E=0;const k=16;for(let C=0,F=x.length;C<F;C++){const b=Array.isArray(x[C])?x[C]:[x[C]];for(let S=0,P=b.length;S<P;S++){const X=b[S],W=Array.isArray(X.value)?X.value:[X.value];for(let $=0,Z=W.length;$<Z;$++){const j=W[$],it=v(j),Y=E%k;Y!==0&&k-Y<it.boundary&&(E+=k-Y),X.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=it.storage}}}const R=E%k;return R>0&&(E+=k-R),y.__size=E,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function f(y){const x=y.target;x.removeEventListener("dispose",f);const E=r.indexOf(x.__bindingPointIndex);r.splice(E,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete o[x.id]}function m(){for(const y in s)i.deleteBuffer(s[y]);r=[],s={},o={}}return{bind:l,update:c,dispose:m}}class Uf{constructor(t={}){const{canvas:e=tg(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,f=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this.toneMapping=qn,this.toneMappingExposure=1;const x=this;let E=!1,k=0,R=0,C=null,F=-1,b=null;const S=new _e,P=new _e;let X=null;const W=new Mt(0);let $=0,Z=e.width,j=e.height,it=1,Y=null,gt=null;const O=new _e(0,0,Z,j),z=new _e(0,0,Z,j);let q=!1;const Q=new Ec;let D=!1,U=!1;const J=new ce,et=new I,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function ht(){return C===null?it:1}let A=n;function St(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xc}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",K,!1),e.addEventListener("webglcontextcreationerror",tt,!1),A===null){const N="webgl2";if(A=St(N,w),A===null)throw St(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Rt,Ft,dt,kt,At,Dt,te,T,M,V,nt,st,ot,Pt,ft,pt,Vt,rt,Et,qt,Ot,mt,Wt,Yt;function xe(){Rt=new gx(A),Rt.init(),mt=new Zy(A,Rt),Ft=new hx(A,Rt,t,mt),dt=new Ky(A),kt=new xx(A),At=new Ny,Dt=new jy(A,Rt,dt,At,Ft,mt,kt),te=new dx(x),T=new mx(x),M=new Tg(A),Wt=new lx(A,M),V=new vx(A,M,kt,Wt),nt=new Mx(A,V,M,kt),Et=new yx(A,Ft,Dt),pt=new ux(At),st=new Uy(x,te,T,Rt,Ft,Wt,pt),ot=new oM(x,At),Pt=new Oy,ft=new Wy(Rt),rt=new ax(x,te,T,dt,nt,d,l),Vt=new $y(x,nt,Ft),Yt=new rM(A,kt,Ft,dt),qt=new cx(A,Rt,kt),Ot=new _x(A,Rt,kt),kt.programs=st.programs,x.capabilities=Ft,x.extensions=Rt,x.properties=At,x.renderLists=Pt,x.shadowMap=Vt,x.state=dt,x.info=kt}xe();const L=new iM(x,A);this.xr=L,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const w=Rt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Rt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(w){w!==void 0&&(it=w,this.setSize(Z,j,!1))},this.getSize=function(w){return w.set(Z,j)},this.setSize=function(w,N,H=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,j=N,e.width=Math.floor(w*it),e.height=Math.floor(N*it),H===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(Z*it,j*it).floor()},this.setDrawingBufferSize=function(w,N,H){Z=w,j=N,it=H,e.width=Math.floor(w*H),e.height=Math.floor(N*H),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(O)},this.setViewport=function(w,N,H,G){w.isVector4?O.set(w.x,w.y,w.z,w.w):O.set(w,N,H,G),dt.viewport(S.copy(O).multiplyScalar(it).round())},this.getScissor=function(w){return w.copy(z)},this.setScissor=function(w,N,H,G){w.isVector4?z.set(w.x,w.y,w.z,w.w):z.set(w,N,H,G),dt.scissor(P.copy(z).multiplyScalar(it).round())},this.getScissorTest=function(){return q},this.setScissorTest=function(w){dt.setScissorTest(q=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){gt=w},this.getClearColor=function(w){return w.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(w=!0,N=!0,H=!0){let G=0;if(w){let B=!1;if(C!==null){const at=C.texture.format;B=at===pf||at===ff||at===df}if(B){const at=C.texture.type,_t=at===pi||at===mi||at===jr||at===Bs||at===hf||at===uf,yt=rt.getClearColor(),wt=rt.getClearAlpha(),It=yt.r,Nt=yt.g,Lt=yt.b;_t?(p[0]=It,p[1]=Nt,p[2]=Lt,p[3]=wt,A.clearBufferuiv(A.COLOR,0,p)):(g[0]=It,g[1]=Nt,g[2]=Lt,g[3]=wt,A.clearBufferiv(A.COLOR,0,g))}else G|=A.COLOR_BUFFER_BIT}N&&(G|=A.DEPTH_BUFFER_BIT),H&&(G|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),Pt.dispose(),ft.dispose(),At.dispose(),te.dispose(),T.dispose(),nt.dispose(),Wt.dispose(),Yt.dispose(),st.dispose(),L.dispose(),L.removeEventListener("sessionstart",En),L.removeEventListener("sessionend",Tn),yi.stop()};function vt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=kt.autoReset,N=Vt.enabled,H=Vt.autoUpdate,G=Vt.needsUpdate,B=Vt.type;xe(),kt.autoReset=w,Vt.enabled=N,Vt.autoUpdate=H,Vt.needsUpdate=G,Vt.type=B}function tt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function lt(w){const N=w.target;N.removeEventListener("dispose",lt),Bt(N)}function Bt(w){Jt(w),At.remove(w)}function Jt(w){const N=At.get(w).programs;N!==void 0&&(N.forEach(function(H){st.releaseProgram(H)}),w.isShaderMaterial&&st.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,H,G,B,at){N===null&&(N=xt);const _t=B.isMesh&&B.matrixWorld.determinant()<0,yt=Dm(w,N,H,G,B);dt.setMaterial(G,_t);let wt=H.index,It=1;if(G.wireframe===!0){if(wt=V.getWireframeAttribute(H),wt===void 0)return;It=2}const Nt=H.drawRange,Lt=H.attributes.position;let ee=Nt.start*It,ge=(Nt.start+Nt.count)*It;at!==null&&(ee=Math.max(ee,at.start*It),ge=Math.min(ge,(at.start+at.count)*It)),wt!==null?(ee=Math.max(ee,0),ge=Math.min(ge,wt.count)):Lt!=null&&(ee=Math.max(ee,0),ge=Math.min(ge,Lt.count));const ve=ge-ee;if(ve<0||ve===1/0)return;Wt.setup(B,G,yt,H,wt);let Je,ne=qt;if(wt!==null&&(Je=M.get(wt),ne=Ot,ne.setIndex(Je)),B.isMesh)G.wireframe===!0?(dt.setLineWidth(G.wireframeLinewidth*ht()),ne.setMode(A.LINES)):ne.setMode(A.TRIANGLES);else if(B.isLine){let Ct=G.linewidth;Ct===void 0&&(Ct=1),dt.setLineWidth(Ct*ht()),B.isLineSegments?ne.setMode(A.LINES):B.isLineLoop?ne.setMode(A.LINE_LOOP):ne.setMode(A.LINE_STRIP)}else B.isPoints?ne.setMode(A.POINTS):B.isSprite&&ne.setMode(A.TRIANGLES);if(B.isBatchedMesh)B._multiDrawInstances!==null?ne.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances):ne.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)ne.renderInstances(ee,ve,B.count);else if(H.isInstancedBufferGeometry){const Ct=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ge=Math.min(H.instanceCount,Ct);ne.renderInstances(ee,ve,Ge)}else ne.render(ee,ve)};function ye(w,N,H){w.transparent===!0&&w.side===He&&w.forceSinglePass===!1?(w.side=Ie,w.needsUpdate=!0,Vo(w,N,H),w.side=di,w.needsUpdate=!0,Vo(w,N,H),w.side=He):Vo(w,N,H)}this.compile=function(w,N,H=null){H===null&&(H=w),f=ft.get(H),f.init(N),y.push(f),H.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),w!==H&&w.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const G=new Set;return w.traverse(function(B){const at=B.material;if(at)if(Array.isArray(at))for(let _t=0;_t<at.length;_t++){const yt=at[_t];ye(yt,H,B),G.add(yt)}else ye(at,H,B),G.add(at)}),y.pop(),f=null,G},this.compileAsync=function(w,N,H=null){const G=this.compile(w,N,H);return new Promise(B=>{function at(){if(G.forEach(function(_t){At.get(_t).currentProgram.isReady()&&G.delete(_t)}),G.size===0){B(w);return}setTimeout(at,10)}Rt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Pe=null;function oe(w){Pe&&Pe(w)}function En(){yi.stop()}function Tn(){yi.start()}const yi=new Rf;yi.setAnimationLoop(oe),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(w){Pe=w,L.setAnimationLoop(w),w===null?yi.stop():yi.start()},L.addEventListener("sessionstart",En),L.addEventListener("sessionend",Tn),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(N),N=L.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,C),f=ft.get(w,y.length),f.init(N),y.push(f),J.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Q.setFromProjectionMatrix(J),U=this.localClippingEnabled,D=pt.init(this.clippingPlanes,U),v=Pt.get(w,m.length),v.init(),m.push(v),L.enabled===!0&&L.isPresenting===!0){const at=x.xr.getDepthSensingMesh();at!==null&&ka(at,N,-1/0,x.sortObjects)}ka(w,N,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(Y,gt),ct=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,ct&&rt.addToRenderList(v,w),this.info.render.frame++,D===!0&&pt.beginShadows();const H=f.state.shadowsArray;Vt.render(H,w,N),D===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=v.opaque,B=v.transmissive;if(f.setupLights(),N.isArrayCamera){const at=N.cameras;if(B.length>0)for(let _t=0,yt=at.length;_t<yt;_t++){const wt=at[_t];nh(G,B,w,wt)}ct&&rt.render(w);for(let _t=0,yt=at.length;_t<yt;_t++){const wt=at[_t];eh(v,w,wt,wt.viewport)}}else B.length>0&&nh(G,B,w,N),ct&&rt.render(w),eh(v,w,N);C!==null&&(Dt.updateMultisampleRenderTarget(C),Dt.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(x,w,N),Wt.resetDefaultState(),F=-1,b=null,y.pop(),y.length>0?(f=y[y.length-1],D===!0&&pt.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function ka(w,N,H,G){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){G&&et.setFromMatrixPosition(w.matrixWorld).applyMatrix4(J);const _t=nt.update(w),yt=w.material;yt.visible&&v.push(w,_t,yt,H,et.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){const _t=nt.update(w),yt=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),et.copy(w.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),et.copy(_t.boundingSphere.center)),et.applyMatrix4(w.matrixWorld).applyMatrix4(J)),Array.isArray(yt)){const wt=_t.groups;for(let It=0,Nt=wt.length;It<Nt;It++){const Lt=wt[It],ee=yt[Lt.materialIndex];ee&&ee.visible&&v.push(w,_t,ee,H,et.z,Lt)}}else yt.visible&&v.push(w,_t,yt,H,et.z,null)}}const at=w.children;for(let _t=0,yt=at.length;_t<yt;_t++)ka(at[_t],N,H,G)}function eh(w,N,H,G){const B=w.opaque,at=w.transmissive,_t=w.transparent;f.setupLightsView(H),D===!0&&pt.setGlobalState(x.clippingPlanes,H),G&&dt.viewport(S.copy(G)),B.length>0&&Go(B,N,H),at.length>0&&Go(at,N,H),_t.length>0&&Go(_t,N,H),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function nh(w,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new wn(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float")?gi:pi,minFilter:ai,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const at=f.state.transmissionRenderTarget[G.id],_t=G.viewport||S;at.setSize(_t.z,_t.w);const yt=x.getRenderTarget();x.setRenderTarget(at),x.getClearColor(W),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),ct?rt.render(H):x.clear();const wt=x.toneMapping;x.toneMapping=qn;const It=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),D===!0&&pt.setGlobalState(x.clippingPlanes,G),Go(w,H,G),Dt.updateMultisampleRenderTarget(at),Dt.updateRenderTargetMipmap(at),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Lt=0,ee=N.length;Lt<ee;Lt++){const ge=N[Lt],ve=ge.object,Je=ge.geometry,ne=ge.material,Ct=ge.group;if(ne.side===He&&ve.layers.test(G.layers)){const Ge=ne.side;ne.side=Ie,ne.needsUpdate=!0,ih(ve,H,G,Je,ne,Ct),ne.side=Ge,ne.needsUpdate=!0,Nt=!0}}Nt===!0&&(Dt.updateMultisampleRenderTarget(at),Dt.updateRenderTargetMipmap(at))}x.setRenderTarget(yt),x.setClearColor(W,$),It!==void 0&&(G.viewport=It),x.toneMapping=wt}function Go(w,N,H){const G=N.isScene===!0?N.overrideMaterial:null;for(let B=0,at=w.length;B<at;B++){const _t=w[B],yt=_t.object,wt=_t.geometry,It=G===null?_t.material:G,Nt=_t.group;yt.layers.test(H.layers)&&ih(yt,N,H,wt,It,Nt)}}function ih(w,N,H,G,B,at){w.onBeforeRender(x,N,H,G,B,at),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(x,N,H,G,w,at),B.transparent===!0&&B.side===He&&B.forceSinglePass===!1?(B.side=Ie,B.needsUpdate=!0,x.renderBufferDirect(H,N,G,B,w,at),B.side=di,B.needsUpdate=!0,x.renderBufferDirect(H,N,G,B,w,at),B.side=He):x.renderBufferDirect(H,N,G,B,w,at),w.onAfterRender(x,N,H,G,B,at)}function Vo(w,N,H){N.isScene!==!0&&(N=xt);const G=At.get(w),B=f.state.lights,at=f.state.shadowsArray,_t=B.state.version,yt=st.getParameters(w,B.state,at,N,H),wt=st.getProgramCacheKey(yt);let It=G.programs;G.environment=w.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(w.isMeshStandardMaterial?T:te).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,It===void 0&&(w.addEventListener("dispose",lt),It=new Map,G.programs=It);let Nt=It.get(wt);if(Nt!==void 0){if(G.currentProgram===Nt&&G.lightsStateVersion===_t)return oh(w,yt),Nt}else yt.uniforms=st.getUniforms(w),w.onBuild(H,yt,x),w.onBeforeCompile(yt,x),Nt=st.acquireProgram(yt,wt),It.set(wt,Nt),G.uniforms=yt.uniforms;const Lt=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Lt.clippingPlanes=pt.uniform),oh(w,yt),G.needsLights=km(w),G.lightsStateVersion=_t,G.needsLights&&(Lt.ambientLightColor.value=B.state.ambient,Lt.lightProbe.value=B.state.probe,Lt.directionalLights.value=B.state.directional,Lt.directionalLightShadows.value=B.state.directionalShadow,Lt.spotLights.value=B.state.spot,Lt.spotLightShadows.value=B.state.spotShadow,Lt.rectAreaLights.value=B.state.rectArea,Lt.ltc_1.value=B.state.rectAreaLTC1,Lt.ltc_2.value=B.state.rectAreaLTC2,Lt.pointLights.value=B.state.point,Lt.pointLightShadows.value=B.state.pointShadow,Lt.hemisphereLights.value=B.state.hemi,Lt.directionalShadowMap.value=B.state.directionalShadowMap,Lt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Lt.spotShadowMap.value=B.state.spotShadowMap,Lt.spotLightMatrix.value=B.state.spotLightMatrix,Lt.spotLightMap.value=B.state.spotLightMap,Lt.pointShadowMap.value=B.state.pointShadowMap,Lt.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Nt,G.uniformsList=null,Nt}function sh(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=qr.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function oh(w,N){const H=At.get(w);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Dm(w,N,H,G,B){N.isScene!==!0&&(N=xt),Dt.resetTextureUnits();const at=N.fog,_t=G.isMeshStandardMaterial?N.environment:null,yt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:_i,wt=(G.isMeshStandardMaterial?T:te).get(G.envMap||_t),It=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Nt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Lt=!!H.morphAttributes.position,ee=!!H.morphAttributes.normal,ge=!!H.morphAttributes.color;let ve=qn;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ve=x.toneMapping);const Je=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ne=Je!==void 0?Je.length:0,Ct=At.get(G),Ge=f.state.lights;if(D===!0&&(U===!0||w!==b)){const an=w===b&&G.id===F;pt.setState(G,w,an)}let re=!1;G.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Ge.state.version||Ct.outputColorSpace!==yt||B.isBatchedMesh&&Ct.batching===!1||!B.isBatchedMesh&&Ct.batching===!0||B.isBatchedMesh&&Ct.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ct.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ct.instancing===!1||!B.isInstancedMesh&&Ct.instancing===!0||B.isSkinnedMesh&&Ct.skinning===!1||!B.isSkinnedMesh&&Ct.skinning===!0||B.isInstancedMesh&&Ct.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ct.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ct.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ct.instancingMorph===!1&&B.morphTexture!==null||Ct.envMap!==wt||G.fog===!0&&Ct.fog!==at||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==pt.numPlanes||Ct.numIntersection!==pt.numIntersection)||Ct.vertexAlphas!==It||Ct.vertexTangents!==Nt||Ct.morphTargets!==Lt||Ct.morphNormals!==ee||Ct.morphColors!==ge||Ct.toneMapping!==ve||Ct.morphTargetsCount!==ne)&&(re=!0):(re=!0,Ct.__version=G.version);let Ln=Ct.currentProgram;re===!0&&(Ln=Vo(G,N,B));let Wo=!1,Mi=!1,Ia=!1;const De=Ln.getUniforms(),jn=Ct.uniforms;if(dt.useProgram(Ln.program)&&(Wo=!0,Mi=!0,Ia=!0),G.id!==F&&(F=G.id,Mi=!0),Wo||b!==w){De.setValue(A,"projectionMatrix",w.projectionMatrix),De.setValue(A,"viewMatrix",w.matrixWorldInverse);const an=De.map.cameraPosition;an!==void 0&&an.setValue(A,et.setFromMatrixPosition(w.matrixWorld)),Ft.logarithmicDepthBuffer&&De.setValue(A,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&De.setValue(A,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,Mi=!0,Ia=!0)}if(B.isSkinnedMesh){De.setOptional(A,B,"bindMatrix"),De.setOptional(A,B,"bindMatrixInverse");const an=B.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),De.setValue(A,"boneTexture",an.boneTexture,Dt))}B.isBatchedMesh&&(De.setOptional(A,B,"batchingTexture"),De.setValue(A,"batchingTexture",B._matricesTexture,Dt),De.setOptional(A,B,"batchingColorTexture"),B._colorsTexture!==null&&De.setValue(A,"batchingColorTexture",B._colorsTexture,Dt));const Ua=H.morphAttributes;if((Ua.position!==void 0||Ua.normal!==void 0||Ua.color!==void 0)&&Et.update(B,H,Ln),(Mi||Ct.receiveShadow!==B.receiveShadow)&&(Ct.receiveShadow=B.receiveShadow,De.setValue(A,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(jn.envMap.value=wt,jn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(jn.envMapIntensity.value=N.environmentIntensity),Mi&&(De.setValue(A,"toneMappingExposure",x.toneMappingExposure),Ct.needsLights&&Lm(jn,Ia),at&&G.fog===!0&&ot.refreshFogUniforms(jn,at),ot.refreshMaterialUniforms(jn,G,it,j,f.state.transmissionRenderTarget[w.id]),qr.upload(A,sh(Ct),jn,Dt)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(qr.upload(A,sh(Ct),jn,Dt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&De.setValue(A,"center",B.center),De.setValue(A,"modelViewMatrix",B.modelViewMatrix),De.setValue(A,"normalMatrix",B.normalMatrix),De.setValue(A,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const an=G.uniformsGroups;for(let Na=0,Im=an.length;Na<Im;Na++){const rh=an[Na];Yt.update(rh,Ln),Yt.bind(rh,Ln)}}return Ln}function Lm(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function km(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,N,H){At.get(w.texture).__webglTexture=N,At.get(w.depthTexture).__webglTexture=H;const G=At.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const H=At.get(w);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,H=0){C=w,k=N,R=H;let G=!0,B=null,at=!1,_t=!1;if(w){const wt=At.get(w);wt.__useDefaultFramebuffer!==void 0?(dt.bindFramebuffer(A.FRAMEBUFFER,null),G=!1):wt.__webglFramebuffer===void 0?Dt.setupRenderTarget(w):wt.__hasExternalTextures&&Dt.rebindTextures(w,At.get(w.texture).__webglTexture,At.get(w.depthTexture).__webglTexture);const It=w.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(_t=!0);const Nt=At.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Nt[N])?B=Nt[N][H]:B=Nt[N],at=!0):w.samples>0&&Dt.useMultisampledRTT(w)===!1?B=At.get(w).__webglMultisampledFramebuffer:Array.isArray(Nt)?B=Nt[H]:B=Nt,S.copy(w.viewport),P.copy(w.scissor),X=w.scissorTest}else S.copy(O).multiplyScalar(it).floor(),P.copy(z).multiplyScalar(it).floor(),X=q;if(dt.bindFramebuffer(A.FRAMEBUFFER,B)&&G&&dt.drawBuffers(w,B),dt.viewport(S),dt.scissor(P),dt.setScissorTest(X),at){const wt=At.get(w.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+N,wt.__webglTexture,H)}else if(_t){const wt=At.get(w.texture),It=N||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,wt.__webglTexture,H||0,It)}F=-1},this.readRenderTargetPixels=function(w,N,H,G,B,at,_t){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=At.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt){dt.bindFramebuffer(A.FRAMEBUFFER,yt);try{const wt=w.texture,It=wt.format,Nt=wt.type;if(!Ft.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-G&&H>=0&&H<=w.height-B&&A.readPixels(N,H,G,B,mt.convert(It),mt.convert(Nt),at)}finally{const wt=C!==null?At.get(C).__webglFramebuffer:null;dt.bindFramebuffer(A.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(w,N,H,G,B,at,_t){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=At.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt){dt.bindFramebuffer(A.FRAMEBUFFER,yt);try{const wt=w.texture,It=wt.format,Nt=wt.type;if(!Ft.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-G&&H>=0&&H<=w.height-B){const Lt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Lt),A.bufferData(A.PIXEL_PACK_BUFFER,at.byteLength,A.STREAM_READ),A.readPixels(N,H,G,B,mt.convert(It),mt.convert(Nt),0),A.flush();const ee=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);await eg(A,ee,4);try{A.bindBuffer(A.PIXEL_PACK_BUFFER,Lt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,at)}finally{A.deleteBuffer(Lt),A.deleteSync(ee)}return at}}finally{const wt=C!==null?At.get(C).__webglFramebuffer:null;dt.bindFramebuffer(A.FRAMEBUFFER,wt)}}},this.copyFramebufferToTexture=function(w,N=null,H=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-H),B=Math.floor(w.image.width*G),at=Math.floor(w.image.height*G),_t=N!==null?N.x:0,yt=N!==null?N.y:0;Dt.setTexture2D(w,0),A.copyTexSubImage2D(A.TEXTURE_2D,H,0,0,_t,yt,B,at),dt.unbindTexture()},this.copyTextureToTexture=function(w,N,H=null,G=null,B=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],N=arguments[2],B=arguments[3]||0,H=null);let at,_t,yt,wt,It,Nt;H!==null?(at=H.max.x-H.min.x,_t=H.max.y-H.min.y,yt=H.min.x,wt=H.min.y):(at=w.image.width,_t=w.image.height,yt=0,wt=0),G!==null?(It=G.x,Nt=G.y):(It=0,Nt=0);const Lt=mt.convert(N.format),ee=mt.convert(N.type);Dt.setTexture2D(N,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,N.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,N.unpackAlignment);const ge=A.getParameter(A.UNPACK_ROW_LENGTH),ve=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Je=A.getParameter(A.UNPACK_SKIP_PIXELS),ne=A.getParameter(A.UNPACK_SKIP_ROWS),Ct=A.getParameter(A.UNPACK_SKIP_IMAGES),Ge=w.isCompressedTexture?w.mipmaps[B]:w.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,Ge.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ge.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,yt),A.pixelStorei(A.UNPACK_SKIP_ROWS,wt),w.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,B,It,Nt,at,_t,Lt,ee,Ge.data):w.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,B,It,Nt,Ge.width,Ge.height,Lt,Ge.data):A.texSubImage2D(A.TEXTURE_2D,B,It,Nt,Lt,ee,Ge),A.pixelStorei(A.UNPACK_ROW_LENGTH,ge),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ve),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Je),A.pixelStorei(A.UNPACK_SKIP_ROWS,ne),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ct),B===0&&N.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),dt.unbindTexture()},this.copyTextureToTexture3D=function(w,N,H=null,G=null,B=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,w=arguments[2],N=arguments[3],B=arguments[4]||0);let at,_t,yt,wt,It,Nt,Lt,ee,ge;const ve=w.isCompressedTexture?w.mipmaps[B]:w.image;H!==null?(at=H.max.x-H.min.x,_t=H.max.y-H.min.y,yt=H.max.z-H.min.z,wt=H.min.x,It=H.min.y,Nt=H.min.z):(at=ve.width,_t=ve.height,yt=ve.depth,wt=0,It=0,Nt=0),G!==null?(Lt=G.x,ee=G.y,ge=G.z):(Lt=0,ee=0,ge=0);const Je=mt.convert(N.format),ne=mt.convert(N.type);let Ct;if(N.isData3DTexture)Dt.setTexture3D(N,0),Ct=A.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Dt.setTexture2DArray(N,0),Ct=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,N.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,N.unpackAlignment);const Ge=A.getParameter(A.UNPACK_ROW_LENGTH),re=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Ln=A.getParameter(A.UNPACK_SKIP_PIXELS),Wo=A.getParameter(A.UNPACK_SKIP_ROWS),Mi=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ve.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ve.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,wt),A.pixelStorei(A.UNPACK_SKIP_ROWS,It),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Nt),w.isDataTexture||w.isData3DTexture?A.texSubImage3D(Ct,B,Lt,ee,ge,at,_t,yt,Je,ne,ve.data):N.isCompressedArrayTexture?A.compressedTexSubImage3D(Ct,B,Lt,ee,ge,at,_t,yt,Je,ve.data):A.texSubImage3D(Ct,B,Lt,ee,ge,at,_t,yt,Je,ne,ve),A.pixelStorei(A.UNPACK_ROW_LENGTH,Ge),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,re),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ln),A.pixelStorei(A.UNPACK_SKIP_ROWS,Wo),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Mi),B===0&&N.generateMipmaps&&A.generateMipmap(Ct),dt.unbindTexture()},this.initRenderTarget=function(w){At.get(w).__webglFramebuffer===void 0&&Dt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Dt.setTextureCube(w,0):w.isData3DTexture?Dt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Dt.setTexture2DArray(w,0):Dt.setTexture2D(w,0),dt.unbindTexture()},this.resetState=function(){k=0,R=0,C=null,dt.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Mc?"display-p3":"srgb",e.unpackColorSpace=se.workingColorSpace===ba?"display-p3":"srgb"}}class Gs{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Mt(t),this.near=e,this.far=n}clone(){return new Gs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Vs extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class aM{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=nc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return wc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ve=new I;class na{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Sn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array),o=ie(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new na(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Nf extends xi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let hs;const so=new I,us=new I,ds=new I,fs=new Ut,oo=new Ut,Ff=new ce,fr=new I,ro=new I,pr=new I,Au=new Ut,pl=new Ut,Ru=new Ut;class lM extends Ee{constructor(t=new Nf){if(super(),this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new Ne;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new aM(e,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new na(n,3,0,!1)),hs.setAttribute("uv",new na(n,2,3,!1))}this.geometry=hs,this.material=t,this.center=new Ut(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),Ff.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-ds.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;mr(fr.set(-.5,-.5,0),ds,r,us,s,o),mr(ro.set(.5,-.5,0),ds,r,us,s,o),mr(pr.set(.5,.5,0),ds,r,us,s,o),Au.set(0,0),pl.set(1,0),Ru.set(1,1);let a=t.ray.intersectTriangle(fr,ro,pr,!1,so);if(a===null&&(mr(ro.set(-.5,.5,0),ds,r,us,s,o),pl.set(0,1),a=t.ray.intersectTriangle(fr,pr,ro,!1,so),a===null))return;const l=t.ray.origin.distanceTo(so);l<t.near||l>t.far||e.push({distance:l,point:so.clone(),uv:un.getInterpolation(so,fr,ro,pr,Au,pl,Ru,new Ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function mr(i,t,e,n,s,o){fs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(oo.x=o*fs.x-s*fs.y,oo.y=s*fs.x+o*fs.y):oo.copy(fs),i.copy(t),i.x+=oo.x,i.y+=oo.y,i.applyMatrix4(Ff)}class Of extends Ue{constructor(t=null,e=1,n=1,s,o,r,a,l,c=le,h=le,u,d){super(null,r,a,l,c,h,s,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bf extends xi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ia=new I,sa=new I,Cu=new ce,ao=new bc,gr=new Oo,ml=new I,Pu=new I;class cM extends Ee{constructor(t=new Ne,e=new Bf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)ia.fromBufferAttribute(e,s-1),sa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ia.distanceTo(sa);t.setAttribute("lineDistance",new Ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(s),gr.radius+=o,t.ray.intersectsSphere(gr)===!1)return;Cu.copy(s).invert(),ao.copy(t.ray).applyMatrix4(Cu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let v=p,f=g-1;v<f;v+=c){const m=h.getX(v),y=h.getX(v+1),x=vr(this,t,ao,l,m,y);x&&e.push(x)}if(this.isLineLoop){const v=h.getX(g-1),f=h.getX(p),m=vr(this,t,ao,l,v,f);m&&e.push(m)}}else{const p=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let v=p,f=g-1;v<f;v+=c){const m=vr(this,t,ao,l,v,v+1);m&&e.push(m)}if(this.isLineLoop){const v=vr(this,t,ao,l,g-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function vr(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(ia.fromBufferAttribute(r,s),sa.fromBufferAttribute(r,o),e.distanceSqToSegment(ia,sa,ml,Pu)>n)return;ml.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ml);if(!(l<t.near||l>t.far))return{distance:l,point:Pu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,object:i}}const Du=new I,Lu=new I;class hM extends cM{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)Du.fromBufferAttribute(e,s),Lu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Du.distanceTo(Lu);t.setAttribute("lineDistance",new Ae(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ac extends xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ku=new ce,sc=new bc,_r=new Oo,xr=new I;class zf extends Ee{constructor(t=new Ne,e=new Ac){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(s),_r.radius+=o,t.ray.intersectsSphere(_r)===!1)return;ku.copy(s).invert(),sc.copy(t.ray).applyMatrix4(ku);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=d,v=p;g<v;g++){const f=c.getX(g);xr.fromBufferAttribute(u,f),Iu(xr,f,l,s,t,e,this)}}else{const d=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let g=d,v=p;g<v;g++)xr.fromBufferAttribute(u,g),Iu(xr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Iu(i,t,e,n,s,o,r){const a=sc.distanceSqToPoint(i);if(a<e){const l=new I;sc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:r})}}class Wi extends Ue{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const yr=new I,Mr=new I,gl=new I,Sr=new un;class uM extends Ne{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),o=Math.cos(Cs*e),r=t.getIndex(),a=t.getAttribute("position"),l=r?r.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){r?(c[0]=r.getX(g),c[1]=r.getX(g+1),c[2]=r.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:f,c:m}=Sr;if(v.fromBufferAttribute(a,c[0]),f.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Sr.getNormal(gl),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const x=(y+1)%3,E=u[y],k=u[x],R=Sr[h[y]],C=Sr[h[x]],F=`${E}_${k}`,b=`${k}_${E}`;b in d&&d[b]?(gl.dot(d[b].normal)<=o&&(p.push(R.x,R.y,R.z),p.push(C.x,C.y,C.z)),d[b]=null):F in d||(d[F]={index0:c[y],index1:c[x],normal:gl.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:f}=d[g];yr.fromBufferAttribute(a,v),Mr.fromBufferAttribute(a,f),p.push(yr.x,yr.y,yr.z),p.push(Mr.x,Mr.y,Mr.z)}this.setAttribute("position",new Ae(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Rc extends Ne{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new I,d=new I,p=[],g=[],v=[],f=[];for(let m=0;m<=n;m++){const y=[],x=m/n;let E=0;m===0&&r===0?E=.5/e:m===n&&l===Math.PI&&(E=-.5/e);for(let k=0;k<=e;k++){const R=k/e;u.x=-t*Math.cos(s+R*o)*Math.sin(r+x*a),u.y=t*Math.cos(r+x*a),u.z=t*Math.sin(s+R*o)*Math.sin(r+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),f.push(R+E,1-x),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const x=h[m][y+1],E=h[m][y],k=h[m+1][y],R=h[m+1][y+1];(m!==0||r>0)&&p.push(x,E,R),(m!==n-1||l<Math.PI)&&p.push(E,k,R)}this.setIndex(p),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(v,3)),this.setAttribute("uv",new Ae(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class dM extends xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gf,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fM extends dM{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Uu={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class pM{constructor(t,e,n){const s=this;let o=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const mM=new pM;class Cc{constructor(t){this.manager=t!==void 0?t:mM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Cc.DEFAULT_MATERIAL_NAME="__DEFAULT";class gM extends Cc{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=Uu.get(t);if(r!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0),r;const a=Lo("img");function l(){h(),Uu.add(t,this),e&&e(this),o.manager.itemEnd(t)}function c(u){h(),s&&s(u),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(t),a.src=t,a}}class Qs extends Cc{constructor(t){super(t)}load(t,e,n,s){const o=new Ue,r=new gM(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,s),o}}class Pc extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class vM extends Pc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const vl=new ce,Nu=new I,Fu=new I;class _M{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ec,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Nu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nu),Fu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fu),e.updateMatrixWorld(),vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class xM extends _M{constructor(){super(new ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hf extends Pc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new xM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ou extends Pc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xc);const Gf=13625079,yM=[.3,.52,.79],MM=[.81,.9,.97],_l=i=>`rgb(${Math.round(i[0]*255)},${Math.round(i[1]*255)},${Math.round(i[2]*255)})`;function SM(i,t,e){const n=[(t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2],s=i.createLinearGradient(0,0,0,256);s.addColorStop(0,_l(t)),s.addColorStop(.55,_l(n)),s.addColorStop(1,_l(e)),i.fillStyle=s,i.fillRect(0,0,2,256)}function wM(){const i=document.createElement("canvas");i.width=2,i.height=256;const t=i.getContext("2d");t&&SM(t,yM,MM);const e=new Wi(i);return e.colorSpace=Qt,e}function bM(i){const t=i|0,e=`
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
`.trim();return new fn({uniforms:{tColor:{value:null},tDepth:{value:null},tBloom:{value:null},tAO:{value:null},uSunUV:{value:new Ut(.5,.5)},uSunColor:{value:new Mt(1,.95,.8)},uIntensity:{value:0},uDecay:{value:.96},uWeight:{value:.9},uBloom:{value:0},uAO:{value:0}},vertexShader:e,fragmentShader:n,depthTest:!1,depthWrite:!1})}class Bu{constructor(t){_(this,"material");_(this,"quad");_(this,"quadScene",new Vs);_(this,"quadCam",new ko(-1,1,1,-1,0,1));this.material=bM(t),this.quad=new Kt(new $e(2,2),this.material),this.quadScene.add(this.quad)}render(t){t.render(this.quadScene,this.quadCam)}dispose(){this.material.dispose(),this.quad.geometry.dispose()}}const EM=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim(),TM=`
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
`.trim(),AM=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim(),RM=`
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
`.trim();class CM{constructor(t,e){_(this,"bloomA");_(this,"bloomB");_(this,"extractMat");_(this,"extractScene",new Vs);_(this,"extractCam",new ko(-1,1,1,-1,0,1));_(this,"blurMat");_(this,"blurScene",new Vs);_(this,"blurCam",new ko(-1,1,1,-1,0,1));this.bloomA=this.buildRT(1,1),this.bloomB=this.buildRT(1,1),this.extractMat=new fn({uniforms:{tScene:{value:null},uThreshold:{value:1.05},uKnee:{value:.22},uSourceTexel:{value:new Ut(1,1)}},vertexShader:EM,fragmentShader:TM,depthTest:!1,depthWrite:!1});const n=new Kt(new $e(2,2),this.extractMat);this.extractScene.add(n),this.blurMat=new fn({uniforms:{tBlur:{value:null},uTexelSize:{value:new Ut(1,1)},uHorizontal:{value:1}},vertexShader:AM,fragmentShader:RM,depthTest:!1,depthWrite:!1});const s=new Kt(new $e(2,2),this.blurMat);this.blurScene.add(s),this.setSize(t,e)}get texture(){return this.bloomA.texture}setSize(t,e){this.bloomA.dispose(),this.bloomB.dispose();const n=Math.max(1,Math.round(t)),s=Math.max(1,Math.round(e));this.bloomA=this.buildRT(n,s),this.bloomB=this.buildRT(n,s),this.extractMat.uniforms.uSourceTexel.value.set(1/(n*4),1/(s*4)),this.blurMat.uniforms.uTexelSize.value.set(1/n,1/s)}render(t,e){this.extractMat.uniforms.tScene.value=e,t.setRenderTarget(this.bloomA),t.clear(),t.render(this.extractScene,this.extractCam);for(let n=0;n<2;n++)this.blurMat.uniforms.tBlur.value=this.bloomA.texture,this.blurMat.uniforms.uHorizontal.value=1,t.setRenderTarget(this.bloomB),t.clear(),t.render(this.blurScene,this.blurCam),this.blurMat.uniforms.tBlur.value=this.bloomB.texture,this.blurMat.uniforms.uHorizontal.value=0,t.setRenderTarget(this.bloomA),t.clear(),t.render(this.blurScene,this.blurCam);t.setRenderTarget(null)}dispose(){this.bloomA.dispose(),this.bloomB.dispose(),this.extractMat.dispose(),this.blurMat.dispose()}buildRT(t,e){return new wn(t,e,{type:gi,depthBuffer:!1})}}function Vf(i){const t=i.visualViewport,e=t&&t.width>0?t.width:i.innerWidth,n=t&&t.height>0?t.height:i.innerHeight;return{width:Math.max(1,Math.ceil(e)),height:Math.max(1,Math.ceil(n))}}const oa=1,oc=2,bt=16,me=192;class Bo{constructor(){_(this,"blocks",new Uint16Array(bt*me*bt));_(this,"fluid",new Uint8Array(bt*me*bt));_(this,"dirty",!0)}idx(t,e,n){return t+n*bt+e*bt*bt}inBounds(t,e,n){return t>=0&&t<bt&&e>=0&&e<me&&n>=0&&n<bt}get(t,e,n){return this.inBounds(t,e,n)?this.blocks[this.idx(t,e,n)]:0}set(t,e,n,s){this.inBounds(t,e,n)&&(this.blocks[this.idx(t,e,n)]=s)}getFluid(t,e,n){return this.inBounds(t,e,n)?this.fluid[this.idx(t,e,n)]:0}setFluid(t,e,n,s){this.inBounds(t,e,n)&&(this.fluid[this.idx(t,e,n)]=s)}static fromBuffers(t,e){const n=new Bo;return n.blocks.set(new Uint16Array(t)),n.fluid.set(new Uint8Array(e)),n}}const Wf=16,Xf=32,PM=i=>i&15,DM=i=>(i&Wf)!==0,LM=i=>(i&Xf)!==0,qf=(i,t,e)=>i&15|(t?Wf:0)|(e?Xf:0),jt=i=>i>>4,Ze=i=>i&15;function hn(i,t,e){let n=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,1274126177);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}const To=i=>i*i*(3-2*i);function kM(i,t,e){const n=Math.floor(i),s=Math.floor(t),o=i-n,r=t-s,a=hn(n,s,e),l=hn(n+1,s,e),c=hn(n,s+1,e),h=hn(n+1,s+1,e),u=To(o),d=To(r),p=a+(l-a)*u,g=c+(h-c)*u;return p+(g-p)*d}function ws(i,t,e,n=4){let s=1,o=1,r=0,a=0;for(let l=0;l<n;l++)r+=s*kM(i*o,t*o,e+l*101),a+=s,s*=.5,o*=2;return r/a}function Yf(i,t,e,n){let s=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,2147483647)^Math.imul(n|0,1274126177);return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296}function Xe(i,t,e,n){const s=Math.floor(i),o=Math.floor(t),r=Math.floor(e),a=To(i-s),l=To(t-o),c=To(e-r),h=(f,m,y)=>f+(m-f)*y,u=(f,m,y)=>Yf(s+f,o+m,r+y,n),d=h(u(0,0,0),u(1,0,0),a),p=h(u(0,1,0),u(1,1,0),a),g=h(u(0,0,1),u(1,0,1),a),v=h(u(0,1,1),u(1,1,1),a);return h(h(d,p,l),h(g,v,l),c)}function $f(i){let t=i>>>0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Hn=(i=>(i[i.PosX=0]="PosX",i[i.NegX=1]="NegX",i[i.PosY=2]="PosY",i[i.NegY=3]="NegY",i[i.PosZ=4]="PosZ",i[i.NegZ=5]="NegZ",i))(Hn||{});const zt={stone:0,dirt:1,grass_top:2,grass_side:3,cobblestone:4,sand:5,oak_log_top:6,oak_log_side:7,oak_planks:8,coal_ore:9,water:10,oak_leaves:11,crafting_table_top:12,crafting_table_side:13,iron_ore:14,furnace_front:15,gravel:16,grass_plant:17,obsidian:18,netherrack:19,soul_sand:20,glowstone:21,nether_quartz_ore:22,lava:23,bedrock:24,nether_portal:25,sandstone:26,cactus:27,ice:28,snow:29,spruce_log:30,spruce_leaves:31,coal_block:32,iron_block:33,quartz_block:34,diamond_ore:35,diamond_block:36},Zt=i=>[i,i,i,i,i,i],lo=(i,t,e)=>[i,i,t,e,i,i],IM=258,UM=296,Qe=[{id:0,name:"air",solid:!1,transparent:!0,faces:Zt(0),hardness:0,drop:null,needsTool:!1,tool:null},{id:1,name:"stone",solid:!0,transparent:!1,faces:Zt(zt.stone),hardness:1.5,drop:4,needsTool:!0,tool:"pickaxe"},{id:2,name:"dirt",solid:!0,transparent:!1,faces:Zt(zt.dirt),hardness:.5,drop:2,needsTool:!1,tool:"shovel"},{id:3,name:"grass",solid:!0,transparent:!1,faces:lo(zt.grass_side,zt.grass_top,zt.dirt),hardness:.6,drop:2,needsTool:!1,tool:"shovel"},{id:4,name:"cobblestone",solid:!0,transparent:!1,faces:Zt(zt.cobblestone),hardness:2,drop:4,needsTool:!0,tool:"pickaxe"},{id:5,name:"sand",solid:!0,transparent:!1,faces:Zt(zt.sand),hardness:.5,drop:5,needsTool:!1,tool:"shovel"},{id:6,name:"oak_log",solid:!0,transparent:!1,faces:lo(zt.oak_log_side,zt.oak_log_top,zt.oak_log_top),hardness:2,drop:6,needsTool:!1,tool:"axe"},{id:7,name:"oak_planks",solid:!0,transparent:!1,faces:Zt(zt.oak_planks),hardness:2,drop:7,needsTool:!1,tool:"axe"},{id:8,name:"coal_ore",solid:!0,transparent:!1,faces:Zt(zt.coal_ore),hardness:3,drop:IM,needsTool:!0,tool:"pickaxe"},{id:9,name:"water",solid:!1,transparent:!0,faces:Zt(zt.water),hardness:0,drop:null,needsTool:!1,tool:null},{id:10,name:"oak_leaves",solid:!0,transparent:!0,faces:Zt(zt.oak_leaves),hardness:.2,drop:null,needsTool:!1,tool:null},{id:11,name:"crafting_table",solid:!0,transparent:!1,faces:lo(zt.crafting_table_side,zt.crafting_table_top,zt.oak_planks),hardness:2.5,drop:11,needsTool:!1,tool:"axe"},{id:12,name:"iron_ore",solid:!0,transparent:!1,faces:Zt(zt.iron_ore),hardness:3,drop:12,needsTool:!0,tool:"pickaxe",minTier:2},{id:13,name:"furnace",solid:!0,transparent:!1,faces:lo(zt.furnace_front,zt.cobblestone,zt.cobblestone),hardness:3.5,drop:13,needsTool:!0,tool:"pickaxe"},{id:14,name:"torch",solid:!1,transparent:!0,faces:Zt(0),hardness:0,drop:14,needsTool:!1,tool:null,light:14},{id:15,name:"gravel",solid:!0,transparent:!1,faces:Zt(zt.gravel),hardness:.6,drop:15,needsTool:!1,tool:"shovel"},{id:16,name:"grass_plant",solid:!1,transparent:!0,faces:Zt(zt.grass_plant),hardness:0,drop:null,needsTool:!1,tool:null},{id:17,name:"tall_grass",solid:!1,transparent:!0,faces:Zt(zt.grass_plant),hardness:0,drop:null,needsTool:!1,tool:null},{id:18,name:"obsidian",solid:!0,transparent:!1,faces:Zt(zt.obsidian),hardness:50,drop:18,needsTool:!0,tool:"pickaxe",minTier:4},{id:19,name:"netherrack",solid:!0,transparent:!1,faces:Zt(zt.netherrack),hardness:.4,drop:19,needsTool:!0,tool:"pickaxe"},{id:20,name:"soul_sand",solid:!0,transparent:!1,faces:Zt(zt.soul_sand),hardness:.5,drop:20,needsTool:!1,tool:"shovel"},{id:21,name:"glowstone",solid:!0,transparent:!1,faces:Zt(zt.glowstone),hardness:.3,drop:21,needsTool:!1,tool:null,light:15},{id:22,name:"nether_quartz_ore",solid:!0,transparent:!1,faces:Zt(zt.nether_quartz_ore),hardness:3,drop:295,needsTool:!0,tool:"pickaxe",minTier:1},{id:23,name:"lava",solid:!1,transparent:!0,faces:Zt(zt.lava),hardness:100,drop:null,needsTool:!1,tool:null,light:15},{id:24,name:"bedrock",solid:!0,transparent:!1,faces:Zt(zt.bedrock),hardness:-1,drop:null,needsTool:!1,tool:null},{id:25,name:"nether_portal",solid:!1,transparent:!0,faces:Zt(zt.nether_portal),hardness:-1,drop:null,needsTool:!1,tool:null,light:11},{id:26,name:"sandstone",solid:!0,transparent:!1,faces:Zt(zt.sandstone),hardness:.8,drop:26,needsTool:!0,tool:"pickaxe"},{id:27,name:"cactus",solid:!0,transparent:!1,faces:Zt(zt.cactus),hardness:.4,drop:27,needsTool:!1,tool:null},{id:28,name:"ice",solid:!0,transparent:!1,faces:Zt(zt.ice),hardness:.5,drop:null,needsTool:!1,tool:"pickaxe"},{id:29,name:"snow_layer",solid:!1,transparent:!0,faces:Zt(zt.snow),hardness:0,drop:null,needsTool:!1,tool:"shovel"},{id:30,name:"spruce_log",solid:!0,transparent:!1,faces:lo(zt.spruce_log,zt.oak_log_top,zt.oak_log_top),hardness:2,drop:30,needsTool:!1,tool:"axe"},{id:31,name:"spruce_leaves",solid:!0,transparent:!0,faces:Zt(zt.spruce_leaves),hardness:.2,drop:null,needsTool:!1,tool:null},{id:32,name:"coal_block",solid:!0,transparent:!1,faces:Zt(zt.coal_block),hardness:5,drop:32,needsTool:!0,tool:"pickaxe"},{id:33,name:"iron_block",solid:!0,transparent:!1,faces:Zt(zt.iron_block),hardness:5,drop:33,needsTool:!0,tool:"pickaxe",minTier:2},{id:34,name:"quartz_block",solid:!0,transparent:!1,faces:Zt(zt.quartz_block),hardness:.8,drop:34,needsTool:!0,tool:"pickaxe"},{id:35,name:"diamond_ore",solid:!0,transparent:!1,faces:Zt(zt.diamond_ore),hardness:3,drop:UM,needsTool:!0,tool:"pickaxe",minTier:3},{id:36,name:"diamond_block",solid:!0,transparent:!1,faces:Zt(zt.diamond_block),hardness:5,drop:36,needsTool:!0,tool:"pickaxe",minTier:3}],Kf=3,Wn=9,Io=10,Ta=6,NM=7,FM=4,jf=11,OM=12,zu=13,Ds=14,Hu=15,BM=16,Zf=17,Gn=18,zM=19,HM=5,Qf=20,GM=21,VM=22,ra=23,Dc=24,Aa=25,WM=26,xs=27,Ls=28,Lc=29,Ra=30,Ca=31,XM=32,qM=35,rc=i=>i===ra,YM=i=>i===Aa,be=i=>{var t;return((t=Qe[i])==null?void 0:t.solid)??!1},yn=i=>i===Wn,Gu=i=>i===Io||i===Ca,Oi=i=>i===BM||i===Zf||i===Lc,Vu=i=>be(i)||Oi(i),Wu=i=>i===0||i===Wn||Oi(i)||i===Aa,ps=i=>{const t=Qe[i];return t?t.solid&&!t.transparent:!1},xl=(i,t)=>Qe[i].faces[t],Jf=i=>{var t;return((t=Qe[i])==null?void 0:t.hardness)??0},$M=i=>{var t;return((t=Qe[i])==null?void 0:t.needsTool)??!1},KM=i=>{var t;return((t=Qe[i])==null?void 0:t.light)??0};function tp(i,t){var n;const e=((n=Qe[i])==null?void 0:n.tool)??null;return t!==null&&e!==null&&t.kind===e}const ep=(i,t=null)=>{var e;return $M(i)?tp(i,t)?t.tier>=(((e=Qe[i])==null?void 0:e.minTier)??1):!1:!0},jM=(i,t=null)=>{if(Oi(i))return 0;const e=Math.max(0,Jf(i));if(e===0)return 0;const n=tp(i,t)?t.speed:1,s=ep(i,t)?30:100;return Math.ceil(s*e/n)*50},ZM=(i,t=null)=>{var e;return ep(i,t)?((e=Qe[i])==null?void 0:e.drop)??null:null},QM=i=>i===xs,JM=i=>i===Ls?.98:.6,Xu=320,tS=.38,eS=.66;function np(i,t,e){return ws(i/130,t/130,e+4321,2)}function nS(i,t,e){return ws(i/Xu,t/Xu,e+9001,3)}function ys(i,t,e){const n=nS(i,t,e);return n<tS?"snow":n>eS?"desert":np(i,t,e)>.62?"forest":"plains"}const kc=1,iS=2,yl=3,co=5,sS=8,oS=12,rS=15,aS=16,lS=17,Te=116,cS=qf(8,!0,!1);function hS(i,t,e){const n=Be(i,t,e);return Math.abs(Be(i+5,t,e)-n)<=3&&Math.abs(Be(i-5,t,e)-n)<=3&&Math.abs(Be(i,t+5,e)-n)<=3&&Math.abs(Be(i,t-5,e)-n)<=3}function uS(i,t,e,n,s){const o=n-t;if(o<12)return!1;const r=i+(Xe(i/36,t/30,e/36,s+991)-.5)*26,a=t+(Xe(t/30,i/34,e/34,s+993)-.5)*22,l=e+(Xe(e/36,t/30,i/36,s+992)-.5)*26;return o<50?Math.abs(Xe(r/14,a/14,l/14,s+222)-.5)<.03:o<100?Math.abs(Xe(r/18,a/18,l/18,s+333)-.5)<.05?!0:Xe(r/22,a/22,l/22,s+700)<.07:Xe(r/26,a/26,l/26,s+700)<.07?!0:Math.abs(Xe(r/18,a/18,l/18,s+333)-.5)<.04}function Ml(i,t,e,n){return Xe(i/5,t/5,e/5,n+303)>.82?rS:kc}const dS=[{id:sS,attempts:20,size:17,minY:5,maxY:128,salt:2887841},{id:oS,attempts:20,size:9,minY:5,maxY:64,salt:2044082},{id:qM,attempts:1,size:8,minY:5,maxY:16,salt:5053075}],wr=1,fS=(i,t,e)=>Math.max(t,Math.min(e,i));function pS(i,t,e,n,s){const o=Yf(t,e,s,i+n.salt|0);return $f(Math.floor(o*4294967296))}function mS(i,t,e,n,s,o,r,a){const l=pS(o,n,s,r,a),c=n*bt+l()*bt,h=s*bt+l()*bt,u=r.minY+Math.floor(l()*(r.maxY-r.minY+1)),d=fS(u+Math.floor(l()*5)-2,r.minY,r.maxY),p=l()*Math.PI,g=r.size/8,v=c+Math.sin(p)*g,f=c-Math.sin(p)*g,m=h+Math.cos(p)*g,y=h-Math.cos(p)*g;for(let x=0;x<r.size;x++){const E=x/r.size,k=v+(f-v)*E,R=u+(d-u)*E,C=m+(y-m)*E,F=(Math.sin(Math.PI*E)+1)*l()*r.size/16+1,b=F/2,S=F*(.55+l()*.15)/2,P=b,X=Math.floor(k-b),W=Math.floor(k+b),$=Math.max(r.minY,Math.floor(R-S)),Z=Math.min(r.maxY,me-1,Math.floor(R+S)),j=Math.floor(C-P),it=Math.floor(C+P);for(let Y=X;Y<=W;Y++){if(jt(Y)!==t)continue;const gt=(Y+.5-k)/b,O=gt*gt;if(!(O>=1))for(let z=j;z<=it;z++){if(jt(z)!==e)continue;const q=(z+.5-C)/P,Q=O+q*q;if(!(Q>=1))for(let D=$;D<=Z;D++){const U=(D+.5-R)/S;if(Q+U*U>=1)continue;const J=Ze(Y),et=Ze(z);i.get(J,D,et)===kc&&i.set(J,D,et,r.id)}}}}}function gS(i,t,e,n){for(const s of dS)for(let o=t-wr;o<=t+wr;o++)for(let r=e-wr;r<=e+wr;r++)for(let a=0;a<s.attempts;a++)mS(i,t,e,o,r,n,s,a)}function Be(i,t,e){const n=ws(i/260,t/260,e,4),s=ws(i/72,t/72,e+17,3);let o;n<.46?o=90+n*56:n<.56?o=116+(n-.46)*80:o=124+(n-.56)*180;let r=o+(s-.5)*8;{const a=ws(i/140,t/140,e+777,3),l=Math.abs(a-.5),c=.028+s*.022+Math.max(0,n-.54)*.4;if(l<c){let h=1-l/c;h=h*h*(3-2*h);const u=2+Math.floor(ws(i/60,t/60,e+555,2)*3),d=Te-u;r=r*(1-h)+d*h}}return Math.floor(r)}const ii=2,vS=.08;function _S(i,t,e){const n=np(i,t,e);return n<.45?.003:n>.62?.08:.003+(n-.45)/.17*.077}function xS(i,t,e){return 4+Math.floor(hn(i,t,e*31+5)*3)}function qu(i,t,e,n,s,o,r,a=Ta,l=Io,c=!1){const h=o+xS(n,s,r),u=(p,g,v,f,m)=>{if(g<0||g>=me||jt(p)!==t||jt(v)!==e)return;const y=Ze(p),x=Ze(v);m&&i.get(y,g,x)!==0||i.set(y,g,x,f)};if(c){const p=h+2,g=o+3;for(let v=g;v<=p;v++){const f=p-v,m=f===0?0:Math.min(2,Math.floor((f+1)/2));for(let y=-m;y<=m;y++)for(let x=-m;x<=m;x++)Math.abs(y)+Math.abs(x)>m||u(n+y,v,s+x,l,!0)}}else{for(const g of[-2,-1])for(let v=-2;v<=2;v++)for(let f=-2;f<=2;f++)Math.abs(v)===2&&Math.abs(f)===2||u(n+v,h+g,s+f,l,!0);for(let g=-1;g<=1;g++)for(let v=-1;v<=1;v++)u(n+g,h,s+v,l,!0);const p=[[0,0],[1,0],[-1,0],[0,1],[0,-1]];for(const[g,v]of p)u(n+g,h+1,s+v,l,!0)}const d=c?h+1:h;for(let p=o+1;p<=d;p++)u(n,p,s,a,!1)}const br=127,yS=31;function MS(i,t,e){const n=new Bo,s=e+7e4;for(let o=0;o<bt;o++)for(let r=0;r<bt;r++){const a=i*bt+r,l=t*bt+o;for(let c=0;c<=br;c++){if(c<=1||c>=br-1){n.set(r,c,o,Dc);continue}if(Xe(a/18,c/16,l/18,s+1)>.55||Xe(a/9,c/10,l/9,s+2)>.78){c<=yS&&n.set(r,c,o,ra);continue}let u=zM;Xe(a/4,c/4,l/4,s+3)>.86?u=VM:Xe(a/10,c/10,l/10,s+4)>.9&&(u=Qf),n.set(r,c,o,u)}if(hn(a,l,s+5)<.012){for(let c=br-2;c>br-7;c--)if(n.get(r,c,o)===0){n.set(r,c,o,GM);break}}}return n.dirty=!0,n}function ip(i,t,e,n="overworld"){if(n==="nether")return MS(i,t,e);const s=new Bo;for(let a=0;a<bt;a++)for(let l=0;l<bt;l++){const c=i*bt+l,h=t*bt+a,u=Be(c,h,e),d=Math.min(u,Be(c+4,h,e),Be(c-4,h,e),Be(c,h+4,e),Be(c,h-4,e)),p=hS(c,h,e),g=u<=Te+1,v=ys(c,h,e);for(let f=0;f<=u;f++){const m=p&&Xe((c+f*.8)/8,f/120,(h+f*.6)/8,e+888)>.9;if(f>1&&(m||f<u&&uS(c,f,h,d,e)))continue;let y=kc;f===0||f<=4&&Xe(c*.7,f*3.3,h*.7,e+4242)<(5-f)/5?y=Dc:g?f===u||f>=u-3?y=co:y=Ml(c,f,h,e):v==="desert"?f===u||f>=u-3?y=co:f>=u-7?y=WM:y=Ml(c,f,h,e):f===u?y=yl:f>=u-3?y=iS:y=Ml(c,f,h,e),s.set(l,f,a,y)}for(let f=u+1;f<=Te;f++)s.set(l,f,a,Wn),s.setFluid(l,f,a,cS);if(u<Te&&v==="snow"&&s.set(l,Te,a,Ls),!g&&u>Te+1&&v==="snow"){const f=s.get(l,u,a),m=s.get(l,u+1,a);f===yl&&m===0&&hn(c+1,h+3,e*19+41)<.85&&s.set(l,u+1,a,Lc)}}gS(s,i,t,e);const o=i*bt,r=t*bt;for(let a=o-ii;a<o+bt+ii;a++)for(let l=r-ii;l<r+bt+ii;l++){const c=hn(a,l,e*13+7);if(c>=vS)continue;const h=Be(a,l,e);if(h<=Te+1)continue;const u=ys(a,l,e);u!=="plains"&&u!=="forest"||c<_S(a,l,e)&&qu(s,i,t,a,l,h,e)}for(let a=o-ii;a<o+bt+ii;a++)for(let l=r-ii;l<r+bt+ii;l++){if(ys(a,l,e)!=="snow")continue;const c=Be(a,l,e);c<=Te+1||hn(a,l,e*17+3)>=.03||qu(s,i,t,a,l,c,e,Ra,Ca,!0)}for(let a=0;a<bt;a++)for(let l=0;l<bt;l++){const c=o+l,h=r+a;if(ys(c,h,e)!=="desert")continue;const u=Be(c,h,e);if(u<=Te+1||s.get(l,u,a)!==co||s.get(l,u+1,a)!==0||hn(c,h,e*11+53)>=.02)continue;const p=u+1;if(l>0&&(s.get(l-1,p,a)===xs||be(s.get(l-1,p,a)))||l<bt-1&&(s.get(l+1,p,a)===xs||be(s.get(l+1,p,a)))||a>0&&(s.get(l,p,a-1)===xs||be(s.get(l,p,a-1)))||a<bt-1&&(s.get(l,p,a+1)===xs||be(s.get(l,p,a+1))))continue;const g=1+Math.floor(hn(c*3,h*3,e*7+13)*3);for(let v=1;v<=g;v++){const f=u+v;if(f>=me)break;s.set(l,f,a,xs)}}for(let a=0;a<bt;a++)for(let l=0;l<bt;l++){const c=o+l,h=r+a,u=ys(c,h,e);if(u!=="plains"&&u!=="forest")continue;const d=Be(c,h,e);if(d<=Te+1||s.get(l,d,a)!==yl||s.get(l,d+1,a)!==0)continue;const p=hn(c,h,e*7+31);p>.4||s.set(l,d+1,a,p<.08?lS:aS)}return s.dirty=!0,s}const SS=Te+8/9,wS=new ce().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);class bS{constructor(t=1,e=1,n={}){_(this,"camera",new Ye);_(this,"textureMatrix",new ce);_(this,"renderTarget");_(this,"planeY");_(this,"clipBias");_(this,"overscan");_(this,"plane",new Vn);_(this,"cameraPlane",new Vn);_(this,"planeNormal",new I(0,1,0));_(this,"sourcePosition",new I);_(this,"reflectedPosition",new I);_(this,"reflectedDirection",new I);_(this,"reflectedUp",new I);_(this,"lookTarget",new I);_(this,"sourceQuaternion",new Vi);_(this,"clipPlane",new _e);_(this,"clipCorner",new _e);_(this,"savedViewport",new _e);_(this,"savedScissor",new _e);this.planeY=n.planeY??SS,this.clipBias=n.clipBias??.001,this.overscan=_o.clamp(n.overscan??1.08,1,1.2),this.plane.set(this.planeNormal,-this.planeY),this.renderTarget=new wn(Math.max(1,Math.round(t)),Math.max(1,Math.round(e)),{type:gi,minFilter:fe,magFilter:fe,generateMipmaps:!1,depthBuffer:!0,stencilBuffer:!1,samples:Math.max(0,Math.round(n.samples??4))}),this.renderTarget.texture.name="mineworld-planar-reflection",this.renderTarget.texture.colorSpace=Pn,this.camera.layers.set(0)}get texture(){return this.renderTarget.texture}resize(t,e){this.renderTarget.setSize(Math.max(1,Math.round(t)),Math.max(1,Math.round(e)))}render(t,e,n,s,o){this.updateCamera(n);const r=t.getRenderTarget();t.getViewport(this.savedViewport),t.getScissor(this.savedScissor);const a=t.getScissorTest(),l=t.xr.enabled,c=t.shadowMap.autoUpdate;try{s==null||s(this.camera,this.renderTarget),t.xr.enabled=!1,t.shadowMap.autoUpdate=!1,t.setRenderTarget(this.renderTarget),t.setViewport(0,0,this.renderTarget.width,this.renderTarget.height),t.setScissorTest(!1),t.state.buffers.depth.setMask(!0),t.clear(!0,!0,!0),t.render(e,this.camera)}finally{t.xr.enabled=l,t.shadowMap.autoUpdate=c,t.setRenderTarget(r),t.setViewport(this.savedViewport),t.setScissor(this.savedScissor),t.setScissorTest(a),o==null||o(this.camera,this.renderTarget)}}dispose(){this.renderTarget.dispose()}updateCamera(t){t.updateWorldMatrix(!0,!1),t.getWorldPosition(this.sourcePosition),t.getWorldQuaternion(this.sourceQuaternion),this.reflectedPosition.copy(this.sourcePosition).addScaledVector(this.planeNormal,-2*this.plane.distanceToPoint(this.sourcePosition)),this.reflectedDirection.set(0,0,-1).applyQuaternion(this.sourceQuaternion).reflect(this.planeNormal),this.reflectedUp.set(0,1,0).applyQuaternion(this.sourceQuaternion).reflect(this.planeNormal),this.camera.position.copy(this.reflectedPosition),this.camera.up.copy(this.reflectedUp),this.lookTarget.copy(this.reflectedPosition).add(this.reflectedDirection),this.camera.lookAt(this.lookTarget),this.camera.updateMatrixWorld(!0),this.camera.near=t.near,this.camera.far=t.far,this.camera.fov=t.fov,this.camera.aspect=t.aspect,this.camera.zoom=t.zoom,this.camera.focus=t.focus,this.camera.filmGauge=t.filmGauge,this.camera.filmOffset=t.filmOffset,this.camera.projectionMatrix.copy(t.projectionMatrix),this.camera.projectionMatrix.elements[0]/=this.overscan,this.camera.projectionMatrix.elements[5]/=this.overscan,this.applyObliqueNearPlane(),this.camera.projectionMatrixInverse.copy(this.camera.projectionMatrix).invert(),this.textureMatrix.copy(wS).multiply(this.camera.projectionMatrix).multiply(this.camera.matrixWorldInverse)}applyObliqueNearPlane(){this.cameraPlane.copy(this.plane).applyMatrix4(this.camera.matrixWorldInverse),this.clipPlane.set(this.cameraPlane.normal.x,this.cameraPlane.normal.y,this.cameraPlane.normal.z,this.cameraPlane.constant);const e=this.camera.projectionMatrix.elements;this.clipCorner.set((Math.sign(this.clipPlane.x)+e[8])/e[0],(Math.sign(this.clipPlane.y)+e[9])/e[5],-1,(1+e[10])/e[14]);const n=this.clipPlane.dot(this.clipCorner);Math.abs(n)<1e-7||(this.clipPlane.multiplyScalar(2/n),e[2]=this.clipPlane.x,e[6]=this.clipPlane.y,e[10]=this.clipPlane.z+1-this.clipBias,e[14]=this.clipPlane.w)}}class ES{constructor(t){_(this,"scene",new Vs);_(this,"camera");_(this,"gl");_(this,"viewportW",1);_(this,"viewportH",1);_(this,"resizeQueued",!1);_(this,"onViewportChange",()=>{this.resizeQueued||(this.resizeQueued=!0,requestAnimationFrame(()=>{this.resizeQueued=!1,this.resize()}))});_(this,"skyDome");_(this,"skyDomeColors");_(this,"lastSky","");_(this,"rt",null);_(this,"refractionRT",null);_(this,"waterRefractionSink",null);_(this,"planarReflection",null);_(this,"waterReflectionSink",null);_(this,"godStd",new Bu(24));_(this,"godHigh",new Bu(48));_(this,"god",null);_(this,"bloom",null);_(this,"ssao",null);var o,r;this.gl=new Uf({canvas:t,antialias:!0}),this.gl.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.gl.toneMapping=qn,this.gl.shadowMap.enabled=!0,this.gl.shadowMap.type=rf,this.gl.shadowMap.autoUpdate=!1;const e=new Rc(750,32,24),n=e.getAttribute("position").count;this.skyDomeColors=new ue(new Float32Array(n*3),3),e.setAttribute("color",this.skyDomeColors);const s=new pe({vertexColors:!0,side:Ie,depthWrite:!1,fog:!1});this.skyDome=new Kt(e,s),this.skyDome.frustumCulled=!1,this.skyDome.renderOrder=-1e3,this.scene.add(this.skyDome),this.setSkyColors([.3,.52,.79],[.81,.9,.97]),this.scene.fog=new Gs(Gf,30,110),this.camera=new Ye(70,1,.1,1e3),this.camera.layers.enable(oa),this.camera.layers.enable(oc),this.resize(),window.addEventListener("resize",this.onViewportChange),window.addEventListener("orientationchange",this.onViewportChange),(o=window.visualViewport)==null||o.addEventListener("resize",this.onViewportChange),(r=window.visualViewport)==null||r.addEventListener("scroll",this.onViewportChange)}setSkyColors(t,e,n=0,s=0){const o=`${t.join()}|${e.join()}|${Math.round(n*50)}|${Math.round(s*25)}`;if(o===this.lastSky)return;this.lastSky=o;const r=new Mt().setRGB(t[0],t[1],t[2],Qt),a=new Mt().setRGB(e[0],e[1],e[2],Qt),l=this.skyDome.geometry.getAttribute("position"),c=this.skyDomeColors.array;for(let h=0;h<l.count;h++){const u=l.getY(h)/750,d=u<=0?0:Math.min(1,u/.45),p=d*d*(3-2*d);let g=a.r+(r.r-a.r)*p,v=a.g+(r.g-a.g)*p,f=a.b+(r.b-a.b)*p;if(s>.01){const m=Math.atan2(l.getZ(h),l.getX(h)),y=Math.pow(Math.max(0,Math.cos(m-n)*.5+.5),2.5),x=s*(1-p),E=.88+(1.24-.88)*y,k=.9+(.97-.9)*y,R=1.05+(.75-1.05)*y;g*=1+(E-1)*x,v*=1+(k-1)*x,f*=1+(R-1)*x}c[h*3]=g,c[h*3+1]=v,c[h*3+2]=f}this.skyDomeColors.needsUpdate=!0}resize(){const{width:t,height:e}=Vf(window);if(this.viewportW=t,this.viewportH=e,this.gl.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.rt!==null&&(this.rt.dispose(),this.rt=this.buildRT(t,e)),this.refractionRT!==null&&(this.refractionRT.dispose(),this.refractionRT=this.buildRefractionRT(t,e),this.publishRefractionTarget()),this.planarReflection!==null){const n=this.gl.getPixelRatio();this.planarReflection.resize(Math.max(1,Math.round(t*n)),Math.max(1,Math.round(e*n))),this.publishReflectionTarget()}if(this.bloom!==null){const n=this.gl.getPixelRatio();this.bloom.setSize(Math.max(1,Math.round(t*n/4)),Math.max(1,Math.round(e*n/4)))}if(this.ssao!==null){const n=this.gl.getPixelRatio();this.ssao.setSize(Math.max(1,Math.round(t*n/2)),Math.max(1,Math.round(e*n/2)))}}markShadowDirty(){this.gl.shadowMap.needsUpdate=!0}setWaterRefractionSink(t){this.waterRefractionSink=t,this.publishRefractionTarget()}setWaterReflectionSink(t){this.waterReflectionSink=t,this.publishReflectionTarget()}setGodRays(t){if(t===null||t.quality==="off"){this.rt!==null&&(this.rt.dispose(),this.rt=null),this.refractionRT!==null&&(this.refractionRT.dispose(),this.refractionRT=null),this.publishRefractionTarget(),this.planarReflection!==null&&(this.planarReflection.dispose(),this.planarReflection=null),this.publishReflectionTarget(),this.bloom!==null&&(this.bloom.dispose(),this.bloom=null),this.ssao!==null&&(this.ssao.dispose(),this.ssao=null),this.god=null;return}if(this.rt===null&&(this.rt=this.buildRT(this.viewportW,this.viewportH)),this.refractionRT===null&&(this.refractionRT=this.buildRefractionRT(this.viewportW,this.viewportH),this.publishRefractionTarget()),this.planarReflection===null){const e=this.gl.getPixelRatio();this.planarReflection=new bS(Math.max(1,Math.round(this.viewportW*e)),Math.max(1,Math.round(this.viewportH*e))),this.publishReflectionTarget()}if(this.bloom===null){const e=this.gl.getPixelRatio(),n=this.viewportW,s=this.viewportH;this.bloom=new CM(Math.max(1,Math.round(n*e/4)),Math.max(1,Math.round(s*e/4)))}this.god=t}render(){if(this.skyDome.position.copy(this.camera.position),this.god===null||this.rt===null||this.bloom===null){this.gl.render(this.scene,this.camera);return}if(this.planarReflection!==null&&this.camera.position.y>this.planarReflection.planeY+.05?(this.planarReflection.render(this.gl,this.scene,this.camera,n=>this.skyDome.position.copy(n.position),()=>this.skyDome.position.copy(this.camera.position)),this.publishReflectionTarget()):this.planarReflection!==null&&this.publishReflectionTarget(!1),this.refractionRT!==null){const n=this.camera.layers.mask;this.camera.layers.disable(oa),this.gl.setRenderTarget(this.refractionRT),this.gl.clear(),this.gl.render(this.scene,this.camera),this.camera.layers.mask=n}this.gl.setRenderTarget(this.rt),this.gl.clear(),this.gl.render(this.scene,this.camera),this.bloom.render(this.gl,this.rt.texture),this.ssao!==null&&this.ssao.render(this.gl,this.rt.depthTexture,this.camera);const t=this.god.quality==="high"?this.godHigh:this.godStd,e=t.material.uniforms;e.tColor.value=this.rt.texture,e.tDepth.value=this.rt.depthTexture,e.tBloom.value=this.bloom.texture,e.uSunUV.value.copy(this.god.sunUV),e.uIntensity.value=this.god.intensity,e.uSunColor.value.copy(this.god.sunColor),e.uBloom.value=this.god.quality==="high"?.68:.5,this.ssao!==null?(e.tAO.value=this.ssao.texture,e.uAO.value=this.god.quality==="high"?.55:.4):(e.tAO.value=null,e.uAO.value=0),t.render(this.gl)}renderOverlay(t,e){this.gl.autoClear=!1,this.gl.clearDepth(),this.gl.render(t,e),this.gl.autoClear=!0}buildRT(t,e){const n=this.gl.getPixelRatio(),s=Math.max(1,Math.round(t*n)),o=Math.max(1,Math.round(e*n)),r=new ea(s,o);return r.type=mi,new wn(s,o,{type:gi,depthTexture:r,depthBuffer:!0,samples:4})}buildRefractionRT(t,e){const n=this.gl.getPixelRatio(),s=Math.max(1,Math.round(t*n)),o=Math.max(1,Math.round(e*n)),r=new ea(s,o,mi),a=new wn(s,o,{type:gi,depthTexture:r,depthBuffer:!0});return a.texture.magFilter=fe,a.texture.minFilter=fe,a.texture.generateMipmaps=!1,a}publishRefractionTarget(){if(this.waterRefractionSink){if(!this.refractionRT){this.waterRefractionSink(null,null,1,1);return}this.waterRefractionSink(this.refractionRT.texture,this.refractionRT.depthTexture,this.refractionRT.width,this.refractionRT.height)}}publishReflectionTarget(t=!0){if(this.waterReflectionSink){if(!this.planarReflection||!t){this.waterReflectionSink(null);return}this.waterReflectionSink(this.planarReflection.texture,this.planarReflection.textureMatrix)}}}function TS(i){return new Worker("/mineworld/assets/chunkGen.worker-CSpXbyWk.js",{name:i==null?void 0:i.name})}const Yu=()=>typeof performance<"u"?performance.now():Date.now();class sp{constructor(t,e="overworld"){_(this,"chunks",new Map);_(this,"pending",new Set);_(this,"pendingSince",new Map);_(this,"genFails",new Map);_(this,"workers",[]);_(this,"rr",0);_(this,"editHook",null);if(this.seed=t,this.dimension=e,typeof Worker<"u"){const n=typeof navigator<"u"&&navigator.hardwareConcurrency||4,s=Math.max(1,Math.min(4,n));for(let o=0;o<s;o++){const r=new TS;r.onmessage=a=>{var v;const{cx:l,cz:c,blocks:h,fluid:u,error:d}=a.data,p=this.key(l,c);if(this.pending.delete(p),this.pendingSince.delete(p),d){const f=(this.genFails.get(p)??0)+1;this.genFails.set(p,f),console.warn(`[chunkgen] 区块(${l},${c}) 生成失败 #${f}: ${d.split(`
`)[0]}`);return}if(this.genFails.delete(p),this.chunks.has(p)||!h||!u)return;const g=Bo.fromBuffers(h,u);(v=this.editHook)==null||v.call(this,l,c,g),g.dirty=!0,this.chunks.set(p,g)},r.onerror=a=>{console.error("[chunkgen worker] 致命错误(整个 worker 挂了，会拖慢加载):",a.message)},this.workers.push(r)}}}key(t,e){return`${t},${e}`}dispose(){for(const t of this.workers)t.terminate();this.workers.length=0,this.chunks.clear(),this.pending.clear(),this.pendingSince.clear(),this.genFails.clear(),this.editHook=null}hasChunk(t,e){return this.chunks.has(this.key(t,e))}request(t,e){const n=this.key(t,e);if(!(this.chunks.has(n)||this.pending.has(n))&&!((this.genFails.get(n)??0)>=3)){if(this.workers.length===0){this.getChunk(t,e);return}this.pending.add(n),this.pendingSince.set(n,Yu()),this.workers[this.rr].postMessage({cx:t,cz:e,seed:this.seed,dimension:this.dimension}),this.rr=(this.rr+1)%this.workers.length}}retryStuckGen(t=8e3){const e=Yu();for(const[n,s]of this.pendingSince)e-s>t&&(this.pending.delete(n),this.pendingSince.delete(n),console.warn(`[chunkgen] 区块 ${n} 生成 ${Math.round((e-s)/1e3)}s 未回(worker 丢消息?) → 重试`))}peek(t,e){return this.chunks.get(this.key(t,e))}evictBeyond(t,e,n){for(const s of[...this.chunks.keys()]){const o=s.indexOf(","),r=+s.slice(0,o),a=+s.slice(o+1);(Math.abs(r-t)>n||Math.abs(a-e)>n)&&this.chunks.delete(s)}}getChunk(t,e){var o;const n=this.key(t,e);let s=this.chunks.get(n);return s||(s=ip(t,e,this.seed,this.dimension),(o=this.editHook)==null||o.call(this,t,e,s),this.chunks.set(n,s),this.pending.delete(n)),s}getBlock(t,e,n){return e<0||e>=me?0:this.getChunk(jt(t),jt(n)).get(Ze(t),e,Ze(n))}setBlock(t,e,n,s){if(e<0||e>=me)return;const o=jt(t),r=jt(n),a=Ze(t),l=Ze(n),c=this.getChunk(o,r);c.set(a,e,l,s),s!==Wn&&c.setFluid(a,e,l,0),c.dirty=!0,this.markNeighborsDirty(o,r,a,l,8)}fluidByte(t,e,n){return e<0||e>=me?0:this.getChunk(jt(t),jt(n)).getFluid(Ze(t),e,Ze(n))}waterAmount(t,e,n){return this.getBlock(t,e,n)!==Wn?0:PM(this.fluidByte(t,e,n))}isWaterSource(t,e,n){return this.getBlock(t,e,n)===Wn&&DM(this.fluidByte(t,e,n))}isWaterFalling(t,e,n){return this.getBlock(t,e,n)===Wn&&LM(this.fluidByte(t,e,n))}setWater(t,e,n,s,o,r){if(e<0||e>=me)return;const a=jt(t),l=jt(n),c=Ze(t),h=Ze(n),u=this.getChunk(a,l);s<=0?(u.get(c,e,h)===Wn&&u.set(c,e,h,0),u.setFluid(c,e,h,0)):(u.set(c,e,h,Wn),u.setFluid(c,e,h,qf(s,o,r))),u.dirty=!0,this.markNeighborsDirty(a,l,c,h)}markNeighborsDirty(t,e,n,s,o=1){const r=n<o,a=n>15-o,l=s<o,c=s>15-o;r&&this.markDirty(t-1,e),a&&this.markDirty(t+1,e),l&&this.markDirty(t,e-1),c&&this.markDirty(t,e+1),r&&l&&this.markDirty(t-1,e-1),r&&c&&this.markDirty(t-1,e+1),a&&l&&this.markDirty(t+1,e-1),a&&c&&this.markDirty(t+1,e+1)}markDirty(t,e){const n=this.chunks.get(this.key(t,e));n&&(n.dirty=!0)}}function $u(i,t,e,n){let s=Math.floor(i.x),o=Math.floor(i.y),r=Math.floor(i.z);const a=Math.sign(t.x),l=Math.sign(t.y),c=Math.sign(t.z),h=t.x!==0?Math.abs(1/t.x):1/0,u=t.y!==0?Math.abs(1/t.y):1/0,d=t.z!==0?Math.abs(1/t.z):1/0,p=(y,x)=>x>0?Math.floor(y)+1-y:x<0?y-Math.floor(y):1/0;let g=t.x!==0?p(i.x,a)*h:1/0,v=t.y!==0?p(i.y,l)*u:1/0,f=t.z!==0?p(i.z,c)*d:1/0;if(n(s,o,r))return{x:s,y:o,z:r,nx:0,ny:0,nz:0};let m=0;for(let y=0;y<256;y++){let x=0,E=0,k=0;if(g<v&&g<f?(s+=a,m=g,g+=h,x=-a):v<f?(o+=l,m=v,v+=u,E=-l):(r+=c,m=f,f+=d,k=-c),m>e)break;if(n(s,o,r))return{x:s,y:o,z:r,nx:x,ny:E,nz:k}}return null}const AS=new Set([Ta,Ra]),Ku=new Set([Io,Ca]),Sl=4,RS=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Er=(i,t,e)=>`${i},${t},${e}`;function CS(i,t,e,n,s=Sl){const o=s+Sl,r=new Map,a=[];for(let c=t-o;c<=t+o;c++)for(let h=e-o;h<=e+o;h++)for(let u=n-o;u<=n+o;u++)AS.has(i(c,h,u))&&(r.set(Er(c,h,u),0),a.push({x:c,y:h,z:u}));for(let c=0;c<a.length;c++){const h=a[c],u=r.get(Er(h.x,h.y,h.z))??0;if(!(u>=Sl))for(const[d,p,g]of RS){const v=h.x+d,f=h.y+p,m=h.z+g;if(!Ku.has(i(v,f,m)))continue;const y=Er(v,f,m);r.has(y)||(r.set(y,u+1),a.push({x:v,y:f,z:m}))}}const l=[];for(let c=t-s;c<=t+s;c++)for(let h=e-s;h<=e+s;h++)for(let u=n-s;u<=n+s;u++)Ku.has(i(c,h,u))&&!r.has(Er(c,h,u))&&l.push({x:c,y:h,z:u});return l}const PS="msyp1lvd";function Js(i){return`/mineworld/${i}?v=${PS}`}const ju=new Map;function ac(i="classic"){const t=ju.get(i);if(t)return t;const e=i==="classic"?"textures/atlas_classic.png":"textures/atlas.png",n=new Qs().load(Js(e));return n.magFilter=le,n.minFilter=yc,n.generateMipmaps=!0,n.colorSpace=Qt,ju.set(i,n),n}function DS(){const i=new Qs().load(Js("textures/torch_block.png"));return i.magFilter=le,i.minFilter=le,i.generateMipmaps=!1,i.colorSpace=Qt,i}function LS(i){const t=new Qs,e=[];for(let n=0;n<i;n++){const s=t.load(Js(`textures/blocks/water_${n}.png`));s.magFilter=le,s.minFilter=yc,s.generateMipmaps=!0,s.colorSpace=Qt,s.wrapS=fi,s.wrapT=fi,e.push(s)}return e}const Ao={volume:70,lightingQuality:"standard",texturePack:"classic",renderDistance:6},lc="mineworld.settings",Ic=3,kS=["off","standard","high"];function op(i){const t=i??{},e=typeof t.volume=="number"&&isFinite(t.volume)?Math.max(0,Math.min(100,Math.round(t.volume))):Ao.volume;let n;typeof t.lightingQuality=="string"&&kS.includes(t.lightingQuality)?n=t.lightingQuality:typeof t.shaders=="boolean"?n=t.shaders?"high":"standard":n=Ao.lightingQuality;const s=t.texturePack==="cartoon"?"cartoon":"classic",o=typeof t.renderDistance=="number"&&isFinite(t.renderDistance)?Math.max(3,Math.min(12,Math.round(t.renderDistance))):Ao.renderDistance;return{volume:e,lightingQuality:n,texturePack:s,renderDistance:o}}function IS(i){const t=op(i);return(i??{}).textureStyleVersion===Ic?t:{...t,texturePack:"classic"}}function rp(){try{const i=localStorage.getItem(lc);if(!i)return{...Ao};const t=JSON.parse(i),e=IS(t);return localStorage.setItem(lc,JSON.stringify({...e,textureStyleVersion:Ic})),e}catch{return{...Ao}}}function US(i){try{localStorage.setItem(lc,JSON.stringify({...op(i),textureStyleVersion:Ic}))}catch{}}const ap=15,lp=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function NS(i,t,e,n){const s=n??(()=>0),o=new Uint8Array(i*t*i),r=(l,c,h)=>l+h*i+c*i*i,a=[];for(let l=0;l<i;l++)for(let c=0;c<i;c++){let h=ap;for(let u=t-1;u>=0&&!e(c,u,l);u--){h=Math.max(0,h-s(c,u,l));const d=r(c,u,l);o[d]=h,h>0&&a.push(d)}}for(let l=0;l<a.length;l++){const c=a[l],h=o[c];if(h<=1)continue;const u=c/(i*i)|0,d=c-u*i*i,p=d/i|0,g=d-p*i;for(const[v,f,m]of lp){const y=g+v,x=u+f,E=p+m;if(y<0||y>=i||x<0||x>=t||E<0||E>=i||e(y,x,E))continue;const k=h-1-s(y,x,E);if(k<=0)continue;const R=r(y,x,E);o[R]>=k||(o[R]=k,a.push(R))}}return o}function FS(i,t,e,n,s){const o=s??(()=>0),r=new Uint8Array(i*t*i),a=(c,h,u)=>c+u*i+h*i*i,l=[];for(let c=0;c<t;c++)for(let h=0;h<i;h++)for(let u=0;u<i;u++){const d=e(u,c,h);if(d>0){const p=a(u,c,h);d>r[p]&&(r[p]=Math.min(ap,d),l.push(p))}}for(let c=0;c<l.length;c++){const h=l[c],u=r[h];if(u<=1)continue;const d=h/(i*i)|0,p=h-d*i*i,g=p/i|0,v=p-g*i;for(const[f,m,y]of lp){const x=v+f,E=d+m,k=g+y;if(x<0||x>=i||E<0||E>=t||k<0||k>=i||n(x,E,k))continue;const R=u-1-o(x,E,k);if(R<=0)continue;const C=a(x,E,k);r[C]>=R||(r[C]=R,l.push(C))}}return r}const vn=4,Tr=10,OS=16,Zu=[.6,.6,1,.5,.8,.8],ri=[{n:[1,0,0],o:[1,0,0],c:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],uv:[[0,0],[0,1],[1,1],[1,0]]},{n:[-1,0,0],o:[-1,0,0],c:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,1,0],o:[0,1,0],c:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],uv:[[0,0],[0,1],[1,1],[1,0]]},{n:[0,-1,0],o:[0,-1,0],c:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,1],o:[0,0,1],c:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,-1],o:[0,0,-1],c:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],uv:[[0,0],[0,1],[1,1],[1,0]]}],BS=[.5,.7,.86,1];function zS(i,t,e){return i&&t?0:3-(Number(i)+Number(t)+Number(e))}const cp=[{u:[0,1,0],v:[0,0,1],ui:1,vi:2},{u:[0,1,0],v:[0,0,1],ui:1,vi:2},{u:[1,0,0],v:[0,0,1],ui:0,vi:2},{u:[1,0,0],v:[0,0,1],ui:0,vi:2},{u:[1,0,0],v:[0,1,0],ui:0,vi:1},{u:[1,0,0],v:[0,1,0],ui:0,vi:1}];function HS(i,t,e,n,s,o){const r=ri[s],a=cp[s],l=r.c[o],c=l[a.ui]===1?1:-1,h=l[a.vi]===1?1:-1,u=t+r.n[0],d=e+r.n[1],p=n+r.n[2],g=i(u+c*a.u[0],d+c*a.u[1],p+c*a.u[2]),v=i(u+h*a.v[0],d+h*a.v[1],p+h*a.v[2]),f=i(u+c*a.u[0]+h*a.v[0],d+c*a.u[1]+h*a.v[1],p+c*a.u[2]+h*a.v[2]);return BS[zS(g,v,f)]}const ho=()=>({P:[],U:[],C:[],I:[],L:[],UW:[],T:[],SH:[],SW:[]}),uo=i=>{const t=i.P.length/3;return{positions:new Float32Array(i.P),uvs:new Float32Array(i.U),colors:new Float32Array(i.C),indices:t<=65535?new Uint16Array(i.I):new Uint32Array(i.I),light:new Float32Array(i.L),underwater:i.UW.length?new Float32Array(i.UW):void 0,top:i.T.length?new Float32Array(i.T):void 0,shore:i.SH.length?new Float32Array(i.SH):void 0,sway:i.SW.length?new Float32Array(i.SW):void 0}};function GS(i,t,e,n){const s=i*bt,o=t*bt,r=ho(),a=ho(),l=ho(),c=ho(),h=ho(),u=.01/(OS*vn),d=1/vn-2*u,p=1/Tr-2*u,g=(O,z,q)=>ps(e(O,z,q)),v=8,f=bt+2*v,m=(O,z,q)=>{const Q=e(s+O-v,z,o+q-v);return yn(Q)||Gu(Q)?1:0},y=NS(f,me,(O,z,q)=>g(s+O-v,z,o+q-v),m),x=FS(f,me,(O,z,q)=>KM(e(s+O-v,z,o+q-v)),(O,z,q)=>g(s+O-v,z,o+q-v),m),E=(O,z,q)=>z>=me?15:z<0?0:y[O+v+(q+v)*f+z*f*f],k=(O,z,q)=>z>=me||z<0?0:x[O+v+(q+v)*f+z*f*f],R=(O,z,q)=>{let Q=0;for(let D=z;D<me&&Q<8&&n(O,D,q)>0;D++)Q++;return Q},C=(O,z,q,Q,D)=>{const U=cp[Q],J=ri[Q].c[D],et=J[U.ui]===1?1:-1,xt=J[U.vi]===1?1:-1,ct=O+et*U.u[0],ht=z+et*U.u[1],A=q+et*U.u[2],St=O+xt*U.v[0],Rt=z+xt*U.v[1],Ft=q+xt*U.v[2],dt=ct+xt*U.v[0],kt=ht+xt*U.v[1],At=A+xt*U.v[2],Dt=g(s+ct,ht,o+A),te=g(s+St,Rt,o+Ft),T=g(s+dt,kt,o+At);let M=E(O,z,q),V=k(O,z,q),nt=1;return Dt||(M+=E(ct,ht,A),V+=k(ct,ht,A),nt++),te||(M+=E(St,Rt,Ft),V+=k(St,Rt,Ft),nt++),!(Dt&&te)&&!T&&(M+=E(dt,kt,At),V+=k(dt,kt,At),nt++),[M/nt/15,V/nt/15]},F=(O,z,q,Q,D,U)=>{const J=ri[U],et=xl(D,U),xt=et%vn/vn+u,ct=1-(Math.floor(et/vn)+1)/Tr+u,ht=Zu[U],A=z+J.o[0],St=q+J.o[1],Rt=Q+J.o[2],Ft=O===r?R(s+A,St,o+Rt):0,dt=O.P.length/3,kt=[0,0,0,0];for(let At=0;At<4;At++){const Dt=J.c[At];kt[At]=HS(g,s+z,q,o+Q,U,At);const te=ht*kt[At],[T,M]=C(A,St,Rt,U,At);O.P.push(z+Dt[0],q+Dt[1],Q+Dt[2]),O.U.push(xt+J.uv[At][0]*d,ct+J.uv[At][1]*p),O.C.push(te,te,te),O.L.push(T,M),O===r&&O.UW.push(Ft)}kt[0]+kt[2]>kt[1]+kt[3]?O.I.push(dt,dt+1,dt+2,dt,dt+2,dt+3):O.I.push(dt+1,dt+2,dt+3,dt+1,dt+3,dt),O===l&&O.SW.push(1,1,1,1)},b=(O,z,q)=>{const Q=O+.5,D=z+.5,U=.28,J=.92,et=[[[Q-U,q,D],[Q+U,q,D],[Q+U,q+J,D],[Q-U,q+J,D]],[[Q,q,D-U],[Q,q,D+U],[Q,q+J,D+U],[Q,q+J,D-U]]],xt=[[0,0],[1,0],[1,1],[0,1]];for(const ct of et){const ht=h.P.length/3;for(let A=0;A<4;A++)h.P.push(ct[A][0],ct[A][1],ct[A][2]),h.U.push(xt[A][0],xt[A][1]),h.C.push(1,1,1);h.I.push(ht,ht+1,ht+2,ht,ht+2,ht+3)}},S=(O,z,q,Q,D)=>{const U=Q%vn/vn+u,J=U+d,et=1-(Math.floor(Q/vn)+1)/Tr+u,xt=et+p,ct=E(O,z,q)/15,ht=k(O,z,q)/15,A=.9,St=O+.5,Rt=q+.5,Ft=.5,dt=[[St-Ft,Rt-Ft,St+Ft,Rt+Ft],[St-Ft,Rt+Ft,St+Ft,Rt-Ft]];for(const[kt,At,Dt,te]of dt){const T=l.P.length/3;l.P.push(kt,z,At,Dt,z,te,Dt,z+D,te,kt,z+D,At),l.U.push(U,et,J,et,J,xt,U,xt),l.C.push(A,A,A,A,A,A,A,A,A,A,A,A),l.L.push(ct,ht,ct,ht,ct,ht,ct,ht),l.SW.push(0,0,1,1),l.I.push(T,T+1,T+2,T,T+2,T+3)}},P=(O,z,q,Q)=>{const D=Q%vn/vn+u,U=D+d,J=1-(Math.floor(Q/vn)+1)/Tr+u,et=J+p,xt=E(O,z,q)/15,ct=k(O,z,q)/15,ht=1,A=z+.06,St=l.P.length/3;l.P.push(O,A,q,O,A,q+1,O+1,A,q+1,O+1,A,q),l.U.push(D,J,D,et,U,et,U,J),l.C.push(ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht),l.L.push(xt,ct,xt,ct,xt,ct,xt,ct),l.SW.push(0,0,0,0),l.I.push(St,St+1,St+2,St,St+2,St+3)};let X=1;const W=(O,z,q)=>e(O,z,q)===Ls,$=(O,z,q)=>{if(n(O,z,q)===0&&!W(O,z,q))return 0;let Q=1;for(let D=z+1;Q<7&&D<me&&n(O,D,q)>0;D++)Q++;for(let D=z-1;Q<7&&D>=0&&n(O,D,q)>0;D--)Q++;return Q},Z=(O,z,q)=>($(O-1,z,q-1)+$(O,z,q-1)+$(O-1,z,q)+$(O,z,q))/4,j=(O,z,q)=>{const Q=(U,J)=>n(U,z,J)>0||W(U,z,J);return 1-(Number(Q(O-1,q-1))+Number(Q(O,q-1))+Number(Q(O-1,q))+Number(Q(O,q)))/4},it=(O,z,q,Q,D)=>{const U=ri[Q],J=Zu[Q],et=E(O+U.o[0],z+U.o[1],q+U.o[2])/15,xt=k(O+U.o[0],z+U.o[1],q+U.o[2])/15,ct=c.P.length/3,ht=Q===2;for(let A=0;A<4;A++){const St=U.c[A],Rt=z+D[A];c.P.push(O+St[0],Rt,q+St[2]);const Ft=s+O+St[0],dt=o+q+St[2];Q===2||Q===3?c.U.push(Ft,dt):Q===0||Q===1?c.U.push(dt,Rt):c.U.push(Ft,Rt),c.C.push(J,J,J),c.L.push(et,xt);const kt=ht||D[A]>.01?X:0;c.T.push((kt>0?1:-1)*Z(Ft,z,dt)),c.SH.push(j(Ft,z,dt))}c.I.push(ct,ct+1,ct+2,ct,ct+2,ct+3)},Y=(O,z)=>{let q=0,Q=0;for(const[D,U]of z){const J=n(D,O,U);if(n(D,O+1,U)>0)return 1;if(J>0){const et=J/9;et>=.8?(q+=et*10,Q+=10):(q+=et,Q+=1)}else be(e(D,O,U))||(Q+=1)}return Q>0?q/Q:.5};for(let O=0;O<me;O++)for(let z=0;z<bt;z++)for(let q=0;q<bt;q++){const Q=e(s+q,O,o+z);if(ps(Q)&&Q!==Ls)for(let D=0;D<6;D++){const U=ri[D];ps(e(s+q+U.o[0],O+U.o[1],o+z+U.o[2]))||F(r,q,O,z,Q,D)}else if(Gu(Q))for(let D=0;D<6;D++){const U=ri[D];ps(e(s+q+U.o[0],O+U.o[1],o+z+U.o[2]))||F(l,q,O,z,Q,D)}else if(yn(Q)){const D=s+q,U=o+z;X=n(D,O+1,U)>0?0:1;const J=Y(O,[[D,U],[D-1,U],[D,U-1],[D-1,U-1]]),et=Y(O,[[D,U],[D-1,U],[D,U+1],[D-1,U+1]]),xt=Y(O,[[D,U],[D+1,U],[D,U+1],[D+1,U+1]]),ct=Y(O,[[D,U],[D+1,U],[D,U-1],[D+1,U-1]]);n(D,O+1,U)===0&&it(q,O,z,Hn.PosY,[J,et,xt,ct]),e(D,O-1,U)===0&&it(q,O,z,Hn.NegY,[0,0,0,0]);const ht=(A,St,Rt,Ft)=>{e(D+St,O,U+Rt)===0&&it(q,O,z,A,Ft)};ht(Hn.PosX,1,0,[0,ct,xt,0]),ht(Hn.NegX,-1,0,[0,0,et,J]),ht(Hn.PosZ,0,1,[0,0,xt,et]),ht(Hn.NegZ,0,-1,[0,J,ct,0])}else if(Q===Ds)b(q,z,O);else if(Oi(Q))Q===Lc?P(q,O,z,xl(Q,Hn.PosY)):S(q,O,z,xl(Q,Hn.PosY),Q===Zf?1.45:.82);else if(Q===Ls)for(let D=0;D<6;D++){const U=ri[D];ps(e(s+q+U.o[0],O+U.o[1],o+z+U.o[2]))||F(a,q,O,z,Q,D)}else if(Q===ra)for(let D=0;D<6;D++){const U=ri[D],J=e(s+q+U.o[0],O+U.o[1],o+z+U.o[2]);ps(J)||J===ra||F(r,q,O,z,Q,D)}}const gt=new Uint8Array(4*48*4);for(let O=0;O<48;O++)for(let z=0;z<4;z++)for(let q=0;q<4;q++){let Q=0,D=0;for(let U=0;U<4;U++){const J=(O*4+U)*f*f;for(let et=0;et<4;et++){const xt=J+(z*4+et+v)*f+v+q*4;for(let ct=0;ct<4;ct++){const ht=y[xt+ct];ht>Q&&(Q=ht);const A=x[xt+ct];A>D&&(D=A)}}}gt[q+z*4+O*16]=Q<<4|D}return{opaque:uo(r),ice:uo(a),cutout:uo(l),water:uo(c),torch:uo(h),light3d:gt}}function VS(i,t,e){return GS(t,e,(n,s,o)=>i.getBlock(n,s,o),(n,s,o)=>i.waterAmount(n,s,o))}function WS(i){return new Worker("/mineworld/assets/meshGen.worker-BNKx1dly.js",{name:i==null?void 0:i.name})}const XS=.15,qS=24*24;function YS(i,t,e,n,s,o,r=XS,a=qS){const l=i-e,c=t-n,h=l*l+c*c;return h<=a?!0:(l*s+c*o)/Math.sqrt(h)>=r}const $S=-.2,KS=2.25;function jS(i,t,e,n,s=$S,o=KS){const r=i*i+t*t;return r<=o?!0:(i*e+t*n)/Math.sqrt(r)>=s}const qe=24e3,ZS=1e3,ms=[{t:0,top:[.36,.48,.66],hor:[1,.62,.36],tint:[.72,.64,.62]},{t:1800,top:[.3,.52,.79],hor:[.81,.9,.97],tint:[1,1,1]},{t:11e3,top:[.3,.52,.79],hor:[.81,.9,.97],tint:[1,1,1]},{t:12200,top:[.24,.34,.55],hor:[1,.5,.24],tint:[.86,.62,.5]},{t:13600,top:[.05,.07,.16],hor:[.09,.12,.24],tint:[.3,.34,.5]},{t:22e3,top:[.05,.07,.16],hor:[.09,.12,.24],tint:[.3,.34,.5]},{t:23200,top:[.36,.48,.66],hor:[1,.62,.36],tint:[.72,.64,.62]}],wl=(i,t,e)=>i+(t-i)*e,bl=(i,t,e)=>[wl(i[0],t[0],e),wl(i[1],t[1],e),wl(i[2],t[2],e)];function hp(i){return(i%qe+qe)%qe}function up(i){const e=(hp(i)-6e3)/qe*Math.PI*2;return Math.max(0,Math.min(1,.5-2*Math.cos(e)))*11}const QS={skyTop:[.18,.05,.05],skyHorizon:[.34,.09,.07],worldTint:[.62,.32,.28],light:.3,isNight:!0};function Yr(i,t="overworld"){if(t==="nether")return QS;const e=hp(i);let n=ms[0],s={...ms[0],t:qe};for(let a=0;a<ms.length;a++){const l=ms[a],c=ms[a+1]??{...ms[0],t:qe};if(e>=l.t&&e<c.t){n=l,s=c;break}}const o=s.t===n.t?0:(e-n.t)/(s.t-n.t),r=bl(n.tint,s.tint,o);return{skyTop:bl(n.top,s.top,o),skyHorizon:bl(n.hor,s.hor,o),worldTint:r,light:(r[0]+r[1]+r[2])/3,isNight:e>=13e3&&e<23e3}}const dp=64,$r=256,bs=i=>i*i*(3-2*i),Ar=i=>Math.max(0,Math.min(1,i)),Rn=Math.PI*2,Es=(i,t)=>{let e=Math.imul(i^2654435769,2246822507)^Math.imul(t^3266489909,668265261);return e^=e>>>15,e=Math.imul(e,2246822507),e^=e>>>13,(e>>>0)/4294967295},ci=(i,t)=>(i%t+t)%t,fp=(i,t,e)=>{if(!Number.isInteger(i)||i<t||i&i-1)throw new Error(`${e} size must be a power of two >= ${t}`)},yo=(i,t,e,n)=>{const s=i/e*n,o=t/e*n,r=Math.floor(s),a=Math.floor(o),l=bs(s-r),c=bs(o-a),h=ci(r,n),u=ci(r+1,n),d=ci(a,n),p=ci(a+1,n),g=Es(h,d),v=Es(u,d),f=Es(h,p),m=Es(u,p);return(g+(v-g)*l)*(1-c)+(f+(m-f)*l)*c};function JS(i=dp){fp(i,16,"cloud-shadow");const t=new Float32Array(i*i);let e=1/0,n=-1/0;for(let a=0;a<i;a++)for(let l=0;l<i;l++){let c=0,h=0,u=1;for(const d of[2,4,8,16])c+=yo(l,a,i,d)*u,h+=u,u*=.52;c/=h,t[l+a*i]=c,e=Math.min(e,c),n=Math.max(n,c)}const s=Math.max(1e-6,n-e);for(let a=0;a<t.length;a++)t[a]=(t[a]-e)/s;const o=new Uint8Array(i*i*4),r=(a,l)=>t[ci(a,i)+ci(l,i)*i];for(let a=0;a<i;a++)for(let l=0;l<i;l++){const c=(r(l+1,a)-r(l-1,a))*3.8,h=(r(l,a+1)-r(l,a-1))*3.8,u=1/Math.hypot(c,1,h),d=-c*u,p=-h*u,g=r(l,a),v=Math.pow(Math.max(0,1-Math.abs(g*2-1)),2.5),f=(l+a*i)*4;o[f]=Math.round((d*.5+.5)*255),o[f+1]=Math.round((p*.5+.5)*255),o[f+2]=Math.round(g*255),o[f+3]=Math.round(v*255)}return o}const pp=(i,t,e=1)=>(i.name=t,i.wrapS=fi,i.wrapT=fi,i.magFilter=fe,i.minFilter=ai,i.generateMipmaps=!0,i.colorSpace=Pn,i.anisotropy=e,i.needsUpdate=!0,i);function t1(i=dp){const t=new Of(JS(i),i,i,dn);return pp(t,"mineworld-cloud-shadow-noise")}const Qu=[{kx:4,ky:1,amplitude:.18},{kx:1,ky:5,amplitude:.175},{kx:5,ky:3,amplitude:.16},{kx:-3,ky:6,amplitude:.155},{kx:7,ky:-2,amplitude:.142},{kx:2,ky:8,amplitude:.138},{kx:8,ky:5,amplitude:.123},{kx:-6,ky:9,amplitude:.12},{kx:11,ky:-5,amplitude:.104},{kx:5,ky:12,amplitude:.102},{kx:13,ky:8,amplitude:.086},{kx:-9,ky:14,amplitude:.083},{kx:16,ky:-7,amplitude:.071},{kx:7,ky:17,amplitude:.069},{kx:19,ky:11,amplitude:.058},{kx:-12,ky:20,amplitude:.057},{kx:23,ky:-10,amplitude:.047},{kx:11,ky:24,amplitude:.046},{kx:27,ky:16,amplitude:.038},{kx:-17,ky:28,amplitude:.037},{kx:32,ky:-15,amplitude:.03},{kx:16,ky:33,amplitude:.029},{kx:38,ky:21,amplitude:.023},{kx:-22,ky:39,amplitude:.022}],Ju=[[1,2],[-2,1],[3,1],[-1,3],[2,-3],[3,-2],[-3,-1],[1,-3]],e1=(i,t)=>Es(i.kx+t*37+101,i.ky-t*53-211)*Rn,n1=(i,t)=>Es(i.ky+t*61-307,i.kx+t*43+419)*Rn;function i1(i=$r){fp(i,$r,"directional-wave");const t=i*i,e=new Float32Array(t);let n=1/0,s=-1/0;for(let u=0;u<i;u++){const d=u/i;for(let p=0;p<i;p++){const g=p/i,v=Math.sin(Rn*(2*g+3*d)+1.71)*.012+Math.sin(Rn*(-3*g+2*d)+4.19)*.007+Math.sin(Rn*(5*g-d)+2.43)*.003,f=Math.sin(Rn*(-2*g+3*d)+.63)*.011+Math.sin(Rn*(3*g+4*d)+2.77)*.006+Math.sin(Rn*(g-5*d)+5.31)*.003;let m=0,y=0;for(let E=0;E<Qu.length;E++){const k=Qu[E],R=e1(k,E),C=E&1?-1:1,F=Rn*(k.kx*(g+v*C)+k.ky*(d+f*(.82-C*.18)))+R,b=Ju[E%Ju.length],S=Rn*(b[0]*g+b[1]*d)+n1(k,E),P=Math.sin(S)*.5+.5,X=.22+bs(P)*.78,W=Math.hypot(k.kx,k.ky),$=.035*(1-bs(Ar((W-18)/12))),Z=Math.sin(F)+Math.sin(F*2+R*.37)*.17+Math.sin(F*3-R*.19)*$;m+=Z*k.amplitude*X,y+=k.amplitude}const x=(yo(p+29,u-47,i,16)-.5)*.07+(yo(p-73,u+31,i,32)-.5)*.035;m=m/(y*.92)+x,e[p+u*i]=m,n=Math.min(n,m),s=Math.max(s,m)}}const o=Math.max(1e-6,s-n);for(let u=0;u<t;u++)e[u]=(e[u]-n)/o;const r=(u,d)=>e[ci(u,i)+ci(d,i)*i],a=4.8*(i/$r),l=new Float32Array(t);let c=1e-6;for(let u=0;u<i;u++)for(let d=0;d<i;d++){const p=r(d,u),g=p*4-r(d-1,u)-r(d+1,u)-r(d,u-1)-r(d,u+1),v=Math.max(0,g)*bs(Ar((p-.38)/.52));l[d+u*i]=v,c=Math.max(c,v)}const h=new Uint8Array(t*4);for(let u=0;u<i;u++)for(let d=0;d<i;d++){const p=(r(d+1,u)-r(d-1,u))*a,g=(r(d,u+1)-r(d,u-1))*a,v=1/Math.hypot(p,1,g),f=-p*v,m=-g*v,y=r(d,u),x=yo(d+83,u-19,i,16)*.58+yo(d-41,u+67,i,32)*.42,E=bs(Ar((x-.31)/.49)),k=Ar(l[d+u*i]/(c*.36)),R=Math.pow(k,.76)*E,C=(d+u*i)*4;h[C]=Math.round((f*.5+.5)*255),h[C+1]=Math.round((m*.5+.5)*255),h[C+2]=Math.round(y*255),h[C+3]=Math.round(R*255)}return h}function s1(i=$r){const t=new Of(i1(i),i,i,dn);return pp(t,"mineworld-directional-wave",8)}const td=()=>typeof performance<"u"?performance.now():Date.now(),o1=24,fo=2048,Rr=36,r1=110,ed=(i,t,e)=>{const n=Math.max(0,Math.abs(i)-.5),s=Math.max(0,Math.abs(t)-.5);return n*n+s*s>e},El="float mcBright(float lv){ float f = clamp(lv,0.0,15.0)/15.0; return f/(4.0-3.0*f); }",Tl="{ float skyLv = aLight.x*15.0; float blkLv = aLight.y*15.0; float bs = mcBright(max(skyLv - uSkyDarken, 0.0)); float bb = mcBright(blkLv); vSkyBright = bs; vBlockBright = bb; float drkFloor = (skyLv < 0.5) ? 0.03 : 0.04; vLF = max(bs, bb) * 0.96 + drkFloor; float sf = (bs + bb) > 0.0001 ? bs / (bs + bb) : 1.0; vTint = mix(vec3(1.0, 0.91, 0.78), uSkyTint, sf); }",nd=i=>{const t=Math.max(0,Math.min(15,i))/15;return t/(4-3*t)};class mp{constructor(t,e,n){_(this,"meshes",new Map);_(this,"lightGrids",new Map);_(this,"opaqueMat");_(this,"iceMat");_(this,"cutoutMat");_(this,"waterMat");_(this,"torchMat");_(this,"waterFrames");_(this,"waterTex");_(this,"cloudNoiseTex");_(this,"waterWaveTex");_(this,"waterAnimT",0);_(this,"waterFrame",0);_(this,"uSkyMul",{value:1});_(this,"uSkyTint",{value:new Mt(1,1,1)});_(this,"uSkyDarken",{value:0});_(this,"uShaders",{value:0});_(this,"uTime",{value:0});_(this,"uSkyRefl",{value:new Mt().setRGB(.55,.72,.95,Qt)});_(this,"uSkyTop",{value:new Mt().setRGB(.35,.55,.85,Qt)});_(this,"uSunDir",{value:new I(.4,.85,.3)});_(this,"uRefractionColor",{value:null});_(this,"uRefractionDepth",{value:null});_(this,"uRefractionSize",{value:new Ut(1,1)});_(this,"uHasRefraction",{value:0});_(this,"uReflectionColor",{value:null});_(this,"uReflectionMatrix",{value:new ce});_(this,"uHasReflection",{value:0});_(this,"sun",new Hf(16777215,0));_(this,"uShadowMap",{value:null});_(this,"uShadowMatrix",{value:new ce});_(this,"uShadowTexel",{value:new Ut(1/fo,1/fo)});_(this,"uShadowOn",{value:0});_(this,"uHq",{value:0});_(this,"uSunUp",{value:0});_(this,"leafDepthMat",null);_(this,"meshWorkers",[]);_(this,"meshRr",0);_(this,"meshPending",new Set);_(this,"meshPendingSince",new Map);_(this,"meshFails",new Map);_(this,"meshQueue",[]);_(this,"editKeys",new Set);_(this,"priorityQueue",[]);_(this,"fogCullR2",(r1/bt)**2);_(this,"lightingQuality",null);_(this,"sunEnabled",!0);_(this,"lastTint","");this.scene=t,this.world=e,this.opaqueMat=new pe({map:n,vertexColors:!0}),this.opaqueMat.shadowSide=Ie,this.iceMat=new pe({map:n,vertexColors:!0}),this.iceMat.shadowSide=Ie,this.cutoutMat=new pe({map:n,vertexColors:!0,alphaTest:.5,side:He}),this.waterFrames=LS(o1),this.waterTex=this.waterFrames[0].clone(),this.waterTex.needsUpdate=!0,this.cloudNoiseTex=t1(128),this.waterWaveTex=s1(),this.waterMat=new pe({map:this.waterTex,vertexColors:!0,transparent:!0,opacity:.78,depthWrite:!1,side:He}),this.waterMat.forceSinglePass=!0,this.installLight(this.opaqueMat,!1,!0),this.installLight(this.cutoutMat,!0,!1),this.installWaterShader(this.waterMat),this.installIceShader(this.iceMat),this.torchMat=new pe({map:DS(),transparent:!0,alphaTest:.5,side:He}),this.sun.castShadow=!1,this.sun.shadow.mapSize.set(fo,fo);const s=this.sun.shadow.camera;if(s.left=-Rr,s.right=Rr,s.top=Rr,s.bottom=-Rr,s.near=1,s.far=260,this.scene.add(this.sun),this.scene.add(this.sun.target),this.leafDepthMat=new If({depthPacking:mf,map:n,alphaTest:.5}),typeof Worker<"u"){const o=typeof navigator<"u"&&navigator.hardwareConcurrency||4,r=Math.max(1,Math.min(4,o-1));for(let a=0;a<r;a++){const l=new WS;l.onmessage=c=>{var v;const{cx:h,cz:u,mesh:d,error:p}=c.data,g=this.key(h,u);if(this.meshPending.has(g)){if(this.meshPending.delete(g),this.meshPendingSince.delete(g),p){const f=(this.meshFails.get(g)??0)+1;this.meshFails.set(g,f),console.warn(`[meshgen] 区块(${h},${u}) 网格化失败 #${f}: ${p.split(`
`)[0]}`);return}this.meshFails.delete(g),!(!d||!this.world.peek(h,u))&&(this.editKeys.has(g)?(this.priorityQueue.push({cx:h,cz:u,mesh:d}),(v=this.world.peek(h,u))!=null&&v.dirty||this.editKeys.delete(g)):this.meshQueue.push({cx:h,cz:u,mesh:d}))}},l.onerror=c=>{console.error("[meshgen worker] 致命错误(整个 worker 挂了，区块会停止网格化):",c.message)},this.meshWorkers.push(l)}}}installLight(t,e=!1,n=!1){t.onBeforeCompile=s=>{s.uniforms.uSkyTint=this.uSkyTint,s.uniforms.uSkyDarken=this.uSkyDarken,s.uniforms.uShadowMap=this.uShadowMap,s.uniforms.uShadowMatrix=this.uShadowMatrix,s.uniforms.uShadowTexel=this.uShadowTexel,s.uniforms.uShadowOn=this.uShadowOn,s.uniforms.uHq=this.uHq,s.uniforms.uSunUp=this.uSunUp,s.uniforms.uShaders=this.uShaders,s.uniforms.uSunDirW=this.uSunDir,s.uniforms.uTime=this.uTime,s.uniforms.uSurfaceNoise={value:this.cloudNoiseTex},s.uniforms.uWaterWaves={value:this.waterWaveTex};const o=e?`{ float sw = uShaders * 0.06 * aSway; vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz; float ph = wp.x*0.6 + wp.z*0.5 + wp.y*0.3; transformed.x += sin(ph + uTime*1.4) * sw; transformed.z += sin(ph*1.3 + uTime*1.1) * sw; transformed.y += sin(ph*0.8 + uTime*1.7) * sw * 0.5; }
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
varying float vSkyBright;
varying float vBlockBright;
varying vec3 vTint;
varying vec4 vShadowCoord;
varying float vSky;
varying vec3 vWp;
varying float vUnderwater;
`+El).replace("#include <begin_vertex>",`#include <begin_vertex>
`+o+Tl+`
vSky = aLight.x;
vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;
`+(n?`vUnderwater = aUnderwater;
`:`vUnderwater = 0.0;
`)+"vShadowCoord = uShadowMatrix * (modelMatrix * vec4(transformed, 1.0));"),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying float vLF;
varying float vSkyBright;
varying float vBlockBright;
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
vec3 mwAlbedo = diffuseColor.rgb;
#ifdef USE_COLOR
  float mwBakedShade = max(vColor.r, 0.001);
#else
  float mwBakedShade = 1.0;
#endif
vec3 mwBlockAlbedo = clamp(mwAlbedo / mwBakedShade, 0.0, 1.25);
vec3 mwView = normalize(cameraPosition - vWp);
vec3 mwGeomN = normalize(cross(dFdx(vWp), dFdy(vWp)));
mwGeomN *= sign(dot(mwGeomN, mwView));
float mwFaceShade = mwGeomN.y > 0.5 ? 1.0 : (mwGeomN.y < -0.5 ? 0.5 : (abs(mwGeomN.x) > 0.5 ? 0.6 : 0.8));
float mwVoxelAO = clamp(mwBakedShade / mwFaceShade, 0.5, 1.0);
float mwStyleShade = mix(1.0, mwFaceShade, 0.12);
vec3 mwShadeN = mwGeomN;
float mwTileIndex = -1.0;
#ifdef USE_MAP
  vec2 mwAtlasSize = vec2(64.0, 160.0);
  vec2 mwTexel = 1.0 / mwAtlasSize;
  vec2 mwTileSize = vec2(0.25, 0.1);
  vec2 mwTileBase = floor(vMapUv / mwTileSize) * mwTileSize;
  mwTileIndex = floor(vMapUv.x * 4.0) + floor((1.0 - vMapUv.y) * 10.0) * 4.0;
  vec2 mwUvMin = mwTileBase + mwTexel * 0.55;
  vec2 mwUvMax = mwTileBase + mwTileSize - mwTexel * 0.55;
  float mwHL = dot(texture2D(map, clamp(vMapUv - vec2(mwTexel.x, 0.0), mwUvMin, mwUvMax)).rgb, vec3(0.2126, 0.7152, 0.0722));
  float mwHR = dot(texture2D(map, clamp(vMapUv + vec2(mwTexel.x, 0.0), mwUvMin, mwUvMax)).rgb, vec3(0.2126, 0.7152, 0.0722));
  float mwHD = dot(texture2D(map, clamp(vMapUv - vec2(0.0, mwTexel.y), mwUvMin, mwUvMax)).rgb, vec3(0.2126, 0.7152, 0.0722));
  float mwHU = dot(texture2D(map, clamp(vMapUv + vec2(0.0, mwTexel.y), mwUvMin, mwUvMax)).rgb, vec3(0.2126, 0.7152, 0.0722));
  vec3 mwDp1 = dFdx(vWp); vec3 mwDp2 = dFdy(vWp);
  vec2 mwDuv1 = dFdx(vMapUv); vec2 mwDuv2 = dFdy(vMapUv);
  vec3 mwDp2Perp = cross(mwDp2, mwGeomN);
  vec3 mwDp1Perp = cross(mwGeomN, mwDp1);
  vec3 mwT = mwDp2Perp * mwDuv1.x + mwDp1Perp * mwDuv2.x;
  vec3 mwB = mwDp2Perp * mwDuv1.y + mwDp1Perp * mwDuv2.y;
  float mwInvBasis = inversesqrt(max(0.000001, max(dot(mwT, mwT), dot(mwB, mwB))));
  float mwBump = mix(0.24, 0.36, uHq);
  vec3 mwTangentN = normalize(vec3(-(mwHR - mwHL) * mwBump, -(mwHU - mwHD) * mwBump, 1.0));
  vec3 mwPixelN = normalize(mwT * mwInvBasis * mwTangentN.x + mwB * mwInvBasis * mwTangentN.y + mwGeomN * mwTangentN.z);
  float mwFootprint = max(length(dFdx(vMapUv) * mwAtlasSize), length(dFdy(vMapUv) * mwAtlasSize));
  float mwDetailVis = (1.0 - smoothstep(0.72, 2.0, mwFootprint)) * uShaders;
  mwShadeN = normalize(mix(mwGeomN, mwPixelN, mwDetailVis));
#endif
float shadowVis = 1.0;
if (uShadowOn > 0.5) {
  float sh = mwShadow(vShadowCoord);
  float gate = vSky * uSunUp;
  shadowVis = mix(1.0, sh, gate);
}
float openSun = vSky * uSunUp * uShaders;
if (uShaders < 0.5) {
  diffuseColor.rgb = mwAlbedo * vLF * vTint;
} else {
  float mwSkyFloor = vSky < 0.03 ? 0.03 : 0.04;
  float mwSkyEnergy = mix(0.88, 0.58, uSunUp);
  float mwHemiFloor = mix(0.58, 0.45, uSunUp);
  float mwHemi = mix(mwHemiFloor, 1.0, smoothstep(-0.55, 0.85, mwGeomN.y));
  vec3 mwSkyColor = mix(vec3(0.72, 0.82, 1.05), vTint, 0.58);
  float mwAmbientAmount = max(mwSkyFloor, vSkyBright * mwSkyEnergy) * mwHemi;
  vec3 mwAmbient = mwBlockAlbedo * mwStyleShade * mwSkyColor * mwAmbientAmount;
  mwAmbient *= mix(0.42, 1.0, mwVoxelAO);
  float mwShadowCool = openSun * (1.0 - shadowVis);
  mwAmbient *= mix(vec3(1.0), vec3(0.95, 0.98, 1.045), mwShadowCool * 0.65);
  float mwLocalAmount = vBlockBright * (1.0 - vSkyBright * 0.55);
  vec3 mwLocal = mwBlockAlbedo * mwStyleShade * vec3(1.12, 0.66, 0.3) * mwLocalAmount * 0.82;
  mwLocal *= mix(0.68, 1.0, mwVoxelAO);
  diffuseColor.rgb = mwAmbient + mwLocal;
float cloud = 0.0;
if (openSun > 0.003) {
  vec2 cuv = vWp.xz * 0.0055 + vec2(uTime * 0.0014, uTime * 0.0008);
  cloud = smoothstep(0.54, 0.78, texture2D(uSurfaceNoise, cuv).b);
}
float sunLit = openSun * shadowVis;
if (openSun > 0.003) {
  vec3 sunDir = normalize(uSunDirW);
  float nd = max(dot(mwShadeN, sunDir), 0.0);
  float sunHeight = smoothstep(0.05, 0.70, sunDir.y);
  vec3 sunTone = mix(vec3(1.20, 0.84, 0.52), vec3(1.12, 1.02, 0.86), sunHeight);
  float mwSunAlbedoLuma = dot(mwBlockAlbedo, vec3(0.2126, 0.7152, 0.0722));
  float mwSunAlbedoChroma = max(max(mwBlockAlbedo.r, mwBlockAlbedo.g), mwBlockAlbedo.b) - min(min(mwBlockAlbedo.r, mwBlockAlbedo.g), mwBlockAlbedo.b);
  float mwWhiteMask = smoothstep(0.72, 0.92, mwSunAlbedoLuma) * (1.0 - smoothstep(0.08, 0.20, mwSunAlbedoChroma));
  float mwSaturatedMask = smoothstep(0.18, 0.42, mwSunAlbedoChroma);
  float mwSunLuma = dot(sunTone, vec3(0.2126, 0.7152, 0.0722));
  float mwSunProtect = max(mwWhiteMask * 0.45, mwSaturatedMask * 0.35);
  sunTone = mix(sunTone, vec3(mwSunLuma), mwSunProtect);
  float sunCloud = 1.0 - cloud * mix(0.48, 0.62, uHq);
  float mwDirectStrength = mix(0.56, 0.60, uHq);
  vec3 mwDirect = mwBlockAlbedo * mwStyleShade * sunTone * nd * sunLit * sunCloud * mwDirectStrength;
  mwDirect *= mix(0.84, 1.0, mwVoxelAO);
  diffuseColor.rgb += mwDirect;
`+(e?`  float mwBackLight = pow(max(dot(-mwShadeN, sunDir), 0.0), 0.7);
  vec3 mwTransmission = mix(sunTone, vec3(0.52, 1.02, 0.34), 0.62);
  diffuseColor.rgb += mwBlockAlbedo * mwTransmission * mwBackLight * openSun * sunCloud * (0.35 + 0.65 * shadowVis) * mix(0.16, 0.24, uHq);
`:"")+`  float mwDiffusePeak = max(max(diffuseColor.r, diffuseColor.g), diffuseColor.b);
  diffuseColor.rgb *= min(1.0, 1.04 / max(mwDiffusePeak, 0.0001));
  float mwLuma = dot(mwBlockAlbedo, vec3(0.2126, 0.7152, 0.0722));
  float mwChroma = max(max(mwBlockAlbedo.r, mwBlockAlbedo.g), mwBlockAlbedo.b) - min(min(mwBlockAlbedo.r, mwBlockAlbedo.g), mwBlockAlbedo.b);
  float mwMineral = smoothstep(0.12, 0.72, mwLuma) * (1.0 - smoothstep(0.14, 0.42, mwChroma));
  float mwWet = smoothstep(0.08, 1.0, vUnderwater);
  float mwIron = 1.0 - step(0.5, abs(mwTileIndex - 33.0));
  float mwQuartz = 1.0 - step(0.5, abs(mwTileIndex - 34.0));
  float mwDiamond = 1.0 - step(0.5, abs(mwTileIndex - 36.0));
  float mwObsidian = 1.0 - step(0.5, abs(mwTileIndex - 18.0));
  float mwSpecialGloss = max(max(mwIron, mwDiamond), max(mwQuartz * 0.72, mwObsidian));
  vec3 mwHalf = normalize(sunDir + mwView);
  float mwSpecPower = mix(28.0, 64.0, uHq) * mix(0.72, 1.12, max(mwMineral, mwSpecialGloss));
  float mwSpec = pow(max(dot(mwShadeN, mwHalf), 0.0), mwSpecPower);
  mwSpec *= 0.014 + mwMineral * 0.075 + mwSpecialGloss * 0.12 + mwWet * 0.14;
  diffuseColor.rgb += sunTone * mwSpec * sunLit * sunCloud;
}
  float mwGlowstone = 1.0 - step(0.5, abs(mwTileIndex - 21.0));
  float mwLava = 1.0 - step(0.5, abs(mwTileIndex - 23.0));
  float mwPortal = 1.0 - step(0.5, abs(mwTileIndex - 25.0));
  diffuseColor.rgb += mwBlockAlbedo * (mwGlowstone * 0.72 + mwLava * 0.9 + mwPortal * 0.62) * mix(0.82, 1.0, uHq);
}
if (uShaders > 0.5 && vUnderwater > 0.05 && uSunUp > 0.01) {
  vec2 sunProjected = vWp.xz - normalize(uSunDirW).xz / max(normalize(uSunDirW).y, 0.25) * vWp.y;
  vec2 cUv0 = sunProjected * 0.145 + vec2(uTime * 0.011, -uTime * 0.008);
  vec2 cUv1 = vec2(cUv0.x * 0.76 - cUv0.y * 0.65, cUv0.x * 0.65 + cUv0.y * 0.76) * 1.65 + vec2(-uTime * 0.007, uTime * 0.012);
  float crest0 = texture2D(uWaterWaves, cUv0).a;
  float crest1 = texture2D(uWaterWaves, cUv1).a;
  float c0 = smoothstep(0.64, 0.92, crest0);
  float c1 = smoothstep(0.64, 0.92, crest1);
  float caustic = pow(c0 * c1, 1.35);
  float depthFade = exp(-vUnderwater * 0.38) * smoothstep(0.02, 0.25, vUnderwater);
  vec3 causticColor = mix(vec3(0.52, 0.76, 0.66), vec3(1.18, 1.08, 0.78), uSunUp);
  diffuseColor.rgb += diffuseColor.rgb * causticColor * caustic * depthFade * uSunUp * 0.1;
}`)}}updateSun(t,e,n,s){const o=t/qe*Math.PI*2;let r=Math.cos(o),a=Math.sin(o),l=.1;const c=Math.hypot(r,a,l)||1;r/=c,a/=c,l/=c;const h=Math.round(e),u=Math.round(n),d=Math.round(s);this.sun.target.position.set(h,u,d),this.sun.position.set(h+r*120,u+a*120,d+l*120),this.sun.target.updateMatrixWorld(),this.sun.updateMatrixWorld(),this.uSunUp.value=Math.max(0,Math.min(1,(a-.02)/.2));const p=this.sun.shadow.map;this.sun.castShadow&&p&&p.texture&&this.uSunUp.value>.001?(this.uShadowMap.value=p.texture,this.uShadowMatrix.value=this.sun.shadow.matrix,this.uShadowOn.value=1):this.uShadowOn.value=0}installWaterShader(t){t.onBeforeCompile=e=>{e.uniforms.uSkyMul=this.uSkyMul,e.uniforms.uSkyTint=this.uSkyTint,e.uniforms.uSkyDarken=this.uSkyDarken,e.uniforms.uShaders=this.uShaders,e.uniforms.uTime=this.uTime,e.uniforms.uSkyRefl=this.uSkyRefl,e.uniforms.uSkyTop=this.uSkyTop,e.uniforms.uSunDir=this.uSunDir,e.uniforms.uHq=this.uHq,e.uniforms.uSurfaceNoise={value:this.waterWaveTex},e.uniforms.uCloudNoise={value:this.cloudNoiseTex},e.uniforms.uRefractionColor=this.uRefractionColor,e.uniforms.uRefractionDepth=this.uRefractionDepth,e.uniforms.uRefractionSize=this.uRefractionSize,e.uniforms.uHasRefraction=this.uHasRefraction,e.uniforms.uReflectionColor=this.uReflectionColor,e.uniforms.uReflectionMatrix=this.uReflectionMatrix,e.uniforms.uHasReflection=this.uHasReflection,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
varying float vSkyBright;
varying float vBlockBright;
varying vec3 vTint;
varying vec3 vWPos;
varying vec3 vWaterBaseWPos;
varying float vWaterDepth;
varying float vSkyVis;
varying float vShore;
varying vec4 vReflectionCoord;
float mwWaveV(vec2 p, float t) {
  // 大波慢推轮廓，小波更快掠过。总峰值 < 0.1 格，满水面不会穿过上方方块。
  float a = sin(dot(p, vec2(0.84, 0.54)) * 0.36 + t * 0.50) * 0.058;
  float b = sin(dot(p, vec2(-0.48, 0.88)) * 0.70 - t * 0.68) * 0.026;
  float c = sin(dot(p, vec2(0.94, -0.34)) * 1.15 + t * 0.92) * 0.009;
  float d = sin(dot(p, vec2(-0.72, -0.69)) * 1.70 - t * 1.25) * 0.003 * uHq;
  return a + b + c + d;
}
${El}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${Tl}
vec3 mwWp0 = (modelMatrix * vec4(transformed, 1.0)).xyz;
vWaterBaseWPos = mwWp0;
// 岸边与浅水连续减弱，而不是用 step 切出突然静止的硬带；aTop<0 的侧壁/瀑布锚点保持不动。
float mwMovable = step(0.001, aTop);
float mwDepthGate = smoothstep(0.08, 0.70, abs(aTop));
float mwEdgeGate = mix(0.08, 1.0, pow(1.0 - clamp(aShore, 0.0, 1.0), 1.4));
transformed.y += mwWaveV(mwWp0.xz, uTime) * mwMovable * mwDepthGate * mwEdgeGate * uShaders;
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vWaterDepth = abs(aTop);
vSkyVis = aLight.x;
vShore = aShore;
// 平面倒影必须用未位移的基准水面投影；若再用 vWPos，几何波会把整幅倒影
// 二次推来推去，快速跑动/转头时就表现为同步闪烁。
vReflectionCoord = uReflectionMatrix * vec4(mwWp0, 1.0);`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
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
varying float vSkyBright;
varying float vBlockBright;
varying vec3 vTint;
varying vec3 vWPos;
varying vec3 vWaterBaseWPos;
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
}
float mwDepthMatch(vec2 uv, float centerDistance, float rejectDistance) {
  float sampleDistance = mwLinearDepth(texture2D(uRefractionDepth, uv).r);
  return 1.0 - smoothstep(rejectDistance * 0.45, rejectDistance, abs(sampleDistance - centerDistance));
}
`).replace("#include <map_fragment>",`#ifdef USE_MAP
if (uShaders < 0.5) diffuseColor *= texture2D(map, vMapUv);
#endif`).replace("#include <color_fragment>",`#include <color_fragment>
float mwFaceShade = clamp(max(max(diffuseColor.r, diffuseColor.g), diffuseColor.b), 0.48, 1.0);
if (uShaders < 0.5) {
  diffuseColor.rgb *= vLF * vTint;
} else if (uHasRefraction > 0.5) {
  vec3 toEye = cameraPosition - vWPos;
  float dist = length(toEye);
  vec3 V = toEye / max(dist, 0.0001);
  vec3 stableToEye = cameraPosition - vWaterBaseWPos;
  vec3 stableV = stableToEye / max(length(stableToEye), 0.0001);
  vec3 faceN = normalize(cross(dFdx(vWPos), dFdy(vWPos)));
  faceN *= sign(dot(faceN, V));
  float horiz = smoothstep(0.5, 0.92, abs(faceN.y));

  // 大中小四级波谱：A/B 保留到远景，C/D 按屏幕足迹淡出，避免细波小于一像素后闪烁。
  vec2 p = vWPos.xz;
  vec4 rippleA = texture2D(uSurfaceNoise, p * 0.028 + vec2(uTime * 0.006, -uTime * 0.0044));
  vec4 rippleB = texture2D(uSurfaceNoise, mwTurn(p) * 0.065 + vec2(-uTime * 0.012, uTime * 0.0085));
  vec4 rippleC = texture2D(uSurfaceNoise, mwTurn(p.yx) * 0.14 + vec2(uTime * 0.022, uTime * 0.017));
  vec4 rippleD = texture2D(uSurfaceNoise, mwTurn(p * 0.22) + vec2(-uTime * 0.036, uTime * 0.027));
  float footprint = max(length(dFdx(p)), length(dFdy(p)));
  float midVis = 1.0 - smoothstep(0.35, 1.2, footprint);
  float microVis = 1.0 - smoothstep(0.1, 0.42, footprint);
  float nearDetail = 1.0 - smoothstep(30.0, 100.0, dist);
  vec2 normalA = rippleA.rg * 2.0 - 1.0;
  vec2 normalB = rippleB.rg * 2.0 - 1.0;
  vec2 normalC = rippleC.rg * 2.0 - 1.0;
  vec2 normalD = rippleD.rg * 2.0 - 1.0;
  vec2 detailN = normalA * 0.09;
  detailN += normalB * 0.065 * mix(0.5, 1.0, midVis);
  detailN += normalC * 0.03 * midVis;
  detailN += normalD * 0.01 * microVis * nearDetail * uHq;
  detailN *= horiz;
  // faceN 已含顶点位移形成的大波。旧 mix(..., waveN, horiz) 在顶面把它完全覆盖，
  // 所以轮廓虽动、反射却像一张平膜；这里把几何梯度与纹理微法线真正相加。
  float faceSide = faceN.y < 0.0 ? -1.0 : 1.0;
  float signedY = faceSide * max(abs(faceN.y), 0.18);
  vec2 geomGradient = -faceN.xz / signedY;
  vec2 totalGradient = geomGradient - detailN;
  vec3 topN = normalize(vec3(-totalGradient.x, 1.0, -totalGradient.y)) * faceSide;
  vec3 N = normalize(mix(faceN, topN, horiz));
  vec2 macroDetailN = (normalA * 0.06 + normalB * 0.045 * mix(0.55, 1.0, midVis)) * horiz;
  vec2 macroGradient = geomGradient - macroDetailN;
  vec3 macroTopN = normalize(vec3(-macroGradient.x, 1.0, -macroGradient.y)) * faceSide;
  vec3 macroN = normalize(mix(faceN, macroTopN, horiz));
  // 屏幕空间折射/倒影必须使用 view-space 倾斜；直接拿世界 XZ 会在玩家转向时改变扰动方向。
  vec3 flatN = vec3(0.0, faceSide, 0.0);
  vec2 macroTilt = (viewMatrix * vec4(macroN - flatN, 0.0)).xy;
  vec2 fullTilt = (viewMatrix * vec4(N - flatN, 0.0)).xy;

  // 无水 HDR RT 的真实屏幕空间折射：用微法线轻推 UV，并用深度拒绝前景串色。
  vec2 screenUv = gl_FragCoord.xy / max(uRefractionSize, vec2(1.0));
  float screenEdge = min(min(screenUv.x, 1.0 - screenUv.x), min(screenUv.y, 1.0 - screenUv.y));
  // 屏幕边缘逐渐收回扰动/模糊，避免 ClampToEdge 把最后一列像素拉成固定竖色带。
  float screenEdgeFade = smoothstep(0.002, 0.022, screenEdge);
  vec2 maxRefraction = vec2(7.0) / max(uRefractionSize, vec2(1.0));
  vec2 refrPx = macroTilt * mix(22.0, 26.0, uHq) + (fullTilt - macroTilt) * mix(6.0, 8.0, uHq);
  vec2 refrOffset = clamp(refrPx, vec2(-7.0), vec2(7.0)) * screenEdgeFade / max(uRefractionSize, vec2(1.0));
  refrOffset = clamp(refrOffset, -maxRefraction, maxRefraction);
  vec2 provisionalUv = clamp(screenUv + refrOffset, vec2(0.004), vec2(0.996));
  float centerDepth = texture2D(uRefractionDepth, screenUv).r;
  float centerDistance = mwLinearDepth(centerDepth);
  float waterDistance = mwLinearDepth(gl_FragCoord.z);
  float centerThickness = max(0.0, centerDistance - waterDistance);
  float sceneDepth = texture2D(uRefractionDepth, provisionalUv).r;
  float sampledDistance = mwLinearDepth(sceneDepth);
  float depthDiscontinuity = abs(sampledDistance - centerDistance);
  float rejectDistance = clamp(centerThickness * 0.1, 0.45, 2.0);
  float depthValidity = 1.0 - smoothstep(0.25, rejectDistance, depthDiscontinuity);
  depthValidity *= step(gl_FragCoord.z + 0.00012, sceneDepth);
  vec2 refrUv = clamp(screenUv + refrOffset * depthValidity * depthValidity, vec2(0.004), vec2(0.996));
  // 吸收、模糊、泡沫必须由未扰动中心深度驱动。若跟着折射 UV 走，镜头移动时岸边会闪色/闪泡沫。
  float thickness = clamp(centerThickness, 0.0, 48.0);
  float blurDepth = min(thickness, max(vWaterDepth * 1.25, 1.0));
  float blurPx = clamp(0.35 + blurDepth * 0.12, 0.35, 2.5);
  vec2 blurStep = vec2(blurPx * screenEdgeFade) / max(uRefractionSize, vec2(1.0));
  vec2 refrXp = clamp(refrUv + vec2( blurStep.x, 0.0), vec2(0.0005), vec2(0.9995));
  vec2 refrXm = clamp(refrUv + vec2(-blurStep.x, 0.0), vec2(0.0005), vec2(0.9995));
  vec2 refrYp = clamp(refrUv + vec2(0.0,  blurStep.y), vec2(0.0005), vec2(0.9995));
  vec2 refrYm = clamp(refrUv + vec2(0.0, -blurStep.y), vec2(0.0005), vec2(0.9995));
  float tapReject = clamp(centerThickness * 0.08, 0.4, 1.8);
  float wxp = 0.15 * mwDepthMatch(refrXp, centerDistance, tapReject);
  float wxm = 0.15 * mwDepthMatch(refrXm, centerDistance, tapReject);
  float wyp = 0.15 * mwDepthMatch(refrYp, centerDistance, tapReject);
  float wym = 0.15 * mwDepthMatch(refrYm, centerDistance, tapReject);
  float weightSum = 0.4 + wxp + wxm + wyp + wym;
  vec3 opaqueBehind = texture2D(uRefractionColor, refrUv).rgb * 0.4;
  opaqueBehind += texture2D(uRefractionColor, refrXp).rgb * wxp;
  opaqueBehind += texture2D(uRefractionColor, refrXm).rgb * wxm;
  opaqueBehind += texture2D(uRefractionColor, refrYp).rgb * wyp;
  opaqueBehind += texture2D(uRefractionColor, refrYm).rgb * wym;
  opaqueBehind /= max(weightSum, 0.0001);

  // Beer-Lambert 吸收与水体散射：浅水保留清晰水底，深水逐渐转为青蓝而非一层透明贴纸。
  float verticalThickness = max(vWaterDepth, 0.75);
  float opticalThickness = max(0.55, min(thickness, mix(verticalThickness, thickness, 0.45)));
  vec3 transmittance = exp(-vec3(0.19, 0.088, 0.052) * opticalThickness);
  vec3 waterScatter = vec3(0.022, 0.09, 0.125) * mix(0.62, 1.0, vLF) * vTint;
  waterScatter *= mix(0.45, 1.0, uSkyMul);
  // 深水折射会被吸收成近似常量；用稳定 A/B 大波给散射留下极轻的明暗起伏，
  // 近景仍能看见水在运动，又不会把高频波重新变成闪点。
  float broadRelief = (rippleA.b - 0.5) * 0.65 + (rippleB.b - 0.5) * 0.35;
  waterScatter *= 1.0 + broadRelief * 0.07 * nearDetail * horiz;
  float scatterAmount = 1.0 - exp(-opticalThickness * 0.29);
  vec3 refracted = opaqueBehind * transmittance + waterScatter * scatterAmount;
  // 只让体色随真实光程缓慢增长；浅水约 1%，不再盖一层固定的有色玻璃膜。
  float bodyTint = (1.0 - exp(-opticalThickness * 0.2)) * 0.07;
  refracted = mix(refracted, waterScatter, bodyTint);

  // 天空与云层反射。用反射光线和虚拟云层求交，同一噪声也驱动地面云影，方向一致。
  vec3 R = reflect(-V, macroN);
  // Fresnel 能量按稳定的基准海平面计算；macroN 仍负责倒影方向/UV 的流动。
  // 若让移动法线同时控制 Fresnel，掠射角的五次方会把亮天空切成开关式碎白岛。
  float NoV = clamp(abs(stableV.y), 0.0, 1.0);
  float surfaceRoughness = clamp(0.1 + 0.045 * smoothstep(28.0, 110.0, dist), 0.1, 0.145);
  float skyHeight = smoothstep(-0.02, 0.72, R.y);
  vec3 reflectedSky = mix(uSkyRefl, uSkyTop, skyHeight);
  float cloudTravel = max(0.0, 232.0 - vWPos.y) / max(R.y, 0.08);
  vec2 cloudUv = (p + R.xz * min(cloudTravel, 1200.0)) * 0.0034 + vec2(uTime * 0.0014, uTime * 0.0008);
  float cloudA = texture2D(uCloudNoise, cloudUv).b;
  float cloudB = texture2D(uCloudNoise, cloudUv * 1.83 + vec2(0.31, -0.17)).b;
  float cloud = smoothstep(0.55, 0.79, cloudA * 0.68 + cloudB * 0.32) * smoothstep(0.01, 0.18, R.y);
  vec3 cloudColor = mix(uSkyRefl * 1.25, vec3(1.22, 1.16, 1.04), uSkyMul);
  float proceduralCloudMix = cloud * 0.38;

  // 海平面镜像相机只跟随连续 A/B 大波；C/D 不再让整幅倒影逐帧抖焦。
  vec2 reflectionBaseUv = vReflectionCoord.xy / max(vReflectionCoord.w, 0.0001);
  vec2 reflectionUv = reflectionBaseUv;
  vec2 reflectionPx = clamp(macroTilt * mix(25.0, 29.0, uHq), vec2(-4.0), vec2(4.0));
  reflectionUv += reflectionPx / max(uRefractionSize, vec2(1.0));
  if (uHasReflection > 0.5) {
    float reflectionBlur = 1.6 + surfaceRoughness * 4.0 + 3.0 * pow(1.0 - NoV, 1.5) + smoothstep(30.0, 110.0, dist);
    vec2 reflectionTexel = vec2(reflectionBlur) / max(uRefractionSize, vec2(1.0));
    vec2 reflectionMargin = reflectionTexel * 1.5 + vec2(0.002);
    // 投影与主相机共用同一视锥，波纹最多只把边缘推出 4px。直接把 9 taps
    // 收进有效范围，比在这里切回另一套程序反射更连续，也不会留下固定竖色带。
    vec2 reflectionSampleUv = clamp(reflectionUv, reflectionMargin, vec2(1.0) - reflectionMargin);
    vec3 planarReflection = texture2D(uReflectionColor, reflectionSampleUv).rgb * 0.25;
    planarReflection += texture2D(uReflectionColor, reflectionSampleUv + vec2( reflectionTexel.x, 0.0)).rgb * 0.125;
    planarReflection += texture2D(uReflectionColor, reflectionSampleUv + vec2(-reflectionTexel.x, 0.0)).rgb * 0.125;
    planarReflection += texture2D(uReflectionColor, reflectionSampleUv + vec2(0.0,  reflectionTexel.y)).rgb * 0.125;
    planarReflection += texture2D(uReflectionColor, reflectionSampleUv + vec2(0.0, -reflectionTexel.y)).rgb * 0.125;
    planarReflection += texture2D(uReflectionColor, reflectionSampleUv + reflectionTexel).rgb * 0.0625;
    planarReflection += texture2D(uReflectionColor, reflectionSampleUv - reflectionTexel).rgb * 0.0625;
    planarReflection += texture2D(uReflectionColor, reflectionSampleUv + vec2(reflectionTexel.x, -reflectionTexel.y)).rgb * 0.0625;
    planarReflection += texture2D(uReflectionColor, reflectionSampleUv + vec2(-reflectionTexel.x, reflectionTexel.y)).rgb * 0.0625;
    planarReflection /= vec3(1.0) + planarReflection * 0.16;
    // 镜像 RT 中仍包含太阳盘/光晕。若让它保留 HDR，再叠下面的稳定太阳光路，
    // 两套高光会在快速转头时交替跨过亮度阈值。倒影只负责天空与地形，
    // 唯一允许超过 1 的水面太阳能量由 macro road 输出。
    float planarPeak = max(max(planarReflection.r, planarReflection.g), planarReflection.b);
    planarReflection *= min(1.0, 0.9 / max(planarPeak, 0.0001));
    // 只按未扰动投影坐标做护边，避免转头时扰动本身让整条边界反复开关。
    // PlanarReflection 已多渲 8% 视野，正常屏幕范围会落在完整权重区。
    vec2 reflectionGuard = vec2(12.0) / max(uRefractionSize, vec2(1.0));
    vec2 reflectionFeather = vec2(8.0) / max(uRefractionSize, vec2(1.0));
    vec2 reflectionEdgeIn = smoothstep(reflectionGuard, reflectionGuard + reflectionFeather, reflectionBaseUv);
    vec2 reflectionEdgeOut = smoothstep(reflectionGuard, reflectionGuard + reflectionFeather, vec2(1.0) - reflectionBaseUv);
    float reflectionBlend = reflectionEdgeIn.x * reflectionEdgeIn.y * reflectionEdgeOut.x * reflectionEdgeOut.y;
    float planarMix = mix(0.52, 0.7, pow(1.0 - NoV, 2.0)) * reflectionBlend;
    // 平面 RT 已含真实云；程序云只补 RT 外/低混合区域，避免两套云影重叠滑动。
    reflectedSky = mix(reflectedSky, cloudColor, proceduralCloudMix * (1.0 - planarMix));
    reflectedSky = mix(reflectedSky, planarReflection, planarMix);
  } else {
    reflectedSky = mix(reflectedSky, cloudColor, proceduralCloudMix);
  }

  float fresnel = min(0.68, 0.02 + 0.98 * pow(1.0 - NoV, 5.0));
  float reflectionGate = horiz * vSkyVis * smoothstep(-0.08, 0.03, V.y);
  vec3 col = mix(refracted, reflectedSky * 0.94, fresnel * reflectionGate);

  // 只保留连续宽太阳光路。full-N/macro-N 窄瓣即使做 footprint AA，
  // 在快速转头/高 DPI 屏上仍会跨像素形成用户看到的持续闪烁。
  vec3 L = normalize(uSunDir);
  // 太阳盘已从 planar pass 排除；这里用固定海平面的宽瓣补回唯一的 HDR 光路。
  // 不再用移动法线驱动窄 GGX 亮岛，跑动和快速转头时高光连续而非逐片开关。
  float flatPath = pow(max(dot(reflect(-stableV, vec3(0.0, 1.0, 0.0)), L), 0.0), 14.0);
  float roadRaw = flatPath * 0.1;
  float stableRoad = 0.14 * (1.0 - exp(-roadRaw / 0.14));
  float specEnergy = 0.18 * (1.0 - exp(-stableRoad / 0.18));
  float sunHeight = clamp(L.y * 3.0, 0.0, 1.0);
  vec3 sunColor = mix(vec3(12.0, 4.5, 1.4), vec3(10.5, 9.8, 8.4), sunHeight);
  float sunVisible = smoothstep(0.005, 0.16, L.y) * uSkyMul * vSkyVis * horiz;
  col += sunColor * specEnergy * sunVisible;

  // 岸边只保留窄接触泡沫，不再把整片浅海刷成白边。
  float contact = (1.0 - smoothstep(0.055, 0.42, centerThickness)) * smoothstep(0.05, 0.4, vShore);
  float shore = smoothstep(0.12, 0.86, vShore) * horiz;
  float foamNoise = smoothstep(0.58, 0.88, rippleA.a * 0.55 + rippleC.a * 0.45);
  float foam = max(contact * 0.48, shore * (0.14 + foamNoise * 0.36)) * vSkyVis * mix(0.3, 1.0, uSkyMul);
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
      float sceneFog = smoothstep(fogNear, fogFar, vFogDepth);
      // 区块按水平径向距离剔除，而标准雾按 view-Z；侧边必须再叠径向 border fog 才不会露锯齿平台。
      float edgeFog = smoothstep(fogFar * 0.86, fogFar * 0.98, dist);
      atmosphere = max(sceneFog, edgeFog);
    #endif
  #else
    atmosphere = smoothstep(68.0, 96.0, dist);
  #endif
  col = mix(col, atmosphereColor, atmosphere);
  float below = smoothstep(0.02, 0.28, -V.y) * horiz;
  col = mix(col, col * vec3(0.54, 0.82, 1.08) + vec3(0.0, 0.016, 0.035), below * 0.34);
  diffuseColor.rgb = col;
  // 这里已经在 shader 内完成折射合成；alpha 必须为 1，否则 GPU 会把真实场景再混一次，
  // 造成用户截图里的“无色透明玻璃”与洗白水底。
  diffuseColor.a = 1.0;
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
varying float vSkyBright;
varying float vBlockBright;
varying vec3 vTint;
varying float vSkyVis;
varying vec3 vWPos;
varying vec4 vReflectionCoord;
${El}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${Tl}
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
varying float vSkyBright;
varying float vBlockBright;
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

  // 冰晶微法线只负责折射细节，Fresnel 能量按稳定平面计算；否则相机移动时
  // pow(1-NoV,5) 会把每个晶纹放大成开关式白斑。
  float NoV = clamp(abs(V.y), 0.0, 1.0);
  float opticalPath = 0.82 / max(NoV, 0.24);
  vec3 transmission = exp(-vec3(0.035, 0.018, 0.008) * opticalPath);
  vec3 iceScatter = vec3(0.055, 0.16, 0.27) * vLF * vTint;
  vec3 transmitted = behind * transmission + iceScatter * (vec3(1.0) - transmission);

  vec3 R = reflect(-V, N);
  vec3 reflected = mix(uSkyRefl, uSkyTop, smoothstep(0.0, 0.72, R.y));
  vec2 reflectionBaseUv = vReflectionCoord.xy / max(vReflectionCoord.w, 0.0001);
  if (uHasReflection > 0.5) {
    vec2 rBlur = vec2(3.5) / max(uRefractionSize, vec2(1.0));
    vec2 rMargin = rBlur * 1.5 + vec2(0.002);
    vec2 reflectionUv = clamp(reflectionBaseUv, rMargin, vec2(1.0) - rMargin);
    vec3 rp = texture2D(uReflectionColor, reflectionUv).rgb * 0.25;
    rp += texture2D(uReflectionColor, reflectionUv + vec2( rBlur.x, 0.0)).rgb * 0.125;
    rp += texture2D(uReflectionColor, reflectionUv + vec2(-rBlur.x, 0.0)).rgb * 0.125;
    rp += texture2D(uReflectionColor, reflectionUv + vec2(0.0,  rBlur.y)).rgb * 0.125;
    rp += texture2D(uReflectionColor, reflectionUv + vec2(0.0, -rBlur.y)).rgb * 0.125;
    rp += texture2D(uReflectionColor, reflectionUv + rBlur).rgb * 0.0625;
    rp += texture2D(uReflectionColor, reflectionUv - rBlur).rgb * 0.0625;
    rp += texture2D(uReflectionColor, reflectionUv + vec2(rBlur.x, -rBlur.y)).rgb * 0.0625;
    rp += texture2D(uReflectionColor, reflectionUv + vec2(-rBlur.x, rBlur.y)).rgb * 0.0625;
    float rpPeak = max(max(rp.r, rp.g), rp.b);
    rp *= min(1.0, 0.9 / max(rpPeak, 0.0001));
    vec2 rGuard = vec2(12.0) / max(uRefractionSize, vec2(1.0));
    vec2 rFeather = vec2(8.0) / max(uRefractionSize, vec2(1.0));
    vec2 rEdgeIn = smoothstep(rGuard, rGuard + rFeather, reflectionBaseUv);
    vec2 rEdgeOut = smoothstep(rGuard, rGuard + rFeather, vec2(1.0) - reflectionBaseUv);
    float reflectionBlend = rEdgeIn.x * rEdgeIn.y * rEdgeOut.x * rEdgeOut.y;
    reflected = mix(reflected, rp, 0.62 * reflectionBlend);
  }

  float fresnel = 0.04 + 0.96 * pow(1.0 - NoV, 5.0);
  vec3 col = mix(transmitted, reflected, fresnel * vSkyVis);
  float texLuma = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float frost = max(smoothstep(0.58, 0.96, texLuma) * 0.72, pow(max(iceWave0.a, iceWave1.a), 4.0) * 0.42);
  vec3 iceBody = vec3(0.38, 0.61, 0.84) * vLF * vTint * mix(0.88, 1.06, frost);
  // 保留大部分真实透射/倒影，只用一层薄霜把它与流动水区分开。
  col = mix(col, iceBody, 0.07 + frost * 0.12);
  col = mix(col, col * vec3(0.86, 0.96, 1.06) + vec3(0.018, 0.042, 0.07), 0.08);

  vec3 L = normalize(uSunDir);
  // 一条连续的宽冰面光路取代 pow(N·H,72) 针状亮片。后者在高 DPI/跑动时
  // 会逐像素跨过 Bloom 阈值；宽瓣仍然明亮，但不会一块一块闪烁。
  float icePath = pow(max(dot(reflect(-V, vec3(0.0, 1.0, 0.0)), L), 0.0), 18.0);
  float iceSpecRaw = icePath * 0.08;
  float iceSpec = 0.12 * (1.0 - exp(-iceSpecRaw / 0.12));
  vec3 sunColor = mix(vec3(11.0, 4.1, 1.3), vec3(9.5, 9.0, 8.0), clamp(L.y * 3.0, 0.0, 1.0));
  col += sunColor * iceSpec * uSunUp * vSkyVis;
  diffuseColor.rgb = col;
  diffuseColor.a = 1.0;
}`)}}setTint(t){const e=t.join();e!==this.lastTint&&(this.lastTint=e,this.uSkyTint.value.setRGB(t[0],t[1],t[2]))}setSkyMul(t){this.uSkyMul.value=t}setSkyDarken(t){this.uSkyDarken.value=t}setLightingQuality(t){var r;if(t===this.lightingQuality)return;this.lightingQuality=t,this.uShaders.value=t!=="off"?1:0;const e=t!=="off";this.waterMat.transparent=!e,this.waterMat.depthWrite=e,this.waterMat.opacity=e?1:.78,this.waterMat.needsUpdate=!0,this.sun.castShadow=t!=="off"&&this.sunEnabled,this.uHq.value=t==="high"?1:0;const n=t==="high"?4096:fo;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),(r=this.sun.shadow.map)==null||r.dispose(),this.sun.shadow.map=null,this.uShadowOn.value=0,this.uShadowTexel.value.set(1/n,1/n));const s=t==="high"?56:46,o=this.sun.shadow.camera;o.left!==-s&&(o.left=-s,o.right=s,o.top=s,o.bottom=-s,o.updateProjectionMatrix()),t==="off"&&(this.uShadowOn.value=0)}setSunEnabled(t){t!==this.sunEnabled&&(this.sunEnabled=t,this.sun.castShadow=t&&this.lightingQuality!==null&&this.lightingQuality!=="off",t||(this.uShadowOn.value=0))}setFogFar(t){this.fogCullR2=(t/bt)**2}setSkyReflection(t,e){this.uSkyRefl.value.setRGB(t[0],t[1],t[2],Qt),e&&this.uSkyTop.value.setRGB(e[0],e[1],e[2],Qt)}setWaterRefraction(t,e,n,s){this.uRefractionColor.value=t,this.uRefractionDepth.value=e,this.uRefractionSize.value.set(Math.max(1,n),Math.max(1,s)),this.uHasRefraction.value=t&&e?1:0}setWaterReflection(t,e){this.uReflectionColor.value=t,e&&this.uReflectionMatrix.value.copy(e),this.uHasReflection.value=t?1:0}setSunDir(t,e,n){this.uSunDir.value.set(t,e,n)}setAtlas(t){this.opaqueMat.map=t,this.iceMat.map=t,this.cutoutMat.map=t,this.opaqueMat.needsUpdate=!0,this.iceMat.needsUpdate=!0,this.cutoutMat.needsUpdate=!0}animateWater(t){if(this.uTime.value+=t,this.uShaders.value>.5)return;this.waterAnimT+=t;const e=.09;for(;this.waterAnimT>=e;){this.waterAnimT-=e,this.waterFrame=(this.waterFrame+1)%this.waterFrames.length;const n=this.waterFrames[this.waterFrame];n.image&&(this.waterTex.image=n.image,this.waterTex.needsUpdate=!0)}}key(t,e){return`${t},${e}`}setWorld(t){for(const e of[...this.meshes.keys()])this.unload(e);this.lightGrids.clear(),this.meshQueue.length=0,this.priorityQueue.length=0,this.meshPending.clear(),this.meshPendingSince.clear(),this.meshFails.clear(),this.editKeys.clear(),this.world=t}dispose(){var t;for(const e of[...this.meshes.keys()])this.unload(e);this.lightGrids.clear();for(const e of this.meshWorkers)e.terminate();this.meshWorkers.length=0,this.opaqueMat.dispose(),this.iceMat.dispose(),this.cutoutMat.dispose(),this.waterMat.dispose(),this.torchMat.dispose(),this.waterTex.dispose(),this.cloudNoiseTex.dispose(),this.waterWaveTex.dispose(),(t=this.leafDepthMat)==null||t.dispose(),this.scene.remove(this.sun),this.scene.remove(this.sun.target)}buildGeo(t){const e=new Ne;return e.setAttribute("position",new ue(t.positions,3)),t.normals&&e.setAttribute("normal",new ue(t.normals,3)),e.setAttribute("uv",new ue(t.uvs,2)),e.setAttribute("color",new ue(t.colors,3)),t.light&&t.light.length&&e.setAttribute("aLight",new ue(t.light,2)),t.underwater&&t.underwater.length&&e.setAttribute("aUnderwater",new ue(t.underwater,1)),t.top&&t.top.length&&e.setAttribute("aTop",new ue(t.top,1)),t.shore&&t.shore.length&&e.setAttribute("aShore",new ue(t.shore,1)),t.sway&&t.sway.length&&e.setAttribute("aSway",new ue(t.sway,1)),e.setIndex(new ue(t.indices,1)),e}lightLevelAt(t,e,n){const s=Math.floor(Math.floor(t)/bt),o=Math.floor(Math.floor(n)/bt),r=this.lightGrids.get(this.key(s,o));if(!r)return[15,0];const a=Math.min(3,Math.max(0,Math.floor((t-s*bt)/4))),l=Math.min(3,Math.max(0,Math.floor((n-o*bt)/4))),c=Math.min(47,Math.max(0,Math.floor(e/4))),h=r[a+l*4+c*16];return[h>>4,h&15]}brightnessAt(t,e,n,s){const[o,r]=this.lightLevelAt(t,e,n),a=o<.5?.03:.04;return Math.min(1,Math.max(nd(o-s),nd(r))*.96+a)}unload(t){this.editKeys.delete(t),this.meshPendingSince.delete(t),this.meshFails.delete(t),this.lightGrids.delete(t);const e=this.meshes.get(t);if(e){for(const n of[e.opaque,e.ice,e.cutout,e.water,e.torch])n&&(this.scene.remove(n),n.geometry.dispose());this.meshes.delete(t)}}addMesh(t,e,n,s){if(t.indices.length===0)return null;const o=new Kt(this.buildGeo(t),e);return o.position.set(n*bt,0,s*bt),(e===this.waterMat||e===this.iceMat)&&o.layers.set(oa),this.scene.add(o),o}flushMesh(t){for(let e=0;e<8&&this.priorityQueue.length>0;e++){const n=this.priorityQueue.shift();n&&this.world.peek(n.cx,n.cz)&&this.applyMesh(n.cx,n.cz,n.mesh)}for(let e=0;e<t&&this.meshQueue.length>0;e++){const n=this.meshQueue.shift();n&&this.world.peek(n.cx,n.cz)&&this.applyMesh(n.cx,n.cz,n.mesh)}}meshBusy(){return this.meshQueue.length>0||this.priorityQueue.length>0||this.meshPending.size>0}meshQueueLen(){return this.meshQueue.length+this.priorityQueue.length}pipelineStats(){let t=0;for(const e of this.meshes.values())[e.opaque,e.ice,e.cutout,e.water,e.torch].some(n=>n&&n.visible)&&t++;return{meshed:this.meshes.size,visible:t,pending:this.meshPending.size,queued:this.meshQueueLen()}}applyMesh(t,e,n){this.unload(this.key(t,e)),this.lightGrids.set(this.key(t,e),n.light3d);const s=this.addMesh(n.opaque,this.opaqueMat,t,e)??new Kt,o=this.addMesh(n.ice,this.iceMat,t,e),r=this.addMesh(n.cutout,this.cutoutMat,t,e),a=this.addMesh(n.water,this.waterMat,t,e),l=this.addMesh(n.torch,this.torchMat,t,e);s.castShadow=!0,s.receiveShadow=!0,o&&(o.castShadow=!0,o.receiveShadow=!0),r&&(r.castShadow=!0,r.receiveShadow=!0,this.leafDepthMat&&(r.customDepthMaterial=this.leafDepthMat)),this.meshes.set(this.key(t,e),{opaque:s,ice:o,cutout:r,water:a,torch:l})}rebuildSync(t,e){const n=this.key(t,e);this.meshPending.delete(n),this.meshPendingSince.delete(n);const s=this.meshQueue.findIndex(a=>a.cx===t&&a.cz===e);s>=0&&this.meshQueue.splice(s,1);const o=this.priorityQueue.findIndex(a=>a.cx===t&&a.cz===e);o>=0&&this.priorityQueue.splice(o,1),this.applyMesh(t,e,VS(this.world,t,e));const r=this.world.peek(t,e);r&&(r.dirty=!1)}collectNeighbors(t,e){const n=[],s=[];for(let o=-1;o<=1;o++)for(let r=-1;r<=1;r++){const a=this.world.peek(t+o,e+r);if(!a)return null;n.push(a.blocks.slice()),s.push(a.fluid.slice())}return{blocks:n,fluid:s}}rebuild(t,e){if(this.meshWorkers.length===0){this.rebuildSync(t,e);return}const n=this.key(t,e);if(this.meshPending.has(n)||(this.meshFails.get(n)??0)>=3)return;const s=this.collectNeighbors(t,e);if(!s)return;this.meshPending.add(n),this.meshPendingSince.set(n,td());const o=[...s.blocks.map(a=>a.buffer),...s.fluid.map(a=>a.buffer)];this.meshWorkers[this.meshRr].postMessage({cx:t,cz:e,blocks:s.blocks,fluid:s.fluid},o),this.meshRr=(this.meshRr+1)%this.meshWorkers.length;const r=this.world.peek(t,e);r&&(r.dirty=!1)}retryStuckMeshes(t=8e3){const e=td();for(const[n,s]of this.meshPendingSince)e-s>t&&(this.meshPending.delete(n),this.meshPendingSince.delete(n),console.warn(`[meshgen] 区块 ${n} 网格化 ${Math.round((e-s)/1e3)}s 未回(worker 丢消息?) → 重试`))}update(t,e,n,s=2,o=0,r=0){this.retryStuckMeshes(),this.world.retryStuckGen();for(const l of[...this.meshes.keys()]){const[c,h]=l.split(",").map(Number);(Math.abs(c-t)>n+1||Math.abs(h-e)>n+1)&&this.unload(l)}for(let l=-n-1;l<=n+1;l++)for(let c=-n-1;c<=n+1;c++)this.world.request(t+c,e+l);const a=[];for(let l=-n;l<=n;l++)for(let c=-n;c<=n;c++){if(ed(c,l,this.fogCullR2))continue;const h=t+c,u=e+l,d=this.world.peek(h,u);d&&(!this.meshes.has(this.key(h,u))||d.dirty)&&a.push({cx:h,cz:u,d:c*c+l*l,ahead:jS(c,l,o,r)})}a.sort((l,c)=>l.ahead===c.ahead?l.d-c.d:l.ahead?-1:1);for(let l=0;l<Math.min(s,a.length);l++)this.rebuild(a[l].cx,a[l].cz);for(const[l,c]of this.meshes){const[h,u]=l.split(",").map(Number),d=!ed(h-t,u-e,this.fogCullR2);for(const p of[c.opaque,c.ice,c.cutout,c.water,c.torch])p&&(p.visible=d)}}cullToView(t,e,n,s,o=0){if(!(Math.abs(o)>.42))for(const[r,a]of this.meshes){const[l,c]=r.split(",").map(Number);if(!YS(l*bt+bt/2,c*bt+bt/2,t,e,n,s))for(const h of[a.opaque,a.ice,a.cutout,a.water,a.torch])h&&(h.visible=!1)}}remeshDirty(){var t;for(const e of[...this.meshes.keys()]){const[n,s]=e.split(",").map(Number);(t=this.world.peek(n,s))!=null&&t.dirty&&(this.editKeys.add(e),this.rebuild(n,s))}}}const Cr=10;class a1{constructor(t){_(this,"mesh");_(this,"tex");this.tex=new Qs().load("/mineworld/textures/crack.png"),this.tex.magFilter=le,this.tex.minFilter=le,this.tex.generateMipmaps=!1,this.tex.colorSpace=Qt,this.tex.wrapS=fi,this.tex.repeat.set(1/Cr,1);const e=new pe({map:this.tex,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});this.mesh=new Kt(new je(1.002,1.002,1.002),e),this.mesh.renderOrder=2,this.mesh.visible=!1,t.add(this.mesh)}show(t,e,n,s){const o=Math.max(0,Math.min(Cr-1,Math.floor(s*Cr)));this.tex.offset.x=o/Cr,this.mesh.position.set(t+.5,e+.5,n+.5),this.mesh.visible=!0}hide(){this.mesh.visible=!1}}const aa=256,gp=257,vp=258,_p=259,xp=260,yp=261,Mp=262,Sp=263,l1=264,c1=265,h1=266,u1=267,d1=268,f1=269,p1=270,m1=271,g1=272,v1=273,wp=274,Uc=275,bp=276,Nc=277,Ep=278,Fc=279,Tp=280,Oc=281,Ap=282,Rp=283,Cp=284,Pp=285,Dp=286,Lp=287,kp=288,Ip=289,Up=290,Ni=291,Ts=292,Np=293,Fp=294,_1=295,x1=296,Op=297,Bp=298,zp=299,Hp=300,Gp=301;function Se(i,t,e,n){return{name:i,maxStack:1,food:null,tool:{kind:t,tier:e,speed:t==="sword"?1.5:t==="hoe"?1:n,maxDurability:e===1?59:e===2?131:e===3?250:1561}}}const Xi={[aa]:{name:"apple",maxStack:64,food:{nutrition:4,saturationModifier:.3},tool:null},[Fp]:{name:"flint_and_steel",maxStack:1,food:null,tool:null},[_1]:{name:"nether_quartz",maxStack:64,food:null,tool:null},[x1]:{name:"diamond",maxStack:64,food:null,tool:null},[gp]:{name:"stick",maxStack:64,food:null,tool:null},[vp]:{name:"coal",maxStack:64,food:null,tool:null},[_p]:Se("wooden_pickaxe","pickaxe",1,2),[xp]:Se("wooden_axe","axe",1,2),[yp]:Se("wooden_shovel","shovel",1,2),[Mp]:Se("wooden_sword","sword",1,2),[Sp]:Se("wooden_hoe","hoe",1,2),[l1]:Se("stone_pickaxe","pickaxe",2,4),[c1]:Se("stone_axe","axe",2,4),[h1]:Se("stone_shovel","shovel",2,4),[u1]:Se("stone_sword","sword",2,4),[d1]:Se("stone_hoe","hoe",2,4),[f1]:Se("iron_pickaxe","pickaxe",3,6),[p1]:Se("iron_axe","axe",3,6),[m1]:Se("iron_shovel","shovel",3,6),[g1]:Se("iron_sword","sword",3,6),[v1]:Se("iron_hoe","hoe",3,6),[wp]:{name:"iron_ingot",maxStack:64,food:null,tool:null},[Op]:Se("diamond_pickaxe","pickaxe",4,8),[Bp]:Se("diamond_axe","axe",4,8),[zp]:Se("diamond_shovel","shovel",4,8),[Hp]:Se("diamond_sword","sword",4,8),[Gp]:Se("diamond_hoe","hoe",4,8),[Uc]:{name:"raw_porkchop",maxStack:64,food:{nutrition:3,saturationModifier:.3},tool:null},[bp]:{name:"cooked_porkchop",maxStack:64,food:{nutrition:8,saturationModifier:.8},tool:null},[Nc]:{name:"raw_beef",maxStack:64,food:{nutrition:3,saturationModifier:.3},tool:null},[Ep]:{name:"cooked_beef",maxStack:64,food:{nutrition:8,saturationModifier:.8},tool:null},[Fc]:{name:"raw_mutton",maxStack:64,food:{nutrition:2,saturationModifier:.3},tool:null},[Tp]:{name:"cooked_mutton",maxStack:64,food:{nutrition:6,saturationModifier:.8},tool:null},[Oc]:{name:"raw_chicken",maxStack:64,food:{nutrition:2,saturationModifier:.3},tool:null},[Ap]:{name:"cooked_chicken",maxStack:64,food:{nutrition:6,saturationModifier:.6},tool:null},[Rp]:{name:"leather",maxStack:64,food:null,tool:null},[Cp]:{name:"wool",maxStack:64,food:null,tool:null},[Pp]:{name:"feather",maxStack:64,food:null,tool:null},[Dp]:{name:"egg",maxStack:16,food:null,tool:null},[Lp]:{name:"rotten_flesh",maxStack:64,food:{nutrition:4,saturationModifier:.1},tool:null},[kp]:{name:"bone",maxStack:64,food:null,tool:null},[Ip]:{name:"flint",maxStack:64,food:null,tool:null},[Up]:{name:"string",maxStack:64,food:null,tool:null},[Ni]:{name:"arrow",maxStack:64,food:null,tool:null},[Ts]:{name:"bow",maxStack:1,food:null,tool:null},[Np]:{name:"gunpowder",maxStack:64,food:null,tool:null}},y1=Object.keys(Xi).map(Number);function Al(i){return i in Xi}function Rl(i){var t;return((t=Xi[i])==null?void 0:t.food)!=null}function M1(i){var t;return((t=Xi[i])==null?void 0:t.food)??null}function S1(i){var t;return((t=Xi[i])==null?void 0:t.name)??null}function la(i){var t;return((t=Xi[i])==null?void 0:t.maxStack)??64}function Ro(i){var t;return((t=Xi[i])==null?void 0:t.tool)??null}const w1={1:"stone",2:"dirt",3:"grass",4:"cobblestone",5:"sand",6:"oak_log",7:"oak_planks",8:"coal_ore",10:"oak_leaves",11:"crafting_table",12:"iron_ore",13:"furnace",14:"torch",15:"gravel",26:"sandstone",18:"obsidian",19:"netherrack",20:"soul_sand",21:"glowstone",22:"nether_quartz_ore",24:"bedrock",27:"cactus",28:"ice",30:"spruce_log",31:"spruce_leaves",32:"coal_block",33:"iron_block",34:"quartz_block",35:"diamond_ore",36:"diamond_block",[aa]:"apple",257:"stick",258:"coal",259:"wooden_pickaxe",260:"wooden_axe",261:"wooden_shovel",262:"wooden_sword",263:"wooden_hoe",264:"stone_pickaxe",265:"stone_axe",266:"stone_shovel",267:"stone_sword",268:"stone_hoe",269:"iron_pickaxe",270:"iron_axe",271:"iron_shovel",272:"iron_sword",273:"iron_hoe",274:"iron_ingot",275:"raw_porkchop",276:"cooked_porkchop",277:"raw_beef",278:"cooked_beef",279:"raw_mutton",280:"cooked_mutton",281:"raw_chicken",282:"cooked_chicken",283:"leather",284:"wool",285:"feather",286:"egg",287:"rotten_flesh",288:"bone",289:"flint",290:"string",291:"arrow",292:"bow",293:"gunpowder",294:"flint_and_steel",295:"nether_quartz",296:"diamond",297:"diamond_pickaxe",298:"diamond_axe",299:"diamond_shovel",300:"diamond_sword",301:"diamond_hoe"},b1=new Set(["stone","dirt","grass","cobblestone","sand","oak_log","oak_planks","coal_ore","oak_leaves","crafting_table","iron_ore","furnace","gravel","sandstone","obsidian","netherrack","soul_sand","glowstone","nether_quartz_ore","bedrock","cactus","ice","spruce_log","spruce_leaves","coal_block","iron_block","quartz_block","diamond_ore","diamond_block"]);let Vp="classic";function id(i){Vp=i}const E1={1:"石头",2:"泥土",3:"草方块",4:"圆石",5:"沙子",6:"原木",7:"木板",8:"煤矿",10:"树叶",11:"工作台",12:"铁矿",13:"熔炉",14:"火把",15:"砂砾",26:"沙石",32:"煤炭块",33:"铁块",34:"石英块",35:"钻石矿石",36:"钻石块",256:"苹果",257:"木棍",258:"煤炭",259:"木镐",260:"木斧",261:"木锹",262:"木剑",263:"木锄",264:"石镐",265:"石斧",266:"石锹",267:"石剑",268:"石锄",269:"铁镐",270:"铁斧",271:"铁锹",272:"铁剑",273:"铁锄",274:"铁锭",275:"生猪排",276:"熟猪排",277:"生牛肉",278:"牛排",279:"生羊肉",280:"熟羊肉",281:"生鸡肉",282:"熟鸡肉",283:"皮革",284:"羊毛",285:"羽毛",286:"鸡蛋",287:"腐肉",288:"骨头",289:"燧石",290:"线",291:"箭",292:"弓",293:"火药",294:"打火石",295:"下界石英",296:"钻石",297:"钻石镐",298:"钻石斧",299:"钻石锹",300:"钻石剑",301:"钻石锄"},zi=i=>{const t=w1[i];if(!t)return null;const e=Vp==="classic"&&b1.has(t)?"icons_classic":"icons";return Js(`textures/${e}/${t}.png`)},Wp=i=>E1[i]??`#${i}`,ks=.25,T1=22,sd=ks/2;function _n(i,t,e,n,s=Math.random,o=1,r){return{id:i,count:o,dur:r,x:t+.5,y:e+.5,z:n+.5,vx:(s()-.5)*2,vy:2.5,vz:(s()-.5)*2,age:0}}function A1(i,t,e=.75){const n=e*e;for(let s=0;s<i.length;s++){const o=i[s],r=t(o.id);if(!(o.count>=r))for(let a=i.length-1;a>s;a--){const l=i[a];if(l.id!==o.id||o.dur!==void 0||l.dur!==void 0)continue;const c=o.x-l.x,h=o.y-l.y,u=o.z-l.z;if(c*c+h*h+u*u>n)continue;const d=Math.min(r-o.count,l.count);if(!(d<=0)&&(o.count+=d,l.count-=d,l.age<o.age&&(o.age=l.age),l.count<=0&&i.splice(a,1),o.count>=r))break}}}function R1(i,t,e){i.age+=e,i.vy-=T1*e;const n=i.x+i.vx*e,s=i.z+i.vz*e;let o=i.y+i.vy*e;const r=o-sd;return i.vy<=0&&t.isSolid(Math.floor(n),Math.floor(r),Math.floor(s))&&(o=Math.floor(r)+1+sd,i.vy=0,i.vx*=.6,i.vz*=.6),i.x=n,i.y=o,i.z=s,i}function C1(i,t,e,n){if(i.age<.3)return!1;const s=i.x-t,o=i.y-e,r=i.z-n;return s*s+o*o+r*r<1.4*1.4}const Mo=4,od=10,P1=16,Pr=.5/(P1*Mo);function D1(i){const t=new je(ks,ks,ks),e=Qe[i].faces,n=t.attributes.uv;for(let s=0;s<6;s++){const o=e[s],r=o%Mo,a=Math.floor(o/Mo),l=r/Mo+Pr,c=(r+1)/Mo-Pr,h=1-(a+1)/od+Pr,u=1-a/od-Pr,d=s*4;n.setXY(d+0,l,u),n.setXY(d+1,c,u),n.setXY(d+2,l,h),n.setXY(d+3,c,h)}return n.needsUpdate=!0,t}class L1{constructor(t,e){_(this,"meshes",new Map);_(this,"geoCache",new Map);_(this,"mat");_(this,"itemMats",new Map);this.scene=t,this.mat=new pe({map:e})}setAtlas(t){this.mat.map=t,this.mat.needsUpdate=!0;for(const[e,n]of this.meshes)Al(e.id)||(n.material.map=t,n.material.needsUpdate=!0)}itemMat(t){let e=this.itemMats.get(t);if(!e){const n=new Qs().load(zi(t)??Js("textures/icons/apple.png"));n.magFilter=le,n.minFilter=le,n.colorSpace=Qt,e=new pe({map:n,transparent:!0,alphaTest:.5,side:He}),this.itemMats.set(t,e)}return e}geo(t){let e=this.geoCache.get(t);return e||(e=Al(t)?new $e(ks,ks):D1(t),this.geoCache.set(t,e)),e}sync(t,e){const n=new Set(t);for(const[s,o]of this.meshes)n.has(s)||(this.scene.remove(o),o.material.dispose(),this.meshes.delete(s));for(const s of t){let o=this.meshes.get(s);if(o||(o=new Kt(this.geo(s.id),(Al(s.id)?this.itemMat(s.id):this.mat).clone()),this.scene.add(o),this.meshes.set(s,o)),e){const a=e(s.x,s.y+.5,s.z);o.material.color.setScalar(a)}const r=.1+Math.sin(s.age*3)*.06;o.position.set(s.x,s.y+r,s.z),o.rotation.y=s.age*1.8}}clear(){for(const[,t]of this.meshes)this.scene.remove(t),t.material.dispose();this.meshes.clear()}}function k1(i){var e;const t=((e=Qe[i])==null?void 0:e.name)??"";return["obsidian"].includes(t)?{roughness:.38,specularIntensity:.62}:["iron_block","diamond_block","quartz_block"].includes(t)?{roughness:.54,specularIntensity:.5}:t.includes("log")||["oak_planks","crafting_table"].includes(t)?{roughness:.8,specularIntensity:.34}:{roughness:.91,specularIntensity:.26}}function I1(i){return i===null||i<=0?"none":i===Ds?zi(i)?"sprite":"none":Qe[i]?"block":zi(i)?"sprite":"none"}const Cl=.8;function U1(i){const t=Math.PI/180,e=Math.sin(Math.sqrt(Math.max(0,i))*Math.PI),n=Math.sin(i*i*Math.PI);return{tx:-.4*e*Cl,ty:.2*Math.sin(Math.sqrt(Math.max(0,i))*Math.PI*2)*Cl,tz:-.2*Math.sin(i*Math.PI)*Cl,ry1:(45+n*-20)*t,rz:e*-20*t,rx:e*-80*t,ry2:-45*t}}const So=4,rd=10,N1=16,Dr=.01/(N1*So),Is=[.6,.6,1,.5,.8,.8],F1=.3,O1=new I(1,0,0),B1=new I(0,1,0);function z1(i,t,e,n){const s=new je(i,t,e),o=new Mt(n),r=[];for(let a=0;a<6;a++)for(let l=0;l<4;l++)r.push(o.r*Is[a],o.g*Is[a],o.b*Is[a]);return s.setAttribute("color",new Ae(r,3)),s}function H1(i,t){const e=new je(t,t,t),n=Qe[i].faces,s=e.attributes.uv,o=[];for(let r=0;r<6;r++){const a=n[r],l=a%So,c=Math.floor(a/So),h=l/So+Dr,u=(l+1)/So-Dr,d=1-(c+1)/rd+Dr,p=1-c/rd-Dr,g=r*4;s.setXY(g+0,h,p),s.setXY(g+1,u,p),s.setXY(g+2,h,d),s.setXY(g+3,u,d);for(let v=0;v<4;v++)o.push(Is[r],Is[r],Is[r])}return s.needsUpdate=!0,e.setAttribute("color",new Ae(o,3)),e}class G1{constructor(t){_(this,"scene",new Vs);_(this,"camera",new Ye(70,1,.01,10));_(this,"atlas");_(this,"root",new rn);_(this,"arm");_(this,"item",null);_(this,"itemId",null);_(this,"spriteTex",new Map);_(this,"swingT",0);_(this,"wantSwing",!1);_(this,"bobPhase",0);_(this,"eating",!1);_(this,"eatT",0);_(this,"hurtT",0);_(this,"bright",1);_(this,"lightingQuality","off");_(this,"skyLight",new vM(14478591,1581105,0));_(this,"skyFill",new Ou(14478591,0));_(this,"blockLight",new Ou(16747834,0));_(this,"sunLight",new Hf(16777215,0));_(this,"invViewQ",new Vi);_(this,"viewSun",new I);_(this,"viewUp",new I);_(this,"coolSky",new Mt().setRGB(.68,.82,1));_(this,"lowSun",new Mt().setRGB(1.38,.58,.16));_(this,"noonSun",new Mt().setRGB(1.08,1,.88));this.atlas=t,this.arm=new Kt(z1(.14,.5,.14,15249530),new pe({vertexColors:!0})),this.arm.position.set(0,-.22,0),this.root.add(this.arm),this.root.position.set(.5,-.45,-.7),this.root.rotation.set(.2,-.5,.45),this.scene.add(this.root),this.sunLight.castShadow=!1,this.scene.add(this.skyLight,this.skyFill,this.blockLight,this.sunLight,this.sunLight.target)}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}itemTexture(t){const e=this.spriteTex.get(t);if(e)return e;const n=zi(t);if(!n)return null;const s=new Qs().load(n);return s.magFilter=le,s.minFilter=le,s.generateMipmaps=!1,s.colorSpace=Qt,this.spriteTex.set(t,s),s}setBrightness(t){var n;this.bright+=(t-this.bright)*.12;const e=this.bright;this.arm.material.color.setScalar(e),((n=this.item)==null?void 0:n.material)instanceof pe&&this.item.material.color.setScalar(e)}setLightingQuality(t){if(t===this.lightingQuality)return;this.lightingQuality=t,t==="off"&&(this.skyLight.intensity=0,this.skyFill.intensity=0,this.blockLight.intensity=0,this.sunLight.intensity=0);const e=this.itemId;this.itemId=null,this.setHeld(e)}setLighting(t){if(this.lightingQuality==="off")return;const e=c=>{const h=_o.clamp(c,0,15)/15;return h/(4-3*h)},n=t.sunEnabled?e(t.skyLevel-t.skyDarken):0,s=e(t.blockLevel),o=(c,h)=>c+(h-c)*.14;this.skyLight.color.copy(t.skyColor).lerp(this.coolSky,.25),this.skyLight.groundColor.setRGB(.25,.3,.4),this.skyLight.intensity=o(this.skyLight.intensity,Math.max(.035,n*1.05)),this.skyFill.color.copy(this.skyLight.color),this.skyFill.intensity=o(this.skyFill.intensity,Math.max(.012,n*.32)),this.blockLight.color.setRGB(1,.56,.25),this.blockLight.intensity=o(this.blockLight.intensity,s*.62),this.invViewQ.copy(t.cameraQuaternion).invert(),this.viewSun.copy(t.sunDirectionWorld).applyQuaternion(this.invViewQ).normalize(),this.viewUp.set(0,1,0).applyQuaternion(this.invViewQ).normalize(),this.sunLight.position.copy(this.viewSun).multiplyScalar(5),this.sunLight.target.position.set(0,0,0),this.skyLight.position.copy(this.viewUp);const r=_o.clamp(t.sunDirectionWorld.y*3,0,1);this.sunLight.color.copy(this.lowSun).lerp(this.noonSun,r);const a=t.sunEnabled?_o.smoothstep(t.skyLevel,11,15):0,l=_o.smoothstep(t.sunDirectionWorld.y,.02,.2);this.sunLight.intensity=o(this.sunLight.intensity,a*l*1.55)}setHeld(t){if(t===this.itemId)return;if(this.itemId=t,this.item){if(this.root.remove(this.item),this.item.geometry.dispose(),Array.isArray(this.item.material))for(const n of this.item.material)n.dispose();else this.item.material.dispose();this.item=null}const e=I1(t);if(e==="block"&&t!==null){const n=k1(t),s=this.lightingQuality==="off"?new pe({map:this.atlas,vertexColors:!0}):new fM({map:this.atlas,roughness:n.roughness,metalness:0,ior:1.35,specularIntensity:n.specularIntensity});this.item=new Kt(H1(t,.32),s),this.item.position.set(-.02,.16,.04),this.item.rotation.set(-.1,.6,.1),this.root.add(this.item)}else if(e==="sprite"&&t!==null){const n=this.itemTexture(t);n&&(this.item=new Kt(new $e(.34,.34),new pe({map:n,transparent:!0,alphaTest:.5,side:He})),this.item.position.set(.04,.2,.04),this.item.rotation.set(0,-.35,.35),this.root.add(this.item))}}swing(){this.wantSwing=!0}hurtShake(){this.hurtT=1}setAtlas(t){this.atlas=t;const e=this.itemId;this.itemId=null,this.setHeld(e)}setEating(t){this.eating=t,t||(this.eatT=0)}update(t,e){this.wantSwing&&this.swingT===0&&(this.swingT=1e-4),this.swingT>0&&(this.swingT+=t/F1,this.swingT>=1&&(this.swingT=this.wantSwing?1e-4:0)),this.wantSwing=!1,this.bobPhase+=t*e*7;const n=Math.cos(this.bobPhase)*.012*Math.min(1,e),s=Math.abs(Math.sin(this.bobPhase))*.012*Math.min(1,e),o=U1(this.swingT);if(this.root.position.set(.42+n+o.tx,-.28+s+o.ty,-.72+o.tz),this.root.rotation.set(.1,-.5,.4),this.root.rotateOnWorldAxis(O1,o.rx),this.root.rotateOnWorldAxis(B1,o.rz),this.eating){this.eatT+=t;const r=Math.sin(this.eatT*30);this.root.position.x+=-.18+r*.015,this.root.position.y+=.16+r*.02,this.root.position.z+=.18,this.root.rotateX(.4+r*.12),this.root.rotateZ(-.25)}if(this.hurtT>0){this.hurtT=Math.max(0,this.hurtT-t*4);const r=this.hurtT*this.hurtT,a=Math.sin(this.hurtT*45);this.root.position.x+=a*.05*r,this.root.position.y+=-.06*r,this.root.rotateZ(a*.35*r)}}}const ad=.6,ca=.6,Hi=1.8,An=1.62,V1=1.8,W1=1.54,X1=.3,q1=.2,ha=.08,ua=.98,Uo=.42,ld=4.317/20,Y1=5.612/20,$1=.42,K1=.84,cd=.42,Lr=ca/2;function da(i,t,e=Hi){const s=Math.floor(i.x-Lr+1e-6),o=Math.ceil(i.x+Lr-1e-6)-1,r=Math.floor(i.y+1e-6),a=Math.ceil(i.y+e-1e-6)-1,l=Math.floor(i.z-Lr+1e-6),c=Math.ceil(i.z+Lr-1e-6)-1;for(let h=r;h<=a;h++)for(let u=s;u<=o;u++)for(let d=l;d<=c;d++)if(t.isSolid(u,h,d))return!0;return!1}function gs(i,t,e,n,s=Hi){if(e===0)return!1;const o=Math.sign(e),r=.2;let a=Math.abs(e);for(;a>1e-9;){const l=Math.min(a,r)*o;if(a-=Math.abs(l),i[t]+=l,da(i,n,s)){i[t]-=l;let c=l/2;for(let h=0;h<24&&Math.abs(c)>1e-5;h++)i[t]+=c,da(i,n,s)&&(i[t]-=c),c/=2;return!0}}return!1}function hd(i){const t=Math.cos(i.yaw),e=Math.sin(i.yaw);let n=i.forward*t-i.right*e,s=i.forward*e+i.right*t;const o=Math.hypot(n,s);return o>1e-9?(n/=o,s/=o):(n=0,s=0),{x:n,z:s}}function po(i,t,e=Hi){return da(i,t,e)?!1:da({x:i.x,y:i.y-.06,z:i.z},t,e)}function j1(i,t,e){var k,R,C;const n={...i.pos},s={...i.vel};if(t.fly){const F=hd(t),b=t.sprint?K1:$1;return s.x=F.x*b,s.z=F.z*b,s.y=(t.flyUp?cd:0)-(t.flyDown?cd:0),gs(n,"y",s.y,e)&&(s.y=0),gs(n,"x",s.x,e)&&(s.x=0),gs(n,"z",s.z,e)&&(s.z=0),{pos:n,vel:s,onGround:po(n,e),kbx:0,kbz:0}}const o=t.crouch===!0,r=o?V1:Hi,a=po(n,e,r),l=((k=e.isWater)==null?void 0:k.call(e,Math.floor(n.x),Math.floor(n.y+.1),Math.floor(n.z)))??!1;let c=!1;t.jump&&(a||l)&&(s.y=l?.5:Uo,c=!0);const h=hd(t);let u=l?ld*.7:t.sprint&&!o?Y1:ld;o&&(u*=X1),t.slow&&(u*=q1);const d=i.kbx??0,p=i.kbz??0,g=Math.hypot(h.x,h.z)>1e-9;if(!a&&!l)s.x=s.x*.91+h.x*u*.09+d,s.z=s.z*.91+h.z*u*.09+p;else if(g||l){let F=u;if(g&&a&&!l){const b=Math.floor(n.x),S=Math.floor(n.y-.1),P=Math.floor(n.z);(((R=e.getBlock)==null?void 0:R.call(e,b,S,P))??0)===Qf&&(F*=.4)}s.x=h.x*F+d,s.z=h.z*F+p}else{const F=Math.floor(n.x),b=Math.floor(n.y-.1),S=Math.floor(n.z),P=((C=e.getBlock)==null?void 0:C.call(e,F,b,S))??0,X=JM(P);s.x=s.x*X+d,s.z=s.z*X+p}gs(n,"y",s.y,e,r)&&(s.y=0);const v=o&&a&&s.y<=0,f=n.x;gs(n,"x",s.x,e,r)&&(s.x=0),v&&!po(n,e,r)&&(n.x=f,s.x=0);const m=n.z;gs(n,"z",s.z,e,r)&&(s.z=0),v&&!po(n,e,r)&&(n.z=m,s.z=0);const y=po(n,e,r);c?s.y=(s.y-ha)*ua:l?t.swimUp?s.y=.16:s.y=Math.max(s.y*.8-.02,-.15):y?s.y=0:s.y=(s.y-ha)*ua;const x=s.x===0?0:d*ad,E=s.z===0?0:p*ad;return{pos:n,vel:s,onGround:y,kbx:Math.abs(x)<.005?0:x,kbz:Math.abs(E)<.005?0:E}}const Xp=.05,Pl=.99,Z1=.25;function ud(i,t,e,n,s,o,r,a,l){const c=Math.hypot(n,s,o)||1;return{x:i,y:t,z:e,vx:n/c*r,vy:s/c*r,vz:o/c*r,age:0,stuck:!1,fromPlayer:a,damage:l}}function Q1(i,t){if(i.age++,i.stuck)return i;i.vy-=Xp,i.vx*=Pl,i.vy*=Pl,i.vz*=Pl;const e=Math.hypot(i.vx,i.vy,i.vz),n=Math.max(1,Math.ceil(e/Z1)),s=i.vx/n,o=i.vy/n,r=i.vz/n;for(let a=0;a<n;a++){const l=i.x+s,c=i.y+o,h=i.z+r;if(t.isSolid(Math.floor(l),Math.floor(c),Math.floor(h)))return i.stuck=!0,i.vx=i.vy=i.vz=0,i;i.x=l,i.y=c,i.z=h}return i}const J1=new I(0,0,1);class tw{constructor(t){_(this,"meshes",new Map);_(this,"geoShaft",new je(.05,.05,.5));_(this,"geoHead",new je(.09,.09,.14));_(this,"geoFletch",new je(.16,.02,.12));_(this,"matShaft",new pe({color:7031339}));_(this,"matHead",new pe({color:10132130}));_(this,"matFletch",new pe({color:15263980}));_(this,"tmp",new I);this.scene=t}make(){const t=new rn;t.add(new Kt(this.geoShaft,this.matShaft));const e=new Kt(this.geoHead,this.matHead);e.position.z=.3,t.add(e);const n=new Kt(this.geoFletch,this.matFletch);n.position.z=-.22,t.add(n);const s=new Kt(this.geoFletch,this.matFletch);return s.position.z=-.22,s.rotation.z=Math.PI/2,t.add(s),t}sync(t){const e=new Set(t);for(const[n,s]of this.meshes)e.has(n)||(this.scene.remove(s),this.meshes.delete(n));for(const n of t){let s=this.meshes.get(n);s||(s=this.make(),this.scene.add(s),this.meshes.set(n,s)),s.position.set(n.x,n.y,n.z);const o=Math.hypot(n.vx,n.vy,n.vz);o>1e-4&&(this.tmp.set(n.vx/o,n.vy/o,n.vz/o),s.quaternion.setFromUnitVectors(J1,this.tmp))}}clear(){for(const[,t]of this.meshes)this.scene.remove(t);this.meshes.clear()}}function fa(i,t,e,n){const o=Math.floor(i.x-t+1e-6),r=Math.ceil(i.x+t-1e-6)-1,a=Math.floor(i.y+1e-6),l=Math.ceil(i.y+e-1e-6)-1,c=Math.floor(i.z-t+1e-6),h=Math.ceil(i.z+t-1e-6)-1;for(let u=a;u<=l;u++)for(let d=o;d<=r;d++)for(let p=c;p<=h;p++)if(n.isSolid(d,u,p))return!0;return!1}function Dl(i,t,e,n,s,o){if(e===0)return!1;const r=Math.sign(e),a=.2;let l=Math.abs(e);for(;l>1e-9;){const c=Math.min(l,a)*r;if(l-=Math.abs(c),i[t]+=c,fa(i,n,s,o)){i[t]-=c;let h=c/2;for(let u=0;u<24&&Math.abs(h)>1e-5;u++)i[t]+=h,fa(i,n,s,o)&&(i[t]-=h),h/=2;return!0}}return!1}function ew(i,t,e,n){return fa(i,t,e,n)?!1:fa({x:i.x,y:i.y-.06,z:i.z},t,e,n)}function qp(i,t,e,n,s){const o=t/2,r={...i},a={...n};return Dl(r,"y",a.y,o,e,s)&&(a.y=0),Dl(r,"x",a.x,o,e,s)&&(a.x=0),Dl(r,"z",a.z,o,e,s)&&(a.z=0),{pos:r,vel:a,onGround:ew(r,o,e,s)}}const vi={pig:{hp:10,width:.9,height:.9,moveSpeed:.09,fallImmune:!1},cow:{hp:10,width:.9,height:1.4,moveSpeed:.08,fallImmune:!1},sheep:{hp:8,width:.9,height:1.3,moveSpeed:.08,fallImmune:!1},chicken:{hp:4,width:.4,height:.7,moveSpeed:.07,fallImmune:!0},zombie:{hp:20,width:.6,height:1.9,moveSpeed:.13,fallImmune:!1,hostile:!0,attack:3,sense:35},skeleton:{hp:20,width:.6,height:1.95,moveSpeed:.15,fallImmune:!1,hostile:!0,attack:2,sense:16,ranged:!0},creeper:{hp:20,width:.6,height:1.7,moveSpeed:.15,fallImmune:!1,hostile:!0,attack:43,sense:16,explosive:!0,sunImmune:!0},husk:{hp:20,width:.6,height:1.95,moveSpeed:.13,fallImmune:!1,hostile:!0,attack:3,sense:35,sunImmune:!0}},nw=i=>vi[i].hostile===!0,iw=1.8,sw=10,dd=.4,ow=.36,fd=-.05,rw=.06,pd=.85,aw=.12;function Pa(i,t,e,n){return{kind:i,pos:{x:t,y:e,z:n},vel:{x:0,y:0,z:0},yaw:0,onGround:!1,health:vi[i].hp,hurtCooldown:0,ai:{state:"idle",timer:20,target:null},eggTimer:i==="chicken"?6e3:0,atkCd:0,fuse:0}}function Yp(i){return{...i,pos:{...i.pos},vel:{...i.vel},ai:{...i.ai,target:i.ai.target?{...i.ai.target}:null}}}function lw(i,t){return{x:i.x+(t()*2-1)*8,y:i.y,z:i.z+(t()*2-1)*8}}const Ll=i=>20+Math.floor(i()*40);function cw(i,t,e){var v,f;const n=vi[i.kind],s=Yp(i),o=[];s.hurtCooldown>0&&s.hurtCooldown--,s.ai.timer--;let r=0,a=0,l=n.moveSpeed;if(s.ai.state==="idle")s.ai.timer<=0&&(s.ai.state="wander",s.ai.target=lw(s.pos,e),s.ai.timer=40+Math.floor(e()*60));else if(s.ai.state==="wander")if(!s.ai.target||s.ai.timer<=0)s.ai.state="idle",s.ai.target=null,s.ai.timer=Ll(e);else{const m=s.ai.target.x-s.pos.x,y=s.ai.target.z-s.pos.z,x=Math.hypot(m,y);x<.7?(s.ai.state="idle",s.ai.target=null,s.ai.timer=Ll(e)):(r=m/x,a=y/x)}else l=n.moveSpeed*iw,s.ai.timer<=0?(s.ai.state="idle",s.ai.target=null,s.ai.timer=Ll(e)):(r=Math.cos(s.yaw),a=Math.sin(s.yaw));if((r!==0||a!==0)&&s.onGround){const m=.5+n.width/2,y=Math.floor(s.pos.x+r*m),x=Math.floor(s.pos.z+a*m),E=Math.floor(s.pos.y);!t.isSolid(y,E-1,x)&&!t.isSolid(y,E-2,x)&&(r=0,a=0,s.ai.target=null)}let c=!1;if(r!==0||a!==0){const m=Math.hypot(r,a)||1,y=Math.floor(s.pos.x+r/m*(n.width/2+.3)),x=Math.floor(s.pos.z+a/m*(n.width/2+.3)),E=Math.floor(s.pos.y);t.isSolid(y,E,x)&&!t.isSolid(y,E+1,x)&&(c=!0)}const h=c&&s.onGround,u=(s.kbx??0)*.8,d=(s.kbz??0)*.8;if(s.kbx=Math.abs(u)<.01?0:u,s.kbz=Math.abs(d)<.01?0:d,s.vel.x=r*l+(s.kbx??0),s.vel.z=a*l+(s.kbz??0),((v=t.isWater)==null?void 0:v.call(t,Math.floor(s.pos.x),Math.floor(s.pos.y),Math.floor(s.pos.z)))??!1){const m=((f=t.isWater)==null?void 0:f.call(t,Math.floor(s.pos.x),Math.floor(s.pos.y)+1,Math.floor(s.pos.z)))??!1;c?s.vel.y=Uo:s.vel.y=m?Math.min((s.vel.y+rw)*pd,aw):Math.min(s.vel.y*pd,0)}else s.vel.y=(s.vel.y-ha)*ua,h&&(s.vel.y=Uo),n.fallImmune&&s.vel.y<fd&&(s.vel.y=fd);const g=qp(s.pos,n.width,n.height,s.vel,t);return s.pos=g.pos,s.vel=g.vel,s.onGround=g.onGround,s.onGround&&s.vel.y<0&&(s.vel.y=0),(Math.abs(s.vel.x)>1e-4||Math.abs(s.vel.z)>1e-4)&&(s.yaw=Math.atan2(s.vel.z,s.vel.x)),s.kind==="chicken"&&(s.eggTimer--,s.eggTimer<=0&&(o.push({kind:"layEgg",pos:{...s.pos}}),s.eggTimer=6e3+Math.floor(e()*6001))),{mob:s,events:o}}function kl(i,t,e,n){const s=Yp(i),o=[];if(s.hurtCooldown>0)return{mob:s,events:o};s.health-=t,s.hurtCooldown=sw,o.push({kind:"hurt"});const r=Math.hypot(e.x,e.z)||1;return s.kbx=e.x/r*dd,s.kbz=e.z/r*dd,s.vel.x=s.kbx,s.vel.z=s.kbz,s.vel.y=ow,s.onGround=!1,s.yaw=Math.atan2(s.vel.z,s.vel.x),vi[s.kind].hostile?(s.ai.state="chase",s.ai.timer=0,s.aggro=300):(s.ai.state="panic",s.ai.target=null,s.ai.timer=30+Math.floor(n()*10)),s.health<=0&&(o.push({kind:"drops",items:$p(s.kind,n),pos:{...s.pos}}),o.push({kind:"death",pos:{...s.pos}})),{mob:s,events:o}}function $p(i,t){switch(i){case"pig":return[{id:Uc,count:1+Math.floor(t()*3)}];case"cow":{const e=[{id:Nc,count:1+Math.floor(t()*3)}],n=Math.floor(t()*3);return n>0&&e.push({id:Rp,count:n}),e}case"sheep":return[{id:Cp,count:1},{id:Fc,count:1+Math.floor(t()*2)}];case"chicken":{const e=[{id:Oc,count:1}],n=Math.floor(t()*3);return n>0&&e.push({id:Pp,count:n}),e}case"zombie":case"husk":{const e=Math.floor(t()*3);return e>0?[{id:Lp,count:e}]:[]}case"skeleton":{const e=[],n=Math.floor(t()*3);n>0&&e.push({id:kp,count:n});const s=Math.floor(t()*3);s>0&&e.push({id:Up,count:s});const o=Math.floor(t()*3);return o>0&&e.push({id:Ni,count:o}),e}case"creeper":{const e=Math.floor(t()*3);return e>0?[{id:Np,count:e}]:[]}}}const Kp=1.9,hw=1,uw=1.7,dw=18,fw=.05,pw=.6,mw=15,gw=5,vw=10,_w=35,xw=3,yw=30,Mw=3,Sw=.06,md=.85,ww=.12;function Il(i,t,e){const n=e.x-t.x,s=e.y-t.y,o=e.z-t.z,r=Math.ceil(Math.hypot(n,s,o)/.5);for(let a=1;a<r;a++){const l=a/r;if(i.isSolid(Math.floor(t.x+n*l),Math.floor(t.y+s*l),Math.floor(t.z+o*l)))return!1}return!0}function bw(i){return{...i,pos:{...i.pos},vel:{...i.vel},ai:{...i.ai,target:i.ai.target?{...i.ai.target}:null}}}function Ew(i,t,e,n,s){var C,F;const o=vi[i.kind],r=bw(i),a=[];r.hurtCooldown>0&&(r.hurtCooldown-=hw),r.atkCd>0&&r.atkCd--;let l=0,c=0,h=o.moveSpeed;const u=Math.max(0,(r.aggro??0)-1);r.aggro=u;const d=u>0?64:o.sense??16;let p=1/0,g=null;if(n){const b=n.x-r.pos.x,S=n.z-r.pos.z;if(p=Math.hypot(b,n.y-r.pos.y,S),p<=d&&p>.001){r.ai.state="chase",r.ai.target={...n};const P=b/p,X=S/p;o.ranged?(g=n,p<gw?(l=-P,c=-X):p>vw&&(l=P,c=X)):(l=P,c=X)}}if(l===0&&c===0)if(h=o.moveSpeed*pw,r.ai.timer--,r.ai.state==="chase")r.ai.state="idle",r.ai.target=null,r.ai.timer=20+Math.floor(e()*40);else if(r.ai.state==="wander"&&r.ai.target){const b=r.ai.target.x-r.pos.x,S=r.ai.target.z-r.pos.z,P=Math.hypot(b,S);P<.7||r.ai.timer<=0?(r.ai.state="idle",r.ai.target=null,r.ai.timer=20+Math.floor(e()*40)):(l=b/P,c=S/P)}else r.ai.timer<=0&&(r.ai.state="wander",r.ai.target={x:r.pos.x+(e()*2-1)*8,y:r.pos.y,z:r.pos.z+(e()*2-1)*8},r.ai.timer=40+Math.floor(e()*60));const v={x:r.pos.x,y:r.pos.y+o.height*.85,z:r.pos.z},f=n?{x:n.x,y:n.y+1,z:n.z}:null;if(o.ranged){if(f&&p<=mw&&r.atkCd<=0&&Il(t,v,f)){const b=p/Kp,S=.5*Xp*b*b*1.15,P=f.x-v.x,X=f.y+S-v.y,W=f.z-v.z,$=Math.hypot(P,X,W)||1;a.push({kind:"shootArrow",from:v,dir:{x:P/$,y:X/$,z:W/$},damage:1+Math.floor(e()*4)}),r.atkCd=_w}}else if(o.explosive){const b=r.fuse>0?7:xw;if(f&&p<=b&&Il(t,v,f)){if(r.fuse++,l=0,c=0,r.fuse>=yw)return a.push({kind:"explode",pos:{...r.pos},radius:Mw,damage:o.attack??43}),a.push({kind:"death",pos:{...r.pos}}),{mob:r,events:a}}else r.fuse=Math.max(0,r.fuse-1)}else f&&p<=uw&&r.atkCd<=0&&Il(t,v,f)&&(a.push({kind:"attackPlayer",damage:o.attack??2}),r.atkCd=dw);if((l!==0||c!==0)&&r.onGround){const b=.5+o.width/2,S=Math.floor(r.pos.x+l*b),P=Math.floor(r.pos.z+c*b),X=Math.floor(r.pos.y);!t.isSolid(S,X-1,P)&&!t.isSolid(S,X-2,P)&&(l=0,c=0,r.ai.target=null)}let m=!1;if(l!==0||c!==0){const b=Math.hypot(l,c)||1,S=Math.floor(r.pos.x+l/b*(o.width/2+.3)),P=Math.floor(r.pos.z+c/b*(o.width/2+.3)),X=Math.floor(r.pos.y);t.isSolid(S,X,P)&&!t.isSolid(S,X+1,P)&&(m=!0)}const y=m&&r.onGround,x=(r.kbx??0)*.8,E=(r.kbz??0)*.8;if(r.kbx=Math.abs(x)<.01?0:x,r.kbz=Math.abs(E)<.01?0:E,r.vel.x=l*h+(r.kbx??0),r.vel.z=c*h+(r.kbz??0),((C=t.isWater)==null?void 0:C.call(t,Math.floor(r.pos.x),Math.floor(r.pos.y),Math.floor(r.pos.z)))??!1){const b=((F=t.isWater)==null?void 0:F.call(t,Math.floor(r.pos.x),Math.floor(r.pos.y)+1,Math.floor(r.pos.z)))??!1;m?r.vel.y=Uo:r.vel.y=b?Math.min((r.vel.y+Sw)*md,ww):Math.min(r.vel.y*md,0)}else r.vel.y=(r.vel.y-ha)*ua,y&&(r.vel.y=Uo);const R=qp(r.pos,o.width,o.height,r.vel,t);return r.pos=R.pos,r.vel=R.vel,r.onGround=R.onGround,r.onGround&&r.vel.y<0&&(r.vel.y=0),(Math.abs(r.vel.x)>1e-4||Math.abs(r.vel.z)>1e-4)&&(r.yaw=Math.atan2(r.vel.z,r.vel.x)),g&&(r.yaw=Math.atan2(g.z-r.pos.z,g.x-r.pos.x)),s&&!o.sunImmune&&(r.health-=fw),r.health<=0&&(a.push({kind:"drops",items:$p(r.kind,e),pos:{...r.pos}}),a.push({kind:"death",pos:{...r.pos}})),{mob:r,events:a}}const Tw=14;function Aw(i,t){return t<.4?i==="desert"?"husk":"zombie":t<.75?"skeleton":"creeper"}function Rw(i,t,e,n){return!(i.getBlock(t,e-1,n)!==Kf||be(i.getBlock(t,e,n))||be(i.getBlock(t,e+1,n)))}function gd(i,t,e,n,s,o,r=24,a=44,l=null,c=Math.PI){for(let h=0;h<12;h++){const u=l===null?n()*Math.PI*2:l+(n()*2-1)*c,d=r+n()*(a-r),p=Math.floor(t+Math.cos(u)*d),g=Math.floor(e+Math.sin(u)*d),v=o(p,g);if(s.getBlock(p,v,g)===Kf)return Dw(i,p+.5,v+1,g+.5,n,s)}return[]}function cc(i,t,e,n){return!(!be(i.getBlock(t,e-1,n))||be(i.getBlock(t,e,n))||be(i.getBlock(t,e+1,n)))}function jp(i,t,e,n){const s=Tw-1;for(let o=-s;o<=s;o++){const r=s-Math.abs(o);for(let a=-r;a<=r;a++){const l=r-Math.abs(a);for(let c=-l;c<=l;c++)if(i.getBlock(t+c,e+o,n+a)===Ds)return!1}}return!0}function Cw(i,t,e,n,s,o,r=16,a=32,l){for(let c=0;c<14;c++){const h=n()*Math.PI*2,u=r+n()*(a-r),d=Math.floor(t+Math.cos(h)*u),p=Math.floor(e+Math.sin(h)*u),g=o(d,p);if(l?l(d,g+1,p)>7:!jp(s,d,g+1,p))continue;const v=[],f=1+Math.floor(n()*3);for(let m=0;m<f;m++){const y=d+Math.floor((n()*2-1)*2),x=p+Math.floor((n()*2-1)*2),E=o(y,x);cc(s,y,E+1,x)&&v.push(Pa(i,y+.5,E+1,x+.5))}if(v.length)return v}return[]}function Pw(i,t,e,n,s,o,r,a=5,l=24,c){for(let u=0;u<24;u++){const d=s()*Math.PI*2,p=a+s()*(l-a),g=Math.floor(t+Math.cos(d)*p),v=Math.floor(n+Math.sin(d)*p),f=Math.min(Math.floor(e)+8,r(g,v)-5),m=Math.max(2,Math.floor(e)-14);for(let y=f;y>=m;y--){if(!cc(o,g,y,v)||(c?c(g,y,v)>7:!jp(o,g,y,v)))continue;const x=[],E=1+Math.floor(s()*2);for(let k=0;k<E;k++){const R=g+Math.floor((s()*2-1)*2),C=v+Math.floor((s()*2-1)*2);for(let F=1;F>=-1;F--){const b=y+F;if(b<r(R,C)-5&&cc(o,R,b,C)){x.push(Pa(i,R+.5,b,C+.5));break}}}if(x.length)return x}}return[]}function Dw(i,t,e,n,s,o){const r=[];for(let a=0;a<16&&r.length<4;a++){const l=Math.floor(t)+Math.floor((s()*2-1)*4),c=Math.floor(n)+Math.floor((s()*2-1)*4);for(let h=3;h>=-3;h--){const u=Math.floor(e)+h;if(Rw(o,l,u,c)){r.push(Pa(i,l+.5,u,c+.5));break}}}return r}function vd(i){const t={kind:i.kind,x:i.pos.x,y:i.pos.y,z:i.pos.z,yaw:i.yaw,health:i.health};return i.kind==="chicken"&&(t.egg=i.eggTimer),t}function _d(i){const t=Pa(i.kind,i.x,i.y,i.z);return t.yaw=i.yaw,t.health=i.health,i.egg!==void 0&&(t.eggTimer=i.egg),t}function Lw(i,t,e){if(e)return!1;const n=Math.floor(i.pos.x),s=Math.floor(i.pos.z),o=Math.floor(i.pos.y+vi[i.kind].height);for(let r=Math.floor(i.pos.y);r<=o;r++)if(yn(t.getBlock(n,r,s)))return!1;for(let r=o+1;r<me;r++){const a=t.getBlock(n,r,s);if(be(a)||yn(a))return!1}return!0}const Fi=64,Xt={head:{u:0,v:0,x:8,y:8,z:8},snout:{u:32,v:0,x:4,y:3,z:6},animalBody:{u:0,v:16,x:12,y:8,z:8},humanBody:{u:0,v:16,x:4,y:12,z:8},leg:{u:0,v:36,x:4,y:12,z:4},arm:{u:16,v:36,x:4,y:12,z:4},wing:{u:32,v:16,x:8,y:6,z:2},tail:{u:32,v:36,x:2,y:8,z:2}};function ui(i,t){const{u:e,v:n,x:s,y:o,z:r}=i;switch(t){case"top":return{x:e+r,y:n,w:s,h:r};case"bottom":return{x:e+r+s,y:n,w:s,h:r};case"right":return{x:e,y:n+r,w:r,h:o};case"front":return{x:e+r,y:n+r,w:s,h:o};case"left":return{x:e+r+s,y:n+r,w:r,h:o};case"back":return{x:e+r+s+r,y:n+r,w:s,h:o}}}const xd=new Map;function kw(i){let t=i%2147483647;return t<=0&&(t+=2147483646),()=>(t=t*16807%2147483647)/2147483647}function Iw(i){const t=Number.parseInt(i.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function Co(i,t){const[e,n,s]=Iw(i),o=r=>Math.max(0,Math.min(255,Math.round(r*t))).toString(16).padStart(2,"0");return`#${o(e)}${o(n)}${o(s)}`}function Uw(i,t,e){i.fillStyle=t,i.fillRect(e.x,e.y,e.w,e.h)}function Mn(i,t,e,n,s=1,o=1){i.fillStyle=t,i.fillRect(Math.round(e),Math.round(n),Math.round(s),Math.round(o))}function he(i,t,e,n,s){const o={top:1.08,bottom:.62,right:.96,front:.88,left:.78,back:.83},r=kw(s),a=["right","front","left","back","top","bottom"];for(const l of a){const c=ui(t,l);Uw(i,Co(e,o[l]),c);const h=Math.max(2,Math.floor(c.w*c.h/12));for(let u=0;u<h;u++)Mn(i,Co(n,o[l]),c.x+Math.floor(r()*c.w),c.y+Math.floor(r()*c.h))}}function ae(i,t,e,n,s,o,r=1,a=1){const l=ui(t,e);Mn(i,n,l.x+s,l.y+o,r,a)}function Nw(i,t){const e=Xt.head,n=Xt.animalBody,s=Xt.leg,o=Xt.snout;if(t==="pig")he(i,e,"#e7a39d","#f0b2ab",11),he(i,n,"#e5a09a","#d98e8b",12),he(i,s,"#dc9692","#c97f7d",13),he(i,o,"#d88b8b","#efaaa4",14),ae(i,e,"right","#202020",1,2,2,2),ae(i,e,"right","#202020",5,2,2,2),ae(i,o,"right","#7c4d55",1,1),ae(i,o,"right","#7c4d55",4,1);else if(t==="cow"){he(i,e,"#554033","#382b23",21),he(i,n,"#594435","#3f3026",22),he(i,s,"#4c382c","#2f241d",23),he(i,o,"#b9a28e","#8e7663",24);for(const r of["right","front","left","back","top"]){const a=ui(n,r);Mn(i,"#e7ddcd",a.x+1,a.y+1,Math.max(2,Math.floor(a.w/3)),Math.max(2,Math.floor(a.h/2))),Mn(i,"#e7ddcd",a.x+Math.max(1,a.w-4),a.y+Math.max(1,a.h-3),3,2)}ae(i,e,"right","#f0e7d9",0,0,3,5),ae(i,e,"right","#171717",1,2,2,2),ae(i,e,"right","#171717",5,2,2,2),ae(i,o,"right","#4b3834",1,1),ae(i,o,"right","#4b3834",4,1)}else if(t==="sheep"){he(i,e,"#4a433d","#625950",31),he(i,n,"#ece9e1","#d7d3c9",32),he(i,s,"#4a433d","#312d29",33);for(const r of["front","back","top","right","left"]){const a=ui(n,r);for(let l=0;l<a.h;l+=3)for(let c=l/3%2;c<a.w;c+=3)Mn(i,"#f8f6ef",a.x+c,a.y+l,2,2)}ae(i,e,"right","#ece9e1",0,0,8,2),ae(i,e,"right","#171717",1,3,2,2),ae(i,e,"right","#171717",5,3,2,2)}else he(i,e,"#f1f1ef","#d9d9d6",41),he(i,n,"#eeeeeb","#d6d6d2",42),he(i,s,"#d99020","#a96917",43),he(i,Xt.wing,"#f7f7f5","#d4d4d0",44),ae(i,e,"right","#151515",1,2,2,2),ae(i,e,"right","#151515",5,2,2,2),ae(i,e,"right","#ffffff",1,2),ae(i,e,"right","#ffffff",5,2)}function Fw(i,t){const e=Xt.head,n=Xt.humanBody,s=Xt.arm,o=Xt.leg;if(t==="skeleton"){he(i,e,"#dcdcd0","#bcbcaf",71),he(i,n,"#d8d8cc","#9f9f91",72),he(i,s,"#d6d6ca","#a5a598",73),he(i,o,"#d6d6ca","#a5a598",74),ae(i,e,"right","#1b1b1b",1,2,2,2),ae(i,e,"right","#1b1b1b",5,2,2,2),ae(i,e,"right","#77776d",3,4,2,1),ae(i,e,"right","#77776d",1,6,6,1);const p=ui(n,"right");Mn(i,"#9b9b8e",p.x+3,p.y+1,2,10);for(const g of[2,5,8])Mn(i,"#85857a",p.x,p.y+g,3,1),Mn(i,"#85857a",p.x+5,p.y+g,3,1);return}const r=t==="husk",a=r?"#b29a5e":"#568746",l=r?"#8f783f":"#3f6e37",c=r?"#b9a66d":"#2f6a69",h=r?"#8c7645":"#244f50",u=r?"#66542e":"#2d3158";he(i,e,a,l,r?67:61),he(i,n,c,h,r?68:62),he(i,s,c,a,r?69:63),he(i,o,u,Co(u,.75),r?70:64);for(const p of["right","front","left","back"]){const g=ui(s,p);Mn(i,Co(a,p==="left"?.8:.95),g.x,g.y+7,g.w,5)}ae(i,e,"right","#242022",1,2,2,1),ae(i,e,"right","#242022",5,2,2,1),ae(i,e,"right",r?"#5e4724":"#31562c",2,6,4,1);const d=ui(n,"right");Mn(i,l,d.x+1,d.y+7,2,3),Mn(i,Co(c,.72),d.x+5,d.y+10,3,2)}function Ow(i){const t=Xt.head,e=Xt.humanBody;he(i,t,"#5d9f43","#407c31",81),he(i,e,"#5a9840","#3d762e",82),he(i,Xt.leg,"#4d8937","#326628",83),ae(i,t,"right","#101010",1,2,2,2),ae(i,t,"right","#101010",5,2,2,2),ae(i,t,"right","#101010",3,4,2,2),ae(i,t,"right","#101010",2,6,2,2),ae(i,t,"right","#101010",4,6,2,2)}function Bw(i,t){t.clearRect(0,0,Fi,Fi),t.imageSmoothingEnabled=!1,i==="pig"||i==="cow"||i==="sheep"||i==="chicken"?Nw(t,i):i==="creeper"?Ow(t):Fw(t,i)}function zw(i){const t=xd.get(i);if(t)return t;const e=document.createElement("canvas");e.width=e.height=Fi;const n=e.getContext("2d");n&&Bw(i,n);const s=new Wi(e);return s.magFilter=le,s.minFilter=le,s.generateMipmaps=!1,s.colorSpace=Qt,xd.set(i,s),s}function Hw(i,t=30){if(i<=0)return{whiteness:0,swell:1};const e=Math.min(1,i/t+.3*Math.abs(Math.sin(i*.7)));return{whiteness:e,swell:1+.5*e}}const Gw=[.8,.8,1,.42,.8,.8],Vw=3.4,yd=["right","left","top","bottom","front","back"];function Ww(i,t,e,n,s){const o=new je(i,t,e),r=new Mt(n),a=[];for(let l=0;l<6;l++){const c=Gw[l];for(let h=0;h<4;h++)a.push(r.r*c,r.g*c,r.b*c)}if(o.setAttribute("color",new Ae(a,3)),s){const l=o.attributes.uv;for(let c=0;c<yd.length;c++){const h=ui(s,yd[c]),u=h.x/Fi,d=(h.x+h.w)/Fi,p=1-(h.y+h.h)/Fi,g=1-h.y/Fi,v=c*4;l.setXY(v,u,g),l.setXY(v+1,d,g),l.setXY(v+2,u,p),l.setXY(v+3,d,p)}l.needsUpdate=!0}return o}function pa(i,t,e,n,s,o,r,a,l,c){const h=new Kt(Ww(e,n,s,o,c),t);return h.position.set(r,a,l),i.add(h),h}function si(i,t,e,n,s,o,r){const a=new rn;a.position.set(n,o,s),pa(a,t,r,o,r,16777215,0,-o/2,0,Xt.leg),i.add(a),e.push(a)}function vs(i,t,e,n,s,o,r,a,l=0){const c=new rn;return c.position.set(n,s,o),c.rotation.z=l,pa(c,t,a,r,a,16777215,0,-r/2,0,Xt.arm),i.add(c),e.push(c),c}function Xw(i){const t=new rn,e=[],n=[],s=new pe({vertexColors:!0}),o=new pe({map:zw(i),vertexColors:!0}),r=[s,o],a=(v,f,m,y,x,E,k)=>pa(t,s,v,f,m,y,x,E,k),l=(v,f,m,y,x,E,k)=>pa(t,o,f,m,y,16777215,x,E,k,v);let c,h;if(i==="pig"){l(Xt.animalBody,.9,.5,.6,0,.26+.25,0),c=l(Xt.head,.44,.44,.5,.55,.26+.28,0),l(Xt.snout,.16,.15,.3,.79,.26+.2,0),a(.14,.12,.04,14257292,.5,.26+.52,.2),a(.14,.12,.04,14257292,.5,.26+.52,-.2),h=l(Xt.tail,.1,.14,.1,-.47,.26+.36,0);for(const[f,m]of[[.3,.2],[.3,-.2],[-.32,.2],[-.32,-.2]])si(t,o,e,f,m,.26,.16)}else if(i==="cow"){l(Xt.animalBody,1,.6,.62,0,.52+.3,0),c=l(Xt.head,.45,.48,.52,.6,.52+.4,0),l(Xt.snout,.18,.2,.42,.86,.52+.28,0),a(.09,.14,.09,14471352,.61,.52+.7,.2),a(.09,.14,.09,14471352,.61,.52+.7,-.2),a(.16,.1,.34,15709892,-.18,.52-.02,0),h=l(Xt.tail,.1,.32,.1,-.51,.52+.38,0);for(const[m,y]of[[.34,.21],[.34,-.21],[-.34,.21],[-.34,-.21]])si(t,o,e,m,y,.52,.18)}else if(i==="sheep"){l(Xt.animalBody,.94,.7,.76,0,.46+.36,0),a(.5,.34,.42,15526627,.4,.46+.6,0),c=l(Xt.head,.3,.38,.36,.57,.46+.38,0),a(.1,.1,.04,4669498,.52,.46+.56,.18),a(.1,.1,.04,4669498,.52,.46+.56,-.18);for(const[y,x]of[[.28,.22],[.28,-.22],[-.3,.22],[-.3,-.22]])si(t,o,e,y,x,.46,.15)}else if(i==="zombie"){l(Xt.humanBody,.28,.66,.5,0,.82+.33,0),c=l(Xt.head,.44,.44,.44,0,.82+.88,0),vs(t,o,n,.08,.82+.63,.35,.62,.18,1.28),vs(t,o,n,.08,.82+.63,-.35,.62,.18,1.28);for(const[,f]of[[0,.12],[0,-.12]])si(t,o,e,0,f,.82,.2)}else if(i==="skeleton"){l(Xt.humanBody,.2,.62,.34,0,.84+.31,0),c=l(Xt.head,.42,.42,.42,0,.84+.81,0),vs(t,o,n,.04,.84+.58,.24,.58,.11,1.18),vs(t,o,n,0,.84+.58,-.24,.58,.11,.12);const f=7031339;a(.06,.62,.06,f,.52,.84+.32,.16),a(.06,.14,.06,f,.47,.84+.62,.16),a(.06,.14,.06,f,.47,.84+.02,.16),a(.02,.6,.02,15394520,.55,.84+.32,.16);for(const[,m]of[[0,.1],[0,-.1]])si(t,o,e,0,m,.84,.12)}else if(i==="husk"){l(Xt.humanBody,.28,.66,.5,0,.82+.33,0),c=l(Xt.head,.44,.44,.44,0,.82+.88,0),vs(t,o,n,.08,.82+.63,.35,.62,.18,1.28),vs(t,o,n,.08,.82+.63,-.35,.62,.18,1.28);for(const[,f]of[[0,.12],[0,-.12]])si(t,o,e,0,f,.82,.2)}else if(i==="creeper"){l(Xt.humanBody,.34,.82,.5,0,.36+.5,0),c=l(Xt.head,.48,.48,.48,0,.36+1.12,0);for(const[f,m]of[[.16,.13],[.16,-.13],[-.16,.13],[-.16,-.13]])si(t,o,e,f,m,.36,.16)}else{l(Xt.animalBody,.34,.34,.3,-.02,.22+.17,0),l(Xt.wing,.32,.24,.06,-.18,.22+.2,.17),l(Xt.wing,.32,.24,.06,-.18,.22+.2,-.17),h=l(Xt.tail,.18,.26,.16,-.34,.22+.34,0),c=l(Xt.head,.22,.24,.2,.2,.22+.4,0),a(.13,.08,.1,15176991,.36,.22+.4,0),a(.05,.1,.14,13384496,.18,.22+.55,0),a(.06,.08,.06,13384496,.32,.22+.32,0);for(const[y,x]of[[.06,.09],[.06,-.09]])si(t,o,e,y,x,.22,.07)}const u=.9+Math.random()*.22;t.scale.setScalar(u);const d=.9+Math.random()*.16,p=(Math.random()-.5)*.06,g=new Mt(Math.min(1,d+p),d,Math.max(0,d-p));return{group:t,legs:e,arms:n,mats:r,base:g,head:c,tail:h,headY:c?c.position.y:0}}const qw=new Mt(16734810),Yw=new Mt(1,1,1);function Md(i){i.group.traverse(t=>{t instanceof Kt&&t.geometry.dispose()});for(const t of i.mats)t.dispose()}class $w{constructor(t){_(this,"models",new Map);this.scene=t}sync(t,e,n){const s=new Set(t);for(const[o,r]of this.models)s.has(o)||(this.scene.remove(r.group),Md(r),this.models.delete(o));for(const o of t){let r=this.models.get(o);if(!r){const g=Xw(o.kind);this.scene.add(g.group),r={...g,phase:0,t:Math.random()*10,baseScale:g.group.scale.x,bright:1,dispYaw:o.yaw,swingAmt:0},this.models.set(o,r)}r.t+=e;let a=-o.yaw-r.dispYaw;a=((a+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,r.dispYaw+=a*Math.min(1,e*10),r.group.rotation.y=r.dispYaw,r.group.rotation.z=Math.max(-.18,Math.min(.22,-o.vel.y*2.2));const l=n?n(o.pos.x,o.pos.y+.6,o.pos.z):1;r.bright+=(l-r.bright)*Math.min(1,e*10);const c=o.hurtCooldown>0?qw:r.base;for(const g of r.mats)g.color.copy(c).multiplyScalar(r.bright);const h=Hw(o.kind==="creeper"?o.fuse:0);if(h.whiteness>0){const g=c.clone().lerp(Yw,h.whiteness);for(const v of r.mats)v.color.copy(g).multiplyScalar(r.bright)}r.group.scale.setScalar(r.baseScale*h.swell);const u=Math.hypot(o.vel.x,o.vel.z),d=u>.002;d&&(r.phase+=u*20*e*Vw),r.swingAmt+=((d?1:0)-r.swingAmt)*Math.min(1,e*8);const p=Math.sin(r.phase)*.6*r.swingAmt;if(r.legs.forEach((g,v)=>g.rotation.z=v%2===0?p:-p),o.kind==="zombie"||o.kind==="husk"?r.arms.forEach((g,v)=>g.rotation.z=1.28+(v?-1:1)*Math.sin(r.phase)*.08*r.swingAmt):o.kind==="skeleton"&&(r.arms[0]&&(r.arms[0].rotation.z=1.18+Math.sin(r.phase)*.06*r.swingAmt),r.arms[1]&&(r.arms[1].rotation.z=.12-p*.45)),r.group.position.set(o.pos.x,o.pos.y+Math.abs(Math.sin(r.phase))*.035*r.swingAmt,o.pos.z),r.head)if(d)r.head.position.y=r.headY+Math.sin(r.phase*2)*.015,r.head.rotation.z=Math.sin(r.phase)*.05;else if(o.kind==="chicken"){const g=Math.max(0,Math.sin(r.t*1.6));r.head.rotation.z=-g*.5,r.head.position.y=r.headY-g*.04}else r.head.position.y=r.headY+Math.sin(r.t*1.4)*.012,r.head.rotation.z=0,r.head.rotation.y=Math.sin(r.t*.55)*.4*(1-r.swingAmt);r.tail&&(r.tail.rotation.z=Math.sin(r.t*4+r.phase)*.3)}}clear(){for(const[,t]of this.models)this.scene.remove(t.group),Md(t);this.models.clear()}}const Ri=8,Sd=1,Ul=4,kr=[[1,0],[-1,0],[0,1],[0,-1]],Nl={amount:0,source:!1,falling:!1},mo=(i,t,e)=>`${i},${t},${e}`;class Kw{constructor(t=4e3){_(this,"active",new Set);_(this,"maxPerTick");this.maxPerTick=t}get activeCount(){return this.active.size}activate(t,e,n){this.active.add(mo(t,e,n));for(const[s,o]of kr)this.active.add(mo(t+s,e,n+o));this.active.add(mo(t,e+1,n)),this.active.add(mo(t,e-1,n))}tick(t){if(this.active.size===0)return;const e=[...this.active];this.active.clear();const n=new Map,s=(r,a,l,c)=>{const h=mo(r,a,l),u=n.get(h);(!u||c.amount>u.c.amount||c.amount===u.c.amount&&c.source&&!u.c.source)&&n.set(h,{x:r,y:a,z:l,c})};let o=this.maxPerTick;for(const r of e){if(o--<=0){this.active.add(r);continue}const[a,l,c]=r.split(",").map(Number);this.evaluate(t,a,l,c,s)}for(const{x:r,y:a,z:l,c}of n.values())(c.amount!==t.amount(r,a,l)||c.source!==t.isSource(r,a,l)||c.falling!==t.isFalling(r,a,l))&&(t.setWater(r,a,l,c.amount,c.source,c.falling),this.activate(r,a,l))}evaluate(t,e,n,s,o){if(t.isSolid(e,n,s)){t.amount(e,n,s)>0&&o(e,n,s,Nl);return}if(!(t.amount(e,n,s)>0||t.isSource(e,n,s)))return;if(t.amount(e,n,s)>0&&!t.isSource(e,n,s)){const l=[[e+1,n,s],[e-1,n,s],[e,n,s+1],[e,n,s-1],[e,n+1,s],[e,n-1,s]];for(const[c,h,u]of l)if(t.getBlock(c,h,u)===23){t.setBlock(c,h,u,18),o(e,n,s,Nl);return}}const a=t.isSource(e,n,s)?{amount:Ri,source:!0,falling:!1}:this.getNewLiquid(t,e,n,s);o(e,n,s,a),a.amount>0&&this.spread(t,e,n,s,a,o)}getNewLiquid(t,e,n,s){if(t.amount(e,n+1,s)>0)return{amount:Ri,source:!1,falling:!0};let o=0,r=0;for(const[l,c]of kr){const h=t.amount(e+l,n,s+c);h>0&&(h>o&&(o=h),t.isSource(e+l,n,s+c)&&r++)}if(r>=2&&(t.isSolid(e,n-1,s)||t.isSource(e,n-1,s)))return{amount:Ri,source:!0,falling:!1};const a=o-Sd;return a>0?{amount:a,source:!1,falling:!1}:Nl}spread(t,e,n,s,o,r){const a=n-1,l=t.amount(e,a,s)===Ri&&!t.isFalling(e,a,s);if(!t.isSolid(e,a,s)&&!l){(t.getBlock(e,a,s)===0||t.amount(e,a,s)>0)&&r(e,a,s,{amount:Ri,source:!1,falling:!0});return}if(!o.source&&!t.isSolid(e,a,s))return;const c=o.source?Ri:o.amount,h=c-Sd;if(!(h<1))for(const[u,d]of this.getSpreadDirs(t,e,n,s,c)){const p=e+u,g=s+d;t.isSolid(p,n,g)||t.isSource(p,n,g)||t.getBlock(p,n,g)!==0&&t.amount(p,n,g)===0||t.amount(p,n,g)>=h||r(p,n,g,{amount:h,source:!1,falling:!1})}}getSpreadDirs(t,e,n,s,o){let r=Ul+1;const a=[];for(const l of kr){const c=e+l[0],h=s+l[1];if(t.isSolid(c,n,h)||t.amount(c,n,h)>=o)continue;const u=this.isHole(t,c,n,h)?0:this.slopeDistance(t,c,n,h,1,[-l[0],-l[1]]);u<r?(r=u,a.length=0,a.push(l)):u===r&&a.push(l)}return a}isHole(t,e,n,s){return!t.isSolid(e,n-1,s)&&t.amount(e,n-1,s)<Ri}slopeDistance(t,e,n,s,o,r){let a=Ul;for(const l of kr){if(l[0]===r[0]&&l[1]===r[1])continue;const c=e+l[0],h=s+l[1];if(!t.isSolid(c,n,h)){if(this.isHole(t,c,n,h))return o;if(o<Ul){const u=this.slopeDistance(t,c,n,h,o+1,[-l[0],-l[1]]);u<a&&(a=u)}}}return a}}function jw(i,t,e=240){let n=0;for(;i.activeCount>0&&n<e;)i.tick(t),n++;return n}function wd(i,t,e){let n=0;for(let s=e.minY;s<=e.maxY;s++)for(let o=e.minX;o<=e.maxX;o++)for(let r=e.minZ;r<=e.maxZ;r++)t.isWater(o,s,r)&&(t.isAir(o,s-1,r)||t.isAir(o+1,s,r)||t.isAir(o-1,s,r)||t.isAir(o,s,r+1)||t.isAir(o,s,r-1))&&(i.activate(o,s,r),n++);return n}function Zw(i,t,e,n){const s=[];for(let o=i-e;o<=i+e;o++)for(let r=t-e;r<=t+e;r++){const a=`${o},${r}`;if(n.has(a))continue;const l=o-i,c=r-t;s.push({key:a,d:l*l+c*c})}return s.sort((o,r)=>o.d-r.d),s.map(o=>o.key)}const Qw=9,Jw=27,Zp=Qw+Jw,Qp=64;function Bc(){return Array.from({length:Zp},()=>null)}function Ws(i,t,e,n=Qp,s=0,o=i.length){for(let r=s;r<o&&e>0;r++){const a=i[r];if(a&&a.id===t&&a.count<n){const l=Math.min(n-a.count,e);a.count+=l,e-=l}}for(let r=s;r<o&&e>0;r++)if(!i[r]){const a=Math.min(n,e);i[r]={id:t,count:a},e-=a}return e}function tb(i,t,e){for(let n=0;n<i.length;n++)if(!i[n])return i[n]={id:t,count:1,dur:e},!0;return!1}function bd(i,t){let e=0;for(const n of i)n&&n.id===t&&(e+=n.count);return e}function eb(i,t,e){let n=e;for(let s=0;s<i.length&&n>0;s++){const o=i[s];if(o&&o.id===t){const r=Math.min(o.count,n);o.count-=r,n-=r,o.count<=0&&(i[s]=null)}}return e-n}function Ed(i,t){const e=i[t];if(!e||e.count<=0)return null;e.count--;const n=e.id;return e.count<=0&&(i[t]=null),n}function nb(i){return i.map(t=>t?{id:t.id,count:t.count,dur:t.dur}:null)}function ib(i){const t=Bc();if(!Array.isArray(i))return t;for(let e=0;e<Zp;e++){const n=i[e];if(n&&typeof n.id=="number"&&typeof n.count=="number"&&n.count>0){const s={id:n.id,count:Math.min(Qp,n.count)};typeof n.dur=="number"&&(s.dur=n.dur),t[e]=s}}return t}function Td(i,t,e){const n=i[t];if(!n)return!1;const s=(n.dur??e)-1;return s<=0?(i[t]=null,!0):(n.dur=s,!1)}const nn=new Set,sb=300;let hc=-1/0,Da=!1,ma=!1;window.addEventListener("keydown",i=>{if(i.code==="KeyW"&&!nn.has("KeyW")){const t=performance.now();t-hc<sb&&(Da=!0),hc=t}i.code==="Space"&&!nn.has("Space")&&(ma=!0),nn.add(i.code)});window.addEventListener("keyup",i=>{nn.delete(i.code),i.code==="KeyW"&&(Da=!1)});function Jp(){nn.clear(),Da=!1,ma=!1,hc=-1/0}window.addEventListener("blur",Jp);document.addEventListener("visibilitychange",()=>{document.hidden&&Jp()});function ob(){let i=0,t=0;nn.has("KeyW")&&(i+=1),nn.has("KeyS")&&(i-=1),nn.has("KeyD")&&(t+=1),nn.has("KeyA")&&(t-=1);const e=nn.has("ShiftLeft")||nn.has("ShiftRight")||nn.has("KeyC");return{forward:i,right:t,sprint:Da&&i>0&&!e,jumpHeld:nn.has("Space"),crouch:e}}function rb(){const i=ma;return ma=!1,i}const Ad=.0025,Rd=1.55;class ab{constructor(t,e=!0){_(this,"yaw",0);_(this,"pitch",0);e&&t.addEventListener("click",()=>void t.requestPointerLock()),document.addEventListener("mousemove",n=>{document.pointerLockElement===t&&this.rotate(n.movementX*Ad,-n.movementY*Ad)})}rotate(t,e){this.yaw+=t,this.pitch=Math.max(-Rd,Math.min(Rd,this.pitch+e))}}const Cd=.006,lb=320,tm=380,cb=8,Ir=96,hb=.2,Pd=1+Math.SQRT2;function ub(i,t){if(Math.hypot(i,t)<hb)return{forward:0,right:0};const n=Math.abs(i),s=Math.abs(t);return s>n*Pd?{forward:t<0?1:-1,right:0}:n>s*Pd?{forward:0,right:i>0?1:-1}:{forward:t<0?1:-1,right:i>0?1:-1}}function db(i,t){return t-i>=0&&t-i<=lb}function fb(i,t,e,n){return Math.hypot(e-i,n-t)>=cb}function pb(i,t,e=!1,n=0){return e?"none":t?"hold-end":i?"none":n>=tm?"hold-end":"tap"}function em(){return new URLSearchParams(window.location.search).get("touch")==="1"?!0:navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches}let Dd=!1;function mb(){if(Dd)return;Dd=!0;const i=o=>o.preventDefault();document.addEventListener("gesturestart",i,{passive:!1}),document.addEventListener("gesturechange",i,{passive:!1}),document.addEventListener("gestureend",i,{passive:!1}),document.addEventListener("dblclick",i,{passive:!1}),document.addEventListener("touchmove",o=>{o.touches.length>1&&o.preventDefault()},{passive:!1});let t=-1/0,e=null,n=0,s=0;document.addEventListener("touchend",o=>{const r=performance.now(),a=o.changedTouches[0],l=a!==void 0&&Math.hypot(a.clientX-n,a.clientY-s)<28;r-t<320&&o.target===e&&l&&o.preventDefault(),t=r,e=o.target,a&&(n=a.clientX,s=a.clientY)},{passive:!1})}class gb{constructor(t,e){_(this,"root");_(this,"actions");_(this,"lookPointer",null);_(this,"lookPoint",null);_(this,"lookStartedAt",0);_(this,"lookGesture",0);_(this,"lookStartX",0);_(this,"lookStartY",0);_(this,"lookX",0);_(this,"lookY",0);_(this,"lookDragging",!1);_(this,"lookHoldStarted",!1);_(this,"lookHoldTimer",null);_(this,"releaseLookCapture",null);_(this,"dpadPointer",null);_(this,"forward",0);_(this,"right",0);_(this,"lastForwardPress",-1/0);_(this,"sprinting",!1);_(this,"jumpHeld",!1);_(this,"crouchHeld",!1);_(this,"pendingJump",!1);_(this,"active",!1);_(this,"releaseHolds",[]);this.root=t,this.actions=e;const n=t.querySelector(".touch-look");n.addEventListener("pointerdown",l=>{if(!this.active||(l.preventDefault(),this.lookPointer!==null))return;this.lookPointer=l.pointerId,this.lookPoint={x:l.clientX,y:l.clientY},this.lookStartedAt=performance.now();const c=++this.lookGesture;this.lookStartX=l.clientX,this.lookStartY=l.clientY,this.lookX=l.clientX,this.lookY=l.clientY,this.lookDragging=!1,this.lookHoldStarted=!1,this.capturePointer(n,l.pointerId),this.lookHoldTimer=window.setTimeout(()=>{if(this.lookHoldTimer=null,this.lookPointer!==l.pointerId||this.lookGesture!==c||this.lookDragging||!this.active)return;const h=this.lookPoint;h!==null&&(this.lookHoldStarted=!0,this.actions.interactHoldStart(h))},tm)});const s=l=>{if(l.pointerId!==this.lookPointer)return;l.preventDefault();const c=typeof l.getCoalescedEvents=="function"?l.getCoalescedEvents():[],h=c.length>0?c:[l];for(const u of h)this.moveLookTo(u.clientX,u.clientY)},o=(l,c)=>{const h=this.lookPointer,u=this.lookPoint;if(h===null||u===null)return;!l&&c&&this.moveLookTo(c.x,c.y);const d=this.lookHoldStarted,p=pb(this.lookDragging,d,l,performance.now()-this.lookStartedAt);this.clearLookHoldTimer(),this.lookPointer=null,this.lookPoint=null,this.lookStartedAt=0,this.lookDragging=!1,this.lookHoldStarted=!1,this.releasePointerCapture(n,h),p==="tap"?this.actions.interactTap(u):p==="hold-end"?(d||this.actions.interactHoldStart(u),this.actions.interactHoldEnd(u)):d&&this.actions.interactHoldCancel(u)};this.releaseLookCapture=()=>o(!0);const r=l=>{l.pointerId===this.lookPointer&&(l.preventDefault(),o(!1,{x:l.clientX,y:l.clientY}))},a=l=>{l.pointerId===this.lookPointer&&(l.preventDefault(),o(!0))};window.addEventListener("pointermove",s),window.addEventListener("pointerup",r),window.addEventListener("pointercancel",a),n.addEventListener("lostpointercapture",a),this.bindSlidingDpad(t.querySelector("#touch-dpad")),this.bindHold("touch-jump",()=>{this.jumpHeld||(this.pendingJump=!0),this.jumpHeld=!0},()=>this.jumpHeld=!1),this.bindHold("touch-crouch",()=>this.crouchHeld=!0,()=>this.crouchHeld=!1),this.bindTap("touch-inventory",()=>this.actions.inventory()),this.bindTap("touch-pause",()=>this.actions.pause()),window.addEventListener("blur",()=>this.reset()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.reset()}),window.addEventListener("pagehide",()=>this.reset())}setActive(t){this.active=t,this.root.classList.toggle("active",t),this.root.setAttribute("aria-hidden",String(!t)),t||this.reset()}get isActive(){return this.active}readMove(){return{forward:this.forward,right:this.right,sprint:this.sprinting&&this.forward>0&&!this.crouchHeld,jumpHeld:this.jumpHeld,crouch:this.crouchHeld}}consumeJump(){const t=this.pendingJump;return this.pendingJump=!1,t}moveLookTo(t,e){if(this.lookPoint===null)return;if(!this.lookDragging&&fb(this.lookStartX,this.lookStartY,t,e)){this.lookDragging=!0,this.clearLookHoldTimer(),this.lookX=t,this.lookY=e;return}if(!this.lookDragging)return;const s=Math.max(-Ir,Math.min(Ir,t-this.lookX)),o=Math.max(-Ir,Math.min(Ir,e-this.lookY));this.lookX=t,this.lookY=e,this.actions.look(s*Cd,-o*Cd)}bindSlidingDpad(t){const e=(r,a)=>this.updateSlidingDpad(t,r,a),n=()=>{const r=this.dpadPointer;r!==null&&(this.dpadPointer=null,this.setMoveAxes(t,{forward:0,right:0}),t.style.setProperty("--touch-dpad-stick-x","0px"),t.style.setProperty("--touch-dpad-stick-y","0px"),t.dataset.moving="false",this.releasePointerCapture(t,r))};t.addEventListener("pointerdown",r=>{!this.active||this.dpadPointer!==null||(r.preventDefault(),r.stopPropagation(),this.dpadPointer=r.pointerId,this.capturePointer(t,r.pointerId),e(r.clientX,r.clientY))});const s=r=>{r.pointerId===this.dpadPointer&&(r.preventDefault(),e(r.clientX,r.clientY))},o=r=>{r.pointerId===this.dpadPointer&&(r.preventDefault(),n())};window.addEventListener("pointermove",s),window.addEventListener("pointerup",o),window.addEventListener("pointercancel",o),t.addEventListener("lostpointercapture",o),this.releaseHolds.push(n)}updateSlidingDpad(t,e,n){const s=t.getBoundingClientRect(),o=Math.max(1,Math.min(s.width,s.height)/2),r=(e-(s.left+s.width/2))/o,a=(n-(s.top+s.height/2))/o,l=ub(r,a);this.setMoveAxes(t,l);const c=Math.hypot(r,a),h=c>0?Math.min(1,c)/c:0,u=o*.42;t.style.setProperty("--touch-dpad-stick-x",`${Math.round(r*h*u)}px`),t.style.setProperty("--touch-dpad-stick-y",`${Math.round(a*h*u)}px`),t.dataset.moving=String(l.forward!==0||l.right!==0)}setMoveAxes(t,e){if(e.forward>0&&this.forward<=0){const n=performance.now();db(this.lastForwardPress,n)&&(this.sprinting=!0),this.lastForwardPress=n}e.forward<=0&&(this.sprinting=!1),this.forward=e.forward,this.right=e.right,t.dataset.forward=String(e.forward),t.dataset.right=String(e.right)}releasePointerCapture(t,e){if(t.hasPointerCapture(e))try{t.releasePointerCapture(e)}catch{}}capturePointer(t,e){try{t.setPointerCapture(e)}catch{}}clearLookHoldTimer(){this.lookHoldTimer!==null&&(window.clearTimeout(this.lookHoldTimer),this.lookHoldTimer=null)}bindHold(t,e,n,s=n){const o=document.getElementById(t);let r=null;o.addEventListener("pointerdown",h=>{!this.active||r!==null||(h.preventDefault(),h.stopPropagation(),r=h.pointerId,this.capturePointer(o,h.pointerId),o.classList.add("pressed"),e())});const a=h=>{const u=r;u!==null&&(r=null,o.classList.remove("pressed"),h(),this.releasePointerCapture(o,u))},l=h=>{h.pointerId===r&&a(n)},c=h=>{h.pointerId===r&&a(s)};o.addEventListener("pointerup",l),o.addEventListener("pointercancel",c),o.addEventListener("lostpointercapture",c),this.releaseHolds.push(()=>a(s))}bindTap(t,e){const n=document.getElementById(t);n.addEventListener("pointerdown",s=>{this.active&&(s.preventDefault(),s.stopPropagation(),n.classList.add("pressed"),window.setTimeout(()=>n.classList.remove("pressed"),100),e())})}reset(){var t;(t=this.releaseLookCapture)==null||t.call(this);for(const e of this.releaseHolds)e();this.dpadPointer=null,this.forward=0,this.right=0,this.lastForwardPress=-1/0,this.sprinting=!1,this.jumpHeld=!1,this.crouchHeld=!1,this.pendingJump=!1}}class vb{constructor(t,e=9){_(this,"icons",[]);_(this,"counts",[]);_(this,"cells",[]);_(this,"durTracks",[]);_(this,"durFills",[]);_(this,"selected",0);_(this,"size");this.size=e,t.innerHTML="";for(let n=0;n<e;n++){const s=document.createElement("div");s.className="hotbar-slot",s.style.position="relative";const o=document.createElement("div");o.className="hotbar-icon";const r=document.createElement("div");r.className="hotbar-count";const a=document.createElement("div");a.style.cssText="position:absolute;left:12%;right:12%;bottom:9%;height:3px;background:rgba(0,0,0,.55);border-radius:1px;display:none;overflow:hidden;";const l=document.createElement("div");l.style.cssText="height:100%;width:100%;",a.appendChild(l),s.append(o,r,a),s.addEventListener("pointerdown",c=>{c.pointerType!=="mouse"&&(c.preventDefault(),c.stopPropagation(),this.setSelected(n))}),t.appendChild(s),this.cells.push(s),this.icons.push(o),this.counts.push(r),this.durTracks.push(a),this.durFills.push(l)}this.setSelected(0)}render(t){var e;for(let n=0;n<this.size;n++){const s=t[n]??null,o=this.icons[n],r=this.counts[n];if(s&&s.count>0){const l=zi(s.id);o.style.backgroundImage=l?`url(${l})`:"none",r.textContent=s.count>1?String(s.count):""}else o.style.backgroundImage="none",r.textContent="";const a=s&&s.count>0?(e=Ro(s.id))==null?void 0:e.maxDurability:void 0;if(s&&a&&(s.dur??a)<a){const l=Math.max(0,(s.dur??a)/a);this.durTracks[n].style.display="block",this.durFills[n].style.width=`${l*100}%`,this.durFills[n].style.background=`hsl(${Math.round(l*120)},85%,45%)`}else this.durTracks[n].style.display="none"}}setSelected(t){this.selected=(t%this.size+this.size)%this.size,this.cells.forEach((e,n)=>e.classList.toggle("selected",n===this.selected))}scroll(t){this.setSelected(this.selected+t)}get index(){return this.selected}}const wo=20,Us=20,zc=10,_b=7,xb=1,Ld=6,kd=80,yb=10,Mb=30,Sb=20;function Fl(){return{health:wo,food:Us,saturation:5,exhaustion:0,foodTimer:0,oxygen:zc,oxygenTimer:0}}function wb(i){return i.food>=_b}function Ii(i,t){i.exhaustion=Math.min(i.exhaustion+t,40)}function ga(i,t){i.health=Math.max(0,i.health-t)}function Ol(i){return i.health<=0}function bb(i,t){i.food=Math.min(Us,i.food+t.nutrition),i.saturation=Math.min(i.saturation+t.nutrition*t.saturationModifier*2,i.food)}function Eb(i){return Math.max(0,Math.ceil(i-3))}function Tb(i,t,e,n){return n?{fallDistance:0,damage:0}:e?{fallDistance:0,damage:Eb(i)}:{fallDistance:t<0?i-t:i,damage:0}}function Ab(i){i.exhaustion>4&&(i.exhaustion-=4,i.saturation>0?i.saturation=Math.max(0,i.saturation-1):i.food=Math.max(0,i.food-1)),i.food>=Us&&i.saturation>0&&i.health<wo?++i.foodTimer>=yb&&(i.health=Math.min(wo,i.health+1),Ii(i,Ld),i.foodTimer=0):i.food>=18&&i.health<wo?++i.foodTimer>=kd&&(i.health=Math.min(wo,i.health+1),Ii(i,Ld),i.foodTimer=0):i.food<=0?++i.foodTimer>=kd&&(i.health>xb&&ga(i,1),i.foodTimer=0):i.foodTimer=0}function Rb(i,t){if(!t){i.oxygen=zc,i.oxygenTimer=0;return}i.oxygenTimer++,i.oxygen>0?i.oxygenTimer>=Mb&&(i.oxygen=Math.max(0,i.oxygen-1),i.oxygenTimer=0):i.oxygenTimer>=Sb&&(ga(i,2),i.oxygenTimer=0)}const Id=i=>`url(${Js(`textures/ui/${i}.png`)})`;class Cb{constructor(t,e,n=10){_(this,"hearts");_(this,"foods");_(this,"bubbles",[]);_(this,"healthEl");_(this,"hungerEl");_(this,"oxygenEl");this.healthEl=t,this.hungerEl=e,this.oxygenEl=document.getElementById("oxygen"),this.hearts=this.build(t,n),this.foods=this.build(e,n),this.oxygenEl&&(this.bubbles=this.build(this.oxygenEl,n))}build(t,e){t.innerHTML="";const n=[];for(let s=0;s<e;s++){const o=document.createElement("div");o.className="hud-icon",t.appendChild(o),n.push(o)}return n}render(t){if(this.fill(this.hearts,t.health,"heart"),this.fill(this.foods,t.food,"food"),this.healthEl.classList.toggle("low",t.health<=4),this.hungerEl.classList.toggle("low",t.food<=4),this.oxygenEl){const e=t.oxygen<zc;if(this.oxygenEl.style.display=e?"flex":"none",e)for(let n=0;n<this.bubbles.length;n++)this.bubbles[n].style.backgroundImage=Id(t.oxygen>n?"bubble_full":"bubble_empty")}}fill(t,e,n){for(let s=0;s<t.length;s++){const o=e-s*2,r=o>=2?"full":o===1?"half":"empty";t[s].style.backgroundImage=Id(`${n}_${r}`)}}}function va(i,t,e,n){const s=i[t];if(!e)return i[t]=null,s;if(!s)return i[t]=e,null;if(s.id===e.id){const o=Math.max(0,n(s.id)-s.count),r=Math.min(o,e.count);return s.count+=r,e.count-=r,e.count>0?e:null}return i[t]=e,s}function _a(i,t,e,n){const s=i[t];if(!e){if(!s)return null;const o=Math.ceil(s.count/2),r=s.count-o;return i[t]=r>0?{id:s.id,count:r}:null,{id:s.id,count:o}}return s?s.id===e.id?s.count<n(s.id)?(s.count+=1,e.count-=1,e.count>0?e:null):e:(i[t]=e,s):(i[t]={id:e.id,count:1},e.count-=1,e.count>0?e:null)}function Bl(i,t,e,n,s=0,o=e.length){const r=i[t];if(!r)return;const a=Ws(e,r.id,r.count,n(r.id),s,o);i[t]=a>0?{id:r.id,count:a}:null}function Pb(i,t,e){if(!t)return t;const n=t.id,s=e(n),o=i.filter(c=>{const h=c.get();return!h||h.id===n&&h.count<s});if(o.length===0)return t;const r=Math.floor(t.count/o.length);if(r===0)return t;let a=0;for(const c of o){const h=c.get(),u=h?h.count:0,d=Math.min(r,s-u);d<=0||(c.set({id:n,count:u+d}),a+=d)}const l=t.count-a;return l>0?{id:n,count:l}:null}function Db(i,t,e){if(!t)return t;const n=t.id,s=e(n);let o=t.count;for(const r of i){if(o<=0)break;const a=r.get();a?a.id===n&&a.count<s&&(a.count+=1,o--):(r.set({id:n,count:1}),o--)}return o>0?{id:n,count:o}:null}const Ur=["PPP"," S "," S "],Nr=["PP","PS"," S"],Fr=["P","S","S"],Or=["P","P","S"],Br=["PP"," S"," S"];function we(i,t,e){return{type:"shaped",pattern:i,key:{P:t,S:"stick"},result:{item:e,count:1}}}const Lb=[{type:"shapeless",ingredients:["oak_log"],result:{item:"oak_planks",count:4}},{type:"shapeless",ingredients:["flint","iron_ingot"],result:{item:"flint_and_steel",count:1}},{type:"shaped",pattern:["#","#"],key:{"#":"oak_planks"},result:{item:"stick",count:4}},{type:"shaped",pattern:["##","##"],key:{"#":"oak_planks"},result:{item:"crafting_table",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"string"},result:{item:"wool",count:1}},{type:"shaped",pattern:["###","# #","###"],key:{"#":"cobblestone"},result:{item:"furnace",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"sand"},result:{item:"sandstone",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"nether_quartz"},result:{item:"quartz_block",count:1}},{type:"shaped",pattern:["###","###","###"],key:{"#":"coal"},result:{item:"coal_block",count:1}},{type:"shapeless",ingredients:["coal_block"],result:{item:"coal",count:9}},{type:"shaped",pattern:["###","###","###"],key:{"#":"iron_ingot"},result:{item:"iron_block",count:1}},{type:"shapeless",ingredients:["iron_block"],result:{item:"iron_ingot",count:9}},{type:"shaped",pattern:["###","###","###"],key:{"#":"diamond"},result:{item:"diamond_block",count:1}},{type:"shapeless",ingredients:["diamond_block"],result:{item:"diamond",count:9}},{type:"shaped",pattern:["C","S"],key:{C:"coal",S:"stick"},result:{item:"torch",count:4}},{type:"shaped",pattern:["F","S","E"],key:{F:"flint",S:"stick",E:"feather"},result:{item:"arrow",count:4}},{type:"shaped",pattern:[" TS","T S"," TS"],key:{T:"stick",S:"string"},result:{item:"bow",count:1}},we(Ur,"oak_planks","wooden_pickaxe"),we(Nr,"oak_planks","wooden_axe"),we(Fr,"oak_planks","wooden_shovel"),we(Or,"oak_planks","wooden_sword"),we(Br,"oak_planks","wooden_hoe"),we(Ur,"cobblestone","stone_pickaxe"),we(Nr,"cobblestone","stone_axe"),we(Fr,"cobblestone","stone_shovel"),we(Or,"cobblestone","stone_sword"),we(Br,"cobblestone","stone_hoe"),we(Ur,"iron_ingot","iron_pickaxe"),we(Nr,"iron_ingot","iron_axe"),we(Fr,"iron_ingot","iron_shovel"),we(Or,"iron_ingot","iron_sword"),we(Br,"iron_ingot","iron_hoe"),we(Ur,"diamond","diamond_pickaxe"),we(Nr,"diamond","diamond_axe"),we(Fr,"diamond","diamond_shovel"),we(Or,"diamond","diamond_sword"),we(Br,"diamond","diamond_hoe")];function nm(i){return i&&i.count>=1?i.item:null}function kb(i){return i.map(t=>t.map(nm))}function Ib(i){const t=[];for(const e of i)for(const n of e){const s=nm(n);s&&t.push(s)}return t}function im(i){let t=1/0,e=-1,n=1/0,s=-1;for(let r=0;r<i.length;r++)for(let a=0;a<i[r].length;a++)i[r][a]!==null&&(r<t&&(t=r),r>e&&(e=r),a<n&&(n=a),a>s&&(s=a));if(e===-1)return null;const o=[];for(let r=t;r<=e;r++)o.push(i[r].slice(n,s+1));return o}function Ub(i){return i.pattern.map(t=>Array.from(t,e=>e===" "?null:i.key[e]??null))}function Nb(i){return i.map(t=>[...t].reverse())}function Ud(i,t){if(i.length!==t.length)return!1;for(let e=0;e<i.length;e++){if(i[e].length!==t[e].length)return!1;for(let n=0;n<i[e].length;n++)if(i[e][n]!==t[e][n])return!1}return!0}function Fb(i,t){const e=im(Ub(i));return e?Ud(e,t)||Ud(Nb(e),t):!1}function Nd(i){const t=new Map;for(const e of i)t.set(e,(t.get(e)??0)+1);return t}function Ob(i,t){if(i.ingredients.length!==t.length)return!1;const e=Nd(i.ingredients),n=Nd(t);if(e.size!==n.size)return!1;for(const[s,o]of e)if(n.get(s)!==o)return!1;return!0}function Bb(i){const t=Ib(i);if(t.length===0)return null;const e=im(kb(i));for(const n of Lb)if(n.type==="shaped"){if(e&&Fb(n,e))return n}else if(Ob(n,t))return n;return null}function zb(i){const t=Bb(i);return t?{item:t.result.item,count:t.result.count}:null}const Hc=new Map,Gc=new Map;for(const i of Qe)i.id!==0&&(Hc.set(i.id,i.name),Gc.set(i.name,i.id));for(const i of y1){const t=S1(i);t&&(Hc.set(i,t),Gc.set(t,i))}function Fd(i){const t=i.map(s=>s.map(o=>{if(!o)return null;const r=Hc.get(o.id);return r?{item:r,count:o.count}:null})),e=zb(t);if(!e)return null;const n=Gc.get(e.item);return n==null?null:{id:n,count:e.count}}function Hb(i){for(const t of i)for(let e=0;e<t.length;e++){const n=t[e];n&&(n.count-=1,n.count<=0&&(t[e]=null))}}const cn=i=>la(i),On=9,zl=27,Gb=420,Vb=12;class Wb{constructor(t){_(this,"root");_(this,"inv",null);_(this,"gridN",2);_(this,"craft",[]);_(this,"cursor",null);_(this,"open",!1);_(this,"cursorEl");_(this,"cursorIcon");_(this,"cursorCnt");_(this,"titleEl");_(this,"cgridEl");_(this,"outCell");_(this,"mainCells",[]);_(this,"hotbarCells",[]);_(this,"craftCells",[]);_(this,"drag",null);_(this,"onChange",null);_(this,"onClose",null);this.root=t,t.classList.add("hidden"),t.innerHTML=`
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
      </div>`,this.titleEl=t.querySelector(".inv-title"),t.querySelector(".inv-close").addEventListener("click",()=>{var s;return(s=this.onClose)==null?void 0:s.call(this)}),this.cgridEl=t.querySelector(".inv-cgrid");const e=t.querySelector(".inv-main"),n=t.querySelector(".inv-hotbar");for(let s=0;s<zl;s++)this.mainCells.push(this.makeSlot(e,"main",s));for(let s=0;s<On;s++)this.hotbarCells.push(this.makeSlot(n,"hotbar",s));this.outCell=this.makeSlot(t.querySelector(".inv-out-wrap"),"output",0),this.outCell.el.classList.add("inv-out"),this.cursorEl=document.createElement("div"),this.cursorEl.className="inv-cursor",this.cursorIcon=document.createElement("div"),this.cursorIcon.className="slot-icon",this.cursorCnt=document.createElement("div"),this.cursorCnt.className="slot-count",this.cursorEl.append(this.cursorIcon,this.cursorCnt),this.cursorEl.style.display="none",this.cursorEl.style.pointerEvents="none",document.body.appendChild(this.cursorEl),document.addEventListener("pointermove",s=>{this.open&&(this.cursorEl.style.left=`${s.clientX}px`,this.cursorEl.style.top=`${s.clientY}px`,this.drag&&this.onDragMove(s))}),document.addEventListener("pointerup",s=>{this.open&&this.drag&&this.endDrag(s)}),document.addEventListener("pointercancel",s=>{var o;this.open&&((o=this.drag)==null?void 0:o.pointerId)===s.pointerId&&this.cancelDrag()})}makeSlot(t,e,n){const s=document.createElement("div");s.className="inv-slot",s.dataset.region=e,s.dataset.idx=String(n),s.style.touchAction="none";const o=document.createElement("div");o.className="slot-icon";const r=document.createElement("div");return r.className="slot-count",s.append(o,r),s.addEventListener("pointerdown",a=>{!a.isPrimary||a.pointerType==="mouse"&&a.button!==0&&a.button!==2||(a.preventDefault(),this.beginDrag(e,n,a))}),s.addEventListener("contextmenu",a=>a.preventDefault()),t.appendChild(s),{el:s,icon:o,cnt:r}}isOpen(){return this.open}show(t,e){this.inv=t,this.gridN=e,this.craft=Array.from({length:e},()=>Array(e).fill(null)),this.buildCraftGrid(e),this.titleEl.textContent=e>=3?"工作台":"背包",this.open=!0,this.root.classList.remove("hidden"),this.render()}hide(){var t;if(this.cancelDrag(),this.inv){for(const e of this.craft)for(let n=0;n<e.length;n++){const s=e[n];s&&(Ws(this.inv,s.id,s.count,cn(s.id)),e[n]=null)}this.cursor&&(Ws(this.inv,this.cursor.id,this.cursor.count,cn(this.cursor.id)),this.cursor=null)}this.open=!1,this.root.classList.add("hidden"),this.cursorEl.style.display="none",(t=this.onChange)==null||t.call(this)}buildCraftGrid(t){this.cgridEl.innerHTML="",this.cgridEl.style.gridTemplateColumns=`repeat(${t}, 1fr)`,this.craftCells=[];for(let e=0;e<t*t;e++)this.craftCells.push(this.makeSlot(this.cgridEl,"craft",e))}beginDrag(t,e,n){var s,o;if(this.inv){if(this.cursorEl.style.left=`${n.clientX}px`,this.cursorEl.style.top=`${n.clientY}px`,t==="output"){this.takeOutput(),this.render(),(s=this.onChange)==null||s.call(this);return}if(n.shiftKey){this.quickMoveFrom(t,e),this.render(),(o=this.onChange)==null||o.call(this);return}this.drag={region:t,i:e,right:n.button===2,started:!1,mode:this.cursor?"distribute":"move",swept:[],sweptKeys:new Set,sweptCells:[],pointerId:n.pointerId,touch:n.pointerType==="touch",startX:n.clientX,startY:n.clientY,holdTimer:null,longPressed:!1},this.drag.touch&&this.startTouchHold(this.drag)}}onDragMove(t){const e=this.drag;if(!e||!this.inv||e.pointerId!==t.pointerId||(e.touch&&!e.longPressed&&Math.hypot(t.clientX-e.startX,t.clientY-e.startY)>Vb&&this.clearTouchHold(e),e.longPressed))return;const n=this.slotAt(t);if(!e.started){if(!n||n.region===e.region&&n.i===e.i)return;e.started=!0,e.mode==="distribute"?(this.addSwept(e,e.region,e.i),this.addSwept(e,n.region,n.i)):(this.applyClick(e.region,e.i,!1),this.render());return}e.mode==="distribute"&&n&&this.addSwept(e,n.region,n.i)}endDrag(t){var n;const e=this.drag;if(!(!e||e.pointerId!==t.pointerId)){this.clearTouchHold(e),this.drag=null;for(const s of(e==null?void 0:e.sweptCells)??[])s.el.classList.remove("inv-drag-hi");if(this.inv&&!e.longPressed){if(!e.started)this.applyClick(e.region,e.i,e.right);else if(e.mode==="distribute")this.cursor=e.right?Db(e.swept,this.cursor,cn):Pb(e.swept,this.cursor,cn);else{const s=this.slotAt(t);s&&s.region!=="output"&&!(s.region===e.region&&s.i===e.i)&&this.applyClick(s.region,s.i,!1)}this.render(),(n=this.onChange)==null||n.call(this)}}}cancelDrag(){if(this.drag){this.clearTouchHold(this.drag);for(const t of this.drag.sweptCells)t.el.classList.remove("inv-drag-hi");this.drag=null}}startTouchHold(t){t.holdTimer=window.setTimeout(()=>{var e;t.holdTimer=null,!(!this.open||this.drag!==t||t.started||!this.inv)&&(t.longPressed=!0,this.applyClick(t.region,t.i,!0),this.render(),(e=this.onChange)==null||e.call(this))},Gb)}clearTouchHold(t){t.holdTimer!==null&&(window.clearTimeout(t.holdTimer),t.holdTimer=null)}addSwept(t,e,n){if(e==="output")return;const s=`${e}:${n}`;if(t.sweptKeys.has(s))return;t.sweptKeys.add(s),t.swept.push(this.slotRef(e,n));const o=this.cellOf(e,n);o&&(o.el.classList.add("inv-drag-hi"),t.sweptCells.push(o))}applyClick(t,e,n){if(this.inv)if(t==="craft"){const s=this.gridN,o=this.craft[Math.floor(e/s)],r=e%s;this.cursor=n?_a(o,r,this.cursor,cn):va(o,r,this.cursor,cn)}else{const s=t==="main"?On+e:e;this.cursor=n?_a(this.inv,s,this.cursor,cn):va(this.inv,s,this.cursor,cn)}}slotRef(t,e){if(t==="craft"){const o=this.gridN,r=this.craft[Math.floor(e/o)],a=e%o;return{get:()=>r[a],set:l=>r[a]=l}}const n=this.inv,s=t==="main"?On+e:e;return{get:()=>n[s],set:o=>n[s]=o}}slotAt(t){const e=document.elementFromPoint(t.clientX,t.clientY),n=e==null?void 0:e.closest(".inv-slot");return!n||n.dataset.region===void 0?null:{region:n.dataset.region,i:Number(n.dataset.idx)}}cellOf(t,e){return t==="main"?this.mainCells[e]??null:t==="hotbar"?this.hotbarCells[e]??null:t==="craft"?this.craftCells[e]??null:null}quickMoveFrom(t,e){if(this.inv)if(t==="craft"){const n=this.gridN;Bl(this.craft[Math.floor(e/n)],e%n,this.inv,cn)}else t==="main"?Bl(this.inv,On+e,this.inv,cn,0,On):Bl(this.inv,e,this.inv,cn,On,On+zl)}takeOutput(){const t=Fd(this.craft);if(t){if(!this.cursor)this.cursor={id:t.id,count:t.count};else if(this.cursor.id===t.id&&this.cursor.count+t.count<=cn(t.id))this.cursor.count+=t.count;else return;Hb(this.craft)}}render(){if(!this.inv)return;for(let e=0;e<zl;e++)this.paint(this.mainCells[e],this.inv[On+e]);for(let e=0;e<On;e++)this.paint(this.hotbarCells[e],this.inv[e]);const t=this.gridN;for(let e=0;e<this.craftCells.length;e++)this.paint(this.craftCells[e],this.craft[Math.floor(e/t)][e%t]);this.paint(this.outCell,Fd(this.craft)),this.cursor?(this.cursorEl.style.display="block",this.fill(this.cursorIcon,this.cursorCnt,this.cursor)):this.cursorEl.style.display="none"}paint(t,e){this.fill(t.icon,t.cnt,e)}fill(t,e,n){if(n&&n.count>0){const s=zi(n.id);s?(t.style.backgroundImage=`url(${s})`,t.textContent="",t.classList.remove("txt")):(t.style.backgroundImage="none",t.textContent=Wp(n.id),t.classList.add("txt")),e.textContent=n.count>1?String(n.count):""}else t.style.backgroundImage="none",t.textContent="",t.classList.remove("txt"),e.textContent=""}}const sm=200,Xb=64,om={[FM]:1,[OM]:wp,[Uc]:bp,[Nc]:Ep,[Fc]:Tp,[Oc]:Ap},qb={[vp]:1600,[XM]:16e3,[Ta]:300,[Ra]:300,[NM]:300,[jf]:300,[gp]:100,[_p]:200,[xp]:200,[yp]:200,[Mp]:200,[Sp]:200},rm=i=>om[i],uc=i=>qb[i]??0,Od=i=>uc(i)>0,Yb=i=>i in om;function $b(){return{input:0,inputN:0,fuel:0,fuelN:0,output:0,outputN:0,burn:0,burnMax:0,cook:0}}function am(i){if(i.inputN<=0)return!1;const t=rm(i.input);return t===void 0?!1:i.outputN===0||i.output===t&&i.outputN<Xb}function Kb(i){const t=i.burn>0||i.cook>0,e=am(i);if(i.burn>0&&i.burn--,i.burn===0&&e&&i.fuelN>0&&uc(i.fuel)>0&&(i.burnMax=uc(i.fuel),i.burn=i.burnMax,i.fuelN--,i.fuelN===0&&(i.fuel=0)),i.burn>0&&e){if(i.cook++,i.cook>=sm){i.cook=0;const n=rm(i.input);i.inputN--,i.inputN===0&&(i.input=0),i.output=n,i.outputN++}}else i.cook=Math.max(0,i.cook-2);return t||i.burn>0||i.cook>0}function jb(i){return i.burn>0||i.fuelN>0&&am(i)}const oi=i=>la(i),zr=9,Bd=27,Zb=420,Qb=12;class Jb{constructor(t){_(this,"root");_(this,"inv",null);_(this,"furnace",null);_(this,"cursor",null);_(this,"open",!1);_(this,"cursorEl");_(this,"cursorIcon");_(this,"cursorCnt");_(this,"inputCell");_(this,"fuelCell");_(this,"outCell");_(this,"flameEl");_(this,"arrowFillEl");_(this,"mainCells",[]);_(this,"hotbarCells",[]);_(this,"touchPress",null);_(this,"onChange",null);_(this,"onClose",null);this.root=t,t.classList.add("hidden"),t.innerHTML=`
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
      </div>`,t.querySelector(".inv-close").addEventListener("click",()=>{var o;return(o=this.onClose)==null?void 0:o.call(this)});const e=o=>this.bindSlot(t.querySelector(o));this.inputCell=e(".fur-input"),this.fuelCell=e(".fur-fuel"),this.outCell=e(".fur-out"),this.inputCell.el.addEventListener("pointerdown",o=>this.onFurnacePointerDown("input",o)),this.fuelCell.el.addEventListener("pointerdown",o=>this.onFurnacePointerDown("fuel",o)),this.outCell.el.addEventListener("pointerdown",o=>this.onFurnacePointerDown("output",o)),this.flameEl=t.querySelector(".fur-flame-fill"),this.arrowFillEl=t.querySelector(".fur-arrow-fill");const n=t.querySelector(".inv-main"),s=t.querySelector(".inv-hotbar");for(let o=0;o<Bd;o++)this.mainCells.push(this.makeInvSlot(n,"main",o));for(let o=0;o<zr;o++)this.hotbarCells.push(this.makeInvSlot(s,"hotbar",o));this.cursorEl=document.createElement("div"),this.cursorEl.className="inv-cursor",this.cursorIcon=document.createElement("div"),this.cursorIcon.className="slot-icon",this.cursorCnt=document.createElement("div"),this.cursorCnt.className="slot-count",this.cursorEl.append(this.cursorIcon,this.cursorCnt),this.cursorEl.style.display="none",this.cursorEl.style.pointerEvents="none",document.body.appendChild(this.cursorEl),document.addEventListener("pointermove",o=>{this.open&&(this.cursorEl.style.left=`${o.clientX}px`,this.cursorEl.style.top=`${o.clientY}px`,this.updateTouchPressMove(o))}),document.addEventListener("pointerup",o=>this.endTouchPress(o)),document.addEventListener("pointercancel",o=>{var r;((r=this.touchPress)==null?void 0:r.pointerId)===o.pointerId&&this.cancelTouchPress()})}bindSlot(t){t.classList.add("inv-slot"),t.style.touchAction="none";const e=document.createElement("div");e.className="slot-icon";const n=document.createElement("div");return n.className="slot-count",t.append(e,n),t.addEventListener("contextmenu",s=>s.preventDefault()),{el:t,icon:e,cnt:n}}makeInvSlot(t,e,n){const s=document.createElement("div");s.className="inv-slot",s.style.touchAction="none";const o=document.createElement("div");o.className="slot-icon";const r=document.createElement("div");return r.className="slot-count",s.append(o,r),s.addEventListener("pointerdown",a=>{this.onInventoryPointerDown(e,n,a)}),s.addEventListener("contextmenu",a=>a.preventDefault()),t.appendChild(s),{el:s,icon:o,cnt:r}}isOpen(){return this.open}show(t,e){this.inv=t,this.furnace=e,this.open=!0,this.root.classList.remove("hidden"),this.render()}hide(){var t;this.cancelTouchPress(),this.inv&&this.cursor&&(Ws(this.inv,this.cursor.id,this.cursor.count,oi(this.cursor.id)),this.cursor=null),this.open=!1,this.root.classList.add("hidden"),this.cursorEl.style.display="none",(t=this.onChange)==null||t.call(this)}onInventoryPointerDown(t,e,n){this.isSupportedPointer(n)&&(n.preventDefault(),this.positionCursor(n),n.pointerType==="touch"?this.beginTouchPress(n,s=>this.performInventoryClick(t,e,s,!1)):this.performInventoryClick(t,e,n.button===2,n.shiftKey))}onFurnacePointerDown(t,e){this.isSupportedPointer(e)&&(e.preventDefault(),this.positionCursor(e),e.pointerType==="touch"?this.beginTouchPress(e,n=>this.performFurnaceClick(t,n)):this.performFurnaceClick(t,e.button===2))}isSupportedPointer(t){return t.isPrimary&&(t.pointerType!=="mouse"||t.button===0||t.button===2)}positionCursor(t){this.cursorEl.style.left=`${t.clientX}px`,this.cursorEl.style.top=`${t.clientY}px`}performInventoryClick(t,e,n,s){var r;if(!this.inv)return;const o=t==="main"?zr+e:e;s?this.shiftToFurnace(o):this.cursor=n?_a(this.inv,o,this.cursor,oi):va(this.inv,o,this.cursor,oi),this.render(),(r=this.onChange)==null||r.call(this)}shiftToFurnace(t){const e=this.furnace,n=this.inv;if(!e||!n)return;const s=n[t];if(!s)return;const o=Od(s.id);if(o&&(e.fuel===0||e.fuel===s.id)){const r=oi(s.id)-e.fuelN,a=Math.min(r,s.count);e.fuel=s.id,e.fuelN+=a,s.count-=a,s.count<=0&&(n[t]=null)}else if(!o&&Yb(s.id)&&(e.input===0||e.input===s.id)){const r=oi(s.id)-e.inputN,a=Math.min(r,s.count);e.input=s.id,e.inputN+=a,s.count-=a,s.count<=0&&(n[t]=null)}}performFurnaceClick(t,e){var s;const n=this.furnace;if(n){if(t==="output")this.takeOutput();else{const o=t==="input"?n.input:n.fuel,r=t==="input"?n.inputN:n.fuelN,a=[r>0?{id:o,count:r}:null];if(t==="fuel"&&this.cursor&&!Od(this.cursor.id))return;this.cursor=e?_a(a,0,this.cursor,oi):va(a,0,this.cursor,oi);const l=a[0];t==="input"?(n.input=(l==null?void 0:l.id)??0,n.inputN=(l==null?void 0:l.count)??0):(n.fuel=(l==null?void 0:l.id)??0,n.fuelN=(l==null?void 0:l.count)??0)}this.render(),(s=this.onChange)==null||s.call(this)}}beginTouchPress(t,e){this.cancelTouchPress();const n={pointerId:t.pointerId,startX:t.clientX,startY:t.clientY,holdTimer:null,moved:!1,longPressed:!1,activate:e};this.touchPress=n,n.holdTimer=window.setTimeout(()=>{n.holdTimer=null,!(!this.open||this.touchPress!==n||n.moved)&&(n.longPressed=!0,n.activate(!0))},Zb)}updateTouchPressMove(t){const e=this.touchPress;!e||e.pointerId!==t.pointerId||e.longPressed||Math.hypot(t.clientX-e.startX,t.clientY-e.startY)<=Qb||(e.moved=!0,this.clearTouchPressTimer(e))}endTouchPress(t){const e=this.touchPress;!e||e.pointerId!==t.pointerId||(this.clearTouchPressTimer(e),this.touchPress=null,!e.moved&&!e.longPressed&&e.activate(!1))}cancelTouchPress(){this.touchPress&&(this.clearTouchPressTimer(this.touchPress),this.touchPress=null)}clearTouchPressTimer(t){t.holdTimer!==null&&(window.clearTimeout(t.holdTimer),t.holdTimer=null)}takeOutput(){const t=this.furnace;!t||t.outputN<=0||(this.cursor?this.cursor.id===t.output&&this.cursor.count+t.outputN<=oi(t.output)&&(this.cursor.count+=t.outputN,t.output=0,t.outputN=0):(this.cursor={id:t.output,count:t.outputN},t.output=0,t.outputN=0))}render(){if(!this.inv||!this.furnace)return;const t=this.furnace;for(let e=0;e<Bd;e++)this.fill(this.mainCells[e],this.inv[zr+e]);for(let e=0;e<zr;e++)this.fill(this.hotbarCells[e],this.inv[e]);this.fill(this.inputCell,t.inputN>0?{id:t.input,count:t.inputN}:null),this.fill(this.fuelCell,t.fuelN>0?{id:t.fuel,count:t.fuelN}:null),this.fill(this.outCell,t.outputN>0?{id:t.output,count:t.outputN}:null),this.flameEl.style.height=`${t.burnMax>0?Math.round(t.burn/t.burnMax*100):0}%`,this.arrowFillEl.style.width=`${Math.round(t.cook/sm*100)}%`,this.cursor?(this.cursorEl.style.display="block",this.fillRaw(this.cursorIcon,this.cursorCnt,this.cursor)):this.cursorEl.style.display="none"}fill(t,e){this.fillRaw(t.icon,t.cnt,e)}fillRaw(t,e,n){if(n&&n.count>0){const s=zi(n.id);s?(t.style.backgroundImage=`url(${s})`,t.textContent="",t.classList.remove("txt")):(t.style.backgroundImage="none",t.textContent=Wp(n.id),t.classList.add("txt")),e.textContent=n.count>1?String(n.count):""}else t.style.backgroundImage="none",t.textContent="",t.classList.remove("txt"),e.textContent=""}}const Hl=21,Gl=21;function zd(i,t,e,n,s,o){const r=(f,m)=>o==="x"?[e+f,n+m,s]:[e,n+m,s+f],a=(f,m)=>t(...r(f,m)),l=(f,m)=>i(...r(f,m));if(!a(0,0))return null;let c=0;for(;-c<Hl&&a(c-1,0);)c--;let h=0;for(;h<Hl&&a(h+1,0);)h++;let u=0;for(;-u<Gl&&a(0,u-1);)u--;let d=0;for(;d<Gl&&a(0,d+1);)d++;const p=h-c+1,g=d-u+1;if(p<2||p>Hl||g<3||g>Gl)return null;for(let f=c;f<=h;f++)for(let m=u;m<=d;m++)if(!a(f,m))return null;for(let f=u;f<=d;f++)if(!l(c-1,f)||!l(h+1,f))return null;for(let f=c;f<=h;f++)if(!l(f,u-1)||!l(f,d+1))return null;const v=[];for(let f=c;f<=h;f++)for(let m=u;m<=d;m++)v.push(r(f,m));return{axis:o,inner:v}}function tE(i,t,e,n,s){return zd(i,t,e,n,s,"x")??zd(i,t,e,n,s,"z")}const lm=31,eE=127,nE=191;function iE(i,t,e,n){const r=tE((a,l,c)=>i(a,l,c)===18,(a,l,c)=>{const h=i(a,l,c);return h===0||h===25},t,e+1,n);return r?r.inner:null}function sE(i,t,e){return i==="overworld"?[Math.floor(t/8),Math.floor(e/8)]:[t*8,e*8]}function oE(i,t,e,n){if(t==="overworld"){for(let r=nE;r>1;r--)if(be(i(e,r,n))&&!be(i(e,r+1,n)))return r+1;return null}const s=lm+2,o=eE-8;for(let r=s;r<=o;r++){if(!be(i(e,r-1,n)))continue;let a=!1;for(let l=0;l<3;l++)if(rc(i(e,r+l,n))){a=!0;break}if(!a)return r}return null}function rE(i,t,e,n){let s=oE(i,t,e,n),o=!1;s===null&&(s=t==="nether"?lm+10:64,o=!0);const r=new Map,a=(d,p,g)=>`${d},${p},${g}`,l=(d,p,g,v)=>{r.set(a(d,p,g),[d,p,g,v])},c=e,h=e+1,u=s+2;for(let d=e-1;d<=e+2;d++)for(let p=s-1;p<=s+3;p++)for(let g=n-1;g<=n+1;g++)l(d,p,g,0);for(let d=e-1;d<=e+2;d++)l(d,s-1,n,Gn),l(d,s+3,n,Gn);for(let d=s-1;d<=s+3;d++)l(e-1,d,n,Gn),l(e+2,d,n,Gn);for(let d=c;d<=h;d++)for(let p=s;p<=u;p++)l(d,p,n,Aa);if(l(c,s-1,n-1,Gn),l(h,s-1,n-1,Gn),o)for(let d=e-1;d<=e+2;d++)for(let p=n-1;p<=n+1;p++)l(d,s-1,p,Gn);return{edits:[...r.values()],spawn:{x:c+.5,y:s,z:n+.5}}}const Vl=600;class aE{constructor(t){_(this,"geom",new Ne);_(this,"pos",new Float32Array(Vl*3));_(this,"col",new Float32Array(Vl*3));_(this,"posAttr");_(this,"colAttr");_(this,"points");this.posAttr=new ue(this.pos,3),this.colAttr=new ue(this.col,3),this.posAttr.setUsage(Fh),this.colAttr.setUsage(Fh),this.geom.setAttribute("position",this.posAttr),this.geom.setAttribute("color",this.colAttr),this.geom.setDrawRange(0,0);const e=new Ac({size:.13,vertexColors:!0,sizeAttenuation:!0,transparent:!0,depthWrite:!1});this.points=new zf(this.geom,e),this.points.frustumCulled=!1,t.add(this.points)}sync(t){const e=Math.min(t.length,Vl);for(let n=0;n<e;n++){const s=t[n];this.pos[n*3]=s.x,this.pos[n*3+1]=s.y,this.pos[n*3+2]=s.z,this.col[n*3]=s.r,this.col[n*3+1]=s.g,this.col[n*3+2]=s.b}this.geom.setDrawRange(0,e),this.posAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0}}const lE=`
varying vec3 vW;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vW = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`.trim(),cE=`
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
  // 更高频、稀疏的云团；旧 0.006 在低云平面上会形成遮住半个天空的巨大灰色棉团。
  vec2 p = vW.xz * 0.0115;
  // domain warp(一次,两处 fbm 共用)：云缘卷曲成团,不是均匀雾斑；第二时间尺度让云形慢慢演变
  vec2 q = p + 0.28 * vec2(mwFBM(p * 1.7 + vec2(0.0, uTime * 0.0020)), mwFBM(p * 1.7 + vec2(5.2, uTime * 0.0017)));
  vec2 drift = vec2(uTime * 0.0110, uTime * 0.0032); // 整体缓飘
  float d = mwFBM(q + drift);
  float edgeDetail = mwVN((q + drift) * 6.1 + vec2(uTime * 0.001, -uTime * 0.0013));
  float density = d + (edgeDetail - 0.5) * 0.12;
  float cov = smoothstep(0.585, 0.65, density);
  if (cov < 0.004) discard;
  // 体积感：朝太阳水平方向偏移再采一次,密度差→向阳侧亮、厚处底部暗(白天云要白,暗部别压狠)
  vec2 sunXZ = normalize(uSunDir.xz + vec2(1e-4, 0.0));
  float d2 = mwFBM(q + drift + sunXZ * 0.085);
  float lit = clamp(0.82 + (d2 - d) * 4.2, 0.62, 1.03);
  float dense = smoothstep(0.50, 0.88, d); // 厚处更白亮
  vec3 col = uTint * mix(0.9, 1.01, dense) * lit;
  float dist = length(vW.xz - cameraPosition.xz);
  float fade = 1.0 - smoothstep(360.0, 620.0, dist); // 远处淡出融进地平线雾
  gl_FragColor = vec4(col, cov * 0.64 * fade);
  #include <colorspace_fragment>
}
`.trim();function hE(){const t=new Float32Array(2550),e=new Float32Array(850*3),n=310;let s=12345;const o=()=>(s=s*1664525+1013904223>>>0,s/4294967296);for(let c=0;c<850;c++){const h=o()*2-1,u=o()*Math.PI*2,d=Math.sqrt(1-h*h);t[c*3]=Math.cos(u)*d*n,t[c*3+1]=Math.sin(u)*d*n,t[c*3+2]=h*n;const p=.35+o()*.65;e[c*3]=p,e[c*3+1]=p,e[c*3+2]=Math.min(1,p*(.92+o()*.16))}const r=new Ne;r.setAttribute("position",new ue(t,3)),r.setAttribute("color",new ue(e,3));const a=new Ac({size:1.7,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),l=new zf(r,a);return l.frustumCulled=!1,l}function uE(){const i=document.createElement("canvas");i.width=i.height=16;const t=i.getContext("2d");return t.fillStyle="#fff6c0",t.fillRect(1,1,14,14),t.fillStyle="#ffe25a",t.fillRect(3,3,10,10),t.fillStyle="#ffcf26",t.fillRect(5,5,6,6),cm(i)}function dE(){const i=document.createElement("canvas");i.width=i.height=16;const t=i.getContext("2d");return t.fillStyle="#eef2f7",t.fillRect(2,2,12,12),t.fillStyle="#c2ccd8",t.fillRect(5,4,3,3),t.fillRect(9,7,2,2),t.fillRect(4,9,2,3),t.fillRect(10,11,2,2),cm(i)}function fE(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=64/2,s=64/2,o=e.createRadialGradient(n,n,0,n,n,s);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.4,"rgba(255,255,240,1)"),o.addColorStop(.7,"rgba(255,251,214,1)"),o.addColorStop(.88,"rgba(255,248,200,0.5)"),o.addColorStop(1,"rgba(255,246,190,0)"),e.fillStyle=o,e.beginPath(),e.arc(n,n,s,0,Math.PI*2),e.fill();const r=new Wi(t);return r.minFilter=fe,r.magFilter=fe,r.colorSpace=Qt,r}function pE(){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),n=128/2,s=128/2,o=e.createRadialGradient(n,n,0,n,n,s);o.addColorStop(0,"rgba(255,255,238,0.30)"),o.addColorStop(.25,"rgba(255,252,224,0.16)"),o.addColorStop(.55,"rgba(255,249,208,0.07)"),o.addColorStop(.8,"rgba(255,247,198,0.02)"),o.addColorStop(1,"rgba(255,245,188,0)"),e.fillStyle=o,e.beginPath(),e.arc(n,n,s,0,Math.PI*2),e.fill();const r=new Wi(t);return r.minFilter=fe,r.magFilter=fe,r.colorSpace=Qt,r}function mE(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=64/2,s=64/2,o=e.createRadialGradient(n-s*.15,n-s*.15,0,n,n,s);o.addColorStop(0,"rgba(245,248,255,1)"),o.addColorStop(.55,"rgba(220,228,242,1)"),o.addColorStop(.82,"rgba(190,200,220,1)"),o.addColorStop(.92,"rgba(170,180,205,0.5)"),o.addColorStop(1,"rgba(150,165,195,0)"),e.fillStyle=o,e.beginPath(),e.arc(n,n,s,0,Math.PI*2),e.fill();const r=[[.38,.32,.09],[.62,.55,.07],[.28,.6,.055],[.55,.3,.05],[.45,.68,.065]];for(const[l,c,h]of r){const u=n+(l-.5)*44.8,d=n+(c-.5)*(64*.7),p=h*64,g=e.createRadialGradient(u,d,0,u,d,p);g.addColorStop(0,"rgba(140,150,170,0.28)"),g.addColorStop(.6,"rgba(160,168,185,0.12)"),g.addColorStop(1,"rgba(170,178,195,0)"),e.fillStyle=g,e.beginPath(),e.arc(u,d,p,0,Math.PI*2),e.fill()}const a=new Wi(t);return a.minFilter=fe,a.magFilter=fe,a.colorSpace=Qt,a}function cm(i){const t=new Wi(i);return t.magFilter=le,t.minFilter=le,t.colorSpace=Qt,t}function Hr(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Wl(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,o=t-n,r=s*s*(3-2*s),a=o*o*(3-2*o),l=Hr(e,n),c=Hr(e+1,n),h=Hr(e,n+1),u=Hr(e+1,n+1);return l*(1-r)*(1-a)+c*r*(1-a)+h*(1-r)*a+u*r*a}function gE(i,t){return Wl(i,t)*.6+Wl(i*2.3+5.1,t*2.3-3.7)*.3+Wl(i*4.7,t*4.7)*.1}const Bn=16,vE=5,Gr=28,Hd=232,Gd=.18,_E=.62,xE=.012;function yE(i,t){return gE(i*Gd,t*Gd)>_E}const ME=[{o:[[1,-1,-1],[1,1,-1],[1,1,1],[1,-1,1]],s:.82},{o:[[-1,-1,1],[-1,1,1],[-1,1,-1],[-1,-1,-1]],s:.82},{o:[[-1,1,-1],[-1,1,1],[1,1,1],[1,1,-1]],s:1},{o:[[-1,-1,1],[-1,-1,-1],[1,-1,-1],[1,-1,1]],s:.6},{o:[[1,-1,1],[1,1,1],[-1,1,1],[-1,-1,1]],s:.88},{o:[[-1,-1,-1],[-1,1,-1],[1,1,-1],[1,-1,-1]],s:.88}];function SE(i,t,e,n,s,o,r,a,l){const c=r/2,h=a/2,u=l/2;for(const d of ME){const p=i.length/3;for(const[g,v,f]of d.o)i.push(n+g*c,s+v*h,o+f*u),t.push(d.s,d.s,d.s);e.push(p,p+1,p+2,p,p+2,p+3)}}class wE{constructor(t){_(this,"sun");_(this,"moon");_(this,"realSun");_(this,"sunGlow");_(this,"realMoon");_(this,"voxelClouds");_(this,"realClouds");_(this,"cloudUniforms");_(this,"stars");_(this,"starGroup");_(this,"dir",new I);_(this,"drift",0);_(this,"cloudOriginX",NaN);_(this,"cloudOriginZ",NaN);_(this,"lq","off");_(this,"dim","overworld");const e=o=>new pe({map:o,transparent:!0,depthWrite:!1,fog:!1});this.sun=new Kt(new $e(46,46),e(uE())),this.moon=new Kt(new $e(38,38),e(dE())),this.realSun=new Kt(new $e(52,52),e(fE())),this.sunGlow=new Kt(new $e(88,88),new pe({map:pE(),transparent:!0,depthWrite:!1,fog:!1,blending:jl})),this.realMoon=new Kt(new $e(44,44),e(mE())),this.realSun.layers.set(oc),this.sunGlow.layers.set(oc),this.realSun.visible=this.sunGlow.visible=this.realMoon.visible=!1;const n=new pe({vertexColors:!0,color:16777215,transparent:!0,opacity:.85,depthWrite:!1,side:He});this.voxelClouds=new Kt(new Ne,n),this.voxelClouds.frustumCulled=!1,this.cloudUniforms={uTime:{value:0},uTint:{value:new Mt(1,1,1)},uSunDir:{value:new I(.5,.8,.28)}};const s=new fn({uniforms:this.cloudUniforms,vertexShader:lE,fragmentShader:cE,transparent:!0,depthWrite:!1,side:He});this.realClouds=new Kt(new $e(1400,1400),s),this.realClouds.rotation.x=-Math.PI/2,this.realClouds.frustumCulled=!1,this.realClouds.visible=!1,this.stars=hE(),this.starGroup=new rn,this.starGroup.add(this.stars),this.stars.renderOrder=-900;for(const o of[this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon])o.renderOrder=-850;this.realClouds.renderOrder=-800,this.voxelClouds.renderOrder=-800,t.add(this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon,this.voxelClouds,this.realClouds,this.starGroup)}setDimension(t){if(this.dim=t,t==="nether")for(const e of[this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon,this.voxelClouds,this.realClouds,this.starGroup])e.visible=!1;else this.starGroup.visible=!0,this.setLightingQuality(this.lq)}setLightingQuality(t){this.lq=t;const e=t!=="off";this.voxelClouds.visible=!e,this.realClouds.visible=e,this.sun.visible=!e,this.moon.visible=!e,this.realSun.visible=e,this.sunGlow.visible=e,this.realMoon.visible=e}rebuildVoxelClouds(t,e){const n=[],s=[],o=[],r=Bn-1;for(let l=0;l<Gr;l++)for(let c=0;c<Gr;c++)yE(t+l,e+c)&&SE(n,s,o,l*Bn+Bn/2,0,c*Bn+Bn/2,r,vE,r);const a=new Ne;a.setAttribute("position",new Ae(n,3)),a.setAttribute("color",new Ae(s,3)),a.setIndex(o),this.voxelClouds.geometry.dispose(),this.voxelClouds.geometry=a}update(t,e){if(this.dim==="nether")return;const n=t/qe*Math.PI*2;this.dir.set(Math.cos(n),Math.sin(n),.1).normalize();const s=280;this.sun.position.copy(e).addScaledVector(this.dir,s),this.sun.lookAt(e),this.moon.position.copy(e).addScaledVector(this.dir,-s),this.moon.lookAt(e),this.realSun.position.copy(this.sun.position),this.realSun.lookAt(e),this.sunGlow.position.copy(this.sun.position),this.sunGlow.lookAt(e),this.realMoon.position.copy(this.moon.position),this.realMoon.lookAt(e),this.drift+=xE,this.starGroup.position.copy(e),this.starGroup.rotation.z=n;const o=up(t)/11;if(this.stars.material.opacity=Math.pow(o,1.5)*.9,this.realClouds.visible){this.realClouds.position.set(e.x,Hd,e.z),this.cloudUniforms.uTime.value=this.drift;const l=Yr(t).worldTint;this.cloudUniforms.uTint.value.setRGB(l[0],l[1],l[2],Qt),this.cloudUniforms.uSunDir.value.copy(this.dir);return}const r=Math.floor((e.x-this.drift)/Bn)-Gr/2,a=Math.floor(e.z/Bn)-Gr/2;(r!==this.cloudOriginX||a!==this.cloudOriginZ)&&(this.rebuildVoxelClouds(r,a),this.cloudOriginX=r,this.cloudOriginZ=a),this.voxelClouds.position.set(r*Bn+this.drift,Hd,a*Bn)}}const bE=16,EE={1:[.54,.54,.54],2:[.55,.42,.25],3:[.42,.67,.25],4:[.53,.53,.53],5:[.91,.86,.63],6:[.45,.33,.18],7:[.69,.54,.31],8:[.34,.34,.34],10:[.25,.48,.19],11:[.5,.36,.2],35:[.18,.69,.72],36:[.16,.68,.71],16:[.44,.7,.28],17:[.44,.7,.28],256:[.79,.16,.13],296:[.28,.78,.75]},_s=i=>EE[i]??[.5,.5,.5];function Ci(i,t,e,n,s,o=Math.random){const r=[];for(let a=0;a<s;a++){const l=o()*Math.PI*2,c=.6+o()*1.8;r.push({x:i+(o()-.5)*.6,y:t+(o()-.5)*.6,z:e+(o()-.5)*.6,vx:Math.cos(l)*c,vy:1.5+o()*2.5,vz:Math.sin(l)*c,age:0,life:.4+o()*.45,r:n[0],g:n[1],b:n[2]})}return r}function TE(i,t){const e=[];for(const n of i)n.age+=t,!(n.age>=n.life)&&(n.vy-=bE*t,n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,e.push(n));return e}const hm="mineworld.saves";function Vc(){try{const i=localStorage.getItem(hm);return i?JSON.parse(i):[]}catch{return[]}}function um(i){try{localStorage.setItem(hm,JSON.stringify(i))}catch(t){console.warn("[mineworld] 存档写入失败(localStorage 配额满或不可用):",t)}}function AE(){return Vc().sort((i,t)=>t.lastPlayed-i.lastPlayed)}function RE(i){const t=i.trim();if(!t)return null;if(/^-?\d+$/.test(t))return Math.abs(Math.floor(Number(t)))%2e9;let e=0;for(let n=0;n<t.length;n++)e=Math.imul(e,31)+t.charCodeAt(n)|0;return Math.abs(e)%2e9}function CE(i,t,e="survival"){const n={id:`${Date.now().toString(36)}-${Math.floor(Math.random()*1e6).toString(36)}`,name:i.trim()||"新的世界",seed:t??Math.floor(Math.random()*2e9),gameMode:e,lastPlayed:Date.now(),edits:{}};return dm(n),n}function dm(i){const t=Vc().filter(e=>e.id!==i.id);t.push(i),um(t)}function PE(i){um(Vc().filter(t=>t.id!==i))}function Ms(i,t,e,n){return i==="nether"?`nether:${t},${e},${n}`:`${t},${e},${n}`}function dc(i){if(i.startsWith("nether:")){const[s,o,r]=i.slice(7).split(",").map(Number);return{dim:"nether",x:s,y:o,z:r}}const[t,e,n]=i.split(",").map(Number);return{dim:"overworld",x:t,y:e,z:n}}function DE(i,t,e,n){const o=ca/2,r=Math.floor(i-o-.1),a=Math.floor(i+o+.1),l=Math.floor(t-.1),c=Math.floor(t+Hi),h=Math.floor(e-o-.1),u=Math.floor(e+o+.1);for(let d=r;d<=a;d++)for(let p=l;p<=c;p++)for(let g=h;g<=u;g++)if(QM(n(d,p,g)))return!0;return!1}const LE=[.8,.8,1,.42,.8,.8],kE=14,IE=16,UE=10,Vd=14;function fm(i){return Math.max(0,Math.min(1,i))}function go(i,t){return Number.isFinite(i)?i:t}function Vr(i,t){return 1-Math.exp(-Math.max(0,Math.min(i,.2))*t)}function pm(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function NE(i){const t=pm(i)%360/360;return new Mt().setHSL(t,.6,.48).getHex()}function FE(i,t,e){const n=fm(e);let s=t-i;return s=((s+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,i+s*n}function OE(i,t,e){const n=new je(i,t,e),s=[];for(let o=0;o<6;o++){const r=LE[o];for(let a=0;a<4;a++)s.push(r,r,r)}return n.setAttribute("color",new Ae(s,3)),n}function Pi(i,t,e,n,s,o,r,a){const l=new Kt(OE(e,n,s),t);return l.position.set(o,r,a),i.add(l),l}function vo(i,t){const e=new pe({color:i,vertexColors:!0});return t.push({material:e,base:i.clone()}),e}function fc(i){var e;const t=(e=i.name)==null?void 0:e.trim();return t?t.slice(0,18):i.id.slice(0,10)||"玩家"}function BE(i,t,e,n,s,o){const r=Math.min(o,n/2,s/2);i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function zE(i){const t=document.createElement("canvas");t.width=256,t.height=64;const e=t.getContext("2d");if(!e)throw new Error("无法创建远端玩家名字牌画布");const n=new Wi(t);n.colorSpace=Qt,n.minFilter=fe,n.magFilter=fe;const s=new Nf({map:n,transparent:!0,depthWrite:!1,depthTest:!1}),o=new lM(s);o.position.set(0,2.38,0),o.scale.set(1.65,.4125,1);const r={canvas:t,context:e,texture:n,material:s,sprite:o};return mm(r,i),r}function mm(i,t){const{canvas:e,context:n}=i;n.clearRect(0,0,e.width,e.height),n.fillStyle="rgba(0, 0, 0, 0.58)",BE(n,7,7,e.width-14,e.height-14,11),n.fill(),n.font="bold 27px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.lineWidth=4,n.strokeStyle="rgba(0, 0, 0, 0.7)",n.strokeText(t,e.width/2,e.height/2+1),n.fillStyle="#ffffff",n.fillText(t,e.width/2,e.height/2+1),i.texture.needsUpdate=!0}function HE(i){const t=pm(i),e=t%360/360,n=[16041889,14260842,11036225,7356973],s=new Mt(n[(t>>>9)%n.length]),o=new Mt(NE(i)),r=new Mt().setHSL((e+.57)%1,.35,.31),a=new Mt().setHSL((t>>>17)%360/360,.32,.18+(t>>>25)%7*.025);return{skin:s,shirt:o,trousers:r,hair:a}}function GE(i){const t=new rn;t.name=`remote-player:${i.id}`;const e=[],n=HE(i.id),s=vo(n.skin,e),o=vo(n.shirt,e),r=vo(n.trousers,e),a=vo(n.hair,e),l=vo(new Mt(2041648),e);Pi(t,o,.5,.72,.26,0,1.16,0),Pi(t,s,.5,.5,.5,0,1.77,0),Pi(t,a,.52,.12,.52,0,2.02,0),Pi(t,l,.016,.1,.09,.258,1.8,-.13),Pi(t,l,.016,.1,.09,.258,1.8,.13);const c=[],h=[];for(const p of[-.13,.13]){const g=new rn;g.position.set(0,.8,p),Pi(g,r,.24,.8,.24,0,-.4,0),t.add(g),c.push(g)}for(const p of[-.36,.36]){const g=new rn;g.position.set(0,1.47,p),Pi(g,o,.24,.72,.24,0,-.36,0),t.add(g),h.push(g)}const u=zE(fc(i));t.add(u.sprite);const d=new I(i.x,i.y,i.z);return{group:t,legs:c,arms:h,materials:e,target:d.clone(),displayed:d,targetYaw:i.yaw,displayedYaw:i.yaw,walkPhase:0,walkAmount:0,brightness:1,tag:u,label:fc(i)}}function Wd(i){i.group.traverse(t=>{t instanceof Kt&&t.geometry.dispose()});for(const t of i.materials)t.material.dispose();i.tag.texture.dispose(),i.tag.material.dispose()}class VE{constructor(t){_(this,"models",new Map);this.scene=t}sync(t,e,n){const s=new Set,o=Math.max(0,Math.min(e,.2)),r=fm(go(n,1));for(const a of t){if(!a.id||s.has(a.id))continue;s.add(a.id);let l=this.models.get(a.id);if(!l)l=GE(a),this.models.set(a.id,l),this.scene.add(l.group);else{const v=go(a.x,l.target.x),f=go(a.y,l.target.y),m=go(a.z,l.target.z),y=l.target.clone();l.target.set(v,f,m),y.distanceToSquared(l.target)>Vd*Vd&&l.displayed.copy(l.target),l.targetYaw=go(a.yaw,l.targetYaw);const x=fc(a);x!==l.label&&(l.label=x,mm(l.tag,x))}const c=Vr(o,kE),h=l.displayed.clone();l.displayed.lerp(l.target,c);const u=l.displayed.distanceTo(h),d=u>4e-4;l.walkAmount+=((d?1:0)-l.walkAmount)*Vr(o,11),d&&(l.walkPhase+=u*11),l.displayedYaw=FE(l.displayedYaw,l.targetYaw,Vr(o,IE)),l.brightness+=(r-l.brightness)*Vr(o,UE);for(const v of l.materials)v.material.color.copy(v.base).multiplyScalar(l.brightness);l.tag.material.color.setScalar(.68+l.brightness*.32);const p=Math.sin(l.walkPhase)*.72*l.walkAmount;l.legs.forEach((v,f)=>v.rotation.z=f===0?p:-p),l.arms.forEach((v,f)=>v.rotation.z=f===0?-p*.72:p*.72);const g=Math.abs(Math.sin(l.walkPhase))*.032*l.walkAmount;l.group.position.set(l.displayed.x,l.displayed.y+g,l.displayed.z),l.group.rotation.set(0,-l.displayedYaw,0)}for(const[a,l]of this.models)s.has(a)||(this.scene.remove(l.group),Wd(l),this.models.delete(a))}dispose(){for(const[,t]of this.models)this.scene.remove(t.group),Wd(t);this.models.clear()}}const Wr=50,WE=4.5,XE=5,Xd=9,qE=300,YE=-125,xn=0,qd=[{id:3,count:64},{id:2,count:64},{id:1,count:64},{id:4,count:64},{id:7,count:64},{id:6,count:64},{id:5,count:64},{id:21,count:64},{id:14,count:64},{id:15,count:64},{id:26,count:64},{id:32,count:64},{id:33,count:64},{id:34,count:64},{id:36,count:64},{id:18,count:64},{id:19,count:64},{id:20,count:64},{id:10,count:64},{id:30,count:64},{id:8,count:64},{id:12,count:64},{id:35,count:64},{id:11,count:64},{id:13,count:64},{id:27,count:64},{id:28,count:64},{id:269,count:1},{id:Op,count:1},{id:Bp,count:1},{id:zp,count:1},{id:Hp,count:1},{id:Gp,count:1},{id:Ts,count:1},{id:Ni,count:64}];function $E(){const i=Bc();for(let t=0;t<qd.length&&t<i.length;t++)i[t]={...qd[t]};return i}const KE=1.6,Yd=.005,jE=.1,ZE=.05,QE=.2,JE=.005,tT=.1,eT=3,$d=16,Kd=88,jd=48,nT=3,iT=4,sT=8,oT=50,Zd=["pig","cow","sheep","chicken"],rT=1200,aT=10,Xl=.25,Qd=1,Jd=.6,lT=2.4,cT=9,tf=.42,hT=.36;function uT(i){if(i==null)return 1;const t=Ro(i);return(t==null?void 0:t.kind)==="sword"?t.tier===1?4:t.tier===2?5:t.tier===3?6:7:1}function dT(i,t,e,n,s,o,r,a,l,c,h,u){let d=0,p=1/0;const g=(v,f,m,y)=>{if(Math.abs(f)<1e-9)return v>=m&&v<=y;let x=(m-v)/f,E=(y-v)/f;return x>E&&([x,E]=[E,x]),d=Math.max(d,x),p=Math.min(p,E),p>=d};return!g(i,n,r,c)||!g(t,s,a,h)||!g(e,o,l,u)?null:d}class fT{constructor(t,e,n=null){_(this,"canvas");_(this,"save");_(this,"renderer");_(this,"multiplayer");_(this,"remotePlayers");_(this,"look");_(this,"touch");_(this,"world");_(this,"physWorld");_(this,"chunks");_(this,"highlight");_(this,"underwaterEl");_(this,"normalFog");_(this,"underFog",new Gs(2383754,.1,16));_(this,"player");_(this,"prev");_(this,"hotbar");_(this,"inv");_(this,"crack");_(this,"dropRenderer");_(this,"hand");_(this,"particleFx");_(this,"skyObjects");_(this,"dimension","overworld");_(this,"portalCooldown",0);_(this,"portalTimer",0);_(this,"portalArmed",!0);_(this,"particles",[]);_(this,"digFxT",0);_(this,"invUI");_(this,"craftingGrid",0);_(this,"furnaceUI");_(this,"furnaces",new Map);_(this,"furnaceKey",null);_(this,"touchHoldAction",null);_(this,"touchDigging",!1);_(this,"touchDigHit",null);_(this,"drops",[]);_(this,"arrows",[]);_(this,"arrowRenderer");_(this,"drawingBow",!1);_(this,"bowCharge",0);_(this,"mobs",[]);_(this,"mobRenderer");_(this,"mobRng");_(this,"spawnWorld");_(this,"surfaceY",(t,e)=>Be(t,e,this.save.seed));_(this,"mobSpawnTick",0);_(this,"digging",!1);_(this,"lastMeleeMs",0);_(this,"digTarget",null);_(this,"digProgress",0);_(this,"fluidSim",new Kw);_(this,"fluidGrid");_(this,"fluidTick",0);_(this,"wateredChunks",new Set);_(this,"worldTime");_(this,"fov",70);_(this,"actualSprinting",!1);_(this,"shadowTick",99);_(this,"evictCt",0);_(this,"last",0);_(this,"acc",0);_(this,"survival");_(this,"statusBar");_(this,"worldSpawn");_(this,"dead",!1);_(this,"creative");_(this,"flying",!1);_(this,"flyTapWindow",0);_(this,"fallDistance",0);_(this,"hurtCd",0);_(this,"coordEl");_(this,"coordOn",!1);_(this,"eating",!1);_(this,"eatProgress",0);_(this,"eatFxT",0);_(this,"crouching",!1);_(this,"camEye",An);_(this,"decayQueue",[]);_(this,"texturePack");_(this,"lightingQuality");_(this,"renderDistance");_(this,"_godSunUV",new Ut);_(this,"_godSunColor",new Mt);_(this,"_godSunWorld",new I);_(this,"_godFwd",new I);_(this,"_handSun",new I);_(this,"_handSkyColor",new Mt);_(this,"hurtWindowMax",0);_(this,"skyDarkenNow",0);_(this,"entityLight",(t,e,n)=>this.chunks.brightnessAt(t,e,n,this.skyDarkenNow));var d,p;const s=rp();id(s.texturePack),this.canvas=t,this.save=e,this.creative=e.gameMode==="creative",this.renderer=new ES(t),this.multiplayer=n,this.remotePlayers=new VE(this.renderer.scene),this.normalFog=this.renderer.scene.fog,this.underwaterEl=document.getElementById("underwater"),this.hotbar=new vb(document.getElementById("hotbar"),Xd),this.inv=e.inv?ib(e.inv):this.creative?$E():Bc(),this.hotbar.render(this.inv);const o=e.survival;this.survival=o&&o.health>0?{...Fl(),...o,foodTimer:0}:Fl(),this.statusBar=new Cb(document.getElementById("health"),document.getElementById("hunger")),this.statusBar.render(this.survival),this.worldTime=e.worldTime??ZS,this.fluidGrid={isSolid:(g,v,f)=>v<0||v>=me||be(this.world.getBlock(g,v,f)),amount:(g,v,f)=>this.world.waterAmount(g,v,f),isSource:(g,v,f)=>this.world.isWaterSource(g,v,f),isFalling:(g,v,f)=>this.world.isWaterFalling(g,v,f),setWater:(g,v,f,m,y,x)=>this.world.setWater(g,v,f,m,y,x),getBlock:(g,v,f)=>this.world.getBlock(g,v,f),setBlock:(g,v,f,m)=>this.edit(g,v,f,m)},this.dimension=e.currentDimension??"overworld",this.buildDimension(this.dimension),this.texturePack=s.texturePack,this.lightingQuality=s.lightingQuality,this.renderDistance=s.renderDistance;const r=ac(this.texturePack);this.chunks=new mp(this.renderer.scene,this.world,r),this.renderer.setWaterRefractionSink((g,v,f,m)=>this.chunks.setWaterRefraction(g,v,f,m)),this.renderer.setWaterReflectionSink((g,v)=>this.chunks.setWaterReflection(g,v)),this.chunks.setLightingQuality(s.lightingQuality),this.chunks.setSunEnabled(this.dimension==="overworld"),this.setRenderDistance(this.renderDistance),this.multiplayer&&this.bindMultiplayer(this.multiplayer),this.crack=new a1(this.renderer.scene),this.dropRenderer=new L1(this.renderer.scene,r),this.arrowRenderer=new tw(this.renderer.scene),this.mobRenderer=new $w(this.renderer.scene),this.mobRng=$f((e.seed^2654435769)>>>0),this.spawnWorld={getBlock:(g,v,f)=>this.world.getBlock(g,v,f)},this.hand=new G1(r),this.hand.setLightingQuality(s.lightingQuality),this.particleFx=new aE(this.renderer.scene),this.skyObjects=new wE(this.renderer.scene),this.skyObjects.setLightingQuality(s.lightingQuality),this.skyObjects.setDimension(this.dimension),this.invUI=new Wb(document.getElementById("inventory")),this.furnaceUI=new Jb(document.getElementById("furnace")),this.coordEl=document.createElement("div"),this.coordEl.style.cssText="position:fixed;left:8px;top:8px;z-index:30;padding:4px 8px;font:14px Zpix,monospace;color:#fff;background:rgba(0,0,0,.45);white-space:pre;display:none;pointer-events:none;text-shadow:1px 1px 0 #000;",document.body.appendChild(this.coordEl),this.furnaceUI.onChange=()=>this.hotbar.render(this.inv),this.furnaceUI.onClose=()=>this.closeFurnace(),this.invUI.onChange=()=>this.hotbar.render(this.inv),this.invUI.onClose=()=>this.closeCrafting(),this.physWorld={isSolid:(g,v,f)=>be(this.world.getBlock(g,v,f)),isWater:(g,v,f)=>yn(this.world.getBlock(g,v,f))};const a=((d=e.playerByDimension)==null?void 0:d[this.dimension])??e.player;this.worldSpawn=this.findSpawn(e.seed);const l=a?{x:a.x,y:a.y,z:a.z}:this.worldSpawn;this.player={pos:{...l},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.chunks.update(jt(Math.floor(l.x)),jt(Math.floor(l.z)),2,999);const c=((p=e.mobsByDimension)==null?void 0:p[this.dimension])??e.mobs;if(c&&c.length)for(const g of c)this.mobs.push(_d(g));else for(let g=0;g<4;g++)this.mobs.push(...gd(Zd[g%4],l.x,l.z,this.mobRng,this.spawnWorld,this.surfaceY,6,26));if(e.furnaces)for(const[g,v]of Object.entries(e.furnaces))this.furnaces.set(g,v);const h=new je(1.001,1.001,1.001);this.highlight=new hM(new uM(h),new Bf({color:0,transparent:!0,opacity:.35})),this.highlight.visible=!1,this.renderer.scene.add(this.highlight);const u=em();this.look=new ab(t,!u),this.look.yaw=a?a.yaw:Math.atan2(-l.z,-l.x),this.look.pitch=a?a.pitch:-.18,this.touch=u?new gb(document.getElementById("touch-controls"),{look:(g,v)=>this.look.rotate(g,v),interactTap:()=>this.onTouchInteractTap(),interactHoldStart:()=>this.beginTouchHoldAction(),interactHoldEnd:()=>this.endTouchHoldAction(),interactHoldCancel:()=>this.cancelTouchHoldAction(),inventory:()=>{this.furnaceKey?this.closeFurnace():this.craftingGrid>0?this.closeCrafting():this.openCrafting(2)},pause:()=>window.dispatchEvent(new Event("mineworld:touch-pause"))}):null,t.addEventListener("contextmenu",g=>g.preventDefault()),t.addEventListener("mousedown",g=>{document.pointerLockElement===t&&(g.button===0?this.beginPrimaryAction():g.button===2&&this.onUseDown())}),window.addEventListener("mouseup",g=>{g.button===0?this.stopDigging():g.button===2&&(this.releaseBow(),this.stopEating())}),document.addEventListener("pointerlockchange",()=>{this.touch||document.pointerLockElement!==t&&(this.stopDigging(),this.drawingBow=!1,this.bowCharge=0,this.stopEating())}),window.addEventListener("keydown",g=>{if(g.code==="KeyE"){this.furnaceKey?this.closeFurnace():this.craftingGrid>0?this.closeCrafting():this.isGameplayActive()&&this.openCrafting(2);return}if(g.code==="F3"){g.preventDefault(),this.coordOn=!this.coordOn,this.coordEl.style.display=this.coordOn?"block":"none";return}if(g.code==="Escape"&&this.furnaceKey){this.closeFurnace();return}if(g.code==="Escape"&&this.craftingGrid>0){this.closeCrafting();return}const v=Number(g.key);Number.isInteger(v)&&v>=1&&v<=Xd&&this.hotbar.setSelected(v-1)}),t.addEventListener("wheel",g=>{g.preventDefault(),this.hotbar.scroll(Math.sign(g.deltaY))},{passive:!1})}isGameplayActive(){var t;return((t=this.touch)==null?void 0:t.isActive)??document.pointerLockElement===this.canvas}usesTouchControls(){return this.touch!==null}setTouchActive(t){var e;(e=this.touch)==null||e.setActive(t&&!this.dead&&this.craftingGrid===0&&!this.furnaceKey)}attachMultiplayer(t){return this.multiplayer!==null?!1:(this.multiplayer=t,this.bindMultiplayer(t),this.publishMultiplayerState(),!0)}bindMultiplayer(t){t.setBlockHandler(e=>this.applyRemoteBlockEdit(e)),t.setWorldTimeHandler(e=>this.setNetworkWorldTime(e))}readMovement(){var n;const t=ob();if(!((n=this.touch)!=null&&n.isActive))return t;const e=this.touch.readMove();return{forward:Math.max(-1,Math.min(1,t.forward+e.forward)),right:Math.max(-1,Math.min(1,t.right+e.right)),sprint:t.sprint||e.sprint,jumpHeld:t.jumpHeld||e.jumpHeld,crouch:t.crouch||e.crouch}}publishMultiplayerState(){if(!this.multiplayer)return;const t=this.player.pos;this.multiplayer.sendState({x:t.x,y:t.y,z:t.z,yaw:this.look.yaw,pitch:this.look.pitch,dimension:this.dimension})}beginPrimaryAction(t){if(!this.isGameplayActive())return;this.touchDigging=!1,this.touchDigHit=null;const e=this.mobUnderRay(t);if(e){const n=performance.now();n-this.lastMeleeMs>=500&&(this.attackMob(e,t),this.lastMeleeMs=n);return}this.touchDigging=t!==void 0,this.touchDigHit=t?this.rayHitFor(t):null,this.digging=!0,this.digTarget=null}stopDigging(){this.digging=!1,this.touchDigging=!1,this.touchDigHit=null,this.digProgress=0,this.digTarget=null,this.crack.hide()}onTouchInteractTap(){if(!this.isGameplayActive())return;const t=this.rayHit();if(this.useTargetedBlock(t))return;const e=this.inv[this.hotbar.index];this.tryIgnitePortal(t,(e==null?void 0:e.id)??null)||this.placeBlock(t)}shouldUseHeldItemOnTouchHold(){const t=this.inv[this.hotbar.index];return!t||t.count<=0?!1:t.id===Ts?bd(this.inv,Ni)>0:Rl(t.id)&&this.survival.food<Us}beginTouchHoldAction(){if(!(!this.isGameplayActive()||this.touchHoldAction!==null)){if(this.shouldUseHeldItemOnTouchHold()&&this.beginHeldItemUse()){this.touchHoldAction="use";return}this.touchHoldAction="primary",this.beginPrimaryAction(this.crosshairRay())}}endTouchHoldAction(){const t=this.touchHoldAction;if(this.touchHoldAction=null,t==="primary"){this.stopDigging();return}t==="use"&&(this.releaseBow(),this.stopEating())}cancelTouchHoldAction(){const t=this.touchHoldAction;if(this.touchHoldAction=null,t==="primary"){this.stopDigging();return}t==="use"&&(this.drawingBow=!1,this.bowCharge=0,this.stopEating())}buildDimension(t){this.world=new sp(this.save.seed,t),this.world.editHook=(e,n,s)=>{for(const o in this.save.edits){const r=dc(o);r.dim===t&&r.x>>4===e&&r.z>>4===n&&s.set(r.x&15,r.y,r.z&15,this.save.edits[o])}};for(const e of Object.keys(this.save.edits)){const n=dc(e);n.dim===t&&(this.world.setBlock(n.x,n.y,n.z,this.save.edits[e]),this.fluidSim.activate(n.x,n.y,n.z))}}switchDimension(t,e){var r,a,l;((r=this.save).playerByDimension??(r.playerByDimension={}))[this.dimension]={x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.look.yaw,pitch:this.look.pitch},((a=this.save).mobsByDimension??(a.mobsByDimension={}))[this.dimension]=this.mobs.map(vd);const n=this.world;this.dimension=t,this.save.currentDimension=t,this.buildDimension(t),this.chunks.setWorld(this.world),this.chunks.setSunEnabled(t==="overworld"),n.dispose(),this.mobs.length=0;for(const c of((l=this.save.mobsByDimension)==null?void 0:l[t])??[])this.mobs.push(_d(c));this.player={pos:{...e},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.skyObjects.setDimension(t);const s=jt(Math.floor(e.x)),o=jt(Math.floor(e.z));this.chunks.update(s,o,2,999),this.chunks.flushMesh(64),this.portalCooldown=60}snapshot(){var e,n;this.save.player={x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.look.yaw,pitch:this.look.pitch},this.save.inv=nb(this.inv);const t=this.survival;return this.save.survival={health:t.health,food:t.food,saturation:t.saturation,exhaustion:t.exhaustion,oxygen:t.oxygen,oxygenTimer:t.oxygenTimer},this.save.worldTime=this.worldTime,this.save.mobs=this.mobs.map(vd),this.save.furnaces=Object.fromEntries(this.furnaces),this.save.currentDimension=this.dimension,((e=this.save).playerByDimension??(e.playerByDimension={}))[this.dimension]={...this.save.player},((n=this.save).mobsByDimension??(n.mobsByDimension={}))[this.dimension]=this.save.mobs,this.save.lastPlayed=Date.now(),this.save}findSpawn(t){for(let e=1;e<160;e++)for(let n=-e;n<=e;n++)for(const[s,o]of[[n,-e],[n,e],[-e,n],[e,n]]){const r=Be(s,o,t),a=(c,h)=>this.world.getBlock(c,r+1,h)===0&&this.world.getBlock(c,r+2,h)===0,l=this.world.getBlock(s,r,o)!==0&&this.world.getBlock(s,r-1,o)!==0&&this.world.getBlock(s,r-2,o)!==0;if(r>Te&&r<=Te+4&&l&&a(s,o)&&a(s+1,o)&&a(s-1,o)&&a(s,o+1)&&a(s,o-1))return{x:s+.5,y:r+1,z:o+.5}}return{x:.5,y:Te+3,z:.5}}async preloadSpawn(t=3){const e=jt(Math.floor(this.player.pos.x)),n=jt(Math.floor(this.player.pos.z));for(let l=-t;l<=t;l++)for(let c=-t;c<=t;c++)this.world.request(e+c,n+l);await new Promise(l=>{const c=()=>{let h=!0;for(let u=-t;u<=t&&h;u++)for(let d=-t;d<=t&&h;d++)this.world.peek(e+d,n+u)||(h=!1);h?l():setTimeout(c,30)};c()});const s=(t+1)*bt,o=Math.floor(this.player.pos.x),r=Math.floor(this.player.pos.z);wd(this.fluidSim,{isWater:(l,c,h)=>yn(this.world.getBlock(l,c,h)),isAir:(l,c,h)=>this.world.getBlock(l,c,h)===xn},{minX:o-s,maxX:o+s,minZ:r-s,maxZ:r+s,minY:Math.max(1,Te-48),maxY:Math.min(me-1,Te+2)}),jw(this.fluidSim,this.fluidGrid,1200);for(let l=-t;l<=t;l++)for(let c=-t;c<=t;c++)this.wateredChunks.add(`${e+c},${n+l}`);const a=Math.ceil((t*2+1)**2/4)+1;for(let l=0;l<a+240&&(this.chunks.update(e,n,t,4),this.chunks.flushMesh(8),await new Promise(c=>requestAnimationFrame(()=>c())),!(l>=a&&!this.chunks.meshBusy()));l++);}activateNearbyWater(){const n=jt(Math.floor(this.player.pos.x)),s=jt(Math.floor(this.player.pos.z)),o=Math.max(1,Te-48),r=Math.min(me-1,Te+2);let a=0;for(const l of Zw(n,s,4,this.wateredChunks)){if(a>=3)break;const[c,h]=l.split(",").map(Number);this.world.peek(c,h)&&(wd(this.fluidSim,{isWater:(u,d,p)=>yn(this.world.getBlock(u,d,p)),isAir:(u,d,p)=>this.world.getBlock(u,d,p)===xn},{minX:c*bt,maxX:c*bt+bt-1,minZ:h*bt,maxZ:h*bt+bt-1,minY:o,maxY:r}),this.wateredChunks.add(l),a++)}}start(){this.last=performance.now(),this.publishMultiplayerState();const t=e=>{var v,f;requestAnimationFrame(t);const n=Math.min(e-this.last,100)/1e3;this.acc+=e-this.last,this.last=e,this.acc>250&&(this.acc=250);const s=this.isGameplayActive();for(;s&&this.acc>=Wr;){this.prev=this.player;const m=this.readMovement(),y=rb()||(((v=this.touch)==null?void 0:v.consumeJump())??!1);this.creative&&y&&(this.flyTapWindow>0?(this.flying=!this.flying,this.flyTapWindow=0):this.flyTapWindow=6),this.flyTapWindow>0&&this.flyTapWindow--,this.creative||(this.flying=!1),this.crouching=this.flying?!1:m.crouch,this.actualSprinting=m.sprint&&(this.creative||wb(this.survival)),this.player=j1(this.player,{forward:m.forward,right:m.right,yaw:this.look.yaw,jump:y,swimUp:m.jumpHeld,sprint:this.actualSprinting,crouch:this.flying?!1:m.crouch,slow:this.eating,fly:this.flying,flyUp:m.jumpHeld,flyDown:m.crouch},this.physWorld),this.publishMultiplayerState(),this.stepSurvival(this.actualSprinting,y),++this.worldTime>=qe&&(this.worldTime=0),++this.fluidTick>=5&&(this.fluidTick=0,this.activateNearbyWater(),this.fluidSim.tick(this.fluidGrid),this.chunks.remeshDirty());for(const x of this.furnaces.values())jb(x)&&Kb(x);this.furnaceKey&&this.furnaceUI.render(),this.tickMobs(),this.tickArrows(),this.tickLeafDecay(),this.portalCooldown>0&&this.portalCooldown--,this.tickPortalTravel(),this.acc-=Wr}s||(this.acc=0);const o=n>.026?3:(n>.018,4);this.chunks.update(jt(Math.floor(this.player.pos.x)),jt(Math.floor(this.player.pos.z)),this.renderDistance,o,Math.cos(this.look.yaw),Math.sin(this.look.yaw));const r=performance.now()+6;for(;this.chunks.meshQueueLen()>0&&performance.now()<r;)this.chunks.flushMesh(1);if(++this.evictCt>=45){this.evictCt=0;const m=Math.max(this.renderDistance+4,12);this.world.evictBeyond(jt(Math.floor(this.player.pos.x)),jt(Math.floor(this.player.pos.z)),m)}this.chunks.cullToView(this.player.pos.x,this.player.pos.z,Math.cos(this.look.yaw),Math.sin(this.look.yaw),this.look.pitch);const a=s&&this.actualSprinting?80:70;this.fov+=(a-this.fov)*.15,this.renderer.camera.fov=this.fov,this.renderer.camera.updateProjectionMatrix(),s?(this.updateMining(n),this.updateDrops(n),this.updateEating(n),this.updateBow(n),this.statusBar.render(this.survival),this.digging&&this.hand.swing()):this.crack.hide(),this.chunks.animateWater(n),this.updateDayNight(),this.skyObjects.update(this.worldTime,this.renderer.camera.position),this.dimension==="overworld"&&this.lightingQuality!=="off"&&++this.shadowTick>=6?(this.shadowTick=0,this.chunks.updateSun(this.worldTime,this.player.pos.x,this.player.pos.y,this.player.pos.z),this.renderer.markShadowDirty()):(this.dimension!=="overworld"||this.lightingQuality==="off")&&(this.shadowTick=0),this.updateWater(),this.updateHighlight(),this.updateCamera(this.acc/Wr),this.particles=TE(this.particles,n),this.particleFx.sync(this.particles),this.mobRenderer.sync(this.mobs,n,this.entityLight),this.remotePlayers.sync(((f=this.multiplayer)==null?void 0:f.remotePlayers.filter(m=>m.dimension===this.dimension))??[],n,this.entityLight(this.player.pos.x,this.player.pos.y+An,this.player.pos.z)),this.arrowRenderer.sync(this.arrows);const l=this.inv[this.hotbar.index];this.hand.setHeld(l?l.id:null),this.hand.setEating(s&&this.eating);const c=Math.min(1,Math.hypot(this.player.vel.x,this.player.vel.z)/.22);this.hand.update(n,s?c:0);const[h,u]=this.chunks.lightLevelAt(this.player.pos.x,this.player.pos.y+An,this.player.pos.z),d=this.dimension==="nether"&&h>14.5&&u<.5?.08:this.entityLight(this.player.pos.x,this.player.pos.y+An,this.player.pos.z);this.hand.setBrightness(d);const p=this.worldTime/qe*Math.PI*2;this._handSun.set(Math.cos(p),Math.sin(p),.1).normalize();const g=Yr(this.worldTime,this.dimension);if(this._handSkyColor.setRGB(g.worldTint[0],g.worldTint[1],g.worldTint[2],Qt),this.hand.setLighting({skyLevel:h,blockLevel:u,skyDarken:this.skyDarkenNow,sunEnabled:this.dimension==="overworld",skyColor:this._handSkyColor,sunDirectionWorld:this._handSun,cameraQuaternion:this.renderer.camera.quaternion}),this.hand.camera.aspect!==this.renderer.camera.aspect&&this.hand.resize(this.renderer.camera.aspect),this.coordOn){const m=this.player.pos,y=this.chunks.pipelineStats();this.coordEl.textContent=`XYZ  ${Math.floor(m.x)} / ${Math.floor(m.y)+YE} / ${Math.floor(m.z)}
区块 已上屏${y.meshed} 可见${y.visible} 派发中${y.pending} 待上屏${y.queued}`}this.updateGodRays(),this.renderer.render(),this.renderer.renderOverlay(this.hand.scene,this.hand.camera)};requestAnimationFrame(t)}stepSurvival(t,e){if(this.creative){this.fallDistance=0;return}this.hurtCd>0&&this.hurtCd--;const n=this.player.pos.x-this.prev.pos.x,s=this.player.pos.z-this.prev.pos.z,o=this.player.pos.y-this.prev.pos.y;t&&Ii(this.survival,jE*Math.hypot(n,s)),e&&Ii(this.survival,t?QE:ZE);const r=Math.floor(this.player.pos.x),a=Math.floor(this.player.pos.z),l=yn(this.world.getBlock(r,Math.floor(this.player.pos.y),a)),c=Tb(this.fallDistance,o,this.player.onGround,l);this.fallDistance=c.fallDistance,c.damage>0&&(this.hurtPlayer(c.damage,0,0,!0),Ii(this.survival,tT)),DE(this.player.pos.x,this.player.pos.y,this.player.pos.z,(g,v,f)=>this.world.getBlock(g,v,f))&&this.hurtPlayer(1,0,0,!0);const h=rc(this.world.getBlock(r,Math.floor(this.player.pos.y),a)),u=rc(this.world.getBlock(r,Math.floor(this.player.pos.y+.9),a));(h||u)&&this.hurtPlayer(4,0,0,!0);const d=yn(this.world.getBlock(r,Math.floor(this.player.pos.y+An),a)),p=this.survival.health;Rb(this.survival,d),this.survival.health<p&&this.flashHurt(),Ab(this.survival),Ol(this.survival)&&!this.dead&&this.die()}flashHurt(){this.hand.hurtShake();const t=document.getElementById("hurt");t&&(t.classList.remove("flash"),t.offsetWidth,t.classList.add("flash"))}hurtPlayer(t,e,n,s=!1){if(!this.creative){if(this.hurtCd>0){t>this.hurtWindowMax&&(ga(this.survival,t-this.hurtWindowMax),this.hurtWindowMax=t,this.flashHurt(),Ol(this.survival)&&!this.dead&&this.die());return}if(this.hurtCd=10,this.hurtWindowMax=t,ga(this.survival,t),this.flashHurt(),!s){const o=Math.hypot(e,n)||1;this.player.kbx=e/o*tf,this.player.kbz=n/o*tf,this.player.vel.y=hT}Ol(this.survival)&&!this.dead&&this.die()}}die(){this.dead=!0,this.stopDigging(),this.stopEating();const t=Math.floor(this.player.pos.x),e=Math.floor(this.player.pos.y),n=Math.floor(this.player.pos.z);for(let s=0;s<this.inv.length;s++){const o=this.inv[s];o&&o.count>0&&this.drops.push(_n(o.id,t,e,n,Math.random,o.count,o.dur)),this.inv[s]=null}this.hotbar.render(this.inv),this.dropRenderer.sync(this.drops,this.entityLight),this.touch?(this.touch.setActive(!1),window.dispatchEvent(new Event("mineworld:touch-death"))):document.exitPointerLock()}isDead(){return this.dead}setTexturePack(t){if(t===this.texturePack)return;this.texturePack=t,id(t);const e=ac(t);this.chunks.setAtlas(e),this.hand.setAtlas(e),this.dropRenderer.setAtlas(e),this.hotbar.render(this.inv)}setLightingQuality(t){this.lightingQuality=t,this.chunks.setLightingQuality(t),this.hand.setLightingQuality(t),this.skyObjects.setLightingQuality(t),t==="off"&&this.renderer.setGodRays(null)}setRenderDistance(t){this.renderDistance=t;const e=t*16;this.normalFog instanceof Gs&&(this.normalFog.near=e*.72,this.normalFog.far=e),this.chunks.setFogFar(e)}respawn(){this.survival=Fl(),this.dead=!1,this.fallDistance=0;const t=this.worldSpawn;this.player={pos:{...t},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.chunks.update(jt(Math.floor(t.x)),jt(Math.floor(t.z)),2,999),this.statusBar.render(this.survival)}useTargetedBlock(t){return t?this.world.getBlock(t.x,t.y,t.z)===jf?(this.openCrafting(3),!0):this.world.getBlock(t.x,t.y,t.z)===zu?(this.openFurnace(t.x,t.y,t.z),!0):!1:!1}tryIgnitePortal(t,e){if(!t||e!==Fp||this.world.getBlock(t.x,t.y,t.z)!==Gn)return!1;const n=iE((s,o,r)=>this.world.getBlock(s,o,r),t.x,t.y,t.z);if(!n)return!1;for(const[s,o,r]of n)this.edit(s,o,r,Aa);return!0}beginHeldItemUse(){const t=this.inv[this.hotbar.index];return t&&t.id===Ts&&bd(this.inv,Ni)>0?(this.drawingBow=!0,this.bowCharge=0,!0):t&&t.count>0&&Rl(t.id)&&this.survival.food<Us?(this.eating=!0,this.eatProgress=0,!0):!1}onUseDown(){const t=this.rayHit();if(this.useTargetedBlock(t))return;const e=this.inv[this.hotbar.index];this.tryIgnitePortal(t,(e==null?void 0:e.id)??null)||this.beginHeldItemUse()||this.placeBlock(t)}updateBow(t){if(!this.drawingBow)return;const e=this.inv[this.hotbar.index];if(!e||e.id!==Ts){this.drawingBow=!1,this.bowCharge=0;return}this.bowCharge=Math.min(this.bowCharge+t,Qd)}releaseBow(){if(!this.drawingBow)return;this.drawingBow=!1;const t=this.bowCharge;this.bowCharge=0;const e=this.inv[this.hotbar.index];if(!e||e.id!==Ts||t<Xl||eb(this.inv,Ni,1)<1)return;this.hotbar.render(this.inv);const n=(t-Xl)/(Qd-Xl),s=Jd+n*(lT-Jd),o=Math.max(1,Math.round(2+n*(cT-2))),r=Math.cos(this.look.yaw),a=Math.sin(this.look.yaw),l=Math.cos(this.look.pitch),c=Math.sin(this.look.pitch),h=this.player.pos.x,u=this.player.pos.y+An,d=this.player.pos.z;this.arrows.push(ud(h+r*l*.4,u+c*.4,d+a*l*.4,r*l,c,a*l,s,!0,o)),this.hand.swing()}isCraftingOpen(){return this.craftingGrid>0}openCrafting(t){this.craftingGrid=t,this.invUI.show(this.inv,t),this.touch?this.touch.setActive(!1):document.exitPointerLock()}closeCrafting(){this.craftingGrid=0,this.invUI.hide(),this.touch?this.touch.setActive(!this.dead):this.canvas.requestPointerLock()}openFurnace(t,e,n){const s=`${t},${e},${n}`;let o=this.furnaces.get(s);o||(o=$b(),this.furnaces.set(s,o)),this.furnaceKey=s,this.furnaceUI.show(this.inv,o),this.touch?this.touch.setActive(!1):document.exitPointerLock()}closeFurnace(){this.furnaceKey=null,this.furnaceUI.hide(),this.touch?this.touch.setActive(!this.dead):this.canvas.requestPointerLock()}stopEating(){this.eating=!1,this.eatProgress=0}updateEating(t){if(!this.eating)return;const e=this.hotbar.index,n=this.inv[e];if(!n||n.count<=0||!Rl(n.id)||this.survival.food>=Us){this.stopEating();return}if(this.eatProgress+=t,this.eatFxT+=t,this.eatFxT>=.09){this.eatFxT=0;const s=Math.cos(this.look.yaw),o=Math.sin(this.look.yaw),r=Math.cos(this.look.pitch),a=Math.sin(this.look.pitch),l=this.player.pos.x+s*r*.4,c=this.player.pos.y+An-.18+a*.4,h=this.player.pos.z+o*r*.4;this.particles.push(...Ci(l,c,h,_s(n.id),2))}if(this.eatProgress>=KE){const s=M1(n.id),o=Ed(this.inv,e);s&&o!==null&&(bb(this.survival,s),this.hotbar.render(this.inv)),this.eatProgress=0}}crosshairRay(){const t={x:this.player.pos.x,y:this.player.pos.y+An,z:this.player.pos.z},e=Math.cos(this.look.yaw),n=Math.sin(this.look.yaw),s=Math.cos(this.look.pitch),o=Math.sin(this.look.pitch);return{origin:t,direction:{x:e*s,y:o,z:n*s}}}rayHitFor(t){return $u(t.origin,t.direction,this.creative?XE:WE,(e,n,s)=>Vu(this.world.getBlock(e,n,s)))}rayHit(){return this.rayHitFor(this.crosshairRay())}edit(t,e,n,s){var o;this.world.setBlock(t,e,n,s),this.save.edits[Ms(this.dimension,t,e,n)]=s,this.fluidSim.activate(t,e,n),this.chunks.remeshDirty(),(o=this.multiplayer)==null||o.sendBlock({dimension:this.dimension,x:t,y:e,z:n,id:s})}applyRemoteBlockEdit(t){t.dimension!=="overworld"&&t.dimension!=="nether"||!Number.isInteger(t.x)||!Number.isInteger(t.y)||!Number.isInteger(t.z)||!Number.isInteger(t.id)||t.y<0||t.y>=me||(this.save.edits[Ms(t.dimension,t.x,t.y,t.z)]=t.id,t.dimension===this.dimension&&this.world.peek(jt(t.x),jt(t.z))&&(this.world.setBlock(t.x,t.y,t.z,t.id),this.fluidSim.activate(t.x,t.y,t.z),this.chunks.remeshDirty()))}setNetworkWorldTime(t){if(!Number.isFinite(t))return;const e=Math.floor(t)%qe;this.worldTime=e<0?e+qe:e}editDim(t,e,n,s,o){this.save.edits[Ms(t,e,n,s)]=o}worldAt(t,e,n,s,o){if(t===this.dimension)return this.world.getBlock(e,n,s);const r=this.save.edits[Ms(t,e,n,s)];if(r!==void 0)return r;if(n<0||n>=me)return 0;const a=jt(e),l=jt(s),c=`${t}:${a},${l}`;let h=o==null?void 0:o.get(c);return h||(h=ip(a,l,this.save.seed,t),o==null||o.set(c,h)),h.get(Ze(e),n,Ze(s))}tickPortalTravel(){var h;const t=this.player.pos,e=Math.floor(t.x),n=Math.floor(t.y),s=Math.floor(t.z),o=YM(this.world.getBlock(e,n,s));if(this.portalTimer=o?this.portalTimer+Wr/1e3:0,o||(this.portalArmed=!0),!o||!this.portalArmed||this.portalCooldown!==0||this.portalTimer<4)return;const r=this.dimension==="overworld"?"nether":"overworld",a=`${this.dimension}:${e},${n},${s}`,l=(h=this.save).portalLinks??(h.portalLinks={});let c=l[a];if(!c){const u=new Map,[d,p]=sE(this.dimension,t.x,t.z),g=rE((v,f,m)=>this.worldAt(r,v,f,m,u),r,d,p);u.clear();for(const[v,f,m,y]of g.edits)this.editDim(r,v,f,m,y);c=[g.spawn.x,g.spawn.y,g.spawn.z],l[a]=c,l[`${r}:${Math.floor(c[0])},${Math.floor(c[1])},${Math.floor(c[2])}`]=[t.x,t.y,t.z]}this.portalArmed=!1,this.portalTimer=0,this.switchDimension(r,{x:c[0],y:c[1],z:c[2]})}queueLeafDecay(t,e,n){for(const s of CS((o,r,a)=>this.world.getBlock(o,r,a),t,e,n))this.decayQueue.some(o=>o.x===s.x&&o.y===s.y&&o.z===s.z)||this.decayQueue.push({x:s.x,y:s.y,z:s.z,t:40+Math.floor(Math.random()*160)})}tickLeafDecay(){if(this.decayQueue.length!==0)for(let t=this.decayQueue.length-1;t>=0;t--){const e=this.decayQueue[t];if(--e.t>0)continue;this.decayQueue.splice(t,1);const n=this.world.getBlock(e.x,e.y,e.z);n!==Io&&n!==Ca||(this.edit(e.x,e.y,e.z,xn),this.particles.push(...Ci(e.x+.5,e.y+.5,e.z+.5,_s(n),8)),Math.random()<Yd&&this.drops.push(_n(aa,e.x,e.y,e.z)))}}updateMining(t){if(!this.digging){this.crack.hide();return}const e=this.touchDigging?this.touchDigHit:this.rayHit();if(!e){this.digProgress=0,this.digTarget=null,this.crack.hide(),this.touchDigging&&this.stopDigging();return}const n=this.world.getBlock(e.x,e.y,e.z);if(this.touchDigging&&!Vu(n)){this.stopDigging();return}if((!this.digTarget||this.digTarget.x!==e.x||this.digTarget.y!==e.y||this.digTarget.z!==e.z)&&(this.digTarget={x:e.x,y:e.y,z:e.z},this.digProgress=0),Jf(n)<0){this.crack.hide();return}const s=this.creative?0:jM(n,this.heldTool())/1e3;if(s<=0){this.mineBlock(e.x,e.y,e.z,n),this.touchDigging&&this.stopDigging();return}this.digProgress+=t,this.digProgress>=s?(this.mineBlock(e.x,e.y,e.z,n),this.touchDigging&&this.stopDigging()):(this.crack.show(e.x,e.y,e.z,this.digProgress/s),this.digFxT+=t,this.digFxT>=.07&&(this.digFxT=0,this.particles.push(...Ci(e.x+.5,e.y+.5,e.z+.5,_s(n),3))))}heldTool(){const t=this.inv[this.hotbar.index];return t?Ro(t.id):null}settleFallingAt(t,e,n){let s=e+1;for(;;){const o=this.world.getBlock(t,s,n);if(o!==HM&&o!==Hu)break;let r=s-1;for(;r>1&&this.world.getBlock(t,r-1,n)===xn;)r--;if(r>=s)break;this.edit(t,s,n,xn),this.edit(t,r,n,o),s++}}mineBlock(t,e,n,s){if(Oi(s)){this.edit(t,e,n,xn),this.particles.push(...Ci(t+.5,e+.5,n+.5,_s(s),6)),this.digProgress=0,this.digTarget=null,this.crack.hide();return}let o=this.creative?null:ZM(s,this.heldTool());o===Hu&&Math.random()<.1&&(o=Ip),this.edit(t,e,n,xn),s===Ls&&!this.creative&&this.world.getBlock(t,e-1,n)!==xn&&(this.world.setWater(t,e,n,8,!0,!1),this.fluidSim.activate(t,e,n));const r=this.world.getBlock(t,e+1,n);if((Oi(r)||r===Ds)&&(this.edit(t,e+1,n,xn),r===Ds&&!this.creative&&this.drops.push(_n(Ds,t,e+1,n)),this.particles.push(...Ci(t+.5,e+1.5,n+.5,_s(r),6))),this.settleFallingAt(t,e,n),this.particles.push(...Ci(t+.5,e+.5,n+.5,_s(s),16)),o!==null&&this.drops.push(_n(o,t,e,n)),!this.creative&&s===Io&&Math.random()<Yd&&this.drops.push(_n(aa,t,e,n)),(s===Ta||s===Ra)&&this.queueLeafDecay(t,e,n),s===zu){const c=this.furnaces.get(`${t},${e},${n}`);if(c){const h=[[c.input,c.inputN],[c.fuel,c.fuelN],[c.output,c.outputN]];for(const[u,d]of h)d>0&&this.drops.push(_n(u,t,e,n,Math.random,d));this.furnaces.delete(`${t},${e},${n}`)}}Ii(this.survival,JE);const a=this.inv[this.hotbar.index],l=a?Ro(a.id):null;l&&(Td(this.inv,this.hotbar.index,l.maxDurability),this.hotbar.render(this.inv)),this.digProgress=0,this.digTarget=null,this.crack.hide()}updateDrops(t){const e=this.player.pos.x,n=this.player.pos.y+.9,s=this.player.pos.z;A1(this.drops,la);for(let o=this.drops.length-1;o>=0;o--){const r=this.drops[o];if(R1(r,this.physWorld,t),r.age>qE){this.drops.splice(o,1);continue}if(C1(r,e,n,s))if(r.dur!==void 0)tb(this.inv,r.id,r.dur)&&(this.drops.splice(o,1),this.hotbar.render(this.inv));else{const a=Ws(this.inv,r.id,r.count,la(r.id));a<r.count&&this.hotbar.render(this.inv),a===0?this.drops.splice(o,1):r.count=a}}this.dropRenderer.sync(this.drops,this.entityLight)}tickMobs(){const t=this.player.pos.x,e=this.player.pos.z,n={x:t,y:this.player.pos.y,z:e};let s=0,o=0,r=0;for(let a=this.mobs.length-1;a>=0;a--){const l=this.mobs[a],c=l.pos.x-t,h=l.pos.z-e,u=c*c+h*h;if(u>Kd*Kd){this.mobs.splice(a,1);continue}const d=nw(l.kind);d&&r++,u<jd*jd&&(s++,d&&o++);const p=d?Ew(l,this.physWorld,this.mobRng,n,this.isSunlit(l)):cw(l,this.physWorld,this.mobRng);Object.assign(l,p.mob);let g=!1;for(const v of p.events)if(v.kind==="layEgg")this.drops.push(_n(Dp,Math.floor(v.pos.x),Math.floor(v.pos.y),Math.floor(v.pos.z)));else if(v.kind==="attackPlayer")this.hurtPlayer(v.damage,t-l.pos.x,e-l.pos.z),l.kind==="husk"&&Ii(this.survival,3);else if(v.kind==="shootArrow")this.arrows.push(ud(v.from.x,v.from.y,v.from.z,v.dir.x,v.dir.y,v.dir.z,Kp,!1,v.damage));else if(v.kind==="explode")this.explode(v.pos,v.radius,v.damage);else if(v.kind==="drops")for(const f of v.items)this.drops.push(_n(f.id,Math.floor(v.pos.x),Math.floor(v.pos.y),Math.floor(v.pos.z),Math.random,f.count));else v.kind==="death"&&(g=!0);g&&this.mobs.splice(a,1)}if(++this.mobSpawnTick>=oT){if(this.mobSpawnTick=0,s<nT&&this.mobs.length<$d){const l=this.player.vel,c=Math.hypot(l.x,l.z)>.001?Math.atan2(l.z,l.x):null;this.mobs.push(...gd(Zd[Math.floor(this.mobRng()*4)],t,e,this.mobRng,this.spawnWorld,this.surfaceY,24,44,c,Math.PI/2))}let a=Math.min(sT-r,$d-this.mobs.length);if(o<iT&&a>0){const l=this.mobRng(),c=ys(t,e,this.save.seed),h=Aw(c,l),u=(p,g,v)=>{const[f,m]=this.chunks.lightLevelAt(p,g,v);return Math.max(m,f-this.skyDarkenNow)},d=Pw(h,t,this.player.pos.y,e,this.mobRng,this.spawnWorld,this.surfaceY,void 0,void 0,u).slice(0,a);this.mobs.push(...d),a-=d.length,a>0&&this.mobs.push(...Cw(h,t,e,this.mobRng,this.spawnWorld,this.surfaceY,void 0,void 0,u).slice(0,a))}}}explode(t,e,n){const s=Math.floor(t.x),o=Math.floor(t.y),r=Math.floor(t.z),a=e*e,l=Math.ceil(e);for(let g=-l;g<=l;g++)for(let v=-l;v<=l;v++)for(let f=-l;f<=l;f++){if(f*f+g*g+v*v>a)continue;const m=s+f,y=o+g,x=r+v,E=this.world.getBlock(m,y,x);!be(E)&&!Oi(E)||E===Dc||E===Gn||(this.world.setBlock(m,y,x,xn),this.save.edits[Ms(this.dimension,m,y,x)]=xn,this.fluidSim.activate(m,y,x))}for(let g=-l;g<=l;g++)for(let v=-l;v<=l;v++)this.settleFallingAt(s+v,o-l,r+g);this.chunks.remeshDirty(),this.particles.push(...Ci(t.x,t.y+.4,t.z,[.33,.33,.33],30));const c=this.player.pos,h=c.x-t.x,u=c.z-t.z,d=Math.hypot(h,c.y+.9-t.y,u);let p=Math.round(n*(1-d/(e+1.5)));p>0&&this.explosionBlocked(t,{x:c.x,y:c.y+.9,z:c.z})&&(p=Math.round(p*.3)),p>0&&this.hurtPlayer(p,h,u);for(let g=this.mobs.length-1;g>=0;g--){const v=this.mobs[g],f=v.pos.x-t.x,m=v.pos.z-t.z,y=Math.hypot(f,v.pos.y+.5-t.y,m);let x=Math.round(n*(1-y/(e+1.5)));if(x>0&&this.explosionBlocked(t,{x:v.pos.x,y:v.pos.y+.5,z:v.pos.z})&&(x=Math.round(x*.3)),x<=0)continue;const E=kl(v,x,{x:f,z:m},this.mobRng);Object.assign(v,E.mob);for(const k of E.events)if(k.kind==="drops")for(const R of k.items)this.drops.push(_n(R.id,Math.floor(k.pos.x),Math.floor(k.pos.y),Math.floor(k.pos.z),Math.random,R.count));else k.kind==="death"&&this.mobs.splice(g,1)}}explosionBlocked(t,e){for(let s=1;s<8;s++){const o=s/8,r=Math.floor(t.x+(e.x-t.x)*o),a=Math.floor(t.y+(e.y-t.y)*o),l=Math.floor(t.z+(e.z-t.z)*o);if(be(this.world.getBlock(r,a,l)))return!0}return!1}isSunlit(t){return Lw(t,this.world,Yr(this.worldTime).isNight)}tickArrows(){const t=(e,n,s,o,r,a,l,c)=>e>=o-l&&e<=o+l&&n>=a&&n<=a+c&&s>=r-l&&s<=r+l;for(let e=this.arrows.length-1;e>=0;e--){const n=this.arrows[e];if(n.age>rT){this.arrows.splice(e,1);continue}if(n.stuck){if(n.age++,n.age>aT){const d=n.x-this.player.pos.x,p=n.y-(this.player.pos.y+.9),g=n.z-this.player.pos.z;d*d+p*p+g*g<1.4*1.4&&Ws(this.inv,Ni,1)===0&&(this.hotbar.render(this.inv),this.arrows.splice(e,1))}continue}const s=n.x,o=n.y,r=n.z;Q1(n,this.physWorld);const a=n.x-s,l=n.y-o,c=n.z-r,h=Math.max(1,Math.ceil(Math.hypot(a,l,c)/.2));let u=!1;for(let d=1;d<=h&&!u;d++){const p=d/h,g=s+a*p,v=o+l*p,f=r+c*p;if(n.fromPlayer)for(const m of this.mobs){const y=vi[m.kind];if(t(g,v,f,m.pos.x,m.pos.z,m.pos.y,y.width/2,y.height)){this.damageMobWithArrow(m,n),u=!0;break}}else t(g,v,f,this.player.pos.x,this.player.pos.z,this.player.pos.y,ca/2,Hi)&&(this.hurtPlayer(n.damage,n.vx,n.vz),u=!0)}u&&this.arrows.splice(e,1)}}damageMobWithArrow(t,e){const n=kl(t,e.damage,{x:e.vx,z:e.vz},this.mobRng);Object.assign(t,n.mob);for(const s of n.events)if(s.kind==="drops")for(const o of s.items)this.drops.push(_n(o.id,Math.floor(s.pos.x),Math.floor(s.pos.y),Math.floor(s.pos.z),Math.random,o.count));else if(s.kind==="death"){const o=this.mobs.indexOf(t);o>=0&&this.mobs.splice(o,1)}}mobUnderRay(t=this.crosshairRay()){const{origin:e,direction:n}=t,{x:s,y:o,z:r}=e,{x:a,y:l,z:c}=n;let h=null,u=eT;for(const d of this.mobs){const p=vi[d.kind],g=p.width/2,v=dT(s,o,r,a,l,c,d.pos.x-g,d.pos.y,d.pos.z-g,d.pos.x+g,d.pos.y+p.height,d.pos.z+g);v!==null&&v<u&&(u=v,h=d)}return h!==null&&$u({x:s,y:o,z:r},{x:a,y:l,z:c},u,(p,g,v)=>be(this.world.getBlock(p,g,v)))?null:h}attackMob(t,e){this.hand.swing();const n=this.inv[this.hotbar.index],s=uT(n?n.id:null),o=n?Ro(n.id):null;if(o){for(let u=o.kind==="sword"?1:2;u>0;u--)Td(this.inv,this.hotbar.index,o.maxDurability);this.hotbar.render(this.inv)}const r=e==null?void 0:e.direction,a=r?Math.hypot(r.x,r.z):0,l=r&&a>1e-6?r.x/a:Math.cos(this.look.yaw),c=r&&a>1e-6?r.z/a:Math.sin(this.look.yaw),h=kl(t,s,{x:l,z:c},this.mobRng);Object.assign(t,h.mob);for(const u of h.events)if(u.kind==="drops")for(const d of u.items)this.drops.push(_n(d.id,Math.floor(u.pos.x),Math.floor(u.pos.y),Math.floor(u.pos.z),Math.random,d.count));else if(u.kind==="death"){const d=this.mobs.indexOf(t);d>=0&&this.mobs.splice(d,1)}}placeBlock(t=this.rayHit()){const e=this.hotbar.index,n=this.inv[e];if(!n||n.count<=0||n.id>=256||!t)return;const s=Wu(this.world.getBlock(t.x,t.y,t.z)),o=s?t.x:t.x+t.nx,r=s?t.y:t.y+t.ny,a=s?t.z:t.z+t.nz,l=this.world.getBlock(o,r,a);if(!Wu(l)||this.overlapsPlayer(o,r,a))return;const c=this.creative?n.id:Ed(this.inv,e);c!==null&&(this.edit(o,r,a,c),this.hotbar.render(this.inv),this.hand.swing())}overlapsPlayer(t,e,n){const s=this.player.pos,o=ca/2;return t<s.x+o&&t+1>s.x-o&&e<s.y+Hi&&e+1>s.y&&n<s.z+o&&n+1>s.z-o}updateDayNight(){const t=Yr(this.worldTime,this.dimension),e=this.worldTime/qe*Math.PI*2,n=Math.sin(e);let s=0;this.dimension==="overworld"&&n>-.15&&(s=Math.max(0,1-Math.abs(n)/.3)*Math.min(1,(n+.15)/.15)),this.renderer.setSkyColors(t.skyTop,t.skyHorizon,Math.atan2(.1,Math.cos(e)),s);const o=this.normalFog;o&&o.color.setRGB(t.skyHorizon[0],t.skyHorizon[1],t.skyHorizon[2],Qt);const r=t.worldTint,a=Math.max(r[0],r[1],r[2],.001);this.chunks.setTint([r[0]/a,r[1]/a,r[2]/a]);const l=up(this.worldTime),c=this.lightingQuality==="off"?l:l*.86;this.skyDarkenNow=c,this.chunks.setSkyDarken(c),this.chunks.setSkyMul(1-l/11),this.chunks.setSkyReflection(t.skyHorizon,t.skyTop);const h=this.worldTime/qe*Math.PI*2;this.chunks.setSunDir(Math.cos(h),Math.sin(h),.1)}updateGodRays(){if(this.lightingQuality==="off")return;const t=this.worldTime/qe*Math.PI*2,e=Math.cos(t),n=Math.sin(t),s=.1,o=Math.hypot(e,n,s)||1,r=n/o,a=this.renderer.camera;a.getWorldDirection(this._godFwd);const l=this._godFwd.x*(e/o)+this._godFwd.y*(n/o)+this._godFwd.z*(s/o),c=500;this._godSunWorld.set(a.position.x+e/o*c,a.position.y+n/o*c,a.position.z+s/o*c),this._godSunWorld.project(a);const h=this._godSunWorld,u=h.x*.5+.5,d=h.y*.5+.5,p=u>=0&&u<=1&&d>=0&&d<=1;let g=0;this.dimension==="overworld"&&r>0&&l>0&&p&&(g=Math.min(.6,r*2.6));const v=1,f=.6+r*.7,m=.3+r*1;this._godSunColor.setRGB(v,Math.min(1,f),Math.min(1,m)),this._godSunUV.set(u,d),this.renderer.setGodRays({quality:this.lightingQuality,sunUV:this._godSunUV,intensity:g,sunColor:this._godSunColor})}updateWater(){const t=Math.floor(this.player.pos.x),e=Math.floor(this.player.pos.y+An),n=Math.floor(this.player.pos.z),s=yn(this.world.getBlock(t,e,n));this.renderer.scene.fog=s?this.underFog:this.normalFog,this.underwaterEl&&(this.underwaterEl.style.display=s?"block":"none")}updateHighlight(){const t=this.rayHit();t?(this.highlight.position.set(t.x+.5,t.y+.5,t.z+.5),this.highlight.visible=!0):this.highlight.visible=!1}updateCamera(t){const e=this.prev.pos,n=this.player.pos,s=e.x+(n.x-e.x)*t,o=e.y+(n.y-e.y)*t,r=e.z+(n.z-e.z)*t,a=this.renderer.camera;this.camEye+=((this.crouching?W1:An)-this.camEye)*.3;const l=this.camEye;a.position.set(s,o+l,r);const c=Math.cos(this.look.yaw),h=Math.sin(this.look.yaw),u=Math.cos(this.look.pitch),d=Math.sin(this.look.pitch);a.lookAt(s+c*u,o+l+d,r+h*u)}}const ql=4;class pT{constructor(t,e=4242){_(this,"gl");_(this,"scene",new Vs);_(this,"camera",new Ye(70,1,.1,1e3));_(this,"world");_(this,"chunks");_(this,"running",!1);_(this,"x",.5);_(this,"z",.5);_(this,"heading",.7);_(this,"y",175);_(this,"onResize",()=>this.resize());var n,s;this.gl=new Uf({canvas:t,antialias:!1}),this.gl.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene.background=wM(),this.scene.fog=new Gs(Gf,40,ql*16),this.camera.layers.enable(oa),this.world=new sp(e),this.seekWater(),this.chunks=new mp(this.scene,this.world,ac()),this.chunks.update(jt(Math.floor(this.x)),jt(Math.floor(this.z)),ql,999),this.resize(),window.addEventListener("resize",this.onResize),window.addEventListener("orientationchange",this.onResize),(n=window.visualViewport)==null||n.addEventListener("resize",this.onResize),(s=window.visualViewport)==null||s.addEventListener("scroll",this.onResize)}seekWater(){for(let t=4;t<120;t+=3)for(let e=0;e<12;e++){const n=e/12*Math.PI*2,s=Math.round(Math.cos(n)*t),o=Math.round(Math.sin(n)*t);if(yn(this.world.getBlock(s,Te,o))){this.heading=n,this.x=s-Math.cos(n)*14+.5,this.z=o-Math.sin(n)*14+.5;return}}}resize(){const{width:t,height:e}=Vf(window);this.gl.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}async preload(t=ql){const e=jt(Math.floor(this.x)),n=jt(Math.floor(this.z));for(let s=-t;s<=t;s++)for(let o=-t;o<=t;o++)this.world.request(e+o,n+s);await new Promise(s=>{const o=()=>{let r=!0;for(let a=-t;a<=t&&r;a++)for(let l=-t;l<=t&&r;l++)this.world.peek(e+l,n+a)||(r=!1);r?s():setTimeout(o,30)};o()});for(let s=0;s<600&&(s<3||this.chunks.meshBusy());s++)this.chunks.update(e,n,t,999),this.chunks.flushMesh(999),await new Promise(o=>requestAnimationFrame(()=>o()))}start(){if(this.running)return;this.running=!0;const t=()=>{this.running&&(requestAnimationFrame(t),this.heading+=6e-4,this.camera.position.set(this.x,this.y,this.z),this.camera.lookAt(this.x+Math.cos(this.heading)*26,this.y-17,this.z+Math.sin(this.heading)*26),this.chunks.flushMesh(2),this.gl.render(this.scene,this.camera))};requestAnimationFrame(t)}stop(){this.running=!1}dispose(){var t,e;this.running=!1,window.removeEventListener("resize",this.onResize),window.removeEventListener("orientationchange",this.onResize),(t=window.visualViewport)==null||t.removeEventListener("resize",this.onResize),(e=window.visualViewport)==null||e.removeEventListener("scroll",this.onResize),this.chunks.dispose(),this.world.dispose(),this.gl.dispose(),this.gl.forceContextLoss()}}function mT(){if(document.getElementById("mw-settings-css"))return;const i=document.createElement("style");i.id="mw-settings-css",i.textContent=`
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
    #settings input[type=checkbox]:checked::after{content:'';position:absolute;inset:4px;background:#0e1a28;}`,document.head.appendChild(i)}class gT{constructor(t){_(this,"root");_(this,"settings");_(this,"onChange",null);this.root=t,this.settings=rp(),t.classList.remove("hidden"),mT(),t.style.cssText="position:fixed;inset:0;z-index:40;display:none;align-items:center;justify-content:center;background:#0e1a28;overflow-y:auto;overscroll-behavior:contain;touch-action:pan-y;-webkit-overflow-scrolling:touch;",t.innerHTML=`
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
      </div>`;const e=t.querySelector("#set-vol"),n=t.querySelector("#set-vol-val"),s=t.querySelector("#set-lighting"),o=t.querySelector("#set-tex-cartoon"),r=t.querySelector("#set-tex-classic"),a=()=>{o.classList.toggle("active",this.settings.texturePack==="cartoon"),r.classList.toggle("active",this.settings.texturePack==="classic"),o.style.outline=this.settings.texturePack==="cartoon"?"2px solid #6ab0ff":"none",r.style.outline=this.settings.texturePack==="classic"?"2px solid #6ab0ff":"none"},l=()=>{var g;US(this.settings),(g=this.onChange)==null||g.call(this,this.settings)},c=g=>{this.settings={...this.settings,texturePack:g},a(),l()},h=()=>e.style.setProperty("--fill",`${this.settings.volume}%`);e.addEventListener("input",()=>{this.settings={...this.settings,volume:Number(e.value)},n.textContent=`${this.settings.volume}%`,h(),l()}),s.addEventListener("change",()=>{this.settings={...this.settings,lightingQuality:s.value},l()}),o.addEventListener("click",()=>c("cartoon")),r.addEventListener("click",()=>c("classic"));const u=t.querySelector("#set-rd"),d=t.querySelector("#set-rd-val"),p=()=>u.style.setProperty("--fill",`${(this.settings.renderDistance-3)/9*100}%`);u.addEventListener("input",()=>{this.settings={...this.settings,renderDistance:Number(u.value)},d.textContent=String(this.settings.renderDistance),p(),l()}),t.querySelector("#set-close").addEventListener("click",()=>this.hide()),e.value=String(this.settings.volume),n.textContent=`${this.settings.volume}%`,h(),s.value=this.settings.lightingQuality,u.value=String(this.settings.renderDistance),d.textContent=String(this.settings.renderDistance),p(),a()}get current(){return this.settings}show(){this.root.style.display="flex"}hide(){this.root.style.display="none"}get visible(){return this.root.style.display!=="none"}}var vT={};const _T=1e3/15,xT=1e4,pc="wss://mineworld-multiplayer-nornttyy.onrender.com/ws",mc=5e3;function No(i){return typeof i=="object"&&i!==null}function on(i){return typeof i=="number"&&Number.isFinite(i)}function bo(i){return typeof i=="number"&&Number.isInteger(i)}function Wc(i){return i==="overworld"||i==="nether"?i:null}function gm(i){return i==="survival"||i==="creative"?i:null}function gc(i){if(!No(i))return null;const t=Wc(i.dimension);return typeof i.id!="string"||typeof i.name!="string"||typeof i.skin!="string"||!on(i.x)||!on(i.y)||!on(i.z)||!on(i.yaw)||!on(i.pitch)||t===null?null:{id:i.id,name:i.name,skin:i.skin,x:i.x,y:i.y,z:i.z,yaw:i.yaw,pitch:i.pitch,dimension:t}}function Xs(i){if(!No(i))return null;const t=Wc(i.dimension);return t===null||!bo(i.x)||!bo(i.y)||!bo(i.z)||!bo(i.id)?null:{dimension:t,x:i.x,y:i.y,z:i.z,id:i.id}}function yT(i){return Number.isInteger(i.seed)&&i.seed>=0&&i.seed<=2e9&&gm(i.gameMode)!==null&&on(i.worldTime)&&Math.abs(i.worldTime)<=2e9&&Array.isArray(i.edits)&&i.edits.length<=mc&&i.edits.every(t=>Xs(t)!==null)}function MT(i){const t=[];for(const[e,n]of Object.entries(i.edits)){const s=dc(e),o={dimension:s.dim,x:s.x,y:s.y,z:s.z,id:n};Xs(o)!==null&&t.push(o)}if(t.length>mc)throw new Error(`这个世界有 ${t.length} 个方块改动，联机房间最多可带入 ${mc} 个。`);return{seed:Math.floor(i.seed),gameMode:i.gameMode??"survival",worldTime:i.worldTime??1e3,edits:t}}function ST(i){if(!No(i)||i.type!=="welcome"||typeof i.id!="string"||!No(i.room))return null;const t=gm(i.room.gameMode);if(typeof i.room.id!="string"||!bo(i.room.seed)||t===null||!on(i.room.worldTime)||!Array.isArray(i.players)||!Array.isArray(i.edits))return null;const e=i.players.map(gc),n=i.edits.map(Xs);return e.some(s=>s===null)||n.some(s=>s===null)?null:{type:"welcome",id:i.id,room:{id:i.room.id,seed:i.room.seed,gameMode:t,worldTime:i.room.worldTime},players:e,edits:n}}function wT(i){if(!No(i)||typeof i.type!="string")return null;if(i.type==="welcome")return ST(i);if(i.type==="error"&&typeof i.message=="string")return{type:"error",message:i.message};if(i.type==="player-join"){const t=gc(i.player);return t?{type:"player-join",player:t}:null}if(i.type==="player-leave"&&typeof i.id=="string")return{type:"player-leave",id:i.id};if(i.type==="state"&&typeof i.id=="string"){const t=gc(i.player);return t?{type:"state",id:i.id,player:t}:null}if(i.type==="block"){const t=Xs(i.edit),e=Xs(i),n=t??e;return n?{type:"block",edit:n}:null}return i.type==="time"&&on(i.worldTime)?{type:"time",worldTime:i.worldTime}:null}function Xc(i){return i.toUpperCase().replace(/[^A-Z0-9-]/g,"").slice(0,16)}function vm(i){return i.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,16)||"玩家"}function bT(){const i=new URLSearchParams(window.location.search).get("server"),t=localStorage.getItem("mineworld.multiplayer.server"),e=vT.VITE_MULTIPLAYER_URL,n=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",s=i||t||e||(n?`ws://${window.location.hostname}:8787/ws`:pc);try{const o=new URL(s);if(o.protocol==="ws:"||o.protocol==="wss:")return o.toString()}catch{}return pc}class qc{constructor(t){_(this,"socket");_(this,"players",new Map);_(this,"_id","");_(this,"_room",null);_(this,"_initialEdits",[]);_(this,"_closed",!1);_(this,"lastStateSent",-1/0);_(this,"disconnectReason","");_(this,"blockHandler",null);_(this,"worldTimeHandler",null);_(this,"pendingBlocks",[]);_(this,"pendingWorldTime",null);_(this,"onPlayersChanged",null);_(this,"onDisconnect",null);this.socket=t}static connect(t){var o;const e=Xc(t.room);if(e.length<3)return Promise.reject(new Error("房间号至少需要 3 个字符"));const n=vm(t.name);if(t.action!=="create"&&t.world!==void 0)return Promise.reject(new Error("只有创建房间时才能带入本地世界"));if(t.world!==void 0&&!yT(t.world))return Promise.reject(new Error("当前世界数据不适合开启联机房间"));const s=((o=t.world)==null?void 0:o.gameMode)??t.gameMode??"creative";return new Promise((r,a)=>{let l=!1,c=0,h;try{h=new qc(new WebSocket(t.url))}catch{a(new Error("联机地址无效"));return}const u=d=>{l||(l=!0,window.clearTimeout(c),h.socket.close(),a(new Error(d)))};c=window.setTimeout(()=>u("连接超时，请检查联机服务器是否已启动"),xT),h.socket.addEventListener("open",()=>{h.send({type:"join",action:t.action,room:e,name:n,skin:"default",gameMode:s,world:t.world})}),h.socket.addEventListener("message",d=>{h.receive(d.data)&&!l&&(l=!0,window.clearTimeout(c),r(h))}),h.socket.addEventListener("error",()=>{const d=t.url===pc;u(d?"联机服务器暂时不可用或仍在启动，请稍后重试。":"无法连接联机服务器")}),h.socket.addEventListener("close",d=>{const p=h.disconnectReason||(d.code===1e3?"已断开联机":"联机连接已断开");l?h.close(p):u(p)})})}get id(){return this._id}get room(){if(this._room===null)throw new Error("联机房间尚未就绪");return this._room}get isConnected(){return!this._closed&&this.socket.readyState===WebSocket.OPEN}get playerCount(){return this.players.size+(this._id?1:0)}get remotePlayers(){return[...this.players.values()]}get initialEdits(){return this._initialEdits}sendState(t){if(!this.isConnected)return;const e=performance.now();e-this.lastStateSent<_T||!on(t.x)||!on(t.y)||!on(t.z)||!on(t.yaw)||!on(t.pitch)||Wc(t.dimension)===null||(this.lastStateSent=e,this.send({type:"state",player:t}))}sendBlock(t){!this.isConnected||Xs(t)===null||this.send({type:"block",...t})}setBlockHandler(t){if(this.blockHandler=t,!!t)for(const e of this.pendingBlocks.splice(0))t(e)}setWorldTimeHandler(t){this.worldTimeHandler=t,t&&this.pendingWorldTime!==null&&(t(this.pendingWorldTime),this.pendingWorldTime=null)}disconnect(t="已退出房间"){this.disconnectReason=t,this._closed||this.socket.close(1e3,t.slice(0,120)),this.close(t)}receive(t){var s,o,r,a;let e;try{e=JSON.parse(typeof t=="string"?t:String(t))}catch{return null}const n=wT(e);if(!n)return null;if(n.type==="error")return this.disconnectReason=n.message,this.socket.close(1008,n.message.slice(0,120)),null;if(n.type==="welcome"){this._id=n.id,this._room=n.room,this._initialEdits=n.edits,this.players.clear();for(const l of n.players)l.id!==this._id&&this.players.set(l.id,l);return(s=this.onPlayersChanged)==null||s.call(this),n}if(n.type==="player-join")n.player.id!==this._id&&this.players.set(n.player.id,n.player),(o=this.onPlayersChanged)==null||o.call(this);else if(n.type==="player-leave")this.players.delete(n.id),(r=this.onPlayersChanged)==null||r.call(this);else if(n.type==="state")n.id!==this._id&&this.players.set(n.id,n.player),(a=this.onPlayersChanged)==null||a.call(this);else if(n.type==="block"){const l=n.edit;this.blockHandler?this.blockHandler(l):this.pendingBlocks.push(l)}else n.type==="time"&&(this.worldTimeHandler?this.worldTimeHandler(n.worldTime):this.pendingWorldTime=n.worldTime);return null}send(t){this.socket.readyState===WebSocket.OPEN&&this.socket.send(JSON.stringify(t))}close(t){var e,n;this._closed||(this._closed=!0,this.players.size>0&&(this.players.clear(),(e=this.onPlayersChanged)==null||e.call(this)),(n=this.onDisconnect)==null||n.call(this,t))}}const qs=document.getElementById("app"),Tt=i=>document.getElementById(i),Kn=em();document.documentElement.classList.toggle("touch-device",Kn);Kn&&mb();const Yc=Tt("menubg");let Ke=new pT(Yc);const Ys=Tt("menu"),xa=Tt("worldlist"),$s=Tt("multiplayer"),$n=Tt("pause"),Yl=Tt("world-rows"),Ns=Tt("online-hud");let $t=null,ke=null;const La=Tt("boot"),ET=La.querySelector(".boot-tip"),sn=(i,t="加载中…")=>{La.classList.toggle("hidden",!i),i&&(ET.textContent=t)};let _m=!1;const xm=i=>{_m||sn(!0,`出错了：${i}（请把这行字发给开发）`)};window.addEventListener("error",i=>xm(i.message||String(i.error)));window.addEventListener("unhandledrejection",i=>xm(String(i.reason&&(i.reason.message||i.reason.stack)||i.reason)));const ya=["100% 纯方块!","无限的世界!","由 Three.js 驱动!","会挖会放会跳!","试试双击 W 疾跑~","支持 WebGL2!","像素手工打造!","水快会流动了!","也试试我的世界!"];Tt("splash").textContent=ya[Math.floor(Math.random()*ya.length)];const ef=La.querySelector(".boot-splash");ef&&(ef.textContent=ya[Math.floor(Math.random()*ya.length)]);const Xr=Kn?["提示: 左侧滑动方向盘移动，空白处拖动视角","提示: 双击前进后按住可以疾跑","提示: 轻点空白处可互动或放置方块","提示: 长按空白处可挖方块或攻击","提示: 可以直接点快捷栏切换物品","提示: 石头要用镐才挖得动"]:["提示: 按住左键挖方块","提示: 双击 W 可以疾跑","提示: 右键放方块(会消耗物品)","提示: 数字键 1-9 / 滚轮 切换物品","提示: 石头要用镐才挖得动","提示: 砍树 → 木板 → 工作台 → 工具","提示: 熔炉能把铁矿炼成铁锭","提示: 天黑了小心怪物"],$l=La.querySelector(".boot-hint");if($l){let i=Math.floor(Math.random()*Xr.length);$l.textContent=Xr[i],setInterval(()=>{i=(i+1)%Xr.length,$l.textContent=Xr[i]},2600)}function bn(i){Tt("crosshair").style.display=i?"block":"none",Tt("hotbar").style.display=i?"flex":"none",Tt("status").style.display=i?"flex":"none",Ns.classList.toggle("hidden",!i||ke===null),$t==null||$t.setTouchActive(i&&Kn)}function qi(i){for(const e of[Ys,xa,$s,$n])e.classList.add("hidden");Tt("newworld").classList.add("hidden"),i&&i.classList.remove("hidden"),bn(!1);const t=i===Ys||i===xa||i===$s;Yc.style.display=t?"block":"none",t?Ke==null||Ke.start():Ke==null||Ke.stop()}const ym=i=>new Promise(t=>setTimeout(t,i));(async()=>{sn(!0,"加载中…");try{Ke&&await Promise.race([Ke.preload(),ym(8e3)])}catch(i){console.error("[menubg] preload 失败:",i)}qi(Ys),sn(!1)})();const $c=new gT(Tt("settings"));$c.onChange=i=>{$t==null||$t.setTexturePack(i.texturePack),$t==null||$t.setLightingQuality(i.lightingQuality),$t==null||$t.setRenderDistance(i.renderDistance)};Tt("settings-btn").addEventListener("click",()=>$c.show());Tt("settings-btn-pause").addEventListener("click",()=>$c.show());Tt("play").addEventListener("click",()=>kT());const Ks=Tt("mp-name"),Bi=Tt("mp-room"),nf=Tt("mp-status"),vc=Tt("mp-create"),_c=Tt("mp-join"),TT=Tt("mp-title"),AT=Tt("mp-intro"),RT=Tt("mp-mode-field"),Mm=Tt("mp-back");let zo="join",Gi=null,Sm="creative",Kl=!1;function Po(i,t=!1){nf.textContent=i,nf.classList.toggle("error",t)}function wm(i){Sm=i,Tt("mp-current-mode").textContent=i==="creative"?"创造模式":"生存模式",Tt("mp-mode-desc").textContent=i==="creative"?"适合和朋友一起搭建；玩家与方块会实时同步。":"玩家与方块会实时同步；生物、掉落物和背包暂各自本地运行。"}function bm(){try{Ks.value=localStorage.getItem("mineworld.multiplayer.name")??""}catch{}}function Em(i){zo=i;const t=i==="host";TT.textContent=t?"开启联机房间":"加入联机房间",AT.textContent=t?"当前单人世界会成为这个房间的世界。把房间号告诉朋友即可一起游玩。":"输入朋友给你的房间号，即可进入同一个世界。",RT.classList.toggle("hidden",!t),vc.classList.toggle("hidden",!t),_c.classList.toggle("hidden",t),Mm.textContent=t?"返回暂停菜单":"返回"}function Tm(){const i="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let t="MW";for(let e=0;e<5;e++)t+=i[Math.floor(Math.random()*i.length)];return t}function sf(i=""){if(!ke){Ns.classList.add("hidden");return}Ns.textContent=i||`联机 · 房间 ${ke.room.id.toUpperCase()}
${ke.playerCount} 名玩家`}function Kc(){if(zo==="join"){qi($s);return}for(const i of[Ys,xa,$n])i.classList.add("hidden");Tt("newworld").classList.add("hidden"),$s.classList.remove("hidden"),bn(!1),Yc.style.display="none",Ke==null||Ke.stop()}function CT(){Em("join"),Gi=null,bm(),Bi.value=Xc(new URLSearchParams(location.search).get("room")??Bi.value),wm("creative"),Po("输入房间号后加入。"),Kc(),Ks.focus()}function PT(){!$t||ke!==null||(Gi=$t.snapshot(),Em("host"),bm(),Bi.value=Tm(),wm(Gi.gameMode??"survival"),Po("房间号已生成。开启后，把它告诉朋友。"),Kc(),Ks.focus())}function DT(){if(zo==="host"&&$t&&ke===null){Gi=null,$s.classList.add("hidden"),$n.classList.remove("hidden"),bn(!1);return}Gi=null,qi(Ys)}function Am(i){if(ke=i,Tt("save-quit").textContent=i?"退出房间":"保存并退出",Tt("open-room").classList.toggle("hidden",i!==null),!i){Ns.classList.add("hidden");return}i.onPlayersChanged=()=>sf(),i.onDisconnect=t=>{ke===i&&(Ns.classList.remove("hidden"),Ns.textContent=`联机已断开
${t}`)},sf()}function LT(i){const t={};for(const n of i.initialEdits)t[Ms(n.dimension,n.x,n.y,n.z)]=n.id;const e=i.room;return{id:`online:${e.id}:${e.seed}`,name:`联机 · ${e.id.toUpperCase()}`,seed:e.seed,gameMode:e.gameMode,lastPlayed:Date.now(),edits:t,worldTime:e.worldTime}}async function jc(i){if(Kl)return;const t=i==="create"&&zo==="host"?Gi:null;if(i==="create"&&t===null){Po("请先进入一个单人世界，再从暂停菜单开启房间。",!0);return}let e=Xc(Bi.value);if(i==="create"&&e.length<3&&(e=Tm()),e.length<3){Po("请输入至少 3 位的房间号。",!0),Bi.focus();return}const n=vm(Ks.value);Bi.value=e,Ks.value=n;try{localStorage.setItem("mineworld.multiplayer.name",n)}catch{}Kl=!0,vc.disabled=!0,_c.disabled=!0,qi(null),sn(!0,i==="create"?"正在创建联机房间…":"正在加入联机房间…");try{const s=await qc.connect({url:bT(),action:i,room:e,name:n,gameMode:Sm,world:t?MT(t):void 0});if(t){if(!$t||!$t.attachMultiplayer(s))throw s.disconnect("无法切换到联机房间"),new Error("当前世界已经不在单人状态，请返回后重试。");Am(s),Gi=null,$s.classList.add("hidden"),$n.classList.add("hidden"),sn(!1),bn(!0),Kn||qs.requestPointerLock()}else th(LT(s),s)}catch(s){sn(!1),Po(s instanceof Error?s.message:"连接联机服务器失败。",!0),Kc()}finally{Kl=!1,vc.disabled=!1,_c.disabled=!1}}Tt("multiplayer-play").addEventListener("click",()=>CT());Tt("open-room").addEventListener("click",()=>PT());Tt("mp-create").addEventListener("click",()=>void jc("create"));Tt("mp-join").addEventListener("click",()=>void jc("join"));Mm.addEventListener("click",()=>DT());for(const i of[Ks,Bi])i.addEventListener("keydown",t=>{t.key==="Enter"&&jc(zo==="host"?"create":"join")});Tt("fullscreen").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()});Tt("about").addEventListener("click",()=>Tt("about-panel").classList.remove("hidden"));Tt("about-close").addEventListener("click",()=>Tt("about-panel").classList.add("hidden"));function kT(){Rm(),qi(xa)}function Rm(){Yl.innerHTML="";const i=AE();if(i.length===0){const t=document.createElement("div");t.className="world-empty",t.textContent="还没有世界, 点 创建新世界 开始吧",Yl.appendChild(t);return}for(const t of i){const e=document.createElement("div");e.className="world-row";const n=document.createElement("span");n.className="wname",n.textContent=t.name;const s=document.createElement("span");s.className="wmeta",s.textContent=`种子 ${t.seed}${t.gameMode==="creative"?" · 创造":""}`;const o=document.createElement("span");o.className="wdel",o.textContent="删除",o.addEventListener("click",r=>{r.stopPropagation(),PE(t.id),Rm()}),e.append(n,s,o),e.addEventListener("click",()=>th(t)),Yl.appendChild(e)}}const Zc=Tt("newworld"),Ma=Tt("nw-name"),Qc=Tt("nw-seed"),IT=Tt("nw-mode-desc");let Cm="survival";function Jc(i){Cm=i,Tt("nw-survival").classList.toggle("active",i==="survival"),Tt("nw-creative").classList.toggle("active",i==="creative"),IT.textContent=i==="creative"?"无限方块、自由飞行（双击空格）、无敌不饿——专心建造。":"挖矿、合成、打怪，会饿会死。"}function Pm(){const i=CE(Ma.value,RE(Qc.value)??void 0,Cm);Zc.classList.add("hidden"),th(i)}Tt("nw-survival").addEventListener("click",()=>Jc("survival"));Tt("nw-creative").addEventListener("click",()=>Jc("creative"));Tt("create-world").addEventListener("click",()=>{Ma.value="",Qc.value="",Jc("survival"),Zc.classList.remove("hidden"),Ma.focus()});Tt("nw-create").addEventListener("click",Pm);Tt("nw-cancel").addEventListener("click",()=>Zc.classList.add("hidden"));for(const i of[Ma,Qc])i.addEventListener("keydown",t=>{t.key==="Enter"&&Pm()});Tt("worldlist-back").addEventListener("click",()=>qi(Ys));function th(i,t=null){if($t){t==null||t.disconnect("游戏已经在运行");return}Am(t),qi(null),sn(!0,"进入中…");try{Ke==null||Ke.dispose()}catch(e){console.error("[startGame] 菜单背景释放出错(忽略,继续):",e)}Ke=null,requestAnimationFrame(()=>requestAnimationFrame(async()=>{try{sn(!0,"进入中…①构建世界"),$t=new fT(qs,i,t),sn(!0,"进入中…②生成出生区块"),await Promise.race([$t.preloadSpawn(),ym(12e3)]),sn(!0,"进入中…③启动渲染"),$t.start(),_m=!0,window.__mw=$t,sn(!1),Kn?(bn(!0),$t.setTouchActive(!0)):qs.requestPointerLock()}catch(e){console.error("[startGame] 进入游戏失败:",e),ke===t&&(t==null||t.disconnect("进入世界失败"),ke=null);const n=e instanceof Error?`${e.stack??e.message}`:String(e);sn(!0,`进入失败：${n}`)}}))}function Ho(){$t&&ke===null&&dm($t.snapshot())}Tt("resume").addEventListener("click",()=>{Kn?($n.classList.add("hidden"),bn(!0)):qs.requestPointerLock()});Tt("save-quit").addEventListener("click",()=>{const i=ke!==null;Ho(),ke==null||ke.disconnect("玩家退出房间"),sn(!0,i?"正在退出联机房间…":"保存并返回主菜单…"),location.reload()});const Sa=Tt("death");document.addEventListener("pointerlockchange",()=>{if(Kn)return;if(document.pointerLockElement===qs)$n.classList.add("hidden"),Sa.style.display="none",bn(!0);else if($t){if(Ho(),$t.isCraftingOpen())return;bn(!1),$t.isDead()?Sa.style.display="flex":$n.classList.remove("hidden")}});window.addEventListener("mineworld:touch-pause",()=>{!$t||$t.isDead()||(Ho(),bn(!1),$n.classList.remove("hidden"))});window.addEventListener("mineworld:touch-death",()=>{bn(!1),$n.classList.add("hidden"),Sa.style.display="flex"});Tt("respawn").addEventListener("click",()=>{$t&&($t.respawn(),Sa.style.display="none",Kn?bn(!0):qs.requestPointerLock())});setInterval(()=>{$t!=null&&$t.isGameplayActive()&&Ho()},15e3);window.addEventListener("beforeunload",()=>{Ho(),ke==null||ke.disconnect("页面关闭")});
