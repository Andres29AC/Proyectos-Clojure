goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18823){
var map__18824 = p__18823;
var map__18824__$1 = cljs.core.__destructure_map(map__18824);
var m = map__18824__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18824__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18824__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18828_19537 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18829_19538 = null;
var count__18830_19539 = (0);
var i__18831_19540 = (0);
while(true){
if((i__18831_19540 < count__18830_19539)){
var f_19541 = chunk__18829_19538.cljs$core$IIndexed$_nth$arity$2(null, i__18831_19540);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19541], 0));


var G__19542 = seq__18828_19537;
var G__19543 = chunk__18829_19538;
var G__19544 = count__18830_19539;
var G__19545 = (i__18831_19540 + (1));
seq__18828_19537 = G__19542;
chunk__18829_19538 = G__19543;
count__18830_19539 = G__19544;
i__18831_19540 = G__19545;
continue;
} else {
var temp__5804__auto___19546 = cljs.core.seq(seq__18828_19537);
if(temp__5804__auto___19546){
var seq__18828_19547__$1 = temp__5804__auto___19546;
if(cljs.core.chunked_seq_QMARK_(seq__18828_19547__$1)){
var c__5525__auto___19548 = cljs.core.chunk_first(seq__18828_19547__$1);
var G__19549 = cljs.core.chunk_rest(seq__18828_19547__$1);
var G__19550 = c__5525__auto___19548;
var G__19551 = cljs.core.count(c__5525__auto___19548);
var G__19552 = (0);
seq__18828_19537 = G__19549;
chunk__18829_19538 = G__19550;
count__18830_19539 = G__19551;
i__18831_19540 = G__19552;
continue;
} else {
var f_19553 = cljs.core.first(seq__18828_19547__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19553], 0));


var G__19554 = cljs.core.next(seq__18828_19547__$1);
var G__19555 = null;
var G__19556 = (0);
var G__19557 = (0);
seq__18828_19537 = G__19554;
chunk__18829_19538 = G__19555;
count__18830_19539 = G__19556;
i__18831_19540 = G__19557;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19561 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19561], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19561)))?cljs.core.second(arglists_19561):arglists_19561)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18957_19565 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18958_19566 = null;
var count__18959_19567 = (0);
var i__18960_19568 = (0);
while(true){
if((i__18960_19568 < count__18959_19567)){
var vec__19097_19569 = chunk__18958_19566.cljs$core$IIndexed$_nth$arity$2(null, i__18960_19568);
var name_19570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19097_19569,(0),null);
var map__19100_19571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19097_19569,(1),null);
var map__19100_19572__$1 = cljs.core.__destructure_map(map__19100_19571);
var doc_19573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19100_19572__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19100_19572__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19570], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19574], 0));

if(cljs.core.truth_(doc_19573)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19573], 0));
} else {
}


var G__19575 = seq__18957_19565;
var G__19576 = chunk__18958_19566;
var G__19577 = count__18959_19567;
var G__19578 = (i__18960_19568 + (1));
seq__18957_19565 = G__19575;
chunk__18958_19566 = G__19576;
count__18959_19567 = G__19577;
i__18960_19568 = G__19578;
continue;
} else {
var temp__5804__auto___19581 = cljs.core.seq(seq__18957_19565);
if(temp__5804__auto___19581){
var seq__18957_19582__$1 = temp__5804__auto___19581;
if(cljs.core.chunked_seq_QMARK_(seq__18957_19582__$1)){
var c__5525__auto___19583 = cljs.core.chunk_first(seq__18957_19582__$1);
var G__19584 = cljs.core.chunk_rest(seq__18957_19582__$1);
var G__19585 = c__5525__auto___19583;
var G__19586 = cljs.core.count(c__5525__auto___19583);
var G__19587 = (0);
seq__18957_19565 = G__19584;
chunk__18958_19566 = G__19585;
count__18959_19567 = G__19586;
i__18960_19568 = G__19587;
continue;
} else {
var vec__19102_19589 = cljs.core.first(seq__18957_19582__$1);
var name_19590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19102_19589,(0),null);
var map__19105_19591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19102_19589,(1),null);
var map__19105_19592__$1 = cljs.core.__destructure_map(map__19105_19591);
var doc_19593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19105_19592__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19105_19592__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19590], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19594], 0));

if(cljs.core.truth_(doc_19593)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19593], 0));
} else {
}


var G__19595 = cljs.core.next(seq__18957_19582__$1);
var G__19596 = null;
var G__19597 = (0);
var G__19598 = (0);
seq__18957_19565 = G__19595;
chunk__18958_19566 = G__19596;
count__18959_19567 = G__19597;
i__18960_19568 = G__19598;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19123 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19124 = null;
var count__19125 = (0);
var i__19126 = (0);
while(true){
if((i__19126 < count__19125)){
var role = chunk__19124.cljs$core$IIndexed$_nth$arity$2(null, i__19126);
var temp__5804__auto___19599__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19599__$1)){
var spec_19600 = temp__5804__auto___19599__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19600)], 0));
} else {
}


var G__19601 = seq__19123;
var G__19602 = chunk__19124;
var G__19603 = count__19125;
var G__19604 = (i__19126 + (1));
seq__19123 = G__19601;
chunk__19124 = G__19602;
count__19125 = G__19603;
i__19126 = G__19604;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19123);
if(temp__5804__auto____$1){
var seq__19123__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19123__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19123__$1);
var G__19607 = cljs.core.chunk_rest(seq__19123__$1);
var G__19608 = c__5525__auto__;
var G__19609 = cljs.core.count(c__5525__auto__);
var G__19610 = (0);
seq__19123 = G__19607;
chunk__19124 = G__19608;
count__19125 = G__19609;
i__19126 = G__19610;
continue;
} else {
var role = cljs.core.first(seq__19123__$1);
var temp__5804__auto___19612__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19612__$2)){
var spec_19613 = temp__5804__auto___19612__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19613)], 0));
} else {
}


var G__19614 = cljs.core.next(seq__19123__$1);
var G__19615 = null;
var G__19616 = (0);
var G__19617 = (0);
seq__19123 = G__19614;
chunk__19124 = G__19615;
count__19125 = G__19616;
i__19126 = G__19617;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19325 = datafied_throwable;
var map__19325__$1 = cljs.core.__destructure_map(map__19325);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19325__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19325__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19325__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19326 = cljs.core.last(via);
var map__19326__$1 = cljs.core.__destructure_map(map__19326);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19326__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19326__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19326__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19327 = data;
var map__19327__$1 = cljs.core.__destructure_map(map__19327);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19327__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19327__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19327__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19328 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19328__$1 = cljs.core.__destructure_map(map__19328);
var top_data = map__19328__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19328__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19329 = phase;
var G__19329__$1 = (((G__19329 instanceof cljs.core.Keyword))?G__19329.fqn:null);
switch (G__19329__$1) {
case "read-source":
var map__19330 = data;
var map__19330__$1 = cljs.core.__destructure_map(map__19330);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19330__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19330__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19331 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19331__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19331,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19331);
var G__19331__$2 = (cljs.core.truth_((function (){var fexpr__19332 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19332.cljs$core$IFn$_invoke$arity$1 ? fexpr__19332.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19332.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19331__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19331__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19331__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19331__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19333 = top_data;
var G__19333__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19333,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19333);
var G__19333__$2 = (cljs.core.truth_((function (){var fexpr__19335 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19335.cljs$core$IFn$_invoke$arity$1 ? fexpr__19335.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19335.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19333__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19333__$1);
var G__19333__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19333__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19333__$2);
var G__19333__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19333__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19333__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19333__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19333__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19337 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19337,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19337,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19337,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19337,(3),null);
var G__19340 = top_data;
var G__19340__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19340,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19340);
var G__19340__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19340__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19340__$1);
var G__19340__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19340__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19340__$2);
var G__19340__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19340__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19340__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19340__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19340__$4;
}

break;
case "execution":
var vec__19344 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19344,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19344,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19344,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19344,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19324_SHARP_){
var or__5002__auto__ = (p1__19324_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19352 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19352.cljs$core$IFn$_invoke$arity$1 ? fexpr__19352.cljs$core$IFn$_invoke$arity$1(p1__19324_SHARP_) : fexpr__19352.call(null, p1__19324_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19380 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19380__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19380,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19380);
var G__19380__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19380__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19380__$1);
var G__19380__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19380__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19380__$2);
var G__19380__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19380__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19380__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19380__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19380__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19329__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19469){
var map__19470 = p__19469;
var map__19470__$1 = cljs.core.__destructure_map(map__19470);
var triage_data = map__19470__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19470__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19470__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19470__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19470__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19470__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19470__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19470__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19470__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19472 = phase;
var G__19472__$1 = (((G__19472 instanceof cljs.core.Keyword))?G__19472.fqn:null);
switch (G__19472__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19473 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19474 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19475 = loc;
var G__19476 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19477_19636 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19478_19637 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19479_19638 = true;
var _STAR_print_fn_STAR__temp_val__19480_19639 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19479_19638);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19480_19639);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19462_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19462_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19478_19637);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19477_19636);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19473,G__19474,G__19475,G__19476) : format.call(null, G__19473,G__19474,G__19475,G__19476));

break;
case "macroexpansion":
var G__19482 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19483 = cause_type;
var G__19484 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19485 = loc;
var G__19486 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19482,G__19483,G__19484,G__19485,G__19486) : format.call(null, G__19482,G__19483,G__19484,G__19485,G__19486));

break;
case "compile-syntax-check":
var G__19487 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19488 = cause_type;
var G__19489 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19490 = loc;
var G__19491 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19487,G__19488,G__19489,G__19490,G__19491) : format.call(null, G__19487,G__19488,G__19489,G__19490,G__19491));

break;
case "compilation":
var G__19492 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19493 = cause_type;
var G__19494 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19495 = loc;
var G__19496 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19492,G__19493,G__19494,G__19495,G__19496) : format.call(null, G__19492,G__19493,G__19494,G__19495,G__19496));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19497 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19498 = symbol;
var G__19499 = loc;
var G__19500 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19501_19650 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19502_19651 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19503_19652 = true;
var _STAR_print_fn_STAR__temp_val__19504_19653 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19503_19652);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19504_19653);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19468_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19468_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19502_19651);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19501_19650);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19497,G__19498,G__19499,G__19500) : format.call(null, G__19497,G__19498,G__19499,G__19500));
} else {
var G__19532 = "Execution error%s at %s(%s).\n%s\n";
var G__19533 = cause_type;
var G__19534 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19535 = loc;
var G__19536 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19532,G__19533,G__19534,G__19535,G__19536) : format.call(null, G__19532,G__19533,G__19534,G__19535,G__19536));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19472__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
