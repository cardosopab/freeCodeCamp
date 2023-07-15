import Editor from './components/Editor.jsx';
import Preview from './components/Preview.jsx';

// import React from 'react'
import { connect } from 'react-redux'

export const App = (props) => {
  return (
    <>
      <Editor />
      <Preview />
    </>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
