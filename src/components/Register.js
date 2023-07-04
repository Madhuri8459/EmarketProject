import React from 'react'

function Register() {
  return (
<>
<b> <h1 id="x1">Signing up with <br/>
       social is super 
    <center>Quick </center></h1></b>
    <p id="x2">please do not hesitate</p>
    {/* <h3 id="x3">YOUR EMAIL</h3>  */}
    <input type="text" id="x4" class="form-control" placeholder="Full Name" />
     {/* <h3 id="x5"> PASSWORD</h3>  */}
    <input type="text" id="x6" class="form-control" placeholder="Enter your email" />
    <input type="password" id="x5" class="form-control" placeholder="Enter your password" />


    <button  id="x7"  class="btn btn-primary">REGISTER</button>
    <img id="x8" src="heels.jpg"/>
</> 
 )
}

export default Register