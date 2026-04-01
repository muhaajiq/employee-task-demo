using EmployeeDemo.Entities;

namespace EmployeDemo.Server.Services
{
    public class TaskService
    {
        public readonly ITaskRepository _repo;

        public TaskService(ITaskRepository repo)
        {
            _repo = repo;
        }

        public Task<List<TaskItem>> GetTasks() => _repo.GetAll();

        public Task<TaskItem> AddTask(TaskItem task) => _repo.Add(task);
        public Task<TaskItem?> UpdateTask(int id, TaskItem task) => _repo.Update(id, task);
        public Task<bool> DeleteTask(int id) => _repo.Delete(id);
        public Task<TaskItem?> UpdateStatus(int id, string status) => _repo.UpdateStatus(id, status);
    }
}
