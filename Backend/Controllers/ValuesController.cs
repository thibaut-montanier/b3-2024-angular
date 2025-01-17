using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Ws1.Controllers
{
    [Route("api/parici")]
    [ApiController]
    public class ValuesController : ControllerBase
    {

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Bouhouhou(int id)
        {
        }
        

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public string Post(int id)
        {
            return "value";
        }

        // POST api/<ValuesController>
        [HttpPost]
        public void GetSiSi([FromBody] string value)
        {
        }

        // GET: api/<ValuesController>
        [HttpGet]
        public IEnumerable<string> Fifou()
        {
            return new string[] { "value1", "value2" };
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Palapapa(int id, [FromBody] string value)
        {
        }


    }
}
