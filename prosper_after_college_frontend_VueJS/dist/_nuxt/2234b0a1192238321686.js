(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{277:function(t,e,n){"use strict";n.r(e);n(59),n(21),n(16),n(9),n(29),n(151),n(45),n(5);var o=n(2),r=n(4),l=n(81);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={props:{result:{type:[Array,Object],default:function(){return null}}},data:function(){var q=this.$route.query.params?JSON.parse(this.$route.query.params):"";return{q:q,totalSalaryIncome:q.salary?q.salary-q.incomeTax:"",inv:0}},computed:_(_({},Object(l.b)({constants:"local/formulas/constants"})),{},{expensesLess:function(){var t=[],e=this.totalSalaryIncome/12-this.q.monthly;return this.q.expenses&&(t=this.q.expenses.map((function(t){return e-=t.value}))),t}}),mounted:function(){this.invest()},methods:{invest:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("local/formulas/calcInvestment",t.q.contribution).then((function(t){return t}));case 2:n=e.sent,t.inv=n;case 4:case"end":return e.stop()}}),e)})))()}},filters:{money:function(t){return(t=parseFloat(t))?(t<0?"-":"")+"$"+Math.abs(t).toFixed(Math.max(0,0)).replace(new RegExp("\\d(?=(\\d{3})+$)","g"),"$&,"):"0"}}},d=n(6),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("no-ssr",[n("div",{staticClass:"result"},[n("div",{staticClass:"result__wrapper default-container"},[n("h1",{staticClass:"default-title"},[t._v("Your results and detailed explanation")]),t._v(" "),n("div",{staticClass:"result__block"},[n("div",{staticClass:"result__block-salary"},[n("div",{staticClass:"result__block-title"},[n("h5",[t._v("Your salary:")]),t._v(" "),n("span",[t._v("Subtotal")])]),t._v(" "),n("div",{staticClass:"result__block-content"},[n("div",{staticClass:"content-name"},[n("span",[t._v("Your starting salary:")]),t._v(" "),n("span",[t._v("Income taxes:")]),t._v(" "),n("span",[t._v("Total:")])]),t._v(" "),n("div",{staticClass:"content-price"},[n("span",{staticClass:"cash valid"},[t._v(t._s(t._f("money")(t.q.salary)))]),t._v(" "),n("span",{staticClass:"cash negative"},[t._v(t._s(t._f("money")(-t.q.incomeTax)))]),t._v(" "),n("span",{staticClass:"cash valid"},[t._v(t._s(t._f("money")(t.totalSalaryIncome)))])])]),t._v(" "),n("div",{staticClass:"result__block-total"},[n("div",{staticClass:"result__block-group"},[n("p",[t._v("Your monthly salary after deductions is:")]),t._v(" "),n("span")]),t._v(" "),n("span",{staticClass:"total valid"},[t._v(t._s(t._f("money")(t.totalSalaryIncome/12)))])])]),t._v(" "),n("div",{staticClass:"result__block-salary"},[n("div",{staticClass:"result__block-title"},[n("h5",[t._v("School cost:")]),t._v(" "),n("span",{staticClass:"mobile"},[t._v("Subtotal")])]),t._v(" "),n("div",{staticClass:"result__block-content"},[n("div",{staticClass:"content-name"},[t._l(t.q.schools,(function(e,o){return n("span",{key:o},[t._v(t._s(e.name)+", "+t._s(e.years)+" years:")])})),t._v(" "),n("span",[t._v("Your contribution:")]),t._v(" "),n("span",[t._v("Total:")])],2),t._v(" "),n("div",{staticClass:"content-price"},[t._l(t.q.schools,(function(e,o){return n("span",{key:o,staticClass:"cash"},[t._v(t._s(t._f("money")(e.cost)))])})),t._v(" "),n("span",{staticClass:"cash"},[t._v(t._s(t._f("money")(-t.q.contribution)))]),t._v(" "),n("span",{staticClass:"cash negative"},[t._v(t._s(t._f("money")(t.q.afterCost)))])],2)]),t._v(" "),n("div",{staticClass:"result__block-total"},[n("div",{staticClass:"result__block-group"},[n("p",[t._v("To pay off in "+t._s(t.q.yearsLoan||"")+" years, your monthly payment is:")]),t._v(" "),n("span",{staticClass:"negative"},[t._v(t._s(t._f("money")(t.q.monthly)))])]),t._v(" "),n("span",{staticClass:"total"},[t._v(t._s(t._f("money")(t.totalSalaryIncome/12-t.q.monthly)))])])]),t._v(" "),n("div",{staticClass:"result__block-salary"},[n("div",{staticClass:"result__block-title"},[n("h5",[t._v("Your monthly expenses:")]),t._v(" "),n("span",{staticClass:"mobile"},[t._v("Subtotal")])]),t._v(" "),n("div",{staticClass:"result__block-content"},[n("div",{staticClass:"content-name"},t._l(t.q.expenses,(function(e,o){return n("span",{key:o},[t._v(t._s(e.name)+":")])})),0),t._v(" "),n("div",{staticClass:"content-price"},t._l(t.q.expenses,(function(e,o){return n("span",{key:o,staticClass:"negative"},[t._v(t._s(t._f("money")(-e.value)))])})),0),t._v(" "),n("div",{staticClass:"total-expenses"},t._l(t.expensesLess,(function(e,o){return n("span",{key:o},[t._v(t._s(t._f("money")(e)))])})),0)]),t._v(" "),n("div",{staticClass:"result__block-total"},[n("div",{staticClass:"result__block-group"},[n("p",[t._v("Total:")]),t._v(" "),n("span",{staticClass:"negative"},[t._v("- "+t._s(t._f("money")(t.q.expenses_summ)))])]),t._v(" "),n("span",{staticClass:"total"},[t._v(t._s(t._f("money")(t.q.balance)))])])]),t._v(" "),n("div",{staticClass:"result__block-summary"},[t.q.balance>=0?n("span",{staticClass:"bold"},[t._v("\n          Based on your lifestyle choices you should have "),n("span",{staticClass:"valid"},[t._v(t._s(t._f("money")(t.q.balance)))]),t._v(" surplus at the end of each month.\n        ")]):n("span",{staticClass:"bold"},[t._v("\n          Summary: you are lacking\n          "),n("span",{staticClass:"negative"},[t._v(t._s(t._f("money")(t.q.balance)))]),t._v(" in your monthly budget.\n        ")]),t._v(" "),t.q.balance<0?n("p",[n("span",{staticClass:"bold"},[t._v("Advice:")]),t._v(" reduce your standard of living or pick cheaper schools\n        ")]):t._e(),t._v(" "),t.q.contribution>=8e3?n("h5",[t._v("A note about your educational contribution")]):t._e(),t._v(" "),t.q.contribution>=8e3?n("p",[t._v("\n          If your educational contribution of "+t._s(t._f("money")(t.q.contribution))+" were invested today at the average rate of return\n          "),n("br"),t._v("of "+t._s(100*t.constants.InvestmentRateOfReturn)+"%, then in "+t._s(t.constants.InvestmentNumberOfYears)+" years it would become\n          "),n("span",{staticClass:"valid"},[t._v(t._s(t._f("money")(t.inv)))]),t._v(" that could potentially go towards yours or your parent's retirment.\n        ")]):t._e()]),t._v(" "),n("p",{staticClass:"result-mobile-text"},[t._v("Information provided on this page is meant to give you a sense of how much you need to be earning and how much you can afford to spend on education in order to achieve your life goals.\n      It is not meant to deter you from applying to universities. In fact I recommend that you do apply to schools of your dream and wait till you receive your financial aid and scholarship letters.\n      But at the end of the day, do your math and decide if your expected salary after graduation is sufficient to cover your educational loans and support your independent and comfortable living.")])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);