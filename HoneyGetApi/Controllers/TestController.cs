// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Http;
// using Microsoft.AspNetCore.Mvc;
// using HoneyGetApi.Models;
// using HoneyGetApi.ViewModels;
// using Microsoft.EntityFrameworkCore;

// namespace HoneyGetApi.Controllers
// {
//   [Route("api/[controller]")]
//   [ApiController]
//   public class TestController : ControllerBase
//   {
//     private readonly DatabaseContext db;

//     public TestController(DatabaseContext context)
//     {
//       db = context;
//     }

//     // GET: api/TheList
//     [HttpGet]
//     public async Task<ActionResult<IEnumerable<TheList>>> AllLists()
//     {
//       return await db.TheLists.ToListAsync();
//     }
//   }
// }