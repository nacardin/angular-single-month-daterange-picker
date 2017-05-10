angular.module('SingleMonthDaterangePicker', [])
    .directive('smDaterange', function() {
        return {
            restrict: 'E',
            scope: {
                'close': '&onClose'
            },
            //templateUrl: 'angularjs-single-month-daterange-picker.html'
            template: `<span>datepicker</span>`
        };
    });