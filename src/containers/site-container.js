import React from "react";

import Site from"../components/site.js";


class SiteContainer extends React.Component {
  alertDesc(desc) {
    alert(`Description: ${desc}`);
  }
  render() {
    let sites = this.props.sites.map((item)=> {
      return <Site key={item.name} handleClick={this.alertDesc}  name={item.name} country={item.country} image={item.image} desc={item.desc} />
    });
    return (
      <div className="container">
           <div className="row">
            {sites}
          </div>
      </div>
    );
  }
}


export default SiteContainer;
