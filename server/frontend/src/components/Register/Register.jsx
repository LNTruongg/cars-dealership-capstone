import React, { useState } from "react";


function Register() {

    const [formData, setFormData] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(formData);

    };


    return (

        <div>

            <h1>Sign-up</h1>


            <form onSubmit={handleSubmit}>


                <label>
                    Username
                </label>

                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />



                <label>
                    First Name
                </label>

                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />



                <label>
                    Last Name
                </label>

                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />



                <label>
                    Email
                </label>

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />



                <label>
                    Password
                </label>

                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />



                <button type="submit">
                    Register
                </button>


            </form>

        </div>

    );

}


export default Register;
