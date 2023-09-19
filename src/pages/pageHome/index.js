import React from "react";
import {Link} from "react-router-dom";
import Slide from "../../components/slide";
import "./style.css";

function Home(){



    return(
        <>
            <main>
        <section class="nous">
            <div class="technician"> 
                <img src="./assets/images/Rectangle_61.png" alt=""/></div>
            <div class="story"> 
                <h1 >Qui sommes nous? 👨‍🔧 </h1>
                <p> Nous sommes des passionnés qui proposons nos services aux gens dans le besoin s’il n’est pas possible de se rendre dans une boutique de réparation. <br></br>
                Il vous suffit de choisir l’appareil que vous voulez réparer et votre lieu pour trouver les technicien de votre secteur.</p></div>
        </section>
        <view >
            <h1 id="title">Recherche ta panne 🪛</h1>
            <section class="recherche">
                <div> <img src="./assets/images/Rectangle_44.png" alt=""/></div>
                <div> <img src="./assets/images/Rectangle_45.png" alt=""/></div>
                <div> <img src="./assets/images/Rectangle_46.png" alt=""/></div>
                <div> <img src="./assets/images/Rectangle_47.png" alt=""/></div>
                <div> <img src="./assets/images/Rectangle_48.png" alt=""/></div>
                <div> <img src="./assets/images/Rectangle_49.png" alt=""/></div>
                <div> <img src="./assets/images/Rectangle_50.png" alt=""/></div>
                <div> <img src="./assets/images/Rectangle_51.png" alt=""/></div>
            </section>
            
        </view>
        <div>
            <a href="./services.html" class="call-to-action plus">En savoir +</a>
        </div>
    </main>

    
        {/* <main class="optimal-width">
        <div class="main-grid" id="le-resto">
            <figure id="resto" class="percent33">
                <h2>Le Resto</h2>
                <Link to="/"> <img src="images/le-resto.png" alt="Restaurant Titi burger" /></Link>
            </figure>
            <div id="story" class="percent66">
                <h2>Titi Story 👨‍🍳</h2>
                <h3>Une équipe Authentique</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim mi at ultrices praesent posuere sit.
                    <br></br>
                    Pulvinar est sagittis in ultrices. Mauris est sed id orci, massa in. Leo duis sed eu lacinia
                    bibendum fermentum ac cras.</p>
                <a href="#">Lire la suite</a>
            </div>
        </div>
        <div class="main-grid" id="nos-burgers">
            <div class="percent33">
                <h2>Nos Burgers 🍔</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
                Enim mi at ultrices praesent posuere sit.
                Pulvinar </p>
            </div>
             <div className="slider">
                <Slide/>
             </div>
        </div>
           
       
        <h2 class="center">Actus 📰</h2>
        <div class="grid-3">
            <div className="article">
                <h3>Notre Dark Titi Arrive</h3>
                <div class="actu_img">
                    <img src="images/hamburger-noir.jpg" alt="Hamburger noir"></img>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nulla nostrum ducimus quae eius,
                    quasi, expedita ex ipsa assumenda reiciendis voluptatum temporibus perspiciatis reprehenderit
                    numquam asperiores debitis doloremque odit esse.</p>
                <a href="#" class="call-to-action grey">En savoir +</a>
            </div>
            <div class="article">
                <h3>Notre Cheese Titi Arrive</h3>
                <div class="actu_img">
                    <img src="images/hamburger-cheese.jpg" alt="Hamburger cheese"></img>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nulla nostrum ducimus quae eius,
                    quasi, expedita ex ipsa assumenda reiciendis voluptatum temporibus perspiciatis reprehenderit
                    numquam asperiores debitis doloremque odit esse.</p>
                <a href="#" class="call-to-action grey">En savoir +</a>
            </div>
            <div class="article">
                <h3>Notre Végétal Titi Arrive</h3>
                <div class="actu_img">
                    <img src="images/hamburger-végétal.jpg" alt="Hamburger végétal"></img>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nulla nostrum ducimus quae eius,
                    quasi, expedita ex ipsa assumenda reiciendis voluptatum temporibus perspiciatis reprehenderit
                    numquam asperiores debitis doloremque odit esse.</p>
                <a href="#" class="call-to-action grey">En savoir +</a>
            </div>
        
        </div>

        
        </main> */}
       </>
       )
}
export default Home;