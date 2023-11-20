import React from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Selection, Edit, Inject, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';
import { FILTER } from '@syncfusion/ej2/filemanager';

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl overflow-x-hidden'>
      <Header category="Page" title="Customers" />
      <GridComponent toolbar={['Delete']} dataSource={customersData} allowSorting allowPaging width='aut0' editSettings={{ allowDeleting: true, allowEditing: true }}>
        <ColumnsDirective>
          {customersGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>

    </div>
  )
}

export default Customers