import { render, screen } from "@testing-library/react";
import { Home } from "../Home"
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, MemoryRouter } from 'react-router-dom';

describe("test Home component", () => {
    it("render text", () => {
        const componentHome = render(
            <MemoryRouter initialEntries={["/"]}>
                <Home />
            </MemoryRouter>
        )
        const textTitle = componentHome.getByText("Домашняя страница");
        expect(textTitle).toBeInTheDocument()
    })
})