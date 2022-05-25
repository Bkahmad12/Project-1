var header = document.getElementById('header').innerHTML = `  <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-4 fixed-top">
<div class="container ">
    <a class="navbar-brand d-flex justify-content-between align-items-center order-lg-0" href="index.html">
      
        <h5 class="text-uppercase fw-lighter "><span  style="color:#e5345b;font-size:1.5rem;padding:3px">GG</span> Garments</h5>
    </a>

    <div class="order-lg-2 nav-btns " style="display: flex; ;">
    <div class="container">
        <button class="dark-mood text-white"  id="mood" style="color:dark;width:auto;font-size: 25px;" >
            <i class="fa-solid fa-moon" id="moon"></i>
            <i class="fa-solid fa-sun" id="sun"></i>
        </button>
    </div>
        <div id="myOverlay" class="overlay ">
       
            <span class="closebtn" onclick="closeSearch()" title="Close Overlay">×</span>
            <div class="overlay-content mt-3 ">
                <form class="mt-2 ">
                    <input type="text" placeholder="Search.." name="search">
                    <button type="submit" class="mt-2" ><i class="fa fa-search"></i></button>
                </form>
            </div>
        </div>
        <div class="openBtn mt-1" onclick="openSearch()"   style="width:auto;font-size: 25px;"><i class="fas fa-search"></i></div>

        <button onclick="document.getElementById('id01').style.display='block'"
            style="width:auto;font-size: 25px;" class="ms-3 mb-2 text-white"><i class="fa-solid fa-user"></i></button>

        <div id="id01" class="modal ">

            <form class="modal-content animate"  method="post">
                <div class="imgcontainer">
                    <span onclick="document.getElementById('id01').style.display='none'" class="close"
                        title="Close Modal">&times;</span>
                    <img src="images/img_avatar2.png" alt="Avatar" class="avatar">
                </div>

                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required>

                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"> Remember me
                    </label>
                </div>

                <div class="container" style="background-color:#f1f1f1">
                    <button type="button" onclick="document.getElementById('id01').style.display='none'"
                        class="cancelbtn">Cancel</button>
                    <span class="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>
    </div>

<Ul>
<li>



</li>
</ul>

    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse order-lg-1" id="navMenu">
        <ul class="navbar-nav mx-auto text-center">
            <li class="nav-item px-2 py-2">
                <a class="nav-link text-uppercase text-white" href="index1.html ">home</a>
            </li>
              <li class="nav-item px-2 py-2">
            <div class="dropdown ">
             <a href="Shop 1.html" class=" nav-link active">SHOP</a>
             <div class="dropdown-content">
             <a href="product 2.html">MEN</a>
             <a href="product 1.html">WOMEN</a>
          
             </div>
         </div>
         </li>
            <li class="nav-item px-2 py-2">
                <a class="nav-link text-uppercase text-white" href="About us.html">About us</a>
            </li>
            <li class="nav-item px-2 py-2">
                <a class="nav-link text-uppercase text-white" href="Compare.html">Compare</a>
            </li>
            <li class="nav-item px-2 py-2">
                <a class="nav-link text-uppercase text-white" href="Contact us.html">Contact us</a>
            </li>
            <li class="nav-item px-2 py-2">
            <div class="dropdown ">
             <a href="Shop 1.html" class=" nav-link active">BRAND</a>
             <div class="dropdown-content">
             <a href="Gulahmed.html">GULAHMED</a>
             <a href="Alkaram.html">ALKARAM</a>
          
             </div>
         </div>
         </li>
            
        </ul>
    </div>
</div>
</nav>`