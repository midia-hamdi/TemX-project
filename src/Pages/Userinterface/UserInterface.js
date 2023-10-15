import React from 'react'
import Panel from '../../Sections/Panel/Panel.js'
import NavBar from '../../Sections/NavBar/NavBar.js'
import Authentication from '../../Sections/Authentication/Authentication.js'
import Specifications from '../../Sections/Specifications/Specifications.js'


export default function UserInterface() {
  return (
    <div>
        <Panel />
        <NavBar />
        <Authentication />
        <Specifications />

    </div>
  )
}
