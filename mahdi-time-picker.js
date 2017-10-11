(function () {
	/**
	 * @description This is the time picker that loads on you page in line rather than modal. Special Thanks to Hasan
	 * for his great layout design
	 * @author Mahdi Hasan
	 * @link wwww.github.com/aanmahdi/time-picker
	 * @licence MIT
	 */

	'use strict';

	//Picker Template
	var template = '<div style="width:120px;position:relative;">' +
		'' +
		'  <input style="min-width:90px;width:60px;float:left;" type="text" readonly ng-model="updatedTimeFormatted"/>' +
		'' +
		'  <md-icon style="float:left;padding-left:5px;" md-font-icon="icon-clock" ng-click="showPicker=!showPicker"></md-icon>' +
		'  <div style="clear: both;"></div>' +
		'  <div ng-show="showPicker" class="timepop" layout="row" layout-align="space-around stretch">' +
		'    <div layout="column">' +
		'      <div flex>' +
		'        <md-button class="md-icon-button" ng-click="hour===12?\'\':hour=hour+1">' +
		'          <md-icon md-font-icon="icon-chevron-up"></md-icon>' +
		'        </md-button>' +
		'      </div>' +
		'      <div flex align="center"><input type="tel" value="1" ng-model="hour" ng-init="hour=1" readonly/></div>' +
		'      <div flex>' +
		'        <md-button class="md-icon-button" ng-click="hour===0?\'\':hour=hour-1">' +
		'          <md-icon md-font-icon="icon-chevron-down"></md-icon>' +
		'        </md-button>' +
		'      </div>' +
		'    </div>' +
		'    <div layout="column">' +
		'      <div flex>' +
		'        <md-button class="md-icon-button" ng-click="minute===59?\'\':minute=minute+1">' +
		'          <md-icon md-font-icon="icon-chevron-up"></md-icon>' +
		'        </md-button>' +
		'      </div>' +
		'      <div flex align="center"><input type="tel" value="1" ng-model="minute" ng-init="minute=1" readonly/></div>' +
		'      <div flex>' +
		'        <md-button class="md-icon-button" ng-click="minute===0?\'\':minute=minute-1">' +
		'          <md-icon md-font-icon="icon-chevron-down"></md-icon>' +
		'        </md-button>' +
		'      </div>' +
		'    </div>' +
		'    <div layout="column">' +
		'      <div flex>' +
		'        <md-button class="md-icon-button" ng-click="gmt===\'PM\'?gmt=\'AM\':gmt=\'PM\'">' +
		'          <md-icon md-font-icon="icon-chevron-up"></md-icon>' +
		'        </md-button>' +
		'      </div>' +
		'      <div flex align="center"><input type="tel" value="AM" ng-model="gmt" ng-init="gmt=\'AM\'" readonly/></div>' +
		'      <div flex>' +
		'        <md-button class="md-icon-button" ng-click="gmt===\'PM\'?gmt=\'AM\':gmt=\'PM\'">' +
		'          <md-icon md-font-icon="icon-chevron-down"></md-icon>' +
		'        </md-button>' +
		'      </div>' +
		'    </div>' +
		'    <div layout="column">' +
		'      <div flex>' +
		'' +
		'      </div>' +
		'      <div flex align="center" style="padding:5px;"><button style="padding:5px;background:gainsboro;color:black;font-weight:bold;" ng-click="updateTime()">Change</button></div>' +
		'      <div flex>' +
		'      </div>' +
		'    </div>' +
		'  </div>' +
		'</div>';

	function mahdiTimePicker(angular) {
		angular.module('mahdiTimePicker', [])
			.directive('mahdiTimePicker', function (moment) {
				return {
					restrict: 'AE',
					scope: {
						timeFormat: '=',
						updatedTime: '=ngModel'
					},
					template:template,
					link: function (scope) {
						scope.updateTime = function () {
							var currentTime = scope.hour + ':' + scope.minute + ' ' + scope.gmt;
							scope.updatedTimeFormatted = moment(currentTime, ["h:mm A"]).format('hh:mm A');
							scope.updatedTime = moment(currentTime, ["h:mm A"]).format(scope.timeFormat);
						};
					}
				};
			});
		return 'mahdipicker';
	}
	//Load the picker
	mahdiTimePicker(angular);
})();
