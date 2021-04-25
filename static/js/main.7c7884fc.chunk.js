(this["webpackJsonpharmonic-visualizer"]=this["webpackJsonpharmonic-visualizer"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r,i,a,c=n(3),o=n.n(c),s=n(8),h=n.n(s),u=(n(14),n(1)),l=(n(15),n(16),n(2)),f=function(){return Object(l.jsxs)("div",{className:"description",children:[Object(l.jsx)("h3",{className:"subheader",children:"The Harmonic Series in Music"}),Object(l.jsx)("p",{children:"Imagine you strike a string in a guitar."}),Object(l.jsx)("p",{children:"Now, you are expecting to hear back a tone - the one that corresponds to the string. In reality, what we end up hearing is much more than that - it is a whole collection of tones. The collection starts with a low tone which is the intended one, and it's followed by a series of higher pitch tones that are relative to the initial tone."}),Object(l.jsx)("p",{children:"Althought this is an infinite series, we can only hear a small subset of these tones."}),Object(l.jsx)("p",{children:"These following tones are called harmonics or overtones"}),Object(l.jsx)("h3",{className:"subheader",children:"Why does this happen?"}),Object(l.jsx)("p",{children:"When we hit a string, the string starts bouncing up and down creating a vibration. The tone we are producing is dictated by the frequency at which the string is vibrating. This vibration is creating a series of sine waves - the first sine wave is one big wave bouncing through the whole string, the second one is of two waves, the third of three waves, and so on. All these different vibrations in the string are happening at the same time!"}),Object(l.jsx)("p",{children:"The tones produced by the string come from the wavelength of those sine waves - the first series has one long sine wave, it has the smallest frequency and therefore the lowest tone, and the following frequencies will come from the subsequent sine waves in the series which are getting smaller and smaller, therefore playing higher and higher tones."})]})},d=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],g=function(e){var t=Math.log(e/440)/Math.log(2)*12;return Math.round(t)+69},v=function(e,t){return Math.floor(1200*Math.log(e/function(e){return 440*Math.pow(2,(e-69)/12)}(t))/Math.log(2))},w=function(e,t){var n=v(e,t);return 0===n?"":n<0?"flat":"sharp"},b=function(e){return d[e%12]},j=(n(18),function(e){var t=Object(c.useRef)(null),n=Object(c.useRef)(null),r=0;Object(c.useEffect)((function(){var r=t.current;if(null!==r&&null!==t.current){r.width=2*e.width,r.height=2*e.height,r.style.width="".concat(e.width,"px"),r.style.height="".concat(e.height,"px");var a=r.getContext("2d");null!==a&&(n.current=a,i())}}),[e.frequency,e.height,e.width]);var i=function i(){if(null!==n.current&&null!==t.current){var a=n.current,c=t.current;a.clearRect(0,0,c.width,c.height),a.beginPath();for(var o=0;o<c.width;o++){var s=c.height/2+50*Math.sin(.0039*o*e.waves+0)*Math.sin(r);a.lineTo(o,s)}a.lineWidth=10,a.strokeStyle=function(){var t=document.getElementById(e.frequency.toString());return null===t?"white":window.getComputedStyle(t).color}(),a.stroke(),window.requestAnimationFrame(i),r+=.1}};return Object(l.jsx)("canvas",{className:"sine-wave",ref:t})}),m=n(9),p=function(e){if(0===e.frequency)return null;for(var t=[],n=0,r=0;r<8;r++){var i=g(e.frequency*(r+1)),a=b(i%12),c=w(e.frequency,i),o={frequency:e.frequency*(r+1),note:"".concat(a," ").concat(c)};t[r]=o}return Object(l.jsxs)("div",{className:"harmonic-series",children:[Object(l.jsx)("h3",{children:"Your Harmonic Series"}),Object(l.jsxs)("div",{className:"harmonic-table-container",children:[Object(l.jsx)("div",{children:"Frequency - Note"}),Object(l.jsx)("div",{className:"wave-header",children:"Vibration of String"})]}),t.map((function(e){return n++,Object(l.jsxs)("div",{className:"harmonic-element-container",onClick:function(){return t=e.frequency,void(new m.a).toDestination().triggerAttackRelease(t,"8n");var t},children:[Object(l.jsxs)("div",{id:e.frequency.toString(),children:[e.frequency," Hz - ",e.note]}),Object(l.jsx)("div",{className:"sine-wave",children:Object(l.jsx)(j,{frequency:e.frequency,height:100,width:400,waves:n})})]},e.frequency)}))]})},y=(n(28),null),O=new Float32Array(2048),x=!1,q=0,S="",M={audio:{advanced:[{echoCancellation:!1,autoGainControl:!1,noiseSuppression:!1}]}},A=function(){alert("Stream generation failed.")},k=function(e){x||(i=new AudioContext,x=!0),a=e,function(e){try{navigator.getUserMedia(M,e,A)}catch(t){alert("getUserMedia threw exception :"+t)}}(F)},F=function(e){y=i.createMediaStreamSource(e),(r=i.createAnalyser()).fftSize=2048,y.connect(r),N()},N=function e(){r.getFloatTimeDomainData(O);var t=function(e,t){for(var n=e.length,r=0,i=0;i<n;i++){var a=e[i];r+=a*a}if((r=Math.sqrt(r/n))<.01)return-1;for(var c=0,o=n-1,s=0;s<n/2;s++)if(Math.abs(e[s])<.2){c=s;break}for(var h=1;h<n/2;h++)if(Math.abs(e[n-h])<.2){o=n-h;break}n=(e=e.slice(c,o)).length;for(var u=new Array(n).fill(0),l=0;l<n;l++)for(var f=0;f<n-l;f++)u[l]=u[l]+e[f]*e[f+l];for(var d=0;u[d]>u[d+1];)d++;for(var g=-1,v=-1,w=d;w<n;w++)u[w]>g&&(g=u[w],v=w);var b=v,j=u[b-1],m=u[b],p=u[b+1],y=(j+p-2*m)/2;return y&&(b-=(p-j)/2/(2*y)),t/b}(O,i.sampleRate);if(-1!==t){var n=Math.round(t),c=g(n),o=w(t,c),s="".concat(b(c%12)," ").concat(o);""!==S&&S===s||(S=s),a(s,n)}window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame),q=window.requestAnimationFrame(e)},C=n.p+"static/media/SpeakerOn.4c640b39.svg",T=n.p+"static/media/SpeakerOff.4255cd4c.svg",D=function(e){var t=Object(c.useState)(!1),n=Object(u.a)(t,2),r=n[0],i=n[1],a=Object(c.useState)(!1),o=Object(u.a)(a,2),s=o[0],h=o[1],f="".concat(e.frequency," Hz"),d=""!==e.note?"- ".concat(e.note.toString()):"";return Object(l.jsxs)("div",{onClick:function(){r?(window.cancelAnimationFrame(q),console.log("Audio stream stopped")):k(e.updateNoteAndFrequency),i((function(e){return!e}))},className:"note-banner",onMouseEnter:function(){return h(!0)},onMouseLeave:function(){return h(!1)},children:[0!==e.frequency||r?"".concat(f," ").concat(d):"To find your harmonic series, click here and play any sound"," ",function(){var t=Object(l.jsx)("img",{height:"35px",width:"35px",src:C,alt:"Speaker is on"}),n=Object(l.jsx)("img",{height:"35px",width:"35px",src:T,alt:"Speaker is off"});return r&&s?r?t:n:!r&&s&&0!==e.frequency?n:null}()]})},R=function(){var e=o.a.useState(0),t=Object(u.a)(e,2),n=t[0],r=t[1],i=o.a.useState(""),a=Object(u.a)(i,2),c=a[0],s=a[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(f,{}),Object(l.jsx)(D,{updateNoteAndFrequency:function(e,t){s(e),r(t)},note:c,frequency:n}),Object(l.jsx)("br",{}),Object(l.jsx)(p,{frequency:n})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))};h.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(R,{})}),document.getElementById("root")),z()}},[[29,1,2]]]);
//# sourceMappingURL=main.7c7884fc.chunk.js.map