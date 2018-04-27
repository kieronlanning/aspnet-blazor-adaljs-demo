using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorWithADALJS.Client.Services
{
    public class AuthenticatedUser
    {
        public string family_name { get; set; }

        public string given_name { get; set; }

        public string name { get; set; }

        public string upn { get; set; }

        public string oid { get; set; }
    }
}
