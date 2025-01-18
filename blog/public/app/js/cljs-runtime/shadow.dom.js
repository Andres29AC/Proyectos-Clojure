goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12312 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12312(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12317 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12317(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11699 = coll;
var G__11700 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11699,G__11700) : shadow.dom.lazy_native_coll_seq.call(null, G__11699,G__11700));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11724 = arguments.length;
switch (G__11724) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11726 = arguments.length;
switch (G__11726) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11732 = arguments.length;
switch (G__11732) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11734 = arguments.length;
switch (G__11734) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11739 = arguments.length;
switch (G__11739) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11745 = arguments.length;
switch (G__11745) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e11746){if((e11746 instanceof Object)){
var e = e11746;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11746;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11749 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11750 = null;
var count__11751 = (0);
var i__11752 = (0);
while(true){
if((i__11752 < count__11751)){
var el = chunk__11750.cljs$core$IIndexed$_nth$arity$2(null, i__11752);
var handler_12375__$1 = ((function (seq__11749,chunk__11750,count__11751,i__11752,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11749,chunk__11750,count__11751,i__11752,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12375__$1);


var G__12378 = seq__11749;
var G__12379 = chunk__11750;
var G__12380 = count__11751;
var G__12381 = (i__11752 + (1));
seq__11749 = G__12378;
chunk__11750 = G__12379;
count__11751 = G__12380;
i__11752 = G__12381;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11749);
if(temp__5804__auto__){
var seq__11749__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11749__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11749__$1);
var G__12384 = cljs.core.chunk_rest(seq__11749__$1);
var G__12385 = c__5525__auto__;
var G__12386 = cljs.core.count(c__5525__auto__);
var G__12387 = (0);
seq__11749 = G__12384;
chunk__11750 = G__12385;
count__11751 = G__12386;
i__11752 = G__12387;
continue;
} else {
var el = cljs.core.first(seq__11749__$1);
var handler_12389__$1 = ((function (seq__11749,chunk__11750,count__11751,i__11752,el,seq__11749__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11749,chunk__11750,count__11751,i__11752,el,seq__11749__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12389__$1);


var G__12390 = cljs.core.next(seq__11749__$1);
var G__12391 = null;
var G__12392 = (0);
var G__12393 = (0);
seq__11749 = G__12390;
chunk__11750 = G__12391;
count__11751 = G__12392;
i__11752 = G__12393;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11759 = arguments.length;
switch (G__11759) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11762 = cljs.core.seq(events);
var chunk__11763 = null;
var count__11764 = (0);
var i__11765 = (0);
while(true){
if((i__11765 < count__11764)){
var vec__11777 = chunk__11763.cljs$core$IIndexed$_nth$arity$2(null, i__11765);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11777,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11777,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12408 = seq__11762;
var G__12409 = chunk__11763;
var G__12410 = count__11764;
var G__12411 = (i__11765 + (1));
seq__11762 = G__12408;
chunk__11763 = G__12409;
count__11764 = G__12410;
i__11765 = G__12411;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11762);
if(temp__5804__auto__){
var seq__11762__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11762__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11762__$1);
var G__12418 = cljs.core.chunk_rest(seq__11762__$1);
var G__12419 = c__5525__auto__;
var G__12420 = cljs.core.count(c__5525__auto__);
var G__12421 = (0);
seq__11762 = G__12418;
chunk__11763 = G__12419;
count__11764 = G__12420;
i__11765 = G__12421;
continue;
} else {
var vec__11780 = cljs.core.first(seq__11762__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11780,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11780,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12425 = cljs.core.next(seq__11762__$1);
var G__12426 = null;
var G__12427 = (0);
var G__12428 = (0);
seq__11762 = G__12425;
chunk__11763 = G__12426;
count__11764 = G__12427;
i__11765 = G__12428;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11789 = cljs.core.seq(styles);
var chunk__11790 = null;
var count__11791 = (0);
var i__11792 = (0);
while(true){
if((i__11792 < count__11791)){
var vec__11813 = chunk__11790.cljs$core$IIndexed$_nth$arity$2(null, i__11792);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11813,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11813,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12432 = seq__11789;
var G__12433 = chunk__11790;
var G__12434 = count__11791;
var G__12435 = (i__11792 + (1));
seq__11789 = G__12432;
chunk__11790 = G__12433;
count__11791 = G__12434;
i__11792 = G__12435;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11789);
if(temp__5804__auto__){
var seq__11789__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11789__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11789__$1);
var G__12438 = cljs.core.chunk_rest(seq__11789__$1);
var G__12439 = c__5525__auto__;
var G__12440 = cljs.core.count(c__5525__auto__);
var G__12441 = (0);
seq__11789 = G__12438;
chunk__11790 = G__12439;
count__11791 = G__12440;
i__11792 = G__12441;
continue;
} else {
var vec__11828 = cljs.core.first(seq__11789__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11828,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11828,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12443 = cljs.core.next(seq__11789__$1);
var G__12444 = null;
var G__12445 = (0);
var G__12446 = (0);
seq__11789 = G__12443;
chunk__11790 = G__12444;
count__11791 = G__12445;
i__11792 = G__12446;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11837_12450 = key;
var G__11837_12451__$1 = (((G__11837_12450 instanceof cljs.core.Keyword))?G__11837_12450.fqn:null);
switch (G__11837_12451__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12469 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12469,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12469,"aria-");
}
})())){
el.setAttribute(ks_12469,value);
} else {
(el[ks_12469] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11848){
var map__11849 = p__11848;
var map__11849__$1 = cljs.core.__destructure_map(map__11849);
var props = map__11849__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11849__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11850 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11850,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11850,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11850,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11854 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11854,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11854;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11860 = arguments.length;
switch (G__11860) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11861){
var vec__11862 = p__11861;
var seq__11863 = cljs.core.seq(vec__11862);
var first__11864 = cljs.core.first(seq__11863);
var seq__11863__$1 = cljs.core.next(seq__11863);
var nn = first__11864;
var first__11864__$1 = cljs.core.first(seq__11863__$1);
var seq__11863__$2 = cljs.core.next(seq__11863__$1);
var np = first__11864__$1;
var nc = seq__11863__$2;
var node = vec__11862;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11865 = nn;
var G__11866 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11865,G__11866) : create_fn.call(null, G__11865,G__11866));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11867 = nn;
var G__11868 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11867,G__11868) : create_fn.call(null, G__11867,G__11868));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11870 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11870,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11870,(1),null);
var seq__11873_12512 = cljs.core.seq(node_children);
var chunk__11874_12513 = null;
var count__11875_12514 = (0);
var i__11876_12515 = (0);
while(true){
if((i__11876_12515 < count__11875_12514)){
var child_struct_12518 = chunk__11874_12513.cljs$core$IIndexed$_nth$arity$2(null, i__11876_12515);
var children_12519 = shadow.dom.dom_node(child_struct_12518);
if(cljs.core.seq_QMARK_(children_12519)){
var seq__11901_12520 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12519));
var chunk__11903_12521 = null;
var count__11904_12522 = (0);
var i__11905_12523 = (0);
while(true){
if((i__11905_12523 < count__11904_12522)){
var child_12527 = chunk__11903_12521.cljs$core$IIndexed$_nth$arity$2(null, i__11905_12523);
if(cljs.core.truth_(child_12527)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12527);


var G__12530 = seq__11901_12520;
var G__12531 = chunk__11903_12521;
var G__12532 = count__11904_12522;
var G__12533 = (i__11905_12523 + (1));
seq__11901_12520 = G__12530;
chunk__11903_12521 = G__12531;
count__11904_12522 = G__12532;
i__11905_12523 = G__12533;
continue;
} else {
var G__12535 = seq__11901_12520;
var G__12536 = chunk__11903_12521;
var G__12537 = count__11904_12522;
var G__12538 = (i__11905_12523 + (1));
seq__11901_12520 = G__12535;
chunk__11903_12521 = G__12536;
count__11904_12522 = G__12537;
i__11905_12523 = G__12538;
continue;
}
} else {
var temp__5804__auto___12539 = cljs.core.seq(seq__11901_12520);
if(temp__5804__auto___12539){
var seq__11901_12540__$1 = temp__5804__auto___12539;
if(cljs.core.chunked_seq_QMARK_(seq__11901_12540__$1)){
var c__5525__auto___12541 = cljs.core.chunk_first(seq__11901_12540__$1);
var G__12542 = cljs.core.chunk_rest(seq__11901_12540__$1);
var G__12543 = c__5525__auto___12541;
var G__12544 = cljs.core.count(c__5525__auto___12541);
var G__12545 = (0);
seq__11901_12520 = G__12542;
chunk__11903_12521 = G__12543;
count__11904_12522 = G__12544;
i__11905_12523 = G__12545;
continue;
} else {
var child_12546 = cljs.core.first(seq__11901_12540__$1);
if(cljs.core.truth_(child_12546)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12546);


var G__12549 = cljs.core.next(seq__11901_12540__$1);
var G__12550 = null;
var G__12551 = (0);
var G__12552 = (0);
seq__11901_12520 = G__12549;
chunk__11903_12521 = G__12550;
count__11904_12522 = G__12551;
i__11905_12523 = G__12552;
continue;
} else {
var G__12553 = cljs.core.next(seq__11901_12540__$1);
var G__12554 = null;
var G__12555 = (0);
var G__12556 = (0);
seq__11901_12520 = G__12553;
chunk__11903_12521 = G__12554;
count__11904_12522 = G__12555;
i__11905_12523 = G__12556;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12519);
}


var G__12557 = seq__11873_12512;
var G__12558 = chunk__11874_12513;
var G__12559 = count__11875_12514;
var G__12560 = (i__11876_12515 + (1));
seq__11873_12512 = G__12557;
chunk__11874_12513 = G__12558;
count__11875_12514 = G__12559;
i__11876_12515 = G__12560;
continue;
} else {
var temp__5804__auto___12563 = cljs.core.seq(seq__11873_12512);
if(temp__5804__auto___12563){
var seq__11873_12564__$1 = temp__5804__auto___12563;
if(cljs.core.chunked_seq_QMARK_(seq__11873_12564__$1)){
var c__5525__auto___12565 = cljs.core.chunk_first(seq__11873_12564__$1);
var G__12566 = cljs.core.chunk_rest(seq__11873_12564__$1);
var G__12567 = c__5525__auto___12565;
var G__12568 = cljs.core.count(c__5525__auto___12565);
var G__12569 = (0);
seq__11873_12512 = G__12566;
chunk__11874_12513 = G__12567;
count__11875_12514 = G__12568;
i__11876_12515 = G__12569;
continue;
} else {
var child_struct_12570 = cljs.core.first(seq__11873_12564__$1);
var children_12571 = shadow.dom.dom_node(child_struct_12570);
if(cljs.core.seq_QMARK_(children_12571)){
var seq__11919_12573 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12571));
var chunk__11921_12574 = null;
var count__11922_12575 = (0);
var i__11923_12576 = (0);
while(true){
if((i__11923_12576 < count__11922_12575)){
var child_12578 = chunk__11921_12574.cljs$core$IIndexed$_nth$arity$2(null, i__11923_12576);
if(cljs.core.truth_(child_12578)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12578);


var G__12581 = seq__11919_12573;
var G__12582 = chunk__11921_12574;
var G__12583 = count__11922_12575;
var G__12584 = (i__11923_12576 + (1));
seq__11919_12573 = G__12581;
chunk__11921_12574 = G__12582;
count__11922_12575 = G__12583;
i__11923_12576 = G__12584;
continue;
} else {
var G__12587 = seq__11919_12573;
var G__12588 = chunk__11921_12574;
var G__12589 = count__11922_12575;
var G__12590 = (i__11923_12576 + (1));
seq__11919_12573 = G__12587;
chunk__11921_12574 = G__12588;
count__11922_12575 = G__12589;
i__11923_12576 = G__12590;
continue;
}
} else {
var temp__5804__auto___12591__$1 = cljs.core.seq(seq__11919_12573);
if(temp__5804__auto___12591__$1){
var seq__11919_12594__$1 = temp__5804__auto___12591__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11919_12594__$1)){
var c__5525__auto___12596 = cljs.core.chunk_first(seq__11919_12594__$1);
var G__12597 = cljs.core.chunk_rest(seq__11919_12594__$1);
var G__12598 = c__5525__auto___12596;
var G__12599 = cljs.core.count(c__5525__auto___12596);
var G__12600 = (0);
seq__11919_12573 = G__12597;
chunk__11921_12574 = G__12598;
count__11922_12575 = G__12599;
i__11923_12576 = G__12600;
continue;
} else {
var child_12601 = cljs.core.first(seq__11919_12594__$1);
if(cljs.core.truth_(child_12601)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12601);


var G__12603 = cljs.core.next(seq__11919_12594__$1);
var G__12604 = null;
var G__12605 = (0);
var G__12606 = (0);
seq__11919_12573 = G__12603;
chunk__11921_12574 = G__12604;
count__11922_12575 = G__12605;
i__11923_12576 = G__12606;
continue;
} else {
var G__12609 = cljs.core.next(seq__11919_12594__$1);
var G__12610 = null;
var G__12611 = (0);
var G__12612 = (0);
seq__11919_12573 = G__12609;
chunk__11921_12574 = G__12610;
count__11922_12575 = G__12611;
i__11923_12576 = G__12612;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12571);
}


var G__12613 = cljs.core.next(seq__11873_12564__$1);
var G__12614 = null;
var G__12615 = (0);
var G__12616 = (0);
seq__11873_12512 = G__12613;
chunk__11874_12513 = G__12614;
count__11875_12514 = G__12615;
i__11876_12515 = G__12616;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__11934 = cljs.core.seq(node);
var chunk__11935 = null;
var count__11936 = (0);
var i__11937 = (0);
while(true){
if((i__11937 < count__11936)){
var n = chunk__11935.cljs$core$IIndexed$_nth$arity$2(null, i__11937);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12617 = seq__11934;
var G__12618 = chunk__11935;
var G__12619 = count__11936;
var G__12620 = (i__11937 + (1));
seq__11934 = G__12617;
chunk__11935 = G__12618;
count__11936 = G__12619;
i__11937 = G__12620;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11934);
if(temp__5804__auto__){
var seq__11934__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11934__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11934__$1);
var G__12623 = cljs.core.chunk_rest(seq__11934__$1);
var G__12624 = c__5525__auto__;
var G__12625 = cljs.core.count(c__5525__auto__);
var G__12626 = (0);
seq__11934 = G__12623;
chunk__11935 = G__12624;
count__11936 = G__12625;
i__11937 = G__12626;
continue;
} else {
var n = cljs.core.first(seq__11934__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12627 = cljs.core.next(seq__11934__$1);
var G__12628 = null;
var G__12629 = (0);
var G__12630 = (0);
seq__11934 = G__12627;
chunk__11935 = G__12628;
count__11936 = G__12629;
i__11937 = G__12630;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__11952 = arguments.length;
switch (G__11952) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__11956 = arguments.length;
switch (G__11956) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__11966 = arguments.length;
switch (G__11966) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12653 = arguments.length;
var i__5727__auto___12655 = (0);
while(true){
if((i__5727__auto___12655 < len__5726__auto___12653)){
args__5732__auto__.push((arguments[i__5727__auto___12655]));

var G__12657 = (i__5727__auto___12655 + (1));
i__5727__auto___12655 = G__12657;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__11971_12658 = cljs.core.seq(nodes);
var chunk__11972_12659 = null;
var count__11973_12660 = (0);
var i__11974_12661 = (0);
while(true){
if((i__11974_12661 < count__11973_12660)){
var node_12662 = chunk__11972_12659.cljs$core$IIndexed$_nth$arity$2(null, i__11974_12661);
fragment.appendChild(shadow.dom._to_dom(node_12662));


var G__12663 = seq__11971_12658;
var G__12664 = chunk__11972_12659;
var G__12665 = count__11973_12660;
var G__12666 = (i__11974_12661 + (1));
seq__11971_12658 = G__12663;
chunk__11972_12659 = G__12664;
count__11973_12660 = G__12665;
i__11974_12661 = G__12666;
continue;
} else {
var temp__5804__auto___12667 = cljs.core.seq(seq__11971_12658);
if(temp__5804__auto___12667){
var seq__11971_12668__$1 = temp__5804__auto___12667;
if(cljs.core.chunked_seq_QMARK_(seq__11971_12668__$1)){
var c__5525__auto___12669 = cljs.core.chunk_first(seq__11971_12668__$1);
var G__12670 = cljs.core.chunk_rest(seq__11971_12668__$1);
var G__12671 = c__5525__auto___12669;
var G__12672 = cljs.core.count(c__5525__auto___12669);
var G__12673 = (0);
seq__11971_12658 = G__12670;
chunk__11972_12659 = G__12671;
count__11973_12660 = G__12672;
i__11974_12661 = G__12673;
continue;
} else {
var node_12674 = cljs.core.first(seq__11971_12668__$1);
fragment.appendChild(shadow.dom._to_dom(node_12674));


var G__12675 = cljs.core.next(seq__11971_12668__$1);
var G__12676 = null;
var G__12677 = (0);
var G__12678 = (0);
seq__11971_12658 = G__12675;
chunk__11972_12659 = G__12676;
count__11973_12660 = G__12677;
i__11974_12661 = G__12678;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq11968){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11968));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__11983_12680 = cljs.core.seq(scripts);
var chunk__11984_12681 = null;
var count__11985_12682 = (0);
var i__11986_12683 = (0);
while(true){
if((i__11986_12683 < count__11985_12682)){
var vec__11997_12684 = chunk__11984_12681.cljs$core$IIndexed$_nth$arity$2(null, i__11986_12683);
var script_tag_12685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11997_12684,(0),null);
var script_body_12686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11997_12684,(1),null);
eval(script_body_12686);


var G__12687 = seq__11983_12680;
var G__12688 = chunk__11984_12681;
var G__12689 = count__11985_12682;
var G__12690 = (i__11986_12683 + (1));
seq__11983_12680 = G__12687;
chunk__11984_12681 = G__12688;
count__11985_12682 = G__12689;
i__11986_12683 = G__12690;
continue;
} else {
var temp__5804__auto___12692 = cljs.core.seq(seq__11983_12680);
if(temp__5804__auto___12692){
var seq__11983_12693__$1 = temp__5804__auto___12692;
if(cljs.core.chunked_seq_QMARK_(seq__11983_12693__$1)){
var c__5525__auto___12694 = cljs.core.chunk_first(seq__11983_12693__$1);
var G__12695 = cljs.core.chunk_rest(seq__11983_12693__$1);
var G__12696 = c__5525__auto___12694;
var G__12697 = cljs.core.count(c__5525__auto___12694);
var G__12698 = (0);
seq__11983_12680 = G__12695;
chunk__11984_12681 = G__12696;
count__11985_12682 = G__12697;
i__11986_12683 = G__12698;
continue;
} else {
var vec__12000_12699 = cljs.core.first(seq__11983_12693__$1);
var script_tag_12700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12000_12699,(0),null);
var script_body_12701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12000_12699,(1),null);
eval(script_body_12701);


var G__12703 = cljs.core.next(seq__11983_12693__$1);
var G__12704 = null;
var G__12705 = (0);
var G__12706 = (0);
seq__11983_12680 = G__12703;
chunk__11984_12681 = G__12704;
count__11985_12682 = G__12705;
i__11986_12683 = G__12706;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12005){
var vec__12006 = p__12005;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12006,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12006,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12017 = arguments.length;
switch (G__12017) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12030 = cljs.core.seq(style_keys);
var chunk__12031 = null;
var count__12032 = (0);
var i__12033 = (0);
while(true){
if((i__12033 < count__12032)){
var it = chunk__12031.cljs$core$IIndexed$_nth$arity$2(null, i__12033);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12723 = seq__12030;
var G__12724 = chunk__12031;
var G__12725 = count__12032;
var G__12726 = (i__12033 + (1));
seq__12030 = G__12723;
chunk__12031 = G__12724;
count__12032 = G__12725;
i__12033 = G__12726;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12030);
if(temp__5804__auto__){
var seq__12030__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12030__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12030__$1);
var G__12733 = cljs.core.chunk_rest(seq__12030__$1);
var G__12734 = c__5525__auto__;
var G__12735 = cljs.core.count(c__5525__auto__);
var G__12736 = (0);
seq__12030 = G__12733;
chunk__12031 = G__12734;
count__12032 = G__12735;
i__12033 = G__12736;
continue;
} else {
var it = cljs.core.first(seq__12030__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12739 = cljs.core.next(seq__12030__$1);
var G__12740 = null;
var G__12741 = (0);
var G__12742 = (0);
seq__12030 = G__12739;
chunk__12031 = G__12740;
count__12032 = G__12741;
i__12033 = G__12742;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12039,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12043 = k12039;
var G__12043__$1 = (((G__12043 instanceof cljs.core.Keyword))?G__12043.fqn:null);
switch (G__12043__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12039,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12044){
var vec__12045 = p__12044;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12045,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12045,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12038){
var self__ = this;
var G__12038__$1 = this;
return (new cljs.core.RecordIter((0),G__12038__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12040,other12041){
var self__ = this;
var this12040__$1 = this;
return (((!((other12041 == null)))) && ((((this12040__$1.constructor === other12041.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12040__$1.x,other12041.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12040__$1.y,other12041.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12040__$1.__extmap,other12041.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12039){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12048 = k12039;
var G__12048__$1 = (((G__12048 instanceof cljs.core.Keyword))?G__12048.fqn:null);
switch (G__12048__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12039);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12038){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12049 = cljs.core.keyword_identical_QMARK_;
var expr__12050 = k__5309__auto__;
if(cljs.core.truth_((pred__12049.cljs$core$IFn$_invoke$arity$2 ? pred__12049.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12050) : pred__12049.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__12050)))){
return (new shadow.dom.Coordinate(G__12038,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12049.cljs$core$IFn$_invoke$arity$2 ? pred__12049.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12050) : pred__12049.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__12050)))){
return (new shadow.dom.Coordinate(self__.x,G__12038,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12038),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12038){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12038,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12042){
var extmap__5342__auto__ = (function (){var G__12053 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12042,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12042)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12053);
} else {
return G__12053;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12042),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12042),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12058,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12066 = k12058;
var G__12066__$1 = (((G__12066 instanceof cljs.core.Keyword))?G__12066.fqn:null);
switch (G__12066__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12058,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12067){
var vec__12068 = p__12067;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12068,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12068,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12057){
var self__ = this;
var G__12057__$1 = this;
return (new cljs.core.RecordIter((0),G__12057__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12059,other12060){
var self__ = this;
var this12059__$1 = this;
return (((!((other12060 == null)))) && ((((this12059__$1.constructor === other12060.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12059__$1.w,other12060.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12059__$1.h,other12060.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12059__$1.__extmap,other12060.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12058){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12077 = k12058;
var G__12077__$1 = (((G__12077 instanceof cljs.core.Keyword))?G__12077.fqn:null);
switch (G__12077__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12058);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12057){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12078 = cljs.core.keyword_identical_QMARK_;
var expr__12079 = k__5309__auto__;
if(cljs.core.truth_((pred__12078.cljs$core$IFn$_invoke$arity$2 ? pred__12078.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12079) : pred__12078.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__12079)))){
return (new shadow.dom.Size(G__12057,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12078.cljs$core$IFn$_invoke$arity$2 ? pred__12078.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12079) : pred__12078.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__12079)))){
return (new shadow.dom.Size(self__.w,G__12057,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12057),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12057){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12057,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12061){
var extmap__5342__auto__ = (function (){var G__12091 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12061,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12061)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12091);
} else {
return G__12091;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12061),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12061),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__12778 = (i + (1));
var G__12779 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12778;
ret = G__12779;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12141){
var vec__12146 = p__12141;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12146,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12146,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12166 = arguments.length;
switch (G__12166) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__12785 = ps;
var G__12786 = (i + (1));
el__$1 = G__12785;
i = G__12786;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12203 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12203,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12203,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12203,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12207_12790 = cljs.core.seq(props);
var chunk__12208_12791 = null;
var count__12209_12792 = (0);
var i__12210_12793 = (0);
while(true){
if((i__12210_12793 < count__12209_12792)){
var vec__12219_12794 = chunk__12208_12791.cljs$core$IIndexed$_nth$arity$2(null, i__12210_12793);
var k_12795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12219_12794,(0),null);
var v_12796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12219_12794,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_12795);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12795),v_12796);


var G__12799 = seq__12207_12790;
var G__12800 = chunk__12208_12791;
var G__12801 = count__12209_12792;
var G__12802 = (i__12210_12793 + (1));
seq__12207_12790 = G__12799;
chunk__12208_12791 = G__12800;
count__12209_12792 = G__12801;
i__12210_12793 = G__12802;
continue;
} else {
var temp__5804__auto___12804 = cljs.core.seq(seq__12207_12790);
if(temp__5804__auto___12804){
var seq__12207_12805__$1 = temp__5804__auto___12804;
if(cljs.core.chunked_seq_QMARK_(seq__12207_12805__$1)){
var c__5525__auto___12807 = cljs.core.chunk_first(seq__12207_12805__$1);
var G__12808 = cljs.core.chunk_rest(seq__12207_12805__$1);
var G__12809 = c__5525__auto___12807;
var G__12810 = cljs.core.count(c__5525__auto___12807);
var G__12811 = (0);
seq__12207_12790 = G__12808;
chunk__12208_12791 = G__12809;
count__12209_12792 = G__12810;
i__12210_12793 = G__12811;
continue;
} else {
var vec__12226_12813 = cljs.core.first(seq__12207_12805__$1);
var k_12814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12226_12813,(0),null);
var v_12815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12226_12813,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_12814);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12814),v_12815);


var G__12816 = cljs.core.next(seq__12207_12805__$1);
var G__12817 = null;
var G__12818 = (0);
var G__12819 = (0);
seq__12207_12790 = G__12816;
chunk__12208_12791 = G__12817;
count__12209_12792 = G__12818;
i__12210_12793 = G__12819;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12238 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12238,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12238,(1),null);
var seq__12241_12821 = cljs.core.seq(node_children);
var chunk__12243_12822 = null;
var count__12244_12823 = (0);
var i__12245_12824 = (0);
while(true){
if((i__12245_12824 < count__12244_12823)){
var child_struct_12829 = chunk__12243_12822.cljs$core$IIndexed$_nth$arity$2(null, i__12245_12824);
if((!((child_struct_12829 == null)))){
if(typeof child_struct_12829 === 'string'){
var text_12830 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12830),child_struct_12829].join(''));
} else {
var children_12837 = shadow.dom.svg_node(child_struct_12829);
if(cljs.core.seq_QMARK_(children_12837)){
var seq__12269_12840 = cljs.core.seq(children_12837);
var chunk__12271_12841 = null;
var count__12272_12842 = (0);
var i__12273_12843 = (0);
while(true){
if((i__12273_12843 < count__12272_12842)){
var child_12845 = chunk__12271_12841.cljs$core$IIndexed$_nth$arity$2(null, i__12273_12843);
if(cljs.core.truth_(child_12845)){
node.appendChild(child_12845);


var G__12846 = seq__12269_12840;
var G__12847 = chunk__12271_12841;
var G__12848 = count__12272_12842;
var G__12849 = (i__12273_12843 + (1));
seq__12269_12840 = G__12846;
chunk__12271_12841 = G__12847;
count__12272_12842 = G__12848;
i__12273_12843 = G__12849;
continue;
} else {
var G__12850 = seq__12269_12840;
var G__12851 = chunk__12271_12841;
var G__12852 = count__12272_12842;
var G__12853 = (i__12273_12843 + (1));
seq__12269_12840 = G__12850;
chunk__12271_12841 = G__12851;
count__12272_12842 = G__12852;
i__12273_12843 = G__12853;
continue;
}
} else {
var temp__5804__auto___12854 = cljs.core.seq(seq__12269_12840);
if(temp__5804__auto___12854){
var seq__12269_12855__$1 = temp__5804__auto___12854;
if(cljs.core.chunked_seq_QMARK_(seq__12269_12855__$1)){
var c__5525__auto___12859 = cljs.core.chunk_first(seq__12269_12855__$1);
var G__12860 = cljs.core.chunk_rest(seq__12269_12855__$1);
var G__12861 = c__5525__auto___12859;
var G__12862 = cljs.core.count(c__5525__auto___12859);
var G__12863 = (0);
seq__12269_12840 = G__12860;
chunk__12271_12841 = G__12861;
count__12272_12842 = G__12862;
i__12273_12843 = G__12863;
continue;
} else {
var child_12864 = cljs.core.first(seq__12269_12855__$1);
if(cljs.core.truth_(child_12864)){
node.appendChild(child_12864);


var G__12866 = cljs.core.next(seq__12269_12855__$1);
var G__12867 = null;
var G__12868 = (0);
var G__12869 = (0);
seq__12269_12840 = G__12866;
chunk__12271_12841 = G__12867;
count__12272_12842 = G__12868;
i__12273_12843 = G__12869;
continue;
} else {
var G__12870 = cljs.core.next(seq__12269_12855__$1);
var G__12871 = null;
var G__12872 = (0);
var G__12873 = (0);
seq__12269_12840 = G__12870;
chunk__12271_12841 = G__12871;
count__12272_12842 = G__12872;
i__12273_12843 = G__12873;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12837);
}
}


var G__12875 = seq__12241_12821;
var G__12876 = chunk__12243_12822;
var G__12877 = count__12244_12823;
var G__12878 = (i__12245_12824 + (1));
seq__12241_12821 = G__12875;
chunk__12243_12822 = G__12876;
count__12244_12823 = G__12877;
i__12245_12824 = G__12878;
continue;
} else {
var G__12879 = seq__12241_12821;
var G__12880 = chunk__12243_12822;
var G__12881 = count__12244_12823;
var G__12882 = (i__12245_12824 + (1));
seq__12241_12821 = G__12879;
chunk__12243_12822 = G__12880;
count__12244_12823 = G__12881;
i__12245_12824 = G__12882;
continue;
}
} else {
var temp__5804__auto___12883 = cljs.core.seq(seq__12241_12821);
if(temp__5804__auto___12883){
var seq__12241_12884__$1 = temp__5804__auto___12883;
if(cljs.core.chunked_seq_QMARK_(seq__12241_12884__$1)){
var c__5525__auto___12885 = cljs.core.chunk_first(seq__12241_12884__$1);
var G__12887 = cljs.core.chunk_rest(seq__12241_12884__$1);
var G__12888 = c__5525__auto___12885;
var G__12889 = cljs.core.count(c__5525__auto___12885);
var G__12890 = (0);
seq__12241_12821 = G__12887;
chunk__12243_12822 = G__12888;
count__12244_12823 = G__12889;
i__12245_12824 = G__12890;
continue;
} else {
var child_struct_12891 = cljs.core.first(seq__12241_12884__$1);
if((!((child_struct_12891 == null)))){
if(typeof child_struct_12891 === 'string'){
var text_12893 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12893),child_struct_12891].join(''));
} else {
var children_12894 = shadow.dom.svg_node(child_struct_12891);
if(cljs.core.seq_QMARK_(children_12894)){
var seq__12278_12896 = cljs.core.seq(children_12894);
var chunk__12280_12897 = null;
var count__12281_12898 = (0);
var i__12282_12899 = (0);
while(true){
if((i__12282_12899 < count__12281_12898)){
var child_12900 = chunk__12280_12897.cljs$core$IIndexed$_nth$arity$2(null, i__12282_12899);
if(cljs.core.truth_(child_12900)){
node.appendChild(child_12900);


var G__12901 = seq__12278_12896;
var G__12902 = chunk__12280_12897;
var G__12903 = count__12281_12898;
var G__12904 = (i__12282_12899 + (1));
seq__12278_12896 = G__12901;
chunk__12280_12897 = G__12902;
count__12281_12898 = G__12903;
i__12282_12899 = G__12904;
continue;
} else {
var G__12905 = seq__12278_12896;
var G__12906 = chunk__12280_12897;
var G__12907 = count__12281_12898;
var G__12908 = (i__12282_12899 + (1));
seq__12278_12896 = G__12905;
chunk__12280_12897 = G__12906;
count__12281_12898 = G__12907;
i__12282_12899 = G__12908;
continue;
}
} else {
var temp__5804__auto___12909__$1 = cljs.core.seq(seq__12278_12896);
if(temp__5804__auto___12909__$1){
var seq__12278_12910__$1 = temp__5804__auto___12909__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12278_12910__$1)){
var c__5525__auto___12911 = cljs.core.chunk_first(seq__12278_12910__$1);
var G__12912 = cljs.core.chunk_rest(seq__12278_12910__$1);
var G__12913 = c__5525__auto___12911;
var G__12914 = cljs.core.count(c__5525__auto___12911);
var G__12915 = (0);
seq__12278_12896 = G__12912;
chunk__12280_12897 = G__12913;
count__12281_12898 = G__12914;
i__12282_12899 = G__12915;
continue;
} else {
var child_12916 = cljs.core.first(seq__12278_12910__$1);
if(cljs.core.truth_(child_12916)){
node.appendChild(child_12916);


var G__12917 = cljs.core.next(seq__12278_12910__$1);
var G__12918 = null;
var G__12919 = (0);
var G__12920 = (0);
seq__12278_12896 = G__12917;
chunk__12280_12897 = G__12918;
count__12281_12898 = G__12919;
i__12282_12899 = G__12920;
continue;
} else {
var G__12922 = cljs.core.next(seq__12278_12910__$1);
var G__12923 = null;
var G__12924 = (0);
var G__12925 = (0);
seq__12278_12896 = G__12922;
chunk__12280_12897 = G__12923;
count__12281_12898 = G__12924;
i__12282_12899 = G__12925;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12894);
}
}


var G__12927 = cljs.core.next(seq__12241_12884__$1);
var G__12928 = null;
var G__12929 = (0);
var G__12930 = (0);
seq__12241_12821 = G__12927;
chunk__12243_12822 = G__12928;
count__12244_12823 = G__12929;
i__12245_12824 = G__12930;
continue;
} else {
var G__12931 = cljs.core.next(seq__12241_12884__$1);
var G__12932 = null;
var G__12933 = (0);
var G__12934 = (0);
seq__12241_12821 = G__12931;
chunk__12243_12822 = G__12932;
count__12244_12823 = G__12933;
i__12245_12824 = G__12934;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12946 = arguments.length;
var i__5727__auto___12947 = (0);
while(true){
if((i__5727__auto___12947 < len__5726__auto___12946)){
args__5732__auto__.push((arguments[i__5727__auto___12947]));

var G__12949 = (i__5727__auto___12947 + (1));
i__5727__auto___12947 = G__12949;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12294){
var G__12295 = cljs.core.first(seq12294);
var seq12294__$1 = cljs.core.next(seq12294);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12295,seq12294__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
