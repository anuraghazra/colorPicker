import React, { Fragment } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import style from "./css/blue.module.css";

class Blue extends React.Component {
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
        <div className={style.container} id="blue" onClick={this.handleClick}>
          <CopyToClipboard text="#3498DB">
            <div id={style.blue1} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #3498DB
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#2475B0">
            <div id={style.blue2} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #2475B0
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#74B9FF">
            <div id={style.blue3} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #74B9FF
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#0A79DF">
            <div id={style.blue4} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #0A79DF
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#4834DF">
            <div id={style.blue5} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #4834DF
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#30336B">
            <div id={style.blue6} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #30336B
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#487EB0">
            <div id={style.blue7} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #487EB0
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#192A56">
            <div id={style.blue8} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #192A56
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#6A89CC">
            <div id={style.blue9} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #6A89CC
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#0A3D62">
            <div id={style.blue10} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #0A3D62
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#4B77BE">
            <div id={style.blue11} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #0A3D62
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#304FFE">
            <div id={style.blue12} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #304FFE
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#4527A0">
            <div id={style.blue13} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #4527A0
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#30336b">
            <div id={style.blue14} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #30336b
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#3C40C6">
            <div id={style.blue15} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #3C40C6
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#25CCF7">
            <div id={style.blue16} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #25CCF7
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#003171">
            <div id={style.blue17} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #003171
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#4BCFFA">
            <div id={style.blue18} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #4BCFFA
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#0ABDE3">
            <div id={style.blue19} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #0ABDE3
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#8C7AE6">
            <div id={style.blue20} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #8C7AE6
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#67E6DC">
            <div id={style.blue21} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #67E6DC
              </span>
            </div>
          </CopyToClipboard>
        </div>
      </Fragment>
    );
  }
}

export default Blue;
