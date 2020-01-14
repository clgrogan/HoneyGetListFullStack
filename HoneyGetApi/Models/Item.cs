using System;

namespace HoneyGetApi.Models
{

  public class Item
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int Quantity { get; set; }
    public int Priority { get; set; } // Lower number is higher priority
    public DateTime LastModified { get; set; }

    public int TheListId { get; set; }
    public TheList TheList { get; set; }

    public int CategoryId { get; set; }
    public Category Category { get; set; }



  }

}