using Api_angular.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api_angular.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : Controller
    {
        private readonly FullStackDbContext _fullStackDbContext;

        public TasksController(FullStackDbContext fullStackDbContext) {
            _fullStackDbContext = fullStackDbContext;
        }
        [HttpGet] 
        public async Task<IActionResult> GetAllTasks()
        {
            var tasks = await _fullStackDbContext.Tasks.ToListAsync();

            return Ok(tasks);
        }
    }
}
