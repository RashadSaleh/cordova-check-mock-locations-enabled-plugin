package org.apache.cordova.plugin;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import 	android.provider.Settings;

public class CheckMockLocationsEnabled extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("check")) {
            this.check(callbackContext);
            return true;
        }
        return false;
    }
    
    private void check(CallbackContext callbackContext) {
      try {
          if (Settings.Secure.getString(this.cordova.getActivity().getContentResolver(), Settings.Secure.ALLOW_MOCK_LOCATION).equals("0")) {
              callbackContext.success(1);
          } else {
              callbackContext.success(0);
          }
      } catch (Exception e) {
        callbackContext.error(e.getMessage());
      }
    }
}
