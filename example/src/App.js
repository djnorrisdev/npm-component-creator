import React, { Component } from 'react'

import ExampleComponent from 'comp-scaf'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text={'test component works'}/>
      </div>
    )
  }
}
