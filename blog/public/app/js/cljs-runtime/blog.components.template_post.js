goog.provide('blog.components.template_post');
var module$node_modules$react_icons$fa$index=shadow.js.require("module$node_modules$react_icons$fa$index", {});
blog.components.template_post.author = "CoderLion (Andre)";
blog.components.template_post.current_date = (function blog$components$template_post$current_date(){
var date = (new Date());
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.toLocaleDateString("es-ES",({"year": "numeric", "month": "long", "day": "numeric"})));
});
blog.components.template_post.template_post = (function blog$components$template_post$template_post(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12413 = arguments.length;
var i__5727__auto___12414 = (0);
while(true){
if((i__5727__auto___12414 < len__5726__auto___12413)){
args__5732__auto__.push((arguments[i__5727__auto___12414]));

var G__12415 = (i__5727__auto___12414 + (1));
i__5727__auto___12414 = G__12415;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return blog.components.template_post.template_post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(blog.components.template_post.template_post.cljs$core$IFn$_invoke$arity$variadic = (function (title,content,on_back,p__12403){
var map__12404 = p__12403;
var map__12404__$1 = cljs.core.__destructure_map(map__12404);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12404__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12404__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var related_links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12404__$1,new cljs.core.Keyword(null,"related-links","related-links",1704814908));
var tag = cljs.core.first(tags);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.post-container","div.post-container",574867949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (window.location.href = ["/archives?tag=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join(''));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"text-blue-500 hover:underline flex items-center space-x-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_icons$fa$index.FaArrowLeft,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Volver"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.post-title","h1.post-title",1706443736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-3xl font-bold text-gray-800 mt-4"], null),title], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.post-meta","div.post-meta",-1384492758),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center space-x-2 text-sm text-gray-600 mt-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.post-author","span.post-author",-1327933757),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-medium"], null),["Por: ",blog.components.template_post.author].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.post-date","span.post-date",-312764373),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"italic"], null),[" | ",blog.components.template_post.current_date()].join('')], null)], null),(cljs.core.truth_(description)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.post-description","p.post-description",-1899531323),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-700 mt-4"], null),description], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.post-content","div.post-content",-1854414052),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-6 text-gray-800 leading-relaxed"], null),content], null),((cljs.core.seq(tags))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.post-tags","ul.post-tags",21971093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-4 flex flex-wrap gap-2"], null),(function (){var iter__5480__auto__ = (function blog$components$template_post$iter__12405(s__12406){
return (new cljs.core.LazySeq(null,(function (){
var s__12406__$1 = s__12406;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12406__$1);
if(temp__5804__auto__){
var s__12406__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12406__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12406__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12408 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12407 = (0);
while(true){
if((i__12407 < size__5479__auto__)){
var tag__$1 = cljs.core._nth(c__5478__auto__,i__12407);
cljs.core.chunk_append(b__12408,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tag","li.tag",1173452254),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-blue-100 text-blue-600 px-2 py-1 rounded"], null),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag__$1)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag__$1], null)));

var G__12416 = (i__12407 + (1));
i__12407 = G__12416;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12408),blog$components$template_post$iter__12405(cljs.core.chunk_rest(s__12406__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12408),null);
}
} else {
var tag__$1 = cljs.core.first(s__12406__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tag","li.tag",1173452254),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-blue-100 text-blue-600 px-2 py-1 rounded"], null),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag__$1)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag__$1], null)),blog$components$template_post$iter__12405(cljs.core.rest(s__12406__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(tags);
})()], null):null),((cljs.core.seq(related_links))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.related-links","div.related-links",-1688310727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl font-semibold text-gray-800"], null),"Enlaces relacionados:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-2 space-y-2"], null),(function (){var iter__5480__auto__ = (function blog$components$template_post$iter__12409(s__12410){
return (new cljs.core.LazySeq(null,(function (){
var s__12410__$1 = s__12410;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12410__$1);
if(temp__5804__auto__){
var s__12410__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12410__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12410__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12412 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12411 = (0);
while(true){
if((i__12411 < size__5479__auto__)){
var link = cljs.core._nth(c__5478__auto__,i__12411);
cljs.core.chunk_append(b__12412,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"class","class",-2030961996),"text-blue-500 hover:underline"], null),link], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),link], null)));

var G__12417 = (i__12411 + (1));
i__12411 = G__12417;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12412),blog$components$template_post$iter__12409(cljs.core.chunk_rest(s__12410__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12412),null);
}
} else {
var link = cljs.core.first(s__12410__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"class","class",-2030961996),"text-blue-500 hover:underline"], null),link], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),link], null)),blog$components$template_post$iter__12409(cljs.core.rest(s__12410__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(related_links);
})()], null)], null):null)], null);
}));

(blog.components.template_post.template_post.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(blog.components.template_post.template_post.cljs$lang$applyTo = (function (seq12399){
var G__12400 = cljs.core.first(seq12399);
var seq12399__$1 = cljs.core.next(seq12399);
var G__12401 = cljs.core.first(seq12399__$1);
var seq12399__$2 = cljs.core.next(seq12399__$1);
var G__12402 = cljs.core.first(seq12399__$2);
var seq12399__$3 = cljs.core.next(seq12399__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12400,G__12401,G__12402,seq12399__$3);
}));


//# sourceMappingURL=blog.components.template_post.js.map
