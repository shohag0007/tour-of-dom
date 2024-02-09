    
    const main = document.getElementById('main-container');
    const section = document.createElement('section');
    section.innerHTML = `<h1> My Daynamic Section.</h1>
    <p>Extra Text</p>
    <ul>
    <li>First Item</li>
    <li>Second Item</li>
    <li>Third Item</li>
    <li>Fourth Item</li>
    
    </ul>
`
main.appendChild(section);