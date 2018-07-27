import * as React from 'react'
import * as ReactDOM from 'react-dom'

class App extends React.Component<{}, {counter: number}> {
  constructor(props: {}) {
    super(props)
    this.state = {counter : 0}
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(state => ({...state, counter:state.counter + 1}))
    }, 300)
  }

  render() {
    return (<p>she's in peat moss {this.state.counter}</p>)
  }
}

document.body.innerHTML = '<main id="main" />'

ReactDOM.render(<App />, document.getElementById('main'))
