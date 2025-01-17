using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Ws1.Models;

namespace Ws1.Controllers
{
    [Route("api/player")]
    [ApiController]
    public class PlayerController : ControllerBase
    {

        private static List<Player> PlayerList = new()
        {
            new Player { Id = 1, Name = "Polo", FirstName = "Jean", Ranking=1},
            new Player { Id = 2, Name = "Sampras", FirstName = "Pierre", Ranking=2},
        };
        private static int MaxId = 2;
        [HttpGet()]
        public List<Player> Get()
        {
            return PlayerList;
        }

        [HttpGet("{id}")]
        public Player Get( int id)
        {
            return PlayerList.First();
        }

        [HttpPut("{id}")]
        public Player Put([FromBody] Player player, int id)
        {
            var playerIndex = PlayerList.FindIndex(p => p.Id == id);
            PlayerList[playerIndex] = player;
            return player;
        }

        [HttpPost]
        public ObjectResult Post([FromBody] Player player)
        {
            MaxId++;
            player.Id = MaxId;
            PlayerList.Add(player);
            return Created($"api/player/{player.Id}", new { Id = player.Id});
        }


    }
}
