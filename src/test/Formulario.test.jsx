import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Formulario from '../components/Formulario'
import userEvent from "@testing-library/user-event";

describe.skip("Formulario test", ()=>{
    it("Deberia crear una serie nueva", async()=>{
        render(<Formulario/>)
        const user = userEvent.setup();
        const título = screen.getAllByLabelText("Título");
        const creador = screen.getAllByLabelText("Creador");
        const rating = screen.getAllByLabelText("Rating");
        const fechas = screen.getAllByLabelText("Fechas");
        const imagen = screen.getAllByLabelText("Imagen");
        const canal = screen.getAllByLabelText("Canal");

        await user.type(título, 'Malcom');
        await user.type(creador, 'Anonimo');
        await user.type(rating, '4.5');
        await user.type(fechas, '2001-2010');
        await user.type(imagen, 'http://image...');
        await user.type(canal, 'Canal 5');

        await user.click(screen.getAllByRole('button',{name:/Crear serie/i}))

        const alertElement = await screen.findAllByRole('alert');
        expect(alertElement).toBeDefined();

    })
})