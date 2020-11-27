import React from "react";
import logo from '../images/react-logo.png'
import jsx3 from '../images/jsx3.png'
import jsx6 from '../images/jsx6.png'
import jsx8 from '../images/jsx8.png'
import {Link} from 'react-scroll'



function Jsx() {

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

    const stilPlavo = {
        color: 'CadetBlue'
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
                <img src={logo} style={stilLogo} alt=""/>
                <h2 style={{color: '#383838' }}>JSX</h2>
                <ul>
                    <li><Link to='jsx' smooth={true} duration={1000} offset={-15}>Šta je JSX?</Link></li>
                    <li><Link to='izrazi' smooth={true} duration={1000} offset={-15}>Izrazi u JSX-u</Link></li>
                    <li><Link to='uslovniIzrazi' smooth={true} duration={1000} offset={-15}>Uslovni izrazi</Link></li>
                    <li><Link to='stilovi' smooth={true} duration={1000} offset={-15}>Stilovi u JSX-u</Link></li>
                </ul>
            </div>

            <div className="main_content">

                <h1 style={stilNaslov}>JSX</h1>

                <h2 className="podnaslov" style={stilPodnaslov}><a href="#jsx" style={stilPodnaslov} id="jsx">Šta je JSX?</a></h2>

                    <p style={stilTeksta}>JSX (JavaScript Syntax Extension) je sintaksna ekstenzija JavaScript jezika
                        zasnovanog na EcmaScript6, a tokom izvođenja je preveden u redovan JavaScript.</p>
                    <p style={stilTeksta}> Upotrebom JSX-a možemo zajedno koristiti HTML i JavaScript. JSX obrađuje HTML
                        tagove u elemente React-a. React ne zahteva upotrebu JSX-a, ali većina ljudi to smatra korisnim kao
                        vizuelnim pomoćnim sredstvom prilikom rada sa korisničkim interfejsom unutar JavaScript koda.</p>
                    <p style={stilTeksta}> JSX će prijaviti grešku ukoliko:
                        HTML nije pravilno sintaksno napisan, elementi nemaju jednog roditelja, prazni elementi nisu ispravno
                        zatvoreni. Pogledajte naredna dva primera, prvi koristi JSX dok drugi ne koristi:</p>

                <div style={stilDiv}>Kreiranje elementa upotrebom JSX-a </div>
                <pre style={stilPre} >
                    <span style={stilNarandzasto}> const </span> element=<span style={stilZuto}> &lt;h1&gt;</span>JSX<span style={stilZuto}>&lt;/h1&gt;</span>
                    <br/>
                    ReactDOM.<span style={stilZuto}>render</span>(element,<span style={stilLjubicasto}>document</span>.getElementById(<span style={stilZeleno}> "root"</span>))
                </pre>

                <div style={stilDiv}>Kreiranje elementa bez upotrebe JSX-a </div>
                <pre style={stilPre} >
                    <span style={stilNarandzasto}> const </span> element= React.<span style={stilZuto}>createElement</span>(type:<span style={stilZeleno}>'h1'</span>, props:{'{'}{'}'}<span style={stilNarandzasto}>,</span> children:<span style={stilZeleno}> 'Bez JSX-a'</span>)
                    <br/>
                    ReactDOM.<span style={stilZuto}>render</span>(element,<span style={stilLjubicasto}>document</span>.getElementById(<span style={stilZeleno}> "root"</span>))
                </pre>

                   <p style={stilTeksta}>JSX funkcioniše tako što skenira ceo JavaScript dokument, traži tagove i kada pronađe,
                       u pozadini poziva metodu createElement, uzima tag i prosleđuje ga u createElement, zatim traži decu koja
                       se nalaze između otvorenog i zatvorenog taga i takođe prosleđuje u createElement.</p>


                <h2 className="podnaslov"><a href="#izraz" style={stilPodnaslov} id="izrazi">Izrazi u JSX-u</a></h2>

                   <p style={stilTeksta}>Sa JSX-om se izrazi mogu pisati unutar vitičastih zagrada. Izraz može biti React
                       promenljiva, svojstvo ili bilo koji drugi izraz i vratiti rezultat.</p>

                <div style={stilDiv}>Izraz u React-u </div>
                <pre style={stilPre} >
                    <span style={stilNarandzasto}>function </span> <span style={stilZuto}>jsx</span>() {'{'}
                    <br/>
                    <span style={stilNarandzasto}>  return </span>(
                    <br/>
                            <span style={stilZuto}>      &lt;h1&gt;</span> 5 + 5 = {'{'}5+5{'}'} <span style={stilZuto}>&lt;/h1&gt;</span>
                    <br/> )
                    <br/>
                    {'}'}
                </pre>

                   <p style={stilTeksta}>Ovaj kod će renderovati sledeće:</p>

                   <img src={jsx3} style={stilSlike} alt="" />


                <h2 className="podnaslov"><a href="#uslovniIzrazi" style={stilPodnaslov} id="uslovniIzrazi">Uslovni izrazi</a></h2>

                    <p style={stilTeksta}> S obzirom na to da unutar JSX-a ne možemo koristiti if/else izjave, umesto toga koristimo uslovne
                        (ternarne) izraze. U sledećem primeru, promenljiva i jednaka je 1, tako da će pregledač renderovati “Tačno”,
                         a ako ga promenimo u neku drugu vrednost renderovaće “Netačno”. </p>

                <div style={stilDiv}>Ternarni izraz </div>
                <pre style={stilPre} >
                    <span style={stilNarandzasto}>function </span> <span style={stilZuto}>jsx</span>() {'{'}
                    <br/>
                    <span style={stilNarandzasto}>  var </span>i = <span style={stilPlavo}>1</span><span style={stilNarandzasto}>;</span>
                    <br/>
                    <span style={stilNarandzasto}>  return </span>(
                    <br/>
                    <span style={stilZuto}>      &lt;h1&gt;</span> {'{'}i===<span style={stilPlavo}>1</span> ? <span style={stilZeleno}> 'Tačno' </span>: <span style={stilZeleno}>'Netačno'</span>{'}'} <span style={stilZuto}>&lt;/h1&gt;</span>
                    <br/> )
                    <br/>
                    {'}'}
                </pre>
                    <img src={jsx6} style={stilSlike} alt="" />


                <h2 className="podnaslov"><a href="#stilovi" style={stilPodnaslov} id="stilovi">Stilovi u JSX-u</a></h2>

                   <p style={stilTeksta}> React preporučuje upotrebu ugrađenih stilova. Kada želimo da postavimo ugrađene stilove,
                       moramo da koristimo sintaksu camelCase (stil pisanja bez razmaka ili interpunkcije između reči). React će takođe
                       automatski dodati piksele nakon vrednosti broja na određenim elementima. Sledeći primer prikazuje kako dodati
                       mojStil elementu. </p>

                <div style={stilDiv}>Stil u React-u</div>
                <pre style={stilPre} >
                    <span style={stilNarandzasto}>function </span> <span style={stilZuto}>jsx</span>() {'{'}
                    <br/>
                    <span style={stilNarandzasto}>  const </span>mojStil = {'{'}
                    <br/>
                    <span style={stilLjubicasto}>       color</span>: <span style={stilZeleno}>'</span><span style={{color:"#61dafb"}}> #61dafb</span><span style={stilZeleno}>'</span><span style={stilNarandzasto}>,</span>
                    <br/>
                    <span style={stilLjubicasto}>       fontSize</span>: <span style={stilPlavo}>100</span>
                    <br/> {'}'} <br/>
                    <span style={stilNarandzasto}>  return </span>(
                    <br/>
                    <span style={stilZuto}>      &lt;h1</span> style={'{'}mojStil{'}'}<span style={stilZuto}>&gt;</span>React<span style={stilZuto}>&lt;/h1&gt;</span>
                    <br/> )
                    <br/>
                    {'}'}
                </pre>

                   <img src={jsx8} style={stilSlike} alt="" />

            </div>
        </div>



)
}


export default Jsx



