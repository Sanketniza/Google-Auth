import { SignUp } from "@clerk/clerk-react";

function Signup() {
  return (
        <>
            <h3>signup page is know introduced</h3>
            <SignUp signInUrl="login" forceRedirectUrl={"/registration"}/>
        </>
    )
}

export default Signup;