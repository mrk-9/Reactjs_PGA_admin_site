import React from 'react'
import { LandingPage } from '../../components/Elements'
import { SectionQueries } from '../../queries'
import { sectionColumn } from './helpers'

const { sections } = SectionQueries

export const handleRowSelection = ({ history }) => (row, original) => {
  const id = original.id
  history.push(`/sections/${id}`)
}

export default (props) => (
  <LandingPage
    title='Sections'
    titleKey='Section Name'
    query={sections}
    columns={sectionColumn}
    dataKey='sections'
    tableLimitSize={10}
    onSelectRow={handleRowSelection}
    editableColumn={{canEdit: true}}
    {...props}
  />
)
