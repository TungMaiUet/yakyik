import React, { Component } from 'react'
import styles from './styles'
import superagent from 'superagent'


class Zone extends Component {


    render() {
        const style = styles.zone
        let zone = this.props.zone
        return (
            <div style={style.container}>
                <h2 style={style.header}><a style={style.title} href="#">{zone.name}</a></h2>
                <span>{zone.zipCodes.toString()}</span><br />
                <span>{zone.timestamp}</span>
            </div>
        );
    }
}

class Zones extends Component {
    constructor() {
        super()
        this.state = {
            zone: {
                name: '',
                zipCodes: '',
                timestamp: ''
            },
            list: []
        }
        this.submitZone = this.submitZone.bind(this)

    }

    componentDidMount() {

        superagent
            .get('/api/zone')
            .query(null)
            .set('Accept', 'application/json')
            .end((err, response) => {
                if (err) {
                    alert('ERROR' + err)
                    return
                }
                // console.log(JSON.stringify(response.body))
                let results = response.body.message
                this.setState({
                    list: results
                })
            })
    }

    submitZone() {
        let addZone = Object.assign([], this.state.list)
        addZone.push(this.state.list)
        console.log(addZone)
        this.setState({
            list: addZone
        })
    }

    addZone(event) {
        let addZone = Object.assign({}, this.state.list)
        addZone[event.target.id] = event.target.value
        // console.log
        this.setState({
            list: addZone
        })
    }

    render() {
        return (
            <div>
                <ol>
                    {this.state.list.map((zone, i) => {
                        return (
                            <li key={i}><Zone zone={zone} /></li>
                        )
                    })}

                    <input id="name" type="text" className="form-control" placeholder="Name" onChange={this.hanleInput} /><br />
                    <input id="zipCodes" type="text" className="form-control" placeholder="Zip Codes" onChange={this.hanleInput} /><br />
                    <button className="btn btn-danger" onClick={this.submitZone}>Add Zone</button>
                </ol>
            </div>
        )
    }
}

export default Zones