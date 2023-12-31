import React from 'react'
import { ChartComponent, SeriesCollectionDirective, Inject, SeriesDirective, DateTime, Tooltip, Legend, LineSeries } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';


const LineChart = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent id='line-chart' height='420px' primaryXAxis={LinePrimaryXAxis} primaryYAxis={LinePrimaryYAxis} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }} background={currentMode === 'Dark' ? '#fff' : '#fff'}>
      <Inject services={[Legend, Tooltip, LineSeries, DateTime]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, i) => <SeriesDirective key={i} {...item} />)}

      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart