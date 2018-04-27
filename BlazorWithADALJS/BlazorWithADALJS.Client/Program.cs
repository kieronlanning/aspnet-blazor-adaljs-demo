using BlazorWithADALJS.Client.Services;
using Microsoft.AspNetCore.Blazor.Browser.Rendering;
using Microsoft.AspNetCore.Blazor.Browser.Services;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace BlazorWithADALJS.Client
{
    public class Program
    {
        static void Main(string[] args)
        {
            var serviceProvider = new BrowserServiceProvider(services =>
            {
                // Add any custom services here
                services.Add(new ServiceDescriptor(typeof(AuthenticationService), typeof(AuthenticationService), ServiceLifetime.Scoped));
            });

            new BrowserRenderer(serviceProvider).AddComponent<App>("app");
        }
    }
}
