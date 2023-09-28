import{R as n,M as s,U as _,Y as R,X as I,l as G,G as m,j as t,V,m as N,Z as F,W as C}from"./index-1a5b9518.js";import{d as O}from"./FlashOn-83d95608.js";import{u as x}from"./hook-ee1fa32f.js";const B=({})=>({columns:[{titleToken:"CREATED AT",field:"createdAt",type:"date",isActive:!0},{titleToken:"ACTION",field:"name",isActive:!0},{titleToken:"ACTIVATED",type:"checkbox",field:"action",isActive:!0},{titleToken:"IS PROCESS START",type:"checkbox",field:"is_process_start",isActive:!1},{titleToken:"PREDEFINED",type:"!checkbox",field:"project_id",isActive:!0}],detailPanelPlugin:"mapps-action-details-preview"}),U=({})=>({columns:[{titleToken:"CREATED AT",field:"createdAt",type:"date",isActive:!0},{titleToken:"ACTION",field:"name",isActive:!0},{titleToken:"PLUGIN TYPE",field:"pluginType",isActive:!0},{titleToken:"AS COMPONENT",type:"checkbox",field:"pluginComponent",isActive:!0},{titleToken:"AS RENDER",type:"checkbox",field:"pluginRender",isActive:!0},{titleToken:"ACTIVATED",type:"checkbox",field:"actionsProject",isActive:!0},{titleToken:"PREDEFINED",type:"!checkbox",field:"project_id",isActive:!0}],detailPanelPlugin:"mapps-action-details-preview"});function P({actionType:l,action:D={}}){const u=n.useMemo(s().Layouts.Sections.V1),v=n.useMemo(s().FormComponents.DropDownList),b=n.useMemo(s().FormComponents.TextBox),i=n.useMemo(s().FormComponents.TextArea),p=n.useMemo(s().FormComponents.Checkbox),h=n.useMemo(s().ButtonLoader),{selectors:{},actions:{upsertActionGlobal:A}}=x(),{translate:r,getLabel:d}=_(),y=R(),[a,g]=n.useState({id:I(),...D,action_type:l}),[k,T]=n.useState(!1),E=["QUERY","COMMAND","VIEW","PROCESS"];function M(){return["",...E].map((c,L)=>({id:c,value:c}))}function S(){T(!0),A({...a,id:a.id}).then(c=>{T(!1),y.actions.closeDrawer()})}return G(m,{container:!0,children:[t(u,{title:"Choose Action Type",style:{flexDirection:"column"},children:t(v,{disabled:!0,label:r(d,"Type"),valueOptions:M(),value:a.action_type,onChange:c=>g({...a,action_type:c.target.value}),field:"type",validation:[]})}),a.action_type&&G(u,{title:"Action Details",style:{flexDirection:"column"},children:[t(b,{label:r(d,"Name"),value:a.name,onChange:c=>g({...a,name:l=="VIEW"?c.target.value.toUpperCase():c.target.value}),field:"value",validation:[]}),t(i,{label:r(d,"Description"),value:a.description,onChange:c=>g({...a,description:c.target.value}),field:"value",validation:[]})]}),a.action_type=="PROCESS"&&t(u,{title:"Process Details",style:{flexDirection:"column"},children:t(p,{label:r(d,"Is process start"),value:a.is_process_start,onChange:c=>g({...a,is_process_start:c.target.checked}),field:"is_process_start",validation:[]})}),t(m,{style:{marginLeft:"1rem",marginBottom:"1rem"},children:t(h,{color:"primary",onClick:S,value:r(d,"Save"),variant:"outlined",isLoading:k})})]})}function z({actionType:l}){const D=n.useMemo(s().ConfirmationDialog),u=n.useMemo(s().Layouts.Table.V2),v=n.useMemo(s().ButtonLoader),[b,i]=n.useState(!1),{translate:p,getLabel:h}=_(),{actions:A}=R(),r=V(),{selectors:{getAllActionsGlobalReducer:d,getAllActionsReducer:y},actions:{upsertAction:a,deleteAction:g,deleteActionGlobal:k}}=x(),T=n.useMemo(()=>d.filter(e=>e.action_type==l).sort((e,o)=>o.name<e.name?1:-1).map(e=>{const o=N.byName(e.name&&e.name.toLowerCase()),f=y.find(j=>j.action_id==e.id);return{...e,actionsProject:f,pluginType:o&&o.type.toUpperCase(),pluginComponent:o&&!!o.component,pluginRender:o&&!!o.render}}),[d,l,y]);function E(){A.openDrawer(!0,t(m,{style:{width:"50vw",display:"flex"},children:t(P,{actionType:l})}),"right")}function M(e,o){const f=I();i(!0),a({id:f,action_id:o.id,status:!0}).then(j=>{i(!1)})}function S(e,o){r.actions.openDialog(!0,t(D,{title:"Delete Action",description:"Do you want to delete this action?",onConfirm:async()=>{r.actions.closeDialog(),i(!0),await k(o),i(!1)}}))}function c(e,o){i(!0),g({id:o.actionsProject.id}).then(f=>{i(!1)})}function L(e,o){A.openDrawer(!0,t(m,{style:{width:"50vw",display:"flex"},children:t(P,{actionType:l,action:o})}),"right")}return t(m,{container:!0,style:{justifyContent:"center"},children:t(u,{isLoading:b,title:"Manage Actions",freeActions:[t(v,{size:"small",value:p(h,"Add Action"),variant:"outlined",onClick:E,startIcon:t(F,{})},1)],actions:[e=>({icon:C.Edit,label:"Edit Action",onClick:L,hidden:!e.project_id}),e=>({icon:C.Check,label:"Activate Action",onClick:M,hidden:e.actionsProject}),e=>({icon:C.Clear,label:"Deactive Action",onClick:c,hidden:!e.actionsProject}),e=>({icon:C.Delete,label:"Delete Action",onClick:S,hidden:!e.project_id||e.actionsProject})],pageSize:20,...U({}),data:T||[]})})}function w({actionType:l}){const D=n.useMemo(s().ConfirmationDialog),u=n.useMemo(s().Layouts.Table.V2),v=n.useMemo(s().ButtonLoader),[b,i]=n.useState(!1),{translate:p,getLabel:h}=_(),{actions:A}=R(),r=V(),{selectors:{getAllActionsGlobalReducer:d,getAllActionsReducer:y},actions:{upsertAction:a,deleteAction:g,deleteActionGlobal:k}}=x(),T=n.useMemo(()=>d.filter(e=>e.action_type==l).sort((e,o)=>o.name<e.name?1:-1).map(e=>{const o=y.find(f=>f.action_id==e.id);return{...e,actionsProject:o}}),[d,l,y]);function E(){A.openDrawer(!0,t(m,{style:{width:"50vw",display:"flex"},children:t(P,{actionType:l})}),"right")}function M(e,o){const f=I();i(!0),a({id:f,action_id:o.id,status:!0}).then(j=>{i(!1)})}function S(e,o){r.actions.openDialog(!0,t(D,{title:"Delete Action",description:"Do you want to delete this action?",onConfirm:async()=>{r.actions.closeDialog(),i(!0),await k(o),i(!1)}}))}function c(e,o){i(!0),g({id:o.actionsProject.id}).then(f=>{i(!1)})}function L(e,o){A.openDrawer(!0,t(m,{style:{width:"50vw",display:"flex"},children:t(P,{actionType:l,action:o})}),"right")}return t(m,{container:!0,style:{justifyContent:"center"},children:t(u,{isLoading:b,title:"Manage Actions",freeActions:[t(v,{size:"small",value:p(h,"Add Action"),variant:"outlined",onClick:E,startIcon:t(F,{})},1)],actions:[e=>({icon:C.Edit,label:"Edit Action",onClick:L,hidden:!e.project_id}),e=>({icon:C.Check,label:"Activate Action",onClick:M,hidden:e.actionsProject}),e=>({icon:C.Clear,label:"Deactive Action",onClick:c,hidden:!e.actionsProject}),e=>({icon:C.Delete,label:"Delete Action",onClick:S,hidden:!e.project_id||e.actionsProject})],pageSize:20,...B({}),data:T||[]})})}function H(l){const[D,u]=n.useState(!0),v=n.useMemo(s().Layouts.Containers.V1),b=n.useMemo(s().Layouts.Tab.V1),{translate:i,getLabel:p}=_(),{actions:{getAllActions:h,getActions:A}}=x();return n.useEffect(()=>{u(!0),Promise.all([h(),A()]).then(r=>{u(!1)})},[]),t(m,{container:!0,style:{justifyContent:"center"},children:t(v,{title:"Actions",icon:t(O,{}),xs:12,sm:12,children:t(b,{defaultTab:0,tabConfig:[{label:i(p,"View Actions"),render:()=>t(z,{actionType:"VIEW"},1)},{label:i(p,"Process Actions"),render:()=>t(w,{actionType:"PROCESS"},2)},{label:i(p,"Command Actions"),render:()=>t(w,{actionType:"COMMAND"},3)},{label:i(p,"Query Actions"),render:()=>t(w,{actionType:"QUERY"},4)}]})})})}export{H as default};
