myApp.service('hfService', function () {
    console.log('service!');
    
    var self = this
    self.five = {level: 0};
    self.totalHighFives = {count: 0};
    self.skillLevel = {skill: Math.floor((Math.random() * 10) + 1)};


    self.highFive = function () {
        console.log('high five service!');
        self.five.level = Math.floor((Math.random() * 10) + 1);
        self.totalHighFives.count++;
    }

})//ENd my.App service