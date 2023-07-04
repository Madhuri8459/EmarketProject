import React from 'react'

function Navbar() {
  return (
    <>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <button class="btn btn-outline-dark text-white my-2 my-sm-0" type="submit">Get free delivery on orders over $100</button>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#"> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"></a>
      </li>
      
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-dark text-white my-2 my-sm-0" type="submit" id='b1' >Create an account</button>
      <button class="btn btn-outline-dark text-white my-2 my-sm-0" type="submit" id='b2' >Sign in</button>
    </form>
  </div>
</nav>

<nav>
  <div>
      <img class="image" src="tag.jpg" />
  </div>
  <div class="logo">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="cart4" viewBox="0 0 16 16">
      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
    </svg>
     
     <h3 id="p23">I Novo-Shop</h3>
     
     
  </div>
  <ul class="menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="cart2" viewBox="0 0 16 16">
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
        </svg>
        <div class="para">
          <h4>0</h4>
        </div>
    
    <li><a id="p24" href="#">Clothing..</a></li>
    <li><a id="p25" href="#">Men</a></li>
    <li><a id="p26" href="#">Women</a></li>
  </ul>
</nav>
<br/>
<br/>
<hr></hr>

  {/* //  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  //   <div class="container-fluid">
  //     <a class="navbar-brand" href="#"></a>
  //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  //       <span class="navbar-toggler-icon"></span>
  //     </button>
  //     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  //       <div class="navbar-nav">
  //         <a class="nav-link active" aria-current="page" href="#"></a>
  //         <a id="p11" class="nav-link" href="#">  Download the app      </a>
  //         <h4 id="p8">      Get an exclusive $5 off code </h4>
  //         <a id="p12" class="nav-link" href="#">Return when you are ready</a>
  //         <br/>
  //         <h4 id="p9">60 days of free returns</h4>
  //         <a id="p13" class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">signup for our newsletter</a>
  //         <h4 id="p40">50% off your first order</h4>
  //       </div>
  //     </div>
  //   </div>
  //   </nav>  */}
     
    </>
  )
}

export default Navbar