import React from 'react';
import Upload from './Upload.jsx';

export default class EditModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            tel: '',
            src: ''
        };
        this.updateName = this.updateName.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateTel = this.updateTel.bind(this);
        this.edit = this.edit.bind(this);
        this.close = this.close.bind(this);
        this.load = this.load.bind(this);
    }

    componentWillMount() {
        this.setState({name: this.props.info.name, email: this.props.info.email, tel: this.props.info.tel, src: this.props.info.src});
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

    edit() {
        let info = this.state;
        this.props.edit(this.props.num, info);
        this.props.close();
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
                    <form>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={(evt) => this.updateName(evt.target.value)}/>
                        <input
                            type="email"
                            value={this.state.email}
                            onChange={(evt) => this.updateEmail(evt.target.value)}/>
                        <input
                            type="tel"
                            value={this.state.tel}
                            onChange={(evt) => this.updateTel(evt.target.value)}/>
                        <Upload load={this.load} url={this.state.src}/>
                        <div className="buttons">
                        <input className="btn" onClick={this.close} type="button" value="Cancel"/>
                        <input
                            className="btn btn__save"
                            onClick={this.edit}
                            type="button"
                            value="Save"/>
                            </div>
                    </form>
                </div>
                <div className="modal__overlay"></div>
            </div>
        )
    }
}
