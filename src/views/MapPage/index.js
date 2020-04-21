import React, {useState, useRef} from 'react'
import styled from 'styled-components'

import Dashboard from './Dashboard'

export default function index() {
  
  const [reportSelection, setReportSelection] = useState(0);
  const selectRef = useRef(null);

  let handleSubmit = () =>{
    setReportSelection(selectRef.current.value)
  }

  let handleBack = () =>{
    setReportSelection(0);
  }

  //STYLING
  const SelectionWrapper = styled.div`
      display: flex;
      flex: 1;
      flex-direction: column;
    `
  const SelectionHeader = styled.div`
   padding: 5px;
   text-align: center;
  `
  
  const ReportSelect = styled.select`
    width: 75%;
    margin: 0 auto;
    border: solid thin black;
    margin-top: 10px;
  `

  const ReportSelectOption = styled.option`
    padding: 2px;
  `
  if(reportSelection === 0){
    return(
      <SelectionWrapper>
        <SelectionHeader>
        <i>Please select a report type.</i>
        </SelectionHeader>
        <ReportSelect id='ReportSelect' ref={selectRef}>
          <ReportSelectOption value='1'>Shortages</ReportSelectOption>
          <ReportSelectOption value='2'>Testing</ReportSelectOption>
        </ReportSelect>
        <button onClick={handleSubmit}>Submit</button>
      </SelectionWrapper>
     
      
    )
  }else{
    return (
      <div>
        <Dashboard reportRequest={reportSelection} handleBack={handleBack}/>
      </div>
    )
  }
}