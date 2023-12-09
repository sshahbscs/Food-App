"use client";
import Image from "next/image";
import { useState } from "react";
export default function RegisterPage(){

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState('');

    function handleFormSubmit(ev){
        ev.preventDefault();
        fetch('/api/register',{
            method :'POST',
            body: JSON.stringify({email,password}),
            header:{'Content-Type':'application/json'},
        })
    }

    return(
        <div>
            <section>
                <h1 className="text-center text-primary
                text-4xl mt-8 mb-4">
                    Register
                </h1>
                <form 
                className="block max-w-sm mx-auto "
                onSubmit={handleFormSubmit}>
                    <input type="email" placeholder="Email" value={email}
                    onChange={ev=> setEmail(ev.target.value)} />
                    <input type="password" placeholder="Password" 
                    value={password} onChange={ev=>setPassword(ev.target.value)}/>
                    <button type="submit">Register</button>
                    <div className="text-gray-500 text- center my-4">
                        or login with provider
                    </div>
                    <button className="flex gap-4 justify-center">
                        <Image src={'/google.png'} alt={'google-logo'} width={24} height={24} />
                        Login with google
                    </button>
                </form>
                <div>
                    
                </div>
            </section>
        </div>
    );
}