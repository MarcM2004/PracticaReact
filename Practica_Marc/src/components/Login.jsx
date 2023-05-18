import { useEffect, useState } from 'react'

export function Login(){
    // Define state variables for username and password
    const [username, saveUser] = useState("")
    const [password, savePass] = useState("")

    useEffect(() =>{
        console.log("Componente Montado");
        return()=>{
            console.log("Componente Desmontado");
        }
        }
    )

    //When you press login, there will be an alert with your username and you password
    function handleForm(ev)
    {
        ev.preventDefault();
        alert(`Username: ${username} || Password: ${password}`)
    }

    //Every time there's an input, the function updates the data inside the variables defined before
    function handleInput(ev)
    {
        console.log(ev)
        switch (ev.target.id)
        {
            case "username":
                saveUser(ev.target.value)
                break;
            case "password":
                savePass(ev.target.value);
                break;
            default:
                break;
        }
    }

    return (
    <>
        <div className="registerContainer">
            <div className="container-login">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title display-6">Login</h5>
                            <div className="row align-items-start"> 
                                <div className="col">
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="text" className="form-control" id="username" placeholder="name@example.com" onInput={handleInput}/>
                                        <label htmlFor="htmlfor">Email or Username</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="password" placeholder="Password" onInput={handleInput}/>
                                                <label htmlFor="htmlfor">Password</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox"/>
                                                <label className="form-check-label">
                                                Keep me logged in
                                                </label>
                                            </div>
                                            <div>
                                                <button type="button" className="btn btn-primary .bg-primary mt-3" role="button" onClick={handleForm}>
                                                    Login 
                                                </button>
                                            </div>                                                
                                        </div>
                                    </div>
                    </div>
                </div>        
            </div>
        </div>
    </>
  )
}


