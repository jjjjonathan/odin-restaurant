(()=>{"use strict";function e(t){switch(document.querySelectorAll(".nav-item").forEach((e=>{e.classList.remove("active")})),document.getElementById(t).classList.add("active"),t){case"home-tab":!function(){const e=document.getElementById("content");e.textContent="";const t=document.createElement("div");t.classList.add("jumbotron","text-center","vertical-center"),e.appendChild(t);const n=document.createElement("div");n.classList.add("container"),t.appendChild(n);const a=document.createElement("h1");a.classList.add("display-4"),a.textContent="Juicy, cheesy smashed burgers",n.appendChild(a);const d=document.createElement("p");d.classList.add("lead"),d.textContent="We keep it simple and we do it well.",n.appendChild(d);const c=document.createElement("p");c.textContent="Online ordering coming soon!",n.appendChild(c);const o=document.createElement("button");o.classList.add("btn","btn-light","btn-lg","shadow"),o.id="menu-button",o.textContent="View menu",n.appendChild(o)}(),document.getElementById("menu-button").addEventListener("click",(()=>{e("menu-tab")}));break;case"menu-tab":!function(){const e=document.getElementById("content");content.textContent="";const t=document.createElement("h1");t.classList.add("text-center","menu-header","display-4"),t.textContent="Menu",e.appendChild(t);const n=document.createElement("div");n.classList.add("container"),e.appendChild(n);const a=document.createElement("div");a.classList.add("card-deck","mb-3"),n.appendChild(a),[{item:"The Flashburger",description:"Two smashed and grilled patties of our beef and bacon blend, covered in American cheese and sauteed onions"},{item:"The Smashburger",description:"Two smashed and grilled patties between a smashed bun with smashed cheese and pickle mash"},{item:"The Trashburger",description:"A beef patty, turkey patty, and fish stick smothered in gravy and barbeque sauce between two soft pretzels"},{item:"The Thrashburger",description:"Beef crumbles in bernaise sauce on a rye roll"},{item:"The Crashburger",description:"Vegan scrambled eggs on a plant-based sausage patty, with sourdough bread and a side of tomato juice"}].forEach((e=>{!function(e,t){const n=document.createElement("div");n.classList.add("card","menu-card","mb-4","shadow");const d=document.createElement("div");d.classList.add("card-header","pt-4"),n.appendChild(d);const c=document.createElement("h4");c.textContent=e,d.appendChild(c);const o=document.createElement("div");o.classList.add("card-body","pb-2"),n.appendChild(o);const s=document.createElement("p");s.textContent=t,o.appendChild(s),a.appendChild(n)}(e.item,e.description)}))}();break;case"contact-tab":!function(){const e={h1:"Contact",lead:"Get in touch with us through any of our available channels:",links:[{iconName:"facebook",text:"Like us on Facebook"},{iconName:"twitter",text:"Follow us on Twitter"},{iconName:"linkedin",text:"Check us out on LinkedIn"},{iconName:"mailbox",text:"Email us"}]},t=document.getElementById("content");t.textContent="";const n=document.createElement("div");n.classList.add("container"),t.appendChild(n);const a=document.createElement("h1");a.classList.add("display-4","contact-header","text-center"),a.textContent=e.h1,n.appendChild(a);const d=document.createElement("p");d.classList.add("lead","text-center"),d.textContent=e.lead,n.appendChild(d);const c=document.createElement("div");c.classList.add("list-group","contact-list","mx-auto","my-4","shadow"),n.appendChild(c),e.links.forEach((e=>{!function(e,t){const n=document.createElement("a");n.href="#",n.classList.add("list-group-item","list-group-item-action");const a=document.createElement("i");a.classList.add("bi-"+e),n.appendChild(a);const d=document.createElement("span");d.classList.add("i-label"),d.textContent=t,n.appendChild(d),c.appendChild(n)}(e.iconName,e.text)}))}()}}document.addEventListener("DOMContentLoaded",(function(){e("home-tab");const t=document.getElementById("brand"),n=document.getElementById("home-tab"),a=document.getElementById("menu-tab"),d=document.getElementById("contact-tab");t.addEventListener("click",(()=>{e("home-tab")})),n.addEventListener("click",(()=>{e("home-tab")})),a.addEventListener("click",(()=>{e("menu-tab")})),d.addEventListener("click",(()=>{e("contact-tab")}))}))})();