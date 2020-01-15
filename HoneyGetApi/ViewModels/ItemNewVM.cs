
namespace HoneyGetApi.ViewModels
{
  public class ItemNewVM
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int Priority { get; set; } // Lower number is higher priority
    public int TheListId { get; set; }
    public int CategoryId { get; set; }
  }
}