import React, { Component, StyleSheet } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';
import Header from './Header';


const styles = {
  headerTitle: {
    backgroundColor: 'red'
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ' ',
      banner: 'hello',
      isOpen: false,
    };
    this.buttonHandler = this.buttonHandler.bind(this);
    this.textHandler = this.textHandler.bind(this);
    console.log(this.props)
  }

  buttonHandler() {
    this.setState({
      isOpen: !this.state.isOpen,
      color: 'red !important'
        });
  }

  textHandler(e) {
    this.setState({
      banner: e.target.value,
    })
  }

  changeTitle(){
    this.setState({
      color: 'red !important' 
    });
  };

  render() {
    const {color} = this.state;
    let myVariable = <h2>Hello!</h2>;
    let myBanner;
    if (this.state.isOpen) {
      myBanner = <Header banner={this.state.banner}/>;
    }
    return (
      <div  style={{backgroundColor:this.state.color}} onClick={this.buttonHandler} className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {myVariable}
          </p>
          {myBanner}
          {/* {
            this.state.isOpen && 
            <Header banner={this.state.banner}/>
          } */}
          <input value={this.state.banner} onChange={this.textHandler}/>
          <button  >Click Me</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testReducer.test,
  };
};

const mapDispatchToProps = { doTest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);