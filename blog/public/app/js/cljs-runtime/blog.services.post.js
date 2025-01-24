goog.provide('blog.services.post');

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
blog.services.post.Post = (function (name,url,tag,__meta,__extmap,__hash){
this.name = name;
this.url = url;
this.tag = tag;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(blog.services.post.Post.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(blog.services.post.Post.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12605,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12609 = k12605;
var G__12609__$1 = (((G__12609 instanceof cljs.core.Keyword))?G__12609.fqn:null);
switch (G__12609__$1) {
case "name":
return self__.name;

break;
case "url":
return self__.url;

break;
case "tag":
return self__.tag;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12605,else__5303__auto__);

}
}));

(blog.services.post.Post.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12610){
var vec__12611 = p__12610;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12611,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12611,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(blog.services.post.Post.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#blog.services.post.Post{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null))], null),self__.__extmap));
}));

(blog.services.post.Post.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12604){
var self__ = this;
var G__12604__$1 = this;
return (new cljs.core.RecordIter((0),G__12604__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(blog.services.post.Post.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(blog.services.post.Post.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new blog.services.post.Post(self__.name,self__.url,self__.tag,self__.__meta,self__.__extmap,self__.__hash));
}));

(blog.services.post.Post.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(blog.services.post.Post.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (801103156 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(blog.services.post.Post.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12606,other12607){
var self__ = this;
var this12606__$1 = this;
return (((!((other12607 == null)))) && ((((this12606__$1.constructor === other12607.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12606__$1.name,other12607.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12606__$1.url,other12607.url)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12606__$1.tag,other12607.tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12606__$1.__extmap,other12607.__extmap)))))))))));
}));

(blog.services.post.Post.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new blog.services.post.Post(self__.name,self__.url,self__.tag,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(blog.services.post.Post.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12605){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12614 = k12605;
var G__12614__$1 = (((G__12614 instanceof cljs.core.Keyword))?G__12614.fqn:null);
switch (G__12614__$1) {
case "name":
case "url":
case "tag":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12605);

}
}));

(blog.services.post.Post.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12604){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12615 = cljs.core.keyword_identical_QMARK_;
var expr__12616 = k__5309__auto__;
if(cljs.core.truth_((pred__12615.cljs$core$IFn$_invoke$arity$2 ? pred__12615.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__12616) : pred__12615.call(null, new cljs.core.Keyword(null,"name","name",1843675177),expr__12616)))){
return (new blog.services.post.Post(G__12604,self__.url,self__.tag,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12615.cljs$core$IFn$_invoke$arity$2 ? pred__12615.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__12616) : pred__12615.call(null, new cljs.core.Keyword(null,"url","url",276297046),expr__12616)))){
return (new blog.services.post.Post(self__.name,G__12604,self__.tag,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12615.cljs$core$IFn$_invoke$arity$2 ? pred__12615.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__12616) : pred__12615.call(null, new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__12616)))){
return (new blog.services.post.Post(self__.name,self__.url,G__12604,self__.__meta,self__.__extmap,null));
} else {
return (new blog.services.post.Post(self__.name,self__.url,self__.tag,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12604),null));
}
}
}
}));

(blog.services.post.Post.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null))], null),self__.__extmap));
}));

(blog.services.post.Post.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12604){
var self__ = this;
var this__5299__auto____$1 = this;
return (new blog.services.post.Post(self__.name,self__.url,self__.tag,G__12604,self__.__extmap,self__.__hash));
}));

(blog.services.post.Post.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(blog.services.post.Post.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null);
}));

(blog.services.post.Post.cljs$lang$type = true);

(blog.services.post.Post.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"blog.services.post/Post",null,(1),null));
}));

(blog.services.post.Post.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"blog.services.post/Post");
}));

/**
 * Positional factory function for blog.services.post/Post.
 */
blog.services.post.__GT_Post = (function blog$services$post$__GT_Post(name,url,tag){
return (new blog.services.post.Post(name,url,tag,null,null,null));
});

/**
 * Factory function for blog.services.post/Post, taking a map of keywords to field values.
 */
blog.services.post.map__GT_Post = (function blog$services$post$map__GT_Post(G__12608){
var extmap__5342__auto__ = (function (){var G__12618 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12608,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"tag","tag",-1290361223)], 0));
if(cljs.core.record_QMARK_(G__12608)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12618);
} else {
return G__12618;
}
})();
return (new blog.services.post.Post(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__12608),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__12608),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__12608),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

blog.services.post.create_post = (function blog$services$post$create_post(name,url,tag){
return blog.services.post.__GT_Post(name,url,tag);
});
blog.services.post.posts = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.services.post.create_post("Introduction to Clojure","/posts/clojure/intro","Clojure"),blog.services.post.create_post("Understanding React Hooks","/posts/react/hooks","React"),blog.services.post.create_post("JavaScript Basics","/posts/javascript/basics","JavaScript"),blog.services.post.create_post("Functional Programming Concepts","/posts/functional/post1","Functional Programming"),blog.services.post.create_post("Functional Programming Thecniques","/posts/functional/post2","Functional Programming"),blog.services.post.create_post("Design Patterns in Software","/posts/software-design/patterns","Software Design")], null);

//# sourceMappingURL=blog.services.post.js.map
