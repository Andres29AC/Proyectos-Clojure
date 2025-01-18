goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14760){
var map__14761 = p__14760;
var map__14761__$1 = cljs.core.__destructure_map(map__14761);
var runtime = map__14761__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14761__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_15876 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_15876)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14764 = runtime;
var G__14765 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_15876);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14764,G__14765) : shadow.remote.runtime.shared.process.call(null, G__14764,G__14765));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14766,res){
var map__14767 = p__14766;
var map__14767__$1 = cljs.core.__destructure_map(map__14767);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14767__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14767__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14768 = res;
var G__14768__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14768,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14768);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14768__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14768__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14770 = arguments.length;
switch (G__14770) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14772,msg,handlers,timeout_after_ms){
var map__14773 = p__14772;
var map__14773__$1 = cljs.core.__destructure_map(map__14773);
var runtime = map__14773__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14773__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15880 = arguments.length;
var i__5727__auto___15881 = (0);
while(true){
if((i__5727__auto___15881 < len__5726__auto___15880)){
args__5732__auto__.push((arguments[i__5727__auto___15881]));

var G__15882 = (i__5727__auto___15881 + (1));
i__5727__auto___15881 = G__15882;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14831,ev,args){
var map__14832 = p__14831;
var map__14832__$1 = cljs.core.__destructure_map(map__14832);
var runtime = map__14832__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14832__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14834 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14837 = null;
var count__14838 = (0);
var i__14839 = (0);
while(true){
if((i__14839 < count__14838)){
var ext = chunk__14837.cljs$core$IIndexed$_nth$arity$2(null, i__14839);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__15942 = seq__14834;
var G__15943 = chunk__14837;
var G__15944 = count__14838;
var G__15945 = (i__14839 + (1));
seq__14834 = G__15942;
chunk__14837 = G__15943;
count__14838 = G__15944;
i__14839 = G__15945;
continue;
} else {
var G__15946 = seq__14834;
var G__15947 = chunk__14837;
var G__15948 = count__14838;
var G__15949 = (i__14839 + (1));
seq__14834 = G__15946;
chunk__14837 = G__15947;
count__14838 = G__15948;
i__14839 = G__15949;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14834);
if(temp__5804__auto__){
var seq__14834__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14834__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14834__$1);
var G__15950 = cljs.core.chunk_rest(seq__14834__$1);
var G__15951 = c__5525__auto__;
var G__15952 = cljs.core.count(c__5525__auto__);
var G__15953 = (0);
seq__14834 = G__15950;
chunk__14837 = G__15951;
count__14838 = G__15952;
i__14839 = G__15953;
continue;
} else {
var ext = cljs.core.first(seq__14834__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__15954 = cljs.core.next(seq__14834__$1);
var G__15955 = null;
var G__15956 = (0);
var G__15957 = (0);
seq__14834 = G__15954;
chunk__14837 = G__15955;
count__14838 = G__15956;
i__14839 = G__15957;
continue;
} else {
var G__15958 = cljs.core.next(seq__14834__$1);
var G__15959 = null;
var G__15960 = (0);
var G__15961 = (0);
seq__14834 = G__15958;
chunk__14837 = G__15959;
count__14838 = G__15960;
i__14839 = G__15961;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14827){
var G__14828 = cljs.core.first(seq14827);
var seq14827__$1 = cljs.core.next(seq14827);
var G__14829 = cljs.core.first(seq14827__$1);
var seq14827__$2 = cljs.core.next(seq14827__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14828,G__14829,seq14827__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__15492,p__15493){
var map__15494 = p__15492;
var map__15494__$1 = cljs.core.__destructure_map(map__15494);
var runtime = map__15494__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15494__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__15495 = p__15493;
var map__15495__$1 = cljs.core.__destructure_map(map__15495);
var msg = map__15495__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15495__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__15500 = cljs.core.deref(state_ref);
var map__15500__$1 = cljs.core.__destructure_map(map__15500);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15500__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15500__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__15509,msg){
var map__15510 = p__15509;
var map__15510__$1 = cljs.core.__destructure_map(map__15510);
var runtime = map__15510__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15510__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__15520,key,p__15521){
var map__15522 = p__15520;
var map__15522__$1 = cljs.core.__destructure_map(map__15522);
var state = map__15522__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15522__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__15523 = p__15521;
var map__15523__$1 = cljs.core.__destructure_map(map__15523);
var spec = map__15523__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15523__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15523__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__15719,key,spec){
var map__15720 = p__15719;
var map__15720__$1 = cljs.core.__destructure_map(map__15720);
var runtime = map__15720__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15720__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___16044 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___16044 == null)){
} else {
var on_welcome_16045 = temp__5808__auto___16044;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_16045.cljs$core$IFn$_invoke$arity$0 ? on_welcome_16045.cljs$core$IFn$_invoke$arity$0() : on_welcome_16045.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__15727_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__15727_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__15728_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__15728_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__15729_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__15729_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__15731_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__15731_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__15733_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__15733_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__15746,key){
var map__15747 = p__15746;
var map__15747__$1 = cljs.core.__destructure_map(map__15747);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15747__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__15758,msg){
var map__15760 = p__15758;
var map__15760__$1 = cljs.core.__destructure_map(map__15760);
var runtime = map__15760__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15760__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__15775,p__15776){
var map__15777 = p__15775;
var map__15777__$1 = cljs.core.__destructure_map(map__15777);
var runtime = map__15777__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15777__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__15778 = p__15776;
var map__15778__$1 = cljs.core.__destructure_map(map__15778);
var msg = map__15778__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15778__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15778__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__15789 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__15791 = null;
var count__15792 = (0);
var i__15793 = (0);
while(true){
if((i__15793 < count__15792)){
var map__15808 = chunk__15791.cljs$core$IIndexed$_nth$arity$2(null, i__15793);
var map__15808__$1 = cljs.core.__destructure_map(map__15808);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15808__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__16187 = seq__15789;
var G__16188 = chunk__15791;
var G__16189 = count__15792;
var G__16190 = (i__15793 + (1));
seq__15789 = G__16187;
chunk__15791 = G__16188;
count__15792 = G__16189;
i__15793 = G__16190;
continue;
} else {
var G__16192 = seq__15789;
var G__16193 = chunk__15791;
var G__16194 = count__15792;
var G__16195 = (i__15793 + (1));
seq__15789 = G__16192;
chunk__15791 = G__16193;
count__15792 = G__16194;
i__15793 = G__16195;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15789);
if(temp__5804__auto__){
var seq__15789__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15789__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15789__$1);
var G__16196 = cljs.core.chunk_rest(seq__15789__$1);
var G__16197 = c__5525__auto__;
var G__16198 = cljs.core.count(c__5525__auto__);
var G__16199 = (0);
seq__15789 = G__16196;
chunk__15791 = G__16197;
count__15792 = G__16198;
i__15793 = G__16199;
continue;
} else {
var map__15815 = cljs.core.first(seq__15789__$1);
var map__15815__$1 = cljs.core.__destructure_map(map__15815);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15815__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__16204 = cljs.core.next(seq__15789__$1);
var G__16205 = null;
var G__16206 = (0);
var G__16207 = (0);
seq__15789 = G__16204;
chunk__15791 = G__16205;
count__15792 = G__16206;
i__15793 = G__16207;
continue;
} else {
var G__16208 = cljs.core.next(seq__15789__$1);
var G__16209 = null;
var G__16210 = (0);
var G__16211 = (0);
seq__15789 = G__16208;
chunk__15791 = G__16209;
count__15792 = G__16210;
i__15793 = G__16211;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
