import React from "react";

class Site extends React.Component {
  render() {
    return (
      <div className="col-md-4">
        <div onClick={()=> {this.props.handleClick(this.props.desc)}} className="site-circle" style={{
          backgroundImage: `url('${this.props.image}')`,
        }}>
        <h3>{this.props.name} <br/> {this.props.country}</h3>
        </div>
      </div>
    )
  }
}

export default Site;
