
showContacts = () => {

    //divContactList.hidden = false;

    var ulList = document.getElementById('contactUlList');
    ulList.innerHTML = '';

    const XHR = new XMLHttpRequest();

    XHR.onload = () => {

        contactsArray = JSON.parse(XHR.responseText);

        contactsArray.contacts.forEach(contact => {

            var listElements = document.createElement('li');

            listElements.innerHTML = (`${contact.name} - ${contact.number}`);
    
            ulList.appendChild(listElements);

        }); 


    }

    XHR.open('GET', '/contacts');
    XHR.send();
}