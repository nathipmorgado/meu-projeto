import Item from "./Item"

function List () {

    return (
        <>
            <h1>Marcas</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985} />
                <Item marca="Fiat" ano_lancamento={1964}/>
                <Item marca="Ford" ano_lancamento={1980}/>
                <Item marca="Renault" />
                <Item />
            </ul>
        </>
    )
    }

export default List