import React, { Component } from 'react';
import io from 'socket.io-client';
import moment from 'moment'


class Chat extends Component {
    socket;
    dateOptions = {
        hour: '2-digit',
        minute: '2-digit',
        seconds: '2-difit'
    };


    constructor(props) {
        super(props)

        this.state = {
            currentMessage: '',
            messages: []
        }
        this.connect();
    }

    connect() {
        this.socket = io.connect('http://chat.artifex.usermd.net:3017');
        this.socket.on('connect', () => {
            console.log('connected');
        });
        this.socket.on('receiveChatMessage', (data) => {
            this.state.messages.push(data);
            this.setState({ messages: this.state.messages });
        });
        this.socket.on('disconnect', () => {
            console.log('disconnected');
        });
    }

    sentMessage() {
        const message = {
            content: this.state.currentMessage,
            author: this.props.name,
            time: Date.now(),
        };
        this.setState({ currentMessage: '' });
        this.socket.emit('sendChatMessage', message);
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="card">
                    <div className="card-block">
                        <div className="list">
                            {
                                this.state.messages.map((el, i) =>
                                    <div className="alert message alert-info">
                                        <strong>{el.author}</strong> {el.content} { moment(new Date(el.time)).format("HH:mm:ss") }
                                    </div>
                                )
                            }

                        </div>
                        <div className="input-group">
                            <input type="text" value={this.state.currentMessage} onChange={(e) => this.setState({ currentMessage: e.target.value })} className="form-control" placeholder="Enter message" >
                            </input>
                            <span className="input-group-btn">
                                <button className="btn btn-secondary" onClick={() => this.sentMessage()}
                                    type="button">Send</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Chat;
