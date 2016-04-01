cordova.define("cordova/plugin/CMLE", function(require, exports, module) {
    function CMLE() {
    }
    
    CMLE.prototype.check = function (callback) {
        cordova.exec(
            function(result) {
                if (result == 1) {
                    callback(true);
                } else {
                    callback(false);
                }
            }, 
            function(error) {
                console.log(error);
            },
            "CheckMockLocationsEnabled", "check", []);
    };
    
    CMLE.install = function () {
        if (!window.plugins) {
            window.plugins = {};
        }
    
        window.plugins.cml = new CMLE();
        return window.plugins.cml;
    };
    
    cordova.addConstructor(CMLE.install);
});
