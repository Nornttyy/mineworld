var zf=Object.defineProperty;var Bf=(i,t,e)=>t in i?zf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var b=(i,t,e)=>(Bf(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fl="165",Hf=0,ql=1,Gf=2,Uu=1,Nu=2,Cn=3,jn=0,Le=1,ze=2,Zn=0,Zi=1,Ka=2,Yl=3,$l=4,Vf=5,mi=100,Wf=101,Xf=102,qf=103,Yf=104,$f=200,Kf=201,Zf=202,jf=203,Za=204,ja=205,Jf=206,Qf=207,tp=208,ep=209,np=210,ip=211,sp=212,rp=213,op=214,ap=0,lp=1,cp=2,Kr=3,hp=4,up=5,dp=6,fp=7,ku=0,pp=1,mp=2,Un=0,gp=1,_p=2,vp=3,xp=4,Mp=5,yp=6,Sp=7,Fu=300,is=301,ss=302,Ja=303,Qa=304,xo=306,rs=1e3,vi=1001,tl=1002,re=1003,pl=1004,tr=1005,Ae=1006,Uo=1007,xi=1008,Jn=1009,Ep=1010,bp=1011,Zr=1012,Ou=1013,yi=1014,Kn=1015,fs=1016,zu=1017,Bu=1018,os=1020,wp=35902,Tp=1021,Ap=1022,vn=1023,Cp=1024,Rp=1025,ji=1026,as=1027,Pp=1028,Hu=1029,Lp=1030,Gu=1031,Vu=1033,No=33776,ko=33777,Fo=33778,Oo=33779,Kl=35840,Zl=35841,jl=35842,Jl=35843,Ql=36196,tc=37492,ec=37496,nc=37808,ic=37809,sc=37810,rc=37811,oc=37812,ac=37813,lc=37814,cc=37815,hc=37816,uc=37817,dc=37818,fc=37819,pc=37820,mc=37821,zo=36492,gc=36494,_c=36495,Dp=36283,vc=36284,xc=36285,Mc=36286,Ip=3200,Wu=3201,Up=0,Np=1,$n="",se="srgb",ei="srgb-linear",ml="display-p3",Mo="display-p3-linear",jr="linear",oe="srgb",Jr="rec709",Qr="p3",wi=7680,yc=519,kp=512,Fp=513,Op=514,Xu=515,zp=516,Bp=517,Hp=518,Gp=519,Sc=35044,Ec=35048,bc="300 es",Dn=2e3,to=2001;class ps{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yr=Math.PI/180,el=180/Math.PI;function qs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Ge(i,t,e){return Math.max(t,Math.min(e,i))}function Vp(i,t){return(i%t+t)%t}function Bo(i,t,e){return(1-e)*i+e*t}function ys(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,s,r,o,a,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],x=s[1],v=s[4],w=s[7],k=s[2],A=s[5],C=s[8];return r[0]=o*_+a*x+l*k,r[3]=o*p+a*v+l*A,r[6]=o*m+a*w+l*C,r[1]=c*_+h*x+u*k,r[4]=c*p+h*v+u*A,r[7]=c*m+h*w+u*C,r[2]=d*_+f*x+g*k,r[5]=d*p+f*v+g*A,r[8]=d*m+f*w+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ho.makeScale(t,e)),this}rotate(t){return this.premultiply(Ho.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ho.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ho=new zt;function qu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wp(){const i=Bs("canvas");return i.style.display="block",i}const wc={};function Yu(i){i in wc||(wc[i]=!0,console.warn(i))}function Xp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Tc=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ac=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),er={[ei]:{transfer:jr,primaries:Jr,toReference:i=>i,fromReference:i=>i},[se]:{transfer:oe,primaries:Jr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Mo]:{transfer:jr,primaries:Qr,toReference:i=>i.applyMatrix3(Ac),fromReference:i=>i.applyMatrix3(Tc)},[ml]:{transfer:oe,primaries:Qr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ac),fromReference:i=>i.applyMatrix3(Tc).convertLinearToSRGB()}},qp=new Set([ei,Mo]),te={enabled:!0,_workingColorSpace:ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!qp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=er[t].toReference,s=er[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return er[i].primaries},getTransfer:function(i){return i===$n?jr:er[i].transfer}};function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Go(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ti;class Yp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ti===void 0&&(Ti=Bs("canvas")),Ti.width=t.width,Ti.height=t.height;const n=Ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Bs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ji(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ji(e[n]/255)*255):e[n]=Ji(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $p=0;class $u{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=qs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vo(s[o].image)):r.push(Vo(s[o]))}else r=Vo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Vo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kp=0;class De extends ps{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=vi,s=vi,r=Ae,o=xi,a=vn,l=Jn,c=De.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=qs(),this.name="",this.source=new $u(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rs:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rs:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Fu;De.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,n=0,s=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,w=(f+1)/2,k=(m+1)/2,A=(h+d)/4,C=(u+_)/4,z=(g+p)/4;return v>w&&v>k?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=A/n,r=C/n):w>k?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=A/s,r=z/s):k<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),n=C/r,s=z/r),this.set(n,s,r,e),this}let x=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zp extends ps{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ae,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new De(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $u(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends Zp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ku extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=re,this.minFilter=re,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jp extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=re,this.minFilter=re,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ys{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let p=1-a;const m=l*d+c*f+h*g+u*_,x=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const k=Math.sqrt(v),A=Math.atan2(k,m*x);p=Math.sin(p*A)/k,a=Math.sin(a*A)/k}const w=a*x;if(l=l*p+d*w,c=c*p+f*w,h=h*p+g*w,u=u*p+_*w,p===1-a){const k=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=k,c*=k,h*=k,u*=k}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wo.copy(this).projectOnVector(t),this.sub(Wo)}reflect(t){return this.sub(Wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wo=new O,Cc=new Ys;class $s{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,on):on.fromBufferAttribute(r,o),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(t.matrixWorld),this.union(nr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),ir.subVectors(this.max,Ss),Ai.subVectors(t.a,Ss),Ci.subVectors(t.b,Ss),Ri.subVectors(t.c,Ss),On.subVectors(Ci,Ai),zn.subVectors(Ri,Ci),ri.subVectors(Ai,Ri);let e=[0,-On.z,On.y,0,-zn.z,zn.y,0,-ri.z,ri.y,On.z,0,-On.x,zn.z,0,-zn.x,ri.z,0,-ri.x,-On.y,On.x,0,-zn.y,zn.x,0,-ri.y,ri.x,0];return!Xo(e,Ai,Ci,Ri,ir)||(e=[1,0,0,0,1,0,0,0,1],!Xo(e,Ai,Ci,Ri,ir))?!1:(sr.crossVectors(On,zn),e=[sr.x,sr.y,sr.z],Xo(e,Ai,Ci,Ri,ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new O,new O,new O,new O,new O,new O,new O,new O],on=new O,nr=new $s,Ai=new O,Ci=new O,Ri=new O,On=new O,zn=new O,ri=new O,Ss=new O,ir=new O,sr=new O,oi=new O;function Xo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){oi.fromArray(i,r);const a=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=t.dot(oi),c=e.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Jp=new $s,Es=new O,qo=new O;class Ks{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Jp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);const e=Es.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Es,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add(qo)),this.expandByPoint(Es.copy(t.center).sub(qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new O,Yo=new O,rr=new O,Bn=new O,$o=new O,or=new O,Ko=new O;class gl{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Yo.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(Yo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(rr),a=Bn.dot(this.direction),l=-Bn.dot(rr),c=Bn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Yo).addScaledVector(rr,d),f}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,s,r){$o.subVectors(e,t),or.subVectors(n,t),Ko.crossVectors($o,or);let o=this.direction.dot(Ko),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,t);const l=a*this.direction.dot(or.crossVectors(Bn,or));if(l<0)return null;const c=a*this.direction.dot($o.cross(Bn));if(c<0||l+c>o)return null;const h=-a*Bn.dot(Ko);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,p){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,p)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Pi.setFromMatrixColumn(t,0).length(),r=1/Pi.setFromMatrixColumn(t,1).length(),o=1/Pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qp,t,tm)}lookAt(t,e,n){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Hn.crossVectors(n,qe),Hn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Hn.crossVectors(n,qe)),Hn.normalize(),ar.crossVectors(qe,Hn),s[0]=Hn.x,s[4]=ar.x,s[8]=qe.x,s[1]=Hn.y,s[5]=ar.y,s[9]=qe.y,s[2]=Hn.z,s[6]=ar.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],x=n[3],v=n[7],w=n[11],k=n[15],A=s[0],C=s[4],z=s[8],E=s[12],y=s[1],P=s[5],Y=s[9],X=s[13],J=s[2],Q=s[6],D=s[10],U=s[14],L=s[3],$=s[7],W=s[11],H=s[15];return r[0]=o*A+a*y+l*J+c*L,r[4]=o*C+a*P+l*Q+c*$,r[8]=o*z+a*Y+l*D+c*W,r[12]=o*E+a*X+l*U+c*H,r[1]=h*A+u*y+d*J+f*L,r[5]=h*C+u*P+d*Q+f*$,r[9]=h*z+u*Y+d*D+f*W,r[13]=h*E+u*X+d*U+f*H,r[2]=g*A+_*y+p*J+m*L,r[6]=g*C+_*P+p*Q+m*$,r[10]=g*z+_*Y+p*D+m*W,r[14]=g*E+_*X+p*U+m*H,r[3]=x*A+v*y+w*J+k*L,r[7]=x*C+v*P+w*Q+k*$,r[11]=x*z+v*Y+w*D+k*W,r[15]=x*E+v*X+w*U+k*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],x=u*p*c-_*d*c+_*l*f-a*p*f-u*l*m+a*d*m,v=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,w=h*_*c-g*u*c+g*a*f-o*_*f-h*a*m+o*u*m,k=g*u*l-h*_*l-g*a*d+o*_*d+h*a*p-o*u*p,A=e*x+n*v+s*w+r*k;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=x*C,t[1]=(_*d*r-u*p*r-_*s*f+n*p*f+u*s*m-n*d*m)*C,t[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*m+n*l*m)*C,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*C,t[4]=v*C,t[5]=(h*p*r-g*d*r+g*s*f-e*p*f-h*s*m+e*d*m)*C,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*C,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*C,t[8]=w*C,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*m-e*u*m)*C,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*m+e*a*m)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*C,t[12]=k*C,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*p+e*u*p)*C,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*p-e*a*p)*C,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,p=o*u,m=a*u,x=l*c,v=l*h,w=l*u,k=n.x,A=n.y,C=n.z;return s[0]=(1-(_+m))*k,s[1]=(f+w)*k,s[2]=(g-v)*k,s[3]=0,s[4]=(f-w)*A,s[5]=(1-(d+m))*A,s[6]=(p+x)*A,s[7]=0,s[8]=(g+v)*C,s[9]=(p-x)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Pi.set(s[0],s[1],s[2]).length();const o=Pi.set(s[4],s[5],s[6]).length(),a=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],an.copy(this);const c=1/r,h=1/o,u=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,e.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Dn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===Dn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===to)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Dn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h;let g,_;if(a===Dn)g=(o+r)*u,_=-2*u;else if(a===to)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Pi=new O,an=new ae,Qp=new O(0,0,0),tm=new O(1,1,1),Hn=new O,ar=new O,qe=new O,Rc=new ae,Pc=new Ys;class kn{constructor(t=0,e=0,n=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pc.setFromEuler(this),this.setFromQuaternion(Pc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class Zu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let em=0;const Lc=new O,Li=new Ys,Sn=new ae,lr=new O,bs=new O,nm=new O,im=new Ys,Dc=new O(1,0,0),Ic=new O(0,1,0),Uc=new O(0,0,1),Nc={type:"added"},sm={type:"removed"},Di={type:"childadded",child:null},Zo={type:"childremoved",child:null};class be extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new O,e=new kn,n=new Ys,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new zt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(Dc,t)}rotateY(t){return this.rotateOnAxis(Ic,t)}rotateZ(t){return this.rotateOnAxis(Uc,t)}translateOnAxis(t,e){return Lc.copy(t).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dc,t)}translateY(t){return this.translateOnAxis(Ic,t)}translateZ(t){return this.translateOnAxis(Uc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(bs,lr,this.up):Sn.lookAt(lr,bs,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),Li.setFromRotationMatrix(Sn),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nc),Di.child=t,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sm),Zo.child=t,this.dispatchEvent(Zo),Zo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nc),Di.child=t,this.dispatchEvent(Di),Di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,t,nm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,im,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}be.DEFAULT_UP=new O(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new O,En=new O,jo=new O,bn=new O,Ii=new O,Ui=new O,kc=new O,Jo=new O,Qo=new O,ta=new O;class fn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ln.subVectors(t,e),s.cross(ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ln.subVectors(s,e),En.subVectors(n,e),jo.subVectors(t,e);const o=ln.dot(ln),a=ln.dot(En),l=ln.dot(jo),c=En.dot(En),h=En.dot(jo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(o,bn.y),l.addScaledVector(a,bn.z),l)}static isFrontFacing(t,e,n,s){return ln.subVectors(n,e),En.subVectors(t,e),ln.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),En.subVectors(this.a,this.b),ln.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return fn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ii.subVectors(s,n),Ui.subVectors(r,n),Jo.subVectors(t,n);const l=Ii.dot(Jo),c=Ui.dot(Jo);if(l<=0&&c<=0)return e.copy(n);Qo.subVectors(t,s);const h=Ii.dot(Qo),u=Ui.dot(Qo);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ii,o);ta.subVectors(t,r);const f=Ii.dot(ta),g=Ui.dot(ta);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ui,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return kc.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(kc,a);const m=1/(p+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(Ii,o).addScaledVector(Ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},cr={h:0,s:0,l:0};function ea(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Vp(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ea(o,r,t+1/3),this.g=ea(o,r,t),this.b=ea(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=se){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=se){const n=ju[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}copyLinearToSRGB(t){return this.r=Go(t.r),this.g=Go(t.g),this.b=Go(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=se){return te.fromWorkingColorSpace(Re.copy(this),t),Math.round(Ge(Re.r*255,0,255))*65536+Math.round(Ge(Re.g*255,0,255))*256+Math.round(Ge(Re.b*255,0,255))}getHexString(t=se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,s=Re.g,r=Re.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=se){te.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,s=Re.b;return t!==se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(cr);const n=Bo(Gn.h,cr.h,e),s=Bo(Gn.s,cr.s,e),r=Bo(Gn.l,cr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new Ut;Ut.NAMES=ju;let rm=0;class ms extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=Zi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=ja,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Za&&(n.blendSrc=this.blendSrc),this.blendDst!==ja&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ue extends ms{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=ku,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new O,hr=new Vt;class le{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Yu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hr.fromBufferAttribute(this,e),hr.applyMatrix3(t),this.setXY(e,hr.x,hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ys(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sc&&(t.usage=this.usage),t}}class Ju extends le{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Qu extends le{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class we extends le{constructor(t,e,n){super(new Float32Array(t),e,n)}}let om=0;const Ze=new ae,na=new be,Ni=new O,Ye=new $s,ws=new $s,ye=new O;class Ie extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qu(t)?Qu:Ju)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return na.lookAt(t),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new we(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(ye.addVectors(Ye.min,ws.min),Ye.expandByPoint(ye),ye.addVectors(Ye.max,ws.max),Ye.expandByPoint(ye)):(Ye.expandByPoint(ws.min),Ye.expandByPoint(ws.max))}Ye.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ye));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ye.fromBufferAttribute(a,c),l&&(Ni.fromBufferAttribute(t,c),ye.add(Ni)),s=Math.max(s,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new le(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<n.count;z++)a[z]=new O,l[z]=new O;const c=new O,h=new O,u=new O,d=new Vt,f=new Vt,g=new Vt,_=new O,p=new O;function m(z,E,y){c.fromBufferAttribute(n,z),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,z),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[z].add(_),a[E].add(_),a[y].add(_),l[z].add(p),l[E].add(p),l[y].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let z=0,E=x.length;z<E;++z){const y=x[z],P=y.start,Y=y.count;for(let X=P,J=P+Y;X<J;X+=3)m(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const v=new O,w=new O,k=new O,A=new O;function C(z){k.fromBufferAttribute(s,z),A.copy(k);const E=a[z];v.copy(E),v.sub(k.multiplyScalar(k.dot(E))).normalize(),w.crossVectors(A,E);const P=w.dot(l[z])<0?-1:1;o.setXYZW(z,v.x,v.y,v.z,P)}for(let z=0,E=x.length;z<E;++z){const y=x[z],P=y.start,Y=y.count;for(let X=P,J=P+Y;X<J;X+=3)C(t.getX(X+0)),C(t.getX(X+1)),C(t.getX(X+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,u=new O;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new le(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fc=new ae,ai=new gl,ur=new Ks,Oc=new O,ki=new O,Fi=new O,Oi=new O,ia=new O,dr=new O,fr=new Vt,pr=new Vt,mr=new Vt,zc=new O,Bc=new O,Hc=new O,gr=new O,_r=new O;class $t extends be{constructor(t=new Ie,e=new ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(ia.fromBufferAttribute(u,t),o?dr.addScaledVector(ia,h):dr.addScaledVector(ia.sub(e),h))}e.add(dr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(ur.containsPoint(ai.origin)===!1&&(ai.intersectSphere(ur,Oc)===null||ai.origin.distanceToSquared(Oc)>(t.far-t.near)**2))&&(Fc.copy(r).invert(),ai.copy(t.ray).applyMatrix4(Fc),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],x=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let w=x,k=v;w<k;w+=3){const A=a.getX(w),C=a.getX(w+1),z=a.getX(w+2);s=vr(this,m,t,n,c,h,u,A,C,z),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const x=a.getX(p),v=a.getX(p+1),w=a.getX(p+2);s=vr(this,o,t,n,c,h,u,x,v,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],x=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let w=x,k=v;w<k;w+=3){const A=w,C=w+1,z=w+2;s=vr(this,m,t,n,c,h,u,A,C,z),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const x=p,v=p+1,w=p+2;s=vr(this,o,t,n,c,h,u,x,v,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function am(i,t,e,n,s,r,o,a){let l;if(t.side===Le?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===jn,a),l===null)return null;_r.copy(a),_r.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(_r);return c<e.near||c>e.far?null:{distance:c,point:_r.clone(),object:i}}function vr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ki),i.getVertexPosition(l,Fi),i.getVertexPosition(c,Oi);const h=am(i,t,e,n,ki,Fi,Oi,gr);if(h){s&&(fr.fromBufferAttribute(s,a),pr.fromBufferAttribute(s,l),mr.fromBufferAttribute(s,c),h.uv=fn.getInterpolation(gr,ki,Fi,Oi,fr,pr,mr,new Vt)),r&&(fr.fromBufferAttribute(r,a),pr.fromBufferAttribute(r,l),mr.fromBufferAttribute(r,c),h.uv1=fn.getInterpolation(gr,ki,Fi,Oi,fr,pr,mr,new Vt)),o&&(zc.fromBufferAttribute(o,a),Bc.fromBufferAttribute(o,l),Hc.fromBufferAttribute(o,c),h.normal=fn.getInterpolation(gr,ki,Fi,Oi,zc,Bc,Hc,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new O,materialIndex:0};fn.getNormal(ki,Fi,Oi,u.normal),h.face=u}return h}class We extends Ie{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(u,2));function g(_,p,m,x,v,w,k,A,C,z,E){const y=w/C,P=k/z,Y=w/2,X=k/2,J=A/2,Q=C+1,D=z+1;let U=0,L=0;const $=new O;for(let W=0;W<D;W++){const H=W*P-X;for(let ct=0;ct<Q;ct++){const vt=ct*y-Y;$[_]=vt*x,$[p]=H*v,$[m]=J,c.push($.x,$.y,$.z),$[_]=0,$[p]=0,$[m]=A>0?1:-1,h.push($.x,$.y,$.z),u.push(ct/C),u.push(1-W/z),U+=1}}for(let W=0;W<z;W++)for(let H=0;H<C;H++){const ct=d+H+Q*W,vt=d+H+Q*(W+1),G=d+(H+1)+Q*(W+1),K=d+(H+1)+Q*W;l.push(ct,vt,K),l.push(vt,G,K),L+=6}a.addGroup(f,L,E),f+=L,d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ls(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Fe(i){const t={};for(let e=0;e<i.length;e++){const n=ls(i[e]);for(const s in n)t[s]=n[s]}return t}function lm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function td(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const cm={clone:ls,merge:Fe};var hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends ms{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hm,this.fragmentShader=um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=lm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ed extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new O,Gc=new Vt,Vc=new Vt;class Ve extends ed{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=el*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return el*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,Gc,Vc),e.subVectors(Vc,Gc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zi=-90,Bi=1;class dm extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ve(zi,Bi,t,e);s.layers=this.layers,this.add(s);const r=new Ve(zi,Bi,t,e);r.layers=this.layers,this.add(r);const o=new Ve(zi,Bi,t,e);o.layers=this.layers,this.add(o);const a=new Ve(zi,Bi,t,e);a.layers=this.layers,this.add(a);const l=new Ve(zi,Bi,t,e);l.layers=this.layers,this.add(l);const c=new Ve(zi,Bi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===to)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nd extends De{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:is,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fm extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new nd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ae}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new We(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Zn});r.uniforms.tEquirect.value=e;const o=new $t(s,r),a=e.minFilter;return e.minFilter===xi&&(e.minFilter=Ae),new dm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const sa=new O,pm=new O,mm=new zt;class fi{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=sa.subVectors(n,e).cross(pm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(sa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mm.getNormalMatrix(t),s=this.coplanarPoint(sa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new Ks,xr=new O;class _l{constructor(t=new fi,e=new fi,n=new fi,s=new fi,r=new fi,o=new fi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],p=s[11],m=s[12],x=s[13],v=s[14],w=s[15];if(n[0].setComponents(l-r,d-c,p-f,w-m).normalize(),n[1].setComponents(l+r,d+c,p+f,w+m).normalize(),n[2].setComponents(l+o,d+h,p+g,w+x).normalize(),n[3].setComponents(l-o,d-h,p-g,w-x).normalize(),n[4].setComponents(l-a,d-u,p-_,w-v).normalize(),e===Dn)n[5].setComponents(l+a,d+u,p+_,w+v).normalize();else if(e===to)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(xr.x=s.normal.x>0?t.max.x:t.min.x,xr.y=s.normal.y>0?t.max.y:t.min.y,xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function id(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gm(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,a),u.count===-1&&d.length===0&&i.bufferSubData(c,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Oe extends Ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const x=m*d-o;for(let v=0;v<c;v++){const w=v*u-r;g.push(w,-x,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const v=x+c*m,w=x+c*(m+1),k=x+1+c*(m+1),A=x+1+c*m;f.push(v,w,A),f.push(w,k,A)}this.setIndex(f),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.width,t.height,t.widthSegments,t.heightSegments)}}var _m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vm=`#ifdef USE_ALPHAHASH
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
#endif`,xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Em=`#ifdef USE_AOMAP
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
#endif`,bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wm=`#ifdef USE_BATCHING
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
#endif`,Tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pm=`#ifdef USE_IRIDESCENCE
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
#endif`,Lm=`#ifdef USE_BUMPMAP
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
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bm=`#define PI 3.141592653589793
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
} // validated`,Hm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gm=`vec3 transformedNormal = objectNormal;
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
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",$m=`
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
}`,Km=`#ifdef USE_ENVMAP
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
#endif`,Zm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jm=`#ifdef USE_ENVMAP
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
#endif`,Jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s0=`#ifdef USE_GRADIENTMAP
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
}`,r0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l0=`uniform bool receiveShadow;
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
#endif`,c0=`#ifdef USE_ENVMAP
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
#endif`,h0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p0=`PhysicalMaterial material;
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
#endif`,m0=`struct PhysicalMaterial {
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
}`,g0=`
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
#endif`,_0=`#if defined( RE_IndirectDiffuse )
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
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T0=`#if defined( USE_POINTS_UV )
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
#endif`,A0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`#ifdef USE_MORPHTARGETS
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
#endif`,I0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,N0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z0=`#ifdef USE_NORMALMAP
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
#endif`,B0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,q0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eg=`float getShadowMask() {
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
}`,ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ig=`#ifdef USE_SKINNING
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
#endif`,sg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rg=`#ifdef USE_SKINNING
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
#endif`,og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ag=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hg=`#ifdef USE_TRANSMISSION
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
#endif`,ug=`#ifdef USE_TRANSMISSION
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_g=`uniform sampler2D t2D;
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`#include <common>
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
}`,Eg=`#if DEPTH_PACKING == 3200
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
}`,bg=`#define DISTANCE
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
}`,wg=`#define DISTANCE
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
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`uniform float scale;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Pg=`#include <common>
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Dg=`#define LAMBERT
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
}`,Ig=`#define LAMBERT
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
}`,Ug=`#define MATCAP
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
}`,Ng=`#define MATCAP
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
}`,kg=`#define NORMAL
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
}`,Fg=`#define NORMAL
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
}`,Og=`#define PHONG
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
}`,zg=`#define PHONG
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
}`,Bg=`#define STANDARD
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
}`,Hg=`#define STANDARD
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
}`,Gg=`#define TOON
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
}`,Vg=`#define TOON
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
}`,Wg=`uniform float size;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,qg=`#include <common>
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
}`,Yg=`uniform vec3 color;
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
}`,$g=`uniform float rotation;
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
}`,Kg=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:_m,alphahash_pars_fragment:vm,alphamap_fragment:xm,alphamap_pars_fragment:Mm,alphatest_fragment:ym,alphatest_pars_fragment:Sm,aomap_fragment:Em,aomap_pars_fragment:bm,batching_pars_vertex:wm,batching_vertex:Tm,begin_vertex:Am,beginnormal_vertex:Cm,bsdfs:Rm,iridescence_fragment:Pm,bumpmap_pars_fragment:Lm,clipping_planes_fragment:Dm,clipping_planes_pars_fragment:Im,clipping_planes_pars_vertex:Um,clipping_planes_vertex:Nm,color_fragment:km,color_pars_fragment:Fm,color_pars_vertex:Om,color_vertex:zm,common:Bm,cube_uv_reflection_fragment:Hm,defaultnormal_vertex:Gm,displacementmap_pars_vertex:Vm,displacementmap_vertex:Wm,emissivemap_fragment:Xm,emissivemap_pars_fragment:qm,colorspace_fragment:Ym,colorspace_pars_fragment:$m,envmap_fragment:Km,envmap_common_pars_fragment:Zm,envmap_pars_fragment:jm,envmap_pars_vertex:Jm,envmap_physical_pars_fragment:c0,envmap_vertex:Qm,fog_vertex:t0,fog_pars_vertex:e0,fog_fragment:n0,fog_pars_fragment:i0,gradientmap_pars_fragment:s0,lightmap_pars_fragment:r0,lights_lambert_fragment:o0,lights_lambert_pars_fragment:a0,lights_pars_begin:l0,lights_toon_fragment:h0,lights_toon_pars_fragment:u0,lights_phong_fragment:d0,lights_phong_pars_fragment:f0,lights_physical_fragment:p0,lights_physical_pars_fragment:m0,lights_fragment_begin:g0,lights_fragment_maps:_0,lights_fragment_end:v0,logdepthbuf_fragment:x0,logdepthbuf_pars_fragment:M0,logdepthbuf_pars_vertex:y0,logdepthbuf_vertex:S0,map_fragment:E0,map_pars_fragment:b0,map_particle_fragment:w0,map_particle_pars_fragment:T0,metalnessmap_fragment:A0,metalnessmap_pars_fragment:C0,morphinstance_vertex:R0,morphcolor_vertex:P0,morphnormal_vertex:L0,morphtarget_pars_vertex:D0,morphtarget_vertex:I0,normal_fragment_begin:U0,normal_fragment_maps:N0,normal_pars_fragment:k0,normal_pars_vertex:F0,normal_vertex:O0,normalmap_pars_fragment:z0,clearcoat_normal_fragment_begin:B0,clearcoat_normal_fragment_maps:H0,clearcoat_pars_fragment:G0,iridescence_pars_fragment:V0,opaque_fragment:W0,packing:X0,premultiplied_alpha_fragment:q0,project_vertex:Y0,dithering_fragment:$0,dithering_pars_fragment:K0,roughnessmap_fragment:Z0,roughnessmap_pars_fragment:j0,shadowmap_pars_fragment:J0,shadowmap_pars_vertex:Q0,shadowmap_vertex:tg,shadowmask_pars_fragment:eg,skinbase_vertex:ng,skinning_pars_vertex:ig,skinning_vertex:sg,skinnormal_vertex:rg,specularmap_fragment:og,specularmap_pars_fragment:ag,tonemapping_fragment:lg,tonemapping_pars_fragment:cg,transmission_fragment:hg,transmission_pars_fragment:ug,uv_pars_fragment:dg,uv_pars_vertex:fg,uv_vertex:pg,worldpos_vertex:mg,background_vert:gg,background_frag:_g,backgroundCube_vert:vg,backgroundCube_frag:xg,cube_vert:Mg,cube_frag:yg,depth_vert:Sg,depth_frag:Eg,distanceRGBA_vert:bg,distanceRGBA_frag:wg,equirect_vert:Tg,equirect_frag:Ag,linedashed_vert:Cg,linedashed_frag:Rg,meshbasic_vert:Pg,meshbasic_frag:Lg,meshlambert_vert:Dg,meshlambert_frag:Ig,meshmatcap_vert:Ug,meshmatcap_frag:Ng,meshnormal_vert:kg,meshnormal_frag:Fg,meshphong_vert:Og,meshphong_frag:zg,meshphysical_vert:Bg,meshphysical_frag:Hg,meshtoon_vert:Gg,meshtoon_frag:Vg,points_vert:Wg,points_frag:Xg,shadow_vert:qg,shadow_frag:Yg,sprite_vert:$g,sprite_frag:Kg},lt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},gn={basic:{uniforms:Fe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Fe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Fe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Fe([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Fe([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Fe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Fe([lt.points,lt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Fe([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Fe([lt.common,lt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Fe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Fe([lt.sprite,lt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Fe([lt.common,lt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Fe([lt.lights,lt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};gn.physical={uniforms:Fe([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Mr={r:0,b:0,g:0},ci=new kn,Zg=new ae;function jg(i,t,e,n,s,r,o){const a=new Ut(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function _(x){let v=!1;const w=g(x);w===null?m(a,l):w&&w.isColor&&(m(w,1),v=!0);const k=i.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,o):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(x,v){const w=g(v);w&&(w.isCubeTexture||w.mapping===xo)?(h===void 0&&(h=new $t(new We(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:ls(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ci.copy(v.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(ci)),h.material.toneMapped=te.getTransfer(w.colorSpace)!==oe,(u!==w||d!==w.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new $t(new Oe(2,2),new rn({name:"BackgroundMaterial",uniforms:ls(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=te.getTransfer(w.colorSpace)!==oe,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,v){x.getRGB(Mr,td(i)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:_,addToRenderList:p}}function Jg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,P,Y,X,J){let Q=!1;const D=u(X,Y,P);r!==D&&(r=D,c(r.object)),Q=f(y,X,Y,J),Q&&g(y,X,Y,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,w(y,P,Y,X),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,P,Y){const X=Y.wireframe===!0;let J=n[y.id];J===void 0&&(J={},n[y.id]=J);let Q=J[P.id];Q===void 0&&(Q={},J[P.id]=Q);let D=Q[X];return D===void 0&&(D=d(l()),Q[X]=D),D}function d(y){const P=[],Y=[],X=[];for(let J=0;J<e;J++)P[J]=0,Y[J]=0,X[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:Y,attributeDivisors:X,object:y,attributes:{},index:null}}function f(y,P,Y,X){const J=r.attributes,Q=P.attributes;let D=0;const U=Y.getAttributes();for(const L in U)if(U[L].location>=0){const W=J[L];let H=Q[L];if(H===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(H=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(H=y.instanceColor)),W===void 0||W.attribute!==H||H&&W.data!==H.data)return!0;D++}return r.attributesNum!==D||r.index!==X}function g(y,P,Y,X){const J={},Q=P.attributes;let D=0;const U=Y.getAttributes();for(const L in U)if(U[L].location>=0){let W=Q[L];W===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(W=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(W=y.instanceColor));const H={};H.attribute=W,W&&W.data&&(H.data=W.data),J[L]=H,D++}r.attributes=J,r.attributesNum=D,r.index=X}function _(){const y=r.newAttributes;for(let P=0,Y=y.length;P<Y;P++)y[P]=0}function p(y){m(y,0)}function m(y,P){const Y=r.newAttributes,X=r.enabledAttributes,J=r.attributeDivisors;Y[y]=1,X[y]===0&&(i.enableVertexAttribArray(y),X[y]=1),J[y]!==P&&(i.vertexAttribDivisor(y,P),J[y]=P)}function x(){const y=r.newAttributes,P=r.enabledAttributes;for(let Y=0,X=P.length;Y<X;Y++)P[Y]!==y[Y]&&(i.disableVertexAttribArray(Y),P[Y]=0)}function v(y,P,Y,X,J,Q,D){D===!0?i.vertexAttribIPointer(y,P,Y,J,Q):i.vertexAttribPointer(y,P,Y,X,J,Q)}function w(y,P,Y,X){_();const J=X.attributes,Q=Y.getAttributes(),D=P.defaultAttributeValues;for(const U in Q){const L=Q[U];if(L.location>=0){let $=J[U];if($===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&($=y.instanceColor)),$!==void 0){const W=$.normalized,H=$.itemSize,ct=t.get($);if(ct===void 0)continue;const vt=ct.buffer,G=ct.type,K=ct.bytesPerElement,et=G===i.INT||G===i.UNSIGNED_INT||$.gpuType===Ou;if($.isInterleavedBufferAttribute){const Z=$.data,gt=Z.stride,Mt=$.offset;if(Z.isInstancedInterleavedBuffer){for(let mt=0;mt<L.locationSize;mt++)m(L.location+mt,Z.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let mt=0;mt<L.locationSize;mt++)p(L.location+mt);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let mt=0;mt<L.locationSize;mt++)v(L.location+mt,H/L.locationSize,G,W,gt*K,(Mt+H/L.locationSize*mt)*K,et)}else{if($.isInstancedBufferAttribute){for(let Z=0;Z<L.locationSize;Z++)m(L.location+Z,$.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Z=0;Z<L.locationSize;Z++)p(L.location+Z);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let Z=0;Z<L.locationSize;Z++)v(L.location+Z,H/L.locationSize,G,W,H*K,H/L.locationSize*Z*K,et)}}else if(D!==void 0){const W=D[U];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(L.location,W);break;case 3:i.vertexAttrib3fv(L.location,W);break;case 4:i.vertexAttrib4fv(L.location,W);break;default:i.vertexAttrib1fv(L.location,W)}}}}x()}function k(){z();for(const y in n){const P=n[y];for(const Y in P){const X=P[Y];for(const J in X)h(X[J].object),delete X[J];delete P[Y]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const Y in P){const X=P[Y];for(const J in X)h(X[J].object),delete X[J];delete P[Y]}delete n[y.id]}function C(y){for(const P in n){const Y=n[P];if(Y[y.id]===void 0)continue;const X=Y[y.id];for(const J in X)h(X[J].object),delete X[J];delete Y[y.id]}}function z(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:E,dispose:k,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function Qg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(c[f],h[f]);else{d.multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function t_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==vn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Jn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Kn&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=f>0,k=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:w,maxSamples:k}}function e_(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new fi,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const x=r?0:n,v=x*4;let w=m.clippingState||null;l.value=w,w=h(g,d,v,f);for(let k=0;k!==v;++k)w[k]=e[k];m.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,w=f;v!==_;++v,w+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function n_(i){let t=new WeakMap;function e(o,a){return a===Ja?o.mapping=is:a===Qa&&(o.mapping=ss),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ja||a===Qa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new fm(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Hs extends ed{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $i=4,Wc=[.125,.215,.35,.446,.526,.582],gi=20,ra=new Hs,Xc=new Ut;let oa=null,aa=0,la=0,ca=!1;const pi=(1+Math.sqrt(5))/2,Hi=1/pi,qc=[new O(-pi,Hi,0),new O(pi,Hi,0),new O(-Hi,0,pi),new O(Hi,0,pi),new O(0,pi,-Hi),new O(0,pi,Hi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Yc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oa,aa,la),this._renderer.xr.enabled=ca,t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ae,minFilter:Ae,generateMipmaps:!1,type:fs,format:vn,colorSpace:ei,depthBuffer:!1},s=$c(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$c(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i_(r)),this._blurMaterial=s_(r,t,e)}return s}_compileMaterial(t){const e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,ra)}_sceneToCubeUV(t,e,n,s){const a=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Xc),h.toneMapping=Un,h.autoClear=!1;const f=new ue({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new $t(new We,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(Xc),_=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;yr(s,x*v,m>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===is||t.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;yr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ra)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qc[(s-r-1)%qc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new $t(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*gi-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):gi;p>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gi}`);const m=[];let x=0;for(let C=0;C<gi;++C){const z=C/_,E=Math.exp(-z*z/2);m.push(E),C===0?x+=E:C<p&&(x+=2*E)}for(let C=0;C<m.length;C++)m[C]=m[C]/x;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const w=this._sizeLods[s],k=3*w*(s>v-$i?s-v+$i:0),A=4*(this._cubeSize-w);yr(e,k,A,3*w,2*w),l.setRenderTarget(e),l.render(u,ra)}}function i_(i){const t=[],e=[],n=[];let s=i;const r=i-$i+1+Wc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-$i?l=Wc[o-i+$i-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,x=new Float32Array(_*g*f),v=new Float32Array(p*g*f),w=new Float32Array(m*g*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,z=A>2?0:-1,E=[C,z,0,C+2/3,z,0,C+2/3,z+1,0,C,z,0,C+2/3,z+1,0,C,z+1,0];x.set(E,_*g*A),v.set(d,p*g*A);const y=[A,A,A,A,A,A];w.set(y,m*g*A)}const k=new Ie;k.setAttribute("position",new le(x,_)),k.setAttribute("uv",new le(v,p)),k.setAttribute("faceIndex",new le(w,m)),t.push(k),s>$i&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $c(i,t,e){const n=new Nn(i,t,e);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function s_(i,t,e){const n=new Float32Array(gi),s=new O(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Kc(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Zc(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function vl(){return`

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
	`}function r_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ja||l===Qa,h=l===is||l===ss;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Yc(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Yc(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function o_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Yu("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function a_(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let v=0,w=x.length;v<w;v+=3){const k=x[v+0],A=x[v+1],C=x[v+2];d.push(k,A,A,C,C,k)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,w=x.length/3-1;v<w;v+=3){const k=v+0,A=v+1,C=v+2;d.push(k,A,A,C,C,k)}}else return;const p=new(qu(d)?Qu:Ju)(d,1);p.version=_;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function l_(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<g;p++)this.render(d[p]/o,f[p]);else{_.multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}}function u(d,f,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let m=0;for(let x=0;x<g;x++)m+=f[x];for(let x=0;x<_.length;x++)e.update(m,n,_[x])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function c_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function h_(i,t,e){const n=new WeakMap,s=new Ee;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let y=function(){z.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let w=0;g===!0&&(w=1),_===!0&&(w=2),p===!0&&(w=3);let k=a.attributes.position.count*w,A=1;k>t.maxTextureSize&&(A=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const C=new Float32Array(k*A*4*u),z=new Ku(C,k,A,u);z.type=Kn,z.needsUpdate=!0;const E=w*4;for(let P=0;P<u;P++){const Y=m[P],X=x[P],J=v[P],Q=k*A*4*P;for(let D=0;D<Y.count;D++){const U=D*E;g===!0&&(s.fromBufferAttribute(Y,D),C[Q+U+0]=s.x,C[Q+U+1]=s.y,C[Q+U+2]=s.z,C[Q+U+3]=0),_===!0&&(s.fromBufferAttribute(X,D),C[Q+U+4]=s.x,C[Q+U+5]=s.y,C[Q+U+6]=s.z,C[Q+U+7]=0),p===!0&&(s.fromBufferAttribute(J,D),C[Q+U+8]=s.x,C[Q+U+9]=s.y,C[Q+U+10]=s.z,C[Q+U+11]=J.itemSize===4?s.w:1)}}d={count:u,texture:z,size:new Vt(k,A)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function u_(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class xl extends De{constructor(t,e,n,s,r,o,a,l,c,h=ji){if(h!==ji&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ji&&(n=yi),n===void 0&&h===as&&(n=os),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:re,this.minFilter=l!==void 0?l:re,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const sd=new De,rd=new xl(1,1);rd.compareFunction=Xu;const od=new Ku,ad=new jp,ld=new nd,jc=[],Jc=[],Qc=new Float32Array(16),th=new Float32Array(9),eh=new Float32Array(4);function gs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=jc[s];if(r===void 0&&(r=new Float32Array(s),jc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yo(i,t){let e=Jc[t];e===void 0&&(e=new Int32Array(t),Jc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function d_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function f_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function p_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function m_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function g_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;eh.set(n),i.uniformMatrix2fv(this.addr,!1,eh),ve(e,n)}}function __(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;th.set(n),i.uniformMatrix3fv(this.addr,!1,th),ve(e,n)}}function v_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Qc.set(n),i.uniformMatrix4fv(this.addr,!1,Qc),ve(e,n)}}function x_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function M_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function y_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function S_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function E_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function b_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function w_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function T_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function A_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?rd:sd;e.setTexture2D(t||r,s)}function C_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ad,s)}function R_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ld,s)}function P_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||od,s)}function L_(i){switch(i){case 5126:return d_;case 35664:return f_;case 35665:return p_;case 35666:return m_;case 35674:return g_;case 35675:return __;case 35676:return v_;case 5124:case 35670:return x_;case 35667:case 35671:return M_;case 35668:case 35672:return y_;case 35669:case 35673:return S_;case 5125:return E_;case 36294:return b_;case 36295:return w_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return P_}}function D_(i,t){i.uniform1fv(this.addr,t)}function I_(i,t){const e=gs(t,this.size,2);i.uniform2fv(this.addr,e)}function U_(i,t){const e=gs(t,this.size,3);i.uniform3fv(this.addr,e)}function N_(i,t){const e=gs(t,this.size,4);i.uniform4fv(this.addr,e)}function k_(i,t){const e=gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function F_(i,t){const e=gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function O_(i,t){const e=gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function z_(i,t){i.uniform1iv(this.addr,t)}function B_(i,t){i.uniform2iv(this.addr,t)}function H_(i,t){i.uniform3iv(this.addr,t)}function G_(i,t){i.uniform4iv(this.addr,t)}function V_(i,t){i.uniform1uiv(this.addr,t)}function W_(i,t){i.uniform2uiv(this.addr,t)}function X_(i,t){i.uniform3uiv(this.addr,t)}function q_(i,t){i.uniform4uiv(this.addr,t)}function Y_(i,t,e){const n=this.cache,s=t.length,r=yo(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||sd,r[o])}function $_(i,t,e){const n=this.cache,s=t.length,r=yo(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ad,r[o])}function K_(i,t,e){const n=this.cache,s=t.length,r=yo(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ld,r[o])}function Z_(i,t,e){const n=this.cache,s=t.length,r=yo(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||od,r[o])}function j_(i){switch(i){case 5126:return D_;case 35664:return I_;case 35665:return U_;case 35666:return N_;case 35674:return k_;case 35675:return F_;case 35676:return O_;case 5124:case 35670:return z_;case 35667:case 35671:return B_;case 35668:case 35672:return H_;case 35669:case 35673:return G_;case 5125:return V_;case 36294:return W_;case 36295:return X_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return Z_}}class J_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=L_(e.type)}}class Q_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=j_(e.type)}}class tv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function nh(i,t){i.seq.push(t),i.map[t.id]=t}function ev(i,t,e){const n=i.name,s=n.length;for(ha.lastIndex=0;;){const r=ha.exec(n),o=ha.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){nh(e,c===void 0?new J_(a,i,t):new Q_(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new tv(a),nh(e,u)),e=u}}}class $r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);ev(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function ih(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const nv=37297;let iv=0;function sv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function rv(i){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(i);let n;switch(t===e?n="":t===Qr&&e===Jr?n="LinearDisplayP3ToLinearSRGB":t===Jr&&e===Qr&&(n="LinearSRGBToLinearDisplayP3"),i){case ei:case Mo:return[n,"LinearTransferOETF"];case se:case ml:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function sh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+sv(i.getShaderSource(t),o)}else return s}function ov(i,t){const e=rv(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function av(i,t){let e;switch(t){case gp:e="Linear";break;case _p:e="Reinhard";break;case vp:e="OptimizedCineon";break;case xp:e="ACESFilmic";break;case yp:e="AgX";break;case Sp:e="Neutral";break;case Mp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function lv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function cv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ls(i){return i!==""}function rh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(i){return i.replace(uv,fv)}const dv=new Map;function fv(i,t){let e=Ot[t];if(e===void 0){const n=dv.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return nl(e)}const pv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ah(i){return i.replace(pv,mv)}function mv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function gv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function _v(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case is:case ss:t="ENVMAP_TYPE_CUBE";break;case xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ss:t="ENVMAP_MODE_REFRACTION";break}return t}function xv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ku:t="ENVMAP_BLENDING_MULTIPLY";break;case pp:t="ENVMAP_BLENDING_MIX";break;case mp:t="ENVMAP_BLENDING_ADD";break}return t}function Mv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function yv(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=gv(e),c=_v(e),h=vv(e),u=xv(e),d=Mv(e),f=lv(e),g=cv(r),_=s.createProgram();let p,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ls).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ls).join(`
`),m.length>0&&(m+=`
`)):(p=[lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),m=[lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Un?av("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,ov("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ls).join(`
`)),o=nl(o),o=rh(o,e),o=oh(o,e),a=nl(a),a=rh(a,e),a=oh(a,e),o=ah(o),a=ah(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=x+p+o,w=x+m+a,k=ih(s,s.VERTEX_SHADER,v),A=ih(s,s.FRAGMENT_SHADER,w);s.attachShader(_,k),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(P){if(i.debug.checkShaderErrors){const Y=s.getProgramInfoLog(_).trim(),X=s.getShaderInfoLog(k).trim(),J=s.getShaderInfoLog(A).trim();let Q=!0,D=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,k,A);else{const U=sh(s,k,"vertex"),L=sh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Y+`
`+U+`
`+L)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(X===""||J==="")&&(D=!1);D&&(P.diagnostics={runnable:Q,programLog:Y,vertexShader:{log:X,prefix:p},fragmentShader:{log:J,prefix:m}})}s.deleteShader(k),s.deleteShader(A),z=new $r(s,_),E=hv(s,_)}let z;this.getUniforms=function(){return z===void 0&&C(this),z};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,nv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=k,this.fragmentShader=A,this}let Sv=0;class Ev{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new bv(t),e.set(t,n)),n}}class bv{constructor(t){this.id=Sv++,this.code=t,this.usedTimes=0}}function wv(i,t,e,n,s,r,o){const a=new Zu,l=new Ev,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,y,P,Y,X){const J=Y.fog,Q=X.geometry,D=E.isMeshStandardMaterial?Y.environment:null,U=(E.isMeshStandardMaterial?e:t).get(E.envMap||D),L=U&&U.mapping===xo?U.image.height:null,$=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const W=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,H=W!==void 0?W.length:0;let ct=0;Q.morphAttributes.position!==void 0&&(ct=1),Q.morphAttributes.normal!==void 0&&(ct=2),Q.morphAttributes.color!==void 0&&(ct=3);let vt,G,K,et;if($){const ee=gn[$];vt=ee.vertexShader,G=ee.fragmentShader}else vt=E.vertexShader,G=E.fragmentShader,l.update(E),K=l.getVertexShaderID(E),et=l.getFragmentShaderID(E);const Z=i.getRenderTarget(),gt=X.isInstancedMesh===!0,Mt=X.isBatchedMesh===!0,mt=!!E.map,R=!!E.matcap,Et=!!U,Rt=!!E.aoMap,Yt=!!E.lightMap,yt=!!E.bumpMap,Nt=!!E.normalMap,Ft=!!E.displacementMap,Lt=!!E.emissiveMap,ie=!!E.metalnessMap,T=!!E.roughnessMap,M=E.anisotropy>0,q=E.clearcoat>0,nt=E.dispersion>0,it=E.iridescence>0,st=E.sheen>0,Tt=E.transmission>0,ht=M&&!!E.anisotropyMap,ut=q&&!!E.clearcoatMap,Bt=q&&!!E.clearcoatNormalMap,rt=q&&!!E.clearcoatRoughnessMap,St=it&&!!E.iridescenceMap,Gt=it&&!!E.iridescenceThicknessMap,Dt=st&&!!E.sheenColorMap,dt=st&&!!E.sheenRoughnessMap,Ht=!!E.specularMap,Xt=!!E.specularColorMap,de=!!E.specularIntensityMap,I=Tt&&!!E.transmissionMap,ft=Tt&&!!E.thicknessMap,j=!!E.gradientMap,tt=!!E.alphaMap,at=E.alphaTest>0,It=!!E.alphaHash,Kt=!!E.extensions;let fe=Un;E.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(fe=i.toneMapping);const xe={shaderID:$,shaderType:E.type,shaderName:E.name,vertexShader:vt,fragmentShader:G,defines:E.defines,customVertexShaderID:K,customFragmentShaderID:et,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Mt,batchingColor:Mt&&X._colorsTexture!==null,instancing:gt,instancingColor:gt&&X.instanceColor!==null,instancingMorph:gt&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ei,alphaToCoverage:!!E.alphaToCoverage,map:mt,matcap:R,envMap:Et,envMapMode:Et&&U.mapping,envMapCubeUVHeight:L,aoMap:Rt,lightMap:Yt,bumpMap:yt,normalMap:Nt,displacementMap:d&&Ft,emissiveMap:Lt,normalMapObjectSpace:Nt&&E.normalMapType===Np,normalMapTangentSpace:Nt&&E.normalMapType===Up,metalnessMap:ie,roughnessMap:T,anisotropy:M,anisotropyMap:ht,clearcoat:q,clearcoatMap:ut,clearcoatNormalMap:Bt,clearcoatRoughnessMap:rt,dispersion:nt,iridescence:it,iridescenceMap:St,iridescenceThicknessMap:Gt,sheen:st,sheenColorMap:Dt,sheenRoughnessMap:dt,specularMap:Ht,specularColorMap:Xt,specularIntensityMap:de,transmission:Tt,transmissionMap:I,thicknessMap:ft,gradientMap:j,opaque:E.transparent===!1&&E.blending===Zi&&E.alphaToCoverage===!1,alphaMap:tt,alphaTest:at,alphaHash:It,combine:E.combine,mapUv:mt&&_(E.map.channel),aoMapUv:Rt&&_(E.aoMap.channel),lightMapUv:Yt&&_(E.lightMap.channel),bumpMapUv:yt&&_(E.bumpMap.channel),normalMapUv:Nt&&_(E.normalMap.channel),displacementMapUv:Ft&&_(E.displacementMap.channel),emissiveMapUv:Lt&&_(E.emissiveMap.channel),metalnessMapUv:ie&&_(E.metalnessMap.channel),roughnessMapUv:T&&_(E.roughnessMap.channel),anisotropyMapUv:ht&&_(E.anisotropyMap.channel),clearcoatMapUv:ut&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:dt&&_(E.sheenRoughnessMap.channel),specularMapUv:Ht&&_(E.specularMap.channel),specularColorMapUv:Xt&&_(E.specularColorMap.channel),specularIntensityMapUv:de&&_(E.specularIntensityMap.channel),transmissionMapUv:I&&_(E.transmissionMap.channel),thicknessMapUv:ft&&_(E.thicknessMap.channel),alphaMapUv:tt&&_(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Nt||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!Q.attributes.uv&&(mt||tt),fog:!!J,useFog:E.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:ct,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,decodeVideoTexture:mt&&E.map.isVideoTexture===!0&&te.getTransfer(E.map.colorSpace)===oe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ze,flipSided:E.side===Le,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Kt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Kt&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function m(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)y.push(P),y.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(x(y,E),v(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function x(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function v(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),E.push(a.mask)}function w(E){const y=g[E.type];let P;if(y){const Y=gn[y];P=cm.clone(Y.uniforms)}else P=E.uniforms;return P}function k(E,y){let P;for(let Y=0,X=h.length;Y<X;Y++){const J=h[Y];if(J.cacheKey===y){P=J,++P.usedTimes;break}}return P===void 0&&(P=new yv(i,y,E,r),h.push(P)),P}function A(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function C(E){l.remove(E)}function z(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:w,acquireProgram:k,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:z}}function Tv(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Av(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ch(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function a(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||Av),n.length>1&&n.sort(d||ch),s.length>1&&s.sort(d||ch)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Cv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new hh,i.set(n,[o])):s>=r.length?(o=new hh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Rv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Ut};break;case"SpotLight":e={position:new O,direction:new O,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function Pv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Lv=0;function Dv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Iv(i){const t=new Rv,e=Pv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new ae,o=new ae;function a(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,x=0,v=0,w=0,k=0,A=0,C=0;c.sort(Dv);for(let E=0,y=c.length;E<y;E++){const P=c[E],Y=P.color,X=P.intensity,J=P.distance,Q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=Y.r*X,u+=Y.g*X,d+=Y.b*X;else if(P.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(P.sh.coefficients[D],X);C++}else if(P.isDirectionalLight){const D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const U=P.shadow,L=e.get(P);L.shadowBias=U.bias,L.shadowNormalBias=U.normalBias,L.shadowRadius=U.radius,L.shadowMapSize=U.mapSize,n.directionalShadow[f]=L,n.directionalShadowMap[f]=Q,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=D,f++}else if(P.isSpotLight){const D=t.get(P);D.position.setFromMatrixPosition(P.matrixWorld),D.color.copy(Y).multiplyScalar(X),D.distance=J,D.coneCos=Math.cos(P.angle),D.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),D.decay=P.decay,n.spot[_]=D;const U=P.shadow;if(P.map&&(n.spotLightMap[k]=P.map,k++,U.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=U.matrix,P.castShadow){const L=e.get(P);L.shadowBias=U.bias,L.shadowNormalBias=U.normalBias,L.shadowRadius=U.radius,L.shadowMapSize=U.mapSize,n.spotShadow[_]=L,n.spotShadowMap[_]=Q,w++}_++}else if(P.isRectAreaLight){const D=t.get(P);D.color.copy(Y).multiplyScalar(X),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=D,p++}else if(P.isPointLight){const D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),D.distance=P.distance,D.decay=P.decay,P.castShadow){const U=P.shadow,L=e.get(P);L.shadowBias=U.bias,L.shadowNormalBias=U.normalBias,L.shadowRadius=U.radius,L.shadowMapSize=U.mapSize,L.shadowCameraNear=U.camera.near,L.shadowCameraFar=U.camera.far,n.pointShadow[g]=L,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=D,g++}else if(P.isHemisphereLight){const D=t.get(P);D.skyColor.copy(P.color).multiplyScalar(X),D.groundColor.copy(P.groundColor).multiplyScalar(X),n.hemi[m]=D,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const z=n.hash;(z.directionalLength!==f||z.pointLength!==g||z.spotLength!==_||z.rectAreaLength!==p||z.hemiLength!==m||z.numDirectionalShadows!==x||z.numPointShadows!==v||z.numSpotShadows!==w||z.numSpotMaps!==k||z.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=w+k-A,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,z.directionalLength=f,z.pointLength=g,z.spotLength=_,z.rectAreaLength=p,z.hemiLength=m,z.numDirectionalShadows=x,z.numPointShadows=v,z.numSpotShadows=w,z.numSpotMaps=k,z.numLightProbes=C,n.version=Lv++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const v=c[m];if(v.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(v.isSpotLight){const w=n.spot[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),f++}else if(v.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const w=n.hemi[_];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function uh(i){const t=new Iv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Uv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new uh(i),t.set(s,[a])):r>=o.length?(a=new uh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class cd extends ms{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ip,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Nv extends ms{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const kv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fv=`uniform sampler2D shadow_pass;
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
}`;function Ov(i,t,e){let n=new _l;const s=new Vt,r=new Vt,o=new Ee,a=new cd({depthPacking:Wu}),l=new Nv,c={},h=e.maxTextureSize,u={[jn]:Le,[Le]:jn,[ze]:ze},d=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:kv,fragmentShader:Fv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ie;g.setAttribute("position",new le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $t(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uu;let m=this.type;this.render=function(A,C,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Zn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const X=m!==Cn&&this.type===Cn,J=m===Cn&&this.type!==Cn;for(let Q=0,D=A.length;Q<D;Q++){const U=A[Q],L=U.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);const $=L.getFrameExtents();if(s.multiply($),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,L.mapSize.y=r.y)),L.map===null||X===!0||J===!0){const H=this.type!==Cn?{minFilter:re,magFilter:re}:{};L.map!==null&&L.map.dispose(),L.map=new Nn(s.x,s.y,H),L.map.texture.name=U.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();const W=L.getViewportCount();for(let H=0;H<W;H++){const ct=L.getViewport(H);o.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),Y.viewport(o),L.updateMatrices(U,H),n=L.getFrustum(),w(C,z,L.camera,U,this.type)}L.isPointLightShadow!==!0&&this.type===Cn&&x(L,z),L.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(E,y,P)};function x(A,C){const z=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Nn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,z,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,z,f,_,null)}function v(A,C,z,E){let y=null;const P=z.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)y=P;else if(y=z.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const Y=y.uuid,X=C.uuid;let J=c[Y];J===void 0&&(J={},c[Y]=J);let Q=J[X];Q===void 0&&(Q=y.clone(),J[X]=Q,C.addEventListener("dispose",k)),y=Q}if(y.visible=C.visible,y.wireframe=C.wireframe,E===Cn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,z.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const Y=i.properties.get(y);Y.light=z}return y}function w(A,C,z,E,y){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Cn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld);const X=t.update(A),J=A.material;if(Array.isArray(J)){const Q=X.groups;for(let D=0,U=Q.length;D<U;D++){const L=Q[D],$=J[L.materialIndex];if($&&$.visible){const W=v(A,$,E,y);A.onBeforeShadow(i,A,C,z,X,W,L),i.renderBufferDirect(z,null,X,W,A,L),A.onAfterShadow(i,A,C,z,X,W,L)}}}else if(J.visible){const Q=v(A,J,E,y);A.onBeforeShadow(i,A,C,z,X,Q,null),i.renderBufferDirect(z,null,X,Q,A,null),A.onAfterShadow(i,A,C,z,X,Q,null)}}const Y=A.children;for(let X=0,J=Y.length;X<J;X++)w(Y[X],C,z,E,y)}function k(A){A.target.removeEventListener("dispose",k);for(const z in c){const E=c[z],y=A.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}function zv(i){function t(){let I=!1;const ft=new Ee;let j=null;const tt=new Ee(0,0,0,0);return{setMask:function(at){j!==at&&!I&&(i.colorMask(at,at,at,at),j=at)},setLocked:function(at){I=at},setClear:function(at,It,Kt,fe,xe){xe===!0&&(at*=fe,It*=fe,Kt*=fe),ft.set(at,It,Kt,fe),tt.equals(ft)===!1&&(i.clearColor(at,It,Kt,fe),tt.copy(ft))},reset:function(){I=!1,j=null,tt.set(-1,0,0,0)}}}function e(){let I=!1,ft=null,j=null,tt=null;return{setTest:function(at){at?et(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(at){ft!==at&&!I&&(i.depthMask(at),ft=at)},setFunc:function(at){if(j!==at){switch(at){case ap:i.depthFunc(i.NEVER);break;case lp:i.depthFunc(i.ALWAYS);break;case cp:i.depthFunc(i.LESS);break;case Kr:i.depthFunc(i.LEQUAL);break;case hp:i.depthFunc(i.EQUAL);break;case up:i.depthFunc(i.GEQUAL);break;case dp:i.depthFunc(i.GREATER);break;case fp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=at}},setLocked:function(at){I=at},setClear:function(at){tt!==at&&(i.clearDepth(at),tt=at)},reset:function(){I=!1,ft=null,j=null,tt=null}}}function n(){let I=!1,ft=null,j=null,tt=null,at=null,It=null,Kt=null,fe=null,xe=null;return{setTest:function(ee){I||(ee?et(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(ee){ft!==ee&&!I&&(i.stencilMask(ee),ft=ee)},setFunc:function(ee,pn,mn){(j!==ee||tt!==pn||at!==mn)&&(i.stencilFunc(ee,pn,mn),j=ee,tt=pn,at=mn)},setOp:function(ee,pn,mn){(It!==ee||Kt!==pn||fe!==mn)&&(i.stencilOp(ee,pn,mn),It=ee,Kt=pn,fe=mn)},setLocked:function(ee){I=ee},setClear:function(ee){xe!==ee&&(i.clearStencil(ee),xe=ee)},reset:function(){I=!1,ft=null,j=null,tt=null,at=null,It=null,Kt=null,fe=null,xe=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,x=null,v=null,w=null,k=null,A=new Ut(0,0,0),C=0,z=!1,E=null,y=null,P=null,Y=null,X=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,D=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(U)[1]),Q=D>=1):U.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),Q=D>=2);let L=null,$={};const W=i.getParameter(i.SCISSOR_BOX),H=i.getParameter(i.VIEWPORT),ct=new Ee().fromArray(W),vt=new Ee().fromArray(H);function G(I,ft,j,tt){const at=new Uint8Array(4),It=i.createTexture();i.bindTexture(I,It),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<j;Kt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(ft+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return It}const K={};K[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),et(i.DEPTH_TEST),r.setFunc(Kr),yt(!1),Nt(ql),et(i.CULL_FACE),Rt(Zn);function et(I){c[I]!==!0&&(i.enable(I),c[I]=!0)}function Z(I){c[I]!==!1&&(i.disable(I),c[I]=!1)}function gt(I,ft){return h[I]!==ft?(i.bindFramebuffer(I,ft),h[I]=ft,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ft),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Mt(I,ft){let j=d,tt=!1;if(I){j=u.get(ft),j===void 0&&(j=[],u.set(ft,j));const at=I.textures;if(j.length!==at.length||j[0]!==i.COLOR_ATTACHMENT0){for(let It=0,Kt=at.length;It<Kt;It++)j[It]=i.COLOR_ATTACHMENT0+It;j.length=at.length,tt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,tt=!0);tt&&i.drawBuffers(j)}function mt(I){return f!==I?(i.useProgram(I),f=I,!0):!1}const R={[mi]:i.FUNC_ADD,[Wf]:i.FUNC_SUBTRACT,[Xf]:i.FUNC_REVERSE_SUBTRACT};R[qf]=i.MIN,R[Yf]=i.MAX;const Et={[$f]:i.ZERO,[Kf]:i.ONE,[Zf]:i.SRC_COLOR,[Za]:i.SRC_ALPHA,[np]:i.SRC_ALPHA_SATURATE,[tp]:i.DST_COLOR,[Jf]:i.DST_ALPHA,[jf]:i.ONE_MINUS_SRC_COLOR,[ja]:i.ONE_MINUS_SRC_ALPHA,[ep]:i.ONE_MINUS_DST_COLOR,[Qf]:i.ONE_MINUS_DST_ALPHA,[ip]:i.CONSTANT_COLOR,[sp]:i.ONE_MINUS_CONSTANT_COLOR,[rp]:i.CONSTANT_ALPHA,[op]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(I,ft,j,tt,at,It,Kt,fe,xe,ee){if(I===Zn){g===!0&&(Z(i.BLEND),g=!1);return}if(g===!1&&(et(i.BLEND),g=!0),I!==Vf){if(I!==_||ee!==z){if((p!==mi||v!==mi)&&(i.blendEquation(i.FUNC_ADD),p=mi,v=mi),ee)switch(I){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ka:i.blendFunc(i.ONE,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ka:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $l:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,x=null,w=null,k=null,A.set(0,0,0),C=0,_=I,z=ee}return}at=at||ft,It=It||j,Kt=Kt||tt,(ft!==p||at!==v)&&(i.blendEquationSeparate(R[ft],R[at]),p=ft,v=at),(j!==m||tt!==x||It!==w||Kt!==k)&&(i.blendFuncSeparate(Et[j],Et[tt],Et[It],Et[Kt]),m=j,x=tt,w=It,k=Kt),(fe.equals(A)===!1||xe!==C)&&(i.blendColor(fe.r,fe.g,fe.b,xe),A.copy(fe),C=xe),_=I,z=!1}function Yt(I,ft){I.side===ze?Z(i.CULL_FACE):et(i.CULL_FACE);let j=I.side===Le;ft&&(j=!j),yt(j),I.blending===Zi&&I.transparent===!1?Rt(Zn):Rt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);const tt=I.stencilWrite;o.setTest(tt),tt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Lt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(I){E!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),E=I)}function Nt(I){I!==Hf?(et(i.CULL_FACE),I!==y&&(I===ql?i.cullFace(i.BACK):I===Gf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),y=I}function Ft(I){I!==P&&(Q&&i.lineWidth(I),P=I)}function Lt(I,ft,j){I?(et(i.POLYGON_OFFSET_FILL),(Y!==ft||X!==j)&&(i.polygonOffset(ft,j),Y=ft,X=j)):Z(i.POLYGON_OFFSET_FILL)}function ie(I){I?et(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function T(I){I===void 0&&(I=i.TEXTURE0+J-1),L!==I&&(i.activeTexture(I),L=I)}function M(I,ft,j){j===void 0&&(L===null?j=i.TEXTURE0+J-1:j=L);let tt=$[j];tt===void 0&&(tt={type:void 0,texture:void 0},$[j]=tt),(tt.type!==I||tt.texture!==ft)&&(L!==j&&(i.activeTexture(j),L=j),i.bindTexture(I,ft||K[I]),tt.type=I,tt.texture=ft)}function q(){const I=$[L];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function nt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Bt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(I){ct.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ct.copy(I))}function dt(I){vt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),vt.copy(I))}function Ht(I,ft){let j=l.get(ft);j===void 0&&(j=new WeakMap,l.set(ft,j));let tt=j.get(I);tt===void 0&&(tt=i.getUniformBlockIndex(ft,I.name),j.set(I,tt))}function Xt(I,ft){const tt=l.get(ft).get(I);a.get(ft)!==tt&&(i.uniformBlockBinding(ft,tt,I.__bindingPointIndex),a.set(ft,tt))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},L=null,$={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,x=null,v=null,w=null,k=null,A=new Ut(0,0,0),C=0,z=!1,E=null,y=null,P=null,Y=null,X=null,ct.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:et,disable:Z,bindFramebuffer:gt,drawBuffers:Mt,useProgram:mt,setBlending:Rt,setMaterial:Yt,setFlipSided:yt,setCullFace:Nt,setLineWidth:Ft,setPolygonOffset:Lt,setScissorTest:ie,activeTexture:T,bindTexture:M,unbindTexture:q,compressedTexImage2D:nt,compressedTexImage3D:it,texImage2D:St,texImage3D:Gt,updateUBOMapping:Ht,uniformBlockBinding:Xt,texStorage2D:Bt,texStorage3D:rt,texSubImage2D:st,texSubImage3D:Tt,compressedTexSubImage2D:ht,compressedTexSubImage3D:ut,scissor:Dt,viewport:dt,reset:de}}function Bv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Vt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):Bs("canvas")}function _(T,M,q){let nt=1;const it=ie(T);if((it.width>q||it.height>q)&&(nt=q/Math.max(it.width,it.height)),nt<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const st=Math.floor(nt*it.width),Tt=Math.floor(nt*it.height);u===void 0&&(u=g(st,Tt));const ht=M?g(st,Tt):u;return ht.width=st,ht.height=Tt,ht.getContext("2d").drawImage(T,0,0,st,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+st+"x"+Tt+")."),ht}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==re&&T.minFilter!==Ae}function m(T){i.generateMipmap(T)}function x(T,M,q,nt,it=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let st=M;if(M===i.RED&&(q===i.FLOAT&&(st=i.R32F),q===i.HALF_FLOAT&&(st=i.R16F),q===i.UNSIGNED_BYTE&&(st=i.R8)),M===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(st=i.R8UI),q===i.UNSIGNED_SHORT&&(st=i.R16UI),q===i.UNSIGNED_INT&&(st=i.R32UI),q===i.BYTE&&(st=i.R8I),q===i.SHORT&&(st=i.R16I),q===i.INT&&(st=i.R32I)),M===i.RG&&(q===i.FLOAT&&(st=i.RG32F),q===i.HALF_FLOAT&&(st=i.RG16F),q===i.UNSIGNED_BYTE&&(st=i.RG8)),M===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(st=i.RG8UI),q===i.UNSIGNED_SHORT&&(st=i.RG16UI),q===i.UNSIGNED_INT&&(st=i.RG32UI),q===i.BYTE&&(st=i.RG8I),q===i.SHORT&&(st=i.RG16I),q===i.INT&&(st=i.RG32I)),M===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),M===i.RGBA){const Tt=it?jr:te.getTransfer(nt);q===i.FLOAT&&(st=i.RGBA32F),q===i.HALF_FLOAT&&(st=i.RGBA16F),q===i.UNSIGNED_BYTE&&(st=Tt===oe?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function v(T,M){let q;return T?M===null||M===yi||M===os?q=i.DEPTH24_STENCIL8:M===Kn?q=i.DEPTH32F_STENCIL8:M===Zr&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===yi||M===os?q=i.DEPTH_COMPONENT24:M===Kn?q=i.DEPTH_COMPONENT32F:M===Zr&&(q=i.DEPTH_COMPONENT16),q}function w(T,M){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==re&&T.minFilter!==Ae?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function k(T){const M=T.target;M.removeEventListener("dispose",k),C(M),M.isVideoTexture&&h.delete(M)}function A(T){const M=T.target;M.removeEventListener("dispose",A),E(M)}function C(T){const M=n.get(T);if(M.__webglInit===void 0)return;const q=T.source,nt=d.get(q);if(nt){const it=nt[M.__cacheKey];it.usedTimes--,it.usedTimes===0&&z(T),Object.keys(nt).length===0&&d.delete(q)}n.remove(T)}function z(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const q=T.source,nt=d.get(q);delete nt[M.__cacheKey],o.memory.textures--}function E(T){const M=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(M.__webglFramebuffer[nt]))for(let it=0;it<M.__webglFramebuffer[nt].length;it++)i.deleteFramebuffer(M.__webglFramebuffer[nt][it]);else i.deleteFramebuffer(M.__webglFramebuffer[nt]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[nt])}else{if(Array.isArray(M.__webglFramebuffer))for(let nt=0;nt<M.__webglFramebuffer.length;nt++)i.deleteFramebuffer(M.__webglFramebuffer[nt]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let nt=0;nt<M.__webglColorRenderbuffer.length;nt++)M.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[nt]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const q=T.textures;for(let nt=0,it=q.length;nt<it;nt++){const st=n.get(q[nt]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),o.memory.textures--),n.remove(q[nt])}n.remove(T)}let y=0;function P(){y=0}function Y(){const T=y;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),y+=1,T}function X(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function J(T,M){const q=n.get(T);if(T.isVideoTexture&&Ft(T),T.isRenderTargetTexture===!1&&T.version>0&&q.__version!==T.version){const nt=T.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{vt(q,T,M);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+M)}function Q(T,M){const q=n.get(T);if(T.version>0&&q.__version!==T.version){vt(q,T,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+M)}function D(T,M){const q=n.get(T);if(T.version>0&&q.__version!==T.version){vt(q,T,M);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+M)}function U(T,M){const q=n.get(T);if(T.version>0&&q.__version!==T.version){G(q,T,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+M)}const L={[rs]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[tl]:i.MIRRORED_REPEAT},$={[re]:i.NEAREST,[pl]:i.NEAREST_MIPMAP_NEAREST,[tr]:i.NEAREST_MIPMAP_LINEAR,[Ae]:i.LINEAR,[Uo]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},W={[kp]:i.NEVER,[Gp]:i.ALWAYS,[Fp]:i.LESS,[Xu]:i.LEQUAL,[Op]:i.EQUAL,[Hp]:i.GEQUAL,[zp]:i.GREATER,[Bp]:i.NOTEQUAL};function H(T,M){if(M.type===Kn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ae||M.magFilter===Uo||M.magFilter===tr||M.magFilter===xi||M.minFilter===Ae||M.minFilter===Uo||M.minFilter===tr||M.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,L[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,L[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,L[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,$[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,$[M.minFilter]),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,W[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===re||M.minFilter!==tr&&M.minFilter!==xi||M.type===Kn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ct(T,M){let q=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",k));const nt=M.source;let it=d.get(nt);it===void 0&&(it={},d.set(nt,it));const st=X(M);if(st!==T.__cacheKey){it[st]===void 0&&(it[st]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),it[st].usedTimes++;const Tt=it[T.__cacheKey];Tt!==void 0&&(it[T.__cacheKey].usedTimes--,Tt.usedTimes===0&&z(M)),T.__cacheKey=st,T.__webglTexture=it[st].texture}return q}function vt(T,M,q){let nt=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(nt=i.TEXTURE_3D);const it=ct(T,M),st=M.source;e.bindTexture(nt,T.__webglTexture,i.TEXTURE0+q);const Tt=n.get(st);if(st.version!==Tt.__version||it===!0){e.activeTexture(i.TEXTURE0+q);const ht=te.getPrimaries(te.workingColorSpace),ut=M.colorSpace===$n?null:te.getPrimaries(M.colorSpace),Bt=M.colorSpace===$n||ht===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let rt=_(M.image,!1,s.maxTextureSize);rt=Lt(M,rt);const St=r.convert(M.format,M.colorSpace),Gt=r.convert(M.type);let Dt=x(M.internalFormat,St,Gt,M.colorSpace,M.isVideoTexture);H(nt,M);let dt;const Ht=M.mipmaps,Xt=M.isVideoTexture!==!0,de=Tt.__version===void 0||it===!0,I=st.dataReady,ft=w(M,rt);if(M.isDepthTexture)Dt=v(M.format===as,M.type),de&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Dt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Dt,rt.width,rt.height,0,St,Gt,null));else if(M.isDataTexture)if(Ht.length>0){Xt&&de&&e.texStorage2D(i.TEXTURE_2D,ft,Dt,Ht[0].width,Ht[0].height);for(let j=0,tt=Ht.length;j<tt;j++)dt=Ht[j],Xt?I&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,dt.width,dt.height,St,Gt,dt.data):e.texImage2D(i.TEXTURE_2D,j,Dt,dt.width,dt.height,0,St,Gt,dt.data);M.generateMipmaps=!1}else Xt?(de&&e.texStorage2D(i.TEXTURE_2D,ft,Dt,rt.width,rt.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,St,Gt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,rt.width,rt.height,0,St,Gt,rt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xt&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Dt,Ht[0].width,Ht[0].height,rt.depth);for(let j=0,tt=Ht.length;j<tt;j++)if(dt=Ht[j],M.format!==vn)if(St!==null)if(Xt){if(I)if(M.layerUpdates.size>0){for(const at of M.layerUpdates){const It=dt.width*dt.height;e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,at,dt.width,dt.height,1,St,dt.data.slice(It*at,It*(at+1)),0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,dt.width,dt.height,rt.depth,St,dt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Dt,dt.width,dt.height,rt.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,dt.width,dt.height,rt.depth,St,Gt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Dt,dt.width,dt.height,rt.depth,0,St,Gt,dt.data)}else{Xt&&de&&e.texStorage2D(i.TEXTURE_2D,ft,Dt,Ht[0].width,Ht[0].height);for(let j=0,tt=Ht.length;j<tt;j++)dt=Ht[j],M.format!==vn?St!==null?Xt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,dt.width,dt.height,St,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Dt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?I&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,dt.width,dt.height,St,Gt,dt.data):e.texImage2D(i.TEXTURE_2D,j,Dt,dt.width,dt.height,0,St,Gt,dt.data)}else if(M.isDataArrayTexture)if(Xt){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Dt,rt.width,rt.height,rt.depth),I)if(M.layerUpdates.size>0){let j;switch(Gt){case i.UNSIGNED_BYTE:switch(St){case i.ALPHA:j=1;break;case i.LUMINANCE:j=1;break;case i.LUMINANCE_ALPHA:j=2;break;case i.RGB:j=3;break;case i.RGBA:j=4;break;default:throw new Error(`Unknown texel size for format ${St}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:j=1;break;default:throw new Error(`Unknown texel size for type ${Gt}.`)}const tt=rt.width*rt.height*j;for(const at of M.layerUpdates)e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,rt.width,rt.height,1,St,Gt,rt.data.slice(tt*at,tt*(at+1)));M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,St,Gt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,rt.width,rt.height,rt.depth,0,St,Gt,rt.data);else if(M.isData3DTexture)Xt?(de&&e.texStorage3D(i.TEXTURE_3D,ft,Dt,rt.width,rt.height,rt.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,St,Gt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,rt.width,rt.height,rt.depth,0,St,Gt,rt.data);else if(M.isFramebufferTexture){if(de)if(Xt)e.texStorage2D(i.TEXTURE_2D,ft,Dt,rt.width,rt.height);else{let j=rt.width,tt=rt.height;for(let at=0;at<ft;at++)e.texImage2D(i.TEXTURE_2D,at,Dt,j,tt,0,St,Gt,null),j>>=1,tt>>=1}}else if(Ht.length>0){if(Xt&&de){const j=ie(Ht[0]);e.texStorage2D(i.TEXTURE_2D,ft,Dt,j.width,j.height)}for(let j=0,tt=Ht.length;j<tt;j++)dt=Ht[j],Xt?I&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,St,Gt,dt):e.texImage2D(i.TEXTURE_2D,j,Dt,St,Gt,dt);M.generateMipmaps=!1}else if(Xt){if(de){const j=ie(rt);e.texStorage2D(i.TEXTURE_2D,ft,Dt,j.width,j.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Gt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Dt,St,Gt,rt);p(M)&&m(nt),Tt.__version=st.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function G(T,M,q){if(M.image.length!==6)return;const nt=ct(T,M),it=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+q);const st=n.get(it);if(it.version!==st.__version||nt===!0){e.activeTexture(i.TEXTURE0+q);const Tt=te.getPrimaries(te.workingColorSpace),ht=M.colorSpace===$n?null:te.getPrimaries(M.colorSpace),ut=M.colorSpace===$n||Tt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Bt=M.isCompressedTexture||M.image[0].isCompressedTexture,rt=M.image[0]&&M.image[0].isDataTexture,St=[];for(let tt=0;tt<6;tt++)!Bt&&!rt?St[tt]=_(M.image[tt],!0,s.maxCubemapSize):St[tt]=rt?M.image[tt].image:M.image[tt],St[tt]=Lt(M,St[tt]);const Gt=St[0],Dt=r.convert(M.format,M.colorSpace),dt=r.convert(M.type),Ht=x(M.internalFormat,Dt,dt,M.colorSpace),Xt=M.isVideoTexture!==!0,de=st.__version===void 0||nt===!0,I=it.dataReady;let ft=w(M,Gt);H(i.TEXTURE_CUBE_MAP,M);let j;if(Bt){Xt&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Ht,Gt.width,Gt.height);for(let tt=0;tt<6;tt++){j=St[tt].mipmaps;for(let at=0;at<j.length;at++){const It=j[at];M.format!==vn?Dt!==null?Xt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at,0,0,It.width,It.height,Dt,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at,Ht,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at,0,0,It.width,It.height,Dt,dt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at,Ht,It.width,It.height,0,Dt,dt,It.data)}}}else{if(j=M.mipmaps,Xt&&de){j.length>0&&ft++;const tt=ie(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Ht,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(rt){Xt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,St[tt].width,St[tt].height,Dt,dt,St[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ht,St[tt].width,St[tt].height,0,Dt,dt,St[tt].data);for(let at=0;at<j.length;at++){const Kt=j[at].image[tt].image;Xt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at+1,0,0,Kt.width,Kt.height,Dt,dt,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at+1,Ht,Kt.width,Kt.height,0,Dt,dt,Kt.data)}}else{Xt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Dt,dt,St[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ht,Dt,dt,St[tt]);for(let at=0;at<j.length;at++){const It=j[at];Xt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at+1,0,0,Dt,dt,It.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at+1,Ht,Dt,dt,It.image[tt])}}}p(M)&&m(i.TEXTURE_CUBE_MAP),st.__version=it.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function K(T,M,q,nt,it,st){const Tt=r.convert(q.format,q.colorSpace),ht=r.convert(q.type),ut=x(q.internalFormat,Tt,ht,q.colorSpace);if(!n.get(M).__hasExternalTextures){const rt=Math.max(1,M.width>>st),St=Math.max(1,M.height>>st);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,st,ut,rt,St,M.depth,0,Tt,ht,null):e.texImage2D(it,st,ut,rt,St,0,Tt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Nt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,it,n.get(q).__webglTexture,0,yt(M)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,it,n.get(q).__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(T,M,q){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer){const nt=M.depthTexture,it=nt&&nt.isDepthTexture?nt.type:null,st=v(M.stencilBuffer,it),Tt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=yt(M);Nt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,st,M.width,M.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,st,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,st,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,T)}else{const nt=M.textures;for(let it=0;it<nt.length;it++){const st=nt[it],Tt=r.convert(st.format,st.colorSpace),ht=r.convert(st.type),ut=x(st.internalFormat,Tt,ht,st.colorSpace),Bt=yt(M);q&&Nt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,ut,M.width,M.height):Nt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt,ut,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ut,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Z(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);const nt=n.get(M.depthTexture).__webglTexture,it=yt(M);if(M.depthTexture.format===ji)Nt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(M.depthTexture.format===as)Nt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function gt(T){const M=n.get(T),q=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Z(M.__webglFramebuffer,T)}else if(q){M.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[nt]),M.__webglDepthbuffer[nt]=i.createRenderbuffer(),et(M.__webglDepthbuffer[nt],T,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),et(M.__webglDepthbuffer,T,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(T,M,q){const nt=n.get(T);M!==void 0&&K(nt.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&gt(T)}function mt(T){const M=T.texture,q=n.get(T),nt=n.get(M);T.addEventListener("dispose",A);const it=T.textures,st=T.isWebGLCubeRenderTarget===!0,Tt=it.length>1;if(Tt||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=M.version,o.memory.textures++),st){q.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[ht]=[];for(let ut=0;ut<M.mipmaps.length;ut++)q.__webglFramebuffer[ht][ut]=i.createFramebuffer()}else q.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let ht=0;ht<M.mipmaps.length;ht++)q.__webglFramebuffer[ht]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let ht=0,ut=it.length;ht<ut;ht++){const Bt=n.get(it[ht]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Nt(T)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ht=0;ht<it.length;ht++){const ut=it[ht];q.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ht]);const Bt=r.convert(ut.format,ut.colorSpace),rt=r.convert(ut.type),St=x(ut.internalFormat,Bt,rt,ut.colorSpace,T.isXRRenderTarget===!0),Gt=yt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,St,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,q.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),et(q.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),H(i.TEXTURE_CUBE_MAP,M);for(let ht=0;ht<6;ht++)if(M.mipmaps&&M.mipmaps.length>0)for(let ut=0;ut<M.mipmaps.length;ut++)K(q.__webglFramebuffer[ht][ut],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,ut);else K(q.__webglFramebuffer[ht],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);p(M)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ht=0,ut=it.length;ht<ut;ht++){const Bt=it[ht],rt=n.get(Bt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),H(i.TEXTURE_2D,Bt),K(q.__webglFramebuffer,T,Bt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),p(Bt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,nt.__webglTexture),H(ht,M),M.mipmaps&&M.mipmaps.length>0)for(let ut=0;ut<M.mipmaps.length;ut++)K(q.__webglFramebuffer[ut],T,M,i.COLOR_ATTACHMENT0,ht,ut);else K(q.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,ht,0);p(M)&&m(ht),e.unbindTexture()}T.depthBuffer&&gt(T)}function R(T){const M=T.textures;for(let q=0,nt=M.length;q<nt;q++){const it=M[q];if(p(it)){const st=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Tt=n.get(it).__webglTexture;e.bindTexture(st,Tt),m(st),e.unbindTexture()}}}const Et=[],Rt=[];function Yt(T){if(T.samples>0){if(Nt(T)===!1){const M=T.textures,q=T.width,nt=T.height;let it=i.COLOR_BUFFER_BIT;const st=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(T),ht=M.length>1;if(ht)for(let ut=0;ut<M.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let ut=0;ut<M.length;ut++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[ut]);const Bt=n.get(M[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Bt,0)}i.blitFramebuffer(0,0,q,nt,0,0,q,nt,it,i.NEAREST),l===!0&&(Et.length=0,Rt.length=0,Et.push(i.COLOR_ATTACHMENT0+ut),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Et.push(st),Rt.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let ut=0;ut<M.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[ut]);const Bt=n.get(M[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function yt(T){return Math.min(s.maxSamples,T.samples)}function Nt(T){const M=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ft(T){const M=o.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function Lt(T,M){const q=T.colorSpace,nt=T.format,it=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||q!==ei&&q!==$n&&(te.getTransfer(q)===oe?(nt!==vn||it!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),M}function ie(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=P,this.setTexture2D=J,this.setTexture2DArray=Q,this.setTexture3D=D,this.setTextureCube=U,this.rebindTextures=Mt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=K,this.useMultisampledRTT=Nt}function Hv(i,t){function e(n,s=$n){let r;const o=te.getTransfer(s);if(n===Jn)return i.UNSIGNED_BYTE;if(n===zu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ep)return i.BYTE;if(n===bp)return i.SHORT;if(n===Zr)return i.UNSIGNED_SHORT;if(n===Ou)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===fs)return i.HALF_FLOAT;if(n===Tp)return i.ALPHA;if(n===Ap)return i.RGB;if(n===vn)return i.RGBA;if(n===Cp)return i.LUMINANCE;if(n===Rp)return i.LUMINANCE_ALPHA;if(n===ji)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===Pp)return i.RED;if(n===Hu)return i.RED_INTEGER;if(n===Lp)return i.RG;if(n===Gu)return i.RG_INTEGER;if(n===Vu)return i.RGBA_INTEGER;if(n===No||n===ko||n===Fo||n===Oo)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Kl||n===Zl||n===jl||n===Jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ql||n===tc||n===ec)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ql||n===tc)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ec)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ic)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ac)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mc)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zo||n===gc||n===_c)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zo)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dp||n===vc||n===xc||n===Mc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===zo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Gv extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class In extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vv={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new In;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Wv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xv=`
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

}`;class qv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new De,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new rn({vertexShader:Wv,fragmentShader:Xv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new Oe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Yv extends ps{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new qv,p=e.getContextAttributes();let m=null,x=null;const v=[],w=[],k=new Vt;let A=null;const C=new Ve;C.layers.enable(1),C.viewport=new Ee;const z=new Ve;z.layers.enable(2),z.viewport=new Ee;const E=[C,z],y=new Gv;y.layers.enable(1),y.layers.enable(2);let P=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=v[G];return K===void 0&&(K=new ua,v[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=v[G];return K===void 0&&(K=new ua,v[G]=K),K.getGripSpace()},this.getHand=function(G){let K=v[G];return K===void 0&&(K=new ua,v[G]=K),K.getHandSpace()};function X(G){const K=w.indexOf(G.inputSource);if(K===-1)return;const et=v[K];et!==void 0&&(et.update(G.inputSource,G.frame,c||o),et.dispatchEvent({type:G.type,data:G.inputSource}))}function J(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",Q);for(let G=0;G<v.length;G++){const K=w[G];K!==null&&(w[G]=null,v[G].disconnect(K))}P=null,Y=null,_.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,x=null,vt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",J),s.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(k),s.renderState.layers===void 0){const K={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Nn(f.framebufferWidth,f.framebufferHeight,{format:vn,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let K=null,et=null,Z=null;p.depth&&(Z=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=p.stencil?as:ji,et=p.stencil?os:yi);const gt={colorFormat:e.RGBA8,depthFormat:Z,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(gt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Nn(d.textureWidth,d.textureHeight,{format:vn,type:Jn,depthTexture:new xl(d.textureWidth,d.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),vt.setContext(s),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function Q(G){for(let K=0;K<G.removed.length;K++){const et=G.removed[K],Z=w.indexOf(et);Z>=0&&(w[Z]=null,v[Z].disconnect(et))}for(let K=0;K<G.added.length;K++){const et=G.added[K];let Z=w.indexOf(et);if(Z===-1){for(let Mt=0;Mt<v.length;Mt++)if(Mt>=w.length){w.push(et),Z=Mt;break}else if(w[Mt]===null){w[Mt]=et,Z=Mt;break}if(Z===-1)break}const gt=v[Z];gt&&gt.connect(et)}}const D=new O,U=new O;function L(G,K,et){D.setFromMatrixPosition(K.matrixWorld),U.setFromMatrixPosition(et.matrixWorld);const Z=D.distanceTo(U),gt=K.projectionMatrix.elements,Mt=et.projectionMatrix.elements,mt=gt[14]/(gt[10]-1),R=gt[14]/(gt[10]+1),Et=(gt[9]+1)/gt[5],Rt=(gt[9]-1)/gt[5],Yt=(gt[8]-1)/gt[0],yt=(Mt[8]+1)/Mt[0],Nt=mt*Yt,Ft=mt*yt,Lt=Z/(-Yt+yt),ie=Lt*-Yt;K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ie),G.translateZ(Lt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const T=mt+Lt,M=R+Lt,q=Nt-ie,nt=Ft+(Z-ie),it=Et*R/M*T,st=Rt*R/M*T;G.projectionMatrix.makePerspective(q,nt,it,st,T,M),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function $(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;_.texture!==null&&(G.near=_.depthNear,G.far=_.depthFar),y.near=z.near=C.near=G.near,y.far=z.far=C.far=G.far,(P!==y.near||Y!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,Y=y.far,C.near=P,C.far=Y,z.near=P,z.far=Y,C.updateProjectionMatrix(),z.updateProjectionMatrix(),G.updateProjectionMatrix());const K=G.parent,et=y.cameras;$(y,K);for(let Z=0;Z<et.length;Z++)$(et[Z],K);et.length===2?L(y,C,z):y.projectionMatrix.copy(C.projectionMatrix),W(G,y,K)};function W(G,K,et){et===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(et.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=el*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let H=null;function ct(G,K){if(h=K.getViewerPose(c||o),g=K,h!==null){const et=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Z=!1;et.length!==y.cameras.length&&(y.cameras.length=0,Z=!0);for(let Mt=0;Mt<et.length;Mt++){const mt=et[Mt];let R=null;if(f!==null)R=f.getViewport(mt);else{const Rt=u.getViewSubImage(d,mt);R=Rt.viewport,Mt===0&&(t.setRenderTargetTextures(x,Rt.colorTexture,d.ignoreDepthValues?void 0:Rt.depthStencilTexture),t.setRenderTarget(x))}let Et=E[Mt];Et===void 0&&(Et=new Ve,Et.layers.enable(Mt),Et.viewport=new Ee,E[Mt]=Et),Et.matrix.fromArray(mt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(mt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(R.x,R.y,R.width,R.height),Mt===0&&(y.matrix.copy(Et.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Z===!0&&y.cameras.push(Et)}const gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")){const Mt=u.getDepthInformation(et[0]);Mt&&Mt.isValid&&Mt.texture&&_.init(t,Mt,s.renderState)}}for(let et=0;et<v.length;et++){const Z=w[et],gt=v[et];Z!==null&&gt!==void 0&&gt.update(Z,K,c||o)}H&&H(G,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const vt=new id;vt.setAnimationLoop(ct),this.setAnimationLoop=function(G){H=G},this.dispose=function(){}}}const hi=new kn,$v=new ae;function Kv(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,td(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,v,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,w)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,x,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Le&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Le&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=t.get(m),v=x.envMap,w=x.envMapRotation;v&&(p.envMap.value=v,hi.copy(w),hi.x*=-1,hi.y*=-1,hi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),p.envMapRotation.value.setFromMatrix4($v.makeRotationFromEuler(hi)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Le&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const x=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zv(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const w=v.program;n.uniformBlockBinding(x,w)}function c(x,v){let w=s[x.id];w===void 0&&(g(x),w=h(x),s[x.id]=w,x.addEventListener("dispose",p));const k=v.program;n.updateUBOMapping(x,k);const A=t.render.frame;r[x.id]!==A&&(d(x),r[x.id]=A)}function h(x){const v=u();x.__bindingPointIndex=v;const w=i.createBuffer(),k=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,k,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,w),w}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=s[x.id],w=x.uniforms,k=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,C=w.length;A<C;A++){const z=Array.isArray(w[A])?w[A]:[w[A]];for(let E=0,y=z.length;E<y;E++){const P=z[E];if(f(P,A,E,k)===!0){const Y=P.__offset,X=Array.isArray(P.value)?P.value:[P.value];let J=0;for(let Q=0;Q<X.length;Q++){const D=X[Q],U=_(D);typeof D=="number"||typeof D=="boolean"?(P.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,Y+J,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=0,P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=0,P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=0):(D.toArray(P.__data,J),J+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,v,w,k){const A=x.value,C=v+"_"+w;if(k[C]===void 0)return typeof A=="number"||typeof A=="boolean"?k[C]=A:k[C]=A.clone(),!0;{const z=k[C];if(typeof A=="number"||typeof A=="boolean"){if(z!==A)return k[C]=A,!0}else if(z.equals(A)===!1)return z.copy(A),!0}return!1}function g(x){const v=x.uniforms;let w=0;const k=16;for(let C=0,z=v.length;C<z;C++){const E=Array.isArray(v[C])?v[C]:[v[C]];for(let y=0,P=E.length;y<P;y++){const Y=E[y],X=Array.isArray(Y.value)?Y.value:[Y.value];for(let J=0,Q=X.length;J<Q;J++){const D=X[J],U=_(D),L=w%k;L!==0&&k-L<U.boundary&&(w+=k-L),Y.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=U.storage}}}const A=w%k;return A>0&&(w+=k-A),x.__size=w,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const w=o.indexOf(v.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class hd{constructor(t={}){const{canvas:e=Wp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=se,this.toneMapping=Un,this.toneMappingExposure=1;const v=this;let w=!1,k=0,A=0,C=null,z=-1,E=null;const y=new Ee,P=new Ee;let Y=null;const X=new Ut(0);let J=0,Q=e.width,D=e.height,U=1,L=null,$=null;const W=new Ee(0,0,Q,D),H=new Ee(0,0,Q,D);let ct=!1;const vt=new _l;let G=!1,K=!1;const et=new ae,Z=new O,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function mt(){return C===null?U:1}let R=n;function Et(S,N){return e.getContext(S,N)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fl}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",j,!1),e.addEventListener("webglcontextcreationerror",tt,!1),R===null){const N="webgl2";if(R=Et(N,S),R===null)throw Et(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Rt,Yt,yt,Nt,Ft,Lt,ie,T,M,q,nt,it,st,Tt,ht,ut,Bt,rt,St,Gt,Dt,dt,Ht,Xt;function de(){Rt=new o_(R),Rt.init(),dt=new Hv(R,Rt),Yt=new t_(R,Rt,t,dt),yt=new zv(R),Nt=new c_(R),Ft=new Tv,Lt=new Bv(R,Rt,yt,Ft,Yt,dt,Nt),ie=new n_(v),T=new r_(v),M=new gm(R),Ht=new Jg(R,M),q=new a_(R,M,Nt,Ht),nt=new u_(R,q,M,Nt),St=new h_(R,Yt,Lt),ut=new e_(Ft),it=new wv(v,ie,T,Rt,Yt,Ht,ut),st=new Kv(v,Ft),Tt=new Cv,ht=new Uv(Rt),rt=new jg(v,ie,T,yt,nt,d,l),Bt=new Ov(v,nt,Yt),Xt=new Zv(R,Nt,Yt,yt),Gt=new Qg(R,Rt,Nt),Dt=new l_(R,Rt,Nt),Nt.programs=it.programs,v.capabilities=Yt,v.extensions=Rt,v.properties=Ft,v.renderLists=Tt,v.shadowMap=Bt,v.state=yt,v.info=Nt}de();const I=new Yv(v,R);this.xr=I,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const S=Rt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Rt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(S){S!==void 0&&(U=S,this.setSize(Q,D,!1))},this.getSize=function(S){return S.set(Q,D)},this.setSize=function(S,N,B=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=S,D=N,e.width=Math.floor(S*U),e.height=Math.floor(N*U),B===!0&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(Q*U,D*U).floor()},this.setDrawingBufferSize=function(S,N,B){Q=S,D=N,U=B,e.width=Math.floor(S*B),e.height=Math.floor(N*B),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(y)},this.getViewport=function(S){return S.copy(W)},this.setViewport=function(S,N,B,V){S.isVector4?W.set(S.x,S.y,S.z,S.w):W.set(S,N,B,V),yt.viewport(y.copy(W).multiplyScalar(U).round())},this.getScissor=function(S){return S.copy(H)},this.setScissor=function(S,N,B,V){S.isVector4?H.set(S.x,S.y,S.z,S.w):H.set(S,N,B,V),yt.scissor(P.copy(H).multiplyScalar(U).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(S){yt.setScissorTest(ct=S)},this.setOpaqueSort=function(S){L=S},this.setTransparentSort=function(S){$=S},this.getClearColor=function(S){return S.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(S=!0,N=!0,B=!0){let V=0;if(S){let F=!1;if(C!==null){const ot=C.texture.format;F=ot===Vu||ot===Gu||ot===Hu}if(F){const ot=C.texture.type,pt=ot===Jn||ot===yi||ot===Zr||ot===os||ot===zu||ot===Bu,_t=rt.getClearColor(),xt=rt.getClearAlpha(),Ct=_t.r,Pt=_t.g,At=_t.b;pt?(f[0]=Ct,f[1]=Pt,f[2]=At,f[3]=xt,R.clearBufferuiv(R.COLOR,0,f)):(g[0]=Ct,g[1]=Pt,g[2]=At,g[3]=xt,R.clearBufferiv(R.COLOR,0,g))}else V|=R.COLOR_BUFFER_BIT}N&&(V|=R.DEPTH_BUFFER_BIT),B&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",j,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),Tt.dispose(),ht.dispose(),Ft.dispose(),ie.dispose(),T.dispose(),nt.dispose(),Ht.dispose(),Xt.dispose(),it.dispose(),I.dispose(),I.removeEventListener("sessionstart",pn),I.removeEventListener("sessionend",mn),ii.stop()};function ft(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const S=Nt.autoReset,N=Bt.enabled,B=Bt.autoUpdate,V=Bt.needsUpdate,F=Bt.type;de(),Nt.autoReset=S,Bt.enabled=N,Bt.autoUpdate=B,Bt.needsUpdate=V,Bt.type=F}function tt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function at(S){const N=S.target;N.removeEventListener("dispose",at),It(N)}function It(S){Kt(S),Ft.remove(S)}function Kt(S){const N=Ft.get(S).programs;N!==void 0&&(N.forEach(function(B){it.releaseProgram(B)}),S.isShaderMaterial&&it.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,B,V,F,ot){N===null&&(N=gt);const pt=F.isMesh&&F.matrixWorld.determinant()<0,_t=Nf(S,N,B,V,F);yt.setMaterial(V,pt);let xt=B.index,Ct=1;if(V.wireframe===!0){if(xt=q.getWireframeAttribute(B),xt===void 0)return;Ct=2}const Pt=B.drawRange,At=B.attributes.position;let Zt=Pt.start*Ct,ce=(Pt.start+Pt.count)*Ct;ot!==null&&(Zt=Math.max(Zt,ot.start*Ct),ce=Math.min(ce,(ot.start+ot.count)*Ct)),xt!==null?(Zt=Math.max(Zt,0),ce=Math.min(ce,xt.count)):At!=null&&(Zt=Math.max(Zt,0),ce=Math.min(ce,At.count));const he=ce-Zt;if(he<0||he===1/0)return;Ht.setup(F,V,_t,B,xt);let Xe,Qt=Gt;if(xt!==null&&(Xe=M.get(xt),Qt=Dt,Qt.setIndex(Xe)),F.isMesh)V.wireframe===!0?(yt.setLineWidth(V.wireframeLinewidth*mt()),Qt.setMode(R.LINES)):Qt.setMode(R.TRIANGLES);else if(F.isLine){let bt=V.linewidth;bt===void 0&&(bt=1),yt.setLineWidth(bt*mt()),F.isLineSegments?Qt.setMode(R.LINES):F.isLineLoop?Qt.setMode(R.LINE_LOOP):Qt.setMode(R.LINE_STRIP)}else F.isPoints?Qt.setMode(R.POINTS):F.isSprite&&Qt.setMode(R.TRIANGLES);if(F.isBatchedMesh)F._multiDrawInstances!==null?Qt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances):Qt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)Qt.renderInstances(Zt,he,F.count);else if(B.isInstancedBufferGeometry){const bt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ue=Math.min(B.instanceCount,bt);Qt.renderInstances(Zt,he,Ue)}else Qt.render(Zt,he)};function fe(S,N,B){S.transparent===!0&&S.side===ze&&S.forceSinglePass===!1?(S.side=Le,S.needsUpdate=!0,Js(S,N,B),S.side=jn,S.needsUpdate=!0,Js(S,N,B),S.side=ze):Js(S,N,B)}this.compile=function(S,N,B=null){B===null&&(B=S),p=ht.get(B),p.init(N),x.push(p),B.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),S!==B&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const V=new Set;return S.traverse(function(F){const ot=F.material;if(ot)if(Array.isArray(ot))for(let pt=0;pt<ot.length;pt++){const _t=ot[pt];fe(_t,B,F),V.add(_t)}else fe(ot,B,F),V.add(ot)}),x.pop(),p=null,V},this.compileAsync=function(S,N,B=null){const V=this.compile(S,N,B);return new Promise(F=>{function ot(){if(V.forEach(function(pt){Ft.get(pt).currentProgram.isReady()&&V.delete(pt)}),V.size===0){F(S);return}setTimeout(ot,10)}Rt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let xe=null;function ee(S){xe&&xe(S)}function pn(){ii.stop()}function mn(){ii.start()}const ii=new id;ii.setAnimationLoop(ee),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(S){xe=S,I.setAnimationLoop(S),S===null?ii.stop():ii.start()},I.addEventListener("sessionstart",pn),I.addEventListener("sessionend",mn),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(I.cameraAutoUpdate===!0&&I.updateCamera(N),N=I.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,N,C),p=ht.get(S,x.length),p.init(N),x.push(p),et.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),vt.setFromProjectionMatrix(et),K=this.localClippingEnabled,G=ut.init(this.clippingPlanes,K),_=Tt.get(S,m.length),_.init(),m.push(_),I.enabled===!0&&I.isPresenting===!0){const ot=v.xr.getDepthSensingMesh();ot!==null&&Po(ot,N,-1/0,v.sortObjects)}Po(S,N,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(L,$),Mt=I.enabled===!1||I.isPresenting===!1||I.hasDepthSensing()===!1,Mt&&rt.addToRenderList(_,S),this.info.render.frame++,G===!0&&ut.beginShadows();const B=p.state.shadowsArray;Bt.render(B,S,N),G===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=_.opaque,F=_.transmissive;if(p.setupLights(),N.isArrayCamera){const ot=N.cameras;if(F.length>0)for(let pt=0,_t=ot.length;pt<_t;pt++){const xt=ot[pt];Hl(V,F,S,xt)}Mt&&rt.render(S);for(let pt=0,_t=ot.length;pt<_t;pt++){const xt=ot[pt];Bl(_,S,xt,xt.viewport)}}else F.length>0&&Hl(V,F,S,N),Mt&&rt.render(S),Bl(_,S,N);C!==null&&(Lt.updateMultisampleRenderTarget(C),Lt.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(v,S,N),Ht.resetDefaultState(),z=-1,E=null,x.pop(),x.length>0?(p=x[x.length-1],G===!0&&ut.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Po(S,N,B,V){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||vt.intersectsSprite(S)){V&&Z.setFromMatrixPosition(S.matrixWorld).applyMatrix4(et);const pt=nt.update(S),_t=S.material;_t.visible&&_.push(S,pt,_t,B,Z.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||vt.intersectsObject(S))){const pt=nt.update(S),_t=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Z.copy(S.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Z.copy(pt.boundingSphere.center)),Z.applyMatrix4(S.matrixWorld).applyMatrix4(et)),Array.isArray(_t)){const xt=pt.groups;for(let Ct=0,Pt=xt.length;Ct<Pt;Ct++){const At=xt[Ct],Zt=_t[At.materialIndex];Zt&&Zt.visible&&_.push(S,pt,Zt,B,Z.z,At)}}else _t.visible&&_.push(S,pt,_t,B,Z.z,null)}}const ot=S.children;for(let pt=0,_t=ot.length;pt<_t;pt++)Po(ot[pt],N,B,V)}function Bl(S,N,B,V){const F=S.opaque,ot=S.transmissive,pt=S.transparent;p.setupLightsView(B),G===!0&&ut.setGlobalState(v.clippingPlanes,B),V&&yt.viewport(y.copy(V)),F.length>0&&js(F,N,B),ot.length>0&&js(ot,N,B),pt.length>0&&js(pt,N,B),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Hl(S,N,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Nn(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float")?fs:Jn,minFilter:xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const ot=p.state.transmissionRenderTarget[V.id],pt=V.viewport||y;ot.setSize(pt.z,pt.w);const _t=v.getRenderTarget();v.setRenderTarget(ot),v.getClearColor(X),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),Mt?rt.render(B):v.clear();const xt=v.toneMapping;v.toneMapping=Un;const Ct=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),G===!0&&ut.setGlobalState(v.clippingPlanes,V),js(S,B,V),Lt.updateMultisampleRenderTarget(ot),Lt.updateRenderTargetMipmap(ot),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let At=0,Zt=N.length;At<Zt;At++){const ce=N[At],he=ce.object,Xe=ce.geometry,Qt=ce.material,bt=ce.group;if(Qt.side===ze&&he.layers.test(V.layers)){const Ue=Qt.side;Qt.side=Le,Qt.needsUpdate=!0,Gl(he,B,V,Xe,Qt,bt),Qt.side=Ue,Qt.needsUpdate=!0,Pt=!0}}Pt===!0&&(Lt.updateMultisampleRenderTarget(ot),Lt.updateRenderTargetMipmap(ot))}v.setRenderTarget(_t),v.setClearColor(X,J),Ct!==void 0&&(V.viewport=Ct),v.toneMapping=xt}function js(S,N,B){const V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ot=S.length;F<ot;F++){const pt=S[F],_t=pt.object,xt=pt.geometry,Ct=V===null?pt.material:V,Pt=pt.group;_t.layers.test(B.layers)&&Gl(_t,N,B,xt,Ct,Pt)}}function Gl(S,N,B,V,F,ot){S.onBeforeRender(v,N,B,V,F,ot),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(v,N,B,V,S,ot),F.transparent===!0&&F.side===ze&&F.forceSinglePass===!1?(F.side=Le,F.needsUpdate=!0,v.renderBufferDirect(B,N,V,F,S,ot),F.side=jn,F.needsUpdate=!0,v.renderBufferDirect(B,N,V,F,S,ot),F.side=ze):v.renderBufferDirect(B,N,V,F,S,ot),S.onAfterRender(v,N,B,V,F,ot)}function Js(S,N,B){N.isScene!==!0&&(N=gt);const V=Ft.get(S),F=p.state.lights,ot=p.state.shadowsArray,pt=F.state.version,_t=it.getParameters(S,F.state,ot,N,B),xt=it.getProgramCacheKey(_t);let Ct=V.programs;V.environment=S.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(S.isMeshStandardMaterial?T:ie).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ct===void 0&&(S.addEventListener("dispose",at),Ct=new Map,V.programs=Ct);let Pt=Ct.get(xt);if(Pt!==void 0){if(V.currentProgram===Pt&&V.lightsStateVersion===pt)return Wl(S,_t),Pt}else _t.uniforms=it.getUniforms(S),S.onBuild(B,_t,v),S.onBeforeCompile(_t,v),Pt=it.acquireProgram(_t,xt),Ct.set(xt,Pt),V.uniforms=_t.uniforms;const At=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(At.clippingPlanes=ut.uniform),Wl(S,_t),V.needsLights=Ff(S),V.lightsStateVersion=pt,V.needsLights&&(At.ambientLightColor.value=F.state.ambient,At.lightProbe.value=F.state.probe,At.directionalLights.value=F.state.directional,At.directionalLightShadows.value=F.state.directionalShadow,At.spotLights.value=F.state.spot,At.spotLightShadows.value=F.state.spotShadow,At.rectAreaLights.value=F.state.rectArea,At.ltc_1.value=F.state.rectAreaLTC1,At.ltc_2.value=F.state.rectAreaLTC2,At.pointLights.value=F.state.point,At.pointLightShadows.value=F.state.pointShadow,At.hemisphereLights.value=F.state.hemi,At.directionalShadowMap.value=F.state.directionalShadowMap,At.directionalShadowMatrix.value=F.state.directionalShadowMatrix,At.spotShadowMap.value=F.state.spotShadowMap,At.spotLightMatrix.value=F.state.spotLightMatrix,At.spotLightMap.value=F.state.spotLightMap,At.pointShadowMap.value=F.state.pointShadowMap,At.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Pt,V.uniformsList=null,Pt}function Vl(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=$r.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Wl(S,N){const B=Ft.get(S);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Nf(S,N,B,V,F){N.isScene!==!0&&(N=gt),Lt.resetTextureUnits();const ot=N.fog,pt=V.isMeshStandardMaterial?N.environment:null,_t=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ei,xt=(V.isMeshStandardMaterial?T:ie).get(V.envMap||pt),Ct=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pt=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),At=!!B.morphAttributes.position,Zt=!!B.morphAttributes.normal,ce=!!B.morphAttributes.color;let he=Un;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(he=v.toneMapping);const Xe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Qt=Xe!==void 0?Xe.length:0,bt=Ft.get(V),Ue=p.state.lights;if(G===!0&&(K===!0||S!==E)){const Ke=S===E&&V.id===z;ut.setState(V,S,Ke)}let ne=!1;V.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Ue.state.version||bt.outputColorSpace!==_t||F.isBatchedMesh&&bt.batching===!1||!F.isBatchedMesh&&bt.batching===!0||F.isBatchedMesh&&bt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&bt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&bt.instancing===!1||!F.isInstancedMesh&&bt.instancing===!0||F.isSkinnedMesh&&bt.skinning===!1||!F.isSkinnedMesh&&bt.skinning===!0||F.isInstancedMesh&&bt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&bt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&bt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&bt.instancingMorph===!1&&F.morphTexture!==null||bt.envMap!==xt||V.fog===!0&&bt.fog!==ot||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==ut.numPlanes||bt.numIntersection!==ut.numIntersection)||bt.vertexAlphas!==Ct||bt.vertexTangents!==Pt||bt.morphTargets!==At||bt.morphNormals!==Zt||bt.morphColors!==ce||bt.toneMapping!==he||bt.morphTargetsCount!==Qt)&&(ne=!0):(ne=!0,bt.__version=V.version);let xn=bt.currentProgram;ne===!0&&(xn=Js(V,N,F));let Qs=!1,si=!1,Lo=!1;const Me=xn.getUniforms(),Fn=bt.uniforms;if(yt.useProgram(xn.program)&&(Qs=!0,si=!0,Lo=!0),V.id!==z&&(z=V.id,si=!0),Qs||E!==S){Me.setValue(R,"projectionMatrix",S.projectionMatrix),Me.setValue(R,"viewMatrix",S.matrixWorldInverse);const Ke=Me.map.cameraPosition;Ke!==void 0&&Ke.setValue(R,Z.setFromMatrixPosition(S.matrixWorld)),Yt.logarithmicDepthBuffer&&Me.setValue(R,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Me.setValue(R,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,si=!0,Lo=!0)}if(F.isSkinnedMesh){Me.setOptional(R,F,"bindMatrix"),Me.setOptional(R,F,"bindMatrixInverse");const Ke=F.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Me.setValue(R,"boneTexture",Ke.boneTexture,Lt))}F.isBatchedMesh&&(Me.setOptional(R,F,"batchingTexture"),Me.setValue(R,"batchingTexture",F._matricesTexture,Lt),Me.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&Me.setValue(R,"batchingColorTexture",F._colorsTexture,Lt));const Do=B.morphAttributes;if((Do.position!==void 0||Do.normal!==void 0||Do.color!==void 0)&&St.update(F,B,xn),(si||bt.receiveShadow!==F.receiveShadow)&&(bt.receiveShadow=F.receiveShadow,Me.setValue(R,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Fn.envMap.value=xt,Fn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(Fn.envMapIntensity.value=N.environmentIntensity),si&&(Me.setValue(R,"toneMappingExposure",v.toneMappingExposure),bt.needsLights&&kf(Fn,Lo),ot&&V.fog===!0&&st.refreshFogUniforms(Fn,ot),st.refreshMaterialUniforms(Fn,V,U,D,p.state.transmissionRenderTarget[S.id]),$r.upload(R,Vl(bt),Fn,Lt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&($r.upload(R,Vl(bt),Fn,Lt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Me.setValue(R,"center",F.center),Me.setValue(R,"modelViewMatrix",F.modelViewMatrix),Me.setValue(R,"normalMatrix",F.normalMatrix),Me.setValue(R,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ke=V.uniformsGroups;for(let Io=0,Of=Ke.length;Io<Of;Io++){const Xl=Ke[Io];Xt.update(Xl,xn),Xt.bind(Xl,xn)}}return xn}function kf(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Ff(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,N,B){Ft.get(S.texture).__webglTexture=N,Ft.get(S.depthTexture).__webglTexture=B;const V=Ft.get(S);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||Rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,N){const B=Ft.get(S);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,B=0){C=S,k=N,A=B;let V=!0,F=null,ot=!1,pt=!1;if(S){const xt=Ft.get(S);xt.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(R.FRAMEBUFFER,null),V=!1):xt.__webglFramebuffer===void 0?Lt.setupRenderTarget(S):xt.__hasExternalTextures&&Lt.rebindTextures(S,Ft.get(S.texture).__webglTexture,Ft.get(S.depthTexture).__webglTexture);const Ct=S.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(pt=!0);const Pt=Ft.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pt[N])?F=Pt[N][B]:F=Pt[N],ot=!0):S.samples>0&&Lt.useMultisampledRTT(S)===!1?F=Ft.get(S).__webglMultisampledFramebuffer:Array.isArray(Pt)?F=Pt[B]:F=Pt,y.copy(S.viewport),P.copy(S.scissor),Y=S.scissorTest}else y.copy(W).multiplyScalar(U).floor(),P.copy(H).multiplyScalar(U).floor(),Y=ct;if(yt.bindFramebuffer(R.FRAMEBUFFER,F)&&V&&yt.drawBuffers(S,F),yt.viewport(y),yt.scissor(P),yt.setScissorTest(Y),ot){const xt=Ft.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,xt.__webglTexture,B)}else if(pt){const xt=Ft.get(S.texture),Ct=N||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,xt.__webglTexture,B||0,Ct)}z=-1},this.readRenderTargetPixels=function(S,N,B,V,F,ot,pt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Ft.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pt!==void 0&&(_t=_t[pt]),_t){yt.bindFramebuffer(R.FRAMEBUFFER,_t);try{const xt=S.texture,Ct=xt.format,Pt=xt.type;if(!Yt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-V&&B>=0&&B<=S.height-F&&R.readPixels(N,B,V,F,dt.convert(Ct),dt.convert(Pt),ot)}finally{const xt=C!==null?Ft.get(C).__webglFramebuffer:null;yt.bindFramebuffer(R.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(S,N,B,V,F,ot,pt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Ft.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pt!==void 0&&(_t=_t[pt]),_t){yt.bindFramebuffer(R.FRAMEBUFFER,_t);try{const xt=S.texture,Ct=xt.format,Pt=xt.type;if(!Yt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=S.width-V&&B>=0&&B<=S.height-F){const At=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,At),R.bufferData(R.PIXEL_PACK_BUFFER,ot.byteLength,R.STREAM_READ),R.readPixels(N,B,V,F,dt.convert(Ct),dt.convert(Pt),0),R.flush();const Zt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);await Xp(R,Zt,4);try{R.bindBuffer(R.PIXEL_PACK_BUFFER,At),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ot)}finally{R.deleteBuffer(At),R.deleteSync(Zt)}return ot}}finally{const xt=C!==null?Ft.get(C).__webglFramebuffer:null;yt.bindFramebuffer(R.FRAMEBUFFER,xt)}}},this.copyFramebufferToTexture=function(S,N=null,B=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,S=arguments[1]);const V=Math.pow(2,-B),F=Math.floor(S.image.width*V),ot=Math.floor(S.image.height*V),pt=N!==null?N.x:0,_t=N!==null?N.y:0;Lt.setTexture2D(S,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,pt,_t,F,ot),yt.unbindTexture()},this.copyTextureToTexture=function(S,N,B=null,V=null,F=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1],N=arguments[2],F=arguments[3]||0,B=null);let ot,pt,_t,xt,Ct,Pt;B!==null?(ot=B.max.x-B.min.x,pt=B.max.y-B.min.y,_t=B.min.x,xt=B.min.y):(ot=S.image.width,pt=S.image.height,_t=0,xt=0),V!==null?(Ct=V.x,Pt=V.y):(Ct=0,Pt=0);const At=dt.convert(N.format),Zt=dt.convert(N.type);Lt.setTexture2D(N,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const ce=R.getParameter(R.UNPACK_ROW_LENGTH),he=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Xe=R.getParameter(R.UNPACK_SKIP_PIXELS),Qt=R.getParameter(R.UNPACK_SKIP_ROWS),bt=R.getParameter(R.UNPACK_SKIP_IMAGES),Ue=S.isCompressedTexture?S.mipmaps[F]:S.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Ue.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ue.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,_t),R.pixelStorei(R.UNPACK_SKIP_ROWS,xt),S.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,F,Ct,Pt,ot,pt,At,Zt,Ue.data):S.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,F,Ct,Pt,Ue.width,Ue.height,At,Ue.data):R.texSubImage2D(R.TEXTURE_2D,F,Ct,Pt,At,Zt,Ue),R.pixelStorei(R.UNPACK_ROW_LENGTH,ce),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,he),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Xe),R.pixelStorei(R.UNPACK_SKIP_ROWS,Qt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,bt),F===0&&N.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(S,N,B=null,V=null,F=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,V=arguments[1]||null,S=arguments[2],N=arguments[3],F=arguments[4]||0);let ot,pt,_t,xt,Ct,Pt,At,Zt,ce;const he=S.isCompressedTexture?S.mipmaps[F]:S.image;B!==null?(ot=B.max.x-B.min.x,pt=B.max.y-B.min.y,_t=B.max.z-B.min.z,xt=B.min.x,Ct=B.min.y,Pt=B.min.z):(ot=he.width,pt=he.height,_t=he.depth,xt=0,Ct=0,Pt=0),V!==null?(At=V.x,Zt=V.y,ce=V.z):(At=0,Zt=0,ce=0);const Xe=dt.convert(N.format),Qt=dt.convert(N.type);let bt;if(N.isData3DTexture)Lt.setTexture3D(N,0),bt=R.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Lt.setTexture2DArray(N,0),bt=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const Ue=R.getParameter(R.UNPACK_ROW_LENGTH),ne=R.getParameter(R.UNPACK_IMAGE_HEIGHT),xn=R.getParameter(R.UNPACK_SKIP_PIXELS),Qs=R.getParameter(R.UNPACK_SKIP_ROWS),si=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,he.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,he.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,xt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ct),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Pt),S.isDataTexture||S.isData3DTexture?R.texSubImage3D(bt,F,At,Zt,ce,ot,pt,_t,Xe,Qt,he.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(bt,F,At,Zt,ce,ot,pt,_t,Xe,he.data):R.texSubImage3D(bt,F,At,Zt,ce,ot,pt,_t,Xe,Qt,he),R.pixelStorei(R.UNPACK_ROW_LENGTH,Ue),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ne),R.pixelStorei(R.UNPACK_SKIP_PIXELS,xn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Qs),R.pixelStorei(R.UNPACK_SKIP_IMAGES,si),F===0&&N.generateMipmaps&&R.generateMipmap(bt),yt.unbindTexture()},this.initRenderTarget=function(S){Ft.get(S).__webglFramebuffer===void 0&&Lt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Lt.setTextureCube(S,0):S.isData3DTexture?Lt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Lt.setTexture2DArray(S,0):Lt.setTexture2D(S,0),yt.unbindTexture()},this.resetState=function(){k=0,A=0,C=null,yt.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ml?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===Mo?"display-p3":"srgb"}}class cs{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new cs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hs extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ud extends ms{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const eo=new O,no=new O,dh=new ae,Ts=new gl,Sr=new Ks,da=new O,fh=new O;class jv extends be{constructor(t=new Ie,e=new ud){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)eo.fromBufferAttribute(e,s-1),no.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=eo.distanceTo(no);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(s),Sr.radius+=r,t.ray.intersectsSphere(Sr)===!1)return;dh.copy(s).invert(),Ts.copy(t.ray).applyMatrix4(dh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){const m=h.getX(_),x=h.getX(_+1),v=Er(this,t,Ts,l,m,x);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(f),m=Er(this,t,Ts,l,_,p);m&&e.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){const m=Er(this,t,Ts,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=Er(this,t,Ts,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Er(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(eo.fromBufferAttribute(o,s),no.fromBufferAttribute(o,r),e.distanceSqToSegment(eo,no,da,fh)>n)return;da.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(da);if(!(l<t.near||l>t.far))return{distance:l,point:fh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,object:i}}const ph=new O,mh=new O;class Jv extends jv{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ph.fromBufferAttribute(e,s),mh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ph.distanceTo(mh);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ml extends ms{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const gh=new ae,il=new gl,br=new Ks,wr=new O;class dd extends be{constructor(t=new Ie,e=new Ml){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(s),br.radius+=r,t.ray.intersectsSphere(br)===!1)return;gh.copy(s).invert(),il.copy(t.ray).applyMatrix4(gh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const p=c.getX(g);wr.fromBufferAttribute(u,p),_h(wr,p,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)wr.fromBufferAttribute(u,g),_h(wr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _h(i,t,e,n,s,r,o){const a=il.distanceSqToPoint(i);if(a<e){const l=new O;il.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class _s extends De{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Tr=new O,Ar=new O,fa=new O,Cr=new fn;class Qv extends Ie{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Yr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:m}=Cr;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Cr.getNormal(fa),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const v=(x+1)%3,w=u[x],k=u[v],A=Cr[h[x]],C=Cr[h[v]],z=`${w}_${k}`,E=`${k}_${w}`;E in d&&d[E]?(fa.dot(d[E].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(C.x,C.y,C.z)),d[E]=null):z in d||(d[z]={index0:c[x],index1:c[v],normal:fa.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:p}=d[g];Tr.fromBufferAttribute(a,_),Ar.fromBufferAttribute(a,p),f.push(Tr.x,Tr.y,Tr.z),f.push(Ar.x,Ar.y,Ar.z)}this.setAttribute("position",new we(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class yl extends Ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new O,d=new O,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const x=[],v=m/n;let w=0;m===0&&o===0?w=.5/e:m===n&&l===Math.PI&&(w=-.5/e);for(let k=0;k<=e;k++){const A=k/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(A+w,1-v),x.push(c++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){const v=h[m][x+1],w=h[m][x],k=h[m+1][x],A=h[m+1][x+1];(m!==0||o>0)&&f.push(v,w,A),(m!==n-1||l<Math.PI)&&f.push(w,k,A)}this.setIndex(f),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}const vh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class tx{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const ex=new tx;class Sl{constructor(t){this.manager=t!==void 0?t:ex,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Sl.DEFAULT_MATERIAL_NAME="__DEFAULT";class nx extends Sl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=vh.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Bs("img");function l(){h(),vh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class vs extends Sl{constructor(t){super(t)}load(t,e,n,s){const r=new De,o=new nx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class ix extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const pa=new ae,xh=new O,Mh=new O;class sx{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _l,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;xh.setFromMatrixPosition(t.matrixWorld),e.position.copy(xh),Mh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mh),e.updateMatrixWorld(),pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class rx extends sx{constructor(){super(new Hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ox extends ix{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new rx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);const fd=13625079,ax=[.3,.52,.79],lx=[.81,.9,.97],ma=i=>`rgb(${Math.round(i[0]*255)},${Math.round(i[1]*255)},${Math.round(i[2]*255)})`;function cx(i,t,e){const n=[(t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2],s=i.createLinearGradient(0,0,0,256);s.addColorStop(0,ma(t)),s.addColorStop(.55,ma(n)),s.addColorStop(1,ma(e)),i.fillStyle=s,i.fillRect(0,0,2,256)}function hx(){const i=document.createElement("canvas");i.width=2,i.height=256;const t=i.getContext("2d");t&&cx(t,ax,lx);const e=new _s(i);return e.colorSpace=se,e}function ux(i){const t=i|0,e=`
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
    // ⚠️ 不要在这里加全局提亮(曾有 ×1.15 暖偏移把画面洗白)。下面是【纯饱和度】提升：
    //    保持亮度不变、只把颜色往外推 → "光影包的浓郁感"，安全不洗白。
    vec3 outc = scene + bloomColor * uBloom;
    // 暖色白平衡(SEUS 1.12 风)：先暖移再按亮度归一 → 只改色相不提亮(提亮=旧洗白教训)
    vec3 wb = outc * vec3(1.035, 1.0, 0.94);
    wb *= dot(outc, vec3(0.2126, 0.7152, 0.0722)) / max(dot(wb, vec3(0.2126, 0.7152, 0.0722)), 1e-4);
    float lumc = dot(wb, vec3(0.2126, 0.7152, 0.0722));
    outc = mix(vec3(lumc), wb, 1.18);
    outc *= 1.08; // 曝光

  // 高光软肩：>0.85 的分量平滑滚降(不再硬剪成死白,太阳周边天空保留层次)
  vec3 ex = max(outc - vec3(0.85), vec3(0.0));
  outc = min(outc, vec3(0.85)) + ex / (1.0 + ex * 1.8);
  // 输出抖动：打散 8-bit 量化(天空渐变不再有色带)
  float dn = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  outc += vec3((dn - 0.5) * (1.5 / 255.0));
    gl_FragColor = vec4(pow(clamp(outc, 0.0, 1.0), vec3(0.4545)), 1.0);
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

  // 体积光光束 + bloom 辉光叠加到场景色（AO 已乘到 scene 上）；纯饱和度提升(不提亮,见上)；末尾手动 sRGB 编码
  vec3 outc = scene + shaft * uSunColor * uIntensity + bloomColor * uBloom;
  vec3 wb = outc * vec3(1.035, 1.0, 0.94);
  wb *= dot(outc, vec3(0.2126, 0.7152, 0.0722)) / max(dot(wb, vec3(0.2126, 0.7152, 0.0722)), 1e-4);
  float lumc = dot(wb, vec3(0.2126, 0.7152, 0.0722));
  outc = mix(vec3(lumc), wb, 1.18);
  outc *= 1.08; // 曝光

  // 高光软肩：>0.85 的分量平滑滚降(不再硬剪成死白,太阳周边天空保留层次)
  vec3 ex = max(outc - vec3(0.85), vec3(0.0));
  outc = min(outc, vec3(0.85)) + ex / (1.0 + ex * 1.8);
  // 输出抖动：打散 8-bit 量化(天空渐变不再有色带)
  float dn = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  outc += vec3((dn - 0.5) * (1.5 / 255.0));
  gl_FragColor = vec4(pow(clamp(outc, 0.0, 1.0), vec3(0.4545)), 1.0);
}
`.trim();return new rn({uniforms:{tColor:{value:null},tDepth:{value:null},tBloom:{value:null},tAO:{value:null},uSunUV:{value:new Vt(.5,.5)},uSunColor:{value:new Ut(1,.95,.8)},uIntensity:{value:0},uDecay:{value:.96},uWeight:{value:.5},uBloom:{value:0},uAO:{value:0}},vertexShader:e,fragmentShader:n,depthTest:!1,depthWrite:!1})}class yh{constructor(t){b(this,"material");b(this,"quad");b(this,"quadScene",new hs);b(this,"quadCam",new Hs(-1,1,1,-1,0,1));this.material=ux(t),this.quad=new $t(new Oe(2,2),this.material),this.quadScene.add(this.quad)}render(t){t.render(this.quadScene,this.quadCam)}dispose(){this.material.dispose(),this.quad.geometry.dispose()}}const dx=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim(),fx=`
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
`.trim(),px=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim(),mx=`
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
`.trim();class gx{constructor(t,e){b(this,"bloomA");b(this,"bloomB");b(this,"extractMat");b(this,"extractScene",new hs);b(this,"extractCam",new Hs(-1,1,1,-1,0,1));b(this,"blurMat");b(this,"blurScene",new hs);b(this,"blurCam",new Hs(-1,1,1,-1,0,1));this.bloomA=this.buildRT(1,1),this.bloomB=this.buildRT(1,1),this.extractMat=new rn({uniforms:{tScene:{value:null},uThreshold:{value:.74}},vertexShader:dx,fragmentShader:fx,depthTest:!1,depthWrite:!1});const n=new $t(new Oe(2,2),this.extractMat);this.extractScene.add(n),this.blurMat=new rn({uniforms:{tBlur:{value:null},uTexelSize:{value:new Vt(1,1)},uHorizontal:{value:1}},vertexShader:px,fragmentShader:mx,depthTest:!1,depthWrite:!1});const s=new $t(new Oe(2,2),this.blurMat);this.blurScene.add(s),this.setSize(t,e)}get texture(){return this.bloomA.texture}setSize(t,e){this.bloomA.dispose(),this.bloomB.dispose();const n=Math.max(1,Math.round(t)),s=Math.max(1,Math.round(e));this.bloomA=this.buildRT(n,s),this.bloomB=this.buildRT(n,s),this.blurMat.uniforms.uTexelSize.value.set(1/n,1/s)}render(t,e){this.extractMat.uniforms.tScene.value=e,t.setRenderTarget(this.bloomA),t.clear(),t.render(this.extractScene,this.extractCam);for(let n=0;n<2;n++)this.blurMat.uniforms.tBlur.value=this.bloomA.texture,this.blurMat.uniforms.uHorizontal.value=1,t.setRenderTarget(this.bloomB),t.clear(),t.render(this.blurScene,this.blurCam),this.blurMat.uniforms.tBlur.value=this.bloomB.texture,this.blurMat.uniforms.uHorizontal.value=0,t.setRenderTarget(this.bloomA),t.clear(),t.render(this.blurScene,this.blurCam);t.setRenderTarget(null)}dispose(){this.bloomA.dispose(),this.bloomB.dispose(),this.extractMat.dispose(),this.blurMat.dispose()}buildRT(t,e){return new Nn(t,e,{type:fs,depthBuffer:!1})}}function pd(i){const t=i.visualViewport,e=t&&t.width>0?t.width:i.innerWidth,n=t&&t.height>0?t.height:i.innerHeight;return{width:Math.max(1,Math.ceil(e)),height:Math.max(1,Math.ceil(n))}}class _x{constructor(t){b(this,"scene",new hs);b(this,"camera");b(this,"gl");b(this,"viewportW",1);b(this,"viewportH",1);b(this,"resizeQueued",!1);b(this,"onViewportChange",()=>{this.resizeQueued||(this.resizeQueued=!0,requestAnimationFrame(()=>{this.resizeQueued=!1,this.resize()}))});b(this,"skyDome");b(this,"skyDomeColors");b(this,"lastSky","");b(this,"rt",null);b(this,"godStd",new yh(24));b(this,"godHigh",new yh(48));b(this,"god",null);b(this,"bloom",null);b(this,"ssao",null);var r,o;this.gl=new hd({canvas:t,antialias:!0}),this.gl.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.gl.toneMapping=Un,this.gl.shadowMap.enabled=!0,this.gl.shadowMap.type=Nu,this.gl.shadowMap.autoUpdate=!1;const e=new yl(750,32,24),n=e.getAttribute("position").count;this.skyDomeColors=new le(new Float32Array(n*3),3),e.setAttribute("color",this.skyDomeColors);const s=new ue({vertexColors:!0,side:Le,depthWrite:!1,fog:!1});this.skyDome=new $t(e,s),this.skyDome.frustumCulled=!1,this.skyDome.renderOrder=-1e3,this.scene.add(this.skyDome),this.setSkyColors([.3,.52,.79],[.81,.9,.97]),this.scene.fog=new cs(fd,30,110),this.camera=new Ve(70,1,.1,1e3),this.resize(),window.addEventListener("resize",this.onViewportChange),window.addEventListener("orientationchange",this.onViewportChange),(r=window.visualViewport)==null||r.addEventListener("resize",this.onViewportChange),(o=window.visualViewport)==null||o.addEventListener("scroll",this.onViewportChange)}setSkyColors(t,e,n=0,s=0){const r=`${t.join()}|${e.join()}|${Math.round(n*50)}|${Math.round(s*25)}`;if(r===this.lastSky)return;this.lastSky=r;const o=new Ut().setRGB(t[0],t[1],t[2],se),a=new Ut().setRGB(e[0],e[1],e[2],se),l=this.skyDome.geometry.getAttribute("position"),c=this.skyDomeColors.array;for(let h=0;h<l.count;h++){const u=l.getY(h)/750,d=u<=0?0:Math.min(1,u/.45),f=d*d*(3-2*d);let g=a.r+(o.r-a.r)*f,_=a.g+(o.g-a.g)*f,p=a.b+(o.b-a.b)*f;if(s>.01){const m=Math.atan2(l.getZ(h),l.getX(h)),x=Math.pow(Math.max(0,Math.cos(m-n)*.5+.5),2.5),v=s*(1-f),w=.88+(1.24-.88)*x,k=.9+(.97-.9)*x,A=1.05+(.75-1.05)*x;g*=1+(w-1)*v,_*=1+(k-1)*v,p*=1+(A-1)*v}c[h*3]=g,c[h*3+1]=_,c[h*3+2]=p}this.skyDomeColors.needsUpdate=!0}resize(){const{width:t,height:e}=pd(window);if(this.viewportW=t,this.viewportH=e,this.gl.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.rt!==null&&(this.rt.dispose(),this.rt=this.buildRT(t,e)),this.bloom!==null){const n=this.gl.getPixelRatio();this.bloom.setSize(Math.max(1,Math.round(t*n/4)),Math.max(1,Math.round(e*n/4)))}if(this.ssao!==null){const n=this.gl.getPixelRatio();this.ssao.setSize(Math.max(1,Math.round(t*n/2)),Math.max(1,Math.round(e*n/2)))}}markShadowDirty(){this.gl.shadowMap.needsUpdate=!0}setGodRays(t){if(t===null||t.quality==="off"){this.rt!==null&&(this.rt.dispose(),this.rt=null),this.bloom!==null&&(this.bloom.dispose(),this.bloom=null),this.ssao!==null&&(this.ssao.dispose(),this.ssao=null),this.god=null;return}if(this.rt===null&&(this.rt=this.buildRT(this.viewportW,this.viewportH)),this.bloom===null){const e=this.gl.getPixelRatio(),n=this.viewportW,s=this.viewportH;this.bloom=new gx(Math.max(1,Math.round(n*e/4)),Math.max(1,Math.round(s*e/4)))}this.god=t}render(){if(this.skyDome.position.copy(this.camera.position),this.god===null||this.rt===null||this.bloom===null){this.gl.render(this.scene,this.camera);return}this.gl.setRenderTarget(this.rt),this.gl.clear(),this.gl.render(this.scene,this.camera),this.bloom.render(this.gl,this.rt.texture),this.ssao!==null&&this.ssao.render(this.gl,this.rt.depthTexture,this.camera);const t=this.god.quality==="high"?this.godHigh:this.godStd,e=t.material.uniforms;e.tColor.value=this.rt.texture,e.tDepth.value=this.rt.depthTexture,e.tBloom.value=this.bloom.texture,e.uSunUV.value.copy(this.god.sunUV),e.uIntensity.value=this.god.intensity,e.uSunColor.value.copy(this.god.sunColor),e.uBloom.value=this.god.quality==="high"?.68:.5,this.ssao!==null?(e.tAO.value=this.ssao.texture,e.uAO.value=this.god.quality==="high"?.55:.4):(e.tAO.value=null,e.uAO.value=0),t.render(this.gl)}renderOverlay(t,e){this.gl.autoClear=!1,this.gl.clearDepth(),this.gl.render(t,e),this.gl.autoClear=!0}buildRT(t,e){const n=this.gl.getPixelRatio(),s=Math.max(1,Math.round(t*n)),r=Math.max(1,Math.round(e*n)),o=new xl(s,r);return o.type=yi,new Nn(s,r,{type:fs,depthTexture:o,depthBuffer:!0,samples:4})}}const wt=16,me=192;class Zs{constructor(){b(this,"blocks",new Uint16Array(wt*me*wt));b(this,"fluid",new Uint8Array(wt*me*wt));b(this,"dirty",!0)}idx(t,e,n){return t+n*wt+e*wt*wt}inBounds(t,e,n){return t>=0&&t<wt&&e>=0&&e<me&&n>=0&&n<wt}get(t,e,n){return this.inBounds(t,e,n)?this.blocks[this.idx(t,e,n)]:0}set(t,e,n,s){this.inBounds(t,e,n)&&(this.blocks[this.idx(t,e,n)]=s)}getFluid(t,e,n){return this.inBounds(t,e,n)?this.fluid[this.idx(t,e,n)]:0}setFluid(t,e,n,s){this.inBounds(t,e,n)&&(this.fluid[this.idx(t,e,n)]=s)}static fromBuffers(t,e){const n=new Zs;return n.blocks.set(new Uint16Array(t)),n.fluid.set(new Uint8Array(e)),n}}const md=16,gd=32,vx=i=>i&15,xx=i=>(i&md)!==0,Mx=i=>(i&gd)!==0,_d=(i,t,e)=>i&15|(t?md:0)|(e?gd:0),Jt=i=>i>>4,Qe=i=>i&15;function en(i,t,e){let n=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,1274126177);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}const Ns=i=>i*i*(3-2*i);function yx(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=en(n,s,e),l=en(n+1,s,e),c=en(n,s+1,e),h=en(n+1,s+1,e),u=Ns(r),d=Ns(o),f=a+(l-a)*u,g=c+(h-c)*u;return f+(g-f)*d}function Ki(i,t,e,n=4){let s=1,r=1,o=0,a=0;for(let l=0;l<n;l++)o+=s*yx(i*r,t*r,e+l*101),a+=s,s*=.5,r*=2;return o/a}function Sx(i,t,e,n){let s=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,2147483647)^Math.imul(n|0,1274126177);return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296}function Te(i,t,e,n){const s=Math.floor(i),r=Math.floor(t),o=Math.floor(e),a=Ns(i-s),l=Ns(t-r),c=Ns(e-o),h=(p,m,x)=>p+(m-p)*x,u=(p,m,x)=>Sx(s+p,r+m,o+x,n),d=h(u(0,0,0),u(1,0,0),a),f=h(u(0,1,0),u(1,1,0),a),g=h(u(0,0,1),u(1,0,1),a),_=h(u(0,1,1),u(1,1,1),a);return h(h(d,f,l),h(g,_,l),c)}var Rn=(i=>(i[i.PosX=0]="PosX",i[i.NegX=1]="NegX",i[i.PosY=2]="PosY",i[i.NegY=3]="NegY",i[i.PosZ=4]="PosZ",i[i.NegZ=5]="NegZ",i))(Rn||{});const kt={stone:0,dirt:1,grass_top:2,grass_side:3,cobblestone:4,sand:5,oak_log_top:6,oak_log_side:7,oak_planks:8,coal_ore:9,water:10,oak_leaves:11,crafting_table_top:12,crafting_table_side:13,iron_ore:14,furnace_front:15,gravel:16,grass_plant:17,obsidian:18,netherrack:19,soul_sand:20,glowstone:21,nether_quartz_ore:22,lava:23,bedrock:24,nether_portal:25,sandstone:26,cactus:27,ice:28,snow:29,spruce_log:30,spruce_leaves:31,coal_block:32,iron_block:33,quartz_block:34},jt=i=>[i,i,i,i,i,i],As=(i,t,e)=>[i,i,t,e,i,i],Ex=258,$e=[{id:0,name:"air",solid:!1,transparent:!0,faces:jt(0),hardness:0,drop:null,needsTool:!1,tool:null},{id:1,name:"stone",solid:!0,transparent:!1,faces:jt(kt.stone),hardness:1.5,drop:4,needsTool:!0,tool:"pickaxe"},{id:2,name:"dirt",solid:!0,transparent:!1,faces:jt(kt.dirt),hardness:.5,drop:2,needsTool:!1,tool:"shovel"},{id:3,name:"grass",solid:!0,transparent:!1,faces:As(kt.grass_side,kt.grass_top,kt.dirt),hardness:.6,drop:2,needsTool:!1,tool:"shovel"},{id:4,name:"cobblestone",solid:!0,transparent:!1,faces:jt(kt.cobblestone),hardness:2,drop:4,needsTool:!0,tool:"pickaxe"},{id:5,name:"sand",solid:!0,transparent:!1,faces:jt(kt.sand),hardness:.5,drop:5,needsTool:!1,tool:"shovel"},{id:6,name:"oak_log",solid:!0,transparent:!1,faces:As(kt.oak_log_side,kt.oak_log_top,kt.oak_log_top),hardness:2,drop:6,needsTool:!1,tool:"axe"},{id:7,name:"oak_planks",solid:!0,transparent:!1,faces:jt(kt.oak_planks),hardness:2,drop:7,needsTool:!1,tool:"axe"},{id:8,name:"coal_ore",solid:!0,transparent:!1,faces:jt(kt.coal_ore),hardness:3,drop:Ex,needsTool:!0,tool:"pickaxe"},{id:9,name:"water",solid:!1,transparent:!0,faces:jt(kt.water),hardness:0,drop:null,needsTool:!1,tool:null},{id:10,name:"oak_leaves",solid:!0,transparent:!0,faces:jt(kt.oak_leaves),hardness:.2,drop:null,needsTool:!1,tool:null},{id:11,name:"crafting_table",solid:!0,transparent:!1,faces:As(kt.crafting_table_side,kt.crafting_table_top,kt.oak_planks),hardness:2.5,drop:11,needsTool:!1,tool:"axe"},{id:12,name:"iron_ore",solid:!0,transparent:!1,faces:jt(kt.iron_ore),hardness:3,drop:12,needsTool:!0,tool:"pickaxe",minTier:2},{id:13,name:"furnace",solid:!0,transparent:!1,faces:As(kt.furnace_front,kt.cobblestone,kt.cobblestone),hardness:3.5,drop:13,needsTool:!0,tool:"pickaxe"},{id:14,name:"torch",solid:!1,transparent:!0,faces:jt(0),hardness:0,drop:14,needsTool:!1,tool:null,light:14},{id:15,name:"gravel",solid:!0,transparent:!1,faces:jt(kt.gravel),hardness:.6,drop:15,needsTool:!1,tool:"shovel"},{id:16,name:"grass_plant",solid:!1,transparent:!0,faces:jt(kt.grass_plant),hardness:0,drop:null,needsTool:!1,tool:null},{id:17,name:"tall_grass",solid:!1,transparent:!0,faces:jt(kt.grass_plant),hardness:0,drop:null,needsTool:!1,tool:null},{id:18,name:"obsidian",solid:!0,transparent:!1,faces:jt(kt.obsidian),hardness:50,drop:18,needsTool:!0,tool:"pickaxe",minTier:3},{id:19,name:"netherrack",solid:!0,transparent:!1,faces:jt(kt.netherrack),hardness:.4,drop:19,needsTool:!0,tool:"pickaxe"},{id:20,name:"soul_sand",solid:!0,transparent:!1,faces:jt(kt.soul_sand),hardness:.5,drop:20,needsTool:!1,tool:"shovel"},{id:21,name:"glowstone",solid:!0,transparent:!1,faces:jt(kt.glowstone),hardness:.3,drop:21,needsTool:!1,tool:null,light:15},{id:22,name:"nether_quartz_ore",solid:!0,transparent:!1,faces:jt(kt.nether_quartz_ore),hardness:3,drop:295,needsTool:!0,tool:"pickaxe",minTier:1},{id:23,name:"lava",solid:!1,transparent:!0,faces:jt(kt.lava),hardness:100,drop:null,needsTool:!1,tool:null,light:15},{id:24,name:"bedrock",solid:!0,transparent:!1,faces:jt(kt.bedrock),hardness:-1,drop:null,needsTool:!1,tool:null},{id:25,name:"nether_portal",solid:!1,transparent:!0,faces:jt(kt.nether_portal),hardness:-1,drop:null,needsTool:!1,tool:null,light:11},{id:26,name:"sandstone",solid:!0,transparent:!1,faces:jt(kt.sandstone),hardness:.8,drop:26,needsTool:!0,tool:"pickaxe"},{id:27,name:"cactus",solid:!0,transparent:!1,faces:jt(kt.cactus),hardness:.4,drop:27,needsTool:!1,tool:null},{id:28,name:"ice",solid:!0,transparent:!1,faces:jt(kt.ice),hardness:.5,drop:null,needsTool:!1,tool:"pickaxe"},{id:29,name:"snow_layer",solid:!1,transparent:!0,faces:jt(kt.snow),hardness:0,drop:null,needsTool:!1,tool:"shovel"},{id:30,name:"spruce_log",solid:!0,transparent:!1,faces:As(kt.spruce_log,kt.oak_log_top,kt.oak_log_top),hardness:2,drop:30,needsTool:!1,tool:"axe"},{id:31,name:"spruce_leaves",solid:!0,transparent:!0,faces:jt(kt.spruce_leaves),hardness:.2,drop:null,needsTool:!1,tool:null},{id:32,name:"coal_block",solid:!0,transparent:!1,faces:jt(kt.coal_block),hardness:5,drop:32,needsTool:!0,tool:"pickaxe"},{id:33,name:"iron_block",solid:!0,transparent:!1,faces:jt(kt.iron_block),hardness:5,drop:33,needsTool:!0,tool:"pickaxe",minTier:2},{id:34,name:"quartz_block",solid:!0,transparent:!1,faces:jt(kt.quartz_block),hardness:.8,drop:34,needsTool:!0,tool:"pickaxe"}],vd=3,Ln=9,Gs=10,So=6,bx=7,wx=4,xd=11,Tx=12,Sh=13,Qi=14,Eh=15,Ax=16,Md=17,Pn=18,Cx=19,Rx=5,yd=20,Px=21,Lx=22,io=23,El=24,Eo=25,Dx=26,qi=27,bo=28,bl=29,wo=30,To=31,Ix=32,sl=i=>i===io,Ux=i=>i===Eo,ge=i=>{var t;return((t=$e[i])==null?void 0:t.solid)??!1},dn=i=>i===Ln,bh=i=>i===Gs||i===To,Mi=i=>i===Ax||i===Md||i===bl,Nx=i=>ge(i)||Mi(i),wh=i=>i===0||i===Ln||Mi(i)||i===Eo,Gi=i=>{const t=$e[i];return t?t.solid&&!t.transparent:!1},ga=(i,t)=>$e[i].faces[t],Sd=i=>{var t;return((t=$e[i])==null?void 0:t.hardness)??0},kx=i=>{var t;return((t=$e[i])==null?void 0:t.needsTool)??!1},Fx=i=>{var t;return((t=$e[i])==null?void 0:t.light)??0};function Ed(i,t){var n;const e=((n=$e[i])==null?void 0:n.tool)??null;return t!==null&&e!==null&&t.kind===e}const bd=(i,t=null)=>{var e;return kx(i)?Ed(i,t)?t.tier>=(((e=$e[i])==null?void 0:e.minTier)??1):!1:!0},Ox=(i,t=null)=>{if(Mi(i))return 0;const e=Math.max(0,Sd(i));if(e===0)return 0;const n=Ed(i,t)?t.speed:1,s=bd(i,t)?30:100;return Math.ceil(s*e/n)*50},zx=(i,t=null)=>{var e;return bd(i,t)?((e=$e[i])==null?void 0:e.drop)??null:null},Bx=i=>i===qi,Hx=i=>i===bo?.98:.6,Th=320,Gx=.38,Vx=.66;function wd(i,t,e){return Ki(i/130,t/130,e+4321,2)}function Wx(i,t,e){return Ki(i/Th,t/Th,e+9001,3)}function Yi(i,t,e){const n=Wx(i,t,e);return n<Gx?"snow":n>Vx?"desert":wd(i,t,e)>.62?"forest":"plains"}const Td=1,Xx=2,_a=3,Cs=5,qx=8,Yx=12,$x=15,Kx=16,Zx=17,Se=116,jx=_d(8,!0,!1);function Jx(i,t,e){const n=Pe(i,t,e);return Math.abs(Pe(i+5,t,e)-n)<=3&&Math.abs(Pe(i-5,t,e)-n)<=3&&Math.abs(Pe(i,t+5,e)-n)<=3&&Math.abs(Pe(i,t-5,e)-n)<=3}function Qx(i,t,e,n,s){const r=n-t;if(r<12)return!1;const o=i+(Te(i/36,t/30,e/36,s+991)-.5)*26,a=t+(Te(t/30,i/34,e/34,s+993)-.5)*22,l=e+(Te(e/36,t/30,i/36,s+992)-.5)*26;return r<50?Math.abs(Te(o/14,a/14,l/14,s+222)-.5)<.03:r<100?Math.abs(Te(o/18,a/18,l/18,s+333)-.5)<.05?!0:Te(o/22,a/22,l/22,s+700)<.07:Te(o/26,a/26,l/26,s+700)<.07?!0:Math.abs(Te(o/18,a/18,l/18,s+333)-.5)<.04}function va(i,t,e,n,s){return Te(i/4.5,t/4.5,e/4.5,s+101)>.84?qx:Te(i/4,t/4,e/4,s+202)>.83&&t<=n*.6?Yx:Te(i/5,t/5,e/5,s+303)>.82?$x:Td}function Pe(i,t,e){const n=Ki(i/260,t/260,e,4),s=Ki(i/72,t/72,e+17,3);let r;n<.46?r=90+n*56:n<.56?r=116+(n-.46)*80:r=124+(n-.56)*180;let o=r+(s-.5)*8;{const a=Ki(i/140,t/140,e+777,3),l=Math.abs(a-.5),c=.028+s*.022+Math.max(0,n-.54)*.4;if(l<c){let h=1-l/c;h=h*h*(3-2*h);const u=2+Math.floor(Ki(i/60,t/60,e+555,2)*3),d=Se-u;o=o*(1-h)+d*h}}return Math.floor(o)}const Wn=2,tM=.08;function eM(i,t,e){const n=wd(i,t,e);return n<.45?.003:n>.62?.08:.003+(n-.45)/.17*.077}function nM(i,t,e){return 4+Math.floor(en(i,t,e*31+5)*3)}function Ah(i,t,e,n,s,r,o,a=So,l=Gs,c=!1){const h=r+nM(n,s,o),u=(f,g,_,p,m)=>{if(g<0||g>=me||Jt(f)!==t||Jt(_)!==e)return;const x=Qe(f),v=Qe(_);m&&i.get(x,g,v)!==0||i.set(x,g,v,p)};if(c){const f=h+2,g=r+3;for(let _=g;_<=f;_++){const p=f-_,m=p===0?0:Math.min(2,Math.floor((p+1)/2));for(let x=-m;x<=m;x++)for(let v=-m;v<=m;v++)Math.abs(x)+Math.abs(v)>m||u(n+x,_,s+v,l,!0)}}else{for(const g of[-2,-1])for(let _=-2;_<=2;_++)for(let p=-2;p<=2;p++)Math.abs(_)===2&&Math.abs(p)===2||u(n+_,h+g,s+p,l,!0);for(let g=-1;g<=1;g++)for(let _=-1;_<=1;_++)u(n+g,h,s+_,l,!0);const f=[[0,0],[1,0],[-1,0],[0,1],[0,-1]];for(const[g,_]of f)u(n+g,h+1,s+_,l,!0)}const d=c?h+1:h;for(let f=r+1;f<=d;f++)u(n,f,s,a,!1)}const Rr=127,iM=31;function sM(i,t,e){const n=new Zs,s=e+7e4;for(let r=0;r<wt;r++)for(let o=0;o<wt;o++){const a=i*wt+o,l=t*wt+r;for(let c=0;c<=Rr;c++){if(c<=1||c>=Rr-1){n.set(o,c,r,El);continue}if(Te(a/18,c/16,l/18,s+1)>.55||Te(a/9,c/10,l/9,s+2)>.78){c<=iM&&n.set(o,c,r,io);continue}let u=Cx;Te(a/4,c/4,l/4,s+3)>.86?u=Lx:Te(a/10,c/10,l/10,s+4)>.9&&(u=yd),n.set(o,c,r,u)}if(en(a,l,s+5)<.012){for(let c=Rr-2;c>Rr-7;c--)if(n.get(o,c,r)===0){n.set(o,c,r,Px);break}}}return n.dirty=!0,n}function Ad(i,t,e,n="overworld"){if(n==="nether")return sM(i,t,e);const s=new Zs;for(let a=0;a<wt;a++)for(let l=0;l<wt;l++){const c=i*wt+l,h=t*wt+a,u=Pe(c,h,e),d=Math.min(u,Pe(c+4,h,e),Pe(c-4,h,e),Pe(c,h+4,e),Pe(c,h-4,e)),f=Jx(c,h,e),g=u<=Se+1,_=Yi(c,h,e);for(let p=0;p<=u;p++){const m=f&&Te((c+p*.8)/8,p/120,(h+p*.6)/8,e+888)>.9;if(p>1&&(m||p<u&&Qx(c,p,h,d,e)))continue;let x=Td;p===0||p<=4&&Te(c*.7,p*3.3,h*.7,e+4242)<(5-p)/5?x=El:g?p===u||p>=u-3?x=Cs:x=va(c,p,h,u,e):_==="desert"?p===u||p>=u-3?x=Cs:p>=u-7?x=Dx:x=va(c,p,h,u,e):p===u?x=_a:p>=u-3?x=Xx:x=va(c,p,h,u,e),s.set(l,p,a,x)}for(let p=u+1;p<=Se;p++)s.set(l,p,a,Ln),s.setFluid(l,p,a,jx);if(u<Se&&_==="snow"&&s.set(l,Se,a,bo),!g&&u>Se+1&&_==="snow"){const p=s.get(l,u,a),m=s.get(l,u+1,a);p===_a&&m===0&&en(c+1,h+3,e*19+41)<.85&&s.set(l,u+1,a,bl)}}const r=i*wt,o=t*wt;for(let a=r-Wn;a<r+wt+Wn;a++)for(let l=o-Wn;l<o+wt+Wn;l++){const c=en(a,l,e*13+7);if(c>=tM)continue;const h=Pe(a,l,e);if(h<=Se+1)continue;const u=Yi(a,l,e);u!=="plains"&&u!=="forest"||c<eM(a,l,e)&&Ah(s,i,t,a,l,h,e)}for(let a=r-Wn;a<r+wt+Wn;a++)for(let l=o-Wn;l<o+wt+Wn;l++){if(Yi(a,l,e)!=="snow")continue;const c=Pe(a,l,e);c<=Se+1||en(a,l,e*17+3)>=.03||Ah(s,i,t,a,l,c,e,wo,To,!0)}for(let a=0;a<wt;a++)for(let l=0;l<wt;l++){const c=r+l,h=o+a;if(Yi(c,h,e)!=="desert")continue;const u=Pe(c,h,e);if(u<=Se+1||s.get(l,u,a)!==Cs||s.get(l,u+1,a)!==0||en(c,h,e*11+53)>=.02)continue;const f=u+1;if(l>0&&(s.get(l-1,f,a)===qi||ge(s.get(l-1,f,a)))||l<wt-1&&(s.get(l+1,f,a)===qi||ge(s.get(l+1,f,a)))||a>0&&(s.get(l,f,a-1)===qi||ge(s.get(l,f,a-1)))||a<wt-1&&(s.get(l,f,a+1)===qi||ge(s.get(l,f,a+1))))continue;const g=1+Math.floor(en(c*3,h*3,e*7+13)*3);for(let _=1;_<=g;_++){const p=u+_;if(p>=me)break;s.set(l,p,a,qi)}}for(let a=0;a<wt;a++)for(let l=0;l<wt;l++){const c=r+l,h=o+a,u=Yi(c,h,e);if(u!=="plains"&&u!=="forest")continue;const d=Pe(c,h,e);if(d<=Se+1||s.get(l,d,a)!==_a||s.get(l,d+1,a)!==0)continue;const f=en(c,h,e*7+31);f>.4||s.set(l,d+1,a,f<.08?Zx:Kx)}return s.dirty=!0,s}function rM(i){return new Worker("/mineworld/assets/chunkGen.worker-BT2bUZpP.js",{name:i==null?void 0:i.name})}const Ch=()=>typeof performance<"u"?performance.now():Date.now();class Cd{constructor(t,e="overworld"){b(this,"chunks",new Map);b(this,"pending",new Set);b(this,"pendingSince",new Map);b(this,"genFails",new Map);b(this,"workers",[]);b(this,"rr",0);b(this,"editHook",null);if(this.seed=t,this.dimension=e,typeof Worker<"u"){const n=typeof navigator<"u"&&navigator.hardwareConcurrency||4,s=Math.max(1,Math.min(4,n));for(let r=0;r<s;r++){const o=new rM;o.onmessage=a=>{var _;const{cx:l,cz:c,blocks:h,fluid:u,error:d}=a.data,f=this.key(l,c);if(this.pending.delete(f),this.pendingSince.delete(f),d){const p=(this.genFails.get(f)??0)+1;this.genFails.set(f,p),console.warn(`[chunkgen] 区块(${l},${c}) 生成失败 #${p}: ${d.split(`
`)[0]}`);return}if(this.genFails.delete(f),this.chunks.has(f)||!h||!u)return;const g=Zs.fromBuffers(h,u);(_=this.editHook)==null||_.call(this,l,c,g),g.dirty=!0,this.chunks.set(f,g)},o.onerror=a=>{console.error("[chunkgen worker] 致命错误(整个 worker 挂了，会拖慢加载):",a.message)},this.workers.push(o)}}}key(t,e){return`${t},${e}`}dispose(){for(const t of this.workers)t.terminate();this.workers.length=0,this.chunks.clear(),this.pending.clear(),this.pendingSince.clear(),this.genFails.clear(),this.editHook=null}hasChunk(t,e){return this.chunks.has(this.key(t,e))}request(t,e){const n=this.key(t,e);if(!(this.chunks.has(n)||this.pending.has(n))&&!((this.genFails.get(n)??0)>=3)){if(this.workers.length===0){this.getChunk(t,e);return}this.pending.add(n),this.pendingSince.set(n,Ch()),this.workers[this.rr].postMessage({cx:t,cz:e,seed:this.seed,dimension:this.dimension}),this.rr=(this.rr+1)%this.workers.length}}retryStuckGen(t=8e3){const e=Ch();for(const[n,s]of this.pendingSince)e-s>t&&(this.pending.delete(n),this.pendingSince.delete(n),console.warn(`[chunkgen] 区块 ${n} 生成 ${Math.round((e-s)/1e3)}s 未回(worker 丢消息?) → 重试`))}peek(t,e){return this.chunks.get(this.key(t,e))}evictBeyond(t,e,n){for(const s of[...this.chunks.keys()]){const r=s.indexOf(","),o=+s.slice(0,r),a=+s.slice(r+1);(Math.abs(o-t)>n||Math.abs(a-e)>n)&&this.chunks.delete(s)}}getChunk(t,e){var r;const n=this.key(t,e);let s=this.chunks.get(n);return s||(s=Ad(t,e,this.seed,this.dimension),(r=this.editHook)==null||r.call(this,t,e,s),this.chunks.set(n,s),this.pending.delete(n)),s}getBlock(t,e,n){return e<0||e>=me?0:this.getChunk(Jt(t),Jt(n)).get(Qe(t),e,Qe(n))}setBlock(t,e,n,s){if(e<0||e>=me)return;const r=Jt(t),o=Jt(n),a=Qe(t),l=Qe(n),c=this.getChunk(r,o);c.set(a,e,l,s),s!==Ln&&c.setFluid(a,e,l,0),c.dirty=!0,this.markNeighborsDirty(r,o,a,l,8)}fluidByte(t,e,n){return e<0||e>=me?0:this.getChunk(Jt(t),Jt(n)).getFluid(Qe(t),e,Qe(n))}waterAmount(t,e,n){return this.getBlock(t,e,n)!==Ln?0:vx(this.fluidByte(t,e,n))}isWaterSource(t,e,n){return this.getBlock(t,e,n)===Ln&&xx(this.fluidByte(t,e,n))}isWaterFalling(t,e,n){return this.getBlock(t,e,n)===Ln&&Mx(this.fluidByte(t,e,n))}setWater(t,e,n,s,r,o){if(e<0||e>=me)return;const a=Jt(t),l=Jt(n),c=Qe(t),h=Qe(n),u=this.getChunk(a,l);s<=0?(u.get(c,e,h)===Ln&&u.set(c,e,h,0),u.setFluid(c,e,h,0)):(u.set(c,e,h,Ln),u.setFluid(c,e,h,_d(s,r,o))),u.dirty=!0,this.markNeighborsDirty(a,l,c,h)}markNeighborsDirty(t,e,n,s,r=1){const o=n<r,a=n>15-r,l=s<r,c=s>15-r;o&&this.markDirty(t-1,e),a&&this.markDirty(t+1,e),l&&this.markDirty(t,e-1),c&&this.markDirty(t,e+1),o&&l&&this.markDirty(t-1,e-1),o&&c&&this.markDirty(t-1,e+1),a&&l&&this.markDirty(t+1,e-1),a&&c&&this.markDirty(t+1,e+1)}markDirty(t,e){const n=this.chunks.get(this.key(t,e));n&&(n.dirty=!0)}}function Rh(i,t,e,n){let s=Math.floor(i.x),r=Math.floor(i.y),o=Math.floor(i.z);const a=Math.sign(t.x),l=Math.sign(t.y),c=Math.sign(t.z),h=t.x!==0?Math.abs(1/t.x):1/0,u=t.y!==0?Math.abs(1/t.y):1/0,d=t.z!==0?Math.abs(1/t.z):1/0,f=(x,v)=>v>0?Math.floor(x)+1-x:v<0?x-Math.floor(x):1/0;let g=t.x!==0?f(i.x,a)*h:1/0,_=t.y!==0?f(i.y,l)*u:1/0,p=t.z!==0?f(i.z,c)*d:1/0;if(n(s,r,o))return{x:s,y:r,z:o,nx:0,ny:0,nz:0};let m=0;for(let x=0;x<256;x++){let v=0,w=0,k=0;if(g<_&&g<p?(s+=a,m=g,g+=h,v=-a):_<p?(r+=l,m=_,_+=u,w=-l):(o+=c,m=p,p+=d,k=-c),m>e)break;if(n(s,r,o))return{x:s,y:r,z:o,nx:v,ny:w,nz:k}}return null}const oM=new Set([So,wo]),Ph=new Set([Gs,To]),xa=4,aM=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Pr=(i,t,e)=>`${i},${t},${e}`;function lM(i,t,e,n,s=xa){const r=s+xa,o=new Map,a=[];for(let c=t-r;c<=t+r;c++)for(let h=e-r;h<=e+r;h++)for(let u=n-r;u<=n+r;u++)oM.has(i(c,h,u))&&(o.set(Pr(c,h,u),0),a.push({x:c,y:h,z:u}));for(let c=0;c<a.length;c++){const h=a[c],u=o.get(Pr(h.x,h.y,h.z))??0;if(!(u>=xa))for(const[d,f,g]of aM){const _=h.x+d,p=h.y+f,m=h.z+g;if(!Ph.has(i(_,p,m)))continue;const x=Pr(_,p,m);o.has(x)||(o.set(x,u+1),a.push({x:_,y:p,z:m}))}}const l=[];for(let c=t-s;c<=t+s;c++)for(let h=e-s;h<=e+s;h++)for(let u=n-s;u<=n+s;u++)Ph.has(i(c,h,u))&&!o.has(Pr(c,h,u))&&l.push({x:c,y:h,z:u});return l}const cM="msr0vlal";function xs(i){return`/mineworld/${i}?v=${cM}`}const Lh=new Map;function rl(i="classic"){const t=Lh.get(i);if(t)return t;const e=i==="classic"?"textures/atlas_classic.png":"textures/atlas.png",n=new vs().load(xs(e));return n.magFilter=re,n.minFilter=pl,n.generateMipmaps=!0,n.colorSpace=se,Lh.set(i,n),n}function hM(){const i=new vs().load(xs("textures/torch_block.png"));return i.magFilter=re,i.minFilter=re,i.generateMipmaps=!1,i.colorSpace=se,i}function uM(i){const t=new vs,e=[];for(let n=0;n<i;n++){const s=t.load(xs(`textures/blocks/water_${n}.png`));s.magFilter=re,s.minFilter=pl,s.generateMipmaps=!0,s.colorSpace=se,s.wrapS=rs,s.wrapT=rs,e.push(s)}return e}const ks={volume:70,lightingQuality:"standard",texturePack:"classic",renderDistance:6},ol="mineworld.settings",wl=3,dM=["off","standard","high"];function Rd(i){const t=i??{},e=typeof t.volume=="number"&&isFinite(t.volume)?Math.max(0,Math.min(100,Math.round(t.volume))):ks.volume;let n;typeof t.lightingQuality=="string"&&dM.includes(t.lightingQuality)?n=t.lightingQuality:typeof t.shaders=="boolean"?n=t.shaders?"high":"standard":n=ks.lightingQuality;const s=t.texturePack==="cartoon"?"cartoon":"classic",r=typeof t.renderDistance=="number"&&isFinite(t.renderDistance)?Math.max(3,Math.min(12,Math.round(t.renderDistance))):ks.renderDistance;return{volume:e,lightingQuality:n,texturePack:s,renderDistance:r}}function fM(i){const t=Rd(i);return(i??{}).textureStyleVersion===wl?t:{...t,texturePack:"classic"}}function Pd(){try{const i=localStorage.getItem(ol);if(!i)return{...ks};const t=JSON.parse(i),e=fM(t);return localStorage.setItem(ol,JSON.stringify({...e,textureStyleVersion:wl})),e}catch{return{...ks}}}function pM(i){try{localStorage.setItem(ol,JSON.stringify({...Rd(i),textureStyleVersion:wl}))}catch{}}const Ld=15,Dd=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function mM(i,t,e,n){const s=n??(()=>0),r=new Uint8Array(i*t*i),o=(l,c,h)=>l+h*i+c*i*i,a=[];for(let l=0;l<i;l++)for(let c=0;c<i;c++){let h=Ld;for(let u=t-1;u>=0&&!e(c,u,l);u--){h=Math.max(0,h-s(c,u,l));const d=o(c,u,l);r[d]=h,h>0&&a.push(d)}}for(let l=0;l<a.length;l++){const c=a[l],h=r[c];if(h<=1)continue;const u=c/(i*i)|0,d=c-u*i*i,f=d/i|0,g=d-f*i;for(const[_,p,m]of Dd){const x=g+_,v=u+p,w=f+m;if(x<0||x>=i||v<0||v>=t||w<0||w>=i||e(x,v,w))continue;const k=h-1-s(x,v,w);if(k<=0)continue;const A=o(x,v,w);r[A]>=k||(r[A]=k,a.push(A))}}return r}function gM(i,t,e,n,s){const r=s??(()=>0),o=new Uint8Array(i*t*i),a=(c,h,u)=>c+u*i+h*i*i,l=[];for(let c=0;c<t;c++)for(let h=0;h<i;h++)for(let u=0;u<i;u++){const d=e(u,c,h);if(d>0){const f=a(u,c,h);d>o[f]&&(o[f]=Math.min(Ld,d),l.push(f))}}for(let c=0;c<l.length;c++){const h=l[c],u=o[h];if(u<=1)continue;const d=h/(i*i)|0,f=h-d*i*i,g=f/i|0,_=f-g*i;for(const[p,m,x]of Dd){const v=_+p,w=d+m,k=g+x;if(v<0||v>=i||w<0||w>=t||k<0||k>=i||n(v,w,k))continue;const A=u-1-r(v,w,k);if(A<=0)continue;const C=a(v,w,k);o[C]>=A||(o[C]=A,l.push(C))}}return o}const cn=4,Lr=9,_M=16,Dh=[.6,.6,1,.5,.8,.8],Yn=[{n:[1,0,0],o:[1,0,0],c:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],uv:[[0,0],[0,1],[1,1],[1,0]]},{n:[-1,0,0],o:[-1,0,0],c:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,1,0],o:[0,1,0],c:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],uv:[[0,0],[0,1],[1,1],[1,0]]},{n:[0,-1,0],o:[0,-1,0],c:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,1],o:[0,0,1],c:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,-1],o:[0,0,-1],c:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],uv:[[0,0],[0,1],[1,1],[1,0]]}],vM=[.5,.7,.86,1];function xM(i,t,e){return i&&t?0:3-(Number(i)+Number(t)+Number(e))}const Id=[{u:[0,1,0],v:[0,0,1],ui:1,vi:2},{u:[0,1,0],v:[0,0,1],ui:1,vi:2},{u:[1,0,0],v:[0,0,1],ui:0,vi:2},{u:[1,0,0],v:[0,0,1],ui:0,vi:2},{u:[1,0,0],v:[0,1,0],ui:0,vi:1},{u:[1,0,0],v:[0,1,0],ui:0,vi:1}];function MM(i,t,e,n,s,r){const o=Yn[s],a=Id[s],l=o.c[r],c=l[a.ui]===1?1:-1,h=l[a.vi]===1?1:-1,u=t+o.n[0],d=e+o.n[1],f=n+o.n[2],g=i(u+c*a.u[0],d+c*a.u[1],f+c*a.u[2]),_=i(u+h*a.v[0],d+h*a.v[1],f+h*a.v[2]),p=i(u+c*a.u[0]+h*a.v[0],d+c*a.u[1]+h*a.v[1],f+c*a.u[2]+h*a.v[2]);return vM[xM(g,_,p)]}const Dr=()=>({P:[],U:[],C:[],I:[],L:[],T:[],SW:[]}),Ir=i=>{const t=i.P.length/3;return{positions:new Float32Array(i.P),uvs:new Float32Array(i.U),colors:new Float32Array(i.C),indices:t<=65535?new Uint16Array(i.I):new Uint32Array(i.I),light:new Float32Array(i.L),top:i.T.length?new Float32Array(i.T):void 0,sway:i.SW.length?new Float32Array(i.SW):void 0}};function yM(i,t,e,n){const s=i*wt,r=t*wt,o=Dr(),a=Dr(),l=Dr(),c=Dr(),h=.01/(_M*cn),u=1/cn-2*h,d=1/Lr-2*h,f=(D,U,L)=>Gi(e(D,U,L)),g=8,_=wt+2*g,p=(D,U,L)=>{const $=e(s+D-g,U,r+L-g);return dn($)||bh($)?1:0},m=mM(_,me,(D,U,L)=>f(s+D-g,U,r+L-g),p),x=gM(_,me,(D,U,L)=>Fx(e(s+D-g,U,r+L-g)),(D,U,L)=>f(s+D-g,U,r+L-g),p),v=(D,U,L)=>U>=me?15:U<0?0:m[D+g+(L+g)*_+U*_*_],w=(D,U,L)=>U>=me||U<0?0:x[D+g+(L+g)*_+U*_*_],k=(D,U,L,$,W)=>{const H=Id[$],ct=Yn[$].c[W],vt=ct[H.ui]===1?1:-1,G=ct[H.vi]===1?1:-1,K=D+vt*H.u[0],et=U+vt*H.u[1],Z=L+vt*H.u[2],gt=D+G*H.v[0],Mt=U+G*H.v[1],mt=L+G*H.v[2],R=K+G*H.v[0],Et=et+G*H.v[1],Rt=Z+G*H.v[2],Yt=f(s+K,et,r+Z),yt=f(s+gt,Mt,r+mt),Nt=f(s+R,Et,r+Rt);let Ft=v(D,U,L),Lt=w(D,U,L),ie=1;return Yt||(Ft+=v(K,et,Z),Lt+=w(K,et,Z),ie++),yt||(Ft+=v(gt,Mt,mt),Lt+=w(gt,Mt,mt),ie++),!(Yt&&yt)&&!Nt&&(Ft+=v(R,Et,Rt),Lt+=w(R,Et,Rt),ie++),[Ft/ie/15,Lt/ie/15]},A=(D,U,L,$,W,H)=>{const ct=Yn[H],vt=ga(W,H),G=vt%cn/cn+h,K=1-(Math.floor(vt/cn)+1)/Lr+h,et=Dh[H],Z=U+ct.o[0],gt=L+ct.o[1],Mt=$+ct.o[2],mt=D.P.length/3,R=[0,0,0,0];for(let Et=0;Et<4;Et++){const Rt=ct.c[Et];R[Et]=MM(f,s+U,L,r+$,H,Et);const Yt=et*R[Et],[yt,Nt]=k(Z,gt,Mt,H,Et);D.P.push(U+Rt[0],L+Rt[1],$+Rt[2]),D.U.push(G+ct.uv[Et][0]*u,K+ct.uv[Et][1]*d),D.C.push(Yt,Yt,Yt),D.L.push(yt,Nt)}R[0]+R[2]>R[1]+R[3]?D.I.push(mt,mt+1,mt+2,mt,mt+2,mt+3):D.I.push(mt+1,mt+2,mt+3,mt+1,mt+3,mt),D===a&&D.SW.push(1,1,1,1)},C=(D,U,L)=>{const $=D+.5,W=U+.5,H=.28,ct=.92,vt=[[[$-H,L,W],[$+H,L,W],[$+H,L+ct,W],[$-H,L+ct,W]],[[$,L,W-H],[$,L,W+H],[$,L+ct,W+H],[$,L+ct,W-H]]],G=[[0,0],[1,0],[1,1],[0,1]];for(const K of vt){const et=c.P.length/3;for(let Z=0;Z<4;Z++)c.P.push(K[Z][0],K[Z][1],K[Z][2]),c.U.push(G[Z][0],G[Z][1]),c.C.push(1,1,1);c.I.push(et,et+1,et+2,et,et+2,et+3)}},z=(D,U,L,$,W)=>{const H=$%cn/cn+h,ct=H+u,vt=1-(Math.floor($/cn)+1)/Lr+h,G=vt+d,K=v(D,U,L)/15,et=w(D,U,L)/15,Z=.9,gt=D+.5,Mt=L+.5,mt=.5,R=[[gt-mt,Mt-mt,gt+mt,Mt+mt],[gt-mt,Mt+mt,gt+mt,Mt-mt]];for(const[Et,Rt,Yt,yt]of R){const Nt=a.P.length/3;a.P.push(Et,U,Rt,Yt,U,yt,Yt,U+W,yt,Et,U+W,Rt),a.U.push(H,vt,ct,vt,ct,G,H,G),a.C.push(Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z),a.L.push(K,et,K,et,K,et,K,et),a.SW.push(0,0,1,1),a.I.push(Nt,Nt+1,Nt+2,Nt,Nt+2,Nt+3)}},E=(D,U,L,$)=>{const W=$%cn/cn+h,H=W+u,ct=1-(Math.floor($/cn)+1)/Lr+h,vt=ct+d,G=v(D,U,L)/15,K=w(D,U,L)/15,et=1,Z=U+.06,gt=a.P.length/3;a.P.push(D,Z,L,D,Z,L+1,D+1,Z,L+1,D+1,Z,L),a.U.push(W,ct,W,vt,H,vt,H,ct),a.C.push(et,et,et,et,et,et,et,et,et,et,et,et),a.L.push(G,K,G,K,G,K,G,K),a.SW.push(0,0,0,0),a.I.push(gt,gt+1,gt+2,gt,gt+2,gt+3)};let y=1;const P=(D,U,L)=>{if(n(D,U,L)===0)return 0;let $=1;for(let W=U+1;$<7&&W<me&&n(D,W,L)>0;W++)$++;for(let W=U-1;$<7&&W>=0&&n(D,W,L)>0;W--)$++;return $},Y=(D,U,L)=>(P(D-1,U,L-1)+P(D,U,L-1)+P(D-1,U,L)+P(D,U,L))/4,X=(D,U,L,$,W)=>{const H=Yn[$],ct=Dh[$],vt=v(D+H.o[0],U+H.o[1],L+H.o[2])/15,G=w(D+H.o[0],U+H.o[1],L+H.o[2])/15,K=l.P.length/3,et=$===2;for(let Z=0;Z<4;Z++){const gt=H.c[Z],Mt=U+W[Z];l.P.push(D+gt[0],Mt,L+gt[2]);const mt=s+D+gt[0],R=r+L+gt[2];$===2||$===3?l.U.push(mt,R):$===0||$===1?l.U.push(R,Mt):l.U.push(mt,Mt),l.C.push(ct,ct,ct),l.L.push(vt,G);const Et=et||W[Z]>.01?y:0;l.T.push((Et>0?1:-1)*Y(mt,U,R))}l.I.push(K,K+1,K+2,K,K+2,K+3)},J=(D,U)=>{let L=0,$=0;for(const[W,H]of U){const ct=n(W,D,H);if(n(W,D+1,H)>0)return 1;if(ct>0){const vt=ct/9;vt>=.8?(L+=vt*10,$+=10):(L+=vt,$+=1)}else ge(e(W,D,H))||($+=1)}return $>0?L/$:.5};for(let D=0;D<me;D++)for(let U=0;U<wt;U++)for(let L=0;L<wt;L++){const $=e(s+L,D,r+U);if(Gi($))for(let W=0;W<6;W++){const H=Yn[W];Gi(e(s+L+H.o[0],D+H.o[1],r+U+H.o[2]))||A(o,L,D,U,$,W)}else if(bh($))for(let W=0;W<6;W++){const H=Yn[W];Gi(e(s+L+H.o[0],D+H.o[1],r+U+H.o[2]))||A(a,L,D,U,$,W)}else if(dn($)){const W=s+L,H=r+U;y=n(W,D+1,H)>0?0:1;const ct=J(D,[[W,H],[W-1,H],[W,H-1],[W-1,H-1]]),vt=J(D,[[W,H],[W-1,H],[W,H+1],[W-1,H+1]]),G=J(D,[[W,H],[W+1,H],[W,H+1],[W+1,H+1]]),K=J(D,[[W,H],[W+1,H],[W,H-1],[W+1,H-1]]);n(W,D+1,H)===0&&X(L,D,U,Rn.PosY,[ct,vt,G,K]),e(W,D-1,H)===0&&X(L,D,U,Rn.NegY,[0,0,0,0]);const et=(Z,gt,Mt,mt)=>{e(W+gt,D,H+Mt)===0&&X(L,D,U,Z,mt)};et(Rn.PosX,1,0,[0,K,G,0]),et(Rn.NegX,-1,0,[0,0,vt,ct]),et(Rn.PosZ,0,1,[0,0,G,vt]),et(Rn.NegZ,0,-1,[0,ct,K,0])}else if($===Qi)C(L,U,D);else if(Mi($))$===bl?E(L,D,U,ga($,Rn.PosY)):z(L,D,U,ga($,Rn.PosY),$===Md?1.45:.82);else if($===bo)for(let W=0;W<6;W++){const H=Yn[W];Gi(e(s+L+H.o[0],D+H.o[1],r+U+H.o[2]))||A(o,L,D,U,$,W)}else if($===io)for(let W=0;W<6;W++){const H=Yn[W],ct=e(s+L+H.o[0],D+H.o[1],r+U+H.o[2]);Gi(ct)||ct===io||A(o,L,D,U,$,W)}}const Q=new Uint8Array(4*48*4);for(let D=0;D<48;D++)for(let U=0;U<4;U++)for(let L=0;L<4;L++){let $=0,W=0;for(let H=0;H<4;H++){const ct=(D*4+H)*_*_;for(let vt=0;vt<4;vt++){const G=ct+(U*4+vt+g)*_+g+L*4;for(let K=0;K<4;K++){const et=m[G+K];et>$&&($=et);const Z=x[G+K];Z>W&&(W=Z)}}}Q[L+U*4+D*16]=$<<4|W}return{opaque:Ir(o),cutout:Ir(a),water:Ir(l),torch:Ir(c),light3d:Q}}function SM(i,t,e){return yM(t,e,(n,s,r)=>i.getBlock(n,s,r),(n,s,r)=>i.waterAmount(n,s,r))}function EM(i){return new Worker("/mineworld/assets/meshGen.worker-LqG1YKT3.js",{name:i==null?void 0:i.name})}const bM=.15,wM=24*24;function TM(i,t,e,n,s,r,o=bM,a=wM){const l=i-e,c=t-n,h=l*l+c*c;return h<=a?!0:(l*s+c*r)/Math.sqrt(h)>=o}const AM=-.2,CM=2.25;function RM(i,t,e,n,s=AM,r=CM){const o=i*i+t*t;return o<=r?!0:(i*e+t*n)/Math.sqrt(o)>=s}const sn=24e3,PM=1e3,Vi=[{t:0,top:[.36,.48,.66],hor:[1,.62,.36],tint:[.72,.64,.62]},{t:1800,top:[.3,.52,.79],hor:[.81,.9,.97],tint:[1,1,1]},{t:11e3,top:[.3,.52,.79],hor:[.81,.9,.97],tint:[1,1,1]},{t:12200,top:[.24,.34,.55],hor:[1,.5,.24],tint:[.86,.62,.5]},{t:13600,top:[.05,.07,.16],hor:[.09,.12,.24],tint:[.3,.34,.5]},{t:22e3,top:[.05,.07,.16],hor:[.09,.12,.24],tint:[.3,.34,.5]},{t:23200,top:[.36,.48,.66],hor:[1,.62,.36],tint:[.72,.64,.62]}],Ma=(i,t,e)=>i+(t-i)*e,ya=(i,t,e)=>[Ma(i[0],t[0],e),Ma(i[1],t[1],e),Ma(i[2],t[2],e)];function Ud(i){return(i%sn+sn)%sn}function al(i){const e=(Ud(i)-6e3)/sn*Math.PI*2;return Math.max(0,Math.min(1,.5-2*Math.cos(e)))*11}const LM={skyTop:[.18,.05,.05],skyHorizon:[.34,.09,.07],worldTint:[.62,.32,.28],light:.3,isNight:!0};function ll(i,t="overworld"){if(t==="nether")return LM;const e=Ud(i);let n=Vi[0],s={...Vi[0],t:sn};for(let a=0;a<Vi.length;a++){const l=Vi[a],c=Vi[a+1]??{...Vi[0],t:sn};if(e>=l.t&&e<c.t){n=l,s=c;break}}const r=s.t===n.t?0:(e-n.t)/(s.t-n.t),o=ya(n.tint,s.tint,r);return{skyTop:ya(n.top,s.top,r),skyHorizon:ya(n.hor,s.hor,r),worldTint:o,light:(o[0]+o[1]+o[2])/3,isNight:e>=13e3&&e<23e3}}const Ih=()=>typeof performance<"u"?performance.now():Date.now(),DM=24,Ur=1024,Nr=36,IM=110,Uh=(i,t,e)=>{const n=Math.max(0,Math.abs(i)-.5),s=Math.max(0,Math.abs(t)-.5);return n*n+s*s>e},Nh="float mcBright(float lv){ float f = clamp(lv,0.0,15.0)/15.0; return f/(4.0-3.0*f); }",kh="{ float skyLv = aLight.x*15.0; float blkLv = aLight.y*15.0; float bs = mcBright(max(skyLv - uSkyDarken, 0.0)); float bb = mcBright(blkLv); float drkFloor = (skyLv < 0.5) ? 0.03 : 0.04; vLF = max(bs, bb) * 0.96 + drkFloor; float sf = (bs + bb) > 0.0001 ? bs / (bs + bb) : 1.0; vTint = mix(vec3(1.0, 0.91, 0.78), uSkyTint, sf); }",Fh=i=>{const t=Math.max(0,Math.min(15,i))/15;return t/(4-3*t)};class Nd{constructor(t,e,n){b(this,"meshes",new Map);b(this,"lightGrids",new Map);b(this,"opaqueMat");b(this,"cutoutMat");b(this,"waterMat");b(this,"torchMat");b(this,"waterFrames");b(this,"waterTex");b(this,"waterAnimT",0);b(this,"waterFrame",0);b(this,"uSkyMul",{value:1});b(this,"uSkyTint",{value:new Ut(1,1,1)});b(this,"uSkyDarken",{value:0});b(this,"uShaders",{value:0});b(this,"uTime",{value:0});b(this,"uSkyRefl",{value:new Ut(.55,.72,.95)});b(this,"uSkyTop",{value:new Ut(.35,.55,.85)});b(this,"uSunDir",{value:new O(.4,.85,.3)});b(this,"sun",new ox(16777215,0));b(this,"uShadowMap",{value:null});b(this,"uShadowMatrix",{value:new ae});b(this,"uShadowTexel",{value:new Vt(1/Ur,1/Ur)});b(this,"uShadowOn",{value:0});b(this,"uHq",{value:0});b(this,"uSunUp",{value:0});b(this,"leafDepthMat",null);b(this,"meshWorkers",[]);b(this,"meshRr",0);b(this,"meshPending",new Set);b(this,"meshPendingSince",new Map);b(this,"meshFails",new Map);b(this,"meshQueue",[]);b(this,"editKeys",new Set);b(this,"priorityQueue",[]);b(this,"fogCullR2",(IM/wt)**2);b(this,"lastTint","");this.scene=t,this.world=e,this.opaqueMat=new ue({map:n,vertexColors:!0}),this.opaqueMat.shadowSide=Le,this.cutoutMat=new ue({map:n,vertexColors:!0,alphaTest:.5,side:ze}),this.waterFrames=uM(DM),this.waterTex=this.waterFrames[0].clone(),this.waterTex.needsUpdate=!0,this.waterMat=new ue({map:this.waterTex,vertexColors:!0,transparent:!0,opacity:.78,depthWrite:!1}),this.installLight(this.opaqueMat),this.installLight(this.cutoutMat,!0),this.installWaterShader(this.waterMat),this.torchMat=new ue({map:hM(),transparent:!0,alphaTest:.5,side:ze}),this.sun.castShadow=!1,this.sun.shadow.mapSize.set(Ur,Ur);const s=this.sun.shadow.camera;if(s.left=-Nr,s.right=Nr,s.top=Nr,s.bottom=-Nr,s.near=1,s.far=260,this.scene.add(this.sun),this.scene.add(this.sun.target),this.leafDepthMat=new cd({depthPacking:Wu,map:n,alphaTest:.5}),typeof Worker<"u"){const r=typeof navigator<"u"&&navigator.hardwareConcurrency||4,o=Math.max(1,Math.min(4,r-1));for(let a=0;a<o;a++){const l=new EM;l.onmessage=c=>{var _;const{cx:h,cz:u,mesh:d,error:f}=c.data,g=this.key(h,u);if(this.meshPending.has(g)){if(this.meshPending.delete(g),this.meshPendingSince.delete(g),f){const p=(this.meshFails.get(g)??0)+1;this.meshFails.set(g,p),console.warn(`[meshgen] 区块(${h},${u}) 网格化失败 #${p}: ${f.split(`
`)[0]}`);return}this.meshFails.delete(g),!(!d||!this.world.peek(h,u))&&(this.editKeys.has(g)?(this.priorityQueue.push({cx:h,cz:u,mesh:d}),(_=this.world.peek(h,u))!=null&&_.dirty||this.editKeys.delete(g)):this.meshQueue.push({cx:h,cz:u,mesh:d}))}},l.onerror=c=>{console.error("[meshgen worker] 致命错误(整个 worker 挂了，区块会停止网格化):",c.message)},this.meshWorkers.push(l)}}}installLight(t,e=!1){t.onBeforeCompile=n=>{n.uniforms.uSkyTint=this.uSkyTint,n.uniforms.uSkyDarken=this.uSkyDarken,n.uniforms.uShadowMap=this.uShadowMap,n.uniforms.uShadowMatrix=this.uShadowMatrix,n.uniforms.uShadowTexel=this.uShadowTexel,n.uniforms.uShadowOn=this.uShadowOn,n.uniforms.uHq=this.uHq,n.uniforms.uSunUp=this.uSunUp,n.uniforms.uShaders=this.uShaders,n.uniforms.uSunDirW=this.uSunDir,e&&(n.uniforms.uTime=this.uTime);const s=e?`{ float sw = uShaders * 0.06 * aSway; vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz; float ph = wp.x*0.6 + wp.z*0.5 + wp.y*0.3; transformed.x += sin(ph + uTime*1.4) * sw; transformed.z += sin(ph*1.3 + uTime*1.1) * sw; transformed.y += sin(ph*0.8 + uTime*1.7) * sw * 0.5; }
`:"";n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aLight;
uniform vec3 uSkyTint;
uniform float uSkyDarken;
uniform mat4 uShadowMatrix;
uniform float uShaders;
`+(e?`uniform float uTime;
attribute float aSway;
`:"")+`varying float vLF;
varying vec3 vTint;
varying vec4 vShadowCoord;
varying float vSky;
varying vec3 vWp;
`+Nh).replace("#include <begin_vertex>",`#include <begin_vertex>
`+s+kh+`
vSky = aLight.x;
vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;
vShadowCoord = uShadowMatrix * (modelMatrix * vec4(transformed, 1.0));`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vLF;
varying vec3 vTint;
varying vec4 vShadowCoord;
varying float vSky;
varying vec3 vWp;
uniform sampler2D uShadowMap;
uniform vec2 uShadowTexel;
uniform float uShadowOn;
uniform float uHq;
uniform float uSunUp;
uniform float uShaders;
uniform vec3 uSunDirW;
float mwUnpackDepth(vec4 v){ const vec4 f = (255.0/256.0)/vec4(16777216.0,65536.0,256.0,1.0); return dot(v,f); }
float mwShadow(vec4 sc){
  vec3 c = sc.xyz / sc.w;
  if (c.z >= 1.0 || c.x < 0.0 || c.x > 1.0 || c.y < 0.0 || c.y > 1.0) return 1.0;
  float bias = 0.0015;
  float ra = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) * 6.2831;
  vec2 rc = vec2(cos(ra), sin(ra));
  vec2 o1 = vec2(0.9 * rc.x - 0.3 * rc.y, 0.9 * rc.y + 0.3 * rc.x);
  float s = 0.0;
  s += (c.z - bias <= mwUnpackDepth(texture2D(uShadowMap, c.xy + o1 * uShadowTexel))) ? 1.0 : 0.0;
  s += (c.z - bias <= mwUnpackDepth(texture2D(uShadowMap, c.xy - o1 * uShadowTexel))) ? 1.0 : 0.0;
  if (uHq > 0.5) {
    vec2 o2 = vec2(-0.3 * rc.x - 0.9 * rc.y, -0.3 * rc.y + 0.9 * rc.x);
    s += (c.z - bias <= mwUnpackDepth(texture2D(uShadowMap, c.xy + o2 * uShadowTexel))) ? 1.0 : 0.0;
    s += (c.z - bias <= mwUnpackDepth(texture2D(uShadowMap, c.xy - o2 * uShadowTexel))) ? 1.0 : 0.0;
    s /= 4.0;
  } else { s /= 2.0; }
  float m = min(min(c.x, 1.0 - c.x), min(c.y, 1.0 - c.y));
  return mix(1.0, s, smoothstep(0.0, 0.12, m));
}`).replace("#include <color_fragment>",`#include <color_fragment>
float vis = 1.0;
if (uShadowOn > 0.5) {
  float sh = mwShadow(vShadowCoord);
  float gate = vSky * uSunUp;
  vis = mix(1.0, mix(0.5, 1.0, sh), gate);
}
vec3 shTint = mix(vec3(0.80, 0.88, 1.18), vec3(1.0), vis);
diffuseColor.rgb *= vLF * vTint * vis * shTint;
float sunLit = vSky * uSunUp * uShaders * vis;
if (sunLit > 0.003) {
  vec3 Nw = normalize(cross(dFdx(vWp), dFdy(vWp)));
  vec3 Vd = normalize(cameraPosition - vWp);
  Nw *= sign(dot(Nw, Vd));
  float nd = max(dot(Nw, normalize(uSunDirW)), 0.0);
  diffuseColor.rgb *= 1.0 + vec3(0.12, 0.09, 0.04) * nd * sunLit;
  vec3 Hh = normalize(normalize(uSunDirW) + Vd);
  float sp = pow(max(dot(Nw, Hh), 0.0), 28.0);
  diffuseColor.rgb += vec3(1.0, 0.95, 0.8) * sp * 0.035 * sunLit;
}`)}}updateSun(t,e,n,s){const r=t/sn*Math.PI*2;let o=Math.cos(r),a=Math.sin(r),l=.1;const c=Math.hypot(o,a,l)||1;o/=c,a/=c,l/=c;const h=Math.round(e),u=Math.round(n),d=Math.round(s);this.sun.target.position.set(h,u,d),this.sun.position.set(h+o*120,u+a*120,d+l*120),this.sun.target.updateMatrixWorld(),this.sun.updateMatrixWorld(),this.uSunUp.value=Math.max(0,Math.min(1,(a-.02)/.2));const f=this.sun.shadow.map;this.sun.castShadow&&f&&f.texture&&this.uSunUp.value>.001?(this.uShadowMap.value=f.texture,this.uShadowMatrix.value=this.sun.shadow.matrix,this.uShadowOn.value=1):this.uShadowOn.value=0}installWaterShader(t){t.onBeforeCompile=e=>{e.uniforms.uSkyMul=this.uSkyMul,e.uniforms.uSkyTint=this.uSkyTint,e.uniforms.uSkyDarken=this.uSkyDarken,e.uniforms.uShaders=this.uShaders,e.uniforms.uTime=this.uTime,e.uniforms.uSkyRefl=this.uSkyRefl,e.uniforms.uSkyTop=this.uSkyTop,e.uniforms.uSunDir=this.uSunDir,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aLight;
attribute float aTop;
varying float vWaterDepth;
varying float vSkyVis;
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
`+Nh).replace("#include <begin_vertex>",`#include <begin_vertex>
`+kh+`
vec3 mwWp0 = (modelMatrix * vec4(transformed, 1.0)).xyz;
transformed.y += (mwWaveV(mwWp0.xz, uTime) - 0.5) * 0.24 * step(0.5, aTop) * uShaders;
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vWaterDepth = abs(aTop);
vSkyVis = aLight.x;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
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
varying float vSkyVis;
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
  vec3 V = normalize(cameraPosition - vWPos);
  float dist = length(cameraPosition - vWPos);
  vec3 gNa = cross(dFdx(vWPos), dFdy(vWPos));
  float horiz = smoothstep(0.35, 0.7, abs(normalize(gNa).y));
  float nf = 1.0 - smoothstep(24.0, 90.0, dist);
  vec2 wq = vWPos.xz; float e = 0.35;
  float h0 = mwWave(wq, uTime);
  float hx = mwWave(wq + vec2(e, 0.0), uTime);
  float hz = mwWave(wq + vec2(0.0, e), uTime);
  float ns = nf * horiz;
  vec3 N = normalize(vec3((h0 - hx) / e * ns * 1.6, 1.0, (h0 - hz) / e * ns * 1.6));
  float above = clamp(V.y * 4.0 + 0.2, 0.0, 1.0) * horiz * vSkyVis;
  vec3 Rr = reflect(-V, N);
  vec3 skyR = mix(uSkyRefl, uSkyTop, clamp(Rr.y, 0.0, 1.0)) * 0.95;
  float fres = clamp(0.02 + 0.98 * pow(1.0 - max(dot(V, N), 0.0), 5.0), 0.0, 0.45);
  float dN = smoothstep(0.0, 1.0, clamp((vWaterDepth - 0.5) / 6.5, 0.0, 1.0));
  vec3 base = mix(vec3(0.10, 0.60, 0.76), vec3(0.01, 0.32, 0.60), dN) * vLF * vTint;
  float cav = mwWave(wq * 1.6 + vec2(uTime * 0.12, -uTime * 0.09), uTime * 0.8);
  float caust = pow(1.0 - abs(cav - 0.5) * 2.0, 5.0);
  base += vec3(0.50, 0.58, 0.55) * (caust * (1.0 - dN) * 0.85 * uSkyMul * horiz * vSkyVis) * vLF;
  vec3 col = mix(base, skyR, fres * above);
  vec3 Rs = reflect(-normalize(uSunDir), N);
  col += pow(max(dot(Rs, V), 0.0), 90.0) * uSkyMul * vec3(1.0, 0.97, 0.88) * 1.4 * above * (0.3 + 0.7 * nf);
  diffuseColor.rgb = col;
  float depthA = mix(0.34, 0.80, dN);
  float topA = mix(depthA, 0.85, fres * above);
  diffuseColor.a = mix(0.58, topA, horiz);
}`)}}setTint(t){const e=t.join();e!==this.lastTint&&(this.lastTint=e,this.uSkyTint.value.setRGB(t[0],t[1],t[2]))}setSkyMul(t){this.uSkyMul.value=t}setSkyDarken(t){this.uSkyDarken.value=t}setLightingQuality(t){this.uShaders.value=t!=="off"?1:0,this.sun.castShadow=t!=="off",this.uHq.value=t==="high"?1:0,t==="off"&&(this.uShadowOn.value=0)}setFogFar(t){this.fogCullR2=(t/wt)**2}setSkyReflection(t,e){this.uSkyRefl.value.setRGB(t[0],t[1],t[2]),e&&this.uSkyTop.value.setRGB(e[0],e[1],e[2])}setSunDir(t,e,n){this.uSunDir.value.set(t,e,n)}setAtlas(t){this.opaqueMat.map=t,this.cutoutMat.map=t,this.opaqueMat.needsUpdate=!0,this.cutoutMat.needsUpdate=!0}animateWater(t){this.uTime.value+=t,this.waterAnimT+=t;const e=.09;for(;this.waterAnimT>=e;){this.waterAnimT-=e,this.waterFrame=(this.waterFrame+1)%this.waterFrames.length;const n=this.waterFrames[this.waterFrame];n.image&&(this.waterTex.image=n.image,this.waterTex.needsUpdate=!0)}}key(t,e){return`${t},${e}`}setWorld(t){for(const e of[...this.meshes.keys()])this.unload(e);this.lightGrids.clear(),this.meshQueue.length=0,this.priorityQueue.length=0,this.meshPending.clear(),this.meshPendingSince.clear(),this.meshFails.clear(),this.editKeys.clear(),this.world=t}dispose(){var t;for(const e of[...this.meshes.keys()])this.unload(e);this.lightGrids.clear();for(const e of this.meshWorkers)e.terminate();this.meshWorkers.length=0,this.opaqueMat.dispose(),this.cutoutMat.dispose(),this.waterMat.dispose(),this.torchMat.dispose(),this.waterTex.dispose(),(t=this.leafDepthMat)==null||t.dispose(),this.scene.remove(this.sun),this.scene.remove(this.sun.target)}buildGeo(t){const e=new Ie;return e.setAttribute("position",new le(t.positions,3)),t.normals&&e.setAttribute("normal",new le(t.normals,3)),e.setAttribute("uv",new le(t.uvs,2)),e.setAttribute("color",new le(t.colors,3)),t.light&&t.light.length&&e.setAttribute("aLight",new le(t.light,2)),t.top&&t.top.length&&e.setAttribute("aTop",new le(t.top,1)),t.sway&&t.sway.length&&e.setAttribute("aSway",new le(t.sway,1)),e.setIndex(new le(t.indices,1)),e}lightLevelAt(t,e,n){const s=Math.floor(Math.floor(t)/wt),r=Math.floor(Math.floor(n)/wt),o=this.lightGrids.get(this.key(s,r));if(!o)return[15,0];const a=Math.min(3,Math.max(0,Math.floor((t-s*wt)/4))),l=Math.min(3,Math.max(0,Math.floor((n-r*wt)/4))),c=Math.min(47,Math.max(0,Math.floor(e/4))),h=o[a+l*4+c*16];return[h>>4,h&15]}brightnessAt(t,e,n,s){const[r,o]=this.lightLevelAt(t,e,n),a=r<.5?.03:.04;return Math.min(1,Math.max(Fh(r-s),Fh(o))*.96+a)}unload(t){this.editKeys.delete(t),this.meshPendingSince.delete(t),this.meshFails.delete(t),this.lightGrids.delete(t);const e=this.meshes.get(t);if(e){for(const n of[e.opaque,e.cutout,e.water,e.torch])n&&(this.scene.remove(n),n.geometry.dispose());this.meshes.delete(t)}}addMesh(t,e,n,s){if(t.indices.length===0)return null;const r=new $t(this.buildGeo(t),e);return r.position.set(n*wt,0,s*wt),this.scene.add(r),r}flushMesh(t){for(let e=0;e<8&&this.priorityQueue.length>0;e++){const n=this.priorityQueue.shift();n&&this.world.peek(n.cx,n.cz)&&this.applyMesh(n.cx,n.cz,n.mesh)}for(let e=0;e<t&&this.meshQueue.length>0;e++){const n=this.meshQueue.shift();n&&this.world.peek(n.cx,n.cz)&&this.applyMesh(n.cx,n.cz,n.mesh)}}meshBusy(){return this.meshQueue.length>0||this.priorityQueue.length>0||this.meshPending.size>0}meshQueueLen(){return this.meshQueue.length+this.priorityQueue.length}pipelineStats(){let t=0;for(const e of this.meshes.values())[e.opaque,e.cutout,e.water,e.torch].some(n=>n&&n.visible)&&t++;return{meshed:this.meshes.size,visible:t,pending:this.meshPending.size,queued:this.meshQueueLen()}}applyMesh(t,e,n){this.unload(this.key(t,e)),this.lightGrids.set(this.key(t,e),n.light3d);const s=this.addMesh(n.opaque,this.opaqueMat,t,e)??new $t,r=this.addMesh(n.cutout,this.cutoutMat,t,e),o=this.addMesh(n.water,this.waterMat,t,e),a=this.addMesh(n.torch,this.torchMat,t,e);s.castShadow=!0,s.receiveShadow=!0,r&&(r.castShadow=!0,r.receiveShadow=!0,this.leafDepthMat&&(r.customDepthMaterial=this.leafDepthMat)),this.meshes.set(this.key(t,e),{opaque:s,cutout:r,water:o,torch:a})}rebuildSync(t,e){const n=this.key(t,e);this.meshPending.delete(n),this.meshPendingSince.delete(n);const s=this.meshQueue.findIndex(a=>a.cx===t&&a.cz===e);s>=0&&this.meshQueue.splice(s,1);const r=this.priorityQueue.findIndex(a=>a.cx===t&&a.cz===e);r>=0&&this.priorityQueue.splice(r,1),this.applyMesh(t,e,SM(this.world,t,e));const o=this.world.peek(t,e);o&&(o.dirty=!1)}collectNeighbors(t,e){const n=[],s=[];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){const a=this.world.peek(t+r,e+o);if(!a)return null;n.push(a.blocks.slice()),s.push(a.fluid.slice())}return{blocks:n,fluid:s}}rebuild(t,e){if(this.meshWorkers.length===0){this.rebuildSync(t,e);return}const n=this.key(t,e);if(this.meshPending.has(n)||(this.meshFails.get(n)??0)>=3)return;const s=this.collectNeighbors(t,e);if(!s)return;this.meshPending.add(n),this.meshPendingSince.set(n,Ih());const r=[...s.blocks.map(a=>a.buffer),...s.fluid.map(a=>a.buffer)];this.meshWorkers[this.meshRr].postMessage({cx:t,cz:e,blocks:s.blocks,fluid:s.fluid},r),this.meshRr=(this.meshRr+1)%this.meshWorkers.length;const o=this.world.peek(t,e);o&&(o.dirty=!1)}retryStuckMeshes(t=8e3){const e=Ih();for(const[n,s]of this.meshPendingSince)e-s>t&&(this.meshPending.delete(n),this.meshPendingSince.delete(n),console.warn(`[meshgen] 区块 ${n} 网格化 ${Math.round((e-s)/1e3)}s 未回(worker 丢消息?) → 重试`))}update(t,e,n,s=2,r=0,o=0){this.retryStuckMeshes(),this.world.retryStuckGen();for(const l of[...this.meshes.keys()]){const[c,h]=l.split(",").map(Number);(Math.abs(c-t)>n+1||Math.abs(h-e)>n+1)&&this.unload(l)}for(let l=-n-1;l<=n+1;l++)for(let c=-n-1;c<=n+1;c++)this.world.request(t+c,e+l);const a=[];for(let l=-n;l<=n;l++)for(let c=-n;c<=n;c++){if(Uh(c,l,this.fogCullR2))continue;const h=t+c,u=e+l,d=this.world.peek(h,u);d&&(!this.meshes.has(this.key(h,u))||d.dirty)&&a.push({cx:h,cz:u,d:c*c+l*l,ahead:RM(c,l,r,o)})}a.sort((l,c)=>l.ahead===c.ahead?l.d-c.d:l.ahead?-1:1);for(let l=0;l<Math.min(s,a.length);l++)this.rebuild(a[l].cx,a[l].cz);for(const[l,c]of this.meshes){const[h,u]=l.split(",").map(Number),d=!Uh(h-t,u-e,this.fogCullR2);for(const f of[c.opaque,c.cutout,c.water,c.torch])f&&(f.visible=d)}}cullToView(t,e,n,s){for(const[r,o]of this.meshes){const[a,l]=r.split(",").map(Number);if(!TM(a*wt+wt/2,l*wt+wt/2,t,e,n,s))for(const c of[o.opaque,o.cutout,o.water,o.torch])c&&(c.visible=!1)}}remeshDirty(){var t;for(const e of[...this.meshes.keys()]){const[n,s]=e.split(",").map(Number);(t=this.world.peek(n,s))!=null&&t.dirty&&(this.editKeys.add(e),this.rebuild(n,s))}}}const kr=10;class UM{constructor(t){b(this,"mesh");b(this,"tex");this.tex=new vs().load("/mineworld/textures/crack.png"),this.tex.magFilter=re,this.tex.minFilter=re,this.tex.generateMipmaps=!1,this.tex.colorSpace=se,this.tex.wrapS=rs,this.tex.repeat.set(1/kr,1);const e=new ue({map:this.tex,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});this.mesh=new $t(new We(1.002,1.002,1.002),e),this.mesh.renderOrder=2,this.mesh.visible=!1,t.add(this.mesh)}show(t,e,n,s){const r=Math.max(0,Math.min(kr-1,Math.floor(s*kr)));this.tex.offset.x=r/kr,this.mesh.position.set(t+.5,e+.5,n+.5),this.mesh.visible=!0}hide(){this.mesh.visible=!1}}const so=256,kd=257,Fd=258,Od=259,zd=260,Bd=261,Hd=262,Gd=263,NM=264,kM=265,FM=266,OM=267,zM=268,BM=269,HM=270,GM=271,VM=272,WM=273,Vd=274,Tl=275,Wd=276,Al=277,Xd=278,Cl=279,qd=280,Rl=281,Yd=282,$d=283,Kd=284,Zd=285,jd=286,Jd=287,Qd=288,tf=289,ef=290,ts=291,Fs=292,nf=293,sf=294,XM=295;function Ne(i,t,e,n){return{name:i,maxStack:1,food:null,tool:{kind:t,tier:e,speed:t==="sword"?1.5:t==="hoe"?1:n,maxDurability:e===1?59:e===2?131:250}}}const bi={[so]:{name:"apple",maxStack:64,food:{nutrition:4,saturationModifier:.3},tool:null},[sf]:{name:"flint_and_steel",maxStack:1,food:null,tool:null},[XM]:{name:"nether_quartz",maxStack:64,food:null,tool:null},[kd]:{name:"stick",maxStack:64,food:null,tool:null},[Fd]:{name:"coal",maxStack:64,food:null,tool:null},[Od]:Ne("wooden_pickaxe","pickaxe",1,2),[zd]:Ne("wooden_axe","axe",1,2),[Bd]:Ne("wooden_shovel","shovel",1,2),[Hd]:Ne("wooden_sword","sword",1,2),[Gd]:Ne("wooden_hoe","hoe",1,2),[NM]:Ne("stone_pickaxe","pickaxe",2,4),[kM]:Ne("stone_axe","axe",2,4),[FM]:Ne("stone_shovel","shovel",2,4),[OM]:Ne("stone_sword","sword",2,4),[zM]:Ne("stone_hoe","hoe",2,4),[BM]:Ne("iron_pickaxe","pickaxe",3,6),[HM]:Ne("iron_axe","axe",3,6),[GM]:Ne("iron_shovel","shovel",3,6),[VM]:Ne("iron_sword","sword",3,6),[WM]:Ne("iron_hoe","hoe",3,6),[Vd]:{name:"iron_ingot",maxStack:64,food:null,tool:null},[Tl]:{name:"raw_porkchop",maxStack:64,food:{nutrition:3,saturationModifier:.3},tool:null},[Wd]:{name:"cooked_porkchop",maxStack:64,food:{nutrition:8,saturationModifier:.8},tool:null},[Al]:{name:"raw_beef",maxStack:64,food:{nutrition:3,saturationModifier:.3},tool:null},[Xd]:{name:"cooked_beef",maxStack:64,food:{nutrition:8,saturationModifier:.8},tool:null},[Cl]:{name:"raw_mutton",maxStack:64,food:{nutrition:2,saturationModifier:.3},tool:null},[qd]:{name:"cooked_mutton",maxStack:64,food:{nutrition:6,saturationModifier:.8},tool:null},[Rl]:{name:"raw_chicken",maxStack:64,food:{nutrition:2,saturationModifier:.3},tool:null},[Yd]:{name:"cooked_chicken",maxStack:64,food:{nutrition:6,saturationModifier:.6},tool:null},[$d]:{name:"leather",maxStack:64,food:null,tool:null},[Kd]:{name:"wool",maxStack:64,food:null,tool:null},[Zd]:{name:"feather",maxStack:64,food:null,tool:null},[jd]:{name:"egg",maxStack:16,food:null,tool:null},[Jd]:{name:"rotten_flesh",maxStack:64,food:{nutrition:4,saturationModifier:.1},tool:null},[Qd]:{name:"bone",maxStack:64,food:null,tool:null},[tf]:{name:"flint",maxStack:64,food:null,tool:null},[ef]:{name:"string",maxStack:64,food:null,tool:null},[ts]:{name:"arrow",maxStack:64,food:null,tool:null},[Fs]:{name:"bow",maxStack:1,food:null,tool:null},[nf]:{name:"gunpowder",maxStack:64,food:null,tool:null}},qM=Object.keys(bi).map(Number);function Sa(i){return i in bi}function Oh(i){var t;return((t=bi[i])==null?void 0:t.food)!=null}function YM(i){var t;return((t=bi[i])==null?void 0:t.food)??null}function $M(i){var t;return((t=bi[i])==null?void 0:t.name)??null}function ro(i){var t;return((t=bi[i])==null?void 0:t.maxStack)??64}function Os(i){var t;return((t=bi[i])==null?void 0:t.tool)??null}const KM={1:"stone",2:"dirt",3:"grass",4:"cobblestone",5:"sand",6:"oak_log",7:"oak_planks",8:"coal_ore",10:"oak_leaves",11:"crafting_table",12:"iron_ore",13:"furnace",14:"torch",15:"gravel",26:"sandstone",18:"obsidian",19:"netherrack",20:"soul_sand",21:"glowstone",22:"nether_quartz_ore",24:"bedrock",27:"cactus",28:"ice",30:"spruce_log",31:"spruce_leaves",32:"coal_block",33:"iron_block",34:"quartz_block",[so]:"apple",257:"stick",258:"coal",259:"wooden_pickaxe",260:"wooden_axe",261:"wooden_shovel",262:"wooden_sword",263:"wooden_hoe",264:"stone_pickaxe",265:"stone_axe",266:"stone_shovel",267:"stone_sword",268:"stone_hoe",269:"iron_pickaxe",270:"iron_axe",271:"iron_shovel",272:"iron_sword",273:"iron_hoe",274:"iron_ingot",275:"raw_porkchop",276:"cooked_porkchop",277:"raw_beef",278:"cooked_beef",279:"raw_mutton",280:"cooked_mutton",281:"raw_chicken",282:"cooked_chicken",283:"leather",284:"wool",285:"feather",286:"egg",287:"rotten_flesh",288:"bone",289:"flint",290:"string",291:"arrow",292:"bow",293:"gunpowder",294:"flint_and_steel",295:"nether_quartz"},ZM=new Set(["stone","dirt","grass","cobblestone","sand","oak_log","oak_planks","coal_ore","oak_leaves","crafting_table","iron_ore","furnace","gravel","sandstone","obsidian","netherrack","soul_sand","glowstone","nether_quartz_ore","bedrock","cactus","ice","spruce_log","spruce_leaves","coal_block","iron_block","quartz_block"]);let rf="classic";function zh(i){rf=i}const jM={1:"石头",2:"泥土",3:"草方块",4:"圆石",5:"沙子",6:"原木",7:"木板",8:"煤矿",10:"树叶",11:"工作台",12:"铁矿",13:"熔炉",14:"火把",15:"砂砾",26:"沙石",32:"煤炭块",33:"铁块",34:"石英块",256:"苹果",257:"木棍",258:"煤炭",259:"木镐",260:"木斧",261:"木锹",262:"木剑",263:"木锄",264:"石镐",265:"石斧",266:"石锹",267:"石剑",268:"石锄",269:"铁镐",270:"铁斧",271:"铁锹",272:"铁剑",273:"铁锄",274:"铁锭",275:"生猪排",276:"熟猪排",277:"生牛肉",278:"牛排",279:"生羊肉",280:"熟羊肉",281:"生鸡肉",282:"熟鸡肉",283:"皮革",284:"羊毛",285:"羽毛",286:"鸡蛋",287:"腐肉",288:"骨头",289:"燧石",290:"线",291:"箭",292:"弓",293:"火药",294:"打火石",295:"下界石英"},Si=i=>{const t=KM[i];if(!t)return null;const e=rf==="classic"&&ZM.has(t)?"icons_classic":"icons";return xs(`textures/${e}/${t}.png`)},of=i=>jM[i]??`#${i}`,es=.25,JM=22,Bh=es/2;function hn(i,t,e,n,s=Math.random,r=1,o){return{id:i,count:r,dur:o,x:t+.5,y:e+.5,z:n+.5,vx:(s()-.5)*2,vy:2.5,vz:(s()-.5)*2,age:0}}function QM(i,t,e=.75){const n=e*e;for(let s=0;s<i.length;s++){const r=i[s],o=t(r.id);if(!(r.count>=o))for(let a=i.length-1;a>s;a--){const l=i[a];if(l.id!==r.id||r.dur!==void 0||l.dur!==void 0)continue;const c=r.x-l.x,h=r.y-l.y,u=r.z-l.z;if(c*c+h*h+u*u>n)continue;const d=Math.min(o-r.count,l.count);if(!(d<=0)&&(r.count+=d,l.count-=d,l.age<r.age&&(r.age=l.age),l.count<=0&&i.splice(a,1),r.count>=o))break}}}function ty(i,t,e){i.age+=e,i.vy-=JM*e;const n=i.x+i.vx*e,s=i.z+i.vz*e;let r=i.y+i.vy*e;const o=r-Bh;return i.vy<=0&&t.isSolid(Math.floor(n),Math.floor(o),Math.floor(s))&&(r=Math.floor(o)+1+Bh,i.vy=0,i.vx*=.6,i.vz*=.6),i.x=n,i.y=r,i.z=s,i}function ey(i,t,e,n){if(i.age<.3)return!1;const s=i.x-t,r=i.y-e,o=i.z-n;return s*s+r*r+o*o<1.4*1.4}const Ds=4,Hh=9,ny=16,Fr=.5/(ny*Ds);function iy(i){const t=new We(es,es,es),e=$e[i].faces,n=t.attributes.uv;for(let s=0;s<6;s++){const r=e[s],o=r%Ds,a=Math.floor(r/Ds),l=o/Ds+Fr,c=(o+1)/Ds-Fr,h=1-(a+1)/Hh+Fr,u=1-a/Hh-Fr,d=s*4;n.setXY(d+0,l,u),n.setXY(d+1,c,u),n.setXY(d+2,l,h),n.setXY(d+3,c,h)}return n.needsUpdate=!0,t}class sy{constructor(t,e){b(this,"meshes",new Map);b(this,"geoCache",new Map);b(this,"mat");b(this,"itemMats",new Map);this.scene=t,this.mat=new ue({map:e})}setAtlas(t){this.mat.map=t,this.mat.needsUpdate=!0;for(const[e,n]of this.meshes)Sa(e.id)||(n.material.map=t,n.material.needsUpdate=!0)}itemMat(t){let e=this.itemMats.get(t);if(!e){const n=new vs().load(Si(t)??xs("textures/icons/apple.png"));n.magFilter=re,n.minFilter=re,n.colorSpace=se,e=new ue({map:n,transparent:!0,alphaTest:.5,side:ze}),this.itemMats.set(t,e)}return e}geo(t){let e=this.geoCache.get(t);return e||(e=Sa(t)?new Oe(es,es):iy(t),this.geoCache.set(t,e)),e}sync(t,e){const n=new Set(t);for(const[s,r]of this.meshes)n.has(s)||(this.scene.remove(r),r.material.dispose(),this.meshes.delete(s));for(const s of t){let r=this.meshes.get(s);if(r||(r=new $t(this.geo(s.id),(Sa(s.id)?this.itemMat(s.id):this.mat).clone()),this.scene.add(r),this.meshes.set(s,r)),e){const a=e(s.x,s.y+.5,s.z);r.material.color.setScalar(a)}const o=.1+Math.sin(s.age*3)*.06;r.position.set(s.x,s.y+o,s.z),r.rotation.y=s.age*1.8}}clear(){for(const[,t]of this.meshes)this.scene.remove(t),t.material.dispose();this.meshes.clear()}}function ry(i){return i===null||i<=0?"none":i===Qi?Si(i)?"sprite":"none":$e[i]?"block":Si(i)?"sprite":"none"}const Ea=.8;function oy(i){const t=Math.PI/180,e=Math.sin(Math.sqrt(Math.max(0,i))*Math.PI),n=Math.sin(i*i*Math.PI);return{tx:-.4*e*Ea,ty:.2*Math.sin(Math.sqrt(Math.max(0,i))*Math.PI*2)*Ea,tz:-.2*Math.sin(i*Math.PI)*Ea,ry1:(45+n*-20)*t,rz:e*-20*t,rx:e*-80*t,ry2:-45*t}}const Is=4,Gh=9,ay=16,Or=.01/(ay*Is),ns=[.6,.6,1,.5,.8,.8],ly=.3,cy=new O(1,0,0),hy=new O(0,1,0);function uy(i,t,e,n){const s=new We(i,t,e),r=new Ut(n),o=[];for(let a=0;a<6;a++)for(let l=0;l<4;l++)o.push(r.r*ns[a],r.g*ns[a],r.b*ns[a]);return s.setAttribute("color",new we(o,3)),s}function dy(i,t){const e=new We(t,t,t),n=$e[i].faces,s=e.attributes.uv,r=[];for(let o=0;o<6;o++){const a=n[o],l=a%Is,c=Math.floor(a/Is),h=l/Is+Or,u=(l+1)/Is-Or,d=1-(c+1)/Gh+Or,f=1-c/Gh-Or,g=o*4;s.setXY(g+0,h,f),s.setXY(g+1,u,f),s.setXY(g+2,h,d),s.setXY(g+3,u,d);for(let _=0;_<4;_++)r.push(ns[o],ns[o],ns[o])}return s.needsUpdate=!0,e.setAttribute("color",new we(r,3)),e}class fy{constructor(t){b(this,"scene",new hs);b(this,"camera",new Ve(70,1,.01,10));b(this,"atlas");b(this,"root",new In);b(this,"arm");b(this,"item",null);b(this,"itemId",null);b(this,"spriteTex",new Map);b(this,"swingT",0);b(this,"wantSwing",!1);b(this,"bobPhase",0);b(this,"eating",!1);b(this,"eatT",0);b(this,"hurtT",0);b(this,"bright",1);this.atlas=t,this.arm=new $t(uy(.14,.5,.14,15249530),new ue({vertexColors:!0})),this.arm.position.set(0,-.22,0),this.root.add(this.arm),this.root.position.set(.5,-.45,-.7),this.root.rotation.set(.2,-.5,.45),this.scene.add(this.root)}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}itemTexture(t){const e=this.spriteTex.get(t);if(e)return e;const n=Si(t);if(!n)return null;const s=new vs().load(n);return s.magFilter=re,s.minFilter=re,s.generateMipmaps=!1,s.colorSpace=se,this.spriteTex.set(t,s),s}setBrightness(t){this.bright+=(t-this.bright)*.12;const e=this.bright;this.arm.material.color.setScalar(e),this.item&&this.item.material.color.setScalar(e)}setHeld(t){if(t===this.itemId)return;this.itemId=t,this.item&&(this.root.remove(this.item),this.item.geometry.dispose(),this.item=null);const e=ry(t);if(e==="block"&&t!==null)this.item=new $t(dy(t,.32),new ue({map:this.atlas,vertexColors:!0})),this.item.position.set(-.02,.16,.04),this.item.rotation.set(-.1,.6,.1),this.root.add(this.item);else if(e==="sprite"&&t!==null){const n=this.itemTexture(t);n&&(this.item=new $t(new Oe(.34,.34),new ue({map:n,transparent:!0,alphaTest:.5,side:ze})),this.item.position.set(.04,.2,.04),this.item.rotation.set(0,-.35,.35),this.root.add(this.item))}}swing(){this.wantSwing=!0}hurtShake(){this.hurtT=1}setAtlas(t){this.atlas=t;const e=this.itemId;this.itemId=null,this.setHeld(e)}setEating(t){this.eating=t,t||(this.eatT=0)}update(t,e){this.wantSwing&&this.swingT===0&&(this.swingT=1e-4),this.swingT>0&&(this.swingT+=t/ly,this.swingT>=1&&(this.swingT=this.wantSwing?1e-4:0)),this.wantSwing=!1,this.bobPhase+=t*e*7;const n=Math.cos(this.bobPhase)*.012*Math.min(1,e),s=Math.abs(Math.sin(this.bobPhase))*.012*Math.min(1,e),r=oy(this.swingT);if(this.root.position.set(.42+n+r.tx,-.28+s+r.ty,-.72+r.tz),this.root.rotation.set(.1,-.5,.4),this.root.rotateOnWorldAxis(cy,r.rx),this.root.rotateOnWorldAxis(hy,r.rz),this.eating){this.eatT+=t;const o=Math.sin(this.eatT*30);this.root.position.x+=-.18+o*.015,this.root.position.y+=.16+o*.02,this.root.position.z+=.18,this.root.rotateX(.4+o*.12),this.root.rotateZ(-.25)}if(this.hurtT>0){this.hurtT=Math.max(0,this.hurtT-t*4);const o=this.hurtT*this.hurtT,a=Math.sin(this.hurtT*45);this.root.position.x+=a*.05*o,this.root.position.y+=-.06*o,this.root.rotateZ(a*.35*o)}}}const Vh=.6,oo=.6,Ei=1.8,wn=1.62,py=1.8,my=1.54,gy=.3,_y=.2,ao=.08,lo=.98,Vs=.42,Wh=4.317/20,vy=5.612/20,xy=.42,My=.84,Xh=.42,zr=oo/2;function co(i,t,e=Ei){const s=Math.floor(i.x-zr+1e-6),r=Math.ceil(i.x+zr-1e-6)-1,o=Math.floor(i.y+1e-6),a=Math.ceil(i.y+e-1e-6)-1,l=Math.floor(i.z-zr+1e-6),c=Math.ceil(i.z+zr-1e-6)-1;for(let h=o;h<=a;h++)for(let u=s;u<=r;u++)for(let d=l;d<=c;d++)if(t.isSolid(u,h,d))return!0;return!1}function Wi(i,t,e,n,s=Ei){if(e===0)return!1;const r=Math.sign(e),o=.2;let a=Math.abs(e);for(;a>1e-9;){const l=Math.min(a,o)*r;if(a-=Math.abs(l),i[t]+=l,co(i,n,s)){i[t]-=l;let c=l/2;for(let h=0;h<24&&Math.abs(c)>1e-5;h++)i[t]+=c,co(i,n,s)&&(i[t]-=c),c/=2;return!0}}return!1}function qh(i){const t=Math.cos(i.yaw),e=Math.sin(i.yaw);let n=i.forward*t-i.right*e,s=i.forward*e+i.right*t;const r=Math.hypot(n,s);return r>1e-9?(n/=r,s/=r):(n=0,s=0),{x:n,z:s}}function Rs(i,t,e=Ei){return co(i,t,e)?!1:co({x:i.x,y:i.y-.06,z:i.z},t,e)}function yy(i,t,e){var k,A,C;const n={...i.pos},s={...i.vel};if(t.fly){const z=qh(t),E=t.sprint?My:xy;return s.x=z.x*E,s.z=z.z*E,s.y=(t.flyUp?Xh:0)-(t.flyDown?Xh:0),Wi(n,"y",s.y,e)&&(s.y=0),Wi(n,"x",s.x,e)&&(s.x=0),Wi(n,"z",s.z,e)&&(s.z=0),{pos:n,vel:s,onGround:Rs(n,e),kbx:0,kbz:0}}const r=t.crouch===!0,o=r?py:Ei,a=Rs(n,e,o),l=((k=e.isWater)==null?void 0:k.call(e,Math.floor(n.x),Math.floor(n.y+.1),Math.floor(n.z)))??!1;let c=!1;t.jump&&(a||l)&&(s.y=l?.5:Vs,c=!0);const h=qh(t);let u=l?Wh*.7:t.sprint&&!r?vy:Wh;r&&(u*=gy),t.slow&&(u*=_y);const d=i.kbx??0,f=i.kbz??0,g=Math.hypot(h.x,h.z)>1e-9;if(!a&&!l)s.x=s.x*.91+h.x*u*.09+d,s.z=s.z*.91+h.z*u*.09+f;else if(g||l){let z=u;if(g&&a&&!l){const E=Math.floor(n.x),y=Math.floor(n.y-.1),P=Math.floor(n.z);(((A=e.getBlock)==null?void 0:A.call(e,E,y,P))??0)===yd&&(z*=.4)}s.x=h.x*z+d,s.z=h.z*z+f}else{const z=Math.floor(n.x),E=Math.floor(n.y-.1),y=Math.floor(n.z),P=((C=e.getBlock)==null?void 0:C.call(e,z,E,y))??0,Y=Hx(P);s.x=s.x*Y+d,s.z=s.z*Y+f}Wi(n,"y",s.y,e,o)&&(s.y=0);const _=r&&a&&s.y<=0,p=n.x;Wi(n,"x",s.x,e,o)&&(s.x=0),_&&!Rs(n,e,o)&&(n.x=p,s.x=0);const m=n.z;Wi(n,"z",s.z,e,o)&&(s.z=0),_&&!Rs(n,e,o)&&(n.z=m,s.z=0);const x=Rs(n,e,o);c?s.y=(s.y-ao)*lo:l?t.swimUp?s.y=.16:s.y=Math.max(s.y*.8-.02,-.15):x?s.y=0:s.y=(s.y-ao)*lo;const v=s.x===0?0:d*Vh,w=s.z===0?0:f*Vh;return{pos:n,vel:s,onGround:x,kbx:Math.abs(v)<.005?0:v,kbz:Math.abs(w)<.005?0:w}}const af=.05,ba=.99,Sy=.25;function Yh(i,t,e,n,s,r,o,a,l){const c=Math.hypot(n,s,r)||1;return{x:i,y:t,z:e,vx:n/c*o,vy:s/c*o,vz:r/c*o,age:0,stuck:!1,fromPlayer:a,damage:l}}function Ey(i,t){if(i.age++,i.stuck)return i;i.vy-=af,i.vx*=ba,i.vy*=ba,i.vz*=ba;const e=Math.hypot(i.vx,i.vy,i.vz),n=Math.max(1,Math.ceil(e/Sy)),s=i.vx/n,r=i.vy/n,o=i.vz/n;for(let a=0;a<n;a++){const l=i.x+s,c=i.y+r,h=i.z+o;if(t.isSolid(Math.floor(l),Math.floor(c),Math.floor(h)))return i.stuck=!0,i.vx=i.vy=i.vz=0,i;i.x=l,i.y=c,i.z=h}return i}const by=new O(0,0,1);class wy{constructor(t){b(this,"meshes",new Map);b(this,"geoShaft",new We(.05,.05,.5));b(this,"geoHead",new We(.09,.09,.14));b(this,"geoFletch",new We(.16,.02,.12));b(this,"matShaft",new ue({color:7031339}));b(this,"matHead",new ue({color:10132130}));b(this,"matFletch",new ue({color:15263980}));b(this,"tmp",new O);this.scene=t}make(){const t=new In;t.add(new $t(this.geoShaft,this.matShaft));const e=new $t(this.geoHead,this.matHead);e.position.z=.3,t.add(e);const n=new $t(this.geoFletch,this.matFletch);n.position.z=-.22,t.add(n);const s=new $t(this.geoFletch,this.matFletch);return s.position.z=-.22,s.rotation.z=Math.PI/2,t.add(s),t}sync(t){const e=new Set(t);for(const[n,s]of this.meshes)e.has(n)||(this.scene.remove(s),this.meshes.delete(n));for(const n of t){let s=this.meshes.get(n);s||(s=this.make(),this.scene.add(s),this.meshes.set(n,s)),s.position.set(n.x,n.y,n.z);const r=Math.hypot(n.vx,n.vy,n.vz);r>1e-4&&(this.tmp.set(n.vx/r,n.vy/r,n.vz/r),s.quaternion.setFromUnitVectors(by,this.tmp))}}clear(){for(const[,t]of this.meshes)this.scene.remove(t);this.meshes.clear()}}function ho(i,t,e,n){const r=Math.floor(i.x-t+1e-6),o=Math.ceil(i.x+t-1e-6)-1,a=Math.floor(i.y+1e-6),l=Math.ceil(i.y+e-1e-6)-1,c=Math.floor(i.z-t+1e-6),h=Math.ceil(i.z+t-1e-6)-1;for(let u=a;u<=l;u++)for(let d=r;d<=o;d++)for(let f=c;f<=h;f++)if(n.isSolid(d,u,f))return!0;return!1}function wa(i,t,e,n,s,r){if(e===0)return!1;const o=Math.sign(e),a=.2;let l=Math.abs(e);for(;l>1e-9;){const c=Math.min(l,a)*o;if(l-=Math.abs(c),i[t]+=c,ho(i,n,s,r)){i[t]-=c;let h=c/2;for(let u=0;u<24&&Math.abs(h)>1e-5;u++)i[t]+=h,ho(i,n,s,r)&&(i[t]-=h),h/=2;return!0}}return!1}function Ty(i,t,e,n){return ho(i,t,e,n)?!1:ho({x:i.x,y:i.y-.06,z:i.z},t,e,n)}function lf(i,t,e,n,s){const r=t/2,o={...i},a={...n};return wa(o,"y",a.y,r,e,s)&&(a.y=0),wa(o,"x",a.x,r,e,s)&&(a.x=0),wa(o,"z",a.z,r,e,s)&&(a.z=0),{pos:o,vel:a,onGround:Ty(o,r,e,s)}}const Qn={pig:{hp:10,width:.9,height:.9,moveSpeed:.09,fallImmune:!1},cow:{hp:10,width:.9,height:1.4,moveSpeed:.08,fallImmune:!1},sheep:{hp:8,width:.9,height:1.3,moveSpeed:.08,fallImmune:!1},chicken:{hp:4,width:.4,height:.7,moveSpeed:.07,fallImmune:!0},zombie:{hp:20,width:.6,height:1.9,moveSpeed:.13,fallImmune:!1,hostile:!0,attack:3,sense:35},skeleton:{hp:20,width:.6,height:1.95,moveSpeed:.15,fallImmune:!1,hostile:!0,attack:2,sense:16,ranged:!0},creeper:{hp:20,width:.6,height:1.7,moveSpeed:.15,fallImmune:!1,hostile:!0,attack:43,sense:16,explosive:!0,sunImmune:!0},husk:{hp:20,width:.6,height:1.95,moveSpeed:.13,fallImmune:!1,hostile:!0,attack:3,sense:35,sunImmune:!0}},Ay=i=>Qn[i].hostile===!0,Cy=1.8,Ry=10,$h=.4,Py=.36,Kh=-.05,Ly=.06,Zh=.85,Dy=.12;function Ao(i,t,e,n){return{kind:i,pos:{x:t,y:e,z:n},vel:{x:0,y:0,z:0},yaw:0,onGround:!1,health:Qn[i].hp,hurtCooldown:0,ai:{state:"idle",timer:20,target:null},eggTimer:i==="chicken"?6e3:0,atkCd:0,fuse:0}}function cf(i){return{...i,pos:{...i.pos},vel:{...i.vel},ai:{...i.ai,target:i.ai.target?{...i.ai.target}:null}}}function Iy(i,t){return{x:i.x+(t()*2-1)*8,y:i.y,z:i.z+(t()*2-1)*8}}const Ta=i=>20+Math.floor(i()*40);function Uy(i,t,e){var _,p;const n=Qn[i.kind],s=cf(i),r=[];s.hurtCooldown>0&&s.hurtCooldown--,s.ai.timer--;let o=0,a=0,l=n.moveSpeed;if(s.ai.state==="idle")s.ai.timer<=0&&(s.ai.state="wander",s.ai.target=Iy(s.pos,e),s.ai.timer=40+Math.floor(e()*60));else if(s.ai.state==="wander")if(!s.ai.target||s.ai.timer<=0)s.ai.state="idle",s.ai.target=null,s.ai.timer=Ta(e);else{const m=s.ai.target.x-s.pos.x,x=s.ai.target.z-s.pos.z,v=Math.hypot(m,x);v<.7?(s.ai.state="idle",s.ai.target=null,s.ai.timer=Ta(e)):(o=m/v,a=x/v)}else l=n.moveSpeed*Cy,s.ai.timer<=0?(s.ai.state="idle",s.ai.target=null,s.ai.timer=Ta(e)):(o=Math.cos(s.yaw),a=Math.sin(s.yaw));if((o!==0||a!==0)&&s.onGround){const m=.5+n.width/2,x=Math.floor(s.pos.x+o*m),v=Math.floor(s.pos.z+a*m),w=Math.floor(s.pos.y);!t.isSolid(x,w-1,v)&&!t.isSolid(x,w-2,v)&&(o=0,a=0,s.ai.target=null)}let c=!1;if(o!==0||a!==0){const m=Math.hypot(o,a)||1,x=Math.floor(s.pos.x+o/m*(n.width/2+.3)),v=Math.floor(s.pos.z+a/m*(n.width/2+.3)),w=Math.floor(s.pos.y);t.isSolid(x,w,v)&&!t.isSolid(x,w+1,v)&&(c=!0)}const h=c&&s.onGround,u=(s.kbx??0)*.8,d=(s.kbz??0)*.8;if(s.kbx=Math.abs(u)<.01?0:u,s.kbz=Math.abs(d)<.01?0:d,s.vel.x=o*l+(s.kbx??0),s.vel.z=a*l+(s.kbz??0),((_=t.isWater)==null?void 0:_.call(t,Math.floor(s.pos.x),Math.floor(s.pos.y),Math.floor(s.pos.z)))??!1){const m=((p=t.isWater)==null?void 0:p.call(t,Math.floor(s.pos.x),Math.floor(s.pos.y)+1,Math.floor(s.pos.z)))??!1;c?s.vel.y=Vs:s.vel.y=m?Math.min((s.vel.y+Ly)*Zh,Dy):Math.min(s.vel.y*Zh,0)}else s.vel.y=(s.vel.y-ao)*lo,h&&(s.vel.y=Vs),n.fallImmune&&s.vel.y<Kh&&(s.vel.y=Kh);const g=lf(s.pos,n.width,n.height,s.vel,t);return s.pos=g.pos,s.vel=g.vel,s.onGround=g.onGround,s.onGround&&s.vel.y<0&&(s.vel.y=0),(Math.abs(s.vel.x)>1e-4||Math.abs(s.vel.z)>1e-4)&&(s.yaw=Math.atan2(s.vel.z,s.vel.x)),s.kind==="chicken"&&(s.eggTimer--,s.eggTimer<=0&&(r.push({kind:"layEgg",pos:{...s.pos}}),s.eggTimer=6e3+Math.floor(e()*6001))),{mob:s,events:r}}function Aa(i,t,e,n){const s=cf(i),r=[];if(s.hurtCooldown>0)return{mob:s,events:r};s.health-=t,s.hurtCooldown=Ry,r.push({kind:"hurt"});const o=Math.hypot(e.x,e.z)||1;return s.kbx=e.x/o*$h,s.kbz=e.z/o*$h,s.vel.x=s.kbx,s.vel.z=s.kbz,s.vel.y=Py,s.onGround=!1,s.yaw=Math.atan2(s.vel.z,s.vel.x),Qn[s.kind].hostile?(s.ai.state="chase",s.ai.timer=0,s.aggro=300):(s.ai.state="panic",s.ai.target=null,s.ai.timer=30+Math.floor(n()*10)),s.health<=0&&(r.push({kind:"drops",items:hf(s.kind,n),pos:{...s.pos}}),r.push({kind:"death",pos:{...s.pos}})),{mob:s,events:r}}function hf(i,t){switch(i){case"pig":return[{id:Tl,count:1+Math.floor(t()*3)}];case"cow":{const e=[{id:Al,count:1+Math.floor(t()*3)}],n=Math.floor(t()*3);return n>0&&e.push({id:$d,count:n}),e}case"sheep":return[{id:Kd,count:1},{id:Cl,count:1+Math.floor(t()*2)}];case"chicken":{const e=[{id:Rl,count:1}],n=Math.floor(t()*3);return n>0&&e.push({id:Zd,count:n}),e}case"zombie":case"husk":{const e=Math.floor(t()*3);return e>0?[{id:Jd,count:e}]:[]}case"skeleton":{const e=[],n=Math.floor(t()*3);n>0&&e.push({id:Qd,count:n});const s=Math.floor(t()*3);s>0&&e.push({id:ef,count:s});const r=Math.floor(t()*3);return r>0&&e.push({id:ts,count:r}),e}case"creeper":{const e=Math.floor(t()*3);return e>0?[{id:nf,count:e}]:[]}}}const uf=1.9,Ny=1,ky=1.7,Fy=18,Oy=.05,zy=.6,By=15,Hy=5,Gy=10,Vy=35,Wy=3,Xy=30,qy=3,Yy=.06,jh=.85,$y=.12;function Ca(i,t,e){const n=e.x-t.x,s=e.y-t.y,r=e.z-t.z,o=Math.ceil(Math.hypot(n,s,r)/.5);for(let a=1;a<o;a++){const l=a/o;if(i.isSolid(Math.floor(t.x+n*l),Math.floor(t.y+s*l),Math.floor(t.z+r*l)))return!1}return!0}function Ky(i){return{...i,pos:{...i.pos},vel:{...i.vel},ai:{...i.ai,target:i.ai.target?{...i.ai.target}:null}}}function Zy(i,t,e,n,s){var C,z;const r=Qn[i.kind],o=Ky(i),a=[];o.hurtCooldown>0&&(o.hurtCooldown-=Ny),o.atkCd>0&&o.atkCd--;let l=0,c=0,h=r.moveSpeed;const u=Math.max(0,(o.aggro??0)-1);o.aggro=u;const d=u>0?64:r.sense??16;let f=1/0,g=null;if(n){const E=n.x-o.pos.x,y=n.z-o.pos.z;if(f=Math.hypot(E,n.y-o.pos.y,y),f<=d&&f>.001){o.ai.state="chase",o.ai.target={...n};const P=E/f,Y=y/f;r.ranged?(g=n,f<Hy?(l=-P,c=-Y):f>Gy&&(l=P,c=Y)):(l=P,c=Y)}}if(l===0&&c===0)if(h=r.moveSpeed*zy,o.ai.timer--,o.ai.state==="chase")o.ai.state="idle",o.ai.target=null,o.ai.timer=20+Math.floor(e()*40);else if(o.ai.state==="wander"&&o.ai.target){const E=o.ai.target.x-o.pos.x,y=o.ai.target.z-o.pos.z,P=Math.hypot(E,y);P<.7||o.ai.timer<=0?(o.ai.state="idle",o.ai.target=null,o.ai.timer=20+Math.floor(e()*40)):(l=E/P,c=y/P)}else o.ai.timer<=0&&(o.ai.state="wander",o.ai.target={x:o.pos.x+(e()*2-1)*8,y:o.pos.y,z:o.pos.z+(e()*2-1)*8},o.ai.timer=40+Math.floor(e()*60));const _={x:o.pos.x,y:o.pos.y+r.height*.85,z:o.pos.z},p=n?{x:n.x,y:n.y+1,z:n.z}:null;if(r.ranged){if(p&&f<=By&&o.atkCd<=0&&Ca(t,_,p)){const E=f/uf,y=.5*af*E*E*1.15,P=p.x-_.x,Y=p.y+y-_.y,X=p.z-_.z,J=Math.hypot(P,Y,X)||1;a.push({kind:"shootArrow",from:_,dir:{x:P/J,y:Y/J,z:X/J},damage:1+Math.floor(e()*4)}),o.atkCd=Vy}}else if(r.explosive){const E=o.fuse>0?7:Wy;if(p&&f<=E&&Ca(t,_,p)){if(o.fuse++,l=0,c=0,o.fuse>=Xy)return a.push({kind:"explode",pos:{...o.pos},radius:qy,damage:r.attack??43}),a.push({kind:"death",pos:{...o.pos}}),{mob:o,events:a}}else o.fuse=Math.max(0,o.fuse-1)}else p&&f<=ky&&o.atkCd<=0&&Ca(t,_,p)&&(a.push({kind:"attackPlayer",damage:r.attack??2}),o.atkCd=Fy);if((l!==0||c!==0)&&o.onGround){const E=.5+r.width/2,y=Math.floor(o.pos.x+l*E),P=Math.floor(o.pos.z+c*E),Y=Math.floor(o.pos.y);!t.isSolid(y,Y-1,P)&&!t.isSolid(y,Y-2,P)&&(l=0,c=0,o.ai.target=null)}let m=!1;if(l!==0||c!==0){const E=Math.hypot(l,c)||1,y=Math.floor(o.pos.x+l/E*(r.width/2+.3)),P=Math.floor(o.pos.z+c/E*(r.width/2+.3)),Y=Math.floor(o.pos.y);t.isSolid(y,Y,P)&&!t.isSolid(y,Y+1,P)&&(m=!0)}const x=m&&o.onGround,v=(o.kbx??0)*.8,w=(o.kbz??0)*.8;if(o.kbx=Math.abs(v)<.01?0:v,o.kbz=Math.abs(w)<.01?0:w,o.vel.x=l*h+(o.kbx??0),o.vel.z=c*h+(o.kbz??0),((C=t.isWater)==null?void 0:C.call(t,Math.floor(o.pos.x),Math.floor(o.pos.y),Math.floor(o.pos.z)))??!1){const E=((z=t.isWater)==null?void 0:z.call(t,Math.floor(o.pos.x),Math.floor(o.pos.y)+1,Math.floor(o.pos.z)))??!1;m?o.vel.y=Vs:o.vel.y=E?Math.min((o.vel.y+Yy)*jh,$y):Math.min(o.vel.y*jh,0)}else o.vel.y=(o.vel.y-ao)*lo,x&&(o.vel.y=Vs);const A=lf(o.pos,r.width,r.height,o.vel,t);return o.pos=A.pos,o.vel=A.vel,o.onGround=A.onGround,o.onGround&&o.vel.y<0&&(o.vel.y=0),(Math.abs(o.vel.x)>1e-4||Math.abs(o.vel.z)>1e-4)&&(o.yaw=Math.atan2(o.vel.z,o.vel.x)),g&&(o.yaw=Math.atan2(g.z-o.pos.z,g.x-o.pos.x)),s&&!r.sunImmune&&(o.health-=Oy),o.health<=0&&(a.push({kind:"drops",items:hf(o.kind,e),pos:{...o.pos}}),a.push({kind:"death",pos:{...o.pos}})),{mob:o,events:a}}const jy=14;function Jy(i,t){return t<.4?i==="desert"?"husk":"zombie":t<.75?"skeleton":"creeper"}function Qy(i,t,e,n){return!(i.getBlock(t,e-1,n)!==vd||ge(i.getBlock(t,e,n))||ge(i.getBlock(t,e+1,n)))}function Jh(i,t,e,n,s,r,o=24,a=44,l=null,c=Math.PI){for(let h=0;h<12;h++){const u=l===null?n()*Math.PI*2:l+(n()*2-1)*c,d=o+n()*(a-o),f=Math.floor(t+Math.cos(u)*d),g=Math.floor(e+Math.sin(u)*d),_=r(f,g);if(s.getBlock(f,_,g)===vd)return nS(i,f+.5,_+1,g+.5,n,s)}return[]}function cl(i,t,e,n){return!(!ge(i.getBlock(t,e-1,n))||ge(i.getBlock(t,e,n))||ge(i.getBlock(t,e+1,n)))}function df(i,t,e,n){const s=jy-1;for(let r=-s;r<=s;r++){const o=s-Math.abs(r);for(let a=-o;a<=o;a++){const l=o-Math.abs(a);for(let c=-l;c<=l;c++)if(i.getBlock(t+c,e+r,n+a)===Qi)return!1}}return!0}function tS(i,t,e,n,s,r,o=16,a=32,l){for(let c=0;c<14;c++){const h=n()*Math.PI*2,u=o+n()*(a-o),d=Math.floor(t+Math.cos(h)*u),f=Math.floor(e+Math.sin(h)*u),g=r(d,f);if(l?l(d,g+1,f)>7:!df(s,d,g+1,f))continue;const _=[],p=1+Math.floor(n()*3);for(let m=0;m<p;m++){const x=d+Math.floor((n()*2-1)*2),v=f+Math.floor((n()*2-1)*2),w=r(x,v);cl(s,x,w+1,v)&&_.push(Ao(i,x+.5,w+1,v+.5))}if(_.length)return _}return[]}function eS(i,t,e,n,s,r,o,a=5,l=24,c){for(let u=0;u<24;u++){const d=s()*Math.PI*2,f=a+s()*(l-a),g=Math.floor(t+Math.cos(d)*f),_=Math.floor(n+Math.sin(d)*f),p=Math.min(Math.floor(e)+8,o(g,_)-5),m=Math.max(2,Math.floor(e)-14);for(let x=p;x>=m;x--){if(!cl(r,g,x,_)||(c?c(g,x,_)>7:!df(r,g,x,_)))continue;const v=[],w=1+Math.floor(s()*2);for(let k=0;k<w;k++){const A=g+Math.floor((s()*2-1)*2),C=_+Math.floor((s()*2-1)*2);for(let z=1;z>=-1;z--){const E=x+z;if(E<o(A,C)-5&&cl(r,A,E,C)){v.push(Ao(i,A+.5,E,C+.5));break}}}if(v.length)return v}}return[]}function nS(i,t,e,n,s,r){const o=[];for(let a=0;a<16&&o.length<4;a++){const l=Math.floor(t)+Math.floor((s()*2-1)*4),c=Math.floor(n)+Math.floor((s()*2-1)*4);for(let h=3;h>=-3;h--){const u=Math.floor(e)+h;if(Qy(r,l,u,c)){o.push(Ao(i,l+.5,u,c+.5));break}}}return o}function Qh(i){const t={kind:i.kind,x:i.pos.x,y:i.pos.y,z:i.pos.z,yaw:i.yaw,health:i.health};return i.kind==="chicken"&&(t.egg=i.eggTimer),t}function tu(i){const t=Ao(i.kind,i.x,i.y,i.z);return t.yaw=i.yaw,t.health=i.health,i.egg!==void 0&&(t.eggTimer=i.egg),t}function iS(i,t,e){if(e)return!1;const n=Math.floor(i.pos.x),s=Math.floor(i.pos.z),r=Math.floor(i.pos.y+Qn[i.kind].height);for(let o=Math.floor(i.pos.y);o<=r;o++)if(dn(t.getBlock(n,o,s)))return!1;for(let o=r+1;o<me;o++){const a=t.getBlock(n,o,s);if(ge(a)||dn(a))return!1}return!0}const eu=new Map;function Je(i){let t=i%2147483647;return t<=0&&(t+=2147483646),()=>(t=t*16807%2147483647)/2147483647}function ff(i,t){let e=eu.get(i);if(e)return e;const n=16,s=document.createElement("canvas");s.width=s.height=n;const r=s.getContext("2d");return r&&t(r,n),e=new _s(s),e.magFilter=re,e.minFilter=re,e.colorSpace=se,eu.set(i,e),e}function sS(i,t,e){const n=(s,r,o,a=1,l=1)=>{t.fillStyle=s,t.fillRect(r,o,a,l)};if(i==="pig"){n("#e7a39d",0,0,e,e);const s=Je(11);for(let r=0;r<14;r++)n(s()>.5?"#dd9890":"#efb0aa",Math.floor(s()*e),Math.floor(s()*e));n("#d98c8c",0,e-2,e,2)}else if(i==="cow"){n("#5b4636",0,0,e,e),t.fillStyle="#e7ddcd";for(const[r,o,a,l]of[[2,2,5,4],[9,7,6,5],[3,10,4,4],[12,1,3,4],[7,4,2,2]])t.fillRect(r,o,a,l);const s=Je(23);for(let r=0;r<6;r++)n("#4a3a2c",Math.floor(s()*e),Math.floor(s()*e))}else if(i==="sheep"){n("#ece9e1",0,0,e,e);const s=Je(31);for(let r=0;r<30;r++)n(s()>.55?"#dcd8cc":"#f7f5ef",Math.floor(s()*e),Math.floor(s()*e),2,2)}else if(i==="zombie"){n("#2f6a6a",0,0,e,e);const s=Je(51);for(let r=0;r<12;r++)n(s()>.5?"#234e4e":"#356f6f",Math.floor(s()*e),Math.floor(s()*e),1+Math.floor(s()*2),1+Math.floor(s()*2));n("#5a8f4a",4,9,3,3),n("#4f7e42",5,10,1,1);for(let r=0;r<e;r++)Je(90+r)()>.45&&n("#264f4f",r,e-1,1,1)}else if(i==="skeleton"){n("#d8d8cc",0,0,e,e),n("#c6c6b8",7,1,2,e-2);for(const s of[3,6,9,12])n("#9c9c8e",1,s,6,1),n("#9c9c8e",9,s,6,1),n("#84847a",1,s+1,6,1),n("#84847a",9,s+1,6,1)}else if(i==="husk"){n("#c2b280",0,0,e,e);const s=Je(57);for(let r=0;r<12;r++)n(s()>.5?"#a89660":"#d4c898",Math.floor(s()*e),Math.floor(s()*e),1+Math.floor(s()*2),1+Math.floor(s()*2));n("#8b7340",4,9,3,3),n("#7a6535",5,10,1,1);for(let r=0;r<e;r++)Je(95+r)()>.45&&n("#9b8050",r,e-1,1,1)}else if(i==="creeper"){n("#5fa044",0,0,e,e);const s=Je(81);for(let r=0;r<22;r++)n(s()>.5?"#4d8a36":"#6fb050",Math.floor(s()*e),Math.floor(s()*e),1,1+Math.floor(s()*2))}else{n("#f1f1f1",0,0,e,e);const s=Je(41);for(let r=0;r<10;r++)n("#e0e0e0",Math.floor(s()*e),Math.floor(s()*e),1,2);n("#dadada",0,e-2,e,2)}}function rS(i,t,e){const n=(s,r,o,a=1,l=1)=>{t.fillStyle=s,t.fillRect(r,o,a,l)};if(i==="zombie"){n("#5a8f4a",0,0,e,e);const s=Je(61);for(let r=0;r<18;r++)n(s()>.5?"#4c7a3e":"#6aa055",Math.floor(s()*e),Math.floor(s()*e));n("#3f6a34",0,e-2,e,2)}else if(i==="husk"){n("#b8a060",0,0,e,e);const s=Je(67);for(let r=0;r<18;r++)n(s()>.5?"#9a8448":"#ceb878",Math.floor(s()*e),Math.floor(s()*e));n("#7a6535",0,e-2,e,2)}else{n("#dcdcd0",0,0,e,e);const s=Je(71);for(let r=0;r<9;r++)n("#bdbdb0",Math.floor(s()*e),Math.floor(s()*e),1,1+Math.floor(s()*2))}}function oS(i){return ff("b-"+i,(t,e)=>sS(i,t,e))}function Ra(i){return i!=="zombie"&&i!=="skeleton"&&i!=="husk"?null:ff("h-"+i,(t,e)=>rS(i,t,e))}function aS(i,t=30){if(i<=0)return{whiteness:0,swell:1};const e=Math.min(1,i/t+.3*Math.abs(Math.sin(i*.7)));return{whiteness:e,swell:1+.5*e}}const lS=[.8,.8,1,.42,.8,.8],He=1315860,cS=3.4;function hS(i,t,e,n){const s=new We(i,t,e),r=new Ut(n),o=[];for(let a=0;a<6;a++){const l=lS[a];for(let c=0;c<4;c++)o.push(r.r*l,r.g*l,r.b*l)}return s.setAttribute("color",new we(o,3)),s}function zs(i,t,e,n,s,r,o,a,l){const c=new $t(hS(e,n,s,r),t);return c.position.set(o,a,l),i.add(c),c}function Xn(i,t,e,n,s,r,o,a,l){const c=new In;c.position.set(s,o,r),zs(c,t,a,o,a,n,0,-o/2,0),l!==void 0&&zs(c,t,a+.02,.06,a+.02,l,0,-o+.03,0),i.add(c),e.push(c)}function uS(i){const t=new In,e=[],n=new ue({vertexColors:!0}),s=new ue({map:oS(i),vertexColors:!0}),r=[n,s],o=(_,p,m,x,v,w,k)=>zs(t,n,_,p,m,x,v,w,k),a=(_,p,m,x,v,w)=>zs(t,s,_,p,m,16777215,x,v,w),l=(_,p,m,x,v,w,k)=>{const A=new ue({map:_,vertexColors:!0});return r.push(A),zs(t,A,p,m,x,16777215,v,w,k)};let c,h;if(i==="pig"){a(.9,.5,.6,0,.26+.25,0),c=o(.42,.44,.5,15378080,.55,.26+.28,0),o(.16,.16,.3,14257292,.78,.26+.2,0),o(.05,.09,.08,He,.77,.26+.36,.14),o(.05,.09,.08,He,.77,.26+.36,-.14),o(.14,.12,.04,14257292,.5,.26+.52,.2),o(.14,.12,.04,14257292,.5,.26+.52,-.2),h=o(.1,.1,.1,14257292,-.46,.26+.36,0);for(const[x,v]of[[.3,.2],[.3,-.2],[-.32,.2],[-.32,-.2]])Xn(t,n,e,14257292,x,v,.26,.16)}else if(i==="cow"){a(1,.6,.62,0,.52+.3,0),c=o(.42,.46,.5,5192493,.6,.52+.38,0),o(.3,.28,.52,15195597,.72,.52+.3,0),o(.16,.18,.42,7297605,.84,.52+.28,0),o(.05,.1,.09,He,.82,.52+.46,.16),o(.05,.1,.09,He,.82,.52+.46,-.16),o(.1,.13,.1,14471352,.6,.52+.66,.2),o(.1,.13,.1,14471352,.6,.52+.66,-.2),o(.16,.1,.34,15709892,-.18,.52-.02,0),h=o(.1,.12,.1,5192493,-.5,.52+.4,0);for(const[v,w]of[[.34,.21],[.34,-.21],[-.34,.21],[-.34,-.21]])Xn(t,n,e,5192493,v,w,.52,.18,15195597)}else if(i==="sheep"){a(.9,.66,.74,0,.46+.34,0),o(.5,.34,.42,15526627,.4,.46+.6,0),c=o(.28,.36,.34,4669498,.56,.46+.36,0),o(.04,.08,.07,He,.71,.46+.4,.11),o(.04,.08,.07,He,.71,.46+.4,-.11),o(.1,.1,.04,4669498,.52,.46+.56,.18),o(.1,.1,.04,4669498,.52,.46+.56,-.18);for(const[x,v]of[[.28,.22],[.28,-.22],[-.3,.22],[-.3,-.22]])Xn(t,n,e,4669498,x,v,.46,.15)}else if(i==="zombie"){a(.5,.66,.28,0,.82+.33,0),c=l(Ra("zombie"),.44,.44,.44,0,.82+.88,0),o(.07,.1,.08,He,.22,.82+.94,.11),o(.07,.1,.08,He,.22,.82+.94,-.11),o(.06,.05,.22,3298858,.22,.82+.8,0),o(.6,.18,.18,5934922,.34,.82+.56,.3),o(.6,.18,.18,5934922,.34,.82+.56,-.3);for(const[x,v]of[[0,.12],[0,-.12]])Xn(t,n,e,2764629,x,v,.82,.2)}else if(i==="skeleton"){a(.32,.6,.2,0,.84+.3,0),c=l(Ra("skeleton"),.42,.42,.42,0,.84+.81,0),o(.07,.09,.08,He,.21,.84+.87,.1),o(.07,.09,.08,He,.21,.84+.87,-.1),o(.05,.05,.06,9079422,.22,.84+.79,0),o(.05,.05,.22,8026736,.21,.84+.72,0),o(.46,.13,.13,14211276,.26,.84+.34,.16),o(.1,.58,.1,14211276,0,.84+.3,-.22);const m=7031339;o(.06,.62,.06,m,.52,.84+.32,.16),o(.06,.14,.06,m,.47,.84+.62,.16),o(.06,.14,.06,m,.47,.84+.02,.16),o(.02,.6,.02,15394520,.55,.84+.32,.16);for(const[x,v]of[[0,.1],[0,-.1]])Xn(t,n,e,14211276,x,v,.84,.12)}else if(i==="husk"){a(.5,.66,.28,0,.82+.33,0),c=l(Ra("husk"),.44,.44,.44,0,.82+.88,0),o(.07,.1,.08,He,.22,.82+.94,.11),o(.07,.1,.08,He,.22,.82+.94,-.11),o(.06,.05,.22,5916704,.22,.82+.8,0),o(.6,.18,.18,12099680,.34,.82+.56,.3),o(.6,.18,.18,12099680,.34,.82+.56,-.3);for(const[x,v]of[[0,.12],[0,-.12]])Xn(t,n,e,8021301,x,v,.82,.2)}else if(i==="creeper"){a(.5,.82,.32,0,.36+.5,0),c=o(.46,.46,.46,6266948,0,.36+1.12,0);const x=855309;o(.06,.14,.13,x,.22,.36+1.18,.11),o(.06,.14,.13,x,.22,.36+1.18,-.11),o(.06,.16,.1,x,.22,.36+1.06,0),o(.06,.1,.1,x,.22,.36+.98,.1),o(.06,.1,.1,x,.22,.36+.98,-.1);for(const[v,w]of[[.16,.13],[.16,-.13],[-.16,.13],[-.16,-.13]])Xn(t,n,e,4160046,v,w,.36,.16)}else{a(.34,.34,.3,-.02,.22+.17,0),o(.32,.24,.06,15921906,-.18,.22+.2,.16),o(.32,.24,.06,15921906,-.18,.22+.2,-.16),h=o(.18,.26,.16,15921906,-.34,.22+.34,0),c=o(.22,.24,.2,15921906,.2,.22+.4,0),o(.04,.06,.05,He,.31,.22+.46,.07),o(.04,.06,.05,He,.31,.22+.46,-.07),o(.13,.08,.1,15176991,.36,.22+.4,0),o(.05,.1,.14,13384496,.18,.22+.55,0),o(.06,.08,.06,13384496,.32,.22+.32,0);for(const[v,w]of[[.06,.09],[.06,-.09]])Xn(t,n,e,15176991,v,w,.22,.07)}const u=.9+Math.random()*.22;t.scale.setScalar(u);const d=.9+Math.random()*.16,f=(Math.random()-.5)*.06,g=new Ut(Math.min(1,d+f),d,Math.max(0,d-f));return{group:t,legs:e,mats:r,base:g,head:c,tail:h,headY:c?c.position.y:0}}const dS=new Ut(16734810),fS=new Ut(1,1,1);class pS{constructor(t){b(this,"models",new Map);this.scene=t}sync(t,e,n){const s=new Set(t);for(const[r,o]of this.models)s.has(r)||(this.scene.remove(o.group),this.models.delete(r));for(const r of t){let o=this.models.get(r);if(!o){const g=uS(r.kind);this.scene.add(g.group),o={...g,phase:0,t:Math.random()*10,baseScale:g.group.scale.x,bright:1,dispYaw:r.yaw,swingAmt:0},this.models.set(r,o)}o.t+=e;let a=-r.yaw-o.dispYaw;a=((a+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,o.dispYaw+=a*Math.min(1,e*10),o.group.rotation.y=o.dispYaw,o.group.rotation.z=Math.max(-.18,Math.min(.22,-r.vel.y*2.2));const l=n?n(r.pos.x,r.pos.y+.6,r.pos.z):1;o.bright+=(l-o.bright)*Math.min(1,e*10);const c=r.hurtCooldown>0?dS:o.base;for(const g of o.mats)g.color.copy(c).multiplyScalar(o.bright);const h=aS(r.kind==="creeper"?r.fuse:0);if(h.whiteness>0){const g=c.clone().lerp(fS,h.whiteness);for(const _ of o.mats)_.color.copy(g).multiplyScalar(o.bright)}o.group.scale.setScalar(o.baseScale*h.swell);const u=Math.hypot(r.vel.x,r.vel.z),d=u>.002;d&&(o.phase+=u*20*e*cS),o.swingAmt+=((d?1:0)-o.swingAmt)*Math.min(1,e*8);const f=Math.sin(o.phase)*.6*o.swingAmt;if(o.legs.forEach((g,_)=>g.rotation.z=_%2===0?f:-f),o.group.position.set(r.pos.x,r.pos.y+Math.abs(Math.sin(o.phase))*.035*o.swingAmt,r.pos.z),o.head)if(d)o.head.position.y=o.headY+Math.sin(o.phase*2)*.015,o.head.rotation.z=Math.sin(o.phase)*.05;else if(r.kind==="chicken"){const g=Math.max(0,Math.sin(o.t*1.6));o.head.rotation.z=-g*.5,o.head.position.y=o.headY-g*.04}else o.head.position.y=o.headY+Math.sin(o.t*1.4)*.012,o.head.rotation.z=0,o.head.rotation.y=Math.sin(o.t*.55)*.4*(1-o.swingAmt);o.tail&&(o.tail.rotation.z=Math.sin(o.t*4+o.phase)*.3)}}clear(){for(const[,t]of this.models)this.scene.remove(t.group);this.models.clear()}}function mS(i){let t=i>>>0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const ui=8,nu=1,Pa=4,Br=[[1,0],[-1,0],[0,1],[0,-1]],La={amount:0,source:!1,falling:!1},Ps=(i,t,e)=>`${i},${t},${e}`;class gS{constructor(t=4e3){b(this,"active",new Set);b(this,"maxPerTick");this.maxPerTick=t}get activeCount(){return this.active.size}activate(t,e,n){this.active.add(Ps(t,e,n));for(const[s,r]of Br)this.active.add(Ps(t+s,e,n+r));this.active.add(Ps(t,e+1,n)),this.active.add(Ps(t,e-1,n))}tick(t){if(this.active.size===0)return;const e=[...this.active];this.active.clear();const n=new Map,s=(o,a,l,c)=>{const h=Ps(o,a,l),u=n.get(h);(!u||c.amount>u.c.amount||c.amount===u.c.amount&&c.source&&!u.c.source)&&n.set(h,{x:o,y:a,z:l,c})};let r=this.maxPerTick;for(const o of e){if(r--<=0){this.active.add(o);continue}const[a,l,c]=o.split(",").map(Number);this.evaluate(t,a,l,c,s)}for(const{x:o,y:a,z:l,c}of n.values())(c.amount!==t.amount(o,a,l)||c.source!==t.isSource(o,a,l)||c.falling!==t.isFalling(o,a,l))&&(t.setWater(o,a,l,c.amount,c.source,c.falling),this.activate(o,a,l))}evaluate(t,e,n,s,r){if(t.isSolid(e,n,s)){t.amount(e,n,s)>0&&r(e,n,s,La);return}if(!(t.amount(e,n,s)>0||t.isSource(e,n,s)))return;if(t.amount(e,n,s)>0&&!t.isSource(e,n,s)){const l=[[e+1,n,s],[e-1,n,s],[e,n,s+1],[e,n,s-1],[e,n+1,s],[e,n-1,s]];for(const[c,h,u]of l)if(t.getBlock(c,h,u)===23){t.setBlock(c,h,u,18),r(e,n,s,La);return}}const a=t.isSource(e,n,s)?{amount:ui,source:!0,falling:!1}:this.getNewLiquid(t,e,n,s);r(e,n,s,a),a.amount>0&&this.spread(t,e,n,s,a,r)}getNewLiquid(t,e,n,s){if(t.amount(e,n+1,s)>0)return{amount:ui,source:!1,falling:!0};let r=0,o=0;for(const[l,c]of Br){const h=t.amount(e+l,n,s+c);h>0&&(h>r&&(r=h),t.isSource(e+l,n,s+c)&&o++)}if(o>=2&&(t.isSolid(e,n-1,s)||t.isSource(e,n-1,s)))return{amount:ui,source:!0,falling:!1};const a=r-nu;return a>0?{amount:a,source:!1,falling:!1}:La}spread(t,e,n,s,r,o){const a=n-1,l=t.amount(e,a,s)===ui&&!t.isFalling(e,a,s);if(!t.isSolid(e,a,s)&&!l){(t.getBlock(e,a,s)===0||t.amount(e,a,s)>0)&&o(e,a,s,{amount:ui,source:!1,falling:!0});return}if(!r.source&&!t.isSolid(e,a,s))return;const c=r.source?ui:r.amount,h=c-nu;if(!(h<1))for(const[u,d]of this.getSpreadDirs(t,e,n,s,c)){const f=e+u,g=s+d;t.isSolid(f,n,g)||t.isSource(f,n,g)||t.getBlock(f,n,g)!==0&&t.amount(f,n,g)===0||t.amount(f,n,g)>=h||o(f,n,g,{amount:h,source:!1,falling:!1})}}getSpreadDirs(t,e,n,s,r){let o=Pa+1;const a=[];for(const l of Br){const c=e+l[0],h=s+l[1];if(t.isSolid(c,n,h)||t.amount(c,n,h)>=r)continue;const u=this.isHole(t,c,n,h)?0:this.slopeDistance(t,c,n,h,1,[-l[0],-l[1]]);u<o?(o=u,a.length=0,a.push(l)):u===o&&a.push(l)}return a}isHole(t,e,n,s){return!t.isSolid(e,n-1,s)&&t.amount(e,n-1,s)<ui}slopeDistance(t,e,n,s,r,o){let a=Pa;for(const l of Br){if(l[0]===o[0]&&l[1]===o[1])continue;const c=e+l[0],h=s+l[1];if(!t.isSolid(c,n,h)){if(this.isHole(t,c,n,h))return r;if(r<Pa){const u=this.slopeDistance(t,c,n,h,r+1,[-l[0],-l[1]]);u<a&&(a=u)}}}return a}}function _S(i,t,e=240){let n=0;for(;i.activeCount>0&&n<e;)i.tick(t),n++;return n}function iu(i,t,e){let n=0;for(let s=e.minY;s<=e.maxY;s++)for(let r=e.minX;r<=e.maxX;r++)for(let o=e.minZ;o<=e.maxZ;o++)t.isWater(r,s,o)&&(t.isAir(r,s-1,o)||t.isAir(r+1,s,o)||t.isAir(r-1,s,o)||t.isAir(r,s,o+1)||t.isAir(r,s,o-1))&&(i.activate(r,s,o),n++);return n}function vS(i,t,e,n){const s=[];for(let r=i-e;r<=i+e;r++)for(let o=t-e;o<=t+e;o++){const a=`${r},${o}`;if(n.has(a))continue;const l=r-i,c=o-t;s.push({key:a,d:l*l+c*c})}return s.sort((r,o)=>r.d-o.d),s.map(r=>r.key)}const xS=9,MS=27,pf=xS+MS,mf=64;function Pl(){return Array.from({length:pf},()=>null)}function us(i,t,e,n=mf,s=0,r=i.length){for(let o=s;o<r&&e>0;o++){const a=i[o];if(a&&a.id===t&&a.count<n){const l=Math.min(n-a.count,e);a.count+=l,e-=l}}for(let o=s;o<r&&e>0;o++)if(!i[o]){const a=Math.min(n,e);i[o]={id:t,count:a},e-=a}return e}function yS(i,t,e){for(let n=0;n<i.length;n++)if(!i[n])return i[n]={id:t,count:1,dur:e},!0;return!1}function SS(i,t){let e=0;for(const n of i)n&&n.id===t&&(e+=n.count);return e}function ES(i,t,e){let n=e;for(let s=0;s<i.length&&n>0;s++){const r=i[s];if(r&&r.id===t){const o=Math.min(r.count,n);r.count-=o,n-=o,r.count<=0&&(i[s]=null)}}return e-n}function su(i,t){const e=i[t];if(!e||e.count<=0)return null;e.count--;const n=e.id;return e.count<=0&&(i[t]=null),n}function bS(i){return i.map(t=>t?{id:t.id,count:t.count,dur:t.dur}:null)}function wS(i){const t=Pl();if(!Array.isArray(i))return t;for(let e=0;e<pf;e++){const n=i[e];if(n&&typeof n.id=="number"&&typeof n.count=="number"&&n.count>0){const s={id:n.id,count:Math.min(mf,n.count)};typeof n.dur=="number"&&(s.dur=n.dur),t[e]=s}}return t}function ru(i,t,e){const n=i[t];if(!n)return!1;const s=(n.dur??e)-1;return s<=0?(i[t]=null,!0):(n.dur=s,!1)}const tn=new Set,TS=300;let ou=-1/0,Ll=!1,hl=!1;window.addEventListener("keydown",i=>{if(i.code==="KeyW"&&!tn.has("KeyW")){const t=performance.now();t-ou<TS&&(Ll=!0),ou=t}i.code==="Space"&&!tn.has("Space")&&(hl=!0),tn.add(i.code)});window.addEventListener("keyup",i=>{tn.delete(i.code),i.code==="KeyW"&&(Ll=!1)});function AS(){let i=0,t=0;tn.has("KeyW")&&(i+=1),tn.has("KeyS")&&(i-=1),tn.has("KeyD")&&(t+=1),tn.has("KeyA")&&(t-=1);const e=tn.has("ShiftLeft")||tn.has("ShiftRight")||tn.has("KeyC");return{forward:i,right:t,sprint:Ll&&i>0&&!e,jumpHeld:tn.has("Space"),crouch:e}}function CS(){const i=hl;return hl=!1,i}const au=.0025,lu=1.55;class RS{constructor(t,e=!0){b(this,"yaw",0);b(this,"pitch",0);e&&t.addEventListener("click",()=>void t.requestPointerLock()),document.addEventListener("mousemove",n=>{document.pointerLockElement===t&&this.rotate(n.movementX*au,-n.movementY*au)})}rotate(t,e){this.yaw+=t,this.pitch=Math.max(-lu,Math.min(lu,this.pitch+e))}}const cu=.004,PS=.12;function LS(i,t,e){const n=Math.max(1,e),s=Math.min(1,Math.hypot(i,t)/n);if(s<PS)return{x:0,y:0,strength:0};const r=s/(Math.hypot(i,t)||1);return{x:i*r,y:-t*r,strength:s}}function gf(){return new URLSearchParams(window.location.search).get("touch")==="1"?!0:navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches}let hu=!1;function DS(){if(hu)return;hu=!0;const i=r=>r.preventDefault();document.addEventListener("gesturestart",i,{passive:!1}),document.addEventListener("gesturechange",i,{passive:!1}),document.addEventListener("gestureend",i,{passive:!1}),document.addEventListener("dblclick",i,{passive:!1}),document.addEventListener("touchmove",r=>{r.touches.length>1&&r.preventDefault()},{passive:!1});let t=-1/0,e=null,n=0,s=0;document.addEventListener("touchend",r=>{const o=performance.now(),a=r.changedTouches[0],l=a!==void 0&&Math.hypot(a.clientX-n,a.clientY-s)<28;o-t<320&&r.target===e&&l&&r.preventDefault(),t=o,e=r.target,a&&(n=a.clientX,s=a.clientY)},{passive:!1})}class IS{constructor(t,e){b(this,"root");b(this,"stick");b(this,"knob");b(this,"actions");b(this,"stickPointer",null);b(this,"lookPointer",null);b(this,"lookX",0);b(this,"lookY",0);b(this,"forward",0);b(this,"right",0);b(this,"strength",0);b(this,"jumpHeld",!1);b(this,"crouchHeld",!1);b(this,"pendingJump",!1);b(this,"active",!1);b(this,"releaseHolds",[]);this.root=t,this.actions=e,this.stick=t.querySelector(".touch-stick"),this.knob=t.querySelector(".touch-stick-knob");const n=t.querySelector(".touch-look");this.stick.addEventListener("pointerdown",o=>{!this.active||this.stickPointer!==null||(o.preventDefault(),this.stickPointer=o.pointerId,this.stick.setPointerCapture(o.pointerId),this.updateStick(o))}),this.stick.addEventListener("pointermove",o=>{o.pointerId===this.stickPointer&&this.updateStick(o)});const s=o=>{o.pointerId===this.stickPointer&&(this.stickPointer=null,this.forward=0,this.right=0,this.strength=0,this.knob.style.transform="translate3d(0,0,0)")};this.stick.addEventListener("pointerup",s),this.stick.addEventListener("pointercancel",s),n.addEventListener("pointerdown",o=>{!this.active||this.lookPointer!==null||(o.preventDefault(),this.lookPointer=o.pointerId,this.lookX=o.clientX,this.lookY=o.clientY,n.setPointerCapture(o.pointerId))}),n.addEventListener("pointermove",o=>{if(o.pointerId!==this.lookPointer)return;o.preventDefault();const a=o.clientX-this.lookX,l=o.clientY-this.lookY;this.lookX=o.clientX,this.lookY=o.clientY,this.actions.look(a*cu,-l*cu)});const r=o=>{o.pointerId===this.lookPointer&&(this.lookPointer=null)};n.addEventListener("pointerup",r),n.addEventListener("pointercancel",r),this.bindHold("touch-jump",()=>{this.jumpHeld||(this.pendingJump=!0),this.jumpHeld=!0},()=>this.jumpHeld=!1),this.bindHold("touch-crouch",()=>this.crouchHeld=!0,()=>this.crouchHeld=!1),this.bindHold("touch-mine",()=>this.actions.primaryDown(),()=>this.actions.primaryUp()),this.bindHold("touch-use",()=>this.actions.useDown(),()=>this.actions.useUp(),()=>this.actions.cancelUse()),this.bindTap("touch-inventory",()=>this.actions.inventory()),this.bindTap("touch-pause",()=>this.actions.pause())}setActive(t){this.active=t,this.root.classList.toggle("active",t),this.root.setAttribute("aria-hidden",String(!t)),t||this.reset()}get isActive(){return this.active}readMove(){return{forward:this.forward,right:this.right,sprint:this.forward>.82&&this.strength>.9&&!this.crouchHeld,jumpHeld:this.jumpHeld,crouch:this.crouchHeld}}consumeJump(){const t=this.pendingJump;return this.pendingJump=!1,t}updateStick(t){t.preventDefault();const e=this.stick.getBoundingClientRect(),n=e.width*.36,s=t.clientX-(e.left+e.width/2),r=t.clientY-(e.top+e.height/2),o=LS(s,r,n);this.right=o.x,this.forward=o.y,this.strength=o.strength,this.knob.style.transform=`translate3d(${o.x*n}px,${-o.y*n}px,0)`}bindHold(t,e,n,s=n){const r=document.getElementById(t);let o=null;r.addEventListener("pointerdown",c=>{!this.active||o!==null||(c.preventDefault(),c.stopPropagation(),o=c.pointerId,r.setPointerCapture(c.pointerId),r.classList.add("pressed"),e())});const a=c=>{o!==null&&(o=null,r.classList.remove("pressed"),c())},l=c=>{c.pointerId===o&&a(n)};r.addEventListener("pointerup",l),r.addEventListener("pointercancel",l),this.releaseHolds.push(()=>a(s))}bindTap(t,e){document.getElementById(t).addEventListener("pointerdown",s=>{this.active&&(s.preventDefault(),s.stopPropagation(),e())})}reset(){this.stickPointer=null,this.lookPointer=null,this.forward=0,this.right=0,this.strength=0,this.jumpHeld=!1,this.crouchHeld=!1,this.pendingJump=!1,this.knob.style.transform="translate3d(0,0,0)";for(const t of this.releaseHolds)t()}}class US{constructor(t,e=9){b(this,"icons",[]);b(this,"counts",[]);b(this,"cells",[]);b(this,"durTracks",[]);b(this,"durFills",[]);b(this,"selected",0);b(this,"size");this.size=e,t.innerHTML="";for(let n=0;n<e;n++){const s=document.createElement("div");s.className="hotbar-slot",s.style.position="relative";const r=document.createElement("div");r.className="hotbar-icon";const o=document.createElement("div");o.className="hotbar-count";const a=document.createElement("div");a.style.cssText="position:absolute;left:12%;right:12%;bottom:9%;height:3px;background:rgba(0,0,0,.55);border-radius:1px;display:none;overflow:hidden;";const l=document.createElement("div");l.style.cssText="height:100%;width:100%;",a.appendChild(l),s.append(r,o,a),s.addEventListener("pointerdown",c=>{c.pointerType!=="mouse"&&(c.preventDefault(),c.stopPropagation(),this.setSelected(n))}),t.appendChild(s),this.cells.push(s),this.icons.push(r),this.counts.push(o),this.durTracks.push(a),this.durFills.push(l)}this.setSelected(0)}render(t){var e;for(let n=0;n<this.size;n++){const s=t[n]??null,r=this.icons[n],o=this.counts[n];if(s&&s.count>0){const l=Si(s.id);r.style.backgroundImage=l?`url(${l})`:"none",o.textContent=s.count>1?String(s.count):""}else r.style.backgroundImage="none",o.textContent="";const a=s&&s.count>0?(e=Os(s.id))==null?void 0:e.maxDurability:void 0;if(s&&a&&(s.dur??a)<a){const l=Math.max(0,(s.dur??a)/a);this.durTracks[n].style.display="block",this.durFills[n].style.width=`${l*100}%`,this.durFills[n].style.background=`hsl(${Math.round(l*120)},85%,45%)`}else this.durTracks[n].style.display="none"}}setSelected(t){this.selected=(t%this.size+this.size)%this.size,this.cells.forEach((e,n)=>e.classList.toggle("selected",n===this.selected))}scroll(t){this.setSelected(this.selected+t)}get index(){return this.selected}}const Us=20,Ws=20,Dl=10,NS=1,uu=6,du=80,kS=10,FS=30,OS=20;function Da(){return{health:Us,food:Ws,saturation:5,exhaustion:0,foodTimer:0,oxygen:Dl,oxygenTimer:0}}function _i(i,t){i.exhaustion=Math.min(i.exhaustion+t,40)}function uo(i,t){i.health=Math.max(0,i.health-t)}function Ia(i){return i.health<=0}function zS(i,t){i.food=Math.min(Ws,i.food+t.nutrition),i.saturation=Math.min(i.saturation+t.nutrition*t.saturationModifier*2,i.food)}function BS(i){return Math.max(0,Math.ceil(i-3))}function HS(i,t,e,n){return n?{fallDistance:0,damage:0}:e?{fallDistance:0,damage:BS(i)}:{fallDistance:t<0?i-t:i,damage:0}}function GS(i){i.exhaustion>4&&(i.exhaustion-=4,i.saturation>0?i.saturation=Math.max(0,i.saturation-1):i.food=Math.max(0,i.food-1)),i.food>=Ws&&i.saturation>0&&i.health<Us?++i.foodTimer>=kS&&(i.health=Math.min(Us,i.health+1),_i(i,uu),i.foodTimer=0):i.food>=18&&i.health<Us?++i.foodTimer>=du&&(i.health=Math.min(Us,i.health+1),_i(i,uu),i.foodTimer=0):i.food<=0?++i.foodTimer>=du&&(i.health>NS&&uo(i,1),i.foodTimer=0):i.foodTimer=0}function VS(i,t){if(!t){i.oxygen=Dl,i.oxygenTimer=0;return}i.oxygenTimer++,i.oxygen>0?i.oxygenTimer>=FS&&(i.oxygen=Math.max(0,i.oxygen-1),i.oxygenTimer=0):i.oxygenTimer>=OS&&(uo(i,2),i.oxygenTimer=0)}const fu=i=>`url(${xs(`textures/ui/${i}.png`)})`;class WS{constructor(t,e,n=10){b(this,"hearts");b(this,"foods");b(this,"bubbles",[]);b(this,"healthEl");b(this,"hungerEl");b(this,"oxygenEl");this.healthEl=t,this.hungerEl=e,this.oxygenEl=document.getElementById("oxygen"),this.hearts=this.build(t,n),this.foods=this.build(e,n),this.oxygenEl&&(this.bubbles=this.build(this.oxygenEl,n))}build(t,e){t.innerHTML="";const n=[];for(let s=0;s<e;s++){const r=document.createElement("div");r.className="hud-icon",t.appendChild(r),n.push(r)}return n}render(t){if(this.fill(this.hearts,t.health,"heart"),this.fill(this.foods,t.food,"food"),this.healthEl.classList.toggle("low",t.health<=4),this.hungerEl.classList.toggle("low",t.food<=4),this.oxygenEl){const e=t.oxygen<Dl;if(this.oxygenEl.style.display=e?"flex":"none",e)for(let n=0;n<this.bubbles.length;n++)this.bubbles[n].style.backgroundImage=fu(t.oxygen>n?"bubble_full":"bubble_empty")}}fill(t,e,n){for(let s=0;s<t.length;s++){const r=e-s*2,o=r>=2?"full":r===1?"half":"empty";t[s].style.backgroundImage=fu(`${n}_${o}`)}}}function fo(i,t,e,n){const s=i[t];if(!e)return i[t]=null,s;if(!s)return i[t]=e,null;if(s.id===e.id){const r=Math.max(0,n(s.id)-s.count),o=Math.min(r,e.count);return s.count+=o,e.count-=o,e.count>0?e:null}return i[t]=e,s}function po(i,t,e,n){const s=i[t];if(!e){if(!s)return null;const r=Math.ceil(s.count/2),o=s.count-r;return i[t]=o>0?{id:s.id,count:o}:null,{id:s.id,count:r}}return s?s.id===e.id?s.count<n(s.id)?(s.count+=1,e.count-=1,e.count>0?e:null):e:(i[t]=e,s):(i[t]={id:e.id,count:1},e.count-=1,e.count>0?e:null)}function Ua(i,t,e,n,s=0,r=e.length){const o=i[t];if(!o)return;const a=us(e,o.id,o.count,n(o.id),s,r);i[t]=a>0?{id:o.id,count:a}:null}function XS(i,t,e){if(!t)return t;const n=t.id,s=e(n),r=i.filter(c=>{const h=c.get();return!h||h.id===n&&h.count<s});if(r.length===0)return t;const o=Math.floor(t.count/r.length);if(o===0)return t;let a=0;for(const c of r){const h=c.get(),u=h?h.count:0,d=Math.min(o,s-u);d<=0||(c.set({id:n,count:u+d}),a+=d)}const l=t.count-a;return l>0?{id:n,count:l}:null}function qS(i,t,e){if(!t)return t;const n=t.id,s=e(n);let r=t.count;for(const o of i){if(r<=0)break;const a=o.get();a?a.id===n&&a.count<s&&(a.count+=1,r--):(o.set({id:n,count:1}),r--)}return r>0?{id:n,count:r}:null}const Na=["PPP"," S "," S "],ka=["PP","PS"," S"],Fa=["P","S","S"],Oa=["P","P","S"],za=["PP"," S"," S"];function ke(i,t,e){return{type:"shaped",pattern:i,key:{P:t,S:"stick"},result:{item:e,count:1}}}const YS=[{type:"shapeless",ingredients:["oak_log"],result:{item:"oak_planks",count:4}},{type:"shapeless",ingredients:["flint","iron_ingot"],result:{item:"flint_and_steel",count:1}},{type:"shaped",pattern:["#","#"],key:{"#":"oak_planks"},result:{item:"stick",count:4}},{type:"shaped",pattern:["##","##"],key:{"#":"oak_planks"},result:{item:"crafting_table",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"string"},result:{item:"wool",count:1}},{type:"shaped",pattern:["###","# #","###"],key:{"#":"cobblestone"},result:{item:"furnace",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"sand"},result:{item:"sandstone",count:1}},{type:"shaped",pattern:["##","##"],key:{"#":"nether_quartz"},result:{item:"quartz_block",count:1}},{type:"shaped",pattern:["###","###","###"],key:{"#":"coal"},result:{item:"coal_block",count:1}},{type:"shapeless",ingredients:["coal_block"],result:{item:"coal",count:9}},{type:"shaped",pattern:["###","###","###"],key:{"#":"iron_ingot"},result:{item:"iron_block",count:1}},{type:"shapeless",ingredients:["iron_block"],result:{item:"iron_ingot",count:9}},{type:"shaped",pattern:["C","S"],key:{C:"coal",S:"stick"},result:{item:"torch",count:4}},{type:"shaped",pattern:["F","S","E"],key:{F:"flint",S:"stick",E:"feather"},result:{item:"arrow",count:4}},{type:"shaped",pattern:[" TS","T S"," TS"],key:{T:"stick",S:"string"},result:{item:"bow",count:1}},ke(Na,"oak_planks","wooden_pickaxe"),ke(ka,"oak_planks","wooden_axe"),ke(Fa,"oak_planks","wooden_shovel"),ke(Oa,"oak_planks","wooden_sword"),ke(za,"oak_planks","wooden_hoe"),ke(Na,"cobblestone","stone_pickaxe"),ke(ka,"cobblestone","stone_axe"),ke(Fa,"cobblestone","stone_shovel"),ke(Oa,"cobblestone","stone_sword"),ke(za,"cobblestone","stone_hoe"),ke(Na,"iron_ingot","iron_pickaxe"),ke(ka,"iron_ingot","iron_axe"),ke(Fa,"iron_ingot","iron_shovel"),ke(Oa,"iron_ingot","iron_sword"),ke(za,"iron_ingot","iron_hoe")];function _f(i){return i&&i.count>=1?i.item:null}function $S(i){return i.map(t=>t.map(_f))}function KS(i){const t=[];for(const e of i)for(const n of e){const s=_f(n);s&&t.push(s)}return t}function vf(i){let t=1/0,e=-1,n=1/0,s=-1;for(let o=0;o<i.length;o++)for(let a=0;a<i[o].length;a++)i[o][a]!==null&&(o<t&&(t=o),o>e&&(e=o),a<n&&(n=a),a>s&&(s=a));if(e===-1)return null;const r=[];for(let o=t;o<=e;o++)r.push(i[o].slice(n,s+1));return r}function ZS(i){return i.pattern.map(t=>Array.from(t,e=>e===" "?null:i.key[e]??null))}function jS(i){return i.map(t=>[...t].reverse())}function pu(i,t){if(i.length!==t.length)return!1;for(let e=0;e<i.length;e++){if(i[e].length!==t[e].length)return!1;for(let n=0;n<i[e].length;n++)if(i[e][n]!==t[e][n])return!1}return!0}function JS(i,t){const e=vf(ZS(i));return e?pu(e,t)||pu(jS(e),t):!1}function mu(i){const t=new Map;for(const e of i)t.set(e,(t.get(e)??0)+1);return t}function QS(i,t){if(i.ingredients.length!==t.length)return!1;const e=mu(i.ingredients),n=mu(t);if(e.size!==n.size)return!1;for(const[s,r]of e)if(n.get(s)!==r)return!1;return!0}function t1(i){const t=KS(i);if(t.length===0)return null;const e=vf($S(i));for(const n of YS)if(n.type==="shaped"){if(e&&JS(n,e))return n}else if(QS(n,t))return n;return null}function e1(i){const t=t1(i);return t?{item:t.result.item,count:t.result.count}:null}const Il=new Map,Ul=new Map;for(const i of $e)i.id!==0&&(Il.set(i.id,i.name),Ul.set(i.name,i.id));for(const i of qM){const t=$M(i);t&&(Il.set(i,t),Ul.set(t,i))}function gu(i){const t=i.map(s=>s.map(r=>{if(!r)return null;const o=Il.get(r.id);return o?{item:o,count:r.count}:null})),e=e1(t);if(!e)return null;const n=Ul.get(e.item);return n==null?null:{id:n,count:e.count}}function n1(i){for(const t of i)for(let e=0;e<t.length;e++){const n=t[e];n&&(n.count-=1,n.count<=0&&(t[e]=null))}}const je=i=>ro(i),Tn=9,Ba=27;class i1{constructor(t){b(this,"root");b(this,"inv",null);b(this,"gridN",2);b(this,"craft",[]);b(this,"cursor",null);b(this,"open",!1);b(this,"cursorEl");b(this,"cursorIcon");b(this,"cursorCnt");b(this,"titleEl");b(this,"cgridEl");b(this,"outCell");b(this,"mainCells",[]);b(this,"hotbarCells",[]);b(this,"craftCells",[]);b(this,"drag",null);b(this,"onChange",null);b(this,"onClose",null);this.root=t,t.classList.add("hidden"),t.innerHTML=`
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
        <div class="inv-hint">E / Esc 关闭 · 左键拿放 · 右键放一个/拿一半 · Shift 快速转移</div>
      </div>`,this.titleEl=t.querySelector(".inv-title"),t.querySelector(".inv-close").addEventListener("click",()=>{var s;return(s=this.onClose)==null?void 0:s.call(this)}),this.cgridEl=t.querySelector(".inv-cgrid");const e=t.querySelector(".inv-main"),n=t.querySelector(".inv-hotbar");for(let s=0;s<Ba;s++)this.mainCells.push(this.makeSlot(e,"main",s));for(let s=0;s<Tn;s++)this.hotbarCells.push(this.makeSlot(n,"hotbar",s));this.outCell=this.makeSlot(t.querySelector(".inv-out-wrap"),"output",0),this.outCell.el.classList.add("inv-out"),this.cursorEl=document.createElement("div"),this.cursorEl.className="inv-cursor",this.cursorIcon=document.createElement("div"),this.cursorIcon.className="slot-icon",this.cursorCnt=document.createElement("div"),this.cursorCnt.className="slot-count",this.cursorEl.append(this.cursorIcon,this.cursorCnt),this.cursorEl.style.display="none",this.cursorEl.style.pointerEvents="none",document.body.appendChild(this.cursorEl),document.addEventListener("pointermove",s=>{this.open&&(this.cursorEl.style.left=`${s.clientX}px`,this.cursorEl.style.top=`${s.clientY}px`,this.drag&&this.onDragMove(s))}),document.addEventListener("pointerup",s=>{this.open&&this.drag&&this.endDrag(s)})}makeSlot(t,e,n){const s=document.createElement("div");s.className="inv-slot",s.dataset.region=e,s.dataset.idx=String(n);const r=document.createElement("div");r.className="slot-icon";const o=document.createElement("div");return o.className="slot-count",s.append(r,o),s.addEventListener("pointerdown",a=>{a.preventDefault(),this.beginDrag(e,n,a)}),s.addEventListener("contextmenu",a=>a.preventDefault()),t.appendChild(s),{el:s,icon:r,cnt:o}}isOpen(){return this.open}show(t,e){this.inv=t,this.gridN=e,this.craft=Array.from({length:e},()=>Array(e).fill(null)),this.buildCraftGrid(e),this.titleEl.textContent=e>=3?"工作台":"背包",this.open=!0,this.root.classList.remove("hidden"),this.render()}hide(){var t;if(this.cancelDrag(),this.inv){for(const e of this.craft)for(let n=0;n<e.length;n++){const s=e[n];s&&(us(this.inv,s.id,s.count,je(s.id)),e[n]=null)}this.cursor&&(us(this.inv,this.cursor.id,this.cursor.count,je(this.cursor.id)),this.cursor=null)}this.open=!1,this.root.classList.add("hidden"),this.cursorEl.style.display="none",(t=this.onChange)==null||t.call(this)}buildCraftGrid(t){this.cgridEl.innerHTML="",this.cgridEl.style.gridTemplateColumns=`repeat(${t}, 1fr)`,this.craftCells=[];for(let e=0;e<t*t;e++)this.craftCells.push(this.makeSlot(this.cgridEl,"craft",e))}beginDrag(t,e,n){var s,r;if(this.inv){if(this.cursorEl.style.left=`${n.clientX}px`,this.cursorEl.style.top=`${n.clientY}px`,t==="output"){this.takeOutput(),this.render(),(s=this.onChange)==null||s.call(this);return}if(n.shiftKey){this.quickMoveFrom(t,e),this.render(),(r=this.onChange)==null||r.call(this);return}this.drag={region:t,i:e,right:n.button===2,started:!1,mode:this.cursor?"distribute":"move",swept:[],sweptKeys:new Set,sweptCells:[]}}}onDragMove(t){const e=this.drag;if(!e||!this.inv)return;const n=this.slotAt(t);if(!e.started){if(!n||n.region===e.region&&n.i===e.i)return;e.started=!0,e.mode==="distribute"?(this.addSwept(e,e.region,e.i),this.addSwept(e,n.region,n.i)):(this.applyClick(e.region,e.i,!1),this.render());return}e.mode==="distribute"&&n&&this.addSwept(e,n.region,n.i)}endDrag(t){var n;const e=this.drag;this.drag=null;for(const s of(e==null?void 0:e.sweptCells)??[])s.el.classList.remove("inv-drag-hi");if(!(!e||!this.inv)){if(!e.started)this.applyClick(e.region,e.i,e.right);else if(e.mode==="distribute")this.cursor=e.right?qS(e.swept,this.cursor,je):XS(e.swept,this.cursor,je);else{const s=this.slotAt(t);s&&s.region!=="output"&&!(s.region===e.region&&s.i===e.i)&&this.applyClick(s.region,s.i,!1)}this.render(),(n=this.onChange)==null||n.call(this)}}cancelDrag(){if(this.drag){for(const t of this.drag.sweptCells)t.el.classList.remove("inv-drag-hi");this.drag=null}}addSwept(t,e,n){if(e==="output")return;const s=`${e}:${n}`;if(t.sweptKeys.has(s))return;t.sweptKeys.add(s),t.swept.push(this.slotRef(e,n));const r=this.cellOf(e,n);r&&(r.el.classList.add("inv-drag-hi"),t.sweptCells.push(r))}applyClick(t,e,n){if(this.inv)if(t==="craft"){const s=this.gridN,r=this.craft[Math.floor(e/s)],o=e%s;this.cursor=n?po(r,o,this.cursor,je):fo(r,o,this.cursor,je)}else{const s=t==="main"?Tn+e:e;this.cursor=n?po(this.inv,s,this.cursor,je):fo(this.inv,s,this.cursor,je)}}slotRef(t,e){if(t==="craft"){const r=this.gridN,o=this.craft[Math.floor(e/r)],a=e%r;return{get:()=>o[a],set:l=>o[a]=l}}const n=this.inv,s=t==="main"?Tn+e:e;return{get:()=>n[s],set:r=>n[s]=r}}slotAt(t){const e=document.elementFromPoint(t.clientX,t.clientY),n=e==null?void 0:e.closest(".inv-slot");return!n||n.dataset.region===void 0?null:{region:n.dataset.region,i:Number(n.dataset.idx)}}cellOf(t,e){return t==="main"?this.mainCells[e]??null:t==="hotbar"?this.hotbarCells[e]??null:t==="craft"?this.craftCells[e]??null:null}quickMoveFrom(t,e){if(this.inv)if(t==="craft"){const n=this.gridN;Ua(this.craft[Math.floor(e/n)],e%n,this.inv,je)}else t==="main"?Ua(this.inv,Tn+e,this.inv,je,0,Tn):Ua(this.inv,e,this.inv,je,Tn,Tn+Ba)}takeOutput(){const t=gu(this.craft);if(t){if(!this.cursor)this.cursor={id:t.id,count:t.count};else if(this.cursor.id===t.id&&this.cursor.count+t.count<=je(t.id))this.cursor.count+=t.count;else return;n1(this.craft)}}render(){if(!this.inv)return;for(let e=0;e<Ba;e++)this.paint(this.mainCells[e],this.inv[Tn+e]);for(let e=0;e<Tn;e++)this.paint(this.hotbarCells[e],this.inv[e]);const t=this.gridN;for(let e=0;e<this.craftCells.length;e++)this.paint(this.craftCells[e],this.craft[Math.floor(e/t)][e%t]);this.paint(this.outCell,gu(this.craft)),this.cursor?(this.cursorEl.style.display="block",this.fill(this.cursorIcon,this.cursorCnt,this.cursor)):this.cursorEl.style.display="none"}paint(t,e){this.fill(t.icon,t.cnt,e)}fill(t,e,n){if(n&&n.count>0){const s=Si(n.id);s?(t.style.backgroundImage=`url(${s})`,t.textContent="",t.classList.remove("txt")):(t.style.backgroundImage="none",t.textContent=of(n.id),t.classList.add("txt")),e.textContent=n.count>1?String(n.count):""}else t.style.backgroundImage="none",t.textContent="",t.classList.remove("txt"),e.textContent=""}}const xf=200,s1=64,Mf={[wx]:1,[Tx]:Vd,[Tl]:Wd,[Al]:Xd,[Cl]:qd,[Rl]:Yd},r1={[Fd]:1600,[Ix]:16e3,[So]:300,[wo]:300,[bx]:300,[xd]:300,[kd]:100,[Od]:200,[zd]:200,[Bd]:200,[Hd]:200,[Gd]:200},yf=i=>Mf[i],ul=i=>r1[i]??0,_u=i=>ul(i)>0,o1=i=>i in Mf;function a1(){return{input:0,inputN:0,fuel:0,fuelN:0,output:0,outputN:0,burn:0,burnMax:0,cook:0}}function Sf(i){if(i.inputN<=0)return!1;const t=yf(i.input);return t===void 0?!1:i.outputN===0||i.output===t&&i.outputN<s1}function l1(i){const t=i.burn>0||i.cook>0,e=Sf(i);if(i.burn>0&&i.burn--,i.burn===0&&e&&i.fuelN>0&&ul(i.fuel)>0&&(i.burnMax=ul(i.fuel),i.burn=i.burnMax,i.fuelN--,i.fuelN===0&&(i.fuel=0)),i.burn>0&&e){if(i.cook++,i.cook>=xf){i.cook=0;const n=yf(i.input);i.inputN--,i.inputN===0&&(i.input=0),i.output=n,i.outputN++}}else i.cook=Math.max(0,i.cook-2);return t||i.burn>0||i.cook>0}function c1(i){return i.burn>0||i.fuelN>0&&Sf(i)}const qn=i=>ro(i),Hr=9,vu=27;class h1{constructor(t){b(this,"root");b(this,"inv",null);b(this,"furnace",null);b(this,"cursor",null);b(this,"open",!1);b(this,"cursorEl");b(this,"cursorIcon");b(this,"cursorCnt");b(this,"inputCell");b(this,"fuelCell");b(this,"outCell");b(this,"flameEl");b(this,"arrowFillEl");b(this,"mainCells",[]);b(this,"hotbarCells",[]);b(this,"onChange",null);b(this,"onClose",null);this.root=t,t.classList.add("hidden"),t.innerHTML=`
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
        <div class="inv-hint">E / Esc 关闭 · 上槽放矿、下槽放燃料(煤/木) · 取走成品</div>
      </div>`,t.querySelector(".inv-close").addEventListener("click",()=>{var r;return(r=this.onClose)==null?void 0:r.call(this)});const e=r=>this.bindSlot(t.querySelector(r));this.inputCell=e(".fur-input"),this.fuelCell=e(".fur-fuel"),this.outCell=e(".fur-out"),this.inputCell.el.addEventListener("pointerdown",r=>this.clickFur("input",r)),this.fuelCell.el.addEventListener("pointerdown",r=>this.clickFur("fuel",r)),this.outCell.el.addEventListener("pointerdown",r=>this.clickFur("output",r)),this.flameEl=t.querySelector(".fur-flame-fill"),this.arrowFillEl=t.querySelector(".fur-arrow-fill");const n=t.querySelector(".inv-main"),s=t.querySelector(".inv-hotbar");for(let r=0;r<vu;r++)this.mainCells.push(this.makeInvSlot(n,"main",r));for(let r=0;r<Hr;r++)this.hotbarCells.push(this.makeInvSlot(s,"hotbar",r));this.cursorEl=document.createElement("div"),this.cursorEl.className="inv-cursor",this.cursorIcon=document.createElement("div"),this.cursorIcon.className="slot-icon",this.cursorCnt=document.createElement("div"),this.cursorCnt.className="slot-count",this.cursorEl.append(this.cursorIcon,this.cursorCnt),this.cursorEl.style.display="none",document.body.appendChild(this.cursorEl),document.addEventListener("pointermove",r=>{this.open&&(this.cursorEl.style.left=`${r.clientX}px`,this.cursorEl.style.top=`${r.clientY}px`)})}bindSlot(t){t.classList.add("inv-slot");const e=document.createElement("div");e.className="slot-icon";const n=document.createElement("div");return n.className="slot-count",t.append(e,n),t.addEventListener("contextmenu",s=>s.preventDefault()),{el:t,icon:e,cnt:n}}makeInvSlot(t,e,n){const s=document.createElement("div");s.className="inv-slot";const r=document.createElement("div");r.className="slot-icon";const o=document.createElement("div");return o.className="slot-count",s.append(r,o),s.addEventListener("pointerdown",a=>{a.preventDefault(),this.cursorEl.style.left=`${a.clientX}px`,this.cursorEl.style.top=`${a.clientY}px`,this.clickInv(e,n,a)}),s.addEventListener("contextmenu",a=>a.preventDefault()),t.appendChild(s),{el:s,icon:r,cnt:o}}isOpen(){return this.open}show(t,e){this.inv=t,this.furnace=e,this.open=!0,this.root.classList.remove("hidden"),this.render()}hide(){var t;this.inv&&this.cursor&&(us(this.inv,this.cursor.id,this.cursor.count,qn(this.cursor.id)),this.cursor=null),this.open=!1,this.root.classList.add("hidden"),this.cursorEl.style.display="none",(t=this.onChange)==null||t.call(this)}clickInv(t,e,n){var r;if(!this.inv)return;const s=t==="main"?Hr+e:e;n.shiftKey?this.shiftToFurnace(s):this.cursor=n.button===2?po(this.inv,s,this.cursor,qn):fo(this.inv,s,this.cursor,qn),this.render(),(r=this.onChange)==null||r.call(this)}shiftToFurnace(t){const e=this.furnace,n=this.inv;if(!e||!n)return;const s=n[t];if(!s)return;const r=_u(s.id);if(r&&(e.fuel===0||e.fuel===s.id)){const o=qn(s.id)-e.fuelN,a=Math.min(o,s.count);e.fuel=s.id,e.fuelN+=a,s.count-=a,s.count<=0&&(n[t]=null)}else if(!r&&o1(s.id)&&(e.input===0||e.input===s.id)){const o=qn(s.id)-e.inputN,a=Math.min(o,s.count);e.input=s.id,e.inputN+=a,s.count-=a,s.count<=0&&(n[t]=null)}}clickFur(t,e){var s;e.preventDefault(),this.cursorEl.style.left=`${e.clientX}px`,this.cursorEl.style.top=`${e.clientY}px`;const n=this.furnace;if(n){if(t==="output")this.takeOutput();else{const r=t==="input"?n.input:n.fuel,o=t==="input"?n.inputN:n.fuelN,a=[o>0?{id:r,count:o}:null];if(t==="fuel"&&this.cursor&&!_u(this.cursor.id))return;this.cursor=e.button===2?po(a,0,this.cursor,qn):fo(a,0,this.cursor,qn);const l=a[0];t==="input"?(n.input=(l==null?void 0:l.id)??0,n.inputN=(l==null?void 0:l.count)??0):(n.fuel=(l==null?void 0:l.id)??0,n.fuelN=(l==null?void 0:l.count)??0)}this.render(),(s=this.onChange)==null||s.call(this)}}takeOutput(){const t=this.furnace;!t||t.outputN<=0||(this.cursor?this.cursor.id===t.output&&this.cursor.count+t.outputN<=qn(t.output)&&(this.cursor.count+=t.outputN,t.output=0,t.outputN=0):(this.cursor={id:t.output,count:t.outputN},t.output=0,t.outputN=0))}render(){if(!this.inv||!this.furnace)return;const t=this.furnace;for(let e=0;e<vu;e++)this.fill(this.mainCells[e],this.inv[Hr+e]);for(let e=0;e<Hr;e++)this.fill(this.hotbarCells[e],this.inv[e]);this.fill(this.inputCell,t.inputN>0?{id:t.input,count:t.inputN}:null),this.fill(this.fuelCell,t.fuelN>0?{id:t.fuel,count:t.fuelN}:null),this.fill(this.outCell,t.outputN>0?{id:t.output,count:t.outputN}:null),this.flameEl.style.height=`${t.burnMax>0?Math.round(t.burn/t.burnMax*100):0}%`,this.arrowFillEl.style.width=`${Math.round(t.cook/xf*100)}%`,this.cursor?(this.cursorEl.style.display="block",this.fillRaw(this.cursorIcon,this.cursorCnt,this.cursor)):this.cursorEl.style.display="none"}fill(t,e){this.fillRaw(t.icon,t.cnt,e)}fillRaw(t,e,n){if(n&&n.count>0){const s=Si(n.id);s?(t.style.backgroundImage=`url(${s})`,t.textContent="",t.classList.remove("txt")):(t.style.backgroundImage="none",t.textContent=of(n.id),t.classList.add("txt")),e.textContent=n.count>1?String(n.count):""}else t.style.backgroundImage="none",t.textContent="",t.classList.remove("txt"),e.textContent=""}}const Ha=21,Ga=21;function xu(i,t,e,n,s,r){const o=(p,m)=>r==="x"?[e+p,n+m,s]:[e,n+m,s+p],a=(p,m)=>t(...o(p,m)),l=(p,m)=>i(...o(p,m));if(!a(0,0))return null;let c=0;for(;-c<Ha&&a(c-1,0);)c--;let h=0;for(;h<Ha&&a(h+1,0);)h++;let u=0;for(;-u<Ga&&a(0,u-1);)u--;let d=0;for(;d<Ga&&a(0,d+1);)d++;const f=h-c+1,g=d-u+1;if(f<2||f>Ha||g<3||g>Ga)return null;for(let p=c;p<=h;p++)for(let m=u;m<=d;m++)if(!a(p,m))return null;for(let p=u;p<=d;p++)if(!l(c-1,p)||!l(h+1,p))return null;for(let p=c;p<=h;p++)if(!l(p,u-1)||!l(p,d+1))return null;const _=[];for(let p=c;p<=h;p++)for(let m=u;m<=d;m++)_.push(o(p,m));return{axis:r,inner:_}}function u1(i,t,e,n,s){return xu(i,t,e,n,s,"x")??xu(i,t,e,n,s,"z")}const Ef=31,d1=127,f1=191;function p1(i,t,e,n){const o=u1((a,l,c)=>i(a,l,c)===18,(a,l,c)=>{const h=i(a,l,c);return h===0||h===25},t,e+1,n);return o?o.inner:null}function m1(i,t,e){return i==="overworld"?[Math.floor(t/8),Math.floor(e/8)]:[t*8,e*8]}function g1(i,t,e,n){if(t==="overworld"){for(let o=f1;o>1;o--)if(ge(i(e,o,n))&&!ge(i(e,o+1,n)))return o+1;return null}const s=Ef+2,r=d1-8;for(let o=s;o<=r;o++){if(!ge(i(e,o-1,n)))continue;let a=!1;for(let l=0;l<3;l++)if(sl(i(e,o+l,n))){a=!0;break}if(!a)return o}return null}function _1(i,t,e,n){let s=g1(i,t,e,n),r=!1;s===null&&(s=t==="nether"?Ef+10:64,r=!0);const o=new Map,a=(d,f,g)=>`${d},${f},${g}`,l=(d,f,g,_)=>{o.set(a(d,f,g),[d,f,g,_])},c=e,h=e+1,u=s+2;for(let d=e-1;d<=e+2;d++)for(let f=s-1;f<=s+3;f++)for(let g=n-1;g<=n+1;g++)l(d,f,g,0);for(let d=e-1;d<=e+2;d++)l(d,s-1,n,Pn),l(d,s+3,n,Pn);for(let d=s-1;d<=s+3;d++)l(e-1,d,n,Pn),l(e+2,d,n,Pn);for(let d=c;d<=h;d++)for(let f=s;f<=u;f++)l(d,f,n,Eo);if(l(c,s-1,n-1,Pn),l(h,s-1,n-1,Pn),r)for(let d=e-1;d<=e+2;d++)for(let f=n-1;f<=n+1;f++)l(d,s-1,f,Pn);return{edits:[...o.values()],spawn:{x:c+.5,y:s,z:n+.5}}}const Va=600;class v1{constructor(t){b(this,"geom",new Ie);b(this,"pos",new Float32Array(Va*3));b(this,"col",new Float32Array(Va*3));b(this,"posAttr");b(this,"colAttr");b(this,"points");this.posAttr=new le(this.pos,3),this.colAttr=new le(this.col,3),this.posAttr.setUsage(Ec),this.colAttr.setUsage(Ec),this.geom.setAttribute("position",this.posAttr),this.geom.setAttribute("color",this.colAttr),this.geom.setDrawRange(0,0);const e=new Ml({size:.13,vertexColors:!0,sizeAttenuation:!0,transparent:!0,depthWrite:!1});this.points=new dd(this.geom,e),this.points.frustumCulled=!1,t.add(this.points)}sync(t){const e=Math.min(t.length,Va);for(let n=0;n<e;n++){const s=t[n];this.pos[n*3]=s.x,this.pos[n*3+1]=s.y,this.pos[n*3+2]=s.z,this.col[n*3]=s.r,this.col[n*3+1]=s.g,this.col[n*3+2]=s.b}this.geom.setDrawRange(0,e),this.posAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0}}const x1=`
varying vec3 vW;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vW = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`.trim(),M1=`
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
  vec2 q = p + 0.3 * vec2(mwFBM(p * 1.7 + vec2(0.0, uTime * 0.0020)), mwFBM(p * 1.7 + vec2(5.2, uTime * 0.0017)));
  vec2 drift = vec2(uTime * 0.0110, uTime * 0.0032); // 整体缓飘
  float d = mwFBM(q + drift);
  float cov = smoothstep(0.52, 0.62, d); // 云形有边界(不糊成一片)
  if (cov < 0.004) discard;
  // 体积感：朝太阳水平方向偏移再采一次,密度差→向阳侧亮、厚处底部暗(白天云要白,暗部别压狠)
  vec2 sunXZ = normalize(uSunDir.xz + vec2(1e-4, 0.0));
  float d2 = mwFBM(q + drift + sunXZ * 0.05);
  float lit = clamp(0.72 + (d2 - d) * 4.5, 0.52, 1.12);
  float dense = smoothstep(0.50, 0.88, d); // 厚处更白亮
  vec3 col = uTint * mix(0.86, 1.12, dense) * lit;
  float dist = length(vW.xz - cameraPosition.xz);
  float fade = 1.0 - smoothstep(360.0, 620.0, dist); // 远处淡出融进地平线雾
  gl_FragColor = vec4(col, cov * 0.9 * fade);
  #include <colorspace_fragment>
}
`.trim();function y1(){const t=new Float32Array(2550),e=new Float32Array(850*3),n=310;let s=12345;const r=()=>(s=s*1664525+1013904223>>>0,s/4294967296);for(let c=0;c<850;c++){const h=r()*2-1,u=r()*Math.PI*2,d=Math.sqrt(1-h*h);t[c*3]=Math.cos(u)*d*n,t[c*3+1]=Math.sin(u)*d*n,t[c*3+2]=h*n;const f=.35+r()*.65;e[c*3]=f,e[c*3+1]=f,e[c*3+2]=Math.min(1,f*(.92+r()*.16))}const o=new Ie;o.setAttribute("position",new le(t,3)),o.setAttribute("color",new le(e,3));const a=new Ml({size:1.7,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),l=new dd(o,a);return l.frustumCulled=!1,l}function S1(){const i=document.createElement("canvas");i.width=i.height=16;const t=i.getContext("2d");return t.fillStyle="#fff6c0",t.fillRect(1,1,14,14),t.fillStyle="#ffe25a",t.fillRect(3,3,10,10),t.fillStyle="#ffcf26",t.fillRect(5,5,6,6),bf(i)}function E1(){const i=document.createElement("canvas");i.width=i.height=16;const t=i.getContext("2d");return t.fillStyle="#eef2f7",t.fillRect(2,2,12,12),t.fillStyle="#c2ccd8",t.fillRect(5,4,3,3),t.fillRect(9,7,2,2),t.fillRect(4,9,2,3),t.fillRect(10,11,2,2),bf(i)}function b1(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=64/2,s=64/2,r=e.createRadialGradient(n,n,0,n,n,s);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.4,"rgba(255,255,240,1)"),r.addColorStop(.7,"rgba(255,251,214,1)"),r.addColorStop(.88,"rgba(255,248,200,0.5)"),r.addColorStop(1,"rgba(255,246,190,0)"),e.fillStyle=r,e.beginPath(),e.arc(n,n,s,0,Math.PI*2),e.fill();const o=new _s(t);return o.minFilter=Ae,o.magFilter=Ae,o.colorSpace=se,o}function w1(){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),n=128/2,s=128/2,r=e.createRadialGradient(n,n,0,n,n,s);r.addColorStop(0,"rgba(255,255,238,0.30)"),r.addColorStop(.25,"rgba(255,252,224,0.16)"),r.addColorStop(.55,"rgba(255,249,208,0.07)"),r.addColorStop(.8,"rgba(255,247,198,0.02)"),r.addColorStop(1,"rgba(255,245,188,0)"),e.fillStyle=r,e.beginPath(),e.arc(n,n,s,0,Math.PI*2),e.fill();const o=new _s(t);return o.minFilter=Ae,o.magFilter=Ae,o.colorSpace=se,o}function T1(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=64/2,s=64/2,r=e.createRadialGradient(n-s*.15,n-s*.15,0,n,n,s);r.addColorStop(0,"rgba(245,248,255,1)"),r.addColorStop(.55,"rgba(220,228,242,1)"),r.addColorStop(.82,"rgba(190,200,220,1)"),r.addColorStop(.92,"rgba(170,180,205,0.5)"),r.addColorStop(1,"rgba(150,165,195,0)"),e.fillStyle=r,e.beginPath(),e.arc(n,n,s,0,Math.PI*2),e.fill();const o=[[.38,.32,.09],[.62,.55,.07],[.28,.6,.055],[.55,.3,.05],[.45,.68,.065]];for(const[l,c,h]of o){const u=n+(l-.5)*44.8,d=n+(c-.5)*(64*.7),f=h*64,g=e.createRadialGradient(u,d,0,u,d,f);g.addColorStop(0,"rgba(140,150,170,0.28)"),g.addColorStop(.6,"rgba(160,168,185,0.12)"),g.addColorStop(1,"rgba(170,178,195,0)"),e.fillStyle=g,e.beginPath(),e.arc(u,d,f,0,Math.PI*2),e.fill()}const a=new _s(t);return a.minFilter=Ae,a.magFilter=Ae,a.colorSpace=se,a}function bf(i){const t=new _s(i);return t.magFilter=re,t.minFilter=re,t.colorSpace=se,t}function Gr(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Wa(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=Gr(e,n),c=Gr(e+1,n),h=Gr(e,n+1),u=Gr(e+1,n+1);return l*(1-o)*(1-a)+c*o*(1-a)+h*(1-o)*a+u*o*a}function A1(i,t){return Wa(i,t)*.6+Wa(i*2.3+5.1,t*2.3-3.7)*.3+Wa(i*4.7,t*4.7)*.1}const An=16,C1=5,Vr=28,Mu=196,yu=.18,R1=.62,P1=.012;function L1(i,t){return A1(i*yu,t*yu)>R1}const D1=[{o:[[1,-1,-1],[1,1,-1],[1,1,1],[1,-1,1]],s:.82},{o:[[-1,-1,1],[-1,1,1],[-1,1,-1],[-1,-1,-1]],s:.82},{o:[[-1,1,-1],[-1,1,1],[1,1,1],[1,1,-1]],s:1},{o:[[-1,-1,1],[-1,-1,-1],[1,-1,-1],[1,-1,1]],s:.6},{o:[[1,-1,1],[1,1,1],[-1,1,1],[-1,-1,1]],s:.88},{o:[[-1,-1,-1],[-1,1,-1],[1,1,-1],[1,-1,-1]],s:.88}];function I1(i,t,e,n,s,r,o,a,l){const c=o/2,h=a/2,u=l/2;for(const d of D1){const f=i.length/3;for(const[g,_,p]of d.o)i.push(n+g*c,s+_*h,r+p*u),t.push(d.s,d.s,d.s);e.push(f,f+1,f+2,f,f+2,f+3)}}class U1{constructor(t){b(this,"sun");b(this,"moon");b(this,"realSun");b(this,"sunGlow");b(this,"realMoon");b(this,"voxelClouds");b(this,"realClouds");b(this,"cloudUniforms");b(this,"stars");b(this,"starGroup");b(this,"dir",new O);b(this,"drift",0);b(this,"cloudOriginX",NaN);b(this,"cloudOriginZ",NaN);b(this,"lq","off");b(this,"dim","overworld");const e=r=>new ue({map:r,transparent:!0,depthWrite:!1,fog:!1});this.sun=new $t(new Oe(46,46),e(S1())),this.moon=new $t(new Oe(38,38),e(E1())),this.realSun=new $t(new Oe(52,52),e(b1())),this.sunGlow=new $t(new Oe(88,88),new ue({map:w1(),transparent:!0,depthWrite:!1,fog:!1,blending:Ka})),this.realMoon=new $t(new Oe(44,44),e(T1())),this.realSun.visible=this.sunGlow.visible=this.realMoon.visible=!1;const n=new ue({vertexColors:!0,color:16777215,transparent:!0,opacity:.85,depthWrite:!1,side:ze});this.voxelClouds=new $t(new Ie,n),this.voxelClouds.frustumCulled=!1,this.cloudUniforms={uTime:{value:0},uTint:{value:new Ut(1,1,1)},uSunDir:{value:new O(.5,.8,.28)}};const s=new rn({uniforms:this.cloudUniforms,vertexShader:x1,fragmentShader:M1,transparent:!0,depthWrite:!1,side:ze});this.realClouds=new $t(new Oe(1400,1400),s),this.realClouds.rotation.x=-Math.PI/2,this.realClouds.frustumCulled=!1,this.realClouds.visible=!1,this.stars=y1(),this.starGroup=new In,this.starGroup.add(this.stars),this.stars.renderOrder=-900;for(const r of[this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon])r.renderOrder=-850;this.realClouds.renderOrder=-800,this.voxelClouds.renderOrder=-800,t.add(this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon,this.voxelClouds,this.realClouds,this.starGroup)}setDimension(t){if(this.dim=t,t==="nether")for(const e of[this.sun,this.moon,this.realSun,this.sunGlow,this.realMoon,this.voxelClouds,this.realClouds,this.starGroup])e.visible=!1;else this.starGroup.visible=!0,this.setLightingQuality(this.lq)}setLightingQuality(t){this.lq=t;const e=t!=="off";this.voxelClouds.visible=!e,this.realClouds.visible=e,this.sun.visible=!e,this.moon.visible=!e,this.realSun.visible=e,this.sunGlow.visible=e,this.realMoon.visible=e}rebuildVoxelClouds(t,e){const n=[],s=[],r=[],o=An-1;for(let l=0;l<Vr;l++)for(let c=0;c<Vr;c++)L1(t+l,e+c)&&I1(n,s,r,l*An+An/2,0,c*An+An/2,o,C1,o);const a=new Ie;a.setAttribute("position",new we(n,3)),a.setAttribute("color",new we(s,3)),a.setIndex(r),this.voxelClouds.geometry.dispose(),this.voxelClouds.geometry=a}update(t,e){if(this.dim==="nether")return;const n=t/sn*Math.PI*2;this.dir.set(Math.cos(n),Math.sin(n),.1).normalize();const s=280;this.sun.position.copy(e).addScaledVector(this.dir,s),this.sun.lookAt(e),this.moon.position.copy(e).addScaledVector(this.dir,-s),this.moon.lookAt(e),this.realSun.position.copy(this.sun.position),this.realSun.lookAt(e),this.sunGlow.position.copy(this.sun.position),this.sunGlow.lookAt(e),this.realMoon.position.copy(this.moon.position),this.realMoon.lookAt(e),this.drift+=P1,this.starGroup.position.copy(e),this.starGroup.rotation.z=n;const r=al(t)/11;if(this.stars.material.opacity=Math.pow(r,1.5)*.9,this.realClouds.visible){this.realClouds.position.set(e.x,Mu,e.z),this.cloudUniforms.uTime.value=this.drift;const l=ll(t).worldTint;this.cloudUniforms.uTint.value.setRGB(l[0],l[1],l[2],se),this.cloudUniforms.uSunDir.value.copy(this.dir);return}const o=Math.floor((e.x-this.drift)/An)-Vr/2,a=Math.floor(e.z/An)-Vr/2;(o!==this.cloudOriginX||a!==this.cloudOriginZ)&&(this.rebuildVoxelClouds(o,a),this.cloudOriginX=o,this.cloudOriginZ=a),this.voxelClouds.position.set(o*An+this.drift,Mu,a*An)}}const N1=16,k1={1:[.54,.54,.54],2:[.55,.42,.25],3:[.42,.67,.25],4:[.53,.53,.53],5:[.91,.86,.63],6:[.45,.33,.18],7:[.69,.54,.31],8:[.34,.34,.34],10:[.25,.48,.19],11:[.5,.36,.2],16:[.44,.7,.28],17:[.44,.7,.28],256:[.79,.16,.13]},Xi=i=>k1[i]??[.5,.5,.5];function di(i,t,e,n,s,r=Math.random){const o=[];for(let a=0;a<s;a++){const l=r()*Math.PI*2,c=.6+r()*1.8;o.push({x:i+(r()-.5)*.6,y:t+(r()-.5)*.6,z:e+(r()-.5)*.6,vx:Math.cos(l)*c,vy:1.5+r()*2.5,vz:Math.sin(l)*c,age:0,life:.4+r()*.45,r:n[0],g:n[1],b:n[2]})}return o}function F1(i,t){const e=[];for(const n of i)n.age+=t,!(n.age>=n.life)&&(n.vy-=N1*t,n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,e.push(n));return e}const wf="mineworld.saves";function Nl(){try{const i=localStorage.getItem(wf);return i?JSON.parse(i):[]}catch{return[]}}function Tf(i){try{localStorage.setItem(wf,JSON.stringify(i))}catch(t){console.warn("[mineworld] 存档写入失败(localStorage 配额满或不可用):",t)}}function O1(){return Nl().sort((i,t)=>t.lastPlayed-i.lastPlayed)}function z1(i){const t=i.trim();if(!t)return null;if(/^-?\d+$/.test(t))return Math.abs(Math.floor(Number(t)))%2e9;let e=0;for(let n=0;n<t.length;n++)e=Math.imul(e,31)+t.charCodeAt(n)|0;return Math.abs(e)%2e9}function B1(i,t,e="survival"){const n={id:`${Date.now().toString(36)}-${Math.floor(Math.random()*1e6).toString(36)}`,name:i.trim()||"新的世界",seed:t??Math.floor(Math.random()*2e9),gameMode:e,lastPlayed:Date.now(),edits:{}};return Ms(n),n}function Ms(i){const t=Nl().filter(e=>e.id!==i.id);t.push(i),Tf(t)}function H1(i){Tf(Nl().filter(t=>t.id!==i))}function Wr(i,t,e,n){return i==="nether"?`nether:${t},${e},${n}`:`${t},${e},${n}`}function Su(i){if(i.startsWith("nether:")){const[s,r,o]=i.slice(7).split(",").map(Number);return{dim:"nether",x:s,y:r,z:o}}const[t,e,n]=i.split(",").map(Number);return{dim:"overworld",x:t,y:e,z:n}}function G1(i,t,e,n){const r=oo/2,o=Math.floor(i-r-.1),a=Math.floor(i+r+.1),l=Math.floor(t-.1),c=Math.floor(t+Ei),h=Math.floor(e-r-.1),u=Math.floor(e+r+.1);for(let d=o;d<=a;d++)for(let f=l;f<=c;f++)for(let g=h;g<=u;g++)if(Bx(n(d,f,g)))return!0;return!1}const Xr=50,V1=4.5,W1=5,Eu=9,X1=300,q1=-125,un=0,bu=[{id:3,count:64},{id:2,count:64},{id:1,count:64},{id:4,count:64},{id:7,count:64},{id:6,count:64},{id:5,count:64},{id:21,count:64},{id:14,count:64},{id:15,count:64},{id:26,count:64},{id:32,count:64},{id:33,count:64},{id:34,count:64},{id:18,count:64},{id:19,count:64},{id:20,count:64},{id:10,count:64},{id:30,count:64},{id:8,count:64},{id:12,count:64},{id:11,count:64},{id:13,count:64},{id:27,count:64},{id:28,count:64},{id:269,count:1},{id:270,count:1},{id:271,count:1},{id:272,count:1},{id:Fs,count:1},{id:ts,count:64}];function Y1(){const i=Pl();for(let t=0;t<bu.length&&t<i.length;t++)i[t]={...bu[t]};return i}const $1=1.6,wu=.005,K1=.1,Z1=.05,j1=.2,J1=.005,Q1=.1,tE=3.5,Tu=16,Au=88,Cu=48,eE=3,nE=4,iE=8,sE=50,Ru=["pig","cow","sheep","chicken"],rE=1200,oE=10,Xa=.25,Pu=1,Lu=.6,aE=2.4,lE=9,Du=.42,cE=.36;function hE(i){if(i==null)return 1;const t=Os(i);return(t==null?void 0:t.kind)==="sword"?t.tier===1?4:t.tier===2?5:6:1}function uE(i,t,e,n,s,r,o,a,l,c,h,u){let d=0,f=1/0;const g=(_,p,m,x)=>{if(Math.abs(p)<1e-9)return _>=m&&_<=x;let v=(m-_)/p,w=(x-_)/p;return v>w&&([v,w]=[w,v]),d=Math.max(d,v),f=Math.min(f,w),f>=d};return!g(i,n,o,c)||!g(t,s,a,h)||!g(e,r,l,u)?null:d}class dE{constructor(t,e){b(this,"canvas");b(this,"save");b(this,"renderer");b(this,"look");b(this,"touch");b(this,"world");b(this,"physWorld");b(this,"chunks");b(this,"highlight");b(this,"underwaterEl");b(this,"normalFog");b(this,"underFog",new cs(2383754,.1,16));b(this,"player");b(this,"prev");b(this,"hotbar");b(this,"inv");b(this,"crack");b(this,"dropRenderer");b(this,"hand");b(this,"particleFx");b(this,"skyObjects");b(this,"dimension","overworld");b(this,"portalCooldown",0);b(this,"portalTimer",0);b(this,"portalArmed",!0);b(this,"particles",[]);b(this,"digFxT",0);b(this,"invUI");b(this,"craftingGrid",0);b(this,"furnaceUI");b(this,"furnaces",new Map);b(this,"furnaceKey",null);b(this,"drops",[]);b(this,"arrows",[]);b(this,"arrowRenderer");b(this,"drawingBow",!1);b(this,"bowCharge",0);b(this,"mobs",[]);b(this,"mobRenderer");b(this,"mobRng");b(this,"spawnWorld");b(this,"surfaceY",(t,e)=>Pe(t,e,this.save.seed));b(this,"mobSpawnTick",0);b(this,"digging",!1);b(this,"lastMeleeMs",0);b(this,"digTarget",null);b(this,"digProgress",0);b(this,"fluidSim",new gS);b(this,"fluidGrid");b(this,"fluidTick",0);b(this,"wateredChunks",new Set);b(this,"worldTime");b(this,"fov",70);b(this,"shadowTick",99);b(this,"evictCt",0);b(this,"last",0);b(this,"acc",0);b(this,"survival");b(this,"statusBar");b(this,"worldSpawn");b(this,"dead",!1);b(this,"creative");b(this,"flying",!1);b(this,"flyTapWindow",0);b(this,"fallDistance",0);b(this,"hurtCd",0);b(this,"coordEl");b(this,"coordOn",!1);b(this,"eating",!1);b(this,"eatProgress",0);b(this,"eatFxT",0);b(this,"crouching",!1);b(this,"camEye",wn);b(this,"decayQueue",[]);b(this,"texturePack");b(this,"lightingQuality");b(this,"renderDistance");b(this,"_godSunUV",new Vt);b(this,"_godSunColor",new Ut);b(this,"_godSunWorld",new O);b(this,"_godFwd",new O);b(this,"hurtWindowMax",0);b(this,"skyDarkenNow",0);b(this,"entityLight",(t,e,n)=>this.chunks.brightnessAt(t,e,n,this.skyDarkenNow));var u,d;const n=Pd();zh(n.texturePack),this.canvas=t,this.save=e,this.creative=e.gameMode==="creative",this.renderer=new _x(t),this.normalFog=this.renderer.scene.fog,this.underwaterEl=document.getElementById("underwater"),this.hotbar=new US(document.getElementById("hotbar"),Eu),this.inv=e.inv?wS(e.inv):this.creative?Y1():Pl(),this.hotbar.render(this.inv);const s=e.survival;this.survival=s&&s.health>0?{...Da(),...s,foodTimer:0}:Da(),this.statusBar=new WS(document.getElementById("health"),document.getElementById("hunger")),this.statusBar.render(this.survival),this.worldTime=e.worldTime??PM,this.fluidGrid={isSolid:(f,g,_)=>g<0||g>=me||ge(this.world.getBlock(f,g,_)),amount:(f,g,_)=>this.world.waterAmount(f,g,_),isSource:(f,g,_)=>this.world.isWaterSource(f,g,_),isFalling:(f,g,_)=>this.world.isWaterFalling(f,g,_),setWater:(f,g,_,p,m,x)=>this.world.setWater(f,g,_,p,m,x),getBlock:(f,g,_)=>this.world.getBlock(f,g,_),setBlock:(f,g,_,p)=>this.edit(f,g,_,p)},this.dimension=e.currentDimension??"overworld",this.buildDimension(this.dimension),this.texturePack=n.texturePack,this.lightingQuality=n.lightingQuality,this.renderDistance=n.renderDistance;const r=rl(this.texturePack);this.chunks=new Nd(this.renderer.scene,this.world,r),this.chunks.setLightingQuality(n.lightingQuality),this.setRenderDistance(this.renderDistance),this.crack=new UM(this.renderer.scene),this.dropRenderer=new sy(this.renderer.scene,r),this.arrowRenderer=new wy(this.renderer.scene),this.mobRenderer=new pS(this.renderer.scene),this.mobRng=mS((e.seed^2654435769)>>>0),this.spawnWorld={getBlock:(f,g,_)=>this.world.getBlock(f,g,_)},this.hand=new fy(r),this.particleFx=new v1(this.renderer.scene),this.skyObjects=new U1(this.renderer.scene),this.skyObjects.setLightingQuality(n.lightingQuality),this.skyObjects.setDimension(this.dimension),this.invUI=new i1(document.getElementById("inventory")),this.furnaceUI=new h1(document.getElementById("furnace")),this.coordEl=document.createElement("div"),this.coordEl.style.cssText="position:fixed;left:8px;top:8px;z-index:30;padding:4px 8px;font:14px Zpix,monospace;color:#fff;background:rgba(0,0,0,.45);white-space:pre;display:none;pointer-events:none;text-shadow:1px 1px 0 #000;",document.body.appendChild(this.coordEl),this.furnaceUI.onChange=()=>this.hotbar.render(this.inv),this.furnaceUI.onClose=()=>this.closeFurnace(),this.invUI.onChange=()=>this.hotbar.render(this.inv),this.invUI.onClose=()=>this.closeCrafting(),this.physWorld={isSolid:(f,g,_)=>ge(this.world.getBlock(f,g,_)),isWater:(f,g,_)=>dn(this.world.getBlock(f,g,_))};const o=((u=e.playerByDimension)==null?void 0:u[this.dimension])??e.player;this.worldSpawn=this.findSpawn(e.seed);const a=o?{x:o.x,y:o.y,z:o.z}:this.worldSpawn;this.player={pos:{...a},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.chunks.update(Jt(Math.floor(a.x)),Jt(Math.floor(a.z)),2,999);const l=((d=e.mobsByDimension)==null?void 0:d[this.dimension])??e.mobs;if(l&&l.length)for(const f of l)this.mobs.push(tu(f));else for(let f=0;f<4;f++)this.mobs.push(...Jh(Ru[f%4],a.x,a.z,this.mobRng,this.spawnWorld,this.surfaceY,6,26));if(e.furnaces)for(const[f,g]of Object.entries(e.furnaces))this.furnaces.set(f,g);const c=new We(1.001,1.001,1.001);this.highlight=new Jv(new Qv(c),new ud({color:0,transparent:!0,opacity:.35})),this.highlight.visible=!1,this.renderer.scene.add(this.highlight);const h=gf();this.look=new RS(t,!h),this.look.yaw=o?o.yaw:Math.atan2(-a.z,-a.x),this.look.pitch=o?o.pitch:-.18,this.touch=h?new IS(document.getElementById("touch-controls"),{look:(f,g)=>this.look.rotate(f,g),primaryDown:()=>this.beginPrimaryAction(),primaryUp:()=>this.stopDigging(),useDown:()=>this.onUseDown(),useUp:()=>{this.releaseBow(),this.stopEating()},cancelUse:()=>{this.drawingBow=!1,this.bowCharge=0,this.stopEating()},inventory:()=>{this.furnaceKey?this.closeFurnace():this.craftingGrid>0?this.closeCrafting():this.openCrafting(2)},pause:()=>window.dispatchEvent(new Event("mineworld:touch-pause"))}):null,t.addEventListener("contextmenu",f=>f.preventDefault()),t.addEventListener("mousedown",f=>{document.pointerLockElement===t&&(f.button===0?this.beginPrimaryAction():f.button===2&&this.onUseDown())}),window.addEventListener("mouseup",f=>{f.button===0?this.stopDigging():f.button===2&&(this.releaseBow(),this.stopEating())}),document.addEventListener("pointerlockchange",()=>{this.touch||document.pointerLockElement!==t&&(this.stopDigging(),this.drawingBow=!1,this.bowCharge=0,this.stopEating())}),window.addEventListener("keydown",f=>{if(f.code==="KeyE"){this.furnaceKey?this.closeFurnace():this.craftingGrid>0?this.closeCrafting():this.isGameplayActive()&&this.openCrafting(2);return}if(f.code==="F3"){f.preventDefault(),this.coordOn=!this.coordOn,this.coordEl.style.display=this.coordOn?"block":"none";return}if(f.code==="Escape"&&this.furnaceKey){this.closeFurnace();return}if(f.code==="Escape"&&this.craftingGrid>0){this.closeCrafting();return}const g=Number(f.key);Number.isInteger(g)&&g>=1&&g<=Eu&&this.hotbar.setSelected(g-1)}),t.addEventListener("wheel",f=>{f.preventDefault(),this.hotbar.scroll(Math.sign(f.deltaY))},{passive:!1})}isGameplayActive(){var t;return((t=this.touch)==null?void 0:t.isActive)??document.pointerLockElement===this.canvas}usesTouchControls(){return this.touch!==null}setTouchActive(t){var e;(e=this.touch)==null||e.setActive(t&&!this.dead&&this.craftingGrid===0&&!this.furnaceKey)}readMovement(){var n;const t=AS();if(!((n=this.touch)!=null&&n.isActive))return t;const e=this.touch.readMove();return{forward:Math.max(-1,Math.min(1,t.forward+e.forward)),right:Math.max(-1,Math.min(1,t.right+e.right)),sprint:t.sprint||e.sprint,jumpHeld:t.jumpHeld||e.jumpHeld,crouch:t.crouch||e.crouch}}beginPrimaryAction(){if(!this.isGameplayActive())return;const t=this.mobUnderCrosshair();if(t){const e=performance.now();e-this.lastMeleeMs>=500&&(this.attackMob(t),this.lastMeleeMs=e);return}this.digging=!0,this.digTarget=null}stopDigging(){this.digging=!1,this.digProgress=0,this.digTarget=null,this.crack.hide()}buildDimension(t){this.world=new Cd(this.save.seed,t),this.world.editHook=(e,n,s)=>{for(const r in this.save.edits){const o=Su(r);o.dim===t&&o.x>>4===e&&o.z>>4===n&&s.set(o.x&15,o.y,o.z&15,this.save.edits[r])}};for(const e of Object.keys(this.save.edits)){const n=Su(e);n.dim===t&&(this.world.setBlock(n.x,n.y,n.z,this.save.edits[e]),this.fluidSim.activate(n.x,n.y,n.z))}}switchDimension(t,e){var o,a,l;((o=this.save).playerByDimension??(o.playerByDimension={}))[this.dimension]={x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.look.yaw,pitch:this.look.pitch},((a=this.save).mobsByDimension??(a.mobsByDimension={}))[this.dimension]=this.mobs.map(Qh);const n=this.world;this.dimension=t,this.save.currentDimension=t,this.buildDimension(t),this.chunks.setWorld(this.world),n.dispose(),this.mobs.length=0;for(const c of((l=this.save.mobsByDimension)==null?void 0:l[t])??[])this.mobs.push(tu(c));this.player={pos:{...e},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.skyObjects.setDimension(t);const s=Jt(Math.floor(e.x)),r=Jt(Math.floor(e.z));this.chunks.update(s,r,2,999),this.chunks.flushMesh(64),this.portalCooldown=60}snapshot(){var e,n;this.save.player={x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z,yaw:this.look.yaw,pitch:this.look.pitch},this.save.inv=bS(this.inv);const t=this.survival;return this.save.survival={health:t.health,food:t.food,saturation:t.saturation,exhaustion:t.exhaustion,oxygen:t.oxygen,oxygenTimer:t.oxygenTimer},this.save.worldTime=this.worldTime,this.save.mobs=this.mobs.map(Qh),this.save.furnaces=Object.fromEntries(this.furnaces),this.save.currentDimension=this.dimension,((e=this.save).playerByDimension??(e.playerByDimension={}))[this.dimension]={...this.save.player},((n=this.save).mobsByDimension??(n.mobsByDimension={}))[this.dimension]=this.save.mobs,this.save.lastPlayed=Date.now(),this.save}findSpawn(t){for(let e=1;e<160;e++)for(let n=-e;n<=e;n++)for(const[s,r]of[[n,-e],[n,e],[-e,n],[e,n]]){const o=Pe(s,r,t),a=(c,h)=>this.world.getBlock(c,o+1,h)===0&&this.world.getBlock(c,o+2,h)===0,l=this.world.getBlock(s,o,r)!==0&&this.world.getBlock(s,o-1,r)!==0&&this.world.getBlock(s,o-2,r)!==0;if(o>Se&&o<=Se+4&&l&&a(s,r)&&a(s+1,r)&&a(s-1,r)&&a(s,r+1)&&a(s,r-1))return{x:s+.5,y:o+1,z:r+.5}}return{x:.5,y:Se+3,z:.5}}async preloadSpawn(t=3){const e=Jt(Math.floor(this.player.pos.x)),n=Jt(Math.floor(this.player.pos.z));for(let l=-t;l<=t;l++)for(let c=-t;c<=t;c++)this.world.request(e+c,n+l);await new Promise(l=>{const c=()=>{let h=!0;for(let u=-t;u<=t&&h;u++)for(let d=-t;d<=t&&h;d++)this.world.peek(e+d,n+u)||(h=!1);h?l():setTimeout(c,30)};c()});const s=(t+1)*wt,r=Math.floor(this.player.pos.x),o=Math.floor(this.player.pos.z);iu(this.fluidSim,{isWater:(l,c,h)=>dn(this.world.getBlock(l,c,h)),isAir:(l,c,h)=>this.world.getBlock(l,c,h)===un},{minX:r-s,maxX:r+s,minZ:o-s,maxZ:o+s,minY:Math.max(1,Se-48),maxY:Math.min(me-1,Se+2)}),_S(this.fluidSim,this.fluidGrid,1200);for(let l=-t;l<=t;l++)for(let c=-t;c<=t;c++)this.wateredChunks.add(`${e+c},${n+l}`);const a=Math.ceil((t*2+1)**2/4)+1;for(let l=0;l<a+240&&(this.chunks.update(e,n,t,4),this.chunks.flushMesh(8),await new Promise(c=>requestAnimationFrame(()=>c())),!(l>=a&&!this.chunks.meshBusy()));l++);}activateNearbyWater(){const n=Jt(Math.floor(this.player.pos.x)),s=Jt(Math.floor(this.player.pos.z)),r=Math.max(1,Se-48),o=Math.min(me-1,Se+2);let a=0;for(const l of vS(n,s,4,this.wateredChunks)){if(a>=3)break;const[c,h]=l.split(",").map(Number);this.world.peek(c,h)&&(iu(this.fluidSim,{isWater:(u,d,f)=>dn(this.world.getBlock(u,d,f)),isAir:(u,d,f)=>this.world.getBlock(u,d,f)===un},{minX:c*wt,maxX:c*wt+wt-1,minZ:h*wt,maxZ:h*wt+wt-1,minY:r,maxY:o}),this.wateredChunks.add(l),a++)}}start(){this.last=performance.now();const t=e=>{var h;requestAnimationFrame(t);const n=Math.min(e-this.last,100)/1e3;this.acc+=e-this.last,this.last=e,this.acc>250&&(this.acc=250);const s=this.isGameplayActive();for(;s&&this.acc>=Xr;){this.prev=this.player;const u=this.readMovement(),d=CS()||(((h=this.touch)==null?void 0:h.consumeJump())??!1);this.creative&&d&&(this.flyTapWindow>0?(this.flying=!this.flying,this.flyTapWindow=0):this.flyTapWindow=6),this.flyTapWindow>0&&this.flyTapWindow--,this.creative||(this.flying=!1),this.crouching=this.flying?!1:u.crouch,this.player=yy(this.player,{forward:u.forward,right:u.right,yaw:this.look.yaw,jump:d,swimUp:u.jumpHeld,sprint:u.sprint,crouch:this.flying?!1:u.crouch,slow:this.eating,fly:this.flying,flyUp:u.jumpHeld,flyDown:u.crouch},this.physWorld),this.stepSurvival(u.sprint,d),++this.worldTime>=sn&&(this.worldTime=0),++this.fluidTick>=5&&(this.fluidTick=0,this.activateNearbyWater(),this.fluidSim.tick(this.fluidGrid),this.chunks.remeshDirty());for(const f of this.furnaces.values())c1(f)&&l1(f);this.furnaceKey&&this.furnaceUI.render(),this.tickMobs(),this.tickArrows(),this.tickLeafDecay(),this.portalCooldown>0&&this.portalCooldown--,this.tickPortalTravel(),this.acc-=Xr}s||(this.acc=0);const r=n>.026?3:(n>.018,4);this.chunks.update(Jt(Math.floor(this.player.pos.x)),Jt(Math.floor(this.player.pos.z)),this.renderDistance,r,Math.cos(this.look.yaw),Math.sin(this.look.yaw));const o=performance.now()+6;for(;this.chunks.meshQueueLen()>0&&performance.now()<o;)this.chunks.flushMesh(1);if(++this.evictCt>=45){this.evictCt=0;const u=Math.max(this.renderDistance+4,12);this.world.evictBeyond(Jt(Math.floor(this.player.pos.x)),Jt(Math.floor(this.player.pos.z)),u)}this.chunks.cullToView(this.player.pos.x,this.player.pos.z,Math.cos(this.look.yaw),Math.sin(this.look.yaw));const a=s&&this.readMovement().sprint?80:70;this.fov+=(a-this.fov)*.15,this.renderer.camera.fov=this.fov,this.renderer.camera.updateProjectionMatrix(),s?(this.updateMining(n),this.updateDrops(n),this.updateEating(n),this.updateBow(n),this.statusBar.render(this.survival),this.digging&&this.hand.swing()):this.crack.hide(),this.chunks.animateWater(n),this.updateDayNight(),this.skyObjects.update(this.worldTime,this.renderer.camera.position),++this.shadowTick>=6&&(this.shadowTick=0,this.chunks.updateSun(this.worldTime,this.player.pos.x,this.player.pos.y,this.player.pos.z),this.renderer.markShadowDirty()),this.updateWater(),this.updateHighlight(),this.updateCamera(this.acc/Xr),this.particles=F1(this.particles,n),this.particleFx.sync(this.particles),this.mobRenderer.sync(this.mobs,n,this.entityLight),this.arrowRenderer.sync(this.arrows);const l=this.inv[this.hotbar.index];this.hand.setHeld(l?l.id:null),this.hand.setEating(s&&this.eating);const c=Math.min(1,Math.hypot(this.player.vel.x,this.player.vel.z)/.22);if(this.hand.update(n,s?c:0),this.hand.setBrightness(this.entityLight(this.player.pos.x,this.player.pos.y+wn,this.player.pos.z)),this.hand.camera.aspect!==this.renderer.camera.aspect&&this.hand.resize(this.renderer.camera.aspect),this.coordOn){const u=this.player.pos,d=this.chunks.pipelineStats();this.coordEl.textContent=`XYZ  ${Math.floor(u.x)} / ${Math.floor(u.y)+q1} / ${Math.floor(u.z)}
区块 已上屏${d.meshed} 可见${d.visible} 派发中${d.pending} 待上屏${d.queued}`}this.updateGodRays(),this.renderer.render(),this.renderer.renderOverlay(this.hand.scene,this.hand.camera)};requestAnimationFrame(t)}stepSurvival(t,e){if(this.creative){this.fallDistance=0;return}this.hurtCd>0&&this.hurtCd--;const n=this.player.pos.x-this.prev.pos.x,s=this.player.pos.z-this.prev.pos.z,r=this.player.pos.y-this.prev.pos.y;t&&_i(this.survival,K1*Math.hypot(n,s)),e&&_i(this.survival,t?j1:Z1);const o=Math.floor(this.player.pos.x),a=Math.floor(this.player.pos.z),l=dn(this.world.getBlock(o,Math.floor(this.player.pos.y),a)),c=HS(this.fallDistance,r,this.player.onGround,l);this.fallDistance=c.fallDistance,c.damage>0&&(this.hurtPlayer(c.damage,0,0,!0),_i(this.survival,Q1)),G1(this.player.pos.x,this.player.pos.y,this.player.pos.z,(g,_,p)=>this.world.getBlock(g,_,p))&&this.hurtPlayer(1,0,0,!0);const h=sl(this.world.getBlock(o,Math.floor(this.player.pos.y),a)),u=sl(this.world.getBlock(o,Math.floor(this.player.pos.y+.9),a));(h||u)&&this.hurtPlayer(4,0,0,!0);const d=dn(this.world.getBlock(o,Math.floor(this.player.pos.y+wn),a)),f=this.survival.health;VS(this.survival,d),this.survival.health<f&&this.flashHurt(),GS(this.survival),Ia(this.survival)&&!this.dead&&this.die()}flashHurt(){this.hand.hurtShake();const t=document.getElementById("hurt");t&&(t.classList.remove("flash"),t.offsetWidth,t.classList.add("flash"))}hurtPlayer(t,e,n,s=!1){if(!this.creative){if(this.hurtCd>0){t>this.hurtWindowMax&&(uo(this.survival,t-this.hurtWindowMax),this.hurtWindowMax=t,this.flashHurt(),Ia(this.survival)&&!this.dead&&this.die());return}if(this.hurtCd=10,this.hurtWindowMax=t,uo(this.survival,t),this.flashHurt(),!s){const r=Math.hypot(e,n)||1;this.player.kbx=e/r*Du,this.player.kbz=n/r*Du,this.player.vel.y=cE}Ia(this.survival)&&!this.dead&&this.die()}}die(){this.dead=!0,this.stopDigging(),this.stopEating();const t=Math.floor(this.player.pos.x),e=Math.floor(this.player.pos.y),n=Math.floor(this.player.pos.z);for(let s=0;s<this.inv.length;s++){const r=this.inv[s];r&&r.count>0&&this.drops.push(hn(r.id,t,e,n,Math.random,r.count,r.dur)),this.inv[s]=null}this.hotbar.render(this.inv),this.dropRenderer.sync(this.drops,this.entityLight),this.touch?(this.touch.setActive(!1),window.dispatchEvent(new Event("mineworld:touch-death"))):document.exitPointerLock()}isDead(){return this.dead}setTexturePack(t){if(t===this.texturePack)return;this.texturePack=t,zh(t);const e=rl(t);this.chunks.setAtlas(e),this.hand.setAtlas(e),this.dropRenderer.setAtlas(e),this.hotbar.render(this.inv)}setLightingQuality(t){this.lightingQuality=t,this.chunks.setLightingQuality(t),this.skyObjects.setLightingQuality(t),t==="off"&&this.renderer.setGodRays(null)}setRenderDistance(t){this.renderDistance=t;const e=t*16;this.normalFog instanceof cs&&(this.normalFog.near=e*.72,this.normalFog.far=e),this.chunks.setFogFar(e)}respawn(){this.survival=Da(),this.dead=!1,this.fallDistance=0;const t=this.worldSpawn;this.player={pos:{...t},vel:{x:0,y:0,z:0},onGround:!1},this.prev=this.player,this.chunks.update(Jt(Math.floor(t.x)),Jt(Math.floor(t.z)),2,999),this.statusBar.render(this.survival)}onUseDown(){const t=this.rayHit();if(t&&this.world.getBlock(t.x,t.y,t.z)===xd){this.openCrafting(3);return}if(t&&this.world.getBlock(t.x,t.y,t.z)===Sh){this.openFurnace(t.x,t.y,t.z);return}const e=this.inv[this.hotbar.index];if(t&&e&&e.id===sf&&this.world.getBlock(t.x,t.y,t.z)===Pn){const n=p1((s,r,o)=>this.world.getBlock(s,r,o),t.x,t.y,t.z);if(n){for(const[s,r,o]of n)this.edit(s,r,o,Eo);return}}if(e&&e.id===Fs&&SS(this.inv,ts)>0){this.drawingBow=!0,this.bowCharge=0;return}e&&e.count>0&&Oh(e.id)&&this.survival.food<Ws?(this.eating=!0,this.eatProgress=0):this.placeBlock()}updateBow(t){if(!this.drawingBow)return;const e=this.inv[this.hotbar.index];if(!e||e.id!==Fs){this.drawingBow=!1,this.bowCharge=0;return}this.bowCharge=Math.min(this.bowCharge+t,Pu)}releaseBow(){if(!this.drawingBow)return;this.drawingBow=!1;const t=this.bowCharge;this.bowCharge=0;const e=this.inv[this.hotbar.index];if(!e||e.id!==Fs||t<Xa||ES(this.inv,ts,1)<1)return;this.hotbar.render(this.inv);const n=(t-Xa)/(Pu-Xa),s=Lu+n*(aE-Lu),r=Math.max(1,Math.round(2+n*(lE-2))),o=Math.cos(this.look.yaw),a=Math.sin(this.look.yaw),l=Math.cos(this.look.pitch),c=Math.sin(this.look.pitch),h=this.player.pos.x,u=this.player.pos.y+wn,d=this.player.pos.z;this.arrows.push(Yh(h+o*l*.4,u+c*.4,d+a*l*.4,o*l,c,a*l,s,!0,r)),this.hand.swing()}isCraftingOpen(){return this.craftingGrid>0}openCrafting(t){this.craftingGrid=t,this.invUI.show(this.inv,t),this.touch?this.touch.setActive(!1):document.exitPointerLock()}closeCrafting(){this.craftingGrid=0,this.invUI.hide(),this.touch?this.touch.setActive(!this.dead):this.canvas.requestPointerLock()}openFurnace(t,e,n){const s=`${t},${e},${n}`;let r=this.furnaces.get(s);r||(r=a1(),this.furnaces.set(s,r)),this.furnaceKey=s,this.furnaceUI.show(this.inv,r),this.touch?this.touch.setActive(!1):document.exitPointerLock()}closeFurnace(){this.furnaceKey=null,this.furnaceUI.hide(),this.touch?this.touch.setActive(!this.dead):this.canvas.requestPointerLock()}stopEating(){this.eating=!1,this.eatProgress=0}updateEating(t){if(!this.eating)return;const e=this.hotbar.index,n=this.inv[e];if(!n||n.count<=0||!Oh(n.id)||this.survival.food>=Ws){this.stopEating();return}if(this.eatProgress+=t,this.eatFxT+=t,this.eatFxT>=.09){this.eatFxT=0;const s=Math.cos(this.look.yaw),r=Math.sin(this.look.yaw),o=Math.cos(this.look.pitch),a=Math.sin(this.look.pitch),l=this.player.pos.x+s*o*.4,c=this.player.pos.y+wn-.18+a*.4,h=this.player.pos.z+r*o*.4;this.particles.push(...di(l,c,h,Xi(n.id),2))}if(this.eatProgress>=$1){const s=YM(n.id),r=su(this.inv,e);s&&r!==null&&(zS(this.survival,s),this.hotbar.render(this.inv)),this.eatProgress=0}}rayHit(){const t={x:this.player.pos.x,y:this.player.pos.y+wn,z:this.player.pos.z},e=Math.cos(this.look.yaw),n=Math.sin(this.look.yaw),s=Math.cos(this.look.pitch),r=Math.sin(this.look.pitch),o={x:e*s,y:r,z:n*s};return Rh(t,o,this.creative?W1:V1,(a,l,c)=>Nx(this.world.getBlock(a,l,c)))}edit(t,e,n,s){this.world.setBlock(t,e,n,s),this.save.edits[Wr(this.dimension,t,e,n)]=s,this.fluidSim.activate(t,e,n),this.chunks.remeshDirty()}editDim(t,e,n,s,r){this.save.edits[Wr(t,e,n,s)]=r}worldAt(t,e,n,s,r){if(t===this.dimension)return this.world.getBlock(e,n,s);const o=this.save.edits[Wr(t,e,n,s)];if(o!==void 0)return o;if(n<0||n>=me)return 0;const a=Jt(e),l=Jt(s),c=`${t}:${a},${l}`;let h=r==null?void 0:r.get(c);return h||(h=Ad(a,l,this.save.seed,t),r==null||r.set(c,h)),h.get(Qe(e),n,Qe(s))}tickPortalTravel(){var h;const t=this.player.pos,e=Math.floor(t.x),n=Math.floor(t.y),s=Math.floor(t.z),r=Ux(this.world.getBlock(e,n,s));if(this.portalTimer=r?this.portalTimer+Xr/1e3:0,r||(this.portalArmed=!0),!r||!this.portalArmed||this.portalCooldown!==0||this.portalTimer<4)return;const o=this.dimension==="overworld"?"nether":"overworld",a=`${this.dimension}:${e},${n},${s}`,l=(h=this.save).portalLinks??(h.portalLinks={});let c=l[a];if(!c){const u=new Map,[d,f]=m1(this.dimension,t.x,t.z),g=_1((_,p,m)=>this.worldAt(o,_,p,m,u),o,d,f);u.clear();for(const[_,p,m,x]of g.edits)this.editDim(o,_,p,m,x);c=[g.spawn.x,g.spawn.y,g.spawn.z],l[a]=c,l[`${o}:${Math.floor(c[0])},${Math.floor(c[1])},${Math.floor(c[2])}`]=[t.x,t.y,t.z]}this.portalArmed=!1,this.portalTimer=0,this.switchDimension(o,{x:c[0],y:c[1],z:c[2]})}queueLeafDecay(t,e,n){for(const s of lM((r,o,a)=>this.world.getBlock(r,o,a),t,e,n))this.decayQueue.some(r=>r.x===s.x&&r.y===s.y&&r.z===s.z)||this.decayQueue.push({x:s.x,y:s.y,z:s.z,t:40+Math.floor(Math.random()*160)})}tickLeafDecay(){if(this.decayQueue.length!==0)for(let t=this.decayQueue.length-1;t>=0;t--){const e=this.decayQueue[t];if(--e.t>0)continue;this.decayQueue.splice(t,1);const n=this.world.getBlock(e.x,e.y,e.z);n!==Gs&&n!==To||(this.edit(e.x,e.y,e.z,un),this.particles.push(...di(e.x+.5,e.y+.5,e.z+.5,Xi(n),8)),Math.random()<wu&&this.drops.push(hn(so,e.x,e.y,e.z)))}}updateMining(t){if(!this.digging){this.crack.hide();return}const e=this.rayHit();if(!e){this.digProgress=0,this.digTarget=null,this.crack.hide();return}(!this.digTarget||this.digTarget.x!==e.x||this.digTarget.y!==e.y||this.digTarget.z!==e.z)&&(this.digTarget={x:e.x,y:e.y,z:e.z},this.digProgress=0);const n=this.world.getBlock(e.x,e.y,e.z);if(Sd(n)<0){this.crack.hide();return}const s=this.creative?0:Ox(n,this.heldTool())/1e3;if(s<=0){this.mineBlock(e.x,e.y,e.z,n);return}this.digProgress+=t,this.digProgress>=s?this.mineBlock(e.x,e.y,e.z,n):(this.crack.show(e.x,e.y,e.z,this.digProgress/s),this.digFxT+=t,this.digFxT>=.07&&(this.digFxT=0,this.particles.push(...di(e.x+.5,e.y+.5,e.z+.5,Xi(n),3))))}heldTool(){const t=this.inv[this.hotbar.index];return t?Os(t.id):null}settleFallingAt(t,e,n){let s=e+1;for(;;){const r=this.world.getBlock(t,s,n);if(r!==Rx&&r!==Eh)break;let o=s-1;for(;o>1&&this.world.getBlock(t,o-1,n)===un;)o--;if(o>=s)break;this.edit(t,s,n,un),this.edit(t,o,n,r),s++}}mineBlock(t,e,n,s){if(Mi(s)){this.edit(t,e,n,un),this.particles.push(...di(t+.5,e+.5,n+.5,Xi(s),6)),this.digProgress=0,this.digTarget=null,this.crack.hide();return}let r=this.creative?null:zx(s,this.heldTool());r===Eh&&Math.random()<.1&&(r=tf),this.edit(t,e,n,un),s===bo&&!this.creative&&this.world.getBlock(t,e-1,n)!==un&&(this.world.setWater(t,e,n,8,!0,!1),this.fluidSim.activate(t,e,n));const o=this.world.getBlock(t,e+1,n);if((Mi(o)||o===Qi)&&(this.edit(t,e+1,n,un),o===Qi&&!this.creative&&this.drops.push(hn(Qi,t,e+1,n)),this.particles.push(...di(t+.5,e+1.5,n+.5,Xi(o),6))),this.settleFallingAt(t,e,n),this.particles.push(...di(t+.5,e+.5,n+.5,Xi(s),16)),r!==null&&this.drops.push(hn(r,t,e,n)),!this.creative&&s===Gs&&Math.random()<wu&&this.drops.push(hn(so,t,e,n)),(s===So||s===wo)&&this.queueLeafDecay(t,e,n),s===Sh){const c=this.furnaces.get(`${t},${e},${n}`);if(c){const h=[[c.input,c.inputN],[c.fuel,c.fuelN],[c.output,c.outputN]];for(const[u,d]of h)d>0&&this.drops.push(hn(u,t,e,n,Math.random,d));this.furnaces.delete(`${t},${e},${n}`)}}_i(this.survival,J1);const a=this.inv[this.hotbar.index],l=a?Os(a.id):null;l&&(ru(this.inv,this.hotbar.index,l.maxDurability),this.hotbar.render(this.inv)),this.digProgress=0,this.digTarget=null,this.crack.hide()}updateDrops(t){const e=this.player.pos.x,n=this.player.pos.y+.9,s=this.player.pos.z;QM(this.drops,ro);for(let r=this.drops.length-1;r>=0;r--){const o=this.drops[r];if(ty(o,this.physWorld,t),o.age>X1){this.drops.splice(r,1);continue}if(ey(o,e,n,s))if(o.dur!==void 0)yS(this.inv,o.id,o.dur)&&(this.drops.splice(r,1),this.hotbar.render(this.inv));else{const a=us(this.inv,o.id,o.count,ro(o.id));a<o.count&&this.hotbar.render(this.inv),a===0?this.drops.splice(r,1):o.count=a}}this.dropRenderer.sync(this.drops,this.entityLight)}tickMobs(){const t=this.player.pos.x,e=this.player.pos.z,n={x:t,y:this.player.pos.y,z:e};let s=0,r=0,o=0;for(let a=this.mobs.length-1;a>=0;a--){const l=this.mobs[a],c=l.pos.x-t,h=l.pos.z-e,u=c*c+h*h;if(u>Au*Au){this.mobs.splice(a,1);continue}const d=Ay(l.kind);d&&o++,u<Cu*Cu&&(s++,d&&r++);const f=d?Zy(l,this.physWorld,this.mobRng,n,this.isSunlit(l)):Uy(l,this.physWorld,this.mobRng);Object.assign(l,f.mob);let g=!1;for(const _ of f.events)if(_.kind==="layEgg")this.drops.push(hn(jd,Math.floor(_.pos.x),Math.floor(_.pos.y),Math.floor(_.pos.z)));else if(_.kind==="attackPlayer")this.hurtPlayer(_.damage,t-l.pos.x,e-l.pos.z),l.kind==="husk"&&_i(this.survival,3);else if(_.kind==="shootArrow")this.arrows.push(Yh(_.from.x,_.from.y,_.from.z,_.dir.x,_.dir.y,_.dir.z,uf,!1,_.damage));else if(_.kind==="explode")this.explode(_.pos,_.radius,_.damage);else if(_.kind==="drops")for(const p of _.items)this.drops.push(hn(p.id,Math.floor(_.pos.x),Math.floor(_.pos.y),Math.floor(_.pos.z),Math.random,p.count));else _.kind==="death"&&(g=!0);g&&this.mobs.splice(a,1)}if(++this.mobSpawnTick>=sE){if(this.mobSpawnTick=0,s<eE&&this.mobs.length<Tu){const l=this.player.vel,c=Math.hypot(l.x,l.z)>.001?Math.atan2(l.z,l.x):null;this.mobs.push(...Jh(Ru[Math.floor(this.mobRng()*4)],t,e,this.mobRng,this.spawnWorld,this.surfaceY,24,44,c,Math.PI/2))}let a=Math.min(iE-o,Tu-this.mobs.length);if(r<nE&&a>0){const l=this.mobRng(),c=Yi(t,e,this.save.seed),h=Jy(c,l),u=(f,g,_)=>{const[p,m]=this.chunks.lightLevelAt(f,g,_);return Math.max(m,p-this.skyDarkenNow)},d=eS(h,t,this.player.pos.y,e,this.mobRng,this.spawnWorld,this.surfaceY,void 0,void 0,u).slice(0,a);this.mobs.push(...d),a-=d.length,a>0&&this.mobs.push(...tS(h,t,e,this.mobRng,this.spawnWorld,this.surfaceY,void 0,void 0,u).slice(0,a))}}}explode(t,e,n){const s=Math.floor(t.x),r=Math.floor(t.y),o=Math.floor(t.z),a=e*e,l=Math.ceil(e);for(let g=-l;g<=l;g++)for(let _=-l;_<=l;_++)for(let p=-l;p<=l;p++){if(p*p+g*g+_*_>a)continue;const m=s+p,x=r+g,v=o+_,w=this.world.getBlock(m,x,v);!ge(w)&&!Mi(w)||w===El||w===Pn||(this.world.setBlock(m,x,v,un),this.save.edits[Wr(this.dimension,m,x,v)]=un,this.fluidSim.activate(m,x,v))}for(let g=-l;g<=l;g++)for(let _=-l;_<=l;_++)this.settleFallingAt(s+_,r-l,o+g);this.chunks.remeshDirty(),this.particles.push(...di(t.x,t.y+.4,t.z,[.33,.33,.33],30));const c=this.player.pos,h=c.x-t.x,u=c.z-t.z,d=Math.hypot(h,c.y+.9-t.y,u);let f=Math.round(n*(1-d/(e+1.5)));f>0&&this.explosionBlocked(t,{x:c.x,y:c.y+.9,z:c.z})&&(f=Math.round(f*.3)),f>0&&this.hurtPlayer(f,h,u);for(let g=this.mobs.length-1;g>=0;g--){const _=this.mobs[g],p=_.pos.x-t.x,m=_.pos.z-t.z,x=Math.hypot(p,_.pos.y+.5-t.y,m);let v=Math.round(n*(1-x/(e+1.5)));if(v>0&&this.explosionBlocked(t,{x:_.pos.x,y:_.pos.y+.5,z:_.pos.z})&&(v=Math.round(v*.3)),v<=0)continue;const w=Aa(_,v,{x:p,z:m},this.mobRng);Object.assign(_,w.mob);for(const k of w.events)if(k.kind==="drops")for(const A of k.items)this.drops.push(hn(A.id,Math.floor(k.pos.x),Math.floor(k.pos.y),Math.floor(k.pos.z),Math.random,A.count));else k.kind==="death"&&this.mobs.splice(g,1)}}explosionBlocked(t,e){for(let s=1;s<8;s++){const r=s/8,o=Math.floor(t.x+(e.x-t.x)*r),a=Math.floor(t.y+(e.y-t.y)*r),l=Math.floor(t.z+(e.z-t.z)*r);if(ge(this.world.getBlock(o,a,l)))return!0}return!1}isSunlit(t){return iS(t,this.world,ll(this.worldTime).isNight)}tickArrows(){const t=(e,n,s,r,o,a,l,c)=>e>=r-l&&e<=r+l&&n>=a&&n<=a+c&&s>=o-l&&s<=o+l;for(let e=this.arrows.length-1;e>=0;e--){const n=this.arrows[e];if(n.age>rE){this.arrows.splice(e,1);continue}if(n.stuck){if(n.age++,n.age>oE){const d=n.x-this.player.pos.x,f=n.y-(this.player.pos.y+.9),g=n.z-this.player.pos.z;d*d+f*f+g*g<1.4*1.4&&us(this.inv,ts,1)===0&&(this.hotbar.render(this.inv),this.arrows.splice(e,1))}continue}const s=n.x,r=n.y,o=n.z;Ey(n,this.physWorld);const a=n.x-s,l=n.y-r,c=n.z-o,h=Math.max(1,Math.ceil(Math.hypot(a,l,c)/.2));let u=!1;for(let d=1;d<=h&&!u;d++){const f=d/h,g=s+a*f,_=r+l*f,p=o+c*f;if(n.fromPlayer)for(const m of this.mobs){const x=Qn[m.kind];if(t(g,_,p,m.pos.x,m.pos.z,m.pos.y,x.width/2,x.height)){this.damageMobWithArrow(m,n),u=!0;break}}else t(g,_,p,this.player.pos.x,this.player.pos.z,this.player.pos.y,oo/2,Ei)&&(this.hurtPlayer(n.damage,n.vx,n.vz),u=!0)}u&&this.arrows.splice(e,1)}}damageMobWithArrow(t,e){const n=Aa(t,e.damage,{x:e.vx,z:e.vz},this.mobRng);Object.assign(t,n.mob);for(const s of n.events)if(s.kind==="drops")for(const r of s.items)this.drops.push(hn(r.id,Math.floor(s.pos.x),Math.floor(s.pos.y),Math.floor(s.pos.z),Math.random,r.count));else if(s.kind==="death"){const r=this.mobs.indexOf(t);r>=0&&this.mobs.splice(r,1)}}mobUnderCrosshair(){const t=this.player.pos.x,e=this.player.pos.y+wn,n=this.player.pos.z,s=Math.cos(this.look.yaw),r=Math.sin(this.look.yaw),o=Math.cos(this.look.pitch),a=Math.sin(this.look.pitch),l=s*o,c=a,h=r*o;let u=null,d=tE;for(const f of this.mobs){const g=Qn[f.kind],_=g.width/2,p=uE(t,e,n,l,c,h,f.pos.x-_,f.pos.y,f.pos.z-_,f.pos.x+_,f.pos.y+g.height,f.pos.z+_);p!==null&&p<d&&(d=p,u=f)}return u!==null&&Rh({x:t,y:e,z:n},{x:l,y:c,z:h},d,(g,_,p)=>ge(this.world.getBlock(g,_,p)))?null:u}attackMob(t){this.hand.swing();const e=this.inv[this.hotbar.index],n=hE(e?e.id:null),s=e?Os(e.id):null;if(s){for(let l=s.kind==="sword"?1:2;l>0;l--)ru(this.inv,this.hotbar.index,s.maxDurability);this.hotbar.render(this.inv)}const r=Math.cos(this.look.yaw),o=Math.sin(this.look.yaw),a=Aa(t,n,{x:r,z:o},this.mobRng);Object.assign(t,a.mob);for(const l of a.events)if(l.kind==="drops")for(const c of l.items)this.drops.push(hn(c.id,Math.floor(l.pos.x),Math.floor(l.pos.y),Math.floor(l.pos.z),Math.random,c.count));else if(l.kind==="death"){const c=this.mobs.indexOf(t);c>=0&&this.mobs.splice(c,1)}}placeBlock(){const t=this.hotbar.index,e=this.inv[t];if(!e||e.count<=0||e.id>=256)return;const n=this.rayHit();if(!n)return;const s=wh(this.world.getBlock(n.x,n.y,n.z)),r=s?n.x:n.x+n.nx,o=s?n.y:n.y+n.ny,a=s?n.z:n.z+n.nz,l=this.world.getBlock(r,o,a);if(!wh(l)||this.overlapsPlayer(r,o,a))return;const c=this.creative?e.id:su(this.inv,t);c!==null&&(this.edit(r,o,a,c),this.hotbar.render(this.inv),this.hand.swing())}overlapsPlayer(t,e,n){const s=this.player.pos,r=oo/2;return t<s.x+r&&t+1>s.x-r&&e<s.y+Ei&&e+1>s.y&&n<s.z+r&&n+1>s.z-r}updateDayNight(){const t=ll(this.worldTime,this.dimension),e=this.worldTime/sn*Math.PI*2,n=Math.sin(e);let s=0;this.dimension==="overworld"&&n>-.15&&(s=Math.max(0,1-Math.abs(n)/.3)*Math.min(1,(n+.15)/.15)),this.renderer.setSkyColors(t.skyTop,t.skyHorizon,Math.atan2(.1,Math.cos(e)),s);const r=this.normalFog;r&&r.color.setRGB(t.skyHorizon[0],t.skyHorizon[1],t.skyHorizon[2],se);const o=t.worldTint,a=Math.max(o[0],o[1],o[2],.001),l=1-al(this.worldTime)/11;this.chunks.setTint([o[0]/a,o[1]/a*(1-l*.05),o[2]/a*(1-l*.15)]);const c=al(this.worldTime);this.skyDarkenNow=c,this.chunks.setSkyDarken(c),this.chunks.setSkyMul(1-c/11),this.chunks.setSkyReflection(t.skyHorizon,t.skyTop);const h=this.worldTime/sn*Math.PI*2;this.chunks.setSunDir(Math.cos(h),Math.sin(h),.1)}updateGodRays(){if(this.lightingQuality==="off")return;const t=this.worldTime/sn*Math.PI*2,e=Math.cos(t),n=Math.sin(t),s=.1,r=Math.hypot(e,n,s)||1,o=n/r,a=this.renderer.camera;a.getWorldDirection(this._godFwd);const l=this._godFwd.x*(e/r)+this._godFwd.y*(n/r)+this._godFwd.z*(s/r),c=500;this._godSunWorld.set(a.position.x+e/r*c,a.position.y+n/r*c,a.position.z+s/r*c),this._godSunWorld.project(a);const h=this._godSunWorld,u=h.x*.5+.5,d=h.y*.5+.5,f=u>=0&&u<=1&&d>=0&&d<=1;let g=0;o>0&&l>0&&f&&(g=Math.min(.6,o*2.6));const _=1,p=.6+o*.7,m=.3+o*1;this._godSunColor.setRGB(_,Math.min(1,p),Math.min(1,m)),this._godSunUV.set(u,d),this.renderer.setGodRays({quality:this.lightingQuality,sunUV:this._godSunUV,intensity:g,sunColor:this._godSunColor})}updateWater(){const t=Math.floor(this.player.pos.x),e=Math.floor(this.player.pos.y+wn),n=Math.floor(this.player.pos.z),s=dn(this.world.getBlock(t,e,n));this.renderer.scene.fog=s?this.underFog:this.normalFog,this.underwaterEl&&(this.underwaterEl.style.display=s?"block":"none")}updateHighlight(){const t=this.rayHit();t?(this.highlight.position.set(t.x+.5,t.y+.5,t.z+.5),this.highlight.visible=!0):this.highlight.visible=!1}updateCamera(t){const e=this.prev.pos,n=this.player.pos,s=e.x+(n.x-e.x)*t,r=e.y+(n.y-e.y)*t,o=e.z+(n.z-e.z)*t,a=this.renderer.camera;this.camEye+=((this.crouching?my:wn)-this.camEye)*.3;const l=this.camEye;a.position.set(s,r+l,o);const c=Math.cos(this.look.yaw),h=Math.sin(this.look.yaw),u=Math.cos(this.look.pitch),d=Math.sin(this.look.pitch);a.lookAt(s+c*u,r+l+d,o+h*u)}}const qa=4;class fE{constructor(t,e=4242){b(this,"gl");b(this,"scene",new hs);b(this,"camera",new Ve(70,1,.1,1e3));b(this,"world");b(this,"chunks");b(this,"running",!1);b(this,"x",.5);b(this,"z",.5);b(this,"heading",.7);b(this,"y",175);b(this,"onResize",()=>this.resize());var n,s;this.gl=new hd({canvas:t,antialias:!1}),this.gl.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene.background=hx(),this.scene.fog=new cs(fd,40,qa*16),this.world=new Cd(e),this.seekWater(),this.chunks=new Nd(this.scene,this.world,rl()),this.chunks.update(Jt(Math.floor(this.x)),Jt(Math.floor(this.z)),qa,999),this.resize(),window.addEventListener("resize",this.onResize),window.addEventListener("orientationchange",this.onResize),(n=window.visualViewport)==null||n.addEventListener("resize",this.onResize),(s=window.visualViewport)==null||s.addEventListener("scroll",this.onResize)}seekWater(){for(let t=4;t<120;t+=3)for(let e=0;e<12;e++){const n=e/12*Math.PI*2,s=Math.round(Math.cos(n)*t),r=Math.round(Math.sin(n)*t);if(dn(this.world.getBlock(s,Se,r))){this.heading=n,this.x=s-Math.cos(n)*14+.5,this.z=r-Math.sin(n)*14+.5;return}}}resize(){const{width:t,height:e}=pd(window);this.gl.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}async preload(t=qa){const e=Jt(Math.floor(this.x)),n=Jt(Math.floor(this.z));for(let s=-t;s<=t;s++)for(let r=-t;r<=t;r++)this.world.request(e+r,n+s);await new Promise(s=>{const r=()=>{let o=!0;for(let a=-t;a<=t&&o;a++)for(let l=-t;l<=t&&o;l++)this.world.peek(e+l,n+a)||(o=!1);o?s():setTimeout(r,30)};r()});for(let s=0;s<600&&(s<3||this.chunks.meshBusy());s++)this.chunks.update(e,n,t,999),this.chunks.flushMesh(999),await new Promise(r=>requestAnimationFrame(()=>r()))}start(){if(this.running)return;this.running=!0;const t=()=>{this.running&&(requestAnimationFrame(t),this.heading+=6e-4,this.camera.position.set(this.x,this.y,this.z),this.camera.lookAt(this.x+Math.cos(this.heading)*26,this.y-17,this.z+Math.sin(this.heading)*26),this.chunks.flushMesh(2),this.gl.render(this.scene,this.camera))};requestAnimationFrame(t)}stop(){this.running=!1}dispose(){var t,e;this.running=!1,window.removeEventListener("resize",this.onResize),window.removeEventListener("orientationchange",this.onResize),(t=window.visualViewport)==null||t.removeEventListener("resize",this.onResize),(e=window.visualViewport)==null||e.removeEventListener("scroll",this.onResize),this.chunks.dispose(),this.world.dispose(),this.gl.dispose(),this.gl.forceContextLoss()}}function pE(){if(document.getElementById("mw-settings-css"))return;const i=document.createElement("style");i.id="mw-settings-css",i.textContent=`
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
    #settings input[type=checkbox]:checked::after{content:'';position:absolute;inset:4px;background:#0e1a28;}`,document.head.appendChild(i)}class mE{constructor(t){b(this,"root");b(this,"settings");b(this,"onChange",null);this.root=t,this.settings=Pd(),t.classList.remove("hidden"),pE(),t.style.cssText="position:fixed;inset:0;z-index:40;display:none;align-items:center;justify-content:center;background:#0e1a28;",t.innerHTML=`
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
      </div>`;const e=t.querySelector("#set-vol"),n=t.querySelector("#set-vol-val"),s=t.querySelector("#set-lighting"),r=t.querySelector("#set-tex-cartoon"),o=t.querySelector("#set-tex-classic"),a=()=>{r.classList.toggle("active",this.settings.texturePack==="cartoon"),o.classList.toggle("active",this.settings.texturePack==="classic"),r.style.outline=this.settings.texturePack==="cartoon"?"2px solid #6ab0ff":"none",o.style.outline=this.settings.texturePack==="classic"?"2px solid #6ab0ff":"none"},l=()=>{var g;pM(this.settings),(g=this.onChange)==null||g.call(this,this.settings)},c=g=>{this.settings={...this.settings,texturePack:g},a(),l()},h=()=>e.style.setProperty("--fill",`${this.settings.volume}%`);e.addEventListener("input",()=>{this.settings={...this.settings,volume:Number(e.value)},n.textContent=`${this.settings.volume}%`,h(),l()}),s.addEventListener("change",()=>{this.settings={...this.settings,lightingQuality:s.value},l()}),r.addEventListener("click",()=>c("cartoon")),o.addEventListener("click",()=>c("classic"));const u=t.querySelector("#set-rd"),d=t.querySelector("#set-rd-val"),f=()=>u.style.setProperty("--fill",`${(this.settings.renderDistance-3)/9*100}%`);u.addEventListener("input",()=>{this.settings={...this.settings,renderDistance:Number(u.value)},d.textContent=String(this.settings.renderDistance),f(),l()}),t.querySelector("#set-close").addEventListener("click",()=>this.hide()),e.value=String(this.settings.volume),n.textContent=`${this.settings.volume}%`,h(),s.value=this.settings.lightingQuality,u.value=String(this.settings.renderDistance),d.textContent=String(this.settings.renderDistance),f(),a()}get current(){return this.settings}show(){this.root.style.display="flex"}hide(){this.root.style.display="none"}get visible(){return this.root.style.display!=="none"}}const Xs=document.getElementById("app"),Wt=i=>document.getElementById(i),ni=gf();document.documentElement.classList.toggle("touch-device",ni);ni&&DS();const Af=Wt("menubg");let nn=new fE(Af);const mo=Wt("menu"),dl=Wt("worldlist"),ds=Wt("pause"),Ya=Wt("world-rows");let qt=null;const Co=Wt("boot"),gE=Co.querySelector(".boot-tip"),_n=(i,t="加载中…")=>{Co.classList.toggle("hidden",!i),i&&(gE.textContent=t)};let Cf=!1;const Rf=i=>{Cf||_n(!0,`出错了：${i}（请把这行字发给开发）`)};window.addEventListener("error",i=>Rf(i.message||String(i.error)));window.addEventListener("unhandledrejection",i=>Rf(String(i.reason&&(i.reason.message||i.reason.stack)||i.reason)));const go=["100% 纯方块!","无限的世界!","由 Three.js 驱动!","会挖会放会跳!","试试双击 W 疾跑~","支持 WebGL2!","像素手工打造!","水快会流动了!","也试试我的世界!"];Wt("splash").textContent=go[Math.floor(Math.random()*go.length)];const Iu=Co.querySelector(".boot-splash");Iu&&(Iu.textContent=go[Math.floor(Math.random()*go.length)]);const qr=ni?["提示: 左摇杆移动，右半屏拖动视角","提示: 摇杆向前推满可以疾跑","提示: 按住“挖/打”挖方块","提示: 点“放/用”放置方块或使用物品","提示: 可以直接点快捷栏切换物品","提示: 石头要用镐才挖得动"]:["提示: 按住左键挖方块","提示: 双击 W 可以疾跑","提示: 右键放方块(会消耗物品)","提示: 数字键 1-9 / 滚轮 切换物品","提示: 石头要用镐才挖得动","提示: 砍树 → 木板 → 工作台 → 工具","提示: 熔炉能把铁矿炼成铁锭","提示: 天黑了小心怪物"],$a=Co.querySelector(".boot-hint");if($a){let i=Math.floor(Math.random()*qr.length);$a.textContent=qr[i],setInterval(()=>{i=(i+1)%qr.length,$a.textContent=qr[i]},2600)}function ti(i){Wt("crosshair").style.display=i?"block":"none",Wt("hotbar").style.display=i?"flex":"none",Wt("status").style.display=i?"flex":"none",qt==null||qt.setTouchActive(i&&ni)}function Ro(i){for(const e of[mo,dl,ds])e.classList.add("hidden");Wt("newworld").classList.add("hidden"),i&&i.classList.remove("hidden"),ti(!1);const t=i===mo||i===dl;Af.style.display=t?"block":"none",t?nn==null||nn.start():nn==null||nn.stop()}const Pf=i=>new Promise(t=>setTimeout(t,i));(async()=>{_n(!0,"加载中…");try{nn&&await Promise.race([nn.preload(),Pf(8e3)])}catch(i){console.error("[menubg] preload 失败:",i)}Ro(mo),_n(!1)})();const kl=new mE(Wt("settings"));kl.onChange=i=>{qt==null||qt.setTexturePack(i.texturePack),qt==null||qt.setLightingQuality(i.lightingQuality),qt==null||qt.setRenderDistance(i.renderDistance)};Wt("settings-btn").addEventListener("click",()=>kl.show());Wt("settings-btn-pause").addEventListener("click",()=>kl.show());Wt("play").addEventListener("click",()=>_E());Wt("fullscreen").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()});Wt("about").addEventListener("click",()=>Wt("about-panel").classList.remove("hidden"));Wt("about-close").addEventListener("click",()=>Wt("about-panel").classList.add("hidden"));function _E(){Lf(),Ro(dl)}function Lf(){Ya.innerHTML="";const i=O1();if(i.length===0){const t=document.createElement("div");t.className="world-empty",t.textContent="还没有世界, 点 创建新世界 开始吧",Ya.appendChild(t);return}for(const t of i){const e=document.createElement("div");e.className="world-row";const n=document.createElement("span");n.className="wname",n.textContent=t.name;const s=document.createElement("span");s.className="wmeta",s.textContent=`种子 ${t.seed}${t.gameMode==="creative"?" · 创造":""}`;const r=document.createElement("span");r.className="wdel",r.textContent="删除",r.addEventListener("click",o=>{o.stopPropagation(),H1(t.id),Lf()}),e.append(n,s,r),e.addEventListener("click",()=>Uf(t)),Ya.appendChild(e)}}const Fl=Wt("newworld"),_o=Wt("nw-name"),Ol=Wt("nw-seed"),vE=Wt("nw-mode-desc");let Df="survival";function zl(i){Df=i,Wt("nw-survival").classList.toggle("active",i==="survival"),Wt("nw-creative").classList.toggle("active",i==="creative"),vE.textContent=i==="creative"?"无限方块、自由飞行（双击空格）、无敌不饿——专心建造。":"挖矿、合成、打怪，会饿会死。"}function If(){const i=B1(_o.value,z1(Ol.value)??void 0,Df);Fl.classList.add("hidden"),Uf(i)}Wt("nw-survival").addEventListener("click",()=>zl("survival"));Wt("nw-creative").addEventListener("click",()=>zl("creative"));Wt("create-world").addEventListener("click",()=>{_o.value="",Ol.value="",zl("survival"),Fl.classList.remove("hidden"),_o.focus()});Wt("nw-create").addEventListener("click",If);Wt("nw-cancel").addEventListener("click",()=>Fl.classList.add("hidden"));for(const i of[_o,Ol])i.addEventListener("keydown",t=>{t.key==="Enter"&&If()});Wt("worldlist-back").addEventListener("click",()=>Ro(mo));function Uf(i){if(!qt){Ro(null),_n(!0,"进入中…");try{nn==null||nn.dispose()}catch(t){console.error("[startGame] 菜单背景释放出错(忽略,继续):",t)}nn=null,requestAnimationFrame(()=>requestAnimationFrame(async()=>{try{_n(!0,"进入中…①构建世界"),qt=new dE(Xs,i),_n(!0,"进入中…②生成出生区块"),await Promise.race([qt.preloadSpawn(),Pf(12e3)]),_n(!0,"进入中…③启动渲染"),qt.start(),Cf=!0,window.__mw=qt,_n(!1),ni?(ti(!0),qt.setTouchActive(!0)):Xs.requestPointerLock()}catch(t){console.error("[startGame] 进入游戏失败:",t);const e=t instanceof Error?`${t.stack??t.message}`:String(t);_n(!0,`进入失败：${e}`)}}))}}Wt("resume").addEventListener("click",()=>{ni?(ds.classList.add("hidden"),ti(!0)):Xs.requestPointerLock()});Wt("save-quit").addEventListener("click",()=>{qt&&Ms(qt.snapshot()),_n(!0,"保存并返回主菜单…"),location.reload()});const vo=Wt("death");document.addEventListener("pointerlockchange",()=>{if(ni)return;if(document.pointerLockElement===Xs)ds.classList.add("hidden"),vo.style.display="none",ti(!0);else if(qt){if(Ms(qt.snapshot()),qt.isCraftingOpen())return;ti(!1),qt.isDead()?vo.style.display="flex":ds.classList.remove("hidden")}});window.addEventListener("mineworld:touch-pause",()=>{!qt||qt.isDead()||(Ms(qt.snapshot()),ti(!1),ds.classList.remove("hidden"))});window.addEventListener("mineworld:touch-death",()=>{ti(!1),ds.classList.add("hidden"),vo.style.display="flex"});Wt("respawn").addEventListener("click",()=>{qt&&(qt.respawn(),vo.style.display="none",ni?ti(!0):Xs.requestPointerLock())});setInterval(()=>{qt!=null&&qt.isGameplayActive()&&Ms(qt.snapshot())},15e3);window.addEventListener("beforeunload",()=>{qt&&Ms(qt.snapshot())});
