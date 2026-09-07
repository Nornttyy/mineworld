var J0=Object.defineProperty;var tg=(i,t,e)=>t in i?J0(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var y=(i,t,e)=>(tg(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fh="165",eg=0,lu=1,ng=2,gp=1,vp=2,ti=3,Pi=0,ze=1,on=2,Ri=0,$s=1,Bc=2,cu=3,hu=4,ig=5,Zi=100,sg=101,rg=102,og=103,ag=104,lg=200,cg=201,hg=202,ug=203,zc=204,Hc=205,dg=206,fg=207,pg=208,mg=209,gg=210,vg=211,_g=212,xg=213,yg=214,Mg=0,wg=1,Sg=2,Ra=3,bg=4,Tg=5,Eg=6,Ag=7,_p=0,Rg=1,Cg=2,oi=0,Dg=1,Pg=2,Lg=3,kg=4,Ig=5,Ug=6,Ng=7,xp=300,sr=301,rr=302,Wc=303,Gc=304,Ja=306,_n=1e3,ts=1001,Vc=1002,de=1003,ph=1004,po=1005,Te=1006,_l=1007,ni=1008,hi=1009,Fg=1010,Og=1011,Ca=1012,yp=1013,Li=1014,bi=1015,Ii=1016,Mp=1017,wp=1018,or=1020,Bg=35902,zg=1021,Hg=1022,mn=1023,Wg=1024,Gg=1025,Ks=1026,ar=1027,Sp=1028,bp=1029,Vg=1030,Tp=1031,Ep=1033,xl=33776,yl=33777,Ml=33778,wl=33779,uu=35840,du=35841,fu=35842,pu=35843,mu=36196,gu=37492,vu=37496,_u=37808,xu=37809,yu=37810,Mu=37811,wu=37812,Su=37813,bu=37814,Tu=37815,Eu=37816,Au=37817,Ru=37818,Cu=37819,Du=37820,Pu=37821,Sl=36492,Lu=36494,ku=36495,Xg=36283,Iu=36284,Uu=36285,Nu=36286,qg=3200,Ap=3201,Rp=0,Yg=1,pn="",ae="srgb",Ui="srgb-linear",mh="display-p3",tl="display-p3-linear",Da="linear",ge="srgb",Pa="rec709",La="p3",fs=7680,Fu=519,$g=512,Kg=513,jg=514,Cp=515,Zg=516,Qg=517,Jg=518,tv=519,Xc=35044,Ou=35048,Bu="300 es",ii=2e3,ka=2001;class vr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zu=1234567;const js=Math.PI/180,jr=180/Math.PI;function ai(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function $e(i,t,e){return Math.max(t,Math.min(e,i))}function gh(i,t){return(i%t+t)%t}function ev(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function nv(i,t,e){return i!==t?(e-i)/(t-i):0}function Vr(i,t,e){return(1-e)*i+e*t}function iv(i,t,e,n){return Vr(i,t,1-Math.exp(-e*n))}function sv(i,t=1){return t-Math.abs(gh(i,t*2)-t)}function rv(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ov(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function av(i,t){return i+Math.floor(Math.random()*(t-i+1))}function lv(i,t){return i+Math.random()*(t-i)}function cv(i){return i*(.5-Math.random())}function hv(i){i!==void 0&&(zu=i);let t=zu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function uv(i){return i*js}function dv(i){return i*jr}function fv(i){return(i&i-1)===0&&i!==0}function pv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function mv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gv(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const si={DEG2RAD:js,RAD2DEG:jr,generateUUID:ai,clamp:$e,euclideanModulo:gh,mapLinear:ev,inverseLerp:nv,lerp:Vr,damp:iv,pingpong:sv,smoothstep:rv,smootherstep:ov,randInt:av,randFloat:lv,randFloatSpread:cv,seededRandom:hv,degToRad:uv,radToDeg:dv,isPowerOfTwo:fv,ceilPowerOfTwo:pv,floorPowerOfTwo:mv,setQuaternionFromProperEuler:gv,normalize:re,denormalize:Un};class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,s,r,o,a,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],v=s[0],m=s[3],f=s[6],x=s[1],_=s[4],M=s[7],A=s[2],E=s[5],C=s[8];return r[0]=o*v+a*x+l*A,r[3]=o*m+a*_+l*E,r[6]=o*f+a*M+l*C,r[1]=c*v+h*x+u*A,r[4]=c*m+h*_+u*E,r[7]=c*f+h*M+u*C,r[2]=d*v+p*x+g*A,r[5]=d*m+p*_+g*E,r[8]=d*f+p*M+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(bl.makeScale(t,e)),this}rotate(t){return this.premultiply(bl.makeRotation(-t)),this}translate(t,e){return this.premultiply(bl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const bl=new $t;function Dp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vv(){const i=Zr("canvas");return i.style.display="block",i}const Hu={};function vh(i){i in Hu||(Hu[i]=!0,console.warn(i))}function _v(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Wu=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gu=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mo={[Ui]:{transfer:Da,primaries:Pa,toReference:i=>i,fromReference:i=>i},[ae]:{transfer:ge,primaries:Pa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[tl]:{transfer:Da,primaries:La,toReference:i=>i.applyMatrix3(Gu),fromReference:i=>i.applyMatrix3(Wu)},[mh]:{transfer:ge,primaries:La,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Gu),fromReference:i=>i.applyMatrix3(Wu).convertLinearToSRGB()}},xv=new Set([Ui,tl]),oe={enabled:!0,_workingColorSpace:Ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!xv.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=mo[t].toReference,s=mo[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return mo[i].primaries},getTransfer:function(i){return i===pn?Da:mo[i].transfer}};function Zs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Tl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ps;class yv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ps===void 0&&(ps=Zr("canvas")),ps.width=t.width,ps.height=t.height;const n=ps.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ps}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zs(e[n]/255)*255):e[n]=Zs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mv=0;class Pp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(El(s[o].image)):r.push(El(s[o]))}else r=El(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function El(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wv=0;class Ge extends vr{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=ts,s=ts,r=Te,o=ni,a=mn,l=hi,c=Ge.DEFAULT_ANISOTROPY,h=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=ai(),this.name="",this.source=new Pp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _n:t.x=t.x-Math.floor(t.x);break;case ts:t.x=t.x<0?0:1;break;case Vc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _n:t.y=t.y-Math.floor(t.y);break;case ts:t.y=t.y<0?0:1;break;case Vc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=xp;Ge.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,M=(p+1)/2,A=(f+1)/2,E=(h+d)/4,C=(u+v)/4,I=(g+m)/4;return _>M&&_>A?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=C/n):M>A?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=I/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=C/r,s=I/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sv extends vr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Te,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ge(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Pp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends Sv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Lp extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=de,this.minFilter=de,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kp extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=de,this.minFilter=de,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*v,x=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const A=Math.sqrt(_),E=Math.atan2(A,f*x);m=Math.sin(m*E)/A,a=Math.sin(a*E)/A}const M=a*x;if(l=l*m+d*M,c=c*m+p*M,h=h*m+g*M,u=u*m+v*M,m===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Al.copy(this).projectOnVector(t),this.sub(Al)}reflect(t){return this.sub(Al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Al=new U,Vu=new Ni;class so{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),go.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(t.matrixWorld),this.union(go)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wr),vo.subVectors(this.max,wr),ms.subVectors(t.a,wr),gs.subVectors(t.b,wr),vs.subVectors(t.c,wr),fi.subVectors(gs,ms),pi.subVectors(vs,gs),Hi.subVectors(ms,vs);let e=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Hi.z,Hi.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Hi.z,0,-Hi.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Hi.y,Hi.x,0];return!Rl(e,ms,gs,vs,vo)||(e=[1,0,0,0,1,0,0,0,1],!Rl(e,ms,gs,vs,vo))?!1:(_o.crossVectors(fi,pi),e=[_o.x,_o.y,_o.z],Rl(e,ms,gs,vs,vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Xn=[new U,new U,new U,new U,new U,new U,new U,new U],Rn=new U,go=new so,ms=new U,gs=new U,vs=new U,fi=new U,pi=new U,Hi=new U,wr=new U,vo=new U,_o=new U,Wi=new U;function Rl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Wi.fromArray(i,r);const a=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=t.dot(Wi),c=e.dot(Wi),h=n.dot(Wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const bv=new so,Sr=new U,Cl=new U;class ro{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):bv.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);const e=Sr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(Cl)),this.expandByPoint(Sr.copy(t.center).sub(Cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new U,Dl=new U,xo=new U,mi=new U,Pl=new U,yo=new U,Ll=new U;class _h{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Dl.copy(t).add(e).multiplyScalar(.5),xo.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(Dl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(xo),a=mi.dot(this.direction),l=-mi.dot(xo),c=mi.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Dl).addScaledVector(xo,d),p}intersectSphere(t,e){qn.subVectors(t.center,this.origin);const n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,s,r){Pl.subVectors(e,t),yo.subVectors(n,t),Ll.crossVectors(Pl,yo);let o=this.direction.dot(Ll),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,t);const l=a*this.direction.dot(yo.crossVectors(mi,yo));if(l<0)return null;const c=a*this.direction.dot(Pl.cross(mi));if(c<0||l+c>o)return null;const h=-a*mi.dot(Ll);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,g,v,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,v,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/_s.setFromMatrixColumn(t,0).length(),r=1/_s.setFromMatrixColumn(t,1).length(),o=1/_s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d+v*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tv,t,Ev)}lookAt(t,e,n){const s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),gi.crossVectors(n,hn),gi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),gi.crossVectors(n,hn)),gi.normalize(),Mo.crossVectors(hn,gi),s[0]=gi.x,s[4]=Mo.x,s[8]=hn.x,s[1]=gi.y,s[5]=Mo.y,s[9]=hn.y,s[2]=gi.z,s[6]=Mo.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],x=n[3],_=n[7],M=n[11],A=n[15],E=s[0],C=s[4],I=s[8],b=s[12],S=s[1],P=s[5],X=s[9],V=s[13],tt=s[2],nt=s[6],Z=s[10],st=s[14],$=s[3],xt=s[7],Tt=s[11],gt=s[15];return r[0]=o*E+a*S+l*tt+c*$,r[4]=o*C+a*P+l*nt+c*xt,r[8]=o*I+a*X+l*Z+c*Tt,r[12]=o*b+a*V+l*st+c*gt,r[1]=h*E+u*S+d*tt+p*$,r[5]=h*C+u*P+d*nt+p*xt,r[9]=h*I+u*X+d*Z+p*Tt,r[13]=h*b+u*V+d*st+p*gt,r[2]=g*E+v*S+m*tt+f*$,r[6]=g*C+v*P+m*nt+f*xt,r[10]=g*I+v*X+m*Z+f*Tt,r[14]=g*b+v*V+m*st+f*gt,r[3]=x*E+_*S+M*tt+A*$,r[7]=x*C+_*P+M*nt+A*xt,r[11]=x*I+_*X+M*Z+A*Tt,r[15]=x*b+_*V+M*st+A*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+v*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],x=u*m*c-v*d*c+v*l*p-a*m*p-u*l*f+a*d*f,_=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,M=h*v*c-g*u*c+g*a*p-o*v*p-h*a*f+o*u*f,A=g*u*l-h*v*l-g*a*d+o*v*d+h*a*m-o*u*m,E=e*x+n*_+s*M+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=x*C,t[1]=(v*d*r-u*m*r-v*s*p+n*m*p+u*s*f-n*d*f)*C,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*f+n*l*f)*C,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*C,t[4]=_*C,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*C,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*C,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*C,t[8]=M*C,t[9]=(g*u*r-h*v*r-g*n*p+e*v*p+h*n*f-e*u*f)*C,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*f+e*a*f)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*C,t[12]=A*C,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*C,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*m-e*a*m)*C,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,v=o*h,m=o*u,f=a*u,x=l*c,_=l*h,M=l*u,A=n.x,E=n.y,C=n.z;return s[0]=(1-(v+f))*A,s[1]=(p+M)*A,s[2]=(g-_)*A,s[3]=0,s[4]=(p-M)*E,s[5]=(1-(d+f))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+_)*C,s[9]=(m-x)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=_s.set(s[0],s[1],s[2]).length();const o=_s.set(s[4],s[5],s[6]).length(),a=_s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);const c=1/r,h=1/o,u=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,e.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ii){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(a===ii)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ka)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ii){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,p=(n+s)*h;let g,v;if(a===ii)g=(o+r)*u,v=-2*u;else if(a===ka)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const _s=new U,Cn=new fe,Tv=new U(0,0,0),Ev=new U(1,1,1),gi=new U,Mo=new U,hn=new U,Xu=new fe,qu=new Ni;class Wn{constructor(t=0,e=0,n=0,s=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qu.setFromEuler(this),this.setFromQuaternion(qu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Ip{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Av=0;const Yu=new U,xs=new Ni,Yn=new fe,wo=new U,br=new U,Rv=new U,Cv=new Ni,$u=new U(1,0,0),Ku=new U(0,1,0),ju=new U(0,0,1),Zu={type:"added"},Dv={type:"removed"},ys={type:"childadded",child:null},kl={type:"childremoved",child:null};class Pe extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new U,e=new Wn,n=new Ni,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new $t}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis($u,t)}rotateY(t){return this.rotateOnAxis(Ku,t)}rotateZ(t){return this.rotateOnAxis(ju,t)}translateOnAxis(t,e){return Yu.copy(t).applyQuaternion(this.quaternion),this.position.add(Yu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($u,t)}translateY(t){return this.translateOnAxis(Ku,t)}translateZ(t){return this.translateOnAxis(ju,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wo.copy(t):wo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(br,wo,this.up):Yn.lookAt(wo,br,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(Yn),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zu),ys.child=t,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dv),kl.child=t,this.dispatchEvent(kl),kl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zu),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,t,Rv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,Cv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new U(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new U,$n=new U,Il=new U,Kn=new U,Ms=new U,ws=new U,Qu=new U,Ul=new U,Nl=new U,Fl=new U;class En{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Dn.subVectors(t,e),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Dn.subVectors(s,e),$n.subVectors(n,e),Il.subVectors(t,e);const o=Dn.dot(Dn),a=Dn.dot($n),l=Dn.dot(Il),c=$n.dot($n),h=$n.dot(Il),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static isFrontFacing(t,e,n,s){return Dn.subVectors(n,e),$n.subVectors(t,e),Dn.cross($n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Dn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return En.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ms.subVectors(s,n),ws.subVectors(r,n),Ul.subVectors(t,n);const l=Ms.dot(Ul),c=ws.dot(Ul);if(l<=0&&c<=0)return e.copy(n);Nl.subVectors(t,s);const h=Ms.dot(Nl),u=ws.dot(Nl);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ms,o);Fl.subVectors(t,r);const p=Ms.dot(Fl),g=ws.dot(Fl);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ws,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Qu.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Qu,a);const f=1/(m+v+d);return o=v*f,a=d*f,e.copy(n).addScaledVector(Ms,o).addScaledVector(ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},So={h:0,s:0,l:0};function Ol(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=gh(t,1),e=$e(e,0,1),n=$e(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ol(o,r,t+1/3),this.g=Ol(o,r,t),this.b=Ol(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ae){const n=Up[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}copyLinearToSRGB(t){return this.r=Tl(t.r),this.g=Tl(t.g),this.b=Tl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ae){return oe.fromWorkingColorSpace(Ye.copy(this),t),Math.round($e(Ye.r*255,0,255))*65536+Math.round($e(Ye.g*255,0,255))*256+Math.round($e(Ye.b*255,0,255))}getHexString(t=ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ye.copy(this),e);const n=Ye.r,s=Ye.g,r=Ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=ae){oe.fromWorkingColorSpace(Ye.copy(this),t);const e=Ye.r,n=Ye.g,s=Ye.b;return t!==ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(So);const n=Vr(vi.h,So.h,e),s=Vr(vi.s,So.s,e),r=Vr(vi.l,So.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new bt;bt.NAMES=Up;let Pv=0;class Fi extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=$s,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Hc,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zc&&(n.blendSrc=this.blendSrc),this.blendDst!==Hc&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ra&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class we extends Fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=_p,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new U,bo=new Ft;class ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return vh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bo.fromBufferAttribute(this,e),bo.applyMatrix3(t),this.setXY(e,bo.x,bo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Un(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Un(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Un(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xc&&(t.usage=this.usage),t}}class Np extends ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Fp extends ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ke extends ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Lv=0;const yn=new fe,Bl=new Pe,Ss=new U,un=new so,Tr=new so,Be=new U;class Ve extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dp(t)?Fp:Np)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return Bl.lookAt(t),Bl.updateMatrix(),this.applyMatrix4(Bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ke(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new so);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ro);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(un.min,Tr.min),un.expandByPoint(Be),Be.addVectors(un.max,Tr.max),un.expandByPoint(Be)):(un.expandByPoint(Tr.min),un.expandByPoint(Tr.max))}un.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Be.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(t,c),Be.add(Ss)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new U,l[I]=new U;const c=new U,h=new U,u=new U,d=new Ft,p=new Ft,g=new Ft,v=new U,m=new U;function f(I,b,S){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[I].add(v),a[b].add(v),a[S].add(v),l[I].add(m),l[b].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,b=x.length;I<b;++I){const S=x[I],P=S.start,X=S.count;for(let V=P,tt=P+X;V<tt;V+=3)f(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const _=new U,M=new U,A=new U,E=new U;function C(I){A.fromBufferAttribute(s,I),E.copy(A);const b=a[I];_.copy(b),_.sub(A.multiplyScalar(A.dot(b))).normalize(),M.crossVectors(E,b);const P=M.dot(l[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,P)}for(let I=0,b=x.length;I<b;++I){const S=x[I],P=S.start,X=S.count;for(let V=P,tt=P+X;V<tt;V+=3)C(t.getX(V+0)),C(t.getX(V+1)),C(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new ue(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ju=new fe,Gi=new _h,To=new ro,td=new U,bs=new U,Ts=new U,Es=new U,zl=new U,Eo=new U,Ao=new Ft,Ro=new Ft,Co=new Ft,ed=new U,nd=new U,id=new U,Do=new U,Po=new U;class Jt extends Pe{constructor(t=new Ve,e=new we){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Eo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(zl.fromBufferAttribute(u,t),o?Eo.addScaledVector(zl,h):Eo.addScaledVector(zl.sub(e),h))}e.add(Eo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(r),Gi.copy(t.ray).recast(t.near),!(To.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(To,td)===null||Gi.origin.distanceToSquared(td)>(t.far-t.near)**2))&&(Ju.copy(r).invert(),Gi.copy(t.ray).applyMatrix4(Ju),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=x,A=_;M<A;M+=3){const E=a.getX(M),C=a.getX(M+1),I=a.getX(M+2);s=Lo(this,f,t,n,c,h,u,E,C,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const x=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);s=Lo(this,o,t,n,c,h,u,x,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=x,A=_;M<A;M+=3){const E=M,C=M+1,I=M+2;s=Lo(this,f,t,n,c,h,u,E,C,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const x=m,_=m+1,M=m+2;s=Lo(this,o,t,n,c,h,u,x,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function kv(i,t,e,n,s,r,o,a){let l;if(t.side===ze?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Pi,a),l===null)return null;Po.copy(a),Po.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Po);return c<e.near||c>e.far?null:{distance:c,point:Po.clone(),object:i}}function Lo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,bs),i.getVertexPosition(l,Ts),i.getVertexPosition(c,Es);const h=kv(i,t,e,n,bs,Ts,Es,Do);if(h){s&&(Ao.fromBufferAttribute(s,a),Ro.fromBufferAttribute(s,l),Co.fromBufferAttribute(s,c),h.uv=En.getInterpolation(Do,bs,Ts,Es,Ao,Ro,Co,new Ft)),r&&(Ao.fromBufferAttribute(r,a),Ro.fromBufferAttribute(r,l),Co.fromBufferAttribute(r,c),h.uv1=En.getInterpolation(Do,bs,Ts,Es,Ao,Ro,Co,new Ft)),o&&(ed.fromBufferAttribute(o,a),nd.fromBufferAttribute(o,l),id.fromBufferAttribute(o,c),h.normal=En.getInterpolation(Do,bs,Ts,Es,ed,nd,id,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new U,materialIndex:0};En.getNormal(bs,Ts,Es,u.normal),h.face=u}return h}class Ze extends Ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(u,2));function g(v,m,f,x,_,M,A,E,C,I,b){const S=M/C,P=A/I,X=M/2,V=A/2,tt=E/2,nt=C+1,Z=I+1;let st=0,$=0;const xt=new U;for(let Tt=0;Tt<Z;Tt++){const gt=Tt*P-V;for(let qt=0;qt<nt;qt++){const Zt=qt*S-X;xt[v]=Zt*x,xt[m]=gt*_,xt[f]=tt,c.push(xt.x,xt.y,xt.z),xt[v]=0,xt[m]=0,xt[f]=E>0?1:-1,h.push(xt.x,xt.y,xt.z),u.push(qt/C),u.push(1-Tt/I),st+=1}}for(let Tt=0;Tt<I;Tt++)for(let gt=0;gt<C;gt++){const qt=d+gt+nt*Tt,Zt=d+gt+nt*(Tt+1),K=d+(gt+1)+nt*(Tt+1),L=d+(gt+1)+nt*Tt;l.push(qt,Zt,L),l.push(Zt,K,L),$+=6}a.addGroup(p,$,b),p+=$,d+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function lr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function tn(i){const t={};for(let e=0;e<i.length;e++){const n=lr(i[e]);for(const s in n)t[s]=n[s]}return t}function Iv(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Op(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const Uv={clone:lr,merge:tn};var Nv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class je extends Fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nv,this.fragmentShader=Fv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lr(t.uniforms),this.uniformsGroups=Iv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Bp extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new U,sd=new Ft,rd=new Ft;class Ke extends Bp{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=jr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,sd,rd),e.subVectors(rd,sd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const As=-90,Rs=1;class Ov extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ke(As,Rs,t,e);s.layers=this.layers,this.add(s);const r=new Ke(As,Rs,t,e);r.layers=this.layers,this.add(r);const o=new Ke(As,Rs,t,e);o.layers=this.layers,this.add(o);const a=new Ke(As,Rs,t,e);a.layers=this.layers,this.add(a);const l=new Ke(As,Rs,t,e);l.layers=this.layers,this.add(l);const c=new Ke(As,Rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zp extends Ge{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:sr,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Bv extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new zp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Te}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ze(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Ri});r.uniforms.tEquirect.value=e;const o=new Jt(s,r),a=e.minFilter;return e.minFilter===ni&&(e.minFilter=Te),new Ov(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Hl=new U,zv=new U,Hv=new $t;class kn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Hl.subVectors(n,e).cross(zv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Hl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hv.getNormalMatrix(t),s=this.coplanarPoint(Hl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new ro,ko=new U;class xh{constructor(t=new kn,e=new kn,n=new kn,s=new kn,r=new kn,o=new kn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],x=s[13],_=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,m-p,M-f).normalize(),n[1].setComponents(l+r,d+c,m+p,M+f).normalize(),n[2].setComponents(l+o,d+h,m+g,M+x).normalize(),n[3].setComponents(l-o,d-h,m-g,M-x).normalize(),n[4].setComponents(l-a,d-u,m-v,M-_).normalize(),e===ii)n[5].setComponents(l+a,d+u,m+v,M+_).normalize();else if(e===ka)n[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(t){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ko.x=s.normal.x>0?t.max.x:t.min.x,ko.y=s.normal.y>0?t.max.y:t.min.y,ko.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ko)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hp(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wv(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,a),u.count===-1&&d.length===0&&i.bufferSubData(c,0,h),d.length!==0){for(let p=0,g=d.length;p<g;p++){const v=d[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class an extends Ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const x=f*d-o;for(let _=0;_<c;_++){const M=_*u-r;g.push(M,-x,0),v.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const _=x+c*f,M=x+c*(f+1),A=x+1+c*(f+1),E=x+1+c*f;p.push(_,M,E),p.push(M,A,E)}this.setIndex(p),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(v,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.width,t.height,t.widthSegments,t.heightSegments)}}var Gv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vv=`#ifdef USE_ALPHAHASH
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
#endif`,Xv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$v=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kv=`#ifdef USE_AOMAP
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
#endif`,jv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zv=`#ifdef USE_BATCHING
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
#endif`,Qv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Jv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n_=`#ifdef USE_IRIDESCENCE
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
#endif`,i_=`#ifdef USE_BUMPMAP
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
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,d_=`#define PI 3.141592653589793
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
} // validated`,f_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p_=`vec3 transformedNormal = objectNormal;
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
#endif`,m_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,__=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x_="gl_FragColor = linearToOutputTexel( gl_FragColor );",y_=`
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
}`,M_=`#ifdef USE_ENVMAP
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
#endif`,w_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,S_=`#ifdef USE_ENVMAP
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
#endif`,b_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T_=`#ifdef USE_ENVMAP
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
#endif`,E_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C_=`#ifdef USE_FOG
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
}`,P_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I_=`uniform bool receiveShadow;
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
#endif`,U_=`#ifdef USE_ENVMAP
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
#endif`,N_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z_=`PhysicalMaterial material;
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
#endif`,H_=`struct PhysicalMaterial {
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
}`,W_=`
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
#endif`,G_=`#if defined( RE_IndirectDiffuse )
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
#endif`,V_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Q_=`#if defined( USE_POINTS_UV )
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
#endif`,J_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ix=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sx=`#ifdef USE_MORPHTARGETS
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
#endif`,rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ax=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ux=`#ifdef USE_NORMALMAP
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
#endif`,dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,px=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ax=`float getShadowMask() {
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
}`,Rx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cx=`#ifdef USE_SKINNING
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
#endif`,Px=`#ifdef USE_SKINNING
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
#endif`,Lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ux=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nx=`#ifdef USE_TRANSMISSION
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
#endif`,Fx=`#ifdef USE_TRANSMISSION
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gx=`uniform sampler2D t2D;
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
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qx=`varying vec3 vWorldDirection;
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
}`,$x=`#include <common>
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
}`,Kx=`#if DEPTH_PACKING == 3200
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
}`,jx=`#define DISTANCE
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
}`,Zx=`#define DISTANCE
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
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ty=`uniform float scale;
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
}`,ey=`uniform vec3 diffuse;
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
}`,ny=`#include <common>
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
}`,iy=`uniform vec3 diffuse;
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
}`,sy=`#define LAMBERT
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
}`,ry=`#define LAMBERT
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
}`,oy=`#define MATCAP
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
}`,ay=`#define MATCAP
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
}`,ly=`#define NORMAL
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
}`,cy=`#define NORMAL
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
}`,hy=`#define PHONG
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
}`,uy=`#define PHONG
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
}`,dy=`#define STANDARD
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
}`,fy=`#define STANDARD
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
}`,py=`#define TOON
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
}`,my=`#define TOON
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
}`,gy=`uniform float size;
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
}`,vy=`uniform vec3 diffuse;
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
}`,_y=`#include <common>
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
}`,xy=`uniform vec3 color;
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
}`,yy=`uniform float rotation;
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
}`,My=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Gv,alphahash_pars_fragment:Vv,alphamap_fragment:Xv,alphamap_pars_fragment:qv,alphatest_fragment:Yv,alphatest_pars_fragment:$v,aomap_fragment:Kv,aomap_pars_fragment:jv,batching_pars_vertex:Zv,batching_vertex:Qv,begin_vertex:Jv,beginnormal_vertex:t_,bsdfs:e_,iridescence_fragment:n_,bumpmap_pars_fragment:i_,clipping_planes_fragment:s_,clipping_planes_pars_fragment:r_,clipping_planes_pars_vertex:o_,clipping_planes_vertex:a_,color_fragment:l_,color_pars_fragment:c_,color_pars_vertex:h_,color_vertex:u_,common:d_,cube_uv_reflection_fragment:f_,defaultnormal_vertex:p_,displacementmap_pars_vertex:m_,displacementmap_vertex:g_,emissivemap_fragment:v_,emissivemap_pars_fragment:__,colorspace_fragment:x_,colorspace_pars_fragment:y_,envmap_fragment:M_,envmap_common_pars_fragment:w_,envmap_pars_fragment:S_,envmap_pars_vertex:b_,envmap_physical_pars_fragment:U_,envmap_vertex:T_,fog_vertex:E_,fog_pars_vertex:A_,fog_fragment:R_,fog_pars_fragment:C_,gradientmap_pars_fragment:D_,lightmap_pars_fragment:P_,lights_lambert_fragment:L_,lights_lambert_pars_fragment:k_,lights_pars_begin:I_,lights_toon_fragment:N_,lights_toon_pars_fragment:F_,lights_phong_fragment:O_,lights_phong_pars_fragment:B_,lights_physical_fragment:z_,lights_physical_pars_fragment:H_,lights_fragment_begin:W_,lights_fragment_maps:G_,lights_fragment_end:V_,logdepthbuf_fragment:X_,logdepthbuf_pars_fragment:q_,logdepthbuf_pars_vertex:Y_,logdepthbuf_vertex:$_,map_fragment:K_,map_pars_fragment:j_,map_particle_fragment:Z_,map_particle_pars_fragment:Q_,metalnessmap_fragment:J_,metalnessmap_pars_fragment:tx,morphinstance_vertex:ex,morphcolor_vertex:nx,morphnormal_vertex:ix,morphtarget_pars_vertex:sx,morphtarget_vertex:rx,normal_fragment_begin:ox,normal_fragment_maps:ax,normal_pars_fragment:lx,normal_pars_vertex:cx,normal_vertex:hx,normalmap_pars_fragment:ux,clearcoat_normal_fragment_begin:dx,clearcoat_normal_fragment_maps:fx,clearcoat_pars_fragment:px,iridescence_pars_fragment:mx,opaque_fragment:gx,packing:vx,premultiplied_alpha_fragment:_x,project_vertex:xx,dithering_fragment:yx,dithering_pars_fragment:Mx,roughnessmap_fragment:wx,roughnessmap_pars_fragment:Sx,shadowmap_pars_fragment:bx,shadowmap_pars_vertex:Tx,shadowmap_vertex:Ex,shadowmask_pars_fragment:Ax,skinbase_vertex:Rx,skinning_pars_vertex:Cx,skinning_vertex:Dx,skinnormal_vertex:Px,specularmap_fragment:Lx,specularmap_pars_fragment:kx,tonemapping_fragment:Ix,tonemapping_pars_fragment:Ux,transmission_fragment:Nx,transmission_pars_fragment:Fx,uv_pars_fragment:Ox,uv_pars_vertex:Bx,uv_vertex:zx,worldpos_vertex:Hx,background_vert:Wx,background_frag:Gx,backgroundCube_vert:Vx,backgroundCube_frag:Xx,cube_vert:qx,cube_frag:Yx,depth_vert:$x,depth_frag:Kx,distanceRGBA_vert:jx,distanceRGBA_frag:Zx,equirect_vert:Qx,equirect_frag:Jx,linedashed_vert:ty,linedashed_frag:ey,meshbasic_vert:ny,meshbasic_frag:iy,meshlambert_vert:sy,meshlambert_frag:ry,meshmatcap_vert:oy,meshmatcap_frag:ay,meshnormal_vert:ly,meshnormal_frag:cy,meshphong_vert:hy,meshphong_frag:uy,meshphysical_vert:dy,meshphysical_frag:fy,meshtoon_vert:py,meshtoon_frag:my,points_vert:gy,points_frag:vy,shadow_vert:_y,shadow_frag:xy,sprite_vert:yy,sprite_frag:My},dt={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Hn={basic:{uniforms:tn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:tn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new bt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:tn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:tn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:tn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new bt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:tn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:tn([dt.points,dt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:tn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:tn([dt.common,dt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:tn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:tn([dt.sprite,dt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:tn([dt.common,dt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:tn([dt.lights,dt.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Hn.physical={uniforms:tn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Io={r:0,b:0,g:0},Xi=new Wn,wy=new fe;function Sy(i,t,e,n,s,r,o){const a=new bt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1;const M=g(x);M===null?f(a,l):M&&M.isColor&&(f(M,1),_=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,_){const M=g(_);M&&(M.isCubeTexture||M.mapping===Ja)?(h===void 0&&(h=new Jt(new Ze(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:lr(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Xi.copy(_.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wy.makeRotationFromEuler(Xi)),h.material.toneMapped=oe.getTransfer(M.colorSpace)!==ge,(u!==M||d!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,p=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Jt(new an(2,2),new je({name:"BackgroundMaterial",uniforms:lr(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=oe.getTransfer(M.colorSpace)!==ge,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,p=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,_){x.getRGB(Io,Op(i)),n.buffers.color.setClear(Io.r,Io.g,Io.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(a,l)},render:v,addToRenderList:m}}function by(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(S,P,X,V,tt){let nt=!1;const Z=u(V,X,P);r!==Z&&(r=Z,c(r.object)),nt=p(S,V,X,tt),nt&&g(S,V,X,tt),tt!==null&&t.update(tt,i.ELEMENT_ARRAY_BUFFER),(nt||o)&&(o=!1,M(S,P,X,V),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,P,X){const V=X.wireframe===!0;let tt=n[S.id];tt===void 0&&(tt={},n[S.id]=tt);let nt=tt[P.id];nt===void 0&&(nt={},tt[P.id]=nt);let Z=nt[V];return Z===void 0&&(Z=d(l()),nt[V]=Z),Z}function d(S){const P=[],X=[],V=[];for(let tt=0;tt<e;tt++)P[tt]=0,X[tt]=0,V[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:X,attributeDivisors:V,object:S,attributes:{},index:null}}function p(S,P,X,V){const tt=r.attributes,nt=P.attributes;let Z=0;const st=X.getAttributes();for(const $ in st)if(st[$].location>=0){const Tt=tt[$];let gt=nt[$];if(gt===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor)),Tt===void 0||Tt.attribute!==gt||gt&&Tt.data!==gt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==V}function g(S,P,X,V){const tt={},nt=P.attributes;let Z=0;const st=X.getAttributes();for(const $ in st)if(st[$].location>=0){let Tt=nt[$];Tt===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Tt=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Tt=S.instanceColor));const gt={};gt.attribute=Tt,Tt&&Tt.data&&(gt.data=Tt.data),tt[$]=gt,Z++}r.attributes=tt,r.attributesNum=Z,r.index=V}function v(){const S=r.newAttributes;for(let P=0,X=S.length;P<X;P++)S[P]=0}function m(S){f(S,0)}function f(S,P){const X=r.newAttributes,V=r.enabledAttributes,tt=r.attributeDivisors;X[S]=1,V[S]===0&&(i.enableVertexAttribArray(S),V[S]=1),tt[S]!==P&&(i.vertexAttribDivisor(S,P),tt[S]=P)}function x(){const S=r.newAttributes,P=r.enabledAttributes;for(let X=0,V=P.length;X<V;X++)P[X]!==S[X]&&(i.disableVertexAttribArray(X),P[X]=0)}function _(S,P,X,V,tt,nt,Z){Z===!0?i.vertexAttribIPointer(S,P,X,tt,nt):i.vertexAttribPointer(S,P,X,V,tt,nt)}function M(S,P,X,V){v();const tt=V.attributes,nt=X.getAttributes(),Z=P.defaultAttributeValues;for(const st in nt){const $=nt[st];if($.location>=0){let xt=tt[st];if(xt===void 0&&(st==="instanceMatrix"&&S.instanceMatrix&&(xt=S.instanceMatrix),st==="instanceColor"&&S.instanceColor&&(xt=S.instanceColor)),xt!==void 0){const Tt=xt.normalized,gt=xt.itemSize,qt=t.get(xt);if(qt===void 0)continue;const Zt=qt.buffer,K=qt.type,L=qt.bytesPerElement,O=K===i.INT||K===i.UNSIGNED_INT||xt.gpuType===yp;if(xt.isInterleavedBufferAttribute){const N=xt.data,j=N.stride,q=xt.offset;if(N.isInstancedInterleavedBuffer){for(let H=0;H<$.locationSize;H++)f($.location+H,N.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let H=0;H<$.locationSize;H++)m($.location+H);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let H=0;H<$.locationSize;H++)_($.location+H,gt/$.locationSize,K,Tt,j*L,(q+gt/$.locationSize*H)*L,O)}else{if(xt.isInstancedBufferAttribute){for(let N=0;N<$.locationSize;N++)f($.location+N,xt.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let N=0;N<$.locationSize;N++)m($.location+N);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let N=0;N<$.locationSize;N++)_($.location+N,gt/$.locationSize,K,Tt,gt*L,gt/$.locationSize*N*L,O)}}else if(Z!==void 0){const Tt=Z[st];if(Tt!==void 0)switch(Tt.length){case 2:i.vertexAttrib2fv($.location,Tt);break;case 3:i.vertexAttrib3fv($.location,Tt);break;case 4:i.vertexAttrib4fv($.location,Tt);break;default:i.vertexAttrib1fv($.location,Tt)}}}}x()}function A(){I();for(const S in n){const P=n[S];for(const X in P){const V=P[X];for(const tt in V)h(V[tt].object),delete V[tt];delete P[X]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const X in P){const V=P[X];for(const tt in V)h(V[tt].object),delete V[tt];delete P[X]}delete n[S.id]}function C(S){for(const P in n){const X=n[P];if(X[S.id]===void 0)continue;const V=X[S.id];for(const tt in V)h(V[tt].object),delete V[tt];delete X[S.id]}}function I(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Ty(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<u;p++)this.render(c[p],h[p]);else{d.multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ey(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==mn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===Ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==hi&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==bi&&!C)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:M,maxSamples:A}}function Ay(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new kn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,_=x*4;let M=f.clippingState||null;l.value=M,M=h(g,d,_,p);for(let A=0;A!==_;++A)M[A]=e[A];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,M=p;_!==v;++_,M+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Ry(i){let t=new WeakMap;function e(o,a){return a===Wc?o.mapping=sr:a===Gc&&(o.mapping=rr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wc||a===Gc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Bv(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Qr extends Bp{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Gs=4,od=[.125,.215,.35,.446,.526,.582],Qi=20,Wl=new Qr,ad=new bt;let Gl=null,Vl=0,Xl=0,ql=!1;const ji=(1+Math.sqrt(5))/2,Cs=1/ji,ld=[new U(-ji,Cs,0),new U(ji,Cs,0),new U(-Cs,0,ji),new U(Cs,0,ji),new U(0,ji,-Cs),new U(0,ji,Cs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class cd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Gl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Gl,Vl,Xl),this._renderer.xr.enabled=ql,t.scissorTest=!1,Uo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===sr||t.mapping===rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Te,minFilter:Te,generateMipmaps:!1,type:Ii,format:mn,colorSpace:Ui,depthBuffer:!1},s=hd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hd(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cy(r)),this._blurMaterial=Dy(r,t,e)}return s}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,Wl)}_sceneToCubeUV(t,e,n,s){const a=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ad),h.toneMapping=oi,h.autoClear=!1;const p=new we({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new Jt(new Ze,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(ad),v=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const _=this._cubeSize;Uo(s,x*_,f>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===sr||t.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ud());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Uo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Wl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ld[(s-r-1)%ld.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Jt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Qi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Qi;m>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qi}`);const f=[];let x=0;for(let C=0;C<Qi;++C){const I=C/v,b=Math.exp(-I*I/2);f.push(b),C===0?x+=b:C<m&&(x+=2*b)}for(let C=0;C<f.length;C++)f[C]=f[C]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const M=this._sizeLods[s],A=3*M*(s>_-Gs?s-_+Gs:0),E=4*(this._cubeSize-M);Uo(e,A,E,3*M,2*M),l.setRenderTarget(e),l.render(u,Wl)}}function Cy(i){const t=[],e=[],n=[];let s=i;const r=i-Gs+1+od.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Gs?l=od[o-i+Gs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,x=new Float32Array(v*g*p),_=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let E=0;E<p;E++){const C=E%3*2/3-1,I=E>2?0:-1,b=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];x.set(b,v*g*E),_.set(d,m*g*E);const S=[E,E,E,E,E,E];M.set(S,f*g*E)}const A=new Ve;A.setAttribute("position",new ue(x,v)),A.setAttribute("uv",new ue(_,m)),A.setAttribute("faceIndex",new ue(M,f)),t.push(A),s>Gs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hd(i,t,e){const n=new Nn(i,t,e);return n.texture.mapping=Ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Uo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Dy(i,t,e){const n=new Float32Array(Qi),s=new U(0,1,0);return new je({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function ud(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function dd(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function yh(){return`

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
	`}function Py(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wc||l===Gc,h=l===sr||l===rr;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new cd(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new cd(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ly(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&vh("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ky(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let _=0,M=x.length;_<M;_+=3){const A=x[_+0],E=x[_+1],C=x[_+2];d.push(A,E,E,C,C,A)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,M=x.length/3-1;_<M;_+=3){const A=_+0,E=_+1,C=_+2;d.push(A,E,E,C,C,A)}}else return;const m=new(Dp(d)?Fp:Np)(d,1);m.version=v;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Iy(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g;m++)this.render(d[m]/o,p[m]);else{v.multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}}function u(d,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let f=0;for(let x=0;x<g;x++)f+=p[x];for(let x=0;x<v.length;x++)e.update(f,n,v[x])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Uy(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ny(i,t,e){const n=new WeakMap,s=new ve;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let A=a.attributes.position.count*M,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const C=new Float32Array(A*E*4*u),I=new Lp(C,A,E,u);I.type=bi,I.needsUpdate=!0;const b=M*4;for(let P=0;P<u;P++){const X=f[P],V=x[P],tt=_[P],nt=A*E*4*P;for(let Z=0;Z<X.count;Z++){const st=Z*b;g===!0&&(s.fromBufferAttribute(X,Z),C[nt+st+0]=s.x,C[nt+st+1]=s.y,C[nt+st+2]=s.z,C[nt+st+3]=0),v===!0&&(s.fromBufferAttribute(V,Z),C[nt+st+4]=s.x,C[nt+st+5]=s.y,C[nt+st+6]=s.z,C[nt+st+7]=0),m===!0&&(s.fromBufferAttribute(tt,Z),C[nt+st+8]=s.x,C[nt+st+9]=s.y,C[nt+st+10]=s.z,C[nt+st+11]=tt.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new Ft(A,E)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Fy(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class el extends Ge{constructor(t,e,n,s,r,o,a,l,c,h=Ks){if(h!==Ks&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ks&&(n=Li),n===void 0&&h===ar&&(n=or),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:de,this.minFilter=l!==void 0?l:de,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Wp=new Ge,Gp=new el(1,1);Gp.compareFunction=Cp;const Vp=new Lp,Xp=new kp,qp=new zp,fd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),vd=new Float32Array(4);function _r(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=fd[s];if(r===void 0&&(r=new Float32Array(s),fd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function nl(i,t){let e=pd[t];e===void 0&&(e=new Int32Array(t),pd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Oy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function By(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function zy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function Hy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function Wy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;vd.set(n),i.uniformMatrix2fv(this.addr,!1,vd),Ne(e,n)}}function Gy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;gd.set(n),i.uniformMatrix3fv(this.addr,!1,gd),Ne(e,n)}}function Vy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;md.set(n),i.uniformMatrix4fv(this.addr,!1,md),Ne(e,n)}}function Xy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function Yy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function $y(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function Ky(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function jy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function Zy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function Qy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function Jy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Gp:Wp;e.setTexture2D(t||r,s)}function tM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xp,s)}function eM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||qp,s)}function nM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vp,s)}function iM(i){switch(i){case 5126:return Oy;case 35664:return By;case 35665:return zy;case 35666:return Hy;case 35674:return Wy;case 35675:return Gy;case 35676:return Vy;case 5124:case 35670:return Xy;case 35667:case 35671:return qy;case 35668:case 35672:return Yy;case 35669:case 35673:return $y;case 5125:return Ky;case 36294:return jy;case 36295:return Zy;case 36296:return Qy;case 35678:case 36198:case 36298:case 36306:case 35682:return Jy;case 35679:case 36299:case 36307:return tM;case 35680:case 36300:case 36308:case 36293:return eM;case 36289:case 36303:case 36311:case 36292:return nM}}function sM(i,t){i.uniform1fv(this.addr,t)}function rM(i,t){const e=_r(t,this.size,2);i.uniform2fv(this.addr,e)}function oM(i,t){const e=_r(t,this.size,3);i.uniform3fv(this.addr,e)}function aM(i,t){const e=_r(t,this.size,4);i.uniform4fv(this.addr,e)}function lM(i,t){const e=_r(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cM(i,t){const e=_r(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function hM(i,t){const e=_r(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function uM(i,t){i.uniform1iv(this.addr,t)}function dM(i,t){i.uniform2iv(this.addr,t)}function fM(i,t){i.uniform3iv(this.addr,t)}function pM(i,t){i.uniform4iv(this.addr,t)}function mM(i,t){i.uniform1uiv(this.addr,t)}function gM(i,t){i.uniform2uiv(this.addr,t)}function vM(i,t){i.uniform3uiv(this.addr,t)}function _M(i,t){i.uniform4uiv(this.addr,t)}function xM(i,t,e){const n=this.cache,s=t.length,r=nl(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Wp,r[o])}function yM(i,t,e){const n=this.cache,s=t.length,r=nl(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Xp,r[o])}function MM(i,t,e){const n=this.cache,s=t.length,r=nl(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||qp,r[o])}function wM(i,t,e){const n=this.cache,s=t.length,r=nl(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Vp,r[o])}function SM(i){switch(i){case 5126:return sM;case 35664:return rM;case 35665:return oM;case 35666:return aM;case 35674:return lM;case 35675:return cM;case 35676:return hM;case 5124:case 35670:return uM;case 35667:case 35671:return dM;case 35668:case 35672:return fM;case 35669:case 35673:return pM;case 5125:return mM;case 36294:return gM;case 36295:return vM;case 36296:return _M;case 35678:case 36198:case 36298:case 36306:case 35682:return xM;case 35679:case 36299:case 36307:return yM;case 35680:case 36300:case 36308:case 36293:return MM;case 36289:case 36303:case 36311:case 36292:return wM}}class bM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=iM(e.type)}}class TM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=SM(e.type)}}class EM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Yl=/(\w+)(\])?(\[|\.)?/g;function _d(i,t){i.seq.push(t),i.map[t.id]=t}function AM(i,t,e){const n=i.name,s=n.length;for(Yl.lastIndex=0;;){const r=Yl.exec(n),o=Yl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_d(e,c===void 0?new bM(a,i,t):new TM(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new EM(a),_d(e,u)),e=u}}}class Sa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);AM(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function xd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const RM=37297;let CM=0;function DM(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function PM(i){const t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i);let n;switch(t===e?n="":t===La&&e===Pa?n="LinearDisplayP3ToLinearSRGB":t===Pa&&e===La&&(n="LinearSRGBToLinearDisplayP3"),i){case Ui:case tl:return[n,"LinearTransferOETF"];case ae:case mh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function yd(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+DM(i.getShaderSource(t),o)}else return s}function LM(i,t){const e=PM(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function kM(i,t){let e;switch(t){case Dg:e="Linear";break;case Pg:e="Reinhard";break;case Lg:e="OptimizedCineon";break;case kg:e="ACESFilmic";break;case Ug:e="AgX";break;case Ng:e="Neutral";break;case Ig:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function IM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function UM(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function NM(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Or(i){return i!==""}function Md(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const FM=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(i){return i.replace(FM,BM)}const OM=new Map;function BM(i,t){let e=Yt[t];if(e===void 0){const n=OM.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qc(e)}const zM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sd(i){return i.replace(zM,HM)}function HM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function WM(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gp?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===vp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function GM(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case sr:case rr:t="ENVMAP_TYPE_CUBE";break;case Ja:t="ENVMAP_TYPE_CUBE_UV";break}return t}function VM(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rr:t="ENVMAP_MODE_REFRACTION";break}return t}function XM(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _p:t="ENVMAP_BLENDING_MULTIPLY";break;case Rg:t="ENVMAP_BLENDING_MIX";break;case Cg:t="ENVMAP_BLENDING_ADD";break}return t}function qM(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function YM(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=WM(e),c=GM(e),h=VM(e),u=XM(e),d=qM(e),p=IM(e),g=UM(r),v=s.createProgram();let m,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Or).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Or).join(`
`),f.length>0&&(f+=`
`)):(m=[bd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),f=[bd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==oi?kM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,LM("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Or).join(`
`)),o=qc(o),o=Md(o,e),o=wd(o,e),a=qc(a),a=Md(a,e),a=wd(a,e),o=Sd(o),a=Sd(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=x+m+o,M=x+f+a,A=xd(s,s.VERTEX_SHADER,_),E=xd(s,s.FRAGMENT_SHADER,M);s.attachShader(v,A),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(P){if(i.debug.checkShaderErrors){const X=s.getProgramInfoLog(v).trim(),V=s.getShaderInfoLog(A).trim(),tt=s.getShaderInfoLog(E).trim();let nt=!0,Z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,E);else{const st=yd(s,A,"vertex"),$=yd(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+st+`
`+$)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(V===""||tt==="")&&(Z=!1);Z&&(P.diagnostics={runnable:nt,programLog:X,vertexShader:{log:V,prefix:m},fragmentShader:{log:tt,prefix:f}})}s.deleteShader(A),s.deleteShader(E),I=new Sa(s,v),b=NM(s,v)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,RM)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=CM++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=E,this}let $M=0;class KM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new jM(t),e.set(t,n)),n}}class jM{constructor(t){this.id=$M++,this.code=t,this.usedTimes=0}}function ZM(i,t,e,n,s,r,o){const a=new Ip,l=new KM,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,P,X,V){const tt=X.fog,nt=V.geometry,Z=b.isMeshStandardMaterial?X.environment:null,st=(b.isMeshStandardMaterial?e:t).get(b.envMap||Z),$=st&&st.mapping===Ja?st.image.height:null,xt=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const Tt=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,gt=Tt!==void 0?Tt.length:0;let qt=0;nt.morphAttributes.position!==void 0&&(qt=1),nt.morphAttributes.normal!==void 0&&(qt=2),nt.morphAttributes.color!==void 0&&(qt=3);let Zt,K,L,O;if(xt){const le=Hn[xt];Zt=le.vertexShader,K=le.fragmentShader}else Zt=b.vertexShader,K=b.fragmentShader,l.update(b),L=l.getVertexShaderID(b),O=l.getFragmentShaderID(b);const N=i.getRenderTarget(),j=V.isInstancedMesh===!0,q=V.isBatchedMesh===!0,H=!!b.map,D=!!b.matcap,mt=!!st,vt=!!b.aoMap,Et=!!b.lightMap,rt=!!b.bumpMap,ct=!!b.normalMap,ft=!!b.displacementMap,yt=!!b.emissiveMap,Ut=!!b.metalnessMap,R=!!b.roughnessMap,w=b.anisotropy>0,z=b.clearcoat>0,Y=b.dispersion>0,Q=b.iridescence>0,et=b.sheen>0,Mt=b.transmission>0,at=w&&!!b.anisotropyMap,lt=z&&!!b.clearcoatMap,Gt=z&&!!b.clearcoatNormalMap,ot=z&&!!b.clearcoatRoughnessMap,Ct=Q&&!!b.iridescenceMap,Kt=Q&&!!b.iridescenceThicknessMap,Ot=et&&!!b.sheenColorMap,pt=et&&!!b.sheenRoughnessMap,Vt=!!b.specularMap,Qt=!!b.specularColorMap,Se=!!b.specularIntensityMap,k=Mt&&!!b.transmissionMap,wt=Mt&&!!b.thicknessMap,J=!!b.gradientMap,it=!!b.alphaMap,ut=b.alphaTest>0,Ht=!!b.alphaHash,ne=!!b.extensions;let be=oi;b.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(be=i.toneMapping);const Fe={shaderID:xt,shaderType:b.type,shaderName:b.name,vertexShader:Zt,fragmentShader:K,defines:b.defines,customVertexShaderID:L,customFragmentShaderID:O,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:q,batchingColor:q&&V._colorsTexture!==null,instancing:j,instancingColor:j&&V.instanceColor!==null,instancingMorph:j&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:N===null?i.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ui,alphaToCoverage:!!b.alphaToCoverage,map:H,matcap:D,envMap:mt,envMapMode:mt&&st.mapping,envMapCubeUVHeight:$,aoMap:vt,lightMap:Et,bumpMap:rt,normalMap:ct,displacementMap:d&&ft,emissiveMap:yt,normalMapObjectSpace:ct&&b.normalMapType===Yg,normalMapTangentSpace:ct&&b.normalMapType===Rp,metalnessMap:Ut,roughnessMap:R,anisotropy:w,anisotropyMap:at,clearcoat:z,clearcoatMap:lt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:ot,dispersion:Y,iridescence:Q,iridescenceMap:Ct,iridescenceThicknessMap:Kt,sheen:et,sheenColorMap:Ot,sheenRoughnessMap:pt,specularMap:Vt,specularColorMap:Qt,specularIntensityMap:Se,transmission:Mt,transmissionMap:k,thicknessMap:wt,gradientMap:J,opaque:b.transparent===!1&&b.blending===$s&&b.alphaToCoverage===!1,alphaMap:it,alphaTest:ut,alphaHash:Ht,combine:b.combine,mapUv:H&&v(b.map.channel),aoMapUv:vt&&v(b.aoMap.channel),lightMapUv:Et&&v(b.lightMap.channel),bumpMapUv:rt&&v(b.bumpMap.channel),normalMapUv:ct&&v(b.normalMap.channel),displacementMapUv:ft&&v(b.displacementMap.channel),emissiveMapUv:yt&&v(b.emissiveMap.channel),metalnessMapUv:Ut&&v(b.metalnessMap.channel),roughnessMapUv:R&&v(b.roughnessMap.channel),anisotropyMapUv:at&&v(b.anisotropyMap.channel),clearcoatMapUv:lt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:pt&&v(b.sheenRoughnessMap.channel),specularMapUv:Vt&&v(b.specularMap.channel),specularColorMapUv:Qt&&v(b.specularColorMap.channel),specularIntensityMapUv:Se&&v(b.specularIntensityMap.channel),transmissionMapUv:k&&v(b.transmissionMap.channel),thicknessMapUv:wt&&v(b.thicknessMap.channel),alphaMapUv:it&&v(b.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(ct||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!nt.attributes.uv&&(H||it),fog:!!tt,useFog:b.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:V.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:qt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:H&&b.map.isVideoTexture===!0&&oe.getTransfer(b.map.colorSpace)===ge,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===on,flipSided:b.side===ze,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ne&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ne&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function f(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)S.push(P),S.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(x(S,b),_(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function x(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function _(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),b.push(a.mask)}function M(b){const S=g[b.type];let P;if(S){const X=Hn[S];P=Uv.clone(X.uniforms)}else P=b.uniforms;return P}function A(b,S){let P;for(let X=0,V=h.length;X<V;X++){const tt=h[X];if(tt.cacheKey===S){P=tt,++P.usedTimes;break}}return P===void 0&&(P=new YM(i,S,b,r),h.push(P)),P}function E(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function C(b){l.remove(b)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:A,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:I}}function QM(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function JM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Td(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ed(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,v,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function a(u,d,p,g,v,m){const f=o(u,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,v,m){const f=o(u,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||JM),n.length>1&&n.sort(d||Td),s.length>1&&s.sort(d||Td)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function tw(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ed,i.set(n,[o])):s>=r.length?(o=new Ed,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ew(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new bt};break;case"SpotLight":e={position:new U,direction:new U,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function nw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let iw=0;function sw(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function rw(i){const t=new ew,e=nw(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new fe,o=new fe;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,x=0,_=0,M=0,A=0,E=0,C=0;c.sort(sw);for(let b=0,S=c.length;b<S;b++){const P=c[b],X=P.color,V=P.intensity,tt=P.distance,nt=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=X.r*V,u+=X.g*V,d+=X.b*V;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(P.sh.coefficients[Z],V);C++}else if(P.isDirectionalLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const st=P.shadow,$=e.get(P);$.shadowBias=st.bias,$.shadowNormalBias=st.normalBias,$.shadowRadius=st.radius,$.shadowMapSize=st.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=nt,n.directionalShadowMatrix[p]=P.shadow.matrix,x++}n.directional[p]=Z,p++}else if(P.isSpotLight){const Z=t.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(X).multiplyScalar(V),Z.distance=tt,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,n.spot[v]=Z;const st=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,st.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[v]=st.matrix,P.castShadow){const $=e.get(P);$.shadowBias=st.bias,$.shadowNormalBias=st.normalBias,$.shadowRadius=st.radius,$.shadowMapSize=st.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=nt,M++}v++}else if(P.isRectAreaLight){const Z=t.get(P);Z.color.copy(X).multiplyScalar(V),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=Z,m++}else if(P.isPointLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const st=P.shadow,$=e.get(P);$.shadowBias=st.bias,$.shadowNormalBias=st.normalBias,$.shadowRadius=st.radius,$.shadowMapSize=st.mapSize,$.shadowCameraNear=st.camera.near,$.shadowCameraFar=st.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=nt,n.pointShadowMatrix[g]=P.shadow.matrix,_++}n.point[g]=Z,g++}else if(P.isHemisphereLight){const Z=t.get(P);Z.skyColor.copy(P.color).multiplyScalar(V),Z.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[f]=Z,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==x||I.numPointShadows!==_||I.numSpotShadows!==M||I.numSpotMaps!==A||I.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,I.directionalLength=p,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=x,I.numPointShadows=_,I.numSpotShadows=M,I.numSpotMaps=A,I.numLightProbes=C,n.version=iw++)}function l(c,h){let u=0,d=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const _=c[f];if(_.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(_.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Ad(i){const t=new rw(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ow(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ad(i),t.set(s,[a])):r>=o.length?(a=new Ad(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Yp extends Fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class aw extends Fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const lw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cw=`uniform sampler2D shadow_pass;
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
}`;function hw(i,t,e){let n=new xh;const s=new Ft,r=new Ft,o=new ve,a=new Yp({depthPacking:Ap}),l=new aw,c={},h=e.maxTextureSize,u={[Pi]:ze,[ze]:Pi,[on]:on},d=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:lw,fragmentShader:cw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ve;g.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Jt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gp;let f=this.type;this.render=function(E,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Ri),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const V=f!==ti&&this.type===ti,tt=f===ti&&this.type!==ti;for(let nt=0,Z=E.length;nt<Z;nt++){const st=E[nt],$=st.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const xt=$.getFrameExtents();if(s.multiply(xt),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/xt.x),s.x=r.x*xt.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/xt.y),s.y=r.y*xt.y,$.mapSize.y=r.y)),$.map===null||V===!0||tt===!0){const gt=this.type!==ti?{minFilter:de,magFilter:de}:{};$.map!==null&&$.map.dispose(),$.map=new Nn(s.x,s.y,gt),$.map.texture.name=st.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const Tt=$.getViewportCount();for(let gt=0;gt<Tt;gt++){const qt=$.getViewport(gt);o.set(r.x*qt.x,r.y*qt.y,r.x*qt.z,r.y*qt.w),X.viewport(o),$.updateMatrices(st,gt),n=$.getFrustum(),M(C,I,$.camera,st,this.type)}$.isPointLightShadow!==!0&&this.type===ti&&x($,I),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,P)};function x(E,C){const I=t.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Nn(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,I,d,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,I,p,v,null)}function _(E,C,I,b){let S=null;const P=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)S=P;else if(S=I.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const X=S.uuid,V=C.uuid;let tt=c[X];tt===void 0&&(tt={},c[X]=tt);let nt=tt[V];nt===void 0&&(nt=S.clone(),tt[V]=nt,C.addEventListener("dispose",A)),S=nt}if(S.visible=C.visible,S.wireframe=C.wireframe,b===ti?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=i.properties.get(S);X.light=I}return S}function M(E,C,I,b,S){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===ti)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const V=t.update(E),tt=E.material;if(Array.isArray(tt)){const nt=V.groups;for(let Z=0,st=nt.length;Z<st;Z++){const $=nt[Z],xt=tt[$.materialIndex];if(xt&&xt.visible){const Tt=_(E,xt,b,S);E.onBeforeShadow(i,E,C,I,V,Tt,$),i.renderBufferDirect(I,null,V,Tt,E,$),E.onAfterShadow(i,E,C,I,V,Tt,$)}}}else if(tt.visible){const nt=_(E,tt,b,S);E.onBeforeShadow(i,E,C,I,V,nt,null),i.renderBufferDirect(I,null,V,nt,E,null),E.onAfterShadow(i,E,C,I,V,nt,null)}}const X=E.children;for(let V=0,tt=X.length;V<tt;V++)M(X[V],C,I,b,S)}function A(E){E.target.removeEventListener("dispose",A);for(const I in c){const b=c[I],S=E.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function uw(i){function t(){let k=!1;const wt=new ve;let J=null;const it=new ve(0,0,0,0);return{setMask:function(ut){J!==ut&&!k&&(i.colorMask(ut,ut,ut,ut),J=ut)},setLocked:function(ut){k=ut},setClear:function(ut,Ht,ne,be,Fe){Fe===!0&&(ut*=be,Ht*=be,ne*=be),wt.set(ut,Ht,ne,be),it.equals(wt)===!1&&(i.clearColor(ut,Ht,ne,be),it.copy(wt))},reset:function(){k=!1,J=null,it.set(-1,0,0,0)}}}function e(){let k=!1,wt=null,J=null,it=null;return{setTest:function(ut){ut?O(i.DEPTH_TEST):N(i.DEPTH_TEST)},setMask:function(ut){wt!==ut&&!k&&(i.depthMask(ut),wt=ut)},setFunc:function(ut){if(J!==ut){switch(ut){case Mg:i.depthFunc(i.NEVER);break;case wg:i.depthFunc(i.ALWAYS);break;case Sg:i.depthFunc(i.LESS);break;case Ra:i.depthFunc(i.LEQUAL);break;case bg:i.depthFunc(i.EQUAL);break;case Tg:i.depthFunc(i.GEQUAL);break;case Eg:i.depthFunc(i.GREATER);break;case Ag:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ut}},setLocked:function(ut){k=ut},setClear:function(ut){it!==ut&&(i.clearDepth(ut),it=ut)},reset:function(){k=!1,wt=null,J=null,it=null}}}function n(){let k=!1,wt=null,J=null,it=null,ut=null,Ht=null,ne=null,be=null,Fe=null;return{setTest:function(le){k||(le?O(i.STENCIL_TEST):N(i.STENCIL_TEST))},setMask:function(le){wt!==le&&!k&&(i.stencilMask(le),wt=le)},setFunc:function(le,Fn,On){(J!==le||it!==Fn||ut!==On)&&(i.stencilFunc(le,Fn,On),J=le,it=Fn,ut=On)},setOp:function(le,Fn,On){(Ht!==le||ne!==Fn||be!==On)&&(i.stencilOp(le,Fn,On),Ht=le,ne=Fn,be=On)},setLocked:function(le){k=le},setClear:function(le){Fe!==le&&(i.clearStencil(le),Fe=le)},reset:function(){k=!1,wt=null,J=null,it=null,ut=null,Ht=null,ne=null,be=null,Fe=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],p=null,g=!1,v=null,m=null,f=null,x=null,_=null,M=null,A=null,E=new bt(0,0,0),C=0,I=!1,b=null,S=null,P=null,X=null,V=null;const tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,Z=0;const st=i.getParameter(i.VERSION);st.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(st)[1]),nt=Z>=1):st.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),nt=Z>=2);let $=null,xt={};const Tt=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),qt=new ve().fromArray(Tt),Zt=new ve().fromArray(gt);function K(k,wt,J,it){const ut=new Uint8Array(4),Ht=i.createTexture();i.bindTexture(k,Ht),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<J;ne++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,it,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(wt+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return Ht}const L={};L[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),L[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),L[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),O(i.DEPTH_TEST),r.setFunc(Ra),rt(!1),ct(lu),O(i.CULL_FACE),vt(Ri);function O(k){c[k]!==!0&&(i.enable(k),c[k]=!0)}function N(k){c[k]!==!1&&(i.disable(k),c[k]=!1)}function j(k,wt){return h[k]!==wt?(i.bindFramebuffer(k,wt),h[k]=wt,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=wt),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function q(k,wt){let J=d,it=!1;if(k){J=u.get(wt),J===void 0&&(J=[],u.set(wt,J));const ut=k.textures;if(J.length!==ut.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Ht=0,ne=ut.length;Ht<ne;Ht++)J[Ht]=i.COLOR_ATTACHMENT0+Ht;J.length=ut.length,it=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,it=!0);it&&i.drawBuffers(J)}function H(k){return p!==k?(i.useProgram(k),p=k,!0):!1}const D={[Zi]:i.FUNC_ADD,[sg]:i.FUNC_SUBTRACT,[rg]:i.FUNC_REVERSE_SUBTRACT};D[og]=i.MIN,D[ag]=i.MAX;const mt={[lg]:i.ZERO,[cg]:i.ONE,[hg]:i.SRC_COLOR,[zc]:i.SRC_ALPHA,[gg]:i.SRC_ALPHA_SATURATE,[pg]:i.DST_COLOR,[dg]:i.DST_ALPHA,[ug]:i.ONE_MINUS_SRC_COLOR,[Hc]:i.ONE_MINUS_SRC_ALPHA,[mg]:i.ONE_MINUS_DST_COLOR,[fg]:i.ONE_MINUS_DST_ALPHA,[vg]:i.CONSTANT_COLOR,[_g]:i.ONE_MINUS_CONSTANT_COLOR,[xg]:i.CONSTANT_ALPHA,[yg]:i.ONE_MINUS_CONSTANT_ALPHA};function vt(k,wt,J,it,ut,Ht,ne,be,Fe,le){if(k===Ri){g===!0&&(N(i.BLEND),g=!1);return}if(g===!1&&(O(i.BLEND),g=!0),k!==ig){if(k!==v||le!==I){if((m!==Zi||_!==Zi)&&(i.blendEquation(i.FUNC_ADD),m=Zi,_=Zi),le)switch(k){case $s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bc:i.blendFunc(i.ONE,i.ONE);break;case cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case $s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}f=null,x=null,M=null,A=null,E.set(0,0,0),C=0,v=k,I=le}return}ut=ut||wt,Ht=Ht||J,ne=ne||it,(wt!==m||ut!==_)&&(i.blendEquationSeparate(D[wt],D[ut]),m=wt,_=ut),(J!==f||it!==x||Ht!==M||ne!==A)&&(i.blendFuncSeparate(mt[J],mt[it],mt[Ht],mt[ne]),f=J,x=it,M=Ht,A=ne),(be.equals(E)===!1||Fe!==C)&&(i.blendColor(be.r,be.g,be.b,Fe),E.copy(be),C=Fe),v=k,I=!1}function Et(k,wt){k.side===on?N(i.CULL_FACE):O(i.CULL_FACE);let J=k.side===ze;wt&&(J=!J),rt(J),k.blending===$s&&k.transparent===!1?vt(Ri):vt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),s.setMask(k.colorWrite);const it=k.stencilWrite;o.setTest(it),it&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),yt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?O(i.SAMPLE_ALPHA_TO_COVERAGE):N(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(k){b!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),b=k)}function ct(k){k!==eg?(O(i.CULL_FACE),k!==S&&(k===lu?i.cullFace(i.BACK):k===ng?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):N(i.CULL_FACE),S=k}function ft(k){k!==P&&(nt&&i.lineWidth(k),P=k)}function yt(k,wt,J){k?(O(i.POLYGON_OFFSET_FILL),(X!==wt||V!==J)&&(i.polygonOffset(wt,J),X=wt,V=J)):N(i.POLYGON_OFFSET_FILL)}function Ut(k){k?O(i.SCISSOR_TEST):N(i.SCISSOR_TEST)}function R(k){k===void 0&&(k=i.TEXTURE0+tt-1),$!==k&&(i.activeTexture(k),$=k)}function w(k,wt,J){J===void 0&&($===null?J=i.TEXTURE0+tt-1:J=$);let it=xt[J];it===void 0&&(it={type:void 0,texture:void 0},xt[J]=it),(it.type!==k||it.texture!==wt)&&($!==J&&(i.activeTexture(J),$=J),i.bindTexture(k,wt||L[k]),it.type=k,it.texture=wt)}function z(){const k=xt[$];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Kt(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(k){qt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),qt.copy(k))}function pt(k){Zt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Zt.copy(k))}function Vt(k,wt){let J=l.get(wt);J===void 0&&(J=new WeakMap,l.set(wt,J));let it=J.get(k);it===void 0&&(it=i.getUniformBlockIndex(wt,k.name),J.set(k,it))}function Qt(k,wt){const it=l.get(wt).get(k);a.get(wt)!==it&&(i.uniformBlockBinding(wt,it,k.__bindingPointIndex),a.set(wt,it))}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},$=null,xt={},h={},u=new WeakMap,d=[],p=null,g=!1,v=null,m=null,f=null,x=null,_=null,M=null,A=null,E=new bt(0,0,0),C=0,I=!1,b=null,S=null,P=null,X=null,V=null,qt.set(0,0,i.canvas.width,i.canvas.height),Zt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:O,disable:N,bindFramebuffer:j,drawBuffers:q,useProgram:H,setBlending:vt,setMaterial:Et,setFlipSided:rt,setCullFace:ct,setLineWidth:ft,setPolygonOffset:yt,setScissorTest:Ut,activeTexture:R,bindTexture:w,unbindTexture:z,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:Ct,texImage3D:Kt,updateUBOMapping:Vt,uniformBlockBinding:Qt,texStorage2D:Gt,texStorage3D:ot,texSubImage2D:et,texSubImage3D:Mt,compressedTexSubImage2D:at,compressedTexSubImage3D:lt,scissor:Ot,viewport:pt,reset:Se}}function dw(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return p?new OffscreenCanvas(R,w):Zr("canvas")}function v(R,w,z){let Y=1;const Q=Ut(R);if((Q.width>z||Q.height>z)&&(Y=z/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const et=Math.floor(Y*Q.width),Mt=Math.floor(Y*Q.height);u===void 0&&(u=g(et,Mt));const at=w?g(et,Mt):u;return at.width=et,at.height=Mt,at.getContext("2d").drawImage(R,0,0,et,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+et+"x"+Mt+")."),at}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==de&&R.minFilter!==Te}function f(R){i.generateMipmap(R)}function x(R,w,z,Y,Q=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let et=w;if(w===i.RED&&(z===i.FLOAT&&(et=i.R32F),z===i.HALF_FLOAT&&(et=i.R16F),z===i.UNSIGNED_BYTE&&(et=i.R8)),w===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.R8UI),z===i.UNSIGNED_SHORT&&(et=i.R16UI),z===i.UNSIGNED_INT&&(et=i.R32UI),z===i.BYTE&&(et=i.R8I),z===i.SHORT&&(et=i.R16I),z===i.INT&&(et=i.R32I)),w===i.RG&&(z===i.FLOAT&&(et=i.RG32F),z===i.HALF_FLOAT&&(et=i.RG16F),z===i.UNSIGNED_BYTE&&(et=i.RG8)),w===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.RG8UI),z===i.UNSIGNED_SHORT&&(et=i.RG16UI),z===i.UNSIGNED_INT&&(et=i.RG32UI),z===i.BYTE&&(et=i.RG8I),z===i.SHORT&&(et=i.RG16I),z===i.INT&&(et=i.RG32I)),w===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),w===i.RGBA){const Mt=Q?Da:oe.getTransfer(Y);z===i.FLOAT&&(et=i.RGBA32F),z===i.HALF_FLOAT&&(et=i.RGBA16F),z===i.UNSIGNED_BYTE&&(et=Mt===ge?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function _(R,w){let z;return R?w===null||w===Li||w===or?z=i.DEPTH24_STENCIL8:w===bi?z=i.DEPTH32F_STENCIL8:w===Ca&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Li||w===or?z=i.DEPTH_COMPONENT24:w===bi?z=i.DEPTH_COMPONENT32F:w===Ca&&(z=i.DEPTH_COMPONENT16),z}function M(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==de&&R.minFilter!==Te?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function A(R){const w=R.target;w.removeEventListener("dispose",A),C(w),w.isVideoTexture&&h.delete(w)}function E(R){const w=R.target;w.removeEventListener("dispose",E),b(w)}function C(R){const w=n.get(R);if(w.__webglInit===void 0)return;const z=R.source,Y=d.get(z);if(Y){const Q=Y[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(R),Object.keys(Y).length===0&&d.delete(z)}n.remove(R)}function I(R){const w=n.get(R);i.deleteTexture(w.__webglTexture);const z=R.source,Y=d.get(z);delete Y[w.__cacheKey],o.memory.textures--}function b(R){const w=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(w.__webglFramebuffer[Y]))for(let Q=0;Q<w.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(w.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(w.__webglFramebuffer[Y]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Y])}else{if(Array.isArray(w.__webglFramebuffer))for(let Y=0;Y<w.__webglFramebuffer.length;Y++)i.deleteFramebuffer(w.__webglFramebuffer[Y]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Y=0;Y<w.__webglColorRenderbuffer.length;Y++)w.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Y]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const z=R.textures;for(let Y=0,Q=z.length;Y<Q;Y++){const et=n.get(z[Y]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(z[Y])}n.remove(R)}let S=0;function P(){S=0}function X(){const R=S;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),S+=1,R}function V(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function tt(R,w){const z=n.get(R);if(R.isVideoTexture&&ft(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Zt(z,R,w);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+w)}function nt(R,w){const z=n.get(R);if(R.version>0&&z.__version!==R.version){Zt(z,R,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+w)}function Z(R,w){const z=n.get(R);if(R.version>0&&z.__version!==R.version){Zt(z,R,w);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+w)}function st(R,w){const z=n.get(R);if(R.version>0&&z.__version!==R.version){K(z,R,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+w)}const $={[_n]:i.REPEAT,[ts]:i.CLAMP_TO_EDGE,[Vc]:i.MIRRORED_REPEAT},xt={[de]:i.NEAREST,[ph]:i.NEAREST_MIPMAP_NEAREST,[po]:i.NEAREST_MIPMAP_LINEAR,[Te]:i.LINEAR,[_l]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},Tt={[$g]:i.NEVER,[tv]:i.ALWAYS,[Kg]:i.LESS,[Cp]:i.LEQUAL,[jg]:i.EQUAL,[Jg]:i.GEQUAL,[Zg]:i.GREATER,[Qg]:i.NOTEQUAL};function gt(R,w){if(w.type===bi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Te||w.magFilter===_l||w.magFilter===po||w.magFilter===ni||w.minFilter===Te||w.minFilter===_l||w.minFilter===po||w.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,$[w.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,$[w.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,$[w.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,xt[w.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,xt[w.minFilter]),w.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Tt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===de||w.minFilter!==po&&w.minFilter!==ni||w.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function qt(R,w){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",A));const Y=w.source;let Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));const et=V(w);if(et!==R.__cacheKey){Q[et]===void 0&&(Q[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[et].usedTimes++;const Mt=Q[R.__cacheKey];Mt!==void 0&&(Q[R.__cacheKey].usedTimes--,Mt.usedTimes===0&&I(w)),R.__cacheKey=et,R.__webglTexture=Q[et].texture}return z}function Zt(R,w,z){let Y=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Y=i.TEXTURE_3D);const Q=qt(R,w),et=w.source;e.bindTexture(Y,R.__webglTexture,i.TEXTURE0+z);const Mt=n.get(et);if(et.version!==Mt.__version||Q===!0){e.activeTexture(i.TEXTURE0+z);const at=oe.getPrimaries(oe.workingColorSpace),lt=w.colorSpace===pn?null:oe.getPrimaries(w.colorSpace),Gt=w.colorSpace===pn||at===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let ot=v(w.image,!1,s.maxTextureSize);ot=yt(w,ot);const Ct=r.convert(w.format,w.colorSpace),Kt=r.convert(w.type);let Ot=x(w.internalFormat,Ct,Kt,w.colorSpace,w.isVideoTexture);gt(Y,w);let pt;const Vt=w.mipmaps,Qt=w.isVideoTexture!==!0,Se=Mt.__version===void 0||Q===!0,k=et.dataReady,wt=M(w,ot);if(w.isDepthTexture)Ot=_(w.format===ar,w.type),Se&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,Ot,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Ot,ot.width,ot.height,0,Ct,Kt,null));else if(w.isDataTexture)if(Vt.length>0){Qt&&Se&&e.texStorage2D(i.TEXTURE_2D,wt,Ot,Vt[0].width,Vt[0].height);for(let J=0,it=Vt.length;J<it;J++)pt=Vt[J],Qt?k&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,pt.width,pt.height,Ct,Kt,pt.data):e.texImage2D(i.TEXTURE_2D,J,Ot,pt.width,pt.height,0,Ct,Kt,pt.data);w.generateMipmaps=!1}else Qt?(Se&&e.texStorage2D(i.TEXTURE_2D,wt,Ot,ot.width,ot.height),k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,Ct,Kt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,ot.width,ot.height,0,Ct,Kt,ot.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Qt&&Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Ot,Vt[0].width,Vt[0].height,ot.depth);for(let J=0,it=Vt.length;J<it;J++)if(pt=Vt[J],w.format!==mn)if(Ct!==null)if(Qt){if(k)if(w.layerUpdates.size>0){for(const ut of w.layerUpdates){const Ht=pt.width*pt.height;e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,ut,pt.width,pt.height,1,Ct,pt.data.slice(Ht*ut,Ht*(ut+1)),0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,pt.width,pt.height,ot.depth,Ct,pt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Ot,pt.width,pt.height,ot.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,pt.width,pt.height,ot.depth,Ct,Kt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,Ot,pt.width,pt.height,ot.depth,0,Ct,Kt,pt.data)}else{Qt&&Se&&e.texStorage2D(i.TEXTURE_2D,wt,Ot,Vt[0].width,Vt[0].height);for(let J=0,it=Vt.length;J<it;J++)pt=Vt[J],w.format!==mn?Ct!==null?Qt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,pt.width,pt.height,Ct,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,J,Ot,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?k&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,pt.width,pt.height,Ct,Kt,pt.data):e.texImage2D(i.TEXTURE_2D,J,Ot,pt.width,pt.height,0,Ct,Kt,pt.data)}else if(w.isDataArrayTexture)if(Qt){if(Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Ot,ot.width,ot.height,ot.depth),k)if(w.layerUpdates.size>0){let J;switch(Kt){case i.UNSIGNED_BYTE:switch(Ct){case i.ALPHA:J=1;break;case i.LUMINANCE:J=1;break;case i.LUMINANCE_ALPHA:J=2;break;case i.RGB:J=3;break;case i.RGBA:J=4;break;default:throw new Error(`Unknown texel size for format ${Ct}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:J=1;break;default:throw new Error(`Unknown texel size for type ${Kt}.`)}const it=ot.width*ot.height*J;for(const ut of w.layerUpdates)e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,ot.width,ot.height,1,Ct,Kt,ot.data.slice(it*ut,it*(ut+1)));w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Ct,Kt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,ot.width,ot.height,ot.depth,0,Ct,Kt,ot.data);else if(w.isData3DTexture)Qt?(Se&&e.texStorage3D(i.TEXTURE_3D,wt,Ot,ot.width,ot.height,ot.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Ct,Kt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,ot.width,ot.height,ot.depth,0,Ct,Kt,ot.data);else if(w.isFramebufferTexture){if(Se)if(Qt)e.texStorage2D(i.TEXTURE_2D,wt,Ot,ot.width,ot.height);else{let J=ot.width,it=ot.height;for(let ut=0;ut<wt;ut++)e.texImage2D(i.TEXTURE_2D,ut,Ot,J,it,0,Ct,Kt,null),J>>=1,it>>=1}}else if(Vt.length>0){if(Qt&&Se){const J=Ut(Vt[0]);e.texStorage2D(i.TEXTURE_2D,wt,Ot,J.width,J.height)}for(let J=0,it=Vt.length;J<it;J++)pt=Vt[J],Qt?k&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Ct,Kt,pt):e.texImage2D(i.TEXTURE_2D,J,Ot,Ct,Kt,pt);w.generateMipmaps=!1}else if(Qt){if(Se){const J=Ut(ot);e.texStorage2D(i.TEXTURE_2D,wt,Ot,J.width,J.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Kt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Ct,Kt,ot);m(w)&&f(Y),Mt.__version=et.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function K(R,w,z){if(w.image.length!==6)return;const Y=qt(R,w),Q=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);const et=n.get(Q);if(Q.version!==et.__version||Y===!0){e.activeTexture(i.TEXTURE0+z);const Mt=oe.getPrimaries(oe.workingColorSpace),at=w.colorSpace===pn?null:oe.getPrimaries(w.colorSpace),lt=w.colorSpace===pn||Mt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Gt=w.isCompressedTexture||w.image[0].isCompressedTexture,ot=w.image[0]&&w.image[0].isDataTexture,Ct=[];for(let it=0;it<6;it++)!Gt&&!ot?Ct[it]=v(w.image[it],!0,s.maxCubemapSize):Ct[it]=ot?w.image[it].image:w.image[it],Ct[it]=yt(w,Ct[it]);const Kt=Ct[0],Ot=r.convert(w.format,w.colorSpace),pt=r.convert(w.type),Vt=x(w.internalFormat,Ot,pt,w.colorSpace),Qt=w.isVideoTexture!==!0,Se=et.__version===void 0||Y===!0,k=Q.dataReady;let wt=M(w,Kt);gt(i.TEXTURE_CUBE_MAP,w);let J;if(Gt){Qt&&Se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Vt,Kt.width,Kt.height);for(let it=0;it<6;it++){J=Ct[it].mipmaps;for(let ut=0;ut<J.length;ut++){const Ht=J[ut];w.format!==mn?Ot!==null?Qt?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,ut,0,0,Ht.width,Ht.height,Ot,Ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,ut,Vt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,ut,0,0,Ht.width,Ht.height,Ot,pt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,ut,Vt,Ht.width,Ht.height,0,Ot,pt,Ht.data)}}}else{if(J=w.mipmaps,Qt&&Se){J.length>0&&wt++;const it=Ut(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Vt,it.width,it.height)}for(let it=0;it<6;it++)if(ot){Qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ct[it].width,Ct[it].height,Ot,pt,Ct[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Vt,Ct[it].width,Ct[it].height,0,Ot,pt,Ct[it].data);for(let ut=0;ut<J.length;ut++){const ne=J[ut].image[it].image;Qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,ut+1,0,0,ne.width,ne.height,Ot,pt,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,ut+1,Vt,ne.width,ne.height,0,Ot,pt,ne.data)}}else{Qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ot,pt,Ct[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Vt,Ot,pt,Ct[it]);for(let ut=0;ut<J.length;ut++){const Ht=J[ut];Qt?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,ut+1,0,0,Ot,pt,Ht.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,ut+1,Vt,Ot,pt,Ht.image[it])}}}m(w)&&f(i.TEXTURE_CUBE_MAP),et.__version=Q.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function L(R,w,z,Y,Q,et){const Mt=r.convert(z.format,z.colorSpace),at=r.convert(z.type),lt=x(z.internalFormat,Mt,at,z.colorSpace);if(!n.get(w).__hasExternalTextures){const ot=Math.max(1,w.width>>et),Ct=Math.max(1,w.height>>et);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,et,lt,ot,Ct,w.depth,0,Mt,at,null):e.texImage2D(Q,et,lt,ot,Ct,0,Mt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),ct(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,n.get(z).__webglTexture,0,rt(w)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,n.get(z).__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function O(R,w,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),w.depthBuffer){const Y=w.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,et=_(w.stencilBuffer,Q),Mt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=rt(w);ct(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,et,w.width,w.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,et,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,et,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,R)}else{const Y=w.textures;for(let Q=0;Q<Y.length;Q++){const et=Y[Q],Mt=r.convert(et.format,et.colorSpace),at=r.convert(et.type),lt=x(et.internalFormat,Mt,at,et.colorSpace),Gt=rt(w);z&&ct(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,lt,w.width,w.height):ct(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,lt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,lt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function N(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),tt(w.depthTexture,0);const Y=n.get(w.depthTexture).__webglTexture,Q=rt(w);if(w.depthTexture.format===Ks)ct(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(w.depthTexture.format===ar)ct(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function j(R){const w=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");N(w.__webglFramebuffer,R)}else if(z){w.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Y]),w.__webglDepthbuffer[Y]=i.createRenderbuffer(),O(w.__webglDepthbuffer[Y],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),O(w.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function q(R,w,z){const Y=n.get(R);w!==void 0&&L(Y.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&j(R)}function H(R){const w=R.texture,z=n.get(R),Y=n.get(w);R.addEventListener("dispose",E);const Q=R.textures,et=R.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=w.version,o.memory.textures++),et){z.__webglFramebuffer=[];for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[at]=[];for(let lt=0;lt<w.mipmaps.length;lt++)z.__webglFramebuffer[at][lt]=i.createFramebuffer()}else z.__webglFramebuffer[at]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let at=0;at<w.mipmaps.length;at++)z.__webglFramebuffer[at]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let at=0,lt=Q.length;at<lt;at++){const Gt=n.get(Q[at]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&ct(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let at=0;at<Q.length;at++){const lt=Q[at];z.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[at]);const Gt=r.convert(lt.format,lt.colorSpace),ot=r.convert(lt.type),Ct=x(lt.internalFormat,Gt,ot,lt.colorSpace,R.isXRRenderTarget===!0),Kt=rt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,Ct,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,z.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),O(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),gt(i.TEXTURE_CUBE_MAP,w);for(let at=0;at<6;at++)if(w.mipmaps&&w.mipmaps.length>0)for(let lt=0;lt<w.mipmaps.length;lt++)L(z.__webglFramebuffer[at][lt],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,lt);else L(z.__webglFramebuffer[at],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(w)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let at=0,lt=Q.length;at<lt;at++){const Gt=Q[at],ot=n.get(Gt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),gt(i.TEXTURE_2D,Gt),L(z.__webglFramebuffer,R,Gt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(Gt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,Y.__webglTexture),gt(at,w),w.mipmaps&&w.mipmaps.length>0)for(let lt=0;lt<w.mipmaps.length;lt++)L(z.__webglFramebuffer[lt],R,w,i.COLOR_ATTACHMENT0,at,lt);else L(z.__webglFramebuffer,R,w,i.COLOR_ATTACHMENT0,at,0);m(w)&&f(at),e.unbindTexture()}R.depthBuffer&&j(R)}function D(R){const w=R.textures;for(let z=0,Y=w.length;z<Y;z++){const Q=w[z];if(m(Q)){const et=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Mt=n.get(Q).__webglTexture;e.bindTexture(et,Mt),f(et),e.unbindTexture()}}}const mt=[],vt=[];function Et(R){if(R.samples>0){if(ct(R)===!1){const w=R.textures,z=R.width,Y=R.height;let Q=i.COLOR_BUFFER_BIT;const et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(R),at=w.length>1;if(at)for(let lt=0;lt<w.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let lt=0;lt<w.length;lt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[lt]);const Gt=n.get(w[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,z,Y,0,0,z,Y,Q,i.NEAREST),l===!0&&(mt.length=0,vt.length=0,mt.push(i.COLOR_ATTACHMENT0+lt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(mt.push(et),vt.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let lt=0;lt<w.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[lt]);const Gt=n.get(w[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function rt(R){return Math.min(s.maxSamples,R.samples)}function ct(R){const w=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ft(R){const w=o.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function yt(R,w){const z=R.colorSpace,Y=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Ui&&z!==pn&&(oe.getTransfer(z)===ge?(Y!==mn||Q!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function Ut(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=P,this.setTexture2D=tt,this.setTexture2DArray=nt,this.setTexture3D=Z,this.setTextureCube=st,this.rebindTextures=q,this.setupRenderTarget=H,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=L,this.useMultisampledRTT=ct}function fw(i,t){function e(n,s=pn){let r;const o=oe.getTransfer(s);if(n===hi)return i.UNSIGNED_BYTE;if(n===Mp)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wp)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bg)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fg)return i.BYTE;if(n===Og)return i.SHORT;if(n===Ca)return i.UNSIGNED_SHORT;if(n===yp)return i.INT;if(n===Li)return i.UNSIGNED_INT;if(n===bi)return i.FLOAT;if(n===Ii)return i.HALF_FLOAT;if(n===zg)return i.ALPHA;if(n===Hg)return i.RGB;if(n===mn)return i.RGBA;if(n===Wg)return i.LUMINANCE;if(n===Gg)return i.LUMINANCE_ALPHA;if(n===Ks)return i.DEPTH_COMPONENT;if(n===ar)return i.DEPTH_STENCIL;if(n===Sp)return i.RED;if(n===bp)return i.RED_INTEGER;if(n===Vg)return i.RG;if(n===Tp)return i.RG_INTEGER;if(n===Ep)return i.RGBA_INTEGER;if(n===xl||n===yl||n===Ml||n===wl)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ml)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uu||n===du||n===fu||n===pu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===du)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mu||n===gu||n===vu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===mu||n===gu)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_u||n===xu||n===yu||n===Mu||n===wu||n===Su||n===bu||n===Tu||n===Eu||n===Au||n===Ru||n===Cu||n===Du||n===Pu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_u)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Su)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Au)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ru)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Du)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sl||n===Lu||n===ku)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Sl)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ku)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xg||n===Iu||n===Uu||n===Nu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Iu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class pw extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class gn extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mw={type:"move"};class $l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const gw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vw=`
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

}`;class _w{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ge,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new je({vertexShader:gw,fragmentShader:vw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new an(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class xw extends vr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const v=new _w,m=e.getContextAttributes();let f=null,x=null;const _=[],M=[],A=new Ft;let E=null;const C=new Ke;C.layers.enable(1),C.viewport=new ve;const I=new Ke;I.layers.enable(2),I.viewport=new ve;const b=[C,I],S=new pw;S.layers.enable(1),S.layers.enable(2);let P=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let L=_[K];return L===void 0&&(L=new $l,_[K]=L),L.getTargetRaySpace()},this.getControllerGrip=function(K){let L=_[K];return L===void 0&&(L=new $l,_[K]=L),L.getGripSpace()},this.getHand=function(K){let L=_[K];return L===void 0&&(L=new $l,_[K]=L),L.getHandSpace()};function V(K){const L=M.indexOf(K.inputSource);if(L===-1)return;const O=_[L];O!==void 0&&(O.update(K.inputSource,K.frame,c||o),O.dispatchEvent({type:K.type,data:K.inputSource}))}function tt(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",nt);for(let K=0;K<_.length;K++){const L=M[K];L!==null&&(M[K]=null,_[K].disconnect(L))}P=null,X=null,v.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,x=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",nt),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const L={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,L),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Nn(p.framebufferWidth,p.framebufferHeight,{format:mn,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let L=null,O=null,N=null;m.depth&&(N=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,L=m.stencil?ar:Ks,O=m.stencil?or:Li);const j={colorFormat:e.RGBA8,depthFormat:N,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(j),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Nn(d.textureWidth,d.textureHeight,{format:mn,type:hi,depthTexture:new el(d.textureWidth,d.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function nt(K){for(let L=0;L<K.removed.length;L++){const O=K.removed[L],N=M.indexOf(O);N>=0&&(M[N]=null,_[N].disconnect(O))}for(let L=0;L<K.added.length;L++){const O=K.added[L];let N=M.indexOf(O);if(N===-1){for(let q=0;q<_.length;q++)if(q>=M.length){M.push(O),N=q;break}else if(M[q]===null){M[q]=O,N=q;break}if(N===-1)break}const j=_[N];j&&j.connect(O)}}const Z=new U,st=new U;function $(K,L,O){Z.setFromMatrixPosition(L.matrixWorld),st.setFromMatrixPosition(O.matrixWorld);const N=Z.distanceTo(st),j=L.projectionMatrix.elements,q=O.projectionMatrix.elements,H=j[14]/(j[10]-1),D=j[14]/(j[10]+1),mt=(j[9]+1)/j[5],vt=(j[9]-1)/j[5],Et=(j[8]-1)/j[0],rt=(q[8]+1)/q[0],ct=H*Et,ft=H*rt,yt=N/(-Et+rt),Ut=yt*-Et;L.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ut),K.translateZ(yt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const R=H+yt,w=D+yt,z=ct-Ut,Y=ft+(N-Ut),Q=mt*D/w*R,et=vt*D/w*R;K.projectionMatrix.makePerspective(z,Y,Q,et,R,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function xt(K,L){L===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(L.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;v.texture!==null&&(K.near=v.depthNear,K.far=v.depthFar),S.near=I.near=C.near=K.near,S.far=I.far=C.far=K.far,(P!==S.near||X!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,X=S.far,C.near=P,C.far=X,I.near=P,I.far=X,C.updateProjectionMatrix(),I.updateProjectionMatrix(),K.updateProjectionMatrix());const L=K.parent,O=S.cameras;xt(S,L);for(let N=0;N<O.length;N++)xt(O[N],L);O.length===2?$(S,C,I):S.projectionMatrix.copy(C.projectionMatrix),Tt(K,S,L)};function Tt(K,L,O){O===null?K.matrix.copy(L.matrixWorld):(K.matrix.copy(O.matrixWorld),K.matrix.invert(),K.matrix.multiply(L.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(L.projectionMatrix),K.projectionMatrixInverse.copy(L.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=jr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let gt=null;function qt(K,L){if(h=L.getViewerPose(c||o),g=L,h!==null){const O=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let N=!1;O.length!==S.cameras.length&&(S.cameras.length=0,N=!0);for(let q=0;q<O.length;q++){const H=O[q];let D=null;if(p!==null)D=p.getViewport(H);else{const vt=u.getViewSubImage(d,H);D=vt.viewport,q===0&&(t.setRenderTargetTextures(x,vt.colorTexture,d.ignoreDepthValues?void 0:vt.depthStencilTexture),t.setRenderTarget(x))}let mt=b[q];mt===void 0&&(mt=new Ke,mt.layers.enable(q),mt.viewport=new ve,b[q]=mt),mt.matrix.fromArray(H.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(H.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(D.x,D.y,D.width,D.height),q===0&&(S.matrix.copy(mt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),N===!0&&S.cameras.push(mt)}const j=s.enabledFeatures;if(j&&j.includes("depth-sensing")){const q=u.getDepthInformation(O[0]);q&&q.isValid&&q.texture&&v.init(t,q,s.renderState)}}for(let O=0;O<_.length;O++){const N=M[O],j=_[O];N!==null&&j!==void 0&&j.update(N,L,c||o)}gt&&gt(K,L),L.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:L}),g=null}const Zt=new Hp;Zt.setAnimationLoop(qt),this.setAnimationLoop=function(K){gt=K},this.dispose=function(){}}}const qi=new Wn,yw=new fe;function Mw(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Op(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,x,_,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,x,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ze&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ze&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f),_=x.envMap,M=x.envMapRotation;_&&(m.envMap.value=_,qi.copy(M),qi.x*=-1,qi.y*=-1,qi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),m.envMapRotation.value.setFromMatrix4(yw.makeRotationFromEuler(qi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=_*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ze&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const x=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ww(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const M=_.program;n.uniformBlockBinding(x,M)}function c(x,_){let M=s[x.id];M===void 0&&(g(x),M=h(x),s[x.id]=M,x.addEventListener("dispose",m));const A=_.program;n.updateUBOMapping(x,A);const E=t.render.frame;r[x.id]!==E&&(d(x),r[x.id]=E)}function h(x){const _=u();x.__bindingPointIndex=_;const M=i.createBuffer(),A=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=s[x.id],M=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,C=M.length;E<C;E++){const I=Array.isArray(M[E])?M[E]:[M[E]];for(let b=0,S=I.length;b<S;b++){const P=I[b];if(p(P,E,b,A)===!0){const X=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let tt=0;for(let nt=0;nt<V.length;nt++){const Z=V[nt],st=v(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,X+tt,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,tt),tt+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,_,M,A){const E=x.value,C=_+"_"+M;if(A[C]===void 0)return typeof E=="number"||typeof E=="boolean"?A[C]=E:A[C]=E.clone(),!0;{const I=A[C];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return A[C]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function g(x){const _=x.uniforms;let M=0;const A=16;for(let C=0,I=_.length;C<I;C++){const b=Array.isArray(_[C])?_[C]:[_[C]];for(let S=0,P=b.length;S<P;S++){const X=b[S],V=Array.isArray(X.value)?X.value:[X.value];for(let tt=0,nt=V.length;tt<nt;tt++){const Z=V[tt],st=v(Z),$=M%A;$!==0&&A-$<st.boundary&&(M+=A-$),X.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=M,M+=st.storage}}}const E=M%A;return E>0&&(M+=A-E),x.__size=M,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class $p{constructor(t={}){const{canvas:e=vv(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const f=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ae,this.toneMapping=oi,this.toneMappingExposure=1;const _=this;let M=!1,A=0,E=0,C=null,I=-1,b=null;const S=new ve,P=new ve;let X=null;const V=new bt(0);let tt=0,nt=e.width,Z=e.height,st=1,$=null,xt=null;const Tt=new ve(0,0,nt,Z),gt=new ve(0,0,nt,Z);let qt=!1;const Zt=new xh;let K=!1,L=!1;const O=new fe,N=new U,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let q=!1;function H(){return C===null?st:1}let D=n;function mt(T,F){return e.getContext(T,F)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fh}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",J,!1),e.addEventListener("webglcontextcreationerror",it,!1),D===null){const F="webgl2";if(D=mt(F,T),D===null)throw mt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let vt,Et,rt,ct,ft,yt,Ut,R,w,z,Y,Q,et,Mt,at,lt,Gt,ot,Ct,Kt,Ot,pt,Vt,Qt;function Se(){vt=new Ly(D),vt.init(),pt=new fw(D,vt),Et=new Ey(D,vt,t,pt),rt=new uw(D),ct=new Uy(D),ft=new QM,yt=new dw(D,vt,rt,ft,Et,pt,ct),Ut=new Ry(_),R=new Py(_),w=new Wv(D),Vt=new by(D,w),z=new ky(D,w,ct,Vt),Y=new Fy(D,z,w,ct),Ct=new Ny(D,Et,yt),lt=new Ay(ft),Q=new ZM(_,Ut,R,vt,Et,Vt,lt),et=new Mw(_,ft),Mt=new tw,at=new ow(vt),ot=new Sy(_,Ut,R,rt,Y,d,l),Gt=new hw(_,Y,Et),Qt=new ww(D,ct,Et,rt),Kt=new Ty(D,vt,ct),Ot=new Iy(D,vt,ct),ct.programs=Q.programs,_.capabilities=Et,_.extensions=vt,_.properties=ft,_.renderLists=Mt,_.shadowMap=Gt,_.state=rt,_.info=ct}Se();const k=new xw(_,D);this.xr=k,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=vt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=vt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(T){T!==void 0&&(st=T,this.setSize(nt,Z,!1))},this.getSize=function(T){return T.set(nt,Z)},this.setSize=function(T,F,W=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}nt=T,Z=F,e.width=Math.floor(T*st),e.height=Math.floor(F*st),W===!0&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(nt*st,Z*st).floor()},this.setDrawingBufferSize=function(T,F,W){nt=T,Z=F,st=W,e.width=Math.floor(T*W),e.height=Math.floor(F*W),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(Tt)},this.setViewport=function(T,F,W,G){T.isVector4?Tt.set(T.x,T.y,T.z,T.w):Tt.set(T,F,W,G),rt.viewport(S.copy(Tt).multiplyScalar(st).round())},this.getScissor=function(T){return T.copy(gt)},this.setScissor=function(T,F,W,G){T.isVector4?gt.set(T.x,T.y,T.z,T.w):gt.set(T,F,W,G),rt.scissor(P.copy(gt).multiplyScalar(st).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(T){rt.setScissorTest(qt=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){xt=T},this.getClearColor=function(T){return T.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(T=!0,F=!0,W=!0){let G=0;if(T){let B=!1;if(C!==null){const ht=C.texture.format;B=ht===Ep||ht===Tp||ht===bp}if(B){const ht=C.texture.type,St=ht===hi||ht===Li||ht===Ca||ht===or||ht===Mp||ht===wp,At=ot.getClearColor(),Pt=ot.getClearAlpha(),Bt=At.r,zt=At.g,Nt=At.b;St?(p[0]=Bt,p[1]=zt,p[2]=Nt,p[3]=Pt,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=Bt,g[1]=zt,g[2]=Nt,g[3]=Pt,D.clearBufferiv(D.COLOR,0,g))}else G|=D.COLOR_BUFFER_BIT}F&&(G|=D.DEPTH_BUFFER_BIT),W&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",J,!1),e.removeEventListener("webglcontextcreationerror",it,!1),Mt.dispose(),at.dispose(),ft.dispose(),Ut.dispose(),R.dispose(),Y.dispose(),Vt.dispose(),Qt.dispose(),Q.dispose(),k.dispose(),k.removeEventListener("sessionstart",Fn),k.removeEventListener("sessionend",On),Bi.stop()};function wt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=ct.autoReset,F=Gt.enabled,W=Gt.autoUpdate,G=Gt.needsUpdate,B=Gt.type;Se(),ct.autoReset=T,Gt.enabled=F,Gt.autoUpdate=W,Gt.needsUpdate=G,Gt.type=B}function it(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ut(T){const F=T.target;F.removeEventListener("dispose",ut),Ht(F)}function Ht(T){ne(T),ft.remove(T)}function ne(T){const F=ft.get(T).programs;F!==void 0&&(F.forEach(function(W){Q.releaseProgram(W)}),T.isShaderMaterial&&Q.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,W,G,B,ht){F===null&&(F=j);const St=B.isMesh&&B.matrixWorld.determinant()<0,At=K0(T,F,W,G,B);rt.setMaterial(G,St);let Pt=W.index,Bt=1;if(G.wireframe===!0){if(Pt=z.getWireframeAttribute(W),Pt===void 0)return;Bt=2}const zt=W.drawRange,Nt=W.attributes.position;let ie=zt.start*Bt,xe=(zt.start+zt.count)*Bt;ht!==null&&(ie=Math.max(ie,ht.start*Bt),xe=Math.min(xe,(ht.start+ht.count)*Bt)),Pt!==null?(ie=Math.max(ie,0),xe=Math.min(xe,Pt.count)):Nt!=null&&(ie=Math.max(ie,0),xe=Math.min(xe,Nt.count));const ye=xe-ie;if(ye<0||ye===1/0)return;Vt.setup(B,G,At,W,Pt);let cn,se=Kt;if(Pt!==null&&(cn=w.get(Pt),se=Ot,se.setIndex(cn)),B.isMesh)G.wireframe===!0?(rt.setLineWidth(G.wireframeLinewidth*H()),se.setMode(D.LINES)):se.setMode(D.TRIANGLES);else if(B.isLine){let It=G.linewidth;It===void 0&&(It=1),rt.setLineWidth(It*H()),B.isLineSegments?se.setMode(D.LINES):B.isLineLoop?se.setMode(D.LINE_LOOP):se.setMode(D.LINE_STRIP)}else B.isPoints?se.setMode(D.POINTS):B.isSprite&&se.setMode(D.TRIANGLES);if(B.isBatchedMesh)B._multiDrawInstances!==null?se.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances):se.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)se.renderInstances(ie,ye,B.count);else if(W.isInstancedBufferGeometry){const It=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Qe=Math.min(W.instanceCount,It);se.renderInstances(ie,ye,Qe)}else se.render(ie,ye)};function be(T,F,W){T.transparent===!0&&T.side===on&&T.forceSinglePass===!1?(T.side=ze,T.needsUpdate=!0,uo(T,F,W),T.side=Pi,T.needsUpdate=!0,uo(T,F,W),T.side=on):uo(T,F,W)}this.compile=function(T,F,W=null){W===null&&(W=T),m=at.get(W),m.init(F),x.push(m),W.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),T!==W&&T.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const G=new Set;return T.traverse(function(B){const ht=B.material;if(ht)if(Array.isArray(ht))for(let St=0;St<ht.length;St++){const At=ht[St];be(At,W,B),G.add(At)}else be(ht,W,B),G.add(ht)}),x.pop(),m=null,G},this.compileAsync=function(T,F,W=null){const G=this.compile(T,F,W);return new Promise(B=>{function ht(){if(G.forEach(function(St){ft.get(St).currentProgram.isReady()&&G.delete(St)}),G.size===0){B(T);return}setTimeout(ht,10)}vt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Fe=null;function le(T){Fe&&Fe(T)}function Fn(){Bi.stop()}function On(){Bi.start()}const Bi=new Hp;Bi.setAnimationLoop(le),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(T){Fe=T,k.setAnimationLoop(T),T===null?Bi.stop():Bi.start()},k.addEventListener("sessionstart",Fn),k.addEventListener("sessionend",On),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(F),F=k.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,F,C),m=at.get(T,x.length),m.init(F),x.push(m),O.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Zt.setFromProjectionMatrix(O),L=this.localClippingEnabled,K=lt.init(this.clippingPlanes,L),v=Mt.get(T,f.length),v.init(),f.push(v),k.enabled===!0&&k.isPresenting===!0){const ht=_.xr.getDepthSensingMesh();ht!==null&&pl(ht,F,-1/0,_.sortObjects)}pl(T,F,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort($,xt),q=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,q&&ot.addToRenderList(v,T),this.info.render.frame++,K===!0&&lt.beginShadows();const W=m.state.shadowsArray;Gt.render(W,T,F),K===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=v.opaque,B=v.transmissive;if(m.setupLights(),F.isArrayCamera){const ht=F.cameras;if(B.length>0)for(let St=0,At=ht.length;St<At;St++){const Pt=ht[St];iu(G,B,T,Pt)}q&&ot.render(T);for(let St=0,At=ht.length;St<At;St++){const Pt=ht[St];nu(v,T,Pt,Pt.viewport)}}else B.length>0&&iu(G,B,T,F),q&&ot.render(T),nu(v,T,F);C!==null&&(yt.updateMultisampleRenderTarget(C),yt.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(_,T,F),Vt.resetDefaultState(),I=-1,b=null,x.pop(),x.length>0?(m=x[x.length-1],K===!0&&lt.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function pl(T,F,W,G){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Zt.intersectsSprite(T)){G&&N.setFromMatrixPosition(T.matrixWorld).applyMatrix4(O);const St=Y.update(T),At=T.material;At.visible&&v.push(T,St,At,W,N.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Zt.intersectsObject(T))){const St=Y.update(T),At=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),N.copy(T.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),N.copy(St.boundingSphere.center)),N.applyMatrix4(T.matrixWorld).applyMatrix4(O)),Array.isArray(At)){const Pt=St.groups;for(let Bt=0,zt=Pt.length;Bt<zt;Bt++){const Nt=Pt[Bt],ie=At[Nt.materialIndex];ie&&ie.visible&&v.push(T,St,ie,W,N.z,Nt)}}else At.visible&&v.push(T,St,At,W,N.z,null)}}const ht=T.children;for(let St=0,At=ht.length;St<At;St++)pl(ht[St],F,W,G)}function nu(T,F,W,G){const B=T.opaque,ht=T.transmissive,St=T.transparent;m.setupLightsView(W),K===!0&&lt.setGlobalState(_.clippingPlanes,W),G&&rt.viewport(S.copy(G)),B.length>0&&ho(B,F,W),ht.length>0&&ho(ht,F,W),St.length>0&&ho(St,F,W),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function iu(T,F,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Nn(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?Ii:hi,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const ht=m.state.transmissionRenderTarget[G.id],St=G.viewport||S;ht.setSize(St.z,St.w);const At=_.getRenderTarget();_.setRenderTarget(ht),_.getClearColor(V),tt=_.getClearAlpha(),tt<1&&_.setClearColor(16777215,.5),q?ot.render(W):_.clear();const Pt=_.toneMapping;_.toneMapping=oi;const Bt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),K===!0&&lt.setGlobalState(_.clippingPlanes,G),ho(T,W,G),yt.updateMultisampleRenderTarget(ht),yt.updateRenderTargetMipmap(ht),vt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Nt=0,ie=F.length;Nt<ie;Nt++){const xe=F[Nt],ye=xe.object,cn=xe.geometry,se=xe.material,It=xe.group;if(se.side===on&&ye.layers.test(G.layers)){const Qe=se.side;se.side=ze,se.needsUpdate=!0,su(ye,W,G,cn,se,It),se.side=Qe,se.needsUpdate=!0,zt=!0}}zt===!0&&(yt.updateMultisampleRenderTarget(ht),yt.updateRenderTargetMipmap(ht))}_.setRenderTarget(At),_.setClearColor(V,tt),Bt!==void 0&&(G.viewport=Bt),_.toneMapping=Pt}function ho(T,F,W){const G=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ht=T.length;B<ht;B++){const St=T[B],At=St.object,Pt=St.geometry,Bt=G===null?St.material:G,zt=St.group;At.layers.test(W.layers)&&su(At,F,W,Pt,Bt,zt)}}function su(T,F,W,G,B,ht){T.onBeforeRender(_,F,W,G,B,ht),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(_,F,W,G,T,ht),B.transparent===!0&&B.side===on&&B.forceSinglePass===!1?(B.side=ze,B.needsUpdate=!0,_.renderBufferDirect(W,F,G,B,T,ht),B.side=Pi,B.needsUpdate=!0,_.renderBufferDirect(W,F,G,B,T,ht),B.side=on):_.renderBufferDirect(W,F,G,B,T,ht),T.onAfterRender(_,F,W,G,B,ht)}function uo(T,F,W){F.isScene!==!0&&(F=j);const G=ft.get(T),B=m.state.lights,ht=m.state.shadowsArray,St=B.state.version,At=Q.getParameters(T,B.state,ht,F,W),Pt=Q.getProgramCacheKey(At);let Bt=G.programs;G.environment=T.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(T.isMeshStandardMaterial?R:Ut).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Bt===void 0&&(T.addEventListener("dispose",ut),Bt=new Map,G.programs=Bt);let zt=Bt.get(Pt);if(zt!==void 0){if(G.currentProgram===zt&&G.lightsStateVersion===St)return ou(T,At),zt}else At.uniforms=Q.getUniforms(T),T.onBuild(W,At,_),T.onBeforeCompile(At,_),zt=Q.acquireProgram(At,Pt),Bt.set(Pt,zt),G.uniforms=At.uniforms;const Nt=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Nt.clippingPlanes=lt.uniform),ou(T,At),G.needsLights=Z0(T),G.lightsStateVersion=St,G.needsLights&&(Nt.ambientLightColor.value=B.state.ambient,Nt.lightProbe.value=B.state.probe,Nt.directionalLights.value=B.state.directional,Nt.directionalLightShadows.value=B.state.directionalShadow,Nt.spotLights.value=B.state.spot,Nt.spotLightShadows.value=B.state.spotShadow,Nt.rectAreaLights.value=B.state.rectArea,Nt.ltc_1.value=B.state.rectAreaLTC1,Nt.ltc_2.value=B.state.rectAreaLTC2,Nt.pointLights.value=B.state.point,Nt.pointLightShadows.value=B.state.pointShadow,Nt.hemisphereLights.value=B.state.hemi,Nt.directionalShadowMap.value=B.state.directionalShadowMap,Nt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Nt.spotShadowMap.value=B.state.spotShadowMap,Nt.spotLightMatrix.value=B.state.spotLightMatrix,Nt.spotLightMap.value=B.state.spotLightMap,Nt.pointShadowMap.value=B.state.pointShadowMap,Nt.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=zt,G.uniformsList=null,zt}function ru(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Sa.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function ou(T,F){const W=ft.get(T);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function K0(T,F,W,G,B){F.isScene!==!0&&(F=j),yt.resetTextureUnits();const ht=F.fog,St=G.isMeshStandardMaterial?F.environment:null,At=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ui,Pt=(G.isMeshStandardMaterial?R:Ut).get(G.envMap||St),Bt=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,zt=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Nt=!!W.morphAttributes.position,ie=!!W.morphAttributes.normal,xe=!!W.morphAttributes.color;let ye=oi;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ye=_.toneMapping);const cn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,se=cn!==void 0?cn.length:0,It=ft.get(G),Qe=m.state.lights;if(K===!0&&(L===!0||T!==b)){const xn=T===b&&G.id===I;lt.setState(G,T,xn)}let ce=!1;G.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Qe.state.version||It.outputColorSpace!==At||B.isBatchedMesh&&It.batching===!1||!B.isBatchedMesh&&It.batching===!0||B.isBatchedMesh&&It.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&It.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&It.instancing===!1||!B.isInstancedMesh&&It.instancing===!0||B.isSkinnedMesh&&It.skinning===!1||!B.isSkinnedMesh&&It.skinning===!0||B.isInstancedMesh&&It.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&It.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&It.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&It.instancingMorph===!1&&B.morphTexture!==null||It.envMap!==Pt||G.fog===!0&&It.fog!==ht||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==lt.numPlanes||It.numIntersection!==lt.numIntersection)||It.vertexAlphas!==Bt||It.vertexTangents!==zt||It.morphTargets!==Nt||It.morphNormals!==ie||It.morphColors!==xe||It.toneMapping!==ye||It.morphTargetsCount!==se)&&(ce=!0):(ce=!0,It.__version=G.version);let Vn=It.currentProgram;ce===!0&&(Vn=uo(G,F,B));let fo=!1,zi=!1,ml=!1;const Oe=Vn.getUniforms(),di=It.uniforms;if(rt.useProgram(Vn.program)&&(fo=!0,zi=!0,ml=!0),G.id!==I&&(I=G.id,zi=!0),fo||b!==T){Oe.setValue(D,"projectionMatrix",T.projectionMatrix),Oe.setValue(D,"viewMatrix",T.matrixWorldInverse);const xn=Oe.map.cameraPosition;xn!==void 0&&xn.setValue(D,N.setFromMatrixPosition(T.matrixWorld)),Et.logarithmicDepthBuffer&&Oe.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Oe.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,zi=!0,ml=!0)}if(B.isSkinnedMesh){Oe.setOptional(D,B,"bindMatrix"),Oe.setOptional(D,B,"bindMatrixInverse");const xn=B.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Oe.setValue(D,"boneTexture",xn.boneTexture,yt))}B.isBatchedMesh&&(Oe.setOptional(D,B,"batchingTexture"),Oe.setValue(D,"batchingTexture",B._matricesTexture,yt),Oe.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&Oe.setValue(D,"batchingColorTexture",B._colorsTexture,yt));const gl=W.morphAttributes;if((gl.position!==void 0||gl.normal!==void 0||gl.color!==void 0)&&Ct.update(B,W,Vn),(zi||It.receiveShadow!==B.receiveShadow)&&(It.receiveShadow=B.receiveShadow,Oe.setValue(D,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(di.envMap.value=Pt,di.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(di.envMapIntensity.value=F.environmentIntensity),zi&&(Oe.setValue(D,"toneMappingExposure",_.toneMappingExposure),It.needsLights&&j0(di,ml),ht&&G.fog===!0&&et.refreshFogUniforms(di,ht),et.refreshMaterialUniforms(di,G,st,Z,m.state.transmissionRenderTarget[T.id]),Sa.upload(D,ru(It),di,yt)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Sa.upload(D,ru(It),di,yt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Oe.setValue(D,"center",B.center),Oe.setValue(D,"modelViewMatrix",B.modelViewMatrix),Oe.setValue(D,"normalMatrix",B.normalMatrix),Oe.setValue(D,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const xn=G.uniformsGroups;for(let vl=0,Q0=xn.length;vl<Q0;vl++){const au=xn[vl];Qt.update(au,Vn),Qt.bind(au,Vn)}}return Vn}function j0(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Z0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,F,W){ft.get(T.texture).__webglTexture=F,ft.get(T.depthTexture).__webglTexture=W;const G=ft.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=W===void 0,G.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const W=ft.get(T);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,W=0){C=T,A=F,E=W;let G=!0,B=null,ht=!1,St=!1;if(T){const Pt=ft.get(T);Pt.__useDefaultFramebuffer!==void 0?(rt.bindFramebuffer(D.FRAMEBUFFER,null),G=!1):Pt.__webglFramebuffer===void 0?yt.setupRenderTarget(T):Pt.__hasExternalTextures&&yt.rebindTextures(T,ft.get(T.texture).__webglTexture,ft.get(T.depthTexture).__webglTexture);const Bt=T.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(St=!0);const zt=ft.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(zt[F])?B=zt[F][W]:B=zt[F],ht=!0):T.samples>0&&yt.useMultisampledRTT(T)===!1?B=ft.get(T).__webglMultisampledFramebuffer:Array.isArray(zt)?B=zt[W]:B=zt,S.copy(T.viewport),P.copy(T.scissor),X=T.scissorTest}else S.copy(Tt).multiplyScalar(st).floor(),P.copy(gt).multiplyScalar(st).floor(),X=qt;if(rt.bindFramebuffer(D.FRAMEBUFFER,B)&&G&&rt.drawBuffers(T,B),rt.viewport(S),rt.scissor(P),rt.setScissorTest(X),ht){const Pt=ft.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Pt.__webglTexture,W)}else if(St){const Pt=ft.get(T.texture),Bt=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.__webglTexture,W||0,Bt)}I=-1},this.readRenderTargetPixels=function(T,F,W,G,B,ht,St){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(At=At[St]),At){rt.bindFramebuffer(D.FRAMEBUFFER,At);try{const Pt=T.texture,Bt=Pt.format,zt=Pt.type;if(!Et.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-G&&W>=0&&W<=T.height-B&&D.readPixels(F,W,G,B,pt.convert(Bt),pt.convert(zt),ht)}finally{const Pt=C!==null?ft.get(C).__webglFramebuffer:null;rt.bindFramebuffer(D.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(T,F,W,G,B,ht,St){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(At=At[St]),At){rt.bindFramebuffer(D.FRAMEBUFFER,At);try{const Pt=T.texture,Bt=Pt.format,zt=Pt.type;if(!Et.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-G&&W>=0&&W<=T.height-B){const Nt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Nt),D.bufferData(D.PIXEL_PACK_BUFFER,ht.byteLength,D.STREAM_READ),D.readPixels(F,W,G,B,pt.convert(Bt),pt.convert(zt),0),D.flush();const ie=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await _v(D,ie,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Nt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ht)}finally{D.deleteBuffer(Nt),D.deleteSync(ie)}return ht}}finally{const Pt=C!==null?ft.get(C).__webglFramebuffer:null;rt.bindFramebuffer(D.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(T,F=null,W=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-W),B=Math.floor(T.image.width*G),ht=Math.floor(T.image.height*G),St=F!==null?F.x:0,At=F!==null?F.y:0;yt.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,St,At,B,ht),rt.unbindTexture()},this.copyTextureToTexture=function(T,F,W=null,G=null,B=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],F=arguments[2],B=arguments[3]||0,W=null);let ht,St,At,Pt,Bt,zt;W!==null?(ht=W.max.x-W.min.x,St=W.max.y-W.min.y,At=W.min.x,Pt=W.min.y):(ht=T.image.width,St=T.image.height,At=0,Pt=0),G!==null?(Bt=G.x,zt=G.y):(Bt=0,zt=0);const Nt=pt.convert(F.format),ie=pt.convert(F.type);yt.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const xe=D.getParameter(D.UNPACK_ROW_LENGTH),ye=D.getParameter(D.UNPACK_IMAGE_HEIGHT),cn=D.getParameter(D.UNPACK_SKIP_PIXELS),se=D.getParameter(D.UNPACK_SKIP_ROWS),It=D.getParameter(D.UNPACK_SKIP_IMAGES),Qe=T.isCompressedTexture?T.mipmaps[B]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Qe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,At),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pt),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,Bt,zt,ht,St,Nt,ie,Qe.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,Bt,zt,Qe.width,Qe.height,Nt,Qe.data):D.texSubImage2D(D.TEXTURE_2D,B,Bt,zt,Nt,ie,Qe),D.pixelStorei(D.UNPACK_ROW_LENGTH,xe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ye),D.pixelStorei(D.UNPACK_SKIP_PIXELS,cn),D.pixelStorei(D.UNPACK_SKIP_ROWS,se),D.pixelStorei(D.UNPACK_SKIP_IMAGES,It),B===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),rt.unbindTexture()},this.copyTextureToTexture3D=function(T,F,W=null,G=null,B=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,G=arguments[1]||null,T=arguments[2],F=arguments[3],B=arguments[4]||0);let ht,St,At,Pt,Bt,zt,Nt,ie,xe;const ye=T.isCompressedTexture?T.mipmaps[B]:T.image;W!==null?(ht=W.max.x-W.min.x,St=W.max.y-W.min.y,At=W.max.z-W.min.z,Pt=W.min.x,Bt=W.min.y,zt=W.min.z):(ht=ye.width,St=ye.height,At=ye.depth,Pt=0,Bt=0,zt=0),G!==null?(Nt=G.x,ie=G.y,xe=G.z):(Nt=0,ie=0,xe=0);const cn=pt.convert(F.format),se=pt.convert(F.type);let It;if(F.isData3DTexture)yt.setTexture3D(F,0),It=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)yt.setTexture2DArray(F,0),It=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Qe=D.getParameter(D.UNPACK_ROW_LENGTH),ce=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Vn=D.getParameter(D.UNPACK_SKIP_PIXELS),fo=D.getParameter(D.UNPACK_SKIP_ROWS),zi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ye.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ye.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Bt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,zt),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(It,B,Nt,ie,xe,ht,St,At,cn,se,ye.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(It,B,Nt,ie,xe,ht,St,At,cn,ye.data):D.texSubImage3D(It,B,Nt,ie,xe,ht,St,At,cn,se,ye),D.pixelStorei(D.UNPACK_ROW_LENGTH,Qe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ce),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Vn),D.pixelStorei(D.UNPACK_SKIP_ROWS,fo),D.pixelStorei(D.UNPACK_SKIP_IMAGES,zi),B===0&&F.generateMipmaps&&D.generateMipmap(It),rt.unbindTexture()},this.initRenderTarget=function(T){ft.get(T).__webglFramebuffer===void 0&&yt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?yt.setTextureCube(T,0):T.isData3DTexture?yt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?yt.setTexture2DArray(T,0):yt.setTexture2D(T,0),rt.unbindTexture()},this.resetState=function(){A=0,E=0,C=null,rt.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===mh?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===tl?"display-p3":"srgb"}}class cr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new bt(t),this.near=e,this.far=n}clone(){return new cr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hr extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Sw{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return vh("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Je=new U;class Ia{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ia(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Kp extends Fi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ds;const Er=new U,Ps=new U,Ls=new U,ks=new Ft,Ar=new Ft,jp=new fe,No=new U,Rr=new U,Fo=new U,Rd=new Ft,Kl=new Ft,Cd=new Ft;class bw extends Pe{constructor(t=new Kp){if(super(),this.isSprite=!0,this.type="Sprite",Ds===void 0){Ds=new Ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Sw(e,5);Ds.setIndex([0,1,2,0,2,3]),Ds.setAttribute("position",new Ia(n,3,0,!1)),Ds.setAttribute("uv",new Ia(n,2,3,!1))}this.geometry=Ds,this.material=t,this.center=new Ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ps.setFromMatrixScale(this.matrixWorld),jp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ps.multiplyScalar(-Ls.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Oo(No.set(-.5,-.5,0),Ls,o,Ps,s,r),Oo(Rr.set(.5,-.5,0),Ls,o,Ps,s,r),Oo(Fo.set(.5,.5,0),Ls,o,Ps,s,r),Rd.set(0,0),Kl.set(1,0),Cd.set(1,1);let a=t.ray.intersectTriangle(No,Rr,Fo,!1,Er);if(a===null&&(Oo(Rr.set(-.5,.5,0),Ls,o,Ps,s,r),Kl.set(0,1),a=t.ray.intersectTriangle(No,Fo,Rr,!1,Er),a===null))return;const l=t.ray.origin.distanceTo(Er);l<t.near||l>t.far||e.push({distance:l,point:Er.clone(),uv:En.getInterpolation(Er,No,Rr,Fo,Rd,Kl,Cd,new Ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Oo(i,t,e,n,s,r){ks.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ar.x=r*ks.x-s*ks.y,Ar.y=s*ks.x+r*ks.y):Ar.copy(ks),i.copy(t),i.x+=Ar.x,i.y+=Ar.y,i.applyMatrix4(jp)}class Mh extends Ge{constructor(t=null,e=1,n=1,s,r,o,a,l,c=de,h=de,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zp extends Fi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ua=new U,Na=new U,Dd=new fe,Cr=new _h,Bo=new ro,jl=new U,Pd=new U;class Tw extends Pe{constructor(t=new Ve,e=new Zp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ua.fromBufferAttribute(e,s-1),Na.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ua.distanceTo(Na);t.setAttribute("lineDistance",new ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,t.ray.intersectsSphere(Bo)===!1)return;Dd.copy(s).invert(),Cr.copy(t.ray).applyMatrix4(Dd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const f=h.getX(v),x=h.getX(v+1),_=zo(this,t,Cr,l,f,x);_&&e.push(_)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),f=zo(this,t,Cr,l,v,m);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const f=zo(this,t,Cr,l,v,v+1);f&&e.push(f)}if(this.isLineLoop){const v=zo(this,t,Cr,l,g-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function zo(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Ua.fromBufferAttribute(o,s),Na.fromBufferAttribute(o,r),e.distanceSqToSegment(Ua,Na,jl,Pd)>n)return;jl.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(jl);if(!(l<t.near||l>t.far))return{distance:l,point:Pd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,object:i}}const Ld=new U,kd=new U;class Ew extends Tw{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ld.fromBufferAttribute(e,s),kd.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ld.distanceTo(kd);t.setAttribute("lineDistance",new ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wh extends Fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Id=new fe,Yc=new _h,Ho=new ro,Wo=new U;class Qp extends Pe{constructor(t=new Ve,e=new wh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,t.ray.intersectsSphere(Ho)===!1)return;Id.copy(s).invert(),Yc.copy(t.ray).applyMatrix4(Id);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);Wo.fromBufferAttribute(u,m),Ud(Wo,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,v=p;g<v;g++)Wo.fromBufferAttribute(u,g),Ud(Wo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ud(i,t,e,n,s,r,o){const a=Yc.distanceSqToPoint(i);if(a<e){const l=new U;Yc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class il extends Ge{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Go=new U,Vo=new U,Zl=new U,Xo=new En;class Aw extends Ve{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(js*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:f}=Xo;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Xo.getNormal(Zl),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const _=(x+1)%3,M=u[x],A=u[_],E=Xo[h[x]],C=Xo[h[_]],I=`${M}_${A}`,b=`${A}_${M}`;b in d&&d[b]?(Zl.dot(d[b].normal)<=r&&(p.push(E.x,E.y,E.z),p.push(C.x,C.y,C.z)),d[b]=null):I in d||(d[I]={index0:c[x],index1:c[_],normal:Zl.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:m}=d[g];Go.fromBufferAttribute(a,v),Vo.fromBufferAttribute(a,m),p.push(Go.x,Go.y,Go.z),p.push(Vo.x,Vo.y,Vo.z)}this.setAttribute("position",new ke(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Sh extends Ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new U,d=new U,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const x=[],_=f/n;let M=0;f===0&&o===0?M=.5/e:f===n&&l===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const E=A/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(E+M,1-_),x.push(c++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<e;x++){const _=h[f][x+1],M=h[f][x],A=h[f+1][x],E=h[f+1][x+1];(f!==0||o>0)&&p.push(_,M,E),(f!==n-1||l<Math.PI)&&p.push(M,A,E)}this.setIndex(p),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(v,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Rw extends Fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rp,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nd extends Rw{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Fd={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Cw{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Dw=new Cw;class bh{constructor(t){this.manager=t!==void 0?t:Dw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}bh.DEFAULT_MATERIAL_NAME="__DEFAULT";class Pw extends bh{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Fd.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Zr("img");function l(){h(),Fd.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class xr extends bh{constructor(t){super(t)}load(t,e,n,s){const r=new Ge,o=new Pw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Th extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Lw extends Th{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ql=new fe,Od=new U,Bd=new U;class kw{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xh,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Od.setFromMatrixPosition(t.matrixWorld),e.position.copy(Od),Bd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bd),e.updateMatrixWorld(),Ql.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ql),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ql)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Iw extends kw{constructor(){super(new Qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jp extends Th{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Iw}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class zd extends Th{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fh);const tm=13625079,Uw=[.3,.52,.79],Nw=[.81,.9,.97],Jl=i=>`rgb(${Math.round(i[0]*255)},${Math.round(i[1]*255)},${Math.round(i[2]*255)})`;function Fw(i,t,e){const n=[(t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2],s=i.createLinearGradient(0,0,0,256);s.addColorStop(0,Jl(t)),s.addColorStop(.55,Jl(n)),s.addColorStop(1,Jl(e)),i.fillStyle=s,i.fillRect(0,0,2,256)}function Ow(){const i=document.createElement("canvas");i.width=2,i.height=256;const t=i.getContext("2d");t&&Fw(t,Uw,Nw);const e=new il(i);return e.colorSpace=ae,e}function Bw(i){const t=i|0,e=`
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
`.trim();return new je({uniforms:{tColor:{value:null},tDepth:{value:null},tBloom:{value:null},tAO:{value:null},uSunUV:{value:new Ft(.5,.5)},uSunColor:{value:new bt(1,.95,.8)},uIntensity:{value:0},uDecay:{value:.96},uWeight:{value:.9},uBloom:{value:0},uAO:{value:0},uUnderwater:{value:0},uWaterIrradiance:{value:new bt(.04,.18,.26)}},vertexShader:e,fragmentShader:n,depthTest:!1,depthWrite:!1})}class Hd{constructor(t){y(this,"material");y(this,"quad");y(this,"quadScene",new hr);y(this,"quadCam",new Qr(-1,1,1,-1,0,1));this.material=Bw(t),this.quad=new Jt(new an(2,2),this.material),this.quadScene.add(this.quad)}render(t){t.render(this.quadScene,this.quadCam)}dispose(){this.material.dispose(),this.quad.geometry.dispose()}}const zw=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim(),Hw=`
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
`.trim(),Ww=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim(),Gw=`
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
`.trim();class Vw{constructor(t,e){y(this,"bloomA");y(this,"bloomB");y(this,"extractMat");y(this,"extractScene",new hr);y(this,"extractCam",new Qr(-1,1,1,-1,0,1));y(this,"blurMat");y(this,"blurScene",new hr);y(this,"blurCam",new Qr(-1,1,1,-1,0,1));this.bloomA=this.buildRT(1,1),this.bloomB=this.buildRT(1,1),this.extractMat=new je({uniforms:{tScene:{value:null},uThreshold:{value:1.05},uKnee:{value:.22},uSourceTexel:{value:new Ft(1,1)}},vertexShader:zw,fragmentShader:Hw,depthTest:!1,depthWrite:!1});const n=new Jt(new an(2,2),this.extractMat);this.extractScene.add(n),this.blurMat=new je({uniforms:{tBlur:{value:null},uTexelSize:{value:new Ft(1,1)},uHorizontal:{value:1}},vertexShader:Ww,fragmentShader:Gw,depthTest:!1,depthWrite:!1});const s=new Jt(new an(2,2),this.blurMat);this.blurScene.add(s),this.setSize(t,e)}get texture(){return this.bloomA.texture}setSize(t,e){this.bloomA.dispose(),this.bloomB.dispose();const n=Math.max(1,Math.round(t)),s=Math.max(1,Math.round(e));this.bloomA=this.buildRT(n,s),this.bloomB=this.buildRT(n,s),this.extractMat.uniforms.uSourceTexel.value.set(1/(n*4),1/(s*4)),this.blurMat.uniforms.uTexelSize.value.set(1/n,1/s)}render(t,e){this.extractMat.uniforms.tScene.value=e,t.setRenderTarget(this.bloomA),t.clear(),t.render(this.extractScene,this.extractCam);for(let n=0;n<2;n++)this.blurMat.uniforms.tBlur.value=this.bloomA.texture,this.blurMat.uniforms.uHorizontal.value=1,t.setRenderTarget(this.bloomB),t.clear(),t.render(this.blurScene,this.blurCam),this.blurMat.uniforms.tBlur.value=this.bloomB.texture,this.blurMat.uniforms.uHorizontal.value=0,t.setRenderTarget(this.bloomA),t.clear(),t.render(this.blurScene,this.blurCam);t.setRenderTarget(null)}dispose(){this.bloomA.dispose(),this.bloomB.dispose(),this.extractMat.dispose(),this.blurMat.dispose()}buildRT(t,e){return new Nn(t,e,{type:Ii,depthBuffer:!1})}}function em(i){const t=i.visualViewport,e=t&&t.width>0?t.width:i.innerWidth,n=t&&t.height>0?t.height:i.innerHeight;return{width:Math.max(1,Math.ceil(e)),height:Math.max(1,Math.ceil(n))}}const Eh=1,Xr=2,Jr=3,oo=4,Rt=16,pe=192;class ao{constructor(){y(this,"blocks",new Uint16Array(Rt*pe*Rt));y(this,"fluid",new Uint8Array(Rt*pe*Rt));y(this,"dirty",!0)}idx(t,e,n){return t+n*Rt+e*Rt*Rt}inBounds(t,e,n){return t>=0&&t<Rt&&e>=0&&e<pe&&n>=0&&n<Rt}get(t,e,n){return this.inBounds(t,e,n)?this.blocks[this.idx(t,e,n)]:0}set(t,e,n,s){this.inBounds(t,e,n)&&(this.blocks[this.idx(t,e,n)]=s)}getFluid(t,e,n){return this.inBounds(t,e,n)?this.fluid[this.idx(t,e,n)]:0}setFluid(t,e,n,s){this.inBounds(t,e,n)&&(this.fluid[this.idx(t,e,n)]=s)}static fromBuffers(t,e){const n=new ao;return n.blocks.set(new Uint16Array(t)),n.fluid.set(new Uint8Array(e)),n}}const nm=16,im=32,Wd=i=>i&15,Xw=i=>(i&nm)!==0,qw=i=>(i&im)!==0,Ah=(i,t,e)=>i&15|(t?nm:0)|(e?im:0),Xt=i=>i>>4,De=i=>i&15;function bn(i,t,e){let n=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,1274126177);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}const qr=i=>i*i*(3-2*i);function Yw(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=bn(n,s,e),l=bn(n+1,s,e),c=bn(n,s+1,e),h=bn(n+1,s+1,e),u=qr(r),d=qr(o),p=a+(l-a)*u,g=c+(h-c)*u;return p+(g-p)*d}function Vs(i,t,e,n=4){let s=1,r=1,o=0,a=0;for(let l=0;l<n;l++)o+=s*Yw(i*r,t*r,e+l*101),a+=s,s*=.5,r*=2;return o/a}function sm(i,t,e,n){let s=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,2147483647)^Math.imul(n|0,1274126177);return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296}function en(i,t,e,n){const s=Math.floor(i),r=Math.floor(t),o=Math.floor(e),a=qr(i-s),l=qr(t-r),c=qr(e-o),h=(m,f,x)=>m+(f-m)*x,u=(m,f,x)=>sm(s+m,r+f,o+x,n),d=h(u(0,0,0),u(1,0,0),a),p=h(u(0,1,0),u(1,1,0),a),g=h(u(0,0,1),u(1,0,1),a),v=h(u(0,1,1),u(1,1,1),a);return h(h(d,p,l),h(g,v,l),c)}function rm(i){let t=i>>>0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var ei=(i=>(i[i.PosX=0]="PosX",i[i.NegX=1]="NegX",i[i.PosY=2]="PosY",i[i.NegY=3]="NegY",i[i.PosZ=4]="PosZ",i[i.NegZ=5]="NegZ",i))(ei||{});const Wt={stone:0,dirt:1,grass_top:2,grass_side:3,cobblestone:4,sand:5,oak_log_top:6,oak_log_side:7,oak_planks:8,coal_ore:9,water:10,oak_leaves:11,crafting_table_top:12,crafting_table_side:13,iron_ore:14,furnace_front:15,gravel:16,grass_plant:17,obsidian:18,netherrack:19,soul_sand:20,glowstone:21,nether_quartz_ore:22,lava:23,bedrock:24,nether_portal:25,sandstone:26,cactus:27,ice:28,snow:29,spruce_log:30,spruce_leaves:31,coal_block:32,iron_block:33,quartz_block:34,diamond_ore:35,diamond_block:36},te=i=>[i,i,i,i,i,i],Dr=(i,t,e)=>[i,i,t,e,i,i],$w=258,Kw=296,Ie=[{id:0,name:"air",solid:!1,transparent:!0,faces:te(0),hardness:0,drop:null,needsTool:!1,tool:null},{id:1,name:"stone",solid:!0,transparent:!1,faces:te(Wt.stone),hardness:1.5,drop:4,needsTool:!0,tool:"pickaxe"},{id:2,name:"dirt",solid:!0,transparent:!1,faces:te(Wt.dirt),hardness:.5,drop:2,needsTool:!1,tool:"shovel"},{id:3,name:"grass",solid:!0,transparent:!1,faces:Dr(Wt.grass_side,Wt.grass_top,Wt.dirt),hardness:.6,drop:2,needsTool:!1,tool:"shovel"},{id:4,name:"cobblestone",solid:!0,transparent:!1,faces:te(Wt.cobblestone),hardness:2,drop:4,needsTool:!0,tool:"pickaxe"},{id:5,name:"sand",solid:!0,transparent:!1,faces:te(Wt.sand),hardness:.5,drop:5,needsTool:!1,tool:"shovel"},{id:6,name:"oak_log",solid:!0,transparent:!1,faces:Dr(Wt.oak_log_side,Wt.oak_log_top,Wt.oak_log_top),hardness:2,drop:6,needsTool:!1,tool:"axe"},{id:7,name:"oak_planks",solid:!0,transparent:!1,faces:te(Wt.oak_planks),hardness:2,drop:7,needsTool:!1,tool:"axe"},{id:8,name:"coal_ore",solid:!0,transparent:!1,faces:te(Wt.coal_ore),hardness:3,drop:$w,needsTool:!0,tool:"pickaxe"},{id:9,name:"water",solid:!1,transparent:!0,faces:te(Wt.water),hardness:0,drop:null,needsTool:!1,tool:null},{id:10,name:"oak_leaves",solid:!0,transparent:!0,faces:te(Wt.oak_leaves),hardness:.2,drop:null,needsTool:!1,tool:null},{id:11,name:"crafting_table",solid:!0,transparent:!1,faces:Dr(Wt.crafting_table_side,Wt.crafting_table_top,Wt.oak_planks),hardness:2.5,drop:11,needsTool:!1,tool:"axe"},{id:12,name:"iron_ore",solid:!0,transparent:!1,faces:te(Wt.iron_ore),hardness:3,drop:12,needsTool:!0,tool:"pickaxe",minTier:2},{id:13,name:"furnace",solid:!0,transparent:!1,faces:Dr(Wt.furnace_front,Wt.cobblestone,Wt.cobblestone),hardness:3.5,drop:13,needsTool:!0,tool:"pickaxe"},{id:14,name:"torch",solid:!1,transparent:!0,faces:te(0),hardness:0,drop:14,needsTool:!1,tool:null,light:14},{id:15,name:"gravel",solid:!0,transparent:!1,faces:te(Wt.gravel),hardness:.6,drop:15,needsTool:!1,tool:"shovel"},{id:16,name:"grass_plant",solid:!1,transparent:!0,faces:te(Wt.grass_plant),hardness:0,drop:null,needsTool:!1,tool:null},{id:17,name:"tall_grass",solid:!1,transparent:!0,faces:te(Wt.grass_plant),hardness:0,drop:null,needsTool:!1,tool:null},{id:18,name:"obsidian",solid:!0,transparent:!1,faces:te(Wt.obsidian),hardness:50,drop:18,needsTool:!0,tool:"pickaxe",minTier:4},{id:19,name:"netherrack",solid:!0,transparent:!1,faces:te(Wt.netherrack),hardness:.4,drop:19,needsTool:!0,tool:"pickaxe"},{id:20,name:"soul_sand",solid:!0,transparent:!1,faces:te(Wt.soul_sand),hardness:.5,drop:20,needsTool:!1,tool:"shovel"},{id:21,name:"glowstone",solid:!0,transparent:!1,faces:te(Wt.glowstone),hardness:.3,drop:21,needsTool:!1,tool:null,light:15},{id:22,name:"nether_quartz_ore",solid:!0,transparent:!1,faces:te(Wt.nether_quartz_ore),hardness:3,drop:295,needsTool:!0,tool:"pickaxe",minTier:1},{id:23,name:"lava",solid:!1,transparent:!0,faces:te(Wt.lava),hardness:100,drop:null,needsTool:!1,tool:null,light:15},{id:24,name:"bedrock",solid:!0,transparent:!1,faces:te(Wt.bedrock),hardness:-1,drop:null,needsTool:!1,tool:null},{id:25,name:"nether_portal",solid:!1,transparent:!0,faces:te(Wt.nether_portal),hardness:-1,drop:null,needsTool:!1,tool:null,light:11},{id:26,name:"sandstone",solid:!0,transparent:!1,faces:te(Wt.sandstone),hardness:.8,drop:26,needsTool:!0,tool:"pickaxe"},{id:27,name:"cactus",solid:!0,transparent:!1,faces:te(Wt.cactus),hardness:.4,drop:27,needsTool:!1,tool:null},{id:28,name:"ice",solid:!0,transparent:!1,faces:te(Wt.ice),hardness:.5,drop:null,needsTool:!1,tool:"pickaxe"},{id:29,name:"snow_layer",solid:!1,transparent:!0,faces:te(Wt.snow),hardness:0,drop:null,needsTool:!1,tool:"shovel"},{id:30,name:"spruce_log",solid:!0,transparent:!1,faces:Dr(Wt.spruce_log,Wt.oak_log_top,Wt.oak_log_top),hardness:2,drop:30,needsTool:!1,tool:"axe"},{id:31,name:"spruce_leaves",solid:!0,transparent:!0,faces:te(Wt.spruce_leaves),hardness:.2,drop:null,needsTool:!1,tool:null},{id:32,name:"coal_block",solid:!0,transparent:!1,faces:te(Wt.coal_block),hardness:5,drop:32,needsTool:!0,tool:"pickaxe"},{id:33,name:"iron_block",solid:!0,transparent:!1,faces:te(Wt.iron_block),hardness:5,drop:33,needsTool:!0,tool:"pickaxe",minTier:2},{id:34,name:"quartz_block",solid:!0,transparent:!1,faces:te(Wt.quartz_block),hardness:.8,drop:34,needsTool:!0,tool:"pickaxe"},{id:35,name:"diamond_ore",solid:!0,transparent:!1,faces:te(Wt.diamond_ore),hardness:3,drop:Kw,needsTool:!0,tool:"pickaxe",minTier:3},{id:36,name:"diamond_block",solid:!0,transparent:!1,faces:te(Wt.diamond_block),hardness:5,drop:36,needsTool:!0,tool:"pickaxe",minTier:3}],om=3,nn=9,Qs=10,sl=6,jw=7,Zw=4,am=11,Qw=12,tc=13,es=14,qo=15,Jw=16,lm=17,Sn=18,t1=19,ec=5,cm=20,e1=21,n1=22,to=23,Rh=24,rl=25,i1=26,Hs=27,Js=28,Ch=29,ol=30,al=31,s1=32,r1=35,$c=i=>i===to,jn=i=>i===rl,_e=i=>{var t;return((t=Ie[i])==null?void 0:t.solid)??!1},li=i=>i===nn,Gd=i=>i===Qs||i===al,Ti=i=>i===Jw||i===lm||i===Ch,Vd=i=>_e(i)||Ti(i),Xd=i=>i===0||i===nn||Ti(i)||i===rl,Is=i=>{const t=Ie[i];return t?t.solid&&!t.transparent:!1},nc=(i,t)=>Ie[i].faces[t],hm=i=>{var t;return((t=Ie[i])==null?void 0:t.hardness)??0},o1=i=>{var t;return((t=Ie[i])==null?void 0:t.needsTool)??!1},a1=i=>{var t;return((t=Ie[i])==null?void 0:t.light)??0};function um(i,t){var n;const e=((n=Ie[i])==null?void 0:n.tool)??null;return t!==null&&e!==null&&t.kind===e}const dm=(i,t=null)=>{var e;return o1(i)?um(i,t)?t.tier>=(((e=Ie[i])==null?void 0:e.minTier)??1):!1:!0},l1=(i,t=null)=>{if(Ti(i))return 0;const e=Math.max(0,hm(i));if(e===0)return 0;const n=um(i,t)?t.speed:1,s=dm(i,t)?30:100;return Math.ceil(s*e/n)*50},c1=(i,t=null)=>{var e;return dm(i,t)?((e=Ie[i])==null?void 0:e.drop)??null:null},h1=i=>i===Hs,u1=i=>i===Js?.98:.6,qd=320,d1=.38,f1=.66;function fm(i,t,e){return Vs(i/130,t/130,e+4321,2)}function p1(i,t,e){return Vs(i/qd,t/qd,e+9001,3)}function Ws(i,t,e){const n=p1(i,t,e);return n<d1?"snow":n>f1?"desert":fm(i,t,e)>.62?"forest":"plains"}const Dh=1,m1=2,ic=3,Pr=5,g1=8,v1=12,_1=15,x1=16,y1=17,ee=116,M1=Ah(8,!0,!1);function w1(i,t,e){const n=He(i,t,e);return Math.abs(He(i+5,t,e)-n)<=3&&Math.abs(He(i-5,t,e)-n)<=3&&Math.abs(He(i,t+5,e)-n)<=3&&Math.abs(He(i,t-5,e)-n)<=3}function S1(i,t,e,n,s){const r=n-t;if(r<12)return!1;const o=i+(en(i/36,t/30,e/36,s+991)-.5)*26,a=t+(en(t/30,i/34,e/34,s+993)-.5)*22,l=e+(en(e/36,t/30,i/36,s+992)-.5)*26;return r<50?Math.abs(en(o/14,a/14,l/14,s+222)-.5)<.03:r<100?Math.abs(en(o/18,a/18,l/18,s+333)-.5)<.05?!0:en(o/22,a/22,l/22,s+700)<.07:en(o/26,a/26,l/26,s+700)<.07?!0:Math.abs(en(o/18,a/18,l/18,s+333)-.5)<.04}function sc(i,t,e,n){return en(i/5,t/5,e/5,n+303)>.82?_1:Dh}const b1=[{id:g1,attempts:20,size:17,minY:5,maxY:128,salt:2887841},{id:v1,attempts:20,size:9,minY:5,maxY:64,salt:2044082},{id:r1,attempts:1,size:8,minY:5,maxY:16,salt:5053075}],Yo=1,T1=(i,t,e)=>Math.max(t,Math.min(e,i));function E1(i,t,e,n,s){const r=sm(t,e,s,i+n.salt|0);return rm(Math.floor(r*4294967296))}function A1(i,t,e,n,s,r,o,a){const l=E1(r,n,s,o,a),c=n*Rt+l()*Rt,h=s*Rt+l()*Rt,u=o.minY+Math.floor(l()*(o.maxY-o.minY+1)),d=T1(u+Math.floor(l()*5)-2,o.minY,o.maxY),p=l()*Math.PI,g=o.size/8,v=c+Math.sin(p)*g,m=c-Math.sin(p)*g,f=h+Math.cos(p)*g,x=h-Math.cos(p)*g;for(let _=0;_<o.size;_++){const M=_/o.size,A=v+(m-v)*M,E=u+(d-u)*M,C=f+(x-f)*M,I=(Math.sin(Math.PI*M)+1)*l()*o.size/16+1,b=I/2,S=I*(.55+l()*.15)/2,P=b,X=Math.floor(A-b),V=Math.floor(A+b),tt=Math.max(o.minY,Math.floor(E-S)),nt=Math.min(o.maxY,pe-1,Math.floor(E+S)),Z=Math.floor(C-P),st=Math.floor(C+P);for(let $=X;$<=V;$++){if(Xt($)!==t)continue;const xt=($+.5-A)/b,Tt=xt*xt;if(!(Tt>=1))for(let gt=Z;gt<=st;gt++){if(Xt(gt)!==e)continue;const qt=(gt+.5-C)/P,Zt=Tt+qt*qt;if(!(Zt>=1))for(let K=tt;K<=nt;K++){const L=(K+.5-E)/S;if(Zt+L*L>=1)continue;const O=De($),N=De(gt);i.get(O,K,N)===Dh&&i.set(O,K,N,o.id)}}}}}function R1(i,t,e,n){for(const s of b1)for(let r=t-Yo;r<=t+Yo;r++)for(let o=e-Yo;o<=e+Yo;o++)for(let a=0;a<s.attempts;a++)A1(i,t,e,r,o,n,s,a)}function He(i,t,e){const n=Vs(i/260,t/260,e,4),s=Vs(i/72,t/72,e+17,3);let r;n<.46?r=90+n*56:n<.56?r=116+(n-.46)*80:r=124+(n-.56)*180;let o=r+(s-.5)*8;{const a=Vs(i/140,t/140,e+777,3),l=Math.abs(a-.5),c=.028+s*.022+Math.max(0,n-.54)*.4;if(l<c){let h=1-l/c;h=h*h*(3-2*h);const u=2+Math.floor(Vs(i/60,t/60,e+555,2)*3),d=ee-u;o=o*(1-h)+d*h}}return Math.floor(o)}const xi=2,C1=.08;function D1(i,t,e){const n=fm(i,t,e);return n<.45?.003:n>.62?.08:.003+(n-.45)/.17*.077}function P1(i,t,e){return 4+Math.floor(bn(i,t,e*31+5)*3)}function Yd(i,t,e,n,s,r,o,a=sl,l=Qs,c=!1){const h=r+P1(n,s,o),u=(p,g,v,m,f)=>{if(g<0||g>=pe||Xt(p)!==t||Xt(v)!==e)return;const x=De(p),_=De(v);f&&i.get(x,g,_)!==0||i.set(x,g,_,m)};if(c){const p=h+2,g=r+3;for(let v=g;v<=p;v++){const m=p-v,f=m===0?0:Math.min(2,Math.floor((m+1)/2));for(let x=-f;x<=f;x++)for(let _=-f;_<=f;_++)Math.abs(x)+Math.abs(_)>f||u(n+x,v,s+_,l,!0)}}else{for(const g of[-2,-1])for(let v=-2;v<=2;v++)for(let m=-2;m<=2;m++)Math.abs(v)===2&&Math.abs(m)===2||u(n+v,h+g,s+m,l,!0);for(let g=-1;g<=1;g++)for(let v=-1;v<=1;v++)u(n+g,h,s+v,l,!0);const p=[[0,0],[1,0],[-1,0],[0,1],[0,-1]];for(const[g,v]of p)u(n+g,h+1,s+v,l,!0)}const d=c?h+1:h;for(let p=r+1;p<=d;p++)u(n,p,s,a,!1)}const $o=127,L1=31;function k1(i,t,e){const n=new ao,s=e+7e4;for(let r=0;r<Rt;r++)for(let o=0;o<Rt;o++){const a=i*Rt+o,l=t*Rt+r;for(let c=0;c<=$o;c++){if(c<=1||c>=$o-1){n.set(o,c,r,Rh);continue}if(en(a/18,c/16,l/18,s+1)>.55||en(a/9,c/10,l/9,s+2)>.78){c<=L1&&n.set(o,c,r,to);continue}let u=t1;en(a/4,c/4,l/4,s+3)>.86?u=n1:en(a/10,c/10,l/10,s+4)>.9&&(u=cm),n.set(o,c,r,u)}if(bn(a,l,s+5)<.012){for(let c=$o-2;c>$o-7;c--)if(n.get(o,c,r)===0){n.set(o,c,r,e1);break}}}return n.dirty=!0,n}function pm(i,t,e,n="overworld"){if(n==="nether")return k1(i,t,e);const s=new ao;for(let a=0;a<Rt;a++)for(let l=0;l<Rt;l++){const c=i*Rt+l,h=t*Rt+a,u=He(c,h,e),d=Math.min(u,He(c+4,h,e),He(c-4,h,e),He(c,h+4,e),He(c,h-4,e)),p=w1(c,h,e),g=u<=ee+1,v=Ws(c,h,e);for(let m=0;m<=u;m++){const f=p&&en((c+m*.8)/8,m/120,(h+m*.6)/8,e+888)>.9;if(m>1&&(f||m<u&&S1(c,m,h,d,e)))continue;let x=Dh;m===0||m<=4&&en(c*.7,m*3.3,h*.7,e+4242)<(5-m)/5?x=Rh:g?m===u||m>=u-3?x=Pr:x=sc(c,m,h,e):v==="desert"?m===u||m>=u-3?x=Pr:m>=u-7?x=i1:x=sc(c,m,h,e):m===u?x=ic:m>=u-3?x=m1:x=sc(c,m,h,e),s.set(l,m,a,x)}for(let m=u+1;m<=ee;m++)s.set(l,m,a,nn),s.setFluid(l,m,a,M1);if(u<ee&&v==="snow"&&s.set(l,ee,a,Js),!g&&u>ee+1&&v==="snow"){const m=s.get(l,u,a),f=s.get(l,u+1,a);m===ic&&f===0&&bn(c+1,h+3,e*19+41)<.85&&s.set(l,u+1,a,Ch)}}R1(s,i,t,e);const r=i*Rt,o=t*Rt;for(let a=r-xi;a<r+Rt+xi;a++)for(let l=o-xi;l<o+Rt+xi;l++){const c=bn(a,l,e*13+7);if(c>=C1)continue;const h=He(a,l,e);if(h<=ee+1)continue;const u=Ws(a,l,e);u!=="plains"&&u!=="forest"||c<D1(a,l,e)&&Yd(s,i,t,a,l,h,e)}for(let a=r-xi;a<r+Rt+xi;a++)for(let l=o-xi;l<o+Rt+xi;l++){if(Ws(a,l,e)!=="snow")continue;const c=He(a,l,e);c<=ee+1||bn(a,l,e*17+3)>=.03||Yd(s,i,t,a,l,c,e,ol,al,!0)}for(let a=0;a<Rt;a++)for(let l=0;l<Rt;l++){const c=r+l,h=o+a;if(Ws(c,h,e)!=="desert")continue;const u=He(c,h,e);if(u<=ee+1||s.get(l,u,a)!==Pr||s.get(l,u+1,a)!==0||bn(c,h,e*11+53)>=.02)continue;const p=u+1;if(l>0&&(s.get(l-1,p,a)===Hs||_e(s.get(l-1,p,a)))||l<Rt-1&&(s.get(l+1,p,a)===Hs||_e(s.get(l+1,p,a)))||a>0&&(s.get(l,p,a-1)===Hs||_e(s.get(l,p,a-1)))||a<Rt-1&&(s.get(l,p,a+1)===Hs||_e(s.get(l,p,a+1))))continue;const g=1+Math.floor(bn(c*3,h*3,e*7+13)*3);for(let v=1;v<=g;v++){const m=u+v;if(m>=pe)break;s.set(l,m,a,Hs)}}for(let a=0;a<Rt;a++)for(let l=0;l<Rt;l++){const c=r+l,h=o+a,u=Ws(c,h,e);if(u!=="plains"&&u!=="forest")continue;const d=He(c,h,e);if(d<=ee+1||s.get(l,d,a)!==ic||s.get(l,d+1,a)!==0)continue;const p=bn(c,h,e*7+31);p>.4||s.set(l,d+1,a,p<.08?y1:x1)}return s.dirty=!0,s}const I1=ee+8/9;class U1{constructor(t=1,e=1,n={}){y(this,"camera",new Ke);y(this,"renderTarget");y(this,"planeY");y(this,"clipBias");y(this,"underwaterPlane",new kn);y(this,"underwaterPlanes");y(this,"airPlane",new kn);y(this,"airPlanes");y(this,"sourcePosition",new U);y(this,"sourceQuaternion",new Ni);y(this,"savedViewport",new ve);y(this,"savedScissor",new ve);this.planeY=n.planeY??I1,this.clipBias=Math.max(0,n.clipBias??.001),this.underwaterPlane.set(new U(0,-1,0),this.planeY-this.clipBias),this.underwaterPlanes=[this.underwaterPlane],this.airPlane.set(new U(0,1,0),-(this.planeY+this.clipBias)),this.airPlanes=[this.airPlane];const s=Math.max(1,Math.round(t)),r=Math.max(1,Math.round(e)),o=new el(s,r,Li);o.name="mineworld-planar-refraction-depth",this.renderTarget=new Nn(s,r,{type:Ii,minFilter:Te,magFilter:Te,generateMipmaps:!1,depthTexture:o,depthBuffer:!0,stencilBuffer:!1,samples:Math.max(0,Math.round(n.samples??0))}),this.renderTarget.texture.name="mineworld-planar-refraction",this.renderTarget.texture.colorSpace=pn,this.camera.layers.set(0)}get texture(){return this.renderTarget.texture}get depthTexture(){return this.renderTarget.depthTexture}resize(t,e){const n=Math.max(1,Math.round(t)),s=Math.max(1,Math.round(e));this.renderTarget.setSize(n,s),this.depthTexture.image.width=n,this.depthTexture.image.height=s}render(t,e,n,s,r,o="below"){this.updateCamera(n),this.camera.layers.set(0),o==="above"&&(this.camera.layers.enable(Xr),this.camera.layers.enable(Jr));const a=t.getRenderTarget();t.getViewport(this.savedViewport),t.getScissor(this.savedScissor);const l=t.getScissorTest(),c=t.xr.enabled,h=t.shadowMap.autoUpdate,u=t.shadowMap.needsUpdate,d=t.clippingPlanes,p=t.localClippingEnabled,g=t.getContext(),v=!!g.getParameter(g.DEPTH_WRITEMASK);try{s==null||s(this.camera,this.renderTarget),t.xr.enabled=!1,t.shadowMap.autoUpdate=!1,t.shadowMap.needsUpdate=!1,t.clippingPlanes=o==="above"?this.airPlanes:this.underwaterPlanes,t.localClippingEnabled=!1,t.setRenderTarget(this.renderTarget),t.setScissorTest(!1),t.state.buffers.depth.setMask(!0),t.clear(!0,!0,!1),t.render(e,this.camera)}finally{t.xr.enabled=c,t.shadowMap.autoUpdate=h,t.shadowMap.needsUpdate=u,t.clippingPlanes=d,t.localClippingEnabled=p,t.state.buffers.depth.setMask(v),t.setRenderTarget(a),t.setViewport(this.savedViewport),t.setScissor(this.savedScissor),t.setScissorTest(l),r==null||r(this.camera,this.renderTarget)}}dispose(){this.renderTarget.dispose()}updateCamera(t){t.updateWorldMatrix(!0,!1),t.getWorldPosition(this.sourcePosition),t.getWorldQuaternion(this.sourceQuaternion),this.camera.position.copy(this.sourcePosition),this.camera.quaternion.copy(this.sourceQuaternion),this.camera.up.copy(t.up),this.camera.updateMatrixWorld(!0),this.camera.near=t.near,this.camera.far=t.far,this.camera.fov=t.fov,this.camera.aspect=t.aspect,this.camera.zoom=t.zoom,this.camera.focus=t.focus,this.camera.filmGauge=t.filmGauge,this.camera.filmOffset=t.filmOffset,this.camera.view=t.view===null?null:{...t.view},this.camera.coordinateSystem=t.coordinateSystem,this.camera.projectionMatrix.copy(t.projectionMatrix),this.camera.projectionMatrixInverse.copy(t.projectionMatrixInverse)}}const N1=ee+8/9,F1=new fe().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);class O1{constructor(t=1,e=1,n={}){y(this,"camera",new Ke);y(this,"textureMatrix",new fe);y(this,"renderTarget");y(this,"planeY");y(this,"clipBias");y(this,"overscan");y(this,"plane",new kn);y(this,"cameraPlane",new kn);y(this,"planeNormal",new U(0,1,0));y(this,"sourcePosition",new U);y(this,"reflectedPosition",new U);y(this,"reflectedDirection",new U);y(this,"reflectedUp",new U);y(this,"lookTarget",new U);y(this,"sourceQuaternion",new Ni);y(this,"clipPlane",new ve);y(this,"clipCorner",new ve);y(this,"savedViewport",new ve);y(this,"savedScissor",new ve);this.planeY=n.planeY??N1,this.clipBias=n.clipBias??.001,this.overscan=si.clamp(n.overscan??1.08,1,1.2),this.plane.set(this.planeNormal,-this.planeY),this.renderTarget=new Nn(Math.max(1,Math.round(t)),Math.max(1,Math.round(e)),{type:Ii,minFilter:Te,magFilter:Te,generateMipmaps:!1,depthBuffer:!0,stencilBuffer:!1,samples:Math.max(0,Math.round(n.samples??4))}),this.renderTarget.texture.name="mineworld-planar-reflection",this.renderTarget.texture.colorSpace=pn,this.camera.layers.set(0),this.camera.layers.enable(Jr)}get texture(){return this.renderTarget.texture}resize(t,e){this.renderTarget.setSize(Math.max(1,Math.round(t)),Math.max(1,Math.round(e)))}render(t,e,n,s,r){this.updateCamera(n);const o=t.getRenderTarget();t.getViewport(this.savedViewport),t.getScissor(this.savedScissor);const a=t.getScissorTest(),l=t.xr.enabled,c=t.shadowMap.autoUpdate,h=t.shadowMap.needsUpdate,u=t.getContext(),d=!!u.getParameter(u.DEPTH_WRITEMASK);try{s==null||s(this.camera,this.renderTarget),t.xr.enabled=!1,t.shadowMap.autoUpdate=!1,t.shadowMap.needsUpdate=!1,t.setRenderTarget(this.renderTarget),t.setScissorTest(!1),t.state.buffers.depth.setMask(!0),t.clear(!0,!0,!1),t.render(e,this.camera)}finally{t.xr.enabled=l,t.shadowMap.autoUpdate=c,t.shadowMap.needsUpdate=h,t.state.buffers.depth.setMask(d),t.setRenderTarget(o),t.setViewport(this.savedViewport),t.setScissor(this.savedScissor),t.setScissorTest(a),r==null||r(this.camera,this.renderTarget)}}dispose(){this.renderTarget.dispose()}updateCamera(t){t.updateWorldMatrix(!0,!1),t.getWorldPosition(this.sourcePosition),t.getWorldQuaternion(this.sourceQuaternion),this.reflectedPosition.copy(this.sourcePosition).addScaledVector(this.planeNormal,-2*this.plane.distanceToPoint(this.sourcePosition)),this.reflectedDirection.set(0,0,-1).applyQuaternion(this.sourceQuaternion).reflect(this.planeNormal),this.reflectedUp.set(0,1,0).applyQuaternion(this.sourceQuaternion).reflect(this.planeNormal),this.camera.position.copy(this.reflectedPosition),this.camera.up.copy(this.reflectedUp),this.lookTarget.copy(this.reflectedPosition).add(this.reflectedDirection),this.camera.lookAt(this.lookTarget),this.camera.updateMatrixWorld(!0),this.camera.near=t.near,this.camera.far=t.far,this.camera.fov=t.fov,this.camera.aspect=t.aspect,this.camera.zoom=t.zoom,this.camera.focus=t.focus,this.camera.filmGauge=t.filmGauge,this.camera.filmOffset=t.filmOffset,this.camera.projectionMatrix.copy(t.projectionMatrix),this.camera.projectionMatrix.elements[0]/=this.overscan,this.camera.projectionMatrix.elements[5]/=this.overscan,this.applyObliqueNearPlane(),this.camera.projectionMatrixInverse.copy(this.camera.projectionMatrix).invert(),this.textureMatrix.copy(F1).multiply(this.camera.projectionMatrix).multiply(this.camera.matrixWorldInverse)}applyObliqueNearPlane(){this.cameraPlane.copy(this.plane).applyMatrix4(this.camera.matrixWorldInverse),this.clipPlane.set(this.cameraPlane.normal.x,this.cameraPlane.normal.y,this.cameraPlane.normal.z,this.cameraPlane.constant);const e=this.camera.projectionMatrix.elements;this.clipCorner.set((Math.sign(this.clipPlane.x)+e[8])/e[0],(Math.sign(this.clipPlane.y)+e[9])/e[5],-1,(1+e[10])/e[14]);const n=this.clipPlane.dot(this.clipCorner);Math.abs(n)<1e-7||(this.clipPlane.multiplyScalar(2/n),e[2]=this.clipPlane.x,e[6]=this.clipPlane.y,e[10]=this.clipPlane.z+1-this.clipBias,e[14]=this.clipPlane.w)}}const B1=`
varying vec3 vSkyDir;
void main() {
  vSkyDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`.trim(),z1=`
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
`.trim();class H1{constructor(t){y(this,"scene",new hr);y(this,"camera");y(this,"gl");y(this,"viewportW",1);y(this,"viewportH",1);y(this,"resizeQueued",!1);y(this,"onViewportChange",()=>{this.resizeQueued||(this.resizeQueued=!0,requestAnimationFrame(()=>{this.resizeQueued=!1,this.resize()}))});y(this,"skyDome");y(this,"skyUniforms",{uSkyTop:{value:new bt},uSkyHorizon:{value:new bt},uSunDir:{value:new U(1,0,.1).normalize()},uWarmth:{value:0},uSunVisible:{value:1}});y(this,"lastSky","");y(this,"rt",null);y(this,"planarRefraction",null);y(this,"waterRefractionSink",null);y(this,"planarReflection",null);y(this,"waterReflectionSink",null);y(this,"waterCapturesEnabled",!0);y(this,"godStd",new Hd(24));y(this,"godHigh",new Hd(48));y(this,"god",null);y(this,"underwaterTarget",0);y(this,"underwaterAmount",0);y(this,"waterIrradiance",new bt(.04,.18,.26));y(this,"bloom",null);y(this,"ssao",null);var s,r;this.gl=new $p({canvas:t,antialias:!0}),this.gl.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.gl.toneMapping=oi,this.gl.shadowMap.enabled=!0,this.gl.shadowMap.type=vp,this.gl.shadowMap.autoUpdate=!1;const e=new Sh(750,32,24),n=new je({uniforms:this.skyUniforms,vertexShader:B1,fragmentShader:z1,side:ze,depthWrite:!1});this.skyDome=new Jt(e,n),this.skyDome.layers.set(Jr),this.skyDome.frustumCulled=!1,this.skyDome.renderOrder=-1e3,this.scene.add(this.skyDome),this.setSkyColors([.3,.52,.79],[.81,.9,.97]),this.scene.fog=new cr(tm,30,110),this.camera=new Ke(70,1,.1,1e3),this.camera.layers.enable(Eh),this.camera.layers.enable(Xr),this.camera.layers.enable(Jr),this.camera.layers.enable(oo),this.resize(),window.addEventListener("resize",this.onViewportChange),window.addEventListener("orientationchange",this.onViewportChange),(s=window.visualViewport)==null||s.addEventListener("resize",this.onViewportChange),(r=window.visualViewport)==null||r.addEventListener("scroll",this.onViewportChange)}setSkyColors(t,e,n=0,s=0,r=0,o=!0){const a=`${t.join()}|${e.join()}|${Math.round(n*80)}|${Math.round(s*40)}|${Math.round(r*80)}|${o?1:0}`;a!==this.lastSky&&(this.lastSky=a,this.skyUniforms.uSkyTop.value.setRGB(t[0],t[1],t[2],ae),this.skyUniforms.uSkyHorizon.value.setRGB(e[0],e[1],e[2],ae),this.skyUniforms.uSunDir.value.set(Math.cos(n),r,.1).normalize(),this.skyUniforms.uWarmth.value=si.clamp(s,0,1),this.skyUniforms.uSunVisible.value=o?1:0,this.waterIrradiance.copy(this.skyUniforms.uSkyHorizon.value).lerp(this.skyUniforms.uSkyTop.value,.2).multiply(new bt(.78,1.08,1.16)))}resize(){const{width:t,height:e}=em(window);if(this.viewportW=t,this.viewportH=e,this.gl.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.rt!==null&&(this.rt.dispose(),this.rt=this.buildRT(t,e)),this.planarRefraction!==null){const n=this.gl.getPixelRatio();this.planarRefraction.resize(Math.max(1,Math.round(t*n)),Math.max(1,Math.round(e*n))),this.publishRefractionTarget()}if(this.planarReflection!==null){const n=this.gl.getPixelRatio();this.planarReflection.resize(Math.max(1,Math.round(t*n)),Math.max(1,Math.round(e*n))),this.publishReflectionTarget()}if(this.bloom!==null){const n=this.gl.getPixelRatio();this.bloom.setSize(Math.max(1,Math.round(t*n/4)),Math.max(1,Math.round(e*n/4)))}if(this.ssao!==null){const n=this.gl.getPixelRatio();this.ssao.setSize(Math.max(1,Math.round(t*n/2)),Math.max(1,Math.round(e*n/2)))}}markShadowDirty(){this.gl.shadowMap.needsUpdate=!0}setWaterRefractionSink(t){this.waterRefractionSink=t,this.publishRefractionTarget()}setWaterReflectionSink(t){this.waterReflectionSink=t,this.publishReflectionTarget()}setWaterCapturesEnabled(t){var e,n,s,r;t!==this.waterCapturesEnabled&&(this.waterCapturesEnabled=t,t?((s=this.waterRefractionSink)==null||s.call(this,null,null,1,1,this.underwaterAmount),(r=this.waterReflectionSink)==null||r.call(this,null,null,1,1),this.god!==null&&this.ensureWaterCaptureTargets()):((e=this.planarRefraction)==null||e.dispose(),this.planarRefraction=null,(n=this.planarReflection)==null||n.dispose(),this.planarReflection=null,this.publishRefractionTarget(),this.publishReflectionTarget()))}setGodRays(t){if(t===null||t.quality==="off"){this.rt!==null&&(this.rt.dispose(),this.rt=null),this.planarRefraction!==null&&(this.planarRefraction.dispose(),this.planarRefraction=null),this.publishRefractionTarget(),this.planarReflection!==null&&(this.planarReflection.dispose(),this.planarReflection=null),this.publishReflectionTarget(),this.bloom!==null&&(this.bloom.dispose(),this.bloom=null),this.ssao!==null&&(this.ssao.dispose(),this.ssao=null),this.god=null;return}if(this.rt===null&&(this.rt=this.buildRT(this.viewportW,this.viewportH)),this.ensureWaterCaptureTargets(),this.bloom===null){const e=this.gl.getPixelRatio(),n=this.viewportW,s=this.viewportH;this.bloom=new Vw(Math.max(1,Math.round(n*e/4)),Math.max(1,Math.round(s*e/4)))}this.god=t}setUnderwater(t){this.underwaterTarget=t?1:0}render(){if(this.skyDome.position.copy(this.camera.position),this.underwaterAmount+=(this.underwaterTarget-this.underwaterAmount)*.16,this.god===null||this.rt===null||this.bloom===null){this.gl.render(this.scene,this.camera);return}if(this.waterCapturesEnabled&&this.planarReflection!==null&&this.camera.position.y>this.planarReflection.planeY+.05?(this.planarReflection.render(this.gl,this.scene,this.camera,n=>this.skyDome.position.copy(n.position),()=>this.skyDome.position.copy(this.camera.position)),this.publishReflectionTarget(!0)):this.publishReflectionTarget(!1),this.waterCapturesEnabled&&this.planarRefraction!==null){const n=this.scene.fog;this.scene.fog=null;try{this.planarRefraction.render(this.gl,this.scene,this.camera,void 0,void 0,this.underwaterTarget>.5?"above":"below")}finally{this.scene.fog=n}this.publishRefractionTarget()}this.gl.setRenderTarget(this.rt),this.gl.clear(),this.gl.render(this.scene,this.camera),this.bloom.render(this.gl,this.rt.texture),this.ssao!==null&&this.ssao.render(this.gl,this.rt.depthTexture,this.camera);const t=this.god.quality==="high"?this.godHigh:this.godStd,e=t.material.uniforms;e.tColor.value=this.rt.texture,e.tDepth.value=this.rt.depthTexture,e.tBloom.value=this.bloom.texture,e.uSunUV.value.copy(this.god.sunUV),e.uIntensity.value=this.god.intensity,e.uSunColor.value.copy(this.god.sunColor),e.uBloom.value=this.god.quality==="high"?.68:.5,e.uUnderwater.value=this.underwaterAmount,e.uWaterIrradiance.value.copy(this.waterIrradiance),this.ssao!==null?(e.tAO.value=this.ssao.texture,e.uAO.value=this.god.quality==="high"?.55:.4):(e.tAO.value=null,e.uAO.value=0),t.render(this.gl)}renderOverlay(t,e){this.gl.autoClear=!1,this.gl.clearDepth(),this.gl.render(t,e),this.gl.autoClear=!0}buildRT(t,e){const n=this.gl.getPixelRatio(),s=Math.max(1,Math.round(t*n)),r=Math.max(1,Math.round(e*n)),o=new el(s,r);return o.type=Li,new Nn(s,r,{type:Ii,depthTexture:o,depthBuffer:!0,samples:4})}publishRefractionTarget(){if(this.waterRefractionSink){if(!this.waterCapturesEnabled||!this.planarRefraction){this.waterRefractionSink(null,null,1,1,this.underwaterAmount);return}this.waterRefractionSink(this.planarRefraction.texture,this.planarRefraction.depthTexture,this.planarRefraction.renderTarget.width,this.planarRefraction.renderTarget.height,this.underwaterAmount)}}ensureWaterCaptureTargets(){if(!this.waterCapturesEnabled)return;const t=this.gl.getPixelRatio(),e=Math.max(1,Math.round(this.viewportW*t)),n=Math.max(1,Math.round(this.viewportH*t));this.planarRefraction===null&&(this.planarRefraction=new U1(e,n)),this.planarReflection===null&&(this.planarReflection=new O1(e,n))}publishReflectionTarget(t=!0){if(this.waterReflectionSink){if(!t||!this.waterCapturesEnabled||!this.planarReflection){this.waterReflectionSink(null,null,1,1);return}this.waterReflectionSink(this.planarReflection.texture,this.planarReflection.textureMatrix,this.planarReflection.renderTarget.width,this.planarReflection.renderTarget.height)}}}function W1(i){return new Worker("/mineworld/assets/chunkGen.worker-CSpXbyWk.js",{name:i==null?void 0:i.name})}const $d=()=>typeof performance<"u"?performance.now():Date.now(),G1=4;class mm{constructor(t,e="overworld"){y(this,"chunks",new Map);y(this,"pending",new Set);y(this,"pendingSince",new Map);y(this,"genFails",new Map);y(this,"workers",[]);y(this,"rr",0);y(this,"editHook",null);if(this.seed=t,this.dimension=e,typeof Worker<"u"){const n=typeof navigator<"u"&&navigator.hardwareConcurrency||4,s=Math.max(1,Math.min(4,n));for(let r=0;r<s;r++){const o=new W1;o.onmessage=a=>{var v;const{cx:l,cz:c,blocks:h,fluid:u,error:d}=a.data,p=this.key(l,c);if(this.pending.delete(p),this.pendingSince.delete(p),d){const m=(this.genFails.get(p)??0)+1;this.genFails.set(p,m),console.warn(`[chunkgen] 区块(${l},${c}) 生成失败 #${m}: ${d.split(`
`)[0]}`);return}if(this.genFails.delete(p),this.chunks.has(p)||!h||!u)return;const g=ao.fromBuffers(h,u);(v=this.editHook)==null||v.call(this,l,c,g),g.dirty=!0,this.chunks.set(p,g)},o.onerror=a=>{console.error("[chunkgen worker] 致命错误(整个 worker 挂了，会拖慢加载):",a.message)},this.workers.push(o)}}}key(t,e){return`${t},${e}`}dispose(){for(const t of this.workers)t.terminate();this.workers.length=0,this.chunks.clear(),this.pending.clear(),this.pendingSince.clear(),this.genFails.clear(),this.editHook=null}hasChunk(t,e){return this.chunks.has(this.key(t,e))}request(t,e){const n=this.key(t,e);if(!(this.chunks.has(n)||this.pending.has(n))&&!((this.genFails.get(n)??0)>=3)){if(this.workers.length===0){this.getChunk(t,e);return}this.pending.add(n),this.pendingSince.set(n,$d()),this.workers[this.rr].postMessage({cx:t,cz:e,seed:this.seed,dimension:this.dimension}),this.rr=(this.rr+1)%this.workers.length}}retryStuckGen(t=8e3){const e=$d();for(const[n,s]of this.pendingSince)e-s>t&&(this.pending.delete(n),this.pendingSince.delete(n),console.warn(`[chunkgen] 区块 ${n} 生成 ${Math.round((e-s)/1e3)}s 未回(worker 丢消息?) → 重试`))}peek(t,e){return this.chunks.get(this.key(t,e))}evictBeyond(t,e,n){const s=[];for(const r of[...this.chunks.keys()]){const o=r.indexOf(","),a=+r.slice(0,o),l=+r.slice(o+1);(Math.abs(a-t)>n||Math.abs(l-e)>n)&&this.chunks.delete(r)&&s.push(r)}return s}getChunk(t,e){var r;const n=this.key(t,e);let s=this.chunks.get(n);return s||(s=pm(t,e,this.seed,this.dimension),(r=this.editHook)==null||r.call(this,t,e,s),this.chunks.set(n,s),this.pending.delete(n)),s}getBlock(t,e,n){return e<0||e>=pe?0:this.getChunk(Xt(t),Xt(n)).get(De(t),e,De(n))}setBlock(t,e,n,s){if(e<0||e>=pe)return;const r=Xt(t),o=Xt(n),a=De(t),l=De(n),c=this.getChunk(r,o);c.set(a,e,l,s),s!==nn&&c.setFluid(a,e,l,0),c.dirty=!0,this.markNeighborsDirty(r,o,a,l,8)}fluidByte(t,e,n){return e<0||e>=pe?0:this.getChunk(Xt(t),Xt(n)).getFluid(De(t),e,De(n))}waterAmount(t,e,n){return this.getBlock(t,e,n)!==nn?0:Wd(this.fluidByte(t,e,n))}isWaterSource(t,e,n){return this.getBlock(t,e,n)===nn&&Xw(this.fluidByte(t,e,n))}isWaterFalling(t,e,n){return this.getBlock(t,e,n)===nn&&qw(this.fluidByte(t,e,n))}setWater(t,e,n,s,r,o){if(e<0||e>=pe)return;const a=Xt(t),l=Xt(n),c=De(t),h=De(n),u=this.getChunk(a,l),d=u.get(c,e,h)===nn&&Wd(u.getFluid(c,e,h))>0;s<=0?(u.get(c,e,h)===nn&&u.set(c,e,h,0),u.setFluid(c,e,h,0)):(u.set(c,e,h,nn),u.setFluid(c,e,h,Ah(s,r,o))),u.dirty=!0;const p=s>0;this.markNeighborsDirty(a,l,c,h,d!==p?G1:1)}markNeighborsDirty(t,e,n,s,r=1){const o=n<r,a=n>15-r,l=s<r,c=s>15-r;o&&this.markDirty(t-1,e),a&&this.markDirty(t+1,e),l&&this.markDirty(t,e-1),c&&this.markDirty(t,e+1),o&&l&&this.markDirty(t-1,e-1),o&&c&&this.markDirty(t-1,e+1),a&&l&&this.markDirty(t+1,e-1),a&&c&&this.markDirty(t+1,e+1)}markDirty(t,e){const n=this.chunks.get(this.key(t,e));n&&(n.dirty=!0)}}function Kd(i,t,e,n){let s=Math.floor(i.x),r=Math.floor(i.y),o=Math.floor(i.z);const a=Math.sign(t.x),l=Math.sign(t.y),c=Math.sign(t.z),h=t.x!==0?Math.abs(1/t.x):1/0,u=t.y!==0?Math.abs(1/t.y):1/0,d=t.z!==0?Math.abs(1/t.z):1/0,p=(x,_)=>_>0?Math.floor(x)+1-x:_<0?x-Math.floor(x):1/0;let g=t.x!==0?p(i.x,a)*h:1/0,v=t.y!==0?p(i.y,l)*u:1/0,m=t.z!==0?p(i.z,c)*d:1/0;if(n(s,r,o))return{x:s,y:r,z:o,nx:0,ny:0,nz:0};let f=0;for(let x=0;x<256;x++){let _=0,M=0,A=0;if(g<v&&g<m?(s+=a,f=g,g+=h,_=-a):v<m?(r+=l,f=v,v+=u,M=-l):(o+=c,f=m,m+=d,A=-c),f>e)break;if(n(s,r,o))return{x:s,y:r,z:o,nx:_,ny:M,nz:A}}return null}const V1=new Set([sl,ol]),jd=new Set([Qs,al]),rc=4,X1=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Ko=(i,t,e)=>`${i},${t},${e}`;function q1(i,t,e,n,s=rc){const r=s+rc,o=new Map,a=[];for(let c=t-r;c<=t+r;c++)for(let h=e-r;h<=e+r;h++)for(let u=n-r;u<=n+r;u++)V1.has(i(c,h,u))&&(o.set(Ko(c,h,u),0),a.push({x:c,y:h,z:u}));for(let c=0;c<a.length;c++){const h=a[c],u=o.get(Ko(h.x,h.y,h.z))??0;if(!(u>=rc))for(const[d,p,g]of X1){const v=h.x+d,m=h.y+p,f=h.z+g;if(!jd.has(i(v,m,f)))continue;const x=Ko(v,m,f);o.has(x)||(o.set(x,u+1),a.push({x:v,y:m,z:f}))}}const l=[];for(let c=t-s;c<=t+s;c++)for(let h=e-s;h<=e+s;h++)for(let u=n-s;u<=n+s;u++)jd.has(i(c,h,u))&&!o.has(Ko(c,h,u))&&l.push({x:c,y:h,z:u});return l}const Y1="mtqfe8hj";function yr(i){return`/mineworld/${i}?v=${Y1}`}const Zd=new Map;function Kc(i="classic"){const t=Zd.get(i);if(t)return t;const e=i==="classic"?"textures/atlas_classic.png":"textures/atlas.png",n=new xr().load(yr(e));return n.magFilter=de,n.minFilter=ph,n.generateMipmaps=!0,n.colorSpace=ae,Zd.set(i,n),n}function $1(){const i=new xr().load(yr("textures/torch_block.png"));return i.magFilter=de,i.minFilter=de,i.generateMipmaps=!1,i.colorSpace=ae,i}function K1(i){const t=new xr,e=[];for(let n=0;n<i;n++){const s=t.load(yr(`textures/blocks/water_${n}.png`));s.magFilter=de,s.minFilter=ph,s.generateMipmaps=!0,s.colorSpace=ae,s.wrapS=_n,s.wrapT=_n,e.push(s)}return e}const Yr={volume:70,lightingQuality:"standard",texturePack:"classic",renderDistance:6},jc="mineworld.settings",Ph=3,j1=["off","standard","high"];function gm(i){const t=i??{},e=typeof t.volume=="number"&&isFinite(t.volume)?Math.max(0,Math.min(100,Math.round(t.volume))):Yr.volume;let n;typeof t.lightingQuality=="string"&&j1.includes(t.lightingQuality)?n=t.lightingQuality:typeof t.shaders=="boolean"?n=t.shaders?"high":"standard":n=Yr.lightingQuality;const s=t.texturePack==="cartoon"?"cartoon":"classic",r=typeof t.renderDistance=="number"&&isFinite(t.renderDistance)?Math.max(3,Math.min(12,Math.round(t.renderDistance))):Yr.renderDistance;return{volume:e,lightingQuality:n,texturePack:s,renderDistance:r}}function Z1(i){const t=gm(i);return(i??{}).textureStyleVersion===Ph?t:{...t,texturePack:"classic"}}function vm(){try{const i=localStorage.getItem(jc);if(!i)return{...Yr};const t=JSON.parse(i),e=Z1(t);return localStorage.setItem(jc,JSON.stringify({...e,textureStyleVersion:Ph})),e}catch{return{...Yr}}}function Q1(i){try{localStorage.setItem(jc,JSON.stringify({...gm(i),textureStyleVersion:Ph}))}catch{}}const _m=15,xm=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function J1(i,t,e,n){const s=n??(()=>0),r=new Uint8Array(i*t*i),o=(l,c,h)=>l+h*i+c*i*i,a=[];for(let l=0;l<i;l++)for(let c=0;c<i;c++){let h=_m;for(let u=t-1;u>=0&&!e(c,u,l);u--){h=Math.max(0,h-s(c,u,l));const d=o(c,u,l);r[d]=h,h>0&&a.push(d)}}for(let l=0;l<a.length;l++){const c=a[l],h=r[c];if(h<=1)continue;const u=c/(i*i)|0,d=c-u*i*i,p=d/i|0,g=d-p*i;for(const[v,m,f]of xm){const x=g+v,_=u+m,M=p+f;if(x<0||x>=i||_<0||_>=t||M<0||M>=i||e(x,_,M))continue;const A=h-1-s(x,_,M);if(A<=0)continue;const E=o(x,_,M);r[E]>=A||(r[E]=A,a.push(E))}}return r}function tS(i,t,e,n,s){const r=s??(()=>0),o=new Uint8Array(i*t*i),a=(c,h,u)=>c+u*i+h*i*i,l=[];for(let c=0;c<t;c++)for(let h=0;h<i;h++)for(let u=0;u<i;u++){const d=e(u,c,h);if(d>0){const p=a(u,c,h);d>o[p]&&(o[p]=Math.min(_m,d),l.push(p))}}for(let c=0;c<l.length;c++){const h=l[c],u=o[h];if(u<=1)continue;const d=h/(i*i)|0,p=h-d*i*i,g=p/i|0,v=p-g*i;for(const[m,f,x]of xm){const _=v+m,M=d+f,A=g+x;if(_<0||_>=i||M<0||M>=t||A<0||A>=i||n(_,M,A))continue;const E=u-1-r(_,M,A);if(E<=0)continue;const C=a(_,M,A);o[C]>=E||(o[C]=E,l.push(C))}}return o}const Pn=4,jo=10,eS=16,Zo=2,nS=4,Qd=[.6,.6,1,.5,.8,.8],wi=[{n:[1,0,0],o:[1,0,0],c:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],uv:[[0,0],[0,1],[1,1],[1,0]]},{n:[-1,0,0],o:[-1,0,0],c:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,1,0],o:[0,1,0],c:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],uv:[[0,0],[0,1],[1,1],[1,0]]},{n:[0,-1,0],o:[0,-1,0],c:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,1],o:[0,0,1],c:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,-1],o:[0,0,-1],c:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],uv:[[0,0],[0,1],[1,1],[1,0]]}],iS=[.5,.7,.86,1];function sS(i,t,e){return i&&t?0:3-(Number(i)+Number(t)+Number(e))}const ym=[{u:[0,1,0],v:[0,0,1],ui:1,vi:2},{u:[0,1,0],v:[0,0,1],ui:1,vi:2},{u:[1,0,0],v:[0,0,1],ui:0,vi:2},{u:[1,0,0],v:[0,0,1],ui:0,vi:2},{u:[1,0,0],v:[0,1,0],ui:0,vi:1},{u:[1,0,0],v:[0,1,0],ui:0,vi:1}];function rS(i,t,e,n,s,r){const o=wi[s],a=ym[s],l=o.c[r],c=l[a.ui]===1?1:-1,h=l[a.vi]===1?1:-1,u=t+o.n[0],d=e+o.n[1],p=n+o.n[2],g=i(u+c*a.u[0],d+c*a.u[1],p+c*a.u[2]),v=i(u+h*a.v[0],d+h*a.v[1],p+h*a.v[2]),m=i(u+c*a.u[0]+h*a.v[0],d+c*a.u[1]+h*a.v[1],p+c*a.u[2]+h*a.v[2]);return iS[sS(g,v,m)]}const Lr=()=>({P:[],U:[],C:[],I:[],L:[],UW:[],WT:[],T:[],TF:[],SH:[],WO:[],SW:[]}),kr=i=>{const t=i.P.length/3;return{positions:new Float32Array(i.P),uvs:new Float32Array(i.U),colors:new Float32Array(i.C),indices:t<=65535?new Uint16Array(i.I):new Uint32Array(i.I),light:new Float32Array(i.L),underwater:i.UW.length?new Float32Array(i.UW):void 0,wetness:i.WT.length?new Float32Array(i.WT):void 0,top:i.T.length?new Float32Array(i.T):void 0,topFace:i.TF.length?new Float32Array(i.TF):void 0,shore:i.SH.length?new Float32Array(i.SH):void 0,waveOpen:i.WO.length?new Float32Array(i.WO):void 0,sway:i.SW.length?new Float32Array(i.SW):void 0}};function oS(i,t,e,n){const s=i*Rt,r=t*Rt,o=Lr(),a=Lr(),l=Lr(),c=Lr(),h=Lr(),u=.01/(eS*Pn),d=1/Pn-2*u,p=1/jo-2*u,g=(L,O,N)=>Is(e(L,O,N)),v=8,m=Rt+2*v,f=(L,O,N)=>{const j=e(s+L-v,O,r+N-v);return li(j)||Gd(j)?1:0},x=J1(m,pe,(L,O,N)=>g(s+L-v,O,r+N-v),f),_=tS(m,pe,(L,O,N)=>a1(e(s+L-v,O,r+N-v)),(L,O,N)=>g(s+L-v,O,r+N-v),f),M=(L,O,N)=>O>=pe?15:O<0?0:x[L+v+(N+v)*m+O*m*m],A=(L,O,N)=>O>=pe||O<0?0:_[L+v+(N+v)*m+O*m*m],E=(L,O,N)=>{let j=0;for(let q=O;q<pe&&j<8&&n(L,q,N)>0;q++)j++;return j},C=new Map,I=(L,O,N)=>{const j=Math.round(L-s),q=Math.round(N-r),H=j+q*17+Math.round(O)*17*17,D=C.get(H);if(D!==void 0)return D;const mt=Math.floor(L),vt=Math.floor(O-.001),Et=Math.floor(N);let rt=99;for(let yt=vt-1;yt<=vt;yt++)for(let Ut=-2;Ut<=2;Ut++)for(let R=-2;R<=2;R++){const w=n(mt+R,yt,Et+Ut);if(w<=0)continue;const z=yt+Math.min(1,w/9),Y=Math.abs(z-O);if(Y>1.05)continue;const Q=Math.hypot(mt+R+.5-L,Et+Ut+.5-N);rt=Math.min(rt,Q+Y*.35)}const ct=Math.max(0,Math.min(1,(rt-.35)/2)),ft=1-ct*ct*(3-2*ct);return C.set(H,ft),ft},b=(L,O,N,j,q)=>{const H=ym[j],D=wi[j].c[q],mt=D[H.ui]===1?1:-1,vt=D[H.vi]===1?1:-1,Et=L+mt*H.u[0],rt=O+mt*H.u[1],ct=N+mt*H.u[2],ft=L+vt*H.v[0],yt=O+vt*H.v[1],Ut=N+vt*H.v[2],R=Et+vt*H.v[0],w=rt+vt*H.v[1],z=ct+vt*H.v[2],Y=g(s+Et,rt,r+ct),Q=g(s+ft,yt,r+Ut),et=g(s+R,w,r+z);let Mt=M(L,O,N),at=A(L,O,N),lt=1;return Y||(Mt+=M(Et,rt,ct),at+=A(Et,rt,ct),lt++),Q||(Mt+=M(ft,yt,Ut),at+=A(ft,yt,Ut),lt++),!(Y&&Q)&&!et&&(Mt+=M(R,w,z),at+=A(R,w,z),lt++),[Mt/lt/15,at/lt/15]},S=(L,O,N,j,q,H)=>{const D=wi[H],mt=nc(q,H),vt=mt%Pn/Pn+u,Et=1-(Math.floor(mt/Pn)+1)/jo+u,rt=Qd[H],ct=O+D.o[0],ft=N+D.o[1],yt=j+D.o[2],Ut=L===o?E(s+ct,ft,r+yt):0,R=L.P.length/3,w=[0,0,0,0];for(let z=0;z<4;z++){const Y=D.c[z];w[z]=rS(g,s+O,N,r+j,H,z);const Q=rt*w[z],[et,Mt]=b(ct,ft,yt,H,z);if(L.P.push(O+Y[0],N+Y[1],j+Y[2]),L.U.push(vt+D.uv[z][0]*d,Et+D.uv[z][1]*p),L.C.push(Q,Q,Q),L.L.push(et,Mt),L===o){L.UW.push(Ut);const at=s+O+Y[0],lt=N+Y[1],Gt=r+j+Y[2];L.WT.push(Ut>0?1:I(at,lt,Gt))}}w[0]+w[2]>w[1]+w[3]?L.I.push(R,R+1,R+2,R,R+2,R+3):L.I.push(R+1,R+2,R+3,R+1,R+3,R),L===l&&L.SW.push(1,1,1,1)},P=(L,O,N)=>{const j=L+.5,q=O+.5,H=.28,D=.92,mt=[[[j-H,N,q],[j+H,N,q],[j+H,N+D,q],[j-H,N+D,q]],[[j,N,q-H],[j,N,q+H],[j,N+D,q+H],[j,N+D,q-H]]],vt=[[0,0],[1,0],[1,1],[0,1]];for(const Et of mt){const rt=h.P.length/3;for(let ct=0;ct<4;ct++)h.P.push(Et[ct][0],Et[ct][1],Et[ct][2]),h.U.push(vt[ct][0],vt[ct][1]),h.C.push(1,1,1);h.I.push(rt,rt+1,rt+2,rt,rt+2,rt+3)}},X=(L,O,N,j,q)=>{const H=j%Pn/Pn+u,D=H+d,mt=1-(Math.floor(j/Pn)+1)/jo+u,vt=mt+p,Et=M(L,O,N)/15,rt=A(L,O,N)/15,ct=.9,ft=L+.5,yt=N+.5,Ut=.5,R=[[ft-Ut,yt-Ut,ft+Ut,yt+Ut],[ft-Ut,yt+Ut,ft+Ut,yt-Ut]];for(const[w,z,Y,Q]of R){const et=l.P.length/3;l.P.push(w,O,z,Y,O,Q,Y,O+q,Q,w,O+q,z),l.U.push(H,mt,D,mt,D,vt,H,vt),l.C.push(ct,ct,ct,ct,ct,ct,ct,ct,ct,ct,ct,ct),l.L.push(Et,rt,Et,rt,Et,rt,Et,rt),l.SW.push(0,0,1,1),l.I.push(et,et+1,et+2,et,et+2,et+3)}},V=(L,O,N,j)=>{const q=j%Pn/Pn+u,H=q+d,D=1-(Math.floor(j/Pn)+1)/jo+u,mt=D+p,vt=M(L,O,N)/15,Et=A(L,O,N)/15,rt=1,ct=O+.06,ft=l.P.length/3;l.P.push(L,ct,N,L,ct,N+1,L+1,ct,N+1,L+1,ct,N),l.U.push(q,D,q,mt,H,mt,H,D),l.C.push(rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt,rt),l.L.push(vt,Et,vt,Et,vt,Et,vt,Et),l.SW.push(0,0,0,0),l.I.push(ft,ft+1,ft+2,ft,ft+2,ft+3)};let tt=1;const nt=(L,O,N)=>e(L,O,N)===Js,Z=(L,O,N)=>{if(n(L,O,N)===0&&!nt(L,O,N))return 0;let j=1;for(let q=O+1;j<7&&q<pe&&n(L,q,N)>0;q++)j++;for(let q=O-1;j<7&&q>=0&&n(L,q,N)>0;q--)j++;return j},st=(L,O,N)=>(Z(L-1,O,N-1)+Z(L,O,N-1)+Z(L-1,O,N)+Z(L,O,N))/4,$=(L,O,N)=>{const j=(H,D)=>n(H,O,D)>0||nt(H,O,D);return 1-(Number(j(L-1,N-1))+Number(j(L,N-1))+Number(j(L-1,N))+Number(j(L,N)))/4},xt=new Map,Tt=(L,O,N)=>{const j=`${L},${O},${N}`,q=xt.get(j);if(q!==void 0)return q;const H=nS,D=H*H;let mt=H;for(let ct=-H;ct<H;ct++)for(let ft=-H;ft<H;ft++){const yt=ft+.5,Ut=ct+.5,R=yt*yt+Ut*Ut;if(R>D)continue;const w=L+ft,z=N+ct;n(w,O,z)>0&&e(w,O+1,z)===0||(mt=Math.min(mt,Math.sqrt(R)))}const vt=Math.SQRT1_2,Et=Math.max(0,Math.min(1,(mt-vt)/(H-vt))),rt=Et*Et*(3-2*Et);return xt.set(j,rt),rt},gt=(L,O,N,j,q,H)=>(L*(1-H)+O*H)*(1-q)+(j*(1-H)+N*H)*q,qt=(L,O,N,j,q)=>{const H=wi[j],D=Qd[j],mt=M(L+H.o[0],O+H.o[1],N+H.o[2])/15,vt=A(L+H.o[0],O+H.o[1],N+H.o[2])/15,Et=c.P.length/3,rt=j===2,ct=j===3;let ft=1,yt=1;rt?(ft=Zo,yt=Zo):ct||(H.c[0][1]===H.c[3][1]?ft=Zo:yt=Zo);const Ut=H.c.map(Y=>st(s+L+Y[0],O,r+N+Y[2])),R=H.c.map(Y=>$(s+L+Y[0],O,r+N+Y[2])),w=H.c.map(Y=>Tt(s+L+Y[0],O,r+N+Y[2]));for(let Y=0;Y<=yt;Y++){const Q=Y/yt;for(let et=0;et<=ft;et++){const Mt=et/ft,at=gt(H.c[0][0],H.c[1][0],H.c[2][0],H.c[3][0],Mt,Q),lt=gt(H.c[0][2],H.c[1][2],H.c[2][2],H.c[3][2],Mt,Q),Gt=gt(q[0],q[1],q[2],q[3],Mt,Q),ot=O+Gt,Ct=s+L+at,Kt=r+N+lt;c.P.push(L+at,ot,N+lt),rt||ct?c.U.push(Ct,Kt):j===0||j===1?c.U.push(Kt,ot):c.U.push(Ct,ot),c.C.push(D,D,D),c.L.push(mt,vt);const Ot=gt(Ut[0],Ut[1],Ut[2],Ut[3],Mt,Q),pt=gt(R[0],R[1],R[2],R[3],Mt,Q),Vt=tt>0&&(rt||Gt>.01);c.T.push((Vt?1:-1)*Ot),c.TF.push(rt?1:0),c.SH.push(pt),c.WO.push(Vt?gt(w[0],w[1],w[2],w[3],Mt,Q):0)}}const z=ft+1;for(let Y=0;Y<yt;Y++)for(let Q=0;Q<ft;Q++){const et=Et+Y*z+Q,Mt=et+z,at=Mt+1,lt=et+1;c.I.push(et,Mt,at,et,at,lt)}},Zt=(L,O)=>{let N=0,j=0;for(const[q,H]of O){const D=n(q,L,H);if(n(q,L+1,H)>0)return 1;if(D>0){const mt=D/9;mt>=.8?(N+=mt*10,j+=10):(N+=mt,j+=1)}else _e(e(q,L,H))||(j+=1)}return j>0?N/j:.5};for(let L=0;L<pe;L++)for(let O=0;O<Rt;O++)for(let N=0;N<Rt;N++){const j=e(s+N,L,r+O);if(Is(j)&&j!==Js)for(let q=0;q<6;q++){const H=wi[q];Is(e(s+N+H.o[0],L+H.o[1],r+O+H.o[2]))||S(o,N,L,O,j,q)}else if(Gd(j))for(let q=0;q<6;q++){const H=wi[q];Is(e(s+N+H.o[0],L+H.o[1],r+O+H.o[2]))||S(l,N,L,O,j,q)}else if(li(j)){const q=s+N,H=r+O;tt=n(q,L+1,H)>0?0:1;const D=Zt(L,[[q,H],[q-1,H],[q,H-1],[q-1,H-1]]),mt=Zt(L,[[q,H],[q-1,H],[q,H+1],[q-1,H+1]]),vt=Zt(L,[[q,H],[q+1,H],[q,H+1],[q+1,H+1]]),Et=Zt(L,[[q,H],[q+1,H],[q,H-1],[q+1,H-1]]);n(q,L+1,H)===0&&qt(N,L,O,ei.PosY,[D,mt,vt,Et]),e(q,L-1,H)===0&&qt(N,L,O,ei.NegY,[0,0,0,0]);const rt=(ct,ft,yt,Ut)=>{e(q+ft,L,H+yt)===0&&qt(N,L,O,ct,Ut)};rt(ei.PosX,1,0,[0,Et,vt,0]),rt(ei.NegX,-1,0,[0,0,mt,D]),rt(ei.PosZ,0,1,[0,0,vt,mt]),rt(ei.NegZ,0,-1,[0,D,Et,0])}else if(j===es)P(N,O,L);else if(Ti(j))j===Ch?V(N,L,O,nc(j,ei.PosY)):X(N,L,O,nc(j,ei.PosY),j===lm?1.45:.82);else if(j===Js)for(let q=0;q<6;q++){const H=wi[q];Is(e(s+N+H.o[0],L+H.o[1],r+O+H.o[2]))||S(a,N,L,O,j,q)}else if(j===to)for(let q=0;q<6;q++){const H=wi[q],D=e(s+N+H.o[0],L+H.o[1],r+O+H.o[2]);Is(D)||D===to||S(o,N,L,O,j,q)}}const K=new Uint8Array(4*48*4);for(let L=0;L<48;L++)for(let O=0;O<4;O++)for(let N=0;N<4;N++){let j=0,q=0;for(let H=0;H<4;H++){const D=(L*4+H)*m*m;for(let mt=0;mt<4;mt++){const vt=D+(O*4+mt+v)*m+v+N*4;for(let Et=0;Et<4;Et++){const rt=x[vt+Et];rt>j&&(j=rt);const ct=_[vt+Et];ct>q&&(q=ct)}}}K[N+O*4+L*16]=j<<4|q}return{opaque:kr(o),ice:kr(a),cutout:kr(l),water:kr(c),torch:kr(h),light3d:K}}function aS(i,t,e){return oS(t,e,(n,s,r)=>i.getBlock(n,s,r),(n,s,r)=>i.waterAmount(n,s,r))}function lS(i){return new Worker("/mineworld/assets/meshGen.worker-BKkg18pK.js",{name:i==null?void 0:i.name})}const cS=.15,hS=24*24;function uS(i,t,e,n,s,r,o=cS,a=hS){const l=i-e,c=t-n,h=l*l+c*c;return h<=a?!0:(l*s+c*r)/Math.sqrt(h)>=o}const dS=-.2,fS=2.25;function pS(i,t,e,n,s=dS,r=fS){const o=i*i+t*t;return o<=r?!0:(i*e+t*n)/Math.sqrt(o)>=s}const sn=24e3,mS=1e3,Us=[{t:0,top:[.14,.27,.5],hor:[1,.48,.18],tint:[.72,.64,.62]},{t:1800,top:[.2,.44,.76],hor:[.7,.83,.94],tint:[1,1,1]},{t:6e3,top:[.12,.36,.72],hor:[.58,.75,.91],tint:[1,1,1]},{t:11e3,top:[.18,.4,.72],hor:[.66,.8,.92],tint:[1,1,1]},{t:12200,top:[.12,.21,.44],hor:[1,.36,.1],tint:[.86,.62,.5]},{t:13600,top:[.015,.025,.075],hor:[.035,.06,.14],tint:[.3,.34,.5]},{t:22e3,top:[.015,.025,.075],hor:[.035,.06,.14],tint:[.3,.34,.5]},{t:23200,top:[.14,.27,.5],hor:[1,.48,.18],tint:[.72,.64,.62]}],oc=(i,t,e)=>i+(t-i)*e,ac=(i,t,e)=>[oc(i[0],t[0],e),oc(i[1],t[1],e),oc(i[2],t[2],e)];function Mm(i){return(i%sn+sn)%sn}function wm(i){const e=(Mm(i)-6e3)/sn*Math.PI*2;return Math.max(0,Math.min(1,.5-2*Math.cos(e)))*11}const gS={skyTop:[.18,.05,.05],skyHorizon:[.34,.09,.07],worldTint:[.62,.32,.28],light:.3,isNight:!0};function ba(i,t="overworld"){if(t==="nether")return gS;const e=Mm(i);let n=Us[0],s={...Us[0],t:sn};for(let a=0;a<Us.length;a++){const l=Us[a],c=Us[a+1]??{...Us[0],t:sn};if(e>=l.t&&e<c.t){n=l,s=c;break}}const r=s.t===n.t?0:(e-n.t)/(s.t-n.t),o=ac(n.tint,s.tint,r);return{skyTop:ac(n.top,s.top,r),skyHorizon:ac(n.hor,s.hor,r),worldTint:o,light:(o[0]+o[1]+o[2])/3,isNight:e>=13e3&&e<23e3}}const Sm=64,Ta=256,Xs=i=>i*i*(3-2*i),Qo=i=>Math.max(0,Math.min(1,i)),zn=Math.PI*2,qs=(i,t)=>{let e=Math.imul(i^2654435769,2246822507)^Math.imul(t^3266489909,668265261);return e^=e>>>15,e=Math.imul(e,2246822507),e^=e>>>13,(e>>>0)/4294967295},Ei=(i,t)=>(i%t+t)%t,bm=(i,t,e)=>{if(!Number.isInteger(i)||i<t||i&i-1)throw new Error(`${e} size must be a power of two >= ${t}`)},Br=(i,t,e,n)=>{const s=i/e*n,r=t/e*n,o=Math.floor(s),a=Math.floor(r),l=Xs(s-o),c=Xs(r-a),h=Ei(o,n),u=Ei(o+1,n),d=Ei(a,n),p=Ei(a+1,n),g=qs(h,d),v=qs(u,d),m=qs(h,p),f=qs(u,p);return(g+(v-g)*l)*(1-c)+(m+(f-m)*l)*c};function Tm(i=Sm){bm(i,16,"cloud-shadow");const t=new Float32Array(i*i);let e=1/0,n=-1/0;for(let a=0;a<i;a++)for(let l=0;l<i;l++){let c=0,h=0,u=1;for(const d of[2,4,8,16])c+=Br(l,a,i,d)*u,h+=u,u*=.52;c/=h,t[l+a*i]=c,e=Math.min(e,c),n=Math.max(n,c)}const s=Math.max(1e-6,n-e);for(let a=0;a<t.length;a++)t[a]=(t[a]-e)/s;const r=new Uint8Array(i*i*4),o=(a,l)=>t[Ei(a,i)+Ei(l,i)*i];for(let a=0;a<i;a++)for(let l=0;l<i;l++){const c=(o(l+1,a)-o(l-1,a))*3.8,h=(o(l,a+1)-o(l,a-1))*3.8,u=1/Math.hypot(c,1,h),d=-c*u,p=-h*u,g=o(l,a),v=Math.pow(Math.max(0,1-Math.abs(g*2-1)),2.5),m=(l+a*i)*4;r[m]=Math.round((d*.5+.5)*255),r[m+1]=Math.round((p*.5+.5)*255),r[m+2]=Math.round(g*255),r[m+3]=Math.round(v*255)}return r}const Em=(i,t,e=1)=>(i.name=t,i.wrapS=_n,i.wrapT=_n,i.magFilter=Te,i.minFilter=ni,i.generateMipmaps=!0,i.colorSpace=pn,i.anisotropy=e,i.needsUpdate=!0,i);function vS(i=Sm){const t=new Mh(Tm(i),i,i,mn);return Em(t,"mineworld-cloud-shadow-noise")}const Jd=[{kx:4,ky:1,amplitude:.18},{kx:1,ky:5,amplitude:.175},{kx:5,ky:3,amplitude:.16},{kx:-3,ky:6,amplitude:.155},{kx:7,ky:-2,amplitude:.142},{kx:2,ky:8,amplitude:.138},{kx:8,ky:5,amplitude:.123},{kx:-6,ky:9,amplitude:.12},{kx:11,ky:-5,amplitude:.104},{kx:5,ky:12,amplitude:.102},{kx:13,ky:8,amplitude:.086},{kx:-9,ky:14,amplitude:.083},{kx:16,ky:-7,amplitude:.071},{kx:7,ky:17,amplitude:.069},{kx:19,ky:11,amplitude:.058},{kx:-12,ky:20,amplitude:.057},{kx:23,ky:-10,amplitude:.047},{kx:11,ky:24,amplitude:.046},{kx:27,ky:16,amplitude:.038},{kx:-17,ky:28,amplitude:.037},{kx:32,ky:-15,amplitude:.03},{kx:16,ky:33,amplitude:.029},{kx:38,ky:21,amplitude:.023},{kx:-22,ky:39,amplitude:.022}],tf=[[1,2],[-2,1],[3,1],[-1,3],[2,-3],[3,-2],[-3,-1],[1,-3]],_S=(i,t)=>qs(i.kx+t*37+101,i.ky-t*53-211)*zn,xS=(i,t)=>qs(i.ky+t*61-307,i.kx+t*43+419)*zn;function yS(i=Ta){bm(i,Ta,"directional-wave");const t=i*i,e=new Float32Array(t);let n=1/0,s=-1/0;for(let u=0;u<i;u++){const d=u/i;for(let p=0;p<i;p++){const g=p/i,v=Math.sin(zn*(2*g+3*d)+1.71)*.012+Math.sin(zn*(-3*g+2*d)+4.19)*.007+Math.sin(zn*(5*g-d)+2.43)*.003,m=Math.sin(zn*(-2*g+3*d)+.63)*.011+Math.sin(zn*(3*g+4*d)+2.77)*.006+Math.sin(zn*(g-5*d)+5.31)*.003;let f=0,x=0;for(let M=0;M<Jd.length;M++){const A=Jd[M],E=_S(A,M),C=M&1?-1:1,I=zn*(A.kx*(g+v*C)+A.ky*(d+m*(.82-C*.18)))+E,b=tf[M%tf.length],S=zn*(b[0]*g+b[1]*d)+xS(A,M),P=Math.sin(S)*.5+.5,X=.22+Xs(P)*.78,V=Math.hypot(A.kx,A.ky),tt=.035*(1-Xs(Qo((V-18)/12))),nt=Math.sin(I)+Math.sin(I*2+E*.37)*.17+Math.sin(I*3-E*.19)*tt;f+=nt*A.amplitude*X,x+=A.amplitude}const _=(Br(p+29,u-47,i,16)-.5)*.07+(Br(p-73,u+31,i,32)-.5)*.035;f=f/(x*.92)+_,e[p+u*i]=f,n=Math.min(n,f),s=Math.max(s,f)}}const r=Math.max(1e-6,s-n);for(let u=0;u<t;u++)e[u]=(e[u]-n)/r;const o=(u,d)=>e[Ei(u,i)+Ei(d,i)*i],a=4.8*(i/Ta),l=new Float32Array(t);let c=1e-6;for(let u=0;u<i;u++)for(let d=0;d<i;d++){const p=o(d,u),g=p*4-o(d-1,u)-o(d+1,u)-o(d,u-1)-o(d,u+1),v=Math.max(0,g)*Xs(Qo((p-.38)/.52));l[d+u*i]=v,c=Math.max(c,v)}const h=new Uint8Array(t*4);for(let u=0;u<i;u++)for(let d=0;d<i;d++){const p=(o(d+1,u)-o(d-1,u))*a,g=(o(d,u+1)-o(d,u-1))*a,v=1/Math.hypot(p,1,g),m=-p*v,f=-g*v,x=o(d,u),_=Br(d+83,u-19,i,16)*.58+Br(d-41,u+67,i,32)*.42,M=Xs(Qo((_-.31)/.49)),A=Qo(l[d+u*i]/(c*.36)),E=Math.pow(A,.76)*M,C=(d+u*i)*4;h[C]=Math.round((m*.5+.5)*255),h[C+1]=Math.round((f*.5+.5)*255),h[C+2]=Math.round(x*255),h[C+3]=Math.round(E*255)}return h}function MS(i=Ta){const t=new Mh(yS(i),i,i,mn);return Em(t,"mineworld-directional-wave",8)}const Lh={dg:[-.3,.954],dgw:[.847,.532],d1:[.821,.571],d1w:[-.173,.985],d2:[-.419,.908],d2w:[.982,.188],d3:[.96,-.28],d3w:[-.735,-.678],groupWaveNumber:.075,groupTimeRate:-.07,groupWarpWaveNumber:.131,groupWarpTimeRate:.093,groupWarpPhase:1.11,groupWarpStrength:.42,groupBase:.76,groupAmplitude:.24,wave1Number:.22,wave1TimeRate:.24,wave1WarpNumber:.34,wave1WarpTimeRate:-.3,wave1WarpPhase:1.37,wave1WarpStrength:.24,wave1Weight:.42,wave2Number:.7,wave2TimeRate:-.54,wave2WarpNumber:.96,wave2WarpTimeRate:.72,wave2WarpPhase:-.83,wave2WarpStrength:.18,wave2Weight:.4,wave3Number:1.12,wave3TimeRate:.86,wave3WarpNumber:1.42,wave3WarpTimeRate:-1.08,wave3WarpPhase:2.11,wave3WarpStrength:.14,wave3Weight:.18,calmLinear:.145,calmQuadratic:-.055,oceanLinear:.34,oceanQuadratic:.04,quadraticBias:.17};function kt(i){if(!Number.isFinite(i))throw new Error(`Water-wave GLSL constant must be finite: ${i}`);return(Object.is(i,-0)?0:i).toFixed(3)}function Mn(i,t){return`${i<0?"-":"+"} ${t} * ${kt(Math.abs(i))}`}function Jo(i){return`${i<0?"-":"+"} ${kt(Math.abs(i))}`}const _t=Lh,wS=`
vec3 mwWaveField(vec2 p, float t, float ocean) {
  vec2 dg = vec2(${kt(_t.dg[0])}, ${kt(_t.dg[1])});
  vec2 dgw = vec2(${kt(_t.dgw[0])}, ${kt(_t.dgw[1])});
  vec2 d1 = vec2(${kt(_t.d1[0])}, ${kt(_t.d1[1])});
  vec2 d1w = vec2(${kt(_t.d1w[0])}, ${kt(_t.d1w[1])});
  vec2 d2 = vec2(${kt(_t.d2[0])}, ${kt(_t.d2[1])});
  vec2 d2w = vec2(${kt(_t.d2w[0])}, ${kt(_t.d2w[1])});
  vec2 d3 = vec2(${kt(_t.d3[0])}, ${kt(_t.d3[1])});
  vec2 d3w = vec2(${kt(_t.d3w[0])}, ${kt(_t.d3w[1])});
  float pgw = dot(p, dgw) * ${kt(_t.groupWarpWaveNumber)} ${Mn(_t.groupWarpTimeRate,"t")} ${Jo(_t.groupWarpPhase)};
  float pg = dot(p, dg) * ${kt(_t.groupWaveNumber)} ${Mn(_t.groupTimeRate,"t")}
    + ${kt(_t.groupWarpStrength)} * sin(pgw);
  float sg = sin(pg), cg = cos(pg), cgw = cos(pgw);
  float group = ${kt(_t.groupBase)} + ${kt(_t.groupAmplitude)} * sg;
  vec2 groupPhaseGrad = ${kt(_t.groupWaveNumber)} * dg
    + ${kt(_t.groupWarpStrength)} * cgw * ${kt(_t.groupWarpWaveNumber)} * dgw;
  vec2 groupGrad = ${kt(_t.groupAmplitude)} * cg * groupPhaseGrad;
  float p1w = dot(p, d1w) * ${kt(_t.wave1WarpNumber)} ${Mn(_t.wave1WarpTimeRate,"t")} ${Jo(_t.wave1WarpPhase)};
  float p2w = dot(p, d2w) * ${kt(_t.wave2WarpNumber)} ${Mn(_t.wave2WarpTimeRate,"t")} ${Jo(_t.wave2WarpPhase)};
  float p3w = dot(p, d3w) * ${kt(_t.wave3WarpNumber)} ${Mn(_t.wave3WarpTimeRate,"t")} ${Jo(_t.wave3WarpPhase)};
  float p1 = dot(p, d1) * ${kt(_t.wave1Number)} ${Mn(_t.wave1TimeRate,"t")}
    + ${kt(_t.wave1WarpStrength)} * sin(p1w);
  float p2 = dot(p, d2) * ${kt(_t.wave2Number)} ${Mn(_t.wave2TimeRate,"t")}
    + ${kt(_t.wave2WarpStrength)} * sin(p2w);
  float p3 = dot(p, d3) * ${kt(_t.wave3Number)} ${Mn(_t.wave3TimeRate,"t")}
    + ${kt(_t.wave3WarpStrength)} * sin(p3w);
  float s1 = sin(p1), s2 = sin(p2), s3 = sin(p3);
  vec2 p1Grad = ${kt(_t.wave1Number)} * d1
    + ${kt(_t.wave1WarpStrength)} * cos(p1w) * ${kt(_t.wave1WarpNumber)} * d1w;
  vec2 p2Grad = ${kt(_t.wave2Number)} * d2
    + ${kt(_t.wave2WarpStrength)} * cos(p2w) * ${kt(_t.wave2WarpNumber)} * d2w;
  vec2 p3Grad = ${kt(_t.wave3Number)} * d3
    + ${kt(_t.wave3WarpStrength)} * cos(p3w) * ${kt(_t.wave3WarpNumber)} * d3w;
  float q = ${kt(_t.wave1Weight)} * group * s1
    + ${kt(_t.wave2Weight)} * s2
    + ${kt(_t.wave3Weight)} * s3;
  vec2 qGrad = ${kt(_t.wave1Weight)} * (groupGrad * s1 + group * cos(p1) * p1Grad)
    + ${kt(_t.wave2Weight)} * cos(p2) * p2Grad
    + ${kt(_t.wave3Weight)} * cos(p3) * p3Grad;
  float calmH = ${kt(_t.calmLinear)} * q ${Mn(_t.calmQuadratic,"q * q")};
  float oceanH = ${kt(_t.oceanLinear)} * q ${Mn(_t.oceanQuadratic,`(q * q - ${kt(_t.quadraticBias)})`)};
  float h = mix(calmH, oceanH, ocean);
  float dhdq = mix(
    ${kt(_t.calmLinear)} ${Mn(2*_t.calmQuadratic,"q")},
    ${kt(_t.oceanLinear)} ${Mn(2*_t.oceanQuadratic,"q")},
    ocean
  );
  vec2 hGrad = dhdq * qGrad;
  return vec3(h, hGrad);
}`.trim();function ta(i,t,e,n,s,r,o,a,l,c,h){const u=(i*o[0]+t*o[1])*a+e*l+c,d=Math.cos(u),p=(i*n[0]+t*n[1])*s+e*r+h*Math.sin(u),g=Math.cos(p);return{height:Math.sin(p),slopeX:g*(s*n[0]+h*d*a*o[0]),slopeZ:g*(s*n[1]+h*d*a*o[1])}}function SS(i,t,e,n){const s=Lh,r=ta(i,t,e,s.dg,s.groupWaveNumber,s.groupTimeRate,s.dgw,s.groupWarpWaveNumber,s.groupWarpTimeRate,s.groupWarpPhase,s.groupWarpStrength),o=s.groupBase+s.groupAmplitude*r.height,a=s.groupAmplitude*r.slopeX,l=s.groupAmplitude*r.slopeZ,c=ta(i,t,e,s.d1,s.wave1Number,s.wave1TimeRate,s.d1w,s.wave1WarpNumber,s.wave1WarpTimeRate,s.wave1WarpPhase,s.wave1WarpStrength),h=ta(i,t,e,s.d2,s.wave2Number,s.wave2TimeRate,s.d2w,s.wave2WarpNumber,s.wave2WarpTimeRate,s.wave2WarpPhase,s.wave2WarpStrength),u=ta(i,t,e,s.d3,s.wave3Number,s.wave3TimeRate,s.d3w,s.wave3WarpNumber,s.wave3WarpTimeRate,s.wave3WarpPhase,s.wave3WarpStrength),d=s.wave1Weight*o*c.height+s.wave2Weight*h.height+s.wave3Weight*u.height,p=s.wave1Weight*(a*c.height+o*c.slopeX)+s.wave2Weight*h.slopeX+s.wave3Weight*u.slopeX,g=s.wave1Weight*(l*c.height+o*c.slopeZ)+s.wave2Weight*h.slopeZ+s.wave3Weight*u.slopeZ,v=d*d,m=s.calmLinear*d+s.calmQuadratic*v,f=s.oceanLinear*d+s.oceanQuadratic*(v-s.quadraticBias),x=m+(f-m)*n,_=s.calmLinear+2*s.calmQuadratic*d,M=s.oceanLinear+2*s.oceanQuadratic*d,A=_+(M-_)*n;return{height:x,slopeX:A*p,slopeZ:A*g}}const ef=()=>typeof performance<"u"?performance.now():Date.now(),bS=24,Ir=2048,ea=36,na=ee+8/9,TS=110,nf=(i,t,e)=>{const n=Math.max(0,Math.abs(i)-.5),s=Math.max(0,Math.abs(t)-.5);return n*n+s*s>e},lc="float mcBright(float lv){ float f = clamp(lv,0.0,15.0)/15.0; return f/(4.0-3.0*f); }",cc="{ float skyLv = aLight.x*15.0; float blkLv = aLight.y*15.0; float bs = mcBright(max(skyLv - uSkyDarken, 0.0)); float bb = mcBright(blkLv); vSkyBright = bs; vBlockBright = bb; float drkFloor = (skyLv < 0.5) ? 0.03 : 0.04; vLF = max(bs, bb) * 0.96 + drkFloor; float sf = (bs + bb) > 0.0001 ? bs / (bs + bb) : 1.0; vTint = mix(vec3(1.0, 0.91, 0.78), uSkyTint, sf); }",sf=i=>{const t=Math.max(0,Math.min(15,i))/15;return t/(4-3*t)};class Am{constructor(t,e,n){y(this,"meshes",new Map);y(this,"lightGrids",new Map);y(this,"opaqueMat");y(this,"iceMat");y(this,"cutoutMat");y(this,"waterMat");y(this,"torchMat");y(this,"waterFrames");y(this,"waterTex");y(this,"cloudNoiseTex");y(this,"waterWaveTex");y(this,"waterAnimT",0);y(this,"waterFrame",0);y(this,"uSkyMul",{value:1});y(this,"uSkyTint",{value:new bt(1,1,1)});y(this,"uSkyDarken",{value:0});y(this,"uShaders",{value:0});y(this,"uTime",{value:0});y(this,"uSkyRefl",{value:new bt().setRGB(.55,.72,.95,ae)});y(this,"uSkyTop",{value:new bt().setRGB(.35,.55,.85,ae)});y(this,"uSunDir",{value:new U(.4,.85,.3)});y(this,"uRefractionColor",{value:null});y(this,"uRefractionDepth",{value:null});y(this,"uRefractionSize",{value:new Ft(1,1)});y(this,"uHasRefraction",{value:0});y(this,"uCameraUnderwater",{value:0});y(this,"uUnderwaterAmount",{value:0});y(this,"uReflectionColor",{value:null});y(this,"uReflectionSize",{value:new Ft(1,1)});y(this,"uReflectionMatrix",{value:new fe});y(this,"uHasReflection",{value:0});y(this,"sun",new Jp(16777215,0));y(this,"uShadowMap",{value:null});y(this,"uShadowMatrix",{value:new fe});y(this,"uShadowTexel",{value:new Ft(1/Ir,1/Ir)});y(this,"uShadowOn",{value:0});y(this,"uHq",{value:0});y(this,"uSunUp",{value:0});y(this,"leafDepthMat",null);y(this,"meshWorkers",[]);y(this,"meshRr",0);y(this,"meshPending",new Map);y(this,"nextMeshJobId",1);y(this,"meshPendingSince",new Map);y(this,"meshFails",new Map);y(this,"meshQueue",[]);y(this,"editKeys",new Set);y(this,"priorityQueue",[]);y(this,"fogCullR2",(TS/Rt)**2);y(this,"lightingQuality",null);y(this,"sunEnabled",!0);y(this,"lastTint","");this.scene=t,this.world=e,this.opaqueMat=new we({map:n,vertexColors:!0}),this.opaqueMat.shadowSide=ze,this.iceMat=new we({map:n,vertexColors:!0}),this.iceMat.shadowSide=ze,this.cutoutMat=new we({map:n,vertexColors:!0,alphaTest:.5,side:on}),this.waterFrames=K1(bS),this.waterTex=this.waterFrames[0].clone(),this.waterTex.needsUpdate=!0,this.cloudNoiseTex=vS(128),this.waterWaveTex=MS(),this.waterMat=new we({map:this.waterTex,vertexColors:!0,transparent:!0,opacity:.78,depthWrite:!1,side:on}),this.waterMat.forceSinglePass=!0,this.installLight(this.opaqueMat,!1,!0),this.installLight(this.cutoutMat,!0,!1),this.installWaterShader(this.waterMat),this.installIceShader(this.iceMat),this.torchMat=new we({map:$1(),transparent:!0,alphaTest:.5,side:on}),this.sun.castShadow=!1,this.sun.shadow.mapSize.set(Ir,Ir);const s=this.sun.shadow.camera;if(s.left=-ea,s.right=ea,s.top=ea,s.bottom=-ea,s.near=1,s.far=260,this.scene.add(this.sun),this.scene.add(this.sun.target),this.leafDepthMat=new Yp({depthPacking:Ap,map:n,alphaTest:.5}),typeof Worker<"u"){const r=typeof navigator<"u"&&navigator.hardwareConcurrency||4,o=Math.max(1,Math.min(4,r-1));for(let a=0;a<o;a++){const l=new lS;l.onmessage=c=>this.handleMeshWorkerResult(c.data),l.onerror=c=>{console.error("[meshgen worker] 致命错误(整个 worker 挂了，区块会停止网格化):",c.message)},this.meshWorkers.push(l)}}}installLight(t,e=!1,n=!1){t.onBeforeCompile=s=>{s.uniforms.uSkyTint=this.uSkyTint,s.uniforms.uSkyDarken=this.uSkyDarken,s.uniforms.uShadowMap=this.uShadowMap,s.uniforms.uShadowMatrix=this.uShadowMatrix,s.uniforms.uShadowTexel=this.uShadowTexel,s.uniforms.uShadowOn=this.uShadowOn,s.uniforms.uHq=this.uHq,s.uniforms.uSunUp=this.uSunUp,s.uniforms.uShaders=this.uShaders,s.uniforms.uSunDirW=this.uSunDir,s.uniforms.uTime=this.uTime,s.uniforms.uSurfaceNoise={value:this.cloudNoiseTex},s.uniforms.uWaterWaves={value:this.waterWaveTex};const r=e?`{ float sw = uShaders * 0.06 * aSway; vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz; float ph = wp.x*0.6 + wp.z*0.5 + wp.y*0.3; transformed.x += sin(ph + uTime*1.4) * sw; transformed.z += sin(ph*1.3 + uTime*1.1) * sw; transformed.y += sin(ph*0.8 + uTime*1.7) * sw * 0.5; }
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
`+lc).replace("#include <begin_vertex>",`#include <begin_vertex>
`+r+cc+`
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
}`)}}updateSun(t,e,n,s){const r=t/sn*Math.PI*2;let o=Math.cos(r),a=Math.sin(r),l=.1;const c=Math.hypot(o,a,l)||1;o/=c,a/=c,l/=c;const h=Math.round(e),u=Math.round(n),d=Math.round(s);this.sun.target.position.set(h,u,d),this.sun.position.set(h+o*120,u+a*120,d+l*120),this.sun.target.updateMatrixWorld(),this.sun.updateMatrixWorld(),this.uSunUp.value=Math.max(0,Math.min(1,(a-.02)/.2));const p=this.sun.shadow.map;this.sun.castShadow&&p&&p.texture&&this.uSunUp.value>.001?(this.uShadowMap.value=p.texture,this.uShadowMatrix.value=this.sun.shadow.matrix,this.uShadowOn.value=1):this.uShadowOn.value=0}installWaterShader(t){t.onBeforeCompile=e=>{e.uniforms.uSkyMul=this.uSkyMul,e.uniforms.uSkyTint=this.uSkyTint,e.uniforms.uSkyDarken=this.uSkyDarken,e.uniforms.uShaders=this.uShaders,e.uniforms.uTime=this.uTime,e.uniforms.uSkyRefl=this.uSkyRefl,e.uniforms.uSkyTop=this.uSkyTop,e.uniforms.uSunDir=this.uSunDir,e.uniforms.uHq=this.uHq,e.uniforms.uSurfaceNoise={value:this.waterWaveTex},e.uniforms.uRefractionColor=this.uRefractionColor,e.uniforms.uRefractionDepth=this.uRefractionDepth,e.uniforms.uRefractionSize=this.uRefractionSize,e.uniforms.uHasRefraction=this.uHasRefraction,e.uniforms.uCameraUnderwater=this.uCameraUnderwater,e.uniforms.uUnderwaterAmount=this.uUnderwaterAmount,e.uniforms.uReflectionColor=this.uReflectionColor,e.uniforms.uReflectionSize=this.uReflectionSize,e.uniforms.uReflectionMatrix=this.uReflectionMatrix,e.uniforms.uHasReflection=this.uHasReflection,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
${wS}
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
${lc}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${cc}
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
  abs(mwWp0.y - ${na.toFixed(6)})
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
    abs(vWaterBaseWPos.y - ${na.toFixed(6)})
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
      abs(vWaterBaseWPos.y - ${na.toFixed(6)})
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
${lc}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${cc}
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
      * (1.0 - smoothstep(0.18, 0.42, abs(vWPos.y - ${na.toFixed(6)})))
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
}`)}}setTint(t){const e=t.join();e!==this.lastTint&&(this.lastTint=e,this.uSkyTint.value.setRGB(t[0],t[1],t[2]))}setSkyMul(t){this.uSkyMul.value=t}setSkyDarken(t){this.uSkyDarken.value=t}setLightingQuality(t){var o;if(t===this.lightingQuality)return;this.lightingQuality=t,this.uShaders.value=t!=="off"?1:0;const e=t!=="off";this.waterMat.transparent=!e,this.waterMat.depthWrite=e,this.waterMat.opacity=e?1:.78,this.waterMat.needsUpdate=!0,this.sun.castShadow=t!=="off"&&this.sunEnabled,this.uHq.value=t==="high"?1:0;const n=t==="high"?4096:Ir;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),(o=this.sun.shadow.map)==null||o.dispose(),this.sun.shadow.map=null,this.uShadowOn.value=0,this.uShadowTexel.value.set(1/n,1/n));const s=t==="high"?56:46,r=this.sun.shadow.camera;r.left!==-s&&(r.left=-s,r.right=s,r.top=s,r.bottom=-s,r.updateProjectionMatrix()),t==="off"&&(this.uShadowOn.value=0)}setSunEnabled(t){t!==this.sunEnabled&&(this.sunEnabled=t,this.sun.castShadow=t&&this.lightingQuality!==null&&this.lightingQuality!=="off",t||(this.uShadowOn.value=0))}setFogFar(t){this.fogCullR2=(t/Rt)**2}setSkyReflection(t,e){this.uSkyRefl.value.setRGB(t[0],t[1],t[2],ae),e&&this.uSkyTop.value.setRGB(e[0],e[1],e[2],ae)}setWaterRefraction(t,e,n,s,r){this.uRefractionColor.value=t,this.uRefractionDepth.value=e,this.uRefractionSize.value.set(Math.max(1,n),Math.max(1,s)),this.uHasRefraction.value=t&&e?1:0,this.uUnderwaterAmount.value=si.clamp(r,0,1)}setCameraUnderwater(t){this.uCameraUnderwater.value=t?1:0}setWaterReflection(t,e,n,s){this.uReflectionColor.value=t,this.uReflectionSize.value.set(Math.max(1,n),Math.max(1,s)),e&&this.uReflectionMatrix.value.copy(e),this.uHasReflection.value=t&&e?1:0}setSunDir(t,e,n){this.uSunDir.value.set(t,e,n)}setAtlas(t){this.opaqueMat.map=t,this.iceMat.map=t,this.cutoutMat.map=t,this.opaqueMat.needsUpdate=!0,this.iceMat.needsUpdate=!0,this.cutoutMat.needsUpdate=!0}animateWater(t){if(this.uTime.value+=t,this.uShaders.value>.5)return;this.waterAnimT+=t;const e=.09;for(;this.waterAnimT>=e;){this.waterAnimT-=e,this.waterFrame=(this.waterFrame+1)%this.waterFrames.length;const n=this.waterFrames[this.waterFrame];n.image&&(this.waterTex.image=n.image,this.waterTex.needsUpdate=!0)}}key(t,e){return`${t},${e}`}handleMeshWorkerResult({jobId:t,cx:e,cz:n,mesh:s,error:r}){var a;const o=this.key(e,n);if(this.meshPending.get(o)===t){if(this.meshPending.delete(o),this.meshPendingSince.delete(o),r){const l=(this.meshFails.get(o)??0)+1;this.meshFails.set(o,l),console.warn(`[meshgen] 区块(${e},${n}) 网格化失败 #${l}: ${r.split(`
`)[0]}`);return}this.meshFails.delete(o),!(!s||!this.world.peek(e,n))&&(this.editKeys.has(o)?(this.priorityQueue.push({cx:e,cz:n,mesh:s}),(a=this.world.peek(e,n))!=null&&a.dirty||this.editKeys.delete(o)):this.meshQueue.push({cx:e,cz:n,mesh:s}))}}setWorld(t){for(const e of[...this.meshes.keys()])this.unload(e);this.lightGrids.clear(),this.meshQueue.length=0,this.priorityQueue.length=0,this.meshPending.clear(),this.meshPendingSince.clear(),this.meshFails.clear(),this.editKeys.clear(),this.world=t}dispose(){var t;for(const e of[...this.meshes.keys()])this.unload(e);this.lightGrids.clear();for(const e of this.meshWorkers)e.terminate();this.meshWorkers.length=0,this.opaqueMat.dispose(),this.iceMat.dispose(),this.cutoutMat.dispose(),this.waterMat.dispose(),this.torchMat.dispose(),this.waterTex.dispose(),this.cloudNoiseTex.dispose(),this.waterWaveTex.dispose(),(t=this.leafDepthMat)==null||t.dispose(),this.scene.remove(this.sun),this.scene.remove(this.sun.target)}buildGeo(t){var n;const e=new Ve;return e.setAttribute("position",new ue(t.positions,3)),t.normals&&e.setAttribute("normal",new ue(t.normals,3)),e.setAttribute("uv",new ue(t.uvs,2)),e.setAttribute("color",new ue(t.colors,3)),t.light&&t.light.length&&e.setAttribute("aLight",new ue(t.light,2)),t.underwater&&t.underwater.length&&e.setAttribute("aUnderwater",new ue(t.underwater,1)),t.wetness&&t.wetness.length&&e.setAttribute("aWetness",new ue(t.wetness,1)),t.top&&t.top.length&&e.setAttribute("aTop",new ue(t.top,1)),t.topFace&&t.topFace.length&&e.setAttribute("aTopFace",new ue(t.topFace,1)),t.shore&&t.shore.length&&e.setAttribute("aShore",new ue(t.shore,1)),t.waveOpen&&t.waveOpen.length&&e.setAttribute("aWaveOpen",new ue(t.waveOpen,1)),t.sway&&t.sway.length&&e.setAttribute("aSway",new ue(t.sway,1)),e.setIndex(new ue(t.indices,1)),(n=t.top)!=null&&n.length&&(e.computeBoundingSphere(),e.boundingSphere&&(e.boundingSphere.radius+=.42)),e}lightLevelAt(t,e,n){const s=Math.floor(Math.floor(t)/Rt),r=Math.floor(Math.floor(n)/Rt),o=this.lightGrids.get(this.key(s,r));if(!o)return[15,0];const a=Math.min(3,Math.max(0,Math.floor((t-s*Rt)/4))),l=Math.min(3,Math.max(0,Math.floor((n-r*Rt)/4))),c=Math.min(47,Math.max(0,Math.floor(e/4))),h=o[a+l*4+c*16];return[h>>4,h&15]}brightnessAt(t,e,n,s){const[r,o]=this.lightLevelAt(t,e,n),a=r<.5?.03:.04;return Math.min(1,Math.max(sf(r-s),sf(o))*.96+a)}unload(t){this.editKeys.delete(t),this.meshPendingSince.delete(t),this.meshFails.delete(t),this.lightGrids.delete(t);const e=this.meshes.get(t);if(e){for(const n of[e.opaque,e.ice,e.cutout,e.water,e.torch])n&&(this.scene.remove(n),n.geometry.dispose());this.meshes.delete(t)}}addMesh(t,e,n,s){if(t.indices.length===0)return null;const r=new Jt(this.buildGeo(t),e);return r.position.set(n*Rt,0,s*Rt),(e===this.waterMat||e===this.iceMat)&&r.layers.set(Eh),this.scene.add(r),r}flushMesh(t){for(let e=0;e<8&&this.priorityQueue.length>0;e++){const n=this.priorityQueue.shift();n&&this.world.peek(n.cx,n.cz)&&this.applyMesh(n.cx,n.cz,n.mesh)}for(let e=0;e<t&&this.meshQueue.length>0;e++){const n=this.meshQueue.shift();n&&this.world.peek(n.cx,n.cz)&&this.applyMesh(n.cx,n.cz,n.mesh)}}meshBusy(){return this.meshQueue.length>0||this.priorityQueue.length>0||this.meshPending.size>0}meshQueueLen(){return this.meshQueue.length+this.priorityQueue.length}pipelineStats(){let t=0;for(const e of this.meshes.values())[e.opaque,e.ice,e.cutout,e.water,e.torch].some(n=>n&&n.visible)&&t++;return{meshed:this.meshes.size,visible:t,pending:this.meshPending.size,queued:this.meshQueueLen()}}applyMesh(t,e,n){this.unload(this.key(t,e)),this.lightGrids.set(this.key(t,e),n.light3d);const s=this.addMesh(n.opaque,this.opaqueMat,t,e)??new Jt,r=this.addMesh(n.ice,this.iceMat,t,e),o=this.addMesh(n.cutout,this.cutoutMat,t,e),a=this.addMesh(n.water,this.waterMat,t,e),l=this.addMesh(n.torch,this.torchMat,t,e);s.castShadow=!0,s.receiveShadow=!0,r&&(r.castShadow=!0,r.receiveShadow=!0),o&&(o.castShadow=!0,o.receiveShadow=!0,this.leafDepthMat&&(o.customDepthMaterial=this.leafDepthMat)),this.meshes.set(this.key(t,e),{opaque:s,ice:r,cutout:o,water:a,torch:l})}rebuildSync(t,e){const n=this.key(t,e);this.meshPending.delete(n),this.meshPendingSince.delete(n);const s=this.meshQueue.findIndex(a=>a.cx===t&&a.cz===e);s>=0&&this.meshQueue.splice(s,1);const r=this.priorityQueue.findIndex(a=>a.cx===t&&a.cz===e);r>=0&&this.priorityQueue.splice(r,1),this.applyMesh(t,e,aS(this.world,t,e));const o=this.world.peek(t,e);o&&(o.dirty=!1)}collectNeighbors(t,e){const n=[],s=[];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){const a=this.world.peek(t+r,e+o);if(!a)return null;n.push(a.blocks.slice()),s.push(a.fluid.slice())}return{blocks:n,fluid:s}}rebuild(t,e){if(this.meshWorkers.length===0){this.rebuildSync(t,e);return}const n=this.key(t,e);if(this.meshPending.has(n)||(this.meshFails.get(n)??0)>=3)return;const s=this.collectNeighbors(t,e);if(!s)return;const r=this.nextMeshJobId++;this.meshPending.set(n,r),this.meshPendingSince.set(n,ef());const o=[...s.blocks.map(l=>l.buffer),...s.fluid.map(l=>l.buffer)];this.meshWorkers[this.meshRr].postMessage({jobId:r,cx:t,cz:e,blocks:s.blocks,fluid:s.fluid},o),this.meshRr=(this.meshRr+1)%this.meshWorkers.length;const a=this.world.peek(t,e);a&&(a.dirty=!1)}retryStuckMeshes(t=8e3){const e=ef();for(const[n,s]of this.meshPendingSince)e-s>t&&(this.meshPending.delete(n),this.meshPendingSince.delete(n),console.warn(`[meshgen] 区块 ${n} 网格化 ${Math.round((e-s)/1e3)}s 未回(worker 丢消息?) → 重试`))}update(t,e,n,s=2,r=0,o=0){this.retryStuckMeshes(),this.world.retryStuckGen();for(const l of[...this.meshes.keys()]){const[c,h]=l.split(",").map(Number);(Math.abs(c-t)>n+1||Math.abs(h-e)>n+1)&&this.unload(l)}for(let l=-n-1;l<=n+1;l++)for(let c=-n-1;c<=n+1;c++)this.world.request(t+c,e+l);const a=[];for(let l=-n;l<=n;l++)for(let c=-n;c<=n;c++){if(nf(c,l,this.fogCullR2))continue;const h=t+c,u=e+l,d=this.world.peek(h,u);d&&(!this.meshes.has(this.key(h,u))||d.dirty)&&a.push({cx:h,cz:u,d:c*c+l*l,ahead:pS(c,l,r,o)})}a.sort((l,c)=>l.ahead===c.ahead?l.d-c.d:l.ahead?-1:1);for(let l=0;l<Math.min(s,a.length);l++)this.rebuild(a[l].cx,a[l].cz);for(const[l,c]of this.meshes){const[h,u]=l.split(",").map(Number),d=!nf(h-t,u-e,this.fogCullR2);for(const p of[c.opaque,c.ice,c.cutout,c.water,c.torch])p&&(p.visible=d)}}cullToView(t,e,n,s,r=0){if(!(Math.abs(r)>.42))for(const[o,a]of this.meshes){const[l,c]=o.split(",").map(Number);if(!uS(l*Rt+Rt/2,c*Rt+Rt/2,t,e,n,s))for(const h of[a.opaque,a.ice,a.cutout,a.water,a.torch])h&&(h.visible=!1)}}remeshDirty(){var t;for(const e of[...this.meshes.keys()]){const[n,s]=e.split(",").map(Number);(t=this.world.peek(n,s))!=null&&t.dirty&&(this.editKeys.add(e),this.rebuild(n,s))}}}const ia=10;class ES{constructor(t){y(this,"mesh");y(this,"tex");this.tex=new xr().load("/mineworld/textures/crack.png"),this.tex.magFilter=de,this.tex.minFilter=de,this.tex.generateMipmaps=!1,this.tex.colorSpace=ae,this.tex.wrapS=_n,this.tex.repeat.set(1/ia,1);const e=new we({map:this.tex,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});this.mesh=new Jt(new Ze(1.002,1.002,1.002),e),this.mesh.layers.set(oo),this.mesh.renderOrder=2,this.mesh.visible=!1,t.add(this.mesh)}show(t,e,n,s){const r=Math.max(0,Math.min(ia-1,Math.floor(s*ia)));this.tex.offset.x=r/ia,this.mesh.position.set(t+.5,e+.5,n+.5),this.mesh.visible=!0}hide(){this.mesh.visible=!1}}const Fa=256,Rm=257,Cm=258,Dm=259,Pm=260,Lm=261,km=262,Im=263,AS=264,RS=265,CS=266,DS=267,PS=268,LS=269,kS=270,IS=271,US=272,NS=273,Um=274,kh=275,Nm=276,Ih=277,Fm=278,Uh=279,Om=280,Nh=281,Bm=282,zm=283,Hm=284,Wm=285,Gm=286,Vm=287,Xm=288,qm=289,Ym=290,ns=291,Si=292,$m=293,Oa=294,FS=295,OS=296,Km=297,jm=298,Zm=299,Qm=300,Jm=301;function Re(i,t,e,n){return{name:i,maxStack:1,food:null,tool:{kind:t,tier:e,speed:t==="sword"?1.5:t==="hoe"?1:n,maxDurability:e===1?59:e===2?131:e===3?250:1561}}}const Oi={[Fa]:{name:"apple",maxStack:64,food:{nutrition:4,saturationModifier:.3},tool:null},[Oa]:{name:"flint_and_steel",maxStack:1,food:null,tool:null},[FS]:{name:"nether_quartz",maxStack:64,food:null,tool:null},[OS]:{name:"diamond",maxStack:64,food:null,tool:null},[Rm]:{name:"stick",maxStack:64,food:null,tool:null},[Cm]:{name:"coal",maxStack:64,food:null,tool:null},[Dm]:Re("wooden_pickaxe","pickaxe",1,2),[Pm]:Re("wooden_axe","axe",1,2),[Lm]:Re("wooden_shovel","shovel",1,2),[km]:Re("wooden_sword","sword",1,2),[Im]:Re("wooden_hoe","hoe",1,2),[AS]:Re("stone_pickaxe","pickaxe",2,4),[RS]:Re("stone_axe","axe",2,4),[CS]:Re("stone_shovel","shovel",2,4),[DS]:Re("stone_sword","sword",2,4),[PS]:Re("stone_hoe","hoe",2,4),[LS]:Re("iron_pickaxe","pickaxe",3,6),[kS]:Re("iron_axe","axe",3,6),[IS]:Re("iron_shovel","shovel",3,6),[US]:Re("iron_sword","sword",3,6),[NS]:Re("iron_hoe","hoe",3,6),[Um]:{name:"iron_ingot",maxStack:64,food:null,tool:null},[Km]:Re("diamond_pickaxe","pickaxe",4,8),[jm]:Re("diamond_axe","axe",4,8),[Zm]:Re("diamond_shovel","shovel",4,8),[Qm]:Re("diamond_sword","sword",4,8),[Jm]:Re("diamond_hoe","hoe",4,8),[kh]:{name:"raw_porkchop",maxStack:64,food:{nutrition:3,saturationModifier:.3},tool:null},[Nm]:{name:"cooked_porkchop",maxStack:64,food:{nutrition:8,saturationModifier:.8},tool:null},[Ih]:{name:"raw_beef",maxStack:64,food:{nutrition:3,saturationModifier:.3},tool:null},[Fm]:{name:"cooked_beef",maxStack:64,food:{nutrition:8,saturationModifier:.8},tool:null},[Uh]:{name:"raw_mutton",maxStack:64,food:{nutrition:2,saturationModifier:.3},tool:null},[Om]:{name:"cooked_mutton",maxStack:64,food:{nutrition:6,saturationModifier:.8},tool:null},[Nh]:{name:"raw_chicken",maxStack:64,food:{nutrition:2,saturationModifier:.3},tool:null},[Bm]:{name:"cooked_chicken",maxStack:64,food:{nutrition:6,saturationModifier:.6},tool:null},[zm]:{name:"leather",maxStack:64,food:null,tool:null},[Hm]:{name:"wool",maxStack:64,food:null,tool:null},[Wm]:{name:"feather",maxStack:64,food:null,tool:null},[Gm]:{name:"egg",maxStack:16,food:null,tool:null},[Vm]:{name:"rotten_flesh",maxStack:64,food:{nutrition:4,saturationModifier:.1},tool:null},[Xm]:{name:"bone",maxStack:64,food:null,tool:null},[qm]:{name:"flint",maxStack:64,food:null,tool:null},[Ym]:{name:"string",maxStack:64,food:null,tool:null},[ns]:{name:"arrow",maxStack:64,food:null,tool:null},[Si]:{name:"bow",maxStack:1,food:null,tool:null},[$m]:{name:"gunpowder",maxStack:64,food:null,tool:null}},BS=Object.keys(Oi).map(Number);function Ea(i){return i in Oi}function hc(i){var t;return((t=Oi[i])==null?void 0:t.food)!=null}function zS(i){var t;return((t=Oi[i])==null?void 0:t.food)??null}function HS(i){var t;return((t=Oi[i])==null?void 0:t.name)??null}function ur(i){var t;return((t=Oi[i])==null?void 0:t.maxStack)??64}function eo(i){var e,n;const t=(n=(e=Oi[i])==null?void 0:e.tool)==null?void 0:n.maxDurability;return t!==void 0?t:i===Si?384:i===Oa?64:null}function Aa(i){var t;return((t=Oi[i])==null?void 0:t.tool)??null}const WS={1:"stone",2:"dirt",3:"grass",4:"cobblestone",5:"sand",6:"oak_log",7:"oak_planks",8:"coal_ore",10:"oak_leaves",11:"crafting_table",12:"iron_ore",13:"furnace",14:"torch",15:"gravel",26:"sandstone",18:"obsidian",19:"netherrack",20:"soul_sand",21:"glowstone",22:"nether_quartz_ore",24:"bedrock",27:"cactus",28:"ice",30:"spruce_log",31:"spruce_leaves",32:"coal_block",33:"iron_block",34:"quartz_block",35:"diamond_ore",36:"diamond_block",[Fa]:"apple",257:"stick",258:"coal",259:"wooden_pickaxe",260:"wooden_axe",261:"wooden_shovel",262:"wooden_sword",263:"wooden_hoe",264:"stone_pickaxe",265:"stone_axe",266:"stone_shovel",267:"stone_sword",268:"stone_hoe",269:"iron_pickaxe",270:"iron_axe",271:"iron_shovel",272:"iron_sword",273:"iron_hoe",274:"iron_ingot",275:"raw_porkchop",276:"cooked_porkchop",277:"raw_beef",278:"cooked_beef",279:"raw_mutton",280:"cooked_mutton",281:"raw_chicken",282:"cooked_chicken",283:"leather",284:"wool",285:"feather",286:"egg",287:"rotten_flesh",288:"bone",289:"flint",290:"string",291:"arrow",292:"bow",293:"gunpowder",294:"flint_and_steel",295:"nether_quartz",296:"diamond",297:"diamond_pickaxe",298:"diamond_axe",299:"diamond_shovel",300:"diamond_sword",301:"diamond_hoe"},GS=new Set(["stone","dirt","grass","cobblestone","sand","oak_log","oak_planks","coal_ore","oak_leaves","crafting_table","iron_ore","furnace","gravel","sandstone","obsidian","netherrack","soul_sand","glowstone","nether_quartz_ore","bedrock","cactus","ice","spruce_log","spruce_leaves","coal_block","iron_block","quartz_block","diamond_ore","diamond_block"]);let t0="classic";function rf(i){t0=i}const VS={1:"石头",2:"泥土",3:"草方块",4:"圆石",5:"沙子",6:"原木",7:"木板",8:"煤矿",10:"树叶",11:"工作台",12:"铁矿",13:"熔炉",14:"火把",15:"砂砾",26:"沙石",32:"煤炭块",33:"铁块",34:"石英块",35:"钻石矿石",36:"钻石块",256:"苹果",257:"木棍",258:"煤炭",259:"木镐",260:"木斧",261:"木锹",262:"木剑",263:"木锄",264:"石镐",265:"石斧",266:"石锹",267:"石剑",268:"石锄",269:"铁镐",270:"铁斧",271:"铁锹",272:"铁剑",273:"铁锄",274:"铁锭",275:"生猪排",276:"熟猪排",277:"生牛肉",278:"牛排",279:"生羊肉",280:"熟羊肉",281:"生鸡肉",282:"熟鸡肉",283:"皮革",284:"羊毛",285:"羽毛",286:"鸡蛋",287:"腐肉",288:"骨头",289:"燧石",290:"线",291:"箭",292:"弓",293:"火药",294:"打火石",295:"下界石英",296:"钻石",297:"钻石镐",298:"钻石斧",299:"钻石锹",300:"钻石剑",301:"钻石锄"},as=i=>{const t=WS[i];if(!t)return null;const e=t0==="classic"&&GS.has(t)?"icons_classic":"icons";return yr(`textures/${e}/${t}.png`)},e0=i=>VS[i]??`#${i}`,tr=.25,XS=22,of=tr/2;function dn(i,t,e,n,s=Math.random,r=1,o){return{id:i,count:r,dur:o,x:t+.5,y:e+.5,z:n+.5,vx:(s()-.5)*2,vy:2.5,vz:(s()-.5)*2,age:0}}function qS(i,t,e=.75){const n=e*e;for(let s=0;s<i.length;s++){const r=i[s],o=t(r.id);if(!(r.count>=o))for(let a=i.length-1;a>s;a--){const l=i[a];if(l.id!==r.id||r.dur!==void 0||l.dur!==void 0)continue;const c=r.x-l.x,h=r.y-l.y,u=r.z-l.z;if(c*c+h*h+u*u>n)continue;const d=Math.min(o-r.count,l.count);if(!(d<=0)&&(r.count+=d,l.count-=d,l.age<r.age&&(r.age=l.age),l.count<=0&&i.splice(a,1),r.count>=o))break}}}function YS(i,t,e){i.age+=e,i.vy-=XS*e;const n=i.x+i.vx*e,s=i.z+i.vz*e;let r=i.y+i.vy*e;const o=r-of;return i.vy<=0&&t.isSolid(Math.floor(n),Math.floor(o),Math.floor(s))&&(r=Math.floor(o)+1+of,i.vy=0,i.vx*=.6,i.vz*=.6),i.x=n,i.y=r,i.z=s,i}function $S(i,t,e,n){if(i.age<.3)return!1;const s=i.x-t,r=i.y-e,o=i.z-n;return s*s+r*r+o*o<1.4*1.4}const zr=4,af=10,KS=16,sa=.5/(KS*zr);function jS(i){const t=new Ze(tr,tr,tr),e=Ie[i].faces,n=t.attributes.uv;for(let s=0;s<6;s++){const r=e[s],o=r%zr,a=Math.floor(r/zr),l=o/zr+sa,c=(o+1)/zr-sa,h=1-(a+1)/af+sa,u=1-a/af-sa,d=s*4;n.setXY(d+0,l,u),n.setXY(d+1,c,u),n.setXY(d+2,l,h),n.setXY(d+3,c,h)}return n.needsUpdate=!0,t}class ZS{constructor(t,e){y(this,"meshes",new Map);y(this,"geoCache",new Map);y(this,"mat");y(this,"itemMats",new Map);this.scene=t,this.mat=new we({map:e})}setAtlas(t){this.mat.map=t,this.mat.needsUpdate=!0;for(const[e,n]of this.meshes)Ea(e.id)||(n.material.map=t,n.material.needsUpdate=!0)}itemMat(t){let e=this.itemMats.get(t);if(!e){const n=new xr().load(as(t)??yr("textures/icons/apple.png"));n.magFilter=de,n.minFilter=de,n.colorSpace=ae,e=new we({map:n,transparent:!0,alphaTest:.5,side:on}),this.itemMats.set(t,e)}return e}geo(t){let e=this.geoCache.get(t);return e||(e=Ea(t)?new an(tr,tr):jS(t),this.geoCache.set(t,e)),e}sync(t,e){const n=new Set(t);for(const[s,r]of this.meshes)n.has(s)||(this.scene.remove(r),r.material.dispose(),this.meshes.delete(s));for(const s of t){let r=this.meshes.get(s);if(r||(r=new Jt(this.geo(s.id),(Ea(s.id)?this.itemMat(s.id):this.mat).clone()),this.scene.add(r),this.meshes.set(s,r)),e){const a=e(s.x,s.y+.5,s.z);r.material.color.setScalar(a)}const o=.1+Math.sin(s.age*3)*.06;r.position.set(s.x,s.y+o,s.z),r.rotation.y=s.age*1.8}}clear(){for(const[,t]of this.meshes)this.scene.remove(t),t.material.dispose();this.meshes.clear()}}function QS(i){var e;const t=((e=Ie[i])==null?void 0:e.name)??"";return["obsidian"].includes(t)?{roughness:.38,specularIntensity:.62}:["iron_block","diamond_block","quartz_block"].includes(t)?{roughness:.54,specularIntensity:.5}:t.includes("log")||["oak_planks","crafting_table"].includes(t)?{roughness:.8,specularIntensity:.34}:{roughness:.91,specularIntensity:.26}}function JS(i){return i===null||i<=0?"none":i===es?as(i)?"sprite":"none":Ie[i]?"block":as(i)?"sprite":"none"}const uc=.8;function tb(i){const t=Math.PI/180,e=Math.sin(Math.sqrt(Math.max(0,i))*Math.PI),n=Math.sin(i*i*Math.PI);return{tx:-.4*e*uc,ty:.2*Math.sin(Math.sqrt(Math.max(0,i))*Math.PI*2)*uc,tz:-.2*Math.sin(i*Math.PI)*uc,ry1:(45+n*-20)*t,rz:e*-20*t,rx:e*-80*t,ry2:-45*t}}const Hr=4,lf=10,eb=16,ra=.01/(eb*Hr),er=[.6,.6,1,.5,.8,.8],nb=.3,ib=new U(1,0,0),sb=new U(0,1,0);function rb(i,t,e,n){const s=new Ze(i,t,e),r=new bt(n),o=[];for(let a=0;a<6;a++)for(let l=0;l<4;l++)o.push(r.r*er[a],r.g*er[a],r.b*er[a]);return s.setAttribute("color",new ke(o,3)),s}function ob(i,t){const e=new Ze(t,t,t),n=Ie[i].faces,s=e.attributes.uv,r=[];for(let o=0;o<6;o++){const a=n[o],l=a%Hr,c=Math.floor(a/Hr),h=l/Hr+ra,u=(l+1)/Hr-ra,d=1-(c+1)/lf+ra,p=1-c/lf-ra,g=o*4;s.setXY(g+0,h,p),s.setXY(g+1,u,p),s.setXY(g+2,h,d),s.setXY(g+3,u,d);for(let v=0;v<4;v++)r.push(er[o],er[o],er[o])}return s.needsUpdate=!0,e.setAttribute("color",new ke(r,3)),e}class ab{constructor(t){y(this,"scene",new hr);y(this,"camera",new Ke(70,1,.01,10));y(this,"atlas");y(this,"root",new gn);y(this,"arm");y(this,"item",null);y(this,"itemId",null);y(this,"spriteTex",new Map);y(this,"swingT",0);y(this,"wantSwing",!1);y(this,"bobPhase",0);y(this,"eating",!1);y(this,"eatT",0);y(this,"hurtT",0);y(this,"bright",1);y(this,"underwater",!1);y(this,"lightingQuality","off");y(this,"skyLight",new Lw(14478591,1581105,0));y(this,"skyFill",new zd(14478591,0));y(this,"blockLight",new zd(16747834,0));y(this,"sunLight",new Jp(16777215,0));y(this,"invViewQ",new Ni);y(this,"viewSun",new U);y(this,"viewUp",new U);y(this,"coolSky",new bt().setRGB(.68,.82,1));y(this,"lowSun",new bt().setRGB(1.38,.58,.16));y(this,"noonSun",new bt().setRGB(1.08,1,.88));y(this,"underwaterTint",new bt().setRGB(.62,.84,.96));y(this,"neutralTint",new bt(1,1,1));this.atlas=t,this.arm=new Jt(rb(.14,.5,.14,15249530),new we({vertexColors:!0})),this.arm.position.set(0,-.22,0),this.root.add(this.arm),this.root.position.set(.5,-.45,-.7),this.root.rotation.set(.2,-.5,.45),this.scene.add(this.root),this.sunLight.castShadow=!1,this.scene.add(this.skyLight,this.skyFill,this.blockLight,this.sunLight,this.sunLight.target)}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}itemTexture(t){const e=this.spriteTex.get(t);if(e)return e;const n=as(t);if(!n)return null;const s=new xr().load(n);return s.magFilter=de,s.minFilter=de,s.generateMipmaps=!1,s.colorSpace=ae,this.spriteTex.set(t,s),s}setBrightness(t){this.bright+=(t-this.bright)*.12,this.applyViewTint()}setUnderwater(t){t!==this.underwater&&(this.underwater=t,this.applyViewTint())}setLightingQuality(t){if(t===this.lightingQuality)return;this.lightingQuality=t,t==="off"&&(this.skyLight.intensity=0,this.skyFill.intensity=0,this.blockLight.intensity=0,this.sunLight.intensity=0);const e=this.itemId;this.itemId=null,this.setHeld(e)}setLighting(t){if(this.lightingQuality==="off")return;const e=c=>{const h=si.clamp(c,0,15)/15;return h/(4-3*h)},n=t.sunEnabled?e(t.skyLevel-t.skyDarken):0,s=e(t.blockLevel),r=(c,h)=>c+(h-c)*.14;this.skyLight.color.copy(t.skyColor).lerp(this.coolSky,.25),this.underwater&&this.skyLight.color.multiply(this.underwaterTint),this.skyLight.groundColor.setRGB(.25,.3,.4),this.skyLight.intensity=r(this.skyLight.intensity,Math.max(.035,n*1.05)),this.skyFill.color.copy(this.skyLight.color),this.skyFill.intensity=r(this.skyFill.intensity,Math.max(.012,n*.32)),this.blockLight.color.setRGB(1,.56,.25),this.blockLight.intensity=r(this.blockLight.intensity,s*.62),this.invViewQ.copy(t.cameraQuaternion).invert(),this.viewSun.copy(t.sunDirectionWorld).applyQuaternion(this.invViewQ).normalize(),this.viewUp.set(0,1,0).applyQuaternion(this.invViewQ).normalize(),this.sunLight.position.copy(this.viewSun).multiplyScalar(5),this.sunLight.target.position.set(0,0,0),this.skyLight.position.copy(this.viewUp);const o=si.clamp(t.sunDirectionWorld.y*3,0,1);this.sunLight.color.copy(this.lowSun).lerp(this.noonSun,o),this.underwater&&this.sunLight.color.multiply(this.underwaterTint);const a=t.sunEnabled?si.smoothstep(t.skyLevel,11,15):0,l=si.smoothstep(t.sunDirectionWorld.y,.02,.2);this.sunLight.intensity=r(this.sunLight.intensity,a*l*1.55*(this.underwater?.62:1))}setHeld(t){if(t===this.itemId)return;if(this.itemId=t,this.item){if(this.root.remove(this.item),this.item.geometry.dispose(),Array.isArray(this.item.material))for(const n of this.item.material)n.dispose();else this.item.material.dispose();this.item=null}const e=JS(t);if(e==="block"&&t!==null){const n=QS(t),s=this.lightingQuality==="off"?new we({map:this.atlas,vertexColors:!0}):new Nd({map:this.atlas,roughness:n.roughness,metalness:0,ior:1.35,specularIntensity:n.specularIntensity});this.item=new Jt(ob(t,.32),s),this.item.position.set(-.02,.16,.04),this.item.rotation.set(-.1,.6,.1),this.root.add(this.item)}else if(e==="sprite"&&t!==null){const n=this.itemTexture(t);n&&(this.item=new Jt(new an(.34,.34),new we({map:n,transparent:!0,alphaTest:.5,side:on})),this.item.position.set(.04,.2,.04),this.item.rotation.set(0,-.35,.35),this.root.add(this.item))}this.applyViewTint()}applyViewTint(){const t=this.underwater?this.underwaterTint:this.neutralTint;this.arm.material.color.copy(t).multiplyScalar(this.bright),!(!this.item||Array.isArray(this.item.material))&&(this.item.material instanceof Nd?this.item.material.color.copy(t):this.item.material instanceof we&&this.item.material.color.copy(t).multiplyScalar(this.bright))}swing(){this.wantSwing=!0}hurtShake(){this.hurtT=1}setAtlas(t){this.atlas=t;const e=this.itemId;this.itemId=null,this.setHeld(e)}setEating(t){this.eating=t,t||(this.eatT=0)}update(t,e){this.wantSwing&&this.swingT===0&&(this.swingT=1e-4),this.swingT>0&&(this.swingT+=t/nb,this.swingT>=1&&(this.swingT=this.wantSwing?1e-4:0)),this.wantSwing=!1,this.bobPhase+=t*e*7;const n=Math.cos(this.bobPhase)*.012*Math.min(1,e),s=Math.abs(Math.sin(this.bobPhase))*.012*Math.min(1,e),r=tb(this.swingT);if(this.root.position.set(.42+n+r.tx,-.28+s+r.ty,-.72+r.tz),this.root.rotation.set(.1,-.5,.4),this.root.rotateOnWorldAxis(ib,r.rx),this.root.rotateOnWorldAxis(sb,r.rz),this.eating){this.eatT+=t;const o=Math.sin(this.eatT*30);this.root.position.x+=-.18+o*.015,this.root.position.y+=.16+o*.02,this.root.position.z+=.18,this.root.rotateX(.4+o*.12),this.root.rotateZ(-.25)}if(this.hurtT>0){this.hurtT=Math.max(0,this.hurtT-t*4);const o=this.hurtT*this.hurtT,a=Math.sin(this.hurtT*45);this.root.position.x+=a*.05*o,this.root.position.y+=-.06*o,this.root.rotateZ(a*.35*o)}}}const cf=.6,Ba=.6,ls=1.8,Zn=1.62,lb=1.8,cb=1.54,hb=.3,ub=.2,za=.08,Ha=.98,no=.42,hf=4.317/20,db=5.612/20,fb=.42,pb=.84,uf=.42,oa=Ba/2;function Wa(i,t,e=ls){const s=Math.floor(i.x-oa+1e-6),r=Math.ceil(i.x+oa-1e-6)-1,o=Math.floor(i.y+1e-6),a=Math.ceil(i.y+e-1e-6)-1,l=Math.floor(i.z-oa+1e-6),c=Math.ceil(i.z+oa-1e-6)-1;for(let h=o;h<=a;h++)for(let u=s;u<=r;u++)for(let d=l;d<=c;d++)if(t.isSolid(u,h,d))return!0;return!1}function Ns(i,t,e,n,s=ls){if(e===0)return!1;const r=Math.sign(e),o=.2;let a=Math.abs(e);for(;a>1e-9;){const l=Math.min(a,o)*r;if(a-=Math.abs(l),i[t]+=l,Wa(i,n,s)){i[t]-=l;let c=l/2;for(let h=0;h<24&&Math.abs(c)>1e-5;h++)i[t]+=c,Wa(i,n,s)&&(i[t]-=c),c/=2;return!0}}return!1}function df(i){const t=Math.cos(i.yaw),e=Math.sin(i.yaw);let n=i.forward*t-i.right*e,s=i.forward*e+i.right*t;const r=Math.hypot(n,s);return r>1e-9?(n/=r,s/=r):(n=0,s=0),{x:n,z:s}}function Ur(i,t,e=ls){return Wa(i,t,e)?!1:Wa({x:i.x,y:i.y-.06,z:i.z},t,e)}function ff(i,t,e){var A,E,C;const n={...i.pos},s={...i.vel};if(t.fly){const I=df(t),b=t.sprint?pb:fb;return s.x=I.x*b,s.z=I.z*b,s.y=(t.flyUp?uf:0)-(t.flyDown?uf:0),Ns(n,"y",s.y,e)&&(s.y=0),Ns(n,"x",s.x,e)&&(s.x=0),Ns(n,"z",s.z,e)&&(s.z=0),{pos:n,vel:s,onGround:Ur(n,e),kbx:0,kbz:0}}const r=t.crouch===!0,o=r?lb:ls,a=Ur(n,e,o),l=((A=e.isWater)==null?void 0:A.call(e,Math.floor(n.x),Math.floor(n.y+.1),Math.floor(n.z)))??!1;let c=!1;t.jump&&(a||l)&&(s.y=l?.5:no,c=!0);const h=df(t);let u=l?hf*.7:t.sprint&&!r?db:hf;r&&(u*=hb),t.slow&&(u*=ub);const d=i.kbx??0,p=i.kbz??0,g=Math.hypot(h.x,h.z)>1e-9;if(!a&&!l)s.x=s.x*.91+h.x*u*.09+d,s.z=s.z*.91+h.z*u*.09+p;else if(g||l){let I=u;if(g&&a&&!l){const b=Math.floor(n.x),S=Math.floor(n.y-.1),P=Math.floor(n.z);(((E=e.getBlock)==null?void 0:E.call(e,b,S,P))??0)===cm&&(I*=.4)}s.x=h.x*I+d,s.z=h.z*I+p}else{const I=Math.floor(n.x),b=Math.floor(n.y-.1),S=Math.floor(n.z),P=((C=e.getBlock)==null?void 0:C.call(e,I,b,S))??0,X=u1(P);s.x=s.x*X+d,s.z=s.z*X+p}Ns(n,"y",s.y,e,o)&&(s.y=0);const v=r&&a&&s.y<=0,m=n.x;Ns(n,"x",s.x,e,o)&&(s.x=0),v&&!Ur(n,e,o)&&(n.x=m,s.x=0);const f=n.z;Ns(n,"z",s.z,e,o)&&(s.z=0),v&&!Ur(n,e,o)&&(n.z=f,s.z=0);const x=Ur(n,e,o);c?s.y=(s.y-za)*Ha:l?t.swimUp?s.y=.16:s.y=Math.max(s.y*.8-.02,-.15):x?s.y=0:s.y=(s.y-za)*Ha;const _=s.x===0?0:d*cf,M=s.z===0?0:p*cf;return{pos:n,vel:s,onGround:x,kbx:Math.abs(_)<.005?0:_,kbz:Math.abs(M)<.005?0:M}}const n0=.05,dc=.99,mb=.25;function pf(i,t,e,n,s,r,o,a,l){const c=Math.hypot(n,s,r)||1;return{x:i,y:t,z:e,vx:n/c*o,vy:s/c*o,vz:r/c*o,age:0,stuck:!1,fromPlayer:a,damage:l}}function gb(i,t){if(i.age++,i.stuck)return i;i.vy-=n0,i.vx*=dc,i.vy*=dc,i.vz*=dc;const e=Math.hypot(i.vx,i.vy,i.vz),n=Math.max(1,Math.ceil(e/mb)),s=i.vx/n,r=i.vy/n,o=i.vz/n;for(let a=0;a<n;a++){const l=i.x+s,c=i.y+r,h=i.z+o;if(t.isSolid(Math.floor(l),Math.floor(c),Math.floor(h)))return i.stuck=!0,i.vx=i.vy=i.vz=0,i;i.x=l,i.y=c,i.z=h}return i}const vb=new U(0,0,1);class _b{constructor(t){y(this,"meshes",new Map);y(this,"geoShaft",new Ze(.05,.05,.5));y(this,"geoHead",new Ze(.09,.09,.14));y(this,"geoFletch",new Ze(.16,.02,.12));y(this,"matShaft",new we({color:7031339}));y(this,"matHead",new we({color:10132130}));y(this,"matFletch",new we({color:15263980}));y(this,"tmp",new U);this.scene=t}make(){const t=new gn;t.add(new Jt(this.geoShaft,this.matShaft));const e=new Jt(this.geoHead,this.matHead);e.position.z=.3,t.add(e);const n=new Jt(this.geoFletch,this.matFletch);n.position.z=-.22,t.add(n);const s=new Jt(this.geoFletch,this.matFletch);return s.position.z=-.22,s.rotation.z=Math.PI/2,t.add(s),t}sync(t){const e=new Set(t);for(const[n,s]of this.meshes)e.has(n)||(this.scene.remove(s),this.meshes.delete(n));for(const n of t){let s=this.meshes.get(n);s||(s=this.make(),this.scene.add(s),this.meshes.set(n,s)),s.position.set(n.x,n.y,n.z);const r=Math.hypot(n.vx,n.vy,n.vz);r>1e-4&&(this.tmp.set(n.vx/r,n.vy/r,n.vz/r),s.quaternion.setFromUnitVectors(vb,this.tmp))}}clear(){for(const[,t]of this.meshes)this.scene.remove(t);this.meshes.clear()}}function Ga(i,t,e,n){const r=Math.floor(i.x-t+1e-6),o=Math.ceil(i.x+t-1e-6)-1,a=Math.floor(i.y+1e-6),l=Math.ceil(i.y+e-1e-6)-1,c=Math.floor(i.z-t+1e-6),h=Math.ceil(i.z+t-1e-6)-1;for(let u=a;u<=l;u++)for(let d=r;d<=o;d++)for(let p=c;p<=h;p++)if(n.isSolid(d,u,p))return!0;return!1}function fc(i,t,e,n,s,r){if(e===0)return!1;const o=Math.sign(e),a=.2;let l=Math.abs(e);for(;l>1e-9;){const c=Math.min(l,a)*o;if(l-=Math.abs(c),i[t]+=c,Ga(i,n,s,r)){i[t]-=c;let h=c/2;for(let u=0;u<24&&Math.abs(h)>1e-5;u++)i[t]+=h,Ga(i,n,s,r)&&(i[t]-=h),h/=2;return!0}}return!1}function xb(i,t,e,n){return Ga(i,t,e,n)?!1:Ga({x:i.x,y:i.y-.06,z:i.z},t,e,n)}function i0(i,t,e,n,s){const r=t/2,o={...i},a={...n};return fc(o,"y",a.y,r,e,s)&&(a.y=0),fc(o,"x",a.x,r,e,s)&&(a.x=0),fc(o,"z",a.z,r,e,s)&&(a.z=0),{pos:o,vel:a,onGround:xb(o,r,e,s)}}const Gn={pig:{hp:10,width:.9,height:.9,moveSpeed:.09,fallImmune:!1},cow:{hp:10,width:.9,height:1.4,moveSpeed:.08,fallImmune:!1},sheep:{hp:8,width:.9,height:1.3,moveSpeed:.08,fallImmune:!1},chicken:{hp:4,width:.4,height:.7,moveSpeed:.07,fallImmune:!0},zombie:{hp:20,width:.6,height:1.9,moveSpeed:.13,fallImmune:!1,hostile:!0,attack:3,sense:35},skeleton:{hp:20,width:.6,height:1.95,moveSpeed:.15,fallImmune:!1,hostile:!0,attack:2,sense:16,ranged:!0},creeper:{hp:20,width:.6,height:1.7,moveSpeed:.15,fallImmune:!1,hostile:!0,attack:43,sense:16,explosive:!0,sunImmune:!0},husk:{hp:20,width:.6,height:1.95,moveSpeed:.13,fallImmune:!1,hostile:!0,attack:3,sense:35,sunImmune:!0}},yb=i=>Gn[i].hostile===!0,Mb=1.8,wb=10,mf=.4,Sb=.36,gf=-.05,bb=.06,vf=.85,Tb=.12;function ll(i,t,e,n){return{kind:i,pos:{x:t,y:e,z:n},vel:{x:0,y:0,z:0},yaw:0,onGround:!1,health:Gn[i].hp,hurtCooldown:0,ai:{state:"idle",timer:20,target:null},eggTimer:i==="chicken"?6e3:0,atkCd:0,fuse:0}}function s0(i){return{...i,pos:{...i.pos},vel:{...i.vel},ai:{...i.ai,target:i.ai.target?{...i.ai.target}:null}}}function Eb(i,t){return{x:i.x+(t()*2-1)*8,y:i.y,z:i.z+(t()*2-1)*8}}const pc=i=>20+Math.floor(i()*40);function Ab(i,t,e){var v,m;const n=Gn[i.kind],s=s0(i),r=[];s.hurtCooldown>0&&s.hurtCooldown--,s.ai.timer--;let o=0,a=0,l=n.moveSpeed;if(s.ai.state==="idle")s.ai.timer<=0&&(s.ai.state="wander",s.ai.target=Eb(s.pos,e),s.ai.timer=40+Math.floor(e()*60));else if(s.ai.state==="wander")if(!s.ai.target||s.ai.timer<=0)s.ai.state="idle",s.ai.target=null,s.ai.timer=pc(e);else{const f=s.ai.target.x-s.pos.x,x=s.ai.target.z-s.pos.z,_=Math.hypot(f,x);_<.7?(s.ai.state="idle",s.ai.target=null,s.ai.timer=pc(e)):(o=f/_,a=x/_)}else l=n.moveSpeed*Mb,s.ai.timer<=0?(s.ai.state="idle",s.ai.target=null,s.ai.timer=pc(e)):(o=Math.cos(s.yaw),a=Math.sin(s.yaw));if((o!==0||a!==0)&&s.onGround){const f=.5+n.width/2,x=Math.floor(s.pos.x+o*f),_=Math.floor(s.pos.z+a*f),M=Math.floor(s.pos.y);!t.isSolid(x,M-1,_)&&!t.isSolid(x,M-2,_)&&(o=0,a=0,s.ai.target=null)}let c=!1;if(o!==0||a!==0){const f=Math.hypot(o,a)||1,x=Math.floor(s.pos.x+o/f*(n.width/2+.3)),_=Math.floor(s.pos.z+a/f*(n.width/2+.3)),M=Math.floor(s.pos.y);t.isSolid(x,M,_)&&!t.isSolid(x,M+1,_)&&(c=!0)}const h=c&&s.onGround,u=(s.kbx??0)*.8,d=(s.kbz??0)*.8;if(s.kbx=Math.abs(u)<.01?0:u,s.kbz=Math.abs(d)<.01?0:d,s.vel.x=o*l+(s.kbx??0),s.vel.z=a*l+(s.kbz??0),((v=t.isWater)==null?void 0:v.call(t,Math.floor(s.pos.x),Math.floor(s.pos.y),Math.floor(s.pos.z)))??!1){const f=((m=t.isWater)==null?void 0:m.call(t,Math.floor(s.pos.x),Math.floor(s.pos.y)+1,Math.floor(s.pos.z)))??!1;c?s.vel.y=no:s.vel.y=f?Math.min((s.vel.y+bb)*vf,Tb):Math.min(s.vel.y*vf,0)}else s.vel.y=(s.vel.y-za)*Ha,h&&(s.vel.y=no),n.fallImmune&&s.vel.y<gf&&(s.vel.y=gf);const g=i0(s.pos,n.width,n.height,s.vel,t);return s.pos=g.pos,s.vel=g.vel,s.onGround=g.onGround,s.onGround&&s.vel.y<0&&(s.vel.y=0),(Math.abs(s.vel.x)>1e-4||Math.abs(s.vel.z)>1e-4)&&(s.yaw=Math.atan2(s.vel.z,s.vel.x)),s.kind==="chicken"&&(s.eggTimer--,s.eggTimer<=0&&(r.push({kind:"layEgg",pos:{...s.pos}}),s.eggTimer=6e3+Math.floor(e()*6001))),{mob:s,events:r}}function mc(i,t,e,n){const s=s0(i),r=[];if(s.hurtCooldown>0)return{mob:s,events:r};s.health-=t,s.hurtCooldown=wb,r.push({kind:"hurt"});const o=Math.hypot(e.x,e.z)||1;return s.kbx=e.x/o*mf,s.kbz=e.z/o*mf,s.vel.x=s.kbx,s.vel.z=s.kbz,s.vel.y=Sb,s.onGround=!1,s.yaw=Math.atan2(s.vel.z,s.vel.x),Gn[s.kind].hostile?(s.ai.state="chase",s.ai.timer=0,s.aggro=300):(s.ai.state="panic",s.ai.target=null,s.ai.timer=30+Math.floor(n()*10)),s.health<=0&&(r.push({kind:"drops",items:r0(s.kind,n),pos:{...s.pos}}),r.push({kind:"death",pos:{...s.pos}})),{mob:s,events:r}}function r0(i,t){switch(i){case"pig":return[{id:kh,count:1+Math.floor(t()*3)}];case"cow":{const e=[{id:Ih,count:1+Math.floor(t()*3)}],n=Math.floor(t()*3);return n>0&&e.push({id:zm,count:n}),e}case"sheep":return[{id:Hm,count:1},{id:Uh,count:1+Math.floor(t()*2)}];case"chicken":{const e=[{id:Nh,count:1}],n=Math.floor(t()*3);return n>0&&e.push({id:Wm,count:n}),e}case"zombie":case"husk":{const e=Math.floor(t()*3);return e>0?[{id:Vm,count:e}]:[]}case"skeleton":{const e=[],n=Math.floor(t()*3);n>0&&e.push({id:Xm,count:n});const s=Math.floor(t()*3);s>0&&e.push({id:Ym,count:s});const r=Math.floor(t()*3);return r>0&&e.push({id:ns,count:r}),e}case"creeper":{const e=Math.floor(t()*3);return e>0?[{id:$m,count:e}]:[]}}}const o0=1.9,Rb=1,Cb=1.7,Db=18,Pb=.05,Lb=.6,kb=15,Ib=5,Ub=10,Nb=35,Fb=3,Ob=30,Bb=3,zb=.06,_f=.85,Hb=.12;function gc(i,t,e){const n=e.x-t.x,s=e.y-t.y,r=e.z-t.z,o=Math.ceil(Math.hypot(n,s,r)/.5);for(let a=1;a<o;a++){const l=a/o;if(i.isSolid(Math.floor(t.x+n*l),Math.floor(t.y+s*l),Math.floor(t.z+r*l)))return!1}return!0}function Wb(i){return{...i,pos:{...i.pos},vel:{...i.vel},ai:{...i.ai,target:i.ai.target?{...i.ai.target}:null}}}function Gb(i,t,e,n,s){var C,I;const r=Gn[i.kind],o=Wb(i),a=[];o.hurtCooldown>0&&(o.hurtCooldown-=Rb),o.atkCd>0&&o.atkCd--;let l=0,c=0,h=r.moveSpeed;const u=Math.max(0,(o.aggro??0)-1);o.aggro=u;const d=u>0?64:r.sense??16;let p=1/0,g=null;if(n){const b=n.x-o.pos.x,S=n.z-o.pos.z;if(p=Math.hypot(b,n.y-o.pos.y,S),p<=d&&p>.001){o.ai.state="chase",o.ai.target={...n};const P=b/p,X=S/p;r.ranged?(g=n,p<Ib?(l=-P,c=-X):p>Ub&&(l=P,c=X)):(l=P,c=X)}}if(l===0&&c===0)if(h=r.moveSpeed*Lb,o.ai.timer--,o.ai.state==="chase")o.ai.state="idle",o.ai.target=null,o.ai.timer=20+Math.floor(e()*40);else if(o.ai.state==="wander"&&o.ai.target){const b=o.ai.target.x-o.pos.x,S=o.ai.target.z-o.pos.z,P=Math.hypot(b,S);P<.7||o.ai.timer<=0?(o.ai.state="idle",o.ai.target=null,o.ai.timer=20+Math.floor(e()*40)):(l=b/P,c=S/P)}else o.ai.timer<=0&&(o.ai.state="wander",o.ai.target={x:o.pos.x+(e()*2-1)*8,y:o.pos.y,z:o.pos.z+(e()*2-1)*8},o.ai.timer=40+Math.floor(e()*60));const v={x:o.pos.x,y:o.pos.y+r.height*.85,z:o.pos.z},m=n?{x:n.x,y:n.y+1,z:n.z}:null;if(r.ranged){if(m&&p<=kb&&o.atkCd<=0&&gc(t,v,m)){const b=p/o0,S=.5*n0*b*b*1.15,P=m.x-v.x,X=m.y+S-v.y,V=m.z-v.z,tt=Math.hypot(P,X,V)||1;a.push({kind:"shootArrow",from:v,dir:{x:P/tt,y:X/tt,z:V/tt},damage:1+Math.floor(e()*4)}),o.atkCd=Nb}}else if(r.explosive){const b=o.fuse>0?7:Fb;if(m&&p<=b&&gc(t,v,m)){if(o.fuse++,l=0,c=0,o.fuse>=Ob)return a.push({kind:"explode",pos:{...o.pos},radius:Bb,damage:r.attack??43}),a.push({kind:"death",pos:{...o.pos}}),{mob:o,events:a}}else o.fuse=Math.max(0,o.fuse-1)}else m&&p<=Cb&&o.atkCd<=0&&gc(t,v,m)&&(a.push({kind:"attackPlayer",damage:r.attack??2}),o.atkCd=Db);if((l!==0||c!==0)&&o.onGround){const b=.5+r.width/2,S=Math.floor(o.pos.x+l*b),P=Math.floor(o.pos.z+c*b),X=Math.floor(o.pos.y);!t.isSolid(S,X-1,P)&&!t.isSolid(S,X-2,P)&&(l=0,c=0,o.ai.target=null)}let f=!1;if(l!==0||c!==0){const b=Math.hypot(l,c)||1,S=Math.floor(o.pos.x+l/b*(r.width/2+.3)),P=Math.floor(o.pos.z+c/b*(r.width/2+.3)),X=Math.floor(o.pos.y);t.isSolid(S,X,P)&&!t.isSolid(S,X+1,P)&&(f=!0)}const x=f&&o.onGround,_=(o.kbx??0)*.8,M=(o.kbz??0)*.8;if(o.kbx=Math.abs(_)<.01?0:_,o.kbz=Math.abs(M)<.01?0:M,o.vel.x=l*h+(o.kbx??0),o.vel.z=c*h+(o.kbz??0),((C=t.isWater)==null?void 0:C.call(t,Math.floor(o.pos.x),Math.floor(o.pos.y),Math.floor(o.pos.z)))??!1){const b=((I=t.isWater)==null?void 0:I.call(t,Math.floor(o.pos.x),Math.floor(o.pos.y)+1,Math.floor(o.pos.z)))??!1;f?o.vel.y=no:o.vel.y=b?Math.min((o.vel.y+zb)*_f,Hb):Math.min(o.vel.y*_f,0)}else o.vel.y=(o.vel.y-za)*Ha,x&&(o.vel.y=no);const E=i0(o.pos,r.width,r.height,o.vel,t);return o.pos=E.pos,o.vel=E.vel,o.onGround=E.onGround,o.onGround&&o.vel.y<0&&(o.vel.y=0),(Math.abs(o.vel.x)>1e-4||Math.abs(o.vel.z)>1e-4)&&(o.yaw=Math.atan2(o.vel.z,o.vel.x)),g&&(o.yaw=Math.atan2(g.z-o.pos.z,g.x-o.pos.x)),s&&!r.sunImmune&&(o.health-=Pb),o.health<=0&&(a.push({kind:"drops",items:r0(o.kind,e),pos:{...o.pos}}),a.push({kind:"death",pos:{...o.pos}})),{mob:o,events:a}}const Vb=14;function Xb(i,t){return t<.4?i==="desert"?"husk":"zombie":t<.75?"skeleton":"creeper"}function qb(i,t,e,n){return!(i.getBlock(t,e-1,n)!==om||_e(i.getBlock(t,e,n))||_e(i.getBlock(t,e+1,n)))}function xf(i,t,e,n,s,r,o=24,a=44,l=null,c=Math.PI){for(let h=0;h<12;h++){const u=l===null?n()*Math.PI*2:l+(n()*2-1)*c,d=o+n()*(a-o),p=Math.floor(t+Math.cos(u)*d),g=Math.floor(e+Math.sin(u)*d),v=r(p,g);if(s.getBlock(p,v,g)===om)return Kb(i,p+.5,v+1,g+.5,n,s)}return[]}function Zc(i,t,e,n){return!(!_e(i.getBlock(t,e-1,n))||_e(i.getBlock(t,e,n))||_e(i.getBlock(t,e+1,n)))}function a0(i,t,e,n){const s=Vb-1;for(let r=-s;r<=s;r++){const o=s-Math.abs(r);for(let a=-o;a<=o;a++){const l=o-Math.abs(a);for(let c=-l;c<=l;c++)if(i.getBlock(t+c,e+r,n+a)===es)return!1}}return!0}function Yb(i,t,e,n,s,r,o=16,a=32,l){for(let c=0;c<14;c++){const h=n()*Math.PI*2,u=o+n()*(a-o),d=Math.floor(t+Math.cos(h)*u),p=Math.floor(e+Math.sin(h)*u),g=r(d,p);if(l?l(d,g+1,p)>7:!a0(s,d,g+1,p))continue;const v=[],m=1+Math.floor(n()*3);for(let f=0;f<m;f++){const x=d+Math.floor((n()*2-1)*2),_=p+Math.floor((n()*2-1)*2),M=r(x,_);Zc(s,x,M+1,_)&&v.push(ll(i,x+.5,M+1,_+.5))}if(v.length)return v}return[]}function $b(i,t,e,n,s,r,o,a=5,l=24,c){for(let u=0;u<24;u++){const d=s()*Math.PI*2,p=a+s()*(l-a),g=Math.floor(t+Math.cos(d)*p),v=Math.floor(n+Math.sin(d)*p),m=Math.min(Math.floor(e)+8,o(g,v)-5),f=Math.max(2,Math.floor(e)-14);for(let x=m;x>=f;x--){if(!Zc(r,g,x,v)||(c?c(g,x,v)>7:!a0(r,g,x,v)))continue;const _=[],M=1+Math.floor(s()*2);for(let A=0;A<M;A++){const E=g+Math.floor((s()*2-1)*2),C=v+Math.floor((s()*2-1)*2);for(let I=1;I>=-1;I--){const b=x+I;if(b<o(E,C)-5&&Zc(r,E,b,C)){_.push(ll(i,E+.5,b,C+.5));break}}}if(_.length)return _}}return[]}function Kb(i,t,e,n,s,r){const o=[];for(let a=0;a<16&&o.length<4;a++){const l=Math.floor(t)+Math.floor((s()*2-1)*4),c=Math.floor(n)+Math.floor((s()*2-1)*4);for(let h=3;h>=-3;h--){const u=Math.floor(e)+h;if(qb(r,l,u,c)){o.push(ll(i,l+.5,u,c+.5));break}}}return o}function yf(i){const t={kind:i.kind,x:i.pos.x,y:i.pos.y,z:i.pos.z,yaw:i.yaw,health:i.health};return i.kind==="chicken"&&(t.egg=i.eggTimer),t}function Mf(i){const t=ll(i.kind,i.x,i.y,i.z);return t.yaw=i.yaw,t.health=i.health,i.egg!==void 0&&(t.eggTimer=i.egg),t}function jb(i,t,e){if(e)return!1;const n=Math.floor(i.pos.x),s=Math.floor(i.pos.z),r=Math.floor(i.pos.y+Gn[i.kind].height);for(let o=Math.floor(i.pos.y);o<=r;o++)if(li(t.getBlock(n,o,s)))return!1;for(let o=r+1;o<pe;o++){const a=t.getBlock(n,o,s);if(_e(a)||li(a))return!1}return!0}const is=64,jt={head:{u:0,v:0,x:8,y:8,z:8},snout:{u:32,v:0,x:4,y:3,z:6},animalBody:{u:0,v:16,x:12,y:8,z:8},humanBody:{u:0,v:16,x:4,y:12,z:8},leg:{u:0,v:36,x:4,y:12,z:4},arm:{u:16,v:36,x:4,y:12,z:4},wing:{u:32,v:16,x:8,y:6,z:2},tail:{u:32,v:36,x:2,y:8,z:2}};function Ci(i,t){const{u:e,v:n,x:s,y:r,z:o}=i;switch(t){case"top":return{x:e+o,y:n,w:s,h:o};case"bottom":return{x:e+o+s,y:n,w:s,h:o};case"right":return{x:e,y:n+o,w:o,h:r};case"front":return{x:e+o,y:n+o,w:s,h:r};case"left":return{x:e+o+s,y:n+o,w:o,h:r};case"back":return{x:e+o+s+o,y:n+o,w:s,h:r}}}const wf=new Map;function Zb(i){let t=i%2147483647;return t<=0&&(t+=2147483646),()=>(t=t*16807%2147483647)/2147483647}function Qb(i){const t=Number.parseInt(i.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function $r(i,t){const[e,n,s]=Qb(i),r=o=>Math.max(0,Math.min(255,Math.round(o*t))).toString(16).padStart(2,"0");return`#${r(e)}${r(n)}${r(s)}`}function Jb(i,t,e){i.fillStyle=t,i.fillRect(e.x,e.y,e.w,e.h)}function In(i,t,e,n,s=1,r=1){i.fillStyle=t,i.fillRect(Math.round(e),Math.round(n),Math.round(s),Math.round(r))}function me(i,t,e,n,s){const r={top:1.08,bottom:.62,right:.96,front:.88,left:.78,back:.83},o=Zb(s),a=["right","front","left","back","top","bottom"];for(const l of a){const c=Ci(t,l);Jb(i,$r(e,r[l]),c);const h=Math.max(2,Math.floor(c.w*c.h/12));for(let u=0;u<h;u++)In(i,$r(n,r[l]),c.x+Math.floor(o()*c.w),c.y+Math.floor(o()*c.h))}}function he(i,t,e,n,s,r,o=1,a=1){const l=Ci(t,e);In(i,n,l.x+s,l.y+r,o,a)}function tT(i,t){const e=jt.head,n=jt.animalBody,s=jt.leg,r=jt.snout;if(t==="pig")me(i,e,"#e7a39d","#f0b2ab",11),me(i,n,"#e5a09a","#d98e8b",12),me(i,s,"#dc9692","#c97f7d",13),me(i,r,"#d88b8b","#efaaa4",14),he(i,e,"right","#202020",1,2,2,2),he(i,e,"right","#202020",5,2,2,2),he(i,r,"right","#7c4d55",1,1),he(i,r,"right","#7c4d55",4,1);else if(t==="cow"){me(i,e,"#554033","#382b23",21),me(i,n,"#594435","#3f3026",22),me(i,s,"#4c382c","#2f241d",23),me(i,r,"#b9a28e","#8e7663",24);for(const o of["right","front","left","back","top"]){const a=Ci(n,o);In(i,"#e7ddcd",a.x+1,a.y+1,Math.max(2,Math.floor(a.w/3)),Math.max(2,Math.floor(a.h/2))),In(i,"#e7ddcd",a.x+Math.max(1,a.w-4),a.y+Math.max(1,a.h-3),3,2)}he(i,e,"right","#f0e7d9",0,0,3,5),he(i,e,"right","#171717",1,2,2,2),he(i,e,"right","#171717",5,2,2,2),he(i,r,"right","#4b3834",1,1),he(i,r,"right","#4b3834",4,1)}else if(t==="sheep"){me(i,e,"#4a433d","#625950",31),me(i,n,"#ece9e1","#d7d3c9",32),me(i,s,"#4a433d","#312d29",33);for(const o of["front","back","top","right","left"]){const a=Ci(n,o);for(let l=0;l<a.h;l+=3)for(let c=l/3%2;c<a.w;c+=3)In(i,"#f8f6ef",a.x+c,a.y+l,2,2)}he(i,e,"right","#ece9e1",0,0,8,2),he(i,e,"right","#171717",1,3,2,2),he(i,e,"right","#171717",5,3,2,2)}else me(i,e,"#f1f1ef","#d9d9d6",41),me(i,n,"#eeeeeb","#d6d6d2",42),me(i,s,"#d99020","#a96917",43),me(i,jt.wing,"#f7f7f5","#d4d4d0",44),he(i,e,"right","#151515",1,2,2,2),he(i,e,"right","#151515",5,2,2,2),he(i,e,"right","#ffffff",1,2),he(i,e,"right","#ffffff",5,2)}function eT(i,t){const e=jt.head,n=jt.humanBody,s=jt.arm,r=jt.leg;if(t==="skeleton"){me(i,e,"#dcdcd0","#bcbcaf",71),me(i,n,"#d8d8cc","#9f9f91",72),me(i,s,"#d6d6ca","#a5a598",73),me(i,r,"#d6d6ca","#a5a598",74),he(i,e,"right","#1b1b1b",1,2,2,2),he(i,e,"right","#1b1b1b",5,2,2,2),he(i,e,"right","#77776d",3,4,2,1),he(i,e,"right","#77776d",1,6,6,1);const p=Ci(n,"right");In(i,"#9b9b8e",p.x+3,p.y+1,2,10);for(const g of[2,5,8])In(i,"#85857a",p.x,p.y+g,3,1),In(i,"#85857a",p.x+5,p.y+g,3,1);return}const o=t==="husk",a=o?"#b29a5e":"#568746",l=o?"#8f783f":"#3f6e37",c=o?"#b9a66d":"#2f6a69",h=o?"#8c7645":"#244f50",u=o?"#66542e":"#2d3158";me(i,e,a,l,o?67:61),me(i,n,c,h,o?68:62),me(i,s,c,a,o?69:63),me(i,r,u,$r(u,.75),o?70:64);for(const p of["right","front","left","back"]){const g=Ci(s,p);In(i,$r(a,p==="left"?.8:.95),g.x,g.y+7,g.w,5)}he(i,e,"right","#242022",1,2,2,1),he(i,e,"right","#242022",5,2,2,1),he(i,e,"right",o?"#5e4724":"#31562c",2,6,4,1);const d=Ci(n,"right");In(i,l,d.x+1,d.y+7,2,3),In(i,$r(c,.72),d.x+5,d.y+10,3,2)}function nT(i){const t=jt.head,e=jt.humanBody;me(i,t,"#5d9f43","#407c31",81),me(i,e,"#5a9840","#3d762e",82),me(i,jt.leg,"#4d8937","#326628",83),he(i,t,"right","#101010",1,2,2,2),he(i,t,"right","#101010",5,2,2,2),he(i,t,"right","#101010",3,4,2,2),he(i,t,"right","#101010",2,6,2,2),he(i,t,"right","#101010",4,6,2,2)}function iT(i,t){t.clearRect(0,0,is,is),t.imageSmoothingEnabled=!1,i==="pig"||i==="cow"||i==="sheep"||i==="chicken"?tT(t,i):i==="creeper"?nT(t):eT(t,i)}function sT(i){const t=wf.get(i);if(t)return t;const e=document.createElement("canvas");e.width=e.height=is;const n=e.getContext("2d");n&&iT(i,n);const s=new il(e);return s.magFilter=de,s.minFilter=de,s.generateMipmaps=!1,s.colorSpace=ae,wf.set(i,s),s}function rT(i,t=30){if(i<=0)return{whiteness:0,swell:1};const e=Math.min(1,i/t+.3*Math.abs(Math.sin(i*.7)));return{whiteness:e,swell:1+.5*e}}const oT=[.8,.8,1,.42,.8,.8],aT=3.4,Sf=["right","left","top","bottom","front","back"];function lT(i,t,e,n,s){const r=new Ze(i,t,e),o=new bt(n),a=[];for(let l=0;l<6;l++){const c=oT[l];for(let h=0;h<4;h++)a.push(o.r*c,o.g*c,o.b*c)}if(r.setAttribute("color",new ke(a,3)),s){const l=r.attributes.uv;for(let c=0;c<Sf.length;c++){const h=Ci(s,Sf[c]),u=h.x/is,d=(h.x+h.w)/is,p=1-(h.y+h.h)/is,g=1-h.y/is,v=c*4;l.setXY(v,u,g),l.setXY(v+1,d,g),l.setXY(v+2,u,p),l.setXY(v+3,d,p)}l.needsUpdate=!0}return r}function Va(i,t,e,n,s,r,o,a,l,c){const h=new Jt(lT(e,n,s,r,c),t);return h.position.set(o,a,l),i.add(h),h}function yi(i,t,e,n,s,r,o){const a=new gn;a.position.set(n,r,s),Va(a,t,o,r,o,16777215,0,-r/2,0,jt.leg),i.add(a),e.push(a)}function Fs(i,t,e,n,s,r,o,a,l=0){const c=new gn;return c.position.set(n,s,r),c.rotation.z=l,Va(c,t,a,o,a,16777215,0,-o/2,0,jt.arm),i.add(c),e.push(c),c}function cT(i){const t=new gn,e=[],n=[],s=new we({vertexColors:!0}),r=new we({map:sT(i),vertexColors:!0}),o=[s,r],a=(v,m,f,x,_,M,A)=>Va(t,s,v,m,f,x,_,M,A),l=(v,m,f,x,_,M,A)=>Va(t,r,m,f,x,16777215,_,M,A,v);let c,h;if(i==="pig"){l(jt.animalBody,.9,.5,.6,0,.26+.25,0),c=l(jt.head,.44,.44,.5,.55,.26+.28,0),l(jt.snout,.16,.15,.3,.79,.26+.2,0),a(.14,.12,.04,14257292,.5,.26+.52,.2),a(.14,.12,.04,14257292,.5,.26+.52,-.2),h=l(jt.tail,.1,.14,.1,-.47,.26+.36,0);for(const[m,f]of[[.3,.2],[.3,-.2],[-.32,.2],[-.32,-.2]])yi(t,r,e,m,f,.26,.16)}else if(i==="cow"){l(jt.animalBody,1,.6,.62,0,.52+.3,0),c=l(jt.head,.45,.48,.52,.6,.52+.4,0),l(jt.snout,.18,.2,.42,.86,.52+.28,0),a(.09,.14,.09,14471352,.61,.52+.7,.2),a(.09,.14,.09,14471352,.61,.52+.7,-.2),a(.16,.1,.34,15709892,-.18,.52-.02,0),h=l(jt.tail,.1,.32,.1,-.51,.52+.38,0);for(const[f,x]of[[.34,.21],[.34,-.21],[-.34,.21],[-.34,-.21]])yi(t,r,e,f,x,.52,.18)}else if(i==="sheep"){l(jt.animalBody,.94,.7,.76,0,.46+.36,0),a(.5,.34,.42,15526627,.4,.46+.6,0),c=l(jt.head,.3,.38,.36,.57,.46+.38,0),a(.1,.1,.04,4669498,.52,.46+.56,.18),a(.1,.1,.04,4669498,.52,.46+.56,-.18);for(const[x,_]of[[.28,.22],[.28,-.22],[-.3,.22],[-.3,-.22]])yi(t,r,e,x,_,.46,.15)}else if(i==="zombie"){l(jt.humanBody,.28,.66,.5,0,.82+.33,0),c=l(jt.head,.44,.44,.44,0,.82+.88,0),Fs(t,r,n,.08,.82+.63,.35,.62,.18,1.28),Fs(t,r,n,.08,.82+.63,-.35,.62,.18,1.28);for(const[,m]of[[0,.12],[0,-.12]])yi(t,r,e,0,m,.82,.2)}else if(i==="skeleton"){l(jt.humanBody,.2,.62,.34,0,.84+.31,0),c=l(jt.head,.42,.42,.42,0,.84+.81,0),Fs(t,r,n,.04,.84+.58,.24,.58,.11,1.18),Fs(t,r,n,0,.84+.58,-.24,.58,.11,.12);const m=7031339;a(.06,.62,.06,m,.52,.84+.32,.16),a(.06,.14,.06,m,.47,.84+.62,.16),a(.06,.14,.06,m,.47,.84+.02,.16),a(.02,.6,.02,15394520,.55,.84+.32,.16);for(const[,f]of[[0,.1],[0,-.1]])yi(t,r,e,0,f,.84,.12)}else if(i==="husk"){l(jt.humanBody,.28,.66,.5,0,.82+.33,0),c=l(jt.head,.44,.44,.44,0,.82+.88,0),Fs(t,r,n,.08,.82+.63,.35,.62,.18,1.28),Fs(t,r,n,.08,.82+.63,-.35,.62,.18,1.28);for(const[,m]of[[0,.12],[0,-.12]])yi(t,r,e,0,m,.82,.2)}else if(i==="creeper"){l(jt.humanBody,.34,.82,.5,0,.36+.5,0),c=l(jt.head,.48,.48,.48,0,.36+1.12,0);for(const[m,f]of[[.16,.13],[.16,-.13],[-.16,.13],[-.16,-.13]])yi(t,r,e,m,f,.36,.16)}else{l(jt.animalBody,.34,.34,.3,-.02,.22+.17,0),l(jt.wing,.32,.24,.06,-.18,.22+.2,.17),l(jt.wing,.32,.24,.06,-.18,.22+.2,-.17),h=l(jt.tail,.18,.26,.16,-.34,.22+.34,0),c=l(jt.head,.22,.24,.2,.2,.22+.4,0),a(.13,.08,.1,15176991,.36,.22+.4,0),a(.05,.1,.14,13384496,.18,.22+.55,0),a(.06,.08,.06,13384496,.32,.22+.32,0);for(const[x,_]of[[.06,.09],[.06,-.09]])yi(t,r,e,x,_,.22,.07)}const u=.9+Math.random()*.22;t.scale.setScalar(u);const d=.9+Math.random()*.16,p=(Math.random()-.5)*.06,g=new bt(Math.min(1,d+p),d,Math.max(0,d-p));return{group:t,legs:e,arms:n,mats:o,base:g,head:c,tail:h,headY:c?c.position.y:0}}const hT=new bt(16734810),uT=new bt(1,1,1);function bf(i){i.group.traverse(t=>{t instanceof Jt&&t.geometry.dispose()});for(const t of i.mats)t.dispose()}class dT{constructor(t){y(this,"models",new Map);this.scene=t}sync(t,e,n){const s=new Set(t);for(const[r,o]of this.models)s.has(r)||(this.scene.remove(o.group),bf(o),this.models.delete(r));for(const r of t){let o=this.models.get(r);if(!o){const g=cT(r.kind);this.scene.add(g.group),o={...g,phase:0,t:Math.random()*10,baseScale:g.group.scale.x,bright:1,dispYaw:r.yaw,swingAmt:0},this.models.set(r,o)}o.t+=e;let a=-r.yaw-o.dispYaw;a=((a+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,o.dispYaw+=a*Math.min(1,e*10),o.group.rotation.y=o.dispYaw,o.group.rotation.z=Math.max(-.18,Math.min(.22,-r.vel.y*2.2));const l=n?n(r.pos.x,r.pos.y+.6,r.pos.z):1;o.bright+=(l-o.bright)*Math.min(1,e*10);const c=r.hurtCooldown>0?hT:o.base;for(const g of o.mats)g.color.copy(c).multiplyScalar(o.bright);const h=rT(r.kind==="creeper"?r.fuse:0);if(h.whiteness>0){const g=c.clone().lerp(uT,h.whiteness);for(const v of o.mats)v.color.copy(g).multiplyScalar(o.bright)}o.group.scale.setScalar(o.baseScale*h.swell);const u=Math.hypot(r.vel.x,r.vel.z),d=u>.002;d&&(o.phase+=u*20*e*aT),o.swingAmt+=((d?1:0)-o.swingAmt)*Math.min(1,e*8);const p=Math.sin(o.phase)*.6*o.swingAmt;if(o.legs.forEach((g,v)=>g.rotation.z=v%2===0?p:-p),r.kind==="zombie"||r.kind==="husk"?o.arms.forEach((g,v)=>g.rotation.z=1.28+(v?-1:1)*Math.sin(o.phase)*.08*o.swingAmt):r.kind==="skeleton"&&(o.arms[0]&&(o.arms[0].rotation.z=1.18+Math.sin(o.phase)*.06*o.swingAmt),o.arms[1]&&(o.arms[1].rotation.z=.12-p*.45)),o.group.position.set(r.pos.x,r.pos.y+Math.abs(Math.sin(o.phase))*.035*o.swingAmt,r.pos.z),o.head)if(d)o.head.position.y=o.headY+Math.sin(o.phase*2)*.015,o.head.rotation.z=Math.sin(o.phase)*.05;else if(r.kind==="chicken"){const g=Math.max(0,Math.sin(o.t*1.6));o.head.rotation.z=-g*.5,o.head.position.y=o.headY-g*.04}else o.head.position.y=o.headY+Math.sin(o.t*1.4)*.012,o.head.rotation.z=0,o.head.rotation.y=Math.sin(o.t*.55)*.4*(1-o.swingAmt);o.tail&&(o.tail.rotation.z=Math.sin(o.t*4+o.phase)*.3)}}clear(){for(const[,t]of this.models)this.scene.remove(t.group),bf(t);this.models.clear()}}const Yi=8,Tf=1,vc=4,aa=[[1,0],[-1,0],[0,1],[0,-1]],Ef={amount:0,source:!1,falling:!1},Os=(i,t,e)=>`${i},${t},${e}`;class fT{constructor(t=4e3){y(this,"active",new Set);y(this,"maxPerTick");this.maxPerTick=t}get activeCount(){return this.active.size}clear(){this.active.clear()}activate(t,e,n){this.active.add(Os(t,e,n));for(const[s,r]of aa)this.active.add(Os(t+s,e,n+r));this.active.add(Os(t,e+1,n)),this.active.add(Os(t,e-1,n))}tick(t){if(this.active.size===0)return;const e=[...this.active];this.active.clear();const n=new Map,s=new Map,r=(l,c,h,u)=>{const d=Os(l,c,h),p=n.get(d);(!p||u.amount>p.c.amount||u.amount===p.c.amount&&u.source&&!p.c.source)&&n.set(d,{x:l,y:c,z:h,c:u})},o=(l,c,h,u)=>{s.set(Os(l,c,h),{x:l,y:c,z:h,id:u})};let a=this.maxPerTick;for(const l of e){if(a--<=0){this.active.add(l);continue}const[c,h,u]=l.split(",").map(Number);this.evaluate(t,c,h,u,r,o)}for(const{x:l,y:c,z:h,c:u}of n.values())(u.amount!==t.amount(l,c,h)||u.source!==t.isSource(l,c,h)||u.falling!==t.isFalling(l,c,h))&&(t.setWater(l,c,h,u.amount,u.source,u.falling),this.activate(l,c,h));for(const{x:l,y:c,z:h,id:u}of s.values())t.getBlock(l,c,h)!==u&&(t.setBlock(l,c,h,u),this.activate(l,c,h))}evaluate(t,e,n,s,r,o){if(t.isSolid(e,n,s)){t.amount(e,n,s)>0&&r(e,n,s,Ef);return}if(!(t.amount(e,n,s)>0||t.isSource(e,n,s)))return;const l=[[e+1,n,s],[e-1,n,s],[e,n,s+1],[e,n,s-1],[e,n-1,s]];for(const[h,u,d]of l)t.getBlock(h,u,d)===to&&o(h,u,d,Sn);const c=t.isSource(e,n,s)?{amount:Yi,source:!0,falling:!1}:this.getNewLiquid(t,e,n,s);r(e,n,s,c),c.amount>0&&this.spread(t,e,n,s,c,r)}getNewLiquid(t,e,n,s){if(t.amount(e,n+1,s)>0)return{amount:Yi,source:!1,falling:!0};let r=0,o=0;for(const[l,c]of aa){const h=t.amount(e+l,n,s+c);h>0&&(h>r&&(r=h),t.isSource(e+l,n,s+c)&&o++)}if(o>=2&&(t.isSolid(e,n-1,s)||t.isSource(e,n-1,s)))return{amount:Yi,source:!0,falling:!1};const a=r-Tf;return a>0?{amount:a,source:!1,falling:!1}:Ef}spread(t,e,n,s,r,o){const a=n-1,l=t.amount(e,a,s)===Yi&&!t.isFalling(e,a,s);if(!t.isSolid(e,a,s)&&!l){(t.getBlock(e,a,s)===0||t.amount(e,a,s)>0)&&o(e,a,s,{amount:Yi,source:!1,falling:!0});return}if(!r.source&&!t.isSolid(e,a,s))return;const c=r.source?Yi:r.amount,h=c-Tf;if(!(h<1))for(const[u,d]of this.getSpreadDirs(t,e,n,s,c)){const p=e+u,g=s+d;t.isSolid(p,n,g)||t.isSource(p,n,g)||t.getBlock(p,n,g)!==0&&t.amount(p,n,g)===0||t.amount(p,n,g)>=h||o(p,n,g,{amount:h,source:!1,falling:!1})}}getSpreadDirs(t,e,n,s,r){let o=vc+1;const a=[];for(const l of aa){const c=e+l[0],h=s+l[1];if(t.isSolid(c,n,h)||t.amount(c,n,h)>=r)continue;const u=this.isHole(t,c,n,h)?0:this.slopeDistance(t,c,n,h,1,[-l[0],-l[1]]);u<o?(o=u,a.length=0,a.push(l)):u===o&&a.push(l)}return a}isHole(t,e,n,s){return!t.isSolid(e,n-1,s)&&t.amount(e,n-1,s)<Yi}slopeDistance(t,e,n,s,r,o){let a=vc;for(const l of aa){if(l[0]===o[0]&&l[1]===o[1])continue;const c=e+l[0],h=s+l[1];if(!t.isSolid(c,n,h)){if(this.isHole(t,c,n,h))return r;if(r<vc){const u=this.slopeDistance(t,c,n,h,r+1,[-l[0],-l[1]]);u<a&&(a=u)}}}return a}}function Af(i,t,e){let n=0;for(let s=e.minY;s<=e.maxY;s++)for(let r=e.minX;r<=e.maxX;r++)for(let o=e.minZ;o<=e.maxZ;o++)t.isWater(r,s,o)&&(t.isAir(r,s-1,o)||t.isAir(r+1,s,o)||t.isAir(r-1,s,o)||t.isAir(r,s,o+1)||t.isAir(r,s,o-1))&&(i.activate(r,s,o),n++);return n}function pT(i,t,e,n){const s=[];for(let r=i-e;r<=i+e;r++)for(let o=t-e;o<=t+e;o++){const a=`${r},${o}`;if(n.has(a))continue;const l=r-i,c=o-t;s.push({key:a,d:l*l+c*c})}return s.sort((r,o)=>r.d-o.d),s.map(r=>r.key)}const mT=9,gT=27,Fh=mT+gT,Oh=64;function Mr(i,t){return i.id===t.id&&i.dur===t.dur}function Bh(){return Array.from({length:Fh},()=>null)}function Rf(i,t,e,n=Oh,s=0,r=i.length){return cl(i,{id:t,count:e},n,s,r)}function cl(i,t,e=Oh,n=0,s=i.length){let r=t.count;for(let o=n;o<s&&r>0;o++){const a=i[o];if(a&&Mr(a,t)&&a.count<e){const l=Math.min(e-a.count,r);a.count+=l,r-=l}}for(let o=n;o<s&&r>0;o++)if(!i[o]){const a=Math.min(e,r);i[o]=t.dur===void 0?{id:t.id,count:a}:{id:t.id,count:a,dur:t.dur},r-=a}return r}function vT(i,t,e){for(let n=0;n<i.length;n++)if(!i[n])return i[n]={id:t,count:1,dur:e},!0;return!1}function Cf(i,t){let e=0;for(const n of i)n&&n.id===t&&(e+=n.count);return e}function _T(i,t,e){let n=e;for(let s=0;s<i.length&&n>0;s++){const r=i[s];if(r&&r.id===t){const o=Math.min(r.count,n);r.count-=o,n-=o,r.count<=0&&(i[s]=null)}}return e-n}function Df(i,t){const e=i[t];if(!e||e.count<=0)return null;e.count--;const n=e.id;return e.count<=0&&(i[t]=null),n}function xT(i){return i.map(t=>t?{id:t.id,count:t.count,dur:t.dur}:null)}function yT(i){const t=Bh();if(!Array.isArray(i))return t;for(let e=0;e<Fh;e++){const n=i[e];if(n&&typeof n.id=="number"&&typeof n.count=="number"&&n.count>0){const s={id:n.id,count:Math.min(Oh,n.count)};typeof n.dur=="number"&&(s.dur=n.dur),t[e]=s}}return t}function la(i,t,e){const n=i[t];if(!n)return!1;const s=(n.dur??e)-1;return s<=0?(i[t]=null,!0):(n.dur=s,!1)}const fn=new Set,MT=300;let Qc=-1/0,hl=!1,Xa=!1;window.addEventListener("keydown",i=>{if(i.code==="KeyW"&&!fn.has("KeyW")){const t=performance.now();t-Qc<MT&&(hl=!0),Qc=t}i.code==="Space"&&!fn.has("Space")&&(Xa=!0),fn.add(i.code)});window.addEventListener("keyup",i=>{fn.delete(i.code),i.code==="KeyW"&&(hl=!1)});function l0(){fn.clear(),hl=!1,Xa=!1,Qc=-1/0}window.addEventListener("blur",l0);document.addEventListener("visibilitychange",()=>{document.hidden&&l0()});function wT(){let i=0,t=0;fn.has("KeyW")&&(i+=1),fn.has("KeyS")&&(i-=1),fn.has("KeyD")&&(t+=1),fn.has("KeyA")&&(t-=1);const e=fn.has("ShiftLeft")||fn.has("ShiftRight")||fn.has("KeyC");return{forward:i,right:t,sprint:hl&&i>0&&!e,jumpHeld:fn.has("Space"),crouch:e}}function ST(){const i=Xa;return Xa=!1,i}const Pf=.0025,Lf=1.55;class bT{constructor(t,e=!0){y(this,"yaw",0);y(this,"pitch",0);e&&t.addEventListener("click",()=>void t.requestPointerLock()),document.addEventListener("mousemove",n=>{document.pointerLockElement===t&&this.rotate(n.movementX*Pf,-n.movementY*Pf)})}rotate(t,e){this.yaw+=t,this.pitch=Math.max(-Lf,Math.min(Lf,this.pitch+e))}}const kf=.006,TT=320,c0=380,ET=8,ca=96,AT=.2,If=1+Math.SQRT2;function RT(i,t){if(Math.hypot(i,t)<AT)return{forward:0,right:0};const n=Math.abs(i),s=Math.abs(t);return s>n*If?{forward:t<0?1:-1,right:0}:n>s*If?{forward:0,right:i>0?1:-1}:{forward:t<0?1:-1,right:i>0?1:-1}}function CT(i,t){return t-i>=0&&t-i<=TT}function DT(i,t,e,n){return Math.hypot(e-i,n-t)>=ET}function PT(i,t,e=!1,n=0){return e?"none":t?"hold-end":i?"none":n>=c0?"hold-end":"tap"}function h0(){return new URLSearchParams(window.location.search).get("touch")==="1"?!0:navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches}let Uf=!1;function LT(){if(Uf)return;Uf=!0;const i=r=>r.preventDefault();document.addEventListener("gesturestart",i,{passive:!1}),document.addEventListener("gesturechange",i,{passive:!1}),document.addEventListener("gestureend",i,{passive:!1}),document.addEventListener("dblclick",i,{passive:!1}),document.addEventListener("touchmove",r=>{r.touches.length>1&&r.preventDefault()},{passive:!1});let t=-1/0,e=null,n=0,s=0;document.addEventListener("touchend",r=>{const o=performance.now(),a=r.changedTouches[0],l=a!==void 0&&Math.hypot(a.clientX-n,a.clientY-s)<28;o-t<320&&r.target===e&&l&&r.preventDefault(),t=o,e=r.target,a&&(n=a.clientX,s=a.clientY)},{passive:!1})}class kT{constructor(t,e){y(this,"root");y(this,"actions");y(this,"lookPointer",null);y(this,"lookPoint",null);y(this,"lookStartedAt",0);y(this,"lookGesture",0);y(this,"lookStartX",0);y(this,"lookStartY",0);y(this,"lookX",0);y(this,"lookY",0);y(this,"lookDragging",!1);y(this,"lookHoldStarted",!1);y(this,"lookHoldTimer",null);y(this,"releaseLookCapture",null);y(this,"dpadPointer",null);y(this,"forward",0);y(this,"right",0);y(this,"lastForwardPress",-1/0);y(this,"sprinting",!1);y(this,"jumpHeld",!1);y(this,"crouchHeld",!1);y(this,"pendingJump",!1);y(this,"active",!1);y(this,"releaseHolds",[]);this.root=t,this.actions=e;const n=t.querySelector(".touch-look");n.addEventListener("pointerdown",l=>{if(!this.active||(l.preventDefault(),this.lookPointer!==null))return;this.lookPointer=l.pointerId,this.lookPoint={x:l.clientX,y:l.clientY},this.lookStartedAt=performance.now();const c=++this.lookGesture;this.lookStartX=l.clientX,this.lookStartY=l.clientY,this.lookX=l.clientX,this.lookY=l.clientY,this.lookDragging=!1,this.lookHoldStarted=!1,this.capturePointer(n,l.pointerId),this.lookHoldTimer=window.setTimeout(()=>{if(this.lookHoldTimer=null,this.lookPointer!==l.pointerId||this.lookGesture!==c||this.lookDragging||!this.active)return;const h=this.lookPoint;h!==null&&(this.lookHoldStarted=!0,this.actions.interactHoldStart(h))},c0)});const s=l=>{if(l.pointerId!==this.lookPointer)return;l.preventDefault();const c=typeof l.getCoalescedEvents=="function"?l.getCoalescedEvents():[],h=c.length>0?c:[l];for(const u of h)this.moveLookTo(u.clientX,u.clientY)},r=(l,c)=>{const h=this.lookPointer,u=this.lookPoint;if(h===null||u===null)return;!l&&c&&this.moveLookTo(c.x,c.y);const d=this.lookHoldStarted,p=PT(this.lookDragging,d,l,performance.now()-this.lookStartedAt);this.clearLookHoldTimer(),this.lookPointer=null,this.lookPoint=null,this.lookStartedAt=0,this.lookDragging=!1,this.lookHoldStarted=!1,this.releasePointerCapture(n,h),p==="tap"?this.actions.interactTap(u):p==="hold-end"?(d||this.actions.interactHoldStart(u),this.actions.interactHoldEnd(u)):d&&this.actions.interactHoldCancel(u)};this.releaseLookCapture=()=>r(!0);const o=l=>{l.pointerId===this.lookPointer&&(l.preventDefault(),r(!1,{x:l.clientX,y:l.clientY}))},a=l=>{l.pointerId===this.lookPointer&&(l.preventDefault(),r(!0))};window.addEventListener("pointermove",s),window.addEventListener("pointerup",o),window.addEventListener("pointercancel",a),n.addEventListener("lostpointercapture",a),this.bindSlidingDpad(t.querySelector("#touch-dpad")),this.bindHold("touch-jump",()=>{this.jumpHeld||(this.pendingJump=!0),this.jumpHeld=!0},()=>this.jumpHeld=!1),this.bindHold("touch-crouch",()=>this.crouchHeld=!0,()=>this.crouchHeld=!1),this.bindTap("touch-inventory",()=>this.actions.inventory()),this.bindTap("touch-pause",()=>this.actions.pause()),window.addEventListener("blur",()=>this.reset()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.reset()}),window.addEventListener("pagehide",()=>this.reset())}setActive(t){this.active=t,this.root.classList.toggle("active",t),this.root.setAttribute("aria-hidden",String(!t)),t||this.reset()}get isActive(){return this.active}readMove(){return{forward:this.forward,right:this.right,sprint:this.sprinting&&this.forward>0&&!this.crouchHeld,jumpHeld:this.jumpHeld,crouch:this.crouchHeld}}consumeJump(){const t=this.pendingJump;return this.pendingJump=!1,t}moveLookTo(t,e){if(this.lookPoint===null)return;if(!this.lookDragging&&DT(this.lookStartX,this.lookStartY,t,e)){this.lookDragging=!0,this.clearLookHoldTimer(),this.lookX=t,this.lookY=e;return}if(!this.lookDragging)return;const s=Math.max(-ca,Math.min(ca,t-this.lookX)),r=Math.max(-ca,Math.min(ca,e-this.lookY));this.lookX=t,this.lookY=e,this.actions.look(s*kf,-r*kf)}bindSlidingDpad(t){const e=(o,a)=>this.updateSlidingDpad(t,o,a),n=()=>{const o=this.dpadPointer;o!==null&&(this.dpadPointer=null,this.setMoveAxes(t,{forward:0,right:0}),t.style.setProperty("--touch-dpad-stick-x","0px"),t.style.setProperty("--touch-dpad-stick-y","0px"),t.dataset.moving="false",this.releasePointerCapture(t,o))};t.addEventListener("pointerdown",o=>{!this.active||this.dpadPointer!==null||(o.preventDefault(),o.stopPropagation(),this.dpadPointer=o.pointerId,this.capturePointer(t,o.pointerId),e(o.clientX,o.clientY))});const s=o=>{o.pointerId===this.dpadPointer&&(o.preventDefault(),e(o.clientX,o.clientY))},r=o=>{o.pointerId===this.dpadPointer&&(o.preventDefault(),n())};window.addEventListener("pointermove",s),window.addEventListener("pointerup",r),window.addEventListener("pointercancel",r),t.addEventListener("lostpointercapture",r),this.releaseHolds.push(n)}updateSlidingDpad(t,e,n){const s=t.getBoundingClientRect(),r=Math.max(1,Math.min(s.width,s.height)/2),o=(e-(s.left+s.width/2))/r,a=(n-(s.top+s.height/2))/r,l=RT(o,a);this.setMoveAxes(t,l);const c=Math.hypot(o,a),h=c>0?Math.min(1,c)/c:0,u=r*.42;t.style.setProperty("--touch-dpad-stick-x",`${Math.round(o*h*u)}px`),t.style.setProperty("--touch-dpad-stick-y",`${Math.round(a*h*u)}px`),t.dataset.moving=String(l.forward!==0||l.right!==0)}setMoveAxes(t,e){if(e.forward>0&&this.forward<=0){const n=performance.now();CT(this.lastForwardPress,n)&&(this.sprinting=!0),this.lastForwardPress=n}e.forward<=0&&(this.sprinting=!1),this.forward=e.forward,this.right=e.right,t.dataset.forward=String(e.forward),t.dataset.right=String(e.right)}releasePointerCapture(t,e){if(t.hasPointerCapture(e))try{t.releasePointerCapture(e)}catch{}}capturePointer(t,e){try{t.setPointerCapture(e)}catch{}}clearLookHoldTimer(){this.lookHoldTimer!==null&&(window.clearTimeout(this.lookHoldTimer),this.lookHoldTimer=null)}bindHold(t,e,n,s=n){const r=document.getElementById(t);let o=null;r.addEventListener("pointerdown",h=>{!this.active||o!==null||(h.preventDefault(),h.stopPropagation(),o=h.pointerId,this.capturePointer(r,h.pointerId),r.classList.add("pressed"),e())});const a=h=>{const u=o;u!==null&&(o=null,r.classList.remove("pressed"),h(),this.releasePointerCapture(r,u))},l=h=>{h.pointerId===o&&a(n)},c=h=>{h.pointerId===o&&a(s)};r.addEventListener("pointerup",l),r.addEventListener("pointercancel",c),r.addEventListener("lostpointercapture",c),this.releaseHolds.push(()=>a(s))}bindTap(t,e){const n=document.getElementById(t);n.addEventListener("pointerdown",s=>{this.active&&(s.preventDefault(),s.stopPropagation(),n.classList.add("pressed"),window.setTimeout(()=>n.classList.remove("pressed"),100),e())})}reset(){var t;(t=this.releaseLookCapture)==null||t.call(this);for(const e of this.releaseHolds)e();this.dpadPointer=null,this.forward=0,this.right=0,this.lastForwardPress=-1/0,this.sprinting=!1,this.jumpHeld=!1,this.crouchHeld=!1,this.pendingJump=!1}}class IT{constructor(t,e=9){y(this,"icons",[]);y(this,"counts",[]);y(this,"cells",[]);y(this,"durTracks",[]);y(this,"durFills",[]);y(this,"selected",0);y(this,"size");this.size=e,t.innerHTML="";for(let n=0;n<e;n++){const s=document.createElement("div");s.className="hotbar-slot",s.style.position="relative";const r=document.createElement("div");r.className="hotbar-icon";const o=document.createElement("div");o.className="hotbar-count";const a=document.createElement("div");a.style.cssText="position:absolute;left:12%;right:12%;bottom:9%;height:3px;background:rgba(0,0,0,.55);border-radius:1px;display:none;overflow:hidden;";const l=document.createElement("div");l.style.cssText="height:100%;width:100%;",a.appendChild(l),s.append(r,o,a),s.addEventListener("pointerdown",c=>{c.pointerType!=="mouse"&&(c.preventDefault(),c.stopPropagation(),this.setSelected(n))}),t.appendChild(s),this.cells.push(s),this.icons.push(r),this.counts.push(o),this.durTracks.push(a),this.durFills.push(l)}this.setSelected(0)}render(t){for(let e=0;e<this.size;e++){const n=t[e]??null,s=this.icons[e],r=this.counts[e];if(n&&n.count>0){const a=as(n.id);s.style.backgroundImage=a?`url(${a})`:"none",r.textContent=n.count>1?String(n.count):""}else s.style.backgroundImage="none",r.textContent="";const o=n&&n.count>0?eo(n.id):null;if(n&&o&&(n.dur??o)<o){const a=Math.max(0,(n.dur??o)/o);this.durTracks[e].style.display="block",this.durFills[e].style.width=`${a*100}%`,this.durFills[e].style.background=`hsl(${Math.round(a*120)},85%,45%)`}else this.durTracks[e].style.display="none"}}setSelected(t){this.selected=(t%this.size+this.size)%this.size,this.cells.forEach((e,n)=>e.classList.toggle("selected",n===this.selected))}scroll(t){this.setSelected(this.selected+t)}get index(){return this.selected}}const Ys=20,ss=20,ul=10,UT=7,NT=1,Nf=6,Ff=80,FT=10,OT=30,BT=20;function _c(){return{health:Ys,food:ss,saturation:5,exhaustion:0,foodTimer:0,oxygen:ul,oxygenTimer:0}}function zT(i){return i.food>=UT}function Ji(i,t){i.exhaustion=Math.min(i.exhaustion+t,40)}function qa(i,t){i.health=Math.max(0,i.health-t)}function xc(i){return i.health<=0}function HT(i,t){i.food=Math.min(ss,i.food+t.nutrition),i.saturation=Math.min(i.saturation+t.nutrition*t.saturationModifier*2,i.food)}function WT(i){return Math.max(0,Math.ceil(i-3))}function GT(i,t,e,n){return n?{fallDistance:0,damage:0}:e?{fallDistance:0,damage:WT(i)}:{fallDistance:t<0?i-t:i,damage:0}}function VT(i){i.exhaustion>4&&(i.exhaustion-=4,i.saturation>0?i.saturation=Math.max(0,i.saturation-1):i.food=Math.max(0,i.food-1)),i.food>=ss&&i.saturation>0&&i.health<Ys?++i.foodTimer>=FT&&(i.health=Math.min(Ys,i.health+1),Ji(i,Nf),i.foodTimer=0):i.food>=18&&i.health<Ys?++i.foodTimer>=Ff&&(i.health=Math.min(Ys,i.health+1),Ji(i,Nf),i.foodTimer=0):i.food<=0?++i.foodTimer>=Ff&&(i.health>NT&&qa(i,1),i.foodTimer=0):i.foodTimer=0}function XT(i,t){if(!t){i.oxygen=ul,i.oxygenTimer=0;return}i.oxygenTimer++,i.oxygen>0?i.oxygenTimer>=OT&&(i.oxygen=Math.max(0,i.oxygen-1),i.oxygenTimer=0):i.oxygenTimer>=BT&&(qa(i,2),i.oxygenTimer=0)}const Of=i=>`url(${yr(`textures/ui/${i}.png`)})`;class qT{constructor(t,e,n=10){y(this,"hearts");y(this,"foods");y(this,"bubbles",[]);y(this,"healthEl");y(this,"hungerEl");y(this,"oxygenEl");this.healthEl=t,this.hungerEl=e,this.oxygenEl=document.getElementById("oxygen"),this.hearts=this.build(t,n),this.foods=this.build(e,n),this.oxygenEl&&(this.bubbles=this.build(this.oxygenEl,n))}build(t,e){t.innerHTML="";const n=[];for(let s=0;s<e;s++){const r=document.createElement("div");r.className="hud-icon",t.appendChild(r),n.push(r)}return n}render(t){if(this.fill(this.hearts,t.health,"heart"),this.fill(this.foods,t.food,"food"),this.healthEl.classList.toggle("low",t.health<=4),this.hungerEl.classList.toggle("low",t.food<=4),this.oxygenEl){const e=t.oxygen<ul;if(this.oxygenEl.style.display=e?"flex":"none",e)for(let n=0;n<this.bubbles.length;n++)this.bubbles[n].style.backgroundImage=Of(t.oxygen>n?"bubble_full":"bubble_empty")}}fill(t,e,n){for(let s=0;s<t.length;s++){const r=e-s*2,o=r>=2?"full":r===1?"half":"empty";t[s].style.backgroundImage=Of(`${n}_${o}`)}}}function Ya(i,t,e,n){const s=i[t];if(!e)return i[t]=null,s;if(!s)return i[t]=e,null;if(Mr(s,e)){const r=Math.max(0,n(s.id)-s.count),o=Math.min(r,e.count);return s.count+=o,e.count-=o,e.count>0?e:null}return i[t]=e,s}function $a(i,t,e,n){const s=i[t];if(!e){if(!s)return null;const r=Math.ceil(s.count/2),o=s.count-r;return i[t]=o>0?{...s,count:o}:null,{...s,count:r}}return s?Mr(s,e)?s.count<n(s.id)?(s.count+=1,e.count-=1,e.count>0?e:null):e:(i[t]=e,s):(i[t]={...e,count:1},e.count-=1,e.count>0?e:null)}function yc(i,t,e,n,s=0,r=e.length){const o=i[t];if(!o)return;const a=cl(e,o,n(o.id),s,r);i[t]=a>0?{...o,count:a}:null}function YT(i,t,e){if(!t)return t;const n=t.id,s=e(n),r=i.filter(c=>{const h=c.get();return!h||Mr(h,t)&&h.count<s});if(r.length===0)return t;const o=Math.floor(t.count/r.length);if(o===0)return t;let a=0;for(const c of r){const h=c.get(),u=h?h.count:0,d=Math.min(o,s-u);d<=0||(c.set(t.dur===void 0?{id:n,count:u+d}:{id:n,count:u+d,dur:t.dur}),a+=d)}const l=t.count-a;return l>0?t.dur===void 0?{id:n,count:l}:{id:n,count:l,dur:t.dur}:null}function $T(i,t,e){if(!t)return t;const n=t.id,s=e(n);let r=t.count;for(const o of i){if(r<=0)break;const a=o.get();a?Mr(a,t)&&a.count<s&&(a.count+=1,r--):(o.set(t.dur===void 0?{id:n,count:1}:{id:n,count:1,dur:t.dur}),r--)}return r>0?t.dur===void 0?{id:n,count:r}:{id:n,count:r,dur:t.dur}:null}const ha=["PPP"," S "," S "],ua=["PP","PS"," S"],da=["P","S","S"],fa=["P","P","S"],pa=["PP"," S"," S"];function Ce(i,t,e){return{type:"shaped",pattern:i,key:{P:t,S:"stick"},result:{item:e,count:1}}}const KT=[{type:"shapeless",ingredients:["oak_log"],result:{item:"oak_planks",count:4}},{type:"shapeless",ingredients:["spruce_log"],result:{item:"oak_planks",count:4}},{type:"shapeless",ingredients:["flint","iron_ingot"],result:{item:"flint_and_steel",count:1}},{type:"shaped",pattern:["#","#"],key:{"#":"oak_planks"},result:{item:"stick",count:4}},{type:"shaped",pattern:["##","##"],key:{"#":"oak_planks"},result:{item:"crafting_table",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"string"},result:{item:"wool",count:1}},{type:"shaped",pattern:["###","# #","###"],key:{"#":"cobblestone"},result:{item:"furnace",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"sand"},result:{item:"sandstone",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"nether_quartz"},result:{item:"quartz_block",count:1}},{type:"shaped",pattern:["###","###","###"],key:{"#":"coal"},result:{item:"coal_block",count:1}},{type:"shapeless",ingredients:["coal_block"],result:{item:"coal",count:9}},{type:"shaped",pattern:["###","###","###"],key:{"#":"iron_ingot"},result:{item:"iron_block",count:1}},{type:"shapeless",ingredients:["iron_block"],result:{item:"iron_ingot",count:9}},{type:"shaped",pattern:["###","###","###"],key:{"#":"diamond"},result:{item:"diamond_block",count:1}},{type:"shapeless",ingredients:["diamond_block"],result:{item:"diamond",count:9}},{type:"shaped",pattern:["C","S"],key:{C:"coal",S:"stick"},result:{item:"torch",count:4}},{type:"shaped",pattern:["F","S","E"],key:{F:"flint",S:"stick",E:"feather"},result:{item:"arrow",count:4}},{type:"shaped",pattern:[" TS","T S"," TS"],key:{T:"stick",S:"string"},result:{item:"bow",count:1}},Ce(ha,"oak_planks","wooden_pickaxe"),Ce(ua,"oak_planks","wooden_axe"),Ce(da,"oak_planks","wooden_shovel"),Ce(fa,"oak_planks","wooden_sword"),Ce(pa,"oak_planks","wooden_hoe"),Ce(ha,"cobblestone","stone_pickaxe"),Ce(ua,"cobblestone","stone_axe"),Ce(da,"cobblestone","stone_shovel"),Ce(fa,"cobblestone","stone_sword"),Ce(pa,"cobblestone","stone_hoe"),Ce(ha,"iron_ingot","iron_pickaxe"),Ce(ua,"iron_ingot","iron_axe"),Ce(da,"iron_ingot","iron_shovel"),Ce(fa,"iron_ingot","iron_sword"),Ce(pa,"iron_ingot","iron_hoe"),Ce(ha,"diamond","diamond_pickaxe"),Ce(ua,"diamond","diamond_axe"),Ce(da,"diamond","diamond_shovel"),Ce(fa,"diamond","diamond_sword"),Ce(pa,"diamond","diamond_hoe")];function u0(i){return i&&i.count>=1?i.item:null}function jT(i){return i.map(t=>t.map(u0))}function ZT(i){const t=[];for(const e of i)for(const n of e){const s=u0(n);s&&t.push(s)}return t}function d0(i){let t=1/0,e=-1,n=1/0,s=-1;for(let o=0;o<i.length;o++)for(let a=0;a<i[o].length;a++)i[o][a]!==null&&(o<t&&(t=o),o>e&&(e=o),a<n&&(n=a),a>s&&(s=a));if(e===-1)return null;const r=[];for(let o=t;o<=e;o++)r.push(i[o].slice(n,s+1));return r}function QT(i){return i.pattern.map(t=>Array.from(t,e=>e===" "?null:i.key[e]??null))}function JT(i){return i.map(t=>[...t].reverse())}function Bf(i,t){if(i.length!==t.length)return!1;for(let e=0;e<i.length;e++){if(i[e].length!==t[e].length)return!1;for(let n=0;n<i[e].length;n++)if(i[e][n]!==t[e][n])return!1}return!0}function tE(i,t){const e=d0(QT(i));return e?Bf(e,t)||Bf(JT(e),t):!1}function zf(i){const t=new Map;for(const e of i)t.set(e,(t.get(e)??0)+1);return t}function eE(i,t){if(i.ingredients.length!==t.length)return!1;const e=zf(i.ingredients),n=zf(t);if(e.size!==n.size)return!1;for(const[s,r]of e)if(n.get(s)!==r)return!1;return!0}function nE(i){const t=ZT(i);if(t.length===0)return null;const e=d0(jT(i));for(const n of KT)if(n.type==="shaped"){if(e&&tE(n,e))return n}else if(eE(n,t))return n;return null}function iE(i){const t=nE(i);return t?{item:t.result.item,count:t.result.count}:null}const zh=new Map,Hh=new Map;for(const i of Ie)i.id!==0&&(zh.set(i.id,i.name),Hh.set(i.name,i.id));for(const i of BS){const t=HS(i);t&&(zh.set(i,t),Hh.set(t,i))}function Hf(i){const t=i.map(s=>s.map(r=>{if(!r)return null;const o=zh.get(r.id);return o?{item:o,count:r.count}:null})),e=iE(t);if(!e)return null;const n=Hh.get(e.item);return n==null?null:{id:n,count:e.count}}function sE(i){for(const t of i)for(let e=0;e<t.length;e++){const n=t[e];n&&(n.count-=1,n.count<=0&&(t[e]=null))}}const Ln=i=>ur(i),Qn=9,Mc=27,rE=420,oE=12;class aE{constructor(t){y(this,"root");y(this,"inv",null);y(this,"gridN",2);y(this,"craft",[]);y(this,"cursor",null);y(this,"open",!1);y(this,"cursorEl");y(this,"cursorIcon");y(this,"cursorCnt");y(this,"titleEl");y(this,"cgridEl");y(this,"outCell");y(this,"mainCells",[]);y(this,"hotbarCells",[]);y(this,"craftCells",[]);y(this,"drag",null);y(this,"onChange",null);y(this,"onClose",null);this.root=t,t.classList.add("hidden"),t.innerHTML=`
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
      </div>`,this.titleEl=t.querySelector(".inv-title"),t.querySelector(".inv-close").addEventListener("click",()=>{var s;return(s=this.onClose)==null?void 0:s.call(this)}),this.cgridEl=t.querySelector(".inv-cgrid");const e=t.querySelector(".inv-main"),n=t.querySelector(".inv-hotbar");for(let s=0;s<Mc;s++)this.mainCells.push(this.makeSlot(e,"main",s));for(let s=0;s<Qn;s++)this.hotbarCells.push(this.makeSlot(n,"hotbar",s));this.outCell=this.makeSlot(t.querySelector(".inv-out-wrap"),"output",0),this.outCell.el.classList.add("inv-out"),this.cursorEl=document.createElement("div"),this.cursorEl.className="inv-cursor",this.cursorIcon=document.createElement("div"),this.cursorIcon.className="slot-icon",this.cursorCnt=document.createElement("div"),this.cursorCnt.className="slot-count",this.cursorEl.append(this.cursorIcon,this.cursorCnt),this.cursorEl.style.display="none",this.cursorEl.style.pointerEvents="none",document.body.appendChild(this.cursorEl),document.addEventListener("pointermove",s=>{this.open&&(this.cursorEl.style.left=`${s.clientX}px`,this.cursorEl.style.top=`${s.clientY}px`,this.drag&&this.onDragMove(s))}),document.addEventListener("pointerup",s=>{this.open&&this.drag&&this.endDrag(s)}),document.addEventListener("pointercancel",s=>{var r;this.open&&((r=this.drag)==null?void 0:r.pointerId)===s.pointerId&&this.cancelDrag()})}makeSlot(t,e,n){const s=document.createElement("div");s.className="inv-slot",s.dataset.region=e,s.dataset.idx=String(n),s.style.touchAction="none";const r=document.createElement("div");r.className="slot-icon";const o=document.createElement("div");return o.className="slot-count",s.append(r,o),s.addEventListener("pointerdown",a=>{!a.isPrimary||a.pointerType==="mouse"&&a.button!==0&&a.button!==2||(a.preventDefault(),this.beginDrag(e,n,a))}),s.addEventListener("contextmenu",a=>a.preventDefault()),t.appendChild(s),{el:s,icon:r,cnt:o}}isOpen(){return this.open}show(t,e){this.inv=t,this.gridN=e,this.craft=Array.from({length:e},()=>Array(e).fill(null)),this.buildCraftGrid(e),this.titleEl.textContent=e>=3?"工作台":"背包",this.open=!0,this.root.classList.remove("hidden"),this.render()}hide(){var e;this.cancelDrag();const t=[];for(const n of this.craft)for(let s=0;s<n.length;s++){const r=n[s];r&&(this.returnOrOverflow(r,t),n[s]=null)}return this.cursor&&(this.returnOrOverflow(this.cursor,t),this.cursor=null),this.open=!1,this.root.classList.add("hidden"),this.cursorEl.style.display="none",(e=this.onChange)==null||e.call(this),t}returnOrOverflow(t,e){const n=this.inv?cl(this.inv,t,Ln(t.id)):t.count;n<=0||e.push(t.dur===void 0?{id:t.id,count:n}:{id:t.id,count:n,dur:t.dur})}buildCraftGrid(t){this.cgridEl.innerHTML="",this.cgridEl.style.gridTemplateColumns=`repeat(${t}, 1fr)`,this.craftCells=[];for(let e=0;e<t*t;e++)this.craftCells.push(this.makeSlot(this.cgridEl,"craft",e))}beginDrag(t,e,n){var s,r;if(this.inv){if(this.cursorEl.style.left=`${n.clientX}px`,this.cursorEl.style.top=`${n.clientY}px`,t==="output"){this.takeOutput(),this.render(),(s=this.onChange)==null||s.call(this);return}if(n.shiftKey){this.quickMoveFrom(t,e),this.render(),(r=this.onChange)==null||r.call(this);return}this.drag={region:t,i:e,right:n.button===2,started:!1,mode:this.cursor?"distribute":"move",swept:[],sweptKeys:new Set,sweptCells:[],pointerId:n.pointerId,touch:n.pointerType==="touch",startX:n.clientX,startY:n.clientY,holdTimer:null,longPressed:!1},this.drag.touch&&this.startTouchHold(this.drag)}}onDragMove(t){const e=this.drag;if(!e||!this.inv||e.pointerId!==t.pointerId||(e.touch&&!e.longPressed&&Math.hypot(t.clientX-e.startX,t.clientY-e.startY)>oE&&this.clearTouchHold(e),e.longPressed))return;const n=this.slotAt(t);if(!e.started){if(!n||n.region===e.region&&n.i===e.i)return;e.started=!0,e.mode==="distribute"?(this.addSwept(e,e.region,e.i),this.addSwept(e,n.region,n.i)):(this.applyClick(e.region,e.i,!1),this.render());return}e.mode==="distribute"&&n&&this.addSwept(e,n.region,n.i)}endDrag(t){var n;const e=this.drag;if(!(!e||e.pointerId!==t.pointerId)){this.clearTouchHold(e),this.drag=null;for(const s of(e==null?void 0:e.sweptCells)??[])s.el.classList.remove("inv-drag-hi");if(this.inv&&!e.longPressed){if(!e.started)this.applyClick(e.region,e.i,e.right);else if(e.mode==="distribute")this.cursor=e.right?$T(e.swept,this.cursor,Ln):YT(e.swept,this.cursor,Ln);else{const s=this.slotAt(t);s&&s.region!=="output"&&!(s.region===e.region&&s.i===e.i)&&this.applyClick(s.region,s.i,!1)}this.render(),(n=this.onChange)==null||n.call(this)}}}cancelDrag(){if(this.drag){this.clearTouchHold(this.drag);for(const t of this.drag.sweptCells)t.el.classList.remove("inv-drag-hi");this.drag=null}}startTouchHold(t){t.holdTimer=window.setTimeout(()=>{var e;t.holdTimer=null,!(!this.open||this.drag!==t||t.started||!this.inv)&&(t.longPressed=!0,this.applyClick(t.region,t.i,!0),this.render(),(e=this.onChange)==null||e.call(this))},rE)}clearTouchHold(t){t.holdTimer!==null&&(window.clearTimeout(t.holdTimer),t.holdTimer=null)}addSwept(t,e,n){if(e==="output")return;const s=`${e}:${n}`;if(t.sweptKeys.has(s))return;t.sweptKeys.add(s),t.swept.push(this.slotRef(e,n));const r=this.cellOf(e,n);r&&(r.el.classList.add("inv-drag-hi"),t.sweptCells.push(r))}applyClick(t,e,n){if(this.inv)if(t==="craft"){const s=this.gridN,r=this.craft[Math.floor(e/s)],o=e%s;this.cursor=n?$a(r,o,this.cursor,Ln):Ya(r,o,this.cursor,Ln)}else{const s=t==="main"?Qn+e:e;this.cursor=n?$a(this.inv,s,this.cursor,Ln):Ya(this.inv,s,this.cursor,Ln)}}slotRef(t,e){if(t==="craft"){const r=this.gridN,o=this.craft[Math.floor(e/r)],a=e%r;return{get:()=>o[a],set:l=>o[a]=l}}const n=this.inv,s=t==="main"?Qn+e:e;return{get:()=>n[s],set:r=>n[s]=r}}slotAt(t){const e=document.elementFromPoint(t.clientX,t.clientY),n=e==null?void 0:e.closest(".inv-slot");return!n||n.dataset.region===void 0?null:{region:n.dataset.region,i:Number(n.dataset.idx)}}cellOf(t,e){return t==="main"?this.mainCells[e]??null:t==="hotbar"?this.hotbarCells[e]??null:t==="craft"?this.craftCells[e]??null:null}quickMoveFrom(t,e){if(this.inv)if(t==="craft"){const n=this.gridN;yc(this.craft[Math.floor(e/n)],e%n,this.inv,Ln)}else t==="main"?yc(this.inv,Qn+e,this.inv,Ln,0,Qn):yc(this.inv,e,this.inv,Ln,Qn,Qn+Mc)}takeOutput(){const t=Hf(this.craft);if(t){if(!this.cursor)this.cursor={id:t.id,count:t.count};else if(this.cursor.id===t.id&&this.cursor.count+t.count<=Ln(t.id))this.cursor.count+=t.count;else return;sE(this.craft)}}render(){if(!this.inv)return;for(let e=0;e<Mc;e++)this.paint(this.mainCells[e],this.inv[Qn+e]);for(let e=0;e<Qn;e++)this.paint(this.hotbarCells[e],this.inv[e]);const t=this.gridN;for(let e=0;e<this.craftCells.length;e++)this.paint(this.craftCells[e],this.craft[Math.floor(e/t)][e%t]);this.paint(this.outCell,Hf(this.craft)),this.cursor?(this.cursorEl.style.display="block",this.fill(this.cursorIcon,this.cursorCnt,this.cursor)):this.cursorEl.style.display="none"}paint(t,e){this.fill(t.icon,t.cnt,e)}fill(t,e,n){if(n&&n.count>0){const s=as(n.id);s?(t.style.backgroundImage=`url(${s})`,t.textContent="",t.classList.remove("txt")):(t.style.backgroundImage="none",t.textContent=e0(n.id),t.classList.add("txt")),e.textContent=n.count>1?String(n.count):""}else t.style.backgroundImage="none",t.textContent="",t.classList.remove("txt"),e.textContent=""}}const Wh=200,lE=64,f0={[Zw]:1,[Qw]:Um,[kh]:Nm,[Ih]:Fm,[Uh]:Om,[Nh]:Bm},cE={[Cm]:1600,[s1]:16e3,[sl]:300,[ol]:300,[jw]:300,[am]:300,[Rm]:100,[Dm]:200,[Pm]:200,[Lm]:200,[km]:200,[Im]:200},p0=i=>f0[i],Jc=i=>cE[i]??0,Wf=i=>Jc(i)>0,Gf=i=>i in f0;function hE(){return{input:0,inputN:0,fuel:0,fuelN:0,output:0,outputN:0,burn:0,burnMax:0,cook:0}}function m0(i){if(i.inputN<=0)return!1;const t=p0(i.input);return t===void 0?!1:i.outputN===0||i.output===t&&i.outputN<lE}function uE(i){const t=i.burn>0||i.cook>0,e=m0(i);if(i.burn>0&&i.burn--,i.burn===0&&e&&i.fuelN>0&&Jc(i.fuel)>0&&(i.burnMax=Jc(i.fuel),i.burn=i.burnMax,i.fuelN--,i.fuelN===0&&(i.fuel=0,delete i.fuelDur)),i.burn>0&&e){if(i.cook++,i.cook>=Wh){i.cook=0;const n=p0(i.input);i.inputN--,i.inputN===0&&(i.input=0),i.output=n,i.outputN++}}else i.cook=Math.max(0,i.cook-2);return t||i.burn>0||i.cook>0}function dE(i){return i.burn>0||i.fuelN>0&&m0(i)}const Mi=i=>ur(i),ma=9,Vf=27,fE=420,pE=12;class mE{constructor(t){y(this,"root");y(this,"inv",null);y(this,"furnace",null);y(this,"cursor",null);y(this,"open",!1);y(this,"cursorEl");y(this,"cursorIcon");y(this,"cursorCnt");y(this,"inputCell");y(this,"fuelCell");y(this,"outCell");y(this,"flameEl");y(this,"arrowFillEl");y(this,"mainCells",[]);y(this,"hotbarCells",[]);y(this,"touchPress",null);y(this,"onChange",null);y(this,"onClose",null);this.root=t,t.classList.add("hidden"),t.innerHTML=`
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
      </div>`,t.querySelector(".inv-close").addEventListener("click",()=>{var r;return(r=this.onClose)==null?void 0:r.call(this)});const e=r=>this.bindSlot(t.querySelector(r));this.inputCell=e(".fur-input"),this.fuelCell=e(".fur-fuel"),this.outCell=e(".fur-out"),this.inputCell.el.addEventListener("pointerdown",r=>this.onFurnacePointerDown("input",r)),this.fuelCell.el.addEventListener("pointerdown",r=>this.onFurnacePointerDown("fuel",r)),this.outCell.el.addEventListener("pointerdown",r=>this.onFurnacePointerDown("output",r)),this.flameEl=t.querySelector(".fur-flame-fill"),this.arrowFillEl=t.querySelector(".fur-arrow-fill");const n=t.querySelector(".inv-main"),s=t.querySelector(".inv-hotbar");for(let r=0;r<Vf;r++)this.mainCells.push(this.makeInvSlot(n,"main",r));for(let r=0;r<ma;r++)this.hotbarCells.push(this.makeInvSlot(s,"hotbar",r));this.cursorEl=document.createElement("div"),this.cursorEl.className="inv-cursor",this.cursorIcon=document.createElement("div"),this.cursorIcon.className="slot-icon",this.cursorCnt=document.createElement("div"),this.cursorCnt.className="slot-count",this.cursorEl.append(this.cursorIcon,this.cursorCnt),this.cursorEl.style.display="none",this.cursorEl.style.pointerEvents="none",document.body.appendChild(this.cursorEl),document.addEventListener("pointermove",r=>{this.open&&(this.cursorEl.style.left=`${r.clientX}px`,this.cursorEl.style.top=`${r.clientY}px`,this.updateTouchPressMove(r))}),document.addEventListener("pointerup",r=>this.endTouchPress(r)),document.addEventListener("pointercancel",r=>{var o;((o=this.touchPress)==null?void 0:o.pointerId)===r.pointerId&&this.cancelTouchPress()})}bindSlot(t){t.classList.add("inv-slot"),t.style.touchAction="none";const e=document.createElement("div");e.className="slot-icon";const n=document.createElement("div");return n.className="slot-count",t.append(e,n),t.addEventListener("contextmenu",s=>s.preventDefault()),{el:t,icon:e,cnt:n}}makeInvSlot(t,e,n){const s=document.createElement("div");s.className="inv-slot",s.style.touchAction="none";const r=document.createElement("div");r.className="slot-icon";const o=document.createElement("div");return o.className="slot-count",s.append(r,o),s.addEventListener("pointerdown",a=>{this.onInventoryPointerDown(e,n,a)}),s.addEventListener("contextmenu",a=>a.preventDefault()),t.appendChild(s),{el:s,icon:r,cnt:o}}isOpen(){return this.open}show(t,e){this.inv=t,this.furnace=e,this.open=!0,this.root.classList.remove("hidden"),this.render()}hide(){var e;this.cancelTouchPress();const t=[];if(this.cursor){const n=this.inv?cl(this.inv,this.cursor,Mi(this.cursor.id)):this.cursor.count;n>0&&t.push(this.cursor.dur===void 0?{id:this.cursor.id,count:n}:{id:this.cursor.id,count:n,dur:this.cursor.dur}),this.cursor=null}return this.open=!1,this.root.classList.add("hidden"),this.cursorEl.style.display="none",(e=this.onChange)==null||e.call(this),t}onInventoryPointerDown(t,e,n){this.isSupportedPointer(n)&&(n.preventDefault(),this.positionCursor(n),n.pointerType==="touch"?this.beginTouchPress(n,s=>this.performInventoryClick(t,e,s,!1)):this.performInventoryClick(t,e,n.button===2,n.shiftKey))}onFurnacePointerDown(t,e){this.isSupportedPointer(e)&&(e.preventDefault(),this.positionCursor(e),e.pointerType==="touch"?this.beginTouchPress(e,n=>this.performFurnaceClick(t,n)):this.performFurnaceClick(t,e.button===2))}isSupportedPointer(t){return t.isPrimary&&(t.pointerType!=="mouse"||t.button===0||t.button===2)}positionCursor(t){this.cursorEl.style.left=`${t.clientX}px`,this.cursorEl.style.top=`${t.clientY}px`}performInventoryClick(t,e,n,s){var o;if(!this.inv)return;const r=t==="main"?ma+e:e;s?this.shiftToFurnace(r):this.cursor=n?$a(this.inv,r,this.cursor,Mi):Ya(this.inv,r,this.cursor,Mi),this.render(),(o=this.onChange)==null||o.call(this)}shiftToFurnace(t){const e=this.furnace,n=this.inv;if(!e||!n)return;const s=n[t];if(!s)return;const r=Wf(s.id),o=e.fuelN<=0,a=!o&&Mr({id:e.fuel,dur:e.fuelDur},s);if(r&&(o||a)){const l=Mi(s.id)-e.fuelN,c=Math.min(l,s.count);if(c<=0)return;o&&(e.fuel=s.id,s.dur===void 0?delete e.fuelDur:e.fuelDur=s.dur),e.fuelN+=c,s.count-=c,s.count<=0&&(n[t]=null)}else if(!r&&Gf(s.id)&&(e.input===0||e.input===s.id)){const l=Mi(s.id)-e.inputN,c=Math.min(l,s.count);e.input=s.id,e.inputN+=c,s.count-=c,s.count<=0&&(n[t]=null)}}performFurnaceClick(t,e){var s;const n=this.furnace;if(n){if(t==="output")this.takeOutput();else{const r=t==="input"?n.input:n.fuel,o=t==="input"?n.inputN:n.fuelN,a=[o>0?t==="fuel"&&n.fuelDur!==void 0?{id:r,count:o,dur:n.fuelDur}:{id:r,count:o}:null];if(t==="fuel"&&this.cursor&&!Wf(this.cursor.id)||t==="input"&&this.cursor&&!Gf(this.cursor.id))return;this.cursor=e?$a(a,0,this.cursor,Mi):Ya(a,0,this.cursor,Mi);const l=a[0];t==="input"?(n.input=(l==null?void 0:l.id)??0,n.inputN=(l==null?void 0:l.count)??0):(n.fuel=(l==null?void 0:l.id)??0,n.fuelN=(l==null?void 0:l.count)??0,(l==null?void 0:l.dur)===void 0?delete n.fuelDur:n.fuelDur=l.dur)}this.render(),(s=this.onChange)==null||s.call(this)}}beginTouchPress(t,e){this.cancelTouchPress();const n={pointerId:t.pointerId,startX:t.clientX,startY:t.clientY,holdTimer:null,moved:!1,longPressed:!1,activate:e};this.touchPress=n,n.holdTimer=window.setTimeout(()=>{n.holdTimer=null,!(!this.open||this.touchPress!==n||n.moved)&&(n.longPressed=!0,n.activate(!0))},fE)}updateTouchPressMove(t){const e=this.touchPress;!e||e.pointerId!==t.pointerId||e.longPressed||Math.hypot(t.clientX-e.startX,t.clientY-e.startY)<=pE||(e.moved=!0,this.clearTouchPressTimer(e))}endTouchPress(t){const e=this.touchPress;!e||e.pointerId!==t.pointerId||(this.clearTouchPressTimer(e),this.touchPress=null,!e.moved&&!e.longPressed&&e.activate(!1))}cancelTouchPress(){this.touchPress&&(this.clearTouchPressTimer(this.touchPress),this.touchPress=null)}clearTouchPressTimer(t){t.holdTimer!==null&&(window.clearTimeout(t.holdTimer),t.holdTimer=null)}takeOutput(){const t=this.furnace;!t||t.outputN<=0||(this.cursor?this.cursor.id===t.output&&this.cursor.count+t.outputN<=Mi(t.output)&&(this.cursor.count+=t.outputN,t.output=0,t.outputN=0):(this.cursor={id:t.output,count:t.outputN},t.output=0,t.outputN=0))}render(){if(!this.inv||!this.furnace)return;const t=this.furnace;for(let e=0;e<Vf;e++)this.fill(this.mainCells[e],this.inv[ma+e]);for(let e=0;e<ma;e++)this.fill(this.hotbarCells[e],this.inv[e]);this.fill(this.inputCell,t.inputN>0?{id:t.input,count:t.inputN}:null),this.fill(this.fuelCell,t.fuelN>0?t.fuelDur===void 0?{id:t.fuel,count:t.fuelN}:{id:t.fuel,count:t.fuelN,dur:t.fuelDur}:null),this.fill(this.outCell,t.outputN>0?{id:t.output,count:t.outputN}:null),this.flameEl.style.height=`${t.burnMax>0?Math.round(t.burn/t.burnMax*100):0}%`,this.arrowFillEl.style.width=`${Math.round(t.cook/Wh*100)}%`,this.cursor?(this.cursorEl.style.display="block",this.fillRaw(this.cursorIcon,this.cursorCnt,this.cursor)):this.cursorEl.style.display="none"}fill(t,e){this.fillRaw(t.icon,t.cnt,e)}fillRaw(t,e,n){if(n&&n.count>0){const s=as(n.id);s?(t.style.backgroundImage=`url(${s})`,t.textContent="",t.classList.remove("txt")):(t.style.backgroundImage="none",t.textContent=e0(n.id),t.classList.add("txt")),e.textContent=n.count>1?String(n.count):""}else t.style.backgroundImage="none",t.textContent="",t.classList.remove("txt"),e.textContent=""}}const wc=21,Sc=21;function Xf(i,t,e,n,s,r){const o=(m,f)=>r==="x"?[e+m,n+f,s]:[e,n+f,s+m],a=(m,f)=>t(...o(m,f)),l=(m,f)=>i(...o(m,f));if(!a(0,0))return null;let c=0;for(;-c<wc&&a(c-1,0);)c--;let h=0;for(;h<wc&&a(h+1,0);)h++;let u=0;for(;-u<Sc&&a(0,u-1);)u--;let d=0;for(;d<Sc&&a(0,d+1);)d++;const p=h-c+1,g=d-u+1;if(p<2||p>wc||g<3||g>Sc)return null;for(let m=c;m<=h;m++)for(let f=u;f<=d;f++)if(!a(m,f))return null;for(let m=u;m<=d;m++)if(!l(c-1,m)||!l(h+1,m))return null;for(let m=c;m<=h;m++)if(!l(m,u-1)||!l(m,d+1))return null;const v=[];for(let m=c;m<=h;m++)for(let f=u;f<=d;f++)v.push(o(m,f));return{axis:r,inner:v}}function g0(i,t,e,n,s){return Xf(i,t,e,n,s,"x")??Xf(i,t,e,n,s,"z")}const v0=31,gE=127,vE=191;function _E(i,t,e,n){const o=g0((a,l,c)=>i(a,l,c)===18,(a,l,c)=>{const h=i(a,l,c);return h===0||h===25},t,e+1,n);return o?o.inner:null}function xE(i,t,e){return i==="overworld"?[Math.floor(t/8),Math.floor(e/8)]:[Math.floor(t*8),Math.floor(e*8)]}function yE(i,t,e,n){if(t==="overworld"){for(let o=vE;o>1;o--)if(_e(i(e,o,n))&&!_e(i(e,o+1,n)))return o+1;return null}const s=v0+2,r=gE-8;for(let o=s;o<=r;o++){if(!_e(i(e,o-1,n)))continue;let a=!1;for(let l=0;l<3;l++)if($c(i(e,o+l,n))){a=!0;break}if(!a)return o}return null}function ME(i,t,e,n){let s=yE(i,t,e,n),r=!1;s===null&&(s=t==="nether"?v0+10:64,r=!0);const o=new Map,a=(d,p,g)=>`${d},${p},${g}`,l=(d,p,g,v)=>{o.set(a(d,p,g),[d,p,g,v])},c=e,h=e+1,u=s+2;for(let d=e-1;d<=e+2;d++)for(let p=s-1;p<=s+3;p++)for(let g=n-1;g<=n+1;g++)l(d,p,g,0);for(let d=e-1;d<=e+2;d++)l(d,s-1,n,Sn),l(d,s+3,n,Sn);for(let d=s-1;d<=s+3;d++)l(e-1,d,n,Sn),l(e+2,d,n,Sn);for(let d=c;d<=h;d++)for(let p=s;p<=u;p++)l(d,p,n,rl);if(l(c,s-1,n-1,Sn),l(h,s-1,n-1,Sn),r)for(let d=e-1;d<=e+2;d++)for(let p=n-1;p<=n+1;p++)l(d,s-1,p,Sn);return{edits:[...o.values()],spawn:{x:c+.5,y:s,z:n+.5}}}const bc=600;class wE{constructor(t){y(this,"geom",new Ve);y(this,"pos",new Float32Array(bc*3));y(this,"col",new Float32Array(bc*3));y(this,"posAttr");y(this,"colAttr");y(this,"points");this.posAttr=new ue(this.pos,3),this.colAttr=new ue(this.col,3),this.posAttr.setUsage(Ou),this.colAttr.setUsage(Ou),this.geom.setAttribute("position",this.posAttr),this.geom.setAttribute("color",this.colAttr),this.geom.setDrawRange(0,0);const e=new wh({size:.13,vertexColors:!0,sizeAttenuation:!0,transparent:!0,depthWrite:!1});this.points=new Qp(this.geom,e),this.points.layers.set(oo),this.points.frustumCulled=!1,t.add(this.points)}sync(t){const e=Math.min(t.length,bc);for(let n=0;n<e;n++){const s=t[n];this.pos[n*3]=s.x,this.pos[n*3+1]=s.y,this.pos[n*3+2]=s.z,this.col[n*3]=s.r,this.col[n*3+1]=s.g,this.col[n*3+2]=s.b}this.geom.setDrawRange(0,e),this.posAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0}}const ri={extent:900,weatherTextureSize:128,detailTextureSize:64,standardSteps:36,highSteps:64,reflectionSteps:20};function Tc(i){return i==="high"?ri.highSteps:i==="standard"?ri.standardSteps:0}const Ec=(i,t)=>(i%t+t)%t,SE=(i,t,e)=>{let n=Math.imul(i^1757159915,668265261);return n=Math.imul(n^t,374761393),n=Math.imul(n^e,461845907),n^=n>>>15,n=Math.imul(n,2246822507),n^=n>>>13,(n>>>0)/4294967295},Ac=i=>i*i*(3-2*i),bE=(i,t,e,n)=>{const s=Math.floor(i),r=Math.floor(t),o=Math.floor(e),a=Ac(i-s),l=Ac(t-r),c=Ac(e-o),h=(f,x,_)=>SE(Ec(s+f,n),Ec(r+x,n),Ec(o+_,n)),u=h(0,0,0)*(1-a)+h(1,0,0)*a,d=h(0,1,0)*(1-a)+h(1,1,0)*a,p=h(0,0,1)*(1-a)+h(1,0,1)*a,g=h(0,1,1)*(1-a)+h(1,1,1)*a,v=u*(1-l)+d*l,m=p*(1-l)+g*l;return v*(1-c)+m*c};function TE(i,t,e){let n=0,s=0,r=1;for(const o of[2,4,8,16])n+=bE(i*o,t*o,e*o,o)*r,s+=r,r*=.52;return n/s}function EE(i=ri.detailTextureSize){if(!Number.isInteger(i)||i<16||i&i-1)throw new Error("cloud volume texture size must be a power of two >= 16");const t=new Float32Array(i*i*i);let e=1/0,n=-1/0,s=0;for(let a=0;a<i;a++)for(let l=0;l<i;l++)for(let c=0;c<i;c++){const h=TE(c/i,l/i,a/i);t[s++]=h,e=Math.min(e,h),n=Math.max(n,h)}const r=new Uint8Array(t.length),o=Math.max(1e-6,n-e);for(let a=0;a<t.length;a++)r[a]=Math.round((t[a]-e)/o*255);return r}function AE(i=ri.weatherTextureSize){const t=new Mh(Tm(i),i,i,mn);return t.name="mineworld-cloud-weather",t.wrapS=_n,t.wrapT=_n,t.magFilter=Te,t.minFilter=ni,t.generateMipmaps=!0,t.colorSpace=pn,t.needsUpdate=!0,t}function RE(i=ri.detailTextureSize){const t=new kp(EE(i),i,i,i);return t.name="mineworld-cloud-detail-3d",t.format=Sp,t.type=hi,t.wrapS=_n,t.wrapT=_n,t.wrapR=_n,t.magFilter=Te,t.minFilter=Te,t.unpackAlignment=1,t.colorSpace=pn,t.needsUpdate=!0,t}const CE=`
varying vec3 vCloudExit;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vCloudExit = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`.trim(),DE=`
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
`.trim(),PE=280,qf=7.4,Yf=8.8,$f=32,Rc=`
varying vec2 vDisc;
void main() {
  vDisc = uv * 2.0 - 1.0;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`.trim(),LE=`
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
`.trim(),kE=`
uniform float uVisibility;
varying vec2 vDisc;
void main() {
  float radius = length(vDisc);
  if (radius >= 1.0) discard;
  float glow = pow(1.0 - radius, 2.6) * 0.075 * uVisibility;
  gl_FragColor = vec4(vec3(1.0, 0.78, 0.38) * glow, 1.0);
  #include <colorspace_fragment>
}
`.trim(),IE=`
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
`.trim();function UE(){const t=new Float32Array(2550),e=new Float32Array(850*3),n=310;let s=12345;const r=()=>(s=s*1664525+1013904223>>>0,s/4294967296);for(let c=0;c<850;c++){const h=r()*2-1,u=r()*Math.PI*2,d=Math.sqrt(1-h*h);t[c*3]=Math.cos(u)*d*n,t[c*3+1]=Math.sin(u)*d*n,t[c*3+2]=h*n;const p=.35+r()*.65;e[c*3]=p,e[c*3+1]=p,e[c*3+2]=Math.min(1,p*(.92+r()*.16))}const o=new Ve;o.setAttribute("position",new ue(t,3)),o.setAttribute("color",new ue(e,3));const a=new wh({size:1.7,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),l=new Qp(o,a);return l.frustumCulled=!1,l}function NE(){const i=document.createElement("canvas");i.width=i.height=16;const t=i.getContext("2d");return t.fillStyle="#fff6c0",t.fillRect(1,1,14,14),t.fillStyle="#ffe25a",t.fillRect(3,3,10,10),t.fillStyle="#ffcf26",t.fillRect(5,5,6,6),_0(i)}function FE(){const i=document.createElement("canvas");i.width=i.height=16;const t=i.getContext("2d");return t.fillStyle="#eef2f7",t.fillRect(2,2,12,12),t.fillStyle="#c2ccd8",t.fillRect(5,4,3,3),t.fillRect(9,7,2,2),t.fillRect(4,9,2,3),t.fillRect(10,11,2,2),_0(i)}function _0(i){const t=new il(i);return t.magFilter=de,t.minFilter=de,t.colorSpace=ae,t}function ga(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Cc(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=ga(e,n),c=ga(e+1,n),h=ga(e,n+1),u=ga(e+1,n+1);return l*(1-o)*(1-a)+c*o*(1-a)+h*(1-o)*a+u*o*a}function OE(i,t){return Cc(i,t)*.6+Cc(i*2.3+5.1,t*2.3-3.7)*.3+Cc(i*4.7,t*4.7)*.1}const Jn=16,BE=5,va=28,zE=232,Kf=.18,HE=.62,WE=.72;function GE(i,t){return OE(i*Kf,t*Kf)>HE}const VE=[{o:[[1,-1,-1],[1,1,-1],[1,1,1],[1,-1,1]],s:.82},{o:[[-1,-1,1],[-1,1,1],[-1,1,-1],[-1,-1,-1]],s:.82},{o:[[-1,1,-1],[-1,1,1],[1,1,1],[1,1,-1]],s:1},{o:[[-1,-1,1],[-1,-1,-1],[1,-1,-1],[1,-1,1]],s:.6},{o:[[1,-1,1],[1,1,1],[-1,1,1],[-1,-1,1]],s:.88},{o:[[-1,-1,-1],[-1,1,-1],[1,1,-1],[1,-1,-1]],s:.88}];function XE(i,t,e,n,s,r,o,a,l){const c=o/2,h=a/2,u=l/2;for(const d of VE){const p=i.length/3;for(const[g,v,m]of d.o)i.push(n+g*c,s+v*h,r+m*u),t.push(d.s,d.s,d.s);e.push(p,p+1,p+2,p,p+2,p+3)}}class qE{constructor(t){y(this,"sun");y(this,"moon");y(this,"realSun");y(this,"sunGlow");y(this,"realMoon");y(this,"voxelClouds");y(this,"realClouds");y(this,"cloudUniforms");y(this,"sunUniforms",{uVisibility:{value:1}});y(this,"sunGlowUniforms",{uVisibility:{value:1}});y(this,"moonUniforms",{uVisibility:{value:1}});y(this,"stars");y(this,"starGroup");y(this,"dir",new U);y(this,"drift",0);y(this,"cloudOriginX",NaN);y(this,"cloudOriginZ",NaN);y(this,"lq","off");y(this,"dim","overworld");const e=r=>new we({map:r,transparent:!0,depthWrite:!1,fog:!1});this.sun=new Jt(new an(46,46),e(NE())),this.moon=new Jt(new an(38,38),e(FE())),this.realSun=new Jt(new an(qf,qf),new je({uniforms:this.sunUniforms,vertexShader:Rc,fragmentShader:LE,transparent:!0,depthWrite:!1})),this.sunGlow=new Jt(new an($f,$f),new je({uniforms:this.sunGlowUniforms,vertexShader:Rc,fragmentShader:kE,transparent:!0,depthWrite:!1,blending:Bc})),this.realMoon=new Jt(new an(Yf,Yf),new je({uniforms:this.moonUniforms,vertexShader:Rc,fragmentShader:IE,transparent:!0,depthWrite:!1})),this.realSun.layers.set(Xr),this.sunGlow.layers.set(Xr),this.realSun.visible=this.sunGlow.visible=this.realMoon.visible=!1;const n=new we({vertexColors:!0,color:16777215,transparent:!0,opacity:.85,depthWrite:!1,side:on});this.voxelClouds=new Jt(new Ve,n),this.voxelClouds.frustumCulled=!1,this.cloudUniforms={uCloudWeather:{value:AE()},uCloudDetail3D:{value:RE()},uTime:{value:0},uStepCount:{value:Tc("standard")},uTint:{value:new bt(1,1,1)},uSunDir:{value:new U(.5,.8,.28)}};const s=new je({uniforms:this.cloudUniforms,vertexShader:CE,fragmentShader:DE,transparent:!0,depthWrite:!1,side:ze});this.realClouds=new Jt(new Ze(ri.extent,ri.extent,ri.extent),s),this.realClouds.frustumCulled=!1,this.realClouds.visible=!1,this.realClouds.onBeforeRender=(r,o,a)=>{const l=Tc(this.lq);this.cloudUniforms.uStepCount.value=a.layers.isEnabled(Xr)?l:Math.min(l,ri.reflectionSteps)},this.stars=UE(),this.starGroup=new gn,this.starGroup.add(this.stars),this.stars.renderOrder=-900;for(const r of[this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon])r.renderOrder=-850;this.realClouds.renderOrder=-800,this.voxelClouds.renderOrder=-800;for(const r of[this.sun,this.moon,this.realMoon,this.voxelClouds,this.realClouds,this.starGroup,this.stars])r.layers.set(Jr);t.add(this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon,this.voxelClouds,this.realClouds,this.starGroup)}setDimension(t){if(this.dim=t,t==="nether")for(const e of[this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon,this.voxelClouds,this.realClouds,this.starGroup])e.visible=!1;else this.starGroup.visible=!0,this.setLightingQuality(this.lq)}setLightingQuality(t){if(this.lq=t,this.dim==="nether"){for(const n of[this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon,this.voxelClouds,this.realClouds,this.starGroup])n.visible=!1;return}const e=t!=="off";this.cloudUniforms.uStepCount.value=Tc(t),this.voxelClouds.visible=!e,this.realClouds.visible=e,this.sun.visible=!e,this.moon.visible=!e,this.realSun.visible=e,this.sunGlow.visible=e,this.realMoon.visible=e}rebuildVoxelClouds(t,e){const n=[],s=[],r=[],o=Jn-1;for(let l=0;l<va;l++)for(let c=0;c<va;c++)GE(t+l,e+c)&&XE(n,s,r,l*Jn+Jn/2,0,c*Jn+Jn/2,o,BE,o);const a=new Ve;a.setAttribute("position",new ke(n,3)),a.setAttribute("color",new ke(s,3)),a.setIndex(r),this.voxelClouds.geometry.dispose(),this.voxelClouds.geometry=a}update(t,e,n){if(this.dim==="nether")return;const s=t/sn*Math.PI*2;this.dir.set(Math.cos(s),Math.sin(s),.1).normalize();const r=PE;this.sun.position.copy(e).addScaledVector(this.dir,r),this.sun.lookAt(e),this.moon.position.copy(e).addScaledVector(this.dir,-r),this.moon.lookAt(e),this.realSun.position.copy(this.sun.position),this.realSun.lookAt(e),this.sunGlow.position.copy(this.sun.position),this.sunGlow.lookAt(e),this.realMoon.position.copy(this.moon.position),this.realMoon.lookAt(e),this.sunUniforms.uVisibility.value=si.smoothstep(this.dir.y,-.055,.025),this.sunGlowUniforms.uVisibility.value=this.sunUniforms.uVisibility.value,this.moonUniforms.uVisibility.value=si.smoothstep(-this.dir.y,-.055,.025),this.drift+=WE*Math.max(0,n),this.starGroup.position.copy(e),this.starGroup.rotation.z=s;const o=wm(t)/11;if(this.stars.material.opacity=Math.pow(o,1.5)*.9,this.realClouds.visible){this.realClouds.position.copy(e),this.cloudUniforms.uTime.value=this.drift;const c=ba(t).worldTint;this.cloudUniforms.uTint.value.setRGB(c[0],c[1],c[2],ae),this.cloudUniforms.uSunDir.value.copy(this.dir);return}const a=Math.floor((e.x-this.drift)/Jn)-va/2,l=Math.floor(e.z/Jn)-va/2;(a!==this.cloudOriginX||l!==this.cloudOriginZ)&&(this.rebuildVoxelClouds(a,l),this.cloudOriginX=a,this.cloudOriginZ=l),this.voxelClouds.position.set(a*Jn+this.drift,zE,l*Jn)}}const YE=16,$E={1:[.54,.54,.54],2:[.55,.42,.25],3:[.42,.67,.25],4:[.53,.53,.53],5:[.91,.86,.63],6:[.45,.33,.18],7:[.69,.54,.31],8:[.34,.34,.34],10:[.25,.48,.19],11:[.5,.36,.2],35:[.18,.69,.72],36:[.16,.68,.71],16:[.44,.7,.28],17:[.44,.7,.28],256:[.79,.16,.13],296:[.28,.78,.75]},Bs=i=>$E[i]??[.5,.5,.5];function $i(i,t,e,n,s,r=Math.random){const o=[];for(let a=0;a<s;a++){const l=r()*Math.PI*2,c=.6+r()*1.8;o.push({x:i+(r()-.5)*.6,y:t+(r()-.5)*.6,z:e+(r()-.5)*.6,vx:Math.cos(l)*c,vy:1.5+r()*2.5,vz:Math.sin(l)*c,age:0,life:.4+r()*.45,r:n[0],g:n[1],b:n[2]})}return o}function KE(i,t){const e=[];for(const n of i)n.age+=t,!(n.age>=n.life)&&(n.vy-=YE*t,n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,e.push(n));return e}const x0="mineworld.saves",Ai=3e7,jE=-1024,ZE=4096,Tn=128,Gh=4096,QE=300,JE=1200,t2=64,e2=12e3,jf=16e3,Zf=24e3;function Xe(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}function rs(i){return typeof i=="number"&&Number.isFinite(i)}function vn(i,t,e){return rs(i)&&i>=t&&i<=e}function ci(i,t,e){return Number.isSafeInteger(i)&&i>=t&&i<=e}function zs(i,t,e){return Math.max(t,Math.min(e,i))}function y0(i){const t=i%(Math.PI*2);return t>Math.PI?t-Math.PI*2:t<-Math.PI?t+Math.PI*2:t}function lo(i,t,e){return vn(i,-Ai,Ai)&&vn(t,jE,ZE)&&vn(e,-Ai,Ai)}function th(i){if(!(!Xe(i)||!lo(i.x,i.y,i.z)||!rs(i.yaw)||!vn(i.pitch,-Math.PI/2,Math.PI/2)))return{x:i.x,y:i.y,z:i.z,yaw:y0(i.yaw),pitch:i.pitch}}function Vh(i,t){let e=i;if(i.startsWith("nether:"))e=i.slice(7);else if(t&&i.startsWith("overworld:"))e=i.slice(10);else if(i.includes(":"))return null;const n=e.split(",");if(n.length!==3||!n.every(a=>/^-?\d+$/.test(a)))return null;const[s,r,o]=n.map(Number);return!ci(s,-Ai,Ai)||!ci(r,0,pe-1)||!ci(o,-Ai,Ai)?null:[s,r,o]}function n2(i){return Vh(i,!1)!==null}function M0(i){return Vh(i,!0)!==null}function i2(i){const t=/^portal:(overworld|nether):(x|z):(.+)$/.exec(i);return t?Vh(t[3],!1)!==null:(i.startsWith("overworld:")||i.startsWith("nether:"))&&M0(i)}function s2(i){var t;return Number.isInteger(i)&&i>=0&&((t=Ie[i])==null?void 0:t.id)===i}function w0(i){var t;return Number.isInteger(i)&&i>0&&(((t=Ie[i])==null?void 0:t.id)===i||Ea(i))}function S0(i){if(!Xe(i)||!w0(i.id)||!Number.isInteger(i.count)||i.count<=0)return null;const t=i.id,e={id:t,count:Math.min(i.count,ur(t))},n=eo(t);if(n!==null&&i.dur!==void 0){if(!ci(i.dur,0,Number.MAX_SAFE_INTEGER))return null;e.dur=Math.min(i.dur,n)}return e}function r2(i){const t={};if(!Xe(i))return t;for(const[e,n]of Object.entries(i))n2(e)&&s2(n)&&(t[e]=n);return t}function o2(i){if(Array.isArray(i))return i.slice(0,Fh).map(t=>t===null?null:S0(t))}function a2(i){return typeof i=="string"&&Object.prototype.hasOwnProperty.call(Gn,i)}function eh(i){if(!Array.isArray(i))return;const t=[];for(const e of i.slice(0,Gh)){if(!Xe(e)||!a2(e.kind)||!lo(e.x,e.y,e.z)||!rs(e.yaw)||!vn(e.health,Number.MIN_VALUE,Number.MAX_SAFE_INTEGER))continue;const n={kind:e.kind,x:e.x,y:e.y,z:e.z,yaw:y0(e.yaw),health:Math.min(e.health,Gn[e.kind].hp)};e.kind==="chicken"&&ci(e.egg,0,e2)&&(n.egg=e.egg),t.push(n)}return t}function Dc(i,t){return!w0(i)||!Number.isInteger(t)||t<=0?[0,0]:[i,Math.min(t,ur(i))]}function Pc(i,t){return Number.isSafeInteger(i)&&i>=0?Math.min(i,t):0}function l2(i){if(!Xe(i))return;const t={};for(const[e,n]of Object.entries(i)){if(!M0(e)||!Xe(n))continue;const[s,r]=Dc(n.input,n.inputN);let[o,a]=Dc(n.fuel,n.fuelN);const[l,c]=Dc(n.output,n.outputN);let h;if(o!==0&&n.fuelDur!==void 0){const p=eo(o);p!==null&&(ci(n.fuelDur,0,Number.MAX_SAFE_INTEGER)?h=Math.min(n.fuelDur,p):(o=0,a=0))}const u=Pc(n.burnMax,jf),d={input:s,inputN:r,fuel:o,fuelN:a,output:l,outputN:c,burn:Math.min(Pc(n.burn,jf),u),burnMax:u,cook:Pc(n.cook,Wh)};h!==void 0&&a>0&&(d.fuelDur=h),t[e]=d}return t}function c2(i){if(!Xe(i)||!["health","food","saturation","exhaustion"].every(s=>rs(i[s])))return;const e=Math.floor(zs(i.food,0,ss)),n={health:zs(i.health,0,Ys),food:e,saturation:zs(i.saturation,0,e),exhaustion:zs(i.exhaustion,0,40)};return rs(i.oxygen)&&(n.oxygen=Math.floor(zs(i.oxygen,0,ul))),rs(i.oxygenTimer)&&(n.oxygenTimer=Math.floor(zs(i.oxygenTimer,0,30))),n}function h2(i){if(!Xe(i))return;const t={},e=th(i.overworld),n=th(i.nether);return e&&(t.overworld=e),n&&(t.nether=n),t}function u2(i){if(!Xe(i))return;const t={},e=eh(i.overworld),n=eh(i.nether);return e&&(t.overworld=e),n&&(t.nether=n),t}function Qf(i){if(!Array.isArray(i))return;const t=[];for(const e of i.slice(0,Gh)){const n=S0(e);if(!Xe(e)||!n||!lo(e.x,e.y,e.z)||!vn(e.vx,-Tn,Tn)||!vn(e.vy,-Tn,Tn)||!vn(e.vz,-Tn,Tn)||!vn(e.age,0,QE))continue;const s={id:n.id,count:n.count,x:e.x,y:e.y,z:e.z,vx:e.vx,vy:e.vy,vz:e.vz,age:e.age};n.dur!==void 0&&(s.dur=n.dur),t.push(s)}return t}function d2(i){if(!Xe(i))return;const t={},e=Qf(i.overworld),n=Qf(i.nether);return e&&(t.overworld=e),n&&(t.nether=n),t}function Jf(i){if(!Array.isArray(i))return;const t=[];for(const e of i.slice(0,Gh))!Xe(e)||!lo(e.x,e.y,e.z)||!vn(e.vx,-Tn,Tn)||!vn(e.vy,-Tn,Tn)||!vn(e.vz,-Tn,Tn)||!ci(e.age,0,JE)||!vn(e.damage,Number.MIN_VALUE,t2)||typeof e.stuck!="boolean"||typeof e.fromPlayer!="boolean"||t.push({x:e.x,y:e.y,z:e.z,vx:e.vx,vy:e.vy,vz:e.vz,age:e.age,stuck:e.stuck,fromPlayer:e.fromPlayer,damage:e.damage});return t}function f2(i){if(!Xe(i))return;const t={},e=Jf(i.overworld),n=Jf(i.nether);return e&&(t.overworld=e),n&&(t.nether=n),t}function p2(i){if(!Xe(i))return;const t={};for(const[e,n]of Object.entries(i))i2(e)&&Array.isArray(n)&&n.length===3&&lo(n[0],n[1],n[2])&&(t[e]=[n[0],n[1],n[2]]);return t}function b0(i){if(!Xe(i)||typeof i.id!="string"||i.id.length===0||typeof i.name!="string"||!ci(i.seed,-2e9,2e9)||!ci(i.lastPlayed,0,Number.MAX_SAFE_INTEGER))return null;const t={...i,edits:r2(i.edits)};i.gameMode!=="survival"&&i.gameMode!=="creative"&&delete t.gameMode,i.currentDimension!=="overworld"&&i.currentDimension!=="nether"&&delete t.currentDimension;const e=th(i.player);e?t.player=e:delete t.player;const n=o2(i.inv);n?t.inv=n:delete t.inv;const s=c2(i.survival);if(s?t.survival=s:delete t.survival,rs(i.worldTime)){const d=Math.floor(i.worldTime)%Zf;t.worldTime=d<0?d+Zf:d}else delete t.worldTime;const r=eh(i.mobs);r?t.mobs=r:delete t.mobs;const o=l2(i.furnaces);o?t.furnaces=o:delete t.furnaces;const a=h2(i.playerByDimension);a?t.playerByDimension=a:delete t.playerByDimension;const l=u2(i.mobsByDimension);l?t.mobsByDimension=l:delete t.mobsByDimension;const c=d2(i.dropsByDimension);c?t.dropsByDimension=c:delete t.dropsByDimension;const h=f2(i.arrowsByDimension);h?t.arrowsByDimension=h:delete t.arrowsByDimension;const u=p2(i.portalLinks);return u?t.portalLinks=u:delete t.portalLinks,t}function Xh(){try{const i=localStorage.getItem(x0);if(i===null)return{ok:!0,worlds:[],rawEntries:[]};const t=JSON.parse(i);return Array.isArray(t)?{ok:!0,worlds:t.map(b0).filter(e=>e!==null),rawEntries:t}:{ok:!1,worlds:[],rawEntries:[],error:new Error("存档顶层结构不是数组")}}catch(i){return{ok:!1,worlds:[],rawEntries:[],error:i}}}function m2(){return Xh().worlds}function T0(i){try{return localStorage.setItem(x0,JSON.stringify(i)),!0}catch(t){return console.warn("[mineworld] 存档写入失败(localStorage 配额满或不可用):",t),!1}}function g2(){return m2().sort((i,t)=>t.lastPlayed-i.lastPlayed)}function v2(i){const t=i.trim();if(!t)return null;if(/^-?\d+$/.test(t))return Math.abs(Math.floor(Number(t)))%2e9;let e=0;for(let n=0;n<t.length;n++)e=Math.imul(e,31)+t.charCodeAt(n)|0;return Math.abs(e)%2e9}function _2(i,t,e="survival"){const n={id:`${Date.now().toString(36)}-${Math.floor(Math.random()*1e6).toString(36)}`,name:i.trim()||"新的世界",seed:t??Math.floor(Math.random()*2e9),gameMode:e,lastPlayed:Date.now(),edits:{}};if(!E0(n))throw new Error("无法写入浏览器存档，请检查隐私模式或清理网站存储空间。");return n}function E0(i){const t=b0(i);if(!t)return console.warn("[mineworld] 拒绝写入结构损坏的世界存档"),!1;const e=Xh();if(!e.ok)return console.warn("[mineworld] 原存档无法读取，拒绝覆盖以免丢失数据:",e.error),!1;const n=[];let s=!1;for(const r of e.rawEntries)Xe(r)&&r.id===t.id?(s||n.push(t),s=!0):n.push(r);return s||n.push(t),T0(n)}function x2(i){const t=Xh();return t.ok?T0(t.rawEntries.filter(e=>!Xe(e)||e.id!==i)):(console.warn("[mineworld] 原存档无法读取，拒绝删除以免丢失数据:",t.error),!1)}function nh(i,t,e,n){return i==="nether"?`nether:${t},${e},${n}`:`${t},${e},${n}`}function ih(i){if(i.startsWith("nether:")){const[s,r,o]=i.slice(7).split(",").map(Number);return{dim:"nether",x:s,y:r,z:o}}const[t,e,n]=i.split(",").map(Number);return{dim:"overworld",x:t,y:e,z:n}}function y2(i,t,e,n){const r=Ba/2,o=Math.floor(i-r-.1),a=Math.floor(i+r+.1),l=Math.floor(t-.1),c=Math.floor(t+ls),h=Math.floor(e-r-.1),u=Math.floor(e+r+.1);for(let d=o;d<=a;d++)for(let p=l;p<=c;p++)for(let g=h;g<=u;g++)if(h1(n(d,p,g)))return!0;return!1}const M2=[.8,.8,1,.42,.8,.8],w2=14,S2=16,b2=10,tp=14;function A0(i){return Math.max(0,Math.min(1,i))}function Nr(i,t){return Number.isFinite(i)?i:t}function _a(i,t){return 1-Math.exp(-Math.max(0,Math.min(i,.2))*t)}function R0(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function T2(i){const t=R0(i)%360/360;return new bt().setHSL(t,.6,.48).getHex()}function E2(i,t,e){const n=A0(e);let s=t-i;return s=((s+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,i+s*n}function A2(i,t,e){const n=new Ze(i,t,e),s=[];for(let r=0;r<6;r++){const o=M2[r];for(let a=0;a<4;a++)s.push(o,o,o)}return n.setAttribute("color",new ke(s,3)),n}function Ki(i,t,e,n,s,r,o,a){const l=new Jt(A2(e,n,s),t);return l.position.set(r,o,a),i.add(l),l}function Fr(i,t){const e=new we({color:i,vertexColors:!0});return t.push({material:e,base:i.clone()}),e}function sh(i){var e;const t=(e=i.name)==null?void 0:e.trim();return t?t.slice(0,18):i.id.slice(0,10)||"玩家"}function R2(i,t,e,n,s,r){const o=Math.min(r,n/2,s/2);i.beginPath(),i.moveTo(t+o,e),i.arcTo(t+n,e,t+n,e+s,o),i.arcTo(t+n,e+s,t,e+s,o),i.arcTo(t,e+s,t,e,o),i.arcTo(t,e,t+n,e,o),i.closePath()}function C2(i){const t=document.createElement("canvas");t.width=256,t.height=64;const e=t.getContext("2d");if(!e)throw new Error("无法创建远端玩家名字牌画布");const n=new il(t);n.colorSpace=ae,n.minFilter=Te,n.magFilter=Te;const s=new Kp({map:n,transparent:!0,depthWrite:!1,depthTest:!1}),r=new bw(s);r.layers.set(oo),r.position.set(0,2.38,0),r.scale.set(1.65,.4125,1);const o={canvas:t,context:e,texture:n,material:s,sprite:r};return C0(o,i),o}function C0(i,t){const{canvas:e,context:n}=i;n.clearRect(0,0,e.width,e.height),n.fillStyle="rgba(0, 0, 0, 0.58)",R2(n,7,7,e.width-14,e.height-14,11),n.fill(),n.font="bold 27px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.lineWidth=4,n.strokeStyle="rgba(0, 0, 0, 0.7)",n.strokeText(t,e.width/2,e.height/2+1),n.fillStyle="#ffffff",n.fillText(t,e.width/2,e.height/2+1),i.texture.needsUpdate=!0}function D2(i){const t=R0(i),e=t%360/360,n=[16041889,14260842,11036225,7356973],s=new bt(n[(t>>>9)%n.length]),r=new bt(T2(i)),o=new bt().setHSL((e+.57)%1,.35,.31),a=new bt().setHSL((t>>>17)%360/360,.32,.18+(t>>>25)%7*.025);return{skin:s,shirt:r,trousers:o,hair:a}}function P2(i){const t=new gn;t.name=`remote-player:${i.id}`;const e=[],n=D2(i.id),s=Fr(n.skin,e),r=Fr(n.shirt,e),o=Fr(n.trousers,e),a=Fr(n.hair,e),l=Fr(new bt(2041648),e);Ki(t,r,.5,.72,.26,0,1.16,0),Ki(t,s,.5,.5,.5,0,1.77,0),Ki(t,a,.52,.12,.52,0,2.02,0),Ki(t,l,.016,.1,.09,.258,1.8,-.13),Ki(t,l,.016,.1,.09,.258,1.8,.13);const c=[],h=[];for(const p of[-.13,.13]){const g=new gn;g.position.set(0,.8,p),Ki(g,o,.24,.8,.24,0,-.4,0),t.add(g),c.push(g)}for(const p of[-.36,.36]){const g=new gn;g.position.set(0,1.47,p),Ki(g,r,.24,.72,.24,0,-.36,0),t.add(g),h.push(g)}const u=C2(sh(i));t.add(u.sprite);const d=new U(i.x,i.y,i.z);return{group:t,legs:c,arms:h,materials:e,target:d.clone(),displayed:d,targetYaw:i.yaw,displayedYaw:i.yaw,walkPhase:0,walkAmount:0,brightness:1,tag:u,label:sh(i)}}function ep(i){i.group.traverse(t=>{t instanceof Jt&&t.geometry.dispose()});for(const t of i.materials)t.material.dispose();i.tag.texture.dispose(),i.tag.material.dispose()}class L2{constructor(t){y(this,"models",new Map);this.scene=t}sync(t,e,n){const s=new Set,r=Math.max(0,Math.min(e,.2)),o=A0(Nr(n,1));for(const a of t){if(!a.id||s.has(a.id))continue;s.add(a.id);let l=this.models.get(a.id);if(!l)l=P2(a),this.models.set(a.id,l),this.scene.add(l.group);else{const v=Nr(a.x,l.target.x),m=Nr(a.y,l.target.y),f=Nr(a.z,l.target.z),x=l.target.clone();l.target.set(v,m,f),x.distanceToSquared(l.target)>tp*tp&&l.displayed.copy(l.target),l.targetYaw=Nr(a.yaw,l.targetYaw);const _=sh(a);_!==l.label&&(l.label=_,C0(l.tag,_))}const c=_a(r,w2),h=l.displayed.clone();l.displayed.lerp(l.target,c);const u=l.displayed.distanceTo(h),d=u>4e-4;l.walkAmount+=((d?1:0)-l.walkAmount)*_a(r,11),d&&(l.walkPhase+=u*11),l.displayedYaw=E2(l.displayedYaw,l.targetYaw,_a(r,S2)),l.brightness+=(o-l.brightness)*_a(r,b2);for(const v of l.materials)v.material.color.copy(v.base).multiplyScalar(l.brightness);l.tag.material.color.setScalar(.68+l.brightness*.32);const p=Math.sin(l.walkPhase)*.72*l.walkAmount;l.legs.forEach((v,m)=>v.rotation.z=m===0?p:-p),l.arms.forEach((v,m)=>v.rotation.z=m===0?-p*.72:p*.72);const g=Math.abs(Math.sin(l.walkPhase))*.032*l.walkAmount;l.group.position.set(l.displayed.x,l.displayed.y+g,l.displayed.z),l.group.rotation.set(0,-l.displayedYaw,0)}for(const[a,l]of this.models)s.has(a)||(this.scene.remove(l.group),ep(l),this.models.delete(a))}dispose(){for(const[,t]of this.models)this.scene.remove(t.group),ep(t);this.models.clear()}}const io=ee+8/9,wn=4,np=Math.SQRT1_2,k2=.82,I2=2.5,Di=Lh,U2=Di.groupBase+Math.abs(Di.groupAmplitude),Lc=Math.abs(Di.wave1Weight)*U2+Math.abs(Di.wave2Weight)+Math.abs(Di.wave3Weight),Ka=Math.abs(Di.oceanLinear)*Lc+Math.abs(Di.oceanQuadratic)*(Lc*Lc+Math.abs(Di.quadraticBias));function kc(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function ip(i,t,e,n,s,r){return(i*(1-r)+t*r)*(1-s)+(n*(1-r)+e*r)*s}function D0(i,t,e){const n=Math.floor(i),s=Math.floor(t);if(e.generatedSurfaceY(n,s)>=ee)return null;const r=(g,v)=>e.waterAmount(g,ee,v)===8&&e.isWaterSource(g,ee,v)&&e.getBlock(g,ee+1,v)===0;if(!r(n,s))return null;const o=new Map;for(let g=-wn;g<=wn;g++)for(let v=-wn;v<=wn;v++){const m=n+v,f=s+g;o.set(`${m},${f}`,r(m,f))}const a=(g,v)=>{let m=wn;const f=wn*wn;for(let x=-wn;x<wn;x++)for(let _=-wn;_<wn;_++){const M=_+.5,A=x+.5,E=M*M+A*A;E>f||o.get(`${g+_},${v+x}`)!==!0&&(m=Math.min(m,Math.sqrt(E)))}return kc(0,1,(m-np)/(wn-np))},l=i-n,c=t-s,h=ip(a(n,s),a(n,s+1),a(n+1,s+1),a(n+1,s),l,c);if(h<k2)return null;const u=(g,v)=>{if(e.waterAmount(g,ee,v)<=0)return 0;let m=1;for(let f=ee-1;f>=0&&m<7&&!(e.waterAmount(g,f,v)<=0);f--)m++;return m},d=(g,v)=>(u(g-1,v-1)+u(g,v-1)+u(g-1,v)+u(g,v))/4,p=ip(d(n,s),d(n,s+1),d(n+1,s+1),d(n+1,s),l,c);return p<I2?null:{open:h,depth:p,ocean:kc(.25,.82,h)*kc(1.25,2.5,p)}}function N2(i,t,e,n){return io+SS(i,t,e,n.ocean).height}function F2(i,t,e,n,s,r,o){const a=Math.floor(i),l=Math.floor(t),c=Math.floor(e),h=li(s.getBlock(a,l,c));if(!r||l!==ee&&l!==ee+1||t<io-Ka||t>io+Ka)return h;const u=o===void 0?D0(i,e,s):o;return u?t<N2(i,e,n,u):h}const xa=50,O2=4.5,B2=5,sp=9,z2=300,H2=-125,Le=0,rp=[{id:3,count:64},{id:2,count:64},{id:1,count:64},{id:4,count:64},{id:7,count:64},{id:6,count:64},{id:5,count:64},{id:21,count:64},{id:14,count:64},{id:15,count:64},{id:26,count:64},{id:32,count:64},{id:33,count:64},{id:34,count:64},{id:36,count:64},{id:18,count:64},{id:19,count:64},{id:20,count:64},{id:10,count:64},{id:30,count:64},{id:8,count:64},{id:12,count:64},{id:35,count:64},{id:11,count:64},{id:13,count:64},{id:27,count:64},{id:28,count:64},{id:269,count:1},{id:Km,count:1},{id:jm,count:1},{id:Zm,count:1},{id:Qm,count:1},{id:Jm,count:1},{id:Si,count:1},{id:ns,count:64}];function W2(){const i=Bh();for(let t=0;t<rp.length&&t<i.length;t++)i[t]={...rp[t]};return i}const G2=1.6,op=.005,V2=.1,X2=.05,q2=.2,Y2=.005,$2=.1,K2=3,ap=16,lp=88,cp=48,j2=3,Z2=4,Q2=8,J2=50,hp=["pig","cow","sheep","chicken"],tA=1200,eA=10,Ic=.25,up=1,dp=.6,nA=2.4,iA=9,fp=.42,sA=.36;function rA(i){if(i==null)return 1;const t=Aa(i);return(t==null?void 0:t.kind)==="sword"?t.tier===1?4:t.tier===2?5:t.tier===3?6:7:1}function oA(i,t,e,n,s,r,o,a,l,c,h,u){let d=0,p=1/0;const g=(v,m,f,x)=>{if(Math.abs(m)<1e-9)return v>=f&&v<=x;let _=(f-v)/m,M=(x-v)/m;return _>M&&([_,M]=[M,_]),d=Math.max(d,_),p=Math.min(p,M),p>=d};return!g(i,n,o,c)||!g(t,s,a,h)||!g(e,r,l,u)?null:d}class aA{constructor(t,e,n=null){y(this,"canvas");y(this,"save");y(this,"renderer");y(this,"multiplayer");y(this,"remotePlayers");y(this,"look");y(this,"touch");y(this,"world");y(this,"worldEpoch",0);y(this,"activeEditsByChunk",new Map);y(this,"physWorld");y(this,"playerPhysWorld");y(this,"waterSurfaceWorld");y(this,"chunks");y(this,"highlight");y(this,"underwaterEl");y(this,"normalFog");y(this,"underFog",new cr(2383754,.1,16));y(this,"player");y(this,"prev");y(this,"hotbar");y(this,"inv");y(this,"crack");y(this,"dropRenderer");y(this,"hand");y(this,"particleFx");y(this,"skyObjects");y(this,"dimension","overworld");y(this,"portalCooldown",0);y(this,"portalTimer",0);y(this,"portalArmed",!0);y(this,"particles",[]);y(this,"digFxT",0);y(this,"invUI");y(this,"craftingGrid",0);y(this,"furnaceUI");y(this,"furnaces",new Map);y(this,"furnaceKey",null);y(this,"touchHoldAction",null);y(this,"touchDigging",!1);y(this,"touchDigHit",null);y(this,"dropsByDimension",{overworld:[],nether:[]});y(this,"drops",this.dropsByDimension.overworld);y(this,"arrowsByDimension",{overworld:[],nether:[]});y(this,"arrows",this.arrowsByDimension.overworld);y(this,"arrowRenderer");y(this,"drawingBow",!1);y(this,"bowCharge",0);y(this,"mobs",[]);y(this,"mobRenderer");y(this,"mobRng");y(this,"spawnWorld");y(this,"surfaceY",(t,e)=>He(t,e,this.save.seed));y(this,"mobSpawnTick",0);y(this,"digging",!1);y(this,"lastMeleeMs",0);y(this,"digTarget",null);y(this,"digProgress",0);y(this,"fluidSim",new fT);y(this,"fluidGrid");y(this,"fluidTick",0);y(this,"wateredChunksByDimension",{overworld:new Set,nether:new Set});y(this,"wateredChunks",this.wateredChunksByDimension.overworld);y(this,"worldTime");y(this,"waterWaveTime",0);y(this,"waterProbeEpoch",0);y(this,"waterProbeCache",null);y(this,"fov",70);y(this,"actualSprinting",!1);y(this,"shadowTick",99);y(this,"evictCt",0);y(this,"last",0);y(this,"acc",0);y(this,"survival");y(this,"statusBar");y(this,"worldSpawn");y(this,"dead",!1);y(this,"creative");y(this,"flying",!1);y(this,"flyTapWindow",0);y(this,"fallDistance",0);y(this,"hurtCd",0);y(this,"coordEl");y(this,"coordOn",!1);y(this,"eating",!1);y(this,"eatProgress",0);y(this,"eatFxT",0);y(this,"crouching",!1);y(this,"camEye",Zn);y(this,"decayQueueByDimension",{overworld:[],nether:[]});y(this,"decayQueue",this.decayQueueByDimension.overworld);y(this,"texturePack");y(this,"lightingQuality");y(this,"renderDistance");y(this,"_godSunUV",new Ft);y(this,"_godSunColor",new bt);y(this,"_godSunWorld",new U);y(this,"_godFwd",new U);y(this,"_handSun",new U);y(this,"_handSkyColor",new bt);y(this,"hurtWindowMax",0);y(this,"skyDarkenNow",0);y(this,"entityLight",(t,e,n)=>this.chunks.brightnessAt(t,e,n,this.skyDarkenNow));var p,g,v,m;const s=vm();rf(s.texturePack),this.canvas=t,this.save=e,this.waterSurfaceWorld={getBlock:(f,x,_)=>this.world.getBlock(f,x,_),waterAmount:(f,x,_)=>this.world.waterAmount(f,x,_),isWaterSource:(f,x,_)=>this.world.isWaterSource(f,x,_),generatedSurfaceY:(f,x)=>He(f,x,this.save.seed)},this.creative=e.gameMode==="creative",this.renderer=new H1(t),this.multiplayer=n,this.remotePlayers=new L2(this.renderer.scene),this.normalFog=this.renderer.scene.fog,this.underwaterEl=document.getElementById("underwater"),this.hotbar=new IT(document.getElementById("hotbar"),sp),this.inv=e.inv?yT(e.inv):this.creative?W2():Bh(),this.hotbar.render(this.inv);const r=e.survival,o=r!==void 0&&r.health<=0;this.survival=r&&r.health>0?{..._c(),...r,foodTimer:0}:_c(),this.statusBar=new qT(document.getElementById("health"),document.getElementById("hunger")),this.statusBar.render(this.survival),this.worldTime=e.worldTime??mS,this.fluidGrid={isSolid:(f,x,_)=>x<0||x>=pe||_e(this.world.getBlock(f,x,_)),amount:(f,x,_)=>this.world.waterAmount(f,x,_),isSource:(f,x,_)=>this.world.isWaterSource(f,x,_),isFalling:(f,x,_)=>this.world.isWaterFalling(f,x,_),setWater:(f,x,_,M,A,E)=>this.world.setWater(f,x,_,M,A,E),getBlock:(f,x,_)=>this.world.getBlock(f,x,_),setBlock:(f,x,_,M)=>this.edit(f,x,_,M)},this.dimension=o?"overworld":e.currentDimension??"overworld",this.save.currentDimension=this.dimension,this.buildDimension(this.dimension);for(const f of["overworld","nether"]){for(const x of((p=e.dropsByDimension)==null?void 0:p[f])??[])this.dropsByDimension[f].push({...x});for(const x of((g=e.arrowsByDimension)==null?void 0:g[f])??[])this.arrowsByDimension[f].push({...x})}this.drops=this.dropsByDimension[this.dimension],this.arrows=this.arrowsByDimension[this.dimension],this.wateredChunks=this.wateredChunksByDimension[this.dimension],this.decayQueue=this.decayQueueByDimension[this.dimension],this.texturePack=s.texturePack,this.lightingQuality=s.lightingQuality,this.renderDistance=s.renderDistance;const a=Kc(this.texturePack);this.chunks=new Am(this.renderer.scene,this.world,a),this.renderer.setWaterRefractionSink((f,x,_,M,A)=>this.chunks.setWaterRefraction(f,x,_,M,A)),this.renderer.setWaterReflectionSink((f,x,_,M)=>this.chunks.setWaterReflection(f,x,_,M)),this.renderer.setWaterCapturesEnabled(this.dimension==="overworld"),this.chunks.setLightingQuality(s.lightingQuality),this.chunks.setSunEnabled(this.dimension==="overworld"),this.setRenderDistance(this.renderDistance),this.multiplayer&&this.bindMultiplayer(this.multiplayer),this.crack=new ES(this.renderer.scene),this.dropRenderer=new ZS(this.renderer.scene,a),this.arrowRenderer=new _b(this.renderer.scene),this.mobRenderer=new dT(this.renderer.scene),this.mobRng=rm((e.seed^2654435769)>>>0),this.spawnWorld={getBlock:(f,x,_)=>this.world.getBlock(f,x,_)},this.hand=new ab(a),this.hand.setLightingQuality(s.lightingQuality),this.particleFx=new wE(this.renderer.scene),this.skyObjects=new qE(this.renderer.scene),this.skyObjects.setLightingQuality(s.lightingQuality),this.skyObjects.setDimension(this.dimension),this.invUI=new aE(document.getElementById("inventory")),this.furnaceUI=new mE(document.getElementById("furnace")),this.coordEl=document.createElement("div"),this.coordEl.style.cssText="position:fixed;left:8px;top:8px;z-index:30;padding:4px 8px;font:14px Zpix,monospace;color:#fff;background:rgba(0,0,0,.45);white-space:pre;display:none;pointer-events:none;text-shadow:1px 1px 0 #000;",document.body.appendChild(this.coordEl),this.furnaceUI.onChange=()=>this.hotbar.render(this.inv),this.furnaceUI.onClose=()=>this.closeFurnace(),this.invUI.onChange=()=>this.hotbar.render(this.inv),this.invUI.onClose=()=>this.closeCrafting(),this.physWorld={isSolid:(f,x,_)=>_e(this.world.getBlock(f,x,_)),isWater:(f,x,_)=>li(this.world.getBlock(f,x,_))},this.playerPhysWorld={isSolid:(f,x,_)=>_e(this.world.getBlock(f,x,_)),getBlock:(f,x,_)=>this.world.getBlock(f,x,_),isWater:()=>this.pointInWater(this.player.pos.x,this.player.pos.y+.1,this.player.pos.z)};const l=o?void 0:((v=e.playerByDimension)==null?void 0:v[this.dimension])??e.player;this.worldSpawn=this.findSpawn(e.seed);const c=l?{x:l.x,y:l.y,z:l.z}:this.worldSpawn;this.player={pos:{...c},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.chunks.update(Xt(Math.floor(c.x)),Xt(Math.floor(c.z)),2,999);const h=((m=e.mobsByDimension)==null?void 0:m[this.dimension])??e.mobs;if(h&&h.length)for(const f of h)this.mobs.push(Mf(f));else if(this.dimension==="overworld")for(let f=0;f<4;f++)this.mobs.push(...xf(hp[f%4],c.x,c.z,this.mobRng,this.spawnWorld,this.surfaceY,6,26));if(e.furnaces)for(const[f,x]of Object.entries(e.furnaces))this.furnaces.set(f.startsWith("overworld:")||f.startsWith("nether:")?f:`overworld:${f}`,x);const u=new Ze(1.001,1.001,1.001);this.highlight=new Ew(new Aw(u),new Zp({color:0,transparent:!0,opacity:.35})),this.highlight.layers.set(oo),this.highlight.visible=!1,this.renderer.scene.add(this.highlight);const d=h0();this.look=new bT(t,!d),this.look.yaw=l?l.yaw:Math.atan2(-c.z,-c.x),this.look.pitch=l?l.pitch:-.18,this.touch=d?new kT(document.getElementById("touch-controls"),{look:(f,x)=>this.look.rotate(f,x),interactTap:()=>this.onTouchInteractTap(),interactHoldStart:()=>this.beginTouchHoldAction(),interactHoldEnd:()=>this.endTouchHoldAction(),interactHoldCancel:()=>this.cancelTouchHoldAction(),inventory:()=>{this.furnaceKey?this.closeFurnace():this.craftingGrid>0?this.closeCrafting():this.openCrafting(2)},pause:()=>window.dispatchEvent(new Event("mineworld:touch-pause"))}):null,t.addEventListener("contextmenu",f=>f.preventDefault()),t.addEventListener("mousedown",f=>{document.pointerLockElement===t&&(f.button===0?this.beginPrimaryAction():f.button===2&&this.onUseDown())}),window.addEventListener("mouseup",f=>{f.button===0?this.stopDigging():f.button===2&&(this.releaseBow(),this.stopEating())}),document.addEventListener("pointerlockchange",()=>{this.touch||document.pointerLockElement!==t&&(this.stopDigging(),this.drawingBow=!1,this.bowCharge=0,this.stopEating())}),window.addEventListener("keydown",f=>{if(f.code==="KeyE"){this.furnaceKey?this.closeFurnace():this.craftingGrid>0?this.closeCrafting():this.isGameplayActive()&&this.openCrafting(2);return}if(f.code==="F3"){f.preventDefault(),this.coordOn=!this.coordOn,this.coordEl.style.display=this.coordOn?"block":"none";return}if(f.code==="Escape"&&this.furnaceKey){this.closeFurnace();return}if(f.code==="Escape"&&this.craftingGrid>0){this.closeCrafting();return}const x=Number(f.key);Number.isInteger(x)&&x>=1&&x<=sp&&this.hotbar.setSelected(x-1)}),t.addEventListener("wheel",f=>{f.preventDefault(),this.hotbar.scroll(Math.sign(f.deltaY))},{passive:!1}),this.publishMultiplayerState()}isGameplayActive(){var t;return((t=this.touch)==null?void 0:t.isActive)??document.pointerLockElement===this.canvas}usesTouchControls(){return this.touch!==null}setTouchActive(t){var e;(e=this.touch)==null||e.setActive(t&&!this.dead&&this.craftingGrid===0&&!this.furnaceKey)}attachMultiplayer(t){return this.multiplayer!==null?!1:(this.multiplayer=t,this.bindMultiplayer(t),this.publishMultiplayerState(),!0)}detachMultiplayer(t){return this.multiplayer!==t?!1:(t.setBlockBatchHandler(null),t.setBlockHandler(null),t.setWorldTimeHandler(null),this.multiplayer=null,!0)}bindMultiplayer(t){t.setBlockBatchHandler(e=>this.applyRemoteBlockBatch(e)),t.setBlockHandler(e=>this.applyRemoteBlockEdit(e)),t.setWorldTimeHandler(e=>this.setNetworkWorldTime(e))}readMovement(){var n;const t=wT();if(!((n=this.touch)!=null&&n.isActive))return t;const e=this.touch.readMove();return{forward:Math.max(-1,Math.min(1,t.forward+e.forward)),right:Math.max(-1,Math.min(1,t.right+e.right)),sprint:t.sprint||e.sprint,jumpHeld:t.jumpHeld||e.jumpHeld,crouch:t.crouch||e.crouch}}publishMultiplayerState(){if(!this.multiplayer)return;const t=this.player.pos;this.multiplayer.sendState({x:t.x,y:t.y,z:t.z,yaw:this.look.yaw,pitch:this.look.pitch,dimension:this.dimension})}beginPrimaryAction(t){if(!this.isGameplayActive())return;this.touchDigging=!1,this.touchDigHit=null;const e=this.mobUnderRay(t);if(e){const n=performance.now();n-this.lastMeleeMs>=500&&(this.attackMob(e,t),this.lastMeleeMs=n);return}this.touchDigging=t!==void 0,this.touchDigHit=t?this.rayHitFor(t):null,this.digging=!0,this.digTarget=null}stopDigging(){this.digging=!1,this.touchDigging=!1,this.touchDigHit=null,this.digProgress=0,this.digTarget=null,this.crack.hide()}onTouchInteractTap(){if(!this.isGameplayActive())return;const t=this.rayHit();if(this.useTargetedBlock(t))return;const e=this.inv[this.hotbar.index];this.tryIgnitePortal(t,(e==null?void 0:e.id)??null)||this.placeBlock(t)}shouldUseHeldItemOnTouchHold(){const t=this.inv[this.hotbar.index];return!t||t.count<=0?!1:t.id===Si?this.creative||Cf(this.inv,ns)>0:hc(t.id)&&this.survival.food<ss}beginTouchHoldAction(){if(!(!this.isGameplayActive()||this.touchHoldAction!==null)){if(this.shouldUseHeldItemOnTouchHold()&&this.beginHeldItemUse()){this.touchHoldAction="use";return}this.touchHoldAction="primary",this.beginPrimaryAction(this.crosshairRay())}}endTouchHoldAction(){const t=this.touchHoldAction;if(this.touchHoldAction=null,t==="primary"){this.stopDigging();return}t==="use"&&(this.releaseBow(),this.stopEating())}cancelTouchHoldAction(){const t=this.touchHoldAction;if(this.touchHoldAction=null,t==="primary"){this.stopDigging();return}t==="use"&&(this.drawingBow=!1,this.bowCharge=0,this.stopEating())}buildDimension(t){const e=new Map;for(const[n,s]of Object.entries(this.save.edits)){const r=ih(n);if(r.dim!==t||r.y<0||r.y>=pe||!Ie[s])continue;const o=`${Xt(r.x)},${Xt(r.z)}`;let a=e.get(o);a||(a=new Map,e.set(o,a)),a.set(`${De(r.x)},${r.y},${De(r.z)}`,{x:r.x,y:r.y,z:r.z,id:s})}this.activeEditsByChunk=e,this.worldEpoch++,this.world=new mm(this.save.seed,t),this.world.editHook=(n,s,r)=>{var o;for(const a of((o=e.get(`${n},${s}`))==null?void 0:o.values())??[]){const l=De(a.x),c=De(a.z);r.set(l,a.y,c,a.id),r.setFluid(l,a.y,c,a.id===nn?Ah(8,!0,!1):0),this.fluidSim.activate(a.x,a.y,a.z)}}}switchDimension(t,e){var o,a,l;((o=this.save).playerByDimension??(o.playerByDimension={}))[this.dimension]={x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.look.yaw,pitch:this.look.pitch},((a=this.save).mobsByDimension??(a.mobsByDimension={}))[this.dimension]=this.mobs.map(yf);const n=this.world;this.dimension=t,this.save.currentDimension=t,this.drops=this.dropsByDimension[t],this.arrows=this.arrowsByDimension[t],this.wateredChunks=this.wateredChunksByDimension[t],this.wateredChunks.clear(),this.decayQueue=this.decayQueueByDimension[t],this.fluidSim.clear(),this.buildDimension(t),this.chunks.setWorld(this.world),this.chunks.setSunEnabled(t==="overworld"),this.renderer.setWaterCapturesEnabled(t==="overworld"),n.dispose(),this.mobs.length=0;for(const c of((l=this.save.mobsByDimension)==null?void 0:l[t])??[])this.mobs.push(Mf(c));this.player={pos:{...e},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.skyObjects.setDimension(t);const s=Xt(Math.floor(e.x)),r=Xt(Math.floor(e.z));this.chunks.update(s,r,2,999),this.chunks.flushMesh(64),this.dropRenderer.sync(this.drops,this.entityLight),this.arrowRenderer.sync(this.arrows),this.particles=[],this.particleFx.sync(this.particles),this.portalCooldown=60}snapshot(){var e,n;this.save.player={x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.look.yaw,pitch:this.look.pitch},this.save.inv=xT(this.inv);const t=this.survival;return this.save.survival={health:t.health,food:t.food,saturation:t.saturation,exhaustion:t.exhaustion,oxygen:t.oxygen,oxygenTimer:t.oxygenTimer},this.save.worldTime=this.worldTime,this.save.mobs=this.mobs.map(yf),this.save.furnaces=Object.fromEntries(this.furnaces),this.save.dropsByDimension={overworld:this.dropsByDimension.overworld.map(s=>({...s})),nether:this.dropsByDimension.nether.map(s=>({...s}))},this.save.arrowsByDimension={overworld:this.arrowsByDimension.overworld.map(s=>({...s})),nether:this.arrowsByDimension.nether.map(s=>({...s}))},this.save.currentDimension=this.dimension,((e=this.save).playerByDimension??(e.playerByDimension={}))[this.dimension]={...this.save.player},((n=this.save).mobsByDimension??(n.mobsByDimension={}))[this.dimension]=this.save.mobs,this.save.lastPlayed=Date.now(),this.save}findSpawn(t){const e=new Map,n=(s,r,o)=>this.worldAt("overworld",s,r,o,e);for(let s=1;s<160;s++)for(let r=-s;r<=s;r++)for(const[o,a]of[[r,-s],[r,s],[-s,r],[s,r]]){const l=He(o,a,t),c=(u,d)=>n(u,l+1,d)===Le&&n(u,l+2,d)===Le,h=n(o,l,a)!==Le&&n(o,l-1,a)!==Le&&n(o,l-2,a)!==Le;if(l>ee&&l<=ee+4&&h&&c(o,a)&&c(o+1,a)&&c(o-1,a)&&c(o,a+1)&&c(o,a-1))return{x:o+.5,y:l+1,z:a+.5}}return{x:.5,y:ee+3,z:.5}}async preloadSpawn(t=3,e){const n=this.worldEpoch,s=this.world,r=this.chunks,o=this.wateredChunks,a=()=>!(e!=null&&e.aborted)&&n===this.worldEpoch&&s===this.world,l=()=>new Promise(_=>{let M=!1,A=0;const E=I=>{M||(M=!0,e==null||e.removeEventListener("abort",C),_(I))},C=()=>{A!==0&&cancelAnimationFrame(A),E(!1)};e==null||e.addEventListener("abort",C,{once:!0}),e!=null&&e.aborted?C():A=requestAnimationFrame(()=>E(!0))}),c=Xt(Math.floor(this.player.pos.x)),h=Xt(Math.floor(this.player.pos.z));for(let _=-t;_<=t;_++)for(let M=-t;M<=t;M++)s.request(c+M,h+_);if(!await new Promise(_=>{let M=!1,A;const E=b=>{M||(M=!0,A!==void 0&&clearTimeout(A),e==null||e.removeEventListener("abort",C),_(b))},C=()=>E(!1),I=()=>{if(!a()){E(!1);return}let b=!0;for(let S=-t;S<=t&&b;S++)for(let P=-t;P<=t&&b;P++)s.peek(c+P,h+S)||(b=!1);b?E(!0):A=setTimeout(I,30)};e==null||e.addEventListener("abort",C,{once:!0}),I()})||!a())return;const d=(c-t)*Rt,p=(c+t+1)*Rt-1,g=(h-t)*Rt,v=(h+t+1)*Rt-1,m=(_,M)=>_>=d&&_<=p&&M>=g&&M<=v;Af(this.fluidSim,{isWater:(_,M,A)=>m(_,A)&&li(s.getBlock(_,M,A)),isAir:(_,M,A)=>m(_,A)&&s.getBlock(_,M,A)===Le},{minX:d,maxX:p,minZ:g,maxZ:v,minY:Math.max(1,ee-48),maxY:Math.min(pe-1,ee+2)});const f={isSolid:(_,M,A)=>!m(_,A)||M<0||M>=pe||_e(s.getBlock(_,M,A)),amount:(_,M,A)=>m(_,A)?s.waterAmount(_,M,A):0,isSource:(_,M,A)=>m(_,A)&&s.isWaterSource(_,M,A),isFalling:(_,M,A)=>m(_,A)&&s.isWaterFalling(_,M,A),setWater:(_,M,A,E,C,I)=>{m(_,A)&&s.setWater(_,M,A,E,C,I)},getBlock:(_,M,A)=>m(_,A)?s.getBlock(_,M,A):Le,setBlock:(_,M,A,E)=>{m(_,A)&&this.edit(_,M,A,E)}};for(let _=0;_<1200&&this.fluidSim.activeCount>0;){for(let M=0;M<8&&_<1200&&this.fluidSim.activeCount>0;M++){if(!a())return;this.fluidSim.tick(f),_++}if(this.fluidSim.activeCount>0&&!await l())return}if(!a())return;for(let _=-t;_<=t;_++)for(let M=-t;M<=t;M++)o.add(`${c+M},${h+_}`);const x=Math.ceil((t*2+1)**2/4)+1;for(let _=0;_<x+240;_++){if(!a()||(r.update(c,h,t,4),r.flushMesh(8),!await l()||!a()))return;if(_>=x&&!r.meshBusy())break}}activateNearbyWater(){const n=Xt(Math.floor(this.player.pos.x)),s=Xt(Math.floor(this.player.pos.z)),r=Math.max(1,ee-48),o=Math.min(pe-1,ee+2);let a=0;for(const l of pT(n,s,4,this.wateredChunks)){if(a>=3)break;const[c,h]=l.split(",").map(Number);if(!this.world.peek(c,h))continue;const u=(d,p)=>this.world.peek(Xt(d),Xt(p))!==void 0;Af(this.fluidSim,{isWater:(d,p,g)=>u(d,g)&&li(this.world.getBlock(d,p,g)),isAir:(d,p,g)=>u(d,g)&&this.world.getBlock(d,p,g)===Le},{minX:c*Rt-1,maxX:c*Rt+Rt,minZ:h*Rt-1,maxZ:h*Rt+Rt,minY:r,maxY:o}),this.wateredChunks.add(l),a++}}start(){this.last=performance.now(),this.publishMultiplayerState();const t=e=>{var m,f;requestAnimationFrame(t);const n=Math.min(e-this.last,100)/1e3;this.acc+=e-this.last,this.last=e,this.acc>250&&(this.acc=250);const s=this.isGameplayActive(),r=s||this.craftingGrid>0||this.furnaceKey!==null;for(;r&&this.acc>=xa;){if(this.waterProbeEpoch++,this.prev=this.player,s){const _=this.readMovement(),M=ST()||(((m=this.touch)==null?void 0:m.consumeJump())??!1);this.creative&&M&&(this.flyTapWindow>0?(this.flying=!this.flying,this.flyTapWindow=0):this.flyTapWindow=6),this.flyTapWindow>0&&this.flyTapWindow--,this.creative||(this.flying=!1),this.crouching=this.flying?!1:_.crouch,this.actualSprinting=_.sprint&&(this.creative||zT(this.survival)),this.player=ff(this.player,{forward:_.forward,right:_.right,yaw:this.look.yaw,jump:M,swimUp:_.jumpHeld,sprint:this.actualSprinting,crouch:this.flying?!1:_.crouch,slow:this.eating,fly:this.flying,flyUp:_.jumpHeld,flyDown:_.crouch},this.playerPhysWorld),this.publishMultiplayerState(),this.stepSurvival(this.actualSprinting,M)}else this.player=ff(this.player,{forward:0,right:0,yaw:this.look.yaw,jump:!1,swimUp:!1,sprint:!1,crouch:!1,slow:!1,fly:this.flying,flyUp:!1,flyDown:!1},this.playerPhysWorld),this.publishMultiplayerState(),this.stepSurvival(!1,!1);++this.worldTime>=sn&&(this.worldTime=0),++this.fluidTick>=5&&(this.fluidTick=0,this.activateNearbyWater(),this.fluidSim.tick(this.fluidGrid),this.chunks.remeshDirty(),this.waterProbeEpoch++);const x=`${this.dimension}:`;for(const[_,M]of this.furnaces)_.startsWith(x)&&dE(M)&&uE(M);this.furnaceKey&&this.furnaceUI.render(),this.tickMobs(),this.tickArrows(),this.tickLeafDecay(),this.portalCooldown>0&&this.portalCooldown--,s&&this.tickPortalTravel(),this.acc-=xa}r||(this.acc=0);const o=n>.026?3:(n>.018,4);this.chunks.update(Xt(Math.floor(this.player.pos.x)),Xt(Math.floor(this.player.pos.z)),this.renderDistance,o,Math.cos(this.look.yaw),Math.sin(this.look.yaw));const a=performance.now()+6;for(;this.chunks.meshQueueLen()>0&&performance.now()<a;)this.chunks.flushMesh(1);if(++this.evictCt>=45){this.evictCt=0;const x=Math.max(this.renderDistance+4,12),_=Xt(Math.floor(this.player.pos.x)),M=Xt(Math.floor(this.player.pos.z));for(const A of this.world.evictBeyond(_,M,x))this.wateredChunks.delete(A)}this.chunks.cullToView(this.player.pos.x,this.player.pos.z,Math.cos(this.look.yaw),Math.sin(this.look.yaw),this.look.pitch);const l=s&&this.actualSprinting?80:70;this.fov+=(l-this.fov)*.15,this.renderer.camera.fov=this.fov,this.renderer.camera.updateProjectionMatrix(),r&&this.updateDrops(n),s?(this.updateMining(n),this.updateEating(n),this.updateBow(n),this.digging&&this.hand.swing()):(this.crack.hide(),this.craftingGrid>0&&this.invUI.render()),this.statusBar.render(this.survival),this.waterWaveTime+=n,this.chunks.animateWater(n),this.updateDayNight(),this.skyObjects.update(this.worldTime,this.renderer.camera.position,n),this.dimension==="overworld"&&this.lightingQuality!=="off"&&++this.shadowTick>=6?(this.shadowTick=0,this.chunks.updateSun(this.worldTime,this.player.pos.x,this.player.pos.y,this.player.pos.z),this.renderer.markShadowDirty()):(this.dimension!=="overworld"||this.lightingQuality==="off")&&(this.shadowTick=0),this.updateCamera(this.acc/xa),this.updateWater(),this.updateHighlight(),this.particles=KE(this.particles,n),this.particleFx.sync(this.particles),this.mobRenderer.sync(this.mobs,n,this.entityLight),this.remotePlayers.sync(((f=this.multiplayer)==null?void 0:f.remotePlayers.filter(x=>x.dimension===this.dimension))??[],n,this.entityLight(this.player.pos.x,this.player.pos.y+Zn,this.player.pos.z)),this.arrowRenderer.sync(this.arrows);const c=this.inv[this.hotbar.index];this.hand.setHeld(c?c.id:null),this.hand.setEating(s&&this.eating);const h=Math.min(1,Math.hypot(this.player.vel.x,this.player.vel.z)/.22);this.hand.update(n,s?h:0);const[u,d]=this.chunks.lightLevelAt(this.player.pos.x,this.player.pos.y+Zn,this.player.pos.z),p=this.dimension==="nether"&&u>14.5&&d<.5?.08:this.entityLight(this.player.pos.x,this.player.pos.y+Zn,this.player.pos.z);this.hand.setBrightness(p);const g=this.worldTime/sn*Math.PI*2;this._handSun.set(Math.cos(g),Math.sin(g),.1).normalize();const v=ba(this.worldTime,this.dimension);if(this._handSkyColor.setRGB(v.worldTint[0],v.worldTint[1],v.worldTint[2],ae),this.hand.setLighting({skyLevel:u,blockLevel:d,skyDarken:this.skyDarkenNow,sunEnabled:this.dimension==="overworld",skyColor:this._handSkyColor,sunDirectionWorld:this._handSun,cameraQuaternion:this.renderer.camera.quaternion}),this.hand.camera.aspect!==this.renderer.camera.aspect&&this.hand.resize(this.renderer.camera.aspect),this.coordOn){const x=this.player.pos,_=this.chunks.pipelineStats();this.coordEl.textContent=`XYZ  ${Math.floor(x.x)} / ${Math.floor(x.y)+H2} / ${Math.floor(x.z)}
区块 已上屏${_.meshed} 可见${_.visible} 派发中${_.pending} 待上屏${_.queued}`}this.updateGodRays(),this.renderer.render(),this.renderer.renderOverlay(this.hand.scene,this.hand.camera)};requestAnimationFrame(t)}pointInWater(t,e,n){const s=this.dimension==="overworld"&&this.lightingQuality!=="off";let r;const o=Math.floor(e);if(s&&(o===ee||o===ee+1)&&e>=io-Ka&&e<=io+Ka){const a=Math.floor(t),l=Math.floor(n),c=this.waterProbeCache;c&&c.epoch===this.waterProbeEpoch&&c.bx===a&&c.bz===l?r=c.probe:(r=D0(t,n,this.waterSurfaceWorld),this.waterProbeCache={epoch:this.waterProbeEpoch,bx:a,bz:l,probe:r})}return F2(t,e,n,this.waterWaveTime,this.waterSurfaceWorld,s,r)}stepSurvival(t,e){if(this.creative){this.fallDistance=0;return}this.hurtCd>0&&this.hurtCd--;const n=this.player.pos.x-this.prev.pos.x,s=this.player.pos.z-this.prev.pos.z,r=this.player.pos.y-this.prev.pos.y;t&&Ji(this.survival,V2*Math.hypot(n,s)),e&&Ji(this.survival,t?q2:X2);const o=Math.floor(this.player.pos.x),a=Math.floor(this.player.pos.z),l=this.pointInWater(this.player.pos.x,this.player.pos.y,this.player.pos.z),c=GT(this.fallDistance,r,this.player.onGround,l);this.fallDistance=c.fallDistance,c.damage>0&&(this.hurtPlayer(c.damage,0,0,!0),Ji(this.survival,$2)),y2(this.player.pos.x,this.player.pos.y,this.player.pos.z,(g,v,m)=>this.world.getBlock(g,v,m))&&this.hurtPlayer(1,0,0,!0);const h=$c(this.world.getBlock(o,Math.floor(this.player.pos.y),a)),u=$c(this.world.getBlock(o,Math.floor(this.player.pos.y+.9),a));(h||u)&&this.hurtPlayer(4,0,0,!0);const d=this.pointInWater(this.player.pos.x,this.player.pos.y+Zn,this.player.pos.z),p=this.survival.health;XT(this.survival,d),this.survival.health<p&&this.flashHurt(),VT(this.survival),xc(this.survival)&&!this.dead&&this.die()}flashHurt(){this.hand.hurtShake();const t=document.getElementById("hurt");t&&(t.classList.remove("flash"),t.offsetWidth,t.classList.add("flash"))}hurtPlayer(t,e,n,s=!1){if(!this.creative){if(this.hurtCd>0){t>this.hurtWindowMax&&(qa(this.survival,t-this.hurtWindowMax),this.hurtWindowMax=t,this.flashHurt(),xc(this.survival)&&!this.dead&&this.die());return}if(this.hurtCd=10,this.hurtWindowMax=t,qa(this.survival,t),this.flashHurt(),!s){const r=Math.hypot(e,n)||1;this.player.kbx=e/r*fp,this.player.kbz=n/r*fp,this.player.vel.y=sA}xc(this.survival)&&!this.dead&&this.die()}}die(){this.prepareForSave(),this.dead=!0,this.stopDigging(),this.stopEating();const t=Math.floor(this.player.pos.x),e=Math.floor(this.player.pos.y),n=Math.floor(this.player.pos.z);for(let s=0;s<this.inv.length;s++){const r=this.inv[s];r&&r.count>0&&this.drops.push(dn(r.id,t,e,n,Math.random,r.count,r.dur)),this.inv[s]=null}this.hotbar.render(this.inv),this.dropRenderer.sync(this.drops,this.entityLight),window.dispatchEvent(new Event("mineworld:death")),this.touch?this.touch.setActive(!1):document.exitPointerLock()}isDead(){return this.dead}setTexturePack(t){if(t===this.texturePack)return;this.texturePack=t,rf(t);const e=Kc(t);this.chunks.setAtlas(e),this.hand.setAtlas(e),this.dropRenderer.setAtlas(e),this.hotbar.render(this.inv)}setLightingQuality(t){this.lightingQuality=t,this.chunks.setLightingQuality(t),this.hand.setLightingQuality(t),this.skyObjects.setLightingQuality(t),t==="off"&&this.renderer.setGodRays(null)}setRenderDistance(t){this.renderDistance=t;const e=t*16;this.normalFog instanceof cr&&(this.normalFog.near=e*.72,this.normalFog.far=e),this.chunks.setFogFar(e)}respawn(){this.survival=_c(),this.dead=!1,this.fallDistance=0,this.portalTimer=0,this.portalArmed=!0,this.portalCooldown=0;const t=this.worldSpawn;this.dimension==="overworld"?(this.player={pos:{...t},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.chunks.update(Xt(Math.floor(t.x)),Xt(Math.floor(t.z)),2,999)):this.switchDimension("overworld",t),this.statusBar.render(this.survival)}useTargetedBlock(t){return t?this.world.getBlock(t.x,t.y,t.z)===am?(this.openCrafting(3),!0):this.world.getBlock(t.x,t.y,t.z)===tc?(this.openFurnace(t.x,t.y,t.z),!0):!1:!1}tryIgnitePortal(t,e){if(!t||e!==Oa||this.world.getBlock(t.x,t.y,t.z)!==Sn)return!1;const n=_E((s,r,o)=>this.world.getBlock(s,r,o),t.x,t.y,t.z);if(!n)return!1;if(this.editMany(n.map(([s,r,o])=>[s,r,o,rl]),{x:t.x+.5,y:t.y+.5,z:t.z+.5}),!this.creative){const s=eo(Oa);s!==null&&la(this.inv,this.hotbar.index,s),this.hotbar.render(this.inv)}return!0}beginHeldItemUse(){const t=this.inv[this.hotbar.index];return t&&t.id===Si&&(this.creative||Cf(this.inv,ns)>0)?(this.drawingBow=!0,this.bowCharge=0,!0):t&&t.count>0&&hc(t.id)&&this.survival.food<ss?(this.eating=!0,this.eatProgress=0,!0):!1}onUseDown(){const t=this.rayHit();if(this.useTargetedBlock(t))return;const e=this.inv[this.hotbar.index];this.tryIgnitePortal(t,(e==null?void 0:e.id)??null)||this.beginHeldItemUse()||this.placeBlock(t)}updateBow(t){if(!this.drawingBow)return;const e=this.inv[this.hotbar.index];if(!e||e.id!==Si){this.drawingBow=!1,this.bowCharge=0;return}this.bowCharge=Math.min(this.bowCharge+t,up)}releaseBow(){if(!this.drawingBow)return;this.drawingBow=!1;const t=this.bowCharge;this.bowCharge=0;const e=this.inv[this.hotbar.index];if(!e||e.id!==Si||t<Ic)return;if(!this.creative){if(_T(this.inv,ns,1)<1)return;const p=eo(Si);p!==null&&la(this.inv,this.hotbar.index,p),this.hotbar.render(this.inv)}const n=(t-Ic)/(up-Ic),s=dp+n*(nA-dp),r=Math.max(1,Math.round(2+n*(iA-2))),o=Math.cos(this.look.yaw),a=Math.sin(this.look.yaw),l=Math.cos(this.look.pitch),c=Math.sin(this.look.pitch),h=this.player.pos.x,u=this.player.pos.y+Zn,d=this.player.pos.z;this.arrows.push(pf(h+o*l*.4,u+c*.4,d+a*l*.4,o*l,c,a*l,s,!0,r)),this.hand.swing()}isCraftingOpen(){return this.craftingGrid>0}isContainerOpen(){return this.craftingGrid>0||this.furnaceKey!==null||this.furnaceUI.isOpen()}openCrafting(t){this.craftingGrid=t,this.invUI.show(this.inv,t),this.touch?this.touch.setActive(!1):document.exitPointerLock()}dropOverflow(t){if(t.length===0)return;const e=Math.floor(this.player.pos.x),n=Math.floor(this.player.pos.y),s=Math.floor(this.player.pos.z);for(const r of t)r.count>0&&this.drops.push(dn(r.id,e,n,s,Math.random,r.count,r.dur));this.dropRenderer.sync(this.drops,this.entityLight)}closeCrafting(){this.craftingGrid=0,this.dropOverflow(this.invUI.hide()),this.touch?this.touch.setActive(!this.dead):this.canvas.requestPointerLock()}furnaceStateKey(t,e,n,s=this.dimension){return`${s}:${t},${e},${n}`}openFurnace(t,e,n){const s=this.furnaceStateKey(t,e,n);let r=this.furnaces.get(s);r||(r=hE(),this.furnaces.set(s,r)),this.furnaceKey=s,this.furnaceUI.show(this.inv,r),this.touch?this.touch.setActive(!1):document.exitPointerLock()}closeFurnace(){this.furnaceKey=null,this.dropOverflow(this.furnaceUI.hide()),this.touch?this.touch.setActive(!this.dead):this.canvas.requestPointerLock()}prepareForSave(){(this.furnaceKey!==null||this.furnaceUI.isOpen())&&(this.furnaceKey=null,this.dropOverflow(this.furnaceUI.hide())),(this.craftingGrid>0||this.invUI.isOpen())&&(this.craftingGrid=0,this.dropOverflow(this.invUI.hide())),this.hotbar.render(this.inv)}stopEating(){this.eating=!1,this.eatProgress=0}updateEating(t){if(!this.eating)return;const e=this.hotbar.index,n=this.inv[e];if(!n||n.count<=0||!hc(n.id)||this.survival.food>=ss){this.stopEating();return}if(this.eatProgress+=t,this.eatFxT+=t,this.eatFxT>=.09){this.eatFxT=0;const s=Math.cos(this.look.yaw),r=Math.sin(this.look.yaw),o=Math.cos(this.look.pitch),a=Math.sin(this.look.pitch),l=this.player.pos.x+s*o*.4,c=this.player.pos.y+Zn-.18+a*.4,h=this.player.pos.z+r*o*.4;this.particles.push(...$i(l,c,h,Bs(n.id),2))}if(this.eatProgress>=G2){const s=zS(n.id),r=Df(this.inv,e);s&&r!==null&&(HT(this.survival,s),this.hotbar.render(this.inv)),this.eatProgress=0}}crosshairRay(){const t={x:this.player.pos.x,y:this.player.pos.y+Zn,z:this.player.pos.z},e=Math.cos(this.look.yaw),n=Math.sin(this.look.yaw),s=Math.cos(this.look.pitch),r=Math.sin(this.look.pitch);return{origin:t,direction:{x:e*s,y:r,z:n*s}}}rayHitFor(t){return Kd(t.origin,t.direction,this.creative?B2:O2,(e,n,s)=>Vd(this.world.getBlock(e,n,s)))}rayHit(){return this.rayHitFor(this.crosshairRay())}recordEdit(t,e,n,s,r){if(this.save.edits[nh(t,e,n,s)]=r,t!==this.dimension)return;const o=`${Xt(e)},${Xt(s)}`;let a=this.activeEditsByChunk.get(o);a||(a=new Map,this.activeEditsByChunk.set(o,a)),a.set(`${De(e)},${n},${De(s)}`,{x:e,y:n,z:s,id:r})}applyLocalEdit(t,e,n,s){this.world.setBlock(t,e,n,s),s===nn&&this.world.setWater(t,e,n,8,!0,!1),this.recordEdit(this.dimension,t,e,n,s),this.fluidSim.activate(t,e,n)}editMany(t,e){var n;if(t.length!==0){for(const[s,r,o,a]of t)this.applyLocalEdit(s,r,o,a);this.chunks.remeshDirty(),e&&((n=this.multiplayer)==null||n.sendBlockBatch("local",t.map(([s,r,o,a])=>({dimension:this.dimension,x:s,y:r,z:o,id:a})),{center:e}))}}edit(t,e,n,s){var r;this.applyLocalEdit(t,e,n,s),this.chunks.remeshDirty(),(r=this.multiplayer)==null||r.sendBlock({dimension:this.dimension,x:t,y:e,z:n,id:s})}applyRemoteBlockEdit(t){t.dimension!=="overworld"&&t.dimension!=="nether"||!Number.isInteger(t.x)||!Number.isInteger(t.y)||!Number.isInteger(t.z)||!Number.isInteger(t.id)||!Ie[t.id]||t.y<0||t.y>=pe||(this.recordEdit(t.dimension,t.x,t.y,t.z,t.id),t.dimension===this.dimension&&this.world.peek(Xt(t.x),Xt(t.z))&&(this.world.setBlock(t.x,t.y,t.z,t.id),t.id===nn&&this.world.setWater(t.x,t.y,t.z,8,!0,!1),this.fluidSim.activate(t.x,t.y,t.z),this.chunks.remeshDirty()))}applyRemoteBlockBatch(t){let e=!1;for(const n of t.edits)n.dimension!=="overworld"&&n.dimension!=="nether"||!Number.isInteger(n.x)||!Number.isInteger(n.y)||!Number.isInteger(n.z)||!Number.isInteger(n.id)||!Ie[n.id]||n.y<0||n.y>=pe||(this.recordEdit(n.dimension,n.x,n.y,n.z,n.id),!(n.dimension!==this.dimension||!this.world.peek(Xt(n.x),Xt(n.z)))&&(this.world.setBlock(n.x,n.y,n.z,n.id),n.id===nn&&this.world.setWater(n.x,n.y,n.z,8,!0,!1),this.fluidSim.activate(n.x,n.y,n.z),e=!0));e&&this.chunks.remeshDirty()}setNetworkWorldTime(t){if(!Number.isFinite(t))return;const e=Math.floor(t)%sn;this.worldTime=e<0?e+sn:e}editDim(t,e,n,s,r){this.recordEdit(t,e,n,s,r)}worldAt(t,e,n,s,r){if(t===this.dimension)return this.world.getBlock(e,n,s);const o=this.save.edits[nh(t,e,n,s)];if(o!==void 0)return o;if(n<0||n>=pe)return 0;const a=Xt(e),l=Xt(s),c=`${t}:${a},${l}`;let h=r==null?void 0:r.get(c);return h||(h=pm(a,l,this.save.seed,t),r==null||r.set(c,h)),h.get(De(e),n,De(s))}activePortalFrameAt(t,e,n,s,r){const o=(l,c,h)=>this.worldAt(t,l,c,h,r);if(!jn(o(e,n,s)))return null;const a=g0((l,c,h)=>o(l,c,h)===Sn,(l,c,h)=>{const u=o(l,c,h);return u===Le||jn(u)},e,n,s);return!a||!a.inner.every(([l,c,h])=>jn(o(l,c,h)))?null:a}portalKey(t,e){const n=e.inner.reduce((s,r)=>r[0]!==s[0]?r[0]<s[0]?r:s:r[1]!==s[1]?r[1]<s[1]?r:s:r[2]<s[2]?r:s);return`portal:${t}:${e.axis}:${n[0]},${n[1]},${n[2]}`}portalSpawn(t){const e=t.inner.reduce((n,s)=>s[1]!==n[1]?s[1]<n[1]?s:n:s[0]!==n[0]?s[0]<n[0]?s:n:s[2]<n[2]?s:n);return[e[0]+.5,e[1],e[2]+.5]}findSavedPortalNear(t,e,n,s=128){const r=[];for(const[l,c]of Object.entries(this.save.edits)){if(!jn(c))continue;const h=ih(l);if(h.dim!==t||Math.abs(h.x-e)>s||Math.abs(h.z-n)>s)continue;const u=h.x+.5-e,d=h.z+.5-n,p=u*u+d*d;p>s*s||r.push({...h,distance2:p})}r.sort((l,c)=>l.distance2-c.distance2||l.y-c.y);const o=new Map,a=new Set;for(const l of r){const c=this.activePortalFrameAt(t,l.x,l.y,l.z,o);if(!c)continue;const h=this.portalKey(t,c);if(!a.has(h))return a.add(h),o.clear(),{frame:c,spawn:this.portalSpawn(c)}}return o.clear(),null}tickPortalTravel(){var x,_;const t=this.player.pos,e=Math.floor(t.x),n=Math.floor(t.y),s=Math.floor(t.z),r=jn(this.world.getBlock(e,n,s));if(this.portalTimer=r?this.portalTimer+xa/1e3:0,r||(this.portalArmed=!0),!r||!this.portalArmed||this.portalCooldown!==0||this.portalTimer<4)return;const o=this.activePortalFrameAt(this.dimension,e,n,s);if(!o){this.portalTimer=0,this.collapseInvalidPortalsAround(e,n,s);return}const a=this.dimension,l=a==="overworld"?"nether":"overworld",c=this.portalKey(a,o),h=(x=this.save).portalLinks??(x.portalLinks={}),u=o.inner.map(([M,A,E])=>`${a}:${M},${A},${E}`),[d,p]=xE(a,t.x,t.z),g=[];h[c]&&g.push([c,h[c]]);for(const M of u)h[M]&&!g.some(([A])=>A===M)&&g.push([M,h[M]]);let v;const m=new Map;for(const[M,A]of g){if(Math.hypot(A[0]-d,A[2]-p)>128){delete h[M];continue}if(this.activePortalFrameAt(l,Math.floor(A[0]),Math.floor(A[1]),Math.floor(A[2]),m)){v=A;break}delete h[M]}if(m.clear(),!v){const M=this.findSavedPortalNear(l,d,p);M&&(v=M.spawn)}let f=[];if(!v){const M=new Map,A=ME((E,C,I)=>this.worldAt(l,E,C,I,M),l,d,p);M.clear(),f=A.edits;for(const[E,C,I,b]of A.edits)this.editDim(l,E,C,I,b);v=[A.spawn.x,A.spawn.y,A.spawn.z]}for(const M of u)delete h[M];h[c]=v,(_=this.multiplayer)==null||_.sendBlockBatch("portal",f.map(([M,A,E,C])=>({dimension:l,x:M,y:A,z:E,id:C})),{transition:{x:v[0],y:v[1],z:v[2],yaw:this.look.yaw,pitch:this.look.pitch,dimension:l}}),this.portalArmed=!1,this.portalTimer=0,this.switchDimension(l,{x:v[0],y:v[1],z:v[2]})}queueLeafDecay(t,e,n){for(const s of q1((r,o,a)=>this.world.getBlock(r,o,a),t,e,n))this.decayQueue.some(r=>r.x===s.x&&r.y===s.y&&r.z===s.z)||this.decayQueue.push({x:s.x,y:s.y,z:s.z,t:40+Math.floor(Math.random()*160)})}tickLeafDecay(){if(this.decayQueue.length!==0)for(let t=this.decayQueue.length-1;t>=0;t--){const e=this.decayQueue[t];if(--e.t>0)continue;this.decayQueue.splice(t,1);const n=this.world.getBlock(e.x,e.y,e.z);n!==Qs&&n!==al||(this.edit(e.x,e.y,e.z,Le),this.particles.push(...$i(e.x+.5,e.y+.5,e.z+.5,Bs(n),8)),n===Qs&&Math.random()<op&&this.drops.push(dn(Fa,e.x,e.y,e.z)))}}updateMining(t){if(!this.digging){this.crack.hide();return}const e=this.touchDigging?this.touchDigHit:this.rayHit();if(!e){this.digProgress=0,this.digTarget=null,this.crack.hide(),this.touchDigging&&this.stopDigging();return}const n=this.world.getBlock(e.x,e.y,e.z);if(this.touchDigging&&!Vd(n)){this.stopDigging();return}if((!this.digTarget||this.digTarget.x!==e.x||this.digTarget.y!==e.y||this.digTarget.z!==e.z)&&(this.digTarget={x:e.x,y:e.y,z:e.z},this.digProgress=0),!this.creative&&hm(n)<0){this.crack.hide();return}const s=this.creative?0:l1(n,this.heldTool())/1e3;if(s<=0){this.mineBlock(e.x,e.y,e.z,n),this.touchDigging&&this.stopDigging();return}this.digProgress+=t,this.digProgress>=s?(this.mineBlock(e.x,e.y,e.z,n),this.touchDigging&&this.stopDigging()):(this.crack.show(e.x,e.y,e.z,this.digProgress/s),this.digFxT+=t,this.digFxT>=.07&&(this.digFxT=0,this.particles.push(...$i(e.x+.5,e.y+.5,e.z+.5,Bs(n),3))))}heldTool(){const t=this.inv[this.hotbar.index];return t?Aa(t.id):null}settleFallingBlock(t,e,n,s){const r=this.world.getBlock(t,e,n);if(r!==ec&&r!==qo)return!1;const o=s===void 0,a=s??new Map;let l=e;for(;l>1&&!_e(this.world.getBlock(t,l-1,n));)l--;if(l===e)return!1;const c=(u,d,p,g)=>{this.applyLocalEdit(u,d,p,g),a.set(`${u},${d},${p}`,[u,d,p,g])};c(t,e,n,Le);const h=this.world.getBlock(t,l,n);return h===es||Ti(h)||jn(h)?(this.drops.push(dn(r,t,l,n)),o&&this.finishGravityBatch(a,t,e,n),!0):(c(t,l,n,r),o&&this.finishGravityBatch(a,t,e,n),!0)}finishGravityBatch(t,e,n,s){var r;t.size!==0&&(this.chunks.remeshDirty(),(r=this.multiplayer)==null||r.sendBlockBatch("gravity",[...t.values()].map(([o,a,l,c])=>({dimension:this.dimension,x:o,y:a,z:l,id:c})),{center:{x:e+.5,y:n+.5,z:s+.5}}))}settleFallingAt(t,e,n,s){const r=s===void 0,o=s??new Map;let a=e+1;for(;;){const l=this.world.getBlock(t,a,n);if(l!==ec&&l!==qo||!this.settleFallingBlock(t,a,n,o))break;a++}r&&this.finishGravityBatch(o,t,e,n)}collapseInvalidPortalsAround(t,e,n){const s=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],r=[[0,0,0],...s],o=new Set;for(const[a,l,c]of r){const h=t+a,u=e+l,d=n+c,p=`${h},${u},${d}`;if(o.has(p)||!jn(this.world.getBlock(h,u,d)))continue;const g=[[h,u,d]],v=[];for(;g.length>0&&v.length<1024;){const[x,_,M]=g.pop(),A=`${x},${_},${M}`;if(!(o.has(A)||!jn(this.world.getBlock(x,_,M)))){o.add(A),v.push([x,_,M]);for(const[E,C,I]of s)g.push([x+E,_+C,M+I])}}const m=new Set;for(const[x,_,M]of v){const A=`${x},${_},${M}`;if(m.has(A))continue;const E=this.activePortalFrameAt(this.dimension,x,_,M);if(E)for(const[C,I,b]of E.inner)m.add(`${C},${I},${b}`)}const f=v.filter(([x,_,M])=>!m.has(`${x},${_},${M}`)).map(([x,_,M])=>[x,_,M,Le]);this.editMany(f,{x:t+.5,y:e+.5,z:n+.5})}}destroyFurnaceState(t,e,n){const s=this.furnaceStateKey(t,e,n);this.furnaceKey===s&&this.closeFurnace();const r=this.furnaces.get(s);if(!r)return;const o=[[r.input,r.inputN],[r.fuel,r.fuelN,r.fuelDur],[r.output,r.outputN]];for(const[a,l,c]of o)l>0&&this.drops.push(dn(a,t,e,n,Math.random,l,c));this.furnaces.delete(s)}mineBlock(t,e,n,s){if(Ti(s)){this.edit(t,e,n,Le),this.particles.push(...$i(t+.5,e+.5,n+.5,Bs(s),6)),this.digProgress=0,this.digTarget=null,this.crack.hide();return}let r=this.creative?null:c1(s,this.heldTool());r===qo&&Math.random()<.1&&(r=qm);const o=s===Js&&!this.creative&&this.world.getBlock(t,e-1,n)!==Le;this.edit(t,e,n,o?nn:Le),s===Sn&&this.collapseInvalidPortalsAround(t,e,n);const a=this.world.getBlock(t,e+1,n);(Ti(a)||a===es)&&(this.edit(t,e+1,n,Le),a===es&&!this.creative&&this.drops.push(dn(es,t,e+1,n)),this.particles.push(...$i(t+.5,e+1.5,n+.5,Bs(a),6))),this.settleFallingAt(t,e,n),this.particles.push(...$i(t+.5,e+.5,n+.5,Bs(s),16)),r!==null&&this.drops.push(dn(r,t,e,n)),!this.creative&&s===Qs&&Math.random()<op&&this.drops.push(dn(Fa,t,e,n)),(s===sl||s===ol)&&this.queueLeafDecay(t,e,n),s===tc&&this.destroyFurnaceState(t,e,n),Ji(this.survival,Y2);const l=this.inv[this.hotbar.index],c=l?Aa(l.id):null;!this.creative&&c&&(la(this.inv,this.hotbar.index,c.maxDurability),this.hotbar.render(this.inv)),this.digProgress=0,this.digTarget=null,this.crack.hide()}updateDrops(t){const e=this.player.pos.x,n=this.player.pos.y+.9,s=this.player.pos.z;qS(this.drops,ur);for(let r=this.drops.length-1;r>=0;r--){const o=this.drops[r];if(YS(o,this.physWorld,t),o.age>z2){this.drops.splice(r,1);continue}if($S(o,e,n,s))if(o.dur!==void 0)vT(this.inv,o.id,o.dur)&&(this.drops.splice(r,1),this.hotbar.render(this.inv));else{const a=Rf(this.inv,o.id,o.count,ur(o.id));a<o.count&&this.hotbar.render(this.inv),a===0?this.drops.splice(r,1):o.count=a}}this.dropRenderer.sync(this.drops,this.entityLight)}tickMobs(){const t=this.player.pos.x,e=this.player.pos.z,n={x:t,y:this.player.pos.y,z:e};let s=0,r=0,o=0;for(let a=this.mobs.length-1;a>=0;a--){const l=this.mobs[a];if(l.health<=0){this.mobs.splice(a,1);continue}const c=l.pos.x-t,h=l.pos.z-e,u=c*c+h*h;if(u>lp*lp){this.mobs.splice(a,1);continue}const d=yb(l.kind);d&&o++,u<cp*cp&&(s++,d&&r++);const p=d?Gb(l,this.physWorld,this.mobRng,n,this.isSunlit(l)):Ab(l,this.physWorld,this.mobRng);Object.assign(l,p.mob);let g=!1;for(const v of p.events)if(v.kind==="layEgg")this.drops.push(dn(Gm,Math.floor(v.pos.x),Math.floor(v.pos.y),Math.floor(v.pos.z)));else if(v.kind==="attackPlayer")this.hurtPlayer(v.damage,t-l.pos.x,e-l.pos.z),l.kind==="husk"&&Ji(this.survival,3);else if(v.kind==="shootArrow")this.arrows.push(pf(v.from.x,v.from.y,v.from.z,v.dir.x,v.dir.y,v.dir.z,o0,!1,v.damage));else if(v.kind==="explode")this.explode(v.pos,v.radius,v.damage,l);else if(v.kind==="drops")for(const m of v.items)this.drops.push(dn(m.id,Math.floor(v.pos.x),Math.floor(v.pos.y),Math.floor(v.pos.z),Math.random,m.count));else v.kind==="death"&&(g=!0);if(g){const v=this.mobs.indexOf(l);v>=0&&this.mobs.splice(v,1)}}if(++this.mobSpawnTick>=J2){if(this.mobSpawnTick=0,this.dimension!=="overworld")return;if(s<j2&&this.mobs.length<ap){const l=this.player.vel,c=Math.hypot(l.x,l.z)>.001?Math.atan2(l.z,l.x):null;this.mobs.push(...xf(hp[Math.floor(this.mobRng()*4)],t,e,this.mobRng,this.spawnWorld,this.surfaceY,24,44,c,Math.PI/2))}let a=Math.min(Q2-o,ap-this.mobs.length);if(r<Z2&&a>0){const l=this.mobRng(),c=Ws(t,e,this.save.seed),h=Xb(c,l),u=(p,g,v)=>{const[m,f]=this.chunks.lightLevelAt(p,g,v);return Math.max(f,m-this.skyDarkenNow)},d=$b(h,t,this.player.pos.y,e,this.mobRng,this.spawnWorld,this.surfaceY,void 0,void 0,u).slice(0,a);this.mobs.push(...d),a-=d.length,a>0&&this.mobs.push(...Yb(h,t,e,this.mobRng,this.spawnWorld,this.surfaceY,void 0,void 0,u).slice(0,a))}}}explode(t,e,n,s){var m;const r=Math.floor(t.x),o=Math.floor(t.y),a=Math.floor(t.z),l=e*e,c=Math.ceil(e),h=f=>{const x=Math.hypot(f.x-t.x,f.y-t.y,f.z-t.z);let _=Math.round(n*(1-x/(e+1.5)));return _>0&&this.explosionBlocked(t,f)&&(_=Math.round(_*.3)),Math.max(0,_)},u={damage:h({x:this.player.pos.x,y:this.player.pos.y+.9,z:this.player.pos.z}),dx:this.player.pos.x-t.x,dz:this.player.pos.z-t.z},d=this.mobs.filter(f=>f!==s&&f.health>0).map(f=>({mob:f,damage:h({x:f.pos.x,y:f.pos.y+.5,z:f.pos.z}),dx:f.pos.x-t.x,dz:f.pos.z-t.z})),p=new Map,g=new Map;for(let f=-c;f<=c;f++)for(let x=-c;x<=c;x++)for(let _=-c;_<=c;_++){if(_*_+f*f+x*x>l)continue;const M=r+_,A=o+f,E=a+x,C=this.world.getBlock(M,A,E);if(!_e(C)&&!Ti(C)||C===Rh||C===Sn)continue;C===tc&&this.destroyFurnaceState(M,A,E),this.world.setBlock(M,A,E,Le),this.recordEdit(this.dimension,M,A,E,Le),this.fluidSim.activate(M,A,E),g.set(`${M},${A},${E}`,[M,A,E,Le]);const I=`${M},${E}`,b=p.get(I);(!b||A>b.y)&&p.set(I,{x:M,y:A,z:E})}for(const f of p.values())this.settleFallingAt(f.x,f.y,f.z,g);const v=[...g.values()].map(([f,x,_,M])=>({dimension:this.dimension,x:f,y:x,z:_,id:M}));v.length>0&&((m=this.multiplayer)==null||m.sendBlockBatch("explosion",v,{center:t})),this.chunks.remeshDirty(),this.particles.push(...$i(t.x,t.y+.4,t.z,[.33,.33,.33],30)),u.damage>0&&this.hurtPlayer(u.damage,u.dx,u.dz);for(const{mob:f,damage:x,dx:_,dz:M}of d){if(x<=0)continue;const A=mc(f,x,{x:_,z:M},this.mobRng);Object.assign(f,A.mob);for(const E of A.events)if(E.kind==="drops")for(const C of E.items)this.drops.push(dn(C.id,Math.floor(E.pos.x),Math.floor(E.pos.y),Math.floor(E.pos.z),Math.random,C.count));else E.kind}}explosionBlocked(t,e){for(let s=1;s<8;s++){const r=s/8,o=Math.floor(t.x+(e.x-t.x)*r),a=Math.floor(t.y+(e.y-t.y)*r),l=Math.floor(t.z+(e.z-t.z)*r);if(_e(this.world.getBlock(o,a,l)))return!0}return!1}isSunlit(t){return jb(t,this.world,ba(this.worldTime).isNight)}tickArrows(){const t=(e,n,s,r,o,a,l,c)=>e>=r-l&&e<=r+l&&n>=a&&n<=a+c&&s>=o-l&&s<=o+l;for(let e=this.arrows.length-1;e>=0;e--){const n=this.arrows[e];if(n.age>tA){this.arrows.splice(e,1);continue}if(n.stuck){if(n.age++,n.age>eA){const d=n.x-this.player.pos.x,p=n.y-(this.player.pos.y+.9),g=n.z-this.player.pos.z;d*d+p*p+g*g<1.4*1.4&&Rf(this.inv,ns,1)===0&&(this.hotbar.render(this.inv),this.arrows.splice(e,1))}continue}const s=n.x,r=n.y,o=n.z;gb(n,this.physWorld);const a=n.x-s,l=n.y-r,c=n.z-o,h=Math.max(1,Math.ceil(Math.hypot(a,l,c)/.2));let u=!1;for(let d=1;d<=h&&!u;d++){const p=d/h,g=s+a*p,v=r+l*p,m=o+c*p;if(n.fromPlayer)for(const f of this.mobs){const x=Gn[f.kind];if(t(g,v,m,f.pos.x,f.pos.z,f.pos.y,x.width/2,x.height)){this.damageMobWithArrow(f,n),u=!0;break}}else t(g,v,m,this.player.pos.x,this.player.pos.z,this.player.pos.y,Ba/2,ls)&&(this.hurtPlayer(n.damage,n.vx,n.vz),u=!0)}u&&this.arrows.splice(e,1)}}damageMobWithArrow(t,e){const n=mc(t,e.damage,{x:e.vx,z:e.vz},this.mobRng);Object.assign(t,n.mob);for(const s of n.events)if(s.kind==="drops")for(const r of s.items)this.drops.push(dn(r.id,Math.floor(s.pos.x),Math.floor(s.pos.y),Math.floor(s.pos.z),Math.random,r.count));else if(s.kind==="death"){const r=this.mobs.indexOf(t);r>=0&&this.mobs.splice(r,1)}}mobUnderRay(t=this.crosshairRay()){const{origin:e,direction:n}=t,{x:s,y:r,z:o}=e,{x:a,y:l,z:c}=n;let h=null,u=K2;for(const d of this.mobs){const p=Gn[d.kind],g=p.width/2,v=oA(s,r,o,a,l,c,d.pos.x-g,d.pos.y,d.pos.z-g,d.pos.x+g,d.pos.y+p.height,d.pos.z+g);v!==null&&v<u&&(u=v,h=d)}return h!==null&&Kd({x:s,y:r,z:o},{x:a,y:l,z:c},u,(p,g,v)=>_e(this.world.getBlock(p,g,v)))?null:h}attackMob(t,e){this.hand.swing();const n=this.inv[this.hotbar.index],s=rA(n?n.id:null),r=n?Aa(n.id):null;if(!this.creative&&r){for(let u=r.kind==="sword"?1:2;u>0;u--)la(this.inv,this.hotbar.index,r.maxDurability);this.hotbar.render(this.inv)}const o=e==null?void 0:e.direction,a=o?Math.hypot(o.x,o.z):0,l=o&&a>1e-6?o.x/a:Math.cos(this.look.yaw),c=o&&a>1e-6?o.z/a:Math.sin(this.look.yaw),h=mc(t,s,{x:l,z:c},this.mobRng);Object.assign(t,h.mob);for(const u of h.events)if(u.kind==="drops")for(const d of u.items)this.drops.push(dn(d.id,Math.floor(u.pos.x),Math.floor(u.pos.y),Math.floor(u.pos.z),Math.random,d.count));else if(u.kind==="death"){const d=this.mobs.indexOf(t);d>=0&&this.mobs.splice(d,1)}}placeBlock(t=this.rayHit()){const e=this.hotbar.index,n=this.inv[e];if(!n||n.count<=0||n.id>=256||!t)return;const s=Xd(this.world.getBlock(t.x,t.y,t.z)),r=s?t.x:t.x+t.nx,o=s?t.y:t.y+t.ny,a=s?t.z:t.z+t.nz,l=this.world.getBlock(r,o,a);if(!Xd(l))return;const c=jn(l);if(this.overlapsPlayer(r,o,a))return;const h=this.creative?n.id:Df(this.inv,e);h!==null&&(this.edit(r,o,a,h),c&&this.collapseInvalidPortalsAround(r,o,a),(h===ec||h===qo)&&this.settleFallingBlock(r,o,a),this.hotbar.render(this.inv),this.hand.swing())}overlapsPlayer(t,e,n){const s=this.player.pos,r=Ba/2;return t<s.x+r&&t+1>s.x-r&&e<s.y+ls&&e+1>s.y&&n<s.z+r&&n+1>s.z-r}updateDayNight(){const t=ba(this.worldTime,this.dimension),e=this.worldTime/sn*Math.PI*2,n=Math.sin(e);let s=0;this.dimension==="overworld"&&n>-.15&&(s=Math.max(0,1-Math.abs(n)/.3)*Math.min(1,(n+.15)/.15)),this.renderer.setSkyColors(t.skyTop,t.skyHorizon,e,s,n,this.dimension==="overworld");const r=this.normalFog;r&&r.color.setRGB(t.skyHorizon[0],t.skyHorizon[1],t.skyHorizon[2],ae);const o=t.worldTint,a=Math.max(o[0],o[1],o[2],.001);this.chunks.setTint([o[0]/a,o[1]/a,o[2]/a]);const l=wm(this.worldTime),c=this.lightingQuality==="off"?l:l*.86;this.skyDarkenNow=c,this.chunks.setSkyDarken(c),this.chunks.setSkyMul(1-l/11),this.chunks.setSkyReflection(t.skyHorizon,t.skyTop);const h=this.worldTime/sn*Math.PI*2;this.chunks.setSunDir(Math.cos(h),Math.sin(h),.1)}updateGodRays(){if(this.lightingQuality==="off")return;const t=this.worldTime/sn*Math.PI*2,e=Math.cos(t),n=Math.sin(t),s=.1,r=Math.hypot(e,n,s)||1,o=n/r,a=this.renderer.camera;a.getWorldDirection(this._godFwd);const l=this._godFwd.x*(e/r)+this._godFwd.y*(n/r)+this._godFwd.z*(s/r),c=500;this._godSunWorld.set(a.position.x+e/r*c,a.position.y+n/r*c,a.position.z+s/r*c),this._godSunWorld.project(a);const h=this._godSunWorld,u=h.x*.5+.5,d=h.y*.5+.5,p=u>=0&&u<=1&&d>=0&&d<=1;let g=0;this.dimension==="overworld"&&o>0&&l>0&&p&&(g=Math.min(.6,o*2.6));const v=1,m=.6+o*.7,f=.3+o*1;this._godSunColor.setRGB(v,Math.min(1,m),Math.min(1,f)),this._godSunUV.set(u,d),this.renderer.setGodRays({quality:this.lightingQuality,sunUV:this._godSunUV,intensity:g,sunColor:this._godSunColor})}updateWater(){const t=this.renderer.camera.position,e=this.pointInWater(t.x,t.y,t.z);this.renderer.scene.fog=e&&this.lightingQuality==="off"?this.underFog:this.normalFog,this.renderer.setUnderwater(e),this.chunks.setCameraUnderwater(e),this.hand.setUnderwater(e),this.underwaterEl&&(this.underwaterEl.style.display=e&&this.lightingQuality==="off"?"block":"none")}updateHighlight(){const t=this.rayHit();t?(this.highlight.position.set(t.x+.5,t.y+.5,t.z+.5),this.highlight.visible=!0):this.highlight.visible=!1}updateCamera(t){const e=this.prev.pos,n=this.player.pos,s=e.x+(n.x-e.x)*t,r=e.y+(n.y-e.y)*t,o=e.z+(n.z-e.z)*t,a=this.renderer.camera;this.camEye+=((this.crouching?cb:Zn)-this.camEye)*.3;const l=this.camEye;a.position.set(s,r+l,o);const c=Math.cos(this.look.yaw),h=Math.sin(this.look.yaw),u=Math.cos(this.look.pitch),d=Math.sin(this.look.pitch);a.lookAt(s+c*u,r+l+d,o+h*u)}}const Uc=4;class lA{constructor(t,e=4242){y(this,"gl");y(this,"scene",new hr);y(this,"camera",new Ke(70,1,.1,1e3));y(this,"world");y(this,"chunks");y(this,"running",!1);y(this,"x",.5);y(this,"z",.5);y(this,"heading",.7);y(this,"y",175);y(this,"disposed",!1);y(this,"preloadAbort",null);y(this,"onResize",()=>this.resize());var n,s;this.gl=new $p({canvas:t,antialias:!1}),this.gl.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene.background=Ow(),this.scene.fog=new cr(tm,40,Uc*16),this.camera.layers.enable(Eh),this.world=new mm(e),this.seekWater(),this.chunks=new Am(this.scene,this.world,Kc()),this.chunks.update(Xt(Math.floor(this.x)),Xt(Math.floor(this.z)),Uc,999),this.resize(),window.addEventListener("resize",this.onResize),window.addEventListener("orientationchange",this.onResize),(n=window.visualViewport)==null||n.addEventListener("resize",this.onResize),(s=window.visualViewport)==null||s.addEventListener("scroll",this.onResize)}seekWater(){for(let t=4;t<120;t+=3)for(let e=0;e<12;e++){const n=e/12*Math.PI*2,s=Math.round(Math.cos(n)*t),r=Math.round(Math.sin(n)*t);if(li(this.world.getBlock(s,ee,r))){this.heading=n,this.x=s-Math.cos(n)*14+.5,this.z=r-Math.sin(n)*14+.5;return}}}resize(){const{width:t,height:e}=em(window);this.gl.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}async preload(t=Uc,e){var a;(a=this.preloadAbort)==null||a.abort();const n=new AbortController;this.preloadAbort=n;const s=()=>n.abort();e!=null&&e.aborted?s():e==null||e.addEventListener("abort",s,{once:!0});const r=n.signal,o=()=>this.disposed||r.aborted;try{if(o())return;const l=Xt(Math.floor(this.x)),c=Xt(Math.floor(this.z));for(let u=-t;u<=t;u++)for(let d=-t;d<=t;d++)this.world.request(l+d,c+u);if(!await new Promise(u=>{let d=null,p=!1;const g=f=>{p||(p=!0,d!==null&&clearTimeout(d),r.removeEventListener("abort",v),u(f))},v=()=>g(!1),m=()=>{if(o()){g(!1);return}let f=!0;for(let x=-t;x<=t&&f;x++)for(let _=-t;_<=t&&f;_++)this.world.peek(l+_,c+x)||(f=!1);f?g(!0):d=setTimeout(m,30)};r.addEventListener("abort",v,{once:!0}),m()})||o())return;for(let u=0;u<600&&(u<3||this.chunks.meshBusy());u++)if(o()||(this.chunks.update(l,c,t,999),this.chunks.flushMesh(999),!await new Promise(p=>{let g=!1,v=0;const m=x=>{g||(g=!0,r.removeEventListener("abort",f),p(x))},f=()=>{v!==0&&cancelAnimationFrame(v),m(!1)};r.addEventListener("abort",f,{once:!0}),v=requestAnimationFrame(()=>m(!0))})))return}finally{e==null||e.removeEventListener("abort",s),this.preloadAbort===n&&(this.preloadAbort=null)}}start(){if(this.running)return;this.running=!0;const t=()=>{this.running&&(requestAnimationFrame(t),this.heading+=6e-4,this.camera.position.set(this.x,this.y,this.z),this.camera.lookAt(this.x+Math.cos(this.heading)*26,this.y-17,this.z+Math.sin(this.heading)*26),this.chunks.flushMesh(2),this.gl.render(this.scene,this.camera))};requestAnimationFrame(t)}stop(){this.running=!1}dispose(){var t,e,n;this.disposed||(this.disposed=!0,(t=this.preloadAbort)==null||t.abort(),this.preloadAbort=null,this.running=!1,window.removeEventListener("resize",this.onResize),window.removeEventListener("orientationchange",this.onResize),(e=window.visualViewport)==null||e.removeEventListener("resize",this.onResize),(n=window.visualViewport)==null||n.removeEventListener("scroll",this.onResize),this.chunks.dispose(),this.world.dispose(),this.gl.dispose(),this.gl.forceContextLoss())}}function cA(){if(document.getElementById("mw-settings-css"))return;const i=document.createElement("style");i.id="mw-settings-css",i.textContent=`
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
    #settings input[type=checkbox]:checked::after{content:'';position:absolute;inset:4px;background:#0e1a28;}`,document.head.appendChild(i)}class hA{constructor(t){y(this,"root");y(this,"settings");y(this,"onChange",null);this.root=t,this.settings=vm(),t.classList.remove("hidden"),cA(),t.style.cssText="position:fixed;inset:0;z-index:40;display:none;align-items:center;justify-content:center;background:#0e1a28;overflow-y:auto;overscroll-behavior:contain;touch-action:pan-y;-webkit-overflow-scrolling:touch;",t.innerHTML=`
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
      </div>`;const e=t.querySelector("#set-vol"),n=t.querySelector("#set-vol-val"),s=t.querySelector("#set-lighting"),r=t.querySelector("#set-tex-cartoon"),o=t.querySelector("#set-tex-classic"),a=()=>{r.classList.toggle("active",this.settings.texturePack==="cartoon"),o.classList.toggle("active",this.settings.texturePack==="classic"),r.style.outline=this.settings.texturePack==="cartoon"?"2px solid #6ab0ff":"none",o.style.outline=this.settings.texturePack==="classic"?"2px solid #6ab0ff":"none"},l=()=>{var g;Q1(this.settings),(g=this.onChange)==null||g.call(this,this.settings)},c=g=>{this.settings={...this.settings,texturePack:g},a(),l()},h=()=>e.style.setProperty("--fill",`${this.settings.volume}%`);e.addEventListener("input",()=>{this.settings={...this.settings,volume:Number(e.value)},n.textContent=`${this.settings.volume}%`,h(),l()}),s.addEventListener("change",()=>{this.settings={...this.settings,lightingQuality:s.value},l()}),r.addEventListener("click",()=>c("cartoon")),o.addEventListener("click",()=>c("classic"));const u=t.querySelector("#set-rd"),d=t.querySelector("#set-rd-val"),p=()=>u.style.setProperty("--fill",`${(this.settings.renderDistance-3)/9*100}%`);u.addEventListener("input",()=>{this.settings={...this.settings,renderDistance:Number(u.value)},d.textContent=String(this.settings.renderDistance),p(),l()}),t.querySelector("#set-close").addEventListener("click",()=>this.hide()),e.value=String(this.settings.volume),n.textContent=`${this.settings.volume}%`,h(),s.value=this.settings.lightingQuality,u.value=String(this.settings.renderDistance),d.textContent=String(this.settings.renderDistance),p(),a()}get current(){return this.settings}show(){this.root.style.display="flex"}hide(){this.root.style.display="none"}get visible(){return this.root.style.display!=="none"}}var uA={};const dA=1e3/15,fA=1e4,rh="wss://mineworld-multiplayer-nornttyy.onrender.com/ws",oh=5e3;function ki(i){return typeof i=="object"&&i!==null}function Ee(i){return typeof i=="number"&&Number.isFinite(i)}function Wr(i){return typeof i=="number"&&Number.isInteger(i)}function dl(i){return i==="overworld"||i==="nether"?i:null}function P0(i){return i==="survival"||i==="creative"?i:null}function ah(i){if(!ki(i))return null;const t=dl(i.dimension);return typeof i.id!="string"||typeof i.name!="string"||typeof i.skin!="string"||!Ee(i.x)||!Ee(i.y)||!Ee(i.z)||!Ee(i.yaw)||!Ee(i.pitch)||t===null?null:{id:i.id,name:i.name,skin:i.skin,x:i.x,y:i.y,z:i.z,yaw:i.yaw,pitch:i.pitch,dimension:t}}function cs(i){if(!ki(i))return null;const t=dl(i.dimension);return t===null||!Wr(i.x)||!Wr(i.y)||!Wr(i.z)||!Wr(i.id)?null:{dimension:t,x:i.x,y:i.y,z:i.z,id:i.id}}function pA(i){return i==="portal"||i==="explosion"||i==="gravity"||i==="local"?i:null}function mA(i){return!ki(i)||!Ee(i.x)||!Ee(i.y)||!Ee(i.z)?null:{x:i.x,y:i.y,z:i.z}}function gA(i){if(!ki(i))return null;const t=dl(i.dimension);return!Ee(i.x)||!Ee(i.y)||!Ee(i.z)||!Ee(i.yaw)||!Ee(i.pitch)||t===null?null:{x:i.x,y:i.y,z:i.z,yaw:i.yaw,pitch:i.pitch,dimension:t}}function lh(i){if(!ki(i))return null;const t=pA(i.kind);if(t===null||!Array.isArray(i.edits)||i.edits.length>512)return null;const e=i.edits.map(cs);if(e.some(r=>r===null))return null;const n=i.center===void 0?void 0:mA(i.center),s=i.transition===void 0?void 0:gA(i.transition);return n===null||s===null?null:{kind:t,edits:e,...n?{center:n}:{},...s?{transition:s}:{}}}function vA(i){return Number.isInteger(i.seed)&&i.seed>=-2e9&&i.seed<=2e9&&P0(i.gameMode)!==null&&Ee(i.worldTime)&&Math.abs(i.worldTime)<=2e9&&Array.isArray(i.edits)&&i.edits.length<=oh&&i.edits.every(t=>cs(t)!==null)}function _A(i){const t=[];for(const[e,n]of Object.entries(i.edits)){const s=ih(e),r={dimension:s.dim,x:s.x,y:s.y,z:s.z,id:n};cs(r)!==null&&t.push(r)}if(t.length>oh)throw new Error(`这个世界有 ${t.length} 个方块改动，联机房间最多可带入 ${oh} 个。`);return{seed:Math.floor(i.seed),gameMode:i.gameMode??"survival",worldTime:i.worldTime??1e3,edits:t}}function xA(i){if(!ki(i)||i.type!=="welcome"||typeof i.id!="string"||!ki(i.room))return null;const t=P0(i.room.gameMode);if(typeof i.room.id!="string"||!Wr(i.room.seed)||t===null||!Ee(i.room.worldTime)||!Array.isArray(i.players)||!Array.isArray(i.edits))return null;const e=i.players.map(ah),n=i.edits.map(cs);return e.some(s=>s===null)||n.some(s=>s===null)?null:{type:"welcome",id:i.id,room:{id:i.room.id,seed:i.room.seed,gameMode:t,worldTime:i.room.worldTime},players:e,edits:n}}function yA(i){if(!ki(i)||typeof i.type!="string")return null;if(i.type==="welcome")return xA(i);if(i.type==="error"&&typeof i.message=="string")return{type:"error",message:i.message};if(i.type==="player-join"){const t=ah(i.player);return t?{type:"player-join",player:t}:null}if(i.type==="player-leave"&&typeof i.id=="string")return{type:"player-leave",id:i.id};if(i.type==="state"&&typeof i.id=="string"){const t=ah(i.player);return t?{type:"state",id:i.id,player:t}:null}if(i.type==="block"){const t=cs(i.edit),e=cs(i),n=t??e;return n?{type:"block",edit:n}:null}if(i.type==="blocks"){const t=lh(i.batch)??lh(i);return t?{type:"blocks",batch:t}:null}return i.type==="time"&&Ee(i.worldTime)?{type:"time",worldTime:i.worldTime}:null}function qh(i){return i.toUpperCase().replace(/[^A-Z0-9-]/g,"").slice(0,16)}function L0(i){return[...i].filter(e=>{const n=e.charCodeAt(0);return n>31&&n!==127}).join("").trim().slice(0,16)||"玩家"}function MA(){const i=new URLSearchParams(window.location.search).get("server");let t=null;try{t=localStorage.getItem("mineworld.multiplayer.server")}catch{}const e=uA.VITE_MULTIPLAYER_URL,n=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",s=i||t||e||(n?`ws://${window.location.hostname}:8787/ws`:rh);try{const r=new URL(s);if(r.protocol==="ws:"||r.protocol==="wss:")return r.toString()}catch{}return rh}class Yh{constructor(t){y(this,"socket");y(this,"players",new Map);y(this,"_id","");y(this,"_room",null);y(this,"_initialEdits",[]);y(this,"_closed",!1);y(this,"lastStateSent",-1/0);y(this,"disconnectReason","");y(this,"blockHandler",null);y(this,"blockBatchHandler",null);y(this,"worldTimeHandler",null);y(this,"pendingBlockEvents",[]);y(this,"pendingWorldTime",null);y(this,"onPlayersChanged",null);y(this,"onServerError",null);y(this,"onDisconnect",null);this.socket=t}static connect(t){var r;const e=qh(t.room);if(e.length<3)return Promise.reject(new Error("房间号至少需要 3 个字符"));const n=L0(t.name);if(t.action!=="create"&&t.world!==void 0)return Promise.reject(new Error("只有创建房间时才能带入本地世界"));if(t.world!==void 0&&!vA(t.world))return Promise.reject(new Error("当前世界数据不适合开启联机房间"));const s=((r=t.world)==null?void 0:r.gameMode)??t.gameMode??"creative";return new Promise((o,a)=>{let l=!1,c=0,h;try{h=new Yh(new WebSocket(t.url))}catch{a(new Error("联机地址无效"));return}const u=d=>{l||(l=!0,window.clearTimeout(c),h.socket.close(),a(new Error(d)))};c=window.setTimeout(()=>u("连接超时，请检查联机服务器是否已启动"),fA),h.socket.addEventListener("open",()=>{h.send({type:"join",action:t.action,room:e,name:n,skin:"default",gameMode:s,world:t.world})}),h.socket.addEventListener("message",d=>{h.receive(d.data)&&!l&&(l=!0,window.clearTimeout(c),o(h))}),h.socket.addEventListener("error",()=>{const d=t.url===rh;u(d?"联机服务器暂时不可用或仍在启动，请稍后重试。":"无法连接联机服务器")}),h.socket.addEventListener("close",d=>{const p=h.disconnectReason||d.reason||(d.code===1e3?"已断开联机":"联机连接已断开");l?h.close(p):u(p)})})}get id(){return this._id}get room(){if(this._room===null)throw new Error("联机房间尚未就绪");return this._room}get isConnected(){return!this._closed&&this.socket.readyState===WebSocket.OPEN}get playerCount(){return this.players.size+(this._id?1:0)}get remotePlayers(){return[...this.players.values()]}get initialEdits(){return this._initialEdits}sendState(t){if(!this.isConnected)return;const e=performance.now();e-this.lastStateSent<dA||!Ee(t.x)||!Ee(t.y)||!Ee(t.z)||!Ee(t.yaw)||!Ee(t.pitch)||dl(t.dimension)===null||(this.lastStateSent=e,this.send({type:"state",player:t}))}sendBlock(t){!this.isConnected||cs(t)===null||this.send({type:"block",...t})}sendBlockBatch(t,e,n={}){if(!this.isConnected)return;const s=lh({kind:t,edits:e,...n});s&&this.send({type:"blocks",...s})}setBlockHandler(t){this.blockHandler=t,this.flushPendingBlockEvents()}setBlockBatchHandler(t){this.blockBatchHandler=t,this.flushPendingBlockEvents()}setWorldTimeHandler(t){this.worldTimeHandler=t,t&&this.pendingWorldTime!==null&&(t(this.pendingWorldTime),this.pendingWorldTime=null)}disconnect(t="已退出房间"){this.disconnectReason=t,this._closed||this.socket.close(1e3,t.slice(0,120)),this.close(t)}receive(t){var s,r,o,a,l;let e;try{e=JSON.parse(typeof t=="string"?t:String(t))}catch{return null}const n=yA(e);if(!n)return null;if(n.type==="error")return this._room===null?(this.disconnectReason=n.message,this.socket.close(1008,n.message.slice(0,120))):(s=this.onServerError)==null||s.call(this,n.message),null;if(n.type==="welcome"){this._id=n.id,this._room=n.room,this._initialEdits=n.edits,this.players.clear();for(const c of n.players)c.id!==this._id&&this.players.set(c.id,c);return(r=this.onPlayersChanged)==null||r.call(this),n}if(n.type==="player-join")n.player.id!==this._id&&this.players.set(n.player.id,n.player),(o=this.onPlayersChanged)==null||o.call(this);else if(n.type==="player-leave")this.players.delete(n.id),(a=this.onPlayersChanged)==null||a.call(this);else if(n.type==="state")n.id!==this._id&&this.players.set(n.id,n.player),(l=this.onPlayersChanged)==null||l.call(this);else if(n.type==="block"){const c=n.edit;this.pendingBlockEvents.push({type:"block",edit:c}),this.flushPendingBlockEvents()}else n.type==="blocks"?(this.pendingBlockEvents.push({type:"blocks",batch:n.batch}),this.flushPendingBlockEvents()):n.type==="time"&&(this.worldTimeHandler?this.worldTimeHandler(n.worldTime):this.pendingWorldTime=n.worldTime);return null}send(t){this.socket.readyState===WebSocket.OPEN&&this.socket.send(JSON.stringify(t))}flushPendingBlockEvents(){let t=0;for(const e of this.pendingBlockEvents){if(e.type==="block"){if(!this.blockHandler)break;this.blockHandler(e.edit)}else if(this.blockBatchHandler)this.blockBatchHandler(e.batch);else if(this.blockHandler)for(const n of e.batch.edits)this.blockHandler(n);else break;t++}t>0&&this.pendingBlockEvents.splice(0,t)}close(t){var e,n;this._closed||(this._closed=!0,this.players.size>0&&(this.players.clear(),(e=this.onPlayersChanged)==null||e.call(this)),(n=this.onDisconnect)==null||n.call(this,t))}}const dr=document.getElementById("app"),Lt=i=>document.getElementById(i),ui=h0();document.documentElement.classList.toggle("touch-device",ui);ui&&LT();const $h=Lt("menubg");let We=null;const fr=Lt("menu"),ja=Lt("worldlist"),pr=Lt("multiplayer"),An=Lt("pause"),Nc=Lt("world-rows"),nr=Lt("online-hud");let Dt=null,ya=!1,Me=null,Bn=null,Gr="",ir=!1;const fl=Lt("boot"),wA=fl.querySelector(".boot-tip"),rn=(i,t="加载中…")=>{fl.classList.toggle("hidden",!i),i&&(wA.textContent=t)};let k0=!1,ch=!1,I0=!1;const U0=i=>{k0||I0||(ch=!0,rn(!0,`出错了：${i}（请把这行字发给开发）`))};window.addEventListener("error",i=>U0(i.message||String(i.error)));window.addEventListener("unhandledrejection",i=>U0(String(i.reason&&(i.reason.message||i.reason.stack)||i.reason)));try{We=new lA($h)}catch(i){console.error("[menubg] 初始化失败:",i),We=null}const Za=["100% 纯方块!","无限的世界!","由 Three.js 驱动!","会挖会放会跳!","试试双击 W 疾跑~","支持 WebGL2!","像素手工打造!","水快会流动了!","也试试我的世界!"];Lt("splash").textContent=Za[Math.floor(Math.random()*Za.length)];const pp=fl.querySelector(".boot-splash");pp&&(pp.textContent=Za[Math.floor(Math.random()*Za.length)]);const Ma=ui?["提示: 左侧滑动方向盘移动，空白处拖动视角","提示: 双击前进后按住可以疾跑","提示: 轻点空白处可互动或放置方块","提示: 长按空白处可挖方块或攻击","提示: 可以直接点快捷栏切换物品","提示: 石头要用镐才挖得动"]:["提示: 按住左键挖方块","提示: 双击 W 可以疾跑","提示: 右键放方块(会消耗物品)","提示: 数字键 1-9 / 滚轮 切换物品","提示: 石头要用镐才挖得动","提示: 砍树 → 木板 → 工作台 → 工具","提示: 熔炉能把铁矿炼成铁锭","提示: 天黑了小心怪物"],Fc=fl.querySelector(".boot-hint");if(Fc){let i=Math.floor(Math.random()*Ma.length);Fc.textContent=Ma[i],setInterval(()=>{i=(i+1)%Ma.length,Fc.textContent=Ma[i]},2600)}function ln(i){Lt("crosshair").style.display=i?"block":"none",Lt("hotbar").style.display=i?"flex":"none",Lt("status").style.display=i?"flex":"none",nr.classList.toggle("hidden",!i||Me===null),Dt==null||Dt.setTouchActive(i&&ui)}function us(i){for(const e of[fr,ja,pr,An])e.classList.add("hidden");Lt("newworld").classList.add("hidden"),i&&i.classList.remove("hidden"),ln(!1);const t=i===fr||i===ja||i===pr;$h.style.display=t?"block":"none",t?We==null||We.start():We==null||We.stop()}const N0=i=>new Promise(t=>setTimeout(t,i));(async()=>{if(!ch){rn(!0,"加载中…");try{if(We){const i=new AbortController;try{await Promise.race([We.preload(void 0,i.signal),N0(8e3)])}finally{i.abort()}}}catch(i){console.error("[menubg] preload 失败:",i)}ch||(I0=!0,us(fr),rn(!1))}})();const Kh=new hA(Lt("settings"));Kh.onChange=i=>{Dt==null||Dt.setTexturePack(i.texturePack),Dt==null||Dt.setLightingQuality(i.lightingQuality),Dt==null||Dt.setRenderDistance(i.renderDistance)};Lt("settings-btn").addEventListener("click",()=>Kh.show());Lt("settings-btn-pause").addEventListener("click",()=>Kh.show());Lt("play").addEventListener("click",()=>DA());const mr=Lt("mp-name"),os=Lt("mp-room"),mp=Lt("mp-status"),hh=Lt("mp-create"),uh=Lt("mp-join"),SA=Lt("mp-title"),bA=Lt("mp-intro"),TA=Lt("mp-mode-field"),F0=Lt("mp-back");let co="join",hs=null,O0="creative",Oc=!1;function Kr(i,t=!1){mp.textContent=i,mp.classList.toggle("error",t)}function B0(i){O0=i,Lt("mp-current-mode").textContent=i==="creative"?"创造模式":"生存模式",Lt("mp-mode-desc").textContent=i==="creative"?"适合和朋友一起搭建；玩家与方块会实时同步。":"玩家与方块会实时同步；生物、掉落物和背包暂各自本地运行。"}function z0(){try{mr.value=localStorage.getItem("mineworld.multiplayer.name")??""}catch{}}function H0(i){co=i;const t=i==="host";SA.textContent=t?"开启联机房间":"加入联机房间",bA.textContent=t?"当前单人世界会成为这个房间的世界。把房间号告诉朋友即可一起游玩。":"输入朋友给你的房间号，即可进入同一个世界。",TA.classList.toggle("hidden",!t),hh.classList.toggle("hidden",!t),uh.classList.toggle("hidden",t),F0.textContent=t?"返回暂停菜单":"返回"}function W0(){const i="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let t="MW";for(let e=0;e<5;e++)t+=i[Math.floor(Math.random()*i.length)];return t}function wa(){if(!Me){nr.classList.add("hidden");return}nr.textContent=Gr||`联机 · 房间 ${Me.room.id.toUpperCase()}
${Me.playerCount} 名玩家`}function jh(){if(co==="join"){us(pr);return}for(const i of[fr,ja,An])i.classList.add("hidden");Lt("newworld").classList.add("hidden"),pr.classList.remove("hidden"),ln(!1),$h.style.display="none",We==null||We.stop()}function EA(){H0("join"),hs=null,z0(),os.value=qh(new URLSearchParams(location.search).get("room")??os.value),B0("creative"),Kr("输入房间号后加入。"),jh(),mr.focus()}function AA(){!Dt||Me!==null||(hs=Dt.snapshot(),H0("host"),z0(),os.value=W0(),B0(hs.gameMode??"survival"),Kr("房间号已生成。开启后，把它告诉朋友。"),jh(),mr.focus())}function RA(){if(co==="host"&&Dt&&Me===null){hs=null,pr.classList.add("hidden"),An.classList.remove("hidden"),ln(!1);return}hs=null,us(fr)}function G0(i){if(Bn!==null&&(window.clearTimeout(Bn),Bn=null),Gr="",Me=i,Lt("save-quit").textContent=i?"退出房间":"保存并退出",Lt("open-room").classList.toggle("hidden",i!==null),!i){nr.classList.add("hidden");return}i.onPlayersChanged=()=>wa(),i.onServerError=t=>{Me===i&&(Gr=`联机操作未同步
${t}`,wa(),Bn!==null&&window.clearTimeout(Bn),Bn=window.setTimeout(()=>{Bn=null,Gr="",Me===i&&wa()},4e3))},i.onDisconnect=t=>{if(Me!==i)return;Bn!==null&&(window.clearTimeout(Bn),Bn=null),Gr="";const e=(Dt==null?void 0:Dt.isContainerOpen())??!1;e&&(Dt==null||Dt.prepareForSave());const n=ds();Dt==null||Dt.detachMultiplayer(i),Me=null,Lt("open-room").classList.toggle("hidden",!ir),Lt("save-quit").textContent=ir?"保存并退出":"退出房间",nr.classList.remove("hidden"),nr.textContent=ir?`联机已断开 · 本地世界${n?"已保存":"保存失败"}
${t}`:`联机已断开
${t}`,e&&Dt&&(Dt.setTouchActive(!1),ln(!1),An.classList.remove("hidden"))},wa()}function CA(i){const t={};for(const n of i.initialEdits)t[nh(n.dimension,n.x,n.y,n.z)]=n.id;const e=i.room;return{id:`online:${e.id}:${e.seed}`,name:`联机 · ${e.id.toUpperCase()}`,seed:e.seed,gameMode:e.gameMode,lastPlayed:Date.now(),edits:t,worldTime:e.worldTime}}async function Zh(i){if(Oc)return;const t=i==="create"&&co==="host"?hs:null;if(i==="create"&&t===null){Kr("请先进入一个单人世界，再从暂停菜单开启房间。",!0);return}let e=qh(os.value);if(i==="create"&&e.length<3&&(e=W0()),e.length<3){Kr("请输入至少 3 位的房间号。",!0),os.focus();return}const n=L0(mr.value);os.value=e,mr.value=n;try{localStorage.setItem("mineworld.multiplayer.name",n)}catch{}Oc=!0,hh.disabled=!0,uh.disabled=!0,us(null),rn(!0,i==="create"?"正在创建联机房间…":"正在加入联机房间…");try{const s=await Yh.connect({url:MA(),action:i,room:e,name:n,gameMode:O0,world:t?_A(t):void 0});if(t){if(!Dt||!Dt.attachMultiplayer(s))throw s.disconnect("无法切换到联机房间"),new Error("当前世界已经不在单人状态，请返回后重试。");G0(s),hs=null,pr.classList.add("hidden"),An.classList.add("hidden"),rn(!1),ln(!0),ui||dr.requestPointerLock()}else eu(CA(s),s)}catch(s){rn(!1),Kr(s instanceof Error?s.message:"连接联机服务器失败。",!0),jh()}finally{Oc=!1,hh.disabled=!1,uh.disabled=!1}}Lt("multiplayer-play").addEventListener("click",()=>EA());Lt("open-room").addEventListener("click",()=>AA());Lt("mp-create").addEventListener("click",()=>void Zh("create"));Lt("mp-join").addEventListener("click",()=>void Zh("join"));F0.addEventListener("click",()=>RA());for(const i of[mr,os])i.addEventListener("keydown",t=>{t.key==="Enter"&&Zh(co==="host"?"create":"join")});Lt("fullscreen").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()});Lt("about").addEventListener("click",()=>Lt("about-panel").classList.remove("hidden"));Lt("about-close").addEventListener("click",()=>Lt("about-panel").classList.add("hidden"));function DA(){V0(),us(ja)}function V0(){Nc.innerHTML="";const i=g2();if(i.length===0){const t=document.createElement("div");t.className="world-empty",t.textContent="还没有世界, 点 创建新世界 开始吧",Nc.appendChild(t);return}for(const t of i){const e=document.createElement("div");e.className="world-row";const n=document.createElement("span");n.className="wname",n.textContent=t.name;const s=document.createElement("span");s.className="wmeta",s.textContent=`种子 ${t.seed}${t.gameMode==="creative"?" · 创造":""}`;const r=document.createElement("span");r.className="wdel",r.textContent="删除",r.addEventListener("click",o=>{if(o.stopPropagation(),!x2(t.id)){s.textContent="删除失败：浏览器存储不可用";return}V0()}),e.append(n,s,r),e.addEventListener("click",()=>eu(t)),Nc.appendChild(e)}}const Qh=Lt("newworld"),Qa=Lt("nw-name"),Jh=Lt("nw-seed"),X0=Lt("nw-mode-desc");let q0="survival";function tu(i){q0=i,Lt("nw-survival").classList.toggle("active",i==="survival"),Lt("nw-creative").classList.toggle("active",i==="creative"),X0.textContent=i==="creative"?"无限方块、自由飞行（双击空格）、无敌不饿——专心建造。":"挖矿、合成、打怪，会饿会死。"}function Y0(){try{const i=_2(Qa.value,v2(Jh.value)??void 0,q0);Qh.classList.add("hidden"),eu(i)}catch(i){X0.textContent=i instanceof Error?i.message:"创建世界失败，请重试。"}}Lt("nw-survival").addEventListener("click",()=>tu("survival"));Lt("nw-creative").addEventListener("click",()=>tu("creative"));Lt("create-world").addEventListener("click",()=>{Qa.value="",Jh.value="",tu("survival"),Qh.classList.remove("hidden"),Qa.focus()});Lt("nw-create").addEventListener("click",Y0);Lt("nw-cancel").addEventListener("click",()=>Qh.classList.add("hidden"));for(const i of[Qa,Jh])i.addEventListener("keydown",t=>{t.key==="Enter"&&Y0()});Lt("worldlist-back").addEventListener("click",()=>us(fr));function eu(i,t=null){if(Dt||ya){t==null||t.disconnect("游戏已经在运行");return}ya=!0,ir=t===null,G0(t),us(null),rn(!0,"进入中…");try{We==null||We.dispose()}catch(e){console.error("[startGame] 菜单背景释放出错(忽略,继续):",e)}We=null,requestAnimationFrame(()=>requestAnimationFrame(async()=>{try{if(t&&!t.isConnected)throw new Error("联机在进入世界前已断开");rn(!0,"进入中…①构建世界");const e=new aA(dr,i,t);Dt=e,rn(!0,"进入中…②生成出生区块");const n=new AbortController;try{await Promise.race([e.preloadSpawn(3,n.signal),N0(12e3)])}finally{n.abort()}rn(!0,"进入中…③启动渲染"),e.start(),ya=!1,k0=!0,window.__mw=e,rn(!1),ui?(ln(!0),e.setTouchActive(!0)):dr.requestPointerLock()}catch(e){ya=!1,console.error("[startGame] 进入游戏失败:",e),Me===t&&(t==null||t.disconnect("进入世界失败"),Me=null);const n=e instanceof Error?`${e.stack??e.message}`:String(e);rn(!0,`进入失败：${n}`)}}))}function ds(){return!Dt||!ir?!0:E0(Dt.snapshot())}Lt("resume").addEventListener("click",()=>{ui?(An.classList.add("hidden"),ln(!0),Dt==null||Dt.setTouchActive(!0)):dr.requestPointerLock()});Lt("save-quit").addEventListener("click",()=>{const i=(Me==null?void 0:Me.isConnected)===!0;if(ir&&(Dt==null||Dt.prepareForSave()),!ds()){rn(!0,"保存失败：请释放浏览器网站存储空间后重试"),window.setTimeout(()=>rn(!1),4e3);return}Me==null||Me.disconnect("玩家退出房间"),rn(!0,i?"正在退出联机房间…":"保存并返回主菜单…"),location.reload()});const gr=Lt("death");document.addEventListener("pointerlockchange",()=>{if(ui)return;if(document.pointerLockElement===dr)An.classList.add("hidden"),gr.style.display="none",ln(!0);else if(Dt){if(ds(),Dt.isContainerOpen())return;ln(!1),Dt.isDead()?gr.style.display="flex":An.classList.remove("hidden")}});window.addEventListener("mineworld:touch-pause",()=>{!Dt||Dt.isDead()||(Dt.setTouchActive(!1),ds(),ln(!1),An.classList.remove("hidden"))});window.addEventListener("mineworld:death",()=>{ln(!1),An.classList.add("hidden"),gr.style.display="flex"});Lt("respawn").addEventListener("click",()=>{Dt&&(Dt.respawn(),gr.style.display="none",ui?ln(!0):dr.requestPointerLock())});setInterval(()=>{Dt!=null&&Dt.isGameplayActive()&&ds()},15e3);let dh=!1;function $0(){dh||(dh=!0,Dt==null||Dt.prepareForSave(),ds())}window.addEventListener("pagehide",$0);document.addEventListener("visibilitychange",()=>{document.visibilityState!=="hidden"||!Dt||(Dt.setTouchActive(!1),Dt.prepareForSave(),ds(),ln(!1),Dt.isDead()?gr.style.display="flex":An.classList.remove("hidden"))});window.addEventListener("pageshow",()=>{dh=!1,Dt&&(Dt.setTouchActive(!1),ln(!1),Dt.isDead()?gr.style.display="flex":An.classList.remove("hidden"))});window.addEventListener("beforeunload",()=>{$0(),Me==null||Me.disconnect("页面关闭")});
