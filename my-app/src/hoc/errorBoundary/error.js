import React from 'react';
import classes from './error.module.scss';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {

        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

   render() {
    if (this.state.errorInfo) {
      console.log(this.state)
      return (
        <div className={classes['error']}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
  
    return this.props.children;
  }  
}