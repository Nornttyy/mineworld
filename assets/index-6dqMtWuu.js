var tg=Object.defineProperty;var eg=(i,t,e)=>t in i?tg(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var y=(i,t,e)=>(eg(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gh="165",ng=0,fu=1,ig=2,yp=1,Mp=2,ei=3,Di=0,ze=1,je=2,Ri=0,Qs=1,Hc=2,pu=3,mu=4,sg=5,Zi=100,rg=101,og=102,ag=103,lg=104,cg=200,hg=201,ug=202,dg=203,Wc=204,Gc=205,fg=206,pg=207,mg=208,gg=209,vg=210,_g=211,xg=212,yg=213,Mg=214,wg=0,Sg=1,bg=2,La=3,Tg=4,Eg=5,Ag=6,Rg=7,wp=0,Cg=1,Pg=2,oi=0,Dg=1,Lg=2,kg=3,Ig=4,Ug=5,Ng=6,Fg=7,Sp=300,lr=301,cr=302,Vc=303,Xc=304,il=306,xn=1e3,es=1001,qc=1002,de=1003,vh=1004,vo=1005,Te=1006,Ml=1007,ni=1008,hi=1009,Og=1010,Bg=1011,ka=1012,bp=1013,Li=1014,Si=1015,Ii=1016,Tp=1017,Ep=1018,hr=1020,zg=35902,Hg=1021,Wg=1022,gn=1023,Gg=1024,Vg=1025,Js=1026,ur=1027,Ap=1028,Rp=1029,Xg=1030,Cp=1031,Pp=1033,wl=33776,Sl=33777,bl=33778,Tl=33779,gu=35840,vu=35841,_u=35842,xu=35843,yu=36196,Mu=37492,wu=37496,Su=37808,bu=37809,Tu=37810,Eu=37811,Au=37812,Ru=37813,Cu=37814,Pu=37815,Du=37816,Lu=37817,ku=37818,Iu=37819,Uu=37820,Nu=37821,El=36492,Fu=36494,Ou=36495,qg=36283,Bu=36284,zu=36285,Hu=36286,$g=3200,Dp=3201,Lp=0,Yg=1,mn="",ae="srgb",Ui="srgb-linear",_h="display-p3",sl="display-p3-linear",Ia="linear",ge="srgb",Ua="rec709",Na="p3",ps=7680,Wu=519,Kg=512,jg=513,Zg=514,kp=515,Qg=516,Jg=517,tv=518,ev=519,$c=35044,Gu=35048,Vu="300 es",ii=2e3,Fa=2001;class yr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xu=1234567;const tr=Math.PI/180,Jr=180/Math.PI;function ai(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function Ye(i,t,e){return Math.max(t,Math.min(e,i))}function xh(i,t){return(i%t+t)%t}function nv(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function iv(i,t,e){return i!==t?(e-i)/(t-i):0}function qr(i,t,e){return(1-e)*i+e*t}function sv(i,t,e,n){return qr(i,t,1-Math.exp(-e*n))}function rv(i,t=1){return t-Math.abs(xh(i,t*2)-t)}function ov(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function av(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function lv(i,t){return i+Math.floor(Math.random()*(t-i+1))}function cv(i,t){return i+Math.random()*(t-i)}function hv(i){return i*(.5-Math.random())}function uv(i){i!==void 0&&(Xu=i);let t=Xu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dv(i){return i*tr}function fv(i){return i*Jr}function pv(i){return(i&i-1)===0&&i!==0}function mv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function gv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vv(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const si={DEG2RAD:tr,RAD2DEG:Jr,generateUUID:ai,clamp:Ye,euclideanModulo:xh,mapLinear:nv,inverseLerp:iv,lerp:qr,damp:sv,pingpong:rv,smoothstep:ov,smootherstep:av,randInt:lv,randFloat:cv,randFloatSpread:hv,seededRandom:uv,degToRad:dv,radToDeg:fv,isPowerOfTwo:pv,ceilPowerOfTwo:mv,floorPowerOfTwo:gv,setQuaternionFromProperEuler:vv,normalize:re,denormalize:Nn};class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,s,r,o,a,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],v=s[0],m=s[3],f=s[6],x=s[1],_=s[4],M=s[7],R=s[2],A=s[5],P=s[8];return r[0]=o*v+a*x+l*R,r[3]=o*m+a*_+l*A,r[6]=o*f+a*M+l*P,r[1]=c*v+h*x+u*R,r[4]=c*m+h*_+u*A,r[7]=c*f+h*M+u*P,r[2]=d*v+p*x+g*R,r[5]=d*m+p*_+g*A,r[8]=d*f+p*M+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Al.makeScale(t,e)),this}rotate(t){return this.premultiply(Al.makeRotation(-t)),this}translate(t,e){return this.premultiply(Al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Al=new Yt;function Ip(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function to(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _v(){const i=to("canvas");return i.style.display="block",i}const qu={};function yh(i){i in qu||(qu[i]=!0,console.warn(i))}function xv(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const $u=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yu=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_o={[Ui]:{transfer:Ia,primaries:Ua,toReference:i=>i,fromReference:i=>i},[ae]:{transfer:ge,primaries:Ua,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[sl]:{transfer:Ia,primaries:Na,toReference:i=>i.applyMatrix3(Yu),fromReference:i=>i.applyMatrix3($u)},[_h]:{transfer:ge,primaries:Na,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Yu),fromReference:i=>i.applyMatrix3($u).convertLinearToSRGB()}},yv=new Set([Ui,sl]),oe={enabled:!0,_workingColorSpace:Ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!yv.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=_o[t].toReference,s=_o[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return _o[i].primaries},getTransfer:function(i){return i===mn?Ia:_o[i].transfer}};function er(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ms;class Mv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ms===void 0&&(ms=to("canvas")),ms.width=t.width,ms.height=t.height;const n=ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=to("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=er(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(er(e[n]/255)*255):e[n]=er(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wv=0;class Up{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Cl(s[o].image)):r.push(Cl(s[o]))}else r=Cl(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Cl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sv=0;class Ge extends yr{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=es,s=es,r=Te,o=ni,a=gn,l=hi,c=Ge.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=ai(),this.name="",this.source=new Up(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xn:t.x=t.x-Math.floor(t.x);break;case es:t.x=t.x<0?0:1;break;case qc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xn:t.y=t.y-Math.floor(t.y);break;case es:t.y=t.y<0?0:1;break;case qc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Sp;Ge.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,M=(p+1)/2,R=(f+1)/2,A=(h+d)/4,P=(u+v)/4,I=(g+m)/4;return _>M&&_>R?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=P/n):M>R?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=I/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=P/r,s=I/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bv extends yr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Te,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ge(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Up(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends bv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Np extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=de,this.minFilter=de,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fp extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=de,this.minFilter=de,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*v,x=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const R=Math.sqrt(_),A=Math.atan2(R,f*x);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const M=a*x;if(l=l*m+d*M,c=c*m+p*M,h=h*m+g*M,u=u*m+v*M,m===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ku.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ku.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pl.copy(this).projectOnVector(t),this.sub(Pl)}reflect(t){return this.sub(Pl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pl=new U,Ku=new Ni;class ao{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xo.copy(n.boundingBox)),xo.applyMatrix4(t.matrixWorld),this.union(xo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tr),yo.subVectors(this.max,Tr),gs.subVectors(t.a,Tr),vs.subVectors(t.b,Tr),_s.subVectors(t.c,Tr),fi.subVectors(vs,gs),pi.subVectors(_s,vs),Hi.subVectors(gs,_s);let e=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Hi.z,Hi.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Hi.z,0,-Hi.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Hi.y,Hi.x,0];return!Dl(e,gs,vs,_s,yo)||(e=[1,0,0,0,1,0,0,0,1],!Dl(e,gs,vs,_s,yo))?!1:(Mo.crossVectors(fi,pi),e=[Mo.x,Mo.y,Mo.z],Dl(e,gs,vs,_s,yo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Yn=[new U,new U,new U,new U,new U,new U,new U,new U],Cn=new U,xo=new ao,gs=new U,vs=new U,_s=new U,fi=new U,pi=new U,Hi=new U,Tr=new U,yo=new U,Mo=new U,Wi=new U;function Dl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Wi.fromArray(i,r);const a=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=t.dot(Wi),c=e.dot(Wi),h=n.dot(Wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Tv=new ao,Er=new U,Ll=new U;class lo{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Tv.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Er.subVectors(t,this.center);const e=Er.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Er,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Er.copy(t.center).add(Ll)),this.expandByPoint(Er.copy(t.center).sub(Ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new U,kl=new U,wo=new U,mi=new U,Il=new U,So=new U,Ul=new U;class Mh{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){kl.copy(t).add(e).multiplyScalar(.5),wo.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(kl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(wo),a=mi.dot(this.direction),l=-mi.dot(wo),c=mi.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(kl).addScaledVector(wo,d),p}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);const n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){Il.subVectors(e,t),So.subVectors(n,t),Ul.crossVectors(Il,So);let o=this.direction.dot(Ul),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,t);const l=a*this.direction.dot(So.crossVectors(mi,So));if(l<0)return null;const c=a*this.direction.dot(Il.cross(mi));if(c<0||l+c>o)return null;const h=-a*mi.dot(Ul);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,g,v,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,v,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/xs.setFromMatrixColumn(t,0).length(),r=1/xs.setFromMatrixColumn(t,1).length(),o=1/xs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d+v*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ev,t,Av)}lookAt(t,e,n){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),gi.crossVectors(n,un),gi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),gi.crossVectors(n,un)),gi.normalize(),bo.crossVectors(un,gi),s[0]=gi.x,s[4]=bo.x,s[8]=un.x,s[1]=gi.y,s[5]=bo.y,s[9]=un.y,s[2]=gi.z,s[6]=bo.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],x=n[3],_=n[7],M=n[11],R=n[15],A=s[0],P=s[4],I=s[8],b=s[12],S=s[1],D=s[5],X=s[9],V=s[13],tt=s[2],et=s[6],Q=s[10],it=s[14],q=s[3],xt=s[7],Et=s[11],bt=s[15];return r[0]=o*A+a*S+l*tt+c*q,r[4]=o*P+a*D+l*et+c*xt,r[8]=o*I+a*X+l*Q+c*Et,r[12]=o*b+a*V+l*it+c*bt,r[1]=h*A+u*S+d*tt+p*q,r[5]=h*P+u*D+d*et+p*xt,r[9]=h*I+u*X+d*Q+p*Et,r[13]=h*b+u*V+d*it+p*bt,r[2]=g*A+v*S+m*tt+f*q,r[6]=g*P+v*D+m*et+f*xt,r[10]=g*I+v*X+m*Q+f*Et,r[14]=g*b+v*V+m*it+f*bt,r[3]=x*A+_*S+M*tt+R*q,r[7]=x*P+_*D+M*et+R*xt,r[11]=x*I+_*X+M*Q+R*Et,r[15]=x*b+_*V+M*it+R*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+v*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],x=u*m*c-v*d*c+v*l*p-a*m*p-u*l*f+a*d*f,_=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,M=h*v*c-g*u*c+g*a*p-o*v*p-h*a*f+o*u*f,R=g*u*l-h*v*l-g*a*d+o*v*d+h*a*m-o*u*m,A=e*x+n*_+s*M+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return t[0]=x*P,t[1]=(v*d*r-u*m*r-v*s*p+n*m*p+u*s*f-n*d*f)*P,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*f+n*l*f)*P,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*P,t[4]=_*P,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*P,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*P,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*P,t[8]=M*P,t[9]=(g*u*r-h*v*r-g*n*p+e*v*p+h*n*f-e*u*f)*P,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*f+e*a*f)*P,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*P,t[12]=R*P,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*P,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*m-e*a*m)*P,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,v=o*h,m=o*u,f=a*u,x=l*c,_=l*h,M=l*u,R=n.x,A=n.y,P=n.z;return s[0]=(1-(v+f))*R,s[1]=(p+M)*R,s[2]=(g-_)*R,s[3]=0,s[4]=(p-M)*A,s[5]=(1-(d+f))*A,s[6]=(m+x)*A,s[7]=0,s[8]=(g+_)*P,s[9]=(m-x)*P,s[10]=(1-(d+v))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=xs.set(s[0],s[1],s[2]).length();const o=xs.set(s[4],s[5],s[6]).length(),a=xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Pn.copy(this);const c=1/r,h=1/o,u=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,e.setFromRotationMatrix(Pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ii){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(a===ii)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Fa)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ii){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,p=(n+s)*h;let g,v;if(a===ii)g=(o+r)*u,v=-2*u;else if(a===Fa)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const xs=new U,Pn=new fe,Ev=new U(0,0,0),Av=new U(1,1,1),gi=new U,bo=new U,un=new U,ju=new fe,Zu=new Ni;class Xn{constructor(t=0,e=0,n=0,s=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ju.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ju,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zu.setFromEuler(this),this.setFromQuaternion(Zu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Op{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rv=0;const Qu=new U,ys=new Ni,jn=new fe,To=new U,Ar=new U,Cv=new U,Pv=new Ni,Ju=new U(1,0,0),td=new U(0,1,0),ed=new U(0,0,1),nd={type:"added"},Dv={type:"removed"},Ms={type:"childadded",child:null},Nl={type:"childremoved",child:null};class De extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new U,e=new Xn,n=new Ni,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Yt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(Ju,t)}rotateY(t){return this.rotateOnAxis(td,t)}rotateZ(t){return this.rotateOnAxis(ed,t)}translateOnAxis(t,e){return Qu.copy(t).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ju,t)}translateY(t){return this.translateOnAxis(td,t)}translateZ(t){return this.translateOnAxis(ed,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?To.copy(t):To.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Ar,To,this.up):jn.lookAt(To,Ar,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(jn),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nd),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dv),Nl.child=t,this.dispatchEvent(Nl),Nl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nd),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,t,Cv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,Pv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}De.DEFAULT_UP=new U(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new U,Zn=new U,Fl=new U,Qn=new U,ws=new U,Ss=new U,id=new U,Ol=new U,Bl=new U,zl=new U;class An{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Dn.subVectors(t,e),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Dn.subVectors(s,e),Zn.subVectors(n,e),Fl.subVectors(t,e);const o=Dn.dot(Dn),a=Dn.dot(Zn),l=Dn.dot(Fl),c=Zn.dot(Zn),h=Zn.dot(Fl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static isFrontFacing(t,e,n,s){return Dn.subVectors(n,e),Zn.subVectors(t,e),Dn.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Dn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return An.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ws.subVectors(s,n),Ss.subVectors(r,n),Ol.subVectors(t,n);const l=ws.dot(Ol),c=Ss.dot(Ol);if(l<=0&&c<=0)return e.copy(n);Bl.subVectors(t,s);const h=ws.dot(Bl),u=Ss.dot(Bl);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ws,o);zl.subVectors(t,r);const p=ws.dot(zl),g=Ss.dot(zl);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ss,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return id.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(id,a);const f=1/(m+v+d);return o=v*f,a=d*f,e.copy(n).addScaledVector(ws,o).addScaledVector(Ss,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function Hl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class St{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=xh(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Hl(o,r,t+1/3),this.g=Hl(o,r,t),this.b=Hl(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ae){const n=Bp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}copyLinearToSRGB(t){return this.r=Rl(t.r),this.g=Rl(t.g),this.b=Rl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ae){return oe.fromWorkingColorSpace($e.copy(this),t),Math.round(Ye($e.r*255,0,255))*65536+Math.round(Ye($e.g*255,0,255))*256+Math.round(Ye($e.b*255,0,255))}getHexString(t=ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace($e.copy(this),e);const n=$e.r,s=$e.g,r=$e.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=ae){oe.fromWorkingColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,s=$e.b;return t!==ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(Eo);const n=qr(vi.h,Eo.h,e),s=qr(vi.s,Eo.s,e),r=qr(vi.l,Eo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new St;St.NAMES=Bp;let Lv=0;class Fi extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=Qs,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wc,this.blendDst=Gc,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Gc&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==La&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ye extends Fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=wp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new U,Ao=new Bt;class ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$c,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return yh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ao.fromBufferAttribute(this,e),Ao.applyMatrix3(t),this.setXY(e,Ao.x,Ao.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$c&&(t.usage=this.usage),t}}class zp extends ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hp extends ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ke extends ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let kv=0;const Mn=new fe,Wl=new De,bs=new U,dn=new ao,Rr=new ao,Be=new U;class Ve extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ip(t)?Hp:zp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return Wl.lookAt(t),Wl.updateMatrix(),this.applyMatrix4(Wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ke(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(dn.min,Rr.min),dn.expandByPoint(Be),Be.addVectors(dn.max,Rr.max),dn.expandByPoint(Be)):(dn.expandByPoint(Rr.min),dn.expandByPoint(Rr.max))}dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Be.fromBufferAttribute(a,c),l&&(bs.fromBufferAttribute(t,c),Be.add(bs)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new U,l[I]=new U;const c=new U,h=new U,u=new U,d=new Bt,p=new Bt,g=new Bt,v=new U,m=new U;function f(I,b,S){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),a[I].add(v),a[b].add(v),a[S].add(v),l[I].add(m),l[b].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,b=x.length;I<b;++I){const S=x[I],D=S.start,X=S.count;for(let V=D,tt=D+X;V<tt;V+=3)f(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const _=new U,M=new U,R=new U,A=new U;function P(I){R.fromBufferAttribute(s,I),A.copy(R);const b=a[I];_.copy(b),_.sub(R.multiplyScalar(R.dot(b))).normalize(),M.crossVectors(A,b);const D=M.dot(l[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,D)}for(let I=0,b=x.length;I<b;++I){const S=x[I],D=S.start,X=S.count;for(let V=D,tt=D+X;V<tt;V+=3)P(t.getX(V+0)),P(t.getX(V+1)),P(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new ue(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sd=new fe,Gi=new Mh,Ro=new lo,rd=new U,Ts=new U,Es=new U,As=new U,Gl=new U,Co=new U,Po=new Bt,Do=new Bt,Lo=new Bt,od=new U,ad=new U,ld=new U,ko=new U,Io=new U;class Jt extends De{constructor(t=new Ve,e=new ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Gl.fromBufferAttribute(u,t),o?Co.addScaledVector(Gl,h):Co.addScaledVector(Gl.sub(e),h))}e.add(Co)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(r),Gi.copy(t.ray).recast(t.near),!(Ro.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Ro,rd)===null||Gi.origin.distanceToSquared(rd)>(t.far-t.near)**2))&&(sd.copy(r).invert(),Gi.copy(t.ray).applyMatrix4(sd),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=x,R=_;M<R;M+=3){const A=a.getX(M),P=a.getX(M+1),I=a.getX(M+2);s=Uo(this,f,t,n,c,h,u,A,P,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const x=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);s=Uo(this,o,t,n,c,h,u,x,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=x,R=_;M<R;M+=3){const A=M,P=M+1,I=M+2;s=Uo(this,f,t,n,c,h,u,A,P,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const x=m,_=m+1,M=m+2;s=Uo(this,o,t,n,c,h,u,x,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Iv(i,t,e,n,s,r,o,a){let l;if(t.side===ze?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Di,a),l===null)return null;Io.copy(a),Io.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Io);return c<e.near||c>e.far?null:{distance:c,point:Io.clone(),object:i}}function Uo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ts),i.getVertexPosition(l,Es),i.getVertexPosition(c,As);const h=Iv(i,t,e,n,Ts,Es,As,ko);if(h){s&&(Po.fromBufferAttribute(s,a),Do.fromBufferAttribute(s,l),Lo.fromBufferAttribute(s,c),h.uv=An.getInterpolation(ko,Ts,Es,As,Po,Do,Lo,new Bt)),r&&(Po.fromBufferAttribute(r,a),Do.fromBufferAttribute(r,l),Lo.fromBufferAttribute(r,c),h.uv1=An.getInterpolation(ko,Ts,Es,As,Po,Do,Lo,new Bt)),o&&(od.fromBufferAttribute(o,a),ad.fromBufferAttribute(o,l),ld.fromBufferAttribute(o,c),h.normal=An.getInterpolation(ko,Ts,Es,As,od,ad,ld,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new U,materialIndex:0};An.getNormal(Ts,Es,As,u.normal),h.face=u}return h}class Qe extends Ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(u,2));function g(v,m,f,x,_,M,R,A,P,I,b){const S=M/P,D=R/I,X=M/2,V=R/2,tt=A/2,et=P+1,Q=I+1;let it=0,q=0;const xt=new U;for(let Et=0;Et<Q;Et++){const bt=Et*D-V;for(let Kt=0;Kt<et;Kt++){const jt=Kt*S-X;xt[v]=jt*x,xt[m]=bt*_,xt[f]=tt,c.push(xt.x,xt.y,xt.z),xt[v]=0,xt[m]=0,xt[f]=A>0?1:-1,h.push(xt.x,xt.y,xt.z),u.push(Kt/P),u.push(1-Et/I),it+=1}}for(let Et=0;Et<I;Et++)for(let bt=0;bt<P;bt++){const Kt=d+bt+et*Et,jt=d+bt+et*(Et+1),Y=d+(bt+1)+et*(Et+1),ot=d+(bt+1)+et*Et;l.push(Kt,jt,ot),l.push(jt,Y,ot),q+=6}a.addGroup(p,q,b),p+=q,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function dr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function en(i){const t={};for(let e=0;e<i.length;e++){const n=dr(i[e]);for(const s in n)t[s]=n[s]}return t}function Uv(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wp(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const Nv={clone:dr,merge:en};var Fv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ze extends Fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fv,this.fragmentShader=Ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=dr(t.uniforms),this.uniformsGroups=Uv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gp extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new U,cd=new Bt,hd=new Bt;class Ke extends Gp{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Jr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,cd,hd),e.subVectors(hd,cd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(tr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Rs=-90,Cs=1;class Bv extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ke(Rs,Cs,t,e);s.layers=this.layers,this.add(s);const r=new Ke(Rs,Cs,t,e);r.layers=this.layers,this.add(r);const o=new Ke(Rs,Cs,t,e);o.layers=this.layers,this.add(o);const a=new Ke(Rs,Cs,t,e);a.layers=this.layers,this.add(a);const l=new Ke(Rs,Cs,t,e);l.layers=this.layers,this.add(l);const c=new Ke(Rs,Cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Vp extends Ge{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:lr,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zv extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Vp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Te}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qe(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Ri});r.uniforms.tEquirect.value=e;const o=new Jt(s,r),a=e.minFilter;return e.minFilter===ni&&(e.minFilter=Te),new Bv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Vl=new U,Hv=new U,Wv=new Yt;class In{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Vl.subVectors(n,e).cross(Hv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Vl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wv.getNormalMatrix(t),s=this.coplanarPoint(Vl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new lo,No=new U;class wh{constructor(t=new In,e=new In,n=new In,s=new In,r=new In,o=new In){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],x=s[13],_=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,m-p,M-f).normalize(),n[1].setComponents(l+r,d+c,m+p,M+f).normalize(),n[2].setComponents(l+o,d+h,m+g,M+x).normalize(),n[3].setComponents(l-o,d-h,m-g,M-x).normalize(),n[4].setComponents(l-a,d-u,m-v,M-_).normalize(),e===ii)n[5].setComponents(l+a,d+u,m+v,M+_).normalize();else if(e===Fa)n[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(t){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(No.x=s.normal.x>0?t.max.x:t.min.x,No.y=s.normal.y>0?t.max.y:t.min.y,No.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(No)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xp(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gv(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,a),u.count===-1&&d.length===0&&i.bufferSubData(c,0,h),d.length!==0){for(let p=0,g=d.length;p<g;p++){const v=d[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ln extends Ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const x=f*d-o;for(let _=0;_<c;_++){const M=_*u-r;g.push(M,-x,0),v.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const _=x+c*f,M=x+c*(f+1),R=x+1+c*(f+1),A=x+1+c*f;p.push(_,M,A),p.push(M,R,A)}this.setIndex(p),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(v,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.width,t.height,t.widthSegments,t.heightSegments)}}var Vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xv=`#ifdef USE_ALPHAHASH
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
#endif`,qv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$v=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jv=`#ifdef USE_AOMAP
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
#endif`,Zv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qv=`#ifdef USE_BATCHING
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
#endif`,Jv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,t_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,i_=`#ifdef USE_IRIDESCENCE
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
#endif`,s_=`#ifdef USE_BUMPMAP
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
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,f_=`#define PI 3.141592653589793
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
} // validated`,p_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,m_=`vec3 transformedNormal = objectNormal;
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
#endif`,g_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,__=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y_="gl_FragColor = linearToOutputTexel( gl_FragColor );",M_=`
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
}`,w_=`#ifdef USE_ENVMAP
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
#endif`,S_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,b_=`#ifdef USE_ENVMAP
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
#endif`,T_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
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
#endif`,A_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D_=`#ifdef USE_GRADIENTMAP
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
}`,L_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U_=`uniform bool receiveShadow;
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
#endif`,N_=`#ifdef USE_ENVMAP
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
#endif`,F_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,z_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H_=`PhysicalMaterial material;
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
#endif`,W_=`struct PhysicalMaterial {
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
}`,G_=`
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
#endif`,V_=`#if defined( RE_IndirectDiffuse )
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
#endif`,X_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,j_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J_=`#if defined( USE_POINTS_UV )
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
#endif`,tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ix=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rx=`#ifdef USE_MORPHTARGETS
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
#endif`,ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ax=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dx=`#ifdef USE_NORMALMAP
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
#endif`,fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,px=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_x=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rx=`float getShadowMask() {
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
}`,Cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Px=`#ifdef USE_SKINNING
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
#endif`,Dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lx=`#ifdef USE_SKINNING
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
#endif`,kx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ux=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fx=`#ifdef USE_TRANSMISSION
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
#endif`,Ox=`#ifdef USE_TRANSMISSION
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vx=`uniform sampler2D t2D;
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`#include <common>
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
}`,jx=`#if DEPTH_PACKING == 3200
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
}`,Zx=`#define DISTANCE
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
}`,Qx=`#define DISTANCE
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
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ty=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ey=`uniform float scale;
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
}`,ny=`uniform vec3 diffuse;
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
}`,iy=`#include <common>
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
}`,sy=`uniform vec3 diffuse;
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
}`,ry=`#define LAMBERT
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
}`,oy=`#define LAMBERT
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
}`,ay=`#define MATCAP
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
}`,ly=`#define MATCAP
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
}`,cy=`#define NORMAL
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
}`,hy=`#define NORMAL
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
}`,uy=`#define PHONG
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
}`,dy=`#define PHONG
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
}`,fy=`#define STANDARD
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
}`,py=`#define STANDARD
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
}`,my=`#define TOON
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
}`,gy=`#define TOON
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
}`,vy=`uniform float size;
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
}`,_y=`uniform vec3 diffuse;
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
}`,xy=`#include <common>
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
}`,yy=`uniform vec3 color;
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
}`,My=`uniform float rotation;
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
}`,wy=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Vv,alphahash_pars_fragment:Xv,alphamap_fragment:qv,alphamap_pars_fragment:$v,alphatest_fragment:Yv,alphatest_pars_fragment:Kv,aomap_fragment:jv,aomap_pars_fragment:Zv,batching_pars_vertex:Qv,batching_vertex:Jv,begin_vertex:t_,beginnormal_vertex:e_,bsdfs:n_,iridescence_fragment:i_,bumpmap_pars_fragment:s_,clipping_planes_fragment:r_,clipping_planes_pars_fragment:o_,clipping_planes_pars_vertex:a_,clipping_planes_vertex:l_,color_fragment:c_,color_pars_fragment:h_,color_pars_vertex:u_,color_vertex:d_,common:f_,cube_uv_reflection_fragment:p_,defaultnormal_vertex:m_,displacementmap_pars_vertex:g_,displacementmap_vertex:v_,emissivemap_fragment:__,emissivemap_pars_fragment:x_,colorspace_fragment:y_,colorspace_pars_fragment:M_,envmap_fragment:w_,envmap_common_pars_fragment:S_,envmap_pars_fragment:b_,envmap_pars_vertex:T_,envmap_physical_pars_fragment:N_,envmap_vertex:E_,fog_vertex:A_,fog_pars_vertex:R_,fog_fragment:C_,fog_pars_fragment:P_,gradientmap_pars_fragment:D_,lightmap_pars_fragment:L_,lights_lambert_fragment:k_,lights_lambert_pars_fragment:I_,lights_pars_begin:U_,lights_toon_fragment:F_,lights_toon_pars_fragment:O_,lights_phong_fragment:B_,lights_phong_pars_fragment:z_,lights_physical_fragment:H_,lights_physical_pars_fragment:W_,lights_fragment_begin:G_,lights_fragment_maps:V_,lights_fragment_end:X_,logdepthbuf_fragment:q_,logdepthbuf_pars_fragment:$_,logdepthbuf_pars_vertex:Y_,logdepthbuf_vertex:K_,map_fragment:j_,map_pars_fragment:Z_,map_particle_fragment:Q_,map_particle_pars_fragment:J_,metalnessmap_fragment:tx,metalnessmap_pars_fragment:ex,morphinstance_vertex:nx,morphcolor_vertex:ix,morphnormal_vertex:sx,morphtarget_pars_vertex:rx,morphtarget_vertex:ox,normal_fragment_begin:ax,normal_fragment_maps:lx,normal_pars_fragment:cx,normal_pars_vertex:hx,normal_vertex:ux,normalmap_pars_fragment:dx,clearcoat_normal_fragment_begin:fx,clearcoat_normal_fragment_maps:px,clearcoat_pars_fragment:mx,iridescence_pars_fragment:gx,opaque_fragment:vx,packing:_x,premultiplied_alpha_fragment:xx,project_vertex:yx,dithering_fragment:Mx,dithering_pars_fragment:wx,roughnessmap_fragment:Sx,roughnessmap_pars_fragment:bx,shadowmap_pars_fragment:Tx,shadowmap_pars_vertex:Ex,shadowmap_vertex:Ax,shadowmask_pars_fragment:Rx,skinbase_vertex:Cx,skinning_pars_vertex:Px,skinning_vertex:Dx,skinnormal_vertex:Lx,specularmap_fragment:kx,specularmap_pars_fragment:Ix,tonemapping_fragment:Ux,tonemapping_pars_fragment:Nx,transmission_fragment:Fx,transmission_pars_fragment:Ox,uv_pars_fragment:Bx,uv_pars_vertex:zx,uv_vertex:Hx,worldpos_vertex:Wx,background_vert:Gx,background_frag:Vx,backgroundCube_vert:Xx,backgroundCube_frag:qx,cube_vert:$x,cube_frag:Yx,depth_vert:Kx,depth_frag:jx,distanceRGBA_vert:Zx,distanceRGBA_frag:Qx,equirect_vert:Jx,equirect_frag:ty,linedashed_vert:ey,linedashed_frag:ny,meshbasic_vert:iy,meshbasic_frag:sy,meshlambert_vert:ry,meshlambert_frag:oy,meshmatcap_vert:ay,meshmatcap_frag:ly,meshnormal_vert:cy,meshnormal_frag:hy,meshphong_vert:uy,meshphong_frag:dy,meshphysical_vert:fy,meshphysical_frag:py,meshtoon_vert:my,meshtoon_frag:gy,points_vert:vy,points_frag:_y,shadow_vert:xy,shadow_frag:yy,sprite_vert:My,sprite_frag:wy},pt={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Vn={basic:{uniforms:en([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:en([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new St(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:en([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:en([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:en([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new St(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:en([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:en([pt.points,pt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:en([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:en([pt.common,pt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:en([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:en([pt.sprite,pt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:en([pt.common,pt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:en([pt.lights,pt.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Vn.physical={uniforms:en([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Fo={r:0,b:0,g:0},Xi=new Xn,Sy=new fe;function by(i,t,e,n,s,r,o){const a=new St(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1;const M=g(x);M===null?f(a,l):M&&M.isColor&&(f(M,1),_=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,_){const M=g(_);M&&(M.isCubeTexture||M.mapping===il)?(h===void 0&&(h=new Jt(new Qe(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:dr(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Xi.copy(_.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sy.makeRotationFromEuler(Xi)),h.material.toneMapped=oe.getTransfer(M.colorSpace)!==ge,(u!==M||d!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,p=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Jt(new ln(2,2),new Ze({name:"BackgroundMaterial",uniforms:dr(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=oe.getTransfer(M.colorSpace)!==ge,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,p=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,_){x.getRGB(Fo,Wp(i)),n.buffers.color.setClear(Fo.r,Fo.g,Fo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(a,l)},render:v,addToRenderList:m}}function Ty(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(S,D,X,V,tt){let et=!1;const Q=u(V,X,D);r!==Q&&(r=Q,c(r.object)),et=p(S,V,X,tt),et&&g(S,V,X,tt),tt!==null&&t.update(tt,i.ELEMENT_ARRAY_BUFFER),(et||o)&&(o=!1,M(S,D,X,V),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,D,X){const V=X.wireframe===!0;let tt=n[S.id];tt===void 0&&(tt={},n[S.id]=tt);let et=tt[D.id];et===void 0&&(et={},tt[D.id]=et);let Q=et[V];return Q===void 0&&(Q=d(l()),et[V]=Q),Q}function d(S){const D=[],X=[],V=[];for(let tt=0;tt<e;tt++)D[tt]=0,X[tt]=0,V[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:V,object:S,attributes:{},index:null}}function p(S,D,X,V){const tt=r.attributes,et=D.attributes;let Q=0;const it=X.getAttributes();for(const q in it)if(it[q].location>=0){const Et=tt[q];let bt=et[q];if(bt===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(bt=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(bt=S.instanceColor)),Et===void 0||Et.attribute!==bt||bt&&Et.data!==bt.data)return!0;Q++}return r.attributesNum!==Q||r.index!==V}function g(S,D,X,V){const tt={},et=D.attributes;let Q=0;const it=X.getAttributes();for(const q in it)if(it[q].location>=0){let Et=et[q];Et===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(Et=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(Et=S.instanceColor));const bt={};bt.attribute=Et,Et&&Et.data&&(bt.data=Et.data),tt[q]=bt,Q++}r.attributes=tt,r.attributesNum=Q,r.index=V}function v(){const S=r.newAttributes;for(let D=0,X=S.length;D<X;D++)S[D]=0}function m(S){f(S,0)}function f(S,D){const X=r.newAttributes,V=r.enabledAttributes,tt=r.attributeDivisors;X[S]=1,V[S]===0&&(i.enableVertexAttribArray(S),V[S]=1),tt[S]!==D&&(i.vertexAttribDivisor(S,D),tt[S]=D)}function x(){const S=r.newAttributes,D=r.enabledAttributes;for(let X=0,V=D.length;X<V;X++)D[X]!==S[X]&&(i.disableVertexAttribArray(X),D[X]=0)}function _(S,D,X,V,tt,et,Q){Q===!0?i.vertexAttribIPointer(S,D,X,tt,et):i.vertexAttribPointer(S,D,X,V,tt,et)}function M(S,D,X,V){v();const tt=V.attributes,et=X.getAttributes(),Q=D.defaultAttributeValues;for(const it in et){const q=et[it];if(q.location>=0){let xt=tt[it];if(xt===void 0&&(it==="instanceMatrix"&&S.instanceMatrix&&(xt=S.instanceMatrix),it==="instanceColor"&&S.instanceColor&&(xt=S.instanceColor)),xt!==void 0){const Et=xt.normalized,bt=xt.itemSize,Kt=t.get(xt);if(Kt===void 0)continue;const jt=Kt.buffer,Y=Kt.type,ot=Kt.bytesPerElement,wt=Y===i.INT||Y===i.UNSIGNED_INT||xt.gpuType===bp;if(xt.isInterleavedBufferAttribute){const L=xt.data,H=L.stride,z=xt.offset;if(L.isInstancedInterleavedBuffer){for(let j=0;j<q.locationSize;j++)f(q.location+j,L.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let j=0;j<q.locationSize;j++)m(q.location+j);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let j=0;j<q.locationSize;j++)_(q.location+j,bt/q.locationSize,Y,Et,H*ot,(z+bt/q.locationSize*j)*ot,wt)}else{if(xt.isInstancedBufferAttribute){for(let L=0;L<q.locationSize;L++)f(q.location+L,xt.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let L=0;L<q.locationSize;L++)m(q.location+L);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let L=0;L<q.locationSize;L++)_(q.location+L,bt/q.locationSize,Y,Et,bt*ot,bt/q.locationSize*L*ot,wt)}}else if(Q!==void 0){const Et=Q[it];if(Et!==void 0)switch(Et.length){case 2:i.vertexAttrib2fv(q.location,Et);break;case 3:i.vertexAttrib3fv(q.location,Et);break;case 4:i.vertexAttrib4fv(q.location,Et);break;default:i.vertexAttrib1fv(q.location,Et)}}}}x()}function R(){I();for(const S in n){const D=n[S];for(const X in D){const V=D[X];for(const tt in V)h(V[tt].object),delete V[tt];delete D[X]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const X in D){const V=D[X];for(const tt in V)h(V[tt].object),delete V[tt];delete D[X]}delete n[S.id]}function P(S){for(const D in n){const X=n[D];if(X[S.id]===void 0)continue;const V=X[S.id];for(const tt in V)h(V[tt].object),delete V[tt];delete X[S.id]}}function I(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Ey(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<u;p++)this.render(c[p],h[p]);else{d.multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ay(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==gn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==hi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Si&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:M,maxSamples:R}}function Ry(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new In,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,_=x*4;let M=f.clippingState||null;l.value=M,M=h(g,d,_,p);for(let R=0;R!==_;++R)M[R]=e[R];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,M=p;_!==v;++_,M+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Cy(i){let t=new WeakMap;function e(o,a){return a===Vc?o.mapping=lr:a===Xc&&(o.mapping=cr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vc||a===Xc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zv(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class eo extends Gp{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const qs=4,ud=[.125,.215,.35,.446,.526,.582],Qi=20,Xl=new eo,dd=new St;let ql=null,$l=0,Yl=0,Kl=!1;const ji=(1+Math.sqrt(5))/2,Ps=1/ji,fd=[new U(-ji,Ps,0),new U(ji,Ps,0),new U(-Ps,0,ji),new U(Ps,0,ji),new U(0,ji,-Ps),new U(0,ji,Ps),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class pd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ql=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ql,$l,Yl),this._renderer.xr.enabled=Kl,t.scissorTest=!1,Oo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===lr||t.mapping===cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ql=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Te,minFilter:Te,generateMipmaps:!1,type:Ii,format:gn,colorSpace:Ui,depthBuffer:!1},s=md(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=md(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Py(r)),this._blurMaterial=Dy(r,t,e)}return s}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,Xl)}_sceneToCubeUV(t,e,n,s){const a=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(dd),h.toneMapping=oi,h.autoClear=!1;const p=new ye({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new Jt(new Qe,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(dd),v=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const _=this._cubeSize;Oo(s,x*_,f>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===lr||t.mapping===cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Oo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Xl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fd[(s-r-1)%fd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Jt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Qi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Qi;m>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qi}`);const f=[];let x=0;for(let P=0;P<Qi;++P){const I=P/v,b=Math.exp(-I*I/2);f.push(b),P===0?x+=b:P<m&&(x+=2*b)}for(let P=0;P<f.length;P++)f[P]=f[P]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const M=this._sizeLods[s],R=3*M*(s>_-qs?s-_+qs:0),A=4*(this._cubeSize-M);Oo(e,R,A,3*M,2*M),l.setRenderTarget(e),l.render(u,Xl)}}function Py(i){const t=[],e=[],n=[];let s=i;const r=i-qs+1+ud.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-qs?l=ud[o-i+qs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,x=new Float32Array(v*g*p),_=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let A=0;A<p;A++){const P=A%3*2/3-1,I=A>2?0:-1,b=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];x.set(b,v*g*A),_.set(d,m*g*A);const S=[A,A,A,A,A,A];M.set(S,f*g*A)}const R=new Ve;R.setAttribute("position",new ue(x,v)),R.setAttribute("uv",new ue(_,m)),R.setAttribute("faceIndex",new ue(M,f)),t.push(R),s>qs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function md(i,t,e){const n=new Fn(i,t,e);return n.texture.mapping=il,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Dy(i,t,e){const n=new Float32Array(Qi),s=new U(0,1,0);return new Ze({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sh(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function gd(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sh(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function vd(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Sh(){return`

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
	`}function Ly(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vc||l===Xc,h=l===lr||l===cr;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new pd(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new pd(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ky(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&yh("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Iy(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let _=0,M=x.length;_<M;_+=3){const R=x[_+0],A=x[_+1],P=x[_+2];d.push(R,A,A,P,P,R)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,M=x.length/3-1;_<M;_+=3){const R=_+0,A=_+1,P=_+2;d.push(R,A,A,P,P,R)}}else return;const m=new(Ip(d)?Hp:zp)(d,1);m.version=v;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Uy(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g;m++)this.render(d[m]/o,p[m]);else{v.multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}}function u(d,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let f=0;for(let x=0;x<g;x++)f+=p[x];for(let x=0;x<v.length;x++)e.update(f,n,v[x])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ny(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Fy(i,t,e){const n=new WeakMap,s=new _e;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let R=a.attributes.position.count*M,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const P=new Float32Array(R*A*4*u),I=new Np(P,R,A,u);I.type=Si,I.needsUpdate=!0;const b=M*4;for(let D=0;D<u;D++){const X=f[D],V=x[D],tt=_[D],et=R*A*4*D;for(let Q=0;Q<X.count;Q++){const it=Q*b;g===!0&&(s.fromBufferAttribute(X,Q),P[et+it+0]=s.x,P[et+it+1]=s.y,P[et+it+2]=s.z,P[et+it+3]=0),v===!0&&(s.fromBufferAttribute(V,Q),P[et+it+4]=s.x,P[et+it+5]=s.y,P[et+it+6]=s.z,P[et+it+7]=0),m===!0&&(s.fromBufferAttribute(tt,Q),P[et+it+8]=s.x,P[et+it+9]=s.y,P[et+it+10]=s.z,P[et+it+11]=tt.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new Bt(R,A)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Oy(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class rl extends Ge{constructor(t,e,n,s,r,o,a,l,c,h=Js){if(h!==Js&&h!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Js&&(n=Li),n===void 0&&h===ur&&(n=hr),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:de,this.minFilter=l!==void 0?l:de,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const qp=new Ge,$p=new rl(1,1);$p.compareFunction=kp;const Yp=new Np,Kp=new Fp,jp=new Vp,_d=[],xd=[],yd=new Float32Array(16),Md=new Float32Array(9),wd=new Float32Array(4);function Mr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=_d[s];if(r===void 0&&(r=new Float32Array(s),_d[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ol(i,t){let e=xd[t];e===void 0&&(e=new Int32Array(t),xd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function By(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function zy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function Hy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function Wy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function Gy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;wd.set(n),i.uniformMatrix2fv(this.addr,!1,wd),Ne(e,n)}}function Vy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Md.set(n),i.uniformMatrix3fv(this.addr,!1,Md),Ne(e,n)}}function Xy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;yd.set(n),i.uniformMatrix4fv(this.addr,!1,yd),Ne(e,n)}}function qy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $y(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function Yy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function Ky(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function jy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Zy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function Qy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function Jy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function tM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?$p:qp;e.setTexture2D(t||r,s)}function eM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Kp,s)}function nM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||jp,s)}function iM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yp,s)}function sM(i){switch(i){case 5126:return By;case 35664:return zy;case 35665:return Hy;case 35666:return Wy;case 35674:return Gy;case 35675:return Vy;case 35676:return Xy;case 5124:case 35670:return qy;case 35667:case 35671:return $y;case 35668:case 35672:return Yy;case 35669:case 35673:return Ky;case 5125:return jy;case 36294:return Zy;case 36295:return Qy;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return tM;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return nM;case 36289:case 36303:case 36311:case 36292:return iM}}function rM(i,t){i.uniform1fv(this.addr,t)}function oM(i,t){const e=Mr(t,this.size,2);i.uniform2fv(this.addr,e)}function aM(i,t){const e=Mr(t,this.size,3);i.uniform3fv(this.addr,e)}function lM(i,t){const e=Mr(t,this.size,4);i.uniform4fv(this.addr,e)}function cM(i,t){const e=Mr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hM(i,t){const e=Mr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function uM(i,t){const e=Mr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function dM(i,t){i.uniform1iv(this.addr,t)}function fM(i,t){i.uniform2iv(this.addr,t)}function pM(i,t){i.uniform3iv(this.addr,t)}function mM(i,t){i.uniform4iv(this.addr,t)}function gM(i,t){i.uniform1uiv(this.addr,t)}function vM(i,t){i.uniform2uiv(this.addr,t)}function _M(i,t){i.uniform3uiv(this.addr,t)}function xM(i,t){i.uniform4uiv(this.addr,t)}function yM(i,t,e){const n=this.cache,s=t.length,r=ol(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||qp,r[o])}function MM(i,t,e){const n=this.cache,s=t.length,r=ol(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Kp,r[o])}function wM(i,t,e){const n=this.cache,s=t.length,r=ol(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||jp,r[o])}function SM(i,t,e){const n=this.cache,s=t.length,r=ol(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Yp,r[o])}function bM(i){switch(i){case 5126:return rM;case 35664:return oM;case 35665:return aM;case 35666:return lM;case 35674:return cM;case 35675:return hM;case 35676:return uM;case 5124:case 35670:return dM;case 35667:case 35671:return fM;case 35668:case 35672:return pM;case 35669:case 35673:return mM;case 5125:return gM;case 36294:return vM;case 36295:return _M;case 36296:return xM;case 35678:case 36198:case 36298:case 36306:case 35682:return yM;case 35679:case 36299:case 36307:return MM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return SM}}class TM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sM(e.type)}}class EM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bM(e.type)}}class AM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const jl=/(\w+)(\])?(\[|\.)?/g;function Sd(i,t){i.seq.push(t),i.map[t.id]=t}function RM(i,t,e){const n=i.name,s=n.length;for(jl.lastIndex=0;;){const r=jl.exec(n),o=jl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Sd(e,c===void 0?new TM(a,i,t):new EM(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new AM(a),Sd(e,u)),e=u}}}class Ea{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);RM(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function bd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const CM=37297;let PM=0;function DM(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function LM(i){const t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i);let n;switch(t===e?n="":t===Na&&e===Ua?n="LinearDisplayP3ToLinearSRGB":t===Ua&&e===Na&&(n="LinearSRGBToLinearDisplayP3"),i){case Ui:case sl:return[n,"LinearTransferOETF"];case ae:case _h:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Td(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+DM(i.getShaderSource(t),o)}else return s}function kM(i,t){const e=LM(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function IM(i,t){let e;switch(t){case Dg:e="Linear";break;case Lg:e="Reinhard";break;case kg:e="OptimizedCineon";break;case Ig:e="ACESFilmic";break;case Ng:e="AgX";break;case Fg:e="Neutral";break;case Ug:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function UM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function NM(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function FM(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function zr(i){return i!==""}function Ed(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ad(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const OM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(i){return i.replace(OM,zM)}const BM=new Map;function zM(i,t){let e=$t[t];if(e===void 0){const n=BM.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Yc(e)}const HM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(i){return i.replace(HM,WM)}function WM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function GM(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yp?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function VM(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case lr:case cr:t="ENVMAP_TYPE_CUBE";break;case il:t="ENVMAP_TYPE_CUBE_UV";break}return t}function XM(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cr:t="ENVMAP_MODE_REFRACTION";break}return t}function qM(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wp:t="ENVMAP_BLENDING_MULTIPLY";break;case Cg:t="ENVMAP_BLENDING_MIX";break;case Pg:t="ENVMAP_BLENDING_ADD";break}return t}function $M(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function YM(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=GM(e),c=VM(e),h=XM(e),u=qM(e),d=$M(e),p=UM(e),g=NM(r),v=s.createProgram();let m,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zr).join(`
`),f.length>0&&(f+=`
`)):(m=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),f=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?$t.tonemapping_pars_fragment:"",e.toneMapping!==oi?IM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,kM("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zr).join(`
`)),o=Yc(o),o=Ed(o,e),o=Ad(o,e),a=Yc(a),a=Ed(a,e),a=Ad(a,e),o=Rd(o),a=Rd(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=x+m+o,M=x+f+a,R=bd(s,s.VERTEX_SHADER,_),A=bd(s,s.FRAGMENT_SHADER,M);s.attachShader(v,R),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(D){if(i.debug.checkShaderErrors){const X=s.getProgramInfoLog(v).trim(),V=s.getShaderInfoLog(R).trim(),tt=s.getShaderInfoLog(A).trim();let et=!0,Q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,A);else{const it=Td(s,R,"vertex"),q=Td(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+it+`
`+q)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(V===""||tt==="")&&(Q=!1);Q&&(D.diagnostics={runnable:et,programLog:X,vertexShader:{log:V,prefix:m},fragmentShader:{log:tt,prefix:f}})}s.deleteShader(R),s.deleteShader(A),I=new Ea(s,v),b=FM(s,v)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,CM)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=PM++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=A,this}let KM=0;class jM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ZM(t),e.set(t,n)),n}}class ZM{constructor(t){this.id=KM++,this.code=t,this.usedTimes=0}}function QM(i,t,e,n,s,r,o){const a=new Op,l=new jM,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,D,X,V){const tt=X.fog,et=V.geometry,Q=b.isMeshStandardMaterial?X.environment:null,it=(b.isMeshStandardMaterial?e:t).get(b.envMap||Q),q=it&&it.mapping===il?it.image.height:null,xt=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const Et=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,bt=Et!==void 0?Et.length:0;let Kt=0;et.morphAttributes.position!==void 0&&(Kt=1),et.morphAttributes.normal!==void 0&&(Kt=2),et.morphAttributes.color!==void 0&&(Kt=3);let jt,Y,ot,wt;if(xt){const le=Vn[xt];jt=le.vertexShader,Y=le.fragmentShader}else jt=b.vertexShader,Y=b.fragmentShader,l.update(b),ot=l.getVertexShaderID(b),wt=l.getFragmentShaderID(b);const L=i.getRenderTarget(),H=V.isInstancedMesh===!0,z=V.isBatchedMesh===!0,j=!!b.map,E=!!b.matcap,B=!!it,ut=!!b.aoMap,At=!!b.lightMap,ht=!!b.bumpMap,mt=!!b.normalMap,lt=!!b.displacementMap,st=!!b.emissiveMap,Tt=!!b.metalnessMap,C=!!b.roughnessMap,w=b.anisotropy>0,F=b.clearcoat>0,K=b.dispersion>0,Z=b.iridescence>0,$=b.sheen>0,gt=b.transmission>0,at=w&&!!b.anisotropyMap,ct=F&&!!b.clearcoatMap,Nt=F&&!!b.clearcoatNormalMap,rt=F&&!!b.clearcoatRoughnessMap,Pt=Z&&!!b.iridescenceMap,qt=Z&&!!b.iridescenceThicknessMap,Ot=$&&!!b.sheenColorMap,vt=$&&!!b.sheenRoughnessMap,Xt=!!b.specularMap,Zt=!!b.specularColorMap,ve=!!b.specularIntensityMap,k=gt&&!!b.transmissionMap,yt=gt&&!!b.thicknessMap,J=!!b.gradientMap,nt=!!b.alphaMap,ft=b.alphaTest>0,Wt=!!b.alphaHash,ne=!!b.extensions;let be=oi;b.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(be=i.toneMapping);const Fe={shaderID:xt,shaderType:b.type,shaderName:b.name,vertexShader:jt,fragmentShader:Y,defines:b.defines,customVertexShaderID:ot,customFragmentShaderID:wt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:z,batchingColor:z&&V._colorsTexture!==null,instancing:H,instancingColor:H&&V.instanceColor!==null,instancingMorph:H&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:L===null?i.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ui,alphaToCoverage:!!b.alphaToCoverage,map:j,matcap:E,envMap:B,envMapMode:B&&it.mapping,envMapCubeUVHeight:q,aoMap:ut,lightMap:At,bumpMap:ht,normalMap:mt,displacementMap:d&&lt,emissiveMap:st,normalMapObjectSpace:mt&&b.normalMapType===Yg,normalMapTangentSpace:mt&&b.normalMapType===Lp,metalnessMap:Tt,roughnessMap:C,anisotropy:w,anisotropyMap:at,clearcoat:F,clearcoatMap:ct,clearcoatNormalMap:Nt,clearcoatRoughnessMap:rt,dispersion:K,iridescence:Z,iridescenceMap:Pt,iridescenceThicknessMap:qt,sheen:$,sheenColorMap:Ot,sheenRoughnessMap:vt,specularMap:Xt,specularColorMap:Zt,specularIntensityMap:ve,transmission:gt,transmissionMap:k,thicknessMap:yt,gradientMap:J,opaque:b.transparent===!1&&b.blending===Qs&&b.alphaToCoverage===!1,alphaMap:nt,alphaTest:ft,alphaHash:Wt,combine:b.combine,mapUv:j&&v(b.map.channel),aoMapUv:ut&&v(b.aoMap.channel),lightMapUv:At&&v(b.lightMap.channel),bumpMapUv:ht&&v(b.bumpMap.channel),normalMapUv:mt&&v(b.normalMap.channel),displacementMapUv:lt&&v(b.displacementMap.channel),emissiveMapUv:st&&v(b.emissiveMap.channel),metalnessMapUv:Tt&&v(b.metalnessMap.channel),roughnessMapUv:C&&v(b.roughnessMap.channel),anisotropyMapUv:at&&v(b.anisotropyMap.channel),clearcoatMapUv:ct&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:vt&&v(b.sheenRoughnessMap.channel),specularMapUv:Xt&&v(b.specularMap.channel),specularColorMapUv:Zt&&v(b.specularColorMap.channel),specularIntensityMapUv:ve&&v(b.specularIntensityMap.channel),transmissionMapUv:k&&v(b.transmissionMap.channel),thicknessMapUv:yt&&v(b.thicknessMap.channel),alphaMapUv:nt&&v(b.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(mt||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!et.attributes.uv&&(j||nt),fog:!!tt,useFog:b.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:V.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Kt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:j&&b.map.isVideoTexture===!0&&oe.getTransfer(b.map.colorSpace)===ge,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===je,flipSided:b.side===ze,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ne&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ne&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function f(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(x(S,b),_(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function x(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function _(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),b.push(a.mask)}function M(b){const S=g[b.type];let D;if(S){const X=Vn[S];D=Nv.clone(X.uniforms)}else D=b.uniforms;return D}function R(b,S){let D;for(let X=0,V=h.length;X<V;X++){const tt=h[X];if(tt.cacheKey===S){D=tt,++D.usedTimes;break}}return D===void 0&&(D=new YM(i,S,b,r),h.push(D)),D}function A(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function P(b){l.remove(b)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:R,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:I}}function JM(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function t1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Pd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Dd(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,v,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function a(u,d,p,g,v,m){const f=o(u,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,v,m){const f=o(u,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||t1),n.length>1&&n.sort(d||Pd),s.length>1&&s.sort(d||Pd)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function e1(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Dd,i.set(n,[o])):s>=r.length?(o=new Dd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function n1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new St};break;case"SpotLight":e={position:new U,direction:new U,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function i1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let s1=0;function r1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function o1(i){const t=new n1,e=i1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new fe,o=new fe;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,x=0,_=0,M=0,R=0,A=0,P=0;c.sort(r1);for(let b=0,S=c.length;b<S;b++){const D=c[b],X=D.color,V=D.intensity,tt=D.distance,et=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=X.r*V,u+=X.g*V,d+=X.b*V;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(D.sh.coefficients[Q],V);P++}else if(D.isDirectionalLight){const Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const it=D.shadow,q=e.get(D);q.shadowBias=it.bias,q.shadowNormalBias=it.normalBias,q.shadowRadius=it.radius,q.shadowMapSize=it.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=et,n.directionalShadowMatrix[p]=D.shadow.matrix,x++}n.directional[p]=Q,p++}else if(D.isSpotLight){const Q=t.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(X).multiplyScalar(V),Q.distance=tt,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,n.spot[v]=Q;const it=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,it.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[v]=it.matrix,D.castShadow){const q=e.get(D);q.shadowBias=it.bias,q.shadowNormalBias=it.normalBias,q.shadowRadius=it.radius,q.shadowMapSize=it.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=et,M++}v++}else if(D.isRectAreaLight){const Q=t.get(D);Q.color.copy(X).multiplyScalar(V),Q.halfWidth.set(D.width*.5,0,0),Q.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=Q,m++}else if(D.isPointLight){const Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){const it=D.shadow,q=e.get(D);q.shadowBias=it.bias,q.shadowNormalBias=it.normalBias,q.shadowRadius=it.radius,q.shadowMapSize=it.mapSize,q.shadowCameraNear=it.camera.near,q.shadowCameraFar=it.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=D.shadow.matrix,_++}n.point[g]=Q,g++}else if(D.isHemisphereLight){const Q=t.get(D);Q.skyColor.copy(D.color).multiplyScalar(V),Q.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[f]=Q,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==x||I.numPointShadows!==_||I.numSpotShadows!==M||I.numSpotMaps!==R||I.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,I.directionalLength=p,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=x,I.numPointShadows=_,I.numSpotShadows=M,I.numSpotMaps=R,I.numLightProbes=P,n.version=s1++)}function l(c,h){let u=0,d=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const _=c[f];if(_.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(_.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Ld(i){const t=new o1(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function a1(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ld(i),t.set(s,[a])):r>=o.length?(a=new Ld(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Zp extends Fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$g,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class l1 extends Fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const c1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h1=`uniform sampler2D shadow_pass;
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
}`;function u1(i,t,e){let n=new wh;const s=new Bt,r=new Bt,o=new _e,a=new Zp({depthPacking:Dp}),l=new l1,c={},h=e.maxTextureSize,u={[Di]:ze,[ze]:Di,[je]:je},d=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:c1,fragmentShader:h1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ve;g.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Jt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yp;let f=this.type;this.render=function(A,P,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Ri),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const V=f!==ei&&this.type===ei,tt=f===ei&&this.type!==ei;for(let et=0,Q=A.length;et<Q;et++){const it=A[et],q=it.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const xt=q.getFrameExtents();if(s.multiply(xt),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/xt.x),s.x=r.x*xt.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/xt.y),s.y=r.y*xt.y,q.mapSize.y=r.y)),q.map===null||V===!0||tt===!0){const bt=this.type!==ei?{minFilter:de,magFilter:de}:{};q.map!==null&&q.map.dispose(),q.map=new Fn(s.x,s.y,bt),q.map.texture.name=it.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const Et=q.getViewportCount();for(let bt=0;bt<Et;bt++){const Kt=q.getViewport(bt);o.set(r.x*Kt.x,r.y*Kt.y,r.x*Kt.z,r.y*Kt.w),X.viewport(o),q.updateMatrices(it,bt),n=q.getFrustum(),M(P,I,q.camera,it,this.type)}q.isPointLightShadow!==!0&&this.type===ei&&x(q,I),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,D)};function x(A,P){const I=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Fn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,I,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,I,p,v,null)}function _(A,P,I,b){let S=null;const D=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)S=D;else if(S=I.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const X=S.uuid,V=P.uuid;let tt=c[X];tt===void 0&&(tt={},c[X]=tt);let et=tt[V];et===void 0&&(et=S.clone(),tt[V]=et,P.addEventListener("dispose",R)),S=et}if(S.visible=P.visible,S.wireframe=P.wireframe,b===ei?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:u[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=i.properties.get(S);X.light=I}return S}function M(A,P,I,b,S){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===ei)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const V=t.update(A),tt=A.material;if(Array.isArray(tt)){const et=V.groups;for(let Q=0,it=et.length;Q<it;Q++){const q=et[Q],xt=tt[q.materialIndex];if(xt&&xt.visible){const Et=_(A,xt,b,S);A.onBeforeShadow(i,A,P,I,V,Et,q),i.renderBufferDirect(I,null,V,Et,A,q),A.onAfterShadow(i,A,P,I,V,Et,q)}}}else if(tt.visible){const et=_(A,tt,b,S);A.onBeforeShadow(i,A,P,I,V,et,null),i.renderBufferDirect(I,null,V,et,A,null),A.onAfterShadow(i,A,P,I,V,et,null)}}const X=A.children;for(let V=0,tt=X.length;V<tt;V++)M(X[V],P,I,b,S)}function R(A){A.target.removeEventListener("dispose",R);for(const I in c){const b=c[I],S=A.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function d1(i){function t(){let k=!1;const yt=new _e;let J=null;const nt=new _e(0,0,0,0);return{setMask:function(ft){J!==ft&&!k&&(i.colorMask(ft,ft,ft,ft),J=ft)},setLocked:function(ft){k=ft},setClear:function(ft,Wt,ne,be,Fe){Fe===!0&&(ft*=be,Wt*=be,ne*=be),yt.set(ft,Wt,ne,be),nt.equals(yt)===!1&&(i.clearColor(ft,Wt,ne,be),nt.copy(yt))},reset:function(){k=!1,J=null,nt.set(-1,0,0,0)}}}function e(){let k=!1,yt=null,J=null,nt=null;return{setTest:function(ft){ft?wt(i.DEPTH_TEST):L(i.DEPTH_TEST)},setMask:function(ft){yt!==ft&&!k&&(i.depthMask(ft),yt=ft)},setFunc:function(ft){if(J!==ft){switch(ft){case wg:i.depthFunc(i.NEVER);break;case Sg:i.depthFunc(i.ALWAYS);break;case bg:i.depthFunc(i.LESS);break;case La:i.depthFunc(i.LEQUAL);break;case Tg:i.depthFunc(i.EQUAL);break;case Eg:i.depthFunc(i.GEQUAL);break;case Ag:i.depthFunc(i.GREATER);break;case Rg:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ft}},setLocked:function(ft){k=ft},setClear:function(ft){nt!==ft&&(i.clearDepth(ft),nt=ft)},reset:function(){k=!1,yt=null,J=null,nt=null}}}function n(){let k=!1,yt=null,J=null,nt=null,ft=null,Wt=null,ne=null,be=null,Fe=null;return{setTest:function(le){k||(le?wt(i.STENCIL_TEST):L(i.STENCIL_TEST))},setMask:function(le){yt!==le&&!k&&(i.stencilMask(le),yt=le)},setFunc:function(le,On,Bn){(J!==le||nt!==On||ft!==Bn)&&(i.stencilFunc(le,On,Bn),J=le,nt=On,ft=Bn)},setOp:function(le,On,Bn){(Wt!==le||ne!==On||be!==Bn)&&(i.stencilOp(le,On,Bn),Wt=le,ne=On,be=Bn)},setLocked:function(le){k=le},setClear:function(le){Fe!==le&&(i.clearStencil(le),Fe=le)},reset:function(){k=!1,yt=null,J=null,nt=null,ft=null,Wt=null,ne=null,be=null,Fe=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],p=null,g=!1,v=null,m=null,f=null,x=null,_=null,M=null,R=null,A=new St(0,0,0),P=0,I=!1,b=null,S=null,D=null,X=null,V=null;const tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,Q=0;const it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(it)[1]),et=Q>=1):it.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),et=Q>=2);let q=null,xt={};const Et=i.getParameter(i.SCISSOR_BOX),bt=i.getParameter(i.VIEWPORT),Kt=new _e().fromArray(Et),jt=new _e().fromArray(bt);function Y(k,yt,J,nt){const ft=new Uint8Array(4),Wt=i.createTexture();i.bindTexture(k,Wt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<J;ne++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(yt+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return Wt}const ot={};ot[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),wt(i.DEPTH_TEST),r.setFunc(La),ht(!1),mt(fu),wt(i.CULL_FACE),ut(Ri);function wt(k){c[k]!==!0&&(i.enable(k),c[k]=!0)}function L(k){c[k]!==!1&&(i.disable(k),c[k]=!1)}function H(k,yt){return h[k]!==yt?(i.bindFramebuffer(k,yt),h[k]=yt,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=yt),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function z(k,yt){let J=d,nt=!1;if(k){J=u.get(yt),J===void 0&&(J=[],u.set(yt,J));const ft=k.textures;if(J.length!==ft.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Wt=0,ne=ft.length;Wt<ne;Wt++)J[Wt]=i.COLOR_ATTACHMENT0+Wt;J.length=ft.length,nt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,nt=!0);nt&&i.drawBuffers(J)}function j(k){return p!==k?(i.useProgram(k),p=k,!0):!1}const E={[Zi]:i.FUNC_ADD,[rg]:i.FUNC_SUBTRACT,[og]:i.FUNC_REVERSE_SUBTRACT};E[ag]=i.MIN,E[lg]=i.MAX;const B={[cg]:i.ZERO,[hg]:i.ONE,[ug]:i.SRC_COLOR,[Wc]:i.SRC_ALPHA,[vg]:i.SRC_ALPHA_SATURATE,[mg]:i.DST_COLOR,[fg]:i.DST_ALPHA,[dg]:i.ONE_MINUS_SRC_COLOR,[Gc]:i.ONE_MINUS_SRC_ALPHA,[gg]:i.ONE_MINUS_DST_COLOR,[pg]:i.ONE_MINUS_DST_ALPHA,[_g]:i.CONSTANT_COLOR,[xg]:i.ONE_MINUS_CONSTANT_COLOR,[yg]:i.CONSTANT_ALPHA,[Mg]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(k,yt,J,nt,ft,Wt,ne,be,Fe,le){if(k===Ri){g===!0&&(L(i.BLEND),g=!1);return}if(g===!1&&(wt(i.BLEND),g=!0),k!==sg){if(k!==v||le!==I){if((m!==Zi||_!==Zi)&&(i.blendEquation(i.FUNC_ADD),m=Zi,_=Zi),le)switch(k){case Qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hc:i.blendFunc(i.ONE,i.ONE);break;case pu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case pu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}f=null,x=null,M=null,R=null,A.set(0,0,0),P=0,v=k,I=le}return}ft=ft||yt,Wt=Wt||J,ne=ne||nt,(yt!==m||ft!==_)&&(i.blendEquationSeparate(E[yt],E[ft]),m=yt,_=ft),(J!==f||nt!==x||Wt!==M||ne!==R)&&(i.blendFuncSeparate(B[J],B[nt],B[Wt],B[ne]),f=J,x=nt,M=Wt,R=ne),(be.equals(A)===!1||Fe!==P)&&(i.blendColor(be.r,be.g,be.b,Fe),A.copy(be),P=Fe),v=k,I=!1}function At(k,yt){k.side===je?L(i.CULL_FACE):wt(i.CULL_FACE);let J=k.side===ze;yt&&(J=!J),ht(J),k.blending===Qs&&k.transparent===!1?ut(Ri):ut(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),s.setMask(k.colorWrite);const nt=k.stencilWrite;o.setTest(nt),nt&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),st(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?wt(i.SAMPLE_ALPHA_TO_COVERAGE):L(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(k){b!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),b=k)}function mt(k){k!==ng?(wt(i.CULL_FACE),k!==S&&(k===fu?i.cullFace(i.BACK):k===ig?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):L(i.CULL_FACE),S=k}function lt(k){k!==D&&(et&&i.lineWidth(k),D=k)}function st(k,yt,J){k?(wt(i.POLYGON_OFFSET_FILL),(X!==yt||V!==J)&&(i.polygonOffset(yt,J),X=yt,V=J)):L(i.POLYGON_OFFSET_FILL)}function Tt(k){k?wt(i.SCISSOR_TEST):L(i.SCISSOR_TEST)}function C(k){k===void 0&&(k=i.TEXTURE0+tt-1),q!==k&&(i.activeTexture(k),q=k)}function w(k,yt,J){J===void 0&&(q===null?J=i.TEXTURE0+tt-1:J=q);let nt=xt[J];nt===void 0&&(nt={type:void 0,texture:void 0},xt[J]=nt),(nt.type!==k||nt.texture!==yt)&&(q!==J&&(i.activeTexture(J),q=J),i.bindTexture(k,yt||ot[k]),nt.type=k,nt.texture=yt)}function F(){const k=xt[q];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Nt(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qt(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(k){Kt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Kt.copy(k))}function vt(k){jt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),jt.copy(k))}function Xt(k,yt){let J=l.get(yt);J===void 0&&(J=new WeakMap,l.set(yt,J));let nt=J.get(k);nt===void 0&&(nt=i.getUniformBlockIndex(yt,k.name),J.set(k,nt))}function Zt(k,yt){const nt=l.get(yt).get(k);a.get(yt)!==nt&&(i.uniformBlockBinding(yt,nt,k.__bindingPointIndex),a.set(yt,nt))}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},q=null,xt={},h={},u=new WeakMap,d=[],p=null,g=!1,v=null,m=null,f=null,x=null,_=null,M=null,R=null,A=new St(0,0,0),P=0,I=!1,b=null,S=null,D=null,X=null,V=null,Kt.set(0,0,i.canvas.width,i.canvas.height),jt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:wt,disable:L,bindFramebuffer:H,drawBuffers:z,useProgram:j,setBlending:ut,setMaterial:At,setFlipSided:ht,setCullFace:mt,setLineWidth:lt,setPolygonOffset:st,setScissorTest:Tt,activeTexture:C,bindTexture:w,unbindTexture:F,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:Pt,texImage3D:qt,updateUBOMapping:Xt,uniformBlockBinding:Zt,texStorage2D:Nt,texStorage3D:rt,texSubImage2D:$,texSubImage3D:gt,compressedTexSubImage2D:at,compressedTexSubImage3D:ct,scissor:Ot,viewport:vt,reset:ve}}function f1(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,w){return p?new OffscreenCanvas(C,w):to("canvas")}function v(C,w,F){let K=1;const Z=Tt(C);if((Z.width>F||Z.height>F)&&(K=F/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(K*Z.width),gt=Math.floor(K*Z.height);u===void 0&&(u=g($,gt));const at=w?g($,gt):u;return at.width=$,at.height=gt,at.getContext("2d").drawImage(C,0,0,$,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+gt+")."),at}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==de&&C.minFilter!==Te}function f(C){i.generateMipmap(C)}function x(C,w,F,K,Z=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=w;if(w===i.RED&&(F===i.FLOAT&&($=i.R32F),F===i.HALF_FLOAT&&($=i.R16F),F===i.UNSIGNED_BYTE&&($=i.R8)),w===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.R8UI),F===i.UNSIGNED_SHORT&&($=i.R16UI),F===i.UNSIGNED_INT&&($=i.R32UI),F===i.BYTE&&($=i.R8I),F===i.SHORT&&($=i.R16I),F===i.INT&&($=i.R32I)),w===i.RG&&(F===i.FLOAT&&($=i.RG32F),F===i.HALF_FLOAT&&($=i.RG16F),F===i.UNSIGNED_BYTE&&($=i.RG8)),w===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RG8UI),F===i.UNSIGNED_SHORT&&($=i.RG16UI),F===i.UNSIGNED_INT&&($=i.RG32UI),F===i.BYTE&&($=i.RG8I),F===i.SHORT&&($=i.RG16I),F===i.INT&&($=i.RG32I)),w===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),w===i.RGBA){const gt=Z?Ia:oe.getTransfer(K);F===i.FLOAT&&($=i.RGBA32F),F===i.HALF_FLOAT&&($=i.RGBA16F),F===i.UNSIGNED_BYTE&&($=gt===ge?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(C,w){let F;return C?w===null||w===Li||w===hr?F=i.DEPTH24_STENCIL8:w===Si?F=i.DEPTH32F_STENCIL8:w===ka&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Li||w===hr?F=i.DEPTH_COMPONENT24:w===Si?F=i.DEPTH_COMPONENT32F:w===ka&&(F=i.DEPTH_COMPONENT16),F}function M(C,w){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==de&&C.minFilter!==Te?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function R(C){const w=C.target;w.removeEventListener("dispose",R),P(w),w.isVideoTexture&&h.delete(w)}function A(C){const w=C.target;w.removeEventListener("dispose",A),b(w)}function P(C){const w=n.get(C);if(w.__webglInit===void 0)return;const F=C.source,K=d.get(F);if(K){const Z=K[w.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&I(C),Object.keys(K).length===0&&d.delete(F)}n.remove(C)}function I(C){const w=n.get(C);i.deleteTexture(w.__webglTexture);const F=C.source,K=d.get(F);delete K[w.__cacheKey],o.memory.textures--}function b(C){const w=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let Z=0;Z<w.__webglFramebuffer[K].length;Z++)i.deleteFramebuffer(w.__webglFramebuffer[K][Z]);else i.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)i.deleteFramebuffer(w.__webglFramebuffer[K]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const F=C.textures;for(let K=0,Z=F.length;K<Z;K++){const $=n.get(F[K]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(F[K])}n.remove(C)}let S=0;function D(){S=0}function X(){const C=S;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),S+=1,C}function V(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function tt(C,w){const F=n.get(C);if(C.isVideoTexture&&lt(C),C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{jt(F,C,w);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+w)}function et(C,w){const F=n.get(C);if(C.version>0&&F.__version!==C.version){jt(F,C,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+w)}function Q(C,w){const F=n.get(C);if(C.version>0&&F.__version!==C.version){jt(F,C,w);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+w)}function it(C,w){const F=n.get(C);if(C.version>0&&F.__version!==C.version){Y(F,C,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+w)}const q={[xn]:i.REPEAT,[es]:i.CLAMP_TO_EDGE,[qc]:i.MIRRORED_REPEAT},xt={[de]:i.NEAREST,[vh]:i.NEAREST_MIPMAP_NEAREST,[vo]:i.NEAREST_MIPMAP_LINEAR,[Te]:i.LINEAR,[Ml]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},Et={[Kg]:i.NEVER,[ev]:i.ALWAYS,[jg]:i.LESS,[kp]:i.LEQUAL,[Zg]:i.EQUAL,[tv]:i.GEQUAL,[Qg]:i.GREATER,[Jg]:i.NOTEQUAL};function bt(C,w){if(w.type===Si&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Te||w.magFilter===Ml||w.magFilter===vo||w.magFilter===ni||w.minFilter===Te||w.minFilter===Ml||w.minFilter===vo||w.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,q[w.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,q[w.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,q[w.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,xt[w.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,xt[w.minFilter]),w.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Et[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===de||w.minFilter!==vo&&w.minFilter!==ni||w.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Kt(C,w){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",R));const K=w.source;let Z=d.get(K);Z===void 0&&(Z={},d.set(K,Z));const $=V(w);if($!==C.__cacheKey){Z[$]===void 0&&(Z[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[$].usedTimes++;const gt=Z[C.__cacheKey];gt!==void 0&&(Z[C.__cacheKey].usedTimes--,gt.usedTimes===0&&I(w)),C.__cacheKey=$,C.__webglTexture=Z[$].texture}return F}function jt(C,w,F){let K=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=i.TEXTURE_3D);const Z=Kt(C,w),$=w.source;e.bindTexture(K,C.__webglTexture,i.TEXTURE0+F);const gt=n.get($);if($.version!==gt.__version||Z===!0){e.activeTexture(i.TEXTURE0+F);const at=oe.getPrimaries(oe.workingColorSpace),ct=w.colorSpace===mn?null:oe.getPrimaries(w.colorSpace),Nt=w.colorSpace===mn||at===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let rt=v(w.image,!1,s.maxTextureSize);rt=st(w,rt);const Pt=r.convert(w.format,w.colorSpace),qt=r.convert(w.type);let Ot=x(w.internalFormat,Pt,qt,w.colorSpace,w.isVideoTexture);bt(K,w);let vt;const Xt=w.mipmaps,Zt=w.isVideoTexture!==!0,ve=gt.__version===void 0||Z===!0,k=$.dataReady,yt=M(w,rt);if(w.isDepthTexture)Ot=_(w.format===ur,w.type),ve&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Ot,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Ot,rt.width,rt.height,0,Pt,qt,null));else if(w.isDataTexture)if(Xt.length>0){Zt&&ve&&e.texStorage2D(i.TEXTURE_2D,yt,Ot,Xt[0].width,Xt[0].height);for(let J=0,nt=Xt.length;J<nt;J++)vt=Xt[J],Zt?k&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,vt.width,vt.height,Pt,qt,vt.data):e.texImage2D(i.TEXTURE_2D,J,Ot,vt.width,vt.height,0,Pt,qt,vt.data);w.generateMipmaps=!1}else Zt?(ve&&e.texStorage2D(i.TEXTURE_2D,yt,Ot,rt.width,rt.height),k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,Pt,qt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,rt.width,rt.height,0,Pt,qt,rt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Zt&&ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Ot,Xt[0].width,Xt[0].height,rt.depth);for(let J=0,nt=Xt.length;J<nt;J++)if(vt=Xt[J],w.format!==gn)if(Pt!==null)if(Zt){if(k)if(w.layerUpdates.size>0){for(const ft of w.layerUpdates){const Wt=vt.width*vt.height;e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,ft,vt.width,vt.height,1,Pt,vt.data.slice(Wt*ft,Wt*(ft+1)),0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,vt.width,vt.height,rt.depth,Pt,vt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Ot,vt.width,vt.height,rt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,vt.width,vt.height,rt.depth,Pt,qt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,Ot,vt.width,vt.height,rt.depth,0,Pt,qt,vt.data)}else{Zt&&ve&&e.texStorage2D(i.TEXTURE_2D,yt,Ot,Xt[0].width,Xt[0].height);for(let J=0,nt=Xt.length;J<nt;J++)vt=Xt[J],w.format!==gn?Pt!==null?Zt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,vt.width,vt.height,Pt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,J,Ot,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?k&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,vt.width,vt.height,Pt,qt,vt.data):e.texImage2D(i.TEXTURE_2D,J,Ot,vt.width,vt.height,0,Pt,qt,vt.data)}else if(w.isDataArrayTexture)if(Zt){if(ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Ot,rt.width,rt.height,rt.depth),k)if(w.layerUpdates.size>0){let J;switch(qt){case i.UNSIGNED_BYTE:switch(Pt){case i.ALPHA:J=1;break;case i.LUMINANCE:J=1;break;case i.LUMINANCE_ALPHA:J=2;break;case i.RGB:J=3;break;case i.RGBA:J=4;break;default:throw new Error(`Unknown texel size for format ${Pt}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:J=1;break;default:throw new Error(`Unknown texel size for type ${qt}.`)}const nt=rt.width*rt.height*J;for(const ft of w.layerUpdates)e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,rt.width,rt.height,1,Pt,qt,rt.data.slice(nt*ft,nt*(ft+1)));w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Pt,qt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,rt.width,rt.height,rt.depth,0,Pt,qt,rt.data);else if(w.isData3DTexture)Zt?(ve&&e.texStorage3D(i.TEXTURE_3D,yt,Ot,rt.width,rt.height,rt.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Pt,qt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,rt.width,rt.height,rt.depth,0,Pt,qt,rt.data);else if(w.isFramebufferTexture){if(ve)if(Zt)e.texStorage2D(i.TEXTURE_2D,yt,Ot,rt.width,rt.height);else{let J=rt.width,nt=rt.height;for(let ft=0;ft<yt;ft++)e.texImage2D(i.TEXTURE_2D,ft,Ot,J,nt,0,Pt,qt,null),J>>=1,nt>>=1}}else if(Xt.length>0){if(Zt&&ve){const J=Tt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,yt,Ot,J.width,J.height)}for(let J=0,nt=Xt.length;J<nt;J++)vt=Xt[J],Zt?k&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Pt,qt,vt):e.texImage2D(i.TEXTURE_2D,J,Ot,Pt,qt,vt);w.generateMipmaps=!1}else if(Zt){if(ve){const J=Tt(rt);e.texStorage2D(i.TEXTURE_2D,yt,Ot,J.width,J.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,qt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Pt,qt,rt);m(w)&&f(K),gt.__version=$.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Y(C,w,F){if(w.image.length!==6)return;const K=Kt(C,w),Z=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+F);const $=n.get(Z);if(Z.version!==$.__version||K===!0){e.activeTexture(i.TEXTURE0+F);const gt=oe.getPrimaries(oe.workingColorSpace),at=w.colorSpace===mn?null:oe.getPrimaries(w.colorSpace),ct=w.colorSpace===mn||gt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Nt=w.isCompressedTexture||w.image[0].isCompressedTexture,rt=w.image[0]&&w.image[0].isDataTexture,Pt=[];for(let nt=0;nt<6;nt++)!Nt&&!rt?Pt[nt]=v(w.image[nt],!0,s.maxCubemapSize):Pt[nt]=rt?w.image[nt].image:w.image[nt],Pt[nt]=st(w,Pt[nt]);const qt=Pt[0],Ot=r.convert(w.format,w.colorSpace),vt=r.convert(w.type),Xt=x(w.internalFormat,Ot,vt,w.colorSpace),Zt=w.isVideoTexture!==!0,ve=$.__version===void 0||K===!0,k=Z.dataReady;let yt=M(w,qt);bt(i.TEXTURE_CUBE_MAP,w);let J;if(Nt){Zt&&ve&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Xt,qt.width,qt.height);for(let nt=0;nt<6;nt++){J=Pt[nt].mipmaps;for(let ft=0;ft<J.length;ft++){const Wt=J[ft];w.format!==gn?Ot!==null?Zt?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft,0,0,Wt.width,Wt.height,Ot,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft,Xt,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft,0,0,Wt.width,Wt.height,Ot,vt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft,Xt,Wt.width,Wt.height,0,Ot,vt,Wt.data)}}}else{if(J=w.mipmaps,Zt&&ve){J.length>0&&yt++;const nt=Tt(Pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Xt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(rt){Zt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Pt[nt].width,Pt[nt].height,Ot,vt,Pt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Xt,Pt[nt].width,Pt[nt].height,0,Ot,vt,Pt[nt].data);for(let ft=0;ft<J.length;ft++){const ne=J[ft].image[nt].image;Zt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft+1,0,0,ne.width,ne.height,Ot,vt,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft+1,Xt,ne.width,ne.height,0,Ot,vt,ne.data)}}else{Zt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ot,vt,Pt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Xt,Ot,vt,Pt[nt]);for(let ft=0;ft<J.length;ft++){const Wt=J[ft];Zt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft+1,0,0,Ot,vt,Wt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft+1,Xt,Ot,vt,Wt.image[nt])}}}m(w)&&f(i.TEXTURE_CUBE_MAP),$.__version=Z.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ot(C,w,F,K,Z,$){const gt=r.convert(F.format,F.colorSpace),at=r.convert(F.type),ct=x(F.internalFormat,gt,at,F.colorSpace);if(!n.get(w).__hasExternalTextures){const rt=Math.max(1,w.width>>$),Pt=Math.max(1,w.height>>$);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,$,ct,rt,Pt,w.depth,0,gt,at,null):e.texImage2D(Z,$,ct,rt,Pt,0,gt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),mt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Z,n.get(F).__webglTexture,0,ht(w)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Z,n.get(F).__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(C,w,F){if(i.bindRenderbuffer(i.RENDERBUFFER,C),w.depthBuffer){const K=w.depthTexture,Z=K&&K.isDepthTexture?K.type:null,$=_(w.stencilBuffer,Z),gt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=ht(w);mt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,$,w.width,w.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,$,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,$,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,C)}else{const K=w.textures;for(let Z=0;Z<K.length;Z++){const $=K[Z],gt=r.convert($.format,$.colorSpace),at=r.convert($.type),ct=x($.internalFormat,gt,at,$.colorSpace),Nt=ht(w);F&&mt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,ct,w.width,w.height):mt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt,ct,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ct,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function L(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),tt(w.depthTexture,0);const K=n.get(w.depthTexture).__webglTexture,Z=ht(w);if(w.depthTexture.format===Js)mt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(w.depthTexture.format===ur)mt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function H(C){const w=n.get(C),F=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");L(w.__webglFramebuffer,C)}else if(F){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]=i.createRenderbuffer(),wt(w.__webglDepthbuffer[K],C,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),wt(w.__webglDepthbuffer,C,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function z(C,w,F){const K=n.get(C);w!==void 0&&ot(K.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&H(C)}function j(C){const w=C.texture,F=n.get(C),K=n.get(w);C.addEventListener("dispose",A);const Z=C.textures,$=C.isWebGLCubeRenderTarget===!0,gt=Z.length>1;if(gt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=w.version,o.memory.textures++),$){F.__webglFramebuffer=[];for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0){F.__webglFramebuffer[at]=[];for(let ct=0;ct<w.mipmaps.length;ct++)F.__webglFramebuffer[at][ct]=i.createFramebuffer()}else F.__webglFramebuffer[at]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){F.__webglFramebuffer=[];for(let at=0;at<w.mipmaps.length;at++)F.__webglFramebuffer[at]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(gt)for(let at=0,ct=Z.length;at<ct;at++){const Nt=n.get(Z[at]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&mt(C)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let at=0;at<Z.length;at++){const ct=Z[at];F.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[at]);const Nt=r.convert(ct.format,ct.colorSpace),rt=r.convert(ct.type),Pt=x(ct.internalFormat,Nt,rt,ct.colorSpace,C.isXRRenderTarget===!0),qt=ht(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,Pt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,F.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),wt(F.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),bt(i.TEXTURE_CUBE_MAP,w);for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0)for(let ct=0;ct<w.mipmaps.length;ct++)ot(F.__webglFramebuffer[at][ct],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ct);else ot(F.__webglFramebuffer[at],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(w)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let at=0,ct=Z.length;at<ct;at++){const Nt=Z[at],rt=n.get(Nt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),bt(i.TEXTURE_2D,Nt),ot(F.__webglFramebuffer,C,Nt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(Nt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(at=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,K.__webglTexture),bt(at,w),w.mipmaps&&w.mipmaps.length>0)for(let ct=0;ct<w.mipmaps.length;ct++)ot(F.__webglFramebuffer[ct],C,w,i.COLOR_ATTACHMENT0,at,ct);else ot(F.__webglFramebuffer,C,w,i.COLOR_ATTACHMENT0,at,0);m(w)&&f(at),e.unbindTexture()}C.depthBuffer&&H(C)}function E(C){const w=C.textures;for(let F=0,K=w.length;F<K;F++){const Z=w[F];if(m(Z)){const $=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,gt=n.get(Z).__webglTexture;e.bindTexture($,gt),f($),e.unbindTexture()}}}const B=[],ut=[];function At(C){if(C.samples>0){if(mt(C)===!1){const w=C.textures,F=C.width,K=C.height;let Z=i.COLOR_BUFFER_BIT;const $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(C),at=w.length>1;if(at)for(let ct=0;ct<w.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ct=0;ct<w.length;ct++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ct]);const Nt=n.get(w[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Nt,0)}i.blitFramebuffer(0,0,F,K,0,0,F,K,Z,i.NEAREST),l===!0&&(B.length=0,ut.length=0,B.push(i.COLOR_ATTACHMENT0+ct),C.depthBuffer&&C.resolveDepthBuffer===!1&&(B.push($),ut.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,B))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ct=0;ct<w.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ct]);const Nt=n.get(w[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const w=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ht(C){return Math.min(s.maxSamples,C.samples)}function mt(C){const w=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function lt(C){const w=o.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function st(C,w){const F=C.colorSpace,K=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==Ui&&F!==mn&&(oe.getTransfer(F)===ge?(K!==gn||Z!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),w}function Tt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=D,this.setTexture2D=tt,this.setTexture2DArray=et,this.setTexture3D=Q,this.setTextureCube=it,this.rebindTextures=z,this.setupRenderTarget=j,this.updateRenderTargetMipmap=E,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=mt}function p1(i,t){function e(n,s=mn){let r;const o=oe.getTransfer(s);if(n===hi)return i.UNSIGNED_BYTE;if(n===Tp)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ep)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zg)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Og)return i.BYTE;if(n===Bg)return i.SHORT;if(n===ka)return i.UNSIGNED_SHORT;if(n===bp)return i.INT;if(n===Li)return i.UNSIGNED_INT;if(n===Si)return i.FLOAT;if(n===Ii)return i.HALF_FLOAT;if(n===Hg)return i.ALPHA;if(n===Wg)return i.RGB;if(n===gn)return i.RGBA;if(n===Gg)return i.LUMINANCE;if(n===Vg)return i.LUMINANCE_ALPHA;if(n===Js)return i.DEPTH_COMPONENT;if(n===ur)return i.DEPTH_STENCIL;if(n===Ap)return i.RED;if(n===Rp)return i.RED_INTEGER;if(n===Xg)return i.RG;if(n===Cp)return i.RG_INTEGER;if(n===Pp)return i.RGBA_INTEGER;if(n===wl||n===Sl||n===bl||n===Tl)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gu||n===vu||n===_u||n===xu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_u)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yu||n===Mu||n===wu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yu||n===Mu)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Su||n===bu||n===Tu||n===Eu||n===Au||n===Ru||n===Cu||n===Pu||n===Du||n===Lu||n===ku||n===Iu||n===Uu||n===Nu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Su)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Eu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Au)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ru)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Du)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ku)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Iu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===El||n===Fu||n===Ou)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===El)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ou)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qg||n===Bu||n===zu||n===Hu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===El)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class m1 extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class vn extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g1={type:"move"};class Zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(g1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new vn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const v1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_1=`
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

}`;class x1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ge,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ze({vertexShader:v1,fragmentShader:_1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class y1 extends yr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const v=new x1,m=e.getContextAttributes();let f=null,x=null;const _=[],M=[],R=new Bt;let A=null;const P=new Ke;P.layers.enable(1),P.viewport=new _e;const I=new Ke;I.layers.enable(2),I.viewport=new _e;const b=[P,I],S=new m1;S.layers.enable(1),S.layers.enable(2);let D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ot=_[Y];return ot===void 0&&(ot=new Zl,_[Y]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Y){let ot=_[Y];return ot===void 0&&(ot=new Zl,_[Y]=ot),ot.getGripSpace()},this.getHand=function(Y){let ot=_[Y];return ot===void 0&&(ot=new Zl,_[Y]=ot),ot.getHandSpace()};function V(Y){const ot=M.indexOf(Y.inputSource);if(ot===-1)return;const wt=_[ot];wt!==void 0&&(wt.update(Y.inputSource,Y.frame,c||o),wt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function tt(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",et);for(let Y=0;Y<_.length;Y++){const ot=M[Y];ot!==null&&(M[Y]=null,_[Y].disconnect(ot))}D=null,X=null,v.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,x=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",et),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Fn(p.framebufferWidth,p.framebufferHeight,{format:gn,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ot=null,wt=null,L=null;m.depth&&(L=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?ur:Js,wt=m.stencil?hr:Li);const H={colorFormat:e.RGBA8,depthFormat:L,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(H),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Fn(d.textureWidth,d.textureHeight,{format:gn,type:hi,depthTexture:new rl(d.textureWidth,d.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function et(Y){for(let ot=0;ot<Y.removed.length;ot++){const wt=Y.removed[ot],L=M.indexOf(wt);L>=0&&(M[L]=null,_[L].disconnect(wt))}for(let ot=0;ot<Y.added.length;ot++){const wt=Y.added[ot];let L=M.indexOf(wt);if(L===-1){for(let z=0;z<_.length;z++)if(z>=M.length){M.push(wt),L=z;break}else if(M[z]===null){M[z]=wt,L=z;break}if(L===-1)break}const H=_[L];H&&H.connect(wt)}}const Q=new U,it=new U;function q(Y,ot,wt){Q.setFromMatrixPosition(ot.matrixWorld),it.setFromMatrixPosition(wt.matrixWorld);const L=Q.distanceTo(it),H=ot.projectionMatrix.elements,z=wt.projectionMatrix.elements,j=H[14]/(H[10]-1),E=H[14]/(H[10]+1),B=(H[9]+1)/H[5],ut=(H[9]-1)/H[5],At=(H[8]-1)/H[0],ht=(z[8]+1)/z[0],mt=j*At,lt=j*ht,st=L/(-At+ht),Tt=st*-At;ot.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Tt),Y.translateZ(st),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const C=j+st,w=E+st,F=mt-Tt,K=lt+(L-Tt),Z=B*E/w*C,$=ut*E/w*C;Y.projectionMatrix.makePerspective(F,K,Z,$,C,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function xt(Y,ot){ot===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ot.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;v.texture!==null&&(Y.near=v.depthNear,Y.far=v.depthFar),S.near=I.near=P.near=Y.near,S.far=I.far=P.far=Y.far,(D!==S.near||X!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,X=S.far,P.near=D,P.far=X,I.near=D,I.far=X,P.updateProjectionMatrix(),I.updateProjectionMatrix(),Y.updateProjectionMatrix());const ot=Y.parent,wt=S.cameras;xt(S,ot);for(let L=0;L<wt.length;L++)xt(wt[L],ot);wt.length===2?q(S,P,I):S.projectionMatrix.copy(P.projectionMatrix),Et(Y,S,ot)};function Et(Y,ot,wt){wt===null?Y.matrix.copy(ot.matrixWorld):(Y.matrix.copy(wt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ot.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ot.projectionMatrix),Y.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Jr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let bt=null;function Kt(Y,ot){if(h=ot.getViewerPose(c||o),g=ot,h!==null){const wt=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let L=!1;wt.length!==S.cameras.length&&(S.cameras.length=0,L=!0);for(let z=0;z<wt.length;z++){const j=wt[z];let E=null;if(p!==null)E=p.getViewport(j);else{const ut=u.getViewSubImage(d,j);E=ut.viewport,z===0&&(t.setRenderTargetTextures(x,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(x))}let B=b[z];B===void 0&&(B=new Ke,B.layers.enable(z),B.viewport=new _e,b[z]=B),B.matrix.fromArray(j.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(j.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(E.x,E.y,E.width,E.height),z===0&&(S.matrix.copy(B.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),L===!0&&S.cameras.push(B)}const H=s.enabledFeatures;if(H&&H.includes("depth-sensing")){const z=u.getDepthInformation(wt[0]);z&&z.isValid&&z.texture&&v.init(t,z,s.renderState)}}for(let wt=0;wt<_.length;wt++){const L=M[wt],H=_[wt];L!==null&&H!==void 0&&H.update(L,ot,c||o)}bt&&bt(Y,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}const jt=new Xp;jt.setAnimationLoop(Kt),this.setAnimationLoop=function(Y){bt=Y},this.dispose=function(){}}}const qi=new Xn,M1=new fe;function w1(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Wp(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,x,_,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,x,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ze&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ze&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f),_=x.envMap,M=x.envMapRotation;_&&(m.envMap.value=_,qi.copy(M),qi.x*=-1,qi.y*=-1,qi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),m.envMapRotation.value.setFromMatrix4(M1.makeRotationFromEuler(qi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=_*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ze&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const x=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function S1(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const M=_.program;n.uniformBlockBinding(x,M)}function c(x,_){let M=s[x.id];M===void 0&&(g(x),M=h(x),s[x.id]=M,x.addEventListener("dispose",m));const R=_.program;n.updateUBOMapping(x,R);const A=t.render.frame;r[x.id]!==A&&(d(x),r[x.id]=A)}function h(x){const _=u();x.__bindingPointIndex=_;const M=i.createBuffer(),R=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=s[x.id],M=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,P=M.length;A<P;A++){const I=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,S=I.length;b<S;b++){const D=I[b];if(p(D,A,b,R)===!0){const X=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let tt=0;for(let et=0;et<V.length;et++){const Q=V[et],it=v(Q);typeof Q=="number"||typeof Q=="boolean"?(D.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,X+tt,D.__data)):Q.isMatrix3?(D.__data[0]=Q.elements[0],D.__data[1]=Q.elements[1],D.__data[2]=Q.elements[2],D.__data[3]=0,D.__data[4]=Q.elements[3],D.__data[5]=Q.elements[4],D.__data[6]=Q.elements[5],D.__data[7]=0,D.__data[8]=Q.elements[6],D.__data[9]=Q.elements[7],D.__data[10]=Q.elements[8],D.__data[11]=0):(Q.toArray(D.__data,tt),tt+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,_,M,R){const A=x.value,P=_+"_"+M;if(R[P]===void 0)return typeof A=="number"||typeof A=="boolean"?R[P]=A:R[P]=A.clone(),!0;{const I=R[P];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return R[P]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(x){const _=x.uniforms;let M=0;const R=16;for(let P=0,I=_.length;P<I;P++){const b=Array.isArray(_[P])?_[P]:[_[P]];for(let S=0,D=b.length;S<D;S++){const X=b[S],V=Array.isArray(X.value)?X.value:[X.value];for(let tt=0,et=V.length;tt<et;tt++){const Q=V[tt],it=v(Q),q=M%R;q!==0&&R-q<it.boundary&&(M+=R-q),X.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=M,M+=it.storage}}}const A=M%R;return A>0&&(M+=R-A),x.__size=M,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Qp{constructor(t={}){const{canvas:e=_v(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const f=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ae,this.toneMapping=oi,this.toneMappingExposure=1;const _=this;let M=!1,R=0,A=0,P=null,I=-1,b=null;const S=new _e,D=new _e;let X=null;const V=new St(0);let tt=0,et=e.width,Q=e.height,it=1,q=null,xt=null;const Et=new _e(0,0,et,Q),bt=new _e(0,0,et,Q);let Kt=!1;const jt=new wh;let Y=!1,ot=!1;const wt=new fe,L=new U,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let z=!1;function j(){return P===null?it:1}let E=n;function B(T,N){return e.getContext(T,N)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gh}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",J,!1),e.addEventListener("webglcontextcreationerror",nt,!1),E===null){const N="webgl2";if(E=B(N,T),E===null)throw B(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ut,At,ht,mt,lt,st,Tt,C,w,F,K,Z,$,gt,at,ct,Nt,rt,Pt,qt,Ot,vt,Xt,Zt;function ve(){ut=new ky(E),ut.init(),vt=new p1(E,ut),At=new Ay(E,ut,t,vt),ht=new d1(E),mt=new Ny(E),lt=new JM,st=new f1(E,ut,ht,lt,At,vt,mt),Tt=new Cy(_),C=new Ly(_),w=new Gv(E),Xt=new Ty(E,w),F=new Iy(E,w,mt,Xt),K=new Oy(E,F,w,mt),Pt=new Fy(E,At,st),ct=new Ry(lt),Z=new QM(_,Tt,C,ut,At,Xt,ct),$=new w1(_,lt),gt=new e1,at=new a1(ut),rt=new by(_,Tt,C,ht,K,d,l),Nt=new u1(_,K,At),Zt=new S1(E,mt,At,ht),qt=new Ey(E,ut,mt),Ot=new Uy(E,ut,mt),mt.programs=Z.programs,_.capabilities=At,_.extensions=ut,_.properties=lt,_.renderLists=gt,_.shadowMap=Nt,_.state=ht,_.info=mt}ve();const k=new y1(_,E);this.xr=k,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const T=ut.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ut.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(T){T!==void 0&&(it=T,this.setSize(et,Q,!1))},this.getSize=function(T){return T.set(et,Q)},this.setSize=function(T,N,W=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=T,Q=N,e.width=Math.floor(T*it),e.height=Math.floor(N*it),W===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(et*it,Q*it).floor()},this.setDrawingBufferSize=function(T,N,W){et=T,Q=N,it=W,e.width=Math.floor(T*W),e.height=Math.floor(N*W),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(Et)},this.setViewport=function(T,N,W,G){T.isVector4?Et.set(T.x,T.y,T.z,T.w):Et.set(T,N,W,G),ht.viewport(S.copy(Et).multiplyScalar(it).round())},this.getScissor=function(T){return T.copy(bt)},this.setScissor=function(T,N,W,G){T.isVector4?bt.set(T.x,T.y,T.z,T.w):bt.set(T,N,W,G),ht.scissor(D.copy(bt).multiplyScalar(it).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(T){ht.setScissorTest(Kt=T)},this.setOpaqueSort=function(T){q=T},this.setTransparentSort=function(T){xt=T},this.getClearColor=function(T){return T.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(T=!0,N=!0,W=!0){let G=0;if(T){let O=!1;if(P!==null){const dt=P.texture.format;O=dt===Pp||dt===Cp||dt===Rp}if(O){const dt=P.texture.type,Mt=dt===hi||dt===Li||dt===ka||dt===hr||dt===Tp||dt===Ep,Rt=rt.getClearColor(),kt=rt.getClearAlpha(),zt=Rt.r,Ht=Rt.g,Ft=Rt.b;Mt?(p[0]=zt,p[1]=Ht,p[2]=Ft,p[3]=kt,E.clearBufferuiv(E.COLOR,0,p)):(g[0]=zt,g[1]=Ht,g[2]=Ft,g[3]=kt,E.clearBufferiv(E.COLOR,0,g))}else G|=E.COLOR_BUFFER_BIT}N&&(G|=E.DEPTH_BUFFER_BIT),W&&(G|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",J,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),gt.dispose(),at.dispose(),lt.dispose(),Tt.dispose(),C.dispose(),K.dispose(),Xt.dispose(),Zt.dispose(),Z.dispose(),k.dispose(),k.removeEventListener("sessionstart",On),k.removeEventListener("sessionend",Bn),Bi.stop()};function yt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=mt.autoReset,N=Nt.enabled,W=Nt.autoUpdate,G=Nt.needsUpdate,O=Nt.type;ve(),mt.autoReset=T,Nt.enabled=N,Nt.autoUpdate=W,Nt.needsUpdate=G,Nt.type=O}function nt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ft(T){const N=T.target;N.removeEventListener("dispose",ft),Wt(N)}function Wt(T){ne(T),lt.remove(T)}function ne(T){const N=lt.get(T).programs;N!==void 0&&(N.forEach(function(W){Z.releaseProgram(W)}),T.isShaderMaterial&&Z.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,W,G,O,dt){N===null&&(N=H);const Mt=O.isMesh&&O.matrixWorld.determinant()<0,Rt=j0(T,N,W,G,O);ht.setMaterial(G,Mt);let kt=W.index,zt=1;if(G.wireframe===!0){if(kt=F.getWireframeAttribute(W),kt===void 0)return;zt=2}const Ht=W.drawRange,Ft=W.attributes.position;let ie=Ht.start*zt,Me=(Ht.start+Ht.count)*zt;dt!==null&&(ie=Math.max(ie,dt.start*zt),Me=Math.min(Me,(dt.start+dt.count)*zt)),kt!==null?(ie=Math.max(ie,0),Me=Math.min(Me,kt.count)):Ft!=null&&(ie=Math.max(ie,0),Me=Math.min(Me,Ft.count));const we=Me-ie;if(we<0||we===1/0)return;Xt.setup(O,G,Rt,W,kt);let hn,se=qt;if(kt!==null&&(hn=w.get(kt),se=Ot,se.setIndex(hn)),O.isMesh)G.wireframe===!0?(ht.setLineWidth(G.wireframeLinewidth*j()),se.setMode(E.LINES)):se.setMode(E.TRIANGLES);else if(O.isLine){let Ut=G.linewidth;Ut===void 0&&(Ut=1),ht.setLineWidth(Ut*j()),O.isLineSegments?se.setMode(E.LINES):O.isLineLoop?se.setMode(E.LINE_LOOP):se.setMode(E.LINE_STRIP)}else O.isPoints?se.setMode(E.POINTS):O.isSprite&&se.setMode(E.TRIANGLES);if(O.isBatchedMesh)O._multiDrawInstances!==null?se.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances):se.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)se.renderInstances(ie,we,O.count);else if(W.isInstancedBufferGeometry){const Ut=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Je=Math.min(W.instanceCount,Ut);se.renderInstances(ie,we,Je)}else se.render(ie,we)};function be(T,N,W){T.transparent===!0&&T.side===je&&T.forceSinglePass===!1?(T.side=ze,T.needsUpdate=!0,mo(T,N,W),T.side=Di,T.needsUpdate=!0,mo(T,N,W),T.side=je):mo(T,N,W)}this.compile=function(T,N,W=null){W===null&&(W=T),m=at.get(W),m.init(N),x.push(m),W.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),T!==W&&T.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const G=new Set;return T.traverse(function(O){const dt=O.material;if(dt)if(Array.isArray(dt))for(let Mt=0;Mt<dt.length;Mt++){const Rt=dt[Mt];be(Rt,W,O),G.add(Rt)}else be(dt,W,O),G.add(dt)}),x.pop(),m=null,G},this.compileAsync=function(T,N,W=null){const G=this.compile(T,N,W);return new Promise(O=>{function dt(){if(G.forEach(function(Mt){lt.get(Mt).currentProgram.isReady()&&G.delete(Mt)}),G.size===0){O(T);return}setTimeout(dt,10)}ut.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Fe=null;function le(T){Fe&&Fe(T)}function On(){Bi.stop()}function Bn(){Bi.start()}const Bi=new Xp;Bi.setAnimationLoop(le),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(T){Fe=T,k.setAnimationLoop(T),T===null?Bi.stop():Bi.start()},k.addEventListener("sessionstart",On),k.addEventListener("sessionend",Bn),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(N),N=k.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,N,P),m=at.get(T,x.length),m.init(N),x.push(m),wt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),jt.setFromProjectionMatrix(wt),ot=this.localClippingEnabled,Y=ct.init(this.clippingPlanes,ot),v=gt.get(T,f.length),v.init(),f.push(v),k.enabled===!0&&k.isPresenting===!0){const dt=_.xr.getDepthSensingMesh();dt!==null&&vl(dt,N,-1/0,_.sortObjects)}vl(T,N,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(q,xt),z=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,z&&rt.addToRenderList(v,T),this.info.render.frame++,Y===!0&&ct.beginShadows();const W=m.state.shadowsArray;Nt.render(W,T,N),Y===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=v.opaque,O=v.transmissive;if(m.setupLights(),N.isArrayCamera){const dt=N.cameras;if(O.length>0)for(let Mt=0,Rt=dt.length;Mt<Rt;Mt++){const kt=dt[Mt];lu(G,O,T,kt)}z&&rt.render(T);for(let Mt=0,Rt=dt.length;Mt<Rt;Mt++){const kt=dt[Mt];au(v,T,kt,kt.viewport)}}else O.length>0&&lu(G,O,T,N),z&&rt.render(T),au(v,T,N);P!==null&&(st.updateMultisampleRenderTarget(P),st.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(_,T,N),Xt.resetDefaultState(),I=-1,b=null,x.pop(),x.length>0?(m=x[x.length-1],Y===!0&&ct.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function vl(T,N,W,G){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||jt.intersectsSprite(T)){G&&L.setFromMatrixPosition(T.matrixWorld).applyMatrix4(wt);const Mt=K.update(T),Rt=T.material;Rt.visible&&v.push(T,Mt,Rt,W,L.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||jt.intersectsObject(T))){const Mt=K.update(T),Rt=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),L.copy(T.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),L.copy(Mt.boundingSphere.center)),L.applyMatrix4(T.matrixWorld).applyMatrix4(wt)),Array.isArray(Rt)){const kt=Mt.groups;for(let zt=0,Ht=kt.length;zt<Ht;zt++){const Ft=kt[zt],ie=Rt[Ft.materialIndex];ie&&ie.visible&&v.push(T,Mt,ie,W,L.z,Ft)}}else Rt.visible&&v.push(T,Mt,Rt,W,L.z,null)}}const dt=T.children;for(let Mt=0,Rt=dt.length;Mt<Rt;Mt++)vl(dt[Mt],N,W,G)}function au(T,N,W,G){const O=T.opaque,dt=T.transmissive,Mt=T.transparent;m.setupLightsView(W),Y===!0&&ct.setGlobalState(_.clippingPlanes,W),G&&ht.viewport(S.copy(G)),O.length>0&&po(O,N,W),dt.length>0&&po(dt,N,W),Mt.length>0&&po(Mt,N,W),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function lu(T,N,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Fn(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Ii:hi,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const dt=m.state.transmissionRenderTarget[G.id],Mt=G.viewport||S;dt.setSize(Mt.z,Mt.w);const Rt=_.getRenderTarget();_.setRenderTarget(dt),_.getClearColor(V),tt=_.getClearAlpha(),tt<1&&_.setClearColor(16777215,.5),z?rt.render(W):_.clear();const kt=_.toneMapping;_.toneMapping=oi;const zt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),Y===!0&&ct.setGlobalState(_.clippingPlanes,G),po(T,W,G),st.updateMultisampleRenderTarget(dt),st.updateRenderTargetMipmap(dt),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Ft=0,ie=N.length;Ft<ie;Ft++){const Me=N[Ft],we=Me.object,hn=Me.geometry,se=Me.material,Ut=Me.group;if(se.side===je&&we.layers.test(G.layers)){const Je=se.side;se.side=ze,se.needsUpdate=!0,cu(we,W,G,hn,se,Ut),se.side=Je,se.needsUpdate=!0,Ht=!0}}Ht===!0&&(st.updateMultisampleRenderTarget(dt),st.updateRenderTargetMipmap(dt))}_.setRenderTarget(Rt),_.setClearColor(V,tt),zt!==void 0&&(G.viewport=zt),_.toneMapping=kt}function po(T,N,W){const G=N.isScene===!0?N.overrideMaterial:null;for(let O=0,dt=T.length;O<dt;O++){const Mt=T[O],Rt=Mt.object,kt=Mt.geometry,zt=G===null?Mt.material:G,Ht=Mt.group;Rt.layers.test(W.layers)&&cu(Rt,N,W,kt,zt,Ht)}}function cu(T,N,W,G,O,dt){T.onBeforeRender(_,N,W,G,O,dt),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(_,N,W,G,T,dt),O.transparent===!0&&O.side===je&&O.forceSinglePass===!1?(O.side=ze,O.needsUpdate=!0,_.renderBufferDirect(W,N,G,O,T,dt),O.side=Di,O.needsUpdate=!0,_.renderBufferDirect(W,N,G,O,T,dt),O.side=je):_.renderBufferDirect(W,N,G,O,T,dt),T.onAfterRender(_,N,W,G,O,dt)}function mo(T,N,W){N.isScene!==!0&&(N=H);const G=lt.get(T),O=m.state.lights,dt=m.state.shadowsArray,Mt=O.state.version,Rt=Z.getParameters(T,O.state,dt,N,W),kt=Z.getProgramCacheKey(Rt);let zt=G.programs;G.environment=T.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(T.isMeshStandardMaterial?C:Tt).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,zt===void 0&&(T.addEventListener("dispose",ft),zt=new Map,G.programs=zt);let Ht=zt.get(kt);if(Ht!==void 0){if(G.currentProgram===Ht&&G.lightsStateVersion===Mt)return uu(T,Rt),Ht}else Rt.uniforms=Z.getUniforms(T),T.onBuild(W,Rt,_),T.onBeforeCompile(Rt,_),Ht=Z.acquireProgram(Rt,kt),zt.set(kt,Ht),G.uniforms=Rt.uniforms;const Ft=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ft.clippingPlanes=ct.uniform),uu(T,Rt),G.needsLights=Q0(T),G.lightsStateVersion=Mt,G.needsLights&&(Ft.ambientLightColor.value=O.state.ambient,Ft.lightProbe.value=O.state.probe,Ft.directionalLights.value=O.state.directional,Ft.directionalLightShadows.value=O.state.directionalShadow,Ft.spotLights.value=O.state.spot,Ft.spotLightShadows.value=O.state.spotShadow,Ft.rectAreaLights.value=O.state.rectArea,Ft.ltc_1.value=O.state.rectAreaLTC1,Ft.ltc_2.value=O.state.rectAreaLTC2,Ft.pointLights.value=O.state.point,Ft.pointLightShadows.value=O.state.pointShadow,Ft.hemisphereLights.value=O.state.hemi,Ft.directionalShadowMap.value=O.state.directionalShadowMap,Ft.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ft.spotShadowMap.value=O.state.spotShadowMap,Ft.spotLightMatrix.value=O.state.spotLightMatrix,Ft.spotLightMap.value=O.state.spotLightMap,Ft.pointShadowMap.value=O.state.pointShadowMap,Ft.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Ht,G.uniformsList=null,Ht}function hu(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=Ea.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function uu(T,N){const W=lt.get(T);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function j0(T,N,W,G,O){N.isScene!==!0&&(N=H),st.resetTextureUnits();const dt=N.fog,Mt=G.isMeshStandardMaterial?N.environment:null,Rt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ui,kt=(G.isMeshStandardMaterial?C:Tt).get(G.envMap||Mt),zt=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ht=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ft=!!W.morphAttributes.position,ie=!!W.morphAttributes.normal,Me=!!W.morphAttributes.color;let we=oi;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(we=_.toneMapping);const hn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,se=hn!==void 0?hn.length:0,Ut=lt.get(G),Je=m.state.lights;if(Y===!0&&(ot===!0||T!==b)){const yn=T===b&&G.id===I;ct.setState(G,T,yn)}let ce=!1;G.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Je.state.version||Ut.outputColorSpace!==Rt||O.isBatchedMesh&&Ut.batching===!1||!O.isBatchedMesh&&Ut.batching===!0||O.isBatchedMesh&&Ut.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ut.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ut.instancing===!1||!O.isInstancedMesh&&Ut.instancing===!0||O.isSkinnedMesh&&Ut.skinning===!1||!O.isSkinnedMesh&&Ut.skinning===!0||O.isInstancedMesh&&Ut.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ut.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ut.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ut.instancingMorph===!1&&O.morphTexture!==null||Ut.envMap!==kt||G.fog===!0&&Ut.fog!==dt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ct.numPlanes||Ut.numIntersection!==ct.numIntersection)||Ut.vertexAlphas!==zt||Ut.vertexTangents!==Ht||Ut.morphTargets!==Ft||Ut.morphNormals!==ie||Ut.morphColors!==Me||Ut.toneMapping!==we||Ut.morphTargetsCount!==se)&&(ce=!0):(ce=!0,Ut.__version=G.version);let $n=Ut.currentProgram;ce===!0&&($n=mo(G,N,O));let go=!1,zi=!1,_l=!1;const Oe=$n.getUniforms(),di=Ut.uniforms;if(ht.useProgram($n.program)&&(go=!0,zi=!0,_l=!0),G.id!==I&&(I=G.id,zi=!0),go||b!==T){Oe.setValue(E,"projectionMatrix",T.projectionMatrix),Oe.setValue(E,"viewMatrix",T.matrixWorldInverse);const yn=Oe.map.cameraPosition;yn!==void 0&&yn.setValue(E,L.setFromMatrixPosition(T.matrixWorld)),At.logarithmicDepthBuffer&&Oe.setValue(E,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Oe.setValue(E,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,zi=!0,_l=!0)}if(O.isSkinnedMesh){Oe.setOptional(E,O,"bindMatrix"),Oe.setOptional(E,O,"bindMatrixInverse");const yn=O.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Oe.setValue(E,"boneTexture",yn.boneTexture,st))}O.isBatchedMesh&&(Oe.setOptional(E,O,"batchingTexture"),Oe.setValue(E,"batchingTexture",O._matricesTexture,st),Oe.setOptional(E,O,"batchingColorTexture"),O._colorsTexture!==null&&Oe.setValue(E,"batchingColorTexture",O._colorsTexture,st));const xl=W.morphAttributes;if((xl.position!==void 0||xl.normal!==void 0||xl.color!==void 0)&&Pt.update(O,W,$n),(zi||Ut.receiveShadow!==O.receiveShadow)&&(Ut.receiveShadow=O.receiveShadow,Oe.setValue(E,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(di.envMap.value=kt,di.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(di.envMapIntensity.value=N.environmentIntensity),zi&&(Oe.setValue(E,"toneMappingExposure",_.toneMappingExposure),Ut.needsLights&&Z0(di,_l),dt&&G.fog===!0&&$.refreshFogUniforms(di,dt),$.refreshMaterialUniforms(di,G,it,Q,m.state.transmissionRenderTarget[T.id]),Ea.upload(E,hu(Ut),di,st)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ea.upload(E,hu(Ut),di,st),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Oe.setValue(E,"center",O.center),Oe.setValue(E,"modelViewMatrix",O.modelViewMatrix),Oe.setValue(E,"normalMatrix",O.normalMatrix),Oe.setValue(E,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const yn=G.uniformsGroups;for(let yl=0,J0=yn.length;yl<J0;yl++){const du=yn[yl];Zt.update(du,$n),Zt.bind(du,$n)}}return $n}function Z0(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Q0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,N,W){lt.get(T.texture).__webglTexture=N,lt.get(T.depthTexture).__webglTexture=W;const G=lt.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=W===void 0,G.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){const W=lt.get(T);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,W=0){P=T,R=N,A=W;let G=!0,O=null,dt=!1,Mt=!1;if(T){const kt=lt.get(T);kt.__useDefaultFramebuffer!==void 0?(ht.bindFramebuffer(E.FRAMEBUFFER,null),G=!1):kt.__webglFramebuffer===void 0?st.setupRenderTarget(T):kt.__hasExternalTextures&&st.rebindTextures(T,lt.get(T.texture).__webglTexture,lt.get(T.depthTexture).__webglTexture);const zt=T.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Mt=!0);const Ht=lt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ht[N])?O=Ht[N][W]:O=Ht[N],dt=!0):T.samples>0&&st.useMultisampledRTT(T)===!1?O=lt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ht)?O=Ht[W]:O=Ht,S.copy(T.viewport),D.copy(T.scissor),X=T.scissorTest}else S.copy(Et).multiplyScalar(it).floor(),D.copy(bt).multiplyScalar(it).floor(),X=Kt;if(ht.bindFramebuffer(E.FRAMEBUFFER,O)&&G&&ht.drawBuffers(T,O),ht.viewport(S),ht.scissor(D),ht.setScissorTest(X),dt){const kt=lt.get(T.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+N,kt.__webglTexture,W)}else if(Mt){const kt=lt.get(T.texture),zt=N||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,kt.__webglTexture,W||0,zt)}I=-1},this.readRenderTargetPixels=function(T,N,W,G,O,dt,Mt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=lt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Mt!==void 0&&(Rt=Rt[Mt]),Rt){ht.bindFramebuffer(E.FRAMEBUFFER,Rt);try{const kt=T.texture,zt=kt.format,Ht=kt.type;if(!At.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-G&&W>=0&&W<=T.height-O&&E.readPixels(N,W,G,O,vt.convert(zt),vt.convert(Ht),dt)}finally{const kt=P!==null?lt.get(P).__webglFramebuffer:null;ht.bindFramebuffer(E.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(T,N,W,G,O,dt,Mt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=lt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Mt!==void 0&&(Rt=Rt[Mt]),Rt){ht.bindFramebuffer(E.FRAMEBUFFER,Rt);try{const kt=T.texture,zt=kt.format,Ht=kt.type;if(!At.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-G&&W>=0&&W<=T.height-O){const Ft=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Ft),E.bufferData(E.PIXEL_PACK_BUFFER,dt.byteLength,E.STREAM_READ),E.readPixels(N,W,G,O,vt.convert(zt),vt.convert(Ht),0),E.flush();const ie=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);await xv(E,ie,4);try{E.bindBuffer(E.PIXEL_PACK_BUFFER,Ft),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,dt)}finally{E.deleteBuffer(Ft),E.deleteSync(ie)}return dt}}finally{const kt=P!==null?lt.get(P).__webglFramebuffer:null;ht.bindFramebuffer(E.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(T,N=null,W=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-W),O=Math.floor(T.image.width*G),dt=Math.floor(T.image.height*G),Mt=N!==null?N.x:0,Rt=N!==null?N.y:0;st.setTexture2D(T,0),E.copyTexSubImage2D(E.TEXTURE_2D,W,0,0,Mt,Rt,O,dt),ht.unbindTexture()},this.copyTextureToTexture=function(T,N,W=null,G=null,O=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],N=arguments[2],O=arguments[3]||0,W=null);let dt,Mt,Rt,kt,zt,Ht;W!==null?(dt=W.max.x-W.min.x,Mt=W.max.y-W.min.y,Rt=W.min.x,kt=W.min.y):(dt=T.image.width,Mt=T.image.height,Rt=0,kt=0),G!==null?(zt=G.x,Ht=G.y):(zt=0,Ht=0);const Ft=vt.convert(N.format),ie=vt.convert(N.type);st.setTexture2D(N,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,N.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,N.unpackAlignment);const Me=E.getParameter(E.UNPACK_ROW_LENGTH),we=E.getParameter(E.UNPACK_IMAGE_HEIGHT),hn=E.getParameter(E.UNPACK_SKIP_PIXELS),se=E.getParameter(E.UNPACK_SKIP_ROWS),Ut=E.getParameter(E.UNPACK_SKIP_IMAGES),Je=T.isCompressedTexture?T.mipmaps[O]:T.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,Je.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Je.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Rt),E.pixelStorei(E.UNPACK_SKIP_ROWS,kt),T.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,O,zt,Ht,dt,Mt,Ft,ie,Je.data):T.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,O,zt,Ht,Je.width,Je.height,Ft,Je.data):E.texSubImage2D(E.TEXTURE_2D,O,zt,Ht,Ft,ie,Je),E.pixelStorei(E.UNPACK_ROW_LENGTH,Me),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,we),E.pixelStorei(E.UNPACK_SKIP_PIXELS,hn),E.pixelStorei(E.UNPACK_SKIP_ROWS,se),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ut),O===0&&N.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),ht.unbindTexture()},this.copyTextureToTexture3D=function(T,N,W=null,G=null,O=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,G=arguments[1]||null,T=arguments[2],N=arguments[3],O=arguments[4]||0);let dt,Mt,Rt,kt,zt,Ht,Ft,ie,Me;const we=T.isCompressedTexture?T.mipmaps[O]:T.image;W!==null?(dt=W.max.x-W.min.x,Mt=W.max.y-W.min.y,Rt=W.max.z-W.min.z,kt=W.min.x,zt=W.min.y,Ht=W.min.z):(dt=we.width,Mt=we.height,Rt=we.depth,kt=0,zt=0,Ht=0),G!==null?(Ft=G.x,ie=G.y,Me=G.z):(Ft=0,ie=0,Me=0);const hn=vt.convert(N.format),se=vt.convert(N.type);let Ut;if(N.isData3DTexture)st.setTexture3D(N,0),Ut=E.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)st.setTexture2DArray(N,0),Ut=E.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,N.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,N.unpackAlignment);const Je=E.getParameter(E.UNPACK_ROW_LENGTH),ce=E.getParameter(E.UNPACK_IMAGE_HEIGHT),$n=E.getParameter(E.UNPACK_SKIP_PIXELS),go=E.getParameter(E.UNPACK_SKIP_ROWS),zi=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,we.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,we.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,kt),E.pixelStorei(E.UNPACK_SKIP_ROWS,zt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ht),T.isDataTexture||T.isData3DTexture?E.texSubImage3D(Ut,O,Ft,ie,Me,dt,Mt,Rt,hn,se,we.data):N.isCompressedArrayTexture?E.compressedTexSubImage3D(Ut,O,Ft,ie,Me,dt,Mt,Rt,hn,we.data):E.texSubImage3D(Ut,O,Ft,ie,Me,dt,Mt,Rt,hn,se,we),E.pixelStorei(E.UNPACK_ROW_LENGTH,Je),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ce),E.pixelStorei(E.UNPACK_SKIP_PIXELS,$n),E.pixelStorei(E.UNPACK_SKIP_ROWS,go),E.pixelStorei(E.UNPACK_SKIP_IMAGES,zi),O===0&&N.generateMipmaps&&E.generateMipmap(Ut),ht.unbindTexture()},this.initRenderTarget=function(T){lt.get(T).__webglFramebuffer===void 0&&st.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?st.setTextureCube(T,0):T.isData3DTexture?st.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?st.setTexture2DArray(T,0):st.setTexture2D(T,0),ht.unbindTexture()},this.resetState=function(){R=0,A=0,P=null,ht.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===_h?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===sl?"display-p3":"srgb"}}class fr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new St(t),this.near=e,this.far=n}clone(){return new fr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pr extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class b1{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=$c,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return yh("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new U;class Oa{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Oa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Jp extends Fi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ds;const Cr=new U,Ls=new U,ks=new U,Is=new Bt,Pr=new Bt,tm=new fe,Bo=new U,Dr=new U,zo=new U,kd=new Bt,Ql=new Bt,Id=new Bt;class T1 extends De{constructor(t=new Jp){if(super(),this.isSprite=!0,this.type="Sprite",Ds===void 0){Ds=new Ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new b1(e,5);Ds.setIndex([0,1,2,0,2,3]),Ds.setAttribute("position",new Oa(n,3,0,!1)),Ds.setAttribute("uv",new Oa(n,2,3,!1))}this.geometry=Ds,this.material=t,this.center=new Bt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ls.setFromMatrixScale(this.matrixWorld),tm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ls.multiplyScalar(-ks.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Ho(Bo.set(-.5,-.5,0),ks,o,Ls,s,r),Ho(Dr.set(.5,-.5,0),ks,o,Ls,s,r),Ho(zo.set(.5,.5,0),ks,o,Ls,s,r),kd.set(0,0),Ql.set(1,0),Id.set(1,1);let a=t.ray.intersectTriangle(Bo,Dr,zo,!1,Cr);if(a===null&&(Ho(Dr.set(-.5,.5,0),ks,o,Ls,s,r),Ql.set(0,1),a=t.ray.intersectTriangle(Bo,zo,Dr,!1,Cr),a===null))return;const l=t.ray.origin.distanceTo(Cr);l<t.near||l>t.far||e.push({distance:l,point:Cr.clone(),uv:An.getInterpolation(Cr,Bo,Dr,zo,kd,Ql,Id,new Bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ho(i,t,e,n,s,r){Is.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Pr.x=r*Is.x-s*Is.y,Pr.y=s*Is.x+r*Is.y):Pr.copy(Is),i.copy(t),i.x+=Pr.x,i.y+=Pr.y,i.applyMatrix4(tm)}class bh extends Ge{constructor(t=null,e=1,n=1,s,r,o,a,l,c=de,h=de,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class em extends Fi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ba=new U,za=new U,Ud=new fe,Lr=new Mh,Wo=new lo,Jl=new U,Nd=new U;class E1 extends De{constructor(t=new Ve,e=new em){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ba.fromBufferAttribute(e,s-1),za.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ba.distanceTo(za);t.setAttribute("lineDistance",new ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(s),Wo.radius+=r,t.ray.intersectsSphere(Wo)===!1)return;Ud.copy(s).invert(),Lr.copy(t.ray).applyMatrix4(Ud);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const f=h.getX(v),x=h.getX(v+1),_=Go(this,t,Lr,l,f,x);_&&e.push(_)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),f=Go(this,t,Lr,l,v,m);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const f=Go(this,t,Lr,l,v,v+1);f&&e.push(f)}if(this.isLineLoop){const v=Go(this,t,Lr,l,g-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Go(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Ba.fromBufferAttribute(o,s),za.fromBufferAttribute(o,r),e.distanceSqToSegment(Ba,za,Jl,Nd)>n)return;Jl.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Jl);if(!(l<t.near||l>t.far))return{distance:l,point:Nd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,object:i}}const Fd=new U,Od=new U;class A1 extends E1{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Fd.fromBufferAttribute(e,s),Od.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Fd.distanceTo(Od);t.setAttribute("lineDistance",new ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Th extends Fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Bd=new fe,Kc=new Mh,Vo=new lo,Xo=new U;class nm extends De{constructor(t=new Ve,e=new Th){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(s),Vo.radius+=r,t.ray.intersectsSphere(Vo)===!1)return;Bd.copy(s).invert(),Kc.copy(t.ray).applyMatrix4(Bd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);Xo.fromBufferAttribute(u,m),zd(Xo,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,v=p;g<v;g++)Xo.fromBufferAttribute(u,g),zd(Xo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function zd(i,t,e,n,s,r,o){const a=Kc.distanceSqToPoint(i);if(a<e){const l=new U;Kc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class al extends Ge{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const qo=new U,$o=new U,tc=new U,Yo=new An;class R1 extends Ve{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(tr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:f}=Yo;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Yo.getNormal(tc),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const _=(x+1)%3,M=u[x],R=u[_],A=Yo[h[x]],P=Yo[h[_]],I=`${M}_${R}`,b=`${R}_${M}`;b in d&&d[b]?(tc.dot(d[b].normal)<=r&&(p.push(A.x,A.y,A.z),p.push(P.x,P.y,P.z)),d[b]=null):I in d||(d[I]={index0:c[x],index1:c[_],normal:tc.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:m}=d[g];qo.fromBufferAttribute(a,v),$o.fromBufferAttribute(a,m),p.push(qo.x,qo.y,qo.z),p.push($o.x,$o.y,$o.z)}this.setAttribute("position",new ke(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Eh extends Ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new U,d=new U,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const x=[],_=f/n;let M=0;f===0&&o===0?M=.5/e:f===n&&l===Math.PI&&(M=-.5/e);for(let R=0;R<=e;R++){const A=R/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(A+M,1-_),x.push(c++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<e;x++){const _=h[f][x+1],M=h[f][x],R=h[f+1][x],A=h[f+1][x+1];(f!==0||o>0)&&p.push(_,M,A),(f!==n-1||l<Math.PI)&&p.push(M,R,A)}this.setIndex(p),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(v,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class C1 extends Fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lp,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hd extends C1{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Bt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new St(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new St(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new St(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Wd={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class P1{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const D1=new P1;class Ah{constructor(t){this.manager=t!==void 0?t:D1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ah.DEFAULT_MATERIAL_NAME="__DEFAULT";class L1 extends Ah{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Wd.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=to("img");function l(){h(),Wd.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class wr extends Ah{constructor(t){super(t)}load(t,e,n,s){const r=new Ge,o=new L1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Rh extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class k1 extends Rh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ec=new fe,Gd=new U,Vd=new U;class I1{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wh,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Gd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gd),Vd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vd),e.updateMatrixWorld(),ec.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ec)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class U1 extends I1{constructor(){super(new eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class im extends Rh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new U1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Xd extends Rh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gh);const sm=13625079,N1=[.3,.52,.79],F1=[.81,.9,.97],nc=i=>`rgb(${Math.round(i[0]*255)},${Math.round(i[1]*255)},${Math.round(i[2]*255)})`;function O1(i,t,e){const n=[(t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2],s=i.createLinearGradient(0,0,0,256);s.addColorStop(0,nc(t)),s.addColorStop(.55,nc(n)),s.addColorStop(1,nc(e)),i.fillStyle=s,i.fillRect(0,0,2,256)}function B1(){const i=document.createElement("canvas");i.width=2,i.height=256;const t=i.getContext("2d");t&&O1(t,N1,F1);const e=new al(i);return e.colorSpace=ae,e}function z1(i){const t=i|0,e=`
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
uniform float uUnderwater;
uniform vec3 uWaterIrradiance;

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

float mwLinearDepth(float z) {
  const float n = 0.1;
  const float f = 1000.0;
  float ndc = z * 2.0 - 1.0;
  return (2.0 * n * f) / max(0.0001, f + n - ndc * (f - n));
}

void main() {
  vec3 scene = texture2D(tColor, vUv).rgb;
  vec3 bloomColor = texture2D(tBloom, vUv).rgb;

  // AO 只压场景本体，不压 Bloom/体积光。uAO=0 时不去采样未绑定的兜底纹理。
  if (uAO > 0.001) {
    float aoValue = texture2D(tAO, vUv).r;
    scene *= mix(1.0, aoValue, uAO);
  }

  // 水体中的多次散射会优先柔化远处细节。四个邻点只在深度接近时参与，
  // 因此不会把前景轮廓抹进远景，也不是一张固定的屏幕模糊滤镜。
  float underwaterPath = 0.0;
  if (uUnderwater > 0.001) {
    underwaterPath = min(mwLinearDepth(texture2D(tDepth, vUv).r), 38.0);
    vec2 pixel = max(fwidth(vUv), vec2(1.0 / 4096.0));
    float radiusPx = mix(0.65, 2.35, smoothstep(4.0, 32.0, underwaterPath));
    vec2 dx = vec2(pixel.x * radiusPx, 0.0);
    vec2 dy = vec2(0.0, pixel.y * radiusPx);
    vec2 uvXp = clamp(vUv + dx, vec2(0.001), vec2(0.999));
    vec2 uvXm = clamp(vUv - dx, vec2(0.001), vec2(0.999));
    vec2 uvYp = clamp(vUv + dy, vec2(0.001), vec2(0.999));
    vec2 uvYm = clamp(vUv - dy, vec2(0.001), vec2(0.999));
    float wxp = 0.15 * exp(-abs(min(mwLinearDepth(texture2D(tDepth, uvXp).r), 38.0) - underwaterPath) * 0.32);
    float wxm = 0.15 * exp(-abs(min(mwLinearDepth(texture2D(tDepth, uvXm).r), 38.0) - underwaterPath) * 0.32);
    float wyp = 0.15 * exp(-abs(min(mwLinearDepth(texture2D(tDepth, uvYp).r), 38.0) - underwaterPath) * 0.32);
    float wym = 0.15 * exp(-abs(min(mwLinearDepth(texture2D(tDepth, uvYm).r), 38.0) - underwaterPath) * 0.32);
    float blurWeight = 0.4 + wxp + wxm + wyp + wym;
    vec3 diffused = scene * 0.4;
    diffused += texture2D(tColor, uvXp).rgb * wxp;
    diffused += texture2D(tColor, uvXm).rgb * wxm;
    diffused += texture2D(tColor, uvYp).rgb * wyp;
    diffused += texture2D(tColor, uvYm).rgb * wym;
    diffused /= max(blurWeight, 0.0001);
    float diffusion = (1.0 - exp(-underwaterPath * 0.045)) * 0.32 * uUnderwater;
    scene = mix(scene, diffused, diffusion);
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

  // 水下不再盖一张固定蓝色 DOM 遮罩。利用主场景深度估计每条视线在水中的
  // 光程，按 Beer-Lambert 吸收红光，并加入随距离增长的环境散射。
  // 天空深度没有真实交点，因此把它视为一段有限的开阔水体，而不是 1000 格黑洞。
  if (uUnderwater > 0.001) {
    float waterPath = underwaterPath;
    waterPath = mix(0.0, waterPath, uUnderwater);
    // 与水面材质共享同一组吸收/散射系数。水面与此后处理按
    // uUnderwater 分摊光程，因此穿越浪面时能量连续且不会重复染蓝。
    vec3 sigmaA = vec3(0.095, 0.028, 0.010);
    vec3 sigmaS = vec3(0.010, 0.038, 0.055);
    vec3 sigmaT = sigmaA + sigmaS;
    vec3 transmittance = exp(-sigmaT * waterPath);
    vec3 inScatter = uWaterIrradiance
      * (sigmaS / max(sigmaT, vec3(0.0001)))
      * (vec3(1.0) - transmittance);
    hdr = hdr * transmittance + inScatter;
    // 水中高频 Bloom 会像屏幕贴片；真实水体会先吸收并扩散这些能量。
    hdr = mix(hdr, hdr * vec3(0.88, 0.97, 1.03), uUnderwater * 0.18);
  }
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
`.trim();return new Ze({uniforms:{tColor:{value:null},tDepth:{value:null},tBloom:{value:null},tAO:{value:null},uSunUV:{value:new Bt(.5,.5)},uSunColor:{value:new St(1,.95,.8)},uIntensity:{value:0},uDecay:{value:.96},uWeight:{value:.9},uBloom:{value:0},uAO:{value:0},uUnderwater:{value:0},uWaterIrradiance:{value:new St(.04,.18,.26)}},vertexShader:e,fragmentShader:n,depthTest:!1,depthWrite:!1})}class qd{constructor(t){y(this,"material");y(this,"quad");y(this,"quadScene",new pr);y(this,"quadCam",new eo(-1,1,1,-1,0,1));this.material=z1(t),this.quad=new Jt(new ln(2,2),this.material),this.quadScene.add(this.quad)}render(t){t.render(this.quadScene,this.quadCam)}dispose(){this.material.dispose(),this.quad.geometry.dispose()}}const H1=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim(),W1=`
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
`.trim(),G1=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim(),V1=`
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
`.trim();class X1{constructor(t,e){y(this,"bloomA");y(this,"bloomB");y(this,"extractMat");y(this,"extractScene",new pr);y(this,"extractCam",new eo(-1,1,1,-1,0,1));y(this,"blurMat");y(this,"blurScene",new pr);y(this,"blurCam",new eo(-1,1,1,-1,0,1));this.bloomA=this.buildRT(1,1),this.bloomB=this.buildRT(1,1),this.extractMat=new Ze({uniforms:{tScene:{value:null},uThreshold:{value:1.05},uKnee:{value:.22},uSourceTexel:{value:new Bt(1,1)}},vertexShader:H1,fragmentShader:W1,depthTest:!1,depthWrite:!1});const n=new Jt(new ln(2,2),this.extractMat);this.extractScene.add(n),this.blurMat=new Ze({uniforms:{tBlur:{value:null},uTexelSize:{value:new Bt(1,1)},uHorizontal:{value:1}},vertexShader:G1,fragmentShader:V1,depthTest:!1,depthWrite:!1});const s=new Jt(new ln(2,2),this.blurMat);this.blurScene.add(s),this.setSize(t,e)}get texture(){return this.bloomA.texture}setSize(t,e){this.bloomA.dispose(),this.bloomB.dispose();const n=Math.max(1,Math.round(t)),s=Math.max(1,Math.round(e));this.bloomA=this.buildRT(n,s),this.bloomB=this.buildRT(n,s),this.extractMat.uniforms.uSourceTexel.value.set(1/(n*4),1/(s*4)),this.blurMat.uniforms.uTexelSize.value.set(1/n,1/s)}render(t,e){this.extractMat.uniforms.tScene.value=e,t.setRenderTarget(this.bloomA),t.clear(),t.render(this.extractScene,this.extractCam);for(let n=0;n<2;n++)this.blurMat.uniforms.tBlur.value=this.bloomA.texture,this.blurMat.uniforms.uHorizontal.value=1,t.setRenderTarget(this.bloomB),t.clear(),t.render(this.blurScene,this.blurCam),this.blurMat.uniforms.tBlur.value=this.bloomB.texture,this.blurMat.uniforms.uHorizontal.value=0,t.setRenderTarget(this.bloomA),t.clear(),t.render(this.blurScene,this.blurCam);t.setRenderTarget(null)}dispose(){this.bloomA.dispose(),this.bloomB.dispose(),this.extractMat.dispose(),this.blurMat.dispose()}buildRT(t,e){return new Fn(t,e,{type:Ii,depthBuffer:!1})}}function rm(i){const t=i.visualViewport,e=t&&t.width>0?t.width:i.innerWidth,n=t&&t.height>0?t.height:i.innerHeight;return{width:Math.max(1,Math.ceil(e)),height:Math.max(1,Math.ceil(n))}}const Ch=1,$r=2,no=3,co=4,Dt=16,pe=192;class ho{constructor(){y(this,"blocks",new Uint16Array(Dt*pe*Dt));y(this,"fluid",new Uint8Array(Dt*pe*Dt));y(this,"dirty",!0)}idx(t,e,n){return t+n*Dt+e*Dt*Dt}inBounds(t,e,n){return t>=0&&t<Dt&&e>=0&&e<pe&&n>=0&&n<Dt}get(t,e,n){return this.inBounds(t,e,n)?this.blocks[this.idx(t,e,n)]:0}set(t,e,n,s){this.inBounds(t,e,n)&&(this.blocks[this.idx(t,e,n)]=s)}getFluid(t,e,n){return this.inBounds(t,e,n)?this.fluid[this.idx(t,e,n)]:0}setFluid(t,e,n,s){this.inBounds(t,e,n)&&(this.fluid[this.idx(t,e,n)]=s)}static fromBuffers(t,e){const n=new ho;return n.blocks.set(new Uint16Array(t)),n.fluid.set(new Uint8Array(e)),n}}const om=16,am=32,$d=i=>i&15,q1=i=>(i&om)!==0,$1=i=>(i&am)!==0,Ph=(i,t,e)=>i&15|(t?om:0)|(e?am:0),Vt=i=>i>>4,Pe=i=>i&15;function Tn(i,t,e){let n=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,1274126177);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}const Yr=i=>i*i*(3-2*i);function Y1(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=Tn(n,s,e),l=Tn(n+1,s,e),c=Tn(n,s+1,e),h=Tn(n+1,s+1,e),u=Yr(r),d=Yr(o),p=a+(l-a)*u,g=c+(h-c)*u;return p+(g-p)*d}function $s(i,t,e,n=4){let s=1,r=1,o=0,a=0;for(let l=0;l<n;l++)o+=s*Y1(i*r,t*r,e+l*101),a+=s,s*=.5,r*=2;return o/a}function lm(i,t,e,n){let s=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,2147483647)^Math.imul(n|0,1274126177);return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296}function nn(i,t,e,n){const s=Math.floor(i),r=Math.floor(t),o=Math.floor(e),a=Yr(i-s),l=Yr(t-r),c=Yr(e-o),h=(m,f,x)=>m+(f-m)*x,u=(m,f,x)=>lm(s+m,r+f,o+x,n),d=h(u(0,0,0),u(1,0,0),a),p=h(u(0,1,0),u(1,1,0),a),g=h(u(0,0,1),u(1,0,1),a),v=h(u(0,1,1),u(1,1,1),a);return h(h(d,p,l),h(g,v,l),c)}function cm(i){let t=i>>>0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Wn=(i=>(i[i.PosX=0]="PosX",i[i.NegX=1]="NegX",i[i.PosY=2]="PosY",i[i.NegY=3]="NegY",i[i.PosZ=4]="PosZ",i[i.NegZ=5]="NegZ",i))(Wn||{});const Gt={stone:0,dirt:1,grass_top:2,grass_side:3,cobblestone:4,sand:5,oak_log_top:6,oak_log_side:7,oak_planks:8,coal_ore:9,water:10,oak_leaves:11,crafting_table_top:12,crafting_table_side:13,iron_ore:14,furnace_front:15,gravel:16,grass_plant:17,obsidian:18,netherrack:19,soul_sand:20,glowstone:21,nether_quartz_ore:22,lava:23,bedrock:24,nether_portal:25,sandstone:26,cactus:27,ice:28,snow:29,spruce_log:30,spruce_leaves:31,coal_block:32,iron_block:33,quartz_block:34,diamond_ore:35,diamond_block:36},te=i=>[i,i,i,i,i,i],kr=(i,t,e)=>[i,i,t,e,i,i],K1=258,j1=296,Ie=[{id:0,name:"air",solid:!1,transparent:!0,faces:te(0),hardness:0,drop:null,needsTool:!1,tool:null},{id:1,name:"stone",solid:!0,transparent:!1,faces:te(Gt.stone),hardness:1.5,drop:4,needsTool:!0,tool:"pickaxe"},{id:2,name:"dirt",solid:!0,transparent:!1,faces:te(Gt.dirt),hardness:.5,drop:2,needsTool:!1,tool:"shovel"},{id:3,name:"grass",solid:!0,transparent:!1,faces:kr(Gt.grass_side,Gt.grass_top,Gt.dirt),hardness:.6,drop:2,needsTool:!1,tool:"shovel"},{id:4,name:"cobblestone",solid:!0,transparent:!1,faces:te(Gt.cobblestone),hardness:2,drop:4,needsTool:!0,tool:"pickaxe"},{id:5,name:"sand",solid:!0,transparent:!1,faces:te(Gt.sand),hardness:.5,drop:5,needsTool:!1,tool:"shovel"},{id:6,name:"oak_log",solid:!0,transparent:!1,faces:kr(Gt.oak_log_side,Gt.oak_log_top,Gt.oak_log_top),hardness:2,drop:6,needsTool:!1,tool:"axe"},{id:7,name:"oak_planks",solid:!0,transparent:!1,faces:te(Gt.oak_planks),hardness:2,drop:7,needsTool:!1,tool:"axe"},{id:8,name:"coal_ore",solid:!0,transparent:!1,faces:te(Gt.coal_ore),hardness:3,drop:K1,needsTool:!0,tool:"pickaxe"},{id:9,name:"water",solid:!1,transparent:!0,faces:te(Gt.water),hardness:0,drop:null,needsTool:!1,tool:null},{id:10,name:"oak_leaves",solid:!0,transparent:!0,faces:te(Gt.oak_leaves),hardness:.2,drop:null,needsTool:!1,tool:null},{id:11,name:"crafting_table",solid:!0,transparent:!1,faces:kr(Gt.crafting_table_side,Gt.crafting_table_top,Gt.oak_planks),hardness:2.5,drop:11,needsTool:!1,tool:"axe"},{id:12,name:"iron_ore",solid:!0,transparent:!1,faces:te(Gt.iron_ore),hardness:3,drop:12,needsTool:!0,tool:"pickaxe",minTier:2},{id:13,name:"furnace",solid:!0,transparent:!1,faces:kr(Gt.furnace_front,Gt.cobblestone,Gt.cobblestone),hardness:3.5,drop:13,needsTool:!0,tool:"pickaxe"},{id:14,name:"torch",solid:!1,transparent:!0,faces:te(0),hardness:0,drop:14,needsTool:!1,tool:null,light:14},{id:15,name:"gravel",solid:!0,transparent:!1,faces:te(Gt.gravel),hardness:.6,drop:15,needsTool:!1,tool:"shovel"},{id:16,name:"grass_plant",solid:!1,transparent:!0,faces:te(Gt.grass_plant),hardness:0,drop:null,needsTool:!1,tool:null},{id:17,name:"tall_grass",solid:!1,transparent:!0,faces:te(Gt.grass_plant),hardness:0,drop:null,needsTool:!1,tool:null},{id:18,name:"obsidian",solid:!0,transparent:!1,faces:te(Gt.obsidian),hardness:50,drop:18,needsTool:!0,tool:"pickaxe",minTier:4},{id:19,name:"netherrack",solid:!0,transparent:!1,faces:te(Gt.netherrack),hardness:.4,drop:19,needsTool:!0,tool:"pickaxe"},{id:20,name:"soul_sand",solid:!0,transparent:!1,faces:te(Gt.soul_sand),hardness:.5,drop:20,needsTool:!1,tool:"shovel"},{id:21,name:"glowstone",solid:!0,transparent:!1,faces:te(Gt.glowstone),hardness:.3,drop:21,needsTool:!1,tool:null,light:15},{id:22,name:"nether_quartz_ore",solid:!0,transparent:!1,faces:te(Gt.nether_quartz_ore),hardness:3,drop:295,needsTool:!0,tool:"pickaxe",minTier:1},{id:23,name:"lava",solid:!1,transparent:!0,faces:te(Gt.lava),hardness:100,drop:null,needsTool:!1,tool:null,light:15},{id:24,name:"bedrock",solid:!0,transparent:!1,faces:te(Gt.bedrock),hardness:-1,drop:null,needsTool:!1,tool:null},{id:25,name:"nether_portal",solid:!1,transparent:!0,faces:te(Gt.nether_portal),hardness:-1,drop:null,needsTool:!1,tool:null,light:11},{id:26,name:"sandstone",solid:!0,transparent:!1,faces:te(Gt.sandstone),hardness:.8,drop:26,needsTool:!0,tool:"pickaxe"},{id:27,name:"cactus",solid:!0,transparent:!1,faces:te(Gt.cactus),hardness:.4,drop:27,needsTool:!1,tool:null},{id:28,name:"ice",solid:!0,transparent:!1,faces:te(Gt.ice),hardness:.5,drop:null,needsTool:!1,tool:"pickaxe"},{id:29,name:"snow_layer",solid:!1,transparent:!0,faces:te(Gt.snow),hardness:0,drop:null,needsTool:!1,tool:"shovel"},{id:30,name:"spruce_log",solid:!0,transparent:!1,faces:kr(Gt.spruce_log,Gt.oak_log_top,Gt.oak_log_top),hardness:2,drop:30,needsTool:!1,tool:"axe"},{id:31,name:"spruce_leaves",solid:!0,transparent:!0,faces:te(Gt.spruce_leaves),hardness:.2,drop:null,needsTool:!1,tool:null},{id:32,name:"coal_block",solid:!0,transparent:!1,faces:te(Gt.coal_block),hardness:5,drop:32,needsTool:!0,tool:"pickaxe"},{id:33,name:"iron_block",solid:!0,transparent:!1,faces:te(Gt.iron_block),hardness:5,drop:33,needsTool:!0,tool:"pickaxe",minTier:2},{id:34,name:"quartz_block",solid:!0,transparent:!1,faces:te(Gt.quartz_block),hardness:.8,drop:34,needsTool:!0,tool:"pickaxe"},{id:35,name:"diamond_ore",solid:!0,transparent:!1,faces:te(Gt.diamond_ore),hardness:3,drop:j1,needsTool:!0,tool:"pickaxe",minTier:3},{id:36,name:"diamond_block",solid:!0,transparent:!1,faces:te(Gt.diamond_block),hardness:5,drop:36,needsTool:!0,tool:"pickaxe",minTier:3}],hm=3,sn=9,nr=10,ll=6,Z1=7,Q1=4,um=11,J1=12,ic=13,ns=14,Ko=15,tw=16,dm=17,bn=18,ew=19,sc=5,fm=20,nw=21,iw=22,io=23,Dh=24,bi=25,sw=26,Vs=27,ir=28,Lh=29,cl=30,hl=31,rw=32,ow=35,jc=i=>i===io,zn=i=>i===bi,xe=i=>{var t;return((t=Ie[i])==null?void 0:t.solid)??!1},li=i=>i===sn,Yd=i=>i===nr||i===hl,Ti=i=>i===tw||i===dm||i===Lh,Kd=i=>xe(i)||Ti(i),jd=i=>i===0||i===sn||Ti(i)||i===bi,Us=i=>{const t=Ie[i];return t?t.solid&&!t.transparent:!1},jo=(i,t)=>Ie[i].faces[t],pm=i=>{var t;return((t=Ie[i])==null?void 0:t.hardness)??0},aw=i=>{var t;return((t=Ie[i])==null?void 0:t.needsTool)??!1},lw=i=>{var t;return((t=Ie[i])==null?void 0:t.light)??0};function mm(i,t){var n;const e=((n=Ie[i])==null?void 0:n.tool)??null;return t!==null&&e!==null&&t.kind===e}const gm=(i,t=null)=>{var e;return aw(i)?mm(i,t)?t.tier>=(((e=Ie[i])==null?void 0:e.minTier)??1):!1:!0},cw=(i,t=null)=>{if(Ti(i))return 0;const e=Math.max(0,pm(i));if(e===0)return 0;const n=mm(i,t)?t.speed:1,s=gm(i,t)?30:100;return Math.ceil(s*e/n)*50},hw=(i,t=null)=>{var e;return gm(i,t)?((e=Ie[i])==null?void 0:e.drop)??null:null},uw=i=>i===Vs,dw=i=>i===ir?.98:.6,Zd=320,fw=.38,pw=.66;function vm(i,t,e){return $s(i/130,t/130,e+4321,2)}function mw(i,t,e){return $s(i/Zd,t/Zd,e+9001,3)}function Xs(i,t,e){const n=mw(i,t,e);return n<fw?"snow":n>pw?"desert":vm(i,t,e)>.62?"forest":"plains"}const kh=1,gw=2,rc=3,Ir=5,vw=8,_w=12,xw=15,yw=16,Mw=17,ee=116,ww=Ph(8,!0,!1);function Sw(i,t,e){const n=He(i,t,e);return Math.abs(He(i+5,t,e)-n)<=3&&Math.abs(He(i-5,t,e)-n)<=3&&Math.abs(He(i,t+5,e)-n)<=3&&Math.abs(He(i,t-5,e)-n)<=3}function bw(i,t,e,n,s){const r=n-t;if(r<12)return!1;const o=i+(nn(i/36,t/30,e/36,s+991)-.5)*26,a=t+(nn(t/30,i/34,e/34,s+993)-.5)*22,l=e+(nn(e/36,t/30,i/36,s+992)-.5)*26;return r<50?Math.abs(nn(o/14,a/14,l/14,s+222)-.5)<.03:r<100?Math.abs(nn(o/18,a/18,l/18,s+333)-.5)<.05?!0:nn(o/22,a/22,l/22,s+700)<.07:nn(o/26,a/26,l/26,s+700)<.07?!0:Math.abs(nn(o/18,a/18,l/18,s+333)-.5)<.04}function oc(i,t,e,n){return nn(i/5,t/5,e/5,n+303)>.82?xw:kh}const Tw=[{id:vw,attempts:20,size:17,minY:5,maxY:128,salt:2887841},{id:_w,attempts:20,size:9,minY:5,maxY:64,salt:2044082},{id:ow,attempts:1,size:8,minY:5,maxY:16,salt:5053075}],Zo=1,Ew=(i,t,e)=>Math.max(t,Math.min(e,i));function Aw(i,t,e,n,s){const r=lm(t,e,s,i+n.salt|0);return cm(Math.floor(r*4294967296))}function Rw(i,t,e,n,s,r,o,a){const l=Aw(r,n,s,o,a),c=n*Dt+l()*Dt,h=s*Dt+l()*Dt,u=o.minY+Math.floor(l()*(o.maxY-o.minY+1)),d=Ew(u+Math.floor(l()*5)-2,o.minY,o.maxY),p=l()*Math.PI,g=o.size/8,v=c+Math.sin(p)*g,m=c-Math.sin(p)*g,f=h+Math.cos(p)*g,x=h-Math.cos(p)*g;for(let _=0;_<o.size;_++){const M=_/o.size,R=v+(m-v)*M,A=u+(d-u)*M,P=f+(x-f)*M,I=(Math.sin(Math.PI*M)+1)*l()*o.size/16+1,b=I/2,S=I*(.55+l()*.15)/2,D=b,X=Math.floor(R-b),V=Math.floor(R+b),tt=Math.max(o.minY,Math.floor(A-S)),et=Math.min(o.maxY,pe-1,Math.floor(A+S)),Q=Math.floor(P-D),it=Math.floor(P+D);for(let q=X;q<=V;q++){if(Vt(q)!==t)continue;const xt=(q+.5-R)/b,Et=xt*xt;if(!(Et>=1))for(let bt=Q;bt<=it;bt++){if(Vt(bt)!==e)continue;const Kt=(bt+.5-P)/D,jt=Et+Kt*Kt;if(!(jt>=1))for(let Y=tt;Y<=et;Y++){const ot=(Y+.5-A)/S;if(jt+ot*ot>=1)continue;const wt=Pe(q),L=Pe(bt);i.get(wt,Y,L)===kh&&i.set(wt,Y,L,o.id)}}}}}function Cw(i,t,e,n){for(const s of Tw)for(let r=t-Zo;r<=t+Zo;r++)for(let o=e-Zo;o<=e+Zo;o++)for(let a=0;a<s.attempts;a++)Rw(i,t,e,r,o,n,s,a)}function He(i,t,e){const n=$s(i/260,t/260,e,4),s=$s(i/72,t/72,e+17,3);let r;n<.46?r=90+n*56:n<.56?r=116+(n-.46)*80:r=124+(n-.56)*180;let o=r+(s-.5)*8;{const a=$s(i/140,t/140,e+777,3),l=Math.abs(a-.5),c=.028+s*.022+Math.max(0,n-.54)*.4;if(l<c){let h=1-l/c;h=h*h*(3-2*h);const u=2+Math.floor($s(i/60,t/60,e+555,2)*3),d=ee-u;o=o*(1-h)+d*h}}return Math.floor(o)}const xi=2,Pw=.08;function Dw(i,t,e){const n=vm(i,t,e);return n<.45?.003:n>.62?.08:.003+(n-.45)/.17*.077}function Lw(i,t,e){return 4+Math.floor(Tn(i,t,e*31+5)*3)}function Qd(i,t,e,n,s,r,o,a=ll,l=nr,c=!1){const h=r+Lw(n,s,o),u=(p,g,v,m,f)=>{if(g<0||g>=pe||Vt(p)!==t||Vt(v)!==e)return;const x=Pe(p),_=Pe(v);f&&i.get(x,g,_)!==0||i.set(x,g,_,m)};if(c){const p=h+2,g=r+3;for(let v=g;v<=p;v++){const m=p-v,f=m===0?0:Math.min(2,Math.floor((m+1)/2));for(let x=-f;x<=f;x++)for(let _=-f;_<=f;_++)Math.abs(x)+Math.abs(_)>f||u(n+x,v,s+_,l,!0)}}else{for(const g of[-2,-1])for(let v=-2;v<=2;v++)for(let m=-2;m<=2;m++)Math.abs(v)===2&&Math.abs(m)===2||u(n+v,h+g,s+m,l,!0);for(let g=-1;g<=1;g++)for(let v=-1;v<=1;v++)u(n+g,h,s+v,l,!0);const p=[[0,0],[1,0],[-1,0],[0,1],[0,-1]];for(const[g,v]of p)u(n+g,h+1,s+v,l,!0)}const d=c?h+1:h;for(let p=r+1;p<=d;p++)u(n,p,s,a,!1)}const Qo=127,kw=31;function Iw(i,t,e){const n=new ho,s=e+7e4;for(let r=0;r<Dt;r++)for(let o=0;o<Dt;o++){const a=i*Dt+o,l=t*Dt+r;for(let c=0;c<=Qo;c++){if(c<=1||c>=Qo-1){n.set(o,c,r,Dh);continue}if(nn(a/18,c/16,l/18,s+1)>.55||nn(a/9,c/10,l/9,s+2)>.78){c<=kw&&n.set(o,c,r,io);continue}let u=ew;nn(a/4,c/4,l/4,s+3)>.86?u=iw:nn(a/10,c/10,l/10,s+4)>.9&&(u=fm),n.set(o,c,r,u)}if(Tn(a,l,s+5)<.012){for(let c=Qo-2;c>Qo-7;c--)if(n.get(o,c,r)===0){n.set(o,c,r,nw);break}}}return n.dirty=!0,n}function _m(i,t,e,n="overworld"){if(n==="nether")return Iw(i,t,e);const s=new ho;for(let a=0;a<Dt;a++)for(let l=0;l<Dt;l++){const c=i*Dt+l,h=t*Dt+a,u=He(c,h,e),d=Math.min(u,He(c+4,h,e),He(c-4,h,e),He(c,h+4,e),He(c,h-4,e)),p=Sw(c,h,e),g=u<=ee+1,v=Xs(c,h,e);for(let m=0;m<=u;m++){const f=p&&nn((c+m*.8)/8,m/120,(h+m*.6)/8,e+888)>.9;if(m>1&&(f||m<u&&bw(c,m,h,d,e)))continue;let x=kh;m===0||m<=4&&nn(c*.7,m*3.3,h*.7,e+4242)<(5-m)/5?x=Dh:g?m===u||m>=u-3?x=Ir:x=oc(c,m,h,e):v==="desert"?m===u||m>=u-3?x=Ir:m>=u-7?x=sw:x=oc(c,m,h,e):m===u?x=rc:m>=u-3?x=gw:x=oc(c,m,h,e),s.set(l,m,a,x)}for(let m=u+1;m<=ee;m++)s.set(l,m,a,sn),s.setFluid(l,m,a,ww);if(u<ee&&v==="snow"&&s.set(l,ee,a,ir),!g&&u>ee+1&&v==="snow"){const m=s.get(l,u,a),f=s.get(l,u+1,a);m===rc&&f===0&&Tn(c+1,h+3,e*19+41)<.85&&s.set(l,u+1,a,Lh)}}Cw(s,i,t,e);const r=i*Dt,o=t*Dt;for(let a=r-xi;a<r+Dt+xi;a++)for(let l=o-xi;l<o+Dt+xi;l++){const c=Tn(a,l,e*13+7);if(c>=Pw)continue;const h=He(a,l,e);if(h<=ee+1)continue;const u=Xs(a,l,e);u!=="plains"&&u!=="forest"||c<Dw(a,l,e)&&Qd(s,i,t,a,l,h,e)}for(let a=r-xi;a<r+Dt+xi;a++)for(let l=o-xi;l<o+Dt+xi;l++){if(Xs(a,l,e)!=="snow")continue;const c=He(a,l,e);c<=ee+1||Tn(a,l,e*17+3)>=.03||Qd(s,i,t,a,l,c,e,cl,hl,!0)}for(let a=0;a<Dt;a++)for(let l=0;l<Dt;l++){const c=r+l,h=o+a;if(Xs(c,h,e)!=="desert")continue;const u=He(c,h,e);if(u<=ee+1||s.get(l,u,a)!==Ir||s.get(l,u+1,a)!==0||Tn(c,h,e*11+53)>=.02)continue;const p=u+1;if(l>0&&(s.get(l-1,p,a)===Vs||xe(s.get(l-1,p,a)))||l<Dt-1&&(s.get(l+1,p,a)===Vs||xe(s.get(l+1,p,a)))||a>0&&(s.get(l,p,a-1)===Vs||xe(s.get(l,p,a-1)))||a<Dt-1&&(s.get(l,p,a+1)===Vs||xe(s.get(l,p,a+1))))continue;const g=1+Math.floor(Tn(c*3,h*3,e*7+13)*3);for(let v=1;v<=g;v++){const m=u+v;if(m>=pe)break;s.set(l,m,a,Vs)}}for(let a=0;a<Dt;a++)for(let l=0;l<Dt;l++){const c=r+l,h=o+a,u=Xs(c,h,e);if(u!=="plains"&&u!=="forest")continue;const d=He(c,h,e);if(d<=ee+1||s.get(l,d,a)!==rc||s.get(l,d+1,a)!==0)continue;const p=Tn(c,h,e*7+31);p>.4||s.set(l,d+1,a,p<.08?Mw:yw)}return s.dirty=!0,s}const Uw=ee+8/9;class Nw{constructor(t=1,e=1,n={}){y(this,"camera",new Ke);y(this,"renderTarget");y(this,"planeY");y(this,"clipBias");y(this,"underwaterPlane",new In);y(this,"underwaterPlanes");y(this,"airPlane",new In);y(this,"airPlanes");y(this,"sourcePosition",new U);y(this,"sourceQuaternion",new Ni);y(this,"savedViewport",new _e);y(this,"savedScissor",new _e);this.planeY=n.planeY??Uw,this.clipBias=Math.max(0,n.clipBias??.001),this.underwaterPlane.set(new U(0,-1,0),this.planeY-this.clipBias),this.underwaterPlanes=[this.underwaterPlane],this.airPlane.set(new U(0,1,0),-(this.planeY+this.clipBias)),this.airPlanes=[this.airPlane];const s=Math.max(1,Math.round(t)),r=Math.max(1,Math.round(e)),o=new rl(s,r,Li);o.name="mineworld-planar-refraction-depth",this.renderTarget=new Fn(s,r,{type:Ii,minFilter:Te,magFilter:Te,generateMipmaps:!1,depthTexture:o,depthBuffer:!0,stencilBuffer:!1,samples:Math.max(0,Math.round(n.samples??0))}),this.renderTarget.texture.name="mineworld-planar-refraction",this.renderTarget.texture.colorSpace=mn,this.camera.layers.set(0)}get texture(){return this.renderTarget.texture}get depthTexture(){return this.renderTarget.depthTexture}resize(t,e){const n=Math.max(1,Math.round(t)),s=Math.max(1,Math.round(e));this.renderTarget.setSize(n,s),this.depthTexture.image.width=n,this.depthTexture.image.height=s}render(t,e,n,s,r,o="below"){this.updateCamera(n),this.camera.layers.set(0),o==="above"&&(this.camera.layers.enable($r),this.camera.layers.enable(no));const a=t.getRenderTarget();t.getViewport(this.savedViewport),t.getScissor(this.savedScissor);const l=t.getScissorTest(),c=t.xr.enabled,h=t.shadowMap.autoUpdate,u=t.shadowMap.needsUpdate,d=t.clippingPlanes,p=t.localClippingEnabled,g=t.getContext(),v=!!g.getParameter(g.DEPTH_WRITEMASK);try{s==null||s(this.camera,this.renderTarget),t.xr.enabled=!1,t.shadowMap.autoUpdate=!1,t.shadowMap.needsUpdate=!1,t.clippingPlanes=o==="above"?this.airPlanes:this.underwaterPlanes,t.localClippingEnabled=!1,t.setRenderTarget(this.renderTarget),t.setScissorTest(!1),t.state.buffers.depth.setMask(!0),t.clear(!0,!0,!1),t.render(e,this.camera)}finally{t.xr.enabled=c,t.shadowMap.autoUpdate=h,t.shadowMap.needsUpdate=u,t.clippingPlanes=d,t.localClippingEnabled=p,t.state.buffers.depth.setMask(v),t.setRenderTarget(a),t.setViewport(this.savedViewport),t.setScissor(this.savedScissor),t.setScissorTest(l),r==null||r(this.camera,this.renderTarget)}}dispose(){this.renderTarget.dispose()}updateCamera(t){t.updateWorldMatrix(!0,!1),t.getWorldPosition(this.sourcePosition),t.getWorldQuaternion(this.sourceQuaternion),this.camera.position.copy(this.sourcePosition),this.camera.quaternion.copy(this.sourceQuaternion),this.camera.up.copy(t.up),this.camera.updateMatrixWorld(!0),this.camera.near=t.near,this.camera.far=t.far,this.camera.fov=t.fov,this.camera.aspect=t.aspect,this.camera.zoom=t.zoom,this.camera.focus=t.focus,this.camera.filmGauge=t.filmGauge,this.camera.filmOffset=t.filmOffset,this.camera.view=t.view===null?null:{...t.view},this.camera.coordinateSystem=t.coordinateSystem,this.camera.projectionMatrix.copy(t.projectionMatrix),this.camera.projectionMatrixInverse.copy(t.projectionMatrixInverse)}}const Fw=ee+8/9,Ow=new fe().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);class Bw{constructor(t=1,e=1,n={}){y(this,"camera",new Ke);y(this,"textureMatrix",new fe);y(this,"renderTarget");y(this,"planeY");y(this,"clipBias");y(this,"overscan");y(this,"plane",new In);y(this,"cameraPlane",new In);y(this,"planeNormal",new U(0,1,0));y(this,"sourcePosition",new U);y(this,"reflectedPosition",new U);y(this,"reflectedDirection",new U);y(this,"reflectedUp",new U);y(this,"lookTarget",new U);y(this,"sourceQuaternion",new Ni);y(this,"clipPlane",new _e);y(this,"clipCorner",new _e);y(this,"savedViewport",new _e);y(this,"savedScissor",new _e);this.planeY=n.planeY??Fw,this.clipBias=n.clipBias??.001,this.overscan=si.clamp(n.overscan??1.08,1,1.2),this.plane.set(this.planeNormal,-this.planeY),this.renderTarget=new Fn(Math.max(1,Math.round(t)),Math.max(1,Math.round(e)),{type:Ii,minFilter:Te,magFilter:Te,generateMipmaps:!1,depthBuffer:!0,stencilBuffer:!1,samples:Math.max(0,Math.round(n.samples??4))}),this.renderTarget.texture.name="mineworld-planar-reflection",this.renderTarget.texture.colorSpace=mn,this.camera.layers.set(0),this.camera.layers.enable(no)}get texture(){return this.renderTarget.texture}resize(t,e){this.renderTarget.setSize(Math.max(1,Math.round(t)),Math.max(1,Math.round(e)))}render(t,e,n,s,r){this.updateCamera(n);const o=t.getRenderTarget();t.getViewport(this.savedViewport),t.getScissor(this.savedScissor);const a=t.getScissorTest(),l=t.xr.enabled,c=t.shadowMap.autoUpdate,h=t.shadowMap.needsUpdate,u=t.getContext(),d=!!u.getParameter(u.DEPTH_WRITEMASK);try{s==null||s(this.camera,this.renderTarget),t.xr.enabled=!1,t.shadowMap.autoUpdate=!1,t.shadowMap.needsUpdate=!1,t.setRenderTarget(this.renderTarget),t.setScissorTest(!1),t.state.buffers.depth.setMask(!0),t.clear(!0,!0,!1),t.render(e,this.camera)}finally{t.xr.enabled=l,t.shadowMap.autoUpdate=c,t.shadowMap.needsUpdate=h,t.state.buffers.depth.setMask(d),t.setRenderTarget(o),t.setViewport(this.savedViewport),t.setScissor(this.savedScissor),t.setScissorTest(a),r==null||r(this.camera,this.renderTarget)}}dispose(){this.renderTarget.dispose()}updateCamera(t){t.updateWorldMatrix(!0,!1),t.getWorldPosition(this.sourcePosition),t.getWorldQuaternion(this.sourceQuaternion),this.reflectedPosition.copy(this.sourcePosition).addScaledVector(this.planeNormal,-2*this.plane.distanceToPoint(this.sourcePosition)),this.reflectedDirection.set(0,0,-1).applyQuaternion(this.sourceQuaternion).reflect(this.planeNormal),this.reflectedUp.set(0,1,0).applyQuaternion(this.sourceQuaternion).reflect(this.planeNormal),this.camera.position.copy(this.reflectedPosition),this.camera.up.copy(this.reflectedUp),this.lookTarget.copy(this.reflectedPosition).add(this.reflectedDirection),this.camera.lookAt(this.lookTarget),this.camera.updateMatrixWorld(!0),this.camera.near=t.near,this.camera.far=t.far,this.camera.fov=t.fov,this.camera.aspect=t.aspect,this.camera.zoom=t.zoom,this.camera.focus=t.focus,this.camera.filmGauge=t.filmGauge,this.camera.filmOffset=t.filmOffset,this.camera.projectionMatrix.copy(t.projectionMatrix),this.camera.projectionMatrix.elements[0]/=this.overscan,this.camera.projectionMatrix.elements[5]/=this.overscan,this.applyObliqueNearPlane(),this.camera.projectionMatrixInverse.copy(this.camera.projectionMatrix).invert(),this.textureMatrix.copy(Ow).multiply(this.camera.projectionMatrix).multiply(this.camera.matrixWorldInverse)}applyObliqueNearPlane(){this.cameraPlane.copy(this.plane).applyMatrix4(this.camera.matrixWorldInverse),this.clipPlane.set(this.cameraPlane.normal.x,this.cameraPlane.normal.y,this.cameraPlane.normal.z,this.cameraPlane.constant);const e=this.camera.projectionMatrix.elements;this.clipCorner.set((Math.sign(this.clipPlane.x)+e[8])/e[0],(Math.sign(this.clipPlane.y)+e[9])/e[5],-1,(1+e[10])/e[14]);const n=this.clipPlane.dot(this.clipCorner);Math.abs(n)<1e-7||(this.clipPlane.multiplyScalar(2/n),e[2]=this.clipPlane.x,e[6]=this.clipPlane.y,e[10]=this.clipPlane.z+1-this.clipBias,e[14]=this.clipPlane.w)}}const zw=`
varying vec3 vSkyDir;
void main() {
  vSkyDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`.trim(),Hw=`
uniform vec3 uSkyTop;
uniform vec3 uSkyHorizon;
uniform vec3 uSunDir;
uniform float uWarmth;
uniform float uSunVisible;
varying vec3 vSkyDir;
void main() {
  vec3 dir = normalize(vSkyDir);
  float up = clamp(dir.y, 0.0, 1.0);

  // Rayleigh-like vertical falloff: the pale horizon stays narrow while blue
  // continues to deepen all the way to the zenith instead of becoming a flat cap.
  float vertical = pow(smoothstep(0.0, 1.0, up), 0.42);
  vec3 col = mix(uSkyHorizon, uSkyTop, vertical);

  // A thin optical-depth haze binds terrain fog to the sky without washing the
  // whole frame white. The actual solar disc remains a separate HDR object.
  float airMass = exp(-up * 8.0);
  col = mix(col, uSkyHorizon * 1.025, airMass * 0.10);

  vec3 sunDir = normalize(uSunDir);
  float sunFacing = max(dot(dir, sunDir), 0.0);
  float sunAbove = smoothstep(-0.10, 0.24, sunDir.y);
  float forwardScatter = pow(sunFacing, 7.0) * exp(-up * 3.6);
  float aureole = pow(sunFacing, 56.0);
  vec3 scatterTint = mix(vec3(0.30, 0.43, 0.70), vec3(1.0, 0.36, 0.08), uWarmth);
  col += scatterTint * sunAbove * uSunVisible
    * (forwardScatter * mix(0.018, 0.13, uWarmth) + aureole * mix(0.012, 0.07, uWarmth));

  // Diffuse sky must remain below the selective bloom threshold. The sun sprite,
  // water highlights and emissive blocks are the only intended HDR sources.
  gl_FragColor = vec4(clamp(col, vec3(0.0), vec3(0.985)), 1.0);
  #include <colorspace_fragment>
}
`.trim();class Ww{constructor(t){y(this,"scene",new pr);y(this,"camera");y(this,"gl");y(this,"viewportW",1);y(this,"viewportH",1);y(this,"resizeQueued",!1);y(this,"onViewportChange",()=>{this.resizeQueued||(this.resizeQueued=!0,requestAnimationFrame(()=>{this.resizeQueued=!1,this.resize()}))});y(this,"skyDome");y(this,"skyUniforms",{uSkyTop:{value:new St},uSkyHorizon:{value:new St},uSunDir:{value:new U(1,0,.1).normalize()},uWarmth:{value:0},uSunVisible:{value:1}});y(this,"lastSky","");y(this,"rt",null);y(this,"planarRefraction",null);y(this,"waterRefractionSink",null);y(this,"planarReflection",null);y(this,"waterReflectionSink",null);y(this,"waterCapturesEnabled",!0);y(this,"godStd",new qd(24));y(this,"godHigh",new qd(48));y(this,"god",null);y(this,"underwaterTarget",0);y(this,"underwaterAmount",0);y(this,"waterIrradiance",new St(.04,.18,.26));y(this,"bloom",null);y(this,"ssao",null);var s,r;this.gl=new Qp({canvas:t,antialias:!0}),this.gl.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.gl.toneMapping=oi,this.gl.shadowMap.enabled=!0,this.gl.shadowMap.type=Mp,this.gl.shadowMap.autoUpdate=!1;const e=new Eh(750,32,24),n=new Ze({uniforms:this.skyUniforms,vertexShader:zw,fragmentShader:Hw,side:ze,depthWrite:!1});this.skyDome=new Jt(e,n),this.skyDome.layers.set(no),this.skyDome.frustumCulled=!1,this.skyDome.renderOrder=-1e3,this.scene.add(this.skyDome),this.setSkyColors([.3,.52,.79],[.81,.9,.97]),this.scene.fog=new fr(sm,30,110),this.camera=new Ke(70,1,.1,1e3),this.camera.layers.enable(Ch),this.camera.layers.enable($r),this.camera.layers.enable(no),this.camera.layers.enable(co),this.resize(),window.addEventListener("resize",this.onViewportChange),window.addEventListener("orientationchange",this.onViewportChange),(s=window.visualViewport)==null||s.addEventListener("resize",this.onViewportChange),(r=window.visualViewport)==null||r.addEventListener("scroll",this.onViewportChange)}setSkyColors(t,e,n=0,s=0,r=0,o=!0){const a=`${t.join()}|${e.join()}|${Math.round(n*80)}|${Math.round(s*40)}|${Math.round(r*80)}|${o?1:0}`;a!==this.lastSky&&(this.lastSky=a,this.skyUniforms.uSkyTop.value.setRGB(t[0],t[1],t[2],ae),this.skyUniforms.uSkyHorizon.value.setRGB(e[0],e[1],e[2],ae),this.skyUniforms.uSunDir.value.set(Math.cos(n),r,.1).normalize(),this.skyUniforms.uWarmth.value=si.clamp(s,0,1),this.skyUniforms.uSunVisible.value=o?1:0,this.waterIrradiance.copy(this.skyUniforms.uSkyHorizon.value).lerp(this.skyUniforms.uSkyTop.value,.2).multiply(new St(.78,1.08,1.16)))}resize(){const{width:t,height:e}=rm(window);if(this.viewportW=t,this.viewportH=e,this.gl.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.rt!==null&&(this.rt.dispose(),this.rt=this.buildRT(t,e)),this.planarRefraction!==null){const n=this.gl.getPixelRatio();this.planarRefraction.resize(Math.max(1,Math.round(t*n)),Math.max(1,Math.round(e*n))),this.publishRefractionTarget()}if(this.planarReflection!==null){const n=this.gl.getPixelRatio();this.planarReflection.resize(Math.max(1,Math.round(t*n)),Math.max(1,Math.round(e*n))),this.publishReflectionTarget()}if(this.bloom!==null){const n=this.gl.getPixelRatio();this.bloom.setSize(Math.max(1,Math.round(t*n/4)),Math.max(1,Math.round(e*n/4)))}if(this.ssao!==null){const n=this.gl.getPixelRatio();this.ssao.setSize(Math.max(1,Math.round(t*n/2)),Math.max(1,Math.round(e*n/2)))}}markShadowDirty(){this.gl.shadowMap.needsUpdate=!0}setWaterRefractionSink(t){this.waterRefractionSink=t,this.publishRefractionTarget()}setWaterReflectionSink(t){this.waterReflectionSink=t,this.publishReflectionTarget()}setWaterCapturesEnabled(t){var e,n,s,r;t!==this.waterCapturesEnabled&&(this.waterCapturesEnabled=t,t?((s=this.waterRefractionSink)==null||s.call(this,null,null,1,1,this.underwaterAmount),(r=this.waterReflectionSink)==null||r.call(this,null,null,1,1),this.god!==null&&this.ensureWaterCaptureTargets()):((e=this.planarRefraction)==null||e.dispose(),this.planarRefraction=null,(n=this.planarReflection)==null||n.dispose(),this.planarReflection=null,this.publishRefractionTarget(),this.publishReflectionTarget()))}setGodRays(t){if(t===null||t.quality==="off"){this.rt!==null&&(this.rt.dispose(),this.rt=null),this.planarRefraction!==null&&(this.planarRefraction.dispose(),this.planarRefraction=null),this.publishRefractionTarget(),this.planarReflection!==null&&(this.planarReflection.dispose(),this.planarReflection=null),this.publishReflectionTarget(),this.bloom!==null&&(this.bloom.dispose(),this.bloom=null),this.ssao!==null&&(this.ssao.dispose(),this.ssao=null),this.god=null;return}if(this.rt===null&&(this.rt=this.buildRT(this.viewportW,this.viewportH)),this.ensureWaterCaptureTargets(),this.bloom===null){const e=this.gl.getPixelRatio(),n=this.viewportW,s=this.viewportH;this.bloom=new X1(Math.max(1,Math.round(n*e/4)),Math.max(1,Math.round(s*e/4)))}this.god=t}setUnderwater(t){this.underwaterTarget=t?1:0}render(){if(this.skyDome.position.copy(this.camera.position),this.underwaterAmount+=(this.underwaterTarget-this.underwaterAmount)*.16,this.god===null||this.rt===null||this.bloom===null){this.gl.render(this.scene,this.camera);return}if(this.waterCapturesEnabled&&this.planarReflection!==null&&this.camera.position.y>this.planarReflection.planeY+.05?(this.planarReflection.render(this.gl,this.scene,this.camera,n=>this.skyDome.position.copy(n.position),()=>this.skyDome.position.copy(this.camera.position)),this.publishReflectionTarget(!0)):this.publishReflectionTarget(!1),this.waterCapturesEnabled&&this.planarRefraction!==null){const n=this.scene.fog;this.scene.fog=null;try{this.planarRefraction.render(this.gl,this.scene,this.camera,void 0,void 0,this.underwaterTarget>.5?"above":"below")}finally{this.scene.fog=n}this.publishRefractionTarget()}this.gl.setRenderTarget(this.rt),this.gl.clear(),this.gl.render(this.scene,this.camera),this.bloom.render(this.gl,this.rt.texture),this.ssao!==null&&this.ssao.render(this.gl,this.rt.depthTexture,this.camera);const t=this.god.quality==="high"?this.godHigh:this.godStd,e=t.material.uniforms;e.tColor.value=this.rt.texture,e.tDepth.value=this.rt.depthTexture,e.tBloom.value=this.bloom.texture,e.uSunUV.value.copy(this.god.sunUV),e.uIntensity.value=this.god.intensity,e.uSunColor.value.copy(this.god.sunColor),e.uBloom.value=this.god.quality==="high"?.68:.5,e.uUnderwater.value=this.underwaterAmount,e.uWaterIrradiance.value.copy(this.waterIrradiance),this.ssao!==null?(e.tAO.value=this.ssao.texture,e.uAO.value=this.god.quality==="high"?.55:.4):(e.tAO.value=null,e.uAO.value=0),t.render(this.gl)}renderOverlay(t,e){this.gl.autoClear=!1,this.gl.clearDepth(),this.gl.render(t,e),this.gl.autoClear=!0}buildRT(t,e){const n=this.gl.getPixelRatio(),s=Math.max(1,Math.round(t*n)),r=Math.max(1,Math.round(e*n)),o=new rl(s,r);return o.type=Li,new Fn(s,r,{type:Ii,depthTexture:o,depthBuffer:!0,samples:4})}publishRefractionTarget(){if(this.waterRefractionSink){if(!this.waterCapturesEnabled||!this.planarRefraction){this.waterRefractionSink(null,null,1,1,this.underwaterAmount);return}this.waterRefractionSink(this.planarRefraction.texture,this.planarRefraction.depthTexture,this.planarRefraction.renderTarget.width,this.planarRefraction.renderTarget.height,this.underwaterAmount)}}ensureWaterCaptureTargets(){if(!this.waterCapturesEnabled)return;const t=this.gl.getPixelRatio(),e=Math.max(1,Math.round(this.viewportW*t)),n=Math.max(1,Math.round(this.viewportH*t));this.planarRefraction===null&&(this.planarRefraction=new Nw(e,n)),this.planarReflection===null&&(this.planarReflection=new Bw(e,n))}publishReflectionTarget(t=!0){if(this.waterReflectionSink){if(!t||!this.waterCapturesEnabled||!this.planarReflection){this.waterReflectionSink(null,null,1,1);return}this.waterReflectionSink(this.planarReflection.texture,this.planarReflection.textureMatrix,this.planarReflection.renderTarget.width,this.planarReflection.renderTarget.height)}}}function Gw(i){return new Worker("/mineworld/assets/chunkGen.worker-CSpXbyWk.js",{name:i==null?void 0:i.name})}const Jd=()=>typeof performance<"u"?performance.now():Date.now(),Vw=4;class xm{constructor(t,e="overworld"){y(this,"chunks",new Map);y(this,"pending",new Set);y(this,"pendingSince",new Map);y(this,"genFails",new Map);y(this,"workers",[]);y(this,"rr",0);y(this,"editHook",null);if(this.seed=t,this.dimension=e,typeof Worker<"u"){const n=typeof navigator<"u"&&navigator.hardwareConcurrency||4,s=Math.max(1,Math.min(4,n));for(let r=0;r<s;r++){const o=new Gw;o.onmessage=a=>{var v;const{cx:l,cz:c,blocks:h,fluid:u,error:d}=a.data,p=this.key(l,c);if(this.pending.delete(p),this.pendingSince.delete(p),d){const m=(this.genFails.get(p)??0)+1;this.genFails.set(p,m),console.warn(`[chunkgen] 区块(${l},${c}) 生成失败 #${m}: ${d.split(`
`)[0]}`);return}if(this.genFails.delete(p),this.chunks.has(p)||!h||!u)return;const g=ho.fromBuffers(h,u);(v=this.editHook)==null||v.call(this,l,c,g),g.dirty=!0,this.chunks.set(p,g)},o.onerror=a=>{console.error("[chunkgen worker] 致命错误(整个 worker 挂了，会拖慢加载):",a.message)},this.workers.push(o)}}}key(t,e){return`${t},${e}`}dispose(){for(const t of this.workers)t.terminate();this.workers.length=0,this.chunks.clear(),this.pending.clear(),this.pendingSince.clear(),this.genFails.clear(),this.editHook=null}hasChunk(t,e){return this.chunks.has(this.key(t,e))}request(t,e){const n=this.key(t,e);if(!(this.chunks.has(n)||this.pending.has(n))&&!((this.genFails.get(n)??0)>=3)){if(this.workers.length===0){this.getChunk(t,e);return}this.pending.add(n),this.pendingSince.set(n,Jd()),this.workers[this.rr].postMessage({cx:t,cz:e,seed:this.seed,dimension:this.dimension}),this.rr=(this.rr+1)%this.workers.length}}retryStuckGen(t=8e3){const e=Jd();for(const[n,s]of this.pendingSince)e-s>t&&(this.pending.delete(n),this.pendingSince.delete(n),console.warn(`[chunkgen] 区块 ${n} 生成 ${Math.round((e-s)/1e3)}s 未回(worker 丢消息?) → 重试`))}peek(t,e){return this.chunks.get(this.key(t,e))}evictBeyond(t,e,n){const s=[];for(const r of[...this.chunks.keys()]){const o=r.indexOf(","),a=+r.slice(0,o),l=+r.slice(o+1);(Math.abs(a-t)>n||Math.abs(l-e)>n)&&this.chunks.delete(r)&&s.push(r)}return s}getChunk(t,e){var r;const n=this.key(t,e);let s=this.chunks.get(n);return s||(s=_m(t,e,this.seed,this.dimension),(r=this.editHook)==null||r.call(this,t,e,s),this.chunks.set(n,s),this.pending.delete(n)),s}getBlock(t,e,n){return e<0||e>=pe?0:this.getChunk(Vt(t),Vt(n)).get(Pe(t),e,Pe(n))}setBlock(t,e,n,s){if(e<0||e>=pe)return;const r=Vt(t),o=Vt(n),a=Pe(t),l=Pe(n),c=this.getChunk(r,o);c.set(a,e,l,s),s!==sn&&c.setFluid(a,e,l,0),c.dirty=!0,this.markNeighborsDirty(r,o,a,l,8)}fluidByte(t,e,n){return e<0||e>=pe?0:this.getChunk(Vt(t),Vt(n)).getFluid(Pe(t),e,Pe(n))}waterAmount(t,e,n){return this.getBlock(t,e,n)!==sn?0:$d(this.fluidByte(t,e,n))}isWaterSource(t,e,n){return this.getBlock(t,e,n)===sn&&q1(this.fluidByte(t,e,n))}isWaterFalling(t,e,n){return this.getBlock(t,e,n)===sn&&$1(this.fluidByte(t,e,n))}setWater(t,e,n,s,r,o){if(e<0||e>=pe)return;const a=Vt(t),l=Vt(n),c=Pe(t),h=Pe(n),u=this.getChunk(a,l),d=u.get(c,e,h)===sn&&$d(u.getFluid(c,e,h))>0;s<=0?(u.get(c,e,h)===sn&&u.set(c,e,h,0),u.setFluid(c,e,h,0)):(u.set(c,e,h,sn),u.setFluid(c,e,h,Ph(s,r,o))),u.dirty=!0;const p=s>0;this.markNeighborsDirty(a,l,c,h,d!==p?Vw:1)}markNeighborsDirty(t,e,n,s,r=1){const o=n<r,a=n>15-r,l=s<r,c=s>15-r;o&&this.markDirty(t-1,e),a&&this.markDirty(t+1,e),l&&this.markDirty(t,e-1),c&&this.markDirty(t,e+1),o&&l&&this.markDirty(t-1,e-1),o&&c&&this.markDirty(t-1,e+1),a&&l&&this.markDirty(t+1,e-1),a&&c&&this.markDirty(t+1,e+1)}markDirty(t,e){const n=this.chunks.get(this.key(t,e));n&&(n.dirty=!0)}}function tf(i,t,e,n){let s=Math.floor(i.x),r=Math.floor(i.y),o=Math.floor(i.z);const a=Math.sign(t.x),l=Math.sign(t.y),c=Math.sign(t.z),h=t.x!==0?Math.abs(1/t.x):1/0,u=t.y!==0?Math.abs(1/t.y):1/0,d=t.z!==0?Math.abs(1/t.z):1/0,p=(x,_)=>_>0?Math.floor(x)+1-x:_<0?x-Math.floor(x):1/0;let g=t.x!==0?p(i.x,a)*h:1/0,v=t.y!==0?p(i.y,l)*u:1/0,m=t.z!==0?p(i.z,c)*d:1/0;if(n(s,r,o))return{x:s,y:r,z:o,nx:0,ny:0,nz:0};let f=0;for(let x=0;x<256;x++){let _=0,M=0,R=0;if(g<v&&g<m?(s+=a,f=g,g+=h,_=-a):v<m?(r+=l,f=v,v+=u,M=-l):(o+=c,f=m,m+=d,R=-c),f>e)break;if(n(s,r,o))return{x:s,y:r,z:o,nx:_,ny:M,nz:R}}return null}const Xw=new Set([ll,cl]),ef=new Set([nr,hl]),ac=4,qw=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Jo=(i,t,e)=>`${i},${t},${e}`;function $w(i,t,e,n,s=ac){const r=s+ac,o=new Map,a=[];for(let c=t-r;c<=t+r;c++)for(let h=e-r;h<=e+r;h++)for(let u=n-r;u<=n+r;u++)Xw.has(i(c,h,u))&&(o.set(Jo(c,h,u),0),a.push({x:c,y:h,z:u}));for(let c=0;c<a.length;c++){const h=a[c],u=o.get(Jo(h.x,h.y,h.z))??0;if(!(u>=ac))for(const[d,p,g]of qw){const v=h.x+d,m=h.y+p,f=h.z+g;if(!ef.has(i(v,m,f)))continue;const x=Jo(v,m,f);o.has(x)||(o.set(x,u+1),a.push({x:v,y:m,z:f}))}}const l=[];for(let c=t-s;c<=t+s;c++)for(let h=e-s;h<=e+s;h++)for(let u=n-s;u<=n+s;u++)ef.has(i(c,h,u))&&!o.has(Jo(c,h,u))&&l.push({x:c,y:h,z:u});return l}const Yw="mtr6hm0n";function Sr(i){return`/mineworld/${i}?v=${Yw}`}const nf=new Map;function Zc(i="classic"){const t=nf.get(i);if(t)return t;const e=i==="classic"?"textures/atlas_classic.png":"textures/atlas.png",n=new wr().load(Sr(e));return n.magFilter=de,n.minFilter=vh,n.generateMipmaps=!0,n.colorSpace=ae,nf.set(i,n),n}function Kw(){const i=new wr().load(Sr("textures/torch_block.png"));return i.magFilter=de,i.minFilter=de,i.generateMipmaps=!1,i.colorSpace=ae,i}function jw(i){const t=new wr,e=[];for(let n=0;n<i;n++){const s=t.load(Sr(`textures/blocks/water_${n}.png`));s.magFilter=de,s.minFilter=vh,s.generateMipmaps=!0,s.colorSpace=ae,s.wrapS=xn,s.wrapT=xn,e.push(s)}return e}const Kr={volume:70,lightingQuality:"standard",texturePack:"classic",renderDistance:6},Qc="mineworld.settings",Ih=3,Zw=["off","standard","high"];function ym(i){const t=i??{},e=typeof t.volume=="number"&&isFinite(t.volume)?Math.max(0,Math.min(100,Math.round(t.volume))):Kr.volume;let n;typeof t.lightingQuality=="string"&&Zw.includes(t.lightingQuality)?n=t.lightingQuality:typeof t.shaders=="boolean"?n=t.shaders?"high":"standard":n=Kr.lightingQuality;const s=t.texturePack==="cartoon"?"cartoon":"classic",r=typeof t.renderDistance=="number"&&isFinite(t.renderDistance)?Math.max(3,Math.min(12,Math.round(t.renderDistance))):Kr.renderDistance;return{volume:e,lightingQuality:n,texturePack:s,renderDistance:r}}function Qw(i){const t=ym(i);return(i??{}).textureStyleVersion===Ih?t:{...t,texturePack:"classic"}}function Mm(){try{const i=localStorage.getItem(Qc);if(!i)return{...Kr};const t=JSON.parse(i),e=Qw(t);return localStorage.setItem(Qc,JSON.stringify({...e,textureStyleVersion:Ih})),e}catch{return{...Kr}}}function Jw(i){try{localStorage.setItem(Qc,JSON.stringify({...ym(i),textureStyleVersion:Ih}))}catch{}}const wm=15,Sm=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function tS(i,t,e,n){const s=n??(()=>0),r=new Uint8Array(i*t*i),o=(l,c,h)=>l+h*i+c*i*i,a=[];for(let l=0;l<i;l++)for(let c=0;c<i;c++){let h=wm;for(let u=t-1;u>=0&&!e(c,u,l);u--){h=Math.max(0,h-s(c,u,l));const d=o(c,u,l);r[d]=h,h>0&&a.push(d)}}for(let l=0;l<a.length;l++){const c=a[l],h=r[c];if(h<=1)continue;const u=c/(i*i)|0,d=c-u*i*i,p=d/i|0,g=d-p*i;for(const[v,m,f]of Sm){const x=g+v,_=u+m,M=p+f;if(x<0||x>=i||_<0||_>=t||M<0||M>=i||e(x,_,M))continue;const R=h-1-s(x,_,M);if(R<=0)continue;const A=o(x,_,M);r[A]>=R||(r[A]=R,a.push(A))}}return r}function eS(i,t,e,n,s){const r=s??(()=>0),o=new Uint8Array(i*t*i),a=(c,h,u)=>c+u*i+h*i*i,l=[];for(let c=0;c<t;c++)for(let h=0;h<i;h++)for(let u=0;u<i;u++){const d=e(u,c,h);if(d>0){const p=a(u,c,h);d>o[p]&&(o[p]=Math.min(wm,d),l.push(p))}}for(let c=0;c<l.length;c++){const h=l[c],u=o[h];if(u<=1)continue;const d=h/(i*i)|0,p=h-d*i*i,g=p/i|0,v=p-g*i;for(const[m,f,x]of Sm){const _=v+m,M=d+f,R=g+x;if(_<0||_>=i||M<0||M>=t||R<0||R>=i||n(_,M,R))continue;const A=u-1-r(_,M,R);if(A<=0)continue;const P=a(_,M,R);o[P]>=A||(o[P]=A,l.push(P))}}return o}const an=4,Ur=10,nS=16,ta=2,iS=4,sf=[.6,.6,1,.5,.8,.8],wi=[{n:[1,0,0],o:[1,0,0],c:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],uv:[[0,0],[0,1],[1,1],[1,0]]},{n:[-1,0,0],o:[-1,0,0],c:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,1,0],o:[0,1,0],c:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],uv:[[0,0],[0,1],[1,1],[1,0]]},{n:[0,-1,0],o:[0,-1,0],c:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,1],o:[0,0,1],c:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,-1],o:[0,0,-1],c:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],uv:[[0,0],[0,1],[1,1],[1,0]]}],sS=[.5,.7,.86,1];function rS(i,t,e){return i&&t?0:3-(Number(i)+Number(t)+Number(e))}const bm=[{u:[0,1,0],v:[0,0,1],ui:1,vi:2},{u:[0,1,0],v:[0,0,1],ui:1,vi:2},{u:[1,0,0],v:[0,0,1],ui:0,vi:2},{u:[1,0,0],v:[0,0,1],ui:0,vi:2},{u:[1,0,0],v:[0,1,0],ui:0,vi:1},{u:[1,0,0],v:[0,1,0],ui:0,vi:1}];function oS(i,t,e,n,s,r){const o=wi[s],a=bm[s],l=o.c[r],c=l[a.ui]===1?1:-1,h=l[a.vi]===1?1:-1,u=t+o.n[0],d=e+o.n[1],p=n+o.n[2],g=i(u+c*a.u[0],d+c*a.u[1],p+c*a.u[2]),v=i(u+h*a.v[0],d+h*a.v[1],p+h*a.v[2]),m=i(u+c*a.u[0]+h*a.v[0],d+c*a.u[1]+h*a.v[1],p+c*a.u[2]+h*a.v[2]);return sS[rS(g,v,m)]}const Ns=()=>({P:[],U:[],C:[],I:[],L:[],UW:[],WT:[],T:[],TF:[],SH:[],WO:[],SW:[]}),Fs=i=>{const t=i.P.length/3;return{positions:new Float32Array(i.P),uvs:new Float32Array(i.U),colors:new Float32Array(i.C),indices:t<=65535?new Uint16Array(i.I):new Uint32Array(i.I),light:new Float32Array(i.L),underwater:i.UW.length?new Float32Array(i.UW):void 0,wetness:i.WT.length?new Float32Array(i.WT):void 0,top:i.T.length?new Float32Array(i.T):void 0,topFace:i.TF.length?new Float32Array(i.TF):void 0,shore:i.SH.length?new Float32Array(i.SH):void 0,waveOpen:i.WO.length?new Float32Array(i.WO):void 0,sway:i.SW.length?new Float32Array(i.SW):void 0}};function aS(i,t,e,n){const s=i*Dt,r=t*Dt,o=Ns(),a=Ns(),l=Ns(),c=Ns(),h=Ns(),u=Ns(),d=.01/(nS*an),p=1/an-2*d,g=1/Ur-2*d,v=(L,H,z)=>Us(e(L,H,z)),m=8,f=Dt+2*m,x=(L,H,z)=>{const j=e(s+L-m,H,r+z-m);return li(j)||Yd(j)?1:0},_=tS(f,pe,(L,H,z)=>v(s+L-m,H,r+z-m),x),M=eS(f,pe,(L,H,z)=>lw(e(s+L-m,H,r+z-m)),(L,H,z)=>v(s+L-m,H,r+z-m),x),R=(L,H,z)=>H>=pe?15:H<0?0:_[L+m+(z+m)*f+H*f*f],A=(L,H,z)=>H>=pe||H<0?0:M[L+m+(z+m)*f+H*f*f],P=(L,H,z)=>{let j=0;for(let E=H;E<pe&&j<8&&n(L,E,z)>0;E++)j++;return j},I=new Map,b=(L,H,z)=>{const j=Math.round(L-s),E=Math.round(z-r),B=j+E*17+Math.round(H)*17*17,ut=I.get(B);if(ut!==void 0)return ut;const At=Math.floor(L),ht=Math.floor(H-.001),mt=Math.floor(z);let lt=99;for(let C=ht-1;C<=ht;C++)for(let w=-2;w<=2;w++)for(let F=-2;F<=2;F++){const K=n(At+F,C,mt+w);if(K<=0)continue;const Z=C+Math.min(1,K/9),$=Math.abs(Z-H);if($>1.05)continue;const gt=Math.hypot(At+F+.5-L,mt+w+.5-z);lt=Math.min(lt,gt+$*.35)}const st=Math.max(0,Math.min(1,(lt-.35)/2)),Tt=1-st*st*(3-2*st);return I.set(B,Tt),Tt},S=(L,H,z,j,E)=>{const B=bm[j],ut=wi[j].c[E],At=ut[B.ui]===1?1:-1,ht=ut[B.vi]===1?1:-1,mt=L+At*B.u[0],lt=H+At*B.u[1],st=z+At*B.u[2],Tt=L+ht*B.v[0],C=H+ht*B.v[1],w=z+ht*B.v[2],F=mt+ht*B.v[0],K=lt+ht*B.v[1],Z=st+ht*B.v[2],$=v(s+mt,lt,r+st),gt=v(s+Tt,C,r+w),at=v(s+F,K,r+Z);let ct=R(L,H,z),Nt=A(L,H,z),rt=1;return $||(ct+=R(mt,lt,st),Nt+=A(mt,lt,st),rt++),gt||(ct+=R(Tt,C,w),Nt+=A(Tt,C,w),rt++),!($&&gt)&&!at&&(ct+=R(F,K,Z),Nt+=A(F,K,Z),rt++),[ct/rt/15,Nt/rt/15]},D=(L,H,z,j,E,B)=>{const ut=wi[B],At=jo(E,B),ht=At%an/an+d,mt=1-(Math.floor(At/an)+1)/Ur+d,lt=sf[B],st=H+ut.o[0],Tt=z+ut.o[1],C=j+ut.o[2],w=L===o?P(s+st,Tt,r+C):0,F=L.P.length/3,K=[0,0,0,0];for(let Z=0;Z<4;Z++){const $=ut.c[Z];K[Z]=oS(v,s+H,z,r+j,B,Z);const gt=lt*K[Z],[at,ct]=S(st,Tt,C,B,Z);if(L.P.push(H+$[0],z+$[1],j+$[2]),L.U.push(ht+ut.uv[Z][0]*p,mt+ut.uv[Z][1]*g),L.C.push(gt,gt,gt),L.L.push(at,ct),L===o){L.UW.push(w);const Nt=s+H+$[0],rt=z+$[1],Pt=r+j+$[2];L.WT.push(w>0?1:b(Nt,rt,Pt))}}K[0]+K[2]>K[1]+K[3]?L.I.push(F,F+1,F+2,F,F+2,F+3):L.I.push(F+1,F+2,F+3,F+1,F+3,F),L===l&&L.SW.push(1,1,1,1)},X=(L,H,z)=>{const j=L+.5,E=H+.5,B=.28,ut=.92,At=[[[j-B,z,E],[j+B,z,E],[j+B,z+ut,E],[j-B,z+ut,E]],[[j,z,E-B],[j,z,E+B],[j,z+ut,E+B],[j,z+ut,E-B]]],ht=[[0,0],[1,0],[1,1],[0,1]];for(const mt of At){const lt=u.P.length/3;for(let st=0;st<4;st++)u.P.push(mt[st][0],mt[st][1],mt[st][2]),u.U.push(ht[st][0],ht[st][1]),u.C.push(1,1,1);u.I.push(lt,lt+1,lt+2,lt,lt+2,lt+3)}},V=(L,H,z)=>{const j=jo(bi,Wn.PosX),E=j%an/an+d,B=E+p,ut=1-(Math.floor(j/an)+1)/Ur+d,At=ut+g,ht=s+L,mt=r+z,lt=e(ht-1,H,mt)===bi||e(ht+1,H,mt)===bi,st=h.P.length/3;if(lt){const Tt=z+.5;h.P.push(L,H,Tt,L+1,H,Tt,L+1,H+1,Tt,L,H+1,Tt)}else{const Tt=L+.5;h.P.push(Tt,H,z+1,Tt,H,z,Tt,H+1,z,Tt,H+1,z+1)}h.U.push(E,ut,B,ut,B,At,E,At),h.C.push(1,1,1,1,1,1,1,1,1,1,1,1),h.I.push(st,st+1,st+2,st,st+2,st+3)},tt=(L,H,z,j,E)=>{const B=j%an/an+d,ut=B+p,At=1-(Math.floor(j/an)+1)/Ur+d,ht=At+g,mt=R(L,H,z)/15,lt=A(L,H,z)/15,st=.9,Tt=L+.5,C=z+.5,w=.5,F=[[Tt-w,C-w,Tt+w,C+w],[Tt-w,C+w,Tt+w,C-w]];for(const[K,Z,$,gt]of F){const at=l.P.length/3;l.P.push(K,H,Z,$,H,gt,$,H+E,gt,K,H+E,Z),l.U.push(B,At,ut,At,ut,ht,B,ht),l.C.push(st,st,st,st,st,st,st,st,st,st,st,st),l.L.push(mt,lt,mt,lt,mt,lt,mt,lt),l.SW.push(0,0,1,1),l.I.push(at,at+1,at+2,at,at+2,at+3)}},et=(L,H,z,j)=>{const E=j%an/an+d,B=E+p,ut=1-(Math.floor(j/an)+1)/Ur+d,At=ut+g,ht=R(L,H,z)/15,mt=A(L,H,z)/15,lt=1,st=H+.06,Tt=l.P.length/3;l.P.push(L,st,z,L,st,z+1,L+1,st,z+1,L+1,st,z),l.U.push(E,ut,E,At,B,At,B,ut),l.C.push(lt,lt,lt,lt,lt,lt,lt,lt,lt,lt,lt,lt),l.L.push(ht,mt,ht,mt,ht,mt,ht,mt),l.SW.push(0,0,0,0),l.I.push(Tt,Tt+1,Tt+2,Tt,Tt+2,Tt+3)};let Q=1;const it=(L,H,z)=>e(L,H,z)===ir,q=(L,H,z)=>{if(n(L,H,z)===0&&!it(L,H,z))return 0;let j=1;for(let E=H+1;j<7&&E<pe&&n(L,E,z)>0;E++)j++;for(let E=H-1;j<7&&E>=0&&n(L,E,z)>0;E--)j++;return j},xt=(L,H,z)=>(q(L-1,H,z-1)+q(L,H,z-1)+q(L-1,H,z)+q(L,H,z))/4,Et=(L,H,z)=>{const j=(B,ut)=>n(B,H,ut)>0||it(B,H,ut);return 1-(Number(j(L-1,z-1))+Number(j(L,z-1))+Number(j(L-1,z))+Number(j(L,z)))/4},bt=new Map,Kt=(L,H,z)=>{const j=`${L},${H},${z}`,E=bt.get(j);if(E!==void 0)return E;const B=iS,ut=B*B;let At=B;for(let st=-B;st<B;st++)for(let Tt=-B;Tt<B;Tt++){const C=Tt+.5,w=st+.5,F=C*C+w*w;if(F>ut)continue;const K=L+Tt,Z=z+st;n(K,H,Z)>0&&e(K,H+1,Z)===0||(At=Math.min(At,Math.sqrt(F)))}const ht=Math.SQRT1_2,mt=Math.max(0,Math.min(1,(At-ht)/(B-ht))),lt=mt*mt*(3-2*mt);return bt.set(j,lt),lt},jt=(L,H,z,j,E,B)=>(L*(1-B)+H*B)*(1-E)+(j*(1-B)+z*B)*E,Y=(L,H,z,j,E)=>{const B=wi[j],ut=sf[j],At=R(L+B.o[0],H+B.o[1],z+B.o[2])/15,ht=A(L+B.o[0],H+B.o[1],z+B.o[2])/15,mt=c.P.length/3,lt=j===2,st=j===3;let Tt=1,C=1;lt?(Tt=ta,C=ta):st||(B.c[0][1]===B.c[3][1]?Tt=ta:C=ta);const w=B.c.map($=>xt(s+L+$[0],H,r+z+$[2])),F=B.c.map($=>Et(s+L+$[0],H,r+z+$[2])),K=B.c.map($=>Kt(s+L+$[0],H,r+z+$[2]));for(let $=0;$<=C;$++){const gt=$/C;for(let at=0;at<=Tt;at++){const ct=at/Tt,Nt=jt(B.c[0][0],B.c[1][0],B.c[2][0],B.c[3][0],ct,gt),rt=jt(B.c[0][2],B.c[1][2],B.c[2][2],B.c[3][2],ct,gt),Pt=jt(E[0],E[1],E[2],E[3],ct,gt),qt=H+Pt,Ot=s+L+Nt,vt=r+z+rt;c.P.push(L+Nt,qt,z+rt),lt||st?c.U.push(Ot,vt):j===0||j===1?c.U.push(vt,qt):c.U.push(Ot,qt),c.C.push(ut,ut,ut),c.L.push(At,ht);const Xt=jt(w[0],w[1],w[2],w[3],ct,gt),Zt=jt(F[0],F[1],F[2],F[3],ct,gt),ve=Q>0&&(lt||Pt>.01);c.T.push((ve?1:-1)*Xt),c.TF.push(lt?1:0),c.SH.push(Zt),c.WO.push(ve?jt(K[0],K[1],K[2],K[3],ct,gt):0)}}const Z=Tt+1;for(let $=0;$<C;$++)for(let gt=0;gt<Tt;gt++){const at=mt+$*Z+gt,ct=at+Z,Nt=ct+1,rt=at+1;c.I.push(at,ct,Nt,at,Nt,rt)}},ot=(L,H)=>{let z=0,j=0;for(const[E,B]of H){const ut=n(E,L,B);if(n(E,L+1,B)>0)return 1;if(ut>0){const At=ut/9;At>=.8?(z+=At*10,j+=10):(z+=At,j+=1)}else xe(e(E,L,B))||(j+=1)}return j>0?z/j:.5};for(let L=0;L<pe;L++)for(let H=0;H<Dt;H++)for(let z=0;z<Dt;z++){const j=e(s+z,L,r+H);if(Us(j)&&j!==ir)for(let E=0;E<6;E++){const B=wi[E];Us(e(s+z+B.o[0],L+B.o[1],r+H+B.o[2]))||D(o,z,L,H,j,E)}else if(Yd(j))for(let E=0;E<6;E++){const B=wi[E];Us(e(s+z+B.o[0],L+B.o[1],r+H+B.o[2]))||D(l,z,L,H,j,E)}else if(li(j)){const E=s+z,B=r+H;Q=n(E,L+1,B)>0?0:1;const ut=ot(L,[[E,B],[E-1,B],[E,B-1],[E-1,B-1]]),At=ot(L,[[E,B],[E-1,B],[E,B+1],[E-1,B+1]]),ht=ot(L,[[E,B],[E+1,B],[E,B+1],[E+1,B+1]]),mt=ot(L,[[E,B],[E+1,B],[E,B-1],[E+1,B-1]]);n(E,L+1,B)===0&&Y(z,L,H,Wn.PosY,[ut,At,ht,mt]),e(E,L-1,B)===0&&Y(z,L,H,Wn.NegY,[0,0,0,0]);const lt=(st,Tt,C,w)=>{e(E+Tt,L,B+C)===0&&Y(z,L,H,st,w)};lt(Wn.PosX,1,0,[0,mt,ht,0]),lt(Wn.NegX,-1,0,[0,0,At,ut]),lt(Wn.PosZ,0,1,[0,0,ht,At]),lt(Wn.NegZ,0,-1,[0,ut,mt,0])}else if(j===ns)X(z,H,L);else if(Ti(j))j===Lh?et(z,L,H,jo(j,Wn.PosY)):tt(z,L,H,jo(j,Wn.PosY),j===dm?1.45:.82);else if(j===ir)for(let E=0;E<6;E++){const B=wi[E];Us(e(s+z+B.o[0],L+B.o[1],r+H+B.o[2]))||D(a,z,L,H,j,E)}else if(j===io)for(let E=0;E<6;E++){const B=wi[E],ut=e(s+z+B.o[0],L+B.o[1],r+H+B.o[2]);Us(ut)||ut===io||D(o,z,L,H,j,E)}else j===bi&&V(z,L,H)}const wt=new Uint8Array(4*48*4);for(let L=0;L<48;L++)for(let H=0;H<4;H++)for(let z=0;z<4;z++){let j=0,E=0;for(let B=0;B<4;B++){const ut=(L*4+B)*f*f;for(let At=0;At<4;At++){const ht=ut+(H*4+At+m)*f+m+z*4;for(let mt=0;mt<4;mt++){const lt=_[ht+mt];lt>j&&(j=lt);const st=M[ht+mt];st>E&&(E=st)}}}wt[z+H*4+L*16]=j<<4|E}return{opaque:Fs(o),ice:Fs(a),cutout:Fs(l),water:Fs(c),portal:Fs(h),torch:Fs(u),light3d:wt}}function lS(i,t,e){return aS(t,e,(n,s,r)=>i.getBlock(n,s,r),(n,s,r)=>i.waterAmount(n,s,r))}function cS(i){return new Worker("/mineworld/assets/meshGen.worker-BggU10BT.js",{name:i==null?void 0:i.name})}const hS=.15,uS=24*24;function dS(i,t,e,n,s,r,o=hS,a=uS){const l=i-e,c=t-n,h=l*l+c*c;return h<=a?!0:(l*s+c*r)/Math.sqrt(h)>=o}const fS=-.2,pS=2.25;function mS(i,t,e,n,s=fS,r=pS){const o=i*i+t*t;return o<=r?!0:(i*e+t*n)/Math.sqrt(o)>=s}const rn=24e3,gS=1e3,Os=[{t:0,top:[.14,.27,.5],hor:[1,.48,.18],tint:[.72,.64,.62]},{t:1800,top:[.2,.44,.76],hor:[.7,.83,.94],tint:[1,1,1]},{t:6e3,top:[.12,.36,.72],hor:[.58,.75,.91],tint:[1,1,1]},{t:11e3,top:[.18,.4,.72],hor:[.66,.8,.92],tint:[1,1,1]},{t:12200,top:[.12,.21,.44],hor:[1,.36,.1],tint:[.86,.62,.5]},{t:13600,top:[.015,.025,.075],hor:[.035,.06,.14],tint:[.3,.34,.5]},{t:22e3,top:[.015,.025,.075],hor:[.035,.06,.14],tint:[.3,.34,.5]},{t:23200,top:[.14,.27,.5],hor:[1,.48,.18],tint:[.72,.64,.62]}],lc=(i,t,e)=>i+(t-i)*e,cc=(i,t,e)=>[lc(i[0],t[0],e),lc(i[1],t[1],e),lc(i[2],t[2],e)];function Tm(i){return(i%rn+rn)%rn}function Em(i){const e=(Tm(i)-6e3)/rn*Math.PI*2;return Math.max(0,Math.min(1,.5-2*Math.cos(e)))*11}const vS={skyTop:[.18,.05,.05],skyHorizon:[.34,.09,.07],worldTint:[.62,.32,.28],light:.3,isNight:!0};function Aa(i,t="overworld"){if(t==="nether")return vS;const e=Tm(i);let n=Os[0],s={...Os[0],t:rn};for(let a=0;a<Os.length;a++){const l=Os[a],c=Os[a+1]??{...Os[0],t:rn};if(e>=l.t&&e<c.t){n=l,s=c;break}}const r=s.t===n.t?0:(e-n.t)/(s.t-n.t),o=cc(n.tint,s.tint,r);return{skyTop:cc(n.top,s.top,r),skyHorizon:cc(n.hor,s.hor,r),worldTint:o,light:(o[0]+o[1]+o[2])/3,isNight:e>=13e3&&e<23e3}}const Am=64,Ra=256,Ys=i=>i*i*(3-2*i),ea=i=>Math.max(0,Math.min(1,i)),Gn=Math.PI*2,Ks=(i,t)=>{let e=Math.imul(i^2654435769,2246822507)^Math.imul(t^3266489909,668265261);return e^=e>>>15,e=Math.imul(e,2246822507),e^=e>>>13,(e>>>0)/4294967295},Ei=(i,t)=>(i%t+t)%t,Rm=(i,t,e)=>{if(!Number.isInteger(i)||i<t||i&i-1)throw new Error(`${e} size must be a power of two >= ${t}`)},Hr=(i,t,e,n)=>{const s=i/e*n,r=t/e*n,o=Math.floor(s),a=Math.floor(r),l=Ys(s-o),c=Ys(r-a),h=Ei(o,n),u=Ei(o+1,n),d=Ei(a,n),p=Ei(a+1,n),g=Ks(h,d),v=Ks(u,d),m=Ks(h,p),f=Ks(u,p);return(g+(v-g)*l)*(1-c)+(m+(f-m)*l)*c};function Cm(i=Am){Rm(i,16,"cloud-shadow");const t=new Float32Array(i*i);let e=1/0,n=-1/0;for(let a=0;a<i;a++)for(let l=0;l<i;l++){let c=0,h=0,u=1;for(const d of[2,4,8,16])c+=Hr(l,a,i,d)*u,h+=u,u*=.52;c/=h,t[l+a*i]=c,e=Math.min(e,c),n=Math.max(n,c)}const s=Math.max(1e-6,n-e);for(let a=0;a<t.length;a++)t[a]=(t[a]-e)/s;const r=new Uint8Array(i*i*4),o=(a,l)=>t[Ei(a,i)+Ei(l,i)*i];for(let a=0;a<i;a++)for(let l=0;l<i;l++){const c=(o(l+1,a)-o(l-1,a))*3.8,h=(o(l,a+1)-o(l,a-1))*3.8,u=1/Math.hypot(c,1,h),d=-c*u,p=-h*u,g=o(l,a),v=Math.pow(Math.max(0,1-Math.abs(g*2-1)),2.5),m=(l+a*i)*4;r[m]=Math.round((d*.5+.5)*255),r[m+1]=Math.round((p*.5+.5)*255),r[m+2]=Math.round(g*255),r[m+3]=Math.round(v*255)}return r}const Pm=(i,t,e=1)=>(i.name=t,i.wrapS=xn,i.wrapT=xn,i.magFilter=Te,i.minFilter=ni,i.generateMipmaps=!0,i.colorSpace=mn,i.anisotropy=e,i.needsUpdate=!0,i);function _S(i=Am){const t=new bh(Cm(i),i,i,gn);return Pm(t,"mineworld-cloud-shadow-noise")}const rf=[{kx:4,ky:1,amplitude:.18},{kx:1,ky:5,amplitude:.175},{kx:5,ky:3,amplitude:.16},{kx:-3,ky:6,amplitude:.155},{kx:7,ky:-2,amplitude:.142},{kx:2,ky:8,amplitude:.138},{kx:8,ky:5,amplitude:.123},{kx:-6,ky:9,amplitude:.12},{kx:11,ky:-5,amplitude:.104},{kx:5,ky:12,amplitude:.102},{kx:13,ky:8,amplitude:.086},{kx:-9,ky:14,amplitude:.083},{kx:16,ky:-7,amplitude:.071},{kx:7,ky:17,amplitude:.069},{kx:19,ky:11,amplitude:.058},{kx:-12,ky:20,amplitude:.057},{kx:23,ky:-10,amplitude:.047},{kx:11,ky:24,amplitude:.046},{kx:27,ky:16,amplitude:.038},{kx:-17,ky:28,amplitude:.037},{kx:32,ky:-15,amplitude:.03},{kx:16,ky:33,amplitude:.029},{kx:38,ky:21,amplitude:.023},{kx:-22,ky:39,amplitude:.022}],of=[[1,2],[-2,1],[3,1],[-1,3],[2,-3],[3,-2],[-3,-1],[1,-3]],xS=(i,t)=>Ks(i.kx+t*37+101,i.ky-t*53-211)*Gn,yS=(i,t)=>Ks(i.ky+t*61-307,i.kx+t*43+419)*Gn;function MS(i=Ra){Rm(i,Ra,"directional-wave");const t=i*i,e=new Float32Array(t);let n=1/0,s=-1/0;for(let u=0;u<i;u++){const d=u/i;for(let p=0;p<i;p++){const g=p/i,v=Math.sin(Gn*(2*g+3*d)+1.71)*.012+Math.sin(Gn*(-3*g+2*d)+4.19)*.007+Math.sin(Gn*(5*g-d)+2.43)*.003,m=Math.sin(Gn*(-2*g+3*d)+.63)*.011+Math.sin(Gn*(3*g+4*d)+2.77)*.006+Math.sin(Gn*(g-5*d)+5.31)*.003;let f=0,x=0;for(let M=0;M<rf.length;M++){const R=rf[M],A=xS(R,M),P=M&1?-1:1,I=Gn*(R.kx*(g+v*P)+R.ky*(d+m*(.82-P*.18)))+A,b=of[M%of.length],S=Gn*(b[0]*g+b[1]*d)+yS(R,M),D=Math.sin(S)*.5+.5,X=.22+Ys(D)*.78,V=Math.hypot(R.kx,R.ky),tt=.035*(1-Ys(ea((V-18)/12))),et=Math.sin(I)+Math.sin(I*2+A*.37)*.17+Math.sin(I*3-A*.19)*tt;f+=et*R.amplitude*X,x+=R.amplitude}const _=(Hr(p+29,u-47,i,16)-.5)*.07+(Hr(p-73,u+31,i,32)-.5)*.035;f=f/(x*.92)+_,e[p+u*i]=f,n=Math.min(n,f),s=Math.max(s,f)}}const r=Math.max(1e-6,s-n);for(let u=0;u<t;u++)e[u]=(e[u]-n)/r;const o=(u,d)=>e[Ei(u,i)+Ei(d,i)*i],a=4.8*(i/Ra),l=new Float32Array(t);let c=1e-6;for(let u=0;u<i;u++)for(let d=0;d<i;d++){const p=o(d,u),g=p*4-o(d-1,u)-o(d+1,u)-o(d,u-1)-o(d,u+1),v=Math.max(0,g)*Ys(ea((p-.38)/.52));l[d+u*i]=v,c=Math.max(c,v)}const h=new Uint8Array(t*4);for(let u=0;u<i;u++)for(let d=0;d<i;d++){const p=(o(d+1,u)-o(d-1,u))*a,g=(o(d,u+1)-o(d,u-1))*a,v=1/Math.hypot(p,1,g),m=-p*v,f=-g*v,x=o(d,u),_=Hr(d+83,u-19,i,16)*.58+Hr(d-41,u+67,i,32)*.42,M=Ys(ea((_-.31)/.49)),R=ea(l[d+u*i]/(c*.36)),A=Math.pow(R,.76)*M,P=(d+u*i)*4;h[P]=Math.round((m*.5+.5)*255),h[P+1]=Math.round((f*.5+.5)*255),h[P+2]=Math.round(x*255),h[P+3]=Math.round(A*255)}return h}function wS(i=Ra){const t=new bh(MS(i),i,i,gn);return Pm(t,"mineworld-directional-wave",8)}const Uh={dg:[-.3,.954],dgw:[.847,.532],d1:[.821,.571],d1w:[-.173,.985],d2:[-.419,.908],d2w:[.982,.188],d3:[.96,-.28],d3w:[-.735,-.678],groupWaveNumber:.075,groupTimeRate:-.07,groupWarpWaveNumber:.131,groupWarpTimeRate:.093,groupWarpPhase:1.11,groupWarpStrength:.42,groupBase:.76,groupAmplitude:.24,wave1Number:.22,wave1TimeRate:.24,wave1WarpNumber:.34,wave1WarpTimeRate:-.3,wave1WarpPhase:1.37,wave1WarpStrength:.24,wave1Weight:.42,wave2Number:.7,wave2TimeRate:-.54,wave2WarpNumber:.96,wave2WarpTimeRate:.72,wave2WarpPhase:-.83,wave2WarpStrength:.18,wave2Weight:.4,wave3Number:1.12,wave3TimeRate:.86,wave3WarpNumber:1.42,wave3WarpTimeRate:-1.08,wave3WarpPhase:2.11,wave3WarpStrength:.14,wave3Weight:.18,calmLinear:.145,calmQuadratic:-.055,oceanLinear:.34,oceanQuadratic:.04,quadraticBias:.17};function It(i){if(!Number.isFinite(i))throw new Error(`Water-wave GLSL constant must be finite: ${i}`);return(Object.is(i,-0)?0:i).toFixed(3)}function wn(i,t){return`${i<0?"-":"+"} ${t} * ${It(Math.abs(i))}`}function na(i){return`${i<0?"-":"+"} ${It(Math.abs(i))}`}const _t=Uh,SS=`
vec3 mwWaveField(vec2 p, float t, float ocean) {
  vec2 dg = vec2(${It(_t.dg[0])}, ${It(_t.dg[1])});
  vec2 dgw = vec2(${It(_t.dgw[0])}, ${It(_t.dgw[1])});
  vec2 d1 = vec2(${It(_t.d1[0])}, ${It(_t.d1[1])});
  vec2 d1w = vec2(${It(_t.d1w[0])}, ${It(_t.d1w[1])});
  vec2 d2 = vec2(${It(_t.d2[0])}, ${It(_t.d2[1])});
  vec2 d2w = vec2(${It(_t.d2w[0])}, ${It(_t.d2w[1])});
  vec2 d3 = vec2(${It(_t.d3[0])}, ${It(_t.d3[1])});
  vec2 d3w = vec2(${It(_t.d3w[0])}, ${It(_t.d3w[1])});
  float pgw = dot(p, dgw) * ${It(_t.groupWarpWaveNumber)} ${wn(_t.groupWarpTimeRate,"t")} ${na(_t.groupWarpPhase)};
  float pg = dot(p, dg) * ${It(_t.groupWaveNumber)} ${wn(_t.groupTimeRate,"t")}
    + ${It(_t.groupWarpStrength)} * sin(pgw);
  float sg = sin(pg), cg = cos(pg), cgw = cos(pgw);
  float group = ${It(_t.groupBase)} + ${It(_t.groupAmplitude)} * sg;
  vec2 groupPhaseGrad = ${It(_t.groupWaveNumber)} * dg
    + ${It(_t.groupWarpStrength)} * cgw * ${It(_t.groupWarpWaveNumber)} * dgw;
  vec2 groupGrad = ${It(_t.groupAmplitude)} * cg * groupPhaseGrad;
  float p1w = dot(p, d1w) * ${It(_t.wave1WarpNumber)} ${wn(_t.wave1WarpTimeRate,"t")} ${na(_t.wave1WarpPhase)};
  float p2w = dot(p, d2w) * ${It(_t.wave2WarpNumber)} ${wn(_t.wave2WarpTimeRate,"t")} ${na(_t.wave2WarpPhase)};
  float p3w = dot(p, d3w) * ${It(_t.wave3WarpNumber)} ${wn(_t.wave3WarpTimeRate,"t")} ${na(_t.wave3WarpPhase)};
  float p1 = dot(p, d1) * ${It(_t.wave1Number)} ${wn(_t.wave1TimeRate,"t")}
    + ${It(_t.wave1WarpStrength)} * sin(p1w);
  float p2 = dot(p, d2) * ${It(_t.wave2Number)} ${wn(_t.wave2TimeRate,"t")}
    + ${It(_t.wave2WarpStrength)} * sin(p2w);
  float p3 = dot(p, d3) * ${It(_t.wave3Number)} ${wn(_t.wave3TimeRate,"t")}
    + ${It(_t.wave3WarpStrength)} * sin(p3w);
  float s1 = sin(p1), s2 = sin(p2), s3 = sin(p3);
  vec2 p1Grad = ${It(_t.wave1Number)} * d1
    + ${It(_t.wave1WarpStrength)} * cos(p1w) * ${It(_t.wave1WarpNumber)} * d1w;
  vec2 p2Grad = ${It(_t.wave2Number)} * d2
    + ${It(_t.wave2WarpStrength)} * cos(p2w) * ${It(_t.wave2WarpNumber)} * d2w;
  vec2 p3Grad = ${It(_t.wave3Number)} * d3
    + ${It(_t.wave3WarpStrength)} * cos(p3w) * ${It(_t.wave3WarpNumber)} * d3w;
  float q = ${It(_t.wave1Weight)} * group * s1
    + ${It(_t.wave2Weight)} * s2
    + ${It(_t.wave3Weight)} * s3;
  vec2 qGrad = ${It(_t.wave1Weight)} * (groupGrad * s1 + group * cos(p1) * p1Grad)
    + ${It(_t.wave2Weight)} * cos(p2) * p2Grad
    + ${It(_t.wave3Weight)} * cos(p3) * p3Grad;
  float calmH = ${It(_t.calmLinear)} * q ${wn(_t.calmQuadratic,"q * q")};
  float oceanH = ${It(_t.oceanLinear)} * q ${wn(_t.oceanQuadratic,`(q * q - ${It(_t.quadraticBias)})`)};
  float h = mix(calmH, oceanH, ocean);
  float dhdq = mix(
    ${It(_t.calmLinear)} ${wn(2*_t.calmQuadratic,"q")},
    ${It(_t.oceanLinear)} ${wn(2*_t.oceanQuadratic,"q")},
    ocean
  );
  vec2 hGrad = dhdq * qGrad;
  return vec3(h, hGrad);
}`.trim();function ia(i,t,e,n,s,r,o,a,l,c,h){const u=(i*o[0]+t*o[1])*a+e*l+c,d=Math.cos(u),p=(i*n[0]+t*n[1])*s+e*r+h*Math.sin(u),g=Math.cos(p);return{height:Math.sin(p),slopeX:g*(s*n[0]+h*d*a*o[0]),slopeZ:g*(s*n[1]+h*d*a*o[1])}}function bS(i,t,e,n){const s=Uh,r=ia(i,t,e,s.dg,s.groupWaveNumber,s.groupTimeRate,s.dgw,s.groupWarpWaveNumber,s.groupWarpTimeRate,s.groupWarpPhase,s.groupWarpStrength),o=s.groupBase+s.groupAmplitude*r.height,a=s.groupAmplitude*r.slopeX,l=s.groupAmplitude*r.slopeZ,c=ia(i,t,e,s.d1,s.wave1Number,s.wave1TimeRate,s.d1w,s.wave1WarpNumber,s.wave1WarpTimeRate,s.wave1WarpPhase,s.wave1WarpStrength),h=ia(i,t,e,s.d2,s.wave2Number,s.wave2TimeRate,s.d2w,s.wave2WarpNumber,s.wave2WarpTimeRate,s.wave2WarpPhase,s.wave2WarpStrength),u=ia(i,t,e,s.d3,s.wave3Number,s.wave3TimeRate,s.d3w,s.wave3WarpNumber,s.wave3WarpTimeRate,s.wave3WarpPhase,s.wave3WarpStrength),d=s.wave1Weight*o*c.height+s.wave2Weight*h.height+s.wave3Weight*u.height,p=s.wave1Weight*(a*c.height+o*c.slopeX)+s.wave2Weight*h.slopeX+s.wave3Weight*u.slopeX,g=s.wave1Weight*(l*c.height+o*c.slopeZ)+s.wave2Weight*h.slopeZ+s.wave3Weight*u.slopeZ,v=d*d,m=s.calmLinear*d+s.calmQuadratic*v,f=s.oceanLinear*d+s.oceanQuadratic*(v-s.quadraticBias),x=m+(f-m)*n,_=s.calmLinear+2*s.calmQuadratic*d,M=s.oceanLinear+2*s.oceanQuadratic*d,R=_+(M-_)*n;return{height:x,slopeX:R*p,slopeZ:R*g}}const af=()=>typeof performance<"u"?performance.now():Date.now(),TS=24,Nr=2048,sa=36,ra=ee+8/9,ES=110,lf=(i,t,e)=>{const n=Math.max(0,Math.abs(i)-.5),s=Math.max(0,Math.abs(t)-.5);return n*n+s*s>e},hc="float mcBright(float lv){ float f = clamp(lv,0.0,15.0)/15.0; return f/(4.0-3.0*f); }",uc="{ float skyLv = aLight.x*15.0; float blkLv = aLight.y*15.0; float bs = mcBright(max(skyLv - uSkyDarken, 0.0)); float bb = mcBright(blkLv); vSkyBright = bs; vBlockBright = bb; float drkFloor = (skyLv < 0.5) ? 0.03 : 0.04; vLF = max(bs, bb) * 0.96 + drkFloor; float sf = (bs + bb) > 0.0001 ? bs / (bs + bb) : 1.0; vTint = mix(vec3(1.0, 0.91, 0.78), uSkyTint, sf); }",cf=i=>{const t=Math.max(0,Math.min(15,i))/15;return t/(4-3*t)};class Dm{constructor(t,e,n){y(this,"meshes",new Map);y(this,"lightGrids",new Map);y(this,"opaqueMat");y(this,"iceMat");y(this,"cutoutMat");y(this,"waterMat");y(this,"portalMat");y(this,"torchMat");y(this,"waterFrames");y(this,"waterTex");y(this,"cloudNoiseTex");y(this,"waterWaveTex");y(this,"waterAnimT",0);y(this,"waterFrame",0);y(this,"uSkyMul",{value:1});y(this,"uSkyTint",{value:new St(1,1,1)});y(this,"uSkyDarken",{value:0});y(this,"uShaders",{value:0});y(this,"uTime",{value:0});y(this,"uSkyRefl",{value:new St().setRGB(.55,.72,.95,ae)});y(this,"uSkyTop",{value:new St().setRGB(.35,.55,.85,ae)});y(this,"uSunDir",{value:new U(.4,.85,.3)});y(this,"uRefractionColor",{value:null});y(this,"uRefractionDepth",{value:null});y(this,"uRefractionSize",{value:new Bt(1,1)});y(this,"uHasRefraction",{value:0});y(this,"uCameraUnderwater",{value:0});y(this,"uUnderwaterAmount",{value:0});y(this,"uReflectionColor",{value:null});y(this,"uReflectionSize",{value:new Bt(1,1)});y(this,"uReflectionMatrix",{value:new fe});y(this,"uHasReflection",{value:0});y(this,"sun",new im(16777215,0));y(this,"uShadowMap",{value:null});y(this,"uShadowMatrix",{value:new fe});y(this,"uShadowTexel",{value:new Bt(1/Nr,1/Nr)});y(this,"uShadowOn",{value:0});y(this,"uHq",{value:0});y(this,"uSunUp",{value:0});y(this,"leafDepthMat",null);y(this,"meshWorkers",[]);y(this,"meshRr",0);y(this,"meshPending",new Map);y(this,"nextMeshJobId",1);y(this,"meshPendingSince",new Map);y(this,"meshFails",new Map);y(this,"meshQueue",[]);y(this,"editKeys",new Set);y(this,"priorityQueue",[]);y(this,"fogCullR2",(ES/Dt)**2);y(this,"lightingQuality",null);y(this,"sunEnabled",!0);y(this,"lastTint","");this.scene=t,this.world=e,this.opaqueMat=new ye({map:n,vertexColors:!0}),this.opaqueMat.shadowSide=ze,this.iceMat=new ye({map:n,vertexColors:!0}),this.iceMat.shadowSide=ze,this.cutoutMat=new ye({map:n,vertexColors:!0,alphaTest:.5,side:je}),this.waterFrames=jw(TS),this.waterTex=this.waterFrames[0].clone(),this.waterTex.needsUpdate=!0,this.cloudNoiseTex=_S(128),this.waterWaveTex=wS(),this.waterMat=new ye({map:this.waterTex,vertexColors:!0,transparent:!0,opacity:.78,depthWrite:!1,side:je}),this.waterMat.forceSinglePass=!0,this.portalMat=new ye({map:n,vertexColors:!0,transparent:!0,opacity:.82,depthWrite:!1,side:je}),this.portalMat.forceSinglePass=!0,this.installLight(this.opaqueMat,!1,!0),this.installLight(this.cutoutMat,!0,!1),this.installWaterShader(this.waterMat),this.installIceShader(this.iceMat),this.torchMat=new ye({map:Kw(),transparent:!0,alphaTest:.5,side:je}),this.sun.castShadow=!1,this.sun.shadow.mapSize.set(Nr,Nr);const s=this.sun.shadow.camera;if(s.left=-sa,s.right=sa,s.top=sa,s.bottom=-sa,s.near=1,s.far=260,this.scene.add(this.sun),this.scene.add(this.sun.target),this.leafDepthMat=new Zp({depthPacking:Dp,map:n,alphaTest:.5}),typeof Worker<"u"){const r=typeof navigator<"u"&&navigator.hardwareConcurrency||4,o=Math.max(1,Math.min(4,r-1));for(let a=0;a<o;a++){const l=new cS;l.onmessage=c=>this.handleMeshWorkerResult(c.data),l.onerror=c=>{console.error("[meshgen worker] 致命错误(整个 worker 挂了，区块会停止网格化):",c.message)},this.meshWorkers.push(l)}}}installLight(t,e=!1,n=!1){t.onBeforeCompile=s=>{s.uniforms.uSkyTint=this.uSkyTint,s.uniforms.uSkyDarken=this.uSkyDarken,s.uniforms.uShadowMap=this.uShadowMap,s.uniforms.uShadowMatrix=this.uShadowMatrix,s.uniforms.uShadowTexel=this.uShadowTexel,s.uniforms.uShadowOn=this.uShadowOn,s.uniforms.uHq=this.uHq,s.uniforms.uSunUp=this.uSunUp,s.uniforms.uShaders=this.uShaders,s.uniforms.uSunDirW=this.uSunDir,s.uniforms.uTime=this.uTime,s.uniforms.uSurfaceNoise={value:this.cloudNoiseTex},s.uniforms.uWaterWaves={value:this.waterWaveTex};const r=e?`{ float sw = uShaders * 0.06 * aSway; vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz; float ph = wp.x*0.6 + wp.z*0.5 + wp.y*0.3; transformed.x += sin(ph + uTime*1.4) * sw; transformed.z += sin(ph*1.3 + uTime*1.1) * sw; transformed.y += sin(ph*0.8 + uTime*1.7) * sw * 0.5; }
`:"";s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aLight;
uniform vec3 uSkyTint;
uniform float uSkyDarken;
uniform mat4 uShadowMatrix;
uniform float uShaders;
`+(e?`uniform float uTime;
attribute float aSway;
`:"")+(n?`attribute float aUnderwater;
attribute float aWetness;
`:"")+`varying float vLF;
varying float vSkyBright;
varying float vBlockBright;
varying vec3 vTint;
varying vec4 vShadowCoord;
varying float vSky;
varying vec3 vWp;
varying float vUnderwater;
varying float vWetness;
`+hc).replace("#include <begin_vertex>",`#include <begin_vertex>
`+r+uc+`
vSky = aLight.x;
vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;
`+(n?`vUnderwater = aUnderwater;
vWetness = aWetness;
`:`vUnderwater = 0.0;
vWetness = 0.0;
`)+"vShadowCoord = uShadowMatrix * (modelMatrix * vec4(transformed, 1.0));"),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying float vLF;
varying float vSkyBright;
varying float vBlockBright;
varying vec3 vTint;
varying vec4 vShadowCoord;
varying float vSky;
varying vec3 vWp;
varying float vUnderwater;
varying float vWetness;
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
float mwTile(float id,float target){ return 1.0-step(0.5,abs(id-target)); }
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
float mwRock = 0.0; float mwSoil = 0.0; float mwGrass = 0.0; float mwSand = 0.0;
float mwWood = 0.0; float mwSnow = 0.0; float mwFoliage = 0.0; float mwPolished = 0.0;
float mwTexCavity = 0.0;
#ifdef USE_MAP
  vec2 mwAtlasSize = vec2(64.0, 160.0);
  vec2 mwTexel = 1.0 / mwAtlasSize;
  vec2 mwTileSize = vec2(0.25, 0.1);
  vec2 mwTileBase = floor(vMapUv / mwTileSize) * mwTileSize;
  mwTileIndex = floor(vMapUv.x * 4.0) + floor((1.0 - vMapUv.y) * 10.0) * 4.0;
  mwRock = max(max(max(mwTile(mwTileIndex,0.0),mwTile(mwTileIndex,4.0)),max(mwTile(mwTileIndex,9.0),mwTile(mwTileIndex,14.0))),max(max(mwTile(mwTileIndex,16.0),mwTile(mwTileIndex,22.0)),max(mwTile(mwTileIndex,24.0),mwTile(mwTileIndex,35.0))));
  mwSoil = max(mwTile(mwTileIndex,1.0),mwTile(mwTileIndex,20.0));
  mwGrass = max(mwTile(mwTileIndex,2.0),mwTile(mwTileIndex,3.0));
  mwSand = max(mwTile(mwTileIndex,5.0),mwTile(mwTileIndex,26.0));
  mwWood = max(max(max(mwTile(mwTileIndex,6.0),mwTile(mwTileIndex,7.0)),mwTile(mwTileIndex,8.0)),max(max(mwTile(mwTileIndex,12.0),mwTile(mwTileIndex,13.0)),mwTile(mwTileIndex,30.0)));
  mwSnow = mwTile(mwTileIndex,29.0);
  mwFoliage = max(max(mwTile(mwTileIndex,11.0),mwTile(mwTileIndex,17.0)),mwTile(mwTileIndex,31.0));
  mwPolished = max(max(mwTile(mwTileIndex,18.0),mwTile(mwTileIndex,33.0)),max(mwTile(mwTileIndex,34.0),mwTile(mwTileIndex,36.0)));
  vec2 mwUvMin = mwTileBase + mwTexel * 0.55;
  vec2 mwUvMax = mwTileBase + mwTileSize - mwTexel * 0.55;
  float mwHL = dot(texture2D(map, clamp(vMapUv - vec2(mwTexel.x, 0.0), mwUvMin, mwUvMax)).rgb, vec3(0.2126, 0.7152, 0.0722));
  float mwHR = dot(texture2D(map, clamp(vMapUv + vec2(mwTexel.x, 0.0), mwUvMin, mwUvMax)).rgb, vec3(0.2126, 0.7152, 0.0722));
  float mwHD = dot(texture2D(map, clamp(vMapUv - vec2(0.0, mwTexel.y), mwUvMin, mwUvMax)).rgb, vec3(0.2126, 0.7152, 0.0722));
  float mwHU = dot(texture2D(map, clamp(vMapUv + vec2(0.0, mwTexel.y), mwUvMin, mwUvMax)).rgb, vec3(0.2126, 0.7152, 0.0722));
  float mwHC = dot(mwBlockAlbedo, vec3(0.2126, 0.7152, 0.0722));
  mwTexCavity = clamp(((mwHL+mwHR+mwHD+mwHU)*0.25-mwHC)*2.2,0.0,1.0);
  vec3 mwDp1 = dFdx(vWp); vec3 mwDp2 = dFdy(vWp);
  vec2 mwDuv1 = dFdx(vMapUv); vec2 mwDuv2 = dFdy(vMapUv);
  vec3 mwDp2Perp = cross(mwDp2, mwGeomN);
  vec3 mwDp1Perp = cross(mwGeomN, mwDp1);
  vec3 mwT = mwDp2Perp * mwDuv1.x + mwDp1Perp * mwDuv2.x;
  vec3 mwB = mwDp2Perp * mwDuv1.y + mwDp1Perp * mwDuv2.y;
  float mwInvBasis = inversesqrt(max(0.000001, max(dot(mwT, mwT), dot(mwB, mwB))));
  float mwBump = mix(0.22, 0.30, uHq);
  mwBump = mix(mwBump,mix(0.34,0.46,uHq),mwRock);
  mwBump = mix(mwBump,mix(0.27,0.36,uHq),max(mwSoil,mwGrass));
  mwBump = mix(mwBump,mix(0.13,0.19,uHq),mwSand);
  mwBump = mix(mwBump,mix(0.16,0.23,uHq),mwWood);
  mwBump = mix(mwBump,mix(0.08,0.13,uHq),max(mwSnow,mwPolished));
  vec3 mwTangentN = normalize(vec3(-(mwHR - mwHL) * mwBump, -(mwHU - mwHD) * mwBump, 1.0));
  vec3 mwPixelN = normalize(mwT * mwInvBasis * mwTangentN.x + mwB * mwInvBasis * mwTangentN.y + mwGeomN * mwTangentN.z);
  float mwFootprint = max(length(dFdx(vMapUv) * mwAtlasSize), length(dFdy(vMapUv) * mwAtlasSize));
  float mwDetailVis = (1.0 - smoothstep(0.72, 2.0, mwFootprint)) * uShaders;
  mwShadeN = normalize(mix(mwGeomN, mwPixelN, mwDetailVis));
#endif
float mwNatural = max(max(mwRock,mwSoil),max(mwGrass,max(mwSand,mwSnow)));
vec2 mwMacroUv = abs(mwGeomN.y)>0.55 ? vWp.xz : (abs(mwGeomN.x)>0.55 ? vWp.zy : vWp.xy);
float mwWetMaterial = smoothstep(0.04,0.92,vWetness);
if(uShaders>0.5){
  vec2 mwMacroSample = texture2D(uSurfaceNoise,mwMacroUv*0.018+vec2(0.173,0.417)).rg-0.5;
  float mwMacro = mwMacroSample.x*0.72+mwMacroSample.y*0.28;
  mwBlockAlbedo *= 1.0+mwMacro*(0.10*mwRock+0.13*mwSoil+0.11*mwGrass+0.08*mwSand+0.04*mwSnow);
  float mwMatLuma = dot(mwBlockAlbedo,vec3(0.2126,0.7152,0.0722));
  mwBlockAlbedo = mix(mwBlockAlbedo,vec3(mwMatLuma),mwRock*0.10+mwGrass*0.08+mwSand*0.035);
  mwBlockAlbedo *= mix(vec3(1.0),vec3(0.98,1.015,0.96),mwGrass);
  mwBlockAlbedo *= mix(vec3(1.0),vec3(1.035,1.0,0.92),mwSand);
  mwBlockAlbedo *= mix(vec3(1.0),vec3(0.97,1.0,1.035),mwRock);
  mwBlockAlbedo *= mix(vec3(1.0),vec3(0.965,0.985,1.0),mwSnow);
  float mwTopNatural = mwNatural*smoothstep(0.72,0.98,mwGeomN.y);
  mwShadeN = normalize(mwShadeN+vec3(mwMacroSample.x,0.0,mwMacroSample.y)*mwTopNatural*mix(0.035,0.065,uHq));
  float mwWetDarken = mix(0.84,0.78,max(mwSoil,mwSand));
  mwBlockAlbedo *= mix(1.0,mwWetDarken,mwWetMaterial);
  mwBlockAlbedo *= 1.0-mwTexCavity*(0.035+0.055*max(mwRock,mwSoil))*mwNatural;
}
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
  float mwRoughDiffuse = max(max(mwRock,mwSoil),max(mwGrass,mwSand));
  nd = mix(nd,sqrt(nd),mwRoughDiffuse*mix(0.10,0.16,uHq));
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
  float mwDirectStrength = mix(0.68, 0.74, uHq);
  float mwGroundBounce = 1.0+mwNatural*smoothstep(0.68,0.98,mwGeomN.y)*0.07;
  vec3 mwDirect = mwBlockAlbedo * mwStyleShade * sunTone * nd * sunLit * sunCloud * mwDirectStrength * mwGroundBounce;
  mwDirect *= mix(0.84, 1.0, mwVoxelAO);
  diffuseColor.rgb += mwDirect;
`+(e?`  float mwBackLight = pow(max(dot(-mwShadeN, sunDir), 0.0), 0.7);
  vec3 mwTransmission = mix(sunTone, vec3(0.52, 1.02, 0.34), 0.62);
  diffuseColor.rgb += mwBlockAlbedo * mwTransmission * mwBackLight * openSun * sunCloud * (0.35 + 0.65 * shadowVis) * mix(0.16, 0.24, uHq);
`:"")+`  float mwDiffusePeak = max(max(diffuseColor.r, diffuseColor.g), diffuseColor.b);
  diffuseColor.rgb *= min(1.0, 1.04 / max(mwDiffusePeak, 0.0001));
  float mwWet = max(smoothstep(0.08,1.0,vUnderwater),mwWetMaterial);
  float mwIron = 1.0 - step(0.5, abs(mwTileIndex - 33.0));
  float mwQuartz = 1.0 - step(0.5, abs(mwTileIndex - 34.0));
  float mwDiamond = 1.0 - step(0.5, abs(mwTileIndex - 36.0));
  float mwObsidian = 1.0 - step(0.5, abs(mwTileIndex - 18.0));
  float mwSpecialGloss = max(max(mwIron, mwDiamond), max(mwQuartz * 0.72, mwObsidian));
  vec3 mwHalf = normalize(sunDir + mwView);
  float mwGloss = max(mwSpecialGloss,max(mwWet*0.62,mwSnow*0.18));
  float mwSpecPower = mix(18.0,72.0,mwGloss)*mix(0.90,1.08,uHq);
  float mwSpec = pow(max(dot(mwShadeN, mwHalf), 0.0), mwSpecPower);
  mwSpec *= 0.004+mwRock*0.007+mwSnow*0.018+mwSpecialGloss*0.15+mwWet*0.085;
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
}`)}}updateSun(t,e,n,s){const r=t/rn*Math.PI*2;let o=Math.cos(r),a=Math.sin(r),l=.1;const c=Math.hypot(o,a,l)||1;o/=c,a/=c,l/=c;const h=Math.round(e),u=Math.round(n),d=Math.round(s);this.sun.target.position.set(h,u,d),this.sun.position.set(h+o*120,u+a*120,d+l*120),this.sun.target.updateMatrixWorld(),this.sun.updateMatrixWorld(),this.uSunUp.value=Math.max(0,Math.min(1,(a-.02)/.2));const p=this.sun.shadow.map;this.sun.castShadow&&p&&p.texture&&this.uSunUp.value>.001?(this.uShadowMap.value=p.texture,this.uShadowMatrix.value=this.sun.shadow.matrix,this.uShadowOn.value=1):this.uShadowOn.value=0}installWaterShader(t){t.onBeforeCompile=e=>{e.uniforms.uSkyMul=this.uSkyMul,e.uniforms.uSkyTint=this.uSkyTint,e.uniforms.uSkyDarken=this.uSkyDarken,e.uniforms.uShaders=this.uShaders,e.uniforms.uTime=this.uTime,e.uniforms.uSkyRefl=this.uSkyRefl,e.uniforms.uSkyTop=this.uSkyTop,e.uniforms.uSunDir=this.uSunDir,e.uniforms.uHq=this.uHq,e.uniforms.uSurfaceNoise={value:this.waterWaveTex},e.uniforms.uRefractionColor=this.uRefractionColor,e.uniforms.uRefractionDepth=this.uRefractionDepth,e.uniforms.uRefractionSize=this.uRefractionSize,e.uniforms.uHasRefraction=this.uHasRefraction,e.uniforms.uCameraUnderwater=this.uCameraUnderwater,e.uniforms.uUnderwaterAmount=this.uUnderwaterAmount,e.uniforms.uReflectionColor=this.uReflectionColor,e.uniforms.uReflectionSize=this.uReflectionSize,e.uniforms.uReflectionMatrix=this.uReflectionMatrix,e.uniforms.uHasReflection=this.uHasReflection,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aLight;
attribute float aTop;
attribute float aTopFace;
attribute float aShore;
attribute float aWaveOpen;
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
varying vec2 vWaveSlope;
varying float vWaveTrust;
varying float vWaterDepth;
varying float vTopFace;
varying float vSkyVis;
varying float vShore;
varying vec4 vReflectionCoord;
${SS}
// 在顶点接近本水格上下界时，用连续 Hermite 曲线压平位移与导数。
// 旧版先硬 clamp 位置、再用 step 把法线瞬间清零，会让浅水倒影一帧亮、一帧暗。
vec3 mwLimitWave(float raw, float negativeRoom, float positiveRoom) {
  float room = raw < 0.0 ? negativeRoom : positiveRoom;
  if (room <= 0.0001) return vec3(0.0);
  float amount = abs(raw);
  float knee = max(room - 0.025, room * 0.65);
  if (amount <= knee) return vec3(raw, 1.0, 1.0);
  if (amount >= room) return vec3(sign(raw) * room, 0.0, 0.0);
  float span = max(room - knee, 0.0001);
  float x = clamp((amount - knee) / span, 0.0, 1.0);
  float curve = x + x * x - x * x * x;
  float derivative = max(0.0, 1.0 + 2.0 * x - 3.0 * x * x);
  // derivative 是真实位移导数，capTrust 则必须从 1 单调降到 0；二者不能混用。
  float capTrust = 1.0 - smoothstep(0.0, 1.0, x);
  return vec3(sign(raw) * (knee + span * curve), derivative, capTrust);
}
${hc}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${uc}
vec3 mwWp0 = (modelMatrix * vec4(transformed, 1.0)).xyz;
vWaterBaseWPos = mwWp0;
// 岸边与浅水连续锚定；aTop<0 的侧壁底点/瀑布锚点保持不动。
float mwMovable = step(0.001, aTop);
float mwDepthGate = smoothstep(0.12, 0.55, abs(aTop));
float mwWet = 1.0 - clamp(aShore, 0.0, 1.0);
float mwEdgeGate = smoothstep(0.08, 0.95, mwWet);
// aTop 的绝对值是水柱深度，不是流体高度。额外按真实顶点高度衰减，
// 防止 amount=1/2 的薄水也套上深海浪后持续撞 clamp。
float mwRawBaseFrac = fract(transformed.y);
float mwIntegerTop = mwMovable * (1.0 - step(0.001, mwRawBaseFrac));
float mwBaseFrac = mix(mwRawBaseFrac, 1.0, mwIntegerTop);
float mwLevelGate = smoothstep(0.08, 0.42, mwBaseFrac);
float mwSeaLevel = 1.0 - smoothstep(
  0.18,
  0.42,
  abs(mwWp0.y - ${ra.toFixed(6)})
);
float mwOcean = smoothstep(0.25, 0.82, clamp(aWaveOpen, 0.0, 1.0))
  * smoothstep(1.25, 2.50, abs(aTop)) * mwSeaLevel;
// cornerH=1 的瀑布/水柱接合角固定在整数块顶，不能继续向上起浪。
float mwWaveGate = mwMovable * mwDepthGate * mwEdgeGate * mwLevelGate
  * (1.0 - mwIntegerTop) * uShaders;
vec3 mwWave = mwWaveField(mwWp0.xz, uTime, mwOcean);
float mwRawDisp = mwWave.x * mwWaveGate;
vec3 mwLimited = mwLimitWave(
  mwRawDisp,
  min(max(mwBaseFrac - 0.02, 0.0), mix(0.20, 0.32, mwOcean)),
  max(0.98 - mwBaseFrac, 0.0) + 0.30 * mwOcean
);
float mwDisp = mwLimited.x;
vWaveSlope = mwWave.yz * mwWaveGate * mwLimited.y;
float mwSpatialTrust = smoothstep(0.72, 0.98, mwDepthGate)
  * smoothstep(0.72, 0.98, mwEdgeGate)
  * smoothstep(0.72, 0.98, mwLevelGate);
// waveOpen 过渡区的位移还包含开阔度梯度，解析式未显式求该项；在那里回退到
// 2x2 网格导出的真实 face normal，开阔海和安全岸边仍使用连续解析法线。
float mwOpenTrust = smoothstep(0.30, 0.48, abs(mwOcean - 0.5));
mwSpatialTrust *= mwOpenTrust;
vWaveTrust = mwSpatialTrust * mwLimited.z * (1.0 - mwIntegerTop);
transformed.y += mwDisp;
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
// Keep the mirrored scene anchored to the real sea plane. Feeding the entire
// +/-0.36 block height into a fixed planar projection and then perturbing it by
// the wave normal would distort the same wave twice. A restrained 28% height
// contribution preserves visible swell without making shorelines swim.
vec3 mwReflectionWp = vec3(vWPos.x, mix(mwWp0.y, vWPos.y, 0.28), vWPos.z);
vReflectionCoord = uReflectionMatrix * vec4(mwReflectionWp, 1.0);
vWaterDepth = abs(aTop);
vTopFace = aTopFace;
vSkyVis = aLight.x;
vShore = aShore;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uSkyMul;
uniform float uShaders;
uniform float uTime;
uniform float uHq;
uniform vec3 uSkyRefl;
uniform vec3 uSkyTop;
uniform vec3 uSunDir;
uniform sampler2D uSurfaceNoise;
uniform sampler2D uRefractionColor;
uniform sampler2D uRefractionDepth;
uniform vec2 uRefractionSize;
uniform float uHasRefraction;
uniform float uCameraUnderwater;
uniform float uUnderwaterAmount;
uniform sampler2D uReflectionColor;
uniform vec2 uReflectionSize;
uniform float uHasReflection;
varying float vLF;
varying float vSkyBright;
varying float vBlockBright;
varying vec3 vTint;
varying vec3 vWPos;
varying vec3 vWaterBaseWPos;
varying vec2 vWaveSlope;
varying float vWaveTrust;
varying float vWaterDepth;
varying float vTopFace;
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
  // 介质选择必须与 Renderer 的 half-space capture 使用同一个状态。不能按每个
  // 波面片元的 V.y 判断，否则浪峰/浪谷会在同一帧混用两张相反含义的折射图。
  float cameraAbove = 1.0 - step(0.5, uCameraUnderwater);
  // 折射 RT 的裁剪面固定在世界海平面；洞穴水、玩家放置的高处水和瀑布
  // 不能采这张折射图。非海平面水体的倒影则回退到方向天空色。
  float seaRefractionGate = 1.0 - smoothstep(
    0.16,
    0.36,
    abs(vWaterBaseWPos.y - ${ra.toFixed(6)})
  );
  vec3 faceN = normalize(cross(dFdx(vWPos), dFdy(vWPos)));
  faceN *= sign(dot(faceN, V));
  // 顶面类别由 mesher 显式给出。片元导数在独立 chunk draw-call 的边缘不保证
  // 与相邻 draw-call 一致，不能再用它猜该片元是否属于水面。
  vec3 baseFaceN = normalize(cross(dFdx(vWaterBaseWPos), dFdy(vWaterBaseWPos)));
  baseFaceN *= sign(dot(baseFaceN, V));
  float horiz = step(0.5, vTopFace);

  // 大中小四级波谱：A/B 保留到远景，C/D 按屏幕足迹淡出，避免细波小于一像素后闪烁。
  vec2 p = vWPos.xz;
  vec4 rippleA = texture2D(uSurfaceNoise, p * 0.032 + vec2(uTime * 0.006, -uTime * 0.0044));
  vec4 rippleB = texture2D(uSurfaceNoise, mwTurn(p) * 0.082 + vec2(-uTime * 0.012, uTime * 0.0085));
  vec4 rippleC = texture2D(uSurfaceNoise, mwTurn(p.yx) * 0.19 + vec2(uTime * 0.022, uTime * 0.017));
  vec4 rippleD = texture2D(uSurfaceNoise, mwTurn(p * 0.31) + vec2(-uTime * 0.036, uTime * 0.027));
  float footprint = max(length(dFdx(p)), length(dFdy(p)));
  float midVis = 1.0 - smoothstep(0.35, 1.2, footprint);
  float microVis = 1.0 - smoothstep(0.1, 0.42, footprint);
  float nearDetail = 1.0 - smoothstep(30.0, 100.0, dist);
  vec2 normalA = rippleA.rg * 2.0 - 1.0;
  vec2 normalB = rippleB.rg * 2.0 - 1.0;
  vec2 normalC = rippleC.rg * 2.0 - 1.0;
  vec2 normalD = rippleD.rg * 2.0 - 1.0;
  vec2 detailN = normalA * 0.12;
  detailN += normalB * 0.09 * mix(0.5, 1.0, midVis);
  detailN += normalC * 0.04 * midVis;
  detailN += normalD * 0.012 * microVis * nearDetail * uHq;
  detailN *= horiz;
  // 顶点函数同时给出解析坡度。它比逐三角形 faceN 连续，长浪经过网格对角线时不会
  // 突然换法线；侧壁仍使用真实几何法线，保持瀑布与水下表面方向正确。
  float faceSide = baseFaceN.y < 0.0 ? -1.0 : 1.0;
  float signedBaseY = faceSide * max(abs(baseFaceN.y), 0.18);
  vec2 baseGradient = -baseFaceN.xz / signedBaseY;
  vec2 geomGradient = baseGradient + vWaveSlope;
  // 岸角、薄水与限位区的 gate 会跨三角形变化；解析式没有包含 gate 的梯度，
  // 因此在那里连续混回真实位移面法线，避免倒影沿岸跳变。
  float signedFaceY = faceSide * max(abs(faceN.y), 0.18);
  vec2 displacedGradient = -faceN.xz / signedFaceY;
  float waveTrust = clamp(vWaveTrust, 0.0, 1.0);
  vec2 trustedGradient = mix(displacedGradient, geomGradient, waveTrust);
  vec3 geomTrustedN = normalize(vec3(-trustedGradient.x, 1.0, -trustedGradient.y)) * faceSide;
  vec3 geomN = normalize(mix(faceN, geomTrustedN, horiz));
  vec2 totalGradient = trustedGradient - detailN;
  vec3 topN = normalize(vec3(-totalGradient.x, 1.0, -totalGradient.y)) * faceSide;
  vec3 N = normalize(mix(faceN, topN, horiz));
  vec2 macroDetailN = (normalA * 0.085 + normalB * 0.06 * mix(0.55, 1.0, midVis)) * horiz;
  vec2 macroGradient = trustedGradient - macroDetailN;
  vec3 macroTopN = normalize(vec3(-macroGradient.x, 1.0, -macroGradient.y)) * faceSide;
  vec3 macroN = normalize(mix(faceN, macroTopN, horiz));
  // 屏幕空间折射/倒影必须使用 view-space 倾斜；直接拿世界 XZ 会在玩家转向时改变扰动方向。
  vec3 flatN = vec3(0.0, faceSide, 0.0);
  vec2 geomTilt = (viewMatrix * vec4(geomN - flatN, 0.0)).xy;
  vec2 macroTilt = (viewMatrix * vec4(macroN - flatN, 0.0)).xy;
  vec2 fullTilt = (viewMatrix * vec4(N - flatN, 0.0)).xy;
  vec2 macroNoiseTilt = macroTilt - geomTilt;
  vec2 microTilt = fullTilt - macroTilt;

  // Snell 折射方向：空气→水使用 1/1.333；水下看向空气时使用反向折射率。
  // 折射 RT 由独立水下裁剪相机渲染，屏幕 UV 只负责在该真实场景中寻找命中点。
  vec2 screenUv = gl_FragCoord.xy / max(uRefractionSize, vec2(1.0));
  float screenEdge = min(min(screenUv.x, 1.0 - screenUv.x), min(screenUv.y, 1.0 - screenUv.y));
  // 屏幕边缘逐渐收回扰动/模糊，避免 ClampToEdge 把最后一列像素拉成固定竖色带。
  float screenEdgeFade = smoothstep(0.002, 0.022, screenEdge);
  vec2 maxRefraction = vec2(8.0) / max(uRefractionSize, vec2(1.0));
  float eta = mix(1.3330, 0.75019, cameraAbove);
  vec3 refractedRay = refract(-V, N, eta);
  vec3 flatRefractedRay = refract(-V, flatN, eta);
  // 全反射时 refract 返回零向量；该处不应从折射 RT 拉取随机边缘像素。
  float hasTransmission = step(0.0001, dot(refractedRay, refractedRay));
  vec2 snellDelta = (viewMatrix * vec4(refractedRay - flatRefractedRay, 0.0)).xy;
  vec2 refrPx = snellDelta * mix(44.0, 54.0, uHq)
    + geomTilt * mix(7.0, 9.0, uHq)
    + macroNoiseTilt * mix(3.0, 4.0, uHq)
    + microTilt * mix(1.0, 1.5, uHq);
  refrPx *= hasTransmission;
  vec2 refrOffset = clamp(refrPx, vec2(-8.0), vec2(8.0)) * screenEdgeFade / max(uRefractionSize, vec2(1.0));
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
  // 水上看水底：光程从水面继续走到水下命中点；水下看空气：光程只到
  // 当前水面。后者不能拿天空深度当成几十格水，否则仰视会变成一片死蓝。
  float thickness = mix(
    clamp(dist, 0.0, 48.0),
    clamp(centerThickness, 0.0, 48.0),
    cameraAbove
  );
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

  // 折射 RT 只包含真实的水下几何。颜色完全由光程吸收/散射决定，
  // 不再叠固定蓝膜、人工明暗条或程序云。
  float opticalThickness = clamp(thickness, 0.0, 64.0);
  // 海平面水下视图与全屏后处理平滑分摊同一段 camera→surface 光程。
  // 介质布尔状态仍只负责选择正确 half-space capture；平滑量只负责能量守恒。
  float underwaterInterfaceShare = (1.0 - cameraAbove) * seaRefractionGate;
  opticalThickness *= mix(1.0, 1.0 - uUnderwaterAmount, underwaterInterfaceShare);
  vec3 sigmaA = vec3(0.095, 0.028, 0.010);
  vec3 sigmaS = vec3(0.010, 0.038, 0.055);
  vec3 sigmaT = sigmaA + sigmaS;
  vec3 transmittance = exp(-sigmaT * opticalThickness);
  vec3 waterIrradiance = mix(uSkyRefl, uSkyTop, 0.20)
    * vec3(0.78, 1.08, 1.16)
    * mix(0.45, 1.0, uSkyMul) * mix(0.80, 1.0, vLF) * vTint;
  vec3 inScatter = waterIrradiance
    * (sigmaS / max(sigmaT, vec3(0.0001)))
    * (vec3(1.0) - transmittance);
  inScatter *= mix(0.95, 1.15, smoothstep(3.0, 18.0, opticalThickness));
  vec3 refracted = opaqueBehind * transmittance + inScatter;
  float localThickness = clamp(
    max(vWaterDepth, 0.4) / max(abs(dot(V, baseFaceN)), 0.24),
    0.0,
    24.0
  );
  vec3 localTransmittance = exp(-sigmaT * localThickness);
  vec3 localWater = waterIrradiance
    * (sigmaS / max(sigmaT, vec3(0.0001)))
    * (vec3(1.0) - localTransmittance);
  localWater += vec3(0.006, 0.040, 0.062) * (1.0 - localTransmittance.b);
  refracted = mix(localWater, refracted, seaRefractionGate);

  // 微表面法线的屏幕足迹决定粗糙度。远处或欠采样的波纹会自然变宽，
  // 不会以单像素亮点跨过 Bloom 阈值后闪烁。
  // 大浪解析法线承担轮廓、Fresnel 与物体倒影；低频纹理只补充中尺度粗糙度。
  // 旧版 0.72 的纹理权重会把真实几何浪压成一张细纹塑料膜。
  vec3 opticalN = normalize(mix(geomN, macroN, 0.45));
  float normalVariance = 0.5 * (
    dot(dFdx(opticalN), dFdx(opticalN)) + dot(dFdy(opticalN), dFdy(opticalN))
  );
  float baseRoughness = mix(0.18, 0.145, uHq);
  float surfaceRoughness = clamp(
    sqrt(baseRoughness * baseRoughness + min(normalVariance, 0.045)),
    baseRoughness,
    0.26
  );

  // 真实镜像倒影：Renderer 用关于海平面的镜像相机渲染岸、树和生物。
  // 这不是玩家屏幕的拷贝；水下几何、水本身和相机辅助物都在该 pass 中被排除。
  // 反射坐标由位移后的波面位置生成，稳定的低频法线只补少量切线扰动，
  // 因而物体保持可辨，不会像屏幕空间深度命中那样被拆成黑线或错色岛。
  vec2 reflectionGradient = clamp(
    trustedGradient * 0.25 - macroDetailN * 0.05,
    vec2(-0.07),
    vec2(0.07)
  );
  vec3 reflectionTopN = normalize(vec3(-reflectionGradient.x, 1.0, -reflectionGradient.y)) * faceSide;
  vec3 reflectionSurfaceN = normalize(mix(faceN, reflectionTopN, horiz));
  vec3 reflectionN = opticalN;
  vec3 R = reflect(-V, reflectionSurfaceN);
  float skyHeight = smoothstep(-0.02, 0.72, R.y);
  vec3 airSky = mix(uSkyRefl, uSkyTop, skyHeight);
  vec3 waterSky = waterIrradiance * mix(vec3(0.18, 0.42, 0.64), vec3(0.34, 0.58, 0.78), skyHeight);
  vec3 reflectedRadiance = mix(waterSky, airSky, cameraAbove);
  if (uHasReflection > 0.5) {
    vec2 baseReflectionUv = vReflectionCoord.xy / max(vReflectionCoord.w, 0.0001);
    vec2 reflectionOffset = clamp(
      geomTilt * mix(11.0, 14.0, uHq) + macroNoiseTilt * mix(1.0, 1.5, uHq),
      vec2(-3.0),
      vec2(3.0)
    ) / max(uReflectionSize, vec2(1.0));
    vec2 reflectionUv = baseReflectionUv + reflectionOffset;
    float edge = min(
      min(reflectionUv.x, 1.0 - reflectionUv.x),
      min(reflectionUv.y, 1.0 - reflectionUv.y)
    );
    float edgeConfidence = smoothstep(0.008, 0.040, edge);
    float seaConfidence = 1.0 - smoothstep(
      0.18,
      0.42,
      abs(vWaterBaseWPos.y - ${ra.toFixed(6)})
    );
    float reflectionConfidence = edgeConfidence * seaConfidence * cameraAbove;
    float blurPixels = 0.70 + surfaceRoughness * mix(3.5, 4.5, uHq);
    vec2 texel = vec2(blurPixels) / max(uReflectionSize, vec2(1.0));
    vec2 safeUv = clamp(reflectionUv, vec2(0.004) + texel, vec2(0.996) - texel);
    vec3 mirrored = texture2D(uReflectionColor, safeUv).rgb * 0.50;
    mirrored += texture2D(uReflectionColor, safeUv + vec2( texel.x, 0.0)).rgb * 0.125;
    mirrored += texture2D(uReflectionColor, safeUv + vec2(-texel.x, 0.0)).rgb * 0.125;
    mirrored += texture2D(uReflectionColor, safeUv + vec2(0.0,  texel.y)).rgb * 0.125;
    mirrored += texture2D(uReflectionColor, safeUv + vec2(0.0, -texel.y)).rgb * 0.125;
    float reflectedPeak = max(max(mirrored.r, mirrored.g), mirrored.b);
    mirrored *= min(1.0, 1.15 / max(reflectedPeak, 0.0001));
    reflectedRadiance = mix(reflectedRadiance, mirrored, reflectionConfidence);
  }

  // 精确介电 Fresnel。水下接近临界角时 Schlick 会一直偏低、到 TIR 又突然跳成1；
  // Rs/Rp 形式会连续收敛到全反射，因此仰视不出现一圈硬亮边。
  float NoV = clamp(dot(reflectionN, V), 0.0, 1.0);
  float etaI = mix(1.3330, 1.0, cameraAbove);
  float etaT = mix(1.0, 1.3330, cameraAbove);
  float sinT2 = (etaI * etaI / (etaT * etaT)) * max(0.0, 1.0 - NoV * NoV);
  float cosT = sqrt(max(0.0, 1.0 - sinT2));
  float rs = (etaI * NoV - etaT * cosT) / max(etaI * NoV + etaT * cosT, 0.0001);
  float rp = (etaT * NoV - etaI * cosT) / max(etaT * NoV + etaI * cosT, 0.0001);
  float dielectricF = clamp(0.5 * (rs * rs + rp * rp), 0.0, 1.0);
  dielectricF = mix(dielectricF, 1.0, step(1.0, sinT2));
  float reflectionGate = horiz * mix(1.0, vSkyVis, cameraAbove);
  vec3 F = vec3(dielectricF * reflectionGate);
  vec3 interfaceReflection = reflectedRadiance;
  vec3 col = refracted * (vec3(1.0) - F) + interfaceReflection * F;

  // 单一 GGX 太阳 BRDF：高光由真实浪面法线自然形成，不再画 flat/geom/macro 三条光路。
  vec3 L = normalize(uSunDir);
  vec3 H = normalize(V + L);
  float NoL = max(dot(opticalN, L), 0.0);
  float NoH = max(dot(opticalN, H), 0.0);
  float VoH = max(dot(V, H), 0.0);
  float alpha = surfaceRoughness * surfaceRoughness;
  float alpha2 = alpha * alpha;
  float denom = NoH * NoH * (alpha2 - 1.0) + 1.0;
  float D = alpha2 / max(3.14159265 * denom * denom, 0.0001);
  float gv = NoL * sqrt(NoV * NoV * (1.0 - alpha2) + alpha2);
  float gl = NoV * sqrt(NoL * NoL * (1.0 - alpha2) + alpha2);
  float visibility = 0.5 / max(gv + gl, 0.0001);
  vec3 F0 = vec3(0.02037);
  vec3 specF = F0 + (vec3(1.0) - F0) * pow(1.0 - VoH, 5.0);
  float sunHeight = clamp(L.y * 3.0, 0.0, 1.0);
  vec3 sunRadiance = mix(vec3(1.45, 0.50, 0.16), vec3(1.20, 1.10, 0.94), sunHeight);
  float sunVisibility = smoothstep(0.005, 0.16, L.y) * uSkyMul * vSkyVis * horiz;
  col += sunRadiance * D * visibility * specF * NoL * sunVisibility;

  // 仅保留由真实深度交界产生的很弱接触泡沫。开放水面不再画周期白线。
  float contactFoam = (1.0 - smoothstep(0.035, 0.24, centerThickness))
    * smoothstep(0.16, 0.72, vShore) * vSkyVis * horiz * cameraAbove;
  vec3 foamColor = mix(vec3(0.12, 0.25, 0.31), vec3(0.68, 0.82, 0.86), uSkyMul);
  col = mix(col, max(col, foamColor), clamp(contactFoam * 0.12, 0.0, 0.12));

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
  below *= 1.0 - seaRefractionGate * uUnderwaterAmount;
  col = mix(col, col * vec3(0.54, 0.82, 1.08) + vec3(0.0, 0.016, 0.035), below * 0.34);
  diffuseColor.rgb = col;
  // 这里已经在 shader 内完成折射合成；alpha 必须为 1，否则 GPU 会把真实场景再混一次，
  // 造成用户截图里的“无色透明玻璃”与洗白水底。
  diffuseColor.a = 1.0;
} else {
  vec3 toEye = cameraPosition - vWPos;
  float dist = length(toEye);
  vec3 V = toEye / max(dist, 0.0001);

  // 只有显式顶面接收天空反射；侧壁和底面保持原来的非反射行为。
  float horiz = step(0.5, vTopFace);
  float nearDetail = 1.0 - smoothstep(30.0, 100.0, dist);
  vec2 p = vWPos.xz;
  vec4 rippleA = texture2D(uSurfaceNoise, p * 0.034 + vec2(uTime * 0.0062, -uTime * 0.0041));
  vec4 rippleB = texture2D(uSurfaceNoise, mwTurn(p) * 0.09 + vec2(-uTime * 0.0103, uTime * 0.0074));
  vec2 slope = (rippleA.rg * 2.0 - 1.0) * 0.72 + (rippleB.rg * 2.0 - 1.0) * 0.38;
  float ridge = rippleA.a * 0.62 + rippleB.a * 0.48;
  if (uHq > 0.5) {
    vec4 rippleC = texture2D(uSurfaceNoise, mwTurn(p.yx) * 0.23 + vec2(uTime * 0.014, uTime * 0.009));
    slope += (rippleC.rg * 2.0 - 1.0) * 0.18 * nearDetail;
    ridge += rippleC.a * 0.16;
  }
  slope *= mix(0.28, 1.0, nearDetail) * horiz;
  vec3 N = normalize(vec3(slope.x * 0.86, 1.0, slope.y * 0.86));

  // Beer-Lambert-style view-path absorption: clear cyan shallows, saturated blue
  // depths, and denser water at a grazing angle without block-by-block cutoffs.
  float opticalDepth = max(0.12, vWaterDepth) / max(abs(V.y), 0.22);
  float absorption = 1.0 - exp(-opticalDepth * 0.27);
  float deep = smoothstep(0.16, 0.91, absorption);
  vec3 shallowWater = vec3(0.028, 0.32, 0.52);
  vec3 deepWater = vec3(0.008, 0.12, 0.31);
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
#endif`)}}installIceShader(t){t.onBeforeCompile=e=>{e.uniforms.uSkyTint=this.uSkyTint,e.uniforms.uSkyDarken=this.uSkyDarken,e.uniforms.uShaders=this.uShaders,e.uniforms.uTime=this.uTime,e.uniforms.uSunDir=this.uSunDir,e.uniforms.uSunUp=this.uSunUp,e.uniforms.uSkyRefl=this.uSkyRefl,e.uniforms.uSkyTop=this.uSkyTop,e.uniforms.uWaterWaves={value:this.waterWaveTex},e.uniforms.uRefractionColor=this.uRefractionColor,e.uniforms.uRefractionDepth=this.uRefractionDepth,e.uniforms.uRefractionSize=this.uRefractionSize,e.uniforms.uHasRefraction=this.uHasRefraction,e.uniforms.uReflectionColor=this.uReflectionColor,e.uniforms.uReflectionSize=this.uReflectionSize,e.uniforms.uReflectionMatrix=this.uReflectionMatrix,e.uniforms.uHasReflection=this.uHasReflection,e.uniforms.uHq=this.uHq,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
${hc}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${uc}
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
uniform vec2 uReflectionSize;
uniform float uHasReflection;
uniform float uHq;
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

  vec3 iceReflectionN = normalize(mix(faceN, N, 0.35));
  vec3 R = reflect(-V, iceReflectionN);
  vec3 reflected = mix(uSkyRefl, uSkyTop, smoothstep(0.0, 0.72, R.y));
  if (uHasReflection > 0.5) {
    vec2 reflectionUv = vReflectionCoord.xy / max(vReflectionCoord.w, 0.0001);
    vec2 iceOffset = clamp(slope * 7.0, vec2(-1.5), vec2(1.5))
      / max(uReflectionSize, vec2(1.0));
    reflectionUv += iceOffset;
    float edge = min(
      min(reflectionUv.x, 1.0 - reflectionUv.x),
      min(reflectionUv.y, 1.0 - reflectionUv.y)
    );
    float confidence = smoothstep(0.008, 0.040, edge)
      * (1.0 - smoothstep(0.18, 0.42, abs(vWPos.y - ${ra.toFixed(6)})))
      * step(vWPos.y, cameraPosition.y);
    vec2 rTexel = vec2(1.0) / max(uReflectionSize, vec2(1.0));
    vec2 safeUv = clamp(reflectionUv, vec2(0.005) + rTexel, vec2(0.995) - rTexel);
    vec3 mirrored = texture2D(uReflectionColor, safeUv).rgb * 0.5;
    mirrored += texture2D(uReflectionColor, safeUv + vec2( rTexel.x, 0.0)).rgb * 0.125;
    mirrored += texture2D(uReflectionColor, safeUv + vec2(-rTexel.x, 0.0)).rgb * 0.125;
    mirrored += texture2D(uReflectionColor, safeUv + vec2(0.0,  rTexel.y)).rgb * 0.125;
    mirrored += texture2D(uReflectionColor, safeUv + vec2(0.0, -rTexel.y)).rgb * 0.125;
    reflected = mix(reflected, mirrored, confidence);
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
}`)}}setTint(t){const e=t.join();e!==this.lastTint&&(this.lastTint=e,this.uSkyTint.value.setRGB(t[0],t[1],t[2]))}setSkyMul(t){this.uSkyMul.value=t}setSkyDarken(t){this.uSkyDarken.value=t}setLightingQuality(t){var o;if(t===this.lightingQuality)return;this.lightingQuality=t,this.uShaders.value=t!=="off"?1:0;const e=t!=="off";this.waterMat.transparent=!e,this.waterMat.depthWrite=e,this.waterMat.opacity=e?1:.78,this.waterMat.needsUpdate=!0,this.sun.castShadow=t!=="off"&&this.sunEnabled,this.uHq.value=t==="high"?1:0;const n=t==="high"?4096:Nr;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),(o=this.sun.shadow.map)==null||o.dispose(),this.sun.shadow.map=null,this.uShadowOn.value=0,this.uShadowTexel.value.set(1/n,1/n));const s=t==="high"?56:46,r=this.sun.shadow.camera;r.left!==-s&&(r.left=-s,r.right=s,r.top=s,r.bottom=-s,r.updateProjectionMatrix()),t==="off"&&(this.uShadowOn.value=0)}setSunEnabled(t){t!==this.sunEnabled&&(this.sunEnabled=t,this.sun.castShadow=t&&this.lightingQuality!==null&&this.lightingQuality!=="off",t||(this.uShadowOn.value=0))}setFogFar(t){this.fogCullR2=(t/Dt)**2}setSkyReflection(t,e){this.uSkyRefl.value.setRGB(t[0],t[1],t[2],ae),e&&this.uSkyTop.value.setRGB(e[0],e[1],e[2],ae)}setWaterRefraction(t,e,n,s,r){this.uRefractionColor.value=t,this.uRefractionDepth.value=e,this.uRefractionSize.value.set(Math.max(1,n),Math.max(1,s)),this.uHasRefraction.value=t&&e?1:0,this.uUnderwaterAmount.value=si.clamp(r,0,1)}setCameraUnderwater(t){this.uCameraUnderwater.value=t?1:0}setWaterReflection(t,e,n,s){this.uReflectionColor.value=t,this.uReflectionSize.value.set(Math.max(1,n),Math.max(1,s)),e&&this.uReflectionMatrix.value.copy(e),this.uHasReflection.value=t&&e?1:0}setSunDir(t,e,n){this.uSunDir.value.set(t,e,n)}setAtlas(t){this.opaqueMat.map=t,this.iceMat.map=t,this.cutoutMat.map=t,this.portalMat.map=t,this.opaqueMat.needsUpdate=!0,this.iceMat.needsUpdate=!0,this.cutoutMat.needsUpdate=!0,this.portalMat.needsUpdate=!0}animateWater(t){if(this.uTime.value+=t,this.uShaders.value>.5)return;this.waterAnimT+=t;const e=.09;for(;this.waterAnimT>=e;){this.waterAnimT-=e,this.waterFrame=(this.waterFrame+1)%this.waterFrames.length;const n=this.waterFrames[this.waterFrame];n.image&&(this.waterTex.image=n.image,this.waterTex.needsUpdate=!0)}}key(t,e){return`${t},${e}`}handleMeshWorkerResult({jobId:t,cx:e,cz:n,mesh:s,error:r}){var a;const o=this.key(e,n);if(this.meshPending.get(o)===t){if(this.meshPending.delete(o),this.meshPendingSince.delete(o),r){const l=(this.meshFails.get(o)??0)+1;this.meshFails.set(o,l),console.warn(`[meshgen] 区块(${e},${n}) 网格化失败 #${l}: ${r.split(`
`)[0]}`);return}this.meshFails.delete(o),!(!s||!this.world.peek(e,n))&&(this.editKeys.has(o)?(this.priorityQueue.push({cx:e,cz:n,mesh:s}),(a=this.world.peek(e,n))!=null&&a.dirty||this.editKeys.delete(o)):this.meshQueue.push({cx:e,cz:n,mesh:s}))}}setWorld(t){for(const e of[...this.meshes.keys()])this.unload(e);this.lightGrids.clear(),this.meshQueue.length=0,this.priorityQueue.length=0,this.meshPending.clear(),this.meshPendingSince.clear(),this.meshFails.clear(),this.editKeys.clear(),this.world=t}dispose(){var t;for(const e of[...this.meshes.keys()])this.unload(e);this.lightGrids.clear();for(const e of this.meshWorkers)e.terminate();this.meshWorkers.length=0,this.opaqueMat.dispose(),this.iceMat.dispose(),this.cutoutMat.dispose(),this.waterMat.dispose(),this.portalMat.dispose(),this.torchMat.dispose(),this.waterTex.dispose(),this.cloudNoiseTex.dispose(),this.waterWaveTex.dispose(),(t=this.leafDepthMat)==null||t.dispose(),this.scene.remove(this.sun),this.scene.remove(this.sun.target)}buildGeo(t){var n;const e=new Ve;return e.setAttribute("position",new ue(t.positions,3)),t.normals&&e.setAttribute("normal",new ue(t.normals,3)),e.setAttribute("uv",new ue(t.uvs,2)),e.setAttribute("color",new ue(t.colors,3)),t.light&&t.light.length&&e.setAttribute("aLight",new ue(t.light,2)),t.underwater&&t.underwater.length&&e.setAttribute("aUnderwater",new ue(t.underwater,1)),t.wetness&&t.wetness.length&&e.setAttribute("aWetness",new ue(t.wetness,1)),t.top&&t.top.length&&e.setAttribute("aTop",new ue(t.top,1)),t.topFace&&t.topFace.length&&e.setAttribute("aTopFace",new ue(t.topFace,1)),t.shore&&t.shore.length&&e.setAttribute("aShore",new ue(t.shore,1)),t.waveOpen&&t.waveOpen.length&&e.setAttribute("aWaveOpen",new ue(t.waveOpen,1)),t.sway&&t.sway.length&&e.setAttribute("aSway",new ue(t.sway,1)),e.setIndex(new ue(t.indices,1)),(n=t.top)!=null&&n.length&&(e.computeBoundingSphere(),e.boundingSphere&&(e.boundingSphere.radius+=.42)),e}lightLevelAt(t,e,n){const s=Math.floor(Math.floor(t)/Dt),r=Math.floor(Math.floor(n)/Dt),o=this.lightGrids.get(this.key(s,r));if(!o)return[15,0];const a=Math.min(3,Math.max(0,Math.floor((t-s*Dt)/4))),l=Math.min(3,Math.max(0,Math.floor((n-r*Dt)/4))),c=Math.min(47,Math.max(0,Math.floor(e/4))),h=o[a+l*4+c*16];return[h>>4,h&15]}brightnessAt(t,e,n,s){const[r,o]=this.lightLevelAt(t,e,n),a=r<.5?.03:.04;return Math.min(1,Math.max(cf(r-s),cf(o))*.96+a)}unload(t){this.editKeys.delete(t),this.meshPendingSince.delete(t),this.meshFails.delete(t),this.lightGrids.delete(t);const e=this.meshes.get(t);if(e){for(const n of[e.opaque,e.ice,e.cutout,e.water,e.portal,e.torch])n&&(this.scene.remove(n),n.geometry.dispose());this.meshes.delete(t)}}addMesh(t,e,n,s){if(t.indices.length===0)return null;const r=new Jt(this.buildGeo(t),e);return r.position.set(n*Dt,0,s*Dt),(e===this.waterMat||e===this.iceMat)&&r.layers.set(Ch),this.scene.add(r),r}flushMesh(t){for(let e=0;e<8&&this.priorityQueue.length>0;e++){const n=this.priorityQueue.shift();n&&this.world.peek(n.cx,n.cz)&&this.applyMesh(n.cx,n.cz,n.mesh)}for(let e=0;e<t&&this.meshQueue.length>0;e++){const n=this.meshQueue.shift();n&&this.world.peek(n.cx,n.cz)&&this.applyMesh(n.cx,n.cz,n.mesh)}}meshBusy(){return this.meshQueue.length>0||this.priorityQueue.length>0||this.meshPending.size>0}meshQueueLen(){return this.meshQueue.length+this.priorityQueue.length}pipelineStats(){let t=0;for(const e of this.meshes.values())[e.opaque,e.ice,e.cutout,e.water,e.portal,e.torch].some(n=>n&&n.visible)&&t++;return{meshed:this.meshes.size,visible:t,pending:this.meshPending.size,queued:this.meshQueueLen()}}applyMesh(t,e,n){this.unload(this.key(t,e)),this.lightGrids.set(this.key(t,e),n.light3d);const s=this.addMesh(n.opaque,this.opaqueMat,t,e)??new Jt,r=this.addMesh(n.ice,this.iceMat,t,e),o=this.addMesh(n.cutout,this.cutoutMat,t,e),a=this.addMesh(n.water,this.waterMat,t,e),l=this.addMesh(n.portal,this.portalMat,t,e),c=this.addMesh(n.torch,this.torchMat,t,e);s.castShadow=!0,s.receiveShadow=!0,r&&(r.castShadow=!0,r.receiveShadow=!0),o&&(o.castShadow=!0,o.receiveShadow=!0,this.leafDepthMat&&(o.customDepthMaterial=this.leafDepthMat)),this.meshes.set(this.key(t,e),{opaque:s,ice:r,cutout:o,water:a,portal:l,torch:c})}rebuildSync(t,e){const n=this.key(t,e);this.meshPending.delete(n),this.meshPendingSince.delete(n);const s=this.meshQueue.findIndex(a=>a.cx===t&&a.cz===e);s>=0&&this.meshQueue.splice(s,1);const r=this.priorityQueue.findIndex(a=>a.cx===t&&a.cz===e);r>=0&&this.priorityQueue.splice(r,1),this.applyMesh(t,e,lS(this.world,t,e));const o=this.world.peek(t,e);o&&(o.dirty=!1)}collectNeighbors(t,e){const n=[],s=[];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){const a=this.world.peek(t+r,e+o);if(!a)return null;n.push(a.blocks.slice()),s.push(a.fluid.slice())}return{blocks:n,fluid:s}}rebuild(t,e){if(this.meshWorkers.length===0){this.rebuildSync(t,e);return}const n=this.key(t,e);if(this.meshPending.has(n)||(this.meshFails.get(n)??0)>=3)return;const s=this.collectNeighbors(t,e);if(!s)return;const r=this.nextMeshJobId++;this.meshPending.set(n,r),this.meshPendingSince.set(n,af());const o=[...s.blocks.map(l=>l.buffer),...s.fluid.map(l=>l.buffer)];this.meshWorkers[this.meshRr].postMessage({jobId:r,cx:t,cz:e,blocks:s.blocks,fluid:s.fluid},o),this.meshRr=(this.meshRr+1)%this.meshWorkers.length;const a=this.world.peek(t,e);a&&(a.dirty=!1)}retryStuckMeshes(t=8e3){const e=af();for(const[n,s]of this.meshPendingSince)e-s>t&&(this.meshPending.delete(n),this.meshPendingSince.delete(n),console.warn(`[meshgen] 区块 ${n} 网格化 ${Math.round((e-s)/1e3)}s 未回(worker 丢消息?) → 重试`))}update(t,e,n,s=2,r=0,o=0){this.retryStuckMeshes(),this.world.retryStuckGen();for(const l of[...this.meshes.keys()]){const[c,h]=l.split(",").map(Number);(Math.abs(c-t)>n+1||Math.abs(h-e)>n+1)&&this.unload(l)}for(let l=-n-1;l<=n+1;l++)for(let c=-n-1;c<=n+1;c++)this.world.request(t+c,e+l);const a=[];for(let l=-n;l<=n;l++)for(let c=-n;c<=n;c++){if(lf(c,l,this.fogCullR2))continue;const h=t+c,u=e+l,d=this.world.peek(h,u);d&&(!this.meshes.has(this.key(h,u))||d.dirty)&&a.push({cx:h,cz:u,d:c*c+l*l,ahead:mS(c,l,r,o)})}a.sort((l,c)=>l.ahead===c.ahead?l.d-c.d:l.ahead?-1:1);for(let l=0;l<Math.min(s,a.length);l++)this.rebuild(a[l].cx,a[l].cz);for(const[l,c]of this.meshes){const[h,u]=l.split(",").map(Number),d=!lf(h-t,u-e,this.fogCullR2);for(const p of[c.opaque,c.ice,c.cutout,c.water,c.portal,c.torch])p&&(p.visible=d)}}cullToView(t,e,n,s,r=0){if(!(Math.abs(r)>.42))for(const[o,a]of this.meshes){const[l,c]=o.split(",").map(Number);if(!dS(l*Dt+Dt/2,c*Dt+Dt/2,t,e,n,s))for(const h of[a.opaque,a.ice,a.cutout,a.water,a.portal,a.torch])h&&(h.visible=!1)}}remeshDirty(){var t;for(const e of[...this.meshes.keys()]){const[n,s]=e.split(",").map(Number);(t=this.world.peek(n,s))!=null&&t.dirty&&(this.editKeys.add(e),this.rebuild(n,s))}}}const oa=10;class AS{constructor(t){y(this,"mesh");y(this,"tex");this.tex=new wr().load("/mineworld/textures/crack.png"),this.tex.magFilter=de,this.tex.minFilter=de,this.tex.generateMipmaps=!1,this.tex.colorSpace=ae,this.tex.wrapS=xn,this.tex.repeat.set(1/oa,1);const e=new ye({map:this.tex,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});this.mesh=new Jt(new Qe(1.002,1.002,1.002),e),this.mesh.layers.set(co),this.mesh.renderOrder=2,this.mesh.visible=!1,t.add(this.mesh)}show(t,e,n,s){const r=Math.max(0,Math.min(oa-1,Math.floor(s*oa)));this.tex.offset.x=r/oa,this.mesh.position.set(t+.5,e+.5,n+.5),this.mesh.visible=!0}hide(){this.mesh.visible=!1}}const Ha=256,Lm=257,km=258,Im=259,Um=260,Nm=261,Fm=262,Om=263,RS=264,CS=265,PS=266,DS=267,LS=268,kS=269,IS=270,US=271,NS=272,FS=273,Bm=274,Nh=275,zm=276,Fh=277,Hm=278,Oh=279,Wm=280,Bh=281,Gm=282,Vm=283,Xm=284,qm=285,$m=286,Ym=287,Km=288,jm=289,Zm=290,js=291,Ji=292,Qm=293,Wa=294,OS=295,BS=296,zS=297,HS=298,WS=299,GS=300,VS=301;function Re(i,t,e,n){return{name:i,maxStack:1,food:null,tool:{kind:t,tier:e,speed:t==="sword"?1.5:t==="hoe"?1:n,maxDurability:e===1?59:e===2?131:e===3?250:1561}}}const Oi={[Ha]:{name:"apple",maxStack:64,food:{nutrition:4,saturationModifier:.3},tool:null},[Wa]:{name:"flint_and_steel",maxStack:1,food:null,tool:null},[OS]:{name:"nether_quartz",maxStack:64,food:null,tool:null},[BS]:{name:"diamond",maxStack:64,food:null,tool:null},[Lm]:{name:"stick",maxStack:64,food:null,tool:null},[km]:{name:"coal",maxStack:64,food:null,tool:null},[Im]:Re("wooden_pickaxe","pickaxe",1,2),[Um]:Re("wooden_axe","axe",1,2),[Nm]:Re("wooden_shovel","shovel",1,2),[Fm]:Re("wooden_sword","sword",1,2),[Om]:Re("wooden_hoe","hoe",1,2),[RS]:Re("stone_pickaxe","pickaxe",2,4),[CS]:Re("stone_axe","axe",2,4),[PS]:Re("stone_shovel","shovel",2,4),[DS]:Re("stone_sword","sword",2,4),[LS]:Re("stone_hoe","hoe",2,4),[kS]:Re("iron_pickaxe","pickaxe",3,6),[IS]:Re("iron_axe","axe",3,6),[US]:Re("iron_shovel","shovel",3,6),[NS]:Re("iron_sword","sword",3,6),[FS]:Re("iron_hoe","hoe",3,6),[Bm]:{name:"iron_ingot",maxStack:64,food:null,tool:null},[zS]:Re("diamond_pickaxe","pickaxe",4,8),[HS]:Re("diamond_axe","axe",4,8),[WS]:Re("diamond_shovel","shovel",4,8),[GS]:Re("diamond_sword","sword",4,8),[VS]:Re("diamond_hoe","hoe",4,8),[Nh]:{name:"raw_porkchop",maxStack:64,food:{nutrition:3,saturationModifier:.3},tool:null},[zm]:{name:"cooked_porkchop",maxStack:64,food:{nutrition:8,saturationModifier:.8},tool:null},[Fh]:{name:"raw_beef",maxStack:64,food:{nutrition:3,saturationModifier:.3},tool:null},[Hm]:{name:"cooked_beef",maxStack:64,food:{nutrition:8,saturationModifier:.8},tool:null},[Oh]:{name:"raw_mutton",maxStack:64,food:{nutrition:2,saturationModifier:.3},tool:null},[Wm]:{name:"cooked_mutton",maxStack:64,food:{nutrition:6,saturationModifier:.8},tool:null},[Bh]:{name:"raw_chicken",maxStack:64,food:{nutrition:2,saturationModifier:.3},tool:null},[Gm]:{name:"cooked_chicken",maxStack:64,food:{nutrition:6,saturationModifier:.6},tool:null},[Vm]:{name:"leather",maxStack:64,food:null,tool:null},[Xm]:{name:"wool",maxStack:64,food:null,tool:null},[qm]:{name:"feather",maxStack:64,food:null,tool:null},[$m]:{name:"egg",maxStack:16,food:null,tool:null},[Ym]:{name:"rotten_flesh",maxStack:64,food:{nutrition:4,saturationModifier:.1},tool:null},[Km]:{name:"bone",maxStack:64,food:null,tool:null},[jm]:{name:"flint",maxStack:64,food:null,tool:null},[Zm]:{name:"string",maxStack:64,food:null,tool:null},[js]:{name:"arrow",maxStack:64,food:null,tool:null},[Ji]:{name:"bow",maxStack:1,food:null,tool:null},[Qm]:{name:"gunpowder",maxStack:64,food:null,tool:null}},XS=Object.keys(Oi).map(Number);function Ca(i){return i in Oi}function dc(i){var t;return((t=Oi[i])==null?void 0:t.food)!=null}function qS(i){var t;return((t=Oi[i])==null?void 0:t.food)??null}function $S(i){var t;return((t=Oi[i])==null?void 0:t.name)??null}function as(i){var t;return((t=Oi[i])==null?void 0:t.maxStack)??64}function so(i){var e,n;const t=(n=(e=Oi[i])==null?void 0:e.tool)==null?void 0:n.maxDurability;return t!==void 0?t:i===Ji?384:i===Wa?64:null}function Pa(i){var t;return((t=Oi[i])==null?void 0:t.tool)??null}const YS={1:"stone",2:"dirt",3:"grass",4:"cobblestone",5:"sand",6:"oak_log",7:"oak_planks",8:"coal_ore",10:"oak_leaves",11:"crafting_table",12:"iron_ore",13:"furnace",14:"torch",15:"gravel",26:"sandstone",18:"obsidian",19:"netherrack",20:"soul_sand",21:"glowstone",22:"nether_quartz_ore",24:"bedrock",27:"cactus",28:"ice",30:"spruce_log",31:"spruce_leaves",32:"coal_block",33:"iron_block",34:"quartz_block",35:"diamond_ore",36:"diamond_block",[Ha]:"apple",257:"stick",258:"coal",259:"wooden_pickaxe",260:"wooden_axe",261:"wooden_shovel",262:"wooden_sword",263:"wooden_hoe",264:"stone_pickaxe",265:"stone_axe",266:"stone_shovel",267:"stone_sword",268:"stone_hoe",269:"iron_pickaxe",270:"iron_axe",271:"iron_shovel",272:"iron_sword",273:"iron_hoe",274:"iron_ingot",275:"raw_porkchop",276:"cooked_porkchop",277:"raw_beef",278:"cooked_beef",279:"raw_mutton",280:"cooked_mutton",281:"raw_chicken",282:"cooked_chicken",283:"leather",284:"wool",285:"feather",286:"egg",287:"rotten_flesh",288:"bone",289:"flint",290:"string",291:"arrow",292:"bow",293:"gunpowder",294:"flint_and_steel",295:"nether_quartz",296:"diamond",297:"diamond_pickaxe",298:"diamond_axe",299:"diamond_shovel",300:"diamond_sword",301:"diamond_hoe"},KS=new Set(["stone","dirt","grass","cobblestone","sand","oak_log","oak_planks","coal_ore","oak_leaves","crafting_table","iron_ore","furnace","gravel","sandstone","obsidian","netherrack","soul_sand","glowstone","nether_quartz_ore","bedrock","cactus","ice","spruce_log","spruce_leaves","coal_block","iron_block","quartz_block","diamond_ore","diamond_block"]);let Jm="classic";function hf(i){Jm=i}const jS={1:"石头",2:"泥土",3:"草方块",4:"圆石",5:"沙子",6:"原木",7:"木板",8:"煤矿",10:"树叶",11:"工作台",12:"铁矿",13:"熔炉",14:"火把",15:"砂砾",16:"草丛",17:"高草丛",18:"黑曜石",19:"地狱岩",20:"灵魂沙",21:"荧石",22:"下界石英矿",24:"基岩",26:"沙石",27:"仙人掌",28:"冰",29:"雪层",30:"云杉原木",31:"云杉树叶",32:"煤炭块",33:"铁块",34:"石英块",35:"钻石矿石",36:"钻石块",256:"苹果",257:"木棍",258:"煤炭",259:"木镐",260:"木斧",261:"木锹",262:"木剑",263:"木锄",264:"石镐",265:"石斧",266:"石锹",267:"石剑",268:"石锄",269:"铁镐",270:"铁斧",271:"铁锹",272:"铁剑",273:"铁锄",274:"铁锭",275:"生猪排",276:"熟猪排",277:"生牛肉",278:"牛排",279:"生羊肉",280:"熟羊肉",281:"生鸡肉",282:"熟鸡肉",283:"皮革",284:"羊毛",285:"羽毛",286:"鸡蛋",287:"腐肉",288:"骨头",289:"燧石",290:"线",291:"箭",292:"弓",293:"火药",294:"打火石",295:"下界石英",296:"钻石",297:"钻石镐",298:"钻石斧",299:"钻石锹",300:"钻石剑",301:"钻石锄"},ls=i=>{const t=YS[i];if(!t)return null;const e=Jm==="classic"&&KS.has(t)?"icons_classic":"icons";return Sr(`textures/${e}/${t}.png`)},jr=i=>jS[i]??`#${i}`,sr=.25,ZS=22,uf=sr/2;function fn(i,t,e,n,s=Math.random,r=1,o){return{id:i,count:r,dur:o,x:t+.5,y:e+.5,z:n+.5,vx:(s()-.5)*2,vy:2.5,vz:(s()-.5)*2,age:0}}function QS(i,t,e=.75){const n=e*e;for(let s=0;s<i.length;s++){const r=i[s],o=t(r.id);if(!(r.count>=o))for(let a=i.length-1;a>s;a--){const l=i[a];if(l.id!==r.id||r.dur!==void 0||l.dur!==void 0)continue;const c=r.x-l.x,h=r.y-l.y,u=r.z-l.z;if(c*c+h*h+u*u>n)continue;const d=Math.min(o-r.count,l.count);if(!(d<=0)&&(r.count+=d,l.count-=d,l.age<r.age&&(r.age=l.age),l.count<=0&&i.splice(a,1),r.count>=o))break}}}function JS(i,t,e){i.age+=e,i.vy-=ZS*e;const n=i.x+i.vx*e,s=i.z+i.vz*e;let r=i.y+i.vy*e;const o=r-uf;return i.vy<=0&&t.isSolid(Math.floor(n),Math.floor(o),Math.floor(s))&&(r=Math.floor(o)+1+uf,i.vy=0,i.vx*=.6,i.vz*=.6),i.x=n,i.y=r,i.z=s,i}function tb(i,t,e,n){if(i.age<.3)return!1;const s=i.x-t,r=i.y-e,o=i.z-n;return s*s+r*r+o*o<1.4*1.4}const Wr=4,df=10,eb=16,aa=.5/(eb*Wr);function nb(i){const t=new Qe(sr,sr,sr),e=Ie[i].faces,n=t.attributes.uv;for(let s=0;s<6;s++){const r=e[s],o=r%Wr,a=Math.floor(r/Wr),l=o/Wr+aa,c=(o+1)/Wr-aa,h=1-(a+1)/df+aa,u=1-a/df-aa,d=s*4;n.setXY(d+0,l,u),n.setXY(d+1,c,u),n.setXY(d+2,l,h),n.setXY(d+3,c,h)}return n.needsUpdate=!0,t}class ib{constructor(t,e){y(this,"meshes",new Map);y(this,"geoCache",new Map);y(this,"mat");y(this,"itemMats",new Map);this.scene=t,this.mat=new ye({map:e})}setAtlas(t){this.mat.map=t,this.mat.needsUpdate=!0;for(const[e,n]of this.meshes)Ca(e.id)||(n.material.map=t,n.material.needsUpdate=!0)}itemMat(t){let e=this.itemMats.get(t);if(!e){const n=new wr().load(ls(t)??Sr("textures/icons/apple.png"));n.magFilter=de,n.minFilter=de,n.colorSpace=ae,e=new ye({map:n,transparent:!0,alphaTest:.5,side:je}),this.itemMats.set(t,e)}return e}geo(t){let e=this.geoCache.get(t);return e||(e=Ca(t)?new ln(sr,sr):nb(t),this.geoCache.set(t,e)),e}sync(t,e){const n=new Set(t);for(const[s,r]of this.meshes)n.has(s)||(this.scene.remove(r),r.material.dispose(),this.meshes.delete(s));for(const s of t){let r=this.meshes.get(s);if(r||(r=new Jt(this.geo(s.id),(Ca(s.id)?this.itemMat(s.id):this.mat).clone()),this.scene.add(r),this.meshes.set(s,r)),e){const a=e(s.x,s.y+.5,s.z);r.material.color.setScalar(a)}const o=.1+Math.sin(s.age*3)*.06;r.position.set(s.x,s.y+o,s.z),r.rotation.y=s.age*1.8}}clear(){for(const[,t]of this.meshes)this.scene.remove(t),t.material.dispose();this.meshes.clear()}}function sb(i){var e;const t=((e=Ie[i])==null?void 0:e.name)??"";return["obsidian"].includes(t)?{roughness:.38,specularIntensity:.62}:["iron_block","diamond_block","quartz_block"].includes(t)?{roughness:.54,specularIntensity:.5}:t.includes("log")||["oak_planks","crafting_table"].includes(t)?{roughness:.8,specularIntensity:.34}:{roughness:.91,specularIntensity:.26}}function rb(i){return i===null||i<=0?"none":i===ns?ls(i)?"sprite":"none":Ie[i]?"block":ls(i)?"sprite":"none"}const fc=.8;function ob(i){const t=Math.PI/180,e=Math.sin(Math.sqrt(Math.max(0,i))*Math.PI),n=Math.sin(i*i*Math.PI);return{tx:-.4*e*fc,ty:.2*Math.sin(Math.sqrt(Math.max(0,i))*Math.PI*2)*fc,tz:-.2*Math.sin(i*Math.PI)*fc,ry1:(45+n*-20)*t,rz:e*-20*t,rx:e*-80*t,ry2:-45*t}}const Gr=4,ff=10,ab=16,la=.01/(ab*Gr),rr=[.6,.6,1,.5,.8,.8],lb=.3,cb=new U(1,0,0),hb=new U(0,1,0);function ub(i,t,e,n){const s=new Qe(i,t,e),r=new St(n),o=[];for(let a=0;a<6;a++)for(let l=0;l<4;l++)o.push(r.r*rr[a],r.g*rr[a],r.b*rr[a]);return s.setAttribute("color",new ke(o,3)),s}function db(i,t){const e=new Qe(t,t,t),n=Ie[i].faces,s=e.attributes.uv,r=[];for(let o=0;o<6;o++){const a=n[o],l=a%Gr,c=Math.floor(a/Gr),h=l/Gr+la,u=(l+1)/Gr-la,d=1-(c+1)/ff+la,p=1-c/ff-la,g=o*4;s.setXY(g+0,h,p),s.setXY(g+1,u,p),s.setXY(g+2,h,d),s.setXY(g+3,u,d);for(let v=0;v<4;v++)r.push(rr[o],rr[o],rr[o])}return s.needsUpdate=!0,e.setAttribute("color",new ke(r,3)),e}class fb{constructor(t){y(this,"scene",new pr);y(this,"camera",new Ke(70,1,.01,10));y(this,"atlas");y(this,"root",new vn);y(this,"arm");y(this,"item",null);y(this,"itemId",null);y(this,"spriteTex",new Map);y(this,"swingT",0);y(this,"wantSwing",!1);y(this,"bobPhase",0);y(this,"eating",!1);y(this,"eatT",0);y(this,"hurtT",0);y(this,"bright",1);y(this,"underwater",!1);y(this,"lightingQuality","off");y(this,"skyLight",new k1(14478591,1581105,0));y(this,"skyFill",new Xd(14478591,0));y(this,"blockLight",new Xd(16747834,0));y(this,"sunLight",new im(16777215,0));y(this,"invViewQ",new Ni);y(this,"viewSun",new U);y(this,"viewUp",new U);y(this,"coolSky",new St().setRGB(.68,.82,1));y(this,"lowSun",new St().setRGB(1.38,.58,.16));y(this,"noonSun",new St().setRGB(1.08,1,.88));y(this,"underwaterTint",new St().setRGB(.62,.84,.96));y(this,"neutralTint",new St(1,1,1));this.atlas=t,this.arm=new Jt(ub(.14,.5,.14,15249530),new ye({vertexColors:!0})),this.arm.position.set(0,-.22,0),this.root.add(this.arm),this.root.position.set(.5,-.45,-.7),this.root.rotation.set(.2,-.5,.45),this.scene.add(this.root),this.sunLight.castShadow=!1,this.scene.add(this.skyLight,this.skyFill,this.blockLight,this.sunLight,this.sunLight.target)}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}itemTexture(t){const e=this.spriteTex.get(t);if(e)return e;const n=ls(t);if(!n)return null;const s=new wr().load(n);return s.magFilter=de,s.minFilter=de,s.generateMipmaps=!1,s.colorSpace=ae,this.spriteTex.set(t,s),s}setBrightness(t){this.bright+=(t-this.bright)*.12,this.applyViewTint()}setUnderwater(t){t!==this.underwater&&(this.underwater=t,this.applyViewTint())}setLightingQuality(t){if(t===this.lightingQuality)return;this.lightingQuality=t,t==="off"&&(this.skyLight.intensity=0,this.skyFill.intensity=0,this.blockLight.intensity=0,this.sunLight.intensity=0);const e=this.itemId;this.itemId=null,this.setHeld(e)}setLighting(t){if(this.lightingQuality==="off")return;const e=c=>{const h=si.clamp(c,0,15)/15;return h/(4-3*h)},n=t.sunEnabled?e(t.skyLevel-t.skyDarken):0,s=e(t.blockLevel),r=(c,h)=>c+(h-c)*.14;this.skyLight.color.copy(t.skyColor).lerp(this.coolSky,.25),this.underwater&&this.skyLight.color.multiply(this.underwaterTint),this.skyLight.groundColor.setRGB(.25,.3,.4),this.skyLight.intensity=r(this.skyLight.intensity,Math.max(.035,n*1.05)),this.skyFill.color.copy(this.skyLight.color),this.skyFill.intensity=r(this.skyFill.intensity,Math.max(.012,n*.32)),this.blockLight.color.setRGB(1,.56,.25),this.blockLight.intensity=r(this.blockLight.intensity,s*.62),this.invViewQ.copy(t.cameraQuaternion).invert(),this.viewSun.copy(t.sunDirectionWorld).applyQuaternion(this.invViewQ).normalize(),this.viewUp.set(0,1,0).applyQuaternion(this.invViewQ).normalize(),this.sunLight.position.copy(this.viewSun).multiplyScalar(5),this.sunLight.target.position.set(0,0,0),this.skyLight.position.copy(this.viewUp);const o=si.clamp(t.sunDirectionWorld.y*3,0,1);this.sunLight.color.copy(this.lowSun).lerp(this.noonSun,o),this.underwater&&this.sunLight.color.multiply(this.underwaterTint);const a=t.sunEnabled?si.smoothstep(t.skyLevel,11,15):0,l=si.smoothstep(t.sunDirectionWorld.y,.02,.2);this.sunLight.intensity=r(this.sunLight.intensity,a*l*1.55*(this.underwater?.62:1))}setHeld(t){if(t===this.itemId)return;if(this.itemId=t,this.item){if(this.root.remove(this.item),this.item.geometry.dispose(),Array.isArray(this.item.material))for(const n of this.item.material)n.dispose();else this.item.material.dispose();this.item=null}const e=rb(t);if(e==="block"&&t!==null){const n=sb(t),s=this.lightingQuality==="off"?new ye({map:this.atlas,vertexColors:!0}):new Hd({map:this.atlas,roughness:n.roughness,metalness:0,ior:1.35,specularIntensity:n.specularIntensity});this.item=new Jt(db(t,.32),s),this.item.position.set(-.02,.16,.04),this.item.rotation.set(-.1,.6,.1),this.root.add(this.item)}else if(e==="sprite"&&t!==null){const n=this.itemTexture(t);n&&(this.item=new Jt(new ln(.34,.34),new ye({map:n,transparent:!0,alphaTest:.5,side:je})),this.item.position.set(.04,.2,.04),this.item.rotation.set(0,-.35,.35),this.root.add(this.item))}this.applyViewTint()}applyViewTint(){const t=this.underwater?this.underwaterTint:this.neutralTint;this.arm.material.color.copy(t).multiplyScalar(this.bright),!(!this.item||Array.isArray(this.item.material))&&(this.item.material instanceof Hd?this.item.material.color.copy(t):this.item.material instanceof ye&&this.item.material.color.copy(t).multiplyScalar(this.bright))}swing(){this.wantSwing=!0}hurtShake(){this.hurtT=1}setAtlas(t){this.atlas=t;const e=this.itemId;this.itemId=null,this.setHeld(e)}setEating(t){this.eating=t,t||(this.eatT=0)}update(t,e){this.wantSwing&&this.swingT===0&&(this.swingT=1e-4),this.swingT>0&&(this.swingT+=t/lb,this.swingT>=1&&(this.swingT=this.wantSwing?1e-4:0)),this.wantSwing=!1,this.bobPhase+=t*e*7;const n=Math.cos(this.bobPhase)*.012*Math.min(1,e),s=Math.abs(Math.sin(this.bobPhase))*.012*Math.min(1,e),r=ob(this.swingT);if(this.root.position.set(.42+n+r.tx,-.28+s+r.ty,-.72+r.tz),this.root.rotation.set(.1,-.5,.4),this.root.rotateOnWorldAxis(cb,r.rx),this.root.rotateOnWorldAxis(hb,r.rz),this.eating){this.eatT+=t;const o=Math.sin(this.eatT*30);this.root.position.x+=-.18+o*.015,this.root.position.y+=.16+o*.02,this.root.position.z+=.18,this.root.rotateX(.4+o*.12),this.root.rotateZ(-.25)}if(this.hurtT>0){this.hurtT=Math.max(0,this.hurtT-t*4);const o=this.hurtT*this.hurtT,a=Math.sin(this.hurtT*45);this.root.position.x+=a*.05*o,this.root.position.y+=-.06*o,this.root.rotateZ(a*.35*o)}}}const pf=.6,Ga=.6,cs=1.8,Jn=1.62,pb=1.8,mb=1.54,gb=.3,vb=.2,Va=.08,Xa=.98,ro=.42,mf=4.317/20,_b=5.612/20,xb=.42,yb=.84,gf=.42,ca=Ga/2;function qa(i,t,e=cs){const s=Math.floor(i.x-ca+1e-6),r=Math.ceil(i.x+ca-1e-6)-1,o=Math.floor(i.y+1e-6),a=Math.ceil(i.y+e-1e-6)-1,l=Math.floor(i.z-ca+1e-6),c=Math.ceil(i.z+ca-1e-6)-1;for(let h=o;h<=a;h++)for(let u=s;u<=r;u++)for(let d=l;d<=c;d++)if(t.isSolid(u,h,d))return!0;return!1}function Bs(i,t,e,n,s=cs){if(e===0)return!1;const r=Math.sign(e),o=.2;let a=Math.abs(e);for(;a>1e-9;){const l=Math.min(a,o)*r;if(a-=Math.abs(l),i[t]+=l,qa(i,n,s)){i[t]-=l;let c=l/2;for(let h=0;h<24&&Math.abs(c)>1e-5;h++)i[t]+=c,qa(i,n,s)&&(i[t]-=c),c/=2;return!0}}return!1}function vf(i){const t=Math.cos(i.yaw),e=Math.sin(i.yaw);let n=i.forward*t-i.right*e,s=i.forward*e+i.right*t;const r=Math.hypot(n,s);return r>1e-9?(n/=r,s/=r):(n=0,s=0),{x:n,z:s}}function Fr(i,t,e=cs){return qa(i,t,e)?!1:qa({x:i.x,y:i.y-.06,z:i.z},t,e)}function _f(i,t,e){var R,A,P;const n={...i.pos},s={...i.vel};if(t.fly){const I=vf(t),b=t.sprint?yb:xb;return s.x=I.x*b,s.z=I.z*b,s.y=(t.flyUp?gf:0)-(t.flyDown?gf:0),Bs(n,"y",s.y,e)&&(s.y=0),Bs(n,"x",s.x,e)&&(s.x=0),Bs(n,"z",s.z,e)&&(s.z=0),{pos:n,vel:s,onGround:Fr(n,e),kbx:0,kbz:0}}const r=t.crouch===!0,o=r?pb:cs,a=Fr(n,e,o),l=((R=e.isWater)==null?void 0:R.call(e,Math.floor(n.x),Math.floor(n.y+.1),Math.floor(n.z)))??!1;let c=!1;t.jump&&(a||l)&&(s.y=l?.5:ro,c=!0);const h=vf(t);let u=l?mf*.7:t.sprint&&!r?_b:mf;r&&(u*=gb),t.slow&&(u*=vb);const d=i.kbx??0,p=i.kbz??0,g=Math.hypot(h.x,h.z)>1e-9;if(!a&&!l)s.x=s.x*.91+h.x*u*.09+d,s.z=s.z*.91+h.z*u*.09+p;else if(g||l){let I=u;if(g&&a&&!l){const b=Math.floor(n.x),S=Math.floor(n.y-.1),D=Math.floor(n.z);(((A=e.getBlock)==null?void 0:A.call(e,b,S,D))??0)===fm&&(I*=.4)}s.x=h.x*I+d,s.z=h.z*I+p}else{const I=Math.floor(n.x),b=Math.floor(n.y-.1),S=Math.floor(n.z),D=((P=e.getBlock)==null?void 0:P.call(e,I,b,S))??0,X=dw(D);s.x=s.x*X+d,s.z=s.z*X+p}Bs(n,"y",s.y,e,o)&&(s.y=0);const v=r&&a&&s.y<=0,m=n.x;Bs(n,"x",s.x,e,o)&&(s.x=0),v&&!Fr(n,e,o)&&(n.x=m,s.x=0);const f=n.z;Bs(n,"z",s.z,e,o)&&(s.z=0),v&&!Fr(n,e,o)&&(n.z=f,s.z=0);const x=Fr(n,e,o);c?s.y=(s.y-Va)*Xa:l?t.swimUp?s.y=.16:s.y=Math.max(s.y*.8-.02,-.15):x?s.y=0:s.y=(s.y-Va)*Xa;const _=s.x===0?0:d*pf,M=s.z===0?0:p*pf;return{pos:n,vel:s,onGround:x,kbx:Math.abs(_)<.005?0:_,kbz:Math.abs(M)<.005?0:M}}const t0=.05,pc=.99,Mb=.25;function xf(i,t,e,n,s,r,o,a,l){const c=Math.hypot(n,s,r)||1;return{x:i,y:t,z:e,vx:n/c*o,vy:s/c*o,vz:r/c*o,age:0,stuck:!1,fromPlayer:a,damage:l}}function wb(i,t){if(i.age++,i.stuck)return i;i.vy-=t0,i.vx*=pc,i.vy*=pc,i.vz*=pc;const e=Math.hypot(i.vx,i.vy,i.vz),n=Math.max(1,Math.ceil(e/Mb)),s=i.vx/n,r=i.vy/n,o=i.vz/n;for(let a=0;a<n;a++){const l=i.x+s,c=i.y+r,h=i.z+o;if(t.isSolid(Math.floor(l),Math.floor(c),Math.floor(h)))return i.stuck=!0,i.vx=i.vy=i.vz=0,i;i.x=l,i.y=c,i.z=h}return i}const Sb=new U(0,0,1);class bb{constructor(t){y(this,"meshes",new Map);y(this,"geoShaft",new Qe(.05,.05,.5));y(this,"geoHead",new Qe(.09,.09,.14));y(this,"geoFletch",new Qe(.16,.02,.12));y(this,"matShaft",new ye({color:7031339}));y(this,"matHead",new ye({color:10132130}));y(this,"matFletch",new ye({color:15263980}));y(this,"tmp",new U);this.scene=t}make(){const t=new vn;t.add(new Jt(this.geoShaft,this.matShaft));const e=new Jt(this.geoHead,this.matHead);e.position.z=.3,t.add(e);const n=new Jt(this.geoFletch,this.matFletch);n.position.z=-.22,t.add(n);const s=new Jt(this.geoFletch,this.matFletch);return s.position.z=-.22,s.rotation.z=Math.PI/2,t.add(s),t}sync(t){const e=new Set(t);for(const[n,s]of this.meshes)e.has(n)||(this.scene.remove(s),this.meshes.delete(n));for(const n of t){let s=this.meshes.get(n);s||(s=this.make(),this.scene.add(s),this.meshes.set(n,s)),s.position.set(n.x,n.y,n.z);const r=Math.hypot(n.vx,n.vy,n.vz);r>1e-4&&(this.tmp.set(n.vx/r,n.vy/r,n.vz/r),s.quaternion.setFromUnitVectors(Sb,this.tmp))}}clear(){for(const[,t]of this.meshes)this.scene.remove(t);this.meshes.clear()}}function $a(i,t,e,n){const r=Math.floor(i.x-t+1e-6),o=Math.ceil(i.x+t-1e-6)-1,a=Math.floor(i.y+1e-6),l=Math.ceil(i.y+e-1e-6)-1,c=Math.floor(i.z-t+1e-6),h=Math.ceil(i.z+t-1e-6)-1;for(let u=a;u<=l;u++)for(let d=r;d<=o;d++)for(let p=c;p<=h;p++)if(n.isSolid(d,u,p))return!0;return!1}function mc(i,t,e,n,s,r){if(e===0)return!1;const o=Math.sign(e),a=.2;let l=Math.abs(e);for(;l>1e-9;){const c=Math.min(l,a)*o;if(l-=Math.abs(c),i[t]+=c,$a(i,n,s,r)){i[t]-=c;let h=c/2;for(let u=0;u<24&&Math.abs(h)>1e-5;u++)i[t]+=h,$a(i,n,s,r)&&(i[t]-=h),h/=2;return!0}}return!1}function Tb(i,t,e,n){return $a(i,t,e,n)?!1:$a({x:i.x,y:i.y-.06,z:i.z},t,e,n)}function e0(i,t,e,n,s){const r=t/2,o={...i},a={...n};return mc(o,"y",a.y,r,e,s)&&(a.y=0),mc(o,"x",a.x,r,e,s)&&(a.x=0),mc(o,"z",a.z,r,e,s)&&(a.z=0),{pos:o,vel:a,onGround:Tb(o,r,e,s)}}const qn={pig:{hp:10,width:.9,height:.9,moveSpeed:.09,fallImmune:!1},cow:{hp:10,width:.9,height:1.4,moveSpeed:.08,fallImmune:!1},sheep:{hp:8,width:.9,height:1.3,moveSpeed:.08,fallImmune:!1},chicken:{hp:4,width:.4,height:.7,moveSpeed:.07,fallImmune:!0},zombie:{hp:20,width:.6,height:1.9,moveSpeed:.13,fallImmune:!1,hostile:!0,attack:3,sense:35},skeleton:{hp:20,width:.6,height:1.95,moveSpeed:.15,fallImmune:!1,hostile:!0,attack:2,sense:16,ranged:!0},creeper:{hp:20,width:.6,height:1.7,moveSpeed:.15,fallImmune:!1,hostile:!0,attack:43,sense:16,explosive:!0,sunImmune:!0},husk:{hp:20,width:.6,height:1.95,moveSpeed:.13,fallImmune:!1,hostile:!0,attack:3,sense:35,sunImmune:!0}},Eb=i=>qn[i].hostile===!0,Ab=1.8,Rb=10,yf=.4,Cb=.36,Mf=-.05,Pb=.06,wf=.85,Db=.12;function ul(i,t,e,n){return{kind:i,pos:{x:t,y:e,z:n},vel:{x:0,y:0,z:0},yaw:0,onGround:!1,health:qn[i].hp,hurtCooldown:0,ai:{state:"idle",timer:20,target:null},eggTimer:i==="chicken"?6e3:0,atkCd:0,fuse:0}}function n0(i){return{...i,pos:{...i.pos},vel:{...i.vel},ai:{...i.ai,target:i.ai.target?{...i.ai.target}:null}}}function Lb(i,t){return{x:i.x+(t()*2-1)*8,y:i.y,z:i.z+(t()*2-1)*8}}const gc=i=>20+Math.floor(i()*40);function kb(i,t,e){var v,m;const n=qn[i.kind],s=n0(i),r=[];s.hurtCooldown>0&&s.hurtCooldown--,s.ai.timer--;let o=0,a=0,l=n.moveSpeed;if(s.ai.state==="idle")s.ai.timer<=0&&(s.ai.state="wander",s.ai.target=Lb(s.pos,e),s.ai.timer=40+Math.floor(e()*60));else if(s.ai.state==="wander")if(!s.ai.target||s.ai.timer<=0)s.ai.state="idle",s.ai.target=null,s.ai.timer=gc(e);else{const f=s.ai.target.x-s.pos.x,x=s.ai.target.z-s.pos.z,_=Math.hypot(f,x);_<.7?(s.ai.state="idle",s.ai.target=null,s.ai.timer=gc(e)):(o=f/_,a=x/_)}else l=n.moveSpeed*Ab,s.ai.timer<=0?(s.ai.state="idle",s.ai.target=null,s.ai.timer=gc(e)):(o=Math.cos(s.yaw),a=Math.sin(s.yaw));if((o!==0||a!==0)&&s.onGround){const f=.5+n.width/2,x=Math.floor(s.pos.x+o*f),_=Math.floor(s.pos.z+a*f),M=Math.floor(s.pos.y);!t.isSolid(x,M-1,_)&&!t.isSolid(x,M-2,_)&&(o=0,a=0,s.ai.target=null)}let c=!1;if(o!==0||a!==0){const f=Math.hypot(o,a)||1,x=Math.floor(s.pos.x+o/f*(n.width/2+.3)),_=Math.floor(s.pos.z+a/f*(n.width/2+.3)),M=Math.floor(s.pos.y);t.isSolid(x,M,_)&&!t.isSolid(x,M+1,_)&&(c=!0)}const h=c&&s.onGround,u=(s.kbx??0)*.8,d=(s.kbz??0)*.8;if(s.kbx=Math.abs(u)<.01?0:u,s.kbz=Math.abs(d)<.01?0:d,s.vel.x=o*l+(s.kbx??0),s.vel.z=a*l+(s.kbz??0),((v=t.isWater)==null?void 0:v.call(t,Math.floor(s.pos.x),Math.floor(s.pos.y),Math.floor(s.pos.z)))??!1){const f=((m=t.isWater)==null?void 0:m.call(t,Math.floor(s.pos.x),Math.floor(s.pos.y)+1,Math.floor(s.pos.z)))??!1;c?s.vel.y=ro:s.vel.y=f?Math.min((s.vel.y+Pb)*wf,Db):Math.min(s.vel.y*wf,0)}else s.vel.y=(s.vel.y-Va)*Xa,h&&(s.vel.y=ro),n.fallImmune&&s.vel.y<Mf&&(s.vel.y=Mf);const g=e0(s.pos,n.width,n.height,s.vel,t);return s.pos=g.pos,s.vel=g.vel,s.onGround=g.onGround,s.onGround&&s.vel.y<0&&(s.vel.y=0),(Math.abs(s.vel.x)>1e-4||Math.abs(s.vel.z)>1e-4)&&(s.yaw=Math.atan2(s.vel.z,s.vel.x)),s.kind==="chicken"&&(s.eggTimer--,s.eggTimer<=0&&(r.push({kind:"layEgg",pos:{...s.pos}}),s.eggTimer=6e3+Math.floor(e()*6001))),{mob:s,events:r}}function vc(i,t,e,n){const s=n0(i),r=[];if(s.hurtCooldown>0)return{mob:s,events:r};s.health-=t,s.hurtCooldown=Rb,r.push({kind:"hurt"});const o=Math.hypot(e.x,e.z)||1;return s.kbx=e.x/o*yf,s.kbz=e.z/o*yf,s.vel.x=s.kbx,s.vel.z=s.kbz,s.vel.y=Cb,s.onGround=!1,s.yaw=Math.atan2(s.vel.z,s.vel.x),qn[s.kind].hostile?(s.ai.state="chase",s.ai.timer=0,s.aggro=300):(s.ai.state="panic",s.ai.target=null,s.ai.timer=30+Math.floor(n()*10)),s.health<=0&&(r.push({kind:"drops",items:i0(s.kind,n),pos:{...s.pos}}),r.push({kind:"death",pos:{...s.pos}})),{mob:s,events:r}}function i0(i,t){switch(i){case"pig":return[{id:Nh,count:1+Math.floor(t()*3)}];case"cow":{const e=[{id:Fh,count:1+Math.floor(t()*3)}],n=Math.floor(t()*3);return n>0&&e.push({id:Vm,count:n}),e}case"sheep":return[{id:Xm,count:1},{id:Oh,count:1+Math.floor(t()*2)}];case"chicken":{const e=[{id:Bh,count:1}],n=Math.floor(t()*3);return n>0&&e.push({id:qm,count:n}),e}case"zombie":case"husk":{const e=Math.floor(t()*3);return e>0?[{id:Ym,count:e}]:[]}case"skeleton":{const e=[],n=Math.floor(t()*3);n>0&&e.push({id:Km,count:n});const s=Math.floor(t()*3);s>0&&e.push({id:Zm,count:s});const r=Math.floor(t()*3);return r>0&&e.push({id:js,count:r}),e}case"creeper":{const e=Math.floor(t()*3);return e>0?[{id:Qm,count:e}]:[]}}}const s0=1.9,Ib=1,Ub=1.7,Nb=18,Fb=.05,Ob=.6,Bb=15,zb=5,Hb=10,Wb=35,Gb=3,Vb=30,Xb=3,qb=.06,Sf=.85,$b=.12;function _c(i,t,e){const n=e.x-t.x,s=e.y-t.y,r=e.z-t.z,o=Math.ceil(Math.hypot(n,s,r)/.5);for(let a=1;a<o;a++){const l=a/o;if(i.isSolid(Math.floor(t.x+n*l),Math.floor(t.y+s*l),Math.floor(t.z+r*l)))return!1}return!0}function Yb(i){return{...i,pos:{...i.pos},vel:{...i.vel},ai:{...i.ai,target:i.ai.target?{...i.ai.target}:null}}}function Kb(i,t,e,n,s){var P,I;const r=qn[i.kind],o=Yb(i),a=[];o.hurtCooldown>0&&(o.hurtCooldown-=Ib),o.atkCd>0&&o.atkCd--;let l=0,c=0,h=r.moveSpeed;const u=Math.max(0,(o.aggro??0)-1);o.aggro=u;const d=u>0?64:r.sense??16;let p=1/0,g=null;if(n){const b=n.x-o.pos.x,S=n.z-o.pos.z;if(p=Math.hypot(b,n.y-o.pos.y,S),p<=d&&p>.001){o.ai.state="chase",o.ai.target={...n};const D=b/p,X=S/p;r.ranged?(g=n,p<zb?(l=-D,c=-X):p>Hb&&(l=D,c=X)):(l=D,c=X)}}if(l===0&&c===0)if(h=r.moveSpeed*Ob,o.ai.timer--,o.ai.state==="chase")o.ai.state="idle",o.ai.target=null,o.ai.timer=20+Math.floor(e()*40);else if(o.ai.state==="wander"&&o.ai.target){const b=o.ai.target.x-o.pos.x,S=o.ai.target.z-o.pos.z,D=Math.hypot(b,S);D<.7||o.ai.timer<=0?(o.ai.state="idle",o.ai.target=null,o.ai.timer=20+Math.floor(e()*40)):(l=b/D,c=S/D)}else o.ai.timer<=0&&(o.ai.state="wander",o.ai.target={x:o.pos.x+(e()*2-1)*8,y:o.pos.y,z:o.pos.z+(e()*2-1)*8},o.ai.timer=40+Math.floor(e()*60));const v={x:o.pos.x,y:o.pos.y+r.height*.85,z:o.pos.z},m=n?{x:n.x,y:n.y+1,z:n.z}:null;if(r.ranged){if(m&&p<=Bb&&o.atkCd<=0&&_c(t,v,m)){const b=p/s0,S=.5*t0*b*b*1.15,D=m.x-v.x,X=m.y+S-v.y,V=m.z-v.z,tt=Math.hypot(D,X,V)||1;a.push({kind:"shootArrow",from:v,dir:{x:D/tt,y:X/tt,z:V/tt},damage:1+Math.floor(e()*4)}),o.atkCd=Wb}}else if(r.explosive){const b=o.fuse>0?7:Gb;if(m&&p<=b&&_c(t,v,m)){if(o.fuse++,l=0,c=0,o.fuse>=Vb)return a.push({kind:"explode",pos:{...o.pos},radius:Xb,damage:r.attack??43}),a.push({kind:"death",pos:{...o.pos}}),{mob:o,events:a}}else o.fuse=Math.max(0,o.fuse-1)}else m&&p<=Ub&&o.atkCd<=0&&_c(t,v,m)&&(a.push({kind:"attackPlayer",damage:r.attack??2}),o.atkCd=Nb);if((l!==0||c!==0)&&o.onGround){const b=.5+r.width/2,S=Math.floor(o.pos.x+l*b),D=Math.floor(o.pos.z+c*b),X=Math.floor(o.pos.y);!t.isSolid(S,X-1,D)&&!t.isSolid(S,X-2,D)&&(l=0,c=0,o.ai.target=null)}let f=!1;if(l!==0||c!==0){const b=Math.hypot(l,c)||1,S=Math.floor(o.pos.x+l/b*(r.width/2+.3)),D=Math.floor(o.pos.z+c/b*(r.width/2+.3)),X=Math.floor(o.pos.y);t.isSolid(S,X,D)&&!t.isSolid(S,X+1,D)&&(f=!0)}const x=f&&o.onGround,_=(o.kbx??0)*.8,M=(o.kbz??0)*.8;if(o.kbx=Math.abs(_)<.01?0:_,o.kbz=Math.abs(M)<.01?0:M,o.vel.x=l*h+(o.kbx??0),o.vel.z=c*h+(o.kbz??0),((P=t.isWater)==null?void 0:P.call(t,Math.floor(o.pos.x),Math.floor(o.pos.y),Math.floor(o.pos.z)))??!1){const b=((I=t.isWater)==null?void 0:I.call(t,Math.floor(o.pos.x),Math.floor(o.pos.y)+1,Math.floor(o.pos.z)))??!1;f?o.vel.y=ro:o.vel.y=b?Math.min((o.vel.y+qb)*Sf,$b):Math.min(o.vel.y*Sf,0)}else o.vel.y=(o.vel.y-Va)*Xa,x&&(o.vel.y=ro);const A=e0(o.pos,r.width,r.height,o.vel,t);return o.pos=A.pos,o.vel=A.vel,o.onGround=A.onGround,o.onGround&&o.vel.y<0&&(o.vel.y=0),(Math.abs(o.vel.x)>1e-4||Math.abs(o.vel.z)>1e-4)&&(o.yaw=Math.atan2(o.vel.z,o.vel.x)),g&&(o.yaw=Math.atan2(g.z-o.pos.z,g.x-o.pos.x)),s&&!r.sunImmune&&(o.health-=Fb),o.health<=0&&(a.push({kind:"drops",items:i0(o.kind,e),pos:{...o.pos}}),a.push({kind:"death",pos:{...o.pos}})),{mob:o,events:a}}const jb=14;function Zb(i,t){return t<.4?i==="desert"?"husk":"zombie":t<.75?"skeleton":"creeper"}function Qb(i,t,e,n){return!(i.getBlock(t,e-1,n)!==hm||xe(i.getBlock(t,e,n))||xe(i.getBlock(t,e+1,n)))}function bf(i,t,e,n,s,r,o=24,a=44,l=null,c=Math.PI){for(let h=0;h<12;h++){const u=l===null?n()*Math.PI*2:l+(n()*2-1)*c,d=o+n()*(a-o),p=Math.floor(t+Math.cos(u)*d),g=Math.floor(e+Math.sin(u)*d),v=r(p,g);if(s.getBlock(p,v,g)===hm)return eT(i,p+.5,v+1,g+.5,n,s)}return[]}function Jc(i,t,e,n){return!(!xe(i.getBlock(t,e-1,n))||xe(i.getBlock(t,e,n))||xe(i.getBlock(t,e+1,n)))}function r0(i,t,e,n){const s=jb-1;for(let r=-s;r<=s;r++){const o=s-Math.abs(r);for(let a=-o;a<=o;a++){const l=o-Math.abs(a);for(let c=-l;c<=l;c++)if(i.getBlock(t+c,e+r,n+a)===ns)return!1}}return!0}function Jb(i,t,e,n,s,r,o=16,a=32,l){for(let c=0;c<14;c++){const h=n()*Math.PI*2,u=o+n()*(a-o),d=Math.floor(t+Math.cos(h)*u),p=Math.floor(e+Math.sin(h)*u),g=r(d,p);if(l?l(d,g+1,p)>7:!r0(s,d,g+1,p))continue;const v=[],m=1+Math.floor(n()*3);for(let f=0;f<m;f++){const x=d+Math.floor((n()*2-1)*2),_=p+Math.floor((n()*2-1)*2),M=r(x,_);Jc(s,x,M+1,_)&&v.push(ul(i,x+.5,M+1,_+.5))}if(v.length)return v}return[]}function tT(i,t,e,n,s,r,o,a=5,l=24,c){for(let u=0;u<24;u++){const d=s()*Math.PI*2,p=a+s()*(l-a),g=Math.floor(t+Math.cos(d)*p),v=Math.floor(n+Math.sin(d)*p),m=Math.min(Math.floor(e)+8,o(g,v)-5),f=Math.max(2,Math.floor(e)-14);for(let x=m;x>=f;x--){if(!Jc(r,g,x,v)||(c?c(g,x,v)>7:!r0(r,g,x,v)))continue;const _=[],M=1+Math.floor(s()*2);for(let R=0;R<M;R++){const A=g+Math.floor((s()*2-1)*2),P=v+Math.floor((s()*2-1)*2);for(let I=1;I>=-1;I--){const b=x+I;if(b<o(A,P)-5&&Jc(r,A,b,P)){_.push(ul(i,A+.5,b,P+.5));break}}}if(_.length)return _}}return[]}function eT(i,t,e,n,s,r){const o=[];for(let a=0;a<16&&o.length<4;a++){const l=Math.floor(t)+Math.floor((s()*2-1)*4),c=Math.floor(n)+Math.floor((s()*2-1)*4);for(let h=3;h>=-3;h--){const u=Math.floor(e)+h;if(Qb(r,l,u,c)){o.push(ul(i,l+.5,u,c+.5));break}}}return o}function Tf(i){const t={kind:i.kind,x:i.pos.x,y:i.pos.y,z:i.pos.z,yaw:i.yaw,health:i.health};return i.kind==="chicken"&&(t.egg=i.eggTimer),t}function Ef(i){const t=ul(i.kind,i.x,i.y,i.z);return t.yaw=i.yaw,t.health=i.health,i.egg!==void 0&&(t.eggTimer=i.egg),t}function nT(i,t,e){if(e)return!1;const n=Math.floor(i.pos.x),s=Math.floor(i.pos.z),r=Math.floor(i.pos.y+qn[i.kind].height);for(let o=Math.floor(i.pos.y);o<=r;o++)if(li(t.getBlock(n,o,s)))return!1;for(let o=r+1;o<pe;o++){const a=t.getBlock(n,o,s);if(xe(a)||li(a))return!1}return!0}const is=64,Qt={head:{u:0,v:0,x:8,y:8,z:8},snout:{u:32,v:0,x:4,y:3,z:6},animalBody:{u:0,v:16,x:12,y:8,z:8},humanBody:{u:0,v:16,x:4,y:12,z:8},leg:{u:0,v:36,x:4,y:12,z:4},arm:{u:16,v:36,x:4,y:12,z:4},wing:{u:32,v:16,x:8,y:6,z:2},tail:{u:32,v:36,x:2,y:8,z:2}};function Ci(i,t){const{u:e,v:n,x:s,y:r,z:o}=i;switch(t){case"top":return{x:e+o,y:n,w:s,h:o};case"bottom":return{x:e+o+s,y:n,w:s,h:o};case"right":return{x:e,y:n+o,w:o,h:r};case"front":return{x:e+o,y:n+o,w:s,h:r};case"left":return{x:e+o+s,y:n+o,w:o,h:r};case"back":return{x:e+o+s+o,y:n+o,w:s,h:r}}}const Af=new Map;function iT(i){let t=i%2147483647;return t<=0&&(t+=2147483646),()=>(t=t*16807%2147483647)/2147483647}function sT(i){const t=Number.parseInt(i.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function Zr(i,t){const[e,n,s]=sT(i),r=o=>Math.max(0,Math.min(255,Math.round(o*t))).toString(16).padStart(2,"0");return`#${r(e)}${r(n)}${r(s)}`}function rT(i,t,e){i.fillStyle=t,i.fillRect(e.x,e.y,e.w,e.h)}function Un(i,t,e,n,s=1,r=1){i.fillStyle=t,i.fillRect(Math.round(e),Math.round(n),Math.round(s),Math.round(r))}function me(i,t,e,n,s){const r={top:1.08,bottom:.62,right:.96,front:.88,left:.78,back:.83},o=iT(s),a=["right","front","left","back","top","bottom"];for(const l of a){const c=Ci(t,l);rT(i,Zr(e,r[l]),c);const h=Math.max(2,Math.floor(c.w*c.h/12));for(let u=0;u<h;u++)Un(i,Zr(n,r[l]),c.x+Math.floor(o()*c.w),c.y+Math.floor(o()*c.h))}}function he(i,t,e,n,s,r,o=1,a=1){const l=Ci(t,e);Un(i,n,l.x+s,l.y+r,o,a)}function oT(i,t){const e=Qt.head,n=Qt.animalBody,s=Qt.leg,r=Qt.snout;if(t==="pig")me(i,e,"#e7a39d","#f0b2ab",11),me(i,n,"#e5a09a","#d98e8b",12),me(i,s,"#dc9692","#c97f7d",13),me(i,r,"#d88b8b","#efaaa4",14),he(i,e,"right","#202020",1,2,2,2),he(i,e,"right","#202020",5,2,2,2),he(i,r,"right","#7c4d55",1,1),he(i,r,"right","#7c4d55",4,1);else if(t==="cow"){me(i,e,"#554033","#382b23",21),me(i,n,"#594435","#3f3026",22),me(i,s,"#4c382c","#2f241d",23),me(i,r,"#b9a28e","#8e7663",24);for(const o of["right","front","left","back","top"]){const a=Ci(n,o);Un(i,"#e7ddcd",a.x+1,a.y+1,Math.max(2,Math.floor(a.w/3)),Math.max(2,Math.floor(a.h/2))),Un(i,"#e7ddcd",a.x+Math.max(1,a.w-4),a.y+Math.max(1,a.h-3),3,2)}he(i,e,"right","#f0e7d9",0,0,3,5),he(i,e,"right","#171717",1,2,2,2),he(i,e,"right","#171717",5,2,2,2),he(i,r,"right","#4b3834",1,1),he(i,r,"right","#4b3834",4,1)}else if(t==="sheep"){me(i,e,"#4a433d","#625950",31),me(i,n,"#ece9e1","#d7d3c9",32),me(i,s,"#4a433d","#312d29",33);for(const o of["front","back","top","right","left"]){const a=Ci(n,o);for(let l=0;l<a.h;l+=3)for(let c=l/3%2;c<a.w;c+=3)Un(i,"#f8f6ef",a.x+c,a.y+l,2,2)}he(i,e,"right","#ece9e1",0,0,8,2),he(i,e,"right","#171717",1,3,2,2),he(i,e,"right","#171717",5,3,2,2)}else me(i,e,"#f1f1ef","#d9d9d6",41),me(i,n,"#eeeeeb","#d6d6d2",42),me(i,s,"#d99020","#a96917",43),me(i,Qt.wing,"#f7f7f5","#d4d4d0",44),he(i,e,"right","#151515",1,2,2,2),he(i,e,"right","#151515",5,2,2,2),he(i,e,"right","#ffffff",1,2),he(i,e,"right","#ffffff",5,2)}function aT(i,t){const e=Qt.head,n=Qt.humanBody,s=Qt.arm,r=Qt.leg;if(t==="skeleton"){me(i,e,"#dcdcd0","#bcbcaf",71),me(i,n,"#d8d8cc","#9f9f91",72),me(i,s,"#d6d6ca","#a5a598",73),me(i,r,"#d6d6ca","#a5a598",74),he(i,e,"right","#1b1b1b",1,2,2,2),he(i,e,"right","#1b1b1b",5,2,2,2),he(i,e,"right","#77776d",3,4,2,1),he(i,e,"right","#77776d",1,6,6,1);const p=Ci(n,"right");Un(i,"#9b9b8e",p.x+3,p.y+1,2,10);for(const g of[2,5,8])Un(i,"#85857a",p.x,p.y+g,3,1),Un(i,"#85857a",p.x+5,p.y+g,3,1);return}const o=t==="husk",a=o?"#b29a5e":"#568746",l=o?"#8f783f":"#3f6e37",c=o?"#b9a66d":"#2f6a69",h=o?"#8c7645":"#244f50",u=o?"#66542e":"#2d3158";me(i,e,a,l,o?67:61),me(i,n,c,h,o?68:62),me(i,s,c,a,o?69:63),me(i,r,u,Zr(u,.75),o?70:64);for(const p of["right","front","left","back"]){const g=Ci(s,p);Un(i,Zr(a,p==="left"?.8:.95),g.x,g.y+7,g.w,5)}he(i,e,"right","#242022",1,2,2,1),he(i,e,"right","#242022",5,2,2,1),he(i,e,"right",o?"#5e4724":"#31562c",2,6,4,1);const d=Ci(n,"right");Un(i,l,d.x+1,d.y+7,2,3),Un(i,Zr(c,.72),d.x+5,d.y+10,3,2)}function lT(i){const t=Qt.head,e=Qt.humanBody;me(i,t,"#5d9f43","#407c31",81),me(i,e,"#5a9840","#3d762e",82),me(i,Qt.leg,"#4d8937","#326628",83),he(i,t,"right","#101010",1,2,2,2),he(i,t,"right","#101010",5,2,2,2),he(i,t,"right","#101010",3,4,2,2),he(i,t,"right","#101010",2,6,2,2),he(i,t,"right","#101010",4,6,2,2)}function cT(i,t){t.clearRect(0,0,is,is),t.imageSmoothingEnabled=!1,i==="pig"||i==="cow"||i==="sheep"||i==="chicken"?oT(t,i):i==="creeper"?lT(t):aT(t,i)}function hT(i){const t=Af.get(i);if(t)return t;const e=document.createElement("canvas");e.width=e.height=is;const n=e.getContext("2d");n&&cT(i,n);const s=new al(e);return s.magFilter=de,s.minFilter=de,s.generateMipmaps=!1,s.colorSpace=ae,Af.set(i,s),s}function uT(i,t=30){if(i<=0)return{whiteness:0,swell:1};const e=Math.min(1,i/t+.3*Math.abs(Math.sin(i*.7)));return{whiteness:e,swell:1+.5*e}}const dT=[.8,.8,1,.42,.8,.8],fT=3.4,Rf=["right","left","top","bottom","front","back"];function pT(i,t,e,n,s){const r=new Qe(i,t,e),o=new St(n),a=[];for(let l=0;l<6;l++){const c=dT[l];for(let h=0;h<4;h++)a.push(o.r*c,o.g*c,o.b*c)}if(r.setAttribute("color",new ke(a,3)),s){const l=r.attributes.uv;for(let c=0;c<Rf.length;c++){const h=Ci(s,Rf[c]),u=h.x/is,d=(h.x+h.w)/is,p=1-(h.y+h.h)/is,g=1-h.y/is,v=c*4;l.setXY(v,u,g),l.setXY(v+1,d,g),l.setXY(v+2,u,p),l.setXY(v+3,d,p)}l.needsUpdate=!0}return r}function Ya(i,t,e,n,s,r,o,a,l,c){const h=new Jt(pT(e,n,s,r,c),t);return h.position.set(o,a,l),i.add(h),h}function yi(i,t,e,n,s,r,o){const a=new vn;a.position.set(n,r,s),Ya(a,t,o,r,o,16777215,0,-r/2,0,Qt.leg),i.add(a),e.push(a)}function zs(i,t,e,n,s,r,o,a,l=0){const c=new vn;return c.position.set(n,s,r),c.rotation.z=l,Ya(c,t,a,o,a,16777215,0,-o/2,0,Qt.arm),i.add(c),e.push(c),c}function mT(i){const t=new vn,e=[],n=[],s=new ye({vertexColors:!0}),r=new ye({map:hT(i),vertexColors:!0}),o=[s,r],a=(v,m,f,x,_,M,R)=>Ya(t,s,v,m,f,x,_,M,R),l=(v,m,f,x,_,M,R)=>Ya(t,r,m,f,x,16777215,_,M,R,v);let c,h;if(i==="pig"){l(Qt.animalBody,.9,.5,.6,0,.26+.25,0),c=l(Qt.head,.44,.44,.5,.55,.26+.28,0),l(Qt.snout,.16,.15,.3,.79,.26+.2,0),a(.14,.12,.04,14257292,.5,.26+.52,.2),a(.14,.12,.04,14257292,.5,.26+.52,-.2),h=l(Qt.tail,.1,.14,.1,-.47,.26+.36,0);for(const[m,f]of[[.3,.2],[.3,-.2],[-.32,.2],[-.32,-.2]])yi(t,r,e,m,f,.26,.16)}else if(i==="cow"){l(Qt.animalBody,1,.6,.62,0,.52+.3,0),c=l(Qt.head,.45,.48,.52,.6,.52+.4,0),l(Qt.snout,.18,.2,.42,.86,.52+.28,0),a(.09,.14,.09,14471352,.61,.52+.7,.2),a(.09,.14,.09,14471352,.61,.52+.7,-.2),a(.16,.1,.34,15709892,-.18,.52-.02,0),h=l(Qt.tail,.1,.32,.1,-.51,.52+.38,0);for(const[f,x]of[[.34,.21],[.34,-.21],[-.34,.21],[-.34,-.21]])yi(t,r,e,f,x,.52,.18)}else if(i==="sheep"){l(Qt.animalBody,.94,.7,.76,0,.46+.36,0),a(.5,.34,.42,15526627,.4,.46+.6,0),c=l(Qt.head,.3,.38,.36,.57,.46+.38,0),a(.1,.1,.04,4669498,.52,.46+.56,.18),a(.1,.1,.04,4669498,.52,.46+.56,-.18);for(const[x,_]of[[.28,.22],[.28,-.22],[-.3,.22],[-.3,-.22]])yi(t,r,e,x,_,.46,.15)}else if(i==="zombie"){l(Qt.humanBody,.28,.66,.5,0,.82+.33,0),c=l(Qt.head,.44,.44,.44,0,.82+.88,0),zs(t,r,n,.08,.82+.63,.35,.62,.18,1.28),zs(t,r,n,.08,.82+.63,-.35,.62,.18,1.28);for(const[,m]of[[0,.12],[0,-.12]])yi(t,r,e,0,m,.82,.2)}else if(i==="skeleton"){l(Qt.humanBody,.2,.62,.34,0,.84+.31,0),c=l(Qt.head,.42,.42,.42,0,.84+.81,0),zs(t,r,n,.04,.84+.58,.24,.58,.11,1.18),zs(t,r,n,0,.84+.58,-.24,.58,.11,.12);const m=7031339;a(.06,.62,.06,m,.52,.84+.32,.16),a(.06,.14,.06,m,.47,.84+.62,.16),a(.06,.14,.06,m,.47,.84+.02,.16),a(.02,.6,.02,15394520,.55,.84+.32,.16);for(const[,f]of[[0,.1],[0,-.1]])yi(t,r,e,0,f,.84,.12)}else if(i==="husk"){l(Qt.humanBody,.28,.66,.5,0,.82+.33,0),c=l(Qt.head,.44,.44,.44,0,.82+.88,0),zs(t,r,n,.08,.82+.63,.35,.62,.18,1.28),zs(t,r,n,.08,.82+.63,-.35,.62,.18,1.28);for(const[,m]of[[0,.12],[0,-.12]])yi(t,r,e,0,m,.82,.2)}else if(i==="creeper"){l(Qt.humanBody,.34,.82,.5,0,.36+.5,0),c=l(Qt.head,.48,.48,.48,0,.36+1.12,0);for(const[m,f]of[[.16,.13],[.16,-.13],[-.16,.13],[-.16,-.13]])yi(t,r,e,m,f,.36,.16)}else{l(Qt.animalBody,.34,.34,.3,-.02,.22+.17,0),l(Qt.wing,.32,.24,.06,-.18,.22+.2,.17),l(Qt.wing,.32,.24,.06,-.18,.22+.2,-.17),h=l(Qt.tail,.18,.26,.16,-.34,.22+.34,0),c=l(Qt.head,.22,.24,.2,.2,.22+.4,0),a(.13,.08,.1,15176991,.36,.22+.4,0),a(.05,.1,.14,13384496,.18,.22+.55,0),a(.06,.08,.06,13384496,.32,.22+.32,0);for(const[x,_]of[[.06,.09],[.06,-.09]])yi(t,r,e,x,_,.22,.07)}const u=.9+Math.random()*.22;t.scale.setScalar(u);const d=.9+Math.random()*.16,p=(Math.random()-.5)*.06,g=new St(Math.min(1,d+p),d,Math.max(0,d-p));return{group:t,legs:e,arms:n,mats:o,base:g,head:c,tail:h,headY:c?c.position.y:0}}const gT=new St(16734810),vT=new St(1,1,1);function Cf(i){i.group.traverse(t=>{t instanceof Jt&&t.geometry.dispose()});for(const t of i.mats)t.dispose()}class _T{constructor(t){y(this,"models",new Map);this.scene=t}sync(t,e,n){const s=new Set(t);for(const[r,o]of this.models)s.has(r)||(this.scene.remove(o.group),Cf(o),this.models.delete(r));for(const r of t){let o=this.models.get(r);if(!o){const g=mT(r.kind);this.scene.add(g.group),o={...g,phase:0,t:Math.random()*10,baseScale:g.group.scale.x,bright:1,dispYaw:r.yaw,swingAmt:0},this.models.set(r,o)}o.t+=e;let a=-r.yaw-o.dispYaw;a=((a+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,o.dispYaw+=a*Math.min(1,e*10),o.group.rotation.y=o.dispYaw,o.group.rotation.z=Math.max(-.18,Math.min(.22,-r.vel.y*2.2));const l=n?n(r.pos.x,r.pos.y+.6,r.pos.z):1;o.bright+=(l-o.bright)*Math.min(1,e*10);const c=r.hurtCooldown>0?gT:o.base;for(const g of o.mats)g.color.copy(c).multiplyScalar(o.bright);const h=uT(r.kind==="creeper"?r.fuse:0);if(h.whiteness>0){const g=c.clone().lerp(vT,h.whiteness);for(const v of o.mats)v.color.copy(g).multiplyScalar(o.bright)}o.group.scale.setScalar(o.baseScale*h.swell);const u=Math.hypot(r.vel.x,r.vel.z),d=u>.002;d&&(o.phase+=u*20*e*fT),o.swingAmt+=((d?1:0)-o.swingAmt)*Math.min(1,e*8);const p=Math.sin(o.phase)*.6*o.swingAmt;if(o.legs.forEach((g,v)=>g.rotation.z=v%2===0?p:-p),r.kind==="zombie"||r.kind==="husk"?o.arms.forEach((g,v)=>g.rotation.z=1.28+(v?-1:1)*Math.sin(o.phase)*.08*o.swingAmt):r.kind==="skeleton"&&(o.arms[0]&&(o.arms[0].rotation.z=1.18+Math.sin(o.phase)*.06*o.swingAmt),o.arms[1]&&(o.arms[1].rotation.z=.12-p*.45)),o.group.position.set(r.pos.x,r.pos.y+Math.abs(Math.sin(o.phase))*.035*o.swingAmt,r.pos.z),o.head)if(d)o.head.position.y=o.headY+Math.sin(o.phase*2)*.015,o.head.rotation.z=Math.sin(o.phase)*.05;else if(r.kind==="chicken"){const g=Math.max(0,Math.sin(o.t*1.6));o.head.rotation.z=-g*.5,o.head.position.y=o.headY-g*.04}else o.head.position.y=o.headY+Math.sin(o.t*1.4)*.012,o.head.rotation.z=0,o.head.rotation.y=Math.sin(o.t*.55)*.4*(1-o.swingAmt);o.tail&&(o.tail.rotation.z=Math.sin(o.t*4+o.phase)*.3)}}clear(){for(const[,t]of this.models)this.scene.remove(t.group),Cf(t);this.models.clear()}}const $i=8,Pf=1,xc=4,ha=[[1,0],[-1,0],[0,1],[0,-1]],Df={amount:0,source:!1,falling:!1},Hs=(i,t,e)=>`${i},${t},${e}`;class xT{constructor(t=4e3){y(this,"active",new Set);y(this,"maxPerTick");this.maxPerTick=t}get activeCount(){return this.active.size}clear(){this.active.clear()}activate(t,e,n){this.active.add(Hs(t,e,n));for(const[s,r]of ha)this.active.add(Hs(t+s,e,n+r));this.active.add(Hs(t,e+1,n)),this.active.add(Hs(t,e-1,n))}tick(t){if(this.active.size===0)return;const e=[...this.active];this.active.clear();const n=new Map,s=new Map,r=(l,c,h,u)=>{const d=Hs(l,c,h),p=n.get(d);(!p||u.amount>p.c.amount||u.amount===p.c.amount&&u.source&&!p.c.source)&&n.set(d,{x:l,y:c,z:h,c:u})},o=(l,c,h,u)=>{s.set(Hs(l,c,h),{x:l,y:c,z:h,id:u})};let a=this.maxPerTick;for(const l of e){if(a--<=0){this.active.add(l);continue}const[c,h,u]=l.split(",").map(Number);this.evaluate(t,c,h,u,r,o)}for(const{x:l,y:c,z:h,c:u}of n.values())(u.amount!==t.amount(l,c,h)||u.source!==t.isSource(l,c,h)||u.falling!==t.isFalling(l,c,h))&&(t.setWater(l,c,h,u.amount,u.source,u.falling),this.activate(l,c,h));for(const{x:l,y:c,z:h,id:u}of s.values())t.getBlock(l,c,h)!==u&&(t.setBlock(l,c,h,u),this.activate(l,c,h))}evaluate(t,e,n,s,r,o){if(t.isSolid(e,n,s)){t.amount(e,n,s)>0&&r(e,n,s,Df);return}if(!(t.amount(e,n,s)>0||t.isSource(e,n,s)))return;const l=[[e+1,n,s],[e-1,n,s],[e,n,s+1],[e,n,s-1],[e,n-1,s]];for(const[h,u,d]of l)t.getBlock(h,u,d)===io&&o(h,u,d,bn);const c=t.isSource(e,n,s)?{amount:$i,source:!0,falling:!1}:this.getNewLiquid(t,e,n,s);r(e,n,s,c),c.amount>0&&this.spread(t,e,n,s,c,r)}getNewLiquid(t,e,n,s){if(t.amount(e,n+1,s)>0)return{amount:$i,source:!1,falling:!0};let r=0,o=0;for(const[l,c]of ha){const h=t.amount(e+l,n,s+c);h>0&&(h>r&&(r=h),t.isSource(e+l,n,s+c)&&o++)}if(o>=2&&(t.isSolid(e,n-1,s)||t.isSource(e,n-1,s)))return{amount:$i,source:!0,falling:!1};const a=r-Pf;return a>0?{amount:a,source:!1,falling:!1}:Df}spread(t,e,n,s,r,o){const a=n-1,l=t.amount(e,a,s)===$i&&!t.isFalling(e,a,s);if(!t.isSolid(e,a,s)&&!l){(t.getBlock(e,a,s)===0||t.amount(e,a,s)>0)&&o(e,a,s,{amount:$i,source:!1,falling:!0});return}if(!r.source&&!t.isSolid(e,a,s))return;const c=r.source?$i:r.amount,h=c-Pf;if(!(h<1))for(const[u,d]of this.getSpreadDirs(t,e,n,s,c)){const p=e+u,g=s+d;t.isSolid(p,n,g)||t.isSource(p,n,g)||t.getBlock(p,n,g)!==0&&t.amount(p,n,g)===0||t.amount(p,n,g)>=h||o(p,n,g,{amount:h,source:!1,falling:!1})}}getSpreadDirs(t,e,n,s,r){let o=xc+1;const a=[];for(const l of ha){const c=e+l[0],h=s+l[1];if(t.isSolid(c,n,h)||t.amount(c,n,h)>=r)continue;const u=this.isHole(t,c,n,h)?0:this.slopeDistance(t,c,n,h,1,[-l[0],-l[1]]);u<o?(o=u,a.length=0,a.push(l)):u===o&&a.push(l)}return a}isHole(t,e,n,s){return!t.isSolid(e,n-1,s)&&t.amount(e,n-1,s)<$i}slopeDistance(t,e,n,s,r,o){let a=xc;for(const l of ha){if(l[0]===o[0]&&l[1]===o[1])continue;const c=e+l[0],h=s+l[1];if(!t.isSolid(c,n,h)){if(this.isHole(t,c,n,h))return r;if(r<xc){const u=this.slopeDistance(t,c,n,h,r+1,[-l[0],-l[1]]);u<a&&(a=u)}}}return a}}function Lf(i,t,e){let n=0;for(let s=e.minY;s<=e.maxY;s++)for(let r=e.minX;r<=e.maxX;r++)for(let o=e.minZ;o<=e.maxZ;o++)t.isWater(r,s,o)&&(t.isAir(r,s-1,o)||t.isAir(r+1,s,o)||t.isAir(r-1,s,o)||t.isAir(r,s,o+1)||t.isAir(r,s,o-1))&&(i.activate(r,s,o),n++);return n}function yT(i,t,e,n){const s=[];for(let r=i-e;r<=i+e;r++)for(let o=t-e;o<=t+e;o++){const a=`${r},${o}`;if(n.has(a))continue;const l=r-i,c=o-t;s.push({key:a,d:l*l+c*c})}return s.sort((r,o)=>r.d-o.d),s.map(r=>r.key)}const MT=9,wT=27,zh=MT+wT,Hh=64;function br(i,t){return i.id===t.id&&i.dur===t.dur}function Wh(){return Array.from({length:zh},()=>null)}function kf(i,t,e,n=Hh,s=0,r=i.length){return dl(i,{id:t,count:e},n,s,r)}function dl(i,t,e=Hh,n=0,s=i.length){let r=t.count;for(let o=n;o<s&&r>0;o++){const a=i[o];if(a&&br(a,t)&&a.count<e){const l=Math.min(e-a.count,r);a.count+=l,r-=l}}for(let o=n;o<s&&r>0;o++)if(!i[o]){const a=Math.min(e,r);i[o]=t.dur===void 0?{id:t.id,count:a}:{id:t.id,count:a,dur:t.dur},r-=a}return r}function ST(i,t,e){for(let n=0;n<i.length;n++)if(!i[n])return i[n]={id:t,count:1,dur:e},!0;return!1}function If(i,t){let e=0;for(const n of i)n&&n.id===t&&(e+=n.count);return e}function bT(i,t,e){let n=e;for(let s=0;s<i.length&&n>0;s++){const r=i[s];if(r&&r.id===t){const o=Math.min(r.count,n);r.count-=o,n-=o,r.count<=0&&(i[s]=null)}}return e-n}function Uf(i,t){const e=i[t];if(!e||e.count<=0)return null;e.count--;const n=e.id;return e.count<=0&&(i[t]=null),n}function TT(i){return i.map(t=>t?{id:t.id,count:t.count,dur:t.dur}:null)}function ET(i){const t=Wh();if(!Array.isArray(i))return t;for(let e=0;e<zh;e++){const n=i[e];if(n&&typeof n.id=="number"&&typeof n.count=="number"&&n.count>0){const s={id:n.id,count:Math.min(Hh,n.count)};typeof n.dur=="number"&&(s.dur=n.dur),t[e]=s}}return t}function ua(i,t,e){const n=i[t];if(!n)return!1;const s=(n.dur??e)-1;return s<=0?(i[t]=null,!0):(n.dur=s,!1)}const Gh=[{id:"building",label:"建筑方块",items:[1,2,3,4,5,6,7,8,10,11,12,13,15,18,19,20,21,22,24,26,27,28,30,31,32,33,34,35,36]},{id:"decoration",label:"装饰方块",items:[14,16,17,29]},{id:"tools",label:"工具武器",items:[259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,292,294,297,298,299,300,301]},{id:"food",label:"食物",items:[256,275,276,277,278,279,280,281,282,287]},{id:"materials",label:"材料杂项",items:[257,258,274,283,284,285,286,288,289,290,291,293,295,296]}],o0=Gh.flatMap(i=>i.items),AT=new Set(o0);function RT(i){var t;return((t=Gh.find(e=>e.id===i))==null?void 0:t.items)??[]}function a0(i){return AT.has(i)}function th(i,t=!1){return a0(i)?{id:i,count:t?1:as(i)}:null}function CT(i,t,e){if(!a0(e))return t;const n=i.slice(0,9).findIndex(s=>(s==null?void 0:s.id)===e);return n>=0?n:(i[t]=th(e),t)}const pn=new Set,PT=300;let eh=-1/0,fl=!1,Ka=!1;window.addEventListener("keydown",i=>{if(i.code==="KeyW"&&!pn.has("KeyW")){const t=performance.now();t-eh<PT&&(fl=!0),eh=t}i.code==="Space"&&!pn.has("Space")&&(Ka=!0),pn.add(i.code)});window.addEventListener("keyup",i=>{pn.delete(i.code),i.code==="KeyW"&&(fl=!1)});function l0(){pn.clear(),fl=!1,Ka=!1,eh=-1/0}window.addEventListener("blur",l0);document.addEventListener("visibilitychange",()=>{document.hidden&&l0()});function DT(){let i=0,t=0;pn.has("KeyW")&&(i+=1),pn.has("KeyS")&&(i-=1),pn.has("KeyD")&&(t+=1),pn.has("KeyA")&&(t-=1);const e=pn.has("ShiftLeft")||pn.has("ShiftRight")||pn.has("KeyC");return{forward:i,right:t,sprint:fl&&i>0&&!e,jumpHeld:pn.has("Space"),crouch:e}}function LT(){const i=Ka;return Ka=!1,i}const Nf=.0025,Ff=1.55;class kT{constructor(t,e=!0){y(this,"yaw",0);y(this,"pitch",0);e&&t.addEventListener("click",()=>void t.requestPointerLock()),document.addEventListener("mousemove",n=>{document.pointerLockElement===t&&this.rotate(n.movementX*Nf,-n.movementY*Nf)})}rotate(t,e){this.yaw+=t,this.pitch=Math.max(-Ff,Math.min(Ff,this.pitch+e))}}const Of=.006,IT=320,c0=380,UT=8,da=96,NT=.2,Bf=1+Math.SQRT2;function FT(i,t){if(Math.hypot(i,t)<NT)return{forward:0,right:0};const n=Math.abs(i),s=Math.abs(t);return s>n*Bf?{forward:t<0?1:-1,right:0}:n>s*Bf?{forward:0,right:i>0?1:-1}:{forward:t<0?1:-1,right:i>0?1:-1}}function OT(i,t){return t-i>=0&&t-i<=IT}function BT(i,t,e,n){return Math.hypot(e-i,n-t)>=UT}function zT(i,t,e=!1,n=0){return e?"none":t?"hold-end":i?"none":n>=c0?"hold-end":"tap"}function h0(){return new URLSearchParams(window.location.search).get("touch")==="1"?!0:navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches}let zf=!1;function HT(){if(zf)return;zf=!0;const i=r=>r.preventDefault();document.addEventListener("gesturestart",i,{passive:!1}),document.addEventListener("gesturechange",i,{passive:!1}),document.addEventListener("gestureend",i,{passive:!1}),document.addEventListener("dblclick",i,{passive:!1}),document.addEventListener("touchmove",r=>{r.touches.length>1&&r.preventDefault()},{passive:!1});let t=-1/0,e=null,n=0,s=0;document.addEventListener("touchend",r=>{const o=performance.now(),a=r.changedTouches[0],l=a!==void 0&&Math.hypot(a.clientX-n,a.clientY-s)<28;o-t<320&&r.target===e&&l&&r.preventDefault(),t=o,e=r.target,a&&(n=a.clientX,s=a.clientY)},{passive:!1})}class WT{constructor(t,e){y(this,"root");y(this,"actions");y(this,"lookPointer",null);y(this,"lookPoint",null);y(this,"lookStartedAt",0);y(this,"lookGesture",0);y(this,"lookStartX",0);y(this,"lookStartY",0);y(this,"lookX",0);y(this,"lookY",0);y(this,"lookDragging",!1);y(this,"lookHoldStarted",!1);y(this,"lookHoldTimer",null);y(this,"releaseLookCapture",null);y(this,"dpadPointer",null);y(this,"forward",0);y(this,"right",0);y(this,"lastForwardPress",-1/0);y(this,"sprinting",!1);y(this,"jumpHeld",!1);y(this,"crouchHeld",!1);y(this,"pendingJump",!1);y(this,"active",!1);y(this,"releaseHolds",[]);this.root=t,this.actions=e;const n=t.querySelector(".touch-look");n.addEventListener("pointerdown",l=>{if(!this.active||(l.preventDefault(),this.lookPointer!==null))return;this.lookPointer=l.pointerId,this.lookPoint={x:l.clientX,y:l.clientY},this.lookStartedAt=performance.now();const c=++this.lookGesture;this.lookStartX=l.clientX,this.lookStartY=l.clientY,this.lookX=l.clientX,this.lookY=l.clientY,this.lookDragging=!1,this.lookHoldStarted=!1,this.capturePointer(n,l.pointerId),this.lookHoldTimer=window.setTimeout(()=>{if(this.lookHoldTimer=null,this.lookPointer!==l.pointerId||this.lookGesture!==c||this.lookDragging||!this.active)return;const h=this.lookPoint;h!==null&&(this.lookHoldStarted=!0,this.actions.interactHoldStart(h))},c0)});const s=l=>{if(l.pointerId!==this.lookPointer)return;l.preventDefault();const c=typeof l.getCoalescedEvents=="function"?l.getCoalescedEvents():[],h=c.length>0?c:[l];for(const u of h)this.moveLookTo(u.clientX,u.clientY)},r=(l,c)=>{const h=this.lookPointer,u=this.lookPoint;if(h===null||u===null)return;!l&&c&&this.moveLookTo(c.x,c.y);const d=this.lookHoldStarted,p=zT(this.lookDragging,d,l,performance.now()-this.lookStartedAt);this.clearLookHoldTimer(),this.lookPointer=null,this.lookPoint=null,this.lookStartedAt=0,this.lookDragging=!1,this.lookHoldStarted=!1,this.releasePointerCapture(n,h),p==="tap"?this.actions.interactTap(u):p==="hold-end"?(d||this.actions.interactHoldStart(u),this.actions.interactHoldEnd(u)):d&&this.actions.interactHoldCancel(u)};this.releaseLookCapture=()=>r(!0);const o=l=>{l.pointerId===this.lookPointer&&(l.preventDefault(),r(!1,{x:l.clientX,y:l.clientY}))},a=l=>{l.pointerId===this.lookPointer&&(l.preventDefault(),r(!0))};window.addEventListener("pointermove",s),window.addEventListener("pointerup",o),window.addEventListener("pointercancel",a),n.addEventListener("lostpointercapture",a),this.bindSlidingDpad(t.querySelector("#touch-dpad")),this.bindHold("touch-jump",()=>{this.jumpHeld||(this.pendingJump=!0),this.jumpHeld=!0},()=>this.jumpHeld=!1),this.bindHold("touch-crouch",()=>this.crouchHeld=!0,()=>this.crouchHeld=!1),this.bindTap("touch-inventory",()=>this.actions.inventory()),this.bindTap("touch-pause",()=>this.actions.pause()),window.addEventListener("blur",()=>this.reset()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.reset()}),window.addEventListener("pagehide",()=>this.reset())}setActive(t){this.active=t,this.root.classList.toggle("active",t),this.root.setAttribute("aria-hidden",String(!t)),t||this.reset()}get isActive(){return this.active}readMove(){return{forward:this.forward,right:this.right,sprint:this.sprinting&&this.forward>0&&!this.crouchHeld,jumpHeld:this.jumpHeld,crouch:this.crouchHeld}}consumeJump(){const t=this.pendingJump;return this.pendingJump=!1,t}moveLookTo(t,e){if(this.lookPoint===null)return;if(!this.lookDragging&&BT(this.lookStartX,this.lookStartY,t,e)){this.lookDragging=!0,this.clearLookHoldTimer(),this.lookX=t,this.lookY=e;return}if(!this.lookDragging)return;const s=Math.max(-da,Math.min(da,t-this.lookX)),r=Math.max(-da,Math.min(da,e-this.lookY));this.lookX=t,this.lookY=e,this.actions.look(s*Of,-r*Of)}bindSlidingDpad(t){const e=(o,a)=>this.updateSlidingDpad(t,o,a),n=()=>{const o=this.dpadPointer;o!==null&&(this.dpadPointer=null,this.setMoveAxes(t,{forward:0,right:0}),t.style.setProperty("--touch-dpad-stick-x","0px"),t.style.setProperty("--touch-dpad-stick-y","0px"),t.dataset.moving="false",this.releasePointerCapture(t,o))};t.addEventListener("pointerdown",o=>{!this.active||this.dpadPointer!==null||(o.preventDefault(),o.stopPropagation(),this.dpadPointer=o.pointerId,this.capturePointer(t,o.pointerId),e(o.clientX,o.clientY))});const s=o=>{o.pointerId===this.dpadPointer&&(o.preventDefault(),e(o.clientX,o.clientY))},r=o=>{o.pointerId===this.dpadPointer&&(o.preventDefault(),n())};window.addEventListener("pointermove",s),window.addEventListener("pointerup",r),window.addEventListener("pointercancel",r),t.addEventListener("lostpointercapture",r),this.releaseHolds.push(n)}updateSlidingDpad(t,e,n){const s=t.getBoundingClientRect(),r=Math.max(1,Math.min(s.width,s.height)/2),o=(e-(s.left+s.width/2))/r,a=(n-(s.top+s.height/2))/r,l=FT(o,a);this.setMoveAxes(t,l);const c=Math.hypot(o,a),h=c>0?Math.min(1,c)/c:0,u=r*.42;t.style.setProperty("--touch-dpad-stick-x",`${Math.round(o*h*u)}px`),t.style.setProperty("--touch-dpad-stick-y",`${Math.round(a*h*u)}px`),t.dataset.moving=String(l.forward!==0||l.right!==0)}setMoveAxes(t,e){if(e.forward>0&&this.forward<=0){const n=performance.now();OT(this.lastForwardPress,n)&&(this.sprinting=!0),this.lastForwardPress=n}e.forward<=0&&(this.sprinting=!1),this.forward=e.forward,this.right=e.right,t.dataset.forward=String(e.forward),t.dataset.right=String(e.right)}releasePointerCapture(t,e){if(t.hasPointerCapture(e))try{t.releasePointerCapture(e)}catch{}}capturePointer(t,e){try{t.setPointerCapture(e)}catch{}}clearLookHoldTimer(){this.lookHoldTimer!==null&&(window.clearTimeout(this.lookHoldTimer),this.lookHoldTimer=null)}bindHold(t,e,n,s=n){const r=document.getElementById(t);let o=null;r.addEventListener("pointerdown",h=>{!this.active||o!==null||(h.preventDefault(),h.stopPropagation(),o=h.pointerId,this.capturePointer(r,h.pointerId),r.classList.add("pressed"),e())});const a=h=>{const u=o;u!==null&&(o=null,r.classList.remove("pressed"),h(),this.releasePointerCapture(r,u))},l=h=>{h.pointerId===o&&a(n)},c=h=>{h.pointerId===o&&a(s)};r.addEventListener("pointerup",l),r.addEventListener("pointercancel",c),r.addEventListener("lostpointercapture",c),this.releaseHolds.push(()=>a(s))}bindTap(t,e){const n=document.getElementById(t);n.addEventListener("pointerdown",s=>{this.active&&(s.preventDefault(),s.stopPropagation(),n.classList.add("pressed"),window.setTimeout(()=>n.classList.remove("pressed"),100),e())})}reset(){var t;(t=this.releaseLookCapture)==null||t.call(this);for(const e of this.releaseHolds)e();this.dpadPointer=null,this.forward=0,this.right=0,this.lastForwardPress=-1/0,this.sprinting=!1,this.jumpHeld=!1,this.crouchHeld=!1,this.pendingJump=!1}}class GT{constructor(t,e=9,n=null){y(this,"icons",[]);y(this,"counts",[]);y(this,"cells",[]);y(this,"durTracks",[]);y(this,"durFills",[]);y(this,"itemNameEl");y(this,"inventory",null);y(this,"selectedItemId",null);y(this,"selected",0);y(this,"size");this.size=e,this.itemNameEl=n,t.innerHTML="";for(let s=0;s<e;s++){const r=document.createElement("div");r.className="hotbar-slot",r.style.position="relative";const o=document.createElement("div");o.className="hotbar-icon";const a=document.createElement("div");a.className="hotbar-count";const l=document.createElement("div");l.style.cssText="position:absolute;left:12%;right:12%;bottom:9%;height:3px;background:rgba(0,0,0,.55);border-radius:1px;display:none;overflow:hidden;";const c=document.createElement("div");c.style.cssText="height:100%;width:100%;",l.appendChild(c),r.append(o,a,l),r.addEventListener("pointerdown",h=>{h.pointerType!=="mouse"&&(h.preventDefault(),h.stopPropagation(),this.setSelected(s))}),t.appendChild(r),this.cells.push(r),this.icons.push(o),this.counts.push(a),this.durTracks.push(l),this.durFills.push(c)}this.setSelected(0)}render(t){var n;this.inventory=t;for(let s=0;s<this.size;s++){const r=t[s]??null,o=this.icons[s],a=this.counts[s];if(r&&r.count>0){const c=ls(r.id);o.style.backgroundImage=c?`url(${c})`:"none",a.textContent=r.count>1?String(r.count):""}else o.style.backgroundImage="none",a.textContent="";const l=r&&r.count>0?so(r.id):null;if(r&&l&&(r.dur??l)<l){const c=Math.max(0,(r.dur??l)/l);this.durTracks[s].style.display="block",this.durFills[s].style.width=`${c*100}%`,this.durFills[s].style.background=`hsl(${Math.round(c*120)},85%,45%)`}else this.durTracks[s].style.display="none"}const e=((n=t[this.selected])==null?void 0:n.id)??null;e!==this.selectedItemId&&(this.selectedItemId=e,this.showSelectedItemName())}setSelected(t){var r,o;const e=(t%this.size+this.size)%this.size,n=e!==this.selected,s=this.selectedItemId;this.selected=e,this.cells.forEach((a,l)=>a.classList.toggle("selected",l===this.selected)),this.selectedItemId=((o=(r=this.inventory)==null?void 0:r[this.selected])==null?void 0:o.id)??null,(n||this.selectedItemId!==s)&&this.showSelectedItemName()}scroll(t){this.setSelected(this.selected+t)}get index(){return this.selected}showSelectedItemName(){var e;if(!this.itemNameEl)return;const t=((e=this.inventory)==null?void 0:e[this.selected])??null;if(this.itemNameEl.classList.remove("show"),!t||t.count<=0){this.itemNameEl.textContent="";return}this.itemNameEl.textContent=jr(t.id),this.itemNameEl.offsetWidth,this.itemNameEl.classList.add("show")}}const Zs=20,ss=20,pl=10,VT=7,XT=1,Hf=6,Wf=80,qT=10,$T=30,YT=20;function yc(){return{health:Zs,food:ss,saturation:5,exhaustion:0,foodTimer:0,oxygen:pl,oxygenTimer:0}}function KT(i){return i.food>=VT}function ts(i,t){i.exhaustion=Math.min(i.exhaustion+t,40)}function ja(i,t){i.health=Math.max(0,i.health-t)}function Mc(i){return i.health<=0}function jT(i,t){i.food=Math.min(ss,i.food+t.nutrition),i.saturation=Math.min(i.saturation+t.nutrition*t.saturationModifier*2,i.food)}function ZT(i){return Math.max(0,Math.ceil(i-3))}function QT(i,t,e,n){return n?{fallDistance:0,damage:0}:e?{fallDistance:0,damage:ZT(i)}:{fallDistance:t<0?i-t:i,damage:0}}function JT(i){i.exhaustion>4&&(i.exhaustion-=4,i.saturation>0?i.saturation=Math.max(0,i.saturation-1):i.food=Math.max(0,i.food-1)),i.food>=ss&&i.saturation>0&&i.health<Zs?++i.foodTimer>=qT&&(i.health=Math.min(Zs,i.health+1),ts(i,Hf),i.foodTimer=0):i.food>=18&&i.health<Zs?++i.foodTimer>=Wf&&(i.health=Math.min(Zs,i.health+1),ts(i,Hf),i.foodTimer=0):i.food<=0?++i.foodTimer>=Wf&&(i.health>XT&&ja(i,1),i.foodTimer=0):i.foodTimer=0}function tE(i,t){if(!t){i.oxygen=pl,i.oxygenTimer=0;return}i.oxygenTimer++,i.oxygen>0?i.oxygenTimer>=$T&&(i.oxygen=Math.max(0,i.oxygen-1),i.oxygenTimer=0):i.oxygenTimer>=YT&&(ja(i,2),i.oxygenTimer=0)}const Gf=i=>`url(${Sr(`textures/ui/${i}.png`)})`;class eE{constructor(t,e,n=10){y(this,"hearts");y(this,"foods");y(this,"bubbles",[]);y(this,"healthEl");y(this,"hungerEl");y(this,"oxygenEl");this.healthEl=t,this.hungerEl=e,this.oxygenEl=document.getElementById("oxygen"),this.hearts=this.build(t,n),this.foods=this.build(e,n),this.oxygenEl&&(this.bubbles=this.build(this.oxygenEl,n))}build(t,e){t.innerHTML="";const n=[];for(let s=0;s<e;s++){const r=document.createElement("div");r.className="hud-icon",t.appendChild(r),n.push(r)}return n}render(t){if(this.fill(this.hearts,t.health,"heart"),this.fill(this.foods,t.food,"food"),this.healthEl.classList.toggle("low",t.health<=4),this.hungerEl.classList.toggle("low",t.food<=4),this.oxygenEl){const e=t.oxygen<pl;if(this.oxygenEl.style.display=e?"flex":"none",e)for(let n=0;n<this.bubbles.length;n++)this.bubbles[n].style.backgroundImage=Gf(t.oxygen>n?"bubble_full":"bubble_empty")}}fill(t,e,n){for(let s=0;s<t.length;s++){const r=e-s*2,o=r>=2?"full":r===1?"half":"empty";t[s].style.backgroundImage=Gf(`${n}_${o}`)}}}function Za(i,t,e,n){const s=i[t];if(!e)return i[t]=null,s;if(!s)return i[t]=e,null;if(br(s,e)){const r=Math.max(0,n(s.id)-s.count),o=Math.min(r,e.count);return s.count+=o,e.count-=o,e.count>0?e:null}return i[t]=e,s}function Qa(i,t,e,n){const s=i[t];if(!e){if(!s)return null;const r=Math.ceil(s.count/2),o=s.count-r;return i[t]=o>0?{...s,count:o}:null,{...s,count:r}}return s?br(s,e)?s.count<n(s.id)?(s.count+=1,e.count-=1,e.count>0?e:null):e:(i[t]=e,s):(i[t]={...e,count:1},e.count-=1,e.count>0?e:null)}function wc(i,t,e,n,s=0,r=e.length){const o=i[t];if(!o)return;const a=dl(e,o,n(o.id),s,r);i[t]=a>0?{...o,count:a}:null}function nE(i,t,e){if(!t)return t;const n=t.id,s=e(n),r=i.filter(c=>{const h=c.get();return!h||br(h,t)&&h.count<s});if(r.length===0)return t;const o=Math.floor(t.count/r.length);if(o===0)return t;let a=0;for(const c of r){const h=c.get(),u=h?h.count:0,d=Math.min(o,s-u);d<=0||(c.set(t.dur===void 0?{id:n,count:u+d}:{id:n,count:u+d,dur:t.dur}),a+=d)}const l=t.count-a;return l>0?t.dur===void 0?{id:n,count:l}:{id:n,count:l,dur:t.dur}:null}function iE(i,t,e){if(!t)return t;const n=t.id,s=e(n);let r=t.count;for(const o of i){if(r<=0)break;const a=o.get();a?br(a,t)&&a.count<s&&(a.count+=1,r--):(o.set(t.dur===void 0?{id:n,count:1}:{id:n,count:1,dur:t.dur}),r--)}return r>0?t.dur===void 0?{id:n,count:r}:{id:n,count:r,dur:t.dur}:null}const fa=["PPP"," S "," S "],pa=["PP","PS"," S"],ma=["P","S","S"],ga=["P","P","S"],va=["PP"," S"," S"];function Ce(i,t,e){return{type:"shaped",pattern:i,key:{P:t,S:"stick"},result:{item:e,count:1}}}const sE=[{type:"shapeless",ingredients:["oak_log"],result:{item:"oak_planks",count:4}},{type:"shapeless",ingredients:["spruce_log"],result:{item:"oak_planks",count:4}},{type:"shapeless",ingredients:["flint","iron_ingot"],result:{item:"flint_and_steel",count:1}},{type:"shaped",pattern:["#","#"],key:{"#":"oak_planks"},result:{item:"stick",count:4}},{type:"shaped",pattern:["##","##"],key:{"#":"oak_planks"},result:{item:"crafting_table",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"string"},result:{item:"wool",count:1}},{type:"shaped",pattern:["###","# #","###"],key:{"#":"cobblestone"},result:{item:"furnace",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"sand"},result:{item:"sandstone",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"nether_quartz"},result:{item:"quartz_block",count:1}},{type:"shaped",pattern:["###","###","###"],key:{"#":"coal"},result:{item:"coal_block",count:1}},{type:"shapeless",ingredients:["coal_block"],result:{item:"coal",count:9}},{type:"shaped",pattern:["###","###","###"],key:{"#":"iron_ingot"},result:{item:"iron_block",count:1}},{type:"shapeless",ingredients:["iron_block"],result:{item:"iron_ingot",count:9}},{type:"shaped",pattern:["###","###","###"],key:{"#":"diamond"},result:{item:"diamond_block",count:1}},{type:"shapeless",ingredients:["diamond_block"],result:{item:"diamond",count:9}},{type:"shaped",pattern:["C","S"],key:{C:"coal",S:"stick"},result:{item:"torch",count:4}},{type:"shaped",pattern:["F","S","E"],key:{F:"flint",S:"stick",E:"feather"},result:{item:"arrow",count:4}},{type:"shaped",pattern:[" TS","T S"," TS"],key:{T:"stick",S:"string"},result:{item:"bow",count:1}},Ce(fa,"oak_planks","wooden_pickaxe"),Ce(pa,"oak_planks","wooden_axe"),Ce(ma,"oak_planks","wooden_shovel"),Ce(ga,"oak_planks","wooden_sword"),Ce(va,"oak_planks","wooden_hoe"),Ce(fa,"cobblestone","stone_pickaxe"),Ce(pa,"cobblestone","stone_axe"),Ce(ma,"cobblestone","stone_shovel"),Ce(ga,"cobblestone","stone_sword"),Ce(va,"cobblestone","stone_hoe"),Ce(fa,"iron_ingot","iron_pickaxe"),Ce(pa,"iron_ingot","iron_axe"),Ce(ma,"iron_ingot","iron_shovel"),Ce(ga,"iron_ingot","iron_sword"),Ce(va,"iron_ingot","iron_hoe"),Ce(fa,"diamond","diamond_pickaxe"),Ce(pa,"diamond","diamond_axe"),Ce(ma,"diamond","diamond_shovel"),Ce(ga,"diamond","diamond_sword"),Ce(va,"diamond","diamond_hoe")];function u0(i){return i&&i.count>=1?i.item:null}function rE(i){return i.map(t=>t.map(u0))}function oE(i){const t=[];for(const e of i)for(const n of e){const s=u0(n);s&&t.push(s)}return t}function d0(i){let t=1/0,e=-1,n=1/0,s=-1;for(let o=0;o<i.length;o++)for(let a=0;a<i[o].length;a++)i[o][a]!==null&&(o<t&&(t=o),o>e&&(e=o),a<n&&(n=a),a>s&&(s=a));if(e===-1)return null;const r=[];for(let o=t;o<=e;o++)r.push(i[o].slice(n,s+1));return r}function aE(i){return i.pattern.map(t=>Array.from(t,e=>e===" "?null:i.key[e]??null))}function lE(i){return i.map(t=>[...t].reverse())}function Vf(i,t){if(i.length!==t.length)return!1;for(let e=0;e<i.length;e++){if(i[e].length!==t[e].length)return!1;for(let n=0;n<i[e].length;n++)if(i[e][n]!==t[e][n])return!1}return!0}function cE(i,t){const e=d0(aE(i));return e?Vf(e,t)||Vf(lE(e),t):!1}function Xf(i){const t=new Map;for(const e of i)t.set(e,(t.get(e)??0)+1);return t}function hE(i,t){if(i.ingredients.length!==t.length)return!1;const e=Xf(i.ingredients),n=Xf(t);if(e.size!==n.size)return!1;for(const[s,r]of e)if(n.get(s)!==r)return!1;return!0}function uE(i){const t=oE(i);if(t.length===0)return null;const e=d0(rE(i));for(const n of sE)if(n.type==="shaped"){if(e&&cE(n,e))return n}else if(hE(n,t))return n;return null}function dE(i){const t=uE(i);return t?{item:t.result.item,count:t.result.count}:null}const Vh=new Map,Xh=new Map;for(const i of Ie)i.id!==0&&(Vh.set(i.id,i.name),Xh.set(i.name,i.id));for(const i of XS){const t=$S(i);t&&(Vh.set(i,t),Xh.set(t,i))}function qf(i){const t=i.map(s=>s.map(r=>{if(!r)return null;const o=Vh.get(r.id);return o?{item:o,count:r.count}:null})),e=dE(t);if(!e)return null;const n=Xh.get(e.item);return n==null?null:{id:n,count:e.count}}function fE(i){for(const t of i)for(let e=0;e<t.length;e++){const n=t[e];n&&(n.count-=1,n.count<=0&&(t[e]=null))}}const Ln=i=>as(i),kn=9,Sc=27,pE=420,mE=12;class gE{constructor(t){y(this,"root");y(this,"inv",null);y(this,"gridN",2);y(this,"craft",[]);y(this,"cursor",null);y(this,"open",!1);y(this,"mode","survival");y(this,"creativeCategory","building");y(this,"creativeIds",[]);y(this,"cursorEl");y(this,"cursorIcon");y(this,"cursorCnt");y(this,"titleEl");y(this,"standardEl");y(this,"creativeEl");y(this,"creativeGridEl");y(this,"creativeSearchEl");y(this,"hintEl");y(this,"cgridEl");y(this,"outCell");y(this,"trashCell");y(this,"mainCells",[]);y(this,"hotbarCells",[]);y(this,"craftCells",[]);y(this,"creativeCells",[]);y(this,"creativeTabButtons",[]);y(this,"drag",null);y(this,"onChange",null);y(this,"onClose",null);y(this,"onSelectHotbar",null);this.root=t,t.classList.add("hidden"),t.innerHTML=`
      <div class="inv-panel">
        <div class="inv-title-row">
          <div class="inv-title">合成</div>
          <button class="inv-close" type="button">关闭</button>
        </div>
        <div class="inv-standard">
          <div class="inv-top">
            <div class="inv-cgrid"></div>
            <div class="inv-arrow">▶</div>
            <div class="inv-out-wrap"></div>
          </div>
          <div class="inv-main"></div>
        </div>
        <div class="creative-view hidden">
          <div class="creative-tabs"></div>
          <input class="creative-search" type="search" maxlength="24" autocomplete="off" placeholder="搜索物品" aria-label="搜索创造物品" />
          <div class="creative-grid"></div>
          <div class="creative-trash-row">
            <span>把不要的物品拿到这里删除</span>
            <div class="creative-trash-wrap"></div>
          </div>
        </div>
        <div class="inv-hotbar"></div>
        <div class="inv-hint">轻点拿放 · 长按放一个/拿一半 · Shift 快速转移 · E / Esc 关闭</div>
      </div>`,this.titleEl=t.querySelector(".inv-title"),this.standardEl=t.querySelector(".inv-standard"),this.creativeEl=t.querySelector(".creative-view"),this.creativeGridEl=t.querySelector(".creative-grid"),this.creativeSearchEl=t.querySelector(".creative-search"),this.hintEl=t.querySelector(".inv-hint"),t.querySelector(".inv-close").addEventListener("click",()=>{var r;return(r=this.onClose)==null?void 0:r.call(this)}),this.cgridEl=t.querySelector(".inv-cgrid");const e=t.querySelector(".inv-main"),n=t.querySelector(".inv-hotbar");for(let r=0;r<Sc;r++)this.mainCells.push(this.makeSlot(e,"main",r));for(let r=0;r<kn;r++)this.hotbarCells.push(this.makeSlot(n,"hotbar",r));this.outCell=this.makeSlot(t.querySelector(".inv-out-wrap"),"output",0),this.outCell.el.classList.add("inv-out"),this.trashCell=this.makeSlot(t.querySelector(".creative-trash-wrap"),"trash",0),this.trashCell.el.classList.add("creative-trash"),this.trashCell.icon.textContent="×",this.trashCell.icon.classList.add("txt"),this.trashCell.el.title="删除物品";const s=t.querySelector(".creative-tabs");for(const r of Gh){const o=document.createElement("button");o.className="creative-tab",o.type="button",o.textContent=r.label,o.dataset.category=r.id,o.addEventListener("click",()=>{this.creativeCategory=r.id,this.creativeSearchEl.value="",this.rebuildCreativeCatalog()}),s.appendChild(o),this.creativeTabButtons.push(o)}this.creativeSearchEl.addEventListener("input",()=>this.rebuildCreativeCatalog()),this.cursorEl=document.createElement("div"),this.cursorEl.className="inv-cursor",this.cursorIcon=document.createElement("div"),this.cursorIcon.className="slot-icon",this.cursorCnt=document.createElement("div"),this.cursorCnt.className="slot-count",this.cursorEl.append(this.cursorIcon,this.cursorCnt),this.cursorEl.style.display="none",this.cursorEl.style.pointerEvents="none",document.body.appendChild(this.cursorEl),document.addEventListener("pointermove",r=>{this.open&&(this.cursorEl.style.left=`${r.clientX}px`,this.cursorEl.style.top=`${r.clientY}px`,this.drag&&this.onDragMove(r))}),document.addEventListener("pointerup",r=>{this.open&&this.drag&&this.endDrag(r)}),document.addEventListener("pointercancel",r=>{var o;this.open&&((o=this.drag)==null?void 0:o.pointerId)===r.pointerId&&this.cancelDrag()})}makeSlot(t,e,n){const s=document.createElement("div");s.className="inv-slot",s.dataset.region=e,s.dataset.idx=String(n),s.style.touchAction="none";const r=document.createElement("div");r.className="slot-icon";const o=document.createElement("div");return o.className="slot-count",s.append(r,o),s.addEventListener("pointerdown",a=>{!a.isPrimary||a.pointerType==="mouse"&&a.button!==0&&a.button!==2||(a.preventDefault(),this.beginDrag(e,n,a))}),s.addEventListener("contextmenu",a=>a.preventDefault()),t.appendChild(s),{el:s,icon:r,cnt:o}}isOpen(){return this.open}show(t,e){this.inv=t,this.mode="survival",this.gridN=e,this.craft=Array.from({length:e},()=>Array(e).fill(null)),this.buildCraftGrid(e),this.titleEl.textContent=e>=3?"工作台":"背包",this.standardEl.classList.remove("hidden"),this.creativeEl.classList.add("hidden"),this.hintEl.textContent="轻点拿放 · 长按放一个/拿一半 · Shift 快速转移 · E / Esc 关闭",this.open=!0,this.root.classList.remove("hidden"),this.render()}showCreative(t){this.inv=t,this.mode="creative",this.gridN=0,this.craft=[],this.cursor=null,this.titleEl.textContent="创造模式物品栏",this.standardEl.classList.add("hidden"),this.creativeEl.classList.remove("hidden"),this.hintEl.textContent="左键拿一组 · 右键拿一个 · Shift 放入快捷栏 · 中键可在世界中选方块",this.open=!0,this.root.classList.remove("hidden"),this.rebuildCreativeCatalog(),this.render()}hide(){var e;this.cancelDrag();const t=[];for(const n of this.craft)for(let s=0;s<n.length;s++){const r=n[s];r&&(this.returnOrOverflow(r,t),n[s]=null)}return this.cursor&&(this.mode!=="creative"&&this.returnOrOverflow(this.cursor,t),this.cursor=null),this.open=!1,this.root.classList.add("hidden"),this.cursorEl.style.display="none",(e=this.onChange)==null||e.call(this),t}returnOrOverflow(t,e){const n=this.inv?dl(this.inv,t,Ln(t.id)):t.count;n<=0||e.push(t.dur===void 0?{id:t.id,count:n}:{id:t.id,count:n,dur:t.dur})}buildCraftGrid(t){this.cgridEl.innerHTML="",this.cgridEl.style.gridTemplateColumns=`repeat(${t}, 1fr)`,this.craftCells=[];for(let e=0;e<t*t;e++)this.craftCells.push(this.makeSlot(this.cgridEl,"craft",e))}beginDrag(t,e,n){var s,r,o,a,l;if(this.inv){if(this.cursorEl.style.left=`${n.clientX}px`,this.cursorEl.style.top=`${n.clientY}px`,t==="catalog"){const c=this.creativeIds[e],h=th(c,n.button===2);if(!h)return;if(n.shiftKey){const u=this.inv.slice(0,kn).findIndex(g=>(g==null?void 0:g.id)===c),d=this.inv.slice(0,kn).findIndex(g=>g===null),p=u>=0?u:d>=0?d:0;this.inv[p]=th(c),(s=this.onSelectHotbar)==null||s.call(this,p)}else this.cursor=h;this.render(),(r=this.onChange)==null||r.call(this);return}if(t==="trash"){n.shiftKey&&this.inv.fill(null),this.cursor=null,this.render(),(o=this.onChange)==null||o.call(this);return}if(t==="output"){this.takeOutput(),this.render(),(a=this.onChange)==null||a.call(this);return}if(n.shiftKey){this.quickMoveFrom(t,e),this.render(),(l=this.onChange)==null||l.call(this);return}this.drag={region:t,i:e,right:n.button===2,started:!1,mode:this.cursor?"distribute":"move",swept:[],sweptKeys:new Set,sweptCells:[],pointerId:n.pointerId,touch:n.pointerType==="touch",startX:n.clientX,startY:n.clientY,holdTimer:null,longPressed:!1},this.drag.touch&&this.startTouchHold(this.drag)}}onDragMove(t){const e=this.drag;if(!e||!this.inv||e.pointerId!==t.pointerId||(e.touch&&!e.longPressed&&Math.hypot(t.clientX-e.startX,t.clientY-e.startY)>mE&&this.clearTouchHold(e),e.longPressed))return;const n=this.slotAt(t);if(!e.started){if(!n||n.region===e.region&&n.i===e.i)return;e.started=!0,e.mode==="distribute"?(this.addSwept(e,e.region,e.i),this.addSwept(e,n.region,n.i)):(this.applyClick(e.region,e.i,!1),this.render());return}e.mode==="distribute"&&n&&this.addSwept(e,n.region,n.i)}endDrag(t){var n;const e=this.drag;if(!(!e||e.pointerId!==t.pointerId)){this.clearTouchHold(e),this.drag=null;for(const s of(e==null?void 0:e.sweptCells)??[])s.el.classList.remove("inv-drag-hi");if(this.inv&&!e.longPressed){if(!e.started)this.applyClick(e.region,e.i,e.right);else if(e.mode==="distribute")this.cursor=e.right?iE(e.swept,this.cursor,Ln):nE(e.swept,this.cursor,Ln);else{const s=this.slotAt(t);(s==null?void 0:s.region)==="trash"?this.cursor=null:s&&(s.region==="main"||s.region==="hotbar"||s.region==="craft")&&!(s.region===e.region&&s.i===e.i)&&this.applyClick(s.region,s.i,!1)}this.render(),(n=this.onChange)==null||n.call(this)}}}cancelDrag(){if(this.drag){this.clearTouchHold(this.drag);for(const t of this.drag.sweptCells)t.el.classList.remove("inv-drag-hi");this.drag=null}}startTouchHold(t){t.holdTimer=window.setTimeout(()=>{var e;t.holdTimer=null,!(!this.open||this.drag!==t||t.started||!this.inv)&&(t.longPressed=!0,this.applyClick(t.region,t.i,!0),this.render(),(e=this.onChange)==null||e.call(this))},pE)}clearTouchHold(t){t.holdTimer!==null&&(window.clearTimeout(t.holdTimer),t.holdTimer=null)}addSwept(t,e,n){if(e==="output"||e==="catalog"||e==="trash")return;const s=`${e}:${n}`;if(t.sweptKeys.has(s))return;t.sweptKeys.add(s),t.swept.push(this.slotRef(e,n));const r=this.cellOf(e,n);r&&(r.el.classList.add("inv-drag-hi"),t.sweptCells.push(r))}applyClick(t,e,n){if(this.inv){if(t==="craft"){const s=this.gridN,r=this.craft[Math.floor(e/s)],o=e%s;this.cursor=n?Qa(r,o,this.cursor,Ln):Za(r,o,this.cursor,Ln)}else if(t==="main"||t==="hotbar"){const s=t==="main"?kn+e:e;this.cursor=n?Qa(this.inv,s,this.cursor,Ln):Za(this.inv,s,this.cursor,Ln)}}}slotRef(t,e){if(t==="craft"){const r=this.gridN,o=this.craft[Math.floor(e/r)],a=e%r;return{get:()=>o[a],set:l=>o[a]=l}}if(t!=="main"&&t!=="hotbar")throw new Error("只允许拖到背包格");const n=this.inv,s=t==="main"?kn+e:e;return{get:()=>n[s],set:r=>n[s]=r}}slotAt(t){const e=document.elementFromPoint(t.clientX,t.clientY),n=e==null?void 0:e.closest(".inv-slot");return!n||n.dataset.region===void 0?null:{region:n.dataset.region,i:Number(n.dataset.idx)}}cellOf(t,e){return t==="main"?this.mainCells[e]??null:t==="hotbar"?this.hotbarCells[e]??null:t==="craft"?this.craftCells[e]??null:t==="catalog"?this.creativeCells[e]??null:t==="trash"?this.trashCell:null}quickMoveFrom(t,e){if(this.inv)if(t==="craft"){const n=this.gridN;wc(this.craft[Math.floor(e/n)],e%n,this.inv,Ln)}else t==="main"?wc(this.inv,kn+e,this.inv,Ln,0,kn):t==="hotbar"&&wc(this.inv,e,this.inv,Ln,kn,kn+Sc)}rebuildCreativeCatalog(){const t=this.creativeSearchEl.value.trim().toLocaleLowerCase(),e=t?o0:RT(this.creativeCategory);this.creativeIds=t?e.filter(n=>jr(n).toLocaleLowerCase().includes(t)||String(n)===t):e,this.creativeGridEl.innerHTML="",this.creativeCells=[];for(let n=0;n<this.creativeIds.length;n++){const s=this.makeSlot(this.creativeGridEl,"catalog",n);s.el.title=jr(this.creativeIds[n]),this.creativeCells.push(s)}for(const n of this.creativeTabButtons)n.classList.toggle("active",n.dataset.category===this.creativeCategory);this.render()}takeOutput(){const t=qf(this.craft);if(t){if(!this.cursor)this.cursor={id:t.id,count:t.count};else if(this.cursor.id===t.id&&this.cursor.count+t.count<=Ln(t.id))this.cursor.count+=t.count;else return;fE(this.craft)}}render(){if(!this.inv)return;for(let e=0;e<Sc;e++)this.paint(this.mainCells[e],this.inv[kn+e]);for(let e=0;e<kn;e++)this.paint(this.hotbarCells[e],this.inv[e]);const t=this.gridN;for(let e=0;e<this.craftCells.length;e++)this.paint(this.craftCells[e],this.craft[Math.floor(e/t)][e%t]);if(this.paint(this.outCell,qf(this.craft)),this.mode==="creative")for(let e=0;e<this.creativeCells.length;e++)this.paint(this.creativeCells[e],{id:this.creativeIds[e],count:1});this.cursor?(this.cursorEl.style.display="block",this.fill(this.cursorIcon,this.cursorCnt,this.cursor)):this.cursorEl.style.display="none"}paint(t,e){this.fill(t.icon,t.cnt,e)}fill(t,e,n){if(n&&n.count>0){const s=ls(n.id);s?(t.style.backgroundImage=`url(${s})`,t.textContent="",t.classList.remove("txt")):(t.style.backgroundImage="none",t.textContent=jr(n.id),t.classList.add("txt")),e.textContent=n.count>1?String(n.count):""}else t.style.backgroundImage="none",t.textContent="",t.classList.remove("txt"),e.textContent=""}}const qh=200,vE=64,f0={[Q1]:1,[J1]:Bm,[Nh]:zm,[Fh]:Hm,[Oh]:Wm,[Bh]:Gm},_E={[km]:1600,[rw]:16e3,[ll]:300,[cl]:300,[Z1]:300,[um]:300,[Lm]:100,[Im]:200,[Um]:200,[Nm]:200,[Fm]:200,[Om]:200},p0=i=>f0[i],nh=i=>_E[i]??0,$f=i=>nh(i)>0,Yf=i=>i in f0;function xE(){return{input:0,inputN:0,fuel:0,fuelN:0,output:0,outputN:0,burn:0,burnMax:0,cook:0}}function m0(i){if(i.inputN<=0)return!1;const t=p0(i.input);return t===void 0?!1:i.outputN===0||i.output===t&&i.outputN<vE}function yE(i){const t=i.burn>0||i.cook>0,e=m0(i);if(i.burn>0&&i.burn--,i.burn===0&&e&&i.fuelN>0&&nh(i.fuel)>0&&(i.burnMax=nh(i.fuel),i.burn=i.burnMax,i.fuelN--,i.fuelN===0&&(i.fuel=0,delete i.fuelDur)),i.burn>0&&e){if(i.cook++,i.cook>=qh){i.cook=0;const n=p0(i.input);i.inputN--,i.inputN===0&&(i.input=0),i.output=n,i.outputN++}}else i.cook=Math.max(0,i.cook-2);return t||i.burn>0||i.cook>0}function ME(i){return i.burn>0||i.fuelN>0&&m0(i)}const Mi=i=>as(i),_a=9,Kf=27,wE=420,SE=12;class bE{constructor(t){y(this,"root");y(this,"inv",null);y(this,"furnace",null);y(this,"cursor",null);y(this,"open",!1);y(this,"cursorEl");y(this,"cursorIcon");y(this,"cursorCnt");y(this,"inputCell");y(this,"fuelCell");y(this,"outCell");y(this,"flameEl");y(this,"arrowFillEl");y(this,"mainCells",[]);y(this,"hotbarCells",[]);y(this,"touchPress",null);y(this,"onChange",null);y(this,"onClose",null);this.root=t,t.classList.add("hidden"),t.innerHTML=`
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
      </div>`,t.querySelector(".inv-close").addEventListener("click",()=>{var r;return(r=this.onClose)==null?void 0:r.call(this)});const e=r=>this.bindSlot(t.querySelector(r));this.inputCell=e(".fur-input"),this.fuelCell=e(".fur-fuel"),this.outCell=e(".fur-out"),this.inputCell.el.addEventListener("pointerdown",r=>this.onFurnacePointerDown("input",r)),this.fuelCell.el.addEventListener("pointerdown",r=>this.onFurnacePointerDown("fuel",r)),this.outCell.el.addEventListener("pointerdown",r=>this.onFurnacePointerDown("output",r)),this.flameEl=t.querySelector(".fur-flame-fill"),this.arrowFillEl=t.querySelector(".fur-arrow-fill");const n=t.querySelector(".inv-main"),s=t.querySelector(".inv-hotbar");for(let r=0;r<Kf;r++)this.mainCells.push(this.makeInvSlot(n,"main",r));for(let r=0;r<_a;r++)this.hotbarCells.push(this.makeInvSlot(s,"hotbar",r));this.cursorEl=document.createElement("div"),this.cursorEl.className="inv-cursor",this.cursorIcon=document.createElement("div"),this.cursorIcon.className="slot-icon",this.cursorCnt=document.createElement("div"),this.cursorCnt.className="slot-count",this.cursorEl.append(this.cursorIcon,this.cursorCnt),this.cursorEl.style.display="none",this.cursorEl.style.pointerEvents="none",document.body.appendChild(this.cursorEl),document.addEventListener("pointermove",r=>{this.open&&(this.cursorEl.style.left=`${r.clientX}px`,this.cursorEl.style.top=`${r.clientY}px`,this.updateTouchPressMove(r))}),document.addEventListener("pointerup",r=>this.endTouchPress(r)),document.addEventListener("pointercancel",r=>{var o;((o=this.touchPress)==null?void 0:o.pointerId)===r.pointerId&&this.cancelTouchPress()})}bindSlot(t){t.classList.add("inv-slot"),t.style.touchAction="none";const e=document.createElement("div");e.className="slot-icon";const n=document.createElement("div");return n.className="slot-count",t.append(e,n),t.addEventListener("contextmenu",s=>s.preventDefault()),{el:t,icon:e,cnt:n}}makeInvSlot(t,e,n){const s=document.createElement("div");s.className="inv-slot",s.style.touchAction="none";const r=document.createElement("div");r.className="slot-icon";const o=document.createElement("div");return o.className="slot-count",s.append(r,o),s.addEventListener("pointerdown",a=>{this.onInventoryPointerDown(e,n,a)}),s.addEventListener("contextmenu",a=>a.preventDefault()),t.appendChild(s),{el:s,icon:r,cnt:o}}isOpen(){return this.open}show(t,e){this.inv=t,this.furnace=e,this.open=!0,this.root.classList.remove("hidden"),this.render()}hide(){var e;this.cancelTouchPress();const t=[];if(this.cursor){const n=this.inv?dl(this.inv,this.cursor,Mi(this.cursor.id)):this.cursor.count;n>0&&t.push(this.cursor.dur===void 0?{id:this.cursor.id,count:n}:{id:this.cursor.id,count:n,dur:this.cursor.dur}),this.cursor=null}return this.open=!1,this.root.classList.add("hidden"),this.cursorEl.style.display="none",(e=this.onChange)==null||e.call(this),t}onInventoryPointerDown(t,e,n){this.isSupportedPointer(n)&&(n.preventDefault(),this.positionCursor(n),n.pointerType==="touch"?this.beginTouchPress(n,s=>this.performInventoryClick(t,e,s,!1)):this.performInventoryClick(t,e,n.button===2,n.shiftKey))}onFurnacePointerDown(t,e){this.isSupportedPointer(e)&&(e.preventDefault(),this.positionCursor(e),e.pointerType==="touch"?this.beginTouchPress(e,n=>this.performFurnaceClick(t,n)):this.performFurnaceClick(t,e.button===2))}isSupportedPointer(t){return t.isPrimary&&(t.pointerType!=="mouse"||t.button===0||t.button===2)}positionCursor(t){this.cursorEl.style.left=`${t.clientX}px`,this.cursorEl.style.top=`${t.clientY}px`}performInventoryClick(t,e,n,s){var o;if(!this.inv)return;const r=t==="main"?_a+e:e;s?this.shiftToFurnace(r):this.cursor=n?Qa(this.inv,r,this.cursor,Mi):Za(this.inv,r,this.cursor,Mi),this.render(),(o=this.onChange)==null||o.call(this)}shiftToFurnace(t){const e=this.furnace,n=this.inv;if(!e||!n)return;const s=n[t];if(!s)return;const r=$f(s.id),o=e.fuelN<=0,a=!o&&br({id:e.fuel,dur:e.fuelDur},s);if(r&&(o||a)){const l=Mi(s.id)-e.fuelN,c=Math.min(l,s.count);if(c<=0)return;o&&(e.fuel=s.id,s.dur===void 0?delete e.fuelDur:e.fuelDur=s.dur),e.fuelN+=c,s.count-=c,s.count<=0&&(n[t]=null)}else if(!r&&Yf(s.id)&&(e.input===0||e.input===s.id)){const l=Mi(s.id)-e.inputN,c=Math.min(l,s.count);e.input=s.id,e.inputN+=c,s.count-=c,s.count<=0&&(n[t]=null)}}performFurnaceClick(t,e){var s;const n=this.furnace;if(n){if(t==="output")this.takeOutput();else{const r=t==="input"?n.input:n.fuel,o=t==="input"?n.inputN:n.fuelN,a=[o>0?t==="fuel"&&n.fuelDur!==void 0?{id:r,count:o,dur:n.fuelDur}:{id:r,count:o}:null];if(t==="fuel"&&this.cursor&&!$f(this.cursor.id)||t==="input"&&this.cursor&&!Yf(this.cursor.id))return;this.cursor=e?Qa(a,0,this.cursor,Mi):Za(a,0,this.cursor,Mi);const l=a[0];t==="input"?(n.input=(l==null?void 0:l.id)??0,n.inputN=(l==null?void 0:l.count)??0):(n.fuel=(l==null?void 0:l.id)??0,n.fuelN=(l==null?void 0:l.count)??0,(l==null?void 0:l.dur)===void 0?delete n.fuelDur:n.fuelDur=l.dur)}this.render(),(s=this.onChange)==null||s.call(this)}}beginTouchPress(t,e){this.cancelTouchPress();const n={pointerId:t.pointerId,startX:t.clientX,startY:t.clientY,holdTimer:null,moved:!1,longPressed:!1,activate:e};this.touchPress=n,n.holdTimer=window.setTimeout(()=>{n.holdTimer=null,!(!this.open||this.touchPress!==n||n.moved)&&(n.longPressed=!0,n.activate(!0))},wE)}updateTouchPressMove(t){const e=this.touchPress;!e||e.pointerId!==t.pointerId||e.longPressed||Math.hypot(t.clientX-e.startX,t.clientY-e.startY)<=SE||(e.moved=!0,this.clearTouchPressTimer(e))}endTouchPress(t){const e=this.touchPress;!e||e.pointerId!==t.pointerId||(this.clearTouchPressTimer(e),this.touchPress=null,!e.moved&&!e.longPressed&&e.activate(!1))}cancelTouchPress(){this.touchPress&&(this.clearTouchPressTimer(this.touchPress),this.touchPress=null)}clearTouchPressTimer(t){t.holdTimer!==null&&(window.clearTimeout(t.holdTimer),t.holdTimer=null)}takeOutput(){const t=this.furnace;!t||t.outputN<=0||(this.cursor?this.cursor.id===t.output&&this.cursor.count+t.outputN<=Mi(t.output)&&(this.cursor.count+=t.outputN,t.output=0,t.outputN=0):(this.cursor={id:t.output,count:t.outputN},t.output=0,t.outputN=0))}render(){if(!this.inv||!this.furnace)return;const t=this.furnace;for(let e=0;e<Kf;e++)this.fill(this.mainCells[e],this.inv[_a+e]);for(let e=0;e<_a;e++)this.fill(this.hotbarCells[e],this.inv[e]);this.fill(this.inputCell,t.inputN>0?{id:t.input,count:t.inputN}:null),this.fill(this.fuelCell,t.fuelN>0?t.fuelDur===void 0?{id:t.fuel,count:t.fuelN}:{id:t.fuel,count:t.fuelN,dur:t.fuelDur}:null),this.fill(this.outCell,t.outputN>0?{id:t.output,count:t.outputN}:null),this.flameEl.style.height=`${t.burnMax>0?Math.round(t.burn/t.burnMax*100):0}%`,this.arrowFillEl.style.width=`${Math.round(t.cook/qh*100)}%`,this.cursor?(this.cursorEl.style.display="block",this.fillRaw(this.cursorIcon,this.cursorCnt,this.cursor)):this.cursorEl.style.display="none"}fill(t,e){this.fillRaw(t.icon,t.cnt,e)}fillRaw(t,e,n){if(n&&n.count>0){const s=ls(n.id);s?(t.style.backgroundImage=`url(${s})`,t.textContent="",t.classList.remove("txt")):(t.style.backgroundImage="none",t.textContent=jr(n.id),t.classList.add("txt")),e.textContent=n.count>1?String(n.count):""}else t.style.backgroundImage="none",t.textContent="",t.classList.remove("txt"),e.textContent=""}}const bc=21,Tc=21;function jf(i,t,e,n,s,r){const o=(m,f)=>r==="x"?[e+m,n+f,s]:[e,n+f,s+m],a=(m,f)=>t(...o(m,f)),l=(m,f)=>i(...o(m,f));if(!a(0,0))return null;let c=0;for(;-c<bc&&a(c-1,0);)c--;let h=0;for(;h<bc&&a(h+1,0);)h++;let u=0;for(;-u<Tc&&a(0,u-1);)u--;let d=0;for(;d<Tc&&a(0,d+1);)d++;const p=h-c+1,g=d-u+1;if(p<2||p>bc||g<3||g>Tc)return null;for(let m=c;m<=h;m++)for(let f=u;f<=d;f++)if(!a(m,f))return null;for(let m=u;m<=d;m++)if(!l(c-1,m)||!l(h+1,m))return null;for(let m=c;m<=h;m++)if(!l(m,u-1)||!l(m,d+1))return null;const v=[];for(let m=c;m<=h;m++)for(let f=u;f<=d;f++)v.push(o(m,f));return{axis:r,inner:v}}function g0(i,t,e,n,s){return jf(i,t,e,n,s,"x")??jf(i,t,e,n,s,"z")}const v0=31,TE=127,EE=191;function AE(i,t,e,n,s){const r=(c,h,u)=>i(c,h,u)===18,o=(c,h,u)=>{const d=i(c,h,u);return d===0||d===25},a=[];s&&a.push(s),a.push([t,e+1,n],[t,e-1,n],[t+1,e,n],[t-1,e,n],[t,e,n+1],[t,e,n-1]);const l=new Set;for(const[c,h,u]of a){const d=`${c},${h},${u}`;if(l.has(d)||(l.add(d),!o(c,h,u)))continue;const p=g0(r,o,c,h,u);if(p)return p.inner}return null}function RE(i,t,e){return i==="overworld"?[Math.floor(t/8),Math.floor(e/8)]:[Math.floor(t*8),Math.floor(e*8)]}function CE(i,t,e,n){if(t==="overworld"){for(let o=EE;o>1;o--)if(xe(i(e,o,n))&&!xe(i(e,o+1,n)))return o+1;return null}const s=v0+2,r=TE-8;for(let o=s;o<=r;o++){if(!xe(i(e,o-1,n)))continue;let a=!1;for(let l=0;l<3;l++)if(jc(i(e,o+l,n))){a=!0;break}if(!a)return o}return null}function PE(i,t,e,n){let s=CE(i,t,e,n),r=!1;s===null&&(s=t==="nether"?v0+10:64,r=!0);const o=new Map,a=(d,p,g)=>`${d},${p},${g}`,l=(d,p,g,v)=>{o.set(a(d,p,g),[d,p,g,v])},c=e,h=e+1,u=s+2;for(let d=e-1;d<=e+2;d++)for(let p=s-1;p<=s+3;p++)for(let g=n-1;g<=n+1;g++)l(d,p,g,0);for(let d=e-1;d<=e+2;d++)l(d,s-1,n,bn),l(d,s+3,n,bn);for(let d=s-1;d<=s+3;d++)l(e-1,d,n,bn),l(e+2,d,n,bn);for(let d=c;d<=h;d++)for(let p=s;p<=u;p++)l(d,p,n,bi);if(l(c,s-1,n-1,bn),l(h,s-1,n-1,bn),r)for(let d=e-1;d<=e+2;d++)for(let p=n-1;p<=n+1;p++)l(d,s-1,p,bn);return{edits:[...o.values()],spawn:{x:c+.5,y:s,z:n+.5}}}const Ec=600;class DE{constructor(t){y(this,"geom",new Ve);y(this,"pos",new Float32Array(Ec*3));y(this,"col",new Float32Array(Ec*3));y(this,"posAttr");y(this,"colAttr");y(this,"points");this.posAttr=new ue(this.pos,3),this.colAttr=new ue(this.col,3),this.posAttr.setUsage(Gu),this.colAttr.setUsage(Gu),this.geom.setAttribute("position",this.posAttr),this.geom.setAttribute("color",this.colAttr),this.geom.setDrawRange(0,0);const e=new Th({size:.13,vertexColors:!0,sizeAttenuation:!0,transparent:!0,depthWrite:!1});this.points=new nm(this.geom,e),this.points.layers.set(co),this.points.frustumCulled=!1,t.add(this.points)}sync(t){const e=Math.min(t.length,Ec);for(let n=0;n<e;n++){const s=t[n];this.pos[n*3]=s.x,this.pos[n*3+1]=s.y,this.pos[n*3+2]=s.z,this.col[n*3]=s.r,this.col[n*3+1]=s.g,this.col[n*3+2]=s.b}this.geom.setDrawRange(0,e),this.posAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0}}const ri={extent:900,weatherTextureSize:128,detailTextureSize:64,standardSteps:36,highSteps:64,reflectionSteps:20};function Ac(i){return i==="high"?ri.highSteps:i==="standard"?ri.standardSteps:0}const Rc=(i,t)=>(i%t+t)%t,LE=(i,t,e)=>{let n=Math.imul(i^1757159915,668265261);return n=Math.imul(n^t,374761393),n=Math.imul(n^e,461845907),n^=n>>>15,n=Math.imul(n,2246822507),n^=n>>>13,(n>>>0)/4294967295},Cc=i=>i*i*(3-2*i),kE=(i,t,e,n)=>{const s=Math.floor(i),r=Math.floor(t),o=Math.floor(e),a=Cc(i-s),l=Cc(t-r),c=Cc(e-o),h=(f,x,_)=>LE(Rc(s+f,n),Rc(r+x,n),Rc(o+_,n)),u=h(0,0,0)*(1-a)+h(1,0,0)*a,d=h(0,1,0)*(1-a)+h(1,1,0)*a,p=h(0,0,1)*(1-a)+h(1,0,1)*a,g=h(0,1,1)*(1-a)+h(1,1,1)*a,v=u*(1-l)+d*l,m=p*(1-l)+g*l;return v*(1-c)+m*c};function IE(i,t,e){let n=0,s=0,r=1;for(const o of[2,4,8,16])n+=kE(i*o,t*o,e*o,o)*r,s+=r,r*=.52;return n/s}function UE(i=ri.detailTextureSize){if(!Number.isInteger(i)||i<16||i&i-1)throw new Error("cloud volume texture size must be a power of two >= 16");const t=new Float32Array(i*i*i);let e=1/0,n=-1/0,s=0;for(let a=0;a<i;a++)for(let l=0;l<i;l++)for(let c=0;c<i;c++){const h=IE(c/i,l/i,a/i);t[s++]=h,e=Math.min(e,h),n=Math.max(n,h)}const r=new Uint8Array(t.length),o=Math.max(1e-6,n-e);for(let a=0;a<t.length;a++)r[a]=Math.round((t[a]-e)/o*255);return r}function NE(i=ri.weatherTextureSize){const t=new bh(Cm(i),i,i,gn);return t.name="mineworld-cloud-weather",t.wrapS=xn,t.wrapT=xn,t.magFilter=Te,t.minFilter=ni,t.generateMipmaps=!0,t.colorSpace=mn,t.needsUpdate=!0,t}function FE(i=ri.detailTextureSize){const t=new Fp(UE(i),i,i,i);return t.name="mineworld-cloud-detail-3d",t.format=Ap,t.type=hi,t.wrapS=xn,t.wrapT=xn,t.wrapR=xn,t.magFilter=Te,t.minFilter=Te,t.unpackAlignment=1,t.colorSpace=mn,t.needsUpdate=!0,t}const OE=`
varying vec3 vCloudExit;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vCloudExit = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`.trim(),BE=`
uniform sampler2D uCloudWeather;
uniform sampler3D uCloudDetail3D;
uniform float uTime;
uniform int uStepCount;
uniform vec3 uTint;
uniform vec3 uSunDir;
varying vec3 vCloudExit;

const float MW_CLOUD_MIN_Y = 145.0;
const float MW_CLOUD_MAX_Y = 365.0;
const float MW_CLOUD_MAX_DISTANCE = 850.0;
const float MW_CLOUD_FADE_START = 650.0;
const float MW_CLOUD_WEATHER_SCALE = 0.0038;
const float MW_CLOUD_EXTINCTION = 0.042;

float mwSmooth01(float x) {
  x = clamp(x, 0.0, 1.0);
  return x * x * (3.0 - 2.0 * x);
}

float mwProfile(float h, float topStart) {
  float bottom = mwSmooth01(h / 0.12);
  float top = 1.0 - mwSmooth01((h - topStart) / max(0.01, 1.0 - topStart));
  return bottom * top;
}

mat2 mwCloudRotation() {
  return mat2(0.8192, -0.5736, 0.5736, 0.8192);
}

vec3 mwRotateVolume(vec3 p) {
  return vec3(
    p.x * 0.816 + p.z * 0.412 - p.y * 0.074,
    p.y * 0.923 + p.x * 0.218 + p.z * 0.119,
    p.z * 0.872 - p.x * 0.357 + p.y * 0.164
  );
}

float mwCloudDensity(vec3 p) {
  vec2 weatherWind = vec2(uTime * 0.0014, uTime * 0.0008);
  vec2 weatherUv = p.xz * MW_CLOUD_WEATHER_SCALE + weatherWind;
  vec4 weatherA = texture2D(uCloudWeather, weatherUv);
  vec4 weatherB = texture2D(
    uCloudWeather,
    mwCloudRotation() * (weatherUv * 0.61) + vec2(0.347, 0.791) - weatherWind * 0.19
  );
  float coverage = clamp(weatherA.b * 0.68 + weatherB.b * 0.32, 0.0, 1.0);
  float convection = smoothstep(0.49, 0.84, coverage * 0.62 + weatherB.b * 0.38);

  // Every weather cell gets its own base and top. Towering cells can rise over
  // 130 blocks while neighbouring fair-weather clouds remain much lower.
  float baseY = mix(166.0, 215.0, weatherB.b);
  float topY = baseY + mix(42.0, 132.0, convection) + (weatherA.b - 0.5) * 12.0;
  float height = (p.y - baseY) / max(18.0, topY - baseY);
  float bodyProfile = mwProfile(height, mix(0.54, 0.70, convection));

  vec3 wind3 = vec3(uTime * 0.0012, uTime * 0.00008, uTime * 0.00065);
  vec3 broadUv = p * vec3(0.0048, 0.0064, 0.0048) + wind3;
  float broad = texture(uCloudDetail3D, broadUv).r;
  vec3 detailUv = mwRotateVolume(p) * vec3(0.0135, 0.0175, 0.0135)
    - wind3 * 1.7 + vec3(0.173, 0.619, 0.347);
  float detail = texture(uCloudDetail3D, detailUv).r;
  float bodyNoise = broad * 0.76 + detail * 0.24;
  float bodyThreshold = mix(0.66, 0.45, smoothstep(0.30, 0.78, coverage));
  bodyThreshold += (1.0 - bodyProfile) * 0.15 + (detail - 0.5) * 0.025;
  float cumulus = smoothstep(bodyThreshold, bodyThreshold + 0.18, bodyNoise) * bodyProfile;

  // A second, independently placed low field provides detached foreground
  // puffs. It has its own base/top and 3D phase, so the result is not one lid.
  vec2 lowWeatherUv = mwCloudRotation() * (weatherUv * 0.73)
    + vec2(0.713, 0.269) + weatherWind * 0.22;
  float lowWeather = texture2D(uCloudWeather, lowWeatherUv).b;
  float lowCoverage = smoothstep(0.58, 0.84, lowWeather);
  float lowBase = mix(148.0, 176.0, weatherA.b);
  float lowTop = lowBase + mix(34.0, 66.0, lowWeather);
  float lowHeight = (p.y - lowBase) / max(18.0, lowTop - lowBase);
  float lowProfile = mwProfile(lowHeight, 0.62);
  float lowBroad = texture(uCloudDetail3D, broadUv * 1.17 + vec3(0.47, 0.11, 0.73)).r;
  float lowDetail = texture(uCloudDetail3D, detailUv * 0.91 + vec3(0.19, 0.67, 0.31)).r;
  float lowShape = lowBroad * 0.79 + lowDetail * 0.21;
  float scattered = smoothstep(0.58, 0.76, lowShape) * lowProfile * lowCoverage * 0.58;
  return clamp(max(cumulus, scattered), 0.0, 1.0);
}

void main() {
  vec3 rayDir = normalize(vCloudExit - cameraPosition);
  if (abs(rayDir.y) < 0.00001) discard;

  float ta = (MW_CLOUD_MIN_Y - cameraPosition.y) / rayDir.y;
  float tb = (MW_CLOUD_MAX_Y - cameraPosition.y) / rayDir.y;
  float rayEnter = max(0.0, min(ta, tb));
  float rayExit = min(max(ta, tb), MW_CLOUD_MAX_DISTANCE);
  if (rayExit <= rayEnter) discard;

  float distanceFade = 1.0 - smoothstep(MW_CLOUD_FADE_START, MW_CLOUD_MAX_DISTANCE, rayEnter);
  if (distanceFade <= 0.001) discard;

  float stepLength = (rayExit - rayEnter) / float(max(uStepCount, 1));
  vec3 sunDir = normalize(uSunDir);
  float sunHeight = smoothstep(-0.05, 0.42, sunDir.y);
  float viewSun = clamp(dot(rayDir, sunDir), -1.0, 1.0);
  const float g = 0.45;
  float hg = (1.0 - g * g) / pow(max(0.08, 1.0 + g * g - 2.0 * g * viewSun), 1.5);
  float phase = clamp(0.34 + hg * 0.13, 0.32, 1.18);
  vec3 warmSun = mix(vec3(1.0, 0.42, 0.12), vec3(1.0, 0.96, 0.82), sunHeight);
  vec3 ambient = uTint * mix(0.30, 0.56, sunHeight);
  // A continuous world/ray-space phase breaks coherent march contours without
  // temporal noise or frame accumulation. It moves smoothly with camera and ray.
  float samplePhase = 0.2 + texture(
    uCloudDetail3D,
    cameraPosition * 0.0013 + rayDir * vec3(0.37, 0.19, 0.29)
  ).r * 0.6;

  vec3 integrated = vec3(0.0);
  float transmittance = 1.0;
  for (int i = 0; i < 64; i++) {
    if (i >= uStepCount) break;
    float t = rayEnter + (float(i) + samplePhase) * stepLength;
    vec3 p = cameraPosition + rayDir * t;
    float density = mwCloudDensity(p);
    if (density > 0.001) {
      vec3 wind3 = vec3(uTime * 0.0012, uTime * 0.00008, uTime * 0.00065);
      float ahead = texture(
        uCloudDetail3D,
        (p + sunDir * 32.0) * vec3(0.0048, 0.0064, 0.0048) + wind3
      ).r;
      float selfShadow = exp(-max(ahead + density * 0.34 - 0.5, 0.0) * 2.7);
      float edgeLight = pow(max(viewSun, 0.0), 5.0) * (1.0 - density) * sunHeight;
      float altitudeLight = mix(0.76, 1.08, smoothstep(150.0, 330.0, p.y));
      vec3 lighting = (ambient + warmSun * sunHeight * phase * selfShadow * 0.74)
        * altitudeLight;
      lighting += vec3(1.0, 0.91, 0.72) * edgeLight * 0.25;
      lighting = min(lighting, vec3(1.18));
      float sampleAlpha = 1.0 - exp(-density * MW_CLOUD_EXTINCTION * stepLength);
      integrated += transmittance * sampleAlpha * lighting;
      transmittance *= 1.0 - sampleAlpha;
      if (transmittance < 0.03) break;
    }
  }

  float opacity = 1.0 - transmittance;
  if (opacity < 0.002) discard;
  vec3 straightColor = integrated / max(opacity, 0.001);
  gl_FragColor = vec4(straightColor, opacity * distanceFade);
  #include <colorspace_fragment>
}
`.trim(),zE=280,Zf=7.4,Qf=8.8,Jf=32,Pc=`
varying vec2 vDisc;
void main() {
  vDisc = uv * 2.0 - 1.0;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`.trim(),HE=`
uniform float uVisibility;
varying vec2 vDisc;
void main() {
  float radius = length(vDisc);
  float aa = max(fwidth(radius) * 1.35, 0.0015);
  float mask = (1.0 - smoothstep(1.0 - aa, 1.0 + aa, radius)) * uVisibility;
  if (mask < 0.001) discard;
  float mu = sqrt(max(0.0, 1.0 - radius * radius));
  vec3 limb = mix(vec3(1.0, 0.68, 0.28), vec3(1.0, 0.97, 0.79), pow(mu, 0.55));
  float radiance = mix(2.8, 4.8, pow(mu, 0.42));
  gl_FragColor = vec4(limb * radiance, mask);
  #include <colorspace_fragment>
}
`.trim(),WE=`
uniform float uVisibility;
varying vec2 vDisc;
void main() {
  float radius = length(vDisc);
  if (radius >= 1.0) discard;
  float glow = pow(1.0 - radius, 2.6) * 0.075 * uVisibility;
  gl_FragColor = vec4(vec3(1.0, 0.78, 0.38) * glow, 1.0);
  #include <colorspace_fragment>
}
`.trim(),GE=`
uniform float uVisibility;
varying vec2 vDisc;

float mwMoonHash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}
float mwMoonNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = mwMoonHash(i);
  float b = mwMoonHash(i + vec2(1.0, 0.0));
  float c = mwMoonHash(i + vec2(0.0, 1.0));
  float d = mwMoonHash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float mwCrater(vec2 p, vec2 centre, float radius) {
  float d = length(p - centre) / radius;
  float bowl = 1.0 - smoothstep(0.0, 0.72, d);
  float rim = smoothstep(0.64, 0.82, d) * (1.0 - smoothstep(0.82, 1.04, d));
  return bowl * 0.16 - rim * 0.045;
}
void main() {
  float r2 = dot(vDisc, vDisc);
  float radius = sqrt(r2);
  float aa = max(fwidth(radius) * 1.45, 0.0015);
  float mask = (1.0 - smoothstep(1.0 - aa, 1.0 + aa, radius)) * uVisibility;
  if (mask < 0.001) discard;

  float sphereZ = sqrt(max(0.0, 1.0 - r2));
  float maria = mwMoonNoise(vDisc * 2.15 + vec2(4.7, -2.9)) * 0.68
    + mwMoonNoise(vDisc * 5.4 + vec2(-8.2, 7.1)) * 0.32;
  float albedo = 0.94 - smoothstep(0.48, 0.73, maria) * 0.18;
  albedo -= mwCrater(vDisc, vec2(-0.33, 0.24), 0.19);
  albedo -= mwCrater(vDisc, vec2(0.28, 0.08), 0.14);
  albedo -= mwCrater(vDisc, vec2(-0.08, -0.34), 0.12);
  albedo -= mwCrater(vDisc, vec2(0.42, -0.31), 0.085);
  albedo -= mwCrater(vDisc, vec2(0.02, 0.46), 0.072);
  float sphereLight = 0.28 + 0.72 * pow(sphereZ, 0.58);
  vec3 moonTint = mix(vec3(0.46, 0.53, 0.67), vec3(0.82, 0.87, 0.96), sphereLight);
  gl_FragColor = vec4(moonTint * albedo * sphereLight, mask);
  #include <colorspace_fragment>
}
`.trim();function VE(){const t=new Float32Array(2550),e=new Float32Array(850*3),n=310;let s=12345;const r=()=>(s=s*1664525+1013904223>>>0,s/4294967296);for(let c=0;c<850;c++){const h=r()*2-1,u=r()*Math.PI*2,d=Math.sqrt(1-h*h);t[c*3]=Math.cos(u)*d*n,t[c*3+1]=Math.sin(u)*d*n,t[c*3+2]=h*n;const p=.35+r()*.65;e[c*3]=p,e[c*3+1]=p,e[c*3+2]=Math.min(1,p*(.92+r()*.16))}const o=new Ve;o.setAttribute("position",new ue(t,3)),o.setAttribute("color",new ue(e,3));const a=new Th({size:1.7,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),l=new nm(o,a);return l.frustumCulled=!1,l}function XE(){const i=document.createElement("canvas");i.width=i.height=16;const t=i.getContext("2d");return t.fillStyle="#fff6c0",t.fillRect(1,1,14,14),t.fillStyle="#ffe25a",t.fillRect(3,3,10,10),t.fillStyle="#ffcf26",t.fillRect(5,5,6,6),_0(i)}function qE(){const i=document.createElement("canvas");i.width=i.height=16;const t=i.getContext("2d");return t.fillStyle="#eef2f7",t.fillRect(2,2,12,12),t.fillStyle="#c2ccd8",t.fillRect(5,4,3,3),t.fillRect(9,7,2,2),t.fillRect(4,9,2,3),t.fillRect(10,11,2,2),_0(i)}function _0(i){const t=new al(i);return t.magFilter=de,t.minFilter=de,t.colorSpace=ae,t}function xa(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Dc(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=xa(e,n),c=xa(e+1,n),h=xa(e,n+1),u=xa(e+1,n+1);return l*(1-o)*(1-a)+c*o*(1-a)+h*(1-o)*a+u*o*a}function $E(i,t){return Dc(i,t)*.6+Dc(i*2.3+5.1,t*2.3-3.7)*.3+Dc(i*4.7,t*4.7)*.1}const ti=16,YE=5,ya=28,KE=232,tp=.18,jE=.62,ZE=.72;function QE(i,t){return $E(i*tp,t*tp)>jE}const JE=[{o:[[1,-1,-1],[1,1,-1],[1,1,1],[1,-1,1]],s:.82},{o:[[-1,-1,1],[-1,1,1],[-1,1,-1],[-1,-1,-1]],s:.82},{o:[[-1,1,-1],[-1,1,1],[1,1,1],[1,1,-1]],s:1},{o:[[-1,-1,1],[-1,-1,-1],[1,-1,-1],[1,-1,1]],s:.6},{o:[[1,-1,1],[1,1,1],[-1,1,1],[-1,-1,1]],s:.88},{o:[[-1,-1,-1],[-1,1,-1],[1,1,-1],[1,-1,-1]],s:.88}];function t2(i,t,e,n,s,r,o,a,l){const c=o/2,h=a/2,u=l/2;for(const d of JE){const p=i.length/3;for(const[g,v,m]of d.o)i.push(n+g*c,s+v*h,r+m*u),t.push(d.s,d.s,d.s);e.push(p,p+1,p+2,p,p+2,p+3)}}class e2{constructor(t){y(this,"sun");y(this,"moon");y(this,"realSun");y(this,"sunGlow");y(this,"realMoon");y(this,"voxelClouds");y(this,"realClouds");y(this,"cloudUniforms");y(this,"sunUniforms",{uVisibility:{value:1}});y(this,"sunGlowUniforms",{uVisibility:{value:1}});y(this,"moonUniforms",{uVisibility:{value:1}});y(this,"stars");y(this,"starGroup");y(this,"dir",new U);y(this,"drift",0);y(this,"cloudOriginX",NaN);y(this,"cloudOriginZ",NaN);y(this,"lq","off");y(this,"dim","overworld");const e=r=>new ye({map:r,transparent:!0,depthWrite:!1,fog:!1});this.sun=new Jt(new ln(46,46),e(XE())),this.moon=new Jt(new ln(38,38),e(qE())),this.realSun=new Jt(new ln(Zf,Zf),new Ze({uniforms:this.sunUniforms,vertexShader:Pc,fragmentShader:HE,transparent:!0,depthWrite:!1})),this.sunGlow=new Jt(new ln(Jf,Jf),new Ze({uniforms:this.sunGlowUniforms,vertexShader:Pc,fragmentShader:WE,transparent:!0,depthWrite:!1,blending:Hc})),this.realMoon=new Jt(new ln(Qf,Qf),new Ze({uniforms:this.moonUniforms,vertexShader:Pc,fragmentShader:GE,transparent:!0,depthWrite:!1})),this.realSun.layers.set($r),this.sunGlow.layers.set($r),this.realSun.visible=this.sunGlow.visible=this.realMoon.visible=!1;const n=new ye({vertexColors:!0,color:16777215,transparent:!0,opacity:.85,depthWrite:!1,side:je});this.voxelClouds=new Jt(new Ve,n),this.voxelClouds.frustumCulled=!1,this.cloudUniforms={uCloudWeather:{value:NE()},uCloudDetail3D:{value:FE()},uTime:{value:0},uStepCount:{value:Ac("standard")},uTint:{value:new St(1,1,1)},uSunDir:{value:new U(.5,.8,.28)}};const s=new Ze({uniforms:this.cloudUniforms,vertexShader:OE,fragmentShader:BE,transparent:!0,depthWrite:!1,side:ze});this.realClouds=new Jt(new Qe(ri.extent,ri.extent,ri.extent),s),this.realClouds.frustumCulled=!1,this.realClouds.visible=!1,this.realClouds.onBeforeRender=(r,o,a)=>{const l=Ac(this.lq);this.cloudUniforms.uStepCount.value=a.layers.isEnabled($r)?l:Math.min(l,ri.reflectionSteps)},this.stars=VE(),this.starGroup=new vn,this.starGroup.add(this.stars),this.stars.renderOrder=-900;for(const r of[this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon])r.renderOrder=-850;this.realClouds.renderOrder=-800,this.voxelClouds.renderOrder=-800;for(const r of[this.sun,this.moon,this.realMoon,this.voxelClouds,this.realClouds,this.starGroup,this.stars])r.layers.set(no);t.add(this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon,this.voxelClouds,this.realClouds,this.starGroup)}setDimension(t){if(this.dim=t,t==="nether")for(const e of[this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon,this.voxelClouds,this.realClouds,this.starGroup])e.visible=!1;else this.starGroup.visible=!0,this.setLightingQuality(this.lq)}setLightingQuality(t){if(this.lq=t,this.dim==="nether"){for(const n of[this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon,this.voxelClouds,this.realClouds,this.starGroup])n.visible=!1;return}const e=t!=="off";this.cloudUniforms.uStepCount.value=Ac(t),this.voxelClouds.visible=!e,this.realClouds.visible=e,this.sun.visible=!e,this.moon.visible=!e,this.realSun.visible=e,this.sunGlow.visible=e,this.realMoon.visible=e}rebuildVoxelClouds(t,e){const n=[],s=[],r=[],o=ti-1;for(let l=0;l<ya;l++)for(let c=0;c<ya;c++)QE(t+l,e+c)&&t2(n,s,r,l*ti+ti/2,0,c*ti+ti/2,o,YE,o);const a=new Ve;a.setAttribute("position",new ke(n,3)),a.setAttribute("color",new ke(s,3)),a.setIndex(r),this.voxelClouds.geometry.dispose(),this.voxelClouds.geometry=a}update(t,e,n){if(this.dim==="nether")return;const s=t/rn*Math.PI*2;this.dir.set(Math.cos(s),Math.sin(s),.1).normalize();const r=zE;this.sun.position.copy(e).addScaledVector(this.dir,r),this.sun.lookAt(e),this.moon.position.copy(e).addScaledVector(this.dir,-r),this.moon.lookAt(e),this.realSun.position.copy(this.sun.position),this.realSun.lookAt(e),this.sunGlow.position.copy(this.sun.position),this.sunGlow.lookAt(e),this.realMoon.position.copy(this.moon.position),this.realMoon.lookAt(e),this.sunUniforms.uVisibility.value=si.smoothstep(this.dir.y,-.055,.025),this.sunGlowUniforms.uVisibility.value=this.sunUniforms.uVisibility.value,this.moonUniforms.uVisibility.value=si.smoothstep(-this.dir.y,-.055,.025),this.drift+=ZE*Math.max(0,n),this.starGroup.position.copy(e),this.starGroup.rotation.z=s;const o=Em(t)/11;if(this.stars.material.opacity=Math.pow(o,1.5)*.9,this.realClouds.visible){this.realClouds.position.copy(e),this.cloudUniforms.uTime.value=this.drift;const c=Aa(t).worldTint;this.cloudUniforms.uTint.value.setRGB(c[0],c[1],c[2],ae),this.cloudUniforms.uSunDir.value.copy(this.dir);return}const a=Math.floor((e.x-this.drift)/ti)-ya/2,l=Math.floor(e.z/ti)-ya/2;(a!==this.cloudOriginX||l!==this.cloudOriginZ)&&(this.rebuildVoxelClouds(a,l),this.cloudOriginX=a,this.cloudOriginZ=l),this.voxelClouds.position.set(a*ti+this.drift,KE,l*ti)}}const n2=16,i2={1:[.54,.54,.54],2:[.55,.42,.25],3:[.42,.67,.25],4:[.53,.53,.53],5:[.91,.86,.63],6:[.45,.33,.18],7:[.69,.54,.31],8:[.34,.34,.34],10:[.25,.48,.19],11:[.5,.36,.2],35:[.18,.69,.72],36:[.16,.68,.71],16:[.44,.7,.28],17:[.44,.7,.28],256:[.79,.16,.13],296:[.28,.78,.75]},Ws=i=>i2[i]??[.5,.5,.5];function Yi(i,t,e,n,s,r=Math.random){const o=[];for(let a=0;a<s;a++){const l=r()*Math.PI*2,c=.6+r()*1.8;o.push({x:i+(r()-.5)*.6,y:t+(r()-.5)*.6,z:e+(r()-.5)*.6,vx:Math.cos(l)*c,vy:1.5+r()*2.5,vz:Math.sin(l)*c,age:0,life:.4+r()*.45,r:n[0],g:n[1],b:n[2]})}return o}function s2(i,t){const e=[];for(const n of i)n.age+=t,!(n.age>=n.life)&&(n.vy-=n2*t,n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,e.push(n));return e}const x0="mineworld.saves",Ai=3e7,r2=-1024,o2=4096,En=128,$h=4096,a2=300,l2=1200,c2=64,h2=12e3,ep=16e3,np=24e3;function Xe(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}function rs(i){return typeof i=="number"&&Number.isFinite(i)}function _n(i,t,e){return rs(i)&&i>=t&&i<=e}function ci(i,t,e){return Number.isSafeInteger(i)&&i>=t&&i<=e}function Gs(i,t,e){return Math.max(t,Math.min(e,i))}function y0(i){const t=i%(Math.PI*2);return t>Math.PI?t-Math.PI*2:t<-Math.PI?t+Math.PI*2:t}function uo(i,t,e){return _n(i,-Ai,Ai)&&_n(t,r2,o2)&&_n(e,-Ai,Ai)}function ih(i){if(!(!Xe(i)||!uo(i.x,i.y,i.z)||!rs(i.yaw)||!_n(i.pitch,-Math.PI/2,Math.PI/2)))return{x:i.x,y:i.y,z:i.z,yaw:y0(i.yaw),pitch:i.pitch}}function Yh(i,t){let e=i;if(i.startsWith("nether:"))e=i.slice(7);else if(t&&i.startsWith("overworld:"))e=i.slice(10);else if(i.includes(":"))return null;const n=e.split(",");if(n.length!==3||!n.every(a=>/^-?\d+$/.test(a)))return null;const[s,r,o]=n.map(Number);return!ci(s,-Ai,Ai)||!ci(r,0,pe-1)||!ci(o,-Ai,Ai)?null:[s,r,o]}function u2(i){return Yh(i,!1)!==null}function M0(i){return Yh(i,!0)!==null}function d2(i){const t=/^portal:(overworld|nether):(x|z):(.+)$/.exec(i);return t?Yh(t[3],!1)!==null:(i.startsWith("overworld:")||i.startsWith("nether:"))&&M0(i)}function f2(i){var t;return Number.isInteger(i)&&i>=0&&((t=Ie[i])==null?void 0:t.id)===i}function w0(i){var t;return Number.isInteger(i)&&i>0&&(((t=Ie[i])==null?void 0:t.id)===i||Ca(i))}function S0(i){if(!Xe(i)||!w0(i.id)||!Number.isInteger(i.count)||i.count<=0)return null;const t=i.id,e={id:t,count:Math.min(i.count,as(t))},n=so(t);if(n!==null&&i.dur!==void 0){if(!ci(i.dur,0,Number.MAX_SAFE_INTEGER))return null;e.dur=Math.min(i.dur,n)}return e}function p2(i){const t={};if(!Xe(i))return t;for(const[e,n]of Object.entries(i))u2(e)&&f2(n)&&(t[e]=n);return t}function m2(i){if(Array.isArray(i))return i.slice(0,zh).map(t=>t===null?null:S0(t))}function g2(i){return typeof i=="string"&&Object.prototype.hasOwnProperty.call(qn,i)}function sh(i){if(!Array.isArray(i))return;const t=[];for(const e of i.slice(0,$h)){if(!Xe(e)||!g2(e.kind)||!uo(e.x,e.y,e.z)||!rs(e.yaw)||!_n(e.health,Number.MIN_VALUE,Number.MAX_SAFE_INTEGER))continue;const n={kind:e.kind,x:e.x,y:e.y,z:e.z,yaw:y0(e.yaw),health:Math.min(e.health,qn[e.kind].hp)};e.kind==="chicken"&&ci(e.egg,0,h2)&&(n.egg=e.egg),t.push(n)}return t}function Lc(i,t){return!w0(i)||!Number.isInteger(t)||t<=0?[0,0]:[i,Math.min(t,as(i))]}function kc(i,t){return Number.isSafeInteger(i)&&i>=0?Math.min(i,t):0}function v2(i){if(!Xe(i))return;const t={};for(const[e,n]of Object.entries(i)){if(!M0(e)||!Xe(n))continue;const[s,r]=Lc(n.input,n.inputN);let[o,a]=Lc(n.fuel,n.fuelN);const[l,c]=Lc(n.output,n.outputN);let h;if(o!==0&&n.fuelDur!==void 0){const p=so(o);p!==null&&(ci(n.fuelDur,0,Number.MAX_SAFE_INTEGER)?h=Math.min(n.fuelDur,p):(o=0,a=0))}const u=kc(n.burnMax,ep),d={input:s,inputN:r,fuel:o,fuelN:a,output:l,outputN:c,burn:Math.min(kc(n.burn,ep),u),burnMax:u,cook:kc(n.cook,qh)};h!==void 0&&a>0&&(d.fuelDur=h),t[e]=d}return t}function _2(i){if(!Xe(i)||!["health","food","saturation","exhaustion"].every(s=>rs(i[s])))return;const e=Math.floor(Gs(i.food,0,ss)),n={health:Gs(i.health,0,Zs),food:e,saturation:Gs(i.saturation,0,e),exhaustion:Gs(i.exhaustion,0,40)};return rs(i.oxygen)&&(n.oxygen=Math.floor(Gs(i.oxygen,0,pl))),rs(i.oxygenTimer)&&(n.oxygenTimer=Math.floor(Gs(i.oxygenTimer,0,30))),n}function x2(i){if(!Xe(i))return;const t={},e=ih(i.overworld),n=ih(i.nether);return e&&(t.overworld=e),n&&(t.nether=n),t}function y2(i){if(!Xe(i))return;const t={},e=sh(i.overworld),n=sh(i.nether);return e&&(t.overworld=e),n&&(t.nether=n),t}function ip(i){if(!Array.isArray(i))return;const t=[];for(const e of i.slice(0,$h)){const n=S0(e);if(!Xe(e)||!n||!uo(e.x,e.y,e.z)||!_n(e.vx,-En,En)||!_n(e.vy,-En,En)||!_n(e.vz,-En,En)||!_n(e.age,0,a2))continue;const s={id:n.id,count:n.count,x:e.x,y:e.y,z:e.z,vx:e.vx,vy:e.vy,vz:e.vz,age:e.age};n.dur!==void 0&&(s.dur=n.dur),t.push(s)}return t}function M2(i){if(!Xe(i))return;const t={},e=ip(i.overworld),n=ip(i.nether);return e&&(t.overworld=e),n&&(t.nether=n),t}function sp(i){if(!Array.isArray(i))return;const t=[];for(const e of i.slice(0,$h))!Xe(e)||!uo(e.x,e.y,e.z)||!_n(e.vx,-En,En)||!_n(e.vy,-En,En)||!_n(e.vz,-En,En)||!ci(e.age,0,l2)||!_n(e.damage,Number.MIN_VALUE,c2)||typeof e.stuck!="boolean"||typeof e.fromPlayer!="boolean"||t.push({x:e.x,y:e.y,z:e.z,vx:e.vx,vy:e.vy,vz:e.vz,age:e.age,stuck:e.stuck,fromPlayer:e.fromPlayer,damage:e.damage});return t}function w2(i){if(!Xe(i))return;const t={},e=sp(i.overworld),n=sp(i.nether);return e&&(t.overworld=e),n&&(t.nether=n),t}function S2(i){if(!Xe(i))return;const t={};for(const[e,n]of Object.entries(i))d2(e)&&Array.isArray(n)&&n.length===3&&uo(n[0],n[1],n[2])&&(t[e]=[n[0],n[1],n[2]]);return t}function b0(i){if(!Xe(i)||typeof i.id!="string"||i.id.length===0||typeof i.name!="string"||!ci(i.seed,-2e9,2e9)||!ci(i.lastPlayed,0,Number.MAX_SAFE_INTEGER))return null;const t={...i,edits:p2(i.edits)};i.gameMode!=="survival"&&i.gameMode!=="creative"&&delete t.gameMode,i.currentDimension!=="overworld"&&i.currentDimension!=="nether"&&delete t.currentDimension;const e=ih(i.player);e?t.player=e:delete t.player;const n=m2(i.inv);n?t.inv=n:delete t.inv;const s=_2(i.survival);if(s?t.survival=s:delete t.survival,rs(i.worldTime)){const d=Math.floor(i.worldTime)%np;t.worldTime=d<0?d+np:d}else delete t.worldTime;const r=sh(i.mobs);r?t.mobs=r:delete t.mobs;const o=v2(i.furnaces);o?t.furnaces=o:delete t.furnaces;const a=x2(i.playerByDimension);a?t.playerByDimension=a:delete t.playerByDimension;const l=y2(i.mobsByDimension);l?t.mobsByDimension=l:delete t.mobsByDimension;const c=M2(i.dropsByDimension);c?t.dropsByDimension=c:delete t.dropsByDimension;const h=w2(i.arrowsByDimension);h?t.arrowsByDimension=h:delete t.arrowsByDimension;const u=S2(i.portalLinks);return u?t.portalLinks=u:delete t.portalLinks,t}function Kh(){try{const i=localStorage.getItem(x0);if(i===null)return{ok:!0,worlds:[],rawEntries:[]};const t=JSON.parse(i);return Array.isArray(t)?{ok:!0,worlds:t.map(b0).filter(e=>e!==null),rawEntries:t}:{ok:!1,worlds:[],rawEntries:[],error:new Error("存档顶层结构不是数组")}}catch(i){return{ok:!1,worlds:[],rawEntries:[],error:i}}}function b2(){return Kh().worlds}function T0(i){try{return localStorage.setItem(x0,JSON.stringify(i)),!0}catch(t){return console.warn("[mineworld] 存档写入失败(localStorage 配额满或不可用):",t),!1}}function T2(){return b2().sort((i,t)=>t.lastPlayed-i.lastPlayed)}function E2(i){const t=i.trim();if(!t)return null;if(/^-?\d+$/.test(t))return Math.abs(Math.floor(Number(t)))%2e9;let e=0;for(let n=0;n<t.length;n++)e=Math.imul(e,31)+t.charCodeAt(n)|0;return Math.abs(e)%2e9}function A2(i,t,e="survival"){const n={id:`${Date.now().toString(36)}-${Math.floor(Math.random()*1e6).toString(36)}`,name:i.trim()||"新的世界",seed:t??Math.floor(Math.random()*2e9),gameMode:e,lastPlayed:Date.now(),edits:{}};if(!E0(n))throw new Error("无法写入浏览器存档，请检查隐私模式或清理网站存储空间。");return n}function E0(i){const t=b0(i);if(!t)return console.warn("[mineworld] 拒绝写入结构损坏的世界存档"),!1;const e=Kh();if(!e.ok)return console.warn("[mineworld] 原存档无法读取，拒绝覆盖以免丢失数据:",e.error),!1;const n=[];let s=!1;for(const r of e.rawEntries)Xe(r)&&r.id===t.id?(s||n.push(t),s=!0):n.push(r);return s||n.push(t),T0(n)}function R2(i){const t=Kh();return t.ok?T0(t.rawEntries.filter(e=>!Xe(e)||e.id!==i)):(console.warn("[mineworld] 原存档无法读取，拒绝删除以免丢失数据:",t.error),!1)}function rh(i,t,e,n){return i==="nether"?`nether:${t},${e},${n}`:`${t},${e},${n}`}function oh(i){if(i.startsWith("nether:")){const[s,r,o]=i.slice(7).split(",").map(Number);return{dim:"nether",x:s,y:r,z:o}}const[t,e,n]=i.split(",").map(Number);return{dim:"overworld",x:t,y:e,z:n}}function C2(i,t,e,n){const r=Ga/2,o=Math.floor(i-r-.1),a=Math.floor(i+r+.1),l=Math.floor(t-.1),c=Math.floor(t+cs),h=Math.floor(e-r-.1),u=Math.floor(e+r+.1);for(let d=o;d<=a;d++)for(let p=l;p<=c;p++)for(let g=h;g<=u;g++)if(uw(n(d,p,g)))return!0;return!1}const P2=[.8,.8,1,.42,.8,.8],D2=14,L2=16,k2=10,rp=14;function A0(i){return Math.max(0,Math.min(1,i))}function Or(i,t){return Number.isFinite(i)?i:t}function Ma(i,t){return 1-Math.exp(-Math.max(0,Math.min(i,.2))*t)}function R0(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function I2(i){const t=R0(i)%360/360;return new St().setHSL(t,.6,.48).getHex()}function U2(i,t,e){const n=A0(e);let s=t-i;return s=((s+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,i+s*n}function N2(i,t,e){const n=new Qe(i,t,e),s=[];for(let r=0;r<6;r++){const o=P2[r];for(let a=0;a<4;a++)s.push(o,o,o)}return n.setAttribute("color",new ke(s,3)),n}function Ki(i,t,e,n,s,r,o,a){const l=new Jt(N2(e,n,s),t);return l.position.set(r,o,a),i.add(l),l}function Br(i,t){const e=new ye({color:i,vertexColors:!0});return t.push({material:e,base:i.clone()}),e}function ah(i){var e;const t=(e=i.name)==null?void 0:e.trim();return t?t.slice(0,18):i.id.slice(0,10)||"玩家"}function F2(i,t,e,n,s,r){const o=Math.min(r,n/2,s/2);i.beginPath(),i.moveTo(t+o,e),i.arcTo(t+n,e,t+n,e+s,o),i.arcTo(t+n,e+s,t,e+s,o),i.arcTo(t,e+s,t,e,o),i.arcTo(t,e,t+n,e,o),i.closePath()}function O2(i){const t=document.createElement("canvas");t.width=256,t.height=64;const e=t.getContext("2d");if(!e)throw new Error("无法创建远端玩家名字牌画布");const n=new al(t);n.colorSpace=ae,n.minFilter=Te,n.magFilter=Te;const s=new Jp({map:n,transparent:!0,depthWrite:!1,depthTest:!1}),r=new T1(s);r.layers.set(co),r.position.set(0,2.38,0),r.scale.set(1.65,.4125,1);const o={canvas:t,context:e,texture:n,material:s,sprite:r};return C0(o,i),o}function C0(i,t){const{canvas:e,context:n}=i;n.clearRect(0,0,e.width,e.height),n.fillStyle="rgba(0, 0, 0, 0.58)",F2(n,7,7,e.width-14,e.height-14,11),n.fill(),n.font="bold 27px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.lineWidth=4,n.strokeStyle="rgba(0, 0, 0, 0.7)",n.strokeText(t,e.width/2,e.height/2+1),n.fillStyle="#ffffff",n.fillText(t,e.width/2,e.height/2+1),i.texture.needsUpdate=!0}function B2(i){const t=R0(i),e=t%360/360,n=[16041889,14260842,11036225,7356973],s=new St(n[(t>>>9)%n.length]),r=new St(I2(i)),o=new St().setHSL((e+.57)%1,.35,.31),a=new St().setHSL((t>>>17)%360/360,.32,.18+(t>>>25)%7*.025);return{skin:s,shirt:r,trousers:o,hair:a}}function z2(i){const t=new vn;t.name=`remote-player:${i.id}`;const e=[],n=B2(i.id),s=Br(n.skin,e),r=Br(n.shirt,e),o=Br(n.trousers,e),a=Br(n.hair,e),l=Br(new St(2041648),e);Ki(t,r,.5,.72,.26,0,1.16,0),Ki(t,s,.5,.5,.5,0,1.77,0),Ki(t,a,.52,.12,.52,0,2.02,0),Ki(t,l,.016,.1,.09,.258,1.8,-.13),Ki(t,l,.016,.1,.09,.258,1.8,.13);const c=[],h=[];for(const p of[-.13,.13]){const g=new vn;g.position.set(0,.8,p),Ki(g,o,.24,.8,.24,0,-.4,0),t.add(g),c.push(g)}for(const p of[-.36,.36]){const g=new vn;g.position.set(0,1.47,p),Ki(g,r,.24,.72,.24,0,-.36,0),t.add(g),h.push(g)}const u=O2(ah(i));t.add(u.sprite);const d=new U(i.x,i.y,i.z);return{group:t,legs:c,arms:h,materials:e,target:d.clone(),displayed:d,targetYaw:i.yaw,displayedYaw:i.yaw,walkPhase:0,walkAmount:0,brightness:1,tag:u,label:ah(i)}}function op(i){i.group.traverse(t=>{t instanceof Jt&&t.geometry.dispose()});for(const t of i.materials)t.material.dispose();i.tag.texture.dispose(),i.tag.material.dispose()}class H2{constructor(t){y(this,"models",new Map);this.scene=t}sync(t,e,n){const s=new Set,r=Math.max(0,Math.min(e,.2)),o=A0(Or(n,1));for(const a of t){if(!a.id||s.has(a.id))continue;s.add(a.id);let l=this.models.get(a.id);if(!l)l=z2(a),this.models.set(a.id,l),this.scene.add(l.group);else{const v=Or(a.x,l.target.x),m=Or(a.y,l.target.y),f=Or(a.z,l.target.z),x=l.target.clone();l.target.set(v,m,f),x.distanceToSquared(l.target)>rp*rp&&l.displayed.copy(l.target),l.targetYaw=Or(a.yaw,l.targetYaw);const _=ah(a);_!==l.label&&(l.label=_,C0(l.tag,_))}const c=Ma(r,D2),h=l.displayed.clone();l.displayed.lerp(l.target,c);const u=l.displayed.distanceTo(h),d=u>4e-4;l.walkAmount+=((d?1:0)-l.walkAmount)*Ma(r,11),d&&(l.walkPhase+=u*11),l.displayedYaw=U2(l.displayedYaw,l.targetYaw,Ma(r,L2)),l.brightness+=(o-l.brightness)*Ma(r,k2);for(const v of l.materials)v.material.color.copy(v.base).multiplyScalar(l.brightness);l.tag.material.color.setScalar(.68+l.brightness*.32);const p=Math.sin(l.walkPhase)*.72*l.walkAmount;l.legs.forEach((v,m)=>v.rotation.z=m===0?p:-p),l.arms.forEach((v,m)=>v.rotation.z=m===0?-p*.72:p*.72);const g=Math.abs(Math.sin(l.walkPhase))*.032*l.walkAmount;l.group.position.set(l.displayed.x,l.displayed.y+g,l.displayed.z),l.group.rotation.set(0,-l.displayedYaw,0)}for(const[a,l]of this.models)s.has(a)||(this.scene.remove(l.group),op(l),this.models.delete(a))}dispose(){for(const[,t]of this.models)this.scene.remove(t.group),op(t);this.models.clear()}}const oo=ee+8/9,Sn=4,ap=Math.SQRT1_2,W2=.82,G2=2.5,Pi=Uh,V2=Pi.groupBase+Math.abs(Pi.groupAmplitude),Ic=Math.abs(Pi.wave1Weight)*V2+Math.abs(Pi.wave2Weight)+Math.abs(Pi.wave3Weight),Ja=Math.abs(Pi.oceanLinear)*Ic+Math.abs(Pi.oceanQuadratic)*(Ic*Ic+Math.abs(Pi.quadraticBias));function Uc(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function lp(i,t,e,n,s,r){return(i*(1-r)+t*r)*(1-s)+(n*(1-r)+e*r)*s}function P0(i,t,e){const n=Math.floor(i),s=Math.floor(t);if(e.generatedSurfaceY(n,s)>=ee)return null;const r=(g,v)=>e.waterAmount(g,ee,v)===8&&e.isWaterSource(g,ee,v)&&e.getBlock(g,ee+1,v)===0;if(!r(n,s))return null;const o=new Map;for(let g=-Sn;g<=Sn;g++)for(let v=-Sn;v<=Sn;v++){const m=n+v,f=s+g;o.set(`${m},${f}`,r(m,f))}const a=(g,v)=>{let m=Sn;const f=Sn*Sn;for(let x=-Sn;x<Sn;x++)for(let _=-Sn;_<Sn;_++){const M=_+.5,R=x+.5,A=M*M+R*R;A>f||o.get(`${g+_},${v+x}`)!==!0&&(m=Math.min(m,Math.sqrt(A)))}return Uc(0,1,(m-ap)/(Sn-ap))},l=i-n,c=t-s,h=lp(a(n,s),a(n,s+1),a(n+1,s+1),a(n+1,s),l,c);if(h<W2)return null;const u=(g,v)=>{if(e.waterAmount(g,ee,v)<=0)return 0;let m=1;for(let f=ee-1;f>=0&&m<7&&!(e.waterAmount(g,f,v)<=0);f--)m++;return m},d=(g,v)=>(u(g-1,v-1)+u(g,v-1)+u(g-1,v)+u(g,v))/4,p=lp(d(n,s),d(n,s+1),d(n+1,s+1),d(n+1,s),l,c);return p<G2?null:{open:h,depth:p,ocean:Uc(.25,.82,h)*Uc(1.25,2.5,p)}}function X2(i,t,e,n){return oo+bS(i,t,e,n.ocean).height}function q2(i,t,e,n,s,r,o){const a=Math.floor(i),l=Math.floor(t),c=Math.floor(e),h=li(s.getBlock(a,l,c));if(!r||l!==ee&&l!==ee+1||t<oo-Ja||t>oo+Ja)return h;const u=o===void 0?P0(i,e,s):o;return u?t<X2(i,e,n,u):h}const jh=4,D0=.72,Da=i=>Math.max(0,Math.min(1,i));function $2(i,t,e){const n=t?Da(i/jh):0,s=n*n*(3-2*n),r=t&&i>0?.1+s*.72:0,o=Da(e/D0);return Da(Math.max(r,o*o))}function Y2(i,t){return t?Da(i/jh):0}const wa=50,K2=4.5,j2=5,cp=9,Z2=300,Q2=-125,Le=0,J2=.12;function tA(){return Wh()}const eA=1.6,hp=.005,nA=.1,iA=.05,sA=.2,rA=.005,oA=.1,aA=3,up=16,dp=88,fp=48,lA=3,cA=4,hA=8,uA=50,pp=["pig","cow","sheep","chicken"],dA=1200,fA=10,Nc=.25,mp=1,gp=.6,pA=2.4,mA=9,vp=.42,gA=.36;function vA(i){if(i==null)return 1;const t=Pa(i);return(t==null?void 0:t.kind)==="sword"?t.tier===1?4:t.tier===2?5:t.tier===3?6:7:1}function _A(i,t,e,n,s,r,o,a,l,c,h,u){let d=0,p=1/0;const g=(v,m,f,x)=>{if(Math.abs(m)<1e-9)return v>=f&&v<=x;let _=(f-v)/m,M=(x-v)/m;return _>M&&([_,M]=[M,_]),d=Math.max(d,_),p=Math.min(p,M),p>=d};return!g(i,n,o,c)||!g(t,s,a,h)||!g(e,r,l,u)?null:d}class xA{constructor(t,e,n=null){y(this,"canvas");y(this,"save");y(this,"renderer");y(this,"multiplayer");y(this,"remotePlayers");y(this,"look");y(this,"touch");y(this,"world");y(this,"worldEpoch",0);y(this,"activeEditsByChunk",new Map);y(this,"physWorld");y(this,"playerPhysWorld");y(this,"waterSurfaceWorld");y(this,"chunks");y(this,"highlight");y(this,"underwaterEl");y(this,"portalEffectEl");y(this,"normalFog");y(this,"underFog",new fr(2383754,.1,16));y(this,"player");y(this,"prev");y(this,"hotbar");y(this,"inv");y(this,"crack");y(this,"dropRenderer");y(this,"hand");y(this,"particleFx");y(this,"skyObjects");y(this,"dimension","overworld");y(this,"portalCooldown",0);y(this,"portalTimer",0);y(this,"portalArmed",!0);y(this,"portalFlash",0);y(this,"particles",[]);y(this,"digFxT",0);y(this,"invUI");y(this,"craftingGrid",0);y(this,"furnaceUI");y(this,"furnaces",new Map);y(this,"furnaceKey",null);y(this,"touchHoldAction",null);y(this,"touchDigging",!1);y(this,"touchDigHit",null);y(this,"dropsByDimension",{overworld:[],nether:[]});y(this,"drops",this.dropsByDimension.overworld);y(this,"arrowsByDimension",{overworld:[],nether:[]});y(this,"arrows",this.arrowsByDimension.overworld);y(this,"arrowRenderer");y(this,"drawingBow",!1);y(this,"bowCharge",0);y(this,"mobs",[]);y(this,"mobRenderer");y(this,"mobRng");y(this,"spawnWorld");y(this,"surfaceY",(t,e)=>He(t,e,this.save.seed));y(this,"mobSpawnTick",0);y(this,"digging",!1);y(this,"lastMeleeMs",0);y(this,"digTarget",null);y(this,"digProgress",0);y(this,"fluidSim",new xT);y(this,"fluidGrid");y(this,"fluidTick",0);y(this,"wateredChunksByDimension",{overworld:new Set,nether:new Set});y(this,"wateredChunks",this.wateredChunksByDimension.overworld);y(this,"worldTime");y(this,"waterWaveTime",0);y(this,"waterProbeEpoch",0);y(this,"waterProbeCache",null);y(this,"fov",70);y(this,"actualSprinting",!1);y(this,"shadowTick",99);y(this,"evictCt",0);y(this,"last",0);y(this,"acc",0);y(this,"survival");y(this,"statusBar");y(this,"worldSpawn");y(this,"dead",!1);y(this,"creative");y(this,"flying",!1);y(this,"flyTapWindow",0);y(this,"fallDistance",0);y(this,"hurtCd",0);y(this,"coordEl");y(this,"coordOn",!1);y(this,"eating",!1);y(this,"eatProgress",0);y(this,"eatFxT",0);y(this,"crouching",!1);y(this,"camEye",Jn);y(this,"decayQueueByDimension",{overworld:[],nether:[]});y(this,"decayQueue",this.decayQueueByDimension.overworld);y(this,"texturePack");y(this,"lightingQuality");y(this,"renderDistance");y(this,"_godSunUV",new Bt);y(this,"_godSunColor",new St);y(this,"_godSunWorld",new U);y(this,"_godFwd",new U);y(this,"_handSun",new U);y(this,"_handSkyColor",new St);y(this,"hurtWindowMax",0);y(this,"skyDarkenNow",0);y(this,"entityLight",(t,e,n)=>this.chunks.brightnessAt(t,e,n,this.skyDarkenNow));var p,g,v,m;const s=Mm();hf(s.texturePack),this.canvas=t,this.save=e,this.waterSurfaceWorld={getBlock:(f,x,_)=>this.world.getBlock(f,x,_),waterAmount:(f,x,_)=>this.world.waterAmount(f,x,_),isWaterSource:(f,x,_)=>this.world.isWaterSource(f,x,_),generatedSurfaceY:(f,x)=>He(f,x,this.save.seed)},this.creative=e.gameMode==="creative",this.renderer=new Ww(t),this.multiplayer=n,this.remotePlayers=new H2(this.renderer.scene),this.normalFog=this.renderer.scene.fog,this.underwaterEl=document.getElementById("underwater"),this.portalEffectEl=document.getElementById("portal-effect"),this.hotbar=new GT(document.getElementById("hotbar"),cp,document.getElementById("held-item-name")),this.inv=e.inv?ET(e.inv):this.creative?tA():Wh(),this.hotbar.render(this.inv);const r=e.survival,o=r!==void 0&&r.health<=0;this.survival=r&&r.health>0?{...yc(),...r,foodTimer:0}:yc(),this.statusBar=new eE(document.getElementById("health"),document.getElementById("hunger")),this.statusBar.render(this.survival),this.worldTime=e.worldTime??gS,this.fluidGrid={isSolid:(f,x,_)=>x<0||x>=pe||xe(this.world.getBlock(f,x,_)),amount:(f,x,_)=>this.world.waterAmount(f,x,_),isSource:(f,x,_)=>this.world.isWaterSource(f,x,_),isFalling:(f,x,_)=>this.world.isWaterFalling(f,x,_),setWater:(f,x,_,M,R,A)=>this.world.setWater(f,x,_,M,R,A),getBlock:(f,x,_)=>this.world.getBlock(f,x,_),setBlock:(f,x,_,M)=>this.edit(f,x,_,M)},this.dimension=o?"overworld":e.currentDimension??"overworld",this.save.currentDimension=this.dimension,this.buildDimension(this.dimension);for(const f of["overworld","nether"]){for(const x of((p=e.dropsByDimension)==null?void 0:p[f])??[])this.dropsByDimension[f].push({...x});for(const x of((g=e.arrowsByDimension)==null?void 0:g[f])??[])this.arrowsByDimension[f].push({...x})}this.drops=this.dropsByDimension[this.dimension],this.arrows=this.arrowsByDimension[this.dimension],this.wateredChunks=this.wateredChunksByDimension[this.dimension],this.decayQueue=this.decayQueueByDimension[this.dimension],this.texturePack=s.texturePack,this.lightingQuality=s.lightingQuality,this.renderDistance=s.renderDistance;const a=Zc(this.texturePack);this.chunks=new Dm(this.renderer.scene,this.world,a),this.renderer.setWaterRefractionSink((f,x,_,M,R)=>this.chunks.setWaterRefraction(f,x,_,M,R)),this.renderer.setWaterReflectionSink((f,x,_,M)=>this.chunks.setWaterReflection(f,x,_,M)),this.renderer.setWaterCapturesEnabled(this.dimension==="overworld"),this.chunks.setLightingQuality(s.lightingQuality),this.chunks.setSunEnabled(this.dimension==="overworld"),this.setRenderDistance(this.renderDistance),this.multiplayer&&this.bindMultiplayer(this.multiplayer),this.crack=new AS(this.renderer.scene),this.dropRenderer=new ib(this.renderer.scene,a),this.arrowRenderer=new bb(this.renderer.scene),this.mobRenderer=new _T(this.renderer.scene),this.mobRng=cm((e.seed^2654435769)>>>0),this.spawnWorld={getBlock:(f,x,_)=>this.world.getBlock(f,x,_)},this.hand=new fb(a),this.hand.setLightingQuality(s.lightingQuality),this.particleFx=new DE(this.renderer.scene),this.skyObjects=new e2(this.renderer.scene),this.skyObjects.setLightingQuality(s.lightingQuality),this.skyObjects.setDimension(this.dimension),this.invUI=new gE(document.getElementById("inventory")),this.furnaceUI=new bE(document.getElementById("furnace")),this.coordEl=document.createElement("div"),this.coordEl.style.cssText="position:fixed;left:8px;top:8px;z-index:30;padding:4px 8px;font:14px Zpix,monospace;color:#fff;background:rgba(0,0,0,.45);white-space:pre;display:none;pointer-events:none;text-shadow:1px 1px 0 #000;",document.body.appendChild(this.coordEl),this.furnaceUI.onChange=()=>this.hotbar.render(this.inv),this.furnaceUI.onClose=()=>this.closeFurnace(),this.invUI.onChange=()=>this.hotbar.render(this.inv),this.invUI.onClose=()=>this.closeCrafting(),this.invUI.onSelectHotbar=f=>this.hotbar.setSelected(f),this.physWorld={isSolid:(f,x,_)=>xe(this.world.getBlock(f,x,_)),isWater:(f,x,_)=>li(this.world.getBlock(f,x,_))},this.playerPhysWorld={isSolid:(f,x,_)=>xe(this.world.getBlock(f,x,_)),getBlock:(f,x,_)=>this.world.getBlock(f,x,_),isWater:()=>this.pointInWater(this.player.pos.x,this.player.pos.y+.1,this.player.pos.z)};const l=o?void 0:((v=e.playerByDimension)==null?void 0:v[this.dimension])??e.player;this.worldSpawn=this.findSpawn(e.seed);const c=l?{x:l.x,y:l.y,z:l.z}:this.worldSpawn;this.player={pos:{...c},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.chunks.update(Vt(Math.floor(c.x)),Vt(Math.floor(c.z)),2,999);const h=((m=e.mobsByDimension)==null?void 0:m[this.dimension])??e.mobs;if(h&&h.length)for(const f of h)this.mobs.push(Ef(f));else if(this.dimension==="overworld")for(let f=0;f<4;f++)this.mobs.push(...bf(pp[f%4],c.x,c.z,this.mobRng,this.spawnWorld,this.surfaceY,6,26));if(e.furnaces)for(const[f,x]of Object.entries(e.furnaces))this.furnaces.set(f.startsWith("overworld:")||f.startsWith("nether:")?f:`overworld:${f}`,x);const u=new Qe(1.001,1.001,1.001);this.highlight=new A1(new R1(u),new em({color:0,transparent:!0,opacity:.35})),this.highlight.layers.set(co),this.highlight.visible=!1,this.renderer.scene.add(this.highlight);const d=h0();this.look=new kT(t,!d),this.look.yaw=l?l.yaw:Math.atan2(-c.z,-c.x),this.look.pitch=l?l.pitch:-.18,this.touch=d?new WT(document.getElementById("touch-controls"),{look:(f,x)=>this.look.rotate(f,x),interactTap:()=>this.onTouchInteractTap(),interactHoldStart:()=>this.beginTouchHoldAction(),interactHoldEnd:()=>this.endTouchHoldAction(),interactHoldCancel:()=>this.cancelTouchHoldAction(),inventory:()=>{this.furnaceKey?this.closeFurnace():this.craftingGrid>0?this.closeCrafting():this.openPlayerInventory()},pause:()=>window.dispatchEvent(new Event("mineworld:touch-pause"))}):null,t.addEventListener("contextmenu",f=>f.preventDefault()),t.addEventListener("mousedown",f=>{document.pointerLockElement===t&&(f.button===0?this.beginPrimaryAction():f.button===2?this.onUseDown():f.button===1&&this.creative&&(f.preventDefault(),this.pickTargetedBlock()))}),window.addEventListener("mouseup",f=>{f.button===0?this.stopDigging():f.button===2&&(this.releaseBow(),this.stopEating())}),document.addEventListener("pointerlockchange",()=>{this.touch||document.pointerLockElement!==t&&(this.stopDigging(),this.drawingBow=!1,this.bowCharge=0,this.stopEating())}),window.addEventListener("keydown",f=>{var M;const x=f.target;if((M=x==null?void 0:x.matches)!=null&&M.call(x,'input, textarea, [contenteditable="true"]'))return;if(f.code==="KeyE"){this.furnaceKey?this.closeFurnace():this.craftingGrid>0?this.closeCrafting():this.isGameplayActive()&&this.openPlayerInventory();return}if(f.code==="F3"){f.preventDefault(),this.coordOn=!this.coordOn,this.coordEl.style.display=this.coordOn?"block":"none";return}if(f.code==="Escape"&&this.furnaceKey){this.closeFurnace();return}if(f.code==="Escape"&&this.craftingGrid>0){this.closeCrafting();return}const _=Number(f.key);Number.isInteger(_)&&_>=1&&_<=cp&&this.hotbar.setSelected(_-1)}),t.addEventListener("wheel",f=>{f.preventDefault(),this.hotbar.scroll(Math.sign(f.deltaY))},{passive:!1}),this.publishMultiplayerState()}isGameplayActive(){var t;return((t=this.touch)==null?void 0:t.isActive)??document.pointerLockElement===this.canvas}usesTouchControls(){return this.touch!==null}isCreativeMode(){return this.creative}setTouchActive(t){var e;(e=this.touch)==null||e.setActive(t&&!this.dead&&this.craftingGrid===0&&!this.furnaceKey)}attachMultiplayer(t){return this.multiplayer!==null?!1:(this.multiplayer=t,this.bindMultiplayer(t),this.publishMultiplayerState(),!0)}detachMultiplayer(t){return this.multiplayer!==t?!1:(t.setBlockBatchHandler(null),t.setBlockHandler(null),t.setWorldTimeHandler(null),this.multiplayer=null,!0)}bindMultiplayer(t){t.setBlockBatchHandler(e=>this.applyRemoteBlockBatch(e)),t.setBlockHandler(e=>this.applyRemoteBlockEdit(e)),t.setWorldTimeHandler(e=>this.setNetworkWorldTime(e))}readMovement(){var n;const t=DT();if(!((n=this.touch)!=null&&n.isActive))return t;const e=this.touch.readMove();return{forward:Math.max(-1,Math.min(1,t.forward+e.forward)),right:Math.max(-1,Math.min(1,t.right+e.right)),sprint:t.sprint||e.sprint,jumpHeld:t.jumpHeld||e.jumpHeld,crouch:t.crouch||e.crouch}}publishMultiplayerState(){if(!this.multiplayer)return;const t=this.player.pos;this.multiplayer.sendState({x:t.x,y:t.y,z:t.z,yaw:this.look.yaw,pitch:this.look.pitch,dimension:this.dimension})}beginPrimaryAction(t){if(!this.isGameplayActive())return;this.touchDigging=!1,this.touchDigHit=null;const e=this.mobUnderRay(t);if(e){const n=performance.now();n-this.lastMeleeMs>=500&&(this.attackMob(e,t),this.lastMeleeMs=n);return}this.touchDigging=t!==void 0,this.touchDigHit=t?this.rayHitFor(t):null,this.digging=!0,this.digTarget=null}stopDigging(){this.digging=!1,this.touchDigging=!1,this.touchDigHit=null,this.digProgress=0,this.digTarget=null,this.crack.hide()}onTouchInteractTap(){if(!this.isGameplayActive())return;const t=this.rayHit();if(this.useTargetedBlock(t))return;const e=this.inv[this.hotbar.index];this.tryIgnitePortal(t,(e==null?void 0:e.id)??null)||this.placeBlock(t)}shouldUseHeldItemOnTouchHold(){const t=this.inv[this.hotbar.index];return!t||t.count<=0?!1:t.id===Ji?this.creative||If(this.inv,js)>0:dc(t.id)&&this.survival.food<ss}beginTouchHoldAction(){if(!(!this.isGameplayActive()||this.touchHoldAction!==null)){if(this.shouldUseHeldItemOnTouchHold()&&this.beginHeldItemUse()){this.touchHoldAction="use";return}this.touchHoldAction="primary",this.beginPrimaryAction(this.crosshairRay())}}endTouchHoldAction(){const t=this.touchHoldAction;if(this.touchHoldAction=null,t==="primary"){this.stopDigging();return}t==="use"&&(this.releaseBow(),this.stopEating())}cancelTouchHoldAction(){const t=this.touchHoldAction;if(this.touchHoldAction=null,t==="primary"){this.stopDigging();return}t==="use"&&(this.drawingBow=!1,this.bowCharge=0,this.stopEating())}buildDimension(t){const e=new Map;for(const[n,s]of Object.entries(this.save.edits)){const r=oh(n);if(r.dim!==t||r.y<0||r.y>=pe||!Ie[s])continue;const o=`${Vt(r.x)},${Vt(r.z)}`;let a=e.get(o);a||(a=new Map,e.set(o,a)),a.set(`${Pe(r.x)},${r.y},${Pe(r.z)}`,{x:r.x,y:r.y,z:r.z,id:s})}this.activeEditsByChunk=e,this.worldEpoch++,this.world=new xm(this.save.seed,t),this.world.editHook=(n,s,r)=>{var o;for(const a of((o=e.get(`${n},${s}`))==null?void 0:o.values())??[]){const l=Pe(a.x),c=Pe(a.z);r.set(l,a.y,c,a.id),r.setFluid(l,a.y,c,a.id===sn?Ph(8,!0,!1):0),this.fluidSim.activate(a.x,a.y,a.z)}}}switchDimension(t,e){var o,a,l;((o=this.save).playerByDimension??(o.playerByDimension={}))[this.dimension]={x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.look.yaw,pitch:this.look.pitch},((a=this.save).mobsByDimension??(a.mobsByDimension={}))[this.dimension]=this.mobs.map(Tf);const n=this.world;this.dimension=t,this.save.currentDimension=t,this.drops=this.dropsByDimension[t],this.arrows=this.arrowsByDimension[t],this.wateredChunks=this.wateredChunksByDimension[t],this.wateredChunks.clear(),this.decayQueue=this.decayQueueByDimension[t],this.fluidSim.clear(),this.buildDimension(t),this.chunks.setWorld(this.world),this.chunks.setSunEnabled(t==="overworld"),this.renderer.setWaterCapturesEnabled(t==="overworld"),n.dispose(),this.mobs.length=0;for(const c of((l=this.save.mobsByDimension)==null?void 0:l[t])??[])this.mobs.push(Ef(c));this.player={pos:{...e},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.skyObjects.setDimension(t);const s=Vt(Math.floor(e.x)),r=Vt(Math.floor(e.z));this.chunks.update(s,r,2,999),this.chunks.flushMesh(64),this.dropRenderer.sync(this.drops,this.entityLight),this.arrowRenderer.sync(this.arrows),this.particles=[],this.particleFx.sync(this.particles),this.portalCooldown=60,this.portalFlash=D0}snapshot(){var e,n;this.save.player={x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.look.yaw,pitch:this.look.pitch},this.save.inv=TT(this.inv);const t=this.survival;return this.save.survival={health:t.health,food:t.food,saturation:t.saturation,exhaustion:t.exhaustion,oxygen:t.oxygen,oxygenTimer:t.oxygenTimer},this.save.worldTime=this.worldTime,this.save.mobs=this.mobs.map(Tf),this.save.furnaces=Object.fromEntries(this.furnaces),this.save.dropsByDimension={overworld:this.dropsByDimension.overworld.map(s=>({...s})),nether:this.dropsByDimension.nether.map(s=>({...s}))},this.save.arrowsByDimension={overworld:this.arrowsByDimension.overworld.map(s=>({...s})),nether:this.arrowsByDimension.nether.map(s=>({...s}))},this.save.currentDimension=this.dimension,((e=this.save).playerByDimension??(e.playerByDimension={}))[this.dimension]={...this.save.player},((n=this.save).mobsByDimension??(n.mobsByDimension={}))[this.dimension]=this.save.mobs,this.save.lastPlayed=Date.now(),this.save}findSpawn(t){const e=new Map,n=(s,r,o)=>this.worldAt("overworld",s,r,o,e);for(let s=1;s<160;s++)for(let r=-s;r<=s;r++)for(const[o,a]of[[r,-s],[r,s],[-s,r],[s,r]]){const l=He(o,a,t),c=(u,d)=>n(u,l+1,d)===Le&&n(u,l+2,d)===Le,h=n(o,l,a)!==Le&&n(o,l-1,a)!==Le&&n(o,l-2,a)!==Le;if(l>ee&&l<=ee+4&&h&&c(o,a)&&c(o+1,a)&&c(o-1,a)&&c(o,a+1)&&c(o,a-1))return{x:o+.5,y:l+1,z:a+.5}}return{x:.5,y:ee+3,z:.5}}async preloadSpawn(t=3,e){const n=this.worldEpoch,s=this.world,r=this.chunks,o=this.wateredChunks,a=()=>!(e!=null&&e.aborted)&&n===this.worldEpoch&&s===this.world,l=()=>new Promise(_=>{let M=!1,R=0;const A=I=>{M||(M=!0,e==null||e.removeEventListener("abort",P),_(I))},P=()=>{R!==0&&cancelAnimationFrame(R),A(!1)};e==null||e.addEventListener("abort",P,{once:!0}),e!=null&&e.aborted?P():R=requestAnimationFrame(()=>A(!0))}),c=Vt(Math.floor(this.player.pos.x)),h=Vt(Math.floor(this.player.pos.z));for(let _=-t;_<=t;_++)for(let M=-t;M<=t;M++)s.request(c+M,h+_);if(!await new Promise(_=>{let M=!1,R;const A=b=>{M||(M=!0,R!==void 0&&clearTimeout(R),e==null||e.removeEventListener("abort",P),_(b))},P=()=>A(!1),I=()=>{if(!a()){A(!1);return}let b=!0;for(let S=-t;S<=t&&b;S++)for(let D=-t;D<=t&&b;D++)s.peek(c+D,h+S)||(b=!1);b?A(!0):R=setTimeout(I,30)};e==null||e.addEventListener("abort",P,{once:!0}),I()})||!a())return;const d=(c-t)*Dt,p=(c+t+1)*Dt-1,g=(h-t)*Dt,v=(h+t+1)*Dt-1,m=(_,M)=>_>=d&&_<=p&&M>=g&&M<=v;Lf(this.fluidSim,{isWater:(_,M,R)=>m(_,R)&&li(s.getBlock(_,M,R)),isAir:(_,M,R)=>m(_,R)&&s.getBlock(_,M,R)===Le},{minX:d,maxX:p,minZ:g,maxZ:v,minY:Math.max(1,ee-48),maxY:Math.min(pe-1,ee+2)});const f={isSolid:(_,M,R)=>!m(_,R)||M<0||M>=pe||xe(s.getBlock(_,M,R)),amount:(_,M,R)=>m(_,R)?s.waterAmount(_,M,R):0,isSource:(_,M,R)=>m(_,R)&&s.isWaterSource(_,M,R),isFalling:(_,M,R)=>m(_,R)&&s.isWaterFalling(_,M,R),setWater:(_,M,R,A,P,I)=>{m(_,R)&&s.setWater(_,M,R,A,P,I)},getBlock:(_,M,R)=>m(_,R)?s.getBlock(_,M,R):Le,setBlock:(_,M,R,A)=>{m(_,R)&&this.edit(_,M,R,A)}};for(let _=0;_<1200&&this.fluidSim.activeCount>0;){for(let M=0;M<8&&_<1200&&this.fluidSim.activeCount>0;M++){if(!a())return;this.fluidSim.tick(f),_++}if(this.fluidSim.activeCount>0&&!await l())return}if(!a())return;for(let _=-t;_<=t;_++)for(let M=-t;M<=t;M++)o.add(`${c+M},${h+_}`);const x=Math.ceil((t*2+1)**2/4)+1;for(let _=0;_<x+240;_++){if(!a()||(r.update(c,h,t,4),r.flushMesh(8),!await l()||!a()))return;if(_>=x&&!r.meshBusy())break}}activateNearbyWater(){const n=Vt(Math.floor(this.player.pos.x)),s=Vt(Math.floor(this.player.pos.z)),r=Math.max(1,ee-48),o=Math.min(pe-1,ee+2);let a=0;for(const l of yT(n,s,4,this.wateredChunks)){if(a>=3)break;const[c,h]=l.split(",").map(Number);if(!this.world.peek(c,h))continue;const u=(d,p)=>this.world.peek(Vt(d),Vt(p))!==void 0;Lf(this.fluidSim,{isWater:(d,p,g)=>u(d,g)&&li(this.world.getBlock(d,p,g)),isAir:(d,p,g)=>u(d,g)&&this.world.getBlock(d,p,g)===Le},{minX:c*Dt-1,maxX:c*Dt+Dt,minZ:h*Dt-1,maxZ:h*Dt+Dt,minY:r,maxY:o}),this.wateredChunks.add(l),a++}}start(){this.last=performance.now(),this.publishMultiplayerState();const t=e=>{var m,f;requestAnimationFrame(t);const n=Math.min(e-this.last,100)/1e3;this.acc+=e-this.last,this.last=e,this.acc>250&&(this.acc=250);const s=this.isGameplayActive(),r=s||this.craftingGrid>0||this.furnaceKey!==null;for(;r&&this.acc>=wa;){if(this.waterProbeEpoch++,this.prev=this.player,s){const _=this.readMovement(),M=LT()||(((m=this.touch)==null?void 0:m.consumeJump())??!1);this.creative&&M&&(this.flyTapWindow>0?(this.flying=!this.flying,this.flyTapWindow=0):this.flyTapWindow=6),this.flyTapWindow>0&&this.flyTapWindow--,this.creative||(this.flying=!1),this.crouching=this.flying?!1:_.crouch,this.actualSprinting=_.sprint&&(this.creative||KT(this.survival)),this.player=_f(this.player,{forward:_.forward,right:_.right,yaw:this.look.yaw,jump:M,swimUp:_.jumpHeld,sprint:this.actualSprinting,crouch:this.flying?!1:_.crouch,slow:this.eating,fly:this.flying,flyUp:_.jumpHeld,flyDown:_.crouch},this.playerPhysWorld),this.publishMultiplayerState(),this.stepSurvival(this.actualSprinting,M)}else this.player=_f(this.player,{forward:0,right:0,yaw:this.look.yaw,jump:!1,swimUp:!1,sprint:!1,crouch:!1,slow:!1,fly:this.flying,flyUp:!1,flyDown:!1},this.playerPhysWorld),this.publishMultiplayerState(),this.stepSurvival(!1,!1);++this.worldTime>=rn&&(this.worldTime=0),++this.fluidTick>=5&&(this.fluidTick=0,this.activateNearbyWater(),this.fluidSim.tick(this.fluidGrid),this.chunks.remeshDirty(),this.waterProbeEpoch++);const x=`${this.dimension}:`;for(const[_,M]of this.furnaces)_.startsWith(x)&&ME(M)&&yE(M);this.furnaceKey&&this.furnaceUI.render(),this.tickMobs(),this.tickArrows(),this.tickLeafDecay(),this.portalCooldown>0&&this.portalCooldown--,s&&this.tickPortalTravel(),this.acc-=wa}r||(this.acc=0);const o=n>.026?3:(n>.018,4);this.chunks.update(Vt(Math.floor(this.player.pos.x)),Vt(Math.floor(this.player.pos.z)),this.renderDistance,o,Math.cos(this.look.yaw),Math.sin(this.look.yaw));const a=performance.now()+6;for(;this.chunks.meshQueueLen()>0&&performance.now()<a;)this.chunks.flushMesh(1);if(++this.evictCt>=45){this.evictCt=0;const x=Math.max(this.renderDistance+4,12),_=Vt(Math.floor(this.player.pos.x)),M=Vt(Math.floor(this.player.pos.z));for(const R of this.world.evictBeyond(_,M,x))this.wateredChunks.delete(R)}this.chunks.cullToView(this.player.pos.x,this.player.pos.z,Math.cos(this.look.yaw),Math.sin(this.look.yaw),this.look.pitch);const l=s&&this.actualSprinting?80:70;this.fov+=(l-this.fov)*.15,this.renderer.camera.fov=this.fov,this.renderer.camera.updateProjectionMatrix(),r&&this.updateDrops(n),s?(this.updateMining(n),this.updateEating(n),this.updateBow(n),this.digging&&this.hand.swing()):(this.crack.hide(),this.craftingGrid>0&&this.invUI.render()),this.statusBar.render(this.survival),this.waterWaveTime+=n,this.chunks.animateWater(n),this.updateDayNight(),this.skyObjects.update(this.worldTime,this.renderer.camera.position,n),this.dimension==="overworld"&&this.lightingQuality!=="off"&&++this.shadowTick>=6?(this.shadowTick=0,this.chunks.updateSun(this.worldTime,this.player.pos.x,this.player.pos.y,this.player.pos.z),this.renderer.markShadowDirty()):(this.dimension!=="overworld"||this.lightingQuality==="off")&&(this.shadowTick=0),this.updateCamera(this.acc/wa),this.updateWater(),this.updatePortalEffect(n,s),this.updateHighlight(),this.particles=s2(this.particles,n),this.particleFx.sync(this.particles),this.mobRenderer.sync(this.mobs,n,this.entityLight),this.remotePlayers.sync(((f=this.multiplayer)==null?void 0:f.remotePlayers.filter(x=>x.dimension===this.dimension))??[],n,this.entityLight(this.player.pos.x,this.player.pos.y+Jn,this.player.pos.z)),this.arrowRenderer.sync(this.arrows);const c=this.inv[this.hotbar.index];this.hand.setHeld(c?c.id:null),this.hand.setEating(s&&this.eating);const h=Math.min(1,Math.hypot(this.player.vel.x,this.player.vel.z)/.22);this.hand.update(n,s?h:0);const[u,d]=this.chunks.lightLevelAt(this.player.pos.x,this.player.pos.y+Jn,this.player.pos.z),p=this.dimension==="nether"&&u>14.5&&d<.5?.08:this.entityLight(this.player.pos.x,this.player.pos.y+Jn,this.player.pos.z);this.hand.setBrightness(p);const g=this.worldTime/rn*Math.PI*2;this._handSun.set(Math.cos(g),Math.sin(g),.1).normalize();const v=Aa(this.worldTime,this.dimension);if(this._handSkyColor.setRGB(v.worldTint[0],v.worldTint[1],v.worldTint[2],ae),this.hand.setLighting({skyLevel:u,blockLevel:d,skyDarken:this.skyDarkenNow,sunEnabled:this.dimension==="overworld",skyColor:this._handSkyColor,sunDirectionWorld:this._handSun,cameraQuaternion:this.renderer.camera.quaternion}),this.hand.camera.aspect!==this.renderer.camera.aspect&&this.hand.resize(this.renderer.camera.aspect),this.coordOn){const x=this.player.pos,_=this.chunks.pipelineStats();this.coordEl.textContent=`XYZ  ${Math.floor(x.x)} / ${Math.floor(x.y)+Q2} / ${Math.floor(x.z)}
区块 已上屏${_.meshed} 可见${_.visible} 派发中${_.pending} 待上屏${_.queued}`}this.updateGodRays(),this.renderer.render(),this.renderer.renderOverlay(this.hand.scene,this.hand.camera)};requestAnimationFrame(t)}pointInWater(t,e,n){const s=this.dimension==="overworld"&&this.lightingQuality!=="off";let r;const o=Math.floor(e);if(s&&(o===ee||o===ee+1)&&e>=oo-Ja&&e<=oo+Ja){const a=Math.floor(t),l=Math.floor(n),c=this.waterProbeCache;c&&c.epoch===this.waterProbeEpoch&&c.bx===a&&c.bz===l?r=c.probe:(r=P0(t,n,this.waterSurfaceWorld),this.waterProbeCache={epoch:this.waterProbeEpoch,bx:a,bz:l,probe:r})}return q2(t,e,n,this.waterWaveTime,this.waterSurfaceWorld,s,r)}updatePortalEffect(t,e){if(!this.portalEffectEl)return;this.portalFlash=Math.max(0,this.portalFlash-t);const n=this.player.pos,s=zn(this.world.getBlock(Math.floor(n.x),Math.floor(n.y),Math.floor(n.z))),r=e&&s&&this.portalArmed&&this.portalCooldown===0&&!this.dead,o=e?$2(this.portalTimer,r,this.portalFlash):0,a=Y2(this.portalTimer,r);this.portalEffectEl.style.opacity=o.toFixed(3),this.portalEffectEl.style.setProperty("--portal-progress",a.toFixed(3)),this.portalEffectEl.style.setProperty("--portal-texture-opacity",(.22+a*.42).toFixed(3)),this.portalEffectEl.style.setProperty("--portal-glow-opacity",(a*.2).toFixed(3)),this.portalEffectEl.style.setProperty("--portal-scale-from",(1.02+a*.08).toFixed(3)),this.portalEffectEl.style.setProperty("--portal-scale-to",(1.08+a*.12).toFixed(3)),this.portalEffectEl.classList.toggle("active",o>.002),this.portalEffectEl.classList.toggle("flash",e&&this.portalFlash>0)}stepSurvival(t,e){if(this.creative){this.fallDistance=0;return}this.hurtCd>0&&this.hurtCd--;const n=this.player.pos.x-this.prev.pos.x,s=this.player.pos.z-this.prev.pos.z,r=this.player.pos.y-this.prev.pos.y;t&&ts(this.survival,nA*Math.hypot(n,s)),e&&ts(this.survival,t?sA:iA);const o=Math.floor(this.player.pos.x),a=Math.floor(this.player.pos.z),l=this.pointInWater(this.player.pos.x,this.player.pos.y,this.player.pos.z),c=QT(this.fallDistance,r,this.player.onGround,l);this.fallDistance=c.fallDistance,c.damage>0&&(this.hurtPlayer(c.damage,0,0,!0),ts(this.survival,oA)),C2(this.player.pos.x,this.player.pos.y,this.player.pos.z,(g,v,m)=>this.world.getBlock(g,v,m))&&this.hurtPlayer(1,0,0,!0);const h=jc(this.world.getBlock(o,Math.floor(this.player.pos.y),a)),u=jc(this.world.getBlock(o,Math.floor(this.player.pos.y+.9),a));(h||u)&&this.hurtPlayer(4,0,0,!0);const d=this.pointInWater(this.player.pos.x,this.player.pos.y+Jn,this.player.pos.z),p=this.survival.health;tE(this.survival,d),this.survival.health<p&&this.flashHurt(),JT(this.survival),Mc(this.survival)&&!this.dead&&this.die()}flashHurt(){this.hand.hurtShake();const t=document.getElementById("hurt");t&&(t.classList.remove("flash"),t.offsetWidth,t.classList.add("flash"))}hurtPlayer(t,e,n,s=!1){if(!this.creative){if(this.hurtCd>0){t>this.hurtWindowMax&&(ja(this.survival,t-this.hurtWindowMax),this.hurtWindowMax=t,this.flashHurt(),Mc(this.survival)&&!this.dead&&this.die());return}if(this.hurtCd=10,this.hurtWindowMax=t,ja(this.survival,t),this.flashHurt(),!s){const r=Math.hypot(e,n)||1;this.player.kbx=e/r*vp,this.player.kbz=n/r*vp,this.player.vel.y=gA}Mc(this.survival)&&!this.dead&&this.die()}}die(){this.prepareForSave(),this.dead=!0,this.stopDigging(),this.stopEating();const t=Math.floor(this.player.pos.x),e=Math.floor(this.player.pos.y),n=Math.floor(this.player.pos.z);for(let s=0;s<this.inv.length;s++){const r=this.inv[s];r&&r.count>0&&this.drops.push(fn(r.id,t,e,n,Math.random,r.count,r.dur)),this.inv[s]=null}this.hotbar.render(this.inv),this.dropRenderer.sync(this.drops,this.entityLight),window.dispatchEvent(new Event("mineworld:death")),this.touch?this.touch.setActive(!1):document.exitPointerLock()}isDead(){return this.dead}setTexturePack(t){if(t===this.texturePack)return;this.texturePack=t,hf(t);const e=Zc(t);this.chunks.setAtlas(e),this.hand.setAtlas(e),this.dropRenderer.setAtlas(e),this.hotbar.render(this.inv)}setLightingQuality(t){this.lightingQuality=t,this.chunks.setLightingQuality(t),this.hand.setLightingQuality(t),this.skyObjects.setLightingQuality(t),t==="off"&&this.renderer.setGodRays(null)}setRenderDistance(t){this.renderDistance=t;const e=t*16;this.normalFog instanceof fr&&(this.normalFog.near=e*.72,this.normalFog.far=e),this.chunks.setFogFar(e)}respawn(){this.survival=yc(),this.dead=!1,this.fallDistance=0,this.portalTimer=0,this.portalArmed=!0,this.portalCooldown=0;const t=this.worldSpawn;this.dimension==="overworld"?(this.player={pos:{...t},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.chunks.update(Vt(Math.floor(t.x)),Vt(Math.floor(t.z)),2,999)):this.switchDimension("overworld",t),this.statusBar.render(this.survival)}useTargetedBlock(t){return t?this.world.getBlock(t.x,t.y,t.z)===um?(this.openCrafting(3),!0):this.world.getBlock(t.x,t.y,t.z)===ic?(this.openFurnace(t.x,t.y,t.z),!0):!1:!1}tryIgnitePortal(t,e){if(!t||e!==Wa||this.world.getBlock(t.x,t.y,t.z)!==bn)return!1;const n=AE((s,r,o)=>this.world.getBlock(s,r,o),t.x,t.y,t.z,[t.x+t.nx,t.y+t.ny,t.z+t.nz]);if(!n)return!1;if(this.editMany(n.map(([s,r,o])=>[s,r,o,bi]),{x:t.x+.5,y:t.y+.5,z:t.z+.5}),!this.creative){const s=so(Wa);s!==null&&ua(this.inv,this.hotbar.index,s),this.hotbar.render(this.inv)}return!0}beginHeldItemUse(){const t=this.inv[this.hotbar.index];return t&&t.id===Ji&&(this.creative||If(this.inv,js)>0)?(this.drawingBow=!0,this.bowCharge=0,!0):t&&t.count>0&&dc(t.id)&&this.survival.food<ss?(this.eating=!0,this.eatProgress=0,!0):!1}onUseDown(){const t=this.rayHit();if(this.useTargetedBlock(t))return;const e=this.inv[this.hotbar.index];this.tryIgnitePortal(t,(e==null?void 0:e.id)??null)||this.beginHeldItemUse()||this.placeBlock(t)}updateBow(t){if(!this.drawingBow)return;const e=this.inv[this.hotbar.index];if(!e||e.id!==Ji){this.drawingBow=!1,this.bowCharge=0;return}this.bowCharge=Math.min(this.bowCharge+t,mp)}releaseBow(){if(!this.drawingBow)return;this.drawingBow=!1;const t=this.bowCharge;this.bowCharge=0;const e=this.inv[this.hotbar.index];if(!e||e.id!==Ji||t<Nc)return;if(!this.creative){if(bT(this.inv,js,1)<1)return;const p=so(Ji);p!==null&&ua(this.inv,this.hotbar.index,p),this.hotbar.render(this.inv)}const n=(t-Nc)/(mp-Nc),s=gp+n*(pA-gp),r=Math.max(1,Math.round(2+n*(mA-2))),o=Math.cos(this.look.yaw),a=Math.sin(this.look.yaw),l=Math.cos(this.look.pitch),c=Math.sin(this.look.pitch),h=this.player.pos.x,u=this.player.pos.y+Jn,d=this.player.pos.z;this.arrows.push(xf(h+o*l*.4,u+c*.4,d+a*l*.4,o*l,c,a*l,s,!0,r)),this.hand.swing()}isCraftingOpen(){return this.craftingGrid>0}isContainerOpen(){return this.craftingGrid>0||this.furnaceKey!==null||this.furnaceUI.isOpen()}openPlayerInventory(){this.craftingGrid=2,this.creative?this.invUI.showCreative(this.inv):this.invUI.show(this.inv,2),this.touch?this.touch.setActive(!1):document.exitPointerLock()}openCrafting(t){this.craftingGrid=t,this.invUI.show(this.inv,t),this.touch?this.touch.setActive(!1):document.exitPointerLock()}dropOverflow(t){if(t.length===0)return;const e=Math.floor(this.player.pos.x),n=Math.floor(this.player.pos.y),s=Math.floor(this.player.pos.z);for(const r of t)r.count>0&&this.drops.push(fn(r.id,e,n,s,Math.random,r.count,r.dur));this.dropRenderer.sync(this.drops,this.entityLight)}closeCrafting(){this.craftingGrid=0,this.dropOverflow(this.invUI.hide()),this.touch?this.touch.setActive(!this.dead):this.canvas.requestPointerLock()}furnaceStateKey(t,e,n,s=this.dimension){return`${s}:${t},${e},${n}`}openFurnace(t,e,n){const s=this.furnaceStateKey(t,e,n);let r=this.furnaces.get(s);r||(r=xE(),this.furnaces.set(s,r)),this.furnaceKey=s,this.furnaceUI.show(this.inv,r),this.touch?this.touch.setActive(!1):document.exitPointerLock()}closeFurnace(){this.furnaceKey=null,this.dropOverflow(this.furnaceUI.hide()),this.touch?this.touch.setActive(!this.dead):this.canvas.requestPointerLock()}prepareForSave(){(this.furnaceKey!==null||this.furnaceUI.isOpen())&&(this.furnaceKey=null,this.dropOverflow(this.furnaceUI.hide())),(this.craftingGrid>0||this.invUI.isOpen())&&(this.craftingGrid=0,this.dropOverflow(this.invUI.hide())),this.hotbar.render(this.inv)}stopEating(){this.eating=!1,this.eatProgress=0}updateEating(t){if(!this.eating)return;const e=this.hotbar.index,n=this.inv[e];if(!n||n.count<=0||!dc(n.id)||this.survival.food>=ss){this.stopEating();return}if(this.eatProgress+=t,this.eatFxT+=t,this.eatFxT>=.09){this.eatFxT=0;const s=Math.cos(this.look.yaw),r=Math.sin(this.look.yaw),o=Math.cos(this.look.pitch),a=Math.sin(this.look.pitch),l=this.player.pos.x+s*o*.4,c=this.player.pos.y+Jn-.18+a*.4,h=this.player.pos.z+r*o*.4;this.particles.push(...Yi(l,c,h,Ws(n.id),2))}if(this.eatProgress>=eA){const s=qS(n.id),r=Uf(this.inv,e);s&&r!==null&&(jT(this.survival,s),this.hotbar.render(this.inv)),this.eatProgress=0}}crosshairRay(){const t={x:this.player.pos.x,y:this.player.pos.y+Jn,z:this.player.pos.z},e=Math.cos(this.look.yaw),n=Math.sin(this.look.yaw),s=Math.cos(this.look.pitch),r=Math.sin(this.look.pitch);return{origin:t,direction:{x:e*s,y:r,z:n*s}}}rayHitFor(t){return tf(t.origin,t.direction,this.creative?j2:K2,(e,n,s)=>Kd(this.world.getBlock(e,n,s)))}rayHit(){return this.rayHitFor(this.crosshairRay())}pickTargetedBlock(){const t=this.rayHit();if(!t)return;const e=this.world.getBlock(t.x,t.y,t.z),n=CT(this.inv,this.hotbar.index,e);this.hotbar.setSelected(n),this.hotbar.render(this.inv)}recordEdit(t,e,n,s,r){if(this.save.edits[rh(t,e,n,s)]=r,t!==this.dimension)return;const o=`${Vt(e)},${Vt(s)}`;let a=this.activeEditsByChunk.get(o);a||(a=new Map,this.activeEditsByChunk.set(o,a)),a.set(`${Pe(e)},${n},${Pe(s)}`,{x:e,y:n,z:s,id:r})}applyLocalEdit(t,e,n,s){this.world.setBlock(t,e,n,s),s===sn&&this.world.setWater(t,e,n,8,!0,!1),this.recordEdit(this.dimension,t,e,n,s),this.fluidSim.activate(t,e,n)}editMany(t,e){var n;if(t.length!==0){for(const[s,r,o,a]of t)this.applyLocalEdit(s,r,o,a);this.chunks.remeshDirty(),e&&((n=this.multiplayer)==null||n.sendBlockBatch("local",t.map(([s,r,o,a])=>({dimension:this.dimension,x:s,y:r,z:o,id:a})),{center:e}))}}edit(t,e,n,s){var r;this.applyLocalEdit(t,e,n,s),this.chunks.remeshDirty(),(r=this.multiplayer)==null||r.sendBlock({dimension:this.dimension,x:t,y:e,z:n,id:s})}applyRemoteBlockEdit(t){t.dimension!=="overworld"&&t.dimension!=="nether"||!Number.isInteger(t.x)||!Number.isInteger(t.y)||!Number.isInteger(t.z)||!Number.isInteger(t.id)||!Ie[t.id]||t.y<0||t.y>=pe||(this.recordEdit(t.dimension,t.x,t.y,t.z,t.id),t.dimension===this.dimension&&this.world.peek(Vt(t.x),Vt(t.z))&&(this.world.setBlock(t.x,t.y,t.z,t.id),t.id===sn&&this.world.setWater(t.x,t.y,t.z,8,!0,!1),this.fluidSim.activate(t.x,t.y,t.z),this.chunks.remeshDirty()))}applyRemoteBlockBatch(t){let e=!1;for(const n of t.edits)n.dimension!=="overworld"&&n.dimension!=="nether"||!Number.isInteger(n.x)||!Number.isInteger(n.y)||!Number.isInteger(n.z)||!Number.isInteger(n.id)||!Ie[n.id]||n.y<0||n.y>=pe||(this.recordEdit(n.dimension,n.x,n.y,n.z,n.id),!(n.dimension!==this.dimension||!this.world.peek(Vt(n.x),Vt(n.z)))&&(this.world.setBlock(n.x,n.y,n.z,n.id),n.id===sn&&this.world.setWater(n.x,n.y,n.z,8,!0,!1),this.fluidSim.activate(n.x,n.y,n.z),e=!0));e&&this.chunks.remeshDirty()}setNetworkWorldTime(t){if(!Number.isFinite(t))return;const e=Math.floor(t)%rn;this.worldTime=e<0?e+rn:e}editDim(t,e,n,s,r){this.recordEdit(t,e,n,s,r)}worldAt(t,e,n,s,r){if(t===this.dimension)return this.world.getBlock(e,n,s);const o=this.save.edits[rh(t,e,n,s)];if(o!==void 0)return o;if(n<0||n>=pe)return 0;const a=Vt(e),l=Vt(s),c=`${t}:${a},${l}`;let h=r==null?void 0:r.get(c);return h||(h=_m(a,l,this.save.seed,t),r==null||r.set(c,h)),h.get(Pe(e),n,Pe(s))}activePortalFrameAt(t,e,n,s,r){const o=(l,c,h)=>this.worldAt(t,l,c,h,r);if(!zn(o(e,n,s)))return null;const a=g0((l,c,h)=>o(l,c,h)===bn,(l,c,h)=>{const u=o(l,c,h);return u===Le||zn(u)},e,n,s);return!a||!a.inner.every(([l,c,h])=>zn(o(l,c,h)))?null:a}portalKey(t,e){const n=e.inner.reduce((s,r)=>r[0]!==s[0]?r[0]<s[0]?r:s:r[1]!==s[1]?r[1]<s[1]?r:s:r[2]<s[2]?r:s);return`portal:${t}:${e.axis}:${n[0]},${n[1]},${n[2]}`}portalSpawn(t){const e=t.inner.reduce((n,s)=>s[1]!==n[1]?s[1]<n[1]?s:n:s[0]!==n[0]?s[0]<n[0]?s:n:s[2]<n[2]?s:n);return[e[0]+.5,e[1],e[2]+.5]}findSavedPortalNear(t,e,n,s=128){const r=[];for(const[l,c]of Object.entries(this.save.edits)){if(!zn(c))continue;const h=oh(l);if(h.dim!==t||Math.abs(h.x-e)>s||Math.abs(h.z-n)>s)continue;const u=h.x+.5-e,d=h.z+.5-n,p=u*u+d*d;p>s*s||r.push({...h,distance2:p})}r.sort((l,c)=>l.distance2-c.distance2||l.y-c.y);const o=new Map,a=new Set;for(const l of r){const c=this.activePortalFrameAt(t,l.x,l.y,l.z,o);if(!c)continue;const h=this.portalKey(t,c);if(!a.has(h))return a.add(h),o.clear(),{frame:c,spawn:this.portalSpawn(c)}}return o.clear(),null}tickPortalTravel(){var x,_;const t=this.player.pos,e=Math.floor(t.x),n=Math.floor(t.y),s=Math.floor(t.z),r=zn(this.world.getBlock(e,n,s));if(this.portalTimer=r?this.portalTimer+wa/1e3:0,r||(this.portalArmed=!0),!r||!this.portalArmed||this.portalCooldown!==0||this.portalTimer<jh)return;const o=this.activePortalFrameAt(this.dimension,e,n,s);if(!o){this.portalTimer=0,this.collapseInvalidPortalsAround(e,n,s);return}const a=this.dimension,l=a==="overworld"?"nether":"overworld",c=this.portalKey(a,o),h=(x=this.save).portalLinks??(x.portalLinks={}),u=o.inner.map(([M,R,A])=>`${a}:${M},${R},${A}`),[d,p]=RE(a,t.x,t.z),g=[];h[c]&&g.push([c,h[c]]);for(const M of u)h[M]&&!g.some(([R])=>R===M)&&g.push([M,h[M]]);let v;const m=new Map;for(const[M,R]of g){if(Math.hypot(R[0]-d,R[2]-p)>128){delete h[M];continue}if(this.activePortalFrameAt(l,Math.floor(R[0]),Math.floor(R[1]),Math.floor(R[2]),m)){v=R;break}delete h[M]}if(m.clear(),!v){const M=this.findSavedPortalNear(l,d,p);M&&(v=M.spawn)}let f=[];if(!v){const M=new Map,R=PE((A,P,I)=>this.worldAt(l,A,P,I,M),l,d,p);M.clear(),f=R.edits;for(const[A,P,I,b]of R.edits)this.editDim(l,A,P,I,b);v=[R.spawn.x,R.spawn.y,R.spawn.z]}for(const M of u)delete h[M];h[c]=v,(_=this.multiplayer)==null||_.sendBlockBatch("portal",f.map(([M,R,A,P])=>({dimension:l,x:M,y:R,z:A,id:P})),{transition:{x:v[0],y:v[1],z:v[2],yaw:this.look.yaw,pitch:this.look.pitch,dimension:l}}),this.portalArmed=!1,this.portalTimer=0,this.switchDimension(l,{x:v[0],y:v[1],z:v[2]})}queueLeafDecay(t,e,n){for(const s of $w((r,o,a)=>this.world.getBlock(r,o,a),t,e,n))this.decayQueue.some(r=>r.x===s.x&&r.y===s.y&&r.z===s.z)||this.decayQueue.push({x:s.x,y:s.y,z:s.z,t:40+Math.floor(Math.random()*160)})}tickLeafDecay(){if(this.decayQueue.length!==0)for(let t=this.decayQueue.length-1;t>=0;t--){const e=this.decayQueue[t];if(--e.t>0)continue;this.decayQueue.splice(t,1);const n=this.world.getBlock(e.x,e.y,e.z);n!==nr&&n!==hl||(this.edit(e.x,e.y,e.z,Le),this.particles.push(...Yi(e.x+.5,e.y+.5,e.z+.5,Ws(n),8)),n===nr&&Math.random()<hp&&this.drops.push(fn(Ha,e.x,e.y,e.z)))}}updateMining(t){if(!this.digging){this.crack.hide();return}const e=this.touchDigging?this.touchDigHit:this.rayHit();if(!e){this.digProgress=0,this.digTarget=null,this.crack.hide(),this.touchDigging&&this.stopDigging();return}const n=this.world.getBlock(e.x,e.y,e.z);if(this.touchDigging&&!Kd(n)){this.stopDigging();return}if((!this.digTarget||this.digTarget.x!==e.x||this.digTarget.y!==e.y||this.digTarget.z!==e.z)&&(this.digTarget={x:e.x,y:e.y,z:e.z},this.digProgress=0),!this.creative&&pm(n)<0){this.crack.hide();return}const s=this.creative?J2:cw(n,this.heldTool())/1e3;if(s<=0){this.mineBlock(e.x,e.y,e.z,n),this.touchDigging&&this.stopDigging();return}this.digProgress+=t,this.digProgress>=s?(this.mineBlock(e.x,e.y,e.z,n),this.touchDigging&&this.stopDigging()):(this.crack.show(e.x,e.y,e.z,this.digProgress/s),this.digFxT+=t,this.digFxT>=.07&&(this.digFxT=0,this.particles.push(...Yi(e.x+.5,e.y+.5,e.z+.5,Ws(n),3))))}heldTool(){const t=this.inv[this.hotbar.index];return t?Pa(t.id):null}settleFallingBlock(t,e,n,s){const r=this.world.getBlock(t,e,n);if(r!==sc&&r!==Ko)return!1;const o=s===void 0,a=s??new Map;let l=e;for(;l>1&&!xe(this.world.getBlock(t,l-1,n));)l--;if(l===e)return!1;const c=(u,d,p,g)=>{this.applyLocalEdit(u,d,p,g),a.set(`${u},${d},${p}`,[u,d,p,g])};c(t,e,n,Le);const h=this.world.getBlock(t,l,n);return h===ns||Ti(h)||zn(h)?(this.drops.push(fn(r,t,l,n)),o&&this.finishGravityBatch(a,t,e,n),!0):(c(t,l,n,r),o&&this.finishGravityBatch(a,t,e,n),!0)}finishGravityBatch(t,e,n,s){var r;t.size!==0&&(this.chunks.remeshDirty(),(r=this.multiplayer)==null||r.sendBlockBatch("gravity",[...t.values()].map(([o,a,l,c])=>({dimension:this.dimension,x:o,y:a,z:l,id:c})),{center:{x:e+.5,y:n+.5,z:s+.5}}))}settleFallingAt(t,e,n,s){const r=s===void 0,o=s??new Map;let a=e+1;for(;;){const l=this.world.getBlock(t,a,n);if(l!==sc&&l!==Ko||!this.settleFallingBlock(t,a,n,o))break;a++}r&&this.finishGravityBatch(o,t,e,n)}collapseInvalidPortalsAround(t,e,n){const s=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],r=[[0,0,0],...s],o=new Set;for(const[a,l,c]of r){const h=t+a,u=e+l,d=n+c,p=`${h},${u},${d}`;if(o.has(p)||!zn(this.world.getBlock(h,u,d)))continue;const g=[[h,u,d]],v=[];for(;g.length>0&&v.length<1024;){const[x,_,M]=g.pop(),R=`${x},${_},${M}`;if(!(o.has(R)||!zn(this.world.getBlock(x,_,M)))){o.add(R),v.push([x,_,M]);for(const[A,P,I]of s)g.push([x+A,_+P,M+I])}}const m=new Set;for(const[x,_,M]of v){const R=`${x},${_},${M}`;if(m.has(R))continue;const A=this.activePortalFrameAt(this.dimension,x,_,M);if(A)for(const[P,I,b]of A.inner)m.add(`${P},${I},${b}`)}const f=v.filter(([x,_,M])=>!m.has(`${x},${_},${M}`)).map(([x,_,M])=>[x,_,M,Le]);this.editMany(f,{x:t+.5,y:e+.5,z:n+.5})}}destroyFurnaceState(t,e,n){const s=this.furnaceStateKey(t,e,n);this.furnaceKey===s&&this.closeFurnace();const r=this.furnaces.get(s);if(!r)return;const o=[[r.input,r.inputN],[r.fuel,r.fuelN,r.fuelDur],[r.output,r.outputN]];for(const[a,l,c]of o)l>0&&this.drops.push(fn(a,t,e,n,Math.random,l,c));this.furnaces.delete(s)}mineBlock(t,e,n,s){if(Ti(s)){this.edit(t,e,n,Le),this.particles.push(...Yi(t+.5,e+.5,n+.5,Ws(s),6)),this.digProgress=0,this.digTarget=null,this.crack.hide();return}let r=this.creative?null:hw(s,this.heldTool());r===Ko&&Math.random()<.1&&(r=jm);const o=s===ir&&!this.creative&&this.world.getBlock(t,e-1,n)!==Le;this.edit(t,e,n,o?sn:Le),s===bn&&this.collapseInvalidPortalsAround(t,e,n);const a=this.world.getBlock(t,e+1,n);(Ti(a)||a===ns)&&(this.edit(t,e+1,n,Le),a===ns&&!this.creative&&this.drops.push(fn(ns,t,e+1,n)),this.particles.push(...Yi(t+.5,e+1.5,n+.5,Ws(a),6))),this.settleFallingAt(t,e,n),this.particles.push(...Yi(t+.5,e+.5,n+.5,Ws(s),16)),r!==null&&this.drops.push(fn(r,t,e,n)),!this.creative&&s===nr&&Math.random()<hp&&this.drops.push(fn(Ha,t,e,n)),(s===ll||s===cl)&&this.queueLeafDecay(t,e,n),s===ic&&this.destroyFurnaceState(t,e,n),ts(this.survival,rA);const l=this.inv[this.hotbar.index],c=l?Pa(l.id):null;!this.creative&&c&&(ua(this.inv,this.hotbar.index,c.maxDurability),this.hotbar.render(this.inv)),this.digProgress=0,this.digTarget=null,this.crack.hide()}updateDrops(t){const e=this.player.pos.x,n=this.player.pos.y+.9,s=this.player.pos.z;QS(this.drops,as);for(let r=this.drops.length-1;r>=0;r--){const o=this.drops[r];if(JS(o,this.physWorld,t),o.age>Z2){this.drops.splice(r,1);continue}if(tb(o,e,n,s))if(o.dur!==void 0)ST(this.inv,o.id,o.dur)&&(this.drops.splice(r,1),this.hotbar.render(this.inv));else{const a=kf(this.inv,o.id,o.count,as(o.id));a<o.count&&this.hotbar.render(this.inv),a===0?this.drops.splice(r,1):o.count=a}}this.dropRenderer.sync(this.drops,this.entityLight)}tickMobs(){const t=this.player.pos.x,e=this.player.pos.z,n=this.creative?null:{x:t,y:this.player.pos.y,z:e};let s=0,r=0,o=0;for(let a=this.mobs.length-1;a>=0;a--){const l=this.mobs[a];if(l.health<=0){this.mobs.splice(a,1);continue}const c=l.pos.x-t,h=l.pos.z-e,u=c*c+h*h;if(u>dp*dp){this.mobs.splice(a,1);continue}const d=Eb(l.kind);d&&o++,u<fp*fp&&(s++,d&&r++);const p=d?Kb(l,this.physWorld,this.mobRng,n,this.isSunlit(l)):kb(l,this.physWorld,this.mobRng);Object.assign(l,p.mob);let g=!1;for(const v of p.events)if(v.kind==="layEgg")this.drops.push(fn($m,Math.floor(v.pos.x),Math.floor(v.pos.y),Math.floor(v.pos.z)));else if(v.kind==="attackPlayer")this.hurtPlayer(v.damage,t-l.pos.x,e-l.pos.z),l.kind==="husk"&&ts(this.survival,3);else if(v.kind==="shootArrow")this.arrows.push(xf(v.from.x,v.from.y,v.from.z,v.dir.x,v.dir.y,v.dir.z,s0,!1,v.damage));else if(v.kind==="explode")this.explode(v.pos,v.radius,v.damage,l);else if(v.kind==="drops")for(const m of v.items)this.drops.push(fn(m.id,Math.floor(v.pos.x),Math.floor(v.pos.y),Math.floor(v.pos.z),Math.random,m.count));else v.kind==="death"&&(g=!0);if(g){const v=this.mobs.indexOf(l);v>=0&&this.mobs.splice(v,1)}}if(++this.mobSpawnTick>=uA){if(this.mobSpawnTick=0,this.dimension!=="overworld")return;if(s<lA&&this.mobs.length<up){const l=this.player.vel,c=Math.hypot(l.x,l.z)>.001?Math.atan2(l.z,l.x):null;this.mobs.push(...bf(pp[Math.floor(this.mobRng()*4)],t,e,this.mobRng,this.spawnWorld,this.surfaceY,24,44,c,Math.PI/2))}let a=Math.min(hA-o,up-this.mobs.length);if(r<cA&&a>0){const l=this.mobRng(),c=Xs(t,e,this.save.seed),h=Zb(c,l),u=(p,g,v)=>{const[m,f]=this.chunks.lightLevelAt(p,g,v);return Math.max(f,m-this.skyDarkenNow)},d=tT(h,t,this.player.pos.y,e,this.mobRng,this.spawnWorld,this.surfaceY,void 0,void 0,u).slice(0,a);this.mobs.push(...d),a-=d.length,a>0&&this.mobs.push(...Jb(h,t,e,this.mobRng,this.spawnWorld,this.surfaceY,void 0,void 0,u).slice(0,a))}}}explode(t,e,n,s){var m;const r=Math.floor(t.x),o=Math.floor(t.y),a=Math.floor(t.z),l=e*e,c=Math.ceil(e),h=f=>{const x=Math.hypot(f.x-t.x,f.y-t.y,f.z-t.z);let _=Math.round(n*(1-x/(e+1.5)));return _>0&&this.explosionBlocked(t,f)&&(_=Math.round(_*.3)),Math.max(0,_)},u={damage:h({x:this.player.pos.x,y:this.player.pos.y+.9,z:this.player.pos.z}),dx:this.player.pos.x-t.x,dz:this.player.pos.z-t.z},d=this.mobs.filter(f=>f!==s&&f.health>0).map(f=>({mob:f,damage:h({x:f.pos.x,y:f.pos.y+.5,z:f.pos.z}),dx:f.pos.x-t.x,dz:f.pos.z-t.z})),p=new Map,g=new Map;for(let f=-c;f<=c;f++)for(let x=-c;x<=c;x++)for(let _=-c;_<=c;_++){if(_*_+f*f+x*x>l)continue;const M=r+_,R=o+f,A=a+x,P=this.world.getBlock(M,R,A);if(!xe(P)&&!Ti(P)||P===Dh||P===bn)continue;P===ic&&this.destroyFurnaceState(M,R,A),this.world.setBlock(M,R,A,Le),this.recordEdit(this.dimension,M,R,A,Le),this.fluidSim.activate(M,R,A),g.set(`${M},${R},${A}`,[M,R,A,Le]);const I=`${M},${A}`,b=p.get(I);(!b||R>b.y)&&p.set(I,{x:M,y:R,z:A})}for(const f of p.values())this.settleFallingAt(f.x,f.y,f.z,g);const v=[...g.values()].map(([f,x,_,M])=>({dimension:this.dimension,x:f,y:x,z:_,id:M}));v.length>0&&((m=this.multiplayer)==null||m.sendBlockBatch("explosion",v,{center:t})),this.chunks.remeshDirty(),this.particles.push(...Yi(t.x,t.y+.4,t.z,[.33,.33,.33],30)),u.damage>0&&this.hurtPlayer(u.damage,u.dx,u.dz);for(const{mob:f,damage:x,dx:_,dz:M}of d){if(x<=0)continue;const R=vc(f,x,{x:_,z:M},this.mobRng);Object.assign(f,R.mob);for(const A of R.events)if(A.kind==="drops")for(const P of A.items)this.drops.push(fn(P.id,Math.floor(A.pos.x),Math.floor(A.pos.y),Math.floor(A.pos.z),Math.random,P.count));else A.kind}}explosionBlocked(t,e){for(let s=1;s<8;s++){const r=s/8,o=Math.floor(t.x+(e.x-t.x)*r),a=Math.floor(t.y+(e.y-t.y)*r),l=Math.floor(t.z+(e.z-t.z)*r);if(xe(this.world.getBlock(o,a,l)))return!0}return!1}isSunlit(t){return nT(t,this.world,Aa(this.worldTime).isNight)}tickArrows(){const t=(e,n,s,r,o,a,l,c)=>e>=r-l&&e<=r+l&&n>=a&&n<=a+c&&s>=o-l&&s<=o+l;for(let e=this.arrows.length-1;e>=0;e--){const n=this.arrows[e];if(n.age>dA){this.arrows.splice(e,1);continue}if(n.stuck){if(n.age++,n.age>fA){const d=n.x-this.player.pos.x,p=n.y-(this.player.pos.y+.9),g=n.z-this.player.pos.z;d*d+p*p+g*g<1.4*1.4&&kf(this.inv,js,1)===0&&(this.hotbar.render(this.inv),this.arrows.splice(e,1))}continue}const s=n.x,r=n.y,o=n.z;wb(n,this.physWorld);const a=n.x-s,l=n.y-r,c=n.z-o,h=Math.max(1,Math.ceil(Math.hypot(a,l,c)/.2));let u=!1;for(let d=1;d<=h&&!u;d++){const p=d/h,g=s+a*p,v=r+l*p,m=o+c*p;if(n.fromPlayer)for(const f of this.mobs){const x=qn[f.kind];if(t(g,v,m,f.pos.x,f.pos.z,f.pos.y,x.width/2,x.height)){this.damageMobWithArrow(f,n),u=!0;break}}else t(g,v,m,this.player.pos.x,this.player.pos.z,this.player.pos.y,Ga/2,cs)&&(this.hurtPlayer(n.damage,n.vx,n.vz),u=!0)}u&&this.arrows.splice(e,1)}}damageMobWithArrow(t,e){const n=vc(t,e.damage,{x:e.vx,z:e.vz},this.mobRng);Object.assign(t,n.mob);for(const s of n.events)if(s.kind==="drops")for(const r of s.items)this.drops.push(fn(r.id,Math.floor(s.pos.x),Math.floor(s.pos.y),Math.floor(s.pos.z),Math.random,r.count));else if(s.kind==="death"){const r=this.mobs.indexOf(t);r>=0&&this.mobs.splice(r,1)}}mobUnderRay(t=this.crosshairRay()){const{origin:e,direction:n}=t,{x:s,y:r,z:o}=e,{x:a,y:l,z:c}=n;let h=null,u=aA;for(const d of this.mobs){const p=qn[d.kind],g=p.width/2,v=_A(s,r,o,a,l,c,d.pos.x-g,d.pos.y,d.pos.z-g,d.pos.x+g,d.pos.y+p.height,d.pos.z+g);v!==null&&v<u&&(u=v,h=d)}return h!==null&&tf({x:s,y:r,z:o},{x:a,y:l,z:c},u,(p,g,v)=>xe(this.world.getBlock(p,g,v)))?null:h}attackMob(t,e){this.hand.swing();const n=this.inv[this.hotbar.index],s=vA(n?n.id:null),r=n?Pa(n.id):null;if(!this.creative&&r){for(let u=r.kind==="sword"?1:2;u>0;u--)ua(this.inv,this.hotbar.index,r.maxDurability);this.hotbar.render(this.inv)}const o=e==null?void 0:e.direction,a=o?Math.hypot(o.x,o.z):0,l=o&&a>1e-6?o.x/a:Math.cos(this.look.yaw),c=o&&a>1e-6?o.z/a:Math.sin(this.look.yaw),h=vc(t,s,{x:l,z:c},this.mobRng);Object.assign(t,h.mob);for(const u of h.events)if(u.kind==="drops")for(const d of u.items)this.drops.push(fn(d.id,Math.floor(u.pos.x),Math.floor(u.pos.y),Math.floor(u.pos.z),Math.random,d.count));else if(u.kind==="death"){const d=this.mobs.indexOf(t);d>=0&&this.mobs.splice(d,1)}}placeBlock(t=this.rayHit()){const e=this.hotbar.index,n=this.inv[e];if(!n||n.count<=0||n.id>=256||!t)return;const s=jd(this.world.getBlock(t.x,t.y,t.z)),r=s?t.x:t.x+t.nx,o=s?t.y:t.y+t.ny,a=s?t.z:t.z+t.nz,l=this.world.getBlock(r,o,a);if(!jd(l))return;const c=zn(l);if(this.overlapsPlayer(r,o,a))return;const h=this.creative?n.id:Uf(this.inv,e);h!==null&&(this.edit(r,o,a,h),c&&this.collapseInvalidPortalsAround(r,o,a),(h===sc||h===Ko)&&this.settleFallingBlock(r,o,a),this.hotbar.render(this.inv),this.hand.swing())}overlapsPlayer(t,e,n){const s=this.player.pos,r=Ga/2;return t<s.x+r&&t+1>s.x-r&&e<s.y+cs&&e+1>s.y&&n<s.z+r&&n+1>s.z-r}updateDayNight(){const t=Aa(this.worldTime,this.dimension),e=this.worldTime/rn*Math.PI*2,n=Math.sin(e);let s=0;this.dimension==="overworld"&&n>-.15&&(s=Math.max(0,1-Math.abs(n)/.3)*Math.min(1,(n+.15)/.15)),this.renderer.setSkyColors(t.skyTop,t.skyHorizon,e,s,n,this.dimension==="overworld");const r=this.normalFog;r&&r.color.setRGB(t.skyHorizon[0],t.skyHorizon[1],t.skyHorizon[2],ae);const o=t.worldTint,a=Math.max(o[0],o[1],o[2],.001);this.chunks.setTint([o[0]/a,o[1]/a,o[2]/a]);const l=Em(this.worldTime),c=this.lightingQuality==="off"?l:l*.86;this.skyDarkenNow=c,this.chunks.setSkyDarken(c),this.chunks.setSkyMul(1-l/11),this.chunks.setSkyReflection(t.skyHorizon,t.skyTop);const h=this.worldTime/rn*Math.PI*2;this.chunks.setSunDir(Math.cos(h),Math.sin(h),.1)}updateGodRays(){if(this.lightingQuality==="off")return;const t=this.worldTime/rn*Math.PI*2,e=Math.cos(t),n=Math.sin(t),s=.1,r=Math.hypot(e,n,s)||1,o=n/r,a=this.renderer.camera;a.getWorldDirection(this._godFwd);const l=this._godFwd.x*(e/r)+this._godFwd.y*(n/r)+this._godFwd.z*(s/r),c=500;this._godSunWorld.set(a.position.x+e/r*c,a.position.y+n/r*c,a.position.z+s/r*c),this._godSunWorld.project(a);const h=this._godSunWorld,u=h.x*.5+.5,d=h.y*.5+.5,p=u>=0&&u<=1&&d>=0&&d<=1;let g=0;this.dimension==="overworld"&&o>0&&l>0&&p&&(g=Math.min(.6,o*2.6));const v=1,m=.6+o*.7,f=.3+o*1;this._godSunColor.setRGB(v,Math.min(1,m),Math.min(1,f)),this._godSunUV.set(u,d),this.renderer.setGodRays({quality:this.lightingQuality,sunUV:this._godSunUV,intensity:g,sunColor:this._godSunColor})}updateWater(){const t=this.renderer.camera.position,e=this.pointInWater(t.x,t.y,t.z);this.renderer.scene.fog=e&&this.lightingQuality==="off"?this.underFog:this.normalFog,this.renderer.setUnderwater(e),this.chunks.setCameraUnderwater(e),this.hand.setUnderwater(e),this.underwaterEl&&(this.underwaterEl.style.display=e&&this.lightingQuality==="off"?"block":"none")}updateHighlight(){const t=this.rayHit();t?(this.highlight.position.set(t.x+.5,t.y+.5,t.z+.5),this.highlight.visible=!0):this.highlight.visible=!1}updateCamera(t){const e=this.prev.pos,n=this.player.pos,s=e.x+(n.x-e.x)*t,r=e.y+(n.y-e.y)*t,o=e.z+(n.z-e.z)*t,a=this.renderer.camera;this.camEye+=((this.crouching?mb:Jn)-this.camEye)*.3;const l=this.camEye;a.position.set(s,r+l,o);const c=Math.cos(this.look.yaw),h=Math.sin(this.look.yaw),u=Math.cos(this.look.pitch),d=Math.sin(this.look.pitch);a.lookAt(s+c*u,r+l+d,o+h*u)}}const Fc=4;class yA{constructor(t,e=4242){y(this,"gl");y(this,"scene",new pr);y(this,"camera",new Ke(70,1,.1,1e3));y(this,"world");y(this,"chunks");y(this,"running",!1);y(this,"x",.5);y(this,"z",.5);y(this,"heading",.7);y(this,"y",175);y(this,"disposed",!1);y(this,"preloadAbort",null);y(this,"onResize",()=>this.resize());var n,s;this.gl=new Qp({canvas:t,antialias:!1}),this.gl.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene.background=B1(),this.scene.fog=new fr(sm,40,Fc*16),this.camera.layers.enable(Ch),this.world=new xm(e),this.seekWater(),this.chunks=new Dm(this.scene,this.world,Zc()),this.chunks.update(Vt(Math.floor(this.x)),Vt(Math.floor(this.z)),Fc,999),this.resize(),window.addEventListener("resize",this.onResize),window.addEventListener("orientationchange",this.onResize),(n=window.visualViewport)==null||n.addEventListener("resize",this.onResize),(s=window.visualViewport)==null||s.addEventListener("scroll",this.onResize)}seekWater(){for(let t=4;t<120;t+=3)for(let e=0;e<12;e++){const n=e/12*Math.PI*2,s=Math.round(Math.cos(n)*t),r=Math.round(Math.sin(n)*t);if(li(this.world.getBlock(s,ee,r))){this.heading=n,this.x=s-Math.cos(n)*14+.5,this.z=r-Math.sin(n)*14+.5;return}}}resize(){const{width:t,height:e}=rm(window);this.gl.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}async preload(t=Fc,e){var a;(a=this.preloadAbort)==null||a.abort();const n=new AbortController;this.preloadAbort=n;const s=()=>n.abort();e!=null&&e.aborted?s():e==null||e.addEventListener("abort",s,{once:!0});const r=n.signal,o=()=>this.disposed||r.aborted;try{if(o())return;const l=Vt(Math.floor(this.x)),c=Vt(Math.floor(this.z));for(let u=-t;u<=t;u++)for(let d=-t;d<=t;d++)this.world.request(l+d,c+u);if(!await new Promise(u=>{let d=null,p=!1;const g=f=>{p||(p=!0,d!==null&&clearTimeout(d),r.removeEventListener("abort",v),u(f))},v=()=>g(!1),m=()=>{if(o()){g(!1);return}let f=!0;for(let x=-t;x<=t&&f;x++)for(let _=-t;_<=t&&f;_++)this.world.peek(l+_,c+x)||(f=!1);f?g(!0):d=setTimeout(m,30)};r.addEventListener("abort",v,{once:!0}),m()})||o())return;for(let u=0;u<600&&(u<3||this.chunks.meshBusy());u++)if(o()||(this.chunks.update(l,c,t,999),this.chunks.flushMesh(999),!await new Promise(p=>{let g=!1,v=0;const m=x=>{g||(g=!0,r.removeEventListener("abort",f),p(x))},f=()=>{v!==0&&cancelAnimationFrame(v),m(!1)};r.addEventListener("abort",f,{once:!0}),v=requestAnimationFrame(()=>m(!0))})))return}finally{e==null||e.removeEventListener("abort",s),this.preloadAbort===n&&(this.preloadAbort=null)}}start(){if(this.running)return;this.running=!0;const t=()=>{this.running&&(requestAnimationFrame(t),this.heading+=6e-4,this.camera.position.set(this.x,this.y,this.z),this.camera.lookAt(this.x+Math.cos(this.heading)*26,this.y-17,this.z+Math.sin(this.heading)*26),this.chunks.flushMesh(2),this.gl.render(this.scene,this.camera))};requestAnimationFrame(t)}stop(){this.running=!1}dispose(){var t,e,n;this.disposed||(this.disposed=!0,(t=this.preloadAbort)==null||t.abort(),this.preloadAbort=null,this.running=!1,window.removeEventListener("resize",this.onResize),window.removeEventListener("orientationchange",this.onResize),(e=window.visualViewport)==null||e.removeEventListener("resize",this.onResize),(n=window.visualViewport)==null||n.removeEventListener("scroll",this.onResize),this.chunks.dispose(),this.world.dispose(),this.gl.dispose(),this.gl.forceContextLoss())}}function MA(){if(document.getElementById("mw-settings-css"))return;const i=document.createElement("style");i.id="mw-settings-css",i.textContent=`
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
    #settings input[type=checkbox]:checked::after{content:'';position:absolute;inset:4px;background:#0e1a28;}`,document.head.appendChild(i)}class wA{constructor(t){y(this,"root");y(this,"settings");y(this,"onChange",null);this.root=t,this.settings=Mm(),t.classList.remove("hidden"),MA(),t.style.cssText="position:fixed;inset:0;z-index:40;display:none;align-items:center;justify-content:center;background:#0e1a28;overflow-y:auto;overscroll-behavior:contain;touch-action:pan-y;-webkit-overflow-scrolling:touch;",t.innerHTML=`
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
      </div>`;const e=t.querySelector("#set-vol"),n=t.querySelector("#set-vol-val"),s=t.querySelector("#set-lighting"),r=t.querySelector("#set-tex-cartoon"),o=t.querySelector("#set-tex-classic"),a=()=>{r.classList.toggle("active",this.settings.texturePack==="cartoon"),o.classList.toggle("active",this.settings.texturePack==="classic"),r.style.outline=this.settings.texturePack==="cartoon"?"2px solid #6ab0ff":"none",o.style.outline=this.settings.texturePack==="classic"?"2px solid #6ab0ff":"none"},l=()=>{var g;Jw(this.settings),(g=this.onChange)==null||g.call(this,this.settings)},c=g=>{this.settings={...this.settings,texturePack:g},a(),l()},h=()=>e.style.setProperty("--fill",`${this.settings.volume}%`);e.addEventListener("input",()=>{this.settings={...this.settings,volume:Number(e.value)},n.textContent=`${this.settings.volume}%`,h(),l()}),s.addEventListener("change",()=>{this.settings={...this.settings,lightingQuality:s.value},l()}),r.addEventListener("click",()=>c("cartoon")),o.addEventListener("click",()=>c("classic"));const u=t.querySelector("#set-rd"),d=t.querySelector("#set-rd-val"),p=()=>u.style.setProperty("--fill",`${(this.settings.renderDistance-3)/9*100}%`);u.addEventListener("input",()=>{this.settings={...this.settings,renderDistance:Number(u.value)},d.textContent=String(this.settings.renderDistance),p(),l()}),t.querySelector("#set-close").addEventListener("click",()=>this.hide()),e.value=String(this.settings.volume),n.textContent=`${this.settings.volume}%`,h(),s.value=this.settings.lightingQuality,u.value=String(this.settings.renderDistance),d.textContent=String(this.settings.renderDistance),p(),a()}get current(){return this.settings}show(){this.root.style.display="flex"}hide(){this.root.style.display="none"}get visible(){return this.root.style.display!=="none"}}var SA={};const bA=1e3/15,TA=1e4,lh="wss://mineworld-multiplayer-nornttyy.onrender.com/ws",ch=5e3;function ki(i){return typeof i=="object"&&i!==null}function Ee(i){return typeof i=="number"&&Number.isFinite(i)}function Vr(i){return typeof i=="number"&&Number.isInteger(i)}function ml(i){return i==="overworld"||i==="nether"?i:null}function L0(i){return i==="survival"||i==="creative"?i:null}function hh(i){if(!ki(i))return null;const t=ml(i.dimension);return typeof i.id!="string"||typeof i.name!="string"||typeof i.skin!="string"||!Ee(i.x)||!Ee(i.y)||!Ee(i.z)||!Ee(i.yaw)||!Ee(i.pitch)||t===null?null:{id:i.id,name:i.name,skin:i.skin,x:i.x,y:i.y,z:i.z,yaw:i.yaw,pitch:i.pitch,dimension:t}}function hs(i){if(!ki(i))return null;const t=ml(i.dimension);return t===null||!Vr(i.x)||!Vr(i.y)||!Vr(i.z)||!Vr(i.id)?null:{dimension:t,x:i.x,y:i.y,z:i.z,id:i.id}}function EA(i){return i==="portal"||i==="explosion"||i==="gravity"||i==="local"?i:null}function AA(i){return!ki(i)||!Ee(i.x)||!Ee(i.y)||!Ee(i.z)?null:{x:i.x,y:i.y,z:i.z}}function RA(i){if(!ki(i))return null;const t=ml(i.dimension);return!Ee(i.x)||!Ee(i.y)||!Ee(i.z)||!Ee(i.yaw)||!Ee(i.pitch)||t===null?null:{x:i.x,y:i.y,z:i.z,yaw:i.yaw,pitch:i.pitch,dimension:t}}function uh(i){if(!ki(i))return null;const t=EA(i.kind);if(t===null||!Array.isArray(i.edits)||i.edits.length>512)return null;const e=i.edits.map(hs);if(e.some(r=>r===null))return null;const n=i.center===void 0?void 0:AA(i.center),s=i.transition===void 0?void 0:RA(i.transition);return n===null||s===null?null:{kind:t,edits:e,...n?{center:n}:{},...s?{transition:s}:{}}}function CA(i){return Number.isInteger(i.seed)&&i.seed>=-2e9&&i.seed<=2e9&&L0(i.gameMode)!==null&&Ee(i.worldTime)&&Math.abs(i.worldTime)<=2e9&&Array.isArray(i.edits)&&i.edits.length<=ch&&i.edits.every(t=>hs(t)!==null)}function PA(i){const t=[];for(const[e,n]of Object.entries(i.edits)){const s=oh(e),r={dimension:s.dim,x:s.x,y:s.y,z:s.z,id:n};hs(r)!==null&&t.push(r)}if(t.length>ch)throw new Error(`这个世界有 ${t.length} 个方块改动，联机房间最多可带入 ${ch} 个。`);return{seed:Math.floor(i.seed),gameMode:i.gameMode??"survival",worldTime:i.worldTime??1e3,edits:t}}function DA(i){if(!ki(i)||i.type!=="welcome"||typeof i.id!="string"||!ki(i.room))return null;const t=L0(i.room.gameMode);if(typeof i.room.id!="string"||!Vr(i.room.seed)||t===null||!Ee(i.room.worldTime)||!Array.isArray(i.players)||!Array.isArray(i.edits))return null;const e=i.players.map(hh),n=i.edits.map(hs);return e.some(s=>s===null)||n.some(s=>s===null)?null:{type:"welcome",id:i.id,room:{id:i.room.id,seed:i.room.seed,gameMode:t,worldTime:i.room.worldTime},players:e,edits:n}}function LA(i){if(!ki(i)||typeof i.type!="string")return null;if(i.type==="welcome")return DA(i);if(i.type==="error"&&typeof i.message=="string")return{type:"error",message:i.message};if(i.type==="player-join"){const t=hh(i.player);return t?{type:"player-join",player:t}:null}if(i.type==="player-leave"&&typeof i.id=="string")return{type:"player-leave",id:i.id};if(i.type==="state"&&typeof i.id=="string"){const t=hh(i.player);return t?{type:"state",id:i.id,player:t}:null}if(i.type==="block"){const t=hs(i.edit),e=hs(i),n=t??e;return n?{type:"block",edit:n}:null}if(i.type==="blocks"){const t=uh(i.batch)??uh(i);return t?{type:"blocks",batch:t}:null}return i.type==="time"&&Ee(i.worldTime)?{type:"time",worldTime:i.worldTime}:null}function Zh(i){return i.toUpperCase().replace(/[^A-Z0-9-]/g,"").slice(0,16)}function k0(i){return[...i].filter(e=>{const n=e.charCodeAt(0);return n>31&&n!==127}).join("").trim().slice(0,16)||"玩家"}function kA(){const i=new URLSearchParams(window.location.search).get("server");let t=null;try{t=localStorage.getItem("mineworld.multiplayer.server")}catch{}const e=SA.VITE_MULTIPLAYER_URL,n=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",s=i||t||e||(n?`ws://${window.location.hostname}:8787/ws`:lh);try{const r=new URL(s);if(r.protocol==="ws:"||r.protocol==="wss:")return r.toString()}catch{}return lh}class Qh{constructor(t){y(this,"socket");y(this,"players",new Map);y(this,"_id","");y(this,"_room",null);y(this,"_initialEdits",[]);y(this,"_closed",!1);y(this,"lastStateSent",-1/0);y(this,"disconnectReason","");y(this,"blockHandler",null);y(this,"blockBatchHandler",null);y(this,"worldTimeHandler",null);y(this,"pendingBlockEvents",[]);y(this,"pendingWorldTime",null);y(this,"onPlayersChanged",null);y(this,"onServerError",null);y(this,"onDisconnect",null);this.socket=t}static connect(t){var r;const e=Zh(t.room);if(e.length<3)return Promise.reject(new Error("房间号至少需要 3 个字符"));const n=k0(t.name);if(t.action!=="create"&&t.world!==void 0)return Promise.reject(new Error("只有创建房间时才能带入本地世界"));if(t.world!==void 0&&!CA(t.world))return Promise.reject(new Error("当前世界数据不适合开启联机房间"));const s=((r=t.world)==null?void 0:r.gameMode)??t.gameMode??"creative";return new Promise((o,a)=>{let l=!1,c=0,h;try{h=new Qh(new WebSocket(t.url))}catch{a(new Error("联机地址无效"));return}const u=d=>{l||(l=!0,window.clearTimeout(c),h.socket.close(),a(new Error(d)))};c=window.setTimeout(()=>u("连接超时，请检查联机服务器是否已启动"),TA),h.socket.addEventListener("open",()=>{h.send({type:"join",action:t.action,room:e,name:n,skin:"default",gameMode:s,world:t.world})}),h.socket.addEventListener("message",d=>{h.receive(d.data)&&!l&&(l=!0,window.clearTimeout(c),o(h))}),h.socket.addEventListener("error",()=>{const d=t.url===lh;u(d?"联机服务器暂时不可用或仍在启动，请稍后重试。":"无法连接联机服务器")}),h.socket.addEventListener("close",d=>{const p=h.disconnectReason||d.reason||(d.code===1e3?"已断开联机":"联机连接已断开");l?h.close(p):u(p)})})}get id(){return this._id}get room(){if(this._room===null)throw new Error("联机房间尚未就绪");return this._room}get isConnected(){return!this._closed&&this.socket.readyState===WebSocket.OPEN}get playerCount(){return this.players.size+(this._id?1:0)}get remotePlayers(){return[...this.players.values()]}get initialEdits(){return this._initialEdits}sendState(t){if(!this.isConnected)return;const e=performance.now();e-this.lastStateSent<bA||!Ee(t.x)||!Ee(t.y)||!Ee(t.z)||!Ee(t.yaw)||!Ee(t.pitch)||ml(t.dimension)===null||(this.lastStateSent=e,this.send({type:"state",player:t}))}sendBlock(t){!this.isConnected||hs(t)===null||this.send({type:"block",...t})}sendBlockBatch(t,e,n={}){if(!this.isConnected)return;const s=uh({kind:t,edits:e,...n});s&&this.send({type:"blocks",...s})}setBlockHandler(t){this.blockHandler=t,this.flushPendingBlockEvents()}setBlockBatchHandler(t){this.blockBatchHandler=t,this.flushPendingBlockEvents()}setWorldTimeHandler(t){this.worldTimeHandler=t,t&&this.pendingWorldTime!==null&&(t(this.pendingWorldTime),this.pendingWorldTime=null)}disconnect(t="已退出房间"){this.disconnectReason=t,this._closed||this.socket.close(1e3,t.slice(0,120)),this.close(t)}receive(t){var s,r,o,a,l;let e;try{e=JSON.parse(typeof t=="string"?t:String(t))}catch{return null}const n=LA(e);if(!n)return null;if(n.type==="error")return this._room===null?(this.disconnectReason=n.message,this.socket.close(1008,n.message.slice(0,120))):(s=this.onServerError)==null||s.call(this,n.message),null;if(n.type==="welcome"){this._id=n.id,this._room=n.room,this._initialEdits=n.edits,this.players.clear();for(const c of n.players)c.id!==this._id&&this.players.set(c.id,c);return(r=this.onPlayersChanged)==null||r.call(this),n}if(n.type==="player-join")n.player.id!==this._id&&this.players.set(n.player.id,n.player),(o=this.onPlayersChanged)==null||o.call(this);else if(n.type==="player-leave")this.players.delete(n.id),(a=this.onPlayersChanged)==null||a.call(this);else if(n.type==="state")n.id!==this._id&&this.players.set(n.id,n.player),(l=this.onPlayersChanged)==null||l.call(this);else if(n.type==="block"){const c=n.edit;this.pendingBlockEvents.push({type:"block",edit:c}),this.flushPendingBlockEvents()}else n.type==="blocks"?(this.pendingBlockEvents.push({type:"blocks",batch:n.batch}),this.flushPendingBlockEvents()):n.type==="time"&&(this.worldTimeHandler?this.worldTimeHandler(n.worldTime):this.pendingWorldTime=n.worldTime);return null}send(t){this.socket.readyState===WebSocket.OPEN&&this.socket.send(JSON.stringify(t))}flushPendingBlockEvents(){let t=0;for(const e of this.pendingBlockEvents){if(e.type==="block"){if(!this.blockHandler)break;this.blockHandler(e.edit)}else if(this.blockBatchHandler)this.blockBatchHandler(e.batch);else if(this.blockHandler)for(const n of e.batch.edits)this.blockHandler(n);else break;t++}t>0&&this.pendingBlockEvents.splice(0,t)}close(t){var e,n;this._closed||(this._closed=!0,this.players.size>0&&(this.players.clear(),(e=this.onPlayersChanged)==null||e.call(this)),(n=this.onDisconnect)==null||n.call(this,t))}}const mr=document.getElementById("app"),Lt=i=>document.getElementById(i),ui=h0();document.documentElement.classList.toggle("touch-device",ui);ui&&HT();const Jh=Lt("menubg");let We=null;const gr=Lt("menu"),tl=Lt("worldlist"),vr=Lt("multiplayer"),Rn=Lt("pause"),Oc=Lt("world-rows"),or=Lt("online-hud");let Ct=null,Sa=!1,Se=null,Hn=null,Xr="",ar=!1;const gl=Lt("boot"),IA=gl.querySelector(".boot-tip"),on=(i,t="加载中…")=>{gl.classList.toggle("hidden",!i),i&&(IA.textContent=t)};let I0=!1,dh=!1,U0=!1;const N0=i=>{I0||U0||(dh=!0,on(!0,`出错了：${i}（请把这行字发给开发）`))};window.addEventListener("error",i=>N0(i.message||String(i.error)));window.addEventListener("unhandledrejection",i=>N0(String(i.reason&&(i.reason.message||i.reason.stack)||i.reason)));try{We=new yA(Jh)}catch(i){console.error("[menubg] 初始化失败:",i),We=null}const el=["100% 纯方块!","无限的世界!","由 Three.js 驱动!","会挖会放会跳!","试试双击 W 疾跑~","支持 WebGL2!","像素手工打造!","水快会流动了!","也试试我的世界!"];Lt("splash").textContent=el[Math.floor(Math.random()*el.length)];const _p=gl.querySelector(".boot-splash");_p&&(_p.textContent=el[Math.floor(Math.random()*el.length)]);const ba=ui?["提示: 左侧滑动方向盘移动，空白处拖动视角","提示: 双击前进后按住可以疾跑","提示: 轻点空白处可互动或放置方块","提示: 长按空白处可挖方块或攻击","提示: 可以直接点快捷栏切换物品","提示: 石头要用镐才挖得动"]:["提示: 按住左键挖方块","提示: 双击 W 可以疾跑","提示: 右键放方块(会消耗物品)","提示: 数字键 1-9 / 滚轮 切换物品","提示: 石头要用镐才挖得动","提示: 砍树 → 木板 → 工作台 → 工具","提示: 熔炉能把铁矿炼成铁锭","提示: 天黑了小心怪物"],Bc=gl.querySelector(".boot-hint");if(Bc){let i=Math.floor(Math.random()*ba.length);Bc.textContent=ba[i],setInterval(()=>{i=(i+1)%ba.length,Bc.textContent=ba[i]},2600)}function cn(i){Lt("crosshair").style.display=i?"block":"none",Lt("hotbar").style.display=i?"flex":"none",Lt("held-item-name").style.display=i?"block":"none",Lt("status").style.display=i&&!((Ct==null?void 0:Ct.isCreativeMode())??!1)?"flex":"none",or.classList.toggle("hidden",!i||Se===null),Ct==null||Ct.setTouchActive(i&&ui)}function ds(i){for(const e of[gr,tl,vr,Rn])e.classList.add("hidden");Lt("newworld").classList.add("hidden"),i&&i.classList.remove("hidden"),cn(!1);const t=i===gr||i===tl||i===vr;Jh.style.display=t?"block":"none",t?We==null||We.start():We==null||We.stop()}const F0=i=>new Promise(t=>setTimeout(t,i));(async()=>{if(!dh){on(!0,"加载中…");try{if(We){const i=new AbortController;try{await Promise.race([We.preload(void 0,i.signal),F0(8e3)])}finally{i.abort()}}}catch(i){console.error("[menubg] preload 失败:",i)}dh||(U0=!0,ds(gr),on(!1))}})();const tu=new wA(Lt("settings"));tu.onChange=i=>{Ct==null||Ct.setTexturePack(i.texturePack),Ct==null||Ct.setLightingQuality(i.lightingQuality),Ct==null||Ct.setRenderDistance(i.renderDistance)};Lt("settings-btn").addEventListener("click",()=>tu.show());Lt("settings-btn-pause").addEventListener("click",()=>tu.show());Lt("play").addEventListener("click",()=>WA());const _r=Lt("mp-name"),os=Lt("mp-room"),xp=Lt("mp-status"),fh=Lt("mp-create"),ph=Lt("mp-join"),UA=Lt("mp-title"),NA=Lt("mp-intro"),FA=Lt("mp-mode-field"),O0=Lt("mp-back");let fo="join",us=null,B0="creative",zc=!1;function Qr(i,t=!1){xp.textContent=i,xp.classList.toggle("error",t)}function z0(i){B0=i,Lt("mp-current-mode").textContent=i==="creative"?"创造模式":"生存模式",Lt("mp-mode-desc").textContent=i==="creative"?"适合和朋友一起搭建；玩家与方块会实时同步。":"玩家与方块会实时同步；生物、掉落物和背包暂各自本地运行。"}function H0(){try{_r.value=localStorage.getItem("mineworld.multiplayer.name")??""}catch{}}function W0(i){fo=i;const t=i==="host";UA.textContent=t?"开启联机房间":"加入联机房间",NA.textContent=t?"当前单人世界会成为这个房间的世界。把房间号告诉朋友即可一起游玩。":"输入朋友给你的房间号，即可进入同一个世界。",FA.classList.toggle("hidden",!t),fh.classList.toggle("hidden",!t),ph.classList.toggle("hidden",t),O0.textContent=t?"返回暂停菜单":"返回"}function G0(){const i="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let t="MW";for(let e=0;e<5;e++)t+=i[Math.floor(Math.random()*i.length)];return t}function Ta(){if(!Se){or.classList.add("hidden");return}or.textContent=Xr||`联机 · 房间 ${Se.room.id.toUpperCase()}
${Se.playerCount} 名玩家`}function eu(){if(fo==="join"){ds(vr);return}for(const i of[gr,tl,Rn])i.classList.add("hidden");Lt("newworld").classList.add("hidden"),vr.classList.remove("hidden"),cn(!1),Jh.style.display="none",We==null||We.stop()}function OA(){W0("join"),us=null,H0(),os.value=Zh(new URLSearchParams(location.search).get("room")??os.value),z0("creative"),Qr("输入房间号后加入。"),eu(),_r.focus()}function BA(){!Ct||Se!==null||(us=Ct.snapshot(),W0("host"),H0(),os.value=G0(),z0(us.gameMode??"survival"),Qr("房间号已生成。开启后，把它告诉朋友。"),eu(),_r.focus())}function zA(){if(fo==="host"&&Ct&&Se===null){us=null,vr.classList.add("hidden"),Rn.classList.remove("hidden"),cn(!1);return}us=null,ds(gr)}function V0(i){if(Hn!==null&&(window.clearTimeout(Hn),Hn=null),Xr="",Se=i,Lt("save-quit").textContent=i?"退出房间":"保存并退出",Lt("open-room").classList.toggle("hidden",i!==null),!i){or.classList.add("hidden");return}i.onPlayersChanged=()=>Ta(),i.onServerError=t=>{Se===i&&(Xr=`联机操作未同步
${t}`,Ta(),Hn!==null&&window.clearTimeout(Hn),Hn=window.setTimeout(()=>{Hn=null,Xr="",Se===i&&Ta()},4e3))},i.onDisconnect=t=>{if(Se!==i)return;Hn!==null&&(window.clearTimeout(Hn),Hn=null),Xr="";const e=(Ct==null?void 0:Ct.isContainerOpen())??!1;e&&(Ct==null||Ct.prepareForSave());const n=fs();Ct==null||Ct.detachMultiplayer(i),Se=null,Lt("open-room").classList.toggle("hidden",!ar),Lt("save-quit").textContent=ar?"保存并退出":"退出房间",or.classList.remove("hidden"),or.textContent=ar?`联机已断开 · 本地世界${n?"已保存":"保存失败"}
${t}`:`联机已断开
${t}`,e&&Ct&&(Ct.setTouchActive(!1),cn(!1),Rn.classList.remove("hidden"))},Ta()}function HA(i){const t={};for(const n of i.initialEdits)t[rh(n.dimension,n.x,n.y,n.z)]=n.id;const e=i.room;return{id:`online:${e.id}:${e.seed}`,name:`联机 · ${e.id.toUpperCase()}`,seed:e.seed,gameMode:e.gameMode,lastPlayed:Date.now(),edits:t,worldTime:e.worldTime}}async function nu(i){if(zc)return;const t=i==="create"&&fo==="host"?us:null;if(i==="create"&&t===null){Qr("请先进入一个单人世界，再从暂停菜单开启房间。",!0);return}let e=Zh(os.value);if(i==="create"&&e.length<3&&(e=G0()),e.length<3){Qr("请输入至少 3 位的房间号。",!0),os.focus();return}const n=k0(_r.value);os.value=e,_r.value=n;try{localStorage.setItem("mineworld.multiplayer.name",n)}catch{}zc=!0,fh.disabled=!0,ph.disabled=!0,ds(null),on(!0,i==="create"?"正在创建联机房间…":"正在加入联机房间…");try{const s=await Qh.connect({url:kA(),action:i,room:e,name:n,gameMode:B0,world:t?PA(t):void 0});if(t){if(!Ct||!Ct.attachMultiplayer(s))throw s.disconnect("无法切换到联机房间"),new Error("当前世界已经不在单人状态，请返回后重试。");V0(s),us=null,vr.classList.add("hidden"),Rn.classList.add("hidden"),on(!1),cn(!0),ui||mr.requestPointerLock()}else ou(HA(s),s)}catch(s){on(!1),Qr(s instanceof Error?s.message:"连接联机服务器失败。",!0),eu()}finally{zc=!1,fh.disabled=!1,ph.disabled=!1}}Lt("multiplayer-play").addEventListener("click",()=>OA());Lt("open-room").addEventListener("click",()=>BA());Lt("mp-create").addEventListener("click",()=>void nu("create"));Lt("mp-join").addEventListener("click",()=>void nu("join"));O0.addEventListener("click",()=>zA());for(const i of[_r,os])i.addEventListener("keydown",t=>{t.key==="Enter"&&nu(fo==="host"?"create":"join")});Lt("fullscreen").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()});Lt("about").addEventListener("click",()=>Lt("about-panel").classList.remove("hidden"));Lt("about-close").addEventListener("click",()=>Lt("about-panel").classList.add("hidden"));function WA(){X0(),ds(tl)}function X0(){Oc.innerHTML="";const i=T2();if(i.length===0){const t=document.createElement("div");t.className="world-empty",t.textContent="还没有世界, 点 创建新世界 开始吧",Oc.appendChild(t);return}for(const t of i){const e=document.createElement("div");e.className="world-row";const n=document.createElement("span");n.className="wname",n.textContent=t.name;const s=document.createElement("span");s.className="wmeta",s.textContent=`种子 ${t.seed}${t.gameMode==="creative"?" · 创造":""}`;const r=document.createElement("span");r.className="wdel",r.textContent="删除",r.addEventListener("click",o=>{if(o.stopPropagation(),!R2(t.id)){s.textContent="删除失败：浏览器存储不可用";return}X0()}),e.append(n,s,r),e.addEventListener("click",()=>ou(t)),Oc.appendChild(e)}}const iu=Lt("newworld"),nl=Lt("nw-name"),su=Lt("nw-seed"),q0=Lt("nw-mode-desc");let $0="survival";function ru(i){$0=i,Lt("nw-survival").classList.toggle("active",i==="survival"),Lt("nw-creative").classList.toggle("active",i==="creative"),q0.textContent=i==="creative"?"无限方块、自由飞行（双击空格）、无敌不饿——专心建造。":"挖矿、合成、打怪，会饿会死。"}function Y0(){try{const i=A2(nl.value,E2(su.value)??void 0,$0);iu.classList.add("hidden"),ou(i)}catch(i){q0.textContent=i instanceof Error?i.message:"创建世界失败，请重试。"}}Lt("nw-survival").addEventListener("click",()=>ru("survival"));Lt("nw-creative").addEventListener("click",()=>ru("creative"));Lt("create-world").addEventListener("click",()=>{nl.value="",su.value="",ru("survival"),iu.classList.remove("hidden"),nl.focus()});Lt("nw-create").addEventListener("click",Y0);Lt("nw-cancel").addEventListener("click",()=>iu.classList.add("hidden"));for(const i of[nl,su])i.addEventListener("keydown",t=>{t.key==="Enter"&&Y0()});Lt("worldlist-back").addEventListener("click",()=>ds(gr));function ou(i,t=null){if(Ct||Sa){t==null||t.disconnect("游戏已经在运行");return}Sa=!0,ar=t===null,V0(t),ds(null),on(!0,"进入中…");try{We==null||We.dispose()}catch(e){console.error("[startGame] 菜单背景释放出错(忽略,继续):",e)}We=null,requestAnimationFrame(()=>requestAnimationFrame(async()=>{try{if(t&&!t.isConnected)throw new Error("联机在进入世界前已断开");on(!0,"进入中…①构建世界");const e=new xA(mr,i,t);Ct=e,on(!0,"进入中…②生成出生区块");const n=new AbortController;try{await Promise.race([e.preloadSpawn(3,n.signal),F0(12e3)])}finally{n.abort()}on(!0,"进入中…③启动渲染"),e.start(),Sa=!1,I0=!0,window.__mw=e,on(!1),ui?(cn(!0),e.setTouchActive(!0)):mr.requestPointerLock()}catch(e){Sa=!1,console.error("[startGame] 进入游戏失败:",e),Se===t&&(t==null||t.disconnect("进入世界失败"),Se=null);const n=e instanceof Error?`${e.stack??e.message}`:String(e);on(!0,`进入失败：${n}`)}}))}function fs(){return!Ct||!ar?!0:E0(Ct.snapshot())}Lt("resume").addEventListener("click",()=>{ui?(Rn.classList.add("hidden"),cn(!0),Ct==null||Ct.setTouchActive(!0)):mr.requestPointerLock()});Lt("save-quit").addEventListener("click",()=>{const i=(Se==null?void 0:Se.isConnected)===!0;if(ar&&(Ct==null||Ct.prepareForSave()),!fs()){on(!0,"保存失败：请释放浏览器网站存储空间后重试"),window.setTimeout(()=>on(!1),4e3);return}Se==null||Se.disconnect("玩家退出房间"),on(!0,i?"正在退出联机房间…":"保存并返回主菜单…"),location.reload()});const xr=Lt("death");document.addEventListener("pointerlockchange",()=>{if(ui)return;if(document.pointerLockElement===mr)Rn.classList.add("hidden"),xr.style.display="none",cn(!0);else if(Ct){if(fs(),Ct.isContainerOpen())return;cn(!1),Ct.isDead()?xr.style.display="flex":Rn.classList.remove("hidden")}});window.addEventListener("mineworld:touch-pause",()=>{!Ct||Ct.isDead()||(Ct.setTouchActive(!1),fs(),cn(!1),Rn.classList.remove("hidden"))});window.addEventListener("mineworld:death",()=>{cn(!1),Rn.classList.add("hidden"),xr.style.display="flex"});Lt("respawn").addEventListener("click",()=>{Ct&&(Ct.respawn(),xr.style.display="none",ui?cn(!0):mr.requestPointerLock())});setInterval(()=>{Ct!=null&&Ct.isGameplayActive()&&fs()},15e3);let mh=!1;function K0(){mh||(mh=!0,Ct==null||Ct.prepareForSave(),fs())}window.addEventListener("pagehide",K0);document.addEventListener("visibilitychange",()=>{document.visibilityState!=="hidden"||!Ct||(Ct.setTouchActive(!1),Ct.prepareForSave(),fs(),cn(!1),Ct.isDead()?xr.style.display="flex":Rn.classList.remove("hidden"))});window.addEventListener("pageshow",()=>{mh=!1,Ct&&(Ct.setTouchActive(!1),cn(!1),Ct.isDead()?xr.style.display="flex":Rn.classList.remove("hidden"))});window.addEventListener("beforeunload",()=>{K0(),Se==null||Se.disconnect("页面关闭")});
