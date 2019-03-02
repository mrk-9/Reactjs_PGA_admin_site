import React from 'react'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FluidContainer } from '../../Layout'
import Cards from '../Cards'
import FourOhFour from '../FourOhFour'
import Button from '../Buttons'
import Loading from '@pga/pga-component-library/lib/components/LoadingComponent'
import { editable, LandingPage, formatTableData } from './helpers'
import Delete from '../Delete'
import Toast from '../Toast'

const Title = styled.h1`
  float: left
`

const CreateButton = styled(Button)`
  float: right
`
const style = {
  position: 'relative',
  paddingTop: '50px',
  paddingBottom: '50px'
}

const { Card, CardBody, CardHeader } = Cards

export default ({
  query,
  mutation,
  title,
  columns,
  tableLimitSize,
  onSelectRow,
  dataKey,
  titleKey,
  hasCreate,
  editableColumn,
  ...props
}) => (
  <FluidContainer>
    <Card>
      <CardHeader>
        <Title>{title}</Title>
        {hasCreate && <Link to={`/${dataKey}/create`}><CreateButton color='primary'>Create</CreateButton></Link>}
      </CardHeader>
      <CardBody>
        <Query query={query}>
          {({ loading, error, data }) => {
            if (error && !data) {
              const message = error.message ? error.message : 'Error loading data from server'
              return <FourOhFour statusCode={400} title='GraphQL Error' message={message} />
            }
            if (loading) {
              return <Loading style={style} />
            }
            const tableData = formatTableData(data, dataKey)

            const column = columns.concat(editable({ editableColumn, dataKey, ...props }))

            return (
              <LandingPage
                onSelectRow={onSelectRow}
                tableLimitSize={tableLimitSize}
                column={column}
                tableData={tableData}
                titleKey={titleKey}
                {...props}
              />
            )
          }}
        </Query>
      </CardBody>
    </Card>
    {editableColumn && <Delete title={`Delete ${title}`} mutation={mutation} refetch={query} />}
    <Toast />
  </FluidContainer>
)
