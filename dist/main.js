(()=>{"use strict";const e=document.querySelectorAll(".nav-link");function t(){e.forEach((e=>e.classList.remove("active"))),this.classList.add("active")}((e,t)=>{const c=document.getElementById("header-toggle"),n=document.getElementById("nav-menu");c&&n&&c.addEventListener("click",(()=>{n.classList.toggle("show"),c.classList.toggle("bx-x")}))})(),e.forEach((e=>e.addEventListener("click",t))),(()=>{let e=1;setInterval((()=>{document.getElementById(`radio${e}`).checked=!0,document.querySelector(`.manual-btn.${e}`).style.background="white",e+=1,e>4&&(e=1)}),5e3)})()})();