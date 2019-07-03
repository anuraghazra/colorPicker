import React, { Fragment } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import style from "./css/yellow.module.css";

class Yellow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: "Click to Copy"
    };
  }

  handleClick = () => {
    this.setState({ values: "C O P I E D" });
  };

  componentDidUpdate() {
    setTimeout(() => this.setState({ values: "Click to Copy" }), 2500);
  }
  render() {
    return (
      <Fragment>
        <div className={style.container} id="yellow" onClick={this.handleClick}>
          <CopyToClipboard text="#F9A602">
            <div id={style.yellow1} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #F9A602
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#FFC30B">
            <div id={style.yellow2} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #FFC30B
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#FDA50F">
            <div id={style.yellow3} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #FDA50F
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#FFD300">
            <div id={style.yellow4} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #FFD300
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#C49102">
            <div id={style.yellow5} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #C49102
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#FFBF00">
            <div id={style.yellow6} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #FFBF00
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#E1DA00">
            <div id={style.yellow7} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #E1DA00
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#FFF222">
            <div id={style.yellow8} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #FFF222
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#F9DDA4">
            <div id={style.yellow9} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #F9DDA4
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#F3CC79">
            <div id={style.yellow10} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #F3CC79
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#E5B143">
            <div id={style.yellow11} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #E5B143
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#EEC213">
            <div id={style.yellow12} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #EEC213
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#F5C469">
            <div id={style.yellow13} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #F5C469
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#F4C724">
            <div id={style.yellow14} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #F4C724
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#F0DF87">
            <div id={style.yellow15} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #F0DF87
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#DFAF2B">
            <div id={style.yellow16} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #DFAF2B
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#FAC42F">
            <div id={style.yellow17} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #333943
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#F3B63A">
            <div id={style.yellow18} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #F3B63A
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#FBD28B">
            <div id={style.yellow19} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #FBD28B
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#F3B431">
            <div id={style.yellow20} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #F3B431
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#FAD02E">
            <div id={style.yellow21} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #FAD02E
              </span>
            </div>
          </CopyToClipboard>
        </div>
      </Fragment>
    );
  }
}

export default Yellow;
