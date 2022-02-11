using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TIU_lab_2.Modeles;
using TIU_lab_2.Usługi;

namespace TIU_lab_2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KoszykController : ControllerBase
    {

        private readonly IKoszykUslugi _koszykUslugi;
        public KoszykController(IKoszykUslugi data)
        {
            _koszykUslugi = data;
        }


        [HttpGet]
        [Authorize]
        public IEnumerable<ArtykulDto> Get()
        {
            return _koszykUslugi.Get();
        }

        [HttpPost]
        [Authorize]
        public IEnumerable<ArtykulDto> Post([FromBody] ArtykulDto dto)
        {
            return _koszykUslugi.Post(dto);
        }

        [HttpPut]
        [Authorize]
        public IEnumerable<ArtykulDto> Wyczysc()
        {
            return _koszykUslugi.WyczyscKoszyk();
        }



    }
}
