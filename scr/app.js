import '../node_modules/angular/angular.js'
import '../node_modules/angular-route/angular-route.js'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/jquery/dist/jquery.js'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
// import '../node_modules/wow.js/dist/wow.min.js'
import appController from './controllers/app.controller.js'
import appRoute from './routes/app.route.js'

var app = angular.module('app', ['ngRoute'])

app.controller('appController', appController)
app.config(appRoute)
