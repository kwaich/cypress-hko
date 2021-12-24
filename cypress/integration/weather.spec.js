/// <reference types="cypress" />
const baseUrl = "https://data.weather.gov.hk/weatherAPI/opendata"
describe('Weather api', () => {
    context('GET /weather.php', () => {
        it('should return local weather forecast (flw)', () => {
            cy.request({
                method: 'GET',
                url: baseUrl + '/weather.php',
                qs: {
                    dataType: 'flw',
                    lang: 'en'
                }
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.eq(200)
                    expect(response.body).to.have.all.keys(
                        'generalSituation', 'tcInfo', 'fireDangerWarning', 'forecastPeriod', 'forecastDesc', 'outlook', 'updateTime'
                    )
                });

        });
    });
});