"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppStore } from "@/lib/redux/hooks";
import { addTodo } from "@/lib/redux/reducer/todo";

const formSchema = z.object({
  text: z.string().min(1, {
    message: "Todo must be at least 2 characters.",
  }),
});

export function TodoForm() {
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(addTodo(values.text));
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex w-full items-center space-x-2">
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem className="w-full flex-1">
                <FormControl>
                  <Input placeholder="Buy eggs and milk" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="min-w-[20%]">
            Add
          </Button>
        </div>
      </form>
    </Form>
  );
}
