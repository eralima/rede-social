import React from "react"
import "./feed.css"
import icon from "../../img/icon_ig.jpg"
import tresPontos from "../../img/trespontos.svg"
import publicacao from "../../img/publicacao.png"
import iconHeart from "../../img/iconHeart.svg"
import iconComentario from "../../img/iconComentario.svg"
import iconShare from "../../img/iconShare.svg"
function Feed(){
    return(
        <section className="feedContainer">

            <div className="feed">
                <div className="block">

                    <div className="perfilContainer">
                            <div class="perfil">
                                <div className="icon"><img src={icon} class="ftIcon" alt="foto do perfil"/></div>
                                <div className="perfilNome">
                                    <span className="sn-nome">Gustavo</span>
                                    <span className="sn-endereco">Sao Paulo</span>
                                </div>
                                <div className="tresPontos"><img className="iconTres"src={tresPontos}/></div>
                                
                            </div>     
                    </div>

                    <div className="postagem">
                        <div>
                            <img class="imgPostagem" src={publicacao} alt="postagem de uma foto"/>
                        </div>
                    </div>

                    <div className="comentarios">
                        <div className="containerIcons">
                            <img class="iconsComentario" src={iconHeart} alt=""/>
                            <img class="iconsComentario" src={iconComentario} alt=""/>
                            <img class="iconsComentario" src={iconShare} alt=""/>
                        </div>
                        <div>
                            <span className="nomeComentario">Gustavo</span>
                            <span>Temos que pegar !</span>
                        </div>
                        <div>
                            <span className="nomeComentario">Ashe</span>
                            <span>Se vemos no ginasio</span>
                        </div>

                    </div>
                
                </div>
            </div>  

        </section>
    )
}

export default Feed