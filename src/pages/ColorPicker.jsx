import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'

import { Header } from '../components'

const Change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
}

const ColorPicker = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 rounded-3xl md:p-10 bg-white'>
      <Header category="App" title="Color Picker" />
      <div className='text-center'>
        <div id='preview'></div>
        <div className='flex justify-center items-center flex-wrap gap-20'>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallete</p>
            <ColorPickerComponent id='inline pallete' mode='Pallete' modeSwitcher={false} inline showButtons={false} change={Change} />
          </div>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent id='inline picker' mode='Picker' modeSwitcher={false} inline showButtons={false} change={Change} />
          </div>

        </div>

      </div>



    </div>
  )
}

export default ColorPicker