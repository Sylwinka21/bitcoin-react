(this.webpackJsonpcrypto_rate=this.webpackJsonpcrypto_rate||[]).push([[0],{18:function(t,e,r){t.exports=r(42)},23:function(t,e,r){},41:function(t,e,r){},42:function(t,e,r){"use strict";r.r(e);var a=r(0),n=r.n(a),o=r(11),c=r.n(o),l=(r(23),r(12)),s=r(13),i=r(16),u=r(14),y=r(17),p=function(t){console.log(t.cryptoArray);var e=t.cryptoArray.map((function(t){return n.a.createElement("li",{key:t.currency},"Last rate:",n.a.createElement("span",{className:t.class}," ",t.last," "),t.currency," ",t.symbol)}));return n.a.createElement("ul",{className:"crypto-list"},e)},f=r(15),m=r.n(f),h=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(i.a)(this,Object(u.a)(e).call(this))).getCryptoData=function(){m.a.get("https://blockchain.info/pl/ticker").then((function(e){var r=e.data,a=[],n=0;for(var o in r){var c=r[o],l=t.state.cryptoArray[n];console.log(l),void 0!==l?l.last>c.last?c.class="red":l.last<c.last?c.class="green":c.class="blue":c.class="blue",c.currency=o,a.push(c),n++}t.setState({cryptoArray:a,filteredCryptoArray:a}),t.filterCrypto()}))},t.filterCrypto=function(){var e=t.filterInput.value.trim().toUpperCase(),r=t.state.cryptoArray.filter((function(t){return t.currency.includes(e)}));t.setState({filteredCryptoArray:r})},t.state={cryptoArray:[],filteredCryptoArray:[]},t}return Object(y.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.getCryptoData(),setInterval((function(){t.getCryptoData()}),5e3)}},{key:"render",value:function(){var t=this;return console.log(this.state),n.a.createElement("div",{className:"crypto"},n.a.createElement("h2",null,"Kurs walut"),n.a.createElement("input",{type:"text",onChange:this.filterCrypto,ref:function(e){return t.filterInput=e}}),n.a.createElement(p,{cryptoArray:this.state.filteredCryptoArray}))}}]),e}(a.Component);r(41);var v=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.95bf68c2.chunk.js.map