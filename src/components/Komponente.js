import React from "react";
import logo from "../images/react-logo.png";
import props from "../images/props.png"
import {Link} from 'react-scroll'


class Komponenta extends  React.Component {
    constructor(props) {
        super(props);
        this.state= {
            isOpen: false
        }
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return{
                isOpen: !prevState.isOpen

            }
        })
    }


    render() {
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
        textDecoration: 'none'
    }

    const stilTeksta = {
        color: 'black',
        display: 'block',
        width: 900,
        marginTop: 20,
        marginBottom: 20
    }

    const stilSlike = {
        width: '50%',
        marginLeft: 80,
        marginTop: 20,
        marginBottom: 20
    }

    const stilLogo = {
        marginBottom: 30,
        marginTop: 1,
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
        backgroundColor: "lightgrey",
        width: '50%',
        textAlign: 'center',
        padding: 16,
        marginLeft: 90
    }

    const stilPre = {
        backgroundColor: "#343434",
        width: "50%",
        padding: 16,
        color: 'silver',
        margin: '0px 0px 16px',
        marginLeft: 90
    }

        let listItem= this.state.isOpen ? <li><Link to='props'  smooth={true} duration={1000} offset={-15}> Props</Link></li> : false
        let arrow= this.state.isOpen ? <i className="arrow up"></i> : <i className="arrow down"></i>


        return (


            <div className="wrapper">

                <div className="sidebar">
                    <img src={logo} style={stilLogo} alt="" /> 
                    <h2 style={{color: '#383838', fontSize: 22}}>KOMPONENTE</h2>
                    <ul>
                        <li><Link to='komponente' smooth={true} duration={1000} offset={-15}>Šta su komponente?</Link>
                        </li>
                        <li><Link to='klasna' smooth={true} duration={1000} offset={-15}>Klasna komponenta</Link></li>
                        <li><Link to='funkcionalna' smooth={true} duration={1000} offset={-15}>Funkcionalna komponenta</Link></li>
                        <li><Link to='dinamicka' onClick={this.handleClick} smooth={true} duration={1000} offset={-15}>Dinamičke komponente {arrow}</Link></li>{listItem}
                    </ul>

                </div>

                <div className="main_content">

                    <h1 style={stilNaslov}>Komponente</h1>

                    <h2 className="podnaslov" style={stilPodnaslov} ><a href="#komponente" style={stilPodnaslov}
                                                                       id="komponente">Šta su komponente?</a></h2>

                    <p style={stilTeksta}>U osnovi svih React aplikacija su komponente. Za pisanje React aplikacije
                        pišemo React komponente koje odgovaraju različitim elementima interfejsa. Zatim te komponente organizujemo unutar
                        komponenata višeg nivoa koje definišu strukturu naše aplikacije.</p>
                    <p style={stilTeksta}> Komponente su nezavisan i ponovo upotrebljiv deo koda. One imaju istu svrhu kao i
                        JavaScript funkcije, ali rade izolovano i vraćaju HTML putem render funkcije. Potrebno ih je izrađivati na takav
                        način da svaka komponenta bude odgovorna samo za pojedini deo funkcionalnosti. Ako u kodu postoji neka komponenta
                        koja sadrži više funkcionalnosti, preporuka je da se razbije na više komponenti. Takva podela odgovornosti će učiniti
                        komponente čitljivim, lako razumljivim i jednostavnim, takođe na taj način će biti pogodne za ponovnu upotrebu.</p>
                    <p style={stilTeksta}> Postoji dve vrste komponenata: klasne komponente i funkcionalne komponente.</p>


                    <h2 className="podnaslov"><a href="#klasna" style={stilPodnaslov} id="klasna">Klasna komponenta</a>
                    </h2>

                    <p style={stilTeksta}>Kada kreiramo React komponentu ime komponente mora da započinje velikim slovom.
                        Komponenta treba da nasleđuje klasu React.Component, na taj način daje pristup funkcijama React.Component klase.
                        Komponenta takođe obuhvata render metodu koja vraća HTML. </p>

                    <div style={stilDiv}>Klasna komponenta</div>
                    <pre style={stilPre}>
                    <span style={stilNarandzasto}>class </span>MojaKomponenta<span
                        style={stilNarandzasto}> extends</span> React.Component {'{'}
                        <br/>
                    <span style={stilZuto}>     render()</span> {'{'}
                        <br/>
                    <span style={stilNarandzasto}>       return </span><span style={stilZuto}>&lt;h2&gt;</span>Hello world<span
                        style={stilZuto}>&lt;/h2&gt;</span><span style={stilNarandzasto}>;</span>
                    <br/> {'}'}
                        <br/>{'}'}
                </pre>

                    <p style={stilTeksta}>Sada React aplikacija ima komponentu po imenu MojaKomponenta, koja vraća h2
                        element.</p>
                    <p style={stilTeksta}>Da bismo mogli da koristimo ovu komponentu u aplikaciji, koristimo već
                        pomenutu
                        ReactDOM funkciju:</p>

                    <pre style={stilPre}>
                ReactDOM.<span style={stilZuto}>render</span>(&lt;MojaKomponenta /&gt;,<span
                        style={stilLjubicasto}>document</span>.getElementById(<span style={stilZeleno}> "root"</span>))
                </pre>

                    <h2 className="podnaslov"><a href="#funkcionalna" style={stilPodnaslov} id="funkcionalna">Funkcionalna
                        komponenta</a></h2>

                    <p style={stilTeksta}> Ovde je isti primer kao i iznad, ali kreiran upotrebom funkcionalne komponente.
                        Funkcionalna komponenta takođe vraća HTML, i ponaša se skoro na isti način kao i klasna komponenta, međutim klasna
                        komponenta može koristiti određene dodatke. </p>

                    <div style={stilDiv}>Funkcionalna komponenta</div>
                      <pre style={stilPre}>
                        <span style={stilNarandzasto}>function </span> <span style={stilZuto}>MojaKomponenta</span>() {'{'}
                        <br/>
                        <span style={stilNarandzasto}>  return </span>(
                        <br/>
                        <span style={stilZuto}>      &lt;h2&gt;</span>Hello world<span style={stilZuto}>&lt;/h2&gt;</span>
                        <br/> )
                        <br/>
                        {'}'}
                      </pre>

                    <p style={stilTeksta}>Još jednom React aplikacija ima MojaKomponenta komponentu. Prikaz komponente se
                        izvršava na isti način kao i kod klasne komponente:</p>

                    <pre style={stilPre}>
                        ReactDOM.<span style={stilZuto}>render</span>(&lt;MojaKomponenta /&gt;,<span
                        style={stilLjubicasto}>document</span>.getElementById(<span style={stilZeleno}> "root"</span>))
                    </pre>

                    <h2 className="podnaslov"><a href="#dinamicka" style={stilPodnaslov} id="dinamicka">Dinamičke
                        komponente</a></h2>

                    <p style={stilTeksta}> Dinamičke komponente predstavljaju komponente koje će se dinamički
                        renderovati u zavisnosti od podataka koji su im prosleđeni. </p>
                    <p style={stilTeksta}> U React aplikacijama postoje parent i child komponente. Na primer kako bismo
                        komponentu B pretvorili u child komponentu komponente A, smestićemo je u render() funkciju komponente A. Na
                        taj način komponenta A postaje parent komponenta komponenti B. </p>
                    <p style={stilTeksta}> Kod ovakve strukture tok podataka ide od vrha ka dnu i to znači da sve parent
                        komponente prosleđuju podatke child komponentama. Takođe, ova struktura omogućava parent komponenti da
                        dinamički renderuje bilo koji broj child komponenti od kojih svaka ima svoje jedinstvene atribute. Prosleđivanje
                        podataka među komponentama omogućavaju parametri koji se nazivaju props.</p>

                    <h4 className="podnaslov"><a href="#props" style={{color: '#303030', textDecoration: 'none'}}
                                                 id="props">Props parametri komponenti</a></h4>

                    <p style={stilTeksta}>Kada parent komponenta renderuje child komponentu, može joj proslediti props
                        parametre. Podaci se prosleđuju tako što se na child komponentu, koja se nalazi unutar render() funkcije
                        parent komponente, postavi atribut i njegova vrednost pri čemu atribut predstavlja ime prop parametra. </p>

                    <div style={stilDiv}>Props</div>
                    <pre style={stilPre}>
                        <span style={stilNarandzasto}>function </span> <span style={stilZuto}>ChildComponent</span>(props) {'{'}
                        <br/>
                       <span style={stilNarandzasto}>  return </span>(
                       <br/>
                       <span style={stilZuto}>      &lt;h1&gt;</span>Zdravo, {'{'}props.ime{'}'}<span
                        style={stilZuto}>&lt;/h1&gt;</span>
                       <br/> )
                       <br/>
                        {'}'}
                        <br/>
                       <span style={stilNarandzasto}>function </span> <span style={stilZuto}>App</span>() {'{'}
                        <br/>
                        <span style={stilNarandzasto}>  return </span><span style={stilZuto}> &lt;ChildComponent</span> ime=<span
                        style={stilZeleno}> "Jelena"</span> <span style={stilZuto}>/&gt;</span>
                        <br/>
                        {'}'}
                        <br/>
                         ReactDOM.<span style={stilZuto}>render</span>(&lt;App /&gt;,<span
                        style={stilLjubicasto}>document</span>.getElementById(<span style={stilZeleno}> "root"</span>))
                    </pre>

                    <p style={stilTeksta}>Dakle, sledeći primer funkcioniše tako što:<br/>
                        1. Pozivamo ReactDOM.render() funkciju koja renderuje App komponentu<br/>
                        2. Zatim, React poziva ChildComponent komponentu sa props parametrom ime="Jelena"<br/>
                        3. Na kraju, komponenta App vraća izlaz:</p>

                    <img style={stilSlike} src={props} alt="" />

                    <p style={stilTeksta}>Bez obzira na to da li je komponenta deklarisana kao klasna ili funkcionalna, nikada
                        ne bi trebala da menja svoje props parametre. Pogledajte sledeći primer:</p>

                    <div style={stilDiv}>"čista" funkcija</div>
                    <pre style={stilPre}>
                          <span style={stilNarandzasto}>function </span> <span style={stilZuto}>suma</span>(a,b) {'{'}
                          <br/>
                          <span style={stilNarandzasto}>  return </span> a + b
                          <br/>
                        {'}'}
                    </pre>

                    <p style={stilTeksta}>Takve funkcije nazivamo "čistima" jer ne pokušavaju da
                        promene svoje ulaze i uvek vraćaju isti rezultat za iste ulaze.</p>

                    <p style={stilTeksta}>Suprotno tome, ova funkcija je "nečista" jer menja sopstveni ulaz:</p>

                    <div style={stilDiv}>"nečista" funkcija</div>
                         <pre style={stilPre}>
                              <span style={stilNarandzasto}>function </span> <span style={stilZuto}>suma</span>(račun,iznos) {'{'}
                              <br/>
                              <span style={stilNarandzasto}>  return </span> račun.<span style={stilLjubicasto}>total</span> -= iznos
                             <br/>
                             {'}'}
                         </pre>

                    <p style={stilTeksta}>React je prilično fleksibilan ali ima jedno strogo pravilo:</p>

                    <p style={stilTeksta}><strong>Sve komponente React-a moraju se ponašati kao "čiste" funkcije u
                        odnosu na svoje props parametre.</strong></p>

                </div>
            </div>


        )
    }
}


export default Komponenta