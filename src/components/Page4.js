import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';

class Page4 extends Component {
  render() {
    const styles = {
      fadeInUp1s: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
      },
      fadeInUp1_5s: {
        animation: 'x 1.5s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
      },
      fadeInUp2s: {
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
      },
      fadeInUp2_5s: {
        animation: 'x 2.5s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
      },
      fadeInUp3s: {
        animation: 'x 3s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
      },
    };
    return (
      <StyleRoot>
       
          <div className="section page page-5">
            <div className="mountain mountain-1"></div>
            <div className="mountain mountain-2"></div>
            <div className="tree tree-1"></div>
            <div className="tree tree-2"></div>
            <div className="tree tree-3"></div>
            <div className="tree tree-4"></div>
            <div className="tree tree-5"></div>
            <div className="tree tree-6"></div>
            <div className="tree tree-7"></div>
            <div className="tree tree-8"></div>
            <div className="moon-wrapper">
              <div className="moon">
                <div className="man"></div>
              </div>
            </div>
            {this.props.info.most_date !== '' && this.props.page === 4 ? (
            <div className="content">
              <p style={styles.fadeInUp1s} className="stress">
                {this.props.info.most_date}
                </p>
                <p style={styles.fadeInUp1_5s} className="mb20">
                  大概是很特别的一天
                </p>
                <p style={styles.fadeInUp2s}>这一天里，你吸引了好友们最多的目光</p>
                <p style={styles.fadeInUp1_5s}>
                  大家戳了你
                  <span className="stress">{this.props.info.most_date_prd}</span>
                  次
                </p>
                <p style={styles.fadeInUp1_5s}>
                  给你点了
                  <span className="stress">{this.props.info.most_date_like}</span>
                  个赞
                </p>
                <p style={styles.fadeInUp1_5s}>
                  发出了
                  <span className="stress">{this.props.info.most_date_cmt}</span>
                  条评论
                </p>
                <p style={styles.fadeInUp3s} className="mood_content">
                    “{this.props.info.most_date_content}”
                  </p>
            </div>
            ) : this.props.page === 4 ? (
              <div className="content">
                <p style={styles.fadeInUp1s}>你没有什么特别的一天</p>
                <p style={styles.fadeInUp1s}>你的每天都一样精彩</p>
              </div>
            ) : null}
          </div>
        
      </StyleRoot>
    );
  }
}

export default Page4;
