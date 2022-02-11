using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TIU_lab_2.Modeles;

namespace TIU_lab_2.Usługi
{
    public interface IKoszykUslugi
    {
        public List<ArtykulDto> Get();
        public List<ArtykulDto> WyczyscKoszyk();
        public List<ArtykulDto> Post(ArtykulDto dto);
    }

public class KoszykUsługi : IKoszykUslugi
{

    private ArtykulUslugi data = new ArtykulUslugi();
    public List<ArtykulDto> Get()
    {
        return data.koszyk;
    }

    public List<ArtykulDto> Post(ArtykulDto dto)
    {
        data.koszyk
                  .Add(data.artykuly.FirstOrDefault(
                      x => x.id == dto.id));
        return data.koszyk;
    }

    public List<ArtykulDto> WyczyscKoszyk()
    {
        data.koszyk = new List<ArtykulDto>();
        return data.koszyk;



    }
}
}
