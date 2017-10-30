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
  var template = '<style>' +
    '.timepop{position: absolute;box-shadow: 0 1px 3px rgba(0,0,0,.5);background: #fff;border-radius: 4px;padding: 0 10px;z-index: 999;top: 100%;right: 0;}\n' +
    '.timepop input[type=tel]{text-align:center;max-width: 35px!important;min-width: 35px;width: 35px;height: 30px;text-align: center;margin: auto;box-shadow: 0 0 10px rgba(0,0,0,.3) inset;}\n' +
    '</style>' +
    '<div style="width:120px;position:relative;">' +
    '' +
    '  <input style="min-width:90px;width:60px;float:left;" type="text" readonly ng-model="updatedTimeFormatted" ng-click="disable?\'\':showPicker=!showPicker" ng-disabled="disable"/>' +
    '  <div style="clear: both;"></div>' +
    '  <div ng-show="showPicker" class="timepop" layout="row" layout-align="space-around stretch">' +
    '    <div layout="column">' +
    '      <div flex>' +
    '        <md-button class="md-icon-button" ng-click="hour===12?\'\':hour=hour+1">' +
    '          <md-icon md-font-icon="icon-chevron-up"></md-icon>' +
    '        </md-button>' +
    '      </div>' +
    '      <div flex align="center"><input type="number" style="width:40px;height:40px;" ng-model="hour" readonly/></div>' +
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
    '      <div flex align="center"><input type="number" style="width:40px;height:40px;"  ng-model="minute" readonly/></div>' +
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
    '      <div flex align="center"><input type="tel" style="width:40px;height:40px;" value="AM" ng-model="gmt" readonly/></div>' +
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
            updatedTime: '=ngModel',
            initDate: '=',
            disable:'=ngDisabled'
          },
          template: template,
          link: function (scope) {
            /* if(scope.initDate){
               scope.updatedTimeFormatted = scope.initDate;
               scope.hour = moment(scope.initDate, 'h:mm A').format('h');
               scope.minute = moment(scope.initDate, 'h:mm A').format('mm');
               scope.gmt= moment(scope.initDate, 'h:mm A').format('A');
             }
                     else{
               scope.initDate = moment().format('h:mm A');
               scope.updatedTimeFormatted = moment().format('h:mm A');
               scope.hour = moment(scope.initDate, 'h:mm A').format('h');
               scope.minute = moment(scope.initDate, 'h:mm A').format('mm');
               scope.gmt= moment(scope.initDate, 'h:mm A').format('A');
             }*/

            var curDate = new Date();
            if (scope.initDate) {
              console.log(scope.initDate)
              if (moment(scope.initDate).isValid()) {
                curDate = moment(scope.initDate).format();
                console.log(curDate)
                scope.hour = parseInt(moment(curDate).format('h'));
                scope.minute = parseInt(moment(curDate).format('mm'));
                scope.gmt = moment(curDate).format('A');
              } else {
                curDate = new Date();
                scope.hour = parseInt(moment(curDate).format('h'));
                scope.minute = parseInt(moment(curDate).format('mm'));
                scope.gmt = moment(curDate).format('A');
              }
            } else {
              curDate = new Date();
              scope.hour = parseInt(moment(curDate).format('h'));
              scope.minute = parseInt(moment(curDate).format('mm'));
              scope.gmt = moment(curDate).format('A');
            }
            scope.updatedTime = curDate;
            scope.updatedTimeFormatted = moment(curDate).format('h:mm A');
            scope.getInithour = function () {
              return parseInt(moment(curDate).format('h'));
            }
            /*  scope.getInitminute = function () {
                console.log('m')
                console.log(moment(curDate).format('hh'))
                console.log(parseInt(moment(curDate).format('hh')))
                return parseInt(moment(curDate).format('hh'));
              }*/


            scope.updateTime = function () {
              var currentTime = scope.hour + ':' + scope.minute + ' ' + scope.gmt;
              scope.updatedTimeFormatted = moment(currentTime, "h:mm A").format('hh:mm A');
              scope.updatedTime = moment(moment().format('DD/MM/YYYY') + ' ' + moment(currentTime, "h:mm A").format('hh:mm A'),'DD/MM/YYYY h:mm:A').format();
              scope.showPicker = false;
            };
          }
        };
      });
    return 'mahdiTimePicker';
  }

  //Load the picker
  mahdiTimePicker(angular);
})();
