(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(145),l=a(153);t.default=function(){return i.a.createElement(l.a,null,i.a.createElement("h1",null,"Hi from the second page"),i.a.createElement("p",null,"Welcome to page 2"),i.a.createElement(r.Link,{to:"/"},"Go back to the homepage"))}},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return g});var n=a(0),i=a.n(n),r=a(4),l=a.n(r),o=a(144),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var s=a(27);a.d(t,"waitForRouteChange",function(){return s.c});var d=a(146),m=a.n(d);a.d(t,"PageRenderer",function(){return m.a});var u=a(38);a.d(t,"parsePath",function(){return u.a});var p=i.a.createContext({}),g=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},146:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Data Analyst"}}}}},149:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),i=a.n(n),r=a(4),l=a.n(r),o=a(53),c=a(1),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},150:function(e,t,a){},153:function(e,t,a){"use strict";var n=a(148),i={personal:{name:"Martin Mijares",title:"Data Analyst",contact:{address:"334 Ryegate Court",city:"San Jose",state:"CA",zipcode:"95133",cell:"707.853.4220",email:"mmijares86@gmail.com",linkedin:"linkedin.com/in/mjmijares"}},skills:[{type:"Statistical Progams",items:[{name:"SPSS",value:5},{name:"STATA",value:4},{name:"R",value:3}]},{type:"Geospatial Software",items:[{name:"ArcGIS",value:4},{name:"ESRI CA",value:2}]},{type:"Database Tools",items:[{name:"MS Excel",value:4},{name:"Tableau",value:3},{name:"Salesforce",value:3},{name:"Vantage Point EDI",value:2}]},{type:"Visualizations",items:[{name:"Photoshop",value:3},{name:"Lightroom",value:5},{name:"Aperture",value:4}]}],experience:[{company:"Apple",location:"Sunnyvale, CA",date:"2017 - Now",title:"Data Specialist",bullets:["Delivered high quality curated data to product and engineering teams","Devised and improved organization of data for ease of access and delivery","Modified and implemented the collection of image data improving rates of valid information","Improve tooling of proprietary software for data collection","Primary point of contact for training new employees on tools and updates"]},{company:"SIIG, Inc.",location:"Fremont, CA",date:"2016 - 2016",title:"Administrative Assistant",bullets:["Performed Ad Hoc Analysis and Reporting Matrices for sales and marketing teams","Point of contact for sales support - respond to business inquiries, process orders, and logistics","Coordinated cross-functionally with marketing and e-commerce teams, editing customer-facing content","Prepared, design, and update marketing materials for sales meetings and trade shows","Maintained vendor, product and sales data across databases with up-to-date information"]},{company:"COOP",location:"San Jose, CA",date:"2016 - 2017",title:"Co-Founder and Researcher",bullets:["Created a student organization to sustain social impact initiatives ","Researched urban villages and zoning laws nationwide","Coordinated meetings with partner organizations and local government officials"]},{company:"SJSU Research Foundation",location:"San Jose, CA",date:"2015 - 2016",title:"Research Assistant",bullets:["Collected and mapped web-based demographic and education data for a sample size of 4,000 individuals to correlate the relationship between college attendance and voter-ship","Created reports with guidance from researchers to validate data points","Cloud-based system used for data management and storage","Identified suitable sites for homeless housing with ArcGIS"]},{company:"City of San Jose",location:"San Jose, CA",date:"2015 - 2016",title:"Environmental Science Research Intern",bullets:["Worked with external processing facilities to verify creek cleanup data\n                to ensure accurate reporting of information to determine impact of city ordinances in lower creek trash levels","Performed descriptive statistical tests and trend analysis using STATA, to quantify the impact of city ordinances","Mapped creek-cleanup locations, providing geographical overview with ArcGIS","Presented quantified and geographical maps of key findings to Watershed division"]},{company:"SJSU ARC",location:"San Jose, CA",date:"2015 - 2015",title:"Research",bullets:["Trained and supervised thirty station call center interviewers on the survey program WinCati","Refined survey questionnaire, factoring time and simplicity, programmed survey questionnaire into WinCati","Mapped creek-cleanup locations, providing geographical overview with ArcGIS","Conducted cold-call interviews and tracked data collection progress"]}],education:[{degree:"Masters, Sociology",school:"San Jose State University",location:"San Jose, CA"},{degree:"Bachelors, Sociology w/Community Change",school:"San Jose State University",location:"San Jose, CA"}]},r=a(0),l=a.n(r),o=a(4),c=a.n(o),s=a(154),d=a.n(s),m=a(145),u=(a(147),function(e){var t=e.item;return l.a.createElement("div",{style:{backgroundColor:"rgb(64,64,64)"}},l.a.createElement("div",{style:{padding:"1rem 1rem 0 1rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement("div",{style:{color:"white",textDecoration:"none"}},t.name))),l.a.createElement("div",{style:{padding:"0.3rem 1rem",color:"lightgrey"}},l.a.createElement("h3",null,t.title)))}),p=(a(150),a(52),function(e){var t=e.items;return l.a.createElement("div",null,l.a.createElement("h4",null,"Professional Experience"),t.map(function(e){return l.a.createElement("div",{key:e.date,style:{display:"flex"}},l.a.createElement("div",{style:{minWidth:"100px",padding:"1rem"}},e.date),l.a.createElement("div",null,l.a.createElement("div",{style:{fontWeight:"bold"}},e.title),l.a.createElement("div",{style:{padding:"0.3rem"}},e.company,", ",e.location),l.a.createElement("ul",null,e.bullets.map(function(e){return l.a.createElement("li",null,e)}))))}))}),g=function(e){var t=e.items;return l.a.createElement("div",null,l.a.createElement("h4",null,"Education"),l.a.createElement("ul",null,t.map(function(e){return l.a.createElement("li",{key:e.degree},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("span",null,e.degree,", "),l.a.createElement("span",null,e.school)),l.a.createElement("div",null,e.address)))})))},f=function(e){var t=e.item;return l.a.createElement("div",{style:{padding:"1rem"}},l.a.createElement("h4",null,"Contact Information"),l.a.createElement("div",null,"Phone:"),l.a.createElement("div",null,t.contact.cell),l.a.createElement("br",null),l.a.createElement("div",null,"E-mail:"),l.a.createElement("div",null,t.contact.email),l.a.createElement("br",null),l.a.createElement("div",null,"LinkedIn:"),l.a.createElement("div",null,t.contact.linkedin))},h=function(e){for(var t=e.value,a=[],n=1;n<=5;n++)a.push(l.a.createElement("span",{style:{height:"1rem",width:"1rem",backgroundColor:n>t?"lightgrey":"#2E64FE",borderRadius:"50%",display:"inline-block",border:n>t?"lightgrey":"#2E64FE",borderStyle:"solid",margin:"0 0.05rem"}}));return a},y=function(e){var t=e.item;return l.a.createElement("div",{style:{display:"flex",flexDirection:"column",width:"140",padding:"1rem"}},l.a.createElement("h4",null,t.type),t.items.map(function(e){return l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",padding:"0.4rem"},key:e.name},l.a.createElement("span",{style:{width:"70px"}},e.name),l.a.createElement("div",{style:{width:"80px"}},l.a.createElement(h,{value:e.value})))}))},v=function(e){e.item;return l.a.createElement("div",{style:{backgroundColor:"rgb(250,250,250)"}},l.a.createElement("div",{style:{padding:"1rem 1rem 0 1rem",textDecoration:"none"}},"This site was created using ",l.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby"),", an application stack incorporating ",l.a.createElement("a",{href:"https://reactjs.org/"},"React"),"."))},E=function(e){e.item;return l.a.createElement("div",{style:{display:"flex",flexDirection:"column",width:"250",padding:"1rem"}},l.a.createElement("h4",null,"Github"),l.a.createElement("a",{href:"https://github.com/martimnn"},"https://github.com/martimnn"))},b=function(e){e.children;return l.a.createElement(m.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{title:e.site.siteMetadata.title},l.a.createElement("html",{lang:"en"})),l.a.createElement(u,{item:i.personal}),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{style:{padding:"1rem"}},l.a.createElement(p,{items:i.experience}),l.a.createElement(g,{items:i.education})),l.a.createElement("div",{style:{background:"rgb(230,230,230)",padding:"1rem"}},l.a.createElement(f,{item:i.personal}),l.a.createElement(y,{item:i.skills[0]}),l.a.createElement(y,{item:i.skills[1]}),l.a.createElement(y,{item:i.skills[2]}),l.a.createElement(y,{item:i.skills[3]}),l.a.createElement(E,null))),l.a.createElement(v,null))},data:n})};b.propTypes={children:c.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-page-2-js-96cf770250f5499966c0.js.map