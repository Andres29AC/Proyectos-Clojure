goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null, re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__7145 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__7146 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__7146);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___7267 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___7267)){
var new_db_7268 = temp__5804__auto___7267;
var fexpr__7148_7269 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__7148_7269.cljs$core$IFn$_invoke$arity$1 ? fexpr__7148_7269.cljs$core$IFn$_invoke$arity$1(new_db_7268) : fexpr__7148_7269.call(null, new_db_7268));
} else {
}

var seq__7149 = cljs.core.seq(effects_without_db);
var chunk__7150 = null;
var count__7151 = (0);
var i__7152 = (0);
while(true){
if((i__7152 < count__7151)){
var vec__7168 = chunk__7150.cljs$core$IIndexed$_nth$arity$2(null, i__7152);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7168,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7168,(1),null);
var temp__5802__auto___7270 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___7270)){
var effect_fn_7271 = temp__5802__auto___7270;
(effect_fn_7271.cljs$core$IFn$_invoke$arity$1 ? effect_fn_7271.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_7271.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__7272 = seq__7149;
var G__7273 = chunk__7150;
var G__7274 = count__7151;
var G__7275 = (i__7152 + (1));
seq__7149 = G__7272;
chunk__7150 = G__7273;
count__7151 = G__7274;
i__7152 = G__7275;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__7149);
if(temp__5804__auto__){
var seq__7149__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7149__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__7149__$1);
var G__7276 = cljs.core.chunk_rest(seq__7149__$1);
var G__7277 = c__5525__auto__;
var G__7278 = cljs.core.count(c__5525__auto__);
var G__7279 = (0);
seq__7149 = G__7276;
chunk__7150 = G__7277;
count__7151 = G__7278;
i__7152 = G__7279;
continue;
} else {
var vec__7173 = cljs.core.first(seq__7149__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7173,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7173,(1),null);
var temp__5802__auto___7280 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___7280)){
var effect_fn_7281 = temp__5802__auto___7280;
(effect_fn_7281.cljs$core$IFn$_invoke$arity$1 ? effect_fn_7281.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_7281.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__7283 = cljs.core.next(seq__7149__$1);
var G__7284 = null;
var G__7285 = (0);
var G__7286 = (0);
seq__7149 = G__7283;
chunk__7150 = G__7284;
count__7151 = G__7285;
i__7152 = G__7286;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__6774__auto___7288 = re_frame.interop.now();
var duration__6775__auto___7289 = (end__6774__auto___7288 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__6775__auto___7289,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__6774__auto___7288);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__7145);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___7290 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___7290)){
var new_db_7291 = temp__5804__auto___7290;
var fexpr__7180_7292 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__7180_7292.cljs$core$IFn$_invoke$arity$1 ? fexpr__7180_7292.cljs$core$IFn$_invoke$arity$1(new_db_7291) : fexpr__7180_7292.call(null, new_db_7291));
} else {
}

var seq__7182 = cljs.core.seq(effects_without_db);
var chunk__7183 = null;
var count__7184 = (0);
var i__7185 = (0);
while(true){
if((i__7185 < count__7184)){
var vec__7199 = chunk__7183.cljs$core$IIndexed$_nth$arity$2(null, i__7185);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7199,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7199,(1),null);
var temp__5802__auto___7293 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___7293)){
var effect_fn_7294 = temp__5802__auto___7293;
(effect_fn_7294.cljs$core$IFn$_invoke$arity$1 ? effect_fn_7294.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_7294.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__7295 = seq__7182;
var G__7296 = chunk__7183;
var G__7297 = count__7184;
var G__7298 = (i__7185 + (1));
seq__7182 = G__7295;
chunk__7183 = G__7296;
count__7184 = G__7297;
i__7185 = G__7298;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__7182);
if(temp__5804__auto__){
var seq__7182__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7182__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__7182__$1);
var G__7299 = cljs.core.chunk_rest(seq__7182__$1);
var G__7300 = c__5525__auto__;
var G__7301 = cljs.core.count(c__5525__auto__);
var G__7302 = (0);
seq__7182 = G__7299;
chunk__7183 = G__7300;
count__7184 = G__7301;
i__7185 = G__7302;
continue;
} else {
var vec__7208 = cljs.core.first(seq__7182__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7208,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7208,(1),null);
var temp__5802__auto___7303 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___7303)){
var effect_fn_7304 = temp__5802__auto___7303;
(effect_fn_7304.cljs$core$IFn$_invoke$arity$1 ? effect_fn_7304.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_7304.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__7305 = cljs.core.next(seq__7182__$1);
var G__7306 = null;
var G__7307 = (0);
var G__7308 = (0);
seq__7182 = G__7305;
chunk__7183 = G__7306;
count__7184 = G__7307;
i__7185 = G__7308;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__7215){
var map__7216 = p__7215;
var map__7216__$1 = cljs.core.__destructure_map(map__7216);
var effect = map__7216__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7216__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7216__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__7221 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__7222 = null;
var count__7223 = (0);
var i__7224 = (0);
while(true){
if((i__7224 < count__7223)){
var effect = chunk__7222.cljs$core$IIndexed$_nth$arity$2(null, i__7224);
re_frame.fx.dispatch_later(effect);


var G__7311 = seq__7221;
var G__7312 = chunk__7222;
var G__7313 = count__7223;
var G__7314 = (i__7224 + (1));
seq__7221 = G__7311;
chunk__7222 = G__7312;
count__7223 = G__7313;
i__7224 = G__7314;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__7221);
if(temp__5804__auto__){
var seq__7221__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7221__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__7221__$1);
var G__7315 = cljs.core.chunk_rest(seq__7221__$1);
var G__7316 = c__5525__auto__;
var G__7317 = cljs.core.count(c__5525__auto__);
var G__7318 = (0);
seq__7221 = G__7315;
chunk__7222 = G__7316;
count__7223 = G__7317;
i__7224 = G__7318;
continue;
} else {
var effect = cljs.core.first(seq__7221__$1);
re_frame.fx.dispatch_later(effect);


var G__7319 = cljs.core.next(seq__7221__$1);
var G__7320 = null;
var G__7321 = (0);
var G__7322 = (0);
seq__7221 = G__7319;
chunk__7222 = G__7320;
count__7223 = G__7321;
i__7224 = G__7322;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__7237 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__7238 = null;
var count__7239 = (0);
var i__7240 = (0);
while(true){
if((i__7240 < count__7239)){
var vec__7247 = chunk__7238.cljs$core$IIndexed$_nth$arity$2(null, i__7240);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7247,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7247,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___7323 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___7323)){
var effect_fn_7324 = temp__5802__auto___7323;
(effect_fn_7324.cljs$core$IFn$_invoke$arity$1 ? effect_fn_7324.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_7324.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__7327 = seq__7237;
var G__7328 = chunk__7238;
var G__7329 = count__7239;
var G__7330 = (i__7240 + (1));
seq__7237 = G__7327;
chunk__7238 = G__7328;
count__7239 = G__7329;
i__7240 = G__7330;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__7237);
if(temp__5804__auto__){
var seq__7237__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7237__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__7237__$1);
var G__7331 = cljs.core.chunk_rest(seq__7237__$1);
var G__7332 = c__5525__auto__;
var G__7333 = cljs.core.count(c__5525__auto__);
var G__7334 = (0);
seq__7237 = G__7331;
chunk__7238 = G__7332;
count__7239 = G__7333;
i__7240 = G__7334;
continue;
} else {
var vec__7250 = cljs.core.first(seq__7237__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7250,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7250,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___7335 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___7335)){
var effect_fn_7336 = temp__5802__auto___7335;
(effect_fn_7336.cljs$core$IFn$_invoke$arity$1 ? effect_fn_7336.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_7336.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__7337 = cljs.core.next(seq__7237__$1);
var G__7338 = null;
var G__7339 = (0);
var G__7340 = (0);
seq__7237 = G__7337;
chunk__7238 = G__7338;
count__7239 = G__7339;
i__7240 = G__7340;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__7253 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__7254 = null;
var count__7255 = (0);
var i__7256 = (0);
while(true){
if((i__7256 < count__7255)){
var event = chunk__7254.cljs$core$IIndexed$_nth$arity$2(null, i__7256);
re_frame.router.dispatch(event);


var G__7341 = seq__7253;
var G__7342 = chunk__7254;
var G__7343 = count__7255;
var G__7344 = (i__7256 + (1));
seq__7253 = G__7341;
chunk__7254 = G__7342;
count__7255 = G__7343;
i__7256 = G__7344;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__7253);
if(temp__5804__auto__){
var seq__7253__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7253__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__7253__$1);
var G__7346 = cljs.core.chunk_rest(seq__7253__$1);
var G__7347 = c__5525__auto__;
var G__7348 = cljs.core.count(c__5525__auto__);
var G__7349 = (0);
seq__7253 = G__7346;
chunk__7254 = G__7347;
count__7255 = G__7348;
i__7256 = G__7349;
continue;
} else {
var event = cljs.core.first(seq__7253__$1);
re_frame.router.dispatch(event);


var G__7351 = cljs.core.next(seq__7253__$1);
var G__7352 = null;
var G__7353 = (0);
var G__7354 = (0);
seq__7253 = G__7351;
chunk__7254 = G__7352;
count__7255 = G__7353;
i__7256 = G__7354;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__7257 = cljs.core.seq(value);
var chunk__7258 = null;
var count__7259 = (0);
var i__7260 = (0);
while(true){
if((i__7260 < count__7259)){
var event = chunk__7258.cljs$core$IIndexed$_nth$arity$2(null, i__7260);
clear_event(event);


var G__7355 = seq__7257;
var G__7356 = chunk__7258;
var G__7357 = count__7259;
var G__7358 = (i__7260 + (1));
seq__7257 = G__7355;
chunk__7258 = G__7356;
count__7259 = G__7357;
i__7260 = G__7358;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__7257);
if(temp__5804__auto__){
var seq__7257__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7257__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__7257__$1);
var G__7359 = cljs.core.chunk_rest(seq__7257__$1);
var G__7360 = c__5525__auto__;
var G__7361 = cljs.core.count(c__5525__auto__);
var G__7362 = (0);
seq__7257 = G__7359;
chunk__7258 = G__7360;
count__7259 = G__7361;
i__7260 = G__7362;
continue;
} else {
var event = cljs.core.first(seq__7257__$1);
clear_event(event);


var G__7363 = cljs.core.next(seq__7257__$1);
var G__7364 = null;
var G__7365 = (0);
var G__7366 = (0);
seq__7257 = G__7363;
chunk__7258 = G__7364;
count__7259 = G__7365;
i__7260 = G__7366;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__7261 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__7262 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__7262);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__6774__auto___7368 = re_frame.interop.now();
var duration__6775__auto___7369 = (end__6774__auto___7368 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__6775__auto___7369,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__6774__auto___7368);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__7261);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
