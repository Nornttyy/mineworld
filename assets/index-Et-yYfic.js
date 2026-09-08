var wg=Object.defineProperty;var Mg=(i,t,e)=>t in i?wg(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var y=(i,t,e)=>(Mg(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rh="165",Sg=0,bu=1,bg=2,Bp=1,zp=2,di=3,Bi=0,Ge=1,Qe=2,Ni=0,sr=1,th=2,Tu=3,Eu=4,Tg=5,rs=100,Eg=101,Ag=102,Rg=103,Cg=104,Dg=200,Pg=201,Lg=202,kg=203,eh=204,nh=205,Ig=206,Ug=207,Ng=208,Fg=209,Og=210,Bg=211,zg=212,Hg=213,Wg=214,Gg=0,Vg=1,Xg=2,Xa=3,qg=4,$g=5,Yg=6,Kg=7,Hp=0,jg=1,Zg=2,gi=0,Qg=1,Jg=2,tv=3,ev=4,nv=5,iv=6,sv=7,Wp=300,mr=301,gr=302,ih=303,sh=304,gl=306,bn=1e3,cs=1001,rh=1002,de=1003,Gp=1004,Ro=1005,Se=1006,Il=1007,fi=1008,xi=1009,rv=1010,ov=1011,qa=1012,Vp=1013,zi=1014,Di=1015,Wi=1016,Xp=1017,qp=1018,vr=1020,av=35902,lv=1021,cv=1022,Mn=1023,hv=1024,uv=1025,rr=1026,_r=1027,$p=1028,Yp=1029,dv=1030,Kp=1031,jp=1033,Ul=33776,Nl=33777,Fl=33778,Ol=33779,Au=35840,Ru=35841,Cu=35842,Du=35843,Pu=36196,Lu=37492,ku=37496,Iu=37808,Uu=37809,Nu=37810,Fu=37811,Ou=37812,Bu=37813,zu=37814,Hu=37815,Wu=37816,Gu=37817,Vu=37818,Xu=37819,qu=37820,$u=37821,Bl=36492,Yu=36494,Ku=36495,fv=36283,ju=36284,Zu=36285,Qu=36286,pv=3200,Zp=3201,Qp=0,mv=1,yn="",ue="srgb",Gi="srgb-linear",Ch="display-p3",vl="display-p3-linear",$a="linear",xe="srgb",Ya="rec709",Ka="p3",ys=7680,Ju=519,gv=512,vv=513,_v=514,Jp=515,xv=516,yv=517,wv=518,Mv=519,oh=35044,td=35048,ed="300 es",pi=2e3,ja=2001;class Rr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nd=1234567;const or=Math.PI/180,oo=180/Math.PI;function vi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function je(i,t,e){return Math.max(t,Math.min(e,i))}function Dh(i,t){return(i%t+t)%t}function Sv(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function bv(i,t,e){return i!==t?(e-i)/(t-i):0}function Qr(i,t,e){return(1-e)*i+e*t}function Tv(i,t,e,n){return Qr(i,t,1-Math.exp(-e*n))}function Ev(i,t=1){return t-Math.abs(Dh(i,t*2)-t)}function Av(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Rv(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Cv(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Dv(i,t){return i+Math.random()*(t-i)}function Pv(i){return i*(.5-Math.random())}function Lv(i){i!==void 0&&(nd=i);let t=nd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kv(i){return i*or}function Iv(i){return i*oo}function Uv(i){return(i&i-1)===0&&i!==0}function Nv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ov(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Gn={DEG2RAD:or,RAD2DEG:oo,generateUUID:vi,clamp:je,euclideanModulo:Dh,mapLinear:Sv,inverseLerp:bv,lerp:Qr,damp:Tv,pingpong:Ev,smoothstep:Av,smootherstep:Rv,randInt:Cv,randFloat:Dv,randFloatSpread:Pv,seededRandom:Lv,degToRad:kv,radToDeg:Iv,isPowerOfTwo:Uv,ceilPowerOfTwo:Nv,floorPowerOfTwo:Fv,setQuaternionFromProperEuler:Ov,normalize:ce,denormalize:Wn};class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,s,r,o,a,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],v=s[0],m=s[3],f=s[6],x=s[1],_=s[4],w=s[7],A=s[2],E=s[5],D=s[8];return r[0]=o*v+a*x+l*A,r[3]=o*m+a*_+l*E,r[6]=o*f+a*w+l*D,r[1]=c*v+h*x+u*A,r[4]=c*m+h*_+u*E,r[7]=c*f+h*w+u*D,r[2]=d*v+p*x+g*A,r[5]=d*m+p*_+g*E,r[8]=d*f+p*w+g*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(zl.makeScale(t,e)),this}rotate(t){return this.premultiply(zl.makeRotation(-t)),this}translate(t,e){return this.premultiply(zl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zl=new jt;function tm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bv(){const i=ao("canvas");return i.style.display="block",i}const id={};function Ph(i){i in id||(id[i]=!0,console.warn(i))}function zv(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const sd=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rd=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Co={[Gi]:{transfer:$a,primaries:Ya,toReference:i=>i,fromReference:i=>i},[ue]:{transfer:xe,primaries:Ya,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[vl]:{transfer:$a,primaries:Ka,toReference:i=>i.applyMatrix3(rd),fromReference:i=>i.applyMatrix3(sd)},[Ch]:{transfer:xe,primaries:Ka,toReference:i=>i.convertSRGBToLinear().applyMatrix3(rd),fromReference:i=>i.applyMatrix3(sd).convertLinearToSRGB()}},Hv=new Set([Gi,vl]),he={enabled:!0,_workingColorSpace:Gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Hv.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Co[t].toReference,s=Co[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Co[i].primaries},getTransfer:function(i){return i===yn?$a:Co[i].transfer}};function ar(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ws;class Wv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ws===void 0&&(ws=ao("canvas")),ws.width=t.width,ws.height=t.height;const n=ws.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ws}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ao("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ar(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ar(e[n]/255)*255):e[n]=ar(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gv=0;class em{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wl(s[o].image)):r.push(Wl(s[o]))}else r=Wl(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Wl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vv=0;class Xe extends Rr{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=cs,s=cs,r=Se,o=fi,a=Mn,l=xi,c=Xe.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=vi(),this.name="",this.source=new em(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bn:t.x=t.x-Math.floor(t.x);break;case cs:t.x=t.x<0?0:1;break;case rh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bn:t.y=t.y-Math.floor(t.y);break;case cs:t.y=t.y<0?0:1;break;case rh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Wp;Xe.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,s=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,w=(p+1)/2,A=(f+1)/2,E=(h+d)/4,D=(u+v)/4,k=(g+m)/4;return _>w&&_>A?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=D/n):w>A?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=E/s,r=k/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=D/r,s=k/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xv extends Rr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Se,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Xe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new em(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends Xv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class nm extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=de,this.minFilter=de,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class im extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=de,this.minFilter=de,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*v,x=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const A=Math.sqrt(_),E=Math.atan2(A,f*x);m=Math.sin(m*E)/A,a=Math.sin(a*E)/A}const w=a*x;if(l=l*m+d*w,c=c*m+p*w,h=h*m+g*w,u=u*m+v*w,m===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(od.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(od.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gl.copy(this).projectOnVector(t),this.sub(Gl)}reflect(t){return this.sub(Gl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gl=new I,od=new Vi;class vo{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Do.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Do.copy(n.boundingBox)),Do.applyMatrix4(t.matrixWorld),this.union(Do)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ir),Po.subVectors(this.max,Ir),Ms.subVectors(t.a,Ir),Ss.subVectors(t.b,Ir),bs.subVectors(t.c,Ir),Mi.subVectors(Ss,Ms),Si.subVectors(bs,Ss),Ki.subVectors(Ms,bs);let e=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-Ki.z,Ki.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,Ki.z,0,-Ki.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-Ki.y,Ki.x,0];return!Vl(e,Ms,Ss,bs,Po)||(e=[1,0,0,0,1,0,0,0,1],!Vl(e,Ms,Ss,bs,Po))?!1:(Lo.crossVectors(Mi,Si),e=[Lo.x,Lo.y,Lo.z],Vl(e,Ms,Ss,bs,Po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ri=[new I,new I,new I,new I,new I,new I,new I,new I],Un=new I,Do=new vo,Ms=new I,Ss=new I,bs=new I,Mi=new I,Si=new I,Ki=new I,Ir=new I,Po=new I,Lo=new I,ji=new I;function Vl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ji.fromArray(i,r);const a=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),l=t.dot(ji),c=e.dot(ji),h=n.dot(ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const qv=new vo,Ur=new I,Xl=new I;class _o{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):qv.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ur.subVectors(t,this.center);const e=Ur.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ur,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ur.copy(t.center).add(Xl)),this.expandByPoint(Ur.copy(t.center).sub(Xl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new I,ql=new I,ko=new I,bi=new I,$l=new I,Io=new I,Yl=new I;class Lh{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(oi.copy(this.origin).addScaledVector(this.direction,e),oi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ql.copy(t).add(e).multiplyScalar(.5),ko.copy(e).sub(t).normalize(),bi.copy(this.origin).sub(ql);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ko),a=bi.dot(this.direction),l=-bi.dot(ko),c=bi.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ql).addScaledVector(ko,d),p}intersectSphere(t,e){oi.subVectors(t.center,this.origin);const n=oi.dot(this.direction),s=oi.dot(oi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,oi)!==null}intersectTriangle(t,e,n,s,r){$l.subVectors(e,t),Io.subVectors(n,t),Yl.crossVectors($l,Io);let o=this.direction.dot(Yl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,t);const l=a*this.direction.dot(Io.crossVectors(bi,Io));if(l<0)return null;const c=a*this.direction.dot($l.cross(bi));if(c<0||l+c>o)return null;const h=-a*bi.dot(Yl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,g,v,m){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,v,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ts.setFromMatrixColumn(t,0).length(),r=1/Ts.setFromMatrixColumn(t,1).length(),o=1/Ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d+v*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($v,t,Yv)}lookAt(t,e,n){const s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ti.crossVectors(n,mn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ti.crossVectors(n,mn)),Ti.normalize(),Uo.crossVectors(mn,Ti),s[0]=Ti.x,s[4]=Uo.x,s[8]=mn.x,s[1]=Ti.y,s[5]=Uo.y,s[9]=mn.y,s[2]=Ti.z,s[6]=Uo.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],x=n[3],_=n[7],w=n[11],A=n[15],E=s[0],D=s[4],k=s[8],b=s[12],S=s[1],P=s[5],V=s[9],X=s[13],tt=s[2],et=s[6],J=s[10],it=s[14],Y=s[3],xt=s[7],Rt=s[11],At=s[15];return r[0]=o*E+a*S+l*tt+c*Y,r[4]=o*D+a*P+l*et+c*xt,r[8]=o*k+a*V+l*J+c*Rt,r[12]=o*b+a*X+l*it+c*At,r[1]=h*E+u*S+d*tt+p*Y,r[5]=h*D+u*P+d*et+p*xt,r[9]=h*k+u*V+d*J+p*Rt,r[13]=h*b+u*X+d*it+p*At,r[2]=g*E+v*S+m*tt+f*Y,r[6]=g*D+v*P+m*et+f*xt,r[10]=g*k+v*V+m*J+f*Rt,r[14]=g*b+v*X+m*it+f*At,r[3]=x*E+_*S+w*tt+A*Y,r[7]=x*D+_*P+w*et+A*xt,r[11]=x*k+_*V+w*J+A*Rt,r[15]=x*b+_*X+w*it+A*At,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+v*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],x=u*m*c-v*d*c+v*l*p-a*m*p-u*l*f+a*d*f,_=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,w=h*v*c-g*u*c+g*a*p-o*v*p-h*a*f+o*u*f,A=g*u*l-h*v*l-g*a*d+o*v*d+h*a*m-o*u*m,E=e*x+n*_+s*w+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/E;return t[0]=x*D,t[1]=(v*d*r-u*m*r-v*s*p+n*m*p+u*s*f-n*d*f)*D,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*f+n*l*f)*D,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*D,t[4]=_*D,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*D,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*D,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*D,t[8]=w*D,t[9]=(g*u*r-h*v*r-g*n*p+e*v*p+h*n*f-e*u*f)*D,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*f+e*a*f)*D,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*D,t[12]=A*D,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*D,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*m-e*a*m)*D,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*D,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,v=o*h,m=o*u,f=a*u,x=l*c,_=l*h,w=l*u,A=n.x,E=n.y,D=n.z;return s[0]=(1-(v+f))*A,s[1]=(p+w)*A,s[2]=(g-_)*A,s[3]=0,s[4]=(p-w)*E,s[5]=(1-(d+f))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+_)*D,s[9]=(m-x)*D,s[10]=(1-(d+v))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ts.set(s[0],s[1],s[2]).length();const o=Ts.set(s[4],s[5],s[6]).length(),a=Ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Nn.copy(this);const c=1/r,h=1/o,u=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,e.setFromRotationMatrix(Nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=pi){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(a===pi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ja)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=pi){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,p=(n+s)*h;let g,v;if(a===pi)g=(o+r)*u,v=-2*u;else if(a===ja)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ts=new I,Nn=new ge,$v=new I(0,0,0),Yv=new I(1,1,1),Ti=new I,Uo=new I,mn=new I,ad=new ge,ld=new Vi;class ni{constructor(t=0,e=0,n=0,s=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ad.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ad,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ld.setFromEuler(this),this.setFromQuaternion(ld,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class sm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kv=0;const cd=new I,Es=new Vi,ai=new ge,No=new I,Nr=new I,jv=new I,Zv=new Vi,hd=new I(1,0,0),ud=new I(0,1,0),dd=new I(0,0,1),fd={type:"added"},Qv={type:"removed"},As={type:"childadded",child:null},Kl={type:"childremoved",child:null};class Ie extends Rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new I,e=new ni,n=new Vi,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new jt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(hd,t)}rotateY(t){return this.rotateOnAxis(ud,t)}rotateZ(t){return this.rotateOnAxis(dd,t)}translateOnAxis(t,e){return cd.copy(t).applyQuaternion(this.quaternion),this.position.add(cd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hd,t)}translateY(t){return this.translateOnAxis(ud,t)}translateZ(t){return this.translateOnAxis(dd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?No.copy(t):No.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Nr,No,this.up):ai.lookAt(No,Nr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(ai),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fd),As.child=t,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qv),Kl.child=t,this.dispatchEvent(Kl),Kl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fd),As.child=t,this.dispatchEvent(As),As.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,t,jv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Zv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ie.DEFAULT_UP=new I(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new I,li=new I,jl=new I,ci=new I,Rs=new I,Cs=new I,pd=new I,Zl=new I,Ql=new I,Jl=new I;class Ln{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fn.subVectors(t,e),s.cross(Fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fn.subVectors(s,e),li.subVectors(n,e),jl.subVectors(t,e);const o=Fn.dot(Fn),a=Fn.dot(li),l=Fn.dot(jl),c=li.dot(li),h=li.dot(jl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static isFrontFacing(t,e,n,s){return Fn.subVectors(n,e),li.subVectors(t,e),Fn.cross(li).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Fn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ln.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Rs.subVectors(s,n),Cs.subVectors(r,n),Zl.subVectors(t,n);const l=Rs.dot(Zl),c=Cs.dot(Zl);if(l<=0&&c<=0)return e.copy(n);Ql.subVectors(t,s);const h=Rs.dot(Ql),u=Cs.dot(Ql);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Rs,o);Jl.subVectors(t,r);const p=Rs.dot(Jl),g=Cs.dot(Jl);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Cs,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return pd.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(pd,a);const f=1/(m+v+d);return o=v*f,a=d*f,e.copy(n).addScaledVector(Rs,o).addScaledVector(Cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function tc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Et{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=Dh(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=tc(o,r,t+1/3),this.g=tc(o,r,t),this.b=tc(o,r,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ue){const n=rm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ar(t.r),this.g=ar(t.g),this.b=ar(t.b),this}copyLinearToSRGB(t){return this.r=Hl(t.r),this.g=Hl(t.g),this.b=Hl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ue){return he.fromWorkingColorSpace(Ke.copy(this),t),Math.round(je(Ke.r*255,0,255))*65536+Math.round(je(Ke.g*255,0,255))*256+Math.round(je(Ke.b*255,0,255))}getHexString(t=ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(Ke.copy(this),e);const n=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=ue){he.fromWorkingColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,s=Ke.b;return t!==ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(Fo);const n=Qr(Ei.h,Fo.h,e),s=Qr(Ei.s,Fo.s,e),r=Qr(Ei.l,Fo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new Et;Et.NAMES=rm;let Jv=0;class Xi extends Rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=sr,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=nh,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(n.blending=this.blending),this.side!==Bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==eh&&(n.blendSrc=this.blendSrc),this.blendDst!==nh&&(n.blendDst=this.blendDst),this.blendEquation!==rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ju&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ye extends Xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new I,Oo=new zt;class me{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ph("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Oo.fromBufferAttribute(this,e),Oo.applyMatrix3(t),this.setXY(e,Oo.x,Oo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oh&&(t.usage=this.usage),t}}class om extends me{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class am extends me{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Fe extends me{constructor(t,e,n){super(new Float32Array(t),e,n)}}let t_=0;const En=new ge,ec=new Ie,Ds=new I,gn=new vo,Fr=new vo,We=new I;class qe extends Rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tm(t)?am:om)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return ec.lookAt(t),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Fe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _o);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(gn.min,Fr.min),gn.expandByPoint(We),We.addVectors(gn.max,Fr.max),gn.expandByPoint(We)):(gn.expandByPoint(Fr.min),gn.expandByPoint(Fr.max))}gn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)We.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(t,c),We.add(Ds)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new me(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let k=0;k<n.count;k++)a[k]=new I,l[k]=new I;const c=new I,h=new I,u=new I,d=new zt,p=new zt,g=new zt,v=new I,m=new I;function f(k,b,S){c.fromBufferAttribute(n,k),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,k),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[k].add(v),a[b].add(v),a[S].add(v),l[k].add(m),l[b].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let k=0,b=x.length;k<b;++k){const S=x[k],P=S.start,V=S.count;for(let X=P,tt=P+V;X<tt;X+=3)f(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const _=new I,w=new I,A=new I,E=new I;function D(k){A.fromBufferAttribute(s,k),E.copy(A);const b=a[k];_.copy(b),_.sub(A.multiplyScalar(A.dot(b))).normalize(),w.crossVectors(E,b);const P=w.dot(l[k])<0?-1:1;o.setXYZW(k,_.x,_.y,_.z,P)}for(let k=0,b=x.length;k<b;++k){const S=x[k],P=S.start,V=S.count;for(let X=P,tt=P+V;X<tt;X+=3)D(t.getX(X+0)),D(t.getX(X+1)),D(t.getX(X+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new me(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const md=new ge,Zi=new Lh,Bo=new _o,gd=new I,Ps=new I,Ls=new I,ks=new I,nc=new I,zo=new I,Ho=new zt,Wo=new zt,Go=new zt,vd=new I,_d=new I,xd=new I,Vo=new I,Xo=new I;class Jt extends Ie{constructor(t=new qe,e=new ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(nc.fromBufferAttribute(u,t),o?zo.addScaledVector(nc,h):zo.addScaledVector(nc.sub(e),h))}e.add(zo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(r),Zi.copy(t.ray).recast(t.near),!(Bo.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Bo,gd)===null||Zi.origin.distanceToSquared(gd)>(t.far-t.near)**2))&&(md.copy(r).invert(),Zi.copy(t.ray).applyMatrix4(md),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=x,A=_;w<A;w+=3){const E=a.getX(w),D=a.getX(w+1),k=a.getX(w+2);s=qo(this,f,t,n,c,h,u,E,D,k),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const x=a.getX(m),_=a.getX(m+1),w=a.getX(m+2);s=qo(this,o,t,n,c,h,u,x,_,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=x,A=_;w<A;w+=3){const E=w,D=w+1,k=w+2;s=qo(this,f,t,n,c,h,u,E,D,k),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const x=m,_=m+1,w=m+2;s=qo(this,o,t,n,c,h,u,x,_,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function e_(i,t,e,n,s,r,o,a){let l;if(t.side===Ge?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Bi,a),l===null)return null;Xo.copy(a),Xo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Xo);return c<e.near||c>e.far?null:{distance:c,point:Xo.clone(),object:i}}function qo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ps),i.getVertexPosition(l,Ls),i.getVertexPosition(c,ks);const h=e_(i,t,e,n,Ps,Ls,ks,Vo);if(h){s&&(Ho.fromBufferAttribute(s,a),Wo.fromBufferAttribute(s,l),Go.fromBufferAttribute(s,c),h.uv=Ln.getInterpolation(Vo,Ps,Ls,ks,Ho,Wo,Go,new zt)),r&&(Ho.fromBufferAttribute(r,a),Wo.fromBufferAttribute(r,l),Go.fromBufferAttribute(r,c),h.uv1=Ln.getInterpolation(Vo,Ps,Ls,ks,Ho,Wo,Go,new zt)),o&&(vd.fromBufferAttribute(o,a),_d.fromBufferAttribute(o,l),xd.fromBufferAttribute(o,c),h.normal=Ln.getInterpolation(Vo,Ps,Ls,ks,vd,_d,xd,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new I,materialIndex:0};Ln.getNormal(Ps,Ls,ks,u.normal),h.face=u}return h}class en extends qe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(u,2));function g(v,m,f,x,_,w,A,E,D,k,b){const S=w/D,P=A/k,V=w/2,X=A/2,tt=E/2,et=D+1,J=k+1;let it=0,Y=0;const xt=new I;for(let Rt=0;Rt<J;Rt++){const At=Rt*P-X;for(let Yt=0;Yt<et;Yt++){const te=Yt*S-V;xt[v]=te*x,xt[m]=At*_,xt[f]=tt,c.push(xt.x,xt.y,xt.z),xt[v]=0,xt[m]=0,xt[f]=E>0?1:-1,h.push(xt.x,xt.y,xt.z),u.push(Yt/D),u.push(1-Rt/k),it+=1}}for(let Rt=0;Rt<k;Rt++)for(let At=0;At<D;At++){const Yt=d+At+et*Rt,te=d+At+et*(Rt+1),K=d+(At+1)+et*(Rt+1),at=d+(At+1)+et*Rt;l.push(Yt,te,at),l.push(te,K,at),Y+=6}a.addGroup(p,Y,b),p+=Y,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function rn(i){const t={};for(let e=0;e<i.length;e++){const n=xr(i[e]);for(const s in n)t[s]=n[s]}return t}function n_(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function lm(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const i_={clone:xr,merge:rn};var s_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends Xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s_,this.fragmentShader=r_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xr(t.uniforms),this.uniformsGroups=n_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class cm extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new I,yd=new zt,wd=new zt;class Ze extends cm{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=oo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z)}getViewSize(t,e){return this.getViewBounds(t,yd,wd),e.subVectors(wd,yd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(or*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Is=-90,Us=1;class o_ extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ze(Is,Us,t,e);s.layers=this.layers,this.add(s);const r=new Ze(Is,Us,t,e);r.layers=this.layers,this.add(r);const o=new Ze(Is,Us,t,e);o.layers=this.layers,this.add(o);const a=new Ze(Is,Us,t,e);a.layers=this.layers,this.add(a);const l=new Ze(Is,Us,t,e);l.layers=this.layers,this.add(l);const c=new Ze(Is,Us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ja)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class hm extends Xe{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:mr,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class a_ extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new hm(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Se}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new en(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Ni});r.uniforms.tEquirect.value=e;const o=new Jt(s,r),a=e.minFilter;return e.minFilter===fi&&(e.minFilter=Se),new o_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const ic=new I,l_=new I,c_=new jt;class zn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ic.subVectors(n,e).cross(l_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ic),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||c_.getNormalMatrix(t),s=this.coplanarPoint(ic).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new _o,$o=new I;class kh{constructor(t=new zn,e=new zn,n=new zn,s=new zn,r=new zn,o=new zn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],x=s[13],_=s[14],w=s[15];if(n[0].setComponents(l-r,d-c,m-p,w-f).normalize(),n[1].setComponents(l+r,d+c,m+p,w+f).normalize(),n[2].setComponents(l+o,d+h,m+g,w+x).normalize(),n[3].setComponents(l-o,d-h,m-g,w-x).normalize(),n[4].setComponents(l-a,d-u,m-v,w-_).normalize(),e===pi)n[5].setComponents(l+a,d+u,m+v,w+_).normalize();else if(e===ja)n[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if($o.x=s.normal.x>0?t.max.x:t.min.x,$o.y=s.normal.y>0?t.max.y:t.min.y,$o.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($o)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function um(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function h_(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,a),u.count===-1&&d.length===0&&i.bufferSubData(c,0,h),d.length!==0){for(let p=0,g=d.length;p<g;p++){const v=d[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class hn extends qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const x=f*d-o;for(let _=0;_<c;_++){const w=_*u-r;g.push(w,-x,0),v.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const _=x+c*f,w=x+c*(f+1),A=x+1+c*(f+1),E=x+1+c*f;p.push(_,w,E),p.push(w,A,E)}this.setIndex(p),this.setAttribute("position",new Fe(g,3)),this.setAttribute("normal",new Fe(v,3)),this.setAttribute("uv",new Fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.width,t.height,t.widthSegments,t.heightSegments)}}var u_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d_=`#ifdef USE_ALPHAHASH
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
#endif`,f_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v_=`#ifdef USE_AOMAP
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
#endif`,__=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x_=`#ifdef USE_BATCHING
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
#endif`,y_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,w_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b_=`#ifdef USE_IRIDESCENCE
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
#endif`,T_=`#ifdef USE_BUMPMAP
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
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,k_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,I_=`#define PI 3.141592653589793
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
} // validated`,U_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,N_=`vec3 transformedNormal = objectNormal;
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
#endif`,F_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H_="gl_FragColor = linearToOutputTexel( gl_FragColor );",W_=`
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
}`,G_=`#ifdef USE_ENVMAP
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
#endif`,V_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X_=`#ifdef USE_ENVMAP
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
#endif`,q_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$_=`#ifdef USE_ENVMAP
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
#endif`,Y_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q_=`#ifdef USE_GRADIENTMAP
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
}`,J_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nx=`uniform bool receiveShadow;
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
#endif`,ix=`#ifdef USE_ENVMAP
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
#endif`,sx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ox=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lx=`PhysicalMaterial material;
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
#endif`,cx=`struct PhysicalMaterial {
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
}`,hx=`
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
#endif`,ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,dx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,px=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_x=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yx=`#if defined( USE_POINTS_UV )
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
#endif`,wx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ex=`#ifdef USE_MORPHTARGETS
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
#endif`,Ax=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kx=`#ifdef USE_NORMALMAP
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
#endif`,Ix=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ox=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kx=`float getShadowMask() {
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
}`,jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zx=`#ifdef USE_SKINNING
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
#endif`,Qx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jx=`#ifdef USE_SKINNING
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
#endif`,ty=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ey=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ny=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sy=`#ifdef USE_TRANSMISSION
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
#endif`,ry=`#ifdef USE_TRANSMISSION
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
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uy=`uniform sampler2D t2D;
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
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,my=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gy=`#include <common>
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
}`,vy=`#if DEPTH_PACKING == 3200
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
}`,_y=`#define DISTANCE
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
}`,xy=`#define DISTANCE
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
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`uniform float scale;
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
}`,Sy=`uniform vec3 diffuse;
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
}`,by=`#include <common>
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
}`,Ty=`uniform vec3 diffuse;
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
}`,Ey=`#define LAMBERT
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
}`,Ay=`#define LAMBERT
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
}`,Ry=`#define MATCAP
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
}`,Cy=`#define MATCAP
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
}`,Dy=`#define NORMAL
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
}`,Py=`#define NORMAL
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
}`,Ly=`#define PHONG
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
}`,ky=`#define PHONG
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
}`,Iy=`#define STANDARD
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
}`,Uy=`#define STANDARD
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
}`,Ny=`#define TOON
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
}`,Fy=`#define TOON
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
}`,Oy=`uniform float size;
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
}`,By=`uniform vec3 diffuse;
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
}`,zy=`#include <common>
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
}`,Hy=`uniform vec3 color;
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
}`,Wy=`uniform float rotation;
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
}`,Gy=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:u_,alphahash_pars_fragment:d_,alphamap_fragment:f_,alphamap_pars_fragment:p_,alphatest_fragment:m_,alphatest_pars_fragment:g_,aomap_fragment:v_,aomap_pars_fragment:__,batching_pars_vertex:x_,batching_vertex:y_,begin_vertex:w_,beginnormal_vertex:M_,bsdfs:S_,iridescence_fragment:b_,bumpmap_pars_fragment:T_,clipping_planes_fragment:E_,clipping_planes_pars_fragment:A_,clipping_planes_pars_vertex:R_,clipping_planes_vertex:C_,color_fragment:D_,color_pars_fragment:P_,color_pars_vertex:L_,color_vertex:k_,common:I_,cube_uv_reflection_fragment:U_,defaultnormal_vertex:N_,displacementmap_pars_vertex:F_,displacementmap_vertex:O_,emissivemap_fragment:B_,emissivemap_pars_fragment:z_,colorspace_fragment:H_,colorspace_pars_fragment:W_,envmap_fragment:G_,envmap_common_pars_fragment:V_,envmap_pars_fragment:X_,envmap_pars_vertex:q_,envmap_physical_pars_fragment:ix,envmap_vertex:$_,fog_vertex:Y_,fog_pars_vertex:K_,fog_fragment:j_,fog_pars_fragment:Z_,gradientmap_pars_fragment:Q_,lightmap_pars_fragment:J_,lights_lambert_fragment:tx,lights_lambert_pars_fragment:ex,lights_pars_begin:nx,lights_toon_fragment:sx,lights_toon_pars_fragment:rx,lights_phong_fragment:ox,lights_phong_pars_fragment:ax,lights_physical_fragment:lx,lights_physical_pars_fragment:cx,lights_fragment_begin:hx,lights_fragment_maps:ux,lights_fragment_end:dx,logdepthbuf_fragment:fx,logdepthbuf_pars_fragment:px,logdepthbuf_pars_vertex:mx,logdepthbuf_vertex:gx,map_fragment:vx,map_pars_fragment:_x,map_particle_fragment:xx,map_particle_pars_fragment:yx,metalnessmap_fragment:wx,metalnessmap_pars_fragment:Mx,morphinstance_vertex:Sx,morphcolor_vertex:bx,morphnormal_vertex:Tx,morphtarget_pars_vertex:Ex,morphtarget_vertex:Ax,normal_fragment_begin:Rx,normal_fragment_maps:Cx,normal_pars_fragment:Dx,normal_pars_vertex:Px,normal_vertex:Lx,normalmap_pars_fragment:kx,clearcoat_normal_fragment_begin:Ix,clearcoat_normal_fragment_maps:Ux,clearcoat_pars_fragment:Nx,iridescence_pars_fragment:Fx,opaque_fragment:Ox,packing:Bx,premultiplied_alpha_fragment:zx,project_vertex:Hx,dithering_fragment:Wx,dithering_pars_fragment:Gx,roughnessmap_fragment:Vx,roughnessmap_pars_fragment:Xx,shadowmap_pars_fragment:qx,shadowmap_pars_vertex:$x,shadowmap_vertex:Yx,shadowmask_pars_fragment:Kx,skinbase_vertex:jx,skinning_pars_vertex:Zx,skinning_vertex:Qx,skinnormal_vertex:Jx,specularmap_fragment:ty,specularmap_pars_fragment:ey,tonemapping_fragment:ny,tonemapping_pars_fragment:iy,transmission_fragment:sy,transmission_pars_fragment:ry,uv_pars_fragment:oy,uv_pars_vertex:ay,uv_vertex:ly,worldpos_vertex:cy,background_vert:hy,background_frag:uy,backgroundCube_vert:dy,backgroundCube_frag:fy,cube_vert:py,cube_frag:my,depth_vert:gy,depth_frag:vy,distanceRGBA_vert:_y,distanceRGBA_frag:xy,equirect_vert:yy,equirect_frag:wy,linedashed_vert:My,linedashed_frag:Sy,meshbasic_vert:by,meshbasic_frag:Ty,meshlambert_vert:Ey,meshlambert_frag:Ay,meshmatcap_vert:Ry,meshmatcap_frag:Cy,meshnormal_vert:Dy,meshnormal_frag:Py,meshphong_vert:Ly,meshphong_frag:ky,meshphysical_vert:Iy,meshphysical_frag:Uy,meshtoon_vert:Ny,meshtoon_frag:Fy,points_vert:Oy,points_frag:By,shadow_vert:zy,shadow_frag:Hy,sprite_vert:Wy,sprite_frag:Gy},vt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Qn={basic:{uniforms:rn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:rn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:rn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:rn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:rn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:rn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:rn([vt.points,vt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:rn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:rn([vt.common,vt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:rn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:rn([vt.sprite,vt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:rn([vt.common,vt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:rn([vt.lights,vt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Qn.physical={uniforms:rn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Yo={r:0,b:0,g:0},Ji=new ni,Vy=new ge;function Xy(i,t,e,n,s,r,o){const a=new Et(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1;const w=g(x);w===null?f(a,l):w&&w.isColor&&(f(w,1),_=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,_){const w=g(_);w&&(w.isCubeTexture||w.mapping===gl)?(h===void 0&&(h=new Jt(new en(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:xr(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ji.copy(_.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vy.makeRotationFromEuler(Ji)),h.material.toneMapped=he.getTransfer(w.colorSpace)!==xe,(u!==w||d!==w.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,p=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Jt(new hn(2,2),new tn({name:"BackgroundMaterial",uniforms:xr(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=he.getTransfer(w.colorSpace)!==xe,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,p=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,_){x.getRGB(Yo,lm(i)),n.buffers.color.setClear(Yo.r,Yo.g,Yo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(a,l)},render:v,addToRenderList:m}}function qy(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(S,P,V,X,tt){let et=!1;const J=u(X,V,P);r!==J&&(r=J,c(r.object)),et=p(S,X,V,tt),et&&g(S,X,V,tt),tt!==null&&t.update(tt,i.ELEMENT_ARRAY_BUFFER),(et||o)&&(o=!1,w(S,P,V,X),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,P,V){const X=V.wireframe===!0;let tt=n[S.id];tt===void 0&&(tt={},n[S.id]=tt);let et=tt[P.id];et===void 0&&(et={},tt[P.id]=et);let J=et[X];return J===void 0&&(J=d(l()),et[X]=J),J}function d(S){const P=[],V=[],X=[];for(let tt=0;tt<e;tt++)P[tt]=0,V[tt]=0,X[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:X,object:S,attributes:{},index:null}}function p(S,P,V,X){const tt=r.attributes,et=P.attributes;let J=0;const it=V.getAttributes();for(const Y in it)if(it[Y].location>=0){const Rt=tt[Y];let At=et[Y];if(At===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(At=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(At=S.instanceColor)),Rt===void 0||Rt.attribute!==At||At&&Rt.data!==At.data)return!0;J++}return r.attributesNum!==J||r.index!==X}function g(S,P,V,X){const tt={},et=P.attributes;let J=0;const it=V.getAttributes();for(const Y in it)if(it[Y].location>=0){let Rt=et[Y];Rt===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(Rt=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(Rt=S.instanceColor));const At={};At.attribute=Rt,Rt&&Rt.data&&(At.data=Rt.data),tt[Y]=At,J++}r.attributes=tt,r.attributesNum=J,r.index=X}function v(){const S=r.newAttributes;for(let P=0,V=S.length;P<V;P++)S[P]=0}function m(S){f(S,0)}function f(S,P){const V=r.newAttributes,X=r.enabledAttributes,tt=r.attributeDivisors;V[S]=1,X[S]===0&&(i.enableVertexAttribArray(S),X[S]=1),tt[S]!==P&&(i.vertexAttribDivisor(S,P),tt[S]=P)}function x(){const S=r.newAttributes,P=r.enabledAttributes;for(let V=0,X=P.length;V<X;V++)P[V]!==S[V]&&(i.disableVertexAttribArray(V),P[V]=0)}function _(S,P,V,X,tt,et,J){J===!0?i.vertexAttribIPointer(S,P,V,tt,et):i.vertexAttribPointer(S,P,V,X,tt,et)}function w(S,P,V,X){v();const tt=X.attributes,et=V.getAttributes(),J=P.defaultAttributeValues;for(const it in et){const Y=et[it];if(Y.location>=0){let xt=tt[it];if(xt===void 0&&(it==="instanceMatrix"&&S.instanceMatrix&&(xt=S.instanceMatrix),it==="instanceColor"&&S.instanceColor&&(xt=S.instanceColor)),xt!==void 0){const Rt=xt.normalized,At=xt.itemSize,Yt=t.get(xt);if(Yt===void 0)continue;const te=Yt.buffer,K=Yt.type,at=Yt.bytesPerElement,Mt=K===i.INT||K===i.UNSIGNED_INT||xt.gpuType===Vp;if(xt.isInterleavedBufferAttribute){const mt=xt.data,O=mt.stride,z=xt.offset;if(mt.isInstancedInterleavedBuffer){for(let H=0;H<Y.locationSize;H++)f(Y.location+H,mt.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let H=0;H<Y.locationSize;H++)m(Y.location+H);i.bindBuffer(i.ARRAY_BUFFER,te);for(let H=0;H<Y.locationSize;H++)_(Y.location+H,At/Y.locationSize,K,Rt,O*at,(z+At/Y.locationSize*H)*at,Mt)}else{if(xt.isInstancedBufferAttribute){for(let mt=0;mt<Y.locationSize;mt++)f(Y.location+mt,xt.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let mt=0;mt<Y.locationSize;mt++)m(Y.location+mt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let mt=0;mt<Y.locationSize;mt++)_(Y.location+mt,At/Y.locationSize,K,Rt,At*at,At/Y.locationSize*mt*at,Mt)}}else if(J!==void 0){const Rt=J[it];if(Rt!==void 0)switch(Rt.length){case 2:i.vertexAttrib2fv(Y.location,Rt);break;case 3:i.vertexAttrib3fv(Y.location,Rt);break;case 4:i.vertexAttrib4fv(Y.location,Rt);break;default:i.vertexAttrib1fv(Y.location,Rt)}}}}x()}function A(){k();for(const S in n){const P=n[S];for(const V in P){const X=P[V];for(const tt in X)h(X[tt].object),delete X[tt];delete P[V]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const V in P){const X=P[V];for(const tt in X)h(X[tt].object),delete X[tt];delete P[V]}delete n[S.id]}function D(S){for(const P in n){const V=n[P];if(V[S.id]===void 0)continue;const X=V[S.id];for(const tt in X)h(X[tt].object),delete X[tt];delete V[S.id]}}function k(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:k,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function $y(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<u;p++)this.render(c[p],h[p]);else{d.multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Yy(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Mn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const D=E===Wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==xi&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Di&&!D)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=p>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:w,maxSamples:A}}function Ky(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new zn,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,_=x*4;let w=f.clippingState||null;l.value=w,w=h(g,d,_,p);for(let A=0;A!==_;++A)w[A]=e[A];f.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,w=p;_!==v;++_,w+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function jy(i){let t=new WeakMap;function e(o,a){return a===ih?o.mapping=mr:a===sh&&(o.mapping=gr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ih||a===sh)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new a_(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class lo extends cm{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Js=4,Md=[.125,.215,.35,.446,.526,.582],os=20,sc=new lo,Sd=new Et;let rc=null,oc=0,ac=0,lc=!1;const ss=(1+Math.sqrt(5))/2,Ns=1/ss,bd=[new I(-ss,Ns,0),new I(ss,Ns,0),new I(-Ns,0,ss),new I(Ns,0,ss),new I(0,ss,-Ns),new I(0,ss,Ns),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Td{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){rc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(rc,oc,ac),this._renderer.xr.enabled=lc,t.scissorTest=!1,Ko(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mr||t.mapping===gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Se,minFilter:Se,generateMipmaps:!1,type:Wi,format:Mn,colorSpace:Gi,depthBuffer:!1},s=Ed(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ed(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zy(r)),this._blurMaterial=Qy(r,t,e)}return s}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,sc)}_sceneToCubeUV(t,e,n,s){const a=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Sd),h.toneMapping=gi,h.autoClear=!1;const p=new ye({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new Jt(new en,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(Sd),v=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const _=this._cubeSize;Ko(s,x*_,f>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===mr||t.mapping===gr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ad());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ko(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,sc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bd[(s-r-1)%bd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Jt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*os-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):os;m>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);const f=[];let x=0;for(let D=0;D<os;++D){const k=D/v,b=Math.exp(-k*k/2);f.push(b),D===0?x+=b:D<m&&(x+=2*b)}for(let D=0;D<f.length;D++)f[D]=f[D]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const w=this._sizeLods[s],A=3*w*(s>_-Js?s-_+Js:0),E=4*(this._cubeSize-w);Ko(e,A,E,3*w,2*w),l.setRenderTarget(e),l.render(u,sc)}}function Zy(i){const t=[],e=[],n=[];let s=i;const r=i-Js+1+Md.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Js?l=Md[o-i+Js-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,x=new Float32Array(v*g*p),_=new Float32Array(m*g*p),w=new Float32Array(f*g*p);for(let E=0;E<p;E++){const D=E%3*2/3-1,k=E>2?0:-1,b=[D,k,0,D+2/3,k,0,D+2/3,k+1,0,D,k,0,D+2/3,k+1,0,D,k+1,0];x.set(b,v*g*E),_.set(d,m*g*E);const S=[E,E,E,E,E,E];w.set(S,f*g*E)}const A=new qe;A.setAttribute("position",new me(x,v)),A.setAttribute("uv",new me(_,m)),A.setAttribute("faceIndex",new me(w,f)),t.push(A),s>Js&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ed(i,t,e){const n=new Vn(i,t,e);return n.texture.mapping=gl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ko(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Qy(i,t,e){const n=new Float32Array(os),s=new I(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ih(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Ad(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ih(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Rd(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Ih(){return`

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
	`}function Jy(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ih||l===sh,h=l===mr||l===gr;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Td(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Td(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function t1(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ph("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function e1(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let _=0,w=x.length;_<w;_+=3){const A=x[_+0],E=x[_+1],D=x[_+2];d.push(A,E,E,D,D,A)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,w=x.length/3-1;_<w;_+=3){const A=_+0,E=_+1,D=_+2;d.push(A,E,E,D,D,A)}}else return;const m=new(tm(d)?am:om)(d,1);m.version=v;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function n1(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g;m++)this.render(d[m]/o,p[m]);else{v.multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}}function u(d,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let f=0;for(let x=0;x<g;x++)f+=p[x];for(let x=0;x<v.length;x++)e.update(f,n,v[x])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function i1(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function s1(i,t,e){const n=new WeakMap,s=new we;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){k.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let w=0;g===!0&&(w=1),v===!0&&(w=2),m===!0&&(w=3);let A=a.attributes.position.count*w,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const D=new Float32Array(A*E*4*u),k=new nm(D,A,E,u);k.type=Di,k.needsUpdate=!0;const b=w*4;for(let P=0;P<u;P++){const V=f[P],X=x[P],tt=_[P],et=A*E*4*P;for(let J=0;J<V.count;J++){const it=J*b;g===!0&&(s.fromBufferAttribute(V,J),D[et+it+0]=s.x,D[et+it+1]=s.y,D[et+it+2]=s.z,D[et+it+3]=0),v===!0&&(s.fromBufferAttribute(X,J),D[et+it+4]=s.x,D[et+it+5]=s.y,D[et+it+6]=s.z,D[et+it+7]=0),m===!0&&(s.fromBufferAttribute(tt,J),D[et+it+8]=s.x,D[et+it+9]=s.y,D[et+it+10]=s.z,D[et+it+11]=tt.itemSize===4?s.w:1)}}d={count:u,texture:k,size:new zt(A,E)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function r1(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class _l extends Xe{constructor(t,e,n,s,r,o,a,l,c,h=rr){if(h!==rr&&h!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===rr&&(n=zi),n===void 0&&h===_r&&(n=vr),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:de,this.minFilter=l!==void 0?l:de,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const dm=new Xe,fm=new _l(1,1);fm.compareFunction=Jp;const pm=new nm,mm=new im,gm=new hm,Cd=[],Dd=[],Pd=new Float32Array(16),Ld=new Float32Array(9),kd=new Float32Array(4);function Cr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Cd[s];if(r===void 0&&(r=new Float32Array(s),Cd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xl(i,t){let e=Dd[t];e===void 0&&(e=new Int32Array(t),Dd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function o1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function a1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function l1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function c1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function h1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;kd.set(n),i.uniformMatrix2fv(this.addr,!1,kd),Be(e,n)}}function u1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Ld.set(n),i.uniformMatrix3fv(this.addr,!1,Ld),Be(e,n)}}function d1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Pd.set(n),i.uniformMatrix4fv(this.addr,!1,Pd),Be(e,n)}}function f1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function p1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function m1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function g1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function v1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function x1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function y1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function w1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?fm:dm;e.setTexture2D(t||r,s)}function M1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||mm,s)}function S1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||gm,s)}function b1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||pm,s)}function T1(i){switch(i){case 5126:return o1;case 35664:return a1;case 35665:return l1;case 35666:return c1;case 35674:return h1;case 35675:return u1;case 35676:return d1;case 5124:case 35670:return f1;case 35667:case 35671:return p1;case 35668:case 35672:return m1;case 35669:case 35673:return g1;case 5125:return v1;case 36294:return _1;case 36295:return x1;case 36296:return y1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return S1;case 36289:case 36303:case 36311:case 36292:return b1}}function E1(i,t){i.uniform1fv(this.addr,t)}function A1(i,t){const e=Cr(t,this.size,2);i.uniform2fv(this.addr,e)}function R1(i,t){const e=Cr(t,this.size,3);i.uniform3fv(this.addr,e)}function C1(i,t){const e=Cr(t,this.size,4);i.uniform4fv(this.addr,e)}function D1(i,t){const e=Cr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function P1(i,t){const e=Cr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function L1(i,t){const e=Cr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function k1(i,t){i.uniform1iv(this.addr,t)}function I1(i,t){i.uniform2iv(this.addr,t)}function U1(i,t){i.uniform3iv(this.addr,t)}function N1(i,t){i.uniform4iv(this.addr,t)}function F1(i,t){i.uniform1uiv(this.addr,t)}function O1(i,t){i.uniform2uiv(this.addr,t)}function B1(i,t){i.uniform3uiv(this.addr,t)}function z1(i,t){i.uniform4uiv(this.addr,t)}function H1(i,t,e){const n=this.cache,s=t.length,r=xl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||dm,r[o])}function W1(i,t,e){const n=this.cache,s=t.length,r=xl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||mm,r[o])}function G1(i,t,e){const n=this.cache,s=t.length,r=xl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||gm,r[o])}function V1(i,t,e){const n=this.cache,s=t.length,r=xl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||pm,r[o])}function X1(i){switch(i){case 5126:return E1;case 35664:return A1;case 35665:return R1;case 35666:return C1;case 35674:return D1;case 35675:return P1;case 35676:return L1;case 5124:case 35670:return k1;case 35667:case 35671:return I1;case 35668:case 35672:return U1;case 35669:case 35673:return N1;case 5125:return F1;case 36294:return O1;case 36295:return B1;case 36296:return z1;case 35678:case 36198:case 36298:case 36306:case 35682:return H1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return G1;case 36289:case 36303:case 36311:case 36292:return V1}}class q1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=T1(e.type)}}class $1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=X1(e.type)}}class Y1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const cc=/(\w+)(\])?(\[|\.)?/g;function Id(i,t){i.seq.push(t),i.map[t.id]=t}function K1(i,t,e){const n=i.name,s=n.length;for(cc.lastIndex=0;;){const r=cc.exec(n),o=cc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Id(e,c===void 0?new q1(a,i,t):new $1(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Y1(a),Id(e,u)),e=u}}}class Fa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);K1(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ud(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const j1=37297;let Z1=0;function Q1(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function J1(i){const t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(i);let n;switch(t===e?n="":t===Ka&&e===Ya?n="LinearDisplayP3ToLinearSRGB":t===Ya&&e===Ka&&(n="LinearSRGBToLinearDisplayP3"),i){case Gi:case vl:return[n,"LinearTransferOETF"];case ue:case Ch:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Nd(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Q1(i.getShaderSource(t),o)}else return s}function tw(i,t){const e=J1(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ew(i,t){let e;switch(t){case Qg:e="Linear";break;case Jg:e="Reinhard";break;case tv:e="OptimizedCineon";break;case ev:e="ACESFilmic";break;case iv:e="AgX";break;case sv:e="Neutral";break;case nv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function nw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function iw(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sw(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Kr(i){return i!==""}function Fd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Od(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ah(i){return i.replace(rw,aw)}const ow=new Map;function aw(i,t){let e=Kt[t];if(e===void 0){const n=ow.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ah(e)}const lw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bd(i){return i.replace(lw,cw)}function cw(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function hw(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bp?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===zp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===di&&(t="SHADOWMAP_TYPE_VSM"),t}function uw(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mr:case gr:t="ENVMAP_TYPE_CUBE";break;case gl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dw(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gr:t="ENVMAP_MODE_REFRACTION";break}return t}function fw(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hp:t="ENVMAP_BLENDING_MULTIPLY";break;case jg:t="ENVMAP_BLENDING_MIX";break;case Zg:t="ENVMAP_BLENDING_ADD";break}return t}function pw(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function mw(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=hw(e),c=uw(e),h=dw(e),u=fw(e),d=pw(e),p=nw(e),g=iw(r),v=s.createProgram();let m,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Kr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Kr).join(`
`),f.length>0&&(f+=`
`)):(m=[zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),f=[zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?Kt.tonemapping_pars_fragment:"",e.toneMapping!==gi?ew("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,tw("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Kr).join(`
`)),o=ah(o),o=Fd(o,e),o=Od(o,e),a=ah(a),a=Fd(a,e),a=Od(a,e),o=Bd(o),a=Bd(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=x+m+o,w=x+f+a,A=Ud(s,s.VERTEX_SHADER,_),E=Ud(s,s.FRAGMENT_SHADER,w);s.attachShader(v,A),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function D(P){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(v).trim(),X=s.getShaderInfoLog(A).trim(),tt=s.getShaderInfoLog(E).trim();let et=!0,J=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,E);else{const it=Nd(s,A,"vertex"),Y=Nd(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+it+`
`+Y)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(X===""||tt==="")&&(J=!1);J&&(P.diagnostics={runnable:et,programLog:V,vertexShader:{log:X,prefix:m},fragmentShader:{log:tt,prefix:f}})}s.deleteShader(A),s.deleteShader(E),k=new Fa(s,v),b=sw(s,v)}let k;this.getUniforms=function(){return k===void 0&&D(this),k};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,j1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Z1++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=E,this}let gw=0;class vw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new _w(t),e.set(t,n)),n}}class _w{constructor(t){this.id=gw++,this.code=t,this.usedTimes=0}}function xw(i,t,e,n,s,r,o){const a=new sm,l=new vw,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,P,V,X){const tt=V.fog,et=X.geometry,J=b.isMeshStandardMaterial?V.environment:null,it=(b.isMeshStandardMaterial?e:t).get(b.envMap||J),Y=it&&it.mapping===gl?it.image.height:null,xt=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const Rt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,At=Rt!==void 0?Rt.length:0;let Yt=0;et.morphAttributes.position!==void 0&&(Yt=1),et.morphAttributes.normal!==void 0&&(Yt=2),et.morphAttributes.color!==void 0&&(Yt=3);let te,K,at,Mt;if(xt){const fe=Qn[xt];te=fe.vertexShader,K=fe.fragmentShader}else te=b.vertexShader,K=b.fragmentShader,l.update(b),at=l.getVertexShaderID(b),Mt=l.getFragmentShaderID(b);const mt=i.getRenderTarget(),O=X.isInstancedMesh===!0,z=X.isBatchedMesh===!0,H=!!b.map,R=!!b.matcap,q=!!it,B=!!b.aoMap,gt=!!b.lightMap,ct=!!b.bumpMap,yt=!!b.normalMap,ft=!!b.displacementMap,ot=!!b.emissiveMap,pt=!!b.metalnessMap,C=!!b.roughnessMap,M=b.anisotropy>0,N=b.clearcoat>0,$=b.dispersion>0,j=b.iridescence>0,Z=b.sheen>0,ht=b.transmission>0,rt=M&&!!b.anisotropyMap,lt=N&&!!b.clearcoatMap,It=N&&!!b.clearcoatNormalMap,st=N&&!!b.clearcoatRoughnessMap,St=j&&!!b.iridescenceMap,$t=j&&!!b.iridescenceThicknessMap,Bt=Z&&!!b.sheenColorMap,_t=Z&&!!b.sheenRoughnessMap,Xt=!!b.specularMap,Qt=!!b.specularColorMap,Me=!!b.specularIntensityMap,L=ht&&!!b.transmissionMap,bt=ht&&!!b.thicknessMap,Q=!!b.gradientMap,nt=!!b.alphaMap,dt=b.alphaTest>0,Vt=!!b.alphaHash,re=!!b.extensions;let Ae=gi;b.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Ae=i.toneMapping);const ze={shaderID:xt,shaderType:b.type,shaderName:b.name,vertexShader:te,fragmentShader:K,defines:b.defines,customVertexShaderID:at,customFragmentShaderID:Mt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:z,batchingColor:z&&X._colorsTexture!==null,instancing:O,instancingColor:O&&X.instanceColor!==null,instancingMorph:O&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Gi,alphaToCoverage:!!b.alphaToCoverage,map:H,matcap:R,envMap:q,envMapMode:q&&it.mapping,envMapCubeUVHeight:Y,aoMap:B,lightMap:gt,bumpMap:ct,normalMap:yt,displacementMap:d&&ft,emissiveMap:ot,normalMapObjectSpace:yt&&b.normalMapType===mv,normalMapTangentSpace:yt&&b.normalMapType===Qp,metalnessMap:pt,roughnessMap:C,anisotropy:M,anisotropyMap:rt,clearcoat:N,clearcoatMap:lt,clearcoatNormalMap:It,clearcoatRoughnessMap:st,dispersion:$,iridescence:j,iridescenceMap:St,iridescenceThicknessMap:$t,sheen:Z,sheenColorMap:Bt,sheenRoughnessMap:_t,specularMap:Xt,specularColorMap:Qt,specularIntensityMap:Me,transmission:ht,transmissionMap:L,thicknessMap:bt,gradientMap:Q,opaque:b.transparent===!1&&b.blending===sr&&b.alphaToCoverage===!1,alphaMap:nt,alphaTest:dt,alphaHash:Vt,combine:b.combine,mapUv:H&&v(b.map.channel),aoMapUv:B&&v(b.aoMap.channel),lightMapUv:gt&&v(b.lightMap.channel),bumpMapUv:ct&&v(b.bumpMap.channel),normalMapUv:yt&&v(b.normalMap.channel),displacementMapUv:ft&&v(b.displacementMap.channel),emissiveMapUv:ot&&v(b.emissiveMap.channel),metalnessMapUv:pt&&v(b.metalnessMap.channel),roughnessMapUv:C&&v(b.roughnessMap.channel),anisotropyMapUv:rt&&v(b.anisotropyMap.channel),clearcoatMapUv:lt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:It&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:_t&&v(b.sheenRoughnessMap.channel),specularMapUv:Xt&&v(b.specularMap.channel),specularColorMapUv:Qt&&v(b.specularColorMap.channel),specularIntensityMapUv:Me&&v(b.specularIntensityMap.channel),transmissionMapUv:L&&v(b.transmissionMap.channel),thicknessMapUv:bt&&v(b.thicknessMap.channel),alphaMapUv:nt&&v(b.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(yt||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!et.attributes.uv&&(H||nt),fog:!!tt,useFog:b.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Yt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:H&&b.map.isVideoTexture===!0&&he.getTransfer(b.map.colorSpace)===xe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Qe,flipSided:b.side===Ge,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:re&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:re&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function f(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)S.push(P),S.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(x(S,b),_(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function x(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function _(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),b.push(a.mask)}function w(b){const S=g[b.type];let P;if(S){const V=Qn[S];P=i_.clone(V.uniforms)}else P=b.uniforms;return P}function A(b,S){let P;for(let V=0,X=h.length;V<X;V++){const tt=h[V];if(tt.cacheKey===S){P=tt,++P.usedTimes;break}}return P===void 0&&(P=new mw(i,S,b,r),h.push(P)),P}function E(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function D(b){l.remove(b)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:w,acquireProgram:A,releaseProgram:E,releaseShaderCache:D,programs:h,dispose:k}}function yw(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function ww(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Hd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wd(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,v,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function a(u,d,p,g,v,m){const f=o(u,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,v,m){const f=o(u,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||ww),n.length>1&&n.sort(d||Hd),s.length>1&&s.sort(d||Hd)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Mw(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Wd,i.set(n,[o])):s>=r.length?(o=new Wd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Sw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Et};break;case"SpotLight":e={position:new I,direction:new I,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function bw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Tw=0;function Ew(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Aw(i){const t=new Sw,e=bw(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new ge,o=new ge;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,x=0,_=0,w=0,A=0,E=0,D=0;c.sort(Ew);for(let b=0,S=c.length;b<S;b++){const P=c[b],V=P.color,X=P.intensity,tt=P.distance,et=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=V.r*X,u+=V.g*X,d+=V.b*X;else if(P.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(P.sh.coefficients[J],X);D++}else if(P.isDirectionalLight){const J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const it=P.shadow,Y=e.get(P);Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=et,n.directionalShadowMatrix[p]=P.shadow.matrix,x++}n.directional[p]=J,p++}else if(P.isSpotLight){const J=t.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(V).multiplyScalar(X),J.distance=tt,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,n.spot[v]=J;const it=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,it.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[v]=it.matrix,P.castShadow){const Y=e.get(P);Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=et,w++}v++}else if(P.isRectAreaLight){const J=t.get(P);J.color.copy(V).multiplyScalar(X),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=J,m++}else if(P.isPointLight){const J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),J.distance=P.distance,J.decay=P.decay,P.castShadow){const it=P.shadow,Y=e.get(P);Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,Y.shadowCameraNear=it.camera.near,Y.shadowCameraFar=it.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=P.shadow.matrix,_++}n.point[g]=J,g++}else if(P.isHemisphereLight){const J=t.get(P);J.skyColor.copy(P.color).multiplyScalar(X),J.groundColor.copy(P.groundColor).multiplyScalar(X),n.hemi[f]=J,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const k=n.hash;(k.directionalLength!==p||k.pointLength!==g||k.spotLength!==v||k.rectAreaLength!==m||k.hemiLength!==f||k.numDirectionalShadows!==x||k.numPointShadows!==_||k.numSpotShadows!==w||k.numSpotMaps!==A||k.numLightProbes!==D)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=w+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=D,k.directionalLength=p,k.pointLength=g,k.spotLength=v,k.rectAreaLength=m,k.hemiLength=f,k.numDirectionalShadows=x,k.numPointShadows=_,k.numSpotShadows=w,k.numSpotMaps=A,k.numLightProbes=D,n.version=Tw++)}function l(c,h){let u=0,d=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const _=c[f];if(_.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(_.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const w=n.hemi[v];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Gd(i){const t=new Aw(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Rw(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Gd(i),t.set(s,[a])):r>=o.length?(a=new Gd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class vm extends Xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cw extends Xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Dw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pw=`uniform sampler2D shadow_pass;
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
}`;function Lw(i,t,e){let n=new kh;const s=new zt,r=new zt,o=new we,a=new vm({depthPacking:Zp}),l=new Cw,c={},h=e.maxTextureSize,u={[Bi]:Ge,[Ge]:Bi,[Qe]:Qe},d=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:Dw,fragmentShader:Pw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new qe;g.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Jt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bp;let f=this.type;this.render=function(E,D,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Ni),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const X=f!==di&&this.type===di,tt=f===di&&this.type!==di;for(let et=0,J=E.length;et<J;et++){const it=E[et],Y=it.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const xt=Y.getFrameExtents();if(s.multiply(xt),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/xt.x),s.x=r.x*xt.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/xt.y),s.y=r.y*xt.y,Y.mapSize.y=r.y)),Y.map===null||X===!0||tt===!0){const At=this.type!==di?{minFilter:de,magFilter:de}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Vn(s.x,s.y,At),Y.map.texture.name=it.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const Rt=Y.getViewportCount();for(let At=0;At<Rt;At++){const Yt=Y.getViewport(At);o.set(r.x*Yt.x,r.y*Yt.y,r.x*Yt.z,r.y*Yt.w),V.viewport(o),Y.updateMatrices(it,At),n=Y.getFrustum(),w(D,k,Y.camera,it,this.type)}Y.isPointLightShadow!==!0&&this.type===di&&x(Y,k),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,P)};function x(E,D){const k=t.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Vn(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(D,null,k,d,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(D,null,k,p,v,null)}function _(E,D,k,b){let S=null;const P=k.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)S=P;else if(S=k.isPointLight===!0?l:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const V=S.uuid,X=D.uuid;let tt=c[V];tt===void 0&&(tt={},c[V]=tt);let et=tt[X];et===void 0&&(et=S.clone(),tt[X]=et,D.addEventListener("dispose",A)),S=et}if(S.visible=D.visible,S.wireframe=D.wireframe,b===di?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:u[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,k.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=i.properties.get(S);V.light=k}return S}function w(E,D,k,b,S){if(E.visible===!1)return;if(E.layers.test(D.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===di)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld);const X=t.update(E),tt=E.material;if(Array.isArray(tt)){const et=X.groups;for(let J=0,it=et.length;J<it;J++){const Y=et[J],xt=tt[Y.materialIndex];if(xt&&xt.visible){const Rt=_(E,xt,b,S);E.onBeforeShadow(i,E,D,k,X,Rt,Y),i.renderBufferDirect(k,null,X,Rt,E,Y),E.onAfterShadow(i,E,D,k,X,Rt,Y)}}}else if(tt.visible){const et=_(E,tt,b,S);E.onBeforeShadow(i,E,D,k,X,et,null),i.renderBufferDirect(k,null,X,et,E,null),E.onAfterShadow(i,E,D,k,X,et,null)}}const V=E.children;for(let X=0,tt=V.length;X<tt;X++)w(V[X],D,k,b,S)}function A(E){E.target.removeEventListener("dispose",A);for(const k in c){const b=c[k],S=E.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function kw(i){function t(){let L=!1;const bt=new we;let Q=null;const nt=new we(0,0,0,0);return{setMask:function(dt){Q!==dt&&!L&&(i.colorMask(dt,dt,dt,dt),Q=dt)},setLocked:function(dt){L=dt},setClear:function(dt,Vt,re,Ae,ze){ze===!0&&(dt*=Ae,Vt*=Ae,re*=Ae),bt.set(dt,Vt,re,Ae),nt.equals(bt)===!1&&(i.clearColor(dt,Vt,re,Ae),nt.copy(bt))},reset:function(){L=!1,Q=null,nt.set(-1,0,0,0)}}}function e(){let L=!1,bt=null,Q=null,nt=null;return{setTest:function(dt){dt?Mt(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(dt){bt!==dt&&!L&&(i.depthMask(dt),bt=dt)},setFunc:function(dt){if(Q!==dt){switch(dt){case Gg:i.depthFunc(i.NEVER);break;case Vg:i.depthFunc(i.ALWAYS);break;case Xg:i.depthFunc(i.LESS);break;case Xa:i.depthFunc(i.LEQUAL);break;case qg:i.depthFunc(i.EQUAL);break;case $g:i.depthFunc(i.GEQUAL);break;case Yg:i.depthFunc(i.GREATER);break;case Kg:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=dt}},setLocked:function(dt){L=dt},setClear:function(dt){nt!==dt&&(i.clearDepth(dt),nt=dt)},reset:function(){L=!1,bt=null,Q=null,nt=null}}}function n(){let L=!1,bt=null,Q=null,nt=null,dt=null,Vt=null,re=null,Ae=null,ze=null;return{setTest:function(fe){L||(fe?Mt(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(fe){bt!==fe&&!L&&(i.stencilMask(fe),bt=fe)},setFunc:function(fe,Xn,qn){(Q!==fe||nt!==Xn||dt!==qn)&&(i.stencilFunc(fe,Xn,qn),Q=fe,nt=Xn,dt=qn)},setOp:function(fe,Xn,qn){(Vt!==fe||re!==Xn||Ae!==qn)&&(i.stencilOp(fe,Xn,qn),Vt=fe,re=Xn,Ae=qn)},setLocked:function(fe){L=fe},setClear:function(fe){ze!==fe&&(i.clearStencil(fe),ze=fe)},reset:function(){L=!1,bt=null,Q=null,nt=null,dt=null,Vt=null,re=null,Ae=null,ze=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],p=null,g=!1,v=null,m=null,f=null,x=null,_=null,w=null,A=null,E=new Et(0,0,0),D=0,k=!1,b=null,S=null,P=null,V=null,X=null;const tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,J=0;const it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(it)[1]),et=J>=1):it.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),et=J>=2);let Y=null,xt={};const Rt=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),Yt=new we().fromArray(Rt),te=new we().fromArray(At);function K(L,bt,Q,nt){const dt=new Uint8Array(4),Vt=i.createTexture();i.bindTexture(L,Vt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let re=0;re<Q;re++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(bt+re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return Vt}const at={};at[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Mt(i.DEPTH_TEST),r.setFunc(Xa),ct(!1),yt(bu),Mt(i.CULL_FACE),B(Ni);function Mt(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function mt(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function O(L,bt){return h[L]!==bt?(i.bindFramebuffer(L,bt),h[L]=bt,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=bt),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function z(L,bt){let Q=d,nt=!1;if(L){Q=u.get(bt),Q===void 0&&(Q=[],u.set(bt,Q));const dt=L.textures;if(Q.length!==dt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Vt=0,re=dt.length;Vt<re;Vt++)Q[Vt]=i.COLOR_ATTACHMENT0+Vt;Q.length=dt.length,nt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,nt=!0);nt&&i.drawBuffers(Q)}function H(L){return p!==L?(i.useProgram(L),p=L,!0):!1}const R={[rs]:i.FUNC_ADD,[Eg]:i.FUNC_SUBTRACT,[Ag]:i.FUNC_REVERSE_SUBTRACT};R[Rg]=i.MIN,R[Cg]=i.MAX;const q={[Dg]:i.ZERO,[Pg]:i.ONE,[Lg]:i.SRC_COLOR,[eh]:i.SRC_ALPHA,[Og]:i.SRC_ALPHA_SATURATE,[Ng]:i.DST_COLOR,[Ig]:i.DST_ALPHA,[kg]:i.ONE_MINUS_SRC_COLOR,[nh]:i.ONE_MINUS_SRC_ALPHA,[Fg]:i.ONE_MINUS_DST_COLOR,[Ug]:i.ONE_MINUS_DST_ALPHA,[Bg]:i.CONSTANT_COLOR,[zg]:i.ONE_MINUS_CONSTANT_COLOR,[Hg]:i.CONSTANT_ALPHA,[Wg]:i.ONE_MINUS_CONSTANT_ALPHA};function B(L,bt,Q,nt,dt,Vt,re,Ae,ze,fe){if(L===Ni){g===!0&&(mt(i.BLEND),g=!1);return}if(g===!1&&(Mt(i.BLEND),g=!0),L!==Tg){if(L!==v||fe!==k){if((m!==rs||_!==rs)&&(i.blendEquation(i.FUNC_ADD),m=rs,_=rs),fe)switch(L){case sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case th:i.blendFunc(i.ONE,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case th:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}f=null,x=null,w=null,A=null,E.set(0,0,0),D=0,v=L,k=fe}return}dt=dt||bt,Vt=Vt||Q,re=re||nt,(bt!==m||dt!==_)&&(i.blendEquationSeparate(R[bt],R[dt]),m=bt,_=dt),(Q!==f||nt!==x||Vt!==w||re!==A)&&(i.blendFuncSeparate(q[Q],q[nt],q[Vt],q[re]),f=Q,x=nt,w=Vt,A=re),(Ae.equals(E)===!1||ze!==D)&&(i.blendColor(Ae.r,Ae.g,Ae.b,ze),E.copy(Ae),D=ze),v=L,k=!1}function gt(L,bt){L.side===Qe?mt(i.CULL_FACE):Mt(i.CULL_FACE);let Q=L.side===Ge;bt&&(Q=!Q),ct(Q),L.blending===sr&&L.transparent===!1?B(Ni):B(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const nt=L.stencilWrite;o.setTest(nt),nt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ot(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Mt(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(L){b!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),b=L)}function yt(L){L!==Sg?(Mt(i.CULL_FACE),L!==S&&(L===bu?i.cullFace(i.BACK):L===bg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),S=L}function ft(L){L!==P&&(et&&i.lineWidth(L),P=L)}function ot(L,bt,Q){L?(Mt(i.POLYGON_OFFSET_FILL),(V!==bt||X!==Q)&&(i.polygonOffset(bt,Q),V=bt,X=Q)):mt(i.POLYGON_OFFSET_FILL)}function pt(L){L?Mt(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function C(L){L===void 0&&(L=i.TEXTURE0+tt-1),Y!==L&&(i.activeTexture(L),Y=L)}function M(L,bt,Q){Q===void 0&&(Y===null?Q=i.TEXTURE0+tt-1:Q=Y);let nt=xt[Q];nt===void 0&&(nt={type:void 0,texture:void 0},xt[Q]=nt),(nt.type!==L||nt.texture!==bt)&&(Y!==Q&&(i.activeTexture(Q),Y=Q),i.bindTexture(L,bt||at[L]),nt.type=L,nt.texture=bt)}function N(){const L=xt[Y];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function It(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $t(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Bt(L){Yt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Yt.copy(L))}function _t(L){te.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),te.copy(L))}function Xt(L,bt){let Q=l.get(bt);Q===void 0&&(Q=new WeakMap,l.set(bt,Q));let nt=Q.get(L);nt===void 0&&(nt=i.getUniformBlockIndex(bt,L.name),Q.set(L,nt))}function Qt(L,bt){const nt=l.get(bt).get(L);a.get(bt)!==nt&&(i.uniformBlockBinding(bt,nt,L.__bindingPointIndex),a.set(bt,nt))}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},Y=null,xt={},h={},u=new WeakMap,d=[],p=null,g=!1,v=null,m=null,f=null,x=null,_=null,w=null,A=null,E=new Et(0,0,0),D=0,k=!1,b=null,S=null,P=null,V=null,X=null,Yt.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Mt,disable:mt,bindFramebuffer:O,drawBuffers:z,useProgram:H,setBlending:B,setMaterial:gt,setFlipSided:ct,setCullFace:yt,setLineWidth:ft,setPolygonOffset:ot,setScissorTest:pt,activeTexture:C,bindTexture:M,unbindTexture:N,compressedTexImage2D:$,compressedTexImage3D:j,texImage2D:St,texImage3D:$t,updateUBOMapping:Xt,uniformBlockBinding:Qt,texStorage2D:It,texStorage3D:st,texSubImage2D:Z,texSubImage3D:ht,compressedTexSubImage2D:rt,compressedTexSubImage3D:lt,scissor:Bt,viewport:_t,reset:Me}}function Iw(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return p?new OffscreenCanvas(C,M):ao("canvas")}function v(C,M,N){let $=1;const j=pt(C);if((j.width>N||j.height>N)&&($=N/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor($*j.width),ht=Math.floor($*j.height);u===void 0&&(u=g(Z,ht));const rt=M?g(Z,ht):u;return rt.width=Z,rt.height=ht,rt.getContext("2d").drawImage(C,0,0,Z,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Z+"x"+ht+")."),rt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==de&&C.minFilter!==Se}function f(C){i.generateMipmap(C)}function x(C,M,N,$,j=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=M;if(M===i.RED&&(N===i.FLOAT&&(Z=i.R32F),N===i.HALF_FLOAT&&(Z=i.R16F),N===i.UNSIGNED_BYTE&&(Z=i.R8)),M===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Z=i.R8UI),N===i.UNSIGNED_SHORT&&(Z=i.R16UI),N===i.UNSIGNED_INT&&(Z=i.R32UI),N===i.BYTE&&(Z=i.R8I),N===i.SHORT&&(Z=i.R16I),N===i.INT&&(Z=i.R32I)),M===i.RG&&(N===i.FLOAT&&(Z=i.RG32F),N===i.HALF_FLOAT&&(Z=i.RG16F),N===i.UNSIGNED_BYTE&&(Z=i.RG8)),M===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(Z=i.RG8UI),N===i.UNSIGNED_SHORT&&(Z=i.RG16UI),N===i.UNSIGNED_INT&&(Z=i.RG32UI),N===i.BYTE&&(Z=i.RG8I),N===i.SHORT&&(Z=i.RG16I),N===i.INT&&(Z=i.RG32I)),M===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),M===i.RGBA){const ht=j?$a:he.getTransfer($);N===i.FLOAT&&(Z=i.RGBA32F),N===i.HALF_FLOAT&&(Z=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Z=ht===xe?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(C,M){let N;return C?M===null||M===zi||M===vr?N=i.DEPTH24_STENCIL8:M===Di?N=i.DEPTH32F_STENCIL8:M===qa&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===zi||M===vr?N=i.DEPTH_COMPONENT24:M===Di?N=i.DEPTH_COMPONENT32F:M===qa&&(N=i.DEPTH_COMPONENT16),N}function w(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==de&&C.minFilter!==Se?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){const M=C.target;M.removeEventListener("dispose",A),D(M),M.isVideoTexture&&h.delete(M)}function E(C){const M=C.target;M.removeEventListener("dispose",E),b(M)}function D(C){const M=n.get(C);if(M.__webglInit===void 0)return;const N=C.source,$=d.get(N);if($){const j=$[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&k(C),Object.keys($).length===0&&d.delete(N)}n.remove(C)}function k(C){const M=n.get(C);i.deleteTexture(M.__webglTexture);const N=C.source,$=d.get(N);delete $[M.__cacheKey],o.memory.textures--}function b(C){const M=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let j=0;j<M.__webglFramebuffer[$].length;j++)i.deleteFramebuffer(M.__webglFramebuffer[$][j]);else i.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)i.deleteFramebuffer(M.__webglFramebuffer[$]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const N=C.textures;for(let $=0,j=N.length;$<j;$++){const Z=n.get(N[$]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(N[$])}n.remove(C)}let S=0;function P(){S=0}function V(){const C=S;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),S+=1,C}function X(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function tt(C,M){const N=n.get(C);if(C.isVideoTexture&&ft(C),C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(N,C,M);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+M)}function et(C,M){const N=n.get(C);if(C.version>0&&N.__version!==C.version){te(N,C,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+M)}function J(C,M){const N=n.get(C);if(C.version>0&&N.__version!==C.version){te(N,C,M);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+M)}function it(C,M){const N=n.get(C);if(C.version>0&&N.__version!==C.version){K(N,C,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+M)}const Y={[bn]:i.REPEAT,[cs]:i.CLAMP_TO_EDGE,[rh]:i.MIRRORED_REPEAT},xt={[de]:i.NEAREST,[Gp]:i.NEAREST_MIPMAP_NEAREST,[Ro]:i.NEAREST_MIPMAP_LINEAR,[Se]:i.LINEAR,[Il]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},Rt={[gv]:i.NEVER,[Mv]:i.ALWAYS,[vv]:i.LESS,[Jp]:i.LEQUAL,[_v]:i.EQUAL,[wv]:i.GEQUAL,[xv]:i.GREATER,[yv]:i.NOTEQUAL};function At(C,M){if(M.type===Di&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Se||M.magFilter===Il||M.magFilter===Ro||M.magFilter===fi||M.minFilter===Se||M.minFilter===Il||M.minFilter===Ro||M.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Y[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Y[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Y[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,xt[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,xt[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Rt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===de||M.minFilter!==Ro&&M.minFilter!==fi||M.type===Di&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Yt(C,M){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));const $=M.source;let j=d.get($);j===void 0&&(j={},d.set($,j));const Z=X(M);if(Z!==C.__cacheKey){j[Z]===void 0&&(j[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),j[Z].usedTimes++;const ht=j[C.__cacheKey];ht!==void 0&&(j[C.__cacheKey].usedTimes--,ht.usedTimes===0&&k(M)),C.__cacheKey=Z,C.__webglTexture=j[Z].texture}return N}function te(C,M,N){let $=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=i.TEXTURE_3D);const j=Yt(C,M),Z=M.source;e.bindTexture($,C.__webglTexture,i.TEXTURE0+N);const ht=n.get(Z);if(Z.version!==ht.__version||j===!0){e.activeTexture(i.TEXTURE0+N);const rt=he.getPrimaries(he.workingColorSpace),lt=M.colorSpace===yn?null:he.getPrimaries(M.colorSpace),It=M.colorSpace===yn||rt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let st=v(M.image,!1,s.maxTextureSize);st=ot(M,st);const St=r.convert(M.format,M.colorSpace),$t=r.convert(M.type);let Bt=x(M.internalFormat,St,$t,M.colorSpace,M.isVideoTexture);At($,M);let _t;const Xt=M.mipmaps,Qt=M.isVideoTexture!==!0,Me=ht.__version===void 0||j===!0,L=Z.dataReady,bt=w(M,st);if(M.isDepthTexture)Bt=_(M.format===_r,M.type),Me&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,Bt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Bt,st.width,st.height,0,St,$t,null));else if(M.isDataTexture)if(Xt.length>0){Qt&&Me&&e.texStorage2D(i.TEXTURE_2D,bt,Bt,Xt[0].width,Xt[0].height);for(let Q=0,nt=Xt.length;Q<nt;Q++)_t=Xt[Q],Qt?L&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,_t.width,_t.height,St,$t,_t.data):e.texImage2D(i.TEXTURE_2D,Q,Bt,_t.width,_t.height,0,St,$t,_t.data);M.generateMipmaps=!1}else Qt?(Me&&e.texStorage2D(i.TEXTURE_2D,bt,Bt,st.width,st.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,St,$t,st.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,st.width,st.height,0,St,$t,st.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Qt&&Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Bt,Xt[0].width,Xt[0].height,st.depth);for(let Q=0,nt=Xt.length;Q<nt;Q++)if(_t=Xt[Q],M.format!==Mn)if(St!==null)if(Qt){if(L)if(M.layerUpdates.size>0){for(const dt of M.layerUpdates){const Vt=_t.width*_t.height;e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,dt,_t.width,_t.height,1,St,_t.data.slice(Vt*dt,Vt*(dt+1)),0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,_t.width,_t.height,st.depth,St,_t.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Bt,_t.width,_t.height,st.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,_t.width,_t.height,st.depth,St,$t,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,Bt,_t.width,_t.height,st.depth,0,St,$t,_t.data)}else{Qt&&Me&&e.texStorage2D(i.TEXTURE_2D,bt,Bt,Xt[0].width,Xt[0].height);for(let Q=0,nt=Xt.length;Q<nt;Q++)_t=Xt[Q],M.format!==Mn?St!==null?Qt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,_t.width,_t.height,St,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,Bt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?L&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,_t.width,_t.height,St,$t,_t.data):e.texImage2D(i.TEXTURE_2D,Q,Bt,_t.width,_t.height,0,St,$t,_t.data)}else if(M.isDataArrayTexture)if(Qt){if(Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Bt,st.width,st.height,st.depth),L)if(M.layerUpdates.size>0){let Q;switch($t){case i.UNSIGNED_BYTE:switch(St){case i.ALPHA:Q=1;break;case i.LUMINANCE:Q=1;break;case i.LUMINANCE_ALPHA:Q=2;break;case i.RGB:Q=3;break;case i.RGBA:Q=4;break;default:throw new Error(`Unknown texel size for format ${St}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:Q=1;break;default:throw new Error(`Unknown texel size for type ${$t}.`)}const nt=st.width*st.height*Q;for(const dt of M.layerUpdates)e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,dt,st.width,st.height,1,St,$t,st.data.slice(nt*dt,nt*(dt+1)));M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,St,$t,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,st.width,st.height,st.depth,0,St,$t,st.data);else if(M.isData3DTexture)Qt?(Me&&e.texStorage3D(i.TEXTURE_3D,bt,Bt,st.width,st.height,st.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,St,$t,st.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,st.width,st.height,st.depth,0,St,$t,st.data);else if(M.isFramebufferTexture){if(Me)if(Qt)e.texStorage2D(i.TEXTURE_2D,bt,Bt,st.width,st.height);else{let Q=st.width,nt=st.height;for(let dt=0;dt<bt;dt++)e.texImage2D(i.TEXTURE_2D,dt,Bt,Q,nt,0,St,$t,null),Q>>=1,nt>>=1}}else if(Xt.length>0){if(Qt&&Me){const Q=pt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,bt,Bt,Q.width,Q.height)}for(let Q=0,nt=Xt.length;Q<nt;Q++)_t=Xt[Q],Qt?L&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,St,$t,_t):e.texImage2D(i.TEXTURE_2D,Q,Bt,St,$t,_t);M.generateMipmaps=!1}else if(Qt){if(Me){const Q=pt(st);e.texStorage2D(i.TEXTURE_2D,bt,Bt,Q.width,Q.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,$t,st)}else e.texImage2D(i.TEXTURE_2D,0,Bt,St,$t,st);m(M)&&f($),ht.__version=Z.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function K(C,M,N){if(M.image.length!==6)return;const $=Yt(C,M),j=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+N);const Z=n.get(j);if(j.version!==Z.__version||$===!0){e.activeTexture(i.TEXTURE0+N);const ht=he.getPrimaries(he.workingColorSpace),rt=M.colorSpace===yn?null:he.getPrimaries(M.colorSpace),lt=M.colorSpace===yn||ht===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const It=M.isCompressedTexture||M.image[0].isCompressedTexture,st=M.image[0]&&M.image[0].isDataTexture,St=[];for(let nt=0;nt<6;nt++)!It&&!st?St[nt]=v(M.image[nt],!0,s.maxCubemapSize):St[nt]=st?M.image[nt].image:M.image[nt],St[nt]=ot(M,St[nt]);const $t=St[0],Bt=r.convert(M.format,M.colorSpace),_t=r.convert(M.type),Xt=x(M.internalFormat,Bt,_t,M.colorSpace),Qt=M.isVideoTexture!==!0,Me=Z.__version===void 0||$===!0,L=j.dataReady;let bt=w(M,$t);At(i.TEXTURE_CUBE_MAP,M);let Q;if(It){Qt&&Me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Xt,$t.width,$t.height);for(let nt=0;nt<6;nt++){Q=St[nt].mipmaps;for(let dt=0;dt<Q.length;dt++){const Vt=Q[dt];M.format!==Mn?Bt!==null?Qt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,dt,0,0,Vt.width,Vt.height,Bt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,dt,Xt,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,dt,0,0,Vt.width,Vt.height,Bt,_t,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,dt,Xt,Vt.width,Vt.height,0,Bt,_t,Vt.data)}}}else{if(Q=M.mipmaps,Qt&&Me){Q.length>0&&bt++;const nt=pt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Xt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(st){Qt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,St[nt].width,St[nt].height,Bt,_t,St[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Xt,St[nt].width,St[nt].height,0,Bt,_t,St[nt].data);for(let dt=0;dt<Q.length;dt++){const re=Q[dt].image[nt].image;Qt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,dt+1,0,0,re.width,re.height,Bt,_t,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,dt+1,Xt,re.width,re.height,0,Bt,_t,re.data)}}else{Qt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Bt,_t,St[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Xt,Bt,_t,St[nt]);for(let dt=0;dt<Q.length;dt++){const Vt=Q[dt];Qt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,dt+1,0,0,Bt,_t,Vt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,dt+1,Xt,Bt,_t,Vt.image[nt])}}}m(M)&&f(i.TEXTURE_CUBE_MAP),Z.__version=j.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function at(C,M,N,$,j,Z){const ht=r.convert(N.format,N.colorSpace),rt=r.convert(N.type),lt=x(N.internalFormat,ht,rt,N.colorSpace);if(!n.get(M).__hasExternalTextures){const st=Math.max(1,M.width>>Z),St=Math.max(1,M.height>>Z);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,Z,lt,st,St,M.depth,0,ht,rt,null):e.texImage2D(j,Z,lt,st,St,0,ht,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),yt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,j,n.get(N).__webglTexture,0,ct(M)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,j,n.get(N).__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(C,M,N){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){const $=M.depthTexture,j=$&&$.isDepthTexture?$.type:null,Z=_(M.stencilBuffer,j),ht=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=ct(M);yt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,Z,M.width,M.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Z,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Z,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,C)}else{const $=M.textures;for(let j=0;j<$.length;j++){const Z=$[j],ht=r.convert(Z.format,Z.colorSpace),rt=r.convert(Z.type),lt=x(Z.internalFormat,ht,rt,Z.colorSpace),It=ct(M);N&&yt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,lt,M.width,M.height):yt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,lt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,lt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),tt(M.depthTexture,0);const $=n.get(M.depthTexture).__webglTexture,j=ct(M);if(M.depthTexture.format===rr)yt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(M.depthTexture.format===_r)yt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function O(C){const M=n.get(C),N=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");mt(M.__webglFramebuffer,C)}else if(N){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]=i.createRenderbuffer(),Mt(M.__webglDepthbuffer[$],C,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Mt(M.__webglDepthbuffer,C,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function z(C,M,N){const $=n.get(C);M!==void 0&&at($.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&O(C)}function H(C){const M=C.texture,N=n.get(C),$=n.get(M);C.addEventListener("dispose",E);const j=C.textures,Z=C.isWebGLCubeRenderTarget===!0,ht=j.length>1;if(ht||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=M.version,o.memory.textures++),Z){N.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer[rt]=[];for(let lt=0;lt<M.mipmaps.length;lt++)N.__webglFramebuffer[rt][lt]=i.createFramebuffer()}else N.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer=[];for(let rt=0;rt<M.mipmaps.length;rt++)N.__webglFramebuffer[rt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ht)for(let rt=0,lt=j.length;rt<lt;rt++){const It=n.get(j[rt]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&yt(C)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let rt=0;rt<j.length;rt++){const lt=j[rt];N.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[rt]);const It=r.convert(lt.format,lt.colorSpace),st=r.convert(lt.type),St=x(lt.internalFormat,It,st,lt.colorSpace,C.isXRRenderTarget===!0),$t=ct(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,St,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,N.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Mt(N.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),At(i.TEXTURE_CUBE_MAP,M);for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0)for(let lt=0;lt<M.mipmaps.length;lt++)at(N.__webglFramebuffer[rt][lt],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,lt);else at(N.__webglFramebuffer[rt],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(M)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let rt=0,lt=j.length;rt<lt;rt++){const It=j[rt],st=n.get(It);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),At(i.TEXTURE_2D,It),at(N.__webglFramebuffer,C,It,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),m(It)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(rt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,$.__webglTexture),At(rt,M),M.mipmaps&&M.mipmaps.length>0)for(let lt=0;lt<M.mipmaps.length;lt++)at(N.__webglFramebuffer[lt],C,M,i.COLOR_ATTACHMENT0,rt,lt);else at(N.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,rt,0);m(M)&&f(rt),e.unbindTexture()}C.depthBuffer&&O(C)}function R(C){const M=C.textures;for(let N=0,$=M.length;N<$;N++){const j=M[N];if(m(j)){const Z=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ht=n.get(j).__webglTexture;e.bindTexture(Z,ht),f(Z),e.unbindTexture()}}}const q=[],B=[];function gt(C){if(C.samples>0){if(yt(C)===!1){const M=C.textures,N=C.width,$=C.height;let j=i.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(C),rt=M.length>1;if(rt)for(let lt=0;lt<M.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let lt=0;lt<M.length;lt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[lt]);const It=n.get(M[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,It,0)}i.blitFramebuffer(0,0,N,$,0,0,N,$,j,i.NEAREST),l===!0&&(q.length=0,B.length=0,q.push(i.COLOR_ATTACHMENT0+lt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(q.push(Z),B.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let lt=0;lt<M.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,ht.__webglColorRenderbuffer[lt]);const It=n.get(M[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,It,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ct(C){return Math.min(s.maxSamples,C.samples)}function yt(C){const M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ft(C){const M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function ot(C,M){const N=C.colorSpace,$=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==Gi&&N!==yn&&(he.getTransfer(N)===xe?($!==Mn||j!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),M}function pt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=P,this.setTexture2D=tt,this.setTexture2DArray=et,this.setTexture3D=J,this.setTextureCube=it,this.rebindTextures=z,this.setupRenderTarget=H,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=O,this.setupFrameBufferTexture=at,this.useMultisampledRTT=yt}function Uw(i,t){function e(n,s=yn){let r;const o=he.getTransfer(s);if(n===xi)return i.UNSIGNED_BYTE;if(n===Xp)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qp)return i.UNSIGNED_SHORT_5_5_5_1;if(n===av)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rv)return i.BYTE;if(n===ov)return i.SHORT;if(n===qa)return i.UNSIGNED_SHORT;if(n===Vp)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===Di)return i.FLOAT;if(n===Wi)return i.HALF_FLOAT;if(n===lv)return i.ALPHA;if(n===cv)return i.RGB;if(n===Mn)return i.RGBA;if(n===hv)return i.LUMINANCE;if(n===uv)return i.LUMINANCE_ALPHA;if(n===rr)return i.DEPTH_COMPONENT;if(n===_r)return i.DEPTH_STENCIL;if(n===$p)return i.RED;if(n===Yp)return i.RED_INTEGER;if(n===dv)return i.RG;if(n===Kp)return i.RG_INTEGER;if(n===jp)return i.RGBA_INTEGER;if(n===Ul||n===Nl||n===Fl||n===Ol)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ul)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ol)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ul)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ol)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Au||n===Ru||n===Cu||n===Du)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Au)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ru)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Du)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pu||n===Lu||n===ku)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pu||n===Lu)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ku)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Iu||n===Uu||n===Nu||n===Fu||n===Ou||n===Bu||n===zu||n===Hu||n===Wu||n===Gu||n===Vu||n===Xu||n===qu||n===$u)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Iu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ou)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$u)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bl||n===Yu||n===Ku)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Bl)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ku)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fv||n===ju||n===Zu||n===Qu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Bl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ju)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Nw extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class dn extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fw={type:"move"};class hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new dn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ow=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bw=`
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

}`;class zw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Xe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new tn({vertexShader:Ow,fragmentShader:Bw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Hw extends Rr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const v=new zw,m=e.getContextAttributes();let f=null,x=null;const _=[],w=[],A=new zt;let E=null;const D=new Ze;D.layers.enable(1),D.viewport=new we;const k=new Ze;k.layers.enable(2),k.viewport=new we;const b=[D,k],S=new Nw;S.layers.enable(1),S.layers.enable(2);let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let at=_[K];return at===void 0&&(at=new hc,_[K]=at),at.getTargetRaySpace()},this.getControllerGrip=function(K){let at=_[K];return at===void 0&&(at=new hc,_[K]=at),at.getGripSpace()},this.getHand=function(K){let at=_[K];return at===void 0&&(at=new hc,_[K]=at),at.getHandSpace()};function X(K){const at=w.indexOf(K.inputSource);if(at===-1)return;const Mt=_[at];Mt!==void 0&&(Mt.update(K.inputSource,K.frame,c||o),Mt.dispatchEvent({type:K.type,data:K.inputSource}))}function tt(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",et);for(let K=0;K<_.length;K++){const at=w[K];at!==null&&(w[K]=null,_[K].disconnect(at))}P=null,V=null,v.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,x=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",et),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Vn(p.framebufferWidth,p.framebufferHeight,{format:Mn,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,Mt=null,mt=null;m.depth&&(mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?_r:rr,Mt=m.stencil?vr:zi);const O={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(O),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Vn(d.textureWidth,d.textureHeight,{format:Mn,type:xi,depthTexture:new _l(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function et(K){for(let at=0;at<K.removed.length;at++){const Mt=K.removed[at],mt=w.indexOf(Mt);mt>=0&&(w[mt]=null,_[mt].disconnect(Mt))}for(let at=0;at<K.added.length;at++){const Mt=K.added[at];let mt=w.indexOf(Mt);if(mt===-1){for(let z=0;z<_.length;z++)if(z>=w.length){w.push(Mt),mt=z;break}else if(w[z]===null){w[z]=Mt,mt=z;break}if(mt===-1)break}const O=_[mt];O&&O.connect(Mt)}}const J=new I,it=new I;function Y(K,at,Mt){J.setFromMatrixPosition(at.matrixWorld),it.setFromMatrixPosition(Mt.matrixWorld);const mt=J.distanceTo(it),O=at.projectionMatrix.elements,z=Mt.projectionMatrix.elements,H=O[14]/(O[10]-1),R=O[14]/(O[10]+1),q=(O[9]+1)/O[5],B=(O[9]-1)/O[5],gt=(O[8]-1)/O[0],ct=(z[8]+1)/z[0],yt=H*gt,ft=H*ct,ot=mt/(-gt+ct),pt=ot*-gt;at.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(pt),K.translateZ(ot),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const C=H+ot,M=R+ot,N=yt-pt,$=ft+(mt-pt),j=q*R/M*C,Z=B*R/M*C;K.projectionMatrix.makePerspective(N,$,j,Z,C,M),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function xt(K,at){at===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(at.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;v.texture!==null&&(K.near=v.depthNear,K.far=v.depthFar),S.near=k.near=D.near=K.near,S.far=k.far=D.far=K.far,(P!==S.near||V!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,V=S.far,D.near=P,D.far=V,k.near=P,k.far=V,D.updateProjectionMatrix(),k.updateProjectionMatrix(),K.updateProjectionMatrix());const at=K.parent,Mt=S.cameras;xt(S,at);for(let mt=0;mt<Mt.length;mt++)xt(Mt[mt],at);Mt.length===2?Y(S,D,k):S.projectionMatrix.copy(D.projectionMatrix),Rt(K,S,at)};function Rt(K,at,Mt){Mt===null?K.matrix.copy(at.matrixWorld):(K.matrix.copy(Mt.matrixWorld),K.matrix.invert(),K.matrix.multiply(at.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(at.projectionMatrix),K.projectionMatrixInverse.copy(at.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=oo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let At=null;function Yt(K,at){if(h=at.getViewerPose(c||o),g=at,h!==null){const Mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let mt=!1;Mt.length!==S.cameras.length&&(S.cameras.length=0,mt=!0);for(let z=0;z<Mt.length;z++){const H=Mt[z];let R=null;if(p!==null)R=p.getViewport(H);else{const B=u.getViewSubImage(d,H);R=B.viewport,z===0&&(t.setRenderTargetTextures(x,B.colorTexture,d.ignoreDepthValues?void 0:B.depthStencilTexture),t.setRenderTarget(x))}let q=b[z];q===void 0&&(q=new Ze,q.layers.enable(z),q.viewport=new we,b[z]=q),q.matrix.fromArray(H.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(H.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(R.x,R.y,R.width,R.height),z===0&&(S.matrix.copy(q.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),mt===!0&&S.cameras.push(q)}const O=s.enabledFeatures;if(O&&O.includes("depth-sensing")){const z=u.getDepthInformation(Mt[0]);z&&z.isValid&&z.texture&&v.init(t,z,s.renderState)}}for(let Mt=0;Mt<_.length;Mt++){const mt=w[Mt],O=_[Mt];mt!==null&&O!==void 0&&O.update(mt,at,c||o)}At&&At(K,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const te=new um;te.setAnimationLoop(Yt),this.setAnimationLoop=function(K){At=K},this.dispose=function(){}}}const ts=new ni,Ww=new ge;function Gw(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,lm(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,x,_,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,w)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,x,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ge&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ge&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f),_=x.envMap,w=x.envMapRotation;_&&(m.envMap.value=_,ts.copy(w),ts.x*=-1,ts.y*=-1,ts.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),m.envMapRotation.value.setFromMatrix4(Ww.makeRotationFromEuler(ts)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=_*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ge&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const x=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vw(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const w=_.program;n.uniformBlockBinding(x,w)}function c(x,_){let w=s[x.id];w===void 0&&(g(x),w=h(x),s[x.id]=w,x.addEventListener("dispose",m));const A=_.program;n.updateUBOMapping(x,A);const E=t.render.frame;r[x.id]!==E&&(d(x),r[x.id]=E)}function h(x){const _=u();x.__bindingPointIndex=_;const w=i.createBuffer(),A=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,w),w}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=s[x.id],w=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,D=w.length;E<D;E++){const k=Array.isArray(w[E])?w[E]:[w[E]];for(let b=0,S=k.length;b<S;b++){const P=k[b];if(p(P,E,b,A)===!0){const V=P.__offset,X=Array.isArray(P.value)?P.value:[P.value];let tt=0;for(let et=0;et<X.length;et++){const J=X[et],it=v(J);typeof J=="number"||typeof J=="boolean"?(P.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,V+tt,P.__data)):J.isMatrix3?(P.__data[0]=J.elements[0],P.__data[1]=J.elements[1],P.__data[2]=J.elements[2],P.__data[3]=0,P.__data[4]=J.elements[3],P.__data[5]=J.elements[4],P.__data[6]=J.elements[5],P.__data[7]=0,P.__data[8]=J.elements[6],P.__data[9]=J.elements[7],P.__data[10]=J.elements[8],P.__data[11]=0):(J.toArray(P.__data,tt),tt+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,_,w,A){const E=x.value,D=_+"_"+w;if(A[D]===void 0)return typeof E=="number"||typeof E=="boolean"?A[D]=E:A[D]=E.clone(),!0;{const k=A[D];if(typeof E=="number"||typeof E=="boolean"){if(k!==E)return A[D]=E,!0}else if(k.equals(E)===!1)return k.copy(E),!0}return!1}function g(x){const _=x.uniforms;let w=0;const A=16;for(let D=0,k=_.length;D<k;D++){const b=Array.isArray(_[D])?_[D]:[_[D]];for(let S=0,P=b.length;S<P;S++){const V=b[S],X=Array.isArray(V.value)?V.value:[V.value];for(let tt=0,et=X.length;tt<et;tt++){const J=X[tt],it=v(J),Y=w%A;Y!==0&&A-Y<it.boundary&&(w+=A-Y),V.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=w,w+=it.storage}}}const E=w%A;return E>0&&(w+=A-E),x.__size=w,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const w=o.indexOf(_.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class _m{constructor(t={}){const{canvas:e=Bv(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const f=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ue,this.toneMapping=gi,this.toneMappingExposure=1;const _=this;let w=!1,A=0,E=0,D=null,k=-1,b=null;const S=new we,P=new we;let V=null;const X=new Et(0);let tt=0,et=e.width,J=e.height,it=1,Y=null,xt=null;const Rt=new we(0,0,et,J),At=new we(0,0,et,J);let Yt=!1;const te=new kh;let K=!1,at=!1;const Mt=new ge,mt=new I,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let z=!1;function H(){return D===null?it:1}let R=n;function q(T,U){return e.getContext(T,U)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rh}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",Q,!1),e.addEventListener("webglcontextcreationerror",nt,!1),R===null){const U="webgl2";if(R=q(U,T),R===null)throw q(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let B,gt,ct,yt,ft,ot,pt,C,M,N,$,j,Z,ht,rt,lt,It,st,St,$t,Bt,_t,Xt,Qt;function Me(){B=new t1(R),B.init(),_t=new Uw(R,B),gt=new Yy(R,B,t,_t),ct=new kw(R),yt=new i1(R),ft=new yw,ot=new Iw(R,B,ct,ft,gt,_t,yt),pt=new jy(_),C=new Jy(_),M=new h_(R),Xt=new qy(R,M),N=new e1(R,M,yt,Xt),$=new r1(R,N,M,yt),St=new s1(R,gt,ot),lt=new Ky(ft),j=new xw(_,pt,C,B,gt,Xt,lt),Z=new Gw(_,ft),ht=new Mw,rt=new Rw(B),st=new Xy(_,pt,C,ct,$,d,l),It=new Lw(_,$,gt),Qt=new Vw(R,yt,gt,ct),$t=new $y(R,B,yt),Bt=new n1(R,B,yt),yt.programs=j.programs,_.capabilities=gt,_.extensions=B,_.properties=ft,_.renderLists=ht,_.shadowMap=It,_.state=ct,_.info=yt}Me();const L=new Hw(_,R);this.xr=L,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=B.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=B.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(T){T!==void 0&&(it=T,this.setSize(et,J,!1))},this.getSize=function(T){return T.set(et,J)},this.setSize=function(T,U,W=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=T,J=U,e.width=Math.floor(T*it),e.height=Math.floor(U*it),W===!0&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(et*it,J*it).floor()},this.setDrawingBufferSize=function(T,U,W){et=T,J=U,it=W,e.width=Math.floor(T*W),e.height=Math.floor(U*W),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(Rt)},this.setViewport=function(T,U,W,G){T.isVector4?Rt.set(T.x,T.y,T.z,T.w):Rt.set(T,U,W,G),ct.viewport(S.copy(Rt).multiplyScalar(it).round())},this.getScissor=function(T){return T.copy(At)},this.setScissor=function(T,U,W,G){T.isVector4?At.set(T.x,T.y,T.z,T.w):At.set(T,U,W,G),ct.scissor(P.copy(At).multiplyScalar(it).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(T){ct.setScissorTest(Yt=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){xt=T},this.getClearColor=function(T){return T.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(T=!0,U=!0,W=!0){let G=0;if(T){let F=!1;if(D!==null){const ut=D.texture.format;F=ut===jp||ut===Kp||ut===Yp}if(F){const ut=D.texture.type,Tt=ut===xi||ut===zi||ut===qa||ut===vr||ut===Xp||ut===qp,Ct=st.getClearColor(),kt=st.getClearAlpha(),Ht=Ct.r,Wt=Ct.g,Ot=Ct.b;Tt?(p[0]=Ht,p[1]=Wt,p[2]=Ot,p[3]=kt,R.clearBufferuiv(R.COLOR,0,p)):(g[0]=Ht,g[1]=Wt,g[2]=Ot,g[3]=kt,R.clearBufferiv(R.COLOR,0,g))}else G|=R.COLOR_BUFFER_BIT}U&&(G|=R.DEPTH_BUFFER_BIT),W&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",Q,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),ht.dispose(),rt.dispose(),ft.dispose(),pt.dispose(),C.dispose(),$.dispose(),Xt.dispose(),Qt.dispose(),j.dispose(),L.dispose(),L.removeEventListener("sessionstart",Xn),L.removeEventListener("sessionend",qn),$i.stop()};function bt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=yt.autoReset,U=It.enabled,W=It.autoUpdate,G=It.needsUpdate,F=It.type;Me(),yt.autoReset=T,It.enabled=U,It.autoUpdate=W,It.needsUpdate=G,It.type=F}function nt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function dt(T){const U=T.target;U.removeEventListener("dispose",dt),Vt(U)}function Vt(T){re(T),ft.remove(T)}function re(T){const U=ft.get(T).programs;U!==void 0&&(U.forEach(function(W){j.releaseProgram(W)}),T.isShaderMaterial&&j.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,W,G,F,ut){U===null&&(U=O);const Tt=F.isMesh&&F.matrixWorld.determinant()<0,Ct=vg(T,U,W,G,F);ct.setMaterial(G,Tt);let kt=W.index,Ht=1;if(G.wireframe===!0){if(kt=N.getWireframeAttribute(W),kt===void 0)return;Ht=2}const Wt=W.drawRange,Ot=W.attributes.position;let ae=Wt.start*Ht,be=(Wt.start+Wt.count)*Ht;ut!==null&&(ae=Math.max(ae,ut.start*Ht),be=Math.min(be,(ut.start+ut.count)*Ht)),kt!==null?(ae=Math.max(ae,0),be=Math.min(be,kt.count)):Ot!=null&&(ae=Math.max(ae,0),be=Math.min(be,Ot.count));const Te=be-ae;if(Te<0||Te===1/0)return;Xt.setup(F,G,Ct,W,kt);let pn,le=$t;if(kt!==null&&(pn=M.get(kt),le=Bt,le.setIndex(pn)),F.isMesh)G.wireframe===!0?(ct.setLineWidth(G.wireframeLinewidth*H()),le.setMode(R.LINES)):le.setMode(R.TRIANGLES);else if(F.isLine){let Ft=G.linewidth;Ft===void 0&&(Ft=1),ct.setLineWidth(Ft*H()),F.isLineSegments?le.setMode(R.LINES):F.isLineLoop?le.setMode(R.LINE_LOOP):le.setMode(R.LINE_STRIP)}else F.isPoints?le.setMode(R.POINTS):F.isSprite&&le.setMode(R.TRIANGLES);if(F.isBatchedMesh)F._multiDrawInstances!==null?le.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances):le.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)le.renderInstances(ae,Te,F.count);else if(W.isInstancedBufferGeometry){const Ft=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,nn=Math.min(W.instanceCount,Ft);le.renderInstances(ae,Te,nn)}else le.render(ae,Te)};function Ae(T,U,W){T.transparent===!0&&T.side===Qe&&T.forceSinglePass===!1?(T.side=Ge,T.needsUpdate=!0,Eo(T,U,W),T.side=Bi,T.needsUpdate=!0,Eo(T,U,W),T.side=Qe):Eo(T,U,W)}this.compile=function(T,U,W=null){W===null&&(W=T),m=rt.get(W),m.init(U),x.push(m),W.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),T!==W&&T.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const G=new Set;return T.traverse(function(F){const ut=F.material;if(ut)if(Array.isArray(ut))for(let Tt=0;Tt<ut.length;Tt++){const Ct=ut[Tt];Ae(Ct,W,F),G.add(Ct)}else Ae(ut,W,F),G.add(ut)}),x.pop(),m=null,G},this.compileAsync=function(T,U,W=null){const G=this.compile(T,U,W);return new Promise(F=>{function ut(){if(G.forEach(function(Tt){ft.get(Tt).currentProgram.isReady()&&G.delete(Tt)}),G.size===0){F(T);return}setTimeout(ut,10)}B.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let ze=null;function fe(T){ze&&ze(T)}function Xn(){$i.stop()}function qn(){$i.start()}const $i=new um;$i.setAnimationLoop(fe),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(T){ze=T,L.setAnimationLoop(T),T===null?$i.stop():$i.start()},L.addEventListener("sessionstart",Xn),L.addEventListener("sessionend",qn),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(U),U=L.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,U,D),m=rt.get(T,x.length),m.init(U),x.push(m),Mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),te.setFromProjectionMatrix(Mt),at=this.localClippingEnabled,K=lt.init(this.clippingPlanes,at),v=ht.get(T,f.length),v.init(),f.push(v),L.enabled===!0&&L.isPresenting===!0){const ut=_.xr.getDepthSensingMesh();ut!==null&&Dl(ut,U,-1/0,_.sortObjects)}Dl(T,U,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(Y,xt),z=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,z&&st.addToRenderList(v,T),this.info.render.frame++,K===!0&&lt.beginShadows();const W=m.state.shadowsArray;It.render(W,T,U),K===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=v.opaque,F=v.transmissive;if(m.setupLights(),U.isArrayCamera){const ut=U.cameras;if(F.length>0)for(let Tt=0,Ct=ut.length;Tt<Ct;Tt++){const kt=ut[Tt];xu(G,F,T,kt)}z&&st.render(T);for(let Tt=0,Ct=ut.length;Tt<Ct;Tt++){const kt=ut[Tt];_u(v,T,kt,kt.viewport)}}else F.length>0&&xu(G,F,T,U),z&&st.render(T),_u(v,T,U);D!==null&&(ot.updateMultisampleRenderTarget(D),ot.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(_,T,U),Xt.resetDefaultState(),k=-1,b=null,x.pop(),x.length>0?(m=x[x.length-1],K===!0&&lt.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Dl(T,U,W,G){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||te.intersectsSprite(T)){G&&mt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Mt);const Tt=$.update(T),Ct=T.material;Ct.visible&&v.push(T,Tt,Ct,W,mt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||te.intersectsObject(T))){const Tt=$.update(T),Ct=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),mt.copy(T.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),mt.copy(Tt.boundingSphere.center)),mt.applyMatrix4(T.matrixWorld).applyMatrix4(Mt)),Array.isArray(Ct)){const kt=Tt.groups;for(let Ht=0,Wt=kt.length;Ht<Wt;Ht++){const Ot=kt[Ht],ae=Ct[Ot.materialIndex];ae&&ae.visible&&v.push(T,Tt,ae,W,mt.z,Ot)}}else Ct.visible&&v.push(T,Tt,Ct,W,mt.z,null)}}const ut=T.children;for(let Tt=0,Ct=ut.length;Tt<Ct;Tt++)Dl(ut[Tt],U,W,G)}function _u(T,U,W,G){const F=T.opaque,ut=T.transmissive,Tt=T.transparent;m.setupLightsView(W),K===!0&&lt.setGlobalState(_.clippingPlanes,W),G&&ct.viewport(S.copy(G)),F.length>0&&To(F,U,W),ut.length>0&&To(ut,U,W),Tt.length>0&&To(Tt,U,W),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function xu(T,U,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Vn(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float")?Wi:xi,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const ut=m.state.transmissionRenderTarget[G.id],Tt=G.viewport||S;ut.setSize(Tt.z,Tt.w);const Ct=_.getRenderTarget();_.setRenderTarget(ut),_.getClearColor(X),tt=_.getClearAlpha(),tt<1&&_.setClearColor(16777215,.5),z?st.render(W):_.clear();const kt=_.toneMapping;_.toneMapping=gi;const Ht=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),K===!0&&lt.setGlobalState(_.clippingPlanes,G),To(T,W,G),ot.updateMultisampleRenderTarget(ut),ot.updateRenderTargetMipmap(ut),B.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Ot=0,ae=U.length;Ot<ae;Ot++){const be=U[Ot],Te=be.object,pn=be.geometry,le=be.material,Ft=be.group;if(le.side===Qe&&Te.layers.test(G.layers)){const nn=le.side;le.side=Ge,le.needsUpdate=!0,yu(Te,W,G,pn,le,Ft),le.side=nn,le.needsUpdate=!0,Wt=!0}}Wt===!0&&(ot.updateMultisampleRenderTarget(ut),ot.updateRenderTargetMipmap(ut))}_.setRenderTarget(Ct),_.setClearColor(X,tt),Ht!==void 0&&(G.viewport=Ht),_.toneMapping=kt}function To(T,U,W){const G=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ut=T.length;F<ut;F++){const Tt=T[F],Ct=Tt.object,kt=Tt.geometry,Ht=G===null?Tt.material:G,Wt=Tt.group;Ct.layers.test(W.layers)&&yu(Ct,U,W,kt,Ht,Wt)}}function yu(T,U,W,G,F,ut){T.onBeforeRender(_,U,W,G,F,ut),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(_,U,W,G,T,ut),F.transparent===!0&&F.side===Qe&&F.forceSinglePass===!1?(F.side=Ge,F.needsUpdate=!0,_.renderBufferDirect(W,U,G,F,T,ut),F.side=Bi,F.needsUpdate=!0,_.renderBufferDirect(W,U,G,F,T,ut),F.side=Qe):_.renderBufferDirect(W,U,G,F,T,ut),T.onAfterRender(_,U,W,G,F,ut)}function Eo(T,U,W){U.isScene!==!0&&(U=O);const G=ft.get(T),F=m.state.lights,ut=m.state.shadowsArray,Tt=F.state.version,Ct=j.getParameters(T,F.state,ut,U,W),kt=j.getProgramCacheKey(Ct);let Ht=G.programs;G.environment=T.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(T.isMeshStandardMaterial?C:pt).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ht===void 0&&(T.addEventListener("dispose",dt),Ht=new Map,G.programs=Ht);let Wt=Ht.get(kt);if(Wt!==void 0){if(G.currentProgram===Wt&&G.lightsStateVersion===Tt)return Mu(T,Ct),Wt}else Ct.uniforms=j.getUniforms(T),T.onBuild(W,Ct,_),T.onBeforeCompile(Ct,_),Wt=j.acquireProgram(Ct,kt),Ht.set(kt,Wt),G.uniforms=Ct.uniforms;const Ot=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ot.clippingPlanes=lt.uniform),Mu(T,Ct),G.needsLights=xg(T),G.lightsStateVersion=Tt,G.needsLights&&(Ot.ambientLightColor.value=F.state.ambient,Ot.lightProbe.value=F.state.probe,Ot.directionalLights.value=F.state.directional,Ot.directionalLightShadows.value=F.state.directionalShadow,Ot.spotLights.value=F.state.spot,Ot.spotLightShadows.value=F.state.spotShadow,Ot.rectAreaLights.value=F.state.rectArea,Ot.ltc_1.value=F.state.rectAreaLTC1,Ot.ltc_2.value=F.state.rectAreaLTC2,Ot.pointLights.value=F.state.point,Ot.pointLightShadows.value=F.state.pointShadow,Ot.hemisphereLights.value=F.state.hemi,Ot.directionalShadowMap.value=F.state.directionalShadowMap,Ot.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ot.spotShadowMap.value=F.state.spotShadowMap,Ot.spotLightMatrix.value=F.state.spotLightMatrix,Ot.spotLightMap.value=F.state.spotLightMap,Ot.pointShadowMap.value=F.state.pointShadowMap,Ot.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Wt,G.uniformsList=null,Wt}function wu(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Fa.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Mu(T,U){const W=ft.get(T);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function vg(T,U,W,G,F){U.isScene!==!0&&(U=O),ot.resetTextureUnits();const ut=U.fog,Tt=G.isMeshStandardMaterial?U.environment:null,Ct=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Gi,kt=(G.isMeshStandardMaterial?C:pt).get(G.envMap||Tt),Ht=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Wt=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ot=!!W.morphAttributes.position,ae=!!W.morphAttributes.normal,be=!!W.morphAttributes.color;let Te=gi;G.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Te=_.toneMapping);const pn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,le=pn!==void 0?pn.length:0,Ft=ft.get(G),nn=m.state.lights;if(K===!0&&(at===!0||T!==b)){const Tn=T===b&&G.id===k;lt.setState(G,T,Tn)}let pe=!1;G.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==nn.state.version||Ft.outputColorSpace!==Ct||F.isBatchedMesh&&Ft.batching===!1||!F.isBatchedMesh&&Ft.batching===!0||F.isBatchedMesh&&Ft.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ft.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ft.instancing===!1||!F.isInstancedMesh&&Ft.instancing===!0||F.isSkinnedMesh&&Ft.skinning===!1||!F.isSkinnedMesh&&Ft.skinning===!0||F.isInstancedMesh&&Ft.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ft.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ft.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ft.instancingMorph===!1&&F.morphTexture!==null||Ft.envMap!==kt||G.fog===!0&&Ft.fog!==ut||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==lt.numPlanes||Ft.numIntersection!==lt.numIntersection)||Ft.vertexAlphas!==Ht||Ft.vertexTangents!==Wt||Ft.morphTargets!==Ot||Ft.morphNormals!==ae||Ft.morphColors!==be||Ft.toneMapping!==Te||Ft.morphTargetsCount!==le)&&(pe=!0):(pe=!0,Ft.__version=G.version);let si=Ft.currentProgram;pe===!0&&(si=Eo(G,U,F));let Ao=!1,Yi=!1,Pl=!1;const He=si.getUniforms(),wi=Ft.uniforms;if(ct.useProgram(si.program)&&(Ao=!0,Yi=!0,Pl=!0),G.id!==k&&(k=G.id,Yi=!0),Ao||b!==T){He.setValue(R,"projectionMatrix",T.projectionMatrix),He.setValue(R,"viewMatrix",T.matrixWorldInverse);const Tn=He.map.cameraPosition;Tn!==void 0&&Tn.setValue(R,mt.setFromMatrixPosition(T.matrixWorld)),gt.logarithmicDepthBuffer&&He.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&He.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Yi=!0,Pl=!0)}if(F.isSkinnedMesh){He.setOptional(R,F,"bindMatrix"),He.setOptional(R,F,"bindMatrixInverse");const Tn=F.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),He.setValue(R,"boneTexture",Tn.boneTexture,ot))}F.isBatchedMesh&&(He.setOptional(R,F,"batchingTexture"),He.setValue(R,"batchingTexture",F._matricesTexture,ot),He.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&He.setValue(R,"batchingColorTexture",F._colorsTexture,ot));const Ll=W.morphAttributes;if((Ll.position!==void 0||Ll.normal!==void 0||Ll.color!==void 0)&&St.update(F,W,si),(Yi||Ft.receiveShadow!==F.receiveShadow)&&(Ft.receiveShadow=F.receiveShadow,He.setValue(R,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(wi.envMap.value=kt,wi.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(wi.envMapIntensity.value=U.environmentIntensity),Yi&&(He.setValue(R,"toneMappingExposure",_.toneMappingExposure),Ft.needsLights&&_g(wi,Pl),ut&&G.fog===!0&&Z.refreshFogUniforms(wi,ut),Z.refreshMaterialUniforms(wi,G,it,J,m.state.transmissionRenderTarget[T.id]),Fa.upload(R,wu(Ft),wi,ot)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Fa.upload(R,wu(Ft),wi,ot),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&He.setValue(R,"center",F.center),He.setValue(R,"modelViewMatrix",F.modelViewMatrix),He.setValue(R,"normalMatrix",F.normalMatrix),He.setValue(R,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Tn=G.uniformsGroups;for(let kl=0,yg=Tn.length;kl<yg;kl++){const Su=Tn[kl];Qt.update(Su,si),Qt.bind(Su,si)}}return si}function _g(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function xg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,U,W){ft.get(T.texture).__webglTexture=U,ft.get(T.depthTexture).__webglTexture=W;const G=ft.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=W===void 0,G.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const W=ft.get(T);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,W=0){D=T,A=U,E=W;let G=!0,F=null,ut=!1,Tt=!1;if(T){const kt=ft.get(T);kt.__useDefaultFramebuffer!==void 0?(ct.bindFramebuffer(R.FRAMEBUFFER,null),G=!1):kt.__webglFramebuffer===void 0?ot.setupRenderTarget(T):kt.__hasExternalTextures&&ot.rebindTextures(T,ft.get(T.texture).__webglTexture,ft.get(T.depthTexture).__webglTexture);const Ht=T.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Tt=!0);const Wt=ft.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Wt[U])?F=Wt[U][W]:F=Wt[U],ut=!0):T.samples>0&&ot.useMultisampledRTT(T)===!1?F=ft.get(T).__webglMultisampledFramebuffer:Array.isArray(Wt)?F=Wt[W]:F=Wt,S.copy(T.viewport),P.copy(T.scissor),V=T.scissorTest}else S.copy(Rt).multiplyScalar(it).floor(),P.copy(At).multiplyScalar(it).floor(),V=Yt;if(ct.bindFramebuffer(R.FRAMEBUFFER,F)&&G&&ct.drawBuffers(T,F),ct.viewport(S),ct.scissor(P),ct.setScissorTest(V),ut){const kt=ft.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,kt.__webglTexture,W)}else if(Tt){const kt=ft.get(T.texture),Ht=U||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,kt.__webglTexture,W||0,Ht)}k=-1},this.readRenderTargetPixels=function(T,U,W,G,F,ut,Tt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct){ct.bindFramebuffer(R.FRAMEBUFFER,Ct);try{const kt=T.texture,Ht=kt.format,Wt=kt.type;if(!gt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-G&&W>=0&&W<=T.height-F&&R.readPixels(U,W,G,F,_t.convert(Ht),_t.convert(Wt),ut)}finally{const kt=D!==null?ft.get(D).__webglFramebuffer:null;ct.bindFramebuffer(R.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(T,U,W,G,F,ut,Tt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=ft.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct){ct.bindFramebuffer(R.FRAMEBUFFER,Ct);try{const kt=T.texture,Ht=kt.format,Wt=kt.type;if(!gt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-G&&W>=0&&W<=T.height-F){const Ot=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ot),R.bufferData(R.PIXEL_PACK_BUFFER,ut.byteLength,R.STREAM_READ),R.readPixels(U,W,G,F,_t.convert(Ht),_t.convert(Wt),0),R.flush();const ae=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);await zv(R,ae,4);try{R.bindBuffer(R.PIXEL_PACK_BUFFER,Ot),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ut)}finally{R.deleteBuffer(Ot),R.deleteSync(ae)}return ut}}finally{const kt=D!==null?ft.get(D).__webglFramebuffer:null;ct.bindFramebuffer(R.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(T,U=null,W=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-W),F=Math.floor(T.image.width*G),ut=Math.floor(T.image.height*G),Tt=U!==null?U.x:0,Ct=U!==null?U.y:0;ot.setTexture2D(T,0),R.copyTexSubImage2D(R.TEXTURE_2D,W,0,0,Tt,Ct,F,ut),ct.unbindTexture()},this.copyTextureToTexture=function(T,U,W=null,G=null,F=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],U=arguments[2],F=arguments[3]||0,W=null);let ut,Tt,Ct,kt,Ht,Wt;W!==null?(ut=W.max.x-W.min.x,Tt=W.max.y-W.min.y,Ct=W.min.x,kt=W.min.y):(ut=T.image.width,Tt=T.image.height,Ct=0,kt=0),G!==null?(Ht=G.x,Wt=G.y):(Ht=0,Wt=0);const Ot=_t.convert(U.format),ae=_t.convert(U.type);ot.setTexture2D(U,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const be=R.getParameter(R.UNPACK_ROW_LENGTH),Te=R.getParameter(R.UNPACK_IMAGE_HEIGHT),pn=R.getParameter(R.UNPACK_SKIP_PIXELS),le=R.getParameter(R.UNPACK_SKIP_ROWS),Ft=R.getParameter(R.UNPACK_SKIP_IMAGES),nn=T.isCompressedTexture?T.mipmaps[F]:T.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,nn.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,nn.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ct),R.pixelStorei(R.UNPACK_SKIP_ROWS,kt),T.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,F,Ht,Wt,ut,Tt,Ot,ae,nn.data):T.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,F,Ht,Wt,nn.width,nn.height,Ot,nn.data):R.texSubImage2D(R.TEXTURE_2D,F,Ht,Wt,Ot,ae,nn),R.pixelStorei(R.UNPACK_ROW_LENGTH,be),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Te),R.pixelStorei(R.UNPACK_SKIP_PIXELS,pn),R.pixelStorei(R.UNPACK_SKIP_ROWS,le),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ft),F===0&&U.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),ct.unbindTexture()},this.copyTextureToTexture3D=function(T,U,W=null,G=null,F=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,G=arguments[1]||null,T=arguments[2],U=arguments[3],F=arguments[4]||0);let ut,Tt,Ct,kt,Ht,Wt,Ot,ae,be;const Te=T.isCompressedTexture?T.mipmaps[F]:T.image;W!==null?(ut=W.max.x-W.min.x,Tt=W.max.y-W.min.y,Ct=W.max.z-W.min.z,kt=W.min.x,Ht=W.min.y,Wt=W.min.z):(ut=Te.width,Tt=Te.height,Ct=Te.depth,kt=0,Ht=0,Wt=0),G!==null?(Ot=G.x,ae=G.y,be=G.z):(Ot=0,ae=0,be=0);const pn=_t.convert(U.format),le=_t.convert(U.type);let Ft;if(U.isData3DTexture)ot.setTexture3D(U,0),Ft=R.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)ot.setTexture2DArray(U,0),Ft=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const nn=R.getParameter(R.UNPACK_ROW_LENGTH),pe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),si=R.getParameter(R.UNPACK_SKIP_PIXELS),Ao=R.getParameter(R.UNPACK_SKIP_ROWS),Yi=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Te.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Te.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,kt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ht),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Wt),T.isDataTexture||T.isData3DTexture?R.texSubImage3D(Ft,F,Ot,ae,be,ut,Tt,Ct,pn,le,Te.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(Ft,F,Ot,ae,be,ut,Tt,Ct,pn,Te.data):R.texSubImage3D(Ft,F,Ot,ae,be,ut,Tt,Ct,pn,le,Te),R.pixelStorei(R.UNPACK_ROW_LENGTH,nn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,pe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,si),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ao),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Yi),F===0&&U.generateMipmaps&&R.generateMipmap(Ft),ct.unbindTexture()},this.initRenderTarget=function(T){ft.get(T).__webglFramebuffer===void 0&&ot.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ot.setTextureCube(T,0):T.isData3DTexture?ot.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ot.setTexture2DArray(T,0):ot.setTexture2D(T,0),ct.unbindTexture()},this.resetState=function(){A=0,E=0,D=null,ct.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ch?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===vl?"display-p3":"srgb"}}class yr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Et(t),this.near=e,this.far=n}clone(){return new yr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wr extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Xw{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=oh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ph("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new I;class Za{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Za(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class xm extends Xi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Fs;const Or=new I,Os=new I,Bs=new I,zs=new zt,Br=new zt,ym=new ge,jo=new I,zr=new I,Zo=new I,Vd=new zt,uc=new zt,Xd=new zt;class qw extends Ie{constructor(t=new xm){if(super(),this.isSprite=!0,this.type="Sprite",Fs===void 0){Fs=new qe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xw(e,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new Za(n,3,0,!1)),Fs.setAttribute("uv",new Za(n,2,3,!1))}this.geometry=Fs,this.material=t,this.center=new zt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Os.setFromMatrixScale(this.matrixWorld),ym.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Os.multiplyScalar(-Bs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Qo(jo.set(-.5,-.5,0),Bs,o,Os,s,r),Qo(zr.set(.5,-.5,0),Bs,o,Os,s,r),Qo(Zo.set(.5,.5,0),Bs,o,Os,s,r),Vd.set(0,0),uc.set(1,0),Xd.set(1,1);let a=t.ray.intersectTriangle(jo,zr,Zo,!1,Or);if(a===null&&(Qo(zr.set(-.5,.5,0),Bs,o,Os,s,r),uc.set(0,1),a=t.ray.intersectTriangle(jo,Zo,zr,!1,Or),a===null))return;const l=t.ray.origin.distanceTo(Or);l<t.near||l>t.far||e.push({distance:l,point:Or.clone(),uv:Ln.getInterpolation(Or,jo,zr,Zo,Vd,uc,Xd,new zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Qo(i,t,e,n,s,r){zs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Br.x=r*zs.x-s*zs.y,Br.y=s*zs.x+r*zs.y):Br.copy(zs),i.copy(t),i.x+=Br.x,i.y+=Br.y,i.applyMatrix4(ym)}class Uh extends Xe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=de,h=de,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wm extends Xi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Qa=new I,Ja=new I,qd=new ge,Hr=new Lh,Jo=new _o,dc=new I,$d=new I;class $w extends Ie{constructor(t=new qe,e=new wm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Qa.fromBufferAttribute(e,s-1),Ja.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Qa.distanceTo(Ja);t.setAttribute("lineDistance",new Fe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(s),Jo.radius+=r,t.ray.intersectsSphere(Jo)===!1)return;qd.copy(s).invert(),Hr.copy(t.ray).applyMatrix4(qd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const f=h.getX(v),x=h.getX(v+1),_=ta(this,t,Hr,l,f,x);_&&e.push(_)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),f=ta(this,t,Hr,l,v,m);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const f=ta(this,t,Hr,l,v,v+1);f&&e.push(f)}if(this.isLineLoop){const v=ta(this,t,Hr,l,g-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ta(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Qa.fromBufferAttribute(o,s),Ja.fromBufferAttribute(o,r),e.distanceSqToSegment(Qa,Ja,dc,$d)>n)return;dc.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(dc);if(!(l<t.near||l>t.far))return{distance:l,point:$d.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,object:i}}const Yd=new I,Kd=new I;class Yw extends $w{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Yd.fromBufferAttribute(e,s),Kd.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Yd.distanceTo(Kd);t.setAttribute("lineDistance",new Fe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nh extends Xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const jd=new ge,lh=new Lh,ea=new _o,na=new I;class Mm extends Ie{constructor(t=new qe,e=new Nh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(s),ea.radius+=r,t.ray.intersectsSphere(ea)===!1)return;jd.copy(s).invert(),lh.copy(t.ray).applyMatrix4(jd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);na.fromBufferAttribute(u,m),Zd(na,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,v=p;g<v;g++)na.fromBufferAttribute(u,g),Zd(na,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zd(i,t,e,n,s,r,o){const a=lh.distanceSqToPoint(i);if(a<e){const l=new I;lh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class yl extends Xe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const ia=new I,sa=new I,fc=new I,ra=new Ln;class Kw extends qe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(or*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:f}=ra;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),ra.getNormal(fc),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const _=(x+1)%3,w=u[x],A=u[_],E=ra[h[x]],D=ra[h[_]],k=`${w}_${A}`,b=`${A}_${w}`;b in d&&d[b]?(fc.dot(d[b].normal)<=r&&(p.push(E.x,E.y,E.z),p.push(D.x,D.y,D.z)),d[b]=null):k in d||(d[k]={index0:c[x],index1:c[_],normal:fc.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:m}=d[g];ia.fromBufferAttribute(a,v),sa.fromBufferAttribute(a,m),p.push(ia.x,ia.y,ia.z),p.push(sa.x,sa.y,sa.z)}this.setAttribute("position",new Fe(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Fh extends qe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new I,d=new I,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const x=[],_=f/n;let w=0;f===0&&o===0?w=.5/e:f===n&&l===Math.PI&&(w=-.5/e);for(let A=0;A<=e;A++){const E=A/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(E+w,1-_),x.push(c++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<e;x++){const _=h[f][x+1],w=h[f][x],A=h[f+1][x],E=h[f+1][x+1];(f!==0||o>0)&&p.push(_,w,E),(f!==n-1||l<Math.PI)&&p.push(w,A,E)}this.setIndex(p),this.setAttribute("position",new Fe(g,3)),this.setAttribute("normal",new Fe(v,3)),this.setAttribute("uv",new Fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class jw extends Xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qp,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qd extends jw{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new zt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Jd={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Zw{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Qw=new Zw;class Oh{constructor(t){this.manager=t!==void 0?t:Qw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Oh.DEFAULT_MATERIAL_NAME="__DEFAULT";class Jw extends Oh{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Jd.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=ao("img");function l(){h(),Jd.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Dr extends Oh{constructor(t){super(t)}load(t,e,n,s){const r=new Xe,o=new Jw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Bh extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class tM extends Bh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const pc=new ge,tf=new I,ef=new I;class eM{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kh,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;tf.setFromMatrixPosition(t.matrixWorld),e.position.copy(tf),ef.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ef),e.updateMatrixWorld(),pc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class nM extends eM{constructor(){super(new lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sm extends Bh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new nM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class nf extends Bh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rh);const bm=13625079,iM=[.3,.52,.79],sM=[.81,.9,.97],mc=i=>`rgb(${Math.round(i[0]*255)},${Math.round(i[1]*255)},${Math.round(i[2]*255)})`;function rM(i,t,e){const n=[(t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2],s=i.createLinearGradient(0,0,0,256);s.addColorStop(0,mc(t)),s.addColorStop(.55,mc(n)),s.addColorStop(1,mc(e)),i.fillStyle=s,i.fillRect(0,0,2,256)}function oM(){const i=document.createElement("canvas");i.width=2,i.height=256;const t=i.getContext("2d");t&&rM(t,iM,sM);const e=new yl(i);return e.colorSpace=ue,e}function aM(i){const t=i|0,e=`
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
`.trim();return new tn({uniforms:{tColor:{value:null},tDepth:{value:null},tBloom:{value:null},tAO:{value:null},uSunUV:{value:new zt(.5,.5)},uSunColor:{value:new Et(1,.95,.8)},uIntensity:{value:0},uDecay:{value:.96},uWeight:{value:.9},uBloom:{value:0},uAO:{value:0},uUnderwater:{value:0},uWaterIrradiance:{value:new Et(.04,.18,.26)}},vertexShader:e,fragmentShader:n,depthTest:!1,depthWrite:!1})}class sf{constructor(t){y(this,"material");y(this,"quad");y(this,"quadScene",new wr);y(this,"quadCam",new lo(-1,1,1,-1,0,1));this.material=aM(t),this.quad=new Jt(new hn(2,2),this.material),this.quadScene.add(this.quad)}render(t){t.render(this.quadScene,this.quadCam)}dispose(){this.material.dispose(),this.quad.geometry.dispose()}}const lM=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim(),cM=`
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
`.trim(),hM=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim(),uM=`
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
`.trim();class dM{constructor(t,e){y(this,"bloomA");y(this,"bloomB");y(this,"extractMat");y(this,"extractScene",new wr);y(this,"extractCam",new lo(-1,1,1,-1,0,1));y(this,"blurMat");y(this,"blurScene",new wr);y(this,"blurCam",new lo(-1,1,1,-1,0,1));this.bloomA=this.buildRT(1,1),this.bloomB=this.buildRT(1,1),this.extractMat=new tn({uniforms:{tScene:{value:null},uThreshold:{value:1.05},uKnee:{value:.22},uSourceTexel:{value:new zt(1,1)}},vertexShader:lM,fragmentShader:cM,depthTest:!1,depthWrite:!1});const n=new Jt(new hn(2,2),this.extractMat);this.extractScene.add(n),this.blurMat=new tn({uniforms:{tBlur:{value:null},uTexelSize:{value:new zt(1,1)},uHorizontal:{value:1}},vertexShader:hM,fragmentShader:uM,depthTest:!1,depthWrite:!1});const s=new Jt(new hn(2,2),this.blurMat);this.blurScene.add(s),this.setSize(t,e)}get texture(){return this.bloomA.texture}setSize(t,e){this.bloomA.dispose(),this.bloomB.dispose();const n=Math.max(1,Math.round(t)),s=Math.max(1,Math.round(e));this.bloomA=this.buildRT(n,s),this.bloomB=this.buildRT(n,s),this.extractMat.uniforms.uSourceTexel.value.set(1/(n*4),1/(s*4)),this.blurMat.uniforms.uTexelSize.value.set(1/n,1/s)}render(t,e){this.extractMat.uniforms.tScene.value=e,t.setRenderTarget(this.bloomA),t.clear(),t.render(this.extractScene,this.extractCam);for(let n=0;n<2;n++)this.blurMat.uniforms.tBlur.value=this.bloomA.texture,this.blurMat.uniforms.uHorizontal.value=1,t.setRenderTarget(this.bloomB),t.clear(),t.render(this.blurScene,this.blurCam),this.blurMat.uniforms.tBlur.value=this.bloomB.texture,this.blurMat.uniforms.uHorizontal.value=0,t.setRenderTarget(this.bloomA),t.clear(),t.render(this.blurScene,this.blurCam);t.setRenderTarget(null)}dispose(){this.bloomA.dispose(),this.bloomB.dispose(),this.extractMat.dispose(),this.blurMat.dispose()}buildRT(t,e){return new Vn(t,e,{type:Wi,depthBuffer:!1})}}function Tm(i){const t=i.visualViewport,e=t&&t.width>0?t.width:i.innerWidth,n=t&&t.height>0?t.height:i.innerHeight;return{width:Math.max(1,Math.ceil(e)),height:Math.max(1,Math.ceil(n))}}const zh=1,Jr=2,co=3,xo=4,Dt=16,ve=192;class yo{constructor(){y(this,"blocks",new Uint16Array(Dt*ve*Dt));y(this,"fluid",new Uint8Array(Dt*ve*Dt));y(this,"dirty",!0)}idx(t,e,n){return t+n*Dt+e*Dt*Dt}inBounds(t,e,n){return t>=0&&t<Dt&&e>=0&&e<ve&&n>=0&&n<Dt}get(t,e,n){return this.inBounds(t,e,n)?this.blocks[this.idx(t,e,n)]:0}set(t,e,n,s){this.inBounds(t,e,n)&&(this.blocks[this.idx(t,e,n)]=s)}getFluid(t,e,n){return this.inBounds(t,e,n)?this.fluid[this.idx(t,e,n)]:0}setFluid(t,e,n,s){this.inBounds(t,e,n)&&(this.fluid[this.idx(t,e,n)]=s)}static fromBuffers(t,e){const n=new yo;return n.blocks.set(new Uint16Array(t)),n.fluid.set(new Uint8Array(e)),n}}const Em=16,Am=32,rf=i=>i&15,fM=i=>(i&Em)!==0,pM=i=>(i&Am)!==0,Hh=(i,t,e)=>i&15|(t?Em:0)|(e?Am:0),qt=i=>i>>4,Le=i=>i&15;function xn(i,t,e){let n=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,1274126177);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}const to=i=>i*i*(3-2*i);function mM(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=xn(n,s,e),l=xn(n+1,s,e),c=xn(n,s+1,e),h=xn(n+1,s+1,e),u=to(r),d=to(o),p=a+(l-a)*u,g=c+(h-c)*u;return p+(g-p)*d}function hs(i,t,e,n=4){let s=1,r=1,o=0,a=0;for(let l=0;l<n;l++)o+=s*mM(i*r,t*r,e+l*101),a+=s,s*=.5,r*=2;return o/a}function Rm(i,t,e,n){let s=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,2147483647)^Math.imul(n|0,1274126177);return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296}function on(i,t,e,n){const s=Math.floor(i),r=Math.floor(t),o=Math.floor(e),a=to(i-s),l=to(t-r),c=to(e-o),h=(m,f,x)=>m+(f-m)*x,u=(m,f,x)=>Rm(s+m,r+f,o+x,n),d=h(u(0,0,0),u(1,0,0),a),p=h(u(0,1,0),u(1,1,0),a),g=h(u(0,0,1),u(1,0,1),a),v=h(u(0,1,1),u(1,1,1),a);return h(h(d,p,l),h(g,v,l),c)}function Cm(i){let t=i>>>0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var jn=(i=>(i[i.PosX=0]="PosX",i[i.NegX=1]="NegX",i[i.PosY=2]="PosY",i[i.NegY=3]="NegY",i[i.PosZ=4]="PosZ",i[i.NegZ=5]="NegZ",i))(jn||{});const Oa={stone:0,dirt:1,grass_top:2,grass_side:3,cobblestone:4,sand:5,oak_log_top:6,oak_log_side:7,oak_planks:8,coal_ore:9,water:10,oak_leaves:11,crafting_table_top:12,crafting_table_side:13,iron_ore:14,furnace_front:15,gravel:16,grass_plant:17,obsidian:18,netherrack:19,soul_sand:20,glowstone:21,nether_quartz_ore:22,lava:23,bedrock:24,nether_portal:25,sandstone:26,cactus:27,ice:28,snow:29,spruce_log:30,spruce_leaves:31,coal_block:32,iron_block:33,quartz_block:34,diamond_ore:35,diamond_block:36,granite:37,diorite:38,andesite:39,bricks:40,mossy_cobblestone:41,red_sand:42,birch_log_top:43,birch_log_side:44,birch_leaves:45},Nt=Oa,Zt=i=>[i,i,i,i,i,i],Hs=(i,t,e)=>[i,i,t,e,i,i],gM=258,vM=296,Ue=[{id:0,name:"air",solid:!1,transparent:!0,faces:Zt(0),hardness:0,drop:null,needsTool:!1,tool:null},{id:1,name:"stone",solid:!0,transparent:!1,faces:Zt(Nt.stone),hardness:1.5,drop:4,needsTool:!0,tool:"pickaxe"},{id:2,name:"dirt",solid:!0,transparent:!1,faces:Zt(Nt.dirt),hardness:.5,drop:2,needsTool:!1,tool:"shovel"},{id:3,name:"grass",solid:!0,transparent:!1,faces:Hs(Nt.grass_side,Nt.grass_top,Nt.dirt),hardness:.6,drop:2,needsTool:!1,tool:"shovel"},{id:4,name:"cobblestone",solid:!0,transparent:!1,faces:Zt(Nt.cobblestone),hardness:2,drop:4,needsTool:!0,tool:"pickaxe"},{id:5,name:"sand",solid:!0,transparent:!1,faces:Zt(Nt.sand),hardness:.5,drop:5,needsTool:!1,tool:"shovel"},{id:6,name:"oak_log",solid:!0,transparent:!1,faces:Hs(Nt.oak_log_side,Nt.oak_log_top,Nt.oak_log_top),hardness:2,drop:6,needsTool:!1,tool:"axe"},{id:7,name:"oak_planks",solid:!0,transparent:!1,faces:Zt(Nt.oak_planks),hardness:2,drop:7,needsTool:!1,tool:"axe"},{id:8,name:"coal_ore",solid:!0,transparent:!1,faces:Zt(Nt.coal_ore),hardness:3,drop:gM,needsTool:!0,tool:"pickaxe"},{id:9,name:"water",solid:!1,transparent:!0,faces:Zt(Nt.water),hardness:0,drop:null,needsTool:!1,tool:null},{id:10,name:"oak_leaves",solid:!0,transparent:!0,faces:Zt(Nt.oak_leaves),hardness:.2,drop:null,needsTool:!1,tool:null},{id:11,name:"crafting_table",solid:!0,transparent:!1,faces:Hs(Nt.crafting_table_side,Nt.crafting_table_top,Nt.oak_planks),hardness:2.5,drop:11,needsTool:!1,tool:"axe"},{id:12,name:"iron_ore",solid:!0,transparent:!1,faces:Zt(Nt.iron_ore),hardness:3,drop:12,needsTool:!0,tool:"pickaxe",minTier:2},{id:13,name:"furnace",solid:!0,transparent:!1,faces:Hs(Nt.furnace_front,Nt.cobblestone,Nt.cobblestone),hardness:3.5,drop:13,needsTool:!0,tool:"pickaxe"},{id:14,name:"torch",solid:!1,transparent:!0,faces:Zt(0),hardness:0,drop:14,needsTool:!1,tool:null,light:14},{id:15,name:"gravel",solid:!0,transparent:!1,faces:Zt(Nt.gravel),hardness:.6,drop:15,needsTool:!1,tool:"shovel"},{id:16,name:"grass_plant",solid:!1,transparent:!0,faces:Zt(Nt.grass_plant),hardness:0,drop:null,needsTool:!1,tool:null},{id:17,name:"tall_grass",solid:!1,transparent:!0,faces:Zt(Nt.grass_plant),hardness:0,drop:null,needsTool:!1,tool:null},{id:18,name:"obsidian",solid:!0,transparent:!1,faces:Zt(Nt.obsidian),hardness:50,drop:18,needsTool:!0,tool:"pickaxe",minTier:4},{id:19,name:"netherrack",solid:!0,transparent:!1,faces:Zt(Nt.netherrack),hardness:.4,drop:19,needsTool:!0,tool:"pickaxe"},{id:20,name:"soul_sand",solid:!0,transparent:!1,faces:Zt(Nt.soul_sand),hardness:.5,drop:20,needsTool:!1,tool:"shovel"},{id:21,name:"glowstone",solid:!0,transparent:!1,faces:Zt(Nt.glowstone),hardness:.3,drop:21,needsTool:!1,tool:null,light:15},{id:22,name:"nether_quartz_ore",solid:!0,transparent:!1,faces:Zt(Nt.nether_quartz_ore),hardness:3,drop:295,needsTool:!0,tool:"pickaxe",minTier:1},{id:23,name:"lava",solid:!1,transparent:!0,faces:Zt(Nt.lava),hardness:100,drop:null,needsTool:!1,tool:null,light:15},{id:24,name:"bedrock",solid:!0,transparent:!1,faces:Zt(Nt.bedrock),hardness:-1,drop:null,needsTool:!1,tool:null},{id:25,name:"nether_portal",solid:!1,transparent:!0,faces:Zt(Nt.nether_portal),hardness:-1,drop:null,needsTool:!1,tool:null,light:11},{id:26,name:"sandstone",solid:!0,transparent:!1,faces:Zt(Nt.sandstone),hardness:.8,drop:26,needsTool:!0,tool:"pickaxe"},{id:27,name:"cactus",solid:!0,transparent:!1,faces:Zt(Nt.cactus),hardness:.4,drop:27,needsTool:!1,tool:null},{id:28,name:"ice",solid:!0,transparent:!1,faces:Zt(Nt.ice),hardness:.5,drop:null,needsTool:!1,tool:"pickaxe"},{id:29,name:"snow_layer",solid:!1,transparent:!0,faces:Zt(Nt.snow),hardness:0,drop:null,needsTool:!1,tool:"shovel"},{id:30,name:"spruce_log",solid:!0,transparent:!1,faces:Hs(Nt.spruce_log,Nt.oak_log_top,Nt.oak_log_top),hardness:2,drop:30,needsTool:!1,tool:"axe"},{id:31,name:"spruce_leaves",solid:!0,transparent:!0,faces:Zt(Nt.spruce_leaves),hardness:.2,drop:null,needsTool:!1,tool:null},{id:32,name:"coal_block",solid:!0,transparent:!1,faces:Zt(Nt.coal_block),hardness:5,drop:32,needsTool:!0,tool:"pickaxe"},{id:33,name:"iron_block",solid:!0,transparent:!1,faces:Zt(Nt.iron_block),hardness:5,drop:33,needsTool:!0,tool:"pickaxe",minTier:2},{id:34,name:"quartz_block",solid:!0,transparent:!1,faces:Zt(Nt.quartz_block),hardness:.8,drop:34,needsTool:!0,tool:"pickaxe"},{id:35,name:"diamond_ore",solid:!0,transparent:!1,faces:Zt(Nt.diamond_ore),hardness:3,drop:vM,needsTool:!0,tool:"pickaxe",minTier:3},{id:36,name:"diamond_block",solid:!0,transparent:!1,faces:Zt(Nt.diamond_block),hardness:5,drop:36,needsTool:!0,tool:"pickaxe",minTier:3},{id:37,name:"granite",solid:!0,transparent:!1,faces:Zt(Nt.granite),hardness:1.5,drop:37,needsTool:!0,tool:"pickaxe"},{id:38,name:"diorite",solid:!0,transparent:!1,faces:Zt(Nt.diorite),hardness:1.5,drop:38,needsTool:!0,tool:"pickaxe"},{id:39,name:"andesite",solid:!0,transparent:!1,faces:Zt(Nt.andesite),hardness:1.5,drop:39,needsTool:!0,tool:"pickaxe"},{id:40,name:"bricks",solid:!0,transparent:!1,faces:Zt(Nt.bricks),hardness:2,drop:40,needsTool:!0,tool:"pickaxe"},{id:41,name:"mossy_cobblestone",solid:!0,transparent:!1,faces:Zt(Nt.mossy_cobblestone),hardness:2,drop:41,needsTool:!0,tool:"pickaxe"},{id:42,name:"red_sand",solid:!0,transparent:!1,faces:Zt(Nt.red_sand),hardness:.5,drop:42,needsTool:!1,tool:"shovel"},{id:43,name:"birch_log",solid:!0,transparent:!1,faces:Hs(Nt.birch_log_side,Nt.birch_log_top,Nt.birch_log_top),hardness:2,drop:43,needsTool:!1,tool:"axe"},{id:44,name:"birch_leaves",solid:!0,transparent:!0,faces:Zt(Nt.birch_leaves),hardness:.2,drop:null,needsTool:!1,tool:null}],Dm=3,an=9,lr=10,wl=6,_M=7,xM=4,Pm=11,yM=12,gc=13,Pi=14,oa=15,wM=16,Lm=17,Dn=18,MM=19,vc=5,km=20,SM=21,bM=22,ho=23,Wh=24,Li=25,TM=26,Qs=27,cr=28,Gh=29,Ml=30,Sl=31,EM=32,AM=35,RM=37,of=42,CM=43,Im=44,tl=i=>i===ho,$n=i=>i===Li,ke=i=>{var t;return((t=Ue[i])==null?void 0:t.solid)??!1},ti=i=>i===an,_c=i=>i===lr||i===Sl||i===Im,ki=i=>i===wM||i===Lm||i===Gh,af=i=>ke(i)||ki(i),lf=i=>i===0||i===an||ki(i)||i===Li,Ws=i=>{const t=Ue[i];return t?t.solid&&!t.transparent:!1},aa=(i,t)=>Ue[i].faces[t],Um=i=>{var t;return((t=Ue[i])==null?void 0:t.hardness)??0},DM=i=>{var t;return((t=Ue[i])==null?void 0:t.needsTool)??!1},PM=i=>{var t;return((t=Ue[i])==null?void 0:t.light)??0};function Nm(i,t){var n;const e=((n=Ue[i])==null?void 0:n.tool)??null;return t!==null&&e!==null&&t.kind===e}const Fm=(i,t=null)=>{var e;return DM(i)?Nm(i,t)?t.tier>=(((e=Ue[i])==null?void 0:e.minTier)??1):!1:!0},LM=(i,t=null)=>{if(ki(i))return 0;const e=Math.max(0,Um(i));if(e===0)return 0;const n=Nm(i,t)?t.speed:1,s=Fm(i,t)?30:100;return Math.ceil(s*e/n)*50},kM=(i,t=null)=>{var e;return Fm(i,t)?((e=Ue[i])==null?void 0:e.drop)??null:null},IM=i=>i===Qs,UM=i=>i===cr?.98:.6,cf=320,NM=.38,FM=.66;function Om(i,t,e){return hs(i/130,t/130,e+4321,2)}function OM(i,t,e){return hs(i/cf,t/cf,e+9001,3)}function BM(i,t,e){return hs(i/210,t/210,e+15401,3)}function as(i,t,e){const n=OM(i,t,e);if(n<NM)return"snow";const s=BM(i,t,e);return n>FM?s>.53?"badlands":"desert":Om(i,t,e)>.62?s>.5?"birch_forest":"forest":"plains"}const Vh=1,zM=2,xc=3,Wr=5,HM=8,WM=12,GM=15,VM=16,XM=17,ee=116,qM=Hh(8,!0,!1);function $M(i,t,e){const n=Ne(i,t,e);return Math.abs(Ne(i+5,t,e)-n)<=3&&Math.abs(Ne(i-5,t,e)-n)<=3&&Math.abs(Ne(i,t+5,e)-n)<=3&&Math.abs(Ne(i,t-5,e)-n)<=3}function YM(i,t,e,n,s){const r=n-t;if(r<12)return!1;const o=i+(on(i/36,t/30,e/36,s+991)-.5)*26,a=t+(on(t/30,i/34,e/34,s+993)-.5)*22,l=e+(on(e/36,t/30,i/36,s+992)-.5)*26;return r<50?Math.abs(on(o/14,a/14,l/14,s+222)-.5)<.03:r<100?Math.abs(on(o/18,a/18,l/18,s+333)-.5)<.05?!0:on(o/22,a/22,l/22,s+700)<.07:on(o/26,a/26,l/26,s+700)<.07?!0:Math.abs(on(o/18,a/18,l/18,s+333)-.5)<.04}function la(i,t,e,n){return on(i/5,t/5,e/5,n+303)>.82?GM:Vh}const KM=[{id:HM,attempts:20,size:17,minY:5,maxY:128,salt:2887841},{id:WM,attempts:20,size:9,minY:5,maxY:64,salt:2044082},{id:AM,attempts:1,size:8,minY:5,maxY:16,salt:5053075}],ca=1,jM=(i,t,e)=>Math.max(t,Math.min(e,i));function ZM(i,t,e,n,s){const r=Rm(t,e,s,i+n.salt|0);return Cm(Math.floor(r*4294967296))}function QM(i,t,e,n,s,r,o,a){const l=ZM(r,n,s,o,a),c=n*Dt+l()*Dt,h=s*Dt+l()*Dt,u=o.minY+Math.floor(l()*(o.maxY-o.minY+1)),d=jM(u+Math.floor(l()*5)-2,o.minY,o.maxY),p=l()*Math.PI,g=o.size/8,v=c+Math.sin(p)*g,m=c-Math.sin(p)*g,f=h+Math.cos(p)*g,x=h-Math.cos(p)*g;for(let _=0;_<o.size;_++){const w=_/o.size,A=v+(m-v)*w,E=u+(d-u)*w,D=f+(x-f)*w,k=(Math.sin(Math.PI*w)+1)*l()*o.size/16+1,b=k/2,S=k*(.55+l()*.15)/2,P=b,V=Math.floor(A-b),X=Math.floor(A+b),tt=Math.max(o.minY,Math.floor(E-S)),et=Math.min(o.maxY,ve-1,Math.floor(E+S)),J=Math.floor(D-P),it=Math.floor(D+P);for(let Y=V;Y<=X;Y++){if(qt(Y)!==t)continue;const xt=(Y+.5-A)/b,Rt=xt*xt;if(!(Rt>=1))for(let At=J;At<=it;At++){if(qt(At)!==e)continue;const Yt=(At+.5-D)/P,te=Rt+Yt*Yt;if(!(te>=1))for(let K=tt;K<=et;K++){const at=(K+.5-E)/S;if(te+at*at>=1)continue;const Mt=Le(Y),mt=Le(At);i.get(Mt,K,mt)===Vh&&i.set(Mt,K,mt,o.id)}}}}}function JM(i,t,e,n){for(const s of KM)for(let r=t-ca;r<=t+ca;r++)for(let o=e-ca;o<=e+ca;o++)for(let a=0;a<s.attempts;a++)QM(i,t,e,r,o,n,s,a)}function Ne(i,t,e){const n=hs(i/260,t/260,e,4),s=hs(i/72,t/72,e+17,3);let r;n<.46?r=90+n*56:n<.56?r=116+(n-.46)*80:r=124+(n-.56)*180;let o=r+(s-.5)*8;{const a=hs(i/140,t/140,e+777,3),l=Math.abs(a-.5),c=.028+s*.022+Math.max(0,n-.54)*.4;if(l<c){let h=1-l/c;h=h*h*(3-2*h);const u=2+Math.floor(hs(i/60,t/60,e+555,2)*3),d=ee-u;o=o*(1-h)+d*h}}return Math.floor(o)}const An=2,tS=.08;function eS(i,t,e){const n=Om(i,t,e);return n<.45?.003:n>.62?.08:.003+(n-.45)/.17*.077}function nS(i,t,e){return 4+Math.floor(xn(i,t,e*31+5)*3)}function iS(i,t,e){return as(i,t,e)==="birch_forest"&&Ne(i,t,e)>ee+1&&xn(i,t,e*23+97)<.065}function yc(i,t,e,n,s,r,o,a=wl,l=lr,c=!1){const h=r+nS(n,s,o),u=(p,g,v,m,f)=>{if(g<0||g>=ve||qt(p)!==t||qt(v)!==e)return;const x=Le(p),_=Le(v);f&&i.get(x,g,_)!==0||i.set(x,g,_,m)};if(c){const p=h+2,g=r+3;for(let v=g;v<=p;v++){const m=p-v,f=m===0?0:Math.min(2,Math.floor((m+1)/2));for(let x=-f;x<=f;x++)for(let _=-f;_<=f;_++)Math.abs(x)+Math.abs(_)>f||u(n+x,v,s+_,l,!0)}}else{for(const g of[-2,-1])for(let v=-2;v<=2;v++)for(let m=-2;m<=2;m++)Math.abs(v)===2&&Math.abs(m)===2||u(n+v,h+g,s+m,l,!0);for(let g=-1;g<=1;g++)for(let v=-1;v<=1;v++)u(n+g,h,s+v,l,!0);const p=[[0,0],[1,0],[-1,0],[0,1],[0,-1]];for(const[g,v]of p)u(n+g,h+1,s+v,l,!0)}const d=c?h+1:h;for(let p=r+1;p<=d;p++)u(n,p,s,a,!1)}const ha=127,sS=31;function rS(i,t,e){const n=new yo,s=e+7e4;for(let r=0;r<Dt;r++)for(let o=0;o<Dt;o++){const a=i*Dt+o,l=t*Dt+r;for(let c=0;c<=ha;c++){if(c<=1||c>=ha-1){n.set(o,c,r,Wh);continue}if(on(a/18,c/16,l/18,s+1)>.55||on(a/9,c/10,l/9,s+2)>.78){c<=sS&&n.set(o,c,r,ho);continue}let u=MM;on(a/4,c/4,l/4,s+3)>.86?u=bM:on(a/10,c/10,l/10,s+4)>.9&&(u=km),n.set(o,c,r,u)}if(xn(a,l,s+5)<.012){for(let c=ha-2;c>ha-7;c--)if(n.get(o,c,r)===0){n.set(o,c,r,SM);break}}}return n.dirty=!0,n}function Bm(i,t,e,n="overworld"){if(n==="nether")return rS(i,t,e);const s=new yo;for(let a=0;a<Dt;a++)for(let l=0;l<Dt;l++){const c=i*Dt+l,h=t*Dt+a,u=Ne(c,h,e),d=Math.min(u,Ne(c+4,h,e),Ne(c-4,h,e),Ne(c,h+4,e),Ne(c,h-4,e)),p=$M(c,h,e),g=u<=ee+1,v=as(c,h,e);for(let m=0;m<=u;m++){const f=p&&on((c+m*.8)/8,m/120,(h+m*.6)/8,e+888)>.9;if(m>1&&(f||m<u&&YM(c,m,h,d,e)))continue;let x=Vh;m===0||m<=4&&on(c*.7,m*3.3,h*.7,e+4242)<(5-m)/5?x=Wh:g?m===u||m>=u-3?x=Wr:x=la(c,m,h,e):v==="desert"?m===u||m>=u-3?x=Wr:m>=u-7?x=TM:x=la(c,m,h,e):v==="badlands"?m>=u-3?x=of:m>=u-10?x=RM:x=la(c,m,h,e):m===u?x=xc:m>=u-3?x=zM:x=la(c,m,h,e),s.set(l,m,a,x)}for(let m=u+1;m<=ee;m++)s.set(l,m,a,an),s.setFluid(l,m,a,qM);if(u<ee&&v==="snow"&&s.set(l,ee,a,cr),!g&&u>ee+1&&v==="snow"){const m=s.get(l,u,a),f=s.get(l,u+1,a);m===xc&&f===0&&xn(c+1,h+3,e*19+41)<.85&&s.set(l,u+1,a,Gh)}}JM(s,i,t,e);const r=i*Dt,o=t*Dt;for(let a=r-An;a<r+Dt+An;a++)for(let l=o-An;l<o+Dt+An;l++){if(!iS(a,l,e))continue;const c=Ne(a,l,e);yc(s,i,t,a,l,c,e+101,CM,Im)}for(let a=r-An;a<r+Dt+An;a++)for(let l=o-An;l<o+Dt+An;l++){const c=xn(a,l,e*13+7);if(c>=tS)continue;const h=Ne(a,l,e);if(h<=ee+1)continue;const u=as(a,l,e);u!=="plains"&&u!=="forest"||c<eS(a,l,e)&&yc(s,i,t,a,l,h,e)}for(let a=r-An;a<r+Dt+An;a++)for(let l=o-An;l<o+Dt+An;l++){if(as(a,l,e)!=="snow")continue;const c=Ne(a,l,e);c<=ee+1||xn(a,l,e*17+3)>=.03||yc(s,i,t,a,l,c,e,Ml,Sl,!0)}for(let a=0;a<Dt;a++)for(let l=0;l<Dt;l++){const c=r+l,h=o+a,u=as(c,h,e);if(u!=="desert"&&u!=="badlands")continue;const d=Ne(c,h,e);if(d<=ee+1||s.get(l,d,a)!==Wr&&s.get(l,d,a)!==of||s.get(l,d+1,a)!==0||xn(c,h,e*11+53)>=.02)continue;const g=d+1;if(l>0&&(s.get(l-1,g,a)===Qs||ke(s.get(l-1,g,a)))||l<Dt-1&&(s.get(l+1,g,a)===Qs||ke(s.get(l+1,g,a)))||a>0&&(s.get(l,g,a-1)===Qs||ke(s.get(l,g,a-1)))||a<Dt-1&&(s.get(l,g,a+1)===Qs||ke(s.get(l,g,a+1))))continue;const v=1+Math.floor(xn(c*3,h*3,e*7+13)*3);for(let m=1;m<=v;m++){const f=d+m;if(f>=ve)break;s.set(l,f,a,Qs)}}for(let a=0;a<Dt;a++)for(let l=0;l<Dt;l++){const c=r+l,h=o+a,u=as(c,h,e);if(u!=="plains"&&u!=="forest"&&u!=="birch_forest")continue;const d=Ne(c,h,e);if(d<=ee+1||s.get(l,d,a)!==xc||s.get(l,d+1,a)!==0)continue;const p=xn(c,h,e*7+31);p>.4||s.set(l,d+1,a,p<.08?XM:VM)}return s.dirty=!0,s}const oS=ee+8/9;class aS{constructor(t=1,e=1,n={}){y(this,"camera",new Ze);y(this,"renderTarget");y(this,"planeY");y(this,"clipBias");y(this,"underwaterPlane",new zn);y(this,"underwaterPlanes");y(this,"airPlane",new zn);y(this,"airPlanes");y(this,"sourcePosition",new I);y(this,"sourceQuaternion",new Vi);y(this,"savedViewport",new we);y(this,"savedScissor",new we);this.planeY=n.planeY??oS,this.clipBias=Math.max(0,n.clipBias??.001),this.underwaterPlane.set(new I(0,-1,0),this.planeY-this.clipBias),this.underwaterPlanes=[this.underwaterPlane],this.airPlane.set(new I(0,1,0),-(this.planeY+this.clipBias)),this.airPlanes=[this.airPlane];const s=Math.max(1,Math.round(t)),r=Math.max(1,Math.round(e)),o=new _l(s,r,zi);o.name="mineworld-planar-refraction-depth",this.renderTarget=new Vn(s,r,{type:Wi,minFilter:Se,magFilter:Se,generateMipmaps:!1,depthTexture:o,depthBuffer:!0,stencilBuffer:!1,samples:Math.max(0,Math.round(n.samples??0))}),this.renderTarget.texture.name="mineworld-planar-refraction",this.renderTarget.texture.colorSpace=yn,this.camera.layers.set(0)}get texture(){return this.renderTarget.texture}get depthTexture(){return this.renderTarget.depthTexture}resize(t,e){const n=Math.max(1,Math.round(t)),s=Math.max(1,Math.round(e));this.renderTarget.setSize(n,s),this.depthTexture.image.width=n,this.depthTexture.image.height=s}render(t,e,n,s,r,o="below"){this.updateCamera(n),this.camera.layers.set(0),o==="above"&&(this.camera.layers.enable(Jr),this.camera.layers.enable(co));const a=t.getRenderTarget();t.getViewport(this.savedViewport),t.getScissor(this.savedScissor);const l=t.getScissorTest(),c=t.xr.enabled,h=t.shadowMap.autoUpdate,u=t.shadowMap.needsUpdate,d=t.clippingPlanes,p=t.localClippingEnabled,g=t.getContext(),v=!!g.getParameter(g.DEPTH_WRITEMASK);try{s==null||s(this.camera,this.renderTarget),t.xr.enabled=!1,t.shadowMap.autoUpdate=!1,t.shadowMap.needsUpdate=!1,t.clippingPlanes=o==="above"?this.airPlanes:this.underwaterPlanes,t.localClippingEnabled=!1,t.setRenderTarget(this.renderTarget),t.setScissorTest(!1),t.state.buffers.depth.setMask(!0),t.clear(!0,!0,!1),t.render(e,this.camera)}finally{t.xr.enabled=c,t.shadowMap.autoUpdate=h,t.shadowMap.needsUpdate=u,t.clippingPlanes=d,t.localClippingEnabled=p,t.state.buffers.depth.setMask(v),t.setRenderTarget(a),t.setViewport(this.savedViewport),t.setScissor(this.savedScissor),t.setScissorTest(l),r==null||r(this.camera,this.renderTarget)}}dispose(){this.renderTarget.dispose()}updateCamera(t){t.updateWorldMatrix(!0,!1),t.getWorldPosition(this.sourcePosition),t.getWorldQuaternion(this.sourceQuaternion),this.camera.position.copy(this.sourcePosition),this.camera.quaternion.copy(this.sourceQuaternion),this.camera.up.copy(t.up),this.camera.updateMatrixWorld(!0),this.camera.near=t.near,this.camera.far=t.far,this.camera.fov=t.fov,this.camera.aspect=t.aspect,this.camera.zoom=t.zoom,this.camera.focus=t.focus,this.camera.filmGauge=t.filmGauge,this.camera.filmOffset=t.filmOffset,this.camera.view=t.view===null?null:{...t.view},this.camera.coordinateSystem=t.coordinateSystem,this.camera.projectionMatrix.copy(t.projectionMatrix),this.camera.projectionMatrixInverse.copy(t.projectionMatrixInverse)}}const lS=ee+8/9,cS=new ge().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);class hS{constructor(t=1,e=1,n={}){y(this,"camera",new Ze);y(this,"textureMatrix",new ge);y(this,"renderTarget");y(this,"planeY");y(this,"clipBias");y(this,"overscan");y(this,"plane",new zn);y(this,"cameraPlane",new zn);y(this,"planeNormal",new I(0,1,0));y(this,"sourcePosition",new I);y(this,"reflectedPosition",new I);y(this,"reflectedDirection",new I);y(this,"reflectedUp",new I);y(this,"lookTarget",new I);y(this,"sourceQuaternion",new Vi);y(this,"clipPlane",new we);y(this,"clipCorner",new we);y(this,"savedViewport",new we);y(this,"savedScissor",new we);this.planeY=n.planeY??lS,this.clipBias=n.clipBias??.001,this.overscan=Gn.clamp(n.overscan??1.08,1,1.2),this.plane.set(this.planeNormal,-this.planeY),this.renderTarget=new Vn(Math.max(1,Math.round(t)),Math.max(1,Math.round(e)),{type:Wi,minFilter:Se,magFilter:Se,generateMipmaps:!1,depthBuffer:!0,stencilBuffer:!1,samples:Math.max(0,Math.round(n.samples??4))}),this.renderTarget.texture.name="mineworld-planar-reflection",this.renderTarget.texture.colorSpace=yn,this.camera.layers.set(0),this.camera.layers.enable(co)}get texture(){return this.renderTarget.texture}resize(t,e){this.renderTarget.setSize(Math.max(1,Math.round(t)),Math.max(1,Math.round(e)))}render(t,e,n,s,r){this.updateCamera(n);const o=t.getRenderTarget();t.getViewport(this.savedViewport),t.getScissor(this.savedScissor);const a=t.getScissorTest(),l=t.xr.enabled,c=t.shadowMap.autoUpdate,h=t.shadowMap.needsUpdate,u=t.getContext(),d=!!u.getParameter(u.DEPTH_WRITEMASK);try{s==null||s(this.camera,this.renderTarget),t.xr.enabled=!1,t.shadowMap.autoUpdate=!1,t.shadowMap.needsUpdate=!1,t.setRenderTarget(this.renderTarget),t.setScissorTest(!1),t.state.buffers.depth.setMask(!0),t.clear(!0,!0,!1),t.render(e,this.camera)}finally{t.xr.enabled=l,t.shadowMap.autoUpdate=c,t.shadowMap.needsUpdate=h,t.state.buffers.depth.setMask(d),t.setRenderTarget(o),t.setViewport(this.savedViewport),t.setScissor(this.savedScissor),t.setScissorTest(a),r==null||r(this.camera,this.renderTarget)}}dispose(){this.renderTarget.dispose()}updateCamera(t){t.updateWorldMatrix(!0,!1),t.getWorldPosition(this.sourcePosition),t.getWorldQuaternion(this.sourceQuaternion),this.reflectedPosition.copy(this.sourcePosition).addScaledVector(this.planeNormal,-2*this.plane.distanceToPoint(this.sourcePosition)),this.reflectedDirection.set(0,0,-1).applyQuaternion(this.sourceQuaternion).reflect(this.planeNormal),this.reflectedUp.set(0,1,0).applyQuaternion(this.sourceQuaternion).reflect(this.planeNormal),this.camera.position.copy(this.reflectedPosition),this.camera.up.copy(this.reflectedUp),this.lookTarget.copy(this.reflectedPosition).add(this.reflectedDirection),this.camera.lookAt(this.lookTarget),this.camera.updateMatrixWorld(!0),this.camera.near=t.near,this.camera.far=t.far,this.camera.fov=t.fov,this.camera.aspect=t.aspect,this.camera.zoom=t.zoom,this.camera.focus=t.focus,this.camera.filmGauge=t.filmGauge,this.camera.filmOffset=t.filmOffset,this.camera.projectionMatrix.copy(t.projectionMatrix),this.camera.projectionMatrix.elements[0]/=this.overscan,this.camera.projectionMatrix.elements[5]/=this.overscan,this.applyObliqueNearPlane(),this.camera.projectionMatrixInverse.copy(this.camera.projectionMatrix).invert(),this.textureMatrix.copy(cS).multiply(this.camera.projectionMatrix).multiply(this.camera.matrixWorldInverse)}applyObliqueNearPlane(){this.cameraPlane.copy(this.plane).applyMatrix4(this.camera.matrixWorldInverse),this.clipPlane.set(this.cameraPlane.normal.x,this.cameraPlane.normal.y,this.cameraPlane.normal.z,this.cameraPlane.constant);const e=this.camera.projectionMatrix.elements;this.clipCorner.set((Math.sign(this.clipPlane.x)+e[8])/e[0],(Math.sign(this.clipPlane.y)+e[9])/e[5],-1,(1+e[10])/e[14]);const n=this.clipPlane.dot(this.clipCorner);Math.abs(n)<1e-7||(this.clipPlane.multiplyScalar(2/n),e[2]=this.clipPlane.x,e[6]=this.clipPlane.y,e[10]=this.clipPlane.z+1-this.clipBias,e[14]=this.clipPlane.w)}}const uS=`
varying vec3 vSkyDir;
void main() {
  vSkyDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`.trim(),dS=`
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
`.trim();class fS{constructor(t){y(this,"scene",new wr);y(this,"camera");y(this,"gl");y(this,"viewportW",1);y(this,"viewportH",1);y(this,"resizeQueued",!1);y(this,"onViewportChange",()=>{this.resizeQueued||(this.resizeQueued=!0,requestAnimationFrame(()=>{this.resizeQueued=!1,this.resize()}))});y(this,"skyDome");y(this,"skyUniforms",{uSkyTop:{value:new Et},uSkyHorizon:{value:new Et},uSunDir:{value:new I(1,0,.1).normalize()},uWarmth:{value:0},uSunVisible:{value:1}});y(this,"lastSky","");y(this,"rt",null);y(this,"planarRefraction",null);y(this,"waterRefractionSink",null);y(this,"planarReflection",null);y(this,"waterReflectionSink",null);y(this,"waterCapturesEnabled",!0);y(this,"godStd",new sf(24));y(this,"godHigh",new sf(48));y(this,"god",null);y(this,"underwaterTarget",0);y(this,"underwaterAmount",0);y(this,"waterIrradiance",new Et(.04,.18,.26));y(this,"bloom",null);y(this,"ssao",null);var s,r;this.gl=new _m({canvas:t,antialias:!0}),this.gl.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.gl.toneMapping=gi,this.gl.shadowMap.enabled=!0,this.gl.shadowMap.type=zp,this.gl.shadowMap.autoUpdate=!1;const e=new Fh(750,32,24),n=new tn({uniforms:this.skyUniforms,vertexShader:uS,fragmentShader:dS,side:Ge,depthWrite:!1});this.skyDome=new Jt(e,n),this.skyDome.layers.set(co),this.skyDome.frustumCulled=!1,this.skyDome.renderOrder=-1e3,this.scene.add(this.skyDome),this.setSkyColors([.3,.52,.79],[.81,.9,.97]),this.scene.fog=new yr(bm,30,110),this.camera=new Ze(70,1,.1,1e3),this.camera.layers.enable(zh),this.camera.layers.enable(Jr),this.camera.layers.enable(co),this.camera.layers.enable(xo),this.resize(),window.addEventListener("resize",this.onViewportChange),window.addEventListener("orientationchange",this.onViewportChange),(s=window.visualViewport)==null||s.addEventListener("resize",this.onViewportChange),(r=window.visualViewport)==null||r.addEventListener("scroll",this.onViewportChange)}setSkyColors(t,e,n=0,s=0,r=0,o=!0){const a=`${t.join()}|${e.join()}|${Math.round(n*80)}|${Math.round(s*40)}|${Math.round(r*80)}|${o?1:0}`;a!==this.lastSky&&(this.lastSky=a,this.skyUniforms.uSkyTop.value.setRGB(t[0],t[1],t[2],ue),this.skyUniforms.uSkyHorizon.value.setRGB(e[0],e[1],e[2],ue),this.skyUniforms.uSunDir.value.set(Math.cos(n),r,.1).normalize(),this.skyUniforms.uWarmth.value=Gn.clamp(s,0,1),this.skyUniforms.uSunVisible.value=o?1:0,this.waterIrradiance.copy(this.skyUniforms.uSkyHorizon.value).lerp(this.skyUniforms.uSkyTop.value,.2).multiply(new Et(.78,1.08,1.16)))}resize(){const{width:t,height:e}=Tm(window);if(this.viewportW=t,this.viewportH=e,this.gl.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.rt!==null&&(this.rt.dispose(),this.rt=this.buildRT(t,e)),this.planarRefraction!==null){const n=this.gl.getPixelRatio();this.planarRefraction.resize(Math.max(1,Math.round(t*n)),Math.max(1,Math.round(e*n))),this.publishRefractionTarget()}if(this.planarReflection!==null){const n=this.gl.getPixelRatio();this.planarReflection.resize(Math.max(1,Math.round(t*n)),Math.max(1,Math.round(e*n))),this.publishReflectionTarget()}if(this.bloom!==null){const n=this.gl.getPixelRatio();this.bloom.setSize(Math.max(1,Math.round(t*n/4)),Math.max(1,Math.round(e*n/4)))}if(this.ssao!==null){const n=this.gl.getPixelRatio();this.ssao.setSize(Math.max(1,Math.round(t*n/2)),Math.max(1,Math.round(e*n/2)))}}markShadowDirty(){this.gl.shadowMap.needsUpdate=!0}setWaterRefractionSink(t){this.waterRefractionSink=t,this.publishRefractionTarget()}setWaterReflectionSink(t){this.waterReflectionSink=t,this.publishReflectionTarget()}setWaterCapturesEnabled(t){var e,n,s,r;t!==this.waterCapturesEnabled&&(this.waterCapturesEnabled=t,t?((s=this.waterRefractionSink)==null||s.call(this,null,null,1,1,this.underwaterAmount),(r=this.waterReflectionSink)==null||r.call(this,null,null,1,1),this.god!==null&&this.ensureWaterCaptureTargets()):((e=this.planarRefraction)==null||e.dispose(),this.planarRefraction=null,(n=this.planarReflection)==null||n.dispose(),this.planarReflection=null,this.publishRefractionTarget(),this.publishReflectionTarget()))}setGodRays(t){if(t===null||t.quality==="off"){this.rt!==null&&(this.rt.dispose(),this.rt=null),this.planarRefraction!==null&&(this.planarRefraction.dispose(),this.planarRefraction=null),this.publishRefractionTarget(),this.planarReflection!==null&&(this.planarReflection.dispose(),this.planarReflection=null),this.publishReflectionTarget(),this.bloom!==null&&(this.bloom.dispose(),this.bloom=null),this.ssao!==null&&(this.ssao.dispose(),this.ssao=null),this.god=null;return}if(this.rt===null&&(this.rt=this.buildRT(this.viewportW,this.viewportH)),this.ensureWaterCaptureTargets(),this.bloom===null){const e=this.gl.getPixelRatio(),n=this.viewportW,s=this.viewportH;this.bloom=new dM(Math.max(1,Math.round(n*e/4)),Math.max(1,Math.round(s*e/4)))}this.god=t}setUnderwater(t){this.underwaterTarget=t?1:0}render(){if(this.skyDome.position.copy(this.camera.position),this.underwaterAmount+=(this.underwaterTarget-this.underwaterAmount)*.16,this.god===null||this.rt===null||this.bloom===null){this.gl.render(this.scene,this.camera);return}if(this.waterCapturesEnabled&&this.planarReflection!==null&&this.camera.position.y>this.planarReflection.planeY+.05?(this.planarReflection.render(this.gl,this.scene,this.camera,n=>this.skyDome.position.copy(n.position),()=>this.skyDome.position.copy(this.camera.position)),this.publishReflectionTarget(!0)):this.publishReflectionTarget(!1),this.waterCapturesEnabled&&this.planarRefraction!==null){const n=this.scene.fog;this.scene.fog=null;try{this.planarRefraction.render(this.gl,this.scene,this.camera,void 0,void 0,this.underwaterTarget>.5?"above":"below")}finally{this.scene.fog=n}this.publishRefractionTarget()}this.gl.setRenderTarget(this.rt),this.gl.clear(),this.gl.render(this.scene,this.camera),this.bloom.render(this.gl,this.rt.texture),this.ssao!==null&&this.ssao.render(this.gl,this.rt.depthTexture,this.camera);const t=this.god.quality==="high"?this.godHigh:this.godStd,e=t.material.uniforms;e.tColor.value=this.rt.texture,e.tDepth.value=this.rt.depthTexture,e.tBloom.value=this.bloom.texture,e.uSunUV.value.copy(this.god.sunUV),e.uIntensity.value=this.god.intensity,e.uSunColor.value.copy(this.god.sunColor),e.uBloom.value=this.god.quality==="high"?.68:.5,e.uUnderwater.value=this.underwaterAmount,e.uWaterIrradiance.value.copy(this.waterIrradiance),this.ssao!==null?(e.tAO.value=this.ssao.texture,e.uAO.value=this.god.quality==="high"?.55:.4):(e.tAO.value=null,e.uAO.value=0),t.render(this.gl)}renderOverlay(t,e){this.gl.autoClear=!1,this.gl.clearDepth(),this.gl.render(t,e),this.gl.autoClear=!0}buildRT(t,e){const n=this.gl.getPixelRatio(),s=Math.max(1,Math.round(t*n)),r=Math.max(1,Math.round(e*n)),o=new _l(s,r);return o.type=zi,new Vn(s,r,{type:Wi,depthTexture:o,depthBuffer:!0,samples:4})}publishRefractionTarget(){if(this.waterRefractionSink){if(!this.waterCapturesEnabled||!this.planarRefraction){this.waterRefractionSink(null,null,1,1,this.underwaterAmount);return}this.waterRefractionSink(this.planarRefraction.texture,this.planarRefraction.depthTexture,this.planarRefraction.renderTarget.width,this.planarRefraction.renderTarget.height,this.underwaterAmount)}}ensureWaterCaptureTargets(){if(!this.waterCapturesEnabled)return;const t=this.gl.getPixelRatio(),e=Math.max(1,Math.round(this.viewportW*t)),n=Math.max(1,Math.round(this.viewportH*t));this.planarRefraction===null&&(this.planarRefraction=new aS(e,n)),this.planarReflection===null&&(this.planarReflection=new hS(e,n))}publishReflectionTarget(t=!0){if(this.waterReflectionSink){if(!t||!this.waterCapturesEnabled||!this.planarReflection){this.waterReflectionSink(null,null,1,1);return}this.waterReflectionSink(this.planarReflection.texture,this.planarReflection.textureMatrix,this.planarReflection.renderTarget.width,this.planarReflection.renderTarget.height)}}}function pS(i){return new Worker("/mineworld/assets/chunkGen.worker-CE9zubWZ.js",{name:i==null?void 0:i.name})}const hf=()=>typeof performance<"u"?performance.now():Date.now(),mS=4;class zm{constructor(t,e="overworld"){y(this,"chunks",new Map);y(this,"pending",new Set);y(this,"pendingSince",new Map);y(this,"genFails",new Map);y(this,"workers",[]);y(this,"rr",0);y(this,"editHook",null);if(this.seed=t,this.dimension=e,typeof Worker<"u"){const n=typeof navigator<"u"&&navigator.hardwareConcurrency||4,s=Math.max(1,Math.min(4,n));for(let r=0;r<s;r++){const o=new pS;o.onmessage=a=>{var v;const{cx:l,cz:c,blocks:h,fluid:u,error:d}=a.data,p=this.key(l,c);if(this.pending.delete(p),this.pendingSince.delete(p),d){const m=(this.genFails.get(p)??0)+1;this.genFails.set(p,m),console.warn(`[chunkgen] 区块(${l},${c}) 生成失败 #${m}: ${d.split(`
`)[0]}`);return}if(this.genFails.delete(p),this.chunks.has(p)||!h||!u)return;const g=yo.fromBuffers(h,u);(v=this.editHook)==null||v.call(this,l,c,g),g.dirty=!0,this.chunks.set(p,g)},o.onerror=a=>{console.error("[chunkgen worker] 致命错误(整个 worker 挂了，会拖慢加载):",a.message)},this.workers.push(o)}}}key(t,e){return`${t},${e}`}dispose(){for(const t of this.workers)t.terminate();this.workers.length=0,this.chunks.clear(),this.pending.clear(),this.pendingSince.clear(),this.genFails.clear(),this.editHook=null}hasChunk(t,e){return this.chunks.has(this.key(t,e))}request(t,e){const n=this.key(t,e);if(!(this.chunks.has(n)||this.pending.has(n))&&!((this.genFails.get(n)??0)>=3)){if(this.workers.length===0){this.getChunk(t,e);return}this.pending.add(n),this.pendingSince.set(n,hf()),this.workers[this.rr].postMessage({cx:t,cz:e,seed:this.seed,dimension:this.dimension}),this.rr=(this.rr+1)%this.workers.length}}retryStuckGen(t=8e3){const e=hf();for(const[n,s]of this.pendingSince)e-s>t&&(this.pending.delete(n),this.pendingSince.delete(n),console.warn(`[chunkgen] 区块 ${n} 生成 ${Math.round((e-s)/1e3)}s 未回(worker 丢消息?) → 重试`))}peek(t,e){return this.chunks.get(this.key(t,e))}evictBeyond(t,e,n){const s=[];for(const r of[...this.chunks.keys()]){const o=r.indexOf(","),a=+r.slice(0,o),l=+r.slice(o+1);(Math.abs(a-t)>n||Math.abs(l-e)>n)&&this.chunks.delete(r)&&s.push(r)}return s}getChunk(t,e){var r;const n=this.key(t,e);let s=this.chunks.get(n);return s||(s=Bm(t,e,this.seed,this.dimension),(r=this.editHook)==null||r.call(this,t,e,s),this.chunks.set(n,s),this.pending.delete(n)),s}getBlock(t,e,n){return e<0||e>=ve?0:this.getChunk(qt(t),qt(n)).get(Le(t),e,Le(n))}setBlock(t,e,n,s){if(e<0||e>=ve)return;const r=qt(t),o=qt(n),a=Le(t),l=Le(n),c=this.getChunk(r,o);c.set(a,e,l,s),s!==an&&c.setFluid(a,e,l,0),c.dirty=!0,this.markNeighborsDirty(r,o,a,l,8)}fluidByte(t,e,n){return e<0||e>=ve?0:this.getChunk(qt(t),qt(n)).getFluid(Le(t),e,Le(n))}waterAmount(t,e,n){return this.getBlock(t,e,n)!==an?0:rf(this.fluidByte(t,e,n))}isWaterSource(t,e,n){return this.getBlock(t,e,n)===an&&fM(this.fluidByte(t,e,n))}isWaterFalling(t,e,n){return this.getBlock(t,e,n)===an&&pM(this.fluidByte(t,e,n))}setWater(t,e,n,s,r,o){if(e<0||e>=ve)return;const a=qt(t),l=qt(n),c=Le(t),h=Le(n),u=this.getChunk(a,l),d=u.get(c,e,h)===an&&rf(u.getFluid(c,e,h))>0;s<=0?(u.get(c,e,h)===an&&u.set(c,e,h,0),u.setFluid(c,e,h,0)):(u.set(c,e,h,an),u.setFluid(c,e,h,Hh(s,r,o))),u.dirty=!0;const p=s>0;this.markNeighborsDirty(a,l,c,h,d!==p?mS:1)}markNeighborsDirty(t,e,n,s,r=1){const o=n<r,a=n>15-r,l=s<r,c=s>15-r;o&&this.markDirty(t-1,e),a&&this.markDirty(t+1,e),l&&this.markDirty(t,e-1),c&&this.markDirty(t,e+1),o&&l&&this.markDirty(t-1,e-1),o&&c&&this.markDirty(t-1,e+1),a&&l&&this.markDirty(t+1,e-1),a&&c&&this.markDirty(t+1,e+1)}markDirty(t,e){const n=this.chunks.get(this.key(t,e));n&&(n.dirty=!0)}}function uf(i,t,e,n){let s=Math.floor(i.x),r=Math.floor(i.y),o=Math.floor(i.z);const a=Math.sign(t.x),l=Math.sign(t.y),c=Math.sign(t.z),h=t.x!==0?Math.abs(1/t.x):1/0,u=t.y!==0?Math.abs(1/t.y):1/0,d=t.z!==0?Math.abs(1/t.z):1/0,p=(x,_)=>_>0?Math.floor(x)+1-x:_<0?x-Math.floor(x):1/0;let g=t.x!==0?p(i.x,a)*h:1/0,v=t.y!==0?p(i.y,l)*u:1/0,m=t.z!==0?p(i.z,c)*d:1/0;if(n(s,r,o))return{x:s,y:r,z:o,nx:0,ny:0,nz:0};let f=0;for(let x=0;x<256;x++){let _=0,w=0,A=0;if(g<v&&g<m?(s+=a,f=g,g+=h,_=-a):v<m?(r+=l,f=v,v+=u,w=-l):(o+=c,f=m,m+=d,A=-c),f>e)break;if(n(s,r,o))return{x:s,y:r,z:o,nx:_,ny:w,nz:A}}return null}const gS=new Set([wl,Ml]),df=new Set([lr,Sl]),wc=4,vS=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],ua=(i,t,e)=>`${i},${t},${e}`;function _S(i,t,e,n,s=wc){const r=s+wc,o=new Map,a=[];for(let c=t-r;c<=t+r;c++)for(let h=e-r;h<=e+r;h++)for(let u=n-r;u<=n+r;u++)gS.has(i(c,h,u))&&(o.set(ua(c,h,u),0),a.push({x:c,y:h,z:u}));for(let c=0;c<a.length;c++){const h=a[c],u=o.get(ua(h.x,h.y,h.z))??0;if(!(u>=wc))for(const[d,p,g]of vS){const v=h.x+d,m=h.y+p,f=h.z+g;if(!df.has(i(v,m,f)))continue;const x=ua(v,m,f);o.has(x)||(o.set(x,u+1),a.push({x:v,y:m,z:f}))}}const l=[];for(let c=t-s;c<=t+s;c++)for(let h=e-s;h<=e+s;h++)for(let u=n-s;u<=n+s;u++)df.has(i(c,h,u))&&!o.has(ua(c,h,u))&&l.push({x:c,y:h,z:u});return l}const xS="mtsn70hd";function Pr(i){return`/mineworld/${i}?v=${xS}`}const _e=4,un=12,wo=16,yS=128;function ch(i){return[_e*i,un*i]}function Xh(i){return[.5/(_e*i),.5/(un*i)]}const ff=new Map;function hh(i="classic"){const t=ff.get(i);if(t)return t;const e=i==="classic"?"textures/atlas_classic.png":i==="realistic"?"textures/atlas_realistic.png":"textures/atlas.png",n=new Dr().load(Pr(e));return i==="realistic"?(n.magFilter=Se,n.minFilter=Se,n.generateMipmaps=!1,n.userData.atlasSize=ch(yS)):(n.magFilter=de,n.minFilter=de,n.generateMipmaps=!1,n.userData.atlasSize=ch(wo)),n.colorSpace=ue,ff.set(i,n),n}function wS(){const i=new Dr().load(Pr("textures/torch_block.png"));return i.magFilter=de,i.minFilter=de,i.generateMipmaps=!1,i.colorSpace=ue,i}function MS(i){const t=new Dr,e=[];for(let n=0;n<i;n++){const s=t.load(Pr(`textures/blocks/water_${n}.png`));s.magFilter=de,s.minFilter=Gp,s.generateMipmaps=!0,s.colorSpace=ue,s.wrapS=bn,s.wrapT=bn,e.push(s)}return e}const eo={volume:70,lightingQuality:"standard",texturePack:"classic",renderDistance:6},uh="mineworld.settings",qh=3,SS=["off","standard","high"];function Hm(i){const t=i??{},e=typeof t.volume=="number"&&isFinite(t.volume)?Math.max(0,Math.min(100,Math.round(t.volume))):eo.volume;let n;typeof t.lightingQuality=="string"&&SS.includes(t.lightingQuality)?n=t.lightingQuality:typeof t.shaders=="boolean"?n=t.shaders?"high":"standard":n=eo.lightingQuality;const s=t.texturePack==="cartoon"||t.texturePack==="realistic"?t.texturePack:"classic",r=typeof t.renderDistance=="number"&&isFinite(t.renderDistance)?Math.max(3,Math.min(12,Math.round(t.renderDistance))):eo.renderDistance;return{volume:e,lightingQuality:n,texturePack:s,renderDistance:r}}function bS(i){const t=Hm(i);return(i??{}).textureStyleVersion===qh?t:{...t,texturePack:"classic"}}function Wm(){try{const i=localStorage.getItem(uh);if(!i)return{...eo};const t=JSON.parse(i),e=bS(t);return localStorage.setItem(uh,JSON.stringify({...e,textureStyleVersion:qh})),e}catch{return{...eo}}}function TS(i){try{localStorage.setItem(uh,JSON.stringify({...Hm(i),textureStyleVersion:qh}))}catch{}}const Gm=15,Vm=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function ES(i,t,e,n){const s=n??(()=>0),r=new Uint8Array(i*t*i),o=(l,c,h)=>l+h*i+c*i*i,a=[];for(let l=0;l<i;l++)for(let c=0;c<i;c++){let h=Gm;for(let u=t-1;u>=0&&!e(c,u,l);u--){h=Math.max(0,h-s(c,u,l));const d=o(c,u,l);r[d]=h,h>0&&a.push(d)}}for(let l=0;l<a.length;l++){const c=a[l],h=r[c];if(h<=1)continue;const u=c/(i*i)|0,d=c-u*i*i,p=d/i|0,g=d-p*i;for(const[v,m,f]of Vm){const x=g+v,_=u+m,w=p+f;if(x<0||x>=i||_<0||_>=t||w<0||w>=i||e(x,_,w))continue;const A=h-1-s(x,_,w);if(A<=0)continue;const E=o(x,_,w);r[E]>=A||(r[E]=A,a.push(E))}}return r}function AS(i,t,e,n,s){const r=s??(()=>0),o=new Uint8Array(i*t*i),a=(c,h,u)=>c+u*i+h*i*i,l=[];for(let c=0;c<t;c++)for(let h=0;h<i;h++)for(let u=0;u<i;u++){const d=e(u,c,h);if(d>0){const p=a(u,c,h);d>o[p]&&(o[p]=Math.min(Gm,d),l.push(p))}}for(let c=0;c<l.length;c++){const h=l[c],u=o[h];if(u<=1)continue;const d=h/(i*i)|0,p=h-d*i*i,g=p/i|0,v=p-g*i;for(const[m,f,x]of Vm){const _=v+m,w=d+f,A=g+x;if(_<0||_>=i||w<0||w>=t||A<0||A>=i||n(_,w,A))continue;const E=u-1-r(_,w,A);if(E<=0)continue;const D=a(_,w,A);o[D]>=E||(o[D]=E,l.push(D))}}return o}const da=2,RS=4,pf=[.6,.6,1,.5,.8,.8],Ci=[{n:[1,0,0],o:[1,0,0],c:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],uv:[[0,0],[0,1],[1,1],[1,0]]},{n:[-1,0,0],o:[-1,0,0],c:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,1,0],o:[0,1,0],c:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],uv:[[0,0],[0,1],[1,1],[1,0]]},{n:[0,-1,0],o:[0,-1,0],c:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,1],o:[0,0,1],c:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,-1],o:[0,0,-1],c:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],uv:[[0,0],[0,1],[1,1],[1,0]]}],CS=[.5,.7,.86,1];function DS(i,t,e){return i&&t?0:3-(Number(i)+Number(t)+Number(e))}const Xm=[{u:[0,1,0],v:[0,0,1],ui:1,vi:2},{u:[0,1,0],v:[0,0,1],ui:1,vi:2},{u:[1,0,0],v:[0,0,1],ui:0,vi:2},{u:[1,0,0],v:[0,0,1],ui:0,vi:2},{u:[1,0,0],v:[0,1,0],ui:0,vi:1},{u:[1,0,0],v:[0,1,0],ui:0,vi:1}];function PS(i,t,e,n,s,r){const o=Ci[s],a=Xm[s],l=o.c[r],c=l[a.ui]===1?1:-1,h=l[a.vi]===1?1:-1,u=t+o.n[0],d=e+o.n[1],p=n+o.n[2],g=i(u+c*a.u[0],d+c*a.u[1],p+c*a.u[2]),v=i(u+h*a.v[0],d+h*a.v[1],p+h*a.v[2]),m=i(u+c*a.u[0]+h*a.v[0],d+c*a.u[1]+h*a.v[1],p+c*a.u[2]+h*a.v[2]);return CS[DS(g,v,m)]}const Gs=()=>({P:[],U:[],C:[],I:[],L:[],UW:[],WT:[],T:[],TF:[],SH:[],WO:[],SW:[]}),Vs=i=>{const t=i.P.length/3;return{positions:new Float32Array(i.P),uvs:new Float32Array(i.U),colors:new Float32Array(i.C),indices:t<=65535?new Uint16Array(i.I):new Uint32Array(i.I),light:new Float32Array(i.L),underwater:i.UW.length?new Float32Array(i.UW):void 0,wetness:i.WT.length?new Float32Array(i.WT):void 0,top:i.T.length?new Float32Array(i.T):void 0,topFace:i.TF.length?new Float32Array(i.TF):void 0,shore:i.SH.length?new Float32Array(i.SH):void 0,waveOpen:i.WO.length?new Float32Array(i.WO):void 0,sway:i.SW.length?new Float32Array(i.SW):void 0}};function LS(i,t,e,n){const s=i*Dt,r=t*Dt,o=Gs(),a=Gs(),l=Gs(),c=Gs(),h=Gs(),u=Gs(),[d,p]=Xh(wo),g=1/_e-2*d,v=1/un-2*p,m=(O,z,H)=>Ws(e(O,z,H)),f=8,x=Dt+2*f,_=(O,z,H)=>{const R=e(s+O-f,z,r+H-f);return ti(R)||_c(R)?1:0},w=ES(x,ve,(O,z,H)=>m(s+O-f,z,r+H-f),_),A=AS(x,ve,(O,z,H)=>PM(e(s+O-f,z,r+H-f)),(O,z,H)=>m(s+O-f,z,r+H-f),_),E=(O,z,H)=>z>=ve?15:z<0?0:w[O+f+(H+f)*x+z*x*x],D=(O,z,H)=>z>=ve||z<0?0:A[O+f+(H+f)*x+z*x*x],k=(O,z,H)=>{let R=0;for(let q=z;q<ve&&R<8&&n(O,q,H)>0;q++)R++;return R},b=new Map,S=(O,z,H)=>{const R=Math.round(O-s),q=Math.round(H-r),B=R+q*17+Math.round(z)*17*17,gt=b.get(B);if(gt!==void 0)return gt;const ct=Math.floor(O),yt=Math.floor(z-.001),ft=Math.floor(H);let ot=99;for(let M=yt-1;M<=yt;M++)for(let N=-2;N<=2;N++)for(let $=-2;$<=2;$++){const j=n(ct+$,M,ft+N);if(j<=0)continue;const Z=M+Math.min(1,j/9),ht=Math.abs(Z-z);if(ht>1.05)continue;const rt=Math.hypot(ct+$+.5-O,ft+N+.5-H);ot=Math.min(ot,rt+ht*.35)}const pt=Math.max(0,Math.min(1,(ot-.35)/2)),C=1-pt*pt*(3-2*pt);return b.set(B,C),C},P=(O,z,H,R,q)=>{const B=Xm[R],gt=Ci[R].c[q],ct=gt[B.ui]===1?1:-1,yt=gt[B.vi]===1?1:-1,ft=O+ct*B.u[0],ot=z+ct*B.u[1],pt=H+ct*B.u[2],C=O+yt*B.v[0],M=z+yt*B.v[1],N=H+yt*B.v[2],$=ft+yt*B.v[0],j=ot+yt*B.v[1],Z=pt+yt*B.v[2],ht=m(s+ft,ot,r+pt),rt=m(s+C,M,r+N),lt=m(s+$,j,r+Z);let It=E(O,z,H),st=D(O,z,H),St=1;return ht||(It+=E(ft,ot,pt),st+=D(ft,ot,pt),St++),rt||(It+=E(C,M,N),st+=D(C,M,N),St++),!(ht&&rt)&&!lt&&(It+=E($,j,Z),st+=D($,j,Z),St++),[It/St/15,st/St/15]},V=(O,z,H,R,q,B)=>{const gt=Ci[B],ct=aa(q,B),yt=ct%_e/_e+d,ft=1-(Math.floor(ct/_e)+1)/un+p,ot=pf[B],pt=z+gt.o[0],C=H+gt.o[1],M=R+gt.o[2],N=O===o?k(s+pt,C,r+M):0,$=O.P.length/3,j=[0,0,0,0];for(let Z=0;Z<4;Z++){const ht=gt.c[Z];j[Z]=PS(m,s+z,H,r+R,B,Z);const rt=ot*j[Z],[lt,It]=P(pt,C,M,B,Z);if(O.P.push(z+ht[0],H+ht[1],R+ht[2]),O.U.push(yt+gt.uv[Z][0]*g,ft+gt.uv[Z][1]*v),O.C.push(rt,rt,rt),O.L.push(lt,It),O===o){O.UW.push(N);const st=s+z+ht[0],St=H+ht[1],$t=r+R+ht[2];O.WT.push(N>0?1:S(st,St,$t))}}j[0]+j[2]>j[1]+j[3]?O.I.push($,$+1,$+2,$,$+2,$+3):O.I.push($+1,$+2,$+3,$+1,$+3,$),O===l&&O.SW.push(1,1,1,1)},X=(O,z,H)=>{const R=O+.5,q=z+.5,B=.28,gt=.92,ct=[[[R-B,H,q],[R+B,H,q],[R+B,H+gt,q],[R-B,H+gt,q]],[[R,H,q-B],[R,H,q+B],[R,H+gt,q+B],[R,H+gt,q-B]]],yt=[[0,0],[1,0],[1,1],[0,1]];for(const ft of ct){const ot=u.P.length/3;for(let pt=0;pt<4;pt++)u.P.push(ft[pt][0],ft[pt][1],ft[pt][2]),u.U.push(yt[pt][0],yt[pt][1]),u.C.push(1,1,1);u.I.push(ot,ot+1,ot+2,ot,ot+2,ot+3)}},tt=(O,z,H)=>{const R=aa(Li,jn.PosX),q=R%_e/_e+d,B=q+g,gt=1-(Math.floor(R/_e)+1)/un+p,ct=gt+v,yt=s+O,ft=r+H,ot=e(yt-1,z,ft)===Li||e(yt+1,z,ft)===Li,pt=h.P.length/3;if(ot){const C=H+.5;h.P.push(O,z,C,O+1,z,C,O+1,z+1,C,O,z+1,C)}else{const C=O+.5;h.P.push(C,z,H+1,C,z,H,C,z+1,H,C,z+1,H+1)}h.U.push(q,gt,B,gt,B,ct,q,ct),h.C.push(1,1,1,1,1,1,1,1,1,1,1,1),h.I.push(pt,pt+1,pt+2,pt,pt+2,pt+3)},et=(O,z,H,R,q)=>{const B=R%_e/_e+d,gt=B+g,ct=1-(Math.floor(R/_e)+1)/un+p,yt=ct+v,ft=E(O,z,H)/15,ot=D(O,z,H)/15,pt=.9,C=O+.5,M=H+.5,N=.5,$=[[C-N,M-N,C+N,M+N],[C-N,M+N,C+N,M-N]];for(const[j,Z,ht,rt]of $){const lt=l.P.length/3;l.P.push(j,z,Z,ht,z,rt,ht,z+q,rt,j,z+q,Z),l.U.push(B,ct,gt,ct,gt,yt,B,yt),l.C.push(pt,pt,pt,pt,pt,pt,pt,pt,pt,pt,pt,pt),l.L.push(ft,ot,ft,ot,ft,ot,ft,ot),l.SW.push(0,0,1,1),l.I.push(lt,lt+1,lt+2,lt,lt+2,lt+3)}},J=(O,z,H,R)=>{const q=R%_e/_e+d,B=q+g,gt=1-(Math.floor(R/_e)+1)/un+p,ct=gt+v,yt=E(O,z,H)/15,ft=D(O,z,H)/15,ot=1,pt=z+.06,C=l.P.length/3;l.P.push(O,pt,H,O,pt,H+1,O+1,pt,H+1,O+1,pt,H),l.U.push(q,gt,q,ct,B,ct,B,gt),l.C.push(ot,ot,ot,ot,ot,ot,ot,ot,ot,ot,ot,ot),l.L.push(yt,ft,yt,ft,yt,ft,yt,ft),l.SW.push(0,0,0,0),l.I.push(C,C+1,C+2,C,C+2,C+3)};let it=1;const Y=(O,z,H)=>e(O,z,H)===cr,xt=(O,z,H)=>{if(n(O,z,H)===0&&!Y(O,z,H))return 0;let R=1;for(let q=z+1;R<7&&q<ve&&n(O,q,H)>0;q++)R++;for(let q=z-1;R<7&&q>=0&&n(O,q,H)>0;q--)R++;return R},Rt=(O,z,H)=>(xt(O-1,z,H-1)+xt(O,z,H-1)+xt(O-1,z,H)+xt(O,z,H))/4,At=(O,z,H)=>{const R=(B,gt)=>n(B,z,gt)>0||Y(B,z,gt);return 1-(Number(R(O-1,H-1))+Number(R(O,H-1))+Number(R(O-1,H))+Number(R(O,H)))/4},Yt=new Map,te=(O,z,H)=>{const R=`${O},${z},${H}`,q=Yt.get(R);if(q!==void 0)return q;const B=RS,gt=B*B;let ct=B;for(let pt=-B;pt<B;pt++)for(let C=-B;C<B;C++){const M=C+.5,N=pt+.5,$=M*M+N*N;if($>gt)continue;const j=O+C,Z=H+pt;n(j,z,Z)>0&&e(j,z+1,Z)===0||(ct=Math.min(ct,Math.sqrt($)))}const yt=Math.SQRT1_2,ft=Math.max(0,Math.min(1,(ct-yt)/(B-yt))),ot=ft*ft*(3-2*ft);return Yt.set(R,ot),ot},K=(O,z,H,R,q,B)=>(O*(1-B)+z*B)*(1-q)+(R*(1-B)+H*B)*q,at=(O,z,H,R,q)=>{const B=Ci[R],gt=pf[R],ct=E(O+B.o[0],z+B.o[1],H+B.o[2])/15,yt=D(O+B.o[0],z+B.o[1],H+B.o[2])/15,ft=c.P.length/3,ot=R===2,pt=R===3;let C=1,M=1;ot?(C=da,M=da):pt||(B.c[0][1]===B.c[3][1]?C=da:M=da);const N=B.c.map(ht=>Rt(s+O+ht[0],z,r+H+ht[2])),$=B.c.map(ht=>At(s+O+ht[0],z,r+H+ht[2])),j=B.c.map(ht=>te(s+O+ht[0],z,r+H+ht[2]));for(let ht=0;ht<=M;ht++){const rt=ht/M;for(let lt=0;lt<=C;lt++){const It=lt/C,st=K(B.c[0][0],B.c[1][0],B.c[2][0],B.c[3][0],It,rt),St=K(B.c[0][2],B.c[1][2],B.c[2][2],B.c[3][2],It,rt),$t=K(q[0],q[1],q[2],q[3],It,rt),Bt=z+$t,_t=s+O+st,Xt=r+H+St;c.P.push(O+st,Bt,H+St),ot||pt?c.U.push(_t,Xt):R===0||R===1?c.U.push(Xt,Bt):c.U.push(_t,Bt),c.C.push(gt,gt,gt),c.L.push(ct,yt);const Qt=K(N[0],N[1],N[2],N[3],It,rt),Me=K($[0],$[1],$[2],$[3],It,rt),L=it>0&&(ot||$t>.01);c.T.push((L?1:-1)*Qt),c.TF.push(ot?1:0),c.SH.push(Me),c.WO.push(L?K(j[0],j[1],j[2],j[3],It,rt):0)}}const Z=C+1;for(let ht=0;ht<M;ht++)for(let rt=0;rt<C;rt++){const lt=ft+ht*Z+rt,It=lt+Z,st=It+1,St=lt+1;c.I.push(lt,It,st,lt,st,St)}},Mt=(O,z)=>{let H=0,R=0;for(const[q,B]of z){const gt=n(q,O,B);if(n(q,O+1,B)>0)return 1;if(gt>0){const ct=gt/9;ct>=.8?(H+=ct*10,R+=10):(H+=ct,R+=1)}else ke(e(q,O,B))||(R+=1)}return R>0?H/R:.5};for(let O=0;O<ve;O++)for(let z=0;z<Dt;z++)for(let H=0;H<Dt;H++){const R=e(s+H,O,r+z);if(Ws(R)&&R!==cr)for(let q=0;q<6;q++){const B=Ci[q];Ws(e(s+H+B.o[0],O+B.o[1],r+z+B.o[2]))||V(o,H,O,z,R,q)}else if(_c(R))for(let q=0;q<6;q++){const B=Ci[q],gt=e(s+H+B.o[0],O+B.o[1],r+z+B.o[2]);Ws(gt)||_c(gt)||V(l,H,O,z,R,q)}else if(ti(R)){const q=s+H,B=r+z;it=n(q,O+1,B)>0?0:1;const gt=Mt(O,[[q,B],[q-1,B],[q,B-1],[q-1,B-1]]),ct=Mt(O,[[q,B],[q-1,B],[q,B+1],[q-1,B+1]]),yt=Mt(O,[[q,B],[q+1,B],[q,B+1],[q+1,B+1]]),ft=Mt(O,[[q,B],[q+1,B],[q,B-1],[q+1,B-1]]);n(q,O+1,B)===0&&at(H,O,z,jn.PosY,[gt,ct,yt,ft]),e(q,O-1,B)===0&&at(H,O,z,jn.NegY,[0,0,0,0]);const ot=(pt,C,M,N)=>{e(q+C,O,B+M)===0&&at(H,O,z,pt,N)};ot(jn.PosX,1,0,[0,ft,yt,0]),ot(jn.NegX,-1,0,[0,0,ct,gt]),ot(jn.PosZ,0,1,[0,0,yt,ct]),ot(jn.NegZ,0,-1,[0,gt,ft,0])}else if(R===Pi)X(H,z,O);else if(ki(R))R===Gh?J(H,O,z,aa(R,jn.PosY)):et(H,O,z,aa(R,jn.PosY),R===Lm?1:.78);else if(R===cr)for(let q=0;q<6;q++){const B=Ci[q];Ws(e(s+H+B.o[0],O+B.o[1],r+z+B.o[2]))||V(a,H,O,z,R,q)}else if(R===ho)for(let q=0;q<6;q++){const B=Ci[q],gt=e(s+H+B.o[0],O+B.o[1],r+z+B.o[2]);Ws(gt)||gt===ho||V(o,H,O,z,R,q)}else R===Li&&tt(H,O,z)}const mt=new Uint8Array(4*48*4);for(let O=0;O<48;O++)for(let z=0;z<4;z++)for(let H=0;H<4;H++){let R=0,q=0;for(let B=0;B<4;B++){const gt=(O*4+B)*x*x;for(let ct=0;ct<4;ct++){const yt=gt+(z*4+ct+f)*x+f+H*4;for(let ft=0;ft<4;ft++){const ot=w[yt+ft];ot>R&&(R=ot);const pt=A[yt+ft];pt>q&&(q=pt)}}}mt[H+z*4+O*16]=R<<4|q}return{opaque:Vs(o),ice:Vs(a),cutout:Vs(l),water:Vs(c),portal:Vs(h),torch:Vs(u),light3d:mt}}function kS(i,t,e){return LS(t,e,(n,s,r)=>i.getBlock(n,s,r),(n,s,r)=>i.waterAmount(n,s,r))}function IS(i){return new Worker("/mineworld/assets/meshGen.worker-ILRKqQnW.js",{name:i==null?void 0:i.name})}const US=.15,NS=24*24;function FS(i,t,e,n,s,r,o=US,a=NS){const l=i-e,c=t-n,h=l*l+c*c;return h<=a?!0:(l*s+c*r)/Math.sqrt(h)>=o}const OS=-.2,BS=2.25;function zS(i,t,e,n,s=OS,r=BS){const o=i*i+t*t;return o<=r?!0:(i*e+t*n)/Math.sqrt(o)>=s}const ln=24e3,HS=1e3,Xs=[{t:0,top:[.14,.27,.5],hor:[1,.48,.18],tint:[.72,.64,.62]},{t:1800,top:[.2,.44,.76],hor:[.7,.83,.94],tint:[1,1,1]},{t:6e3,top:[.12,.36,.72],hor:[.58,.75,.91],tint:[1,1,1]},{t:11e3,top:[.18,.4,.72],hor:[.66,.8,.92],tint:[1,1,1]},{t:12200,top:[.12,.21,.44],hor:[1,.36,.1],tint:[.86,.62,.5]},{t:13600,top:[.015,.025,.075],hor:[.035,.06,.14],tint:[.3,.34,.5]},{t:22e3,top:[.015,.025,.075],hor:[.035,.06,.14],tint:[.3,.34,.5]},{t:23200,top:[.14,.27,.5],hor:[1,.48,.18],tint:[.72,.64,.62]}],Mc=(i,t,e)=>i+(t-i)*e,Sc=(i,t,e)=>[Mc(i[0],t[0],e),Mc(i[1],t[1],e),Mc(i[2],t[2],e)];function qm(i){return(i%ln+ln)%ln}function $h(i){const e=(qm(i)-6e3)/ln*Math.PI*2;return Math.max(0,Math.min(1,.5-2*Math.cos(e)))*11}function WS(i,t){return t==="nether"?15:$h(i)}const GS={skyTop:[.18,.05,.05],skyHorizon:[.34,.09,.07],worldTint:[.62,.32,.28],light:.3,isNight:!0};function Ba(i,t="overworld"){if(t==="nether")return GS;const e=qm(i);let n=Xs[0],s={...Xs[0],t:ln};for(let a=0;a<Xs.length;a++){const l=Xs[a],c=Xs[a+1]??{...Xs[0],t:ln};if(e>=l.t&&e<c.t){n=l,s=c;break}}const r=s.t===n.t?0:(e-n.t)/(s.t-n.t),o=Sc(n.tint,s.tint,r);return{skyTop:Sc(n.top,s.top,r),skyHorizon:Sc(n.hor,s.hor,r),worldTint:o,light:(o[0]+o[1]+o[2])/3,isNight:e>=13e3&&e<23e3}}const $m=64,za=256,tr=i=>i*i*(3-2*i),fa=i=>Math.max(0,Math.min(1,i)),Zn=Math.PI*2,er=(i,t)=>{let e=Math.imul(i^2654435769,2246822507)^Math.imul(t^3266489909,668265261);return e^=e>>>15,e=Math.imul(e,2246822507),e^=e>>>13,(e>>>0)/4294967295},Ii=(i,t)=>(i%t+t)%t,Ym=(i,t,e)=>{if(!Number.isInteger(i)||i<t||i&i-1)throw new Error(`${e} size must be a power of two >= ${t}`)},jr=(i,t,e,n)=>{const s=i/e*n,r=t/e*n,o=Math.floor(s),a=Math.floor(r),l=tr(s-o),c=tr(r-a),h=Ii(o,n),u=Ii(o+1,n),d=Ii(a,n),p=Ii(a+1,n),g=er(h,d),v=er(u,d),m=er(h,p),f=er(u,p);return(g+(v-g)*l)*(1-c)+(m+(f-m)*l)*c};function Km(i=$m){Ym(i,16,"cloud-shadow");const t=new Float32Array(i*i);let e=1/0,n=-1/0;for(let a=0;a<i;a++)for(let l=0;l<i;l++){let c=0,h=0,u=1;for(const d of[2,4,8,16])c+=jr(l,a,i,d)*u,h+=u,u*=.52;c/=h,t[l+a*i]=c,e=Math.min(e,c),n=Math.max(n,c)}const s=Math.max(1e-6,n-e);for(let a=0;a<t.length;a++)t[a]=(t[a]-e)/s;const r=new Uint8Array(i*i*4),o=(a,l)=>t[Ii(a,i)+Ii(l,i)*i];for(let a=0;a<i;a++)for(let l=0;l<i;l++){const c=(o(l+1,a)-o(l-1,a))*3.8,h=(o(l,a+1)-o(l,a-1))*3.8,u=1/Math.hypot(c,1,h),d=-c*u,p=-h*u,g=o(l,a),v=Math.pow(Math.max(0,1-Math.abs(g*2-1)),2.5),m=(l+a*i)*4;r[m]=Math.round((d*.5+.5)*255),r[m+1]=Math.round((p*.5+.5)*255),r[m+2]=Math.round(g*255),r[m+3]=Math.round(v*255)}return r}const jm=(i,t,e=1)=>(i.name=t,i.wrapS=bn,i.wrapT=bn,i.magFilter=Se,i.minFilter=fi,i.generateMipmaps=!0,i.colorSpace=yn,i.anisotropy=e,i.needsUpdate=!0,i);function VS(i=$m){const t=new Uh(Km(i),i,i,Mn);return jm(t,"mineworld-cloud-shadow-noise")}const mf=[{kx:4,ky:1,amplitude:.18},{kx:1,ky:5,amplitude:.175},{kx:5,ky:3,amplitude:.16},{kx:-3,ky:6,amplitude:.155},{kx:7,ky:-2,amplitude:.142},{kx:2,ky:8,amplitude:.138},{kx:8,ky:5,amplitude:.123},{kx:-6,ky:9,amplitude:.12},{kx:11,ky:-5,amplitude:.104},{kx:5,ky:12,amplitude:.102},{kx:13,ky:8,amplitude:.086},{kx:-9,ky:14,amplitude:.083},{kx:16,ky:-7,amplitude:.071},{kx:7,ky:17,amplitude:.069},{kx:19,ky:11,amplitude:.058},{kx:-12,ky:20,amplitude:.057},{kx:23,ky:-10,amplitude:.047},{kx:11,ky:24,amplitude:.046},{kx:27,ky:16,amplitude:.038},{kx:-17,ky:28,amplitude:.037},{kx:32,ky:-15,amplitude:.03},{kx:16,ky:33,amplitude:.029},{kx:38,ky:21,amplitude:.023},{kx:-22,ky:39,amplitude:.022}],gf=[[1,2],[-2,1],[3,1],[-1,3],[2,-3],[3,-2],[-3,-1],[1,-3]],XS=(i,t)=>er(i.kx+t*37+101,i.ky-t*53-211)*Zn,qS=(i,t)=>er(i.ky+t*61-307,i.kx+t*43+419)*Zn;function $S(i=za){Ym(i,za,"directional-wave");const t=i*i,e=new Float32Array(t);let n=1/0,s=-1/0;for(let u=0;u<i;u++){const d=u/i;for(let p=0;p<i;p++){const g=p/i,v=Math.sin(Zn*(2*g+3*d)+1.71)*.012+Math.sin(Zn*(-3*g+2*d)+4.19)*.007+Math.sin(Zn*(5*g-d)+2.43)*.003,m=Math.sin(Zn*(-2*g+3*d)+.63)*.011+Math.sin(Zn*(3*g+4*d)+2.77)*.006+Math.sin(Zn*(g-5*d)+5.31)*.003;let f=0,x=0;for(let w=0;w<mf.length;w++){const A=mf[w],E=XS(A,w),D=w&1?-1:1,k=Zn*(A.kx*(g+v*D)+A.ky*(d+m*(.82-D*.18)))+E,b=gf[w%gf.length],S=Zn*(b[0]*g+b[1]*d)+qS(A,w),P=Math.sin(S)*.5+.5,V=.22+tr(P)*.78,X=Math.hypot(A.kx,A.ky),tt=.035*(1-tr(fa((X-18)/12))),et=Math.sin(k)+Math.sin(k*2+E*.37)*.17+Math.sin(k*3-E*.19)*tt;f+=et*A.amplitude*V,x+=A.amplitude}const _=(jr(p+29,u-47,i,16)-.5)*.07+(jr(p-73,u+31,i,32)-.5)*.035;f=f/(x*.92)+_,e[p+u*i]=f,n=Math.min(n,f),s=Math.max(s,f)}}const r=Math.max(1e-6,s-n);for(let u=0;u<t;u++)e[u]=(e[u]-n)/r;const o=(u,d)=>e[Ii(u,i)+Ii(d,i)*i],a=4.8*(i/za),l=new Float32Array(t);let c=1e-6;for(let u=0;u<i;u++)for(let d=0;d<i;d++){const p=o(d,u),g=p*4-o(d-1,u)-o(d+1,u)-o(d,u-1)-o(d,u+1),v=Math.max(0,g)*tr(fa((p-.38)/.52));l[d+u*i]=v,c=Math.max(c,v)}const h=new Uint8Array(t*4);for(let u=0;u<i;u++)for(let d=0;d<i;d++){const p=(o(d+1,u)-o(d-1,u))*a,g=(o(d,u+1)-o(d,u-1))*a,v=1/Math.hypot(p,1,g),m=-p*v,f=-g*v,x=o(d,u),_=jr(d+83,u-19,i,16)*.58+jr(d-41,u+67,i,32)*.42,w=tr(fa((_-.31)/.49)),A=fa(l[d+u*i]/(c*.36)),E=Math.pow(A,.76)*w,D=(d+u*i)*4;h[D]=Math.round((m*.5+.5)*255),h[D+1]=Math.round((f*.5+.5)*255),h[D+2]=Math.round(x*255),h[D+3]=Math.round(E*255)}return h}function YS(i=za){const t=new Uh($S(i),i,i,Mn);return jm(t,"mineworld-directional-wave",8)}const Yh={dg:[-.3,.954],dgw:[.847,.532],d1:[.821,.571],d1w:[-.173,.985],d2:[-.419,.908],d2w:[.982,.188],d3:[.96,-.28],d3w:[-.735,-.678],groupWaveNumber:.075,groupTimeRate:-.07,groupWarpWaveNumber:.131,groupWarpTimeRate:.093,groupWarpPhase:1.11,groupWarpStrength:.42,groupBase:.76,groupAmplitude:.24,wave1Number:.22,wave1TimeRate:.24,wave1WarpNumber:.34,wave1WarpTimeRate:-.3,wave1WarpPhase:1.37,wave1WarpStrength:.24,wave1Weight:.42,wave2Number:.7,wave2TimeRate:-.54,wave2WarpNumber:.96,wave2WarpTimeRate:.72,wave2WarpPhase:-.83,wave2WarpStrength:.18,wave2Weight:.4,wave3Number:1.12,wave3TimeRate:.86,wave3WarpNumber:1.42,wave3WarpTimeRate:-1.08,wave3WarpPhase:2.11,wave3WarpStrength:.14,wave3Weight:.18,calmLinear:.145,calmQuadratic:-.055,oceanLinear:.34,oceanQuadratic:.04,quadraticBias:.17};function Ut(i){if(!Number.isFinite(i))throw new Error(`Water-wave GLSL constant must be finite: ${i}`);return(Object.is(i,-0)?0:i).toFixed(3)}function Rn(i,t){return`${i<0?"-":"+"} ${t} * ${Ut(Math.abs(i))}`}function pa(i){return`${i<0?"-":"+"} ${Ut(Math.abs(i))}`}const wt=Yh,KS=`
vec3 mwWaveField(vec2 p, float t, float ocean) {
  vec2 dg = vec2(${Ut(wt.dg[0])}, ${Ut(wt.dg[1])});
  vec2 dgw = vec2(${Ut(wt.dgw[0])}, ${Ut(wt.dgw[1])});
  vec2 d1 = vec2(${Ut(wt.d1[0])}, ${Ut(wt.d1[1])});
  vec2 d1w = vec2(${Ut(wt.d1w[0])}, ${Ut(wt.d1w[1])});
  vec2 d2 = vec2(${Ut(wt.d2[0])}, ${Ut(wt.d2[1])});
  vec2 d2w = vec2(${Ut(wt.d2w[0])}, ${Ut(wt.d2w[1])});
  vec2 d3 = vec2(${Ut(wt.d3[0])}, ${Ut(wt.d3[1])});
  vec2 d3w = vec2(${Ut(wt.d3w[0])}, ${Ut(wt.d3w[1])});
  float pgw = dot(p, dgw) * ${Ut(wt.groupWarpWaveNumber)} ${Rn(wt.groupWarpTimeRate,"t")} ${pa(wt.groupWarpPhase)};
  float pg = dot(p, dg) * ${Ut(wt.groupWaveNumber)} ${Rn(wt.groupTimeRate,"t")}
    + ${Ut(wt.groupWarpStrength)} * sin(pgw);
  float sg = sin(pg), cg = cos(pg), cgw = cos(pgw);
  float group = ${Ut(wt.groupBase)} + ${Ut(wt.groupAmplitude)} * sg;
  vec2 groupPhaseGrad = ${Ut(wt.groupWaveNumber)} * dg
    + ${Ut(wt.groupWarpStrength)} * cgw * ${Ut(wt.groupWarpWaveNumber)} * dgw;
  vec2 groupGrad = ${Ut(wt.groupAmplitude)} * cg * groupPhaseGrad;
  float p1w = dot(p, d1w) * ${Ut(wt.wave1WarpNumber)} ${Rn(wt.wave1WarpTimeRate,"t")} ${pa(wt.wave1WarpPhase)};
  float p2w = dot(p, d2w) * ${Ut(wt.wave2WarpNumber)} ${Rn(wt.wave2WarpTimeRate,"t")} ${pa(wt.wave2WarpPhase)};
  float p3w = dot(p, d3w) * ${Ut(wt.wave3WarpNumber)} ${Rn(wt.wave3WarpTimeRate,"t")} ${pa(wt.wave3WarpPhase)};
  float p1 = dot(p, d1) * ${Ut(wt.wave1Number)} ${Rn(wt.wave1TimeRate,"t")}
    + ${Ut(wt.wave1WarpStrength)} * sin(p1w);
  float p2 = dot(p, d2) * ${Ut(wt.wave2Number)} ${Rn(wt.wave2TimeRate,"t")}
    + ${Ut(wt.wave2WarpStrength)} * sin(p2w);
  float p3 = dot(p, d3) * ${Ut(wt.wave3Number)} ${Rn(wt.wave3TimeRate,"t")}
    + ${Ut(wt.wave3WarpStrength)} * sin(p3w);
  float s1 = sin(p1), s2 = sin(p2), s3 = sin(p3);
  vec2 p1Grad = ${Ut(wt.wave1Number)} * d1
    + ${Ut(wt.wave1WarpStrength)} * cos(p1w) * ${Ut(wt.wave1WarpNumber)} * d1w;
  vec2 p2Grad = ${Ut(wt.wave2Number)} * d2
    + ${Ut(wt.wave2WarpStrength)} * cos(p2w) * ${Ut(wt.wave2WarpNumber)} * d2w;
  vec2 p3Grad = ${Ut(wt.wave3Number)} * d3
    + ${Ut(wt.wave3WarpStrength)} * cos(p3w) * ${Ut(wt.wave3WarpNumber)} * d3w;
  float q = ${Ut(wt.wave1Weight)} * group * s1
    + ${Ut(wt.wave2Weight)} * s2
    + ${Ut(wt.wave3Weight)} * s3;
  vec2 qGrad = ${Ut(wt.wave1Weight)} * (groupGrad * s1 + group * cos(p1) * p1Grad)
    + ${Ut(wt.wave2Weight)} * cos(p2) * p2Grad
    + ${Ut(wt.wave3Weight)} * cos(p3) * p3Grad;
  float calmH = ${Ut(wt.calmLinear)} * q ${Rn(wt.calmQuadratic,"q * q")};
  float oceanH = ${Ut(wt.oceanLinear)} * q ${Rn(wt.oceanQuadratic,`(q * q - ${Ut(wt.quadraticBias)})`)};
  float h = mix(calmH, oceanH, ocean);
  float dhdq = mix(
    ${Ut(wt.calmLinear)} ${Rn(2*wt.calmQuadratic,"q")},
    ${Ut(wt.oceanLinear)} ${Rn(2*wt.oceanQuadratic,"q")},
    ocean
  );
  vec2 hGrad = dhdq * qGrad;
  return vec3(h, hGrad);
}`.trim();function ma(i,t,e,n,s,r,o,a,l,c,h){const u=(i*o[0]+t*o[1])*a+e*l+c,d=Math.cos(u),p=(i*n[0]+t*n[1])*s+e*r+h*Math.sin(u),g=Math.cos(p);return{height:Math.sin(p),slopeX:g*(s*n[0]+h*d*a*o[0]),slopeZ:g*(s*n[1]+h*d*a*o[1])}}function jS(i,t,e,n){const s=Yh,r=ma(i,t,e,s.dg,s.groupWaveNumber,s.groupTimeRate,s.dgw,s.groupWarpWaveNumber,s.groupWarpTimeRate,s.groupWarpPhase,s.groupWarpStrength),o=s.groupBase+s.groupAmplitude*r.height,a=s.groupAmplitude*r.slopeX,l=s.groupAmplitude*r.slopeZ,c=ma(i,t,e,s.d1,s.wave1Number,s.wave1TimeRate,s.d1w,s.wave1WarpNumber,s.wave1WarpTimeRate,s.wave1WarpPhase,s.wave1WarpStrength),h=ma(i,t,e,s.d2,s.wave2Number,s.wave2TimeRate,s.d2w,s.wave2WarpNumber,s.wave2WarpTimeRate,s.wave2WarpPhase,s.wave2WarpStrength),u=ma(i,t,e,s.d3,s.wave3Number,s.wave3TimeRate,s.d3w,s.wave3WarpNumber,s.wave3WarpTimeRate,s.wave3WarpPhase,s.wave3WarpStrength),d=s.wave1Weight*o*c.height+s.wave2Weight*h.height+s.wave3Weight*u.height,p=s.wave1Weight*(a*c.height+o*c.slopeX)+s.wave2Weight*h.slopeX+s.wave3Weight*u.slopeX,g=s.wave1Weight*(l*c.height+o*c.slopeZ)+s.wave2Weight*h.slopeZ+s.wave3Weight*u.slopeZ,v=d*d,m=s.calmLinear*d+s.calmQuadratic*v,f=s.oceanLinear*d+s.oceanQuadratic*(v-s.quadraticBias),x=m+(f-m)*n,_=s.calmLinear+2*s.calmQuadratic*d,w=s.oceanLinear+2*s.oceanQuadratic*d,A=_+(w-_)*n;return{height:x,slopeX:A*p,slopeZ:A*g}}const vf=()=>typeof performance<"u"?performance.now():Date.now(),ZS=24,Gr=2048,ga=36,va=ee+8/9,_f=ch(wo),QS=110,xf=(i,t,e)=>{const n=Math.max(0,Math.abs(i)-.5),s=Math.max(0,Math.abs(t)-.5);return n*n+s*s>e},bc="float mcBright(float lv){ float f = clamp(lv,0.0,15.0)/15.0; return f/(4.0-3.0*f); }",Tc="{ float skyLv = aLight.x*15.0; float blkLv = aLight.y*15.0; float bs = mcBright(max(skyLv - uSkyDarken, 0.0)); float bb = mcBright(blkLv); vSkyBright = bs; vBlockBright = bb; float drkFloor = (skyLv < 0.5) ? 0.03 : 0.04; vLF = max(bs, bb) * 0.96 + drkFloor; float sf = (bs + bb) > 0.0001 ? bs / (bs + bb) : 1.0; vTint = mix(vec3(1.0, 0.91, 0.78), uSkyTint, sf); }",yf=i=>{const t=Math.max(0,Math.min(15,i))/15;return t/(4-3*t)};class Zm{constructor(t,e,n){y(this,"meshes",new Map);y(this,"lightGrids",new Map);y(this,"opaqueMat");y(this,"iceMat");y(this,"cutoutMat");y(this,"waterMat");y(this,"portalMat");y(this,"torchMat");y(this,"waterFrames");y(this,"waterTex");y(this,"cloudNoiseTex");y(this,"waterWaveTex");y(this,"waterAnimT",0);y(this,"waterFrame",0);y(this,"uSkyMul",{value:1});y(this,"uSkyTint",{value:new Et(1,1,1)});y(this,"uSkyDarken",{value:0});y(this,"uShaders",{value:0});y(this,"uTime",{value:0});y(this,"uAtlasSize",{value:new zt(..._f)});y(this,"uSkyRefl",{value:new Et().setRGB(.55,.72,.95,ue)});y(this,"uSkyTop",{value:new Et().setRGB(.35,.55,.85,ue)});y(this,"uSunDir",{value:new I(.4,.85,.3)});y(this,"uRefractionColor",{value:null});y(this,"uRefractionDepth",{value:null});y(this,"uRefractionSize",{value:new zt(1,1)});y(this,"uHasRefraction",{value:0});y(this,"uCameraUnderwater",{value:0});y(this,"uUnderwaterAmount",{value:0});y(this,"uReflectionColor",{value:null});y(this,"uReflectionSize",{value:new zt(1,1)});y(this,"uReflectionMatrix",{value:new ge});y(this,"uHasReflection",{value:0});y(this,"sun",new Sm(16777215,0));y(this,"uShadowMap",{value:null});y(this,"uShadowMatrix",{value:new ge});y(this,"uShadowTexel",{value:new zt(1/Gr,1/Gr)});y(this,"uShadowOn",{value:0});y(this,"uHq",{value:0});y(this,"uSunUp",{value:0});y(this,"leafDepthMat",null);y(this,"meshWorkers",[]);y(this,"meshRr",0);y(this,"meshPending",new Map);y(this,"nextMeshJobId",1);y(this,"meshPendingSince",new Map);y(this,"meshFails",new Map);y(this,"meshQueue",[]);y(this,"editKeys",new Set);y(this,"priorityQueue",[]);y(this,"fogCullR2",(QS/Dt)**2);y(this,"lightingQuality",null);y(this,"sunEnabled",!0);y(this,"lastTint","");this.scene=t,this.world=e,this.syncAtlasSize(n),this.opaqueMat=new ye({map:n,vertexColors:!0}),this.opaqueMat.shadowSide=Ge,this.iceMat=new ye({map:n,vertexColors:!0}),this.iceMat.shadowSide=Ge,this.cutoutMat=new ye({map:n,vertexColors:!0,alphaTest:.5,side:Qe}),this.waterFrames=MS(ZS),this.waterTex=this.waterFrames[0].clone(),this.waterTex.needsUpdate=!0,this.cloudNoiseTex=VS(128),this.waterWaveTex=YS(),this.waterMat=new ye({map:this.waterTex,vertexColors:!0,transparent:!0,opacity:.78,depthWrite:!1,side:Qe}),this.waterMat.forceSinglePass=!0,this.portalMat=new ye({map:n,vertexColors:!0,transparent:!0,opacity:.82,depthWrite:!1,side:Qe}),this.portalMat.forceSinglePass=!0,this.installLight(this.opaqueMat,!1,!0),this.installLight(this.cutoutMat,!0,!1),this.installWaterShader(this.waterMat),this.installIceShader(this.iceMat),this.torchMat=new ye({map:wS(),transparent:!0,alphaTest:.5,side:Qe}),this.sun.castShadow=!1,this.sun.shadow.mapSize.set(Gr,Gr);const s=this.sun.shadow.camera;if(s.left=-ga,s.right=ga,s.top=ga,s.bottom=-ga,s.near=1,s.far=260,this.scene.add(this.sun),this.scene.add(this.sun.target),this.leafDepthMat=new vm({depthPacking:Zp,map:n,alphaTest:.5}),this.leafDepthMat.onBeforeCompile=r=>{r.uniforms.uTime=this.uTime,r.uniforms.uShaders=this.uShaders,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;
uniform float uShaders;
attribute float aSway;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ float sw = uShaders * 0.06 * aSway; vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz; float ph = wp.x*0.6 + wp.z*0.5 + wp.y*0.3; transformed.x += sin(ph + uTime*1.4) * sw; transformed.z += sin(ph*1.3 + uTime*1.1) * sw; transformed.y += sin(ph*0.8 + uTime*1.7) * sw * 0.5; }`)},this.leafDepthMat.customProgramCacheKey=()=>"mineworld-cutout-sway-depth-v1",typeof Worker<"u"){const r=typeof navigator<"u"&&navigator.hardwareConcurrency||4,o=Math.max(1,Math.min(4,r-1));for(let a=0;a<o;a++){const l=new IS;l.onmessage=c=>this.handleMeshWorkerResult(c.data),l.onerror=c=>{console.error("[meshgen worker] 致命错误(整个 worker 挂了，区块会停止网格化):",c.message)},this.meshWorkers.push(l)}}}installLight(t,e=!1,n=!1){t.onBeforeCompile=s=>{s.uniforms.uSkyTint=this.uSkyTint,s.uniforms.uSkyDarken=this.uSkyDarken,s.uniforms.uShadowMap=this.uShadowMap,s.uniforms.uShadowMatrix=this.uShadowMatrix,s.uniforms.uShadowTexel=this.uShadowTexel,s.uniforms.uShadowOn=this.uShadowOn,s.uniforms.uHq=this.uHq,s.uniforms.uSunUp=this.uSunUp,s.uniforms.uShaders=this.uShaders,s.uniforms.uSunDirW=this.uSunDir,s.uniforms.uTime=this.uTime,s.uniforms.uAtlasSize=this.uAtlasSize,s.uniforms.uSurfaceNoise={value:this.cloudNoiseTex},s.uniforms.uWaterWaves={value:this.waterWaveTex};const r=e?`{ float sw = uShaders * 0.06 * aSway; vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz; float ph = wp.x*0.6 + wp.z*0.5 + wp.y*0.3; transformed.x += sin(ph + uTime*1.4) * sw; transformed.z += sin(ph*1.3 + uTime*1.1) * sw; transformed.y += sin(ph*0.8 + uTime*1.7) * sw * 0.5; }
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
`+bc).replace("#include <begin_vertex>",`#include <begin_vertex>
`+r+Tc+`
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
uniform vec2 uAtlasSize;
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
  vec2 mwAtlasSize = uAtlasSize;
  vec2 mwTexel = 1.0 / mwAtlasSize;
  vec2 mwTileSize = vec2(1.0 / ${_e}.0, 1.0 / ${un}.0);
  vec2 mwTileBase = floor(vMapUv / mwTileSize) * mwTileSize;
  float mwTileRow = clamp(floor((1.0 - vMapUv.y) * ${un}.0), 0.0, ${un-1}.0);
  mwTileIndex = floor(vMapUv.x * ${_e}.0) + mwTileRow * ${_e}.0;
  mwRock = max(max(max(mwTile(mwTileIndex,0.0),mwTile(mwTileIndex,4.0)),max(mwTile(mwTileIndex,9.0),mwTile(mwTileIndex,14.0))),max(max(mwTile(mwTileIndex,16.0),mwTile(mwTileIndex,22.0)),max(mwTile(mwTileIndex,24.0),mwTile(mwTileIndex,35.0))));
  mwSoil = max(max(mwTile(mwTileIndex,1.0),mwTile(mwTileIndex,3.0)),mwTile(mwTileIndex,20.0));
  mwGrass = mwTile(mwTileIndex,2.0);
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
  float mwWarmProtect = clamp(mwSoil*0.76+mwGrass*0.92+mwFoliage*0.92,0.0,1.0);
  vec3 mwDirectTone = mix(sunTone, vec3(mwSunLuma), mwWarmProtect);
  float sunCloud = 1.0 - cloud * mix(0.48, 0.62, uHq);
  float mwDirectStrength = mix(0.68, 0.74, uHq);
  float mwGroundBounce = 1.0+mwNatural*smoothstep(0.68,0.98,mwGeomN.y)*0.07;
  vec3 mwDirect = mwBlockAlbedo * mwStyleShade * mwDirectTone * nd * sunLit * sunCloud * mwDirectStrength * mwGroundBounce;
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
  float mwGlowstone = 1.0 - step(0.5, abs(mwTileIndex - ${Oa.glowstone}.0));
  float mwLava = 1.0 - step(0.5, abs(mwTileIndex - ${Oa.lava}.0));
  float mwPortal = 1.0 - step(0.5, abs(mwTileIndex - ${Oa.nether_portal}.0));
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
}`)}}updateSun(t,e,n,s){if(!this.sunEnabled){this.uSunUp.value=0,this.uShadowOn.value=0;return}const r=t/ln*Math.PI*2;let o=Math.cos(r),a=Math.sin(r),l=.1;const c=Math.hypot(o,a,l)||1;o/=c,a/=c,l/=c;const h=Math.round(e),u=Math.round(n),d=Math.round(s);this.sun.target.position.set(h,u,d),this.sun.position.set(h+o*120,u+a*120,d+l*120),this.sun.target.updateMatrixWorld(),this.sun.updateMatrixWorld(),this.uSunUp.value=Math.max(0,Math.min(1,(a-.02)/.2));const p=this.sun.shadow.map;this.sun.castShadow&&p&&p.texture&&this.uSunUp.value>.001?(this.uShadowMap.value=p.texture,this.uShadowMatrix.value=this.sun.shadow.matrix,this.uShadowOn.value=1):this.uShadowOn.value=0}installWaterShader(t){t.onBeforeCompile=e=>{e.uniforms.uSkyMul=this.uSkyMul,e.uniforms.uSkyTint=this.uSkyTint,e.uniforms.uSkyDarken=this.uSkyDarken,e.uniforms.uShaders=this.uShaders,e.uniforms.uTime=this.uTime,e.uniforms.uSkyRefl=this.uSkyRefl,e.uniforms.uSkyTop=this.uSkyTop,e.uniforms.uSunDir=this.uSunDir,e.uniforms.uHq=this.uHq,e.uniforms.uSurfaceNoise={value:this.waterWaveTex},e.uniforms.uRefractionColor=this.uRefractionColor,e.uniforms.uRefractionDepth=this.uRefractionDepth,e.uniforms.uRefractionSize=this.uRefractionSize,e.uniforms.uHasRefraction=this.uHasRefraction,e.uniforms.uCameraUnderwater=this.uCameraUnderwater,e.uniforms.uUnderwaterAmount=this.uUnderwaterAmount,e.uniforms.uReflectionColor=this.uReflectionColor,e.uniforms.uReflectionSize=this.uReflectionSize,e.uniforms.uReflectionMatrix=this.uReflectionMatrix,e.uniforms.uHasReflection=this.uHasReflection,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
${KS}
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
${bc}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${Tc}
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
  abs(mwWp0.y - ${va.toFixed(6)})
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
    abs(vWaterBaseWPos.y - ${va.toFixed(6)})
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
      abs(vWaterBaseWPos.y - ${va.toFixed(6)})
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
${bc}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${Tc}
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
      * (1.0 - smoothstep(0.18, 0.42, abs(vWPos.y - ${va.toFixed(6)})))
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
}`)}}setTint(t){const e=t.join();e!==this.lastTint&&(this.lastTint=e,this.uSkyTint.value.setRGB(t[0],t[1],t[2]))}setSkyMul(t){this.uSkyMul.value=t}setSkyDarken(t){this.uSkyDarken.value=t}setLightingQuality(t){var o;if(t===this.lightingQuality)return;this.lightingQuality=t,this.uShaders.value=t!=="off"?1:0;const e=t!=="off";this.waterMat.transparent=!e,this.waterMat.depthWrite=e,this.waterMat.opacity=e?1:.78,this.waterMat.needsUpdate=!0,this.sun.castShadow=t!=="off"&&this.sunEnabled,this.uHq.value=t==="high"?1:0;const n=t==="high"?4096:Gr;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),(o=this.sun.shadow.map)==null||o.dispose(),this.sun.shadow.map=null,this.uShadowOn.value=0,this.uShadowTexel.value.set(1/n,1/n));const s=t==="high"?56:46,r=this.sun.shadow.camera;r.left!==-s&&(r.left=-s,r.right=s,r.top=s,r.bottom=-s,r.updateProjectionMatrix()),t==="off"&&(this.uShadowOn.value=0)}setSunEnabled(t){t!==this.sunEnabled&&(this.sunEnabled=t,this.sun.castShadow=t&&this.lightingQuality!==null&&this.lightingQuality!=="off",t||(this.uSunUp.value=0,this.uShadowOn.value=0))}setFogFar(t){this.fogCullR2=(t/Dt)**2}setSkyReflection(t,e){this.uSkyRefl.value.setRGB(t[0],t[1],t[2],ue),e&&this.uSkyTop.value.setRGB(e[0],e[1],e[2],ue)}setWaterRefraction(t,e,n,s,r){this.uRefractionColor.value=t,this.uRefractionDepth.value=e,this.uRefractionSize.value.set(Math.max(1,n),Math.max(1,s)),this.uHasRefraction.value=t&&e?1:0,this.uUnderwaterAmount.value=Gn.clamp(r,0,1)}setCameraUnderwater(t){this.uCameraUnderwater.value=t?1:0}setWaterReflection(t,e,n,s){this.uReflectionColor.value=t,this.uReflectionSize.value.set(Math.max(1,n),Math.max(1,s)),e&&this.uReflectionMatrix.value.copy(e),this.uHasReflection.value=t&&e?1:0}setSunDir(t,e,n){this.uSunDir.value.set(t,e,n)}syncAtlasSize(t){const e=t.userData.atlasSize;Array.isArray(e)&&e.length===2&&Number.isFinite(e[0])&&Number.isFinite(e[1])?this.uAtlasSize.value.set(e[0],e[1]):this.uAtlasSize.value.set(..._f)}setAtlas(t){this.syncAtlasSize(t),this.opaqueMat.map=t,this.iceMat.map=t,this.cutoutMat.map=t,this.portalMat.map=t,this.leafDepthMat&&(this.leafDepthMat.map=t),this.opaqueMat.needsUpdate=!0,this.iceMat.needsUpdate=!0,this.cutoutMat.needsUpdate=!0,this.portalMat.needsUpdate=!0,this.leafDepthMat&&(this.leafDepthMat.needsUpdate=!0)}animateWater(t){if(this.uTime.value+=t,this.uShaders.value>.5)return;this.waterAnimT+=t;const e=.09;for(;this.waterAnimT>=e;){this.waterAnimT-=e,this.waterFrame=(this.waterFrame+1)%this.waterFrames.length;const n=this.waterFrames[this.waterFrame];n.image&&(this.waterTex.image=n.image,this.waterTex.needsUpdate=!0)}}key(t,e){return`${t},${e}`}handleMeshWorkerResult({jobId:t,cx:e,cz:n,mesh:s,error:r}){var a;const o=this.key(e,n);if(this.meshPending.get(o)===t){if(this.meshPending.delete(o),this.meshPendingSince.delete(o),r){const l=(this.meshFails.get(o)??0)+1;this.meshFails.set(o,l),console.warn(`[meshgen] 区块(${e},${n}) 网格化失败 #${l}: ${r.split(`
`)[0]}`);return}this.meshFails.delete(o),!(!s||!this.world.peek(e,n))&&(this.editKeys.has(o)?(this.priorityQueue.push({cx:e,cz:n,mesh:s}),(a=this.world.peek(e,n))!=null&&a.dirty||this.editKeys.delete(o)):this.meshQueue.push({cx:e,cz:n,mesh:s}))}}setWorld(t){for(const e of[...this.meshes.keys()])this.unload(e);this.lightGrids.clear(),this.meshQueue.length=0,this.priorityQueue.length=0,this.meshPending.clear(),this.meshPendingSince.clear(),this.meshFails.clear(),this.editKeys.clear(),this.world=t}dispose(){var t;for(const e of[...this.meshes.keys()])this.unload(e);this.lightGrids.clear();for(const e of this.meshWorkers)e.terminate();this.meshWorkers.length=0,this.opaqueMat.dispose(),this.iceMat.dispose(),this.cutoutMat.dispose(),this.waterMat.dispose(),this.portalMat.dispose(),this.torchMat.dispose(),this.waterTex.dispose(),this.cloudNoiseTex.dispose(),this.waterWaveTex.dispose(),(t=this.leafDepthMat)==null||t.dispose(),this.scene.remove(this.sun),this.scene.remove(this.sun.target)}buildGeo(t){var n;const e=new qe;return e.setAttribute("position",new me(t.positions,3)),t.normals&&e.setAttribute("normal",new me(t.normals,3)),e.setAttribute("uv",new me(t.uvs,2)),e.setAttribute("color",new me(t.colors,3)),t.light&&t.light.length&&e.setAttribute("aLight",new me(t.light,2)),t.underwater&&t.underwater.length&&e.setAttribute("aUnderwater",new me(t.underwater,1)),t.wetness&&t.wetness.length&&e.setAttribute("aWetness",new me(t.wetness,1)),t.top&&t.top.length&&e.setAttribute("aTop",new me(t.top,1)),t.topFace&&t.topFace.length&&e.setAttribute("aTopFace",new me(t.topFace,1)),t.shore&&t.shore.length&&e.setAttribute("aShore",new me(t.shore,1)),t.waveOpen&&t.waveOpen.length&&e.setAttribute("aWaveOpen",new me(t.waveOpen,1)),t.sway&&t.sway.length&&e.setAttribute("aSway",new me(t.sway,1)),e.setIndex(new me(t.indices,1)),(n=t.top)!=null&&n.length&&(e.computeBoundingSphere(),e.boundingSphere&&(e.boundingSphere.radius+=.42)),e}lightLevelAt(t,e,n){const s=Math.floor(Math.floor(t)/Dt),r=Math.floor(Math.floor(n)/Dt),o=this.lightGrids.get(this.key(s,r));if(!o)return[this.sunEnabled?15:0,0];const a=Math.min(3,Math.max(0,Math.floor((t-s*Dt)/4))),l=Math.min(3,Math.max(0,Math.floor((n-r*Dt)/4))),c=Math.min(47,Math.max(0,Math.floor(e/4))),h=o[a+l*4+c*16];return[h>>4,h&15]}brightnessAt(t,e,n,s){const[r,o]=this.lightLevelAt(t,e,n),a=r<.5?.03:.04;return Math.min(1,Math.max(yf(r-s),yf(o))*.96+a)}unload(t){this.editKeys.delete(t),this.meshPendingSince.delete(t),this.meshFails.delete(t),this.lightGrids.delete(t);const e=this.meshes.get(t);if(e){for(const n of[e.opaque,e.ice,e.cutout,e.water,e.portal,e.torch])n&&(this.scene.remove(n),n.geometry.dispose());this.meshes.delete(t)}}addMesh(t,e,n,s){if(t.indices.length===0)return null;const r=new Jt(this.buildGeo(t),e);return r.position.set(n*Dt,0,s*Dt),(e===this.waterMat||e===this.iceMat)&&r.layers.set(zh),this.scene.add(r),r}flushMesh(t){for(let e=0;e<8&&this.priorityQueue.length>0;e++){const n=this.priorityQueue.shift();n&&this.world.peek(n.cx,n.cz)&&this.applyMesh(n.cx,n.cz,n.mesh)}for(let e=0;e<t&&this.meshQueue.length>0;e++){const n=this.meshQueue.shift();n&&this.world.peek(n.cx,n.cz)&&this.applyMesh(n.cx,n.cz,n.mesh)}}meshBusy(){return this.meshQueue.length>0||this.priorityQueue.length>0||this.meshPending.size>0}meshQueueLen(){return this.meshQueue.length+this.priorityQueue.length}pipelineStats(){let t=0;for(const e of this.meshes.values())[e.opaque,e.ice,e.cutout,e.water,e.portal,e.torch].some(n=>n&&n.visible)&&t++;return{meshed:this.meshes.size,visible:t,pending:this.meshPending.size,queued:this.meshQueueLen()}}applyMesh(t,e,n){this.unload(this.key(t,e)),this.lightGrids.set(this.key(t,e),n.light3d);const s=this.addMesh(n.opaque,this.opaqueMat,t,e)??new Jt,r=this.addMesh(n.ice,this.iceMat,t,e),o=this.addMesh(n.cutout,this.cutoutMat,t,e),a=this.addMesh(n.water,this.waterMat,t,e),l=this.addMesh(n.portal,this.portalMat,t,e),c=this.addMesh(n.torch,this.torchMat,t,e);s.castShadow=!0,s.receiveShadow=!0,r&&(r.castShadow=!0,r.receiveShadow=!0),o&&(o.castShadow=!0,o.receiveShadow=!0,this.leafDepthMat&&(o.customDepthMaterial=this.leafDepthMat)),this.meshes.set(this.key(t,e),{opaque:s,ice:r,cutout:o,water:a,portal:l,torch:c})}rebuildSync(t,e){const n=this.key(t,e);this.meshPending.delete(n),this.meshPendingSince.delete(n);const s=this.meshQueue.findIndex(a=>a.cx===t&&a.cz===e);s>=0&&this.meshQueue.splice(s,1);const r=this.priorityQueue.findIndex(a=>a.cx===t&&a.cz===e);r>=0&&this.priorityQueue.splice(r,1),this.applyMesh(t,e,kS(this.world,t,e));const o=this.world.peek(t,e);o&&(o.dirty=!1)}collectNeighbors(t,e){const n=[],s=[];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){const a=this.world.peek(t+r,e+o);if(!a)return null;n.push(a.blocks.slice()),s.push(a.fluid.slice())}return{blocks:n,fluid:s}}rebuild(t,e){if(this.meshWorkers.length===0){this.rebuildSync(t,e);return}const n=this.key(t,e);if(this.meshPending.has(n)||(this.meshFails.get(n)??0)>=3)return;const s=this.collectNeighbors(t,e);if(!s)return;const r=this.nextMeshJobId++;this.meshPending.set(n,r),this.meshPendingSince.set(n,vf());const o=[...s.blocks.map(l=>l.buffer),...s.fluid.map(l=>l.buffer)];this.meshWorkers[this.meshRr].postMessage({jobId:r,cx:t,cz:e,blocks:s.blocks,fluid:s.fluid},o),this.meshRr=(this.meshRr+1)%this.meshWorkers.length;const a=this.world.peek(t,e);a&&(a.dirty=!1)}retryStuckMeshes(t=8e3){const e=vf();for(const[n,s]of this.meshPendingSince)e-s>t&&(this.meshPending.delete(n),this.meshPendingSince.delete(n),console.warn(`[meshgen] 区块 ${n} 网格化 ${Math.round((e-s)/1e3)}s 未回(worker 丢消息?) → 重试`))}update(t,e,n,s=2,r=0,o=0){this.retryStuckMeshes(),this.world.retryStuckGen();for(const l of[...this.meshes.keys()]){const[c,h]=l.split(",").map(Number);(Math.abs(c-t)>n+1||Math.abs(h-e)>n+1)&&this.unload(l)}for(let l=-n-1;l<=n+1;l++)for(let c=-n-1;c<=n+1;c++)this.world.request(t+c,e+l);const a=[];for(let l=-n;l<=n;l++)for(let c=-n;c<=n;c++){if(xf(c,l,this.fogCullR2))continue;const h=t+c,u=e+l,d=this.world.peek(h,u);d&&(!this.meshes.has(this.key(h,u))||d.dirty)&&a.push({cx:h,cz:u,d:c*c+l*l,ahead:zS(c,l,r,o)})}a.sort((l,c)=>l.ahead===c.ahead?l.d-c.d:l.ahead?-1:1);for(let l=0;l<Math.min(s,a.length);l++)this.rebuild(a[l].cx,a[l].cz);for(const[l,c]of this.meshes){const[h,u]=l.split(",").map(Number),d=!xf(h-t,u-e,this.fogCullR2);for(const p of[c.opaque,c.ice,c.cutout,c.water,c.portal,c.torch])p&&(p.visible=d)}}cullToView(t,e,n,s,r=0){if(!(Math.abs(r)>.42))for(const[o,a]of this.meshes){const[l,c]=o.split(",").map(Number);if(!FS(l*Dt+Dt/2,c*Dt+Dt/2,t,e,n,s))for(const h of[a.opaque,a.ice,a.cutout,a.water,a.portal,a.torch])h&&(h.visible=!1)}}remeshDirty(){var t;for(const e of[...this.meshes.keys()]){const[n,s]=e.split(",").map(Number);(t=this.world.peek(n,s))!=null&&t.dirty&&(this.editKeys.add(e),this.rebuild(n,s))}}}const _a=10;class JS{constructor(t){y(this,"mesh");y(this,"tex");this.tex=new Dr().load("/mineworld/textures/crack.png"),this.tex.magFilter=de,this.tex.minFilter=de,this.tex.generateMipmaps=!1,this.tex.colorSpace=ue,this.tex.wrapS=bn,this.tex.repeat.set(1/_a,1);const e=new ye({map:this.tex,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});this.mesh=new Jt(new en(1.002,1.002,1.002),e),this.mesh.layers.set(xo),this.mesh.renderOrder=2,this.mesh.visible=!1,t.add(this.mesh)}show(t,e,n,s){const r=Math.max(0,Math.min(_a-1,Math.floor(s*_a)));this.tex.offset.x=r/_a,this.mesh.position.set(t+.5,e+.5,n+.5),this.mesh.visible=!0}hide(){this.mesh.visible=!1}}const el=256,Qm=257,Jm=258,t0=259,e0=260,n0=261,i0=262,s0=263,tb=264,eb=265,nb=266,ib=267,sb=268,rb=269,ob=270,ab=271,lb=272,cb=273,r0=274,Kh=275,o0=276,jh=277,a0=278,Zh=279,l0=280,Qh=281,c0=282,h0=283,u0=284,d0=285,f0=286,p0=287,m0=288,g0=289,v0=290,nr=291,kn=292,_0=293,uo=294,hb=295,ub=296,db=297,fb=298,pb=299,mb=300,gb=301;function Ce(i,t,e,n){return{name:i,maxStack:1,food:null,tool:{kind:t,tier:e,speed:t==="sword"?1.5:t==="hoe"?1:n,maxDurability:e===1?59:e===2?131:e===3?250:1561}}}const qi={[el]:{name:"apple",maxStack:64,food:{nutrition:4,saturationModifier:.3},tool:null},[uo]:{name:"flint_and_steel",maxStack:1,food:null,tool:null},[hb]:{name:"nether_quartz",maxStack:64,food:null,tool:null},[ub]:{name:"diamond",maxStack:64,food:null,tool:null},[Qm]:{name:"stick",maxStack:64,food:null,tool:null},[Jm]:{name:"coal",maxStack:64,food:null,tool:null},[t0]:Ce("wooden_pickaxe","pickaxe",1,2),[e0]:Ce("wooden_axe","axe",1,2),[n0]:Ce("wooden_shovel","shovel",1,2),[i0]:Ce("wooden_sword","sword",1,2),[s0]:Ce("wooden_hoe","hoe",1,2),[tb]:Ce("stone_pickaxe","pickaxe",2,4),[eb]:Ce("stone_axe","axe",2,4),[nb]:Ce("stone_shovel","shovel",2,4),[ib]:Ce("stone_sword","sword",2,4),[sb]:Ce("stone_hoe","hoe",2,4),[rb]:Ce("iron_pickaxe","pickaxe",3,6),[ob]:Ce("iron_axe","axe",3,6),[ab]:Ce("iron_shovel","shovel",3,6),[lb]:Ce("iron_sword","sword",3,6),[cb]:Ce("iron_hoe","hoe",3,6),[r0]:{name:"iron_ingot",maxStack:64,food:null,tool:null},[db]:Ce("diamond_pickaxe","pickaxe",4,8),[fb]:Ce("diamond_axe","axe",4,8),[pb]:Ce("diamond_shovel","shovel",4,8),[mb]:Ce("diamond_sword","sword",4,8),[gb]:Ce("diamond_hoe","hoe",4,8),[Kh]:{name:"raw_porkchop",maxStack:64,food:{nutrition:3,saturationModifier:.3},tool:null},[o0]:{name:"cooked_porkchop",maxStack:64,food:{nutrition:8,saturationModifier:.8},tool:null},[jh]:{name:"raw_beef",maxStack:64,food:{nutrition:3,saturationModifier:.3},tool:null},[a0]:{name:"cooked_beef",maxStack:64,food:{nutrition:8,saturationModifier:.8},tool:null},[Zh]:{name:"raw_mutton",maxStack:64,food:{nutrition:2,saturationModifier:.3},tool:null},[l0]:{name:"cooked_mutton",maxStack:64,food:{nutrition:6,saturationModifier:.8},tool:null},[Qh]:{name:"raw_chicken",maxStack:64,food:{nutrition:2,saturationModifier:.3},tool:null},[c0]:{name:"cooked_chicken",maxStack:64,food:{nutrition:6,saturationModifier:.6},tool:null},[h0]:{name:"leather",maxStack:64,food:null,tool:null},[u0]:{name:"wool",maxStack:64,food:null,tool:null},[d0]:{name:"feather",maxStack:64,food:null,tool:null},[f0]:{name:"egg",maxStack:16,food:null,tool:null},[p0]:{name:"rotten_flesh",maxStack:64,food:{nutrition:4,saturationModifier:.1},tool:null},[m0]:{name:"bone",maxStack:64,food:null,tool:null},[g0]:{name:"flint",maxStack:64,food:null,tool:null},[v0]:{name:"string",maxStack:64,food:null,tool:null},[nr]:{name:"arrow",maxStack:64,food:null,tool:null},[kn]:{name:"bow",maxStack:1,food:null,tool:null},[_0]:{name:"gunpowder",maxStack:64,food:null,tool:null}},vb=Object.keys(qi).map(Number);function Ha(i){return i in qi}function Wa(i){var t;return((t=qi[i])==null?void 0:t.food)!=null}function _b(i){var t;return((t=qi[i])==null?void 0:t.food)??null}function xb(i){var t;return((t=qi[i])==null?void 0:t.name)??null}function ps(i){var t;return((t=qi[i])==null?void 0:t.maxStack)??64}function fo(i){var e,n;const t=(n=(e=qi[i])==null?void 0:e.tool)==null?void 0:n.maxDurability;return t!==void 0?t:i===kn?384:i===uo?64:null}function no(i){var t;return((t=qi[i])==null?void 0:t.tool)??null}const yb={1:"stone",2:"dirt",3:"grass",4:"cobblestone",5:"sand",6:"oak_log",7:"oak_planks",8:"coal_ore",10:"oak_leaves",11:"crafting_table",12:"iron_ore",13:"furnace",14:"torch",15:"gravel",26:"sandstone",18:"obsidian",19:"netherrack",20:"soul_sand",21:"glowstone",22:"nether_quartz_ore",24:"bedrock",27:"cactus",28:"ice",30:"spruce_log",31:"spruce_leaves",32:"coal_block",33:"iron_block",34:"quartz_block",35:"diamond_ore",36:"diamond_block",37:"granite",38:"diorite",39:"andesite",40:"bricks",41:"mossy_cobblestone",42:"red_sand",43:"birch_log",44:"birch_leaves",[el]:"apple",257:"stick",258:"coal",259:"wooden_pickaxe",260:"wooden_axe",261:"wooden_shovel",262:"wooden_sword",263:"wooden_hoe",264:"stone_pickaxe",265:"stone_axe",266:"stone_shovel",267:"stone_sword",268:"stone_hoe",269:"iron_pickaxe",270:"iron_axe",271:"iron_shovel",272:"iron_sword",273:"iron_hoe",274:"iron_ingot",275:"raw_porkchop",276:"cooked_porkchop",277:"raw_beef",278:"cooked_beef",279:"raw_mutton",280:"cooked_mutton",281:"raw_chicken",282:"cooked_chicken",283:"leather",284:"wool",285:"feather",286:"egg",287:"rotten_flesh",288:"bone",289:"flint",290:"string",291:"arrow",292:"bow",293:"gunpowder",294:"flint_and_steel",295:"nether_quartz",296:"diamond",297:"diamond_pickaxe",298:"diamond_axe",299:"diamond_shovel",300:"diamond_sword",301:"diamond_hoe"};let dh="classic";function wf(i){dh=i}const wb={1:"石头",2:"泥土",3:"草方块",4:"圆石",5:"沙子",6:"原木",7:"木板",8:"煤矿",10:"树叶",11:"工作台",12:"铁矿",13:"熔炉",14:"火把",15:"砂砾",16:"草丛",17:"高草丛",18:"黑曜石",19:"地狱岩",20:"灵魂沙",21:"荧石",22:"下界石英矿",24:"基岩",26:"沙石",27:"仙人掌",28:"冰",29:"雪层",30:"云杉原木",31:"云杉树叶",32:"煤炭块",33:"铁块",34:"石英块",35:"钻石矿石",36:"钻石块",37:"花岗岩",38:"闪长岩",39:"安山岩",40:"砖块",41:"苔石",42:"红沙",43:"白桦原木",44:"白桦树叶",256:"苹果",257:"木棍",258:"煤炭",259:"木镐",260:"木斧",261:"木锹",262:"木剑",263:"木锄",264:"石镐",265:"石斧",266:"石锹",267:"石剑",268:"石锄",269:"铁镐",270:"铁斧",271:"铁锹",272:"铁剑",273:"铁锄",274:"铁锭",275:"生猪排",276:"熟猪排",277:"生牛肉",278:"牛排",279:"生羊肉",280:"熟羊肉",281:"生鸡肉",282:"熟鸡肉",283:"皮革",284:"羊毛",285:"羽毛",286:"鸡蛋",287:"腐肉",288:"骨头",289:"燧石",290:"线",291:"箭",292:"弓",293:"火药",294:"打火石",295:"下界石英",296:"钻石",297:"钻石镐",298:"钻石斧",299:"钻石锹",300:"钻石剑",301:"钻石锄"},ms=(i,t)=>{const e=yb[i];if(!e)return null;const n=dh==="classic"?"icons_classic":dh==="realistic"?"icons_realistic":"icons",s=t?`_${t}`:"";return Pr(`textures/${n}/${e}${s}.png`)},io=i=>wb[i]??`#${i}`,hr=.25,Mb=22,Mf=hr/2;function vn(i,t,e,n,s=Math.random,r=1,o){return{id:i,count:r,dur:o,x:t+.5,y:e+.5,z:n+.5,vx:(s()-.5)*2,vy:2.5,vz:(s()-.5)*2,age:0}}function Sb(i,t,e=.75){const n=e*e;for(let s=0;s<i.length;s++){const r=i[s],o=t(r.id);if(!(r.count>=o))for(let a=i.length-1;a>s;a--){const l=i[a];if(l.id!==r.id||r.dur!==void 0||l.dur!==void 0)continue;const c=r.x-l.x,h=r.y-l.y,u=r.z-l.z;if(c*c+h*h+u*u>n)continue;const d=Math.min(o-r.count,l.count);if(!(d<=0)&&(r.count+=d,l.count-=d,l.age<r.age&&(r.age=l.age),l.count<=0&&i.splice(a,1),r.count>=o))break}}}function bb(i,t,e){i.age+=e,i.vy-=Mb*e;const n=i.x+i.vx*e,s=i.z+i.vz*e;let r=i.y+i.vy*e;const o=r-Mf;return i.vy<=0&&t.isSolid(Math.floor(n),Math.floor(o),Math.floor(s))&&(r=Math.floor(o)+1+Mf,i.vy=0,i.vx*=.6,i.vz*=.6),i.x=n,i.y=r,i.z=s,i}function Tb(i,t,e,n){if(i.age<.3)return!1;const s=i.x-t,r=i.y-e,o=i.z-n;return s*s+r*r+o*o<1.4*1.4}const[Sf,bf]=Xh(wo);function Eb(i){const t=new en(hr,hr,hr),e=Ue[i].faces,n=t.attributes.uv;for(let s=0;s<6;s++){const r=e[s],o=r%_e,a=Math.floor(r/_e),l=o/_e+Sf,c=(o+1)/_e-Sf,h=1-(a+1)/un+bf,u=1-a/un-bf,d=s*4;n.setXY(d+0,l,u),n.setXY(d+1,c,u),n.setXY(d+2,l,h),n.setXY(d+3,c,h)}return n.needsUpdate=!0,t}class Ab{constructor(t,e){y(this,"meshes",new Map);y(this,"geoCache",new Map);y(this,"mat");y(this,"itemMats",new Map);this.scene=t,this.mat=new ye({map:e})}setAtlas(t){this.mat.map=t,this.mat.needsUpdate=!0;for(const[e,n]of this.meshes)Ha(e.id)||(n.material.map=t,n.material.needsUpdate=!0)}itemMat(t){let e=this.itemMats.get(t);if(!e){const n=new Dr().load(ms(t)??Pr("textures/icons/apple.png"));n.magFilter=de,n.minFilter=de,n.colorSpace=ue,e=new ye({map:n,transparent:!0,alphaTest:.5,side:Qe}),this.itemMats.set(t,e)}return e}geo(t){let e=this.geoCache.get(t);return e||(e=Ha(t)?new hn(hr,hr):Eb(t),this.geoCache.set(t,e)),e}sync(t,e){const n=new Set(t);for(const[s,r]of this.meshes)n.has(s)||(this.scene.remove(r),r.material.dispose(),this.meshes.delete(s));for(const s of t){let r=this.meshes.get(s);if(r||(r=new Jt(this.geo(s.id),(Ha(s.id)?this.itemMat(s.id):this.mat).clone()),this.scene.add(r),this.meshes.set(s,r)),e){const a=e(s.x,s.y+.5,s.z);r.material.color.setScalar(a)}const o=.1+Math.sin(s.age*3)*.06;r.position.set(s.x,s.y+o,s.z),r.rotation.y=s.age*1.8}}clear(){for(const[,t]of this.meshes)this.scene.remove(t),t.material.dispose();this.meshes.clear()}}function Rb(i){var e;const t=((e=Ue[i])==null?void 0:e.name)??"";return["obsidian"].includes(t)?{roughness:.38,specularIntensity:.62}:["iron_block","diamond_block","quartz_block"].includes(t)?{roughness:.54,specularIntensity:.5}:t.includes("log")||["oak_planks","crafting_table"].includes(t)?{roughness:.8,specularIntensity:.34}:{roughness:.91,specularIntensity:.26}}function Cb(i){if(i===null||!Number.isFinite(i)||i<0)return-1;const t=Gn.clamp(i,0,1);return t<.34?0:t<.68?1:2}function Db(i){const t=no(i);if(t){const e=t.kind==="sword"||t.kind==="pickaxe";return{size:e?.48:.44,position:[-.005,e?.245:.23,.025],rotation:[-.04,-.08,-.14]}}return i===kn?{size:.46,position:[0,.24,.025],rotation:[-.03,-.06,-.08]}:i===Pi||i===uo?{size:.4,position:[.01,.225,.025],rotation:[-.04,-.08,-.12]}:Wa(i)?{size:.35,position:[.025,.205,.03],rotation:[0,-.05,-.04]}:{size:.31,position:[.025,.19,.03],rotation:[0,-.04,-.03]}}function Pb(i){return i===null||i<=0?"none":i===Pi?ms(i)?"sprite":"none":Ue[i]?"block":ms(i)?"sprite":"none"}const Ec=.8;function Lb(i){const t=Math.PI/180,e=Math.sin(Math.sqrt(Math.max(0,i))*Math.PI),n=Math.sin(i*i*Math.PI);return{tx:-.4*e*Ec,ty:.2*Math.sin(Math.sqrt(Math.max(0,i))*Math.PI*2)*Ec,tz:-.2*Math.sin(i*Math.PI)*Ec,ry1:(45+n*-20)*t,rz:e*-20*t,rx:e*-80*t,ry2:-45*t}}const[Tf,Ef]=Xh(wo),ur=[.6,.6,1,.5,.8,.8],kb=.3,Ib=new I(1,0,0),Ub=new I(0,1,0);function Nb(i,t,e,n){const s=new en(i,t,e),r=new Et(n),o=[];for(let a=0;a<6;a++)for(let l=0;l<4;l++)o.push(r.r*ur[a],r.g*ur[a],r.b*ur[a]);return s.setAttribute("color",new Fe(o,3)),s}function Fb(i,t){const e=new en(t,t,t),n=Ue[i].faces,s=e.attributes.uv,r=[];for(let o=0;o<6;o++){const a=n[o],l=a%_e,c=Math.floor(a/_e),h=l/_e+Tf,u=(l+1)/_e-Tf,d=1-(c+1)/un+Ef,p=1-c/un-Ef,g=o*4;s.setXY(g+0,h,p),s.setXY(g+1,u,p),s.setXY(g+2,h,d),s.setXY(g+3,u,d);for(let v=0;v<4;v++)r.push(ur[o],ur[o],ur[o])}return s.needsUpdate=!0,e.setAttribute("color",new Fe(r,3)),e}class Ob{constructor(t){y(this,"scene",new wr);y(this,"camera",new Ze(70,1,.01,10));y(this,"atlas");y(this,"root",new dn);y(this,"arm");y(this,"item",null);y(this,"itemId",null);y(this,"spriteTex",new Map);y(this,"swingT",0);y(this,"wantSwing",!1);y(this,"bobPhase",0);y(this,"eating",!1);y(this,"eatT",0);y(this,"bowPull",null);y(this,"bowStage",-1);y(this,"bowT",0);y(this,"hurtT",0);y(this,"bright",1);y(this,"underwater",!1);y(this,"lightingQuality","off");y(this,"skyLight",new tM(14478591,1581105,0));y(this,"skyFill",new nf(14478591,0));y(this,"blockLight",new nf(16747834,0));y(this,"sunLight",new Sm(16777215,0));y(this,"invViewQ",new Vi);y(this,"viewSun",new I);y(this,"viewUp",new I);y(this,"coolSky",new Et().setRGB(.68,.82,1));y(this,"lowSun",new Et().setRGB(1.38,.58,.16));y(this,"noonSun",new Et().setRGB(1.08,1,.88));y(this,"underwaterTint",new Et().setRGB(.62,.84,.96));y(this,"neutralTint",new Et(1,1,1));this.atlas=t,this.arm=new Jt(Nb(.14,.5,.14,15249530),new ye({vertexColors:!0})),this.arm.position.set(0,-.22,0),this.root.add(this.arm),this.root.position.set(.5,-.45,-.7),this.root.rotation.set(.2,-.5,.45),this.scene.add(this.root),this.sunLight.castShadow=!1,this.scene.add(this.skyLight,this.skyFill,this.blockLight,this.sunLight,this.sunLight.target)}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}itemTexture(t,e){const n=`${t}:${e??""}`,s=this.spriteTex.get(n);if(s)return s;const r=ms(t,e);if(!r)return null;const o=new Dr().load(r);return o.magFilter=de,o.minFilter=de,o.generateMipmaps=!1,o.colorSpace=ue,this.spriteTex.set(n,o),o}setBrightness(t){this.bright+=(t-this.bright)*.12,this.applyViewTint()}setUnderwater(t){t!==this.underwater&&(this.underwater=t,this.applyViewTint())}setLightingQuality(t){if(t===this.lightingQuality)return;this.lightingQuality=t,t==="off"&&(this.skyLight.intensity=0,this.skyFill.intensity=0,this.blockLight.intensity=0,this.sunLight.intensity=0);const e=this.itemId;this.itemId=null,this.setHeld(e)}setLighting(t){if(this.lightingQuality==="off")return;const e=c=>{const h=Gn.clamp(c,0,15)/15;return h/(4-3*h)},n=t.sunEnabled?e(t.skyLevel-t.skyDarken):0,s=e(t.blockLevel),r=(c,h)=>c+(h-c)*.14;this.skyLight.color.copy(t.skyColor).lerp(this.coolSky,.25),this.underwater&&this.skyLight.color.multiply(this.underwaterTint),this.skyLight.groundColor.setRGB(.25,.3,.4),this.skyLight.intensity=r(this.skyLight.intensity,Math.max(.035,n*1.05)),this.skyFill.color.copy(this.skyLight.color),this.skyFill.intensity=r(this.skyFill.intensity,Math.max(.012,n*.32)),this.blockLight.color.setRGB(1,.56,.25),this.blockLight.intensity=r(this.blockLight.intensity,s*.62),this.invViewQ.copy(t.cameraQuaternion).invert(),this.viewSun.copy(t.sunDirectionWorld).applyQuaternion(this.invViewQ).normalize(),this.viewUp.set(0,1,0).applyQuaternion(this.invViewQ).normalize(),this.sunLight.position.copy(this.viewSun).multiplyScalar(5),this.sunLight.target.position.set(0,0,0),this.skyLight.position.copy(this.viewUp);const o=Gn.clamp(t.sunDirectionWorld.y*3,0,1);this.sunLight.color.copy(this.lowSun).lerp(this.noonSun,o),this.underwater&&this.sunLight.color.multiply(this.underwaterTint);const a=t.sunEnabled?Gn.smoothstep(t.skyLevel,11,15):0,l=Gn.smoothstep(t.sunDirectionWorld.y,.02,.2);this.sunLight.intensity=r(this.sunLight.intensity,a*l*1.55*(this.underwater?.62:1))}setHeld(t){if(t===this.itemId)return;if(this.itemId=t,this.item){if(this.root.remove(this.item),this.item.geometry.dispose(),Array.isArray(this.item.material))for(const n of this.item.material)n.dispose();else this.item.material.dispose();this.item=null}const e=Pb(t);if(e==="block"&&t!==null){const n=Rb(t),s=this.lightingQuality==="off"?new ye({map:this.atlas,vertexColors:!0}):new Qd({map:this.atlas,roughness:n.roughness,metalness:0,ior:1.35,specularIntensity:n.specularIntensity});this.item=new Jt(Fb(t,.3),s),this.item.position.set(-.015,.17,.035),this.item.rotation.set(-.16,.72,-.06),this.root.add(this.item)}else if(e==="sprite"&&t!==null){const n=t===kn&&this.bowStage>=0?`pulling_${this.bowStage}`:void 0,s=this.itemTexture(t,n);if(s){const r=Db(t);this.item=new Jt(new hn(r.size,r.size),new ye({map:s,transparent:!0,alphaTest:.5,side:Qe})),this.item.position.set(...r.position),this.item.rotation.set(...r.rotation),this.root.add(this.item)}}this.applyViewTint()}applyViewTint(){const t=this.underwater?this.underwaterTint:this.neutralTint;this.arm.material.color.copy(t).multiplyScalar(this.bright),!(!this.item||Array.isArray(this.item.material))&&(this.item.material instanceof Qd?this.item.material.color.copy(t):this.item.material instanceof ye&&this.item.material.color.copy(t).multiplyScalar(this.bright))}swing(){this.wantSwing=!0}hurtShake(){this.hurtT=1}setAtlas(t){this.atlas=t;for(const n of this.spriteTex.values())n.dispose();this.spriteTex.clear();const e=this.itemId;this.itemId=null,this.setHeld(e)}setEating(t){this.eating=t,t||(this.eatT=0)}setBowCharge(t){const e=t===null||!Number.isFinite(t)?null:Gn.clamp(t,0,1),n=Cb(e);if(this.bowPull=e,e===null&&(this.bowT=0),n===this.bowStage||(this.bowStage=n,this.itemId!==kn||!this.item||Array.isArray(this.item.material))||!(this.item.material instanceof ye))return;const s=n>=0?`pulling_${n}`:void 0,r=this.itemTexture(kn,s);r&&(this.item.material.map=r,this.item.material.needsUpdate=!0)}update(t,e){this.wantSwing&&this.swingT===0&&(this.swingT=1e-4),this.swingT>0&&(this.swingT+=t/kb,this.swingT>=1&&(this.swingT=this.wantSwing?1e-4:0)),this.wantSwing=!1,this.bobPhase+=t*e*7;const n=Math.cos(this.bobPhase)*.012*Math.min(1,e),s=Math.abs(Math.sin(this.bobPhase))*.012*Math.min(1,e),r=Lb(this.swingT);if(this.root.position.set(.42+n+r.tx,-.28+s+r.ty,-.72+r.tz),this.root.rotation.set(.1,-.5,.4),this.root.rotateOnWorldAxis(Ib,r.rx),this.root.rotateOnWorldAxis(Ub,r.rz),this.eating){this.eatT+=t;const o=Math.sin(this.eatT*30);this.root.position.x+=-.18+o*.015,this.root.position.y+=.16+o*.02,this.root.position.z+=.18,this.root.rotateX(.4+o*.12),this.root.rotateZ(-.25)}if(this.itemId===kn&&this.bowPull!==null){this.bowT+=t;const o=1-(1-this.bowPull)**3,a=this.bowPull>.96?Math.sin(this.bowT*44)*.004:0;this.root.position.x-=.1*o+a,this.root.position.y+=.07*o+a,this.root.position.z+=.05*o,this.root.rotateY(-.3*o),this.root.rotateZ(-.18*o+a*4)}if(this.hurtT>0){this.hurtT=Math.max(0,this.hurtT-t*4);const o=this.hurtT*this.hurtT,a=Math.sin(this.hurtT*45);this.root.position.x+=a*.05*o,this.root.position.y+=-.06*o,this.root.rotateZ(a*.35*o)}}}const Af=.6,nl=.6,gs=1.8,Yn=1.62,Bb=1.8,zb=1.54,Hb=.3,Wb=.2,il=.08,sl=.98,po=.42,Rf=4.317/20,Gb=5.612/20,Vb=.42,Xb=.84,Cf=.42,xa=nl/2;function rl(i,t,e=gs){const s=Math.floor(i.x-xa+1e-6),r=Math.ceil(i.x+xa-1e-6)-1,o=Math.floor(i.y+1e-6),a=Math.ceil(i.y+e-1e-6)-1,l=Math.floor(i.z-xa+1e-6),c=Math.ceil(i.z+xa-1e-6)-1;for(let h=o;h<=a;h++)for(let u=s;u<=r;u++)for(let d=l;d<=c;d++)if(t.isSolid(u,h,d))return!0;return!1}function qs(i,t,e,n,s=gs){if(e===0)return!1;const r=Math.sign(e),o=.2;let a=Math.abs(e);for(;a>1e-9;){const l=Math.min(a,o)*r;if(a-=Math.abs(l),i[t]+=l,rl(i,n,s)){i[t]-=l;let c=l/2;for(let h=0;h<24&&Math.abs(c)>1e-5;h++)i[t]+=c,rl(i,n,s)&&(i[t]-=c),c/=2;return!0}}return!1}function Df(i){const t=Math.cos(i.yaw),e=Math.sin(i.yaw);let n=i.forward*t-i.right*e,s=i.forward*e+i.right*t;const r=Math.hypot(n,s);return r>1e-9?(n/=r,s/=r):(n=0,s=0),{x:n,z:s}}function Vr(i,t,e=gs){return rl(i,t,e)?!1:rl({x:i.x,y:i.y-.06,z:i.z},t,e)}function Pf(i,t,e){var A,E,D;const n={...i.pos},s={...i.vel};if(t.fly){const k=Df(t),b=t.sprint?Xb:Vb;return s.x=k.x*b,s.z=k.z*b,s.y=(t.flyUp?Cf:0)-(t.flyDown?Cf:0),qs(n,"y",s.y,e)&&(s.y=0),qs(n,"x",s.x,e)&&(s.x=0),qs(n,"z",s.z,e)&&(s.z=0),{pos:n,vel:s,onGround:Vr(n,e),kbx:0,kbz:0}}const r=t.crouch===!0,o=r?Bb:gs,a=Vr(n,e,o),l=((A=e.isWater)==null?void 0:A.call(e,Math.floor(n.x),Math.floor(n.y+.1),Math.floor(n.z)))??!1;let c=!1;t.jump&&(a||l)&&(s.y=l?.5:po,c=!0);const h=Df(t);let u=l?Rf*.7:t.sprint&&!r?Gb:Rf;r&&(u*=Hb),t.slow&&(u*=Wb);const d=i.kbx??0,p=i.kbz??0,g=Math.hypot(h.x,h.z)>1e-9;if(!a&&!l)s.x=s.x*.91+h.x*u*.09+d,s.z=s.z*.91+h.z*u*.09+p;else if(g||l){let k=u;if(g&&a&&!l){const b=Math.floor(n.x),S=Math.floor(n.y-.1),P=Math.floor(n.z);(((E=e.getBlock)==null?void 0:E.call(e,b,S,P))??0)===km&&(k*=.4)}s.x=h.x*k+d,s.z=h.z*k+p}else{const k=Math.floor(n.x),b=Math.floor(n.y-.1),S=Math.floor(n.z),P=((D=e.getBlock)==null?void 0:D.call(e,k,b,S))??0,V=UM(P);s.x=s.x*V+d,s.z=s.z*V+p}qs(n,"y",s.y,e,o)&&(s.y=0);const v=r&&a&&s.y<=0,m=n.x;qs(n,"x",s.x,e,o)&&(s.x=0),v&&!Vr(n,e,o)&&(n.x=m,s.x=0);const f=n.z;qs(n,"z",s.z,e,o)&&(s.z=0),v&&!Vr(n,e,o)&&(n.z=f,s.z=0);const x=Vr(n,e,o);c?s.y=(s.y-il)*sl:l?t.swimUp?s.y=.16:s.y=Math.max(s.y*.8-.02,-.15):x?s.y=0:s.y=(s.y-il)*sl;const _=s.x===0?0:d*Af,w=s.z===0?0:p*Af;return{pos:n,vel:s,onGround:x,kbx:Math.abs(_)<.005?0:_,kbz:Math.abs(w)<.005?0:w}}const x0=.05,Ac=.99,qb=.25;function Lf(i,t,e,n,s,r,o,a,l){const c=Math.hypot(n,s,r)||1;return{x:i,y:t,z:e,vx:n/c*o,vy:s/c*o,vz:r/c*o,age:0,stuck:!1,fromPlayer:a,damage:l}}function $b(i,t){if(i.age++,i.stuck)return i;i.vy-=x0,i.vx*=Ac,i.vy*=Ac,i.vz*=Ac;const e=Math.hypot(i.vx,i.vy,i.vz),n=Math.max(1,Math.ceil(e/qb)),s=i.vx/n,r=i.vy/n,o=i.vz/n;for(let a=0;a<n;a++){const l=i.x+s,c=i.y+r,h=i.z+o;if(t.isSolid(Math.floor(l),Math.floor(c),Math.floor(h)))return i.stuck=!0,i.vx=i.vy=i.vz=0,i;i.x=l,i.y=c,i.z=h}return i}const Yb=new I(0,0,1);class Kb{constructor(t){y(this,"meshes",new Map);y(this,"geoShaft",new en(.05,.05,.5));y(this,"geoHead",new en(.09,.09,.14));y(this,"geoFletch",new en(.16,.02,.12));y(this,"matShaft",new ye({color:7031339}));y(this,"matHead",new ye({color:10132130}));y(this,"matFletch",new ye({color:15263980}));y(this,"tmp",new I);this.scene=t}make(){const t=new dn;t.add(new Jt(this.geoShaft,this.matShaft));const e=new Jt(this.geoHead,this.matHead);e.position.z=.3,t.add(e);const n=new Jt(this.geoFletch,this.matFletch);n.position.z=-.22,t.add(n);const s=new Jt(this.geoFletch,this.matFletch);return s.position.z=-.22,s.rotation.z=Math.PI/2,t.add(s),t}sync(t){const e=new Set(t);for(const[n,s]of this.meshes)e.has(n)||(this.scene.remove(s),this.meshes.delete(n));for(const n of t){let s=this.meshes.get(n);s||(s=this.make(),this.scene.add(s),this.meshes.set(n,s)),s.position.set(n.x,n.y,n.z);const r=Math.hypot(n.vx,n.vy,n.vz);r>1e-4&&(this.tmp.set(n.vx/r,n.vy/r,n.vz/r),s.quaternion.setFromUnitVectors(Yb,this.tmp))}}clear(){for(const[,t]of this.meshes)this.scene.remove(t);this.meshes.clear()}}function ol(i,t,e,n){const r=Math.floor(i.x-t+1e-6),o=Math.ceil(i.x+t-1e-6)-1,a=Math.floor(i.y+1e-6),l=Math.ceil(i.y+e-1e-6)-1,c=Math.floor(i.z-t+1e-6),h=Math.ceil(i.z+t-1e-6)-1;for(let u=a;u<=l;u++)for(let d=r;d<=o;d++)for(let p=c;p<=h;p++)if(n.isSolid(d,u,p))return!0;return!1}function Rc(i,t,e,n,s,r){if(e===0)return!1;const o=Math.sign(e),a=.2;let l=Math.abs(e);for(;l>1e-9;){const c=Math.min(l,a)*o;if(l-=Math.abs(c),i[t]+=c,ol(i,n,s,r)){i[t]-=c;let h=c/2;for(let u=0;u<24&&Math.abs(h)>1e-5;u++)i[t]+=h,ol(i,n,s,r)&&(i[t]-=h),h/=2;return!0}}return!1}function jb(i,t,e,n){return ol(i,t,e,n)?!1:ol({x:i.x,y:i.y-.06,z:i.z},t,e,n)}function y0(i,t,e,n,s){const r=t/2,o={...i},a={...n};return Rc(o,"y",a.y,r,e,s)&&(a.y=0),Rc(o,"x",a.x,r,e,s)&&(a.x=0),Rc(o,"z",a.z,r,e,s)&&(a.z=0),{pos:o,vel:a,onGround:jb(o,r,e,s)}}const ii={pig:{hp:10,width:.9,height:.9,moveSpeed:.09,fallImmune:!1},cow:{hp:10,width:.9,height:1.4,moveSpeed:.08,fallImmune:!1},sheep:{hp:8,width:.9,height:1.3,moveSpeed:.08,fallImmune:!1},chicken:{hp:4,width:.4,height:.7,moveSpeed:.07,fallImmune:!0},rabbit:{hp:3,width:.4,height:.5,moveSpeed:.13,fallImmune:!1},zombie:{hp:20,width:.6,height:1.9,moveSpeed:.13,fallImmune:!1,hostile:!0,attack:3,sense:35},skeleton:{hp:20,width:.6,height:1.95,moveSpeed:.15,fallImmune:!1,hostile:!0,attack:2,sense:16,ranged:!0},creeper:{hp:20,width:.6,height:1.7,moveSpeed:.15,fallImmune:!1,hostile:!0,attack:43,sense:16,explosive:!0,sunImmune:!0},husk:{hp:20,width:.6,height:1.95,moveSpeed:.13,fallImmune:!1,hostile:!0,attack:3,sense:35,sunImmune:!0},spider:{hp:16,width:1.4,height:.9,moveSpeed:.16,fallImmune:!1,hostile:!0,attack:2,sense:16,sunImmune:!0}},Zb=i=>ii[i].hostile===!0,Qb=1.8,Jb=10,kf=.4,t2=.36,If=-.05,e2=.06,Uf=.85,n2=.12;function bl(i,t,e,n){return{kind:i,pos:{x:t,y:e,z:n},vel:{x:0,y:0,z:0},yaw:0,onGround:!1,health:ii[i].hp,hurtCooldown:0,ai:{state:"idle",timer:20,target:null},eggTimer:i==="chicken"?6e3:0,atkCd:0,fuse:0}}function w0(i){return{...i,pos:{...i.pos},vel:{...i.vel},ai:{...i.ai,target:i.ai.target?{...i.ai.target}:null}}}function i2(i,t){return{x:i.x+(t()*2-1)*8,y:i.y,z:i.z+(t()*2-1)*8}}const Cc=i=>20+Math.floor(i()*40);function s2(i,t,e){var v,m;const n=ii[i.kind],s=w0(i),r=[];s.hurtCooldown>0&&s.hurtCooldown--,s.ai.timer--;let o=0,a=0,l=n.moveSpeed;if(s.ai.state==="idle")s.ai.timer<=0&&(s.ai.state="wander",s.ai.target=i2(s.pos,e),s.ai.timer=40+Math.floor(e()*60));else if(s.ai.state==="wander")if(!s.ai.target||s.ai.timer<=0)s.ai.state="idle",s.ai.target=null,s.ai.timer=Cc(e);else{const f=s.ai.target.x-s.pos.x,x=s.ai.target.z-s.pos.z,_=Math.hypot(f,x);_<.7?(s.ai.state="idle",s.ai.target=null,s.ai.timer=Cc(e)):(o=f/_,a=x/_)}else l=n.moveSpeed*Qb,s.ai.timer<=0?(s.ai.state="idle",s.ai.target=null,s.ai.timer=Cc(e)):(o=Math.cos(s.yaw),a=Math.sin(s.yaw));if((o!==0||a!==0)&&s.onGround){const f=.5+n.width/2,x=Math.floor(s.pos.x+o*f),_=Math.floor(s.pos.z+a*f),w=Math.floor(s.pos.y);!t.isSolid(x,w-1,_)&&!t.isSolid(x,w-2,_)&&(o=0,a=0,s.ai.target=null)}let c=!1;if(o!==0||a!==0){const f=Math.hypot(o,a)||1,x=Math.floor(s.pos.x+o/f*(n.width/2+.3)),_=Math.floor(s.pos.z+a/f*(n.width/2+.3)),w=Math.floor(s.pos.y);t.isSolid(x,w,_)&&!t.isSolid(x,w+1,_)&&(c=!0)}const h=c&&s.onGround,u=(s.kbx??0)*.8,d=(s.kbz??0)*.8;if(s.kbx=Math.abs(u)<.01?0:u,s.kbz=Math.abs(d)<.01?0:d,s.vel.x=o*l+(s.kbx??0),s.vel.z=a*l+(s.kbz??0),((v=t.isWater)==null?void 0:v.call(t,Math.floor(s.pos.x),Math.floor(s.pos.y),Math.floor(s.pos.z)))??!1){const f=((m=t.isWater)==null?void 0:m.call(t,Math.floor(s.pos.x),Math.floor(s.pos.y)+1,Math.floor(s.pos.z)))??!1;c?s.vel.y=po:s.vel.y=f?Math.min((s.vel.y+e2)*Uf,n2):Math.min(s.vel.y*Uf,0)}else s.vel.y=(s.vel.y-il)*sl,h&&(s.vel.y=po),n.fallImmune&&s.vel.y<If&&(s.vel.y=If);const g=y0(s.pos,n.width,n.height,s.vel,t);return s.pos=g.pos,s.vel=g.vel,s.onGround=g.onGround,s.onGround&&s.vel.y<0&&(s.vel.y=0),(Math.abs(s.vel.x)>1e-4||Math.abs(s.vel.z)>1e-4)&&(s.yaw=Math.atan2(s.vel.z,s.vel.x)),s.kind==="chicken"&&(s.eggTimer--,s.eggTimer<=0&&(r.push({kind:"layEgg",pos:{...s.pos}}),s.eggTimer=6e3+Math.floor(e()*6001))),{mob:s,events:r}}function Dc(i,t,e,n){const s=w0(i),r=[];if(s.hurtCooldown>0)return{mob:s,events:r};s.health-=t,s.hurtCooldown=Jb,r.push({kind:"hurt"});const o=Math.hypot(e.x,e.z)||1;return s.kbx=e.x/o*kf,s.kbz=e.z/o*kf,s.vel.x=s.kbx,s.vel.z=s.kbz,s.vel.y=t2,s.onGround=!1,s.yaw=Math.atan2(s.vel.z,s.vel.x),ii[s.kind].hostile?(s.ai.state="chase",s.ai.timer=0,s.aggro=300):(s.ai.state="panic",s.ai.target=null,s.ai.timer=30+Math.floor(n()*10)),s.health<=0&&(r.push({kind:"drops",items:M0(s.kind,n),pos:{...s.pos}}),r.push({kind:"death",pos:{...s.pos}})),{mob:s,events:r}}function M0(i,t){switch(i){case"pig":return[{id:Kh,count:1+Math.floor(t()*3)}];case"cow":{const e=[{id:jh,count:1+Math.floor(t()*3)}],n=Math.floor(t()*3);return n>0&&e.push({id:h0,count:n}),e}case"sheep":return[{id:u0,count:1},{id:Zh,count:1+Math.floor(t()*2)}];case"chicken":{const e=[{id:Qh,count:1}],n=Math.floor(t()*3);return n>0&&e.push({id:d0,count:n}),e}case"rabbit":return[];case"zombie":case"husk":{const e=Math.floor(t()*3);return e>0?[{id:p0,count:e}]:[]}case"skeleton":{const e=[],n=Math.floor(t()*3);n>0&&e.push({id:m0,count:n});const s=Math.floor(t()*3);return s>0&&e.push({id:nr,count:s}),e}case"creeper":{const e=Math.floor(t()*3);return e>0?[{id:_0,count:e}]:[]}case"spider":{const e=Math.floor(t()*3);return e>0?[{id:v0,count:e}]:[]}}}const S0=1.9,r2=1,o2=1.7,a2=18,l2=.05,c2=.6,h2=15,u2=5,d2=10,f2=35,p2=3,m2=30,g2=3,v2=.06,Nf=.85,_2=.12;function Pc(i,t,e){const n=e.x-t.x,s=e.y-t.y,r=e.z-t.z,o=Math.ceil(Math.hypot(n,s,r)/.5);for(let a=1;a<o;a++){const l=a/o;if(i.isSolid(Math.floor(t.x+n*l),Math.floor(t.y+s*l),Math.floor(t.z+r*l)))return!1}return!0}function x2(i){return{...i,pos:{...i.pos},vel:{...i.vel},ai:{...i.ai,target:i.ai.target?{...i.ai.target}:null}}}function y2(i,t,e,n,s){var D,k;const r=ii[i.kind],o=x2(i),a=[];o.hurtCooldown>0&&(o.hurtCooldown-=r2),o.atkCd>0&&o.atkCd--;let l=0,c=0,h=r.moveSpeed;const u=Math.max(0,(o.aggro??0)-1);o.aggro=u;const d=u>0?64:r.sense??16;let p=1/0,g=null;if(n){const b=n.x-o.pos.x,S=n.z-o.pos.z;if(p=Math.hypot(b,n.y-o.pos.y,S),p<=d&&p>.001){o.ai.state="chase",o.ai.target={...n};const P=b/p,V=S/p;r.ranged?(g=n,p<u2?(l=-P,c=-V):p>d2&&(l=P,c=V)):(l=P,c=V)}}if(l===0&&c===0)if(h=r.moveSpeed*c2,o.ai.timer--,o.ai.state==="chase")o.ai.state="idle",o.ai.target=null,o.ai.timer=20+Math.floor(e()*40);else if(o.ai.state==="wander"&&o.ai.target){const b=o.ai.target.x-o.pos.x,S=o.ai.target.z-o.pos.z,P=Math.hypot(b,S);P<.7||o.ai.timer<=0?(o.ai.state="idle",o.ai.target=null,o.ai.timer=20+Math.floor(e()*40)):(l=b/P,c=S/P)}else o.ai.timer<=0&&(o.ai.state="wander",o.ai.target={x:o.pos.x+(e()*2-1)*8,y:o.pos.y,z:o.pos.z+(e()*2-1)*8},o.ai.timer=40+Math.floor(e()*60));const v={x:o.pos.x,y:o.pos.y+r.height*.85,z:o.pos.z},m=n?{x:n.x,y:n.y+1,z:n.z}:null;if(r.ranged){if(m&&p<=h2&&o.atkCd<=0&&Pc(t,v,m)){const b=p/S0,S=.5*x0*b*b*1.15,P=m.x-v.x,V=m.y+S-v.y,X=m.z-v.z,tt=Math.hypot(P,V,X)||1;a.push({kind:"shootArrow",from:v,dir:{x:P/tt,y:V/tt,z:X/tt},damage:1+Math.floor(e()*4)}),o.atkCd=f2}}else if(r.explosive){const b=o.fuse>0?7:p2;if(m&&p<=b&&Pc(t,v,m)){if(o.fuse++,l=0,c=0,o.fuse>=m2)return a.push({kind:"explode",pos:{...o.pos},radius:g2,damage:r.attack??43}),a.push({kind:"death",pos:{...o.pos}}),{mob:o,events:a}}else o.fuse=Math.max(0,o.fuse-1)}else m&&p<=o2&&o.atkCd<=0&&Pc(t,v,m)&&(a.push({kind:"attackPlayer",damage:r.attack??2}),o.atkCd=a2);if((l!==0||c!==0)&&o.onGround){const b=.5+r.width/2,S=Math.floor(o.pos.x+l*b),P=Math.floor(o.pos.z+c*b),V=Math.floor(o.pos.y);!t.isSolid(S,V-1,P)&&!t.isSolid(S,V-2,P)&&(l=0,c=0,o.ai.target=null)}let f=!1;if(l!==0||c!==0){const b=Math.hypot(l,c)||1,S=Math.floor(o.pos.x+l/b*(r.width/2+.3)),P=Math.floor(o.pos.z+c/b*(r.width/2+.3)),V=Math.floor(o.pos.y);t.isSolid(S,V,P)&&!t.isSolid(S,V+1,P)&&(f=!0)}const x=f&&o.onGround,_=(o.kbx??0)*.8,w=(o.kbz??0)*.8;if(o.kbx=Math.abs(_)<.01?0:_,o.kbz=Math.abs(w)<.01?0:w,o.vel.x=l*h+(o.kbx??0),o.vel.z=c*h+(o.kbz??0),((D=t.isWater)==null?void 0:D.call(t,Math.floor(o.pos.x),Math.floor(o.pos.y),Math.floor(o.pos.z)))??!1){const b=((k=t.isWater)==null?void 0:k.call(t,Math.floor(o.pos.x),Math.floor(o.pos.y)+1,Math.floor(o.pos.z)))??!1;f?o.vel.y=po:o.vel.y=b?Math.min((o.vel.y+v2)*Nf,_2):Math.min(o.vel.y*Nf,0)}else o.vel.y=(o.vel.y-il)*sl,x&&(o.vel.y=po);const E=y0(o.pos,r.width,r.height,o.vel,t);return o.pos=E.pos,o.vel=E.vel,o.onGround=E.onGround,o.onGround&&o.vel.y<0&&(o.vel.y=0),(Math.abs(o.vel.x)>1e-4||Math.abs(o.vel.z)>1e-4)&&(o.yaw=Math.atan2(o.vel.z,o.vel.x)),g&&(o.yaw=Math.atan2(g.z-o.pos.z,g.x-o.pos.x)),s&&!r.sunImmune&&(o.health-=l2),o.health<=0&&(a.push({kind:"drops",items:M0(o.kind,e),pos:{...o.pos}}),a.push({kind:"death",pos:{...o.pos}})),{mob:o,events:a}}const w2=14;function M2(i,t){return t<.36?i==="desert"||i==="badlands"?"husk":"zombie":t<.64?"skeleton":t<.86?"spider":"creeper"}function al(i){return!ke(i)&&!ti(i)&&!tl(i)}function S2(i,t,e,n){return!(i.getBlock(t,e-1,n)!==Dm||!al(i.getBlock(t,e,n))||!al(i.getBlock(t,e+1,n)))}function Ff(i,t,e,n,s,r,o=24,a=44,l=null,c=Math.PI){for(let h=0;h<12;h++){const u=l===null?n()*Math.PI*2:l+(n()*2-1)*c,d=o+n()*(a-o),p=Math.floor(t+Math.cos(u)*d),g=Math.floor(e+Math.sin(u)*d),v=r(p,g);if(s.getBlock(p,v,g)===Dm)return E2(i,p+.5,v+1,g+.5,n,s)}return[]}function fh(i,t,e,n){return!(!ke(i.getBlock(t,e-1,n))||!al(i.getBlock(t,e,n))||!al(i.getBlock(t,e+1,n)))}function b0(i,t,e,n){const s=w2-1;for(let r=-s;r<=s;r++){const o=s-Math.abs(r);for(let a=-o;a<=o;a++){const l=o-Math.abs(a);for(let c=-l;c<=l;c++)if(i.getBlock(t+c,e+r,n+a)===Pi)return!1}}return!0}function b2(i,t,e,n,s,r,o=16,a=32,l){for(let c=0;c<14;c++){const h=n()*Math.PI*2,u=o+n()*(a-o),d=Math.floor(t+Math.cos(h)*u),p=Math.floor(e+Math.sin(h)*u),g=r(d,p);if(l?l(d,g+1,p)>7:!b0(s,d,g+1,p))continue;const v=[],m=1+Math.floor(n()*3);for(let f=0;f<m;f++){const x=d+Math.floor((n()*2-1)*2),_=p+Math.floor((n()*2-1)*2),w=r(x,_);fh(s,x,w+1,_)&&v.push(bl(i,x+.5,w+1,_+.5))}if(v.length)return v}return[]}function T2(i,t,e,n,s,r,o,a=5,l=24,c){for(let u=0;u<24;u++){const d=s()*Math.PI*2,p=a+s()*(l-a),g=Math.floor(t+Math.cos(d)*p),v=Math.floor(n+Math.sin(d)*p),m=Math.min(Math.floor(e)+8,o(g,v)-5),f=Math.max(2,Math.floor(e)-14);for(let x=m;x>=f;x--){if(!fh(r,g,x,v)||(c?c(g,x,v)>7:!b0(r,g,x,v)))continue;const _=[],w=1+Math.floor(s()*2);for(let A=0;A<w;A++){const E=g+Math.floor((s()*2-1)*2),D=v+Math.floor((s()*2-1)*2);for(let k=1;k>=-1;k--){const b=x+k;if(b<o(E,D)-5&&fh(r,E,b,D)){_.push(bl(i,E+.5,b,D+.5));break}}}if(_.length)return _}}return[]}function E2(i,t,e,n,s,r){const o=[];for(let a=0;a<16&&o.length<4;a++){const l=Math.floor(t)+Math.floor((s()*2-1)*4),c=Math.floor(n)+Math.floor((s()*2-1)*4);for(let h=3;h>=-3;h--){const u=Math.floor(e)+h;if(S2(r,l,u,c)){o.push(bl(i,l+.5,u,c+.5));break}}}return o}function Of(i){const t={kind:i.kind,x:i.pos.x,y:i.pos.y,z:i.pos.z,yaw:i.yaw,health:i.health};return i.kind==="chicken"&&(t.egg=i.eggTimer),t}function Bf(i){const t=bl(i.kind,i.x,i.y,i.z);return t.yaw=i.yaw,t.health=i.health,i.egg!==void 0&&(t.eggTimer=i.egg),t}function A2(i,t,e){if(e)return!1;const n=Math.floor(i.pos.x),s=Math.floor(i.pos.z),r=Math.floor(i.pos.y+ii[i.kind].height);for(let o=Math.floor(i.pos.y);o<=r;o++)if(ti(t.getBlock(n,o,s)))return!1;for(let o=r+1;o<ve;o++){const a=t.getBlock(n,o,s);if(ke(a)||ti(a))return!1}return!0}const us=64,Gt={head:{u:0,v:0,x:8,y:8,z:8},snout:{u:32,v:0,x:4,y:3,z:6},animalBody:{u:0,v:16,x:12,y:8,z:8},humanBody:{u:0,v:16,x:4,y:12,z:8},leg:{u:0,v:36,x:4,y:12,z:4},arm:{u:16,v:36,x:4,y:12,z:4},wing:{u:32,v:16,x:8,y:6,z:2},tail:{u:32,v:36,x:2,y:8,z:2}};function Fi(i,t){const{u:e,v:n,x:s,y:r,z:o}=i;switch(t){case"top":return{x:e+o,y:n,w:s,h:o};case"bottom":return{x:e+o+s,y:n,w:s,h:o};case"right":return{x:e,y:n+o,w:o,h:r};case"front":return{x:e+o,y:n+o,w:s,h:r};case"left":return{x:e+o+s,y:n+o,w:o,h:r};case"back":return{x:e+o+s+o,y:n+o,w:s,h:r}}}const zf=new Map;function R2(i){let t=i%2147483647;return t<=0&&(t+=2147483646),()=>(t=t*16807%2147483647)/2147483647}function C2(i){const t=Number.parseInt(i.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function so(i,t){const[e,n,s]=C2(i),r=o=>Math.max(0,Math.min(255,Math.round(o*t))).toString(16).padStart(2,"0");return`#${r(e)}${r(n)}${r(s)}`}function D2(i,t,e){i.fillStyle=t,i.fillRect(e.x,e.y,e.w,e.h)}function Hn(i,t,e,n,s=1,r=1){i.fillStyle=t,i.fillRect(Math.round(e),Math.round(n),Math.round(s),Math.round(r))}function ie(i,t,e,n,s){const r={top:1.08,bottom:.62,right:.96,front:.88,left:.78,back:.83},o=R2(s),a=["right","front","left","back","top","bottom"];for(const l of a){const c=Fi(t,l);D2(i,so(e,r[l]),c);const h=Math.max(2,Math.floor(c.w*c.h/12));for(let u=0;u<h;u++)Hn(i,so(n,r[l]),c.x+Math.floor(o()*c.w),c.y+Math.floor(o()*c.h))}}function ne(i,t,e,n,s,r,o=1,a=1){const l=Fi(t,e);Hn(i,n,l.x+s,l.y+r,o,a)}function P2(i,t){const e=Gt.head,n=Gt.animalBody,s=Gt.leg,r=Gt.snout;if(t==="pig")ie(i,e,"#e7a39d","#f0b2ab",11),ie(i,n,"#e5a09a","#d98e8b",12),ie(i,s,"#dc9692","#c97f7d",13),ie(i,r,"#d88b8b","#efaaa4",14),ne(i,e,"right","#202020",1,2,2,2),ne(i,e,"right","#202020",5,2,2,2),ne(i,r,"right","#7c4d55",1,1),ne(i,r,"right","#7c4d55",4,1);else if(t==="cow"){ie(i,e,"#554033","#382b23",21),ie(i,n,"#594435","#3f3026",22),ie(i,s,"#4c382c","#2f241d",23),ie(i,r,"#b9a28e","#8e7663",24);for(const o of["right","front","left","back","top"]){const a=Fi(n,o);Hn(i,"#e7ddcd",a.x+1,a.y+1,Math.max(2,Math.floor(a.w/3)),Math.max(2,Math.floor(a.h/2))),Hn(i,"#e7ddcd",a.x+Math.max(1,a.w-4),a.y+Math.max(1,a.h-3),3,2)}ne(i,e,"right","#f0e7d9",0,0,3,5),ne(i,e,"right","#171717",1,2,2,2),ne(i,e,"right","#171717",5,2,2,2),ne(i,r,"right","#4b3834",1,1),ne(i,r,"right","#4b3834",4,1)}else if(t==="sheep"){ie(i,e,"#4a433d","#625950",31),ie(i,n,"#ece9e1","#d7d3c9",32),ie(i,s,"#4a433d","#312d29",33);for(const o of["front","back","top","right","left"]){const a=Fi(n,o);for(let l=0;l<a.h;l+=3)for(let c=l/3%2;c<a.w;c+=3)Hn(i,"#f8f6ef",a.x+c,a.y+l,2,2)}ne(i,e,"right","#ece9e1",0,0,8,2),ne(i,e,"right","#171717",1,3,2,2),ne(i,e,"right","#171717",5,3,2,2)}else t==="chicken"?(ie(i,e,"#f1f1ef","#d9d9d6",41),ie(i,n,"#eeeeeb","#d6d6d2",42),ie(i,s,"#d99020","#a96917",43),ie(i,Gt.wing,"#f7f7f5","#d4d4d0",44),ne(i,e,"right","#151515",1,2,2,2),ne(i,e,"right","#151515",5,2,2,2),ne(i,e,"right","#ffffff",1,2),ne(i,e,"right","#ffffff",5,2)):(ie(i,e,"#9c7656","#75543b",51),ie(i,n,"#987152","#6e4d36",52),ie(i,s,"#8b6549","#624530",53),ne(i,e,"right","#171313",1,2,2,2),ne(i,e,"right","#171313",5,2,2,2),ne(i,e,"right","#f7eee4",2,5,4,2))}function L2(i){const t=Gt.head;ie(i,t,"#3c2924","#231817",91),ie(i,Gt.animalBody,"#34231f","#1f1514",92),ie(i,Gt.leg,"#2c1d1b","#171010",93);for(const[e,n]of[[0,2],[2,1],[5,1],[7,2],[1,4],[3,3],[4,3],[6,4]])ne(i,t,"right",n<3?"#e63b2f":"#8d1e1b",e,n)}function k2(i,t){const e=Gt.head,n=Gt.humanBody,s=Gt.arm,r=Gt.leg;if(t==="skeleton"){ie(i,e,"#dcdcd0","#bcbcaf",71),ie(i,n,"#d8d8cc","#9f9f91",72),ie(i,s,"#d6d6ca","#a5a598",73),ie(i,r,"#d6d6ca","#a5a598",74),ne(i,e,"right","#1b1b1b",1,2,2,2),ne(i,e,"right","#1b1b1b",5,2,2,2),ne(i,e,"right","#77776d",3,4,2,1),ne(i,e,"right","#77776d",1,6,6,1);const p=Fi(n,"right");Hn(i,"#9b9b8e",p.x+3,p.y+1,2,10);for(const g of[2,5,8])Hn(i,"#85857a",p.x,p.y+g,3,1),Hn(i,"#85857a",p.x+5,p.y+g,3,1);return}const o=t==="husk",a=o?"#b29a5e":"#568746",l=o?"#8f783f":"#3f6e37",c=o?"#b9a66d":"#2f6a69",h=o?"#8c7645":"#244f50",u=o?"#66542e":"#2d3158";ie(i,e,a,l,o?67:61),ie(i,n,c,h,o?68:62),ie(i,s,c,a,o?69:63),ie(i,r,u,so(u,.75),o?70:64);for(const p of["right","front","left","back"]){const g=Fi(s,p);Hn(i,so(a,p==="left"?.8:.95),g.x,g.y+7,g.w,5)}ne(i,e,"right","#242022",1,2,2,1),ne(i,e,"right","#242022",5,2,2,1),ne(i,e,"right",o?"#5e4724":"#31562c",2,6,4,1);const d=Fi(n,"right");Hn(i,l,d.x+1,d.y+7,2,3),Hn(i,so(c,.72),d.x+5,d.y+10,3,2)}function I2(i){const t=Gt.head,e=Gt.humanBody;ie(i,t,"#5d9f43","#407c31",81),ie(i,e,"#5a9840","#3d762e",82),ie(i,Gt.leg,"#4d8937","#326628",83),ne(i,t,"right","#101010",1,2,2,2),ne(i,t,"right","#101010",5,2,2,2),ne(i,t,"right","#101010",3,4,2,2),ne(i,t,"right","#101010",2,6,2,2),ne(i,t,"right","#101010",4,6,2,2)}function U2(i,t){t.clearRect(0,0,us,us),t.imageSmoothingEnabled=!1,i==="pig"||i==="cow"||i==="sheep"||i==="chicken"||i==="rabbit"?P2(t,i):i==="creeper"?I2(t):i==="spider"?L2(t):k2(t,i)}function N2(i){const t=zf.get(i);if(t)return t;const e=document.createElement("canvas");e.width=e.height=us;const n=e.getContext("2d");n&&U2(i,n);const s=new yl(e);return s.magFilter=de,s.minFilter=de,s.generateMipmaps=!1,s.colorSpace=ue,zf.set(i,s),s}function F2(i,t=30){if(i<=0)return{whiteness:0,swell:1};const e=Math.min(1,i/t+.3*Math.abs(Math.sin(i*.7)));return{whiteness:e,swell:1+.5*e}}const O2=[.8,.8,1,.42,.8,.8],B2=3.4,Hf=["right","left","top","bottom","front","back"];function z2(i,t,e,n,s){const r=new en(i,t,e),o=new Et(n),a=[];for(let l=0;l<6;l++){const c=O2[l];for(let h=0;h<4;h++)a.push(o.r*c,o.g*c,o.b*c)}if(r.setAttribute("color",new Fe(a,3)),s){const l=r.attributes.uv;for(let c=0;c<Hf.length;c++){const h=Fi(s,Hf[c]),u=h.x/us,d=(h.x+h.w)/us,p=1-(h.y+h.h)/us,g=1-h.y/us,v=c*4;l.setXY(v,u,g),l.setXY(v+1,d,g),l.setXY(v+2,u,p),l.setXY(v+3,d,p)}l.needsUpdate=!0}return r}function ro(i,t,e,n,s,r,o,a,l,c){const h=new Jt(z2(e,n,s,r,c),t);return h.position.set(o,a,l),i.add(h),h}function hi(i,t,e,n,s,r,o){const a=new dn;a.position.set(n,r,s),ro(a,t,o,r,o,16777215,0,-r/2,0,Gt.leg),i.add(a),e.push(a)}function $s(i,t,e,n,s,r,o,a,l=0){const c=new dn;return c.position.set(n,s,r),c.rotation.z=l,ro(c,t,a,o,a,16777215,0,-o/2,0,Gt.arm),i.add(c),e.push(c),c}function H2(i){const t=new dn,e=[],n=[],s=new ye({vertexColors:!0}),r=new ye({map:N2(i),vertexColors:!0}),o=[s,r],a=(v,m,f,x,_,w,A)=>ro(t,s,v,m,f,x,_,w,A),l=(v,m,f,x,_,w,A)=>ro(t,r,m,f,x,16777215,_,w,A,v);let c,h;if(i==="pig"){l(Gt.animalBody,.9,.5,.6,0,.26+.25,0),c=l(Gt.head,.44,.44,.5,.55,.26+.28,0),l(Gt.snout,.16,.15,.3,.79,.26+.2,0),a(.14,.12,.04,14257292,.5,.26+.52,.2),a(.14,.12,.04,14257292,.5,.26+.52,-.2),h=l(Gt.tail,.1,.14,.1,-.47,.26+.36,0);for(const[m,f]of[[.3,.2],[.3,-.2],[-.32,.2],[-.32,-.2]])hi(t,r,e,m,f,.26,.16)}else if(i==="cow"){l(Gt.animalBody,1,.6,.62,0,.52+.3,0),c=l(Gt.head,.45,.48,.52,.6,.52+.4,0),l(Gt.snout,.18,.2,.42,.86,.52+.28,0),a(.09,.14,.09,14471352,.61,.52+.7,.2),a(.09,.14,.09,14471352,.61,.52+.7,-.2),a(.16,.1,.34,15709892,-.18,.52-.02,0),h=l(Gt.tail,.1,.32,.1,-.51,.52+.38,0);for(const[f,x]of[[.34,.21],[.34,-.21],[-.34,.21],[-.34,-.21]])hi(t,r,e,f,x,.52,.18)}else if(i==="sheep"){l(Gt.animalBody,.94,.7,.76,0,.46+.36,0),a(.5,.34,.42,15526627,.4,.46+.6,0),c=l(Gt.head,.3,.38,.36,.57,.46+.38,0),a(.1,.1,.04,4669498,.52,.46+.56,.18),a(.1,.1,.04,4669498,.52,.46+.56,-.18);for(const[x,_]of[[.28,.22],[.28,-.22],[-.3,.22],[-.3,-.22]])hi(t,r,e,x,_,.46,.15)}else if(i==="rabbit"){l(Gt.animalBody,.48,.3,.34,-.05,.18+.15,0),c=l(Gt.head,.28,.28,.28,.29,.18+.29,0),a(.1,.32,.1,10187858,.28,.18+.57,.09),a(.1,.32,.1,10187858,.28,.18+.57,-.09),h=a(.16,.16,.16,15261392,-.36,.18+.26,0);for(const[m,f,x]of[[.15,.12,.1],[.15,-.12,.1],[-.22,.13,.16],[-.22,-.13,.16]])hi(t,r,e,m,f,.18,x)}else if(i==="zombie"){l(Gt.humanBody,.28,.66,.5,0,.82+.33,0),c=l(Gt.head,.44,.44,.44,0,.82+.88,0),$s(t,r,n,.08,.82+.63,.35,.62,.18,1.28),$s(t,r,n,.08,.82+.63,-.35,.62,.18,1.28);for(const[,m]of[[0,.12],[0,-.12]])hi(t,r,e,0,m,.82,.2)}else if(i==="skeleton"){l(Gt.humanBody,.2,.62,.34,0,.84+.31,0),c=l(Gt.head,.42,.42,.42,0,.84+.81,0),$s(t,r,n,.04,.84+.58,.24,.58,.11,1.18),$s(t,r,n,0,.84+.58,-.24,.58,.11,.12);const m=7031339;a(.06,.62,.06,m,.52,.84+.32,.16),a(.06,.14,.06,m,.47,.84+.62,.16),a(.06,.14,.06,m,.47,.84+.02,.16),a(.02,.6,.02,15394520,.55,.84+.32,.16);for(const[,f]of[[0,.1],[0,-.1]])hi(t,r,e,0,f,.84,.12)}else if(i==="husk"){l(Gt.humanBody,.28,.66,.5,0,.82+.33,0),c=l(Gt.head,.44,.44,.44,0,.82+.88,0),$s(t,r,n,.08,.82+.63,.35,.62,.18,1.28),$s(t,r,n,.08,.82+.63,-.35,.62,.18,1.28);for(const[,m]of[[0,.12],[0,-.12]])hi(t,r,e,0,m,.82,.2)}else if(i==="creeper"){l(Gt.humanBody,.34,.82,.5,0,.36+.5,0),c=l(Gt.head,.48,.48,.48,0,.36+1.12,0);for(const[m,f]of[[.16,.13],[.16,-.13],[-.16,.13],[-.16,-.13]])hi(t,r,e,m,f,.36,.16)}else if(i==="spider"){l(Gt.animalBody,.72,.42,.7,-.16,.34,0),l(Gt.animalBody,.58,.34,.58,-.68,.34+.01,0),c=l(Gt.head,.48,.34,.58,.42,.34+.02,0);for(const m of[-1,1])for(let f=0;f<4;f++){const x=new dn;x.position.set(-.4+f*.27,.34-.04,m*.25),ro(x,r,.1,.1,.62,16777215,0,-.08,m*.27,Gt.leg),x.rotation.x=m*(.12+Math.abs(f-1.5)*.08),t.add(x),e.push(x)}}else{l(Gt.animalBody,.34,.34,.3,-.02,.22+.17,0),l(Gt.wing,.32,.24,.06,-.18,.22+.2,.17),l(Gt.wing,.32,.24,.06,-.18,.22+.2,-.17),h=l(Gt.tail,.18,.26,.16,-.34,.22+.34,0),c=l(Gt.head,.22,.24,.2,.2,.22+.4,0),a(.13,.08,.1,15176991,.36,.22+.4,0),a(.05,.1,.14,13384496,.18,.22+.55,0),a(.06,.08,.06,13384496,.32,.22+.32,0);for(const[x,_]of[[.06,.09],[.06,-.09]])hi(t,r,e,x,_,.22,.07)}const u=.9+Math.random()*.22;t.scale.setScalar(u);const d=.9+Math.random()*.16,p=(Math.random()-.5)*.06,g=new Et(Math.min(1,d+p),d,Math.max(0,d-p));return{group:t,legs:e,arms:n,mats:o,base:g,head:c,tail:h,headY:c?c.position.y:0}}const W2=new Et(16734810),G2=new Et(1,1,1);function Wf(i){i.group.traverse(t=>{t instanceof Jt&&t.geometry.dispose()});for(const t of i.mats)t.dispose()}class V2{constructor(t){y(this,"models",new Map);this.scene=t}sync(t,e,n){const s=new Set(t);for(const[r,o]of this.models)s.has(r)||(this.scene.remove(o.group),Wf(o),this.models.delete(r));for(const r of t){let o=this.models.get(r);if(!o){const g=H2(r.kind);this.scene.add(g.group),o={...g,phase:0,t:Math.random()*10,baseScale:g.group.scale.x,bright:1,dispYaw:r.yaw,swingAmt:0},this.models.set(r,o)}o.t+=e;let a=-r.yaw-o.dispYaw;a=((a+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,o.dispYaw+=a*Math.min(1,e*10),o.group.rotation.y=o.dispYaw,o.group.rotation.z=Math.max(-.18,Math.min(.22,-r.vel.y*2.2));const l=n?n(r.pos.x,r.pos.y+.6,r.pos.z):1;o.bright+=(l-o.bright)*Math.min(1,e*10);const c=r.hurtCooldown>0?W2:o.base;for(const g of o.mats)g.color.copy(c).multiplyScalar(o.bright);const h=F2(r.kind==="creeper"?r.fuse:0);if(h.whiteness>0){const g=c.clone().lerp(G2,h.whiteness);for(const v of o.mats)v.color.copy(g).multiplyScalar(o.bright)}o.group.scale.setScalar(o.baseScale*h.swell);const u=Math.hypot(r.vel.x,r.vel.z),d=u>.002;d&&(o.phase+=u*20*e*B2),o.swingAmt+=((d?1:0)-o.swingAmt)*Math.min(1,e*8);const p=Math.sin(o.phase)*.6*o.swingAmt;if(r.kind==="spider"?o.legs.forEach((g,v)=>g.rotation.y=(v%2===0?p:-p)*.45):o.legs.forEach((g,v)=>g.rotation.z=v%2===0?p:-p),r.kind==="zombie"||r.kind==="husk"?o.arms.forEach((g,v)=>g.rotation.z=1.28+(v?-1:1)*Math.sin(o.phase)*.08*o.swingAmt):r.kind==="skeleton"&&(o.arms[0]&&(o.arms[0].rotation.z=1.18+Math.sin(o.phase)*.06*o.swingAmt),o.arms[1]&&(o.arms[1].rotation.z=.12-p*.45)),o.group.position.set(r.pos.x,r.pos.y+Math.abs(Math.sin(o.phase))*.035*o.swingAmt,r.pos.z),o.head)if(d)o.head.position.y=o.headY+Math.sin(o.phase*2)*.015,o.head.rotation.z=Math.sin(o.phase)*.05;else if(r.kind==="chicken"){const g=Math.max(0,Math.sin(o.t*1.6));o.head.rotation.z=-g*.5,o.head.position.y=o.headY-g*.04}else o.head.position.y=o.headY+Math.sin(o.t*1.4)*.012,o.head.rotation.z=0,o.head.rotation.y=Math.sin(o.t*.55)*.4*(1-o.swingAmt);o.tail&&(o.tail.rotation.z=Math.sin(o.t*4+o.phase)*.3)}}clear(){for(const[,t]of this.models)this.scene.remove(t.group),Wf(t);this.models.clear()}}const es=8,Gf=1,Lc=4,ya=[[1,0],[-1,0],[0,1],[0,-1]],Vf={amount:0,source:!1,falling:!1},Ys=(i,t,e)=>`${i},${t},${e}`;class X2{constructor(t=4e3){y(this,"active",new Set);y(this,"maxPerTick");this.maxPerTick=t}get activeCount(){return this.active.size}clear(){this.active.clear()}activate(t,e,n){this.active.add(Ys(t,e,n));for(const[s,r]of ya)this.active.add(Ys(t+s,e,n+r));this.active.add(Ys(t,e+1,n)),this.active.add(Ys(t,e-1,n))}tick(t){if(this.active.size===0)return;const e=[...this.active];this.active.clear();const n=new Map,s=new Map,r=(l,c,h,u)=>{const d=Ys(l,c,h),p=n.get(d);(!p||u.amount>p.c.amount||u.amount===p.c.amount&&u.source&&!p.c.source)&&n.set(d,{x:l,y:c,z:h,c:u})},o=(l,c,h,u)=>{s.set(Ys(l,c,h),{x:l,y:c,z:h,id:u})};let a=this.maxPerTick;for(const l of e){if(a--<=0){this.active.add(l);continue}const[c,h,u]=l.split(",").map(Number);this.evaluate(t,c,h,u,r,o)}for(const{x:l,y:c,z:h,c:u}of n.values())(u.amount!==t.amount(l,c,h)||u.source!==t.isSource(l,c,h)||u.falling!==t.isFalling(l,c,h))&&(t.setWater(l,c,h,u.amount,u.source,u.falling),this.activate(l,c,h));for(const{x:l,y:c,z:h,id:u}of s.values())t.getBlock(l,c,h)!==u&&(t.setBlock(l,c,h,u),this.activate(l,c,h))}evaluate(t,e,n,s,r,o){if(t.isSolid(e,n,s)){t.amount(e,n,s)>0&&r(e,n,s,Vf);return}if(!(t.amount(e,n,s)>0||t.isSource(e,n,s)))return;const l=[[e+1,n,s],[e-1,n,s],[e,n,s+1],[e,n,s-1],[e,n-1,s]];for(const[h,u,d]of l)t.getBlock(h,u,d)===ho&&o(h,u,d,Dn);const c=t.isSource(e,n,s)?{amount:es,source:!0,falling:!1}:this.getNewLiquid(t,e,n,s);r(e,n,s,c),c.amount>0&&this.spread(t,e,n,s,c,r)}getNewLiquid(t,e,n,s){if(t.amount(e,n+1,s)>0)return{amount:es,source:!1,falling:!0};let r=0,o=0;for(const[l,c]of ya){const h=t.amount(e+l,n,s+c);h>0&&(h>r&&(r=h),t.isSource(e+l,n,s+c)&&o++)}if(o>=2&&(t.isSolid(e,n-1,s)||t.isSource(e,n-1,s)))return{amount:es,source:!0,falling:!1};const a=r-Gf;return a>0?{amount:a,source:!1,falling:!1}:Vf}spread(t,e,n,s,r,o){const a=n-1,l=t.amount(e,a,s)===es&&!t.isFalling(e,a,s);if(!t.isSolid(e,a,s)&&!l){(t.getBlock(e,a,s)===0||t.amount(e,a,s)>0)&&o(e,a,s,{amount:es,source:!1,falling:!0});return}if(!r.source&&!t.isSolid(e,a,s))return;const c=r.source?es:r.amount,h=c-Gf;if(!(h<1))for(const[u,d]of this.getSpreadDirs(t,e,n,s,c)){const p=e+u,g=s+d;t.isSolid(p,n,g)||t.isSource(p,n,g)||t.getBlock(p,n,g)!==0&&t.amount(p,n,g)===0||t.amount(p,n,g)>=h||o(p,n,g,{amount:h,source:!1,falling:!1})}}getSpreadDirs(t,e,n,s,r){let o=Lc+1;const a=[];for(const l of ya){const c=e+l[0],h=s+l[1];if(t.isSolid(c,n,h)||t.amount(c,n,h)>=r)continue;const u=this.isHole(t,c,n,h)?0:this.slopeDistance(t,c,n,h,1,[-l[0],-l[1]]);u<o?(o=u,a.length=0,a.push(l)):u===o&&a.push(l)}return a}isHole(t,e,n,s){return!t.isSolid(e,n-1,s)&&t.amount(e,n-1,s)<es}slopeDistance(t,e,n,s,r,o){let a=Lc;for(const l of ya){if(l[0]===o[0]&&l[1]===o[1])continue;const c=e+l[0],h=s+l[1];if(!t.isSolid(c,n,h)){if(this.isHole(t,c,n,h))return r;if(r<Lc){const u=this.slopeDistance(t,c,n,h,r+1,[-l[0],-l[1]]);u<a&&(a=u)}}}return a}}function Xf(i,t,e){let n=0;for(let s=e.minY;s<=e.maxY;s++)for(let r=e.minX;r<=e.maxX;r++)for(let o=e.minZ;o<=e.maxZ;o++)t.isWater(r,s,o)&&(t.isAir(r,s-1,o)||t.isAir(r+1,s,o)||t.isAir(r-1,s,o)||t.isAir(r,s,o+1)||t.isAir(r,s,o-1))&&(i.activate(r,s,o),n++);return n}function q2(i,t,e,n){const s=[];for(let r=i-e;r<=i+e;r++)for(let o=t-e;o<=t+e;o++){const a=`${r},${o}`;if(n.has(a))continue;const l=r-i,c=o-t;s.push({key:a,d:l*l+c*c})}return s.sort((r,o)=>r.d-o.d),s.map(r=>r.key)}const $2=9,Y2=27,Jh=$2+Y2,tu=64;function Lr(i,t){return i.id===t.id&&i.dur===t.dur}function eu(){return Array.from({length:Jh},()=>null)}function qf(i,t,e,n=tu,s=0,r=i.length){return Tl(i,{id:t,count:e},n,s,r)}function Tl(i,t,e=tu,n=0,s=i.length){let r=t.count;for(let o=n;o<s&&r>0;o++){const a=i[o];if(a&&Lr(a,t)&&a.count<e){const l=Math.min(e-a.count,r);a.count+=l,r-=l}}for(let o=n;o<s&&r>0;o++)if(!i[o]){const a=Math.min(e,r);i[o]=t.dur===void 0?{id:t.id,count:a}:{id:t.id,count:a,dur:t.dur},r-=a}return r}function K2(i,t,e){for(let n=0;n<i.length;n++)if(!i[n])return i[n]={id:t,count:1,dur:e},!0;return!1}function $f(i,t){let e=0;for(const n of i)n&&n.id===t&&(e+=n.count);return e}function j2(i,t,e){let n=e;for(let s=0;s<i.length&&n>0;s++){const r=i[s];if(r&&r.id===t){const o=Math.min(r.count,n);r.count-=o,n-=o,r.count<=0&&(i[s]=null)}}return e-n}function Yf(i,t){const e=i[t];if(!e||e.count<=0)return null;e.count--;const n=e.id;return e.count<=0&&(i[t]=null),n}function Z2(i){return i.map(t=>t?{id:t.id,count:t.count,dur:t.dur}:null)}function Q2(i){const t=eu();if(!Array.isArray(i))return t;for(let e=0;e<Jh;e++){const n=i[e];if(n&&typeof n.id=="number"&&typeof n.count=="number"&&n.count>0){const s={id:n.id,count:Math.min(tu,n.count)};typeof n.dur=="number"&&(s.dur=n.dur),t[e]=s}}return t}function wa(i,t,e){const n=i[t];if(!n)return!1;const s=(n.dur??e)-1;return s<=0?(i[t]=null,!0):(n.dur=s,!1)}const nu=[{id:"building",label:"建筑方块",items:[1,2,3,4,5,6,7,8,10,11,12,13,15,18,19,20,21,22,24,26,27,28,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44]},{id:"decoration",label:"装饰方块",items:[14,16,17,29]},{id:"tools",label:"工具武器",items:[259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,292,294,297,298,299,300,301]},{id:"food",label:"食物",items:[256,275,276,277,278,279,280,281,282,287]},{id:"materials",label:"材料杂项",items:[257,258,274,283,284,285,286,288,289,290,291,293,295,296]}],T0=nu.flatMap(i=>i.items),J2=new Set(T0);function tT(i){var t;return((t=nu.find(e=>e.id===i))==null?void 0:t.items)??[]}function E0(i){return J2.has(i)}function ph(i,t=!1){return E0(i)?{id:i,count:t?1:ps(i)}:null}function eT(i,t,e){if(!E0(e))return t;const n=i.slice(0,9).findIndex(s=>(s==null?void 0:s.id)===e);return n>=0?n:(i[t]=ph(e),t)}const _n=new Set,nT=300;let mh=-1/0,El=!1,ll=!1;window.addEventListener("keydown",i=>{if(i.code==="KeyW"&&!_n.has("KeyW")){const t=performance.now();t-mh<nT&&(El=!0),mh=t}i.code==="Space"&&!_n.has("Space")&&(ll=!0),_n.add(i.code)});window.addEventListener("keyup",i=>{_n.delete(i.code),i.code==="KeyW"&&(El=!1)});function A0(){_n.clear(),El=!1,ll=!1,mh=-1/0}window.addEventListener("blur",A0);document.addEventListener("visibilitychange",()=>{document.hidden&&A0()});function iT(){let i=0,t=0;_n.has("KeyW")&&(i+=1),_n.has("KeyS")&&(i-=1),_n.has("KeyD")&&(t+=1),_n.has("KeyA")&&(t-=1);const e=_n.has("ShiftLeft")||_n.has("ShiftRight")||_n.has("KeyC");return{forward:i,right:t,sprint:El&&i>0&&!e,jumpHeld:_n.has("Space"),crouch:e}}function sT(){const i=ll;return ll=!1,i}const Kf=.0025,jf=1.55;class rT{constructor(t,e=!0){y(this,"yaw",0);y(this,"pitch",0);e&&t.addEventListener("click",()=>void t.requestPointerLock()),document.addEventListener("mousemove",n=>{document.pointerLockElement===t&&this.rotate(n.movementX*Kf,-n.movementY*Kf)})}rotate(t,e){this.yaw+=t,this.pitch=Math.max(-jf,Math.min(jf,this.pitch+e))}}const Zf=.006,oT=320,R0=380,aT=8,Ma=96,lT=.2,Qf=1+Math.SQRT2;function cT(i,t){if(Math.hypot(i,t)<lT)return{forward:0,right:0};const n=Math.abs(i),s=Math.abs(t);return s>n*Qf?{forward:t<0?1:-1,right:0}:n>s*Qf?{forward:0,right:i>0?1:-1}:{forward:t<0?1:-1,right:i>0?1:-1}}function hT(i,t){return t-i>=0&&t-i<=oT}function uT(i,t,e,n){return Math.hypot(e-i,n-t)>=aT}function dT(i,t,e=!1,n=0){return e?"none":t?"hold-end":i?"none":n>=R0?"hold-end":"tap"}function C0(){return new URLSearchParams(window.location.search).get("touch")==="1"?!0:navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches}let Jf=!1;function fT(){if(Jf)return;Jf=!0;const i=r=>r.preventDefault();document.addEventListener("gesturestart",i,{passive:!1}),document.addEventListener("gesturechange",i,{passive:!1}),document.addEventListener("gestureend",i,{passive:!1}),document.addEventListener("dblclick",i,{passive:!1}),document.addEventListener("touchmove",r=>{r.touches.length>1&&r.preventDefault()},{passive:!1});let t=-1/0,e=null,n=0,s=0;document.addEventListener("touchend",r=>{const o=performance.now(),a=r.changedTouches[0],l=a!==void 0&&Math.hypot(a.clientX-n,a.clientY-s)<28;o-t<320&&r.target===e&&l&&r.preventDefault(),t=o,e=r.target,a&&(n=a.clientX,s=a.clientY)},{passive:!1})}class pT{constructor(t,e){y(this,"root");y(this,"actions");y(this,"lookPointer",null);y(this,"lookPoint",null);y(this,"lookStartedAt",0);y(this,"lookGesture",0);y(this,"lookStartX",0);y(this,"lookStartY",0);y(this,"lookX",0);y(this,"lookY",0);y(this,"lookDragging",!1);y(this,"lookHoldStarted",!1);y(this,"lookHoldTimer",null);y(this,"releaseLookCapture",null);y(this,"dpadPointer",null);y(this,"forward",0);y(this,"right",0);y(this,"lastForwardPress",-1/0);y(this,"sprinting",!1);y(this,"jumpHeld",!1);y(this,"crouchHeld",!1);y(this,"pendingJump",!1);y(this,"active",!1);y(this,"releaseHolds",[]);this.root=t,this.actions=e;const n=t.querySelector(".touch-look");n.addEventListener("pointerdown",l=>{if(!this.active||(l.preventDefault(),this.lookPointer!==null))return;this.lookPointer=l.pointerId,this.lookPoint={x:l.clientX,y:l.clientY},this.lookStartedAt=performance.now();const c=++this.lookGesture;this.lookStartX=l.clientX,this.lookStartY=l.clientY,this.lookX=l.clientX,this.lookY=l.clientY,this.lookDragging=!1,this.lookHoldStarted=!1,this.capturePointer(n,l.pointerId),this.lookHoldTimer=window.setTimeout(()=>{if(this.lookHoldTimer=null,this.lookPointer!==l.pointerId||this.lookGesture!==c||this.lookDragging||!this.active)return;const h=this.lookPoint;h!==null&&(this.lookHoldStarted=!0,this.actions.interactHoldStart(h))},R0)});const s=l=>{if(l.pointerId!==this.lookPointer)return;l.preventDefault();const c=typeof l.getCoalescedEvents=="function"?l.getCoalescedEvents():[],h=c.length>0?c:[l];for(const u of h)this.moveLookTo(u.clientX,u.clientY)},r=(l,c)=>{const h=this.lookPointer,u=this.lookPoint;if(h===null||u===null)return;!l&&c&&this.moveLookTo(c.x,c.y);const d=this.lookHoldStarted,p=dT(this.lookDragging,d,l,performance.now()-this.lookStartedAt);this.clearLookHoldTimer(),this.lookPointer=null,this.lookPoint=null,this.lookStartedAt=0,this.lookDragging=!1,this.lookHoldStarted=!1,this.releasePointerCapture(n,h),p==="tap"?this.actions.interactTap(u):p==="hold-end"?(d||this.actions.interactHoldStart(u),this.actions.interactHoldEnd(u)):d&&this.actions.interactHoldCancel(u)};this.releaseLookCapture=()=>r(!0);const o=l=>{l.pointerId===this.lookPointer&&(l.preventDefault(),r(!1,{x:l.clientX,y:l.clientY}))},a=l=>{l.pointerId===this.lookPointer&&(l.preventDefault(),r(!0))};window.addEventListener("pointermove",s),window.addEventListener("pointerup",o),window.addEventListener("pointercancel",a),n.addEventListener("lostpointercapture",a),this.bindSlidingDpad(t.querySelector("#touch-dpad")),this.bindHold("touch-jump",()=>{this.jumpHeld||(this.pendingJump=!0),this.jumpHeld=!0},()=>this.jumpHeld=!1),this.bindHold("touch-crouch",()=>this.crouchHeld=!0,()=>this.crouchHeld=!1),this.bindTap("touch-inventory",()=>this.actions.inventory()),this.bindTap("touch-pause",()=>this.actions.pause()),window.addEventListener("blur",()=>this.reset()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.reset()}),window.addEventListener("pagehide",()=>this.reset())}setActive(t){this.active=t,this.root.classList.toggle("active",t),this.root.setAttribute("aria-hidden",String(!t)),t||this.reset()}get isActive(){return this.active}readMove(){return{forward:this.forward,right:this.right,sprint:this.sprinting&&this.forward>0&&!this.crouchHeld,jumpHeld:this.jumpHeld,crouch:this.crouchHeld}}consumeJump(){const t=this.pendingJump;return this.pendingJump=!1,t}moveLookTo(t,e){if(this.lookPoint===null)return;if(!this.lookDragging&&uT(this.lookStartX,this.lookStartY,t,e)){this.lookDragging=!0,this.clearLookHoldTimer(),this.lookX=t,this.lookY=e;return}if(!this.lookDragging)return;const s=Math.max(-Ma,Math.min(Ma,t-this.lookX)),r=Math.max(-Ma,Math.min(Ma,e-this.lookY));this.lookX=t,this.lookY=e,this.actions.look(s*Zf,-r*Zf)}bindSlidingDpad(t){const e=(o,a)=>this.updateSlidingDpad(t,o,a),n=()=>{const o=this.dpadPointer;o!==null&&(this.dpadPointer=null,this.setMoveAxes(t,{forward:0,right:0}),t.style.setProperty("--touch-dpad-stick-x","0px"),t.style.setProperty("--touch-dpad-stick-y","0px"),t.dataset.moving="false",this.releasePointerCapture(t,o))};t.addEventListener("pointerdown",o=>{!this.active||this.dpadPointer!==null||(o.preventDefault(),o.stopPropagation(),this.dpadPointer=o.pointerId,this.capturePointer(t,o.pointerId),e(o.clientX,o.clientY))});const s=o=>{o.pointerId===this.dpadPointer&&(o.preventDefault(),e(o.clientX,o.clientY))},r=o=>{o.pointerId===this.dpadPointer&&(o.preventDefault(),n())};window.addEventListener("pointermove",s),window.addEventListener("pointerup",r),window.addEventListener("pointercancel",r),t.addEventListener("lostpointercapture",r),this.releaseHolds.push(n)}updateSlidingDpad(t,e,n){const s=t.getBoundingClientRect(),r=Math.max(1,Math.min(s.width,s.height)/2),o=(e-(s.left+s.width/2))/r,a=(n-(s.top+s.height/2))/r,l=cT(o,a);this.setMoveAxes(t,l);const c=Math.hypot(o,a),h=c>0?Math.min(1,c)/c:0,u=r*.42;t.style.setProperty("--touch-dpad-stick-x",`${Math.round(o*h*u)}px`),t.style.setProperty("--touch-dpad-stick-y",`${Math.round(a*h*u)}px`),t.dataset.moving=String(l.forward!==0||l.right!==0)}setMoveAxes(t,e){if(e.forward>0&&this.forward<=0){const n=performance.now();hT(this.lastForwardPress,n)&&(this.sprinting=!0),this.lastForwardPress=n}e.forward<=0&&(this.sprinting=!1),this.forward=e.forward,this.right=e.right,t.dataset.forward=String(e.forward),t.dataset.right=String(e.right)}releasePointerCapture(t,e){if(t.hasPointerCapture(e))try{t.releasePointerCapture(e)}catch{}}capturePointer(t,e){try{t.setPointerCapture(e)}catch{}}clearLookHoldTimer(){this.lookHoldTimer!==null&&(window.clearTimeout(this.lookHoldTimer),this.lookHoldTimer=null)}bindHold(t,e,n,s=n){const r=document.getElementById(t);let o=null;r.addEventListener("pointerdown",h=>{!this.active||o!==null||(h.preventDefault(),h.stopPropagation(),o=h.pointerId,this.capturePointer(r,h.pointerId),r.classList.add("pressed"),e())});const a=h=>{const u=o;u!==null&&(o=null,r.classList.remove("pressed"),h(),this.releasePointerCapture(r,u))},l=h=>{h.pointerId===o&&a(n)},c=h=>{h.pointerId===o&&a(s)};r.addEventListener("pointerup",l),r.addEventListener("pointercancel",c),r.addEventListener("lostpointercapture",c),this.releaseHolds.push(()=>a(s))}bindTap(t,e){const n=document.getElementById(t);n.addEventListener("pointerdown",s=>{this.active&&(s.preventDefault(),s.stopPropagation(),n.classList.add("pressed"),window.setTimeout(()=>n.classList.remove("pressed"),100),e())})}reset(){var t;(t=this.releaseLookCapture)==null||t.call(this);for(const e of this.releaseHolds)e();this.dpadPointer=null,this.forward=0,this.right=0,this.lastForwardPress=-1/0,this.sprinting=!1,this.jumpHeld=!1,this.crouchHeld=!1,this.pendingJump=!1}}class mT{constructor(t,e=9,n=null){y(this,"icons",[]);y(this,"counts",[]);y(this,"cells",[]);y(this,"durTracks",[]);y(this,"durFills",[]);y(this,"itemNameEl");y(this,"inventory",null);y(this,"selectedItemId",null);y(this,"selected",0);y(this,"size");this.size=e,this.itemNameEl=n,t.innerHTML="";for(let s=0;s<e;s++){const r=document.createElement("div");r.className="hotbar-slot",r.style.position="relative";const o=document.createElement("div");o.className="hotbar-icon";const a=document.createElement("div");a.className="hotbar-count";const l=document.createElement("div");l.style.cssText="position:absolute;left:12%;right:12%;bottom:9%;height:3px;background:rgba(0,0,0,.55);border-radius:1px;display:none;overflow:hidden;";const c=document.createElement("div");c.style.cssText="height:100%;width:100%;",l.appendChild(c),r.append(o,a,l),r.addEventListener("pointerdown",h=>{h.pointerType!=="mouse"&&(h.preventDefault(),h.stopPropagation(),this.setSelected(s))}),t.appendChild(r),this.cells.push(r),this.icons.push(o),this.counts.push(a),this.durTracks.push(l),this.durFills.push(c)}this.setSelected(0)}render(t){var n;this.inventory=t;for(let s=0;s<this.size;s++){const r=t[s]??null,o=this.icons[s],a=this.counts[s];if(r&&r.count>0){const c=ms(r.id);o.style.backgroundImage=c?`url(${c})`:"none",a.textContent=r.count>1?String(r.count):""}else o.style.backgroundImage="none",a.textContent="";const l=r&&r.count>0?fo(r.id):null;if(r&&l&&(r.dur??l)<l){const c=Math.max(0,(r.dur??l)/l);this.durTracks[s].style.display="block",this.durFills[s].style.width=`${c*100}%`,this.durFills[s].style.background=`hsl(${Math.round(c*120)},85%,45%)`}else this.durTracks[s].style.display="none"}const e=((n=t[this.selected])==null?void 0:n.id)??null;e!==this.selectedItemId&&(this.selectedItemId=e,this.showSelectedItemName())}setSelected(t){var r,o;const e=(t%this.size+this.size)%this.size,n=e!==this.selected,s=this.selectedItemId;this.selected=e,this.cells.forEach((a,l)=>a.classList.toggle("selected",l===this.selected)),this.selectedItemId=((o=(r=this.inventory)==null?void 0:r[this.selected])==null?void 0:o.id)??null,(n||this.selectedItemId!==s)&&this.showSelectedItemName()}scroll(t){this.setSelected(this.selected+t)}get index(){return this.selected}showSelectedItemName(){var e;if(!this.itemNameEl)return;const t=((e=this.inventory)==null?void 0:e[this.selected])??null;if(this.itemNameEl.classList.remove("show"),!t||t.count<=0){this.itemNameEl.textContent="";return}this.itemNameEl.textContent=io(t.id),this.itemNameEl.offsetWidth,this.itemNameEl.classList.add("show")}}const ir=20,ds=20,Al=10,gT=7,vT=1,tp=6,ep=80,_T=10,xT=30,yT=20;function kc(){return{health:ir,food:ds,saturation:5,exhaustion:0,foodTimer:0,oxygen:Al,oxygenTimer:0}}function wT(i){return i.food>=gT}function ls(i,t){i.exhaustion=Math.min(i.exhaustion+t,40)}function cl(i,t){i.health=Math.max(0,i.health-t)}function Ic(i){return i.health<=0}function MT(i,t){i.food=Math.min(ds,i.food+t.nutrition),i.saturation=Math.min(i.saturation+t.nutrition*t.saturationModifier*2,i.food)}function ST(i){return Math.max(0,Math.ceil(i-3))}function bT(i,t,e,n){return n?{fallDistance:0,damage:0}:e?{fallDistance:0,damage:ST(i)}:{fallDistance:t<0?i-t:i,damage:0}}function TT(i){i.exhaustion>4&&(i.exhaustion-=4,i.saturation>0?i.saturation=Math.max(0,i.saturation-1):i.food=Math.max(0,i.food-1)),i.food>=ds&&i.saturation>0&&i.health<ir?++i.foodTimer>=_T&&(i.health=Math.min(ir,i.health+1),ls(i,tp),i.foodTimer=0):i.food>=18&&i.health<ir?++i.foodTimer>=ep&&(i.health=Math.min(ir,i.health+1),ls(i,tp),i.foodTimer=0):i.food<=0?++i.foodTimer>=ep&&(i.health>vT&&cl(i,1),i.foodTimer=0):i.foodTimer=0}function ET(i,t){if(!t){i.oxygen=Al,i.oxygenTimer=0;return}i.oxygenTimer++,i.oxygen>0?i.oxygenTimer>=xT&&(i.oxygen=Math.max(0,i.oxygen-1),i.oxygenTimer=0):i.oxygenTimer>=yT&&(cl(i,2),i.oxygenTimer=0)}const np=i=>`url(${Pr(`textures/ui/${i}.png`)})`;class AT{constructor(t,e,n=10){y(this,"hearts");y(this,"foods");y(this,"bubbles",[]);y(this,"healthEl");y(this,"hungerEl");y(this,"oxygenEl");this.healthEl=t,this.hungerEl=e,this.oxygenEl=document.getElementById("oxygen"),this.hearts=this.build(t,n),this.foods=this.build(e,n),this.oxygenEl&&(this.bubbles=this.build(this.oxygenEl,n))}build(t,e){t.innerHTML="";const n=[];for(let s=0;s<e;s++){const r=document.createElement("div");r.className="hud-icon",t.appendChild(r),n.push(r)}return n}render(t){if(this.fill(this.hearts,t.health,"heart"),this.fill(this.foods,t.food,"food"),this.healthEl.classList.toggle("low",t.health<=4),this.hungerEl.classList.toggle("low",t.food<=4),this.oxygenEl){const e=t.oxygen<Al;if(this.oxygenEl.style.display=e?"flex":"none",e)for(let n=0;n<this.bubbles.length;n++)this.bubbles[n].style.backgroundImage=np(t.oxygen>n?"bubble_full":"bubble_empty")}}fill(t,e,n){for(let s=0;s<t.length;s++){const r=e-s*2,o=r>=2?"full":r===1?"half":"empty";t[s].style.backgroundImage=np(`${n}_${o}`)}}}function hl(i,t,e,n){const s=i[t];if(!e)return i[t]=null,s;if(!s)return i[t]=e,null;if(Lr(s,e)){const r=Math.max(0,n(s.id)-s.count),o=Math.min(r,e.count);return s.count+=o,e.count-=o,e.count>0?e:null}return i[t]=e,s}function ul(i,t,e,n){const s=i[t];if(!e){if(!s)return null;const r=Math.ceil(s.count/2),o=s.count-r;return i[t]=o>0?{...s,count:o}:null,{...s,count:r}}return s?Lr(s,e)?s.count<n(s.id)?(s.count+=1,e.count-=1,e.count>0?e:null):e:(i[t]=e,s):(i[t]={...e,count:1},e.count-=1,e.count>0?e:null)}function Uc(i,t,e,n,s=0,r=e.length){const o=i[t];if(!o)return;const a=Tl(e,o,n(o.id),s,r);i[t]=a>0?{...o,count:a}:null}function RT(i,t,e){if(!t)return t;const n=t.id,s=e(n),r=i.filter(c=>{const h=c.get();return!h||Lr(h,t)&&h.count<s});if(r.length===0)return t;const o=Math.floor(t.count/r.length);if(o===0)return t;let a=0;for(const c of r){const h=c.get(),u=h?h.count:0,d=Math.min(o,s-u);d<=0||(c.set(t.dur===void 0?{id:n,count:u+d}:{id:n,count:u+d,dur:t.dur}),a+=d)}const l=t.count-a;return l>0?t.dur===void 0?{id:n,count:l}:{id:n,count:l,dur:t.dur}:null}function CT(i,t,e){if(!t)return t;const n=t.id,s=e(n);let r=t.count;for(const o of i){if(r<=0)break;const a=o.get();a?Lr(a,t)&&a.count<s&&(a.count+=1,r--):(o.set(t.dur===void 0?{id:n,count:1}:{id:n,count:1,dur:t.dur}),r--)}return r>0?t.dur===void 0?{id:n,count:r}:{id:n,count:r,dur:t.dur}:null}const Sa=["PPP"," S "," S "],ba=["PP","PS"," S"],Ta=["P","S","S"],Ea=["P","P","S"],Aa=["PP"," S"," S"];function De(i,t,e){return{type:"shaped",pattern:i,key:{P:t,S:"stick"},result:{item:e,count:1}}}const DT=[{type:"shapeless",ingredients:["oak_log"],result:{item:"oak_planks",count:4}},{type:"shapeless",ingredients:["spruce_log"],result:{item:"oak_planks",count:4}},{type:"shapeless",ingredients:["flint","iron_ingot"],result:{item:"flint_and_steel",count:1}},{type:"shaped",pattern:["#","#"],key:{"#":"oak_planks"},result:{item:"stick",count:4}},{type:"shaped",pattern:["##","##"],key:{"#":"oak_planks"},result:{item:"crafting_table",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"string"},result:{item:"wool",count:1}},{type:"shaped",pattern:["###","# #","###"],key:{"#":"cobblestone"},result:{item:"furnace",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"sand"},result:{item:"sandstone",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"nether_quartz"},result:{item:"quartz_block",count:1}},{type:"shaped",pattern:["###","###","###"],key:{"#":"coal"},result:{item:"coal_block",count:1}},{type:"shapeless",ingredients:["coal_block"],result:{item:"coal",count:9}},{type:"shaped",pattern:["###","###","###"],key:{"#":"iron_ingot"},result:{item:"iron_block",count:1}},{type:"shapeless",ingredients:["iron_block"],result:{item:"iron_ingot",count:9}},{type:"shaped",pattern:["###","###","###"],key:{"#":"diamond"},result:{item:"diamond_block",count:1}},{type:"shapeless",ingredients:["diamond_block"],result:{item:"diamond",count:9}},{type:"shaped",pattern:["C","S"],key:{C:"coal",S:"stick"},result:{item:"torch",count:4}},{type:"shaped",pattern:["F","S","E"],key:{F:"flint",S:"stick",E:"feather"},result:{item:"arrow",count:4}},{type:"shaped",pattern:[" TS","T S"," TS"],key:{T:"stick",S:"string"},result:{item:"bow",count:1}},De(Sa,"oak_planks","wooden_pickaxe"),De(ba,"oak_planks","wooden_axe"),De(Ta,"oak_planks","wooden_shovel"),De(Ea,"oak_planks","wooden_sword"),De(Aa,"oak_planks","wooden_hoe"),De(Sa,"cobblestone","stone_pickaxe"),De(ba,"cobblestone","stone_axe"),De(Ta,"cobblestone","stone_shovel"),De(Ea,"cobblestone","stone_sword"),De(Aa,"cobblestone","stone_hoe"),De(Sa,"iron_ingot","iron_pickaxe"),De(ba,"iron_ingot","iron_axe"),De(Ta,"iron_ingot","iron_shovel"),De(Ea,"iron_ingot","iron_sword"),De(Aa,"iron_ingot","iron_hoe"),De(Sa,"diamond","diamond_pickaxe"),De(ba,"diamond","diamond_axe"),De(Ta,"diamond","diamond_shovel"),De(Ea,"diamond","diamond_sword"),De(Aa,"diamond","diamond_hoe")];function D0(i){return i&&i.count>=1?i.item:null}function PT(i){return i.map(t=>t.map(D0))}function LT(i){const t=[];for(const e of i)for(const n of e){const s=D0(n);s&&t.push(s)}return t}function P0(i){let t=1/0,e=-1,n=1/0,s=-1;for(let o=0;o<i.length;o++)for(let a=0;a<i[o].length;a++)i[o][a]!==null&&(o<t&&(t=o),o>e&&(e=o),a<n&&(n=a),a>s&&(s=a));if(e===-1)return null;const r=[];for(let o=t;o<=e;o++)r.push(i[o].slice(n,s+1));return r}function kT(i){return i.pattern.map(t=>Array.from(t,e=>e===" "?null:i.key[e]??null))}function IT(i){return i.map(t=>[...t].reverse())}function ip(i,t){if(i.length!==t.length)return!1;for(let e=0;e<i.length;e++){if(i[e].length!==t[e].length)return!1;for(let n=0;n<i[e].length;n++)if(i[e][n]!==t[e][n])return!1}return!0}function UT(i,t){const e=P0(kT(i));return e?ip(e,t)||ip(IT(e),t):!1}function sp(i){const t=new Map;for(const e of i)t.set(e,(t.get(e)??0)+1);return t}function NT(i,t){if(i.ingredients.length!==t.length)return!1;const e=sp(i.ingredients),n=sp(t);if(e.size!==n.size)return!1;for(const[s,r]of e)if(n.get(s)!==r)return!1;return!0}function FT(i){const t=LT(i);if(t.length===0)return null;const e=P0(PT(i));for(const n of DT)if(n.type==="shaped"){if(e&&UT(n,e))return n}else if(NT(n,t))return n;return null}function OT(i){const t=FT(i);return t?{item:t.result.item,count:t.result.count}:null}const iu=new Map,su=new Map;for(const i of Ue)i.id!==0&&(iu.set(i.id,i.name),su.set(i.name,i.id));for(const i of vb){const t=xb(i);t&&(iu.set(i,t),su.set(t,i))}function rp(i){const t=i.map(s=>s.map(r=>{if(!r)return null;const o=iu.get(r.id);return o?{item:o,count:r.count}:null})),e=OT(t);if(!e)return null;const n=su.get(e.item);return n==null?null:{id:n,count:e.count}}function BT(i){for(const t of i)for(let e=0;e<t.length;e++){const n=t[e];n&&(n.count-=1,n.count<=0&&(t[e]=null))}}const On=i=>ps(i),Bn=9,Nc=27,zT=420,HT=12;class WT{constructor(t){y(this,"root");y(this,"inv",null);y(this,"gridN",2);y(this,"craft",[]);y(this,"cursor",null);y(this,"open",!1);y(this,"mode","survival");y(this,"creativeCategory","building");y(this,"creativeIds",[]);y(this,"cursorEl");y(this,"cursorIcon");y(this,"cursorCnt");y(this,"titleEl");y(this,"standardEl");y(this,"creativeEl");y(this,"creativeGridEl");y(this,"creativeSearchEl");y(this,"hintEl");y(this,"cgridEl");y(this,"outCell");y(this,"trashCell");y(this,"mainCells",[]);y(this,"hotbarCells",[]);y(this,"craftCells",[]);y(this,"creativeCells",[]);y(this,"creativeTabButtons",[]);y(this,"drag",null);y(this,"onChange",null);y(this,"onClose",null);y(this,"onSelectHotbar",null);this.root=t,t.classList.add("hidden"),t.innerHTML=`
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
      </div>`,this.titleEl=t.querySelector(".inv-title"),this.standardEl=t.querySelector(".inv-standard"),this.creativeEl=t.querySelector(".creative-view"),this.creativeGridEl=t.querySelector(".creative-grid"),this.creativeSearchEl=t.querySelector(".creative-search"),this.hintEl=t.querySelector(".inv-hint"),t.querySelector(".inv-close").addEventListener("click",()=>{var r;return(r=this.onClose)==null?void 0:r.call(this)}),this.cgridEl=t.querySelector(".inv-cgrid");const e=t.querySelector(".inv-main"),n=t.querySelector(".inv-hotbar");for(let r=0;r<Nc;r++)this.mainCells.push(this.makeSlot(e,"main",r));for(let r=0;r<Bn;r++)this.hotbarCells.push(this.makeSlot(n,"hotbar",r));this.outCell=this.makeSlot(t.querySelector(".inv-out-wrap"),"output",0),this.outCell.el.classList.add("inv-out"),this.trashCell=this.makeSlot(t.querySelector(".creative-trash-wrap"),"trash",0),this.trashCell.el.classList.add("creative-trash"),this.trashCell.icon.textContent="×",this.trashCell.icon.classList.add("txt"),this.trashCell.el.title="删除物品";const s=t.querySelector(".creative-tabs");for(const r of nu){const o=document.createElement("button");o.className="creative-tab",o.type="button",o.textContent=r.label,o.dataset.category=r.id,o.addEventListener("click",()=>{this.creativeCategory=r.id,this.creativeSearchEl.value="",this.rebuildCreativeCatalog()}),s.appendChild(o),this.creativeTabButtons.push(o)}this.creativeSearchEl.addEventListener("input",()=>this.rebuildCreativeCatalog()),this.cursorEl=document.createElement("div"),this.cursorEl.className="inv-cursor",this.cursorIcon=document.createElement("div"),this.cursorIcon.className="slot-icon",this.cursorCnt=document.createElement("div"),this.cursorCnt.className="slot-count",this.cursorEl.append(this.cursorIcon,this.cursorCnt),this.cursorEl.style.display="none",this.cursorEl.style.pointerEvents="none",document.body.appendChild(this.cursorEl),document.addEventListener("pointermove",r=>{this.open&&(this.cursorEl.style.left=`${r.clientX}px`,this.cursorEl.style.top=`${r.clientY}px`,this.drag&&this.onDragMove(r))}),document.addEventListener("pointerup",r=>{this.open&&this.drag&&this.endDrag(r)}),document.addEventListener("pointercancel",r=>{var o;this.open&&((o=this.drag)==null?void 0:o.pointerId)===r.pointerId&&this.cancelDrag()})}makeSlot(t,e,n){const s=document.createElement("div");s.className="inv-slot",s.dataset.region=e,s.dataset.idx=String(n),s.style.touchAction="none";const r=document.createElement("div");r.className="slot-icon";const o=document.createElement("div");return o.className="slot-count",s.append(r,o),s.addEventListener("pointerdown",a=>{!a.isPrimary||a.pointerType==="mouse"&&a.button!==0&&a.button!==2||(a.preventDefault(),this.beginDrag(e,n,a))}),s.addEventListener("contextmenu",a=>a.preventDefault()),t.appendChild(s),{el:s,icon:r,cnt:o}}isOpen(){return this.open}show(t,e){this.inv=t,this.mode="survival",this.gridN=e,this.craft=Array.from({length:e},()=>Array(e).fill(null)),this.buildCraftGrid(e),this.titleEl.textContent=e>=3?"工作台":"背包",this.standardEl.classList.remove("hidden"),this.creativeEl.classList.add("hidden"),this.hintEl.textContent="轻点拿放 · 长按放一个/拿一半 · Shift 快速转移 · E / Esc 关闭",this.open=!0,this.root.classList.remove("hidden"),this.render()}showCreative(t){this.inv=t,this.mode="creative",this.gridN=0,this.craft=[],this.cursor=null,this.titleEl.textContent="创造模式物品栏",this.standardEl.classList.add("hidden"),this.creativeEl.classList.remove("hidden"),this.hintEl.textContent="左键拿一组 · 右键拿一个 · Shift 放入快捷栏 · 中键可在世界中选方块",this.open=!0,this.root.classList.remove("hidden"),this.rebuildCreativeCatalog(),this.render()}hide(){var e;this.cancelDrag();const t=[];for(const n of this.craft)for(let s=0;s<n.length;s++){const r=n[s];r&&(this.returnOrOverflow(r,t),n[s]=null)}return this.cursor&&(this.mode!=="creative"&&this.returnOrOverflow(this.cursor,t),this.cursor=null),this.open=!1,this.root.classList.add("hidden"),this.cursorEl.style.display="none",(e=this.onChange)==null||e.call(this),t}returnOrOverflow(t,e){const n=this.inv?Tl(this.inv,t,On(t.id)):t.count;n<=0||e.push(t.dur===void 0?{id:t.id,count:n}:{id:t.id,count:n,dur:t.dur})}buildCraftGrid(t){this.cgridEl.innerHTML="",this.cgridEl.style.gridTemplateColumns=`repeat(${t}, 1fr)`,this.craftCells=[];for(let e=0;e<t*t;e++)this.craftCells.push(this.makeSlot(this.cgridEl,"craft",e))}beginDrag(t,e,n){var s,r,o,a,l;if(this.inv){if(this.cursorEl.style.left=`${n.clientX}px`,this.cursorEl.style.top=`${n.clientY}px`,t==="catalog"){const c=this.creativeIds[e],h=ph(c,n.button===2);if(!h)return;if(n.shiftKey){const u=this.inv.slice(0,Bn).findIndex(g=>(g==null?void 0:g.id)===c),d=this.inv.slice(0,Bn).findIndex(g=>g===null),p=u>=0?u:d>=0?d:0;this.inv[p]=ph(c),(s=this.onSelectHotbar)==null||s.call(this,p)}else this.cursor=h;this.render(),(r=this.onChange)==null||r.call(this);return}if(t==="trash"){n.shiftKey&&this.inv.fill(null),this.cursor=null,this.render(),(o=this.onChange)==null||o.call(this);return}if(t==="output"){this.takeOutput(),this.render(),(a=this.onChange)==null||a.call(this);return}if(n.shiftKey){this.quickMoveFrom(t,e),this.render(),(l=this.onChange)==null||l.call(this);return}this.drag={region:t,i:e,right:n.button===2,started:!1,mode:this.cursor?"distribute":"move",swept:[],sweptKeys:new Set,sweptCells:[],pointerId:n.pointerId,touch:n.pointerType==="touch",startX:n.clientX,startY:n.clientY,holdTimer:null,longPressed:!1},this.drag.touch&&this.startTouchHold(this.drag)}}onDragMove(t){const e=this.drag;if(!e||!this.inv||e.pointerId!==t.pointerId||(e.touch&&!e.longPressed&&Math.hypot(t.clientX-e.startX,t.clientY-e.startY)>HT&&this.clearTouchHold(e),e.longPressed))return;const n=this.slotAt(t);if(!e.started){if(!n||n.region===e.region&&n.i===e.i)return;e.started=!0,e.mode==="distribute"?(this.addSwept(e,e.region,e.i),this.addSwept(e,n.region,n.i)):(this.applyClick(e.region,e.i,!1),this.render());return}e.mode==="distribute"&&n&&this.addSwept(e,n.region,n.i)}endDrag(t){var n;const e=this.drag;if(!(!e||e.pointerId!==t.pointerId)){this.clearTouchHold(e),this.drag=null;for(const s of(e==null?void 0:e.sweptCells)??[])s.el.classList.remove("inv-drag-hi");if(this.inv&&!e.longPressed){if(!e.started)this.applyClick(e.region,e.i,e.right);else if(e.mode==="distribute")this.cursor=e.right?CT(e.swept,this.cursor,On):RT(e.swept,this.cursor,On);else{const s=this.slotAt(t);(s==null?void 0:s.region)==="trash"?this.cursor=null:s&&(s.region==="main"||s.region==="hotbar"||s.region==="craft")&&!(s.region===e.region&&s.i===e.i)&&this.applyClick(s.region,s.i,!1)}this.render(),(n=this.onChange)==null||n.call(this)}}}cancelDrag(){if(this.drag){this.clearTouchHold(this.drag);for(const t of this.drag.sweptCells)t.el.classList.remove("inv-drag-hi");this.drag=null}}startTouchHold(t){t.holdTimer=window.setTimeout(()=>{var e;t.holdTimer=null,!(!this.open||this.drag!==t||t.started||!this.inv)&&(t.longPressed=!0,this.applyClick(t.region,t.i,!0),this.render(),(e=this.onChange)==null||e.call(this))},zT)}clearTouchHold(t){t.holdTimer!==null&&(window.clearTimeout(t.holdTimer),t.holdTimer=null)}addSwept(t,e,n){if(e==="output"||e==="catalog"||e==="trash")return;const s=`${e}:${n}`;if(t.sweptKeys.has(s))return;t.sweptKeys.add(s),t.swept.push(this.slotRef(e,n));const r=this.cellOf(e,n);r&&(r.el.classList.add("inv-drag-hi"),t.sweptCells.push(r))}applyClick(t,e,n){if(this.inv){if(t==="craft"){const s=this.gridN,r=this.craft[Math.floor(e/s)],o=e%s;this.cursor=n?ul(r,o,this.cursor,On):hl(r,o,this.cursor,On)}else if(t==="main"||t==="hotbar"){const s=t==="main"?Bn+e:e;this.cursor=n?ul(this.inv,s,this.cursor,On):hl(this.inv,s,this.cursor,On)}}}slotRef(t,e){if(t==="craft"){const r=this.gridN,o=this.craft[Math.floor(e/r)],a=e%r;return{get:()=>o[a],set:l=>o[a]=l}}if(t!=="main"&&t!=="hotbar")throw new Error("只允许拖到背包格");const n=this.inv,s=t==="main"?Bn+e:e;return{get:()=>n[s],set:r=>n[s]=r}}slotAt(t){const e=document.elementFromPoint(t.clientX,t.clientY),n=e==null?void 0:e.closest(".inv-slot");return!n||n.dataset.region===void 0?null:{region:n.dataset.region,i:Number(n.dataset.idx)}}cellOf(t,e){return t==="main"?this.mainCells[e]??null:t==="hotbar"?this.hotbarCells[e]??null:t==="craft"?this.craftCells[e]??null:t==="catalog"?this.creativeCells[e]??null:t==="trash"?this.trashCell:null}quickMoveFrom(t,e){if(this.inv)if(t==="craft"){const n=this.gridN;Uc(this.craft[Math.floor(e/n)],e%n,this.inv,On)}else t==="main"?Uc(this.inv,Bn+e,this.inv,On,0,Bn):t==="hotbar"&&Uc(this.inv,e,this.inv,On,Bn,Bn+Nc)}rebuildCreativeCatalog(){const t=this.creativeSearchEl.value.trim().toLocaleLowerCase(),e=t?T0:tT(this.creativeCategory);this.creativeIds=t?e.filter(n=>io(n).toLocaleLowerCase().includes(t)||String(n)===t):e,this.creativeGridEl.innerHTML="",this.creativeCells=[];for(let n=0;n<this.creativeIds.length;n++){const s=this.makeSlot(this.creativeGridEl,"catalog",n);s.el.title=io(this.creativeIds[n]),this.creativeCells.push(s)}for(const n of this.creativeTabButtons)n.classList.toggle("active",n.dataset.category===this.creativeCategory);this.render()}takeOutput(){const t=rp(this.craft);if(t){if(!this.cursor)this.cursor={id:t.id,count:t.count};else if(this.cursor.id===t.id&&this.cursor.count+t.count<=On(t.id))this.cursor.count+=t.count;else return;BT(this.craft)}}render(){if(!this.inv)return;for(let e=0;e<Nc;e++)this.paint(this.mainCells[e],this.inv[Bn+e]);for(let e=0;e<Bn;e++)this.paint(this.hotbarCells[e],this.inv[e]);const t=this.gridN;for(let e=0;e<this.craftCells.length;e++)this.paint(this.craftCells[e],this.craft[Math.floor(e/t)][e%t]);if(this.paint(this.outCell,rp(this.craft)),this.mode==="creative")for(let e=0;e<this.creativeCells.length;e++)this.paint(this.creativeCells[e],{id:this.creativeIds[e],count:1});this.cursor?(this.cursorEl.style.display="block",this.fill(this.cursorIcon,this.cursorCnt,this.cursor)):this.cursorEl.style.display="none"}paint(t,e){this.fill(t.icon,t.cnt,e)}fill(t,e,n){if(n&&n.count>0){const s=ms(n.id);s?(t.style.backgroundImage=`url(${s})`,t.textContent="",t.classList.remove("txt")):(t.style.backgroundImage="none",t.textContent=io(n.id),t.classList.add("txt")),e.textContent=n.count>1?String(n.count):""}else t.style.backgroundImage="none",t.textContent="",t.classList.remove("txt"),e.textContent=""}}const ru=200,GT=64,L0={[xM]:1,[yM]:r0,[Kh]:o0,[jh]:a0,[Zh]:l0,[Qh]:c0},VT={[Jm]:1600,[EM]:16e3,[wl]:300,[Ml]:300,[_M]:300,[Pm]:300,[Qm]:100,[t0]:200,[e0]:200,[n0]:200,[i0]:200,[s0]:200},k0=i=>L0[i],gh=i=>VT[i]??0,op=i=>gh(i)>0,ap=i=>i in L0;function XT(){return{input:0,inputN:0,fuel:0,fuelN:0,output:0,outputN:0,burn:0,burnMax:0,cook:0}}function I0(i){if(i.inputN<=0)return!1;const t=k0(i.input);return t===void 0?!1:i.outputN===0||i.output===t&&i.outputN<GT}function qT(i){const t=i.burn>0||i.cook>0,e=I0(i);if(i.burn>0&&i.burn--,i.burn===0&&e&&i.fuelN>0&&gh(i.fuel)>0&&(i.burnMax=gh(i.fuel),i.burn=i.burnMax,i.fuelN--,i.fuelN===0&&(i.fuel=0,delete i.fuelDur)),i.burn>0&&e){if(i.cook++,i.cook>=ru){i.cook=0;const n=k0(i.input);i.inputN--,i.inputN===0&&(i.input=0),i.output=n,i.outputN++}}else i.cook=Math.max(0,i.cook-2);return t||i.burn>0||i.cook>0}function $T(i){return i.burn>0||i.fuelN>0&&I0(i)}const Ri=i=>ps(i),Ra=9,lp=27,YT=420,KT=12;class jT{constructor(t){y(this,"root");y(this,"inv",null);y(this,"furnace",null);y(this,"cursor",null);y(this,"open",!1);y(this,"cursorEl");y(this,"cursorIcon");y(this,"cursorCnt");y(this,"inputCell");y(this,"fuelCell");y(this,"outCell");y(this,"flameEl");y(this,"arrowFillEl");y(this,"mainCells",[]);y(this,"hotbarCells",[]);y(this,"touchPress",null);y(this,"onChange",null);y(this,"onClose",null);this.root=t,t.classList.add("hidden"),t.innerHTML=`
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
      </div>`,t.querySelector(".inv-close").addEventListener("click",()=>{var r;return(r=this.onClose)==null?void 0:r.call(this)});const e=r=>this.bindSlot(t.querySelector(r));this.inputCell=e(".fur-input"),this.fuelCell=e(".fur-fuel"),this.outCell=e(".fur-out"),this.inputCell.el.addEventListener("pointerdown",r=>this.onFurnacePointerDown("input",r)),this.fuelCell.el.addEventListener("pointerdown",r=>this.onFurnacePointerDown("fuel",r)),this.outCell.el.addEventListener("pointerdown",r=>this.onFurnacePointerDown("output",r)),this.flameEl=t.querySelector(".fur-flame-fill"),this.arrowFillEl=t.querySelector(".fur-arrow-fill");const n=t.querySelector(".inv-main"),s=t.querySelector(".inv-hotbar");for(let r=0;r<lp;r++)this.mainCells.push(this.makeInvSlot(n,"main",r));for(let r=0;r<Ra;r++)this.hotbarCells.push(this.makeInvSlot(s,"hotbar",r));this.cursorEl=document.createElement("div"),this.cursorEl.className="inv-cursor",this.cursorIcon=document.createElement("div"),this.cursorIcon.className="slot-icon",this.cursorCnt=document.createElement("div"),this.cursorCnt.className="slot-count",this.cursorEl.append(this.cursorIcon,this.cursorCnt),this.cursorEl.style.display="none",this.cursorEl.style.pointerEvents="none",document.body.appendChild(this.cursorEl),document.addEventListener("pointermove",r=>{this.open&&(this.cursorEl.style.left=`${r.clientX}px`,this.cursorEl.style.top=`${r.clientY}px`,this.updateTouchPressMove(r))}),document.addEventListener("pointerup",r=>this.endTouchPress(r)),document.addEventListener("pointercancel",r=>{var o;((o=this.touchPress)==null?void 0:o.pointerId)===r.pointerId&&this.cancelTouchPress()})}bindSlot(t){t.classList.add("inv-slot"),t.style.touchAction="none";const e=document.createElement("div");e.className="slot-icon";const n=document.createElement("div");return n.className="slot-count",t.append(e,n),t.addEventListener("contextmenu",s=>s.preventDefault()),{el:t,icon:e,cnt:n}}makeInvSlot(t,e,n){const s=document.createElement("div");s.className="inv-slot",s.style.touchAction="none";const r=document.createElement("div");r.className="slot-icon";const o=document.createElement("div");return o.className="slot-count",s.append(r,o),s.addEventListener("pointerdown",a=>{this.onInventoryPointerDown(e,n,a)}),s.addEventListener("contextmenu",a=>a.preventDefault()),t.appendChild(s),{el:s,icon:r,cnt:o}}isOpen(){return this.open}show(t,e){this.inv=t,this.furnace=e,this.open=!0,this.root.classList.remove("hidden"),this.render()}hide(){var e;this.cancelTouchPress();const t=[];if(this.cursor){const n=this.inv?Tl(this.inv,this.cursor,Ri(this.cursor.id)):this.cursor.count;n>0&&t.push(this.cursor.dur===void 0?{id:this.cursor.id,count:n}:{id:this.cursor.id,count:n,dur:this.cursor.dur}),this.cursor=null}return this.open=!1,this.root.classList.add("hidden"),this.cursorEl.style.display="none",(e=this.onChange)==null||e.call(this),t}onInventoryPointerDown(t,e,n){this.isSupportedPointer(n)&&(n.preventDefault(),this.positionCursor(n),n.pointerType==="touch"?this.beginTouchPress(n,s=>this.performInventoryClick(t,e,s,!1)):this.performInventoryClick(t,e,n.button===2,n.shiftKey))}onFurnacePointerDown(t,e){this.isSupportedPointer(e)&&(e.preventDefault(),this.positionCursor(e),e.pointerType==="touch"?this.beginTouchPress(e,n=>this.performFurnaceClick(t,n)):this.performFurnaceClick(t,e.button===2))}isSupportedPointer(t){return t.isPrimary&&(t.pointerType!=="mouse"||t.button===0||t.button===2)}positionCursor(t){this.cursorEl.style.left=`${t.clientX}px`,this.cursorEl.style.top=`${t.clientY}px`}performInventoryClick(t,e,n,s){var o;if(!this.inv)return;const r=t==="main"?Ra+e:e;s?this.shiftToFurnace(r):this.cursor=n?ul(this.inv,r,this.cursor,Ri):hl(this.inv,r,this.cursor,Ri),this.render(),(o=this.onChange)==null||o.call(this)}shiftToFurnace(t){const e=this.furnace,n=this.inv;if(!e||!n)return;const s=n[t];if(!s)return;const r=op(s.id),o=e.fuelN<=0,a=!o&&Lr({id:e.fuel,dur:e.fuelDur},s);if(r&&(o||a)){const l=Ri(s.id)-e.fuelN,c=Math.min(l,s.count);if(c<=0)return;o&&(e.fuel=s.id,s.dur===void 0?delete e.fuelDur:e.fuelDur=s.dur),e.fuelN+=c,s.count-=c,s.count<=0&&(n[t]=null)}else if(!r&&ap(s.id)&&(e.input===0||e.input===s.id)){const l=Ri(s.id)-e.inputN,c=Math.min(l,s.count);e.input=s.id,e.inputN+=c,s.count-=c,s.count<=0&&(n[t]=null)}}performFurnaceClick(t,e){var s;const n=this.furnace;if(n){if(t==="output")this.takeOutput();else{const r=t==="input"?n.input:n.fuel,o=t==="input"?n.inputN:n.fuelN,a=[o>0?t==="fuel"&&n.fuelDur!==void 0?{id:r,count:o,dur:n.fuelDur}:{id:r,count:o}:null];if(t==="fuel"&&this.cursor&&!op(this.cursor.id)||t==="input"&&this.cursor&&!ap(this.cursor.id))return;this.cursor=e?ul(a,0,this.cursor,Ri):hl(a,0,this.cursor,Ri);const l=a[0];t==="input"?(n.input=(l==null?void 0:l.id)??0,n.inputN=(l==null?void 0:l.count)??0):(n.fuel=(l==null?void 0:l.id)??0,n.fuelN=(l==null?void 0:l.count)??0,(l==null?void 0:l.dur)===void 0?delete n.fuelDur:n.fuelDur=l.dur)}this.render(),(s=this.onChange)==null||s.call(this)}}beginTouchPress(t,e){this.cancelTouchPress();const n={pointerId:t.pointerId,startX:t.clientX,startY:t.clientY,holdTimer:null,moved:!1,longPressed:!1,activate:e};this.touchPress=n,n.holdTimer=window.setTimeout(()=>{n.holdTimer=null,!(!this.open||this.touchPress!==n||n.moved)&&(n.longPressed=!0,n.activate(!0))},YT)}updateTouchPressMove(t){const e=this.touchPress;!e||e.pointerId!==t.pointerId||e.longPressed||Math.hypot(t.clientX-e.startX,t.clientY-e.startY)<=KT||(e.moved=!0,this.clearTouchPressTimer(e))}endTouchPress(t){const e=this.touchPress;!e||e.pointerId!==t.pointerId||(this.clearTouchPressTimer(e),this.touchPress=null,!e.moved&&!e.longPressed&&e.activate(!1))}cancelTouchPress(){this.touchPress&&(this.clearTouchPressTimer(this.touchPress),this.touchPress=null)}clearTouchPressTimer(t){t.holdTimer!==null&&(window.clearTimeout(t.holdTimer),t.holdTimer=null)}takeOutput(){const t=this.furnace;!t||t.outputN<=0||(this.cursor?this.cursor.id===t.output&&this.cursor.count+t.outputN<=Ri(t.output)&&(this.cursor.count+=t.outputN,t.output=0,t.outputN=0):(this.cursor={id:t.output,count:t.outputN},t.output=0,t.outputN=0))}render(){if(!this.inv||!this.furnace)return;const t=this.furnace;for(let e=0;e<lp;e++)this.fill(this.mainCells[e],this.inv[Ra+e]);for(let e=0;e<Ra;e++)this.fill(this.hotbarCells[e],this.inv[e]);this.fill(this.inputCell,t.inputN>0?{id:t.input,count:t.inputN}:null),this.fill(this.fuelCell,t.fuelN>0?t.fuelDur===void 0?{id:t.fuel,count:t.fuelN}:{id:t.fuel,count:t.fuelN,dur:t.fuelDur}:null),this.fill(this.outCell,t.outputN>0?{id:t.output,count:t.outputN}:null),this.flameEl.style.height=`${t.burnMax>0?Math.round(t.burn/t.burnMax*100):0}%`,this.arrowFillEl.style.width=`${Math.round(t.cook/ru*100)}%`,this.cursor?(this.cursorEl.style.display="block",this.fillRaw(this.cursorIcon,this.cursorCnt,this.cursor)):this.cursorEl.style.display="none"}fill(t,e){this.fillRaw(t.icon,t.cnt,e)}fillRaw(t,e,n){if(n&&n.count>0){const s=ms(n.id);s?(t.style.backgroundImage=`url(${s})`,t.textContent="",t.classList.remove("txt")):(t.style.backgroundImage="none",t.textContent=io(n.id),t.classList.add("txt")),e.textContent=n.count>1?String(n.count):""}else t.style.backgroundImage="none",t.textContent="",t.classList.remove("txt"),e.textContent=""}}const Fc=21,Oc=21;function cp(i,t,e,n,s,r){const o=(m,f)=>r==="x"?[e+m,n+f,s]:[e,n+f,s+m],a=(m,f)=>t(...o(m,f)),l=(m,f)=>i(...o(m,f));if(!a(0,0))return null;let c=0;for(;-c<Fc&&a(c-1,0);)c--;let h=0;for(;h<Fc&&a(h+1,0);)h++;let u=0;for(;-u<Oc&&a(0,u-1);)u--;let d=0;for(;d<Oc&&a(0,d+1);)d++;const p=h-c+1,g=d-u+1;if(p<2||p>Fc||g<3||g>Oc)return null;for(let m=c;m<=h;m++)for(let f=u;f<=d;f++)if(!a(m,f))return null;for(let m=u;m<=d;m++)if(!l(c-1,m)||!l(h+1,m))return null;for(let m=c;m<=h;m++)if(!l(m,u-1)||!l(m,d+1))return null;const v=[];for(let m=c;m<=h;m++)for(let f=u;f<=d;f++)v.push(o(m,f));return{axis:r,inner:v}}function U0(i,t,e,n,s){return cp(i,t,e,n,s,"x")??cp(i,t,e,n,s,"z")}const N0=31,ZT=127,QT=191;function JT(i,t,e,n,s){const r=(c,h,u)=>i(c,h,u)===18,o=(c,h,u)=>{const d=i(c,h,u);return d===0||d===25},a=[];s&&a.push(s),a.push([t,e+1,n],[t,e-1,n],[t+1,e,n],[t-1,e,n],[t,e,n+1],[t,e,n-1]);const l=new Set;for(const[c,h,u]of a){const d=`${c},${h},${u}`;if(l.has(d)||(l.add(d),!o(c,h,u)))continue;const p=U0(r,o,c,h,u);if(p)return p.inner}return null}function tE(i,t,e){return i==="overworld"?[Math.floor(t/8),Math.floor(e/8)]:[Math.floor(t*8),Math.floor(e*8)]}function eE(i,t,e,n){if(t==="overworld"){for(let o=QT;o>1;o--)if(ke(i(e,o,n))&&!ke(i(e,o+1,n)))return o+1;return null}const s=N0+2,r=ZT-8;for(let o=s;o<=r;o++){if(!ke(i(e,o-1,n)))continue;let a=!1;for(let l=0;l<3;l++)if(tl(i(e,o+l,n))){a=!0;break}if(!a)return o}return null}function nE(i,t,e,n){let s=eE(i,t,e,n),r=!1;s===null&&(s=t==="nether"?N0+10:64,r=!0);const o=new Map,a=(d,p,g)=>`${d},${p},${g}`,l=(d,p,g,v)=>{o.set(a(d,p,g),[d,p,g,v])},c=e,h=e+1,u=s+2;for(let d=e-1;d<=e+2;d++)for(let p=s-1;p<=s+3;p++)for(let g=n-1;g<=n+1;g++)l(d,p,g,0);for(let d=e-1;d<=e+2;d++)l(d,s-1,n,Dn),l(d,s+3,n,Dn);for(let d=s-1;d<=s+3;d++)l(e-1,d,n,Dn),l(e+2,d,n,Dn);for(let d=c;d<=h;d++)for(let p=s;p<=u;p++)l(d,p,n,Li);if(l(c,s-1,n-1,Dn),l(h,s-1,n-1,Dn),r)for(let d=e-1;d<=e+2;d++)for(let p=n-1;p<=n+1;p++)l(d,s-1,p,Dn);return{edits:[...o.values()],spawn:{x:c+.5,y:s,z:n+.5}}}const Bc=600;class iE{constructor(t){y(this,"geom",new qe);y(this,"pos",new Float32Array(Bc*3));y(this,"col",new Float32Array(Bc*3));y(this,"posAttr");y(this,"colAttr");y(this,"points");this.posAttr=new me(this.pos,3),this.colAttr=new me(this.col,3),this.posAttr.setUsage(td),this.colAttr.setUsage(td),this.geom.setAttribute("position",this.posAttr),this.geom.setAttribute("color",this.colAttr),this.geom.setDrawRange(0,0);const e=new Nh({size:.13,vertexColors:!0,sizeAttenuation:!0,transparent:!0,depthWrite:!1});this.points=new Mm(this.geom,e),this.points.layers.set(xo),this.points.frustumCulled=!1,t.add(this.points)}sync(t){const e=Math.min(t.length,Bc);for(let n=0;n<e;n++){const s=t[n];this.pos[n*3]=s.x,this.pos[n*3+1]=s.y,this.pos[n*3+2]=s.z,this.col[n*3]=s.r,this.col[n*3+1]=s.g,this.col[n*3+2]=s.b}this.geom.setDrawRange(0,e),this.posAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0}}const mi={extent:900,weatherTextureSize:128,detailTextureSize:64,standardSteps:36,highSteps:64,reflectionSteps:20};function zc(i){return i==="high"?mi.highSteps:i==="standard"?mi.standardSteps:0}const Hc=(i,t)=>(i%t+t)%t,sE=(i,t,e)=>{let n=Math.imul(i^1757159915,668265261);return n=Math.imul(n^t,374761393),n=Math.imul(n^e,461845907),n^=n>>>15,n=Math.imul(n,2246822507),n^=n>>>13,(n>>>0)/4294967295},Wc=i=>i*i*(3-2*i),rE=(i,t,e,n)=>{const s=Math.floor(i),r=Math.floor(t),o=Math.floor(e),a=Wc(i-s),l=Wc(t-r),c=Wc(e-o),h=(f,x,_)=>sE(Hc(s+f,n),Hc(r+x,n),Hc(o+_,n)),u=h(0,0,0)*(1-a)+h(1,0,0)*a,d=h(0,1,0)*(1-a)+h(1,1,0)*a,p=h(0,0,1)*(1-a)+h(1,0,1)*a,g=h(0,1,1)*(1-a)+h(1,1,1)*a,v=u*(1-l)+d*l,m=p*(1-l)+g*l;return v*(1-c)+m*c};function oE(i,t,e){let n=0,s=0,r=1;for(const o of[2,4,8,16])n+=rE(i*o,t*o,e*o,o)*r,s+=r,r*=.52;return n/s}function aE(i=mi.detailTextureSize){if(!Number.isInteger(i)||i<16||i&i-1)throw new Error("cloud volume texture size must be a power of two >= 16");const t=new Float32Array(i*i*i);let e=1/0,n=-1/0,s=0;for(let a=0;a<i;a++)for(let l=0;l<i;l++)for(let c=0;c<i;c++){const h=oE(c/i,l/i,a/i);t[s++]=h,e=Math.min(e,h),n=Math.max(n,h)}const r=new Uint8Array(t.length),o=Math.max(1e-6,n-e);for(let a=0;a<t.length;a++)r[a]=Math.round((t[a]-e)/o*255);return r}function lE(i=mi.weatherTextureSize){const t=new Uh(Km(i),i,i,Mn);return t.name="mineworld-cloud-weather",t.wrapS=bn,t.wrapT=bn,t.magFilter=Se,t.minFilter=fi,t.generateMipmaps=!0,t.colorSpace=yn,t.needsUpdate=!0,t}function cE(i=mi.detailTextureSize){const t=new im(aE(i),i,i,i);return t.name="mineworld-cloud-detail-3d",t.format=$p,t.type=xi,t.wrapS=bn,t.wrapT=bn,t.wrapR=bn,t.magFilter=Se,t.minFilter=Se,t.unpackAlignment=1,t.colorSpace=yn,t.needsUpdate=!0,t}const hE=`
varying vec3 vCloudExit;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vCloudExit = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`.trim(),uE=`
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
`.trim(),dE=280,hp=7.4,up=8.8,dp=32,Gc=`
varying vec2 vDisc;
void main() {
  vDisc = uv * 2.0 - 1.0;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`.trim(),fE=`
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
`.trim(),pE=`
uniform float uVisibility;
varying vec2 vDisc;
void main() {
  float radius = length(vDisc);
  if (radius >= 1.0) discard;
  float glow = pow(1.0 - radius, 2.6) * 0.075 * uVisibility;
  gl_FragColor = vec4(vec3(1.0, 0.78, 0.38) * glow, 1.0);
  #include <colorspace_fragment>
}
`.trim(),mE=`
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
`.trim();function gE(){const t=new Float32Array(2550),e=new Float32Array(850*3),n=310;let s=12345;const r=()=>(s=s*1664525+1013904223>>>0,s/4294967296);for(let c=0;c<850;c++){const h=r()*2-1,u=r()*Math.PI*2,d=Math.sqrt(1-h*h);t[c*3]=Math.cos(u)*d*n,t[c*3+1]=Math.sin(u)*d*n,t[c*3+2]=h*n;const p=.35+r()*.65;e[c*3]=p,e[c*3+1]=p,e[c*3+2]=Math.min(1,p*(.92+r()*.16))}const o=new qe;o.setAttribute("position",new me(t,3)),o.setAttribute("color",new me(e,3));const a=new Nh({size:1.7,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),l=new Mm(o,a);return l.frustumCulled=!1,l}function vE(){const i=document.createElement("canvas");i.width=i.height=16;const t=i.getContext("2d");return t.fillStyle="#fff6c0",t.fillRect(1,1,14,14),t.fillStyle="#ffe25a",t.fillRect(3,3,10,10),t.fillStyle="#ffcf26",t.fillRect(5,5,6,6),F0(i)}function _E(){const i=document.createElement("canvas");i.width=i.height=16;const t=i.getContext("2d");return t.fillStyle="#eef2f7",t.fillRect(2,2,12,12),t.fillStyle="#c2ccd8",t.fillRect(5,4,3,3),t.fillRect(9,7,2,2),t.fillRect(4,9,2,3),t.fillRect(10,11,2,2),F0(i)}function F0(i){const t=new yl(i);return t.magFilter=de,t.minFilter=de,t.colorSpace=ue,t}function Ca(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Vc(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=Ca(e,n),c=Ca(e+1,n),h=Ca(e,n+1),u=Ca(e+1,n+1);return l*(1-o)*(1-a)+c*o*(1-a)+h*(1-o)*a+u*o*a}function xE(i,t){return Vc(i,t)*.6+Vc(i*2.3+5.1,t*2.3-3.7)*.3+Vc(i*4.7,t*4.7)*.1}const ui=16,yE=5,Da=28,wE=232,fp=.18,ME=.62,SE=.72;function bE(i,t){return xE(i*fp,t*fp)>ME}const TE=[{o:[[1,-1,-1],[1,1,-1],[1,1,1],[1,-1,1]],s:.82},{o:[[-1,-1,1],[-1,1,1],[-1,1,-1],[-1,-1,-1]],s:.82},{o:[[-1,1,-1],[-1,1,1],[1,1,1],[1,1,-1]],s:1},{o:[[-1,-1,1],[-1,-1,-1],[1,-1,-1],[1,-1,1]],s:.6},{o:[[1,-1,1],[1,1,1],[-1,1,1],[-1,-1,1]],s:.88},{o:[[-1,-1,-1],[-1,1,-1],[1,1,-1],[1,-1,-1]],s:.88}];function EE(i,t,e,n,s,r,o,a,l){const c=o/2,h=a/2,u=l/2;for(const d of TE){const p=i.length/3;for(const[g,v,m]of d.o)i.push(n+g*c,s+v*h,r+m*u),t.push(d.s,d.s,d.s);e.push(p,p+1,p+2,p,p+2,p+3)}}class AE{constructor(t){y(this,"sun");y(this,"moon");y(this,"realSun");y(this,"sunGlow");y(this,"realMoon");y(this,"voxelClouds");y(this,"realClouds");y(this,"cloudUniforms");y(this,"sunUniforms",{uVisibility:{value:1}});y(this,"sunGlowUniforms",{uVisibility:{value:1}});y(this,"moonUniforms",{uVisibility:{value:1}});y(this,"stars");y(this,"starGroup");y(this,"dir",new I);y(this,"drift",0);y(this,"cloudOriginX",NaN);y(this,"cloudOriginZ",NaN);y(this,"lq","off");y(this,"dim","overworld");const e=r=>new ye({map:r,transparent:!0,depthWrite:!1,fog:!1});this.sun=new Jt(new hn(46,46),e(vE())),this.moon=new Jt(new hn(38,38),e(_E())),this.realSun=new Jt(new hn(hp,hp),new tn({uniforms:this.sunUniforms,vertexShader:Gc,fragmentShader:fE,transparent:!0,depthWrite:!1})),this.sunGlow=new Jt(new hn(dp,dp),new tn({uniforms:this.sunGlowUniforms,vertexShader:Gc,fragmentShader:pE,transparent:!0,depthWrite:!1,blending:th})),this.realMoon=new Jt(new hn(up,up),new tn({uniforms:this.moonUniforms,vertexShader:Gc,fragmentShader:mE,transparent:!0,depthWrite:!1})),this.realSun.layers.set(Jr),this.sunGlow.layers.set(Jr),this.realSun.visible=this.sunGlow.visible=this.realMoon.visible=!1;const n=new ye({vertexColors:!0,color:16777215,transparent:!0,opacity:.85,depthWrite:!1,side:Qe});this.voxelClouds=new Jt(new qe,n),this.voxelClouds.frustumCulled=!1,this.cloudUniforms={uCloudWeather:{value:lE()},uCloudDetail3D:{value:cE()},uTime:{value:0},uStepCount:{value:zc("standard")},uTint:{value:new Et(1,1,1)},uSunDir:{value:new I(.5,.8,.28)}};const s=new tn({uniforms:this.cloudUniforms,vertexShader:hE,fragmentShader:uE,transparent:!0,depthWrite:!1,side:Ge});this.realClouds=new Jt(new en(mi.extent,mi.extent,mi.extent),s),this.realClouds.frustumCulled=!1,this.realClouds.visible=!1,this.realClouds.onBeforeRender=(r,o,a)=>{const l=zc(this.lq);this.cloudUniforms.uStepCount.value=a.layers.isEnabled(Jr)?l:Math.min(l,mi.reflectionSteps)},this.stars=gE(),this.starGroup=new dn,this.starGroup.add(this.stars),this.stars.renderOrder=-900;for(const r of[this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon])r.renderOrder=-850;this.realClouds.renderOrder=-800,this.voxelClouds.renderOrder=-800;for(const r of[this.sun,this.moon,this.realMoon,this.voxelClouds,this.realClouds,this.starGroup,this.stars])r.layers.set(co);t.add(this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon,this.voxelClouds,this.realClouds,this.starGroup)}setDimension(t){if(this.dim=t,t==="nether")for(const e of[this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon,this.voxelClouds,this.realClouds,this.starGroup])e.visible=!1;else this.starGroup.visible=!0,this.setLightingQuality(this.lq)}setLightingQuality(t){if(this.lq=t,this.dim==="nether"){for(const n of[this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon,this.voxelClouds,this.realClouds,this.starGroup])n.visible=!1;return}const e=t!=="off";this.cloudUniforms.uStepCount.value=zc(t),this.voxelClouds.visible=!e,this.realClouds.visible=e,this.sun.visible=!e,this.moon.visible=!e,this.realSun.visible=e,this.sunGlow.visible=e,this.realMoon.visible=e}rebuildVoxelClouds(t,e){const n=[],s=[],r=[],o=ui-1;for(let l=0;l<Da;l++)for(let c=0;c<Da;c++)bE(t+l,e+c)&&EE(n,s,r,l*ui+ui/2,0,c*ui+ui/2,o,yE,o);const a=new qe;a.setAttribute("position",new Fe(n,3)),a.setAttribute("color",new Fe(s,3)),a.setIndex(r),this.voxelClouds.geometry.dispose(),this.voxelClouds.geometry=a}update(t,e,n){if(this.dim==="nether")return;const s=t/ln*Math.PI*2;this.dir.set(Math.cos(s),Math.sin(s),.1).normalize();const r=dE;this.sun.position.copy(e).addScaledVector(this.dir,r),this.sun.lookAt(e),this.moon.position.copy(e).addScaledVector(this.dir,-r),this.moon.lookAt(e),this.realSun.position.copy(this.sun.position),this.realSun.lookAt(e),this.sunGlow.position.copy(this.sun.position),this.sunGlow.lookAt(e),this.realMoon.position.copy(this.moon.position),this.realMoon.lookAt(e),this.sunUniforms.uVisibility.value=Gn.smoothstep(this.dir.y,-.055,.025),this.sunGlowUniforms.uVisibility.value=this.sunUniforms.uVisibility.value,this.moonUniforms.uVisibility.value=Gn.smoothstep(-this.dir.y,-.055,.025),this.drift+=SE*Math.max(0,n),this.starGroup.position.copy(e),this.starGroup.rotation.z=s;const o=$h(t)/11;if(this.stars.material.opacity=Math.pow(o,1.5)*.9,this.realClouds.visible){this.realClouds.position.copy(e),this.cloudUniforms.uTime.value=this.drift;const c=Ba(t).worldTint;this.cloudUniforms.uTint.value.setRGB(c[0],c[1],c[2],ue),this.cloudUniforms.uSunDir.value.copy(this.dir);return}const a=Math.floor((e.x-this.drift)/ui)-Da/2,l=Math.floor(e.z/ui)-Da/2;(a!==this.cloudOriginX||l!==this.cloudOriginZ)&&(this.rebuildVoxelClouds(a,l),this.cloudOriginX=a,this.cloudOriginZ=l),this.voxelClouds.position.set(a*ui+this.drift,wE,l*ui)}}const RE=16,CE={1:[.54,.54,.54],2:[.55,.42,.25],3:[.42,.67,.25],4:[.53,.53,.53],5:[.91,.86,.63],6:[.45,.33,.18],7:[.69,.54,.31],8:[.34,.34,.34],10:[.25,.48,.19],11:[.5,.36,.2],35:[.18,.69,.72],36:[.16,.68,.71],16:[.44,.7,.28],17:[.44,.7,.28],256:[.79,.16,.13],296:[.28,.78,.75]},Ks=i=>CE[i]??[.5,.5,.5];function ns(i,t,e,n,s,r=Math.random){const o=[];for(let a=0;a<s;a++){const l=r()*Math.PI*2,c=.6+r()*1.8;o.push({x:i+(r()-.5)*.6,y:t+(r()-.5)*.6,z:e+(r()-.5)*.6,vx:Math.cos(l)*c,vy:1.5+r()*2.5,vz:Math.sin(l)*c,age:0,life:.4+r()*.45,r:n[0],g:n[1],b:n[2]})}return o}function DE(i,t){const e=[];for(const n of i)n.age+=t,!(n.age>=n.life)&&(n.vy-=RE*t,n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,e.push(n));return e}const O0="mineworld.saves",Ui=3e7,PE=-1024,LE=4096,Pn=128,ou=4096,kE=300,IE=1200,UE=64,NE=12e3,pp=16e3,mp=24e3;function $e(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}function fs(i){return typeof i=="number"&&Number.isFinite(i)}function Sn(i,t,e){return fs(i)&&i>=t&&i<=e}function _i(i,t,e){return Number.isSafeInteger(i)&&i>=t&&i<=e}function js(i,t,e){return Math.max(t,Math.min(e,i))}function B0(i){const t=i%(Math.PI*2);return t>Math.PI?t-Math.PI*2:t<-Math.PI?t+Math.PI*2:t}function Mo(i,t,e){return Sn(i,-Ui,Ui)&&Sn(t,PE,LE)&&Sn(e,-Ui,Ui)}function vh(i){if(!(!$e(i)||!Mo(i.x,i.y,i.z)||!fs(i.yaw)||!Sn(i.pitch,-Math.PI/2,Math.PI/2)))return{x:i.x,y:i.y,z:i.z,yaw:B0(i.yaw),pitch:i.pitch}}function au(i,t){let e=i;if(i.startsWith("nether:"))e=i.slice(7);else if(t&&i.startsWith("overworld:"))e=i.slice(10);else if(i.includes(":"))return null;const n=e.split(",");if(n.length!==3||!n.every(a=>/^-?\d+$/.test(a)))return null;const[s,r,o]=n.map(Number);return!_i(s,-Ui,Ui)||!_i(r,0,ve-1)||!_i(o,-Ui,Ui)?null:[s,r,o]}function FE(i){return au(i,!1)!==null}function z0(i){return au(i,!0)!==null}function OE(i){const t=/^portal:(overworld|nether):(x|z):(.+)$/.exec(i);return t?au(t[3],!1)!==null:(i.startsWith("overworld:")||i.startsWith("nether:"))&&z0(i)}function BE(i){var t;return Number.isInteger(i)&&i>=0&&((t=Ue[i])==null?void 0:t.id)===i}function H0(i){var t;return Number.isInteger(i)&&i>0&&(((t=Ue[i])==null?void 0:t.id)===i||Ha(i))}function W0(i){if(!$e(i)||!H0(i.id)||!Number.isInteger(i.count)||i.count<=0)return null;const t=i.id,e={id:t,count:Math.min(i.count,ps(t))},n=fo(t);if(n!==null&&i.dur!==void 0){if(!_i(i.dur,0,Number.MAX_SAFE_INTEGER))return null;e.dur=Math.min(i.dur,n)}return e}function zE(i){const t={};if(!$e(i))return t;for(const[e,n]of Object.entries(i))FE(e)&&BE(n)&&(t[e]=n);return t}function HE(i){if(Array.isArray(i))return i.slice(0,Jh).map(t=>t===null?null:W0(t))}function WE(i){return typeof i=="string"&&Object.prototype.hasOwnProperty.call(ii,i)}function _h(i){if(!Array.isArray(i))return;const t=[];for(const e of i.slice(0,ou)){if(!$e(e)||!WE(e.kind)||!Mo(e.x,e.y,e.z)||!fs(e.yaw)||!Sn(e.health,Number.MIN_VALUE,Number.MAX_SAFE_INTEGER))continue;const n={kind:e.kind,x:e.x,y:e.y,z:e.z,yaw:B0(e.yaw),health:Math.min(e.health,ii[e.kind].hp)};e.kind==="chicken"&&_i(e.egg,0,NE)&&(n.egg=e.egg),t.push(n)}return t}function Xc(i,t){return!H0(i)||!Number.isInteger(t)||t<=0?[0,0]:[i,Math.min(t,ps(i))]}function qc(i,t){return Number.isSafeInteger(i)&&i>=0?Math.min(i,t):0}function GE(i){if(!$e(i))return;const t={};for(const[e,n]of Object.entries(i)){if(!z0(e)||!$e(n))continue;const[s,r]=Xc(n.input,n.inputN);let[o,a]=Xc(n.fuel,n.fuelN);const[l,c]=Xc(n.output,n.outputN);let h;if(o!==0&&n.fuelDur!==void 0){const p=fo(o);p!==null&&(_i(n.fuelDur,0,Number.MAX_SAFE_INTEGER)?h=Math.min(n.fuelDur,p):(o=0,a=0))}const u=qc(n.burnMax,pp),d={input:s,inputN:r,fuel:o,fuelN:a,output:l,outputN:c,burn:Math.min(qc(n.burn,pp),u),burnMax:u,cook:qc(n.cook,ru)};h!==void 0&&a>0&&(d.fuelDur=h),t[e]=d}return t}function VE(i){if(!$e(i)||!["health","food","saturation","exhaustion"].every(s=>fs(i[s])))return;const e=Math.floor(js(i.food,0,ds)),n={health:js(i.health,0,ir),food:e,saturation:js(i.saturation,0,e),exhaustion:js(i.exhaustion,0,40)};return fs(i.oxygen)&&(n.oxygen=Math.floor(js(i.oxygen,0,Al))),fs(i.oxygenTimer)&&(n.oxygenTimer=Math.floor(js(i.oxygenTimer,0,30))),n}function XE(i){if(!$e(i))return;const t={},e=vh(i.overworld),n=vh(i.nether);return e&&(t.overworld=e),n&&(t.nether=n),t}function qE(i){if(!$e(i))return;const t={},e=_h(i.overworld),n=_h(i.nether);return e&&(t.overworld=e),n&&(t.nether=n),t}function gp(i){if(!Array.isArray(i))return;const t=[];for(const e of i.slice(0,ou)){const n=W0(e);if(!$e(e)||!n||!Mo(e.x,e.y,e.z)||!Sn(e.vx,-Pn,Pn)||!Sn(e.vy,-Pn,Pn)||!Sn(e.vz,-Pn,Pn)||!Sn(e.age,0,kE))continue;const s={id:n.id,count:n.count,x:e.x,y:e.y,z:e.z,vx:e.vx,vy:e.vy,vz:e.vz,age:e.age};n.dur!==void 0&&(s.dur=n.dur),t.push(s)}return t}function $E(i){if(!$e(i))return;const t={},e=gp(i.overworld),n=gp(i.nether);return e&&(t.overworld=e),n&&(t.nether=n),t}function vp(i){if(!Array.isArray(i))return;const t=[];for(const e of i.slice(0,ou))!$e(e)||!Mo(e.x,e.y,e.z)||!Sn(e.vx,-Pn,Pn)||!Sn(e.vy,-Pn,Pn)||!Sn(e.vz,-Pn,Pn)||!_i(e.age,0,IE)||!Sn(e.damage,Number.MIN_VALUE,UE)||typeof e.stuck!="boolean"||typeof e.fromPlayer!="boolean"||t.push({x:e.x,y:e.y,z:e.z,vx:e.vx,vy:e.vy,vz:e.vz,age:e.age,stuck:e.stuck,fromPlayer:e.fromPlayer,damage:e.damage});return t}function YE(i){if(!$e(i))return;const t={},e=vp(i.overworld),n=vp(i.nether);return e&&(t.overworld=e),n&&(t.nether=n),t}function KE(i){if(!$e(i))return;const t={};for(const[e,n]of Object.entries(i))OE(e)&&Array.isArray(n)&&n.length===3&&Mo(n[0],n[1],n[2])&&(t[e]=[n[0],n[1],n[2]]);return t}function G0(i){if(!$e(i)||typeof i.id!="string"||i.id.length===0||typeof i.name!="string"||!_i(i.seed,-2e9,2e9)||!_i(i.lastPlayed,0,Number.MAX_SAFE_INTEGER))return null;const t={...i,edits:zE(i.edits)};i.gameMode!=="survival"&&i.gameMode!=="creative"&&delete t.gameMode,i.currentDimension!=="overworld"&&i.currentDimension!=="nether"&&delete t.currentDimension;const e=vh(i.player);e?t.player=e:delete t.player;const n=HE(i.inv);n?t.inv=n:delete t.inv;const s=VE(i.survival);if(s?t.survival=s:delete t.survival,fs(i.worldTime)){const d=Math.floor(i.worldTime)%mp;t.worldTime=d<0?d+mp:d}else delete t.worldTime;const r=_h(i.mobs);r?t.mobs=r:delete t.mobs;const o=GE(i.furnaces);o?t.furnaces=o:delete t.furnaces;const a=XE(i.playerByDimension);a?t.playerByDimension=a:delete t.playerByDimension;const l=qE(i.mobsByDimension);l?t.mobsByDimension=l:delete t.mobsByDimension;const c=$E(i.dropsByDimension);c?t.dropsByDimension=c:delete t.dropsByDimension;const h=YE(i.arrowsByDimension);h?t.arrowsByDimension=h:delete t.arrowsByDimension;const u=KE(i.portalLinks);return u?t.portalLinks=u:delete t.portalLinks,t}function lu(){try{const i=localStorage.getItem(O0);if(i===null)return{ok:!0,worlds:[],rawEntries:[]};const t=JSON.parse(i);return Array.isArray(t)?{ok:!0,worlds:t.map(G0).filter(e=>e!==null),rawEntries:t}:{ok:!1,worlds:[],rawEntries:[],error:new Error("存档顶层结构不是数组")}}catch(i){return{ok:!1,worlds:[],rawEntries:[],error:i}}}function jE(){return lu().worlds}function V0(i){try{return localStorage.setItem(O0,JSON.stringify(i)),!0}catch(t){return console.warn("[mineworld] 存档写入失败(localStorage 配额满或不可用):",t),!1}}function ZE(){return jE().sort((i,t)=>t.lastPlayed-i.lastPlayed)}function QE(i){const t=i.trim();if(!t)return null;if(/^-?\d+$/.test(t))return Math.abs(Math.floor(Number(t)))%2e9;let e=0;for(let n=0;n<t.length;n++)e=Math.imul(e,31)+t.charCodeAt(n)|0;return Math.abs(e)%2e9}function JE(i,t,e="survival"){const n={id:`${Date.now().toString(36)}-${Math.floor(Math.random()*1e6).toString(36)}`,name:i.trim()||"新的世界",seed:t??Math.floor(Math.random()*2e9),gameMode:e,lastPlayed:Date.now(),edits:{}};if(!X0(n))throw new Error("无法写入浏览器存档，请检查隐私模式或清理网站存储空间。");return n}function X0(i){const t=G0(i);if(!t)return console.warn("[mineworld] 拒绝写入结构损坏的世界存档"),!1;const e=lu();if(!e.ok)return console.warn("[mineworld] 原存档无法读取，拒绝覆盖以免丢失数据:",e.error),!1;const n=[];let s=!1;for(const r of e.rawEntries)$e(r)&&r.id===t.id?(s||n.push(t),s=!0):n.push(r);return s||n.push(t),V0(n)}function tA(i){const t=lu();return t.ok?V0(t.rawEntries.filter(e=>!$e(e)||e.id!==i)):(console.warn("[mineworld] 原存档无法读取，拒绝删除以免丢失数据:",t.error),!1)}function xh(i,t,e,n){return i==="nether"?`nether:${t},${e},${n}`:`${t},${e},${n}`}function yh(i){if(i.startsWith("nether:")){const[s,r,o]=i.slice(7).split(",").map(Number);return{dim:"nether",x:s,y:r,z:o}}const[t,e,n]=i.split(",").map(Number);return{dim:"overworld",x:t,y:e,z:n}}function eA(i,t,e,n){const r=nl/2,o=Math.floor(i-r-.1),a=Math.floor(i+r+.1),l=Math.floor(t-.1),c=Math.floor(t+gs),h=Math.floor(e-r-.1),u=Math.floor(e+r+.1);for(let d=o;d<=a;d++)for(let p=l;p<=c;p++)for(let g=h;g<=u;g++)if(IM(n(d,p,g)))return!0;return!1}const nA=[.8,.8,1,.42,.8,.8],iA=14,sA=16,rA=10,_p=14;function q0(i){return Math.max(0,Math.min(1,i))}function Xr(i,t){return Number.isFinite(i)?i:t}function Pa(i,t){return 1-Math.exp(-Math.max(0,Math.min(i,.2))*t)}function $0(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function oA(i){const t=$0(i)%360/360;return new Et().setHSL(t,.6,.48).getHex()}function aA(i,t,e){const n=q0(e);let s=t-i;return s=((s+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,i+s*n}function lA(i,t,e){const n=new en(i,t,e),s=[];for(let r=0;r<6;r++){const o=nA[r];for(let a=0;a<4;a++)s.push(o,o,o)}return n.setAttribute("color",new Fe(s,3)),n}function is(i,t,e,n,s,r,o,a){const l=new Jt(lA(e,n,s),t);return l.position.set(r,o,a),i.add(l),l}function qr(i,t){const e=new ye({color:i,vertexColors:!0});return t.push({material:e,base:i.clone()}),e}function wh(i){var e;const t=(e=i.name)==null?void 0:e.trim();return t?t.slice(0,18):i.id.slice(0,10)||"玩家"}function cA(i,t,e,n,s,r){const o=Math.min(r,n/2,s/2);i.beginPath(),i.moveTo(t+o,e),i.arcTo(t+n,e,t+n,e+s,o),i.arcTo(t+n,e+s,t,e+s,o),i.arcTo(t,e+s,t,e,o),i.arcTo(t,e,t+n,e,o),i.closePath()}function hA(i){const t=document.createElement("canvas");t.width=256,t.height=64;const e=t.getContext("2d");if(!e)throw new Error("无法创建远端玩家名字牌画布");const n=new yl(t);n.colorSpace=ue,n.minFilter=Se,n.magFilter=Se;const s=new xm({map:n,transparent:!0,depthWrite:!1,depthTest:!1}),r=new qw(s);r.layers.set(xo),r.position.set(0,2.38,0),r.scale.set(1.65,.4125,1);const o={canvas:t,context:e,texture:n,material:s,sprite:r};return Y0(o,i),o}function Y0(i,t){const{canvas:e,context:n}=i;n.clearRect(0,0,e.width,e.height),n.fillStyle="rgba(0, 0, 0, 0.58)",cA(n,7,7,e.width-14,e.height-14,11),n.fill(),n.font="bold 27px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.lineWidth=4,n.strokeStyle="rgba(0, 0, 0, 0.7)",n.strokeText(t,e.width/2,e.height/2+1),n.fillStyle="#ffffff",n.fillText(t,e.width/2,e.height/2+1),i.texture.needsUpdate=!0}function uA(i){const t=$0(i),e=t%360/360,n=[16041889,14260842,11036225,7356973],s=new Et(n[(t>>>9)%n.length]),r=new Et(oA(i)),o=new Et().setHSL((e+.57)%1,.35,.31),a=new Et().setHSL((t>>>17)%360/360,.32,.18+(t>>>25)%7*.025);return{skin:s,shirt:r,trousers:o,hair:a}}function dA(i){const t=new dn;t.name=`remote-player:${i.id}`;const e=[],n=uA(i.id),s=qr(n.skin,e),r=qr(n.shirt,e),o=qr(n.trousers,e),a=qr(n.hair,e),l=qr(new Et(2041648),e);is(t,r,.5,.72,.26,0,1.16,0),is(t,s,.5,.5,.5,0,1.77,0),is(t,a,.52,.12,.52,0,2.02,0),is(t,l,.016,.1,.09,.258,1.8,-.13),is(t,l,.016,.1,.09,.258,1.8,.13);const c=[],h=[];for(const p of[-.13,.13]){const g=new dn;g.position.set(0,.8,p),is(g,o,.24,.8,.24,0,-.4,0),t.add(g),c.push(g)}for(const p of[-.36,.36]){const g=new dn;g.position.set(0,1.47,p),is(g,r,.24,.72,.24,0,-.36,0),t.add(g),h.push(g)}const u=hA(wh(i));t.add(u.sprite);const d=new I(i.x,i.y,i.z);return{group:t,legs:c,arms:h,materials:e,target:d.clone(),displayed:d,targetYaw:i.yaw,displayedYaw:i.yaw,walkPhase:0,walkAmount:0,brightness:1,tag:u,label:wh(i)}}function xp(i){i.group.traverse(t=>{t instanceof Jt&&t.geometry.dispose()});for(const t of i.materials)t.material.dispose();i.tag.texture.dispose(),i.tag.material.dispose()}class fA{constructor(t){y(this,"models",new Map);this.scene=t}sync(t,e,n){const s=new Set,r=Math.max(0,Math.min(e,.2)),o=q0(Xr(n,1));for(const a of t){if(!a.id||s.has(a.id))continue;s.add(a.id);let l=this.models.get(a.id);if(!l)l=dA(a),this.models.set(a.id,l),this.scene.add(l.group);else{const v=Xr(a.x,l.target.x),m=Xr(a.y,l.target.y),f=Xr(a.z,l.target.z),x=l.target.clone();l.target.set(v,m,f),x.distanceToSquared(l.target)>_p*_p&&l.displayed.copy(l.target),l.targetYaw=Xr(a.yaw,l.targetYaw);const _=wh(a);_!==l.label&&(l.label=_,Y0(l.tag,_))}const c=Pa(r,iA),h=l.displayed.clone();l.displayed.lerp(l.target,c);const u=l.displayed.distanceTo(h),d=u>4e-4;l.walkAmount+=((d?1:0)-l.walkAmount)*Pa(r,11),d&&(l.walkPhase+=u*11),l.displayedYaw=aA(l.displayedYaw,l.targetYaw,Pa(r,sA)),l.brightness+=(o-l.brightness)*Pa(r,rA);for(const v of l.materials)v.material.color.copy(v.base).multiplyScalar(l.brightness);l.tag.material.color.setScalar(.68+l.brightness*.32);const p=Math.sin(l.walkPhase)*.72*l.walkAmount;l.legs.forEach((v,m)=>v.rotation.z=m===0?p:-p),l.arms.forEach((v,m)=>v.rotation.z=m===0?-p*.72:p*.72);const g=Math.abs(Math.sin(l.walkPhase))*.032*l.walkAmount;l.group.position.set(l.displayed.x,l.displayed.y+g,l.displayed.z),l.group.rotation.set(0,-l.displayedYaw,0)}for(const[a,l]of this.models)s.has(a)||(this.scene.remove(l.group),xp(l),this.models.delete(a))}dispose(){for(const[,t]of this.models)this.scene.remove(t.group),xp(t);this.models.clear()}}const mo=ee+8/9,Cn=4,yp=Math.SQRT1_2,pA=.82,mA=2.5,Oi=Yh,gA=Oi.groupBase+Math.abs(Oi.groupAmplitude),$c=Math.abs(Oi.wave1Weight)*gA+Math.abs(Oi.wave2Weight)+Math.abs(Oi.wave3Weight),dl=Math.abs(Oi.oceanLinear)*$c+Math.abs(Oi.oceanQuadratic)*($c*$c+Math.abs(Oi.quadraticBias));function Yc(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function wp(i,t,e,n,s,r){return(i*(1-r)+t*r)*(1-s)+(n*(1-r)+e*r)*s}function K0(i,t,e){const n=Math.floor(i),s=Math.floor(t);if(e.generatedSurfaceY(n,s)>=ee)return null;const r=(g,v)=>e.waterAmount(g,ee,v)===8&&e.isWaterSource(g,ee,v)&&e.getBlock(g,ee+1,v)===0;if(!r(n,s))return null;const o=new Map;for(let g=-Cn;g<=Cn;g++)for(let v=-Cn;v<=Cn;v++){const m=n+v,f=s+g;o.set(`${m},${f}`,r(m,f))}const a=(g,v)=>{let m=Cn;const f=Cn*Cn;for(let x=-Cn;x<Cn;x++)for(let _=-Cn;_<Cn;_++){const w=_+.5,A=x+.5,E=w*w+A*A;E>f||o.get(`${g+_},${v+x}`)!==!0&&(m=Math.min(m,Math.sqrt(E)))}return Yc(0,1,(m-yp)/(Cn-yp))},l=i-n,c=t-s,h=wp(a(n,s),a(n,s+1),a(n+1,s+1),a(n+1,s),l,c);if(h<pA)return null;const u=(g,v)=>{if(e.waterAmount(g,ee,v)<=0)return 0;let m=1;for(let f=ee-1;f>=0&&m<7&&!(e.waterAmount(g,f,v)<=0);f--)m++;return m},d=(g,v)=>(u(g-1,v-1)+u(g,v-1)+u(g-1,v)+u(g,v))/4,p=wp(d(n,s),d(n,s+1),d(n+1,s+1),d(n+1,s),l,c);return p<mA?null:{open:h,depth:p,ocean:Yc(.25,.82,h)*Yc(1.25,2.5,p)}}function vA(i,t,e,n){return mo+jS(i,t,e,n.ocean).height}function _A(i,t,e,n,s,r,o){const a=Math.floor(i),l=Math.floor(t),c=Math.floor(e),h=ti(s.getBlock(a,l,c));if(!r||l!==ee&&l!==ee+1||t<mo-dl||t>mo+dl)return h;const u=o===void 0?K0(i,e,s):o;return u?t<vA(i,e,n,u):h}const cu=4,j0=.72,Ga=i=>Math.max(0,Math.min(1,i));function xA(i,t,e){const n=t?Ga(i/cu):0,s=n*n*(3-2*n),r=t&&i>0?.1+s*.72:0,o=Ga(e/j0);return Ga(Math.max(r,o*o))}function yA(i,t){return t?Ga(i/cu):0}function wA(i){return i.playing&&i.moving&&i.onGround&&!i.inWater}function Zs(i){var e;const t=((e=Ue[i])==null?void 0:e.name)??"stone";return t.includes("leaves")||t.includes("grass")||t.includes("cactus")?"grass":t.includes("sand")||t==="gravel"?"sand":t.includes("log")||t.includes("planks")||t==="crafting_table"?"wood":t==="ice"||t.includes("glass")?"glass":t.includes("iron")||t.includes("diamond")?"metal":t==="dirt"||t==="soul_sand"?"dirt":"stone"}const MA=[[48,55,60,64],[45,52,57,60],[41,48,53,57],[43,50,55,59]],SA=[[38,45,50,53],[36,43,48,51],[34,41,46,50],[31,38,43,46]];function bA(i,t){const e=t==="nether"?SA:MA;return e[(Math.floor(i)%e.length+e.length)%e.length]}const Mp=i=>440*2**((i-69)/12),$r={stone:{frequency:660,rate:.7,gain:.1},dirt:{frequency:330,rate:.58,gain:.095},grass:{frequency:1180,rate:1.05,gain:.075},sand:{frequency:1750,rate:.82,gain:.07},wood:{frequency:510,rate:.84,gain:.09},glass:{frequency:2350,rate:1.28,gain:.07},metal:{frequency:1450,rate:.96,gain:.075}},TA={stone:[{duration:.1,frequency:820,q:.45,gain:.07,rate:.55,delay:0,filter:"lowpass"},{duration:.055,frequency:510,q:.8,gain:.045,rate:.72,delay:.035,filter:"bandpass"},{duration:.045,frequency:1120,q:1,gain:.026,rate:.92,delay:.083,filter:"bandpass"}],dirt:[{duration:.13,frequency:690,q:.35,gain:.075,rate:.46,delay:0,filter:"lowpass"},{duration:.075,frequency:390,q:.55,gain:.042,rate:.61,delay:.052,filter:"bandpass"}],grass:[{duration:.11,frequency:760,q:.4,gain:.052,rate:.55,delay:0,filter:"lowpass"},{duration:.08,frequency:1550,q:.55,gain:.033,rate:1.08,delay:.025,filter:"highpass"},{duration:.05,frequency:980,q:.8,gain:.025,rate:.9,delay:.075,filter:"bandpass"}],sand:[{duration:.15,frequency:920,q:.45,gain:.045,rate:.66,delay:0,filter:"highpass"},{duration:.09,frequency:2250,q:.7,gain:.027,rate:.9,delay:.045,filter:"bandpass"}],wood:[{duration:.09,frequency:720,q:.7,gain:.06,rate:.67,delay:0,filter:"lowpass"},{duration:.05,frequency:470,q:1.1,gain:.043,rate:.88,delay:.045,filter:"bandpass"},{duration:.045,frequency:1050,q:.8,gain:.023,rate:1.05,delay:.092,filter:"bandpass"}],glass:[{duration:.11,frequency:1750,q:.6,gain:.038,rate:1.12,delay:0,filter:"highpass"},{duration:.055,frequency:2850,q:1.5,gain:.025,rate:1.38,delay:.04,filter:"bandpass"}],metal:[{duration:.085,frequency:980,q:.9,gain:.045,rate:.82,delay:0,filter:"bandpass"},{duration:.07,frequency:2150,q:1.1,gain:.025,rate:1.05,delay:.052,filter:"highpass"}]};class EA{constructor(){y(this,"context",null);y(this,"master",null);y(this,"sfxBus",null);y(this,"musicBus",null);y(this,"environmentFilter",null);y(this,"noise",null);y(this,"volume",.7);y(this,"started",!1);y(this,"phrase",0);y(this,"musicTimer",null);y(this,"stepTimer",0);y(this,"hitTimer",0);y(this,"groundStateKnown",!1);y(this,"wasOnGround",!1);y(this,"dimension","overworld");y(this,"underwater",!1);if(typeof window>"u")return;const t=()=>void this.unlock();window.addEventListener("pointerdown",t,{capture:!0,passive:!0}),window.addEventListener("touchend",t,{capture:!0,passive:!0}),window.addEventListener("keydown",t,{capture:!0}),document.addEventListener("visibilitychange",()=>{this.context&&(document.visibilityState==="hidden"?this.context.suspend():this.started&&this.context.resume())})}setVolume(t){if(this.volume=Math.max(0,Math.min(1,t/100)),this.master&&this.context){const e=this.volume**1.35;this.master.gain.setTargetAtTime(e,this.context.currentTime,.025)}}async unlock(){const t=this.ensureContext();if(t&&t.state!=="running")try{await t.resume()}catch{}}start(){this.started=!0;const t=this.ensureContext();(t==null?void 0:t.state)==="suspended"&&t.resume(),this.musicTimer===null&&this.scheduleNextPhrase(1.5)}update(t,e){this.dimension=e.dimension,this.underwater=e.underwater,this.environmentFilter&&this.context&&this.environmentFilter.frequency.setTargetAtTime(e.underwater?820:e.dimension==="nether"?5400:18e3,this.context.currentTime,e.underwater?.08:.35),this.stepTimer-=t,this.hitTimer-=t,this.groundStateKnown&&e.playing&&!this.wasOnGround&&e.onGround&&!e.inWater&&this.land(e.groundBlock),this.wasOnGround=e.onGround,this.groundStateKnown=!0,wA(e)&&(this.stepTimer>0||(this.step(e.groundBlock),this.stepTimer=e.sprinting?.29:.42))}step(t){const e=$r[Zs(t)];this.noiseBurst(.065,e.frequency,.8,e.gain*.38,e.rate)}jump(t){const e=$r[Zs(t)];this.noiseBurst(.07,e.frequency*.78,.65,e.gain*.28,e.rate*.82)}land(t){const e=$r[Zs(t)];this.noiseBurst(.1,e.frequency*.72,.55,e.gain*.48,e.rate*.72)}blockHit(t){if(this.hitTimer>0)return;this.hitTimer=.145;const e=Zs(t),n=$r[e],s=e==="sand"||e==="grass"?"highpass":"bandpass";this.noiseBurst(.045,n.frequency,.65,n.gain*.34,n.rate,0,s)}blockBreak(t){const e=Zs(t);for(const n of TA[e])this.noiseBurst(n.duration,n.frequency,n.q,n.gain,n.rate,n.delay,n.filter);e==="wood"&&this.resonance(176,.08,.018,"triangle",132,.025),e==="glass"&&(this.resonance(1680,.13,.022,"sine",2180,.025),this.resonance(2350,.1,.014,"sine",1820,.075)),e==="metal"&&this.resonance(510,.16,.02,"sine",430,.02)}blockPlace(t){const e=$r[Zs(t)];this.noiseBurst(.075,e.frequency*.72,.9,e.gain*.68,e.rate*.8),this.noiseBurst(.045,e.frequency,1.25,e.gain*.3,e.rate,.035)}attack(){this.noiseBurst(.085,1380,.65,.15,1.35),this.resonance(118,.09,.07,"square")}hurt(){this.resonance(145,.16,.12,"sawtooth",72),this.noiseBurst(.1,520,.7,.09,.62)}bow(t){const e=Math.max(0,Math.min(1,t));this.resonance(290+e*180,.16,.065,"triangle",125+e*70),this.noiseBurst(.12,2200,.6,.08+e*.035,1.7)}eat(){this.noiseBurst(.1,780,1.1,.1,.78),this.noiseBurst(.08,1180,1.3,.07,.94,.07)}pickup(){this.resonance(740,.07,.055,"sine",1060),this.resonance(990,.09,.04,"sine",1320,.045)}arrowHit(){this.noiseBurst(.055,1180,.8,.038,1.08,0,"bandpass"),this.resonance(245,.08,.022,"triangle",170)}mobHurt(t=!1){this.resonance(t?135:205,t?.28:.13,t?.045:.03,"triangle",t?72:150),this.noiseBurst(t?.16:.075,680,.6,t?.038:.026,.72)}toolBreak(){this.noiseBurst(.13,1350,.7,.055,1.08,0,"highpass"),this.resonance(620,.12,.025,"triangle",210,.025)}uiClick(){this.resonance(520,.035,.012,"sine",440)}portal(){this.resonance(82,1.1,.08,"sine",164),this.resonance(123,1.25,.045,"triangle",246,.08)}death(){this.resonance(180,.65,.13,"sawtooth",48),this.noiseBurst(.4,360,.5,.1,.52)}explosion(){this.noiseBurst(.52,135,.55,.38,.38),this.noiseBurst(.32,620,.7,.2,.62,.025),this.resonance(72,.7,.13,"sine",28)}ensureContext(){if(this.context)return this.context;if(typeof window>"u")return null;const t=window.AudioContext??window.webkitAudioContext;if(!t)return null;const e=new t,n=e.createGain(),s=e.createBiquadFilter(),r=e.createDynamicsCompressor(),o=e.createGain(),a=e.createGain(),l=e.createDelay(2),c=e.createGain();return n.gain.value=this.volume**1.35,s.type="lowpass",s.frequency.value=18e3,r.threshold.value=-12,r.knee.value=16,r.ratio.value=4,r.attack.value=.004,r.release.value=.22,o.gain.value=.58,a.gain.value=.23,l.delayTime.value=.42,c.gain.value=.2,o.connect(n),a.connect(n),a.connect(l),l.connect(c),c.connect(l),l.connect(n),n.connect(s),s.connect(r),r.connect(e.destination),this.context=e,this.master=n,this.sfxBus=o,this.musicBus=a,this.environmentFilter=s,this.noise=this.makeNoise(e),e}makeNoise(t){const e=t.createBuffer(1,Math.floor(t.sampleRate*.55),t.sampleRate),n=e.getChannelData(0);let s=0;for(let r=0;r<n.length;r++){const o=Math.random()*2-1;s=s*.28+o*.72,n[r]=s}return e}noiseBurst(t,e,n,s,r,o=0,a="bandpass"){const l=this.ensureContext();if(!l||!this.sfxBus||!this.noise||this.volume<=0)return;const c=l.currentTime+o,h=l.createBufferSource(),u=l.createBiquadFilter(),d=l.createGain();h.buffer=this.noise,h.playbackRate.value=r*(.94+Math.random()*.12),u.type=a,u.frequency.value=e*(.94+Math.random()*.12),u.Q.value=n;const p=Math.min(.006,t*.18);d.gain.setValueAtTime(1e-4,c),d.gain.linearRampToValueAtTime(Math.max(1e-4,s),c+p),d.gain.exponentialRampToValueAtTime(1e-4,c+t),h.connect(u),u.connect(d),d.connect(this.sfxBus),h.start(c,Math.random()*.12,t),h.stop(c+t+.01)}resonance(t,e,n,s="sine",r=t,o=0){const a=this.ensureContext();if(!a||!this.sfxBus||this.volume<=0)return;const l=a.currentTime+o,c=a.createOscillator(),h=a.createGain();c.type=s,c.frequency.setValueAtTime(t,l),c.frequency.exponentialRampToValueAtTime(Math.max(20,r),l+e);const u=Math.min(.004,e*.18);h.gain.setValueAtTime(1e-4,l),h.gain.linearRampToValueAtTime(Math.max(1e-4,n),l+u),h.gain.exponentialRampToValueAtTime(1e-4,l+e),c.connect(h),h.connect(this.sfxBus),c.start(l),c.stop(l+e+.02)}scheduleNextPhrase(t){typeof window>"u"||(this.musicTimer=window.setTimeout(()=>{this.musicTimer=null,this.started&&(this.playPhrase(),this.scheduleNextPhrase(13+Math.random()*11))},t*1e3))}playPhrase(){const t=this.ensureContext();if(!t||!this.musicBus||this.volume<=0||t.state!=="running")return;const e=bA(this.phrase++,this.dimension),n=t.currentTime+.08,s=this.dimension==="nether"?5:7;for(let r=0;r<s;r++){const o=r>=4&&this.dimension==="overworld"?12:0,a=e[(r*3+this.phrase)%e.length]+o,l=n+r*(this.dimension==="nether"?1.7:1.28);this.musicTone(Mp(a),l,this.dimension==="nether"?5.8:4.4,r===0?.055:.038)}this.musicTone(Mp(e[0]-12),n,9.5,.032,"sine")}musicTone(t,e,n,s,r="sine"){const o=this.context;if(!o||!this.musicBus)return;const a=o.createOscillator(),l=o.createOscillator(),c=o.createGain(),h=o.createBiquadFilter(),u=o.createGain();a.type=r,l.type="sine",a.frequency.value=t,l.frequency.value=t*2.003,c.gain.value=.12,h.type="lowpass",h.frequency.value=this.underwater?700:this.dimension==="nether"?1250:2600,h.Q.value=.7,u.gain.setValueAtTime(1e-4,e),u.gain.exponentialRampToValueAtTime(s,e+Math.min(.45,n*.16)),u.gain.exponentialRampToValueAtTime(s*.26,e+n*.4),u.gain.exponentialRampToValueAtTime(1e-4,e+n),a.connect(h),l.connect(c),c.connect(h),h.connect(u),u.connect(this.musicBus),a.start(e),l.start(e),a.stop(e+n+.05),l.stop(e+n+.05)}}const oe=new EA,La=50,AA=4.5,RA=5,Sp=9,CA=300,DA=-125,Pe=0,PA=.12;function LA(){return eu()}const kA=1.6,bp=.005,IA=.1,UA=.05,NA=.2,FA=.005,OA=.1,BA=3,Tp=16,Ep=88,Ap=48,zA=3,HA=4,WA=8,GA=50,Yr=["pig","cow","sheep","chicken","rabbit"],VA=1200,XA=10,Kc=.25,jc=1,Rp=.6,qA=2.4,$A=9,Cp=.42,YA=.36;function KA(i){if(i==null)return 1;const t=no(i);return(t==null?void 0:t.kind)==="sword"?t.tier===1?4:t.tier===2?5:t.tier===3?6:7:1}function jA(i,t,e,n,s,r,o,a,l,c,h,u){let d=0,p=1/0;const g=(v,m,f,x)=>{if(Math.abs(m)<1e-9)return v>=f&&v<=x;let _=(f-v)/m,w=(x-v)/m;return _>w&&([_,w]=[w,_]),d=Math.max(d,_),p=Math.min(p,w),p>=d};return!g(i,n,o,c)||!g(t,s,a,h)||!g(e,r,l,u)?null:d}class ZA{constructor(t,e,n=null){y(this,"canvas");y(this,"save");y(this,"renderer");y(this,"multiplayer");y(this,"remotePlayers");y(this,"look");y(this,"touch");y(this,"world");y(this,"worldEpoch",0);y(this,"activeEditsByChunk",new Map);y(this,"physWorld");y(this,"playerPhysWorld");y(this,"waterSurfaceWorld");y(this,"chunks");y(this,"highlight");y(this,"underwaterEl");y(this,"portalEffectEl");y(this,"normalFog");y(this,"underFog",new yr(2383754,.1,16));y(this,"player");y(this,"prev");y(this,"hotbar");y(this,"inv");y(this,"crack");y(this,"dropRenderer");y(this,"hand");y(this,"particleFx");y(this,"skyObjects");y(this,"dimension","overworld");y(this,"portalCooldown",0);y(this,"portalTimer",0);y(this,"portalArmed",!0);y(this,"portalFlash",0);y(this,"particles",[]);y(this,"digFxT",0);y(this,"invUI");y(this,"craftingGrid",0);y(this,"furnaceUI");y(this,"furnaces",new Map);y(this,"furnaceKey",null);y(this,"touchHoldAction",null);y(this,"touchDigging",!1);y(this,"touchDigHit",null);y(this,"dropsByDimension",{overworld:[],nether:[]});y(this,"drops",this.dropsByDimension.overworld);y(this,"arrowsByDimension",{overworld:[],nether:[]});y(this,"arrows",this.arrowsByDimension.overworld);y(this,"arrowRenderer");y(this,"drawingBow",!1);y(this,"bowCharge",0);y(this,"mobs",[]);y(this,"mobRenderer");y(this,"mobRng");y(this,"spawnWorld");y(this,"surfaceY",(t,e)=>Ne(t,e,this.save.seed));y(this,"mobSpawnTick",0);y(this,"digging",!1);y(this,"lastMeleeMs",0);y(this,"digTarget",null);y(this,"digProgress",0);y(this,"fluidSim",new X2);y(this,"fluidGrid");y(this,"fluidTick",0);y(this,"wateredChunksByDimension",{overworld:new Set,nether:new Set});y(this,"wateredChunks",this.wateredChunksByDimension.overworld);y(this,"worldTime");y(this,"waterWaveTime",0);y(this,"waterProbeEpoch",0);y(this,"waterProbeCache",null);y(this,"fov",70);y(this,"actualSprinting",!1);y(this,"shadowTick",99);y(this,"evictCt",0);y(this,"last",0);y(this,"acc",0);y(this,"survival");y(this,"statusBar");y(this,"worldSpawn");y(this,"dead",!1);y(this,"creative");y(this,"flying",!1);y(this,"flyTapWindow",0);y(this,"fallDistance",0);y(this,"hurtCd",0);y(this,"coordEl");y(this,"coordOn",!1);y(this,"eating",!1);y(this,"eatProgress",0);y(this,"eatFxT",0);y(this,"crouching",!1);y(this,"camEye",Yn);y(this,"decayQueueByDimension",{overworld:[],nether:[]});y(this,"decayQueue",this.decayQueueByDimension.overworld);y(this,"texturePack");y(this,"lightingQuality");y(this,"renderDistance");y(this,"_godSunUV",new zt);y(this,"_godSunColor",new Et);y(this,"_godSunWorld",new I);y(this,"_godFwd",new I);y(this,"_handSun",new I);y(this,"_handSkyColor",new Et);y(this,"hurtWindowMax",0);y(this,"skyDarkenNow",0);y(this,"entityLight",(t,e,n)=>this.chunks.brightnessAt(t,e,n,this.skyDarkenNow));var p,g,v,m;const s=Wm();oe.setVolume(s.volume),wf(s.texturePack),this.canvas=t,this.save=e,this.waterSurfaceWorld={getBlock:(f,x,_)=>this.world.getBlock(f,x,_),waterAmount:(f,x,_)=>this.world.waterAmount(f,x,_),isWaterSource:(f,x,_)=>this.world.isWaterSource(f,x,_),generatedSurfaceY:(f,x)=>Ne(f,x,this.save.seed)},this.creative=e.gameMode==="creative",this.renderer=new fS(t),this.multiplayer=n,this.remotePlayers=new fA(this.renderer.scene),this.normalFog=this.renderer.scene.fog,this.underwaterEl=document.getElementById("underwater"),this.portalEffectEl=document.getElementById("portal-effect"),this.hotbar=new mT(document.getElementById("hotbar"),Sp,document.getElementById("held-item-name")),this.inv=e.inv?Q2(e.inv):this.creative?LA():eu(),this.hotbar.render(this.inv);const r=e.survival,o=r!==void 0&&r.health<=0;this.survival=r&&r.health>0?{...kc(),...r,foodTimer:0}:kc(),this.statusBar=new AT(document.getElementById("health"),document.getElementById("hunger")),this.statusBar.render(this.survival),this.worldTime=e.worldTime??HS,this.fluidGrid={isSolid:(f,x,_)=>x<0||x>=ve||ke(this.world.getBlock(f,x,_)),amount:(f,x,_)=>this.world.waterAmount(f,x,_),isSource:(f,x,_)=>this.world.isWaterSource(f,x,_),isFalling:(f,x,_)=>this.world.isWaterFalling(f,x,_),setWater:(f,x,_,w,A,E)=>this.world.setWater(f,x,_,w,A,E),getBlock:(f,x,_)=>this.world.getBlock(f,x,_),setBlock:(f,x,_,w)=>this.edit(f,x,_,w)},this.dimension=o?"overworld":e.currentDimension??"overworld",this.save.currentDimension=this.dimension,this.buildDimension(this.dimension);for(const f of["overworld","nether"]){for(const x of((p=e.dropsByDimension)==null?void 0:p[f])??[])this.dropsByDimension[f].push({...x});for(const x of((g=e.arrowsByDimension)==null?void 0:g[f])??[])this.arrowsByDimension[f].push({...x})}this.drops=this.dropsByDimension[this.dimension],this.arrows=this.arrowsByDimension[this.dimension],this.wateredChunks=this.wateredChunksByDimension[this.dimension],this.decayQueue=this.decayQueueByDimension[this.dimension],this.texturePack=s.texturePack,this.lightingQuality=s.lightingQuality,this.renderDistance=s.renderDistance;const a=hh(this.texturePack);this.chunks=new Zm(this.renderer.scene,this.world,a),this.renderer.setWaterRefractionSink((f,x,_,w,A)=>this.chunks.setWaterRefraction(f,x,_,w,A)),this.renderer.setWaterReflectionSink((f,x,_,w)=>this.chunks.setWaterReflection(f,x,_,w)),this.renderer.setWaterCapturesEnabled(this.dimension==="overworld"),this.chunks.setLightingQuality(s.lightingQuality),this.chunks.setSunEnabled(this.dimension==="overworld"),this.setRenderDistance(this.renderDistance),this.multiplayer&&this.bindMultiplayer(this.multiplayer),this.crack=new JS(this.renderer.scene),this.dropRenderer=new Ab(this.renderer.scene,a),this.arrowRenderer=new Kb(this.renderer.scene),this.mobRenderer=new V2(this.renderer.scene),this.mobRng=Cm((e.seed^2654435769)>>>0),this.spawnWorld={getBlock:(f,x,_)=>this.world.getBlock(f,x,_)},this.hand=new Ob(a),this.hand.setLightingQuality(s.lightingQuality),this.particleFx=new iE(this.renderer.scene),this.skyObjects=new AE(this.renderer.scene),this.skyObjects.setLightingQuality(s.lightingQuality),this.skyObjects.setDimension(this.dimension),this.invUI=new WT(document.getElementById("inventory")),this.furnaceUI=new jT(document.getElementById("furnace")),this.coordEl=document.createElement("div"),this.coordEl.style.cssText="position:fixed;left:8px;top:8px;z-index:30;padding:4px 8px;font:14px Zpix,monospace;color:#fff;background:rgba(0,0,0,.45);white-space:pre;display:none;pointer-events:none;text-shadow:1px 1px 0 #000;",document.body.appendChild(this.coordEl),this.furnaceUI.onChange=()=>this.hotbar.render(this.inv),this.furnaceUI.onClose=()=>this.closeFurnace(),this.invUI.onChange=()=>this.hotbar.render(this.inv),this.invUI.onClose=()=>this.closeCrafting(),this.invUI.onSelectHotbar=f=>this.hotbar.setSelected(f),this.physWorld={isSolid:(f,x,_)=>ke(this.world.getBlock(f,x,_)),isWater:(f,x,_)=>ti(this.world.getBlock(f,x,_))},this.playerPhysWorld={isSolid:(f,x,_)=>ke(this.world.getBlock(f,x,_)),getBlock:(f,x,_)=>this.world.getBlock(f,x,_),isWater:()=>this.pointInWater(this.player.pos.x,this.player.pos.y+.1,this.player.pos.z)};const l=o?void 0:((v=e.playerByDimension)==null?void 0:v[this.dimension])??e.player;this.worldSpawn=this.findSpawn(e.seed);const c=l?{x:l.x,y:l.y,z:l.z}:this.worldSpawn;this.player={pos:{...c},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.chunks.update(qt(Math.floor(c.x)),qt(Math.floor(c.z)),2,999);const h=((m=e.mobsByDimension)==null?void 0:m[this.dimension])??e.mobs;if(h&&h.length)for(const f of h)this.mobs.push(Bf(f));else if(this.dimension==="overworld")for(let f=0;f<Yr.length;f++)this.mobs.push(...Ff(Yr[f%Yr.length],c.x,c.z,this.mobRng,this.spawnWorld,this.surfaceY,6,26));if(e.furnaces)for(const[f,x]of Object.entries(e.furnaces))this.furnaces.set(f.startsWith("overworld:")||f.startsWith("nether:")?f:`overworld:${f}`,x);const u=new en(1.001,1.001,1.001);this.highlight=new Yw(new Kw(u),new wm({color:0,transparent:!0,opacity:.35})),this.highlight.layers.set(xo),this.highlight.visible=!1,this.renderer.scene.add(this.highlight);const d=C0();this.look=new rT(t,!d),this.look.yaw=l?l.yaw:Math.atan2(-c.z,-c.x),this.look.pitch=l?l.pitch:-.18,this.touch=d?new pT(document.getElementById("touch-controls"),{look:(f,x)=>this.look.rotate(f,x),interactTap:()=>this.onTouchInteractTap(),interactHoldStart:()=>this.beginTouchHoldAction(),interactHoldEnd:()=>this.endTouchHoldAction(),interactHoldCancel:()=>this.cancelTouchHoldAction(),inventory:()=>{this.furnaceKey?this.closeFurnace():this.craftingGrid>0?this.closeCrafting():this.openPlayerInventory()},pause:()=>window.dispatchEvent(new Event("mineworld:touch-pause"))}):null,t.addEventListener("contextmenu",f=>f.preventDefault()),t.addEventListener("mousedown",f=>{document.pointerLockElement===t&&(f.button===0?this.beginPrimaryAction():f.button===2?this.onUseDown():f.button===1&&this.creative&&(f.preventDefault(),this.pickTargetedBlock()))}),window.addEventListener("mouseup",f=>{f.button===0?this.stopDigging():f.button===2&&(this.releaseBow(),this.stopEating())}),document.addEventListener("pointerlockchange",()=>{this.touch||document.pointerLockElement!==t&&(this.stopDigging(),this.drawingBow=!1,this.bowCharge=0,this.stopEating())}),window.addEventListener("keydown",f=>{var w;const x=f.target;if((w=x==null?void 0:x.matches)!=null&&w.call(x,'input, textarea, [contenteditable="true"]'))return;if(f.code==="KeyE"){this.furnaceKey?this.closeFurnace():this.craftingGrid>0?this.closeCrafting():this.isGameplayActive()&&this.openPlayerInventory();return}if(f.code==="F3"){f.preventDefault(),this.coordOn=!this.coordOn,this.coordEl.style.display=this.coordOn?"block":"none";return}if(f.code==="Escape"&&this.furnaceKey){this.closeFurnace();return}if(f.code==="Escape"&&this.craftingGrid>0){this.closeCrafting();return}const _=Number(f.key);Number.isInteger(_)&&_>=1&&_<=Sp&&this.hotbar.setSelected(_-1)}),t.addEventListener("wheel",f=>{f.preventDefault(),this.hotbar.scroll(Math.sign(f.deltaY))},{passive:!1}),this.publishMultiplayerState()}isGameplayActive(){var t;return((t=this.touch)==null?void 0:t.isActive)??document.pointerLockElement===this.canvas}usesTouchControls(){return this.touch!==null}isCreativeMode(){return this.creative}setTouchActive(t){var e;(e=this.touch)==null||e.setActive(t&&!this.dead&&this.craftingGrid===0&&!this.furnaceKey)}attachMultiplayer(t){return this.multiplayer!==null?!1:(this.multiplayer=t,this.bindMultiplayer(t),this.publishMultiplayerState(),!0)}detachMultiplayer(t){return this.multiplayer!==t?!1:(t.setBlockBatchHandler(null),t.setBlockHandler(null),t.setWorldTimeHandler(null),this.multiplayer=null,!0)}bindMultiplayer(t){t.setBlockBatchHandler(e=>this.applyRemoteBlockBatch(e)),t.setBlockHandler(e=>this.applyRemoteBlockEdit(e)),t.setWorldTimeHandler(e=>this.setNetworkWorldTime(e))}readMovement(){var n;const t=iT();if(!((n=this.touch)!=null&&n.isActive))return t;const e=this.touch.readMove();return{forward:Math.max(-1,Math.min(1,t.forward+e.forward)),right:Math.max(-1,Math.min(1,t.right+e.right)),sprint:t.sprint||e.sprint,jumpHeld:t.jumpHeld||e.jumpHeld,crouch:t.crouch||e.crouch}}publishMultiplayerState(){if(!this.multiplayer)return;const t=this.player.pos;this.multiplayer.sendState({x:t.x,y:t.y,z:t.z,yaw:this.look.yaw,pitch:this.look.pitch,dimension:this.dimension})}beginPrimaryAction(t){if(!this.isGameplayActive())return;this.touchDigging=!1,this.touchDigHit=null;const e=this.mobUnderRay(t);if(e){const n=performance.now();n-this.lastMeleeMs>=500&&(this.attackMob(e,t),this.lastMeleeMs=n);return}this.touchDigging=t!==void 0,this.touchDigHit=t?this.rayHitFor(t):null,this.digging=!0,this.digTarget=null}stopDigging(){this.digging=!1,this.touchDigging=!1,this.touchDigHit=null,this.digProgress=0,this.digTarget=null,this.crack.hide()}onTouchInteractTap(){if(!this.isGameplayActive())return;const t=this.rayHit();if(this.useTargetedBlock(t))return;const e=this.inv[this.hotbar.index];this.tryIgnitePortal(t,(e==null?void 0:e.id)??null)||this.placeBlock(t)}shouldUseHeldItemOnTouchHold(){const t=this.inv[this.hotbar.index];return!t||t.count<=0?!1:t.id===kn?this.creative||$f(this.inv,nr)>0:Wa(t.id)&&this.survival.food<ds}beginTouchHoldAction(){if(!(!this.isGameplayActive()||this.touchHoldAction!==null)){if(this.shouldUseHeldItemOnTouchHold()&&this.beginHeldItemUse()){this.touchHoldAction="use";return}this.touchHoldAction="primary",this.beginPrimaryAction(this.crosshairRay())}}endTouchHoldAction(){const t=this.touchHoldAction;if(this.touchHoldAction=null,t==="primary"){this.stopDigging();return}t==="use"&&(this.releaseBow(),this.stopEating())}cancelTouchHoldAction(){const t=this.touchHoldAction;if(this.touchHoldAction=null,t==="primary"){this.stopDigging();return}t==="use"&&(this.drawingBow=!1,this.bowCharge=0,this.stopEating())}buildDimension(t){const e=new Map;for(const[n,s]of Object.entries(this.save.edits)){const r=yh(n);if(r.dim!==t||r.y<0||r.y>=ve||!Ue[s])continue;const o=`${qt(r.x)},${qt(r.z)}`;let a=e.get(o);a||(a=new Map,e.set(o,a)),a.set(`${Le(r.x)},${r.y},${Le(r.z)}`,{x:r.x,y:r.y,z:r.z,id:s})}this.activeEditsByChunk=e,this.worldEpoch++,this.world=new zm(this.save.seed,t),this.world.editHook=(n,s,r)=>{var o;for(const a of((o=e.get(`${n},${s}`))==null?void 0:o.values())??[]){const l=Le(a.x),c=Le(a.z);r.set(l,a.y,c,a.id),r.setFluid(l,a.y,c,a.id===an?Hh(8,!0,!1):0),this.fluidSim.activate(a.x,a.y,a.z)}}}switchDimension(t,e){var o,a,l;oe.portal(),((o=this.save).playerByDimension??(o.playerByDimension={}))[this.dimension]={x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.look.yaw,pitch:this.look.pitch},((a=this.save).mobsByDimension??(a.mobsByDimension={}))[this.dimension]=this.mobs.map(Of);const n=this.world;this.dimension=t,this.save.currentDimension=t,this.drops=this.dropsByDimension[t],this.arrows=this.arrowsByDimension[t],this.wateredChunks=this.wateredChunksByDimension[t],this.wateredChunks.clear(),this.decayQueue=this.decayQueueByDimension[t],this.fluidSim.clear(),this.buildDimension(t),this.chunks.setWorld(this.world),this.chunks.setSunEnabled(t==="overworld"),this.renderer.setWaterCapturesEnabled(t==="overworld"),n.dispose(),this.mobs.length=0;for(const c of((l=this.save.mobsByDimension)==null?void 0:l[t])??[])this.mobs.push(Bf(c));this.player={pos:{...e},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.skyObjects.setDimension(t);const s=qt(Math.floor(e.x)),r=qt(Math.floor(e.z));this.chunks.update(s,r,2,999),this.chunks.flushMesh(64),this.dropRenderer.sync(this.drops,this.entityLight),this.arrowRenderer.sync(this.arrows),this.particles=[],this.particleFx.sync(this.particles),this.portalCooldown=60,this.portalFlash=j0}snapshot(){var e,n;this.save.player={x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.look.yaw,pitch:this.look.pitch},this.save.inv=Z2(this.inv);const t=this.survival;return this.save.survival={health:t.health,food:t.food,saturation:t.saturation,exhaustion:t.exhaustion,oxygen:t.oxygen,oxygenTimer:t.oxygenTimer},this.save.worldTime=this.worldTime,this.save.mobs=this.mobs.map(Of),this.save.furnaces=Object.fromEntries(this.furnaces),this.save.dropsByDimension={overworld:this.dropsByDimension.overworld.map(s=>({...s})),nether:this.dropsByDimension.nether.map(s=>({...s}))},this.save.arrowsByDimension={overworld:this.arrowsByDimension.overworld.map(s=>({...s})),nether:this.arrowsByDimension.nether.map(s=>({...s}))},this.save.currentDimension=this.dimension,((e=this.save).playerByDimension??(e.playerByDimension={}))[this.dimension]={...this.save.player},((n=this.save).mobsByDimension??(n.mobsByDimension={}))[this.dimension]=this.save.mobs,this.save.lastPlayed=Date.now(),this.save}findSpawn(t){const e=new Map,n=(s,r,o)=>this.worldAt("overworld",s,r,o,e);for(let s=1;s<160;s++)for(let r=-s;r<=s;r++)for(const[o,a]of[[r,-s],[r,s],[-s,r],[s,r]]){const l=Ne(o,a,t),c=(u,d)=>n(u,l+1,d)===Pe&&n(u,l+2,d)===Pe,h=n(o,l,a)!==Pe&&n(o,l-1,a)!==Pe&&n(o,l-2,a)!==Pe;if(l>ee&&l<=ee+4&&h&&c(o,a)&&c(o+1,a)&&c(o-1,a)&&c(o,a+1)&&c(o,a-1))return{x:o+.5,y:l+1,z:a+.5}}return{x:.5,y:ee+3,z:.5}}async preloadSpawn(t=3,e){const n=this.worldEpoch,s=this.world,r=this.chunks,o=this.wateredChunks,a=()=>!(e!=null&&e.aborted)&&n===this.worldEpoch&&s===this.world,l=()=>new Promise(_=>{let w=!1,A=0;const E=k=>{w||(w=!0,e==null||e.removeEventListener("abort",D),_(k))},D=()=>{A!==0&&cancelAnimationFrame(A),E(!1)};e==null||e.addEventListener("abort",D,{once:!0}),e!=null&&e.aborted?D():A=requestAnimationFrame(()=>E(!0))}),c=qt(Math.floor(this.player.pos.x)),h=qt(Math.floor(this.player.pos.z));for(let _=-t;_<=t;_++)for(let w=-t;w<=t;w++)s.request(c+w,h+_);if(!await new Promise(_=>{let w=!1,A;const E=b=>{w||(w=!0,A!==void 0&&clearTimeout(A),e==null||e.removeEventListener("abort",D),_(b))},D=()=>E(!1),k=()=>{if(!a()){E(!1);return}let b=!0;for(let S=-t;S<=t&&b;S++)for(let P=-t;P<=t&&b;P++)s.peek(c+P,h+S)||(b=!1);b?E(!0):A=setTimeout(k,30)};e==null||e.addEventListener("abort",D,{once:!0}),k()})||!a())return;const d=(c-t)*Dt,p=(c+t+1)*Dt-1,g=(h-t)*Dt,v=(h+t+1)*Dt-1,m=(_,w)=>_>=d&&_<=p&&w>=g&&w<=v;Xf(this.fluidSim,{isWater:(_,w,A)=>m(_,A)&&ti(s.getBlock(_,w,A)),isAir:(_,w,A)=>m(_,A)&&s.getBlock(_,w,A)===Pe},{minX:d,maxX:p,minZ:g,maxZ:v,minY:Math.max(1,ee-48),maxY:Math.min(ve-1,ee+2)});const f={isSolid:(_,w,A)=>!m(_,A)||w<0||w>=ve||ke(s.getBlock(_,w,A)),amount:(_,w,A)=>m(_,A)?s.waterAmount(_,w,A):0,isSource:(_,w,A)=>m(_,A)&&s.isWaterSource(_,w,A),isFalling:(_,w,A)=>m(_,A)&&s.isWaterFalling(_,w,A),setWater:(_,w,A,E,D,k)=>{m(_,A)&&s.setWater(_,w,A,E,D,k)},getBlock:(_,w,A)=>m(_,A)?s.getBlock(_,w,A):Pe,setBlock:(_,w,A,E)=>{m(_,A)&&this.edit(_,w,A,E)}};for(let _=0;_<1200&&this.fluidSim.activeCount>0;){for(let w=0;w<8&&_<1200&&this.fluidSim.activeCount>0;w++){if(!a())return;this.fluidSim.tick(f),_++}if(this.fluidSim.activeCount>0&&!await l())return}if(!a())return;for(let _=-t;_<=t;_++)for(let w=-t;w<=t;w++)o.add(`${c+w},${h+_}`);const x=Math.ceil((t*2+1)**2/4)+1;for(let _=0;_<x+240;_++){if(!a()||(r.update(c,h,t,4),r.flushMesh(8),!await l()||!a()))return;if(_>=x&&!r.meshBusy())break}}activateNearbyWater(){const n=qt(Math.floor(this.player.pos.x)),s=qt(Math.floor(this.player.pos.z)),r=Math.max(1,ee-48),o=Math.min(ve-1,ee+2);let a=0;for(const l of q2(n,s,4,this.wateredChunks)){if(a>=3)break;const[c,h]=l.split(",").map(Number);if(!this.world.peek(c,h))continue;const u=(d,p)=>this.world.peek(qt(d),qt(p))!==void 0;Xf(this.fluidSim,{isWater:(d,p,g)=>u(d,g)&&ti(this.world.getBlock(d,p,g)),isAir:(d,p,g)=>u(d,g)&&this.world.getBlock(d,p,g)===Pe},{minX:c*Dt-1,maxX:c*Dt+Dt,minZ:h*Dt-1,maxZ:h*Dt+Dt,minY:r,maxY:o}),this.wateredChunks.add(l),a++}}start(){oe.start(),this.last=performance.now(),this.publishMultiplayerState();const t=e=>{var x,_;requestAnimationFrame(t);const n=Math.min(e-this.last,100)/1e3;this.acc+=e-this.last,this.last=e,this.acc>250&&(this.acc=250);const s=this.isGameplayActive(),r=s||this.craftingGrid>0||this.furnaceKey!==null;for(;r&&this.acc>=La;){if(this.waterProbeEpoch++,this.prev=this.player,s){const A=this.readMovement(),E=sT()||(((x=this.touch)==null?void 0:x.consumeJump())??!1);this.creative&&E&&(this.flyTapWindow>0?(this.flying=!this.flying,this.flyTapWindow=0):this.flyTapWindow=6),this.flyTapWindow>0&&this.flyTapWindow--,this.creative||(this.flying=!1),this.crouching=this.flying?!1:A.crouch,this.actualSprinting=A.sprint&&(this.creative||wT(this.survival));const D=E&&this.player.onGround&&!this.flying&&!this.pointInWater(this.player.pos.x,this.player.pos.y+.1,this.player.pos.z),k=D?this.world.getBlock(Math.floor(this.player.pos.x),Math.max(0,Math.floor(this.player.pos.y-.08)),Math.floor(this.player.pos.z)):Pe;this.player=Pf(this.player,{forward:A.forward,right:A.right,yaw:this.look.yaw,jump:E,swimUp:A.jumpHeld,sprint:this.actualSprinting,crouch:this.flying?!1:A.crouch,slow:this.eating,fly:this.flying,flyUp:A.jumpHeld,flyDown:A.crouch},this.playerPhysWorld),D&&oe.jump(k),this.publishMultiplayerState(),this.stepSurvival(this.actualSprinting,E)}else this.player=Pf(this.player,{forward:0,right:0,yaw:this.look.yaw,jump:!1,swimUp:!1,sprint:!1,crouch:!1,slow:!1,fly:this.flying,flyUp:!1,flyDown:!1},this.playerPhysWorld),this.publishMultiplayerState(),this.stepSurvival(!1,!1);++this.worldTime>=ln&&(this.worldTime=0),++this.fluidTick>=5&&(this.fluidTick=0,this.activateNearbyWater(),this.fluidSim.tick(this.fluidGrid),this.chunks.remeshDirty(),this.waterProbeEpoch++);const w=`${this.dimension}:`;for(const[A,E]of this.furnaces)A.startsWith(w)&&$T(E)&&qT(E);this.furnaceKey&&this.furnaceUI.render(),this.tickMobs(),this.tickArrows(),this.tickLeafDecay(),this.portalCooldown>0&&this.portalCooldown--,s&&this.tickPortalTravel(),this.acc-=La}r||(this.acc=0);const o=n>.026?3:(n>.018,4);this.chunks.update(qt(Math.floor(this.player.pos.x)),qt(Math.floor(this.player.pos.z)),this.renderDistance,o,Math.cos(this.look.yaw),Math.sin(this.look.yaw));const a=performance.now()+6;for(;this.chunks.meshQueueLen()>0&&performance.now()<a;)this.chunks.flushMesh(1);if(++this.evictCt>=45){this.evictCt=0;const w=Math.max(this.renderDistance+4,12),A=qt(Math.floor(this.player.pos.x)),E=qt(Math.floor(this.player.pos.z));for(const D of this.world.evictBeyond(A,E,w))this.wateredChunks.delete(D)}this.chunks.cullToView(this.player.pos.x,this.player.pos.z,Math.cos(this.look.yaw),Math.sin(this.look.yaw),this.look.pitch);const l=s&&this.actualSprinting?80:70;this.fov+=(l-this.fov)*.15,this.renderer.camera.fov=this.fov,this.renderer.camera.updateProjectionMatrix(),r&&this.updateDrops(n),s?(this.updateMining(n),this.updateEating(n),this.updateBow(n),this.digging&&this.hand.swing()):(this.crack.hide(),this.craftingGrid>0&&this.invUI.render()),this.statusBar.render(this.survival),this.waterWaveTime+=n,this.chunks.animateWater(n),this.updateDayNight(),this.skyObjects.update(this.worldTime,this.renderer.camera.position,n),this.dimension==="overworld"&&this.lightingQuality!=="off"&&++this.shadowTick>=6?(this.shadowTick=0,this.chunks.updateSun(this.worldTime,this.player.pos.x,this.player.pos.y,this.player.pos.z),this.renderer.markShadowDirty()):(this.dimension!=="overworld"||this.lightingQuality==="off")&&(this.shadowTick=0),this.updateCamera(this.acc/La),this.updateWater(),this.updatePortalEffect(n,s),this.updateHighlight(),this.particles=DE(this.particles,n),this.particleFx.sync(this.particles),this.mobRenderer.sync(this.mobs,n,this.entityLight),this.remotePlayers.sync(((_=this.multiplayer)==null?void 0:_.remotePlayers.filter(w=>w.dimension===this.dimension))??[],n,this.entityLight(this.player.pos.x,this.player.pos.y+Yn,this.player.pos.z)),this.arrowRenderer.sync(this.arrows);const c=this.inv[this.hotbar.index];this.hand.setHeld(c?c.id:null),this.hand.setEating(s&&this.eating),this.hand.setBowCharge(s&&this.drawingBow?this.bowCharge/jc:null);const h=Math.min(1,Math.hypot(this.player.vel.x,this.player.vel.z)/.22);this.hand.update(n,s?h:0);const u=this.pointInWater(this.player.pos.x,this.player.pos.y+.1,this.player.pos.z),d=this.pointInWater(this.player.pos.x,this.player.pos.y+Yn,this.player.pos.z);oe.update(n,{playing:s,moving:h>.12,sprinting:this.actualSprinting,onGround:this.player.onGround,inWater:u,underwater:d,groundBlock:this.world.getBlock(Math.floor(this.player.pos.x),Math.max(0,Math.floor(this.player.pos.y-.08)),Math.floor(this.player.pos.z)),dimension:this.dimension});const[p,g]=this.chunks.lightLevelAt(this.player.pos.x,this.player.pos.y+Yn,this.player.pos.z),v=this.dimension==="nether"&&p>14.5&&g<.5?.08:this.entityLight(this.player.pos.x,this.player.pos.y+Yn,this.player.pos.z);this.hand.setBrightness(v);const m=this.worldTime/ln*Math.PI*2;this._handSun.set(Math.cos(m),Math.sin(m),.1).normalize();const f=Ba(this.worldTime,this.dimension);if(this._handSkyColor.setRGB(f.worldTint[0],f.worldTint[1],f.worldTint[2],ue),this.hand.setLighting({skyLevel:p,blockLevel:g,skyDarken:this.skyDarkenNow,sunEnabled:this.dimension==="overworld",skyColor:this._handSkyColor,sunDirectionWorld:this._handSun,cameraQuaternion:this.renderer.camera.quaternion}),this.hand.camera.aspect!==this.renderer.camera.aspect&&this.hand.resize(this.renderer.camera.aspect),this.coordOn){const w=this.player.pos,A=this.chunks.pipelineStats();this.coordEl.textContent=`XYZ  ${Math.floor(w.x)} / ${Math.floor(w.y)+DA} / ${Math.floor(w.z)}
区块 已上屏${A.meshed} 可见${A.visible} 派发中${A.pending} 待上屏${A.queued}`}this.updateGodRays(),this.renderer.render(),this.renderer.renderOverlay(this.hand.scene,this.hand.camera)};requestAnimationFrame(t)}pointInWater(t,e,n){const s=this.dimension==="overworld"&&this.lightingQuality!=="off";let r;const o=Math.floor(e);if(s&&(o===ee||o===ee+1)&&e>=mo-dl&&e<=mo+dl){const a=Math.floor(t),l=Math.floor(n),c=this.waterProbeCache;c&&c.epoch===this.waterProbeEpoch&&c.bx===a&&c.bz===l?r=c.probe:(r=K0(t,n,this.waterSurfaceWorld),this.waterProbeCache={epoch:this.waterProbeEpoch,bx:a,bz:l,probe:r})}return _A(t,e,n,this.waterWaveTime,this.waterSurfaceWorld,s,r)}updatePortalEffect(t,e){if(!this.portalEffectEl)return;this.portalFlash=Math.max(0,this.portalFlash-t);const n=this.player.pos,s=$n(this.world.getBlock(Math.floor(n.x),Math.floor(n.y),Math.floor(n.z))),r=e&&s&&this.portalArmed&&this.portalCooldown===0&&!this.dead,o=e?xA(this.portalTimer,r,this.portalFlash):0,a=yA(this.portalTimer,r);this.portalEffectEl.style.opacity=o.toFixed(3),this.portalEffectEl.style.setProperty("--portal-progress",a.toFixed(3)),this.portalEffectEl.style.setProperty("--portal-texture-opacity",(.22+a*.42).toFixed(3)),this.portalEffectEl.style.setProperty("--portal-glow-opacity",(a*.2).toFixed(3)),this.portalEffectEl.style.setProperty("--portal-scale-from",(1.02+a*.08).toFixed(3)),this.portalEffectEl.style.setProperty("--portal-scale-to",(1.08+a*.12).toFixed(3)),this.portalEffectEl.classList.toggle("active",o>.002),this.portalEffectEl.classList.toggle("flash",e&&this.portalFlash>0)}stepSurvival(t,e){if(this.creative){this.fallDistance=0;return}this.hurtCd>0&&this.hurtCd--;const n=this.player.pos.x-this.prev.pos.x,s=this.player.pos.z-this.prev.pos.z,r=this.player.pos.y-this.prev.pos.y;t&&ls(this.survival,IA*Math.hypot(n,s)),e&&ls(this.survival,t?NA:UA);const o=Math.floor(this.player.pos.x),a=Math.floor(this.player.pos.z),l=this.pointInWater(this.player.pos.x,this.player.pos.y,this.player.pos.z),c=bT(this.fallDistance,r,this.player.onGround,l);this.fallDistance=c.fallDistance,c.damage>0&&(this.hurtPlayer(c.damage,0,0,!0),ls(this.survival,OA)),eA(this.player.pos.x,this.player.pos.y,this.player.pos.z,(g,v,m)=>this.world.getBlock(g,v,m))&&this.hurtPlayer(1,0,0,!0);const h=tl(this.world.getBlock(o,Math.floor(this.player.pos.y),a)),u=tl(this.world.getBlock(o,Math.floor(this.player.pos.y+.9),a));(h||u)&&this.hurtPlayer(4,0,0,!0);const d=this.pointInWater(this.player.pos.x,this.player.pos.y+Yn,this.player.pos.z),p=this.survival.health;ET(this.survival,d),this.survival.health<p&&this.flashHurt(),TT(this.survival),Ic(this.survival)&&!this.dead&&this.die()}flashHurt(){oe.hurt(),this.hand.hurtShake();const t=document.getElementById("hurt");t&&(t.classList.remove("flash"),t.offsetWidth,t.classList.add("flash"))}hurtPlayer(t,e,n,s=!1){if(!this.creative){if(this.hurtCd>0){t>this.hurtWindowMax&&(cl(this.survival,t-this.hurtWindowMax),this.hurtWindowMax=t,this.flashHurt(),Ic(this.survival)&&!this.dead&&this.die());return}if(this.hurtCd=10,this.hurtWindowMax=t,cl(this.survival,t),this.flashHurt(),!s){const r=Math.hypot(e,n)||1;this.player.kbx=e/r*Cp,this.player.kbz=n/r*Cp,this.player.vel.y=YA}Ic(this.survival)&&!this.dead&&this.die()}}die(){oe.death(),this.prepareForSave(),this.dead=!0,this.stopDigging(),this.stopEating();const t=Math.floor(this.player.pos.x),e=Math.floor(this.player.pos.y),n=Math.floor(this.player.pos.z);for(let s=0;s<this.inv.length;s++){const r=this.inv[s];r&&r.count>0&&this.drops.push(vn(r.id,t,e,n,Math.random,r.count,r.dur)),this.inv[s]=null}this.hotbar.render(this.inv),this.dropRenderer.sync(this.drops,this.entityLight),window.dispatchEvent(new Event("mineworld:death")),this.touch?this.touch.setActive(!1):document.exitPointerLock()}isDead(){return this.dead}setTexturePack(t){if(t===this.texturePack)return;this.texturePack=t,wf(t);const e=hh(t);this.chunks.setAtlas(e),this.hand.setAtlas(e),this.dropRenderer.setAtlas(e),this.hotbar.render(this.inv)}setLightingQuality(t){this.lightingQuality=t,this.chunks.setLightingQuality(t),this.hand.setLightingQuality(t),this.skyObjects.setLightingQuality(t),t==="off"&&this.renderer.setGodRays(null)}setRenderDistance(t){this.renderDistance=t;const e=t*16;this.normalFog instanceof yr&&(this.normalFog.near=e*.72,this.normalFog.far=e),this.chunks.setFogFar(e)}respawn(){this.survival=kc(),this.dead=!1,this.fallDistance=0,this.portalTimer=0,this.portalArmed=!0,this.portalCooldown=0;const t=this.worldSpawn;this.dimension==="overworld"?(this.player={pos:{...t},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.chunks.update(qt(Math.floor(t.x)),qt(Math.floor(t.z)),2,999)):this.switchDimension("overworld",t),this.statusBar.render(this.survival)}useTargetedBlock(t){return t?this.world.getBlock(t.x,t.y,t.z)===Pm?(this.openCrafting(3),!0):this.world.getBlock(t.x,t.y,t.z)===gc?(this.openFurnace(t.x,t.y,t.z),!0):!1:!1}tryIgnitePortal(t,e){if(!t||e!==uo||this.world.getBlock(t.x,t.y,t.z)!==Dn)return!1;const n=JT((s,r,o)=>this.world.getBlock(s,r,o),t.x,t.y,t.z,[t.x+t.nx,t.y+t.ny,t.z+t.nz]);if(!n)return!1;if(this.editMany(n.map(([s,r,o])=>[s,r,o,Li]),{x:t.x+.5,y:t.y+.5,z:t.z+.5}),oe.portal(),!this.creative){const s=fo(uo);s!==null&&wa(this.inv,this.hotbar.index,s)&&oe.toolBreak(),this.hotbar.render(this.inv)}return!0}beginHeldItemUse(){const t=this.inv[this.hotbar.index];return t&&t.id===kn&&(this.creative||$f(this.inv,nr)>0)?(this.drawingBow=!0,this.bowCharge=0,!0):t&&t.count>0&&Wa(t.id)&&this.survival.food<ds?(this.eating=!0,this.eatProgress=0,!0):!1}onUseDown(){const t=this.rayHit();if(this.useTargetedBlock(t))return;const e=this.inv[this.hotbar.index];this.tryIgnitePortal(t,(e==null?void 0:e.id)??null)||this.beginHeldItemUse()||this.placeBlock(t)}updateBow(t){if(!this.drawingBow)return;const e=this.inv[this.hotbar.index];if(!e||e.id!==kn){this.drawingBow=!1,this.bowCharge=0;return}this.bowCharge=Math.min(this.bowCharge+t,jc)}releaseBow(){if(!this.drawingBow)return;this.drawingBow=!1;const t=this.bowCharge;this.bowCharge=0;const e=this.inv[this.hotbar.index];if(!e||e.id!==kn||t<Kc)return;if(!this.creative){if(j2(this.inv,nr,1)<1)return;const p=fo(kn);p!==null&&wa(this.inv,this.hotbar.index,p)&&oe.toolBreak(),this.hotbar.render(this.inv)}const n=(t-Kc)/(jc-Kc),s=Rp+n*(qA-Rp),r=Math.max(1,Math.round(2+n*($A-2))),o=Math.cos(this.look.yaw),a=Math.sin(this.look.yaw),l=Math.cos(this.look.pitch),c=Math.sin(this.look.pitch),h=this.player.pos.x,u=this.player.pos.y+Yn,d=this.player.pos.z;this.arrows.push(Lf(h+o*l*.4,u+c*.4,d+a*l*.4,o*l,c,a*l,s,!0,r)),oe.bow(n),this.hand.swing()}isCraftingOpen(){return this.craftingGrid>0}isContainerOpen(){return this.craftingGrid>0||this.furnaceKey!==null||this.furnaceUI.isOpen()}openPlayerInventory(){this.craftingGrid=2,this.creative?this.invUI.showCreative(this.inv):this.invUI.show(this.inv,2),this.touch?this.touch.setActive(!1):document.exitPointerLock()}openCrafting(t){this.craftingGrid=t,this.invUI.show(this.inv,t),this.touch?this.touch.setActive(!1):document.exitPointerLock()}dropOverflow(t){if(t.length===0)return;const e=Math.floor(this.player.pos.x),n=Math.floor(this.player.pos.y),s=Math.floor(this.player.pos.z);for(const r of t)r.count>0&&this.drops.push(vn(r.id,e,n,s,Math.random,r.count,r.dur));this.dropRenderer.sync(this.drops,this.entityLight)}closeCrafting(){this.craftingGrid=0,this.dropOverflow(this.invUI.hide()),this.touch?this.touch.setActive(!this.dead):this.canvas.requestPointerLock()}furnaceStateKey(t,e,n,s=this.dimension){return`${s}:${t},${e},${n}`}openFurnace(t,e,n){const s=this.furnaceStateKey(t,e,n);let r=this.furnaces.get(s);r||(r=XT(),this.furnaces.set(s,r)),this.furnaceKey=s,this.furnaceUI.show(this.inv,r),this.touch?this.touch.setActive(!1):document.exitPointerLock()}closeFurnace(){this.furnaceKey=null,this.dropOverflow(this.furnaceUI.hide()),this.touch?this.touch.setActive(!this.dead):this.canvas.requestPointerLock()}prepareForSave(){(this.furnaceKey!==null||this.furnaceUI.isOpen())&&(this.furnaceKey=null,this.dropOverflow(this.furnaceUI.hide())),(this.craftingGrid>0||this.invUI.isOpen())&&(this.craftingGrid=0,this.dropOverflow(this.invUI.hide())),this.hotbar.render(this.inv)}stopEating(){this.eating=!1,this.eatProgress=0}updateEating(t){if(!this.eating)return;const e=this.hotbar.index,n=this.inv[e];if(!n||n.count<=0||!Wa(n.id)||this.survival.food>=ds){this.stopEating();return}if(this.eatProgress+=t,this.eatFxT+=t,this.eatFxT>=.09){this.eatFxT=0;const s=Math.cos(this.look.yaw),r=Math.sin(this.look.yaw),o=Math.cos(this.look.pitch),a=Math.sin(this.look.pitch),l=this.player.pos.x+s*o*.4,c=this.player.pos.y+Yn-.18+a*.4,h=this.player.pos.z+r*o*.4;this.particles.push(...ns(l,c,h,Ks(n.id),2))}if(this.eatProgress>=kA){const s=_b(n.id),r=Yf(this.inv,e);s&&r!==null&&(MT(this.survival,s),oe.eat(),this.hotbar.render(this.inv)),this.eatProgress=0}}crosshairRay(){const t={x:this.player.pos.x,y:this.player.pos.y+Yn,z:this.player.pos.z},e=Math.cos(this.look.yaw),n=Math.sin(this.look.yaw),s=Math.cos(this.look.pitch),r=Math.sin(this.look.pitch);return{origin:t,direction:{x:e*s,y:r,z:n*s}}}rayHitFor(t){return uf(t.origin,t.direction,this.creative?RA:AA,(e,n,s)=>af(this.world.getBlock(e,n,s)))}rayHit(){return this.rayHitFor(this.crosshairRay())}pickTargetedBlock(){const t=this.rayHit();if(!t)return;const e=this.world.getBlock(t.x,t.y,t.z),n=eT(this.inv,this.hotbar.index,e);this.hotbar.setSelected(n),this.hotbar.render(this.inv)}recordEdit(t,e,n,s,r){if(this.save.edits[xh(t,e,n,s)]=r,t!==this.dimension)return;const o=`${qt(e)},${qt(s)}`;let a=this.activeEditsByChunk.get(o);a||(a=new Map,this.activeEditsByChunk.set(o,a)),a.set(`${Le(e)},${n},${Le(s)}`,{x:e,y:n,z:s,id:r})}applyLocalEdit(t,e,n,s){this.world.setBlock(t,e,n,s),s===an&&this.world.setWater(t,e,n,8,!0,!1),this.recordEdit(this.dimension,t,e,n,s),this.fluidSim.activate(t,e,n)}editMany(t,e){var n;if(t.length!==0){for(const[s,r,o,a]of t)this.applyLocalEdit(s,r,o,a);this.chunks.remeshDirty(),e&&((n=this.multiplayer)==null||n.sendBlockBatch("local",t.map(([s,r,o,a])=>({dimension:this.dimension,x:s,y:r,z:o,id:a})),{center:e}))}}edit(t,e,n,s){var r;this.applyLocalEdit(t,e,n,s),this.chunks.remeshDirty(),(r=this.multiplayer)==null||r.sendBlock({dimension:this.dimension,x:t,y:e,z:n,id:s})}applyRemoteBlockEdit(t){t.dimension!=="overworld"&&t.dimension!=="nether"||!Number.isInteger(t.x)||!Number.isInteger(t.y)||!Number.isInteger(t.z)||!Number.isInteger(t.id)||!Ue[t.id]||t.y<0||t.y>=ve||(this.recordEdit(t.dimension,t.x,t.y,t.z,t.id),t.dimension===this.dimension&&this.world.peek(qt(t.x),qt(t.z))&&(this.world.setBlock(t.x,t.y,t.z,t.id),t.id===an&&this.world.setWater(t.x,t.y,t.z,8,!0,!1),this.fluidSim.activate(t.x,t.y,t.z),this.chunks.remeshDirty()))}applyRemoteBlockBatch(t){let e=!1;for(const n of t.edits)n.dimension!=="overworld"&&n.dimension!=="nether"||!Number.isInteger(n.x)||!Number.isInteger(n.y)||!Number.isInteger(n.z)||!Number.isInteger(n.id)||!Ue[n.id]||n.y<0||n.y>=ve||(this.recordEdit(n.dimension,n.x,n.y,n.z,n.id),!(n.dimension!==this.dimension||!this.world.peek(qt(n.x),qt(n.z)))&&(this.world.setBlock(n.x,n.y,n.z,n.id),n.id===an&&this.world.setWater(n.x,n.y,n.z,8,!0,!1),this.fluidSim.activate(n.x,n.y,n.z),e=!0));e&&this.chunks.remeshDirty()}setNetworkWorldTime(t){if(!Number.isFinite(t))return;const e=Math.floor(t)%ln;this.worldTime=e<0?e+ln:e}editDim(t,e,n,s,r){this.recordEdit(t,e,n,s,r)}worldAt(t,e,n,s,r){if(t===this.dimension)return this.world.getBlock(e,n,s);const o=this.save.edits[xh(t,e,n,s)];if(o!==void 0)return o;if(n<0||n>=ve)return 0;const a=qt(e),l=qt(s),c=`${t}:${a},${l}`;let h=r==null?void 0:r.get(c);return h||(h=Bm(a,l,this.save.seed,t),r==null||r.set(c,h)),h.get(Le(e),n,Le(s))}activePortalFrameAt(t,e,n,s,r){const o=(l,c,h)=>this.worldAt(t,l,c,h,r);if(!$n(o(e,n,s)))return null;const a=U0((l,c,h)=>o(l,c,h)===Dn,(l,c,h)=>{const u=o(l,c,h);return u===Pe||$n(u)},e,n,s);return!a||!a.inner.every(([l,c,h])=>$n(o(l,c,h)))?null:a}portalKey(t,e){const n=e.inner.reduce((s,r)=>r[0]!==s[0]?r[0]<s[0]?r:s:r[1]!==s[1]?r[1]<s[1]?r:s:r[2]<s[2]?r:s);return`portal:${t}:${e.axis}:${n[0]},${n[1]},${n[2]}`}portalSpawn(t){const e=t.inner.reduce((n,s)=>s[1]!==n[1]?s[1]<n[1]?s:n:s[0]!==n[0]?s[0]<n[0]?s:n:s[2]<n[2]?s:n);return[e[0]+.5,e[1],e[2]+.5]}findSavedPortalNear(t,e,n,s=128){const r=[];for(const[l,c]of Object.entries(this.save.edits)){if(!$n(c))continue;const h=yh(l);if(h.dim!==t||Math.abs(h.x-e)>s||Math.abs(h.z-n)>s)continue;const u=h.x+.5-e,d=h.z+.5-n,p=u*u+d*d;p>s*s||r.push({...h,distance2:p})}r.sort((l,c)=>l.distance2-c.distance2||l.y-c.y);const o=new Map,a=new Set;for(const l of r){const c=this.activePortalFrameAt(t,l.x,l.y,l.z,o);if(!c)continue;const h=this.portalKey(t,c);if(!a.has(h))return a.add(h),o.clear(),{frame:c,spawn:this.portalSpawn(c)}}return o.clear(),null}tickPortalTravel(){var x,_;const t=this.player.pos,e=Math.floor(t.x),n=Math.floor(t.y),s=Math.floor(t.z),r=$n(this.world.getBlock(e,n,s));if(this.portalTimer=r?this.portalTimer+La/1e3:0,r||(this.portalArmed=!0),!r||!this.portalArmed||this.portalCooldown!==0||this.portalTimer<cu)return;const o=this.activePortalFrameAt(this.dimension,e,n,s);if(!o){this.portalTimer=0,this.collapseInvalidPortalsAround(e,n,s);return}const a=this.dimension,l=a==="overworld"?"nether":"overworld",c=this.portalKey(a,o),h=(x=this.save).portalLinks??(x.portalLinks={}),u=o.inner.map(([w,A,E])=>`${a}:${w},${A},${E}`),[d,p]=tE(a,t.x,t.z),g=[];h[c]&&g.push([c,h[c]]);for(const w of u)h[w]&&!g.some(([A])=>A===w)&&g.push([w,h[w]]);let v;const m=new Map;for(const[w,A]of g){if(Math.hypot(A[0]-d,A[2]-p)>128){delete h[w];continue}if(this.activePortalFrameAt(l,Math.floor(A[0]),Math.floor(A[1]),Math.floor(A[2]),m)){v=A;break}delete h[w]}if(m.clear(),!v){const w=this.findSavedPortalNear(l,d,p);w&&(v=w.spawn)}let f=[];if(!v){const w=new Map,A=nE((E,D,k)=>this.worldAt(l,E,D,k,w),l,d,p);w.clear(),f=A.edits;for(const[E,D,k,b]of A.edits)this.editDim(l,E,D,k,b);v=[A.spawn.x,A.spawn.y,A.spawn.z]}for(const w of u)delete h[w];h[c]=v,(_=this.multiplayer)==null||_.sendBlockBatch("portal",f.map(([w,A,E,D])=>({dimension:l,x:w,y:A,z:E,id:D})),{transition:{x:v[0],y:v[1],z:v[2],yaw:this.look.yaw,pitch:this.look.pitch,dimension:l}}),this.portalArmed=!1,this.portalTimer=0,this.switchDimension(l,{x:v[0],y:v[1],z:v[2]})}queueLeafDecay(t,e,n){for(const s of _S((r,o,a)=>this.world.getBlock(r,o,a),t,e,n))this.decayQueue.some(r=>r.x===s.x&&r.y===s.y&&r.z===s.z)||this.decayQueue.push({x:s.x,y:s.y,z:s.z,t:40+Math.floor(Math.random()*160)})}tickLeafDecay(){if(this.decayQueue.length!==0)for(let t=this.decayQueue.length-1;t>=0;t--){const e=this.decayQueue[t];if(--e.t>0)continue;this.decayQueue.splice(t,1);const n=this.world.getBlock(e.x,e.y,e.z);n!==lr&&n!==Sl||(this.edit(e.x,e.y,e.z,Pe),this.particles.push(...ns(e.x+.5,e.y+.5,e.z+.5,Ks(n),8)),n===lr&&Math.random()<bp&&this.drops.push(vn(el,e.x,e.y,e.z)))}}updateMining(t){if(!this.digging){this.crack.hide();return}const e=this.touchDigging?this.touchDigHit:this.rayHit();if(!e){this.digProgress=0,this.digTarget=null,this.crack.hide(),this.touchDigging&&this.stopDigging();return}const n=this.world.getBlock(e.x,e.y,e.z);if(this.touchDigging&&!af(n)){this.stopDigging();return}if((!this.digTarget||this.digTarget.x!==e.x||this.digTarget.y!==e.y||this.digTarget.z!==e.z)&&(this.digTarget={x:e.x,y:e.y,z:e.z},this.digProgress=0),!this.creative&&Um(n)<0){this.crack.hide();return}const s=this.creative?PA:LM(n,this.heldTool())/1e3;if(s<=0){this.mineBlock(e.x,e.y,e.z,n),this.touchDigging&&this.stopDigging();return}this.digProgress+=t,this.digProgress>=s?(this.mineBlock(e.x,e.y,e.z,n),this.touchDigging&&this.stopDigging()):(this.crack.show(e.x,e.y,e.z,this.digProgress/s),oe.blockHit(n),this.digFxT+=t,this.digFxT>=.07&&(this.digFxT=0,this.particles.push(...ns(e.x+.5,e.y+.5,e.z+.5,Ks(n),3))))}heldTool(){const t=this.inv[this.hotbar.index];return t?no(t.id):null}settleFallingBlock(t,e,n,s){const r=this.world.getBlock(t,e,n);if(r!==vc&&r!==oa)return!1;const o=s===void 0,a=s??new Map;let l=e;for(;l>1&&!ke(this.world.getBlock(t,l-1,n));)l--;if(l===e)return!1;const c=(u,d,p,g)=>{this.applyLocalEdit(u,d,p,g),a.set(`${u},${d},${p}`,[u,d,p,g])};c(t,e,n,Pe);const h=this.world.getBlock(t,l,n);return h===Pi||ki(h)||$n(h)?(this.drops.push(vn(r,t,l,n)),o&&this.finishGravityBatch(a,t,e,n),!0):(c(t,l,n,r),o&&this.finishGravityBatch(a,t,e,n),!0)}finishGravityBatch(t,e,n,s){var r;t.size!==0&&(this.chunks.remeshDirty(),(r=this.multiplayer)==null||r.sendBlockBatch("gravity",[...t.values()].map(([o,a,l,c])=>({dimension:this.dimension,x:o,y:a,z:l,id:c})),{center:{x:e+.5,y:n+.5,z:s+.5}}))}settleFallingAt(t,e,n,s){const r=s===void 0,o=s??new Map;let a=e+1;for(;;){const l=this.world.getBlock(t,a,n);if(l!==vc&&l!==oa||!this.settleFallingBlock(t,a,n,o))break;a++}r&&this.finishGravityBatch(o,t,e,n)}collapseInvalidPortalsAround(t,e,n){const s=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],r=[[0,0,0],...s],o=new Set;for(const[a,l,c]of r){const h=t+a,u=e+l,d=n+c,p=`${h},${u},${d}`;if(o.has(p)||!$n(this.world.getBlock(h,u,d)))continue;const g=[[h,u,d]],v=[];for(;g.length>0&&v.length<1024;){const[x,_,w]=g.pop(),A=`${x},${_},${w}`;if(!(o.has(A)||!$n(this.world.getBlock(x,_,w)))){o.add(A),v.push([x,_,w]);for(const[E,D,k]of s)g.push([x+E,_+D,w+k])}}const m=new Set;for(const[x,_,w]of v){const A=`${x},${_},${w}`;if(m.has(A))continue;const E=this.activePortalFrameAt(this.dimension,x,_,w);if(E)for(const[D,k,b]of E.inner)m.add(`${D},${k},${b}`)}const f=v.filter(([x,_,w])=>!m.has(`${x},${_},${w}`)).map(([x,_,w])=>[x,_,w,Pe]);this.editMany(f,{x:t+.5,y:e+.5,z:n+.5})}}destroyFurnaceState(t,e,n){const s=this.furnaceStateKey(t,e,n);this.furnaceKey===s&&this.closeFurnace();const r=this.furnaces.get(s);if(!r)return;const o=[[r.input,r.inputN],[r.fuel,r.fuelN,r.fuelDur],[r.output,r.outputN]];for(const[a,l,c]of o)l>0&&this.drops.push(vn(a,t,e,n,Math.random,l,c));this.furnaces.delete(s)}mineBlock(t,e,n,s){if(ki(s)){this.edit(t,e,n,Pe),oe.blockBreak(s),this.particles.push(...ns(t+.5,e+.5,n+.5,Ks(s),6)),this.digProgress=0,this.digTarget=null,this.crack.hide();return}let r=this.creative?null:kM(s,this.heldTool());r===oa&&Math.random()<.1&&(r=g0);const o=s===cr&&!this.creative&&this.world.getBlock(t,e-1,n)!==Pe;this.edit(t,e,n,o?an:Pe),oe.blockBreak(s),s===Dn&&this.collapseInvalidPortalsAround(t,e,n);const a=this.world.getBlock(t,e+1,n);(ki(a)||a===Pi)&&(this.edit(t,e+1,n,Pe),a===Pi&&!this.creative&&this.drops.push(vn(Pi,t,e+1,n)),this.particles.push(...ns(t+.5,e+1.5,n+.5,Ks(a),6))),this.settleFallingAt(t,e,n),this.particles.push(...ns(t+.5,e+.5,n+.5,Ks(s),16)),r!==null&&this.drops.push(vn(r,t,e,n)),!this.creative&&s===lr&&Math.random()<bp&&this.drops.push(vn(el,t,e,n)),(s===wl||s===Ml)&&this.queueLeafDecay(t,e,n),s===gc&&this.destroyFurnaceState(t,e,n),ls(this.survival,FA);const l=this.inv[this.hotbar.index],c=l?no(l.id):null;!this.creative&&c&&(wa(this.inv,this.hotbar.index,c.maxDurability)&&oe.toolBreak(),this.hotbar.render(this.inv)),this.digProgress=0,this.digTarget=null,this.crack.hide()}updateDrops(t){const e=this.player.pos.x,n=this.player.pos.y+.9,s=this.player.pos.z;Sb(this.drops,ps);for(let r=this.drops.length-1;r>=0;r--){const o=this.drops[r];if(bb(o,this.physWorld,t),o.age>CA){this.drops.splice(r,1);continue}if(Tb(o,e,n,s))if(o.dur!==void 0)K2(this.inv,o.id,o.dur)&&(oe.pickup(),this.drops.splice(r,1),this.hotbar.render(this.inv));else{const a=qf(this.inv,o.id,o.count,ps(o.id));a<o.count&&(oe.pickup(),this.hotbar.render(this.inv)),a===0?this.drops.splice(r,1):o.count=a}}this.dropRenderer.sync(this.drops,this.entityLight)}tickMobs(){const t=this.player.pos.x,e=this.player.pos.z,n=this.creative?null:{x:t,y:this.player.pos.y,z:e};let s=0,r=0,o=0;for(let a=this.mobs.length-1;a>=0;a--){const l=this.mobs[a];if(l.health<=0){this.mobs.splice(a,1);continue}const c=l.pos.x-t,h=l.pos.z-e,u=c*c+h*h;if(u>Ep*Ep){this.mobs.splice(a,1);continue}const d=Zb(l.kind);d&&o++,u<Ap*Ap&&(s++,d&&r++);const p=d?y2(l,this.physWorld,this.mobRng,n,this.isSunlit(l)):s2(l,this.physWorld,this.mobRng);Object.assign(l,p.mob);let g=!1;for(const v of p.events)if(v.kind==="layEgg")this.drops.push(vn(f0,Math.floor(v.pos.x),Math.floor(v.pos.y),Math.floor(v.pos.z)));else if(v.kind==="attackPlayer")this.hurtPlayer(v.damage,t-l.pos.x,e-l.pos.z),l.kind==="husk"&&ls(this.survival,3);else if(v.kind==="shootArrow")u<24*24&&oe.bow(.72),this.arrows.push(Lf(v.from.x,v.from.y,v.from.z,v.dir.x,v.dir.y,v.dir.z,S0,!1,v.damage));else if(v.kind==="explode")this.explode(v.pos,v.radius,v.damage,l);else if(v.kind==="drops")for(const m of v.items)this.drops.push(vn(m.id,Math.floor(v.pos.x),Math.floor(v.pos.y),Math.floor(v.pos.z),Math.random,m.count));else v.kind==="death"&&(g=!0);if(g){const v=this.mobs.indexOf(l);v>=0&&this.mobs.splice(v,1)}}if(++this.mobSpawnTick>=GA){if(this.mobSpawnTick=0,this.dimension!=="overworld")return;if(s<zA&&this.mobs.length<Tp){const l=this.player.vel,c=Math.hypot(l.x,l.z)>.001?Math.atan2(l.z,l.x):null;this.mobs.push(...Ff(Yr[Math.floor(this.mobRng()*Yr.length)],t,e,this.mobRng,this.spawnWorld,this.surfaceY,24,44,c,Math.PI/2))}let a=Math.min(WA-o,Tp-this.mobs.length);if(r<HA&&a>0){const l=this.mobRng(),c=as(t,e,this.save.seed),h=M2(c,l),u=(p,g,v)=>{const[m,f]=this.chunks.lightLevelAt(p,g,v);return Math.max(f,m-this.skyDarkenNow)},d=T2(h,t,this.player.pos.y,e,this.mobRng,this.spawnWorld,this.surfaceY,void 0,void 0,u).slice(0,a);this.mobs.push(...d),a-=d.length,a>0&&this.mobs.push(...b2(h,t,e,this.mobRng,this.spawnWorld,this.surfaceY,void 0,void 0,u).slice(0,a))}}}explode(t,e,n,s){var m;oe.explosion();const r=Math.floor(t.x),o=Math.floor(t.y),a=Math.floor(t.z),l=e*e,c=Math.ceil(e),h=f=>{const x=Math.hypot(f.x-t.x,f.y-t.y,f.z-t.z);let _=Math.round(n*(1-x/(e+1.5)));return _>0&&this.explosionBlocked(t,f)&&(_=Math.round(_*.3)),Math.max(0,_)},u={damage:h({x:this.player.pos.x,y:this.player.pos.y+.9,z:this.player.pos.z}),dx:this.player.pos.x-t.x,dz:this.player.pos.z-t.z},d=this.mobs.filter(f=>f!==s&&f.health>0).map(f=>({mob:f,damage:h({x:f.pos.x,y:f.pos.y+.5,z:f.pos.z}),dx:f.pos.x-t.x,dz:f.pos.z-t.z})),p=new Map,g=new Map;for(let f=-c;f<=c;f++)for(let x=-c;x<=c;x++)for(let _=-c;_<=c;_++){if(_*_+f*f+x*x>l)continue;const w=r+_,A=o+f,E=a+x,D=this.world.getBlock(w,A,E);if(!ke(D)&&!ki(D)||D===Wh||D===Dn)continue;D===gc&&this.destroyFurnaceState(w,A,E),this.world.setBlock(w,A,E,Pe),this.recordEdit(this.dimension,w,A,E,Pe),this.fluidSim.activate(w,A,E),g.set(`${w},${A},${E}`,[w,A,E,Pe]);const k=`${w},${E}`,b=p.get(k);(!b||A>b.y)&&p.set(k,{x:w,y:A,z:E})}for(const f of p.values())this.settleFallingAt(f.x,f.y,f.z,g);const v=[...g.values()].map(([f,x,_,w])=>({dimension:this.dimension,x:f,y:x,z:_,id:w}));v.length>0&&((m=this.multiplayer)==null||m.sendBlockBatch("explosion",v,{center:t})),this.chunks.remeshDirty(),this.particles.push(...ns(t.x,t.y+.4,t.z,[.33,.33,.33],30)),u.damage>0&&this.hurtPlayer(u.damage,u.dx,u.dz);for(const{mob:f,damage:x,dx:_,dz:w}of d){if(x<=0)continue;const A=Dc(f,x,{x:_,z:w},this.mobRng);Object.assign(f,A.mob);for(const E of A.events)if(E.kind==="drops")for(const D of E.items)this.drops.push(vn(D.id,Math.floor(E.pos.x),Math.floor(E.pos.y),Math.floor(E.pos.z),Math.random,D.count));else E.kind}}explosionBlocked(t,e){for(let s=1;s<8;s++){const r=s/8,o=Math.floor(t.x+(e.x-t.x)*r),a=Math.floor(t.y+(e.y-t.y)*r),l=Math.floor(t.z+(e.z-t.z)*r);if(ke(this.world.getBlock(o,a,l)))return!0}return!1}isSunlit(t){return A2(t,this.world,Ba(this.worldTime).isNight)}tickArrows(){const t=(e,n,s,r,o,a,l,c)=>e>=r-l&&e<=r+l&&n>=a&&n<=a+c&&s>=o-l&&s<=o+l;for(let e=this.arrows.length-1;e>=0;e--){const n=this.arrows[e];if(n.age>VA){this.arrows.splice(e,1);continue}if(n.stuck){if(n.age++,n.age>XA){const d=n.x-this.player.pos.x,p=n.y-(this.player.pos.y+.9),g=n.z-this.player.pos.z;d*d+p*p+g*g<1.4*1.4&&qf(this.inv,nr,1)===0&&(oe.pickup(),this.hotbar.render(this.inv),this.arrows.splice(e,1))}continue}const s=n.x,r=n.y,o=n.z;$b(n,this.physWorld);const a=n.x-s,l=n.y-r,c=n.z-o,h=Math.max(1,Math.ceil(Math.hypot(a,l,c)/.2));let u=!1;for(let d=1;d<=h&&!u;d++){const p=d/h,g=s+a*p,v=r+l*p,m=o+c*p;if(n.fromPlayer)for(const f of this.mobs){const x=ii[f.kind];if(t(g,v,m,f.pos.x,f.pos.z,f.pos.y,x.width/2,x.height)){oe.arrowHit(),this.damageMobWithArrow(f,n),u=!0;break}}else t(g,v,m,this.player.pos.x,this.player.pos.z,this.player.pos.y,nl/2,gs)&&(oe.arrowHit(),this.hurtPlayer(n.damage,n.vx,n.vz),u=!0)}n.stuck&&!u&&oe.arrowHit(),u&&this.arrows.splice(e,1)}}damageMobWithArrow(t,e){const n=Dc(t,e.damage,{x:e.vx,z:e.vz},this.mobRng);n.events.some(s=>s.kind==="hurt")&&oe.mobHurt(n.events.some(s=>s.kind==="death")),Object.assign(t,n.mob);for(const s of n.events)if(s.kind==="drops")for(const r of s.items)this.drops.push(vn(r.id,Math.floor(s.pos.x),Math.floor(s.pos.y),Math.floor(s.pos.z),Math.random,r.count));else if(s.kind==="death"){const r=this.mobs.indexOf(t);r>=0&&this.mobs.splice(r,1)}}mobUnderRay(t=this.crosshairRay()){const{origin:e,direction:n}=t,{x:s,y:r,z:o}=e,{x:a,y:l,z:c}=n;let h=null,u=BA;for(const d of this.mobs){const p=ii[d.kind],g=p.width/2,v=jA(s,r,o,a,l,c,d.pos.x-g,d.pos.y,d.pos.z-g,d.pos.x+g,d.pos.y+p.height,d.pos.z+g);v!==null&&v<u&&(u=v,h=d)}return h!==null&&uf({x:s,y:r,z:o},{x:a,y:l,z:c},u,(p,g,v)=>ke(this.world.getBlock(p,g,v)))?null:h}attackMob(t,e){oe.attack(),this.hand.swing();const n=this.inv[this.hotbar.index],s=KA(n?n.id:null),r=n?no(n.id):null;if(!this.creative&&r){let u=!1;for(let d=r.kind==="sword"?1:2;d>0;d--)u=wa(this.inv,this.hotbar.index,r.maxDurability)||u;u&&oe.toolBreak(),this.hotbar.render(this.inv)}const o=e==null?void 0:e.direction,a=o?Math.hypot(o.x,o.z):0,l=o&&a>1e-6?o.x/a:Math.cos(this.look.yaw),c=o&&a>1e-6?o.z/a:Math.sin(this.look.yaw),h=Dc(t,s,{x:l,z:c},this.mobRng);h.events.some(u=>u.kind==="hurt")&&oe.mobHurt(h.events.some(u=>u.kind==="death")),Object.assign(t,h.mob);for(const u of h.events)if(u.kind==="drops")for(const d of u.items)this.drops.push(vn(d.id,Math.floor(u.pos.x),Math.floor(u.pos.y),Math.floor(u.pos.z),Math.random,d.count));else if(u.kind==="death"){const d=this.mobs.indexOf(t);d>=0&&this.mobs.splice(d,1)}}placeBlock(t=this.rayHit()){const e=this.hotbar.index,n=this.inv[e];if(!n||n.count<=0||n.id>=256||!t)return;const s=lf(this.world.getBlock(t.x,t.y,t.z)),r=s?t.x:t.x+t.nx,o=s?t.y:t.y+t.ny,a=s?t.z:t.z+t.nz,l=this.world.getBlock(r,o,a);if(!lf(l))return;const c=$n(l);if(this.overlapsPlayer(r,o,a))return;const h=this.creative?n.id:Yf(this.inv,e);h!==null&&(this.edit(r,o,a,h),oe.blockPlace(h),c&&this.collapseInvalidPortalsAround(r,o,a),(h===vc||h===oa)&&this.settleFallingBlock(r,o,a),this.hotbar.render(this.inv),this.hand.swing())}overlapsPlayer(t,e,n){const s=this.player.pos,r=nl/2;return t<s.x+r&&t+1>s.x-r&&e<s.y+gs&&e+1>s.y&&n<s.z+r&&n+1>s.z-r}updateDayNight(){const t=Ba(this.worldTime,this.dimension),e=this.worldTime/ln*Math.PI*2,n=Math.sin(e);let s=0;this.dimension==="overworld"&&n>-.15&&(s=Math.max(0,1-Math.abs(n)/.3)*Math.min(1,(n+.15)/.15)),this.renderer.setSkyColors(t.skyTop,t.skyHorizon,e,s,n,this.dimension==="overworld");const r=this.normalFog;r&&r.color.setRGB(t.skyHorizon[0],t.skyHorizon[1],t.skyHorizon[2],ue);const o=t.worldTint,a=Math.max(o[0],o[1],o[2],.001);this.chunks.setTint([o[0]/a,o[1]/a,o[2]/a]);const c=WS(this.worldTime,this.dimension);this.skyDarkenNow=c,this.chunks.setSkyDarken(c),this.chunks.setSkyMul(this.dimension==="overworld"?Math.max(0,1-$h(this.worldTime)/11):0),this.chunks.setSkyReflection(t.skyHorizon,t.skyTop);const h=this.worldTime/ln*Math.PI*2;this.chunks.setSunDir(Math.cos(h),Math.sin(h),.1)}updateGodRays(){if(this.lightingQuality==="off")return;const t=this.worldTime/ln*Math.PI*2,e=Math.cos(t),n=Math.sin(t),s=.1,r=Math.hypot(e,n,s)||1,o=n/r,a=this.renderer.camera;a.getWorldDirection(this._godFwd);const l=this._godFwd.x*(e/r)+this._godFwd.y*(n/r)+this._godFwd.z*(s/r),c=500;this._godSunWorld.set(a.position.x+e/r*c,a.position.y+n/r*c,a.position.z+s/r*c),this._godSunWorld.project(a);const h=this._godSunWorld,u=h.x*.5+.5,d=h.y*.5+.5,p=u>=0&&u<=1&&d>=0&&d<=1;let g=0;this.dimension==="overworld"&&o>0&&l>0&&p&&(g=Math.min(.6,o*2.6));const v=1,m=.6+o*.7,f=.3+o*1;this._godSunColor.setRGB(v,Math.min(1,m),Math.min(1,f)),this._godSunUV.set(u,d),this.renderer.setGodRays({quality:this.lightingQuality,sunUV:this._godSunUV,intensity:g,sunColor:this._godSunColor})}updateWater(){const t=this.renderer.camera.position,e=this.pointInWater(t.x,t.y,t.z);this.renderer.scene.fog=e&&this.lightingQuality==="off"?this.underFog:this.normalFog,this.renderer.setUnderwater(e),this.chunks.setCameraUnderwater(e),this.hand.setUnderwater(e),this.underwaterEl&&(this.underwaterEl.style.display=e&&this.lightingQuality==="off"?"block":"none")}updateHighlight(){const t=this.rayHit();t?(this.highlight.position.set(t.x+.5,t.y+.5,t.z+.5),this.highlight.visible=!0):this.highlight.visible=!1}updateCamera(t){const e=this.prev.pos,n=this.player.pos,s=e.x+(n.x-e.x)*t,r=e.y+(n.y-e.y)*t,o=e.z+(n.z-e.z)*t,a=this.renderer.camera;this.camEye+=((this.crouching?zb:Yn)-this.camEye)*.3;const l=this.camEye;a.position.set(s,r+l,o);const c=Math.cos(this.look.yaw),h=Math.sin(this.look.yaw),u=Math.cos(this.look.pitch),d=Math.sin(this.look.pitch);a.lookAt(s+c*u,r+l+d,o+h*u)}}const Zc=4;class QA{constructor(t,e=4242){y(this,"gl");y(this,"scene",new wr);y(this,"camera",new Ze(70,1,.1,1e3));y(this,"world");y(this,"chunks");y(this,"running",!1);y(this,"x",.5);y(this,"z",.5);y(this,"heading",.7);y(this,"y",175);y(this,"disposed",!1);y(this,"preloadAbort",null);y(this,"onResize",()=>this.resize());var n,s;this.gl=new _m({canvas:t,antialias:!1}),this.gl.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene.background=oM(),this.scene.fog=new yr(bm,40,Zc*16),this.camera.layers.enable(zh),this.world=new zm(e),this.seekWater(),this.chunks=new Zm(this.scene,this.world,hh()),this.chunks.update(qt(Math.floor(this.x)),qt(Math.floor(this.z)),Zc,999),this.resize(),window.addEventListener("resize",this.onResize),window.addEventListener("orientationchange",this.onResize),(n=window.visualViewport)==null||n.addEventListener("resize",this.onResize),(s=window.visualViewport)==null||s.addEventListener("scroll",this.onResize)}seekWater(){for(let t=4;t<120;t+=3)for(let e=0;e<12;e++){const n=e/12*Math.PI*2,s=Math.round(Math.cos(n)*t),r=Math.round(Math.sin(n)*t);if(ti(this.world.getBlock(s,ee,r))){this.heading=n,this.x=s-Math.cos(n)*14+.5,this.z=r-Math.sin(n)*14+.5;return}}}resize(){const{width:t,height:e}=Tm(window);this.gl.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}async preload(t=Zc,e){var a;(a=this.preloadAbort)==null||a.abort();const n=new AbortController;this.preloadAbort=n;const s=()=>n.abort();e!=null&&e.aborted?s():e==null||e.addEventListener("abort",s,{once:!0});const r=n.signal,o=()=>this.disposed||r.aborted;try{if(o())return;const l=qt(Math.floor(this.x)),c=qt(Math.floor(this.z));for(let u=-t;u<=t;u++)for(let d=-t;d<=t;d++)this.world.request(l+d,c+u);if(!await new Promise(u=>{let d=null,p=!1;const g=f=>{p||(p=!0,d!==null&&clearTimeout(d),r.removeEventListener("abort",v),u(f))},v=()=>g(!1),m=()=>{if(o()){g(!1);return}let f=!0;for(let x=-t;x<=t&&f;x++)for(let _=-t;_<=t&&f;_++)this.world.peek(l+_,c+x)||(f=!1);f?g(!0):d=setTimeout(m,30)};r.addEventListener("abort",v,{once:!0}),m()})||o())return;for(let u=0;u<600&&(u<3||this.chunks.meshBusy());u++)if(o()||(this.chunks.update(l,c,t,999),this.chunks.flushMesh(999),!await new Promise(p=>{let g=!1,v=0;const m=x=>{g||(g=!0,r.removeEventListener("abort",f),p(x))},f=()=>{v!==0&&cancelAnimationFrame(v),m(!1)};r.addEventListener("abort",f,{once:!0}),v=requestAnimationFrame(()=>m(!0))})))return}finally{e==null||e.removeEventListener("abort",s),this.preloadAbort===n&&(this.preloadAbort=null)}}start(){if(this.running)return;this.running=!0;const t=()=>{this.running&&(requestAnimationFrame(t),this.heading+=6e-4,this.camera.position.set(this.x,this.y,this.z),this.camera.lookAt(this.x+Math.cos(this.heading)*26,this.y-17,this.z+Math.sin(this.heading)*26),this.chunks.flushMesh(2),this.gl.render(this.scene,this.camera))};requestAnimationFrame(t)}stop(){this.running=!1}dispose(){var t,e,n;this.disposed||(this.disposed=!0,(t=this.preloadAbort)==null||t.abort(),this.preloadAbort=null,this.running=!1,window.removeEventListener("resize",this.onResize),window.removeEventListener("orientationchange",this.onResize),(e=window.visualViewport)==null||e.removeEventListener("resize",this.onResize),(n=window.visualViewport)==null||n.removeEventListener("scroll",this.onResize),this.chunks.dispose(),this.world.dispose(),this.gl.dispose(),this.gl.forceContextLoss())}}function JA(){if(document.getElementById("mw-settings-css"))return;const i=document.createElement("style");i.id="mw-settings-css",i.textContent=`
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
    #settings input[type=checkbox]:checked::after{content:'';position:absolute;inset:4px;background:#0e1a28;}`,document.head.appendChild(i)}class tR{constructor(t){y(this,"root");y(this,"settings");y(this,"onChange",null);this.root=t,this.settings=Wm(),t.classList.remove("hidden"),JA(),t.style.cssText="position:fixed;inset:0;z-index:40;display:none;align-items:center;justify-content:center;background:#0e1a28;overflow-y:auto;overscroll-behavior:contain;touch-action:pan-y;-webkit-overflow-scrolling:touch;",t.innerHTML=`
      <div class="settings-card" style="width:min(560px,90vw);margin:24px auto;color:#dce8f2;font-family:'Zpix',monospace;display:flex;flex-direction:column;gap:24px;">
        <h2 class="screen-title" style="margin:0 0 4px;text-align:center;">设置</h2>
        <label style="display:flex;align-items:center;gap:12px;">
          <span style="width:108px;">音量</span>
          <input id="set-vol" type="range" min="0" max="100" style="flex:1;" />
          <span id="set-vol-val" style="width:46px;text-align:right;"></span>
        </label>
        <div style="font-size:12px;color:#8aa;margin-top:-10px;margin-left:120px;">同时控制环境音乐与游戏音效</div>
        <label style="display:flex;align-items:center;gap:12px;">
          <span style="width:108px;">光影</span>
          <select id="set-lighting" style="background:#16212e;color:#dce8f2;border:2px solid #5a7390;padding:2px 6px;font-family:'Zpix',monospace;font-size:14px;cursor:pointer;">
            <option value="off">关</option>
            <option value="standard">标准</option>
            <option value="high">超高</option>
          </select>
        </label>
        <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
          <span style="width:108px;">材质</span>
          <button id="set-tex-classic" class="btn" type="button" style="font-size:15px;padding:9px 10px;">标准像素</button>
          <button id="set-tex-cartoon" class="btn" type="button" style="font-size:15px;padding:9px 10px;">鲜艳像素</button>
          <button id="set-tex-realistic" class="btn" type="button" style="font-size:15px;padding:9px 10px;">写实材质</button>
        </div>
        <label style="display:flex;align-items:center;gap:12px;">
          <span style="width:108px;">渲染距离</span>
          <input id="set-rd" type="range" min="3" max="12" style="flex:1;" />
          <span id="set-rd-val" style="width:46px;text-align:right;"></span>
        </label>
        <div style="font-size:12px;color:#8aa;margin-top:-10px;margin-left:120px;">小=白雾更近、更流畅；大=看得远、更吃性能</div>
        <button id="set-close" class="btn btn-wide" type="button" style="margin-top:6px;">返回</button>
      </div>`;const e=t.querySelector("#set-vol"),n=t.querySelector("#set-vol-val"),s=t.querySelector("#set-lighting"),r=t.querySelector("#set-tex-cartoon"),o=t.querySelector("#set-tex-classic"),a=t.querySelector("#set-tex-realistic"),l=()=>{r.classList.toggle("active",this.settings.texturePack==="cartoon"),o.classList.toggle("active",this.settings.texturePack==="classic"),a.classList.toggle("active",this.settings.texturePack==="realistic"),r.style.outline=this.settings.texturePack==="cartoon"?"2px solid #6ab0ff":"none",o.style.outline=this.settings.texturePack==="classic"?"2px solid #6ab0ff":"none",a.style.outline=this.settings.texturePack==="realistic"?"2px solid #6ab0ff":"none"},c=()=>{var v;TS(this.settings),(v=this.onChange)==null||v.call(this,this.settings)},h=v=>{this.settings={...this.settings,texturePack:v},l(),c()},u=()=>e.style.setProperty("--fill",`${this.settings.volume}%`);e.addEventListener("input",()=>{this.settings={...this.settings,volume:Number(e.value)},n.textContent=`${this.settings.volume}%`,u(),c()}),s.addEventListener("change",()=>{this.settings={...this.settings,lightingQuality:s.value},c()}),r.addEventListener("click",()=>h("cartoon")),o.addEventListener("click",()=>h("classic")),a.addEventListener("click",()=>h("realistic"));const d=t.querySelector("#set-rd"),p=t.querySelector("#set-rd-val"),g=()=>d.style.setProperty("--fill",`${(this.settings.renderDistance-3)/9*100}%`);d.addEventListener("input",()=>{this.settings={...this.settings,renderDistance:Number(d.value)},p.textContent=String(this.settings.renderDistance),g(),c()}),t.querySelector("#set-close").addEventListener("click",()=>this.hide()),e.value=String(this.settings.volume),n.textContent=`${this.settings.volume}%`,u(),s.value=this.settings.lightingQuality,d.value=String(this.settings.renderDistance),p.textContent=String(this.settings.renderDistance),g(),l()}get current(){return this.settings}show(){this.root.style.display="flex"}hide(){this.root.style.display="none"}get visible(){return this.root.style.display!=="none"}}const Mh=5e3;function eR(i){return typeof i=="object"&&i!==null}function nR(i){return typeof i=="number"&&Number.isFinite(i)}function ka(i){return typeof i=="number"&&Number.isInteger(i)}function iR(i){return i==="overworld"||i==="nether"?i:null}function sR(i){return i==="survival"||i==="creative"?i:null}function Z0(i){if(!eR(i))return null;const t=iR(i.dimension);return t===null||!ka(i.x)||!ka(i.y)||!ka(i.z)||!ka(i.id)?null:{dimension:t,x:i.x,y:i.y,z:i.z,id:i.id}}function rR(i){return Number.isInteger(i.seed)&&i.seed>=-2e9&&i.seed<=2e9&&sR(i.gameMode)!==null&&nR(i.worldTime)&&Math.abs(i.worldTime)<=2e9&&Array.isArray(i.edits)&&i.edits.length<=Mh&&i.edits.every(t=>Z0(t)!==null)}function oR(i){const t=[];for(const[e,n]of Object.entries(i.edits)){const s=yh(e),r={dimension:s.dim,x:s.x,y:s.y,z:s.z,id:n};Z0(r)!==null&&t.push(r)}if(t.length>Mh)throw new Error(`这个世界有 ${t.length} 个方块改动，联机房间最多可带入 ${Mh} 个。`);return{seed:Math.floor(i.seed),gameMode:i.gameMode??"survival",worldTime:i.worldTime??1e3,edits:t}}function Sh(i){return i.toUpperCase().replace(/[^A-Z0-9-]/g,"").slice(0,16)}function Mr(i){return[...i].filter(e=>{const n=e.charCodeAt(0);return n>31&&n!==127}).join("").trim().slice(0,16)||"玩家"}const bh="MWP1.",Q0=12e4,aR=1e3/15,Dp=96,Pp={iceServers:[{urls:"stun:stun.cloudflare.com:3478"}]};function ei(i){return typeof i=="object"&&i!==null}function Jn(i){return typeof i=="number"&&Number.isFinite(i)}function Lp(i,t){return ei(i)&&i.type===t&&typeof i.sdp=="string"&&i.sdp.length>0&&i.sdp.length<=Q0}function lR(i){let t="";for(let e=0;e<i.length;e+=32768)t+=String.fromCharCode(...i.subarray(e,e+32768));return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,"")}function cR(i){const t=i.replace(/-/g,"+").replace(/_/g,"/"),e=t+"=".repeat((4-t.length%4)%4),n=atob(e);return Uint8Array.from(n,s=>s.charCodeAt(0))}function kp(i){return bh+lR(new TextEncoder().encode(JSON.stringify(i)))}function Ip(i){const t=i.trim().replace(/\s+/g,"");if(!t.startsWith(bh)||t.length>Q0)throw new Error("这不是有效的 MINEWORLD 点对点连接码");let e;try{e=JSON.parse(new TextDecoder().decode(cR(t.slice(bh.length))))}catch{throw new Error("连接码已损坏，请让好友重新复制完整代码")}if(!ei(e)||e.v!==1||typeof e.session!="string")throw new Error("连接码版本不受支持");if(e.kind==="offer"&&typeof e.room=="string"&&typeof e.hostName=="string"&&Lp(e.description,"offer")){const n=Sh(e.room);if(n.length<3||n!==e.room)throw new Error("邀请中的房间信息无效");return{v:1,kind:"offer",session:e.session,room:n,hostName:Mr(e.hostName),description:e.description}}if(e.kind==="answer"&&typeof e.guestName=="string"&&Lp(e.description,"answer"))return{v:1,kind:"answer",session:e.session,guestName:Mr(e.guestName),description:e.description};throw new Error("连接码内容不完整，请重新生成")}function hR(){const i=new Uint32Array(3);return crypto.getRandomValues(i),[...i].map(t=>t.toString(36)).join("")}async function Up(i,t=12e3){i.iceGatheringState!=="complete"&&await new Promise(e=>{const n=()=>{clearTimeout(r),i.removeEventListener("icegatheringstatechange",s),e()},s=()=>{i.iceGatheringState==="complete"&&n()},r=setTimeout(n,t);i.addEventListener("icegatheringstatechange",s)})}function J0(i){return i==="overworld"||i==="nether"}function Va(i){return ei(i)&&J0(i.dimension)&&Number.isInteger(i.x)&&Number.isInteger(i.y)&&Number.isInteger(i.z)&&Number.isInteger(i.id)&&Math.abs(i.x)<=3e7&&i.y>=0&&i.y<192&&Math.abs(i.z)<=3e7&&i.id>=0&&i.id<=255}function hu(i){return ei(i)&&Jn(i.x)&&Jn(i.y)&&Jn(i.z)&&Jn(i.yaw)&&Jn(i.pitch)&&J0(i.dimension)&&Math.abs(i.x)<=3e7&&Math.abs(i.z)<=3e7}function uR(i){if(!ei(i))return null;const t=i,{id:e,name:n,skin:s}=t;return typeof e!="string"||typeof n!="string"||typeof s!="string"||!hu(t)?null:{id:e.slice(0,48),name:Mr(n),skin:s.slice(0,32),x:t.x,y:t.y,z:t.z,yaw:t.yaw,pitch:t.pitch,dimension:t.dimension}}function Np(i){if(!ei(i)||!Array.isArray(i.edits)||i.edits.length>512||!["portal","explosion","gravity","local"].includes(i.kind)||!i.edits.every(Va))return null;const e=i.center;if(e!==void 0&&(!ei(e)||!Jn(e.x)||!Jn(e.y)||!Jn(e.z)))return null;const n=i.transition;return n!==void 0&&!hu(n)?null:{kind:i.kind,edits:i.edits,...e?{center:{x:e.x,y:e.y,z:e.z}}:{},...n?{transition:n}:{}}}class go{constructor(t,e,n,s,r,o,a){y(this,"players",new Map);y(this,"waiters",[]);y(this,"incomingWorldEdits",[]);y(this,"channel",null);y(this,"roomData");y(this,"initialWorldEdits");y(this,"closed",!1);y(this,"ready",!1);y(this,"lastStateSent",-1/0);y(this,"blockHandler",null);y(this,"blockBatchHandler",null);y(this,"worldTimeHandler",null);y(this,"pendingBlockEvents",[]);y(this,"pendingWorldTime",null);y(this,"onPlayersChanged",null);y(this,"onServerError",null);y(this,"onDisconnect",null);this.pc=t,this.role=e,this.session=n,this.ownId=s,this.ownName=r,this.hostWorld=a,this.roomData=o,this.initialWorldEdits=(a==null?void 0:a.edits)??[],this.pc.addEventListener("connectionstatechange",()=>{(this.pc.connectionState==="failed"||this.pc.connectionState==="closed")&&this.close("点对点连接已断开")})}static async createHost(t){if(!rR(t.world))throw new Error("当前世界无法用于联机");const e=Sh(t.room);if(e.length<3)throw new Error("房间号无效");const n=Mr(t.name),s=hR(),r=new RTCPeerConnection(Pp),o=new go(r,"host",s,`host-${s}`,n,{id:e,seed:t.world.seed,gameMode:t.world.gameMode,worldTime:t.world.worldTime},t.world);if(o.bindChannel(r.createDataChannel("mineworld",{ordered:!0})),await r.setLocalDescription(await r.createOffer()),await Up(r),!r.localDescription)throw new Error("浏览器没有生成点对点邀请");return{client:o,invitation:kp({v:1,kind:"offer",session:s,room:e,hostName:n,description:r.localDescription.toJSON()})}}static async answerInvitation(t){const e=Ip(t.invitation);if(e.kind!=="offer")throw new Error("请粘贴房主生成的邀请码");const n=new RTCPeerConnection(Pp),s=Mr(t.name),r=new go(n,"guest",e.session,`guest-${e.session}`,s,null,null);if(n.addEventListener("datachannel",o=>r.bindChannel(o.channel),{once:!0}),await n.setRemoteDescription(e.description),await n.setLocalDescription(await n.createAnswer()),await Up(n),!n.localDescription)throw new Error("浏览器没有生成点对点回应");return{client:r,response:kp({v:1,kind:"answer",session:e.session,guestName:s,description:n.localDescription.toJSON()})}}async acceptAnswer(t){if(this.role!=="host")throw new Error("只有房主可以使用回应码");if(this.pc.signalingState!=="have-local-offer")throw new Error("这个邀请已经使用过了");const e=Ip(t);if(e.kind!=="answer")throw new Error("请把邀请码替换成好友发回的回应码");if(e.session!==this.session)throw new Error("回应码不属于这次邀请，请重新复制");await this.pc.setRemoteDescription(e.description)}waitUntilConnected(t=45e3){return this.ready&&this.isConnected?Promise.resolve(this):this.closed?Promise.reject(new Error("点对点连接已经关闭")):new Promise((e,n)=>{const s={resolve:e,reject:n,timer:setTimeout(()=>{const r=this.waiters.indexOf(s);r>=0&&this.waiters.splice(r,1),n(new Error("连接超时，请确认双方页面保持打开，并交换了完整的连接码"))},t)};this.waiters.push(s)})}get id(){return this.ownId}get room(){if(!this.roomData)throw new Error("点对点世界尚未同步完成");return this.roomData}get isConnected(){var t;return this.ready&&!this.closed&&((t=this.channel)==null?void 0:t.readyState)==="open"}get playerCount(){return this.isConnected?this.players.size+1:0}get remotePlayers(){return[...this.players.values()]}get initialEdits(){return this.initialWorldEdits}sendState(t){if(!this.isConnected||!hu(t))return;const e=performance.now();e-this.lastStateSent<aR||(this.lastStateSent=e,this.send({type:"state",player:{id:this.ownId,name:this.ownName,skin:"default",...t}}))}sendBlock(t){this.isConnected&&Va(t)&&this.send({type:"block",edit:t})}sendBlockBatch(t,e,n={}){if(!this.isConnected)return;const s=Np({kind:t,edits:e,...n});s&&this.send({type:"blocks",batch:s})}setBlockHandler(t){this.blockHandler=t,this.flushPendingBlocks()}setBlockBatchHandler(t){this.blockBatchHandler=t,this.flushPendingBlocks()}setWorldTimeHandler(t){this.worldTimeHandler=t,t&&this.pendingWorldTime!==null&&(t(this.pendingWorldTime),this.pendingWorldTime=null)}disconnect(t="已退出点对点房间"){var e;((e=this.channel)==null?void 0:e.readyState)==="open"&&this.send({type:"goodbye",reason:t}),this.close(t)}bindChannel(t){this.channel&&this.channel!==t&&this.channel.close(),this.channel=t,t.addEventListener("open",()=>{this.role==="host"&&(this.sendInitialWorld(),this.markReady())}),t.addEventListener("message",e=>this.receive(e.data)),t.addEventListener("close",()=>this.close("好友已断开点对点连接")),t.addEventListener("error",()=>{var e;return(e=this.onServerError)==null?void 0:e.call(this,"点对点数据通道发生错误")}),t.readyState==="open"&&this.role==="host"&&(this.sendInitialWorld(),this.markReady())}sendInitialWorld(){if(!(!this.roomData||!this.hostWorld)){this.send({type:"hello",room:this.roomData,host:{id:this.ownId,name:this.ownName,skin:"default"}});for(let t=0;t<this.hostWorld.edits.length;t+=Dp)this.send({type:"world",edits:this.hostWorld.edits.slice(t,t+Dp)});this.send({type:"world-ready"})}}receive(t){var n;if(typeof t!="string"||t.length>1e6)return;let e;try{e=JSON.parse(t)}catch{return}if(!(!ei(e)||typeof e.type!="string")){if(e.type==="hello"&&this.role==="guest"){if(!ei(e.room)||!ei(e.host))return;const s=e.room.gameMode;if(typeof e.room.id!="string"||!Number.isInteger(e.room.seed)||s!=="creative"&&s!=="survival"||!Jn(e.room.worldTime))return;this.roomData={id:Sh(e.room.id),seed:e.room.seed,gameMode:s,worldTime:e.room.worldTime},this.pendingWorldTime=e.room.worldTime;return}if(e.type==="world"&&this.role==="guest"){if(!Array.isArray(e.edits)||!e.edits.every(Va))return;if(this.incomingWorldEdits.length+e.edits.length>5e3){this.close("好友世界数据过大");return}this.incomingWorldEdits.push(...e.edits);return}if(e.type==="world-ready"&&this.role==="guest"&&this.roomData){this.initialWorldEdits=[...this.incomingWorldEdits],this.markReady();return}if(e.type==="state"){const s=uR(e.player);s&&s.id!==this.ownId&&(this.players.set(s.id,s),(n=this.onPlayersChanged)==null||n.call(this));return}if(e.type==="block"&&Va(e.edit)){this.pendingBlockEvents.push({type:"block",edit:e.edit}),this.flushPendingBlocks();return}if(e.type==="blocks"){const s=Np(e.batch);s&&(this.pendingBlockEvents.push({type:"blocks",batch:s}),this.flushPendingBlocks());return}if(e.type==="time"&&Jn(e.worldTime)){this.worldTimeHandler?this.worldTimeHandler(e.worldTime):this.pendingWorldTime=e.worldTime;return}e.type==="goodbye"&&this.close(typeof e.reason=="string"?e.reason:"好友已退出房间")}}send(t){var e;((e=this.channel)==null?void 0:e.readyState)==="open"&&this.channel.send(JSON.stringify(t))}flushPendingBlocks(){let t=0;for(const e of this.pendingBlockEvents){if(e.type==="block"){if(!this.blockHandler)break;this.blockHandler(e.edit)}else if(this.blockBatchHandler)this.blockBatchHandler(e.batch);else if(this.blockHandler)for(const n of e.batch.edits)this.blockHandler(n);else break;t++}t>0&&this.pendingBlockEvents.splice(0,t)}markReady(){var t;if(!(this.ready||this.closed)){this.ready=!0;for(const e of this.waiters.splice(0))clearTimeout(e.timer),e.resolve(this);(t=this.onPlayersChanged)==null||t.call(this)}}close(t){var e,n;if(!this.closed){this.closed=!0;for(const s of this.waiters.splice(0))clearTimeout(s.timer),s.reject(new Error(t));this.channel&&this.channel.readyState!=="closed"&&this.channel.close(),this.pc.signalingState!=="closed"&&this.pc.close(),this.players.size>0&&(this.players.clear(),(e=this.onPlayersChanged)==null||e.call(this)),(n=this.onDisconnect)==null||n.call(this,t)}}}const Sr=document.getElementById("app"),Lt=i=>document.getElementById(i),yi=C0();document.documentElement.classList.toggle("touch-device",yi);yi&&fT();document.addEventListener("click",i=>{const t=i.target;t instanceof Element&&t.closest("button")&&oe.uiClick()});const uu=Lt("menubg");let Ve=null;const br=Lt("menu"),fl=Lt("worldlist"),Tr=Lt("multiplayer"),In=Lt("pause"),Qc=Lt("world-rows"),dr=Lt("online-hud");let Pt=null,Ia=!1,Ee=null,Kn=null,Zr="",fr=!1;const Rl=Lt("boot"),dR=Rl.querySelector(".boot-tip"),cn=(i,t="加载中…")=>{Rl.classList.toggle("hidden",!i),i&&(dR.textContent=t)};let tg=!1,Th=!1,eg=!1;const ng=i=>{tg||eg||(Th=!0,cn(!0,`出错了：${i}（请把这行字发给开发）`))};window.addEventListener("error",i=>ng(i.message||String(i.error)));window.addEventListener("unhandledrejection",i=>ng(String(i.reason&&(i.reason.message||i.reason.stack)||i.reason)));try{Ve=new QA(uu)}catch(i){console.error("[menubg] 初始化失败:",i),Ve=null}const pl=["100% 纯方块!","无限的世界!","由 Three.js 驱动!","会挖会放会跳!","试试双击 W 疾跑~","支持 WebGL2!","像素手工打造!","水快会流动了!","也试试我的世界!"];Lt("splash").textContent=pl[Math.floor(Math.random()*pl.length)];const Fp=Rl.querySelector(".boot-splash");Fp&&(Fp.textContent=pl[Math.floor(Math.random()*pl.length)]);const Ua=yi?["提示: 左侧滑动方向盘移动，空白处拖动视角","提示: 双击前进后按住可以疾跑","提示: 轻点空白处可互动或放置方块","提示: 长按空白处可挖方块或攻击","提示: 可以直接点快捷栏切换物品","提示: 石头要用镐才挖得动"]:["提示: 按住左键挖方块","提示: 双击 W 可以疾跑","提示: 右键放方块(会消耗物品)","提示: 数字键 1-9 / 滚轮 切换物品","提示: 石头要用镐才挖得动","提示: 砍树 → 木板 → 工作台 → 工具","提示: 熔炉能把铁矿炼成铁锭","提示: 天黑了小心怪物"],Jc=Rl.querySelector(".boot-hint");if(Jc){let i=Math.floor(Math.random()*Ua.length);Jc.textContent=Ua[i],setInterval(()=>{i=(i+1)%Ua.length,Jc.textContent=Ua[i]},2600)}function fn(i){Lt("crosshair").style.display=i?"block":"none",Lt("hotbar").style.display=i?"flex":"none",Lt("held-item-name").style.display=i?"block":"none",Lt("status").style.display=i&&!((Pt==null?void 0:Pt.isCreativeMode())??!1)?"flex":"none",dr.classList.toggle("hidden",!i||Ee===null),Pt==null||Pt.setTouchActive(i&&yi)}function kr(i){for(const e of[br,fl,Tr,In])e.classList.add("hidden");Lt("newworld").classList.add("hidden"),i&&i.classList.remove("hidden"),fn(!1);const t=i===br||i===fl||i===Tr;uu.style.display=t?"block":"none",t?Ve==null||Ve.start():Ve==null||Ve.stop()}const ig=i=>new Promise(t=>setTimeout(t,i));(async()=>{if(!Th){cn(!0,"加载中…");try{if(Ve){const i=new AbortController;try{await Promise.race([Ve.preload(void 0,i.signal),ig(8e3)])}finally{i.abort()}}}catch(i){console.error("[menubg] preload 失败:",i)}Th||(eg=!0,kr(br),cn(!1))}})();const du=new tR(Lt("settings"));du.onChange=i=>{oe.setVolume(i.volume),Pt==null||Pt.setTexturePack(i.texturePack),Pt==null||Pt.setLightingQuality(i.lightingQuality),Pt==null||Pt.setRenderDistance(i.renderDistance)};Lt("settings-btn").addEventListener("click",()=>du.show());Lt("settings-btn-pause").addEventListener("click",()=>du.show());Lt("play").addEventListener("click",()=>bR());const vs=Lt("mp-name"),Je=Lt("mp-code"),fR=Lt("mp-code-label"),Op=Lt("mp-status"),Eh=Lt("mp-create"),pr=Lt("mp-join"),So=Lt("mp-copy"),bo=Lt("mp-finish"),pR=Lt("mp-title"),mR=Lt("mp-intro"),gR=Lt("mp-mode-field"),sg=Lt("mp-back");let _s="join",Hi=null,Cl=!1,se=null;function wn(i,t=!1){Op.textContent=i,Op.classList.toggle("error",t)}function rg(i){Lt("mp-current-mode").textContent=i==="creative"?"创造模式":"生存模式",Lt("mp-mode-desc").textContent=i==="creative"?"适合和朋友一起搭建；玩家与方块会实时同步。":"玩家与方块会实时同步；生物、掉落物和背包暂各自本地运行。"}function og(){try{vs.value=localStorage.getItem("mineworld.multiplayer.name")??""}catch{}}function ag(i){_s=i;const t=i==="host";pR.textContent=t?"开启点对点房间":"加入点对点房间",mR.textContent=t?"生成邀请码发给朋友；朋友返回回应码后，粘贴回来完成直连。":"粘贴房主的邀请码，生成回应码发回给房主。双方页面都要保持打开。",fR.textContent=t?"邀请码 / 好友回应码":"房主的邀请码",Je.placeholder=t?"先生成邀请码；收到好友回应码后，替换这里的内容":"在这里粘贴以 MWP1. 开头的邀请码",gR.classList.toggle("hidden",!t),Eh.classList.toggle("hidden",!t),pr.classList.toggle("hidden",t),So.classList.add("hidden"),bo.classList.add("hidden"),Eh.disabled=!1,pr.disabled=!1,sg.textContent=t?"返回暂停菜单":"返回"}function vR(){const i="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let t="MW";for(let e=0;e<5;e++)t+=i[Math.floor(Math.random()*i.length)];return t}function Na(){if(!Ee){dr.classList.add("hidden");return}dr.textContent=Zr||`联机 · 房间 ${Ee.room.id.toUpperCase()}
${Ee.playerCount} 名玩家`}function fu(){if(_s==="join"){kr(Tr);return}for(const i of[br,fl,In])i.classList.add("hidden");Lt("newworld").classList.add("hidden"),Tr.classList.remove("hidden"),fn(!1),uu.style.display="none",Ve==null||Ve.stop()}function _R(){se==null||se.disconnect("已取消连接"),se=null,ag("join"),Hi=null,og(),Je.value="",rg("creative"),wn("粘贴邀请码，再生成回应码发回给房主。"),fu(),(vs.value?Je:vs).focus()}function xR(){!Pt||Ee!==null||(se==null||se.disconnect("已取消连接"),se=null,Hi=Pt.snapshot(),ag("host"),og(),Je.value="",rg(Hi.gameMode??"survival"),wn("点击“生成邀请码”，复制给朋友。"),fu(),vs.focus())}function yR(){if(se==null||se.disconnect("已取消连接"),se=null,_s==="host"&&Pt&&Ee===null){Hi=null,Tr.classList.add("hidden"),In.classList.remove("hidden"),fn(!1);return}Hi=null,kr(br)}function lg(i){if(Kn!==null&&(window.clearTimeout(Kn),Kn=null),Zr="",Ee=i,Lt("save-quit").textContent=i?"退出房间":"保存并退出",Lt("open-room").classList.toggle("hidden",i!==null),!i){dr.classList.add("hidden");return}i.onPlayersChanged=()=>Na(),i.onServerError=t=>{Ee===i&&(Zr=`联机操作未同步
${t}`,Na(),Kn!==null&&window.clearTimeout(Kn),Kn=window.setTimeout(()=>{Kn=null,Zr="",Ee===i&&Na()},4e3))},i.onDisconnect=t=>{if(Ee!==i)return;Kn!==null&&(window.clearTimeout(Kn),Kn=null),Zr="";const e=(Pt==null?void 0:Pt.isContainerOpen())??!1;e&&(Pt==null||Pt.prepareForSave());const n=xs();Pt==null||Pt.detachMultiplayer(i),Ee=null,Lt("open-room").classList.toggle("hidden",!fr),Lt("save-quit").textContent=fr?"保存并退出":"退出房间",dr.classList.remove("hidden"),dr.textContent=fr?`联机已断开 · 本地世界${n?"已保存":"保存失败"}
${t}`:`联机已断开
${t}`,e&&Pt&&(Pt.setTouchActive(!1),fn(!1),In.classList.remove("hidden"))},Na()}function wR(i){const t={};for(const n of i.initialEdits)t[xh(n.dimension,n.x,n.y,n.z)]=n.id;const e=i.room;return{id:`online:${e.id}:${e.seed}`,name:`联机 · ${e.id.toUpperCase()}`,seed:e.seed,gameMode:e.gameMode,lastPlayed:Date.now(),edits:t,worldTime:e.worldTime}}function cg(){const i=Mr(vs.value);vs.value=i;try{localStorage.setItem("mineworld.multiplayer.name",i)}catch{}return i}function Er(i){Cl=i,Eh.disabled=i,pr.disabled=i,bo.disabled=i}async function hg(){if(!Cl){if(_s!=="host"||!Hi){wn("请先进入一个单人世界，再从暂停菜单开启房间。",!0);return}se==null||se.disconnect("已重新生成邀请"),se=null,Er(!0),wn("正在收集直连信息…");try{const{client:i,invitation:t}=await go.createHost({room:vR(),name:cg(),world:oR(Hi)});se=i,Je.value=t,So.classList.remove("hidden"),bo.classList.remove("hidden"),wn("邀请码已生成：复制给朋友。收到回应码后，用它替换上方内容，再点“使用回应码连接”。"),Je.select()}catch(i){wn(i instanceof Error?i.message:"无法生成点对点邀请。",!0)}finally{Er(!1)}}}async function ug(){if(!Cl){if(!Je.value.trim()){wn("请先粘贴房主发来的完整邀请码。",!0),Je.focus();return}se==null||se.disconnect("已重新生成回应"),se=null,Er(!0),wn("正在生成回应码…");try{const{client:i,response:t}=await go.answerInvitation({invitation:Je.value,name:cg()});se=i,Je.value=t,pr.disabled=!0,So.classList.remove("hidden"),wn("回应码已生成：复制并发回房主。本页保持打开，连接成功后会自动进入世界。"),Je.select(),i.waitUntilConnected(3e5).then(e=>{se===e&&(se=null,vu(wR(e),e))}).catch(e=>{se===i&&(se=null,pr.disabled=!1,wn(e instanceof Error?e.message:"点对点连接失败。",!0))})}catch(i){wn(i instanceof Error?i.message:"无法生成点对点回应。",!0)}finally{Er(!1),se&&(pr.disabled=!0)}}}async function MR(){if(Cl||!se||_s!=="host")return;const i=se;Er(!0),cn(!0,"正在建立浏览器直连…");try{if(await i.acceptAnswer(Je.value),await i.waitUntilConnected(6e4),!Pt||!Pt.attachMultiplayer(i))throw new Error("当前世界已经不在单人状态，请返回后重试。");se=null,lg(i),Hi=null,Tr.classList.add("hidden"),In.classList.add("hidden"),cn(!1),fn(!0),yi||Sr.requestPointerLock()}catch(t){i.disconnect("连接未完成"),se===i&&(se=null),cn(!1),bo.classList.add("hidden"),So.classList.add("hidden"),wn(t instanceof Error?t.message:"点对点连接失败。",!0),fu()}finally{Er(!1)}}async function SR(){if(Je.value){try{await navigator.clipboard.writeText(Je.value)}catch{Je.focus(),Je.select(),document.execCommand("copy")}wn(_s==="host"?"已复制。发给朋友；再把朋友的回应码粘贴回来。":"已复制。发回给房主，并保持本页打开。")}}Lt("multiplayer-play").addEventListener("click",()=>_R());Lt("open-room").addEventListener("click",()=>xR());Lt("mp-create").addEventListener("click",()=>void hg());Lt("mp-join").addEventListener("click",()=>void ug());So.addEventListener("click",()=>void SR());bo.addEventListener("click",()=>void MR());sg.addEventListener("click",()=>yR());vs.addEventListener("keydown",i=>{i.key==="Enter"&&(_s==="host"?hg():ug())});Lt("fullscreen").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()});Lt("about").addEventListener("click",()=>Lt("about-panel").classList.remove("hidden"));Lt("about-close").addEventListener("click",()=>Lt("about-panel").classList.add("hidden"));function bR(){dg(),kr(fl)}function dg(){Qc.innerHTML="";const i=ZE();if(i.length===0){const t=document.createElement("div");t.className="world-empty",t.textContent="还没有世界, 点 创建新世界 开始吧",Qc.appendChild(t);return}for(const t of i){const e=document.createElement("div");e.className="world-row";const n=document.createElement("span");n.className="wname",n.textContent=t.name;const s=document.createElement("span");s.className="wmeta",s.textContent=`种子 ${t.seed}${t.gameMode==="creative"?" · 创造":""}`;const r=document.createElement("span");r.className="wdel",r.textContent="删除",r.addEventListener("click",o=>{if(o.stopPropagation(),!tA(t.id)){s.textContent="删除失败：浏览器存储不可用";return}dg()}),e.append(n,s,r),e.addEventListener("click",()=>vu(t)),Qc.appendChild(e)}}const pu=Lt("newworld"),ml=Lt("nw-name"),mu=Lt("nw-seed"),fg=Lt("nw-mode-desc");let pg="survival";function gu(i){pg=i,Lt("nw-survival").classList.toggle("active",i==="survival"),Lt("nw-creative").classList.toggle("active",i==="creative"),fg.textContent=i==="creative"?"无限方块、自由飞行（双击空格）、无敌不饿——专心建造。":"挖矿、合成、打怪，会饿会死。"}function mg(){try{const i=JE(ml.value,QE(mu.value)??void 0,pg);pu.classList.add("hidden"),vu(i)}catch(i){fg.textContent=i instanceof Error?i.message:"创建世界失败，请重试。"}}Lt("nw-survival").addEventListener("click",()=>gu("survival"));Lt("nw-creative").addEventListener("click",()=>gu("creative"));Lt("create-world").addEventListener("click",()=>{ml.value="",mu.value="",gu("survival"),pu.classList.remove("hidden"),ml.focus()});Lt("nw-create").addEventListener("click",mg);Lt("nw-cancel").addEventListener("click",()=>pu.classList.add("hidden"));for(const i of[ml,mu])i.addEventListener("keydown",t=>{t.key==="Enter"&&mg()});Lt("worldlist-back").addEventListener("click",()=>kr(br));function vu(i,t=null){if(Pt||Ia){t==null||t.disconnect("游戏已经在运行");return}Ia=!0,fr=t===null,lg(t),kr(null),cn(!0,"进入中…");try{Ve==null||Ve.dispose()}catch(e){console.error("[startGame] 菜单背景释放出错(忽略,继续):",e)}Ve=null,requestAnimationFrame(()=>requestAnimationFrame(async()=>{try{if(t&&!t.isConnected)throw new Error("联机在进入世界前已断开");cn(!0,"进入中…①构建世界");const e=new ZA(Sr,i,t);Pt=e,cn(!0,"进入中…②生成出生区块");const n=new AbortController;try{await Promise.race([e.preloadSpawn(3,n.signal),ig(12e3)])}finally{n.abort()}cn(!0,"进入中…③启动渲染"),e.start(),Ia=!1,tg=!0,window.__mw=e,cn(!1),yi?(fn(!0),e.setTouchActive(!0)):Sr.requestPointerLock()}catch(e){Ia=!1,console.error("[startGame] 进入游戏失败:",e),Ee===t&&(t==null||t.disconnect("进入世界失败"),Ee=null);const n=e instanceof Error?`${e.stack??e.message}`:String(e);cn(!0,`进入失败：${n}`)}}))}function xs(){return!Pt||!fr?!0:X0(Pt.snapshot())}Lt("resume").addEventListener("click",()=>{yi?(In.classList.add("hidden"),fn(!0),Pt==null||Pt.setTouchActive(!0)):Sr.requestPointerLock()});Lt("save-quit").addEventListener("click",()=>{const i=(Ee==null?void 0:Ee.isConnected)===!0;if(fr&&(Pt==null||Pt.prepareForSave()),!xs()){cn(!0,"保存失败：请释放浏览器网站存储空间后重试"),window.setTimeout(()=>cn(!1),4e3);return}Ee==null||Ee.disconnect("玩家退出房间"),cn(!0,i?"正在退出联机房间…":"保存并返回主菜单…"),location.reload()});const Ar=Lt("death");document.addEventListener("pointerlockchange",()=>{if(yi)return;if(document.pointerLockElement===Sr)In.classList.add("hidden"),Ar.style.display="none",fn(!0);else if(Pt){if(xs(),Pt.isContainerOpen())return;fn(!1),Pt.isDead()?Ar.style.display="flex":In.classList.remove("hidden")}});window.addEventListener("mineworld:touch-pause",()=>{!Pt||Pt.isDead()||(Pt.setTouchActive(!1),xs(),fn(!1),In.classList.remove("hidden"))});window.addEventListener("mineworld:death",()=>{fn(!1),In.classList.add("hidden"),Ar.style.display="flex"});Lt("respawn").addEventListener("click",()=>{Pt&&(Pt.respawn(),Ar.style.display="none",yi?fn(!0):Sr.requestPointerLock())});setInterval(()=>{Pt!=null&&Pt.isGameplayActive()&&xs()},15e3);let Ah=!1;function gg(){Ah||(Ah=!0,Pt==null||Pt.prepareForSave(),xs())}window.addEventListener("pagehide",gg);document.addEventListener("visibilitychange",()=>{document.visibilityState!=="hidden"||!Pt||(Pt.setTouchActive(!1),Pt.prepareForSave(),xs(),fn(!1),Pt.isDead()?Ar.style.display="flex":In.classList.remove("hidden"))});window.addEventListener("pageshow",()=>{Ah=!1,Pt&&(Pt.setTouchActive(!1),fn(!1),Pt.isDead()?Ar.style.display="flex":In.classList.remove("hidden"))});window.addEventListener("beforeunload",()=>{gg(),Ee==null||Ee.disconnect("页面关闭")});
