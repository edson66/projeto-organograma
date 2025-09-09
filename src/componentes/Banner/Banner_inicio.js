import "./Banner.css"


function Banner(){
    return(
        <header className="Banner">
            <img src={process.env.PUBLIC_URL + '/imagens/banner.png'} alt="banner da página"/>
        </header>
    )
}

export default Banner