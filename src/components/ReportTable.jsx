import React from 'react';


function ReportTable() {
  return (
    <div className="container-table table-responsive">
      <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Correo electrónico</th>
            <th scope="col">Estado</th>
            <th scope="col">Fechas asistencia</th>
            </tr>
        </thead>
        <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>otto@gmail.com</td>
              <td>Activo</td>
              <td>
                <div>
                <p className="alert alert-danger">20-01-2019</p>
                  <p className="alert alert-success">20-10-2019</p>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>otto@gmail.com</td>
              <td>Activo</td>
              <td>
                <div>
                <p className="alert alert-warning">20-01-2019</p>
                  <p className="alert alert-success">20-10-2019</p>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>otto@gmail.com</td>
              <td>Activo</td>
              <td>
                <div>
                  <p className="alert alert-warning">20-01-2019</p>
                  <p className="alert alert-success">20-10-2019</p>
                </div>
              </td>
            </tr>
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabIndex="-1" aria-disabled="true">Anterior</a>
          </li>
          <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Siguiente</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ReportTable;