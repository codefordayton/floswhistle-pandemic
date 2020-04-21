import React, {useRef} from 'react'
import styled from 'styled-components'

import DistrictsMap from './DistrictsMap'
import MapHeading from './MapHeading'

export default function Dashboard(props) {
  
  const {reportRequest, handleBack} = props;
  const headingText = [{
                        heading: 'Shortages', 
                        sub: 'Percentage of respondents who reported any kind of shortage.'
                      },
                      {
                        heading: 'Testing',
                        sub: 'Percentage of respondents who reported access to testing.'
                      }
                    ]

  const DashBoardWrapper = styled.div`
    display: flex;
    flex-direction: column;
  `
  const HeadingWrapper = styled.div`
    /* background-color: lightpink; */
  `
  const MapWrapper = styled.div`
    
  `

  const BackButtonWrapper = styled.div`
    text-align: center;
  `

  return (
    <React.Fragment>
    <DashBoardWrapper>
      <HeadingWrapper>
        <MapHeading headingText={headingText[reportRequest - 1]}/>
      </HeadingWrapper>
      <MapWrapper>
        <DistrictsMap />
      </MapWrapper>
    </DashBoardWrapper>
    <BackButtonWrapper>
      <button onClick={handleBack}>Back</button>
    </BackButtonWrapper>
    </React.Fragment>
  )
}