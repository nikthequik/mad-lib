angular.module('madLib',[])
.controller('MyCtrl', function($scope){
	var vm = this;
	vm.test = function(){
		console.log(vm.madForm);
	};
});