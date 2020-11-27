import React from 'react'
import {Link} from "react-scroll";
import logo from "../images/react-logo.png";
import lc1 from "../images/lifecycle1.png"
import lc2 from "../images/lifecycle2.png"
import lc3 from "../images/lifecycle3.png"
import lc5 from "../images/lifecycle5.png"
import lc6 from "../images/lifecycle6.png"
import lc7 from "../images/lifecycle7.png"
import lc8 from "../images/lifecycle8.png"

export default class Metode extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            otvoren1: false,
            otvoren2: false,
            otvoren3: false,
            isOpen: false
        }
        this.otvori1=this.otvori1.bind(this)
        this.otvori2=this.otvori2.bind(this)
        this.otvori3=this.otvori3.bind(this)
    }

    otvori1() {
        this.setState(prevState => {
            return {
                otvoren1: !prevState.otvoren1
            }
        })
    }

    otvori2() {
        this.setState(prevState => {
            return {
                otvoren2: !prevState.otvoren2
            }
        })
    }

    otvori3() {
        this.setState(prevState => {
            return {
                otvoren3: !prevState.otvoren3
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

        const stilPodnaslov2 = {
            color: '#303030',
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
            width: '45%',
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

        const stilPlavo = {
            color: 'CadetBlue'
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

         let montaza= this.state.otvoren1 ? <ul>
             <li><Link to='constructor1'  smooth={true} duration={1000} offset={-15}> constructor()</Link></li>
                                         <li><Link to='getDerivatedStateFromProps'  smooth={true} duration={1000} offset={-15}> getDerivatedStateFromProps()</Link></li>
             <li><Link to='render'  smooth={true} duration={1000} offset={-15}> render()</Link></li>
                                          <li><Link to='componentDidMount'  smooth={true} duration={1000} offset={-15}> componentDidMount()</Link></li>
                                          </ul> : false

         let azuriranje= this.state.otvoren2 ? <ul>
             <li><Link to='getDerivedStateFromProps2'  smooth={true} duration={1000} offset={-15}> getDerivedStateFromProps()</Link></li>
             <li><Link to='shouldComponentUpdate'  smooth={true} duration={1000} offset={-15}> shouldComponentUpdate()</Link></li>
             <li><Link to='getSnapshotBeforeUpdate/componentDidUpdate'  smooth={true} duration={1000} offset={-15}> getSnapshotBeforeUpdate/<br/>componentDidUpdate</Link></li>
         </ul> : false

        let demontaza = this.state.otvoren3 ? <ul>
            <li><Link to='componentWillUnmount'  smooth={true} duration={1000} offset={-15}> componentWillUnmount()</Link></li>
        </ul> : false

         let arrow1= this.state.otvoren1 ? <i className="arrow up"></i> : <i className="arrow down"></i>
        let arrow2= this.state.otvoren2 ? <i className="arrow up"></i> : <i className="arrow down"></i>
        let arrow3= this.state.otvoren3 ? <i className="arrow up"></i> : <i className="arrow down"></i>


        return (
            <div className="wrapper">

                <div className="sidebar">
                    <img src={logo} style={stilLogo} alt=""/> 
                    <h2 style={{color: '#383838', fontSize: 22}}>LIFECYCLE</h2>

                    <ul>
                        <li><Link to='montaza'  onClick={this.otvori1} smooth={true} duration={1000} offset={-15}> Montaža {arrow1}</Link></li>{montaza}
                        <li><Link to='azuriranje'  onClick={this.otvori2} smooth={true} duration={1000} offset={-15}> Ažuriranje {arrow2}</Link></li>{azuriranje}
                        <li><Link to='demontaza'  onClick={this.otvori3} smooth={true} duration={1000} offset={-15}> Demontaža {arrow3}</Link></li>{demontaza}
                    </ul>

                </div>

                <div className="main_content">

                    <h1 style={stilNaslov}>Lifecycle</h1>

                    <p style={stilTeksta}>Svaka komponenta u React-u ima životni ciklus (lifecycle) koji možemo pratiti
                        i manipulisati tokom njegove tri glavne faze.</p>
                    <p style={stilTeksta}> Metode React životnog ciklusa možemo smatrati nizom događaja koji se događaju od rođenja React komponente
                        do njene smrti. Svaka komponenta u React-u prolazi kroz životni ciklus događaja. Na njih možemo gledati kao
                        da prolaze kroz ciklus rađanja, rasta i smrti, odnosno tri faze su: montiranje (mounting), ažuriranje (updating) i demontaža
                        (unmounting).</p>

                    <h2 className="podnaslov" style={stilPodnaslov}><a href="#montaza" style={stilPodnaslov}
                                                                       id="montaza">Montaža</a></h2>

                    <p style={stilTeksta}>Montiranje znači postavljanje elemenata u DOM. </p>
                    <p style={stilTeksta}> React sadrži četiri ugrađene metode koje se pozivaju, ovim redosledom,
                        prilikom montiranja komponente:<br/>
                        1. constructor()<br/>
                        2. getDerivedStateFromProps()<br/>
                        3. render()<br/>
                        4. componentDidMount() </p>
                    <p style={stilTeksta}> Metoda render() je obavezna i uvek će biti pozvana, ostale su opcionalne i
                        biće pozvane ako ih definišete.</p>


                    <h4 className="podnaslov"><a href="#constructor1" style={stilPodnaslov2}
                                                 id={"constructor1"}>constructor()</a></h4>


                    <p style={stilTeksta}>Prvo što pozovemo je konstruktor komponente, ako je u pitanju klasna
                        komponenta. Ovo ne važi za
                        funkcionalne komponente. Konstruktor se poziva sa props parametrima komponente. Neophodno je
                        pozvati super() metodu i proslediti joj
                        props parametre. Zatim možemo inicijalizovati state objekat, postavljajući podrazumevane
                        vrednosti.</p>
                    <p style={stilTeksta}>U sledećem primeru definišemo state objekat boja i prikazujemo ga:</p>

                    <div style={stilDiv}>Lifecycle komponenta</div>
                    <pre style={stilPre}>
                    <span style={stilNarandzasto}>class </span>Lifecycle<span
                        style={stilNarandzasto}> extends</span> React.Component {'{'}
                        <br/>
                    <span style={stilZuto}>     consturctor</span>(props) {'{'}
                        <br/>
                    <span style={stilNarandzasto}>       super</span>(props)
                        <br/>
                        <span style={stilNarandzasto}>       this</span>.<span
                        style={stilLjubicasto}>state </span>= {'{'} <span style={stilLjubicasto}>boja </span>:<span
                        style={stilZeleno}>"crvena"</span> {"}"}
                        <br/>{'}'}
                        <br/>
                    <span style={stilZuto}>     render()</span> {'{'}
                        <br/>
                    <span style={stilNarandzasto}>       return </span>(
                        <br/>
                        <span style={stilZuto}>          &lt;h1&gt;</span>Moja omiljena boja je {'{'}<span
                        style={stilNarandzasto}>this</span>.<span style={stilLjubicasto}>state</span>.<span
                        style={stilLjubicasto}>boja</span>{'}'}<span style={stilZuto}>&lt;/h1&gt;</span>
                    <br/>    )
                        <br/>  {'}'}
                        <br/>{'}'}
                        <br/>
                        ReactDOM.<span style={stilZuto}>render</span>(&lt;Lifecycle /&gt;,<span
                        style={stilLjubicasto}>document</span>.getElementById(<span style={stilZeleno}> "root"</span>))
                </pre>


                    <h4 className="podnaslov"><a href="#getDerivatedStateFromProps" style={stilPodnaslov2}
                                                 id="getDerivatedStateFromProps">getDerivatedStateFromProps()</a></h4>

                    <p style={stilTeksta}> Prilikom montiranja, getDerivedStateFromProps() je poslednja metoda koja se
                        poziva
                        neposredno pre prikazivanja elementa u DOM-u. Pomoću nje moguće je postaviti stanje prema
                        početnim props parametrima.</p>
                    <p style={stilTeksta}> Primer u nastavku započinje sa tim da je omiljena boja “crvena”, ali metoda
                        getDerivedStateFromProps()
                        ažurira omiljenu boju na osnovu atributa novaBoja:</p>

                    <div style={stilDiv}>getDerivatedStateFromProps() metoda</div>
                    <pre style={stilPre}>
                    <span style={stilNarandzasto}>class </span>Lifecycle<span
                        style={stilNarandzasto}> extends</span> React.Component {'{'}
                        <br/>
                    <span style={stilZuto}>     consturctor</span>(props) {'{'}
                        <br/>
                    <span style={stilNarandzasto}>       super</span>(props)
                        <br/>
                        <span style={stilNarandzasto}>       this</span>.<span
                        style={stilLjubicasto}>state </span>= {'{'} <span style={stilLjubicasto}>boja </span>:<span
                        style={stilZeleno}>"crvena"</span> {"}"}
                        <br/>{'}'}
                        <br/>
                        <span style={stilNarandzasto}>     static </span><span
                        style={stilZuto}><i>getDerivedStateFromProps</i></span>(props, state) {'{'}
                        <br/>
                        <span style={stilNarandzasto}>       return </span>{'{'} <span
                        style={stilLjubicasto}>boja</span>:props.novaBoja {'}'}
                        <br/>{'}'}
                        <br/>
                    <span style={stilZuto}>     render()</span> {'{'}
                        <br/>
                    <span style={stilNarandzasto}>       return </span>(
                        <br/>
                        <span style={stilZuto}>          &lt;h1&gt;</span>Moja omiljena boja je {'{'}<span
                        style={stilNarandzasto}>this</span>.<span style={stilLjubicasto}>state</span>.<span
                        style={stilLjubicasto}>boja</span>{'}'}<span style={stilZuto}>&lt;/h1&gt;</span>
                    <br/>    )
                        <br/>  {'}'}
                        <br/>{'}'}
                        <br/>
                        ReactDOM.<span style={stilZuto}>render</span>(&lt;Lifecycle novaBoja=<span
                        style={stilZeleno}>"žuta"</span> /&gt;,<span style={stilLjubicasto}>document</span>.getElementById(<span
                        style={stilZeleno}> "root"</span>))
                </pre>

                    <p style={stilTeksta}>Izlaz nakon pozvane getDerivedStateFromProps metode:</p>
                    <img style={stilSlike} src={lc1} alt="" />


                    <h4 className="podnaslov"><a href={"render"} style={stilPodnaslov2} id={"render"}>render()</a></h4>

                    <p style={stilTeksta}>Metoda render() je obavezna i to je metoda koja zapravo izlaže HTML u DOM.</p>

                    <h4 className="podnaslov"><a href={"componentDidMount"} style={stilPodnaslov2}
                                                 id={"componentDidMount"}>componentDidMount()</a></h4>


                    <p style={stilTeksta}>Metoda componentDidMount() se poziva nakon što je komponenta prikazana</p>
                    <p style={stilTeksta}>Ovde možemo pokrenuti izraza koji zahtevaju da je komponenta već smeštena u
                        DOM.</p>
                    <p style={stilTeksta}>U primeru pozivamo metodu componentDidMount(), definišemo u milisekundama
                        vreme nakon koga ćemo pozvati setState
                        i promeniti state objekat:</p>

                    <div style={stilDiv}>componentDidMount() metoda</div>
                    <pre style={stilPre}>
                    <span style={stilNarandzasto}>class </span>Lifecycle<span
                        style={stilNarandzasto}> extends</span> React.Component {'{'}
                        <br/>
                    <span style={stilZuto}>     consturctor</span>(props) {'{'}
                        <br/>
                    <span style={stilNarandzasto}>       super</span>(props)
                        <br/>
                        <span style={stilNarandzasto}>       this</span>.<span
                        style={stilLjubicasto}>state </span>= {'{'} <span style={stilLjubicasto}>boja </span>:<span
                        style={stilZeleno}>"crvena"</span> {"}"}
                        <br/>{'}'}
                        <br/>
                        <span style={stilZuto}>   componentDidMount</span>() {'{'}
                        <br/>
                        <span style={stilZuto}>      setTimeout</span>(() ={'>'} {'{'}
                        <br/>
                        <span style={stilNarandzasto}>         this</span>.<span
                        style={stilZuto}>setState</span>({'{'}<span style={stilLjubicasto}>boja</span>: <span
                        style={stilZeleno}>"žuta"</span> {'}'})
                        <br/> {'}'}, <span style={stilPlavo}>1000</span>)
                        <br/>{'}'}
                        <br/>
                    <span style={stilZuto}>     render()</span> {'{'}
                        <br/>
                    <span style={stilNarandzasto}>       return </span>(
                        <br/>
                        <span style={stilZuto}>          &lt;h1&gt;</span>Moja omiljena boja je {'{'}<span
                        style={stilNarandzasto}>this</span>.<span style={stilLjubicasto}>state</span>.<span
                        style={stilLjubicasto}>boja</span>{'}'}<span style={stilZuto}>&lt;/h1&gt;</span>
                    <br/>    )
                        <br/>  {'}'}
                        <br/>{'}'}
                        <br/>
                        ReactDOM.<span style={stilZuto}>render</span>(&lt;Lifecycle /&gt;,<span
                        style={stilLjubicasto}>document</span>.getElementById(<span style={stilZeleno}> "root"</span>))
                </pre>

                    <p style={stilTeksta}>Izlaz pre isteka tajmera metode biće sledeći:</p>

                    <img src={lc2} style={stilSlike} alt="" />

                    <p style={stilTeksta}>Izlaz nakon jedne sekunde koju smo definisali unutar componentDidMount()
                        metode:</p>

                    <img src={lc1} style={stilSlike} alt="" />

                    <h2 className={"podnaslov"} style={stilPodnaslov}><a href={"azuriranje"} style={stilPodnaslov}
                                                                         id={"azuriranje"}>Ažuriranje</a></h2>

                    <p style={stilTeksta}>Sledeća faza životnog ciklusa je kada se komponenta ažurira.</p>
                    <p style={stilTeksta}>Komponenta se ažurira kad god se promeni njeno stanje ili props parametri.</p>
                    <p style={stilTeksta}>React ima pet ugrađenih metoda koje se pozivaju, ovim redosledom, kada se
                        komponenta ažurira:<br/>
                        1. getDerivedStateFromProps()<br/>
                        2. shouldComponentUpdate()<br/>
                        3. render()<br/>
                        4. getSnapshotBeforeUpdate()<br/>
                        5. componentDidUpdate()
                    </p>

                    <h4 className={"podnaslov"}><a href={"getDerivedStateFromProps2"} style={stilPodnaslov2}
                                                   id={"getDerivedStateFromProps2"}>getDerivedStateFromProps()</a></h4>

                    <p style={stilTeksta}>Metoda getDerivedStateFromProps() se takođe poziva prilikom ažuriranja. Ovo je
                        prva metoda koja se poziva kada se komponenta ažurira.</p>
                    <p style={stilTeksta}>Primer u nastavku ima dugme koje omiljenu boju menja u plavu, ali pošto je
                        pozvana metoda getDerivedStateFromProps() koja ažurira stanje
                        bojom iz atributa novaBoja, omiljena boja se i dalje prikazuje kao žuta:</p>

                    <div style={stilDiv}>getDerivatedStateFromProps() metoda</div>
                    <pre style={stilPre}>
                    <span style={stilNarandzasto}>class </span>Lifecycle<span
                        style={stilNarandzasto}> extends</span> React.Component {'{'}
                        <br/>
                    <span style={stilZuto}>     consturctor</span>(props) {'{'}
                        <br/>
                    <span style={stilNarandzasto}>       super</span>(props)
                        <br/>
                        <span style={stilNarandzasto}>       this</span>.<span
                        style={stilLjubicasto}>state </span>= {'{'} <span style={stilLjubicasto}>boja </span>:<span
                        style={stilZeleno}>"crvena"</span> {"}"}
                        <br/>{'}'}
                        <br/>
                        <span style={stilNarandzasto}>     static </span><span
                        style={stilZuto}><i>getDerivedStateFromProps</i></span>(props, state) {'{'}
                        <br/>
                        <span style={stilNarandzasto}>       return </span>{'{'} <span
                        style={stilLjubicasto}>boja</span>:props.novaBoja {'}'}
                        <br/>{'}'}
                        <br/>
                        <span style={stilZuto}>   promeniBoju </span>= () ={'>'} {'{'}
                        <br/>
                         <span style={stilNarandzasto}>         this</span>.<span style={stilZuto}>setState</span>({'{'}<span
                        style={stilLjubicasto}>boja</span>: <span style={stilZeleno}>"plava"</span> {'}'})
                        <br/>{'}'}
                        <br/>
                    <span style={stilZuto}>     render()</span> {'{'}
                        <br/>
                    <span style={stilNarandzasto}>       return </span>(
                        <br/>
                        <span style={stilZuto}>         &lt;div&gt;</span>
                        <br/>
                        <span style={stilZuto}>             &lt;h1&gt;</span>Moja omiljena boja je {'{'}<span
                        style={stilNarandzasto}>this</span>.<span style={stilLjubicasto}>state</span>.<span
                        style={stilLjubicasto}>boja</span>{'}'}<span style={stilZuto}>&lt;/h1&gt;</span>
                        <br/>
                        <span style={stilZuto}>             &lt;button</span> onClick={'{'}<span
                        style={stilNarandzasto}>this</span>.<span style={stilZuto}>promeniBoju</span>{'}'}<span
                        style={stilZuto}>&gt;</span>Promeni boju<span style={stilZuto}>&lt;/button&gt;</span>
                        <br/>    )
                        <br/>  {'}'}
                        <br/>{'}'}
                        <br/>
                        ReactDOM.<span style={stilZuto}>render</span>(&lt;Lifecycle novaBoja=<span
                        style={stilZeleno}>"žuta"</span> /&gt;,<span style={stilLjubicasto}>document</span>.getElementById(<span
                        style={stilZeleno}> "root"</span>))
                </pre>

                    <p style={stilTeksta}> Izlaz komponente Lifecycle: </p>

                    <img src={lc3} style={stilSlike} alt="" />

                    <p style={stilTeksta}>Ukoliko kliknemo na dugme “Promeni boju” ništa se neće dogoditi jer je pozvana
                        metoda getDerivatedStateFromProps()
                        koja je izvršila ažuriranje state objekta.</p>

                    <h4 className={"podnaslov"}><a href={"shouldComponentUpdate"} style={stilPodnaslov2}
                                                   id={"shouldComponentUpdate"}>shouldComponentUpdate()</a></h4>

                    <p style={stilTeksta}>U metodu shouldComponentUpdate() možete vratiti isključivo logičku vrednost
                        koja određuje da li React treba da nastavi sa
                        prikazivanjem ili ne.</p>
                    <p style={stilTeksta}>Podrazumevana vrednost je “True”.</p>
                    <p style={stilTeksta}>Primer u nastavku pokazuje šta se dešava kada metoda shouldComponentUpdate()
                        vrati “False”:</p>

                    <div style={stilDiv}>shouldComponentUpdate() metoda</div>
                    <pre style={stilPre}>
                    <span style={stilNarandzasto}>class </span>Lifecycle<span
                        style={stilNarandzasto}> extends</span> React.Component {'{'}
                        <br/>
                    <span style={stilZuto}>     consturctor</span>(props) {'{'}
                        <br/>
                    <span style={stilNarandzasto}>       super</span>(props)
                        <br/>
                        <span style={stilNarandzasto}>       this</span>.<span
                        style={stilLjubicasto}>state </span>= {'{'} <span style={stilLjubicasto}>boja </span>:<span
                        style={stilZeleno}>"crvena"</span> {"}"}
                        <br/>{'}'}
                        <br/>
                        <span style={stilZuto}>    shouldComponentUpdate</span>() {'{'}
                        <br/>
                        <span style={stilNarandzasto}>       return true</span>
                        <br/>{'}'}
                        <br/>
                        <span style={stilZuto}>    promeniBoju </span>= () ={">"} {'{'}
                        <br/>
                         <span style={stilNarandzasto}>         this</span>.<span style={stilZuto}>setState</span>({'{'}<span
                        style={stilLjubicasto}>boja</span>: <span style={stilZeleno}>"plava"</span> {'}'})
                        <br/>{'}'}
                        <br/>
                    <span style={stilZuto}>     render()</span> {'{'}
                        <br/>
                    <span style={stilNarandzasto}>       return </span>(
                        <br/>
                        <span style={stilZuto}>         &lt;div&gt;</span>
                        <br/>
                        <span style={stilZuto}>             &lt;h1&gt;</span>Moja omiljena boja je {'{'}<span
                        style={stilNarandzasto}>this</span>.<span style={stilLjubicasto}>state</span>.<span
                        style={stilLjubicasto}>boja</span>{'}'}<span style={stilZuto}>&lt;/h1&gt;</span>
                        <br/>
                        <span style={stilZuto}>             &lt;button</span> onClick={'{'}<span
                        style={stilNarandzasto}>this</span>.<span style={stilZuto}>promeniBoju</span>{'}'}<span
                        style={stilZuto}>&gt;</span>Promeni boju<span style={stilZuto}>&lt;/button&gt;</span>
                        <br/>    )
                        <br/>  {'}'}
                        <br/>{'}'}
                        <br/>
                        ReactDOM.<span style={stilZuto}>render</span>(&lt;Lifecycle /&gt;,<span
                        style={stilLjubicasto}>document</span>.getElementById(<span style={stilZeleno}> "root"</span>))
                </pre>

                    <p style={stilTeksta}>Kada kliknemo na dugme “Promeni boju” ništa se neće dogodite jer smo u okviru
                        metode
                        shouldComponentUpdate definisali da ne želimo da se komponenta ažurira.</p>

                    <h4 className={"podnaslov"}><a href={"getSnapshotBeforeUpdate/componentDidUpdate"}
                                                   style={stilPodnaslov2}
                                                   id={"getSnapshotBeforeUpdate/componentDidUpdate"}>getSnapshotBeforeUpdate()
                        / componentDidUpdate()</a></h4>

                    <p style={stilTeksta}>U metodi getSnapshotBeforeUpdate() imamo pristup props parametrima i objektu
                        stanja pre ažuriranja,
                        što znači da čak i nakon ažuriranja možete proveriti koje su vrednosti bile pre ažuriranja. </p>
                    <p style={stilTeksta}>Ako je prisutna metoda getSnapshotBeforeUpdate(), trebalo bi da ukljčimo i
                        metodu componentDidUpdate(),
                        u suprotnom ćemo dobiti grešku.</p>
                    <p style={stilTeksta}>U primeru se dešava sledeće:<br/>
                        1. Kada se komonenta montira, ona prikazuje omiljenom bojom crvenu.<br/>
                        2. Kada je komponenta montirana, tajmer menja stanje i nakon jedne sekunde omiljena boja postaje
                        “žuta”.<br/>
                        3. Ova akcija pokreće fazu ažuriranja, a budući da ova komponenta ima metodu
                        getSnapshotBeforeUpdate(), ova metoda se
                        izvršava i upisuje poruku u prazan element div1.<br/>
                        4. Tada se izvršava metoda componentDidUpdate() i upisuje poruku u prazan div2 element
                    </p>

                    <div style={stilDiv}>getSnapshotBeforeUpdate() i componentDidUpdate() metode</div>
                    <pre style={stilPre}>
                    <span style={stilNarandzasto}>class </span>Lifecycle<span
                        style={stilNarandzasto}> extends</span> React.Component {'{'}
                        <br/>
                    <span style={stilZuto}>     consturctor</span>(props) {'{'}
                        <br/>
                    <span style={stilNarandzasto}>       super</span>(props)
                        <br/>
                        <span style={stilNarandzasto}>       this</span>.<span
                        style={stilLjubicasto}>state </span>= {'{'} <span style={stilLjubicasto}>boja </span>:<span
                        style={stilZeleno}>"crvena"</span> {"}"}
                        <br/>{'}'}
                        <br/>
                        <span style={stilZuto}>   componentDidMount</span>() {'{'}
                        <br/>
                        <span style={stilZuto}>      setTimeout</span>(() ={'>'} {'{'}
                        <br/>
                        <span style={stilNarandzasto}>         this</span>.<span
                        style={stilZuto}>setState</span>({'{'}<span style={stilLjubicasto}>boja</span>: <span
                        style={stilZeleno}>"žuta"</span> {'}'})
                        <br/> {'}'}, <span style={stilPlavo}>1000</span>)
                        <br/>{'}'}
                        <br/>

                        <span style={stilZuto}>   getSnapshotBeforeUpdate</span>(prevProps, prevState){'{'}
                        <br/>
                        <span style={stilLjubicasto}>      document</span>.<span style={stilZuto}>getElementById</span>(<span
                        style={stilZeleno}>"div1"</span>.<span style={stilLjubicasto}>innerHTML</span> =
                        <br/>
                        <span style={stilZeleno}>      "Pre ažuriranja omiljena boja je bila"</span> + prevState.<span
                        style={stilLjubicasto}>boja</span>
                        <br/>{'}'}
                        <br/>
                        <span style={stilZuto}>   componentDidUpdate</span>(){'{'}
                        <br/>
                        <span style={stilLjubicasto}>      document</span>.<span style={stilZuto}>getElementById</span>(<span
                        style={stilZeleno}>"div2"</span>.<span style={stilLjubicasto}>innerHTML</span> =
                        <br/>
                        <span style={stilZeleno}>      "Ažurirana omiljena boja je"</span> + <span
                        style={stilNarandzasto}>this</span>.<span style={stilLjubicasto}>state</span>.<span
                        style={stilLjubicasto}>boja</span>
                        <br/> {'}'}
                        <br/>{'}'}
                        <br/>
                        <span style={stilZuto}>     render()</span> {'{'}
                        <br/>
                    <span style={stilNarandzasto}>       return </span>(
                        <br/>
                        <span style={stilZuto}>         &lt;div&gt;</span>
                        <br/>
                        <span style={stilZuto}>             &lt;h1&gt;</span>Moja omiljena boja je {'{'}<span
                        style={stilNarandzasto}>this</span>.<span style={stilLjubicasto}>state</span>.<span
                        style={stilLjubicasto}>boja</span>{'}'}<span style={stilZuto}>&lt;/h1&gt;</span>
                        <br/>
                        <span style={stilZuto}>             &lt;div</span> id=<span
                        style={stilZeleno}>"div1"</span><span style={stilZuto}>&gt;</span><span
                        style={stilZuto}>&lt;/div&gt;</span>
                        <br/>
                        <span style={stilZuto}>             &lt;div</span> id=<span
                        style={stilZeleno}>"div2"</span><span style={stilZuto}>&gt;</span><span
                        style={stilZuto}>&lt;/div&gt;</span>
                        <br/>
                         <span style={stilZuto}>         &lt;/div&gt;</span>
                        <br/>    )
                        <br/>  {'}'}
                        <br/>{'}'}
                        <br/>
                        ReactDOM.<span style={stilZuto}>render</span>(&lt;Lifecycle /&gt;,<span
                        style={stilLjubicasto}>document</span>.getElementById(<span style={stilZeleno}> "root"</span>))
                    </pre>

                    <p style={stilTeksta}>Izlaz komponente pre isteka tajmera: </p>

                    <img style={stilSlike} src={lc2} alt="" />

                    <p style={stilTeksta}>Izlaz komponente nakon ažuriranja:</p>

                    <img style={stilSlike} src={lc5} alt="" /> 

                    <p style={stilTeksta}>Metoda componentDidUpdate poziva se nakon što se komponenta ažurira u DOM-u.
                        Za ovu metodu nije neophodno da bude kombinovana sa metodom getSnapshotBeforeUpdate(), kao što
                        je u obrnutoj situaciji slučaj.</p>

                    <h2 className={"podnaslov"}><a href={"demontaza"} style={stilPodnaslov}
                                                   id={"demontaza"}>Demontaža</a></h2>

                    <p style={stilTeksta}>Sledeća faza u životnom ciklusu je kadase komponenta ukloni iz DOM-a odnosno
                        demontira se.</p>
                    <p style={stilTeksta}>React ima samo jednu ugrađenu metodu koja se poziva kada se komponenta
                        demontira:<br/>
                        1. componentWillUnmount()
                    </p>

                    <h4 className={"podnaslov"}><a href={"componentWillUnmount"} style={stilPodnaslov2}
                                                   id={"componentWillUnmount"}>componentWillUnmount()</a></h4>

                    <p style={stilTeksta}>Metoda componentWillUnmount poziva se kada će komponenta biti uklonjena iz
                        DOM-a:</p>

                    <div style={stilDiv}>componentWillUnmount() metoda</div>
                    <pre style={stilPre}>
                    <span style={stilNarandzasto}>class </span>Lifecycle<span
                        style={stilNarandzasto}> extends</span> React.Component {'{'}
                        <br/>
                    <span style={stilZuto}>     consturctor</span>(props) {'{'}
                        <br/>
                    <span style={stilNarandzasto}>       super</span>(props)
                        <br/>
                        <span style={stilNarandzasto}>       this</span>.<span
                        style={stilLjubicasto}>state </span>= {'{'} <span style={stilLjubicasto}>prikaz</span>:<span
                        style={stilNarandzasto}>true</span> {"}"}
                        <br/>{'}'}
                        <br/>
                        <span style={stilZuto}>    ukloniTekst </span>= () ={'>'} {'{'}
                        <br/>
                         <span style={stilNarandzasto}>         this</span>.<span style={stilZuto}>setState</span>({'{'}<span
                        style={stilLjubicasto}>prikaz</span>: <span style={stilNarandzasto}>false</span> {'}'})
                        <br/>{'}'}
                        <br/>
                        <span style={stilZuto}>    render()</span> {'{'}
                        <br/>
                        <span style={stilNarandzasto}>         let</span> tekst
                        <br/>
                        <span style={stilNarandzasto}>         if</span>(<span style={stilNarandzasto}>this</span>.<span
                        style={stilLjubicasto}>state</span>.<span style={stilLjubicasto}>prikaz</span>) {'{'}
                        <br/>         tekst = &lt;Child /&gt;
                        <br/>
                        <span style={stilNarandzasto}>       return </span>(
                        <br/>
                        <span style={stilZuto}>         &lt;div&gt;</span>
                        <br/>
                        <span style={stilZuto}>             &lt;h1&gt;</span>{'{'}tekst{'}'}<span
                        style={stilZuto}>&lt;/h1&gt;</span>
                        <br/>
                        <span style={stilZuto}>             &lt;button</span> onClick={'{'}<span
                        style={stilNarandzasto}>this</span>.<span style={stilZuto}>ukloniTekst</span>{'}'}<span
                        style={stilZuto}>&gt;</span>Ukloni<span style={stilZuto}>&lt;/button&gt;</span>
                        <br/>
                        <span style={stilZuto}>         &lt;/div&gt;</span>
                        <br/>    )
                        <br/> {'}'}
                        <br/>{'}'}
                        <br/>
                        <span style={stilNarandzasto}>class </span>Child<span
                        style={stilNarandzasto}> extends</span> React.Component {'{'}
                        <br/>
                        <span style={stilZuto}>   componentWillMount</span>() {'{'}
                        <br/>
                        <span style={stilZuto}>      alert</span>(<span
                        style={stilZeleno}>"Tekst će biti uklonjen."</span>)
                        <br/>{'}'}
                        <br/>
                        <span style={stilZuto}>   render</span>() {'{'}
                        <br/>
                        <span style={stilNarandzasto}>      return</span> (
                        <br/>
                        <span style={stilZuto}>         &lt;h1&gt;</span>Moja omiljena boja je crvena<span
                        style={stilZuto}>&lt;/h1&gt;</span>
                        <br/>    )
                        <br/>  {'}'}
                        <br/>{'}'}
                        <br/>
                        ReactDOM.<span style={stilZuto}>render</span>(&lt;Lifecycle /&gt;,<span
                        style={stilLjubicasto}>document</span>.getElementById(<span style={stilZeleno}> "root"</span>))
                    </pre>

                    <p style={stilTeksta}>U nastavku pogledajte izlaz navedenog primera:</p>

                    <p style={stilTeksta}>Izlaz Lifecycle komponente:</p>
                    <img src={lc7} style={stilSlike} alt="" />

                    <p style={stilTeksta}>Alert koji se pojavljuje nakon pritiska na dugme "Ukloni":</p>
                    <img src={lc6} style={stilSlike} alt="" />

                    <p style={stilTeksta}>Izlaz nakon klika na ok dugme na alert prozoru:</p>
                    <img src={lc8} style={stilSlike} alt="" /> 

                </div>
            </div>


        )
    }
}

