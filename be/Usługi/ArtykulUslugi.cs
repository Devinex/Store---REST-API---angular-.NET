using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using TIU_lab_2.Modeles;

namespace TIU_lab_2.Usługi
{
    public interface IArtykulUslugi
    {
        IEnumerable<ArtykulDto> Pobierz(StronnicowanieDto stronnicowanie);
        ArtykulDto Pobierz(int id);
        ArtykulDto Dodaj(ArtykulDto dto);
        ArtykulDto Edycja(int id, ArtykulDto dto);
      
        
    }
    public class ArtykulUslugi : IArtykulUslugi
    {
       

        public List<ArtykulDto> artykuly = new List<ArtykulDto>
        {
       
            new ArtykulDto {id=1,nazwa="Słuchawki",opis="Cloud II Słuchawki HyperX",cena=300,src="assets/sluchawki.jpg"},
            new ArtykulDto {id=2,nazwa="Klawiatura",opis="Klawiatura LOGITECH K120",cena=300,src="assets/klawiatura.jpg " },
            new ArtykulDto {id=3,nazwa="Monitor",opis="Monitor MSI OPTIX G241VC",cena=300,src=" assets/monitor.jpg"},


    };  
           public List<ArtykulDto> koszyk = new List<ArtykulDto>();
        public IEnumerable<ArtykulDto> Pobierz(StronnicowanieDto stronnicowanie)
        {
            return artykuly.Skip((stronnicowanie.strona - 1) * stronnicowanie.ilosc).Take(stronnicowanie.ilosc);
        }

         
   

    public ArtykulDto Pobierz(int id)
    {
        return artykuly.Find(o => o.id == id);
    }

    public ArtykulDto Dodaj(ArtykulDto dto)
    {
        dto.id = artykuly.Max(o => o.id) + 1;
       artykuly.Add(dto);
        return dto;
    }

    public ArtykulDto Edycja(int id, ArtykulDto dto)
    {
        var artykul = artykuly.Find(o => o.id == id);
        artykul.nazwa = dto.nazwa;
        artykul.opis = dto.opis;
        artykul.cena = dto.cena;
        artykul.src = dto.src;
        return artykul;
    }

      
    }
}
