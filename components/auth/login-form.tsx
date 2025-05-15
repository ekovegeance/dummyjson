import {FileJson2, ShieldUser} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ComponentPropsWithoutRef } from "react"
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


export function LoginForm({className, ...props}: ComponentPropsWithoutRef<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <form>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <Link
                            href="/"
                            className="flex flex-col items-center gap-2 font-medium"
                        >
                            <div className="flex h-8 w-8 items-center justify-center rounded-md">
                                <FileJson2 className="size-6" />
                            </div>
                            <span className="sr-only">Dummy JSON</span>
                        </Link>
                        <h1 className="text-xl font-bold">Welcome to DummyJSON.</h1>
                        <div className="text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <a href="#" className="underline underline-offset-4">
                                Sign up
                            </a>
                        </div>

                        <Alert>
                            <ShieldUser className="h-4 w-4" />
                            <AlertTitle>Demo user</AlertTitle>
                            <AlertDescription >
                                <div>
                                    <p>username : emilys</p>
                                    <p>password : emilyspass</p>
                                </div>
                            </AlertDescription>
                        </Alert>

                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="johndoe"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full">
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
