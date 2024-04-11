"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { TrashIcon } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { deleteTodo, updateDone } from "@/lib/redux/reducer/todo";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const toggleTodo = (id: string) => {
    dispatch(updateDone({ id }));
  };
  return (
    <div className="mt-8 border rounded-lg">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="w-full flex flex-1 justify-between bg-card border-b items-center p-3 last:border-b-0 "
        >
          <p className="text-sm font-medium leading-none w-1/3">
            {todo.description}
          </p>
          <div className="items-top flex space-x-2 w-1/3">
            <Checkbox
              id="done"
              checked={todo.done}
              onCheckedChange={() => toggleTodo(todo.id)}
            />
            <Label
              htmlFor="done"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Done
            </Label>
          </div>
          <TrashIcon
            className="hover:cursor-pointer w-5 h-5"
            onClick={() => handleDelete(todo.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
