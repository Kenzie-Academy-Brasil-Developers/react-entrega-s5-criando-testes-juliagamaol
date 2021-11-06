
context("E2E", ()=>{
    it("Get an address with valid CEP",()=>{
        cy.visit("http://localhost:3000")
        cy.viewport(1400,900)

        
    })

    it("Tries to add an valid CEP", ()=>{
        cy.intercept("get","/",{
            statusCode:200
        })

        cy.get("input").type(21770100)
        cy.get("button").click()

        cy.contains("Buscar pelo CEP").click()
    })
})