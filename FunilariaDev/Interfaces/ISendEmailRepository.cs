using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FunilariaDev.Interfaces
{
    interface ISendEmailRepository
    {
        public bool EnviarEmail(string emailDestinatario);
    }
}
