import React from 'react';

import { FileSystem } from './fs';
import { Controlled as CodeMirror } from 'react-codemirror2';

const fs = new FileSystem('http://localhost:8000/');

const options = {
  lineNumbers: true,
  mode: "javascript",
  theme: "material",
  lineWrapping: false
};

export class TextEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: this.props.height || '300px',
      filename: this.props.filename,
      filedata: ''
    };

  }

  componentDidMount() {
    this.loadfile();
  }

  get filename() {
    return this.state.filename;
  }

  get filedata() {
    return this.state.filedata;
  }

  loadfile = event => {
    fs.load(this.filename,
      s => this.setFiledata(s),
      f => this.showError(`Error loading ${this.filename}`)
    );
  }

  savefile = event => {
    fs.save(this.filename, this.filedata,
      s => {},
      f => {},
    );
  }

  onChange = (editor, value) => {
  };

  onBeforeChange = (editor, data, value) => {
    this.setFiledata(value);
  };

  showError = s => {
    // TODO
    alert(s);
  };

  setFilename = s => {
    this.setState({ filename: s });
  };

  setFiledata = s => {
    this.setState({ filedata: s });
  };

  onFilenameChange = event => {
    this.setFilename(event.target.value);
  };

  onFiledateChange = event => {
    this.setFiledata(event.target.value);
  };

  render() {

      return (

        <div>

          <div className="top">
            <div className="flex">
              <div className="outline w-20 pa3 mr2">
                <div
                  onClick={this.loadfile}
                  className="w-80 f6 link dim ph3 pv2 mt2 mb2 dib white bg-black" href="#0">load</div>
              </div>

              <div className="w-60">
                <form className="pa4 black-60 w-100">
                  <div className="mr2">

                    <input className="input-reset ba b--black-20 pa2 mb2 mt1 db w-100"
                      onChange={this.onFilenameChange}
                      value={this.state.filename}
                      id="filename"
                      type="text"
                      aria-describedby="filename-desc"/>
                  </div>
                </form>
              </div>

              <div className="outline w-20 pa3">
                <div
                  onClick={this.savefile}
                  className="w-80 f6 link dim ph3 pv2 mb2 mt2 dib white bg-black" href="#0">save</div>
              </div>
            </div>
          </div>

          <CodeMirror
            className="CodeMirror"
            value={this.state.filedata}
            options={options}
            onChange={this.onChange}
            onBeforeChange={this.onBeforeChange}
          />

        </div>
      );
    }
}
