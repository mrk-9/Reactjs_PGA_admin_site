import React from 'react'
import { UpdatePage } from '../../components/Elements'
import { SectionQueries } from '../../queries'
import { formElements, required, initialValues } from './helpers'

const { updateSection, sectionDetail } = SectionQueries

export default (props) => (
  <UpdatePage
    title='Update Section'
    query={sectionDetail}
    update={updateSection}
    formElements={formElements}
    initialValues={initialValues}
    required={required}
    updateKey='section'
    dataKey='sections'
    {...props}
  />
)
