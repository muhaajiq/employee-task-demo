import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./App.css";

function App() {
    const [tasks, setTasks] = useState([]);
    const [form, setForm] = useState({ title: "", description: "", createdBy: "" });
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const role = "manager";

    const loadTasks = () => {
        setLoading(true);
        setError("");

        fetch("http://localhost:5289/api/tasks")
            .then(res => {
                if (!res.ok) throw new Error("Failed to load tasks");
                return res.json();
            })
            .then(data => setTasks(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    };

    useEffect(() => { loadTasks(); }, []); // [] run only on first render, if remove, it runs every render (infinite loop)

    const saveTask = () => {
        if (!form.title || !form.description || !form.createdBy) return;

        fetch("http://localhost:5289/api/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: form.title,
                description: form.description,
                createdBy: form.createdBy,
                status: "New"
            })
        })
            .then(() => {
                setForm({ title: "", description: "", createdBy: "" });
                loadTasks();
            })
            .catch(err => setError(err.message));
    };

    const deleteTask = id => {
        if (!window.confirm("Are you sure you want to delete this task?")) return;

        fetch(`http://localhost:5289/api/tasks/${id}`, { method: "DELETE" })
            .then(loadTasks)
            .catch(err => setError(err.message));
    };

    const approveTask = (id, status) => {
        fetch(`http://localhost:5289/api/tasks/${id}/status`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(status)
        })
            .then(loadTasks)
            .catch(err => setError(err.message));
    };

    const filtered = tasks.filter(t => t.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="container">
            <h1>Employee Task Dashboard</h1>

            <div className="card form">
                <h3>Add Task</h3>

                <input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />

                <textarea placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />

                <input placeholder="Created by" value={form.createdBy} onChange={e => setForm({ ...form, createdBy: e.target.value })} />

                <button onClick={saveTask}>Add Task</button>
            </div>

            <input className="search" placeholder="Search tasks..." value={search} onChange={e => setSearch(e.target.value)} />

            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}

            <div className="task-grid">
                {filtered.map(t => (
                    <div key={t.id} className="card task">
                        <h3>{t.title}</h3>
                        <p>{t.description}</p>
                        <p><b>By:</b> {t.createdBy}</p>
                        <p className={`status ${t.status.toLowerCase()}`}>
                            {t.status}
                        </p>

                        {role === "manager" && t.status === "New" && (
                            <div className="actions">
                                <button onClick={() => approveTask(t.id, "Approved")}>
                                    Approve
                                </button>
                                <button onClick={() => approveTask(t.id, "Rejected")}>
                                    Reject
                                </button>
                            </div>
                        )}
                        <button className="trashbtn" onClick={() => deleteTask(t.id)}><FaTrash /></button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
