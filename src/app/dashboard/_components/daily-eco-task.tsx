"use client";

import { cn } from "@/lib/utils";
import { Calendar, CheckCircle, Clock, Leaf, XCircle } from "lucide-react";
import { useState } from "react";

interface Task {
  title: string;
  description: string;
  dueTime: Date;
  completed: boolean;
}

export const DailyEcoTask = () => {
  const [task, setTask] = useState<Task>({
    title: "Segregacja odpadów",
    description:
      "Posegreguj odpady domowe do odpowiednich pojemników: papier, plastik, szkło i odpady organiczne.",
    dueTime: new Date(new Date().setHours(20, 0, 0, 0)),
    completed: false,
  });

  const toggleTaskCompletion = () => {
    setTask((prevTask) => ({ ...prevTask, completed: !prevTask.completed }));
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("pl-PL", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="mx-auto h-fit w-full rounded-lg bg-green-50 p-6 shadow-lg">
      <h1 className="mb-4 text-2xl font-bold text-green-800">
        Dzisiejsze Eko-Zadanie
      </h1>
      <div
        className={cn(
          "rounded-md p-4 transition-colors duration-200",
          task.completed ? "bg-green-200" : "bg-blue-100",
        )}
      >
        <div className="mb-2 flex items-center justify-between">
          <h2 className="flex items-center text-xl font-semibold text-green-800">
            <Leaf className="mr-2 h-6 w-6 text-green-600" />
            {task.title}
          </h2>
          <button
            onClick={toggleTaskCompletion}
            className="text-green-600 transition-colors duration-200 hover:text-green-800"
            aria-label={
              task.completed
                ? "Oznacz jako niewykonane"
                : "Oznacz jako wykonane"
            }
          >
            {task.completed ? (
              <CheckCircle className="h-6 w-6" />
            ) : (
              <XCircle className="h-6 w-6" />
            )}
          </button>
        </div>
        <p className="mb-4 text-green-700">{task.description}</p>
        <div className="flex items-center text-sm text-green-600">
          <Calendar className="mr-1 h-4 w-4" />
          <span className="mr-4">Dzisiaj</span>
          <Clock className="mr-1 h-4 w-4" />
          <span>Do: {formatTime(task.dueTime)}</span>
        </div>
        {task.completed && (
          <div className="mt-2 text-sm font-semibold text-green-700">
            Zadanie wykonane! Dobra robota!
          </div>
        )}
      </div>
    </div>
  );
};
