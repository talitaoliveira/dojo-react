import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Header.css'

const Header = ({ title }) => {

  const [newTitle, setNewTitle] = useState(title);
  const titlePrefix = "Pokedex";

  return (
    <>
      <h1 className="header">{titlePrefix} {newTitle}</h1>
      <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
