using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HoneyGetApi.Models;

namespace HoneyGetApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CategoryController : ControllerBase
  {
    private readonly DatabaseContext db;

    public CategoryController(DatabaseContext context)
    {
      db = context;
    }

    // GET: api/Category
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Category>>> GetCategories()
    {
      return await db.Categories.ToListAsync();
    }

    // GET: api/Category/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Category>> GetCategory(int id)
    {
      var category = await db.Categories.FindAsync(id);

      if (category == null)
      {
        return NotFound();
      }

      return category;
    }

    // PUT: api/Category/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutCategory(int id, Category category)
    {
      if (id != category.Id)
      {
        return BadRequest();
      }

      db.Entry(category).State = EntityState.Modified;

      try
      {
        await db.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!CategoryExists(id))
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

    // POST: api/Category
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<CategoryNewVm>> PostCategory(CategoryNewVm category)
    {
      var rv = await db
                  .Categories
                  .FirstOrDefaultAsync(f => f.Name.ToLower() == category.Name.ToLower());
      if (rv != null)
      {
        return BadRequest($"A category with the name '{category.Name}' already exists.");
      }

      var categoryRecord = new Category
      {
        Name = category.Name,
        Description = category.Description,

      };
      db.Categories.Add(categoryRecord);
      await db.SaveChangesAsync();
      return CreatedAtAction("PostCategory", new { id = category.Id }, categoryRecord);
      //   db.Categories.Add(category);
      //   await db.SaveChangesAsync();

      //   return CreatedAtAction("GetCategory", new { id = category.Id }, category);
    }

    // DELETE: api/Category/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Category>> DeleteCategory(int id)
    {
      var category = await db.Categories.FindAsync(id);
      if (category == null)
      {
        return NotFound();
      }

      db.Categories.Remove(category);
      await db.SaveChangesAsync();

      return category;
    }

    private bool CategoryExists(int id)
    {
      return db.Categories.Any(e => e.Id == id);
    }
  }
}
