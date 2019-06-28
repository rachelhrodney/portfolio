import React, { Component } from 'react';
import resumeData from '../resumeData';
import Modal from 'react-awesome-modal';

export default class Porfolio extends Component {

  state={
    modal:false
  }

  render() {
    const modalWidth = Math.min(600, window.innerWidth-20)
    const modalHeight = Math.min(400, window.innerHeight-20)
    return (<section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Work.</h1>
          <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <div onClick={()=>this.setState({modal:item.name})} style={{cursor:'pointer'}}>
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>

      <Modal 
        visible={this.state.modal ? true : false}
        width={modalWidth+''}
        height={modalHeight+''}
        effect="fadeInUp"
        onClickAway={() => this.setState({modal:null})}>
        <div>
          <h1>Title</h1>
          <p>Some Contents</p>
          <a href="javascript:void(0);" onClick={() => this.setState({modal:null})}>Close</a>
        </div>
      </Modal>
  </section>);
  }
}

const contents = {
  
}