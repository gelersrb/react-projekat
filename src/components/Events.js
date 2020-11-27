import React from "react"
import logo from "../images/react-logo.png";
import {Link} from "react-scroll";
import event1 from "../images/events1.png"
import event2 from "../images/events2.png"

export default function Events() {
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

    const stilSlike = {
        width: '50%',
        marginLeft: 80,
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
                <img src={logo} style={stilLogo} alt="" />
                <h2 style={{color: '#383838', fontSize: 22}}>DOGAĐAJI</h2>
                <ul>
                    <li><Link to='rukovanjeDogadjajima' smooth={true} duration={1000} offset={-15}>Rukovanje događajima</Link></li>
                    <li><Link to='prosledjivanjeArgumenata' smooth={true} duration={1000} offset={-15}>Prosleđivanje argumenata događajima</Link></li>

                </ul>

            </div>

            <div className="main_content">

                <h1 style={stilNaslov}>React događaji</h1>

                <p style={stilTeksta}> Rukovanje događajima sa React elementima je vrlo slično rukovanju
                    događajima na DOM elementima. Postoje neke razlike u sintaksi:</p>

                <p style={stilTeksta}>•	React događaji se imenuju pomoću camelCase-a, a ne malim slovima,<br/>
                    •	Sa JSX-om prenosite funkciju kao obrađivač događaja, a ne kao niz.
                </p>

                <p style={stilTeksta}>Dakle, u React-u to izgleda ovako:</p>

                <div style={stilDiv}>React sintaksa</div>
                <pre style={stilPre} >
                    <span style={stilZuto}>&lt;button</span> onClick={'{'}<span style={stilLjubicasto}>klik</span>{'}'}&gt;<span style={stilZuto}>&gt;</span>Klikni<span style={stilZuto}>&lt;/button&gt;</span>
                </pre>

                <p style={stilTeksta}>Dok u HTML-u pišemo kod na ovaj način:</p>

                <div style={stilDiv}>HTML sintaksa</div>
                <pre style={stilPre} >
                    <span style={stilZuto}>&lt;button</span> onclick="<span style={stilLjubicasto}>klik</span>()"&gt;<span style={stilZuto}>&gt;</span>Klikni<span style={stilZuto}>&lt;/button&gt;</span>
                </pre>

                <h2 className={"podnaslov"}><a href={"#rukovanjeDogadjajima"} style={stilPodnaslov} id={"rukovanjeDogadjajima"}>Rukovanje događajima</a></h2>

                <p style={stilTeksta}>Klikni komponenta renderuje dugme na koje klikom možemo promeniti tekst:</p>

                <div style={stilDiv}>bind() metoda </div>
                <pre style={stilPre} >
                    <span style={stilNarandzasto}>class </span>Klikni <span style={stilNarandzasto}>extends </span>React.Component {'{'}
                    <br/>
                    <span style={stilZuto}>  constructor</span>(props) {'{'}
                    <br/>
                            <span style={stilNarandzasto}>      super</span>(props)
                    <br/>
                            <span style={stilNarandzasto}>      this</span>.<span style={stilLjubicasto}>state</span> = {'{'}
                    <span style={stilLjubicasto}>klik: </span><span style={stilNarandzasto}>false</span>{'}'}
                    <br/>
                    <span style={stilNarandzasto}>      this</span>.<span style={stilZuto}>handleClick</span>=<span style={stilNarandzasto}>this</span>.<span style={stilZuto}>handleClick</span>.<span style={stilZuto}>bind</span>(<span style={stilNarandzasto}>this</span>)
                    <br/>{'}'}
                    <br/>
                    <span style={stilZuto}>   handleClick</span>() {'{'}
                    <br/>
                    <span style={stilNarandzasto}>      this</span>.setState(state ={'>'} ({'{'}<br/>
                    <span style={stilLjubicasto}>         klik</span>:!state.<span style={stilLjubicasto}>klik</span> {'}'}
                    )
                    <br/>  ) <br/>
                    {'}'}
                    <br/>
                    <span style={stilZuto}>  render</span>() {'{'}
                    <br/>
                             <span style={stilNarandzasto}>      return </span>(
                    <br/>
                    <span style={stilZuto}>         &lt;button</span> onClick={'{'}<span style={stilNarandzasto}>this</span>.<span style={stilZuto}>handleClick</span>{'}'}&gt;
                    <br/>         {'{'}<span style={stilNarandzasto}>this</span>.<span style={stilLjubicasto}>state</span>.<span style={stilLjubicasto}>klik</span> ? <span style={stilZeleno}>"off"</span> : <span style={stilZeleno}>"on"</span> {'}'}
                    <br/>
                    <span style={stilZuto}>         &lt;/button&gt;</span>
                    <br/>   )
                    <br/> {'}'}
                    <br/>{'}'}
                </pre>

                <p style={stilTeksta}>Moramo biti oprezni kada su u pitanju <strong>this</strong> značenja
                    u JSX povratnim pozivima. U JavaScript-u metode klase nisu podrazumevano povezane. U slučaju
                    da ne povežemo this.handleClick i prosledimo ga na onClick, <strong>this</strong> će biti <strong>undefined</strong> odnosno nedefinisan kada se funckija pozove.</p>

                <p style={stilTeksta}>Ovo nije specifično React ponašanje, već način na koji funkcije funkcionišu u JavaScript-u. Generalno, ako se pozovemo na metod bez () nakon
                    njega, kao što je onClick={'{'}this.handleClick{'}'}, trebalo bi da taj metod povežemo (bind).</p>

                <p style={stilTeksta}>Bind metodu nije neophodno korisititi ukoliko koristimo arrow funkcije.
                    Sa arrow funckijama, this će uvek predstavljati objekat koji je definisala arrow funkcija:</p>

                <div style={stilDiv}>arrow funkcija</div>
                <pre style={stilPre} >
                    <span style={stilNarandzasto}>class </span>Klikni <span style={stilNarandzasto}>extends </span>React.Component {'{'}
                    <br/>
                    <span style={stilZuto}>  constructor</span>(props) {'{'}
                    <br/>
                            <span style={stilNarandzasto}>      super</span>(props)
                    <br/>
                            <span style={stilNarandzasto}>      this</span>.<span style={stilLjubicasto}>state</span> = {'{'}
                    <span style={stilLjubicasto}>klik: </span><span style={stilNarandzasto}>false</span>{'}'}
                    <br/>{'}'}
                    <br/>
                    <span style={stilZuto}>   handleClick</span> = () ={'>'} {'{'}
                    <br/>
                    <span style={stilNarandzasto}>      this</span>.setState(state ={'>'} ({'{'}<br/>
                    <span style={stilLjubicasto}>         klik</span>:!state.<span style={stilLjubicasto}>klik</span> {'}'}
                    )
                    <br/>  ) <br/>
                    {'}'}
                    <br/>
                    <span style={stilZuto}>  render</span>() {'{'}
                    <br/>
                             <span style={stilNarandzasto}>      return </span>(
                    <br/>
                    <span style={stilZuto}>         &lt;button</span> onClick={'{'}<span style={stilNarandzasto}>this</span>.<span style={stilZuto}>handleClick</span>{'}'}&gt;
                    <br/>         {'{'}<span style={stilNarandzasto}>this</span>.<span style={stilLjubicasto}>state</span>.<span style={stilLjubicasto}>klik</span> ? <span style={stilZeleno}>"off"</span> : <span style={stilZeleno}>"on"</span> {'}'}
                    <br/>
                    <span style={stilZuto}>         &lt;/button&gt;</span>
                    <br/>   )
                    <br/> )
                    <br/>{'}'}
                </pre>

                <p style={stilTeksta}>Dakle, bez obzira na to koji od ova dva načina smo odabrali,
                    izlaz će biti sledeći:</p>

                <img src={event1} style={stilSlike} alt="" />

                <p style={stilTeksta}>Kada kliknemo na dugme “on” dobijamo izlaz:</p>

                <img src={event2} style={stilSlike} alt="" />

                <h2 className={"podnaslov"}><a href={"#prosledjivanjeArgumenata"} style={stilPodnaslov} id={"prosledjivanjeArgumenata"}>Prosleđivanje argumenata događajima</a></h2>

                <p style={stilTeksta}>Unutar petlje uobičajeno je da se prosleđuje dodatni parametar obrađivaču događaja.
                    Na primer, ako je id id reda bilo šta od sledećeg bi funkcionisalo:</p>

                <pre style={stilPre} >
                    <span style={stilZuto}>&lt;button</span> onClick={'{'}(e) ={'>'} <span style={stilNarandzasto}>this</span>.<span style={stilZuto}>obrisiRed</span>(id, e){'}'}<span style={stilZuto}>&gt;</span>Obriši red<span style={stilZuto}>&lt;/button&gt;</span>
                </pre>

                <pre style={stilPre} >
                    <span style={stilZuto}>&lt;button</span> onClick={'{'}<span style={stilNarandzasto}>this</span>.<span style={stilZuto}>obrisiRed</span>.<span style={stilZuto}>bind</span>(<span style={stilNarandzasto}>this</span>, id){'}'}<span style={stilZuto}>&gt;</span>Obriši red<span style={stilZuto}>&lt;/button&gt;</span>
                </pre>

                <p style={stilTeksta}>Ova dva primera daju iste rezultate. Prvi primer koristi arrow
                    funkciju dok drugi funkcioniše uz pomoć bind metode.</p>

                <p style={stilTeksta}> U oba slučaja, argument “e” koji predstavlja React događaj biće prosleđen
                    kao drugi argument nakon id-a. Unutar arrow funkcije moramo ga proslediti eksplicitno, dok se sa
                    bind metodom svi argumenti automatski prosleđuju. Kada bismo izostavili bind metodu funkcija obrisiRed
                    bi se izvršila kada se stranica učita umesto čekajući da se klikne na dugme.</p>
            </div>
        </div>


    )
}

