import React from 'react';
import Filters from './Filters';
import ReportTable from './ReportTable';



function English() {
  return (
    <div className="">
        <h2 className="text-center">Reporte Estudiantes Inglés</h2>
        <div>
            <Filters></Filters>
        </div>
        <div className="report-table">
            <ReportTable></ReportTable>
        </div>
    </div>
  );
}

export default English;
