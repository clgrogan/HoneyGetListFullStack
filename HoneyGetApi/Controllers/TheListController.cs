using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
// using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HoneyGetApi.Models;
using HoneyGetApi.ViewModels;

namespace HoneyGetApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class TheListController : ControllerBase
  {
    private readonly DatabaseContext db;

    public TheListController(DatabaseContext context)
    {
      db = context;
    }

    // GET: api/TheList
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Object>>> GetTheLists()
    {
      return await db.TheLists
            .Include(i => i.Items)
            .Select(list => new
            {
              Id = list.Id,
              list.Name,
              list.Description,
              itemcount = list.Items.Count(),
              maxpriority = list.Items.Max(i => i.Priority)
            })
            .ToListAsync();
    }

    // GET: api/TheList/5
    [HttpGet("{id}")]
    public async Task<ActionResult<TheList>> GetTheList(int id)
    {
      var theList = await db
      .TheLists
      .Include(i => i.Items)
      .FirstOrDefaultAsync(f => f.Id == id);

      if (theList == null)
      {
        return NotFound($"No List exists with the ID passed. ID passed : {id}");
      }
      else
      {
        var rv = new TheListDetailsVm
        {
          Id = theList.Id,
          Name = theList.Name,
          Description = theList.Description,
          Items = theList.Items.Select(item => new ExistingItemVm
          {
            Id = item.Id,
            Name = item.Name,
            Description = item.Description,
            Quantity = item.Quantity,
            Priority = item.Priority,
            LastModified = item.LastModified,
            TheListId = item.TheListId
          }).ToList()
        };
        return Ok(rv);
      }
    }

    // PUT: api/TheList/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutTheList(int id, TheList theList)
    {
      if (id != theList.Id)
      {
        return BadRequest();
      }

      db.Entry(theList).State = EntityState.Modified;

      try
      {
        await db.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!TheListExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/TheList
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<TheListNewVm>> PostTheList(TheListNewVm theList)
    {
      // If a list with the same name exists return bad request.
      var rv = await db
                .TheLists
                .FirstOrDefaultAsync(f => f.Name.ToLower() == theList.Name.ToLower());
      if (rv != null)
      {
        return BadRequest($"A list with the name '{theList.Name}' already exists.");
      }

      var theListRecord = new TheList
      {
        Name = theList.Name,
        Description = theList.Description
      };
      db.TheLists.Add(theListRecord);
      await db.SaveChangesAsync();

      return CreatedAtAction("PostTheList", new { id = theList.Id }, theListRecord);
    }

    // DELETE: api/TheList/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<TheList>> DeleteTheList(int id)
    {
      var theList = await db.TheLists.FindAsync(id);
      if (theList == null)
      {
        return NotFound();
      }

      db.TheLists.Remove(theList);
      await db.SaveChangesAsync();

      return theList;
    }

    private bool TheListExists(int id)
    {
      return db.TheLists.Any(e => e.Id == id);
    }
  }
}
