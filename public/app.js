
showContacts = () => {

    //divContactList.hidden = false;

    var ulList = document.getElementById('contactUlList');
    ulList.innerHTML = '';

    const XHR = new XMLHttpRequest();

    XHR.onload = () => {

        contactsArray = JSON.parse(XHR.responseText);

        var array = [];

        array.push(contactsArray);
        
        console.log(array);

        for (const key in array) {
            
            var listElements = document.createElement('li');

            listElements.innerHTML = (JSON.stringify(array[key]));
    
            ulList.appendChild(listElements);

        }

        array.forEach(contact => {

            var listElements = document.createElement('li');

            listElements.innerHTML = (JSON.stringify(`${contact.contacts.name} - ${contact}`));
    
            ulList.appendChild(listElements);

        }); 


    }

    XHR.open('GET', '/contacts');
    XHR.send();
}