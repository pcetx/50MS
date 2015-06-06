angular.module('firebase.config', [])
  .constant('FBURL', 'https://50MS.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','facebook','google','twitter'])

  .constant('loginRedirectPath', '/login');


