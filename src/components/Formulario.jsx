import { useState } from "react";
import { useForm } from "react-hook-form";

const Formulario = () => {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        setSuccess(false);
        setError(false);

        try {
            const response = await fetch("https://peticiones.online/api/series", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...data,
                    rating: Number(data.rating)
                })
            });

            if (!response.ok) {
                throw new Error("Error al crear la serie");
            }

            await response.json();

            setSuccess(true);
            reset();

        } catch (err) {
            console.log(err);
            setError(true);
        }
    };

    return (
        <div className="px-5 mt-5">

            <h2>Nueva serie</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                    <label className="form-label" htmlFor="inputTitle">
                        Título
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="inputTitle"
                        {...register("title", { required: true })}
                    />
                </div>


                <div className="mb-3">
                    <label className="form-label" htmlFor="inputCreator">
                        Creador
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="inputCreator"
                        {...register("creator", { required: true })}
                    />
                </div>


                <div className="mb-3">
                    <label className="form-label" htmlFor="inputRating">
                        Rating
                    </label>
                    <input
                        className="form-control"
                        type="number"
                        id="inputRating"
                        {...register("rating", { required: true })}
                    />
                </div>


                <div className="mb-3">
                    <label className="form-label" htmlFor="inputDates">
                        Fechas
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="inputDates"
                        {...register("dates")}
                    />
                </div>


                <div className="mb-3">
                    <label className="form-label" htmlFor="inputImage">
                        Imagen
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="inputImage"
                        {...register("image")}
                    />
                </div>


                <div className="mb-3">
                    <label className="form-label" htmlFor="inputChannel">
                        Canal
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="inputChannel"
                        {...register("channel")}
                    />
                </div>


                <button className="btn btn-outline-info" type="submit">
                    Crear serie
                </button>

            </form>


            {success && (
                <div className="alert alert-success mt-4" role="alert">
                    Se ha creado una nueva serie
                </div>
            )}


            {error && (
                <div className="alert alert-danger mt-4">
                    No se pudo crear la serie
                </div>
            )}

        </div>
    );
};

export default Formulario;

