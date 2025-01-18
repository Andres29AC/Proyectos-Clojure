goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__6129__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__6129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6130__i = 0, G__6130__a = new Array(arguments.length -  0);
while (G__6130__i < G__6130__a.length) {G__6130__a[G__6130__i] = arguments[G__6130__i + 0]; ++G__6130__i;}
  args = new cljs.core.IndexedSeq(G__6130__a,0,null);
} 
return G__6129__delegate.call(this,args);};
G__6129.cljs$lang$maxFixedArity = 0;
G__6129.cljs$lang$applyTo = (function (arglist__6131){
var args = cljs.core.seq(arglist__6131);
return G__6129__delegate(args);
});
G__6129.cljs$core$IFn$_invoke$arity$variadic = G__6129__delegate;
return G__6129;
})()
);

(o.error = (function() { 
var G__6132__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__6132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6133__i = 0, G__6133__a = new Array(arguments.length -  0);
while (G__6133__i < G__6133__a.length) {G__6133__a[G__6133__i] = arguments[G__6133__i + 0]; ++G__6133__i;}
  args = new cljs.core.IndexedSeq(G__6133__a,0,null);
} 
return G__6132__delegate.call(this,args);};
G__6132.cljs$lang$maxFixedArity = 0;
G__6132.cljs$lang$applyTo = (function (arglist__6134){
var args = cljs.core.seq(arglist__6134);
return G__6132__delegate(args);
});
G__6132.cljs$core$IFn$_invoke$arity$variadic = G__6132__delegate;
return G__6132;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
