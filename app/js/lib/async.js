/*!
 * async
 * https://github.com/caolan/async
 *
 * Copyright 2010-2014 Caolan McMahon
 * Released under the MIT license
 */
(function(){var e={};var q,l;q=this;if(q!=null){l=q.async}e.noConflict=function(){q.async=l;return e};function s(x){var y=false;return function(){if(y){throw new Error("Callback was already called.")}y=true;x.apply(q,arguments)}}var w=Object.prototype.toString;var h=Array.isArray||function(x){return w.call(x)==="[object Array]"};var t=function(x,z){if(x.forEach){return x.forEach(z)}for(var y=0;y<x.length;y+=1){z(x[y],y,x)}};var a=function(x,z){if(x.map){return x.map(z)}var y=[];t(x,function(A,C,B){y.push(z(A,C,B))});return y};var v=function(x,z,y){if(x.reduce){return x.reduce(z,y)}t(x,function(A,C,B){y=z(y,A,C,B)});return y};var c=function(z){if(Object.keys){return Object.keys(z)}var y=[];for(var x in z){if(z.hasOwnProperty(x)){y.push(x)}}return y};if(typeof process==="undefined"||!(process.nextTick)){if(typeof setImmediate==="function"){e.nextTick=function(x){setImmediate(x)};e.setImmediate=e.nextTick}else{e.nextTick=function(x){setTimeout(x,0)};e.setImmediate=e.nextTick}}else{e.nextTick=process.nextTick;if(typeof setImmediate!=="undefined"){e.setImmediate=function(x){setImmediate(x)}}else{e.setImmediate=e.nextTick}}e.each=function(x,A,B){B=B||function(){};if(!x.length){return B()}var z=0;t(x,function(C){A(C,s(y))});function y(C){if(C){B(C);B=function(){}}else{z+=1;if(z>=x.length){B()}}}};e.forEach=e.each;e.eachSeries=function(x,A,B){B=B||function(){};if(!x.length){return B()}var z=0;var y=function(){A(x[z],function(C){if(C){B(C);B=function(){}}else{z+=1;if(z>=x.length){B()}else{y()}}})};y()};e.forEachSeries=e.eachSeries;e.eachLimit=function(x,y,A,B){var z=g(y);z.apply(null,[x,A,B])};e.forEachLimit=e.eachLimit;var g=function(x){return function(y,C,E){E=E||function(){};if(!y.length||x<=0){return E()}var B=0;var z=0;var A=0;(function D(){if(B>=y.length){return E()}while(A<x&&z<y.length){z+=1;A+=1;C(y[z-1],function(F){if(F){E(F);E=function(){}}else{B+=1;A-=1;if(B>=y.length){E()}else{D()}}})}})()}};var r=function(x){return function(){var y=Array.prototype.slice.call(arguments);return x.apply(null,[e.each].concat(y))}};var p=function(x,y){return function(){var z=Array.prototype.slice.call(arguments);return y.apply(null,[g(x)].concat(z))}};var n=function(x){return function(){var y=Array.prototype.slice.call(arguments);return x.apply(null,[e.eachSeries].concat(y))}};var i=function(A,x,z,B){x=a(x,function(C,D){return{index:D,value:C}});if(!B){A(x,function(C,D){z(C.value,function(E){D(E)})})}else{var y=[];A(x,function(C,D){z(C.value,function(F,E){y[C.index]=E;D(F)})},function(C){B(C,y)})}};e.map=r(i);e.mapSeries=n(i);e.mapLimit=function(x,y,z,A){return d(y)(x,z,A)};var d=function(x){return p(x,i)};e.reduce=function(x,y,z,A){e.eachSeries(x,function(B,C){z(y,B,function(E,D){y=D;C(E)})},function(B){A(B,y)})};e.inject=e.reduce;e.foldl=e.reduce;e.reduceRight=function(x,y,z,B){var A=a(x,function(C){return C}).reverse();e.reduce(A,y,z,B)};e.foldr=e.reduceRight;var u=function(A,x,z,B){var y=[];x=a(x,function(C,D){return{index:D,value:C}});A(x,function(C,D){z(C.value,function(E){if(E){y.push(C)}D()})},function(C){B(a(y.sort(function(E,D){return E.index-D.index}),function(D){return D.value}))})};e.filter=r(u);e.filterSeries=n(u);e.select=e.filter;e.selectSeries=e.filterSeries;var m=function(A,x,z,B){var y=[];x=a(x,function(C,D){return{index:D,value:C}});A(x,function(C,D){z(C.value,function(E){if(!E){y.push(C)}D()})},function(C){B(a(y.sort(function(E,D){return E.index-D.index}),function(D){return D.value}))})};e.reject=r(m);e.rejectSeries=n(m);var f=function(z,x,y,A){z(x,function(B,C){y(B,function(D){if(D){A(B);A=function(){}}else{C()}})},function(B){A()})};e.detect=r(f);e.detectSeries=n(f);e.some=function(x,y,z){e.each(x,function(A,B){y(A,function(C){if(C){z(true);z=function(){}}B()})},function(A){z(false)})};e.any=e.some;e.every=function(x,y,z){e.each(x,function(A,B){y(A,function(C){if(!C){z(false);z=function(){}}B()})},function(A){z(true)})};e.all=e.every;e.sortBy=function(x,y,z){e.map(x,function(A,B){y(A,function(C,D){if(C){B(C)}else{B(null,{value:A,criteria:D})}})},function(C,A){if(C){return z(C)}else{var B=function(G,F){var E=G.criteria,D=F.criteria;return E<D?-1:E>D?1:0};z(null,a(A.sort(B),function(D){return D.value}))}})};e.auto=function(z,E){E=E||function(){};var F=c(z);var y=F.length;if(!y){return E()}var B={};var D=[];var x=function(G){D.unshift(G)};var A=function(H){for(var G=0;G<D.length;G+=1){if(D[G]===H){D.splice(G,1);return}}};var C=function(){y--;t(D.slice(0),function(G){G()})};x(function(){if(!y){var G=E;E=function(){};G(null,B)}});t(F,function(H){var G=h(z[H])?z[H]:[z[H]];var L=function(O){var M=Array.prototype.slice.call(arguments,1);if(M.length<=1){M=M[0]}if(O){var N={};t(c(B),function(P){N[P]=B[P]});N[H]=M;E(O,N);E=function(){}}else{B[H]=M;e.setImmediate(C)}};var J=G.slice(0,Math.abs(G.length-1))||[];var I=function(){return v(J,function(N,M){return(N&&B.hasOwnProperty(M))},true)&&!B.hasOwnProperty(H)};if(I()){G[G.length-1](L,B)}else{var K=function(){if(I()){A(K);G[G.length-1](L,B)}};x(K)}})};e.retry=function(B,x,C){var z=5;var y=[];if(typeof B==="function"){C=x;x=B;B=z}B=parseInt(B,10)||z;var A=function(F,D){var E=function(G,H){return function(I){G(function(K,J){I(!K||H,{err:K,result:J})},D)}};while(B){y.push(E(x,!(B-=1)))}e.series(y,function(G,H){H=H[H.length-1];(F||C)(H.err,H.result)})};return C?A():A};e.waterfall=function(A,z){z=z||function(){};if(!h(A)){var x=new Error("First argument to waterfall must be an array of functions");return z(x)}if(!A.length){return z()}var y=function(B){return function(E){if(E){z.apply(null,arguments);z=function(){}}else{var C=Array.prototype.slice.call(arguments,1);var D=B.next();if(D){C.push(y(D))}else{C.push(z)}e.setImmediate(function(){B.apply(null,C)})}}};y(e.iterator(A))()};var b=function(y,A,z){z=z||function(){};if(h(A)){y.map(A,function(B,C){if(B){B(function(E){var D=Array.prototype.slice.call(arguments,1);if(D.length<=1){D=D[0]}C.call(null,E,D)})}},z)}else{var x={};y.each(c(A),function(B,C){A[B](function(E){var D=Array.prototype.slice.call(arguments,1);if(D.length<=1){D=D[0]}x[B]=D;C(E)})},function(B){z(B,x)})}};e.parallel=function(y,x){b({map:e.map,each:e.each},y,x)};e.parallelLimit=function(z,x,y){b({map:d(x),each:g(x)},z,y)};e.series=function(z,y){y=y||function(){};if(h(z)){e.mapSeries(z,function(A,B){if(A){A(function(D){var C=Array.prototype.slice.call(arguments,1);if(C.length<=1){C=C[0]}B.call(null,D,C)})}},y)}else{var x={};e.eachSeries(c(z),function(A,B){z[A](function(D){var C=Array.prototype.slice.call(arguments,1);if(C.length<=1){C=C[0]}x[A]=C;B(D)})},function(A){y(A,x)})}};e.iterator=function(y){var x=function(z){var A=function(){if(y.length){y[z].apply(null,arguments)}return A.next()};A.next=function(){return(z<y.length-1)?x(z+1):null};return A};return x(0)};e.apply=function(y){var x=Array.prototype.slice.call(arguments,1);return function(){return y.apply(null,x.concat(Array.prototype.slice.call(arguments)))}};var o=function(A,x,y,B){var z=[];A(x,function(D,C){y(D,function(E,F){z=z.concat(F||[]);C(E)})},function(C){B(C,z)})};e.concat=r(o);e.concatSeries=n(o);e.whilst=function(z,x,y){if(z()){x(function(A){if(A){return y(A)}e.whilst(z,x,y)})}else{y()}};e.doWhilst=function(x,z,y){x(function(B){if(B){return y(B)}var A=Array.prototype.slice.call(arguments,1);if(z.apply(null,A)){e.doWhilst(x,z,y)}else{y()}})};e.until=function(z,x,y){if(!z()){x(function(A){if(A){return y(A)}e.until(z,x,y)})}else{y()}};e.doUntil=function(x,z,y){x(function(B){if(B){return y(B)}var A=Array.prototype.slice.call(arguments,1);if(!z.apply(null,A)){e.doUntil(x,z,y)}else{y()}})};e.queue=function(B,z){if(z===undefined){z=1}function x(D,C,F,E){if(!D.started){D.started=true}if(!h(C)){C=[C]}if(C.length==0){return e.setImmediate(function(){if(D.drain){D.drain()}})}t(C,function(G){var H={data:G,callback:typeof E==="function"?E:null};if(F){D.tasks.unshift(H)}else{D.tasks.push(H)}if(D.saturated&&D.tasks.length===D.concurrency){D.saturated()}e.setImmediate(D.process)})}var y=0;var A={tasks:[],concurrency:z,saturated:null,empty:null,drain:null,started:false,paused:false,push:function(C,D){x(A,C,false,D)},kill:function(){A.drain=null;A.tasks=[]},unshift:function(C,D){x(A,C,true,D)},process:function(){if(!A.paused&&y<A.concurrency&&A.tasks.length){var D=A.tasks.shift();if(A.empty&&A.tasks.length===0){A.empty()}y+=1;var E=function(){y-=1;if(D.callback){D.callback.apply(D,arguments)}if(A.drain&&A.tasks.length+y===0){A.drain()}A.process()};var C=s(E);B(D.data,C)}},length:function(){return A.tasks.length},running:function(){return y},idle:function(){return A.tasks.length+y===0},pause:function(){if(A.paused===true){return}A.paused=true},resume:function(){if(A.paused===false){return}A.paused=false;for(var C=1;C<=A.concurrency;C++){e.setImmediate(A.process)}}};return A};e.priorityQueue=function(C,A){function z(E,D){return E.priority-D.priority}function y(I,G,H){var F=-1,D=I.length-1;while(F<D){var E=F+((D-F+1)>>>1);if(H(G,I[E])>=0){F=E}else{D=E-1}}return F}function x(F,E,D,G){if(!F.started){F.started=true}if(!h(E)){E=[E]}if(E.length==0){return e.setImmediate(function(){if(F.drain){F.drain()}})}t(E,function(H){var I={data:H,priority:D,callback:typeof G==="function"?G:null};F.tasks.splice(y(F.tasks,I,z)+1,0,I);if(F.saturated&&F.tasks.length===F.concurrency){F.saturated()}e.setImmediate(F.process)})}var B=e.queue(C,A);B.push=function(E,D,F){x(B,E,D,F)};delete B.unshift;return B};e.cargo=function(B,A){var x=false,C=[];var y={tasks:C,payload:A,saturated:null,empty:null,drain:null,drained:true,push:function(D,E){if(!h(D)){D=[D]}t(D,function(F){C.push({data:F,callback:typeof E==="function"?E:null});y.drained=false;if(y.saturated&&C.length===A){y.saturated()}});e.setImmediate(y.process)},process:function z(){if(x){return}if(C.length===0){if(y.drain&&!y.drained){y.drain()}y.drained=true;return}var D=typeof A==="number"?C.splice(0,A):C.splice(0,C.length);var E=a(D,function(F){return F.data});if(y.empty){y.empty()}x=true;B(E,function(){x=false;var F=arguments;t(D,function(G){if(G.callback){G.callback.apply(null,F)}});z()})},length:function(){return C.length},running:function(){return x}};return y};var j=function(x){return function(z){var y=Array.prototype.slice.call(arguments,1);z.apply(null,y.concat([function(B){var A=Array.prototype.slice.call(arguments,1);if(typeof console!=="undefined"){if(B){if(console.error){console.error(B)}}else{if(console[x]){t(A,function(C){console[x](C)})}}}}]))}};e.log=j("log");e.dir=j("dir");e.memoize=function(B,z){var y={};var A={};z=z||function(C){return C};var x=function(){var C=Array.prototype.slice.call(arguments);var E=C.pop();var D=z.apply(null,C);if(D in y){e.nextTick(function(){E.apply(null,y[D])})}else{if(D in A){A[D].push(E)}else{A[D]=[E];B.apply(null,C.concat([function(){y[D]=arguments;var H=A[D];delete A[D];for(var G=0,F=H.length;G<F;G++){H[G].apply(null,arguments)}}]))}}};x.memo=y;x.unmemoized=B;return x};e.unmemoize=function(x){return function(){return(x.unmemoized||x).apply(null,arguments)}};e.times=function(A,z,B){var x=[];for(var y=0;y<A;y++){x.push(y)}return e.map(x,z,B)};e.timesSeries=function(A,z,B){var x=[];for(var y=0;y<A;y++){x.push(y)}return e.mapSeries(x,z,B)};e.seq=function(){var x=arguments;return function(){var z=this;var y=Array.prototype.slice.call(arguments);var A=y.pop();e.reduce(x,y,function(C,D,B){D.apply(z,C.concat([function(){var F=arguments[0];var E=Array.prototype.slice.call(arguments,1);B(F,E)}]))},function(C,B){A.apply(z,[C].concat(B))})}};e.compose=function(){return e.seq.apply(null,Array.prototype.reverse.call(arguments))};var k=function(A,y){var z=function(){var C=this;var B=Array.prototype.slice.call(arguments);var D=B.pop();return A(y,function(F,E){F.apply(C,B.concat([E]))},D)};if(arguments.length>2){var x=Array.prototype.slice.call(arguments,2);return z.apply(this,x)}else{return z}};e.applyEach=r(k);e.applyEachSeries=n(k);e.forever=function(y,z){function x(A){if(A){if(z){return z(A)}throw A}y(x)}x()};if(typeof module!=="undefined"&&module.exports){module.exports=e}else{if(typeof define!=="undefined"&&define.amd){define([],function(){return e})}else{q.async=e}}}());