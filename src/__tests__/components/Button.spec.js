import {render, screen} from "@testing-library/react"
import  Search  from "../../components/Search/index"

describe("Button Component",()=>{
    test("should be able to render button",()=>{
        render(<Search />)
        const children = screen.getByRole("button",{name:/Buscar pelo CEP/i})
        expect(children).toBeTruthy()
    })
    
})
