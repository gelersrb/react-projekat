import React from 'react';
import reactLogo from '../images/react-logo.png'
import {Link} from "react-router-dom";
import {  animateScroll as scroll } from "react-scroll";


function HomePage() {

   function scrollToTop() {
        scroll.scrollToTop()
    }

    return(
        <div className="home-section">
            <div className="row">
                <div className="col-md-6">
                    <h4>O React-u...</h4>
                    <h4 className="subheading">React je JavaScript biblioteka otvorenog koda za izgradnju
                        korisničkih interfejsa od strane Fejsbuka i Instagrama. </h4>
                    <p className="text-muted">Danas React važi za jednu od najpopularnijih biblioteka
                        za pravljenje internet aplikacija. Njegove karakteristike omogućavaju programerima
                        da naprave velike internet aplikacije koje omogućavaju promenu podataka bez
                            osvežavanja stranice. Jednostavno izrazite kako vaša aplikacija treba da izgleda
                        u bilo kojem trenutku, a React će automatski upravljati svim ažuriranjima
                        korisničkog interfejsa kada se promene vaši osnovni podaci.
                      Zahvaljujući ovom principu internet
                        aplikacije zasnovane na React-u su brze, lako skalabilne i jednostavne. </p>
                </div>
                <div className="col-md-6 how-img">
                    <img src={reactLogo}
                         className="rounded-circle img-fluid rotate" alt=""/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 how-img">
                            <p className="text anim-typewriter">{'{'}mojStil{'}'}</p>
                </div>
                <div className="col-md-6">
                    <Link onClick={scrollToTop} to="/jsx" style={{textDecoration: 'none'}}> <h4 className="naslov">JSX</h4> </Link>
                    <h4 className="subheading">JSX (JavaScript Syntax Extension) je sintaksna ekstenzija JavaScript jezika zasnovanog
                        na EcmaScript6, a tokom izvođenja je preveden u redovan JavaScript.</h4>
                    <p className="text-muted"> Upotrebom JSX-a možemo zajedno koristiti
                        HTML i JavaScript. JSX obrađuje HTML tagove u elemente React-a. React ne zahteva upotrebu JSX-a, ali većina ljudi
                        to smatra korisnim kao vizuelnim pomoćnim sredstvom prilikom rada sa korisničkim interfejsom unutar JavaScript koda.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Link onClick={scrollToTop} to="/render" style={{textDecoration: 'none'}}> <h4 className="naslov">Render</h4> </Link>
                    <h4 className="subheading">Ukoliko želimo da prikažemo kreirane komponente ili elemente, potrebno je da koristimo određenu funkciju
                        kako bismo ih prikazali na našoj aplikaciji.</h4>
                    <p className="text-muted"> Da bi React renderovao HTML na izlaznu stranu potrebno je da koristimo ReactDOM.render() funkciju
                        koja se nalazi u react-dom biblioteci. Cilj ove funkcije je da prikaže određeni HTML kod unutar određenog HTML elementa.
                    </p>
                </div>
                <div className="col-md-6 how-img">
                    <p className='prikaz'>ReactDOM.render()</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 how-img">
                    <p className="text anim-typewriter">&lt;MojaKomponenta /&gt;</p>
                </div>
                <div className="col-md-6">
                    <Link onClick={scrollToTop} to='/komponenta' style={{textDecoration: 'none'}}> <h4 className="naslov">Komponente</h4></Link>
                    <h4 className="subheading">U osnovi svih React aplikacija su komponente. </h4>
                    <p className="text-muted">Za pisanje React aplikacije pišemo React komponente koje odgovaraju različitim
                        elementima interfejsa, zatim te komponente organizujemo unutar komponenata višeg nivoa koje definišu strukturu
                        naše aplikacije.  Komponente su nezavisan i ponovo upotrebljiv deo koda. One imaju istu svrhu kao i JavaScript
                        funkcije, ali rade izolovano i vraćaju HTML putem render funkcije. Postoji dve vrste komponenata:
                        klasne komponente i funkcionalne komponente.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Link onClick={scrollToTop} to="/state" style={{textDecoration: 'none'}}> <h4 className="naslov">State</h4> </Link>
                    <h4 className="subheading">State objekt je mesto gde se skladište vrednosti svojstva koje pripadaju komponenti.</h4>
                    <p className="text-muted">U React-u postoji dva tipa podataka od kojih komponenta zavisi. U pitanju su state i
                        props objekti. Već pomenuti props objekt je prosleđen od parent komponente i samim tim je za child komponentu
                        nepromenljiv. Za razliku od props objekta, state objekt koristimo kada želimo da promenimo podatke.
                    </p>
                </div>
                <div className="col-md-6 how-img">
                    <p className='prikaz'>setState()</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 how-img">
                    <p className="text anim-typewriter">Mounting<br/>Updating<br/>Unmounting</p>
                </div>
                <div className="col-md-6">
                    <Link onClick={scrollToTop} to='/metode' style={{textDecoration: 'none'}}> <h4 className="naslov">Lifecycle</h4></Link>
                    <h4 className="subheading">Svaka komponenta u React-u ima životni ciklus (lifecycle) koji možemo pratiti i manipulisati tokom njegove tri glavne faze. </h4>
                    <p className="text-muted">
                        Metode React životnog ciklusa možemo smatrati nizom događaja koji se događaju od rođenja React komponente
                        do njene smrti. Svaka komponenta u React-u prolazi kroz životni ciklus događaja. Na njih možemo gledati kao
                        da prolaze kroz ciklus rađanja, rasta i smrti, odnosno tri faze su: montiranje (mounting), ažuriranje (updating)
                        i demontaža (unmounting).</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <Link onClick={scrollToTop} to="/events" style={{textDecoration: 'none'}}> <h4 className="naslov">Događaji</h4> </Link>
                    <h4 className="subheading">Rukovanje događajima sa React elementima je vrlo slično rukovanju događajima na DOM elementima.</h4>
                    <p className="text-muted">Postoje neke razlike u sintaksi a to su: React događaji se imenuju pomoću camelCase-a, a ne malim slovima i
                        sa JSX-om prenosite funkciju kao obrađivač događaja, a ne kao niz.

                    </p>
                </div>
                <div className="col-md-6 how-img">
                    <p className='prikaz'>bind()</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 how-img">
                    <p className="text anim-typewriter">&lt;Controlled Component /&gt;</p>
                </div>
                <div className="col-md-6">
                    <Link onClick={scrollToTop} to='/forme' style={{textDecoration: 'none'}}> <h4 className="naslov">Forme</h4></Link>
                    <h4 className="subheading">Baš kao i u HTML-u, React koristi forme kako bi korisnicima omogućio interakciju sa veb stranicom.</h4>
                    <p className="text-muted">
                        Rukovanje formama odnosno obrascima odnosi se na način na koji obrađujemo podatke kada promene vrednost ili se pošalju. U HTML
                        formama podatke obično obrađuje DOM, dok u React-u podatke forme obično obrađuju komponente. Kada komponenta obrađuje podatke,
                        svi podaci se čuvaju u state objektu komponente. Dakle, elementi HTML formi rade malo drugačije od ostalih DOM elemenata u React-u,
                        jer elementi forme prirodno zadržavaju neko unutrašnje stanje.</p>
                </div>
            </div>

        </div>
    )

}

export default HomePage