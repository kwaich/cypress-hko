/// <reference types="cypress" />

describe('Weather API', () => {
    const baseUrl = "https://data.weather.gov.hk/weatherAPI/opendata"
    const weatherUrl = `${baseUrl}/weather.php`
    
    context('GET /weather.php Current Weather Report (rhrread)', () => {
        it('should return current weather report (rhrread)', () => {
            cy.request({
                method: 'GET',
                url: weatherUrl,
                qs: {
                    dataType: 'rhrread',
                }
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.eq(200)
                    expect(response.headers.connection).to.eq('Keep-Alive')
                    expect(response.headers["content-type"]).to.eq('application/json; charset=utf-8')
                    expect(response.body).to.include.all.keys(
                        'rainfall', 'icon', 'iconUpdateTime', 'uvindex', 'updateTime', 'warningMessage', 'temperature', 'humidity'
                    )
                    expect(response.body.rainfall).to.have.all.keys('data', 'startTime', 'endTime')
                    Cypress._.each(response.body.rainfall.data, (data) => {
                        expect(data).to.include.all.keys('unit', 'place', 'main')
                    })
                    expect(response.body.temperature).to.have.all.keys('recordTime', 'data')
                    Cypress._.each(response.body.temperature.data, (data) => {
                        expect(data).to.have.all.keys('unit', 'value', 'place')
                    })
                    expect(response.body.humidity).to.have.all.keys('recordTime', 'data')
                    Cypress._.each(response.body.humidity.data, (data) => {
                        expect(data).to.have.all.keys('unit', 'value', 'place')
                    })
                })
        })
        it('should return current weather report (rhrread) english', () => {
            cy.request({
                method: 'GET',
                url: weatherUrl,
                qs: {
                    dataType: 'rhrread',
                    lang: 'en'
                }
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.eq(200)
                    expect(response.headers.connection).to.eq('Keep-Alive')
                    expect(response.headers["content-type"]).to.eq('application/json; charset=utf-8')
                    expect(response.body).to.include.all.keys(
                        'rainfall', 'icon', 'iconUpdateTime', 'uvindex', 'updateTime', 'warningMessage', 'temperature', 'humidity'
                    )
                    expect(response.body.rainfall).to.have.all.keys('data', 'startTime', 'endTime')
                    Cypress._.each(response.body.rainfall.data, (data) => {
                        expect(data).to.include.all.keys('unit', 'place', 'main')
                    })
                    expect(response.body.temperature).to.have.all.keys('recordTime', 'data')
                    Cypress._.each(response.body.temperature.data, (data) => {
                        expect(data).to.have.all.keys('unit', 'value', 'place')
                    })
                    expect(response.body.humidity).to.have.all.keys('recordTime', 'data')
                    Cypress._.each(response.body.humidity.data, (data) => {
                        expect(data).to.have.all.keys('unit', 'value', 'place')
                    })
                })
        })
        it('should return current weather report (rhrread) traditional chinese', () => {
            cy.request({
                method: 'GET',
                url: weatherUrl,
                qs: {
                    dataType: 'rhrread',
                    lang: 'tc'
                }
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.eq(200)
                    expect(response.headers.connection).to.eq('Keep-Alive')
                    expect(response.headers["content-type"]).to.eq('application/json; charset=utf-8')
                    expect(response.body).to.include.all.keys(
                        'rainfall', 'icon', 'iconUpdateTime', 'uvindex', 'updateTime', 'warningMessage', 'temperature', 'humidity'
                    )
                    expect(response.body.rainfall).to.have.all.keys('data', 'startTime', 'endTime')
                    Cypress._.each(response.body.rainfall.data, (data) => {
                        expect(data).to.include.all.keys('unit', 'place', 'main')
                    })
                    expect(response.body.temperature).to.have.all.keys('recordTime', 'data')
                    Cypress._.each(response.body.temperature.data, (data) => {
                        expect(data).to.have.all.keys('unit', 'value', 'place')
                    })
                    expect(response.body.humidity).to.have.all.keys('recordTime', 'data')
                    Cypress._.each(response.body.humidity.data, (data) => {
                        expect(data).to.have.all.keys('unit', 'value', 'place')
                    })
                })

        })
        it('should return current weather report (rhrread) simpified chinese', () => {
            cy.request({
                method: 'GET',
                url: weatherUrl,
                qs: {
                    dataType: 'rhrread',
                    lang: 'sc'
                }
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.eq(200)
                    expect(response.headers.connection).to.eq('Keep-Alive')
                    expect(response.headers["content-type"]).to.eq('application/json; charset=utf-8')
                    expect(response.body).to.include.all.keys(
                        'rainfall', 'icon', 'iconUpdateTime', 'uvindex', 'updateTime', 'warningMessage', 'temperature', 'humidity'
                    )
                    expect(response.body.rainfall).to.have.all.keys('data', 'startTime', 'endTime')
                    Cypress._.each(response.body.rainfall.data, (data) => {
                        expect(data).to.include.all.keys('unit', 'place', 'main')
                    })
                    expect(response.body.temperature).to.have.all.keys('recordTime', 'data')
                    Cypress._.each(response.body.temperature.data, (data) => {
                        expect(data).to.have.all.keys('unit', 'value', 'place')
                    })
                    expect(response.body.humidity).to.have.all.keys('recordTime', 'data')
                    Cypress._.each(response.body.humidity.data, (data) => {
                        expect(data).to.have.all.keys('unit', 'value', 'place')
                    })
                })

        })
    })
    context('GET /weather.php negative tests', () => {
        it('should return error: invalid language', () => {
            cy.request({
                method: 'GET',
                url: weatherUrl,
                qs: {
                    dataType: 'rhrread',
                    lang: 'co'
                }
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.headers))
                    expect(response.status).to.eq(200)
                    expect(response.headers.connection).to.eq('Keep-Alive')
                    expect(response.headers["content-type"]).to.eq('text/html; charset=utf-8')
                    expect(response.body).to.include("Please include valid parameters in API request.")
                })
        })
        it('should return error: invalid dataType', () => {
            cy.request({
                method: 'GET',
                url: weatherUrl,
                qs: {
                    dataType: 'abc',
                }
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.headers))
                    expect(response.status).to.eq(200)
                    expect(response.headers.connection).to.eq('Keep-Alive')
                    expect(response.headers["content-type"]).to.eq('text/html; charset=utf-8')
                    expect(response.body).to.include("Please include valid parameters in API request.")
                })
        })
        it('should return error: dataType incorrect type', () => {
            cy.request({
                method: 'GET',
                url: weatherUrl,
                qs: {
                    dataType: 123,
                }
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.headers))
                    expect(response.status).to.eq(200)
                    expect(response.headers.connection).to.eq('Keep-Alive')
                    expect(response.headers["content-type"]).to.eq('text/html; charset=utf-8')
                    expect(response.body).to.include("Please include valid parameters in API request.")
                })
        })
        it('should return error: lang incorrect type', () => {
            cy.request({
                method: 'GET',
                url: weatherUrl,
                qs: {
                    dataType: "rhrread",
                    lang: 123
                }
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.headers))
                    expect(response.status).to.eq(200)
                    expect(response.headers.connection).to.eq('Keep-Alive')
                    expect(response.headers["content-type"]).to.eq('text/html; charset=utf-8')
                    expect(response.body).to.include("Please include valid parameters in API request.")
                })
        })
        it('should return error: no parameter', () => {
            cy.request({
                method: 'GET',
                url: weatherUrl,
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.headers))
                    expect(response.status).to.eq(200)
                    expect(response.headers.connection).to.eq('Keep-Alive')
                    expect(response.headers["content-type"]).to.eq('text/html; charset=utf-8')
                    expect(response.body).to.include("Please include valid parameters in API request.")
                })
        })
        it('should return error: wrong parameter', () => {
            cy.request({
                method: 'GET',
                url: weatherUrl,
                qs: {
                    dataTypex: "rhrread",
                    langx: 'en'
                }
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.headers))
                    expect(response.status).to.eq(200)
                    expect(response.headers.connection).to.eq('Keep-Alive')
                    expect(response.headers["content-type"]).to.eq('text/html; charset=utf-8')
                    expect(response.body).to.include("Please include valid parameters in API request.")
                })
        })
    })
})