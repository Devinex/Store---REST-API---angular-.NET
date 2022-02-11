using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using TIU_lab_2.Modeles;

namespace TIU_lab_2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogowanieController : ControllerBase
    {

        [HttpPost]
        public LoginResDto Login([FromBody] LogowanieDto login)
        {
            var res = new LoginResDto();
            if (login.login == "admin" && login.haslo == "admin")
            {
                res.rola = "Admin";
            }
            else if (login.login == "user" && login.haslo == "user")
            {
                res.rola = "User";
            }
            else
            {
                throw new Exception("Błędny login lub hasło");
            }

            var klucz = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("bardzotrudnehaslotokena"));
            var poświadczenie = new SigningCredentials(klucz, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken("http://localhost:44398", null, new List<Claim> { new Claim(ClaimTypes.Role, res.rola) }, null, DateTime.Now.AddMinutes(30), poświadczenie);

            res.token = new JwtSecurityTokenHandler().WriteToken(token);
            return res;
        }
    }
}
