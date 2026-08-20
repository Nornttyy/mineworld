var d0=Object.defineProperty;var f0=(i,t,e)=>t in i?d0(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var _=(i,t,e)=>(f0(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oc="165",p0=0,Ch=1,m0=2,Uf=1,kf=2,qn=3,Mi=0,Ne=1,Qe=2,_i=0,Us=1,gc=2,Ph=3,Dh=4,g0=5,zi=100,v0=101,_0=102,x0=103,y0=104,M0=200,S0=201,w0=202,b0=203,vc=204,_c=205,T0=206,E0=207,A0=208,R0=209,C0=210,P0=211,D0=212,L0=213,U0=214,k0=0,I0=1,N0=2,la=3,F0=4,O0=5,B0=6,z0=7,If=0,H0=1,W0=2,Jn=0,G0=1,V0=2,X0=3,q0=4,Y0=5,$0=6,K0=7,Nf=300,Gs=301,Vs=302,xc=303,yc=304,Ia=306,dn=1e3,Gi=1001,Mc=1002,ue=1003,Bc=1004,tr=1005,be=1006,Za=1007,Kn=1008,ni=1009,j0=1010,Z0=1011,ca=1012,Ff=1013,Si=1014,gi=1015,bi=1016,Of=1017,Bf=1018,Xs=1020,Q0=35902,J0=1021,tg=1022,hn=1023,eg=1024,ng=1025,ks=1026,qs=1027,zf=1028,Hf=1029,ig=1030,Wf=1031,Gf=1033,Qa=33776,Ja=33777,tl=33778,el=33779,Lh=35840,Uh=35841,kh=35842,Ih=35843,Nh=36196,Fh=37492,Oh=37496,Bh=37808,zh=37809,Hh=37810,Wh=37811,Gh=37812,Vh=37813,Xh=37814,qh=37815,Yh=37816,$h=37817,Kh=37818,jh=37819,Zh=37820,Qh=37821,nl=36492,Jh=36494,tu=36495,sg=36283,eu=36284,nu=36285,iu=36286,og=3200,Vf=3201,Xf=0,rg=1,ln="",ae="srgb",Ti="srgb-linear",zc="display-p3",Na="display-p3-linear",ha="linear",me="srgb",ua="rec709",da="p3",Ji=7680,su=519,ag=512,lg=513,cg=514,qf=515,hg=516,ug=517,dg=518,fg=519,Sc=35044,ou=35048,ru="300 es",jn=2e3,fa=2001;class no{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let au=1234567;const Is=Math.PI/180,Fo=180/Math.PI;function ti(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function We(i,t,e){return Math.max(t,Math.min(e,i))}function Hc(i,t){return(i%t+t)%t}function pg(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function mg(i,t,e){return i!==t?(e-i)/(t-i):0}function Po(i,t,e){return(1-e)*i+e*t}function gg(i,t,e,n){return Po(i,t,1-Math.exp(-e*n))}function vg(i,t=1){return t-Math.abs(Hc(i,t*2)-t)}function _g(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function xg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function yg(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Mg(i,t){return i+Math.random()*(t-i)}function Sg(i){return i*(.5-Math.random())}function wg(i){i!==void 0&&(au=i);let t=au+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bg(i){return i*Is}function Tg(i){return i*Fo}function Eg(i){return(i&i-1)===0&&i!==0}function Ag(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Rg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cg(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),u=o((t-n)/2),d=r((t-n)/2),p=o((n-t)/2),m=r((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Zn={DEG2RAD:Is,RAD2DEG:Fo,generateUUID:ti,clamp:We,euclideanModulo:Hc,mapLinear:pg,inverseLerp:mg,lerp:Po,damp:gg,pingpong:vg,smoothstep:_g,smootherstep:xg,randInt:yg,randFloat:Mg,randFloatSpread:Sg,seededRandom:wg,degToRad:bg,radToDeg:Tg,isPowerOfTwo:Eg,ceilPowerOfTwo:Ag,floorPowerOfTwo:Rg,setQuaternionFromProperEuler:Cg,normalize:oe,denormalize:Rn};class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,s,o,r,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],v=s[0],f=s[3],g=s[6],y=s[1],x=s[4],T=s[7],L=s[2],A=s[5],R=s[8];return o[0]=r*v+a*y+l*L,o[3]=r*f+a*x+l*A,o[6]=r*g+a*T+l*R,o[1]=c*v+h*y+u*L,o[4]=c*f+h*x+u*A,o[7]=c*g+h*T+u*R,o[2]=d*v+p*y+m*L,o[5]=d*f+p*x+m*A,o[8]=d*g+p*T+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,d=a*l-h*o,p=c*o-r*l,m=e*u+n*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*r)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*o-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(r*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(il.makeScale(t,e)),this}rotate(t){return this.premultiply(il.makeRotation(-t)),this}translate(t,e){return this.premultiply(il.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const il=new qt;function Yf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Oo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pg(){const i=Oo("canvas");return i.style.display="block",i}const lu={};function Wc(i){i in lu||(lu[i]=!0,console.warn(i))}function Dg(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const cu=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hu=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),er={[Ti]:{transfer:ha,primaries:ua,toReference:i=>i,fromReference:i=>i},[ae]:{transfer:me,primaries:ua,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Na]:{transfer:ha,primaries:da,toReference:i=>i.applyMatrix3(hu),fromReference:i=>i.applyMatrix3(cu)},[zc]:{transfer:me,primaries:da,toReference:i=>i.convertSRGBToLinear().applyMatrix3(hu),fromReference:i=>i.applyMatrix3(cu).convertLinearToSRGB()}},Lg=new Set([Ti,Na]),re={enabled:!0,_workingColorSpace:Ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Lg.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=er[t].toReference,s=er[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return er[i].primaries},getTransfer:function(i){return i===ln?ha:er[i].transfer}};function Ns(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ts;class Ug{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ts===void 0&&(ts=Oo("canvas")),ts.width=t.width,ts.height=t.height;const n=ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Oo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Ns(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ns(e[n]/255)*255):e[n]=Ns(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kg=0;class $f{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(ol(s[r].image)):o.push(ol(s[r]))}else o=ol(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function ol(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ug.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ig=0;class Oe extends no{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=Gi,s=Gi,o=be,r=Kn,a=hn,l=ni,c=Oe.DEFAULT_ANISOTROPY,h=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=ti(),this.name="",this.source=new $f(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dn:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case Mc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dn:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case Mc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Nf;Oe.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],v=l[2],f=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+f)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,T=(p+1)/2,L=(g+1)/2,A=(h+d)/4,R=(u+v)/4,F=(m+f)/4;return x>T&&x>L?x<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(x),s=A/n,o=R/n):T>L?T<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(T),n=A/s,o=F/s):L<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(L),n=R/o,s=F/o),this.set(n,s,o,e),this}let y=Math.sqrt((f-m)*(f-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(f-m)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ng extends no{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:be,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Oe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $f(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends Ng{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Kf extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ue,this.minFilter=ue,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jf extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ue,this.minFilter=ue,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=o[r+0],p=o[r+1],m=o[r+2],v=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=v;return}if(u!==v||l!==d||c!==p||h!==m){let f=1-a;const g=l*d+c*p+h*m+u*v,y=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const L=Math.sqrt(x),A=Math.atan2(L,g*y);f=Math.sin(f*A)/L,a=Math.sin(a*A)/L}const T=a*y;if(l=l*f+d*T,c=c*f+p*T,h=h*f+m*T,u=u*f+v*T,f===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=o[r],d=o[r+1],p=o[r+2],m=o[r+3];return t[e]=a*m+h*u+l*p-c*d,t[e+1]=l*m+h*d+c*u-a*p,t[e+2]=c*m+h*p+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(o/2),d=l(n/2),p=l(s/2),m=l(o/2);switch(r){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(o-c)*p,this._z=(r-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(o-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(r-s)/p,this._x=(o+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),u=2*(o*n-r*e);return this.x=e+l*c+r*u-a*h,this.y=n+l*h+a*c-o*u,this.z=s+l*u+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rl.copy(this).projectOnVector(t),this.sub(rl)}reflect(t){return this.sub(rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rl=new I,uu=new Ei;class Xo{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,yn):yn.fromBufferAttribute(o,r),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(t.matrixWorld),this.union(nr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ro),ir.subVectors(this.max,ro),es.subVectors(t.a,ro),ns.subVectors(t.b,ro),is.subVectors(t.c,ro),ri.subVectors(ns,es),ai.subVectors(is,ns),Pi.subVectors(es,is);let e=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Pi.z,Pi.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Pi.z,0,-Pi.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Pi.y,Pi.x,0];return!al(e,es,ns,is,ir)||(e=[1,0,0,0,1,0,0,0,1],!al(e,es,ns,is,ir))?!1:(sr.crossVectors(ri,ai),e=[sr.x,sr.y,sr.z],al(e,es,ns,is,ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const On=[new I,new I,new I,new I,new I,new I,new I,new I],yn=new I,nr=new Xo,es=new I,ns=new I,is=new I,ri=new I,ai=new I,Pi=new I,ro=new I,ir=new I,sr=new I,Di=new I;function al(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Di.fromArray(i,o);const a=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),l=t.dot(Di),c=e.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Fg=new Xo,ao=new I,ll=new I;class qo{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Fg.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ao.subVectors(t,this.center);const e=ao.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ao,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ao.copy(t.center).add(ll)),this.expandByPoint(ao.copy(t.center).sub(ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new I,cl=new I,or=new I,li=new I,hl=new I,rr=new I,ul=new I;class Gc{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){cl.copy(t).add(e).multiplyScalar(.5),or.copy(e).sub(t).normalize(),li.copy(this.origin).sub(cl);const o=t.distanceTo(e)*.5,r=-this.direction.dot(or),a=li.dot(this.direction),l=-li.dot(or),c=li.lengthSq(),h=Math.abs(1-r*r);let u,d,p,m;if(h>0)if(u=r*l-a,d=r*a-l,m=o*h,u>=0)if(d>=-m)if(d<=m){const v=1/h;u*=v,d*=v,p=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-l),o),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-o,-l),o),p=d*(d+2*l)+c):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-l),o),p=-u*u+d*(d+2*l)+c);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(cl).addScaledVector(or,d),p}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);const n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,s,o){hl.subVectors(e,t),rr.subVectors(n,t),ul.crossVectors(hl,rr);let r=this.direction.dot(ul),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;li.subVectors(this.origin,t);const l=a*this.direction.dot(rr.crossVectors(li,rr));if(l<0)return null;const c=a*this.direction.dot(hl.cross(li));if(c<0||l+c>r)return null;const h=-a*li.dot(ul);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,s,o,r,a,l,c,h,u,d,p,m,v,f){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,u,d,p,m,v,f)}set(t,e,n,s,o,r,a,l,c,h,u,d,p,m,v,f){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=o,g[5]=r,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=m,g[11]=v,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),o=1/ss.setFromMatrixColumn(t,1).length(),r=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,p=r*u,m=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+m*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=m+p*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,m=c*h,v=c*u;e[0]=d+v*a,e[4]=m*a-p,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=p*a-m,e[6]=v+d*a,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,m=c*h,v=c*u;e[0]=d-v*a,e[4]=-r*u,e[8]=m+p*a,e[1]=p+m*a,e[5]=r*h,e[9]=v-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,p=r*u,m=a*h,v=a*u;e[0]=l*h,e[4]=m*c-p,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=p*c-m,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,p=r*c,m=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=m*u+p,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+m,e[10]=d-v*u}else if(t.order==="XZY"){const d=r*l,p=r*c,m=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=r*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Og,t,Bg)}lookAt(t,e,n){const s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ci.crossVectors(n,sn),ci.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ci.crossVectors(n,sn)),ci.normalize(),ar.crossVectors(sn,ci),s[0]=ci.x,s[4]=ar.x,s[8]=sn.x,s[1]=ci.y,s[5]=ar.y,s[9]=sn.y,s[2]=ci.z,s[6]=ar.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],v=n[6],f=n[10],g=n[14],y=n[3],x=n[7],T=n[11],L=n[15],A=s[0],R=s[4],F=s[8],b=s[12],S=s[1],D=s[5],Y=s[9],q=s[13],j=s[2],tt=s[6],Q=s[10],it=s[14],$=s[3],ft=s[7],bt=s[11],_t=s[15];return o[0]=r*A+a*S+l*j+c*$,o[4]=r*R+a*D+l*tt+c*ft,o[8]=r*F+a*Y+l*Q+c*bt,o[12]=r*b+a*q+l*it+c*_t,o[1]=h*A+u*S+d*j+p*$,o[5]=h*R+u*D+d*tt+p*ft,o[9]=h*F+u*Y+d*Q+p*bt,o[13]=h*b+u*q+d*it+p*_t,o[2]=m*A+v*S+f*j+g*$,o[6]=m*R+v*D+f*tt+g*ft,o[10]=m*F+v*Y+f*Q+g*bt,o[14]=m*b+v*q+f*it+g*_t,o[3]=y*A+x*S+T*j+L*$,o[7]=y*R+x*D+T*tt+L*ft,o[11]=y*F+x*Y+T*Q+L*bt,o[15]=y*b+x*q+T*it+L*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],m=t[3],v=t[7],f=t[11],g=t[15];return m*(+o*l*u-s*c*u-o*a*d+n*c*d+s*a*p-n*l*p)+v*(+e*l*p-e*c*d+o*r*d-s*r*p+s*c*h-o*l*h)+f*(+e*c*u-e*a*p-o*r*u+n*r*p+o*a*h-n*c*h)+g*(-s*a*h-e*l*u+e*a*d+s*r*u-n*r*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],m=t[12],v=t[13],f=t[14],g=t[15],y=u*f*c-v*d*c+v*l*p-a*f*p-u*l*g+a*d*g,x=m*d*c-h*f*c-m*l*p+r*f*p+h*l*g-r*d*g,T=h*v*c-m*u*c+m*a*p-r*v*p-h*a*g+r*u*g,L=m*u*l-h*v*l-m*a*d+r*v*d+h*a*f-r*u*f,A=e*y+n*x+s*T+o*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=y*R,t[1]=(v*d*o-u*f*o-v*s*p+n*f*p+u*s*g-n*d*g)*R,t[2]=(a*f*o-v*l*o+v*s*c-n*f*c-a*s*g+n*l*g)*R,t[3]=(u*l*o-a*d*o-u*s*c+n*d*c+a*s*p-n*l*p)*R,t[4]=x*R,t[5]=(h*f*o-m*d*o+m*s*p-e*f*p-h*s*g+e*d*g)*R,t[6]=(m*l*o-r*f*o-m*s*c+e*f*c+r*s*g-e*l*g)*R,t[7]=(r*d*o-h*l*o+h*s*c-e*d*c-r*s*p+e*l*p)*R,t[8]=T*R,t[9]=(m*u*o-h*v*o-m*n*p+e*v*p+h*n*g-e*u*g)*R,t[10]=(r*v*o-m*a*o+m*n*c-e*v*c-r*n*g+e*a*g)*R,t[11]=(h*a*o-r*u*o-h*n*c+e*u*c+r*n*p-e*a*p)*R,t[12]=L*R,t[13]=(h*v*s-m*u*s+m*n*d-e*v*d-h*n*f+e*u*f)*R,t[14]=(m*a*s-r*v*s-m*n*l+e*v*l+r*n*f-e*a*f)*R,t[15]=(r*u*s-h*a*s+h*n*l-e*u*l-r*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,u=a+a,d=o*c,p=o*h,m=o*u,v=r*h,f=r*u,g=a*u,y=l*c,x=l*h,T=l*u,L=n.x,A=n.y,R=n.z;return s[0]=(1-(v+g))*L,s[1]=(p+T)*L,s[2]=(m-x)*L,s[3]=0,s[4]=(p-T)*A,s[5]=(1-(d+g))*A,s[6]=(f+y)*A,s[7]=0,s[8]=(m+x)*R,s[9]=(f-y)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=ss.set(s[0],s[1],s[2]).length();const r=ss.set(s[4],s[5],s[6]).length(),a=ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);const c=1/o,h=1/r,u=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=jn){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,m;if(a===jn)p=-(r+o)/(r-o),m=-2*r*o/(r-o);else if(a===fa)p=-r/(r-o),m=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=jn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(r-o),d=(e+t)*c,p=(n+s)*h;let m,v;if(a===jn)m=(r+o)*u,v=-2*u;else if(a===fa)m=o*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ss=new I,Mn=new de,Og=new I(0,0,0),Bg=new I(1,1,1),ci=new I,ar=new I,sn=new I,du=new de,fu=new Ei;class Nn{constructor(t=0,e=0,n=0,s=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-We(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return du.makeRotationFromQuaternion(t),this.setFromRotationMatrix(du,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fu.setFromEuler(this),this.setFromQuaternion(fu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class Zf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zg=0;const pu=new I,os=new Ei,zn=new de,lr=new I,lo=new I,Hg=new I,Wg=new Ei,mu=new I(1,0,0),gu=new I(0,1,0),vu=new I(0,0,1),_u={type:"added"},Gg={type:"removed"},rs={type:"childadded",child:null},dl={type:"childremoved",child:null};class Re extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new I,e=new Nn,n=new Ei,s=new I(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new qt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(mu,t)}rotateY(t){return this.rotateOnAxis(gu,t)}rotateZ(t){return this.rotateOnAxis(vu,t)}translateOnAxis(t,e){return pu.copy(t).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mu,t)}translateY(t){return this.translateOnAxis(gu,t)}translateZ(t){return this.translateOnAxis(vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(lo,lr,this.up):zn.lookAt(lr,lo,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(zn),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_u),rs.child=t,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gg),dl.child=t,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_u),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,t,Hg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,Wg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const o=e[n];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++){const a=s[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),p=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Re.DEFAULT_UP=new I(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new I,Hn=new I,fl=new I,Wn=new I,as=new I,ls=new I,xu=new I,pl=new I,ml=new I,gl=new I;class xn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Sn.subVectors(t,e),s.cross(Sn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Sn.subVectors(s,e),Hn.subVectors(n,e),fl.subVectors(t,e);const r=Sn.dot(Sn),a=Sn.dot(Hn),l=Sn.dot(fl),c=Hn.dot(Hn),h=Hn.dot(fl),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,m=(r*h-a*l)*d;return o.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Wn.x),l.addScaledVector(r,Wn.y),l.addScaledVector(a,Wn.z),l)}static isFrontFacing(t,e,n,s){return Sn.subVectors(n,e),Hn.subVectors(t,e),Sn.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Sn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;as.subVectors(s,n),ls.subVectors(o,n),pl.subVectors(t,n);const l=as.dot(pl),c=ls.dot(pl);if(l<=0&&c<=0)return e.copy(n);ml.subVectors(t,s);const h=as.dot(ml),u=ls.dot(ml);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(as,r);gl.subVectors(t,o);const p=as.dot(gl),m=ls.dot(gl);if(m>=0&&p<=m)return e.copy(o);const v=p*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ls,a);const f=h*m-p*u;if(f<=0&&u-h>=0&&p-m>=0)return xu.subVectors(o,s),a=(u-h)/(u-h+(p-m)),e.copy(s).addScaledVector(xu,a);const g=1/(f+v+d);return r=v*g,a=d*g,e.copy(n).addScaledVector(as,r).addScaledVector(ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},cr={h:0,s:0,l:0};function vl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Hc(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=vl(r,o,t+1/3),this.g=vl(r,o,t),this.b=vl(r,o,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=ae){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ae){const n=Qf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}copyLinearToSRGB(t){return this.r=sl(t.r),this.g=sl(t.g),this.b=sl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ae){return re.fromWorkingColorSpace(He.copy(this),t),Math.round(We(He.r*255,0,255))*65536+Math.round(We(He.g*255,0,255))*256+Math.round(We(He.b*255,0,255))}getHexString(t=ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(He.copy(this),e);const n=He.r,s=He.g,o=He.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-n)/u+2;break;case o:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=ae){re.fromWorkingColorSpace(He.copy(this),t);const e=He.r,n=He.g,s=He.b;return t!==ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(cr);const n=Po(hi.h,cr.h,e),s=Po(hi.s,cr.s,e),o=Po(hi.l,cr.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new wt;wt.NAMES=Qf;let Vg=0;class Ai extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Us,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vc,this.blendDst=_c,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vc&&(n.blendSrc=this.blendSrc),this.blendDst!==_c&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==la&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==su&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ye extends Ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=If,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new I,hr=new Ft;class fe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Wc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hr.fromBufferAttribute(this,e),hr.applyMatrix3(t),this.setXY(e,hr.x,hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array),o=oe(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sc&&(t.usage=this.usage),t}}class Jf extends fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class tp extends fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ce extends fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xg=0;const pn=new de,_l=new Re,cs=new I,on=new Xo,co=new Xo,ke=new I;class Be extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yf(t)?tp:Jf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new qt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return _l.lookAt(t),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];on.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];co.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(on.min,co.min),on.expandByPoint(ke),ke.addVectors(on.max,co.max),on.expandByPoint(ke)):(on.expandByPoint(co.min),on.expandByPoint(co.max))}on.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)ke.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ke.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(t,c),ke.add(cs)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fe(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new I,l[F]=new I;const c=new I,h=new I,u=new I,d=new Ft,p=new Ft,m=new Ft,v=new I,f=new I;function g(F,b,S){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(o,F),p.fromBufferAttribute(o,b),m.fromBufferAttribute(o,S),h.sub(c),u.sub(c),p.sub(d),m.sub(d);const D=1/(p.x*m.y-m.x*p.y);isFinite(D)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(D),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(D),a[F].add(v),a[b].add(v),a[S].add(v),l[F].add(f),l[b].add(f),l[S].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let F=0,b=y.length;F<b;++F){const S=y[F],D=S.start,Y=S.count;for(let q=D,j=D+Y;q<j;q+=3)g(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const x=new I,T=new I,L=new I,A=new I;function R(F){L.fromBufferAttribute(s,F),A.copy(L);const b=a[F];x.copy(b),x.sub(L.multiplyScalar(L.dot(b))).normalize(),T.crossVectors(A,b);const D=T.dot(l[F])<0?-1:1;r.setXYZW(F,x.x,x.y,x.z,D)}for(let F=0,b=y.length;F<b;++F){const S=y[F],D=S.start,Y=S.count;for(let q=D,j=D+Y;q<j;q+=3)R(t.getX(q+0)),R(t.getX(q+1)),R(t.getX(q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new I,o=new I,r=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){const m=t.getX(d+0),v=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,v),r.fromBufferAttribute(e,f),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,m=0;for(let v=0,f=l.length;v<f;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let g=0;g<h;g++)d[m++]=c[p++]}return new fe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yu=new de,Li=new Gc,ur=new qo,Mu=new I,hs=new I,us=new I,ds=new I,xl=new I,dr=new I,fr=new Ft,pr=new Ft,mr=new Ft,Su=new I,wu=new I,bu=new I,gr=new I,vr=new I;class Qt extends Re{constructor(t=new Be,e=new ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){dr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],u=o[l];h!==0&&(xl.fromBufferAttribute(u,t),r?dr.addScaledVector(xl,h):dr.addScaledVector(xl.sub(e),h))}e.add(dr)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(o),Li.copy(t.ray).recast(t.near),!(ur.containsPoint(Li.origin)===!1&&(Li.intersectSphere(ur,Mu)===null||Li.origin.distanceToSquared(Mu)>(t.far-t.near)**2))&&(yu.copy(o).invert(),Li.copy(t.ray).applyMatrix4(yu),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,v=d.length;m<v;m++){const f=d[m],g=r[f.materialIndex],y=Math.max(f.start,p.start),x=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let T=y,L=x;T<L;T+=3){const A=a.getX(T),R=a.getX(T+1),F=a.getX(T+2);s=_r(this,g,t,n,c,h,u,A,R,F),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let f=m,g=v;f<g;f+=3){const y=a.getX(f),x=a.getX(f+1),T=a.getX(f+2);s=_r(this,r,t,n,c,h,u,y,x,T),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,v=d.length;m<v;m++){const f=d[m],g=r[f.materialIndex],y=Math.max(f.start,p.start),x=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let T=y,L=x;T<L;T+=3){const A=T,R=T+1,F=T+2;s=_r(this,g,t,n,c,h,u,A,R,F),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let f=m,g=v;f<g;f+=3){const y=f,x=f+1,T=f+2;s=_r(this,r,t,n,c,h,u,y,x,T),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function qg(i,t,e,n,s,o,r,a){let l;if(t.side===Ne?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===Mi,a),l===null)return null;vr.copy(a),vr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(vr);return c<e.near||c>e.far?null:{distance:c,point:vr.clone(),object:i}}function _r(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,hs),i.getVertexPosition(l,us),i.getVertexPosition(c,ds);const h=qg(i,t,e,n,hs,us,ds,gr);if(h){s&&(fr.fromBufferAttribute(s,a),pr.fromBufferAttribute(s,l),mr.fromBufferAttribute(s,c),h.uv=xn.getInterpolation(gr,hs,us,ds,fr,pr,mr,new Ft)),o&&(fr.fromBufferAttribute(o,a),pr.fromBufferAttribute(o,l),mr.fromBufferAttribute(o,c),h.uv1=xn.getInterpolation(gr,hs,us,ds,fr,pr,mr,new Ft)),r&&(Su.fromBufferAttribute(r,a),wu.fromBufferAttribute(r,l),bu.fromBufferAttribute(r,c),h.normal=xn.getInterpolation(gr,hs,us,ds,Su,wu,bu,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new I,materialIndex:0};xn.getNormal(hs,us,ds,u.normal),h.face=u}return h}class Xe extends Be{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,p=0;m("z","y","x",-1,-1,n,e,t,r,o,0),m("z","y","x",1,-1,n,e,-t,r,o,1),m("x","z","y",1,1,t,n,e,s,r,2),m("x","z","y",1,-1,t,n,-e,s,r,3),m("x","y","z",1,-1,t,e,n,s,o,4),m("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2));function m(v,f,g,y,x,T,L,A,R,F,b){const S=T/R,D=L/F,Y=T/2,q=L/2,j=A/2,tt=R+1,Q=F+1;let it=0,$=0;const ft=new I;for(let bt=0;bt<Q;bt++){const _t=bt*D-q;for(let Vt=0;Vt<tt;Vt++){const G=Vt*S-Y;ft[v]=G*y,ft[f]=_t*x,ft[g]=j,c.push(ft.x,ft.y,ft.z),ft[v]=0,ft[f]=0,ft[g]=A>0?1:-1,h.push(ft.x,ft.y,ft.z),u.push(Vt/R),u.push(1-bt/F),it+=1}}for(let bt=0;bt<F;bt++)for(let _t=0;_t<R;_t++){const Vt=d+_t+tt*bt,G=d+_t+tt*(bt+1),P=d+(_t+1)+tt*(bt+1),k=d+(_t+1)+tt*bt;l.push(Vt,G,k),l.push(G,P,k),$+=6}a.addGroup(p,$,b),p+=$,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ys(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function $e(i){const t={};for(let e=0;e<i.length;e++){const n=Ys(i[e]);for(const s in n)t[s]=n[s]}return t}function Yg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ep(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const $g={clone:Ys,merge:$e};var Kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ve extends Ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kg,this.fragmentShader=jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=Yg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class np extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new I,Tu=new Ft,Eu=new Ft;class Ge extends np{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,Tu,Eu),e.subVectors(Eu,Tu)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Is*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fs=-90,ps=1;class Zg extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ge(fs,ps,t,e);s.layers=this.layers,this.add(s);const o=new Ge(fs,ps,t,e);o.layers=this.layers,this.add(o);const r=new Ge(fs,ps,t,e);r.layers=this.layers,this.add(r);const a=new Ge(fs,ps,t,e);a.layers=this.layers,this.add(a);const l=new Ge(fs,ps,t,e);l.layers=this.layers,this.add(l);const c=new Ge(fs,ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ip extends Oe{constructor(t,e,n,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Gs,super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qg extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ip(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:be}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xe(5,5,5),o=new Ve({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:_i});o.uniforms.tEquirect.value=e;const r=new Qt(s,o),a=e.minFilter;return e.minFilter===Kn&&(e.minFilter=be),new Zg(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const yl=new I,Jg=new I,tv=new qt;class En{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=yl.subVectors(n,e).cross(Jg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(yl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||tv.getNormalMatrix(t),s=this.coplanarPoint(yl).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new qo,xr=new I;class Vc{constructor(t=new En,e=new En,n=new En,s=new En,o=new En,r=new En){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],m=s[9],v=s[10],f=s[11],g=s[12],y=s[13],x=s[14],T=s[15];if(n[0].setComponents(l-o,d-c,f-p,T-g).normalize(),n[1].setComponents(l+o,d+c,f+p,T+g).normalize(),n[2].setComponents(l+r,d+h,f+m,T+y).normalize(),n[3].setComponents(l-r,d-h,f-m,T-y).normalize(),n[4].setComponents(l-a,d-u,f-v,T-x).normalize(),e===jn)n[5].setComponents(l+a,d+u,f+v,T+x).normalize();else if(e===fa)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(xr.x=s.normal.x>0?t.max.x:t.min.x,xr.y=s.normal.y>0?t.max.y:t.min.y,xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sp(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function ev(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,a),u.count===-1&&d.length===0&&i.bufferSubData(c,0,h),d.length!==0){for(let p=0,m=d.length;p<m;p++){const v=d[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class tn extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],m=[],v=[],f=[];for(let g=0;g<h;g++){const y=g*d-r;for(let x=0;x<c;x++){const T=x*u-o;m.push(T,-y,0),v.push(0,0,1),f.push(x/a),f.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){const x=y+c*g,T=y+c*(g+1),L=y+1+c*(g+1),A=y+1+c*g;p.push(x,T,A),p.push(T,L,A)}this.setIndex(p),this.setAttribute("position",new Ce(m,3)),this.setAttribute("normal",new Ce(v,3)),this.setAttribute("uv",new Ce(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.width,t.height,t.widthSegments,t.heightSegments)}}var nv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iv=`#ifdef USE_ALPHAHASH
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
#endif`,sv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ov=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,av=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lv=`#ifdef USE_AOMAP
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
#endif`,cv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hv=`#ifdef USE_BATCHING
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
#endif`,uv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,dv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mv=`#ifdef USE_IRIDESCENCE
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
#endif`,gv=`#ifdef USE_BUMPMAP
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
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tv=`#define PI 3.141592653589793
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
} // validated`,Ev=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Av=`vec3 transformedNormal = objectNormal;
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
#endif`,Rv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uv=`
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
}`,kv=`#ifdef USE_ENVMAP
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
#endif`,Iv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nv=`#ifdef USE_ENVMAP
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
#endif`,Fv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ov=`#ifdef USE_ENVMAP
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
#endif`,Bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gv=`#ifdef USE_GRADIENTMAP
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
}`,Vv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yv=`uniform bool receiveShadow;
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
#endif`,$v=`#ifdef USE_ENVMAP
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
#endif`,Kv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jv=`PhysicalMaterial material;
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
#endif`,t_=`struct PhysicalMaterial {
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
}`,e_=`
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
#endif`,n_=`#if defined( RE_IndirectDiffuse )
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
#endif`,i_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u_=`#if defined( USE_POINTS_UV )
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
#endif`,d_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v_=`#ifdef USE_MORPHTARGETS
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
#endif`,__=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,y_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,M_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,b_=`#ifdef USE_NORMALMAP
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
#endif`,T_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,z_=`float getShadowMask() {
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
}`,H_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W_=`#ifdef USE_SKINNING
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
#endif`,G_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V_=`#ifdef USE_SKINNING
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
#endif`,X_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K_=`#ifdef USE_TRANSMISSION
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
#endif`,j_=`#ifdef USE_TRANSMISSION
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
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nx=`uniform sampler2D t2D;
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`#include <common>
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
}`,lx=`#if DEPTH_PACKING == 3200
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
}`,cx=`#define DISTANCE
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
}`,hx=`#define DISTANCE
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`uniform float scale;
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
}`,px=`uniform vec3 diffuse;
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
}`,mx=`#include <common>
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
}`,gx=`uniform vec3 diffuse;
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
}`,vx=`#define LAMBERT
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
}`,_x=`#define LAMBERT
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
}`,xx=`#define MATCAP
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
}`,yx=`#define MATCAP
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
}`,Mx=`#define NORMAL
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
}`,Sx=`#define NORMAL
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
}`,wx=`#define PHONG
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
}`,bx=`#define PHONG
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
}`,Tx=`#define STANDARD
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
}`,Ex=`#define STANDARD
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
}`,Ax=`#define TOON
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
}`,Rx=`#define TOON
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
}`,Cx=`uniform float size;
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
}`,Px=`uniform vec3 diffuse;
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
}`,Dx=`#include <common>
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
}`,Lx=`uniform vec3 color;
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
}`,Ux=`uniform float rotation;
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
}`,kx=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:nv,alphahash_pars_fragment:iv,alphamap_fragment:sv,alphamap_pars_fragment:ov,alphatest_fragment:rv,alphatest_pars_fragment:av,aomap_fragment:lv,aomap_pars_fragment:cv,batching_pars_vertex:hv,batching_vertex:uv,begin_vertex:dv,beginnormal_vertex:fv,bsdfs:pv,iridescence_fragment:mv,bumpmap_pars_fragment:gv,clipping_planes_fragment:vv,clipping_planes_pars_fragment:_v,clipping_planes_pars_vertex:xv,clipping_planes_vertex:yv,color_fragment:Mv,color_pars_fragment:Sv,color_pars_vertex:wv,color_vertex:bv,common:Tv,cube_uv_reflection_fragment:Ev,defaultnormal_vertex:Av,displacementmap_pars_vertex:Rv,displacementmap_vertex:Cv,emissivemap_fragment:Pv,emissivemap_pars_fragment:Dv,colorspace_fragment:Lv,colorspace_pars_fragment:Uv,envmap_fragment:kv,envmap_common_pars_fragment:Iv,envmap_pars_fragment:Nv,envmap_pars_vertex:Fv,envmap_physical_pars_fragment:$v,envmap_vertex:Ov,fog_vertex:Bv,fog_pars_vertex:zv,fog_fragment:Hv,fog_pars_fragment:Wv,gradientmap_pars_fragment:Gv,lightmap_pars_fragment:Vv,lights_lambert_fragment:Xv,lights_lambert_pars_fragment:qv,lights_pars_begin:Yv,lights_toon_fragment:Kv,lights_toon_pars_fragment:jv,lights_phong_fragment:Zv,lights_phong_pars_fragment:Qv,lights_physical_fragment:Jv,lights_physical_pars_fragment:t_,lights_fragment_begin:e_,lights_fragment_maps:n_,lights_fragment_end:i_,logdepthbuf_fragment:s_,logdepthbuf_pars_fragment:o_,logdepthbuf_pars_vertex:r_,logdepthbuf_vertex:a_,map_fragment:l_,map_pars_fragment:c_,map_particle_fragment:h_,map_particle_pars_fragment:u_,metalnessmap_fragment:d_,metalnessmap_pars_fragment:f_,morphinstance_vertex:p_,morphcolor_vertex:m_,morphnormal_vertex:g_,morphtarget_pars_vertex:v_,morphtarget_vertex:__,normal_fragment_begin:x_,normal_fragment_maps:y_,normal_pars_fragment:M_,normal_pars_vertex:S_,normal_vertex:w_,normalmap_pars_fragment:b_,clearcoat_normal_fragment_begin:T_,clearcoat_normal_fragment_maps:E_,clearcoat_pars_fragment:A_,iridescence_pars_fragment:R_,opaque_fragment:C_,packing:P_,premultiplied_alpha_fragment:D_,project_vertex:L_,dithering_fragment:U_,dithering_pars_fragment:k_,roughnessmap_fragment:I_,roughnessmap_pars_fragment:N_,shadowmap_pars_fragment:F_,shadowmap_pars_vertex:O_,shadowmap_vertex:B_,shadowmask_pars_fragment:z_,skinbase_vertex:H_,skinning_pars_vertex:W_,skinning_vertex:G_,skinnormal_vertex:V_,specularmap_fragment:X_,specularmap_pars_fragment:q_,tonemapping_fragment:Y_,tonemapping_pars_fragment:$_,transmission_fragment:K_,transmission_pars_fragment:j_,uv_pars_fragment:Z_,uv_pars_vertex:Q_,uv_vertex:J_,worldpos_vertex:tx,background_vert:ex,background_frag:nx,backgroundCube_vert:ix,backgroundCube_frag:sx,cube_vert:ox,cube_frag:rx,depth_vert:ax,depth_frag:lx,distanceRGBA_vert:cx,distanceRGBA_frag:hx,equirect_vert:ux,equirect_frag:dx,linedashed_vert:fx,linedashed_frag:px,meshbasic_vert:mx,meshbasic_frag:gx,meshlambert_vert:vx,meshlambert_frag:_x,meshmatcap_vert:xx,meshmatcap_frag:yx,meshnormal_vert:Mx,meshnormal_frag:Sx,meshphong_vert:wx,meshphong_frag:bx,meshphysical_vert:Tx,meshphysical_frag:Ex,meshtoon_vert:Ax,meshtoon_frag:Rx,points_vert:Cx,points_frag:Px,shadow_vert:Dx,shadow_frag:Lx,sprite_vert:Ux,sprite_frag:kx},dt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},In={basic:{uniforms:$e([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:$e([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:$e([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:$e([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:$e([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:$e([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:$e([dt.points,dt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:$e([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:$e([dt.common,dt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:$e([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:$e([dt.sprite,dt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:$e([dt.common,dt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:$e([dt.lights,dt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};In.physical={uniforms:$e([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const yr={r:0,b:0,g:0},ki=new Nn,Ix=new de;function Nx(i,t,e,n,s,o,r){const a=new wt(0);let l=o===!0?0:1,c,h,u=null,d=0,p=null;function m(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function v(y){let x=!1;const T=m(y);T===null?g(a,l):T&&T.isColor&&(g(T,1),x=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(y,x){const T=m(x);T&&(T.isCubeTexture||T.mapping===Ia)?(h===void 0&&(h=new Qt(new Xe(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:Ys(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ki.copy(x.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ix.makeRotationFromEuler(ki)),h.material.toneMapped=re.getTransfer(T.colorSpace)!==me,(u!==T||d!==T.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Qt(new tn(2,2),new Ve({name:"BackgroundMaterial",uniforms:Ys(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=re.getTransfer(T.colorSpace)!==me,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,x){y.getRGB(yr,ep(i)),n.buffers.color.setClear(yr.r,yr.g,yr.b,x,r)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,g(a,l)},render:v,addToRenderList:f}}function Fx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(S,D,Y,q,j){let tt=!1;const Q=u(q,Y,D);o!==Q&&(o=Q,c(o.object)),tt=p(S,q,Y,j),tt&&m(S,q,Y,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(tt||r)&&(r=!1,T(S,D,Y,q),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,D,Y){const q=Y.wireframe===!0;let j=n[S.id];j===void 0&&(j={},n[S.id]=j);let tt=j[D.id];tt===void 0&&(tt={},j[D.id]=tt);let Q=tt[q];return Q===void 0&&(Q=d(l()),tt[q]=Q),Q}function d(S){const D=[],Y=[],q=[];for(let j=0;j<e;j++)D[j]=0,Y[j]=0,q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Y,attributeDivisors:q,object:S,attributes:{},index:null}}function p(S,D,Y,q){const j=o.attributes,tt=D.attributes;let Q=0;const it=Y.getAttributes();for(const $ in it)if(it[$].location>=0){const bt=j[$];let _t=tt[$];if(_t===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(_t=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(_t=S.instanceColor)),bt===void 0||bt.attribute!==_t||_t&&bt.data!==_t.data)return!0;Q++}return o.attributesNum!==Q||o.index!==q}function m(S,D,Y,q){const j={},tt=D.attributes;let Q=0;const it=Y.getAttributes();for(const $ in it)if(it[$].location>=0){let bt=tt[$];bt===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(bt=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(bt=S.instanceColor));const _t={};_t.attribute=bt,bt&&bt.data&&(_t.data=bt.data),j[$]=_t,Q++}o.attributes=j,o.attributesNum=Q,o.index=q}function v(){const S=o.newAttributes;for(let D=0,Y=S.length;D<Y;D++)S[D]=0}function f(S){g(S,0)}function g(S,D){const Y=o.newAttributes,q=o.enabledAttributes,j=o.attributeDivisors;Y[S]=1,q[S]===0&&(i.enableVertexAttribArray(S),q[S]=1),j[S]!==D&&(i.vertexAttribDivisor(S,D),j[S]=D)}function y(){const S=o.newAttributes,D=o.enabledAttributes;for(let Y=0,q=D.length;Y<q;Y++)D[Y]!==S[Y]&&(i.disableVertexAttribArray(Y),D[Y]=0)}function x(S,D,Y,q,j,tt,Q){Q===!0?i.vertexAttribIPointer(S,D,Y,j,tt):i.vertexAttribPointer(S,D,Y,q,j,tt)}function T(S,D,Y,q){v();const j=q.attributes,tt=Y.getAttributes(),Q=D.defaultAttributeValues;for(const it in tt){const $=tt[it];if($.location>=0){let ft=j[it];if(ft===void 0&&(it==="instanceMatrix"&&S.instanceMatrix&&(ft=S.instanceMatrix),it==="instanceColor"&&S.instanceColor&&(ft=S.instanceColor)),ft!==void 0){const bt=ft.normalized,_t=ft.itemSize,Vt=t.get(ft);if(Vt===void 0)continue;const G=Vt.buffer,P=Vt.type,k=Vt.bytesPerElement,V=P===i.INT||P===i.UNSIGNED_INT||ft.gpuType===Ff;if(ft.isInterleavedBufferAttribute){const O=ft.data,H=O.stride,at=ft.offset;if(O.isInstancedInterleavedBuffer){for(let St=0;St<$.locationSize;St++)g($.location+St,O.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let St=0;St<$.locationSize;St++)f($.location+St);i.bindBuffer(i.ARRAY_BUFFER,G);for(let St=0;St<$.locationSize;St++)x($.location+St,_t/$.locationSize,P,bt,H*k,(at+_t/$.locationSize*St)*k,V)}else{if(ft.isInstancedBufferAttribute){for(let O=0;O<$.locationSize;O++)g($.location+O,ft.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let O=0;O<$.locationSize;O++)f($.location+O);i.bindBuffer(i.ARRAY_BUFFER,G);for(let O=0;O<$.locationSize;O++)x($.location+O,_t/$.locationSize,P,bt,_t*k,_t/$.locationSize*O*k,V)}}else if(Q!==void 0){const bt=Q[it];if(bt!==void 0)switch(bt.length){case 2:i.vertexAttrib2fv($.location,bt);break;case 3:i.vertexAttrib3fv($.location,bt);break;case 4:i.vertexAttrib4fv($.location,bt);break;default:i.vertexAttrib1fv($.location,bt)}}}}y()}function L(){F();for(const S in n){const D=n[S];for(const Y in D){const q=D[Y];for(const j in q)h(q[j].object),delete q[j];delete D[Y]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const Y in D){const q=D[Y];for(const j in q)h(q[j].object),delete q[j];delete D[Y]}delete n[S.id]}function R(S){for(const D in n){const Y=n[D];if(Y[S.id]===void 0)continue;const q=Y[S.id];for(const j in q)h(q[j].object),delete q[j];delete Y[S.id]}}function F(){b(),r=!0,o!==s&&(o=s,c(o.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:f,disableUnusedAttributes:y}}function Ox(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<u;p++)this.render(c[p],h[p]);else{d.multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)r(c[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v];for(let v=0;v<d.length;v++)e.update(m,n,d[v])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Bx(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(A){return!(A!==hn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ni&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==gi&&!R)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:v,maxAttributes:f,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:T,maxSamples:L}}function zx(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new En,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const m=u.clippingPlanes,v=u.clipIntersection,f=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||o&&!f)o?h(null):c();else{const y=o?0:n,x=y*4;let T=g.clippingState||null;l.value=T,T=h(m,d,x,p);for(let L=0;L!==x;++L)T[L]=e[L];g.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,m){const v=u!==null?u.length:0;let f=null;if(v!==0){if(f=l.value,m!==!0||f===null){const g=p+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(f===null||f.length<g)&&(f=new Float32Array(g));for(let x=0,T=p;x!==v;++x,T+=4)r.copy(u[x]).applyMatrix4(y,a),r.normal.toArray(f,T),f[T+3]=r.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}function Hx(i){let t=new WeakMap;function e(r,a){return a===xc?r.mapping=Gs:a===yc&&(r.mapping=Vs),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===xc||a===yc)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Qg(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Bo extends np{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Rs=4,Au=[.125,.215,.35,.446,.526,.582],Hi=20,Ml=new Bo,Ru=new wt;let Sl=null,wl=0,bl=0,Tl=!1;const Bi=(1+Math.sqrt(5))/2,ms=1/Bi,Cu=[new I(-Bi,ms,0),new I(Bi,ms,0),new I(-ms,0,Bi),new I(ms,0,Bi),new I(0,Bi,-ms),new I(0,Bi,ms),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Pu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Sl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sl,wl,bl),this._renderer.xr.enabled=Tl,t.scissorTest=!1,Mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gs||t.mapping===Vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:be,minFilter:be,generateMipmaps:!1,type:bi,format:hn,colorSpace:Ti,depthBuffer:!1},s=Du(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Du(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wx(o)),this._blurMaterial=Gx(o,t,e)}return s}_compileMaterial(t){const e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,Ml)}_sceneToCubeUV(t,e,n,s){const a=new Ge(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ru),h.toneMapping=Jn,h.autoClear=!1;const p=new ye({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),m=new Qt(new Xe,p);let v=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,v=!0):(p.color.copy(Ru),v=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):y===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const x=this._cubeSize;Mr(s,y*x,g>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Gs||t.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lu());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Qt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Mr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Ml)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Cu[(s-o-1)%Cu.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Qt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Hi-1),v=o/m,f=isFinite(o)?1+Math.floor(h*v):Hi;f>Hi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Hi}`);const g=[];let y=0;for(let R=0;R<Hi;++R){const F=R/v,b=Math.exp(-F*F/2);g.push(b),R===0?y+=b:R<f&&(y+=2*b)}for(let R=0;R<g.length;R++)g[R]=g[R]/y;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=g,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;const T=this._sizeLods[s],L=3*T*(s>x-Rs?s-x+Rs:0),A=4*(this._cubeSize-T);Mr(e,L,A,3*T,2*T),l.setRenderTarget(e),l.render(u,Ml)}}function Wx(i){const t=[],e=[],n=[];let s=i;const o=i-Rs+1+Au.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>i-Rs?l=Au[r-i+Rs-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,v=3,f=2,g=1,y=new Float32Array(v*m*p),x=new Float32Array(f*m*p),T=new Float32Array(g*m*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,F=A>2?0:-1,b=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];y.set(b,v*m*A),x.set(d,f*m*A);const S=[A,A,A,A,A,A];T.set(S,g*m*A)}const L=new Be;L.setAttribute("position",new fe(y,v)),L.setAttribute("uv",new fe(x,f)),L.setAttribute("faceIndex",new fe(T,g)),t.push(L),s>Rs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Du(i,t,e){const n=new Cn(i,t,e);return n.texture.mapping=Ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Gx(i,t,e){const n=new Float32Array(Hi),s=new I(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Lu(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Uu(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Xc(){return`

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
	`}function Vx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===xc||l===yc,h=l===Gs||l===Vs;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Pu(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Pu(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Xx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Wc("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qx(i,t,e,n){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const v=d.morphAttributes[m];for(let f=0,g=v.length;f<g;f++)t.remove(v[f])}d.removeEventListener("dispose",r),delete s[d.id];const p=o.get(d);p&&(t.remove(p),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const m in p){const v=p[m];for(let f=0,g=v.length;f<g;f++)t.update(v[f],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,m=u.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let x=0,T=y.length;x<T;x+=3){const L=y[x+0],A=y[x+1],R=y[x+2];d.push(L,A,A,R,R,L)}}else if(m!==void 0){const y=m.array;v=m.version;for(let x=0,T=y.length/3-1;x<T;x+=3){const L=x+0,A=x+1,R=x+2;d.push(L,A,A,R,R,L)}}else return;const f=new(Yf(d)?tp:Jf)(d,1);f.version=v;const g=o.get(u);g&&t.remove(g),o.set(u,f)}function h(u){const d=o.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Yx(i,t,e){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function l(d,p){i.drawElements(n,p,o,d*r),e.update(p,n,1)}function c(d,p,m){m!==0&&(i.drawElementsInstanced(n,p,o,d*r,m),e.update(p,n,m))}function h(d,p,m){if(m===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let f=0;f<m;f++)this.render(d[f]/r,p[f]);else{v.multiDrawElementsWEBGL(n,p,0,o,d,0,m);let f=0;for(let g=0;g<m;g++)f+=p[g];e.update(f,n,1)}}function u(d,p,m,v){if(m===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d.length;g++)c(d[g]/r,p[g],v[g]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,o,d,0,v,0,m);let g=0;for(let y=0;y<m;y++)g+=p[y];for(let y=0;y<v.length;y++)e.update(g,n,v[y])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $x(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Kx(i,t,e){const n=new WeakMap,s=new ge;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let T=0;m===!0&&(T=1),v===!0&&(T=2),f===!0&&(T=3);let L=a.attributes.position.count*T,A=1;L>t.maxTextureSize&&(A=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const R=new Float32Array(L*A*4*u),F=new Kf(R,L,A,u);F.type=gi,F.needsUpdate=!0;const b=T*4;for(let D=0;D<u;D++){const Y=g[D],q=y[D],j=x[D],tt=L*A*4*D;for(let Q=0;Q<Y.count;Q++){const it=Q*b;m===!0&&(s.fromBufferAttribute(Y,Q),R[tt+it+0]=s.x,R[tt+it+1]=s.y,R[tt+it+2]=s.z,R[tt+it+3]=0),v===!0&&(s.fromBufferAttribute(q,Q),R[tt+it+4]=s.x,R[tt+it+5]=s.y,R[tt+it+6]=s.z,R[tt+it+7]=0),f===!0&&(s.fromBufferAttribute(j,Q),R[tt+it+8]=s.x,R[tt+it+9]=s.y,R[tt+it+10]=s.z,R[tt+it+11]=j.itemSize===4?s.w:1)}}d={count:u,texture:F,size:new Ft(L,A)},n.set(a,d),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let m=0;for(let f=0;f<c.length;f++)m+=c[f];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function jx(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class Fa extends Oe{constructor(t,e,n,s,o,r,a,l,c,h=ks){if(h!==ks&&h!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ks&&(n=Si),n===void 0&&h===qs&&(n=Xs),super(null,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ue,this.minFilter=l!==void 0?l:ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const op=new Oe,rp=new Fa(1,1);rp.compareFunction=qf;const ap=new Kf,lp=new jf,cp=new ip,ku=[],Iu=[],Nu=new Float32Array(16),Fu=new Float32Array(9),Ou=new Float32Array(4);function io(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=ku[s];if(o===void 0&&(o=new Float32Array(s),ku[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Oa(i,t){let e=Iu[t];e===void 0&&(e=new Int32Array(t),Iu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function Jx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function ty(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function ey(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Pe(e,n))return;Ou.set(n),i.uniformMatrix2fv(this.addr,!1,Ou),De(e,n)}}function ny(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Pe(e,n))return;Fu.set(n),i.uniformMatrix3fv(this.addr,!1,Fu),De(e,n)}}function iy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Pe(e,n))return;Nu.set(n),i.uniformMatrix4fv(this.addr,!1,Nu),De(e,n)}}function sy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function oy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function ry(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function ay(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function ly(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function cy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function hy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function uy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function dy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const o=this.type===i.SAMPLER_2D_SHADOW?rp:op;e.setTexture2D(t||o,s)}function fy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||lp,s)}function py(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||cp,s)}function my(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ap,s)}function gy(i){switch(i){case 5126:return Zx;case 35664:return Qx;case 35665:return Jx;case 35666:return ty;case 35674:return ey;case 35675:return ny;case 35676:return iy;case 5124:case 35670:return sy;case 35667:case 35671:return oy;case 35668:case 35672:return ry;case 35669:case 35673:return ay;case 5125:return ly;case 36294:return cy;case 36295:return hy;case 36296:return uy;case 35678:case 36198:case 36298:case 36306:case 35682:return dy;case 35679:case 36299:case 36307:return fy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}function vy(i,t){i.uniform1fv(this.addr,t)}function _y(i,t){const e=io(t,this.size,2);i.uniform2fv(this.addr,e)}function xy(i,t){const e=io(t,this.size,3);i.uniform3fv(this.addr,e)}function yy(i,t){const e=io(t,this.size,4);i.uniform4fv(this.addr,e)}function My(i,t){const e=io(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Sy(i,t){const e=io(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wy(i,t){const e=io(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function by(i,t){i.uniform1iv(this.addr,t)}function Ty(i,t){i.uniform2iv(this.addr,t)}function Ey(i,t){i.uniform3iv(this.addr,t)}function Ay(i,t){i.uniform4iv(this.addr,t)}function Ry(i,t){i.uniform1uiv(this.addr,t)}function Cy(i,t){i.uniform2uiv(this.addr,t)}function Py(i,t){i.uniform3uiv(this.addr,t)}function Dy(i,t){i.uniform4uiv(this.addr,t)}function Ly(i,t,e){const n=this.cache,s=t.length,o=Oa(e,s);Pe(n,o)||(i.uniform1iv(this.addr,o),De(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||op,o[r])}function Uy(i,t,e){const n=this.cache,s=t.length,o=Oa(e,s);Pe(n,o)||(i.uniform1iv(this.addr,o),De(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||lp,o[r])}function ky(i,t,e){const n=this.cache,s=t.length,o=Oa(e,s);Pe(n,o)||(i.uniform1iv(this.addr,o),De(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||cp,o[r])}function Iy(i,t,e){const n=this.cache,s=t.length,o=Oa(e,s);Pe(n,o)||(i.uniform1iv(this.addr,o),De(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||ap,o[r])}function Ny(i){switch(i){case 5126:return vy;case 35664:return _y;case 35665:return xy;case 35666:return yy;case 35674:return My;case 35675:return Sy;case 35676:return wy;case 5124:case 35670:return by;case 35667:case 35671:return Ty;case 35668:case 35672:return Ey;case 35669:case 35673:return Ay;case 5125:return Ry;case 36294:return Cy;case 36295:return Py;case 36296:return Dy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Uy;case 35680:case 36300:case 36308:case 36293:return ky;case 36289:case 36303:case 36311:case 36292:return Iy}}class Fy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gy(e.type)}}class Oy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ny(e.type)}}class By{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const El=/(\w+)(\])?(\[|\.)?/g;function Bu(i,t){i.seq.push(t),i.map[t.id]=t}function zy(i,t,e){const n=i.name,s=n.length;for(El.lastIndex=0;;){const o=El.exec(n),r=El.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){Bu(e,c===void 0?new Fy(a,i,t):new Oy(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new By(a),Bu(e,u)),e=u}}}class oa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);zy(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function zu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Hy=37297;let Wy=0;function Gy(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function Vy(i){const t=re.getPrimaries(re.workingColorSpace),e=re.getPrimaries(i);let n;switch(t===e?n="":t===da&&e===ua?n="LinearDisplayP3ToLinearSRGB":t===ua&&e===da&&(n="LinearSRGBToLinearDisplayP3"),i){case Ti:case Na:return[n,"LinearTransferOETF"];case ae:case zc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Hu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Gy(i.getShaderSource(t),r)}else return s}function Xy(i,t){const e=Vy(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function qy(i,t){let e;switch(t){case G0:e="Linear";break;case V0:e="Reinhard";break;case X0:e="OptimizedCineon";break;case q0:e="ACESFilmic";break;case $0:e="AgX";break;case K0:e="Neutral";break;case Y0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Yy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function $y(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ky(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function bo(i){return i!==""}function Wu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jy=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(i){return i.replace(jy,Qy)}const Zy=new Map;function Qy(i,t){let e=Xt[t];if(e===void 0){const n=Zy.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wc(e)}const Jy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(i){return i.replace(Jy,tM)}function tM(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Xu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function eM(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===kf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function nM(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gs:case Vs:t="ENVMAP_TYPE_CUBE";break;case Ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function iM(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vs:t="ENVMAP_MODE_REFRACTION";break}return t}function sM(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case If:t="ENVMAP_BLENDING_MULTIPLY";break;case H0:t="ENVMAP_BLENDING_MIX";break;case W0:t="ENVMAP_BLENDING_ADD";break}return t}function oM(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function rM(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=eM(e),c=nM(e),h=iM(e),u=sM(e),d=oM(e),p=Yy(e),m=$y(o),v=s.createProgram();let f,g,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(bo).join(`
`),f.length>0&&(f+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(bo).join(`
`),g.length>0&&(g+=`
`)):(f=[Xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),g=[Xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?qy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Xy("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bo).join(`
`)),r=wc(r),r=Wu(r,e),r=Gu(r,e),a=wc(a),a=Wu(a,e),a=Gu(a,e),r=Vu(r),a=Vu(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",e.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=y+f+r,T=y+g+a,L=zu(s,s.VERTEX_SHADER,x),A=zu(s,s.FRAGMENT_SHADER,T);s.attachShader(v,L),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(D){if(i.debug.checkShaderErrors){const Y=s.getProgramInfoLog(v).trim(),q=s.getShaderInfoLog(L).trim(),j=s.getShaderInfoLog(A).trim();let tt=!0,Q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,A);else{const it=Hu(s,L,"vertex"),$=Hu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Y+`
`+it+`
`+$)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(q===""||j==="")&&(Q=!1);Q&&(D.diagnostics={runnable:tt,programLog:Y,vertexShader:{log:q,prefix:f},fragmentShader:{log:j,prefix:g}})}s.deleteShader(L),s.deleteShader(A),F=new oa(s,v),b=Ky(s,v)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,Hy)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wy++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=A,this}let aM=0;class lM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new cM(t),e.set(t,n)),n}}class cM{constructor(t){this.id=aM++,this.code=t,this.usedTimes=0}}function hM(i,t,e,n,s,o,r){const a=new Zf,l=new lM,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function f(b,S,D,Y,q){const j=Y.fog,tt=q.geometry,Q=b.isMeshStandardMaterial?Y.environment:null,it=(b.isMeshStandardMaterial?e:t).get(b.envMap||Q),$=it&&it.mapping===Ia?it.image.height:null,ft=m[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const bt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,_t=bt!==void 0?bt.length:0;let Vt=0;tt.morphAttributes.position!==void 0&&(Vt=1),tt.morphAttributes.normal!==void 0&&(Vt=2),tt.morphAttributes.color!==void 0&&(Vt=3);let G,P,k,V;if(ft){const le=In[ft];G=le.vertexShader,P=le.fragmentShader}else G=b.vertexShader,P=b.fragmentShader,l.update(b),k=l.getVertexShaderID(b),V=l.getFragmentShaderID(b);const O=i.getRenderTarget(),H=q.isInstancedMesh===!0,at=q.isBatchedMesh===!0,St=!!b.map,C=!!b.matcap,pt=!!it,ot=!!b.aoMap,mt=!!b.lightMap,ct=!!b.bumpMap,Ut=!!b.normalMap,Tt=!!b.displacementMap,xt=!!b.emissiveMap,Wt=!!b.metalnessMap,E=!!b.roughnessMap,M=b.anisotropy>0,z=b.clearcoat>0,K=b.dispersion>0,J=b.iridescence>0,nt=b.sheen>0,Et=b.transmission>0,ut=M&&!!b.anisotropyMap,ht=z&&!!b.clearcoatMap,Gt=z&&!!b.clearcoatNormalMap,st=z&&!!b.clearcoatRoughnessMap,Rt=J&&!!b.iridescenceMap,$t=J&&!!b.iridescenceThicknessMap,Nt=nt&&!!b.sheenColorMap,gt=nt&&!!b.sheenRoughnessMap,Yt=!!b.specularMap,jt=!!b.specularColorMap,Me=!!b.specularIntensityMap,U=Et&&!!b.transmissionMap,yt=Et&&!!b.thicknessMap,Z=!!b.gradientMap,et=!!b.alphaMap,lt=b.alphaTest>0,zt=!!b.alphaHash,ne=!!b.extensions;let Se=Jn;b.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Se=i.toneMapping);const Le={shaderID:ft,shaderType:b.type,shaderName:b.name,vertexShader:G,fragmentShader:P,defines:b.defines,customVertexShaderID:k,customFragmentShaderID:V,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:at,batchingColor:at&&q._colorsTexture!==null,instancing:H,instancingColor:H&&q.instanceColor!==null,instancingMorph:H&&q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:O===null?i.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ti,alphaToCoverage:!!b.alphaToCoverage,map:St,matcap:C,envMap:pt,envMapMode:pt&&it.mapping,envMapCubeUVHeight:$,aoMap:ot,lightMap:mt,bumpMap:ct,normalMap:Ut,displacementMap:d&&Tt,emissiveMap:xt,normalMapObjectSpace:Ut&&b.normalMapType===rg,normalMapTangentSpace:Ut&&b.normalMapType===Xf,metalnessMap:Wt,roughnessMap:E,anisotropy:M,anisotropyMap:ut,clearcoat:z,clearcoatMap:ht,clearcoatNormalMap:Gt,clearcoatRoughnessMap:st,dispersion:K,iridescence:J,iridescenceMap:Rt,iridescenceThicknessMap:$t,sheen:nt,sheenColorMap:Nt,sheenRoughnessMap:gt,specularMap:Yt,specularColorMap:jt,specularIntensityMap:Me,transmission:Et,transmissionMap:U,thicknessMap:yt,gradientMap:Z,opaque:b.transparent===!1&&b.blending===Us&&b.alphaToCoverage===!1,alphaMap:et,alphaTest:lt,alphaHash:zt,combine:b.combine,mapUv:St&&v(b.map.channel),aoMapUv:ot&&v(b.aoMap.channel),lightMapUv:mt&&v(b.lightMap.channel),bumpMapUv:ct&&v(b.bumpMap.channel),normalMapUv:Ut&&v(b.normalMap.channel),displacementMapUv:Tt&&v(b.displacementMap.channel),emissiveMapUv:xt&&v(b.emissiveMap.channel),metalnessMapUv:Wt&&v(b.metalnessMap.channel),roughnessMapUv:E&&v(b.roughnessMap.channel),anisotropyMapUv:ut&&v(b.anisotropyMap.channel),clearcoatMapUv:ht&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:gt&&v(b.sheenRoughnessMap.channel),specularMapUv:Yt&&v(b.specularMap.channel),specularColorMapUv:jt&&v(b.specularColorMap.channel),specularIntensityMapUv:Me&&v(b.specularIntensityMap.channel),transmissionMapUv:U&&v(b.transmissionMap.channel),thicknessMapUv:yt&&v(b.thicknessMap.channel),alphaMapUv:et&&v(b.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(Ut||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!tt.attributes.uv&&(St||et),fog:!!j,useFog:b.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:q.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Vt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:St&&b.map.isVideoTexture===!0&&re.getTransfer(b.map.colorSpace)===me,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Qe,flipSided:b.side===Ne,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ne&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ne&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(y(S,b),x(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function y(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function x(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),b.push(a.mask)}function T(b){const S=m[b.type];let D;if(S){const Y=In[S];D=$g.clone(Y.uniforms)}else D=b.uniforms;return D}function L(b,S){let D;for(let Y=0,q=h.length;Y<q;Y++){const j=h[Y];if(j.cacheKey===S){D=j,++D.usedTimes;break}}return D===void 0&&(D=new rM(i,S,b,o),h.push(D)),D}function A(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function F(){l.dispose()}return{getParameters:f,getProgramCacheKey:g,getUniforms:T,acquireProgram:L,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:F}}function uM(){let i=new WeakMap;function t(o){let r=i.get(o);return r===void 0&&(r={},i.set(o,r)),r}function e(o){i.delete(o)}function n(o,r,a){i.get(o)[r]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function dM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function qu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yu(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u,d,p,m,v,f){let g=i[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:v,group:f},i[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=p,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=v,g.group=f),t++,g}function a(u,d,p,m,v,f){const g=r(u,d,p,m,v,f);p.transmission>0?n.push(g):p.transparent===!0?s.push(g):e.push(g)}function l(u,d,p,m,v,f){const g=r(u,d,p,m,v,f);p.transmission>0?n.unshift(g):p.transparent===!0?s.unshift(g):e.unshift(g)}function c(u,d){e.length>1&&e.sort(u||dM),n.length>1&&n.sort(d||qu),s.length>1&&s.sort(d||qu)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function fM(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Yu,i.set(n,[r])):s>=o.length?(r=new Yu,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function pM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new wt};break;case"SpotLight":e={position:new I,direction:new I,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function mM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let gM=0;function vM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _M(i){const t=new pM,e=mM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,o=new de,r=new de;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,m=0,v=0,f=0,g=0,y=0,x=0,T=0,L=0,A=0,R=0;c.sort(vM);for(let b=0,S=c.length;b<S;b++){const D=c[b],Y=D.color,q=D.intensity,j=D.distance,tt=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=Y.r*q,u+=Y.g*q,d+=Y.b*q;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(D.sh.coefficients[Q],q);R++}else if(D.isDirectionalLight){const Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const it=D.shadow,$=e.get(D);$.shadowBias=it.bias,$.shadowNormalBias=it.normalBias,$.shadowRadius=it.radius,$.shadowMapSize=it.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=tt,n.directionalShadowMatrix[p]=D.shadow.matrix,y++}n.directional[p]=Q,p++}else if(D.isSpotLight){const Q=t.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(Y).multiplyScalar(q),Q.distance=j,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,n.spot[v]=Q;const it=D.shadow;if(D.map&&(n.spotLightMap[L]=D.map,L++,it.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[v]=it.matrix,D.castShadow){const $=e.get(D);$.shadowBias=it.bias,$.shadowNormalBias=it.normalBias,$.shadowRadius=it.radius,$.shadowMapSize=it.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=tt,T++}v++}else if(D.isRectAreaLight){const Q=t.get(D);Q.color.copy(Y).multiplyScalar(q),Q.halfWidth.set(D.width*.5,0,0),Q.halfHeight.set(0,D.height*.5,0),n.rectArea[f]=Q,f++}else if(D.isPointLight){const Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){const it=D.shadow,$=e.get(D);$.shadowBias=it.bias,$.shadowNormalBias=it.normalBias,$.shadowRadius=it.radius,$.shadowMapSize=it.mapSize,$.shadowCameraNear=it.camera.near,$.shadowCameraFar=it.camera.far,n.pointShadow[m]=$,n.pointShadowMap[m]=tt,n.pointShadowMatrix[m]=D.shadow.matrix,x++}n.point[m]=Q,m++}else if(D.isHemisphereLight){const Q=t.get(D);Q.skyColor.copy(D.color).multiplyScalar(q),Q.groundColor.copy(D.groundColor).multiplyScalar(q),n.hemi[g]=Q,g++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const F=n.hash;(F.directionalLength!==p||F.pointLength!==m||F.spotLength!==v||F.rectAreaLength!==f||F.hemiLength!==g||F.numDirectionalShadows!==y||F.numPointShadows!==x||F.numSpotShadows!==T||F.numSpotMaps!==L||F.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=f,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=T+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,F.directionalLength=p,F.pointLength=m,F.spotLength=v,F.rectAreaLength=f,F.hemiLength=g,F.numDirectionalShadows=y,F.numPointShadows=x,F.numSpotShadows=T,F.numSpotMaps=L,F.numLightProbes=R,n.version=gM++)}function l(c,h){let u=0,d=0,p=0,m=0,v=0;const f=h.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){const x=c[g];if(x.isDirectionalLight){const T=n.directional[u];T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),u++}else if(x.isSpotLight){const T=n.spot[p];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),p++}else if(x.isRectAreaLight){const T=n.rectArea[m];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(f),r.identity(),o.copy(x.matrixWorld),o.premultiply(f),r.extractRotation(o),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),m++}else if(x.isPointLight){const T=n.point[d];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(f),d++}else if(x.isHemisphereLight){const T=n.hemi[v];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(f),v++}}}return{setup:a,setupView:l,state:n}}function $u(i){const t=new _M(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function xM(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new $u(i),t.set(s,[a])):o>=r.length?(a=new $u(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class hp extends Ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yM extends Ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const MM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SM=`uniform sampler2D shadow_pass;
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
}`;function wM(i,t,e){let n=new Vc;const s=new Ft,o=new Ft,r=new ge,a=new hp({depthPacking:Vf}),l=new yM,c={},h=e.maxTextureSize,u={[Mi]:Ne,[Ne]:Mi,[Qe]:Qe},d=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:MM,fragmentShader:SM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new Be;m.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Qt(m,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uf;let g=this.type;this.render=function(A,R,F){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(_i),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const q=g!==qn&&this.type===qn,j=g===qn&&this.type!==qn;for(let tt=0,Q=A.length;tt<Q;tt++){const it=A[tt],$=it.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const ft=$.getFrameExtents();if(s.multiply(ft),o.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/ft.x),s.x=o.x*ft.x,$.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/ft.y),s.y=o.y*ft.y,$.mapSize.y=o.y)),$.map===null||q===!0||j===!0){const _t=this.type!==qn?{minFilter:ue,magFilter:ue}:{};$.map!==null&&$.map.dispose(),$.map=new Cn(s.x,s.y,_t),$.map.texture.name=it.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const bt=$.getViewportCount();for(let _t=0;_t<bt;_t++){const Vt=$.getViewport(_t);r.set(o.x*Vt.x,o.y*Vt.y,o.x*Vt.z,o.y*Vt.w),Y.viewport(r),$.updateMatrices(it,_t),n=$.getFrustum(),T(R,F,$.camera,it,this.type)}$.isPointLightShadow!==!0&&this.type===qn&&y($,F),$.needsUpdate=!1}g=this.type,f.needsUpdate=!1,i.setRenderTarget(b,S,D)};function y(A,R){const F=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Cn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,F,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,F,p,v,null)}function x(A,R,F,b){let S=null;const D=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)S=D;else if(S=F.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const Y=S.uuid,q=R.uuid;let j=c[Y];j===void 0&&(j={},c[Y]=j);let tt=j[q];tt===void 0&&(tt=S.clone(),j[q]=tt,R.addEventListener("dispose",L)),S=tt}if(S.visible=R.visible,S.wireframe=R.wireframe,b===qn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Y=i.properties.get(S);Y.light=F}return S}function T(A,R,F,b,S){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===qn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const q=t.update(A),j=A.material;if(Array.isArray(j)){const tt=q.groups;for(let Q=0,it=tt.length;Q<it;Q++){const $=tt[Q],ft=j[$.materialIndex];if(ft&&ft.visible){const bt=x(A,ft,b,S);A.onBeforeShadow(i,A,R,F,q,bt,$),i.renderBufferDirect(F,null,q,bt,A,$),A.onAfterShadow(i,A,R,F,q,bt,$)}}}else if(j.visible){const tt=x(A,j,b,S);A.onBeforeShadow(i,A,R,F,q,tt,null),i.renderBufferDirect(F,null,q,tt,A,null),A.onAfterShadow(i,A,R,F,q,tt,null)}}const Y=A.children;for(let q=0,j=Y.length;q<j;q++)T(Y[q],R,F,b,S)}function L(A){A.target.removeEventListener("dispose",L);for(const F in c){const b=c[F],S=A.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function bM(i){function t(){let U=!1;const yt=new ge;let Z=null;const et=new ge(0,0,0,0);return{setMask:function(lt){Z!==lt&&!U&&(i.colorMask(lt,lt,lt,lt),Z=lt)},setLocked:function(lt){U=lt},setClear:function(lt,zt,ne,Se,Le){Le===!0&&(lt*=Se,zt*=Se,ne*=Se),yt.set(lt,zt,ne,Se),et.equals(yt)===!1&&(i.clearColor(lt,zt,ne,Se),et.copy(yt))},reset:function(){U=!1,Z=null,et.set(-1,0,0,0)}}}function e(){let U=!1,yt=null,Z=null,et=null;return{setTest:function(lt){lt?V(i.DEPTH_TEST):O(i.DEPTH_TEST)},setMask:function(lt){yt!==lt&&!U&&(i.depthMask(lt),yt=lt)},setFunc:function(lt){if(Z!==lt){switch(lt){case k0:i.depthFunc(i.NEVER);break;case I0:i.depthFunc(i.ALWAYS);break;case N0:i.depthFunc(i.LESS);break;case la:i.depthFunc(i.LEQUAL);break;case F0:i.depthFunc(i.EQUAL);break;case O0:i.depthFunc(i.GEQUAL);break;case B0:i.depthFunc(i.GREATER);break;case z0:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=lt}},setLocked:function(lt){U=lt},setClear:function(lt){et!==lt&&(i.clearDepth(lt),et=lt)},reset:function(){U=!1,yt=null,Z=null,et=null}}}function n(){let U=!1,yt=null,Z=null,et=null,lt=null,zt=null,ne=null,Se=null,Le=null;return{setTest:function(le){U||(le?V(i.STENCIL_TEST):O(i.STENCIL_TEST))},setMask:function(le){yt!==le&&!U&&(i.stencilMask(le),yt=le)},setFunc:function(le,Dn,Ln){(Z!==le||et!==Dn||lt!==Ln)&&(i.stencilFunc(le,Dn,Ln),Z=le,et=Dn,lt=Ln)},setOp:function(le,Dn,Ln){(zt!==le||ne!==Dn||Se!==Ln)&&(i.stencilOp(le,Dn,Ln),zt=le,ne=Dn,Se=Ln)},setLocked:function(le){U=le},setClear:function(le){Le!==le&&(i.clearStencil(le),Le=le)},reset:function(){U=!1,yt=null,Z=null,et=null,lt=null,zt=null,ne=null,Se=null,Le=null}}}const s=new t,o=new e,r=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],p=null,m=!1,v=null,f=null,g=null,y=null,x=null,T=null,L=null,A=new wt(0,0,0),R=0,F=!1,b=null,S=null,D=null,Y=null,q=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tt=!1,Q=0;const it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(it)[1]),tt=Q>=1):it.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),tt=Q>=2);let $=null,ft={};const bt=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),Vt=new ge().fromArray(bt),G=new ge().fromArray(_t);function P(U,yt,Z,et){const lt=new Uint8Array(4),zt=i.createTexture();i.bindTexture(U,zt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<Z;ne++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(yt+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return zt}const k={};k[i.TEXTURE_2D]=P(i.TEXTURE_2D,i.TEXTURE_2D,1),k[i.TEXTURE_CUBE_MAP]=P(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[i.TEXTURE_2D_ARRAY]=P(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),k[i.TEXTURE_3D]=P(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),V(i.DEPTH_TEST),o.setFunc(la),ct(!1),Ut(Ch),V(i.CULL_FACE),ot(_i);function V(U){c[U]!==!0&&(i.enable(U),c[U]=!0)}function O(U){c[U]!==!1&&(i.disable(U),c[U]=!1)}function H(U,yt){return h[U]!==yt?(i.bindFramebuffer(U,yt),h[U]=yt,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=yt),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function at(U,yt){let Z=d,et=!1;if(U){Z=u.get(yt),Z===void 0&&(Z=[],u.set(yt,Z));const lt=U.textures;if(Z.length!==lt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let zt=0,ne=lt.length;zt<ne;zt++)Z[zt]=i.COLOR_ATTACHMENT0+zt;Z.length=lt.length,et=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,et=!0);et&&i.drawBuffers(Z)}function St(U){return p!==U?(i.useProgram(U),p=U,!0):!1}const C={[zi]:i.FUNC_ADD,[v0]:i.FUNC_SUBTRACT,[_0]:i.FUNC_REVERSE_SUBTRACT};C[x0]=i.MIN,C[y0]=i.MAX;const pt={[M0]:i.ZERO,[S0]:i.ONE,[w0]:i.SRC_COLOR,[vc]:i.SRC_ALPHA,[C0]:i.SRC_ALPHA_SATURATE,[A0]:i.DST_COLOR,[T0]:i.DST_ALPHA,[b0]:i.ONE_MINUS_SRC_COLOR,[_c]:i.ONE_MINUS_SRC_ALPHA,[R0]:i.ONE_MINUS_DST_COLOR,[E0]:i.ONE_MINUS_DST_ALPHA,[P0]:i.CONSTANT_COLOR,[D0]:i.ONE_MINUS_CONSTANT_COLOR,[L0]:i.CONSTANT_ALPHA,[U0]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(U,yt,Z,et,lt,zt,ne,Se,Le,le){if(U===_i){m===!0&&(O(i.BLEND),m=!1);return}if(m===!1&&(V(i.BLEND),m=!0),U!==g0){if(U!==v||le!==F){if((f!==zi||x!==zi)&&(i.blendEquation(i.FUNC_ADD),f=zi,x=zi),le)switch(U){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gc:i.blendFunc(i.ONE,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}g=null,y=null,T=null,L=null,A.set(0,0,0),R=0,v=U,F=le}return}lt=lt||yt,zt=zt||Z,ne=ne||et,(yt!==f||lt!==x)&&(i.blendEquationSeparate(C[yt],C[lt]),f=yt,x=lt),(Z!==g||et!==y||zt!==T||ne!==L)&&(i.blendFuncSeparate(pt[Z],pt[et],pt[zt],pt[ne]),g=Z,y=et,T=zt,L=ne),(Se.equals(A)===!1||Le!==R)&&(i.blendColor(Se.r,Se.g,Se.b,Le),A.copy(Se),R=Le),v=U,F=!1}function mt(U,yt){U.side===Qe?O(i.CULL_FACE):V(i.CULL_FACE);let Z=U.side===Ne;yt&&(Z=!Z),ct(Z),U.blending===Us&&U.transparent===!1?ot(_i):ot(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const et=U.stencilWrite;r.setTest(et),et&&(r.setMask(U.stencilWriteMask),r.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),r.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),xt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?V(i.SAMPLE_ALPHA_TO_COVERAGE):O(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(U){b!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),b=U)}function Ut(U){U!==p0?(V(i.CULL_FACE),U!==S&&(U===Ch?i.cullFace(i.BACK):U===m0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):O(i.CULL_FACE),S=U}function Tt(U){U!==D&&(tt&&i.lineWidth(U),D=U)}function xt(U,yt,Z){U?(V(i.POLYGON_OFFSET_FILL),(Y!==yt||q!==Z)&&(i.polygonOffset(yt,Z),Y=yt,q=Z)):O(i.POLYGON_OFFSET_FILL)}function Wt(U){U?V(i.SCISSOR_TEST):O(i.SCISSOR_TEST)}function E(U){U===void 0&&(U=i.TEXTURE0+j-1),$!==U&&(i.activeTexture(U),$=U)}function M(U,yt,Z){Z===void 0&&($===null?Z=i.TEXTURE0+j-1:Z=$);let et=ft[Z];et===void 0&&(et={type:void 0,texture:void 0},ft[Z]=et),(et.type!==U||et.texture!==yt)&&($!==Z&&(i.activeTexture(Z),$=Z),i.bindTexture(U,yt||k[U]),et.type=U,et.texture=yt)}function z(){const U=ft[$];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $t(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(U){Vt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Vt.copy(U))}function gt(U){G.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),G.copy(U))}function Yt(U,yt){let Z=l.get(yt);Z===void 0&&(Z=new WeakMap,l.set(yt,Z));let et=Z.get(U);et===void 0&&(et=i.getUniformBlockIndex(yt,U.name),Z.set(U,et))}function jt(U,yt){const et=l.get(yt).get(U);a.get(yt)!==et&&(i.uniformBlockBinding(yt,et,U.__bindingPointIndex),a.set(yt,et))}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},$=null,ft={},h={},u=new WeakMap,d=[],p=null,m=!1,v=null,f=null,g=null,y=null,x=null,T=null,L=null,A=new wt(0,0,0),R=0,F=!1,b=null,S=null,D=null,Y=null,q=null,Vt.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:V,disable:O,bindFramebuffer:H,drawBuffers:at,useProgram:St,setBlending:ot,setMaterial:mt,setFlipSided:ct,setCullFace:Ut,setLineWidth:Tt,setPolygonOffset:xt,setScissorTest:Wt,activeTexture:E,bindTexture:M,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:Rt,texImage3D:$t,updateUBOMapping:Yt,uniformBlockBinding:jt,texStorage2D:Gt,texStorage3D:st,texSubImage2D:nt,texSubImage3D:Et,compressedTexSubImage2D:ut,compressedTexSubImage3D:ht,scissor:Nt,viewport:gt,reset:Me}}function TM(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,M){return p?new OffscreenCanvas(E,M):Oo("canvas")}function v(E,M,z){let K=1;const J=Wt(E);if((J.width>z||J.height>z)&&(K=z/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const nt=Math.floor(K*J.width),Et=Math.floor(K*J.height);u===void 0&&(u=m(nt,Et));const ut=M?m(nt,Et):u;return ut.width=nt,ut.height=Et,ut.getContext("2d").drawImage(E,0,0,nt,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+nt+"x"+Et+")."),ut}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function f(E){return E.generateMipmaps&&E.minFilter!==ue&&E.minFilter!==be}function g(E){i.generateMipmap(E)}function y(E,M,z,K,J=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let nt=M;if(M===i.RED&&(z===i.FLOAT&&(nt=i.R32F),z===i.HALF_FLOAT&&(nt=i.R16F),z===i.UNSIGNED_BYTE&&(nt=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(nt=i.R8UI),z===i.UNSIGNED_SHORT&&(nt=i.R16UI),z===i.UNSIGNED_INT&&(nt=i.R32UI),z===i.BYTE&&(nt=i.R8I),z===i.SHORT&&(nt=i.R16I),z===i.INT&&(nt=i.R32I)),M===i.RG&&(z===i.FLOAT&&(nt=i.RG32F),z===i.HALF_FLOAT&&(nt=i.RG16F),z===i.UNSIGNED_BYTE&&(nt=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(nt=i.RG8UI),z===i.UNSIGNED_SHORT&&(nt=i.RG16UI),z===i.UNSIGNED_INT&&(nt=i.RG32UI),z===i.BYTE&&(nt=i.RG8I),z===i.SHORT&&(nt=i.RG16I),z===i.INT&&(nt=i.RG32I)),M===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),M===i.RGBA){const Et=J?ha:re.getTransfer(K);z===i.FLOAT&&(nt=i.RGBA32F),z===i.HALF_FLOAT&&(nt=i.RGBA16F),z===i.UNSIGNED_BYTE&&(nt=Et===me?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function x(E,M){let z;return E?M===null||M===Si||M===Xs?z=i.DEPTH24_STENCIL8:M===gi?z=i.DEPTH32F_STENCIL8:M===ca&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Si||M===Xs?z=i.DEPTH_COMPONENT24:M===gi?z=i.DEPTH_COMPONENT32F:M===ca&&(z=i.DEPTH_COMPONENT16),z}function T(E,M){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==ue&&E.minFilter!==be?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function L(E){const M=E.target;M.removeEventListener("dispose",L),R(M),M.isVideoTexture&&h.delete(M)}function A(E){const M=E.target;M.removeEventListener("dispose",A),b(M)}function R(E){const M=n.get(E);if(M.__webglInit===void 0)return;const z=E.source,K=d.get(z);if(K){const J=K[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&F(E),Object.keys(K).length===0&&d.delete(z)}n.remove(E)}function F(E){const M=n.get(E);i.deleteTexture(M.__webglTexture);const z=E.source,K=d.get(z);delete K[M.__cacheKey],r.memory.textures--}function b(E){const M=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let J=0;J<M.__webglFramebuffer[K].length;J++)i.deleteFramebuffer(M.__webglFramebuffer[K][J]);else i.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)i.deleteFramebuffer(M.__webglFramebuffer[K]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=E.textures;for(let K=0,J=z.length;K<J;K++){const nt=n.get(z[K]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),r.memory.textures--),n.remove(z[K])}n.remove(E)}let S=0;function D(){S=0}function Y(){const E=S;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),S+=1,E}function q(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function j(E,M){const z=n.get(E);if(E.isVideoTexture&&Tt(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){const K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(z,E,M);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function tt(E,M){const z=n.get(E);if(E.version>0&&z.__version!==E.version){G(z,E,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function Q(E,M){const z=n.get(E);if(E.version>0&&z.__version!==E.version){G(z,E,M);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function it(E,M){const z=n.get(E);if(E.version>0&&z.__version!==E.version){P(z,E,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const $={[dn]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[Mc]:i.MIRRORED_REPEAT},ft={[ue]:i.NEAREST,[Bc]:i.NEAREST_MIPMAP_NEAREST,[tr]:i.NEAREST_MIPMAP_LINEAR,[be]:i.LINEAR,[Za]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},bt={[ag]:i.NEVER,[fg]:i.ALWAYS,[lg]:i.LESS,[qf]:i.LEQUAL,[cg]:i.EQUAL,[dg]:i.GEQUAL,[hg]:i.GREATER,[ug]:i.NOTEQUAL};function _t(E,M){if(M.type===gi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===be||M.magFilter===Za||M.magFilter===tr||M.magFilter===Kn||M.minFilter===be||M.minFilter===Za||M.minFilter===tr||M.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,$[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,$[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,$[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ft[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ft[M.minFilter]),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,bt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ue||M.minFilter!==tr&&M.minFilter!==Kn||M.type===gi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Vt(E,M){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",L));const K=M.source;let J=d.get(K);J===void 0&&(J={},d.set(K,J));const nt=q(M);if(nt!==E.__cacheKey){J[nt]===void 0&&(J[nt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,z=!0),J[nt].usedTimes++;const Et=J[E.__cacheKey];Et!==void 0&&(J[E.__cacheKey].usedTimes--,Et.usedTimes===0&&F(M)),E.__cacheKey=nt,E.__webglTexture=J[nt].texture}return z}function G(E,M,z){let K=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=i.TEXTURE_3D);const J=Vt(E,M),nt=M.source;e.bindTexture(K,E.__webglTexture,i.TEXTURE0+z);const Et=n.get(nt);if(nt.version!==Et.__version||J===!0){e.activeTexture(i.TEXTURE0+z);const ut=re.getPrimaries(re.workingColorSpace),ht=M.colorSpace===ln?null:re.getPrimaries(M.colorSpace),Gt=M.colorSpace===ln||ut===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let st=v(M.image,!1,s.maxTextureSize);st=xt(M,st);const Rt=o.convert(M.format,M.colorSpace),$t=o.convert(M.type);let Nt=y(M.internalFormat,Rt,$t,M.colorSpace,M.isVideoTexture);_t(K,M);let gt;const Yt=M.mipmaps,jt=M.isVideoTexture!==!0,Me=Et.__version===void 0||J===!0,U=nt.dataReady,yt=T(M,st);if(M.isDepthTexture)Nt=x(M.format===qs,M.type),Me&&(jt?e.texStorage2D(i.TEXTURE_2D,1,Nt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Nt,st.width,st.height,0,Rt,$t,null));else if(M.isDataTexture)if(Yt.length>0){jt&&Me&&e.texStorage2D(i.TEXTURE_2D,yt,Nt,Yt[0].width,Yt[0].height);for(let Z=0,et=Yt.length;Z<et;Z++)gt=Yt[Z],jt?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,gt.width,gt.height,Rt,$t,gt.data):e.texImage2D(i.TEXTURE_2D,Z,Nt,gt.width,gt.height,0,Rt,$t,gt.data);M.generateMipmaps=!1}else jt?(Me&&e.texStorage2D(i.TEXTURE_2D,yt,Nt,st.width,st.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,Rt,$t,st.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,st.width,st.height,0,Rt,$t,st.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){jt&&Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Nt,Yt[0].width,Yt[0].height,st.depth);for(let Z=0,et=Yt.length;Z<et;Z++)if(gt=Yt[Z],M.format!==hn)if(Rt!==null)if(jt){if(U)if(M.layerUpdates.size>0){for(const lt of M.layerUpdates){const zt=gt.width*gt.height;e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,lt,gt.width,gt.height,1,Rt,gt.data.slice(zt*lt,zt*(lt+1)),0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,gt.width,gt.height,st.depth,Rt,gt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Nt,gt.width,gt.height,st.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,gt.width,gt.height,st.depth,Rt,$t,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Nt,gt.width,gt.height,st.depth,0,Rt,$t,gt.data)}else{jt&&Me&&e.texStorage2D(i.TEXTURE_2D,yt,Nt,Yt[0].width,Yt[0].height);for(let Z=0,et=Yt.length;Z<et;Z++)gt=Yt[Z],M.format!==hn?Rt!==null?jt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,gt.width,gt.height,Rt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Nt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,gt.width,gt.height,Rt,$t,gt.data):e.texImage2D(i.TEXTURE_2D,Z,Nt,gt.width,gt.height,0,Rt,$t,gt.data)}else if(M.isDataArrayTexture)if(jt){if(Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Nt,st.width,st.height,st.depth),U)if(M.layerUpdates.size>0){let Z;switch($t){case i.UNSIGNED_BYTE:switch(Rt){case i.ALPHA:Z=1;break;case i.LUMINANCE:Z=1;break;case i.LUMINANCE_ALPHA:Z=2;break;case i.RGB:Z=3;break;case i.RGBA:Z=4;break;default:throw new Error(`Unknown texel size for format ${Rt}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:Z=1;break;default:throw new Error(`Unknown texel size for type ${$t}.`)}const et=st.width*st.height*Z;for(const lt of M.layerUpdates)e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,st.width,st.height,1,Rt,$t,st.data.slice(et*lt,et*(lt+1)));M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Rt,$t,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,st.width,st.height,st.depth,0,Rt,$t,st.data);else if(M.isData3DTexture)jt?(Me&&e.texStorage3D(i.TEXTURE_3D,yt,Nt,st.width,st.height,st.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Rt,$t,st.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,st.width,st.height,st.depth,0,Rt,$t,st.data);else if(M.isFramebufferTexture){if(Me)if(jt)e.texStorage2D(i.TEXTURE_2D,yt,Nt,st.width,st.height);else{let Z=st.width,et=st.height;for(let lt=0;lt<yt;lt++)e.texImage2D(i.TEXTURE_2D,lt,Nt,Z,et,0,Rt,$t,null),Z>>=1,et>>=1}}else if(Yt.length>0){if(jt&&Me){const Z=Wt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,yt,Nt,Z.width,Z.height)}for(let Z=0,et=Yt.length;Z<et;Z++)gt=Yt[Z],jt?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Rt,$t,gt):e.texImage2D(i.TEXTURE_2D,Z,Nt,Rt,$t,gt);M.generateMipmaps=!1}else if(jt){if(Me){const Z=Wt(st);e.texStorage2D(i.TEXTURE_2D,yt,Nt,Z.width,Z.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,$t,st)}else e.texImage2D(i.TEXTURE_2D,0,Nt,Rt,$t,st);f(M)&&g(K),Et.__version=nt.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function P(E,M,z){if(M.image.length!==6)return;const K=Vt(E,M),J=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+z);const nt=n.get(J);if(J.version!==nt.__version||K===!0){e.activeTexture(i.TEXTURE0+z);const Et=re.getPrimaries(re.workingColorSpace),ut=M.colorSpace===ln?null:re.getPrimaries(M.colorSpace),ht=M.colorSpace===ln||Et===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Gt=M.isCompressedTexture||M.image[0].isCompressedTexture,st=M.image[0]&&M.image[0].isDataTexture,Rt=[];for(let et=0;et<6;et++)!Gt&&!st?Rt[et]=v(M.image[et],!0,s.maxCubemapSize):Rt[et]=st?M.image[et].image:M.image[et],Rt[et]=xt(M,Rt[et]);const $t=Rt[0],Nt=o.convert(M.format,M.colorSpace),gt=o.convert(M.type),Yt=y(M.internalFormat,Nt,gt,M.colorSpace),jt=M.isVideoTexture!==!0,Me=nt.__version===void 0||K===!0,U=J.dataReady;let yt=T(M,$t);_t(i.TEXTURE_CUBE_MAP,M);let Z;if(Gt){jt&&Me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Yt,$t.width,$t.height);for(let et=0;et<6;et++){Z=Rt[et].mipmaps;for(let lt=0;lt<Z.length;lt++){const zt=Z[lt];M.format!==hn?Nt!==null?jt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,lt,0,0,zt.width,zt.height,Nt,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,lt,Yt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,lt,0,0,zt.width,zt.height,Nt,gt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,lt,Yt,zt.width,zt.height,0,Nt,gt,zt.data)}}}else{if(Z=M.mipmaps,jt&&Me){Z.length>0&&yt++;const et=Wt(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Yt,et.width,et.height)}for(let et=0;et<6;et++)if(st){jt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Rt[et].width,Rt[et].height,Nt,gt,Rt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Yt,Rt[et].width,Rt[et].height,0,Nt,gt,Rt[et].data);for(let lt=0;lt<Z.length;lt++){const ne=Z[lt].image[et].image;jt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,lt+1,0,0,ne.width,ne.height,Nt,gt,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,lt+1,Yt,ne.width,ne.height,0,Nt,gt,ne.data)}}else{jt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Nt,gt,Rt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Yt,Nt,gt,Rt[et]);for(let lt=0;lt<Z.length;lt++){const zt=Z[lt];jt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,lt+1,0,0,Nt,gt,zt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,lt+1,Yt,Nt,gt,zt.image[et])}}}f(M)&&g(i.TEXTURE_CUBE_MAP),nt.__version=J.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function k(E,M,z,K,J,nt){const Et=o.convert(z.format,z.colorSpace),ut=o.convert(z.type),ht=y(z.internalFormat,Et,ut,z.colorSpace);if(!n.get(M).__hasExternalTextures){const st=Math.max(1,M.width>>nt),Rt=Math.max(1,M.height>>nt);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,nt,ht,st,Rt,M.depth,0,Et,ut,null):e.texImage2D(J,nt,ht,st,Rt,0,Et,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Ut(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,J,n.get(z).__webglTexture,0,ct(M)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,J,n.get(z).__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function V(E,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer){const K=M.depthTexture,J=K&&K.isDepthTexture?K.type:null,nt=x(M.stencilBuffer,J),Et=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=ct(M);Ut(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,nt,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,nt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,nt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,E)}else{const K=M.textures;for(let J=0;J<K.length;J++){const nt=K[J],Et=o.convert(nt.format,nt.colorSpace),ut=o.convert(nt.type),ht=y(nt.internalFormat,Et,ut,nt.colorSpace),Gt=ct(M);z&&Ut(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,ht,M.width,M.height):Ut(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,ht,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ht,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function O(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const K=n.get(M.depthTexture).__webglTexture,J=ct(M);if(M.depthTexture.format===ks)Ut(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(M.depthTexture.format===qs)Ut(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function H(E){const M=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");O(M.__webglFramebuffer,E)}else if(z){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]=i.createRenderbuffer(),V(M.__webglDepthbuffer[K],E,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),V(M.__webglDepthbuffer,E,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(E,M,z){const K=n.get(E);M!==void 0&&k(K.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&H(E)}function St(E){const M=E.texture,z=n.get(E),K=n.get(M);E.addEventListener("dispose",A);const J=E.textures,nt=E.isWebGLCubeRenderTarget===!0,Et=J.length>1;if(Et||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=M.version,r.memory.textures++),nt){z.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ut]=[];for(let ht=0;ht<M.mipmaps.length;ht++)z.__webglFramebuffer[ut][ht]=i.createFramebuffer()}else z.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ut=0;ut<M.mipmaps.length;ut++)z.__webglFramebuffer[ut]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ut=0,ht=J.length;ut<ht;ut++){const Gt=n.get(J[ut]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),r.memory.textures++)}if(E.samples>0&&Ut(E)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ut=0;ut<J.length;ut++){const ht=J[ut];z.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ut]);const Gt=o.convert(ht.format,ht.colorSpace),st=o.convert(ht.type),Rt=y(ht.internalFormat,Gt,st,ht.colorSpace,E.isXRRenderTarget===!0),$t=ct(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,Rt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,z.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),V(z.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),_t(i.TEXTURE_CUBE_MAP,M);for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0)for(let ht=0;ht<M.mipmaps.length;ht++)k(z.__webglFramebuffer[ut][ht],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,ht);else k(z.__webglFramebuffer[ut],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);f(M)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ut=0,ht=J.length;ut<ht;ut++){const Gt=J[ut],st=n.get(Gt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),_t(i.TEXTURE_2D,Gt),k(z.__webglFramebuffer,E,Gt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),f(Gt)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ut=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,K.__webglTexture),_t(ut,M),M.mipmaps&&M.mipmaps.length>0)for(let ht=0;ht<M.mipmaps.length;ht++)k(z.__webglFramebuffer[ht],E,M,i.COLOR_ATTACHMENT0,ut,ht);else k(z.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,ut,0);f(M)&&g(ut),e.unbindTexture()}E.depthBuffer&&H(E)}function C(E){const M=E.textures;for(let z=0,K=M.length;z<K;z++){const J=M[z];if(f(J)){const nt=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Et=n.get(J).__webglTexture;e.bindTexture(nt,Et),g(nt),e.unbindTexture()}}}const pt=[],ot=[];function mt(E){if(E.samples>0){if(Ut(E)===!1){const M=E.textures,z=E.width,K=E.height;let J=i.COLOR_BUFFER_BIT;const nt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(E),ut=M.length>1;if(ut)for(let ht=0;ht<M.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let ht=0;ht<M.length;ht++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[ht]);const Gt=n.get(M[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,z,K,0,0,z,K,J,i.NEAREST),l===!0&&(pt.length=0,ot.length=0,pt.push(i.COLOR_ATTACHMENT0+ht),E.depthBuffer&&E.resolveDepthBuffer===!1&&(pt.push(nt),ot.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let ht=0;ht<M.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,Et.__webglColorRenderbuffer[ht]);const Gt=n.get(M[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const M=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ct(E){return Math.min(s.maxSamples,E.samples)}function Ut(E){const M=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Tt(E){const M=r.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function xt(E,M){const z=E.colorSpace,K=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==Ti&&z!==ln&&(re.getTransfer(z)===me?(K!==hn||J!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function Wt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=D,this.setTexture2D=j,this.setTexture2DArray=tt,this.setTexture3D=Q,this.setTextureCube=it,this.rebindTextures=at,this.setupRenderTarget=St,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=k,this.useMultisampledRTT=Ut}function EM(i,t){function e(n,s=ln){let o;const r=re.getTransfer(s);if(n===ni)return i.UNSIGNED_BYTE;if(n===Of)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Q0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===j0)return i.BYTE;if(n===Z0)return i.SHORT;if(n===ca)return i.UNSIGNED_SHORT;if(n===Ff)return i.INT;if(n===Si)return i.UNSIGNED_INT;if(n===gi)return i.FLOAT;if(n===bi)return i.HALF_FLOAT;if(n===J0)return i.ALPHA;if(n===tg)return i.RGB;if(n===hn)return i.RGBA;if(n===eg)return i.LUMINANCE;if(n===ng)return i.LUMINANCE_ALPHA;if(n===ks)return i.DEPTH_COMPONENT;if(n===qs)return i.DEPTH_STENCIL;if(n===zf)return i.RED;if(n===Hf)return i.RED_INTEGER;if(n===ig)return i.RG;if(n===Wf)return i.RG_INTEGER;if(n===Gf)return i.RGBA_INTEGER;if(n===Qa||n===Ja||n===tl||n===el)if(r===me)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Qa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ja)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===el)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Qa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ja)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===el)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lh||n===Uh||n===kh||n===Ih)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Lh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ih)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nh||n===Fh||n===Oh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Nh||n===Fh)return r===me?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Oh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bh||n===zh||n===Hh||n===Wh||n===Gh||n===Vh||n===Xh||n===qh||n===Yh||n===$h||n===Kh||n===jh||n===Zh||n===Qh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Bh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$h)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qh)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nl||n===Jh||n===tu)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===nl)return r===me?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sg||n===eu||n===nu||n===iu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===nl)return o.COMPRESSED_RED_RGTC1_EXT;if(n===eu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===iu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class AM extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class un extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RM={type:"move"};class Al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const v of t.hand.values()){const f=e.getJointPose(v,n),g=this._getHandJoint(c,v);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(RM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new un;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const CM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PM=`
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

}`;class DM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Oe,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ve({vertexShader:CM,fragmentShader:PM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class LM extends no{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null;const v=new DM,f=e.getContextAttributes();let g=null,y=null;const x=[],T=[],L=new Ft;let A=null;const R=new Ge;R.layers.enable(1),R.viewport=new ge;const F=new Ge;F.layers.enable(2),F.viewport=new ge;const b=[R,F],S=new AM;S.layers.enable(1),S.layers.enable(2);let D=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let k=x[P];return k===void 0&&(k=new Al,x[P]=k),k.getTargetRaySpace()},this.getControllerGrip=function(P){let k=x[P];return k===void 0&&(k=new Al,x[P]=k),k.getGripSpace()},this.getHand=function(P){let k=x[P];return k===void 0&&(k=new Al,x[P]=k),k.getHandSpace()};function q(P){const k=T.indexOf(P.inputSource);if(k===-1)return;const V=x[k];V!==void 0&&(V.update(P.inputSource,P.frame,c||r),V.dispatchEvent({type:P.type,data:P.inputSource}))}function j(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",tt);for(let P=0;P<x.length;P++){const k=T[P];k!==null&&(T[P]=null,x[P].disconnect(k))}D=null,Y=null,v.reset(),t.setRenderTarget(g),p=null,d=null,u=null,s=null,y=null,G.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){o=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(P){c=P},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(P){if(s=P,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",j),s.addEventListener("inputsourceschange",tt),f.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const k={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,e,k),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Cn(p.framebufferWidth,p.framebufferHeight,{format:hn,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let k=null,V=null,O=null;f.depth&&(O=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=f.stencil?qs:ks,V=f.stencil?Xs:Si);const H={colorFormat:e.RGBA8,depthFormat:O,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(H),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Cn(d.textureWidth,d.textureHeight,{format:hn,type:ni,depthTexture:new Fa(d.textureWidth,d.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),G.setContext(s),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function tt(P){for(let k=0;k<P.removed.length;k++){const V=P.removed[k],O=T.indexOf(V);O>=0&&(T[O]=null,x[O].disconnect(V))}for(let k=0;k<P.added.length;k++){const V=P.added[k];let O=T.indexOf(V);if(O===-1){for(let at=0;at<x.length;at++)if(at>=T.length){T.push(V),O=at;break}else if(T[at]===null){T[at]=V,O=at;break}if(O===-1)break}const H=x[O];H&&H.connect(V)}}const Q=new I,it=new I;function $(P,k,V){Q.setFromMatrixPosition(k.matrixWorld),it.setFromMatrixPosition(V.matrixWorld);const O=Q.distanceTo(it),H=k.projectionMatrix.elements,at=V.projectionMatrix.elements,St=H[14]/(H[10]-1),C=H[14]/(H[10]+1),pt=(H[9]+1)/H[5],ot=(H[9]-1)/H[5],mt=(H[8]-1)/H[0],ct=(at[8]+1)/at[0],Ut=St*mt,Tt=St*ct,xt=O/(-mt+ct),Wt=xt*-mt;k.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Wt),P.translateZ(xt),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const E=St+xt,M=C+xt,z=Ut-Wt,K=Tt+(O-Wt),J=pt*C/M*E,nt=ot*C/M*E;P.projectionMatrix.makePerspective(z,K,J,nt,E,M),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}function ft(P,k){k===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(k.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(s===null)return;v.texture!==null&&(P.near=v.depthNear,P.far=v.depthFar),S.near=F.near=R.near=P.near,S.far=F.far=R.far=P.far,(D!==S.near||Y!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,Y=S.far,R.near=D,R.far=Y,F.near=D,F.far=Y,R.updateProjectionMatrix(),F.updateProjectionMatrix(),P.updateProjectionMatrix());const k=P.parent,V=S.cameras;ft(S,k);for(let O=0;O<V.length;O++)ft(V[O],k);V.length===2?$(S,R,F):S.projectionMatrix.copy(R.projectionMatrix),bt(P,S,k)};function bt(P,k,V){V===null?P.matrix.copy(k.matrixWorld):(P.matrix.copy(V.matrixWorld),P.matrix.invert(),P.matrix.multiply(k.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(k.projectionMatrix),P.projectionMatrixInverse.copy(k.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=Fo*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(P){l=P,d!==null&&(d.fixedFoveation=P),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=P)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let _t=null;function Vt(P,k){if(h=k.getViewerPose(c||r),m=k,h!==null){const V=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let O=!1;V.length!==S.cameras.length&&(S.cameras.length=0,O=!0);for(let at=0;at<V.length;at++){const St=V[at];let C=null;if(p!==null)C=p.getViewport(St);else{const ot=u.getViewSubImage(d,St);C=ot.viewport,at===0&&(t.setRenderTargetTextures(y,ot.colorTexture,d.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(y))}let pt=b[at];pt===void 0&&(pt=new Ge,pt.layers.enable(at),pt.viewport=new ge,b[at]=pt),pt.matrix.fromArray(St.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(St.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(C.x,C.y,C.width,C.height),at===0&&(S.matrix.copy(pt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),O===!0&&S.cameras.push(pt)}const H=s.enabledFeatures;if(H&&H.includes("depth-sensing")){const at=u.getDepthInformation(V[0]);at&&at.isValid&&at.texture&&v.init(t,at,s.renderState)}}for(let V=0;V<x.length;V++){const O=T[V],H=x[V];O!==null&&H!==void 0&&H.update(O,k,c||r)}_t&&_t(P,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),m=null}const G=new sp;G.setAnimationLoop(Vt),this.setAnimationLoop=function(P){_t=P},this.dispose=function(){}}}const Ii=new Nn,UM=new de;function kM(i,t){function e(f,g){f.matrixAutoUpdate===!0&&f.updateMatrix(),g.value.copy(f.matrix)}function n(f,g){g.color.getRGB(f.fogColor.value,ep(i)),g.isFog?(f.fogNear.value=g.near,f.fogFar.value=g.far):g.isFogExp2&&(f.fogDensity.value=g.density)}function s(f,g,y,x,T){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(f,g):g.isMeshToonMaterial?(o(f,g),u(f,g)):g.isMeshPhongMaterial?(o(f,g),h(f,g)):g.isMeshStandardMaterial?(o(f,g),d(f,g),g.isMeshPhysicalMaterial&&p(f,g,T)):g.isMeshMatcapMaterial?(o(f,g),m(f,g)):g.isMeshDepthMaterial?o(f,g):g.isMeshDistanceMaterial?(o(f,g),v(f,g)):g.isMeshNormalMaterial?o(f,g):g.isLineBasicMaterial?(r(f,g),g.isLineDashedMaterial&&a(f,g)):g.isPointsMaterial?l(f,g,y,x):g.isSpriteMaterial?c(f,g):g.isShadowMaterial?(f.color.value.copy(g.color),f.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(f,g){f.opacity.value=g.opacity,g.color&&f.diffuse.value.copy(g.color),g.emissive&&f.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(f.map.value=g.map,e(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.bumpMap&&(f.bumpMap.value=g.bumpMap,e(g.bumpMap,f.bumpMapTransform),f.bumpScale.value=g.bumpScale,g.side===Ne&&(f.bumpScale.value*=-1)),g.normalMap&&(f.normalMap.value=g.normalMap,e(g.normalMap,f.normalMapTransform),f.normalScale.value.copy(g.normalScale),g.side===Ne&&f.normalScale.value.negate()),g.displacementMap&&(f.displacementMap.value=g.displacementMap,e(g.displacementMap,f.displacementMapTransform),f.displacementScale.value=g.displacementScale,f.displacementBias.value=g.displacementBias),g.emissiveMap&&(f.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,f.emissiveMapTransform)),g.specularMap&&(f.specularMap.value=g.specularMap,e(g.specularMap,f.specularMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest);const y=t.get(g),x=y.envMap,T=y.envMapRotation;x&&(f.envMap.value=x,Ii.copy(T),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),f.envMapRotation.value.setFromMatrix4(UM.makeRotationFromEuler(Ii)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=g.reflectivity,f.ior.value=g.ior,f.refractionRatio.value=g.refractionRatio),g.lightMap&&(f.lightMap.value=g.lightMap,f.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,f.lightMapTransform)),g.aoMap&&(f.aoMap.value=g.aoMap,f.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,f.aoMapTransform))}function r(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,g.map&&(f.map.value=g.map,e(g.map,f.mapTransform))}function a(f,g){f.dashSize.value=g.dashSize,f.totalSize.value=g.dashSize+g.gapSize,f.scale.value=g.scale}function l(f,g,y,x){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.size.value=g.size*y,f.scale.value=x*.5,g.map&&(f.map.value=g.map,e(g.map,f.uvTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function c(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.rotation.value=g.rotation,g.map&&(f.map.value=g.map,e(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function h(f,g){f.specular.value.copy(g.specular),f.shininess.value=Math.max(g.shininess,1e-4)}function u(f,g){g.gradientMap&&(f.gradientMap.value=g.gradientMap)}function d(f,g){f.metalness.value=g.metalness,g.metalnessMap&&(f.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,f.metalnessMapTransform)),f.roughness.value=g.roughness,g.roughnessMap&&(f.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,f.roughnessMapTransform)),g.envMap&&(f.envMapIntensity.value=g.envMapIntensity)}function p(f,g,y){f.ior.value=g.ior,g.sheen>0&&(f.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),f.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(f.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,f.sheenColorMapTransform)),g.sheenRoughnessMap&&(f.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,f.sheenRoughnessMapTransform))),g.clearcoat>0&&(f.clearcoat.value=g.clearcoat,f.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(f.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,f.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(f.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ne&&f.clearcoatNormalScale.value.negate())),g.dispersion>0&&(f.dispersion.value=g.dispersion),g.iridescence>0&&(f.iridescence.value=g.iridescence,f.iridescenceIOR.value=g.iridescenceIOR,f.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(f.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,f.iridescenceMapTransform)),g.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),g.transmission>0&&(f.transmission.value=g.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(f.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,f.transmissionMapTransform)),f.thickness.value=g.thickness,g.thicknessMap&&(f.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=g.attenuationDistance,f.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(f.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(f.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=g.specularIntensity,f.specularColor.value.copy(g.specularColor),g.specularColorMap&&(f.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,f.specularColorMapTransform)),g.specularIntensityMap&&(f.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,f.specularIntensityMapTransform))}function m(f,g){g.matcap&&(f.matcap.value=g.matcap)}function v(f,g){const y=t.get(g).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function IM(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const T=x.program;n.uniformBlockBinding(y,T)}function c(y,x){let T=s[y.id];T===void 0&&(m(y),T=h(y),s[y.id]=T,y.addEventListener("dispose",f));const L=x.program;n.updateUBOMapping(y,L);const A=t.render.frame;o[y.id]!==A&&(d(y),o[y.id]=A)}function h(y){const x=u();y.__bindingPointIndex=x;const T=i.createBuffer(),L=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,T),T}function u(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=s[y.id],T=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,R=T.length;A<R;A++){const F=Array.isArray(T[A])?T[A]:[T[A]];for(let b=0,S=F.length;b<S;b++){const D=F[b];if(p(D,A,b,L)===!0){const Y=D.__offset,q=Array.isArray(D.value)?D.value:[D.value];let j=0;for(let tt=0;tt<q.length;tt++){const Q=q[tt],it=v(Q);typeof Q=="number"||typeof Q=="boolean"?(D.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,Y+j,D.__data)):Q.isMatrix3?(D.__data[0]=Q.elements[0],D.__data[1]=Q.elements[1],D.__data[2]=Q.elements[2],D.__data[3]=0,D.__data[4]=Q.elements[3],D.__data[5]=Q.elements[4],D.__data[6]=Q.elements[5],D.__data[7]=0,D.__data[8]=Q.elements[6],D.__data[9]=Q.elements[7],D.__data[10]=Q.elements[8],D.__data[11]=0):(Q.toArray(D.__data,j),j+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,T,L){const A=y.value,R=x+"_"+T;if(L[R]===void 0)return typeof A=="number"||typeof A=="boolean"?L[R]=A:L[R]=A.clone(),!0;{const F=L[R];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return L[R]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function m(y){const x=y.uniforms;let T=0;const L=16;for(let R=0,F=x.length;R<F;R++){const b=Array.isArray(x[R])?x[R]:[x[R]];for(let S=0,D=b.length;S<D;S++){const Y=b[S],q=Array.isArray(Y.value)?Y.value:[Y.value];for(let j=0,tt=q.length;j<tt;j++){const Q=q[j],it=v(Q),$=T%L;$!==0&&L-$<it.boundary&&(T+=L-$),Y.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=T,T+=it.storage}}}const A=T%L;return A>0&&(T+=L-A),y.__size=T,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function f(y){const x=y.target;x.removeEventListener("dispose",f);const T=r.indexOf(x.__bindingPointIndex);r.splice(T,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete o[x.id]}function g(){for(const y in s)i.deleteBuffer(s[y]);r=[],s={},o={}}return{bind:l,update:c,dispose:g}}class up{constructor(t={}){const{canvas:e=Pg(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const p=new Uint32Array(4),m=new Int32Array(4);let v=null,f=null;const g=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ae,this.toneMapping=Jn,this.toneMappingExposure=1;const x=this;let T=!1,L=0,A=0,R=null,F=-1,b=null;const S=new ge,D=new ge;let Y=null;const q=new wt(0);let j=0,tt=e.width,Q=e.height,it=1,$=null,ft=null;const bt=new ge(0,0,tt,Q),_t=new ge(0,0,tt,Q);let Vt=!1;const G=new Vc;let P=!1,k=!1;const V=new de,O=new I,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function St(){return R===null?it:1}let C=n;function pt(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oc}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",Z,!1),e.addEventListener("webglcontextcreationerror",et,!1),C===null){const N="webgl2";if(C=pt(N,w),C===null)throw pt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ot,mt,ct,Ut,Tt,xt,Wt,E,M,z,K,J,nt,Et,ut,ht,Gt,st,Rt,$t,Nt,gt,Yt,jt;function Me(){ot=new Xx(C),ot.init(),gt=new EM(C,ot),mt=new Bx(C,ot,t,gt),ct=new bM(C),Ut=new $x(C),Tt=new uM,xt=new TM(C,ot,ct,Tt,mt,gt,Ut),Wt=new Hx(x),E=new Vx(x),M=new ev(C),Yt=new Fx(C,M),z=new qx(C,M,Ut,Yt),K=new jx(C,z,M,Ut),Rt=new Kx(C,mt,xt),ht=new zx(Tt),J=new hM(x,Wt,E,ot,mt,Yt,ht),nt=new kM(x,Tt),Et=new fM,ut=new xM(ot),st=new Nx(x,Wt,E,ct,K,d,l),Gt=new wM(x,K,mt),jt=new IM(C,Ut,mt,ct),$t=new Ox(C,ot,Ut),Nt=new Yx(C,ot,Ut),Ut.programs=J.programs,x.capabilities=mt,x.extensions=ot,x.properties=Tt,x.renderLists=Et,x.shadowMap=Gt,x.state=ct,x.info=Ut}Me();const U=new LM(x,C);this.xr=U,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const w=ot.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ot.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(w){w!==void 0&&(it=w,this.setSize(tt,Q,!1))},this.getSize=function(w){return w.set(tt,Q)},this.setSize=function(w,N,W=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}tt=w,Q=N,e.width=Math.floor(w*it),e.height=Math.floor(N*it),W===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(tt*it,Q*it).floor()},this.setDrawingBufferSize=function(w,N,W){tt=w,Q=N,it=W,e.width=Math.floor(w*W),e.height=Math.floor(N*W),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(bt)},this.setViewport=function(w,N,W,X){w.isVector4?bt.set(w.x,w.y,w.z,w.w):bt.set(w,N,W,X),ct.viewport(S.copy(bt).multiplyScalar(it).round())},this.getScissor=function(w){return w.copy(_t)},this.setScissor=function(w,N,W,X){w.isVector4?_t.set(w.x,w.y,w.z,w.w):_t.set(w,N,W,X),ct.scissor(D.copy(_t).multiplyScalar(it).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(w){ct.setScissorTest(Vt=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){ft=w},this.getClearColor=function(w){return w.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(w=!0,N=!0,W=!0){let X=0;if(w){let B=!1;if(R!==null){const rt=R.texture.format;B=rt===Gf||rt===Wf||rt===Hf}if(B){const rt=R.texture.type,Mt=rt===ni||rt===Si||rt===ca||rt===Xs||rt===Of||rt===Bf,At=st.getClearColor(),Ct=st.getClearAlpha(),Ot=At.r,Bt=At.g,It=At.b;Mt?(p[0]=Ot,p[1]=Bt,p[2]=It,p[3]=Ct,C.clearBufferuiv(C.COLOR,0,p)):(m[0]=Ot,m[1]=Bt,m[2]=It,m[3]=Ct,C.clearBufferiv(C.COLOR,0,m))}else X|=C.COLOR_BUFFER_BIT}N&&(X|=C.DEPTH_BUFFER_BIT),W&&(X|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",Z,!1),e.removeEventListener("webglcontextcreationerror",et,!1),Et.dispose(),ut.dispose(),Tt.dispose(),Wt.dispose(),E.dispose(),K.dispose(),Yt.dispose(),jt.dispose(),J.dispose(),U.dispose(),U.removeEventListener("sessionstart",Dn),U.removeEventListener("sessionend",Ln),Ri.stop()};function yt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=Ut.autoReset,N=Gt.enabled,W=Gt.autoUpdate,X=Gt.needsUpdate,B=Gt.type;Me(),Ut.autoReset=w,Gt.enabled=N,Gt.autoUpdate=W,Gt.needsUpdate=X,Gt.type=B}function et(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function lt(w){const N=w.target;N.removeEventListener("dispose",lt),zt(N)}function zt(w){ne(w),Tt.remove(w)}function ne(w){const N=Tt.get(w).programs;N!==void 0&&(N.forEach(function(W){J.releaseProgram(W)}),w.isShaderMaterial&&J.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,W,X,B,rt){N===null&&(N=H);const Mt=B.isMesh&&B.matrixWorld.determinant()<0,At=l0(w,N,W,X,B);ct.setMaterial(X,Mt);let Ct=W.index,Ot=1;if(X.wireframe===!0){if(Ct=z.getWireframeAttribute(W),Ct===void 0)return;Ot=2}const Bt=W.drawRange,It=W.attributes.position;let ie=Bt.start*Ot,_e=(Bt.start+Bt.count)*Ot;rt!==null&&(ie=Math.max(ie,rt.start*Ot),_e=Math.min(_e,(rt.start+rt.count)*Ot)),Ct!==null?(ie=Math.max(ie,0),_e=Math.min(_e,Ct.count)):It!=null&&(ie=Math.max(ie,0),_e=Math.min(_e,It.count));const xe=_e-ie;if(xe<0||xe===1/0)return;Yt.setup(B,X,At,W,Ct);let nn,se=$t;if(Ct!==null&&(nn=M.get(Ct),se=Nt,se.setIndex(nn)),B.isMesh)X.wireframe===!0?(ct.setLineWidth(X.wireframeLinewidth*St()),se.setMode(C.LINES)):se.setMode(C.TRIANGLES);else if(B.isLine){let kt=X.linewidth;kt===void 0&&(kt=1),ct.setLineWidth(kt*St()),B.isLineSegments?se.setMode(C.LINES):B.isLineLoop?se.setMode(C.LINE_LOOP):se.setMode(C.LINE_STRIP)}else B.isPoints?se.setMode(C.POINTS):B.isSprite&&se.setMode(C.TRIANGLES);if(B.isBatchedMesh)B._multiDrawInstances!==null?se.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances):se.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)se.renderInstances(ie,xe,B.count);else if(W.isInstancedBufferGeometry){const kt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,qe=Math.min(W.instanceCount,kt);se.renderInstances(ie,xe,qe)}else se.render(ie,xe)};function Se(w,N,W){w.transparent===!0&&w.side===Qe&&w.forceSinglePass===!1?(w.side=Ne,w.needsUpdate=!0,Qo(w,N,W),w.side=Mi,w.needsUpdate=!0,Qo(w,N,W),w.side=Qe):Qo(w,N,W)}this.compile=function(w,N,W=null){W===null&&(W=w),f=ut.get(W),f.init(N),y.push(f),W.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),w!==W&&w.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const X=new Set;return w.traverse(function(B){const rt=B.material;if(rt)if(Array.isArray(rt))for(let Mt=0;Mt<rt.length;Mt++){const At=rt[Mt];Se(At,W,B),X.add(At)}else Se(rt,W,B),X.add(rt)}),y.pop(),f=null,X},this.compileAsync=function(w,N,W=null){const X=this.compile(w,N,W);return new Promise(B=>{function rt(){if(X.forEach(function(Mt){Tt.get(Mt).currentProgram.isReady()&&X.delete(Mt)}),X.size===0){B(w);return}setTimeout(rt,10)}ot.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Le=null;function le(w){Le&&Le(w)}function Dn(){Ri.stop()}function Ln(){Ri.start()}const Ri=new sp;Ri.setAnimationLoop(le),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(w){Le=w,U.setAnimationLoop(w),w===null?Ri.stop():Ri.start()},U.addEventListener("sessionstart",Dn),U.addEventListener("sessionend",Ln),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(N),N=U.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,R),f=ut.get(w,y.length),f.init(N),y.push(f),V.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),G.setFromProjectionMatrix(V),k=this.localClippingEnabled,P=ht.init(this.clippingPlanes,k),v=Et.get(w,g.length),v.init(),g.push(v),U.enabled===!0&&U.isPresenting===!0){const rt=x.xr.getDepthSensingMesh();rt!==null&&Ya(rt,N,-1/0,x.sortObjects)}Ya(w,N,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort($,ft),at=U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1,at&&st.addToRenderList(v,w),this.info.render.frame++,P===!0&&ht.beginShadows();const W=f.state.shadowsArray;Gt.render(W,w,N),P===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=v.opaque,B=v.transmissive;if(f.setupLights(),N.isArrayCamera){const rt=N.cameras;if(B.length>0)for(let Mt=0,At=rt.length;Mt<At;Mt++){const Ct=rt[Mt];bh(X,B,w,Ct)}at&&st.render(w);for(let Mt=0,At=rt.length;Mt<At;Mt++){const Ct=rt[Mt];wh(v,w,Ct,Ct.viewport)}}else B.length>0&&bh(X,B,w,N),at&&st.render(w),wh(v,w,N);R!==null&&(xt.updateMultisampleRenderTarget(R),xt.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(x,w,N),Yt.resetDefaultState(),F=-1,b=null,y.pop(),y.length>0?(f=y[y.length-1],P===!0&&ht.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function Ya(w,N,W,X){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||G.intersectsSprite(w)){X&&O.setFromMatrixPosition(w.matrixWorld).applyMatrix4(V);const Mt=K.update(w),At=w.material;At.visible&&v.push(w,Mt,At,W,O.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||G.intersectsObject(w))){const Mt=K.update(w),At=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),O.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),O.copy(Mt.boundingSphere.center)),O.applyMatrix4(w.matrixWorld).applyMatrix4(V)),Array.isArray(At)){const Ct=Mt.groups;for(let Ot=0,Bt=Ct.length;Ot<Bt;Ot++){const It=Ct[Ot],ie=At[It.materialIndex];ie&&ie.visible&&v.push(w,Mt,ie,W,O.z,It)}}else At.visible&&v.push(w,Mt,At,W,O.z,null)}}const rt=w.children;for(let Mt=0,At=rt.length;Mt<At;Mt++)Ya(rt[Mt],N,W,X)}function wh(w,N,W,X){const B=w.opaque,rt=w.transmissive,Mt=w.transparent;f.setupLightsView(W),P===!0&&ht.setGlobalState(x.clippingPlanes,W),X&&ct.viewport(S.copy(X)),B.length>0&&Zo(B,N,W),rt.length>0&&Zo(rt,N,W),Mt.length>0&&Zo(Mt,N,W),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function bh(w,N,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new Cn(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?bi:ni,minFilter:Kn,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const rt=f.state.transmissionRenderTarget[X.id],Mt=X.viewport||S;rt.setSize(Mt.z,Mt.w);const At=x.getRenderTarget();x.setRenderTarget(rt),x.getClearColor(q),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),at?st.render(W):x.clear();const Ct=x.toneMapping;x.toneMapping=Jn;const Ot=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),P===!0&&ht.setGlobalState(x.clippingPlanes,X),Zo(w,W,X),xt.updateMultisampleRenderTarget(rt),xt.updateRenderTargetMipmap(rt),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let It=0,ie=N.length;It<ie;It++){const _e=N[It],xe=_e.object,nn=_e.geometry,se=_e.material,kt=_e.group;if(se.side===Qe&&xe.layers.test(X.layers)){const qe=se.side;se.side=Ne,se.needsUpdate=!0,Th(xe,W,X,nn,se,kt),se.side=qe,se.needsUpdate=!0,Bt=!0}}Bt===!0&&(xt.updateMultisampleRenderTarget(rt),xt.updateRenderTargetMipmap(rt))}x.setRenderTarget(At),x.setClearColor(q,j),Ot!==void 0&&(X.viewport=Ot),x.toneMapping=Ct}function Zo(w,N,W){const X=N.isScene===!0?N.overrideMaterial:null;for(let B=0,rt=w.length;B<rt;B++){const Mt=w[B],At=Mt.object,Ct=Mt.geometry,Ot=X===null?Mt.material:X,Bt=Mt.group;At.layers.test(W.layers)&&Th(At,N,W,Ct,Ot,Bt)}}function Th(w,N,W,X,B,rt){w.onBeforeRender(x,N,W,X,B,rt),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(x,N,W,X,w,rt),B.transparent===!0&&B.side===Qe&&B.forceSinglePass===!1?(B.side=Ne,B.needsUpdate=!0,x.renderBufferDirect(W,N,X,B,w,rt),B.side=Mi,B.needsUpdate=!0,x.renderBufferDirect(W,N,X,B,w,rt),B.side=Qe):x.renderBufferDirect(W,N,X,B,w,rt),w.onAfterRender(x,N,W,X,B,rt)}function Qo(w,N,W){N.isScene!==!0&&(N=H);const X=Tt.get(w),B=f.state.lights,rt=f.state.shadowsArray,Mt=B.state.version,At=J.getParameters(w,B.state,rt,N,W),Ct=J.getProgramCacheKey(At);let Ot=X.programs;X.environment=w.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(w.isMeshStandardMaterial?E:Wt).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Ot===void 0&&(w.addEventListener("dispose",lt),Ot=new Map,X.programs=Ot);let Bt=Ot.get(Ct);if(Bt!==void 0){if(X.currentProgram===Bt&&X.lightsStateVersion===Mt)return Ah(w,At),Bt}else At.uniforms=J.getUniforms(w),w.onBuild(W,At,x),w.onBeforeCompile(At,x),Bt=J.acquireProgram(At,Ct),Ot.set(Ct,Bt),X.uniforms=At.uniforms;const It=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(It.clippingPlanes=ht.uniform),Ah(w,At),X.needsLights=h0(w),X.lightsStateVersion=Mt,X.needsLights&&(It.ambientLightColor.value=B.state.ambient,It.lightProbe.value=B.state.probe,It.directionalLights.value=B.state.directional,It.directionalLightShadows.value=B.state.directionalShadow,It.spotLights.value=B.state.spot,It.spotLightShadows.value=B.state.spotShadow,It.rectAreaLights.value=B.state.rectArea,It.ltc_1.value=B.state.rectAreaLTC1,It.ltc_2.value=B.state.rectAreaLTC2,It.pointLights.value=B.state.point,It.pointLightShadows.value=B.state.pointShadow,It.hemisphereLights.value=B.state.hemi,It.directionalShadowMap.value=B.state.directionalShadowMap,It.directionalShadowMatrix.value=B.state.directionalShadowMatrix,It.spotShadowMap.value=B.state.spotShadowMap,It.spotLightMatrix.value=B.state.spotLightMatrix,It.spotLightMap.value=B.state.spotLightMap,It.pointShadowMap.value=B.state.pointShadowMap,It.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Bt,X.uniformsList=null,Bt}function Eh(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=oa.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Ah(w,N){const W=Tt.get(w);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function l0(w,N,W,X,B){N.isScene!==!0&&(N=H),xt.resetTextureUnits();const rt=N.fog,Mt=X.isMeshStandardMaterial?N.environment:null,At=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ti,Ct=(X.isMeshStandardMaterial?E:Wt).get(X.envMap||Mt),Ot=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Bt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),It=!!W.morphAttributes.position,ie=!!W.morphAttributes.normal,_e=!!W.morphAttributes.color;let xe=Jn;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(xe=x.toneMapping);const nn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,se=nn!==void 0?nn.length:0,kt=Tt.get(X),qe=f.state.lights;if(P===!0&&(k===!0||w!==b)){const fn=w===b&&X.id===F;ht.setState(X,w,fn)}let ce=!1;X.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==qe.state.version||kt.outputColorSpace!==At||B.isBatchedMesh&&kt.batching===!1||!B.isBatchedMesh&&kt.batching===!0||B.isBatchedMesh&&kt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&kt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&kt.instancing===!1||!B.isInstancedMesh&&kt.instancing===!0||B.isSkinnedMesh&&kt.skinning===!1||!B.isSkinnedMesh&&kt.skinning===!0||B.isInstancedMesh&&kt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&kt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&kt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&kt.instancingMorph===!1&&B.morphTexture!==null||kt.envMap!==Ct||X.fog===!0&&kt.fog!==rt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==ht.numPlanes||kt.numIntersection!==ht.numIntersection)||kt.vertexAlphas!==Ot||kt.vertexTangents!==Bt||kt.morphTargets!==It||kt.morphNormals!==ie||kt.morphColors!==_e||kt.toneMapping!==xe||kt.morphTargetsCount!==se)&&(ce=!0):(ce=!0,kt.__version=X.version);let Fn=kt.currentProgram;ce===!0&&(Fn=Qo(X,N,B));let Jo=!1,Ci=!1,$a=!1;const Ue=Fn.getUniforms(),oi=kt.uniforms;if(ct.useProgram(Fn.program)&&(Jo=!0,Ci=!0,$a=!0),X.id!==F&&(F=X.id,Ci=!0),Jo||b!==w){Ue.setValue(C,"projectionMatrix",w.projectionMatrix),Ue.setValue(C,"viewMatrix",w.matrixWorldInverse);const fn=Ue.map.cameraPosition;fn!==void 0&&fn.setValue(C,O.setFromMatrixPosition(w.matrixWorld)),mt.logarithmicDepthBuffer&&Ue.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ue.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,Ci=!0,$a=!0)}if(B.isSkinnedMesh){Ue.setOptional(C,B,"bindMatrix"),Ue.setOptional(C,B,"bindMatrixInverse");const fn=B.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Ue.setValue(C,"boneTexture",fn.boneTexture,xt))}B.isBatchedMesh&&(Ue.setOptional(C,B,"batchingTexture"),Ue.setValue(C,"batchingTexture",B._matricesTexture,xt),Ue.setOptional(C,B,"batchingColorTexture"),B._colorsTexture!==null&&Ue.setValue(C,"batchingColorTexture",B._colorsTexture,xt));const Ka=W.morphAttributes;if((Ka.position!==void 0||Ka.normal!==void 0||Ka.color!==void 0)&&Rt.update(B,W,Fn),(Ci||kt.receiveShadow!==B.receiveShadow)&&(kt.receiveShadow=B.receiveShadow,Ue.setValue(C,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(oi.envMap.value=Ct,oi.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(oi.envMapIntensity.value=N.environmentIntensity),Ci&&(Ue.setValue(C,"toneMappingExposure",x.toneMappingExposure),kt.needsLights&&c0(oi,$a),rt&&X.fog===!0&&nt.refreshFogUniforms(oi,rt),nt.refreshMaterialUniforms(oi,X,it,Q,f.state.transmissionRenderTarget[w.id]),oa.upload(C,Eh(kt),oi,xt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(oa.upload(C,Eh(kt),oi,xt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ue.setValue(C,"center",B.center),Ue.setValue(C,"modelViewMatrix",B.modelViewMatrix),Ue.setValue(C,"normalMatrix",B.normalMatrix),Ue.setValue(C,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const fn=X.uniformsGroups;for(let ja=0,u0=fn.length;ja<u0;ja++){const Rh=fn[ja];jt.update(Rh,Fn),jt.bind(Rh,Fn)}}return Fn}function c0(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function h0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,N,W){Tt.get(w.texture).__webglTexture=N,Tt.get(w.depthTexture).__webglTexture=W;const X=Tt.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const W=Tt.get(w);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,W=0){R=w,L=N,A=W;let X=!0,B=null,rt=!1,Mt=!1;if(w){const Ct=Tt.get(w);Ct.__useDefaultFramebuffer!==void 0?(ct.bindFramebuffer(C.FRAMEBUFFER,null),X=!1):Ct.__webglFramebuffer===void 0?xt.setupRenderTarget(w):Ct.__hasExternalTextures&&xt.rebindTextures(w,Tt.get(w.texture).__webglTexture,Tt.get(w.depthTexture).__webglTexture);const Ot=w.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Mt=!0);const Bt=Tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Bt[N])?B=Bt[N][W]:B=Bt[N],rt=!0):w.samples>0&&xt.useMultisampledRTT(w)===!1?B=Tt.get(w).__webglMultisampledFramebuffer:Array.isArray(Bt)?B=Bt[W]:B=Bt,S.copy(w.viewport),D.copy(w.scissor),Y=w.scissorTest}else S.copy(bt).multiplyScalar(it).floor(),D.copy(_t).multiplyScalar(it).floor(),Y=Vt;if(ct.bindFramebuffer(C.FRAMEBUFFER,B)&&X&&ct.drawBuffers(w,B),ct.viewport(S),ct.scissor(D),ct.setScissorTest(Y),rt){const Ct=Tt.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ct.__webglTexture,W)}else if(Mt){const Ct=Tt.get(w.texture),Ot=N||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ct.__webglTexture,W||0,Ot)}F=-1},this.readRenderTargetPixels=function(w,N,W,X,B,rt,Mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(At=At[Mt]),At){ct.bindFramebuffer(C.FRAMEBUFFER,At);try{const Ct=w.texture,Ot=Ct.format,Bt=Ct.type;if(!mt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-X&&W>=0&&W<=w.height-B&&C.readPixels(N,W,X,B,gt.convert(Ot),gt.convert(Bt),rt)}finally{const Ct=R!==null?Tt.get(R).__webglFramebuffer:null;ct.bindFramebuffer(C.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(w,N,W,X,B,rt,Mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(At=At[Mt]),At){ct.bindFramebuffer(C.FRAMEBUFFER,At);try{const Ct=w.texture,Ot=Ct.format,Bt=Ct.type;if(!mt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-X&&W>=0&&W<=w.height-B){const It=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,It),C.bufferData(C.PIXEL_PACK_BUFFER,rt.byteLength,C.STREAM_READ),C.readPixels(N,W,X,B,gt.convert(Ot),gt.convert(Bt),0),C.flush();const ie=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);await Dg(C,ie,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,It),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,rt)}finally{C.deleteBuffer(It),C.deleteSync(ie)}return rt}}finally{const Ct=R!==null?Tt.get(R).__webglFramebuffer:null;ct.bindFramebuffer(C.FRAMEBUFFER,Ct)}}},this.copyFramebufferToTexture=function(w,N=null,W=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const X=Math.pow(2,-W),B=Math.floor(w.image.width*X),rt=Math.floor(w.image.height*X),Mt=N!==null?N.x:0,At=N!==null?N.y:0;xt.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,W,0,0,Mt,At,B,rt),ct.unbindTexture()},this.copyTextureToTexture=function(w,N,W=null,X=null,B=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],N=arguments[2],B=arguments[3]||0,W=null);let rt,Mt,At,Ct,Ot,Bt;W!==null?(rt=W.max.x-W.min.x,Mt=W.max.y-W.min.y,At=W.min.x,Ct=W.min.y):(rt=w.image.width,Mt=w.image.height,At=0,Ct=0),X!==null?(Ot=X.x,Bt=X.y):(Ot=0,Bt=0);const It=gt.convert(N.format),ie=gt.convert(N.type);xt.setTexture2D(N,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const _e=C.getParameter(C.UNPACK_ROW_LENGTH),xe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),nn=C.getParameter(C.UNPACK_SKIP_PIXELS),se=C.getParameter(C.UNPACK_SKIP_ROWS),kt=C.getParameter(C.UNPACK_SKIP_IMAGES),qe=w.isCompressedTexture?w.mipmaps[B]:w.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,qe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,qe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,At),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ct),w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,B,Ot,Bt,rt,Mt,It,ie,qe.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,B,Ot,Bt,qe.width,qe.height,It,qe.data):C.texSubImage2D(C.TEXTURE_2D,B,Ot,Bt,It,ie,qe),C.pixelStorei(C.UNPACK_ROW_LENGTH,_e),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,nn),C.pixelStorei(C.UNPACK_SKIP_ROWS,se),C.pixelStorei(C.UNPACK_SKIP_IMAGES,kt),B===0&&N.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),ct.unbindTexture()},this.copyTextureToTexture3D=function(w,N,W=null,X=null,B=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,w=arguments[2],N=arguments[3],B=arguments[4]||0);let rt,Mt,At,Ct,Ot,Bt,It,ie,_e;const xe=w.isCompressedTexture?w.mipmaps[B]:w.image;W!==null?(rt=W.max.x-W.min.x,Mt=W.max.y-W.min.y,At=W.max.z-W.min.z,Ct=W.min.x,Ot=W.min.y,Bt=W.min.z):(rt=xe.width,Mt=xe.height,At=xe.depth,Ct=0,Ot=0,Bt=0),X!==null?(It=X.x,ie=X.y,_e=X.z):(It=0,ie=0,_e=0);const nn=gt.convert(N.format),se=gt.convert(N.type);let kt;if(N.isData3DTexture)xt.setTexture3D(N,0),kt=C.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)xt.setTexture2DArray(N,0),kt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const qe=C.getParameter(C.UNPACK_ROW_LENGTH),ce=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Fn=C.getParameter(C.UNPACK_SKIP_PIXELS),Jo=C.getParameter(C.UNPACK_SKIP_ROWS),Ci=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,xe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ct),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ot),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Bt),w.isDataTexture||w.isData3DTexture?C.texSubImage3D(kt,B,It,ie,_e,rt,Mt,At,nn,se,xe.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(kt,B,It,ie,_e,rt,Mt,At,nn,xe.data):C.texSubImage3D(kt,B,It,ie,_e,rt,Mt,At,nn,se,xe),C.pixelStorei(C.UNPACK_ROW_LENGTH,qe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ce),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Fn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Jo),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ci),B===0&&N.generateMipmaps&&C.generateMipmap(kt),ct.unbindTexture()},this.initRenderTarget=function(w){Tt.get(w).__webglFramebuffer===void 0&&xt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?xt.setTextureCube(w,0):w.isData3DTexture?xt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?xt.setTexture2DArray(w,0):xt.setTexture2D(w,0),ct.unbindTexture()},this.resetState=function(){L=0,A=0,R=null,ct.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===zc?"display-p3":"srgb",e.unpackColorSpace=re.workingColorSpace===Na?"display-p3":"srgb"}}class $s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=e,this.far=n}clone(){return new $s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ks extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class NM{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Wc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ye=new I;class pa{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array),o=oe(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new pa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class dp extends Ai{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let gs;const ho=new I,vs=new I,_s=new I,xs=new Ft,uo=new Ft,fp=new de,Sr=new I,fo=new I,wr=new I,Ku=new Ft,Rl=new Ft,ju=new Ft;class FM extends Re{constructor(t=new dp){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new Be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new NM(e,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new pa(n,3,0,!1)),gs.setAttribute("uv",new pa(n,2,3,!1))}this.geometry=gs,this.material=t,this.center=new Ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),fp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-_s.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;br(Sr.set(-.5,-.5,0),_s,r,vs,s,o),br(fo.set(.5,-.5,0),_s,r,vs,s,o),br(wr.set(.5,.5,0),_s,r,vs,s,o),Ku.set(0,0),Rl.set(1,0),ju.set(1,1);let a=t.ray.intersectTriangle(Sr,fo,wr,!1,ho);if(a===null&&(br(fo.set(-.5,.5,0),_s,r,vs,s,o),Rl.set(0,1),a=t.ray.intersectTriangle(Sr,wr,fo,!1,ho),a===null))return;const l=t.ray.origin.distanceTo(ho);l<t.near||l>t.far||e.push({distance:l,point:ho.clone(),uv:xn.getInterpolation(ho,Sr,fo,wr,Ku,Rl,ju,new Ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function br(i,t,e,n,s,o){xs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(uo.x=o*xs.x-s*xs.y,uo.y=s*xs.x+o*xs.y):uo.copy(xs),i.copy(t),i.x+=uo.x,i.y+=uo.y,i.applyMatrix4(fp)}class qc extends Oe{constructor(t=null,e=1,n=1,s,o,r,a,l,c=ue,h=ue,u,d){super(null,r,a,l,c,h,s,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pp extends Ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ma=new I,ga=new I,Zu=new de,po=new Gc,Tr=new qo,Cl=new I,Qu=new I;class OM extends Re{constructor(t=new Be,e=new pp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)ma.fromBufferAttribute(e,s-1),ga.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ma.distanceTo(ga);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),Tr.radius+=o,t.ray.intersectsSphere(Tr)===!1)return;Zu.copy(s).invert(),po.copy(t.ray).applyMatrix4(Zu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let v=p,f=m-1;v<f;v+=c){const g=h.getX(v),y=h.getX(v+1),x=Er(this,t,po,l,g,y);x&&e.push(x)}if(this.isLineLoop){const v=h.getX(m-1),f=h.getX(p),g=Er(this,t,po,l,v,f);g&&e.push(g)}}else{const p=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let v=p,f=m-1;v<f;v+=c){const g=Er(this,t,po,l,v,v+1);g&&e.push(g)}if(this.isLineLoop){const v=Er(this,t,po,l,m-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Er(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(ma.fromBufferAttribute(r,s),ga.fromBufferAttribute(r,o),e.distanceSqToSegment(ma,ga,Cl,Qu)>n)return;Cl.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Cl);if(!(l<t.near||l>t.far))return{distance:l,point:Qu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,object:i}}const Ju=new I,td=new I;class BM extends OM{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)Ju.fromBufferAttribute(e,s),td.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ju.distanceTo(td);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yc extends Ai{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ed=new de,bc=new Gc,Ar=new qo,Rr=new I;class mp extends Re{constructor(t=new Be,e=new Yc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(s),Ar.radius+=o,t.ray.intersectsSphere(Ar)===!1)return;ed.copy(s).invert(),bc.copy(t.ray).applyMatrix4(ed);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let m=d,v=p;m<v;m++){const f=c.getX(m);Rr.fromBufferAttribute(u,f),nd(Rr,f,l,s,t,e,this)}}else{const d=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let m=d,v=p;m<v;m++)Rr.fromBufferAttribute(u,m),nd(Rr,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function nd(i,t,e,n,s,o,r){const a=bc.distanceSqToPoint(i);if(a<e){const l=new I;bc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:r})}}class Ba extends Oe{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Cr=new I,Pr=new I,Pl=new I,Dr=new xn;class zM extends Be{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),o=Math.cos(Is*e),r=t.getIndex(),a=t.getAttribute("position"),l=r?r.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<l;m+=3){r?(c[0]=r.getX(m),c[1]=r.getX(m+1),c[2]=r.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:v,b:f,c:g}=Dr;if(v.fromBufferAttribute(a,c[0]),f.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),Dr.getNormal(Pl),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,u[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const x=(y+1)%3,T=u[y],L=u[x],A=Dr[h[y]],R=Dr[h[x]],F=`${T}_${L}`,b=`${L}_${T}`;b in d&&d[b]?(Pl.dot(d[b].normal)<=o&&(p.push(A.x,A.y,A.z),p.push(R.x,R.y,R.z)),d[b]=null):F in d||(d[F]={index0:c[y],index1:c[x],normal:Pl.clone()})}}for(const m in d)if(d[m]){const{index0:v,index1:f}=d[m];Cr.fromBufferAttribute(a,v),Pr.fromBufferAttribute(a,f),p.push(Cr.x,Cr.y,Cr.z),p.push(Pr.x,Pr.y,Pr.z)}this.setAttribute("position",new Ce(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class $c extends Be{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new I,d=new I,p=[],m=[],v=[],f=[];for(let g=0;g<=n;g++){const y=[],x=g/n;let T=0;g===0&&r===0?T=.5/e:g===n&&l===Math.PI&&(T=-.5/e);for(let L=0;L<=e;L++){const A=L/e;u.x=-t*Math.cos(s+A*o)*Math.sin(r+x*a),u.y=t*Math.cos(r+x*a),u.z=t*Math.sin(s+A*o)*Math.sin(r+x*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),f.push(A+T,1-x),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){const x=h[g][y+1],T=h[g][y],L=h[g+1][y],A=h[g+1][y+1];(g!==0||r>0)&&p.push(x,T,A),(g!==n-1||l<Math.PI)&&p.push(T,L,A)}this.setIndex(p),this.setAttribute("position",new Ce(m,3)),this.setAttribute("normal",new Ce(v,3)),this.setAttribute("uv",new Ce(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class HM extends Ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xf,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class id extends HM{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new wt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new wt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new wt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const sd={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class WM{constructor(t,e,n){const s=this;let o=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}}const GM=new WM;class Kc{constructor(t){this.manager=t!==void 0?t:GM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Kc.DEFAULT_MATERIAL_NAME="__DEFAULT";class VM extends Kc{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=sd.get(t);if(r!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0),r;const a=Oo("img");function l(){h(),sd.add(t,this),e&&e(this),o.manager.itemEnd(t)}function c(u){h(),s&&s(u),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(t),a.src=t,a}}class so extends Kc{constructor(t){super(t)}load(t,e,n,s){const o=new Oe,r=new VM(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,s),o}}class jc extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class XM extends jc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Dl=new de,od=new I,rd=new I;class qM{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vc,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;od.setFromMatrixPosition(t.matrixWorld),e.position.copy(od),rd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rd),e.updateMatrixWorld(),Dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class YM extends qM{constructor(){super(new Bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gp extends jc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new YM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ad extends jc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oc);const vp=13625079,$M=[.3,.52,.79],KM=[.81,.9,.97],Ll=i=>`rgb(${Math.round(i[0]*255)},${Math.round(i[1]*255)},${Math.round(i[2]*255)})`;function jM(i,t,e){const n=[(t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2],s=i.createLinearGradient(0,0,0,256);s.addColorStop(0,Ll(t)),s.addColorStop(.55,Ll(n)),s.addColorStop(1,Ll(e)),i.fillStyle=s,i.fillRect(0,0,2,256)}function ZM(){const i=document.createElement("canvas");i.width=2,i.height=256;const t=i.getContext("2d");t&&jM(t,$M,KM);const e=new Ba(i);return e.colorSpace=ae,e}function QM(i){const t=i|0,e=`
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
`.trim();return new Ve({uniforms:{tColor:{value:null},tDepth:{value:null},tBloom:{value:null},tAO:{value:null},uSunUV:{value:new Ft(.5,.5)},uSunColor:{value:new wt(1,.95,.8)},uIntensity:{value:0},uDecay:{value:.96},uWeight:{value:.9},uBloom:{value:0},uAO:{value:0},uUnderwater:{value:0},uWaterIrradiance:{value:new wt(.04,.18,.26)}},vertexShader:e,fragmentShader:n,depthTest:!1,depthWrite:!1})}class ld{constructor(t){_(this,"material");_(this,"quad");_(this,"quadScene",new Ks);_(this,"quadCam",new Bo(-1,1,1,-1,0,1));this.material=QM(t),this.quad=new Qt(new tn(2,2),this.material),this.quadScene.add(this.quad)}render(t){t.render(this.quadScene,this.quadCam)}dispose(){this.material.dispose(),this.quad.geometry.dispose()}}const JM=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim(),t1=`
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
`.trim(),e1=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim(),n1=`
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
`.trim();class i1{constructor(t,e){_(this,"bloomA");_(this,"bloomB");_(this,"extractMat");_(this,"extractScene",new Ks);_(this,"extractCam",new Bo(-1,1,1,-1,0,1));_(this,"blurMat");_(this,"blurScene",new Ks);_(this,"blurCam",new Bo(-1,1,1,-1,0,1));this.bloomA=this.buildRT(1,1),this.bloomB=this.buildRT(1,1),this.extractMat=new Ve({uniforms:{tScene:{value:null},uThreshold:{value:1.05},uKnee:{value:.22},uSourceTexel:{value:new Ft(1,1)}},vertexShader:JM,fragmentShader:t1,depthTest:!1,depthWrite:!1});const n=new Qt(new tn(2,2),this.extractMat);this.extractScene.add(n),this.blurMat=new Ve({uniforms:{tBlur:{value:null},uTexelSize:{value:new Ft(1,1)},uHorizontal:{value:1}},vertexShader:e1,fragmentShader:n1,depthTest:!1,depthWrite:!1});const s=new Qt(new tn(2,2),this.blurMat);this.blurScene.add(s),this.setSize(t,e)}get texture(){return this.bloomA.texture}setSize(t,e){this.bloomA.dispose(),this.bloomB.dispose();const n=Math.max(1,Math.round(t)),s=Math.max(1,Math.round(e));this.bloomA=this.buildRT(n,s),this.bloomB=this.buildRT(n,s),this.extractMat.uniforms.uSourceTexel.value.set(1/(n*4),1/(s*4)),this.blurMat.uniforms.uTexelSize.value.set(1/n,1/s)}render(t,e){this.extractMat.uniforms.tScene.value=e,t.setRenderTarget(this.bloomA),t.clear(),t.render(this.extractScene,this.extractCam);for(let n=0;n<2;n++)this.blurMat.uniforms.tBlur.value=this.bloomA.texture,this.blurMat.uniforms.uHorizontal.value=1,t.setRenderTarget(this.bloomB),t.clear(),t.render(this.blurScene,this.blurCam),this.blurMat.uniforms.tBlur.value=this.bloomB.texture,this.blurMat.uniforms.uHorizontal.value=0,t.setRenderTarget(this.bloomA),t.clear(),t.render(this.blurScene,this.blurCam);t.setRenderTarget(null)}dispose(){this.bloomA.dispose(),this.bloomB.dispose(),this.extractMat.dispose(),this.blurMat.dispose()}buildRT(t,e){return new Cn(t,e,{type:bi,depthBuffer:!1})}}function _p(i){const t=i.visualViewport,e=t&&t.width>0?t.width:i.innerWidth,n=t&&t.height>0?t.height:i.innerHeight;return{width:Math.max(1,Math.ceil(e)),height:Math.max(1,Math.ceil(n))}}const Zc=1,Do=2,zo=3,Yo=4,Pt=16,ve=192;class $o{constructor(){_(this,"blocks",new Uint16Array(Pt*ve*Pt));_(this,"fluid",new Uint8Array(Pt*ve*Pt));_(this,"dirty",!0)}idx(t,e,n){return t+n*Pt+e*Pt*Pt}inBounds(t,e,n){return t>=0&&t<Pt&&e>=0&&e<ve&&n>=0&&n<Pt}get(t,e,n){return this.inBounds(t,e,n)?this.blocks[this.idx(t,e,n)]:0}set(t,e,n,s){this.inBounds(t,e,n)&&(this.blocks[this.idx(t,e,n)]=s)}getFluid(t,e,n){return this.inBounds(t,e,n)?this.fluid[this.idx(t,e,n)]:0}setFluid(t,e,n,s){this.inBounds(t,e,n)&&(this.fluid[this.idx(t,e,n)]=s)}static fromBuffers(t,e){const n=new $o;return n.blocks.set(new Uint16Array(t)),n.fluid.set(new Uint8Array(e)),n}}const xp=16,yp=32,cd=i=>i&15,s1=i=>(i&xp)!==0,o1=i=>(i&yp)!==0,Mp=(i,t,e)=>i&15|(t?xp:0)|(e?yp:0),Jt=i=>i>>4,Je=i=>i&15;function _n(i,t,e){let n=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,1274126177);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}const Lo=i=>i*i*(3-2*i);function r1(i,t,e){const n=Math.floor(i),s=Math.floor(t),o=i-n,r=t-s,a=_n(n,s,e),l=_n(n+1,s,e),c=_n(n,s+1,e),h=_n(n+1,s+1,e),u=Lo(o),d=Lo(r),p=a+(l-a)*u,m=c+(h-c)*u;return p+(m-p)*d}function Cs(i,t,e,n=4){let s=1,o=1,r=0,a=0;for(let l=0;l<n;l++)r+=s*r1(i*o,t*o,e+l*101),a+=s,s*=.5,o*=2;return r/a}function Sp(i,t,e,n){let s=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,2147483647)^Math.imul(n|0,1274126177);return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296}function Ke(i,t,e,n){const s=Math.floor(i),o=Math.floor(t),r=Math.floor(e),a=Lo(i-s),l=Lo(t-o),c=Lo(e-r),h=(f,g,y)=>f+(g-f)*y,u=(f,g,y)=>Sp(s+f,o+g,r+y,n),d=h(u(0,0,0),u(1,0,0),a),p=h(u(0,1,0),u(1,1,0),a),m=h(u(0,0,1),u(1,0,1),a),v=h(u(0,1,1),u(1,1,1),a);return h(h(d,p,l),h(m,v,l),c)}function wp(i){let t=i>>>0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Yn=(i=>(i[i.PosX=0]="PosX",i[i.NegX=1]="NegX",i[i.PosY=2]="PosY",i[i.NegY=3]="NegY",i[i.PosZ=4]="PosZ",i[i.NegZ=5]="NegZ",i))(Yn||{});const Ht={stone:0,dirt:1,grass_top:2,grass_side:3,cobblestone:4,sand:5,oak_log_top:6,oak_log_side:7,oak_planks:8,coal_ore:9,water:10,oak_leaves:11,crafting_table_top:12,crafting_table_side:13,iron_ore:14,furnace_front:15,gravel:16,grass_plant:17,obsidian:18,netherrack:19,soul_sand:20,glowstone:21,nether_quartz_ore:22,lava:23,bedrock:24,nether_portal:25,sandstone:26,cactus:27,ice:28,snow:29,spruce_log:30,spruce_leaves:31,coal_block:32,iron_block:33,quartz_block:34,diamond_ore:35,diamond_block:36},te=i=>[i,i,i,i,i,i],mo=(i,t,e)=>[i,i,t,e,i,i],a1=258,l1=296,en=[{id:0,name:"air",solid:!1,transparent:!0,faces:te(0),hardness:0,drop:null,needsTool:!1,tool:null},{id:1,name:"stone",solid:!0,transparent:!1,faces:te(Ht.stone),hardness:1.5,drop:4,needsTool:!0,tool:"pickaxe"},{id:2,name:"dirt",solid:!0,transparent:!1,faces:te(Ht.dirt),hardness:.5,drop:2,needsTool:!1,tool:"shovel"},{id:3,name:"grass",solid:!0,transparent:!1,faces:mo(Ht.grass_side,Ht.grass_top,Ht.dirt),hardness:.6,drop:2,needsTool:!1,tool:"shovel"},{id:4,name:"cobblestone",solid:!0,transparent:!1,faces:te(Ht.cobblestone),hardness:2,drop:4,needsTool:!0,tool:"pickaxe"},{id:5,name:"sand",solid:!0,transparent:!1,faces:te(Ht.sand),hardness:.5,drop:5,needsTool:!1,tool:"shovel"},{id:6,name:"oak_log",solid:!0,transparent:!1,faces:mo(Ht.oak_log_side,Ht.oak_log_top,Ht.oak_log_top),hardness:2,drop:6,needsTool:!1,tool:"axe"},{id:7,name:"oak_planks",solid:!0,transparent:!1,faces:te(Ht.oak_planks),hardness:2,drop:7,needsTool:!1,tool:"axe"},{id:8,name:"coal_ore",solid:!0,transparent:!1,faces:te(Ht.coal_ore),hardness:3,drop:a1,needsTool:!0,tool:"pickaxe"},{id:9,name:"water",solid:!1,transparent:!0,faces:te(Ht.water),hardness:0,drop:null,needsTool:!1,tool:null},{id:10,name:"oak_leaves",solid:!0,transparent:!0,faces:te(Ht.oak_leaves),hardness:.2,drop:null,needsTool:!1,tool:null},{id:11,name:"crafting_table",solid:!0,transparent:!1,faces:mo(Ht.crafting_table_side,Ht.crafting_table_top,Ht.oak_planks),hardness:2.5,drop:11,needsTool:!1,tool:"axe"},{id:12,name:"iron_ore",solid:!0,transparent:!1,faces:te(Ht.iron_ore),hardness:3,drop:12,needsTool:!0,tool:"pickaxe",minTier:2},{id:13,name:"furnace",solid:!0,transparent:!1,faces:mo(Ht.furnace_front,Ht.cobblestone,Ht.cobblestone),hardness:3.5,drop:13,needsTool:!0,tool:"pickaxe"},{id:14,name:"torch",solid:!1,transparent:!0,faces:te(0),hardness:0,drop:14,needsTool:!1,tool:null,light:14},{id:15,name:"gravel",solid:!0,transparent:!1,faces:te(Ht.gravel),hardness:.6,drop:15,needsTool:!1,tool:"shovel"},{id:16,name:"grass_plant",solid:!1,transparent:!0,faces:te(Ht.grass_plant),hardness:0,drop:null,needsTool:!1,tool:null},{id:17,name:"tall_grass",solid:!1,transparent:!0,faces:te(Ht.grass_plant),hardness:0,drop:null,needsTool:!1,tool:null},{id:18,name:"obsidian",solid:!0,transparent:!1,faces:te(Ht.obsidian),hardness:50,drop:18,needsTool:!0,tool:"pickaxe",minTier:4},{id:19,name:"netherrack",solid:!0,transparent:!1,faces:te(Ht.netherrack),hardness:.4,drop:19,needsTool:!0,tool:"pickaxe"},{id:20,name:"soul_sand",solid:!0,transparent:!1,faces:te(Ht.soul_sand),hardness:.5,drop:20,needsTool:!1,tool:"shovel"},{id:21,name:"glowstone",solid:!0,transparent:!1,faces:te(Ht.glowstone),hardness:.3,drop:21,needsTool:!1,tool:null,light:15},{id:22,name:"nether_quartz_ore",solid:!0,transparent:!1,faces:te(Ht.nether_quartz_ore),hardness:3,drop:295,needsTool:!0,tool:"pickaxe",minTier:1},{id:23,name:"lava",solid:!1,transparent:!0,faces:te(Ht.lava),hardness:100,drop:null,needsTool:!1,tool:null,light:15},{id:24,name:"bedrock",solid:!0,transparent:!1,faces:te(Ht.bedrock),hardness:-1,drop:null,needsTool:!1,tool:null},{id:25,name:"nether_portal",solid:!1,transparent:!0,faces:te(Ht.nether_portal),hardness:-1,drop:null,needsTool:!1,tool:null,light:11},{id:26,name:"sandstone",solid:!0,transparent:!1,faces:te(Ht.sandstone),hardness:.8,drop:26,needsTool:!0,tool:"pickaxe"},{id:27,name:"cactus",solid:!0,transparent:!1,faces:te(Ht.cactus),hardness:.4,drop:27,needsTool:!1,tool:null},{id:28,name:"ice",solid:!0,transparent:!1,faces:te(Ht.ice),hardness:.5,drop:null,needsTool:!1,tool:"pickaxe"},{id:29,name:"snow_layer",solid:!1,transparent:!0,faces:te(Ht.snow),hardness:0,drop:null,needsTool:!1,tool:"shovel"},{id:30,name:"spruce_log",solid:!0,transparent:!1,faces:mo(Ht.spruce_log,Ht.oak_log_top,Ht.oak_log_top),hardness:2,drop:30,needsTool:!1,tool:"axe"},{id:31,name:"spruce_leaves",solid:!0,transparent:!0,faces:te(Ht.spruce_leaves),hardness:.2,drop:null,needsTool:!1,tool:null},{id:32,name:"coal_block",solid:!0,transparent:!1,faces:te(Ht.coal_block),hardness:5,drop:32,needsTool:!0,tool:"pickaxe"},{id:33,name:"iron_block",solid:!0,transparent:!1,faces:te(Ht.iron_block),hardness:5,drop:33,needsTool:!0,tool:"pickaxe",minTier:2},{id:34,name:"quartz_block",solid:!0,transparent:!1,faces:te(Ht.quartz_block),hardness:.8,drop:34,needsTool:!0,tool:"pickaxe"},{id:35,name:"diamond_ore",solid:!0,transparent:!1,faces:te(Ht.diamond_ore),hardness:3,drop:l1,needsTool:!0,tool:"pickaxe",minTier:3},{id:36,name:"diamond_block",solid:!0,transparent:!1,faces:te(Ht.diamond_block),hardness:5,drop:36,needsTool:!0,tool:"pickaxe",minTier:3}],bp=3,kn=9,Ho=10,za=6,c1=7,h1=4,Tp=11,u1=12,hd=13,Fs=14,ud=15,d1=16,Ep=17,$n=18,f1=19,p1=5,Ap=20,m1=21,g1=22,va=23,Qc=24,Ha=25,v1=26,Ts=27,Os=28,Jc=29,Wa=30,Ga=31,_1=32,x1=35,Tc=i=>i===va,y1=i=>i===Ha,we=i=>{var t;return((t=en[i])==null?void 0:t.solid)??!1},ei=i=>i===kn,dd=i=>i===Ho||i===Ga,qi=i=>i===d1||i===Ep||i===Jc,fd=i=>we(i)||qi(i),pd=i=>i===0||i===kn||qi(i)||i===Ha,ys=i=>{const t=en[i];return t?t.solid&&!t.transparent:!1},Ul=(i,t)=>en[i].faces[t],Rp=i=>{var t;return((t=en[i])==null?void 0:t.hardness)??0},M1=i=>{var t;return((t=en[i])==null?void 0:t.needsTool)??!1},S1=i=>{var t;return((t=en[i])==null?void 0:t.light)??0};function Cp(i,t){var n;const e=((n=en[i])==null?void 0:n.tool)??null;return t!==null&&e!==null&&t.kind===e}const Pp=(i,t=null)=>{var e;return M1(i)?Cp(i,t)?t.tier>=(((e=en[i])==null?void 0:e.minTier)??1):!1:!0},w1=(i,t=null)=>{if(qi(i))return 0;const e=Math.max(0,Rp(i));if(e===0)return 0;const n=Cp(i,t)?t.speed:1,s=Pp(i,t)?30:100;return Math.ceil(s*e/n)*50},b1=(i,t=null)=>{var e;return Pp(i,t)?((e=en[i])==null?void 0:e.drop)??null:null},T1=i=>i===Ts,E1=i=>i===Os?.98:.6,md=320,A1=.38,R1=.66;function Dp(i,t,e){return Cs(i/130,t/130,e+4321,2)}function C1(i,t,e){return Cs(i/md,t/md,e+9001,3)}function Es(i,t,e){const n=C1(i,t,e);return n<A1?"snow":n>R1?"desert":Dp(i,t,e)>.62?"forest":"plains"}const th=1,P1=2,kl=3,go=5,D1=8,L1=12,U1=15,k1=16,I1=17,ee=116,N1=Mp(8,!0,!1);function F1(i,t,e){const n=Fe(i,t,e);return Math.abs(Fe(i+5,t,e)-n)<=3&&Math.abs(Fe(i-5,t,e)-n)<=3&&Math.abs(Fe(i,t+5,e)-n)<=3&&Math.abs(Fe(i,t-5,e)-n)<=3}function O1(i,t,e,n,s){const o=n-t;if(o<12)return!1;const r=i+(Ke(i/36,t/30,e/36,s+991)-.5)*26,a=t+(Ke(t/30,i/34,e/34,s+993)-.5)*22,l=e+(Ke(e/36,t/30,i/36,s+992)-.5)*26;return o<50?Math.abs(Ke(r/14,a/14,l/14,s+222)-.5)<.03:o<100?Math.abs(Ke(r/18,a/18,l/18,s+333)-.5)<.05?!0:Ke(r/22,a/22,l/22,s+700)<.07:Ke(r/26,a/26,l/26,s+700)<.07?!0:Math.abs(Ke(r/18,a/18,l/18,s+333)-.5)<.04}function Il(i,t,e,n){return Ke(i/5,t/5,e/5,n+303)>.82?U1:th}const B1=[{id:D1,attempts:20,size:17,minY:5,maxY:128,salt:2887841},{id:L1,attempts:20,size:9,minY:5,maxY:64,salt:2044082},{id:x1,attempts:1,size:8,minY:5,maxY:16,salt:5053075}],Lr=1,z1=(i,t,e)=>Math.max(t,Math.min(e,i));function H1(i,t,e,n,s){const o=Sp(t,e,s,i+n.salt|0);return wp(Math.floor(o*4294967296))}function W1(i,t,e,n,s,o,r,a){const l=H1(o,n,s,r,a),c=n*Pt+l()*Pt,h=s*Pt+l()*Pt,u=r.minY+Math.floor(l()*(r.maxY-r.minY+1)),d=z1(u+Math.floor(l()*5)-2,r.minY,r.maxY),p=l()*Math.PI,m=r.size/8,v=c+Math.sin(p)*m,f=c-Math.sin(p)*m,g=h+Math.cos(p)*m,y=h-Math.cos(p)*m;for(let x=0;x<r.size;x++){const T=x/r.size,L=v+(f-v)*T,A=u+(d-u)*T,R=g+(y-g)*T,F=(Math.sin(Math.PI*T)+1)*l()*r.size/16+1,b=F/2,S=F*(.55+l()*.15)/2,D=b,Y=Math.floor(L-b),q=Math.floor(L+b),j=Math.max(r.minY,Math.floor(A-S)),tt=Math.min(r.maxY,ve-1,Math.floor(A+S)),Q=Math.floor(R-D),it=Math.floor(R+D);for(let $=Y;$<=q;$++){if(Jt($)!==t)continue;const ft=($+.5-L)/b,bt=ft*ft;if(!(bt>=1))for(let _t=Q;_t<=it;_t++){if(Jt(_t)!==e)continue;const Vt=(_t+.5-R)/D,G=bt+Vt*Vt;if(!(G>=1))for(let P=j;P<=tt;P++){const k=(P+.5-A)/S;if(G+k*k>=1)continue;const V=Je($),O=Je(_t);i.get(V,P,O)===th&&i.set(V,P,O,r.id)}}}}}function G1(i,t,e,n){for(const s of B1)for(let o=t-Lr;o<=t+Lr;o++)for(let r=e-Lr;r<=e+Lr;r++)for(let a=0;a<s.attempts;a++)W1(i,t,e,o,r,n,s,a)}function Fe(i,t,e){const n=Cs(i/260,t/260,e,4),s=Cs(i/72,t/72,e+17,3);let o;n<.46?o=90+n*56:n<.56?o=116+(n-.46)*80:o=124+(n-.56)*180;let r=o+(s-.5)*8;{const a=Cs(i/140,t/140,e+777,3),l=Math.abs(a-.5),c=.028+s*.022+Math.max(0,n-.54)*.4;if(l<c){let h=1-l/c;h=h*h*(3-2*h);const u=2+Math.floor(Cs(i/60,t/60,e+555,2)*3),d=ee-u;r=r*(1-h)+d*h}}return Math.floor(r)}const di=2,V1=.08;function X1(i,t,e){const n=Dp(i,t,e);return n<.45?.003:n>.62?.08:.003+(n-.45)/.17*.077}function q1(i,t,e){return 4+Math.floor(_n(i,t,e*31+5)*3)}function gd(i,t,e,n,s,o,r,a=za,l=Ho,c=!1){const h=o+q1(n,s,r),u=(p,m,v,f,g)=>{if(m<0||m>=ve||Jt(p)!==t||Jt(v)!==e)return;const y=Je(p),x=Je(v);g&&i.get(y,m,x)!==0||i.set(y,m,x,f)};if(c){const p=h+2,m=o+3;for(let v=m;v<=p;v++){const f=p-v,g=f===0?0:Math.min(2,Math.floor((f+1)/2));for(let y=-g;y<=g;y++)for(let x=-g;x<=g;x++)Math.abs(y)+Math.abs(x)>g||u(n+y,v,s+x,l,!0)}}else{for(const m of[-2,-1])for(let v=-2;v<=2;v++)for(let f=-2;f<=2;f++)Math.abs(v)===2&&Math.abs(f)===2||u(n+v,h+m,s+f,l,!0);for(let m=-1;m<=1;m++)for(let v=-1;v<=1;v++)u(n+m,h,s+v,l,!0);const p=[[0,0],[1,0],[-1,0],[0,1],[0,-1]];for(const[m,v]of p)u(n+m,h+1,s+v,l,!0)}const d=c?h+1:h;for(let p=o+1;p<=d;p++)u(n,p,s,a,!1)}const Ur=127,Y1=31;function $1(i,t,e){const n=new $o,s=e+7e4;for(let o=0;o<Pt;o++)for(let r=0;r<Pt;r++){const a=i*Pt+r,l=t*Pt+o;for(let c=0;c<=Ur;c++){if(c<=1||c>=Ur-1){n.set(r,c,o,Qc);continue}if(Ke(a/18,c/16,l/18,s+1)>.55||Ke(a/9,c/10,l/9,s+2)>.78){c<=Y1&&n.set(r,c,o,va);continue}let u=f1;Ke(a/4,c/4,l/4,s+3)>.86?u=g1:Ke(a/10,c/10,l/10,s+4)>.9&&(u=Ap),n.set(r,c,o,u)}if(_n(a,l,s+5)<.012){for(let c=Ur-2;c>Ur-7;c--)if(n.get(r,c,o)===0){n.set(r,c,o,m1);break}}}return n.dirty=!0,n}function Lp(i,t,e,n="overworld"){if(n==="nether")return $1(i,t,e);const s=new $o;for(let a=0;a<Pt;a++)for(let l=0;l<Pt;l++){const c=i*Pt+l,h=t*Pt+a,u=Fe(c,h,e),d=Math.min(u,Fe(c+4,h,e),Fe(c-4,h,e),Fe(c,h+4,e),Fe(c,h-4,e)),p=F1(c,h,e),m=u<=ee+1,v=Es(c,h,e);for(let f=0;f<=u;f++){const g=p&&Ke((c+f*.8)/8,f/120,(h+f*.6)/8,e+888)>.9;if(f>1&&(g||f<u&&O1(c,f,h,d,e)))continue;let y=th;f===0||f<=4&&Ke(c*.7,f*3.3,h*.7,e+4242)<(5-f)/5?y=Qc:m?f===u||f>=u-3?y=go:y=Il(c,f,h,e):v==="desert"?f===u||f>=u-3?y=go:f>=u-7?y=v1:y=Il(c,f,h,e):f===u?y=kl:f>=u-3?y=P1:y=Il(c,f,h,e),s.set(l,f,a,y)}for(let f=u+1;f<=ee;f++)s.set(l,f,a,kn),s.setFluid(l,f,a,N1);if(u<ee&&v==="snow"&&s.set(l,ee,a,Os),!m&&u>ee+1&&v==="snow"){const f=s.get(l,u,a),g=s.get(l,u+1,a);f===kl&&g===0&&_n(c+1,h+3,e*19+41)<.85&&s.set(l,u+1,a,Jc)}}G1(s,i,t,e);const o=i*Pt,r=t*Pt;for(let a=o-di;a<o+Pt+di;a++)for(let l=r-di;l<r+Pt+di;l++){const c=_n(a,l,e*13+7);if(c>=V1)continue;const h=Fe(a,l,e);if(h<=ee+1)continue;const u=Es(a,l,e);u!=="plains"&&u!=="forest"||c<X1(a,l,e)&&gd(s,i,t,a,l,h,e)}for(let a=o-di;a<o+Pt+di;a++)for(let l=r-di;l<r+Pt+di;l++){if(Es(a,l,e)!=="snow")continue;const c=Fe(a,l,e);c<=ee+1||_n(a,l,e*17+3)>=.03||gd(s,i,t,a,l,c,e,Wa,Ga,!0)}for(let a=0;a<Pt;a++)for(let l=0;l<Pt;l++){const c=o+l,h=r+a;if(Es(c,h,e)!=="desert")continue;const u=Fe(c,h,e);if(u<=ee+1||s.get(l,u,a)!==go||s.get(l,u+1,a)!==0||_n(c,h,e*11+53)>=.02)continue;const p=u+1;if(l>0&&(s.get(l-1,p,a)===Ts||we(s.get(l-1,p,a)))||l<Pt-1&&(s.get(l+1,p,a)===Ts||we(s.get(l+1,p,a)))||a>0&&(s.get(l,p,a-1)===Ts||we(s.get(l,p,a-1)))||a<Pt-1&&(s.get(l,p,a+1)===Ts||we(s.get(l,p,a+1))))continue;const m=1+Math.floor(_n(c*3,h*3,e*7+13)*3);for(let v=1;v<=m;v++){const f=u+v;if(f>=ve)break;s.set(l,f,a,Ts)}}for(let a=0;a<Pt;a++)for(let l=0;l<Pt;l++){const c=o+l,h=r+a,u=Es(c,h,e);if(u!=="plains"&&u!=="forest")continue;const d=Fe(c,h,e);if(d<=ee+1||s.get(l,d,a)!==kl||s.get(l,d+1,a)!==0)continue;const p=_n(c,h,e*7+31);p>.4||s.set(l,d+1,a,p<.08?I1:k1)}return s.dirty=!0,s}const K1=ee+8/9;class j1{constructor(t=1,e=1,n={}){_(this,"camera",new Ge);_(this,"renderTarget");_(this,"planeY");_(this,"clipBias");_(this,"underwaterPlane",new En);_(this,"underwaterPlanes");_(this,"airPlane",new En);_(this,"airPlanes");_(this,"sourcePosition",new I);_(this,"sourceQuaternion",new Ei);_(this,"savedViewport",new ge);_(this,"savedScissor",new ge);this.planeY=n.planeY??K1,this.clipBias=Math.max(0,n.clipBias??.001),this.underwaterPlane.set(new I(0,-1,0),this.planeY-this.clipBias),this.underwaterPlanes=[this.underwaterPlane],this.airPlane.set(new I(0,1,0),-(this.planeY+this.clipBias)),this.airPlanes=[this.airPlane];const s=Math.max(1,Math.round(t)),o=Math.max(1,Math.round(e)),r=new Fa(s,o,Si);r.name="mineworld-planar-refraction-depth",this.renderTarget=new Cn(s,o,{type:bi,minFilter:be,magFilter:be,generateMipmaps:!1,depthTexture:r,depthBuffer:!0,stencilBuffer:!1,samples:Math.max(0,Math.round(n.samples??0))}),this.renderTarget.texture.name="mineworld-planar-refraction",this.renderTarget.texture.colorSpace=ln,this.camera.layers.set(0)}get texture(){return this.renderTarget.texture}get depthTexture(){return this.renderTarget.depthTexture}resize(t,e){const n=Math.max(1,Math.round(t)),s=Math.max(1,Math.round(e));this.renderTarget.setSize(n,s),this.depthTexture.image.width=n,this.depthTexture.image.height=s}render(t,e,n,s,o,r="below"){this.updateCamera(n),this.camera.layers.set(0),r==="above"&&(this.camera.layers.enable(Do),this.camera.layers.enable(zo));const a=t.getRenderTarget();t.getViewport(this.savedViewport),t.getScissor(this.savedScissor);const l=t.getScissorTest(),c=t.xr.enabled,h=t.shadowMap.autoUpdate,u=t.shadowMap.needsUpdate,d=t.clippingPlanes,p=t.localClippingEnabled,m=t.getContext(),v=!!m.getParameter(m.DEPTH_WRITEMASK);try{s==null||s(this.camera,this.renderTarget),t.xr.enabled=!1,t.shadowMap.autoUpdate=!1,t.shadowMap.needsUpdate=!1,t.clippingPlanes=r==="above"?this.airPlanes:this.underwaterPlanes,t.localClippingEnabled=!1,t.setRenderTarget(this.renderTarget),t.setScissorTest(!1),t.state.buffers.depth.setMask(!0),t.clear(!0,!0,!1),t.render(e,this.camera)}finally{t.xr.enabled=c,t.shadowMap.autoUpdate=h,t.shadowMap.needsUpdate=u,t.clippingPlanes=d,t.localClippingEnabled=p,t.state.buffers.depth.setMask(v),t.setRenderTarget(a),t.setViewport(this.savedViewport),t.setScissor(this.savedScissor),t.setScissorTest(l),o==null||o(this.camera,this.renderTarget)}}dispose(){this.renderTarget.dispose()}updateCamera(t){t.updateWorldMatrix(!0,!1),t.getWorldPosition(this.sourcePosition),t.getWorldQuaternion(this.sourceQuaternion),this.camera.position.copy(this.sourcePosition),this.camera.quaternion.copy(this.sourceQuaternion),this.camera.up.copy(t.up),this.camera.updateMatrixWorld(!0),this.camera.near=t.near,this.camera.far=t.far,this.camera.fov=t.fov,this.camera.aspect=t.aspect,this.camera.zoom=t.zoom,this.camera.focus=t.focus,this.camera.filmGauge=t.filmGauge,this.camera.filmOffset=t.filmOffset,this.camera.view=t.view===null?null:{...t.view},this.camera.coordinateSystem=t.coordinateSystem,this.camera.projectionMatrix.copy(t.projectionMatrix),this.camera.projectionMatrixInverse.copy(t.projectionMatrixInverse)}}const Z1=ee+8/9,Q1=new de().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);class J1{constructor(t=1,e=1,n={}){_(this,"camera",new Ge);_(this,"textureMatrix",new de);_(this,"renderTarget");_(this,"planeY");_(this,"clipBias");_(this,"overscan");_(this,"plane",new En);_(this,"cameraPlane",new En);_(this,"planeNormal",new I(0,1,0));_(this,"sourcePosition",new I);_(this,"reflectedPosition",new I);_(this,"reflectedDirection",new I);_(this,"reflectedUp",new I);_(this,"lookTarget",new I);_(this,"sourceQuaternion",new Ei);_(this,"clipPlane",new ge);_(this,"clipCorner",new ge);_(this,"savedViewport",new ge);_(this,"savedScissor",new ge);this.planeY=n.planeY??Z1,this.clipBias=n.clipBias??.001,this.overscan=Zn.clamp(n.overscan??1.08,1,1.2),this.plane.set(this.planeNormal,-this.planeY),this.renderTarget=new Cn(Math.max(1,Math.round(t)),Math.max(1,Math.round(e)),{type:bi,minFilter:be,magFilter:be,generateMipmaps:!1,depthBuffer:!0,stencilBuffer:!1,samples:Math.max(0,Math.round(n.samples??4))}),this.renderTarget.texture.name="mineworld-planar-reflection",this.renderTarget.texture.colorSpace=ln,this.camera.layers.set(0),this.camera.layers.enable(zo)}get texture(){return this.renderTarget.texture}resize(t,e){this.renderTarget.setSize(Math.max(1,Math.round(t)),Math.max(1,Math.round(e)))}render(t,e,n,s,o){this.updateCamera(n);const r=t.getRenderTarget();t.getViewport(this.savedViewport),t.getScissor(this.savedScissor);const a=t.getScissorTest(),l=t.xr.enabled,c=t.shadowMap.autoUpdate,h=t.shadowMap.needsUpdate,u=t.getContext(),d=!!u.getParameter(u.DEPTH_WRITEMASK);try{s==null||s(this.camera,this.renderTarget),t.xr.enabled=!1,t.shadowMap.autoUpdate=!1,t.shadowMap.needsUpdate=!1,t.setRenderTarget(this.renderTarget),t.setScissorTest(!1),t.state.buffers.depth.setMask(!0),t.clear(!0,!0,!1),t.render(e,this.camera)}finally{t.xr.enabled=l,t.shadowMap.autoUpdate=c,t.shadowMap.needsUpdate=h,t.state.buffers.depth.setMask(d),t.setRenderTarget(r),t.setViewport(this.savedViewport),t.setScissor(this.savedScissor),t.setScissorTest(a),o==null||o(this.camera,this.renderTarget)}}dispose(){this.renderTarget.dispose()}updateCamera(t){t.updateWorldMatrix(!0,!1),t.getWorldPosition(this.sourcePosition),t.getWorldQuaternion(this.sourceQuaternion),this.reflectedPosition.copy(this.sourcePosition).addScaledVector(this.planeNormal,-2*this.plane.distanceToPoint(this.sourcePosition)),this.reflectedDirection.set(0,0,-1).applyQuaternion(this.sourceQuaternion).reflect(this.planeNormal),this.reflectedUp.set(0,1,0).applyQuaternion(this.sourceQuaternion).reflect(this.planeNormal),this.camera.position.copy(this.reflectedPosition),this.camera.up.copy(this.reflectedUp),this.lookTarget.copy(this.reflectedPosition).add(this.reflectedDirection),this.camera.lookAt(this.lookTarget),this.camera.updateMatrixWorld(!0),this.camera.near=t.near,this.camera.far=t.far,this.camera.fov=t.fov,this.camera.aspect=t.aspect,this.camera.zoom=t.zoom,this.camera.focus=t.focus,this.camera.filmGauge=t.filmGauge,this.camera.filmOffset=t.filmOffset,this.camera.projectionMatrix.copy(t.projectionMatrix),this.camera.projectionMatrix.elements[0]/=this.overscan,this.camera.projectionMatrix.elements[5]/=this.overscan,this.applyObliqueNearPlane(),this.camera.projectionMatrixInverse.copy(this.camera.projectionMatrix).invert(),this.textureMatrix.copy(Q1).multiply(this.camera.projectionMatrix).multiply(this.camera.matrixWorldInverse)}applyObliqueNearPlane(){this.cameraPlane.copy(this.plane).applyMatrix4(this.camera.matrixWorldInverse),this.clipPlane.set(this.cameraPlane.normal.x,this.cameraPlane.normal.y,this.cameraPlane.normal.z,this.cameraPlane.constant);const e=this.camera.projectionMatrix.elements;this.clipCorner.set((Math.sign(this.clipPlane.x)+e[8])/e[0],(Math.sign(this.clipPlane.y)+e[9])/e[5],-1,(1+e[10])/e[14]);const n=this.clipPlane.dot(this.clipCorner);Math.abs(n)<1e-7||(this.clipPlane.multiplyScalar(2/n),e[2]=this.clipPlane.x,e[6]=this.clipPlane.y,e[10]=this.clipPlane.z+1-this.clipBias,e[14]=this.clipPlane.w)}}const tS=`
varying vec3 vSkyDir;
void main() {
  vSkyDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`.trim(),eS=`
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
`.trim();class nS{constructor(t){_(this,"scene",new Ks);_(this,"camera");_(this,"gl");_(this,"viewportW",1);_(this,"viewportH",1);_(this,"resizeQueued",!1);_(this,"onViewportChange",()=>{this.resizeQueued||(this.resizeQueued=!0,requestAnimationFrame(()=>{this.resizeQueued=!1,this.resize()}))});_(this,"skyDome");_(this,"skyUniforms",{uSkyTop:{value:new wt},uSkyHorizon:{value:new wt},uSunDir:{value:new I(1,0,.1).normalize()},uWarmth:{value:0},uSunVisible:{value:1}});_(this,"lastSky","");_(this,"rt",null);_(this,"planarRefraction",null);_(this,"waterRefractionSink",null);_(this,"planarReflection",null);_(this,"waterReflectionSink",null);_(this,"waterCapturesEnabled",!0);_(this,"godStd",new ld(24));_(this,"godHigh",new ld(48));_(this,"god",null);_(this,"underwaterTarget",0);_(this,"underwaterAmount",0);_(this,"waterIrradiance",new wt(.04,.18,.26));_(this,"bloom",null);_(this,"ssao",null);var s,o;this.gl=new up({canvas:t,antialias:!0}),this.gl.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.gl.toneMapping=Jn,this.gl.shadowMap.enabled=!0,this.gl.shadowMap.type=kf,this.gl.shadowMap.autoUpdate=!1;const e=new $c(750,32,24),n=new Ve({uniforms:this.skyUniforms,vertexShader:tS,fragmentShader:eS,side:Ne,depthWrite:!1});this.skyDome=new Qt(e,n),this.skyDome.layers.set(zo),this.skyDome.frustumCulled=!1,this.skyDome.renderOrder=-1e3,this.scene.add(this.skyDome),this.setSkyColors([.3,.52,.79],[.81,.9,.97]),this.scene.fog=new $s(vp,30,110),this.camera=new Ge(70,1,.1,1e3),this.camera.layers.enable(Zc),this.camera.layers.enable(Do),this.camera.layers.enable(zo),this.camera.layers.enable(Yo),this.resize(),window.addEventListener("resize",this.onViewportChange),window.addEventListener("orientationchange",this.onViewportChange),(s=window.visualViewport)==null||s.addEventListener("resize",this.onViewportChange),(o=window.visualViewport)==null||o.addEventListener("scroll",this.onViewportChange)}setSkyColors(t,e,n=0,s=0,o=0,r=!0){const a=`${t.join()}|${e.join()}|${Math.round(n*80)}|${Math.round(s*40)}|${Math.round(o*80)}|${r?1:0}`;a!==this.lastSky&&(this.lastSky=a,this.skyUniforms.uSkyTop.value.setRGB(t[0],t[1],t[2],ae),this.skyUniforms.uSkyHorizon.value.setRGB(e[0],e[1],e[2],ae),this.skyUniforms.uSunDir.value.set(Math.cos(n),o,.1).normalize(),this.skyUniforms.uWarmth.value=Zn.clamp(s,0,1),this.skyUniforms.uSunVisible.value=r?1:0,this.waterIrradiance.copy(this.skyUniforms.uSkyHorizon.value).lerp(this.skyUniforms.uSkyTop.value,.2).multiply(new wt(.78,1.08,1.16)))}resize(){const{width:t,height:e}=_p(window);if(this.viewportW=t,this.viewportH=e,this.gl.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.rt!==null&&(this.rt.dispose(),this.rt=this.buildRT(t,e)),this.planarRefraction!==null){const n=this.gl.getPixelRatio();this.planarRefraction.resize(Math.max(1,Math.round(t*n)),Math.max(1,Math.round(e*n))),this.publishRefractionTarget()}if(this.planarReflection!==null){const n=this.gl.getPixelRatio();this.planarReflection.resize(Math.max(1,Math.round(t*n)),Math.max(1,Math.round(e*n))),this.publishReflectionTarget()}if(this.bloom!==null){const n=this.gl.getPixelRatio();this.bloom.setSize(Math.max(1,Math.round(t*n/4)),Math.max(1,Math.round(e*n/4)))}if(this.ssao!==null){const n=this.gl.getPixelRatio();this.ssao.setSize(Math.max(1,Math.round(t*n/2)),Math.max(1,Math.round(e*n/2)))}}markShadowDirty(){this.gl.shadowMap.needsUpdate=!0}setWaterRefractionSink(t){this.waterRefractionSink=t,this.publishRefractionTarget()}setWaterReflectionSink(t){this.waterReflectionSink=t,this.publishReflectionTarget()}setWaterCapturesEnabled(t){var e,n,s,o;t!==this.waterCapturesEnabled&&(this.waterCapturesEnabled=t,t?((s=this.waterRefractionSink)==null||s.call(this,null,null,1,1,this.underwaterAmount),(o=this.waterReflectionSink)==null||o.call(this,null,null,1,1),this.god!==null&&this.ensureWaterCaptureTargets()):((e=this.planarRefraction)==null||e.dispose(),this.planarRefraction=null,(n=this.planarReflection)==null||n.dispose(),this.planarReflection=null,this.publishRefractionTarget(),this.publishReflectionTarget()))}setGodRays(t){if(t===null||t.quality==="off"){this.rt!==null&&(this.rt.dispose(),this.rt=null),this.planarRefraction!==null&&(this.planarRefraction.dispose(),this.planarRefraction=null),this.publishRefractionTarget(),this.planarReflection!==null&&(this.planarReflection.dispose(),this.planarReflection=null),this.publishReflectionTarget(),this.bloom!==null&&(this.bloom.dispose(),this.bloom=null),this.ssao!==null&&(this.ssao.dispose(),this.ssao=null),this.god=null;return}if(this.rt===null&&(this.rt=this.buildRT(this.viewportW,this.viewportH)),this.ensureWaterCaptureTargets(),this.bloom===null){const e=this.gl.getPixelRatio(),n=this.viewportW,s=this.viewportH;this.bloom=new i1(Math.max(1,Math.round(n*e/4)),Math.max(1,Math.round(s*e/4)))}this.god=t}setUnderwater(t){this.underwaterTarget=t?1:0}render(){if(this.skyDome.position.copy(this.camera.position),this.underwaterAmount+=(this.underwaterTarget-this.underwaterAmount)*.16,this.god===null||this.rt===null||this.bloom===null){this.gl.render(this.scene,this.camera);return}if(this.waterCapturesEnabled&&this.planarReflection!==null&&this.camera.position.y>this.planarReflection.planeY+.05?(this.planarReflection.render(this.gl,this.scene,this.camera,n=>this.skyDome.position.copy(n.position),()=>this.skyDome.position.copy(this.camera.position)),this.publishReflectionTarget(!0)):this.publishReflectionTarget(!1),this.waterCapturesEnabled&&this.planarRefraction!==null){const n=this.scene.fog;this.scene.fog=null;try{this.planarRefraction.render(this.gl,this.scene,this.camera,void 0,void 0,this.underwaterTarget>.5?"above":"below")}finally{this.scene.fog=n}this.publishRefractionTarget()}this.gl.setRenderTarget(this.rt),this.gl.clear(),this.gl.render(this.scene,this.camera),this.bloom.render(this.gl,this.rt.texture),this.ssao!==null&&this.ssao.render(this.gl,this.rt.depthTexture,this.camera);const t=this.god.quality==="high"?this.godHigh:this.godStd,e=t.material.uniforms;e.tColor.value=this.rt.texture,e.tDepth.value=this.rt.depthTexture,e.tBloom.value=this.bloom.texture,e.uSunUV.value.copy(this.god.sunUV),e.uIntensity.value=this.god.intensity,e.uSunColor.value.copy(this.god.sunColor),e.uBloom.value=this.god.quality==="high"?.68:.5,e.uUnderwater.value=this.underwaterAmount,e.uWaterIrradiance.value.copy(this.waterIrradiance),this.ssao!==null?(e.tAO.value=this.ssao.texture,e.uAO.value=this.god.quality==="high"?.55:.4):(e.tAO.value=null,e.uAO.value=0),t.render(this.gl)}renderOverlay(t,e){this.gl.autoClear=!1,this.gl.clearDepth(),this.gl.render(t,e),this.gl.autoClear=!0}buildRT(t,e){const n=this.gl.getPixelRatio(),s=Math.max(1,Math.round(t*n)),o=Math.max(1,Math.round(e*n)),r=new Fa(s,o);return r.type=Si,new Cn(s,o,{type:bi,depthTexture:r,depthBuffer:!0,samples:4})}publishRefractionTarget(){if(this.waterRefractionSink){if(!this.waterCapturesEnabled||!this.planarRefraction){this.waterRefractionSink(null,null,1,1,this.underwaterAmount);return}this.waterRefractionSink(this.planarRefraction.texture,this.planarRefraction.depthTexture,this.planarRefraction.renderTarget.width,this.planarRefraction.renderTarget.height,this.underwaterAmount)}}ensureWaterCaptureTargets(){if(!this.waterCapturesEnabled)return;const t=this.gl.getPixelRatio(),e=Math.max(1,Math.round(this.viewportW*t)),n=Math.max(1,Math.round(this.viewportH*t));this.planarRefraction===null&&(this.planarRefraction=new j1(e,n)),this.planarReflection===null&&(this.planarReflection=new J1(e,n))}publishReflectionTarget(t=!0){if(this.waterReflectionSink){if(!t||!this.waterCapturesEnabled||!this.planarReflection){this.waterReflectionSink(null,null,1,1);return}this.waterReflectionSink(this.planarReflection.texture,this.planarReflection.textureMatrix,this.planarReflection.renderTarget.width,this.planarReflection.renderTarget.height)}}}function iS(i){return new Worker("/mineworld/assets/chunkGen.worker-CSpXbyWk.js",{name:i==null?void 0:i.name})}const vd=()=>typeof performance<"u"?performance.now():Date.now(),sS=4;class Up{constructor(t,e="overworld"){_(this,"chunks",new Map);_(this,"pending",new Set);_(this,"pendingSince",new Map);_(this,"genFails",new Map);_(this,"workers",[]);_(this,"rr",0);_(this,"editHook",null);if(this.seed=t,this.dimension=e,typeof Worker<"u"){const n=typeof navigator<"u"&&navigator.hardwareConcurrency||4,s=Math.max(1,Math.min(4,n));for(let o=0;o<s;o++){const r=new iS;r.onmessage=a=>{var v;const{cx:l,cz:c,blocks:h,fluid:u,error:d}=a.data,p=this.key(l,c);if(this.pending.delete(p),this.pendingSince.delete(p),d){const f=(this.genFails.get(p)??0)+1;this.genFails.set(p,f),console.warn(`[chunkgen] 区块(${l},${c}) 生成失败 #${f}: ${d.split(`
`)[0]}`);return}if(this.genFails.delete(p),this.chunks.has(p)||!h||!u)return;const m=$o.fromBuffers(h,u);(v=this.editHook)==null||v.call(this,l,c,m),m.dirty=!0,this.chunks.set(p,m)},r.onerror=a=>{console.error("[chunkgen worker] 致命错误(整个 worker 挂了，会拖慢加载):",a.message)},this.workers.push(r)}}}key(t,e){return`${t},${e}`}dispose(){for(const t of this.workers)t.terminate();this.workers.length=0,this.chunks.clear(),this.pending.clear(),this.pendingSince.clear(),this.genFails.clear(),this.editHook=null}hasChunk(t,e){return this.chunks.has(this.key(t,e))}request(t,e){const n=this.key(t,e);if(!(this.chunks.has(n)||this.pending.has(n))&&!((this.genFails.get(n)??0)>=3)){if(this.workers.length===0){this.getChunk(t,e);return}this.pending.add(n),this.pendingSince.set(n,vd()),this.workers[this.rr].postMessage({cx:t,cz:e,seed:this.seed,dimension:this.dimension}),this.rr=(this.rr+1)%this.workers.length}}retryStuckGen(t=8e3){const e=vd();for(const[n,s]of this.pendingSince)e-s>t&&(this.pending.delete(n),this.pendingSince.delete(n),console.warn(`[chunkgen] 区块 ${n} 生成 ${Math.round((e-s)/1e3)}s 未回(worker 丢消息?) → 重试`))}peek(t,e){return this.chunks.get(this.key(t,e))}evictBeyond(t,e,n){for(const s of[...this.chunks.keys()]){const o=s.indexOf(","),r=+s.slice(0,o),a=+s.slice(o+1);(Math.abs(r-t)>n||Math.abs(a-e)>n)&&this.chunks.delete(s)}}getChunk(t,e){var o;const n=this.key(t,e);let s=this.chunks.get(n);return s||(s=Lp(t,e,this.seed,this.dimension),(o=this.editHook)==null||o.call(this,t,e,s),this.chunks.set(n,s),this.pending.delete(n)),s}getBlock(t,e,n){return e<0||e>=ve?0:this.getChunk(Jt(t),Jt(n)).get(Je(t),e,Je(n))}setBlock(t,e,n,s){if(e<0||e>=ve)return;const o=Jt(t),r=Jt(n),a=Je(t),l=Je(n),c=this.getChunk(o,r);c.set(a,e,l,s),s!==kn&&c.setFluid(a,e,l,0),c.dirty=!0,this.markNeighborsDirty(o,r,a,l,8)}fluidByte(t,e,n){return e<0||e>=ve?0:this.getChunk(Jt(t),Jt(n)).getFluid(Je(t),e,Je(n))}waterAmount(t,e,n){return this.getBlock(t,e,n)!==kn?0:cd(this.fluidByte(t,e,n))}isWaterSource(t,e,n){return this.getBlock(t,e,n)===kn&&s1(this.fluidByte(t,e,n))}isWaterFalling(t,e,n){return this.getBlock(t,e,n)===kn&&o1(this.fluidByte(t,e,n))}setWater(t,e,n,s,o,r){if(e<0||e>=ve)return;const a=Jt(t),l=Jt(n),c=Je(t),h=Je(n),u=this.getChunk(a,l),d=u.get(c,e,h)===kn&&cd(u.getFluid(c,e,h))>0;s<=0?(u.get(c,e,h)===kn&&u.set(c,e,h,0),u.setFluid(c,e,h,0)):(u.set(c,e,h,kn),u.setFluid(c,e,h,Mp(s,o,r))),u.dirty=!0;const p=s>0;this.markNeighborsDirty(a,l,c,h,d!==p?sS:1)}markNeighborsDirty(t,e,n,s,o=1){const r=n<o,a=n>15-o,l=s<o,c=s>15-o;r&&this.markDirty(t-1,e),a&&this.markDirty(t+1,e),l&&this.markDirty(t,e-1),c&&this.markDirty(t,e+1),r&&l&&this.markDirty(t-1,e-1),r&&c&&this.markDirty(t-1,e+1),a&&l&&this.markDirty(t+1,e-1),a&&c&&this.markDirty(t+1,e+1)}markDirty(t,e){const n=this.chunks.get(this.key(t,e));n&&(n.dirty=!0)}}function _d(i,t,e,n){let s=Math.floor(i.x),o=Math.floor(i.y),r=Math.floor(i.z);const a=Math.sign(t.x),l=Math.sign(t.y),c=Math.sign(t.z),h=t.x!==0?Math.abs(1/t.x):1/0,u=t.y!==0?Math.abs(1/t.y):1/0,d=t.z!==0?Math.abs(1/t.z):1/0,p=(y,x)=>x>0?Math.floor(y)+1-y:x<0?y-Math.floor(y):1/0;let m=t.x!==0?p(i.x,a)*h:1/0,v=t.y!==0?p(i.y,l)*u:1/0,f=t.z!==0?p(i.z,c)*d:1/0;if(n(s,o,r))return{x:s,y:o,z:r,nx:0,ny:0,nz:0};let g=0;for(let y=0;y<256;y++){let x=0,T=0,L=0;if(m<v&&m<f?(s+=a,g=m,m+=h,x=-a):v<f?(o+=l,g=v,v+=u,T=-l):(r+=c,g=f,f+=d,L=-c),g>e)break;if(n(s,o,r))return{x:s,y:o,z:r,nx:x,ny:T,nz:L}}return null}const oS=new Set([za,Wa]),xd=new Set([Ho,Ga]),Nl=4,rS=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],kr=(i,t,e)=>`${i},${t},${e}`;function aS(i,t,e,n,s=Nl){const o=s+Nl,r=new Map,a=[];for(let c=t-o;c<=t+o;c++)for(let h=e-o;h<=e+o;h++)for(let u=n-o;u<=n+o;u++)oS.has(i(c,h,u))&&(r.set(kr(c,h,u),0),a.push({x:c,y:h,z:u}));for(let c=0;c<a.length;c++){const h=a[c],u=r.get(kr(h.x,h.y,h.z))??0;if(!(u>=Nl))for(const[d,p,m]of rS){const v=h.x+d,f=h.y+p,g=h.z+m;if(!xd.has(i(v,f,g)))continue;const y=kr(v,f,g);r.has(y)||(r.set(y,u+1),a.push({x:v,y:f,z:g}))}}const l=[];for(let c=t-s;c<=t+s;c++)for(let h=e-s;h<=e+s;h++)for(let u=n-s;u<=n+s;u++)xd.has(i(c,h,u))&&!r.has(kr(c,h,u))&&l.push({x:c,y:h,z:u});return l}const lS="mt1d93hc";function oo(i){return`/mineworld/${i}?v=${lS}`}const yd=new Map;function Ec(i="classic"){const t=yd.get(i);if(t)return t;const e=i==="classic"?"textures/atlas_classic.png":"textures/atlas.png",n=new so().load(oo(e));return n.magFilter=ue,n.minFilter=Bc,n.generateMipmaps=!0,n.colorSpace=ae,yd.set(i,n),n}function cS(){const i=new so().load(oo("textures/torch_block.png"));return i.magFilter=ue,i.minFilter=ue,i.generateMipmaps=!1,i.colorSpace=ae,i}function hS(i){const t=new so,e=[];for(let n=0;n<i;n++){const s=t.load(oo(`textures/blocks/water_${n}.png`));s.magFilter=ue,s.minFilter=Bc,s.generateMipmaps=!0,s.colorSpace=ae,s.wrapS=dn,s.wrapT=dn,e.push(s)}return e}const Uo={volume:70,lightingQuality:"standard",texturePack:"classic",renderDistance:6},Ac="mineworld.settings",eh=3,uS=["off","standard","high"];function kp(i){const t=i??{},e=typeof t.volume=="number"&&isFinite(t.volume)?Math.max(0,Math.min(100,Math.round(t.volume))):Uo.volume;let n;typeof t.lightingQuality=="string"&&uS.includes(t.lightingQuality)?n=t.lightingQuality:typeof t.shaders=="boolean"?n=t.shaders?"high":"standard":n=Uo.lightingQuality;const s=t.texturePack==="cartoon"?"cartoon":"classic",o=typeof t.renderDistance=="number"&&isFinite(t.renderDistance)?Math.max(3,Math.min(12,Math.round(t.renderDistance))):Uo.renderDistance;return{volume:e,lightingQuality:n,texturePack:s,renderDistance:o}}function dS(i){const t=kp(i);return(i??{}).textureStyleVersion===eh?t:{...t,texturePack:"classic"}}function Ip(){try{const i=localStorage.getItem(Ac);if(!i)return{...Uo};const t=JSON.parse(i),e=dS(t);return localStorage.setItem(Ac,JSON.stringify({...e,textureStyleVersion:eh})),e}catch{return{...Uo}}}function fS(i){try{localStorage.setItem(Ac,JSON.stringify({...kp(i),textureStyleVersion:eh}))}catch{}}const Np=15,Fp=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function pS(i,t,e,n){const s=n??(()=>0),o=new Uint8Array(i*t*i),r=(l,c,h)=>l+h*i+c*i*i,a=[];for(let l=0;l<i;l++)for(let c=0;c<i;c++){let h=Np;for(let u=t-1;u>=0&&!e(c,u,l);u--){h=Math.max(0,h-s(c,u,l));const d=r(c,u,l);o[d]=h,h>0&&a.push(d)}}for(let l=0;l<a.length;l++){const c=a[l],h=o[c];if(h<=1)continue;const u=c/(i*i)|0,d=c-u*i*i,p=d/i|0,m=d-p*i;for(const[v,f,g]of Fp){const y=m+v,x=u+f,T=p+g;if(y<0||y>=i||x<0||x>=t||T<0||T>=i||e(y,x,T))continue;const L=h-1-s(y,x,T);if(L<=0)continue;const A=r(y,x,T);o[A]>=L||(o[A]=L,a.push(A))}}return o}function mS(i,t,e,n,s){const o=s??(()=>0),r=new Uint8Array(i*t*i),a=(c,h,u)=>c+u*i+h*i*i,l=[];for(let c=0;c<t;c++)for(let h=0;h<i;h++)for(let u=0;u<i;u++){const d=e(u,c,h);if(d>0){const p=a(u,c,h);d>r[p]&&(r[p]=Math.min(Np,d),l.push(p))}}for(let c=0;c<l.length;c++){const h=l[c],u=r[h];if(u<=1)continue;const d=h/(i*i)|0,p=h-d*i*i,m=p/i|0,v=p-m*i;for(const[f,g,y]of Fp){const x=v+f,T=d+g,L=m+y;if(x<0||x>=i||T<0||T>=t||L<0||L>=i||n(x,T,L))continue;const A=u-1-o(x,T,L);if(A<=0)continue;const R=a(x,T,L);r[R]>=A||(r[R]=A,l.push(R))}}return r}const wn=4,Ir=10,gS=16,Nr=2,vS=4,Md=[.6,.6,1,.5,.8,.8],mi=[{n:[1,0,0],o:[1,0,0],c:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],uv:[[0,0],[0,1],[1,1],[1,0]]},{n:[-1,0,0],o:[-1,0,0],c:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,1,0],o:[0,1,0],c:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],uv:[[0,0],[0,1],[1,1],[1,0]]},{n:[0,-1,0],o:[0,-1,0],c:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,1],o:[0,0,1],c:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,-1],o:[0,0,-1],c:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],uv:[[0,0],[0,1],[1,1],[1,0]]}],_S=[.5,.7,.86,1];function xS(i,t,e){return i&&t?0:3-(Number(i)+Number(t)+Number(e))}const Op=[{u:[0,1,0],v:[0,0,1],ui:1,vi:2},{u:[0,1,0],v:[0,0,1],ui:1,vi:2},{u:[1,0,0],v:[0,0,1],ui:0,vi:2},{u:[1,0,0],v:[0,0,1],ui:0,vi:2},{u:[1,0,0],v:[0,1,0],ui:0,vi:1},{u:[1,0,0],v:[0,1,0],ui:0,vi:1}];function yS(i,t,e,n,s,o){const r=mi[s],a=Op[s],l=r.c[o],c=l[a.ui]===1?1:-1,h=l[a.vi]===1?1:-1,u=t+r.n[0],d=e+r.n[1],p=n+r.n[2],m=i(u+c*a.u[0],d+c*a.u[1],p+c*a.u[2]),v=i(u+h*a.v[0],d+h*a.v[1],p+h*a.v[2]),f=i(u+c*a.u[0]+h*a.v[0],d+c*a.u[1]+h*a.v[1],p+c*a.u[2]+h*a.v[2]);return _S[xS(m,v,f)]}const vo=()=>({P:[],U:[],C:[],I:[],L:[],UW:[],T:[],TF:[],SH:[],WO:[],SW:[]}),_o=i=>{const t=i.P.length/3;return{positions:new Float32Array(i.P),uvs:new Float32Array(i.U),colors:new Float32Array(i.C),indices:t<=65535?new Uint16Array(i.I):new Uint32Array(i.I),light:new Float32Array(i.L),underwater:i.UW.length?new Float32Array(i.UW):void 0,top:i.T.length?new Float32Array(i.T):void 0,topFace:i.TF.length?new Float32Array(i.TF):void 0,shore:i.SH.length?new Float32Array(i.SH):void 0,waveOpen:i.WO.length?new Float32Array(i.WO):void 0,sway:i.SW.length?new Float32Array(i.SW):void 0}};function MS(i,t,e,n){const s=i*Pt,o=t*Pt,r=vo(),a=vo(),l=vo(),c=vo(),h=vo(),u=.01/(gS*wn),d=1/wn-2*u,p=1/Ir-2*u,m=(G,P,k)=>ys(e(G,P,k)),v=8,f=Pt+2*v,g=(G,P,k)=>{const V=e(s+G-v,P,o+k-v);return ei(V)||dd(V)?1:0},y=pS(f,ve,(G,P,k)=>m(s+G-v,P,o+k-v),g),x=mS(f,ve,(G,P,k)=>S1(e(s+G-v,P,o+k-v)),(G,P,k)=>m(s+G-v,P,o+k-v),g),T=(G,P,k)=>P>=ve?15:P<0?0:y[G+v+(k+v)*f+P*f*f],L=(G,P,k)=>P>=ve||P<0?0:x[G+v+(k+v)*f+P*f*f],A=(G,P,k)=>{let V=0;for(let O=P;O<ve&&V<8&&n(G,O,k)>0;O++)V++;return V},R=(G,P,k,V,O)=>{const H=Op[V],at=mi[V].c[O],St=at[H.ui]===1?1:-1,C=at[H.vi]===1?1:-1,pt=G+St*H.u[0],ot=P+St*H.u[1],mt=k+St*H.u[2],ct=G+C*H.v[0],Ut=P+C*H.v[1],Tt=k+C*H.v[2],xt=pt+C*H.v[0],Wt=ot+C*H.v[1],E=mt+C*H.v[2],M=m(s+pt,ot,o+mt),z=m(s+ct,Ut,o+Tt),K=m(s+xt,Wt,o+E);let J=T(G,P,k),nt=L(G,P,k),Et=1;return M||(J+=T(pt,ot,mt),nt+=L(pt,ot,mt),Et++),z||(J+=T(ct,Ut,Tt),nt+=L(ct,Ut,Tt),Et++),!(M&&z)&&!K&&(J+=T(xt,Wt,E),nt+=L(xt,Wt,E),Et++),[J/Et/15,nt/Et/15]},F=(G,P,k,V,O,H)=>{const at=mi[H],St=Ul(O,H),C=St%wn/wn+u,pt=1-(Math.floor(St/wn)+1)/Ir+u,ot=Md[H],mt=P+at.o[0],ct=k+at.o[1],Ut=V+at.o[2],Tt=G===r?A(s+mt,ct,o+Ut):0,xt=G.P.length/3,Wt=[0,0,0,0];for(let E=0;E<4;E++){const M=at.c[E];Wt[E]=yS(m,s+P,k,o+V,H,E);const z=ot*Wt[E],[K,J]=R(mt,ct,Ut,H,E);G.P.push(P+M[0],k+M[1],V+M[2]),G.U.push(C+at.uv[E][0]*d,pt+at.uv[E][1]*p),G.C.push(z,z,z),G.L.push(K,J),G===r&&G.UW.push(Tt)}Wt[0]+Wt[2]>Wt[1]+Wt[3]?G.I.push(xt,xt+1,xt+2,xt,xt+2,xt+3):G.I.push(xt+1,xt+2,xt+3,xt+1,xt+3,xt),G===l&&G.SW.push(1,1,1,1)},b=(G,P,k)=>{const V=G+.5,O=P+.5,H=.28,at=.92,St=[[[V-H,k,O],[V+H,k,O],[V+H,k+at,O],[V-H,k+at,O]],[[V,k,O-H],[V,k,O+H],[V,k+at,O+H],[V,k+at,O-H]]],C=[[0,0],[1,0],[1,1],[0,1]];for(const pt of St){const ot=h.P.length/3;for(let mt=0;mt<4;mt++)h.P.push(pt[mt][0],pt[mt][1],pt[mt][2]),h.U.push(C[mt][0],C[mt][1]),h.C.push(1,1,1);h.I.push(ot,ot+1,ot+2,ot,ot+2,ot+3)}},S=(G,P,k,V,O)=>{const H=V%wn/wn+u,at=H+d,St=1-(Math.floor(V/wn)+1)/Ir+u,C=St+p,pt=T(G,P,k)/15,ot=L(G,P,k)/15,mt=.9,ct=G+.5,Ut=k+.5,Tt=.5,xt=[[ct-Tt,Ut-Tt,ct+Tt,Ut+Tt],[ct-Tt,Ut+Tt,ct+Tt,Ut-Tt]];for(const[Wt,E,M,z]of xt){const K=l.P.length/3;l.P.push(Wt,P,E,M,P,z,M,P+O,z,Wt,P+O,E),l.U.push(H,St,at,St,at,C,H,C),l.C.push(mt,mt,mt,mt,mt,mt,mt,mt,mt,mt,mt,mt),l.L.push(pt,ot,pt,ot,pt,ot,pt,ot),l.SW.push(0,0,1,1),l.I.push(K,K+1,K+2,K,K+2,K+3)}},D=(G,P,k,V)=>{const O=V%wn/wn+u,H=O+d,at=1-(Math.floor(V/wn)+1)/Ir+u,St=at+p,C=T(G,P,k)/15,pt=L(G,P,k)/15,ot=1,mt=P+.06,ct=l.P.length/3;l.P.push(G,mt,k,G,mt,k+1,G+1,mt,k+1,G+1,mt,k),l.U.push(O,at,O,St,H,St,H,at),l.C.push(ot,ot,ot,ot,ot,ot,ot,ot,ot,ot,ot,ot),l.L.push(C,pt,C,pt,C,pt,C,pt),l.SW.push(0,0,0,0),l.I.push(ct,ct+1,ct+2,ct,ct+2,ct+3)};let Y=1;const q=(G,P,k)=>e(G,P,k)===Os,j=(G,P,k)=>{if(n(G,P,k)===0&&!q(G,P,k))return 0;let V=1;for(let O=P+1;V<7&&O<ve&&n(G,O,k)>0;O++)V++;for(let O=P-1;V<7&&O>=0&&n(G,O,k)>0;O--)V++;return V},tt=(G,P,k)=>(j(G-1,P,k-1)+j(G,P,k-1)+j(G-1,P,k)+j(G,P,k))/4,Q=(G,P,k)=>{const V=(H,at)=>n(H,P,at)>0||q(H,P,at);return 1-(Number(V(G-1,k-1))+Number(V(G,k-1))+Number(V(G-1,k))+Number(V(G,k)))/4},it=new Map,$=(G,P,k)=>{const V=`${G},${P},${k}`,O=it.get(V);if(O!==void 0)return O;const H=vS,at=H*H;let St=H;for(let mt=-H;mt<H;mt++)for(let ct=-H;ct<H;ct++){const Ut=ct+.5,Tt=mt+.5,xt=Ut*Ut+Tt*Tt;if(xt>at)continue;const Wt=G+ct,E=k+mt;n(Wt,P,E)>0&&e(Wt,P+1,E)===0||(St=Math.min(St,Math.sqrt(xt)))}const C=Math.SQRT1_2,pt=Math.max(0,Math.min(1,(St-C)/(H-C))),ot=pt*pt*(3-2*pt);return it.set(V,ot),ot},ft=(G,P,k,V,O,H)=>(G*(1-H)+P*H)*(1-O)+(V*(1-H)+k*H)*O,bt=(G,P,k,V,O)=>{const H=mi[V],at=Md[V],St=T(G+H.o[0],P+H.o[1],k+H.o[2])/15,C=L(G+H.o[0],P+H.o[1],k+H.o[2])/15,pt=c.P.length/3,ot=V===2,mt=V===3;let ct=1,Ut=1;ot?(ct=Nr,Ut=Nr):mt||(H.c[0][1]===H.c[3][1]?ct=Nr:Ut=Nr);const Tt=H.c.map(M=>tt(s+G+M[0],P,o+k+M[2])),xt=H.c.map(M=>Q(s+G+M[0],P,o+k+M[2])),Wt=H.c.map(M=>$(s+G+M[0],P,o+k+M[2]));for(let M=0;M<=Ut;M++){const z=M/Ut;for(let K=0;K<=ct;K++){const J=K/ct,nt=ft(H.c[0][0],H.c[1][0],H.c[2][0],H.c[3][0],J,z),Et=ft(H.c[0][2],H.c[1][2],H.c[2][2],H.c[3][2],J,z),ut=ft(O[0],O[1],O[2],O[3],J,z),ht=P+ut,Gt=s+G+nt,st=o+k+Et;c.P.push(G+nt,ht,k+Et),ot||mt?c.U.push(Gt,st):V===0||V===1?c.U.push(st,ht):c.U.push(Gt,ht),c.C.push(at,at,at),c.L.push(St,C);const Rt=ft(Tt[0],Tt[1],Tt[2],Tt[3],J,z),$t=ft(xt[0],xt[1],xt[2],xt[3],J,z),Nt=Y>0&&(ot||ut>.01);c.T.push((Nt?1:-1)*Rt),c.TF.push(ot?1:0),c.SH.push($t),c.WO.push(Nt?ft(Wt[0],Wt[1],Wt[2],Wt[3],J,z):0)}}const E=ct+1;for(let M=0;M<Ut;M++)for(let z=0;z<ct;z++){const K=pt+M*E+z,J=K+E,nt=J+1,Et=K+1;c.I.push(K,J,nt,K,nt,Et)}},_t=(G,P)=>{let k=0,V=0;for(const[O,H]of P){const at=n(O,G,H);if(n(O,G+1,H)>0)return 1;if(at>0){const St=at/9;St>=.8?(k+=St*10,V+=10):(k+=St,V+=1)}else we(e(O,G,H))||(V+=1)}return V>0?k/V:.5};for(let G=0;G<ve;G++)for(let P=0;P<Pt;P++)for(let k=0;k<Pt;k++){const V=e(s+k,G,o+P);if(ys(V)&&V!==Os)for(let O=0;O<6;O++){const H=mi[O];ys(e(s+k+H.o[0],G+H.o[1],o+P+H.o[2]))||F(r,k,G,P,V,O)}else if(dd(V))for(let O=0;O<6;O++){const H=mi[O];ys(e(s+k+H.o[0],G+H.o[1],o+P+H.o[2]))||F(l,k,G,P,V,O)}else if(ei(V)){const O=s+k,H=o+P;Y=n(O,G+1,H)>0?0:1;const at=_t(G,[[O,H],[O-1,H],[O,H-1],[O-1,H-1]]),St=_t(G,[[O,H],[O-1,H],[O,H+1],[O-1,H+1]]),C=_t(G,[[O,H],[O+1,H],[O,H+1],[O+1,H+1]]),pt=_t(G,[[O,H],[O+1,H],[O,H-1],[O+1,H-1]]);n(O,G+1,H)===0&&bt(k,G,P,Yn.PosY,[at,St,C,pt]),e(O,G-1,H)===0&&bt(k,G,P,Yn.NegY,[0,0,0,0]);const ot=(mt,ct,Ut,Tt)=>{e(O+ct,G,H+Ut)===0&&bt(k,G,P,mt,Tt)};ot(Yn.PosX,1,0,[0,pt,C,0]),ot(Yn.NegX,-1,0,[0,0,St,at]),ot(Yn.PosZ,0,1,[0,0,C,St]),ot(Yn.NegZ,0,-1,[0,at,pt,0])}else if(V===Fs)b(k,P,G);else if(qi(V))V===Jc?D(k,G,P,Ul(V,Yn.PosY)):S(k,G,P,Ul(V,Yn.PosY),V===Ep?1.45:.82);else if(V===Os)for(let O=0;O<6;O++){const H=mi[O];ys(e(s+k+H.o[0],G+H.o[1],o+P+H.o[2]))||F(a,k,G,P,V,O)}else if(V===va)for(let O=0;O<6;O++){const H=mi[O],at=e(s+k+H.o[0],G+H.o[1],o+P+H.o[2]);ys(at)||at===va||F(r,k,G,P,V,O)}}const Vt=new Uint8Array(4*48*4);for(let G=0;G<48;G++)for(let P=0;P<4;P++)for(let k=0;k<4;k++){let V=0,O=0;for(let H=0;H<4;H++){const at=(G*4+H)*f*f;for(let St=0;St<4;St++){const C=at+(P*4+St+v)*f+v+k*4;for(let pt=0;pt<4;pt++){const ot=y[C+pt];ot>V&&(V=ot);const mt=x[C+pt];mt>O&&(O=mt)}}}Vt[k+P*4+G*16]=V<<4|O}return{opaque:_o(r),ice:_o(a),cutout:_o(l),water:_o(c),torch:_o(h),light3d:Vt}}function SS(i,t,e){return MS(t,e,(n,s,o)=>i.getBlock(n,s,o),(n,s,o)=>i.waterAmount(n,s,o))}function wS(i){return new Worker("/mineworld/assets/meshGen.worker-BWqAyRsy.js",{name:i==null?void 0:i.name})}const bS=.15,TS=24*24;function ES(i,t,e,n,s,o,r=bS,a=TS){const l=i-e,c=t-n,h=l*l+c*c;return h<=a?!0:(l*s+c*o)/Math.sqrt(h)>=r}const AS=-.2,RS=2.25;function CS(i,t,e,n,s=AS,o=RS){const r=i*i+t*t;return r<=o?!0:(i*e+t*n)/Math.sqrt(r)>=s}const je=24e3,PS=1e3,Ms=[{t:0,top:[.14,.27,.5],hor:[1,.48,.18],tint:[.72,.64,.62]},{t:1800,top:[.2,.44,.76],hor:[.7,.83,.94],tint:[1,1,1]},{t:6e3,top:[.12,.36,.72],hor:[.58,.75,.91],tint:[1,1,1]},{t:11e3,top:[.18,.4,.72],hor:[.66,.8,.92],tint:[1,1,1]},{t:12200,top:[.12,.21,.44],hor:[1,.36,.1],tint:[.86,.62,.5]},{t:13600,top:[.015,.025,.075],hor:[.035,.06,.14],tint:[.3,.34,.5]},{t:22e3,top:[.015,.025,.075],hor:[.035,.06,.14],tint:[.3,.34,.5]},{t:23200,top:[.14,.27,.5],hor:[1,.48,.18],tint:[.72,.64,.62]}],Fl=(i,t,e)=>i+(t-i)*e,Ol=(i,t,e)=>[Fl(i[0],t[0],e),Fl(i[1],t[1],e),Fl(i[2],t[2],e)];function Bp(i){return(i%je+je)%je}function zp(i){const e=(Bp(i)-6e3)/je*Math.PI*2;return Math.max(0,Math.min(1,.5-2*Math.cos(e)))*11}const DS={skyTop:[.18,.05,.05],skyHorizon:[.34,.09,.07],worldTint:[.62,.32,.28],light:.3,isNight:!0};function ra(i,t="overworld"){if(t==="nether")return DS;const e=Bp(i);let n=Ms[0],s={...Ms[0],t:je};for(let a=0;a<Ms.length;a++){const l=Ms[a],c=Ms[a+1]??{...Ms[0],t:je};if(e>=l.t&&e<c.t){n=l,s=c;break}}const o=s.t===n.t?0:(e-n.t)/(s.t-n.t),r=Ol(n.tint,s.tint,o);return{skyTop:Ol(n.top,s.top,o),skyHorizon:Ol(n.hor,s.hor,o),worldTint:r,light:(r[0]+r[1]+r[2])/3,isNight:e>=13e3&&e<23e3}}const Hp=64,aa=256,Ps=i=>i*i*(3-2*i),Fr=i=>Math.max(0,Math.min(1,i)),Un=Math.PI*2,Ds=(i,t)=>{let e=Math.imul(i^2654435769,2246822507)^Math.imul(t^3266489909,668265261);return e^=e>>>15,e=Math.imul(e,2246822507),e^=e>>>13,(e>>>0)/4294967295},vi=(i,t)=>(i%t+t)%t,Wp=(i,t,e)=>{if(!Number.isInteger(i)||i<t||i&i-1)throw new Error(`${e} size must be a power of two >= ${t}`)},To=(i,t,e,n)=>{const s=i/e*n,o=t/e*n,r=Math.floor(s),a=Math.floor(o),l=Ps(s-r),c=Ps(o-a),h=vi(r,n),u=vi(r+1,n),d=vi(a,n),p=vi(a+1,n),m=Ds(h,d),v=Ds(u,d),f=Ds(h,p),g=Ds(u,p);return(m+(v-m)*l)*(1-c)+(f+(g-f)*l)*c};function Gp(i=Hp){Wp(i,16,"cloud-shadow");const t=new Float32Array(i*i);let e=1/0,n=-1/0;for(let a=0;a<i;a++)for(let l=0;l<i;l++){let c=0,h=0,u=1;for(const d of[2,4,8,16])c+=To(l,a,i,d)*u,h+=u,u*=.52;c/=h,t[l+a*i]=c,e=Math.min(e,c),n=Math.max(n,c)}const s=Math.max(1e-6,n-e);for(let a=0;a<t.length;a++)t[a]=(t[a]-e)/s;const o=new Uint8Array(i*i*4),r=(a,l)=>t[vi(a,i)+vi(l,i)*i];for(let a=0;a<i;a++)for(let l=0;l<i;l++){const c=(r(l+1,a)-r(l-1,a))*3.8,h=(r(l,a+1)-r(l,a-1))*3.8,u=1/Math.hypot(c,1,h),d=-c*u,p=-h*u,m=r(l,a),v=Math.pow(Math.max(0,1-Math.abs(m*2-1)),2.5),f=(l+a*i)*4;o[f]=Math.round((d*.5+.5)*255),o[f+1]=Math.round((p*.5+.5)*255),o[f+2]=Math.round(m*255),o[f+3]=Math.round(v*255)}return o}const Vp=(i,t,e=1)=>(i.name=t,i.wrapS=dn,i.wrapT=dn,i.magFilter=be,i.minFilter=Kn,i.generateMipmaps=!0,i.colorSpace=ln,i.anisotropy=e,i.needsUpdate=!0,i);function LS(i=Hp){const t=new qc(Gp(i),i,i,hn);return Vp(t,"mineworld-cloud-shadow-noise")}const Sd=[{kx:4,ky:1,amplitude:.18},{kx:1,ky:5,amplitude:.175},{kx:5,ky:3,amplitude:.16},{kx:-3,ky:6,amplitude:.155},{kx:7,ky:-2,amplitude:.142},{kx:2,ky:8,amplitude:.138},{kx:8,ky:5,amplitude:.123},{kx:-6,ky:9,amplitude:.12},{kx:11,ky:-5,amplitude:.104},{kx:5,ky:12,amplitude:.102},{kx:13,ky:8,amplitude:.086},{kx:-9,ky:14,amplitude:.083},{kx:16,ky:-7,amplitude:.071},{kx:7,ky:17,amplitude:.069},{kx:19,ky:11,amplitude:.058},{kx:-12,ky:20,amplitude:.057},{kx:23,ky:-10,amplitude:.047},{kx:11,ky:24,amplitude:.046},{kx:27,ky:16,amplitude:.038},{kx:-17,ky:28,amplitude:.037},{kx:32,ky:-15,amplitude:.03},{kx:16,ky:33,amplitude:.029},{kx:38,ky:21,amplitude:.023},{kx:-22,ky:39,amplitude:.022}],wd=[[1,2],[-2,1],[3,1],[-1,3],[2,-3],[3,-2],[-3,-1],[1,-3]],US=(i,t)=>Ds(i.kx+t*37+101,i.ky-t*53-211)*Un,kS=(i,t)=>Ds(i.ky+t*61-307,i.kx+t*43+419)*Un;function IS(i=aa){Wp(i,aa,"directional-wave");const t=i*i,e=new Float32Array(t);let n=1/0,s=-1/0;for(let u=0;u<i;u++){const d=u/i;for(let p=0;p<i;p++){const m=p/i,v=Math.sin(Un*(2*m+3*d)+1.71)*.012+Math.sin(Un*(-3*m+2*d)+4.19)*.007+Math.sin(Un*(5*m-d)+2.43)*.003,f=Math.sin(Un*(-2*m+3*d)+.63)*.011+Math.sin(Un*(3*m+4*d)+2.77)*.006+Math.sin(Un*(m-5*d)+5.31)*.003;let g=0,y=0;for(let T=0;T<Sd.length;T++){const L=Sd[T],A=US(L,T),R=T&1?-1:1,F=Un*(L.kx*(m+v*R)+L.ky*(d+f*(.82-R*.18)))+A,b=wd[T%wd.length],S=Un*(b[0]*m+b[1]*d)+kS(L,T),D=Math.sin(S)*.5+.5,Y=.22+Ps(D)*.78,q=Math.hypot(L.kx,L.ky),j=.035*(1-Ps(Fr((q-18)/12))),tt=Math.sin(F)+Math.sin(F*2+A*.37)*.17+Math.sin(F*3-A*.19)*j;g+=tt*L.amplitude*Y,y+=L.amplitude}const x=(To(p+29,u-47,i,16)-.5)*.07+(To(p-73,u+31,i,32)-.5)*.035;g=g/(y*.92)+x,e[p+u*i]=g,n=Math.min(n,g),s=Math.max(s,g)}}const o=Math.max(1e-6,s-n);for(let u=0;u<t;u++)e[u]=(e[u]-n)/o;const r=(u,d)=>e[vi(u,i)+vi(d,i)*i],a=4.8*(i/aa),l=new Float32Array(t);let c=1e-6;for(let u=0;u<i;u++)for(let d=0;d<i;d++){const p=r(d,u),m=p*4-r(d-1,u)-r(d+1,u)-r(d,u-1)-r(d,u+1),v=Math.max(0,m)*Ps(Fr((p-.38)/.52));l[d+u*i]=v,c=Math.max(c,v)}const h=new Uint8Array(t*4);for(let u=0;u<i;u++)for(let d=0;d<i;d++){const p=(r(d+1,u)-r(d-1,u))*a,m=(r(d,u+1)-r(d,u-1))*a,v=1/Math.hypot(p,1,m),f=-p*v,g=-m*v,y=r(d,u),x=To(d+83,u-19,i,16)*.58+To(d-41,u+67,i,32)*.42,T=Ps(Fr((x-.31)/.49)),L=Fr(l[d+u*i]/(c*.36)),A=Math.pow(L,.76)*T,R=(d+u*i)*4;h[R]=Math.round((f*.5+.5)*255),h[R+1]=Math.round((g*.5+.5)*255),h[R+2]=Math.round(y*255),h[R+3]=Math.round(A*255)}return h}function NS(i=aa){const t=new qc(IS(i),i,i,hn);return Vp(t,"mineworld-directional-wave",8)}const nh={dg:[-.3,.954],dgw:[.847,.532],d1:[.821,.571],d1w:[-.173,.985],d2:[-.419,.908],d2w:[.982,.188],d3:[.96,-.28],d3w:[-.735,-.678],groupWaveNumber:.075,groupTimeRate:-.07,groupWarpWaveNumber:.131,groupWarpTimeRate:.093,groupWarpPhase:1.11,groupWarpStrength:.42,groupBase:.76,groupAmplitude:.24,wave1Number:.22,wave1TimeRate:.24,wave1WarpNumber:.34,wave1WarpTimeRate:-.3,wave1WarpPhase:1.37,wave1WarpStrength:.24,wave1Weight:.42,wave2Number:.7,wave2TimeRate:-.54,wave2WarpNumber:.96,wave2WarpTimeRate:.72,wave2WarpPhase:-.83,wave2WarpStrength:.18,wave2Weight:.4,wave3Number:1.12,wave3TimeRate:.86,wave3WarpNumber:1.42,wave3WarpTimeRate:-1.08,wave3WarpPhase:2.11,wave3WarpStrength:.14,wave3Weight:.18,calmLinear:.145,calmQuadratic:-.055,oceanLinear:.34,oceanQuadratic:.04,quadraticBias:.17};function Dt(i){if(!Number.isFinite(i))throw new Error(`Water-wave GLSL constant must be finite: ${i}`);return(Object.is(i,-0)?0:i).toFixed(3)}function mn(i,t){return`${i<0?"-":"+"} ${t} * ${Dt(Math.abs(i))}`}function Or(i){return`${i<0?"-":"+"} ${Dt(Math.abs(i))}`}const vt=nh,FS=`
vec3 mwWaveField(vec2 p, float t, float ocean) {
  vec2 dg = vec2(${Dt(vt.dg[0])}, ${Dt(vt.dg[1])});
  vec2 dgw = vec2(${Dt(vt.dgw[0])}, ${Dt(vt.dgw[1])});
  vec2 d1 = vec2(${Dt(vt.d1[0])}, ${Dt(vt.d1[1])});
  vec2 d1w = vec2(${Dt(vt.d1w[0])}, ${Dt(vt.d1w[1])});
  vec2 d2 = vec2(${Dt(vt.d2[0])}, ${Dt(vt.d2[1])});
  vec2 d2w = vec2(${Dt(vt.d2w[0])}, ${Dt(vt.d2w[1])});
  vec2 d3 = vec2(${Dt(vt.d3[0])}, ${Dt(vt.d3[1])});
  vec2 d3w = vec2(${Dt(vt.d3w[0])}, ${Dt(vt.d3w[1])});
  float pgw = dot(p, dgw) * ${Dt(vt.groupWarpWaveNumber)} ${mn(vt.groupWarpTimeRate,"t")} ${Or(vt.groupWarpPhase)};
  float pg = dot(p, dg) * ${Dt(vt.groupWaveNumber)} ${mn(vt.groupTimeRate,"t")}
    + ${Dt(vt.groupWarpStrength)} * sin(pgw);
  float sg = sin(pg), cg = cos(pg), cgw = cos(pgw);
  float group = ${Dt(vt.groupBase)} + ${Dt(vt.groupAmplitude)} * sg;
  vec2 groupPhaseGrad = ${Dt(vt.groupWaveNumber)} * dg
    + ${Dt(vt.groupWarpStrength)} * cgw * ${Dt(vt.groupWarpWaveNumber)} * dgw;
  vec2 groupGrad = ${Dt(vt.groupAmplitude)} * cg * groupPhaseGrad;
  float p1w = dot(p, d1w) * ${Dt(vt.wave1WarpNumber)} ${mn(vt.wave1WarpTimeRate,"t")} ${Or(vt.wave1WarpPhase)};
  float p2w = dot(p, d2w) * ${Dt(vt.wave2WarpNumber)} ${mn(vt.wave2WarpTimeRate,"t")} ${Or(vt.wave2WarpPhase)};
  float p3w = dot(p, d3w) * ${Dt(vt.wave3WarpNumber)} ${mn(vt.wave3WarpTimeRate,"t")} ${Or(vt.wave3WarpPhase)};
  float p1 = dot(p, d1) * ${Dt(vt.wave1Number)} ${mn(vt.wave1TimeRate,"t")}
    + ${Dt(vt.wave1WarpStrength)} * sin(p1w);
  float p2 = dot(p, d2) * ${Dt(vt.wave2Number)} ${mn(vt.wave2TimeRate,"t")}
    + ${Dt(vt.wave2WarpStrength)} * sin(p2w);
  float p3 = dot(p, d3) * ${Dt(vt.wave3Number)} ${mn(vt.wave3TimeRate,"t")}
    + ${Dt(vt.wave3WarpStrength)} * sin(p3w);
  float s1 = sin(p1), s2 = sin(p2), s3 = sin(p3);
  vec2 p1Grad = ${Dt(vt.wave1Number)} * d1
    + ${Dt(vt.wave1WarpStrength)} * cos(p1w) * ${Dt(vt.wave1WarpNumber)} * d1w;
  vec2 p2Grad = ${Dt(vt.wave2Number)} * d2
    + ${Dt(vt.wave2WarpStrength)} * cos(p2w) * ${Dt(vt.wave2WarpNumber)} * d2w;
  vec2 p3Grad = ${Dt(vt.wave3Number)} * d3
    + ${Dt(vt.wave3WarpStrength)} * cos(p3w) * ${Dt(vt.wave3WarpNumber)} * d3w;
  float q = ${Dt(vt.wave1Weight)} * group * s1
    + ${Dt(vt.wave2Weight)} * s2
    + ${Dt(vt.wave3Weight)} * s3;
  vec2 qGrad = ${Dt(vt.wave1Weight)} * (groupGrad * s1 + group * cos(p1) * p1Grad)
    + ${Dt(vt.wave2Weight)} * cos(p2) * p2Grad
    + ${Dt(vt.wave3Weight)} * cos(p3) * p3Grad;
  float calmH = ${Dt(vt.calmLinear)} * q ${mn(vt.calmQuadratic,"q * q")};
  float oceanH = ${Dt(vt.oceanLinear)} * q ${mn(vt.oceanQuadratic,`(q * q - ${Dt(vt.quadraticBias)})`)};
  float h = mix(calmH, oceanH, ocean);
  float dhdq = mix(
    ${Dt(vt.calmLinear)} ${mn(2*vt.calmQuadratic,"q")},
    ${Dt(vt.oceanLinear)} ${mn(2*vt.oceanQuadratic,"q")},
    ocean
  );
  vec2 hGrad = dhdq * qGrad;
  return vec3(h, hGrad);
}`.trim();function Br(i,t,e,n,s,o,r,a,l,c,h){const u=(i*r[0]+t*r[1])*a+e*l+c,d=Math.cos(u),p=(i*n[0]+t*n[1])*s+e*o+h*Math.sin(u),m=Math.cos(p);return{height:Math.sin(p),slopeX:m*(s*n[0]+h*d*a*r[0]),slopeZ:m*(s*n[1]+h*d*a*r[1])}}function OS(i,t,e,n){const s=nh,o=Br(i,t,e,s.dg,s.groupWaveNumber,s.groupTimeRate,s.dgw,s.groupWarpWaveNumber,s.groupWarpTimeRate,s.groupWarpPhase,s.groupWarpStrength),r=s.groupBase+s.groupAmplitude*o.height,a=s.groupAmplitude*o.slopeX,l=s.groupAmplitude*o.slopeZ,c=Br(i,t,e,s.d1,s.wave1Number,s.wave1TimeRate,s.d1w,s.wave1WarpNumber,s.wave1WarpTimeRate,s.wave1WarpPhase,s.wave1WarpStrength),h=Br(i,t,e,s.d2,s.wave2Number,s.wave2TimeRate,s.d2w,s.wave2WarpNumber,s.wave2WarpTimeRate,s.wave2WarpPhase,s.wave2WarpStrength),u=Br(i,t,e,s.d3,s.wave3Number,s.wave3TimeRate,s.d3w,s.wave3WarpNumber,s.wave3WarpTimeRate,s.wave3WarpPhase,s.wave3WarpStrength),d=s.wave1Weight*r*c.height+s.wave2Weight*h.height+s.wave3Weight*u.height,p=s.wave1Weight*(a*c.height+r*c.slopeX)+s.wave2Weight*h.slopeX+s.wave3Weight*u.slopeX,m=s.wave1Weight*(l*c.height+r*c.slopeZ)+s.wave2Weight*h.slopeZ+s.wave3Weight*u.slopeZ,v=d*d,f=s.calmLinear*d+s.calmQuadratic*v,g=s.oceanLinear*d+s.oceanQuadratic*(v-s.quadraticBias),y=f+(g-f)*n,x=s.calmLinear+2*s.calmQuadratic*d,T=s.oceanLinear+2*s.oceanQuadratic*d,L=x+(T-x)*n;return{height:y,slopeX:L*p,slopeZ:L*m}}const bd=()=>typeof performance<"u"?performance.now():Date.now(),BS=24,xo=2048,zr=36,Hr=ee+8/9,zS=110,Td=(i,t,e)=>{const n=Math.max(0,Math.abs(i)-.5),s=Math.max(0,Math.abs(t)-.5);return n*n+s*s>e},Bl="float mcBright(float lv){ float f = clamp(lv,0.0,15.0)/15.0; return f/(4.0-3.0*f); }",zl="{ float skyLv = aLight.x*15.0; float blkLv = aLight.y*15.0; float bs = mcBright(max(skyLv - uSkyDarken, 0.0)); float bb = mcBright(blkLv); vSkyBright = bs; vBlockBright = bb; float drkFloor = (skyLv < 0.5) ? 0.03 : 0.04; vLF = max(bs, bb) * 0.96 + drkFloor; float sf = (bs + bb) > 0.0001 ? bs / (bs + bb) : 1.0; vTint = mix(vec3(1.0, 0.91, 0.78), uSkyTint, sf); }",Ed=i=>{const t=Math.max(0,Math.min(15,i))/15;return t/(4-3*t)};class Xp{constructor(t,e,n){_(this,"meshes",new Map);_(this,"lightGrids",new Map);_(this,"opaqueMat");_(this,"iceMat");_(this,"cutoutMat");_(this,"waterMat");_(this,"torchMat");_(this,"waterFrames");_(this,"waterTex");_(this,"cloudNoiseTex");_(this,"waterWaveTex");_(this,"waterAnimT",0);_(this,"waterFrame",0);_(this,"uSkyMul",{value:1});_(this,"uSkyTint",{value:new wt(1,1,1)});_(this,"uSkyDarken",{value:0});_(this,"uShaders",{value:0});_(this,"uTime",{value:0});_(this,"uSkyRefl",{value:new wt().setRGB(.55,.72,.95,ae)});_(this,"uSkyTop",{value:new wt().setRGB(.35,.55,.85,ae)});_(this,"uSunDir",{value:new I(.4,.85,.3)});_(this,"uRefractionColor",{value:null});_(this,"uRefractionDepth",{value:null});_(this,"uRefractionSize",{value:new Ft(1,1)});_(this,"uHasRefraction",{value:0});_(this,"uCameraUnderwater",{value:0});_(this,"uUnderwaterAmount",{value:0});_(this,"uReflectionColor",{value:null});_(this,"uReflectionSize",{value:new Ft(1,1)});_(this,"uReflectionMatrix",{value:new de});_(this,"uHasReflection",{value:0});_(this,"sun",new gp(16777215,0));_(this,"uShadowMap",{value:null});_(this,"uShadowMatrix",{value:new de});_(this,"uShadowTexel",{value:new Ft(1/xo,1/xo)});_(this,"uShadowOn",{value:0});_(this,"uHq",{value:0});_(this,"uSunUp",{value:0});_(this,"leafDepthMat",null);_(this,"meshWorkers",[]);_(this,"meshRr",0);_(this,"meshPending",new Set);_(this,"meshPendingSince",new Map);_(this,"meshFails",new Map);_(this,"meshQueue",[]);_(this,"editKeys",new Set);_(this,"priorityQueue",[]);_(this,"fogCullR2",(zS/Pt)**2);_(this,"lightingQuality",null);_(this,"sunEnabled",!0);_(this,"lastTint","");this.scene=t,this.world=e,this.opaqueMat=new ye({map:n,vertexColors:!0}),this.opaqueMat.shadowSide=Ne,this.iceMat=new ye({map:n,vertexColors:!0}),this.iceMat.shadowSide=Ne,this.cutoutMat=new ye({map:n,vertexColors:!0,alphaTest:.5,side:Qe}),this.waterFrames=hS(BS),this.waterTex=this.waterFrames[0].clone(),this.waterTex.needsUpdate=!0,this.cloudNoiseTex=LS(128),this.waterWaveTex=NS(),this.waterMat=new ye({map:this.waterTex,vertexColors:!0,transparent:!0,opacity:.78,depthWrite:!1,side:Qe}),this.waterMat.forceSinglePass=!0,this.installLight(this.opaqueMat,!1,!0),this.installLight(this.cutoutMat,!0,!1),this.installWaterShader(this.waterMat),this.installIceShader(this.iceMat),this.torchMat=new ye({map:cS(),transparent:!0,alphaTest:.5,side:Qe}),this.sun.castShadow=!1,this.sun.shadow.mapSize.set(xo,xo);const s=this.sun.shadow.camera;if(s.left=-zr,s.right=zr,s.top=zr,s.bottom=-zr,s.near=1,s.far=260,this.scene.add(this.sun),this.scene.add(this.sun.target),this.leafDepthMat=new hp({depthPacking:Vf,map:n,alphaTest:.5}),typeof Worker<"u"){const o=typeof navigator<"u"&&navigator.hardwareConcurrency||4,r=Math.max(1,Math.min(4,o-1));for(let a=0;a<r;a++){const l=new wS;l.onmessage=c=>{var v;const{cx:h,cz:u,mesh:d,error:p}=c.data,m=this.key(h,u);if(this.meshPending.has(m)){if(this.meshPending.delete(m),this.meshPendingSince.delete(m),p){const f=(this.meshFails.get(m)??0)+1;this.meshFails.set(m,f),console.warn(`[meshgen] 区块(${h},${u}) 网格化失败 #${f}: ${p.split(`
`)[0]}`);return}this.meshFails.delete(m),!(!d||!this.world.peek(h,u))&&(this.editKeys.has(m)?(this.priorityQueue.push({cx:h,cz:u,mesh:d}),(v=this.world.peek(h,u))!=null&&v.dirty||this.editKeys.delete(m)):this.meshQueue.push({cx:h,cz:u,mesh:d}))}},l.onerror=c=>{console.error("[meshgen worker] 致命错误(整个 worker 挂了，区块会停止网格化):",c.message)},this.meshWorkers.push(l)}}}installLight(t,e=!1,n=!1){t.onBeforeCompile=s=>{s.uniforms.uSkyTint=this.uSkyTint,s.uniforms.uSkyDarken=this.uSkyDarken,s.uniforms.uShadowMap=this.uShadowMap,s.uniforms.uShadowMatrix=this.uShadowMatrix,s.uniforms.uShadowTexel=this.uShadowTexel,s.uniforms.uShadowOn=this.uShadowOn,s.uniforms.uHq=this.uHq,s.uniforms.uSunUp=this.uSunUp,s.uniforms.uShaders=this.uShaders,s.uniforms.uSunDirW=this.uSunDir,s.uniforms.uTime=this.uTime,s.uniforms.uSurfaceNoise={value:this.cloudNoiseTex},s.uniforms.uWaterWaves={value:this.waterWaveTex};const o=e?`{ float sw = uShaders * 0.06 * aSway; vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz; float ph = wp.x*0.6 + wp.z*0.5 + wp.y*0.3; transformed.x += sin(ph + uTime*1.4) * sw; transformed.z += sin(ph*1.3 + uTime*1.1) * sw; transformed.y += sin(ph*0.8 + uTime*1.7) * sw * 0.5; }
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
`+Bl).replace("#include <begin_vertex>",`#include <begin_vertex>
`+o+zl+`
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
}`)}}updateSun(t,e,n,s){const o=t/je*Math.PI*2;let r=Math.cos(o),a=Math.sin(o),l=.1;const c=Math.hypot(r,a,l)||1;r/=c,a/=c,l/=c;const h=Math.round(e),u=Math.round(n),d=Math.round(s);this.sun.target.position.set(h,u,d),this.sun.position.set(h+r*120,u+a*120,d+l*120),this.sun.target.updateMatrixWorld(),this.sun.updateMatrixWorld(),this.uSunUp.value=Math.max(0,Math.min(1,(a-.02)/.2));const p=this.sun.shadow.map;this.sun.castShadow&&p&&p.texture&&this.uSunUp.value>.001?(this.uShadowMap.value=p.texture,this.uShadowMatrix.value=this.sun.shadow.matrix,this.uShadowOn.value=1):this.uShadowOn.value=0}installWaterShader(t){t.onBeforeCompile=e=>{e.uniforms.uSkyMul=this.uSkyMul,e.uniforms.uSkyTint=this.uSkyTint,e.uniforms.uSkyDarken=this.uSkyDarken,e.uniforms.uShaders=this.uShaders,e.uniforms.uTime=this.uTime,e.uniforms.uSkyRefl=this.uSkyRefl,e.uniforms.uSkyTop=this.uSkyTop,e.uniforms.uSunDir=this.uSunDir,e.uniforms.uHq=this.uHq,e.uniforms.uSurfaceNoise={value:this.waterWaveTex},e.uniforms.uRefractionColor=this.uRefractionColor,e.uniforms.uRefractionDepth=this.uRefractionDepth,e.uniforms.uRefractionSize=this.uRefractionSize,e.uniforms.uHasRefraction=this.uHasRefraction,e.uniforms.uCameraUnderwater=this.uCameraUnderwater,e.uniforms.uUnderwaterAmount=this.uUnderwaterAmount,e.uniforms.uReflectionColor=this.uReflectionColor,e.uniforms.uReflectionSize=this.uReflectionSize,e.uniforms.uReflectionMatrix=this.uReflectionMatrix,e.uniforms.uHasReflection=this.uHasReflection,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
${FS}
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
${Bl}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${zl}
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
  abs(mwWp0.y - ${Hr.toFixed(6)})
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
    abs(vWaterBaseWPos.y - ${Hr.toFixed(6)})
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
      abs(vWaterBaseWPos.y - ${Hr.toFixed(6)})
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
${Bl}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${zl}
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
      * (1.0 - smoothstep(0.18, 0.42, abs(vWPos.y - ${Hr.toFixed(6)})))
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
}`)}}setTint(t){const e=t.join();e!==this.lastTint&&(this.lastTint=e,this.uSkyTint.value.setRGB(t[0],t[1],t[2]))}setSkyMul(t){this.uSkyMul.value=t}setSkyDarken(t){this.uSkyDarken.value=t}setLightingQuality(t){var r;if(t===this.lightingQuality)return;this.lightingQuality=t,this.uShaders.value=t!=="off"?1:0;const e=t!=="off";this.waterMat.transparent=!e,this.waterMat.depthWrite=e,this.waterMat.opacity=e?1:.78,this.waterMat.needsUpdate=!0,this.sun.castShadow=t!=="off"&&this.sunEnabled,this.uHq.value=t==="high"?1:0;const n=t==="high"?4096:xo;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),(r=this.sun.shadow.map)==null||r.dispose(),this.sun.shadow.map=null,this.uShadowOn.value=0,this.uShadowTexel.value.set(1/n,1/n));const s=t==="high"?56:46,o=this.sun.shadow.camera;o.left!==-s&&(o.left=-s,o.right=s,o.top=s,o.bottom=-s,o.updateProjectionMatrix()),t==="off"&&(this.uShadowOn.value=0)}setSunEnabled(t){t!==this.sunEnabled&&(this.sunEnabled=t,this.sun.castShadow=t&&this.lightingQuality!==null&&this.lightingQuality!=="off",t||(this.uShadowOn.value=0))}setFogFar(t){this.fogCullR2=(t/Pt)**2}setSkyReflection(t,e){this.uSkyRefl.value.setRGB(t[0],t[1],t[2],ae),e&&this.uSkyTop.value.setRGB(e[0],e[1],e[2],ae)}setWaterRefraction(t,e,n,s,o){this.uRefractionColor.value=t,this.uRefractionDepth.value=e,this.uRefractionSize.value.set(Math.max(1,n),Math.max(1,s)),this.uHasRefraction.value=t&&e?1:0,this.uUnderwaterAmount.value=Zn.clamp(o,0,1)}setCameraUnderwater(t){this.uCameraUnderwater.value=t?1:0}setWaterReflection(t,e,n,s){this.uReflectionColor.value=t,this.uReflectionSize.value.set(Math.max(1,n),Math.max(1,s)),e&&this.uReflectionMatrix.value.copy(e),this.uHasReflection.value=t&&e?1:0}setSunDir(t,e,n){this.uSunDir.value.set(t,e,n)}setAtlas(t){this.opaqueMat.map=t,this.iceMat.map=t,this.cutoutMat.map=t,this.opaqueMat.needsUpdate=!0,this.iceMat.needsUpdate=!0,this.cutoutMat.needsUpdate=!0}animateWater(t){if(this.uTime.value+=t,this.uShaders.value>.5)return;this.waterAnimT+=t;const e=.09;for(;this.waterAnimT>=e;){this.waterAnimT-=e,this.waterFrame=(this.waterFrame+1)%this.waterFrames.length;const n=this.waterFrames[this.waterFrame];n.image&&(this.waterTex.image=n.image,this.waterTex.needsUpdate=!0)}}key(t,e){return`${t},${e}`}setWorld(t){for(const e of[...this.meshes.keys()])this.unload(e);this.lightGrids.clear(),this.meshQueue.length=0,this.priorityQueue.length=0,this.meshPending.clear(),this.meshPendingSince.clear(),this.meshFails.clear(),this.editKeys.clear(),this.world=t}dispose(){var t;for(const e of[...this.meshes.keys()])this.unload(e);this.lightGrids.clear();for(const e of this.meshWorkers)e.terminate();this.meshWorkers.length=0,this.opaqueMat.dispose(),this.iceMat.dispose(),this.cutoutMat.dispose(),this.waterMat.dispose(),this.torchMat.dispose(),this.waterTex.dispose(),this.cloudNoiseTex.dispose(),this.waterWaveTex.dispose(),(t=this.leafDepthMat)==null||t.dispose(),this.scene.remove(this.sun),this.scene.remove(this.sun.target)}buildGeo(t){var n;const e=new Be;return e.setAttribute("position",new fe(t.positions,3)),t.normals&&e.setAttribute("normal",new fe(t.normals,3)),e.setAttribute("uv",new fe(t.uvs,2)),e.setAttribute("color",new fe(t.colors,3)),t.light&&t.light.length&&e.setAttribute("aLight",new fe(t.light,2)),t.underwater&&t.underwater.length&&e.setAttribute("aUnderwater",new fe(t.underwater,1)),t.top&&t.top.length&&e.setAttribute("aTop",new fe(t.top,1)),t.topFace&&t.topFace.length&&e.setAttribute("aTopFace",new fe(t.topFace,1)),t.shore&&t.shore.length&&e.setAttribute("aShore",new fe(t.shore,1)),t.waveOpen&&t.waveOpen.length&&e.setAttribute("aWaveOpen",new fe(t.waveOpen,1)),t.sway&&t.sway.length&&e.setAttribute("aSway",new fe(t.sway,1)),e.setIndex(new fe(t.indices,1)),(n=t.top)!=null&&n.length&&(e.computeBoundingSphere(),e.boundingSphere&&(e.boundingSphere.radius+=.42)),e}lightLevelAt(t,e,n){const s=Math.floor(Math.floor(t)/Pt),o=Math.floor(Math.floor(n)/Pt),r=this.lightGrids.get(this.key(s,o));if(!r)return[15,0];const a=Math.min(3,Math.max(0,Math.floor((t-s*Pt)/4))),l=Math.min(3,Math.max(0,Math.floor((n-o*Pt)/4))),c=Math.min(47,Math.max(0,Math.floor(e/4))),h=r[a+l*4+c*16];return[h>>4,h&15]}brightnessAt(t,e,n,s){const[o,r]=this.lightLevelAt(t,e,n),a=o<.5?.03:.04;return Math.min(1,Math.max(Ed(o-s),Ed(r))*.96+a)}unload(t){this.editKeys.delete(t),this.meshPendingSince.delete(t),this.meshFails.delete(t),this.lightGrids.delete(t);const e=this.meshes.get(t);if(e){for(const n of[e.opaque,e.ice,e.cutout,e.water,e.torch])n&&(this.scene.remove(n),n.geometry.dispose());this.meshes.delete(t)}}addMesh(t,e,n,s){if(t.indices.length===0)return null;const o=new Qt(this.buildGeo(t),e);return o.position.set(n*Pt,0,s*Pt),(e===this.waterMat||e===this.iceMat)&&o.layers.set(Zc),this.scene.add(o),o}flushMesh(t){for(let e=0;e<8&&this.priorityQueue.length>0;e++){const n=this.priorityQueue.shift();n&&this.world.peek(n.cx,n.cz)&&this.applyMesh(n.cx,n.cz,n.mesh)}for(let e=0;e<t&&this.meshQueue.length>0;e++){const n=this.meshQueue.shift();n&&this.world.peek(n.cx,n.cz)&&this.applyMesh(n.cx,n.cz,n.mesh)}}meshBusy(){return this.meshQueue.length>0||this.priorityQueue.length>0||this.meshPending.size>0}meshQueueLen(){return this.meshQueue.length+this.priorityQueue.length}pipelineStats(){let t=0;for(const e of this.meshes.values())[e.opaque,e.ice,e.cutout,e.water,e.torch].some(n=>n&&n.visible)&&t++;return{meshed:this.meshes.size,visible:t,pending:this.meshPending.size,queued:this.meshQueueLen()}}applyMesh(t,e,n){this.unload(this.key(t,e)),this.lightGrids.set(this.key(t,e),n.light3d);const s=this.addMesh(n.opaque,this.opaqueMat,t,e)??new Qt,o=this.addMesh(n.ice,this.iceMat,t,e),r=this.addMesh(n.cutout,this.cutoutMat,t,e),a=this.addMesh(n.water,this.waterMat,t,e),l=this.addMesh(n.torch,this.torchMat,t,e);s.castShadow=!0,s.receiveShadow=!0,o&&(o.castShadow=!0,o.receiveShadow=!0),r&&(r.castShadow=!0,r.receiveShadow=!0,this.leafDepthMat&&(r.customDepthMaterial=this.leafDepthMat)),this.meshes.set(this.key(t,e),{opaque:s,ice:o,cutout:r,water:a,torch:l})}rebuildSync(t,e){const n=this.key(t,e);this.meshPending.delete(n),this.meshPendingSince.delete(n);const s=this.meshQueue.findIndex(a=>a.cx===t&&a.cz===e);s>=0&&this.meshQueue.splice(s,1);const o=this.priorityQueue.findIndex(a=>a.cx===t&&a.cz===e);o>=0&&this.priorityQueue.splice(o,1),this.applyMesh(t,e,SS(this.world,t,e));const r=this.world.peek(t,e);r&&(r.dirty=!1)}collectNeighbors(t,e){const n=[],s=[];for(let o=-1;o<=1;o++)for(let r=-1;r<=1;r++){const a=this.world.peek(t+o,e+r);if(!a)return null;n.push(a.blocks.slice()),s.push(a.fluid.slice())}return{blocks:n,fluid:s}}rebuild(t,e){if(this.meshWorkers.length===0){this.rebuildSync(t,e);return}const n=this.key(t,e);if(this.meshPending.has(n)||(this.meshFails.get(n)??0)>=3)return;const s=this.collectNeighbors(t,e);if(!s)return;this.meshPending.add(n),this.meshPendingSince.set(n,bd());const o=[...s.blocks.map(a=>a.buffer),...s.fluid.map(a=>a.buffer)];this.meshWorkers[this.meshRr].postMessage({cx:t,cz:e,blocks:s.blocks,fluid:s.fluid},o),this.meshRr=(this.meshRr+1)%this.meshWorkers.length;const r=this.world.peek(t,e);r&&(r.dirty=!1)}retryStuckMeshes(t=8e3){const e=bd();for(const[n,s]of this.meshPendingSince)e-s>t&&(this.meshPending.delete(n),this.meshPendingSince.delete(n),console.warn(`[meshgen] 区块 ${n} 网格化 ${Math.round((e-s)/1e3)}s 未回(worker 丢消息?) → 重试`))}update(t,e,n,s=2,o=0,r=0){this.retryStuckMeshes(),this.world.retryStuckGen();for(const l of[...this.meshes.keys()]){const[c,h]=l.split(",").map(Number);(Math.abs(c-t)>n+1||Math.abs(h-e)>n+1)&&this.unload(l)}for(let l=-n-1;l<=n+1;l++)for(let c=-n-1;c<=n+1;c++)this.world.request(t+c,e+l);const a=[];for(let l=-n;l<=n;l++)for(let c=-n;c<=n;c++){if(Td(c,l,this.fogCullR2))continue;const h=t+c,u=e+l,d=this.world.peek(h,u);d&&(!this.meshes.has(this.key(h,u))||d.dirty)&&a.push({cx:h,cz:u,d:c*c+l*l,ahead:CS(c,l,o,r)})}a.sort((l,c)=>l.ahead===c.ahead?l.d-c.d:l.ahead?-1:1);for(let l=0;l<Math.min(s,a.length);l++)this.rebuild(a[l].cx,a[l].cz);for(const[l,c]of this.meshes){const[h,u]=l.split(",").map(Number),d=!Td(h-t,u-e,this.fogCullR2);for(const p of[c.opaque,c.ice,c.cutout,c.water,c.torch])p&&(p.visible=d)}}cullToView(t,e,n,s,o=0){if(!(Math.abs(o)>.42))for(const[r,a]of this.meshes){const[l,c]=r.split(",").map(Number);if(!ES(l*Pt+Pt/2,c*Pt+Pt/2,t,e,n,s))for(const h of[a.opaque,a.ice,a.cutout,a.water,a.torch])h&&(h.visible=!1)}}remeshDirty(){var t;for(const e of[...this.meshes.keys()]){const[n,s]=e.split(",").map(Number);(t=this.world.peek(n,s))!=null&&t.dirty&&(this.editKeys.add(e),this.rebuild(n,s))}}}const Wr=10;class HS{constructor(t){_(this,"mesh");_(this,"tex");this.tex=new so().load("/mineworld/textures/crack.png"),this.tex.magFilter=ue,this.tex.minFilter=ue,this.tex.generateMipmaps=!1,this.tex.colorSpace=ae,this.tex.wrapS=dn,this.tex.repeat.set(1/Wr,1);const e=new ye({map:this.tex,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});this.mesh=new Qt(new Xe(1.002,1.002,1.002),e),this.mesh.layers.set(Yo),this.mesh.renderOrder=2,this.mesh.visible=!1,t.add(this.mesh)}show(t,e,n,s){const o=Math.max(0,Math.min(Wr-1,Math.floor(s*Wr)));this.tex.offset.x=o/Wr,this.mesh.position.set(t+.5,e+.5,n+.5),this.mesh.visible=!0}hide(){this.mesh.visible=!1}}const _a=256,qp=257,Yp=258,$p=259,Kp=260,jp=261,Zp=262,Qp=263,WS=264,GS=265,VS=266,XS=267,qS=268,YS=269,$S=270,KS=271,jS=272,ZS=273,Jp=274,ih=275,tm=276,sh=277,em=278,oh=279,nm=280,rh=281,im=282,sm=283,om=284,rm=285,am=286,lm=287,cm=288,hm=289,um=290,Vi=291,Ls=292,dm=293,fm=294,QS=295,JS=296,pm=297,mm=298,gm=299,vm=300,_m=301;function Ee(i,t,e,n){return{name:i,maxStack:1,food:null,tool:{kind:t,tier:e,speed:t==="sword"?1.5:t==="hoe"?1:n,maxDurability:e===1?59:e===2?131:e===3?250:1561}}}const Zi={[_a]:{name:"apple",maxStack:64,food:{nutrition:4,saturationModifier:.3},tool:null},[fm]:{name:"flint_and_steel",maxStack:1,food:null,tool:null},[QS]:{name:"nether_quartz",maxStack:64,food:null,tool:null},[JS]:{name:"diamond",maxStack:64,food:null,tool:null},[qp]:{name:"stick",maxStack:64,food:null,tool:null},[Yp]:{name:"coal",maxStack:64,food:null,tool:null},[$p]:Ee("wooden_pickaxe","pickaxe",1,2),[Kp]:Ee("wooden_axe","axe",1,2),[jp]:Ee("wooden_shovel","shovel",1,2),[Zp]:Ee("wooden_sword","sword",1,2),[Qp]:Ee("wooden_hoe","hoe",1,2),[WS]:Ee("stone_pickaxe","pickaxe",2,4),[GS]:Ee("stone_axe","axe",2,4),[VS]:Ee("stone_shovel","shovel",2,4),[XS]:Ee("stone_sword","sword",2,4),[qS]:Ee("stone_hoe","hoe",2,4),[YS]:Ee("iron_pickaxe","pickaxe",3,6),[$S]:Ee("iron_axe","axe",3,6),[KS]:Ee("iron_shovel","shovel",3,6),[jS]:Ee("iron_sword","sword",3,6),[ZS]:Ee("iron_hoe","hoe",3,6),[Jp]:{name:"iron_ingot",maxStack:64,food:null,tool:null},[pm]:Ee("diamond_pickaxe","pickaxe",4,8),[mm]:Ee("diamond_axe","axe",4,8),[gm]:Ee("diamond_shovel","shovel",4,8),[vm]:Ee("diamond_sword","sword",4,8),[_m]:Ee("diamond_hoe","hoe",4,8),[ih]:{name:"raw_porkchop",maxStack:64,food:{nutrition:3,saturationModifier:.3},tool:null},[tm]:{name:"cooked_porkchop",maxStack:64,food:{nutrition:8,saturationModifier:.8},tool:null},[sh]:{name:"raw_beef",maxStack:64,food:{nutrition:3,saturationModifier:.3},tool:null},[em]:{name:"cooked_beef",maxStack:64,food:{nutrition:8,saturationModifier:.8},tool:null},[oh]:{name:"raw_mutton",maxStack:64,food:{nutrition:2,saturationModifier:.3},tool:null},[nm]:{name:"cooked_mutton",maxStack:64,food:{nutrition:6,saturationModifier:.8},tool:null},[rh]:{name:"raw_chicken",maxStack:64,food:{nutrition:2,saturationModifier:.3},tool:null},[im]:{name:"cooked_chicken",maxStack:64,food:{nutrition:6,saturationModifier:.6},tool:null},[sm]:{name:"leather",maxStack:64,food:null,tool:null},[om]:{name:"wool",maxStack:64,food:null,tool:null},[rm]:{name:"feather",maxStack:64,food:null,tool:null},[am]:{name:"egg",maxStack:16,food:null,tool:null},[lm]:{name:"rotten_flesh",maxStack:64,food:{nutrition:4,saturationModifier:.1},tool:null},[cm]:{name:"bone",maxStack:64,food:null,tool:null},[hm]:{name:"flint",maxStack:64,food:null,tool:null},[um]:{name:"string",maxStack:64,food:null,tool:null},[Vi]:{name:"arrow",maxStack:64,food:null,tool:null},[Ls]:{name:"bow",maxStack:1,food:null,tool:null},[dm]:{name:"gunpowder",maxStack:64,food:null,tool:null}},tw=Object.keys(Zi).map(Number);function Hl(i){return i in Zi}function Wl(i){var t;return((t=Zi[i])==null?void 0:t.food)!=null}function ew(i){var t;return((t=Zi[i])==null?void 0:t.food)??null}function nw(i){var t;return((t=Zi[i])==null?void 0:t.name)??null}function xa(i){var t;return((t=Zi[i])==null?void 0:t.maxStack)??64}function ko(i){var t;return((t=Zi[i])==null?void 0:t.tool)??null}const iw={1:"stone",2:"dirt",3:"grass",4:"cobblestone",5:"sand",6:"oak_log",7:"oak_planks",8:"coal_ore",10:"oak_leaves",11:"crafting_table",12:"iron_ore",13:"furnace",14:"torch",15:"gravel",26:"sandstone",18:"obsidian",19:"netherrack",20:"soul_sand",21:"glowstone",22:"nether_quartz_ore",24:"bedrock",27:"cactus",28:"ice",30:"spruce_log",31:"spruce_leaves",32:"coal_block",33:"iron_block",34:"quartz_block",35:"diamond_ore",36:"diamond_block",[_a]:"apple",257:"stick",258:"coal",259:"wooden_pickaxe",260:"wooden_axe",261:"wooden_shovel",262:"wooden_sword",263:"wooden_hoe",264:"stone_pickaxe",265:"stone_axe",266:"stone_shovel",267:"stone_sword",268:"stone_hoe",269:"iron_pickaxe",270:"iron_axe",271:"iron_shovel",272:"iron_sword",273:"iron_hoe",274:"iron_ingot",275:"raw_porkchop",276:"cooked_porkchop",277:"raw_beef",278:"cooked_beef",279:"raw_mutton",280:"cooked_mutton",281:"raw_chicken",282:"cooked_chicken",283:"leather",284:"wool",285:"feather",286:"egg",287:"rotten_flesh",288:"bone",289:"flint",290:"string",291:"arrow",292:"bow",293:"gunpowder",294:"flint_and_steel",295:"nether_quartz",296:"diamond",297:"diamond_pickaxe",298:"diamond_axe",299:"diamond_shovel",300:"diamond_sword",301:"diamond_hoe"},sw=new Set(["stone","dirt","grass","cobblestone","sand","oak_log","oak_planks","coal_ore","oak_leaves","crafting_table","iron_ore","furnace","gravel","sandstone","obsidian","netherrack","soul_sand","glowstone","nether_quartz_ore","bedrock","cactus","ice","spruce_log","spruce_leaves","coal_block","iron_block","quartz_block","diamond_ore","diamond_block"]);let xm="classic";function Ad(i){xm=i}const ow={1:"石头",2:"泥土",3:"草方块",4:"圆石",5:"沙子",6:"原木",7:"木板",8:"煤矿",10:"树叶",11:"工作台",12:"铁矿",13:"熔炉",14:"火把",15:"砂砾",26:"沙石",32:"煤炭块",33:"铁块",34:"石英块",35:"钻石矿石",36:"钻石块",256:"苹果",257:"木棍",258:"煤炭",259:"木镐",260:"木斧",261:"木锹",262:"木剑",263:"木锄",264:"石镐",265:"石斧",266:"石锹",267:"石剑",268:"石锄",269:"铁镐",270:"铁斧",271:"铁锹",272:"铁剑",273:"铁锄",274:"铁锭",275:"生猪排",276:"熟猪排",277:"生牛肉",278:"牛排",279:"生羊肉",280:"熟羊肉",281:"生鸡肉",282:"熟鸡肉",283:"皮革",284:"羊毛",285:"羽毛",286:"鸡蛋",287:"腐肉",288:"骨头",289:"燧石",290:"线",291:"箭",292:"弓",293:"火药",294:"打火石",295:"下界石英",296:"钻石",297:"钻石镐",298:"钻石斧",299:"钻石锹",300:"钻石剑",301:"钻石锄"},$i=i=>{const t=iw[i];if(!t)return null;const e=xm==="classic"&&sw.has(t)?"icons_classic":"icons";return oo(`textures/${e}/${t}.png`)},ym=i=>ow[i]??`#${i}`,Bs=.25,rw=22,Rd=Bs/2;function bn(i,t,e,n,s=Math.random,o=1,r){return{id:i,count:o,dur:r,x:t+.5,y:e+.5,z:n+.5,vx:(s()-.5)*2,vy:2.5,vz:(s()-.5)*2,age:0}}function aw(i,t,e=.75){const n=e*e;for(let s=0;s<i.length;s++){const o=i[s],r=t(o.id);if(!(o.count>=r))for(let a=i.length-1;a>s;a--){const l=i[a];if(l.id!==o.id||o.dur!==void 0||l.dur!==void 0)continue;const c=o.x-l.x,h=o.y-l.y,u=o.z-l.z;if(c*c+h*h+u*u>n)continue;const d=Math.min(r-o.count,l.count);if(!(d<=0)&&(o.count+=d,l.count-=d,l.age<o.age&&(o.age=l.age),l.count<=0&&i.splice(a,1),o.count>=r))break}}}function lw(i,t,e){i.age+=e,i.vy-=rw*e;const n=i.x+i.vx*e,s=i.z+i.vz*e;let o=i.y+i.vy*e;const r=o-Rd;return i.vy<=0&&t.isSolid(Math.floor(n),Math.floor(r),Math.floor(s))&&(o=Math.floor(r)+1+Rd,i.vy=0,i.vx*=.6,i.vz*=.6),i.x=n,i.y=o,i.z=s,i}function cw(i,t,e,n){if(i.age<.3)return!1;const s=i.x-t,o=i.y-e,r=i.z-n;return s*s+o*o+r*r<1.4*1.4}const Eo=4,Cd=10,hw=16,Gr=.5/(hw*Eo);function uw(i){const t=new Xe(Bs,Bs,Bs),e=en[i].faces,n=t.attributes.uv;for(let s=0;s<6;s++){const o=e[s],r=o%Eo,a=Math.floor(o/Eo),l=r/Eo+Gr,c=(r+1)/Eo-Gr,h=1-(a+1)/Cd+Gr,u=1-a/Cd-Gr,d=s*4;n.setXY(d+0,l,u),n.setXY(d+1,c,u),n.setXY(d+2,l,h),n.setXY(d+3,c,h)}return n.needsUpdate=!0,t}class dw{constructor(t,e){_(this,"meshes",new Map);_(this,"geoCache",new Map);_(this,"mat");_(this,"itemMats",new Map);this.scene=t,this.mat=new ye({map:e})}setAtlas(t){this.mat.map=t,this.mat.needsUpdate=!0;for(const[e,n]of this.meshes)Hl(e.id)||(n.material.map=t,n.material.needsUpdate=!0)}itemMat(t){let e=this.itemMats.get(t);if(!e){const n=new so().load($i(t)??oo("textures/icons/apple.png"));n.magFilter=ue,n.minFilter=ue,n.colorSpace=ae,e=new ye({map:n,transparent:!0,alphaTest:.5,side:Qe}),this.itemMats.set(t,e)}return e}geo(t){let e=this.geoCache.get(t);return e||(e=Hl(t)?new tn(Bs,Bs):uw(t),this.geoCache.set(t,e)),e}sync(t,e){const n=new Set(t);for(const[s,o]of this.meshes)n.has(s)||(this.scene.remove(o),o.material.dispose(),this.meshes.delete(s));for(const s of t){let o=this.meshes.get(s);if(o||(o=new Qt(this.geo(s.id),(Hl(s.id)?this.itemMat(s.id):this.mat).clone()),this.scene.add(o),this.meshes.set(s,o)),e){const a=e(s.x,s.y+.5,s.z);o.material.color.setScalar(a)}const r=.1+Math.sin(s.age*3)*.06;o.position.set(s.x,s.y+r,s.z),o.rotation.y=s.age*1.8}}clear(){for(const[,t]of this.meshes)this.scene.remove(t),t.material.dispose();this.meshes.clear()}}function fw(i){var e;const t=((e=en[i])==null?void 0:e.name)??"";return["obsidian"].includes(t)?{roughness:.38,specularIntensity:.62}:["iron_block","diamond_block","quartz_block"].includes(t)?{roughness:.54,specularIntensity:.5}:t.includes("log")||["oak_planks","crafting_table"].includes(t)?{roughness:.8,specularIntensity:.34}:{roughness:.91,specularIntensity:.26}}function pw(i){return i===null||i<=0?"none":i===Fs?$i(i)?"sprite":"none":en[i]?"block":$i(i)?"sprite":"none"}const Gl=.8;function mw(i){const t=Math.PI/180,e=Math.sin(Math.sqrt(Math.max(0,i))*Math.PI),n=Math.sin(i*i*Math.PI);return{tx:-.4*e*Gl,ty:.2*Math.sin(Math.sqrt(Math.max(0,i))*Math.PI*2)*Gl,tz:-.2*Math.sin(i*Math.PI)*Gl,ry1:(45+n*-20)*t,rz:e*-20*t,rx:e*-80*t,ry2:-45*t}}const Ao=4,Pd=10,gw=16,Vr=.01/(gw*Ao),zs=[.6,.6,1,.5,.8,.8],vw=.3,_w=new I(1,0,0),xw=new I(0,1,0);function yw(i,t,e,n){const s=new Xe(i,t,e),o=new wt(n),r=[];for(let a=0;a<6;a++)for(let l=0;l<4;l++)r.push(o.r*zs[a],o.g*zs[a],o.b*zs[a]);return s.setAttribute("color",new Ce(r,3)),s}function Mw(i,t){const e=new Xe(t,t,t),n=en[i].faces,s=e.attributes.uv,o=[];for(let r=0;r<6;r++){const a=n[r],l=a%Ao,c=Math.floor(a/Ao),h=l/Ao+Vr,u=(l+1)/Ao-Vr,d=1-(c+1)/Pd+Vr,p=1-c/Pd-Vr,m=r*4;s.setXY(m+0,h,p),s.setXY(m+1,u,p),s.setXY(m+2,h,d),s.setXY(m+3,u,d);for(let v=0;v<4;v++)o.push(zs[r],zs[r],zs[r])}return s.needsUpdate=!0,e.setAttribute("color",new Ce(o,3)),e}class Sw{constructor(t){_(this,"scene",new Ks);_(this,"camera",new Ge(70,1,.01,10));_(this,"atlas");_(this,"root",new un);_(this,"arm");_(this,"item",null);_(this,"itemId",null);_(this,"spriteTex",new Map);_(this,"swingT",0);_(this,"wantSwing",!1);_(this,"bobPhase",0);_(this,"eating",!1);_(this,"eatT",0);_(this,"hurtT",0);_(this,"bright",1);_(this,"underwater",!1);_(this,"lightingQuality","off");_(this,"skyLight",new XM(14478591,1581105,0));_(this,"skyFill",new ad(14478591,0));_(this,"blockLight",new ad(16747834,0));_(this,"sunLight",new gp(16777215,0));_(this,"invViewQ",new Ei);_(this,"viewSun",new I);_(this,"viewUp",new I);_(this,"coolSky",new wt().setRGB(.68,.82,1));_(this,"lowSun",new wt().setRGB(1.38,.58,.16));_(this,"noonSun",new wt().setRGB(1.08,1,.88));_(this,"underwaterTint",new wt().setRGB(.62,.84,.96));_(this,"neutralTint",new wt(1,1,1));this.atlas=t,this.arm=new Qt(yw(.14,.5,.14,15249530),new ye({vertexColors:!0})),this.arm.position.set(0,-.22,0),this.root.add(this.arm),this.root.position.set(.5,-.45,-.7),this.root.rotation.set(.2,-.5,.45),this.scene.add(this.root),this.sunLight.castShadow=!1,this.scene.add(this.skyLight,this.skyFill,this.blockLight,this.sunLight,this.sunLight.target)}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}itemTexture(t){const e=this.spriteTex.get(t);if(e)return e;const n=$i(t);if(!n)return null;const s=new so().load(n);return s.magFilter=ue,s.minFilter=ue,s.generateMipmaps=!1,s.colorSpace=ae,this.spriteTex.set(t,s),s}setBrightness(t){this.bright+=(t-this.bright)*.12,this.applyViewTint()}setUnderwater(t){t!==this.underwater&&(this.underwater=t,this.applyViewTint())}setLightingQuality(t){if(t===this.lightingQuality)return;this.lightingQuality=t,t==="off"&&(this.skyLight.intensity=0,this.skyFill.intensity=0,this.blockLight.intensity=0,this.sunLight.intensity=0);const e=this.itemId;this.itemId=null,this.setHeld(e)}setLighting(t){if(this.lightingQuality==="off")return;const e=c=>{const h=Zn.clamp(c,0,15)/15;return h/(4-3*h)},n=t.sunEnabled?e(t.skyLevel-t.skyDarken):0,s=e(t.blockLevel),o=(c,h)=>c+(h-c)*.14;this.skyLight.color.copy(t.skyColor).lerp(this.coolSky,.25),this.underwater&&this.skyLight.color.multiply(this.underwaterTint),this.skyLight.groundColor.setRGB(.25,.3,.4),this.skyLight.intensity=o(this.skyLight.intensity,Math.max(.035,n*1.05)),this.skyFill.color.copy(this.skyLight.color),this.skyFill.intensity=o(this.skyFill.intensity,Math.max(.012,n*.32)),this.blockLight.color.setRGB(1,.56,.25),this.blockLight.intensity=o(this.blockLight.intensity,s*.62),this.invViewQ.copy(t.cameraQuaternion).invert(),this.viewSun.copy(t.sunDirectionWorld).applyQuaternion(this.invViewQ).normalize(),this.viewUp.set(0,1,0).applyQuaternion(this.invViewQ).normalize(),this.sunLight.position.copy(this.viewSun).multiplyScalar(5),this.sunLight.target.position.set(0,0,0),this.skyLight.position.copy(this.viewUp);const r=Zn.clamp(t.sunDirectionWorld.y*3,0,1);this.sunLight.color.copy(this.lowSun).lerp(this.noonSun,r),this.underwater&&this.sunLight.color.multiply(this.underwaterTint);const a=t.sunEnabled?Zn.smoothstep(t.skyLevel,11,15):0,l=Zn.smoothstep(t.sunDirectionWorld.y,.02,.2);this.sunLight.intensity=o(this.sunLight.intensity,a*l*1.55*(this.underwater?.62:1))}setHeld(t){if(t===this.itemId)return;if(this.itemId=t,this.item){if(this.root.remove(this.item),this.item.geometry.dispose(),Array.isArray(this.item.material))for(const n of this.item.material)n.dispose();else this.item.material.dispose();this.item=null}const e=pw(t);if(e==="block"&&t!==null){const n=fw(t),s=this.lightingQuality==="off"?new ye({map:this.atlas,vertexColors:!0}):new id({map:this.atlas,roughness:n.roughness,metalness:0,ior:1.35,specularIntensity:n.specularIntensity});this.item=new Qt(Mw(t,.32),s),this.item.position.set(-.02,.16,.04),this.item.rotation.set(-.1,.6,.1),this.root.add(this.item)}else if(e==="sprite"&&t!==null){const n=this.itemTexture(t);n&&(this.item=new Qt(new tn(.34,.34),new ye({map:n,transparent:!0,alphaTest:.5,side:Qe})),this.item.position.set(.04,.2,.04),this.item.rotation.set(0,-.35,.35),this.root.add(this.item))}this.applyViewTint()}applyViewTint(){const t=this.underwater?this.underwaterTint:this.neutralTint;this.arm.material.color.copy(t).multiplyScalar(this.bright),!(!this.item||Array.isArray(this.item.material))&&(this.item.material instanceof id?this.item.material.color.copy(t):this.item.material instanceof ye&&this.item.material.color.copy(t).multiplyScalar(this.bright))}swing(){this.wantSwing=!0}hurtShake(){this.hurtT=1}setAtlas(t){this.atlas=t;const e=this.itemId;this.itemId=null,this.setHeld(e)}setEating(t){this.eating=t,t||(this.eatT=0)}update(t,e){this.wantSwing&&this.swingT===0&&(this.swingT=1e-4),this.swingT>0&&(this.swingT+=t/vw,this.swingT>=1&&(this.swingT=this.wantSwing?1e-4:0)),this.wantSwing=!1,this.bobPhase+=t*e*7;const n=Math.cos(this.bobPhase)*.012*Math.min(1,e),s=Math.abs(Math.sin(this.bobPhase))*.012*Math.min(1,e),o=mw(this.swingT);if(this.root.position.set(.42+n+o.tx,-.28+s+o.ty,-.72+o.tz),this.root.rotation.set(.1,-.5,.4),this.root.rotateOnWorldAxis(_w,o.rx),this.root.rotateOnWorldAxis(xw,o.rz),this.eating){this.eatT+=t;const r=Math.sin(this.eatT*30);this.root.position.x+=-.18+r*.015,this.root.position.y+=.16+r*.02,this.root.position.z+=.18,this.root.rotateX(.4+r*.12),this.root.rotateZ(-.25)}if(this.hurtT>0){this.hurtT=Math.max(0,this.hurtT-t*4);const r=this.hurtT*this.hurtT,a=Math.sin(this.hurtT*45);this.root.position.x+=a*.05*r,this.root.position.y+=-.06*r,this.root.rotateZ(a*.35*r)}}}const Dd=.6,ya=.6,Ki=1.8,Gn=1.62,ww=1.8,bw=1.54,Tw=.3,Ew=.2,Ma=.08,Sa=.98,Wo=.42,Ld=4.317/20,Aw=5.612/20,Rw=.42,Cw=.84,Ud=.42,Xr=ya/2;function wa(i,t,e=Ki){const s=Math.floor(i.x-Xr+1e-6),o=Math.ceil(i.x+Xr-1e-6)-1,r=Math.floor(i.y+1e-6),a=Math.ceil(i.y+e-1e-6)-1,l=Math.floor(i.z-Xr+1e-6),c=Math.ceil(i.z+Xr-1e-6)-1;for(let h=r;h<=a;h++)for(let u=s;u<=o;u++)for(let d=l;d<=c;d++)if(t.isSolid(u,h,d))return!0;return!1}function Ss(i,t,e,n,s=Ki){if(e===0)return!1;const o=Math.sign(e),r=.2;let a=Math.abs(e);for(;a>1e-9;){const l=Math.min(a,r)*o;if(a-=Math.abs(l),i[t]+=l,wa(i,n,s)){i[t]-=l;let c=l/2;for(let h=0;h<24&&Math.abs(c)>1e-5;h++)i[t]+=c,wa(i,n,s)&&(i[t]-=c),c/=2;return!0}}return!1}function kd(i){const t=Math.cos(i.yaw),e=Math.sin(i.yaw);let n=i.forward*t-i.right*e,s=i.forward*e+i.right*t;const o=Math.hypot(n,s);return o>1e-9?(n/=o,s/=o):(n=0,s=0),{x:n,z:s}}function yo(i,t,e=Ki){return wa(i,t,e)?!1:wa({x:i.x,y:i.y-.06,z:i.z},t,e)}function Pw(i,t,e){var L,A,R;const n={...i.pos},s={...i.vel};if(t.fly){const F=kd(t),b=t.sprint?Cw:Rw;return s.x=F.x*b,s.z=F.z*b,s.y=(t.flyUp?Ud:0)-(t.flyDown?Ud:0),Ss(n,"y",s.y,e)&&(s.y=0),Ss(n,"x",s.x,e)&&(s.x=0),Ss(n,"z",s.z,e)&&(s.z=0),{pos:n,vel:s,onGround:yo(n,e),kbx:0,kbz:0}}const o=t.crouch===!0,r=o?ww:Ki,a=yo(n,e,r),l=((L=e.isWater)==null?void 0:L.call(e,Math.floor(n.x),Math.floor(n.y+.1),Math.floor(n.z)))??!1;let c=!1;t.jump&&(a||l)&&(s.y=l?.5:Wo,c=!0);const h=kd(t);let u=l?Ld*.7:t.sprint&&!o?Aw:Ld;o&&(u*=Tw),t.slow&&(u*=Ew);const d=i.kbx??0,p=i.kbz??0,m=Math.hypot(h.x,h.z)>1e-9;if(!a&&!l)s.x=s.x*.91+h.x*u*.09+d,s.z=s.z*.91+h.z*u*.09+p;else if(m||l){let F=u;if(m&&a&&!l){const b=Math.floor(n.x),S=Math.floor(n.y-.1),D=Math.floor(n.z);(((A=e.getBlock)==null?void 0:A.call(e,b,S,D))??0)===Ap&&(F*=.4)}s.x=h.x*F+d,s.z=h.z*F+p}else{const F=Math.floor(n.x),b=Math.floor(n.y-.1),S=Math.floor(n.z),D=((R=e.getBlock)==null?void 0:R.call(e,F,b,S))??0,Y=E1(D);s.x=s.x*Y+d,s.z=s.z*Y+p}Ss(n,"y",s.y,e,r)&&(s.y=0);const v=o&&a&&s.y<=0,f=n.x;Ss(n,"x",s.x,e,r)&&(s.x=0),v&&!yo(n,e,r)&&(n.x=f,s.x=0);const g=n.z;Ss(n,"z",s.z,e,r)&&(s.z=0),v&&!yo(n,e,r)&&(n.z=g,s.z=0);const y=yo(n,e,r);c?s.y=(s.y-Ma)*Sa:l?t.swimUp?s.y=.16:s.y=Math.max(s.y*.8-.02,-.15):y?s.y=0:s.y=(s.y-Ma)*Sa;const x=s.x===0?0:d*Dd,T=s.z===0?0:p*Dd;return{pos:n,vel:s,onGround:y,kbx:Math.abs(x)<.005?0:x,kbz:Math.abs(T)<.005?0:T}}const Mm=.05,Vl=.99,Dw=.25;function Id(i,t,e,n,s,o,r,a,l){const c=Math.hypot(n,s,o)||1;return{x:i,y:t,z:e,vx:n/c*r,vy:s/c*r,vz:o/c*r,age:0,stuck:!1,fromPlayer:a,damage:l}}function Lw(i,t){if(i.age++,i.stuck)return i;i.vy-=Mm,i.vx*=Vl,i.vy*=Vl,i.vz*=Vl;const e=Math.hypot(i.vx,i.vy,i.vz),n=Math.max(1,Math.ceil(e/Dw)),s=i.vx/n,o=i.vy/n,r=i.vz/n;for(let a=0;a<n;a++){const l=i.x+s,c=i.y+o,h=i.z+r;if(t.isSolid(Math.floor(l),Math.floor(c),Math.floor(h)))return i.stuck=!0,i.vx=i.vy=i.vz=0,i;i.x=l,i.y=c,i.z=h}return i}const Uw=new I(0,0,1);class kw{constructor(t){_(this,"meshes",new Map);_(this,"geoShaft",new Xe(.05,.05,.5));_(this,"geoHead",new Xe(.09,.09,.14));_(this,"geoFletch",new Xe(.16,.02,.12));_(this,"matShaft",new ye({color:7031339}));_(this,"matHead",new ye({color:10132130}));_(this,"matFletch",new ye({color:15263980}));_(this,"tmp",new I);this.scene=t}make(){const t=new un;t.add(new Qt(this.geoShaft,this.matShaft));const e=new Qt(this.geoHead,this.matHead);e.position.z=.3,t.add(e);const n=new Qt(this.geoFletch,this.matFletch);n.position.z=-.22,t.add(n);const s=new Qt(this.geoFletch,this.matFletch);return s.position.z=-.22,s.rotation.z=Math.PI/2,t.add(s),t}sync(t){const e=new Set(t);for(const[n,s]of this.meshes)e.has(n)||(this.scene.remove(s),this.meshes.delete(n));for(const n of t){let s=this.meshes.get(n);s||(s=this.make(),this.scene.add(s),this.meshes.set(n,s)),s.position.set(n.x,n.y,n.z);const o=Math.hypot(n.vx,n.vy,n.vz);o>1e-4&&(this.tmp.set(n.vx/o,n.vy/o,n.vz/o),s.quaternion.setFromUnitVectors(Uw,this.tmp))}}clear(){for(const[,t]of this.meshes)this.scene.remove(t);this.meshes.clear()}}function ba(i,t,e,n){const o=Math.floor(i.x-t+1e-6),r=Math.ceil(i.x+t-1e-6)-1,a=Math.floor(i.y+1e-6),l=Math.ceil(i.y+e-1e-6)-1,c=Math.floor(i.z-t+1e-6),h=Math.ceil(i.z+t-1e-6)-1;for(let u=a;u<=l;u++)for(let d=o;d<=r;d++)for(let p=c;p<=h;p++)if(n.isSolid(d,u,p))return!0;return!1}function Xl(i,t,e,n,s,o){if(e===0)return!1;const r=Math.sign(e),a=.2;let l=Math.abs(e);for(;l>1e-9;){const c=Math.min(l,a)*r;if(l-=Math.abs(c),i[t]+=c,ba(i,n,s,o)){i[t]-=c;let h=c/2;for(let u=0;u<24&&Math.abs(h)>1e-5;u++)i[t]+=h,ba(i,n,s,o)&&(i[t]-=h),h/=2;return!0}}return!1}function Iw(i,t,e,n){return ba(i,t,e,n)?!1:ba({x:i.x,y:i.y-.06,z:i.z},t,e,n)}function Sm(i,t,e,n,s){const o=t/2,r={...i},a={...n};return Xl(r,"y",a.y,o,e,s)&&(a.y=0),Xl(r,"x",a.x,o,e,s)&&(a.x=0),Xl(r,"z",a.z,o,e,s)&&(a.z=0),{pos:r,vel:a,onGround:Iw(r,o,e,s)}}const wi={pig:{hp:10,width:.9,height:.9,moveSpeed:.09,fallImmune:!1},cow:{hp:10,width:.9,height:1.4,moveSpeed:.08,fallImmune:!1},sheep:{hp:8,width:.9,height:1.3,moveSpeed:.08,fallImmune:!1},chicken:{hp:4,width:.4,height:.7,moveSpeed:.07,fallImmune:!0},zombie:{hp:20,width:.6,height:1.9,moveSpeed:.13,fallImmune:!1,hostile:!0,attack:3,sense:35},skeleton:{hp:20,width:.6,height:1.95,moveSpeed:.15,fallImmune:!1,hostile:!0,attack:2,sense:16,ranged:!0},creeper:{hp:20,width:.6,height:1.7,moveSpeed:.15,fallImmune:!1,hostile:!0,attack:43,sense:16,explosive:!0,sunImmune:!0},husk:{hp:20,width:.6,height:1.95,moveSpeed:.13,fallImmune:!1,hostile:!0,attack:3,sense:35,sunImmune:!0}},Nw=i=>wi[i].hostile===!0,Fw=1.8,Ow=10,Nd=.4,Bw=.36,Fd=-.05,zw=.06,Od=.85,Hw=.12;function Va(i,t,e,n){return{kind:i,pos:{x:t,y:e,z:n},vel:{x:0,y:0,z:0},yaw:0,onGround:!1,health:wi[i].hp,hurtCooldown:0,ai:{state:"idle",timer:20,target:null},eggTimer:i==="chicken"?6e3:0,atkCd:0,fuse:0}}function wm(i){return{...i,pos:{...i.pos},vel:{...i.vel},ai:{...i.ai,target:i.ai.target?{...i.ai.target}:null}}}function Ww(i,t){return{x:i.x+(t()*2-1)*8,y:i.y,z:i.z+(t()*2-1)*8}}const ql=i=>20+Math.floor(i()*40);function Gw(i,t,e){var v,f;const n=wi[i.kind],s=wm(i),o=[];s.hurtCooldown>0&&s.hurtCooldown--,s.ai.timer--;let r=0,a=0,l=n.moveSpeed;if(s.ai.state==="idle")s.ai.timer<=0&&(s.ai.state="wander",s.ai.target=Ww(s.pos,e),s.ai.timer=40+Math.floor(e()*60));else if(s.ai.state==="wander")if(!s.ai.target||s.ai.timer<=0)s.ai.state="idle",s.ai.target=null,s.ai.timer=ql(e);else{const g=s.ai.target.x-s.pos.x,y=s.ai.target.z-s.pos.z,x=Math.hypot(g,y);x<.7?(s.ai.state="idle",s.ai.target=null,s.ai.timer=ql(e)):(r=g/x,a=y/x)}else l=n.moveSpeed*Fw,s.ai.timer<=0?(s.ai.state="idle",s.ai.target=null,s.ai.timer=ql(e)):(r=Math.cos(s.yaw),a=Math.sin(s.yaw));if((r!==0||a!==0)&&s.onGround){const g=.5+n.width/2,y=Math.floor(s.pos.x+r*g),x=Math.floor(s.pos.z+a*g),T=Math.floor(s.pos.y);!t.isSolid(y,T-1,x)&&!t.isSolid(y,T-2,x)&&(r=0,a=0,s.ai.target=null)}let c=!1;if(r!==0||a!==0){const g=Math.hypot(r,a)||1,y=Math.floor(s.pos.x+r/g*(n.width/2+.3)),x=Math.floor(s.pos.z+a/g*(n.width/2+.3)),T=Math.floor(s.pos.y);t.isSolid(y,T,x)&&!t.isSolid(y,T+1,x)&&(c=!0)}const h=c&&s.onGround,u=(s.kbx??0)*.8,d=(s.kbz??0)*.8;if(s.kbx=Math.abs(u)<.01?0:u,s.kbz=Math.abs(d)<.01?0:d,s.vel.x=r*l+(s.kbx??0),s.vel.z=a*l+(s.kbz??0),((v=t.isWater)==null?void 0:v.call(t,Math.floor(s.pos.x),Math.floor(s.pos.y),Math.floor(s.pos.z)))??!1){const g=((f=t.isWater)==null?void 0:f.call(t,Math.floor(s.pos.x),Math.floor(s.pos.y)+1,Math.floor(s.pos.z)))??!1;c?s.vel.y=Wo:s.vel.y=g?Math.min((s.vel.y+zw)*Od,Hw):Math.min(s.vel.y*Od,0)}else s.vel.y=(s.vel.y-Ma)*Sa,h&&(s.vel.y=Wo),n.fallImmune&&s.vel.y<Fd&&(s.vel.y=Fd);const m=Sm(s.pos,n.width,n.height,s.vel,t);return s.pos=m.pos,s.vel=m.vel,s.onGround=m.onGround,s.onGround&&s.vel.y<0&&(s.vel.y=0),(Math.abs(s.vel.x)>1e-4||Math.abs(s.vel.z)>1e-4)&&(s.yaw=Math.atan2(s.vel.z,s.vel.x)),s.kind==="chicken"&&(s.eggTimer--,s.eggTimer<=0&&(o.push({kind:"layEgg",pos:{...s.pos}}),s.eggTimer=6e3+Math.floor(e()*6001))),{mob:s,events:o}}function Yl(i,t,e,n){const s=wm(i),o=[];if(s.hurtCooldown>0)return{mob:s,events:o};s.health-=t,s.hurtCooldown=Ow,o.push({kind:"hurt"});const r=Math.hypot(e.x,e.z)||1;return s.kbx=e.x/r*Nd,s.kbz=e.z/r*Nd,s.vel.x=s.kbx,s.vel.z=s.kbz,s.vel.y=Bw,s.onGround=!1,s.yaw=Math.atan2(s.vel.z,s.vel.x),wi[s.kind].hostile?(s.ai.state="chase",s.ai.timer=0,s.aggro=300):(s.ai.state="panic",s.ai.target=null,s.ai.timer=30+Math.floor(n()*10)),s.health<=0&&(o.push({kind:"drops",items:bm(s.kind,n),pos:{...s.pos}}),o.push({kind:"death",pos:{...s.pos}})),{mob:s,events:o}}function bm(i,t){switch(i){case"pig":return[{id:ih,count:1+Math.floor(t()*3)}];case"cow":{const e=[{id:sh,count:1+Math.floor(t()*3)}],n=Math.floor(t()*3);return n>0&&e.push({id:sm,count:n}),e}case"sheep":return[{id:om,count:1},{id:oh,count:1+Math.floor(t()*2)}];case"chicken":{const e=[{id:rh,count:1}],n=Math.floor(t()*3);return n>0&&e.push({id:rm,count:n}),e}case"zombie":case"husk":{const e=Math.floor(t()*3);return e>0?[{id:lm,count:e}]:[]}case"skeleton":{const e=[],n=Math.floor(t()*3);n>0&&e.push({id:cm,count:n});const s=Math.floor(t()*3);s>0&&e.push({id:um,count:s});const o=Math.floor(t()*3);return o>0&&e.push({id:Vi,count:o}),e}case"creeper":{const e=Math.floor(t()*3);return e>0?[{id:dm,count:e}]:[]}}}const Tm=1.9,Vw=1,Xw=1.7,qw=18,Yw=.05,$w=.6,Kw=15,jw=5,Zw=10,Qw=35,Jw=3,tb=30,eb=3,nb=.06,Bd=.85,ib=.12;function $l(i,t,e){const n=e.x-t.x,s=e.y-t.y,o=e.z-t.z,r=Math.ceil(Math.hypot(n,s,o)/.5);for(let a=1;a<r;a++){const l=a/r;if(i.isSolid(Math.floor(t.x+n*l),Math.floor(t.y+s*l),Math.floor(t.z+o*l)))return!1}return!0}function sb(i){return{...i,pos:{...i.pos},vel:{...i.vel},ai:{...i.ai,target:i.ai.target?{...i.ai.target}:null}}}function ob(i,t,e,n,s){var R,F;const o=wi[i.kind],r=sb(i),a=[];r.hurtCooldown>0&&(r.hurtCooldown-=Vw),r.atkCd>0&&r.atkCd--;let l=0,c=0,h=o.moveSpeed;const u=Math.max(0,(r.aggro??0)-1);r.aggro=u;const d=u>0?64:o.sense??16;let p=1/0,m=null;if(n){const b=n.x-r.pos.x,S=n.z-r.pos.z;if(p=Math.hypot(b,n.y-r.pos.y,S),p<=d&&p>.001){r.ai.state="chase",r.ai.target={...n};const D=b/p,Y=S/p;o.ranged?(m=n,p<jw?(l=-D,c=-Y):p>Zw&&(l=D,c=Y)):(l=D,c=Y)}}if(l===0&&c===0)if(h=o.moveSpeed*$w,r.ai.timer--,r.ai.state==="chase")r.ai.state="idle",r.ai.target=null,r.ai.timer=20+Math.floor(e()*40);else if(r.ai.state==="wander"&&r.ai.target){const b=r.ai.target.x-r.pos.x,S=r.ai.target.z-r.pos.z,D=Math.hypot(b,S);D<.7||r.ai.timer<=0?(r.ai.state="idle",r.ai.target=null,r.ai.timer=20+Math.floor(e()*40)):(l=b/D,c=S/D)}else r.ai.timer<=0&&(r.ai.state="wander",r.ai.target={x:r.pos.x+(e()*2-1)*8,y:r.pos.y,z:r.pos.z+(e()*2-1)*8},r.ai.timer=40+Math.floor(e()*60));const v={x:r.pos.x,y:r.pos.y+o.height*.85,z:r.pos.z},f=n?{x:n.x,y:n.y+1,z:n.z}:null;if(o.ranged){if(f&&p<=Kw&&r.atkCd<=0&&$l(t,v,f)){const b=p/Tm,S=.5*Mm*b*b*1.15,D=f.x-v.x,Y=f.y+S-v.y,q=f.z-v.z,j=Math.hypot(D,Y,q)||1;a.push({kind:"shootArrow",from:v,dir:{x:D/j,y:Y/j,z:q/j},damage:1+Math.floor(e()*4)}),r.atkCd=Qw}}else if(o.explosive){const b=r.fuse>0?7:Jw;if(f&&p<=b&&$l(t,v,f)){if(r.fuse++,l=0,c=0,r.fuse>=tb)return a.push({kind:"explode",pos:{...r.pos},radius:eb,damage:o.attack??43}),a.push({kind:"death",pos:{...r.pos}}),{mob:r,events:a}}else r.fuse=Math.max(0,r.fuse-1)}else f&&p<=Xw&&r.atkCd<=0&&$l(t,v,f)&&(a.push({kind:"attackPlayer",damage:o.attack??2}),r.atkCd=qw);if((l!==0||c!==0)&&r.onGround){const b=.5+o.width/2,S=Math.floor(r.pos.x+l*b),D=Math.floor(r.pos.z+c*b),Y=Math.floor(r.pos.y);!t.isSolid(S,Y-1,D)&&!t.isSolid(S,Y-2,D)&&(l=0,c=0,r.ai.target=null)}let g=!1;if(l!==0||c!==0){const b=Math.hypot(l,c)||1,S=Math.floor(r.pos.x+l/b*(o.width/2+.3)),D=Math.floor(r.pos.z+c/b*(o.width/2+.3)),Y=Math.floor(r.pos.y);t.isSolid(S,Y,D)&&!t.isSolid(S,Y+1,D)&&(g=!0)}const y=g&&r.onGround,x=(r.kbx??0)*.8,T=(r.kbz??0)*.8;if(r.kbx=Math.abs(x)<.01?0:x,r.kbz=Math.abs(T)<.01?0:T,r.vel.x=l*h+(r.kbx??0),r.vel.z=c*h+(r.kbz??0),((R=t.isWater)==null?void 0:R.call(t,Math.floor(r.pos.x),Math.floor(r.pos.y),Math.floor(r.pos.z)))??!1){const b=((F=t.isWater)==null?void 0:F.call(t,Math.floor(r.pos.x),Math.floor(r.pos.y)+1,Math.floor(r.pos.z)))??!1;g?r.vel.y=Wo:r.vel.y=b?Math.min((r.vel.y+nb)*Bd,ib):Math.min(r.vel.y*Bd,0)}else r.vel.y=(r.vel.y-Ma)*Sa,y&&(r.vel.y=Wo);const A=Sm(r.pos,o.width,o.height,r.vel,t);return r.pos=A.pos,r.vel=A.vel,r.onGround=A.onGround,r.onGround&&r.vel.y<0&&(r.vel.y=0),(Math.abs(r.vel.x)>1e-4||Math.abs(r.vel.z)>1e-4)&&(r.yaw=Math.atan2(r.vel.z,r.vel.x)),m&&(r.yaw=Math.atan2(m.z-r.pos.z,m.x-r.pos.x)),s&&!o.sunImmune&&(r.health-=Yw),r.health<=0&&(a.push({kind:"drops",items:bm(r.kind,e),pos:{...r.pos}}),a.push({kind:"death",pos:{...r.pos}})),{mob:r,events:a}}const rb=14;function ab(i,t){return t<.4?i==="desert"?"husk":"zombie":t<.75?"skeleton":"creeper"}function lb(i,t,e,n){return!(i.getBlock(t,e-1,n)!==bp||we(i.getBlock(t,e,n))||we(i.getBlock(t,e+1,n)))}function zd(i,t,e,n,s,o,r=24,a=44,l=null,c=Math.PI){for(let h=0;h<12;h++){const u=l===null?n()*Math.PI*2:l+(n()*2-1)*c,d=r+n()*(a-r),p=Math.floor(t+Math.cos(u)*d),m=Math.floor(e+Math.sin(u)*d),v=o(p,m);if(s.getBlock(p,v,m)===bp)return ub(i,p+.5,v+1,m+.5,n,s)}return[]}function Rc(i,t,e,n){return!(!we(i.getBlock(t,e-1,n))||we(i.getBlock(t,e,n))||we(i.getBlock(t,e+1,n)))}function Em(i,t,e,n){const s=rb-1;for(let o=-s;o<=s;o++){const r=s-Math.abs(o);for(let a=-r;a<=r;a++){const l=r-Math.abs(a);for(let c=-l;c<=l;c++)if(i.getBlock(t+c,e+o,n+a)===Fs)return!1}}return!0}function cb(i,t,e,n,s,o,r=16,a=32,l){for(let c=0;c<14;c++){const h=n()*Math.PI*2,u=r+n()*(a-r),d=Math.floor(t+Math.cos(h)*u),p=Math.floor(e+Math.sin(h)*u),m=o(d,p);if(l?l(d,m+1,p)>7:!Em(s,d,m+1,p))continue;const v=[],f=1+Math.floor(n()*3);for(let g=0;g<f;g++){const y=d+Math.floor((n()*2-1)*2),x=p+Math.floor((n()*2-1)*2),T=o(y,x);Rc(s,y,T+1,x)&&v.push(Va(i,y+.5,T+1,x+.5))}if(v.length)return v}return[]}function hb(i,t,e,n,s,o,r,a=5,l=24,c){for(let u=0;u<24;u++){const d=s()*Math.PI*2,p=a+s()*(l-a),m=Math.floor(t+Math.cos(d)*p),v=Math.floor(n+Math.sin(d)*p),f=Math.min(Math.floor(e)+8,r(m,v)-5),g=Math.max(2,Math.floor(e)-14);for(let y=f;y>=g;y--){if(!Rc(o,m,y,v)||(c?c(m,y,v)>7:!Em(o,m,y,v)))continue;const x=[],T=1+Math.floor(s()*2);for(let L=0;L<T;L++){const A=m+Math.floor((s()*2-1)*2),R=v+Math.floor((s()*2-1)*2);for(let F=1;F>=-1;F--){const b=y+F;if(b<r(A,R)-5&&Rc(o,A,b,R)){x.push(Va(i,A+.5,b,R+.5));break}}}if(x.length)return x}}return[]}function ub(i,t,e,n,s,o){const r=[];for(let a=0;a<16&&r.length<4;a++){const l=Math.floor(t)+Math.floor((s()*2-1)*4),c=Math.floor(n)+Math.floor((s()*2-1)*4);for(let h=3;h>=-3;h--){const u=Math.floor(e)+h;if(lb(o,l,u,c)){r.push(Va(i,l+.5,u,c+.5));break}}}return r}function Hd(i){const t={kind:i.kind,x:i.pos.x,y:i.pos.y,z:i.pos.z,yaw:i.yaw,health:i.health};return i.kind==="chicken"&&(t.egg=i.eggTimer),t}function Wd(i){const t=Va(i.kind,i.x,i.y,i.z);return t.yaw=i.yaw,t.health=i.health,i.egg!==void 0&&(t.eggTimer=i.egg),t}function db(i,t,e){if(e)return!1;const n=Math.floor(i.pos.x),s=Math.floor(i.pos.z),o=Math.floor(i.pos.y+wi[i.kind].height);for(let r=Math.floor(i.pos.y);r<=o;r++)if(ei(t.getBlock(n,r,s)))return!1;for(let r=o+1;r<ve;r++){const a=t.getBlock(n,r,s);if(we(a)||ei(a))return!1}return!0}const Xi=64,Kt={head:{u:0,v:0,x:8,y:8,z:8},snout:{u:32,v:0,x:4,y:3,z:6},animalBody:{u:0,v:16,x:12,y:8,z:8},humanBody:{u:0,v:16,x:4,y:12,z:8},leg:{u:0,v:36,x:4,y:12,z:4},arm:{u:16,v:36,x:4,y:12,z:4},wing:{u:32,v:16,x:8,y:6,z:2},tail:{u:32,v:36,x:2,y:8,z:2}};function xi(i,t){const{u:e,v:n,x:s,y:o,z:r}=i;switch(t){case"top":return{x:e+r,y:n,w:s,h:r};case"bottom":return{x:e+r+s,y:n,w:s,h:r};case"right":return{x:e,y:n+r,w:r,h:o};case"front":return{x:e+r,y:n+r,w:s,h:o};case"left":return{x:e+r+s,y:n+r,w:r,h:o};case"back":return{x:e+r+s+r,y:n+r,w:s,h:o}}}const Gd=new Map;function fb(i){let t=i%2147483647;return t<=0&&(t+=2147483646),()=>(t=t*16807%2147483647)/2147483647}function pb(i){const t=Number.parseInt(i.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function Io(i,t){const[e,n,s]=pb(i),o=r=>Math.max(0,Math.min(255,Math.round(r*t))).toString(16).padStart(2,"0");return`#${o(e)}${o(n)}${o(s)}`}function mb(i,t,e){i.fillStyle=t,i.fillRect(e.x,e.y,e.w,e.h)}function An(i,t,e,n,s=1,o=1){i.fillStyle=t,i.fillRect(Math.round(e),Math.round(n),Math.round(s),Math.round(o))}function pe(i,t,e,n,s){const o={top:1.08,bottom:.62,right:.96,front:.88,left:.78,back:.83},r=fb(s),a=["right","front","left","back","top","bottom"];for(const l of a){const c=xi(t,l);mb(i,Io(e,o[l]),c);const h=Math.max(2,Math.floor(c.w*c.h/12));for(let u=0;u<h;u++)An(i,Io(n,o[l]),c.x+Math.floor(r()*c.w),c.y+Math.floor(r()*c.h))}}function he(i,t,e,n,s,o,r=1,a=1){const l=xi(t,e);An(i,n,l.x+s,l.y+o,r,a)}function gb(i,t){const e=Kt.head,n=Kt.animalBody,s=Kt.leg,o=Kt.snout;if(t==="pig")pe(i,e,"#e7a39d","#f0b2ab",11),pe(i,n,"#e5a09a","#d98e8b",12),pe(i,s,"#dc9692","#c97f7d",13),pe(i,o,"#d88b8b","#efaaa4",14),he(i,e,"right","#202020",1,2,2,2),he(i,e,"right","#202020",5,2,2,2),he(i,o,"right","#7c4d55",1,1),he(i,o,"right","#7c4d55",4,1);else if(t==="cow"){pe(i,e,"#554033","#382b23",21),pe(i,n,"#594435","#3f3026",22),pe(i,s,"#4c382c","#2f241d",23),pe(i,o,"#b9a28e","#8e7663",24);for(const r of["right","front","left","back","top"]){const a=xi(n,r);An(i,"#e7ddcd",a.x+1,a.y+1,Math.max(2,Math.floor(a.w/3)),Math.max(2,Math.floor(a.h/2))),An(i,"#e7ddcd",a.x+Math.max(1,a.w-4),a.y+Math.max(1,a.h-3),3,2)}he(i,e,"right","#f0e7d9",0,0,3,5),he(i,e,"right","#171717",1,2,2,2),he(i,e,"right","#171717",5,2,2,2),he(i,o,"right","#4b3834",1,1),he(i,o,"right","#4b3834",4,1)}else if(t==="sheep"){pe(i,e,"#4a433d","#625950",31),pe(i,n,"#ece9e1","#d7d3c9",32),pe(i,s,"#4a433d","#312d29",33);for(const r of["front","back","top","right","left"]){const a=xi(n,r);for(let l=0;l<a.h;l+=3)for(let c=l/3%2;c<a.w;c+=3)An(i,"#f8f6ef",a.x+c,a.y+l,2,2)}he(i,e,"right","#ece9e1",0,0,8,2),he(i,e,"right","#171717",1,3,2,2),he(i,e,"right","#171717",5,3,2,2)}else pe(i,e,"#f1f1ef","#d9d9d6",41),pe(i,n,"#eeeeeb","#d6d6d2",42),pe(i,s,"#d99020","#a96917",43),pe(i,Kt.wing,"#f7f7f5","#d4d4d0",44),he(i,e,"right","#151515",1,2,2,2),he(i,e,"right","#151515",5,2,2,2),he(i,e,"right","#ffffff",1,2),he(i,e,"right","#ffffff",5,2)}function vb(i,t){const e=Kt.head,n=Kt.humanBody,s=Kt.arm,o=Kt.leg;if(t==="skeleton"){pe(i,e,"#dcdcd0","#bcbcaf",71),pe(i,n,"#d8d8cc","#9f9f91",72),pe(i,s,"#d6d6ca","#a5a598",73),pe(i,o,"#d6d6ca","#a5a598",74),he(i,e,"right","#1b1b1b",1,2,2,2),he(i,e,"right","#1b1b1b",5,2,2,2),he(i,e,"right","#77776d",3,4,2,1),he(i,e,"right","#77776d",1,6,6,1);const p=xi(n,"right");An(i,"#9b9b8e",p.x+3,p.y+1,2,10);for(const m of[2,5,8])An(i,"#85857a",p.x,p.y+m,3,1),An(i,"#85857a",p.x+5,p.y+m,3,1);return}const r=t==="husk",a=r?"#b29a5e":"#568746",l=r?"#8f783f":"#3f6e37",c=r?"#b9a66d":"#2f6a69",h=r?"#8c7645":"#244f50",u=r?"#66542e":"#2d3158";pe(i,e,a,l,r?67:61),pe(i,n,c,h,r?68:62),pe(i,s,c,a,r?69:63),pe(i,o,u,Io(u,.75),r?70:64);for(const p of["right","front","left","back"]){const m=xi(s,p);An(i,Io(a,p==="left"?.8:.95),m.x,m.y+7,m.w,5)}he(i,e,"right","#242022",1,2,2,1),he(i,e,"right","#242022",5,2,2,1),he(i,e,"right",r?"#5e4724":"#31562c",2,6,4,1);const d=xi(n,"right");An(i,l,d.x+1,d.y+7,2,3),An(i,Io(c,.72),d.x+5,d.y+10,3,2)}function _b(i){const t=Kt.head,e=Kt.humanBody;pe(i,t,"#5d9f43","#407c31",81),pe(i,e,"#5a9840","#3d762e",82),pe(i,Kt.leg,"#4d8937","#326628",83),he(i,t,"right","#101010",1,2,2,2),he(i,t,"right","#101010",5,2,2,2),he(i,t,"right","#101010",3,4,2,2),he(i,t,"right","#101010",2,6,2,2),he(i,t,"right","#101010",4,6,2,2)}function xb(i,t){t.clearRect(0,0,Xi,Xi),t.imageSmoothingEnabled=!1,i==="pig"||i==="cow"||i==="sheep"||i==="chicken"?gb(t,i):i==="creeper"?_b(t):vb(t,i)}function yb(i){const t=Gd.get(i);if(t)return t;const e=document.createElement("canvas");e.width=e.height=Xi;const n=e.getContext("2d");n&&xb(i,n);const s=new Ba(e);return s.magFilter=ue,s.minFilter=ue,s.generateMipmaps=!1,s.colorSpace=ae,Gd.set(i,s),s}function Mb(i,t=30){if(i<=0)return{whiteness:0,swell:1};const e=Math.min(1,i/t+.3*Math.abs(Math.sin(i*.7)));return{whiteness:e,swell:1+.5*e}}const Sb=[.8,.8,1,.42,.8,.8],wb=3.4,Vd=["right","left","top","bottom","front","back"];function bb(i,t,e,n,s){const o=new Xe(i,t,e),r=new wt(n),a=[];for(let l=0;l<6;l++){const c=Sb[l];for(let h=0;h<4;h++)a.push(r.r*c,r.g*c,r.b*c)}if(o.setAttribute("color",new Ce(a,3)),s){const l=o.attributes.uv;for(let c=0;c<Vd.length;c++){const h=xi(s,Vd[c]),u=h.x/Xi,d=(h.x+h.w)/Xi,p=1-(h.y+h.h)/Xi,m=1-h.y/Xi,v=c*4;l.setXY(v,u,m),l.setXY(v+1,d,m),l.setXY(v+2,u,p),l.setXY(v+3,d,p)}l.needsUpdate=!0}return o}function Ta(i,t,e,n,s,o,r,a,l,c){const h=new Qt(bb(e,n,s,o,c),t);return h.position.set(r,a,l),i.add(h),h}function fi(i,t,e,n,s,o,r){const a=new un;a.position.set(n,o,s),Ta(a,t,r,o,r,16777215,0,-o/2,0,Kt.leg),i.add(a),e.push(a)}function ws(i,t,e,n,s,o,r,a,l=0){const c=new un;return c.position.set(n,s,o),c.rotation.z=l,Ta(c,t,a,r,a,16777215,0,-r/2,0,Kt.arm),i.add(c),e.push(c),c}function Tb(i){const t=new un,e=[],n=[],s=new ye({vertexColors:!0}),o=new ye({map:yb(i),vertexColors:!0}),r=[s,o],a=(v,f,g,y,x,T,L)=>Ta(t,s,v,f,g,y,x,T,L),l=(v,f,g,y,x,T,L)=>Ta(t,o,f,g,y,16777215,x,T,L,v);let c,h;if(i==="pig"){l(Kt.animalBody,.9,.5,.6,0,.26+.25,0),c=l(Kt.head,.44,.44,.5,.55,.26+.28,0),l(Kt.snout,.16,.15,.3,.79,.26+.2,0),a(.14,.12,.04,14257292,.5,.26+.52,.2),a(.14,.12,.04,14257292,.5,.26+.52,-.2),h=l(Kt.tail,.1,.14,.1,-.47,.26+.36,0);for(const[f,g]of[[.3,.2],[.3,-.2],[-.32,.2],[-.32,-.2]])fi(t,o,e,f,g,.26,.16)}else if(i==="cow"){l(Kt.animalBody,1,.6,.62,0,.52+.3,0),c=l(Kt.head,.45,.48,.52,.6,.52+.4,0),l(Kt.snout,.18,.2,.42,.86,.52+.28,0),a(.09,.14,.09,14471352,.61,.52+.7,.2),a(.09,.14,.09,14471352,.61,.52+.7,-.2),a(.16,.1,.34,15709892,-.18,.52-.02,0),h=l(Kt.tail,.1,.32,.1,-.51,.52+.38,0);for(const[g,y]of[[.34,.21],[.34,-.21],[-.34,.21],[-.34,-.21]])fi(t,o,e,g,y,.52,.18)}else if(i==="sheep"){l(Kt.animalBody,.94,.7,.76,0,.46+.36,0),a(.5,.34,.42,15526627,.4,.46+.6,0),c=l(Kt.head,.3,.38,.36,.57,.46+.38,0),a(.1,.1,.04,4669498,.52,.46+.56,.18),a(.1,.1,.04,4669498,.52,.46+.56,-.18);for(const[y,x]of[[.28,.22],[.28,-.22],[-.3,.22],[-.3,-.22]])fi(t,o,e,y,x,.46,.15)}else if(i==="zombie"){l(Kt.humanBody,.28,.66,.5,0,.82+.33,0),c=l(Kt.head,.44,.44,.44,0,.82+.88,0),ws(t,o,n,.08,.82+.63,.35,.62,.18,1.28),ws(t,o,n,.08,.82+.63,-.35,.62,.18,1.28);for(const[,f]of[[0,.12],[0,-.12]])fi(t,o,e,0,f,.82,.2)}else if(i==="skeleton"){l(Kt.humanBody,.2,.62,.34,0,.84+.31,0),c=l(Kt.head,.42,.42,.42,0,.84+.81,0),ws(t,o,n,.04,.84+.58,.24,.58,.11,1.18),ws(t,o,n,0,.84+.58,-.24,.58,.11,.12);const f=7031339;a(.06,.62,.06,f,.52,.84+.32,.16),a(.06,.14,.06,f,.47,.84+.62,.16),a(.06,.14,.06,f,.47,.84+.02,.16),a(.02,.6,.02,15394520,.55,.84+.32,.16);for(const[,g]of[[0,.1],[0,-.1]])fi(t,o,e,0,g,.84,.12)}else if(i==="husk"){l(Kt.humanBody,.28,.66,.5,0,.82+.33,0),c=l(Kt.head,.44,.44,.44,0,.82+.88,0),ws(t,o,n,.08,.82+.63,.35,.62,.18,1.28),ws(t,o,n,.08,.82+.63,-.35,.62,.18,1.28);for(const[,f]of[[0,.12],[0,-.12]])fi(t,o,e,0,f,.82,.2)}else if(i==="creeper"){l(Kt.humanBody,.34,.82,.5,0,.36+.5,0),c=l(Kt.head,.48,.48,.48,0,.36+1.12,0);for(const[f,g]of[[.16,.13],[.16,-.13],[-.16,.13],[-.16,-.13]])fi(t,o,e,f,g,.36,.16)}else{l(Kt.animalBody,.34,.34,.3,-.02,.22+.17,0),l(Kt.wing,.32,.24,.06,-.18,.22+.2,.17),l(Kt.wing,.32,.24,.06,-.18,.22+.2,-.17),h=l(Kt.tail,.18,.26,.16,-.34,.22+.34,0),c=l(Kt.head,.22,.24,.2,.2,.22+.4,0),a(.13,.08,.1,15176991,.36,.22+.4,0),a(.05,.1,.14,13384496,.18,.22+.55,0),a(.06,.08,.06,13384496,.32,.22+.32,0);for(const[y,x]of[[.06,.09],[.06,-.09]])fi(t,o,e,y,x,.22,.07)}const u=.9+Math.random()*.22;t.scale.setScalar(u);const d=.9+Math.random()*.16,p=(Math.random()-.5)*.06,m=new wt(Math.min(1,d+p),d,Math.max(0,d-p));return{group:t,legs:e,arms:n,mats:r,base:m,head:c,tail:h,headY:c?c.position.y:0}}const Eb=new wt(16734810),Ab=new wt(1,1,1);function Xd(i){i.group.traverse(t=>{t instanceof Qt&&t.geometry.dispose()});for(const t of i.mats)t.dispose()}class Rb{constructor(t){_(this,"models",new Map);this.scene=t}sync(t,e,n){const s=new Set(t);for(const[o,r]of this.models)s.has(o)||(this.scene.remove(r.group),Xd(r),this.models.delete(o));for(const o of t){let r=this.models.get(o);if(!r){const m=Tb(o.kind);this.scene.add(m.group),r={...m,phase:0,t:Math.random()*10,baseScale:m.group.scale.x,bright:1,dispYaw:o.yaw,swingAmt:0},this.models.set(o,r)}r.t+=e;let a=-o.yaw-r.dispYaw;a=((a+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,r.dispYaw+=a*Math.min(1,e*10),r.group.rotation.y=r.dispYaw,r.group.rotation.z=Math.max(-.18,Math.min(.22,-o.vel.y*2.2));const l=n?n(o.pos.x,o.pos.y+.6,o.pos.z):1;r.bright+=(l-r.bright)*Math.min(1,e*10);const c=o.hurtCooldown>0?Eb:r.base;for(const m of r.mats)m.color.copy(c).multiplyScalar(r.bright);const h=Mb(o.kind==="creeper"?o.fuse:0);if(h.whiteness>0){const m=c.clone().lerp(Ab,h.whiteness);for(const v of r.mats)v.color.copy(m).multiplyScalar(r.bright)}r.group.scale.setScalar(r.baseScale*h.swell);const u=Math.hypot(o.vel.x,o.vel.z),d=u>.002;d&&(r.phase+=u*20*e*wb),r.swingAmt+=((d?1:0)-r.swingAmt)*Math.min(1,e*8);const p=Math.sin(r.phase)*.6*r.swingAmt;if(r.legs.forEach((m,v)=>m.rotation.z=v%2===0?p:-p),o.kind==="zombie"||o.kind==="husk"?r.arms.forEach((m,v)=>m.rotation.z=1.28+(v?-1:1)*Math.sin(r.phase)*.08*r.swingAmt):o.kind==="skeleton"&&(r.arms[0]&&(r.arms[0].rotation.z=1.18+Math.sin(r.phase)*.06*r.swingAmt),r.arms[1]&&(r.arms[1].rotation.z=.12-p*.45)),r.group.position.set(o.pos.x,o.pos.y+Math.abs(Math.sin(r.phase))*.035*r.swingAmt,o.pos.z),r.head)if(d)r.head.position.y=r.headY+Math.sin(r.phase*2)*.015,r.head.rotation.z=Math.sin(r.phase)*.05;else if(o.kind==="chicken"){const m=Math.max(0,Math.sin(r.t*1.6));r.head.rotation.z=-m*.5,r.head.position.y=r.headY-m*.04}else r.head.position.y=r.headY+Math.sin(r.t*1.4)*.012,r.head.rotation.z=0,r.head.rotation.y=Math.sin(r.t*.55)*.4*(1-r.swingAmt);r.tail&&(r.tail.rotation.z=Math.sin(r.t*4+r.phase)*.3)}}clear(){for(const[,t]of this.models)this.scene.remove(t.group),Xd(t);this.models.clear()}}const Ni=8,qd=1,Kl=4,qr=[[1,0],[-1,0],[0,1],[0,-1]],jl={amount:0,source:!1,falling:!1},Mo=(i,t,e)=>`${i},${t},${e}`;class Cb{constructor(t=4e3){_(this,"active",new Set);_(this,"maxPerTick");this.maxPerTick=t}get activeCount(){return this.active.size}activate(t,e,n){this.active.add(Mo(t,e,n));for(const[s,o]of qr)this.active.add(Mo(t+s,e,n+o));this.active.add(Mo(t,e+1,n)),this.active.add(Mo(t,e-1,n))}tick(t){if(this.active.size===0)return;const e=[...this.active];this.active.clear();const n=new Map,s=(r,a,l,c)=>{const h=Mo(r,a,l),u=n.get(h);(!u||c.amount>u.c.amount||c.amount===u.c.amount&&c.source&&!u.c.source)&&n.set(h,{x:r,y:a,z:l,c})};let o=this.maxPerTick;for(const r of e){if(o--<=0){this.active.add(r);continue}const[a,l,c]=r.split(",").map(Number);this.evaluate(t,a,l,c,s)}for(const{x:r,y:a,z:l,c}of n.values())(c.amount!==t.amount(r,a,l)||c.source!==t.isSource(r,a,l)||c.falling!==t.isFalling(r,a,l))&&(t.setWater(r,a,l,c.amount,c.source,c.falling),this.activate(r,a,l))}evaluate(t,e,n,s,o){if(t.isSolid(e,n,s)){t.amount(e,n,s)>0&&o(e,n,s,jl);return}if(!(t.amount(e,n,s)>0||t.isSource(e,n,s)))return;if(t.amount(e,n,s)>0&&!t.isSource(e,n,s)){const l=[[e+1,n,s],[e-1,n,s],[e,n,s+1],[e,n,s-1],[e,n+1,s],[e,n-1,s]];for(const[c,h,u]of l)if(t.getBlock(c,h,u)===23){t.setBlock(c,h,u,18),o(e,n,s,jl);return}}const a=t.isSource(e,n,s)?{amount:Ni,source:!0,falling:!1}:this.getNewLiquid(t,e,n,s);o(e,n,s,a),a.amount>0&&this.spread(t,e,n,s,a,o)}getNewLiquid(t,e,n,s){if(t.amount(e,n+1,s)>0)return{amount:Ni,source:!1,falling:!0};let o=0,r=0;for(const[l,c]of qr){const h=t.amount(e+l,n,s+c);h>0&&(h>o&&(o=h),t.isSource(e+l,n,s+c)&&r++)}if(r>=2&&(t.isSolid(e,n-1,s)||t.isSource(e,n-1,s)))return{amount:Ni,source:!0,falling:!1};const a=o-qd;return a>0?{amount:a,source:!1,falling:!1}:jl}spread(t,e,n,s,o,r){const a=n-1,l=t.amount(e,a,s)===Ni&&!t.isFalling(e,a,s);if(!t.isSolid(e,a,s)&&!l){(t.getBlock(e,a,s)===0||t.amount(e,a,s)>0)&&r(e,a,s,{amount:Ni,source:!1,falling:!0});return}if(!o.source&&!t.isSolid(e,a,s))return;const c=o.source?Ni:o.amount,h=c-qd;if(!(h<1))for(const[u,d]of this.getSpreadDirs(t,e,n,s,c)){const p=e+u,m=s+d;t.isSolid(p,n,m)||t.isSource(p,n,m)||t.getBlock(p,n,m)!==0&&t.amount(p,n,m)===0||t.amount(p,n,m)>=h||r(p,n,m,{amount:h,source:!1,falling:!1})}}getSpreadDirs(t,e,n,s,o){let r=Kl+1;const a=[];for(const l of qr){const c=e+l[0],h=s+l[1];if(t.isSolid(c,n,h)||t.amount(c,n,h)>=o)continue;const u=this.isHole(t,c,n,h)?0:this.slopeDistance(t,c,n,h,1,[-l[0],-l[1]]);u<r?(r=u,a.length=0,a.push(l)):u===r&&a.push(l)}return a}isHole(t,e,n,s){return!t.isSolid(e,n-1,s)&&t.amount(e,n-1,s)<Ni}slopeDistance(t,e,n,s,o,r){let a=Kl;for(const l of qr){if(l[0]===r[0]&&l[1]===r[1])continue;const c=e+l[0],h=s+l[1];if(!t.isSolid(c,n,h)){if(this.isHole(t,c,n,h))return o;if(o<Kl){const u=this.slopeDistance(t,c,n,h,o+1,[-l[0],-l[1]]);u<a&&(a=u)}}}return a}}function Pb(i,t,e=240){let n=0;for(;i.activeCount>0&&n<e;)i.tick(t),n++;return n}function Yd(i,t,e){let n=0;for(let s=e.minY;s<=e.maxY;s++)for(let o=e.minX;o<=e.maxX;o++)for(let r=e.minZ;r<=e.maxZ;r++)t.isWater(o,s,r)&&(t.isAir(o,s-1,r)||t.isAir(o+1,s,r)||t.isAir(o-1,s,r)||t.isAir(o,s,r+1)||t.isAir(o,s,r-1))&&(i.activate(o,s,r),n++);return n}function Db(i,t,e,n){const s=[];for(let o=i-e;o<=i+e;o++)for(let r=t-e;r<=t+e;r++){const a=`${o},${r}`;if(n.has(a))continue;const l=o-i,c=r-t;s.push({key:a,d:l*l+c*c})}return s.sort((o,r)=>o.d-r.d),s.map(o=>o.key)}const Lb=9,Ub=27,Am=Lb+Ub,Rm=64;function ah(){return Array.from({length:Am},()=>null)}function js(i,t,e,n=Rm,s=0,o=i.length){for(let r=s;r<o&&e>0;r++){const a=i[r];if(a&&a.id===t&&a.count<n){const l=Math.min(n-a.count,e);a.count+=l,e-=l}}for(let r=s;r<o&&e>0;r++)if(!i[r]){const a=Math.min(n,e);i[r]={id:t,count:a},e-=a}return e}function kb(i,t,e){for(let n=0;n<i.length;n++)if(!i[n])return i[n]={id:t,count:1,dur:e},!0;return!1}function $d(i,t){let e=0;for(const n of i)n&&n.id===t&&(e+=n.count);return e}function Ib(i,t,e){let n=e;for(let s=0;s<i.length&&n>0;s++){const o=i[s];if(o&&o.id===t){const r=Math.min(o.count,n);o.count-=r,n-=r,o.count<=0&&(i[s]=null)}}return e-n}function Kd(i,t){const e=i[t];if(!e||e.count<=0)return null;e.count--;const n=e.id;return e.count<=0&&(i[t]=null),n}function Nb(i){return i.map(t=>t?{id:t.id,count:t.count,dur:t.dur}:null)}function Fb(i){const t=ah();if(!Array.isArray(i))return t;for(let e=0;e<Am;e++){const n=i[e];if(n&&typeof n.id=="number"&&typeof n.count=="number"&&n.count>0){const s={id:n.id,count:Math.min(Rm,n.count)};typeof n.dur=="number"&&(s.dur=n.dur),t[e]=s}}return t}function jd(i,t,e){const n=i[t];if(!n)return!1;const s=(n.dur??e)-1;return s<=0?(i[t]=null,!0):(n.dur=s,!1)}const rn=new Set,Ob=300;let Cc=-1/0,Xa=!1,Ea=!1;window.addEventListener("keydown",i=>{if(i.code==="KeyW"&&!rn.has("KeyW")){const t=performance.now();t-Cc<Ob&&(Xa=!0),Cc=t}i.code==="Space"&&!rn.has("Space")&&(Ea=!0),rn.add(i.code)});window.addEventListener("keyup",i=>{rn.delete(i.code),i.code==="KeyW"&&(Xa=!1)});function Cm(){rn.clear(),Xa=!1,Ea=!1,Cc=-1/0}window.addEventListener("blur",Cm);document.addEventListener("visibilitychange",()=>{document.hidden&&Cm()});function Bb(){let i=0,t=0;rn.has("KeyW")&&(i+=1),rn.has("KeyS")&&(i-=1),rn.has("KeyD")&&(t+=1),rn.has("KeyA")&&(t-=1);const e=rn.has("ShiftLeft")||rn.has("ShiftRight")||rn.has("KeyC");return{forward:i,right:t,sprint:Xa&&i>0&&!e,jumpHeld:rn.has("Space"),crouch:e}}function zb(){const i=Ea;return Ea=!1,i}const Zd=.0025,Qd=1.55;class Hb{constructor(t,e=!0){_(this,"yaw",0);_(this,"pitch",0);e&&t.addEventListener("click",()=>void t.requestPointerLock()),document.addEventListener("mousemove",n=>{document.pointerLockElement===t&&this.rotate(n.movementX*Zd,-n.movementY*Zd)})}rotate(t,e){this.yaw+=t,this.pitch=Math.max(-Qd,Math.min(Qd,this.pitch+e))}}const Jd=.006,Wb=320,Pm=380,Gb=8,Yr=96,Vb=.2,tf=1+Math.SQRT2;function Xb(i,t){if(Math.hypot(i,t)<Vb)return{forward:0,right:0};const n=Math.abs(i),s=Math.abs(t);return s>n*tf?{forward:t<0?1:-1,right:0}:n>s*tf?{forward:0,right:i>0?1:-1}:{forward:t<0?1:-1,right:i>0?1:-1}}function qb(i,t){return t-i>=0&&t-i<=Wb}function Yb(i,t,e,n){return Math.hypot(e-i,n-t)>=Gb}function $b(i,t,e=!1,n=0){return e?"none":t?"hold-end":i?"none":n>=Pm?"hold-end":"tap"}function Dm(){return new URLSearchParams(window.location.search).get("touch")==="1"?!0:navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches}let ef=!1;function Kb(){if(ef)return;ef=!0;const i=o=>o.preventDefault();document.addEventListener("gesturestart",i,{passive:!1}),document.addEventListener("gesturechange",i,{passive:!1}),document.addEventListener("gestureend",i,{passive:!1}),document.addEventListener("dblclick",i,{passive:!1}),document.addEventListener("touchmove",o=>{o.touches.length>1&&o.preventDefault()},{passive:!1});let t=-1/0,e=null,n=0,s=0;document.addEventListener("touchend",o=>{const r=performance.now(),a=o.changedTouches[0],l=a!==void 0&&Math.hypot(a.clientX-n,a.clientY-s)<28;r-t<320&&o.target===e&&l&&o.preventDefault(),t=r,e=o.target,a&&(n=a.clientX,s=a.clientY)},{passive:!1})}class jb{constructor(t,e){_(this,"root");_(this,"actions");_(this,"lookPointer",null);_(this,"lookPoint",null);_(this,"lookStartedAt",0);_(this,"lookGesture",0);_(this,"lookStartX",0);_(this,"lookStartY",0);_(this,"lookX",0);_(this,"lookY",0);_(this,"lookDragging",!1);_(this,"lookHoldStarted",!1);_(this,"lookHoldTimer",null);_(this,"releaseLookCapture",null);_(this,"dpadPointer",null);_(this,"forward",0);_(this,"right",0);_(this,"lastForwardPress",-1/0);_(this,"sprinting",!1);_(this,"jumpHeld",!1);_(this,"crouchHeld",!1);_(this,"pendingJump",!1);_(this,"active",!1);_(this,"releaseHolds",[]);this.root=t,this.actions=e;const n=t.querySelector(".touch-look");n.addEventListener("pointerdown",l=>{if(!this.active||(l.preventDefault(),this.lookPointer!==null))return;this.lookPointer=l.pointerId,this.lookPoint={x:l.clientX,y:l.clientY},this.lookStartedAt=performance.now();const c=++this.lookGesture;this.lookStartX=l.clientX,this.lookStartY=l.clientY,this.lookX=l.clientX,this.lookY=l.clientY,this.lookDragging=!1,this.lookHoldStarted=!1,this.capturePointer(n,l.pointerId),this.lookHoldTimer=window.setTimeout(()=>{if(this.lookHoldTimer=null,this.lookPointer!==l.pointerId||this.lookGesture!==c||this.lookDragging||!this.active)return;const h=this.lookPoint;h!==null&&(this.lookHoldStarted=!0,this.actions.interactHoldStart(h))},Pm)});const s=l=>{if(l.pointerId!==this.lookPointer)return;l.preventDefault();const c=typeof l.getCoalescedEvents=="function"?l.getCoalescedEvents():[],h=c.length>0?c:[l];for(const u of h)this.moveLookTo(u.clientX,u.clientY)},o=(l,c)=>{const h=this.lookPointer,u=this.lookPoint;if(h===null||u===null)return;!l&&c&&this.moveLookTo(c.x,c.y);const d=this.lookHoldStarted,p=$b(this.lookDragging,d,l,performance.now()-this.lookStartedAt);this.clearLookHoldTimer(),this.lookPointer=null,this.lookPoint=null,this.lookStartedAt=0,this.lookDragging=!1,this.lookHoldStarted=!1,this.releasePointerCapture(n,h),p==="tap"?this.actions.interactTap(u):p==="hold-end"?(d||this.actions.interactHoldStart(u),this.actions.interactHoldEnd(u)):d&&this.actions.interactHoldCancel(u)};this.releaseLookCapture=()=>o(!0);const r=l=>{l.pointerId===this.lookPointer&&(l.preventDefault(),o(!1,{x:l.clientX,y:l.clientY}))},a=l=>{l.pointerId===this.lookPointer&&(l.preventDefault(),o(!0))};window.addEventListener("pointermove",s),window.addEventListener("pointerup",r),window.addEventListener("pointercancel",a),n.addEventListener("lostpointercapture",a),this.bindSlidingDpad(t.querySelector("#touch-dpad")),this.bindHold("touch-jump",()=>{this.jumpHeld||(this.pendingJump=!0),this.jumpHeld=!0},()=>this.jumpHeld=!1),this.bindHold("touch-crouch",()=>this.crouchHeld=!0,()=>this.crouchHeld=!1),this.bindTap("touch-inventory",()=>this.actions.inventory()),this.bindTap("touch-pause",()=>this.actions.pause()),window.addEventListener("blur",()=>this.reset()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.reset()}),window.addEventListener("pagehide",()=>this.reset())}setActive(t){this.active=t,this.root.classList.toggle("active",t),this.root.setAttribute("aria-hidden",String(!t)),t||this.reset()}get isActive(){return this.active}readMove(){return{forward:this.forward,right:this.right,sprint:this.sprinting&&this.forward>0&&!this.crouchHeld,jumpHeld:this.jumpHeld,crouch:this.crouchHeld}}consumeJump(){const t=this.pendingJump;return this.pendingJump=!1,t}moveLookTo(t,e){if(this.lookPoint===null)return;if(!this.lookDragging&&Yb(this.lookStartX,this.lookStartY,t,e)){this.lookDragging=!0,this.clearLookHoldTimer(),this.lookX=t,this.lookY=e;return}if(!this.lookDragging)return;const s=Math.max(-Yr,Math.min(Yr,t-this.lookX)),o=Math.max(-Yr,Math.min(Yr,e-this.lookY));this.lookX=t,this.lookY=e,this.actions.look(s*Jd,-o*Jd)}bindSlidingDpad(t){const e=(r,a)=>this.updateSlidingDpad(t,r,a),n=()=>{const r=this.dpadPointer;r!==null&&(this.dpadPointer=null,this.setMoveAxes(t,{forward:0,right:0}),t.style.setProperty("--touch-dpad-stick-x","0px"),t.style.setProperty("--touch-dpad-stick-y","0px"),t.dataset.moving="false",this.releasePointerCapture(t,r))};t.addEventListener("pointerdown",r=>{!this.active||this.dpadPointer!==null||(r.preventDefault(),r.stopPropagation(),this.dpadPointer=r.pointerId,this.capturePointer(t,r.pointerId),e(r.clientX,r.clientY))});const s=r=>{r.pointerId===this.dpadPointer&&(r.preventDefault(),e(r.clientX,r.clientY))},o=r=>{r.pointerId===this.dpadPointer&&(r.preventDefault(),n())};window.addEventListener("pointermove",s),window.addEventListener("pointerup",o),window.addEventListener("pointercancel",o),t.addEventListener("lostpointercapture",o),this.releaseHolds.push(n)}updateSlidingDpad(t,e,n){const s=t.getBoundingClientRect(),o=Math.max(1,Math.min(s.width,s.height)/2),r=(e-(s.left+s.width/2))/o,a=(n-(s.top+s.height/2))/o,l=Xb(r,a);this.setMoveAxes(t,l);const c=Math.hypot(r,a),h=c>0?Math.min(1,c)/c:0,u=o*.42;t.style.setProperty("--touch-dpad-stick-x",`${Math.round(r*h*u)}px`),t.style.setProperty("--touch-dpad-stick-y",`${Math.round(a*h*u)}px`),t.dataset.moving=String(l.forward!==0||l.right!==0)}setMoveAxes(t,e){if(e.forward>0&&this.forward<=0){const n=performance.now();qb(this.lastForwardPress,n)&&(this.sprinting=!0),this.lastForwardPress=n}e.forward<=0&&(this.sprinting=!1),this.forward=e.forward,this.right=e.right,t.dataset.forward=String(e.forward),t.dataset.right=String(e.right)}releasePointerCapture(t,e){if(t.hasPointerCapture(e))try{t.releasePointerCapture(e)}catch{}}capturePointer(t,e){try{t.setPointerCapture(e)}catch{}}clearLookHoldTimer(){this.lookHoldTimer!==null&&(window.clearTimeout(this.lookHoldTimer),this.lookHoldTimer=null)}bindHold(t,e,n,s=n){const o=document.getElementById(t);let r=null;o.addEventListener("pointerdown",h=>{!this.active||r!==null||(h.preventDefault(),h.stopPropagation(),r=h.pointerId,this.capturePointer(o,h.pointerId),o.classList.add("pressed"),e())});const a=h=>{const u=r;u!==null&&(r=null,o.classList.remove("pressed"),h(),this.releasePointerCapture(o,u))},l=h=>{h.pointerId===r&&a(n)},c=h=>{h.pointerId===r&&a(s)};o.addEventListener("pointerup",l),o.addEventListener("pointercancel",c),o.addEventListener("lostpointercapture",c),this.releaseHolds.push(()=>a(s))}bindTap(t,e){const n=document.getElementById(t);n.addEventListener("pointerdown",s=>{this.active&&(s.preventDefault(),s.stopPropagation(),n.classList.add("pressed"),window.setTimeout(()=>n.classList.remove("pressed"),100),e())})}reset(){var t;(t=this.releaseLookCapture)==null||t.call(this);for(const e of this.releaseHolds)e();this.dpadPointer=null,this.forward=0,this.right=0,this.lastForwardPress=-1/0,this.sprinting=!1,this.jumpHeld=!1,this.crouchHeld=!1,this.pendingJump=!1}}class Zb{constructor(t,e=9){_(this,"icons",[]);_(this,"counts",[]);_(this,"cells",[]);_(this,"durTracks",[]);_(this,"durFills",[]);_(this,"selected",0);_(this,"size");this.size=e,t.innerHTML="";for(let n=0;n<e;n++){const s=document.createElement("div");s.className="hotbar-slot",s.style.position="relative";const o=document.createElement("div");o.className="hotbar-icon";const r=document.createElement("div");r.className="hotbar-count";const a=document.createElement("div");a.style.cssText="position:absolute;left:12%;right:12%;bottom:9%;height:3px;background:rgba(0,0,0,.55);border-radius:1px;display:none;overflow:hidden;";const l=document.createElement("div");l.style.cssText="height:100%;width:100%;",a.appendChild(l),s.append(o,r,a),s.addEventListener("pointerdown",c=>{c.pointerType!=="mouse"&&(c.preventDefault(),c.stopPropagation(),this.setSelected(n))}),t.appendChild(s),this.cells.push(s),this.icons.push(o),this.counts.push(r),this.durTracks.push(a),this.durFills.push(l)}this.setSelected(0)}render(t){var e;for(let n=0;n<this.size;n++){const s=t[n]??null,o=this.icons[n],r=this.counts[n];if(s&&s.count>0){const l=$i(s.id);o.style.backgroundImage=l?`url(${l})`:"none",r.textContent=s.count>1?String(s.count):""}else o.style.backgroundImage="none",r.textContent="";const a=s&&s.count>0?(e=ko(s.id))==null?void 0:e.maxDurability:void 0;if(s&&a&&(s.dur??a)<a){const l=Math.max(0,(s.dur??a)/a);this.durTracks[n].style.display="block",this.durFills[n].style.width=`${l*100}%`,this.durFills[n].style.background=`hsl(${Math.round(l*120)},85%,45%)`}else this.durTracks[n].style.display="none"}}setSelected(t){this.selected=(t%this.size+this.size)%this.size,this.cells.forEach((e,n)=>e.classList.toggle("selected",n===this.selected))}scroll(t){this.setSelected(this.selected+t)}get index(){return this.selected}}const Ro=20,Hs=20,lh=10,Qb=7,Jb=1,nf=6,sf=80,tT=10,eT=30,nT=20;function Zl(){return{health:Ro,food:Hs,saturation:5,exhaustion:0,foodTimer:0,oxygen:lh,oxygenTimer:0}}function iT(i){return i.food>=Qb}function Wi(i,t){i.exhaustion=Math.min(i.exhaustion+t,40)}function Aa(i,t){i.health=Math.max(0,i.health-t)}function Ql(i){return i.health<=0}function sT(i,t){i.food=Math.min(Hs,i.food+t.nutrition),i.saturation=Math.min(i.saturation+t.nutrition*t.saturationModifier*2,i.food)}function oT(i){return Math.max(0,Math.ceil(i-3))}function rT(i,t,e,n){return n?{fallDistance:0,damage:0}:e?{fallDistance:0,damage:oT(i)}:{fallDistance:t<0?i-t:i,damage:0}}function aT(i){i.exhaustion>4&&(i.exhaustion-=4,i.saturation>0?i.saturation=Math.max(0,i.saturation-1):i.food=Math.max(0,i.food-1)),i.food>=Hs&&i.saturation>0&&i.health<Ro?++i.foodTimer>=tT&&(i.health=Math.min(Ro,i.health+1),Wi(i,nf),i.foodTimer=0):i.food>=18&&i.health<Ro?++i.foodTimer>=sf&&(i.health=Math.min(Ro,i.health+1),Wi(i,nf),i.foodTimer=0):i.food<=0?++i.foodTimer>=sf&&(i.health>Jb&&Aa(i,1),i.foodTimer=0):i.foodTimer=0}function lT(i,t){if(!t){i.oxygen=lh,i.oxygenTimer=0;return}i.oxygenTimer++,i.oxygen>0?i.oxygenTimer>=eT&&(i.oxygen=Math.max(0,i.oxygen-1),i.oxygenTimer=0):i.oxygenTimer>=nT&&(Aa(i,2),i.oxygenTimer=0)}const of=i=>`url(${oo(`textures/ui/${i}.png`)})`;class cT{constructor(t,e,n=10){_(this,"hearts");_(this,"foods");_(this,"bubbles",[]);_(this,"healthEl");_(this,"hungerEl");_(this,"oxygenEl");this.healthEl=t,this.hungerEl=e,this.oxygenEl=document.getElementById("oxygen"),this.hearts=this.build(t,n),this.foods=this.build(e,n),this.oxygenEl&&(this.bubbles=this.build(this.oxygenEl,n))}build(t,e){t.innerHTML="";const n=[];for(let s=0;s<e;s++){const o=document.createElement("div");o.className="hud-icon",t.appendChild(o),n.push(o)}return n}render(t){if(this.fill(this.hearts,t.health,"heart"),this.fill(this.foods,t.food,"food"),this.healthEl.classList.toggle("low",t.health<=4),this.hungerEl.classList.toggle("low",t.food<=4),this.oxygenEl){const e=t.oxygen<lh;if(this.oxygenEl.style.display=e?"flex":"none",e)for(let n=0;n<this.bubbles.length;n++)this.bubbles[n].style.backgroundImage=of(t.oxygen>n?"bubble_full":"bubble_empty")}}fill(t,e,n){for(let s=0;s<t.length;s++){const o=e-s*2,r=o>=2?"full":o===1?"half":"empty";t[s].style.backgroundImage=of(`${n}_${r}`)}}}function Ra(i,t,e,n){const s=i[t];if(!e)return i[t]=null,s;if(!s)return i[t]=e,null;if(s.id===e.id){const o=Math.max(0,n(s.id)-s.count),r=Math.min(o,e.count);return s.count+=r,e.count-=r,e.count>0?e:null}return i[t]=e,s}function Ca(i,t,e,n){const s=i[t];if(!e){if(!s)return null;const o=Math.ceil(s.count/2),r=s.count-o;return i[t]=r>0?{id:s.id,count:r}:null,{id:s.id,count:o}}return s?s.id===e.id?s.count<n(s.id)?(s.count+=1,e.count-=1,e.count>0?e:null):e:(i[t]=e,s):(i[t]={id:e.id,count:1},e.count-=1,e.count>0?e:null)}function Jl(i,t,e,n,s=0,o=e.length){const r=i[t];if(!r)return;const a=js(e,r.id,r.count,n(r.id),s,o);i[t]=a>0?{id:r.id,count:a}:null}function hT(i,t,e){if(!t)return t;const n=t.id,s=e(n),o=i.filter(c=>{const h=c.get();return!h||h.id===n&&h.count<s});if(o.length===0)return t;const r=Math.floor(t.count/o.length);if(r===0)return t;let a=0;for(const c of o){const h=c.get(),u=h?h.count:0,d=Math.min(r,s-u);d<=0||(c.set({id:n,count:u+d}),a+=d)}const l=t.count-a;return l>0?{id:n,count:l}:null}function uT(i,t,e){if(!t)return t;const n=t.id,s=e(n);let o=t.count;for(const r of i){if(o<=0)break;const a=r.get();a?a.id===n&&a.count<s&&(a.count+=1,o--):(r.set({id:n,count:1}),o--)}return o>0?{id:n,count:o}:null}const $r=["PPP"," S "," S "],Kr=["PP","PS"," S"],jr=["P","S","S"],Zr=["P","P","S"],Qr=["PP"," S"," S"];function Ae(i,t,e){return{type:"shaped",pattern:i,key:{P:t,S:"stick"},result:{item:e,count:1}}}const dT=[{type:"shapeless",ingredients:["oak_log"],result:{item:"oak_planks",count:4}},{type:"shapeless",ingredients:["flint","iron_ingot"],result:{item:"flint_and_steel",count:1}},{type:"shaped",pattern:["#","#"],key:{"#":"oak_planks"},result:{item:"stick",count:4}},{type:"shaped",pattern:["##","##"],key:{"#":"oak_planks"},result:{item:"crafting_table",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"string"},result:{item:"wool",count:1}},{type:"shaped",pattern:["###","# #","###"],key:{"#":"cobblestone"},result:{item:"furnace",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"sand"},result:{item:"sandstone",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"nether_quartz"},result:{item:"quartz_block",count:1}},{type:"shaped",pattern:["###","###","###"],key:{"#":"coal"},result:{item:"coal_block",count:1}},{type:"shapeless",ingredients:["coal_block"],result:{item:"coal",count:9}},{type:"shaped",pattern:["###","###","###"],key:{"#":"iron_ingot"},result:{item:"iron_block",count:1}},{type:"shapeless",ingredients:["iron_block"],result:{item:"iron_ingot",count:9}},{type:"shaped",pattern:["###","###","###"],key:{"#":"diamond"},result:{item:"diamond_block",count:1}},{type:"shapeless",ingredients:["diamond_block"],result:{item:"diamond",count:9}},{type:"shaped",pattern:["C","S"],key:{C:"coal",S:"stick"},result:{item:"torch",count:4}},{type:"shaped",pattern:["F","S","E"],key:{F:"flint",S:"stick",E:"feather"},result:{item:"arrow",count:4}},{type:"shaped",pattern:[" TS","T S"," TS"],key:{T:"stick",S:"string"},result:{item:"bow",count:1}},Ae($r,"oak_planks","wooden_pickaxe"),Ae(Kr,"oak_planks","wooden_axe"),Ae(jr,"oak_planks","wooden_shovel"),Ae(Zr,"oak_planks","wooden_sword"),Ae(Qr,"oak_planks","wooden_hoe"),Ae($r,"cobblestone","stone_pickaxe"),Ae(Kr,"cobblestone","stone_axe"),Ae(jr,"cobblestone","stone_shovel"),Ae(Zr,"cobblestone","stone_sword"),Ae(Qr,"cobblestone","stone_hoe"),Ae($r,"iron_ingot","iron_pickaxe"),Ae(Kr,"iron_ingot","iron_axe"),Ae(jr,"iron_ingot","iron_shovel"),Ae(Zr,"iron_ingot","iron_sword"),Ae(Qr,"iron_ingot","iron_hoe"),Ae($r,"diamond","diamond_pickaxe"),Ae(Kr,"diamond","diamond_axe"),Ae(jr,"diamond","diamond_shovel"),Ae(Zr,"diamond","diamond_sword"),Ae(Qr,"diamond","diamond_hoe")];function Lm(i){return i&&i.count>=1?i.item:null}function fT(i){return i.map(t=>t.map(Lm))}function pT(i){const t=[];for(const e of i)for(const n of e){const s=Lm(n);s&&t.push(s)}return t}function Um(i){let t=1/0,e=-1,n=1/0,s=-1;for(let r=0;r<i.length;r++)for(let a=0;a<i[r].length;a++)i[r][a]!==null&&(r<t&&(t=r),r>e&&(e=r),a<n&&(n=a),a>s&&(s=a));if(e===-1)return null;const o=[];for(let r=t;r<=e;r++)o.push(i[r].slice(n,s+1));return o}function mT(i){return i.pattern.map(t=>Array.from(t,e=>e===" "?null:i.key[e]??null))}function gT(i){return i.map(t=>[...t].reverse())}function rf(i,t){if(i.length!==t.length)return!1;for(let e=0;e<i.length;e++){if(i[e].length!==t[e].length)return!1;for(let n=0;n<i[e].length;n++)if(i[e][n]!==t[e][n])return!1}return!0}function vT(i,t){const e=Um(mT(i));return e?rf(e,t)||rf(gT(e),t):!1}function af(i){const t=new Map;for(const e of i)t.set(e,(t.get(e)??0)+1);return t}function _T(i,t){if(i.ingredients.length!==t.length)return!1;const e=af(i.ingredients),n=af(t);if(e.size!==n.size)return!1;for(const[s,o]of e)if(n.get(s)!==o)return!1;return!0}function xT(i){const t=pT(i);if(t.length===0)return null;const e=Um(fT(i));for(const n of dT)if(n.type==="shaped"){if(e&&vT(n,e))return n}else if(_T(n,t))return n;return null}function yT(i){const t=xT(i);return t?{item:t.result.item,count:t.result.count}:null}const ch=new Map,hh=new Map;for(const i of en)i.id!==0&&(ch.set(i.id,i.name),hh.set(i.name,i.id));for(const i of tw){const t=nw(i);t&&(ch.set(i,t),hh.set(t,i))}function lf(i){const t=i.map(s=>s.map(o=>{if(!o)return null;const r=ch.get(o.id);return r?{item:r,count:o.count}:null})),e=yT(t);if(!e)return null;const n=hh.get(e.item);return n==null?null:{id:n,count:e.count}}function MT(i){for(const t of i)for(let e=0;e<t.length;e++){const n=t[e];n&&(n.count-=1,n.count<=0&&(t[e]=null))}}const gn=i=>xa(i),Vn=9,tc=27,ST=420,wT=12;class bT{constructor(t){_(this,"root");_(this,"inv",null);_(this,"gridN",2);_(this,"craft",[]);_(this,"cursor",null);_(this,"open",!1);_(this,"cursorEl");_(this,"cursorIcon");_(this,"cursorCnt");_(this,"titleEl");_(this,"cgridEl");_(this,"outCell");_(this,"mainCells",[]);_(this,"hotbarCells",[]);_(this,"craftCells",[]);_(this,"drag",null);_(this,"onChange",null);_(this,"onClose",null);this.root=t,t.classList.add("hidden"),t.innerHTML=`
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
      </div>`,this.titleEl=t.querySelector(".inv-title"),t.querySelector(".inv-close").addEventListener("click",()=>{var s;return(s=this.onClose)==null?void 0:s.call(this)}),this.cgridEl=t.querySelector(".inv-cgrid");const e=t.querySelector(".inv-main"),n=t.querySelector(".inv-hotbar");for(let s=0;s<tc;s++)this.mainCells.push(this.makeSlot(e,"main",s));for(let s=0;s<Vn;s++)this.hotbarCells.push(this.makeSlot(n,"hotbar",s));this.outCell=this.makeSlot(t.querySelector(".inv-out-wrap"),"output",0),this.outCell.el.classList.add("inv-out"),this.cursorEl=document.createElement("div"),this.cursorEl.className="inv-cursor",this.cursorIcon=document.createElement("div"),this.cursorIcon.className="slot-icon",this.cursorCnt=document.createElement("div"),this.cursorCnt.className="slot-count",this.cursorEl.append(this.cursorIcon,this.cursorCnt),this.cursorEl.style.display="none",this.cursorEl.style.pointerEvents="none",document.body.appendChild(this.cursorEl),document.addEventListener("pointermove",s=>{this.open&&(this.cursorEl.style.left=`${s.clientX}px`,this.cursorEl.style.top=`${s.clientY}px`,this.drag&&this.onDragMove(s))}),document.addEventListener("pointerup",s=>{this.open&&this.drag&&this.endDrag(s)}),document.addEventListener("pointercancel",s=>{var o;this.open&&((o=this.drag)==null?void 0:o.pointerId)===s.pointerId&&this.cancelDrag()})}makeSlot(t,e,n){const s=document.createElement("div");s.className="inv-slot",s.dataset.region=e,s.dataset.idx=String(n),s.style.touchAction="none";const o=document.createElement("div");o.className="slot-icon";const r=document.createElement("div");return r.className="slot-count",s.append(o,r),s.addEventListener("pointerdown",a=>{!a.isPrimary||a.pointerType==="mouse"&&a.button!==0&&a.button!==2||(a.preventDefault(),this.beginDrag(e,n,a))}),s.addEventListener("contextmenu",a=>a.preventDefault()),t.appendChild(s),{el:s,icon:o,cnt:r}}isOpen(){return this.open}show(t,e){this.inv=t,this.gridN=e,this.craft=Array.from({length:e},()=>Array(e).fill(null)),this.buildCraftGrid(e),this.titleEl.textContent=e>=3?"工作台":"背包",this.open=!0,this.root.classList.remove("hidden"),this.render()}hide(){var t;if(this.cancelDrag(),this.inv){for(const e of this.craft)for(let n=0;n<e.length;n++){const s=e[n];s&&(js(this.inv,s.id,s.count,gn(s.id)),e[n]=null)}this.cursor&&(js(this.inv,this.cursor.id,this.cursor.count,gn(this.cursor.id)),this.cursor=null)}this.open=!1,this.root.classList.add("hidden"),this.cursorEl.style.display="none",(t=this.onChange)==null||t.call(this)}buildCraftGrid(t){this.cgridEl.innerHTML="",this.cgridEl.style.gridTemplateColumns=`repeat(${t}, 1fr)`,this.craftCells=[];for(let e=0;e<t*t;e++)this.craftCells.push(this.makeSlot(this.cgridEl,"craft",e))}beginDrag(t,e,n){var s,o;if(this.inv){if(this.cursorEl.style.left=`${n.clientX}px`,this.cursorEl.style.top=`${n.clientY}px`,t==="output"){this.takeOutput(),this.render(),(s=this.onChange)==null||s.call(this);return}if(n.shiftKey){this.quickMoveFrom(t,e),this.render(),(o=this.onChange)==null||o.call(this);return}this.drag={region:t,i:e,right:n.button===2,started:!1,mode:this.cursor?"distribute":"move",swept:[],sweptKeys:new Set,sweptCells:[],pointerId:n.pointerId,touch:n.pointerType==="touch",startX:n.clientX,startY:n.clientY,holdTimer:null,longPressed:!1},this.drag.touch&&this.startTouchHold(this.drag)}}onDragMove(t){const e=this.drag;if(!e||!this.inv||e.pointerId!==t.pointerId||(e.touch&&!e.longPressed&&Math.hypot(t.clientX-e.startX,t.clientY-e.startY)>wT&&this.clearTouchHold(e),e.longPressed))return;const n=this.slotAt(t);if(!e.started){if(!n||n.region===e.region&&n.i===e.i)return;e.started=!0,e.mode==="distribute"?(this.addSwept(e,e.region,e.i),this.addSwept(e,n.region,n.i)):(this.applyClick(e.region,e.i,!1),this.render());return}e.mode==="distribute"&&n&&this.addSwept(e,n.region,n.i)}endDrag(t){var n;const e=this.drag;if(!(!e||e.pointerId!==t.pointerId)){this.clearTouchHold(e),this.drag=null;for(const s of(e==null?void 0:e.sweptCells)??[])s.el.classList.remove("inv-drag-hi");if(this.inv&&!e.longPressed){if(!e.started)this.applyClick(e.region,e.i,e.right);else if(e.mode==="distribute")this.cursor=e.right?uT(e.swept,this.cursor,gn):hT(e.swept,this.cursor,gn);else{const s=this.slotAt(t);s&&s.region!=="output"&&!(s.region===e.region&&s.i===e.i)&&this.applyClick(s.region,s.i,!1)}this.render(),(n=this.onChange)==null||n.call(this)}}}cancelDrag(){if(this.drag){this.clearTouchHold(this.drag);for(const t of this.drag.sweptCells)t.el.classList.remove("inv-drag-hi");this.drag=null}}startTouchHold(t){t.holdTimer=window.setTimeout(()=>{var e;t.holdTimer=null,!(!this.open||this.drag!==t||t.started||!this.inv)&&(t.longPressed=!0,this.applyClick(t.region,t.i,!0),this.render(),(e=this.onChange)==null||e.call(this))},ST)}clearTouchHold(t){t.holdTimer!==null&&(window.clearTimeout(t.holdTimer),t.holdTimer=null)}addSwept(t,e,n){if(e==="output")return;const s=`${e}:${n}`;if(t.sweptKeys.has(s))return;t.sweptKeys.add(s),t.swept.push(this.slotRef(e,n));const o=this.cellOf(e,n);o&&(o.el.classList.add("inv-drag-hi"),t.sweptCells.push(o))}applyClick(t,e,n){if(this.inv)if(t==="craft"){const s=this.gridN,o=this.craft[Math.floor(e/s)],r=e%s;this.cursor=n?Ca(o,r,this.cursor,gn):Ra(o,r,this.cursor,gn)}else{const s=t==="main"?Vn+e:e;this.cursor=n?Ca(this.inv,s,this.cursor,gn):Ra(this.inv,s,this.cursor,gn)}}slotRef(t,e){if(t==="craft"){const o=this.gridN,r=this.craft[Math.floor(e/o)],a=e%o;return{get:()=>r[a],set:l=>r[a]=l}}const n=this.inv,s=t==="main"?Vn+e:e;return{get:()=>n[s],set:o=>n[s]=o}}slotAt(t){const e=document.elementFromPoint(t.clientX,t.clientY),n=e==null?void 0:e.closest(".inv-slot");return!n||n.dataset.region===void 0?null:{region:n.dataset.region,i:Number(n.dataset.idx)}}cellOf(t,e){return t==="main"?this.mainCells[e]??null:t==="hotbar"?this.hotbarCells[e]??null:t==="craft"?this.craftCells[e]??null:null}quickMoveFrom(t,e){if(this.inv)if(t==="craft"){const n=this.gridN;Jl(this.craft[Math.floor(e/n)],e%n,this.inv,gn)}else t==="main"?Jl(this.inv,Vn+e,this.inv,gn,0,Vn):Jl(this.inv,e,this.inv,gn,Vn,Vn+tc)}takeOutput(){const t=lf(this.craft);if(t){if(!this.cursor)this.cursor={id:t.id,count:t.count};else if(this.cursor.id===t.id&&this.cursor.count+t.count<=gn(t.id))this.cursor.count+=t.count;else return;MT(this.craft)}}render(){if(!this.inv)return;for(let e=0;e<tc;e++)this.paint(this.mainCells[e],this.inv[Vn+e]);for(let e=0;e<Vn;e++)this.paint(this.hotbarCells[e],this.inv[e]);const t=this.gridN;for(let e=0;e<this.craftCells.length;e++)this.paint(this.craftCells[e],this.craft[Math.floor(e/t)][e%t]);this.paint(this.outCell,lf(this.craft)),this.cursor?(this.cursorEl.style.display="block",this.fill(this.cursorIcon,this.cursorCnt,this.cursor)):this.cursorEl.style.display="none"}paint(t,e){this.fill(t.icon,t.cnt,e)}fill(t,e,n){if(n&&n.count>0){const s=$i(n.id);s?(t.style.backgroundImage=`url(${s})`,t.textContent="",t.classList.remove("txt")):(t.style.backgroundImage="none",t.textContent=ym(n.id),t.classList.add("txt")),e.textContent=n.count>1?String(n.count):""}else t.style.backgroundImage="none",t.textContent="",t.classList.remove("txt"),e.textContent=""}}const km=200,TT=64,Im={[h1]:1,[u1]:Jp,[ih]:tm,[sh]:em,[oh]:nm,[rh]:im},ET={[Yp]:1600,[_1]:16e3,[za]:300,[Wa]:300,[c1]:300,[Tp]:300,[qp]:100,[$p]:200,[Kp]:200,[jp]:200,[Zp]:200,[Qp]:200},Nm=i=>Im[i],Pc=i=>ET[i]??0,cf=i=>Pc(i)>0,AT=i=>i in Im;function RT(){return{input:0,inputN:0,fuel:0,fuelN:0,output:0,outputN:0,burn:0,burnMax:0,cook:0}}function Fm(i){if(i.inputN<=0)return!1;const t=Nm(i.input);return t===void 0?!1:i.outputN===0||i.output===t&&i.outputN<TT}function CT(i){const t=i.burn>0||i.cook>0,e=Fm(i);if(i.burn>0&&i.burn--,i.burn===0&&e&&i.fuelN>0&&Pc(i.fuel)>0&&(i.burnMax=Pc(i.fuel),i.burn=i.burnMax,i.fuelN--,i.fuelN===0&&(i.fuel=0)),i.burn>0&&e){if(i.cook++,i.cook>=km){i.cook=0;const n=Nm(i.input);i.inputN--,i.inputN===0&&(i.input=0),i.output=n,i.outputN++}}else i.cook=Math.max(0,i.cook-2);return t||i.burn>0||i.cook>0}function PT(i){return i.burn>0||i.fuelN>0&&Fm(i)}const pi=i=>xa(i),Jr=9,hf=27,DT=420,LT=12;class UT{constructor(t){_(this,"root");_(this,"inv",null);_(this,"furnace",null);_(this,"cursor",null);_(this,"open",!1);_(this,"cursorEl");_(this,"cursorIcon");_(this,"cursorCnt");_(this,"inputCell");_(this,"fuelCell");_(this,"outCell");_(this,"flameEl");_(this,"arrowFillEl");_(this,"mainCells",[]);_(this,"hotbarCells",[]);_(this,"touchPress",null);_(this,"onChange",null);_(this,"onClose",null);this.root=t,t.classList.add("hidden"),t.innerHTML=`
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
      </div>`,t.querySelector(".inv-close").addEventListener("click",()=>{var o;return(o=this.onClose)==null?void 0:o.call(this)});const e=o=>this.bindSlot(t.querySelector(o));this.inputCell=e(".fur-input"),this.fuelCell=e(".fur-fuel"),this.outCell=e(".fur-out"),this.inputCell.el.addEventListener("pointerdown",o=>this.onFurnacePointerDown("input",o)),this.fuelCell.el.addEventListener("pointerdown",o=>this.onFurnacePointerDown("fuel",o)),this.outCell.el.addEventListener("pointerdown",o=>this.onFurnacePointerDown("output",o)),this.flameEl=t.querySelector(".fur-flame-fill"),this.arrowFillEl=t.querySelector(".fur-arrow-fill");const n=t.querySelector(".inv-main"),s=t.querySelector(".inv-hotbar");for(let o=0;o<hf;o++)this.mainCells.push(this.makeInvSlot(n,"main",o));for(let o=0;o<Jr;o++)this.hotbarCells.push(this.makeInvSlot(s,"hotbar",o));this.cursorEl=document.createElement("div"),this.cursorEl.className="inv-cursor",this.cursorIcon=document.createElement("div"),this.cursorIcon.className="slot-icon",this.cursorCnt=document.createElement("div"),this.cursorCnt.className="slot-count",this.cursorEl.append(this.cursorIcon,this.cursorCnt),this.cursorEl.style.display="none",this.cursorEl.style.pointerEvents="none",document.body.appendChild(this.cursorEl),document.addEventListener("pointermove",o=>{this.open&&(this.cursorEl.style.left=`${o.clientX}px`,this.cursorEl.style.top=`${o.clientY}px`,this.updateTouchPressMove(o))}),document.addEventListener("pointerup",o=>this.endTouchPress(o)),document.addEventListener("pointercancel",o=>{var r;((r=this.touchPress)==null?void 0:r.pointerId)===o.pointerId&&this.cancelTouchPress()})}bindSlot(t){t.classList.add("inv-slot"),t.style.touchAction="none";const e=document.createElement("div");e.className="slot-icon";const n=document.createElement("div");return n.className="slot-count",t.append(e,n),t.addEventListener("contextmenu",s=>s.preventDefault()),{el:t,icon:e,cnt:n}}makeInvSlot(t,e,n){const s=document.createElement("div");s.className="inv-slot",s.style.touchAction="none";const o=document.createElement("div");o.className="slot-icon";const r=document.createElement("div");return r.className="slot-count",s.append(o,r),s.addEventListener("pointerdown",a=>{this.onInventoryPointerDown(e,n,a)}),s.addEventListener("contextmenu",a=>a.preventDefault()),t.appendChild(s),{el:s,icon:o,cnt:r}}isOpen(){return this.open}show(t,e){this.inv=t,this.furnace=e,this.open=!0,this.root.classList.remove("hidden"),this.render()}hide(){var t;this.cancelTouchPress(),this.inv&&this.cursor&&(js(this.inv,this.cursor.id,this.cursor.count,pi(this.cursor.id)),this.cursor=null),this.open=!1,this.root.classList.add("hidden"),this.cursorEl.style.display="none",(t=this.onChange)==null||t.call(this)}onInventoryPointerDown(t,e,n){this.isSupportedPointer(n)&&(n.preventDefault(),this.positionCursor(n),n.pointerType==="touch"?this.beginTouchPress(n,s=>this.performInventoryClick(t,e,s,!1)):this.performInventoryClick(t,e,n.button===2,n.shiftKey))}onFurnacePointerDown(t,e){this.isSupportedPointer(e)&&(e.preventDefault(),this.positionCursor(e),e.pointerType==="touch"?this.beginTouchPress(e,n=>this.performFurnaceClick(t,n)):this.performFurnaceClick(t,e.button===2))}isSupportedPointer(t){return t.isPrimary&&(t.pointerType!=="mouse"||t.button===0||t.button===2)}positionCursor(t){this.cursorEl.style.left=`${t.clientX}px`,this.cursorEl.style.top=`${t.clientY}px`}performInventoryClick(t,e,n,s){var r;if(!this.inv)return;const o=t==="main"?Jr+e:e;s?this.shiftToFurnace(o):this.cursor=n?Ca(this.inv,o,this.cursor,pi):Ra(this.inv,o,this.cursor,pi),this.render(),(r=this.onChange)==null||r.call(this)}shiftToFurnace(t){const e=this.furnace,n=this.inv;if(!e||!n)return;const s=n[t];if(!s)return;const o=cf(s.id);if(o&&(e.fuel===0||e.fuel===s.id)){const r=pi(s.id)-e.fuelN,a=Math.min(r,s.count);e.fuel=s.id,e.fuelN+=a,s.count-=a,s.count<=0&&(n[t]=null)}else if(!o&&AT(s.id)&&(e.input===0||e.input===s.id)){const r=pi(s.id)-e.inputN,a=Math.min(r,s.count);e.input=s.id,e.inputN+=a,s.count-=a,s.count<=0&&(n[t]=null)}}performFurnaceClick(t,e){var s;const n=this.furnace;if(n){if(t==="output")this.takeOutput();else{const o=t==="input"?n.input:n.fuel,r=t==="input"?n.inputN:n.fuelN,a=[r>0?{id:o,count:r}:null];if(t==="fuel"&&this.cursor&&!cf(this.cursor.id))return;this.cursor=e?Ca(a,0,this.cursor,pi):Ra(a,0,this.cursor,pi);const l=a[0];t==="input"?(n.input=(l==null?void 0:l.id)??0,n.inputN=(l==null?void 0:l.count)??0):(n.fuel=(l==null?void 0:l.id)??0,n.fuelN=(l==null?void 0:l.count)??0)}this.render(),(s=this.onChange)==null||s.call(this)}}beginTouchPress(t,e){this.cancelTouchPress();const n={pointerId:t.pointerId,startX:t.clientX,startY:t.clientY,holdTimer:null,moved:!1,longPressed:!1,activate:e};this.touchPress=n,n.holdTimer=window.setTimeout(()=>{n.holdTimer=null,!(!this.open||this.touchPress!==n||n.moved)&&(n.longPressed=!0,n.activate(!0))},DT)}updateTouchPressMove(t){const e=this.touchPress;!e||e.pointerId!==t.pointerId||e.longPressed||Math.hypot(t.clientX-e.startX,t.clientY-e.startY)<=LT||(e.moved=!0,this.clearTouchPressTimer(e))}endTouchPress(t){const e=this.touchPress;!e||e.pointerId!==t.pointerId||(this.clearTouchPressTimer(e),this.touchPress=null,!e.moved&&!e.longPressed&&e.activate(!1))}cancelTouchPress(){this.touchPress&&(this.clearTouchPressTimer(this.touchPress),this.touchPress=null)}clearTouchPressTimer(t){t.holdTimer!==null&&(window.clearTimeout(t.holdTimer),t.holdTimer=null)}takeOutput(){const t=this.furnace;!t||t.outputN<=0||(this.cursor?this.cursor.id===t.output&&this.cursor.count+t.outputN<=pi(t.output)&&(this.cursor.count+=t.outputN,t.output=0,t.outputN=0):(this.cursor={id:t.output,count:t.outputN},t.output=0,t.outputN=0))}render(){if(!this.inv||!this.furnace)return;const t=this.furnace;for(let e=0;e<hf;e++)this.fill(this.mainCells[e],this.inv[Jr+e]);for(let e=0;e<Jr;e++)this.fill(this.hotbarCells[e],this.inv[e]);this.fill(this.inputCell,t.inputN>0?{id:t.input,count:t.inputN}:null),this.fill(this.fuelCell,t.fuelN>0?{id:t.fuel,count:t.fuelN}:null),this.fill(this.outCell,t.outputN>0?{id:t.output,count:t.outputN}:null),this.flameEl.style.height=`${t.burnMax>0?Math.round(t.burn/t.burnMax*100):0}%`,this.arrowFillEl.style.width=`${Math.round(t.cook/km*100)}%`,this.cursor?(this.cursorEl.style.display="block",this.fillRaw(this.cursorIcon,this.cursorCnt,this.cursor)):this.cursorEl.style.display="none"}fill(t,e){this.fillRaw(t.icon,t.cnt,e)}fillRaw(t,e,n){if(n&&n.count>0){const s=$i(n.id);s?(t.style.backgroundImage=`url(${s})`,t.textContent="",t.classList.remove("txt")):(t.style.backgroundImage="none",t.textContent=ym(n.id),t.classList.add("txt")),e.textContent=n.count>1?String(n.count):""}else t.style.backgroundImage="none",t.textContent="",t.classList.remove("txt"),e.textContent=""}}const ec=21,nc=21;function uf(i,t,e,n,s,o){const r=(f,g)=>o==="x"?[e+f,n+g,s]:[e,n+g,s+f],a=(f,g)=>t(...r(f,g)),l=(f,g)=>i(...r(f,g));if(!a(0,0))return null;let c=0;for(;-c<ec&&a(c-1,0);)c--;let h=0;for(;h<ec&&a(h+1,0);)h++;let u=0;for(;-u<nc&&a(0,u-1);)u--;let d=0;for(;d<nc&&a(0,d+1);)d++;const p=h-c+1,m=d-u+1;if(p<2||p>ec||m<3||m>nc)return null;for(let f=c;f<=h;f++)for(let g=u;g<=d;g++)if(!a(f,g))return null;for(let f=u;f<=d;f++)if(!l(c-1,f)||!l(h+1,f))return null;for(let f=c;f<=h;f++)if(!l(f,u-1)||!l(f,d+1))return null;const v=[];for(let f=c;f<=h;f++)for(let g=u;g<=d;g++)v.push(r(f,g));return{axis:o,inner:v}}function kT(i,t,e,n,s){return uf(i,t,e,n,s,"x")??uf(i,t,e,n,s,"z")}const Om=31,IT=127,NT=191;function FT(i,t,e,n){const r=kT((a,l,c)=>i(a,l,c)===18,(a,l,c)=>{const h=i(a,l,c);return h===0||h===25},t,e+1,n);return r?r.inner:null}function OT(i,t,e){return i==="overworld"?[Math.floor(t/8),Math.floor(e/8)]:[t*8,e*8]}function BT(i,t,e,n){if(t==="overworld"){for(let r=NT;r>1;r--)if(we(i(e,r,n))&&!we(i(e,r+1,n)))return r+1;return null}const s=Om+2,o=IT-8;for(let r=s;r<=o;r++){if(!we(i(e,r-1,n)))continue;let a=!1;for(let l=0;l<3;l++)if(Tc(i(e,r+l,n))){a=!0;break}if(!a)return r}return null}function zT(i,t,e,n){let s=BT(i,t,e,n),o=!1;s===null&&(s=t==="nether"?Om+10:64,o=!0);const r=new Map,a=(d,p,m)=>`${d},${p},${m}`,l=(d,p,m,v)=>{r.set(a(d,p,m),[d,p,m,v])},c=e,h=e+1,u=s+2;for(let d=e-1;d<=e+2;d++)for(let p=s-1;p<=s+3;p++)for(let m=n-1;m<=n+1;m++)l(d,p,m,0);for(let d=e-1;d<=e+2;d++)l(d,s-1,n,$n),l(d,s+3,n,$n);for(let d=s-1;d<=s+3;d++)l(e-1,d,n,$n),l(e+2,d,n,$n);for(let d=c;d<=h;d++)for(let p=s;p<=u;p++)l(d,p,n,Ha);if(l(c,s-1,n-1,$n),l(h,s-1,n-1,$n),o)for(let d=e-1;d<=e+2;d++)for(let p=n-1;p<=n+1;p++)l(d,s-1,p,$n);return{edits:[...r.values()],spawn:{x:c+.5,y:s,z:n+.5}}}const ic=600;class HT{constructor(t){_(this,"geom",new Be);_(this,"pos",new Float32Array(ic*3));_(this,"col",new Float32Array(ic*3));_(this,"posAttr");_(this,"colAttr");_(this,"points");this.posAttr=new fe(this.pos,3),this.colAttr=new fe(this.col,3),this.posAttr.setUsage(ou),this.colAttr.setUsage(ou),this.geom.setAttribute("position",this.posAttr),this.geom.setAttribute("color",this.colAttr),this.geom.setDrawRange(0,0);const e=new Yc({size:.13,vertexColors:!0,sizeAttenuation:!0,transparent:!0,depthWrite:!1});this.points=new mp(this.geom,e),this.points.layers.set(Yo),this.points.frustumCulled=!1,t.add(this.points)}sync(t){const e=Math.min(t.length,ic);for(let n=0;n<e;n++){const s=t[n];this.pos[n*3]=s.x,this.pos[n*3+1]=s.y,this.pos[n*3+2]=s.z,this.col[n*3]=s.r,this.col[n*3+1]=s.g,this.col[n*3+2]=s.b}this.geom.setDrawRange(0,e),this.posAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0}}const Qn={extent:1800,weatherTextureSize:128,detailTextureSize:64,standardSteps:36,highSteps:64,reflectionSteps:20};function sc(i){return i==="high"?Qn.highSteps:i==="standard"?Qn.standardSteps:0}const oc=(i,t)=>(i%t+t)%t,WT=(i,t,e)=>{let n=Math.imul(i^1757159915,668265261);return n=Math.imul(n^t,374761393),n=Math.imul(n^e,461845907),n^=n>>>15,n=Math.imul(n,2246822507),n^=n>>>13,(n>>>0)/4294967295},rc=i=>i*i*(3-2*i),GT=(i,t,e,n)=>{const s=Math.floor(i),o=Math.floor(t),r=Math.floor(e),a=rc(i-s),l=rc(t-o),c=rc(e-r),h=(g,y,x)=>WT(oc(s+g,n),oc(o+y,n),oc(r+x,n)),u=h(0,0,0)*(1-a)+h(1,0,0)*a,d=h(0,1,0)*(1-a)+h(1,1,0)*a,p=h(0,0,1)*(1-a)+h(1,0,1)*a,m=h(0,1,1)*(1-a)+h(1,1,1)*a,v=u*(1-l)+d*l,f=p*(1-l)+m*l;return v*(1-c)+f*c};function VT(i,t,e){let n=0,s=0,o=1;for(const r of[2,4,8,16])n+=GT(i*r,t*r,e*r,r)*o,s+=o,o*=.52;return n/s}function XT(i=Qn.detailTextureSize){if(!Number.isInteger(i)||i<16||i&i-1)throw new Error("cloud volume texture size must be a power of two >= 16");const t=new Float32Array(i*i*i);let e=1/0,n=-1/0,s=0;for(let a=0;a<i;a++)for(let l=0;l<i;l++)for(let c=0;c<i;c++){const h=VT(c/i,l/i,a/i);t[s++]=h,e=Math.min(e,h),n=Math.max(n,h)}const o=new Uint8Array(t.length),r=Math.max(1e-6,n-e);for(let a=0;a<t.length;a++)o[a]=Math.round((t[a]-e)/r*255);return o}function qT(i=Qn.weatherTextureSize){const t=new qc(Gp(i),i,i,hn);return t.name="mineworld-cloud-weather",t.wrapS=dn,t.wrapT=dn,t.magFilter=be,t.minFilter=Kn,t.generateMipmaps=!0,t.colorSpace=ln,t.needsUpdate=!0,t}function YT(i=Qn.detailTextureSize){const t=new jf(XT(i),i,i,i);return t.name="mineworld-cloud-detail-3d",t.format=zf,t.type=ni,t.wrapS=dn,t.wrapT=dn,t.wrapR=dn,t.magFilter=be,t.minFilter=be,t.unpackAlignment=1,t.colorSpace=ln,t.needsUpdate=!0,t}const $T=`
varying vec3 vCloudExit;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vCloudExit = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`.trim(),KT=`
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
`.trim(),jT=280,df=7.4,ff=8.8,pf=32,ac=`
varying vec2 vDisc;
void main() {
  vDisc = uv * 2.0 - 1.0;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`.trim(),ZT=`
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
`.trim(),QT=`
uniform float uVisibility;
varying vec2 vDisc;
void main() {
  float radius = length(vDisc);
  if (radius >= 1.0) discard;
  float glow = pow(1.0 - radius, 2.6) * 0.075 * uVisibility;
  gl_FragColor = vec4(vec3(1.0, 0.78, 0.38) * glow, 1.0);
  #include <colorspace_fragment>
}
`.trim(),JT=`
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
`.trim();function tE(){const t=new Float32Array(2550),e=new Float32Array(850*3),n=310;let s=12345;const o=()=>(s=s*1664525+1013904223>>>0,s/4294967296);for(let c=0;c<850;c++){const h=o()*2-1,u=o()*Math.PI*2,d=Math.sqrt(1-h*h);t[c*3]=Math.cos(u)*d*n,t[c*3+1]=Math.sin(u)*d*n,t[c*3+2]=h*n;const p=.35+o()*.65;e[c*3]=p,e[c*3+1]=p,e[c*3+2]=Math.min(1,p*(.92+o()*.16))}const r=new Be;r.setAttribute("position",new fe(t,3)),r.setAttribute("color",new fe(e,3));const a=new Yc({size:1.7,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),l=new mp(r,a);return l.frustumCulled=!1,l}function eE(){const i=document.createElement("canvas");i.width=i.height=16;const t=i.getContext("2d");return t.fillStyle="#fff6c0",t.fillRect(1,1,14,14),t.fillStyle="#ffe25a",t.fillRect(3,3,10,10),t.fillStyle="#ffcf26",t.fillRect(5,5,6,6),Bm(i)}function nE(){const i=document.createElement("canvas");i.width=i.height=16;const t=i.getContext("2d");return t.fillStyle="#eef2f7",t.fillRect(2,2,12,12),t.fillStyle="#c2ccd8",t.fillRect(5,4,3,3),t.fillRect(9,7,2,2),t.fillRect(4,9,2,3),t.fillRect(10,11,2,2),Bm(i)}function Bm(i){const t=new Ba(i);return t.magFilter=ue,t.minFilter=ue,t.colorSpace=ae,t}function ta(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function lc(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,o=t-n,r=s*s*(3-2*s),a=o*o*(3-2*o),l=ta(e,n),c=ta(e+1,n),h=ta(e,n+1),u=ta(e+1,n+1);return l*(1-r)*(1-a)+c*r*(1-a)+h*(1-r)*a+u*r*a}function iE(i,t){return lc(i,t)*.6+lc(i*2.3+5.1,t*2.3-3.7)*.3+lc(i*4.7,t*4.7)*.1}const Xn=16,sE=5,ea=28,oE=232,mf=.18,rE=.62,aE=.72;function lE(i,t){return iE(i*mf,t*mf)>rE}const cE=[{o:[[1,-1,-1],[1,1,-1],[1,1,1],[1,-1,1]],s:.82},{o:[[-1,-1,1],[-1,1,1],[-1,1,-1],[-1,-1,-1]],s:.82},{o:[[-1,1,-1],[-1,1,1],[1,1,1],[1,1,-1]],s:1},{o:[[-1,-1,1],[-1,-1,-1],[1,-1,-1],[1,-1,1]],s:.6},{o:[[1,-1,1],[1,1,1],[-1,1,1],[-1,-1,1]],s:.88},{o:[[-1,-1,-1],[-1,1,-1],[1,1,-1],[1,-1,-1]],s:.88}];function hE(i,t,e,n,s,o,r,a,l){const c=r/2,h=a/2,u=l/2;for(const d of cE){const p=i.length/3;for(const[m,v,f]of d.o)i.push(n+m*c,s+v*h,o+f*u),t.push(d.s,d.s,d.s);e.push(p,p+1,p+2,p,p+2,p+3)}}class uE{constructor(t){_(this,"sun");_(this,"moon");_(this,"realSun");_(this,"sunGlow");_(this,"realMoon");_(this,"voxelClouds");_(this,"realClouds");_(this,"cloudUniforms");_(this,"sunUniforms",{uVisibility:{value:1}});_(this,"sunGlowUniforms",{uVisibility:{value:1}});_(this,"moonUniforms",{uVisibility:{value:1}});_(this,"stars");_(this,"starGroup");_(this,"dir",new I);_(this,"drift",0);_(this,"cloudOriginX",NaN);_(this,"cloudOriginZ",NaN);_(this,"lq","off");_(this,"dim","overworld");const e=o=>new ye({map:o,transparent:!0,depthWrite:!1,fog:!1});this.sun=new Qt(new tn(46,46),e(eE())),this.moon=new Qt(new tn(38,38),e(nE())),this.realSun=new Qt(new tn(df,df),new Ve({uniforms:this.sunUniforms,vertexShader:ac,fragmentShader:ZT,transparent:!0,depthWrite:!1})),this.sunGlow=new Qt(new tn(pf,pf),new Ve({uniforms:this.sunGlowUniforms,vertexShader:ac,fragmentShader:QT,transparent:!0,depthWrite:!1,blending:gc})),this.realMoon=new Qt(new tn(ff,ff),new Ve({uniforms:this.moonUniforms,vertexShader:ac,fragmentShader:JT,transparent:!0,depthWrite:!1})),this.realSun.layers.set(Do),this.sunGlow.layers.set(Do),this.realSun.visible=this.sunGlow.visible=this.realMoon.visible=!1;const n=new ye({vertexColors:!0,color:16777215,transparent:!0,opacity:.85,depthWrite:!1,side:Qe});this.voxelClouds=new Qt(new Be,n),this.voxelClouds.frustumCulled=!1,this.cloudUniforms={uCloudWeather:{value:qT()},uCloudDetail3D:{value:YT()},uTime:{value:0},uStepCount:{value:sc("standard")},uTint:{value:new wt(1,1,1)},uSunDir:{value:new I(.5,.8,.28)}};const s=new Ve({uniforms:this.cloudUniforms,vertexShader:$T,fragmentShader:KT,transparent:!0,depthWrite:!1,side:Ne});this.realClouds=new Qt(new Xe(Qn.extent,Qn.extent,Qn.extent),s),this.realClouds.frustumCulled=!1,this.realClouds.visible=!1,this.realClouds.onBeforeRender=(o,r,a)=>{const l=sc(this.lq);this.cloudUniforms.uStepCount.value=a.layers.isEnabled(Do)?l:Math.min(l,Qn.reflectionSteps)},this.stars=tE(),this.starGroup=new un,this.starGroup.add(this.stars),this.stars.renderOrder=-900;for(const o of[this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon])o.renderOrder=-850;this.realClouds.renderOrder=-800,this.voxelClouds.renderOrder=-800;for(const o of[this.sun,this.moon,this.realMoon,this.voxelClouds,this.realClouds,this.starGroup,this.stars])o.layers.set(zo);t.add(this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon,this.voxelClouds,this.realClouds,this.starGroup)}setDimension(t){if(this.dim=t,t==="nether")for(const e of[this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon,this.voxelClouds,this.realClouds,this.starGroup])e.visible=!1;else this.starGroup.visible=!0,this.setLightingQuality(this.lq)}setLightingQuality(t){if(this.lq=t,this.dim==="nether"){for(const n of[this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon,this.voxelClouds,this.realClouds,this.starGroup])n.visible=!1;return}const e=t!=="off";this.cloudUniforms.uStepCount.value=sc(t),this.voxelClouds.visible=!e,this.realClouds.visible=e,this.sun.visible=!e,this.moon.visible=!e,this.realSun.visible=e,this.sunGlow.visible=e,this.realMoon.visible=e}rebuildVoxelClouds(t,e){const n=[],s=[],o=[],r=Xn-1;for(let l=0;l<ea;l++)for(let c=0;c<ea;c++)lE(t+l,e+c)&&hE(n,s,o,l*Xn+Xn/2,0,c*Xn+Xn/2,r,sE,r);const a=new Be;a.setAttribute("position",new Ce(n,3)),a.setAttribute("color",new Ce(s,3)),a.setIndex(o),this.voxelClouds.geometry.dispose(),this.voxelClouds.geometry=a}update(t,e,n){if(this.dim==="nether")return;const s=t/je*Math.PI*2;this.dir.set(Math.cos(s),Math.sin(s),.1).normalize();const o=jT;this.sun.position.copy(e).addScaledVector(this.dir,o),this.sun.lookAt(e),this.moon.position.copy(e).addScaledVector(this.dir,-o),this.moon.lookAt(e),this.realSun.position.copy(this.sun.position),this.realSun.lookAt(e),this.sunGlow.position.copy(this.sun.position),this.sunGlow.lookAt(e),this.realMoon.position.copy(this.moon.position),this.realMoon.lookAt(e),this.sunUniforms.uVisibility.value=Zn.smoothstep(this.dir.y,-.055,.025),this.sunGlowUniforms.uVisibility.value=this.sunUniforms.uVisibility.value,this.moonUniforms.uVisibility.value=Zn.smoothstep(-this.dir.y,-.055,.025),this.drift+=aE*Math.max(0,n),this.starGroup.position.copy(e),this.starGroup.rotation.z=s;const r=zp(t)/11;if(this.stars.material.opacity=Math.pow(r,1.5)*.9,this.realClouds.visible){this.realClouds.position.copy(e),this.cloudUniforms.uTime.value=this.drift;const c=ra(t).worldTint;this.cloudUniforms.uTint.value.setRGB(c[0],c[1],c[2],ae),this.cloudUniforms.uSunDir.value.copy(this.dir);return}const a=Math.floor((e.x-this.drift)/Xn)-ea/2,l=Math.floor(e.z/Xn)-ea/2;(a!==this.cloudOriginX||l!==this.cloudOriginZ)&&(this.rebuildVoxelClouds(a,l),this.cloudOriginX=a,this.cloudOriginZ=l),this.voxelClouds.position.set(a*Xn+this.drift,oE,l*Xn)}}const dE=16,fE={1:[.54,.54,.54],2:[.55,.42,.25],3:[.42,.67,.25],4:[.53,.53,.53],5:[.91,.86,.63],6:[.45,.33,.18],7:[.69,.54,.31],8:[.34,.34,.34],10:[.25,.48,.19],11:[.5,.36,.2],35:[.18,.69,.72],36:[.16,.68,.71],16:[.44,.7,.28],17:[.44,.7,.28],256:[.79,.16,.13],296:[.28,.78,.75]},bs=i=>fE[i]??[.5,.5,.5];function Fi(i,t,e,n,s,o=Math.random){const r=[];for(let a=0;a<s;a++){const l=o()*Math.PI*2,c=.6+o()*1.8;r.push({x:i+(o()-.5)*.6,y:t+(o()-.5)*.6,z:e+(o()-.5)*.6,vx:Math.cos(l)*c,vy:1.5+o()*2.5,vz:Math.sin(l)*c,age:0,life:.4+o()*.45,r:n[0],g:n[1],b:n[2]})}return r}function pE(i,t){const e=[];for(const n of i)n.age+=t,!(n.age>=n.life)&&(n.vy-=dE*t,n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,e.push(n));return e}const zm="mineworld.saves";function uh(){try{const i=localStorage.getItem(zm);return i?JSON.parse(i):[]}catch{return[]}}function Hm(i){try{localStorage.setItem(zm,JSON.stringify(i))}catch(t){console.warn("[mineworld] 存档写入失败(localStorage 配额满或不可用):",t)}}function mE(){return uh().sort((i,t)=>t.lastPlayed-i.lastPlayed)}function gE(i){const t=i.trim();if(!t)return null;if(/^-?\d+$/.test(t))return Math.abs(Math.floor(Number(t)))%2e9;let e=0;for(let n=0;n<t.length;n++)e=Math.imul(e,31)+t.charCodeAt(n)|0;return Math.abs(e)%2e9}function vE(i,t,e="survival"){const n={id:`${Date.now().toString(36)}-${Math.floor(Math.random()*1e6).toString(36)}`,name:i.trim()||"新的世界",seed:t??Math.floor(Math.random()*2e9),gameMode:e,lastPlayed:Date.now(),edits:{}};return Wm(n),n}function Wm(i){const t=uh().filter(e=>e.id!==i.id);t.push(i),Hm(t)}function _E(i){Hm(uh().filter(t=>t.id!==i))}function As(i,t,e,n){return i==="nether"?`nether:${t},${e},${n}`:`${t},${e},${n}`}function Dc(i){if(i.startsWith("nether:")){const[s,o,r]=i.slice(7).split(",").map(Number);return{dim:"nether",x:s,y:o,z:r}}const[t,e,n]=i.split(",").map(Number);return{dim:"overworld",x:t,y:e,z:n}}function xE(i,t,e,n){const o=ya/2,r=Math.floor(i-o-.1),a=Math.floor(i+o+.1),l=Math.floor(t-.1),c=Math.floor(t+Ki),h=Math.floor(e-o-.1),u=Math.floor(e+o+.1);for(let d=r;d<=a;d++)for(let p=l;p<=c;p++)for(let m=h;m<=u;m++)if(T1(n(d,p,m)))return!0;return!1}const yE=[.8,.8,1,.42,.8,.8],ME=14,SE=16,wE=10,gf=14;function Gm(i){return Math.max(0,Math.min(1,i))}function So(i,t){return Number.isFinite(i)?i:t}function na(i,t){return 1-Math.exp(-Math.max(0,Math.min(i,.2))*t)}function Vm(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function bE(i){const t=Vm(i)%360/360;return new wt().setHSL(t,.6,.48).getHex()}function TE(i,t,e){const n=Gm(e);let s=t-i;return s=((s+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,i+s*n}function EE(i,t,e){const n=new Xe(i,t,e),s=[];for(let o=0;o<6;o++){const r=yE[o];for(let a=0;a<4;a++)s.push(r,r,r)}return n.setAttribute("color",new Ce(s,3)),n}function Oi(i,t,e,n,s,o,r,a){const l=new Qt(EE(e,n,s),t);return l.position.set(o,r,a),i.add(l),l}function wo(i,t){const e=new ye({color:i,vertexColors:!0});return t.push({material:e,base:i.clone()}),e}function Lc(i){var e;const t=(e=i.name)==null?void 0:e.trim();return t?t.slice(0,18):i.id.slice(0,10)||"玩家"}function AE(i,t,e,n,s,o){const r=Math.min(o,n/2,s/2);i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function RE(i){const t=document.createElement("canvas");t.width=256,t.height=64;const e=t.getContext("2d");if(!e)throw new Error("无法创建远端玩家名字牌画布");const n=new Ba(t);n.colorSpace=ae,n.minFilter=be,n.magFilter=be;const s=new dp({map:n,transparent:!0,depthWrite:!1,depthTest:!1}),o=new FM(s);o.layers.set(Yo),o.position.set(0,2.38,0),o.scale.set(1.65,.4125,1);const r={canvas:t,context:e,texture:n,material:s,sprite:o};return Xm(r,i),r}function Xm(i,t){const{canvas:e,context:n}=i;n.clearRect(0,0,e.width,e.height),n.fillStyle="rgba(0, 0, 0, 0.58)",AE(n,7,7,e.width-14,e.height-14,11),n.fill(),n.font="bold 27px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.lineWidth=4,n.strokeStyle="rgba(0, 0, 0, 0.7)",n.strokeText(t,e.width/2,e.height/2+1),n.fillStyle="#ffffff",n.fillText(t,e.width/2,e.height/2+1),i.texture.needsUpdate=!0}function CE(i){const t=Vm(i),e=t%360/360,n=[16041889,14260842,11036225,7356973],s=new wt(n[(t>>>9)%n.length]),o=new wt(bE(i)),r=new wt().setHSL((e+.57)%1,.35,.31),a=new wt().setHSL((t>>>17)%360/360,.32,.18+(t>>>25)%7*.025);return{skin:s,shirt:o,trousers:r,hair:a}}function PE(i){const t=new un;t.name=`remote-player:${i.id}`;const e=[],n=CE(i.id),s=wo(n.skin,e),o=wo(n.shirt,e),r=wo(n.trousers,e),a=wo(n.hair,e),l=wo(new wt(2041648),e);Oi(t,o,.5,.72,.26,0,1.16,0),Oi(t,s,.5,.5,.5,0,1.77,0),Oi(t,a,.52,.12,.52,0,2.02,0),Oi(t,l,.016,.1,.09,.258,1.8,-.13),Oi(t,l,.016,.1,.09,.258,1.8,.13);const c=[],h=[];for(const p of[-.13,.13]){const m=new un;m.position.set(0,.8,p),Oi(m,r,.24,.8,.24,0,-.4,0),t.add(m),c.push(m)}for(const p of[-.36,.36]){const m=new un;m.position.set(0,1.47,p),Oi(m,o,.24,.72,.24,0,-.36,0),t.add(m),h.push(m)}const u=RE(Lc(i));t.add(u.sprite);const d=new I(i.x,i.y,i.z);return{group:t,legs:c,arms:h,materials:e,target:d.clone(),displayed:d,targetYaw:i.yaw,displayedYaw:i.yaw,walkPhase:0,walkAmount:0,brightness:1,tag:u,label:Lc(i)}}function vf(i){i.group.traverse(t=>{t instanceof Qt&&t.geometry.dispose()});for(const t of i.materials)t.material.dispose();i.tag.texture.dispose(),i.tag.material.dispose()}class DE{constructor(t){_(this,"models",new Map);this.scene=t}sync(t,e,n){const s=new Set,o=Math.max(0,Math.min(e,.2)),r=Gm(So(n,1));for(const a of t){if(!a.id||s.has(a.id))continue;s.add(a.id);let l=this.models.get(a.id);if(!l)l=PE(a),this.models.set(a.id,l),this.scene.add(l.group);else{const v=So(a.x,l.target.x),f=So(a.y,l.target.y),g=So(a.z,l.target.z),y=l.target.clone();l.target.set(v,f,g),y.distanceToSquared(l.target)>gf*gf&&l.displayed.copy(l.target),l.targetYaw=So(a.yaw,l.targetYaw);const x=Lc(a);x!==l.label&&(l.label=x,Xm(l.tag,x))}const c=na(o,ME),h=l.displayed.clone();l.displayed.lerp(l.target,c);const u=l.displayed.distanceTo(h),d=u>4e-4;l.walkAmount+=((d?1:0)-l.walkAmount)*na(o,11),d&&(l.walkPhase+=u*11),l.displayedYaw=TE(l.displayedYaw,l.targetYaw,na(o,SE)),l.brightness+=(r-l.brightness)*na(o,wE);for(const v of l.materials)v.material.color.copy(v.base).multiplyScalar(l.brightness);l.tag.material.color.setScalar(.68+l.brightness*.32);const p=Math.sin(l.walkPhase)*.72*l.walkAmount;l.legs.forEach((v,f)=>v.rotation.z=f===0?p:-p),l.arms.forEach((v,f)=>v.rotation.z=f===0?-p*.72:p*.72);const m=Math.abs(Math.sin(l.walkPhase))*.032*l.walkAmount;l.group.position.set(l.displayed.x,l.displayed.y+m,l.displayed.z),l.group.rotation.set(0,-l.displayedYaw,0)}for(const[a,l]of this.models)s.has(a)||(this.scene.remove(l.group),vf(l),this.models.delete(a))}dispose(){for(const[,t]of this.models)this.scene.remove(t.group),vf(t);this.models.clear()}}const Go=ee+8/9,vn=4,_f=Math.SQRT1_2,LE=.82,UE=2.5,yi=nh,kE=yi.groupBase+Math.abs(yi.groupAmplitude),cc=Math.abs(yi.wave1Weight)*kE+Math.abs(yi.wave2Weight)+Math.abs(yi.wave3Weight),Pa=Math.abs(yi.oceanLinear)*cc+Math.abs(yi.oceanQuadratic)*(cc*cc+Math.abs(yi.quadraticBias));function hc(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function xf(i,t,e,n,s,o){return(i*(1-o)+t*o)*(1-s)+(n*(1-o)+e*o)*s}function qm(i,t,e){const n=Math.floor(i),s=Math.floor(t);if(e.generatedSurfaceY(n,s)>=ee)return null;const o=(m,v)=>e.waterAmount(m,ee,v)===8&&e.isWaterSource(m,ee,v)&&e.getBlock(m,ee+1,v)===0;if(!o(n,s))return null;const r=new Map;for(let m=-vn;m<=vn;m++)for(let v=-vn;v<=vn;v++){const f=n+v,g=s+m;r.set(`${f},${g}`,o(f,g))}const a=(m,v)=>{let f=vn;const g=vn*vn;for(let y=-vn;y<vn;y++)for(let x=-vn;x<vn;x++){const T=x+.5,L=y+.5,A=T*T+L*L;A>g||r.get(`${m+x},${v+y}`)!==!0&&(f=Math.min(f,Math.sqrt(A)))}return hc(0,1,(f-_f)/(vn-_f))},l=i-n,c=t-s,h=xf(a(n,s),a(n,s+1),a(n+1,s+1),a(n+1,s),l,c);if(h<LE)return null;const u=(m,v)=>{if(e.waterAmount(m,ee,v)<=0)return 0;let f=1;for(let g=ee-1;g>=0&&f<7&&!(e.waterAmount(m,g,v)<=0);g--)f++;return f},d=(m,v)=>(u(m-1,v-1)+u(m,v-1)+u(m-1,v)+u(m,v))/4,p=xf(d(n,s),d(n,s+1),d(n+1,s+1),d(n+1,s),l,c);return p<UE?null:{open:h,depth:p,ocean:hc(.25,.82,h)*hc(1.25,2.5,p)}}function IE(i,t,e,n){return Go+OS(i,t,e,n.ocean).height}function NE(i,t,e,n,s,o,r){const a=Math.floor(i),l=Math.floor(t),c=Math.floor(e),h=ei(s.getBlock(a,l,c));if(!o||l!==ee&&l!==ee+1||t<Go-Pa||t>Go+Pa)return h;const u=r===void 0?qm(i,e,s):r;return u?t<IE(i,e,n,u):h}const ia=50,FE=4.5,OE=5,yf=9,BE=300,zE=-125,Tn=0,Mf=[{id:3,count:64},{id:2,count:64},{id:1,count:64},{id:4,count:64},{id:7,count:64},{id:6,count:64},{id:5,count:64},{id:21,count:64},{id:14,count:64},{id:15,count:64},{id:26,count:64},{id:32,count:64},{id:33,count:64},{id:34,count:64},{id:36,count:64},{id:18,count:64},{id:19,count:64},{id:20,count:64},{id:10,count:64},{id:30,count:64},{id:8,count:64},{id:12,count:64},{id:35,count:64},{id:11,count:64},{id:13,count:64},{id:27,count:64},{id:28,count:64},{id:269,count:1},{id:pm,count:1},{id:mm,count:1},{id:gm,count:1},{id:vm,count:1},{id:_m,count:1},{id:Ls,count:1},{id:Vi,count:64}];function HE(){const i=ah();for(let t=0;t<Mf.length&&t<i.length;t++)i[t]={...Mf[t]};return i}const WE=1.6,Sf=.005,GE=.1,VE=.05,XE=.2,qE=.005,YE=.1,$E=3,wf=16,bf=88,Tf=48,KE=3,jE=4,ZE=8,QE=50,Ef=["pig","cow","sheep","chicken"],JE=1200,t2=10,uc=.25,Af=1,Rf=.6,e2=2.4,n2=9,Cf=.42,i2=.36;function s2(i){if(i==null)return 1;const t=ko(i);return(t==null?void 0:t.kind)==="sword"?t.tier===1?4:t.tier===2?5:t.tier===3?6:7:1}function o2(i,t,e,n,s,o,r,a,l,c,h,u){let d=0,p=1/0;const m=(v,f,g,y)=>{if(Math.abs(f)<1e-9)return v>=g&&v<=y;let x=(g-v)/f,T=(y-v)/f;return x>T&&([x,T]=[T,x]),d=Math.max(d,x),p=Math.min(p,T),p>=d};return!m(i,n,r,c)||!m(t,s,a,h)||!m(e,o,l,u)?null:d}class r2{constructor(t,e,n=null){_(this,"canvas");_(this,"save");_(this,"renderer");_(this,"multiplayer");_(this,"remotePlayers");_(this,"look");_(this,"touch");_(this,"world");_(this,"physWorld");_(this,"playerPhysWorld");_(this,"waterSurfaceWorld");_(this,"chunks");_(this,"highlight");_(this,"underwaterEl");_(this,"normalFog");_(this,"underFog",new $s(2383754,.1,16));_(this,"player");_(this,"prev");_(this,"hotbar");_(this,"inv");_(this,"crack");_(this,"dropRenderer");_(this,"hand");_(this,"particleFx");_(this,"skyObjects");_(this,"dimension","overworld");_(this,"portalCooldown",0);_(this,"portalTimer",0);_(this,"portalArmed",!0);_(this,"particles",[]);_(this,"digFxT",0);_(this,"invUI");_(this,"craftingGrid",0);_(this,"furnaceUI");_(this,"furnaces",new Map);_(this,"furnaceKey",null);_(this,"touchHoldAction",null);_(this,"touchDigging",!1);_(this,"touchDigHit",null);_(this,"drops",[]);_(this,"arrows",[]);_(this,"arrowRenderer");_(this,"drawingBow",!1);_(this,"bowCharge",0);_(this,"mobs",[]);_(this,"mobRenderer");_(this,"mobRng");_(this,"spawnWorld");_(this,"surfaceY",(t,e)=>Fe(t,e,this.save.seed));_(this,"mobSpawnTick",0);_(this,"digging",!1);_(this,"lastMeleeMs",0);_(this,"digTarget",null);_(this,"digProgress",0);_(this,"fluidSim",new Cb);_(this,"fluidGrid");_(this,"fluidTick",0);_(this,"wateredChunks",new Set);_(this,"worldTime");_(this,"waterWaveTime",0);_(this,"waterProbeEpoch",0);_(this,"waterProbeCache",null);_(this,"fov",70);_(this,"actualSprinting",!1);_(this,"shadowTick",99);_(this,"evictCt",0);_(this,"last",0);_(this,"acc",0);_(this,"survival");_(this,"statusBar");_(this,"worldSpawn");_(this,"dead",!1);_(this,"creative");_(this,"flying",!1);_(this,"flyTapWindow",0);_(this,"fallDistance",0);_(this,"hurtCd",0);_(this,"coordEl");_(this,"coordOn",!1);_(this,"eating",!1);_(this,"eatProgress",0);_(this,"eatFxT",0);_(this,"crouching",!1);_(this,"camEye",Gn);_(this,"decayQueue",[]);_(this,"texturePack");_(this,"lightingQuality");_(this,"renderDistance");_(this,"_godSunUV",new Ft);_(this,"_godSunColor",new wt);_(this,"_godSunWorld",new I);_(this,"_godFwd",new I);_(this,"_handSun",new I);_(this,"_handSkyColor",new wt);_(this,"hurtWindowMax",0);_(this,"skyDarkenNow",0);_(this,"entityLight",(t,e,n)=>this.chunks.brightnessAt(t,e,n,this.skyDarkenNow));var d,p;const s=Ip();Ad(s.texturePack),this.canvas=t,this.save=e,this.waterSurfaceWorld={getBlock:(m,v,f)=>this.world.getBlock(m,v,f),waterAmount:(m,v,f)=>this.world.waterAmount(m,v,f),isWaterSource:(m,v,f)=>this.world.isWaterSource(m,v,f),generatedSurfaceY:(m,v)=>Fe(m,v,this.save.seed)},this.creative=e.gameMode==="creative",this.renderer=new nS(t),this.multiplayer=n,this.remotePlayers=new DE(this.renderer.scene),this.normalFog=this.renderer.scene.fog,this.underwaterEl=document.getElementById("underwater"),this.hotbar=new Zb(document.getElementById("hotbar"),yf),this.inv=e.inv?Fb(e.inv):this.creative?HE():ah(),this.hotbar.render(this.inv);const o=e.survival;this.survival=o&&o.health>0?{...Zl(),...o,foodTimer:0}:Zl(),this.statusBar=new cT(document.getElementById("health"),document.getElementById("hunger")),this.statusBar.render(this.survival),this.worldTime=e.worldTime??PS,this.fluidGrid={isSolid:(m,v,f)=>v<0||v>=ve||we(this.world.getBlock(m,v,f)),amount:(m,v,f)=>this.world.waterAmount(m,v,f),isSource:(m,v,f)=>this.world.isWaterSource(m,v,f),isFalling:(m,v,f)=>this.world.isWaterFalling(m,v,f),setWater:(m,v,f,g,y,x)=>this.world.setWater(m,v,f,g,y,x),getBlock:(m,v,f)=>this.world.getBlock(m,v,f),setBlock:(m,v,f,g)=>this.edit(m,v,f,g)},this.dimension=e.currentDimension??"overworld",this.buildDimension(this.dimension),this.texturePack=s.texturePack,this.lightingQuality=s.lightingQuality,this.renderDistance=s.renderDistance;const r=Ec(this.texturePack);this.chunks=new Xp(this.renderer.scene,this.world,r),this.renderer.setWaterRefractionSink((m,v,f,g,y)=>this.chunks.setWaterRefraction(m,v,f,g,y)),this.renderer.setWaterReflectionSink((m,v,f,g)=>this.chunks.setWaterReflection(m,v,f,g)),this.renderer.setWaterCapturesEnabled(this.dimension==="overworld"),this.chunks.setLightingQuality(s.lightingQuality),this.chunks.setSunEnabled(this.dimension==="overworld"),this.setRenderDistance(this.renderDistance),this.multiplayer&&this.bindMultiplayer(this.multiplayer),this.crack=new HS(this.renderer.scene),this.dropRenderer=new dw(this.renderer.scene,r),this.arrowRenderer=new kw(this.renderer.scene),this.mobRenderer=new Rb(this.renderer.scene),this.mobRng=wp((e.seed^2654435769)>>>0),this.spawnWorld={getBlock:(m,v,f)=>this.world.getBlock(m,v,f)},this.hand=new Sw(r),this.hand.setLightingQuality(s.lightingQuality),this.particleFx=new HT(this.renderer.scene),this.skyObjects=new uE(this.renderer.scene),this.skyObjects.setLightingQuality(s.lightingQuality),this.skyObjects.setDimension(this.dimension),this.invUI=new bT(document.getElementById("inventory")),this.furnaceUI=new UT(document.getElementById("furnace")),this.coordEl=document.createElement("div"),this.coordEl.style.cssText="position:fixed;left:8px;top:8px;z-index:30;padding:4px 8px;font:14px Zpix,monospace;color:#fff;background:rgba(0,0,0,.45);white-space:pre;display:none;pointer-events:none;text-shadow:1px 1px 0 #000;",document.body.appendChild(this.coordEl),this.furnaceUI.onChange=()=>this.hotbar.render(this.inv),this.furnaceUI.onClose=()=>this.closeFurnace(),this.invUI.onChange=()=>this.hotbar.render(this.inv),this.invUI.onClose=()=>this.closeCrafting(),this.physWorld={isSolid:(m,v,f)=>we(this.world.getBlock(m,v,f)),isWater:(m,v,f)=>ei(this.world.getBlock(m,v,f))},this.playerPhysWorld={isSolid:(m,v,f)=>we(this.world.getBlock(m,v,f)),isWater:()=>this.pointInWater(this.player.pos.x,this.player.pos.y+.1,this.player.pos.z)};const a=((d=e.playerByDimension)==null?void 0:d[this.dimension])??e.player;this.worldSpawn=this.findSpawn(e.seed);const l=a?{x:a.x,y:a.y,z:a.z}:this.worldSpawn;this.player={pos:{...l},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.chunks.update(Jt(Math.floor(l.x)),Jt(Math.floor(l.z)),2,999);const c=((p=e.mobsByDimension)==null?void 0:p[this.dimension])??e.mobs;if(c&&c.length)for(const m of c)this.mobs.push(Wd(m));else for(let m=0;m<4;m++)this.mobs.push(...zd(Ef[m%4],l.x,l.z,this.mobRng,this.spawnWorld,this.surfaceY,6,26));if(e.furnaces)for(const[m,v]of Object.entries(e.furnaces))this.furnaces.set(m,v);const h=new Xe(1.001,1.001,1.001);this.highlight=new BM(new zM(h),new pp({color:0,transparent:!0,opacity:.35})),this.highlight.layers.set(Yo),this.highlight.visible=!1,this.renderer.scene.add(this.highlight);const u=Dm();this.look=new Hb(t,!u),this.look.yaw=a?a.yaw:Math.atan2(-l.z,-l.x),this.look.pitch=a?a.pitch:-.18,this.touch=u?new jb(document.getElementById("touch-controls"),{look:(m,v)=>this.look.rotate(m,v),interactTap:()=>this.onTouchInteractTap(),interactHoldStart:()=>this.beginTouchHoldAction(),interactHoldEnd:()=>this.endTouchHoldAction(),interactHoldCancel:()=>this.cancelTouchHoldAction(),inventory:()=>{this.furnaceKey?this.closeFurnace():this.craftingGrid>0?this.closeCrafting():this.openCrafting(2)},pause:()=>window.dispatchEvent(new Event("mineworld:touch-pause"))}):null,t.addEventListener("contextmenu",m=>m.preventDefault()),t.addEventListener("mousedown",m=>{document.pointerLockElement===t&&(m.button===0?this.beginPrimaryAction():m.button===2&&this.onUseDown())}),window.addEventListener("mouseup",m=>{m.button===0?this.stopDigging():m.button===2&&(this.releaseBow(),this.stopEating())}),document.addEventListener("pointerlockchange",()=>{this.touch||document.pointerLockElement!==t&&(this.stopDigging(),this.drawingBow=!1,this.bowCharge=0,this.stopEating())}),window.addEventListener("keydown",m=>{if(m.code==="KeyE"){this.furnaceKey?this.closeFurnace():this.craftingGrid>0?this.closeCrafting():this.isGameplayActive()&&this.openCrafting(2);return}if(m.code==="F3"){m.preventDefault(),this.coordOn=!this.coordOn,this.coordEl.style.display=this.coordOn?"block":"none";return}if(m.code==="Escape"&&this.furnaceKey){this.closeFurnace();return}if(m.code==="Escape"&&this.craftingGrid>0){this.closeCrafting();return}const v=Number(m.key);Number.isInteger(v)&&v>=1&&v<=yf&&this.hotbar.setSelected(v-1)}),t.addEventListener("wheel",m=>{m.preventDefault(),this.hotbar.scroll(Math.sign(m.deltaY))},{passive:!1})}isGameplayActive(){var t;return((t=this.touch)==null?void 0:t.isActive)??document.pointerLockElement===this.canvas}usesTouchControls(){return this.touch!==null}setTouchActive(t){var e;(e=this.touch)==null||e.setActive(t&&!this.dead&&this.craftingGrid===0&&!this.furnaceKey)}attachMultiplayer(t){return this.multiplayer!==null?!1:(this.multiplayer=t,this.bindMultiplayer(t),this.publishMultiplayerState(),!0)}bindMultiplayer(t){t.setBlockHandler(e=>this.applyRemoteBlockEdit(e)),t.setWorldTimeHandler(e=>this.setNetworkWorldTime(e))}readMovement(){var n;const t=Bb();if(!((n=this.touch)!=null&&n.isActive))return t;const e=this.touch.readMove();return{forward:Math.max(-1,Math.min(1,t.forward+e.forward)),right:Math.max(-1,Math.min(1,t.right+e.right)),sprint:t.sprint||e.sprint,jumpHeld:t.jumpHeld||e.jumpHeld,crouch:t.crouch||e.crouch}}publishMultiplayerState(){if(!this.multiplayer)return;const t=this.player.pos;this.multiplayer.sendState({x:t.x,y:t.y,z:t.z,yaw:this.look.yaw,pitch:this.look.pitch,dimension:this.dimension})}beginPrimaryAction(t){if(!this.isGameplayActive())return;this.touchDigging=!1,this.touchDigHit=null;const e=this.mobUnderRay(t);if(e){const n=performance.now();n-this.lastMeleeMs>=500&&(this.attackMob(e,t),this.lastMeleeMs=n);return}this.touchDigging=t!==void 0,this.touchDigHit=t?this.rayHitFor(t):null,this.digging=!0,this.digTarget=null}stopDigging(){this.digging=!1,this.touchDigging=!1,this.touchDigHit=null,this.digProgress=0,this.digTarget=null,this.crack.hide()}onTouchInteractTap(){if(!this.isGameplayActive())return;const t=this.rayHit();if(this.useTargetedBlock(t))return;const e=this.inv[this.hotbar.index];this.tryIgnitePortal(t,(e==null?void 0:e.id)??null)||this.placeBlock(t)}shouldUseHeldItemOnTouchHold(){const t=this.inv[this.hotbar.index];return!t||t.count<=0?!1:t.id===Ls?$d(this.inv,Vi)>0:Wl(t.id)&&this.survival.food<Hs}beginTouchHoldAction(){if(!(!this.isGameplayActive()||this.touchHoldAction!==null)){if(this.shouldUseHeldItemOnTouchHold()&&this.beginHeldItemUse()){this.touchHoldAction="use";return}this.touchHoldAction="primary",this.beginPrimaryAction(this.crosshairRay())}}endTouchHoldAction(){const t=this.touchHoldAction;if(this.touchHoldAction=null,t==="primary"){this.stopDigging();return}t==="use"&&(this.releaseBow(),this.stopEating())}cancelTouchHoldAction(){const t=this.touchHoldAction;if(this.touchHoldAction=null,t==="primary"){this.stopDigging();return}t==="use"&&(this.drawingBow=!1,this.bowCharge=0,this.stopEating())}buildDimension(t){this.world=new Up(this.save.seed,t),this.world.editHook=(e,n,s)=>{for(const o in this.save.edits){const r=Dc(o);r.dim===t&&r.x>>4===e&&r.z>>4===n&&s.set(r.x&15,r.y,r.z&15,this.save.edits[o])}};for(const e of Object.keys(this.save.edits)){const n=Dc(e);n.dim===t&&(this.world.setBlock(n.x,n.y,n.z,this.save.edits[e]),this.fluidSim.activate(n.x,n.y,n.z))}}switchDimension(t,e){var r,a,l;((r=this.save).playerByDimension??(r.playerByDimension={}))[this.dimension]={x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.look.yaw,pitch:this.look.pitch},((a=this.save).mobsByDimension??(a.mobsByDimension={}))[this.dimension]=this.mobs.map(Hd);const n=this.world;this.dimension=t,this.save.currentDimension=t,this.buildDimension(t),this.chunks.setWorld(this.world),this.chunks.setSunEnabled(t==="overworld"),this.renderer.setWaterCapturesEnabled(t==="overworld"),n.dispose(),this.mobs.length=0;for(const c of((l=this.save.mobsByDimension)==null?void 0:l[t])??[])this.mobs.push(Wd(c));this.player={pos:{...e},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.skyObjects.setDimension(t);const s=Jt(Math.floor(e.x)),o=Jt(Math.floor(e.z));this.chunks.update(s,o,2,999),this.chunks.flushMesh(64),this.portalCooldown=60}snapshot(){var e,n;this.save.player={x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.look.yaw,pitch:this.look.pitch},this.save.inv=Nb(this.inv);const t=this.survival;return this.save.survival={health:t.health,food:t.food,saturation:t.saturation,exhaustion:t.exhaustion,oxygen:t.oxygen,oxygenTimer:t.oxygenTimer},this.save.worldTime=this.worldTime,this.save.mobs=this.mobs.map(Hd),this.save.furnaces=Object.fromEntries(this.furnaces),this.save.currentDimension=this.dimension,((e=this.save).playerByDimension??(e.playerByDimension={}))[this.dimension]={...this.save.player},((n=this.save).mobsByDimension??(n.mobsByDimension={}))[this.dimension]=this.save.mobs,this.save.lastPlayed=Date.now(),this.save}findSpawn(t){for(let e=1;e<160;e++)for(let n=-e;n<=e;n++)for(const[s,o]of[[n,-e],[n,e],[-e,n],[e,n]]){const r=Fe(s,o,t),a=(c,h)=>this.world.getBlock(c,r+1,h)===0&&this.world.getBlock(c,r+2,h)===0,l=this.world.getBlock(s,r,o)!==0&&this.world.getBlock(s,r-1,o)!==0&&this.world.getBlock(s,r-2,o)!==0;if(r>ee&&r<=ee+4&&l&&a(s,o)&&a(s+1,o)&&a(s-1,o)&&a(s,o+1)&&a(s,o-1))return{x:s+.5,y:r+1,z:o+.5}}return{x:.5,y:ee+3,z:.5}}async preloadSpawn(t=3){const e=Jt(Math.floor(this.player.pos.x)),n=Jt(Math.floor(this.player.pos.z));for(let l=-t;l<=t;l++)for(let c=-t;c<=t;c++)this.world.request(e+c,n+l);await new Promise(l=>{const c=()=>{let h=!0;for(let u=-t;u<=t&&h;u++)for(let d=-t;d<=t&&h;d++)this.world.peek(e+d,n+u)||(h=!1);h?l():setTimeout(c,30)};c()});const s=(t+1)*Pt,o=Math.floor(this.player.pos.x),r=Math.floor(this.player.pos.z);Yd(this.fluidSim,{isWater:(l,c,h)=>ei(this.world.getBlock(l,c,h)),isAir:(l,c,h)=>this.world.getBlock(l,c,h)===Tn},{minX:o-s,maxX:o+s,minZ:r-s,maxZ:r+s,minY:Math.max(1,ee-48),maxY:Math.min(ve-1,ee+2)}),Pb(this.fluidSim,this.fluidGrid,1200);for(let l=-t;l<=t;l++)for(let c=-t;c<=t;c++)this.wateredChunks.add(`${e+c},${n+l}`);const a=Math.ceil((t*2+1)**2/4)+1;for(let l=0;l<a+240&&(this.chunks.update(e,n,t,4),this.chunks.flushMesh(8),await new Promise(c=>requestAnimationFrame(()=>c())),!(l>=a&&!this.chunks.meshBusy()));l++);}activateNearbyWater(){const n=Jt(Math.floor(this.player.pos.x)),s=Jt(Math.floor(this.player.pos.z)),o=Math.max(1,ee-48),r=Math.min(ve-1,ee+2);let a=0;for(const l of Db(n,s,4,this.wateredChunks)){if(a>=3)break;const[c,h]=l.split(",").map(Number);this.world.peek(c,h)&&(Yd(this.fluidSim,{isWater:(u,d,p)=>ei(this.world.getBlock(u,d,p)),isAir:(u,d,p)=>this.world.getBlock(u,d,p)===Tn},{minX:c*Pt,maxX:c*Pt+Pt-1,minZ:h*Pt,maxZ:h*Pt+Pt-1,minY:o,maxY:r}),this.wateredChunks.add(l),a++)}}start(){this.last=performance.now(),this.publishMultiplayerState();const t=e=>{var v,f;requestAnimationFrame(t);const n=Math.min(e-this.last,100)/1e3;this.acc+=e-this.last,this.last=e,this.acc>250&&(this.acc=250);const s=this.isGameplayActive();for(;s&&this.acc>=ia;){this.waterProbeEpoch++,this.prev=this.player;const g=this.readMovement(),y=zb()||(((v=this.touch)==null?void 0:v.consumeJump())??!1);this.creative&&y&&(this.flyTapWindow>0?(this.flying=!this.flying,this.flyTapWindow=0):this.flyTapWindow=6),this.flyTapWindow>0&&this.flyTapWindow--,this.creative||(this.flying=!1),this.crouching=this.flying?!1:g.crouch,this.actualSprinting=g.sprint&&(this.creative||iT(this.survival)),this.player=Pw(this.player,{forward:g.forward,right:g.right,yaw:this.look.yaw,jump:y,swimUp:g.jumpHeld,sprint:this.actualSprinting,crouch:this.flying?!1:g.crouch,slow:this.eating,fly:this.flying,flyUp:g.jumpHeld,flyDown:g.crouch},this.playerPhysWorld),this.publishMultiplayerState(),this.stepSurvival(this.actualSprinting,y),++this.worldTime>=je&&(this.worldTime=0),++this.fluidTick>=5&&(this.fluidTick=0,this.activateNearbyWater(),this.fluidSim.tick(this.fluidGrid),this.chunks.remeshDirty(),this.waterProbeEpoch++);for(const x of this.furnaces.values())PT(x)&&CT(x);this.furnaceKey&&this.furnaceUI.render(),this.tickMobs(),this.tickArrows(),this.tickLeafDecay(),this.portalCooldown>0&&this.portalCooldown--,this.tickPortalTravel(),this.acc-=ia}s||(this.acc=0);const o=n>.026?3:(n>.018,4);this.chunks.update(Jt(Math.floor(this.player.pos.x)),Jt(Math.floor(this.player.pos.z)),this.renderDistance,o,Math.cos(this.look.yaw),Math.sin(this.look.yaw));const r=performance.now()+6;for(;this.chunks.meshQueueLen()>0&&performance.now()<r;)this.chunks.flushMesh(1);if(++this.evictCt>=45){this.evictCt=0;const g=Math.max(this.renderDistance+4,12);this.world.evictBeyond(Jt(Math.floor(this.player.pos.x)),Jt(Math.floor(this.player.pos.z)),g)}this.chunks.cullToView(this.player.pos.x,this.player.pos.z,Math.cos(this.look.yaw),Math.sin(this.look.yaw),this.look.pitch);const a=s&&this.actualSprinting?80:70;this.fov+=(a-this.fov)*.15,this.renderer.camera.fov=this.fov,this.renderer.camera.updateProjectionMatrix(),s?(this.updateMining(n),this.updateDrops(n),this.updateEating(n),this.updateBow(n),this.statusBar.render(this.survival),this.digging&&this.hand.swing()):this.crack.hide(),this.waterWaveTime+=n,this.chunks.animateWater(n),this.updateDayNight(),this.skyObjects.update(this.worldTime,this.renderer.camera.position,n),this.dimension==="overworld"&&this.lightingQuality!=="off"&&++this.shadowTick>=6?(this.shadowTick=0,this.chunks.updateSun(this.worldTime,this.player.pos.x,this.player.pos.y,this.player.pos.z),this.renderer.markShadowDirty()):(this.dimension!=="overworld"||this.lightingQuality==="off")&&(this.shadowTick=0),this.updateCamera(this.acc/ia),this.updateWater(),this.updateHighlight(),this.particles=pE(this.particles,n),this.particleFx.sync(this.particles),this.mobRenderer.sync(this.mobs,n,this.entityLight),this.remotePlayers.sync(((f=this.multiplayer)==null?void 0:f.remotePlayers.filter(g=>g.dimension===this.dimension))??[],n,this.entityLight(this.player.pos.x,this.player.pos.y+Gn,this.player.pos.z)),this.arrowRenderer.sync(this.arrows);const l=this.inv[this.hotbar.index];this.hand.setHeld(l?l.id:null),this.hand.setEating(s&&this.eating);const c=Math.min(1,Math.hypot(this.player.vel.x,this.player.vel.z)/.22);this.hand.update(n,s?c:0);const[h,u]=this.chunks.lightLevelAt(this.player.pos.x,this.player.pos.y+Gn,this.player.pos.z),d=this.dimension==="nether"&&h>14.5&&u<.5?.08:this.entityLight(this.player.pos.x,this.player.pos.y+Gn,this.player.pos.z);this.hand.setBrightness(d);const p=this.worldTime/je*Math.PI*2;this._handSun.set(Math.cos(p),Math.sin(p),.1).normalize();const m=ra(this.worldTime,this.dimension);if(this._handSkyColor.setRGB(m.worldTint[0],m.worldTint[1],m.worldTint[2],ae),this.hand.setLighting({skyLevel:h,blockLevel:u,skyDarken:this.skyDarkenNow,sunEnabled:this.dimension==="overworld",skyColor:this._handSkyColor,sunDirectionWorld:this._handSun,cameraQuaternion:this.renderer.camera.quaternion}),this.hand.camera.aspect!==this.renderer.camera.aspect&&this.hand.resize(this.renderer.camera.aspect),this.coordOn){const g=this.player.pos,y=this.chunks.pipelineStats();this.coordEl.textContent=`XYZ  ${Math.floor(g.x)} / ${Math.floor(g.y)+zE} / ${Math.floor(g.z)}
区块 已上屏${y.meshed} 可见${y.visible} 派发中${y.pending} 待上屏${y.queued}`}this.updateGodRays(),this.renderer.render(),this.renderer.renderOverlay(this.hand.scene,this.hand.camera)};requestAnimationFrame(t)}pointInWater(t,e,n){const s=this.dimension==="overworld"&&this.lightingQuality!=="off";let o;const r=Math.floor(e);if(s&&(r===ee||r===ee+1)&&e>=Go-Pa&&e<=Go+Pa){const a=Math.floor(t),l=Math.floor(n),c=this.waterProbeCache;c&&c.epoch===this.waterProbeEpoch&&c.bx===a&&c.bz===l?o=c.probe:(o=qm(t,n,this.waterSurfaceWorld),this.waterProbeCache={epoch:this.waterProbeEpoch,bx:a,bz:l,probe:o})}return NE(t,e,n,this.waterWaveTime,this.waterSurfaceWorld,s,o)}stepSurvival(t,e){if(this.creative){this.fallDistance=0;return}this.hurtCd>0&&this.hurtCd--;const n=this.player.pos.x-this.prev.pos.x,s=this.player.pos.z-this.prev.pos.z,o=this.player.pos.y-this.prev.pos.y;t&&Wi(this.survival,GE*Math.hypot(n,s)),e&&Wi(this.survival,t?XE:VE);const r=Math.floor(this.player.pos.x),a=Math.floor(this.player.pos.z),l=this.pointInWater(this.player.pos.x,this.player.pos.y,this.player.pos.z),c=rT(this.fallDistance,o,this.player.onGround,l);this.fallDistance=c.fallDistance,c.damage>0&&(this.hurtPlayer(c.damage,0,0,!0),Wi(this.survival,YE)),xE(this.player.pos.x,this.player.pos.y,this.player.pos.z,(m,v,f)=>this.world.getBlock(m,v,f))&&this.hurtPlayer(1,0,0,!0);const h=Tc(this.world.getBlock(r,Math.floor(this.player.pos.y),a)),u=Tc(this.world.getBlock(r,Math.floor(this.player.pos.y+.9),a));(h||u)&&this.hurtPlayer(4,0,0,!0);const d=this.pointInWater(this.player.pos.x,this.player.pos.y+Gn,this.player.pos.z),p=this.survival.health;lT(this.survival,d),this.survival.health<p&&this.flashHurt(),aT(this.survival),Ql(this.survival)&&!this.dead&&this.die()}flashHurt(){this.hand.hurtShake();const t=document.getElementById("hurt");t&&(t.classList.remove("flash"),t.offsetWidth,t.classList.add("flash"))}hurtPlayer(t,e,n,s=!1){if(!this.creative){if(this.hurtCd>0){t>this.hurtWindowMax&&(Aa(this.survival,t-this.hurtWindowMax),this.hurtWindowMax=t,this.flashHurt(),Ql(this.survival)&&!this.dead&&this.die());return}if(this.hurtCd=10,this.hurtWindowMax=t,Aa(this.survival,t),this.flashHurt(),!s){const o=Math.hypot(e,n)||1;this.player.kbx=e/o*Cf,this.player.kbz=n/o*Cf,this.player.vel.y=i2}Ql(this.survival)&&!this.dead&&this.die()}}die(){this.dead=!0,this.stopDigging(),this.stopEating();const t=Math.floor(this.player.pos.x),e=Math.floor(this.player.pos.y),n=Math.floor(this.player.pos.z);for(let s=0;s<this.inv.length;s++){const o=this.inv[s];o&&o.count>0&&this.drops.push(bn(o.id,t,e,n,Math.random,o.count,o.dur)),this.inv[s]=null}this.hotbar.render(this.inv),this.dropRenderer.sync(this.drops,this.entityLight),this.touch?(this.touch.setActive(!1),window.dispatchEvent(new Event("mineworld:touch-death"))):document.exitPointerLock()}isDead(){return this.dead}setTexturePack(t){if(t===this.texturePack)return;this.texturePack=t,Ad(t);const e=Ec(t);this.chunks.setAtlas(e),this.hand.setAtlas(e),this.dropRenderer.setAtlas(e),this.hotbar.render(this.inv)}setLightingQuality(t){this.lightingQuality=t,this.chunks.setLightingQuality(t),this.hand.setLightingQuality(t),this.skyObjects.setLightingQuality(t),t==="off"&&this.renderer.setGodRays(null)}setRenderDistance(t){this.renderDistance=t;const e=t*16;this.normalFog instanceof $s&&(this.normalFog.near=e*.72,this.normalFog.far=e),this.chunks.setFogFar(e)}respawn(){this.survival=Zl(),this.dead=!1,this.fallDistance=0;const t=this.worldSpawn;this.player={pos:{...t},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.chunks.update(Jt(Math.floor(t.x)),Jt(Math.floor(t.z)),2,999),this.statusBar.render(this.survival)}useTargetedBlock(t){return t?this.world.getBlock(t.x,t.y,t.z)===Tp?(this.openCrafting(3),!0):this.world.getBlock(t.x,t.y,t.z)===hd?(this.openFurnace(t.x,t.y,t.z),!0):!1:!1}tryIgnitePortal(t,e){if(!t||e!==fm||this.world.getBlock(t.x,t.y,t.z)!==$n)return!1;const n=FT((s,o,r)=>this.world.getBlock(s,o,r),t.x,t.y,t.z);if(!n)return!1;for(const[s,o,r]of n)this.edit(s,o,r,Ha);return!0}beginHeldItemUse(){const t=this.inv[this.hotbar.index];return t&&t.id===Ls&&$d(this.inv,Vi)>0?(this.drawingBow=!0,this.bowCharge=0,!0):t&&t.count>0&&Wl(t.id)&&this.survival.food<Hs?(this.eating=!0,this.eatProgress=0,!0):!1}onUseDown(){const t=this.rayHit();if(this.useTargetedBlock(t))return;const e=this.inv[this.hotbar.index];this.tryIgnitePortal(t,(e==null?void 0:e.id)??null)||this.beginHeldItemUse()||this.placeBlock(t)}updateBow(t){if(!this.drawingBow)return;const e=this.inv[this.hotbar.index];if(!e||e.id!==Ls){this.drawingBow=!1,this.bowCharge=0;return}this.bowCharge=Math.min(this.bowCharge+t,Af)}releaseBow(){if(!this.drawingBow)return;this.drawingBow=!1;const t=this.bowCharge;this.bowCharge=0;const e=this.inv[this.hotbar.index];if(!e||e.id!==Ls||t<uc||Ib(this.inv,Vi,1)<1)return;this.hotbar.render(this.inv);const n=(t-uc)/(Af-uc),s=Rf+n*(e2-Rf),o=Math.max(1,Math.round(2+n*(n2-2))),r=Math.cos(this.look.yaw),a=Math.sin(this.look.yaw),l=Math.cos(this.look.pitch),c=Math.sin(this.look.pitch),h=this.player.pos.x,u=this.player.pos.y+Gn,d=this.player.pos.z;this.arrows.push(Id(h+r*l*.4,u+c*.4,d+a*l*.4,r*l,c,a*l,s,!0,o)),this.hand.swing()}isCraftingOpen(){return this.craftingGrid>0}openCrafting(t){this.craftingGrid=t,this.invUI.show(this.inv,t),this.touch?this.touch.setActive(!1):document.exitPointerLock()}closeCrafting(){this.craftingGrid=0,this.invUI.hide(),this.touch?this.touch.setActive(!this.dead):this.canvas.requestPointerLock()}openFurnace(t,e,n){const s=`${t},${e},${n}`;let o=this.furnaces.get(s);o||(o=RT(),this.furnaces.set(s,o)),this.furnaceKey=s,this.furnaceUI.show(this.inv,o),this.touch?this.touch.setActive(!1):document.exitPointerLock()}closeFurnace(){this.furnaceKey=null,this.furnaceUI.hide(),this.touch?this.touch.setActive(!this.dead):this.canvas.requestPointerLock()}stopEating(){this.eating=!1,this.eatProgress=0}updateEating(t){if(!this.eating)return;const e=this.hotbar.index,n=this.inv[e];if(!n||n.count<=0||!Wl(n.id)||this.survival.food>=Hs){this.stopEating();return}if(this.eatProgress+=t,this.eatFxT+=t,this.eatFxT>=.09){this.eatFxT=0;const s=Math.cos(this.look.yaw),o=Math.sin(this.look.yaw),r=Math.cos(this.look.pitch),a=Math.sin(this.look.pitch),l=this.player.pos.x+s*r*.4,c=this.player.pos.y+Gn-.18+a*.4,h=this.player.pos.z+o*r*.4;this.particles.push(...Fi(l,c,h,bs(n.id),2))}if(this.eatProgress>=WE){const s=ew(n.id),o=Kd(this.inv,e);s&&o!==null&&(sT(this.survival,s),this.hotbar.render(this.inv)),this.eatProgress=0}}crosshairRay(){const t={x:this.player.pos.x,y:this.player.pos.y+Gn,z:this.player.pos.z},e=Math.cos(this.look.yaw),n=Math.sin(this.look.yaw),s=Math.cos(this.look.pitch),o=Math.sin(this.look.pitch);return{origin:t,direction:{x:e*s,y:o,z:n*s}}}rayHitFor(t){return _d(t.origin,t.direction,this.creative?OE:FE,(e,n,s)=>fd(this.world.getBlock(e,n,s)))}rayHit(){return this.rayHitFor(this.crosshairRay())}edit(t,e,n,s){var o;this.world.setBlock(t,e,n,s),this.save.edits[As(this.dimension,t,e,n)]=s,this.fluidSim.activate(t,e,n),this.chunks.remeshDirty(),(o=this.multiplayer)==null||o.sendBlock({dimension:this.dimension,x:t,y:e,z:n,id:s})}applyRemoteBlockEdit(t){t.dimension!=="overworld"&&t.dimension!=="nether"||!Number.isInteger(t.x)||!Number.isInteger(t.y)||!Number.isInteger(t.z)||!Number.isInteger(t.id)||t.y<0||t.y>=ve||(this.save.edits[As(t.dimension,t.x,t.y,t.z)]=t.id,t.dimension===this.dimension&&this.world.peek(Jt(t.x),Jt(t.z))&&(this.world.setBlock(t.x,t.y,t.z,t.id),this.fluidSim.activate(t.x,t.y,t.z),this.chunks.remeshDirty()))}setNetworkWorldTime(t){if(!Number.isFinite(t))return;const e=Math.floor(t)%je;this.worldTime=e<0?e+je:e}editDim(t,e,n,s,o){this.save.edits[As(t,e,n,s)]=o}worldAt(t,e,n,s,o){if(t===this.dimension)return this.world.getBlock(e,n,s);const r=this.save.edits[As(t,e,n,s)];if(r!==void 0)return r;if(n<0||n>=ve)return 0;const a=Jt(e),l=Jt(s),c=`${t}:${a},${l}`;let h=o==null?void 0:o.get(c);return h||(h=Lp(a,l,this.save.seed,t),o==null||o.set(c,h)),h.get(Je(e),n,Je(s))}tickPortalTravel(){var h;const t=this.player.pos,e=Math.floor(t.x),n=Math.floor(t.y),s=Math.floor(t.z),o=y1(this.world.getBlock(e,n,s));if(this.portalTimer=o?this.portalTimer+ia/1e3:0,o||(this.portalArmed=!0),!o||!this.portalArmed||this.portalCooldown!==0||this.portalTimer<4)return;const r=this.dimension==="overworld"?"nether":"overworld",a=`${this.dimension}:${e},${n},${s}`,l=(h=this.save).portalLinks??(h.portalLinks={});let c=l[a];if(!c){const u=new Map,[d,p]=OT(this.dimension,t.x,t.z),m=zT((v,f,g)=>this.worldAt(r,v,f,g,u),r,d,p);u.clear();for(const[v,f,g,y]of m.edits)this.editDim(r,v,f,g,y);c=[m.spawn.x,m.spawn.y,m.spawn.z],l[a]=c,l[`${r}:${Math.floor(c[0])},${Math.floor(c[1])},${Math.floor(c[2])}`]=[t.x,t.y,t.z]}this.portalArmed=!1,this.portalTimer=0,this.switchDimension(r,{x:c[0],y:c[1],z:c[2]})}queueLeafDecay(t,e,n){for(const s of aS((o,r,a)=>this.world.getBlock(o,r,a),t,e,n))this.decayQueue.some(o=>o.x===s.x&&o.y===s.y&&o.z===s.z)||this.decayQueue.push({x:s.x,y:s.y,z:s.z,t:40+Math.floor(Math.random()*160)})}tickLeafDecay(){if(this.decayQueue.length!==0)for(let t=this.decayQueue.length-1;t>=0;t--){const e=this.decayQueue[t];if(--e.t>0)continue;this.decayQueue.splice(t,1);const n=this.world.getBlock(e.x,e.y,e.z);n!==Ho&&n!==Ga||(this.edit(e.x,e.y,e.z,Tn),this.particles.push(...Fi(e.x+.5,e.y+.5,e.z+.5,bs(n),8)),Math.random()<Sf&&this.drops.push(bn(_a,e.x,e.y,e.z)))}}updateMining(t){if(!this.digging){this.crack.hide();return}const e=this.touchDigging?this.touchDigHit:this.rayHit();if(!e){this.digProgress=0,this.digTarget=null,this.crack.hide(),this.touchDigging&&this.stopDigging();return}const n=this.world.getBlock(e.x,e.y,e.z);if(this.touchDigging&&!fd(n)){this.stopDigging();return}if((!this.digTarget||this.digTarget.x!==e.x||this.digTarget.y!==e.y||this.digTarget.z!==e.z)&&(this.digTarget={x:e.x,y:e.y,z:e.z},this.digProgress=0),Rp(n)<0){this.crack.hide();return}const s=this.creative?0:w1(n,this.heldTool())/1e3;if(s<=0){this.mineBlock(e.x,e.y,e.z,n),this.touchDigging&&this.stopDigging();return}this.digProgress+=t,this.digProgress>=s?(this.mineBlock(e.x,e.y,e.z,n),this.touchDigging&&this.stopDigging()):(this.crack.show(e.x,e.y,e.z,this.digProgress/s),this.digFxT+=t,this.digFxT>=.07&&(this.digFxT=0,this.particles.push(...Fi(e.x+.5,e.y+.5,e.z+.5,bs(n),3))))}heldTool(){const t=this.inv[this.hotbar.index];return t?ko(t.id):null}settleFallingAt(t,e,n){let s=e+1;for(;;){const o=this.world.getBlock(t,s,n);if(o!==p1&&o!==ud)break;let r=s-1;for(;r>1&&this.world.getBlock(t,r-1,n)===Tn;)r--;if(r>=s)break;this.edit(t,s,n,Tn),this.edit(t,r,n,o),s++}}mineBlock(t,e,n,s){if(qi(s)){this.edit(t,e,n,Tn),this.particles.push(...Fi(t+.5,e+.5,n+.5,bs(s),6)),this.digProgress=0,this.digTarget=null,this.crack.hide();return}let o=this.creative?null:b1(s,this.heldTool());o===ud&&Math.random()<.1&&(o=hm),this.edit(t,e,n,Tn),s===Os&&!this.creative&&this.world.getBlock(t,e-1,n)!==Tn&&(this.world.setWater(t,e,n,8,!0,!1),this.fluidSim.activate(t,e,n));const r=this.world.getBlock(t,e+1,n);if((qi(r)||r===Fs)&&(this.edit(t,e+1,n,Tn),r===Fs&&!this.creative&&this.drops.push(bn(Fs,t,e+1,n)),this.particles.push(...Fi(t+.5,e+1.5,n+.5,bs(r),6))),this.settleFallingAt(t,e,n),this.particles.push(...Fi(t+.5,e+.5,n+.5,bs(s),16)),o!==null&&this.drops.push(bn(o,t,e,n)),!this.creative&&s===Ho&&Math.random()<Sf&&this.drops.push(bn(_a,t,e,n)),(s===za||s===Wa)&&this.queueLeafDecay(t,e,n),s===hd){const c=this.furnaces.get(`${t},${e},${n}`);if(c){const h=[[c.input,c.inputN],[c.fuel,c.fuelN],[c.output,c.outputN]];for(const[u,d]of h)d>0&&this.drops.push(bn(u,t,e,n,Math.random,d));this.furnaces.delete(`${t},${e},${n}`)}}Wi(this.survival,qE);const a=this.inv[this.hotbar.index],l=a?ko(a.id):null;l&&(jd(this.inv,this.hotbar.index,l.maxDurability),this.hotbar.render(this.inv)),this.digProgress=0,this.digTarget=null,this.crack.hide()}updateDrops(t){const e=this.player.pos.x,n=this.player.pos.y+.9,s=this.player.pos.z;aw(this.drops,xa);for(let o=this.drops.length-1;o>=0;o--){const r=this.drops[o];if(lw(r,this.physWorld,t),r.age>BE){this.drops.splice(o,1);continue}if(cw(r,e,n,s))if(r.dur!==void 0)kb(this.inv,r.id,r.dur)&&(this.drops.splice(o,1),this.hotbar.render(this.inv));else{const a=js(this.inv,r.id,r.count,xa(r.id));a<r.count&&this.hotbar.render(this.inv),a===0?this.drops.splice(o,1):r.count=a}}this.dropRenderer.sync(this.drops,this.entityLight)}tickMobs(){const t=this.player.pos.x,e=this.player.pos.z,n={x:t,y:this.player.pos.y,z:e};let s=0,o=0,r=0;for(let a=this.mobs.length-1;a>=0;a--){const l=this.mobs[a],c=l.pos.x-t,h=l.pos.z-e,u=c*c+h*h;if(u>bf*bf){this.mobs.splice(a,1);continue}const d=Nw(l.kind);d&&r++,u<Tf*Tf&&(s++,d&&o++);const p=d?ob(l,this.physWorld,this.mobRng,n,this.isSunlit(l)):Gw(l,this.physWorld,this.mobRng);Object.assign(l,p.mob);let m=!1;for(const v of p.events)if(v.kind==="layEgg")this.drops.push(bn(am,Math.floor(v.pos.x),Math.floor(v.pos.y),Math.floor(v.pos.z)));else if(v.kind==="attackPlayer")this.hurtPlayer(v.damage,t-l.pos.x,e-l.pos.z),l.kind==="husk"&&Wi(this.survival,3);else if(v.kind==="shootArrow")this.arrows.push(Id(v.from.x,v.from.y,v.from.z,v.dir.x,v.dir.y,v.dir.z,Tm,!1,v.damage));else if(v.kind==="explode")this.explode(v.pos,v.radius,v.damage);else if(v.kind==="drops")for(const f of v.items)this.drops.push(bn(f.id,Math.floor(v.pos.x),Math.floor(v.pos.y),Math.floor(v.pos.z),Math.random,f.count));else v.kind==="death"&&(m=!0);m&&this.mobs.splice(a,1)}if(++this.mobSpawnTick>=QE){if(this.mobSpawnTick=0,s<KE&&this.mobs.length<wf){const l=this.player.vel,c=Math.hypot(l.x,l.z)>.001?Math.atan2(l.z,l.x):null;this.mobs.push(...zd(Ef[Math.floor(this.mobRng()*4)],t,e,this.mobRng,this.spawnWorld,this.surfaceY,24,44,c,Math.PI/2))}let a=Math.min(ZE-r,wf-this.mobs.length);if(o<jE&&a>0){const l=this.mobRng(),c=Es(t,e,this.save.seed),h=ab(c,l),u=(p,m,v)=>{const[f,g]=this.chunks.lightLevelAt(p,m,v);return Math.max(g,f-this.skyDarkenNow)},d=hb(h,t,this.player.pos.y,e,this.mobRng,this.spawnWorld,this.surfaceY,void 0,void 0,u).slice(0,a);this.mobs.push(...d),a-=d.length,a>0&&this.mobs.push(...cb(h,t,e,this.mobRng,this.spawnWorld,this.surfaceY,void 0,void 0,u).slice(0,a))}}}explode(t,e,n){const s=Math.floor(t.x),o=Math.floor(t.y),r=Math.floor(t.z),a=e*e,l=Math.ceil(e);for(let m=-l;m<=l;m++)for(let v=-l;v<=l;v++)for(let f=-l;f<=l;f++){if(f*f+m*m+v*v>a)continue;const g=s+f,y=o+m,x=r+v,T=this.world.getBlock(g,y,x);!we(T)&&!qi(T)||T===Qc||T===$n||(this.world.setBlock(g,y,x,Tn),this.save.edits[As(this.dimension,g,y,x)]=Tn,this.fluidSim.activate(g,y,x))}for(let m=-l;m<=l;m++)for(let v=-l;v<=l;v++)this.settleFallingAt(s+v,o-l,r+m);this.chunks.remeshDirty(),this.particles.push(...Fi(t.x,t.y+.4,t.z,[.33,.33,.33],30));const c=this.player.pos,h=c.x-t.x,u=c.z-t.z,d=Math.hypot(h,c.y+.9-t.y,u);let p=Math.round(n*(1-d/(e+1.5)));p>0&&this.explosionBlocked(t,{x:c.x,y:c.y+.9,z:c.z})&&(p=Math.round(p*.3)),p>0&&this.hurtPlayer(p,h,u);for(let m=this.mobs.length-1;m>=0;m--){const v=this.mobs[m],f=v.pos.x-t.x,g=v.pos.z-t.z,y=Math.hypot(f,v.pos.y+.5-t.y,g);let x=Math.round(n*(1-y/(e+1.5)));if(x>0&&this.explosionBlocked(t,{x:v.pos.x,y:v.pos.y+.5,z:v.pos.z})&&(x=Math.round(x*.3)),x<=0)continue;const T=Yl(v,x,{x:f,z:g},this.mobRng);Object.assign(v,T.mob);for(const L of T.events)if(L.kind==="drops")for(const A of L.items)this.drops.push(bn(A.id,Math.floor(L.pos.x),Math.floor(L.pos.y),Math.floor(L.pos.z),Math.random,A.count));else L.kind==="death"&&this.mobs.splice(m,1)}}explosionBlocked(t,e){for(let s=1;s<8;s++){const o=s/8,r=Math.floor(t.x+(e.x-t.x)*o),a=Math.floor(t.y+(e.y-t.y)*o),l=Math.floor(t.z+(e.z-t.z)*o);if(we(this.world.getBlock(r,a,l)))return!0}return!1}isSunlit(t){return db(t,this.world,ra(this.worldTime).isNight)}tickArrows(){const t=(e,n,s,o,r,a,l,c)=>e>=o-l&&e<=o+l&&n>=a&&n<=a+c&&s>=r-l&&s<=r+l;for(let e=this.arrows.length-1;e>=0;e--){const n=this.arrows[e];if(n.age>JE){this.arrows.splice(e,1);continue}if(n.stuck){if(n.age++,n.age>t2){const d=n.x-this.player.pos.x,p=n.y-(this.player.pos.y+.9),m=n.z-this.player.pos.z;d*d+p*p+m*m<1.4*1.4&&js(this.inv,Vi,1)===0&&(this.hotbar.render(this.inv),this.arrows.splice(e,1))}continue}const s=n.x,o=n.y,r=n.z;Lw(n,this.physWorld);const a=n.x-s,l=n.y-o,c=n.z-r,h=Math.max(1,Math.ceil(Math.hypot(a,l,c)/.2));let u=!1;for(let d=1;d<=h&&!u;d++){const p=d/h,m=s+a*p,v=o+l*p,f=r+c*p;if(n.fromPlayer)for(const g of this.mobs){const y=wi[g.kind];if(t(m,v,f,g.pos.x,g.pos.z,g.pos.y,y.width/2,y.height)){this.damageMobWithArrow(g,n),u=!0;break}}else t(m,v,f,this.player.pos.x,this.player.pos.z,this.player.pos.y,ya/2,Ki)&&(this.hurtPlayer(n.damage,n.vx,n.vz),u=!0)}u&&this.arrows.splice(e,1)}}damageMobWithArrow(t,e){const n=Yl(t,e.damage,{x:e.vx,z:e.vz},this.mobRng);Object.assign(t,n.mob);for(const s of n.events)if(s.kind==="drops")for(const o of s.items)this.drops.push(bn(o.id,Math.floor(s.pos.x),Math.floor(s.pos.y),Math.floor(s.pos.z),Math.random,o.count));else if(s.kind==="death"){const o=this.mobs.indexOf(t);o>=0&&this.mobs.splice(o,1)}}mobUnderRay(t=this.crosshairRay()){const{origin:e,direction:n}=t,{x:s,y:o,z:r}=e,{x:a,y:l,z:c}=n;let h=null,u=$E;for(const d of this.mobs){const p=wi[d.kind],m=p.width/2,v=o2(s,o,r,a,l,c,d.pos.x-m,d.pos.y,d.pos.z-m,d.pos.x+m,d.pos.y+p.height,d.pos.z+m);v!==null&&v<u&&(u=v,h=d)}return h!==null&&_d({x:s,y:o,z:r},{x:a,y:l,z:c},u,(p,m,v)=>we(this.world.getBlock(p,m,v)))?null:h}attackMob(t,e){this.hand.swing();const n=this.inv[this.hotbar.index],s=s2(n?n.id:null),o=n?ko(n.id):null;if(o){for(let u=o.kind==="sword"?1:2;u>0;u--)jd(this.inv,this.hotbar.index,o.maxDurability);this.hotbar.render(this.inv)}const r=e==null?void 0:e.direction,a=r?Math.hypot(r.x,r.z):0,l=r&&a>1e-6?r.x/a:Math.cos(this.look.yaw),c=r&&a>1e-6?r.z/a:Math.sin(this.look.yaw),h=Yl(t,s,{x:l,z:c},this.mobRng);Object.assign(t,h.mob);for(const u of h.events)if(u.kind==="drops")for(const d of u.items)this.drops.push(bn(d.id,Math.floor(u.pos.x),Math.floor(u.pos.y),Math.floor(u.pos.z),Math.random,d.count));else if(u.kind==="death"){const d=this.mobs.indexOf(t);d>=0&&this.mobs.splice(d,1)}}placeBlock(t=this.rayHit()){const e=this.hotbar.index,n=this.inv[e];if(!n||n.count<=0||n.id>=256||!t)return;const s=pd(this.world.getBlock(t.x,t.y,t.z)),o=s?t.x:t.x+t.nx,r=s?t.y:t.y+t.ny,a=s?t.z:t.z+t.nz,l=this.world.getBlock(o,r,a);if(!pd(l)||this.overlapsPlayer(o,r,a))return;const c=this.creative?n.id:Kd(this.inv,e);c!==null&&(this.edit(o,r,a,c),this.hotbar.render(this.inv),this.hand.swing())}overlapsPlayer(t,e,n){const s=this.player.pos,o=ya/2;return t<s.x+o&&t+1>s.x-o&&e<s.y+Ki&&e+1>s.y&&n<s.z+o&&n+1>s.z-o}updateDayNight(){const t=ra(this.worldTime,this.dimension),e=this.worldTime/je*Math.PI*2,n=Math.sin(e);let s=0;this.dimension==="overworld"&&n>-.15&&(s=Math.max(0,1-Math.abs(n)/.3)*Math.min(1,(n+.15)/.15)),this.renderer.setSkyColors(t.skyTop,t.skyHorizon,e,s,n,this.dimension==="overworld");const o=this.normalFog;o&&o.color.setRGB(t.skyHorizon[0],t.skyHorizon[1],t.skyHorizon[2],ae);const r=t.worldTint,a=Math.max(r[0],r[1],r[2],.001);this.chunks.setTint([r[0]/a,r[1]/a,r[2]/a]);const l=zp(this.worldTime),c=this.lightingQuality==="off"?l:l*.86;this.skyDarkenNow=c,this.chunks.setSkyDarken(c),this.chunks.setSkyMul(1-l/11),this.chunks.setSkyReflection(t.skyHorizon,t.skyTop);const h=this.worldTime/je*Math.PI*2;this.chunks.setSunDir(Math.cos(h),Math.sin(h),.1)}updateGodRays(){if(this.lightingQuality==="off")return;const t=this.worldTime/je*Math.PI*2,e=Math.cos(t),n=Math.sin(t),s=.1,o=Math.hypot(e,n,s)||1,r=n/o,a=this.renderer.camera;a.getWorldDirection(this._godFwd);const l=this._godFwd.x*(e/o)+this._godFwd.y*(n/o)+this._godFwd.z*(s/o),c=500;this._godSunWorld.set(a.position.x+e/o*c,a.position.y+n/o*c,a.position.z+s/o*c),this._godSunWorld.project(a);const h=this._godSunWorld,u=h.x*.5+.5,d=h.y*.5+.5,p=u>=0&&u<=1&&d>=0&&d<=1;let m=0;this.dimension==="overworld"&&r>0&&l>0&&p&&(m=Math.min(.6,r*2.6));const v=1,f=.6+r*.7,g=.3+r*1;this._godSunColor.setRGB(v,Math.min(1,f),Math.min(1,g)),this._godSunUV.set(u,d),this.renderer.setGodRays({quality:this.lightingQuality,sunUV:this._godSunUV,intensity:m,sunColor:this._godSunColor})}updateWater(){const t=this.renderer.camera.position,e=this.pointInWater(t.x,t.y,t.z);this.renderer.scene.fog=e&&this.lightingQuality==="off"?this.underFog:this.normalFog,this.renderer.setUnderwater(e),this.chunks.setCameraUnderwater(e),this.hand.setUnderwater(e),this.underwaterEl&&(this.underwaterEl.style.display=e&&this.lightingQuality==="off"?"block":"none")}updateHighlight(){const t=this.rayHit();t?(this.highlight.position.set(t.x+.5,t.y+.5,t.z+.5),this.highlight.visible=!0):this.highlight.visible=!1}updateCamera(t){const e=this.prev.pos,n=this.player.pos,s=e.x+(n.x-e.x)*t,o=e.y+(n.y-e.y)*t,r=e.z+(n.z-e.z)*t,a=this.renderer.camera;this.camEye+=((this.crouching?bw:Gn)-this.camEye)*.3;const l=this.camEye;a.position.set(s,o+l,r);const c=Math.cos(this.look.yaw),h=Math.sin(this.look.yaw),u=Math.cos(this.look.pitch),d=Math.sin(this.look.pitch);a.lookAt(s+c*u,o+l+d,r+h*u)}}const dc=4;class a2{constructor(t,e=4242){_(this,"gl");_(this,"scene",new Ks);_(this,"camera",new Ge(70,1,.1,1e3));_(this,"world");_(this,"chunks");_(this,"running",!1);_(this,"x",.5);_(this,"z",.5);_(this,"heading",.7);_(this,"y",175);_(this,"onResize",()=>this.resize());var n,s;this.gl=new up({canvas:t,antialias:!1}),this.gl.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene.background=ZM(),this.scene.fog=new $s(vp,40,dc*16),this.camera.layers.enable(Zc),this.world=new Up(e),this.seekWater(),this.chunks=new Xp(this.scene,this.world,Ec()),this.chunks.update(Jt(Math.floor(this.x)),Jt(Math.floor(this.z)),dc,999),this.resize(),window.addEventListener("resize",this.onResize),window.addEventListener("orientationchange",this.onResize),(n=window.visualViewport)==null||n.addEventListener("resize",this.onResize),(s=window.visualViewport)==null||s.addEventListener("scroll",this.onResize)}seekWater(){for(let t=4;t<120;t+=3)for(let e=0;e<12;e++){const n=e/12*Math.PI*2,s=Math.round(Math.cos(n)*t),o=Math.round(Math.sin(n)*t);if(ei(this.world.getBlock(s,ee,o))){this.heading=n,this.x=s-Math.cos(n)*14+.5,this.z=o-Math.sin(n)*14+.5;return}}}resize(){const{width:t,height:e}=_p(window);this.gl.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}async preload(t=dc){const e=Jt(Math.floor(this.x)),n=Jt(Math.floor(this.z));for(let s=-t;s<=t;s++)for(let o=-t;o<=t;o++)this.world.request(e+o,n+s);await new Promise(s=>{const o=()=>{let r=!0;for(let a=-t;a<=t&&r;a++)for(let l=-t;l<=t&&r;l++)this.world.peek(e+l,n+a)||(r=!1);r?s():setTimeout(o,30)};o()});for(let s=0;s<600&&(s<3||this.chunks.meshBusy());s++)this.chunks.update(e,n,t,999),this.chunks.flushMesh(999),await new Promise(o=>requestAnimationFrame(()=>o()))}start(){if(this.running)return;this.running=!0;const t=()=>{this.running&&(requestAnimationFrame(t),this.heading+=6e-4,this.camera.position.set(this.x,this.y,this.z),this.camera.lookAt(this.x+Math.cos(this.heading)*26,this.y-17,this.z+Math.sin(this.heading)*26),this.chunks.flushMesh(2),this.gl.render(this.scene,this.camera))};requestAnimationFrame(t)}stop(){this.running=!1}dispose(){var t,e;this.running=!1,window.removeEventListener("resize",this.onResize),window.removeEventListener("orientationchange",this.onResize),(t=window.visualViewport)==null||t.removeEventListener("resize",this.onResize),(e=window.visualViewport)==null||e.removeEventListener("scroll",this.onResize),this.chunks.dispose(),this.world.dispose(),this.gl.dispose(),this.gl.forceContextLoss()}}function l2(){if(document.getElementById("mw-settings-css"))return;const i=document.createElement("style");i.id="mw-settings-css",i.textContent=`
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
    #settings input[type=checkbox]:checked::after{content:'';position:absolute;inset:4px;background:#0e1a28;}`,document.head.appendChild(i)}class c2{constructor(t){_(this,"root");_(this,"settings");_(this,"onChange",null);this.root=t,this.settings=Ip(),t.classList.remove("hidden"),l2(),t.style.cssText="position:fixed;inset:0;z-index:40;display:none;align-items:center;justify-content:center;background:#0e1a28;overflow-y:auto;overscroll-behavior:contain;touch-action:pan-y;-webkit-overflow-scrolling:touch;",t.innerHTML=`
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
      </div>`;const e=t.querySelector("#set-vol"),n=t.querySelector("#set-vol-val"),s=t.querySelector("#set-lighting"),o=t.querySelector("#set-tex-cartoon"),r=t.querySelector("#set-tex-classic"),a=()=>{o.classList.toggle("active",this.settings.texturePack==="cartoon"),r.classList.toggle("active",this.settings.texturePack==="classic"),o.style.outline=this.settings.texturePack==="cartoon"?"2px solid #6ab0ff":"none",r.style.outline=this.settings.texturePack==="classic"?"2px solid #6ab0ff":"none"},l=()=>{var m;fS(this.settings),(m=this.onChange)==null||m.call(this,this.settings)},c=m=>{this.settings={...this.settings,texturePack:m},a(),l()},h=()=>e.style.setProperty("--fill",`${this.settings.volume}%`);e.addEventListener("input",()=>{this.settings={...this.settings,volume:Number(e.value)},n.textContent=`${this.settings.volume}%`,h(),l()}),s.addEventListener("change",()=>{this.settings={...this.settings,lightingQuality:s.value},l()}),o.addEventListener("click",()=>c("cartoon")),r.addEventListener("click",()=>c("classic"));const u=t.querySelector("#set-rd"),d=t.querySelector("#set-rd-val"),p=()=>u.style.setProperty("--fill",`${(this.settings.renderDistance-3)/9*100}%`);u.addEventListener("input",()=>{this.settings={...this.settings,renderDistance:Number(u.value)},d.textContent=String(this.settings.renderDistance),p(),l()}),t.querySelector("#set-close").addEventListener("click",()=>this.hide()),e.value=String(this.settings.volume),n.textContent=`${this.settings.volume}%`,h(),s.value=this.settings.lightingQuality,u.value=String(this.settings.renderDistance),d.textContent=String(this.settings.renderDistance),p(),a()}get current(){return this.settings}show(){this.root.style.display="flex"}hide(){this.root.style.display="none"}get visible(){return this.root.style.display!=="none"}}var h2={};const u2=1e3/15,d2=1e4,Uc="wss://mineworld-multiplayer-nornttyy.onrender.com/ws",kc=5e3;function Vo(i){return typeof i=="object"&&i!==null}function cn(i){return typeof i=="number"&&Number.isFinite(i)}function Co(i){return typeof i=="number"&&Number.isInteger(i)}function dh(i){return i==="overworld"||i==="nether"?i:null}function Ym(i){return i==="survival"||i==="creative"?i:null}function Ic(i){if(!Vo(i))return null;const t=dh(i.dimension);return typeof i.id!="string"||typeof i.name!="string"||typeof i.skin!="string"||!cn(i.x)||!cn(i.y)||!cn(i.z)||!cn(i.yaw)||!cn(i.pitch)||t===null?null:{id:i.id,name:i.name,skin:i.skin,x:i.x,y:i.y,z:i.z,yaw:i.yaw,pitch:i.pitch,dimension:t}}function Zs(i){if(!Vo(i))return null;const t=dh(i.dimension);return t===null||!Co(i.x)||!Co(i.y)||!Co(i.z)||!Co(i.id)?null:{dimension:t,x:i.x,y:i.y,z:i.z,id:i.id}}function f2(i){return Number.isInteger(i.seed)&&i.seed>=0&&i.seed<=2e9&&Ym(i.gameMode)!==null&&cn(i.worldTime)&&Math.abs(i.worldTime)<=2e9&&Array.isArray(i.edits)&&i.edits.length<=kc&&i.edits.every(t=>Zs(t)!==null)}function p2(i){const t=[];for(const[e,n]of Object.entries(i.edits)){const s=Dc(e),o={dimension:s.dim,x:s.x,y:s.y,z:s.z,id:n};Zs(o)!==null&&t.push(o)}if(t.length>kc)throw new Error(`这个世界有 ${t.length} 个方块改动，联机房间最多可带入 ${kc} 个。`);return{seed:Math.floor(i.seed),gameMode:i.gameMode??"survival",worldTime:i.worldTime??1e3,edits:t}}function m2(i){if(!Vo(i)||i.type!=="welcome"||typeof i.id!="string"||!Vo(i.room))return null;const t=Ym(i.room.gameMode);if(typeof i.room.id!="string"||!Co(i.room.seed)||t===null||!cn(i.room.worldTime)||!Array.isArray(i.players)||!Array.isArray(i.edits))return null;const e=i.players.map(Ic),n=i.edits.map(Zs);return e.some(s=>s===null)||n.some(s=>s===null)?null:{type:"welcome",id:i.id,room:{id:i.room.id,seed:i.room.seed,gameMode:t,worldTime:i.room.worldTime},players:e,edits:n}}function g2(i){if(!Vo(i)||typeof i.type!="string")return null;if(i.type==="welcome")return m2(i);if(i.type==="error"&&typeof i.message=="string")return{type:"error",message:i.message};if(i.type==="player-join"){const t=Ic(i.player);return t?{type:"player-join",player:t}:null}if(i.type==="player-leave"&&typeof i.id=="string")return{type:"player-leave",id:i.id};if(i.type==="state"&&typeof i.id=="string"){const t=Ic(i.player);return t?{type:"state",id:i.id,player:t}:null}if(i.type==="block"){const t=Zs(i.edit),e=Zs(i),n=t??e;return n?{type:"block",edit:n}:null}return i.type==="time"&&cn(i.worldTime)?{type:"time",worldTime:i.worldTime}:null}function fh(i){return i.toUpperCase().replace(/[^A-Z0-9-]/g,"").slice(0,16)}function $m(i){return i.replace(/[\u0000-\u001f\u007f]/g,"").trim().slice(0,16)||"玩家"}function v2(){const i=new URLSearchParams(window.location.search).get("server"),t=localStorage.getItem("mineworld.multiplayer.server"),e=h2.VITE_MULTIPLAYER_URL,n=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",s=i||t||e||(n?`ws://${window.location.hostname}:8787/ws`:Uc);try{const o=new URL(s);if(o.protocol==="ws:"||o.protocol==="wss:")return o.toString()}catch{}return Uc}class ph{constructor(t){_(this,"socket");_(this,"players",new Map);_(this,"_id","");_(this,"_room",null);_(this,"_initialEdits",[]);_(this,"_closed",!1);_(this,"lastStateSent",-1/0);_(this,"disconnectReason","");_(this,"blockHandler",null);_(this,"worldTimeHandler",null);_(this,"pendingBlocks",[]);_(this,"pendingWorldTime",null);_(this,"onPlayersChanged",null);_(this,"onDisconnect",null);this.socket=t}static connect(t){var o;const e=fh(t.room);if(e.length<3)return Promise.reject(new Error("房间号至少需要 3 个字符"));const n=$m(t.name);if(t.action!=="create"&&t.world!==void 0)return Promise.reject(new Error("只有创建房间时才能带入本地世界"));if(t.world!==void 0&&!f2(t.world))return Promise.reject(new Error("当前世界数据不适合开启联机房间"));const s=((o=t.world)==null?void 0:o.gameMode)??t.gameMode??"creative";return new Promise((r,a)=>{let l=!1,c=0,h;try{h=new ph(new WebSocket(t.url))}catch{a(new Error("联机地址无效"));return}const u=d=>{l||(l=!0,window.clearTimeout(c),h.socket.close(),a(new Error(d)))};c=window.setTimeout(()=>u("连接超时，请检查联机服务器是否已启动"),d2),h.socket.addEventListener("open",()=>{h.send({type:"join",action:t.action,room:e,name:n,skin:"default",gameMode:s,world:t.world})}),h.socket.addEventListener("message",d=>{h.receive(d.data)&&!l&&(l=!0,window.clearTimeout(c),r(h))}),h.socket.addEventListener("error",()=>{const d=t.url===Uc;u(d?"联机服务器暂时不可用或仍在启动，请稍后重试。":"无法连接联机服务器")}),h.socket.addEventListener("close",d=>{const p=h.disconnectReason||(d.code===1e3?"已断开联机":"联机连接已断开");l?h.close(p):u(p)})})}get id(){return this._id}get room(){if(this._room===null)throw new Error("联机房间尚未就绪");return this._room}get isConnected(){return!this._closed&&this.socket.readyState===WebSocket.OPEN}get playerCount(){return this.players.size+(this._id?1:0)}get remotePlayers(){return[...this.players.values()]}get initialEdits(){return this._initialEdits}sendState(t){if(!this.isConnected)return;const e=performance.now();e-this.lastStateSent<u2||!cn(t.x)||!cn(t.y)||!cn(t.z)||!cn(t.yaw)||!cn(t.pitch)||dh(t.dimension)===null||(this.lastStateSent=e,this.send({type:"state",player:t}))}sendBlock(t){!this.isConnected||Zs(t)===null||this.send({type:"block",...t})}setBlockHandler(t){if(this.blockHandler=t,!!t)for(const e of this.pendingBlocks.splice(0))t(e)}setWorldTimeHandler(t){this.worldTimeHandler=t,t&&this.pendingWorldTime!==null&&(t(this.pendingWorldTime),this.pendingWorldTime=null)}disconnect(t="已退出房间"){this.disconnectReason=t,this._closed||this.socket.close(1e3,t.slice(0,120)),this.close(t)}receive(t){var s,o,r,a;let e;try{e=JSON.parse(typeof t=="string"?t:String(t))}catch{return null}const n=g2(e);if(!n)return null;if(n.type==="error")return this.disconnectReason=n.message,this.socket.close(1008,n.message.slice(0,120)),null;if(n.type==="welcome"){this._id=n.id,this._room=n.room,this._initialEdits=n.edits,this.players.clear();for(const l of n.players)l.id!==this._id&&this.players.set(l.id,l);return(s=this.onPlayersChanged)==null||s.call(this),n}if(n.type==="player-join")n.player.id!==this._id&&this.players.set(n.player.id,n.player),(o=this.onPlayersChanged)==null||o.call(this);else if(n.type==="player-leave")this.players.delete(n.id),(r=this.onPlayersChanged)==null||r.call(this);else if(n.type==="state")n.id!==this._id&&this.players.set(n.id,n.player),(a=this.onPlayersChanged)==null||a.call(this);else if(n.type==="block"){const l=n.edit;this.blockHandler?this.blockHandler(l):this.pendingBlocks.push(l)}else n.type==="time"&&(this.worldTimeHandler?this.worldTimeHandler(n.worldTime):this.pendingWorldTime=n.worldTime);return null}send(t){this.socket.readyState===WebSocket.OPEN&&this.socket.send(JSON.stringify(t))}close(t){var e,n;this._closed||(this._closed=!0,this.players.size>0&&(this.players.clear(),(e=this.onPlayersChanged)==null||e.call(this)),(n=this.onDisconnect)==null||n.call(this,t))}}const Qs=document.getElementById("app"),Lt=i=>document.getElementById(i),si=Dm();document.documentElement.classList.toggle("touch-device",si);si&&Kb();const mh=Lt("menubg");let Ze=new a2(mh);const Js=Lt("menu"),Da=Lt("worldlist"),to=Lt("multiplayer"),ii=Lt("pause"),fc=Lt("world-rows"),Ws=Lt("online-hud");let Zt=null,Ie=null;const qa=Lt("boot"),_2=qa.querySelector(".boot-tip"),an=(i,t="加载中…")=>{qa.classList.toggle("hidden",!i),i&&(_2.textContent=t)};let Km=!1;const jm=i=>{Km||an(!0,`出错了：${i}（请把这行字发给开发）`)};window.addEventListener("error",i=>jm(i.message||String(i.error)));window.addEventListener("unhandledrejection",i=>jm(String(i.reason&&(i.reason.message||i.reason.stack)||i.reason)));const La=["100% 纯方块!","无限的世界!","由 Three.js 驱动!","会挖会放会跳!","试试双击 W 疾跑~","支持 WebGL2!","像素手工打造!","水快会流动了!","也试试我的世界!"];Lt("splash").textContent=La[Math.floor(Math.random()*La.length)];const Pf=qa.querySelector(".boot-splash");Pf&&(Pf.textContent=La[Math.floor(Math.random()*La.length)]);const sa=si?["提示: 左侧滑动方向盘移动，空白处拖动视角","提示: 双击前进后按住可以疾跑","提示: 轻点空白处可互动或放置方块","提示: 长按空白处可挖方块或攻击","提示: 可以直接点快捷栏切换物品","提示: 石头要用镐才挖得动"]:["提示: 按住左键挖方块","提示: 双击 W 可以疾跑","提示: 右键放方块(会消耗物品)","提示: 数字键 1-9 / 滚轮 切换物品","提示: 石头要用镐才挖得动","提示: 砍树 → 木板 → 工作台 → 工具","提示: 熔炉能把铁矿炼成铁锭","提示: 天黑了小心怪物"],pc=qa.querySelector(".boot-hint");if(pc){let i=Math.floor(Math.random()*sa.length);pc.textContent=sa[i],setInterval(()=>{i=(i+1)%sa.length,pc.textContent=sa[i]},2600)}function Pn(i){Lt("crosshair").style.display=i?"block":"none",Lt("hotbar").style.display=i?"flex":"none",Lt("status").style.display=i?"flex":"none",Ws.classList.toggle("hidden",!i||Ie===null),Zt==null||Zt.setTouchActive(i&&si)}function Qi(i){for(const e of[Js,Da,to,ii])e.classList.add("hidden");Lt("newworld").classList.add("hidden"),i&&i.classList.remove("hidden"),Pn(!1);const t=i===Js||i===Da||i===to;mh.style.display=t?"block":"none",t?Ze==null||Ze.start():Ze==null||Ze.stop()}const Zm=i=>new Promise(t=>setTimeout(t,i));(async()=>{an(!0,"加载中…");try{Ze&&await Promise.race([Ze.preload(),Zm(8e3)])}catch(i){console.error("[menubg] preload 失败:",i)}Qi(Js),an(!1)})();const gh=new c2(Lt("settings"));gh.onChange=i=>{Zt==null||Zt.setTexturePack(i.texturePack),Zt==null||Zt.setLightingQuality(i.lightingQuality),Zt==null||Zt.setRenderDistance(i.renderDistance)};Lt("settings-btn").addEventListener("click",()=>gh.show());Lt("settings-btn-pause").addEventListener("click",()=>gh.show());Lt("play").addEventListener("click",()=>E2());const eo=Lt("mp-name"),Yi=Lt("mp-room"),Df=Lt("mp-status"),Nc=Lt("mp-create"),Fc=Lt("mp-join"),x2=Lt("mp-title"),y2=Lt("mp-intro"),M2=Lt("mp-mode-field"),Qm=Lt("mp-back");let Ko="join",ji=null,Jm="creative",mc=!1;function No(i,t=!1){Df.textContent=i,Df.classList.toggle("error",t)}function t0(i){Jm=i,Lt("mp-current-mode").textContent=i==="creative"?"创造模式":"生存模式",Lt("mp-mode-desc").textContent=i==="creative"?"适合和朋友一起搭建；玩家与方块会实时同步。":"玩家与方块会实时同步；生物、掉落物和背包暂各自本地运行。"}function e0(){try{eo.value=localStorage.getItem("mineworld.multiplayer.name")??""}catch{}}function n0(i){Ko=i;const t=i==="host";x2.textContent=t?"开启联机房间":"加入联机房间",y2.textContent=t?"当前单人世界会成为这个房间的世界。把房间号告诉朋友即可一起游玩。":"输入朋友给你的房间号，即可进入同一个世界。",M2.classList.toggle("hidden",!t),Nc.classList.toggle("hidden",!t),Fc.classList.toggle("hidden",t),Qm.textContent=t?"返回暂停菜单":"返回"}function i0(){const i="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let t="MW";for(let e=0;e<5;e++)t+=i[Math.floor(Math.random()*i.length)];return t}function Lf(i=""){if(!Ie){Ws.classList.add("hidden");return}Ws.textContent=i||`联机 · 房间 ${Ie.room.id.toUpperCase()}
${Ie.playerCount} 名玩家`}function vh(){if(Ko==="join"){Qi(to);return}for(const i of[Js,Da,ii])i.classList.add("hidden");Lt("newworld").classList.add("hidden"),to.classList.remove("hidden"),Pn(!1),mh.style.display="none",Ze==null||Ze.stop()}function S2(){n0("join"),ji=null,e0(),Yi.value=fh(new URLSearchParams(location.search).get("room")??Yi.value),t0("creative"),No("输入房间号后加入。"),vh(),eo.focus()}function w2(){!Zt||Ie!==null||(ji=Zt.snapshot(),n0("host"),e0(),Yi.value=i0(),t0(ji.gameMode??"survival"),No("房间号已生成。开启后，把它告诉朋友。"),vh(),eo.focus())}function b2(){if(Ko==="host"&&Zt&&Ie===null){ji=null,to.classList.add("hidden"),ii.classList.remove("hidden"),Pn(!1);return}ji=null,Qi(Js)}function s0(i){if(Ie=i,Lt("save-quit").textContent=i?"退出房间":"保存并退出",Lt("open-room").classList.toggle("hidden",i!==null),!i){Ws.classList.add("hidden");return}i.onPlayersChanged=()=>Lf(),i.onDisconnect=t=>{Ie===i&&(Ws.classList.remove("hidden"),Ws.textContent=`联机已断开
${t}`)},Lf()}function T2(i){const t={};for(const n of i.initialEdits)t[As(n.dimension,n.x,n.y,n.z)]=n.id;const e=i.room;return{id:`online:${e.id}:${e.seed}`,name:`联机 · ${e.id.toUpperCase()}`,seed:e.seed,gameMode:e.gameMode,lastPlayed:Date.now(),edits:t,worldTime:e.worldTime}}async function _h(i){if(mc)return;const t=i==="create"&&Ko==="host"?ji:null;if(i==="create"&&t===null){No("请先进入一个单人世界，再从暂停菜单开启房间。",!0);return}let e=fh(Yi.value);if(i==="create"&&e.length<3&&(e=i0()),e.length<3){No("请输入至少 3 位的房间号。",!0),Yi.focus();return}const n=$m(eo.value);Yi.value=e,eo.value=n;try{localStorage.setItem("mineworld.multiplayer.name",n)}catch{}mc=!0,Nc.disabled=!0,Fc.disabled=!0,Qi(null),an(!0,i==="create"?"正在创建联机房间…":"正在加入联机房间…");try{const s=await ph.connect({url:v2(),action:i,room:e,name:n,gameMode:Jm,world:t?p2(t):void 0});if(t){if(!Zt||!Zt.attachMultiplayer(s))throw s.disconnect("无法切换到联机房间"),new Error("当前世界已经不在单人状态，请返回后重试。");s0(s),ji=null,to.classList.add("hidden"),ii.classList.add("hidden"),an(!1),Pn(!0),si||Qs.requestPointerLock()}else Sh(T2(s),s)}catch(s){an(!1),No(s instanceof Error?s.message:"连接联机服务器失败。",!0),vh()}finally{mc=!1,Nc.disabled=!1,Fc.disabled=!1}}Lt("multiplayer-play").addEventListener("click",()=>S2());Lt("open-room").addEventListener("click",()=>w2());Lt("mp-create").addEventListener("click",()=>void _h("create"));Lt("mp-join").addEventListener("click",()=>void _h("join"));Qm.addEventListener("click",()=>b2());for(const i of[eo,Yi])i.addEventListener("keydown",t=>{t.key==="Enter"&&_h(Ko==="host"?"create":"join")});Lt("fullscreen").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()});Lt("about").addEventListener("click",()=>Lt("about-panel").classList.remove("hidden"));Lt("about-close").addEventListener("click",()=>Lt("about-panel").classList.add("hidden"));function E2(){o0(),Qi(Da)}function o0(){fc.innerHTML="";const i=mE();if(i.length===0){const t=document.createElement("div");t.className="world-empty",t.textContent="还没有世界, 点 创建新世界 开始吧",fc.appendChild(t);return}for(const t of i){const e=document.createElement("div");e.className="world-row";const n=document.createElement("span");n.className="wname",n.textContent=t.name;const s=document.createElement("span");s.className="wmeta",s.textContent=`种子 ${t.seed}${t.gameMode==="creative"?" · 创造":""}`;const o=document.createElement("span");o.className="wdel",o.textContent="删除",o.addEventListener("click",r=>{r.stopPropagation(),_E(t.id),o0()}),e.append(n,s,o),e.addEventListener("click",()=>Sh(t)),fc.appendChild(e)}}const xh=Lt("newworld"),Ua=Lt("nw-name"),yh=Lt("nw-seed"),A2=Lt("nw-mode-desc");let r0="survival";function Mh(i){r0=i,Lt("nw-survival").classList.toggle("active",i==="survival"),Lt("nw-creative").classList.toggle("active",i==="creative"),A2.textContent=i==="creative"?"无限方块、自由飞行（双击空格）、无敌不饿——专心建造。":"挖矿、合成、打怪，会饿会死。"}function a0(){const i=vE(Ua.value,gE(yh.value)??void 0,r0);xh.classList.add("hidden"),Sh(i)}Lt("nw-survival").addEventListener("click",()=>Mh("survival"));Lt("nw-creative").addEventListener("click",()=>Mh("creative"));Lt("create-world").addEventListener("click",()=>{Ua.value="",yh.value="",Mh("survival"),xh.classList.remove("hidden"),Ua.focus()});Lt("nw-create").addEventListener("click",a0);Lt("nw-cancel").addEventListener("click",()=>xh.classList.add("hidden"));for(const i of[Ua,yh])i.addEventListener("keydown",t=>{t.key==="Enter"&&a0()});Lt("worldlist-back").addEventListener("click",()=>Qi(Js));function Sh(i,t=null){if(Zt){t==null||t.disconnect("游戏已经在运行");return}s0(t),Qi(null),an(!0,"进入中…");try{Ze==null||Ze.dispose()}catch(e){console.error("[startGame] 菜单背景释放出错(忽略,继续):",e)}Ze=null,requestAnimationFrame(()=>requestAnimationFrame(async()=>{try{an(!0,"进入中…①构建世界"),Zt=new r2(Qs,i,t),an(!0,"进入中…②生成出生区块"),await Promise.race([Zt.preloadSpawn(),Zm(12e3)]),an(!0,"进入中…③启动渲染"),Zt.start(),Km=!0,window.__mw=Zt,an(!1),si?(Pn(!0),Zt.setTouchActive(!0)):Qs.requestPointerLock()}catch(e){console.error("[startGame] 进入游戏失败:",e),Ie===t&&(t==null||t.disconnect("进入世界失败"),Ie=null);const n=e instanceof Error?`${e.stack??e.message}`:String(e);an(!0,`进入失败：${n}`)}}))}function jo(){Zt&&Ie===null&&Wm(Zt.snapshot())}Lt("resume").addEventListener("click",()=>{si?(ii.classList.add("hidden"),Pn(!0)):Qs.requestPointerLock()});Lt("save-quit").addEventListener("click",()=>{const i=Ie!==null;jo(),Ie==null||Ie.disconnect("玩家退出房间"),an(!0,i?"正在退出联机房间…":"保存并返回主菜单…"),location.reload()});const ka=Lt("death");document.addEventListener("pointerlockchange",()=>{if(si)return;if(document.pointerLockElement===Qs)ii.classList.add("hidden"),ka.style.display="none",Pn(!0);else if(Zt){if(jo(),Zt.isCraftingOpen())return;Pn(!1),Zt.isDead()?ka.style.display="flex":ii.classList.remove("hidden")}});window.addEventListener("mineworld:touch-pause",()=>{!Zt||Zt.isDead()||(jo(),Pn(!1),ii.classList.remove("hidden"))});window.addEventListener("mineworld:touch-death",()=>{Pn(!1),ii.classList.add("hidden"),ka.style.display="flex"});Lt("respawn").addEventListener("click",()=>{Zt&&(Zt.respawn(),ka.style.display="none",si?Pn(!0):Qs.requestPointerLock())});setInterval(()=>{Zt!=null&&Zt.isGameplayActive()&&jo()},15e3);window.addEventListener("beforeunload",()=>{jo(),Ie==null||Ie.disconnect("页面关闭")});
