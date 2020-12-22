import React, { useState } from "react";

const SignUp = () => {
    const [email, setEmail] = useState("test@test.com");
    const updateEmailfield = (e) => {
        setEmail(e.target.value)
    }
    return (
        <>
            <h1>{email}</h1>
            <input type="email" name="email" onChange={updateEmailfield} />
        </>
    )
}

export default SignUp;