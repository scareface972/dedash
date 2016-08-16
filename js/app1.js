var app1 = angular.module('app1', ['ui.bootstrap']);

app1.run(function($rootScope) {
   $rootScope.serverName = "Test Server";
   $rootScope.userName = "Test User";
});


app1.controller('ctrl1', function ($scope) {

});

app1.controller('navbar', function ($scope) {
  

});

app1.controller('tabs', function ($scope) {
 
     // It should load from JSON
 
// this is the format of the JSON 
            // rows : [
            //     {
            //         cols : [
            //             {size : 6},
            //             {size : 6}
            //         ],
            //     },
            //     {
            //         cols : [
            //             {size : 2},
            //             {size : 4},
            //             {size : 6}
            //         ]
            //     },

            // ]
 
    $scope.tabs = [];
    $scope.defaultLayout = "2 6 4";
        
    $scope.clickTab = function($tab) {
        $scope.activeTab = $tab;
        //console.log($scope.activeTab);
    }

    $scope.addTab = function() {
        var newId = $scope.tabs.length + 1;
        $scope.tabs.push({
            id: newId,
            name: "tab".concat(newId),
            rows : []                
        });
    };

    $scope.addRow = function($tab, $layout) {
        //ask for user input on layout. Needs a security check. Maybe if the sum of all parts is > 12 (bootstrap grid)
        var rowLayoutInput = $layout;
        var rowLayout = rowLayoutInput.split(" ");
        $tab.rows.push ({
            cols : []
        });                

     //Iterate through each column and populate it
     for (var x = 0; x < rowLayout.length; x++) {
        $tab.rows[$tab.rows.length-1].cols.push({
            size : rowLayout[x]
        })
     }

    }

    $scope.renderTab = function($tab) {

    };

});