import React from 'react';
import EditModal from './EditModal.jsx';

export default class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.edit = this.edit.bind(this);
        this.close = this.close.bind(this);
        this.delete = this.delete.bind(this);
        this.upload = this.upload.bind(this);
    }

    upload(url) {
        this.setState({src: url});
    }

    close() {
        this.setState({modal: false});
    }

    edit() {
        this.setState({modal: true});
    }

    delete() {
        this.props.delete(this.props.num);
    }

    render() {
        return (
            <div className="box">
                <img
                    className="user__photo"
                    src={this.props.info.src}
                    width="100"
                    height="100"/>
                <div className="user__info">
                    <p className="user__name">{this.props.info.name}</p>
                    <p className="user__tel">{this.props.info.tel}</p>
                    <p className="user__email">{this.props.info.email}</p>
                </div>
                <div className="box__icons">
                    <svg className="icon-box" onClick={this.delete}>
                        <use xlinkHref="img/symbol-defs.svg#icon-bin2"></use>
                    </svg>
                    <svg className="icon-box pencil" onClick={this.edit}>
                        <use xlinkHref="img/symbol-defs.svg#icon-pencil"></use>
                    </svg>
                </div>
                {this.state.modal ? <EditModal
                            info={this.props.info}
                            close={this.close}
                            num={this.props.num}
                            edit={this.props.edit}/>
                    : null}
            </div>
        )
    }
}

