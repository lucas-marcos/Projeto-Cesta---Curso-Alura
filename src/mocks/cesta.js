import logo from '../../assets/logo.png';
import tomate from '../../assets/frutas/Tomate.png'
import batata from '../../assets/frutas/Batata.png'
import brocolos from '../../assets/frutas/Brócolis.png'
import pepino from '../../assets/frutas/Pepino.png'
import abobora from '../../assets/frutas/Abóbora.png'

const cesta = {
    topo: {
        titulo: "Detalhe da cesta"
    },
    detalhes: {
        nome: "Cesta de verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadozamente da fazenda direto para sua cozinha",
        preco: "R$ 30,00",
        botao: "Comprar"
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate
            },
            {
                nome: "Brócolis",
                imagem: brocolos
            },
            {
                nome: "Batata",
                imagem: batata
            },
            {
                nome: "Pepino",
                imagem: pepino
            },
            {
                nome: "Abóbora",
                imagem: abobora
            },
        ]
    }
}

export default cesta;