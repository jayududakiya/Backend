const getPersons = async ( ) : Promise<any> => {
    const rep =  await fetch('example.com/api/user')
    const data =  await rep.json()
    return data;
}

getPersons()