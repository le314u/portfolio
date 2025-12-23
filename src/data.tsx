import tcc from "./assets/img/projetos/tcc.gif"
import proxy from "./assets/img/projetos/proxy.gif"
import layout from "./assets/img/projetos/layout.gif"
import juros from "./assets/img/projetos/juros.gif"
import academico from "./assets/img/projetos/academico.png"



const banners = [{
    title:"",
    text:`
    Olá! Meu nome é Lucas Mateus, mas a galera me conhece como Piu. Sou uma pessoa movida pela curiosidade e pela vontade de aprender coisas novas. Minha formação é eclética: sou Licenciado em Educação Física e Bacharel em Ciências da Computação.

    Isso não é um blog, mas vale contar: sou apaixonado por Jiu-Jitsu, Magic e alguns jogos que nunca consigo parar de jogar — só dou uma pausa de vez em quando. Adoro desafios que misturam estratégia, criatividade e diversão.

    A vida é um mosaico de pequenas vitórias perdidas em um oceano de tédio. Mais do que títulos ou diplomas, acredito que o que realmente importa é o pensamento crítico, curiosidade e a vontade de evoluir, seja em projetos, estudos ou na vida pessoal.
    `


    
},{
    title:"Thanks",
    text:"Quero expressar minha gratidão por ter dedicado um tempo para visitar o meu perfil. Fiquei muito contente em saber do seu interesse. Se houver qualquer informação adicional que você gostaria de obter ou se tiver alguma pergunta, sinta-se à vontade para entrar em contato: contato@314-u.com   "
}]

let games = {cards:[
    {
        title:"Telma",
        subtitle:"Jogo de memoria",
        href:"https://314-u.com/games/telma/"
    },{
        title:"Who is Spy",
        subtitle:"Jogo de Blefe",
        href:"https://314-u.com/games/spy/"
    },{
        title:"Perfil",
        subtitle:"Jogo de Flash cards",
        href:"https://314-u.com/games/perfil/"
    },{
        title:"Card game",
        subtitle:"Jogo baseado em couple",
        href:"https://github.com/le314u/CardGame"
    }
]}
const cards = {
    games:games,
}

const contents = [{
    title:"TCC",
    text:"Ferramenta de visão computacional para a análise do movimento de barra fixa voltada para testes de aptidão física",
    imageAlt:"Gif Tcc",
    imageUrl:tcc,
    href:"https://github.com/le314u/TCC",
},{
    title:"proxyCardMTG",
    text:"Cria um pdf para impressão de proxys apartir da url de um deck postado no site 'ligamagic'",
    imageAlt:"Gif Scraping",
    imageUrl:proxy,
    href:"https://github.com/le314u/proxyCardMTG",
},{
    title:'layoutImg',
    text:"Junta duas Imagens em uma unica imagem, otimo para criação de fotos padronizadas e emissão de certificado em png",
    imageAlt:"Gif layout",
    href:"https://github.com/le314u/layoutImg",
    imageUrl:layout
},{
    title:"Financial-Transaction-Manager",
    text:"Facilitar o cadastramento de movimentação de cheques em eventos no google agenda",
    imageAlt:"Gif calculo juros",
    imageUrl:juros,
    href:"https://github.com/le314u/financialTransactionManager",
},{
    title:"Meus trabalhos academicos",
    text:"Trabalhos realizados durante a graduação em Ciencia da Computação pelo IFMG - Campus Formiga",
    imageAlt:"Trabalhos Academico",
    imageUrl:academico,
    href:"https://github.com/le314u/Academico/tree/master/IFMG",
},]


const title = {
    title:"GitHub",
    subtitle:(<a href='https://github.com/le314u?tab=repositories'>https://github.com/le314u?tab=repositories</a>)
}

const data = {
    cards:cards,
    banners:banners,
    title:title,
    contents:contents,
}

  export default data
