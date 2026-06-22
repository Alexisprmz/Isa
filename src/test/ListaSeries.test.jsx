import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ListaSeries from '../components/ListaSeries'

describe("ListaSeries test", () => {

    it("debería cargar todas las imágenes de las series", async () => {
        render(<ListaSeries />)

        const images = await screen.findAllByRole("img")

        expect(images).toHaveLength(15)
        images.forEach(img => {
            expect(img).toHaveAttribute("src")
        })
    })

    it("el total de títulos mostrados deben ser 15", async () => {
        render(<ListaSeries />)

        const titles = await screen.findAllByRole("heading", { level: 2 })

        expect(titles).toHaveLength(15)
    })

    it("debería encontrar el título Stranger Things", async () => {
        render(<ListaSeries />)

        const title = await screen.findByText("Stranger Things")

        expect(title).toBeInTheDocument()
    })

    it("debería encontrar el creador Frank Darabont, Angela Kang", async () => {
        render(<ListaSeries />)

        const creator = await screen.findByText(/Frank Darabont, Angela Kang/)

        expect(creator).toBeInTheDocument()
    })

    it("debería encontrar la puntuación 9.2", async () => {
        render(<ListaSeries />)

        const rating = await screen.findByText(/9.2/)

        expect(rating).toBeInTheDocument()
    })

    it("debería encontrar el canal Prime Video", async () => {
        render(<ListaSeries />)

        const channels = await screen.findAllByText(/Prime Video/)

        expect(channels.length).toBeGreaterThanOrEqual(1)
    })

})
