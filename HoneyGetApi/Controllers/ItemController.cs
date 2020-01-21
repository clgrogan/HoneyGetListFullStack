using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HoneyGetApi.Models;
using HoneyGetApi.ViewModels;

namespace HoneyGetApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ItemController : ControllerBase
  {
    private readonly DatabaseContext db;

    public ItemController(DatabaseContext context)
    {
      db = context;
    }

    // GET: api/Item
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Item>>> GetItems()
    {
      return await db.Items.ToListAsync();
    }

    // GET: api/Item/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Item>> GetItem(int id)
    {
      var item = await db.Items.FindAsync(id);

      if (item == null)
      {
        return NotFound();
      }

      return item;
    }

    // PUT: api/Item/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutItem(int id, Item item)
    {
      if (id != item.Id)
      {
        return BadRequest();
      }

      db.Entry(item).State = EntityState.Modified;

      try
      {
        await db.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ItemExists(id))
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

    // POST: api/Item
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<ItemNewVm>> PostItem(ItemNewVm item)
    {
      // If an item with the same name exists return bad request.
      var rv = await db
                .Items
                .FirstOrDefaultAsync(f => f.Name.ToLower() == item.Name.ToLower() && f.TheListId == item.TheListId);
      if (rv != null)
      {
        return BadRequest($"An item with the name '{item.Name}' already exists in this list.");
      }
      var itemRecord = new Item
      {
        Name = item.Name,
        Description = item.Description,
        TheListId = item.TheListId,
        Quantity = 1,
        CategoryId = null,
        Priority = 4,
        LastModified = DateTime.UtcNow
      };

      db.Items.Add(itemRecord);
      await db.SaveChangesAsync();

      return CreatedAtAction("PostItem", new { id = item.Id }, itemRecord);
    }

    // DELETE: api/Item/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Item>> DeleteItem(int id)
    {

      var item = await db.Items.FindAsync(id);
      if (item == null)
      {
        return NotFound();
      }

      db.Items.Remove(item);
      await db.SaveChangesAsync();

      return item;
    }

    private bool ItemExists(int id)
    {
      return db.Items.Any(e => e.Id == id);
    }
  }
}
