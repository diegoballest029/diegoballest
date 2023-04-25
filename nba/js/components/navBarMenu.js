class NavBarMenu extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.navMenuPage();
    }
    render(){
        this.innerHTML = /* html */ `
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
            <a class="navbar-brand" href="index.html"><img src="images/logo.png" width="80px" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link mainMenu" aria-current="page" href="#" data-verocultar='["#grpEquipo",["#jugadores","#apoyo"]]'>Equipos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mainMenu" href="#" data-verocultar='["#jugadores",["#grpEquipo","#apoyo"]]'>Jugadores</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mainMenu" href="#" data-verocultar='["#apoyo",["#grpEquipo","#jugadores"]]'>Cuerpo de apoyo</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>        
        `
    }
    navMenuPage = () =>{
        document.querySelectorAll(".mainMenu").forEach((val, id) => {
            val.addEventListener("click", (e)=>{
                let data = JSON.parse(e.target.dataset.verocultar);
                let cardVer = document.querySelector(data[0]);
                cardVer.style.display = 'block';
                data[1].forEach(card => {
                    let cardActual = document.querySelector(card);
                    cardActual.style.display = 'none';
                });
                e.stopImmediatePropagation();
                e.preventDefault();
            }) 
        });
    }
}

customElements.define('nav-bar-menu',NavBarMenu);