'use stric';

angular.module('blogList').component('blogList', {
    template: "<div class=\"\">\n" +
    "    {{ title }}\n" +
    "    <button ng-click=\"clickMe()\">Click here</button>\n" +
    "</div>",
    controller: function ($scope) {
        console.log('hello controller');
        $scope.title = 'Hi there';
        $scope.click = 0;

        $scope.clickMe = function(){
            console.log('clicked');
            $scope.click += 1;
            $scope.title = 'changed title = '+$scope.click;

        }
    }
});
