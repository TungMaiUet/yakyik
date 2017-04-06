import React, { Component } from 'react'
import styles from './styles'


class Comment extends Component {

    render() {
        // console.log(this.props.currentComment)
        return (
            <div >
                <p style={{ fontStyle: 18, fontWeight: 600 }}>{this.props.currentComment.body}</p>
                <span>{this.props.currentComment.username}</span>
                <span style={{ marginLeft: 12, marginRight: 12 }}>|</span>
                <span>{this.props.currentComment.timestamp}</span>
                <hr />
            </div>
        )
    }
}


class Comments extends Component {
    constructor() {
        super()
        this.state = {
            comment: [{
                username: '',
                body: '',
                timestamp: ''
            }],
            list: [
                { body: 'kfhskdfhksa', username: 'abc' },
                { body: 'sfdaoijfak', username: 'jdfka' },
                { body: 'lcvxn jva', username: 'xmc,v' },
                { body: 'aefshilnxc,', username: 'wah' },
                { body: 'xcbuiawj', username: 'reijkls' }
            ]
        }
        this.submitComment = this.submitComment.bind(this)
        this.updateUsername = this.updateUsername.bind(this)
        this.updateComment = this.updateComment.bind(this)
    }

    submitComment() {
        // console.log('aaa' +JSON.stringify(this.state.comment))
        let updatedList = Object.assign([], this.state.list)
        updatedList.push(this.state.comment)
        // console.log(updatedList);
        this.setState({
            list: updatedList
        })
    }

    updateUsername(event) {
        // console.log(event.target.value);
        let updatedComment = Object.assign({}, this.state.comment)
        updatedComment['username'] = event.target.value
        this.setState({
            comment: updatedComment
        })
    }

    updateComment(event) {
        let updatedComment = Object.assign({}, this.state.comment)
        updatedComment['body'] = event.target.value
        this.setState({
            comment: updatedComment
        })
    }
    render() {
        const style = styles.comments
        var commentList = this.state.list.map((comment, position) => {
            return (
                <li key={position}><Comment currentComment={comment}></Comment></li>
            )
        })
        // console.log(commentList)
        return (
            <div style={style.commentBox}>
                <h2>{}</h2>
                <ul>
                    {commentList}
                </ul>


                <input onChange={this.updateUsername} type="text" className="form-control" placeholder="Username" /><br />
                <input onChange={this.updateComment} type="text" className="form-control" placeholder="Comment" /><br />
                <button className="btn btn-info" onClick={this.submitComment}>Submit Comment</button>

            </div>
        )
    }
}

export default Comments