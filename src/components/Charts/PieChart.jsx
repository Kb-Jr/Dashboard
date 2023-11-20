import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, Inject } from '@syncfusion/ej2-react-charts';
import * as ReactDOM from "react-dom";
import { pieChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';


const PieChart = () => {
  const { currentMode } = useStateContext();
  let pie;

  return (
    <AccumulationChartComponent id='pie-chart' ref={pie => pie = pie} legendSettings={{
      visible: true
    }} enableSmartLabels={true} enableAnimation={true} tooltip={{ enable: true }} background={currentMode === 'Dark' ? '#fff' : '#fff'}>
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={pieChartData} xName='x' yName='y' innerRadius='20%' dataLabel={{
          visible: true, position: 'Outside', name: 'x'
        }} radius='r'>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}

export default PieChart