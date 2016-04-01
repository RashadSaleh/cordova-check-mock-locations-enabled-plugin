# cordova-check-mock-locations-enabled-plugin

A plugin to detect if "Allow Mock Locations" is enabled on <strong><bold>Android</bold></strong> phones.

### Installation:
```
cordova plugin add https://github.com/RashadSaleh/cordova-check-mock-locations-enabled-plugin.git
```

### How to use:
```javascript
window.plugins.cml.check(function (enabled) {
  if (enabled) {
    console.log("Mock locations is enabled!");
  } else {
    console.log("Mock locations is disabled!");
  }
});
````
