'use stric';

angular.module('blogList').component('blogList', {
    templateUrl:'./template/blog-list.html',
    controller: function ($scope) {

        var blogItems = [
            {
                title: "some title",
                id: 1,
                description: "this is a book"
            },
            {
                title: "tea title",
                id: 2,
                description: "this is a book 2"
            },
            {
                title: "title 3",
                id: 3,
                description: "this is a book 3"
            }]

        console.log('hello controller');

        $scope.blogList = blogItems;
        $scope.title = 'Hi there';
        $scope.click = 0;

        $scope.clickMe = function(){
            console.log('clicked');
            $scope.click += 1;
            $scope.title = 'changed title = ' + $scope.click;

        }
    }
});
