goog.provide('athens.views.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.patterns');
goog.require('athens.router');
goog.require('athens.style');
goog.require('athens.views.blocks');
goog.require('athens.views.breadcrumbs');
goog.require('athens.views.buttons');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('garden.selectors');
goog.require('goog.functions');
goog.require('komponentit.autosize');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('tick.alpha.api');
athens.views.node_page.page_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2rem auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 2rem",new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"100%",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"55rem"], null);
athens.views.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","4px","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.views.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.views.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.views.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.views.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"background-minus-2","background-minus-2",-1711017591),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.views.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.views.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"border-color","border-color",-2059162761))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.views.node_page.handler = (function athens$views$node_page$handler(val,uid){
var G__58236 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58236) : re_frame.core.dispatch.call(null,G__58236));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58237 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58238 = athens.db.dsdb;
var G__58239 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58237,G__58238,G__58239) : posh.reagent.q.call(null,G__58237,G__58238,G__58239));
})());
});
athens.views.node_page.merge_parents_and_block = (function athens$views$node_page$merge_parents_and_block(ref_ids){
var parents = cljs.core.reduce_kv((function (m,_,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,athens.db.get_parents_recursively(v));
}),cljs.core.PersistentArrayMap.EMPTY,ref_ids);
var blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return athens.db.get_block_document(id);
}),ref_ids);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","parents","block/parents",-1954648902),cljs.core.get.cljs$core$IFn$_invoke$arity$2(parents,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))], null)], 0));
}),blocks);
});
athens.views.node_page.group_by_parent = (function athens$views$node_page$group_by_parent(blocks){
return cljs.core.group_by((function (x){
return new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("block","parents","block/parents",-1954648902).cljs$core$IFn$_invoke$arity$1(x)));
}),blocks);
});
athens.views.node_page.get_data = (function athens$views$node_page$get_data(pattern){
return cljs.core.seq(athens.views.node_page.group_by_parent(athens.views.node_page.merge_parents_and_block(athens.views.node_page.get_ref_ids(pattern))));
});
athens.views.node_page.is_timeline_page = (function athens$views$node_page$is_timeline_page(uid){
return cljs.core.boolean$((function (){try{var vec__58241 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58241,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58241,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58241,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58240){if((e58240 instanceof Object)){
var _ = e58240;
return false;
} else {
throw e58240;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58244,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58245 = p__58244;
var map__58245__$1 = (((((!((map__58245 == null))))?(((((map__58245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58245):map__58245);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58245__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58245__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58245__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58247 = e.target.value;
var G__58248 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58247,G__58248) : athens.views.node_page.db_handler.call(null,G__58247,G__58248));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58249(s__58250){
return (new cljs.core.LazySeq(null,(function (){
var s__58250__$1 = s__58250;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58250__$1);
if(temp__5735__auto__){
var s__58250__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58250__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58250__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58252 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58251 = (0);
while(true){
if((i__58251 < size__4581__auto__)){
var map__58253 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58251);
var map__58253__$1 = (((((!((map__58253 == null))))?(((((map__58253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58253):map__58253);
var child = map__58253__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58253__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58252,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58386 = (i__58251 + (1));
i__58251 = G__58386;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58252),athens$views$node_page$node_page_el_$_iter__58249(cljs.core.chunk_rest(s__58250__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58252),null);
}
} else {
var map__58255 = cljs.core.first(s__58250__$2);
var map__58255__$1 = (((((!((map__58255 == null))))?(((((map__58255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58255):map__58255);
var child = map__58255__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58255__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58249(cljs.core.rest(s__58250__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58257(s__58258){
return (new cljs.core.LazySeq(null,(function (){
var s__58258__$1 = s__58258;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58258__$1);
if(temp__5735__auto__){
var s__58258__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58258__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58258__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58260 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58259 = (0);
while(true){
if((i__58259 < size__4581__auto__)){
var vec__58261 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58259);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58261,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58261,(1),null);
cljs.core.chunk_append(b__58260,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58259,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58257_$_iter__58264(s__58265){
return (new cljs.core.LazySeq(null,((function (i__58259,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
var s__58265__$1 = s__58265;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58265__$1);
if(temp__5735__auto____$1){
var s__58265__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58265__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58265__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58267 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58266 = (0);
while(true){
if((i__58266 < size__4581__auto____$1)){
var vec__58268 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58266);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58268,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58268,(1),null);
cljs.core.chunk_append(b__58267,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58266,i__58259,vec__58268,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58267,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58266,i__58259,vec__58268,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58267,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58266,i__58259,vec__58268,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58267,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58257_$_iter__58264_$_iter__58271(s__58272){
return (new cljs.core.LazySeq(null,((function (i__58266,i__58259,vec__58268,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58267,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
var s__58272__$1 = s__58272;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58272__$1);
if(temp__5735__auto____$2){
var s__58272__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58272__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58272__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58274 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58273 = (0);
while(true){
if((i__58273 < size__4581__auto____$2)){
var map__58275 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58273);
var map__58275__$1 = (((((!((map__58275 == null))))?(((((map__58275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58275):map__58275);
var block = map__58275__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58275__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58275__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58274,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58273,i__58266,i__58259,map__58275,map__58275__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58274,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58267,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58257_$_iter__58264_$_iter__58271_$_iter__58277(s__58278){
return (new cljs.core.LazySeq(null,((function (i__58273,i__58266,i__58259,map__58275,map__58275__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58274,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58267,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
var s__58278__$1 = s__58278;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58278__$1);
if(temp__5735__auto____$3){
var s__58278__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58278__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58278__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58280 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58279 = (0);
while(true){
if((i__58279 < size__4581__auto____$3)){
var map__58281 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58279);
var map__58281__$1 = (((((!((map__58281 == null))))?(((((map__58281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58281):map__58281);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58281__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58281__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58281__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58280,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58279,i__58273,i__58266,i__58259,map__58281,map__58281__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58280,s__58278__$2,temp__5735__auto____$3,map__58275,map__58275__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58274,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58267,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58279,i__58273,i__58266,i__58259,map__58281,map__58281__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58280,s__58278__$2,temp__5735__auto____$3,map__58275,map__58275__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58274,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58267,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58387 = (i__58279 + (1));
i__58279 = G__58387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58280),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58264_$_iter__58271_$_iter__58277(cljs.core.chunk_rest(s__58278__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58280),null);
}
} else {
var map__58283 = cljs.core.first(s__58278__$2);
var map__58283__$1 = (((((!((map__58283 == null))))?(((((map__58283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58283):map__58283);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58283__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58283__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58283__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58273,i__58266,i__58259,map__58283,map__58283__$1,title__$1,string,uid__$2,s__58278__$2,temp__5735__auto____$3,map__58275,map__58275__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58274,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58267,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58273,i__58266,i__58259,map__58283,map__58283__$1,title__$1,string,uid__$2,s__58278__$2,temp__5735__auto____$3,map__58275,map__58275__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58274,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58267,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58264_$_iter__58271_$_iter__58277(cljs.core.rest(s__58278__$2)));
}
} else {
return null;
}
break;
}
});})(i__58273,i__58266,i__58259,map__58275,map__58275__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58274,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58267,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
,null,null));
});})(i__58273,i__58266,i__58259,map__58275,map__58275__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58274,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58267,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58388 = (i__58273 + (1));
i__58273 = G__58388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58274),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58264_$_iter__58271(cljs.core.chunk_rest(s__58272__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58274),null);
}
} else {
var map__58285 = cljs.core.first(s__58272__$2);
var map__58285__$1 = (((((!((map__58285 == null))))?(((((map__58285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58285):map__58285);
var block = map__58285__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58285__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58285__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58266,i__58259,map__58285,map__58285__$1,block,uid__$1,parents,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58267,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58257_$_iter__58264_$_iter__58271_$_iter__58287(s__58288){
return (new cljs.core.LazySeq(null,((function (i__58266,i__58259,map__58285,map__58285__$1,block,uid__$1,parents,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58267,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
var s__58288__$1 = s__58288;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58288__$1);
if(temp__5735__auto____$3){
var s__58288__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58288__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58288__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58290 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58289 = (0);
while(true){
if((i__58289 < size__4581__auto____$2)){
var map__58291 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58289);
var map__58291__$1 = (((((!((map__58291 == null))))?(((((map__58291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58291):map__58291);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58291__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58291__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58291__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58290,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58289,i__58266,i__58259,map__58291,map__58291__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58290,s__58288__$2,temp__5735__auto____$3,map__58285,map__58285__$1,block,uid__$1,parents,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58267,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58289,i__58266,i__58259,map__58291,map__58291__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58290,s__58288__$2,temp__5735__auto____$3,map__58285,map__58285__$1,block,uid__$1,parents,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58267,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58389 = (i__58289 + (1));
i__58289 = G__58389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58290),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58264_$_iter__58271_$_iter__58287(cljs.core.chunk_rest(s__58288__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58290),null);
}
} else {
var map__58293 = cljs.core.first(s__58288__$2);
var map__58293__$1 = (((((!((map__58293 == null))))?(((((map__58293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58293):map__58293);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58293__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58293__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58293__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58266,i__58259,map__58293,map__58293__$1,title__$1,string,uid__$2,s__58288__$2,temp__5735__auto____$3,map__58285,map__58285__$1,block,uid__$1,parents,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58267,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58266,i__58259,map__58293,map__58293__$1,title__$1,string,uid__$2,s__58288__$2,temp__5735__auto____$3,map__58285,map__58285__$1,block,uid__$1,parents,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58267,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58264_$_iter__58271_$_iter__58287(cljs.core.rest(s__58288__$2)));
}
} else {
return null;
}
break;
}
});})(i__58266,i__58259,map__58285,map__58285__$1,block,uid__$1,parents,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58267,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
,null,null));
});})(i__58266,i__58259,map__58285,map__58285__$1,block,uid__$1,parents,s__58272__$2,temp__5735__auto____$2,vec__58268,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58267,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58264_$_iter__58271(cljs.core.rest(s__58272__$2)));
}
} else {
return null;
}
break;
}
});})(i__58266,i__58259,vec__58268,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58267,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
,null,null));
});})(i__58266,i__58259,vec__58268,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58267,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58390 = (i__58266 + (1));
i__58266 = G__58390;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58267),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58264(cljs.core.chunk_rest(s__58265__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58267),null);
}
} else {
var vec__58295 = cljs.core.first(s__58265__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58295,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58295,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58259,vec__58295,group_title,group,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58259,vec__58295,group_title,group,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58259,vec__58295,group_title,group,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58257_$_iter__58264_$_iter__58298(s__58299){
return (new cljs.core.LazySeq(null,((function (i__58259,vec__58295,group_title,group,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
var s__58299__$1 = s__58299;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58299__$1);
if(temp__5735__auto____$2){
var s__58299__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58299__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58299__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58301 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58300 = (0);
while(true){
if((i__58300 < size__4581__auto____$1)){
var map__58302 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58300);
var map__58302__$1 = (((((!((map__58302 == null))))?(((((map__58302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58302):map__58302);
var block = map__58302__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58302__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58302__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58301,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58300,i__58259,map__58302,map__58302__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58301,s__58299__$2,temp__5735__auto____$2,vec__58295,group_title,group,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58257_$_iter__58264_$_iter__58298_$_iter__58304(s__58305){
return (new cljs.core.LazySeq(null,((function (i__58300,i__58259,map__58302,map__58302__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58301,s__58299__$2,temp__5735__auto____$2,vec__58295,group_title,group,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
var s__58305__$1 = s__58305;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58305__$1);
if(temp__5735__auto____$3){
var s__58305__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58305__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58305__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58307 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58306 = (0);
while(true){
if((i__58306 < size__4581__auto____$2)){
var map__58308 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58306);
var map__58308__$1 = (((((!((map__58308 == null))))?(((((map__58308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58308):map__58308);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58308__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58308__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58308__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58307,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58306,i__58300,i__58259,map__58308,map__58308__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58307,s__58305__$2,temp__5735__auto____$3,map__58302,map__58302__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58301,s__58299__$2,temp__5735__auto____$2,vec__58295,group_title,group,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58306,i__58300,i__58259,map__58308,map__58308__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58307,s__58305__$2,temp__5735__auto____$3,map__58302,map__58302__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58301,s__58299__$2,temp__5735__auto____$2,vec__58295,group_title,group,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58391 = (i__58306 + (1));
i__58306 = G__58391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58307),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58264_$_iter__58298_$_iter__58304(cljs.core.chunk_rest(s__58305__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58307),null);
}
} else {
var map__58310 = cljs.core.first(s__58305__$2);
var map__58310__$1 = (((((!((map__58310 == null))))?(((((map__58310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58310):map__58310);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58310__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58310__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58310__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58300,i__58259,map__58310,map__58310__$1,title__$1,string,uid__$2,s__58305__$2,temp__5735__auto____$3,map__58302,map__58302__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58301,s__58299__$2,temp__5735__auto____$2,vec__58295,group_title,group,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58300,i__58259,map__58310,map__58310__$1,title__$1,string,uid__$2,s__58305__$2,temp__5735__auto____$3,map__58302,map__58302__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58301,s__58299__$2,temp__5735__auto____$2,vec__58295,group_title,group,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58264_$_iter__58298_$_iter__58304(cljs.core.rest(s__58305__$2)));
}
} else {
return null;
}
break;
}
});})(i__58300,i__58259,map__58302,map__58302__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58301,s__58299__$2,temp__5735__auto____$2,vec__58295,group_title,group,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
,null,null));
});})(i__58300,i__58259,map__58302,map__58302__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58301,s__58299__$2,temp__5735__auto____$2,vec__58295,group_title,group,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58392 = (i__58300 + (1));
i__58300 = G__58392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58301),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58264_$_iter__58298(cljs.core.chunk_rest(s__58299__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58301),null);
}
} else {
var map__58312 = cljs.core.first(s__58299__$2);
var map__58312__$1 = (((((!((map__58312 == null))))?(((((map__58312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58312):map__58312);
var block = map__58312__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58312__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58312__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58259,map__58312,map__58312__$1,block,uid__$1,parents,s__58299__$2,temp__5735__auto____$2,vec__58295,group_title,group,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58257_$_iter__58264_$_iter__58298_$_iter__58314(s__58315){
return (new cljs.core.LazySeq(null,((function (i__58259,map__58312,map__58312__$1,block,uid__$1,parents,s__58299__$2,temp__5735__auto____$2,vec__58295,group_title,group,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
var s__58315__$1 = s__58315;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58315__$1);
if(temp__5735__auto____$3){
var s__58315__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58315__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58315__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58317 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58316 = (0);
while(true){
if((i__58316 < size__4581__auto____$1)){
var map__58318 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58316);
var map__58318__$1 = (((((!((map__58318 == null))))?(((((map__58318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58318):map__58318);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58318__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58318__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58318__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58317,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58316,i__58259,map__58318,map__58318__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58317,s__58315__$2,temp__5735__auto____$3,map__58312,map__58312__$1,block,uid__$1,parents,s__58299__$2,temp__5735__auto____$2,vec__58295,group_title,group,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58316,i__58259,map__58318,map__58318__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58317,s__58315__$2,temp__5735__auto____$3,map__58312,map__58312__$1,block,uid__$1,parents,s__58299__$2,temp__5735__auto____$2,vec__58295,group_title,group,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58393 = (i__58316 + (1));
i__58316 = G__58393;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58317),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58264_$_iter__58298_$_iter__58314(cljs.core.chunk_rest(s__58315__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58317),null);
}
} else {
var map__58320 = cljs.core.first(s__58315__$2);
var map__58320__$1 = (((((!((map__58320 == null))))?(((((map__58320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58320):map__58320);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58320__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58320__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58320__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58259,map__58320,map__58320__$1,title__$1,string,uid__$2,s__58315__$2,temp__5735__auto____$3,map__58312,map__58312__$1,block,uid__$1,parents,s__58299__$2,temp__5735__auto____$2,vec__58295,group_title,group,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58259,map__58320,map__58320__$1,title__$1,string,uid__$2,s__58315__$2,temp__5735__auto____$3,map__58312,map__58312__$1,block,uid__$1,parents,s__58299__$2,temp__5735__auto____$2,vec__58295,group_title,group,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58264_$_iter__58298_$_iter__58314(cljs.core.rest(s__58315__$2)));
}
} else {
return null;
}
break;
}
});})(i__58259,map__58312,map__58312__$1,block,uid__$1,parents,s__58299__$2,temp__5735__auto____$2,vec__58295,group_title,group,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
,null,null));
});})(i__58259,map__58312,map__58312__$1,block,uid__$1,parents,s__58299__$2,temp__5735__auto____$2,vec__58295,group_title,group,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58264_$_iter__58298(cljs.core.rest(s__58299__$2)));
}
} else {
return null;
}
break;
}
});})(i__58259,vec__58295,group_title,group,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
,null,null));
});})(i__58259,vec__58295,group_title,group,s__58265__$2,temp__5735__auto____$1,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58264(cljs.core.rest(s__58265__$2)));
}
} else {
return null;
}
break;
}
});})(i__58259,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
,null,null));
});})(i__58259,vec__58261,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58260,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58394 = (i__58259 + (1));
i__58259 = G__58394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58260),athens$views$node_page$node_page_el_$_iter__58257(cljs.core.chunk_rest(s__58258__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58260),null);
}
} else {
var vec__58322 = cljs.core.first(s__58258__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58322,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58322,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58257_$_iter__58325(s__58326){
return (new cljs.core.LazySeq(null,(function (){
var s__58326__$1 = s__58326;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58326__$1);
if(temp__5735__auto____$1){
var s__58326__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58326__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58326__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58328 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58327 = (0);
while(true){
if((i__58327 < size__4581__auto__)){
var vec__58329 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58327);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58329,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58329,(1),null);
cljs.core.chunk_append(b__58328,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58327,vec__58329,group_title,group,c__4580__auto__,size__4581__auto__,b__58328,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58327,vec__58329,group_title,group,c__4580__auto__,size__4581__auto__,b__58328,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58327,vec__58329,group_title,group,c__4580__auto__,size__4581__auto__,b__58328,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58257_$_iter__58325_$_iter__58332(s__58333){
return (new cljs.core.LazySeq(null,((function (i__58327,vec__58329,group_title,group,c__4580__auto__,size__4581__auto__,b__58328,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
var s__58333__$1 = s__58333;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58333__$1);
if(temp__5735__auto____$2){
var s__58333__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58333__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58333__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58335 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58334 = (0);
while(true){
if((i__58334 < size__4581__auto____$1)){
var map__58336 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58334);
var map__58336__$1 = (((((!((map__58336 == null))))?(((((map__58336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58336):map__58336);
var block = map__58336__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58336__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58336__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58335,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58334,i__58327,map__58336,map__58336__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58335,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,c__4580__auto__,size__4581__auto__,b__58328,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58257_$_iter__58325_$_iter__58332_$_iter__58338(s__58339){
return (new cljs.core.LazySeq(null,((function (i__58334,i__58327,map__58336,map__58336__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58335,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,c__4580__auto__,size__4581__auto__,b__58328,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
var s__58339__$1 = s__58339;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58339__$1);
if(temp__5735__auto____$3){
var s__58339__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58339__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58339__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58341 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58340 = (0);
while(true){
if((i__58340 < size__4581__auto____$2)){
var map__58342 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58340);
var map__58342__$1 = (((((!((map__58342 == null))))?(((((map__58342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58342):map__58342);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58342__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58342__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58342__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58341,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58340,i__58334,i__58327,map__58342,map__58342__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58341,s__58339__$2,temp__5735__auto____$3,map__58336,map__58336__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58335,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,c__4580__auto__,size__4581__auto__,b__58328,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58340,i__58334,i__58327,map__58342,map__58342__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58341,s__58339__$2,temp__5735__auto____$3,map__58336,map__58336__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58335,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,c__4580__auto__,size__4581__auto__,b__58328,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58395 = (i__58340 + (1));
i__58340 = G__58395;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58341),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58325_$_iter__58332_$_iter__58338(cljs.core.chunk_rest(s__58339__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58341),null);
}
} else {
var map__58344 = cljs.core.first(s__58339__$2);
var map__58344__$1 = (((((!((map__58344 == null))))?(((((map__58344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58344):map__58344);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58344__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58344__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58344__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58334,i__58327,map__58344,map__58344__$1,title__$1,string,uid__$2,s__58339__$2,temp__5735__auto____$3,map__58336,map__58336__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58335,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,c__4580__auto__,size__4581__auto__,b__58328,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58334,i__58327,map__58344,map__58344__$1,title__$1,string,uid__$2,s__58339__$2,temp__5735__auto____$3,map__58336,map__58336__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58335,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,c__4580__auto__,size__4581__auto__,b__58328,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58325_$_iter__58332_$_iter__58338(cljs.core.rest(s__58339__$2)));
}
} else {
return null;
}
break;
}
});})(i__58334,i__58327,map__58336,map__58336__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58335,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,c__4580__auto__,size__4581__auto__,b__58328,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
,null,null));
});})(i__58334,i__58327,map__58336,map__58336__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58335,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,c__4580__auto__,size__4581__auto__,b__58328,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58396 = (i__58334 + (1));
i__58334 = G__58396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58335),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58325_$_iter__58332(cljs.core.chunk_rest(s__58333__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58335),null);
}
} else {
var map__58346 = cljs.core.first(s__58333__$2);
var map__58346__$1 = (((((!((map__58346 == null))))?(((((map__58346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58346):map__58346);
var block = map__58346__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58346__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58346__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58327,map__58346,map__58346__$1,block,uid__$1,parents,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,c__4580__auto__,size__4581__auto__,b__58328,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58257_$_iter__58325_$_iter__58332_$_iter__58348(s__58349){
return (new cljs.core.LazySeq(null,((function (i__58327,map__58346,map__58346__$1,block,uid__$1,parents,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,c__4580__auto__,size__4581__auto__,b__58328,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
var s__58349__$1 = s__58349;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58349__$1);
if(temp__5735__auto____$3){
var s__58349__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58349__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58349__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58351 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58350 = (0);
while(true){
if((i__58350 < size__4581__auto____$1)){
var map__58352 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58350);
var map__58352__$1 = (((((!((map__58352 == null))))?(((((map__58352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58352):map__58352);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58352__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58352__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58352__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58351,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58350,i__58327,map__58352,map__58352__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58351,s__58349__$2,temp__5735__auto____$3,map__58346,map__58346__$1,block,uid__$1,parents,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,c__4580__auto__,size__4581__auto__,b__58328,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58350,i__58327,map__58352,map__58352__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58351,s__58349__$2,temp__5735__auto____$3,map__58346,map__58346__$1,block,uid__$1,parents,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,c__4580__auto__,size__4581__auto__,b__58328,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58397 = (i__58350 + (1));
i__58350 = G__58397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58351),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58325_$_iter__58332_$_iter__58348(cljs.core.chunk_rest(s__58349__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58351),null);
}
} else {
var map__58354 = cljs.core.first(s__58349__$2);
var map__58354__$1 = (((((!((map__58354 == null))))?(((((map__58354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58354):map__58354);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58354__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58354__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58354__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58327,map__58354,map__58354__$1,title__$1,string,uid__$2,s__58349__$2,temp__5735__auto____$3,map__58346,map__58346__$1,block,uid__$1,parents,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,c__4580__auto__,size__4581__auto__,b__58328,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58327,map__58354,map__58354__$1,title__$1,string,uid__$2,s__58349__$2,temp__5735__auto____$3,map__58346,map__58346__$1,block,uid__$1,parents,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,c__4580__auto__,size__4581__auto__,b__58328,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58325_$_iter__58332_$_iter__58348(cljs.core.rest(s__58349__$2)));
}
} else {
return null;
}
break;
}
});})(i__58327,map__58346,map__58346__$1,block,uid__$1,parents,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,c__4580__auto__,size__4581__auto__,b__58328,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
,null,null));
});})(i__58327,map__58346,map__58346__$1,block,uid__$1,parents,s__58333__$2,temp__5735__auto____$2,vec__58329,group_title,group,c__4580__auto__,size__4581__auto__,b__58328,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58325_$_iter__58332(cljs.core.rest(s__58333__$2)));
}
} else {
return null;
}
break;
}
});})(i__58327,vec__58329,group_title,group,c__4580__auto__,size__4581__auto__,b__58328,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
,null,null));
});})(i__58327,vec__58329,group_title,group,c__4580__auto__,size__4581__auto__,b__58328,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58398 = (i__58327 + (1));
i__58327 = G__58398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58328),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58325(cljs.core.chunk_rest(s__58326__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58328),null);
}
} else {
var vec__58356 = cljs.core.first(s__58326__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58356,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58356,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58356,group_title,group,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58356,group_title,group,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58356,group_title,group,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58257_$_iter__58325_$_iter__58359(s__58360){
return (new cljs.core.LazySeq(null,(function (){
var s__58360__$1 = s__58360;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58360__$1);
if(temp__5735__auto____$2){
var s__58360__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58360__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58360__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58362 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58361 = (0);
while(true){
if((i__58361 < size__4581__auto__)){
var map__58363 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58361);
var map__58363__$1 = (((((!((map__58363 == null))))?(((((map__58363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58363):map__58363);
var block = map__58363__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58363__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58363__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58362,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58361,map__58363,map__58363__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58362,s__58360__$2,temp__5735__auto____$2,vec__58356,group_title,group,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58257_$_iter__58325_$_iter__58359_$_iter__58365(s__58366){
return (new cljs.core.LazySeq(null,((function (i__58361,map__58363,map__58363__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58362,s__58360__$2,temp__5735__auto____$2,vec__58356,group_title,group,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
var s__58366__$1 = s__58366;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58366__$1);
if(temp__5735__auto____$3){
var s__58366__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58366__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58366__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58368 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58367 = (0);
while(true){
if((i__58367 < size__4581__auto____$1)){
var map__58369 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58367);
var map__58369__$1 = (((((!((map__58369 == null))))?(((((map__58369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58369):map__58369);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58369__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58369__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58369__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58368,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58367,i__58361,map__58369,map__58369__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58368,s__58366__$2,temp__5735__auto____$3,map__58363,map__58363__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58362,s__58360__$2,temp__5735__auto____$2,vec__58356,group_title,group,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58367,i__58361,map__58369,map__58369__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58368,s__58366__$2,temp__5735__auto____$3,map__58363,map__58363__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58362,s__58360__$2,temp__5735__auto____$2,vec__58356,group_title,group,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58399 = (i__58367 + (1));
i__58367 = G__58399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58368),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58325_$_iter__58359_$_iter__58365(cljs.core.chunk_rest(s__58366__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58368),null);
}
} else {
var map__58371 = cljs.core.first(s__58366__$2);
var map__58371__$1 = (((((!((map__58371 == null))))?(((((map__58371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58371):map__58371);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58371__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58371__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58371__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58361,map__58371,map__58371__$1,title__$1,string,uid__$2,s__58366__$2,temp__5735__auto____$3,map__58363,map__58363__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58362,s__58360__$2,temp__5735__auto____$2,vec__58356,group_title,group,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58361,map__58371,map__58371__$1,title__$1,string,uid__$2,s__58366__$2,temp__5735__auto____$3,map__58363,map__58363__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58362,s__58360__$2,temp__5735__auto____$2,vec__58356,group_title,group,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58325_$_iter__58359_$_iter__58365(cljs.core.rest(s__58366__$2)));
}
} else {
return null;
}
break;
}
});})(i__58361,map__58363,map__58363__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58362,s__58360__$2,temp__5735__auto____$2,vec__58356,group_title,group,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
,null,null));
});})(i__58361,map__58363,map__58363__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58362,s__58360__$2,temp__5735__auto____$2,vec__58356,group_title,group,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58400 = (i__58361 + (1));
i__58361 = G__58400;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58362),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58325_$_iter__58359(cljs.core.chunk_rest(s__58360__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58362),null);
}
} else {
var map__58373 = cljs.core.first(s__58360__$2);
var map__58373__$1 = (((((!((map__58373 == null))))?(((((map__58373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58373):map__58373);
var block = map__58373__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58373__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58373__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58373,map__58373__$1,block,uid__$1,parents,s__58360__$2,temp__5735__auto____$2,vec__58356,group_title,group,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58257_$_iter__58325_$_iter__58359_$_iter__58375(s__58376){
return (new cljs.core.LazySeq(null,(function (){
var s__58376__$1 = s__58376;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58376__$1);
if(temp__5735__auto____$3){
var s__58376__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58376__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58376__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58378 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58377 = (0);
while(true){
if((i__58377 < size__4581__auto__)){
var map__58379 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58377);
var map__58379__$1 = (((((!((map__58379 == null))))?(((((map__58379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58379):map__58379);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58379__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58379__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58379__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58378,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58377,map__58379,map__58379__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58378,s__58376__$2,temp__5735__auto____$3,map__58373,map__58373__$1,block,uid__$1,parents,s__58360__$2,temp__5735__auto____$2,vec__58356,group_title,group,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58377,map__58379,map__58379__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58378,s__58376__$2,temp__5735__auto____$3,map__58373,map__58373__$1,block,uid__$1,parents,s__58360__$2,temp__5735__auto____$2,vec__58356,group_title,group,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58401 = (i__58377 + (1));
i__58377 = G__58401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58378),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58325_$_iter__58359_$_iter__58375(cljs.core.chunk_rest(s__58376__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58378),null);
}
} else {
var map__58381 = cljs.core.first(s__58376__$2);
var map__58381__$1 = (((((!((map__58381 == null))))?(((((map__58381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58381):map__58381);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58381__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58381__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58381__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58381,map__58381__$1,title__$1,string,uid__$2,s__58376__$2,temp__5735__auto____$3,map__58373,map__58373__$1,block,uid__$1,parents,s__58360__$2,temp__5735__auto____$2,vec__58356,group_title,group,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58381,map__58381__$1,title__$1,string,uid__$2,s__58376__$2,temp__5735__auto____$3,map__58373,map__58373__$1,block,uid__$1,parents,s__58360__$2,temp__5735__auto____$2,vec__58356,group_title,group,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58325_$_iter__58359_$_iter__58375(cljs.core.rest(s__58376__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58373,map__58373__$1,block,uid__$1,parents,s__58360__$2,temp__5735__auto____$2,vec__58356,group_title,group,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58325_$_iter__58359(cljs.core.rest(s__58360__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58356,group_title,group,s__58326__$2,temp__5735__auto____$1,vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58257_$_iter__58325(cljs.core.rest(s__58326__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58322,linked_or_unlinked,refs,s__58258__$2,temp__5735__auto__,map__58245,map__58245__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__58257(cljs.core.rest(s__58258__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(ref_groups);
})())], null);
});
/**
 * One diff between datascript and posh: we don't have pull in q for posh
 *   https://github.com/mpdairy/posh/issues/21
 */
athens.views.node_page.node_page_component = (function athens$views$node_page$node_page_component(ident){
var map__58383 = athens.db.get_node_document(ident);
var map__58383__$1 = (((((!((map__58383 == null))))?(((((map__58383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58383):map__58383);
var node = map__58383__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58383__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58383__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58385 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58385) : re_frame.core.subscribe.call(null,G__58385));
})());
var timeline_page_QMARK_ = athens.views.node_page.is_timeline_page(uid);
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.views.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.views.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_], null);
}
});

//# sourceMappingURL=athens.views.node_page.js.map