(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const jn="168",Vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ol=0,As=1,Fl=2,Rs=1,Bl=2,qt=3,si=0,bt=1,Kt=2,oi=0,Xi=1,Cs=2,Ps=3,Ls=4,zl=5,Ei=100,kl=101,Hl=102,Gl=103,Vl=104,Wl=200,Xl=201,jl=202,Yl=203,Yn=204,qn=205,ql=206,Kl=207,Zl=208,Jl=209,Ql=210,$l=211,ec=212,tc=213,ic=214,rc=0,nc=1,ac=2,Kr=3,sc=4,oc=5,lc=6,cc=7,Us=0,hc=1,uc=2,li=0,dc=1,pc=2,fc=3,mc=4,gc=5,_c=6,vc=7,Ds=300,ji=301,Yi=302,Kn=303,Zn=304,Zr=306,Jn=1e3,Ti=1001,Qn=1002,Ct=1003,xc=1004,Jr=1005,Dt=1006,$n=1007,wi=1008,Zt=1009,Ns=1010,Is=1011,Tr=1012,ea=1013,Ai=1014,Jt=1015,wr=1016,ta=1017,ia=1018,qi=1020,Os=35902,Fs=1021,Bs=1022,Nt=1023,zs=1024,ks=1025,Ki=1026,Zi=1027,Hs=1028,ra=1029,Gs=1030,na=1031,aa=1033,Qr=33776,$r=33777,en=33778,tn=33779,sa=35840,oa=35841,la=35842,ca=35843,ha=36196,ua=37492,da=37496,pa=37808,fa=37809,ma=37810,ga=37811,_a=37812,va=37813,xa=37814,Ma=37815,ba=37816,Sa=37817,ya=37818,Ea=37819,Ta=37820,wa=37821,rn=36492,Aa=36494,Ra=36495,Vs=36283,Ca=36284,Pa=36285,La=36286,Mc=3200,bc=3201,Ws=0,Sc=1,ci="",Ht="srgb",hi="srgb-linear",Ua="display-p3",nn="display-p3-linear",an="linear",Ke="srgb",sn="rec709",on="p3",Ji=7680,Xs=519,yc=512,Ec=513,Tc=514,js=515,wc=516,Ac=517,Rc=518,Cc=519,Ys=35044,qs="300 es",Qt=2e3,ln=2001;class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const r=t.slice(0);for(let n=0,a=r.length;n<a;n++)r[n].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ks=1234567;const Ar=Math.PI/180,Rr=180/Math.PI;function Qi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[r&255]+mt[r>>8&255]+mt[r>>16&255]+mt[r>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function Da(i,e){return(i%e+e)%e}function Pc(i,e,t,r,n){return r+(i-e)*(n-r)/(t-e)}function Lc(i,e,t){return i!==e?(t-i)/(e-i):0}function Cr(i,e,t){return(1-t)*i+t*e}function Uc(i,e,t,r){return Cr(i,e,1-Math.exp(-t*r))}function Dc(i,e=1){return e-Math.abs(Da(i,e*2)-e)}function Nc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ic(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Oc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Fc(i,e){return i+Math.random()*(e-i)}function Bc(i){return i*(.5-Math.random())}function zc(i){i!==void 0&&(Ks=i);let e=Ks+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kc(i){return i*Ar}function Hc(i){return i*Rr}function Gc(i){return(i&i-1)===0&&i!==0}function Vc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xc(i,e,t,r,n){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),c=a((e+r)/2),h=s((e+r)/2),d=a((e-r)/2),f=s((e-r)/2),m=a((r-e)/2),v=s((r-e)/2);switch(n){case"XYX":i.set(o*h,l*d,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*v,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*v,o*c);break;case"ZYZ":i.set(l*v,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function $i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const jc={DEG2RAD:Ar,RAD2DEG:Rr,generateUUID:Qi,clamp:gt,euclideanModulo:Da,mapLinear:Pc,inverseLerp:Lc,lerp:Cr,damp:Uc,pingpong:Dc,smoothstep:Nc,smootherstep:Ic,randInt:Oc,randFloat:Fc,randFloatSpread:Bc,seededRandom:zc,degToRad:kc,radToDeg:Hc,isPowerOfTwo:Gc,ceilPowerOfTwo:Vc,floorPowerOfTwo:Wc,setQuaternionFromProperEuler:Xc,normalize:xt,denormalize:$i};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*r-s*n+e.x,this.y=a*n+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,r,n,a,s,o,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,s,o,l,c)}set(e,t,r,n,a,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=r,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],h=r[4],d=r[7],f=r[2],m=r[5],v=r[8],_=n[0],u=n[3],p=n[6],E=n[1],S=n[4],T=n[7],z=n[2],A=n[5],R=n[8];return a[0]=s*_+o*E+l*z,a[3]=s*u+o*S+l*A,a[6]=s*p+o*T+l*R,a[1]=c*_+h*E+d*z,a[4]=c*u+h*S+d*A,a[7]=c*p+h*T+d*R,a[2]=f*_+m*E+v*z,a[5]=f*u+m*S+v*A,a[8]=f*p+m*T+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-r*a*h+r*o*l+n*a*c-n*s*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*s-o*c,f=o*l-h*a,m=c*a-s*l,v=t*d+r*f+n*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(n*c-h*r)*_,e[2]=(o*r-n*s)*_,e[3]=f*_,e[4]=(h*t-n*l)*_,e[5]=(n*a-o*t)*_,e[6]=m*_,e[7]=(r*l-c*t)*_,e[8]=(s*t-r*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(r*l,r*c,-r*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Na.makeScale(e,t)),this}rotate(e){return this.premultiply(Na.makeRotation(-e)),this}translate(e,t){return this.premultiply(Na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Na=new Ne;function Zs(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function cn(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yc(){const i=cn("canvas");return i.style.display="block",i}const Js={};function Pr(i){i in Js||(Js[i]=!0,console.warn(i))}function qc(i,e,t){return new Promise(function(r,n){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:n();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const Qs=new Ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$s=new Ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Lr={[hi]:{transfer:an,primaries:sn,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ht]:{transfer:Ke,primaries:sn,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[nn]:{transfer:an,primaries:on,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3($s),fromReference:i=>i.applyMatrix3(Qs)},[Ua]:{transfer:Ke,primaries:on,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3($s),fromReference:i=>i.applyMatrix3(Qs).convertLinearToSRGB()}},Kc=new Set([hi,nn]),ke={enabled:!0,_workingColorSpace:hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Kc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const r=Lr[e].toReference,n=Lr[t].fromReference;return n(r(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Lr[i].primaries},getTransfer:function(i){return i===ci?an:Lr[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Lr[e].luminanceCoefficients)}};function er(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ia(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let tr;class Zc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{tr===void 0&&(tr=cn("canvas")),tr.width=e.width,tr.height=e.height;const r=tr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cn("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),a=n.data;for(let s=0;s<a.length;s++)a[s]=er(a[s]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(er(t[r]/255)*255):t[r]=er(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jc=0;class eo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=Qi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?a.push(Oa(n[s].image)):a.push(Oa(n[s]))}else a=Oa(n);r.url=a}return t||(e.images[this.uuid]=r),r}}function Oa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qc=0;class yt extends Ri{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,r=Ti,n=Ti,a=Dt,s=wi,o=Nt,l=Zt,c=yt.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=Qi(),this.name="",this.source=new eo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ds)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jn:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case Qn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jn:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case Qn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null,yt.DEFAULT_MAPPING=Ds,yt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,r=0,n=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*n+s[12]*a,this.y=s[1]*t+s[5]*r+s[9]*n+s[13]*a,this.z=s[2]*t+s[6]*r+s[10]*n+s[14]*a,this.w=s[3]*t+s[7]*r+s[11]*n+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,a;const s=e.elements,o=s[0],l=s[4],c=s[8],h=s[1],d=s[5],f=s[9],m=s[2],v=s[6],_=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-m)<.01&&Math.abs(f-v)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+m)<.1&&Math.abs(f+v)<.1&&Math.abs(o+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(o+1)/2,E=(d+1)/2,S=(_+1)/2,T=(l+h)/4,z=(c+m)/4,A=(f+v)/4;return p>E&&p>S?p<.01?(r=0,n=.707106781,a=.707106781):(r=Math.sqrt(p),n=T/r,a=z/r):E>S?E<.01?(r=.707106781,n=0,a=.707106781):(n=Math.sqrt(E),r=T/n,a=A/n):S<.01?(r=.707106781,n=.707106781,a=0):(a=Math.sqrt(S),r=z/a,n=A/a),this.set(r,n,a,t),this}let u=Math.sqrt((v-f)*(v-f)+(c-m)*(c-m)+(h-l)*(h-l));return Math.abs(u)<.001&&(u=1),this.x=(v-f)/u,this.y=(c-m)/u,this.z=(h-l)/u,this.w=Math.acos((o+d+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $c extends Ri{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const n={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const a=new yt(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);a.flipY=!1,a.generateMipmaps=r.generateMipmaps,a.internalFormat=r.internalFormat,this.textures=[];const s=r.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,n=e.textures.length;r<n;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new eo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends $c{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class to extends yt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eh extends yt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,a,s,o){let l=r[n+0],c=r[n+1],h=r[n+2],d=r[n+3];const f=a[s+0],m=a[s+1],v=a[s+2],_=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(d!==_||l!==f||c!==m||h!==v){let u=1-o;const p=l*f+c*m+h*v+d*_,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const z=Math.sqrt(S),A=Math.atan2(z,p*E);u=Math.sin(u*A)/z,o=Math.sin(o*A)/z}const T=o*E;if(l=l*u+f*T,c=c*u+m*T,h=h*u+v*T,d=d*u+_*T,u===1-o){const z=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=z,c*=z,h*=z,d*=z}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,r,n,a,s){const o=r[n],l=r[n+1],c=r[n+2],h=r[n+3],d=a[s],f=a[s+1],m=a[s+2],v=a[s+3];return e[t]=o*v+h*d+l*m-c*f,e[t+1]=l*v+h*f+c*d-o*m,e[t+2]=c*v+h*m+o*f-l*d,e[t+3]=h*v-o*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(r/2),h=o(n/2),d=o(a/2),f=l(r/2),m=l(n/2),v=l(a/2);switch(s){case"XYZ":this._x=f*h*d+c*m*v,this._y=c*m*d-f*h*v,this._z=c*h*v+f*m*d,this._w=c*h*d-f*m*v;break;case"YXZ":this._x=f*h*d+c*m*v,this._y=c*m*d-f*h*v,this._z=c*h*v-f*m*d,this._w=c*h*d+f*m*v;break;case"ZXY":this._x=f*h*d-c*m*v,this._y=c*m*d+f*h*v,this._z=c*h*v+f*m*d,this._w=c*h*d-f*m*v;break;case"ZYX":this._x=f*h*d-c*m*v,this._y=c*m*d+f*h*v,this._z=c*h*v-f*m*d,this._w=c*h*d+f*m*v;break;case"YZX":this._x=f*h*d+c*m*v,this._y=c*m*d+f*h*v,this._z=c*h*v-f*m*d,this._w=c*h*d-f*m*v;break;case"XZY":this._x=f*h*d-c*m*v,this._y=c*m*d-f*h*v,this._z=c*h*v+f*m*d,this._w=c*h*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=r+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(s-n)*m}else if(r>o&&r>d){const m=2*Math.sqrt(1+r-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(n+s)/m,this._z=(a+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-r-d);this._w=(a-c)/m,this._x=(n+s)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-r-o);this._w=(s-n)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=r*h+s*o+n*c-a*l,this._y=n*h+s*l+a*o-r*c,this._z=a*h+s*c+r*l-n*o,this._w=s*h-r*o-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,a=this._z,s=this._w;let o=s*e._w+r*e._x+n*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=r,this._y=n,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*r+t*this._x,this._y=m*n+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=s*d+this._w*f,this._x=r*d+this._x*f,this._y=n*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,r=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(io.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(io.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*n,this.y=a[1]*t+a[4]*r+a[7]*n,this.z=a[2]*t+a[5]*r+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,a=e.elements,s=1/(a[3]*t+a[7]*r+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*n+a[12])*s,this.y=(a[1]*t+a[5]*r+a[9]*n+a[13])*s,this.z=(a[2]*t+a[6]*r+a[10]*n+a[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*n-o*r),h=2*(o*t-a*n),d=2*(a*r-s*t);return this.x=t+l*c+s*d-o*h,this.y=r+l*h+o*c-a*d,this.z=n+l*d+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*n,this.y=a[1]*t+a[5]*r+a[9]*n,this.z=a[2]*t+a[6]*r+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-a*o,this.y=a*s-r*l,this.z=r*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Fa.copy(this).projectOnVector(e),this.sub(Fa)}reflect(e){return this.sub(Fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fa=new D,io=new Pi;class Ur{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(It.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(It.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=It.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,It):It.fromBufferAttribute(a,s),It.applyMatrix4(e.matrixWorld),this.expandByPoint(It);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hn.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hn.copy(r.boundingBox)),hn.applyMatrix4(e.matrixWorld),this.union(hn)}const n=e.children;for(let a=0,s=n.length;a<s;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,It),It.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),un.subVectors(this.max,Dr),ir.subVectors(e.a,Dr),rr.subVectors(e.b,Dr),nr.subVectors(e.c,Dr),ui.subVectors(rr,ir),di.subVectors(nr,rr),Li.subVectors(ir,nr);let t=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Li.z,Li.y,ui.z,0,-ui.x,di.z,0,-di.x,Li.z,0,-Li.x,-ui.y,ui.x,0,-di.y,di.x,0,-Li.y,Li.x,0];return!Ba(t,ir,rr,nr,un)||(t=[1,0,0,0,1,0,0,0,1],!Ba(t,ir,rr,nr,un))?!1:(dn.crossVectors(ui,di),t=[dn.x,dn.y,dn.z],Ba(t,ir,rr,nr,un))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,It).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(It).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($t[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$t[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$t[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$t[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$t[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$t[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$t[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$t[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($t),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $t=[new D,new D,new D,new D,new D,new D,new D,new D],It=new D,hn=new Ur,ir=new D,rr=new D,nr=new D,ui=new D,di=new D,Li=new D,Dr=new D,un=new D,dn=new D,Ui=new D;function Ba(i,e,t,r,n){for(let a=0,s=i.length-3;a<=s;a+=3){Ui.fromArray(i,a);const o=n.x*Math.abs(Ui.x)+n.y*Math.abs(Ui.y)+n.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),h=r.dot(Ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const th=new Ur,Nr=new D,za=new D;class ka{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):th.setFromPoints(e).getCenter(r);let n=0;for(let a=0,s=e.length;a<s;a++)n=Math.max(n,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nr.subVectors(e,this.center);const t=Nr.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(Nr,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nr.copy(e.center).add(za)),this.expandByPoint(Nr.copy(e.center).sub(za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new D,Ha=new D,pn=new D,pi=new D,Ga=new D,fn=new D,Va=new D;class ro{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){Ha.copy(e).add(t).multiplyScalar(.5),pn.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(Ha);const a=e.distanceTo(t)*.5,s=-this.direction.dot(pn),o=pi.dot(this.direction),l=-pi.dot(pn),c=pi.lengthSq(),h=Math.abs(1-s*s);let d,f,m,v;if(h>0)if(d=s*l-o,f=s*o-l,v=a*h,d>=0)if(f>=-v)if(f<=v){const _=1/h;d*=_,f*=_,m=d*(d+s*f+2*o)+f*(s*d+f+2*l)+c}else f=a,d=Math.max(0,-(s*f+o)),m=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(s*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-s*a+o)),f=d>0?-a:Math.min(Math.max(-a,-l),a),m=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-a,-l),a),m=f*(f+2*l)+c):(d=Math.max(0,-(s*a+o)),f=d>0?a:Math.min(Math.max(-a,-l),a),m=-d*d+f*(f+2*l)+c);else f=s>0?-a:a,d=Math.max(0,-(s*f+o)),m=-d*d+f*(f+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Ha).addScaledVector(pn,f),m}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const r=ei.dot(this.direction),n=ei.dot(ei)-r*r,a=e.radius*e.radius;if(n>a)return null;const s=Math.sqrt(a-n),o=r-s,l=r+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,a,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(r=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(r=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),h>=0?(a=(e.min.y-f.y)*h,s=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,s=(e.min.y-f.y)*h),r>s||a>n||((a>r||isNaN(r))&&(r=a),(s<n||isNaN(n))&&(n=s),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),r>l||o>n)||((o>r||r!==r)&&(r=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,r,n,a){Ga.subVectors(t,e),fn.subVectors(r,e),Va.crossVectors(Ga,fn);let s=this.direction.dot(Va),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;pi.subVectors(this.origin,e);const l=o*this.direction.dot(fn.crossVectors(pi,fn));if(l<0)return null;const c=o*this.direction.dot(Ga.cross(pi));if(c<0||l+c>s)return null;const h=-o*pi.dot(Va);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,r,n,a,s,o,l,c,h,d,f,m,v,_,u){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,a,s,o,l,c,h,d,f,m,v,_,u)}set(e,t,r,n,a,s,o,l,c,h,d,f,m,v,_,u){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=n,p[1]=a,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=m,p[7]=v,p[11]=_,p[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/ar.setFromMatrixColumn(e,0).length(),a=1/ar.setFromMatrixColumn(e,1).length(),s=1/ar.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,a=e.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const f=s*h,m=s*d,v=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=v+m*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,v=c*h,_=c*d;t[0]=f+_*o,t[4]=v*o-m,t[8]=s*c,t[1]=s*d,t[5]=s*h,t[9]=-o,t[2]=m*o-v,t[6]=_+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,v=c*h,_=c*d;t[0]=f-_*o,t[4]=-s*d,t[8]=v+m*o,t[1]=m+v*o,t[5]=s*h,t[9]=_-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*h,m=s*d,v=o*h,_=o*d;t[0]=l*h,t[4]=v*c-m,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,m=s*c,v=o*l,_=o*c;t[0]=l*h,t[4]=_-f*d,t[8]=v*d+m,t[1]=d,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*d+v,t[10]=f-_*d}else if(e.order==="XZY"){const f=s*l,m=s*c,v=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=s*h,t[9]=m*d-v,t[2]=v*d-m,t[6]=o*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ih,e,rh)}lookAt(e,t,r){const n=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),fi.crossVectors(r,Tt),fi.lengthSq()===0&&(Math.abs(r.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),fi.crossVectors(r,Tt)),fi.normalize(),mn.crossVectors(Tt,fi),n[0]=fi.x,n[4]=mn.x,n[8]=Tt.x,n[1]=fi.y,n[5]=mn.y,n[9]=Tt.y,n[2]=fi.z,n[6]=mn.z,n[10]=Tt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,a=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],h=r[1],d=r[5],f=r[9],m=r[13],v=r[2],_=r[6],u=r[10],p=r[14],E=r[3],S=r[7],T=r[11],z=r[15],A=n[0],R=n[4],O=n[8],b=n[12],M=n[1],C=n[5],H=n[9],k=n[13],q=n[2],Q=n[6],j=n[10],Y=n[14],G=n[3],ae=n[7],ge=n[11],ye=n[15];return a[0]=s*A+o*M+l*q+c*G,a[4]=s*R+o*C+l*Q+c*ae,a[8]=s*O+o*H+l*j+c*ge,a[12]=s*b+o*k+l*Y+c*ye,a[1]=h*A+d*M+f*q+m*G,a[5]=h*R+d*C+f*Q+m*ae,a[9]=h*O+d*H+f*j+m*ge,a[13]=h*b+d*k+f*Y+m*ye,a[2]=v*A+_*M+u*q+p*G,a[6]=v*R+_*C+u*Q+p*ae,a[10]=v*O+_*H+u*j+p*ge,a[14]=v*b+_*k+u*Y+p*ye,a[3]=E*A+S*M+T*q+z*G,a[7]=E*R+S*C+T*Q+z*ae,a[11]=E*O+S*H+T*j+z*ge,a[15]=E*b+S*k+T*Y+z*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],v=e[3],_=e[7],u=e[11],p=e[15];return v*(+a*l*d-n*c*d-a*o*f+r*c*f+n*o*m-r*l*m)+_*(+t*l*m-t*c*f+a*s*f-n*s*m+n*c*h-a*l*h)+u*(+t*c*d-t*o*m-a*s*d+r*s*m+a*o*h-r*c*h)+p*(-n*o*h-t*l*d+t*o*f+n*s*d-r*s*f+r*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],v=e[12],_=e[13],u=e[14],p=e[15],E=d*u*c-_*f*c+_*l*m-o*u*m-d*l*p+o*f*p,S=v*f*c-h*u*c-v*l*m+s*u*m+h*l*p-s*f*p,T=h*_*c-v*d*c+v*o*m-s*_*m-h*o*p+s*d*p,z=v*d*l-h*_*l-v*o*f+s*_*f+h*o*u-s*d*u,A=t*E+r*S+n*T+a*z;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=E*R,e[1]=(_*f*a-d*u*a-_*n*m+r*u*m+d*n*p-r*f*p)*R,e[2]=(o*u*a-_*l*a+_*n*c-r*u*c-o*n*p+r*l*p)*R,e[3]=(d*l*a-o*f*a-d*n*c+r*f*c+o*n*m-r*l*m)*R,e[4]=S*R,e[5]=(h*u*a-v*f*a+v*n*m-t*u*m-h*n*p+t*f*p)*R,e[6]=(v*l*a-s*u*a-v*n*c+t*u*c+s*n*p-t*l*p)*R,e[7]=(s*f*a-h*l*a+h*n*c-t*f*c-s*n*m+t*l*m)*R,e[8]=T*R,e[9]=(v*d*a-h*_*a-v*r*m+t*_*m+h*r*p-t*d*p)*R,e[10]=(s*_*a-v*o*a+v*r*c-t*_*c-s*r*p+t*o*p)*R,e[11]=(h*o*a-s*d*a-h*r*c+t*d*c+s*r*m-t*o*m)*R,e[12]=z*R,e[13]=(h*_*n-v*d*n+v*r*f-t*_*f-h*r*u+t*d*u)*R,e[14]=(v*o*n-s*_*n-v*r*l+t*_*l+s*r*u-t*o*u)*R,e[15]=(s*d*n-h*o*n+h*r*l-t*d*l-s*r*f+t*o*f)*R,this}scale(e){const t=this.elements,r=e.x,n=e.y,a=e.z;return t[0]*=r,t[4]*=n,t[8]*=a,t[1]*=r,t[5]*=n,t[9]*=a,t[2]*=r,t[6]*=n,t[10]*=a,t[3]*=r,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),a=1-r,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+r,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+r,h*l-n*s,0,c*l-n*o,h*l+n*s,a*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,a,s){return this.set(1,r,a,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,h=s+s,d=o+o,f=a*c,m=a*h,v=a*d,_=s*h,u=s*d,p=o*d,E=l*c,S=l*h,T=l*d,z=r.x,A=r.y,R=r.z;return n[0]=(1-(_+p))*z,n[1]=(m+T)*z,n[2]=(v-S)*z,n[3]=0,n[4]=(m-T)*A,n[5]=(1-(f+p))*A,n[6]=(u+E)*A,n[7]=0,n[8]=(v+S)*R,n[9]=(u-E)*R,n[10]=(1-(f+_))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let a=ar.set(n[0],n[1],n[2]).length();const s=ar.set(n[4],n[5],n[6]).length(),o=ar.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],Ot.copy(this);const l=1/a,c=1/s,h=1/o;return Ot.elements[0]*=l,Ot.elements[1]*=l,Ot.elements[2]*=l,Ot.elements[4]*=c,Ot.elements[5]*=c,Ot.elements[6]*=c,Ot.elements[8]*=h,Ot.elements[9]*=h,Ot.elements[10]*=h,t.setFromRotationMatrix(Ot),r.x=a,r.y=s,r.z=o,this}makePerspective(e,t,r,n,a,s,o=Qt){const l=this.elements,c=2*a/(t-e),h=2*a/(r-n),d=(t+e)/(t-e),f=(r+n)/(r-n);let m,v;if(o===Qt)m=-(s+a)/(s-a),v=-2*s*a/(s-a);else if(o===ln)m=-s/(s-a),v=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,a,s,o=Qt){const l=this.elements,c=1/(t-e),h=1/(r-n),d=1/(s-a),f=(t+e)*c,m=(r+n)*h;let v,_;if(o===Qt)v=(s+a)*d,_=-2*d;else if(o===ln)v=a*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ar=new D,Ot=new ht,ih=new D(0,0,0),rh=new D(1,1,1),fi=new D,mn=new D,Tt=new D,no=new ht,ao=new Pi;class ni{constructor(e=0,t=0,r=0,n=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,a=n[0],s=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],f=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return no.makeRotationFromQuaternion(e),this.setFromRotationMatrix(no,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ao.setFromEuler(this),this.setFromQuaternion(ao,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class so{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nh=0;const oo=new D,sr=new Pi,ti=new ht,gn=new D,Ir=new D,ah=new D,sh=new Pi,lo=new D(1,0,0),co=new D(0,1,0),ho=new D(0,0,1),uo={type:"added"},oh={type:"removed"},or={type:"childadded",child:null},Wa={type:"childremoved",child:null};class At extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new D,t=new ni,r=new Pi,n=new D(1,1,1);function a(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ne}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(lo,e)}rotateY(e){return this.rotateOnAxis(co,e)}rotateZ(e){return this.rotateOnAxis(ho,e)}translateOnAxis(e,t){return oo.copy(e).applyQuaternion(this.quaternion),this.position.add(oo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lo,e)}translateY(e){return this.translateOnAxis(co,e)}translateZ(e){return this.translateOnAxis(ho,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?gn.copy(e):gn.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Ir,gn,this.up):ti.lookAt(gn,Ir,this.up),this.quaternion.setFromRotationMatrix(ti),n&&(ti.extractRotation(n.matrixWorld),sr.setFromRotationMatrix(ti),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uo),or.child=e,this.dispatchEvent(or),or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oh),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uo),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,ah),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,sh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),d=s(e.shapes),f=s(e.skeletons),m=s(e.animations),v=s(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),d.length>0&&(r.shapes=d),f.length>0&&(r.skeletons=f),m.length>0&&(r.animations=m),v.length>0&&(r.nodes=v)}return r.object=n,r;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}At.DEFAULT_UP=new D(0,1,0),At.DEFAULT_MATRIX_AUTO_UPDATE=!0,At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ft=new D,ii=new D,Xa=new D,ri=new D,lr=new D,cr=new D,po=new D,ja=new D,Ya=new D,qa=new D;class jt{constructor(e=new D,t=new D,r=new D){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),Ft.subVectors(e,t),n.cross(Ft);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,r,n,a){Ft.subVectors(n,t),ii.subVectors(r,t),Xa.subVectors(e,t);const s=Ft.dot(Ft),o=Ft.dot(ii),l=Ft.dot(Xa),c=ii.dot(ii),h=ii.dot(Xa),d=s*c-o*o;if(d===0)return a.set(0,0,0),null;const f=1/d,m=(c*l-o*h)*f,v=(s*h-o*l)*f;return a.set(1-m-v,v,m)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,r,n,a,s,o,l){return this.getBarycoord(e,t,r,n,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ri.x),l.addScaledVector(s,ri.y),l.addScaledVector(o,ri.z),l)}static isFrontFacing(e,t,r,n){return Ft.subVectors(r,t),ii.subVectors(e,t),Ft.cross(ii).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ft.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Ft.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,n,a){return jt.getInterpolation(e,this.a,this.b,this.c,t,r,n,a)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,a=this.c;let s,o;lr.subVectors(n,r),cr.subVectors(a,r),ja.subVectors(e,r);const l=lr.dot(ja),c=cr.dot(ja);if(l<=0&&c<=0)return t.copy(r);Ya.subVectors(e,n);const h=lr.dot(Ya),d=cr.dot(Ya);if(h>=0&&d<=h)return t.copy(n);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(r).addScaledVector(lr,s);qa.subVectors(e,a);const m=lr.dot(qa),v=cr.dot(qa);if(v>=0&&m<=v)return t.copy(a);const _=m*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(r).addScaledVector(cr,o);const u=h*v-m*d;if(u<=0&&d-h>=0&&m-v>=0)return po.subVectors(a,n),o=(d-h)/(d-h+(m-v)),t.copy(n).addScaledVector(po,o);const p=1/(u+_+f);return s=_*p,o=f*p,t.copy(r).addScaledVector(lr,s).addScaledVector(cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},_n={h:0,s:0,l:0};function Ka(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}let Xe=class{constructor(i,e,t){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(i,e,t)}set(i,e,t){if(e===void 0&&t===void 0){const r=i;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(i,e,t);return this}setScalar(i){return this.r=i,this.g=i,this.b=i,this}setHex(i,e=Ht){return i=Math.floor(i),this.r=(i>>16&255)/255,this.g=(i>>8&255)/255,this.b=(i&255)/255,ke.toWorkingColorSpace(this,e),this}setRGB(i,e,t,r=ke.workingColorSpace){return this.r=i,this.g=e,this.b=t,ke.toWorkingColorSpace(this,r),this}setHSL(i,e,t,r=ke.workingColorSpace){if(i=Da(i,1),e=gt(e,0,1),t=gt(t,0,1),e===0)this.r=this.g=this.b=t;else{const n=t<=.5?t*(1+e):t+e-t*e,a=2*t-n;this.r=Ka(a,n,i+1/3),this.g=Ka(a,n,i),this.b=Ka(a,n,i-1/3)}return ke.toWorkingColorSpace(this,r),this}setStyle(i,e=Ht){function t(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+i+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(i)){let n;const a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return t(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,e);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return t(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,e);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return t(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+i)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(i)){const n=r[1],a=n.length;if(a===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(n,16),e);console.warn("THREE.Color: Invalid hex color "+i)}else if(i&&i.length>0)return this.setColorName(i,e);return this}setColorName(i,e=Ht){const t=fo[i.toLowerCase()];return t!==void 0?this.setHex(t,e):console.warn("THREE.Color: Unknown color "+i),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(i){return this.r=i.r,this.g=i.g,this.b=i.b,this}copySRGBToLinear(i){return this.r=er(i.r),this.g=er(i.g),this.b=er(i.b),this}copyLinearToSRGB(i){return this.r=Ia(i.r),this.g=Ia(i.g),this.b=Ia(i.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(i=Ht){return ke.fromWorkingColorSpace(_t.copy(this),i),Math.round(gt(_t.r*255,0,255))*65536+Math.round(gt(_t.g*255,0,255))*256+Math.round(gt(_t.b*255,0,255))}getHexString(i=Ht){return("000000"+this.getHex(i).toString(16)).slice(-6)}getHSL(i,e=ke.workingColorSpace){ke.fromWorkingColorSpace(_t.copy(this),e);const t=_t.r,r=_t.g,n=_t.b,a=Math.max(t,r,n),s=Math.min(t,r,n);let o,l;const c=(s+a)/2;if(s===a)o=0,l=0;else{const h=a-s;switch(l=c<=.5?h/(a+s):h/(2-a-s),a){case t:o=(r-n)/h+(r<n?6:0);break;case r:o=(n-t)/h+2;break;case n:o=(t-r)/h+4;break}o/=6}return i.h=o,i.s=l,i.l=c,i}getRGB(i,e=ke.workingColorSpace){return ke.fromWorkingColorSpace(_t.copy(this),e),i.r=_t.r,i.g=_t.g,i.b=_t.b,i}getStyle(i=Ht){ke.fromWorkingColorSpace(_t.copy(this),i);const e=_t.r,t=_t.g,r=_t.b;return i!==Ht?`color(${i} ${e.toFixed(3)} ${t.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(t*255)},${Math.round(r*255)})`}offsetHSL(i,e,t){return this.getHSL(mi),this.setHSL(mi.h+i,mi.s+e,mi.l+t)}add(i){return this.r+=i.r,this.g+=i.g,this.b+=i.b,this}addColors(i,e){return this.r=i.r+e.r,this.g=i.g+e.g,this.b=i.b+e.b,this}addScalar(i){return this.r+=i,this.g+=i,this.b+=i,this}sub(i){return this.r=Math.max(0,this.r-i.r),this.g=Math.max(0,this.g-i.g),this.b=Math.max(0,this.b-i.b),this}multiply(i){return this.r*=i.r,this.g*=i.g,this.b*=i.b,this}multiplyScalar(i){return this.r*=i,this.g*=i,this.b*=i,this}lerp(i,e){return this.r+=(i.r-this.r)*e,this.g+=(i.g-this.g)*e,this.b+=(i.b-this.b)*e,this}lerpColors(i,e,t){return this.r=i.r+(e.r-i.r)*t,this.g=i.g+(e.g-i.g)*t,this.b=i.b+(e.b-i.b)*t,this}lerpHSL(i,e){this.getHSL(mi),i.getHSL(_n);const t=Cr(mi.h,_n.h,e),r=Cr(mi.s,_n.s,e),n=Cr(mi.l,_n.l,e);return this.setHSL(t,r,n),this}setFromVector3(i){return this.r=i.x,this.g=i.y,this.b=i.z,this}applyMatrix3(i){const e=this.r,t=this.g,r=this.b,n=i.elements;return this.r=n[0]*e+n[3]*t+n[6]*r,this.g=n[1]*e+n[4]*t+n[7]*r,this.b=n[2]*e+n[5]*t+n[8]*r,this}equals(i){return i.r===this.r&&i.g===this.g&&i.b===this.b}fromArray(i,e=0){return this.r=i[e],this.g=i[e+1],this.b=i[e+2],this}toArray(i=[],e=0){return i[e]=this.r,i[e+1]=this.g,i[e+2]=this.b,i}fromBufferAttribute(i,e){return this.r=i.getX(e),this.g=i.getY(e),this.b=i.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const _t=new Xe;Xe.NAMES=fo;let lh=0;class Or extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=Xi,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yn,this.blendDst=qn,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xs,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(r.blending=this.blending),this.side!==si&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yn&&(r.blendSrc=this.blendSrc),this.blendDst!==qn&&(r.blendDst=this.blendDst),this.blendEquation!==Ei&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xs&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=n(e.textures),s=n(e.images);a.length>0&&(r.textures=a),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let a=0;a!==n;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mo extends Or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Us,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new D,vn=new Ue;class Gt{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Ys,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Pr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix3(e),this.setXY(t,vn.x,vn.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=$i(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=xt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$i(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$i(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$i(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),r=xt(r,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,a){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),r=xt(r,this.array),n=xt(n,this.array),a=xt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ys&&(e.usage=this.usage),e}}class go extends Gt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class _o extends Gt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Di extends Gt{constructor(e,t,r){super(new Float32Array(e),t,r)}}let ch=0;const Pt=new ht,Za=new At,hr=new D,wt=new Ur,Fr=new Ur,ut=new D;class Hi extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ch++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zs(e)?_o:go)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Ne().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,r){return Pt.makeTranslation(e,t,r),this.applyMatrix4(Pt),this}scale(e,t,r){return Pt.makeScale(e,t,r),this.applyMatrix4(Pt),this}lookAt(e){return Za.lookAt(e),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const a=e[r];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Di(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const a=t[r];wt.setFromBufferAttribute(a),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const r=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Fr.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(wt.min,Fr.min),wt.expandByPoint(ut),ut.addVectors(wt.max,Fr.max),wt.expandByPoint(ut)):(wt.expandByPoint(Fr.min),wt.expandByPoint(Fr.max))}wt.getCenter(r);let n=0;for(let a=0,s=e.count;a<s;a++)ut.fromBufferAttribute(e,a),n=Math.max(n,r.distanceToSquared(ut));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ut.fromBufferAttribute(o,c),l&&(hr.fromBufferAttribute(e,c),ut.add(hr)),n=Math.max(n,r.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,n=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<r.count;O++)o[O]=new D,l[O]=new D;const c=new D,h=new D,d=new D,f=new Ue,m=new Ue,v=new Ue,_=new D,u=new D;function p(O,b,M){c.fromBufferAttribute(r,O),h.fromBufferAttribute(r,b),d.fromBufferAttribute(r,M),f.fromBufferAttribute(a,O),m.fromBufferAttribute(a,b),v.fromBufferAttribute(a,M),h.sub(c),d.sub(c),m.sub(f),v.sub(f);const C=1/(m.x*v.y-v.x*m.y);isFinite(C)&&(_.copy(h).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(C),u.copy(d).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(C),o[O].add(_),o[b].add(_),o[M].add(_),l[O].add(u),l[b].add(u),l[M].add(u))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let O=0,b=E.length;O<b;++O){const M=E[O],C=M.start,H=M.count;for(let k=C,q=C+H;k<q;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const S=new D,T=new D,z=new D,A=new D;function R(O){z.fromBufferAttribute(n,O),A.copy(z);const b=o[O];S.copy(b),S.sub(z.multiplyScalar(z.dot(b))).normalize(),T.crossVectors(A,b);const M=T.dot(l[O])<0?-1:1;s.setXYZW(O,S.x,S.y,S.z,M)}for(let O=0,b=E.length;O<b;++O){const M=E[O],C=M.start,H=M.count;for(let k=C,q=C+H;k<q;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let f=0,m=r.count;f<m;f++)r.setXYZ(f,0,0,0);const n=new D,a=new D,s=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),_=e.getX(f+1),u=e.getX(f+2);n.fromBufferAttribute(t,v),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,u),h.subVectors(s,a),d.subVectors(n,a),h.cross(d),o.fromBufferAttribute(r,v),l.fromBufferAttribute(r,_),c.fromBufferAttribute(r,u),o.add(h),l.add(h),c.add(h),r.setXYZ(v,o.x,o.y,o.z),r.setXYZ(_,l.x,l.y,l.z),r.setXYZ(u,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)n.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),h.subVectors(s,a),d.subVectors(n,a),h.cross(d),r.setXYZ(f+0,h.x,h.y,h.z),r.setXYZ(f+1,h.x,h.y,h.z),r.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let m=0,v=0;for(let _=0,u=l.length;_<u;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let p=0;p<h;p++)f[v++]=c[m++]}return new Gt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hi,r=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,r);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,r);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(n[l]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],d=a[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vo=new ht,Ni=new ro,xn=new ka,xo=new D,ur=new D,dr=new D,pr=new D,Ja=new D,Mn=new D,bn=new Ue,Sn=new Ue,yn=new Ue,Mo=new D,bo=new D,So=new D,En=new D,Tn=new D;class Vt extends At{constructor(e=new Hi,t=new mo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const s=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,a=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(a&&o){Mn.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],d=a[l];h!==0&&(Ja.fromBufferAttribute(d,e),s?Mn.addScaledVector(Ja,h):Mn.addScaledVector(Ja.sub(t),h))}t.add(Mn)}return t}raycast(e,t){const r=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xn.copy(r.boundingSphere),xn.applyMatrix4(a),Ni.copy(e.ray).recast(e.near),!(xn.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(xn,xo)===null||Ni.origin.distanceToSquared(xo)>(e.far-e.near)**2))&&(vo.copy(a).invert(),Ni.copy(e.ray).applyMatrix4(vo),!(r.boundingBox!==null&&Ni.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,r){let n;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,f=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,_=f.length;v<_;v++){const u=f[v],p=s[u.materialIndex],E=Math.max(u.start,m.start),S=Math.min(o.count,Math.min(u.start+u.count,m.start+m.count));for(let T=E,z=S;T<z;T+=3){const A=o.getX(T),R=o.getX(T+1),O=o.getX(T+2);n=wn(this,p,e,r,c,h,d,A,R,O),n&&(n.faceIndex=Math.floor(T/3),n.face.materialIndex=u.materialIndex,t.push(n))}}else{const v=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let u=v,p=_;u<p;u+=3){const E=o.getX(u),S=o.getX(u+1),T=o.getX(u+2);n=wn(this,s,e,r,c,h,d,E,S,T),n&&(n.faceIndex=Math.floor(u/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,_=f.length;v<_;v++){const u=f[v],p=s[u.materialIndex],E=Math.max(u.start,m.start),S=Math.min(l.count,Math.min(u.start+u.count,m.start+m.count));for(let T=E,z=S;T<z;T+=3){const A=T,R=T+1,O=T+2;n=wn(this,p,e,r,c,h,d,A,R,O),n&&(n.faceIndex=Math.floor(T/3),n.face.materialIndex=u.materialIndex,t.push(n))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let u=v,p=_;u<p;u+=3){const E=u,S=u+1,T=u+2;n=wn(this,s,e,r,c,h,d,E,S,T),n&&(n.faceIndex=Math.floor(u/3),t.push(n))}}}}function hh(i,e,t,r,n,a,s,o){let l;if(e.side===bt?l=r.intersectTriangle(s,a,n,!0,o):l=r.intersectTriangle(n,a,s,e.side===si,o),l===null)return null;Tn.copy(o),Tn.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Tn);return c<t.near||c>t.far?null:{distance:c,point:Tn.clone(),object:i}}function wn(i,e,t,r,n,a,s,o,l,c){i.getVertexPosition(o,ur),i.getVertexPosition(l,dr),i.getVertexPosition(c,pr);const h=hh(i,e,t,r,ur,dr,pr,En);if(h){n&&(bn.fromBufferAttribute(n,o),Sn.fromBufferAttribute(n,l),yn.fromBufferAttribute(n,c),h.uv=jt.getInterpolation(En,ur,dr,pr,bn,Sn,yn,new Ue)),a&&(bn.fromBufferAttribute(a,o),Sn.fromBufferAttribute(a,l),yn.fromBufferAttribute(a,c),h.uv1=jt.getInterpolation(En,ur,dr,pr,bn,Sn,yn,new Ue)),s&&(Mo.fromBufferAttribute(s,o),bo.fromBufferAttribute(s,l),So.fromBufferAttribute(s,c),h.normal=jt.getInterpolation(En,ur,dr,pr,Mo,bo,So,new D),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};jt.getNormal(ur,dr,pr,d.normal),h.face=d}return h}class Er extends Hi{constructor(e=1,t=1,r=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:a,depthSegments:s};const o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],h=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,r,t,e,s,a,0),v("z","y","x",1,-1,r,t,-e,s,a,1),v("x","z","y",1,1,e,r,t,n,s,2),v("x","z","y",1,-1,e,r,-t,n,s,3),v("x","y","z",1,-1,e,t,r,n,a,4),v("x","y","z",-1,-1,e,t,-r,n,a,5),this.setIndex(l),this.setAttribute("position",new Di(c,3)),this.setAttribute("normal",new Di(h,3)),this.setAttribute("uv",new Di(d,2));function v(_,u,p,E,S,T,z,A,R,O,b){const M=T/R,C=z/O,H=T/2,k=z/2,q=A/2,Q=R+1,j=O+1;let Y=0,G=0;const ae=new D;for(let ge=0;ge<j;ge++){const ye=ge*C-k;for(let Fe=0;Fe<Q;Fe++){const Ve=Fe*M-H;ae[_]=Ve*E,ae[u]=ye*S,ae[p]=q,c.push(ae.x,ae.y,ae.z),ae[_]=0,ae[u]=0,ae[p]=A>0?1:-1,h.push(ae.x,ae.y,ae.z),d.push(Fe/R),d.push(1-ge/O),Y+=1}}for(let ge=0;ge<O;ge++)for(let ye=0;ye<R;ye++){const Fe=f+ye+Q*ge,Ve=f+ye+Q*(ge+1),W=f+(ye+1)+Q*(ge+1),te=f+(ye+1)+Q*ge;l.push(Fe,Ve,te),l.push(Ve,W,te),G+=6}o.addGroup(m,G,b),m+=G,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fr(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const n=i[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function Mt(i){const e={};for(let t=0;t<i.length;t++){const r=fr(i[t]);for(const n in r)e[n]=r[n]}return e}function uh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yo(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}const dh={clone:fr,merge:Mt};var ph=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ph,this.fragmentShader=fh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=uh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Eo extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Qt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new D,To=new Ue,wo=new Ue;class Lt extends Eo{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,To,wo),t.subVectors(wo,To)}setViewOffset(e,t,r,n,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ar*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,a=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*n/l,t-=s.offsetY*r/c,n*=s.width/l,r*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mr=-90,gr=1;class mh extends At{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Lt(mr,gr,e,t);n.layers=this.layers,this.add(n);const a=new Lt(mr,gr,e,t);a.layers=this.layers,this.add(a);const s=new Lt(mr,gr,e,t);s.layers=this.layers,this.add(s);const o=new Lt(mr,gr,e,t);o.layers=this.layers,this.add(o);const l=new Lt(mr,gr,e,t);l.layers=this.layers,this.add(l);const c=new Lt(mr,gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===Qt)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ln)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,a),e.setRenderTarget(r,1,n),e.render(t,s),e.setRenderTarget(r,2,n),e.render(t,o),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=_,e.setRenderTarget(r,5,n),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=v,r.texture.needsPMREMUpdate=!0}}class Ao extends yt{constructor(e,t,r,n,a,s,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ji,super(e,t,r,n,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gh extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new Ao(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Er(5,5,5),a=new gi({name:"CubemapFromEquirect",uniforms:fr(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:bt,blending:oi});a.uniforms.tEquirect.value=t;const s=new Vt(n,a),o=t.minFilter;return t.minFilter===wi&&(t.minFilter=Dt),new mh(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,n){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,n);e.setRenderTarget(a)}}const Qa=new D,_h=new D,vh=new Ne;class vi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=Qa.subVectors(r,t).cross(_h.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Qa),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||vh.getNormalMatrix(e),n=this.coplanarPoint(Qa).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new ka,An=new D;class Ro{constructor(e=new vi,t=new vi,r=new vi,n=new vi,a=new vi,s=new vi){this.planes=[e,t,r,n,a,s]}set(e,t,r,n,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Qt){const r=this.planes,n=e.elements,a=n[0],s=n[1],o=n[2],l=n[3],c=n[4],h=n[5],d=n[6],f=n[7],m=n[8],v=n[9],_=n[10],u=n[11],p=n[12],E=n[13],S=n[14],T=n[15];if(r[0].setComponents(l-a,f-c,u-m,T-p).normalize(),r[1].setComponents(l+a,f+c,u+m,T+p).normalize(),r[2].setComponents(l+s,f+h,u+v,T+E).normalize(),r[3].setComponents(l-s,f-h,u-v,T-E).normalize(),r[4].setComponents(l-o,f-d,u-_,T-S).normalize(),t===Qt)r[5].setComponents(l+o,f+d,u+_,T+S).normalize();else if(t===ln)r[5].setComponents(o,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(An.x=n.normal.x>0?e.max.x:e.min.x,An.y=n.normal.y>0?e.max.y:e.min.y,An.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(An)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Co(){let i=null,e=!1,t=null,r=null;function n(a,s){t(a,s),r=i.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(n),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function xh(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,c){const h=l.array,d=l._updateRange,f=l.updateRanges;if(i.bindBuffer(c,o),d.count===-1&&f.length===0&&i.bufferSubData(c,0,h),f.length!==0){for(let m=0,v=f.length;m<v;m++){const _=f[m];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(i.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:n,remove:a,update:s}}class Hn extends Hi{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const a=e/2,s=t/2,o=Math.floor(r),l=Math.floor(n),c=o+1,h=l+1,d=e/o,f=t/l,m=[],v=[],_=[],u=[];for(let p=0;p<h;p++){const E=p*f-s;for(let S=0;S<c;S++){const T=S*d-a;v.push(T,-E,0),_.push(0,0,1),u.push(S/o),u.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const S=E+c*p,T=E+c*(p+1),z=E+1+c*(p+1),A=E+1+c*p;m.push(S,T,A),m.push(T,z,A)}this.setIndex(m),this.setAttribute("position",new Di(v,3)),this.setAttribute("normal",new Di(_,3)),this.setAttribute("uv",new Di(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bh=`#ifdef USE_ALPHAHASH
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
#endif`,Sh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Th=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wh=`#ifdef USE_AOMAP
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
#endif`,Ah=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
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
#endif`,Ch=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ph=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dh=`#ifdef USE_IRIDESCENCE
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
#endif`,Nh=`#ifdef USE_BUMPMAP
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
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
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
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vh=`#define PI 3.141592653589793
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
} // validated`,Wh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xh=`vec3 transformedNormal = objectNormal;
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
#endif`,jh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jh=`
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
}`,Qh=`#ifdef USE_ENVMAP
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
#endif`,$h=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eu=`#ifdef USE_ENVMAP
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
#endif`,tu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iu=`#ifdef USE_ENVMAP
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
#endif`,ru=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,au=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,su=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ou=`#ifdef USE_GRADIENTMAP
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
}`,lu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uu=`uniform bool receiveShadow;
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
#endif`,du=`#ifdef USE_ENVMAP
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
#endif`,pu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_u=`PhysicalMaterial material;
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
#endif`,vu=`struct PhysicalMaterial {
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
}`,xu=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Mu=`#if defined( RE_IndirectDiffuse )
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
#endif`,bu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Su=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Au=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ru=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cu=`#if defined( USE_POINTS_UV )
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
#endif`,Pu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Du=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iu=`#ifdef USE_MORPHTARGETS
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
#endif`,Ou=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ku=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gu=`#ifdef USE_NORMALMAP
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
#endif`,Vu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ju=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Ku=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ju=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$u=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ed=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,td=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,id=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ad=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sd=`#ifdef USE_SKINNING
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
#endif`,od=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ld=`#ifdef USE_SKINNING
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
#endif`,cd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ud=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dd=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pd=`#ifdef USE_TRANSMISSION
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
#endif`,fd=`#ifdef USE_TRANSMISSION
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
#endif`,md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Md=`uniform sampler2D t2D;
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
}`,bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ed=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Td=`#include <common>
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
}`,wd=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ad=`#define DISTANCE
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
}`,Rd=`#define DISTANCE
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
}`,Cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ld=`uniform float scale;
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
}`,Ud=`uniform vec3 diffuse;
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
}`,Dd=`#include <common>
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
}`,Nd=`uniform vec3 diffuse;
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
}`,Id=`#define LAMBERT
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
}`,Od=`#define LAMBERT
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
}`,Fd=`#define MATCAP
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
}`,Bd=`#define MATCAP
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
}`,zd=`#define NORMAL
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
}`,kd=`#define NORMAL
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
}`,Hd=`#define PHONG
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
}`,Gd=`#define PHONG
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
}`,Vd=`#define STANDARD
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
}`,Wd=`#define STANDARD
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
}`,Xd=`#define TOON
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
}`,jd=`#define TOON
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
}`,Yd=`uniform float size;
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
}`,qd=`uniform vec3 diffuse;
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
}`,Kd=`#include <common>
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
}`,Zd=`uniform vec3 color;
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
}`,Jd=`uniform float rotation;
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
}`,Qd=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:Mh,alphahash_pars_fragment:bh,alphamap_fragment:Sh,alphamap_pars_fragment:yh,alphatest_fragment:Eh,alphatest_pars_fragment:Th,aomap_fragment:wh,aomap_pars_fragment:Ah,batching_pars_vertex:Rh,batching_vertex:Ch,begin_vertex:Ph,beginnormal_vertex:Lh,bsdfs:Uh,iridescence_fragment:Dh,bumpmap_pars_fragment:Nh,clipping_planes_fragment:Ih,clipping_planes_pars_fragment:Oh,clipping_planes_pars_vertex:Fh,clipping_planes_vertex:Bh,color_fragment:zh,color_pars_fragment:kh,color_pars_vertex:Hh,color_vertex:Gh,common:Vh,cube_uv_reflection_fragment:Wh,defaultnormal_vertex:Xh,displacementmap_pars_vertex:jh,displacementmap_vertex:Yh,emissivemap_fragment:qh,emissivemap_pars_fragment:Kh,colorspace_fragment:Zh,colorspace_pars_fragment:Jh,envmap_fragment:Qh,envmap_common_pars_fragment:$h,envmap_pars_fragment:eu,envmap_pars_vertex:tu,envmap_physical_pars_fragment:du,envmap_vertex:iu,fog_vertex:ru,fog_pars_vertex:nu,fog_fragment:au,fog_pars_fragment:su,gradientmap_pars_fragment:ou,lightmap_pars_fragment:lu,lights_lambert_fragment:cu,lights_lambert_pars_fragment:hu,lights_pars_begin:uu,lights_toon_fragment:pu,lights_toon_pars_fragment:fu,lights_phong_fragment:mu,lights_phong_pars_fragment:gu,lights_physical_fragment:_u,lights_physical_pars_fragment:vu,lights_fragment_begin:xu,lights_fragment_maps:Mu,lights_fragment_end:bu,logdepthbuf_fragment:Su,logdepthbuf_pars_fragment:yu,logdepthbuf_pars_vertex:Eu,logdepthbuf_vertex:Tu,map_fragment:wu,map_pars_fragment:Au,map_particle_fragment:Ru,map_particle_pars_fragment:Cu,metalnessmap_fragment:Pu,metalnessmap_pars_fragment:Lu,morphinstance_vertex:Uu,morphcolor_vertex:Du,morphnormal_vertex:Nu,morphtarget_pars_vertex:Iu,morphtarget_vertex:Ou,normal_fragment_begin:Fu,normal_fragment_maps:Bu,normal_pars_fragment:zu,normal_pars_vertex:ku,normal_vertex:Hu,normalmap_pars_fragment:Gu,clearcoat_normal_fragment_begin:Vu,clearcoat_normal_fragment_maps:Wu,clearcoat_pars_fragment:Xu,iridescence_pars_fragment:ju,opaque_fragment:Yu,packing:qu,premultiplied_alpha_fragment:Ku,project_vertex:Zu,dithering_fragment:Ju,dithering_pars_fragment:Qu,roughnessmap_fragment:$u,roughnessmap_pars_fragment:ed,shadowmap_pars_fragment:td,shadowmap_pars_vertex:id,shadowmap_vertex:rd,shadowmask_pars_fragment:nd,skinbase_vertex:ad,skinning_pars_vertex:sd,skinning_vertex:od,skinnormal_vertex:ld,specularmap_fragment:cd,specularmap_pars_fragment:hd,tonemapping_fragment:ud,tonemapping_pars_fragment:dd,transmission_fragment:pd,transmission_pars_fragment:fd,uv_pars_fragment:md,uv_pars_vertex:gd,uv_vertex:_d,worldpos_vertex:vd,background_vert:xd,background_frag:Md,backgroundCube_vert:bd,backgroundCube_frag:Sd,cube_vert:yd,cube_frag:Ed,depth_vert:Td,depth_frag:wd,distanceRGBA_vert:Ad,distanceRGBA_frag:Rd,equirect_vert:Cd,equirect_frag:Pd,linedashed_vert:Ld,linedashed_frag:Ud,meshbasic_vert:Dd,meshbasic_frag:Nd,meshlambert_vert:Id,meshlambert_frag:Od,meshmatcap_vert:Fd,meshmatcap_frag:Bd,meshnormal_vert:zd,meshnormal_frag:kd,meshphong_vert:Hd,meshphong_frag:Gd,meshphysical_vert:Vd,meshphysical_frag:Wd,meshtoon_vert:Xd,meshtoon_frag:jd,points_vert:Yd,points_frag:qd,shadow_vert:Kd,shadow_frag:Zd,sprite_vert:Jd,sprite_frag:Qd},se={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Wt={basic:{uniforms:Mt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Mt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Xe(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Mt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Mt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Mt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Xe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Mt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Mt([se.points,se.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Mt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Mt([se.common,se.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Mt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Mt([se.sprite,se.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Mt([se.common,se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Mt([se.lights,se.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Wt.physical={uniforms:Mt([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Rn={r:0,b:0,g:0},Oi=new ni,$d=new ht;function ep(i,e,t,r,n,a,s){const o=new Xe(0);let l=a===!0?0:1,c,h,d=null,f=0,m=null;function v(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function _(E){let S=!1;const T=v(E);T===null?p(o,l):T&&T.isColor&&(p(T,1),S=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,s):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function u(E,S){const T=v(S);T&&(T.isCubeTexture||T.mapping===Zr)?(h===void 0&&(h=new Vt(new Er(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:fr(Wt.backgroundCube.uniforms),vertexShader:Wt.backgroundCube.vertexShader,fragmentShader:Wt.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Oi.copy(S.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($d.makeRotationFromEuler(Oi)),h.material.toneMapped=ke.getTransfer(T.colorSpace)!==Ke,(d!==T||f!==T.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=T,f=T.version,m=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Vt(new Hn(2,2),new gi({name:"BackgroundMaterial",uniforms:fr(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ke.getTransfer(T.colorSpace)!==Ke,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=T,f=T.version,m=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,S){E.getRGB(Rn,yo(i)),r.buffers.color.setClear(Rn.r,Rn.g,Rn.b,S,s)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:_,addToRenderList:u}}function tp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},n=f(null);let a=n,s=!1;function o(M,C,H,k,q){let Q=!1;const j=d(k,H,C);a!==j&&(a=j,c(a.object)),Q=m(M,k,H,q),Q&&v(M,k,H,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(Q||s)&&(s=!1,T(M,C,H,k),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,C,H){const k=H.wireframe===!0;let q=r[M.id];q===void 0&&(q={},r[M.id]=q);let Q=q[C.id];Q===void 0&&(Q={},q[C.id]=Q);let j=Q[k];return j===void 0&&(j=f(l()),Q[k]=j),j}function f(M){const C=[],H=[],k=[];for(let q=0;q<t;q++)C[q]=0,H[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:k,object:M,attributes:{},index:null}}function m(M,C,H,k){const q=a.attributes,Q=C.attributes;let j=0;const Y=H.getAttributes();for(const G in Y)if(Y[G].location>=0){const ae=q[G];let ge=Q[G];if(ge===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),ae===void 0||ae.attribute!==ge||ge&&ae.data!==ge.data)return!0;j++}return a.attributesNum!==j||a.index!==k}function v(M,C,H,k){const q={},Q=C.attributes;let j=0;const Y=H.getAttributes();for(const G in Y)if(Y[G].location>=0){let ae=Q[G];ae===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));const ge={};ge.attribute=ae,ae&&ae.data&&(ge.data=ae.data),q[G]=ge,j++}a.attributes=q,a.attributesNum=j,a.index=k}function _(){const M=a.newAttributes;for(let C=0,H=M.length;C<H;C++)M[C]=0}function u(M){p(M,0)}function p(M,C){const H=a.newAttributes,k=a.enabledAttributes,q=a.attributeDivisors;H[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),q[M]!==C&&(i.vertexAttribDivisor(M,C),q[M]=C)}function E(){const M=a.newAttributes,C=a.enabledAttributes;for(let H=0,k=C.length;H<k;H++)C[H]!==M[H]&&(i.disableVertexAttribArray(H),C[H]=0)}function S(M,C,H,k,q,Q,j){j===!0?i.vertexAttribIPointer(M,C,H,q,Q):i.vertexAttribPointer(M,C,H,k,q,Q)}function T(M,C,H,k){_();const q=k.attributes,Q=H.getAttributes(),j=C.defaultAttributeValues;for(const Y in Q){const G=Q[Y];if(G.location>=0){let ae=q[Y];if(ae===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ae!==void 0){const ge=ae.normalized,ye=ae.itemSize,Fe=e.get(ae);if(Fe===void 0)continue;const Ve=Fe.buffer,W=Fe.type,te=Fe.bytesPerElement,fe=W===i.INT||W===i.UNSIGNED_INT||ae.gpuType===ea;if(ae.isInterleavedBufferAttribute){const ce=ae.data,Ee=ce.stride,Ce=ae.offset;if(ce.isInstancedInterleavedBuffer){for(let Oe=0;Oe<G.locationSize;Oe++)p(G.location+Oe,ce.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Oe=0;Oe<G.locationSize;Oe++)u(G.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Oe=0;Oe<G.locationSize;Oe++)S(G.location+Oe,ye/G.locationSize,W,ge,Ee*te,(Ce+ye/G.locationSize*Oe)*te,fe)}else{if(ae.isInstancedBufferAttribute){for(let ce=0;ce<G.locationSize;ce++)p(G.location+ce,ae.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ce=0;ce<G.locationSize;ce++)u(G.location+ce);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let ce=0;ce<G.locationSize;ce++)S(G.location+ce,ye/G.locationSize,W,ge,ye*te,ye/G.locationSize*ce*te,fe)}}else if(j!==void 0){const ge=j[Y];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(G.location,ge);break;case 3:i.vertexAttrib3fv(G.location,ge);break;case 4:i.vertexAttrib4fv(G.location,ge);break;default:i.vertexAttrib1fv(G.location,ge)}}}}E()}function z(){O();for(const M in r){const C=r[M];for(const H in C){const k=C[H];for(const q in k)h(k[q].object),delete k[q];delete C[H]}delete r[M]}}function A(M){if(r[M.id]===void 0)return;const C=r[M.id];for(const H in C){const k=C[H];for(const q in k)h(k[q].object),delete k[q];delete C[H]}delete r[M.id]}function R(M){for(const C in r){const H=r[C];if(H[M.id]===void 0)continue;const k=H[M.id];for(const q in k)h(k[q].object),delete k[q];delete H[M.id]}}function O(){b(),s=!0,a!==n&&(a=n,c(a.object))}function b(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:O,resetDefaultState:b,dispose:z,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:u,disableUnusedAttributes:E}}function ip(i,e,t){let r;function n(c){r=c}function a(c,h){i.drawArrays(r,c,h),t.update(h,r,1)}function s(c,h,d){d!==0&&(i.drawArraysInstanced(r,c,h,d),t.update(h,r,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];t.update(f,r,1)}function l(c,h,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)s(c[v],h[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(r,c,0,h,0,f,0,d);let v=0;for(let _=0;_<d;_++)v+=h[_];for(let _=0;_<f.length;_++)t.update(v,r,f[_])}}this.setMode=n,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function rp(i,e,t,r){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){return!(A!==Nt&&r.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const R=A===wr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Zt&&r.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Jt&&!R)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,z=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:_,maxAttributes:u,maxVertexUniforms:p,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:T,maxSamples:z}}function np(i){const e=this;let t=null,r=0,n=!1,a=!1;const s=new vi,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||r!==0||n;return n=f,r=d.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,_=d.clipIntersection,u=d.clipShadows,p=i.get(d);if(!n||v===null||v.length===0||a&&!u)a?h(null):c();else{const E=a?0:r,S=E*4;let T=p.clippingState||null;l.value=T,T=h(v,f,S,m);for(let z=0;z!==S;++z)T[z]=t[z];p.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function h(d,f,m,v){const _=d!==null?d.length:0;let u=null;if(_!==0){if(u=l.value,v!==!0||u===null){const p=m+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(u===null||u.length<p)&&(u=new Float32Array(p));for(let S=0,T=m;S!==_;++S,T+=4)s.copy(d[S]).applyMatrix4(E,o),s.normal.toArray(u,T),u[T+3]=s.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,u}}function ap(i){let e=new WeakMap;function t(s,o){return o===Kn?s.mapping=ji:o===Zn&&(s.mapping=Yi),s}function r(s){if(s&&s.isTexture){const o=s.mapping;if(o===Kn||o===Zn)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new gh(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class sp extends Eo{constructor(e=-1,t=1,r=1,n=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=r-e,s=r+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _r=4,Po=[.125,.215,.35,.446,.526,.582],Fi=20,$a=new sp,Lo=new Xe;let es=null,ts=0,is=0,rs=!1;const Bi=(1+Math.sqrt(5))/2,vr=1/Bi,Uo=[new D(-Bi,vr,0),new D(Bi,vr,0),new D(-vr,0,Bi),new D(vr,0,Bi),new D(0,Bi,-vr),new D(0,Bi,vr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Do{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){es=this._renderer.getRenderTarget(),ts=this._renderer.getActiveCubeFace(),is=this._renderer.getActiveMipmapLevel(),rs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Io(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(es,ts,is),this._renderer.xr.enabled=rs,e.scissorTest=!1,Cn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),es=this._renderer.getRenderTarget(),ts=this._renderer.getActiveCubeFace(),is=this._renderer.getActiveMipmapLevel(),rs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:wr,format:Nt,colorSpace:hi,depthBuffer:!1},n=No(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=No(e,t,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=op(a)),this._blurMaterial=lp(a,e,t)}return n}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,r,n){const a=new Lt(90,1,t,r),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Lo),l.toneMapping=li,l.autoClear=!1;const d=new mo({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),f=new Vt(new Er,d);let m=!1;const v=e.background;v?v.isColor&&(d.color.copy(v),e.background=null,m=!0):(d.color.copy(Lo),m=!0);for(let _=0;_<6;_++){const u=_%3;u===0?(a.up.set(0,s[_],0),a.lookAt(o[_],0,0)):u===1?(a.up.set(0,0,s[_]),a.lookAt(0,o[_],0)):(a.up.set(0,s[_],0),a.lookAt(0,0,o[_]));const p=this._cubeSize;Cn(n,u*p,_>2?p:0,p,p),l.setRenderTarget(n),m&&l.render(f,a),l.render(e,a)}f.geometry.dispose(),f.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=v}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===ji||e.mapping===Yi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Io());const a=n?this._cubemapMaterial:this._equirectMaterial,s=new Vt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Cn(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(s,$a)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let a=1;a<n;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Uo[(n-a-1)%Uo.length];this._blur(e,a-1,a,s,o)}t.autoClear=r}_blur(e,t,r,n,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,n,"latitudinal",a),this._halfBlur(s,e,r,r,n,"longitudinal",a)}_halfBlur(e,t,r,n,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Vt(this._lodPlanes[n],c),f=c.uniforms,m=this._sizeLods[r]-1,v=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Fi-1),_=a/v,u=isFinite(a)?1+Math.floor(h*_):Fi;u>Fi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Fi}`);const p=[];let E=0;for(let R=0;R<Fi;++R){const O=R/_,b=Math.exp(-O*O/2);p.push(b),R===0?E+=b:R<u&&(E+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/E;f.envMap.value=e.texture,f.samples.value=u,f.weights.value=p,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=v,f.mipInt.value=S-r;const T=this._sizeLods[n],z=3*T*(n>S-_r?n-S+_r:0),A=4*(this._cubeSize-T);Cn(t,z,A,3*T,2*T),l.setRenderTarget(t),l.render(d,$a)}}function op(i){const e=[],t=[],r=[];let n=i;const a=i-_r+1+Po.length;for(let s=0;s<a;s++){const o=Math.pow(2,n);t.push(o);let l=1/o;s>i-_r?l=Po[s-i+_r-1]:s===0&&(l=0),r.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,v=6,_=3,u=2,p=1,E=new Float32Array(_*v*m),S=new Float32Array(u*v*m),T=new Float32Array(p*v*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,O=A>2?0:-1,b=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];E.set(b,_*v*A),S.set(f,u*v*A);const M=[A,A,A,A,A,A];T.set(M,p*v*A)}const z=new Hi;z.setAttribute("position",new Gt(E,_)),z.setAttribute("uv",new Gt(S,u)),z.setAttribute("faceIndex",new Gt(T,p)),e.push(z),n>_r&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function No(i,e,t){const r=new Ci(i,e,t);return r.texture.mapping=Zr,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cn(i,e,t,r,n){i.viewport.set(e,t,r,n),i.scissor.set(e,t,r,n)}function lp(i,e,t){const r=new Float32Array(Fi),n=new D(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:ns(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Io(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ns(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Oo(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ns(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function ns(){return`

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
	`}function cp(i){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===Kn||l===Zn,h=l===ji||l===Yi;if(c||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Do(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&n(m)?(t===null&&(t=new Do(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function hp(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=i.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const n=t(r);return n===null&&Pr("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function up(i,e,t,r){const n={},a=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const _=f.morphAttributes[v];for(let u=0,p=_.length;u<p;u++)e.remove(_[u])}f.removeEventListener("dispose",s),delete n[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return n[f.id]===!0||(f.addEventListener("dispose",s),n[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const _=m[v];for(let u=0,p=_.length;u<p;u++)e.update(_[u],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,v=d.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let S=0,T=E.length;S<T;S+=3){const z=E[S+0],A=E[S+1],R=E[S+2];f.push(z,A,A,R,R,z)}}else if(v!==void 0){const E=v.array;_=v.version;for(let S=0,T=E.length/3-1;S<T;S+=3){const z=S+0,A=S+1,R=S+2;f.push(z,A,A,R,R,z)}}else return;const u=new(Zs(f)?_o:go)(f,1);u.version=_;const p=a.get(d);p&&e.remove(p),a.set(d,u)}function h(d){const f=a.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function dp(i,e,t){let r;function n(f){r=f}let a,s;function o(f){a=f.type,s=f.bytesPerElement}function l(f,m){i.drawElements(r,m,a,f*s),t.update(m,r,1)}function c(f,m,v){v!==0&&(i.drawElementsInstanced(r,m,a,f*s,v),t.update(m,r,v))}function h(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,a,f,0,v);let _=0;for(let u=0;u<v;u++)_+=m[u];t.update(_,r,1)}function d(f,m,v,_){if(v===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let p=0;p<f.length;p++)c(f[p]/s,m[p],_[p]);else{u.multiDrawElementsInstancedWEBGL(r,m,0,a,f,0,_,0,v);let p=0;for(let E=0;E<v;E++)p+=m[E];for(let E=0;E<_.length;E++)t.update(p,r,_[E])}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function pp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function fp(i,e,t){const r=new WeakMap,n=new pt;function a(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=r.get(o);if(f===void 0||f.count!==d){let v=function(){b.dispose(),r.delete(o),o.removeEventListener("dispose",v)};var m=v;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,u=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,E=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let z=0;_===!0&&(z=1),u===!0&&(z=2),p===!0&&(z=3);let A=o.attributes.position.count*z,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const O=new Float32Array(A*R*4*d),b=new to(O,A,R,d);b.type=Jt,b.needsUpdate=!0;const M=z*4;for(let C=0;C<d;C++){const H=E[C],k=S[C],q=T[C],Q=A*R*4*C;for(let j=0;j<H.count;j++){const Y=j*M;_===!0&&(n.fromBufferAttribute(H,j),O[Q+Y+0]=n.x,O[Q+Y+1]=n.y,O[Q+Y+2]=n.z,O[Q+Y+3]=0),u===!0&&(n.fromBufferAttribute(k,j),O[Q+Y+4]=n.x,O[Q+Y+5]=n.y,O[Q+Y+6]=n.z,O[Q+Y+7]=0),p===!0&&(n.fromBufferAttribute(q,j),O[Q+Y+8]=n.x,O[Q+Y+9]=n.y,O[Q+Y+10]=n.z,O[Q+Y+11]=q.itemSize===4?n.w:1)}}f={count:d,texture:b,size:new Ue(A,R)},r.set(o,f),o.addEventListener("dispose",v)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let v=0;for(let u=0;u<c.length;u++)v+=c[u];const _=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function mp(i,e,t,r){let n=new WeakMap;function a(l){const c=r.render.frame,h=l.geometry,d=e.get(l,h);if(n.get(d)!==c&&(e.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return d}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class Fo extends yt{constructor(e,t,r,n,a,s,o,l,c,h=Ki){if(h!==Ki&&h!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&h===Ki&&(r=Ai),r===void 0&&h===Zi&&(r=qi),super(null,n,a,s,o,l,h,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bo=new yt,zo=new Fo(1,1),ko=new to,Ho=new eh,Go=new Ao,Vo=[],Wo=[],Xo=new Float32Array(16),jo=new Float32Array(9),Yo=new Float32Array(4);function xr(i,e,t){const r=i[0];if(r<=0||r>0)return i;const n=e*t;let a=Vo[n];if(a===void 0&&(a=new Float32Array(n),Vo[n]=a),e!==0){r.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function ot(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function lt(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Pn(i,e){let t=Wo[e];t===void 0&&(t=new Int32Array(e),Wo[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function gp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2fv(this.addr,e),lt(t,e)}}function vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;i.uniform3fv(this.addr,e),lt(t,e)}}function xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4fv(this.addr,e),lt(t,e)}}function Mp(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,r))return;Yo.set(r),i.uniformMatrix2fv(this.addr,!1,Yo),lt(t,r)}}function bp(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,r))return;jo.set(r),i.uniformMatrix3fv(this.addr,!1,jo),lt(t,r)}}function Sp(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,r))return;Xo.set(r),i.uniformMatrix4fv(this.addr,!1,Xo),lt(t,r)}}function yp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2iv(this.addr,e),lt(t,e)}}function Tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3iv(this.addr,e),lt(t,e)}}function wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4iv(this.addr,e),lt(t,e)}}function Ap(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2uiv(this.addr,e),lt(t,e)}}function Cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3uiv(this.addr,e),lt(t,e)}}function Pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4uiv(this.addr,e),lt(t,e)}}function Lp(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n);let a;this.type===i.SAMPLER_2D_SHADOW?(zo.compareFunction=js,a=zo):a=Bo,t.setTexture2D(e||a,n)}function Up(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||Ho,n)}function Dp(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||Go,n)}function Np(i,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(i.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||ko,n)}function Ip(i){switch(i){case 5126:return gp;case 35664:return _p;case 35665:return vp;case 35666:return xp;case 35674:return Mp;case 35675:return bp;case 35676:return Sp;case 5124:case 35670:return yp;case 35667:case 35671:return Ep;case 35668:case 35672:return Tp;case 35669:case 35673:return wp;case 5125:return Ap;case 36294:return Rp;case 36295:return Cp;case 36296:return Pp;case 35678:case 36198:case 36298:case 36306:case 35682:return Lp;case 35679:case 36299:case 36307:return Up;case 35680:case 36300:case 36308:case 36293:return Dp;case 36289:case 36303:case 36311:case 36292:return Np}}function Op(i,e){i.uniform1fv(this.addr,e)}function Fp(i,e){const t=xr(e,this.size,2);i.uniform2fv(this.addr,t)}function Bp(i,e){const t=xr(e,this.size,3);i.uniform3fv(this.addr,t)}function zp(i,e){const t=xr(e,this.size,4);i.uniform4fv(this.addr,t)}function kp(i,e){const t=xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Hp(i,e){const t=xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gp(i,e){const t=xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vp(i,e){i.uniform1iv(this.addr,e)}function Wp(i,e){i.uniform2iv(this.addr,e)}function Xp(i,e){i.uniform3iv(this.addr,e)}function jp(i,e){i.uniform4iv(this.addr,e)}function Yp(i,e){i.uniform1uiv(this.addr,e)}function qp(i,e){i.uniform2uiv(this.addr,e)}function Kp(i,e){i.uniform3uiv(this.addr,e)}function Zp(i,e){i.uniform4uiv(this.addr,e)}function Jp(i,e,t){const r=this.cache,n=e.length,a=Pn(t,n);ot(r,a)||(i.uniform1iv(this.addr,a),lt(r,a));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Bo,a[s])}function Qp(i,e,t){const r=this.cache,n=e.length,a=Pn(t,n);ot(r,a)||(i.uniform1iv(this.addr,a),lt(r,a));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Ho,a[s])}function $p(i,e,t){const r=this.cache,n=e.length,a=Pn(t,n);ot(r,a)||(i.uniform1iv(this.addr,a),lt(r,a));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Go,a[s])}function ef(i,e,t){const r=this.cache,n=e.length,a=Pn(t,n);ot(r,a)||(i.uniform1iv(this.addr,a),lt(r,a));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||ko,a[s])}function tf(i){switch(i){case 5126:return Op;case 35664:return Fp;case 35665:return Bp;case 35666:return zp;case 35674:return kp;case 35675:return Hp;case 35676:return Gp;case 5124:case 35670:return Vp;case 35667:case 35671:return Wp;case 35668:case 35672:return Xp;case 35669:case 35673:return jp;case 5125:return Yp;case 36294:return qp;case 36295:return Kp;case 36296:return Zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return ef}}class rf{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Ip(t.type)}}class nf{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tf(t.type)}}class af{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let a=0,s=n.length;a!==s;++a){const o=n[a];o.setValue(e,t[o.id],r)}}}const as=/(\w+)(\])?(\[|\.)?/g;function qo(i,e){i.seq.push(e),i.map[e.id]=e}function sf(i,e,t){const r=i.name,n=r.length;for(as.lastIndex=0;;){const a=as.exec(r),s=as.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){qo(t,c===void 0?new rf(o,i,e):new nf(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new af(o),qo(t,h)),t=h}}}class Ln{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const a=e.getActiveUniform(t,n),s=e.getUniformLocation(t,a.name);sf(a,s,this)}}setValue(e,t,r,n){const a=this.map[t];a!==void 0&&a.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,a=e.length;n!==a;++n){const s=e[n];s.id in t&&r.push(s)}return r}}function Ko(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const of=37297;let lf=0;function cf(i,e){const t=i.split(`
`),r=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=n;s<a;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}function hf(i){const e=ke.getPrimaries(ke.workingColorSpace),t=ke.getPrimaries(i);let r;switch(e===t?r="":e===on&&t===sn?r="LinearDisplayP3ToLinearSRGB":e===sn&&t===on&&(r="LinearSRGBToLinearDisplayP3"),i){case hi:case nn:return[r,"LinearTransferOETF"];case Ht:case Ua:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[r,"LinearTransferOETF"]}}function Zo(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),n=i.getShaderInfoLog(e).trim();if(r&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+cf(i.getShaderSource(e),s)}else return n}function uf(i,e){const t=hf(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function df(i,e){let t;switch(e){case dc:t="Linear";break;case pc:t="Reinhard";break;case fc:t="Cineon";break;case mc:t="ACESFilmic";break;case _c:t="AgX";break;case vc:t="Neutral";break;case gc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Un=new D;function pf(){ke.getLuminanceCoefficients(Un);const i=Un.x.toFixed(4),e=Un.y.toFixed(4),t=Un.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ff(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function mf(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function gf(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const a=i.getActiveAttrib(e,n),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Br(i){return i!==""}function Jo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _f=/^[ \t]*#include +<([\w\d./]+)>/gm;function ss(i){return i.replace(_f,xf)}const vf=new Map;function xf(i,e){let t=De[e];if(t===void 0){const r=vf.get(e);if(r!==void 0)t=De[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ss(t)}const Mf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $o(i){return i.replace(Mf,bf)}function bf(i,e,t,r){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function el(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rs?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qt&&(e="SHADOWMAP_TYPE_VSM"),e}function yf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ji:case Yi:e="ENVMAP_TYPE_CUBE";break;case Zr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ef(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Yi:e="ENVMAP_MODE_REFRACTION";break}return e}function Tf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Us:e="ENVMAP_BLENDING_MULTIPLY";break;case hc:e="ENVMAP_BLENDING_MIX";break;case uc:e="ENVMAP_BLENDING_ADD";break}return e}function wf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function Af(i,e,t,r){const n=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Sf(t),c=yf(t),h=Ef(t),d=Tf(t),f=wf(t),m=ff(t),v=mf(a),_=n.createProgram();let u,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Br).join(`
`),u.length>0&&(u+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Br).join(`
`),p.length>0&&(p+=`
`)):(u=[el(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),p=[el(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?De.tonemapping_pars_fragment:"",t.toneMapping!==li?df("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,uf("linearToOutputTexel",t.outputColorSpace),pf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Br).join(`
`)),s=ss(s),s=Jo(s,t),s=Qo(s,t),o=ss(o),o=Jo(o,t),o=Qo(o,t),s=$o(s),o=$o(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,u=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,p=["#define varying in",t.glslVersion===qs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=E+u+s,T=E+p+o,z=Ko(n,n.VERTEX_SHADER,S),A=Ko(n,n.FRAGMENT_SHADER,T);n.attachShader(_,z),n.attachShader(_,A),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function R(C){if(i.debug.checkShaderErrors){const H=n.getProgramInfoLog(_).trim(),k=n.getShaderInfoLog(z).trim(),q=n.getShaderInfoLog(A).trim();let Q=!0,j=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(n,_,z,A);else{const Y=Zo(n,z,"vertex"),G=Zo(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+Y+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||q==="")&&(j=!1);j&&(C.diagnostics={runnable:Q,programLog:H,vertexShader:{log:k,prefix:u},fragmentShader:{log:q,prefix:p}})}n.deleteShader(z),n.deleteShader(A),O=new Ln(n,_),b=gf(n,_)}let O;this.getUniforms=function(){return O===void 0&&R(this),O};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(_,of)),M},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lf++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=z,this.fragmentShader=A,this}let Rf=0;class Cf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Pf(e),t.set(e,r)),r}}class Pf{constructor(e){this.id=Rf++,this.code=e,this.usedTimes=0}}function Lf(i,e,t,r,n,a,s){const o=new so,l=new Cf,c=new Set,h=[],d=n.logarithmicDepthBuffer,f=n.vertexTextures;let m=n.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function u(b,M,C,H,k){const q=H.fog,Q=k.geometry,j=b.isMeshStandardMaterial?H.environment:null,Y=(b.isMeshStandardMaterial?t:e).get(b.envMap||j),G=Y&&Y.mapping===Zr?Y.image.height:null,ae=v[b.type];b.precision!==null&&(m=n.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const ge=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ye=ge!==void 0?ge.length:0;let Fe=0;Q.morphAttributes.position!==void 0&&(Fe=1),Q.morphAttributes.normal!==void 0&&(Fe=2),Q.morphAttributes.color!==void 0&&(Fe=3);let Ve,W,te,fe;if(ae){const ze=Wt[ae];Ve=ze.vertexShader,W=ze.fragmentShader}else Ve=b.vertexShader,W=b.fragmentShader,l.update(b),te=l.getVertexShaderID(b),fe=l.getFragmentShaderID(b);const ce=i.getRenderTarget(),Ee=k.isInstancedMesh===!0,Ce=k.isBatchedMesh===!0,Oe=!!b.map,Qe=!!b.matcap,w=!!Y,et=!!b.aoMap,He=!!b.lightMap,We=!!b.bumpMap,ve=!!b.normalMap,tt=!!b.displacementMap,Ae=!!b.emissiveMap,Pe=!!b.metalnessMap,y=!!b.roughnessMap,g=b.anisotropy>0,B=b.clearcoat>0,K=b.dispersion>0,$=b.iridescence>0,Z=b.sheen>0,Me=b.transmission>0,oe=g&&!!b.anisotropyMap,ue=B&&!!b.clearcoatMap,Le=B&&!!b.clearcoatNormalMap,ie=B&&!!b.clearcoatRoughnessMap,de=$&&!!b.iridescenceMap,Be=$&&!!b.iridescenceThicknessMap,we=Z&&!!b.sheenColorMap,he=Z&&!!b.sheenRoughnessMap,Re=!!b.specularMap,Ie=!!b.specularColorMap,Je=!!b.specularIntensityMap,P=Me&&!!b.transmissionMap,re=Me&&!!b.thicknessMap,V=!!b.gradientMap,J=!!b.alphaMap,ne=b.alphaTest>0,xe=!!b.alphaHash,Ye=!!b.extensions;let it=li;b.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(it=i.toneMapping);const ft={shaderID:ae,shaderType:b.type,shaderName:b.name,vertexShader:Ve,fragmentShader:W,defines:b.defines,customVertexShaderID:te,customFragmentShaderID:fe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Ce,batchingColor:Ce&&k._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&k.instanceColor!==null,instancingMorph:Ee&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:hi,alphaToCoverage:!!b.alphaToCoverage,map:Oe,matcap:Qe,envMap:w,envMapMode:w&&Y.mapping,envMapCubeUVHeight:G,aoMap:et,lightMap:He,bumpMap:We,normalMap:ve,displacementMap:f&&tt,emissiveMap:Ae,normalMapObjectSpace:ve&&b.normalMapType===Sc,normalMapTangentSpace:ve&&b.normalMapType===Ws,metalnessMap:Pe,roughnessMap:y,anisotropy:g,anisotropyMap:oe,clearcoat:B,clearcoatMap:ue,clearcoatNormalMap:Le,clearcoatRoughnessMap:ie,dispersion:K,iridescence:$,iridescenceMap:de,iridescenceThicknessMap:Be,sheen:Z,sheenColorMap:we,sheenRoughnessMap:he,specularMap:Re,specularColorMap:Ie,specularIntensityMap:Je,transmission:Me,transmissionMap:P,thicknessMap:re,gradientMap:V,opaque:b.transparent===!1&&b.blending===Xi&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:ne,alphaHash:xe,combine:b.combine,mapUv:Oe&&_(b.map.channel),aoMapUv:et&&_(b.aoMap.channel),lightMapUv:He&&_(b.lightMap.channel),bumpMapUv:We&&_(b.bumpMap.channel),normalMapUv:ve&&_(b.normalMap.channel),displacementMapUv:tt&&_(b.displacementMap.channel),emissiveMapUv:Ae&&_(b.emissiveMap.channel),metalnessMapUv:Pe&&_(b.metalnessMap.channel),roughnessMapUv:y&&_(b.roughnessMap.channel),anisotropyMapUv:oe&&_(b.anisotropyMap.channel),clearcoatMapUv:ue&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Le&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:we&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:he&&_(b.sheenRoughnessMap.channel),specularMapUv:Re&&_(b.specularMap.channel),specularColorMapUv:Ie&&_(b.specularColorMap.channel),specularIntensityMapUv:Je&&_(b.specularIntensityMap.channel),transmissionMapUv:P&&_(b.transmissionMap.channel),thicknessMapUv:re&&_(b.thicknessMap.channel),alphaMapUv:J&&_(b.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ve||g),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Q.attributes.uv&&(Oe||J),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:Oe&&b.map.isVideoTexture===!0&&ke.getTransfer(b.map.colorSpace)===Ke,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Kt,flipSided:b.side===bt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ye&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&b.extensions.multiDraw===!0||Ce)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)M.push(C),M.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(E(M,b),S(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function E(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function S(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),b.push(o.mask)}function T(b){const M=v[b.type];let C;if(M){const H=Wt[M];C=dh.clone(H.uniforms)}else C=b.uniforms;return C}function z(b,M){let C;for(let H=0,k=h.length;H<k;H++){const q=h[H];if(q.cacheKey===M){C=q,++C.usedTimes;break}}return C===void 0&&(C=new Af(i,M,b,a),h.push(C)),C}function A(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function O(){l.dispose()}return{getParameters:u,getProgramCacheKey:p,getUniforms:T,acquireProgram:z,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:O}}function Uf(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function r(s){i.delete(s)}function n(s,o,l){i.get(s)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:r,update:n,dispose:a}}function Df(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function tl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function il(){const i=[];let e=0;const t=[],r=[],n=[];function a(){e=0,t.length=0,r.length=0,n.length=0}function s(d,f,m,v,_,u){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:_,group:u},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=_,p.group=u),e++,p}function o(d,f,m,v,_,u){const p=s(d,f,m,v,_,u);m.transmission>0?r.push(p):m.transparent===!0?n.push(p):t.push(p)}function l(d,f,m,v,_,u){const p=s(d,f,m,v,_,u);m.transmission>0?r.unshift(p):m.transparent===!0?n.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||Df),r.length>1&&r.sort(f||tl),n.length>1&&n.sort(f||tl)}function h(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:r,transparent:n,init:a,push:o,unshift:l,finish:h,sort:c}}function Nf(){let i=new WeakMap;function e(r,n){const a=i.get(r);let s;return a===void 0?(s=new il,i.set(r,[s])):n>=a.length?(s=new il,a.push(s)):s=a[n],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function If(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Xe};break;case"SpotLight":t={position:new D,direction:new D,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Of(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ff=0;function Bf(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zf(i){const e=new If,t=Of(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new D);const n=new D,a=new ht,s=new ht;function o(c){let h=0,d=0,f=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let m=0,v=0,_=0,u=0,p=0,E=0,S=0,T=0,z=0,A=0,R=0;c.sort(Bf);for(let b=0,M=c.length;b<M;b++){const C=c[b],H=C.color,k=C.intensity,q=C.distance,Q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=H.r*k,d+=H.g*k,f+=H.b*k;else if(C.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(C.sh.coefficients[j],k);R++}else if(C.isDirectionalLight){const j=e.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,G=t.get(C);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,r.directionalShadow[m]=G,r.directionalShadowMap[m]=Q,r.directionalShadowMatrix[m]=C.shadow.matrix,E++}r.directional[m]=j,m++}else if(C.isSpotLight){const j=e.get(C);j.position.setFromMatrixPosition(C.matrixWorld),j.color.copy(H).multiplyScalar(k),j.distance=q,j.coneCos=Math.cos(C.angle),j.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),j.decay=C.decay,r.spot[_]=j;const Y=C.shadow;if(C.map&&(r.spotLightMap[z]=C.map,z++,Y.updateMatrices(C),C.castShadow&&A++),r.spotLightMatrix[_]=Y.matrix,C.castShadow){const G=t.get(C);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,r.spotShadow[_]=G,r.spotShadowMap[_]=Q,T++}_++}else if(C.isRectAreaLight){const j=e.get(C);j.color.copy(H).multiplyScalar(k),j.halfWidth.set(C.width*.5,0,0),j.halfHeight.set(0,C.height*.5,0),r.rectArea[u]=j,u++}else if(C.isPointLight){const j=e.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),j.distance=C.distance,j.decay=C.decay,C.castShadow){const Y=C.shadow,G=t.get(C);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,r.pointShadow[v]=G,r.pointShadowMap[v]=Q,r.pointShadowMatrix[v]=C.shadow.matrix,S++}r.point[v]=j,v++}else if(C.isHemisphereLight){const j=e.get(C);j.skyColor.copy(C.color).multiplyScalar(k),j.groundColor.copy(C.groundColor).multiplyScalar(k),r.hemi[p]=j,p++}}u>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=f;const O=r.hash;(O.directionalLength!==m||O.pointLength!==v||O.spotLength!==_||O.rectAreaLength!==u||O.hemiLength!==p||O.numDirectionalShadows!==E||O.numPointShadows!==S||O.numSpotShadows!==T||O.numSpotMaps!==z||O.numLightProbes!==R)&&(r.directional.length=m,r.spot.length=_,r.rectArea.length=u,r.point.length=v,r.hemi.length=p,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=T+z-A,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=A,r.numLightProbes=R,O.directionalLength=m,O.pointLength=v,O.spotLength=_,O.rectAreaLength=u,O.hemiLength=p,O.numDirectionalShadows=E,O.numPointShadows=S,O.numSpotShadows=T,O.numSpotMaps=z,O.numLightProbes=R,r.version=Ff++)}function l(c,h){let d=0,f=0,m=0,v=0,_=0;const u=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const S=c[p];if(S.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(u),d++}else if(S.isSpotLight){const T=r.spot[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(u),m++}else if(S.isRectAreaLight){const T=r.rectArea[v];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(u),s.identity(),a.copy(S.matrixWorld),a.premultiply(u),s.extractRotation(a),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),v++}else if(S.isPointLight){const T=r.point[f];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(u),f++}else if(S.isHemisphereLight){const T=r.hemi[_];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(u),_++}}}return{setup:o,setupView:l,state:r}}function rl(i){const e=new zf(i),t=[],r=[];function n(h){c.camera=h,t.length=0,r.length=0}function a(h){t.push(h)}function s(h){r.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function kf(i){let e=new WeakMap;function t(n,a=0){const s=e.get(n);let o;return s===void 0?(o=new rl(i),e.set(n,[o])):a>=s.length?(o=new rl(i),s.push(o)):o=s[a],o}function r(){e=new WeakMap}return{get:t,dispose:r}}class Hf extends Or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gf extends Or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wf=`uniform sampler2D shadow_pass;
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
}`;function Xf(i,e,t){let r=new Ro;const n=new Ue,a=new Ue,s=new pt,o=new Hf({depthPacking:bc}),l=new Gf,c={},h=t.maxTextureSize,d={[si]:bt,[bt]:si,[Kt]:Kt},f=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Vf,fragmentShader:Wf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Hi;v.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Vt(v,f),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rs;let p=this.type;this.render=function(A,R,O){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||A.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),H=i.state;H.setBlending(oi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=p!==qt&&this.type===qt,q=p===qt&&this.type!==qt;for(let Q=0,j=A.length;Q<j;Q++){const Y=A[Q],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);const ae=G.getFrameExtents();if(n.multiply(ae),a.copy(G.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/ae.x),n.x=a.x*ae.x,G.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/ae.y),n.y=a.y*ae.y,G.mapSize.y=a.y)),G.map===null||k===!0||q===!0){const ye=this.type!==qt?{minFilter:Ct,magFilter:Ct}:{};G.map!==null&&G.map.dispose(),G.map=new Ci(n.x,n.y,ye),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ge=G.getViewportCount();for(let ye=0;ye<ge;ye++){const Fe=G.getViewport(ye);s.set(a.x*Fe.x,a.y*Fe.y,a.x*Fe.z,a.y*Fe.w),H.viewport(s),G.updateMatrices(Y,ye),r=G.getFrustum(),T(R,O,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===qt&&E(G,O),G.needsUpdate=!1}p=this.type,u.needsUpdate=!1,i.setRenderTarget(b,M,C)};function E(A,R){const O=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ci(n.x,n.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,O,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,O,m,_,null)}function S(A,R,O,b){let M=null;const C=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)M=C;else if(M=O.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=M.uuid,k=R.uuid;let q=c[H];q===void 0&&(q={},c[H]=q);let Q=q[k];Q===void 0&&(Q=M.clone(),q[k]=Q,R.addEventListener("dispose",z)),M=Q}if(M.visible=R.visible,M.wireframe=R.wireframe,b===qt?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=i.properties.get(M);H.light=O}return M}function T(A,R,O,b,M){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===qt)&&(!A.frustumCulled||r.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);const H=e.update(A),k=A.material;if(Array.isArray(k)){const q=H.groups;for(let Q=0,j=q.length;Q<j;Q++){const Y=q[Q],G=k[Y.materialIndex];if(G&&G.visible){const ae=S(A,G,b,M);A.onBeforeShadow(i,A,R,O,H,ae,Y),i.renderBufferDirect(O,null,H,ae,A,Y),A.onAfterShadow(i,A,R,O,H,ae,Y)}}}else if(k.visible){const q=S(A,k,b,M);A.onBeforeShadow(i,A,R,O,H,q,null),i.renderBufferDirect(O,null,H,q,A,null),A.onAfterShadow(i,A,R,O,H,q,null)}}const C=A.children;for(let H=0,k=C.length;H<k;H++)T(C[H],R,O,b,M)}function z(A){A.target.removeEventListener("dispose",z);for(const R in c){const O=c[R],b=A.target.uuid;b in O&&(O[b].dispose(),delete O[b])}}}function jf(i){function e(){let P=!1;const re=new pt;let V=null;const J=new pt(0,0,0,0);return{setMask:function(ne){V!==ne&&!P&&(i.colorMask(ne,ne,ne,ne),V=ne)},setLocked:function(ne){P=ne},setClear:function(ne,xe,Ye,it,ft){ft===!0&&(ne*=it,xe*=it,Ye*=it),re.set(ne,xe,Ye,it),J.equals(re)===!1&&(i.clearColor(ne,xe,Ye,it),J.copy(re))},reset:function(){P=!1,V=null,J.set(-1,0,0,0)}}}function t(){let P=!1,re=null,V=null,J=null;return{setTest:function(ne){ne?fe(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(ne){re!==ne&&!P&&(i.depthMask(ne),re=ne)},setFunc:function(ne){if(V!==ne){switch(ne){case rc:i.depthFunc(i.NEVER);break;case nc:i.depthFunc(i.ALWAYS);break;case ac:i.depthFunc(i.LESS);break;case Kr:i.depthFunc(i.LEQUAL);break;case sc:i.depthFunc(i.EQUAL);break;case oc:i.depthFunc(i.GEQUAL);break;case lc:i.depthFunc(i.GREATER);break;case cc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}V=ne}},setLocked:function(ne){P=ne},setClear:function(ne){J!==ne&&(i.clearDepth(ne),J=ne)},reset:function(){P=!1,re=null,V=null,J=null}}}function r(){let P=!1,re=null,V=null,J=null,ne=null,xe=null,Ye=null,it=null,ft=null;return{setTest:function(ze){P||(ze?fe(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(ze){re!==ze&&!P&&(i.stencilMask(ze),re=ze)},setFunc:function(ze,Yt,kt){(V!==ze||J!==Yt||ne!==kt)&&(i.stencilFunc(ze,Yt,kt),V=ze,J=Yt,ne=kt)},setOp:function(ze,Yt,kt){(xe!==ze||Ye!==Yt||it!==kt)&&(i.stencilOp(ze,Yt,kt),xe=ze,Ye=Yt,it=kt)},setLocked:function(ze){P=ze},setClear:function(ze){ft!==ze&&(i.clearStencil(ze),ft=ze)},reset:function(){P=!1,re=null,V=null,J=null,ne=null,xe=null,Ye=null,it=null,ft=null}}}const n=new e,a=new t,s=new r,o=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,f=[],m=null,v=!1,_=null,u=null,p=null,E=null,S=null,T=null,z=null,A=new Xe(0,0,0),R=0,O=!1,b=null,M=null,C=null,H=null,k=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,j=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Q=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Q=j>=2);let G=null,ae={};const ge=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),Fe=new pt().fromArray(ge),Ve=new pt().fromArray(ye);function W(P,re,V,J){const ne=new Uint8Array(4),xe=i.createTexture();i.bindTexture(P,xe),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<V;Ye++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(re+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return xe}const te={};te[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),n.setClear(0,0,0,1),a.setClear(1),s.setClear(0),fe(i.DEPTH_TEST),a.setFunc(Kr),We(!1),ve(As),fe(i.CULL_FACE),et(oi);function fe(P){c[P]!==!0&&(i.enable(P),c[P]=!0)}function ce(P){c[P]!==!1&&(i.disable(P),c[P]=!1)}function Ee(P,re){return h[P]!==re?(i.bindFramebuffer(P,re),h[P]=re,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=re),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Ce(P,re){let V=f,J=!1;if(P){V=d.get(re),V===void 0&&(V=[],d.set(re,V));const ne=P.textures;if(V.length!==ne.length||V[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,Ye=ne.length;xe<Ye;xe++)V[xe]=i.COLOR_ATTACHMENT0+xe;V.length=ne.length,J=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,J=!0);J&&i.drawBuffers(V)}function Oe(P){return m!==P?(i.useProgram(P),m=P,!0):!1}const Qe={[Ei]:i.FUNC_ADD,[kl]:i.FUNC_SUBTRACT,[Hl]:i.FUNC_REVERSE_SUBTRACT};Qe[Gl]=i.MIN,Qe[Vl]=i.MAX;const w={[Wl]:i.ZERO,[Xl]:i.ONE,[jl]:i.SRC_COLOR,[Yn]:i.SRC_ALPHA,[Ql]:i.SRC_ALPHA_SATURATE,[Zl]:i.DST_COLOR,[ql]:i.DST_ALPHA,[Yl]:i.ONE_MINUS_SRC_COLOR,[qn]:i.ONE_MINUS_SRC_ALPHA,[Jl]:i.ONE_MINUS_DST_COLOR,[Kl]:i.ONE_MINUS_DST_ALPHA,[$l]:i.CONSTANT_COLOR,[ec]:i.ONE_MINUS_CONSTANT_COLOR,[tc]:i.CONSTANT_ALPHA,[ic]:i.ONE_MINUS_CONSTANT_ALPHA};function et(P,re,V,J,ne,xe,Ye,it,ft,ze){if(P===oi){v===!0&&(ce(i.BLEND),v=!1);return}if(v===!1&&(fe(i.BLEND),v=!0),P!==zl){if(P!==_||ze!==O){if((u!==Ei||S!==Ei)&&(i.blendEquation(i.FUNC_ADD),u=Ei,S=Ei),ze)switch(P){case Xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cs:i.blendFunc(i.ONE,i.ONE);break;case Ps:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ls:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ps:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ls:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}p=null,E=null,T=null,z=null,A.set(0,0,0),R=0,_=P,O=ze}return}ne=ne||re,xe=xe||V,Ye=Ye||J,(re!==u||ne!==S)&&(i.blendEquationSeparate(Qe[re],Qe[ne]),u=re,S=ne),(V!==p||J!==E||xe!==T||Ye!==z)&&(i.blendFuncSeparate(w[V],w[J],w[xe],w[Ye]),p=V,E=J,T=xe,z=Ye),(it.equals(A)===!1||ft!==R)&&(i.blendColor(it.r,it.g,it.b,ft),A.copy(it),R=ft),_=P,O=!1}function He(P,re){P.side===Kt?ce(i.CULL_FACE):fe(i.CULL_FACE);let V=P.side===bt;re&&(V=!V),We(V),P.blending===Xi&&P.transparent===!1?et(oi):et(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),n.setMask(P.colorWrite);const J=P.stencilWrite;s.setTest(J),J&&(s.setMask(P.stencilWriteMask),s.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),s.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ae(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(P){b!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),b=P)}function ve(P){P!==Ol?(fe(i.CULL_FACE),P!==M&&(P===As?i.cullFace(i.BACK):P===Fl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),M=P}function tt(P){P!==C&&(Q&&i.lineWidth(P),C=P)}function Ae(P,re,V){P?(fe(i.POLYGON_OFFSET_FILL),(H!==re||k!==V)&&(i.polygonOffset(re,V),H=re,k=V)):ce(i.POLYGON_OFFSET_FILL)}function Pe(P){P?fe(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function y(P){P===void 0&&(P=i.TEXTURE0+q-1),G!==P&&(i.activeTexture(P),G=P)}function g(P,re,V){V===void 0&&(G===null?V=i.TEXTURE0+q-1:V=G);let J=ae[V];J===void 0&&(J={type:void 0,texture:void 0},ae[V]=J),(J.type!==P||J.texture!==re)&&(G!==V&&(i.activeTexture(V),G=V),i.bindTexture(P,re||te[P]),J.type=P,J.texture=re)}function B(){const P=ae[G];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Be(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(P){Fe.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Fe.copy(P))}function he(P){Ve.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Ve.copy(P))}function Re(P,re){let V=l.get(re);V===void 0&&(V=new WeakMap,l.set(re,V));let J=V.get(P);J===void 0&&(J=i.getUniformBlockIndex(re,P.name),V.set(P,J))}function Ie(P,re){const V=l.get(re).get(P);o.get(re)!==V&&(i.uniformBlockBinding(re,V,P.__bindingPointIndex),o.set(re,V))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},G=null,ae={},h={},d=new WeakMap,f=[],m=null,v=!1,_=null,u=null,p=null,E=null,S=null,T=null,z=null,A=new Xe(0,0,0),R=0,O=!1,b=null,M=null,C=null,H=null,k=null,Fe.set(0,0,i.canvas.width,i.canvas.height),Ve.set(0,0,i.canvas.width,i.canvas.height),n.reset(),a.reset(),s.reset()}return{buffers:{color:n,depth:a,stencil:s},enable:fe,disable:ce,bindFramebuffer:Ee,drawBuffers:Ce,useProgram:Oe,setBlending:et,setMaterial:He,setFlipSided:We,setCullFace:ve,setLineWidth:tt,setPolygonOffset:Ae,setScissorTest:Pe,activeTexture:y,bindTexture:g,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:$,texImage2D:de,texImage3D:Be,updateUBOMapping:Re,uniformBlockBinding:Ie,texStorage2D:Le,texStorage3D:ie,texSubImage2D:Z,texSubImage3D:Me,compressedTexSubImage2D:oe,compressedTexSubImage3D:ue,scissor:we,viewport:he,reset:Je}}function nl(i,e,t,r){const n=Yf(r);switch(t){case Fs:return i*e;case zs:return i*e;case ks:return i*e*2;case Hs:return i*e/n.components*n.byteLength;case ra:return i*e/n.components*n.byteLength;case Gs:return i*e*2/n.components*n.byteLength;case na:return i*e*2/n.components*n.byteLength;case Bs:return i*e*3/n.components*n.byteLength;case Nt:return i*e*4/n.components*n.byteLength;case aa:return i*e*4/n.components*n.byteLength;case Qr:case $r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case en:case tn:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oa:case ca:return Math.max(i,16)*Math.max(e,8)/4;case sa:case la:return Math.max(i,8)*Math.max(e,8)/2;case ha:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ma:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ga:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _a:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case va:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ba:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ya:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ta:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case wa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case rn:case Aa:case Ra:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Vs:case Ca:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Pa:case La:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yf(i){switch(i){case Zt:case Ns:return{byteLength:1,components:1};case Tr:case Is:case wr:return{byteLength:2,components:1};case ta:case ia:return{byteLength:2,components:4};case Ai:case ea:case Jt:return{byteLength:4,components:1};case Os:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function qf(i,e,t,r,n,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(y,g){return m?new OffscreenCanvas(y,g):cn("canvas")}function _(y,g,B){let K=1;const $=Pe(y);if(($.width>B||$.height>B)&&(K=B/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const Z=Math.floor(K*$.width),Me=Math.floor(K*$.height);d===void 0&&(d=v(Z,Me));const oe=g?v(Z,Me):d;return oe.width=Z,oe.height=Me,oe.getContext("2d").drawImage(y,0,0,Z,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Z+"x"+Me+")."),oe}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),y;return y}function u(y){return y.generateMipmaps&&y.minFilter!==Ct&&y.minFilter!==Dt}function p(y){i.generateMipmap(y)}function E(y,g,B,K,$=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Z=g;if(g===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8)),g===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),g===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8)),g===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),g===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),g===i.RGBA){const Me=$?an:ke.getTransfer(K);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=Me===Ke?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(y,g){let B;return y?g===null||g===Ai||g===qi?B=i.DEPTH24_STENCIL8:g===Jt?B=i.DEPTH32F_STENCIL8:g===Tr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ai||g===qi?B=i.DEPTH_COMPONENT24:g===Jt?B=i.DEPTH_COMPONENT32F:g===Tr&&(B=i.DEPTH_COMPONENT16),B}function T(y,g){return u(y)===!0||y.isFramebufferTexture&&y.minFilter!==Ct&&y.minFilter!==Dt?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function z(y){const g=y.target;g.removeEventListener("dispose",z),R(g),g.isVideoTexture&&h.delete(g)}function A(y){const g=y.target;g.removeEventListener("dispose",A),b(g)}function R(y){const g=r.get(y);if(g.__webglInit===void 0)return;const B=y.source,K=f.get(B);if(K){const $=K[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&O(y),Object.keys(K).length===0&&f.delete(B)}r.remove(y)}function O(y){const g=r.get(y);i.deleteTexture(g.__webglTexture);const B=y.source,K=f.get(B);delete K[g.__cacheKey],s.memory.textures--}function b(y){const g=r.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(g.__webglFramebuffer[K]))for(let $=0;$<g.__webglFramebuffer[K].length;$++)i.deleteFramebuffer(g.__webglFramebuffer[K][$]);else i.deleteFramebuffer(g.__webglFramebuffer[K]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[K])}else{if(Array.isArray(g.__webglFramebuffer))for(let K=0;K<g.__webglFramebuffer.length;K++)i.deleteFramebuffer(g.__webglFramebuffer[K]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let K=0;K<g.__webglColorRenderbuffer.length;K++)g.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[K]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=y.textures;for(let K=0,$=B.length;K<$;K++){const Z=r.get(B[K]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),s.memory.textures--),r.remove(B[K])}r.remove(y)}let M=0;function C(){M=0}function H(){const y=M;return y>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+n.maxTextures),M+=1,y}function k(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function q(y,g){const B=r.get(y);if(y.isVideoTexture&&tt(y),y.isRenderTargetTexture===!1&&y.version>0&&B.__version!==y.version){const K=y.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(B,y,g);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+g)}function Q(y,g){const B=r.get(y);if(y.version>0&&B.__version!==y.version){Ve(B,y,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+g)}function j(y,g){const B=r.get(y);if(y.version>0&&B.__version!==y.version){Ve(B,y,g);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+g)}function Y(y,g){const B=r.get(y);if(y.version>0&&B.__version!==y.version){W(B,y,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+g)}const G={[Jn]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[Qn]:i.MIRRORED_REPEAT},ae={[Ct]:i.NEAREST,[xc]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[Dt]:i.LINEAR,[$n]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},ge={[yc]:i.NEVER,[Cc]:i.ALWAYS,[Ec]:i.LESS,[js]:i.LEQUAL,[Tc]:i.EQUAL,[Rc]:i.GEQUAL,[wc]:i.GREATER,[Ac]:i.NOTEQUAL};function ye(y,g){if(g.type===Jt&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Dt||g.magFilter===$n||g.magFilter===Jr||g.magFilter===wi||g.minFilter===Dt||g.minFilter===$n||g.minFilter===Jr||g.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,G[g.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,G[g.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,G[g.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,ae[g.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,ae[g.minFilter]),g.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,ge[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ct||g.minFilter!==Jr&&g.minFilter!==wi||g.type===Jt&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||r.get(g).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,n.getMaxAnisotropy())),r.get(g).__currentAnisotropy=g.anisotropy}}}function Fe(y,g){let B=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",z));const K=g.source;let $=f.get(K);$===void 0&&($={},f.set(K,$));const Z=k(g);if(Z!==y.__cacheKey){$[Z]===void 0&&($[Z]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,B=!0),$[Z].usedTimes++;const Me=$[y.__cacheKey];Me!==void 0&&($[y.__cacheKey].usedTimes--,Me.usedTimes===0&&O(g)),y.__cacheKey=Z,y.__webglTexture=$[Z].texture}return B}function Ve(y,g,B){let K=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(K=i.TEXTURE_3D);const $=Fe(y,g),Z=g.source;t.bindTexture(K,y.__webglTexture,i.TEXTURE0+B);const Me=r.get(Z);if(Z.version!==Me.__version||$===!0){t.activeTexture(i.TEXTURE0+B);const oe=ke.getPrimaries(ke.workingColorSpace),ue=g.colorSpace===ci?null:ke.getPrimaries(g.colorSpace),Le=g.colorSpace===ci||oe===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ie=_(g.image,!1,n.maxTextureSize);ie=Ae(g,ie);const de=a.convert(g.format,g.colorSpace),Be=a.convert(g.type);let we=E(g.internalFormat,de,Be,g.colorSpace,g.isVideoTexture);ye(K,g);let he;const Re=g.mipmaps,Ie=g.isVideoTexture!==!0,Je=Me.__version===void 0||$===!0,P=Z.dataReady,re=T(g,ie);if(g.isDepthTexture)we=S(g.format===Zi,g.type),Je&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,we,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,we,ie.width,ie.height,0,de,Be,null));else if(g.isDataTexture)if(Re.length>0){Ie&&Je&&t.texStorage2D(i.TEXTURE_2D,re,we,Re[0].width,Re[0].height);for(let V=0,J=Re.length;V<J;V++)he=Re[V],Ie?P&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,he.width,he.height,de,Be,he.data):t.texImage2D(i.TEXTURE_2D,V,we,he.width,he.height,0,de,Be,he.data);g.generateMipmaps=!1}else Ie?(Je&&t.texStorage2D(i.TEXTURE_2D,re,we,ie.width,ie.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,de,Be,ie.data)):t.texImage2D(i.TEXTURE_2D,0,we,ie.width,ie.height,0,de,Be,ie.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ie&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,we,Re[0].width,Re[0].height,ie.depth);for(let V=0,J=Re.length;V<J;V++)if(he=Re[V],g.format!==Nt)if(de!==null)if(Ie){if(P)if(g.layerUpdates.size>0){const ne=nl(he.width,he.height,g.format,g.type);for(const xe of g.layerUpdates){const Ye=he.data.subarray(xe*ne/he.data.BYTES_PER_ELEMENT,(xe+1)*ne/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,xe,he.width,he.height,1,de,Ye,0,0)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,he.width,he.height,ie.depth,de,he.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,we,he.width,he.height,ie.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,he.width,he.height,ie.depth,de,Be,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,we,he.width,he.height,ie.depth,0,de,Be,he.data)}else{Ie&&Je&&t.texStorage2D(i.TEXTURE_2D,re,we,Re[0].width,Re[0].height);for(let V=0,J=Re.length;V<J;V++)he=Re[V],g.format!==Nt?de!==null?Ie?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,he.width,he.height,de,he.data):t.compressedTexImage2D(i.TEXTURE_2D,V,we,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?P&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,he.width,he.height,de,Be,he.data):t.texImage2D(i.TEXTURE_2D,V,we,he.width,he.height,0,de,Be,he.data)}else if(g.isDataArrayTexture)if(Ie){if(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,we,ie.width,ie.height,ie.depth),P)if(g.layerUpdates.size>0){const V=nl(ie.width,ie.height,g.format,g.type);for(const J of g.layerUpdates){const ne=ie.data.subarray(J*V/ie.data.BYTES_PER_ELEMENT,(J+1)*V/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,de,Be,ne)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,de,Be,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,ie.width,ie.height,ie.depth,0,de,Be,ie.data);else if(g.isData3DTexture)Ie?(Je&&t.texStorage3D(i.TEXTURE_3D,re,we,ie.width,ie.height,ie.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,de,Be,ie.data)):t.texImage3D(i.TEXTURE_3D,0,we,ie.width,ie.height,ie.depth,0,de,Be,ie.data);else if(g.isFramebufferTexture){if(Je)if(Ie)t.texStorage2D(i.TEXTURE_2D,re,we,ie.width,ie.height);else{let V=ie.width,J=ie.height;for(let ne=0;ne<re;ne++)t.texImage2D(i.TEXTURE_2D,ne,we,V,J,0,de,Be,null),V>>=1,J>>=1}}else if(Re.length>0){if(Ie&&Je){const V=Pe(Re[0]);t.texStorage2D(i.TEXTURE_2D,re,we,V.width,V.height)}for(let V=0,J=Re.length;V<J;V++)he=Re[V],Ie?P&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,de,Be,he):t.texImage2D(i.TEXTURE_2D,V,we,de,Be,he);g.generateMipmaps=!1}else if(Ie){if(Je){const V=Pe(ie);t.texStorage2D(i.TEXTURE_2D,re,we,V.width,V.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Be,ie)}else t.texImage2D(i.TEXTURE_2D,0,we,de,Be,ie);u(g)&&p(K),Me.__version=Z.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function W(y,g,B){if(g.image.length!==6)return;const K=Fe(y,g),$=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+B);const Z=r.get($);if($.version!==Z.__version||K===!0){t.activeTexture(i.TEXTURE0+B);const Me=ke.getPrimaries(ke.workingColorSpace),oe=g.colorSpace===ci?null:ke.getPrimaries(g.colorSpace),ue=g.colorSpace===ci||Me===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Le=g.isCompressedTexture||g.image[0].isCompressedTexture,ie=g.image[0]&&g.image[0].isDataTexture,de=[];for(let J=0;J<6;J++)!Le&&!ie?de[J]=_(g.image[J],!0,n.maxCubemapSize):de[J]=ie?g.image[J].image:g.image[J],de[J]=Ae(g,de[J]);const Be=de[0],we=a.convert(g.format,g.colorSpace),he=a.convert(g.type),Re=E(g.internalFormat,we,he,g.colorSpace),Ie=g.isVideoTexture!==!0,Je=Z.__version===void 0||K===!0,P=$.dataReady;let re=T(g,Be);ye(i.TEXTURE_CUBE_MAP,g);let V;if(Le){Ie&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,re,Re,Be.width,Be.height);for(let J=0;J<6;J++){V=de[J].mipmaps;for(let ne=0;ne<V.length;ne++){const xe=V[ne];g.format!==Nt?we!==null?Ie?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne,0,0,xe.width,xe.height,we,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne,Re,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne,0,0,xe.width,xe.height,we,he,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne,Re,xe.width,xe.height,0,we,he,xe.data)}}}else{if(V=g.mipmaps,Ie&&Je){V.length>0&&re++;const J=Pe(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,re,Re,J.width,J.height)}for(let J=0;J<6;J++)if(ie){Ie?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,de[J].width,de[J].height,we,he,de[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Re,de[J].width,de[J].height,0,we,he,de[J].data);for(let ne=0;ne<V.length;ne++){const xe=V[ne].image[J].image;Ie?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne+1,0,0,xe.width,xe.height,we,he,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne+1,Re,xe.width,xe.height,0,we,he,xe.data)}}else{Ie?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,we,he,de[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Re,we,he,de[J]);for(let ne=0;ne<V.length;ne++){const xe=V[ne];Ie?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne+1,0,0,we,he,xe.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne+1,Re,we,he,xe.image[J])}}}u(g)&&p(i.TEXTURE_CUBE_MAP),Z.__version=$.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function te(y,g,B,K,$,Z){const Me=a.convert(B.format,B.colorSpace),oe=a.convert(B.type),ue=E(B.internalFormat,Me,oe,B.colorSpace);if(!r.get(g).__hasExternalTextures){const Le=Math.max(1,g.width>>Z),ie=Math.max(1,g.height>>Z);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,Z,ue,Le,ie,g.depth,0,Me,oe,null):t.texImage2D($,Z,ue,Le,ie,0,Me,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),ve(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,$,r.get(B).__webglTexture,0,We(g)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,$,r.get(B).__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(y,g,B){if(i.bindRenderbuffer(i.RENDERBUFFER,y),g.depthBuffer){const K=g.depthTexture,$=K&&K.isDepthTexture?K.type:null,Z=S(g.stencilBuffer,$),Me=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=We(g);ve(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,Z,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Z,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Z,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,y)}else{const K=g.textures;for(let $=0;$<K.length;$++){const Z=K[$],Me=a.convert(Z.format,Z.colorSpace),oe=a.convert(Z.type),ue=E(Z.internalFormat,Me,oe,Z.colorSpace),Le=We(g);B&&ve(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,ue,g.width,g.height):ve(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,ue,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ue,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q(g.depthTexture,0);const B=r.get(g.depthTexture).__webglTexture,K=We(g);if(g.depthTexture.format===Ki)ve(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0);else if(g.depthTexture.format===Zi)ve(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function Ee(y){const g=r.get(y),B=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const K=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),K){const $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,K.removeEventListener("dispose",$)};K.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=K}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ce(g.__webglFramebuffer,y)}else if(B){g.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[K]),g.__webglDepthbuffer[K]===void 0)g.__webglDepthbuffer[K]=i.createRenderbuffer(),fe(g.__webglDepthbuffer[K],y,!1);else{const $=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),fe(g.__webglDepthbuffer,y,!1);else{const K=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,$)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(y,g,B){const K=r.get(y);g!==void 0&&te(K.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ee(y)}function Oe(y){const g=y.texture,B=r.get(y),K=r.get(g);y.addEventListener("dispose",A);const $=y.textures,Z=y.isWebGLCubeRenderTarget===!0,Me=$.length>1;if(Me||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=g.version,s.memory.textures++),Z){B.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[oe]=[];for(let ue=0;ue<g.mipmaps.length;ue++)B.__webglFramebuffer[oe][ue]=i.createFramebuffer()}else B.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)B.__webglFramebuffer[oe]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Me)for(let oe=0,ue=$.length;oe<ue;oe++){const Le=r.get($[oe]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),s.memory.textures++)}if(y.samples>0&&ve(y)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let oe=0;oe<$.length;oe++){const ue=$[oe];B.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[oe]);const Le=a.convert(ue.format,ue.colorSpace),ie=a.convert(ue.type),de=E(ue.internalFormat,Le,ie,ue.colorSpace,y.isXRRenderTarget===!0),Be=We(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,de,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,B.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(B.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ye(i.TEXTURE_CUBE_MAP,g);for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0)for(let ue=0;ue<g.mipmaps.length;ue++)te(B.__webglFramebuffer[oe][ue],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else te(B.__webglFramebuffer[oe],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);u(g)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let oe=0,ue=$.length;oe<ue;oe++){const Le=$[oe],ie=r.get(Le);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),ye(i.TEXTURE_2D,Le),te(B.__webglFramebuffer,y,Le,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,0),u(Le)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(oe=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,K.__webglTexture),ye(oe,g),g.mipmaps&&g.mipmaps.length>0)for(let ue=0;ue<g.mipmaps.length;ue++)te(B.__webglFramebuffer[ue],y,g,i.COLOR_ATTACHMENT0,oe,ue);else te(B.__webglFramebuffer,y,g,i.COLOR_ATTACHMENT0,oe,0);u(g)&&p(oe),t.unbindTexture()}y.depthBuffer&&Ee(y)}function Qe(y){const g=y.textures;for(let B=0,K=g.length;B<K;B++){const $=g[B];if(u($)){const Z=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Me=r.get($).__webglTexture;t.bindTexture(Z,Me),p(Z),t.unbindTexture()}}}const w=[],et=[];function He(y){if(y.samples>0){if(ve(y)===!1){const g=y.textures,B=y.width,K=y.height;let $=i.COLOR_BUFFER_BIT;const Z=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=r.get(y),oe=g.length>1;if(oe)for(let ue=0;ue<g.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ue=0;ue<g.length;ue++){if(y.resolveDepthBuffer&&(y.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ue]);const Le=r.get(g[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Le,0)}i.blitFramebuffer(0,0,B,K,0,0,B,K,$,i.NEAREST),l===!0&&(w.length=0,et.length=0,w.push(i.COLOR_ATTACHMENT0+ue),y.depthBuffer&&y.resolveDepthBuffer===!1&&(w.push(Z),et.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let ue=0;ue<g.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ue]);const Le=r.get(g[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function We(y){return Math.min(n.maxSamples,y.samples)}function ve(y){const g=r.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function tt(y){const g=s.render.frame;h.get(y)!==g&&(h.set(y,g),y.update())}function Ae(y,g){const B=y.colorSpace,K=y.format,$=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||B!==hi&&B!==ci&&(ke.getTransfer(B)===Ke?(K!==Nt||$!==Zt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),g}function Pe(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=C,this.setTexture2D=q,this.setTexture2DArray=Q,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=Ce,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=te,this.useMultisampledRTT=ve}function Kf(i,e){function t(r,n=ci){let a;const s=ke.getTransfer(n);if(r===Zt)return i.UNSIGNED_BYTE;if(r===ta)return i.UNSIGNED_SHORT_4_4_4_4;if(r===ia)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Os)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===Ns)return i.BYTE;if(r===Is)return i.SHORT;if(r===Tr)return i.UNSIGNED_SHORT;if(r===ea)return i.INT;if(r===Ai)return i.UNSIGNED_INT;if(r===Jt)return i.FLOAT;if(r===wr)return i.HALF_FLOAT;if(r===Fs)return i.ALPHA;if(r===Bs)return i.RGB;if(r===Nt)return i.RGBA;if(r===zs)return i.LUMINANCE;if(r===ks)return i.LUMINANCE_ALPHA;if(r===Ki)return i.DEPTH_COMPONENT;if(r===Zi)return i.DEPTH_STENCIL;if(r===Hs)return i.RED;if(r===ra)return i.RED_INTEGER;if(r===Gs)return i.RG;if(r===na)return i.RG_INTEGER;if(r===aa)return i.RGBA_INTEGER;if(r===Qr||r===$r||r===en||r===tn)if(s===Ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Qr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===en)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===tn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Qr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$r)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===en)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===tn)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sa||r===oa||r===la||r===ca)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===sa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===oa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===la)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ca)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ha||r===ua||r===da)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ha||r===ua)return s===Ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===da)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===pa||r===fa||r===ma||r===ga||r===_a||r===va||r===xa||r===Ma||r===ba||r===Sa||r===ya||r===Ea||r===Ta||r===wa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===pa)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fa)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ma)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ga)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_a)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===va)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xa)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ma)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ba)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sa)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ya)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ea)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ta)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wa)return s===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===rn||r===Aa||r===Ra)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===rn)return s===Ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Aa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ra)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vs||r===Ca||r===Pa||r===La)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===rn)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ca)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===La)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qi?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}class Zf extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Dn extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jf={type:"move"};class os{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const u=t.getJointPose(_,r),p=this._getHandJoint(c,_);u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=u.radius),p.visible=u!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jf)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Dn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Qf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$f=`
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

}`;class em{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const n=new yt,a=e.properties.get(n);a.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new gi({vertexShader:Qf,fragmentShader:$f,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new Hn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tm extends Ri{constructor(e,t){super();const r=this;let n=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,v=null;const _=new em,u=t.getContextAttributes();let p=null,E=null;const S=[],T=[],z=new Ue;let A=null;const R=new Lt;R.layers.enable(1),R.viewport=new pt;const O=new Lt;O.layers.enable(2),O.viewport=new pt;const b=[R,O],M=new Zf;M.layers.enable(1),M.layers.enable(2);let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=S[W];return te===void 0&&(te=new os,S[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=S[W];return te===void 0&&(te=new os,S[W]=te),te.getGripSpace()},this.getHand=function(W){let te=S[W];return te===void 0&&(te=new os,S[W]=te),te.getHandSpace()};function k(W){const te=T.indexOf(W.inputSource);if(te===-1)return;const fe=S[te];fe!==void 0&&(fe.update(W.inputSource,W.frame,c||s),fe.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",Q);for(let W=0;W<S.length;W++){const te=T[W];te!==null&&(T[W]=null,S[W].disconnect(te))}C=null,H=null,_.reset(),e.setRenderTarget(p),m=null,f=null,d=null,n=null,E=null,Ve.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return n},this.setSession=async function(W){if(n=W,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",q),n.addEventListener("inputsourceschange",Q),u.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(z),n.renderState.layers===void 0){const te={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(n,t,te),n.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Ci(m.framebufferWidth,m.framebufferHeight,{format:Nt,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil})}else{let te=null,fe=null,ce=null;u.depth&&(ce=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=u.stencil?Zi:Ki,fe=u.stencil?qi:Ai);const Ee={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:a};d=new XRWebGLBinding(n,t),f=d.createProjectionLayer(Ee),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Ci(f.textureWidth,f.textureHeight,{format:Nt,type:Zt,depthTexture:new Fo(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),Ve.setContext(n),Ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(W){for(let te=0;te<W.removed.length;te++){const fe=W.removed[te],ce=T.indexOf(fe);ce>=0&&(T[ce]=null,S[ce].disconnect(fe))}for(let te=0;te<W.added.length;te++){const fe=W.added[te];let ce=T.indexOf(fe);if(ce===-1){for(let Ce=0;Ce<S.length;Ce++)if(Ce>=T.length){T.push(fe),ce=Ce;break}else if(T[Ce]===null){T[Ce]=fe,ce=Ce;break}if(ce===-1)break}const Ee=S[ce];Ee&&Ee.connect(fe)}}const j=new D,Y=new D;function G(W,te,fe){j.setFromMatrixPosition(te.matrixWorld),Y.setFromMatrixPosition(fe.matrixWorld);const ce=j.distanceTo(Y),Ee=te.projectionMatrix.elements,Ce=fe.projectionMatrix.elements,Oe=Ee[14]/(Ee[10]-1),Qe=Ee[14]/(Ee[10]+1),w=(Ee[9]+1)/Ee[5],et=(Ee[9]-1)/Ee[5],He=(Ee[8]-1)/Ee[0],We=(Ce[8]+1)/Ce[0],ve=Oe*He,tt=Oe*We,Ae=ce/(-He+We),Pe=Ae*-He;if(te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Pe),W.translateZ(Ae),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ee[10]===-1)W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const y=Oe+Ae,g=Qe+Ae,B=ve-Pe,K=tt+(ce-Pe),$=w*Qe/g*y,Z=et*Qe/g*y;W.projectionMatrix.makePerspective(B,K,$,Z,y,g),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ae(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(n===null)return;let te=W.near,fe=W.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(fe=_.depthFar)),M.near=O.near=R.near=te,M.far=O.far=R.far=fe,(C!==M.near||H!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,H=M.far);const ce=W.parent,Ee=M.cameras;ae(M,ce);for(let Ce=0;Ce<Ee.length;Ce++)ae(Ee[Ce],ce);Ee.length===2?G(M,R,O):M.projectionMatrix.copy(R.projectionMatrix),ge(W,M,ce)};function ge(W,te,fe){fe===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(fe.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Rr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ye=null;function Fe(W,te){if(h=te.getViewerPose(c||s),v=te,h!==null){const fe=h.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let ce=!1;fe.length!==M.cameras.length&&(M.cameras.length=0,ce=!0);for(let Ce=0;Ce<fe.length;Ce++){const Oe=fe[Ce];let Qe=null;if(m!==null)Qe=m.getViewport(Oe);else{const et=d.getViewSubImage(f,Oe);Qe=et.viewport,Ce===0&&(e.setRenderTargetTextures(E,et.colorTexture,f.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(E))}let w=b[Ce];w===void 0&&(w=new Lt,w.layers.enable(Ce),w.viewport=new pt,b[Ce]=w),w.matrix.fromArray(Oe.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Oe.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ce===0&&(M.matrix.copy(w.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ce===!0&&M.cameras.push(w)}const Ee=n.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const Ce=d.getDepthInformation(fe[0]);Ce&&Ce.isValid&&Ce.texture&&_.init(e,Ce,n.renderState)}}for(let fe=0;fe<S.length;fe++){const ce=T[fe],Ee=S[fe];ce!==null&&Ee!==void 0&&Ee.update(ce,te,c||s)}ye&&ye(W,te),te.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:te}),v=null}const Ve=new Co;Ve.setAnimationLoop(Fe),this.setAnimationLoop=function(W){ye=W},this.dispose=function(){}}}const zi=new ni,im=new ht;function rm(i,e){function t(u,p){u.matrixAutoUpdate===!0&&u.updateMatrix(),p.value.copy(u.matrix)}function r(u,p){p.color.getRGB(u.fogColor.value,yo(i)),p.isFog?(u.fogNear.value=p.near,u.fogFar.value=p.far):p.isFogExp2&&(u.fogDensity.value=p.density)}function n(u,p,E,S,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(u,p):p.isMeshToonMaterial?(a(u,p),d(u,p)):p.isMeshPhongMaterial?(a(u,p),h(u,p)):p.isMeshStandardMaterial?(a(u,p),f(u,p),p.isMeshPhysicalMaterial&&m(u,p,T)):p.isMeshMatcapMaterial?(a(u,p),v(u,p)):p.isMeshDepthMaterial?a(u,p):p.isMeshDistanceMaterial?(a(u,p),_(u,p)):p.isMeshNormalMaterial?a(u,p):p.isLineBasicMaterial?(s(u,p),p.isLineDashedMaterial&&o(u,p)):p.isPointsMaterial?l(u,p,E,S):p.isSpriteMaterial?c(u,p):p.isShadowMaterial?(u.color.value.copy(p.color),u.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(u,p){u.opacity.value=p.opacity,p.color&&u.diffuse.value.copy(p.color),p.emissive&&u.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(u.map.value=p.map,t(p.map,u.mapTransform)),p.alphaMap&&(u.alphaMap.value=p.alphaMap,t(p.alphaMap,u.alphaMapTransform)),p.bumpMap&&(u.bumpMap.value=p.bumpMap,t(p.bumpMap,u.bumpMapTransform),u.bumpScale.value=p.bumpScale,p.side===bt&&(u.bumpScale.value*=-1)),p.normalMap&&(u.normalMap.value=p.normalMap,t(p.normalMap,u.normalMapTransform),u.normalScale.value.copy(p.normalScale),p.side===bt&&u.normalScale.value.negate()),p.displacementMap&&(u.displacementMap.value=p.displacementMap,t(p.displacementMap,u.displacementMapTransform),u.displacementScale.value=p.displacementScale,u.displacementBias.value=p.displacementBias),p.emissiveMap&&(u.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,u.emissiveMapTransform)),p.specularMap&&(u.specularMap.value=p.specularMap,t(p.specularMap,u.specularMapTransform)),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest);const E=e.get(p),S=E.envMap,T=E.envMapRotation;S&&(u.envMap.value=S,zi.copy(T),zi.x*=-1,zi.y*=-1,zi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),u.envMapRotation.value.setFromMatrix4(im.makeRotationFromEuler(zi)),u.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=p.reflectivity,u.ior.value=p.ior,u.refractionRatio.value=p.refractionRatio),p.lightMap&&(u.lightMap.value=p.lightMap,u.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,u.lightMapTransform)),p.aoMap&&(u.aoMap.value=p.aoMap,u.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,u.aoMapTransform))}function s(u,p){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,p.map&&(u.map.value=p.map,t(p.map,u.mapTransform))}function o(u,p){u.dashSize.value=p.dashSize,u.totalSize.value=p.dashSize+p.gapSize,u.scale.value=p.scale}function l(u,p,E,S){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,u.size.value=p.size*E,u.scale.value=S*.5,p.map&&(u.map.value=p.map,t(p.map,u.uvTransform)),p.alphaMap&&(u.alphaMap.value=p.alphaMap,t(p.alphaMap,u.alphaMapTransform)),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest)}function c(u,p){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,u.rotation.value=p.rotation,p.map&&(u.map.value=p.map,t(p.map,u.mapTransform)),p.alphaMap&&(u.alphaMap.value=p.alphaMap,t(p.alphaMap,u.alphaMapTransform)),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest)}function h(u,p){u.specular.value.copy(p.specular),u.shininess.value=Math.max(p.shininess,1e-4)}function d(u,p){p.gradientMap&&(u.gradientMap.value=p.gradientMap)}function f(u,p){u.metalness.value=p.metalness,p.metalnessMap&&(u.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,u.metalnessMapTransform)),u.roughness.value=p.roughness,p.roughnessMap&&(u.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,u.roughnessMapTransform)),p.envMap&&(u.envMapIntensity.value=p.envMapIntensity)}function m(u,p,E){u.ior.value=p.ior,p.sheen>0&&(u.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),u.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(u.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,u.sheenColorMapTransform)),p.sheenRoughnessMap&&(u.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,u.sheenRoughnessMapTransform))),p.clearcoat>0&&(u.clearcoat.value=p.clearcoat,u.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(u.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,u.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(u.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bt&&u.clearcoatNormalScale.value.negate())),p.dispersion>0&&(u.dispersion.value=p.dispersion),p.iridescence>0&&(u.iridescence.value=p.iridescence,u.iridescenceIOR.value=p.iridescenceIOR,u.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(u.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,u.iridescenceMapTransform)),p.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),p.transmission>0&&(u.transmission.value=p.transmission,u.transmissionSamplerMap.value=E.texture,u.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(u.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,u.transmissionMapTransform)),u.thickness.value=p.thickness,p.thicknessMap&&(u.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=p.attenuationDistance,u.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(u.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(u.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=p.specularIntensity,u.specularColor.value.copy(p.specularColor),p.specularColorMap&&(u.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,u.specularColorMapTransform)),p.specularIntensityMap&&(u.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,u.specularIntensityMapTransform))}function v(u,p){p.matcap&&(u.matcap.value=p.matcap)}function _(u,p){const E=e.get(p).light;u.referencePosition.value.setFromMatrixPosition(E.matrixWorld),u.nearDistance.value=E.shadow.camera.near,u.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function nm(i,e,t,r){let n={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const T=S.program;r.uniformBlockBinding(E,T)}function c(E,S){let T=n[E.id];T===void 0&&(v(E),T=h(E),n[E.id]=T,E.addEventListener("dispose",u));const z=S.program;r.updateUBOMapping(E,z);const A=e.render.frame;a[E.id]!==A&&(f(E),a[E.id]=A)}function h(E){const S=d();E.__bindingPointIndex=S;const T=i.createBuffer(),z=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,z,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function d(){for(let E=0;E<o;E++)if(s.indexOf(E)===-1)return s.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const S=n[E.id],T=E.uniforms,z=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,R=T.length;A<R;A++){const O=Array.isArray(T[A])?T[A]:[T[A]];for(let b=0,M=O.length;b<M;b++){const C=O[b];if(m(C,A,b,z)===!0){const H=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let q=0;for(let Q=0;Q<k.length;Q++){const j=k[Q],Y=_(j);typeof j=="number"||typeof j=="boolean"?(C.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,H+q,C.__data)):j.isMatrix3?(C.__data[0]=j.elements[0],C.__data[1]=j.elements[1],C.__data[2]=j.elements[2],C.__data[3]=0,C.__data[4]=j.elements[3],C.__data[5]=j.elements[4],C.__data[6]=j.elements[5],C.__data[7]=0,C.__data[8]=j.elements[6],C.__data[9]=j.elements[7],C.__data[10]=j.elements[8],C.__data[11]=0):(j.toArray(C.__data,q),q+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,S,T,z){const A=E.value,R=S+"_"+T;if(z[R]===void 0)return typeof A=="number"||typeof A=="boolean"?z[R]=A:z[R]=A.clone(),!0;{const O=z[R];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return z[R]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function v(E){const S=E.uniforms;let T=0;const z=16;for(let R=0,O=S.length;R<O;R++){const b=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,C=b.length;M<C;M++){const H=b[M],k=Array.isArray(H.value)?H.value:[H.value];for(let q=0,Q=k.length;q<Q;q++){const j=k[q],Y=_(j),G=T%z,ae=G%Y.boundary,ge=G+ae;T+=ae,ge!==0&&z-ge<Y.storage&&(T+=z-ge),H.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=T,T+=Y.storage}}}const A=T%z;return A>0&&(T+=z-A),E.__size=T,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function u(E){const S=E.target;S.removeEventListener("dispose",u);const T=s.indexOf(S.__bindingPointIndex);s.splice(T,1),i.deleteBuffer(n[S.id]),delete n[S.id],delete a[S.id]}function p(){for(const E in n)i.deleteBuffer(n[E]);s=[],n={},a={}}return{bind:l,update:c,dispose:p}}class am{constructor(e={}){const{canvas:t=Yc(),context:r=null,depth:n=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=r.getContextAttributes().alpha}else f=s;const m=new Uint32Array(4),v=new Int32Array(4);let _=null,u=null;const p=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ht,this.toneMapping=li,this.toneMappingExposure=1;const S=this;let T=!1,z=0,A=0,R=null,O=-1,b=null;const M=new pt,C=new pt;let H=null;const k=new Xe(0);let q=0,Q=t.width,j=t.height,Y=1,G=null,ae=null;const ge=new pt(0,0,Q,j),ye=new pt(0,0,Q,j);let Fe=!1;const Ve=new Ro;let W=!1,te=!1;const fe=new ht,ce=new D,Ee=new pt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function Qe(){return R===null?Y:1}let w=r;function et(x,L){return t.getContext(x,L)}try{const x={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jn}`),t.addEventListener("webglcontextlost",V,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",ne,!1),w===null){const L="webgl2";if(w=et(L,x),w===null)throw et(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let He,We,ve,tt,Ae,Pe,y,g,B,K,$,Z,Me,oe,ue,Le,ie,de,Be,we,he,Re,Ie,Je;function P(){He=new hp(w),He.init(),Re=new Kf(w,He),We=new rp(w,He,e,Re),ve=new jf(w),tt=new pp(w),Ae=new Uf,Pe=new qf(w,He,ve,Ae,We,Re,tt),y=new ap(S),g=new cp(S),B=new xh(w),Ie=new tp(w,B),K=new up(w,B,tt,Ie),$=new mp(w,K,B,tt),Be=new fp(w,We,Pe),Le=new np(Ae),Z=new Lf(S,y,g,He,We,Ie,Le),Me=new rm(S,Ae),oe=new Nf,ue=new kf(He),de=new ep(S,y,g,ve,$,f,l),ie=new Xf(S,$,We),Je=new nm(w,tt,We,ve),we=new ip(w,He,tt),he=new dp(w,He,tt),tt.programs=Z.programs,S.capabilities=We,S.extensions=He,S.properties=Ae,S.renderLists=oe,S.shadowMap=ie,S.state=ve,S.info=tt}P();const re=new tm(S,w);this.xr=re,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const x=He.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=He.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(x){x!==void 0&&(Y=x,this.setSize(Q,j,!1))},this.getSize=function(x){return x.set(Q,j)},this.setSize=function(x,L,N=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=x,j=L,t.width=Math.floor(x*Y),t.height=Math.floor(L*Y),N===!0&&(t.style.width=x+"px",t.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(Q*Y,j*Y).floor()},this.setDrawingBufferSize=function(x,L,N){Q=x,j=L,Y=N,t.width=Math.floor(x*N),t.height=Math.floor(L*N),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(M)},this.getViewport=function(x){return x.copy(ge)},this.setViewport=function(x,L,N,F){x.isVector4?ge.set(x.x,x.y,x.z,x.w):ge.set(x,L,N,F),ve.viewport(M.copy(ge).multiplyScalar(Y).round())},this.getScissor=function(x){return x.copy(ye)},this.setScissor=function(x,L,N,F){x.isVector4?ye.set(x.x,x.y,x.z,x.w):ye.set(x,L,N,F),ve.scissor(C.copy(ye).multiplyScalar(Y).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(x){ve.setScissorTest(Fe=x)},this.setOpaqueSort=function(x){G=x},this.setTransparentSort=function(x){ae=x},this.getClearColor=function(x){return x.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(x=!0,L=!0,N=!0){let F=0;if(x){let U=!1;if(R!==null){const ee=R.texture.format;U=ee===aa||ee===na||ee===ra}if(U){const ee=R.texture.type,le=ee===Zt||ee===Ai||ee===Tr||ee===qi||ee===ta||ee===ia,pe=de.getClearColor(),me=de.getClearAlpha(),Te=pe.r,Se=pe.g,be=pe.b;le?(m[0]=Te,m[1]=Se,m[2]=be,m[3]=me,w.clearBufferuiv(w.COLOR,0,m)):(v[0]=Te,v[1]=Se,v[2]=be,v[3]=me,w.clearBufferiv(w.COLOR,0,v))}else F|=w.COLOR_BUFFER_BIT}L&&(F|=w.DEPTH_BUFFER_BIT),N&&(F|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",V,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),oe.dispose(),ue.dispose(),Ae.dispose(),y.dispose(),g.dispose(),$.dispose(),Ie.dispose(),Je.dispose(),Z.dispose(),re.dispose(),re.removeEventListener("sessionstart",kt),re.removeEventListener("sessionend",Ms),Si.stop()};function V(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const x=tt.autoReset,L=ie.enabled,N=ie.autoUpdate,F=ie.needsUpdate,U=ie.type;P(),tt.autoReset=x,ie.enabled=L,ie.autoUpdate=N,ie.needsUpdate=F,ie.type=U}function ne(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function xe(x){const L=x.target;L.removeEventListener("dispose",xe),Ye(L)}function Ye(x){it(x),Ae.remove(x)}function it(x){const L=Ae.get(x).programs;L!==void 0&&(L.forEach(function(N){Z.releaseProgram(N)}),x.isShaderMaterial&&Z.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,N,F,U,ee){L===null&&(L=Ce);const le=U.isMesh&&U.matrixWorld.determinant()<0,pe=Ul(x,L,N,F,U);ve.setMaterial(F,le);let me=N.index,Te=1;if(F.wireframe===!0){if(me=K.getWireframeAttribute(N),me===void 0)return;Te=2}const Se=N.drawRange,be=N.attributes.position;let Ge=Se.start*Te,rt=(Se.start+Se.count)*Te;ee!==null&&(Ge=Math.max(Ge,ee.start*Te),rt=Math.min(rt,(ee.start+ee.count)*Te)),me!==null?(Ge=Math.max(Ge,0),rt=Math.min(rt,me.count)):be!=null&&(Ge=Math.max(Ge,0),rt=Math.min(rt,be.count));const $e=rt-Ge;if($e<0||$e===1/0)return;Ie.setup(U,F,pe,N,me);let st,Ze=we;if(me!==null&&(st=B.get(me),Ze=he,Ze.setIndex(st)),U.isMesh)F.wireframe===!0?(ve.setLineWidth(F.wireframeLinewidth*Qe()),Ze.setMode(w.LINES)):Ze.setMode(w.TRIANGLES);else if(U.isLine){let _e=F.linewidth;_e===void 0&&(_e=1),ve.setLineWidth(_e*Qe()),U.isLineSegments?Ze.setMode(w.LINES):U.isLineLoop?Ze.setMode(w.LINE_LOOP):Ze.setMode(w.LINE_STRIP)}else U.isPoints?Ze.setMode(w.POINTS):U.isSprite&&Ze.setMode(w.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ze.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Ze.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const _e=U._multiDrawStarts,vt=U._multiDrawCounts,yi=U._multiDrawCount,Ut=me?B.get(me).bytesPerElement:1,Gi=Ae.get(F).currentProgram.getUniforms();for(let Et=0;Et<yi;Et++)Gi.setValue(w,"_gl_DrawID",Et),Ze.render(_e[Et]/Ut,vt[Et])}else if(U.isInstancedMesh)Ze.renderInstances(Ge,$e,U.count);else if(N.isInstancedBufferGeometry){const _e=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,vt=Math.min(N.instanceCount,_e);Ze.renderInstances(Ge,$e,vt)}else Ze.render(Ge,$e)};function ft(x,L,N){x.transparent===!0&&x.side===Kt&&x.forceSinglePass===!1?(x.side=bt,x.needsUpdate=!0,qr(x,L,N),x.side=si,x.needsUpdate=!0,qr(x,L,N),x.side=Kt):qr(x,L,N)}this.compile=function(x,L,N=null){N===null&&(N=x),u=ue.get(N),u.init(L),E.push(u),N.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),x!==N&&x.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const F=new Set;return x.traverse(function(U){const ee=U.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){const pe=ee[le];ft(pe,N,U),F.add(pe)}else ft(ee,N,U),F.add(ee)}),E.pop(),u=null,F},this.compileAsync=function(x,L,N=null){const F=this.compile(x,L,N);return new Promise(U=>{function ee(){if(F.forEach(function(le){Ae.get(le).currentProgram.isReady()&&F.delete(le)}),F.size===0){U(x);return}setTimeout(ee,10)}He.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let ze=null;function Yt(x){ze&&ze(x)}function kt(){Si.stop()}function Ms(){Si.start()}const Si=new Co;Si.setAnimationLoop(Yt),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(x){ze=x,re.setAnimationLoop(x),x===null?Si.stop():Si.start()},re.addEventListener("sessionstart",kt),re.addEventListener("sessionend",Ms),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(L),L=re.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,L,R),u=ue.get(x,E.length),u.init(L),E.push(u),fe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Ve.setFromProjectionMatrix(fe),te=this.localClippingEnabled,W=Le.init(this.clippingPlanes,te),_=oe.get(x,p.length),_.init(),p.push(_),re.enabled===!0&&re.isPresenting===!0){const ee=S.xr.getDepthSensingMesh();ee!==null&&Gn(ee,L,-1/0,S.sortObjects)}Gn(x,L,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(G,ae),Oe=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Oe&&de.addToRenderList(_,x),this.info.render.frame++,W===!0&&Le.beginShadows();const N=u.state.shadowsArray;ie.render(N,x,L),W===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=_.opaque,U=_.transmissive;if(u.setupLights(),L.isArrayCamera){const ee=L.cameras;if(U.length>0)for(let le=0,pe=ee.length;le<pe;le++){const me=ee[le];Ss(F,U,x,me)}Oe&&de.render(x);for(let le=0,pe=ee.length;le<pe;le++){const me=ee[le];bs(_,x,me,me.viewport)}}else U.length>0&&Ss(F,U,x,L),Oe&&de.render(x),bs(_,x,L);R!==null&&(Pe.updateMultisampleRenderTarget(R),Pe.updateRenderTargetMipmap(R)),x.isScene===!0&&x.onAfterRender(S,x,L),Ie.resetDefaultState(),O=-1,b=null,E.pop(),E.length>0?(u=E[E.length-1],W===!0&&Le.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Gn(x,L,N,F){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)N=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)u.pushLight(x),x.castShadow&&u.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Ve.intersectsSprite(x)){F&&Ee.setFromMatrixPosition(x.matrixWorld).applyMatrix4(fe);const ee=$.update(x),le=x.material;le.visible&&_.push(x,ee,le,N,Ee.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Ve.intersectsObject(x))){const ee=$.update(x),le=x.material;if(F&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ee.copy(x.boundingSphere.center)):(ee.boundingSphere===null&&ee.computeBoundingSphere(),Ee.copy(ee.boundingSphere.center)),Ee.applyMatrix4(x.matrixWorld).applyMatrix4(fe)),Array.isArray(le)){const pe=ee.groups;for(let me=0,Te=pe.length;me<Te;me++){const Se=pe[me],be=le[Se.materialIndex];be&&be.visible&&_.push(x,ee,be,N,Ee.z,Se)}}else le.visible&&_.push(x,ee,le,N,Ee.z,null)}}const U=x.children;for(let ee=0,le=U.length;ee<le;ee++)Gn(U[ee],L,N,F)}function bs(x,L,N,F){const U=x.opaque,ee=x.transmissive,le=x.transparent;u.setupLightsView(N),W===!0&&Le.setGlobalState(S.clippingPlanes,N),F&&ve.viewport(M.copy(F)),U.length>0&&Yr(U,L,N),ee.length>0&&Yr(ee,L,N),le.length>0&&Yr(le,L,N),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Ss(x,L,N,F){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[F.id]===void 0&&(u.state.transmissionRenderTarget[F.id]=new Ci(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?wr:Zt,minFilter:wi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace}));const U=u.state.transmissionRenderTarget[F.id],ee=F.viewport||M;U.setSize(ee.z,ee.w);const le=S.getRenderTarget();S.setRenderTarget(U),S.getClearColor(k),q=S.getClearAlpha(),q<1&&S.setClearColor(16777215,.5),S.clear(),Oe&&de.render(N);const pe=S.toneMapping;S.toneMapping=li;const me=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),u.setupLightsView(F),W===!0&&Le.setGlobalState(S.clippingPlanes,F),Yr(x,N,F),Pe.updateMultisampleRenderTarget(U),Pe.updateRenderTargetMipmap(U),He.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Se=0,be=L.length;Se<be;Se++){const Ge=L[Se],rt=Ge.object,$e=Ge.geometry,st=Ge.material,Ze=Ge.group;if(st.side===Kt&&rt.layers.test(F.layers)){const _e=st.side;st.side=bt,st.needsUpdate=!0,ys(rt,N,F,$e,st,Ze),st.side=_e,st.needsUpdate=!0,Te=!0}}Te===!0&&(Pe.updateMultisampleRenderTarget(U),Pe.updateRenderTargetMipmap(U))}S.setRenderTarget(le),S.setClearColor(k,q),me!==void 0&&(F.viewport=me),S.toneMapping=pe}function Yr(x,L,N){const F=L.isScene===!0?L.overrideMaterial:null;for(let U=0,ee=x.length;U<ee;U++){const le=x[U],pe=le.object,me=le.geometry,Te=F===null?le.material:F,Se=le.group;pe.layers.test(N.layers)&&ys(pe,L,N,me,Te,Se)}}function ys(x,L,N,F,U,ee){x.onBeforeRender(S,L,N,F,U,ee),x.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),U.onBeforeRender(S,L,N,F,x,ee),U.transparent===!0&&U.side===Kt&&U.forceSinglePass===!1?(U.side=bt,U.needsUpdate=!0,S.renderBufferDirect(N,L,F,U,x,ee),U.side=si,U.needsUpdate=!0,S.renderBufferDirect(N,L,F,U,x,ee),U.side=Kt):S.renderBufferDirect(N,L,F,U,x,ee),x.onAfterRender(S,L,N,F,U,ee)}function qr(x,L,N){L.isScene!==!0&&(L=Ce);const F=Ae.get(x),U=u.state.lights,ee=u.state.shadowsArray,le=U.state.version,pe=Z.getParameters(x,U.state,ee,L,N),me=Z.getProgramCacheKey(pe);let Te=F.programs;F.environment=x.isMeshStandardMaterial?L.environment:null,F.fog=L.fog,F.envMap=(x.isMeshStandardMaterial?g:y).get(x.envMap||F.environment),F.envMapRotation=F.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,Te===void 0&&(x.addEventListener("dispose",xe),Te=new Map,F.programs=Te);let Se=Te.get(me);if(Se!==void 0){if(F.currentProgram===Se&&F.lightsStateVersion===le)return Ts(x,pe),Se}else pe.uniforms=Z.getUniforms(x),x.onBeforeCompile(pe,S),Se=Z.acquireProgram(pe,me),Te.set(me,Se),F.uniforms=pe.uniforms;const be=F.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(be.clippingPlanes=Le.uniform),Ts(x,pe),F.needsLights=Nl(x),F.lightsStateVersion=le,F.needsLights&&(be.ambientLightColor.value=U.state.ambient,be.lightProbe.value=U.state.probe,be.directionalLights.value=U.state.directional,be.directionalLightShadows.value=U.state.directionalShadow,be.spotLights.value=U.state.spot,be.spotLightShadows.value=U.state.spotShadow,be.rectAreaLights.value=U.state.rectArea,be.ltc_1.value=U.state.rectAreaLTC1,be.ltc_2.value=U.state.rectAreaLTC2,be.pointLights.value=U.state.point,be.pointLightShadows.value=U.state.pointShadow,be.hemisphereLights.value=U.state.hemi,be.directionalShadowMap.value=U.state.directionalShadowMap,be.directionalShadowMatrix.value=U.state.directionalShadowMatrix,be.spotShadowMap.value=U.state.spotShadowMap,be.spotLightMatrix.value=U.state.spotLightMatrix,be.spotLightMap.value=U.state.spotLightMap,be.pointShadowMap.value=U.state.pointShadowMap,be.pointShadowMatrix.value=U.state.pointShadowMatrix),F.currentProgram=Se,F.uniformsList=null,Se}function Es(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=Ln.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function Ts(x,L){const N=Ae.get(x);N.outputColorSpace=L.outputColorSpace,N.batching=L.batching,N.batchingColor=L.batchingColor,N.instancing=L.instancing,N.instancingColor=L.instancingColor,N.instancingMorph=L.instancingMorph,N.skinning=L.skinning,N.morphTargets=L.morphTargets,N.morphNormals=L.morphNormals,N.morphColors=L.morphColors,N.morphTargetsCount=L.morphTargetsCount,N.numClippingPlanes=L.numClippingPlanes,N.numIntersection=L.numClipIntersection,N.vertexAlphas=L.vertexAlphas,N.vertexTangents=L.vertexTangents,N.toneMapping=L.toneMapping}function Ul(x,L,N,F,U){L.isScene!==!0&&(L=Ce),Pe.resetTextureUnits();const ee=L.fog,le=F.isMeshStandardMaterial?L.environment:null,pe=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:hi,me=(F.isMeshStandardMaterial?g:y).get(F.envMap||le),Te=F.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Se=!!N.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),be=!!N.morphAttributes.position,Ge=!!N.morphAttributes.normal,rt=!!N.morphAttributes.color;let $e=li;F.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&($e=S.toneMapping);const st=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Ze=st!==void 0?st.length:0,_e=Ae.get(F),vt=u.state.lights;if(W===!0&&(te===!0||x!==b)){const Rt=x===b&&F.id===O;Le.setState(F,x,Rt)}let yi=!1;F.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==vt.state.version||_e.outputColorSpace!==pe||U.isBatchedMesh&&_e.batching===!1||!U.isBatchedMesh&&_e.batching===!0||U.isBatchedMesh&&_e.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&_e.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&_e.instancing===!1||!U.isInstancedMesh&&_e.instancing===!0||U.isSkinnedMesh&&_e.skinning===!1||!U.isSkinnedMesh&&_e.skinning===!0||U.isInstancedMesh&&_e.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&_e.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&_e.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&_e.instancingMorph===!1&&U.morphTexture!==null||_e.envMap!==me||F.fog===!0&&_e.fog!==ee||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Le.numPlanes||_e.numIntersection!==Le.numIntersection)||_e.vertexAlphas!==Te||_e.vertexTangents!==Se||_e.morphTargets!==be||_e.morphNormals!==Ge||_e.morphColors!==rt||_e.toneMapping!==$e||_e.morphTargetsCount!==Ze)&&(yi=!0):(yi=!0,_e.__version=F.version);let Ut=_e.currentProgram;yi===!0&&(Ut=qr(F,L,U));let Gi=!1,Et=!1,Vn=!1;const nt=Ut.getUniforms(),ai=_e.uniforms;if(ve.useProgram(Ut.program)&&(Gi=!0,Et=!0,Vn=!0),F.id!==O&&(O=F.id,Et=!0),Gi||b!==x){nt.setValue(w,"projectionMatrix",x.projectionMatrix),nt.setValue(w,"viewMatrix",x.matrixWorldInverse);const Rt=nt.map.cameraPosition;Rt!==void 0&&Rt.setValue(w,ce.setFromMatrixPosition(x.matrixWorld)),We.logarithmicDepthBuffer&&nt.setValue(w,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&nt.setValue(w,"isOrthographic",x.isOrthographicCamera===!0),b!==x&&(b=x,Et=!0,Vn=!0)}if(U.isSkinnedMesh){nt.setOptional(w,U,"bindMatrix"),nt.setOptional(w,U,"bindMatrixInverse");const Rt=U.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),nt.setValue(w,"boneTexture",Rt.boneTexture,Pe))}U.isBatchedMesh&&(nt.setOptional(w,U,"batchingTexture"),nt.setValue(w,"batchingTexture",U._matricesTexture,Pe),nt.setOptional(w,U,"batchingIdTexture"),nt.setValue(w,"batchingIdTexture",U._indirectTexture,Pe),nt.setOptional(w,U,"batchingColorTexture"),U._colorsTexture!==null&&nt.setValue(w,"batchingColorTexture",U._colorsTexture,Pe));const Wn=N.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&Be.update(U,N,Ut),(Et||_e.receiveShadow!==U.receiveShadow)&&(_e.receiveShadow=U.receiveShadow,nt.setValue(w,"receiveShadow",U.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(ai.envMap.value=me,ai.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&L.environment!==null&&(ai.envMapIntensity.value=L.environmentIntensity),Et&&(nt.setValue(w,"toneMappingExposure",S.toneMappingExposure),_e.needsLights&&Dl(ai,Vn),ee&&F.fog===!0&&Me.refreshFogUniforms(ai,ee),Me.refreshMaterialUniforms(ai,F,Y,j,u.state.transmissionRenderTarget[x.id]),Ln.upload(w,Es(_e),ai,Pe)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ln.upload(w,Es(_e),ai,Pe),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&nt.setValue(w,"center",U.center),nt.setValue(w,"modelViewMatrix",U.modelViewMatrix),nt.setValue(w,"normalMatrix",U.normalMatrix),nt.setValue(w,"modelMatrix",U.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Rt=F.uniformsGroups;for(let Xn=0,Il=Rt.length;Xn<Il;Xn++){const ws=Rt[Xn];Je.update(ws,Ut),Je.bind(ws,Ut)}}return Ut}function Dl(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function Nl(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(x,L,N){Ae.get(x.texture).__webglTexture=L,Ae.get(x.depthTexture).__webglTexture=N;const F=Ae.get(x);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=N===void 0,F.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,L){const N=Ae.get(x);N.__webglFramebuffer=L,N.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,N=0){R=x,z=L,A=N;let F=!0,U=null,ee=!1,le=!1;if(x){const pe=Ae.get(x);if(pe.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(w.FRAMEBUFFER,null),F=!1;else if(pe.__webglFramebuffer===void 0)Pe.setupRenderTarget(x);else if(pe.__hasExternalTextures)Pe.rebindTextures(x,Ae.get(x.texture).__webglTexture,Ae.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Se=x.depthTexture;if(pe.__boundDepthTexture!==Se){if(Se!==null&&Ae.has(Se)&&(x.width!==Se.image.width||x.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Pe.setupDepthRenderbuffer(x)}}const me=x.texture;(me.isData3DTexture||me.isDataArrayTexture||me.isCompressedArrayTexture)&&(le=!0);const Te=Ae.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Te[L])?U=Te[L][N]:U=Te[L],ee=!0):x.samples>0&&Pe.useMultisampledRTT(x)===!1?U=Ae.get(x).__webglMultisampledFramebuffer:Array.isArray(Te)?U=Te[N]:U=Te,M.copy(x.viewport),C.copy(x.scissor),H=x.scissorTest}else M.copy(ge).multiplyScalar(Y).floor(),C.copy(ye).multiplyScalar(Y).floor(),H=Fe;if(ve.bindFramebuffer(w.FRAMEBUFFER,U)&&F&&ve.drawBuffers(x,U),ve.viewport(M),ve.scissor(C),ve.setScissorTest(H),ee){const pe=Ae.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+L,pe.__webglTexture,N)}else if(le){const pe=Ae.get(x.texture),me=L||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,pe.__webglTexture,N||0,me)}O=-1},this.readRenderTargetPixels=function(x,L,N,F,U,ee,le){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Ae.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&le!==void 0&&(pe=pe[le]),pe){ve.bindFramebuffer(w.FRAMEBUFFER,pe);try{const me=x.texture,Te=me.format,Se=me.type;if(!We.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-F&&N>=0&&N<=x.height-U&&w.readPixels(L,N,F,U,Re.convert(Te),Re.convert(Se),ee)}finally{const me=R!==null?Ae.get(R).__webglFramebuffer:null;ve.bindFramebuffer(w.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(x,L,N,F,U,ee,le){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Ae.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&le!==void 0&&(pe=pe[le]),pe){ve.bindFramebuffer(w.FRAMEBUFFER,pe);try{const me=x.texture,Te=me.format,Se=me.type;if(!We.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=x.width-F&&N>=0&&N<=x.height-U){const be=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,be),w.bufferData(w.PIXEL_PACK_BUFFER,ee.byteLength,w.STREAM_READ),w.readPixels(L,N,F,U,Re.convert(Te),Re.convert(Se),0),w.flush();const Ge=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);await qc(w,Ge,4);try{w.bindBuffer(w.PIXEL_PACK_BUFFER,be),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ee)}finally{w.deleteBuffer(be),w.deleteSync(Ge)}return ee}}finally{const me=R!==null?Ae.get(R).__webglFramebuffer:null;ve.bindFramebuffer(w.FRAMEBUFFER,me)}}},this.copyFramebufferToTexture=function(x,L=null,N=0){x.isTexture!==!0&&(Pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,x=arguments[1]);const F=Math.pow(2,-N),U=Math.floor(x.image.width*F),ee=Math.floor(x.image.height*F),le=L!==null?L.x:0,pe=L!==null?L.y:0;Pe.setTexture2D(x,0),w.copyTexSubImage2D(w.TEXTURE_2D,N,0,0,le,pe,U,ee),ve.unbindTexture()},this.copyTextureToTexture=function(x,L,N=null,F=null,U=0){x.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,x=arguments[1],L=arguments[2],U=arguments[3]||0,N=null);let ee,le,pe,me,Te,Se;N!==null?(ee=N.max.x-N.min.x,le=N.max.y-N.min.y,pe=N.min.x,me=N.min.y):(ee=x.image.width,le=x.image.height,pe=0,me=0),F!==null?(Te=F.x,Se=F.y):(Te=0,Se=0);const be=Re.convert(L.format),Ge=Re.convert(L.type);Pe.setTexture2D(L,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,L.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,L.unpackAlignment);const rt=w.getParameter(w.UNPACK_ROW_LENGTH),$e=w.getParameter(w.UNPACK_IMAGE_HEIGHT),st=w.getParameter(w.UNPACK_SKIP_PIXELS),Ze=w.getParameter(w.UNPACK_SKIP_ROWS),_e=w.getParameter(w.UNPACK_SKIP_IMAGES),vt=x.isCompressedTexture?x.mipmaps[U]:x.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,vt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,vt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,pe),w.pixelStorei(w.UNPACK_SKIP_ROWS,me),x.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,U,Te,Se,ee,le,be,Ge,vt.data):x.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,U,Te,Se,vt.width,vt.height,be,vt.data):w.texSubImage2D(w.TEXTURE_2D,U,Te,Se,ee,le,be,Ge,vt),w.pixelStorei(w.UNPACK_ROW_LENGTH,rt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,$e),w.pixelStorei(w.UNPACK_SKIP_PIXELS,st),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ze),w.pixelStorei(w.UNPACK_SKIP_IMAGES,_e),U===0&&L.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(x,L,N=null,F=null,U=0){x.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,F=arguments[1]||null,x=arguments[2],L=arguments[3],U=arguments[4]||0);let ee,le,pe,me,Te,Se,be,Ge,rt;const $e=x.isCompressedTexture?x.mipmaps[U]:x.image;N!==null?(ee=N.max.x-N.min.x,le=N.max.y-N.min.y,pe=N.max.z-N.min.z,me=N.min.x,Te=N.min.y,Se=N.min.z):(ee=$e.width,le=$e.height,pe=$e.depth,me=0,Te=0,Se=0),F!==null?(be=F.x,Ge=F.y,rt=F.z):(be=0,Ge=0,rt=0);const st=Re.convert(L.format),Ze=Re.convert(L.type);let _e;if(L.isData3DTexture)Pe.setTexture3D(L,0),_e=w.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)Pe.setTexture2DArray(L,0),_e=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,L.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,L.unpackAlignment);const vt=w.getParameter(w.UNPACK_ROW_LENGTH),yi=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ut=w.getParameter(w.UNPACK_SKIP_PIXELS),Gi=w.getParameter(w.UNPACK_SKIP_ROWS),Et=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,$e.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,$e.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,me),w.pixelStorei(w.UNPACK_SKIP_ROWS,Te),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Se),x.isDataTexture||x.isData3DTexture?w.texSubImage3D(_e,U,be,Ge,rt,ee,le,pe,st,Ze,$e.data):L.isCompressedArrayTexture?w.compressedTexSubImage3D(_e,U,be,Ge,rt,ee,le,pe,st,$e.data):w.texSubImage3D(_e,U,be,Ge,rt,ee,le,pe,st,Ze,$e),w.pixelStorei(w.UNPACK_ROW_LENGTH,vt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,yi),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ut),w.pixelStorei(w.UNPACK_SKIP_ROWS,Gi),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Et),U===0&&L.generateMipmaps&&w.generateMipmap(_e),ve.unbindTexture()},this.initRenderTarget=function(x){Ae.get(x).__webglFramebuffer===void 0&&Pe.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Pe.setTextureCube(x,0):x.isData3DTexture?Pe.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Pe.setTexture2DArray(x,0):Pe.setTexture2D(x,0),ve.unbindTexture()},this.resetState=function(){z=0,A=0,R=null,ve.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ua?"display-p3":"srgb",t.unpackColorSpace=ke.workingColorSpace===nn?"display-p3":"srgb"}}class sm extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class om extends Or{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ws,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class al{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lm extends Ri{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jn}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jn);const sl={type:"change"},ls={type:"start"},ol={type:"end"},Nn=new ro,ll=new vi,cm=Math.cos(70*jc.DEG2RAD),ct=new D,St=2*Math.PI,je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},cs=1e-6;class hm extends lm{constructor(e,t=null){super(e,t),this.state=je.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vi.ROTATE,MIDDLE:Vi.DOLLY,RIGHT:Vi.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Pi,this._lastTargetPosition=new D,this._quat=new Pi().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new al,this._sphericalDelta=new al,this._scale=1,this._panOffset=new D,this._rotateStart=new Ue,this._rotateEnd=new Ue,this._rotateDelta=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._panDelta=new Ue,this._dollyStart=new Ue,this._dollyEnd=new Ue,this._dollyDelta=new Ue,this._dollyDirection=new D,this._mouse=new Ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=dm.bind(this),this._onPointerDown=um.bind(this),this._onPointerUp=pm.bind(this),this._onContextMenu=Mm.bind(this),this._onMouseWheel=gm.bind(this),this._onKeyDown=_m.bind(this),this._onTouchStart=vm.bind(this),this._onTouchMove=xm.bind(this),this._onMouseDown=fm.bind(this),this._onMouseMove=mm.bind(this),this._interceptControlDown=bm.bind(this),this._interceptControlUp=Sm.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sl),this.update(),this.state=je.NONE}update(e=null){const t=this.object.position;ct.copy(t).sub(this.target),ct.applyQuaternion(this._quat),this._spherical.setFromVector3(ct),this.autoRotate&&this.state===je.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(r)&&isFinite(n)&&(r<-Math.PI?r+=St:r>Math.PI&&(r-=St),n<-Math.PI?n+=St:n>Math.PI&&(n-=St),r<=n?this._spherical.theta=Math.max(r,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+n)/2?Math.max(r,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=s!=this._spherical.radius}if(ct.setFromSpherical(this._spherical),ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=ct.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Nn.origin.copy(this.object.position),Nn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Nn.direction))<cm?this.object.lookAt(this.target):(ll.setFromNormalAndCoplanarPoint(this.object.up,this.target),Nn.intersectPlane(ll,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>cs||8*(1-this._lastQuaternion.dot(this.object.quaternion))>cs||this._lastTargetPosition.distanceToSquared(this.target)>cs?(this.dispatchEvent(sl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?St/60*this.autoRotateSpeed*e:St/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ct.setFromMatrixColumn(t,0),ct.multiplyScalar(-e),this._panOffset.add(ct)}_panUp(e,t){this.screenSpacePanning===!0?ct.setFromMatrixColumn(t,1):(ct.setFromMatrixColumn(t,0),ct.crossVectors(this.object.up,ct)),ct.multiplyScalar(e),this._panOffset.add(ct)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;ct.copy(n).sub(this.target);let a=ct.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/r.clientHeight,this.object.matrix),this._panUp(2*t*a/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),n=e-r.left,a=t-r.top,s=r.width,o=r.height;this._mouse.x=n/s*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(St*this._rotateDelta.x/t.clientHeight),this._rotateUp(St*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(St*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-St*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(St*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-St*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(r,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(r,n)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,n=e.pageY-t.y,a=Math.sqrt(r*r+n*n);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),n=.5*(e.pageX+r.x),a=.5*(e.pageY+r.y);this._rotateEnd.set(n,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(St*this._rotateDelta.x/t.clientHeight),this._rotateUp(St*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(r,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,n=e.pageY-t.y,a=Math.sqrt(r*r+n*n);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function um(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function dm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function pm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ol),this.state=je.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function fm(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Vi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=je.DOLLY;break;case Vi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=je.ROTATE}break;case Vi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=je.PAN}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(ls)}function mm(i){switch(this.state){case je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function gm(i){this.enabled===!1||this.enableZoom===!1||this.state!==je.NONE||(i.preventDefault(),this.dispatchEvent(ls),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ol))}function _m(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function vm(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=je.TOUCH_ROTATE;break;case Wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=je.TOUCH_PAN;break;default:this.state=je.NONE}break;case 2:switch(this.touches.TWO){case Wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=je.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=je.TOUCH_DOLLY_ROTATE;break;default:this.state=je.NONE}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(ls)}function xm(i){switch(this._trackPointer(i),this.state){case je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=je.NONE}}function Mm(i){this.enabled!==!1&&i.preventDefault()}function bm(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Sm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var zr=function(){var i=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),r(++i%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function r(h){for(var d=0;d<e.children.length;d++)e.children[d].style.display=d===h?"block":"none";i=h}var n=(performance||Date).now(),a=n,s=0,o=t(new zr.Panel("FPS","#0ff","#002")),l=t(new zr.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new zr.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:e,addPanel:t,showPanel:r,begin:function(){n=(performance||Date).now()},end:function(){s++;var h=(performance||Date).now();if(l.update(h-n,200),h>=a+1e3&&(o.update(s*1e3/(h-a),100),a=h,s=0,c)){var d=performance.memory;c.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return h},update:function(){n=this.end()},domElement:e,setMode:r}};zr.Panel=function(i,e,t){var r=1/0,n=0,a=Math.round,s=a(window.devicePixelRatio||1),o=80*s,l=48*s,c=3*s,h=2*s,d=3*s,f=15*s,m=74*s,v=30*s,_=document.createElement("canvas");_.width=o,_.height=l,_.style.cssText="width:80px;height:48px";var u=_.getContext("2d");return u.font="bold "+9*s+"px Helvetica,Arial,sans-serif",u.textBaseline="top",u.fillStyle=t,u.fillRect(0,0,o,l),u.fillStyle=e,u.fillText(i,c,h),u.fillRect(d,f,m,v),u.fillStyle=t,u.globalAlpha=.9,u.fillRect(d,f,m,v),{dom:_,update:function(p,E){r=Math.min(r,p),n=Math.max(n,p),u.fillStyle=t,u.globalAlpha=1,u.fillRect(0,0,o,f),u.fillStyle=e,u.fillText(a(p)+" "+i+" ("+a(r)+"-"+a(n)+")",c,h),u.drawImage(_,d+s,f,m-s,v,d,f,m-s,v),u.fillRect(d+m-s,f,s,v),u.fillStyle=t,u.globalAlpha=.9,u.fillRect(d+m-s,f,s,a((1-p/E)*v))}}};function ym(i){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=i,document.head.appendChild(e),i}}function Mr(i,e){var t=i.__state.conversionName.toString(),r=Math.round(i.r),n=Math.round(i.g),a=Math.round(i.b),s=i.a,o=Math.round(i.h),l=i.s.toFixed(1),c=i.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var h=i.hex.toString(16);h.length<6;)h="0"+h;return"#"+h}else{if(t==="CSS_RGB")return"rgb("+r+","+n+","+a+")";if(t==="CSS_RGBA")return"rgba("+r+","+n+","+a+","+s+")";if(t==="HEX")return"0x"+i.hex.toString(16);if(t==="RGB_ARRAY")return"["+r+","+n+","+a+"]";if(t==="RGBA_ARRAY")return"["+r+","+n+","+a+","+s+"]";if(t==="RGB_OBJ")return"{r:"+r+",g:"+n+",b:"+a+"}";if(t==="RGBA_OBJ")return"{r:"+r+",g:"+n+",b:"+a+",a:"+s+"}";if(t==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+s+"}"}return"unknown format"}var cl=Array.prototype.forEach,kr=Array.prototype.slice,X={BREAK:{},extend:function(i){return this.each(kr.call(arguments,1),function(e){var t=this.isObject(e)?Object.keys(e):[];t.forEach((function(r){this.isUndefined(e[r])||(i[r]=e[r])}).bind(this))},this),i},defaults:function(i){return this.each(kr.call(arguments,1),function(e){var t=this.isObject(e)?Object.keys(e):[];t.forEach((function(r){this.isUndefined(i[r])&&(i[r]=e[r])}).bind(this))},this),i},compose:function(){var i=kr.call(arguments);return function(){for(var e=kr.call(arguments),t=i.length-1;t>=0;t--)e=[i[t].apply(this,e)];return e[0]}},each:function(i,e,t){if(i){if(cl&&i.forEach&&i.forEach===cl)i.forEach(e,t);else if(i.length===i.length+0){var r=void 0,n=void 0;for(r=0,n=i.length;r<n;r++)if(r in i&&e.call(t,i[r],r)===this.BREAK)return}else for(var a in i)if(e.call(t,i[a],a)===this.BREAK)return}},defer:function(i){setTimeout(i,0)},debounce:function(i,e,t){var r=void 0;return function(){var n=this,a=arguments;function s(){r=null,t||i.apply(n,a)}var o=t||!r;clearTimeout(r),r=setTimeout(s,e),o&&i.apply(n,a)}},toArray:function(i){return i.toArray?i.toArray():kr.call(i)},isUndefined:function(i){return i===void 0},isNull:function(i){return i===null},isNaN:function(i){function e(t){return i.apply(this,arguments)}return e.toString=function(){return i.toString()},e}(function(i){return isNaN(i)}),isArray:Array.isArray||function(i){return i.constructor===Array},isObject:function(i){return i===Object(i)},isNumber:function(i){return i===i+0},isString:function(i){return i===i+""},isBoolean:function(i){return i===!1||i===!0},isFunction:function(i){return i instanceof Function}},Em=[{litmus:X.isString,conversions:{THREE_CHAR_HEX:{read:function(i){var e=i.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString()+e[1].toString()+e[2].toString()+e[2].toString()+e[3].toString()+e[3].toString(),0)}},write:Mr},SIX_CHAR_HEX:{read:function(i){var e=i.match(/^#([A-F0-9]{6})$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString(),0)}},write:Mr},CSS_RGB:{read:function(i){var e=i.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3])}},write:Mr},CSS_RGBA:{read:function(i){var e=i.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3]),a:parseFloat(e[4])}},write:Mr}}},{litmus:X.isNumber,conversions:{HEX:{read:function(i){return{space:"HEX",hex:i,conversionName:"HEX"}},write:function(i){return i.hex}}}},{litmus:X.isArray,conversions:{RGB_ARRAY:{read:function(i){return i.length!==3?!1:{space:"RGB",r:i[0],g:i[1],b:i[2]}},write:function(i){return[i.r,i.g,i.b]}},RGBA_ARRAY:{read:function(i){return i.length!==4?!1:{space:"RGB",r:i[0],g:i[1],b:i[2],a:i[3]}},write:function(i){return[i.r,i.g,i.b,i.a]}}}},{litmus:X.isObject,conversions:{RGBA_OBJ:{read:function(i){return X.isNumber(i.r)&&X.isNumber(i.g)&&X.isNumber(i.b)&&X.isNumber(i.a)?{space:"RGB",r:i.r,g:i.g,b:i.b,a:i.a}:!1},write:function(i){return{r:i.r,g:i.g,b:i.b,a:i.a}}},RGB_OBJ:{read:function(i){return X.isNumber(i.r)&&X.isNumber(i.g)&&X.isNumber(i.b)?{space:"RGB",r:i.r,g:i.g,b:i.b}:!1},write:function(i){return{r:i.r,g:i.g,b:i.b}}},HSVA_OBJ:{read:function(i){return X.isNumber(i.h)&&X.isNumber(i.s)&&X.isNumber(i.v)&&X.isNumber(i.a)?{space:"HSV",h:i.h,s:i.s,v:i.v,a:i.a}:!1},write:function(i){return{h:i.h,s:i.s,v:i.v,a:i.a}}},HSV_OBJ:{read:function(i){return X.isNumber(i.h)&&X.isNumber(i.s)&&X.isNumber(i.v)?{space:"HSV",h:i.h,s:i.s,v:i.v}:!1},write:function(i){return{h:i.h,s:i.s,v:i.v}}}}}],Hr=void 0,In=void 0,hs=function(){In=!1;var i=arguments.length>1?X.toArray(arguments):arguments[0];return X.each(Em,function(e){if(e.litmus(i))return X.each(e.conversions,function(t,r){if(Hr=t.read(i),In===!1&&Hr!==!1)return In=Hr,Hr.conversionName=r,Hr.conversion=t,X.BREAK}),X.BREAK}),In},hl=void 0,On={hsv_to_rgb:function(i,e,t){var r=Math.floor(i/60)%6,n=i/60-Math.floor(i/60),a=t*(1-e),s=t*(1-n*e),o=t*(1-(1-n)*e),l=[[t,o,a],[s,t,a],[a,t,o],[a,s,t],[o,a,t],[t,a,s]][r];return{r:l[0]*255,g:l[1]*255,b:l[2]*255}},rgb_to_hsv:function(i,e,t){var r=Math.min(i,e,t),n=Math.max(i,e,t),a=n-r,s=void 0,o=void 0;if(n!==0)o=a/n;else return{h:NaN,s:0,v:0};return i===n?s=(e-t)/a:e===n?s=2+(t-i)/a:s=4+(i-e)/a,s/=6,s<0&&(s+=1),{h:s*360,s:o,v:n/255}},rgb_to_hex:function(i,e,t){var r=this.hex_with_component(0,2,i);return r=this.hex_with_component(r,1,e),r=this.hex_with_component(r,0,t),r},component_from_hex:function(i,e){return i>>e*8&255},hex_with_component:function(i,e,t){return t<<(hl=e*8)|i&~(255<<hl)}},Tm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Bt=function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")},zt=function(){function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}}(),xi=function i(e,t,r){e===null&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(n===void 0){var a=Object.getPrototypeOf(e);return a===null?void 0:i(a,t,r)}else{if("value"in n)return n.value;var s=n.get;return s===void 0?void 0:s.call(r)}},Mi=function(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(i,e):i.__proto__=e)},bi=function(i,e){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:i},dt=function(){function i(){if(Bt(this,i),this.__state=hs.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return zt(i,[{key:"toString",value:function(){return Mr(this)}},{key:"toHexString",value:function(){return Mr(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),i}();function us(i,e,t){Object.defineProperty(i,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(dt.recalculateRGB(this,e,t),this.__state[e])},set:function(r){this.__state.space!=="RGB"&&(dt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=r}})}function ds(i,e){Object.defineProperty(i,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(dt.recalculateHSV(this),this.__state[e])},set:function(t){this.__state.space!=="HSV"&&(dt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=t}})}dt.recalculateRGB=function(i,e,t){if(i.__state.space==="HEX")i.__state[e]=On.component_from_hex(i.__state.hex,t);else if(i.__state.space==="HSV")X.extend(i.__state,On.hsv_to_rgb(i.__state.h,i.__state.s,i.__state.v));else throw new Error("Corrupted color state")},dt.recalculateHSV=function(i){var e=On.rgb_to_hsv(i.r,i.g,i.b);X.extend(i.__state,{s:e.s,v:e.v}),X.isNaN(e.h)?X.isUndefined(i.__state.h)&&(i.__state.h=0):i.__state.h=e.h},dt.COMPONENTS=["r","g","b","h","s","v","hex","a"],us(dt.prototype,"r",2),us(dt.prototype,"g",1),us(dt.prototype,"b",0),ds(dt.prototype,"h"),ds(dt.prototype,"s"),ds(dt.prototype,"v"),Object.defineProperty(dt.prototype,"a",{get:function(){return this.__state.a},set:function(i){this.__state.a=i}}),Object.defineProperty(dt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=On.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(i){this.__state.space="HEX",this.__state.hex=i}});var ki=function(){function i(e,t){Bt(this,i),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return zt(i,[{key:"onChange",value:function(e){return this.__onChange=e,this}},{key:"onFinishChange",value:function(e){return this.__onFinishChange=e,this}},{key:"setValue",value:function(e){return this.object[this.property]=e,this.__onChange&&this.__onChange.call(this,e),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),i}(),wm={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},ul={};X.each(wm,function(i,e){X.each(i,function(t){ul[t]=e})});var Am=/(\d+(\.\d+)?)px/;function Xt(i){if(i==="0"||X.isUndefined(i))return 0;var e=i.match(Am);return X.isNull(e)?0:parseFloat(e[1])}var I={makeSelectable:function(i,e){i===void 0||i.style===void 0||(i.onselectstart=e?function(){return!1}:function(){},i.style.MozUserSelect=e?"auto":"none",i.style.KhtmlUserSelect=e?"auto":"none",i.unselectable=e?"on":"off")},makeFullscreen:function(i,e,t){var r=t,n=e;X.isUndefined(n)&&(n=!0),X.isUndefined(r)&&(r=!0),i.style.position="absolute",n&&(i.style.left=0,i.style.right=0),r&&(i.style.top=0,i.style.bottom=0)},fakeEvent:function(i,e,t,r){var n=t||{},a=ul[e];if(!a)throw new Error("Event type "+e+" not supported.");var s=document.createEvent(a);switch(a){case"MouseEvents":{var o=n.x||n.clientX||0,l=n.y||n.clientY||0;s.initMouseEvent(e,n.bubbles||!1,n.cancelable||!0,window,n.clickCount||1,0,0,o,l,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var c=s.initKeyboardEvent||s.initKeyEvent;X.defaults(n,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),c(e,n.bubbles||!1,n.cancelable,window,n.ctrlKey,n.altKey,n.shiftKey,n.metaKey,n.keyCode,n.charCode);break}default:{s.initEvent(e,n.bubbles||!1,n.cancelable||!0);break}}X.defaults(s,r),i.dispatchEvent(s)},bind:function(i,e,t,r){var n=r||!1;return i.addEventListener?i.addEventListener(e,t,n):i.attachEvent&&i.attachEvent("on"+e,t),I},unbind:function(i,e,t,r){var n=r||!1;return i.removeEventListener?i.removeEventListener(e,t,n):i.detachEvent&&i.detachEvent("on"+e,t),I},addClass:function(i,e){if(i.className===void 0)i.className=e;else if(i.className!==e){var t=i.className.split(/ +/);t.indexOf(e)===-1&&(t.push(e),i.className=t.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return I},removeClass:function(i,e){if(e)if(i.className===e)i.removeAttribute("class");else{var t=i.className.split(/ +/),r=t.indexOf(e);r!==-1&&(t.splice(r,1),i.className=t.join(" "))}else i.className=void 0;return I},hasClass:function(i,e){return new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)").test(i.className)||!1},getWidth:function(i){var e=getComputedStyle(i);return Xt(e["border-left-width"])+Xt(e["border-right-width"])+Xt(e["padding-left"])+Xt(e["padding-right"])+Xt(e.width)},getHeight:function(i){var e=getComputedStyle(i);return Xt(e["border-top-width"])+Xt(e["border-bottom-width"])+Xt(e["padding-top"])+Xt(e["padding-bottom"])+Xt(e.height)},getOffset:function(i){var e=i,t={left:0,top:0};if(e.offsetParent)do t.left+=e.offsetLeft,t.top+=e.offsetTop,e=e.offsetParent;while(e);return t},isActive:function(i){return i===document.activeElement&&(i.type||i.href)}},dl=function(i){Mi(e,i);function e(t,r){Bt(this,e);var n=bi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,r)),a=n;n.__prev=n.getValue(),n.__checkbox=document.createElement("input"),n.__checkbox.setAttribute("type","checkbox");function s(){a.setValue(!a.__prev)}return I.bind(n.__checkbox,"change",s,!1),n.domElement.appendChild(n.__checkbox),n.updateDisplay(),n}return zt(e,[{key:"setValue",value:function(t){var r=xi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,t);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),xi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(ki),Rm=function(i){Mi(e,i);function e(t,r,n){Bt(this,e);var a=bi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,r)),s=n,o=a;if(a.__select=document.createElement("select"),X.isArray(s)){var l={};X.each(s,function(c){l[c]=c}),s=l}return X.each(s,function(c,h){var d=document.createElement("option");d.innerHTML=h,d.setAttribute("value",c),o.__select.appendChild(d)}),a.updateDisplay(),I.bind(a.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),a.domElement.appendChild(a.__select),a}return zt(e,[{key:"setValue",value:function(t){var r=xi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,t);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return I.isActive(this.__select)?this:(this.__select.value=this.getValue(),xi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(ki),Cm=function(i){Mi(e,i);function e(t,r){Bt(this,e);var n=bi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,r)),a=n;function s(){a.setValue(a.__input.value)}function o(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}return n.__input=document.createElement("input"),n.__input.setAttribute("type","text"),I.bind(n.__input,"keyup",s),I.bind(n.__input,"change",s),I.bind(n.__input,"blur",o),I.bind(n.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),n.updateDisplay(),n.domElement.appendChild(n.__input),n}return zt(e,[{key:"updateDisplay",value:function(){return I.isActive(this.__input)||(this.__input.value=this.getValue()),xi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(ki);function pl(i){var e=i.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var fl=function(i){Mi(e,i);function e(t,r,n){Bt(this,e);var a=bi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,r)),s=n||{};return a.__min=s.min,a.__max=s.max,a.__step=s.step,X.isUndefined(a.__step)?a.initialValue===0?a.__impliedStep=1:a.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(a.initialValue))/Math.LN10))/10:a.__impliedStep=a.__step,a.__precision=pl(a.__impliedStep),a}return zt(e,[{key:"setValue",value:function(t){var r=t;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),xi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(t){return this.__min=t,this}},{key:"max",value:function(t){return this.__max=t,this}},{key:"step",value:function(t){return this.__step=t,this.__impliedStep=t,this.__precision=pl(t),this}}]),e}(ki);function Pm(i,e){var t=Math.pow(10,e);return Math.round(i*t)/t}var Fn=function(i){Mi(e,i);function e(t,r,n){Bt(this,e);var a=bi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,r,n));a.__truncationSuspended=!1;var s=a,o=void 0;function l(){var v=parseFloat(s.__input.value);X.isNaN(v)||s.setValue(v)}function c(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}function h(){c()}function d(v){var _=o-v.clientY;s.setValue(s.getValue()+_*s.__impliedStep),o=v.clientY}function f(){I.unbind(window,"mousemove",d),I.unbind(window,"mouseup",f),c()}function m(v){I.bind(window,"mousemove",d),I.bind(window,"mouseup",f),o=v.clientY}return a.__input=document.createElement("input"),a.__input.setAttribute("type","text"),I.bind(a.__input,"change",l),I.bind(a.__input,"blur",h),I.bind(a.__input,"mousedown",m),I.bind(a.__input,"keydown",function(v){v.keyCode===13&&(s.__truncationSuspended=!0,this.blur(),s.__truncationSuspended=!1,c())}),a.updateDisplay(),a.domElement.appendChild(a.__input),a}return zt(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():Pm(this.getValue(),this.__precision),xi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(fl);function ml(i,e,t,r,n){return r+(n-r)*((i-e)/(t-e))}var ps=function(i){Mi(e,i);function e(t,r,n,a,s){Bt(this,e);var o=bi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,r,{min:n,max:a,step:s})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),I.bind(o.__background,"mousedown",c),I.bind(o.__background,"touchstart",f),I.addClass(o.__background,"slider"),I.addClass(o.__foreground,"slider-fg");function c(_){document.activeElement.blur(),I.bind(window,"mousemove",h),I.bind(window,"mouseup",d),h(_)}function h(_){_.preventDefault();var u=l.__background.getBoundingClientRect();return l.setValue(ml(_.clientX,u.left,u.right,l.__min,l.__max)),!1}function d(){I.unbind(window,"mousemove",h),I.unbind(window,"mouseup",d),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function f(_){_.touches.length===1&&(I.bind(window,"touchmove",m),I.bind(window,"touchend",v),m(_))}function m(_){var u=_.touches[0].clientX,p=l.__background.getBoundingClientRect();l.setValue(ml(u,p.left,p.right,l.__min,l.__max))}function v(){I.unbind(window,"touchmove",m),I.unbind(window,"touchend",v),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return zt(e,[{key:"updateDisplay",value:function(){var t=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=t*100+"%",xi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(fl),gl=function(i){Mi(e,i);function e(t,r,n){Bt(this,e);var a=bi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,r)),s=a;return a.__button=document.createElement("div"),a.__button.innerHTML=n===void 0?"Fire":n,I.bind(a.__button,"click",function(o){return o.preventDefault(),s.fire(),!1}),I.addClass(a.__button,"button"),a.domElement.appendChild(a.__button),a}return zt(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(ki),fs=function(i){Mi(e,i);function e(t,r){Bt(this,e);var n=bi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,r));n.__color=new dt(n.getValue()),n.__temp=new dt(0);var a=n;n.domElement=document.createElement("div"),I.makeSelectable(n.domElement,!1),n.__selector=document.createElement("div"),n.__selector.className="selector",n.__saturation_field=document.createElement("div"),n.__saturation_field.className="saturation-field",n.__field_knob=document.createElement("div"),n.__field_knob.className="field-knob",n.__field_knob_border="2px solid ",n.__hue_knob=document.createElement("div"),n.__hue_knob.className="hue-knob",n.__hue_field=document.createElement("div"),n.__hue_field.className="hue-field",n.__input=document.createElement("input"),n.__input.type="text",n.__input_textShadow="0 1px 1px ",I.bind(n.__input,"keydown",function(_){_.keyCode===13&&d.call(this)}),I.bind(n.__input,"blur",d),I.bind(n.__selector,"mousedown",function(){I.addClass(this,"drag").bind(window,"mouseup",function(){I.removeClass(a.__selector,"drag")})}),I.bind(n.__selector,"touchstart",function(){I.addClass(this,"drag").bind(window,"touchend",function(){I.removeClass(a.__selector,"drag")})});var s=document.createElement("div");X.extend(n.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),X.extend(n.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:n.__field_knob_border+(n.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),X.extend(n.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),X.extend(n.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),X.extend(s.style,{width:"100%",height:"100%",background:"none"}),_l(s,"top","rgba(0,0,0,0)","#000"),X.extend(n.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),Um(n.__hue_field),X.extend(n.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:n.__input_textShadow+"rgba(0,0,0,0.7)"}),I.bind(n.__saturation_field,"mousedown",o),I.bind(n.__saturation_field,"touchstart",o),I.bind(n.__field_knob,"mousedown",o),I.bind(n.__field_knob,"touchstart",o),I.bind(n.__hue_field,"mousedown",l),I.bind(n.__hue_field,"touchstart",l);function o(_){m(_),I.bind(window,"mousemove",m),I.bind(window,"touchmove",m),I.bind(window,"mouseup",c),I.bind(window,"touchend",c)}function l(_){v(_),I.bind(window,"mousemove",v),I.bind(window,"touchmove",v),I.bind(window,"mouseup",h),I.bind(window,"touchend",h)}function c(){I.unbind(window,"mousemove",m),I.unbind(window,"touchmove",m),I.unbind(window,"mouseup",c),I.unbind(window,"touchend",c),f()}function h(){I.unbind(window,"mousemove",v),I.unbind(window,"touchmove",v),I.unbind(window,"mouseup",h),I.unbind(window,"touchend",h),f()}function d(){var _=hs(this.value);_!==!1?(a.__color.__state=_,a.setValue(a.__color.toOriginal())):this.value=a.__color.toString()}function f(){a.__onFinishChange&&a.__onFinishChange.call(a,a.__color.toOriginal())}n.__saturation_field.appendChild(s),n.__selector.appendChild(n.__field_knob),n.__selector.appendChild(n.__saturation_field),n.__selector.appendChild(n.__hue_field),n.__hue_field.appendChild(n.__hue_knob),n.domElement.appendChild(n.__input),n.domElement.appendChild(n.__selector),n.updateDisplay();function m(_){_.type.indexOf("touch")===-1&&_.preventDefault();var u=a.__saturation_field.getBoundingClientRect(),p=_.touches&&_.touches[0]||_,E=p.clientX,S=p.clientY,T=(E-u.left)/(u.right-u.left),z=1-(S-u.top)/(u.bottom-u.top);return z>1?z=1:z<0&&(z=0),T>1?T=1:T<0&&(T=0),a.__color.v=z,a.__color.s=T,a.setValue(a.__color.toOriginal()),!1}function v(_){_.type.indexOf("touch")===-1&&_.preventDefault();var u=a.__hue_field.getBoundingClientRect(),p=_.touches&&_.touches[0]||_,E=p.clientY,S=1-(E-u.top)/(u.bottom-u.top);return S>1?S=1:S<0&&(S=0),a.__color.h=S*360,a.setValue(a.__color.toOriginal()),!1}return n}return zt(e,[{key:"updateDisplay",value:function(){var t=hs(this.getValue());if(t!==!1){var r=!1;X.each(dt.COMPONENTS,function(s){if(!X.isUndefined(t[s])&&!X.isUndefined(this.__color.__state[s])&&t[s]!==this.__color.__state[s])return r=!0,{}},this),r&&X.extend(this.__color.__state,t)}X.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var n=this.__color.v<.5||this.__color.s>.5?255:0,a=255-n;X.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+n+","+n+","+n+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,_l(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),X.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+n+","+n+","+n+")",textShadow:this.__input_textShadow+"rgba("+a+","+a+","+a+",.7)"})}}]),e}(ki),Lm=["-moz-","-o-","-webkit-","-ms-",""];function _l(i,e,t,r){i.style.background="",X.each(Lm,function(n){i.style.cssText+="background: "+n+"linear-gradient("+e+", "+t+" 0%, "+r+" 100%); "})}function Um(i){i.style.background="",i.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",i.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var Dm={load:function(i,e){var t=e||document,r=t.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=i,t.getElementsByTagName("head")[0].appendChild(r)},inject:function(i,e){var t=e||document,r=document.createElement("style");r.type="text/css",r.innerHTML=i;var n=t.getElementsByTagName("head")[0];try{n.appendChild(r)}catch{}}},Nm=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,Im=function(i,e){var t=i[e];return X.isArray(arguments[2])||X.isObject(arguments[2])?new Rm(i,e,arguments[2]):X.isNumber(t)?X.isNumber(arguments[2])&&X.isNumber(arguments[3])?X.isNumber(arguments[4])?new ps(i,e,arguments[2],arguments[3],arguments[4]):new ps(i,e,arguments[2],arguments[3]):X.isNumber(arguments[4])?new Fn(i,e,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Fn(i,e,{min:arguments[2],max:arguments[3]}):X.isString(t)?new Cm(i,e):X.isFunction(t)?new gl(i,e,""):X.isBoolean(t)?new dl(i,e):null};function Om(i){setTimeout(i,1e3/60)}var Fm=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||Om,Bm=function(){function i(){Bt(this,i),this.backgroundElement=document.createElement("div"),X.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),I.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),X.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;I.bind(this.backgroundElement,"click",function(){e.hide()})}return zt(i,[{key:"show",value:function(){var e=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),X.defer(function(){e.backgroundElement.style.opacity=1,e.domElement.style.opacity=1,e.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var e=this,t=function r(){e.domElement.style.display="none",e.backgroundElement.style.display="none",I.unbind(e.domElement,"webkitTransitionEnd",r),I.unbind(e.domElement,"transitionend",r),I.unbind(e.domElement,"oTransitionEnd",r)};I.bind(this.domElement,"webkitTransitionEnd",t),I.bind(this.domElement,"transitionend",t),I.bind(this.domElement,"oTransitionEnd",t),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-I.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-I.getHeight(this.domElement)/2+"px"}}]),i}(),zm=ym(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);Dm.inject(zm);var vl="dg",xl=72,Ml=20,Gr="Default",Vr=function(){try{return!!window.localStorage}catch{return!1}}(),Wr=void 0,bl=!0,br=void 0,ms=!1,Sl=[],qe=function i(e){var t=this,r=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),I.addClass(this.domElement,vl),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],r=X.defaults(r,{closeOnTop:!1,autoPlace:!0,width:i.DEFAULT_WIDTH}),r=X.defaults(r,{resizable:r.autoPlace,hideable:r.autoPlace}),X.isUndefined(r.load)?r.load={preset:Gr}:r.preset&&(r.load.preset=r.preset),X.isUndefined(r.parent)&&r.hideable&&Sl.push(this),r.resizable=X.isUndefined(r.parent)&&r.resizable,r.autoPlace&&X.isUndefined(r.scrollable)&&(r.scrollable=!0);var n=Vr&&localStorage.getItem(Sr(this,"isLocal"))==="true",a=void 0,s=void 0;if(Object.defineProperties(this,{parent:{get:function(){return r.parent}},scrollable:{get:function(){return r.scrollable}},autoPlace:{get:function(){return r.autoPlace}},closeOnTop:{get:function(){return r.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:r.load.preset},set:function(d){t.parent?t.getRoot().preset=d:r.load.preset=d,Vm(this),t.revert()}},width:{get:function(){return r.width},set:function(d){r.width=d,xs(t,d)}},name:{get:function(){return r.name},set:function(d){r.name=d,s&&(s.innerHTML=r.name)}},closed:{get:function(){return r.closed},set:function(d){r.closed=d,r.closed?I.addClass(t.__ul,i.CLASS_CLOSED):I.removeClass(t.__ul,i.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=d?i.TEXT_OPEN:i.TEXT_CLOSED)}},load:{get:function(){return r.load}},useLocalStorage:{get:function(){return n},set:function(d){Vr&&(n=d,d?I.bind(window,"unload",a):I.unbind(window,"unload",a),localStorage.setItem(Sr(t,"isLocal"),d))}}}),X.isUndefined(r.parent)){if(this.closed=r.closed||!1,I.addClass(this.domElement,i.CLASS_MAIN),I.makeSelectable(this.domElement,!1),Vr&&n){t.useLocalStorage=!0;var o=localStorage.getItem(Sr(this,"gui"));o&&(r.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=i.TEXT_CLOSED,I.addClass(this.__closeButton,i.CLASS_CLOSE_BUTTON),r.closeOnTop?(I.addClass(this.__closeButton,i.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(I.addClass(this.__closeButton,i.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),I.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{r.closed===void 0&&(r.closed=!0);var l=document.createTextNode(r.name);I.addClass(l,"controller-name"),s=gs(t,l);var c=function(d){return d.preventDefault(),t.closed=!t.closed,!1};I.addClass(this.__ul,i.CLASS_CLOSED),I.addClass(s,"title"),I.bind(s,"click",c),r.closed||(this.closed=!1)}r.autoPlace&&(X.isUndefined(r.parent)&&(bl&&(br=document.createElement("div"),I.addClass(br,vl),I.addClass(br,i.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(br),bl=!1),br.appendChild(this.domElement),I.addClass(this.domElement,i.CLASS_AUTO_PLACE)),this.parent||xs(t,r.width)),this.__resizeHandler=function(){t.onResizeDebounced()},I.bind(window,"resize",this.__resizeHandler),I.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),I.bind(this.__ul,"transitionend",this.__resizeHandler),I.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),r.resizable&&Gm(this),a=function(){Vr&&localStorage.getItem(Sr(t,"isLocal"))==="true"&&localStorage.setItem(Sr(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=a;function h(){var d=t.getRoot();d.width+=1,X.defer(function(){d.width-=1})}r.parent||h()};qe.toggleHide=function(){ms=!ms,X.each(Sl,function(i){i.domElement.style.display=ms?"none":""})},qe.CLASS_AUTO_PLACE="a",qe.CLASS_AUTO_PLACE_CONTAINER="ac",qe.CLASS_MAIN="main",qe.CLASS_CONTROLLER_ROW="cr",qe.CLASS_TOO_TALL="taller-than-window",qe.CLASS_CLOSED="closed",qe.CLASS_CLOSE_BUTTON="close-button",qe.CLASS_CLOSE_TOP="close-top",qe.CLASS_CLOSE_BOTTOM="close-bottom",qe.CLASS_DRAG="drag",qe.DEFAULT_WIDTH=245,qe.TEXT_CLOSED="Close Controls",qe.TEXT_OPEN="Open Controls",qe._keydownHandler=function(i){document.activeElement.type!=="text"&&(i.which===xl||i.keyCode===xl)&&qe.toggleHide()},I.bind(window,"keydown",qe._keydownHandler,!1),X.extend(qe.prototype,{add:function(i,e){return Xr(this,i,e,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(i,e){return Xr(this,i,e,{color:!0})},remove:function(i){this.__ul.removeChild(i.__li),this.__controllers.splice(this.__controllers.indexOf(i),1);var e=this;X.defer(function(){e.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&br.removeChild(this.domElement);var i=this;X.each(this.__folders,function(e){i.removeFolder(e)}),I.unbind(window,"keydown",qe._keydownHandler,!1),yl(this)},addFolder:function(i){if(this.__folders[i]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+i+'"');var e={name:i,parent:this};e.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[i]&&(e.closed=this.load.folders[i].closed,e.load=this.load.folders[i]);var t=new qe(e);this.__folders[i]=t;var r=gs(this,t.domElement);return I.addClass(r,"folder"),t},removeFolder:function(i){this.__ul.removeChild(i.domElement.parentElement),delete this.__folders[i.name],this.load&&this.load.folders&&this.load.folders[i.name]&&delete this.load.folders[i.name],yl(i);var e=this;X.each(i.__folders,function(t){i.removeFolder(t)}),X.defer(function(){e.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var i=this.getRoot();if(i.scrollable){var e=I.getOffset(i.__ul).top,t=0;X.each(i.__ul.childNodes,function(r){i.autoPlace&&r===i.__save_row||(t+=I.getHeight(r))}),window.innerHeight-e-Ml<t?(I.addClass(i.domElement,qe.CLASS_TOO_TALL),i.__ul.style.height=window.innerHeight-e-Ml+"px"):(I.removeClass(i.domElement,qe.CLASS_TOO_TALL),i.__ul.style.height="auto")}i.__resize_handle&&X.defer(function(){i.__resize_handle.style.height=i.__ul.offsetHeight+"px"}),i.__closeButton&&(i.__closeButton.style.width=i.width+"px")},onResizeDebounced:X.debounce(function(){this.onResize()},50),remember:function(){if(X.isUndefined(Wr)&&(Wr=new Bm,Wr.domElement.innerHTML=Nm),this.parent)throw new Error("You can only call remember on a top level GUI.");var i=this;X.each(Array.prototype.slice.call(arguments),function(e){i.__rememberedObjects.length===0&&Hm(i),i.__rememberedObjects.indexOf(e)===-1&&i.__rememberedObjects.push(e)}),this.autoPlace&&xs(this,this.width)},getRoot:function(){for(var i=this;i.parent;)i=i.parent;return i},getSaveObject:function(){var i=this.load;return i.closed=this.closed,this.__rememberedObjects.length>0&&(i.preset=this.preset,i.remembered||(i.remembered={}),i.remembered[this.preset]=Bn(this)),i.folders={},X.each(this.__folders,function(e,t){i.folders[t]=e.getSaveObject()}),i},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Bn(this),_s(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(i){this.load.remembered||(this.load.remembered={},this.load.remembered[Gr]=Bn(this,!0)),this.load.remembered[i]=Bn(this),this.preset=i,vs(this,i,!0),this.saveToLocalStorageIfPossible()},revert:function(i){X.each(this.__controllers,function(e){this.getRoot().load.remembered?El(i||this.getRoot(),e):e.setValue(e.initialValue),e.__onFinishChange&&e.__onFinishChange.call(e,e.getValue())},this),X.each(this.__folders,function(e){e.revert(e)}),i||_s(this.getRoot(),!1)},listen:function(i){var e=this.__listening.length===0;this.__listening.push(i),e&&wl(this.__listening)},updateDisplay:function(){X.each(this.__controllers,function(i){i.updateDisplay()}),X.each(this.__folders,function(i){i.updateDisplay()})}});function gs(i,e,t){var r=document.createElement("li");return e&&r.appendChild(e),t?i.__ul.insertBefore(r,t):i.__ul.appendChild(r),i.onResize(),r}function yl(i){I.unbind(window,"resize",i.__resizeHandler),i.saveToLocalStorageIfPossible&&I.unbind(window,"unload",i.saveToLocalStorageIfPossible)}function _s(i,e){var t=i.__preset_select[i.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function km(i,e,t){if(t.__li=e,t.__gui=i,X.extend(t,{options:function(a){if(arguments.length>1){var s=t.__li.nextElementSibling;return t.remove(),Xr(i,t.object,t.property,{before:s,factoryArgs:[X.toArray(arguments)]})}if(X.isArray(a)||X.isObject(a)){var o=t.__li.nextElementSibling;return t.remove(),Xr(i,t.object,t.property,{before:o,factoryArgs:[a]})}},name:function(a){return t.__li.firstElementChild.firstElementChild.innerHTML=a,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof ps){var r=new Fn(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});X.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(a){var s=t[a],o=r[a];t[a]=r[a]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(r,l),s.apply(t,l)}}),I.addClass(e,"has-slider"),t.domElement.insertBefore(r.domElement,t.domElement.firstElementChild)}else if(t instanceof Fn){var n=function(a){if(X.isNumber(t.__min)&&X.isNumber(t.__max)){var s=t.__li.firstElementChild.firstElementChild.innerHTML,o=t.__gui.__listening.indexOf(t)>-1;t.remove();var l=Xr(i,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return l.name(s),o&&l.listen(),l}return a};t.min=X.compose(n,t.min),t.max=X.compose(n,t.max)}else t instanceof dl?(I.bind(e,"click",function(){I.fakeEvent(t.__checkbox,"click")}),I.bind(t.__checkbox,"click",function(a){a.stopPropagation()})):t instanceof gl?(I.bind(e,"click",function(){I.fakeEvent(t.__button,"click")}),I.bind(e,"mouseover",function(){I.addClass(t.__button,"hover")}),I.bind(e,"mouseout",function(){I.removeClass(t.__button,"hover")})):t instanceof fs&&(I.addClass(e,"color"),t.updateDisplay=X.compose(function(a){return e.style.borderLeftColor=t.__color.toString(),a},t.updateDisplay),t.updateDisplay());t.setValue=X.compose(function(a){return i.getRoot().__preset_select&&t.isModified()&&_s(i.getRoot(),!0),a},t.setValue)}function El(i,e){var t=i.getRoot(),r=t.__rememberedObjects.indexOf(e.object);if(r!==-1){var n=t.__rememberedObjectIndecesToControllers[r];if(n===void 0&&(n={},t.__rememberedObjectIndecesToControllers[r]=n),n[e.property]=e,t.load&&t.load.remembered){var a=t.load.remembered,s=void 0;if(a[i.preset])s=a[i.preset];else if(a[Gr])s=a[Gr];else return;if(s[r]&&s[r][e.property]!==void 0){var o=s[r][e.property];e.initialValue=o,e.setValue(o)}}}}function Xr(i,e,t,r){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var n=void 0;if(r.color)n=new fs(e,t);else{var a=[e,t].concat(r.factoryArgs);n=Im.apply(i,a)}r.before instanceof ki&&(r.before=r.before.__li),El(i,n),I.addClass(n.domElement,"c");var s=document.createElement("span");I.addClass(s,"property-name"),s.innerHTML=n.property;var o=document.createElement("div");o.appendChild(s),o.appendChild(n.domElement);var l=gs(i,o,r.before);return I.addClass(l,qe.CLASS_CONTROLLER_ROW),n instanceof fs?I.addClass(l,"color"):I.addClass(l,Tm(n.getValue())),km(i,l,n),i.__controllers.push(n),n}function Sr(i,e){return document.location.href+"."+e}function vs(i,e,t){var r=document.createElement("option");r.innerHTML=e,r.value=e,i.__preset_select.appendChild(r),t&&(i.__preset_select.selectedIndex=i.__preset_select.length-1)}function Tl(i,e){e.style.display=i.useLocalStorage?"block":"none"}function Hm(i){var e=i.__save_row=document.createElement("li");I.addClass(i.domElement,"has-save"),i.__ul.insertBefore(e,i.__ul.firstChild),I.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",I.addClass(t,"button gears");var r=document.createElement("span");r.innerHTML="Save",I.addClass(r,"button"),I.addClass(r,"save");var n=document.createElement("span");n.innerHTML="New",I.addClass(n,"button"),I.addClass(n,"save-as");var a=document.createElement("span");a.innerHTML="Revert",I.addClass(a,"button"),I.addClass(a,"revert");var s=i.__preset_select=document.createElement("select");if(i.load&&i.load.remembered?X.each(i.load.remembered,function(d,f){vs(i,f,f===i.preset)}):vs(i,Gr,!1),I.bind(s,"change",function(){for(var d=0;d<i.__preset_select.length;d++)i.__preset_select[d].innerHTML=i.__preset_select[d].value;i.preset=this.value}),e.appendChild(s),e.appendChild(t),e.appendChild(r),e.appendChild(n),e.appendChild(a),Vr){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Sr(i,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Tl(i,o),I.bind(l,"change",function(){i.useLocalStorage=!i.useLocalStorage,Tl(i,o)})}var h=document.getElementById("dg-new-constructor");I.bind(h,"keydown",function(d){d.metaKey&&(d.which===67||d.keyCode===67)&&Wr.hide()}),I.bind(t,"click",function(){h.innerHTML=JSON.stringify(i.getSaveObject(),void 0,2),Wr.show(),h.focus(),h.select()}),I.bind(r,"click",function(){i.save()}),I.bind(n,"click",function(){var d=prompt("Enter a new preset name.");d&&i.saveAs(d)}),I.bind(a,"click",function(){i.revert()})}function Gm(i){var e=void 0;i.__resize_handle=document.createElement("div"),X.extend(i.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(a){return a.preventDefault(),i.width+=e-a.clientX,i.onResize(),e=a.clientX,!1}function r(){I.removeClass(i.__closeButton,qe.CLASS_DRAG),I.unbind(window,"mousemove",t),I.unbind(window,"mouseup",r)}function n(a){return a.preventDefault(),e=a.clientX,I.addClass(i.__closeButton,qe.CLASS_DRAG),I.bind(window,"mousemove",t),I.bind(window,"mouseup",r),!1}I.bind(i.__resize_handle,"mousedown",n),I.bind(i.__closeButton,"mousedown",n),i.domElement.insertBefore(i.__resize_handle,i.domElement.firstElementChild)}function xs(i,e){i.domElement.style.width=e+"px",i.__save_row&&i.autoPlace&&(i.__save_row.style.width=e+"px"),i.__closeButton&&(i.__closeButton.style.width=e+"px")}function Bn(i,e){var t={};return X.each(i.__rememberedObjects,function(r,n){var a={},s=i.__rememberedObjectIndecesToControllers[n];X.each(s,function(o,l){a[l]=e?o.initialValue:o.getValue()}),t[n]=a}),t}function Vm(i){for(var e=0;e<i.__preset_select.length;e++)i.__preset_select[e].value===i.preset&&(i.__preset_select.selectedIndex=e)}function wl(i){i.length!==0&&Fm.call(window,function(){wl(i)}),X.each(i,function(e){e.updateDisplay()})}var Wm=qe;const Al=new sm,yr=new Lt(75,window.innerWidth/window.innerHeight,.1,1e3);yr.position.z=1.5;const jr=new am;jr.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(jr.domElement),window.addEventListener("resize",()=>{yr.aspect=window.innerWidth/window.innerHeight,yr.updateProjectionMatrix(),jr.setSize(window.innerWidth,window.innerHeight)}),new hm(yr,jr.domElement);const Xm=new Er,jm=new om({wireframe:!0}),zn=new Vt(Xm,jm);Al.add(zn);const Rl=new zr;document.body.appendChild(Rl.dom);const Cl=new Wm,kn=Cl.addFolder("Cube");kn.add(zn.rotation,"x",0,Math.PI*2),kn.add(zn.rotation,"y",0,Math.PI*2),kn.add(zn.rotation,"z",0,Math.PI*2),kn.open();const Pl=Cl.addFolder("Camera");Pl.add(yr.position,"z",0,20),Pl.open();function Ll(){requestAnimationFrame(Ll),jr.render(Al,yr),Rl.update()}Ll();
