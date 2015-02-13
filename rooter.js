/**
*
*  Rooter
*
*/
var Router = {
	routes: [],
	root: '/',

	// setting root
	config: function( root_path ) {
		this.root = root_path || '/';
		return this;
	},

	// add routing
	add: function(re, handler) {
		this.routes.push({ re: re, handler: handler});
		return this;
	},

	// delete param
	remove: function(param) {
		for(var i=0; i<this.routes.length; i++) {
			if(r.handler === param || r.re.toString() === param.toString()) {
				this.routes.splice(i, 1);
				return this;
			}
		}
		return this;
	},

	// check rooting
	check: function() {
		var path = location.pathname;
		path = this.root != '/' ? path.replace(this.root, '') : '/';
		for(var i = 0; i < this.routes.length; ++i) {
			var func = this.routes[i];
			var match = path.match(func.re);
			if ( match ) { func.handler(match); }
		}
		return this;
	},

	// initialize
	initilize: function() {
		this.routes = [];
		return this;
	}
};


/**
*
*  functions
*
*/
(function() {
	// initialize
	Router.initilize();
	Router.config('/');

	// add routing
	Router
	.add(/something\/page/, function() {
	})
	.add('', function() {
		// common action
	});

	// Fire!!!
	Router.check();
})();
