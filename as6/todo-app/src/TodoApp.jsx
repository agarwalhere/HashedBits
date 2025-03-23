import { useState } from "react";
import { Trash2 } from "lucide-react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      const newTasks = [...tasks, task].sort();
      setTasks(newTasks);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
          className="flex-1 border p-2 rounded"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b">
            {t}
            <button onClick={() => removeTask(index)} className="text-red-500">
              <Trash2 size={16} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
