import React from 'react';

export default class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      src: ''
    };
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  componentWillMount() {
    let url = this.props.url || '../../img/user.jpeg';
    this.setState({src: url});
  }

  handleImageChange(event) {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({file: file, src: reader.result});
      this.props.load(reader.result);
    }
    reader.readAsDataURL(file);
  }

  render() {
    let url = this.state.src;
    let image = null;
    image = (<img src={url} width="70" height="70"/>);
    return (
      <div className="preview__component">
        <div className="img__preview">
          {image}
        </div>
        <input className="btn" type="file" onChange={this.handleImageChange}/>
      </div>
    )
  }
}

