import { useEffect, useState } from "react";

const ListaSeries = () => {

    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("https://peticiones.online/api/series")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al cargar las series");
                }
                return response.json();
            })
            .then(json => {
                setSeries(json);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });

    }, []);


    if (loading) {
        return <p>Cargando series...</p>;
    }


    return (
        <div className="series">

            {series.map(serie => (

                <div key={serie.id} className="serie">

                    <h2>{serie.title}</h2>

                    <p>
                        Creador: {serie.creator}
                    </p>

                    <img
                        src={serie.image}
                        alt={serie.title}
                        width="200"
                    />

                    <p>
                        Puntuación: {serie.rating}
                    </p>

                    <p>
                        Canal: {serie.channel}
                    </p>

                    <p>
                        Fechas: {serie.dates}
                    </p>

                </div>

            ))}

        </div>
    );
};

export default ListaSeries;

