import{o as _,c as p,a as e,n as g,w as T,r as v,b as k,v as S,t as f,d as m,e as A,f as o,g as t,h as s,F as E,i as D,j as C,k as j}from"./vendor.b86fc30d.js";const M=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))u(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function l(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(a){if(a.ep)return;a.ep=!0;const r=l(a);fetch(a.href,r)}};M();var h=(n,c)=>{const l=n.__vccOpts||n;for(const[u,a]of c)l[u]=a;return l};const B={props:{title:""},data:function(){return{active:!1}}},L={class:"flex w-full"},N={class:"absolute right-2 sm:right-4 top-2 text-xs sm:text-md sm:top-3"},R=e("i",{class:"fi fi-rr-angle-down"},null,-1),F=[R],V=e("i",{class:"fi fi-rr-angle-up"},null,-1),z=[V];function K(n,c,l,u,a,r){return _(),p("div",{class:g([{"border-2":n.active},"rounded-lg mb-2 sm:mb-3"])},[e("div",L,[e("a",{href:"#",class:g(["p-2 md:p-4 w-full hover:bg-gray-100 rounded-lg flex justify-between relative",{"bg-gray-100":n.active,"rounded-b-none":n.active,"border-b-2":n.active}]),onClick:c[0]||(c[0]=T(d=>n.active=!n.active,["prevent"]))},[v(n.$slots,"default"),e("div",N,[k(e("span",null,F,512),[[S,!n.active]]),k(e("span",null,z,512),[[S,n.active]])])],2)]),k(e("div",{class:g(["h-full p-2 sm:p-4 rounded-b-lg",{"bg-gray-100":n.active}])},[v(n.$slots,"content")],2),[[S,n.active]])],2)}var y=h(B,[["render",K]]);const O={props:{text:""}},q={class:"flex"},H=e("i",{class:"fi fi-rr-calendar mr-2"},null,-1),U={class:"whitespace-nowrap"};function W(n,c,l,u,a,r){return _(),p("div",q,[H,e("div",U,f(l.text),1)])}var I=h(O,[["render",W]]);const J={components:{Accordion:y,Dates:I},props:{title:"",company:"",location:"",dates:""}},Q={class:"w-full"},G={class:"text-gray-600 text-sm sm:text-lg font-semibold mb-2"},X={class:"text-gray-400 text-xs sm:text-sm flex justify-between"},Y={class:"block sm:flex sm:space-x-8"},Z={class:"flex"},ee=e("i",{class:"fi fi-br-building mr-3"},null,-1),te={class:"mt-1 sm:mt-0"},se=e("i",{class:"fi fi-br-marker mr-3"},null,-1);function oe(n,c,l,u,a,r){const d=m("Dates"),b=m("Accordion");return _(),A(b,null,{content:o(()=>[v(n.$slots,"default")]),default:o(()=>[e("div",Q,[e("h3",G,f(l.title),1),e("div",X,[e("div",Y,[e("div",Z,[ee,e("span",null,f(l.company),1)]),e("div",te,[se,e("span",null,f(l.location),1)])]),t(d,{text:l.dates},null,8,["text"])])])]),_:3})}var ne=h(J,[["render",oe]]);const ie={components:{Accordion:y,Dates:I},props:{institution:"",location:"",dates:"",isSchool:!1},computed:{icon:function(){return{"fi-br-graduation-cap":!this.isSchool,"fi-br-school":this.isSchool}}}},ae={class:"w-full"},le={class:"text-gray-600 text-sm sm:text-lg font-semibold mb-1"},re={class:"text-gray-400 text-xs sm:text-sm flex justify-between"},ce={class:"flex space-x-8"},de=e("i",{class:"fi fi-br-marker ml-0.5 mr-2 sm:mr-2.5"},null,-1);function ue(n,c,l,u,a,r){const d=m("Dates"),b=m("Accordion");return _(),A(b,null,{content:o(()=>[v(n.$slots,"default")]),default:o(()=>[e("div",ae,[e("h3",le,[e("i",{class:g([r.icon,"fi mr-2"])},null,2),s(" "+f(l.institution),1)]),e("div",re,[e("div",ce,[e("span",null,[de,s(" "+f(l.location),1)])]),t(d,{text:l.dates},null,8,["text"])])])]),_:3})}var me=h(ie,[["render",ue]]);const _e={props:{icon:{type:String,default:"fi-br-angle-double-small-right"}}},he={class:"flex text-xs sm:text-sm mb-3 last:mb-0 leading-6"};function pe(n,c,l,u,a,r){return _(),p("div",he,[e("i",{class:g([l.icon,"fi mr-3"])},null,2),e("span",null,[v(n.$slots,"default")])])}var fe=h(_e,[["render",pe]]);const ge={props:{tags:""},computed:{tagsList:function(){return this.tags.split(",")}}},ve={class:"flex flex-wrap -mt-3"};function be(n,c,l,u,a,r){return _(),p("div",ve,[(_(!0),p(E,null,D(r.tagsList,d=>(_(),p("div",{key:d,class:"mr-2 mt-3 rounded-full bg-green-100 font-mon text-xs py-1 px-2 border-green-200 border-2"},f(d),1))),128))])}var xe=h(ge,[["render",be]]);const ye={},we={class:"block md:flex justify-between"},$e=C('<div><h1 class="text-4xl px-2 md:px-4 mb-4 md:mb-6 font-semibold">Katy Hughes</h1><p class="font-semibold px-2 md:px-4 text-gray-400"> Full Stack .NET Software Developer</p><p class="px-2 md:px-4 text-sm text-gray-400"><i class="fi fi-br-envelope mr-2"></i>katymariehughes@gmail.com</p></div><div class="flex md:flex-col space-x-3 md:space-x-0 md:space-y-3 px-2 md:px-4 mt-3"><a class="w-1/2 md:w-full rounded-md bg-gray-100 hover:bg-gray-200 active:bg-gray-300 py-3 md:py-2 px-3 text-xs sm:text-sm flex justify-center" href="mailto:katymariehughes@gmail.com"><i class="fi fi-br-envelope mr-3"></i> Email Me </a><a href="/CV.pdf" download="Katy Hughes - CV" class="w-1/2 md:w-full rounded-md bg-gray-100 hover:bg-gray-200 active:bg-gray-300 flex justify-center py-3 md:py-2 px-3 text-xs sm:text-sm"><i class="fi fi-br-download mr-3"></i> Download CV </a></div>',2),ke=[$e];function Se(n,c){return _(),p("div",we,ke)}var Ae=h(ye,[["render",Se]]);const Ce={},Ie={class:"text-gray-500 px-2 md:px-4 py-3 text-sm leading-6"},Pe=s(" I am a passionate person with an acute curiosity, eagerness to learn, and positive attitude."),Te=e("br",null,null,-1),Ee=e("br",null,null,-1),De=s(" With valuable experience as a full stack .NET developer in both consultancy and in-house roles, I have been afforded an exposure to a vast array of business domains, and have held responsibilities spanning the entire lifecycle of business applications: "),je=e("code",{class:"bg-gray-50 text-xs px-1 py-1 rounded-md italic"}," requirements analysis, design, software architecture, coding, logging, debugging, unit and automation testing, deployment and CI/CD. ",-1),Me=e("br",null,null,-1),Be=e("br",null,null,-1),Le=s(" Taking ownership of projects from conception to completion and driving positive change through digital transformation forms the core of what I do. Advocating for the best solution for both the end user and company takes priority - even if it means failing fast in the search for it."),Ne=e("br",null,null,-1),Re=e("br",null,null,-1),Fe=s(" I write clean, performant and scaleable code, whether for backend REST APIs, event-driven microservice architectures or responsive web applications, utilising an extensive knowledge of the ASP.NET (Core & Framework) platform. All work is guided by domain driven design (DDD) principles and best practices, and I seek to develop content-driven solutions not only rich in functionality, but that most importantly demonstrate a sincere understanding of the business domain. By showing initiative and challenging assumptions, I can pinpoint the most appropriate solution to a given problem, articulate the proposal to stakeholders, evangelise within the development team and ultimately implement it."),Ve=e("br",null,null,-1),ze=e("br",null,null,-1),Ke=s(" My degree in mathematics, as well as my work experience, combined with the ability to very quickly adapt makes me an ideal candidate for this role. I am a great communicator who flourishes in a team environment centred on trust, collaboration and empowerment. This enables me to work effectively both internally and with domain experts to identify requirements and architect and implement a complete solution."),Oe=e("br",null,null,-1),qe=e("br",null,null,-1),He=s(" The opportunity to join your team to further hone my craft in a new domain excites me greatly, and I'm looking forward to understanding how I may add value to your company and mission. "),Ue=[Pe,Te,Ee,De,je,Me,Be,Le,Ne,Re,Fe,Ve,ze,Ke,Oe,qe,He];function We(n,c){return _(),p("p",Ie,Ue)}var Je=h(Ce,[["render",We]]);const Qe={components:{Accordion:y},props:{title:"",icon:""}},Ge={class:"w-full"},Xe={class:"text-gray-600 text-sm sm:text-lg font-semibold"};function Ye(n,c,l,u,a,r){const d=m("Accordion");return _(),A(d,null,{content:o(()=>[v(n.$slots,"default")]),default:o(()=>[e("div",Ge,[e("h3",Xe,[e("i",{class:g([l.icon,"fi mr-2"])},null,2),s(" "+f(l.title),1)])])]),_:3})}var Ze=h(Qe,[["render",Ye]]);const et={components:{Accordion:y,Experience:ne,Education:me,Bullet:fe,Tags:xe,Header:Ae,Summary:Je,Project:Ze}},tt={id:"main",class:"h-full min-w-[392px] bg-gray-50 flex flex-col justify-center relative"},st={class:"mx-3 my-6 max-h-4/5 relative px-3 md:px-6 py-3 md:py-6 bg-white shadow-xl ring-gray-900/5 max-w-6xl lg:mx-auto rounded-xl"},ot={class:"pt-4 md:pt-8 text-base h-full overflow-hidden leading-7 space-y-6 text-gray-600"},nt=e("hr",{class:"mb-3"},null,-1),it=e("hr",{class:"my-2"},null,-1),at=e("h3",{class:"pl-2 md:pl-4 font-bold text-xl sm:text-2xl text-gray-700 my-4"}," Experience ",-1),lt=s(" Executed full-cycle complex development on a "),rt=e("b",null,"vast distributed microservice architecture",-1),ct=s(" within a multidisciplinary team, for a financial trading and sports betting platform with more than "),dt=e("b",null," 360,000 monthly users. ",-1),ut=s(" Developed features for internal tools as well as the customer-facing platform, including working on troubleshooting, improving and optimising the user registration process, which led to a significant improvement in overall user experience and KPIs. All in the face of tight deadlines driven by legislative and regulatory changes, requiring overhauls of complex business logic sometimes in a matter of weeks. "),mt={class:"px-3 pt-3"},_t=s(" Increased the monthly registration count by "),ht=e("b",null,"58%",-1),pt=s(" Increased conversions to the other platforms by "),ft=e("b",null,"27%",-1),gt=s(" Increased the count and average value of client deposits by "),vt=e("b",null,"110%",-1),bt=s(" and "),xt=e("b",null,"34%",-1),yt=s(" respectively "),wt=s(" Increased yearly revenue for the company by "),$t=e("b",null,"48%",-1),kt=s(" Retained a near "),St=e("b",null,"100%",-1),At=s(" rate of on-time task delivery "),Ct=s(" Independently completed full rewrites of critical path aspects of the site to "),It=e("b",null,"eradicate years of technical debt.",-1),Pt=s(" Evangelised and implemented software pattern and UX/UI best practices, approaches and technologies, which "),Tt=e("b",null,"significantly reduced development time on future tasks.",-1),Et=s(" Migrated legacy solutions to the cloud. "),Dt=s(" Sole developer on high-profile public sector transformation project. Forged and maintained strong, valuable client relationships, and delivered case management web portal which allows for the submission of complex application forms with highly granular business logic and user permissions. The portal improves communication and accountability between all parties and has replaced the previous manual paper-based system, delivering "),jt=e("b",null,"significant process efficiencies for both the client and their customers.",-1),Mt={class:"px-3 pt-3"},Bt=s(" Reduced average case resolution time from "),Lt=e("b",null,"12-14 weeks down to 3 weeks",-1),Nt=s(" Sole web developer on AML compliance review portal for an international team, which sought to replace a slow, error-prone, denormalised spreadsheet. Allows for data concurrency, audit visibility and collaboration, and "),Rt=e("b",null,"provides depth and new insight into the data,",-1),Ft=s(" not possible with the previous solution. "),Vt=s(" Independently developed proof of concept for the UK Government, designed to aid members of the public in submitting lengthy and involved questionnaires to inform regulatory data reports. The application deserializes and reconstitutes large object graphs rapidly, while "),zt=e("b",null,"maintaining strict data integrity.",-1),Kt=s(" Implemented several enterprise message bus solutions to allow for "),Ot=e("b",null,"low-latency, high volume integration",-1),qt=s(" between both client and internal proprietary systems (data entry, document management, downstream processing, archival, invoicing). "),Ht=s(" Facilitated students' understanding of core calculus, differential equation and linear algebra concepts. "),Ut=s(" Assisted students in debugging code for projects completed using Mathematica and MatLab. "),Wt=e("hr",{class:"my-3"},null,-1),Jt=e("h3",{class:"pl-2 md:pl-4 font-bold text-xl sm:text-2xl text-gray-700 my-4"}," Education ",-1),Qt=e("b",null,"Bachelor of Science in Pure Mathematics.",-1),Gt=s(" GPA: 3.7 (Magna Cum Laude). Presidential Scholarship recipient and Dean's List awardee. "),Xt=s(" Coursework in abstract, algebraic, complex, probabilistic and analytical mathematics, as well as physics, computer science, neuroscience and psychology. "),Yt=s(" Activities: Concert Choir, Peaks and Professors (hiking society), Expat Society, Alpha Phi sorority. "),Zt=s(" Volunteer experience: Kicks for Kids (football for underprivileged children in surrounding neighbourhoods), Teach for LA (maths and literacy skills for children) "),es=e("hr",{class:"my-3"},null,-1),ts=e("h3",{class:"pl-2 md:pl-4 font-bold text-xl sm:text-2xl text-gray-700 my-4"}," Personal Projects ",-1),ss={class:"block md:flex md:space-x-3"},os={class:"text-xs sm:text-sm"},ns=s(" Developed an application to track activities and habits each day to see at a glance how much time is being dedicated to various areas of life. "),is=s(" It also serves as a journal, which can be searched upon using key terms. "),as={class:"flex space-x-3"},ls={class:"text-xs sm:text-sm"},rs=s(" In the process of developing a game mechanic that I devised, based on the findings of a psychological study on human greed. "),cs=s(" It takes advantage of the instant and feeless properties of the cryptocurrency Nano to enable players of the game to receive their winnings instantly. "),ds={class:"flex space-x-3"},us={class:"text-xs sm:text-sm"},ms=s(" Developed a trading bot that interfaces with the Binance API to enumerate all possible routes of trading pairs from one ticker to another, to find the most lucrative route. "),_s=C('<hr class="my-3"><h3 class="pl-2 md:pl-4 font-bold text-xl sm:text-2xl text-gray-700 mt-4 mb-6"> Qualifications / Awards </h3><div class="px-2 md:px-4 flex mb-4 leading-6"><i class="fi fi-br-diploma mr-3 text-sm sm:text-lg"></i><div class="flex w-full justify-between text-xs md:text-sm"><div><p class="font-semibold"> Microsoft Certified Solutions Developer </p><p class="text-gray-500">(MCSD: Web Applications)</p></div><div class="text-gray-400 text-xs"><i class="fi fi-br-calendar mr-1"></i> &#39;17 </div></div></div><div class="px-2 md:px-4 flex mb-3 leading-6"><i class="fi fi-br-trophy mr-3 text-sm sm:text-lg"></i><div class="flex w-full justify-between text-xs md:text-sm"><div><p class="font-semibold"> Shortlisted as &#39;Future Star: Developer&#39; </p><p class="text-gray-500"> at national Future Stars of Tech awards </p></div><div class="text-gray-400 text-xs"><i class="fi fi-br-calendar mr-1"></i> &#39;20 </div></div></div><hr class="my-3"><h3 class="pl-2 md:pl-4 font-bold text-xl sm:text-2xl text-gray-700 mt-4 mb-6"> Interests </h3><div class="px-2 md:px-4 flex mb-4 leading-6"><div class="flex w-full justify-between text-xs md:text-sm"><p>Running, personal development, making ramen, transcribing music, jazz &amp; bossa nova guitar.</p></div></div>',7);function hs(n,c,l,u,a,r){const d=m("Header"),b=m("Summary"),i=m("Bullet"),x=m("Tags"),w=m("Experience"),P=m("Education"),$=m("Project");return _(),p("div",tt,[e("div",st,[e("div",ot,[t(d),e("div",null,[nt,t(b),it,at,t(w,{title:"Senior Software Developer",company:"Spreadex",location:"London, UK",dates:"Oct '20 - Present"},{default:o(()=>[t(i,null,{default:o(()=>[lt,rt,ct,dt]),_:1}),t(i,null,{default:o(()=>[ut,e("div",mt,[t(i,{icon:"fi-br-rocket"},{default:o(()=>[_t,ht]),_:1}),t(i,{icon:"fi-br-rocket"},{default:o(()=>[pt,ft]),_:1}),t(i,{icon:"fi-br-rocket"},{default:o(()=>[gt,vt,bt,xt,yt]),_:1}),t(i,{icon:"fi-br-rocket"},{default:o(()=>[wt,$t]),_:1}),t(i,{icon:"fi-br-rocket"},{default:o(()=>[kt,St,At]),_:1})])]),_:1}),t(i,null,{default:o(()=>[Ct,It]),_:1}),t(i,null,{default:o(()=>[Pt,Tt]),_:1}),t(i,null,{default:o(()=>[Et]),_:1}),t(x,{tags:"ASP.NET MVC, WCF Services, Angular, Tailwind CSS, WPF, Oracle, RabbitMQ, HAProxy"})]),_:1}),t(w,{title:"Consultant, Bespoke Development",company:"C5 Alliance",location:"Jersey, CI",dates:"Jul '17 - Oct '20"},{default:o(()=>[t(i,null,{default:o(()=>[Dt,jt,e("div",Mt,[t(i,{icon:"fi-br-rocket"},{default:o(()=>[Bt,Lt]),_:1})])]),_:1}),t(i,null,{default:o(()=>[Nt,Rt,Ft]),_:1}),t(i,null,{default:o(()=>[Vt,zt]),_:1}),t(i,null,{default:o(()=>[Kt,Ot,qt]),_:1}),t(x,{tags:"ASP.NET MVC / REST API / Razor Pages, SQL Server, Azure Service Bus, SignalR, Dynamics 365 CRM SDK, Azure Cosmos DB, Redis"})]),_:1}),t(w,{title:"Math Centre Assistant & Tutor",company:"University of Southern California",location:"Los Angeles, CA",dates:"Jan '16 - May '17"},{default:o(()=>[t(i,null,{default:o(()=>[Ht]),_:1}),t(i,null,{default:o(()=>[Ut]),_:1})]),_:1}),Wt,Jt,t(P,{institution:"University of Southern California",location:"Los Angeles, CA",dates:"Aug '13 - May '17"},{default:o(()=>[t(i,null,{default:o(()=>[Qt]),_:1}),t(i,null,{default:o(()=>[Gt]),_:1}),t(i,null,{default:o(()=>[Xt]),_:1}),t(i,null,{default:o(()=>[Yt]),_:1}),t(i,null,{default:o(()=>[Zt]),_:1})]),_:1}),es,ts,t($,{title:"Time Tracker",icon:"fi-br-clock"},{default:o(()=>[e("div",ss,[e("div",os,[t(i,null,{default:o(()=>[ns]),_:1}),t(i,null,{default:o(()=>[is]),_:1}),t(x,{tags:"Blazor, ASP.NET REST API, FullCalendar.js, PWA, Entity Framework"})])])]),_:1}),t($,{title:"Betting Game",icon:"fi-br-dice-alt"},{default:o(()=>[e("div",as,[e("div",ls,[t(i,null,{default:o(()=>[rs]),_:1}),t(i,null,{default:o(()=>[cs]),_:1}),t(x,{tags:"Blazor, Docker, SignalR, ASP.NET REST API, Redis, RabbitMQ, Background Services"})])])]),_:1}),t($,{title:"Trading Bot",icon:"fi-br-stats"},{default:o(()=>[e("div",ds,[e("div",us,[t(i,null,{default:o(()=>[ms]),_:1}),t(x,{tags:".NET, Vue JS"})])])]),_:1}),_s])])])])}var ps=h(et,[["render",hs]]);j(ps).mount("#app");
