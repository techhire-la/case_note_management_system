function parseJson(json) {
    var newJSON = []

    for(var i = 0 ; i < json.length ; i++){
        let element = {}

        if (json[i].emailOne_customerProfile !== ""){
            const email = json[i].emailOne_customerProfile
            const firstName = json[i].nameFirst_customerProfile
            const lastName = json[i].nameLast_customerProfile

            const phoneNum = json[i].telephoneTwo_customerProfile


            const addy1 = json[i].mailingStreetAddressOne_customerProfile
            //if exists
            // if (json[i].mailingStreetAddressTwo_customerProfile !== ""){
            const addy2 = json[i].mailingStreetAddressTwo_customerProfile
            // }

            const city = json[i].mailingAddressCity_customerProfile
            const state = json[i].mailingAddressState_customerProfile
            const zip = json[i].mailingAddressZipCode_customerProfile

            var addy = addy1 + " " + addy2 + ", " + city + ", " + state + ", " + zip

            element.email = email
            element.first_name = firstName
            element.last_name = lastName
            element.phone = phoneNum
            element.address = addy
            element.active = true

            newJSON.push(element)
        }else{

        }



    }

    return newJSON

}