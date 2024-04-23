"use client"

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"

const FormSchema = z.object({
    "username": z.string().min(5, {message: "Username is required"}),
    "password": z.string().min(5, {message: "Password is required"}),
})

export default function LoginForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            password: ""
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof FormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return <div className="flex justify-center items-center h-screen">
        <div>
            <Card className="w-[350px]">
                <CardHeader className="text-center p-6">
                    Login
                </CardHeader>
                <CardContent>
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="username" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input  {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="items-center">Submit</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>

        </div>

    </div>
}