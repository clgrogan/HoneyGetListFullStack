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
    public class TheListController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public TheListController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/TheList
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TheList>>> GetTheLists()
        {
            return await _context.TheLists.ToListAsync();
        }

        // GET: api/TheList/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TheList>> GetTheList(int id)
        {
            var theList = await _context.TheLists.FindAsync(id);

            if (theList == null)
            {
                return NotFound();
            }

            return theList;
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

            _context.Entry(theList).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
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
        public async Task<ActionResult<TheList>> PostTheList(TheList theList)
        {
            _context.TheLists.Add(theList);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTheList", new { id = theList.Id }, theList);
        }

        // DELETE: api/TheList/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TheList>> DeleteTheList(int id)
        {
            var theList = await _context.TheLists.FindAsync(id);
            if (theList == null)
            {
                return NotFound();
            }

            _context.TheLists.Remove(theList);
            await _context.SaveChangesAsync();

            return theList;
        }

        private bool TheListExists(int id)
        {
            return _context.TheLists.Any(e => e.Id == id);
        }
    }
}
