using Microsoft.AspNetCore.Mvc;

namespace Ws1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }


        //public string ViewTop3Players()
        //{
        //    // définition du modèle
        //   var players = new List<TennisPlayer>();
        //    players.Add(new TennisPlayer() { Name = "Doe", LastName = "John", Ranking = 5 , LastTournament = new {City = "Madrid", Result: "Winner"});
        //    players.Add(new TennisPlayer() { Name = "Agassi", LastName = "Andre", Ranking = 5, LastTournament = new { City = "Madrid", Result: "2nd" } });
        //    players.Add(new TennisPlayer() { Name = "Sampras", LastName = "Pete", Ranking = 5, LastTournament = new { City = "Madrid", Result: "1st Roudn" } });



        //}
    }


}

