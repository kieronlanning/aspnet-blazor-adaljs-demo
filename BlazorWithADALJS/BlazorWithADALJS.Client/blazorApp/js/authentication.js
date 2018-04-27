//import 'adal-angular/dist/adal.min.js';

const authentionService = (authContext) => {
    return {
        login: () => {
            authContext.login();
        },

        logout: () => {
            authContext.logOut();
        },

        getCachedUser: () => {
            const user = authContext.getCachedUser();

            if (user == null) {
                return null;
            }

            return user.profile;
        },

        getLoginError: () => {
            return authContext.getLoginError();
        },

        isLoggedIn: () => {
            return authContext.getCachedUser() !== null;
        },

        handleWindowCallback: () => {
            var isCallback = authContext.isCallback(window.location.hash);
            authContext.handleWindowCallback();
            
            if (isCallback && !authContext.getLoginError()) {
                window.location = authContext._getItem(authContext.CONSTANTS.STORAGE.LOGIN_REQUEST);
            }
        }
    };
};

window.config = {
    instance: 'https://login.microsoftonline.com/',
    tenant: '<your-tenant>.onmicrosoft.com',
    clientId: '<your-apps-application/client-id>',
    postLogoutRedirectUri: window.location.origin
};

var authenticationContext = new AuthenticationContext(config);
var authService = authentionService(authenticationContext);

window.addEventListener('load', () => {
    for (let idx in authService) {
        Blazor.registerFunction(`auth.${idx}`, authService[idx]);
    }
});

export default authService;