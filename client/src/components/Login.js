import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
    const {register, handleSubmit} = useForm()
    const [result, setResult] = useState("")
    console.log(result)

    const onSubmit = (data) => {
        setResult(JSON.stringify(data))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                className="p-2 px-16 border rounded outline-none"
                {...register("email")}
                placeholder="Email"
            />
            <br />
            <input
                className="p-2 px-16 border rounded outline-none"
                {...register("password")}
                placeholder="Password"
            />
            <br />
            <input type="submit" />
        </form>
    )
}

export default Login
