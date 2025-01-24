goog.provide('blog.pages.Archives.archives');
if((typeof blog !== 'undefined') && (typeof blog.pages !== 'undefined') && (typeof blog.pages.Archives !== 'undefined') && (typeof blog.pages.Archives.archives !== 'undefined') && (typeof blog.pages.Archives.archives.current_component !== 'undefined')){
} else {
blog.pages.Archives.archives.current_component = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
blog.pages.Archives.archives.post_component = (function blog$pages$Archives$archives$post_component(post,index,tag_index){
var map__6706 = post;
var map__6706__$1 = cljs.core.__destructure_map(map__6706);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6706__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6706__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2"], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_index,(5)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"text-blue-500 dark:text-blue-400 hover:underline",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(blog.pages.Archives.archives.current_component,blog.pages.Posts.Fuctional.post1.post1);
})], null),name], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),url,new cljs.core.Keyword(null,"class","class",-2030961996),"text-blue-500 dark:text-blue-400 hover:underline"], null),name], null))], null);
});
blog.pages.Archives.archives.tag_component = (function blog$pages$Archives$archives$tag_component(tag,tag_index){
var posts = blog.services.tag.tag_posts(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tag));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-gray-900 shadow-lg rounded-lg p-4 relative"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute top-2 right-2 p-1 bg-gray-800 rounded-full"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"assets/svg/programmer2.svg",new cljs.core.Keyword(null,"alt","alt",-3214426),"icono",new cljs.core.Keyword(null,"class","class",-2030961996),"w-10 h-10"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center mb-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-shrink-0 bg-blue-500 text-white rounded-full p-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"class","class",-2030961996),"w-6 h-6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"d","d",1972142424),"M12 4.5l7.5 7.5-7.5 7.5m-6-7.5h12"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-semibold text-white ml-4"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tag)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm text-gray-400 mb-2"], null),["Number of posts: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"post-count","post-count",-1326461588).cljs$core$IFn$_invoke$arity$1(tag))].join('')], null),(function (){var iter__5480__auto__ = (function blog$pages$Archives$archives$tag_component_$_iter__6707(s__6708){
return (new cljs.core.LazySeq(null,(function (){
var s__6708__$1 = s__6708;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__6708__$1);
if(temp__5804__auto__){
var s__6708__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6708__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__6708__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__6710 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__6709 = (0);
while(true){
if((i__6709 < size__5479__auto__)){
var vec__6711 = cljs.core._nth(c__5478__auto__,i__6709);
var post_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6711,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6711,(1),null);
cljs.core.chunk_append(b__6710,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.pages.Archives.archives.post_component,post,post_index,tag_index], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(post)], null)));

var G__6727 = (i__6709 + (1));
i__6709 = G__6727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6710),blog$pages$Archives$archives$tag_component_$_iter__6707(cljs.core.chunk_rest(s__6708__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6710),null);
}
} else {
var vec__6714 = cljs.core.first(s__6708__$2);
var post_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6714,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6714,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.pages.Archives.archives.post_component,post,post_index,tag_index], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(post)], null)),blog$pages$Archives$archives$tag_component_$_iter__6707(cljs.core.rest(s__6708__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,posts));
})()], null);
});
blog.pages.Archives.archives.archive_page = (function blog$pages$Archives$archives$archive_page(){
var tags = blog.services.tag.update_tags();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"], null),((cljs.core.not(cljs.core.deref(blog.pages.Archives.archives.current_component)))?(function (){var iter__5480__auto__ = (function blog$pages$Archives$archives$archive_page_$_iter__6717(s__6718){
return (new cljs.core.LazySeq(null,(function (){
var s__6718__$1 = s__6718;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__6718__$1);
if(temp__5804__auto__){
var s__6718__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6718__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__6718__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__6720 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__6719 = (0);
while(true){
if((i__6719 < size__5479__auto__)){
var vec__6721 = cljs.core._nth(c__5478__auto__,i__6719);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6721,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6721,(1),null);
cljs.core.chunk_append(b__6720,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.pages.Archives.archives.tag_component,tag,index], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tag)], null)));

var G__6728 = (i__6719 + (1));
i__6719 = G__6728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6720),blog$pages$Archives$archives$archive_page_$_iter__6717(cljs.core.chunk_rest(s__6718__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6720),null);
}
} else {
var vec__6724 = cljs.core.first(s__6718__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6724,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6724,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blog.pages.Archives.archives.tag_component,tag,index], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tag)], null)),blog$pages$Archives$archives$archive_page_$_iter__6717(cljs.core.rest(s__6718__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tags));
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(blog.pages.Archives.archives.current_component)], null))], null);
});

//# sourceMappingURL=blog.pages.Archives.archives.js.map
