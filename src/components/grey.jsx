import React, { Fragment } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import style from "./css/grey.module.css";

class Grey extends React.Component {
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
        <div className={style.container} id="grey" onClick={this.handleClick}>
          <CopyToClipboard text="#212121">
            <div id={style.grey1} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #212121
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#DAE0E2">
            <div id={style.grey2} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #DAE0E2
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#4C4B4B">
            <div id={style.grey3} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #4C4B4B
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#8395A7">
            <div id={style.grey4} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #8395A7
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#A4B0BD">
            <div id={style.grey5} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #A4B0BD
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#535C68">
            <div id={style.grey6} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #535C68
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#535C68">
            <div id={style.grey7} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #535C68
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#47535E">
            <div id={style.grey8} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #47535E
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#586776">
            <div id={style.grey9} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #586776
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#616C6F">
            <div id={style.grey10} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #616C6F
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#99AAAB">
            <div id={style.grey11} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #99AAAB
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#2C3335">
            <div id={style.grey12} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #2C3335
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#333945">
            <div id={style.grey13} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #333945
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#2F363F">
            <div id={style.grey14} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #2F363F
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#777E8B">
            <div id={style.grey15} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #777E8B
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#758AA2">
            <div id={style.grey16} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #758AA2
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#333943">
            <div id={style.grey17} className={style.btn}>
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

          <CopyToClipboard text="#333940">
            <div id={style.grey18} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #333940
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#333949">
            <div id={style.grey19} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #333949
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#333946">
            <div id={style.grey20} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #333946
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#333666">
            <div id={style.grey21} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #333666
              </span>
            </div>
          </CopyToClipboard>
        </div>
      </Fragment>
    );
  }
}

export default Grey;
