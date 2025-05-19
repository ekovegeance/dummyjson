"use server";
import {FormState, SignInFormSchema} from "@/lib/definitions/auth"
import {signIn} from "@/auth";
import {redirect} from "next/navigation";


export async function signin(state: FormState, formData: FormData) {
    // console.log(formData)
    // Validate form fields
    const validatedFields = SignInFormSchema.safeParse({
        username: formData.get('username'),
        password: formData.get('password'),
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // Destructure the validated fields
    const {username, password} = validatedFields.data

    // Call the provider or db to create a user...
    const result = await signIn("credentials", {username, password, redirect: false})
    if (result?.error) {
        return {
            errors: {
                username: [result.error],
                password: [result.error],
            },
        };
    }
    // If the sign-in was successful, redirect to the home page
    redirect(result.url || "/");
}