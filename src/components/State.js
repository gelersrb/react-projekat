import React from "react";
import logo from "../images/react-logo.png";
import {Link} from "react-scroll";
import state1 from "../images/state1.png"
import state2 from "../images/state2.png"


export default function State() {
    const stilNaslov = {
        color: '#282c34',
        fontSize: 60,
        fontWeight: 'bold',
        marginTop: 20
    }

    const stilPodnaslov = {
        color: '#303030',
        fontSize: 40,
        marginTop: 50,
        textTransform: 'uppercase',
        textDecoration:'none'
    }

    const stilTeksta = {
        color: 'black',
        display: 'block',
        width: 900,
        marginTop: 20
    }

    const stilSlike = {
        width: '50%',
        marginLeft: 80,
        marginTop: 20
    }

    const stilLogo = {
        marginBottom: 30,
        marginTop: 14,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: "50%"
    }

    const stilNarandzasto = {
        color: 'orange'
    }

    const stilLjubicasto = {
        color: '#bf94e4'
    }

    const stilZeleno = {
        color: 'darkolivegreen'
    }

    const stilZuto = {
        color: '#ffcf75'
    }

    const stilDiv = {
        backgroundColor:"lightgrey",
        width:'50%',
        textAlign: 'center',
        padding: 16,
        marginLeft: 90
    }

    const stilPre = {
        backgroundColor: "#343434",
        width:"50%",
        padding: 16,
        color:'silver',
        margin: '0px 0px 16px',
        marginLeft: 90
    }


    return (

        <div className="wrapper">

            <div className="sidebar">
                <img src={logo} style={stilLogo} alt="" />
                <h2 style={{color: '#383838' }}>State</h2>
                <ul>
                    <li><Link to='kreiranjeState' smooth={true} duration={1000} offset={-15}>Kreiranje state objekta</Link></li>
                    <li><Link to='koriscenjeState' smooth={true} duration={1000} offset={-15}>Korišćenje state objekta</Link></li>
                    <li><Link to='promenaState' smooth={true} duration={1000} offset={-15}>Promena state objekta</Link></li>
                </ul>
            </div>

            <div className="main_content">

                <h1 style={stilNaslov}>STATE</h1>

                <p style={stilTeksta}>U React-u postoji dva tipa podataka od kojih komponenta zavisi.
                    U pitanju su state i props objekti. Već pomenuti props objekt je prosleđen od parent
                    komponente i samim tim je za child komponentu nepromenljiv. Za razliku od props objekta,
                    state objekt koristimo kada želimo da promenimo podatke. </p>

                    <p style={stilTeksta}>State je mesto gde se skladište vrednosti
                        svojstva koje pripadaju komponenti. Svaka komponenta
                        može imati svoje stanje koje se nalazi u objektu koji se zove this.state.</p>

                    <p style={stilTeksta}>Dakle, state je sličan props objektu, međutim state objekt je privatan
                    i u potpunosti kontrolisan od strane komponente.</p>


                <h2 className="podnaslov"><a href="#kreiranjeState" style={stilPodnaslov} id="kreiranjeState">Kreiranje state objekta</a></h2>

                <p style={stilTeksta}>State objekt može da sadrži onoliko svojstva koliko želimo. Unutar konstruktor metode
                    definišemo stanje state objekta.</p>
                <p style={stilTeksta}>U sledećem primeru definišemo svojstvo text:</p>

                <div style={stilDiv}>Definisanje state objekta </div>
                <pre style={stilPre} >
                    <span style={stilNarandzasto}>class </span>State <span style={stilNarandzasto}>extends </span>React.Component {'{'}
                    <br/>
                    <span style={stilZuto}>  constructor</span>(props) {'{'}
                    <br/>
                            <span style={stilNarandzasto}>      super</span>(props)
                    <br/>
                            <span style={stilNarandzasto}>      this</span>.<span style={stilLjubicasto}>state</span> = {'{'}
                    <br/>
                    <span style={stilLjubicasto}>          text: </span><span style={stilZeleno}>'Hello world'</span>
                    <br/>   {'}'}
                    <br/>{'}'}
                    <br/>
                    <span style={stilZuto}>  render</span>() {'{'}
                    <br/>
                             <span style={stilNarandzasto}>      return </span>(
                    <br/>
                    <span style={stilZuto}>            &lt;div&gt;</span>
                    <br/>
                    <span style={stilZuto}>                  &lt;h1&gt;</span> Tekst: <span style={stilZuto}>&lt;/h1&gt;</span>
                   <br/>
                    <span style={stilZuto}>            &lt;/div&gt;</span>
                    <br/>    )
                    <br/>  {'}'}
                    <br/>{'}'}
                </pre>


                <h2 className="podnaslov"><a href="#koriscenjeState" style={stilPodnaslov} id="koriscenjeState">Korišćenje state objekta</a></h2>

                <p style={stilTeksta}> Objekt stanja se može pozvati bilo gde u komponenti koristeći sintaksu
                    this.state.imeSvojstva.</p>
                <p style={stilTeksta}> U okviru return funkcije unutar h1 taga pozivamo this.state.text:</p>

                <div style={stilDiv}>Korišćenje state objekta </div>
                <pre style={stilPre} >
                    <span style={stilNarandzasto}>class </span>State <span style={stilNarandzasto}>extends </span>React.Component {'{'}
                    <br/>
                    <span style={stilZuto}>  constructor</span>(props) {'{'}
                    <br/>
                            <span style={stilNarandzasto}>      super</span>(props)
                    <br/>
                            <span style={stilNarandzasto}>      this</span>.<span style={stilLjubicasto}>state</span> = {'{'}
                    <br/>
                    <span style={stilLjubicasto}>          text: </span><span style={stilZeleno}>'Hello world'</span>
                    <br/>   {'}'}
                    <br/>{'}'}
                    <br/>
                    <span style={stilZuto}>  render</span>() {'{'}
                    <br/>
                             <span style={stilNarandzasto}>      return </span>(
                    <br/>
                    <span style={stilZuto}>            &lt;div&gt;</span>
                    <br/>
                    <span style={stilZuto}>                  &lt;h1&gt;</span> Tekst: {'{'}<span style={stilNarandzasto}>this</span>.<span style={stilLjubicasto}>state</span>.<span style={stilLjubicasto}>text</span>{'}'} <span style={stilZuto}>&lt;/h1&gt;</span>
                   <br/>
                    <span style={stilZuto}>            &lt;/div&gt;</span>
                    <br/>    )
                    <br/>  {'}'}
                    <br/>{'}'}
                </pre>


                <h2 className="podnaslov"><a href="#promenaState" style={stilPodnaslov} id="promenaState">Promena state objekta</a></h2>

                <p style={stilTeksta}> Da bismo promenili vrednost state objekta, koristimo metodu this.setState(). </p>

                <p style={stilTeksta}>Kada se vrednost u state objektu promeni, komponenta će se ponovo prikazati, što znači
                    da će se izlaz promeniti prema novim vrednostima.</p>
                <p style={stilTeksta}>Definišemo funkciju prevedi i pozivamo je u okviru button taga na opciju klika:</p>

                <div style={stilDiv}>Korišćenje state objekta </div>
                <pre style={stilPre} >
                    <span style={stilNarandzasto}>class </span>State <span style={stilNarandzasto}>extends </span>React.Component {'{'}
                    <br/>
                    <span style={stilZuto}>  constructor</span>(props) {'{'}
                    <br/>
                            <span style={stilNarandzasto}>      super</span>(props)
                    <br/>
                            <span style={stilNarandzasto}>      this</span>.<span style={stilLjubicasto}>state</span> = {'{'}
                    <br/>
                    <span style={stilLjubicasto}>          text: </span><span style={stilZeleno}>'Hello world'</span>
                    <br/>   {'}'}
                    <br/>{'}'}
                    <br/>
                    <span style={stilZuto}>prevedi</span> = () ={">"} {'{'}
                    <br/>
                    <span style={stilNarandzasto}>      this</span>.<span style={stilZuto}>setState</span>({'{'}<span style={stilLjubicasto}>text: </span><span style={stilZeleno}>'Zdravo svete!'</span>{'}'})
                    <br/>{'}'}
                    <br/>
                    <span style={stilZuto}>  render</span>() {'{'}
                    <br/>
                             <span style={stilNarandzasto}>      return </span>(
                    <br/>
                    <span style={stilZuto}>            &lt;div&gt;</span>
                    <br/>
                    <span style={stilZuto}>                  &lt;h1&gt;</span> Tekst: {'{'}<span style={stilNarandzasto}>this</span>.<span style={stilLjubicasto}>state</span>.<span style={stilLjubicasto}>text</span>{'}'} <span style={stilZuto}>&lt;/h1&gt;</span>
                   <br/>
                    <span style={stilZuto}>                  &lt;button</span> onClick={'{'}<span style={stilNarandzasto}>this</span>.<span style={stilZuto}>prevedi</span>{'}'}<span style={stilZuto}>&gt;</span>Prevedi<span style={stilZuto}>&lt;/button&gt;</span>
                    <br/>
                    <span style={stilZuto}>            &lt;/div&gt;</span>
                    <br/>    )
                    <br/>  {'}'}
                    <br/>{'}'}
                </pre>

                <p style={stilTeksta}>Nakon pokretanja ovog koda dobijamo ovaj izlaz:</p>
                <img src={state1} style={stilSlike} alt="" />
                <p style={stilTeksta}>Klikom na dugme prevedi dobijamo sledeći izlaz:</p>
                <img src={state2} style={stilSlike} alt="" />

            </div>
        </div>



    )
}







