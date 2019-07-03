import React, { Fragment } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import style from "./css/gradients.module.css";

class Gradients extends React.Component {
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
        <div
          className={style.container}
          id="gradients"
          onClick={this.handleClick}
        >
          <CopyToClipboard text=" background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)">
            <div id={style.grad1} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);">
            <div id={style.grad2} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard
            text="background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898; 
        background-blend-mode: multiply,multiply;"
          >
            <div id={style.grad3} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="background-image: linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%);">
            <div id={style.grad4} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="background-image: linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%);">
            <div id={style.grad5} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="background-image: linear-gradient(to top, #4fb576 0%, #44c489 30%, #28a9ae 46%, #28a2b7 59%, #4c7788 71%, #6c4f63 86%, #432c39 100%);">
            <div id={style.grad6} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="background-image: linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%);">
            <div id={style.grad7} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="background-image: linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);">
            <div id={style.grad8} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);">
            <div id={style.grad9} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="background-image: linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);">
            <div id={style.grad10} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="background-image: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);">
            <div id={style.grad11} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="linear-gradient(-225deg, #7742B2 0%, #F180FF 52%, #FD8BD9 100%);">
            <div id={style.grad12} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="background-image: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);">
            <div id={style.grad13} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);">
            <div id={style.grad14} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="background-image: linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%);">
            <div id={style.grad15} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="background-image: linear-gradient(to top, #e8198b 0%, #c7eafd 100%);">
            <div id={style.grad16} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="background-image: linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%);">
            <div id={style.grad17} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);">
            <div id={style.grad18} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);">
            <div id={style.grad19} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);">
            <div id={style.grad20} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);">
            <div id={style.grad21} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
              </span>
            </div>
          </CopyToClipboard>
        </div>
      </Fragment>
    );
  }
}

export default Gradients;
