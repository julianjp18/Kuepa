import React from 'react';
import Filters from './Filters';
import ReportTable from './ReportTable';


function School() {
  return (
    <div className="">
        <h2 className="text-center">Reporte Estudiantes Bachillerato</h2>
        <div>
            <Filters></Filters>
        </div>
        <div className="report-table">
            <ReportTable></ReportTable>
        </div>
    </div>
  );
}

export default School;
