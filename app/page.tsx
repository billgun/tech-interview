"use client";

import { TodoForm } from "@/components/todo-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StoreProvider from "./store-provider";
import TodoList from "@/components/todo-list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="min-w-[800px] shadow-md">
        <CardHeader>
          <CardTitle>Simple TO DO</CardTitle>
          <CardDescription>List of things to do</CardDescription>
        </CardHeader>
        <CardContent>
          <TodoForm />
          <TodoList />
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </main>
  );
}
