import { render,fireEvent,waitFor,screen } from "@testing-library/react"
import MockAdapter from "axios-mock-adapter"

import  Search  from "../../components/Search"
import Providers from "../../providers"
import api from "../../services"

const apiMock = new MockAdapter(api)

describe("Search Page", ()=>{
    it("should be able to search cep", async () =>{
        apiMock.onPost("/cep").replyOnce(200,{})
        render(
            <Providers>
                <Search />
            </Providers>
        )

        const cepField = screen.getByPlaceholderText("Insira o CEP")
        const buttonElement = screen.getByRole('button')

        fireEvent.change(cepField,{
            target:{
                value:21770100
            }
        })
        fireEvent.click(buttonElement)

        await waitFor(()=>{
            expect(cepField).toHaveValue(21770100)
        })
    })
})
