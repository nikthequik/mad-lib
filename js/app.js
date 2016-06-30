angular.module('madLib',['ngAnimate'])
.controller('MyCtrl', function($scope){
	var vm = this;
	vm.generate = function(){
		vm.state = false;
	};
	vm.restart = function(){
		vm.state = true;
		vm.startAnimation = false;
		madForm.reset();
	};
	vm.state = true;
	vm.startAnimation = false;
});