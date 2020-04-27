import legalEntity from '../data/legalentity.json'

class LegalEntity {
    static showEntityes() {
        const tbody = document.querySelector('tbody')
        for (let entity of legalEntity) {
            const tr = document.createElement('tr')
            const name = document.createElement('td')
            const address = document.createElement('td')
            const city = document.createElement('td')
            const country = document.createElement('td')

            name.textContent = entity.legalEntityName
            address.textContent = entity.address1 + ' ' + entity.address2
            city.textContent = entity.city
            country.textContent = entity.country

            tr.append(name)
            tr.append(address)
            tr.append(city)
            tr.append(country)
            tr.setAttribute('data-id', entity.legalEntityID)
            tr.setAttribute('data-name', entity.legalEntityName)
            tr.classList.add('row')
            tr.firstChild.insertAdjacentHTML('afterbegin', '<i class="fa fa-check" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp;&nbsp;')

            tbody.append(tr)
        }
    }
}

export default LegalEntity