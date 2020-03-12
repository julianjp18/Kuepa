import React from 'react';
import '../styles/filters.css';


function Filters() {
  return (
    <form class="container-form">
        <div className="row">
            <div className="col-md-4">
                <h5 className="text-right">Filtros</h5>
            </div>
            <div className="col-md-4 text-left">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Sedes educativas</label>
                        <select class="custom-select custom-select-sm">
                            <option defaultValue>Selecciona una opción</option>
                            <option value="1">Centro</option>
                            <option value="2">Norte</option>
                            <option value="3">Sur</option>
                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Fechas</label>
                        <select class="custom-select custom-select-sm">
                            <option defaultValue>Selecciona una opción</option>
                            <option value="1">20 de enero 2020</option>
                            <option value="2">20 de diciembre 2019</option>
                            <option value="3">20 de noviembre 2019</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-md-4"></div>
        </div>
    </form>
  );
}

export default Filters;

