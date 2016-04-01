# cordova-check-mock-locations-enabled-plugin

A plugin to detect if "Allow Mock Locations" is enabled on *Android* phones.

How to use:
```javascript
window.plugins.cml.check(function (enabled) {
  if (enabled) {
    console.log("Mock locations is enabled!");
  } else {
    console.log("Mock locations is disabled!");
  }
});
````
