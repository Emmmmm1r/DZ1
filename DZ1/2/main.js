const lang = prompt('Введите язык:')

const Rus = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
const Eng = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']

switch (lang) {
    case 'RUS':
        console.log(Rus)
        break
    case 'ENG':
        console.log(Eng)
        break
    default:
        console.log("This language doesn't exist, please type correct one.")
        break
}