import { useState } from "react";
import User from "../User";
import { FormButton, FormInput, FormStyled, FormTitle } from "./styles";

const Form = () => {
    const [ data, setData ] = useState ({
        username: '',
        password: '',
    });

    const [ user, setUser ] = useState("");

    const handleChange = (e) => {
        setData({
            ...data, 
            [ e.target.name ]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser(data.username)
    }

    return (
        user.length > 0
            ? <User user={data.username} />
            : (
                <>
                    <FormTitle>LOGIN</FormTitle>
                    <FormStyled onSubmit={(e)=> handleSubmit(e)}>
                        <FormInput 
                            value={data.username}
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={(e) => handleChange(e)}
                        />
                        <FormInput 
                            value={data.password}
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => handleChange(e)}
                        />
                        <FormButton type="submit" primary>Login</FormButton>
                    </FormStyled>
                </>
            )
    );
}

export default Form;