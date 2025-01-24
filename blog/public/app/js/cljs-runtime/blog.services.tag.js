goog.provide('blog.services.tag');

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
blog.services.tag.Tag = (function (url,name,post_count,__meta,__extmap,__hash){
this.url = url;
this.name = name;
this.post_count = post_count;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(blog.services.tag.Tag.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(blog.services.tag.Tag.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12621,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12625 = k12621;
var G__12625__$1 = (((G__12625 instanceof cljs.core.Keyword))?G__12625.fqn:null);
switch (G__12625__$1) {
case "url":
return self__.url;

break;
case "name":
return self__.name;

break;
case "post-count":
return self__.post_count;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12621,else__5303__auto__);

}
}));

(blog.services.tag.Tag.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12627){
var vec__12628 = p__12627;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12628,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12628,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(blog.services.tag.Tag.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#blog.services.tag.Tag{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-count","post-count",-1326461588),self__.post_count],null))], null),self__.__extmap));
}));

(blog.services.tag.Tag.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12620){
var self__ = this;
var G__12620__$1 = this;
return (new cljs.core.RecordIter((0),G__12620__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"post-count","post-count",-1326461588)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(blog.services.tag.Tag.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(blog.services.tag.Tag.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new blog.services.tag.Tag(self__.url,self__.name,self__.post_count,self__.__meta,self__.__extmap,self__.__hash));
}));

(blog.services.tag.Tag.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(blog.services.tag.Tag.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-159443351 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(blog.services.tag.Tag.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12622,other12623){
var self__ = this;
var this12622__$1 = this;
return (((!((other12623 == null)))) && ((((this12622__$1.constructor === other12623.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12622__$1.url,other12623.url)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12622__$1.name,other12623.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12622__$1.post_count,other12623.post_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12622__$1.__extmap,other12623.__extmap)))))))))));
}));

(blog.services.tag.Tag.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"post-count","post-count",-1326461588),null,new cljs.core.Keyword(null,"url","url",276297046),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new blog.services.tag.Tag(self__.url,self__.name,self__.post_count,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(blog.services.tag.Tag.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12621){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12631 = k12621;
var G__12631__$1 = (((G__12631 instanceof cljs.core.Keyword))?G__12631.fqn:null);
switch (G__12631__$1) {
case "url":
case "name":
case "post-count":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12621);

}
}));

(blog.services.tag.Tag.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12620){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12632 = cljs.core.keyword_identical_QMARK_;
var expr__12633 = k__5309__auto__;
if(cljs.core.truth_((pred__12632.cljs$core$IFn$_invoke$arity$2 ? pred__12632.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__12633) : pred__12632.call(null, new cljs.core.Keyword(null,"url","url",276297046),expr__12633)))){
return (new blog.services.tag.Tag(G__12620,self__.name,self__.post_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12632.cljs$core$IFn$_invoke$arity$2 ? pred__12632.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__12633) : pred__12632.call(null, new cljs.core.Keyword(null,"name","name",1843675177),expr__12633)))){
return (new blog.services.tag.Tag(self__.url,G__12620,self__.post_count,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12632.cljs$core$IFn$_invoke$arity$2 ? pred__12632.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"post-count","post-count",-1326461588),expr__12633) : pred__12632.call(null, new cljs.core.Keyword(null,"post-count","post-count",-1326461588),expr__12633)))){
return (new blog.services.tag.Tag(self__.url,self__.name,G__12620,self__.__meta,self__.__extmap,null));
} else {
return (new blog.services.tag.Tag(self__.url,self__.name,self__.post_count,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12620),null));
}
}
}
}));

(blog.services.tag.Tag.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"post-count","post-count",-1326461588),self__.post_count,null))], null),self__.__extmap));
}));

(blog.services.tag.Tag.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12620){
var self__ = this;
var this__5299__auto____$1 = this;
return (new blog.services.tag.Tag(self__.url,self__.name,self__.post_count,G__12620,self__.__extmap,self__.__hash));
}));

(blog.services.tag.Tag.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(blog.services.tag.Tag.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"post-count","post-count",314069939,null)], null);
}));

(blog.services.tag.Tag.cljs$lang$type = true);

(blog.services.tag.Tag.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"blog.services.tag/Tag",null,(1),null));
}));

(blog.services.tag.Tag.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"blog.services.tag/Tag");
}));

/**
 * Positional factory function for blog.services.tag/Tag.
 */
blog.services.tag.__GT_Tag = (function blog$services$tag$__GT_Tag(url,name,post_count){
return (new blog.services.tag.Tag(url,name,post_count,null,null,null));
});

/**
 * Factory function for blog.services.tag/Tag, taking a map of keywords to field values.
 */
blog.services.tag.map__GT_Tag = (function blog$services$tag$map__GT_Tag(G__12624){
var extmap__5342__auto__ = (function (){var G__12635 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12624,new cljs.core.Keyword(null,"url","url",276297046),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"post-count","post-count",-1326461588)], 0));
if(cljs.core.record_QMARK_(G__12624)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12635);
} else {
return G__12635;
}
})();
return (new blog.services.tag.Tag(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__12624),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__12624),new cljs.core.Keyword(null,"post-count","post-count",-1326461588).cljs$core$IFn$_invoke$arity$1(G__12624),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

blog.services.tag.create_tag = (function blog$services$tag$create_tag(url,name,post_count){
return blog.services.tag.__GT_Tag(url,name,post_count);
});
blog.services.tag.tags = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.services.tag.create_tag("/tags/clojure","Clojure",(0)),blog.services.tag.create_tag("/tags/react","React",(0)),blog.services.tag.create_tag("/tags/javascript","JavaScript",(0)),blog.services.tag.create_tag("/tags/web-development","Web Development",(0)),blog.services.tag.create_tag("/tags/programming","Programming",(0)),blog.services.tag.create_tag("/tags/functional-programming","Functional Programming",(0)),blog.services.tag.create_tag("/tags/development","Development",(0)),blog.services.tag.create_tag("/tags/software-engineering","Software Engineering",(0)),blog.services.tag.create_tag("/tags/software-architecture","Software Architecture",(0)),blog.services.tag.create_tag("/tags/software-design","Software Design",(0))], null);
blog.services.tag.tag_posts = (function blog$services$tag$tag_posts(tag_name){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12636_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__12636_SHARP_),tag_name);
}),blog.services.post.posts);
});
blog.services.tag.update_tags = (function blog$services$tag$update_tags(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (tag){
var tag_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tag);
var count = cljs.core.count(blog.services.tag.tag_posts(tag_name));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tag,new cljs.core.Keyword(null,"post-count","post-count",-1326461588),count);
}),blog.services.tag.tags);
});

//# sourceMappingURL=blog.services.tag.js.map
