using System.Collections.Generic;

namespace HoneyGetApi.ViewModels
{
  public class TheListDetails
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }

    // List built from the ExistingItem view model
    public List<ExistingItem> Items { get; set; } = new List<ExistingItem>();

  }
}