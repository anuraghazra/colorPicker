import React, { Fragment } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import style from "./css/red.module.css";

class Red extends React.Component {
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
        <div className={style.container} id="red" onClick={this.handleClick}>
          <CopyToClipboard text="#EB4D4B">
            <div id={style.red1} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #EB4D4B
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#FF1744">
            <div id={style.red2} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #FF1744
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#E53935">
            <div id={style.red3} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #E53935
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#D50000">
            <div id={style.red4} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #D50000
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#D32F2F">
            <div id={style.red5} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #D32F2F
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#F44336">
            <div id={style.red6} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #F44336
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#FF362E">
            <div id={style.red7} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #FF362E
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#FF4848">
            <div id={style.red8} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #FF4848
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#E83350">
            <div id={style.red9} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #E83350
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#AE1438">
            <div id={style.red10} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #AE1438
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#E8290B">
            <div id={style.red11} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #E8290B
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#E44236">
            <div id={style.red12} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #E44236
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#B83227">
            <div id={style.red13} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #B83227
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#D63031">
            <div id={style.red14} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #D63031
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#E84342">
            <div id={style.red15} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #E84342
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#FF3031">
            <div id={style.red16} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #FF3031
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#EA425C">
            <div id={style.red17} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #EA425C
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#E71C23">
            <div id={style.red18} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #E71C23
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#FF3E4D">
            <div id={style.red19} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #FF3E4D
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#EC4849">
            <div id={style.red20} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #EC4849
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#BA2F16">
            <div id={style.red21} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #BA2F16
              </span>
            </div>
          </CopyToClipboard>
        </div>
      </Fragment>
    );
  }
}

export default Red;
