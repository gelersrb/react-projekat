import React from "react"
import logo from "../images/react-logo.png";
import {Link} from "react-scroll";

function ReactRender() {
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
        marginTop: 20,
        marginBottom: 20
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
                <img src={logo} style={stilLogo}/>
                <h2 style={{color: '#383838', fontSize: 22}}>RENDER</h2>
                <ul>
                    <li><Link to='prikaz' smooth={true} duration={1000} offset={-15}>Prikaz u React-u</Link></li>
                    <li><Link to='prikazEl' smooth={true} duration={1000} offset={-15}>Prikaz komponente/elementa</Link></li>

                </ul>

            </div>

            <div className="main_content">

                <h1 style={stilNaslov}>Render</h1>

                <h2 className="podnaslov" style={stilPodnaslov}><a href="#prikaz" style={stilPodnaslov} id="prikaz">Prikaz u React-u</a></h2>

                <p style={stilTeksta}> Kako bi React renderovao HTML na izlaznu stranu potrebno je da koristimo
                    ReactDOM.render() funkciju koja se nalazi u react-dom biblioteci. Cilj ove funkcije je da prikaže određeni
                    HTML kod unutar određenog HTML elementa.</p>

                <p style={stilTeksta}>Da bi React znao gde komponenta treba biti postavljena na DOM, ReactDOM.render() funkciji se
                    prosleđuju dva argumenta, prvi koji označava React komponentu ili element koji želimo renderovati i drugi koji
                    govori na kom mestu u DOM-u želimo renderovati prvi argument.</p>


                <p style={stilTeksta}>Recimo da negde unutar HTML fajla postoji sledeći div tag:</p>

                <div style={stilDiv}>'root' čvor</div>
                <pre style={stilPre} >
                    <span style={stilZuto}>&lt;div </span>id=<span style={stilZeleno}>'root'</span><span style={stilZuto}>&gt;</span><span style={stilZuto}>&lt;/div&gt;</span>
                </pre>

                <p style={stilTeksta}> Ovo nazivamo “root” DOM čvorom jer svim što se nalazi unutar njega upravlja React DOM. Aplikacije izgrađene samo sa React-om obično imaju jedan “root” DOM čvor. Međutim ukoliko želite da integrišete React u postojeću aplikaciju, moguće je da imate onoliko izolovanih “root” DOM čvorova koliko želite.</p>

                <h2 className="podnaslov"><a href="#prikazEl" style={stilPodnaslov} id="prikazEl">Prikaz komponente/elementa</a></h2>

                <p style={stilTeksta}>Ukoliko želimo direktno da prikažemo na primer paragraf to će izgledati ovako:</p>

                <div style={stilDiv}>Prikaz paragrafa</div>
                <pre style={stilPre} >
                    ReactDOM.<span style={stilZuto}>render</span>(<span style={stilZuto}>&lt;p&gt;</span>Hello World<span style={stilZuto}>&lt;/p&gt;</span>,<span style={stilLjubicasto}>document</span>.getElementById(<span style={stilZeleno}> "root"</span>))
                </pre>

                <p style={stilTeksta}>Kada želimo da prikažemo element uradićemo to na ovaj način:</p>

                <div style={stilDiv}>Prikaz elementa</div>
                <pre style={stilPre} >
                    <span style={stilNarandzasto}> const </span> element=<span style={stilZuto}> &lt;h1&gt;</span>JSX<span style={stilZuto}>&lt;/h1&gt;</span>
                    <br/>
                   ReactDOM.<span style={stilZuto}>render</span>(element,<span style={stilLjubicasto}>document</span>.getElementById(<span style={stilZeleno}> "root"</span>))
                </pre>

                <p style={stilTeksta}>Komponentu MojaKomponenta prikazaćemo ovako:</p>

                <div style={stilDiv}>Prikaz komponente</div>
                <pre style={stilPre} >
                    ReactDOM.<span style={stilZuto}>render</span>(&lt;MojaKomponenta /&gt;,<span style={stilLjubicasto}>document</span>.getElementById(<span style={stilZeleno}> "root"</span>))
                    </pre>

            </div>
        </div>


    )
}

export default ReactRender