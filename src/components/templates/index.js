import React from "react";
import {Link, Outlet} from "react-router-dom";


function Template(){
    return(
        <>
        <header>
            <nav>
                
                {/* Votre navigation */}
                
                <div class="navigation">
            
                <Link to="/"><img src="/images/logo.svg" alt="Logo Titi-Burger"></img></Link>
                    <ul>
                            <li>
                                <Link 
                                    to={{pathname: `Click&Collect/${1}`}}
                                    state={{title: "Page Article 🛍️"}}>Click&Collect</Link>

                            </li>
                            <li>
                                    <Link 
                                        to={{pathname: `livraison/${1}`}}
                                        state={{title: "Page Article 🛍️"}}>Livraison</Link>
                            </li>
                    </ul>
                </div>
                
                <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="la carte">La Carte</Link>
                    </li>
                    <li>
                        <Link to="titi_story">Titi Story</Link>
                    </li>
                    <li>
                        <Link to="actus">Actus</Link>
                    </li>
                    <li>
                        <Link to="reserver">Réserver</Link>
                    </li>
                </ul>
                </div>
            </nav>
            
        </header>
        <section>
            <Outlet/>
        </section>
        <footer>
            {/*Votre footer */}
            <div>
                <ul>
                    <li>
                        <Link to="mentions">Mentions Légales</Link>
                    </li>
                    <li>
                        <Link to="CGV">CGV</Link>
                    </li>
                    <li>
                        <Link to="CGU">CGU</Link>
                    </li>
                </ul>
                <ul>
                <h4>Plan du site</h4>
                <li>
                        <Link to="lacarte">La carte</Link>
                    </li>
                    <li>
                        <Link to="Titistory">Titi story</Link>
                    </li>
                    <li>
                        <Link to="Actu">Actus</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="localisation">Où nous trouver?</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="mentions">Contact</Link>
                    </li>
                    <li>
                        <Link to="localisation">Où nous trouver?</Link>
                    </li>
                    <li>
                        <Link to="FAQ">FAQ</Link>
                    </li>
                </ul>
            </div>
        </footer>
        </>
    )
}
export default Template;