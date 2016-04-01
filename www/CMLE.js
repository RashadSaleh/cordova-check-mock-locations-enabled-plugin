function CMLE() {
}

CMLE.prototype.check = function (successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "CheckMockLocationsEnabled", "check", []);
};

CMLE.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.cml = new CMLE();
  return window.plugins.cml;
};

cordova.addConstructor(CMLE.install);
