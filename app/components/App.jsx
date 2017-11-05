import React from 'react';
import Modal from './Modal.jsx';
import Box from './Box.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Name',
          tel: '+375 29 122 22 22',
          email: 'mail@gmail.com',
          src: '../../img/user.jpeg'
        }, {
          name: 'Name',
          tel: '+375 29 122 22 22',
          email: 'mail@gmail.com',
          src: '../../img/user.jpeg'
        }, {
          name: 'Name',
          tel: '+375 29 122 22 22',
          email: 'mail@gmail.com',
          src: '../../img/user.jpeg'
        }, {
          name: 'Name',
          tel: '+375 29 122 22 22',
          email: 'mail@gmail.com',
          src: '../../img/user.jpeg'
        }
      ],
      storage: [
        {
          name: 'Name',
          tel: '+375 29 122 22 22',
          email: 'mail@gmail.com',
          src: '../../img/user.jpeg'
        }, {
          name: 'Name',
          tel: '+375 29 122 22 22',
          email: 'mail@gmail.com',
          src: '../../img/user.jpeg'
        }, {
          name: 'Name',
          tel: '+375 29 122 22 22',
          email: 'mail@gmail.com',
          src: '../../img/user.jpeg'
        }, {
          name: 'Name',
          tel: '+375 29 122 22 22',
          email: 'mail@gmail.com',
          src: '../../img/user.jpeg'
        }
      ],
      modal: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addItem = this.addItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.filter = this.filter.bind(this);
  }

  openModal() {
    this.setState({modal: true});
  }

  closeModal() {
    this.setState({modal: false});
  }

  addItem(value) {
    let arr = this.state.data;
    arr.push(value);
    this.setState({data: arr, storage: arr, modal: false});
  }

  editItem(index, item) {
    let arr = this.state.data;
    arr[index] = item;
    this.setState({data: arr, storage: arr});
  }

  removeItem(index) {
    let arr = this.state.data;
    arr.splice(index, 1);
    this.setState({data: arr, storage: arr});
  }

  filter(value) {
    let arr = this.state.storage;
    if (value.length > 3) {
      arr = arr.filter((item) => item.name.indexOf(value) !== -1);
    };
    this.setState({data: arr});
  }

  render() {
    return (
      <div>
        <h1 className="title">Heading project</h1>
        <div className="filter">
          <input
            className="filter__input"
            placeholder="Search..."
            type="text"
            onChange={(evt) => this.filter(evt.target.value)}/>
          <svg className="icon-box">
            <use xlinkHref="img/symbol-defs.svg#icon-search2"></use>
          </svg>
        </div>
        {this.state.modal ? <Modal close={this.closeModal} add={this.addItem}/> : null}
        <div className="content">
          {this.state.data.map((item, i) => <Box info={item} edit={this.editItem} delete={this.removeItem} key={i} num={i}/>)}
          <div className="add" onClick={this.openModal} info={this.props.info}></div>
        </div>
      </div>
    )
  }
}
