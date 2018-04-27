using Microsoft.AspNetCore.Blazor.Browser.Interop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorWithADALJS.Client.Services
{
    public class AuthenticationService
    {
        public bool IsCallback()
        {
            return RegisteredFunction.Invoke<bool>("auth.isCallback");
        }

        public void HandleWindowCallback()
        {
            RegisteredFunction.Invoke<object>("auth.handleWindowCallback");
        }

        public void Logout()
        {
            RegisteredFunction.Invoke<object>("auth.logout");
        }

        public void Login()
        {
            RegisteredFunction.Invoke<object>("auth.login");
        }

        public AuthenticatedUser GetCachedUser()
        {
            return RegisteredFunction.Invoke<AuthenticatedUser>("auth.getCachedUser");
        }

        public object GetLoginError()
        {
            return RegisteredFunction.Invoke<object>("auth.getLoginError");
        }

        public bool IsLoggedIn()
        {
            return GetCachedUser() != null;
        }
    }
}
