var statusGrantedStub = function(callback) {
  return callback(this.permissionStatus.GRANTED);
};

var successCallbackStub = function(successCallback, errorCallback) {
  return successCallback(true);
};

module.exports = {
    Diagnostic: {
        '_ready': function (successCallback) {
            successCallback(true);
        },
        permissionStatus: {
          DENIED: 1,
          DENIED_ALWAYS: 2,
          GRANTED: 3,
          RESTRICTED: 4,
          NOT_RESTRICTED: 5
        },
        getCameraAuthorizationStatus: statusGrantedStub,
        requestCameraAuthorization: successCallbackStub,
        getContactsAuthorizationStatus: statusGrantedStub,
        requestContactsAuthorization: successCallbackStub,
        getLocationAuthorizationStatus: statusGrantedStub,
        requestLocationAuthorization: successCallbackStub
    }
};

