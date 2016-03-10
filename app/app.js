(function () {

	var anguNg = ['ngAria', 'ngSanitize', 'ngAnimate', 'ngMessages', 'ngNotify'];
	var anguEx = ['ui.bootstrap', 'mgcrea.ngStrap', 'angularMoment', 'bootstrapLightbox'];
	var routerCtrl = ['mdsc.router', 'mdsc.ctrl'];
	var cons = ['mdsc.constant'];
	var serv = ['mdsc.sig.service', 'mdsc.service'];
	var dir = ['mdsc.dir', 'mdsc.cust.dir'];

	var depedencyArr = anguNg.concat(anguEx, routerCtrl, cons, serv, dir);
	/**
	* mdsc Module
	*
	* The main module of this application...
	*/
	angular.module('mdsc', depedencyArr);

	angular.module('mdsc.router', ['ui.router']);
	angular.module('mdsc.constant', []);
	angular.module('mdsc.sig.service', []);
	angular.module('mdsc.service', []);
	angular.module('mdsc.ctrl', []);
	angular.module('mdsc.dir', ['mdsc.service', 'mdsc.sig.service']);
	angular.module('mdsc.cust.dir', ['mdsc.service', 'mdsc.sig.service']);

})();