goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__6805){
var map__6809 = p__6805;
var map__6809__$1 = cljs.core.__destructure_map(map__6809);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6809__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6809__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6809__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6809__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5002__auto__ = child_of;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__6811_6847 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__6812_6848 = null;
var count__6813_6849 = (0);
var i__6814_6850 = (0);
while(true){
if((i__6814_6850 < count__6813_6849)){
var vec__6834_6851 = chunk__6812_6848.cljs$core$IIndexed$_nth$arity$2(null, i__6814_6850);
var k_6852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6834_6851,(0),null);
var cb_6853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6834_6851,(1),null);
try{var G__6838_6854 = cljs.core.deref(re_frame.trace.traces);
(cb_6853.cljs$core$IFn$_invoke$arity$1 ? cb_6853.cljs$core$IFn$_invoke$arity$1(G__6838_6854) : cb_6853.call(null, G__6838_6854));
}catch (e6837){var e_6855 = e6837;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_6852,"while storing",cljs.core.deref(re_frame.trace.traces),e_6855], 0));
}

var G__6860 = seq__6811_6847;
var G__6861 = chunk__6812_6848;
var G__6862 = count__6813_6849;
var G__6863 = (i__6814_6850 + (1));
seq__6811_6847 = G__6860;
chunk__6812_6848 = G__6861;
count__6813_6849 = G__6862;
i__6814_6850 = G__6863;
continue;
} else {
var temp__5804__auto___6864 = cljs.core.seq(seq__6811_6847);
if(temp__5804__auto___6864){
var seq__6811_6865__$1 = temp__5804__auto___6864;
if(cljs.core.chunked_seq_QMARK_(seq__6811_6865__$1)){
var c__5525__auto___6866 = cljs.core.chunk_first(seq__6811_6865__$1);
var G__6867 = cljs.core.chunk_rest(seq__6811_6865__$1);
var G__6868 = c__5525__auto___6866;
var G__6869 = cljs.core.count(c__5525__auto___6866);
var G__6870 = (0);
seq__6811_6847 = G__6867;
chunk__6812_6848 = G__6868;
count__6813_6849 = G__6869;
i__6814_6850 = G__6870;
continue;
} else {
var vec__6839_6871 = cljs.core.first(seq__6811_6865__$1);
var k_6872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6839_6871,(0),null);
var cb_6873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6839_6871,(1),null);
try{var G__6843_6874 = cljs.core.deref(re_frame.trace.traces);
(cb_6873.cljs$core$IFn$_invoke$arity$1 ? cb_6873.cljs$core$IFn$_invoke$arity$1(G__6843_6874) : cb_6873.call(null, G__6843_6874));
}catch (e6842){var e_6875 = e6842;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_6872,"while storing",cljs.core.deref(re_frame.trace.traces),e_6875], 0));
}

var G__6876 = cljs.core.next(seq__6811_6865__$1);
var G__6877 = null;
var G__6878 = (0);
var G__6879 = (0);
seq__6811_6847 = G__6876;
chunk__6812_6848 = G__6877;
count__6813_6849 = G__6878;
i__6814_6850 = G__6879;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null, ));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
