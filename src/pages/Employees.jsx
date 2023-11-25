import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Toolbar, Inject } from '@syncfusion/ej2-react-grids';


import { employeesGrid, employeesData } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl overflow-x-hidden'>
      <Header category="Page" title="Employees" />
      <GridComponent toolbar={['Search']} dataSource={employeesData} allowSorting allowPaging width='aut0'>
        <ColumnsDirective>
          {employeesGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>

    </div>
  )
}

export default Employees