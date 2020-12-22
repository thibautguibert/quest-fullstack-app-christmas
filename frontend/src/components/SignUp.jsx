import React, { useState } from "react";

const SignUp = () => {
    const [values, setValues] = useState({
        email: "mon@email.com",
        password: "monPassw0rd",
        passwordbis: "monPassw0rd",
        name: "James",
        lastname: "Bond"
    });
    const updateValuesOnChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.password !== values.passwordbis) {
            alert("passwords are different")
        } else console.log(values);
    }
    return (
        <>
            <h1>{JSON.stringify(values)}</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">your email: </label>
                    <input type="email" name="email" id="email" value={values.email} onChange={updateValuesOnChange} />
                </div>
                <div>
                    <label htmlFor="password">your password: </label>
                    <input type="password" name="password" id="password" value={values.password} onChange={updateValuesOnChange} />
                </div>
                <div>
                    <label htmlFor="passwordbis">confirm your password: </label>
                    <input type="password" name="passwordbis" id="passwordbis" value={values.passwordbis} onChange={updateValuesOnChange} />
                </div>
                <div>
                    <label htmlFor="name">your name: </label>
                    <input type="text" name="name" id="name" value={values.name} onChange={updateValuesOnChange} />
                </div>
                <div>
                    <label htmlFor="lastname">your last name: </label>
                    <input type="text" name="lastname" id="lastname" value={values.lastname} onChange={updateValuesOnChange} />
                </div>
                <input type="submit" value="Soumettre" />
            </form>
        </>
    )
}

export default SignUp;