import { render, screen } from "@testing-library/react";
import { Home } from "../Home"
import { MemoryRouter } from 'react-router-dom';

describe("test Home component", () => {
    it("render text", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Home />
            </MemoryRouter>
        )

        const textTitle = screen.getByText("Домашняя страница");
        expect(textTitle).toBeInTheDocument()
    })
})