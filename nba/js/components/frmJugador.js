import './frmEquipos.js';
import { FrmEquipos } from './frmEquipos.js';
class FrmJugador extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        console.log(FrmEquipos.equipos);
        this.innerHTML = /* html */ `
        <div class="card">
            <div class="card-header">
              Jugadores
            </div>
            <div class="card-body">
            <form id = "frmDataPlayer">
                <div class="row g-3">
                    <div class="col-4">
                        <label for="nombreJugador" class="form-label">Nombre Equipo</label>
                        <input type="text" class="form-control" id="nombreJugador">
                    </div>
                    <div class="col-3">
                        <label for="fechaCompra" class="form-label">Fecha compra</label>
                        <input type="date" class="form-control" id="fechaCompra">
                    </div>
                    <div class="col-2">
                        <label for="yearExp" class="form-label">Años de Exp</label>
                        <input type="number" class="form-control" id="yearExp">
                    </div>
                    <div class="col-2">
                        <label for="dorsal" class="form-label">Dorsal</label>
                        <input type="number" class="form-control" id="dorsal" min="1" max = "88">
                    </div>
                </div>
                <div class="row g-3">
                    <div class="col-3">
                        <label for="posicion" class="form-label">Posicion de juego</label>
                        <select class="form-select" id="division">
                            <option value='-' selected>Seleccione un posicion de juego</option>
                            <option value="BASE">BASE</option>
                            <option value="ESCOLTA">ESCOLTA</option>
                            <option value="ALERO">ALERO</option>
                            <option value="ALA-PIVOT">ALA-PIVOT</option>
                            <option value="PIVOT">PIVOT</option>
                        </select>
                    </div>
                    <div class="col-2">
                        <label for="estatura" class="form-label">Estatura(cm)</label>
                        <input type="number" class="form-control" id="estatura">
                    </div>
                    <div class="col-2">
                        <label for="peso" class="form-label">Peso</label>
                        <input type="number" class="form-control" id="peso">
                    </div>
                    <div class="col-2">
                        <label for="tiempoJuego" class="form-label">Tiempo Jugado</label>
                        <input type="number" class="form-control" id="tiempoJuego">
                    </div>
                    <div class="col-2">
                        <label for="faltas" class="form-label">Faltas cometidas</label>
                        <input type="number" class="form-control" id="faltas">
                    </div>
                    <div class="col-2">
                        <label for="asistencias" class="form-label">Asistencias en juego</label>
                        <input type="number" class="form-control" id="asistencias">
                    </div>
                    <div class="col-2">
                        <label for="totalPuntos" class="form-label">Puntos anotados</label>
                        <input type="number" class="form-control" id="totalPuntos">
                    </div>
                    <div class="col-2">
                        <label for="totalPuntos" class="form-label">Puntos anotados</label>
                        <input type="number" class="form-control" id="totalPuntos">
                    </div>
                    <div class="col-2">
                        <label for="valor" class="form-label">Valor</label>
                        <input type="number" class="form-control" id="valor">
                    </div>
                    <div class="col-2">
                        <label for="levelExp" class="form-label">Nivel Experiencia</label>
                        <input type="number" class="form-control" id="levelExp">
                    </div>
                </div>
            </form>
            <a href="#" class="btn btn-primary mt-2">Go somewhere</a>
            </div>
          </div>        
        `
    }
}
customElements.define('frm-jugador',FrmJugador);