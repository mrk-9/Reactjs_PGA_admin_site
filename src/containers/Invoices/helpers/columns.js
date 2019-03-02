import { defaultSortMethod, moneyRender } from '../../../components/Elements/Table/columnHelpers'

export const invoiceColumn = [
  {
    Header: 'ID',
    accessor: 'id'
  },
  {
    Header: 'Partner',
    accessor: 'createdBy.displayName'
  },
  {
    Header: 'Invoice Number',
    accessor: 'invoiceNumber'
  },
  {
    Header: 'Sub Total',
    accessor: 'subtotal',
    Cell: moneyRender('subtotal')
  },
  {
    Header: 'Tax',
    accessor: 'tax',
    Cell: moneyRender('tax')
  },
  {
    Header: 'Total',
    accessor: 'total',
    Cell: moneyRender('total')
  },
  {
    Header: 'Transaction Date',
    accessor: 'date'
  },
  {
    Header: 'Reported Date',
    accessor: 'createdAt',
    sortMethod: defaultSortMethod
  }
]

export const itemColumn = [
  {
    Header: '#',
    accessor: 'index'
  },
  {
    Header: 'Product ID',
    accessor: 'product.id',
    className: 'productID'
  },
  {
    Header: 'Product',
    accessor: 'product.name'
  },
  {
    Header: 'Event Name',
    accessor: 'product.event.name'
  },
  {
    Header: 'Quantity',
    accessor: 'quantity'
  },
  {
    Header: 'Price',
    accessor: 'price',
    Cell: moneyRender('price')
  },
  {
    Header: 'Tax',
    accessor: 'tax',
    Cell: moneyRender('tax')
  },
  {
    Header: 'Subtotal',
    accessor: 'subtotal',
    Cell: moneyRender('subtotal')
  },
  {
    Header: 'Total',
    accessor: 'total',
    Cell: moneyRender('total')
  }
]

export const paymentColumn = [
  {
    Header: '#',
    accessor: 'index'
  },
  {
    Header: 'Transaction',
    accessor: 'transactionNumber'
  },
  {
    Header: 'Type',
    accessor: 'type'
  },
  {
    Header: 'Clearing Account',
    accessor: 'clearingAccount'
  },
  {
    Header: 'Section',
    accessor: 'section'
  },
  {
    Header: 'Amount',
    accessor: 'amount',
    Cell: moneyRender('amount')
  }
]
