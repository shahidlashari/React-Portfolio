import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href="#modal-01">
                          <a href="https://drive.google.com/file/d/1jL4IrWwuqyR8GIMWGKy-xlIknW8j91Nn/view"></a>
                          <img src={item.imgurl} alt="projects" className="item-img" />
                          <img src={item.imgurlmb1} alt="" className="item-img" />
                          <img src={item.imgurlmb2} alt="" className="item-img" />
                          <img src={item.imgurlmb3} alt="" className="item-img" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>

                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="item-wrap">
                        <a href="#modal-02">
                        <a href="https://boiling-mesa-48982.herokuapp.com/">
                          <img src={item.imgurlst1} alt="" className="item-img" />
                          <img src={item.imgurlst2} alt="" className="item-img" />
                          <img src={item.imgurlst3} alt="" className="item-img" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>

                            </div>
                          </div>
                        </a>
                        </a>
                      </div>
                      <div className="item-wrap">
                        <a href="#modal-03">
                        <a href="https://calm-badlands-38225.herokuapp.com/">
                          <img src={item.imgurljt1} alt="" className="item-img" />
                          <img src={item.imgurljt2} alt="" className="item-img" />
                          <img src={item.imgurljt3} alt="" className="item-img" />
                          <img src={item.imgurljt4} alt="" className="item-img" />
                          <img src={item.imgurljt5} alt="" className="item-img" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>

                            </div>
                          </div>
                        </a>
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