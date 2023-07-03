function appController($scope, $http, $routeParams) {
  // no script
  $scope.noScript = () => {
    alert('Chức năng chưa hoàn thiện !');
  };
  // Menu mobile handle
  $scope.menuShow = false;
  $scope.menuHandle = () => {
    $scope.menuShow = !$scope.menuShow;
  };
  // Btn-up handle
  $scope.upTopPage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  // Time handle
  $scope.date = new Date();
  $scope.h = $scope.date.getHours();
  $scope.min = $scope.date.getMinutes();
  $scope.d = $scope.date.getDate();
  $scope.m = $scope.date.getMonth() + 1;
  $scope.y = $scope.date.getFullYear();
  // Json handle
  $http.get('../db.json').then((Response) => ($scope.SnData = Response.data));
  // Product_page controller
  // filter product
  $scope.filterProduct = (madanhmuc) => {
    $scope.products = $scope.SnData.sanpham.filter(
      (product) => product.madanhmuc == madanhmuc
    );
    $('.menu-product-drop').addClass('d-none');
    setInterval(function () {
      $('.menu-product-drop').removeClass('d-none');
    }, 1000);
  };
  // nghe nhan filter
  $scope.ngheNhanFilter = (manghenhan) => {
    console.log('ma nghe nhan: ' + manghenhan);
    return $scope.SnData.nghenhan.filter(
      (nghenhan) => nghenhan.manghenhan == manghenhan
    )[0].tennghenhan;
  };
  // Thiet ke page
  // background box
  $scope.imgBoxShow = false;
  $scope.imgBoxHandle = () => {
    $scope.imgBoxShow = !$scope.imgBoxShow;
  };
  // background - select
  $scope.imgUrl = $('.thietke-img-1').attr('src');
  $scope.imgUrlHandle = (img) => {
    $scope.imgUrl = $('.thietke-img-1').attr('src', img);
    $('.output').css('background-image', `url(${img})`);
    $scope.imgBoxShow = !$scope.imgBoxShow;
  };
}

export default appController;

// xem thêmm
var body = document.body;
body.addEventListener('click', function (e) {
  if (e.target.matches('.btn-read-more')) {
    var popup = document.querySelector('.show-popup');
    if (popup) {
      popup.classList.remove('show-popup');
    }
    e.target.firstElementChild.classList.toggle('show-popup');
    e.target.firstElementChild.classList.toggle('hide-popup');
  }
});
