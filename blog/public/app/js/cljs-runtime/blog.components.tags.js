goog.provide('blog.components.tags');
var module$node_modules$react_icons$io5$index=shadow.js.require("module$node_modules$react_icons$io5$index", {});
blog.components.tags.icon = (function blog$components$tags$icon(){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_icons$io5$index.IoPricetagsOutline,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl"], null)], null));
});
blog.components.tags.tag_component = (function blog$components$tags$tag_component(tag){
var map__6700 = tag;
var map__6700__$1 = cljs.core.__destructure_map(map__6700);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6700__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var post_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6700__$1,new cljs.core.Keyword(null,"post-count","post-count",-1326461588));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-2 text-center text-xs transition-all transform hover:scale-105 hover:shadow-sm dark:hover:bg-gray-700 dark:text-white shadow-sm"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),["/archives?tag=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer",new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline text-xs"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.components.tags.icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),name], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block text-gray-500 dark:text-gray-400 mt-1 text-xs"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(post_count)," posts"].join('')], null)], null);
});
blog.components.tags.tags_component = (function blog$components$tags$tags_component(){
var tags = blog.services.tag.update_tags();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4"], null),(function (){var iter__5480__auto__ = (function blog$components$tags$tags_component_$_iter__6701(s__6702){
return (new cljs.core.LazySeq(null,(function (){
var s__6702__$1 = s__6702;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__6702__$1);
if(temp__5804__auto__){
var s__6702__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6702__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__6702__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__6704 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__6703 = (0);
while(true){
if((i__6703 < size__5479__auto__)){
var tag = cljs.core._nth(c__5478__auto__,i__6703);
cljs.core.chunk_append(b__6704,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.components.tags.tag_component,tag], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tag)], null)));

var G__6705 = (i__6703 + (1));
i__6703 = G__6705;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6704),blog$components$tags$tags_component_$_iter__6701(cljs.core.chunk_rest(s__6702__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6704),null);
}
} else {
var tag = cljs.core.first(s__6702__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.components.tags.tag_component,tag], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tag)], null)),blog$components$tags$tags_component_$_iter__6701(cljs.core.rest(s__6702__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(tags);
})()], null);
});

//# sourceMappingURL=blog.components.tags.js.map
