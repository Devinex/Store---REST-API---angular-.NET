using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TIU_lab_2.Modeles;
using TIU_lab_2.Usługi;

namespace TIU_lab_2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtykulyController : ControllerBase
    {

        private readonly IArtykulUslugi _artykulyUslugi;

        public ArtykulyController(IArtykulUslugi artykulyUslugi)
        {
            _artykulyUslugi = artykulyUslugi;
        }

        [HttpGet]
        [Authorize]
        public IEnumerable<ArtykulDto> Pobierz([FromQuery] StronnicowanieDto stronnicowanie)
        {
            return _artykulyUslugi.Pobierz(stronnicowanie);
        }

        [HttpGet("{id}")]
        [Authorize]
        public ArtykulDto Pobierz(int id)
        {
            return _artykulyUslugi.Pobierz(id);
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public ArtykulDto Dodaj([FromBody] ArtykulDto dto)
        {
            return _artykulyUslugi.Dodaj(dto);
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public ArtykulDto Edytuj(int id, [FromBody] ArtykulDto dto)
        {
            return _artykulyUslugi.Edycja(id, dto);
        }



    }
}