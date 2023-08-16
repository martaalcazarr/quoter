export function getDiferenceYear(year) {
    return new Date().getFullYear() -  year
}

export function calculateCompany(company){
    let increment 

    switch (company) {
        case "1":
            increment = 1.5;
            break;
        case "2":
            increment = 1.1
            break;
        case "3": 
            increment = 1.05
            break;
        default:
            break;
    }
    return increment
}