import React, { Fragment } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import style from "./css/more.module.css";

class More extends React.Component {
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
        <div className={style.container} id="more" onClick={this.handleClick}>
          <CopyToClipboard text="#01CBC6">
            <div id={style.more1} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #01CBC6
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#EA7773">
            <div id={style.more2} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #EA7773
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#BB2CD9">
            <div id={style.more3} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #BB2CD9
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#8B78E6">
            <div id={style.more4} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #8B78E6
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#2B2B52">
            <div id={style.more5} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #2B2B52
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#EAF0F1">
            <div id={style.more6} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #EAF0F1
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#F5BCBA">
            <div id={style.more7} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #F5BCBA
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#E74292">
            <div id={style.more8} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #E74292
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#FD9644">
            <div id={style.more9} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #FD9644
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#4cd137">
            <div id={style.more10} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #4cd137
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#353b48">
            <div id={style.more11} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #353b48
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#e84393">
            <div id={style.more12} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #e84393
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#fd79a8">
            <div id={style.more13} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #fd79a8
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#ffeaa7">
            <div id={style.more14} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #ffeaa7
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#0984e3">
            <div id={style.more15} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #0984e3
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#6c5ce7">
            <div id={style.more16} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #6c5ce7
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#2d3436">
            <div id={style.more17} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #2d3436
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#a55eea">
            <div id={style.more18} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #a55eea
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#45aaf2">
            <div id={style.more19} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #45aaf2
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#F3B431">
            <div id={style.more20} className={style.btn}>
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

          <CopyToClipboard text="#20bf6b">
            <div id={style.more21} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #20bf6b
              </span>
            </div>
          </CopyToClipboard>
        </div>
      </Fragment>
    );
  }
}

export default More;
