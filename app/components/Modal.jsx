import React from 'react';
import Upload from './Upload.jsx';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            tel: '',
            src: '../../img/user.jpeg'
        };
        this.updateName = this.updateName.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateTel = this.updateTel.bind(this);
        this.add = this.add.bind(this);
        this.close = this.close.bind(this);
        this.load = this.load.bind(this);
    }

    updateName(value) {
        this.setState({name: value});
    }

    updateEmail(value) {
        this.setState({email: value});
    }

    updateTel(value) {
        this.setState({tel: value});
    }

    add(event) {
        event.preventDefault();
        let info = this.state;
        this.props.add(info);
    }

    load(url) {
        this.setState({src: url});
    }

    close() {
        this.props.close();
    }

    render() {
        return (
            <div>
                <div className="modal">
                    <svg className="icon-box" onClick={this.close}>
                        <use xlinkHref="img/symbol-defs.svg#icon-cross"></use>
                    </svg>
                    <form action="#" onSubmit={this.add}>
                        <input
                            type="text"
                            placeholder="name"
                            onChange={(evt) => this.updateName(evt.target.value)}
                            required/>
                        <input
                            type="email"
                            placeholder="email"
                            onChange={(evt) => this.updateEmail(evt.target.value)}
                            required
                            pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
                            title="Please, correctly write email"/>
                        <input
                            type="tel"
                            placeholder="phone number"
                            onChange={(evt) => this.updateTel(evt.target.value)}
                            required
                            pattern="(\+375 (25|29|33|34) ([0-9]{3}( [0-9]{2}){2}))"
                            title="Please, write phone numbur in format +375 xx xxx xx xx"/>
                        <Upload load={this.load}/>
                        <div className="buttons">
                        <input className="btn" onClick={this.close} type="button" value="Cancel"/>
                        <input className="btn btn__save" type="submit" value="Save"/>
                        </div>
                    </form>
                </div>
                <div className="modal__overlay"></div>
            </div>
        )
    }
}

