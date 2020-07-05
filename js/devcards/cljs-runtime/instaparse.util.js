goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55929 = arguments.length;
var i__4790__auto___55930 = (0);
while(true){
if((i__4790__auto___55930 < len__4789__auto___55929)){
args__4795__auto__.push((arguments[i__4790__auto___55930]));

var G__55931 = (i__4790__auto___55930 + (1));
i__4790__auto___55930 = G__55931;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq55926){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55926));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55932 = arguments.length;
var i__4790__auto___55933 = (0);
while(true){
if((i__4790__auto___55933 < len__4789__auto___55932)){
args__4795__auto__.push((arguments[i__4790__auto___55933]));

var G__55934 = (i__4790__auto___55933 + (1));
i__4790__auto___55933 = G__55934;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq55927){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55927));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__55928 = "";
var G__55928__$1 = (cljs.core.truth_(re.ignoreCase)?[G__55928,"i"].join(''):G__55928);
var G__55928__$2 = (cljs.core.truth_(re.multiline)?[G__55928__$1,"m"].join(''):G__55928__$1);
if(cljs.core.truth_(re.unicode)){
return [G__55928__$2,"u"].join('');
} else {
return G__55928__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map