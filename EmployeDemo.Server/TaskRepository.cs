using EmployeeDemo.Entities;
using Microsoft.EntityFrameworkCore;

namespace EmployeDemo.Server
{
    public class TaskRepository : ITaskRepository
    {
        private readonly AppDbContext _db;

        public TaskRepository(AppDbContext db)
        {
            _db = db;
        }

        public async Task<List<TaskItem>> GetAll() => await _db.Tasks.ToListAsync();

        public async Task<TaskItem> Add(TaskItem task)
        {
            _db.Tasks.Add(task);
            await _db.SaveChangesAsync();
            return task;
        }

        public async Task<TaskItem?> Update(int id, TaskItem task)
        {
            var existing = await _db.Tasks.FindAsync(id);
            if (existing == null) return null;

            existing.Title = task.Title;
            existing.Status = task.Status;

            await _db.SaveChangesAsync();
            return existing;
        }

        public async Task<bool> Delete(int id)
        {
            var task = await _db.Tasks.FindAsync(id);
            if (task == null) return false;

            _db.Tasks.Remove(task);
            await _db.SaveChangesAsync();
            return true;
        }

        public async Task<TaskItem?> UpdateStatus(int id, string status)
        {
            var task = await _db.Tasks.FindAsync(id);
            if (task == null) return null;

            task.Status = status;
            await _db.SaveChangesAsync();
            return task;
        }
    }
}
