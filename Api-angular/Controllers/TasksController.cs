using Api_angular.Data;
using Api_angular.Models;
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

        [HttpPost]
        public async Task<IActionResult> AddTasks([FromBody] Tasks tasksRequest)
        {
            tasksRequest.Id = Guid.NewGuid();
            await _fullStackDbContext.Tasks.AddAsync(tasksRequest);
            await _fullStackDbContext.SaveChangesAsync();

            return Ok(tasksRequest);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetTask([FromRoute]Guid id)
        {
            var task = await _fullStackDbContext.Tasks.FirstOrDefaultAsync(x => x.Id == id);
            if(task == null)
            {
                return NotFound();
            }
            return Ok(task);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateTask([FromRoute]Guid id, Tasks updateTasksRequest)
        {
            var task = await _fullStackDbContext.Tasks.FindAsync(id);

            if(task == null)
            {
                return NotFound();
            }

            task.Name = updateTasksRequest.Name;
            task.Description = updateTasksRequest.Description;
            task.Status = updateTasksRequest.Status;

            await _fullStackDbContext.SaveChangesAsync();

            return Ok(task);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteTask([FromRoute] Guid id)
        {
            var task = await _fullStackDbContext.Tasks.FindAsync(id);

            if (task == null)
            {
                return NotFound();
            }

            _fullStackDbContext.Tasks.Remove(task);

            await _fullStackDbContext.SaveChangesAsync();

            return Ok(task);
        }
    }
}
