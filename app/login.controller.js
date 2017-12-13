(function(){
let appModule= angular.module('ngblog');
appModule.controller('LoginController',function ($rootScope,$scope) {
    
    this.username='';
    this.visible= true;
    
    this.validateUserName=()=>{
       if  (this.username && this.username.length > 0)
           {
             localStorage.setItem('username',this.username);
            
               $rootScope.$broadcast('loggedIn');
               
                this.visible= false;
               
           }
        
    };
    this.loggedIn=()=> {
        
        $rootScope.$broadcast('loggedIn');
        this.visible = false;
        
        };
       if(localStorage.hasOwnProperty('username')) {
           
           this.username =localStorage.getItem('username');
           setTimeout(() => {
               
                             $scope.$apply( ()=> this.loggedIn());
                             
       });
        
        
        
    }
    
});
    })();