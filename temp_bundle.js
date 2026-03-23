(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Hc="183",If=0,Ol=1,Df=2,so=1,Uf=2,js=3,xi=0,Yt=1,qn=2,$n=0,Bi=1,vo=2,Bl=3,kl=4,Nf=5,Di=100,Ff=101,Of=102,Bf=103,kf=104,zf=200,Vf=201,Gf=202,Hf=203,Da=204,Ua=205,Wf=206,Xf=207,qf=208,Yf=209,$f=210,Kf=211,Zf=212,jf=213,Jf=214,Na=0,Fa=1,Oa=2,vs=3,Ba=4,ka=5,za=6,Va=7,Wc=0,Qf=1,ed=2,Ln=0,lu=1,hu=2,uu=3,fu=4,du=5,pu=6,mu=7,gu=300,zi=301,ys=302,qo=303,Yo=304,Io=306,Ga=1e3,Yn=1001,Ha=1002,Ft=1003,td=1004,Mr=1005,zt=1006,$o=1007,Ni=1008,en=1009,_u=1010,xu=1011,ar=1012,Xc=1013,Un=1014,_n=1015,jn=1016,qc=1017,Yc=1018,cr=1020,vu=35902,yu=35899,Mu=1021,Su=1022,xn=1023,Jn=1026,Fi=1027,$c=1028,Kc=1029,Ms=1030,Zc=1031,jc=1033,ro=33776,oo=33777,ao=33778,co=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,$a=36196,Ka=37492,Za=37496,ja=37488,Ja=37489,Qa=37490,ec=37491,tc=37808,nc=37809,ic=37810,sc=37811,rc=37812,oc=37813,ac=37814,cc=37815,lc=37816,hc=37817,uc=37818,fc=37819,dc=37820,pc=37821,mc=36492,gc=36494,_c=36495,xc=36283,vc=36284,yc=36285,Mc=36286,nd=3200,Jc=0,id=1,di="",rn="srgb",Ss="srgb-linear",yo="linear",et="srgb",qi=7680,zl=519,sd=512,rd=513,od=514,Qc=515,ad=516,cd=517,el=518,ld=519,Sc=35044,Vl="300 es",Tn=2e3,lr=2001;function hd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ud(){const i=Mo("canvas");return i.style.display="block",i}const Gl={};function So(...i){const e="THREE."+i.shift();console.log(e,...i)}function Eu(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pe(...i){i=Eu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=Eu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Eo(...i){const e=i.join(" ");e in Gl||(Gl[e]=!0,Pe(...i))}function fd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const dd={[Na]:Fa,[Oa]:za,[Ba]:Va,[vs]:ka,[Fa]:Na,[za]:Oa,[Va]:Ba,[ka]:vs};class Gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hl=1234567;const ir=Math.PI/180,hr=180/Math.PI;function Kn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Xe(i,e,t){return Math.max(e,Math.min(t,i))}function tl(i,e){return(i%e+e)%e}function pd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function md(i,e,t){return i!==e?(t-i)/(e-i):0}function sr(i,e,t){return(1-t)*i+t*e}function gd(i,e,t,n){return sr(i,e,1-Math.exp(-t*n))}function _d(i,e=1){return e-Math.abs(tl(i,e*2)-e)}function xd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function vd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function yd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Md(i,e){return i+Math.random()*(e-i)}function Sd(i){return i*(.5-Math.random())}function Ed(i){i!==void 0&&(Hl=i);let e=Hl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bd(i){return i*ir}function Td(i){return i*hr}function wd(i){return(i&i-1)===0&&i!==0}function Ad(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Rd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cd(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),p=r((e-n)/2),h=o((e-n)/2),m=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*p,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*p,a*l);break;case"ZXZ":i.set(c*p,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*_,c*m,a*l);break;case"YXY":i.set(c*m,a*u,c*_,a*l);break;case"ZYZ":i.set(c*_,c*m,a*u,a*l);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Js={DEG2RAD:ir,RAD2DEG:hr,generateUUID:Kn,clamp:Xe,euclideanModulo:tl,mapLinear:pd,inverseLerp:md,lerp:sr,damp:gd,pingpong:_d,smoothstep:xd,smootherstep:vd,randInt:yd,randFloat:Md,randFloatSpread:Sd,seededRandom:Ed,degToRad:bd,radToDeg:Td,isPowerOfTwo:wd,ceilPowerOfTwo:Ad,floorPowerOfTwo:Rd,setQuaternionFromProperEuler:Cd,normalize:tt,denormalize:gn};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],p=n[s+3],h=r[o+0],m=r[o+1],_=r[o+2],M=r[o+3];if(p!==M||c!==h||l!==m||u!==_){let d=c*h+l*m+u*_+p*M;d<0&&(h=-h,m=-m,_=-_,M=-M,d=-d);let f=1-a;if(d<.9995){const v=Math.acos(d),b=Math.sin(v);f=Math.sin(f*v)/b,a=Math.sin(a*v)/b,c=c*f+h*a,l=l*f+m*a,u=u*f+_*a,p=p*f+M*a}else{c=c*f+h*a,l=l*f+m*a,u=u*f+_*a,p=p*f+M*a;const v=1/Math.sqrt(c*c+l*l+u*u+p*p);c*=v,l*=v,u*=v,p*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],p=r[o],h=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+u*p+c*m-l*h,e[t+1]=c*_+u*h+l*p-a*m,e[t+2]=l*_+u*m+a*h-c*p,e[t+3]=u*_-a*p-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),p=a(r/2),h=c(n/2),m=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=h*u*p+l*m*_,this._y=l*m*p-h*u*_,this._z=l*u*_+h*m*p,this._w=l*u*p-h*m*_;break;case"YXZ":this._x=h*u*p+l*m*_,this._y=l*m*p-h*u*_,this._z=l*u*_-h*m*p,this._w=l*u*p+h*m*_;break;case"ZXY":this._x=h*u*p-l*m*_,this._y=l*m*p+h*u*_,this._z=l*u*_+h*m*p,this._w=l*u*p-h*m*_;break;case"ZYX":this._x=h*u*p-l*m*_,this._y=l*m*p+h*u*_,this._z=l*u*_-h*m*p,this._w=l*u*p+h*m*_;break;case"YZX":this._x=h*u*p+l*m*_,this._y=l*m*p+h*u*_,this._z=l*u*_-h*m*p,this._w=l*u*p-h*m*_;break;case"XZY":this._x=h*u*p-l*m*_,this._y=l*m*p-h*u*_,this._z=l*u*_+h*m*p,this._w=l*u*p+h*m*_;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],p=t[10],h=n+a+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>p){const m=2*Math.sqrt(1+n-a-p);this._w=(u-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>p){const m=2*Math.sqrt(1+a-n-p);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+p-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),p=2*(r*n-o*t);return this.x=t+c*l+o*p-a*u,this.y=n+c*u+a*l-r*p,this.z=s+c*p+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ko.copy(this).projectOnVector(e),this.sub(Ko)}reflect(e){return this.sub(Ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ko=new P,Wl=new Rs;class Oe{constructor(e,t,n,s,r,o,a,c,l){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],p=n[7],h=n[2],m=n[5],_=n[8],M=s[0],d=s[3],f=s[6],v=s[1],b=s[4],S=s[7],A=s[2],w=s[5],R=s[8];return r[0]=o*M+a*v+c*A,r[3]=o*d+a*b+c*w,r[6]=o*f+a*S+c*R,r[1]=l*M+u*v+p*A,r[4]=l*d+u*b+p*w,r[7]=l*f+u*S+p*R,r[2]=h*M+m*v+_*A,r[5]=h*d+m*b+_*w,r[8]=h*f+m*S+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],p=u*o-a*l,h=a*c-u*r,m=l*r-o*c,_=t*p+n*h+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=p*M,e[1]=(s*l-u*n)*M,e[2]=(a*n-s*o)*M,e[3]=h*M,e[4]=(u*t-s*c)*M,e[5]=(s*r-a*t)*M,e[6]=m*M,e[7]=(n*c-l*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zo.makeScale(e,t)),this}rotate(e){return this.premultiply(Zo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zo=new Oe,Xl=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ql=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pd(){const i={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===et&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===et&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===di?yo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Eo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Eo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ss]:{primaries:e,whitePoint:n,transfer:yo,toXYZ:Xl,fromXYZ:ql,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:n,transfer:et,toXYZ:Xl,fromXYZ:ql,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}const Ke=Pd();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yi;class Ld{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yi===void 0&&(Yi=Mo("canvas")),Yi.width=e.width,Yi.height=e.height;const s=Yi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Id=0;class nl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jo(s[o].image)):r.push(jo(s[o]))}else r=jo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function jo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ld.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let Dd=0;const Jo=new P;class Gt extends Gi{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,n=Yn,s=Yn,r=zt,o=Ni,a=xn,c=en,l=Gt.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Kn(),this.name="",this.source=new nl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jo).x}get height(){return this.source.getSize(Jo).y}get depth(){return this.source.getSize(Jo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ga:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ga:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=gu;Gt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],p=c[8],h=c[1],m=c[5],_=c[9],M=c[2],d=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(p-M)<.01&&Math.abs(_-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+M)<.1&&Math.abs(_+d)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,S=(m+1)/2,A=(f+1)/2,w=(u+h)/4,R=(p+M)/4,x=(_+d)/4;return b>S&&b>A?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=R/n):S>A?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=x/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=x/r),this.set(n,s,r,t),this}let v=Math.sqrt((d-_)*(d-_)+(p-M)*(p-M)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(d-_)/v,this.y=(p-M)/v,this.z=(h-u)/v,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ud extends Gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Gt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new nl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends Ud{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bu extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nd extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ot{constructor(e,t,n,s,r,o,a,c,l,u,p,h,m,_,M,d){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,p,h,m,_,M,d)}set(e,t,n,s,r,o,a,c,l,u,p,h,m,_,M,d){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=p,f[14]=h,f[3]=m,f[7]=_,f[11]=M,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const h=o*u,m=o*p,_=a*u,M=a*p;t[0]=c*u,t[4]=-c*p,t[8]=l,t[1]=m+_*l,t[5]=h-M*l,t[9]=-a*c,t[2]=M-h*l,t[6]=_+m*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,m=c*p,_=l*u,M=l*p;t[0]=h+M*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*p,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=M+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,m=c*p,_=l*u,M=l*p;t[0]=h-M*a,t[4]=-o*p,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=M-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,m=o*p,_=a*u,M=a*p;t[0]=c*u,t[4]=_*l-m,t[8]=h*l+M,t[1]=c*p,t[5]=M*l+h,t[9]=m*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,m=o*l,_=a*c,M=a*l;t[0]=c*u,t[4]=M-h*p,t[8]=_*p+m,t[1]=p,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*p+_,t[10]=h-M*p}else if(e.order==="XZY"){const h=o*c,m=o*l,_=a*c,M=a*l;t[0]=c*u,t[4]=-p,t[8]=l*u,t[1]=h*p+M,t[5]=o*u,t[9]=m*p-_,t[2]=_*p-m,t[6]=a*u,t[10]=M*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fd,e,Od)}lookAt(e,t,n){const s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),ri.crossVectors(n,Zt),ri.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),ri.crossVectors(n,Zt)),ri.normalize(),Sr.crossVectors(Zt,ri),s[0]=ri.x,s[4]=Sr.x,s[8]=Zt.x,s[1]=ri.y,s[5]=Sr.y,s[9]=Zt.y,s[2]=ri.z,s[6]=Sr.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],p=n[5],h=n[9],m=n[13],_=n[2],M=n[6],d=n[10],f=n[14],v=n[3],b=n[7],S=n[11],A=n[15],w=s[0],R=s[4],x=s[8],E=s[12],V=s[1],C=s[5],N=s[9],B=s[13],W=s[2],k=s[6],G=s[10],F=s[14],ee=s[3],j=s[7],he=s[11],me=s[15];return r[0]=o*w+a*V+c*W+l*ee,r[4]=o*R+a*C+c*k+l*j,r[8]=o*x+a*N+c*G+l*he,r[12]=o*E+a*B+c*F+l*me,r[1]=u*w+p*V+h*W+m*ee,r[5]=u*R+p*C+h*k+m*j,r[9]=u*x+p*N+h*G+m*he,r[13]=u*E+p*B+h*F+m*me,r[2]=_*w+M*V+d*W+f*ee,r[6]=_*R+M*C+d*k+f*j,r[10]=_*x+M*N+d*G+f*he,r[14]=_*E+M*B+d*F+f*me,r[3]=v*w+b*V+S*W+A*ee,r[7]=v*R+b*C+S*k+A*j,r[11]=v*x+b*N+S*G+A*he,r[15]=v*E+b*B+S*F+A*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],p=e[6],h=e[10],m=e[14],_=e[3],M=e[7],d=e[11],f=e[15],v=c*m-l*h,b=a*m-l*p,S=a*h-c*p,A=o*m-l*u,w=o*h-c*u,R=o*p-a*u;return t*(M*v-d*b+f*S)-n*(_*v-d*A+f*w)+s*(_*b-M*A+f*R)-r*(_*S-M*w+d*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],p=e[9],h=e[10],m=e[11],_=e[12],M=e[13],d=e[14],f=e[15],v=t*a-n*o,b=t*c-s*o,S=t*l-r*o,A=n*c-s*a,w=n*l-r*a,R=s*l-r*c,x=u*M-p*_,E=u*d-h*_,V=u*f-m*_,C=p*d-h*M,N=p*f-m*M,B=h*f-m*d,W=v*B-b*N+S*C+A*V-w*E+R*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/W;return e[0]=(a*B-c*N+l*C)*k,e[1]=(s*N-n*B-r*C)*k,e[2]=(M*R-d*w+f*A)*k,e[3]=(h*w-p*R-m*A)*k,e[4]=(c*V-o*B-l*E)*k,e[5]=(t*B-s*V+r*E)*k,e[6]=(d*S-_*R-f*b)*k,e[7]=(u*R-h*S+m*b)*k,e[8]=(o*N-a*V+l*x)*k,e[9]=(n*V-t*N-r*x)*k,e[10]=(_*w-M*S+f*v)*k,e[11]=(p*S-u*w-m*v)*k,e[12]=(a*E-o*C-c*x)*k,e[13]=(t*C-n*E+s*x)*k,e[14]=(M*b-_*A-d*v)*k,e[15]=(u*A-p*b+h*v)*k,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,p=a+a,h=r*l,m=r*u,_=r*p,M=o*u,d=o*p,f=a*p,v=c*l,b=c*u,S=c*p,A=n.x,w=n.y,R=n.z;return s[0]=(1-(M+f))*A,s[1]=(m+S)*A,s[2]=(_-b)*A,s[3]=0,s[4]=(m-S)*w,s[5]=(1-(h+f))*w,s[6]=(d+v)*w,s[7]=0,s[8]=(_+b)*R,s[9]=(d-v)*R,s[10]=(1-(h+M))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let o=$i.set(s[0],s[1],s[2]).length();const a=$i.set(s[4],s[5],s[6]).length(),c=$i.set(s[8],s[9],s[10]).length();r<0&&(o=-o),fn.copy(this);const l=1/o,u=1/a,p=1/c;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=p,fn.elements[9]*=p,fn.elements[10]*=p,t.setFromRotationMatrix(fn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Tn,c=!1){const l=this.elements,u=2*r/(t-e),p=2*r/(n-s),h=(t+e)/(t-e),m=(n+s)/(n-s);let _,M;if(c)_=r/(o-r),M=o*r/(o-r);else if(a===Tn)_=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===lr)_=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=p,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Tn,c=!1){const l=this.elements,u=2/(t-e),p=2/(n-s),h=-(t+e)/(t-e),m=-(n+s)/(n-s);let _,M;if(c)_=1/(o-r),M=o/(o-r);else if(a===Tn)_=-2/(o-r),M=-(o+r)/(o-r);else if(a===lr)_=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=p,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $i=new P,fn=new ot,Fd=new P(0,0,0),Od=new P(1,1,1),ri=new P,Sr=new P,Zt=new P,Yl=new ot,$l=new Rs;class nn{constructor(e=0,t=0,n=0,s=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],p=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $l.setFromEuler(this),this.setFromQuaternion($l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class il{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bd=0;const Kl=new P,Ki=new Rs,zn=new ot,Er=new P,Ns=new P,kd=new P,zd=new Rs,Zl=new P(1,0,0),jl=new P(0,1,0),Jl=new P(0,0,1),Ql={type:"added"},Vd={type:"removed"},Zi={type:"childadded",child:null},Qo={type:"childremoved",child:null};class At extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new P,t=new nn,n=new Rs,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new Oe}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(Zl,e)}rotateY(e){return this.rotateOnAxis(jl,e)}rotateZ(e){return this.rotateOnAxis(Jl,e)}translateOnAxis(e,t){return Kl.copy(e).applyQuaternion(this.quaternion),this.position.add(Kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zl,e)}translateY(e){return this.translateOnAxis(jl,e)}translateZ(e){return this.translateOnAxis(Jl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Ns,Er,this.up):zn.lookAt(Er,Ns,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(zn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ql),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vd),Qo.child=e,this.dispatchEvent(Qo),Qo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ql),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,kd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,zd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),p=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}At.DEFAULT_UP=new P(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class vt extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gd={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const M of e.hand.values()){const d=t.getJointPose(M,n),f=this._getHandJoint(l,M);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}const u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],h=u.position.distanceTo(p.position),m=.02,_=.005;l.inputState.pinching&&h>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},br={h:0,s:0,l:0};function ta(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=tl(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ta(o,r,e+1/3),this.g=ta(o,r,e),this.b=ta(o,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=rn){function n(r){r!==void 0&&parseFloat(r)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const n=Tu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return Ke.workingToColorSpace(kt.copy(this),e),Math.round(Xe(kt.r*255,0,255))*65536+Math.round(Xe(kt.g*255,0,255))*256+Math.round(Xe(kt.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(kt.copy(this),t);const n=kt.r,s=kt.g,r=kt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const p=o-a;switch(l=u<=.5?p/(o+a):p/(2-o-a),o){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=rn){Ke.workingToColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,s=kt.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(br);const n=sr(oi.h,br.h,t),s=sr(oi.s,br.s,t),r=sr(oi.l,br.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new We;We.NAMES=Tu;class Do{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new Do(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Hd extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const dn=new P,Vn=new P,na=new P,Gn=new P,ji=new P,Ji=new P,eh=new P,ia=new P,sa=new P,ra=new P,oa=new gt,aa=new gt,ca=new gt;class an{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),dn.subVectors(e,t),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){dn.subVectors(s,t),Vn.subVectors(n,t),na.subVectors(e,t);const o=dn.dot(dn),a=dn.dot(Vn),c=dn.dot(na),l=Vn.dot(Vn),u=Vn.dot(na),p=o*l-a*a;if(p===0)return r.set(0,0,0),null;const h=1/p,m=(l*c-a*u)*h,_=(o*u-a*c)*h;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gn.x),c.addScaledVector(o,Gn.y),c.addScaledVector(a,Gn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return oa.setScalar(0),aa.setScalar(0),ca.setScalar(0),oa.fromBufferAttribute(e,t),aa.fromBufferAttribute(e,n),ca.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(oa,r.x),o.addScaledVector(aa,r.y),o.addScaledVector(ca,r.z),o}static isFrontFacing(e,t,n,s){return dn.subVectors(n,t),Vn.subVectors(e,t),dn.cross(Vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),dn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ji.subVectors(s,n),Ji.subVectors(r,n),ia.subVectors(e,n);const c=ji.dot(ia),l=Ji.dot(ia);if(c<=0&&l<=0)return t.copy(n);sa.subVectors(e,s);const u=ji.dot(sa),p=Ji.dot(sa);if(u>=0&&p<=u)return t.copy(s);const h=c*p-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(ji,o);ra.subVectors(e,r);const m=ji.dot(ra),_=Ji.dot(ra);if(_>=0&&m<=_)return t.copy(r);const M=m*l-c*_;if(M<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Ji,a);const d=u*_-m*p;if(d<=0&&p-u>=0&&m-_>=0)return eh.subVectors(r,s),a=(p-u)/(p-u+(m-_)),t.copy(s).addScaledVector(eh,a);const f=1/(d+M+h);return o=M*f,a=h*f,t.copy(n).addScaledVector(ji,o).addScaledVector(Ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Hi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(e.matrixWorld),this.union(Tr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),wr.subVectors(this.max,Fs),Qi.subVectors(e.a,Fs),es.subVectors(e.b,Fs),ts.subVectors(e.c,Fs),ai.subVectors(es,Qi),ci.subVectors(ts,es),bi.subVectors(Qi,ts);let t=[0,-ai.z,ai.y,0,-ci.z,ci.y,0,-bi.z,bi.y,ai.z,0,-ai.x,ci.z,0,-ci.x,bi.z,0,-bi.x,-ai.y,ai.x,0,-ci.y,ci.x,0,-bi.y,bi.x,0];return!la(t,Qi,es,ts,wr)||(t=[1,0,0,0,1,0,0,0,1],!la(t,Qi,es,ts,wr))?!1:(Ar.crossVectors(ai,ci),t=[Ar.x,Ar.y,Ar.z],la(t,Qi,es,ts,wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hn=[new P,new P,new P,new P,new P,new P,new P,new P],pn=new P,Tr=new Hi,Qi=new P,es=new P,ts=new P,ai=new P,ci=new P,bi=new P,Fs=new P,wr=new P,Ar=new P,Ti=new P;function la(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ti.fromArray(i,r);const a=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),c=e.dot(Ti),l=t.dot(Ti),u=n.dot(Ti);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const St=new P,Rr=new Ue;let Wd=0;class tn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sc,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXY(t,Rr.x,Rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sc&&(e.usage=this.usage),e}}class wu extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Au extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yt extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Xd=new Hi,Os=new P,ha=new P;class Cs{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Xd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const t=Os.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Os,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(ha)),this.expandByPoint(Os.copy(e.center).sub(ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qd=0;const sn=new ot,ua=new At,ns=new P,jt=new Hi,Bs=new Hi,Dt=new P;class Ht extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hd(e)?Au:wu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return ua.lookAt(e),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(jt.min,Bs.min),jt.expandByPoint(Dt),Dt.addVectors(jt.max,Bs.max),jt.expandByPoint(Dt)):(jt.expandByPoint(Bs.min),jt.expandByPoint(Bs.max))}jt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Dt.fromBufferAttribute(a,l),c&&(ns.fromBufferAttribute(e,l),Dt.add(ns)),s=Math.max(s,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new P,c[x]=new P;const l=new P,u=new P,p=new P,h=new Ue,m=new Ue,_=new Ue,M=new P,d=new P;function f(x,E,V){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,E),p.fromBufferAttribute(n,V),h.fromBufferAttribute(r,x),m.fromBufferAttribute(r,E),_.fromBufferAttribute(r,V),u.sub(l),p.sub(l),m.sub(h),_.sub(h);const C=1/(m.x*_.y-_.x*m.y);isFinite(C)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(C),d.copy(p).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(C),a[x].add(M),a[E].add(M),a[V].add(M),c[x].add(d),c[E].add(d),c[V].add(d))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,E=v.length;x<E;++x){const V=v[x],C=V.start,N=V.count;for(let B=C,W=C+N;B<W;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new P,S=new P,A=new P,w=new P;function R(x){A.fromBufferAttribute(s,x),w.copy(A);const E=a[x];b.copy(E),b.sub(A.multiplyScalar(A.dot(E))).normalize(),S.crossVectors(w,E);const C=S.dot(c[x])<0?-1:1;o.setXYZW(x,b.x,b.y,b.z,C)}for(let x=0,E=v.length;x<E;++x){const V=v[x],C=V.start,N=V.count;for(let B=C,W=C+N;B<W;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,u=new P,p=new P;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),M=e.getX(h+1),d=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,d),u.subVectors(o,r),p.subVectors(s,r),u.cross(p),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,d),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),p.subVectors(s,r),u.cross(p),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,p=a.normalized,h=new l.constructor(c.length*u);let m=0,_=0;for(let M=0,d=c.length;M<d;M++){a.isInterleavedBufferAttribute?m=c[M]*a.data.stride+a.offset:m=c[M]*u;for(let f=0;f<u;f++)h[_++]=l[m++]}return new tn(h,u,p)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,p=l.length;u<p;u++){const h=l[u],m=e(h,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let p=0,h=l.length;p<h;p++){const m=l[p];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],p=r[l];for(let h=0,m=p.length;h<m;h++)u.push(p[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sc,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new P;class bo{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){So("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){So("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let $d=0;class Mi extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Bi,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Ua,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Da&&(n.blendSrc=this.blendSrc),this.blendDst!==Ua&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class sl extends Mi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let is;const ks=new P,ss=new P,rs=new P,os=new Ue,zs=new Ue,Ru=new ot,Cr=new P,Vs=new P,Pr=new P,th=new Ue,fa=new Ue,nh=new Ue;class Cu extends At{constructor(e=new sl){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new Ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Yd(t,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new bo(n,3,0,!1)),is.setAttribute("uv",new bo(n,2,3,!1))}this.geometry=is,this.material=e,this.center=new Ue(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),Ru.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-rs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Lr(Cr.set(-.5,-.5,0),rs,o,ss,s,r),Lr(Vs.set(.5,-.5,0),rs,o,ss,s,r),Lr(Pr.set(.5,.5,0),rs,o,ss,s,r),th.set(0,0),fa.set(1,0),nh.set(1,1);let a=e.ray.intersectTriangle(Cr,Vs,Pr,!1,ks);if(a===null&&(Lr(Vs.set(-.5,.5,0),rs,o,ss,s,r),fa.set(0,1),a=e.ray.intersectTriangle(Cr,Pr,Vs,!1,ks),a===null))return;const c=e.ray.origin.distanceTo(ks);c<e.near||c>e.far||t.push({distance:c,point:ks.clone(),uv:an.getInterpolation(ks,Cr,Vs,Pr,th,fa,nh,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Lr(i,e,t,n,s,r){os.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(zs.x=r*os.x-s*os.y,zs.y=s*os.x+r*os.y):zs.copy(os),i.copy(e),i.x+=zs.x,i.y+=zs.y,i.applyMatrix4(Ru)}const Wn=new P,da=new P,Ir=new P,li=new P,pa=new P,Dr=new P,ma=new P;class rl{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){da.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),li.copy(this.origin).sub(da);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ir),a=li.dot(this.direction),c=-li.dot(Ir),l=li.lengthSq(),u=Math.abs(1-o*o);let p,h,m,_;if(u>0)if(p=o*c-a,h=o*a-c,_=r*u,p>=0)if(h>=-_)if(h<=_){const M=1/u;p*=M,h*=M,m=p*(p+o*h+2*a)+h*(o*p+h+2*c)+l}else h=r,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*c)+l;else h=-r,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*c)+l;else h<=-_?(p=Math.max(0,-(-o*r+a)),h=p>0?-r:Math.min(Math.max(-r,-c),r),m=-p*p+h*(h+2*c)+l):h<=_?(p=0,h=Math.min(Math.max(-r,-c),r),m=h*(h+2*c)+l):(p=Math.max(0,-(o*r+a)),h=p>0?r:Math.min(Math.max(-r,-c),r),m=-p*p+h*(h+2*c)+l);else h=o>0?-r:r,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(da).addScaledVector(Ir,h),m}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(e.min.z-h.z)*p,c=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,c=(e.min.z-h.z)*p),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,s,r){pa.subVectors(t,e),Dr.subVectors(n,e),ma.crossVectors(pa,Dr);let o=this.direction.dot(ma),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);const c=a*this.direction.dot(Dr.crossVectors(li,Dr));if(c<0)return null;const l=a*this.direction.dot(pa.cross(li));if(l<0||c+l>o)return null;const u=-a*li.dot(ma);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ih=new ot,wi=new rl,Ur=new Cs,sh=new P,Nr=new P,Fr=new P,Or=new P,ga=new P,Br=new P,rh=new P,kr=new P;class Z extends At{constructor(e=new Ht,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Br.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],p=r[c];u!==0&&(ga.fromBufferAttribute(p,e),o?Br.addScaledVector(ga,u):Br.addScaledVector(ga.sub(t),u))}t.add(Br)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(r),wi.copy(e.ray).recast(e.near),!(Ur.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Ur,sh)===null||wi.origin.distanceToSquared(sh)>(e.far-e.near)**2))&&(ih.copy(r).invert(),wi.copy(e.ray).applyMatrix4(ih),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=h.length;_<M;_++){const d=h[_],f=o[d.materialIndex],v=Math.max(d.start,m.start),b=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let S=v,A=b;S<A;S+=3){const w=a.getX(S),R=a.getX(S+1),x=a.getX(S+2);s=zr(this,f,e,n,l,u,p,w,R,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let d=_,f=M;d<f;d+=3){const v=a.getX(d),b=a.getX(d+1),S=a.getX(d+2);s=zr(this,o,e,n,l,u,p,v,b,S),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,M=h.length;_<M;_++){const d=h[_],f=o[d.materialIndex],v=Math.max(d.start,m.start),b=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let S=v,A=b;S<A;S+=3){const w=S,R=S+1,x=S+2;s=zr(this,f,e,n,l,u,p,w,R,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let d=_,f=M;d<f;d+=3){const v=d,b=d+1,S=d+2;s=zr(this,o,e,n,l,u,p,v,b,S),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function Kd(i,e,t,n,s,r,o,a){let c;if(e.side===Yt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===xi,a),c===null)return null;kr.copy(a),kr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(kr);return l<t.near||l>t.far?null:{distance:l,point:kr.clone(),object:i}}function zr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Nr),i.getVertexPosition(c,Fr),i.getVertexPosition(l,Or);const u=Kd(i,e,t,n,Nr,Fr,Or,rh);if(u){const p=new P;an.getBarycoord(rh,Nr,Fr,Or,p),s&&(u.uv=an.getInterpolatedAttribute(s,a,c,l,p,new Ue)),r&&(u.uv1=an.getInterpolatedAttribute(r,a,c,l,p,new Ue)),o&&(u.normal=an.getInterpolatedAttribute(o,a,c,l,p,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new P,materialIndex:0};an.getNormal(Nr,Fr,Or,h.normal),u.face=h,u.barycoord=p}return u}class Pu extends Gt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Ft,u=Ft,p,h){super(null,o,a,c,l,u,s,r,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oh extends tn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const as=new ot,ah=new ot,Vr=[],ch=new Hi,Zd=new ot,Gs=new Z,Hs=new Cs;class jd extends Z{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oh(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Zd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,as),ch.copy(e.boundingBox).applyMatrix4(as),this.boundingBox.union(ch)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,as),Hs.copy(e.boundingSphere).applyMatrix4(as),this.boundingSphere.union(Hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(n),e.ray.intersectsSphere(Hs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),ah.multiplyMatrices(n,as),Gs.matrixWorld=ah,Gs.raycast(e,Vr);for(let o=0,a=Vr.length;o<a;o++){const c=Vr[o];c.instanceId=r,c.object=this,t.push(c)}Vr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new oh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pu(new Float32Array(s*this.count),s,this.count,$c,_n));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _a=new P,Jd=new P,Qd=new Oe;class Ii{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=_a.subVectors(n,t).cross(Jd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_a),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qd.getNormalMatrix(e),s=this.coplanarPoint(_a).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Cs,ep=new Ue(.5,.5),Gr=new P;class ol{constructor(e=new Ii,t=new Ii,n=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],p=r[5],h=r[6],m=r[7],_=r[8],M=r[9],d=r[10],f=r[11],v=r[12],b=r[13],S=r[14],A=r[15];if(s[0].setComponents(l-o,m-u,f-_,A-v).normalize(),s[1].setComponents(l+o,m+u,f+_,A+v).normalize(),s[2].setComponents(l+a,m+p,f+M,A+b).normalize(),s[3].setComponents(l-a,m-p,f-M,A-b).normalize(),n)s[4].setComponents(c,h,d,S).normalize(),s[5].setComponents(l-c,m-h,f-d,A-S).normalize();else if(s[4].setComponents(l-c,m-h,f-d,A-S).normalize(),t===Tn)s[5].setComponents(l+c,m+h,f+d,A+S).normalize();else if(t===lr)s[5].setComponents(c,h,d,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){Ai.center.set(0,0,0);const t=ep.distanceTo(e.center);return Ai.radius=.7071067811865476+t,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Gr.x=s.normal.x>0?e.max.x:e.min.x,Gr.y=s.normal.y>0?e.max.y:e.min.y,Gr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lu extends Mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lh=new ot,Ec=new rl,Hr=new Cs,Wr=new P;class tp extends At{constructor(e=new Ht,t=new Lu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),Hr.radius+=r,e.ray.intersectsSphere(Hr)===!1)return;lh.copy(s).invert(),Ec.copy(e.ray).applyMatrix4(lh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,p=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let _=h,M=m;_<M;_++){const d=l.getX(_);Wr.fromBufferAttribute(p,d),hh(Wr,d,c,s,e,t,this)}}else{const h=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let _=h,M=m;_<M;_++)Wr.fromBufferAttribute(p,_),hh(Wr,_,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function hh(i,e,t,n,s,r,o){const a=Ec.distanceSqToPoint(i);if(a<t){const c=new P;Ec.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Iu extends Gt{constructor(e=[],t=zi,n,s,r,o,a,c,l,u){super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Du extends Gt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ur extends Gt{constructor(e,t,n=Un,s,r,o,a=Ft,c=Ft,l,u=Jn,p=1){if(u!==Jn&&u!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:p};super(h,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class np extends ur{constructor(e,t=Un,n=zi,s,r,o=Ft,a=Ft,c,l=Jn){const u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Uu extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Le extends Ht{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],p=[];let h=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(p,2));function _(M,d,f,v,b,S,A,w,R,x,E){const V=S/R,C=A/x,N=S/2,B=A/2,W=w/2,k=R+1,G=x+1;let F=0,ee=0;const j=new P;for(let he=0;he<G;he++){const me=he*C-B;for(let fe=0;fe<k;fe++){const ke=fe*V-N;j[M]=ke*v,j[d]=me*b,j[f]=W,l.push(j.x,j.y,j.z),j[M]=0,j[d]=0,j[f]=w>0?1:-1,u.push(j.x,j.y,j.z),p.push(fe/R),p.push(1-he/x),F+=1}}for(let he=0;he<x;he++)for(let me=0;me<R;me++){const fe=h+me+k*he,ke=h+me+k*(he+1),dt=h+(me+1)+k*(he+1),ft=h+(me+1)+k*he;c.push(fe,ke,ft),c.push(ke,dt,ft),ee+=6}a.addGroup(m,ee,E),m+=ee,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Le(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Tt extends Ht{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],p=[],h=[],m=[];let _=0;const M=[],d=n/2;let f=0;v(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(m,2));function v(){const S=new P,A=new P;let w=0;const R=(t-e)/n;for(let x=0;x<=r;x++){const E=[],V=x/r,C=V*(t-e)+e;for(let N=0;N<=s;N++){const B=N/s,W=B*c+a,k=Math.sin(W),G=Math.cos(W);A.x=C*k,A.y=-V*n+d,A.z=C*G,p.push(A.x,A.y,A.z),S.set(k,R,G).normalize(),h.push(S.x,S.y,S.z),m.push(B,1-V),E.push(_++)}M.push(E)}for(let x=0;x<s;x++)for(let E=0;E<r;E++){const V=M[E][x],C=M[E+1][x],N=M[E+1][x+1],B=M[E][x+1];(e>0||E!==0)&&(u.push(V,C,B),w+=3),(t>0||E!==r-1)&&(u.push(C,N,B),w+=3)}l.addGroup(f,w,0),f+=w}function b(S){const A=_,w=new Ue,R=new P;let x=0;const E=S===!0?e:t,V=S===!0?1:-1;for(let N=1;N<=s;N++)p.push(0,d*V,0),h.push(0,V,0),m.push(.5,.5),_++;const C=_;for(let N=0;N<=s;N++){const W=N/s*c+a,k=Math.cos(W),G=Math.sin(W);R.x=E*G,R.y=d*V,R.z=E*k,p.push(R.x,R.y,R.z),h.push(0,V,0),w.x=k*.5+.5,w.y=G*.5*V+.5,m.push(w.x,w.y),_++}for(let N=0;N<s;N++){const B=A+N,W=C+N;S===!0?u.push(W,W+1,B):u.push(W+1,W,B),x+=3}l.addGroup(f,x,S===!0?1:2),f+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mr extends Tt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new mr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Uo extends Ht{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const b=new P,S=new P,A=new P;for(let w=0;w<t.length;w+=3)m(t[w+0],b),m(t[w+1],S),m(t[w+2],A),c(b,S,A,v)}function c(v,b,S,A){const w=A+1,R=[];for(let x=0;x<=w;x++){R[x]=[];const E=v.clone().lerp(S,x/w),V=b.clone().lerp(S,x/w),C=w-x;for(let N=0;N<=C;N++)N===0&&x===w?R[x][N]=E:R[x][N]=E.clone().lerp(V,N/C)}for(let x=0;x<w;x++)for(let E=0;E<2*(w-x)-1;E++){const V=Math.floor(E/2);E%2===0?(h(R[x][V+1]),h(R[x+1][V]),h(R[x][V])):(h(R[x][V+1]),h(R[x+1][V+1]),h(R[x+1][V]))}}function l(v){const b=new P;for(let S=0;S<r.length;S+=3)b.x=r[S+0],b.y=r[S+1],b.z=r[S+2],b.normalize().multiplyScalar(v),r[S+0]=b.x,r[S+1]=b.y,r[S+2]=b.z}function u(){const v=new P;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];const S=d(v)/2/Math.PI+.5,A=f(v)/Math.PI+.5;o.push(S,1-A)}_(),p()}function p(){for(let v=0;v<o.length;v+=6){const b=o[v+0],S=o[v+2],A=o[v+4],w=Math.max(b,S,A),R=Math.min(b,S,A);w>.9&&R<.1&&(b<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function m(v,b){const S=v*3;b.x=e[S+0],b.y=e[S+1],b.z=e[S+2]}function _(){const v=new P,b=new P,S=new P,A=new P,w=new Ue,R=new Ue,x=new Ue;for(let E=0,V=0;E<r.length;E+=9,V+=6){v.set(r[E+0],r[E+1],r[E+2]),b.set(r[E+3],r[E+4],r[E+5]),S.set(r[E+6],r[E+7],r[E+8]),w.set(o[V+0],o[V+1]),R.set(o[V+2],o[V+3]),x.set(o[V+4],o[V+5]),A.copy(v).add(b).add(S).divideScalar(3);const C=d(A);M(w,V+0,v,C),M(R,V+2,b,C),M(x,V+4,S,C)}}function M(v,b,S,A){A<0&&v.x===1&&(o[b]=v.x-1),S.x===0&&S.z===0&&(o[b]=A/2/Math.PI+.5)}function d(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.vertices,e.indices,e.radius,e.detail)}}class No extends Uo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new No(e.radius,e.detail)}}class al extends Uo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new al(e.radius,e.detail)}}class ti extends Ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,p=e/a,h=t/c,m=[],_=[],M=[],d=[];for(let f=0;f<u;f++){const v=f*h-o;for(let b=0;b<l;b++){const S=b*p-r;_.push(S,-v,0),M.push(0,0,1),d.push(b/a),d.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<a;v++){const b=v+l*f,S=v+l*(f+1),A=v+1+l*(f+1),w=v+1+l*f;m.push(b,S,w),m.push(S,A,w)}this.setIndex(m),this.setAttribute("position",new yt(_,3)),this.setAttribute("normal",new yt(M,3)),this.setAttribute("uv",new yt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.width,e.height,e.widthSegments,e.heightSegments)}}class vi extends Ht{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],p=new P,h=new P,m=[],_=[],M=[],d=[];for(let f=0;f<=n;f++){const v=[],b=f/n;let S=0;f===0&&o===0?S=.5/t:f===n&&c===Math.PI&&(S=-.5/t);for(let A=0;A<=t;A++){const w=A/t;p.x=-e*Math.cos(s+w*r)*Math.sin(o+b*a),p.y=e*Math.cos(o+b*a),p.z=e*Math.sin(s+w*r)*Math.sin(o+b*a),_.push(p.x,p.y,p.z),h.copy(p).normalize(),M.push(h.x,h.y,h.z),d.push(w+S,1-b),v.push(l++)}u.push(v)}for(let f=0;f<n;f++)for(let v=0;v<t;v++){const b=u[f][v+1],S=u[f][v],A=u[f+1][v],w=u[f+1][v+1];(f!==0||o>0)&&m.push(b,S,w),(f!==n-1||c<Math.PI)&&m.push(S,A,w)}this.setIndex(m),this.setAttribute("position",new yt(_,3)),this.setAttribute("normal",new yt(M,3)),this.setAttribute("uv",new yt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Es extends Ht{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],u=[],p=[],h=new P,m=new P,_=new P;for(let M=0;M<=n;M++){const d=o+M/n*a;for(let f=0;f<=s;f++){const v=f/s*r;m.x=(e+t*Math.cos(d))*Math.cos(v),m.y=(e+t*Math.cos(d))*Math.sin(v),m.z=t*Math.sin(d),l.push(m.x,m.y,m.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),_.subVectors(m,h).normalize(),u.push(_.x,_.y,_.z),p.push(f/s),p.push(M/n)}}for(let M=1;M<=n;M++)for(let d=1;d<=s;d++){const f=(s+1)*M+d-1,v=(s+1)*(M-1)+d-1,b=(s+1)*(M-1)+d,S=(s+1)*M+d;c.push(f,v,S),c.push(v,b,S)}this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function bs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function qt(i){const e={};for(let t=0;t<i.length;t++){const n=bs(i[t]);for(const s in n)e[s]=n[s]}return e}function ip(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const sp={clone:bs,merge:qt};var rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rp,this.fragmentShader=op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=ip(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ap extends Nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nt extends Mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jc,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xs extends Mi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jc,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Wc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cp extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lp extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cl extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class hp extends cl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const xa=new ot,uh=new P,fh=new P;class Fu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ol,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;uh.setFromMatrixPosition(e.matrixWorld),t.position.copy(uh),fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fh),t.updateMatrixWorld(),xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===lr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xr=new P,qr=new Rs,Mn=new P;class Ou extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xr,qr,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xr,qr,Mn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Xr,qr,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xr,qr,Mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hi=new P,dh=new Ue,ph=new Ue;class Qt extends Ou{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,dh,ph),t.subVectors(ph,dh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ir*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class up extends Fu{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0}}class Ps extends cl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new up}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ll extends Ou{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class fp extends Fu{constructor(){super(new ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dp extends cl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new fp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const cs=-90,ls=1;class pp extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qt(cs,ls,e,t);s.layers=this.layers,this.add(s);const r=new Qt(cs,ls,e,t);r.layers=this.layers,this.add(r);const o=new Qt(cs,ls,e,t);o.layers=this.layers,this.add(o);const a=new Qt(cs,ls,e,t);a.layers=this.layers,this.add(a);const c=new Qt(cs,ls,e,t);c.layers=this.layers,this.add(c);const l=new Qt(cs,ls,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let d=!1;e.isWebGLRenderer===!0?d=e.state.buffers.depth.getReversed():d=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,h,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class mp extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const mh=new ot;class gr{constructor(e,t,n=0,s=1/0){this.ray=new rl(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new il,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mh),this}intersectObject(e,t=!0,n=[]){return bc(e,this,n,t),n.sort(gh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)bc(e[s],this,n,t);return n.sort(gh),n}}function gh(i,e){return i.distance-e.distance}function bc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)bc(r[o],e,t,!0)}}class gp extends Gi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Pe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function _h(i,e,t,n){const s=_p(n);switch(t){case Mu:return i*e;case $c:return i*e/s.components*s.byteLength;case Kc:return i*e/s.components*s.byteLength;case Ms:return i*e*2/s.components*s.byteLength;case Zc:return i*e*2/s.components*s.byteLength;case Su:return i*e*3/s.components*s.byteLength;case xn:return i*e*4/s.components*s.byteLength;case jc:return i*e*4/s.components*s.byteLength;case ro:case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ao:case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:case Ya:return Math.max(i,16)*Math.max(e,8)/4;case Wa:case qa:return Math.max(i,8)*Math.max(e,8)/2;case $a:case Ka:case ja:case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Za:case Qa:case ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case rc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case oc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case uc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case fc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case dc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case mc:case gc:case _c:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xc:case vc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yc:case Mc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _p(i){switch(i){case en:case _u:return{byteLength:1,components:1};case ar:case xu:case jn:return{byteLength:2,components:1};case qc:case Yc:return{byteLength:2,components:4};case Un:case Xc:case _n:return{byteLength:4,components:1};case vu:case yu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hc}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hc);function Bu(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function xp(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,p=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,l){const u=c.array,p=c.updateRanges;if(i.bindBuffer(l,a),p.length===0)i.bufferSubData(l,0,u);else{p.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<p.length;m++){const _=p[h],M=p[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++h,p[h]=M)}p.length=h+1;for(let m=0,_=p.length;m<_;m++){const M=p[m];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yp=`#ifdef USE_ALPHAHASH
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
#endif`,Mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tp=`#ifdef USE_AOMAP
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
#endif`,wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ap=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ip=`#ifdef USE_IRIDESCENCE
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
#endif`,Dp=`#ifdef USE_BUMPMAP
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Gp=`#define PI 3.141592653589793
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
} // validated`,Hp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wp=`vec3 transformedNormal = objectNormal;
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
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jp=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,om=`#ifdef USE_GRADIENTMAP
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
}`,am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hm=`uniform bool receiveShadow;
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
#endif`,um=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,_m=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xm=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,ym=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rm=`#if defined( USE_POINTS_UV )
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
#endif`,Cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`#ifdef USE_MORPHTARGETS
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
#endif`,Nm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vm=`#ifdef USE_NORMALMAP
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
#endif`,Gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ym=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,$m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i0=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,s0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r0=`#ifdef USE_SKINNING
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
#endif`,o0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a0=`#ifdef USE_SKINNING
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
#endif`,c0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,f0=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,d0=`#ifdef USE_TRANSMISSION
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v0=`uniform sampler2D t2D;
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`#include <common>
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
}`,T0=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,w0=`#define DISTANCE
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
}`,A0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`uniform float scale;
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
}`,L0=`uniform vec3 diffuse;
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
}`,I0=`#include <common>
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
}`,D0=`uniform vec3 diffuse;
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
}`,U0=`#define LAMBERT
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
}`,N0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,F0=`#define MATCAP
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
}`,O0=`#define MATCAP
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
}`,B0=`#define NORMAL
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
}`,k0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,z0=`#define PHONG
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
}`,V0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,G0=`#define STANDARD
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
}`,H0=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,W0=`#define TOON
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
}`,X0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,q0=`uniform float size;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,$0=`#include <common>
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
}`,K0=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Z0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,j0=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:vp,alphahash_pars_fragment:yp,alphamap_fragment:Mp,alphamap_pars_fragment:Sp,alphatest_fragment:Ep,alphatest_pars_fragment:bp,aomap_fragment:Tp,aomap_pars_fragment:wp,batching_pars_vertex:Ap,batching_vertex:Rp,begin_vertex:Cp,beginnormal_vertex:Pp,bsdfs:Lp,iridescence_fragment:Ip,bumpmap_pars_fragment:Dp,clipping_planes_fragment:Up,clipping_planes_pars_fragment:Np,clipping_planes_pars_vertex:Fp,clipping_planes_vertex:Op,color_fragment:Bp,color_pars_fragment:kp,color_pars_vertex:zp,color_vertex:Vp,common:Gp,cube_uv_reflection_fragment:Hp,defaultnormal_vertex:Wp,displacementmap_pars_vertex:Xp,displacementmap_vertex:qp,emissivemap_fragment:Yp,emissivemap_pars_fragment:$p,colorspace_fragment:Kp,colorspace_pars_fragment:Zp,envmap_fragment:jp,envmap_common_pars_fragment:Jp,envmap_pars_fragment:Qp,envmap_pars_vertex:em,envmap_physical_pars_fragment:um,envmap_vertex:tm,fog_vertex:nm,fog_pars_vertex:im,fog_fragment:sm,fog_pars_fragment:rm,gradientmap_pars_fragment:om,lightmap_pars_fragment:am,lights_lambert_fragment:cm,lights_lambert_pars_fragment:lm,lights_pars_begin:hm,lights_toon_fragment:fm,lights_toon_pars_fragment:dm,lights_phong_fragment:pm,lights_phong_pars_fragment:mm,lights_physical_fragment:gm,lights_physical_pars_fragment:_m,lights_fragment_begin:xm,lights_fragment_maps:vm,lights_fragment_end:ym,logdepthbuf_fragment:Mm,logdepthbuf_pars_fragment:Sm,logdepthbuf_pars_vertex:Em,logdepthbuf_vertex:bm,map_fragment:Tm,map_pars_fragment:wm,map_particle_fragment:Am,map_particle_pars_fragment:Rm,metalnessmap_fragment:Cm,metalnessmap_pars_fragment:Pm,morphinstance_vertex:Lm,morphcolor_vertex:Im,morphnormal_vertex:Dm,morphtarget_pars_vertex:Um,morphtarget_vertex:Nm,normal_fragment_begin:Fm,normal_fragment_maps:Om,normal_pars_fragment:Bm,normal_pars_vertex:km,normal_vertex:zm,normalmap_pars_fragment:Vm,clearcoat_normal_fragment_begin:Gm,clearcoat_normal_fragment_maps:Hm,clearcoat_pars_fragment:Wm,iridescence_pars_fragment:Xm,opaque_fragment:qm,packing:Ym,premultiplied_alpha_fragment:$m,project_vertex:Km,dithering_fragment:Zm,dithering_pars_fragment:jm,roughnessmap_fragment:Jm,roughnessmap_pars_fragment:Qm,shadowmap_pars_fragment:e0,shadowmap_pars_vertex:t0,shadowmap_vertex:n0,shadowmask_pars_fragment:i0,skinbase_vertex:s0,skinning_pars_vertex:r0,skinning_vertex:o0,skinnormal_vertex:a0,specularmap_fragment:c0,specularmap_pars_fragment:l0,tonemapping_fragment:h0,tonemapping_pars_fragment:u0,transmission_fragment:f0,transmission_pars_fragment:d0,uv_pars_fragment:p0,uv_pars_vertex:m0,uv_vertex:g0,worldpos_vertex:_0,background_vert:x0,background_frag:v0,backgroundCube_vert:y0,backgroundCube_frag:M0,cube_vert:S0,cube_frag:E0,depth_vert:b0,depth_frag:T0,distance_vert:w0,distance_frag:A0,equirect_vert:R0,equirect_frag:C0,linedashed_vert:P0,linedashed_frag:L0,meshbasic_vert:I0,meshbasic_frag:D0,meshlambert_vert:U0,meshlambert_frag:N0,meshmatcap_vert:F0,meshmatcap_frag:O0,meshnormal_vert:B0,meshnormal_frag:k0,meshphong_vert:z0,meshphong_frag:V0,meshphysical_vert:G0,meshphysical_frag:H0,meshtoon_vert:W0,meshtoon_frag:X0,points_vert:q0,points_frag:Y0,shadow_vert:$0,shadow_frag:K0,sprite_vert:Z0,sprite_frag:j0},ae={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},En={basic:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:qt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:qt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new We(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:qt([ae.points,ae.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:qt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:qt([ae.common,ae.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:qt([ae.sprite,ae.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:qt([ae.common,ae.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:qt([ae.lights,ae.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};En.physical={uniforms:qt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Yr={r:0,b:0,g:0},Ri=new nn,J0=new ot;function Q0(i,e,t,n,s,r){const o=new We(0);let a=s===!0?0:1,c,l,u=null,p=0,h=null;function m(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){const S=v.backgroundBlurriness>0;b=e.get(b,S)}return b}function _(v){let b=!1;const S=m(v);S===null?d(o,a):S&&S.isColor&&(d(S,1),b=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(v,b){const S=m(b);S&&(S.isCubeTexture||S.mapping===Io)?(l===void 0&&(l=new Z(new Le(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:bs(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),Ri.copy(b.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),l.material.uniforms.envMap.value=S,l.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(J0.makeRotationFromEuler(Ri)),l.material.toneMapped=Ke.getTransfer(S.colorSpace)!==et,(u!==S||p!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,p=S.version,h=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Z(new ti(2,2),new Nn({name:"BackgroundMaterial",uniforms:bs(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(S.colorSpace)!==et,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||p!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,p=S.version,h=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,b){v.getRGB(Yr,Nu(i)),t.buffers.color.setClear(Yr.r,Yr.g,Yr.b,b,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,b=1){o.set(v),a=b,d(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,d(o,a)},render:_,addToRenderList:M,dispose:f}}function eg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(C,N,B,W,k){let G=!1;const F=p(C,W,B,N);r!==F&&(r=F,l(r.object)),G=m(C,W,B,k),G&&_(C,W,B,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,S(C,N,B,W),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function u(C){return i.deleteVertexArray(C)}function p(C,N,B,W){const k=W.wireframe===!0;let G=n[N.id];G===void 0&&(G={},n[N.id]=G);const F=C.isInstancedMesh===!0?C.id:0;let ee=G[F];ee===void 0&&(ee={},G[F]=ee);let j=ee[B.id];j===void 0&&(j={},ee[B.id]=j);let he=j[k];return he===void 0&&(he=h(c()),j[k]=he),he}function h(C){const N=[],B=[],W=[];for(let k=0;k<t;k++)N[k]=0,B[k]=0,W[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:W,object:C,attributes:{},index:null}}function m(C,N,B,W){const k=r.attributes,G=N.attributes;let F=0;const ee=B.getAttributes();for(const j in ee)if(ee[j].location>=0){const me=k[j];let fe=G[j];if(fe===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(fe=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(fe=C.instanceColor)),me===void 0||me.attribute!==fe||fe&&me.data!==fe.data)return!0;F++}return r.attributesNum!==F||r.index!==W}function _(C,N,B,W){const k={},G=N.attributes;let F=0;const ee=B.getAttributes();for(const j in ee)if(ee[j].location>=0){let me=G[j];me===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(me=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(me=C.instanceColor));const fe={};fe.attribute=me,me&&me.data&&(fe.data=me.data),k[j]=fe,F++}r.attributes=k,r.attributesNum=F,r.index=W}function M(){const C=r.newAttributes;for(let N=0,B=C.length;N<B;N++)C[N]=0}function d(C){f(C,0)}function f(C,N){const B=r.newAttributes,W=r.enabledAttributes,k=r.attributeDivisors;B[C]=1,W[C]===0&&(i.enableVertexAttribArray(C),W[C]=1),k[C]!==N&&(i.vertexAttribDivisor(C,N),k[C]=N)}function v(){const C=r.newAttributes,N=r.enabledAttributes;for(let B=0,W=N.length;B<W;B++)N[B]!==C[B]&&(i.disableVertexAttribArray(B),N[B]=0)}function b(C,N,B,W,k,G,F){F===!0?i.vertexAttribIPointer(C,N,B,k,G):i.vertexAttribPointer(C,N,B,W,k,G)}function S(C,N,B,W){M();const k=W.attributes,G=B.getAttributes(),F=N.defaultAttributeValues;for(const ee in G){const j=G[ee];if(j.location>=0){let he=k[ee];if(he===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),he!==void 0){const me=he.normalized,fe=he.itemSize,ke=e.get(he);if(ke===void 0)continue;const dt=ke.buffer,ft=ke.type,$=ke.bytesPerElement,ie=ft===i.INT||ft===i.UNSIGNED_INT||he.gpuType===Xc;if(he.isInterleavedBufferAttribute){const oe=he.data,Fe=oe.stride,Ae=he.offset;if(oe.isInstancedInterleavedBuffer){for(let Ie=0;Ie<j.locationSize;Ie++)f(j.location+Ie,oe.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ie=0;Ie<j.locationSize;Ie++)d(j.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let Ie=0;Ie<j.locationSize;Ie++)b(j.location+Ie,fe/j.locationSize,ft,me,Fe*$,(Ae+fe/j.locationSize*Ie)*$,ie)}else{if(he.isInstancedBufferAttribute){for(let oe=0;oe<j.locationSize;oe++)f(j.location+oe,he.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let oe=0;oe<j.locationSize;oe++)d(j.location+oe);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let oe=0;oe<j.locationSize;oe++)b(j.location+oe,fe/j.locationSize,ft,me,fe*$,fe/j.locationSize*oe*$,ie)}}else if(F!==void 0){const me=F[ee];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(j.location,me);break;case 3:i.vertexAttrib3fv(j.location,me);break;case 4:i.vertexAttrib4fv(j.location,me);break;default:i.vertexAttrib1fv(j.location,me)}}}}v()}function A(){E();for(const C in n){const N=n[C];for(const B in N){const W=N[B];for(const k in W){const G=W[k];for(const F in G)u(G[F].object),delete G[F];delete W[k]}}delete n[C]}}function w(C){if(n[C.id]===void 0)return;const N=n[C.id];for(const B in N){const W=N[B];for(const k in W){const G=W[k];for(const F in G)u(G[F].object),delete G[F];delete W[k]}}delete n[C.id]}function R(C){for(const N in n){const B=n[N];for(const W in B){const k=B[W];if(k[C.id]===void 0)continue;const G=k[C.id];for(const F in G)u(G[F].object),delete G[F];delete k[C.id]}}}function x(C){for(const N in n){const B=n[N],W=C.isInstancedMesh===!0?C.id:0,k=B[W];if(k!==void 0){for(const G in k){const F=k[G];for(const ee in F)u(F[ee].object),delete F[ee];delete k[G]}delete B[W],Object.keys(B).length===0&&delete n[N]}}}function E(){V(),o=!0,r!==s&&(r=s,l(r.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:V,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:d,disableUnusedAttributes:v}}function tg(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,p){p!==0&&(i.drawArraysInstanced(n,l,u,p),t.update(u,n,p))}function a(l,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,p);let m=0;for(let _=0;_<p;_++)m+=u[_];t.update(m,n,1)}function c(l,u,p,h){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)o(l[_],u[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,p);let _=0;for(let M=0;M<p;M++)_+=u[M]*h[M];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ng(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==xn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const x=R===jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==en&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==_n&&!x)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Pe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const p=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:S,maxSamples:A,samples:w}}function ig(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ii,a=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||n!==0||s;return s=h,n=p.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){t=u(p,h,0)},this.setState=function(p,h,m){const _=p.clippingPlanes,M=p.clipIntersection,d=p.clipShadows,f=i.get(p);if(!s||_===null||_.length===0||r&&!d)r?u(null):l();else{const v=r?0:n,b=v*4;let S=f.clippingState||null;c.value=S,S=u(_,h,b,m);for(let A=0;A!==b;++A)S[A]=t[A];f.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,h,m,_){const M=p!==null?p.length:0;let d=null;if(M!==0){if(d=c.value,_!==!0||d===null){const f=m+M*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(d===null||d.length<f)&&(d=new Float32Array(f));for(let b=0,S=m;b!==M;++b,S+=4)o.copy(p[b]).applyMatrix4(v,a),o.normal.toArray(d,S),d[S+3]=o.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,d}}const pi=4,xh=[.125,.215,.35,.446,.526,.582],Ui=20,sg=256,Ws=new ll,vh=new We;let va=null,ya=0,Ma=0,Sa=!1;const rg=new P;class yh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=rg}=r;va=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(va,ya,Ma),this._renderer.xr.enabled=Sa,e.scissorTest=!1,hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zi||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),va=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:jn,format:xn,colorSpace:Ss,depthBuffer:!1},s=Mh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=og(r)),this._blurMaterial=cg(r,e,t),this._ggxMaterial=ag(r,e,t)}return s}_compileMaterial(e){const t=new Z(new Ht,e);this._renderer.compile(t,Ws)}_sceneToCubeUV(e,t,n,s,r){const c=new Qt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,m=p.toneMapping;p.getClearColor(vh),p.toneMapping=Ln,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Z(new Le,new Rt({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,d=M.material;let f=!1;const v=e.background;v?v.isColor&&(d.color.copy(v),e.background=null,f=!0):(d.color.copy(vh),f=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[b],r.y,r.z)):S===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[b]));const A=this._cubeSize;hs(s,S*A,b>2?A:0,A,A),p.setRenderTarget(s),f&&p.render(M,c),p.render(e,c)}p.toneMapping=m,p.autoClear=h,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===zi||e.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;hs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ws)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-u*u),h=0+l*1.25,m=p*h,{_lodMax:_}=this,M=this._sizeLods[n],d=3*M*(n>_-pi?n-_+pi:0),f=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=_-t,hs(r,d,f,3*M,2*M),s.setRenderTarget(r),s.render(a,Ws),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,hs(e,d,f,3*M,2*M),s.setRenderTarget(e),s.render(a,Ws)}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");const u=3,p=this._lodMeshes[s];p.material=l;const h=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ui-1),M=r/_,d=isFinite(r)?1+Math.floor(u*M):Ui;d>Ui&&Pe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ui}`);const f=[];let v=0;for(let R=0;R<Ui;++R){const x=R/M,E=Math.exp(-x*x/2);f.push(E),R===0?v+=E:R<d&&(v+=2*E)}for(let R=0;R<f.length;R++)f[R]=f[R]/v;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=_,h.mipInt.value=b-n;const S=this._sizeLods[s],A=3*S*(s>b-pi?s-b+pi:0),w=4*(this._cubeSize-S);hs(t,A,w,3*S,2*S),c.setRenderTarget(t),c.render(p,Ws)}}function og(i){const e=[],t=[],n=[];let s=i;const r=i-pi+1+xh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-pi?c=xh[o-i+pi-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),u=-l,p=1+l,h=[u,u,p,u,p,p,u,u,p,p,u,p],m=6,_=6,M=3,d=2,f=1,v=new Float32Array(M*_*m),b=new Float32Array(d*_*m),S=new Float32Array(f*_*m);for(let w=0;w<m;w++){const R=w%3*2/3-1,x=w>2?0:-1,E=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];v.set(E,M*_*w),b.set(h,d*_*w);const V=[w,w,w,w,w,w];S.set(V,f*_*w)}const A=new Ht;A.setAttribute("position",new tn(v,M)),A.setAttribute("uv",new tn(b,d)),A.setAttribute("faceIndex",new tn(S,f)),n.push(new Z(A,null)),s>pi&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Mh(i,e,t){const n=new In(i,e,t);return n.texture.mapping=Io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ag(i,e,t){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function cg(i,e,t){const n=new Float32Array(Ui),s=new P(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fo(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Sh(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fo(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Eh(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Fo(){return`

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
	`}class ku extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Iu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Le(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:$n});r.uniforms.tEquirect.value=t;const o=new Z(s,r),a=t.minFilter;return t.minFilter===Ni&&(t.minFilter=zt),new pp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}function lg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,m=!1){return h==null?null:m?o(h):r(h)}function r(h){if(h&&h.isTexture){const m=h.mapping;if(m===qo||m===Yo)if(e.has(h)){const _=e.get(h).texture;return a(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const M=new ku(_.height);return M.fromEquirectangularTexture(i,h),e.set(h,M),h.addEventListener("dispose",l),a(M.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const m=h.mapping,_=m===qo||m===Yo,M=m===zi||m===ys;if(_||M){let d=t.get(h);const f=d!==void 0?d.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new yh(i)),d=_?n.fromEquirectangular(h,d):n.fromCubemap(h,d),d.texture.pmremVersion=h.pmremVersion,t.set(h,d),d.texture;if(d!==void 0)return d.texture;{const v=h.image;return _&&v&&v.height>0||M&&v&&c(v)?(n===null&&(n=new yh(i)),d=_?n.fromEquirectangular(h):n.fromCubemap(h),d.texture.pmremVersion=h.pmremVersion,t.set(h,d),h.addEventListener("dispose",u),d.texture):null}}}return h}function a(h,m){return m===qo?h.mapping=zi:m===Yo&&(h.mapping=ys),h}function c(h){let m=0;const _=6;for(let M=0;M<_;M++)h[M]!==void 0&&m++;return m===_}function l(h){const m=h.target;m.removeEventListener("dispose",l);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function u(h){const m=h.target;m.removeEventListener("dispose",u);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function hg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Eo("WebGLRenderer: "+n+" extension not supported."),s}}}function ug(i,e,t,n){const s={},r=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(p,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function c(p){const h=p.attributes;for(const m in h)e.update(h[m],i.ARRAY_BUFFER)}function l(p){const h=[],m=p.index,_=p.attributes.position;let M=0;if(_===void 0)return;if(m!==null){const v=m.array;M=m.version;for(let b=0,S=v.length;b<S;b+=3){const A=v[b+0],w=v[b+1],R=v[b+2];h.push(A,w,w,R,R,A)}}else{const v=_.array;M=_.version;for(let b=0,S=v.length/3-1;b<S;b+=3){const A=b+0,w=b+1,R=b+2;h.push(A,w,w,R,R,A)}}const d=new(_.count>=65535?Au:wu)(h,1);d.version=M;const f=r.get(p);f&&e.remove(f),r.set(p,d)}function u(p){const h=r.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&l(p)}else l(p);return r.get(p)}return{get:a,update:c,getWireframeAttribute:u}}function fg(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,m){i.drawElements(n,m,r,h*o),t.update(m,n,1)}function l(h,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,h*o,_),t.update(m,n,_))}function u(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,h,0,_);let d=0;for(let f=0;f<_;f++)d+=m[f];t.update(d,n,1)}function p(h,m,_,M){if(_===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h.length;f++)l(h[f]/o,m[f],M[f]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,r,h,0,M,0,_);let f=0;for(let v=0;v<_;v++)f+=m[v]*M[v];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function dg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ye("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function pg(i,e,t){const n=new WeakMap,s=new gt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==p){let V=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",V)};var m=V;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),M===!0&&(S=2),d===!0&&(S=3);let A=a.attributes.position.count*S,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*w*4*p),x=new bu(R,A,w,p);x.type=_n,x.needsUpdate=!0;const E=S*4;for(let C=0;C<p;C++){const N=f[C],B=v[C],W=b[C],k=A*w*4*C;for(let G=0;G<N.count;G++){const F=G*E;_===!0&&(s.fromBufferAttribute(N,G),R[k+F+0]=s.x,R[k+F+1]=s.y,R[k+F+2]=s.z,R[k+F+3]=0),M===!0&&(s.fromBufferAttribute(B,G),R[k+F+4]=s.x,R[k+F+5]=s.y,R[k+F+6]=s.z,R[k+F+7]=0),d===!0&&(s.fromBufferAttribute(W,G),R[k+F+8]=s.x,R[k+F+9]=s.y,R[k+F+10]=s.z,R[k+F+11]=W.itemSize===4?s.w:1)}}h={count:p,texture:x,size:new Ue(A,w)},n.set(a,h),a.addEventListener("dispose",V)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let d=0;d<l.length;d++)_+=l[d];const M=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function mg(i,e,t,n,s){let r=new WeakMap;function o(l){const u=s.render.frame,p=l.geometry,h=e.get(l,p);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const gg={[lu]:"LINEAR_TONE_MAPPING",[hu]:"REINHARD_TONE_MAPPING",[uu]:"CINEON_TONE_MAPPING",[fu]:"ACES_FILMIC_TONE_MAPPING",[pu]:"AGX_TONE_MAPPING",[mu]:"NEUTRAL_TONE_MAPPING",[du]:"CUSTOM_TONE_MAPPING"};function _g(i,e,t,n,s){const r=new In(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),o=new In(e,t,{type:jn,depthBuffer:!1,stencilBuffer:!1}),a=new Ht;a.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new yt([0,2,0,0,2,0],2));const c=new ap({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Z(a,c),u=new ll(-1,1,1,-1,0,1);let p=null,h=null,m=!1,_,M=null,d=[],f=!1;this.setSize=function(v,b){r.setSize(v,b),o.setSize(v,b);for(let S=0;S<d.length;S++){const A=d[S];A.setSize&&A.setSize(v,b)}},this.setEffects=function(v){d=v,f=d.length>0&&d[0].isRenderPass===!0;const b=r.width,S=r.height;for(let A=0;A<d.length;A++){const w=d[A];w.setSize&&w.setSize(b,S)}},this.begin=function(v,b){if(m||v.toneMapping===Ln&&d.length===0)return!1;if(M=b,b!==null){const S=b.width,A=b.height;(r.width!==S||r.height!==A)&&this.setSize(S,A)}return f===!1&&v.setRenderTarget(r),_=v.toneMapping,v.toneMapping=Ln,!0},this.hasRenderPass=function(){return f},this.end=function(v,b){v.toneMapping=_,m=!0;let S=r,A=o;for(let w=0;w<d.length;w++){const R=d[w];if(R.enabled!==!1&&(R.render(v,A,S,b),R.needsSwap!==!1)){const x=S;S=A,A=x}}if(p!==v.outputColorSpace||h!==v.toneMapping){p=v.outputColorSpace,h=v.toneMapping,c.defines={},Ke.getTransfer(p)===et&&(c.defines.SRGB_TRANSFER="");const w=gg[h];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(M),v.render(l,u),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),c.dispose()}}const zu=new Gt,Tc=new ur(1,1),Vu=new bu,Gu=new Nd,Hu=new Iu,bh=[],Th=[],wh=new Float32Array(16),Ah=new Float32Array(9),Rh=new Float32Array(4);function Ls(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=bh[s];if(r===void 0&&(r=new Float32Array(s),bh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Oo(i,e){let t=Th[e];t===void 0&&(t=new Int32Array(e),Th[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function Mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function Sg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Rh.set(n),i.uniformMatrix2fv(this.addr,!1,Rh),Pt(t,n)}}function Eg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Ah.set(n),i.uniformMatrix3fv(this.addr,!1,Ah),Pt(t,n)}}function bg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;wh.set(n),i.uniformMatrix4fv(this.addr,!1,wh),Pt(t,n)}}function Tg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function Ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function Rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function Cg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function Lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function Ig(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function Dg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tc.compareFunction=t.isReversedDepthBuffer()?el:Qc,r=Tc):r=zu,t.setTexture2D(e||r,s)}function Ug(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Gu,s)}function Ng(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Hu,s)}function Fg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Vu,s)}function Og(i){switch(i){case 5126:return xg;case 35664:return vg;case 35665:return yg;case 35666:return Mg;case 35674:return Sg;case 35675:return Eg;case 35676:return bg;case 5124:case 35670:return Tg;case 35667:case 35671:return wg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Pg;case 36295:return Lg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Fg}}function Bg(i,e){i.uniform1fv(this.addr,e)}function kg(i,e){const t=Ls(e,this.size,2);i.uniform2fv(this.addr,t)}function zg(i,e){const t=Ls(e,this.size,3);i.uniform3fv(this.addr,t)}function Vg(i,e){const t=Ls(e,this.size,4);i.uniform4fv(this.addr,t)}function Gg(i,e){const t=Ls(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Hg(i,e){const t=Ls(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Wg(i,e){const t=Ls(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Xg(i,e){i.uniform1iv(this.addr,e)}function qg(i,e){i.uniform2iv(this.addr,e)}function Yg(i,e){i.uniform3iv(this.addr,e)}function $g(i,e){i.uniform4iv(this.addr,e)}function Kg(i,e){i.uniform1uiv(this.addr,e)}function Zg(i,e){i.uniform2uiv(this.addr,e)}function jg(i,e){i.uniform3uiv(this.addr,e)}function Jg(i,e){i.uniform4uiv(this.addr,e)}function Qg(i,e,t){const n=this.cache,s=e.length,r=Oo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Tc:o=zu;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function e_(i,e,t){const n=this.cache,s=e.length,r=Oo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Gu,r[o])}function t_(i,e,t){const n=this.cache,s=e.length,r=Oo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Hu,r[o])}function n_(i,e,t){const n=this.cache,s=e.length,r=Oo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Vu,r[o])}function i_(i){switch(i){case 5126:return Bg;case 35664:return kg;case 35665:return zg;case 35666:return Vg;case 35674:return Gg;case 35675:return Hg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return $g;case 5125:return Kg;case 36294:return Zg;case 36295:return jg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return n_}}class s_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Og(t.type)}}class r_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=i_(t.type)}}class o_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ea=/(\w+)(\])?(\[|\.)?/g;function Ch(i,e){i.seq.push(e),i.map[e.id]=e}function a_(i,e,t){const n=i.name,s=n.length;for(Ea.lastIndex=0;;){const r=Ea.exec(n),o=Ea.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ch(t,l===void 0?new s_(a,i,e):new r_(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new o_(a),Ch(t,p)),t=p}}}class lo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);a_(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Ph(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const c_=37297;let l_=0;function h_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Lh=new Oe;function u_(i){Ke._getMatrix(Lh,Ke.workingColorSpace,i);const e=`mat3( ${Lh.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case yo:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ih(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+h_(i.getShaderSource(e),a)}else return r}function f_(i,e){const t=u_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const d_={[lu]:"Linear",[hu]:"Reinhard",[uu]:"Cineon",[fu]:"ACESFilmic",[pu]:"AgX",[mu]:"Neutral",[du]:"Custom"};function p_(i,e){const t=d_[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $r=new P;function m_(){Ke.getLuminanceCoefficients($r);const i=$r.x.toFixed(4),e=$r.y.toFixed(4),t=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function __(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function x_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Qs(i){return i!==""}function Dh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v_=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(i){return i.replace(v_,M_)}const y_=new Map;function M_(i,e){let t=ze[e];if(t===void 0){const n=y_.get(e);if(n!==void 0)t=ze[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wc(t)}const S_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(i){return i.replace(S_,E_)}function E_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const b_={[so]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function T_(i){return b_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const w_={[zi]:"ENVMAP_TYPE_CUBE",[ys]:"ENVMAP_TYPE_CUBE",[Io]:"ENVMAP_TYPE_CUBE_UV"};function A_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":w_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const R_={[ys]:"ENVMAP_MODE_REFRACTION"};function C_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":R_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const P_={[Wc]:"ENVMAP_BLENDING_MULTIPLY",[Qf]:"ENVMAP_BLENDING_MIX",[ed]:"ENVMAP_BLENDING_ADD"};function L_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":P_[i.combine]||"ENVMAP_BLENDING_NONE"}function I_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function D_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=T_(t),l=A_(t),u=C_(t),p=L_(t),h=I_(t),m=g_(t),_=__(r),M=s.createProgram();let d,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Qs).join(`
`),d.length>0&&(d+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Qs).join(`
`),f.length>0&&(f+=`
`)):(d=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),f=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?ze.tonemapping_pars_fragment:"",t.toneMapping!==Ln?p_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,f_("linearToOutputTexel",t.outputColorSpace),m_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),o=wc(o),o=Dh(o,t),o=Uh(o,t),a=wc(a),a=Dh(a,t),a=Uh(a,t),o=Nh(o),a=Nh(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["#define varying in",t.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=v+d+o,S=v+f+a,A=Ph(s,s.VERTEX_SHADER,b),w=Ph(s,s.FRAGMENT_SHADER,S);s.attachShader(M,A),s.attachShader(M,w),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(C){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(M)||"",B=s.getShaderInfoLog(A)||"",W=s.getShaderInfoLog(w)||"",k=N.trim(),G=B.trim(),F=W.trim();let ee=!0,j=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,A,w);else{const he=Ih(s,A,"vertex"),me=Ih(s,w,"fragment");Ye("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+he+`
`+me)}else k!==""?Pe("WebGLProgram: Program Info Log:",k):(G===""||F==="")&&(j=!1);j&&(C.diagnostics={runnable:ee,programLog:k,vertexShader:{log:G,prefix:d},fragmentShader:{log:F,prefix:f}})}s.deleteShader(A),s.deleteShader(w),x=new lo(s,M),E=x_(s,M)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(M,c_)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=l_++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=w,this}let U_=0;class N_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new F_(e),t.set(e,n)),n}}class F_{constructor(e){this.id=U_++,this.code=e,this.usedTimes=0}}function O_(i,e,t,n,s,r){const o=new il,a=new N_,c=new Set,l=[],u=new Map,p=n.logarithmicDepthBuffer;let h=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function M(x,E,V,C,N){const B=C.fog,W=N.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=e.get(x.envMap||k,G),ee=F&&F.mapping===Io?F.image.height:null,j=m[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Pe("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const he=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,me=he!==void 0?he.length:0;let fe=0;W.morphAttributes.position!==void 0&&(fe=1),W.morphAttributes.normal!==void 0&&(fe=2),W.morphAttributes.color!==void 0&&(fe=3);let ke,dt,ft,$;if(j){const Qe=En[j];ke=Qe.vertexShader,dt=Qe.fragmentShader}else ke=x.vertexShader,dt=x.fragmentShader,a.update(x),ft=a.getVertexShaderID(x),$=a.getFragmentShaderID(x);const ie=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),Fe=N.isInstancedMesh===!0,Ae=N.isBatchedMesh===!0,Ie=!!x.map,Lt=!!x.matcap,$e=!!F,Je=!!x.aoMap,at=!!x.lightMap,Ve=!!x.bumpMap,_t=!!x.normalMap,L=!!x.displacementMap,Mt=!!x.emissiveMap,je=!!x.metalnessMap,ht=!!x.roughnessMap,Me=x.anisotropy>0,T=x.clearcoat>0,g=x.dispersion>0,D=x.iridescence>0,Y=x.sheen>0,K=x.transmission>0,q=Me&&!!x.anisotropyMap,ge=T&&!!x.clearcoatMap,se=T&&!!x.clearcoatNormalMap,we=T&&!!x.clearcoatRoughnessMap,Re=D&&!!x.iridescenceMap,J=D&&!!x.iridescenceThicknessMap,te=Y&&!!x.sheenColorMap,_e=Y&&!!x.sheenRoughnessMap,ve=!!x.specularMap,ue=!!x.specularColorMap,Ge=!!x.specularIntensityMap,I=K&&!!x.transmissionMap,re=K&&!!x.thicknessMap,ne=!!x.gradientMap,pe=!!x.alphaMap,Q=x.alphaTest>0,X=!!x.alphaHash,xe=!!x.extensions;let De=Ln;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(De=i.toneMapping);const ut={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:ke,fragmentShader:dt,defines:x.defines,customVertexShaderID:ft,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Ae,batchingColor:Ae&&N._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&N.instanceColor!==null,instancingMorph:Fe&&N.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ss,alphaToCoverage:!!x.alphaToCoverage,map:Ie,matcap:Lt,envMap:$e,envMapMode:$e&&F.mapping,envMapCubeUVHeight:ee,aoMap:Je,lightMap:at,bumpMap:Ve,normalMap:_t,displacementMap:L,emissiveMap:Mt,normalMapObjectSpace:_t&&x.normalMapType===id,normalMapTangentSpace:_t&&x.normalMapType===Jc,metalnessMap:je,roughnessMap:ht,anisotropy:Me,anisotropyMap:q,clearcoat:T,clearcoatMap:ge,clearcoatNormalMap:se,clearcoatRoughnessMap:we,dispersion:g,iridescence:D,iridescenceMap:Re,iridescenceThicknessMap:J,sheen:Y,sheenColorMap:te,sheenRoughnessMap:_e,specularMap:ve,specularColorMap:ue,specularIntensityMap:Ge,transmission:K,transmissionMap:I,thicknessMap:re,gradientMap:ne,opaque:x.transparent===!1&&x.blending===Bi&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:Q,alphaHash:X,combine:x.combine,mapUv:Ie&&_(x.map.channel),aoMapUv:Je&&_(x.aoMap.channel),lightMapUv:at&&_(x.lightMap.channel),bumpMapUv:Ve&&_(x.bumpMap.channel),normalMapUv:_t&&_(x.normalMap.channel),displacementMapUv:L&&_(x.displacementMap.channel),emissiveMapUv:Mt&&_(x.emissiveMap.channel),metalnessMapUv:je&&_(x.metalnessMap.channel),roughnessMapUv:ht&&_(x.roughnessMap.channel),anisotropyMapUv:q&&_(x.anisotropyMap.channel),clearcoatMapUv:ge&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:te&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(x.sheenRoughnessMap.channel),specularMapUv:ve&&_(x.specularMap.channel),specularColorMapUv:ue&&_(x.specularColorMap.channel),specularIntensityMapUv:Ge&&_(x.specularIntensityMap.channel),transmissionMapUv:I&&_(x.transmissionMap.channel),thicknessMapUv:re&&_(x.thicknessMap.channel),alphaMapUv:pe&&_(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(_t||Me),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(Ie||pe),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&_t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:oe,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:fe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:Ie&&x.map.isVideoTexture===!0&&Ke.getTransfer(x.map.colorSpace)===et,decodeVideoTextureEmissive:Mt&&x.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(x.emissiveMap.colorSpace)===et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===qn,flipSided:x.side===Yt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&x.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function d(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const V in x.defines)E.push(V),E.push(x.defines[V]);return x.isRawShaderMaterial===!1&&(f(E,x),v(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function f(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function v(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),x.push(o.mask)}function b(x){const E=m[x.type];let V;if(E){const C=En[E];V=sp.clone(C.uniforms)}else V=x.uniforms;return V}function S(x,E){let V=u.get(E);return V!==void 0?++V.usedTimes:(V=new D_(i,E,x,s),l.push(V),u.set(E,V)),V}function A(x){if(--x.usedTimes===0){const E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function R(){a.dispose()}return{getParameters:M,getProgramCacheKey:d,getUniforms:b,acquireProgram:S,releaseProgram:A,releaseShaderCache:w,programs:l,dispose:R}}function B_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function k_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Oh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function a(h,m,_,M,d,f){let v=i[e];return v===void 0?(v={id:h.id,object:h,geometry:m,material:_,materialVariant:o(h),groupOrder:M,renderOrder:h.renderOrder,z:d,group:f},i[e]=v):(v.id=h.id,v.object=h,v.geometry=m,v.material=_,v.materialVariant=o(h),v.groupOrder=M,v.renderOrder=h.renderOrder,v.z=d,v.group=f),e++,v}function c(h,m,_,M,d,f){const v=a(h,m,_,M,d,f);_.transmission>0?n.push(v):_.transparent===!0?s.push(v):t.push(v)}function l(h,m,_,M,d,f){const v=a(h,m,_,M,d,f);_.transmission>0?n.unshift(v):_.transparent===!0?s.unshift(v):t.unshift(v)}function u(h,m){t.length>1&&t.sort(h||k_),n.length>1&&n.sort(m||Oh),s.length>1&&s.sort(m||Oh)}function p(){for(let h=e,m=i.length;h<m;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:u}}function z_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Bh,i.set(n,[o])):s>=r.length?(o=new Bh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function V_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new We};break;case"SpotLight":t={position:new P,direction:new P,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function G_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let H_=0;function W_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function X_(i){const e=new V_,t=G_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new ot,o=new ot;function a(l){let u=0,p=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,_=0,M=0,d=0,f=0,v=0,b=0,S=0,A=0,w=0,R=0;l.sort(W_);for(let E=0,V=l.length;E<V;E++){const C=l[E],N=C.color,B=C.intensity,W=C.distance;let k=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ms?k=C.shadow.map.texture:k=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=N.r*B,p+=N.g*B,h+=N.b*B;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],B);R++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const F=C.shadow,ee=t.get(C);ee.shadowIntensity=F.intensity,ee.shadowBias=F.bias,ee.shadowNormalBias=F.normalBias,ee.shadowRadius=F.radius,ee.shadowMapSize=F.mapSize,n.directionalShadow[m]=ee,n.directionalShadowMap[m]=k,n.directionalShadowMatrix[m]=C.shadow.matrix,v++}n.directional[m]=G,m++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(N).multiplyScalar(B),G.distance=W,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[M]=G;const F=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,F.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[M]=F.matrix,C.castShadow){const ee=t.get(C);ee.shadowIntensity=F.intensity,ee.shadowBias=F.bias,ee.shadowNormalBias=F.normalBias,ee.shadowRadius=F.radius,ee.shadowMapSize=F.mapSize,n.spotShadow[M]=ee,n.spotShadowMap[M]=k,S++}M++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(N).multiplyScalar(B),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[d]=G,d++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const F=C.shadow,ee=t.get(C);ee.shadowIntensity=F.intensity,ee.shadowBias=F.bias,ee.shadowNormalBias=F.normalBias,ee.shadowRadius=F.radius,ee.shadowMapSize=F.mapSize,ee.shadowCameraNear=F.camera.near,ee.shadowCameraFar=F.camera.far,n.pointShadow[_]=ee,n.pointShadowMap[_]=k,n.pointShadowMatrix[_]=C.shadow.matrix,b++}n.point[_]=G,_++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(B),G.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[f]=G,f++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==m||x.pointLength!==_||x.spotLength!==M||x.rectAreaLength!==d||x.hemiLength!==f||x.numDirectionalShadows!==v||x.numPointShadows!==b||x.numSpotShadows!==S||x.numSpotMaps!==A||x.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=d,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,x.directionalLength=m,x.pointLength=_,x.spotLength=M,x.rectAreaLength=d,x.hemiLength=f,x.numDirectionalShadows=v,x.numPointShadows=b,x.numSpotShadows=S,x.numSpotMaps=A,x.numLightProbes=R,n.version=H_++)}function c(l,u){let p=0,h=0,m=0,_=0,M=0;const d=u.matrixWorldInverse;for(let f=0,v=l.length;f<v;f++){const b=l[f];if(b.isDirectionalLight){const S=n.directional[p];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),p++}else if(b.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),m++}else if(b.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(d),o.identity(),r.copy(b.matrixWorld),r.premultiply(d),o.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(d),h++}else if(b.isHemisphereLight){const S=n.hemi[M];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(d),M++}}}return{setup:a,setupView:c,state:n}}function kh(i){const e=new X_(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function q_(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new kh(i),e.set(s,[a])):r>=o.length?(a=new kh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,K_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Z_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],zh=new ot,Xs=new P,ba=new P;function j_(i,e,t){let n=new ol;const s=new Ue,r=new Ue,o=new gt,a=new cp,c=new lp,l={},u=t.maxTextureSize,p={[xi]:Yt,[Yt]:xi,[qn]:qn},h=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Y_,fragmentShader:$_}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ht;_.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Z(_,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=so;let f=this.type;this.render=function(w,R,x){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;this.type===Uf&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=so);const E=i.getRenderTarget(),V=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending($n),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=f!==this.type;B&&R.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(k=>k.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,k=w.length;W<k;W++){const G=w[W],F=G.shadow;if(F===void 0){Pe("WebGLShadowMap:",G,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const ee=F.getFrameExtents();s.multiply(ee),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,F.mapSize.y=r.y));const j=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=j,F.map===null||B===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===js){if(G.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new In(s.x,s.y,{format:Ms,type:jn,minFilter:zt,magFilter:zt,generateMipmaps:!1}),F.map.texture.name=G.name+".shadowMap",F.map.depthTexture=new ur(s.x,s.y,_n),F.map.depthTexture.name=G.name+".shadowMapDepth",F.map.depthTexture.format=Jn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ft,F.map.depthTexture.magFilter=Ft}else G.isPointLight?(F.map=new ku(s.x),F.map.depthTexture=new np(s.x,Un)):(F.map=new In(s.x,s.y),F.map.depthTexture=new ur(s.x,s.y,Un)),F.map.depthTexture.name=G.name+".shadowMap",F.map.depthTexture.format=Jn,this.type===so?(F.map.depthTexture.compareFunction=j?el:Qc,F.map.depthTexture.minFilter=zt,F.map.depthTexture.magFilter=zt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ft,F.map.depthTexture.magFilter=Ft);F.camera.updateProjectionMatrix()}const he=F.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<he;me++){if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,me),i.clear();else{me===0&&(i.setRenderTarget(F.map),i.clear());const fe=F.getViewport(me);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),N.viewport(o)}if(G.isPointLight){const fe=F.camera,ke=F.matrix,dt=G.distance||fe.far;dt!==fe.far&&(fe.far=dt,fe.updateProjectionMatrix()),Xs.setFromMatrixPosition(G.matrixWorld),fe.position.copy(Xs),ba.copy(fe.position),ba.add(K_[me]),fe.up.copy(Z_[me]),fe.lookAt(ba),fe.updateMatrixWorld(),ke.makeTranslation(-Xs.x,-Xs.y,-Xs.z),zh.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),F._frustum.setFromProjectionMatrix(zh,fe.coordinateSystem,fe.reversedDepth)}else F.updateMatrices(G);n=F.getFrustum(),S(R,x,F.camera,G,this.type)}F.isPointLightShadow!==!0&&this.type===js&&v(F,x),F.needsUpdate=!1}f=this.type,d.needsUpdate=!1,i.setRenderTarget(E,V,C)};function v(w,R){const x=e.update(M);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new In(s.x,s.y,{format:Ms,type:jn})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,x,h,M,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,x,m,M,null)}function b(w,R,x,E){let V=null;const C=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)V=C;else if(V=x.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=V.uuid,B=R.uuid;let W=l[N];W===void 0&&(W={},l[N]=W);let k=W[B];k===void 0&&(k=V.clone(),W[B]=k,R.addEventListener("dispose",A)),V=k}if(V.visible=R.visible,V.wireframe=R.wireframe,E===js?V.side=R.shadowSide!==null?R.shadowSide:R.side:V.side=R.shadowSide!==null?R.shadowSide:p[R.side],V.alphaMap=R.alphaMap,V.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,V.map=R.map,V.clipShadows=R.clipShadows,V.clippingPlanes=R.clippingPlanes,V.clipIntersection=R.clipIntersection,V.displacementMap=R.displacementMap,V.displacementScale=R.displacementScale,V.displacementBias=R.displacementBias,V.wireframeLinewidth=R.wireframeLinewidth,V.linewidth=R.linewidth,x.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const N=i.properties.get(V);N.light=x}return V}function S(w,R,x,E,V){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&V===js)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const B=e.update(w),W=w.material;if(Array.isArray(W)){const k=B.groups;for(let G=0,F=k.length;G<F;G++){const ee=k[G],j=W[ee.materialIndex];if(j&&j.visible){const he=b(w,j,E,V);w.onBeforeShadow(i,w,R,x,B,he,ee),i.renderBufferDirect(x,null,B,he,w,ee),w.onAfterShadow(i,w,R,x,B,he,ee)}}}else if(W.visible){const k=b(w,W,E,V);w.onBeforeShadow(i,w,R,x,B,k,null),i.renderBufferDirect(x,null,B,k,w,null),w.onAfterShadow(i,w,R,x,B,k,null)}}const N=w.children;for(let B=0,W=N.length;B<W;B++)S(N[B],R,x,E,V)}function A(w){w.target.removeEventListener("dispose",A);for(const x in l){const E=l[x],V=w.target.uuid;V in E&&(E[V].dispose(),delete E[V])}}}function J_(i,e){function t(){let I=!1;const re=new gt;let ne=null;const pe=new gt(0,0,0,0);return{setMask:function(Q){ne!==Q&&!I&&(i.colorMask(Q,Q,Q,Q),ne=Q)},setLocked:function(Q){I=Q},setClear:function(Q,X,xe,De,ut){ut===!0&&(Q*=De,X*=De,xe*=De),re.set(Q,X,xe,De),pe.equals(re)===!1&&(i.clearColor(Q,X,xe,De),pe.copy(re))},reset:function(){I=!1,ne=null,pe.set(-1,0,0,0)}}}function n(){let I=!1,re=!1,ne=null,pe=null,Q=null;return{setReversed:function(X){if(re!==X){const xe=e.get("EXT_clip_control");X?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),re=X;const De=Q;Q=null,this.setClear(De)}},getReversed:function(){return re},setTest:function(X){X?ie(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(X){ne!==X&&!I&&(i.depthMask(X),ne=X)},setFunc:function(X){if(re&&(X=dd[X]),pe!==X){switch(X){case Na:i.depthFunc(i.NEVER);break;case Fa:i.depthFunc(i.ALWAYS);break;case Oa:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case Ba:i.depthFunc(i.EQUAL);break;case ka:i.depthFunc(i.GEQUAL);break;case za:i.depthFunc(i.GREATER);break;case Va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=X}},setLocked:function(X){I=X},setClear:function(X){Q!==X&&(Q=X,re&&(X=1-X),i.clearDepth(X))},reset:function(){I=!1,ne=null,pe=null,Q=null,re=!1}}}function s(){let I=!1,re=null,ne=null,pe=null,Q=null,X=null,xe=null,De=null,ut=null;return{setTest:function(Qe){I||(Qe?ie(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(Qe){re!==Qe&&!I&&(i.stencilMask(Qe),re=Qe)},setFunc:function(Qe,Bn,kn){(ne!==Qe||pe!==Bn||Q!==kn)&&(i.stencilFunc(Qe,Bn,kn),ne=Qe,pe=Bn,Q=kn)},setOp:function(Qe,Bn,kn){(X!==Qe||xe!==Bn||De!==kn)&&(i.stencilOp(Qe,Bn,kn),X=Qe,xe=Bn,De=kn)},setLocked:function(Qe){I=Qe},setClear:function(Qe){ut!==Qe&&(i.clearStencil(Qe),ut=Qe)},reset:function(){I=!1,re=null,ne=null,pe=null,Q=null,X=null,xe=null,De=null,ut=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},p={},h=new WeakMap,m=[],_=null,M=!1,d=null,f=null,v=null,b=null,S=null,A=null,w=null,R=new We(0,0,0),x=0,E=!1,V=null,C=null,N=null,B=null,W=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,F=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(ee)[1]),G=F>=1):ee.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),G=F>=2);let j=null,he={};const me=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),ke=new gt().fromArray(me),dt=new gt().fromArray(fe);function ft(I,re,ne,pe){const Q=new Uint8Array(4),X=i.createTexture();i.bindTexture(I,X),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xe=0;xe<ne;xe++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(re+xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return X}const $={};$[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(i.DEPTH_TEST),o.setFunc(vs),Ve(!1),_t(Ol),ie(i.CULL_FACE),Je($n);function ie(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function oe(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Fe(I,re){return p[I]!==re?(i.bindFramebuffer(I,re),p[I]=re,I===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=re),I===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Ae(I,re){let ne=m,pe=!1;if(I){ne=h.get(re),ne===void 0&&(ne=[],h.set(re,ne));const Q=I.textures;if(ne.length!==Q.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let X=0,xe=Q.length;X<xe;X++)ne[X]=i.COLOR_ATTACHMENT0+X;ne.length=Q.length,pe=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,pe=!0);pe&&i.drawBuffers(ne)}function Ie(I){return _!==I?(i.useProgram(I),_=I,!0):!1}const Lt={[Di]:i.FUNC_ADD,[Ff]:i.FUNC_SUBTRACT,[Of]:i.FUNC_REVERSE_SUBTRACT};Lt[Bf]=i.MIN,Lt[kf]=i.MAX;const $e={[zf]:i.ZERO,[Vf]:i.ONE,[Gf]:i.SRC_COLOR,[Da]:i.SRC_ALPHA,[$f]:i.SRC_ALPHA_SATURATE,[qf]:i.DST_COLOR,[Wf]:i.DST_ALPHA,[Hf]:i.ONE_MINUS_SRC_COLOR,[Ua]:i.ONE_MINUS_SRC_ALPHA,[Yf]:i.ONE_MINUS_DST_COLOR,[Xf]:i.ONE_MINUS_DST_ALPHA,[Kf]:i.CONSTANT_COLOR,[Zf]:i.ONE_MINUS_CONSTANT_COLOR,[jf]:i.CONSTANT_ALPHA,[Jf]:i.ONE_MINUS_CONSTANT_ALPHA};function Je(I,re,ne,pe,Q,X,xe,De,ut,Qe){if(I===$n){M===!0&&(oe(i.BLEND),M=!1);return}if(M===!1&&(ie(i.BLEND),M=!0),I!==Nf){if(I!==d||Qe!==E){if((f!==Di||S!==Di)&&(i.blendEquation(i.FUNC_ADD),f=Di,S=Di),Qe)switch(I){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vo:i.blendFunc(i.ONE,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",I);break}else switch(I){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bl:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kl:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",I);break}v=null,b=null,A=null,w=null,R.set(0,0,0),x=0,d=I,E=Qe}return}Q=Q||re,X=X||ne,xe=xe||pe,(re!==f||Q!==S)&&(i.blendEquationSeparate(Lt[re],Lt[Q]),f=re,S=Q),(ne!==v||pe!==b||X!==A||xe!==w)&&(i.blendFuncSeparate($e[ne],$e[pe],$e[X],$e[xe]),v=ne,b=pe,A=X,w=xe),(De.equals(R)===!1||ut!==x)&&(i.blendColor(De.r,De.g,De.b,ut),R.copy(De),x=ut),d=I,E=!1}function at(I,re){I.side===qn?oe(i.CULL_FACE):ie(i.CULL_FACE);let ne=I.side===Yt;re&&(ne=!ne),Ve(ne),I.blending===Bi&&I.transparent===!1?Je($n):Je(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const pe=I.stencilWrite;a.setTest(pe),pe&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Mt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(I){V!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),V=I)}function _t(I){I!==If?(ie(i.CULL_FACE),I!==C&&(I===Ol?i.cullFace(i.BACK):I===Df?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),C=I}function L(I){I!==N&&(G&&i.lineWidth(I),N=I)}function Mt(I,re,ne){I?(ie(i.POLYGON_OFFSET_FILL),(B!==re||W!==ne)&&(B=re,W=ne,o.getReversed()&&(re=-re),i.polygonOffset(re,ne))):oe(i.POLYGON_OFFSET_FILL)}function je(I){I?ie(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function ht(I){I===void 0&&(I=i.TEXTURE0+k-1),j!==I&&(i.activeTexture(I),j=I)}function Me(I,re,ne){ne===void 0&&(j===null?ne=i.TEXTURE0+k-1:ne=j);let pe=he[ne];pe===void 0&&(pe={type:void 0,texture:void 0},he[ne]=pe),(pe.type!==I||pe.texture!==re)&&(j!==ne&&(i.activeTexture(ne),j=ne),i.bindTexture(I,re||$[I]),pe.type=I,pe.texture=re)}function T(){const I=he[j];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(I){Ye("WebGLState:",I)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(I){Ye("WebGLState:",I)}}function Y(){try{i.texSubImage2D(...arguments)}catch(I){Ye("WebGLState:",I)}}function K(){try{i.texSubImage3D(...arguments)}catch(I){Ye("WebGLState:",I)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Ye("WebGLState:",I)}}function ge(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Ye("WebGLState:",I)}}function se(){try{i.texStorage2D(...arguments)}catch(I){Ye("WebGLState:",I)}}function we(){try{i.texStorage3D(...arguments)}catch(I){Ye("WebGLState:",I)}}function Re(){try{i.texImage2D(...arguments)}catch(I){Ye("WebGLState:",I)}}function J(){try{i.texImage3D(...arguments)}catch(I){Ye("WebGLState:",I)}}function te(I){ke.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ke.copy(I))}function _e(I){dt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),dt.copy(I))}function ve(I,re){let ne=l.get(re);ne===void 0&&(ne=new WeakMap,l.set(re,ne));let pe=ne.get(I);pe===void 0&&(pe=i.getUniformBlockIndex(re,I.name),ne.set(I,pe))}function ue(I,re){const pe=l.get(re).get(I);c.get(re)!==pe&&(i.uniformBlockBinding(re,pe,I.__bindingPointIndex),c.set(re,pe))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,he={},p={},h=new WeakMap,m=[],_=null,M=!1,d=null,f=null,v=null,b=null,S=null,A=null,w=null,R=new We(0,0,0),x=0,E=!1,V=null,C=null,N=null,B=null,W=null,ke.set(0,0,i.canvas.width,i.canvas.height),dt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:oe,bindFramebuffer:Fe,drawBuffers:Ae,useProgram:Ie,setBlending:Je,setMaterial:at,setFlipSided:Ve,setCullFace:_t,setLineWidth:L,setPolygonOffset:Mt,setScissorTest:je,activeTexture:ht,bindTexture:Me,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:D,texImage2D:Re,texImage3D:J,updateUBOMapping:ve,uniformBlockBinding:ue,texStorage2D:se,texStorage3D:we,texSubImage2D:Y,texSubImage3D:K,compressedTexSubImage2D:q,compressedTexSubImage3D:ge,scissor:te,viewport:_e,reset:Ge}}function Q_(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ue,u=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return m?new OffscreenCanvas(T,g):Mo("canvas")}function M(T,g,D){let Y=1;const K=Me(T);if((K.width>D||K.height>D)&&(Y=D/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(Y*K.width),ge=Math.floor(Y*K.height);p===void 0&&(p=_(q,ge));const se=g?_(q,ge):p;return se.width=q,se.height=ge,se.getContext("2d").drawImage(T,0,0,q,ge),Pe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+ge+")."),se}else return"data"in T&&Pe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function d(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,g,D,Y,K=!1){if(T!==null){if(i[T]!==void 0)return i[T];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=g;if(g===i.RED&&(D===i.FLOAT&&(q=i.R32F),D===i.HALF_FLOAT&&(q=i.R16F),D===i.UNSIGNED_BYTE&&(q=i.R8)),g===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(q=i.R8UI),D===i.UNSIGNED_SHORT&&(q=i.R16UI),D===i.UNSIGNED_INT&&(q=i.R32UI),D===i.BYTE&&(q=i.R8I),D===i.SHORT&&(q=i.R16I),D===i.INT&&(q=i.R32I)),g===i.RG&&(D===i.FLOAT&&(q=i.RG32F),D===i.HALF_FLOAT&&(q=i.RG16F),D===i.UNSIGNED_BYTE&&(q=i.RG8)),g===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(q=i.RG8UI),D===i.UNSIGNED_SHORT&&(q=i.RG16UI),D===i.UNSIGNED_INT&&(q=i.RG32UI),D===i.BYTE&&(q=i.RG8I),D===i.SHORT&&(q=i.RG16I),D===i.INT&&(q=i.RG32I)),g===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(q=i.RGB8UI),D===i.UNSIGNED_SHORT&&(q=i.RGB16UI),D===i.UNSIGNED_INT&&(q=i.RGB32UI),D===i.BYTE&&(q=i.RGB8I),D===i.SHORT&&(q=i.RGB16I),D===i.INT&&(q=i.RGB32I)),g===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),D===i.UNSIGNED_INT&&(q=i.RGBA32UI),D===i.BYTE&&(q=i.RGBA8I),D===i.SHORT&&(q=i.RGBA16I),D===i.INT&&(q=i.RGBA32I)),g===i.RGB&&(D===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),g===i.RGBA){const ge=K?yo:Ke.getTransfer(Y);D===i.FLOAT&&(q=i.RGBA32F),D===i.HALF_FLOAT&&(q=i.RGBA16F),D===i.UNSIGNED_BYTE&&(q=ge===et?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(T,g){let D;return T?g===null||g===Un||g===cr?D=i.DEPTH24_STENCIL8:g===_n?D=i.DEPTH32F_STENCIL8:g===ar&&(D=i.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Un||g===cr?D=i.DEPTH_COMPONENT24:g===_n?D=i.DEPTH_COMPONENT32F:g===ar&&(D=i.DEPTH_COMPONENT16),D}function A(T,g){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ft&&T.minFilter!==zt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function w(T){const g=T.target;g.removeEventListener("dispose",w),x(g),g.isVideoTexture&&u.delete(g)}function R(T){const g=T.target;g.removeEventListener("dispose",R),V(g)}function x(T){const g=n.get(T);if(g.__webglInit===void 0)return;const D=T.source,Y=h.get(D);if(Y){const K=Y[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(T),Object.keys(Y).length===0&&h.delete(D)}n.remove(T)}function E(T){const g=n.get(T);i.deleteTexture(g.__webglTexture);const D=T.source,Y=h.get(D);delete Y[g.__cacheKey],o.memory.textures--}function V(T){const g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let K=0;K<g.__webglFramebuffer[Y].length;K++)i.deleteFramebuffer(g.__webglFramebuffer[Y][K]);else i.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[Y]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const D=T.textures;for(let Y=0,K=D.length;Y<K;Y++){const q=n.get(D[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(D[Y])}n.remove(T)}let C=0;function N(){C=0}function B(){const T=C;return T>=s.maxTextures&&Pe("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function W(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function k(T,g){const D=n.get(T);if(T.isVideoTexture&&je(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&D.__version!==T.version){const Y=T.image;if(Y===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{$(D,T,g);return}}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+g)}function G(T,g){const D=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){$(D,T,g);return}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+g)}function F(T,g){const D=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){$(D,T,g);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+g)}function ee(T,g){const D=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&D.__version!==T.version){ie(D,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+g)}const j={[Ga]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},he={[Ft]:i.NEAREST,[td]:i.NEAREST_MIPMAP_NEAREST,[Mr]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[$o]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},me={[sd]:i.NEVER,[ld]:i.ALWAYS,[rd]:i.LESS,[Qc]:i.LEQUAL,[od]:i.EQUAL,[el]:i.GEQUAL,[ad]:i.GREATER,[cd]:i.NOTEQUAL};function fe(T,g){if(g.type===_n&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===zt||g.magFilter===$o||g.magFilter===Mr||g.magFilter===Ni||g.minFilter===zt||g.minFilter===$o||g.minFilter===Mr||g.minFilter===Ni)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,j[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,j[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,j[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,he[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,he[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ft||g.minFilter!==Mr&&g.minFilter!==Ni||g.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function ke(T,g){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",w));const Y=g.source;let K=h.get(Y);K===void 0&&(K={},h.set(Y,K));const q=W(g);if(q!==T.__cacheKey){K[q]===void 0&&(K[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,D=!0),K[q].usedTimes++;const ge=K[T.__cacheKey];ge!==void 0&&(K[T.__cacheKey].usedTimes--,ge.usedTimes===0&&E(g)),T.__cacheKey=q,T.__webglTexture=K[q].texture}return D}function dt(T,g,D){return Math.floor(Math.floor(T/D)/g)}function ft(T,g,D,Y){const q=T.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,D,Y,g.data);else{q.sort((J,te)=>J.start-te.start);let ge=0;for(let J=1;J<q.length;J++){const te=q[ge],_e=q[J],ve=te.start+te.count,ue=dt(_e.start,g.width,4),Ge=dt(te.start,g.width,4);_e.start<=ve+1&&ue===Ge&&dt(_e.start+_e.count-1,g.width,4)===ue?te.count=Math.max(te.count,_e.start+_e.count-te.start):(++ge,q[ge]=_e)}q.length=ge+1;const se=i.getParameter(i.UNPACK_ROW_LENGTH),we=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let J=0,te=q.length;J<te;J++){const _e=q[J],ve=Math.floor(_e.start/4),ue=Math.ceil(_e.count/4),Ge=ve%g.width,I=Math.floor(ve/g.width),re=ue,ne=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Ge,I,re,ne,D,Y,g.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,we),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function $(T,g,D){let Y=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=i.TEXTURE_3D);const K=ke(T,g),q=g.source;t.bindTexture(Y,T.__webglTexture,i.TEXTURE0+D);const ge=n.get(q);if(q.version!==ge.__version||K===!0){t.activeTexture(i.TEXTURE0+D);const se=Ke.getPrimaries(Ke.workingColorSpace),we=g.colorSpace===di?null:Ke.getPrimaries(g.colorSpace),Re=g.colorSpace===di||se===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let J=M(g.image,!1,s.maxTextureSize);J=ht(g,J);const te=r.convert(g.format,g.colorSpace),_e=r.convert(g.type);let ve=b(g.internalFormat,te,_e,g.colorSpace,g.isVideoTexture);fe(Y,g);let ue;const Ge=g.mipmaps,I=g.isVideoTexture!==!0,re=ge.__version===void 0||K===!0,ne=q.dataReady,pe=A(g,J);if(g.isDepthTexture)ve=S(g.format===Fi,g.type),re&&(I?t.texStorage2D(i.TEXTURE_2D,1,ve,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,ve,J.width,J.height,0,te,_e,null));else if(g.isDataTexture)if(Ge.length>0){I&&re&&t.texStorage2D(i.TEXTURE_2D,pe,ve,Ge[0].width,Ge[0].height);for(let Q=0,X=Ge.length;Q<X;Q++)ue=Ge[Q],I?ne&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ue.width,ue.height,te,_e,ue.data):t.texImage2D(i.TEXTURE_2D,Q,ve,ue.width,ue.height,0,te,_e,ue.data);g.generateMipmaps=!1}else I?(re&&t.texStorage2D(i.TEXTURE_2D,pe,ve,J.width,J.height),ne&&ft(g,J,te,_e)):t.texImage2D(i.TEXTURE_2D,0,ve,J.width,J.height,0,te,_e,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){I&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ve,Ge[0].width,Ge[0].height,J.depth);for(let Q=0,X=Ge.length;Q<X;Q++)if(ue=Ge[Q],g.format!==xn)if(te!==null)if(I){if(ne)if(g.layerUpdates.size>0){const xe=_h(ue.width,ue.height,g.format,g.type);for(const De of g.layerUpdates){const ut=ue.data.subarray(De*xe/ue.data.BYTES_PER_ELEMENT,(De+1)*xe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,De,ue.width,ue.height,1,te,ut)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ue.width,ue.height,J.depth,te,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,ve,ue.width,ue.height,J.depth,0,ue.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ne&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ue.width,ue.height,J.depth,te,_e,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,ve,ue.width,ue.height,J.depth,0,te,_e,ue.data)}else{I&&re&&t.texStorage2D(i.TEXTURE_2D,pe,ve,Ge[0].width,Ge[0].height);for(let Q=0,X=Ge.length;Q<X;Q++)ue=Ge[Q],g.format!==xn?te!==null?I?ne&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ue.width,ue.height,te,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,ve,ue.width,ue.height,0,ue.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ne&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ue.width,ue.height,te,_e,ue.data):t.texImage2D(i.TEXTURE_2D,Q,ve,ue.width,ue.height,0,te,_e,ue.data)}else if(g.isDataArrayTexture)if(I){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ve,J.width,J.height,J.depth),ne)if(g.layerUpdates.size>0){const Q=_h(J.width,J.height,g.format,g.type);for(const X of g.layerUpdates){const xe=J.data.subarray(X*Q/J.data.BYTES_PER_ELEMENT,(X+1)*Q/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,J.width,J.height,1,te,_e,xe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,te,_e,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,J.width,J.height,J.depth,0,te,_e,J.data);else if(g.isData3DTexture)I?(re&&t.texStorage3D(i.TEXTURE_3D,pe,ve,J.width,J.height,J.depth),ne&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,te,_e,J.data)):t.texImage3D(i.TEXTURE_3D,0,ve,J.width,J.height,J.depth,0,te,_e,J.data);else if(g.isFramebufferTexture){if(re)if(I)t.texStorage2D(i.TEXTURE_2D,pe,ve,J.width,J.height);else{let Q=J.width,X=J.height;for(let xe=0;xe<pe;xe++)t.texImage2D(i.TEXTURE_2D,xe,ve,Q,X,0,te,_e,null),Q>>=1,X>>=1}}else if(Ge.length>0){if(I&&re){const Q=Me(Ge[0]);t.texStorage2D(i.TEXTURE_2D,pe,ve,Q.width,Q.height)}for(let Q=0,X=Ge.length;Q<X;Q++)ue=Ge[Q],I?ne&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,te,_e,ue):t.texImage2D(i.TEXTURE_2D,Q,ve,te,_e,ue);g.generateMipmaps=!1}else if(I){if(re){const Q=Me(J);t.texStorage2D(i.TEXTURE_2D,pe,ve,Q.width,Q.height)}ne&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te,_e,J)}else t.texImage2D(i.TEXTURE_2D,0,ve,te,_e,J);d(g)&&f(Y),ge.__version=q.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function ie(T,g,D){if(g.image.length!==6)return;const Y=ke(T,g),K=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+D);const q=n.get(K);if(K.version!==q.__version||Y===!0){t.activeTexture(i.TEXTURE0+D);const ge=Ke.getPrimaries(Ke.workingColorSpace),se=g.colorSpace===di?null:Ke.getPrimaries(g.colorSpace),we=g.colorSpace===di||ge===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Re=g.isCompressedTexture||g.image[0].isCompressedTexture,J=g.image[0]&&g.image[0].isDataTexture,te=[];for(let X=0;X<6;X++)!Re&&!J?te[X]=M(g.image[X],!0,s.maxCubemapSize):te[X]=J?g.image[X].image:g.image[X],te[X]=ht(g,te[X]);const _e=te[0],ve=r.convert(g.format,g.colorSpace),ue=r.convert(g.type),Ge=b(g.internalFormat,ve,ue,g.colorSpace),I=g.isVideoTexture!==!0,re=q.__version===void 0||Y===!0,ne=K.dataReady;let pe=A(g,_e);fe(i.TEXTURE_CUBE_MAP,g);let Q;if(Re){I&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ge,_e.width,_e.height);for(let X=0;X<6;X++){Q=te[X].mipmaps;for(let xe=0;xe<Q.length;xe++){const De=Q[xe];g.format!==xn?ve!==null?I?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,0,0,De.width,De.height,ve,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,Ge,De.width,De.height,0,De.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,0,0,De.width,De.height,ve,ue,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe,Ge,De.width,De.height,0,ve,ue,De.data)}}}else{if(Q=g.mipmaps,I&&re){Q.length>0&&pe++;const X=Me(te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ge,X.width,X.height)}for(let X=0;X<6;X++)if(J){I?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,te[X].width,te[X].height,ve,ue,te[X].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ge,te[X].width,te[X].height,0,ve,ue,te[X].data);for(let xe=0;xe<Q.length;xe++){const ut=Q[xe].image[X].image;I?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,0,0,ut.width,ut.height,ve,ue,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,Ge,ut.width,ut.height,0,ve,ue,ut.data)}}else{I?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ve,ue,te[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ge,ve,ue,te[X]);for(let xe=0;xe<Q.length;xe++){const De=Q[xe];I?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,0,0,ve,ue,De.image[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,xe+1,Ge,ve,ue,De.image[X])}}}d(g)&&f(i.TEXTURE_CUBE_MAP),q.__version=K.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function oe(T,g,D,Y,K,q){const ge=r.convert(D.format,D.colorSpace),se=r.convert(D.type),we=b(D.internalFormat,ge,se,D.colorSpace),Re=n.get(g),J=n.get(D);if(J.__renderTarget=g,!Re.__hasExternalTextures){const te=Math.max(1,g.width>>q),_e=Math.max(1,g.height>>q);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,q,we,te,_e,g.depth,0,ge,se,null):t.texImage2D(K,q,we,te,_e,0,ge,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Mt(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,K,J.__webglTexture,0,L(g)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,K,J.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(T,g,D){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){const Y=g.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,q=S(g.stencilBuffer,K),ge=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Mt(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(g),q,g.width,g.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(g),q,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,q,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,T)}else{const Y=g.textures;for(let K=0;K<Y.length;K++){const q=Y[K],ge=r.convert(q.format,q.colorSpace),se=r.convert(q.type),we=b(q.internalFormat,ge,se,q.colorSpace);Mt(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(g),we,g.width,g.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(g),we,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,we,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(T,g,D){const Y=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(g.depthTexture);if(K.__renderTarget=g,(!K.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y){if(K.__webglInit===void 0&&(K.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),fe(i.TEXTURE_CUBE_MAP,g.depthTexture);const Re=r.convert(g.depthTexture.format),J=r.convert(g.depthTexture.type);let te;g.depthTexture.format===Jn?te=i.DEPTH_COMPONENT24:g.depthTexture.format===Fi&&(te=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,te,g.width,g.height,0,Re,J,null)}}else k(g.depthTexture,0);const q=K.__webglTexture,ge=L(g),se=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+D:i.TEXTURE_2D,we=g.depthTexture.format===Fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Jn)Mt(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,we,se,q,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,we,se,q,0);else if(g.depthTexture.format===Fi)Mt(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,we,se,q,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,we,se,q,0);else throw new Error("Unknown depthTexture format")}function Ie(T){const g=n.get(T),D=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=Y}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(D)for(let Y=0;Y<6;Y++)Ae(g.__webglFramebuffer[Y],T,Y);else{const Y=T.texture.mipmaps;Y&&Y.length>0?Ae(g.__webglFramebuffer[0],T,0):Ae(g.__webglFramebuffer,T,0)}else if(D){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=i.createRenderbuffer(),Fe(g.__webglDepthbuffer[Y],T,!1);else{const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=g.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,q)}}else{const Y=T.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Fe(g.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(T,g,D){const Y=n.get(T);g!==void 0&&oe(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&Ie(T)}function $e(T){const g=T.texture,D=n.get(T),Y=n.get(g);T.addEventListener("dispose",R);const K=T.textures,q=T.isWebGLCubeRenderTarget===!0,ge=K.length>1;if(ge||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=g.version,o.memory.textures++),q){D.__webglFramebuffer=[];for(let se=0;se<6;se++)if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[se]=[];for(let we=0;we<g.mipmaps.length;we++)D.__webglFramebuffer[se][we]=i.createFramebuffer()}else D.__webglFramebuffer[se]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let se=0;se<g.mipmaps.length;se++)D.__webglFramebuffer[se]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(ge)for(let se=0,we=K.length;se<we;se++){const Re=n.get(K[se]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Mt(T)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let se=0;se<K.length;se++){const we=K[se];D.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[se]);const Re=r.convert(we.format,we.colorSpace),J=r.convert(we.type),te=b(we.internalFormat,Re,J,we.colorSpace,T.isXRRenderTarget===!0),_e=L(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,te,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,D.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(D.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),fe(i.TEXTURE_CUBE_MAP,g);for(let se=0;se<6;se++)if(g.mipmaps&&g.mipmaps.length>0)for(let we=0;we<g.mipmaps.length;we++)oe(D.__webglFramebuffer[se][we],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we);else oe(D.__webglFramebuffer[se],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);d(g)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let se=0,we=K.length;se<we;se++){const Re=K[se],J=n.get(Re);let te=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(te=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,J.__webglTexture),fe(te,Re),oe(D.__webglFramebuffer,T,Re,i.COLOR_ATTACHMENT0+se,te,0),d(Re)&&f(te)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,Y.__webglTexture),fe(se,g),g.mipmaps&&g.mipmaps.length>0)for(let we=0;we<g.mipmaps.length;we++)oe(D.__webglFramebuffer[we],T,g,i.COLOR_ATTACHMENT0,se,we);else oe(D.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,se,0);d(g)&&f(se),t.unbindTexture()}T.depthBuffer&&Ie(T)}function Je(T){const g=T.textures;for(let D=0,Y=g.length;D<Y;D++){const K=g[D];if(d(K)){const q=v(T),ge=n.get(K).__webglTexture;t.bindTexture(q,ge),f(q),t.unbindTexture()}}}const at=[],Ve=[];function _t(T){if(T.samples>0){if(Mt(T)===!1){const g=T.textures,D=T.width,Y=T.height;let K=i.COLOR_BUFFER_BIT;const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(T),se=g.length>1;if(se)for(let Re=0;Re<g.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const we=T.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Re=0;Re<g.length;Re++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Re]);const J=n.get(g[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,D,Y,0,0,D,Y,K,i.NEAREST),c===!0&&(at.length=0,Ve.length=0,at.push(i.COLOR_ATTACHMENT0+Re),T.depthBuffer&&T.resolveDepthBuffer===!1&&(at.push(q),Ve.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ve)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let Re=0;Re<g.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Re]);const J=n.get(g[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,J,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function L(T){return Math.min(s.maxSamples,T.samples)}function Mt(T){const g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function je(T){const g=o.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function ht(T,g){const D=T.colorSpace,Y=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==Ss&&D!==di&&(Ke.getTransfer(D)===et?(Y!==xn||K!==en)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",D)),g}function Me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=k,this.setTexture2DArray=G,this.setTexture3D=F,this.setTextureCube=ee,this.rebindTextures=Lt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ex(i,e){function t(n,s=di){let r;const o=Ke.getTransfer(s);if(n===en)return i.UNSIGNED_BYTE;if(n===qc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_u)return i.BYTE;if(n===xu)return i.SHORT;if(n===ar)return i.UNSIGNED_SHORT;if(n===Xc)return i.INT;if(n===Un)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===jn)return i.HALF_FLOAT;if(n===Mu)return i.ALPHA;if(n===Su)return i.RGB;if(n===xn)return i.RGBA;if(n===Jn)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===$c)return i.RED;if(n===Kc)return i.RED_INTEGER;if(n===Ms)return i.RG;if(n===Zc)return i.RG_INTEGER;if(n===jc)return i.RGBA_INTEGER;if(n===ro||n===oo||n===ao||n===co)if(o===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===Ya)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$a||n===Ka||n===Za||n===ja||n===Ja||n===Qa||n===ec)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$a||n===Ka)return o===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Za)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ja)return r.COMPRESSED_R11_EAC;if(n===Ja)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Qa)return r.COMPRESSED_RG11_EAC;if(n===ec)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc||n===fc||n===dc||n===pc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tc)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nc)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ic)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sc)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rc)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oc)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ac)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cc)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lc)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hc)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uc)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fc)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dc)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pc)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mc||n===gc||n===_c)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===mc)return o===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xc||n===vc||n===yc||n===Mc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nx=`
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

}`;class ix{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Uu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Nn({vertexShader:tx,fragmentShader:nx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Z(new ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sx extends Gi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,p=null,h=null,m=null,_=null;const M=typeof XRWebGLBinding<"u",d=new ix,f={},v=t.getContextAttributes();let b=null,S=null;const A=[],w=[],R=new Ue;let x=null;const E=new Qt;E.viewport=new gt;const V=new Qt;V.viewport=new gt;const C=[E,V],N=new mp;let B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=A[$];return ie===void 0&&(ie=new ea,A[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=A[$];return ie===void 0&&(ie=new ea,A[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=A[$];return ie===void 0&&(ie=new ea,A[$]=ie),ie.getHandSpace()};function k($){const ie=w.indexOf($.inputSource);if(ie===-1)return;const oe=A[ie];oe!==void 0&&(oe.update($.inputSource,$.frame,l||o),oe.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",F);for(let $=0;$<A.length;$++){const ie=w[$];ie!==null&&(w[$]=null,A[$].disconnect(ie))}B=null,W=null,d.reset();for(const $ in f)delete f[$];e.setRenderTarget(b),m=null,h=null,p=null,s=null,S=null,ft.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",G),s.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Fe=null,Ae=null;v.depth&&(Ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=v.stencil?Fi:Jn,Fe=v.stencil?cr:Un);const Ie={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(Ie),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new In(h.textureWidth,h.textureHeight,{format:xn,type:en,depthTexture:new ur(h.textureWidth,h.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const oe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new In(m.framebufferWidth,m.framebufferHeight,{format:xn,type:en,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ft.setContext(s),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function F($){for(let ie=0;ie<$.removed.length;ie++){const oe=$.removed[ie],Fe=w.indexOf(oe);Fe>=0&&(w[Fe]=null,A[Fe].disconnect(oe))}for(let ie=0;ie<$.added.length;ie++){const oe=$.added[ie];let Fe=w.indexOf(oe);if(Fe===-1){for(let Ie=0;Ie<A.length;Ie++)if(Ie>=w.length){w.push(oe),Fe=Ie;break}else if(w[Ie]===null){w[Ie]=oe,Fe=Ie;break}if(Fe===-1)break}const Ae=A[Fe];Ae&&Ae.connect(oe)}}const ee=new P,j=new P;function he($,ie,oe){ee.setFromMatrixPosition(ie.matrixWorld),j.setFromMatrixPosition(oe.matrixWorld);const Fe=ee.distanceTo(j),Ae=ie.projectionMatrix.elements,Ie=oe.projectionMatrix.elements,Lt=Ae[14]/(Ae[10]-1),$e=Ae[14]/(Ae[10]+1),Je=(Ae[9]+1)/Ae[5],at=(Ae[9]-1)/Ae[5],Ve=(Ae[8]-1)/Ae[0],_t=(Ie[8]+1)/Ie[0],L=Lt*Ve,Mt=Lt*_t,je=Fe/(-Ve+_t),ht=je*-Ve;if(ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ht),$.translateZ(je),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ae[10]===-1)$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Me=Lt+je,T=$e+je,g=L-ht,D=Mt+(Fe-ht),Y=Je*$e/T*Me,K=at*$e/T*Me;$.projectionMatrix.makePerspective(g,D,Y,K,Me,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function me($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ie=$.near,oe=$.far;d.texture!==null&&(d.depthNear>0&&(ie=d.depthNear),d.depthFar>0&&(oe=d.depthFar)),N.near=V.near=E.near=ie,N.far=V.far=E.far=oe,(B!==N.near||W!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),B=N.near,W=N.far),N.layers.mask=$.layers.mask|6,E.layers.mask=N.layers.mask&-5,V.layers.mask=N.layers.mask&-3;const Fe=$.parent,Ae=N.cameras;me(N,Fe);for(let Ie=0;Ie<Ae.length;Ie++)me(Ae[Ie],Fe);Ae.length===2?he(N,E,V):N.projectionMatrix.copy(E.projectionMatrix),fe($,N,Fe)};function fe($,ie,oe){oe===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(oe.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=hr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(N)},this.getCameraTexture=function($){return f[$]};let ke=null;function dt($,ie){if(u=ie.getViewerPose(l||o),_=ie,u!==null){const oe=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Fe=!1;oe.length!==N.cameras.length&&(N.cameras.length=0,Fe=!0);for(let $e=0;$e<oe.length;$e++){const Je=oe[$e];let at=null;if(m!==null)at=m.getViewport(Je);else{const _t=p.getViewSubImage(h,Je);at=_t.viewport,$e===0&&(e.setRenderTargetTextures(S,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(S))}let Ve=C[$e];Ve===void 0&&(Ve=new Qt,Ve.layers.enable($e),Ve.viewport=new gt,C[$e]=Ve),Ve.matrix.fromArray(Je.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Je.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(at.x,at.y,at.width,at.height),$e===0&&(N.matrix.copy(Ve.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Fe===!0&&N.cameras.push(Ve)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=n.getBinding();const $e=p.getDepthInformation(oe[0]);$e&&$e.isValid&&$e.texture&&d.init($e,s.renderState)}if(Ae&&Ae.includes("camera-access")&&M){e.state.unbindTexture(),p=n.getBinding();for(let $e=0;$e<oe.length;$e++){const Je=oe[$e].camera;if(Je){let at=f[Je];at||(at=new Uu,f[Je]=at);const Ve=p.getCameraImage(Je);at.sourceTexture=Ve}}}}for(let oe=0;oe<A.length;oe++){const Fe=w[oe],Ae=A[oe];Fe!==null&&Ae!==void 0&&Ae.update(Fe,ie,l||o)}ke&&ke($,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),_=null}const ft=new Bu;ft.setAnimationLoop(dt),this.setAnimationLoop=function($){ke=$},this.dispose=function(){}}}const Ci=new nn,rx=new ot;function ox(i,e){function t(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function n(d,f){f.color.getRGB(d.fogColor.value,Nu(i)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function s(d,f,v,b,S){f.isMeshBasicMaterial?r(d,f):f.isMeshLambertMaterial?(r(d,f),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(d,f),p(d,f)):f.isMeshPhongMaterial?(r(d,f),u(d,f),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(d,f),h(d,f),f.isMeshPhysicalMaterial&&m(d,f,S)):f.isMeshMatcapMaterial?(r(d,f),_(d,f)):f.isMeshDepthMaterial?r(d,f):f.isMeshDistanceMaterial?(r(d,f),M(d,f)):f.isMeshNormalMaterial?r(d,f):f.isLineBasicMaterial?(o(d,f),f.isLineDashedMaterial&&a(d,f)):f.isPointsMaterial?c(d,f,v,b):f.isSpriteMaterial?l(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,t(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===Yt&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,t(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===Yt&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,t(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,t(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const v=e.get(f),b=v.envMap,S=v.envMapRotation;b&&(d.envMap.value=b,Ci.copy(S),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),d.envMapRotation.value.setFromMatrix4(rx.makeRotationFromEuler(Ci)),d.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,d.aoMapTransform))}function o(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform))}function a(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function c(d,f,v,b){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*v,d.scale.value=b*.5,f.map&&(d.map.value=f.map,t(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function l(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function u(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function p(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function h(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function m(d,f,v){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Yt&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,f){f.matcap&&(d.matcap.value=f.matcap)}function M(d,f){const v=e.get(f).light;d.referencePosition.value.setFromMatrixPosition(v.matrixWorld),d.nearDistance.value=v.shadow.camera.near,d.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ax(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){const S=b.program;n.uniformBlockBinding(v,S)}function l(v,b){let S=s[v.id];S===void 0&&(_(v),S=u(v),s[v.id]=S,v.addEventListener("dispose",d));const A=b.program;n.updateUBOMapping(v,A);const w=e.render.frame;r[v.id]!==w&&(h(v),r[v.id]=w)}function u(v){const b=p();v.__bindingPointIndex=b;const S=i.createBuffer(),A=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function p(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const b=s[v.id],S=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,R=S.length;w<R;w++){const x=Array.isArray(S[w])?S[w]:[S[w]];for(let E=0,V=x.length;E<V;E++){const C=x[E];if(m(C,w,E,A)===!0){const N=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let k=0;k<B.length;k++){const G=B[k],F=M(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,N+W,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,W),W+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(v,b,S,A){const w=v.value,R=b+"_"+S;if(A[R]===void 0)return typeof w=="number"||typeof w=="boolean"?A[R]=w:A[R]=w.clone(),!0;{const x=A[R];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return A[R]=w,!0}else if(x.equals(w)===!1)return x.copy(w),!0}return!1}function _(v){const b=v.uniforms;let S=0;const A=16;for(let R=0,x=b.length;R<x;R++){const E=Array.isArray(b[R])?b[R]:[b[R]];for(let V=0,C=E.length;V<C;V++){const N=E[V],B=Array.isArray(N.value)?N.value:[N.value];for(let W=0,k=B.length;W<k;W++){const G=B[W],F=M(G),ee=S%A,j=ee%F.boundary,he=ee+j;S+=j,he!==0&&A-he<F.storage&&(S+=A-he),N.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=F.storage}}}const w=S%A;return w>0&&(S+=A-w),v.__size=S,v.__cache={},this}function M(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pe("WebGLRenderer: Unsupported uniform value type.",v),b}function d(v){const b=v.target;b.removeEventListener("dispose",d);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}const cx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sn=null;function lx(){return Sn===null&&(Sn=new Pu(cx,16,16,Ms,jn),Sn.name="DFG_LUT",Sn.minFilter=zt,Sn.magFilter=zt,Sn.wrapS=Yn,Sn.wrapT=Yn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}class hx{constructor(e={}){const{canvas:t=ud(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:m=en}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const M=m,d=new Set([jc,Zc,Kc]),f=new Set([en,Un,ar,cr,qc,Yc]),v=new Uint32Array(4),b=new Int32Array(4);let S=null,A=null;const w=[],R=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let V=!1;this._outputColorSpace=rn;let C=0,N=0,B=null,W=-1,k=null;const G=new gt,F=new gt;let ee=null;const j=new We(0);let he=0,me=t.width,fe=t.height,ke=1,dt=null,ft=null;const $=new gt(0,0,me,fe),ie=new gt(0,0,me,fe);let oe=!1;const Fe=new ol;let Ae=!1,Ie=!1;const Lt=new ot,$e=new P,Je=new gt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function _t(){return B===null?ke:1}let L=n;function Mt(y,U){return t.getContext(y,U)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hc}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",ut,!1),L===null){const U="webgl2";if(L=Mt(U,y),L===null)throw Mt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw Ye("WebGLRenderer: "+y.message),y}let je,ht,Me,T,g,D,Y,K,q,ge,se,we,Re,J,te,_e,ve,ue,Ge,I,re,ne,pe;function Q(){je=new hg(L),je.init(),re=new ex(L,je),ht=new ng(L,je,e,re),Me=new J_(L,je),ht.reversedDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),T=new dg(L),g=new B_,D=new Q_(L,je,Me,g,ht,re,T),Y=new lg(E),K=new xp(L),ne=new eg(L,K),q=new ug(L,K,T,ne),ge=new mg(L,q,K,ne,T),ue=new pg(L,ht,D),te=new ig(g),se=new O_(E,Y,je,ht,ne,te),we=new ox(E,g),Re=new z_,J=new q_(je),ve=new Q0(E,Y,Me,ge,_,c),_e=new j_(E,ge,ht),pe=new ax(L,T,ht,Me),Ge=new tg(L,je,T),I=new fg(L,je,T),T.programs=se.programs,E.capabilities=ht,E.extensions=je,E.properties=g,E.renderLists=Re,E.shadowMap=_e,E.state=Me,E.info=T}Q(),M!==en&&(x=new _g(M,t.width,t.height,s,r));const X=new sx(E,L);this.xr=X,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=je.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=je.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ke},this.setPixelRatio=function(y){y!==void 0&&(ke=y,this.setSize(me,fe,!1))},this.getSize=function(y){return y.set(me,fe)},this.setSize=function(y,U,H=!0){if(X.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}me=y,fe=U,t.width=Math.floor(y*ke),t.height=Math.floor(U*ke),H===!0&&(t.style.width=y+"px",t.style.height=U+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(me*ke,fe*ke).floor()},this.setDrawingBufferSize=function(y,U,H){me=y,fe=U,ke=H,t.width=Math.floor(y*H),t.height=Math.floor(U*H),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(M===en){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(G)},this.getViewport=function(y){return y.copy($)},this.setViewport=function(y,U,H,z){y.isVector4?$.set(y.x,y.y,y.z,y.w):$.set(y,U,H,z),Me.viewport(G.copy($).multiplyScalar(ke).round())},this.getScissor=function(y){return y.copy(ie)},this.setScissor=function(y,U,H,z){y.isVector4?ie.set(y.x,y.y,y.z,y.w):ie.set(y,U,H,z),Me.scissor(F.copy(ie).multiplyScalar(ke).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(y){Me.setScissorTest(oe=y)},this.setOpaqueSort=function(y){dt=y},this.setTransparentSort=function(y){ft=y},this.getClearColor=function(y){return y.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,H=!0){let z=0;if(y){let O=!1;if(B!==null){const ce=B.texture.format;O=d.has(ce)}if(O){const ce=B.texture.type,de=f.has(ce),le=ve.getClearColor(),ye=ve.getClearAlpha(),be=le.r,Ne=le.g,He=le.b;de?(v[0]=be,v[1]=Ne,v[2]=He,v[3]=ye,L.clearBufferuiv(L.COLOR,0,v)):(b[0]=be,b[1]=Ne,b[2]=He,b[3]=ye,L.clearBufferiv(L.COLOR,0,b))}else z|=L.COLOR_BUFFER_BIT}U&&(z|=L.DEPTH_BUFFER_BIT),H&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",ut,!1),ve.dispose(),Re.dispose(),J.dispose(),g.dispose(),Y.dispose(),ge.dispose(),ne.dispose(),pe.dispose(),se.dispose(),X.dispose(),X.removeEventListener("sessionstart",Cl),X.removeEventListener("sessionend",Pl),Si.stop()};function xe(y){y.preventDefault(),So("WebGLRenderer: Context Lost."),V=!0}function De(){So("WebGLRenderer: Context Restored."),V=!1;const y=T.autoReset,U=_e.enabled,H=_e.autoUpdate,z=_e.needsUpdate,O=_e.type;Q(),T.autoReset=y,_e.enabled=U,_e.autoUpdate=H,_e.needsUpdate=z,_e.type=O}function ut(y){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Qe(y){const U=y.target;U.removeEventListener("dispose",Qe),Bn(U)}function Bn(y){kn(y),g.remove(y)}function kn(y){const U=g.get(y).programs;U!==void 0&&(U.forEach(function(H){se.releaseProgram(H)}),y.isShaderMaterial&&se.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,H,z,O,ce){U===null&&(U=at);const de=O.isMesh&&O.matrixWorld.determinant()<0,le=wf(y,U,H,z,O);Me.setMaterial(z,de);let ye=H.index,be=1;if(z.wireframe===!0){if(ye=q.getWireframeAttribute(H),ye===void 0)return;be=2}const Ne=H.drawRange,He=H.attributes.position;let Te=Ne.start*be,st=(Ne.start+Ne.count)*be;ce!==null&&(Te=Math.max(Te,ce.start*be),st=Math.min(st,(ce.start+ce.count)*be)),ye!==null?(Te=Math.max(Te,0),st=Math.min(st,ye.count)):He!=null&&(Te=Math.max(Te,0),st=Math.min(st,He.count));const xt=st-Te;if(xt<0||xt===1/0)return;ne.setup(O,z,le,H,ye);let mt,rt=Ge;if(ye!==null&&(mt=K.get(ye),rt=I,rt.setIndex(mt)),O.isMesh)z.wireframe===!0?(Me.setLineWidth(z.wireframeLinewidth*_t()),rt.setMode(L.LINES)):rt.setMode(L.TRIANGLES);else if(O.isLine){let Ot=z.linewidth;Ot===void 0&&(Ot=1),Me.setLineWidth(Ot*_t()),O.isLineSegments?rt.setMode(L.LINES):O.isLineLoop?rt.setMode(L.LINE_LOOP):rt.setMode(L.LINE_STRIP)}else O.isPoints?rt.setMode(L.POINTS):O.isSprite&&rt.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Eo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))rt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ot=O._multiDrawStarts,Se=O._multiDrawCounts,Kt=O._multiDrawCount,Ze=ye?K.get(ye).bytesPerElement:1,un=g.get(z).currentProgram.getUniforms();for(let yn=0;yn<Kt;yn++)un.setValue(L,"_gl_DrawID",yn),rt.render(Ot[yn]/Ze,Se[yn])}else if(O.isInstancedMesh)rt.renderInstances(Te,xt,O.count);else if(H.isInstancedBufferGeometry){const Ot=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Se=Math.min(H.instanceCount,Ot);rt.renderInstances(Te,xt,Se)}else rt.render(Te,xt)};function Rl(y,U,H){y.transparent===!0&&y.side===qn&&y.forceSinglePass===!1?(y.side=Yt,y.needsUpdate=!0,yr(y,U,H),y.side=xi,y.needsUpdate=!0,yr(y,U,H),y.side=qn):yr(y,U,H)}this.compile=function(y,U,H=null){H===null&&(H=y),A=J.get(H),A.init(U),R.push(A),H.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),y!==H&&y.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),A.setupLights();const z=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ce=O.material;if(ce)if(Array.isArray(ce))for(let de=0;de<ce.length;de++){const le=ce[de];Rl(le,H,O),z.add(le)}else Rl(ce,H,O),z.add(ce)}),A=R.pop(),z},this.compileAsync=function(y,U,H=null){const z=this.compile(y,U,H);return new Promise(O=>{function ce(){if(z.forEach(function(de){g.get(de).currentProgram.isReady()&&z.delete(de)}),z.size===0){O(y);return}setTimeout(ce,10)}je.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Wo=null;function Tf(y){Wo&&Wo(y)}function Cl(){Si.stop()}function Pl(){Si.start()}const Si=new Bu;Si.setAnimationLoop(Tf),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(y){Wo=y,X.setAnimationLoop(y),y===null?Si.stop():Si.start()},X.addEventListener("sessionstart",Cl),X.addEventListener("sessionend",Pl),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;const H=X.enabled===!0&&X.isPresenting===!0,z=x!==null&&(B===null||H)&&x.begin(E,B);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,U,B),A=J.get(y,R.length),A.init(U),R.push(A),Lt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Fe.setFromProjectionMatrix(Lt,Tn,U.reversedDepth),Ie=this.localClippingEnabled,Ae=te.init(this.clippingPlanes,Ie),S=Re.get(y,w.length),S.init(),w.push(S),X.enabled===!0&&X.isPresenting===!0){const de=E.xr.getDepthSensingMesh();de!==null&&Xo(de,U,-1/0,E.sortObjects)}Xo(y,U,0,E.sortObjects),S.finish(),E.sortObjects===!0&&S.sort(dt,ft),Ve=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ve&&ve.addToRenderList(S,y),this.info.render.frame++,Ae===!0&&te.beginShadows();const O=A.state.shadowsArray;if(_e.render(O,y,U),Ae===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&x.hasRenderPass())===!1){const de=S.opaque,le=S.transmissive;if(A.setupLights(),U.isArrayCamera){const ye=U.cameras;if(le.length>0)for(let be=0,Ne=ye.length;be<Ne;be++){const He=ye[be];Il(de,le,y,He)}Ve&&ve.render(y);for(let be=0,Ne=ye.length;be<Ne;be++){const He=ye[be];Ll(S,y,He,He.viewport)}}else le.length>0&&Il(de,le,y,U),Ve&&ve.render(y),Ll(S,y,U)}B!==null&&N===0&&(D.updateMultisampleRenderTarget(B),D.updateRenderTargetMipmap(B)),z&&x.end(E),y.isScene===!0&&y.onAfterRender(E,y,U),ne.resetDefaultState(),W=-1,k=null,R.pop(),R.length>0?(A=R[R.length-1],Ae===!0&&te.setGlobalState(E.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function Xo(y,U,H,z){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)A.pushLight(y),y.castShadow&&A.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Fe.intersectsSprite(y)){z&&Je.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Lt);const de=ge.update(y),le=y.material;le.visible&&S.push(y,de,le,H,Je.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Fe.intersectsObject(y))){const de=ge.update(y),le=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Je.copy(y.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Je.copy(de.boundingSphere.center)),Je.applyMatrix4(y.matrixWorld).applyMatrix4(Lt)),Array.isArray(le)){const ye=de.groups;for(let be=0,Ne=ye.length;be<Ne;be++){const He=ye[be],Te=le[He.materialIndex];Te&&Te.visible&&S.push(y,de,Te,H,Je.z,He)}}else le.visible&&S.push(y,de,le,H,Je.z,null)}}const ce=y.children;for(let de=0,le=ce.length;de<le;de++)Xo(ce[de],U,H,z)}function Ll(y,U,H,z){const{opaque:O,transmissive:ce,transparent:de}=y;A.setupLightsView(H),Ae===!0&&te.setGlobalState(E.clippingPlanes,H),z&&Me.viewport(G.copy(z)),O.length>0&&vr(O,U,H),ce.length>0&&vr(ce,U,H),de.length>0&&vr(de,U,H),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Il(y,U,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[z.id]===void 0){const Te=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[z.id]=new In(1,1,{generateMipmaps:!0,type:Te?jn:en,minFilter:Ni,samples:Math.max(4,ht.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const ce=A.state.transmissionRenderTarget[z.id],de=z.viewport||G;ce.setSize(de.z*E.transmissionResolutionScale,de.w*E.transmissionResolutionScale);const le=E.getRenderTarget(),ye=E.getActiveCubeFace(),be=E.getActiveMipmapLevel();E.setRenderTarget(ce),E.getClearColor(j),he=E.getClearAlpha(),he<1&&E.setClearColor(16777215,.5),E.clear(),Ve&&ve.render(H);const Ne=E.toneMapping;E.toneMapping=Ln;const He=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),A.setupLightsView(z),Ae===!0&&te.setGlobalState(E.clippingPlanes,z),vr(y,H,z),D.updateMultisampleRenderTarget(ce),D.updateRenderTargetMipmap(ce),je.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let st=0,xt=U.length;st<xt;st++){const mt=U[st],{object:rt,geometry:Ot,material:Se,group:Kt}=mt;if(Se.side===qn&&rt.layers.test(z.layers)){const Ze=Se.side;Se.side=Yt,Se.needsUpdate=!0,Dl(rt,H,z,Ot,Se,Kt),Se.side=Ze,Se.needsUpdate=!0,Te=!0}}Te===!0&&(D.updateMultisampleRenderTarget(ce),D.updateRenderTargetMipmap(ce))}E.setRenderTarget(le,ye,be),E.setClearColor(j,he),He!==void 0&&(z.viewport=He),E.toneMapping=Ne}function vr(y,U,H){const z=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ce=y.length;O<ce;O++){const de=y[O],{object:le,geometry:ye,group:be}=de;let Ne=de.material;Ne.allowOverride===!0&&z!==null&&(Ne=z),le.layers.test(H.layers)&&Dl(le,U,H,ye,Ne,be)}}function Dl(y,U,H,z,O,ce){y.onBeforeRender(E,U,H,z,O,ce),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(E,U,H,z,y,ce),O.transparent===!0&&O.side===qn&&O.forceSinglePass===!1?(O.side=Yt,O.needsUpdate=!0,E.renderBufferDirect(H,U,z,O,y,ce),O.side=xi,O.needsUpdate=!0,E.renderBufferDirect(H,U,z,O,y,ce),O.side=qn):E.renderBufferDirect(H,U,z,O,y,ce),y.onAfterRender(E,U,H,z,O,ce)}function yr(y,U,H){U.isScene!==!0&&(U=at);const z=g.get(y),O=A.state.lights,ce=A.state.shadowsArray,de=O.state.version,le=se.getParameters(y,O.state,ce,U,H),ye=se.getProgramCacheKey(le);let be=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;const Ne=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=Y.get(y.envMap||z.environment,Ne),z.envMapRotation=z.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,be===void 0&&(y.addEventListener("dispose",Qe),be=new Map,z.programs=be);let He=be.get(ye);if(He!==void 0){if(z.currentProgram===He&&z.lightsStateVersion===de)return Nl(y,le),He}else le.uniforms=se.getUniforms(y),y.onBeforeCompile(le,E),He=se.acquireProgram(le,ye),be.set(ye,He),z.uniforms=le.uniforms;const Te=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Te.clippingPlanes=te.uniform),Nl(y,le),z.needsLights=Rf(y),z.lightsStateVersion=de,z.needsLights&&(Te.ambientLightColor.value=O.state.ambient,Te.lightProbe.value=O.state.probe,Te.directionalLights.value=O.state.directional,Te.directionalLightShadows.value=O.state.directionalShadow,Te.spotLights.value=O.state.spot,Te.spotLightShadows.value=O.state.spotShadow,Te.rectAreaLights.value=O.state.rectArea,Te.ltc_1.value=O.state.rectAreaLTC1,Te.ltc_2.value=O.state.rectAreaLTC2,Te.pointLights.value=O.state.point,Te.pointLightShadows.value=O.state.pointShadow,Te.hemisphereLights.value=O.state.hemi,Te.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Te.spotLightMatrix.value=O.state.spotLightMatrix,Te.spotLightMap.value=O.state.spotLightMap,Te.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=He,z.uniformsList=null,He}function Ul(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=lo.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Nl(y,U){const H=g.get(y);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function wf(y,U,H,z,O){U.isScene!==!0&&(U=at),D.resetTextureUnits();const ce=U.fog,de=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,le=B===null?E.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ss,ye=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,be=Y.get(z.envMap||de,ye),Ne=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,He=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!H.morphAttributes.position,st=!!H.morphAttributes.normal,xt=!!H.morphAttributes.color;let mt=Ln;z.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(mt=E.toneMapping);const rt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ot=rt!==void 0?rt.length:0,Se=g.get(z),Kt=A.state.lights;if(Ae===!0&&(Ie===!0||y!==k)){const It=y===k&&z.id===W;te.setState(z,y,It)}let Ze=!1;z.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Kt.state.version||Se.outputColorSpace!==le||O.isBatchedMesh&&Se.batching===!1||!O.isBatchedMesh&&Se.batching===!0||O.isBatchedMesh&&Se.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Se.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Se.instancing===!1||!O.isInstancedMesh&&Se.instancing===!0||O.isSkinnedMesh&&Se.skinning===!1||!O.isSkinnedMesh&&Se.skinning===!0||O.isInstancedMesh&&Se.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Se.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Se.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Se.instancingMorph===!1&&O.morphTexture!==null||Se.envMap!==be||z.fog===!0&&Se.fog!==ce||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==te.numPlanes||Se.numIntersection!==te.numIntersection)||Se.vertexAlphas!==Ne||Se.vertexTangents!==He||Se.morphTargets!==Te||Se.morphNormals!==st||Se.morphColors!==xt||Se.toneMapping!==mt||Se.morphTargetsCount!==Ot)&&(Ze=!0):(Ze=!0,Se.__version=z.version);let un=Se.currentProgram;Ze===!0&&(un=yr(z,U,O));let yn=!1,Ei=!1,Wi=!1;const ct=un.getUniforms(),Nt=Se.uniforms;if(Me.useProgram(un.program)&&(yn=!0,Ei=!0,Wi=!0),z.id!==W&&(W=z.id,Ei=!0),yn||k!==y){Me.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ct.setValue(L,"projectionMatrix",y.projectionMatrix),ct.setValue(L,"viewMatrix",y.matrixWorldInverse);const si=ct.map.cameraPosition;si!==void 0&&si.setValue(L,$e.setFromMatrixPosition(y.matrixWorld)),ht.logarithmicDepthBuffer&&ct.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ct.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),k!==y&&(k=y,Ei=!0,Wi=!0)}if(Se.needsLights&&(Kt.state.directionalShadowMap.length>0&&ct.setValue(L,"directionalShadowMap",Kt.state.directionalShadowMap,D),Kt.state.spotShadowMap.length>0&&ct.setValue(L,"spotShadowMap",Kt.state.spotShadowMap,D),Kt.state.pointShadowMap.length>0&&ct.setValue(L,"pointShadowMap",Kt.state.pointShadowMap,D)),O.isSkinnedMesh){ct.setOptional(L,O,"bindMatrix"),ct.setOptional(L,O,"bindMatrixInverse");const It=O.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ct.setValue(L,"boneTexture",It.boneTexture,D))}O.isBatchedMesh&&(ct.setOptional(L,O,"batchingTexture"),ct.setValue(L,"batchingTexture",O._matricesTexture,D),ct.setOptional(L,O,"batchingIdTexture"),ct.setValue(L,"batchingIdTexture",O._indirectTexture,D),ct.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&ct.setValue(L,"batchingColorTexture",O._colorsTexture,D));const ii=H.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&ue.update(O,H,un),(Ei||Se.receiveShadow!==O.receiveShadow)&&(Se.receiveShadow=O.receiveShadow,ct.setValue(L,"receiveShadow",O.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(Nt.envMapIntensity.value=U.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=lx()),Ei&&(ct.setValue(L,"toneMappingExposure",E.toneMappingExposure),Se.needsLights&&Af(Nt,Wi),ce&&z.fog===!0&&we.refreshFogUniforms(Nt,ce),we.refreshMaterialUniforms(Nt,z,ke,fe,A.state.transmissionRenderTarget[y.id]),lo.upload(L,Ul(Se),Nt,D)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(lo.upload(L,Ul(Se),Nt,D),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ct.setValue(L,"center",O.center),ct.setValue(L,"modelViewMatrix",O.modelViewMatrix),ct.setValue(L,"normalMatrix",O.normalMatrix),ct.setValue(L,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const It=z.uniformsGroups;for(let si=0,Xi=It.length;si<Xi;si++){const Fl=It[si];pe.update(Fl,un),pe.bind(Fl,un)}}return un}function Af(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Rf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(y,U,H){const z=g.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),g.get(y.texture).__webglTexture=U,g.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:H,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const H=g.get(y);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};const Cf=L.createFramebuffer();this.setRenderTarget=function(y,U=0,H=0){B=y,C=U,N=H;let z=null,O=!1,ce=!1;if(y){const le=g.get(y);if(le.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(L.FRAMEBUFFER,le.__webglFramebuffer),G.copy(y.viewport),F.copy(y.scissor),ee=y.scissorTest,Me.viewport(G),Me.scissor(F),Me.setScissorTest(ee),W=-1;return}else if(le.__webglFramebuffer===void 0)D.setupRenderTarget(y);else if(le.__hasExternalTextures)D.rebindTextures(y,g.get(y.texture).__webglTexture,g.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ne=y.depthTexture;if(le.__boundDepthTexture!==Ne){if(Ne!==null&&g.has(Ne)&&(y.width!==Ne.image.width||y.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(y)}}const ye=y.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(ce=!0);const be=g.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(be[U])?z=be[U][H]:z=be[U],O=!0):y.samples>0&&D.useMultisampledRTT(y)===!1?z=g.get(y).__webglMultisampledFramebuffer:Array.isArray(be)?z=be[H]:z=be,G.copy(y.viewport),F.copy(y.scissor),ee=y.scissorTest}else G.copy($).multiplyScalar(ke).floor(),F.copy(ie).multiplyScalar(ke).floor(),ee=oe;if(H!==0&&(z=Cf),Me.bindFramebuffer(L.FRAMEBUFFER,z)&&Me.drawBuffers(y,z),Me.viewport(G),Me.scissor(F),Me.setScissorTest(ee),O){const le=g.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,le.__webglTexture,H)}else if(ce){const le=U;for(let ye=0;ye<y.textures.length;ye++){const be=g.get(y.textures[ye]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ye,be.__webglTexture,H,le)}}else if(y!==null&&H!==0){const le=g.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,le.__webglTexture,H)}W=-1},this.readRenderTargetPixels=function(y,U,H,z,O,ce,de,le=0){if(!(y&&y.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=g.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){Me.bindFramebuffer(L.FRAMEBUFFER,ye);try{const be=y.textures[le],Ne=be.format,He=be.type;if(y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+le),!ht.textureFormatReadable(Ne)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(He)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-z&&H>=0&&H<=y.height-O&&L.readPixels(U,H,z,O,re.convert(Ne),re.convert(He),ce)}finally{const be=B!==null?g.get(B).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(y,U,H,z,O,ce,de,le=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=g.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye)if(U>=0&&U<=y.width-z&&H>=0&&H<=y.height-O){Me.bindFramebuffer(L.FRAMEBUFFER,ye);const be=y.textures[le],Ne=be.format,He=be.type;if(y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+le),!ht.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.bufferData(L.PIXEL_PACK_BUFFER,ce.byteLength,L.STREAM_READ),L.readPixels(U,H,z,O,re.convert(Ne),re.convert(He),0);const st=B!==null?g.get(B).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,st);const xt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await fd(L,xt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ce),L.deleteBuffer(Te),L.deleteSync(xt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,H=0){const z=Math.pow(2,-H),O=Math.floor(y.image.width*z),ce=Math.floor(y.image.height*z),de=U!==null?U.x:0,le=U!==null?U.y:0;D.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,de,le,O,ce),Me.unbindTexture()};const Pf=L.createFramebuffer(),Lf=L.createFramebuffer();this.copyTextureToTexture=function(y,U,H=null,z=null,O=0,ce=0){let de,le,ye,be,Ne,He,Te,st,xt;const mt=y.isCompressedTexture?y.mipmaps[ce]:y.image;if(H!==null)de=H.max.x-H.min.x,le=H.max.y-H.min.y,ye=H.isBox3?H.max.z-H.min.z:1,be=H.min.x,Ne=H.min.y,He=H.isBox3?H.min.z:0;else{const Nt=Math.pow(2,-O);de=Math.floor(mt.width*Nt),le=Math.floor(mt.height*Nt),y.isDataArrayTexture?ye=mt.depth:y.isData3DTexture?ye=Math.floor(mt.depth*Nt):ye=1,be=0,Ne=0,He=0}z!==null?(Te=z.x,st=z.y,xt=z.z):(Te=0,st=0,xt=0);const rt=re.convert(U.format),Ot=re.convert(U.type);let Se;U.isData3DTexture?(D.setTexture3D(U,0),Se=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(D.setTexture2DArray(U,0),Se=L.TEXTURE_2D_ARRAY):(D.setTexture2D(U,0),Se=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Kt=L.getParameter(L.UNPACK_ROW_LENGTH),Ze=L.getParameter(L.UNPACK_IMAGE_HEIGHT),un=L.getParameter(L.UNPACK_SKIP_PIXELS),yn=L.getParameter(L.UNPACK_SKIP_ROWS),Ei=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,be),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ne),L.pixelStorei(L.UNPACK_SKIP_IMAGES,He);const Wi=y.isDataArrayTexture||y.isData3DTexture,ct=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const Nt=g.get(y),ii=g.get(U),It=g.get(Nt.__renderTarget),si=g.get(ii.__renderTarget);Me.bindFramebuffer(L.READ_FRAMEBUFFER,It.__webglFramebuffer),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let Xi=0;Xi<ye;Xi++)Wi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,g.get(y).__webglTexture,O,He+Xi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,g.get(U).__webglTexture,ce,xt+Xi)),L.blitFramebuffer(be,Ne,de,le,Te,st,de,le,L.DEPTH_BUFFER_BIT,L.NEAREST);Me.bindFramebuffer(L.READ_FRAMEBUFFER,null),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||y.isRenderTargetTexture||g.has(y)){const Nt=g.get(y),ii=g.get(U);Me.bindFramebuffer(L.READ_FRAMEBUFFER,Pf),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,Lf);for(let It=0;It<ye;It++)Wi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Nt.__webglTexture,O,He+It):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Nt.__webglTexture,O),ct?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ii.__webglTexture,ce,xt+It):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ii.__webglTexture,ce),O!==0?L.blitFramebuffer(be,Ne,de,le,Te,st,de,le,L.COLOR_BUFFER_BIT,L.NEAREST):ct?L.copyTexSubImage3D(Se,ce,Te,st,xt+It,be,Ne,de,le):L.copyTexSubImage2D(Se,ce,Te,st,be,Ne,de,le);Me.bindFramebuffer(L.READ_FRAMEBUFFER,null),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ct?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(Se,ce,Te,st,xt,de,le,ye,rt,Ot,mt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Se,ce,Te,st,xt,de,le,ye,rt,mt.data):L.texSubImage3D(Se,ce,Te,st,xt,de,le,ye,rt,Ot,mt):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ce,Te,st,de,le,rt,Ot,mt.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ce,Te,st,mt.width,mt.height,rt,mt.data):L.texSubImage2D(L.TEXTURE_2D,ce,Te,st,de,le,rt,Ot,mt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Kt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ze),L.pixelStorei(L.UNPACK_SKIP_PIXELS,un),L.pixelStorei(L.UNPACK_SKIP_ROWS,yn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ei),ce===0&&U.generateMipmaps&&L.generateMipmap(Se),Me.unbindTexture()},this.initRenderTarget=function(y){g.get(y).__webglFramebuffer===void 0&&D.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?D.setTextureCube(y,0):y.isData3DTexture?D.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?D.setTexture2DArray(y,0):D.setTexture2D(y,0),Me.unbindTexture()},this.resetState=function(){C=0,N=0,B=null,Me.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const us=new nn(0,0,0,"YXZ"),fs=new P,ux={type:"change"},fx={type:"lock"},dx={type:"unlock"},Vh=.002,Gh=Math.PI/2;class px extends gp{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=mx.bind(this),this._onPointerlockChange=gx.bind(this),this._onPointerlockError=_x.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;fs.setFromMatrixColumn(t.matrix,0),fs.crossVectors(t.up,fs),t.position.addScaledVector(fs,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;fs.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(fs,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function mx(i){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;us.setFromQuaternion(e.quaternion),us.y-=i.movementX*Vh*this.pointerSpeed,us.x-=i.movementY*Vh*this.pointerSpeed,us.x=Math.max(Gh-this.maxPolarAngle,Math.min(Gh-this.minPolarAngle,us.x)),e.quaternion.setFromEuler(us),this.dispatchEvent(ux)}function gx(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(fx),this.isLocked=!0):(this.dispatchEvent(dx),this.isLocked=!1)}function _x(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const Fn=Object.create(null);Fn.open="0";Fn.close="1";Fn.ping="2";Fn.pong="3";Fn.message="4";Fn.upgrade="5";Fn.noop="6";const ho=Object.create(null);Object.keys(Fn).forEach(i=>{ho[Fn[i]]=i});const Ac={type:"error",data:"parser error"},Wu=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Xu=typeof ArrayBuffer=="function",qu=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i&&i.buffer instanceof ArrayBuffer,hl=({type:i,data:e},t,n)=>Wu&&e instanceof Blob?t?n(e):Hh(e,n):Xu&&(e instanceof ArrayBuffer||qu(e))?t?n(e):Hh(new Blob([e]),n):n(Fn[i]+(e||"")),Hh=(i,e)=>{const t=new FileReader;return t.onload=function(){const n=t.result.split(",")[1];e("b"+(n||""))},t.readAsDataURL(i)};function Wh(i){return i instanceof Uint8Array?i:i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength)}let Ta;function xx(i,e){if(Wu&&i.data instanceof Blob)return i.data.arrayBuffer().then(Wh).then(e);if(Xu&&(i.data instanceof ArrayBuffer||qu(i.data)))return e(Wh(i.data));hl(i,!1,t=>{Ta||(Ta=new TextEncoder),e(Ta.encode(t))})}const Xh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",er=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let i=0;i<Xh.length;i++)er[Xh.charCodeAt(i)]=i;const vx=i=>{let e=i.length*.75,t=i.length,n,s=0,r,o,a,c;i[i.length-1]==="="&&(e--,i[i.length-2]==="="&&e--);const l=new ArrayBuffer(e),u=new Uint8Array(l);for(n=0;n<t;n+=4)r=er[i.charCodeAt(n)],o=er[i.charCodeAt(n+1)],a=er[i.charCodeAt(n+2)],c=er[i.charCodeAt(n+3)],u[s++]=r<<2|o>>4,u[s++]=(o&15)<<4|a>>2,u[s++]=(a&3)<<6|c&63;return l},yx=typeof ArrayBuffer=="function",ul=(i,e)=>{if(typeof i!="string")return{type:"message",data:Yu(i,e)};const t=i.charAt(0);return t==="b"?{type:"message",data:Mx(i.substring(1),e)}:ho[t]?i.length>1?{type:ho[t],data:i.substring(1)}:{type:ho[t]}:Ac},Mx=(i,e)=>{if(yx){const t=vx(i);return Yu(t,e)}else return{base64:!0,data:i}},Yu=(i,e)=>e==="blob"?i instanceof Blob?i:new Blob([i]):i instanceof ArrayBuffer?i:i.buffer,$u="",Sx=(i,e)=>{const t=i.length,n=new Array(t);let s=0;i.forEach((r,o)=>{hl(r,!1,a=>{n[o]=a,++s===t&&e(n.join($u))})})},Ex=(i,e)=>{const t=i.split($u),n=[];for(let s=0;s<t.length;s++){const r=ul(t[s],e);if(n.push(r),r.type==="error")break}return n};function bx(){return new TransformStream({transform(i,e){xx(i,t=>{const n=t.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,n)}else{s=new Uint8Array(9);const r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(n))}i.data&&typeof i.data!="string"&&(s[0]|=128),e.enqueue(s),e.enqueue(t)})}})}let wa;function Kr(i){return i.reduce((e,t)=>e+t.length,0)}function Zr(i,e){if(i[0].length===e)return i.shift();const t=new Uint8Array(e);let n=0;for(let s=0;s<e;s++)t[s]=i[0][n++],n===i[0].length&&(i.shift(),n=0);return i.length&&n<i[0].length&&(i[0]=i[0].slice(n)),t}function Tx(i,e){wa||(wa=new TextDecoder);const t=[];let n=0,s=-1,r=!1;return new TransformStream({transform(o,a){for(t.push(o);;){if(n===0){if(Kr(t)<1)break;const c=Zr(t,1);r=(c[0]&128)===128,s=c[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(Kr(t)<2)break;const c=Zr(t,2);s=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),n=3}else if(n===2){if(Kr(t)<8)break;const c=Zr(t,8),l=new DataView(c.buffer,c.byteOffset,c.length),u=l.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue(Ac);break}s=u*Math.pow(2,32)+l.getUint32(4),n=3}else{if(Kr(t)<s)break;const c=Zr(t,s);a.enqueue(ul(r?c:wa.decode(c),e)),n=0}if(s===0||s>i){a.enqueue(Ac);break}}}})}const Ku=4;function wt(i){if(i)return wx(i)}function wx(i){for(var e in wt.prototype)i[e]=wt.prototype[e];return i}wt.prototype.on=wt.prototype.addEventListener=function(i,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+i]=this._callbacks["$"+i]||[]).push(e),this};wt.prototype.once=function(i,e){function t(){this.off(i,t),e.apply(this,arguments)}return t.fn=e,this.on(i,t),this};wt.prototype.off=wt.prototype.removeListener=wt.prototype.removeAllListeners=wt.prototype.removeEventListener=function(i,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+i];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+i],this;for(var n,s=0;s<t.length;s++)if(n=t[s],n===e||n.fn===e){t.splice(s,1);break}return t.length===0&&delete this._callbacks["$"+i],this};wt.prototype.emit=function(i){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+i],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,s=t.length;n<s;++n)t[n].apply(this,e)}return this};wt.prototype.emitReserved=wt.prototype.emit;wt.prototype.listeners=function(i){return this._callbacks=this._callbacks||{},this._callbacks["$"+i]||[]};wt.prototype.hasListeners=function(i){return!!this.listeners(i).length};const Bo=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),on=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Ax="arraybuffer";function Zu(i,...e){return e.reduce((t,n)=>(i.hasOwnProperty(n)&&(t[n]=i[n]),t),{})}const Rx=on.setTimeout,Cx=on.clearTimeout;function ko(i,e){e.useNativeTimers?(i.setTimeoutFn=Rx.bind(on),i.clearTimeoutFn=Cx.bind(on)):(i.setTimeoutFn=on.setTimeout.bind(on),i.clearTimeoutFn=on.clearTimeout.bind(on))}const Px=1.33;function Lx(i){return typeof i=="string"?Ix(i):Math.ceil((i.byteLength||i.size)*Px)}function Ix(i){let e=0,t=0;for(let n=0,s=i.length;n<s;n++)e=i.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}function ju(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Dx(i){let e="";for(let t in i)i.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(i[t]));return e}function Ux(i){let e={},t=i.split("&");for(let n=0,s=t.length;n<s;n++){let r=t[n].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e}class Nx extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class fl extends wt{constructor(e){super(),this.writable=!1,ko(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,n){return super.emitReserved("error",new Nx(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=ul(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=Dx(e);return t.length?"?"+t:""}}class Fx extends fl{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||t()})),this.writable||(n++,this.once("drain",function(){--n||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Ex(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Sx(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=ju()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}}let Ju=!1;try{Ju=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Ox=Ju;function Bx(){}class kx extends Fx{constructor(e){if(super(e),typeof location<"u"){const t=location.protocol==="https:";let n=location.port;n||(n=t?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,n)=>{this.onError("xhr poll error",t,n)}),this.pollXhr=e}}class Dn extends wt{constructor(e,t,n){super(),this.createRequest=e,ko(this,n),this._opts=n,this._method=n.method||"GET",this._uri=t,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const t=Zu(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(t);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=Dn.requestsCount++,Dn.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Bx,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Dn.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Dn.requestsCount=0;Dn.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",qh);else if(typeof addEventListener=="function"){const i="onpagehide"in on?"pagehide":"unload";addEventListener(i,qh,!1)}}function qh(){for(let i in Dn.requests)Dn.requests.hasOwnProperty(i)&&Dn.requests[i].abort()}const zx=(function(){const i=Qu({xdomain:!1});return i&&i.responseType!==null})();class Vx extends kx{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=zx&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Dn(Qu,this.uri(),e)}}function Qu(i){const e=i.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Ox))return new XMLHttpRequest}catch{}if(!e)try{return new on[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const ef=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Gx extends fl{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,n=ef?{}:Zu(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],s=t===e.length-1;hl(n,this.supportsBinary,r=>{try{this.doWrite(n,r)}catch{}s&&Bo(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=ju()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const Aa=on.WebSocket||on.MozWebSocket;class Hx extends Gx{createSocket(e,t,n){return ef?new Aa(e,t,n):t?new Aa(e,t):new Aa(e)}doWrite(e,t){this.ws.send(t)}}class Wx extends fl{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=Tx(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),s=bx();s.readable.pipeTo(e.writable),this._writer=s.writable.getWriter();const r=()=>{n.read().then(({done:a,value:c})=>{a||(this.onPacket(c),r())}).catch(a=>{})};r();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],s=t===e.length-1;this._writer.write(n).then(()=>{s&&Bo(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Xx={websocket:Hx,webtransport:Wx,polling:Vx},qx=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Yx=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Rc(i){if(i.length>8e3)throw"URI too long";const e=i,t=i.indexOf("["),n=i.indexOf("]");t!=-1&&n!=-1&&(i=i.substring(0,t)+i.substring(t,n).replace(/:/g,";")+i.substring(n,i.length));let s=qx.exec(i||""),r={},o=14;for(;o--;)r[Yx[o]]=s[o]||"";return t!=-1&&n!=-1&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=$x(r,r.path),r.queryKey=Kx(r,r.query),r}function $x(i,e){const t=/\/{2,9}/g,n=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Kx(i,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,r){s&&(t[s]=r)}),t}const Cc=typeof addEventListener=="function"&&typeof removeEventListener=="function",uo=[];Cc&&addEventListener("offline",()=>{uo.forEach(i=>i())},!1);class gi extends wt{constructor(e,t){if(super(),this.binaryType=Ax,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){const n=Rc(e);t.hostname=n.host,t.secure=n.protocol==="https"||n.protocol==="wss",t.port=n.port,n.query&&(t.query=n.query)}else t.host&&(t.hostname=Rc(t.host).host);ko(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach(n=>{const s=n.prototype.name;this.transports.push(s),this._transportsByName[s]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Ux(this.opts.query)),Cc&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},uo.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=Ku,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&gi.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}onOpen(){this.readyState="open",gi.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(t+=Lx(s)),n>0&&t>this._maxPayload)return this.writeBuffer.slice(0,n);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Bo(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,n){return this._sendPacket("message",e,t,n),this}send(e,t,n){return this._sendPacket("message",e,t,n),this}_sendPacket(e,t,n,s){if(typeof t=="function"&&(s=t,t=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const r={type:e,data:t,options:n};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(gi.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Cc&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=uo.indexOf(this._offlineEventListener);n!==-1&&uo.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}gi.protocol=Ku;class Zx extends gi{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),n=!1;gi.priorWebsocketSuccess=!1;const s=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",p=>{if(!n)if(p.type==="pong"&&p.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;gi.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const h=new Error("probe error");h.transport=t.name,this.emitReserved("upgradeError",h)}}))};function r(){n||(n=!0,u(),t.close(),t=null)}const o=p=>{const h=new Error("probe error: "+p);h.transport=t.name,r(),this.emitReserved("upgradeError",h)};function a(){o("transport closed")}function c(){o("socket closed")}function l(p){t&&p.name!==t.name&&r()}const u=()=>{t.removeListener("open",s),t.removeListener("error",o),t.removeListener("close",a),this.off("close",c),this.off("upgrading",l)};t.once("open",s),t.once("error",o),t.once("close",a),this.once("close",c),this.once("upgrading",l),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}}let jx=class extends Zx{constructor(e,t={}){const n=typeof e=="object"?e:t;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(s=>Xx[s]).filter(s=>!!s)),super(e,n)}};function Jx(i,e="",t){let n=i;t=t||typeof location<"u"&&location,i==null&&(i=t.protocol+"//"+t.host),typeof i=="string"&&(i.charAt(0)==="/"&&(i.charAt(1)==="/"?i=t.protocol+i:i=t.host+i),/^(https?|wss?):\/\//.test(i)||(typeof t<"u"?i=t.protocol+"//"+i:i="https://"+i),n=Rc(i)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const r=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+e,n.href=n.protocol+"://"+r+(t&&t.port===n.port?"":":"+n.port),n}const Qx=typeof ArrayBuffer=="function",ev=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i.buffer instanceof ArrayBuffer,tf=Object.prototype.toString,tv=typeof Blob=="function"||typeof Blob<"u"&&tf.call(Blob)==="[object BlobConstructor]",nv=typeof File=="function"||typeof File<"u"&&tf.call(File)==="[object FileConstructor]";function dl(i){return Qx&&(i instanceof ArrayBuffer||ev(i))||tv&&i instanceof Blob||nv&&i instanceof File}function fo(i,e){if(!i||typeof i!="object")return!1;if(Array.isArray(i)){for(let t=0,n=i.length;t<n;t++)if(fo(i[t]))return!0;return!1}if(dl(i))return!0;if(i.toJSON&&typeof i.toJSON=="function"&&arguments.length===1)return fo(i.toJSON(),!0);for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t)&&fo(i[t]))return!0;return!1}function iv(i){const e=[],t=i.data,n=i;return n.data=Pc(t,e),n.attachments=e.length,{packet:n,buffers:e}}function Pc(i,e){if(!i)return i;if(dl(i)){const t={_placeholder:!0,num:e.length};return e.push(i),t}else if(Array.isArray(i)){const t=new Array(i.length);for(let n=0;n<i.length;n++)t[n]=Pc(i[n],e);return t}else if(typeof i=="object"&&!(i instanceof Date)){const t={};for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=Pc(i[n],e));return t}return i}function sv(i,e){return i.data=Lc(i.data,e),delete i.attachments,i}function Lc(i,e){if(!i)return i;if(i&&i._placeholder===!0){if(typeof i.num=="number"&&i.num>=0&&i.num<e.length)return e[i.num];throw new Error("illegal attachments")}else if(Array.isArray(i))for(let t=0;t<i.length;t++)i[t]=Lc(i[t],e);else if(typeof i=="object")for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&(i[t]=Lc(i[t],e));return i}const rv=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var qe;(function(i){i[i.CONNECT=0]="CONNECT",i[i.DISCONNECT=1]="DISCONNECT",i[i.EVENT=2]="EVENT",i[i.ACK=3]="ACK",i[i.CONNECT_ERROR=4]="CONNECT_ERROR",i[i.BINARY_EVENT=5]="BINARY_EVENT",i[i.BINARY_ACK=6]="BINARY_ACK"})(qe||(qe={}));class ov{constructor(e){this.replacer=e}encode(e){return(e.type===qe.EVENT||e.type===qe.ACK)&&fo(e)?this.encodeAsBinary({type:e.type===qe.EVENT?qe.BINARY_EVENT:qe.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===qe.BINARY_EVENT||e.type===qe.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=iv(e),n=this.encodeAsString(t.packet),s=t.buffers;return s.unshift(n),s}}class pl extends wt{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===qe.BINARY_EVENT;n||t.type===qe.BINARY_ACK?(t.type=n?qe.EVENT:qe.ACK,this.reconstructor=new av(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(dl(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(qe[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===qe.BINARY_EVENT||n.type===qe.BINARY_ACK){const r=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(r,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!cv(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=a}if(e.charAt(t+1)==="/"){const r=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););n.nsp=e.substring(r,t)}else n.nsp="/";const s=e.charAt(t+1);if(s!==""&&Number(s)==s){const r=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}n.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=this.tryParse(e.substr(t));if(pl.isPayloadValid(n.type,r))n.data=r;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case qe.CONNECT:return Yh(t);case qe.DISCONNECT:return t===void 0;case qe.CONNECT_ERROR:return typeof t=="string"||Yh(t);case qe.EVENT:case qe.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&rv.indexOf(t[0])===-1);case qe.ACK:case qe.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class av{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=sv(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const cv=Number.isInteger||function(i){return typeof i=="number"&&isFinite(i)&&Math.floor(i)===i};function Yh(i){return Object.prototype.toString.call(i)==="[object Object]"}const lv=Object.freeze(Object.defineProperty({__proto__:null,Decoder:pl,Encoder:ov,get PacketType(){return qe}},Symbol.toStringTag,{value:"Module"}));function mn(i,e,t){return i.on(e,t),function(){i.off(e,t)}}const hv=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class nf extends wt{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[mn(e,"open",this.onopen.bind(this)),mn(e,"packet",this.onpacket.bind(this)),mn(e,"error",this.onerror.bind(this)),mn(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var n,s,r;if(hv.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const o={type:qe.EVENT,data:t};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const u=this.ids++,p=t.pop();this._registerAckCallback(u,p),o.id=u}const a=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,c=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!a||(c?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,t){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[e]=t;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);t.call(this,new Error("operation has timed out"))},s),o=(...a)=>{this.io.clearTimeoutFn(r),t.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...t){return new Promise((n,s)=>{const r=(o,a)=>o?s(o):n(a);r.withError=!0,t.push(r),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((s,...r)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(s)):(this._queue.shift(),t&&t(null,...r)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:qe.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case qe.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case qe.EVENT:case qe.BINARY_EVENT:this.onevent(e);break;case qe.ACK:case qe.BINARY_ACK:this.onack(e);break;case qe.DISCONNECT:this.ondisconnect();break;case qe.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(...s){n||(n=!0,t.packet({type:qe.ACK,id:e,data:s}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:qe.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function Is(i){i=i||{},this.ms=i.min||100,this.max=i.max||1e4,this.factor=i.factor||2,this.jitter=i.jitter>0&&i.jitter<=1?i.jitter:0,this.attempts=0}Is.prototype.duration=function(){var i=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*i);i=(Math.floor(e*10)&1)==0?i-t:i+t}return Math.min(i,this.max)|0};Is.prototype.reset=function(){this.attempts=0};Is.prototype.setMin=function(i){this.ms=i};Is.prototype.setMax=function(i){this.max=i};Is.prototype.setJitter=function(i){this.jitter=i};class Ic extends wt{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,ko(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Is({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const s=t.parser||lv;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new jx(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=mn(t,"open",function(){n.onopen(),e&&e()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=mn(t,"error",r);if(this._timeout!==!1){const a=this._timeout,c=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),t.close()},a);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(s),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(mn(e,"ping",this.onping.bind(this)),mn(e,"data",this.ondata.bind(this)),mn(e,"error",this.onerror.bind(this)),mn(e,"close",this.onclose.bind(this)),mn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){Bo(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new nf(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t)if(this.nsps[n].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(s=>{s?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",s)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const qs={};function po(i,e){typeof i=="object"&&(e=i,i=void 0),e=e||{};const t=Jx(i,e.path||"/socket.io"),n=t.source,s=t.id,r=t.path,o=qs[s]&&r in qs[s].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let c;return a?c=new Ic(n,e):(qs[s]||(qs[s]=new Ic(n,e)),c=qs[s]),t.query&&!e.query&&(e.query=t.queryKey),c.socket(t.path,e)}Object.assign(po,{Manager:Ic,Socket:nf,io:po,connect:po});const uv=window.location.hostname==="localhost"?"http://localhost:3001":"https://nightfall-survival-production.up.railway.app";let Ce=null,Ra="",Ys="",vn=!1;const Ts=new Map;function fv(){const i=new vt,e=new nt({color:5227511,flatShading:!0}),t=new nt({color:1402304,flatShading:!0}),n=new nt({color:870305,flatShading:!0}),s=new Le(.22,.15,.35),r=new Z(s,n);r.position.set(-.2,.075,.06);const o=new Z(s,n);o.position.set(.2,.075,.06);const a=new Le(.24,.6,.3),c=new Z(a,t);c.position.set(-.2,.45,0);const l=new Z(a,t);l.position.set(.2,.45,0);const u=new Z(new Le(.72,.7,.38),t);u.position.set(0,1.1,0);const p=new Le(.2,.5,.2),h=new Z(p,e);h.position.set(-.46,1.1,.2),h.rotation.x=-Math.PI/3;const m=new Z(p,e);m.position.set(.46,1.1,.2),m.rotation.x=-Math.PI/3;const _=new Z(new Le(.48,.48,.48),e);_.position.y=1.65;const M=new Rt({color:65484}),d=new ti(.12,.09),f=new Z(d,M);f.position.set(-.12,.05,.245);const v=new Z(d,M);return v.position.set(.12,.05,.245),_.add(f,v),i.add(r,o,c,l,u,h,m,_),i.traverse(b=>{b.frustumCulled=!1}),i}function dv(i){const e=document.createElement("canvas");e.width=256,e.height=128;const t=e.getContext("2d");t.clearRect(0,0,256,128),t.fillStyle="rgba(0,0,0,0.7)",t.beginPath(),t.moveTo(20,20),t.lineTo(236,20),t.quadraticCurveTo(250,20,250,34),t.lineTo(250,94),t.quadraticCurveTo(250,108,236,108),t.lineTo(20,108),t.quadraticCurveTo(6,108,6,94),t.lineTo(6,34),t.quadraticCurveTo(6,20,20,20),t.fill(),t.font="bold 32px Impact, Arial Black, sans-serif",t.textAlign="center",t.fillStyle="#00ffcc",t.fillText(i.toUpperCase().slice(0,14),128,70);const n=new Du(e),s=new sl({map:n,depthTest:!1,transparent:!0}),r=new Cu(s);return r.scale.set(2,1,1),r.position.y=2.6,r}function Dc(i,e,t,n,s){if(Ts.has(i))return;const r=fv();r.position.set(t,n-1.6,s);const o=dv(e);r.add(o),Be.add(r),Ts.set(i,{group:r,label:o})}function $h(i){const e=Ts.get(i);e&&(Be.remove(e.group),Ts.delete(i))}function Kh(){Ce?.connected||(Ce=po(uv,{transports:["websocket"],reconnectionAttempts:3}),Ce.on("connect",()=>console.log("[MP] Connected:",Ce.id)),Ce.on("existing-players",i=>{i.forEach(e=>{e.id!==Ce.id&&Dc(e.id,e.username,e.x,e.y,e.z)})}),Ce.on("player-joined",i=>{if(Dc(i.id,i.username,i.x||0,i.y||1.6,i.z||0),pt)fr(`${i.username} JOINED!`);else{const t=document.getElementById("lobby-players")?.querySelector(".lobby-player .slot-empty")?.parentElement;if(t){const n=i.platform==="mobile"?"📱":"💻";t.id=`slot-${i.id}`,t.innerHTML=`<span class="slot-icon">${n}</span>
                    <span class="slot-other">${i.username}</span>
                    <span class="slot-ready" style="margin-left:auto">⬜</span>`}}}),Ce.on("player-moved",i=>{const e=Ts.get(i.id);e&&(e.group.position.set(i.x,i.y-1.6,i.z),e.group.rotation.y=i.rotY)}),Ce.on("player-left",i=>{$h(i.id),document.getElementById(`slot-${i.id}`)?.remove()}),Ce.on("player-ready-changed",i=>{const e=document.getElementById(`slot-${i.id}`);if(e){const t=e.querySelector(".slot-ready");t&&(t.innerText=i.ready?"✅":"⬜")}}),Ce.on("game-start",i=>{isHost=Ce.id===i.hostId,isHost||(bt.isNetworkClient=!0),Uc(),Ut?Vo():Vt.lock()}),Ce.on("spawn-enemy",i=>{if(isHost||!pt)return;const e=new P(i.x,0,i.z),t=new Oc(i.type,e);t.nid=i.nid,t.mesh.visible=!0,bt.activeEnemies.push(t),bt.enemiesToSpawn=Math.max(0,bt.enemiesToSpawn-1),bt.enemiesAlive++}),Ce.on("enemy-killed",i=>{const e=bt.activeEnemies.find(t=>t.nid===i.nid);e&&!e.isDead&&e.die(!0)}),Ce.on("wave-complete",()=>{if(!isHost){bt.isBreak=!0;const i=document.getElementById("wave-complete");i?(i.style.display="flex",setTimeout(()=>{i.style.display="none",Lo()},1500)):Lo()}}),Ce.on("shop-closed",()=>{isHost||Al()}),Ce.on("host-changed",i=>{Ce.id===i.newHostId&&(isHost=!0,bt.isNetworkClient=!1,fr("YOU ARE NOW THE HOST"))}),Ce.on("disconnect",()=>{Ts.forEach((i,e)=>$h(e))}))}function ds(i){document.querySelectorAll(".mp-screen").forEach(e=>e.classList.remove("active")),document.getElementById(i)?.classList.add("active")}function Uc(){document.querySelectorAll(".mp-screen").forEach(i=>i.classList.remove("active"))}function Zh(i,e){const t=document.getElementById("lobby-players");if(!t)return;t.innerHTML="";const n=Object.values(i);for(let s=0;s<4;s++){const r=document.createElement("div");if(r.className="lobby-player",n[s]){const o=n[s].id===e,a=n[s].platform==="mobile"?"📱":"💻",c=n[s].ready?"✅":"⬜";r.id=`slot-${n[s].id}`,r.innerHTML=`<span class="slot-icon">${a}</span>
                <span class="${o?"slot-you":"slot-other"}">${n[s].username}${o?" (YOU)":""}</span>
                <span class="slot-ready" style="margin-left:auto">${c}</span>`}else r.innerHTML='<span class="slot-icon">⚫</span><span class="slot-empty">Empty slot</span>';t.appendChild(r)}}function pv(){["btn-platform-pc","btn-platform-mobile"].forEach(a=>{const c=document.getElementById(a),l=c?.cloneNode(!0);c&&l&&(c.parentNode?.replaceChild(l,c),l.addEventListener("click",()=>{Ut=a==="btn-platform-mobile";const u=document.getElementById("platform-selection");u&&(u.style.display="none"),ds("username-screen"),document.getElementById("username-input")?.focus()}))});const i=document.getElementById("btn-username-continue"),e=document.getElementById("username-input"),t=document.getElementById("username-error");i?.addEventListener("click",()=>{const a=(e?.value||"").trim();if(a.length<2){t.innerText="Min 2 characters required!";return}t.innerText="",Ra=a.toUpperCase(),Kh(),ds("room-screen")}),e?.addEventListener("keydown",a=>{a.key==="Enter"&&i?.click()}),document.getElementById("btn-username-back")?.addEventListener("click",()=>{Uc();const a=document.getElementById("platform-selection");a&&(a.style.display="block")}),document.getElementById("btn-create-room")?.addEventListener("click",()=>{const a=document.getElementById("room-error"),c=()=>{if(!Ce||!Ce.connected){a.innerText="⚠️ Server unreachable. Try again or play Solo.";return}a.innerText="";const l=Ut?"mobile":"pc";Ce.emit("create-room",{username:Ra,platform:l},u=>{if(!u||u.error){a.innerText=u?.error||"Server error.";return}Ys=u.roomCode,vn=!0,isHost=!0,document.getElementById("lobby-code").innerText=Ys,Zh(u.players,Ce.id),ds("lobby-screen")})};if(Ce?.connected)c();else{Ce||Kh(),a.innerText="🔄 Connecting to server...";let l=0;const u=setInterval(()=>{l+=200,Ce?.connected?(clearInterval(u),c()):l>=5e3&&(clearInterval(u),a.innerText="⚠️ Server offline. Use SOLO PLAY instead or check Railway.")},200)}});const n=document.createElement("button");n.id="btn-solo-play",n.className="mp-btn",n.style.cssText="margin-top:6px;background:rgba(255,255,255,0.08);color:#aaa;border:1px solid #555;font-size:13px;",n.innerText="🎮 SOLO PLAY (no server)",n.addEventListener("click",()=>{vn=!1,isHost=!0,Uc(),Ut?Vo():Vt.lock()}),document.getElementById("room-screen")?.appendChild(n);const s=document.getElementById("room-code-input"),r=document.getElementById("btn-join-room");r?.addEventListener("click",()=>{if(!Ce)return;const a=document.getElementById("room-error"),c=(s?.value||"").trim().toUpperCase();if(c.length!==6){a.innerText="Code must be 6 characters!";return}const l=Ut?"mobile":"pc";Ce.emit("join-room",{roomCode:c,username:Ra,platform:l},u=>{if(u.error){a.innerText=u.error;return}Ys=u.roomCode,vn=!0,document.getElementById("lobby-code").innerText=Ys,Zh(u.players,Ce.id),Object.values(u.players).forEach(p=>{p.id!==Ce.id&&Dc(p.id,p.username,p.x,p.y,p.z)}),ds("lobby-screen")})}),s?.addEventListener("keydown",a=>{a.key==="Enter"&&r?.click()}),document.getElementById("btn-room-back")?.addEventListener("click",()=>{ds("username-screen")});const o=document.getElementById("btn-lobby-start");if(o){o.innerText="⚡ READY",o.style.background="transparent",o.style.color="#00ffcc",o.style.border="2px solid #00ffcc";let a=!1;o.addEventListener("click",()=>{Ce&&Ce.emit("toggle-ready",c=>{if(a=c.ready,Ce?.id){const l=document.getElementById(`slot-${Ce.id}`);if(l){const u=l.querySelector(".slot-ready");u&&(u.innerText=a?"✅":"⬜")}}a?(o.innerText="❌ CANCEL READY",o.classList.add("danger"),o.classList.remove("primary")):(o.innerText="⚡ READY",o.classList.remove("danger"))})})}document.getElementById("btn-lobby-leave")?.addEventListener("click",()=>{Ce?.disconnect(),vn=!1,Ys="",ds("room-screen")})}let mv=0;function gv(){!vn||!Ce?.connected||!pt||++mv%3===0&&Ce.emit("player-update",{x:Ee.position.x,y:Ee.position.y,z:Ee.position.z,rotY:Ee.rotation.y})}const jh=document.getElementById("main-menu"),rr=document.getElementById("loading-screen"),Nc=document.getElementById("load-bar"),Ds=document.getElementById("ui-layer"),cn=document.getElementById("crosshair"),_v=document.getElementById("btn-start"),Jh=document.getElementById("fps-counter"),jr=document.getElementById("enemies-count"),xv=document.getElementById("health-bar"),vv=document.getElementById("stamina-bar"),To=document.getElementById("weapon-name"),Qh=document.getElementById("ammo-current"),eu=document.getElementById("ammo-reserve"),Pi=document.getElementById("stage-text"),Jr=document.getElementById("horde-text"),tu=document.getElementById("coins-count"),ui=document.querySelector(".loading-text");let hn=100,Jt=100,Oi=0,Qn=!1,mi=0;const mo=100,ml=100;let pt=!1,yi=!1,Ut=!1,go=100,or=1,wo=1,_r=!1;const gl=document.getElementById("pause-screen");let ws=!1;new P(30,0,-40);let Ao="UNKNOWN";const ei=[{name:"GUN",damage:30,fireRate:150,magSize:40,ammoCurrent:40,ammoReserve:160,reloadTime:1800,recoilAmount:.05,isReloading:!1,lastShotTime:0,isAutomatic:!0,pellets:1},{name:"LASER GUN",damage:20,fireRate:300,magSize:20,ammoCurrent:20,ammoReserve:60,reloadTime:1500,recoilAmount:0,isReloading:!1,lastShotTime:0,isAutomatic:!1,pellets:1},{name:"ROCKET LAUNCHER",damage:120,fireRate:1200,magSize:1,ammoCurrent:1,ammoReserve:8,reloadTime:2500,recoilAmount:.5,isReloading:!1,lastShotTime:0,isAutomatic:!1,pellets:1},{name:"MINI GUN",damage:15,fireRate:50,magSize:200,ammoCurrent:200,ammoReserve:400,reloadTime:3e3,recoilAmount:.02,isReloading:!1,lastShotTime:0,isAutomatic:!0,pellets:1},{name:"FIRE GUN",damage:10,fireRate:80,magSize:100,ammoCurrent:100,ammoReserve:300,reloadTime:2e3,recoilAmount:.01,isReloading:!1,lastShotTime:0,isAutomatic:!0,pellets:1}],Be=new Hd;Be.background=new We(1706798);Be.fog=new Do(1706798,.025);const Ee=new Qt(70,window.innerWidth/window.innerHeight,.1,1e3);Ee.position.set(0,1.6,0);const _i=new hx({antialias:!1,powerPreference:"high-performance"});_i.setSize(window.innerWidth,window.innerHeight);_i.setPixelRatio(Math.min(window.devicePixelRatio,1));_i.shadowMap.enabled=!1;document.body.appendChild(_i.domElement);class yv{constructor(){this.menuOsc=null,this.gameOsc=null,this.musicGain=null,this.bgAudio=null,this.currentTrack="",this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.connect(this.ctx.destination)}playShot(){this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="square",e.frequency.setValueAtTime(880,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(110,this.ctx.currentTime+.1),t.gain.setValueAtTime(.1,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.1),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.1)}playGroan(){this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(120+Math.random()*40,this.ctx.currentTime),e.frequency.linearRampToValueAtTime(80,this.ctx.currentTime+.5),t.gain.setValueAtTime(.05,this.ctx.currentTime),t.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.6),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.6)}playBeep(){this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1200,this.ctx.currentTime),e.frequency.setValueAtTime(800,this.ctx.currentTime+.05),t.gain.setValueAtTime(.03,this.ctx.currentTime),t.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.1),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.1)}playExplosion(){this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createBufferSource(),t=this.ctx.createBuffer(1,this.ctx.sampleRate*.5,this.ctx.sampleRate),n=t.getChannelData(0);for(let o=0;o<n.length;o++)n[o]=Math.random()*2-1;e.buffer=t;const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(1e3,this.ctx.currentTime),s.frequency.exponentialRampToValueAtTime(10,this.ctx.currentTime+.4);const r=this.ctx.createGain();r.gain.setValueAtTime(.3,this.ctx.currentTime),r.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.5),e.connect(s),s.connect(r),r.connect(this.masterGain),e.start()}playLaser(){this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1200,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(400,this.ctx.currentTime+.15),t.gain.setValueAtTime(.05,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.15),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.15)}playFlamethrower(){this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createBufferSource(),t=this.ctx.createBuffer(1,this.ctx.sampleRate*.08,this.ctx.sampleRate),n=t.getChannelData(0);for(let o=0;o<n.length;o++)n[o]=(Math.random()*2-1)*.6;e.buffer=t;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.value=300+Math.random()*200,s.Q.value=.5;const r=this.ctx.createGain();r.gain.setValueAtTime(.07,this.ctx.currentTime),r.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.08),e.connect(s),s.connect(r),r.connect(this.masterGain),e.start()}playPickup(){this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(440,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(880,this.ctx.currentTime+.1),t.gain.setValueAtTime(.1,this.ctx.currentTime),t.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.2),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.2)}startMenuMusic(){this.playTrack("/lobby.mp3",.05)}startGameMusic(){this.playTrack("/game.mp3",.08)}startWinMusic(){this.playTrack("/win.mp3",.1)}startLossMusic(){this.playTrack("/loss.mp3",.1)}playTrack(e,t){this.currentTrack!==e&&(this.stopMusic(),this.ctx.state==="suspended"&&this.ctx.resume(),this.bgAudio=new Audio(e),this.bgAudio.loop=e==="/lobby.mp3"||e==="/game.mp3",this.bgAudio.volume=t,this.bgAudio.play().catch(()=>{console.log("Audio blocked or file missing:",e)}),this.currentTrack=e)}stopMusic(){this.bgAudio&&(this.bgAudio.pause(),this.bgAudio.src="",this.bgAudio=null),this.currentTrack=""}}const it=new yv;document.body.addEventListener("click",()=>{!pt&&!it.menuOsc&&it.startMenuMusic()},{once:!0});class Mv{constructor(e,t,n="ROBOT"){this.isDead=!1,this.mesh=new Z(new Le(.1,.1,.8),new Rt({color:16711680})),this.mesh.position.copy(e);const s=e.clone().add(t);this.mesh.lookAt(s),this.velocity=t.multiplyScalar(20),this.shooterName=n,Be.add(this.mesh),it.playShot()}update(e){if(this.mesh.position.addScaledVector(this.velocity,e),Ee.position.distanceTo(this.mesh.position)<1){Ao=this.shooterName,sf(15),this.isDead=!0;return}(this.mesh.position.y<0||Math.abs(this.mesh.position.x)>60||Math.abs(this.mesh.position.z)>60)&&(this.isDead=!0)}destroy(){Be.remove(this.mesh)}}const Xn=[];class Sv{constructor(e,t){this.isDead=!1,this.lifetime=2,this.damage=100,this.mesh=new Z(new Tt(.1,.1,.6,8),new nt({color:2236962,emissive:16724736})),this.mesh.position.copy(e),this.mesh.quaternion.setFromUnitVectors(new P(0,1,0),t),this.velocity=t.multiplyScalar(40),Be.add(this.mesh)}update(e){if(this.mesh.position.add(this.velocity.clone().multiplyScalar(e)),this.lifetime-=e,this.lifetime<=0)this.explode();else for(const t of bt.activeEnemies)if(!t.isDead&&this.mesh.position.distanceTo(t.mesh.position)<2){this.explode();break}}explode(){this.isDead=!0,it.playExplosion(),pr.spawn(this.mesh.position,40),bt.activeEnemies.forEach(e=>{const t=e.mesh.position.distanceTo(this.mesh.position);t<8&&e.takeDamage(100*(1-t/8),new P)})}destroy(){Be.remove(this.mesh)}}const gs=[],Qr=[];class Ev{constructor(e){this.isPickedUp=!1,this.mesh=new vt,this.mesh.position.copy(e);const t=new Le(.6,.4,.4),n=new nt({color:2263842,metalness:.3}),s=new Z(t,n),r=new Es(1,.05,8,24),o=new Rt({color:65280}),a=new Z(r,o);a.rotation.x=Math.PI/2,this.mesh.add(s,a),Be.add(this.mesh)}update(e,t){this.mesh.rotation.y+=.03,this.mesh.position.y=.5+Math.sin(e/300)*.2,t.distanceTo(this.mesh.position)<2.5&&this.pickup()}pickup(){this.isPickedUp=!0,Be.remove(this.mesh),it.playPickup(),ei.forEach(e=>{e.ammoReserve=Math.min(e.ammoReserve+e.magSize*2,e.magSize*10)}),Us()}}const tr=[];class bv{constructor(e){this.isPickedUp=!1,this.mesh=new vt,this.mesh.position.copy(e);const t=new Le(.5,.8,.3),n=new nt({color:5592405,metalness:.8}),s=new Z(t,n),r=new Tt(.1,.15,.4),o=new nt({color:2236962,emissive:61183,emissiveIntensity:.8}),a=new Z(r,o);a.position.set(-.35,-.2,0);const c=new Z(r,o);c.position.set(.35,-.2,0);const l=new Es(1.5,.05,8,24),u=new Rt({color:11141375}),p=new Z(l,u);p.rotation.x=Math.PI/2;const h=new Ps(61183,2,8);h.position.y=.5,this.mesh.add(s,a,c,h,p),Be.add(this.mesh)}update(e,t){this.mesh.rotation.y+=.01,this.mesh.position.y=1+Math.sin(e/200)*.1,t.distanceTo(this.mesh.position)<2.5&&this.pickup()}pickup(){this.isPickedUp=!0,Be.remove(this.mesh),it.playPickup(),Qn=!0,Oi=ml,document.getElementById("fuel-bar").style.display="block",fr("JETPACK"),wn()}}const nr=[];nr.push(new bv(new P(15,0,-25)));const ln=[0];let Vi=0;function bn(i){Vi!==i&&(Vi=i,Us(),Sl(),lt.position.y=-.3)}function Tv(i){ln.includes(i)||(ln.push(i),Vi=i,Us(),Sl(),fr(ei[i].name))}function fr(i){const e=document.createElement("div");e.style.cssText="position:absolute; bottom:20%; left:50%; transform:translateX(-50%); color:#ffff00; font-family:Impact; font-size:32px; text-shadow:2px 2px #000; pointer-events:none; z-index:100;",e.innerText=`NEW WEAPON: ${i}`,document.body.appendChild(e),setTimeout(()=>{e.style.opacity="0",e.style.transition="opacity 1s",setTimeout(()=>e.remove(),1e3)},2e3)}function Us(){const i=ei[Vi];To&&(To.innerText=i.name),Qh&&(Qh.innerText=i.ammoCurrent.toString()),eu&&(eu.innerText=i.ammoReserve.toString())}function wn(){if(xv.style.width=`${Math.max(0,hn/go*100)}%`,vv.style.width=`${Math.max(0,Jt/mo*100)}%`,Qn){const e=document.getElementById("fuel-bar");e.style.width=`${Math.max(0,Oi/ml*100)}%`}tu&&(tu.innerText=mi.toString());const i=document.getElementById("damage-vignette");if(i)if(hn<30){i.style.opacity="1";const e=(30-hn)/30;i.style.boxShadow=`inset 0 0 ${e*100}px rgba(255,0,0,${e})`}else i.style.opacity="0";hn<=0&&pt&&rf()}function sf(i){if(!pt||hn<=0)return;hn-=i;const e=document.createElement("div");e.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(255,0,0,0.4);pointer-events:none;z-index:100;transition:opacity 0.2s;",document.body.appendChild(e),setTimeout(()=>{e.style.opacity="0",setTimeout(()=>e.remove(),200)},50),wn(),it.playHurt?it.playHurt():it.playGroan(),hn<=0&&(hn=0,rf())}function rf(){if(!pt)return;pt=!1,it.startLossMusic(),Ut||Vt.unlock();const i=document.getElementById("game-over");if(i){i.style.display="flex";const t=document.getElementById("final-stats");t&&(t.innerText=`Waves Survived: ${bt.currentWave>0?bt.currentWave-1:0}`);const n=document.getElementById("killed-by");if(n){const s=Ao==="UNKNOWN"?"A GRUESOME MONSTER":Ao.toUpperCase();n.innerText=`KILLED BY: ${s}`}}Ds.style.display="none",cn.style.display="none";const e=document.getElementById("mobile-controls");e&&(e.style.display="none")}const Fc=new vt;function wv(){const i=new nt({color:16777215,transparent:!0,opacity:.15,flatShading:!0,fog:!1});for(let e=0;e<15;e++){const t=new vt,n=3+Math.floor(Math.random()*4);for(let o=0;o<n;o++){const a=new No(5+Math.random()*5,0),c=new Z(a,i);c.position.set((Math.random()-.5)*10,(Math.random()-.5)*5,(Math.random()-.5)*10),c.scale.set(1.5,.6,1),t.add(c)}const s=Math.random()*Math.PI*2,r=50+Math.random()*100;t.position.set(Math.cos(s)*r,50+Math.random()*15,Math.sin(s)*r),Fc.add(t)}Be.add(Fc)}const Av=new hp(2956110,1710634,.4);Be.add(Av);Be.fog=new Do(1706814,.008);const of=new Ps(16737792,3,25);of.position.set(30,3,-40);Be.add(of);let _o;function Rv(){const i=new vt,e=new al(.8,0),t=new Rt({color:16763904,wireframe:!0}),n=new Z(e,t);i.add(n);const s=new vi(.4,8,8),r=new Rt({color:16724787}),o=new Z(s,r);return i.add(o),i.position.set(30,8,-40),Be.add(i),i}wv();_o=Rv();const af=new Ps(3342591,2,40);af.position.set(-30,5,30);Be.add(af);const On=new dp(16777215,.7);On.position.set(-60,100,-120);On.castShadow=!0;On.shadow.camera.left=-80;On.shadow.camera.right=80;On.shadow.camera.top=80;On.shadow.camera.bottom=-80;On.shadow.mapSize.width=512;On.shadow.mapSize.height=512;Be.add(On);const Cv=new vi(14,32,32),Pv=new Rt({color:16777215,fog:!1}),_l=new Z(Cv,Pv);_l.position.copy(On.position);Be.add(_l);const Lv=new vi(18,32,32),Iv=new Rt({color:16777215,transparent:!0,opacity:.2,side:Yt,fog:!1}),cf=new Z(Lv,Iv);cf.position.copy(_l.position);Be.add(cf);const $t=[],eo=new gr,nu=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1)],xl=new ti(300,300,32,32),iu=xl.attributes.position;for(let i=0;i<iu.count;i++)i%33!==0&&i%33!==32&&Math.floor(i/33)!==0&&Math.floor(i/33)!==32&&iu.setZ(i,Math.random()*.8-.4);xl.computeVertexNormals();const Dv=new nt({color:2234901,roughness:.9,metalness:.1,flatShading:!0}),vl=new Z(xl,Dv);vl.rotation.x=-Math.PI/2;vl.receiveShadow=!0;Be.add(vl);const su=145,Uv=new Tt(su,su,10,32,1,!0),Nv=new Rt({visible:!1}),yl=new Z(Uv,Nv);yl.position.y=5;Be.add(yl);$t.push(yl);const Fv=.2,lf=.9,hf=new mr(Fv,lf,3);hf.translate(0,lf/2,0);const Ov=new nt({color:3820826,flatShading:!0}),uf=8e3,ff=new jd(hf,Ov,uf),Li=new At;for(let i=0;i<uf;i++){const e=(Math.random()-.5)*120,t=(Math.random()-.5)*120;Math.abs(e)<3&&Math.abs(t)<3||(Li.position.set(e,0,t),Li.rotation.y=Math.random()*Math.PI,Li.rotation.x=(Math.random()-.5)*.2,Li.rotation.z=(Math.random()-.5)*.2,Li.scale.setScalar(.5+Math.random()),Li.updateMatrix(),ff.setMatrixAt(i,Li.matrix))}Be.add(ff);function Bv(){const i=new vt,e=new Tt(.3,.4,3,5),t=new xs({color:4073251}),n=new Z(e,t);n.position.y=1.5,n.castShadow=!0,n.receiveShadow=!0,i.add(n);const s=new xs({color:2232576});for(let r=0;r<5;r++){const o=new Tt(.05,.1,1.5,4),a=new Z(o,s);a.position.y=2+Math.random()*2,a.rotation.x=Math.random()*Math.PI,a.rotation.z=Math.random()*Math.PI,a.castShadow=!0,i.add(a)}if(Math.random()>.5){const r=new xs({color:1781794});for(let o=0;o<3;o++){const a=new mr(1.5-o*.4,2,6),c=new Z(a,r);c.position.y=2.5+o*1.5,i.add(c)}}return i}for(let i=0;i<60;i++){const e=Bv(),t=Math.random()*Math.PI*2,n=10+Math.random()*50;e.position.set(Math.cos(t)*n,0,Math.sin(t)*n),e.rotation.y=Math.random()*Math.PI,e.scale.setScalar(.8+Math.random()*.6),Be.add(e)}function kv(){const i=new vt,e=new No(.8,0),t=new nt({color:1721626,flatShading:!0});for(let n=0;n<3;n++){const s=new Z(e,t);s.position.set((Math.random()-.5)*.8,Math.random()*.5,(Math.random()-.5)*.8),s.scale.setScalar(.5+Math.random()*.8),s.castShadow=!0,s.receiveShadow=!0,i.add(s)}return i}for(let i=0;i<40;i++){const e=kv(),t=Math.random()*Math.PI*2,n=5+Math.random()*80;e.position.set(Math.cos(t)*n,.4,Math.sin(t)*n),Be.add(e)}function zv(){const i=new vt,e=new nt({color:5125166,flatShading:!0});for(let t=0;t<2;t++){const n=new Z(new Le(.1,1.2,.1),e);n.position.set(t===0?-1:1,.6,0),n.castShadow=!0,i.add(n)}for(let t=0;t<3;t++){const n=new Z(new Le(2.1,.1,.05),e);n.position.set(0,.3+t*.4,0),n.castShadow=!0,i.add(n),$t.push(n)}return i}function Vv(){const i=new vt,e=[5533306,7901340,4545124],t=new nt({color:e[Math.floor(Math.random()*e.length)],flatShading:!0}),n=new Z(new Le(2,.6,4),t);n.position.y=.4,n.castShadow=!0,n.receiveShadow=!0,i.add(n),$t.push(n);const s=new Z(new Le(1.6,.6,2),t);if(s.position.set(0,1,-.2),s.castShadow=!0,i.add(s),$t.push(s),Math.random()>.7){const a=new Ps(Math.random()>.5?16711680:16755200,2,8);a.position.set(0,1.2,0),i.add(a)}const r=new Le(.4,.4,.4),o=new nt({color:1118481});for(let a=-1;a<=1;a+=2)for(let c=-1;c<=1;c+=2){const l=new Z(r,o);l.position.set(a*.9,.2,c*1.5),i.add(l)}return i}function Gv(){const i=new vt,e=new nt({color:3622735,flatShading:!0}),t=new nt({color:6111287,flatShading:!0}),n=new Z(new Le(8,5,6),e);n.position.y=2.5,n.castShadow=!0,n.receiveShadow=!0,i.add(n),$t.push(n);const s=new Z(new Le(9,.5,7),t);s.position.y=5.25,s.castShadow=!0,i.add(s);const r=new Le(3.5,1.2,.2),o=new Rt({color:0}),a=new Z(r,o);a.position.set(0,4,3.1),i.add(a);const c=new ti(3.2,.8),l=new Rt({color:16711680,transparent:!0,opacity:.8}),u=new Z(c,l);return u.position.set(0,4,3.15),i.add(u),i}function Hv(){const i=new vt,e=new xs({color:1710638}),t=new Z(new Le(6,8,6),e);t.position.y=4,i.add(t),$t.push(t);const n=new Z(new Le(4,6,4),e);n.position.y=11,i.add(n),$t.push(n);const s=new Z(new Le(3,4,3),e);s.position.y=16,i.add(s),$t.push(s);const r=new Ps(65535,5,30);r.position.set(0,18.5,0),i.add(r);const o=new vi(.5,8,8),a=new Rt({color:65535}),c=new Z(o,a);return c.position.set(0,18.5,0),i.add(c),i}function Wv(){const i=new vt,e=new xs({color:5125166}),t=new xs({color:2171169}),n=new Z(new Le(5,4,5),e);n.position.y=2,i.add(n),$t.push(n);const s=new Z(new mr(4,3,4),t);s.position.y=5.5,s.rotation.y=Math.PI/4,i.add(s);const r=new Z(new Le(5,.2,5),new Rt({visible:!1}));return r.position.y=4.1,i.add(r),$t.push(r),i}const df=Hv();df.position.set(-60,0,60);Be.add(df);for(let i=0;i<10;i++){const e=Wv(),t=i/10*Math.PI*2+Math.random(),n=25+Math.random()*35;e.position.set(Math.cos(t)*n,0,Math.sin(t)*n),e.rotation.y=Math.random()*Math.PI,Be.add(e)}const pf=30,mf=-40,gf=Gv();gf.position.set(pf,0,mf);Be.add(gf);const zo=document.createElement("canvas");zo.width=512;zo.height=128;const ni=zo.getContext("2d");ni.fillStyle="rgba(0,0,0,0)";ni.fillRect(0,0,512,128);ni.font="bold 52px Impact";ni.textAlign="center";ni.strokeStyle="#ff0000";ni.lineWidth=6;ni.strokeText("☠ BLACK MARKET",256,80);ni.fillStyle="#ffcc00";ni.fillText("☠ BLACK MARKET",256,80);const Xv=new Du(zo),qv=new sl({map:Xv,depthTest:!1}),Ml=new Cu(qv);Ml.position.set(pf,7.5,mf);Ml.scale.set(6,1.5,1);Be.add(Ml);for(let i=0;i<8;i++){const e=Vv(),t=Math.random()*Math.PI*2,n=15+Math.random()*45;e.position.set(Math.cos(t)*n,0,Math.sin(t)*n),e.rotation.y=Math.random()*Math.PI,Be.add(e)}for(let i=0;i<15;i++){const e=zv(),t=Math.random()*Math.PI*2,n=10+Math.random()*50;e.position.set(Math.cos(t)*n,0,Math.sin(t)*n),e.rotation.y=Math.random()*Math.PI,Be.add(e)}for(let i=0;i<15;i++){const e=Math.random()*Math.PI*2,t=20+Math.random()*70,n=new P(Math.cos(e)*t,.5,Math.sin(e)*t);tr.push(new Ev(n))}const ps={0:{health:70,speed:2.2,damage:10,shirtColor:6765239,skinColor:5606191,size:1,attackRange:1.5,attackCooldown:1e3,reward:15,name:"ZOMBIE"},1:{health:180,speed:1.3,damage:25,shirtColor:3622735,skinColor:7162945,size:1.4,attackRange:1.8,attackCooldown:1500,reward:50,name:"TANK ZOMBIE"},2:{health:40,speed:3.8,damage:5,shirtColor:12000284,skinColor:8550167,size:.85,attackRange:1.2,attackCooldown:500,reward:30,name:"FAST ZOMBIE"},3:{health:60,speed:2.5,damage:12,shirtColor:2201331,skinColor:13750737,size:1,attackRange:1.5,attackCooldown:900,reward:20,name:"HUMAN ZOMBIE"},4:{health:250,speed:2.5,damage:15,shirtColor:4473924,skinColor:8947848,size:1.1,attackRange:15,attackCooldown:2e3,reward:100,name:"ROBOT"},5:{health:1200,speed:1.8,damage:45,shirtColor:1710618,skinColor:2964765,size:2.5,attackRange:2.5,attackCooldown:1200,reward:500,name:"GOLIATH"},6:{health:2e3,speed:1.2,damage:20,shirtColor:2236962,skinColor:5592405,size:2.2,attackRange:18,attackCooldown:250,reward:1e3,name:"SENTINEL"},7:{health:6e3,speed:4.5,damage:40,shirtColor:0,skinColor:5592405,size:4.5,attackRange:15,attackCooldown:300,reward:5e3,name:"ULTIMATE MECHA-ZOMBIE"}};class Oc{constructor(e,t){this.lastAttackTime=0,this.bobOffset=Math.random()*Math.PI*2,this.isDead=!1,this.isFlinching=!1,this.flinchTimer=0,this.spawnY=-2,this.spawnTime=2,this.spawnTimer=0,this.isAlive=!0,this.avoidVector=new P,this.bodyParts=[],this.type=e,this.nid=`e_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;const n=ps[e];this.health=n.health,this.maxHealth=n.health,this.speed=n.speed,this.damage=n.damage,this.attackRange=n.attackRange,this.attackCooldown=n.attackCooldown,this.shirtColor=n.shirtColor,this.skinColor=n.skinColor,this.mesh=new vt;const s=n.size,r=new nt({color:n.skinColor,flatShading:!0}),o=new nt({color:n.shirtColor,flatShading:!0}),a=new nt({color:2503224,flatShading:!0}),c=new nt({color:1710618,flatShading:!0}),l=(u,p)=>(this.bodyParts.push({mesh:u,color:p}),u);if(this.type===4||this.type===6||this.type===7){const u=new nt({color:n.skinColor,metalness:.8,roughness:.2}),p=new Rt({color:this.type===6||this.type===7?16711680:65535});this.type===7&&u.color.setHex(1118481);const h=new vi(.4*s,12,12),m=l(new Z(h,u),n.skinColor);m.position.set(0,.4*s,0),this.mesh.add(m);const _=new Tt(.5*s,.6*s,.8*s,8),M=l(new Z(_,u),n.skinColor);M.position.set(0,1*s,0),this.mesh.add(M);let d;if(this.type===7){const E=new Le(.5*s,.5*s,.5*s),V=new nt({color:2964765,flatShading:!0});d=l(new Z(E,V),2964765)}else{const E=new vi(.35*s,16,16);d=l(new Z(E,u),n.skinColor)}d.position.set(0,1.6*s,0),this.mesh.add(d);const f=new Le(.4*s,.1*s,.1*s),v=new Z(f,p);v.position.set(0,.05*s,.3*s),d.add(v);const b=new Tt(.02*s,.02*s,.4*s),S=new Z(b,u);S.position.set(-.15*s,.3*s,0),S.rotation.z=-.3;const A=new Z(b,u);A.position.set(.15*s,.3*s,0),A.rotation.z=.3,d.add(S,A);const w=new Le(.2*s,.2*s,.7*s),R=l(new Z(w,u),n.skinColor);R.position.set(-.6*s,1.1*s,.2*s);const x=l(new Z(w,u),n.skinColor);x.position.set(.6*s,1.1*s,.2*s),this.mesh.add(R,x),this._torso=M}else{const u=new Le(.22*s,.15*s,.35*s),p=l(new Z(u,c),1710618);p.position.set(-.2*s,.075*s,.06*s);const h=l(new Z(u,c),1710618);h.position.set(.2*s,.075*s,.06*s),this.mesh.add(p,h);const m=new Le(.24*s,.6*s,.3*s),_=l(new Z(m,a),2503224);_.position.set(-.2*s,.45*s,0);const M=l(new Z(m,a),2503224);M.position.set(.2*s,.45*s,0),this.mesh.add(_,M);const d=new Le(.72*s,.7*s,.38*s),f=l(new Z(d,o),n.shirtColor);f.position.set(0,1.1*s,0),this.mesh.add(f);const v=new Le(.2*s,.5*s,.2*s),b=l(new Z(v,o),n.shirtColor);b.position.set(-.46*s,1.1*s,.2*s),b.rotation.x=-Math.PI/3;const S=l(new Z(v,o),n.shirtColor);S.position.set(.46*s,1.1*s,.2*s),S.rotation.x=-Math.PI/3,this.mesh.add(b,S);const A=new Le(.17*s,.45*s,.17*s),w=l(new Z(A,r),n.skinColor);w.position.set(-.46*s,.87*s,.35*s),w.rotation.x=-Math.PI/2.5;const R=l(new Z(A,r),n.skinColor);R.position.set(.46*s,.87*s,.35*s),R.rotation.x=-Math.PI/2.5,this.mesh.add(w,R);const x=new Le(.48*s,.48*s,.48*s),E=l(new Z(x,r),n.skinColor);E.position.y=1.65*s,E.castShadow=!0,this.mesh.add(E);const V=new Rt({color:16711680}),C=new ti(.12*s,.09*s),N=new Z(C,V);N.position.set(-.12*s,.05*s,.245*s);const B=new Z(C,V);B.position.set(.12*s,.05*s,.245*s),E.add(N,B),this._torso=f}this.mesh.position.copy(t),this.mesh.position.y=this.spawnY,this.mesh.visible=!1,Be.add(this.mesh),this.mesh.frustumCulled=!1,this.mesh.traverse(u=>{if(u.frustumCulled=!1,u.isMesh){const p=u;p.geometry.boundingSphere||p.geometry.computeBoundingSphere(),p.geometry.boundingSphere.radius=9999}})}takeDamage(e,t){if(this.isDead)return;this.health-=e,vn&&Ce?.connected&&Ce.emit("enemy-hit",{enemyId:this.nid,damage:e,kx:t.x,ky:t.y,kz:t.z}),this.isFlinching=!0,this.flinchTimer=.12;for(const s of this.bodyParts)s.mesh.material.color.setHex(16777215);const n=t.clone();n.y=0,this.mesh.position.add(n),this.mesh.position.y=0,this.health<=0&&this.die()}die(e=!1){this.isDead=!0,e||(mi+=ps[this.type].reward,wn(),vn&&Ce?.connected&&Ce.emit("enemy-killed",{nid:this.nid}));const t=this.mesh.position.clone();t.y+=1,pr.spawn(t,60),this.mesh.visible=!1,this._torso,setTimeout(()=>{Be.remove(this.mesh)},50)}update(e,t,n){if(this.isDead)return;if(this.spawnTimer<this.spawnTime){if(this.spawnTimer===0){const a=this.mesh.position.clone();a.y=.1,pr.spawn(a,15)}this.spawnTimer+=e,this.mesh.position.y=Js.lerp(this.spawnY,0,this.spawnTimer/this.spawnTime);return}if(this.isFlinching){if(this.flinchTimer-=e,this.flinchTimer<=0){this.isFlinching=!1;for(const a of this.bodyParts)a.mesh.material.color.setHex(a.color)}return}const s=new P(t.x,0,t.z),o=new P(this.mesh.position.x,0,this.mesh.position.z).distanceTo(s);if(o>this.attackRange&&o<200){const a=new P().subVectors(t,this.mesh.position).normalize(),l=new gr(this.mesh.position,a,0,1.5).intersectObjects($t,!0);if(l.length>0){const u=l[0].face?.normal||new P(0,0,1);a.add(u.multiplyScalar(.8)).normalize()}this.mesh.position.add(a.multiplyScalar(this.speed*e)),this.mesh.lookAt(t.x,this.mesh.position.y,t.z)}else o<=this.attackRange&&n-this.lastAttackTime>this.attackCooldown&&(this.attackPlayer(t),this.lastAttackTime=n);if(this.bobOffset+=e*4,this.mesh.position.y=Math.max(0,Math.sin(this.bobOffset)*.04),this.mesh.rotation.z=Math.sin(this.bobOffset*.5)*.03,this.mesh.position.y<-2&&this.die(),this.type===5||this.type===6){const a=ps[this.type].size+Math.sin(n*.002)*.05;this.mesh.scale.setScalar(a)}}attackPlayer(e){if(!this.isDead)if(this.type===4||this.type===6){const t=this.mesh.position.clone();t.y+=1.5*ps[this.type].size;const n=Ee.position.clone(),s=new P().subVectors(n,t).normalize(),r=new Mv(t,s,ps[this.type].name);Xn.push(r),it.playBeep()}else{Ao=ps[this.type].name,sf(this.damage),it.playGroan();const t=document.createElement("div");t.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(255,0,0,0.3);pointer-events:none;z-index:100;",document.body.appendChild(t),setTimeout(()=>t.remove(),100)}}}class $s{constructor(e,t,n=!1,s=16777215){this.active=!0,this.bobOffset=0,this.weaponIdx=t,this.isJetpack=n,this.mesh=new vt,this.mesh.position.copy(e);const r=new vt,o=new nt({color:s,flatShading:!0,emissive:s,emissiveIntensity:.2}),a=new nt({color:2236962,flatShading:!0});if(n)for(let M=-1;M<=1;M+=2){const d=new Z(new Tt(.2,.2,.8,6),o);d.position.set(M*.25,0,0),r.add(d)}else if(t===1){const M=new Z(new Le(.2,.3,.6),a),d=new Z(new Le(.1,.1,.8),o);d.position.set(0,.1,-.2),r.add(M,d)}else if(t===2){const M=new Z(new Tt(.2,.2,1.2,8),a);M.rotation.x=Math.PI/2;const d=new Z(new Tt(.25,.25,.3,8),o);d.rotation.x=Math.PI/2,d.position.z=-.5,r.add(M,d)}else if(t===3){const M=new Z(new Le(.4,.4,.6),a),d=new Z(new Tt(.25,.25,.8,6),o);d.rotation.x=Math.PI/2,d.position.z=-.5,r.add(M,d)}else if(t===4){const M=new Z(new Tt(.3,.3,.7,8),o),d=new Z(new Le(.1,.1,.6),a);d.position.set(0,.2,-.4),r.add(M,d)}else{const M=new Z(new Le(.5,.5,.5),o);r.add(M)}r.position.y=1,this.mesh.add(r);const c=t===3||t===4?1.4:1,l=new Es(c,.08,8,32),u=new Rt({color:s}),p=new Z(l,u);p.rotation.x=Math.PI/2,p.position.y=.05,this.mesh.add(p);const h=new Es(c*.6,.05,8,32),m=new Z(h,u);m.rotation.x=Math.PI/2,m.position.y=.06,this.mesh.add(m);const _=new Ps(s,3,7);_.position.y=1,this.mesh.add(_),Be.add(this.mesh)}update(e,t){this.active&&(this.bobOffset+=e*2,this.mesh.children[0].position.y=1+Math.sin(this.bobOffset)*.3,this.mesh.children[0].rotation.y+=e,this.mesh.children[0].rotation.z+=e*.5,t.distanceTo(this.mesh.position)<2&&this.pickup())}pickup(){if(this.active=!1,Be.remove(this.mesh),it.playPickup(),this.isJetpack){Qn=!0,Oi=ml;const e=document.getElementById("jetpack-ui");e&&(e.style.display="block"),console.log("Jetpack Unlocked!"),fr("JETPACK")}else{Tv(this.weaponIdx);const e=ei[this.weaponIdx];e.ammoCurrent=e.magSize,e.ammoReserve+=e.magSize*3,console.log(e.name+" Unlocked!")}}}const fi=[];class Yv{constructor(){this.currentWave=0,this.enemiesToSpawn=0,this.enemiesAlive=0,this.spawnTimer=0,this.spawnRate=2e3,this.activeEnemies=[],this.isBreak=!1,this.maxWaves=15,this.isGameOver=!1}startNextWave(){if(this.currentWave>=this.maxWaves)return;this.isBreak=!1,it.startGameMusic(),this.currentWave++,this.spawnWeaponDrop(this.currentWave),this.currentWave===this.maxWaves?(this.enemiesToSpawn=1,this.spawnRate=3e3):(this.enemiesToSpawn=6+this.currentWave*4,this.spawnRate=Math.max(400,2e3-this.currentWave*120));const e=document.getElementById("wave-complete");e&&(e.style.display="none"),jr&&(jr.innerText=this.enemiesToSpawn.toString()),Jr&&(Jr.innerText=`Enemies: 0 (To Spawn: ${this.enemiesToSpawn})`),Pi&&(Pi.innerText=`WAVE ${this.currentWave}`,this.currentWave===this.maxWaves?(Pi.innerText="FINAL WAVE: BOSS",Pi.style.color="#ff0000"):Pi.style.color="#ff3333")}spawnWeaponDrop(e){const t=new P(0,0,10);e===1?(fi.push(new $s(new P(-5,0,10),1,!1,65535)),fi.push(new $s(new P(5,0,10),0,!0,65280))):e===2?fi.push(new $s(t,2,!1,16711680)):e===3?fi.push(new $s(t,3,!1,16776960)):e===4&&fi.push(new $s(t,4,!1,16755200))}preSpawnWave(){this.activeEnemies=this.activeEnemies.filter(e=>!e.isDead),this.enemiesAlive=0,this.currentWave=0,this.isGameOver=!1,this.startNextWave()}spawnEnemyWithType(e,t){const n=new Oc(e,t);n.mesh.visible=!0,this.activeEnemies.push(n),this.enemiesAlive++}waveComplete(){if(this.isBreak||this.isGameOver)return;if(this.isBreak=!0,it.startWinMusic(),this.currentWave===this.maxWaves){this.victory();return}vn&&isHost&&Ce?.connected&&Ce.emit("wave-complete",{wave:this.currentWave});const e=document.getElementById("wave-complete"),t=document.getElementById("wc-wave");e&&(e.style.display="flex"),t&&(t.innerText=`WAVE ${this.currentWave} COMPLETE!`),setTimeout(()=>{e&&(e.style.display="none"),Lo()},1500),Pi&&(Pi.innerText="RESTORING...")}victory(){this.isGameOver=!0,Ut||Vt.unlock();const e=document.getElementById("victory-screen");e&&(e.style.display="flex"),it.startWinMusic(),Ds.style.display="none",cn.style.display="none"}update(e,t,n){if(!this.isGameOver){for(let s=fi.length-1;s>=0;s--){const r=fi[s];r.update(e,t),r.active||fi.splice(s,1)}!this.isBreak&&this.enemiesToSpawn>0&&(this.spawnTimer+=e*1e3,this.spawnTimer>=this.spawnRate&&(this.spawnEnemy(),this.spawnTimer=0));for(let s=this.activeEnemies.length-1;s>=0;s--){const r=this.activeEnemies[s];r.update(e,t,n),r.isDead&&(this.activeEnemies.splice(s,1),this.enemiesAlive--,jr&&(jr.innerText=this.enemiesAlive.toString()))}Jr&&(Jr.innerText=`Enemies: ${this.enemiesAlive} (To Spawn: ${this.enemiesToSpawn})`),!(vn&&this.isNetworkClient)&&this.enemiesToSpawn===0&&this.enemiesAlive===0&&!this.isBreak&&this.waveComplete()}}spawnEnemy(){if(this.isNetworkClient||this.enemiesToSpawn<=0)return;let e=0;const t=Math.random();this.currentWave===this.maxWaves?e=7:this.currentWave>=13?t>.6?e=4:t>.4?e=1:t>.2?e=2:e=3:this.currentWave>=10?t>.8?e=6:t>.6?e=4:t>.3?e=1:e=3:this.currentWave>=7?t>.6?e=4:t>.35?e=2:e=0:this.currentWave>=5?t>.8?e=5:t>.5?e=1:e=0:this.currentWave>=3?t>.7?e=4:t>.5?e=1:e=0:this.currentWave>=2&&(t>.7?e=2:t>.5?e=3:e=0);const n=Math.random()*Math.PI*2,s=50+Math.random()*20,r=new P(Ee.position.x+Math.cos(n)*s,0,Ee.position.z+Math.sin(n)*s),o=new Oc(e,r);o.mesh.visible=!0,this.activeEnemies.push(o),this.enemiesToSpawn--,this.enemiesAlive++,vn&&isHost&&Ce?.connected&&Ce.emit("spawn-enemy",{nid:o.nid,type:o.type,x:r.x,z:r.z})}}const bt=new Yv,Vt=new px(Ee,document.body);function Vo(){if(pt)return;document.getElementById("main-menu").style.display="none",rr.style.display="flex",Ds.style.display="none",cn.style.display="none",Ut&&(document.getElementById("mobile-controls").style.display="block"),_i.compile(Be,Ee);let i=0;const e=setInterval(()=>{i+=1,Nc.style.width=`${i}%`,i===10&&pr.warmUp(),ui&&(i<15?ui.innerText=`INITIALIZING VOXELS... ${i}%`:i<30?ui.innerText=`OPTIMIZING SHADERS... ${i}%`:i<45?ui.innerText=`BUFFERING AUDIO... ${i}%`:i<60?ui.innerText=`CALIBRATING PHYSICS... ${i}%`:i<75?ui.innerText=`PRE-RENDERING MESHES... ${i}%`:i<90?ui.innerText=`GENERATING HORDES... ${i}%`:ui.innerText=`READYING WORLD... ${i}%`),i>=100&&(clearInterval(e),Kv(),it.startGameMusic())},30);bt.preSpawnWave()}Vt.addEventListener("lock",()=>{pt||Vo()});Vt.addEventListener("unlock",()=>{pt&&!ws&&!Ut&&(yi=!0,ws=!0,gl.style.display="flex",Ds.style.display="block",cn.style.display="none",it.bgAudio&&it.bgAudio.pause(),An=!1,Rn=!1,Cn=!1,Pn=!1)});const _f=document.getElementById("menu-buttons"),xf=document.getElementById("platform-selection");_v.addEventListener("click",()=>{_f.style.display="none",xf.style.display="flex"});document.getElementById("btn-platform-back")?.addEventListener("click",()=>{xf.style.display="none",_f.style.display="block"});document.getElementById("btn-platform-pc")?.addEventListener("click",()=>{Ut=!1,Vt.lock()});document.getElementById("btn-platform-mobile")?.addEventListener("click",()=>{Ut=!0,(async()=>{if(document.documentElement.requestFullscreen)try{await document.documentElement.requestFullscreen()}catch{}})(),Vo();const i=Wt("btn-mobile-pause");i&&(i.style.display="flex")});document.getElementById("btn-options")?.addEventListener("click",()=>{alert("Options coming soon!")});document.getElementById("btn-exit")?.addEventListener("click",()=>{alert("You cannot escape the night!")});function $v(){yi&&(yi=!1,ws=!1,gl.style.display="none",cn.style.display="block",it.bgAudio&&it.bgAudio.play().catch(()=>{}),Ut||Vt.lock())}document.getElementById("btn-resume")?.addEventListener("click",$v);function Kv(){pt=!0,yi=!1,rr.style.display="none",Ds.style.display="block",cn.style.display="block",xo=performance.now()}const lt=new vt,ms=new nt({color:3355443,flatShading:!0}),ru=new nt({color:6710886,flatShading:!0});function Sl(){const i=[...lt.children];for(const t of i)t!==Go&&lt.remove(t);const e=ei[Vi];if(e.name==="GUN"){const t=new Z(new Le(.15,.22,.7),ms);t.position.set(0,-.1,0);const n=new Z(new Tt(.04,.04,.8,6),ru);n.rotation.x=Math.PI/2,n.position.set(0,-.05,-.8);const s=new Z(new Le(.1,.3,.15),ms);s.position.set(0,-.3,-.1),lt.add(t,n,s)}else if(e.name==="MINI GUN"){const t=new Z(new Le(.4,.4,.8),ms);t.position.set(0,-.1,0);for(let n=0;n<6;n++){const s=new Z(new Tt(.04,.04,.9,6),ru);s.rotation.x=Math.PI/2;const r=.12,o=n/6*Math.PI*2;s.position.set(Math.cos(o)*r,Math.sin(o)*r-.05,-.8),lt.add(s)}lt.add(t)}else if(e.name==="ROCKET LAUNCHER"){const t=new Z(new Tt(.25,.25,1.2,12),ms);t.rotation.x=Math.PI/2,t.position.set(0,-.05,-.4),lt.add(t)}else if(e.name==="LASER GUN"){const t=new Z(new Le(.15,.25,.5),new nt({color:2236962,emissive:65535,emissiveIntensity:.2}));t.position.set(0,-.1,0);const n=new Z(new Le(.08,.08,.6),new nt({color:65535}));n.position.set(0,-.05,-.4),lt.add(t,n)}else if(e.name==="FIRE GUN"){const t=new Z(new Le(.3,.25,.7),ms);t.position.set(0,-.1,0);const n=new Z(new Tt(.07,.1,.4,8),new nt({color:16737792,emissive:16724736,emissiveIntensity:.5}));n.rotation.x=Math.PI/2,n.position.set(0,-.05,-.6);const s=new Z(new Tt(.12,.12,.5,10),ms);s.rotation.z=Math.PI/2,s.position.set(0,.15,.1),lt.add(t,n,s)}}Sl();lt.position.set(.25,-.3,-.4);Ee.add(lt);Be.add(Ee);const Zv=new ti(.3,.3),Bc=new Rt({color:16768256,transparent:!0,opacity:0}),Go=new Z(Zv,Bc);Go.position.set(0,-.05,-.85);lt.add(Go);const Ca=new gr,jv=new Ue(0,0);function El(){const i=ei[Vi];i.isReloading||i.ammoCurrent===i.magSize||i.ammoReserve<=0||(i.isReloading=!0,To&&(To.innerText="RELOADING..."),lt.position.y=-.5,setTimeout(()=>{const e=i.magSize-i.ammoCurrent,t=Math.min(e,i.ammoReserve);i.ammoCurrent+=t,i.ammoReserve-=t,i.isReloading=!1,lt.position.y=-.3,Us()},i.reloadTime))}let ki=!1;document.addEventListener("mousedown",i=>{i.button===0&&Vt.isLocked&&pt&&(ki=!0)});document.addEventListener("mouseup",i=>{i.button===0&&(ki=!1)});const Wt=i=>document.getElementById(i);Wt("btn-mobile-jump")?.addEventListener("touchstart",i=>{i.preventDefault(),Ee.position.y<=1.61&&Jt>15&&!Qn?(Et.y+=20,Jt-=15,wn()):Qn&&(xr=!0)});Wt("btn-mobile-jump")?.addEventListener("touchend",i=>{i.preventDefault(),xr=!1});Wt("btn-mobile-reload")?.addEventListener("touchstart",i=>{i.preventDefault(),El()});Wt("btn-mobile-shoot")?.addEventListener("touchstart",i=>{i.preventDefault(),ki=!0});Wt("btn-mobile-shoot")?.addEventListener("touchend",i=>{i.preventDefault(),ki=!1});Wt("btn-mw-1")?.addEventListener("touchstart",i=>{i.preventDefault(),ln.includes(0)&&bn(0)});Wt("btn-mw-2")?.addEventListener("touchstart",i=>{i.preventDefault(),ln.includes(1)&&bn(1)});Wt("btn-mw-3")?.addEventListener("touchstart",i=>{i.preventDefault(),ln.includes(2)&&bn(2)});Wt("btn-mw-4")?.addEventListener("touchstart",i=>{i.preventDefault(),ln.includes(3)&&bn(3)});Wt("btn-mw-5")?.addEventListener("touchstart",i=>{i.preventDefault(),ln.includes(4)&&bn(4)});const Ks=Wt("btn-mobile-pause");if(Ks){const i=e=>{e.preventDefault(),pt&&!yi&&!_r&&(yi=!0,ws=!0,gl.style.display="flex",cn.style.display="none",it.bgAudio&&it.bgAudio.pause(),Ks.style.transform="scale(0.9)",setTimeout(()=>{Ks.style.transform="scale(1)"},100))};Ks.addEventListener("touchstart",i),Ks.addEventListener("click",i)}Wt("btn-mobile-interact")?.addEventListener("touchstart",i=>{i.preventDefault(),Ds.style.display!=="none"&&!_r&&Lo()});const Ho=Wt("mobile-look-area");Ho?.addEventListener("touchstart",i=>{if(i.preventDefault(),As===null){const e=i.changedTouches[0];As=e.identifier,Vc=e.clientX,Gc=e.clientY}},{passive:!1});Ho?.addEventListener("touchmove",i=>{i.preventDefault();for(let e=0;e<i.changedTouches.length;e++){const t=i.changedTouches[e];if(t.identifier===As&&Ut&&pt&&!yi){const n=t.clientX-Vc,s=t.clientY-Gc;Vc=t.clientX,Gc=t.clientY;const r=.003,o=new nn(0,0,0,"YXZ");o.setFromQuaternion(Ee.quaternion),o.y-=n*r,o.x-=s*r,o.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,o.x)),Ee.quaternion.setFromEuler(o)}}},{passive:!1});Ho?.addEventListener("touchend",i=>{i.preventDefault();for(let e=0;e<i.changedTouches.length;e++)i.changedTouches[e].identifier===As&&(As=null)},{passive:!1});Ho?.addEventListener("touchcancel",i=>{i.preventDefault(),As=null});const dr=Wt("mobile-joystick-base"),Ro=Wt("mobile-joystick-pad"),Pa=40;dr?.addEventListener("touchstart",i=>{if(i.preventDefault(),!kc){const e=i.changedTouches[0];Co=e.identifier,kc=!0;const t=dr.getBoundingClientRect();zc={x:t.left+t.width/2,y:t.top+t.height/2},yf(e.clientX,e.clientY)}},{passive:!1});dr?.addEventListener("touchmove",i=>{i.preventDefault();for(let e=0;e<i.changedTouches.length;e++){const t=i.changedTouches[e];t.identifier===Co&&yf(t.clientX,t.clientY)}},{passive:!1});const vf=i=>{i.preventDefault();for(let e=0;e<i.changedTouches.length;e++)i.changedTouches[e].identifier===Co&&(kc=!1,Co=null,Ro&&(Ro.style.transform="translate(-50%, -50%)"),An=!1,Rn=!1,Cn=!1,Pn=!1)};dr?.addEventListener("touchend",vf,{passive:!1});dr?.addEventListener("touchcancel",vf,{passive:!1});function yf(i,e){let t=i-zc.x,n=e-zc.y;const s=Math.sqrt(t*t+n*n);s>Pa&&(t=t/s*Pa,n=n/s*Pa),Ro&&(Ro.style.transform=`translate(calc(-50% + ${t}px), calc(-50% + ${n}px))`);const r=10;An=!1,Rn=!1,Cn=!1,Pn=!1,s>r&&(n<-r&&(An=!0),n>r&&(Rn=!0),t<-r&&(Cn=!0),t>r&&(Pn=!0))}function Jv(i){if(!ki||!Vt.isLocked&&!Ut||!pt)return;const e=ei[Vi];if(!e.isReloading&&!(i-e.lastShotTime<e.fireRate)){if(e.ammoCurrent<=0){e.isReloading||El(),e.isAutomatic||(ki=!1);return}e.ammoCurrent--,e.lastShotTime=i,Us(),e.isAutomatic||(ki=!1),Qv(e)}}function Qv(i){if(lt.position.z+=i.recoilAmount,lt.position.y+=Math.min(i.recoilAmount,.1),lt.rotation.x+=i.recoilAmount/2,Bc.opacity=1,Go.rotation.z=Math.random()*Math.PI*2,setTimeout(()=>{Bc.opacity=0},50),i.name==="ROCKET LAUNCHER"){it.playExplosion();const e=new P;Ee.getWorldDirection(e),gs.push(new Sv(Ee.position.clone(),e))}else if(i.name==="FIRE GUN"){it.playFlamethrower();const e=new P;Ee.getWorldDirection(e),e.y=0,e.normalize();for(let t=0;t<6;t++){const n=(Math.random()-.5)*6,s=4+Math.random()*11,r=Ee.position.clone().addScaledVector(e,s).addScaledVector(new P(-e.z,0,e.x),n);r.y=Ee.position.y-.5+Math.random()*.4,Mf.spawn(r,4)}bt.activeEnemies.forEach(t=>{if(t.isDead)return;const n=new P().subVectors(t.mesh.position,Ee.position);n.y=0;const s=e.clone(),r=n.clone().normalize().dot(s),o=n.length();r>.4&&o<15&&t.takeDamage(i.damage*or*(1-o/15),e.clone().multiplyScalar(.3))});return}else i.name==="LASER GUN"?it.playLaser():it.playShot();if(i.name!=="ROCKET LAUNCHER"){Ca.setFromCamera(jv,Ee);const e=bt.activeEnemies.map(t=>t._torso).filter(t=>t);for(let t=0;t<i.pellets;t++){const n=Ca.ray.direction.clone();i.pellets>1&&(n.x+=(Math.random()-.5)*.1,n.y+=(Math.random()-.5)*.1,n.normalize());const r=new gr(Ca.ray.origin,n,0,100).intersectObjects(e);if(r.length>0)if(i.name==="LASER GUN"){const o=new Set;for(const a of r){const c=a.object,l=bt.activeEnemies.find(u=>u._torso===c);l&&!o.has(l)&&(o.add(l),l.takeDamage(i.damage*or,n.clone().multiplyScalar(.5)),ou())}}else{const o=r[0].object,a=bt.activeEnemies.find(c=>c._torso===o);a&&(a.takeDamage(i.damage*or,n.clone().multiplyScalar(.5)),ou())}}}}class bl{constructor(e,t){this.velocities=[],this.lifetimes=[],this.cursor=0,this.maxParticles=e,this.config=t,this.geometry=new Ht,this.positions=new Float32Array(e*3),this.geometry.setAttribute("position",new tn(this.positions,3));const n=new Lu({color:t.color,size:t.size,transparent:!0,opacity:.8,blending:t.blending||Bi,depthTest:!1,depthWrite:!1,sizeAttenuation:!0});this.particles=new tp(this.geometry,n),this.particles.frustumCulled=!1,Be.add(this.particles);for(let s=0;s<e;s++)this.velocities.push(new P),this.lifetimes.push(0),this.positions[s*3+1]=-100}spawn(e,t=5,n){for(let s=0;s<t;s++){const r=this.cursor;this.positions[r*3]=e.x+(Math.random()-.5)*this.config.spread,this.positions[r*3+1]=e.y+(Math.random()-.5)*this.config.spread,this.positions[r*3+2]=e.z+(Math.random()-.5)*this.config.spread,n?this.velocities[r].copy(n).add(new P((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2)):this.velocities[r].set((Math.random()-.5)*4,Math.random()*5,(Math.random()-.5)*4),this.lifetimes[r]=this.config.lifeBase+Math.random()*.5,this.cursor=(this.cursor+1)%this.maxParticles}this.geometry.attributes.position.needsUpdate=!0}update(e){let t=!1;for(let n=0;n<this.maxParticles;n++)this.lifetimes[n]>0&&(this.positions[n*3]+=this.velocities[n].x*e,this.positions[n*3+1]+=this.velocities[n].y*e,this.positions[n*3+2]+=this.velocities[n].z*e,this.velocities[n].y-=this.config.gravity*e,this.positions[n*3+1]<.1&&this.velocities[n].y<0&&(this.positions[n*3+1]=.1,this.velocities[n].y*=-.5,this.velocities[n].x*=.8,this.velocities[n].z*=.8),this.lifetimes[n]-=e,this.lifetimes[n]<=0&&(this.positions[n*3+1]=-100),t=!0);t&&(this.geometry.attributes.position.needsUpdate=!0)}warmUp(){this.spawn(new P(0,-10,0),20),this.update(.1),this.lifetimes.fill(0);for(let e=0;e<this.maxParticles;e++)this.positions[e*3+1]=-100;this.geometry.attributes.position.needsUpdate=!0}}const pr=new bl(800,{color:16716032,size:.18,gravity:20,lifeBase:.8,spread:.1}),Mf=new bl(500,{color:16755200,size:.4,gravity:-2,lifeBase:.4,spread:2,blending:vo}),La=new bl(300,{color:16737792,size:.5,gravity:15,lifeBase:.2,spread:.5,blending:vo});function ou(){cn&&(cn.style.borderColor="red",cn.style.transform="translate(-50%, -50%) scale(1.5)",setTimeout(()=>{cn.style.borderColor="white",cn.style.transform="translate(-50%, -50%) scale(1)"},100))}const Et=new P,Zs=new P;let An=!1,Rn=!1,Cn=!1,Pn=!1,Tl=!1,xr=!1,kc=!1,zc={x:0,y:0},Co=null,As=null,Vc=0,Gc=0;const Sf=60,ey=100;let to=Sf,xo=performance.now();const ty=i=>{if(pt)switch(i.code){case"ArrowUp":case"KeyW":An=!0;break;case"ArrowLeft":case"KeyA":Cn=!0;break;case"ArrowDown":case"KeyS":Rn=!0;break;case"ArrowRight":case"KeyD":Pn=!0;break;case"Space":Ee.position.y<=1.61&&Jt>15&&!Qn?(Et.y+=20,Jt-=15,wn()):Qn&&(xr=!0);break;case"ShiftLeft":case"ShiftRight":Tl=!0;break;case"KeyR":El();break;case"Digit1":ln.includes(0)&&bn(0);break;case"Digit2":ln.includes(1)&&bn(1);break;case"Digit3":ln.includes(2)&&bn(2);break;case"Digit4":ln.includes(3)&&bn(3);break;case"Digit5":ln.includes(4)&&bn(4);break}},ny=i=>{if(pt)switch(i.code){case"ArrowUp":case"KeyW":An=!1;break;case"ArrowLeft":case"KeyA":Cn=!1;break;case"ArrowDown":case"KeyS":Rn=!1;break;case"ArrowRight":case"KeyD":Pn=!1;break;case"Space":xr=!1;break;case"ShiftLeft":case"ShiftRight":Tl=!1;break}};document.addEventListener("keydown",ty);document.addEventListener("keyup",ny);const Po=document.getElementById("shop-coins"),Ia=document.getElementById("purchase-flash"),wl=[{id:"health",cost:50,action:()=>{hn=Math.min(hn+30,go)}},{id:"ammo",cost:75,action:()=>{ei.forEach(i=>{i.ammoCurrent=i.magSize,i.ammoReserve=i.magSize*4}),Us()}},{id:"maxhp",cost:200,action:()=>{go+=20,hn=Math.min(hn+20,go)}},{id:"speed",cost:150,action:()=>{wo=Math.min(wo+.1,1.5)}},{id:"damage",cost:300,action:()=>{or=Math.min(or+.25,3)}},{id:"rapidfire",cost:500,action:()=>{ei.forEach(i=>{i.fireRate=Math.max(50,i.fireRate*.85)})}}];function Ef(){wl.forEach(i=>{const e=i.cost;[document.getElementById(`buy-${i.id}`),document.getElementById(`mb-buy-${i.id}`)].forEach(t=>{t&&(mi<e?t.classList.add("cant-afford"):t.classList.remove("cant-afford"))})})}function au(i){const e=wl.find(t=>t.id===i);if(e)if(mi>=e.cost){mi-=e.cost,e.action(),wn(),Po&&(Po.innerText=mi.toString());const t=document.getElementById("shop-coins-mobile");t&&(t.innerText=mi.toString()),sy(),Ef()}else[`buy-${i}`,`mb-buy-${i}`].forEach(n=>{const s=document.getElementById(n);s&&(s.style.borderColor="#ff3333",s.style.boxShadow="0 0 20px rgba(255, 0, 0, 0.5)",setTimeout(()=>{s.style.borderColor="",s.style.boxShadow=""},300))})}wl.forEach(i=>{document.getElementById(`buy-${i.id}`)?.addEventListener("click",()=>au(i.id)),document.getElementById("mb-buy-"+i.id)?.addEventListener("click",()=>au(i.id))});function Lo(){ws=!0,_r=!0;const i=mi.toString();Po&&(Po.innerText=i);const e=document.getElementById("shop-coins-mobile");e&&(e.innerText=i),Ef();const t=Ut?"shop-menu-mobile":"shop-menu",n=document.getElementById(t);n&&(n.style.display="flex"),Vt.unlock()}function Al(){ws=!1,_r=!1,[document.getElementById("shop-menu"),document.getElementById("shop-menu-mobile")].forEach(i=>{i&&(i.style.display="none")}),pt&&(jh&&(jh.style.display="none"),Ut||Vt.lock(),vn&&isHost&&Ce?.connected&&Ce.emit("shop-closed",{}),iy())}function iy(){rr.style.display="flex";let i=0;const e=bt.currentWave+1,t=setInterval(()=>{i+=3,Nc&&(Nc.style.width=`${i}%`);const n=rr.querySelector(".loading-text");n&&(n.innerText=`READYING WAVE ${e}... ${i}%`),i>=100&&(clearInterval(t),rr.style.display="none",bt.startNextWave())},20)}function sy(i){Ia&&(Ia.style.display="block",setTimeout(()=>Ia.style.display="none",150))}document.getElementById("shop-close")?.addEventListener("click",Al);document.getElementById("shop-close-mobile")?.addEventListener("click",Al);let no=0,io=0,cu=performance.now();function bf(){requestAnimationFrame(bf);const i=performance.now();Fc.rotation.y+=5e-4,io++,i-cu>=1e3&&(Jh&&pt&&(Jh.innerText=io.toString()),io=0,cu=i);const e=Math.min((i-xo)/1e3,.1);if(yi){xo=i,_i.render(Be,Ee);return}if((Vt.isLocked===!0||Ut)&&pt){if(Jv(i),Tl&&(An||Rn||Cn||Pn)&&Jt>0&&Ee.position.y<=1.7?(to=ey*wo,Jt-=20*e,Jt<0&&(Jt=0),wn()):(to=Sf*wo,Jt<mo&&Ee.position.y<=1.7&&(Jt+=10*e,Jt>mo&&(Jt=mo),wn())),Et.x-=Et.x*10*e,Et.z-=Et.z*10*e,xr&&Qn&&Oi>0){if(Ee.position.y<45?Et.y+=35*e:(Et.y+=9.8*8*e,Et.y=Math.sin(i/200)*.5),Oi-=5*e,wn(),La.spawn(Ee.position,3),Oi<=0){Oi=0,Qn=!1,it.playExplosion(),La.spawn(Ee.position,30),document.getElementById("fuel-bar").style.display="none",wn();const c=document.createElement("div");c.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(255,100,0,0.4);pointer-events:none;z-index:100;",document.body.appendChild(c),setTimeout(()=>c.remove(),150)}}else Et.y-=9.8*8*e;Zs.z=Number(An)-Number(Rn),Zs.x=Number(Pn)-Number(Cn),Zs.normalize(),(An||Rn)&&(Et.z-=Zs.z*to*e),(Cn||Pn)&&(Et.x-=Zs.x*to*e);for(let c=Xn.length-1;c>=0;c--){const l=Xn[c];l.update(e),l.isDead&&(l.destroy(),Xn.splice(c,1))}const n=Ee.position.z;Vt.moveForward(-Et.z*e);for(let c=0;c<4;c++)if(eo.set(new P(Ee.position.x,.5,Ee.position.z),nu[c]),eo.intersectObjects($t,!1).some(l=>l.distance<.6)){Ee.position.z=n,Et.z=0;break}const s=Ee.position.x;Vt.moveRight(-Et.x*e);for(let c=0;c<4;c++)if(eo.set(new P(Ee.position.x,.5,Ee.position.z),nu[c]),eo.intersectObjects($t,!1).some(l=>l.distance<.6)){Ee.position.x=s,Et.x=0;break}Ee.position.y+=Et.y*e;const o=new gr(Ee.position.clone(),new P(0,-1,0),0,.8).intersectObjects($t,!1);o.length>0&&Et.y<=0&&(Ee.position.y=o[0].point.y+1.6,Et.y=0),Ee.position.y<1.6&&(Et.y=0,Ee.position.y=1.6);const a=60;Ee.position.x>a&&(Ee.position.x=a),Ee.position.x<-a&&(Ee.position.x=-a),Ee.position.z>a&&(Ee.position.z=a),Ee.position.z<-a&&(Ee.position.z=-a)}if(pt){const t=An||Rn||Cn||Pn;(Vt.isLocked||Ut)&&(t&&Ee.position.y<=1.7?(no+=e*15,lt.position.y=-.3+Math.sin(no)*.015,lt.position.x=.25+Math.cos(no/2)*.02):(lt.position.y=Js.lerp(lt.position.y,-.3,.1),lt.position.x=Js.lerp(lt.position.x,.25,.1),no=0)),lt.position.z=Js.lerp(lt.position.z,-.4,.15),lt.rotation.x=Js.lerp(lt.rotation.x,0,.15),window.addEventListener("resize",()=>{Ee.aspect=window.innerWidth/window.innerHeight,Ee.updateProjectionMatrix(),_i.setSize(window.innerWidth,window.innerHeight)}),io%2===0&&bt.update(e*2,Ee.position,i),pr.update(e),Mf.update(e),La.update(e),gv();for(let n=gs.length-1;n>=0;n--)gs[n].update(e),gs[n].isDead&&(gs[n].destroy(),gs.splice(n,1));for(let n=Xn.length-1;n>=0;n--)Xn[n].update(e),Xn[n].isDead&&(Xn[n].destroy(),Xn.splice(n,1));for(let n=nr.length-1;n>=0;n--)nr[n].update(i,Ee.position),nr[n].isPickedUp&&nr.splice(n,1);for(let n=Qr.length-1;n>=0;n--)Qr[n].update(i,Ee.position),Qr[n].isPickedUp&&Qr.splice(n,1);for(let n=tr.length-1;n>=0;n--)tr[n].update(i,Ee.position),tr[n].isPickedUp&&tr.splice(n,1);!_r&&_o&&(_o.rotation.y+=e*2,_o.position.y=8+Math.sin(i/500)*.5)}xo=i,_i.render(Be,Ee)}bf();pv();document.addEventListener("click",()=>{pt||it.startMenuMusic()},{once:!0});
