import{L as G,N as _,a as L,O as R,Q as j,S as H,i as P,r as W,R as n,M as p,m as Y,U as q,Y as B,X as F,l as A,G as d,j as e,V as Q,Z as U,W as O}from"./index-1a5b9518.js";import{r as K}from"./createSvgIcon-51564d9c.js";import{d as X}from"./index-9e665006.js";const k=t=>{const o={removeDictionary:r=>{t(new R().commandThunt(j.Dictionary.REMOVE_DICTIONARY,r))},addDictionary:r=>t(new R().commandThunt(j.Dictionary.ADD_DICTIONARY,r)),getDictionary:()=>t(new R().queryThunt(H.Dictionary.GET_DICTIONARY,{}))};return{...o,addDictionary:async r=>{await o.addDictionary(r),await o.getDictionary()},removeDictionary:async r=>{await o.removeDictionary(r),await o.getDictionary()}}},Z=()=>t=>t.DictionaryAdminReducer.dictionary;function V(){const t=G(),{dictionaryAdminReducer:o}=_(l=>({dictionaryAdminReducer:l.DictionaryAdminReducer})),[r,g]=L.useState(),v=_(Z()),C=L.useCallback(k(t).removeDictionary,[t]),h=L.useCallback(k(t).addDictionary,[t]),y=L.useCallback(k(t).getDictionary,[t]);function c(){const l={};return v.forEach(D=>{l[D.type]?l[D.type]++:l[D.type]=1}),l}return{selectors:{dictionaryAdminReducer:o,getAllDictionaryReducer:v},actions:{removeDictionary:C,addDictionary:h,getDictionary:y},state:{dictionaryId:r},hooks:{setDictionaryId:g},functions:{getTypeDictionaries:c}}}var I={},J=P;Object.defineProperty(I,"__esModule",{value:!0});var z=I.default=void 0,ee=J(K()),te=W,ae=(0,ee.default)((0,te.jsx)("path",{d:"m12.87 15.07-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7 1.62-4.33L19.12 17h-3.24z"}),"Translate");z=I.default=ae;function E({translation:t}){const o=n.useMemo(p().Layouts.Groups.V1),r=n.useMemo(()=>Y.byName("mapps-component-translate-component").component,[]),g=n.useMemo(p().FormComponents.TextBox),v=n.useMemo(p().FormComponents.DropDownList),C=n.useMemo(p().ButtonLoader),{getPlaceholder:h,getLabel:y,translate:c}=q(),{actions:l}=B(),[D,m]=n.useState(!1),[i,f]=n.useState(t||{id:F()}),{actions:{addDictionary:S},functions:{getTypeDictionaries:T}}=V();function x(s){m(!0),S(i).then(M=>{m(!1),l.closeDrawer()})}function b(s){i.id||(i.id=F()),f({...i,...s})}function w(){return["",...Object.keys(T())].map((s,M)=>({id:s,value:s}))}return A(d,{container:!0,style:{display:"flex"},children:[e(d,{item:!0,xs:6,style:{display:"flex"},children:A(o,{title:"Details",children:[e(v,{label:c(y,"Type"),valueOptions:w(),isRequired:!0,value:i.type,onChange:s=>f({...i,type:s.target.value}),field:"type",validation:[]}),e(g,{onChange:s=>{f({...i,token:s.target.value})},placeholder:c(h,"Code"),isRequired:!0,label:c(y,"Code"),value:i.token,field:"Code",validation:[]}),e(g,{onChange:s=>{f({...i,respStatus:s.target.value})},placeholder:c(h,"Status"),label:c(y,"Status"),value:i.respStatus,field:"Status",validation:[]})]})}),e(d,{item:!0,xs:6,style:{display:"flex"},children:e(o,{title:"Translation",children:e(r,{translation:i||{},setTranslate:b,i:!0})})}),e(d,{style:{marginLeft:"1rem",marginBottom:"1rem"},children:e(C,{color:"primary",onClick:x,value:c(y,"Save"),variant:"outlined",isLoading:D})})]})}function re(){const[t,o]=n.useState(!0),r=n.useMemo(p().ConfirmationDialog),g=n.useMemo(p().Layouts.Containers.V1),v=n.useMemo(p().Layouts.Table.V2),C=n.useMemo(p().FormComponents.Checkbox),h=n.useMemo(p().ButtonLoader),{actions:y}=B(),{translate:c,getLabel:l}=q(),D=Q(),[m,i]=n.useState([]),{selectors:{getAllDictionaryReducer:f},actions:{getDictionary:S,removeDictionary:T},functions:{getTypeDictionaries:x}}=V(),b=n.useMemo(()=>f.filter(a=>m.includes(a.type)).sort((a,u)=>u.code<a.code?1:-1),[f,m]);n.useEffect(()=>{o(!0),Promise.all([S()]).then(a=>{i(Object.keys(x())),o(!1)})},[]);function w(a){const u=a.currentTarget.name;m.includes(u)?i([...m.filter($=>$!=u)]):i([...m,u])}function s(){y.openDrawer(!0,e(d,{style:{width:"50vw",display:"flex"},children:e(E,{})}),"right")}function M(a,u){y.openDrawer(!0,e(d,{style:{width:"50vw",display:"flex"},children:e(E,{translation:{...u.message,status:u.status}})}),"right")}function N(a,u){D.actions.openDialog(!0,e(r,{title:"Delete Word",description:`Do you want to delete ${u.code} word?`,onConfirm:async()=>{D.actions.closeDialog(),o(!0),await T(u),o(!1)}}))}return e(d,{container:!0,style:{justifyContent:"center"},children:e(g,{title:"Dictionary",icon:e(z,{}),xs:12,sm:12,children:e(v,{freeActions:[A(d,{container:!0,children:[e(d,{item:!0,xs:2,style:{display:"flex",alignSelf:"center"},children:e(h,{size:"small",value:c(l,"Add Word"),variant:"outlined",onClick:s,startIcon:e(U,{})},1)}),e(d,{container:!0,item:!0,xs:10,style:{flexWrap:"nowrap"},children:Object.entries(x()).map(a=>e(C,{dataKey:a[0],label:`${c(l,a[0])}`,value:m.includes(a[0]),onChange:w,field:a[0],validation:[]},a[0]))})]})],actions:[a=>({icon:O.Edit,label:"Edit",onClick:M}),a=>({icon:O.Delete,label:"Delete",onClick:N})],isLoading:t,title:c(l,"Manage Dictionary"),...X({}),pageSize:20,data:b})})})}export{re as default};
