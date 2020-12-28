(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{251:function(e,t,n){},272:function(e,t,n){"use strict";var o=n(251);n.n(o).a},281:function(e,t,n){"use strict";n.r(t);n(151),n(45),n(5);var o=n(2),r=(n(81),n(99)),l=n(19),c={components:{AppFieldSelect:r.a},data:function(){return{roi:"",majorsRoi:[],college:{},page:null}},fetch:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r,l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,o=e.params,r=e.error,l=e.payload,c=e.res,console.log("_alias -> client side"),t.abrupt("return");case 4:if(void 0!==l&&!c){t.next=17;break}if(n.state.server.colleges.collagesByStates.length){t.next=14;break}return t.prev=6,t.next=9,n.dispatch("server/colleges/getCollegesByStates");case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(6),r({statusCode:404,message:"Page Not Found"});case 14:n.dispatch("server/colleges/setCollage",n.getters["server/colleges/collageByStateAndAlias"](o.alias)),t.next=18;break;case 17:n.dispatch("server/colleges/setCollage",l);case 18:case"end":return t.stop()}}),t,null,[[6,11]])})))()},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r,c,_,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.$payloadURL,o=e.route,e.params,r=e.payload,c=e.store,console.log("school - asyncData"),!r){t.next=5;break}return console.log("in payload"),t.abrupt("return",{page:r});case 5:return console.log("static: true client: "+!0),t.next=9,l.b.axios().get(n(o));case 9:return _=t.sent,v=_.data.page,c.dispatch("server/colleges/setCollage",v),console.log("AsyncData "+v.OPEID),t.next=15,c.dispatch("server/majors/getMajorsRoi",v.OPEID);case 15:return t.abrupt("return",_);case 16:case"end":return t.stop()}}),t)})))()},head:function(){return{title:this.$store.getters["server/colleges/college"].Institution,meta:[{hid:"og-title",property:"og:title",content:this.$store.getters["server/colleges/college"].Institution}]}},mounted:function(){this.$nextTick((function(){console.log("mounted"),this.majorsRoi=this.$store.getters["server/majors/majorsRoi"],console.log(this.majorsRoi),this.college=this.$store.getters["server/colleges/college"]}))},filters:{int:function(e){return-1!==e&&e?Math.round(e):"N/A"},tensPercent:function(e){return e?e.toFixed(1)+"%":""},percent:function(e){return e?Math.abs(Math.round(100*e))+"%":"N/A"},percentNoSign:function(e){return e?Math.abs(Math.round(100*e)):"N/A"},money:function(e){return(e=parseFloat(e))?(e<0?"-":"")+"$"+Math.abs(e).toFixed(Math.max(0,0)).replace(new RegExp("\\d(?=(\\d{3})+$)","g"),"$&,"):""}},destroyed:function(){this.$store.dispatch("server/colleges/setCollage",null)},watch:{}},_=(n(272),n(6)),component=Object(_.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text"},[e.college?n("div",{staticClass:"text__wrapper default-container"},[n("h1",[e._v(e._s(e.college.Institution))]),e._v(" "),n("div",[n("p",[e._v(e._s(e.college.city)+", "+e._s(e.college.state)+" "+e._s(e.college.zip))]),e._v(" "),n("div",[n("a",{attrs:{href:e.college.Url}},[e._v(e._s(e.college.Url))])])]),e._v(" "),n("div",[e._v("\n      "+e._s(e.college.Institution)+" is a "+e._s(2==e.college.Highdeg?"2":"4")+" year "+e._s(1==e.college.Control?"Public":2==e.college.Control?"Private Non-profit":"Private For-profit")+" college\n      offering up to the "+e._s(2==e.college.Highdeg?"Associate":3==e.college.Highdeg?"Bachelors":"Graduate")+" degree.\n      "),n("br"),e._v("\n      Its "),n("strong",[e._v("admission rate is "+e._s(e._f("percent")(e.college.ADM_RATE_ALL)))]),e._v(", so "+e._s(e._f("percentNoSign")(e.college.ADM_RATE_ALL))+" applicants out of 100 are accepted each year.\n      "),n("br")]),e._v(" "),n("div",[n("h3",[e._v("Cost")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Average cost of attendance")]),e._v("\n          , includes tuition, fees, books, supplies and living expenses: "+e._s(e._f("money")(e.college.cost))+"\n        ")]),e._v(" "),n("li",[n("strong",[e._v("In-state tuition")]),e._v("\n          (excluding supplies and living expenses): "+e._s(e._f("money")(e.college.instatetuition))+"\n        ")]),e._v(" "),n("li",[n("strong",[e._v("Out-of-state tuition")]),e._v("\n          (excluding supplies and living expenses): "+e._s(e._f("money")(e.college.OutOfStateTuition))+"\n        ")]),e._v(" "),n("li",[n("strong",[e._v("Room And Board")]),e._v(" "+e._s(e._f("money")(e.college.RoomAndBoardCost))+"\n        ")])]),e._v(" "),n("div",{staticClass:"text-table"},[n("h2",[e._v("Average net cost")]),e._v(" "),n("table",{staticClass:"table"},[e._m(0),e._v(" "),n("tr",[e._m(1),e._v(" "),n("td",[e._v(e._s(e._f("money")(1==e.college.Control?e.college.AvgInStateTuition:e.college.AvgPrivateTuition)))])]),e._v(" "),n("tr",[e._m(2),e._v(" "),n("td",[e._v(e._s(e._f("money")(1==e.college.Control?e.college.AvgInStateTuition1:e.college.AvgPrivateTuition1)))])]),e._v(" "),n("tr",[e._m(3),e._v(" "),n("td",[e._v(e._s(e._f("money")(1==e.college.Control?e.college.AvgInStateTuition2:e.college.AvgPrivateTuition2)))])]),e._v(" "),n("tr",[e._m(4),e._v(" "),n("td",[e._v(e._s(e._f("money")(1==e.college.Control?e.college.AvgInStateTuition3:e.college.AvgPrivateTuition3)))])]),e._v(" "),n("tr",[e._m(5),e._v(" "),n("td",[e._v(e._s(e._f("money")(1==e.college.Control?e.college.AvgInStateTuition4:e.college.AvgPrivateTuition4)))])]),e._v(" "),n("tr",[e._m(6),e._v(" "),n("td",[e._v(e._s(e._f("money")(1==e.college.Control?e.college.AvgInStateTuition5:e.college.AvgPrivateTuition5)))])])])]),e._v(" "),n("ul",[n("li",[n("h3",[e._v("This school occupies the "+e._s(e._f("int")(e.college.CostPercentileState))+"th percentile by cost among other "+e._s(2==e.college.Highdeg?"2":"4")+" year universities in "),n("u",[e._v(e._s(e.college.state))]),e._v(".")])]),e._v("\n      This means that "+e._s(e._f("int")(e.college.CostPercentileState))+" of schools are less expensive then this one.\n      "),n("li",[n("h3",[e._v("This school occupies the "+e._s(e._f("int")(e.college.CostPercentileStateControl))+"th percentile by cost among other "+e._s(2==e.college.Highdeg?"2":"4")+" year "),n("u",[e._v(e._s(1==e.college.Control?"public":"private"))]),e._v(" universities in "),n("u",[e._v(e._s(e.college.state))]),e._v(".")])]),e._v(" "),n("li",[n("h3",[e._v("This school occupies the "+e._s(e._f("int")(e.college.CostPercentileNational))+"th percentile by cost among other "+e._s(2==e.college.Highdeg?"2":"4")+" year private universities "),n("u",[e._v("nationally")]),e._v(".")])])])]),e._v(" "),n("h3",[e._v("Financial Aid")]),e._v(" "),n("ol",[n("li",[n("strong",[e._v("Percent of undergraduate students receiving federal loans:")]),e._v("\n        "+e._s(e._f("percent")(e.college.PCTFLOAN))+"\n      ")]),e._v(" "),n("li",[n("strong",[e._v("Percent of students receiving Pell grants:")]),e._v("\n        "+e._s(e._f("percent")(e.college.PCTPELL))+"\n      ")]),e._v(" "),n("li",[n("strong",[e._v("Median federal student loan debt (excludes private loans):")]),e._v("\n        "+e._s(e._f("money")(e.college.DEBT_MDN))+"\n      ")])]),e._v(" "),Number.isFinite(e.college.averageroi)?n("div",[n("h3",[e._v("Return On Investment (ROI)")]),e._v("Since education is a form of investment into your future it is important to consider what you gain for every dollar you spend.\n      Depending on the major, graduates of some schools earn on average more then graduates of other schools.\n      But the reasons for this are not as straightforward as just the status of a given university. Consider that more competetive schools attract more\n      ambitious and hard working students. While some other schools have predominately middle-upper class students whose parents will help them navigate\n      the job market. Therefor neither a school with a high earning average an assurance of your future success, neither a school with a lower earning average\n      a limitation on your future earning potential. Much of your success will depend on your hard work, communication skills and ability to adapt.\n      "),n("div",[n("h4",[e._v("\n          We calculated that this school has on average an ROI of\n          "),n("strong",[e._v(e._s(e._f("int")(e.college.averageroi))+"%")])]),e._v("How this number was calculated: we took all private and public 4 year colleges and universities that report earnings for their graduates\n        and compared the average cost of attending that school for 4 years with the earning potential of the graduates over 10 years after graduation,\n        taking into consideration a 5% per year salary increase. Then we averaged the ROI for all reported majors for this school.\n        "),n("br"),e._v(" "),n("h5",[e._v("To get the ROI for a specific major please select a major from this dropdown")]),e._v("\n        This number represents how financially sound is receiving the selected major in this school compared to the same major in all 4-year universities (that have reported earnings data) in the "),n("u",[e._v("country")]),e._v(".\n        "),n("div",{staticClass:"roi"},[n("app-field-select",{staticClass:"select-arrow",attrs:{name:"roi","input-classes":"custom-select",label:"Majors:",options:e.majorsRoi,reduse:function(e){return e.code}},model:{value:e.roi,callback:function(t){e.roi=t},expression:"roi"}}),e._v(" "),n("strong",{staticClass:"result-roi"},[e._v("ROI: "+e._s(e._f("tensPercent")(e.roi.code)))]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.roi,expression:"roi"}]},[e._v(" based on expected starting salary of "+e._s(e._f("money")(e.roi.salary))+".")])],1)])]):e._e(),e._v(" "),n("h3",[e._v("Student Body - undergraduate")]),e._v(" "),n("ul",{staticClass:"inner"},[n("li",[n("strong",[e._v("Student body:")]),e._v("\n        "+e._s(e._f("percent")(e.college.UDGS))+"\n      ")]),e._v(" "),n("li",[n("strong",[e._v("Men:")]),e._v("\n        "+e._s(e._f("int")(e.college.UDGS_MEN))+"\n      ")]),e._v(" "),n("li",[n("strong",[e._v("Women:")]),e._v("\n        "+e._s(e._f("int")(e.college.UDGS_WOMEN))+"\n      ")]),e._v(" "),n("li",[n("strong",[e._v("White:")]),e._v("\n        "+e._s(e._f("int")(e.college.UDGS_WHITE))+"\n      ")]),e._v(" "),n("li",[n("strong",[e._v("Black:")]),e._v("\n        "+e._s(e._f("int")(e.college.UDGS_BLACK))+"\n      ")]),e._v(" "),n("li",[n("strong",[e._v("Hispanic:")]),e._v("\n        "+e._s(e._f("int")(e.college.UGDS_HISP))+"\n      ")]),e._v(" "),n("li",[n("strong",[e._v("Asian:")]),e._v("\n        "+e._s(e._f("int")(e.college.UGDS_ASIAN))+"\n      ")]),e._v(" "),n("li",[n("strong",[e._v("American Indian:")]),e._v("\n        "+e._s(e._f("int")(e.college.UGDS_AIAN))+"\n      ")]),e._v(" "),n("li",[n("strong",[e._v("Native Hawaiian/Pacific Islander:")]),e._v("\n        "+e._s(e._f("int")(e.college.UGDS_NHPI))+"\n      ")]),e._v(" "),n("h3",[e._v("Student body by income")]),e._v(" "),n("br"),e._v(" "),n("li",[n("strong",[e._v("$0-$30,000:")]),e._v("\n        "+e._s(e._f("percent")(e.college.INC_PCT_LO))+"\n      ")]),e._v(" "),n("li",[n("strong",[e._v("$30,001-$48,000:")]),e._v("\n        "+e._s(e._f("percent")(e.college.INC_PCT_M1))+"\n      ")]),e._v(" "),n("li",[n("strong",[e._v("$48,001-$75,000:")]),e._v("\n        "+e._s(e._f("percent")(e.college.INC_PCT_M2))+"\n      ")]),e._v(" "),n("li",[n("strong",[e._v("$75,001-$110,000:")]),e._v("\n        "+e._s(e._f("percent")(e.college.INC_PCT_H1))+"\n      ")]),e._v(" "),n("li",[n("strong",[e._v("$110,001+:")]),e._v("\n        "+e._s(e._f("percent")(e.college.INC_PCT_H2))+"\n      ")])]),e._v(" "),n("div",{staticClass:"text-table"},[n("h2",[e._v("Test Scores")]),e._v(" "),n("p",[e._v("\n        Below are the test scores as reported for most students. The 75th percentile is the score corresponding to the 75th percentile of students (most students had at least this score).\n        The 25th percentile represents the lower test score that the least students (25%) have received. Thus it is better if your score is above the 75% mark, but a lower score (even below 25%) should not discourage you from applying.\n      ")]),e._v(" "),n("table",{staticClass:"table"},[e._m(7),e._v(" "),n("tr",[e._m(8),e._v(" "),n("td",[e._v(e._s(e._f("int")(e.college.SATM75)))]),e._v(" "),n("td",[e._v(e._s(e._f("int")(e.college.SATR75)))]),e._v(" "),n("td",[e._v(e._s(e._f("int")(e.college.ACTMT75)))]),e._v(" "),n("td",[e._v(e._s(e._f("int")(e.college.ACTEN75)))]),e._v(" "),n("td",[e._v(e._s(e._f("int")(e.college.ACTCM75)))])]),e._v(" "),n("tr",[e._m(9),e._v(" "),n("td",[e._v(e._s(e._f("int")(e.college.SATM25)))]),e._v(" "),n("td",[e._v(e._s(e._f("int")(e.college.SATR25)))]),e._v(" "),n("td",[e._v(e._s(e._f("int")(e.college.ACTMT25)))]),e._v(" "),n("td",[e._v(e._s(e._f("int")(e.college.ACTEN25)))]),e._v(" "),n("td",[e._v(e._s(e._f("int")(e.college.ACTCM25)))])])])]),e._v(" "),n("div",{staticClass:"advisor__content-option"},[n("button",{staticClass:"default-submit advisor-select",on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()},keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()},keypress:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()},click:function(t){return t.preventDefault(),e.$router.push("/calculator")}}},[n("span",[e._v("Try our lifestyle Calculator")])])])]):e._e()])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("th",[this._v("Household income")]),this._v(" "),t("th",[this._v("Average net price (cost minus grants and scholarships)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("strong",[this._v("Average")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("strong",[this._v("$0-$30,000")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("strong",[this._v("$30,001-$48,000")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("strong",[this._v("$48,001-$75,000")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("strong",[this._v("$75,001-$110,000")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("strong",[this._v("$110,001+")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th"),e._v(" "),n("th",[e._v("SAT Math")]),e._v(" "),n("th",[e._v("SAT Reading")]),e._v(" "),n("th",[e._v("ACT Math")]),e._v(" "),n("th",[e._v("ACT English")]),e._v(" "),n("th",[e._v("ACT Composite")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("strong",[this._v("75% (Most student's scores)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("strong",[this._v("25% (Least student's scores)")])])}],!1,null,"ebc38b42",null);t.default=component.exports}}]);