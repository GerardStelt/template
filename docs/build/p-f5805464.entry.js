import{r as t,h as e}from"./p-b7cfa215.js";let n=class{constructor(e){t(this,e),this.content=""}componentWillLoad(){if(null!=this.documentLocation)return this.fetchNewContent(this.documentLocation)}fetchNewContent(t){return fetch(t).then((t=>t.text())).then((t=>{this.content=t}))}render(){return e("div",{innerHTML:this.content})}static get watchers(){return{documentLocation:["fetchNewContent"]}}};export{n as stencil_async_content}