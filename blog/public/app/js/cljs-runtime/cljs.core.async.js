goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14685 = (function (f,blockable,meta14686){
this.f = f;
this.blockable = blockable;
this.meta14686 = meta14686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14687,meta14686__$1){
var self__ = this;
var _14687__$1 = this;
return (new cljs.core.async.t_cljs$core$async14685(self__.f,self__.blockable,meta14686__$1));
}));

(cljs.core.async.t_cljs$core$async14685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14687){
var self__ = this;
var _14687__$1 = this;
return self__.meta14686;
}));

(cljs.core.async.t_cljs$core$async14685.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14685.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14685.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14685.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14686","meta14686",1634445094,null)], null);
}));

(cljs.core.async.t_cljs$core$async14685.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14685");

(cljs.core.async.t_cljs$core$async14685.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14685");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14685.
 */
cljs.core.async.__GT_t_cljs$core$async14685 = (function cljs$core$async$__GT_t_cljs$core$async14685(f,blockable,meta14686){
return (new cljs.core.async.t_cljs$core$async14685(f,blockable,meta14686));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14684 = arguments.length;
switch (G__14684) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14685(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14690 = arguments.length;
switch (G__14690) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14692 = arguments.length;
switch (G__14692) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14702 = arguments.length;
switch (G__14702) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17464 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17464) : fn1.call(null, val_17464));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17464) : fn1.call(null, val_17464));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14711 = arguments.length;
switch (G__14711) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___17467 = n;
var x_17468 = (0);
while(true){
if((x_17468 < n__5593__auto___17467)){
(a[x_17468] = x_17468);

var G__17469 = (x_17468 + (1));
x_17468 = G__17469;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14728 = (function (flag,meta14729){
this.flag = flag;
this.meta14729 = meta14729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14730,meta14729__$1){
var self__ = this;
var _14730__$1 = this;
return (new cljs.core.async.t_cljs$core$async14728(self__.flag,meta14729__$1));
}));

(cljs.core.async.t_cljs$core$async14728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14730){
var self__ = this;
var _14730__$1 = this;
return self__.meta14729;
}));

(cljs.core.async.t_cljs$core$async14728.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14728.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14728.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14728.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14728.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14729","meta14729",-220901388,null)], null);
}));

(cljs.core.async.t_cljs$core$async14728.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14728");

(cljs.core.async.t_cljs$core$async14728.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14728");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14728.
 */
cljs.core.async.__GT_t_cljs$core$async14728 = (function cljs$core$async$__GT_t_cljs$core$async14728(flag,meta14729){
return (new cljs.core.async.t_cljs$core$async14728(flag,meta14729));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14728(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14733 = (function (flag,cb,meta14734){
this.flag = flag;
this.cb = cb;
this.meta14734 = meta14734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14735,meta14734__$1){
var self__ = this;
var _14735__$1 = this;
return (new cljs.core.async.t_cljs$core$async14733(self__.flag,self__.cb,meta14734__$1));
}));

(cljs.core.async.t_cljs$core$async14733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14735){
var self__ = this;
var _14735__$1 = this;
return self__.meta14734;
}));

(cljs.core.async.t_cljs$core$async14733.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14733.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14733.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14733.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14733.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14734","meta14734",399996709,null)], null);
}));

(cljs.core.async.t_cljs$core$async14733.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14733.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14733");

(cljs.core.async.t_cljs$core$async14733.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14733");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14733.
 */
cljs.core.async.__GT_t_cljs$core$async14733 = (function cljs$core$async$__GT_t_cljs$core$async14733(flag,cb,meta14734){
return (new cljs.core.async.t_cljs$core$async14733(flag,cb,meta14734));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14733(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14736_SHARP_){
var G__14748 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14736_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14748) : fret.call(null, G__14748));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14737_SHARP_){
var G__14749 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14737_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14749) : fret.call(null, G__14749));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17470 = (i + (1));
i = G__17470;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17473 = arguments.length;
var i__5727__auto___17474 = (0);
while(true){
if((i__5727__auto___17474 < len__5726__auto___17473)){
args__5732__auto__.push((arguments[i__5727__auto___17474]));

var G__17475 = (i__5727__auto___17474 + (1));
i__5727__auto___17474 = G__17475;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14758){
var map__14759 = p__14758;
var map__14759__$1 = cljs.core.__destructure_map(map__14759);
var opts = map__14759__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14756){
var G__14757 = cljs.core.first(seq14756);
var seq14756__$1 = cljs.core.next(seq14756);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14757,seq14756__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14763 = arguments.length;
switch (G__14763) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14595__auto___17488 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14596__auto__ = (function (){var switch__14376__auto__ = (function (state_14801){
var state_val_14802 = (state_14801[(1)]);
if((state_val_14802 === (7))){
var inst_14797 = (state_14801[(2)]);
var state_14801__$1 = state_14801;
var statearr_14804_17489 = state_14801__$1;
(statearr_14804_17489[(2)] = inst_14797);

(statearr_14804_17489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14802 === (1))){
var state_14801__$1 = state_14801;
var statearr_14805_17492 = state_14801__$1;
(statearr_14805_17492[(2)] = null);

(statearr_14805_17492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14802 === (4))){
var inst_14776 = (state_14801[(7)]);
var inst_14776__$1 = (state_14801[(2)]);
var inst_14777 = (inst_14776__$1 == null);
var state_14801__$1 = (function (){var statearr_14806 = state_14801;
(statearr_14806[(7)] = inst_14776__$1);

return statearr_14806;
})();
if(cljs.core.truth_(inst_14777)){
var statearr_14807_17494 = state_14801__$1;
(statearr_14807_17494[(1)] = (5));

} else {
var statearr_14808_17495 = state_14801__$1;
(statearr_14808_17495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14802 === (13))){
var state_14801__$1 = state_14801;
var statearr_14809_17496 = state_14801__$1;
(statearr_14809_17496[(2)] = null);

(statearr_14809_17496[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14802 === (6))){
var inst_14776 = (state_14801[(7)]);
var state_14801__$1 = state_14801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14801__$1,(11),to,inst_14776);
} else {
if((state_val_14802 === (3))){
var inst_14799 = (state_14801[(2)]);
var state_14801__$1 = state_14801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14801__$1,inst_14799);
} else {
if((state_val_14802 === (12))){
var state_14801__$1 = state_14801;
var statearr_14810_17498 = state_14801__$1;
(statearr_14810_17498[(2)] = null);

(statearr_14810_17498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14802 === (2))){
var state_14801__$1 = state_14801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14801__$1,(4),from);
} else {
if((state_val_14802 === (11))){
var inst_14786 = (state_14801[(2)]);
var state_14801__$1 = state_14801;
if(cljs.core.truth_(inst_14786)){
var statearr_14811_17499 = state_14801__$1;
(statearr_14811_17499[(1)] = (12));

} else {
var statearr_14816_17500 = state_14801__$1;
(statearr_14816_17500[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14802 === (9))){
var state_14801__$1 = state_14801;
var statearr_14817_17501 = state_14801__$1;
(statearr_14817_17501[(2)] = null);

(statearr_14817_17501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14802 === (5))){
var state_14801__$1 = state_14801;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14818_17503 = state_14801__$1;
(statearr_14818_17503[(1)] = (8));

} else {
var statearr_14819_17504 = state_14801__$1;
(statearr_14819_17504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14802 === (14))){
var inst_14791 = (state_14801[(2)]);
var state_14801__$1 = state_14801;
var statearr_14820_17506 = state_14801__$1;
(statearr_14820_17506[(2)] = inst_14791);

(statearr_14820_17506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14802 === (10))){
var inst_14783 = (state_14801[(2)]);
var state_14801__$1 = state_14801;
var statearr_14821_17507 = state_14801__$1;
(statearr_14821_17507[(2)] = inst_14783);

(statearr_14821_17507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14802 === (8))){
var inst_14780 = cljs.core.async.close_BANG_(to);
var state_14801__$1 = state_14801;
var statearr_14822_17508 = state_14801__$1;
(statearr_14822_17508[(2)] = inst_14780);

(statearr_14822_17508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14377__auto__ = null;
var cljs$core$async$state_machine__14377__auto____0 = (function (){
var statearr_14823 = [null,null,null,null,null,null,null,null];
(statearr_14823[(0)] = cljs$core$async$state_machine__14377__auto__);

(statearr_14823[(1)] = (1));

return statearr_14823;
});
var cljs$core$async$state_machine__14377__auto____1 = (function (state_14801){
while(true){
var ret_value__14378__auto__ = (function (){try{while(true){
var result__14379__auto__ = switch__14376__auto__(state_14801);
if(cljs.core.keyword_identical_QMARK_(result__14379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14379__auto__;
}
break;
}
}catch (e14824){var ex__14380__auto__ = e14824;
var statearr_14825_17509 = state_14801;
(statearr_14825_17509[(2)] = ex__14380__auto__);


if(cljs.core.seq((state_14801[(4)]))){
var statearr_14826_17510 = state_14801;
(statearr_14826_17510[(1)] = cljs.core.first((state_14801[(4)])));

} else {
throw ex__14380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17512 = state_14801;
state_14801 = G__17512;
continue;
} else {
return ret_value__14378__auto__;
}
break;
}
});
cljs$core$async$state_machine__14377__auto__ = function(state_14801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14377__auto____1.call(this,state_14801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14377__auto____0;
cljs$core$async$state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14377__auto____1;
return cljs$core$async$state_machine__14377__auto__;
})()
})();
var state__14598__auto__ = (function (){var statearr_14830 = f__14596__auto__();
(statearr_14830[(6)] = c__14595__auto___17488);

return statearr_14830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14598__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14833){
var vec__14846 = p__14833;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14846,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14846,(1),null);
var job = vec__14846;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14595__auto___17515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14596__auto__ = (function (){var switch__14376__auto__ = (function (state_14853){
var state_val_14854 = (state_14853[(1)]);
if((state_val_14854 === (1))){
var state_14853__$1 = state_14853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14853__$1,(2),res,v);
} else {
if((state_val_14854 === (2))){
var inst_14850 = (state_14853[(2)]);
var inst_14851 = cljs.core.async.close_BANG_(res);
var state_14853__$1 = (function (){var statearr_14856 = state_14853;
(statearr_14856[(7)] = inst_14850);

return statearr_14856;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14853__$1,inst_14851);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____0 = (function (){
var statearr_14857 = [null,null,null,null,null,null,null,null];
(statearr_14857[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__);

(statearr_14857[(1)] = (1));

return statearr_14857;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____1 = (function (state_14853){
while(true){
var ret_value__14378__auto__ = (function (){try{while(true){
var result__14379__auto__ = switch__14376__auto__(state_14853);
if(cljs.core.keyword_identical_QMARK_(result__14379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14379__auto__;
}
break;
}
}catch (e14858){var ex__14380__auto__ = e14858;
var statearr_14859_17517 = state_14853;
(statearr_14859_17517[(2)] = ex__14380__auto__);


if(cljs.core.seq((state_14853[(4)]))){
var statearr_14860_17518 = state_14853;
(statearr_14860_17518[(1)] = cljs.core.first((state_14853[(4)])));

} else {
throw ex__14380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17519 = state_14853;
state_14853 = G__17519;
continue;
} else {
return ret_value__14378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__ = function(state_14853){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____1.call(this,state_14853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__;
})()
})();
var state__14598__auto__ = (function (){var statearr_14862 = f__14596__auto__();
(statearr_14862[(6)] = c__14595__auto___17515);

return statearr_14862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14598__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14865){
var vec__14867 = p__14865;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14867,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14867,(1),null);
var job = vec__14867;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___17522 = n;
var __17523 = (0);
while(true){
if((__17523 < n__5593__auto___17522)){
var G__14870_17524 = type;
var G__14870_17525__$1 = (((G__14870_17524 instanceof cljs.core.Keyword))?G__14870_17524.fqn:null);
switch (G__14870_17525__$1) {
case "compute":
var c__14595__auto___17527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17523,c__14595__auto___17527,G__14870_17524,G__14870_17525__$1,n__5593__auto___17522,jobs,results,process__$1,async){
return (function (){
var f__14596__auto__ = (function (){var switch__14376__auto__ = ((function (__17523,c__14595__auto___17527,G__14870_17524,G__14870_17525__$1,n__5593__auto___17522,jobs,results,process__$1,async){
return (function (state_14883){
var state_val_14884 = (state_14883[(1)]);
if((state_val_14884 === (1))){
var state_14883__$1 = state_14883;
var statearr_14885_17528 = state_14883__$1;
(statearr_14885_17528[(2)] = null);

(statearr_14885_17528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14884 === (2))){
var state_14883__$1 = state_14883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14883__$1,(4),jobs);
} else {
if((state_val_14884 === (3))){
var inst_14881 = (state_14883[(2)]);
var state_14883__$1 = state_14883;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14883__$1,inst_14881);
} else {
if((state_val_14884 === (4))){
var inst_14873 = (state_14883[(2)]);
var inst_14874 = process__$1(inst_14873);
var state_14883__$1 = state_14883;
if(cljs.core.truth_(inst_14874)){
var statearr_14886_17531 = state_14883__$1;
(statearr_14886_17531[(1)] = (5));

} else {
var statearr_14887_17532 = state_14883__$1;
(statearr_14887_17532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14884 === (5))){
var state_14883__$1 = state_14883;
var statearr_14888_17533 = state_14883__$1;
(statearr_14888_17533[(2)] = null);

(statearr_14888_17533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14884 === (6))){
var state_14883__$1 = state_14883;
var statearr_14889_17534 = state_14883__$1;
(statearr_14889_17534[(2)] = null);

(statearr_14889_17534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14884 === (7))){
var inst_14879 = (state_14883[(2)]);
var state_14883__$1 = state_14883;
var statearr_14890_17535 = state_14883__$1;
(statearr_14890_17535[(2)] = inst_14879);

(statearr_14890_17535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17523,c__14595__auto___17527,G__14870_17524,G__14870_17525__$1,n__5593__auto___17522,jobs,results,process__$1,async))
;
return ((function (__17523,switch__14376__auto__,c__14595__auto___17527,G__14870_17524,G__14870_17525__$1,n__5593__auto___17522,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____0 = (function (){
var statearr_14891 = [null,null,null,null,null,null,null];
(statearr_14891[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__);

(statearr_14891[(1)] = (1));

return statearr_14891;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____1 = (function (state_14883){
while(true){
var ret_value__14378__auto__ = (function (){try{while(true){
var result__14379__auto__ = switch__14376__auto__(state_14883);
if(cljs.core.keyword_identical_QMARK_(result__14379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14379__auto__;
}
break;
}
}catch (e14892){var ex__14380__auto__ = e14892;
var statearr_14893_17536 = state_14883;
(statearr_14893_17536[(2)] = ex__14380__auto__);


if(cljs.core.seq((state_14883[(4)]))){
var statearr_14894_17537 = state_14883;
(statearr_14894_17537[(1)] = cljs.core.first((state_14883[(4)])));

} else {
throw ex__14380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17538 = state_14883;
state_14883 = G__17538;
continue;
} else {
return ret_value__14378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__ = function(state_14883){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____1.call(this,state_14883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__;
})()
;})(__17523,switch__14376__auto__,c__14595__auto___17527,G__14870_17524,G__14870_17525__$1,n__5593__auto___17522,jobs,results,process__$1,async))
})();
var state__14598__auto__ = (function (){var statearr_14896 = f__14596__auto__();
(statearr_14896[(6)] = c__14595__auto___17527);

return statearr_14896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14598__auto__);
});})(__17523,c__14595__auto___17527,G__14870_17524,G__14870_17525__$1,n__5593__auto___17522,jobs,results,process__$1,async))
);


break;
case "async":
var c__14595__auto___17539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17523,c__14595__auto___17539,G__14870_17524,G__14870_17525__$1,n__5593__auto___17522,jobs,results,process__$1,async){
return (function (){
var f__14596__auto__ = (function (){var switch__14376__auto__ = ((function (__17523,c__14595__auto___17539,G__14870_17524,G__14870_17525__$1,n__5593__auto___17522,jobs,results,process__$1,async){
return (function (state_14910){
var state_val_14911 = (state_14910[(1)]);
if((state_val_14911 === (1))){
var state_14910__$1 = state_14910;
var statearr_14912_17540 = state_14910__$1;
(statearr_14912_17540[(2)] = null);

(statearr_14912_17540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (2))){
var state_14910__$1 = state_14910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14910__$1,(4),jobs);
} else {
if((state_val_14911 === (3))){
var inst_14907 = (state_14910[(2)]);
var state_14910__$1 = state_14910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14910__$1,inst_14907);
} else {
if((state_val_14911 === (4))){
var inst_14899 = (state_14910[(2)]);
var inst_14900 = async(inst_14899);
var state_14910__$1 = state_14910;
if(cljs.core.truth_(inst_14900)){
var statearr_14913_17545 = state_14910__$1;
(statearr_14913_17545[(1)] = (5));

} else {
var statearr_14914_17546 = state_14910__$1;
(statearr_14914_17546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (5))){
var state_14910__$1 = state_14910;
var statearr_14917_17547 = state_14910__$1;
(statearr_14917_17547[(2)] = null);

(statearr_14917_17547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (6))){
var state_14910__$1 = state_14910;
var statearr_14919_17548 = state_14910__$1;
(statearr_14919_17548[(2)] = null);

(statearr_14919_17548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (7))){
var inst_14905 = (state_14910[(2)]);
var state_14910__$1 = state_14910;
var statearr_14923_17549 = state_14910__$1;
(statearr_14923_17549[(2)] = inst_14905);

(statearr_14923_17549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17523,c__14595__auto___17539,G__14870_17524,G__14870_17525__$1,n__5593__auto___17522,jobs,results,process__$1,async))
;
return ((function (__17523,switch__14376__auto__,c__14595__auto___17539,G__14870_17524,G__14870_17525__$1,n__5593__auto___17522,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____0 = (function (){
var statearr_14924 = [null,null,null,null,null,null,null];
(statearr_14924[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__);

(statearr_14924[(1)] = (1));

return statearr_14924;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____1 = (function (state_14910){
while(true){
var ret_value__14378__auto__ = (function (){try{while(true){
var result__14379__auto__ = switch__14376__auto__(state_14910);
if(cljs.core.keyword_identical_QMARK_(result__14379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14379__auto__;
}
break;
}
}catch (e14925){var ex__14380__auto__ = e14925;
var statearr_14926_17551 = state_14910;
(statearr_14926_17551[(2)] = ex__14380__auto__);


if(cljs.core.seq((state_14910[(4)]))){
var statearr_14927_17552 = state_14910;
(statearr_14927_17552[(1)] = cljs.core.first((state_14910[(4)])));

} else {
throw ex__14380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17553 = state_14910;
state_14910 = G__17553;
continue;
} else {
return ret_value__14378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__ = function(state_14910){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____1.call(this,state_14910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__;
})()
;})(__17523,switch__14376__auto__,c__14595__auto___17539,G__14870_17524,G__14870_17525__$1,n__5593__auto___17522,jobs,results,process__$1,async))
})();
var state__14598__auto__ = (function (){var statearr_14928 = f__14596__auto__();
(statearr_14928[(6)] = c__14595__auto___17539);

return statearr_14928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14598__auto__);
});})(__17523,c__14595__auto___17539,G__14870_17524,G__14870_17525__$1,n__5593__auto___17522,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14870_17525__$1)].join('')));

}

var G__17555 = (__17523 + (1));
__17523 = G__17555;
continue;
} else {
}
break;
}

var c__14595__auto___17556 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14596__auto__ = (function (){var switch__14376__auto__ = (function (state_14956){
var state_val_14957 = (state_14956[(1)]);
if((state_val_14957 === (7))){
var inst_14952 = (state_14956[(2)]);
var state_14956__$1 = state_14956;
var statearr_14966_17558 = state_14956__$1;
(statearr_14966_17558[(2)] = inst_14952);

(statearr_14966_17558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14957 === (1))){
var state_14956__$1 = state_14956;
var statearr_14972_17559 = state_14956__$1;
(statearr_14972_17559[(2)] = null);

(statearr_14972_17559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14957 === (4))){
var inst_14933 = (state_14956[(7)]);
var inst_14933__$1 = (state_14956[(2)]);
var inst_14934 = (inst_14933__$1 == null);
var state_14956__$1 = (function (){var statearr_14978 = state_14956;
(statearr_14978[(7)] = inst_14933__$1);

return statearr_14978;
})();
if(cljs.core.truth_(inst_14934)){
var statearr_14979_17562 = state_14956__$1;
(statearr_14979_17562[(1)] = (5));

} else {
var statearr_14980_17563 = state_14956__$1;
(statearr_14980_17563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14957 === (6))){
var inst_14938 = (state_14956[(8)]);
var inst_14933 = (state_14956[(7)]);
var inst_14938__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14942 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14943 = [inst_14933,inst_14938__$1];
var inst_14944 = (new cljs.core.PersistentVector(null,2,(5),inst_14942,inst_14943,null));
var state_14956__$1 = (function (){var statearr_14981 = state_14956;
(statearr_14981[(8)] = inst_14938__$1);

return statearr_14981;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14956__$1,(8),jobs,inst_14944);
} else {
if((state_val_14957 === (3))){
var inst_14954 = (state_14956[(2)]);
var state_14956__$1 = state_14956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14956__$1,inst_14954);
} else {
if((state_val_14957 === (2))){
var state_14956__$1 = state_14956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14956__$1,(4),from);
} else {
if((state_val_14957 === (9))){
var inst_14949 = (state_14956[(2)]);
var state_14956__$1 = (function (){var statearr_14988 = state_14956;
(statearr_14988[(9)] = inst_14949);

return statearr_14988;
})();
var statearr_14990_17564 = state_14956__$1;
(statearr_14990_17564[(2)] = null);

(statearr_14990_17564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14957 === (5))){
var inst_14936 = cljs.core.async.close_BANG_(jobs);
var state_14956__$1 = state_14956;
var statearr_14992_17568 = state_14956__$1;
(statearr_14992_17568[(2)] = inst_14936);

(statearr_14992_17568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14957 === (8))){
var inst_14938 = (state_14956[(8)]);
var inst_14947 = (state_14956[(2)]);
var state_14956__$1 = (function (){var statearr_14993 = state_14956;
(statearr_14993[(10)] = inst_14947);

return statearr_14993;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14956__$1,(9),results,inst_14938);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____0 = (function (){
var statearr_14994 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14994[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__);

(statearr_14994[(1)] = (1));

return statearr_14994;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____1 = (function (state_14956){
while(true){
var ret_value__14378__auto__ = (function (){try{while(true){
var result__14379__auto__ = switch__14376__auto__(state_14956);
if(cljs.core.keyword_identical_QMARK_(result__14379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14379__auto__;
}
break;
}
}catch (e14995){var ex__14380__auto__ = e14995;
var statearr_14996_17569 = state_14956;
(statearr_14996_17569[(2)] = ex__14380__auto__);


if(cljs.core.seq((state_14956[(4)]))){
var statearr_14997_17570 = state_14956;
(statearr_14997_17570[(1)] = cljs.core.first((state_14956[(4)])));

} else {
throw ex__14380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17571 = state_14956;
state_14956 = G__17571;
continue;
} else {
return ret_value__14378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__ = function(state_14956){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____1.call(this,state_14956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__;
})()
})();
var state__14598__auto__ = (function (){var statearr_15001 = f__14596__auto__();
(statearr_15001[(6)] = c__14595__auto___17556);

return statearr_15001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14598__auto__);
}));


var c__14595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14596__auto__ = (function (){var switch__14376__auto__ = (function (state_15044){
var state_val_15045 = (state_15044[(1)]);
if((state_val_15045 === (7))){
var inst_15040 = (state_15044[(2)]);
var state_15044__$1 = state_15044;
var statearr_15054_17572 = state_15044__$1;
(statearr_15054_17572[(2)] = inst_15040);

(statearr_15054_17572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (20))){
var state_15044__$1 = state_15044;
var statearr_15058_17573 = state_15044__$1;
(statearr_15058_17573[(2)] = null);

(statearr_15058_17573[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (1))){
var state_15044__$1 = state_15044;
var statearr_15060_17574 = state_15044__$1;
(statearr_15060_17574[(2)] = null);

(statearr_15060_17574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (4))){
var inst_15005 = (state_15044[(7)]);
var inst_15005__$1 = (state_15044[(2)]);
var inst_15007 = (inst_15005__$1 == null);
var state_15044__$1 = (function (){var statearr_15061 = state_15044;
(statearr_15061[(7)] = inst_15005__$1);

return statearr_15061;
})();
if(cljs.core.truth_(inst_15007)){
var statearr_15063_17575 = state_15044__$1;
(statearr_15063_17575[(1)] = (5));

} else {
var statearr_15064_17576 = state_15044__$1;
(statearr_15064_17576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (15))){
var inst_15021 = (state_15044[(8)]);
var state_15044__$1 = state_15044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15044__$1,(18),to,inst_15021);
} else {
if((state_val_15045 === (21))){
var inst_15034 = (state_15044[(2)]);
var state_15044__$1 = state_15044;
var statearr_15069_17577 = state_15044__$1;
(statearr_15069_17577[(2)] = inst_15034);

(statearr_15069_17577[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (13))){
var inst_15036 = (state_15044[(2)]);
var state_15044__$1 = (function (){var statearr_15070 = state_15044;
(statearr_15070[(9)] = inst_15036);

return statearr_15070;
})();
var statearr_15071_17578 = state_15044__$1;
(statearr_15071_17578[(2)] = null);

(statearr_15071_17578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (6))){
var inst_15005 = (state_15044[(7)]);
var state_15044__$1 = state_15044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15044__$1,(11),inst_15005);
} else {
if((state_val_15045 === (17))){
var inst_15029 = (state_15044[(2)]);
var state_15044__$1 = state_15044;
if(cljs.core.truth_(inst_15029)){
var statearr_15072_17580 = state_15044__$1;
(statearr_15072_17580[(1)] = (19));

} else {
var statearr_15073_17581 = state_15044__$1;
(statearr_15073_17581[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (3))){
var inst_15042 = (state_15044[(2)]);
var state_15044__$1 = state_15044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15044__$1,inst_15042);
} else {
if((state_val_15045 === (12))){
var inst_15018 = (state_15044[(10)]);
var state_15044__$1 = state_15044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15044__$1,(14),inst_15018);
} else {
if((state_val_15045 === (2))){
var state_15044__$1 = state_15044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15044__$1,(4),results);
} else {
if((state_val_15045 === (19))){
var state_15044__$1 = state_15044;
var statearr_15074_17589 = state_15044__$1;
(statearr_15074_17589[(2)] = null);

(statearr_15074_17589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (11))){
var inst_15018 = (state_15044[(2)]);
var state_15044__$1 = (function (){var statearr_15076 = state_15044;
(statearr_15076[(10)] = inst_15018);

return statearr_15076;
})();
var statearr_15077_17596 = state_15044__$1;
(statearr_15077_17596[(2)] = null);

(statearr_15077_17596[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (9))){
var state_15044__$1 = state_15044;
var statearr_15080_17597 = state_15044__$1;
(statearr_15080_17597[(2)] = null);

(statearr_15080_17597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (5))){
var state_15044__$1 = state_15044;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15083_17604 = state_15044__$1;
(statearr_15083_17604[(1)] = (8));

} else {
var statearr_15084_17608 = state_15044__$1;
(statearr_15084_17608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (14))){
var inst_15021 = (state_15044[(8)]);
var inst_15023 = (state_15044[(11)]);
var inst_15021__$1 = (state_15044[(2)]);
var inst_15022 = (inst_15021__$1 == null);
var inst_15023__$1 = cljs.core.not(inst_15022);
var state_15044__$1 = (function (){var statearr_15085 = state_15044;
(statearr_15085[(8)] = inst_15021__$1);

(statearr_15085[(11)] = inst_15023__$1);

return statearr_15085;
})();
if(inst_15023__$1){
var statearr_15086_17609 = state_15044__$1;
(statearr_15086_17609[(1)] = (15));

} else {
var statearr_15087_17610 = state_15044__$1;
(statearr_15087_17610[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (16))){
var inst_15023 = (state_15044[(11)]);
var state_15044__$1 = state_15044;
var statearr_15088_17611 = state_15044__$1;
(statearr_15088_17611[(2)] = inst_15023);

(statearr_15088_17611[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (10))){
var inst_15013 = (state_15044[(2)]);
var state_15044__$1 = state_15044;
var statearr_15089_17612 = state_15044__$1;
(statearr_15089_17612[(2)] = inst_15013);

(statearr_15089_17612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (18))){
var inst_15026 = (state_15044[(2)]);
var state_15044__$1 = state_15044;
var statearr_15090_17613 = state_15044__$1;
(statearr_15090_17613[(2)] = inst_15026);

(statearr_15090_17613[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15045 === (8))){
var inst_15010 = cljs.core.async.close_BANG_(to);
var state_15044__$1 = state_15044;
var statearr_15092_17618 = state_15044__$1;
(statearr_15092_17618[(2)] = inst_15010);

(statearr_15092_17618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____0 = (function (){
var statearr_15097 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15097[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__);

(statearr_15097[(1)] = (1));

return statearr_15097;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____1 = (function (state_15044){
while(true){
var ret_value__14378__auto__ = (function (){try{while(true){
var result__14379__auto__ = switch__14376__auto__(state_15044);
if(cljs.core.keyword_identical_QMARK_(result__14379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14379__auto__;
}
break;
}
}catch (e15098){var ex__14380__auto__ = e15098;
var statearr_15099_17625 = state_15044;
(statearr_15099_17625[(2)] = ex__14380__auto__);


if(cljs.core.seq((state_15044[(4)]))){
var statearr_15100_17626 = state_15044;
(statearr_15100_17626[(1)] = cljs.core.first((state_15044[(4)])));

} else {
throw ex__14380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17627 = state_15044;
state_15044 = G__17627;
continue;
} else {
return ret_value__14378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__ = function(state_15044){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____1.call(this,state_15044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14377__auto__;
})()
})();
var state__14598__auto__ = (function (){var statearr_15102 = f__14596__auto__();
(statearr_15102[(6)] = c__14595__auto__);

return statearr_15102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14598__auto__);
}));

return c__14595__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15108 = arguments.length;
switch (G__15108) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15116 = arguments.length;
switch (G__15116) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15162 = arguments.length;
switch (G__15162) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14595__auto___17638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14596__auto__ = (function (){var switch__14376__auto__ = (function (state_15210){
var state_val_15245 = (state_15210[(1)]);
if((state_val_15245 === (7))){
var inst_15201 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
var statearr_15247_17639 = state_15210__$1;
(statearr_15247_17639[(2)] = inst_15201);

(statearr_15247_17639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (1))){
var state_15210__$1 = state_15210;
var statearr_15249_17640 = state_15210__$1;
(statearr_15249_17640[(2)] = null);

(statearr_15249_17640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (4))){
var inst_15172 = (state_15210[(7)]);
var inst_15172__$1 = (state_15210[(2)]);
var inst_15175 = (inst_15172__$1 == null);
var state_15210__$1 = (function (){var statearr_15251 = state_15210;
(statearr_15251[(7)] = inst_15172__$1);

return statearr_15251;
})();
if(cljs.core.truth_(inst_15175)){
var statearr_15252_17641 = state_15210__$1;
(statearr_15252_17641[(1)] = (5));

} else {
var statearr_15253_17642 = state_15210__$1;
(statearr_15253_17642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (13))){
var state_15210__$1 = state_15210;
var statearr_15254_17643 = state_15210__$1;
(statearr_15254_17643[(2)] = null);

(statearr_15254_17643[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (6))){
var inst_15172 = (state_15210[(7)]);
var inst_15185 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15172) : p.call(null, inst_15172));
var state_15210__$1 = state_15210;
if(cljs.core.truth_(inst_15185)){
var statearr_15255_17645 = state_15210__$1;
(statearr_15255_17645[(1)] = (9));

} else {
var statearr_15256_17646 = state_15210__$1;
(statearr_15256_17646[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (3))){
var inst_15203 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15210__$1,inst_15203);
} else {
if((state_val_15245 === (12))){
var state_15210__$1 = state_15210;
var statearr_15261_17651 = state_15210__$1;
(statearr_15261_17651[(2)] = null);

(statearr_15261_17651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (2))){
var state_15210__$1 = state_15210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15210__$1,(4),ch);
} else {
if((state_val_15245 === (11))){
var inst_15172 = (state_15210[(7)]);
var inst_15190 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15210__$1,(8),inst_15190,inst_15172);
} else {
if((state_val_15245 === (9))){
var state_15210__$1 = state_15210;
var statearr_15266_17652 = state_15210__$1;
(statearr_15266_17652[(2)] = tc);

(statearr_15266_17652[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (5))){
var inst_15182 = cljs.core.async.close_BANG_(tc);
var inst_15183 = cljs.core.async.close_BANG_(fc);
var state_15210__$1 = (function (){var statearr_15269 = state_15210;
(statearr_15269[(8)] = inst_15182);

return statearr_15269;
})();
var statearr_15272_17653 = state_15210__$1;
(statearr_15272_17653[(2)] = inst_15183);

(statearr_15272_17653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (14))){
var inst_15198 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
var statearr_15273_17658 = state_15210__$1;
(statearr_15273_17658[(2)] = inst_15198);

(statearr_15273_17658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (10))){
var state_15210__$1 = state_15210;
var statearr_15278_17659 = state_15210__$1;
(statearr_15278_17659[(2)] = fc);

(statearr_15278_17659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15245 === (8))){
var inst_15192 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
if(cljs.core.truth_(inst_15192)){
var statearr_15280_17664 = state_15210__$1;
(statearr_15280_17664[(1)] = (12));

} else {
var statearr_15281_17666 = state_15210__$1;
(statearr_15281_17666[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14377__auto__ = null;
var cljs$core$async$state_machine__14377__auto____0 = (function (){
var statearr_15302 = [null,null,null,null,null,null,null,null,null];
(statearr_15302[(0)] = cljs$core$async$state_machine__14377__auto__);

(statearr_15302[(1)] = (1));

return statearr_15302;
});
var cljs$core$async$state_machine__14377__auto____1 = (function (state_15210){
while(true){
var ret_value__14378__auto__ = (function (){try{while(true){
var result__14379__auto__ = switch__14376__auto__(state_15210);
if(cljs.core.keyword_identical_QMARK_(result__14379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14379__auto__;
}
break;
}
}catch (e15305){var ex__14380__auto__ = e15305;
var statearr_15307_17671 = state_15210;
(statearr_15307_17671[(2)] = ex__14380__auto__);


if(cljs.core.seq((state_15210[(4)]))){
var statearr_15308_17672 = state_15210;
(statearr_15308_17672[(1)] = cljs.core.first((state_15210[(4)])));

} else {
throw ex__14380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17673 = state_15210;
state_15210 = G__17673;
continue;
} else {
return ret_value__14378__auto__;
}
break;
}
});
cljs$core$async$state_machine__14377__auto__ = function(state_15210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14377__auto____1.call(this,state_15210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14377__auto____0;
cljs$core$async$state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14377__auto____1;
return cljs$core$async$state_machine__14377__auto__;
})()
})();
var state__14598__auto__ = (function (){var statearr_15309 = f__14596__auto__();
(statearr_15309[(6)] = c__14595__auto___17638);

return statearr_15309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14598__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14596__auto__ = (function (){var switch__14376__auto__ = (function (state_15337){
var state_val_15338 = (state_15337[(1)]);
if((state_val_15338 === (7))){
var inst_15333 = (state_15337[(2)]);
var state_15337__$1 = state_15337;
var statearr_15355_17674 = state_15337__$1;
(statearr_15355_17674[(2)] = inst_15333);

(statearr_15355_17674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15338 === (1))){
var inst_15316 = init;
var inst_15317 = inst_15316;
var state_15337__$1 = (function (){var statearr_15356 = state_15337;
(statearr_15356[(7)] = inst_15317);

return statearr_15356;
})();
var statearr_15358_17675 = state_15337__$1;
(statearr_15358_17675[(2)] = null);

(statearr_15358_17675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15338 === (4))){
var inst_15320 = (state_15337[(8)]);
var inst_15320__$1 = (state_15337[(2)]);
var inst_15321 = (inst_15320__$1 == null);
var state_15337__$1 = (function (){var statearr_15361 = state_15337;
(statearr_15361[(8)] = inst_15320__$1);

return statearr_15361;
})();
if(cljs.core.truth_(inst_15321)){
var statearr_15362_17677 = state_15337__$1;
(statearr_15362_17677[(1)] = (5));

} else {
var statearr_15363_17678 = state_15337__$1;
(statearr_15363_17678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15338 === (6))){
var inst_15317 = (state_15337[(7)]);
var inst_15320 = (state_15337[(8)]);
var inst_15324 = (state_15337[(9)]);
var inst_15324__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15317,inst_15320) : f.call(null, inst_15317,inst_15320));
var inst_15325 = cljs.core.reduced_QMARK_(inst_15324__$1);
var state_15337__$1 = (function (){var statearr_15368 = state_15337;
(statearr_15368[(9)] = inst_15324__$1);

return statearr_15368;
})();
if(inst_15325){
var statearr_15369_17679 = state_15337__$1;
(statearr_15369_17679[(1)] = (8));

} else {
var statearr_15371_17680 = state_15337__$1;
(statearr_15371_17680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15338 === (3))){
var inst_15335 = (state_15337[(2)]);
var state_15337__$1 = state_15337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15337__$1,inst_15335);
} else {
if((state_val_15338 === (2))){
var state_15337__$1 = state_15337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15337__$1,(4),ch);
} else {
if((state_val_15338 === (9))){
var inst_15324 = (state_15337[(9)]);
var inst_15317 = inst_15324;
var state_15337__$1 = (function (){var statearr_15377 = state_15337;
(statearr_15377[(7)] = inst_15317);

return statearr_15377;
})();
var statearr_15378_17681 = state_15337__$1;
(statearr_15378_17681[(2)] = null);

(statearr_15378_17681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15338 === (5))){
var inst_15317 = (state_15337[(7)]);
var state_15337__$1 = state_15337;
var statearr_15380_17683 = state_15337__$1;
(statearr_15380_17683[(2)] = inst_15317);

(statearr_15380_17683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15338 === (10))){
var inst_15331 = (state_15337[(2)]);
var state_15337__$1 = state_15337;
var statearr_15381_17685 = state_15337__$1;
(statearr_15381_17685[(2)] = inst_15331);

(statearr_15381_17685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15338 === (8))){
var inst_15324 = (state_15337[(9)]);
var inst_15327 = cljs.core.deref(inst_15324);
var state_15337__$1 = state_15337;
var statearr_15382_17686 = state_15337__$1;
(statearr_15382_17686[(2)] = inst_15327);

(statearr_15382_17686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14377__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14377__auto____0 = (function (){
var statearr_15385 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15385[(0)] = cljs$core$async$reduce_$_state_machine__14377__auto__);

(statearr_15385[(1)] = (1));

return statearr_15385;
});
var cljs$core$async$reduce_$_state_machine__14377__auto____1 = (function (state_15337){
while(true){
var ret_value__14378__auto__ = (function (){try{while(true){
var result__14379__auto__ = switch__14376__auto__(state_15337);
if(cljs.core.keyword_identical_QMARK_(result__14379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14379__auto__;
}
break;
}
}catch (e15386){var ex__14380__auto__ = e15386;
var statearr_15387_17688 = state_15337;
(statearr_15387_17688[(2)] = ex__14380__auto__);


if(cljs.core.seq((state_15337[(4)]))){
var statearr_15389_17689 = state_15337;
(statearr_15389_17689[(1)] = cljs.core.first((state_15337[(4)])));

} else {
throw ex__14380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17691 = state_15337;
state_15337 = G__17691;
continue;
} else {
return ret_value__14378__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14377__auto__ = function(state_15337){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14377__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14377__auto____1.call(this,state_15337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14377__auto____0;
cljs$core$async$reduce_$_state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14377__auto____1;
return cljs$core$async$reduce_$_state_machine__14377__auto__;
})()
})();
var state__14598__auto__ = (function (){var statearr_15391 = f__14596__auto__();
(statearr_15391[(6)] = c__14595__auto__);

return statearr_15391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14598__auto__);
}));

return c__14595__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__14595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14596__auto__ = (function (){var switch__14376__auto__ = (function (state_15400){
var state_val_15401 = (state_15400[(1)]);
if((state_val_15401 === (1))){
var inst_15395 = cljs.core.async.reduce(f__$1,init,ch);
var state_15400__$1 = state_15400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15400__$1,(2),inst_15395);
} else {
if((state_val_15401 === (2))){
var inst_15397 = (state_15400[(2)]);
var inst_15398 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15397) : f__$1.call(null, inst_15397));
var state_15400__$1 = state_15400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15400__$1,inst_15398);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14377__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14377__auto____0 = (function (){
var statearr_15403 = [null,null,null,null,null,null,null];
(statearr_15403[(0)] = cljs$core$async$transduce_$_state_machine__14377__auto__);

(statearr_15403[(1)] = (1));

return statearr_15403;
});
var cljs$core$async$transduce_$_state_machine__14377__auto____1 = (function (state_15400){
while(true){
var ret_value__14378__auto__ = (function (){try{while(true){
var result__14379__auto__ = switch__14376__auto__(state_15400);
if(cljs.core.keyword_identical_QMARK_(result__14379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14379__auto__;
}
break;
}
}catch (e15404){var ex__14380__auto__ = e15404;
var statearr_15405_17695 = state_15400;
(statearr_15405_17695[(2)] = ex__14380__auto__);


if(cljs.core.seq((state_15400[(4)]))){
var statearr_15407_17696 = state_15400;
(statearr_15407_17696[(1)] = cljs.core.first((state_15400[(4)])));

} else {
throw ex__14380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17697 = state_15400;
state_15400 = G__17697;
continue;
} else {
return ret_value__14378__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14377__auto__ = function(state_15400){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14377__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14377__auto____1.call(this,state_15400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14377__auto____0;
cljs$core$async$transduce_$_state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14377__auto____1;
return cljs$core$async$transduce_$_state_machine__14377__auto__;
})()
})();
var state__14598__auto__ = (function (){var statearr_15413 = f__14596__auto__();
(statearr_15413[(6)] = c__14595__auto__);

return statearr_15413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14598__auto__);
}));

return c__14595__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15419 = arguments.length;
switch (G__15419) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14596__auto__ = (function (){var switch__14376__auto__ = (function (state_15444){
var state_val_15445 = (state_15444[(1)]);
if((state_val_15445 === (7))){
var inst_15426 = (state_15444[(2)]);
var state_15444__$1 = state_15444;
var statearr_15446_17703 = state_15444__$1;
(statearr_15446_17703[(2)] = inst_15426);

(statearr_15446_17703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15445 === (1))){
var inst_15420 = cljs.core.seq(coll);
var inst_15421 = inst_15420;
var state_15444__$1 = (function (){var statearr_15447 = state_15444;
(statearr_15447[(7)] = inst_15421);

return statearr_15447;
})();
var statearr_15448_17705 = state_15444__$1;
(statearr_15448_17705[(2)] = null);

(statearr_15448_17705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15445 === (4))){
var inst_15421 = (state_15444[(7)]);
var inst_15424 = cljs.core.first(inst_15421);
var state_15444__$1 = state_15444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15444__$1,(7),ch,inst_15424);
} else {
if((state_val_15445 === (13))){
var inst_15438 = (state_15444[(2)]);
var state_15444__$1 = state_15444;
var statearr_15451_17706 = state_15444__$1;
(statearr_15451_17706[(2)] = inst_15438);

(statearr_15451_17706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15445 === (6))){
var inst_15429 = (state_15444[(2)]);
var state_15444__$1 = state_15444;
if(cljs.core.truth_(inst_15429)){
var statearr_15454_17707 = state_15444__$1;
(statearr_15454_17707[(1)] = (8));

} else {
var statearr_15455_17708 = state_15444__$1;
(statearr_15455_17708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15445 === (3))){
var inst_15442 = (state_15444[(2)]);
var state_15444__$1 = state_15444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15444__$1,inst_15442);
} else {
if((state_val_15445 === (12))){
var state_15444__$1 = state_15444;
var statearr_15456_17711 = state_15444__$1;
(statearr_15456_17711[(2)] = null);

(statearr_15456_17711[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15445 === (2))){
var inst_15421 = (state_15444[(7)]);
var state_15444__$1 = state_15444;
if(cljs.core.truth_(inst_15421)){
var statearr_15457_17712 = state_15444__$1;
(statearr_15457_17712[(1)] = (4));

} else {
var statearr_15458_17713 = state_15444__$1;
(statearr_15458_17713[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15445 === (11))){
var inst_15435 = cljs.core.async.close_BANG_(ch);
var state_15444__$1 = state_15444;
var statearr_15459_17714 = state_15444__$1;
(statearr_15459_17714[(2)] = inst_15435);

(statearr_15459_17714[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15445 === (9))){
var state_15444__$1 = state_15444;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15460_17715 = state_15444__$1;
(statearr_15460_17715[(1)] = (11));

} else {
var statearr_15461_17716 = state_15444__$1;
(statearr_15461_17716[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15445 === (5))){
var inst_15421 = (state_15444[(7)]);
var state_15444__$1 = state_15444;
var statearr_15462_17717 = state_15444__$1;
(statearr_15462_17717[(2)] = inst_15421);

(statearr_15462_17717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15445 === (10))){
var inst_15440 = (state_15444[(2)]);
var state_15444__$1 = state_15444;
var statearr_15463_17718 = state_15444__$1;
(statearr_15463_17718[(2)] = inst_15440);

(statearr_15463_17718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15445 === (8))){
var inst_15421 = (state_15444[(7)]);
var inst_15431 = cljs.core.next(inst_15421);
var inst_15421__$1 = inst_15431;
var state_15444__$1 = (function (){var statearr_15466 = state_15444;
(statearr_15466[(7)] = inst_15421__$1);

return statearr_15466;
})();
var statearr_15467_17720 = state_15444__$1;
(statearr_15467_17720[(2)] = null);

(statearr_15467_17720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14377__auto__ = null;
var cljs$core$async$state_machine__14377__auto____0 = (function (){
var statearr_15468 = [null,null,null,null,null,null,null,null];
(statearr_15468[(0)] = cljs$core$async$state_machine__14377__auto__);

(statearr_15468[(1)] = (1));

return statearr_15468;
});
var cljs$core$async$state_machine__14377__auto____1 = (function (state_15444){
while(true){
var ret_value__14378__auto__ = (function (){try{while(true){
var result__14379__auto__ = switch__14376__auto__(state_15444);
if(cljs.core.keyword_identical_QMARK_(result__14379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14379__auto__;
}
break;
}
}catch (e15471){var ex__14380__auto__ = e15471;
var statearr_15474_17721 = state_15444;
(statearr_15474_17721[(2)] = ex__14380__auto__);


if(cljs.core.seq((state_15444[(4)]))){
var statearr_15475_17722 = state_15444;
(statearr_15475_17722[(1)] = cljs.core.first((state_15444[(4)])));

} else {
throw ex__14380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17723 = state_15444;
state_15444 = G__17723;
continue;
} else {
return ret_value__14378__auto__;
}
break;
}
});
cljs$core$async$state_machine__14377__auto__ = function(state_15444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14377__auto____1.call(this,state_15444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14377__auto____0;
cljs$core$async$state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14377__auto____1;
return cljs$core$async$state_machine__14377__auto__;
})()
})();
var state__14598__auto__ = (function (){var statearr_15476 = f__14596__auto__();
(statearr_15476[(6)] = c__14595__auto__);

return statearr_15476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14598__auto__);
}));

return c__14595__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15478 = arguments.length;
switch (G__15478) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17727 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17727(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17733 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17733(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17738 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17738(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17741 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17741(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15511 = (function (ch,cs,meta15512){
this.ch = ch;
this.cs = cs;
this.meta15512 = meta15512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15513,meta15512__$1){
var self__ = this;
var _15513__$1 = this;
return (new cljs.core.async.t_cljs$core$async15511(self__.ch,self__.cs,meta15512__$1));
}));

(cljs.core.async.t_cljs$core$async15511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15513){
var self__ = this;
var _15513__$1 = this;
return self__.meta15512;
}));

(cljs.core.async.t_cljs$core$async15511.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15511.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15511.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15511.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15511.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15511.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15512","meta15512",636978603,null)], null);
}));

(cljs.core.async.t_cljs$core$async15511.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15511");

(cljs.core.async.t_cljs$core$async15511.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15511");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15511.
 */
cljs.core.async.__GT_t_cljs$core$async15511 = (function cljs$core$async$__GT_t_cljs$core$async15511(ch,cs,meta15512){
return (new cljs.core.async.t_cljs$core$async15511(ch,cs,meta15512));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15511(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14595__auto___17742 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14596__auto__ = (function (){var switch__14376__auto__ = (function (state_15657){
var state_val_15658 = (state_15657[(1)]);
if((state_val_15658 === (7))){
var inst_15653 = (state_15657[(2)]);
var state_15657__$1 = state_15657;
var statearr_15661_17743 = state_15657__$1;
(statearr_15661_17743[(2)] = inst_15653);

(statearr_15661_17743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (20))){
var inst_15558 = (state_15657[(7)]);
var inst_15570 = cljs.core.first(inst_15558);
var inst_15571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15570,(0),null);
var inst_15572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15570,(1),null);
var state_15657__$1 = (function (){var statearr_15664 = state_15657;
(statearr_15664[(8)] = inst_15571);

return statearr_15664;
})();
if(cljs.core.truth_(inst_15572)){
var statearr_15666_17746 = state_15657__$1;
(statearr_15666_17746[(1)] = (22));

} else {
var statearr_15669_17747 = state_15657__$1;
(statearr_15669_17747[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (27))){
var inst_15527 = (state_15657[(9)]);
var inst_15600 = (state_15657[(10)]);
var inst_15607 = (state_15657[(11)]);
var inst_15602 = (state_15657[(12)]);
var inst_15607__$1 = cljs.core._nth(inst_15600,inst_15602);
var inst_15608 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15607__$1,inst_15527,done);
var state_15657__$1 = (function (){var statearr_15671 = state_15657;
(statearr_15671[(11)] = inst_15607__$1);

return statearr_15671;
})();
if(cljs.core.truth_(inst_15608)){
var statearr_15672_17749 = state_15657__$1;
(statearr_15672_17749[(1)] = (30));

} else {
var statearr_15673_17750 = state_15657__$1;
(statearr_15673_17750[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (1))){
var state_15657__$1 = state_15657;
var statearr_15674_17751 = state_15657__$1;
(statearr_15674_17751[(2)] = null);

(statearr_15674_17751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (24))){
var inst_15558 = (state_15657[(7)]);
var inst_15577 = (state_15657[(2)]);
var inst_15578 = cljs.core.next(inst_15558);
var inst_15536 = inst_15578;
var inst_15537 = null;
var inst_15538 = (0);
var inst_15539 = (0);
var state_15657__$1 = (function (){var statearr_15679 = state_15657;
(statearr_15679[(13)] = inst_15577);

(statearr_15679[(14)] = inst_15536);

(statearr_15679[(15)] = inst_15538);

(statearr_15679[(16)] = inst_15537);

(statearr_15679[(17)] = inst_15539);

return statearr_15679;
})();
var statearr_15680_17756 = state_15657__$1;
(statearr_15680_17756[(2)] = null);

(statearr_15680_17756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (39))){
var state_15657__$1 = state_15657;
var statearr_15686_17758 = state_15657__$1;
(statearr_15686_17758[(2)] = null);

(statearr_15686_17758[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (4))){
var inst_15527 = (state_15657[(9)]);
var inst_15527__$1 = (state_15657[(2)]);
var inst_15528 = (inst_15527__$1 == null);
var state_15657__$1 = (function (){var statearr_15689 = state_15657;
(statearr_15689[(9)] = inst_15527__$1);

return statearr_15689;
})();
if(cljs.core.truth_(inst_15528)){
var statearr_15690_17763 = state_15657__$1;
(statearr_15690_17763[(1)] = (5));

} else {
var statearr_15691_17764 = state_15657__$1;
(statearr_15691_17764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (15))){
var inst_15536 = (state_15657[(14)]);
var inst_15538 = (state_15657[(15)]);
var inst_15537 = (state_15657[(16)]);
var inst_15539 = (state_15657[(17)]);
var inst_15554 = (state_15657[(2)]);
var inst_15555 = (inst_15539 + (1));
var tmp15681 = inst_15536;
var tmp15682 = inst_15538;
var tmp15683 = inst_15537;
var inst_15536__$1 = tmp15681;
var inst_15537__$1 = tmp15683;
var inst_15538__$1 = tmp15682;
var inst_15539__$1 = inst_15555;
var state_15657__$1 = (function (){var statearr_15696 = state_15657;
(statearr_15696[(14)] = inst_15536__$1);

(statearr_15696[(18)] = inst_15554);

(statearr_15696[(15)] = inst_15538__$1);

(statearr_15696[(16)] = inst_15537__$1);

(statearr_15696[(17)] = inst_15539__$1);

return statearr_15696;
})();
var statearr_15697_17766 = state_15657__$1;
(statearr_15697_17766[(2)] = null);

(statearr_15697_17766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (21))){
var inst_15581 = (state_15657[(2)]);
var state_15657__$1 = state_15657;
var statearr_15703_17768 = state_15657__$1;
(statearr_15703_17768[(2)] = inst_15581);

(statearr_15703_17768[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (31))){
var inst_15607 = (state_15657[(11)]);
var inst_15611 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15607);
var state_15657__$1 = state_15657;
var statearr_15706_17769 = state_15657__$1;
(statearr_15706_17769[(2)] = inst_15611);

(statearr_15706_17769[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (32))){
var inst_15600 = (state_15657[(10)]);
var inst_15599 = (state_15657[(19)]);
var inst_15602 = (state_15657[(12)]);
var inst_15601 = (state_15657[(20)]);
var inst_15613 = (state_15657[(2)]);
var inst_15614 = (inst_15602 + (1));
var tmp15699 = inst_15600;
var tmp15700 = inst_15599;
var tmp15701 = inst_15601;
var inst_15599__$1 = tmp15700;
var inst_15600__$1 = tmp15699;
var inst_15601__$1 = tmp15701;
var inst_15602__$1 = inst_15614;
var state_15657__$1 = (function (){var statearr_15707 = state_15657;
(statearr_15707[(21)] = inst_15613);

(statearr_15707[(10)] = inst_15600__$1);

(statearr_15707[(19)] = inst_15599__$1);

(statearr_15707[(12)] = inst_15602__$1);

(statearr_15707[(20)] = inst_15601__$1);

return statearr_15707;
})();
var statearr_15711_17770 = state_15657__$1;
(statearr_15711_17770[(2)] = null);

(statearr_15711_17770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (40))){
var inst_15626 = (state_15657[(22)]);
var inst_15630 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15626);
var state_15657__$1 = state_15657;
var statearr_15714_17772 = state_15657__$1;
(statearr_15714_17772[(2)] = inst_15630);

(statearr_15714_17772[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (33))){
var inst_15617 = (state_15657[(23)]);
var inst_15619 = cljs.core.chunked_seq_QMARK_(inst_15617);
var state_15657__$1 = state_15657;
if(inst_15619){
var statearr_15717_17775 = state_15657__$1;
(statearr_15717_17775[(1)] = (36));

} else {
var statearr_15718_17776 = state_15657__$1;
(statearr_15718_17776[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (13))){
var inst_15548 = (state_15657[(24)]);
var inst_15551 = cljs.core.async.close_BANG_(inst_15548);
var state_15657__$1 = state_15657;
var statearr_15721_17781 = state_15657__$1;
(statearr_15721_17781[(2)] = inst_15551);

(statearr_15721_17781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (22))){
var inst_15571 = (state_15657[(8)]);
var inst_15574 = cljs.core.async.close_BANG_(inst_15571);
var state_15657__$1 = state_15657;
var statearr_15722_17783 = state_15657__$1;
(statearr_15722_17783[(2)] = inst_15574);

(statearr_15722_17783[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (36))){
var inst_15617 = (state_15657[(23)]);
var inst_15621 = cljs.core.chunk_first(inst_15617);
var inst_15622 = cljs.core.chunk_rest(inst_15617);
var inst_15623 = cljs.core.count(inst_15621);
var inst_15599 = inst_15622;
var inst_15600 = inst_15621;
var inst_15601 = inst_15623;
var inst_15602 = (0);
var state_15657__$1 = (function (){var statearr_15732 = state_15657;
(statearr_15732[(10)] = inst_15600);

(statearr_15732[(19)] = inst_15599);

(statearr_15732[(12)] = inst_15602);

(statearr_15732[(20)] = inst_15601);

return statearr_15732;
})();
var statearr_15734_17794 = state_15657__$1;
(statearr_15734_17794[(2)] = null);

(statearr_15734_17794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (41))){
var inst_15617 = (state_15657[(23)]);
var inst_15632 = (state_15657[(2)]);
var inst_15633 = cljs.core.next(inst_15617);
var inst_15599 = inst_15633;
var inst_15600 = null;
var inst_15601 = (0);
var inst_15602 = (0);
var state_15657__$1 = (function (){var statearr_15735 = state_15657;
(statearr_15735[(10)] = inst_15600);

(statearr_15735[(25)] = inst_15632);

(statearr_15735[(19)] = inst_15599);

(statearr_15735[(12)] = inst_15602);

(statearr_15735[(20)] = inst_15601);

return statearr_15735;
})();
var statearr_15737_17795 = state_15657__$1;
(statearr_15737_17795[(2)] = null);

(statearr_15737_17795[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (43))){
var state_15657__$1 = state_15657;
var statearr_15738_17796 = state_15657__$1;
(statearr_15738_17796[(2)] = null);

(statearr_15738_17796[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (29))){
var inst_15641 = (state_15657[(2)]);
var state_15657__$1 = state_15657;
var statearr_15740_17797 = state_15657__$1;
(statearr_15740_17797[(2)] = inst_15641);

(statearr_15740_17797[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (44))){
var inst_15650 = (state_15657[(2)]);
var state_15657__$1 = (function (){var statearr_15741 = state_15657;
(statearr_15741[(26)] = inst_15650);

return statearr_15741;
})();
var statearr_15743_17798 = state_15657__$1;
(statearr_15743_17798[(2)] = null);

(statearr_15743_17798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (6))){
var inst_15591 = (state_15657[(27)]);
var inst_15590 = cljs.core.deref(cs);
var inst_15591__$1 = cljs.core.keys(inst_15590);
var inst_15592 = cljs.core.count(inst_15591__$1);
var inst_15593 = cljs.core.reset_BANG_(dctr,inst_15592);
var inst_15598 = cljs.core.seq(inst_15591__$1);
var inst_15599 = inst_15598;
var inst_15600 = null;
var inst_15601 = (0);
var inst_15602 = (0);
var state_15657__$1 = (function (){var statearr_15757 = state_15657;
(statearr_15757[(28)] = inst_15593);

(statearr_15757[(10)] = inst_15600);

(statearr_15757[(27)] = inst_15591__$1);

(statearr_15757[(19)] = inst_15599);

(statearr_15757[(12)] = inst_15602);

(statearr_15757[(20)] = inst_15601);

return statearr_15757;
})();
var statearr_15759_17799 = state_15657__$1;
(statearr_15759_17799[(2)] = null);

(statearr_15759_17799[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (28))){
var inst_15617 = (state_15657[(23)]);
var inst_15599 = (state_15657[(19)]);
var inst_15617__$1 = cljs.core.seq(inst_15599);
var state_15657__$1 = (function (){var statearr_15768 = state_15657;
(statearr_15768[(23)] = inst_15617__$1);

return statearr_15768;
})();
if(inst_15617__$1){
var statearr_15769_17800 = state_15657__$1;
(statearr_15769_17800[(1)] = (33));

} else {
var statearr_15770_17801 = state_15657__$1;
(statearr_15770_17801[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (25))){
var inst_15602 = (state_15657[(12)]);
var inst_15601 = (state_15657[(20)]);
var inst_15604 = (inst_15602 < inst_15601);
var inst_15605 = inst_15604;
var state_15657__$1 = state_15657;
if(cljs.core.truth_(inst_15605)){
var statearr_15773_17802 = state_15657__$1;
(statearr_15773_17802[(1)] = (27));

} else {
var statearr_15774_17803 = state_15657__$1;
(statearr_15774_17803[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (34))){
var state_15657__$1 = state_15657;
var statearr_15779_17804 = state_15657__$1;
(statearr_15779_17804[(2)] = null);

(statearr_15779_17804[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (17))){
var state_15657__$1 = state_15657;
var statearr_15780_17805 = state_15657__$1;
(statearr_15780_17805[(2)] = null);

(statearr_15780_17805[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (3))){
var inst_15655 = (state_15657[(2)]);
var state_15657__$1 = state_15657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15657__$1,inst_15655);
} else {
if((state_val_15658 === (12))){
var inst_15586 = (state_15657[(2)]);
var state_15657__$1 = state_15657;
var statearr_15781_17806 = state_15657__$1;
(statearr_15781_17806[(2)] = inst_15586);

(statearr_15781_17806[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (2))){
var state_15657__$1 = state_15657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15657__$1,(4),ch);
} else {
if((state_val_15658 === (23))){
var state_15657__$1 = state_15657;
var statearr_15784_17807 = state_15657__$1;
(statearr_15784_17807[(2)] = null);

(statearr_15784_17807[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (35))){
var inst_15639 = (state_15657[(2)]);
var state_15657__$1 = state_15657;
var statearr_15797_17808 = state_15657__$1;
(statearr_15797_17808[(2)] = inst_15639);

(statearr_15797_17808[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (19))){
var inst_15558 = (state_15657[(7)]);
var inst_15562 = cljs.core.chunk_first(inst_15558);
var inst_15563 = cljs.core.chunk_rest(inst_15558);
var inst_15564 = cljs.core.count(inst_15562);
var inst_15536 = inst_15563;
var inst_15537 = inst_15562;
var inst_15538 = inst_15564;
var inst_15539 = (0);
var state_15657__$1 = (function (){var statearr_15800 = state_15657;
(statearr_15800[(14)] = inst_15536);

(statearr_15800[(15)] = inst_15538);

(statearr_15800[(16)] = inst_15537);

(statearr_15800[(17)] = inst_15539);

return statearr_15800;
})();
var statearr_15801_17814 = state_15657__$1;
(statearr_15801_17814[(2)] = null);

(statearr_15801_17814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (11))){
var inst_15558 = (state_15657[(7)]);
var inst_15536 = (state_15657[(14)]);
var inst_15558__$1 = cljs.core.seq(inst_15536);
var state_15657__$1 = (function (){var statearr_15803 = state_15657;
(statearr_15803[(7)] = inst_15558__$1);

return statearr_15803;
})();
if(inst_15558__$1){
var statearr_15806_17815 = state_15657__$1;
(statearr_15806_17815[(1)] = (16));

} else {
var statearr_15807_17816 = state_15657__$1;
(statearr_15807_17816[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (9))){
var inst_15588 = (state_15657[(2)]);
var state_15657__$1 = state_15657;
var statearr_15811_17817 = state_15657__$1;
(statearr_15811_17817[(2)] = inst_15588);

(statearr_15811_17817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (5))){
var inst_15534 = cljs.core.deref(cs);
var inst_15535 = cljs.core.seq(inst_15534);
var inst_15536 = inst_15535;
var inst_15537 = null;
var inst_15538 = (0);
var inst_15539 = (0);
var state_15657__$1 = (function (){var statearr_15812 = state_15657;
(statearr_15812[(14)] = inst_15536);

(statearr_15812[(15)] = inst_15538);

(statearr_15812[(16)] = inst_15537);

(statearr_15812[(17)] = inst_15539);

return statearr_15812;
})();
var statearr_15813_17818 = state_15657__$1;
(statearr_15813_17818[(2)] = null);

(statearr_15813_17818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (14))){
var state_15657__$1 = state_15657;
var statearr_15816_17822 = state_15657__$1;
(statearr_15816_17822[(2)] = null);

(statearr_15816_17822[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (45))){
var inst_15647 = (state_15657[(2)]);
var state_15657__$1 = state_15657;
var statearr_15817_17827 = state_15657__$1;
(statearr_15817_17827[(2)] = inst_15647);

(statearr_15817_17827[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (26))){
var inst_15591 = (state_15657[(27)]);
var inst_15643 = (state_15657[(2)]);
var inst_15644 = cljs.core.seq(inst_15591);
var state_15657__$1 = (function (){var statearr_15820 = state_15657;
(statearr_15820[(29)] = inst_15643);

return statearr_15820;
})();
if(inst_15644){
var statearr_15821_17828 = state_15657__$1;
(statearr_15821_17828[(1)] = (42));

} else {
var statearr_15824_17829 = state_15657__$1;
(statearr_15824_17829[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (16))){
var inst_15558 = (state_15657[(7)]);
var inst_15560 = cljs.core.chunked_seq_QMARK_(inst_15558);
var state_15657__$1 = state_15657;
if(inst_15560){
var statearr_15825_17830 = state_15657__$1;
(statearr_15825_17830[(1)] = (19));

} else {
var statearr_15826_17831 = state_15657__$1;
(statearr_15826_17831[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (38))){
var inst_15636 = (state_15657[(2)]);
var state_15657__$1 = state_15657;
var statearr_15827_17832 = state_15657__$1;
(statearr_15827_17832[(2)] = inst_15636);

(statearr_15827_17832[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (30))){
var state_15657__$1 = state_15657;
var statearr_15829_17833 = state_15657__$1;
(statearr_15829_17833[(2)] = null);

(statearr_15829_17833[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (10))){
var inst_15537 = (state_15657[(16)]);
var inst_15539 = (state_15657[(17)]);
var inst_15547 = cljs.core._nth(inst_15537,inst_15539);
var inst_15548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15547,(0),null);
var inst_15549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15547,(1),null);
var state_15657__$1 = (function (){var statearr_15833 = state_15657;
(statearr_15833[(24)] = inst_15548);

return statearr_15833;
})();
if(cljs.core.truth_(inst_15549)){
var statearr_15834_17834 = state_15657__$1;
(statearr_15834_17834[(1)] = (13));

} else {
var statearr_15835_17835 = state_15657__$1;
(statearr_15835_17835[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (18))){
var inst_15584 = (state_15657[(2)]);
var state_15657__$1 = state_15657;
var statearr_15838_17836 = state_15657__$1;
(statearr_15838_17836[(2)] = inst_15584);

(statearr_15838_17836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (42))){
var state_15657__$1 = state_15657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15657__$1,(45),dchan);
} else {
if((state_val_15658 === (37))){
var inst_15617 = (state_15657[(23)]);
var inst_15527 = (state_15657[(9)]);
var inst_15626 = (state_15657[(22)]);
var inst_15626__$1 = cljs.core.first(inst_15617);
var inst_15627 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15626__$1,inst_15527,done);
var state_15657__$1 = (function (){var statearr_15839 = state_15657;
(statearr_15839[(22)] = inst_15626__$1);

return statearr_15839;
})();
if(cljs.core.truth_(inst_15627)){
var statearr_15841_17838 = state_15657__$1;
(statearr_15841_17838[(1)] = (39));

} else {
var statearr_15842_17839 = state_15657__$1;
(statearr_15842_17839[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15658 === (8))){
var inst_15538 = (state_15657[(15)]);
var inst_15539 = (state_15657[(17)]);
var inst_15541 = (inst_15539 < inst_15538);
var inst_15542 = inst_15541;
var state_15657__$1 = state_15657;
if(cljs.core.truth_(inst_15542)){
var statearr_15844_17840 = state_15657__$1;
(statearr_15844_17840[(1)] = (10));

} else {
var statearr_15845_17841 = state_15657__$1;
(statearr_15845_17841[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14377__auto__ = null;
var cljs$core$async$mult_$_state_machine__14377__auto____0 = (function (){
var statearr_15849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15849[(0)] = cljs$core$async$mult_$_state_machine__14377__auto__);

(statearr_15849[(1)] = (1));

return statearr_15849;
});
var cljs$core$async$mult_$_state_machine__14377__auto____1 = (function (state_15657){
while(true){
var ret_value__14378__auto__ = (function (){try{while(true){
var result__14379__auto__ = switch__14376__auto__(state_15657);
if(cljs.core.keyword_identical_QMARK_(result__14379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14379__auto__;
}
break;
}
}catch (e15850){var ex__14380__auto__ = e15850;
var statearr_15851_17846 = state_15657;
(statearr_15851_17846[(2)] = ex__14380__auto__);


if(cljs.core.seq((state_15657[(4)]))){
var statearr_15853_17847 = state_15657;
(statearr_15853_17847[(1)] = cljs.core.first((state_15657[(4)])));

} else {
throw ex__14380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17848 = state_15657;
state_15657 = G__17848;
continue;
} else {
return ret_value__14378__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14377__auto__ = function(state_15657){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14377__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14377__auto____1.call(this,state_15657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14377__auto____0;
cljs$core$async$mult_$_state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14377__auto____1;
return cljs$core$async$mult_$_state_machine__14377__auto__;
})()
})();
var state__14598__auto__ = (function (){var statearr_15856 = f__14596__auto__();
(statearr_15856[(6)] = c__14595__auto___17742);

return statearr_15856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14598__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15860 = arguments.length;
switch (G__15860) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17853 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17853(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17854 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17854(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17855 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17855(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17857 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17857(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17858 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17858(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17862 = arguments.length;
var i__5727__auto___17863 = (0);
while(true){
if((i__5727__auto___17863 < len__5726__auto___17862)){
args__5732__auto__.push((arguments[i__5727__auto___17863]));

var G__17864 = (i__5727__auto___17863 + (1));
i__5727__auto___17863 = G__17864;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15917){
var map__15918 = p__15917;
var map__15918__$1 = cljs.core.__destructure_map(map__15918);
var opts = map__15918__$1;
var statearr_15919_17865 = state;
(statearr_15919_17865[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15920_17866 = state;
(statearr_15920_17866[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15921_17867 = state;
(statearr_15921_17867[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15909){
var G__15910 = cljs.core.first(seq15909);
var seq15909__$1 = cljs.core.next(seq15909);
var G__15911 = cljs.core.first(seq15909__$1);
var seq15909__$2 = cljs.core.next(seq15909__$1);
var G__15912 = cljs.core.first(seq15909__$2);
var seq15909__$3 = cljs.core.next(seq15909__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15910,G__15911,G__15912,seq15909__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15926 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15927){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15927 = meta15927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15928,meta15927__$1){
var self__ = this;
var _15928__$1 = this;
return (new cljs.core.async.t_cljs$core$async15926(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15927__$1));
}));

(cljs.core.async.t_cljs$core$async15926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15928){
var self__ = this;
var _15928__$1 = this;
return self__.meta15927;
}));

(cljs.core.async.t_cljs$core$async15926.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15926.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15926.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15926.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15926.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15926.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15926.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15926.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15927","meta15927",-244975959,null)], null);
}));

(cljs.core.async.t_cljs$core$async15926.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15926");

(cljs.core.async.t_cljs$core$async15926.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15926");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15926.
 */
cljs.core.async.__GT_t_cljs$core$async15926 = (function cljs$core$async$__GT_t_cljs$core$async15926(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15927){
return (new cljs.core.async.t_cljs$core$async15926(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15927));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15926(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14595__auto___17873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14596__auto__ = (function (){var switch__14376__auto__ = (function (state_16035){
var state_val_16036 = (state_16035[(1)]);
if((state_val_16036 === (7))){
var inst_15992 = (state_16035[(2)]);
var state_16035__$1 = state_16035;
if(cljs.core.truth_(inst_15992)){
var statearr_16039_17874 = state_16035__$1;
(statearr_16039_17874[(1)] = (8));

} else {
var statearr_16041_17875 = state_16035__$1;
(statearr_16041_17875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (20))){
var inst_15985 = (state_16035[(7)]);
var state_16035__$1 = state_16035;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16035__$1,(23),out,inst_15985);
} else {
if((state_val_16036 === (1))){
var inst_15968 = calc_state();
var inst_15969 = cljs.core.__destructure_map(inst_15968);
var inst_15970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15969,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15969,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15969,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15973 = inst_15968;
var state_16035__$1 = (function (){var statearr_16046 = state_16035;
(statearr_16046[(8)] = inst_15970);

(statearr_16046[(9)] = inst_15973);

(statearr_16046[(10)] = inst_15972);

(statearr_16046[(11)] = inst_15971);

return statearr_16046;
})();
var statearr_16048_17879 = state_16035__$1;
(statearr_16048_17879[(2)] = null);

(statearr_16048_17879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (24))){
var inst_15976 = (state_16035[(12)]);
var inst_15973 = inst_15976;
var state_16035__$1 = (function (){var statearr_16049 = state_16035;
(statearr_16049[(9)] = inst_15973);

return statearr_16049;
})();
var statearr_16050_17880 = state_16035__$1;
(statearr_16050_17880[(2)] = null);

(statearr_16050_17880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (4))){
var inst_15985 = (state_16035[(7)]);
var inst_15987 = (state_16035[(13)]);
var inst_15984 = (state_16035[(2)]);
var inst_15985__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15984,(0),null);
var inst_15986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15984,(1),null);
var inst_15987__$1 = (inst_15985__$1 == null);
var state_16035__$1 = (function (){var statearr_16051 = state_16035;
(statearr_16051[(7)] = inst_15985__$1);

(statearr_16051[(13)] = inst_15987__$1);

(statearr_16051[(14)] = inst_15986);

return statearr_16051;
})();
if(cljs.core.truth_(inst_15987__$1)){
var statearr_16052_17881 = state_16035__$1;
(statearr_16052_17881[(1)] = (5));

} else {
var statearr_16053_17882 = state_16035__$1;
(statearr_16053_17882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (15))){
var inst_15977 = (state_16035[(15)]);
var inst_16007 = (state_16035[(16)]);
var inst_16007__$1 = cljs.core.empty_QMARK_(inst_15977);
var state_16035__$1 = (function (){var statearr_16055 = state_16035;
(statearr_16055[(16)] = inst_16007__$1);

return statearr_16055;
})();
if(inst_16007__$1){
var statearr_16056_17883 = state_16035__$1;
(statearr_16056_17883[(1)] = (17));

} else {
var statearr_16058_17887 = state_16035__$1;
(statearr_16058_17887[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (21))){
var inst_15976 = (state_16035[(12)]);
var inst_15973 = inst_15976;
var state_16035__$1 = (function (){var statearr_16059 = state_16035;
(statearr_16059[(9)] = inst_15973);

return statearr_16059;
})();
var statearr_16060_17888 = state_16035__$1;
(statearr_16060_17888[(2)] = null);

(statearr_16060_17888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (13))){
var inst_15999 = (state_16035[(2)]);
var inst_16000 = calc_state();
var inst_15973 = inst_16000;
var state_16035__$1 = (function (){var statearr_16063 = state_16035;
(statearr_16063[(9)] = inst_15973);

(statearr_16063[(17)] = inst_15999);

return statearr_16063;
})();
var statearr_16064_17889 = state_16035__$1;
(statearr_16064_17889[(2)] = null);

(statearr_16064_17889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (22))){
var inst_16029 = (state_16035[(2)]);
var state_16035__$1 = state_16035;
var statearr_16065_17890 = state_16035__$1;
(statearr_16065_17890[(2)] = inst_16029);

(statearr_16065_17890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (6))){
var inst_15986 = (state_16035[(14)]);
var inst_15990 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15986,change);
var state_16035__$1 = state_16035;
var statearr_16067_17891 = state_16035__$1;
(statearr_16067_17891[(2)] = inst_15990);

(statearr_16067_17891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (25))){
var state_16035__$1 = state_16035;
var statearr_16068_17892 = state_16035__$1;
(statearr_16068_17892[(2)] = null);

(statearr_16068_17892[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (17))){
var inst_15978 = (state_16035[(18)]);
var inst_15986 = (state_16035[(14)]);
var inst_16009 = (inst_15978.cljs$core$IFn$_invoke$arity$1 ? inst_15978.cljs$core$IFn$_invoke$arity$1(inst_15986) : inst_15978.call(null, inst_15986));
var inst_16010 = cljs.core.not(inst_16009);
var state_16035__$1 = state_16035;
var statearr_16069_17893 = state_16035__$1;
(statearr_16069_17893[(2)] = inst_16010);

(statearr_16069_17893[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (3))){
var inst_16033 = (state_16035[(2)]);
var state_16035__$1 = state_16035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16035__$1,inst_16033);
} else {
if((state_val_16036 === (12))){
var state_16035__$1 = state_16035;
var statearr_16070_17894 = state_16035__$1;
(statearr_16070_17894[(2)] = null);

(statearr_16070_17894[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (2))){
var inst_15973 = (state_16035[(9)]);
var inst_15976 = (state_16035[(12)]);
var inst_15976__$1 = cljs.core.__destructure_map(inst_15973);
var inst_15977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15976__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15976__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15976__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16035__$1 = (function (){var statearr_16074 = state_16035;
(statearr_16074[(15)] = inst_15977);

(statearr_16074[(18)] = inst_15978);

(statearr_16074[(12)] = inst_15976__$1);

return statearr_16074;
})();
return cljs.core.async.ioc_alts_BANG_(state_16035__$1,(4),inst_15979);
} else {
if((state_val_16036 === (23))){
var inst_16020 = (state_16035[(2)]);
var state_16035__$1 = state_16035;
if(cljs.core.truth_(inst_16020)){
var statearr_16075_17895 = state_16035__$1;
(statearr_16075_17895[(1)] = (24));

} else {
var statearr_16076_17896 = state_16035__$1;
(statearr_16076_17896[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (19))){
var inst_16013 = (state_16035[(2)]);
var state_16035__$1 = state_16035;
var statearr_16077_17897 = state_16035__$1;
(statearr_16077_17897[(2)] = inst_16013);

(statearr_16077_17897[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (11))){
var inst_15986 = (state_16035[(14)]);
var inst_15996 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15986);
var state_16035__$1 = state_16035;
var statearr_16078_17898 = state_16035__$1;
(statearr_16078_17898[(2)] = inst_15996);

(statearr_16078_17898[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (9))){
var inst_15977 = (state_16035[(15)]);
var inst_16003 = (state_16035[(19)]);
var inst_15986 = (state_16035[(14)]);
var inst_16003__$1 = (inst_15977.cljs$core$IFn$_invoke$arity$1 ? inst_15977.cljs$core$IFn$_invoke$arity$1(inst_15986) : inst_15977.call(null, inst_15986));
var state_16035__$1 = (function (){var statearr_16080 = state_16035;
(statearr_16080[(19)] = inst_16003__$1);

return statearr_16080;
})();
if(cljs.core.truth_(inst_16003__$1)){
var statearr_16081_17900 = state_16035__$1;
(statearr_16081_17900[(1)] = (14));

} else {
var statearr_16082_17901 = state_16035__$1;
(statearr_16082_17901[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (5))){
var inst_15987 = (state_16035[(13)]);
var state_16035__$1 = state_16035;
var statearr_16083_17903 = state_16035__$1;
(statearr_16083_17903[(2)] = inst_15987);

(statearr_16083_17903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (14))){
var inst_16003 = (state_16035[(19)]);
var state_16035__$1 = state_16035;
var statearr_16084_17908 = state_16035__$1;
(statearr_16084_17908[(2)] = inst_16003);

(statearr_16084_17908[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (26))){
var inst_16025 = (state_16035[(2)]);
var state_16035__$1 = state_16035;
var statearr_16085_17909 = state_16035__$1;
(statearr_16085_17909[(2)] = inst_16025);

(statearr_16085_17909[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (16))){
var inst_16015 = (state_16035[(2)]);
var state_16035__$1 = state_16035;
if(cljs.core.truth_(inst_16015)){
var statearr_16086_17910 = state_16035__$1;
(statearr_16086_17910[(1)] = (20));

} else {
var statearr_16087_17911 = state_16035__$1;
(statearr_16087_17911[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (10))){
var inst_16031 = (state_16035[(2)]);
var state_16035__$1 = state_16035;
var statearr_16091_17912 = state_16035__$1;
(statearr_16091_17912[(2)] = inst_16031);

(statearr_16091_17912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (18))){
var inst_16007 = (state_16035[(16)]);
var state_16035__$1 = state_16035;
var statearr_16092_17913 = state_16035__$1;
(statearr_16092_17913[(2)] = inst_16007);

(statearr_16092_17913[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16036 === (8))){
var inst_15985 = (state_16035[(7)]);
var inst_15994 = (inst_15985 == null);
var state_16035__$1 = state_16035;
if(cljs.core.truth_(inst_15994)){
var statearr_16093_17916 = state_16035__$1;
(statearr_16093_17916[(1)] = (11));

} else {
var statearr_16095_17917 = state_16035__$1;
(statearr_16095_17917[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14377__auto__ = null;
var cljs$core$async$mix_$_state_machine__14377__auto____0 = (function (){
var statearr_16112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16112[(0)] = cljs$core$async$mix_$_state_machine__14377__auto__);

(statearr_16112[(1)] = (1));

return statearr_16112;
});
var cljs$core$async$mix_$_state_machine__14377__auto____1 = (function (state_16035){
while(true){
var ret_value__14378__auto__ = (function (){try{while(true){
var result__14379__auto__ = switch__14376__auto__(state_16035);
if(cljs.core.keyword_identical_QMARK_(result__14379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14379__auto__;
}
break;
}
}catch (e16113){var ex__14380__auto__ = e16113;
var statearr_16114_17919 = state_16035;
(statearr_16114_17919[(2)] = ex__14380__auto__);


if(cljs.core.seq((state_16035[(4)]))){
var statearr_16115_17921 = state_16035;
(statearr_16115_17921[(1)] = cljs.core.first((state_16035[(4)])));

} else {
throw ex__14380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17922 = state_16035;
state_16035 = G__17922;
continue;
} else {
return ret_value__14378__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14377__auto__ = function(state_16035){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14377__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14377__auto____1.call(this,state_16035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14377__auto____0;
cljs$core$async$mix_$_state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14377__auto____1;
return cljs$core$async$mix_$_state_machine__14377__auto__;
})()
})();
var state__14598__auto__ = (function (){var statearr_16122 = f__14596__auto__();
(statearr_16122[(6)] = c__14595__auto___17873);

return statearr_16122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14598__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17923 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17923(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17924 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17924(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17929 = (function() {
var G__17930 = null;
var G__17930__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17930__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17930 = function(p,v){
switch(arguments.length){
case 1:
return G__17930__1.call(this,p);
case 2:
return G__17930__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17930.cljs$core$IFn$_invoke$arity$1 = G__17930__1;
G__17930.cljs$core$IFn$_invoke$arity$2 = G__17930__2;
return G__17930;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16173 = arguments.length;
switch (G__16173) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17929(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17929(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16223 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16224){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16224 = meta16224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16225,meta16224__$1){
var self__ = this;
var _16225__$1 = this;
return (new cljs.core.async.t_cljs$core$async16223(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16224__$1));
}));

(cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16225){
var self__ = this;
var _16225__$1 = this;
return self__.meta16224;
}));

(cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16223.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16223.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16224","meta16224",-1240340960,null)], null);
}));

(cljs.core.async.t_cljs$core$async16223.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16223");

(cljs.core.async.t_cljs$core$async16223.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16223");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16223.
 */
cljs.core.async.__GT_t_cljs$core$async16223 = (function cljs$core$async$__GT_t_cljs$core$async16223(ch,topic_fn,buf_fn,mults,ensure_mult,meta16224){
return (new cljs.core.async.t_cljs$core$async16223(ch,topic_fn,buf_fn,mults,ensure_mult,meta16224));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16201 = arguments.length;
switch (G__16201) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16191_SHARP_){
if(cljs.core.truth_((p1__16191_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16191_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16191_SHARP_.call(null, topic)))){
return p1__16191_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16191_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16223(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14595__auto___17979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14596__auto__ = (function (){var switch__14376__auto__ = (function (state_16307){
var state_val_16308 = (state_16307[(1)]);
if((state_val_16308 === (7))){
var inst_16303 = (state_16307[(2)]);
var state_16307__$1 = state_16307;
var statearr_16312_17983 = state_16307__$1;
(statearr_16312_17983[(2)] = inst_16303);

(statearr_16312_17983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (20))){
var state_16307__$1 = state_16307;
var statearr_16313_17984 = state_16307__$1;
(statearr_16313_17984[(2)] = null);

(statearr_16313_17984[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (1))){
var state_16307__$1 = state_16307;
var statearr_16314_17987 = state_16307__$1;
(statearr_16314_17987[(2)] = null);

(statearr_16314_17987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (24))){
var inst_16286 = (state_16307[(7)]);
var inst_16295 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16286);
var state_16307__$1 = state_16307;
var statearr_16315_17988 = state_16307__$1;
(statearr_16315_17988[(2)] = inst_16295);

(statearr_16315_17988[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (4))){
var inst_16236 = (state_16307[(8)]);
var inst_16236__$1 = (state_16307[(2)]);
var inst_16237 = (inst_16236__$1 == null);
var state_16307__$1 = (function (){var statearr_16316 = state_16307;
(statearr_16316[(8)] = inst_16236__$1);

return statearr_16316;
})();
if(cljs.core.truth_(inst_16237)){
var statearr_16317_17989 = state_16307__$1;
(statearr_16317_17989[(1)] = (5));

} else {
var statearr_16318_17990 = state_16307__$1;
(statearr_16318_17990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (15))){
var inst_16280 = (state_16307[(2)]);
var state_16307__$1 = state_16307;
var statearr_16320_17992 = state_16307__$1;
(statearr_16320_17992[(2)] = inst_16280);

(statearr_16320_17992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (21))){
var inst_16300 = (state_16307[(2)]);
var state_16307__$1 = (function (){var statearr_16321 = state_16307;
(statearr_16321[(9)] = inst_16300);

return statearr_16321;
})();
var statearr_16322_17993 = state_16307__$1;
(statearr_16322_17993[(2)] = null);

(statearr_16322_17993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (13))){
var inst_16261 = (state_16307[(10)]);
var inst_16263 = cljs.core.chunked_seq_QMARK_(inst_16261);
var state_16307__$1 = state_16307;
if(inst_16263){
var statearr_16323_17994 = state_16307__$1;
(statearr_16323_17994[(1)] = (16));

} else {
var statearr_16324_17995 = state_16307__$1;
(statearr_16324_17995[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (22))){
var inst_16292 = (state_16307[(2)]);
var state_16307__$1 = state_16307;
if(cljs.core.truth_(inst_16292)){
var statearr_16329_17996 = state_16307__$1;
(statearr_16329_17996[(1)] = (23));

} else {
var statearr_16332_17997 = state_16307__$1;
(statearr_16332_17997[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (6))){
var inst_16288 = (state_16307[(11)]);
var inst_16286 = (state_16307[(7)]);
var inst_16236 = (state_16307[(8)]);
var inst_16286__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16236) : topic_fn.call(null, inst_16236));
var inst_16287 = cljs.core.deref(mults);
var inst_16288__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16287,inst_16286__$1);
var state_16307__$1 = (function (){var statearr_16333 = state_16307;
(statearr_16333[(11)] = inst_16288__$1);

(statearr_16333[(7)] = inst_16286__$1);

return statearr_16333;
})();
if(cljs.core.truth_(inst_16288__$1)){
var statearr_16334_17998 = state_16307__$1;
(statearr_16334_17998[(1)] = (19));

} else {
var statearr_16335_17999 = state_16307__$1;
(statearr_16335_17999[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (25))){
var inst_16297 = (state_16307[(2)]);
var state_16307__$1 = state_16307;
var statearr_16341_18000 = state_16307__$1;
(statearr_16341_18000[(2)] = inst_16297);

(statearr_16341_18000[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (17))){
var inst_16261 = (state_16307[(10)]);
var inst_16270 = cljs.core.first(inst_16261);
var inst_16271 = cljs.core.async.muxch_STAR_(inst_16270);
var inst_16273 = cljs.core.async.close_BANG_(inst_16271);
var inst_16274 = cljs.core.next(inst_16261);
var inst_16246 = inst_16274;
var inst_16247 = null;
var inst_16248 = (0);
var inst_16249 = (0);
var state_16307__$1 = (function (){var statearr_16344 = state_16307;
(statearr_16344[(12)] = inst_16246);

(statearr_16344[(13)] = inst_16273);

(statearr_16344[(14)] = inst_16247);

(statearr_16344[(15)] = inst_16248);

(statearr_16344[(16)] = inst_16249);

return statearr_16344;
})();
var statearr_16345_18004 = state_16307__$1;
(statearr_16345_18004[(2)] = null);

(statearr_16345_18004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (3))){
var inst_16305 = (state_16307[(2)]);
var state_16307__$1 = state_16307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16307__$1,inst_16305);
} else {
if((state_val_16308 === (12))){
var inst_16282 = (state_16307[(2)]);
var state_16307__$1 = state_16307;
var statearr_16346_18005 = state_16307__$1;
(statearr_16346_18005[(2)] = inst_16282);

(statearr_16346_18005[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (2))){
var state_16307__$1 = state_16307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16307__$1,(4),ch);
} else {
if((state_val_16308 === (23))){
var state_16307__$1 = state_16307;
var statearr_16347_18006 = state_16307__$1;
(statearr_16347_18006[(2)] = null);

(statearr_16347_18006[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (19))){
var inst_16288 = (state_16307[(11)]);
var inst_16236 = (state_16307[(8)]);
var inst_16290 = cljs.core.async.muxch_STAR_(inst_16288);
var state_16307__$1 = state_16307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16307__$1,(22),inst_16290,inst_16236);
} else {
if((state_val_16308 === (11))){
var inst_16246 = (state_16307[(12)]);
var inst_16261 = (state_16307[(10)]);
var inst_16261__$1 = cljs.core.seq(inst_16246);
var state_16307__$1 = (function (){var statearr_16356 = state_16307;
(statearr_16356[(10)] = inst_16261__$1);

return statearr_16356;
})();
if(inst_16261__$1){
var statearr_16357_18010 = state_16307__$1;
(statearr_16357_18010[(1)] = (13));

} else {
var statearr_16358_18011 = state_16307__$1;
(statearr_16358_18011[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (9))){
var inst_16284 = (state_16307[(2)]);
var state_16307__$1 = state_16307;
var statearr_16359_18012 = state_16307__$1;
(statearr_16359_18012[(2)] = inst_16284);

(statearr_16359_18012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (5))){
var inst_16243 = cljs.core.deref(mults);
var inst_16244 = cljs.core.vals(inst_16243);
var inst_16245 = cljs.core.seq(inst_16244);
var inst_16246 = inst_16245;
var inst_16247 = null;
var inst_16248 = (0);
var inst_16249 = (0);
var state_16307__$1 = (function (){var statearr_16360 = state_16307;
(statearr_16360[(12)] = inst_16246);

(statearr_16360[(14)] = inst_16247);

(statearr_16360[(15)] = inst_16248);

(statearr_16360[(16)] = inst_16249);

return statearr_16360;
})();
var statearr_16361_18013 = state_16307__$1;
(statearr_16361_18013[(2)] = null);

(statearr_16361_18013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (14))){
var state_16307__$1 = state_16307;
var statearr_16365_18014 = state_16307__$1;
(statearr_16365_18014[(2)] = null);

(statearr_16365_18014[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (16))){
var inst_16261 = (state_16307[(10)]);
var inst_16265 = cljs.core.chunk_first(inst_16261);
var inst_16266 = cljs.core.chunk_rest(inst_16261);
var inst_16267 = cljs.core.count(inst_16265);
var inst_16246 = inst_16266;
var inst_16247 = inst_16265;
var inst_16248 = inst_16267;
var inst_16249 = (0);
var state_16307__$1 = (function (){var statearr_16371 = state_16307;
(statearr_16371[(12)] = inst_16246);

(statearr_16371[(14)] = inst_16247);

(statearr_16371[(15)] = inst_16248);

(statearr_16371[(16)] = inst_16249);

return statearr_16371;
})();
var statearr_16372_18015 = state_16307__$1;
(statearr_16372_18015[(2)] = null);

(statearr_16372_18015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (10))){
var inst_16246 = (state_16307[(12)]);
var inst_16247 = (state_16307[(14)]);
var inst_16248 = (state_16307[(15)]);
var inst_16249 = (state_16307[(16)]);
var inst_16255 = cljs.core._nth(inst_16247,inst_16249);
var inst_16256 = cljs.core.async.muxch_STAR_(inst_16255);
var inst_16257 = cljs.core.async.close_BANG_(inst_16256);
var inst_16258 = (inst_16249 + (1));
var tmp16362 = inst_16246;
var tmp16363 = inst_16247;
var tmp16364 = inst_16248;
var inst_16246__$1 = tmp16362;
var inst_16247__$1 = tmp16363;
var inst_16248__$1 = tmp16364;
var inst_16249__$1 = inst_16258;
var state_16307__$1 = (function (){var statearr_16373 = state_16307;
(statearr_16373[(12)] = inst_16246__$1);

(statearr_16373[(17)] = inst_16257);

(statearr_16373[(14)] = inst_16247__$1);

(statearr_16373[(15)] = inst_16248__$1);

(statearr_16373[(16)] = inst_16249__$1);

return statearr_16373;
})();
var statearr_16374_18016 = state_16307__$1;
(statearr_16374_18016[(2)] = null);

(statearr_16374_18016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (18))){
var inst_16277 = (state_16307[(2)]);
var state_16307__$1 = state_16307;
var statearr_16375_18017 = state_16307__$1;
(statearr_16375_18017[(2)] = inst_16277);

(statearr_16375_18017[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (8))){
var inst_16248 = (state_16307[(15)]);
var inst_16249 = (state_16307[(16)]);
var inst_16252 = (inst_16249 < inst_16248);
var inst_16253 = inst_16252;
var state_16307__$1 = state_16307;
if(cljs.core.truth_(inst_16253)){
var statearr_16376_18019 = state_16307__$1;
(statearr_16376_18019[(1)] = (10));

} else {
var statearr_16377_18023 = state_16307__$1;
(statearr_16377_18023[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14377__auto__ = null;
var cljs$core$async$state_machine__14377__auto____0 = (function (){
var statearr_16378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16378[(0)] = cljs$core$async$state_machine__14377__auto__);

(statearr_16378[(1)] = (1));

return statearr_16378;
});
var cljs$core$async$state_machine__14377__auto____1 = (function (state_16307){
while(true){
var ret_value__14378__auto__ = (function (){try{while(true){
var result__14379__auto__ = switch__14376__auto__(state_16307);
if(cljs.core.keyword_identical_QMARK_(result__14379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14379__auto__;
}
break;
}
}catch (e16379){var ex__14380__auto__ = e16379;
var statearr_16380_18024 = state_16307;
(statearr_16380_18024[(2)] = ex__14380__auto__);


if(cljs.core.seq((state_16307[(4)]))){
var statearr_16381_18025 = state_16307;
(statearr_16381_18025[(1)] = cljs.core.first((state_16307[(4)])));

} else {
throw ex__14380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18026 = state_16307;
state_16307 = G__18026;
continue;
} else {
return ret_value__14378__auto__;
}
break;
}
});
cljs$core$async$state_machine__14377__auto__ = function(state_16307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14377__auto____1.call(this,state_16307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14377__auto____0;
cljs$core$async$state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14377__auto____1;
return cljs$core$async$state_machine__14377__auto__;
})()
})();
var state__14598__auto__ = (function (){var statearr_16384 = f__14596__auto__();
(statearr_16384[(6)] = c__14595__auto___17979);

return statearr_16384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14598__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16386 = arguments.length;
switch (G__16386) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16390 = arguments.length;
switch (G__16390) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16393 = arguments.length;
switch (G__16393) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14595__auto___18030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14596__auto__ = (function (){var switch__14376__auto__ = (function (state_16440){
var state_val_16441 = (state_16440[(1)]);
if((state_val_16441 === (7))){
var state_16440__$1 = state_16440;
var statearr_16442_18031 = state_16440__$1;
(statearr_16442_18031[(2)] = null);

(statearr_16442_18031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (1))){
var state_16440__$1 = state_16440;
var statearr_16443_18032 = state_16440__$1;
(statearr_16443_18032[(2)] = null);

(statearr_16443_18032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (4))){
var inst_16397 = (state_16440[(7)]);
var inst_16398 = (state_16440[(8)]);
var inst_16400 = (inst_16398 < inst_16397);
var state_16440__$1 = state_16440;
if(cljs.core.truth_(inst_16400)){
var statearr_16444_18033 = state_16440__$1;
(statearr_16444_18033[(1)] = (6));

} else {
var statearr_16445_18034 = state_16440__$1;
(statearr_16445_18034[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (15))){
var inst_16426 = (state_16440[(9)]);
var inst_16431 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16426);
var state_16440__$1 = state_16440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16440__$1,(17),out,inst_16431);
} else {
if((state_val_16441 === (13))){
var inst_16426 = (state_16440[(9)]);
var inst_16426__$1 = (state_16440[(2)]);
var inst_16427 = cljs.core.some(cljs.core.nil_QMARK_,inst_16426__$1);
var state_16440__$1 = (function (){var statearr_16446 = state_16440;
(statearr_16446[(9)] = inst_16426__$1);

return statearr_16446;
})();
if(cljs.core.truth_(inst_16427)){
var statearr_16447_18035 = state_16440__$1;
(statearr_16447_18035[(1)] = (14));

} else {
var statearr_16448_18036 = state_16440__$1;
(statearr_16448_18036[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (6))){
var state_16440__$1 = state_16440;
var statearr_16451_18037 = state_16440__$1;
(statearr_16451_18037[(2)] = null);

(statearr_16451_18037[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (17))){
var inst_16433 = (state_16440[(2)]);
var state_16440__$1 = (function (){var statearr_16460 = state_16440;
(statearr_16460[(10)] = inst_16433);

return statearr_16460;
})();
var statearr_16461_18038 = state_16440__$1;
(statearr_16461_18038[(2)] = null);

(statearr_16461_18038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (3))){
var inst_16438 = (state_16440[(2)]);
var state_16440__$1 = state_16440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16440__$1,inst_16438);
} else {
if((state_val_16441 === (12))){
var _ = (function (){var statearr_16466 = state_16440;
(statearr_16466[(4)] = cljs.core.rest((state_16440[(4)])));

return statearr_16466;
})();
var state_16440__$1 = state_16440;
var ex16458 = (state_16440__$1[(2)]);
var statearr_16467_18039 = state_16440__$1;
(statearr_16467_18039[(5)] = ex16458);


if((ex16458 instanceof Object)){
var statearr_16468_18040 = state_16440__$1;
(statearr_16468_18040[(1)] = (11));

(statearr_16468_18040[(5)] = null);

} else {
throw ex16458;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (2))){
var inst_16396 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16397 = cnt;
var inst_16398 = (0);
var state_16440__$1 = (function (){var statearr_16474 = state_16440;
(statearr_16474[(11)] = inst_16396);

(statearr_16474[(7)] = inst_16397);

(statearr_16474[(8)] = inst_16398);

return statearr_16474;
})();
var statearr_16475_18041 = state_16440__$1;
(statearr_16475_18041[(2)] = null);

(statearr_16475_18041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (11))){
var inst_16404 = (state_16440[(2)]);
var inst_16405 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16440__$1 = (function (){var statearr_16478 = state_16440;
(statearr_16478[(12)] = inst_16404);

return statearr_16478;
})();
var statearr_16479_18044 = state_16440__$1;
(statearr_16479_18044[(2)] = inst_16405);

(statearr_16479_18044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (9))){
var inst_16398 = (state_16440[(8)]);
var _ = (function (){var statearr_16480 = state_16440;
(statearr_16480[(4)] = cljs.core.cons((12),(state_16440[(4)])));

return statearr_16480;
})();
var inst_16412 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16398) : chs__$1.call(null, inst_16398));
var inst_16413 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16398) : done.call(null, inst_16398));
var inst_16414 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16412,inst_16413);
var ___$1 = (function (){var statearr_16481 = state_16440;
(statearr_16481[(4)] = cljs.core.rest((state_16440[(4)])));

return statearr_16481;
})();
var state_16440__$1 = state_16440;
var statearr_16483_18045 = state_16440__$1;
(statearr_16483_18045[(2)] = inst_16414);

(statearr_16483_18045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (5))){
var inst_16424 = (state_16440[(2)]);
var state_16440__$1 = (function (){var statearr_16484 = state_16440;
(statearr_16484[(13)] = inst_16424);

return statearr_16484;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16440__$1,(13),dchan);
} else {
if((state_val_16441 === (14))){
var inst_16429 = cljs.core.async.close_BANG_(out);
var state_16440__$1 = state_16440;
var statearr_16485_18047 = state_16440__$1;
(statearr_16485_18047[(2)] = inst_16429);

(statearr_16485_18047[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (16))){
var inst_16436 = (state_16440[(2)]);
var state_16440__$1 = state_16440;
var statearr_16490_18048 = state_16440__$1;
(statearr_16490_18048[(2)] = inst_16436);

(statearr_16490_18048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (10))){
var inst_16398 = (state_16440[(8)]);
var inst_16417 = (state_16440[(2)]);
var inst_16418 = (inst_16398 + (1));
var inst_16398__$1 = inst_16418;
var state_16440__$1 = (function (){var statearr_16500 = state_16440;
(statearr_16500[(14)] = inst_16417);

(statearr_16500[(8)] = inst_16398__$1);

return statearr_16500;
})();
var statearr_16501_18049 = state_16440__$1;
(statearr_16501_18049[(2)] = null);

(statearr_16501_18049[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (8))){
var inst_16422 = (state_16440[(2)]);
var state_16440__$1 = state_16440;
var statearr_16506_18050 = state_16440__$1;
(statearr_16506_18050[(2)] = inst_16422);

(statearr_16506_18050[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14377__auto__ = null;
var cljs$core$async$state_machine__14377__auto____0 = (function (){
var statearr_16508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16508[(0)] = cljs$core$async$state_machine__14377__auto__);

(statearr_16508[(1)] = (1));

return statearr_16508;
});
var cljs$core$async$state_machine__14377__auto____1 = (function (state_16440){
while(true){
var ret_value__14378__auto__ = (function (){try{while(true){
var result__14379__auto__ = switch__14376__auto__(state_16440);
if(cljs.core.keyword_identical_QMARK_(result__14379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14379__auto__;
}
break;
}
}catch (e16509){var ex__14380__auto__ = e16509;
var statearr_16510_18051 = state_16440;
(statearr_16510_18051[(2)] = ex__14380__auto__);


if(cljs.core.seq((state_16440[(4)]))){
var statearr_16511_18052 = state_16440;
(statearr_16511_18052[(1)] = cljs.core.first((state_16440[(4)])));

} else {
throw ex__14380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18053 = state_16440;
state_16440 = G__18053;
continue;
} else {
return ret_value__14378__auto__;
}
break;
}
});
cljs$core$async$state_machine__14377__auto__ = function(state_16440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14377__auto____1.call(this,state_16440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14377__auto____0;
cljs$core$async$state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14377__auto____1;
return cljs$core$async$state_machine__14377__auto__;
})()
})();
var state__14598__auto__ = (function (){var statearr_16513 = f__14596__auto__();
(statearr_16513[(6)] = c__14595__auto___18030);

return statearr_16513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14598__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16521 = arguments.length;
switch (G__16521) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14595__auto___18063 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14596__auto__ = (function (){var switch__14376__auto__ = (function (state_16554){
var state_val_16555 = (state_16554[(1)]);
if((state_val_16555 === (7))){
var inst_16533 = (state_16554[(7)]);
var inst_16532 = (state_16554[(8)]);
var inst_16532__$1 = (state_16554[(2)]);
var inst_16533__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16532__$1,(0),null);
var inst_16534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16532__$1,(1),null);
var inst_16535 = (inst_16533__$1 == null);
var state_16554__$1 = (function (){var statearr_16558 = state_16554;
(statearr_16558[(7)] = inst_16533__$1);

(statearr_16558[(8)] = inst_16532__$1);

(statearr_16558[(9)] = inst_16534);

return statearr_16558;
})();
if(cljs.core.truth_(inst_16535)){
var statearr_16560_18067 = state_16554__$1;
(statearr_16560_18067[(1)] = (8));

} else {
var statearr_16561_18068 = state_16554__$1;
(statearr_16561_18068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16555 === (1))){
var inst_16522 = cljs.core.vec(chs);
var inst_16523 = inst_16522;
var state_16554__$1 = (function (){var statearr_16562 = state_16554;
(statearr_16562[(10)] = inst_16523);

return statearr_16562;
})();
var statearr_16563_18069 = state_16554__$1;
(statearr_16563_18069[(2)] = null);

(statearr_16563_18069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16555 === (4))){
var inst_16523 = (state_16554[(10)]);
var state_16554__$1 = state_16554;
return cljs.core.async.ioc_alts_BANG_(state_16554__$1,(7),inst_16523);
} else {
if((state_val_16555 === (6))){
var inst_16550 = (state_16554[(2)]);
var state_16554__$1 = state_16554;
var statearr_16565_18070 = state_16554__$1;
(statearr_16565_18070[(2)] = inst_16550);

(statearr_16565_18070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16555 === (3))){
var inst_16552 = (state_16554[(2)]);
var state_16554__$1 = state_16554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16554__$1,inst_16552);
} else {
if((state_val_16555 === (2))){
var inst_16523 = (state_16554[(10)]);
var inst_16525 = cljs.core.count(inst_16523);
var inst_16526 = (inst_16525 > (0));
var state_16554__$1 = state_16554;
if(cljs.core.truth_(inst_16526)){
var statearr_16569_18071 = state_16554__$1;
(statearr_16569_18071[(1)] = (4));

} else {
var statearr_16572_18072 = state_16554__$1;
(statearr_16572_18072[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16555 === (11))){
var inst_16523 = (state_16554[(10)]);
var inst_16543 = (state_16554[(2)]);
var tmp16566 = inst_16523;
var inst_16523__$1 = tmp16566;
var state_16554__$1 = (function (){var statearr_16574 = state_16554;
(statearr_16574[(10)] = inst_16523__$1);

(statearr_16574[(11)] = inst_16543);

return statearr_16574;
})();
var statearr_16575_18073 = state_16554__$1;
(statearr_16575_18073[(2)] = null);

(statearr_16575_18073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16555 === (9))){
var inst_16533 = (state_16554[(7)]);
var state_16554__$1 = state_16554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16554__$1,(11),out,inst_16533);
} else {
if((state_val_16555 === (5))){
var inst_16548 = cljs.core.async.close_BANG_(out);
var state_16554__$1 = state_16554;
var statearr_16578_18074 = state_16554__$1;
(statearr_16578_18074[(2)] = inst_16548);

(statearr_16578_18074[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16555 === (10))){
var inst_16546 = (state_16554[(2)]);
var state_16554__$1 = state_16554;
var statearr_16581_18075 = state_16554__$1;
(statearr_16581_18075[(2)] = inst_16546);

(statearr_16581_18075[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16555 === (8))){
var inst_16533 = (state_16554[(7)]);
var inst_16532 = (state_16554[(8)]);
var inst_16534 = (state_16554[(9)]);
var inst_16523 = (state_16554[(10)]);
var inst_16538 = (function (){var cs = inst_16523;
var vec__16528 = inst_16532;
var v = inst_16533;
var c = inst_16534;
return (function (p1__16519_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16519_SHARP_);
});
})();
var inst_16539 = cljs.core.filterv(inst_16538,inst_16523);
var inst_16523__$1 = inst_16539;
var state_16554__$1 = (function (){var statearr_16582 = state_16554;
(statearr_16582[(10)] = inst_16523__$1);

return statearr_16582;
})();
var statearr_16583_18076 = state_16554__$1;
(statearr_16583_18076[(2)] = null);

(statearr_16583_18076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14377__auto__ = null;
var cljs$core$async$state_machine__14377__auto____0 = (function (){
var statearr_16585 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16585[(0)] = cljs$core$async$state_machine__14377__auto__);

(statearr_16585[(1)] = (1));

return statearr_16585;
});
var cljs$core$async$state_machine__14377__auto____1 = (function (state_16554){
while(true){
var ret_value__14378__auto__ = (function (){try{while(true){
var result__14379__auto__ = switch__14376__auto__(state_16554);
if(cljs.core.keyword_identical_QMARK_(result__14379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14379__auto__;
}
break;
}
}catch (e16586){var ex__14380__auto__ = e16586;
var statearr_16587_18077 = state_16554;
(statearr_16587_18077[(2)] = ex__14380__auto__);


if(cljs.core.seq((state_16554[(4)]))){
var statearr_16588_18078 = state_16554;
(statearr_16588_18078[(1)] = cljs.core.first((state_16554[(4)])));

} else {
throw ex__14380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18079 = state_16554;
state_16554 = G__18079;
continue;
} else {
return ret_value__14378__auto__;
}
break;
}
});
cljs$core$async$state_machine__14377__auto__ = function(state_16554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14377__auto____1.call(this,state_16554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14377__auto____0;
cljs$core$async$state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14377__auto____1;
return cljs$core$async$state_machine__14377__auto__;
})()
})();
var state__14598__auto__ = (function (){var statearr_16592 = f__14596__auto__();
(statearr_16592[(6)] = c__14595__auto___18063);

return statearr_16592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14598__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16596 = arguments.length;
switch (G__16596) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14595__auto___18081 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14596__auto__ = (function (){var switch__14376__auto__ = (function (state_16625){
var state_val_16626 = (state_16625[(1)]);
if((state_val_16626 === (7))){
var inst_16607 = (state_16625[(7)]);
var inst_16607__$1 = (state_16625[(2)]);
var inst_16608 = (inst_16607__$1 == null);
var inst_16609 = cljs.core.not(inst_16608);
var state_16625__$1 = (function (){var statearr_16629 = state_16625;
(statearr_16629[(7)] = inst_16607__$1);

return statearr_16629;
})();
if(inst_16609){
var statearr_16630_18082 = state_16625__$1;
(statearr_16630_18082[(1)] = (8));

} else {
var statearr_16631_18083 = state_16625__$1;
(statearr_16631_18083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16626 === (1))){
var inst_16601 = (0);
var state_16625__$1 = (function (){var statearr_16632 = state_16625;
(statearr_16632[(8)] = inst_16601);

return statearr_16632;
})();
var statearr_16633_18084 = state_16625__$1;
(statearr_16633_18084[(2)] = null);

(statearr_16633_18084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16626 === (4))){
var state_16625__$1 = state_16625;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16625__$1,(7),ch);
} else {
if((state_val_16626 === (6))){
var inst_16620 = (state_16625[(2)]);
var state_16625__$1 = state_16625;
var statearr_16634_18086 = state_16625__$1;
(statearr_16634_18086[(2)] = inst_16620);

(statearr_16634_18086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16626 === (3))){
var inst_16622 = (state_16625[(2)]);
var inst_16623 = cljs.core.async.close_BANG_(out);
var state_16625__$1 = (function (){var statearr_16635 = state_16625;
(statearr_16635[(9)] = inst_16622);

return statearr_16635;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16625__$1,inst_16623);
} else {
if((state_val_16626 === (2))){
var inst_16601 = (state_16625[(8)]);
var inst_16604 = (inst_16601 < n);
var state_16625__$1 = state_16625;
if(cljs.core.truth_(inst_16604)){
var statearr_16640_18088 = state_16625__$1;
(statearr_16640_18088[(1)] = (4));

} else {
var statearr_16641_18089 = state_16625__$1;
(statearr_16641_18089[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16626 === (11))){
var inst_16601 = (state_16625[(8)]);
var inst_16612 = (state_16625[(2)]);
var inst_16613 = (inst_16601 + (1));
var inst_16601__$1 = inst_16613;
var state_16625__$1 = (function (){var statearr_16644 = state_16625;
(statearr_16644[(10)] = inst_16612);

(statearr_16644[(8)] = inst_16601__$1);

return statearr_16644;
})();
var statearr_16645_18090 = state_16625__$1;
(statearr_16645_18090[(2)] = null);

(statearr_16645_18090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16626 === (9))){
var state_16625__$1 = state_16625;
var statearr_16646_18091 = state_16625__$1;
(statearr_16646_18091[(2)] = null);

(statearr_16646_18091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16626 === (5))){
var state_16625__$1 = state_16625;
var statearr_16647_18092 = state_16625__$1;
(statearr_16647_18092[(2)] = null);

(statearr_16647_18092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16626 === (10))){
var inst_16617 = (state_16625[(2)]);
var state_16625__$1 = state_16625;
var statearr_16648_18093 = state_16625__$1;
(statearr_16648_18093[(2)] = inst_16617);

(statearr_16648_18093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16626 === (8))){
var inst_16607 = (state_16625[(7)]);
var state_16625__$1 = state_16625;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16625__$1,(11),out,inst_16607);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14377__auto__ = null;
var cljs$core$async$state_machine__14377__auto____0 = (function (){
var statearr_16650 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16650[(0)] = cljs$core$async$state_machine__14377__auto__);

(statearr_16650[(1)] = (1));

return statearr_16650;
});
var cljs$core$async$state_machine__14377__auto____1 = (function (state_16625){
while(true){
var ret_value__14378__auto__ = (function (){try{while(true){
var result__14379__auto__ = switch__14376__auto__(state_16625);
if(cljs.core.keyword_identical_QMARK_(result__14379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14379__auto__;
}
break;
}
}catch (e16651){var ex__14380__auto__ = e16651;
var statearr_16652_18100 = state_16625;
(statearr_16652_18100[(2)] = ex__14380__auto__);


if(cljs.core.seq((state_16625[(4)]))){
var statearr_16653_18101 = state_16625;
(statearr_16653_18101[(1)] = cljs.core.first((state_16625[(4)])));

} else {
throw ex__14380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18103 = state_16625;
state_16625 = G__18103;
continue;
} else {
return ret_value__14378__auto__;
}
break;
}
});
cljs$core$async$state_machine__14377__auto__ = function(state_16625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14377__auto____1.call(this,state_16625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14377__auto____0;
cljs$core$async$state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14377__auto____1;
return cljs$core$async$state_machine__14377__auto__;
})()
})();
var state__14598__auto__ = (function (){var statearr_16659 = f__14596__auto__();
(statearr_16659[(6)] = c__14595__auto___18081);

return statearr_16659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14598__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16666 = (function (f,ch,meta16662,_,fn1,meta16667){
this.f = f;
this.ch = ch;
this.meta16662 = meta16662;
this._ = _;
this.fn1 = fn1;
this.meta16667 = meta16667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16668,meta16667__$1){
var self__ = this;
var _16668__$1 = this;
return (new cljs.core.async.t_cljs$core$async16666(self__.f,self__.ch,self__.meta16662,self__._,self__.fn1,meta16667__$1));
}));

(cljs.core.async.t_cljs$core$async16666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16668){
var self__ = this;
var _16668__$1 = this;
return self__.meta16667;
}));

(cljs.core.async.t_cljs$core$async16666.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16666.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16666.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16666.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16660_SHARP_){
var G__16671 = (((p1__16660_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16660_SHARP_) : self__.f.call(null, p1__16660_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16671) : f1.call(null, G__16671));
});
}));

(cljs.core.async.t_cljs$core$async16666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16662","meta16662",-1038749007,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16661","cljs.core.async/t_cljs$core$async16661",-1997613336,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16667","meta16667",-1086243593,null)], null);
}));

(cljs.core.async.t_cljs$core$async16666.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16666");

(cljs.core.async.t_cljs$core$async16666.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16666");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16666.
 */
cljs.core.async.__GT_t_cljs$core$async16666 = (function cljs$core$async$__GT_t_cljs$core$async16666(f,ch,meta16662,_,fn1,meta16667){
return (new cljs.core.async.t_cljs$core$async16666(f,ch,meta16662,_,fn1,meta16667));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16661 = (function (f,ch,meta16662){
this.f = f;
this.ch = ch;
this.meta16662 = meta16662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16663,meta16662__$1){
var self__ = this;
var _16663__$1 = this;
return (new cljs.core.async.t_cljs$core$async16661(self__.f,self__.ch,meta16662__$1));
}));

(cljs.core.async.t_cljs$core$async16661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16663){
var self__ = this;
var _16663__$1 = this;
return self__.meta16662;
}));

(cljs.core.async.t_cljs$core$async16661.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16661.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16661.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16661.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16661.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16666(self__.f,self__.ch,self__.meta16662,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16676 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16676) : self__.f.call(null, G__16676));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16661.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16661.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16662","meta16662",-1038749007,null)], null);
}));

(cljs.core.async.t_cljs$core$async16661.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16661");

(cljs.core.async.t_cljs$core$async16661.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16661");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16661.
 */
cljs.core.async.__GT_t_cljs$core$async16661 = (function cljs$core$async$__GT_t_cljs$core$async16661(f,ch,meta16662){
return (new cljs.core.async.t_cljs$core$async16661(f,ch,meta16662));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16661(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16679 = (function (f,ch,meta16680){
this.f = f;
this.ch = ch;
this.meta16680 = meta16680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16681,meta16680__$1){
var self__ = this;
var _16681__$1 = this;
return (new cljs.core.async.t_cljs$core$async16679(self__.f,self__.ch,meta16680__$1));
}));

(cljs.core.async.t_cljs$core$async16679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16681){
var self__ = this;
var _16681__$1 = this;
return self__.meta16680;
}));

(cljs.core.async.t_cljs$core$async16679.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16679.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16679.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16679.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16679.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16679.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16680","meta16680",2083745153,null)], null);
}));

(cljs.core.async.t_cljs$core$async16679.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16679");

(cljs.core.async.t_cljs$core$async16679.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16679");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16679.
 */
cljs.core.async.__GT_t_cljs$core$async16679 = (function cljs$core$async$__GT_t_cljs$core$async16679(f,ch,meta16680){
return (new cljs.core.async.t_cljs$core$async16679(f,ch,meta16680));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16679(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16697 = (function (p,ch,meta16698){
this.p = p;
this.ch = ch;
this.meta16698 = meta16698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16699,meta16698__$1){
var self__ = this;
var _16699__$1 = this;
return (new cljs.core.async.t_cljs$core$async16697(self__.p,self__.ch,meta16698__$1));
}));

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16699){
var self__ = this;
var _16699__$1 = this;
return self__.meta16698;
}));

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16698","meta16698",805224014,null)], null);
}));

(cljs.core.async.t_cljs$core$async16697.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16697");

(cljs.core.async.t_cljs$core$async16697.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16697");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16697.
 */
cljs.core.async.__GT_t_cljs$core$async16697 = (function cljs$core$async$__GT_t_cljs$core$async16697(p,ch,meta16698){
return (new cljs.core.async.t_cljs$core$async16697(p,ch,meta16698));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16697(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16731 = arguments.length;
switch (G__16731) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14595__auto___18114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14596__auto__ = (function (){var switch__14376__auto__ = (function (state_16760){
var state_val_16761 = (state_16760[(1)]);
if((state_val_16761 === (7))){
var inst_16754 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
var statearr_16770_18115 = state_16760__$1;
(statearr_16770_18115[(2)] = inst_16754);

(statearr_16770_18115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (1))){
var state_16760__$1 = state_16760;
var statearr_16772_18116 = state_16760__$1;
(statearr_16772_18116[(2)] = null);

(statearr_16772_18116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (4))){
var inst_16740 = (state_16760[(7)]);
var inst_16740__$1 = (state_16760[(2)]);
var inst_16741 = (inst_16740__$1 == null);
var state_16760__$1 = (function (){var statearr_16776 = state_16760;
(statearr_16776[(7)] = inst_16740__$1);

return statearr_16776;
})();
if(cljs.core.truth_(inst_16741)){
var statearr_16778_18118 = state_16760__$1;
(statearr_16778_18118[(1)] = (5));

} else {
var statearr_16779_18119 = state_16760__$1;
(statearr_16779_18119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (6))){
var inst_16740 = (state_16760[(7)]);
var inst_16745 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16740) : p.call(null, inst_16740));
var state_16760__$1 = state_16760;
if(cljs.core.truth_(inst_16745)){
var statearr_16780_18120 = state_16760__$1;
(statearr_16780_18120[(1)] = (8));

} else {
var statearr_16782_18121 = state_16760__$1;
(statearr_16782_18121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (3))){
var inst_16756 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16760__$1,inst_16756);
} else {
if((state_val_16761 === (2))){
var state_16760__$1 = state_16760;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16760__$1,(4),ch);
} else {
if((state_val_16761 === (11))){
var inst_16748 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
var statearr_16789_18122 = state_16760__$1;
(statearr_16789_18122[(2)] = inst_16748);

(statearr_16789_18122[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (9))){
var state_16760__$1 = state_16760;
var statearr_16790_18123 = state_16760__$1;
(statearr_16790_18123[(2)] = null);

(statearr_16790_18123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (5))){
var inst_16743 = cljs.core.async.close_BANG_(out);
var state_16760__$1 = state_16760;
var statearr_16794_18125 = state_16760__$1;
(statearr_16794_18125[(2)] = inst_16743);

(statearr_16794_18125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (10))){
var inst_16751 = (state_16760[(2)]);
var state_16760__$1 = (function (){var statearr_16795 = state_16760;
(statearr_16795[(8)] = inst_16751);

return statearr_16795;
})();
var statearr_16796_18126 = state_16760__$1;
(statearr_16796_18126[(2)] = null);

(statearr_16796_18126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16761 === (8))){
var inst_16740 = (state_16760[(7)]);
var state_16760__$1 = state_16760;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16760__$1,(11),out,inst_16740);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14377__auto__ = null;
var cljs$core$async$state_machine__14377__auto____0 = (function (){
var statearr_16798 = [null,null,null,null,null,null,null,null,null];
(statearr_16798[(0)] = cljs$core$async$state_machine__14377__auto__);

(statearr_16798[(1)] = (1));

return statearr_16798;
});
var cljs$core$async$state_machine__14377__auto____1 = (function (state_16760){
while(true){
var ret_value__14378__auto__ = (function (){try{while(true){
var result__14379__auto__ = switch__14376__auto__(state_16760);
if(cljs.core.keyword_identical_QMARK_(result__14379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14379__auto__;
}
break;
}
}catch (e16801){var ex__14380__auto__ = e16801;
var statearr_16803_18127 = state_16760;
(statearr_16803_18127[(2)] = ex__14380__auto__);


if(cljs.core.seq((state_16760[(4)]))){
var statearr_16805_18128 = state_16760;
(statearr_16805_18128[(1)] = cljs.core.first((state_16760[(4)])));

} else {
throw ex__14380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18129 = state_16760;
state_16760 = G__18129;
continue;
} else {
return ret_value__14378__auto__;
}
break;
}
});
cljs$core$async$state_machine__14377__auto__ = function(state_16760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14377__auto____1.call(this,state_16760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14377__auto____0;
cljs$core$async$state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14377__auto____1;
return cljs$core$async$state_machine__14377__auto__;
})()
})();
var state__14598__auto__ = (function (){var statearr_16806 = f__14596__auto__();
(statearr_16806[(6)] = c__14595__auto___18114);

return statearr_16806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14598__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16814 = arguments.length;
switch (G__16814) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14596__auto__ = (function (){var switch__14376__auto__ = (function (state_16900){
var state_val_16901 = (state_16900[(1)]);
if((state_val_16901 === (7))){
var inst_16896 = (state_16900[(2)]);
var state_16900__$1 = state_16900;
var statearr_16902_18136 = state_16900__$1;
(statearr_16902_18136[(2)] = inst_16896);

(statearr_16902_18136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (20))){
var inst_16865 = (state_16900[(7)]);
var inst_16876 = (state_16900[(2)]);
var inst_16877 = cljs.core.next(inst_16865);
var inst_16851 = inst_16877;
var inst_16852 = null;
var inst_16853 = (0);
var inst_16854 = (0);
var state_16900__$1 = (function (){var statearr_16907 = state_16900;
(statearr_16907[(8)] = inst_16851);

(statearr_16907[(9)] = inst_16852);

(statearr_16907[(10)] = inst_16853);

(statearr_16907[(11)] = inst_16854);

(statearr_16907[(12)] = inst_16876);

return statearr_16907;
})();
var statearr_16908_18147 = state_16900__$1;
(statearr_16908_18147[(2)] = null);

(statearr_16908_18147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (1))){
var state_16900__$1 = state_16900;
var statearr_16909_18148 = state_16900__$1;
(statearr_16909_18148[(2)] = null);

(statearr_16909_18148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (4))){
var inst_16840 = (state_16900[(13)]);
var inst_16840__$1 = (state_16900[(2)]);
var inst_16841 = (inst_16840__$1 == null);
var state_16900__$1 = (function (){var statearr_16910 = state_16900;
(statearr_16910[(13)] = inst_16840__$1);

return statearr_16910;
})();
if(cljs.core.truth_(inst_16841)){
var statearr_16911_18155 = state_16900__$1;
(statearr_16911_18155[(1)] = (5));

} else {
var statearr_16912_18156 = state_16900__$1;
(statearr_16912_18156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (15))){
var state_16900__$1 = state_16900;
var statearr_16916_18157 = state_16900__$1;
(statearr_16916_18157[(2)] = null);

(statearr_16916_18157[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (21))){
var state_16900__$1 = state_16900;
var statearr_16917_18158 = state_16900__$1;
(statearr_16917_18158[(2)] = null);

(statearr_16917_18158[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (13))){
var inst_16851 = (state_16900[(8)]);
var inst_16852 = (state_16900[(9)]);
var inst_16853 = (state_16900[(10)]);
var inst_16854 = (state_16900[(11)]);
var inst_16861 = (state_16900[(2)]);
var inst_16862 = (inst_16854 + (1));
var tmp16913 = inst_16851;
var tmp16914 = inst_16852;
var tmp16915 = inst_16853;
var inst_16851__$1 = tmp16913;
var inst_16852__$1 = tmp16914;
var inst_16853__$1 = tmp16915;
var inst_16854__$1 = inst_16862;
var state_16900__$1 = (function (){var statearr_16918 = state_16900;
(statearr_16918[(8)] = inst_16851__$1);

(statearr_16918[(9)] = inst_16852__$1);

(statearr_16918[(10)] = inst_16853__$1);

(statearr_16918[(14)] = inst_16861);

(statearr_16918[(11)] = inst_16854__$1);

return statearr_16918;
})();
var statearr_16919_18159 = state_16900__$1;
(statearr_16919_18159[(2)] = null);

(statearr_16919_18159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (22))){
var state_16900__$1 = state_16900;
var statearr_16920_18160 = state_16900__$1;
(statearr_16920_18160[(2)] = null);

(statearr_16920_18160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (6))){
var inst_16840 = (state_16900[(13)]);
var inst_16849 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16840) : f.call(null, inst_16840));
var inst_16850 = cljs.core.seq(inst_16849);
var inst_16851 = inst_16850;
var inst_16852 = null;
var inst_16853 = (0);
var inst_16854 = (0);
var state_16900__$1 = (function (){var statearr_16924 = state_16900;
(statearr_16924[(8)] = inst_16851);

(statearr_16924[(9)] = inst_16852);

(statearr_16924[(10)] = inst_16853);

(statearr_16924[(11)] = inst_16854);

return statearr_16924;
})();
var statearr_16925_18161 = state_16900__$1;
(statearr_16925_18161[(2)] = null);

(statearr_16925_18161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (17))){
var inst_16865 = (state_16900[(7)]);
var inst_16869 = cljs.core.chunk_first(inst_16865);
var inst_16870 = cljs.core.chunk_rest(inst_16865);
var inst_16871 = cljs.core.count(inst_16869);
var inst_16851 = inst_16870;
var inst_16852 = inst_16869;
var inst_16853 = inst_16871;
var inst_16854 = (0);
var state_16900__$1 = (function (){var statearr_16927 = state_16900;
(statearr_16927[(8)] = inst_16851);

(statearr_16927[(9)] = inst_16852);

(statearr_16927[(10)] = inst_16853);

(statearr_16927[(11)] = inst_16854);

return statearr_16927;
})();
var statearr_16928_18162 = state_16900__$1;
(statearr_16928_18162[(2)] = null);

(statearr_16928_18162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (3))){
var inst_16898 = (state_16900[(2)]);
var state_16900__$1 = state_16900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16900__$1,inst_16898);
} else {
if((state_val_16901 === (12))){
var inst_16885 = (state_16900[(2)]);
var state_16900__$1 = state_16900;
var statearr_16929_18170 = state_16900__$1;
(statearr_16929_18170[(2)] = inst_16885);

(statearr_16929_18170[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (2))){
var state_16900__$1 = state_16900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16900__$1,(4),in$);
} else {
if((state_val_16901 === (23))){
var inst_16894 = (state_16900[(2)]);
var state_16900__$1 = state_16900;
var statearr_16931_18175 = state_16900__$1;
(statearr_16931_18175[(2)] = inst_16894);

(statearr_16931_18175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (19))){
var inst_16880 = (state_16900[(2)]);
var state_16900__$1 = state_16900;
var statearr_16932_18176 = state_16900__$1;
(statearr_16932_18176[(2)] = inst_16880);

(statearr_16932_18176[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (11))){
var inst_16865 = (state_16900[(7)]);
var inst_16851 = (state_16900[(8)]);
var inst_16865__$1 = cljs.core.seq(inst_16851);
var state_16900__$1 = (function (){var statearr_16933 = state_16900;
(statearr_16933[(7)] = inst_16865__$1);

return statearr_16933;
})();
if(inst_16865__$1){
var statearr_16935_18180 = state_16900__$1;
(statearr_16935_18180[(1)] = (14));

} else {
var statearr_16936_18181 = state_16900__$1;
(statearr_16936_18181[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (9))){
var inst_16887 = (state_16900[(2)]);
var inst_16888 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16900__$1 = (function (){var statearr_16938 = state_16900;
(statearr_16938[(15)] = inst_16887);

return statearr_16938;
})();
if(cljs.core.truth_(inst_16888)){
var statearr_16939_18186 = state_16900__$1;
(statearr_16939_18186[(1)] = (21));

} else {
var statearr_16941_18187 = state_16900__$1;
(statearr_16941_18187[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (5))){
var inst_16843 = cljs.core.async.close_BANG_(out);
var state_16900__$1 = state_16900;
var statearr_16945_18188 = state_16900__$1;
(statearr_16945_18188[(2)] = inst_16843);

(statearr_16945_18188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (14))){
var inst_16865 = (state_16900[(7)]);
var inst_16867 = cljs.core.chunked_seq_QMARK_(inst_16865);
var state_16900__$1 = state_16900;
if(inst_16867){
var statearr_16951_18189 = state_16900__$1;
(statearr_16951_18189[(1)] = (17));

} else {
var statearr_16952_18191 = state_16900__$1;
(statearr_16952_18191[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (16))){
var inst_16883 = (state_16900[(2)]);
var state_16900__$1 = state_16900;
var statearr_16953_18192 = state_16900__$1;
(statearr_16953_18192[(2)] = inst_16883);

(statearr_16953_18192[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16901 === (10))){
var inst_16852 = (state_16900[(9)]);
var inst_16854 = (state_16900[(11)]);
var inst_16859 = cljs.core._nth(inst_16852,inst_16854);
var state_16900__$1 = state_16900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16900__$1,(13),out,inst_16859);
} else {
if((state_val_16901 === (18))){
var inst_16865 = (state_16900[(7)]);
var inst_16874 = cljs.core.first(inst_16865);
var state_16900__$1 = state_16900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16900__$1,(20),out,inst_16874);
} else {
if((state_val_16901 === (8))){
var inst_16853 = (state_16900[(10)]);
var inst_16854 = (state_16900[(11)]);
var inst_16856 = (inst_16854 < inst_16853);
var inst_16857 = inst_16856;
var state_16900__$1 = state_16900;
if(cljs.core.truth_(inst_16857)){
var statearr_16959_18193 = state_16900__$1;
(statearr_16959_18193[(1)] = (10));

} else {
var statearr_16961_18194 = state_16900__$1;
(statearr_16961_18194[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14377__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14377__auto____0 = (function (){
var statearr_16965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16965[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14377__auto__);

(statearr_16965[(1)] = (1));

return statearr_16965;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14377__auto____1 = (function (state_16900){
while(true){
var ret_value__14378__auto__ = (function (){try{while(true){
var result__14379__auto__ = switch__14376__auto__(state_16900);
if(cljs.core.keyword_identical_QMARK_(result__14379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14379__auto__;
}
break;
}
}catch (e16966){var ex__14380__auto__ = e16966;
var statearr_16970_18195 = state_16900;
(statearr_16970_18195[(2)] = ex__14380__auto__);


if(cljs.core.seq((state_16900[(4)]))){
var statearr_16974_18196 = state_16900;
(statearr_16974_18196[(1)] = cljs.core.first((state_16900[(4)])));

} else {
throw ex__14380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18197 = state_16900;
state_16900 = G__18197;
continue;
} else {
return ret_value__14378__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14377__auto__ = function(state_16900){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14377__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14377__auto____1.call(this,state_16900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14377__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14377__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14377__auto__;
})()
})();
var state__14598__auto__ = (function (){var statearr_16976 = f__14596__auto__();
(statearr_16976[(6)] = c__14595__auto__);

return statearr_16976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14598__auto__);
}));

return c__14595__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16981 = arguments.length;
switch (G__16981) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16994 = arguments.length;
switch (G__16994) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17001 = arguments.length;
switch (G__17001) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14595__auto___18222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14596__auto__ = (function (){var switch__14376__auto__ = (function (state_17036){
var state_val_17037 = (state_17036[(1)]);
if((state_val_17037 === (7))){
var inst_17030 = (state_17036[(2)]);
var state_17036__$1 = state_17036;
var statearr_17042_18223 = state_17036__$1;
(statearr_17042_18223[(2)] = inst_17030);

(statearr_17042_18223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (1))){
var inst_17009 = null;
var state_17036__$1 = (function (){var statearr_17043 = state_17036;
(statearr_17043[(7)] = inst_17009);

return statearr_17043;
})();
var statearr_17045_18224 = state_17036__$1;
(statearr_17045_18224[(2)] = null);

(statearr_17045_18224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (4))){
var inst_17013 = (state_17036[(8)]);
var inst_17013__$1 = (state_17036[(2)]);
var inst_17014 = (inst_17013__$1 == null);
var inst_17015 = cljs.core.not(inst_17014);
var state_17036__$1 = (function (){var statearr_17049 = state_17036;
(statearr_17049[(8)] = inst_17013__$1);

return statearr_17049;
})();
if(inst_17015){
var statearr_17050_18225 = state_17036__$1;
(statearr_17050_18225[(1)] = (5));

} else {
var statearr_17052_18226 = state_17036__$1;
(statearr_17052_18226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (6))){
var state_17036__$1 = state_17036;
var statearr_17056_18227 = state_17036__$1;
(statearr_17056_18227[(2)] = null);

(statearr_17056_18227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (3))){
var inst_17032 = (state_17036[(2)]);
var inst_17033 = cljs.core.async.close_BANG_(out);
var state_17036__$1 = (function (){var statearr_17058 = state_17036;
(statearr_17058[(9)] = inst_17032);

return statearr_17058;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17036__$1,inst_17033);
} else {
if((state_val_17037 === (2))){
var state_17036__$1 = state_17036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17036__$1,(4),ch);
} else {
if((state_val_17037 === (11))){
var inst_17013 = (state_17036[(8)]);
var inst_17023 = (state_17036[(2)]);
var inst_17009 = inst_17013;
var state_17036__$1 = (function (){var statearr_17065 = state_17036;
(statearr_17065[(10)] = inst_17023);

(statearr_17065[(7)] = inst_17009);

return statearr_17065;
})();
var statearr_17066_18228 = state_17036__$1;
(statearr_17066_18228[(2)] = null);

(statearr_17066_18228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (9))){
var inst_17013 = (state_17036[(8)]);
var state_17036__$1 = state_17036;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17036__$1,(11),out,inst_17013);
} else {
if((state_val_17037 === (5))){
var inst_17009 = (state_17036[(7)]);
var inst_17013 = (state_17036[(8)]);
var inst_17017 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17013,inst_17009);
var state_17036__$1 = state_17036;
if(inst_17017){
var statearr_17071_18229 = state_17036__$1;
(statearr_17071_18229[(1)] = (8));

} else {
var statearr_17073_18230 = state_17036__$1;
(statearr_17073_18230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (10))){
var inst_17027 = (state_17036[(2)]);
var state_17036__$1 = state_17036;
var statearr_17074_18231 = state_17036__$1;
(statearr_17074_18231[(2)] = inst_17027);

(statearr_17074_18231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (8))){
var inst_17009 = (state_17036[(7)]);
var tmp17068 = inst_17009;
var inst_17009__$1 = tmp17068;
var state_17036__$1 = (function (){var statearr_17075 = state_17036;
(statearr_17075[(7)] = inst_17009__$1);

return statearr_17075;
})();
var statearr_17077_18232 = state_17036__$1;
(statearr_17077_18232[(2)] = null);

(statearr_17077_18232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14377__auto__ = null;
var cljs$core$async$state_machine__14377__auto____0 = (function (){
var statearr_17081 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17081[(0)] = cljs$core$async$state_machine__14377__auto__);

(statearr_17081[(1)] = (1));

return statearr_17081;
});
var cljs$core$async$state_machine__14377__auto____1 = (function (state_17036){
while(true){
var ret_value__14378__auto__ = (function (){try{while(true){
var result__14379__auto__ = switch__14376__auto__(state_17036);
if(cljs.core.keyword_identical_QMARK_(result__14379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14379__auto__;
}
break;
}
}catch (e17083){var ex__14380__auto__ = e17083;
var statearr_17084_18233 = state_17036;
(statearr_17084_18233[(2)] = ex__14380__auto__);


if(cljs.core.seq((state_17036[(4)]))){
var statearr_17087_18234 = state_17036;
(statearr_17087_18234[(1)] = cljs.core.first((state_17036[(4)])));

} else {
throw ex__14380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18235 = state_17036;
state_17036 = G__18235;
continue;
} else {
return ret_value__14378__auto__;
}
break;
}
});
cljs$core$async$state_machine__14377__auto__ = function(state_17036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14377__auto____1.call(this,state_17036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14377__auto____0;
cljs$core$async$state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14377__auto____1;
return cljs$core$async$state_machine__14377__auto__;
})()
})();
var state__14598__auto__ = (function (){var statearr_17090 = f__14596__auto__();
(statearr_17090[(6)] = c__14595__auto___18222);

return statearr_17090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14598__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17107 = arguments.length;
switch (G__17107) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14595__auto___18238 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14596__auto__ = (function (){var switch__14376__auto__ = (function (state_17158){
var state_val_17159 = (state_17158[(1)]);
if((state_val_17159 === (7))){
var inst_17154 = (state_17158[(2)]);
var state_17158__$1 = state_17158;
var statearr_17160_18255 = state_17158__$1;
(statearr_17160_18255[(2)] = inst_17154);

(statearr_17160_18255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17159 === (1))){
var inst_17121 = (new Array(n));
var inst_17122 = inst_17121;
var inst_17123 = (0);
var state_17158__$1 = (function (){var statearr_17161 = state_17158;
(statearr_17161[(7)] = inst_17122);

(statearr_17161[(8)] = inst_17123);

return statearr_17161;
})();
var statearr_17162_18256 = state_17158__$1;
(statearr_17162_18256[(2)] = null);

(statearr_17162_18256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17159 === (4))){
var inst_17126 = (state_17158[(9)]);
var inst_17126__$1 = (state_17158[(2)]);
var inst_17127 = (inst_17126__$1 == null);
var inst_17128 = cljs.core.not(inst_17127);
var state_17158__$1 = (function (){var statearr_17163 = state_17158;
(statearr_17163[(9)] = inst_17126__$1);

return statearr_17163;
})();
if(inst_17128){
var statearr_17164_18257 = state_17158__$1;
(statearr_17164_18257[(1)] = (5));

} else {
var statearr_17165_18258 = state_17158__$1;
(statearr_17165_18258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17159 === (15))){
var inst_17148 = (state_17158[(2)]);
var state_17158__$1 = state_17158;
var statearr_17168_18260 = state_17158__$1;
(statearr_17168_18260[(2)] = inst_17148);

(statearr_17168_18260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17159 === (13))){
var state_17158__$1 = state_17158;
var statearr_17169_18262 = state_17158__$1;
(statearr_17169_18262[(2)] = null);

(statearr_17169_18262[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17159 === (6))){
var inst_17123 = (state_17158[(8)]);
var inst_17144 = (inst_17123 > (0));
var state_17158__$1 = state_17158;
if(cljs.core.truth_(inst_17144)){
var statearr_17170_18263 = state_17158__$1;
(statearr_17170_18263[(1)] = (12));

} else {
var statearr_17178_18264 = state_17158__$1;
(statearr_17178_18264[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17159 === (3))){
var inst_17156 = (state_17158[(2)]);
var state_17158__$1 = state_17158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17158__$1,inst_17156);
} else {
if((state_val_17159 === (12))){
var inst_17122 = (state_17158[(7)]);
var inst_17146 = cljs.core.vec(inst_17122);
var state_17158__$1 = state_17158;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17158__$1,(15),out,inst_17146);
} else {
if((state_val_17159 === (2))){
var state_17158__$1 = state_17158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17158__$1,(4),ch);
} else {
if((state_val_17159 === (11))){
var inst_17138 = (state_17158[(2)]);
var inst_17139 = (new Array(n));
var inst_17122 = inst_17139;
var inst_17123 = (0);
var state_17158__$1 = (function (){var statearr_17193 = state_17158;
(statearr_17193[(7)] = inst_17122);

(statearr_17193[(8)] = inst_17123);

(statearr_17193[(10)] = inst_17138);

return statearr_17193;
})();
var statearr_17196_18265 = state_17158__$1;
(statearr_17196_18265[(2)] = null);

(statearr_17196_18265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17159 === (9))){
var inst_17122 = (state_17158[(7)]);
var inst_17136 = cljs.core.vec(inst_17122);
var state_17158__$1 = state_17158;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17158__$1,(11),out,inst_17136);
} else {
if((state_val_17159 === (5))){
var inst_17131 = (state_17158[(11)]);
var inst_17126 = (state_17158[(9)]);
var inst_17122 = (state_17158[(7)]);
var inst_17123 = (state_17158[(8)]);
var inst_17130 = (inst_17122[inst_17123] = inst_17126);
var inst_17131__$1 = (inst_17123 + (1));
var inst_17132 = (inst_17131__$1 < n);
var state_17158__$1 = (function (){var statearr_17197 = state_17158;
(statearr_17197[(11)] = inst_17131__$1);

(statearr_17197[(12)] = inst_17130);

return statearr_17197;
})();
if(cljs.core.truth_(inst_17132)){
var statearr_17199_18267 = state_17158__$1;
(statearr_17199_18267[(1)] = (8));

} else {
var statearr_17206_18268 = state_17158__$1;
(statearr_17206_18268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17159 === (14))){
var inst_17151 = (state_17158[(2)]);
var inst_17152 = cljs.core.async.close_BANG_(out);
var state_17158__$1 = (function (){var statearr_17213 = state_17158;
(statearr_17213[(13)] = inst_17151);

return statearr_17213;
})();
var statearr_17214_18269 = state_17158__$1;
(statearr_17214_18269[(2)] = inst_17152);

(statearr_17214_18269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17159 === (10))){
var inst_17142 = (state_17158[(2)]);
var state_17158__$1 = state_17158;
var statearr_17217_18270 = state_17158__$1;
(statearr_17217_18270[(2)] = inst_17142);

(statearr_17217_18270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17159 === (8))){
var inst_17131 = (state_17158[(11)]);
var inst_17122 = (state_17158[(7)]);
var tmp17207 = inst_17122;
var inst_17122__$1 = tmp17207;
var inst_17123 = inst_17131;
var state_17158__$1 = (function (){var statearr_17220 = state_17158;
(statearr_17220[(7)] = inst_17122__$1);

(statearr_17220[(8)] = inst_17123);

return statearr_17220;
})();
var statearr_17221_18272 = state_17158__$1;
(statearr_17221_18272[(2)] = null);

(statearr_17221_18272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14377__auto__ = null;
var cljs$core$async$state_machine__14377__auto____0 = (function (){
var statearr_17229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17229[(0)] = cljs$core$async$state_machine__14377__auto__);

(statearr_17229[(1)] = (1));

return statearr_17229;
});
var cljs$core$async$state_machine__14377__auto____1 = (function (state_17158){
while(true){
var ret_value__14378__auto__ = (function (){try{while(true){
var result__14379__auto__ = switch__14376__auto__(state_17158);
if(cljs.core.keyword_identical_QMARK_(result__14379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14379__auto__;
}
break;
}
}catch (e17230){var ex__14380__auto__ = e17230;
var statearr_17233_18274 = state_17158;
(statearr_17233_18274[(2)] = ex__14380__auto__);


if(cljs.core.seq((state_17158[(4)]))){
var statearr_17236_18275 = state_17158;
(statearr_17236_18275[(1)] = cljs.core.first((state_17158[(4)])));

} else {
throw ex__14380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18276 = state_17158;
state_17158 = G__18276;
continue;
} else {
return ret_value__14378__auto__;
}
break;
}
});
cljs$core$async$state_machine__14377__auto__ = function(state_17158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14377__auto____1.call(this,state_17158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14377__auto____0;
cljs$core$async$state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14377__auto____1;
return cljs$core$async$state_machine__14377__auto__;
})()
})();
var state__14598__auto__ = (function (){var statearr_17241 = f__14596__auto__();
(statearr_17241[(6)] = c__14595__auto___18238);

return statearr_17241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14598__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17254 = arguments.length;
switch (G__17254) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14595__auto___18279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14596__auto__ = (function (){var switch__14376__auto__ = (function (state_17309){
var state_val_17310 = (state_17309[(1)]);
if((state_val_17310 === (7))){
var inst_17302 = (state_17309[(2)]);
var state_17309__$1 = state_17309;
var statearr_17312_18280 = state_17309__$1;
(statearr_17312_18280[(2)] = inst_17302);

(statearr_17312_18280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (1))){
var inst_17258 = [];
var inst_17259 = inst_17258;
var inst_17260 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17309__$1 = (function (){var statearr_17317 = state_17309;
(statearr_17317[(7)] = inst_17260);

(statearr_17317[(8)] = inst_17259);

return statearr_17317;
})();
var statearr_17318_18281 = state_17309__$1;
(statearr_17318_18281[(2)] = null);

(statearr_17318_18281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (4))){
var inst_17263 = (state_17309[(9)]);
var inst_17263__$1 = (state_17309[(2)]);
var inst_17264 = (inst_17263__$1 == null);
var inst_17265 = cljs.core.not(inst_17264);
var state_17309__$1 = (function (){var statearr_17323 = state_17309;
(statearr_17323[(9)] = inst_17263__$1);

return statearr_17323;
})();
if(inst_17265){
var statearr_17324_18283 = state_17309__$1;
(statearr_17324_18283[(1)] = (5));

} else {
var statearr_17325_18284 = state_17309__$1;
(statearr_17325_18284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (15))){
var inst_17259 = (state_17309[(8)]);
var inst_17294 = cljs.core.vec(inst_17259);
var state_17309__$1 = state_17309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17309__$1,(18),out,inst_17294);
} else {
if((state_val_17310 === (13))){
var inst_17289 = (state_17309[(2)]);
var state_17309__$1 = state_17309;
var statearr_17332_18285 = state_17309__$1;
(statearr_17332_18285[(2)] = inst_17289);

(statearr_17332_18285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (6))){
var inst_17259 = (state_17309[(8)]);
var inst_17291 = inst_17259.length;
var inst_17292 = (inst_17291 > (0));
var state_17309__$1 = state_17309;
if(cljs.core.truth_(inst_17292)){
var statearr_17334_18286 = state_17309__$1;
(statearr_17334_18286[(1)] = (15));

} else {
var statearr_17335_18287 = state_17309__$1;
(statearr_17335_18287[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (17))){
var inst_17299 = (state_17309[(2)]);
var inst_17300 = cljs.core.async.close_BANG_(out);
var state_17309__$1 = (function (){var statearr_17337 = state_17309;
(statearr_17337[(10)] = inst_17299);

return statearr_17337;
})();
var statearr_17338_18288 = state_17309__$1;
(statearr_17338_18288[(2)] = inst_17300);

(statearr_17338_18288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (3))){
var inst_17304 = (state_17309[(2)]);
var state_17309__$1 = state_17309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17309__$1,inst_17304);
} else {
if((state_val_17310 === (12))){
var inst_17259 = (state_17309[(8)]);
var inst_17278 = cljs.core.vec(inst_17259);
var state_17309__$1 = state_17309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17309__$1,(14),out,inst_17278);
} else {
if((state_val_17310 === (2))){
var state_17309__$1 = state_17309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17309__$1,(4),ch);
} else {
if((state_val_17310 === (11))){
var inst_17259 = (state_17309[(8)]);
var inst_17263 = (state_17309[(9)]);
var inst_17267 = (state_17309[(11)]);
var inst_17275 = inst_17259.push(inst_17263);
var tmp17339 = inst_17259;
var inst_17259__$1 = tmp17339;
var inst_17260 = inst_17267;
var state_17309__$1 = (function (){var statearr_17353 = state_17309;
(statearr_17353[(7)] = inst_17260);

(statearr_17353[(8)] = inst_17259__$1);

(statearr_17353[(12)] = inst_17275);

return statearr_17353;
})();
var statearr_17356_18290 = state_17309__$1;
(statearr_17356_18290[(2)] = null);

(statearr_17356_18290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (9))){
var inst_17260 = (state_17309[(7)]);
var inst_17271 = cljs.core.keyword_identical_QMARK_(inst_17260,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17309__$1 = state_17309;
var statearr_17362_18292 = state_17309__$1;
(statearr_17362_18292[(2)] = inst_17271);

(statearr_17362_18292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (5))){
var inst_17260 = (state_17309[(7)]);
var inst_17263 = (state_17309[(9)]);
var inst_17267 = (state_17309[(11)]);
var inst_17268 = (state_17309[(13)]);
var inst_17267__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17263) : f.call(null, inst_17263));
var inst_17268__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17267__$1,inst_17260);
var state_17309__$1 = (function (){var statearr_17366 = state_17309;
(statearr_17366[(11)] = inst_17267__$1);

(statearr_17366[(13)] = inst_17268__$1);

return statearr_17366;
})();
if(inst_17268__$1){
var statearr_17370_18293 = state_17309__$1;
(statearr_17370_18293[(1)] = (8));

} else {
var statearr_17371_18294 = state_17309__$1;
(statearr_17371_18294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (14))){
var inst_17263 = (state_17309[(9)]);
var inst_17267 = (state_17309[(11)]);
var inst_17280 = (state_17309[(2)]);
var inst_17281 = [];
var inst_17282 = inst_17281.push(inst_17263);
var inst_17259 = inst_17281;
var inst_17260 = inst_17267;
var state_17309__$1 = (function (){var statearr_17374 = state_17309;
(statearr_17374[(7)] = inst_17260);

(statearr_17374[(8)] = inst_17259);

(statearr_17374[(14)] = inst_17282);

(statearr_17374[(15)] = inst_17280);

return statearr_17374;
})();
var statearr_17375_18297 = state_17309__$1;
(statearr_17375_18297[(2)] = null);

(statearr_17375_18297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (16))){
var state_17309__$1 = state_17309;
var statearr_17379_18298 = state_17309__$1;
(statearr_17379_18298[(2)] = null);

(statearr_17379_18298[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (10))){
var inst_17273 = (state_17309[(2)]);
var state_17309__$1 = state_17309;
if(cljs.core.truth_(inst_17273)){
var statearr_17383_18299 = state_17309__$1;
(statearr_17383_18299[(1)] = (11));

} else {
var statearr_17385_18300 = state_17309__$1;
(statearr_17385_18300[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (18))){
var inst_17296 = (state_17309[(2)]);
var state_17309__$1 = state_17309;
var statearr_17389_18301 = state_17309__$1;
(statearr_17389_18301[(2)] = inst_17296);

(statearr_17389_18301[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (8))){
var inst_17268 = (state_17309[(13)]);
var state_17309__$1 = state_17309;
var statearr_17390_18302 = state_17309__$1;
(statearr_17390_18302[(2)] = inst_17268);

(statearr_17390_18302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14377__auto__ = null;
var cljs$core$async$state_machine__14377__auto____0 = (function (){
var statearr_17392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17392[(0)] = cljs$core$async$state_machine__14377__auto__);

(statearr_17392[(1)] = (1));

return statearr_17392;
});
var cljs$core$async$state_machine__14377__auto____1 = (function (state_17309){
while(true){
var ret_value__14378__auto__ = (function (){try{while(true){
var result__14379__auto__ = switch__14376__auto__(state_17309);
if(cljs.core.keyword_identical_QMARK_(result__14379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14379__auto__;
}
break;
}
}catch (e17397){var ex__14380__auto__ = e17397;
var statearr_17398_18304 = state_17309;
(statearr_17398_18304[(2)] = ex__14380__auto__);


if(cljs.core.seq((state_17309[(4)]))){
var statearr_17403_18305 = state_17309;
(statearr_17403_18305[(1)] = cljs.core.first((state_17309[(4)])));

} else {
throw ex__14380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18306 = state_17309;
state_17309 = G__18306;
continue;
} else {
return ret_value__14378__auto__;
}
break;
}
});
cljs$core$async$state_machine__14377__auto__ = function(state_17309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14377__auto____1.call(this,state_17309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14377__auto____0;
cljs$core$async$state_machine__14377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14377__auto____1;
return cljs$core$async$state_machine__14377__auto__;
})()
})();
var state__14598__auto__ = (function (){var statearr_17412 = f__14596__auto__();
(statearr_17412[(6)] = c__14595__auto___18279);

return statearr_17412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14598__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
