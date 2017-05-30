angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.bucketList', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/bucketList.html',
        controller: 'bucketListCtrl'
      }
    }
  })

  .state('tabsController.addItem', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/addItem.html',
        controller: 'addItemCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('about', {
    url: '/page7',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

  .state('history', {
    url: '/page8',
    templateUrl: 'templates/history.html',
    controller: 'historyCtrl'
  })
  
$urlRouterProvider.otherwise('/page1/page2')

  

});