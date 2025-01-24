
shadow.cljs.devtools.client.env.module_loaded('main');

try { blog.core.init(); } catch (e) { console.error("An error occurred when calling (blog.core/init)"); console.error(e); }