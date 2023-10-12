import React from 'react'
import {GridComponent, Resize, ColumnsDirective, Sort, ColumnDirective, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject} from '@syncfusion/ej2-react-grids';


import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl overflow-x-hidden'>
        <Header category="Page" title="Orders"/>
        <GridComponent id='gridcomp' dataSource={ordersData} allowSorting allowPaging>
          <ColumnsDirective>
            {ordersGrid.map((item, i) => (
              <ColumnDirective key={i} {...item}/>
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Filter, ExcelExport, PdfExport, Sort, Resize, Edit, ContextMenu]} />
        </GridComponent>
  
    </div>
  )  
}

export default Orders