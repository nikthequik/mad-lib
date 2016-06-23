angular.module('madLib',[])
.controller('MyCtrl', function($scope){
	var vm = this;
	vm.generate = function(){
		vm.state = false;
	};
	vm.restart = function(){
		vm.state = true;
		madForm.reset();
	};
	vm.state = true;
});