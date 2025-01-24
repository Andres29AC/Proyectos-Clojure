goog.provide('blog.router');
blog.router.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, ["tags",new cljs.core.Keyword(null,"tags","tags",1771418977),"archives",new cljs.core.Keyword(null,"archives","archives",1836692484)], null)], null);
blog.router.parse_url = (function blog$router$parse_url(url){
return bidi.bidi.match_route(blog.router.routes,url);
});
blog.router.dispatch = (function blog$router$dispatch(matched_route){
var view = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(matched_route);
var query_params = new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(matched_route);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),view], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.Keyword(null,"archives","archives",1836692484))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-selected-tag","set-selected-tag",1835336475),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(query_params)], null));
} else {
return null;
}
});
blog.router.start_BANG_ = (function blog$router$start_BANG_(){
return pushy.core.pushy(blog.router.dispatch,blog.router.parse_url).pushy$core$IHistory$start_BANG_$arity$1(null, );
});

//# sourceMappingURL=blog.router.js.map
