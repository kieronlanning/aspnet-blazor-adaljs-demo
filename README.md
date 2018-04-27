# aspnet-blazor-adaljs-demo
An example of integrating the ASP.NET Blazor experimental engine with ADAL.JS for Azure Active Directory integration.

Aside from the normal requirements for Blazor, this project also requires [Yarn](yarnpkg.com), although I'm sure NPM will work just as well.

To build and run, update `authentication.js` in the `BlazorWithADALJS.Client/blazorApp/js` folder with your `tenant` and `clientId` from you Azure Active Directory app.

```
window.config = {
    instance: 'https://login.microsoftonline.com/',
    tenant: '<your-tenant>.onmicrosoft.com',
    clientId: '<your-apps-application/client-id>',
    postLogoutRedirectUri: window.location.origin
};
```

Then navigate back to the `BlazorWithADALJS.Client` folder and run from a command prompt:

```yarn```

This installs all of the client side dependencies.

Optionally, you can run `yarn start` from the same location to monitor changes to the javascript and SASS and automatically update the project's `wwwroot` folder.

Now run the `BlazorWithADALJS.Server` project to run the solution, and use the `Login` button in the main nav to login.