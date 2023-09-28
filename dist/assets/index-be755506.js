import{R as t,M as c,U as v,a1 as I,l as U,G as s,j as e,a2 as b,a3 as S,X as k,Y as B}from"./index-1a5b9518.js";import{u as C}from"./hook-427855e8.js";function A({userId:u}){const l=t.useMemo(c().Layouts.Groups.V1),m=t.useMemo(c().BodyLoader),n=t.useMemo(c().FormComponents.DropDownList),i=t.useMemo(c().FormComponents.TextBox),{selectors:{getUserByIdeReducer:y},actions:{grantRole:d,revokeRole:f},hooks:{setUserId:p}}=C(),{translate:g,getLabel:R}=v(),[r,E]=t.useState(),[L,x]=t.useState(!1),{selectors:{rolesSelector:O}}=I();t.useEffect(()=>{p(u)},[]),t.useEffect(()=>{y&&E({...y})},[y]);function D(){const o=r.user_type?r.user_type.usertype_roles.map(a=>a.roles.id):[],h=[...r.user_roles.map(a=>a.roles.id),...o],T=O.filter(a=>!h.includes(a.id));return[{id:"",value:""},...T].map(a=>({id:a.id,value:a.role||a.value}))}function M(o){const h=o.currentTarget.dataset.key;x(!0),f({id:h}).then(T=>{x(!1)})}function _(o){x(!0),d({id:k(),user_id:r.id,role_id:o.target.value}).then(h=>{x(!1)})}try{return r&&!L?U(s,{container:!0,style:{display:"flex"},children:[e(l,{title:"User Type",children:e(i,{disabled:!0,label:g(R,"Name"),value:r.email,field:"value",validation:[]})}),U(l,{title:"Roles",children:[e(n,{label:"Select Role",valueOptions:D(),value:"",onChange:_,field:"type",validation:[]}),r.user_roles.map((o,h)=>e(b,{"data-key":o.id,onClick:M,label:o.roles.role_detail.name.trim()},o.id))]})]}):e(s,{style:{height:"400px",display:"flex",width:"100%"},children:e(m,{text:" ",size:"25px"})})}catch(o){return console.log(o),e(S,{})}}function j({userId:u}){const l=t.useMemo(c().Layouts.Groups.V1),m=t.useMemo(c().ButtonLoader),{actions:n}=B(),{translate:i,getLabel:y}=v(),[d,f]=t.useState(),{selectors:{getUserByIdeReducer:p},actions:{},hooks:{setUserId:g}}=C();t.useEffect(()=>{g(u)},[]),t.useEffect(()=>{p&&f({...p})},[p]);function R(){n.openDrawer(!0,e(s,{style:{width:"50vw",display:"flex"},children:e(A,{userId:u})}),"right")}try{return d&&U(s,{container:!0,style:{display:"flex"},children:[d.user_type&&e(l,{title:"Inherited Roles from User Type",children:d.user_type.usertype_roles.map(r=>e(b,{"data-key":r.id,label:r.roles.role_detail.name.trim()},r.id))}),e(l,{title:"Assigned Roles",children:d.user_roles.map(r=>e(b,{"data-key":r.id,label:r.roles.role_detail.name.trim()},r.id))}),e(s,{style:{marginLeft:"1rem",marginBottom:"1rem"},children:e(m,{color:"primary",onClick:R,value:i(y,"Edit Roles"),variant:"outlined"})})]})}catch(r){return console.log(r),e(S,{})}}function G(u){t.useState(!0);const l=t.useMemo(c().Layouts.Groups.V1),m=t.useMemo(c().Layouts.Tab.V1),{translate:n,getLabel:i}=v(),[y,d]=t.useState(),{selectors:{getUserByIdeReducer:f},actions:{},hooks:{setUserId:p}}=C();return t.useEffect(()=>{p(u.id)},[]),t.useEffect(()=>{f&&d({...f})},[f]),y&&e(m,{defaultTab:0,tabConfig:[{label:n(i,"[TODO]Profile && Roles"),render:()=>U(s,{container:!0,style:{justifyContent:"center"},children:[e(s,{item:!0,xs:8,style:{display:"flex"},children:e(l,{title:"User Profile"})}),e(s,{item:!0,xs:4,style:{display:"flex"},children:e(l,{title:"User Roles",children:e(j,{userId:u.id})})})]})},{label:n(i,"[TODO] ITEMS"),render:()=>e(s,{container:!0,style:{justifyContent:"center"},children:e(s,{item:!0,xs:4,style:{display:"flex"},children:e(l,{title:"User Address"})})})},{label:n(i,"[TODO] PROCESS"),render:()=>e(s,{container:!0,style:{justifyContent:"center"},children:e(s,{item:!0,xs:4,style:{display:"flex"},children:e(l,{title:"User Address"})})})},{label:n(i,"[TODO] CATEGORY PREVIEW"),render:()=>e(s,{container:!0,style:{justifyContent:"center"},children:e(s,{item:!0,xs:4,style:{display:"flex"},children:e(l,{title:"User Address"})})})},{label:n(i,"[TODO] IUA RELATED"),render:()=>e(s,{container:!0,style:{justifyContent:"center"},children:e(s,{item:!0,xs:4,style:{display:"flex"},children:e(l,{title:"User Address"})})})},{label:n(i,"[TODO] INVOICES"),render:()=>e(s,{container:!0,style:{justifyContent:"center"},children:e(s,{item:!0,xs:4,style:{display:"flex"},children:e(l,{title:"User Address"})})})}]})}export{G as UserDetails};
