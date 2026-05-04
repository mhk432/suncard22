import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://suncard.vercel.app"
})

export const { signIn, signUp, useSession } = createAuthClient()

