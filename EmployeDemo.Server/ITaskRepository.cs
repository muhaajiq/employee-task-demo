using EmployeeDemo.Entities;

namespace EmployeDemo.Server
{
    public interface ITaskRepository
    {
        Task<List<TaskItem>> GetAll();
        Task<TaskItem> Add (TaskItem task);
        Task<TaskItem?> Update(int id, TaskItem task);
        Task<bool> Delete(int id);
        Task<TaskItem?> UpdateStatus(int id, string status);
    }
}
