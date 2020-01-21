using System.Collections.Generic;

namespace HoneyGetApi.ViewModels
{
  public class TheListDetailsVm
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }

    // List built from the ExistingItem view model
    public List<ExistingItemVm> Items { get; set; } = new List<ExistingItemVm>();

  }
}