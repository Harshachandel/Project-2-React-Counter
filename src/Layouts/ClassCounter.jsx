import { Component } from "react";

class ClassCounter extends Component {
    
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    this.inc = () => {
      this.setState({
        counter: this.state.counter + 1,
      });
    };

    this.dec = () => {
      this.setState({
        counter: this.state.counter > 0 ? this.state.counter - 1 : 0,
      });
    };
  }

  render() {
    return (
      <div className="col-lg-4 mx-auto my-5">
        <div className="shadow-lg rounded-3 text-center p-4 bg-dark text-white">
          <h2 className="mb-3">Class Counter - {this.state.counter}</h2>
          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-outline-light px-4 py-2 fw-bold"
              onClick={this.inc}
            >
              +
            </button>
            <button
              className="btn btn-outline-danger px-4 py-2 fw-bold"
              onClick={this.dec}
            >
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
