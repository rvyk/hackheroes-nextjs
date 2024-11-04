"use client";

import { cn } from "@/lib/utils";
import {
  Calendar,
  Check,
  Clock,
  Droplet,
  Home,
  Leaf,
  Recycle,
  ShoppingBag,
  Sun,
  Wind,
} from "lucide-react";
import { createElement, useState } from "react";

type Category = "home" | "outdoor" | "shopping";

interface Todo {
  id: number;
  text: string;
  icon: any;
  completed: boolean;
  points: number;
  category: Category;
  date: Date;
  completedAt?: Date;
}

const categoryColors: Record<Category, string> = {
  home: "bg-blue-100",
  outdoor: "bg-green-100",
  shopping: "bg-yellow-100",
};

const categoryIcons: Record<Category, any> = {
  home: Home,
  outdoor: Sun,
  shopping: ShoppingBag,
};

export const EcoTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: "Podlać rośliny",
      icon: Droplet,
      completed: true,
      points: 5,
      category: "home",
      date: new Date(2023, 5, 15),
      completedAt: new Date(2023, 5, 15, 10, 30),
    },
    {
      id: 2,
      text: "Posegregować odpady",
      icon: Recycle,
      completed: false,
      points: 10,
      category: "home",
      date: new Date(2023, 5, 15),
    },
    {
      id: 3,
      text: "Użyć toreb wielokrotnego użytku",
      icon: Leaf,
      completed: true,
      points: 15,
      category: "shopping",
      date: new Date(2023, 5, 16),
      completedAt: new Date(2023, 5, 16, 14, 45),
    },
    {
      id: 4,
      text: "Wyłączyć niepotrzebne światła",
      icon: Sun,
      completed: false,
      points: 5,
      category: "home",
      date: new Date(2023, 5, 16),
    },
    {
      id: 5,
      text: "Suszyć pranie na powietrzu",
      icon: Wind,
      completed: false,
      points: 10,
      category: "home",
      date: new Date(2023, 5, 17),
    },
    {
      id: 6,
      text: "Posadzić drzewo",
      icon: Leaf,
      completed: false,
      points: 20,
      category: "outdoor",
      date: new Date(2023, 5, 18),
    },
    {
      id: 7,
      text: "Kupić lokalne produkty",
      icon: ShoppingBag,
      completed: false,
      points: 15,
      category: "shopping",
      date: new Date(2023, 5, 18),
    },
  ]);

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
              completedAt: todo.completed ? undefined : new Date(),
            }
          : todo,
      ),
    );
  };

  const totalPoints = todos.reduce(
    (sum, todo) => (todo.completed ? sum + todo.points : sum),
    0,
  );

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("pl-PL", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const groupedTodos = todos.reduce(
    (acc, todo) => {
      if (!acc[todo.category]) {
        acc[todo.category] = [];
      }
      acc[todo.category].push(todo);
      return acc;
    },
    {} as Record<Category, Todo[]>,
  );

  return (
    <div className="h-fit w-full max-w-xl rounded-lg bg-green-50 p-6 shadow-lg">
      <h1 className="mb-4 text-2xl font-bold text-green-800">
        Ekologiczna Lista Zadań
      </h1>
      {Object.entries(groupedTodos).map(([category, categoryTodos]) => (
        <div key={category} className="mb-6">
          <h2 className="mb-2 flex items-center text-lg font-semibold text-green-700">
            {createElement(categoryIcons[category as Category], {
              className: "w-5 h-5 mr-2",
            })}
            {category === "home"
              ? "Dom"
              : category === "outdoor"
                ? "Na zewnątrz"
                : "Zakupy"}
          </h2>
          <ul className="space-y-3">
            {categoryTodos.map((todo) => (
              <li
                key={todo.id}
                className={cn(
                  "flex flex-col rounded-md p-3 transition-colors duration-200",
                  todo.completed
                    ? "bg-green-200"
                    : categoryColors[todo.category],
                )}
                onClick={() => toggleTodo(todo.id)}
              >
                <div className="flex items-center">
                  <todo.icon className="mr-3 h-6 w-6 text-green-600" />
                  <span
                    className={cn(
                      "flex-grow text-green-800",
                      todo.completed && "line-through",
                    )}
                  >
                    {todo.text}
                  </span>
                  <span className="mr-2 font-semibold text-green-600">
                    {todo.points} pkt
                  </span>
                  {todo.completed && (
                    <Check className="h-5 w-5 text-green-600" />
                  )}
                </div>
                <div className="mt-2 flex items-center text-sm text-green-600">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span className="mr-4">{formatDate(todo.date)}</span>
                  {todo.completed && (
                    <>
                      <Clock className="mr-1 h-4 w-4" />
                      <span>Ukończono: {formatTime(todo.completedAt!)}</span>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="mt-6 border-t border-green-200 pt-4">
        <p className="text-lg font-semibold text-green-800">
          Suma punktów: {totalPoints}
        </p>
      </div>
    </div>
  );
};
