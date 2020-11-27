import React from "react";

export default class proba extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            smer: '' ,
        brojIndeksa: null
    }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const ime = event.target.name
        const vrednost = event.target.value
        this.setState({[ime]: vrednost})
    }

    render() {
        return (
            <form>
                <p> Upiši svoj smer: </p>
                <input type="text" name="smer" onChange={this.handleChange} />
        <p> Upiši broj indeksa </p>
        <input type="text" name="brojIndeksa" onChange={this.handleChange} />
        <h1> Indeks: {this.state.smer} {this.state.brojIndeksa} </h1>
    </form>

        )   }}