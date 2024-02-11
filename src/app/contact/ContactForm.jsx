"use client"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { HOSTNAME } from "@/constants/constants";

export default function ContactForm() {
    const formSchema = z.object({
        fullName: z.string().min(2).max(50),
        email: z.string().includes("@", { message: "Enter correct email!" }),
        subject: z.string().min(4),
        summary: z.string()
    })

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            subject: "",
            summary: ""
        },
    })

    async function onSubmit(values) {
        const res = await fetch(`${HOSTNAME}/api/contact`, {method: "POST", body: JSON.stringify(values), headers: {'content-type': 'application/json'}});
        const data = await res.json();
        alert(data?.message);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name*</FormLabel>
                            <FormControl>
                                <Input placeholder="Your good name?" {...field} />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email*</FormLabel>
                            <FormControl>
                                <Input placeholder="Your email?" {...field} />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject*</FormLabel>
                            <FormControl>
                                <Input placeholder="What is your Subject?" {...field} />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="summary"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Summary*</FormLabel>
                            <FormControl>
                                <Input placeholder="Write your summary" {...field} />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                        </FormItem>
                    )}
                />
                <Button className="text-active border-active" variant="outline" type="submit">Submit</Button>
            </form>
        </Form>
    )
}