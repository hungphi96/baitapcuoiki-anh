function appRoute($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/Main.view.htm',
    })
    .when('/ve-chung-toi', {
      templateUrl: 'views/About.view.htm',
    })
    .when('/lien-he', {
      templateUrl: 'views/Contact.view.htm',
    })
    .when('/cau-lac-bo', {
      templateUrl: 'views/Club.view.htm',
    })
    .when('/thiet-ke', {
      templateUrl: 'views/Design.view.htm',
    })
    .when('/tac-pham-thu-phap/:danhmuc', {
      templateUrl: 'views/Product_page.view.htm',
    })
    .when('/lich-su', {
      templateUrl: 'views/history.htm',
    })
    .when('/nghe-nhan', {
      templateUrl: 'views/nghenhan.htm',
    })
    .when('/kieu-chu', {
      templateUrl: 'views/kieuchu.htm',
    });
}

export default appRoute;
