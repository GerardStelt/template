import{r as t,g as e}from"./p-b7cfa215.js";import{A as s}from"./p-6686e54f.js";let i=class{constructor(e){t(this,e),this.titleSuffix="",this.pageTitle=""}updateDocumentTitle(){const t=this.el;t.ownerDocument&&(t.ownerDocument.title=`${this.pageTitle}${this.titleSuffix||""}`)}componentWillLoad(){this.updateDocumentTitle()}get el(){return e(this)}static get watchers(){return{pageTitle:["updateDocumentTitle"]}}};s.injectProps(i,["titleSuffix"]);export{i as stencil_route_title}