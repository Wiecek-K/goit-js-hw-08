function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",o=NaN,r="[object Symbol]",a=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=s||d||Function("return this")(),v=Object.prototype.toString,g=Math.max,p=Math.min,b=function(){return m.Date.now()};function y(e,t,n){var o,r,a,f,u,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function v(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function y(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function h(){var e=b();if(y(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function w(e){return u=void 0,m&&o?v(e):(o=r=void 0,f)}function O(){var e=b(),n=y(e);if(o=arguments,r=this,l=e,n){if(void 0===u)return function(e){return c=e,u=setTimeout(h,t),s?v(e):f}(l);if(d)return u=setTimeout(h,t),v(l)}return void 0===u&&(u=setTimeout(h,t)),f}return t=S(t)||0,j(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=l=r=u=void 0},O.flush=function(){return void 0===u?f:w(b())},O}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&v.call(e)==r}(e))return o;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=u.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):f.test(e)?o:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return j(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:o,maxWait:t,trailing:r})};const h=document.querySelector(".feedback-form"),{email:w,message:O}=h;if(null!==localStorage.getItem("feedback-form-state")){const e=JSON.parse(localStorage.getItem("feedback-form-state"));w.value=e.email,O.value=e.message}h.addEventListener("input",e(t)((function(){localStorage.setItem("feedback-form-state",JSON.stringify({email:w.value,message:O.value}))}),500)),h.addEventListener("submit",(e=>{localStorage.removeItem("userEmail")})),h.addEventListener("submit",(e=>{e.preventDefault();const t={email:w.value,message:O.value};h.reset(),console.log(t),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.d2913cec.js.map