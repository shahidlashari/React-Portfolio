import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
   
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="sixteen columns collapsed">
            <h1>Check Out Some of My Projects.</h1>
            <div id="portfolio-wrapper" >
              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          <img src={item.imgurl} alt="" className="item-img" />
                          <img src={item.imgurlmb1} alt="" className="item-img" />
                          <img src={item.imgurlmb2} alt="" className="item-img" />
                          <img src={item.imgurlmb3} alt="" className="item-img" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-wrap">
                        <a href="https://boiling-mesa-48982.herokuapp.com/">
                          <img src={item.imgurlst1} alt="" className="item-img" />
                          <img src={item.imgurlst2} alt="" className="item-img" />
                          <img src={item.imgurlst3} alt="" className="item-img" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-wrap">
                        <a href="https://calm-badlands-38225.herokuapp.com/">
                          <img src={item.imgurljt1} alt="" className="item-img" />
                          <img src={item.imgurljt2} alt="" className="item-img" />
                          <img src={item.imgurljt5} alt="" className="item-img" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-wrap">
                        <a href="https://secret-sierra-17423.herokuapp.com/" >
                          <img src={item.imgurlft} alt="" className="item-img" />
                          <img src={item.imgurlft1} alt="" className="item-img" />
                          <img src={item.imgurlft2} alt="" className="item-img" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-wrap">
                        <a href="https://drive.google.com/file/d/1VTUVOt-CH3_btCRkyuzPIjC2nm3mxexC/view" >
                          
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-wrap">
                        <a href="https://protected-island-13503.herokuapp.com/" >
                        <img src={item.imgurlnt1} alt="" className="item-img" />
                          
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}