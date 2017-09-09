let members = []

myApp.controller('addCtrl', ['$scope', function($scope) {
     let module = []
      $scope.showAddModuleForm = true
      $scope.showAddMemberForm = true
      $scope.addModuleText = 'hide form'
      $scope.addMemberText = 'hide form'
     $scope.addModules = function() {
         console.log('appy')

         module.push({
             'module_name': $scope.module_name,
             'module_address': $scope.module_address
         })
         
         $scope.module = module

     }

    $scope.hideAddModuleForm = function() {
              if($scope.showAddModuleForm == true){
            $scope.showAddModuleForm = false
            $scope.addModuleText = 'show form'
          }
          else{
            $scope.showAddModuleForm = true
            $scope.addModuleText = 'hide form'
          }
          console.log($scope.showAddModuleForm)

         }
    $scope.hideAddMemeberForm = function() {
              if($scope.showAddMemberForm == true){
            $scope.showAddMemberForm = false
            $scope.addMemberText = 'show form'
          }
          else{
            $scope.showAddMemberForm = true
            $scope.addMemberText = 'hide form'
          }
          console.log($scope.showAddMemberForm)

         }
     

     $scope.addMembers = function() {
         members.push({
             'firstName': $scope.firstName,
             'lastName': $scope.lastName,
             'email': $scope.email,
             'dropdown_value': $scope.dropdown_value
         })


          $scope.members = members
          $scope.str3 = JSON.stringify($scope.members);
            console.log($scope.str3)
     }

     $scope.removeMember = function(index) {
         $scope.members.splice(index, 1);
     };

     $scope.removeModule = function(index) {
         $scope.module.splice(index, 1);
     };
 }]);
