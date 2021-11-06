import { render,screen } from "@testing-library/react"

import { Input } from "semantic-ui-react"

describe("Input Component", ()=>{
    test("should be able to render input", ()=>{
        render(<Input error={false} type="number" placeholder="Insira o cep" onChange={()=>{}}/>)

        expect(screen.getAllByPlaceholderText("Insira o cep")).toBeTruthy()
    })
    test("should be able to render an error",()=>{
        render(<Input error={false} type="number" placeholder="Insira seu email" onChange={()=>{}}/>)

        expect(screen.getByPlaceholderText("Insira seu email")).toBeInTheDocument()
    })
})