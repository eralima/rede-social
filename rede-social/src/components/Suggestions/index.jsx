import React from "react"
import "./Suggestions.css"

const Suggestions = () => {
    return (
        <>
            <section className="suggestions">
                <div className="user">
                    <img className="picture" src="https://cdn.syntese.com.br/wp-content/uploads/2019/01/thumb_AleB.jpg"></img>
                <div>
                <h5>igusuario</h5>
                </div>
                <div>
                <h5>Nome do Usuário</h5>
                </div>                
                    
                </div>
                <div className="suggestionsHeader">
                    <h5>Sugestões para você</h5>
                    <a href=""><h5>Ver tudo</h5></a>
                </div>
                <div className="suggestionsBody">
                    <div>
                    <img className="suggestionPicture" src="https://cdn.syntese.com.br/wp-content/uploads/2019/01/thumb_AleB.jpg"></img>
                    <h5>igusuario</h5>
                    <h6>Seguido por igusuario + mais x pessoas</h6>
                    <a className="follow" href=""><h6>Seguir</h6></a>
                    </div>
                    <div>
                    <img className="suggestionPicture" src="https://cdn.syntese.com.br/wp-content/uploads/2019/01/thumb_AleB.jpg"></img>
                    <h5>igusuario</h5>
                    <h6>Seguido por igusuario + mais x pessoas</h6>
                    <a className="follow" href=""><h6>Seguir</h6></a>
                    </div>
                    <div>
                    <img className="suggestionPicture" src="https://cdn.syntese.com.br/wp-content/uploads/2019/01/thumb_AleB.jpg"></img>
                    <h5>igusuario</h5>
                    <h6>Sugestões para você</h6>
                    <a className="follow" href=""><h6>Seguir</h6></a>
                    </div>
                    <div>
                    <img className="suggestionPicture" src="https://cdn.syntese.com.br/wp-content/uploads/2019/01/thumb_AleB.jpg"></img>
                    <h5>igusuario</h5>
                    <h6>Sugestões para você</h6>
                    <a className="follow" href=""><h6>Seguir</h6></a>
                    </div>
                    <div>
                    <img className="suggestionPicture" src="https://cdn.syntese.com.br/wp-content/uploads/2019/01/thumb_AleB.jpg"></img>
                    <h5>igusuario</h5>
                    <h6>Novo no Instagram</h6>
                    <a className="follow" href=""><h6>Seguir</h6></a>
                    </div>
                </div>
                <div className="suggestionsFooter">
                    <ul>
                        <a href=""><li>Sobre</li></a>
                        <a href=""><li>Ajuda</li></a>
                        <a href=""><li>Imprensa</li></a>
                        <a href=""><li>API</li></a>
                        <a href=""><li>Carreiras</li></a>
                        <a href=""><li>Privacidade</li></a>
                        <a href=""><li>Termos</li></a>
                        <a href=""><li>Localizações</li></a>
                        <a href=""><li>Termos</li></a>
                        <a href=""><li>Contas mais relevantes</li></a>
                        <a href=""><li>Hashtags</li></a>
                        <a href=""><li>Idiomas</li></a>
                    </ul>
                    <h6>2020 INSTAGRAM DO FACEBOOK</h6>
                </div>
            </section>
        </>
    )
}
export default Suggestions