angular.module('core.users').
    factory('UserAuthentication', [ function(){
        {
            this.user = window.user;
            return {
                user: this.user
            }
        }
    }]);
