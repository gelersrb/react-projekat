import React from "react";
import logo from "../images/react-logo.png";
import forma1 from "../images/forme1.png"
import forma2 from "../images/forme2.png"
import forma3 from "../images/forme3.png"
import forma4 from "../images/forme4.png"
import forma5 from "../images/forme5.png"
import forma6 from "../images/forme6.png"
import forma7 from "../images/forme7.png"
import forma8 from "../images/forme8.png"
import forma9 from "../images/forme9.png"
import {Link} from 'react-scroll'


class Forme extends React.Component {


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


        return (


            <div className="wrapper">

                <div className="sidebar">
                    <img src={logo} style={stilLogo} alt="" />
                    <h2 style={{color: '#383838', fontSize: 22}}>FORME</h2>
                    <ul>
                        <li><Link to='kontrolisaneKomponente' smooth={true} duration={1000} offset={-15}>Kontrolisane komponente</Link></li>
                        <li><Link to='textareaTag' smooth={true} duration={1000} offset={-15}>Textarea tag</Link></li>
                        <li><Link to='selectTag' smooth={true} duration={1000} offset={-15}>Select tag</Link></li>
                        <li><Link to='rukovanjeSaViseUlaza' smooth={true} duration={1000} offset={-15}>Rukovanje sa više ulaza</Link></li>

                    </ul>

                </div>

                <div className="main_content">

                    <h1 style={stilNaslov}>Forme</h1>

                    <p style={stilTeksta}>Rukovanje formama odnosno obrascima odnosi se na način na koji obrađujemo
                        podatke kada promene vrednost ili se pošalju. U HTML formama podatke obično obrađuje DOM, dok u
                        React-u podatke forme obično obrađuju komponente. Kada komponenta obrađuje podatke, svi podaci
                        se čuvaju u state objektu komponente.</p>

                    <p style={stilTeksta}>Dakle, elementi HTML formi rade malo drugačije od ostalih DOM elemenata u React-u, jer elementi forme prirodno zadržavaju neko unutrašnje stanje. Na primer, ova forma u običnom HTML-u prihvata jedno ime:</p>

                    <div style={stilDiv}>Forma u HTML-u</div>
                    <pre style={stilPre}>
                    <span style={stilZuto}>&lt;form&gt;</span>
                        <br/>
                        <span  style={stilZuto}>   &lt;label&gt;</span> Ime: <span style={stilZuto}>&lt;input </span>type=<span style={stilZeleno}>"text"</span> name=<span style={stilZeleno}>"ime"</span> <span style={stilZuto}>/&gt; &lt;/label&gt;</span>
                        <br/>
                        <span style={stilZuto}>   &lt;input</span> type=<span style={stilZeleno}>"submit"</span> value=<span style={stilZeleno}>"Pošalji"</span> <span style={stilZuto}>/&gt;</span>
                        <br/>
                        <span style={stilZuto}>&lt;form&gt;</span>
                </pre>

                    <p style={stilTeksta}>Ova forma ima podrazumevano ponašanje HTML forme prilikom pregledavanja nove stranice kada korisnik pošalje formu. Ako želimo ovo ponašanje u React-u, to funkcioniše. Ali u većini slučajeva je pogodno imati JavaScript funkciju koja obrađuje predaju forme i ima pristup podacima koje je korisnik uneo u obrazac. Standardni način da se to postigne je tehnika koja se naziva “kontrolisane komponente”.</p>

                    <h2 className="podnaslov" style={stilPodnaslov}><a href="#kontrolisaneKomponente" style={stilPodnaslov}
                                                                       id="kontrolisaneKomponente">Kontrolisane komponente</a></h2>

                    <p style={stilTeksta}>U HTML-u, elementi forme kao što su &lt;input&gt;, &lt;textarea&gt; i &lt;select&gt; obično održavaju sopstveno stanje i ažuriraju ga na osnovu korisničkog unosa. U React-u se promenljivo stanje obično zadržava u svojstvu stanja komponenata i ažurira samo pomoću setState() metoda.</p>

                    <p style={stilTeksta}>Možemo kombinovati ta dva čineći da React state bude jedini izvor istine. Tada React komponenta koja prikazuje formu takođe kontroliše šta se dešava u formi na sledeći unos korsinika. Element forme input čija je vrednost kontrolisana na ovaj način naziva se kontrolisana komponenta.</p>

                    <p style={stilTeksta}>Na primer, ako želimo da u prethodnom primeru zapišemo ime kada se forma pošalje, možemo napisati formu kao kontrolisanu komponentu:</p>


                    <div style={stilDiv}>Kontrolisana komponenta</div>
                    <pre style={stilPre}>
                    <span style={stilNarandzasto}>class </span>Forma<span style={stilNarandzasto}> extends</span> React.Component {'{'}
                        <br/>
                        <span style={stilZuto}>  constructor</span>(props) {'{'}
                        <br/>
                            <span style={stilNarandzasto}>      super</span>(props)
                    <br/>
                            <span style={stilNarandzasto}>      this</span>.<span style={stilLjubicasto}>state</span> = {'{'}
                        <span style={stilLjubicasto}>ime: </span><span style={stilZeleno}>''</span>{'}'}
                        <br/>
                    <span style={stilNarandzasto}>      this</span>.<span style={stilZuto}>handleChange</span>=<span style={stilNarandzasto}>this</span>.<span style={stilZuto}>handleChange</span>.<span style={stilZuto}>bind</span>(<span style={stilNarandzasto}>this</span>)
                    <br/>
                    <span style={stilNarandzasto}>      this</span>.<span style={stilZuto}>handleSubmit</span>=<span style={stilNarandzasto}>this</span>.<span style={stilZuto}>handleSubmit</span>.<span style={stilZuto}>bind</span>(<span style={stilNarandzasto}>this</span>)
                        <br/>{'}'}
                        <br/>
                    <span style={stilZuto}>   handleChange</span>(event) {'{'}
                        <br/>
                    <span style={stilNarandzasto}>      this</span>.setState({'{'}
                    <span style={stilLjubicasto}>ime</span>:event.<span style={stilLjubicasto}>target</span>.<span style={stilLjubicasto}>value</span>{'}'})
                    <br/>{'}'}
                    <br/>
                    <span style={stilZuto}>   handleSubmit</span>(event) {'{'}
                        <br/>
                        <span style={stilZuto}>      alert</span>(<span style={stilZeleno}>'Ime je poslato: '</span> + <span style={stilNarandzasto}>this</span>.<span style={stilLjubicasto}>state</span>.<span style={stilLjubicasto}>ime</span>)
                        <br/>   event.<span style={stilZuto}>preventDefault</span>()
                        <br/>{'}'}
                        <br/>
                    <span style={stilZuto}>     render()</span> {'{'}
                        <br/>
                    <span style={stilNarandzasto}>       return </span>(
                        <br/>
                        <span style={stilZuto}>         &lt;form</span> onSubmit={'{'}<span style={stilNarandzasto}>this</span>.<span style={stilZuto}>handleSubmit</span>{'}'}<span style={stilZuto}>&gt;</span>
                        <br/>
                        <span style={stilZuto}>           &lt;label&gt;</span>Ime:
                        <br/>
                        <span style={stilZuto}>             &lt;input</span> type=<span style={stilZeleno}>"text"</span> value={'{'}<span style={stilNarandzasto}>this</span>.<span style={stilLjubicasto}>state</span>.<span style={stilLjubicasto}>ime</span>{'}'} onChange={'{'}<span style={stilNarandzasto}>this</span>.<span style={stilZuto}>handleChange</span>{'}'}<span style={stilZuto}> /&gt;</span>
                        <br/>
                        <span style={stilZuto}>           &lt;/label&gt;</span>
                        <br/>
                        <span style={stilZuto}>           &lt;input</span> type=<span style={stilZeleno}>"submit"</span> value=<span style={stilZeleno}>"Pošalji"</span><span style={stilZuto}>/&gt;</span>
                        <br/>
                        <span style={stilZuto}>         &lt;/form&gt;</span>
                        <br/>   )
                    <br/> {'}'}
                        <br/>{'}'}
                </pre>

                    <p style={stilTeksta}>Budući da je atribut value postavljen na element forme, prikazana vrednost će uvek biti this.state.ime, čineći da React state bude izvor istine. </p>
                    <p style={stilTeksta}>Budući da handleChange radi na svakom pritisku tastera da bi ažurirao React state, prikazana vrednost će se ažurirati kako korisnici unose.</p>
                    <p style={stilTeksta}>Sa kontrolisanom komponentom, vrednost input elementa uvek pokreće React state. Iako na to znači da morate da unesete malo više koda, sada vrednost možete prosleditii drugim elementima korisničkog interfejsa ili je resetovati iz drugih događaja. </p>

                    <p style={stilTeksta}>Komponenta Forma daje sledeći izlaz:</p>
                    <img src={forma6} style={stilSlike} alt="" />

                    <p style={stilTeksta}>Izlaz alert prozora nakon popunjenog polja i klika na dugme “Pošalji”:</p>
                    <img src={forma7} style={stilSlike} alt="" />

                    <h2 className="podnaslov"><a href="#textareaTag" style={stilPodnaslov} id="textareaTag">Textarea tag</a></h2>

                    <p style={stilTeksta}> U HTML-u element &lt;textarea&gt; definiše svoj tekst prema svojoj deci:</p>

                    <div style={stilDiv}>Textarea element u HTML-u</div>
                    <pre style={stilPre}>
                        <span style={stilZuto}>&lt;textarea&gt;</span> Ovako se koristi textarea element u HTML-u. <span style={stilZuto}>&lt;/textarea&gt;</span>
                    </pre>

                    <p style={stilTeksta}> U React-u, &lt;textarea&gt; tag umesto toga koristi atribut value.</p>

                    <div style={stilDiv}>Upotreba textarea elementa u React-u</div>
                    <pre style={stilPre}>
                    <span style={stilNarandzasto}>class </span>Forma<span style={stilNarandzasto}> extends</span> React.Component {'{'}
                        <br/>
                        <span style={stilZuto}>  constructor</span>(props) {'{'}
                        <br/>
                            <span style={stilNarandzasto}>      super</span>(props)
                    <br/>
                            <span style={stilNarandzasto}>      this</span>.<span style={stilLjubicasto}>state</span> = {'{'}
                        <span style={stilLjubicasto}>vrendnost: </span><span style={stilZeleno}>'Unesite temu Vašeg diplomskog rada.'</span>{'}'}
                        <br/>
                    <span style={stilNarandzasto}>      this</span>.<span style={stilZuto}>handleChange</span>=<span style={stilNarandzasto}>this</span>.<span style={stilZuto}>handleChange</span>.<span style={stilZuto}>bind</span>(<span style={stilNarandzasto}>this</span>)
                    <br/>
                    <span style={stilNarandzasto}>      this</span>.<span style={stilZuto}>handleSubmit</span>=<span style={stilNarandzasto}>this</span>.<span style={stilZuto}>handleSubmit</span>.<span style={stilZuto}>bind</span>(<span style={stilNarandzasto}>this</span>)
                        <br/>{'}'}
                        <br/>
                    <span style={stilZuto}>   handleChange</span>(event) {'{'}
                        <br/>
                    <span style={stilNarandzasto}>      this</span>.setState({'{'}
                        <span style={stilLjubicasto}>vrednost</span>:event.<span style={stilLjubicasto}>target</span>.<span style={stilLjubicasto}>value</span>{'}'})
                    <br/>{'}'}
                        <br/>
                    <span style={stilZuto}>   handleSubmit</span>(event) {'{'}
                        <br/>
                        <span style={stilZuto}>      alert</span>(<span style={stilZeleno}>'Tema je poslata: '</span> + <span style={stilNarandzasto}>this</span>.<span style={stilLjubicasto}>state</span>.<span style={stilLjubicasto}>vrednost</span>)
                        <br/>   event.<span style={stilZuto}>preventDefault</span>()
                        <br/>{'}'}
                        <br/>
                    <span style={stilZuto}>     render()</span> {'{'}
                        <br/>
                    <span style={stilNarandzasto}>       return </span>(
                        <br/>
                        <span style={stilZuto}>         &lt;form</span> onSubmit={'{'}<span style={stilNarandzasto}>this</span>.<span style={stilZuto}>handleSubmit</span>{'}'}<span style={stilZuto}>&gt;</span>
                        <br/>
                        <span style={stilZuto}>           &lt;label&gt;</span>Tema:
                        <br/>
                        <span style={stilZuto}>             &lt;textarea</span> value={'{'}<span style={stilNarandzasto}>this</span>.<span style={stilLjubicasto}>state</span>.<span style={stilLjubicasto}>vrednost</span>{'}'} onChange={'{'}<span style={stilNarandzasto}>this</span>.<span style={stilZuto}>handleChange</span>{'}'}<span style={stilZuto}> /&gt;</span>
                        <br/>
                        <span style={stilZuto}>           &lt;/label&gt;</span>
                        <br/>
                        <span style={stilZuto}>           &lt;input</span> type=<span style={stilZeleno}>"submit"</span> value=<span style={stilZeleno}>"Pošalji"</span><span style={stilZuto}>/&gt;</span>
                        <br/>
                        <span style={stilZuto}>         &lt;/form&gt;</span>
                        <br/>   )
                        <br/> {'}'}
                        <br/>{'}'}
                </pre>
                    <p style={stilTeksta}>Stanje this.state.vrednost je inicijalizovan u konstruktoru, tako da područje teksta započinje sa nekim tekstom u njemu.</p>

                    <p style={stilTeksta}>Izlaz ove komponente izgledaće ovako: </p>
                    <img src={forma1} style={stilSlike} alt="" />

                    <p style={stilTeksta}>Izlaz alert prozora nakon popunjeneg polja i klika na dugme “Pošalji”.</p>
                    <img style={stilSlike} src={forma2} alt="" />

                    <h2 className="podnaslov"><a href="#selectTag" style={stilPodnaslov} id="selectTag">Select tag</a></h2>

                    <p style={stilTeksta}>U HTML-u &lt;select&gt; tag kreira padajuću listu. Na primer ovaj HTML stvara padajuću listu sa državama:</p>

                    <div style={stilDiv}>Select element u HTML-u</div>
                    <pre style={stilPre}>
                    <span style={stilZuto}>&lt;select&gt;</span>
                        <br/>
                        <span style={stilZuto}>   &lt;option</span> value=<span style={stilZeleno}>"Italija"</span><span style={stilZuto}>&gt;</span> Italija <span style={stilZuto}>&lt;/option&gt;</span>
                    <br/>
                    <span style={stilZuto}>   &lt;option</span> selected value=<span style={stilZeleno}>"Španija"</span><span style={stilZuto}>&gt;</span> Španija <span style={stilZuto}>&lt;/option&gt;</span>
                        <br/>
                        <span style={stilZuto}>   &lt;option</span> value=<span style={stilZeleno}>"Francuska"</span><span style={stilZuto}>&gt;</span> Francuska <span style={stilZuto}>&lt;/option&gt;</span>
                        <br/>
                        <span style={stilZuto}>&lt;/select&gt;</span>
                    </pre>

                    <p style={stilTeksta}>Opcija “Španija” je prvobitno izabrana zbog atributa selected. U React-u selektovana vrednost je definisana sa value atributom unutar select taga. Ovo je pogodnije za kontrolisanu komponentu jer je potrebno samo da je ažurirate na jednom mestu. Na primer:</p>

                    <div style={stilDiv}>Upotreba select elementa u React-u</div>
                    <pre style={stilPre}>
                    <span style={stilNarandzasto}>class </span>Forma<span style={stilNarandzasto}> extends</span> React.Component {'{'}
                        <br/>
                        <span style={stilZuto}>  constructor</span>(props) {'{'}
                        <br/>
                            <span style={stilNarandzasto}>      super</span>(props)
                    <br/>
                            <span style={stilNarandzasto}>      this</span>.<span style={stilLjubicasto}>state</span> = {'{'}
                        <span style={stilLjubicasto}>drzava: </span><span style={stilZeleno}>'Španija'</span>{'}'}
                        <br/>
                    <span style={stilNarandzasto}>      this</span>.<span style={stilZuto}>handleChange</span>=<span style={stilNarandzasto}>this</span>.<span style={stilZuto}>handleChange</span>.<span style={stilZuto}>bind</span>(<span style={stilNarandzasto}>this</span>)
                    <br/>
                    <span style={stilNarandzasto}>      this</span>.<span style={stilZuto}>handleSubmit</span>=<span style={stilNarandzasto}>this</span>.<span style={stilZuto}>handleSubmit</span>.<span style={stilZuto}>bind</span>(<span style={stilNarandzasto}>this</span>)
                        <br/>{'}'}
                        <br/>
                    <span style={stilZuto}>   handleChange</span>(event) {'{'}
                        <br/>
                    <span style={stilNarandzasto}>      this</span>.setState({'{'}
                        <span style={stilLjubicasto}>drzava</span>:event.<span style={stilLjubicasto}>target</span>.<span style={stilLjubicasto}>value</span>{'}'})
                    <br/>{'}'}
                        <br/>
                    <span style={stilZuto}>   handleSubmit</span>(event) {'{'}
                        <br/>
                        <span style={stilZuto}>      alert</span>(<span style={stilZeleno}>'Država koju ste odabrali: '</span> + <span style={stilNarandzasto}>this</span>.<span style={stilLjubicasto}>state</span>.<span style={stilLjubicasto}>drzava</span>)
                        <br/>   event.<span style={stilZuto}>preventDefault</span>()
                        <br/>{'}'}
                        <br/>
                    <span style={stilZuto}>     render()</span> {'{'}
                        <br/>
                    <span style={stilNarandzasto}>       return </span>(
                        <br/>
                        <span style={stilZuto}>         &lt;form</span> onSubmit={'{'}<span style={stilNarandzasto}>this</span>.<span style={stilZuto}>handleSubmit</span>{'}'}<span style={stilZuto}>&gt;</span>
                        <br/>
                        <span style={stilZuto}>           &lt;label&gt;</span>Koju državu biste voleli da posetite?
                        <br/>
                        <span style={stilZuto}>             &lt;select</span> value={'{'}<span style={stilNarandzasto}>this</span>.<span style={stilLjubicasto}>state</span>.<span style={stilLjubicasto}>drzava</span>{'}'} onChange={'{'}<span style={stilNarandzasto}>this</span>.<span style={stilZuto}>handleChange</span>{'}'}<span style={stilZuto}> &gt;</span>
                        <br/>
                        <span style={stilZuto}>                &lt;option</span> value=<span style={stilZeleno}>"Italija"</span><span style={stilZuto}>&gt;</span>Italija<span style={stilZuto}>&lt;/option&gt;</span>
                        <br/>
                         <span style={stilZuto}>                &lt;option</span> value=<span style={stilZeleno}>"Španija"</span><span style={stilZuto}>&gt;</span>Španija<span style={stilZuto}>&lt;/option&gt;</span>
                        <br/>
                         <span style={stilZuto}>                &lt;option</span> value=<span style={stilZeleno}>"Francuska"</span><span style={stilZuto}>&gt;</span>Francuska<span style={stilZuto}>&lt;/option&gt;</span>
                        <br/>
                        <span style={stilZuto}>             &lt;/select</span>
                        <br/>
                        <span style={stilZuto}>           &lt;/label&gt;</span>
                        <br/>
                        <span style={stilZuto}>           &lt;input</span> type=<span style={stilZeleno}>"submit"</span> value=<span style={stilZeleno}>"Pošalji"</span><span style={stilZuto}>/&gt;</span>
                        <br/>
                        <span style={stilZuto}>         &lt;/form&gt;</span>
                        <br/>   )
                        <br/> {'}'}
                        <br/>{'}'}
                </pre>

<p style={stilTeksta}>Izlaz Forma komponente:</p>
                    <img src={forma3} style={stilSlike} alt="" />

                    <p style={stilTeksta}>Izlaz nakon otvorene select liste:</p>
                    <img src={forma4} style={stilSlike} alt="" />

                    <p style={stilTeksta}>Izlaz alert prozora nakon odabrane opcije i klika na dugme "Pošalji":</p>
<img src={forma5} style={stilSlike} alt="" />
                    <p style={stilTeksta}>Dakle, tagovi &lt;input type=”text”&gt;, &lt;textarea&gt; i &lt;select&gt; funkcionišu vrlo slično – svi prihvataju atribut value koji možete koristiti za primenu kontrolisane komponente.</p>


                    <h2 className="podnaslov"><a href="#rukovanjeSaViseUlaza" style={stilPodnaslov} id="rukovanjeSaViseUlaza">Rukovanje sa više ulaza</a></h2>

                    <p style={stilTeksta}>Kada je potrebno rukovati sa više kontrolisanih ulaznih elemenata, možemo dodati atribut “name” svakom elementu i dopustiti handler funkciji da bira šta će raditi na osnovu vrednosti event.target.name. Na primer:</p>

                    <div style={stilDiv}>Forma sa više ulaza u React-u</div>
                    <pre style={stilPre}>
                    <span style={stilNarandzasto}>class </span>Forma<span style={stilNarandzasto}> extends</span> React.Component {'{'}
                        <br/>
                        <span style={stilZuto}>  constructor</span>(props) {'{'}
                        <br/>
                            <span style={stilNarandzasto}>      super</span>(props)
                    <br/>
                            <span style={stilNarandzasto}>      this</span>.<span style={stilLjubicasto}>state</span> = {'{'}
                            <br/>
                        <span style={stilLjubicasto}>      smer</span>: <span style={stilZeleno}>' '</span>,
                        <br/>
                        <span style={stilLjubicasto}>      brojIndeksa: </span>: <span style={stilNarandzasto}>null</span>,

                        <br/>{'}'}
                        <br/>
                    <span style={stilNarandzasto}>      this</span>.<span style={stilZuto}>handleChange</span>=<span style={stilNarandzasto}>this</span>.<span style={stilZuto}>handleChange</span>.<span style={stilZuto}>bind</span>(<span style={stilNarandzasto}>this</span>)
                        <br/>{'}'}
                        <br/>
                    <span style={stilZuto}>   handleChange</span>(event) {'{'}
                        <br/>
                        <span style={stilNarandzasto}>      const</span> ime = event.<span style={stilLjubicasto}>target</span>.<span style={stilLjubicasto}>name</span>
                        <br/>
                        <span style={stilNarandzasto}>      const</span> vrednost = event.<span style={stilLjubicasto}>target</span>.<span style={stilLjubicasto}>value</span>
                    <br/>
                        <span style={stilNarandzasto}>      this</span>.setState({'{'}
                      [ime]: vrednost{'}'})
                    <br/>{'}'}
                        <br/>
                    <span style={stilZuto}>     render()</span> {'{'}
                        <br/>
                    <span style={stilNarandzasto}>       return </span>(
                        <br/>
                        <span style={stilZuto}>         &lt;form</span><span style={stilZuto}>&gt;</span>
                        <br/>
                        <span style={stilZuto}>            &lt;p&gt;</span> Upiši svoj smer: <span style={stilZuto}>&lt;/p&gt;</span>
                        <br/>
                        <span style={stilZuto}>           &lt;input</span> type=<span style={stilZeleno}>"text"</span> name=<span style={stilZeleno}>"smer"</span> onChange={'{'}<span style={stilNarandzasto}>this</span>.<span style={stilZuto}>handleChange</span>{'}'}<span style={stilZuto}> /&gt;</span>
                        <br/>
                        <span style={stilZuto}>            &lt;p&gt;</span> Upiši broj indeksa: <span style={stilZuto}>&lt;/p&gt;</span>
                        <br/>
                        <span style={stilZuto}>           &lt;input</span> type=<span style={stilZeleno}>"text"</span> name=<span style={stilZeleno}>"brojIndeksa"</span> onChange={'{'}<span style={stilNarandzasto}>this</span>.<span style={stilZuto}>handleChange</span>{'}'}<span style={stilZuto}> /&gt;</span>
                        <br/>
                        <span style={stilZuto}>            &lt;h1&gt;</span> Indeks: {'{'}<span style={stilNarandzasto}>this</span>.<span style={stilLjubicasto}>state</span>.<span style={stilLjubicasto}>smer</span>{'}'} {'{'}<span style={stilNarandzasto}>this</span>.<span style={stilLjubicasto}>state</span>.<span style={stilLjubicasto}>brojIndeksa</span>{'}'}  <span style={stilZuto}>&lt;/h1&gt;</span>

                        <br/>
                        <span style={stilZuto}>         &lt;/form&gt;</span>
                        <br/>   )
                        <br/> {'}'}
                        <br/>{'}'}
                </pre>

                    <p style={stilTeksta}>Kada inicijalizujemo state unutar konstruktora, neophodno je da ta imene koristimo i za atribut “name” u input poljima.</p>

                    <p style={stilTeksta}>Da bismo pristupili poljima u handleChange događaju, koristimo sintaksu event.target.name i event.target.value.</p>

                    <p style={stilTeksta}>Kada ažuriramo state, unutar setState metode koristimo uglaste zagrade oko imena svojstva.</p>

                    <p style={stilTeksta}>Izlaz komponente Forma sa više ulaza: </p>

                    <img style={stilSlike} src={forma8} alt="" />

                    <p style={stilTeksta}>Izlaz nakon što popunimo formu:</p>

                    <img style={stilSlike} src={forma9} alt="" />

                </div>
            </div>


        )
    }
}


export default Forme