import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Restaurants', value: 1 },
  { key: 2, text: 'Entertainment', value: 2 },
]

const DropdownExampleSimple = () => (
  <Menu compact>
    <Dropdown text='Select a category' options={options} placeholder simple item />
  </Menu>
)

export default DropdownExampleSimple
