import './css/style.css'
import LegalEntity from './js/legalEntity'

const selectPharmaciesButton = document.querySelector('#selectEntityButton')

LegalEntity.showEntityes()

selectPharmaciesButton.addEventListener('click', () => {
    console.log('Select button clicked')
})