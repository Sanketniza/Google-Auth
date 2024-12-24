import { SignIn } from "@clerk/clerk-react"

function Login() {
  return (
        <>
            <div>
                <h1>Login</h1>
                <SignIn signUpUrl="/signup" forceRedirectUrl={"/registration"}/>
            </div>
        </>
    )
}

export default Login