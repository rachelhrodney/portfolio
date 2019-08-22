import React, { Component } from 'react';
import resumeData from '../resumeData';
import Modal from 'react-awesome-modal';

export default class Porfolio extends Component {

  state = {
    modal: {}
  }

  closeModal = () => {
    this.setState({  modal:{}  })
  }

  render() {
    const { modal } = this.state
    return (<section id="portfolio">

          <h1>Check Out Some of My Adventures.</h1>

          <div id="portfolio-wrapper">
            {
              resumeData.portfolio && resumeData.portfolio.map((item, i) => {
                return (
                  <div className={"bubble bubble-"+i} onClick={() => this.setState({ modal: item })}
                  style={{
                    backgroundImage:`url(${item.imgurl})`
                  }}>

                  </div>
                )
              })
            }
          </div>

{/* 
           <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
            {
              resumeData.portfolio && resumeData.portfolio.map((item, i) => {
                return (
                  <div key={i} className="columns portfolio-item">
                    <div className="item-wrap">
                      <div onClick={() => this.setState({ modal: item })} style={{ cursor: 'pointer' }}>
                        <img src={`${item.imgurl}`} className="item-img" alt="img" />
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
          </div> */}

      <Modal
        visible={modal&&modal.name}
        width="90%"
        height="90%"
        effect="fadeInUp"
        onClickAway={() => this.closeModal()}
      >
        <div className="portfolio-modal">
          <div>
          <h2 style={{ textAlign: 'center' }}>{modal.subtitle}</h2>
            <h1 style={{ textAlign: 'center' }}>{modal.title}</h1>
            <div className="small-images">
              {modal.images && modal.images.map(img=>{
                return <img src={img} height="200"/>
              })}
            </div>
            <h3>{modal.p1title}</h3>
            <p>{modal.p1description}</p>
            <p>{modal.fullDescription}<img src={modal.img1} height="200"/></p>
            <h3>{modal.p2title}</h3>
            <p>{modal.p2description}</p>
            <h3>{modal.p3title}</h3>
            <p>{modal.p3description}</p>
          </div>
          <button onClick={() => this.closeModal()}>Close</button>
        </div>
      </Modal>

    </section>);
  }
}
