goog.provide('blog.db');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active-page","active-page",370357330),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"selected-tag","selected-tag",-746441085),null], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),(function (db,p__12641){
var vec__12642 = p__12641;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12642,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12642,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-page","active-page",370357330),page);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-selected-tag","set-selected-tag",1835336475),(function (db,p__12645){
var vec__12646 = p__12645;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12646,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12646,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-tag","selected-tag",-746441085),tag);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"active-page","active-page",370357330),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"active-page","active-page",370357330).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"selected-tag","selected-tag",-746441085),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"selected-tag","selected-tag",-746441085).cljs$core$IFn$_invoke$arity$1(db);
})], 0));

//# sourceMappingURL=blog.db.js.map
