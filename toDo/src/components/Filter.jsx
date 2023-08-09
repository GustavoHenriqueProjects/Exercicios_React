const Filter = ({filter, setFilter, setSort
}) => {
    return (
        <div className="filter">
            <div><h2>Filtrar</h2>
                <div className="filter-options">
                    <div>
                        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                            <option value="All">Todas</option>
                            <option value="Completed">Completas</option>
                            <option value="Incompleted">Incompletas</option>
                        </select>
                    </div>
                </div></div>
            <div>
                <h2>Ordem Alfabetica</h2>
                <div className="container-buttons-filter">
                    <button className="button-asc" onClick={() => {setSort("Asc")}}>Asc</button>
                    <button className="button-desc" onClick={() => {setSort("Desc")}}>Desc</button>
                </div>
            </div>

        </div>
    )
}

export default Filter