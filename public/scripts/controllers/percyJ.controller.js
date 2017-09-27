myApp.controller('PercyController', function (hfService) {
    var vm = this;

    vm.wins = 0;

    vm.highFive = function (){                
         hfService.highFive();
         vm.skill = hfService.skillLevel
         vm.count = hfService.totalHighFives
         vm.five = hfService.five
         console.log('skill!', vm.skill);
         console.log('count', vm.count);
         console.log('high five', vm.five);
         vm.totalHighFives = hfService.totalHighFives.count

         if( vm.five.level >= vm.skill.skill) {
             vm.wins++;
             console.log('wins:', vm.wins);
             
         }
    }
    console.log('in percy controller');
});