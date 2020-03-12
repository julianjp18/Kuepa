import React from 'react';
import Filters from './Filters';
import ReportTable from './ReportTable';



function Software() {
  return (
    <div className="">
        <h2 className="text-center">Reporte Estudiantes Técnico Profesional en Desarrollo de Software</h2>
        <div>
            <Filters></Filters>
        </div>
        <div className="report-table">
            <ReportTable></ReportTable>
        </div>
    </div>
  );
}

export default Software;
