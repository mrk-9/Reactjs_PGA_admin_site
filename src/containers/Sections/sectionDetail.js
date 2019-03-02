import React from 'react'
import { DetailPage } from '../../components/Elements'
import { SectionQueries } from '../../queries'

const { sectionDetail } = SectionQueries

export default ({ match: { params }, ...rest }) => (
  <DetailPage query={sectionDetail} id={params.sectionId} dataKey='section' updateKey='sections' {...rest} />
)
