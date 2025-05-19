'use client'
import {FileJson2, ShieldUser} from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {ComponentPropsWithoutRef, useActionState} from 'react'
import {signin} from "@/actions/auth.action";
import Link from "next/link"

export default function SignInForm({className, ...props}: ComponentPropsWithoutRef<"div">) {
    const [state, action, pending] = useActionState(signin, undefined)

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <form action={action} noValidate={true}>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <Link
                            href="/"
                            className="flex flex-col items-center gap-2 font-medium"
                        >
                            <div className="flex h-8 w-8 items-center justify-center rounded-md">
                                <FileJson2 className="size-6"/>
                            </div>
                            <span className="sr-only">Dummy JSON.</span>
                        </Link>
                        <h1 className="text-xl font-bold">Welcome to Dummy JSON.</h1>
                        <div className="text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link href="#" className="underline underline-offset-4">
                                Sign Up
                            </Link>
                        </div>

                        <Alert>
                            <ShieldUser className="h-4 w-4" />
                            <AlertTitle>Demo User</AlertTitle>
                            <AlertDescription>
                                <p className="text-sm">
                                    Username: <strong>emilys</strong>
                                </p>
                                <p className="text-sm">
                                    Password: <strong>emilyspass</strong>
                                </p>
                                <Link href="https://dummyjson.com/users" className="underline text-teal-600">Or more user</Link>
                            </AlertDescription>
                        </Alert>

                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="johndoe"
                                required
                            />
                            {state?.errors?.username && <p className="text-destructive text-sm font-light">{state.errors.username}</p>}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                required
                            />
                            {state?.errors?.password && <p className="text-destructive text-sm font-light">{state.errors.password}</p>}
                        </div>
                        <Button disabled={pending} type="submit" className="w-full">
                            Sign In
                        </Button>
                    </div>
                </div>
            </form>
            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </div>
        </div>
    )
}