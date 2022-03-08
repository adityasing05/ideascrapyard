"use strict"

// Loads the data
fetch("ideas.json")
    .then(response => response.json())
    .then(json => {
        const main = document.querySelector('main')

        json.forEach(element => {
            const html = `
                <div class="idea">
                    <a href="${element.link}"><h2>${element.name}</h2></a>
                    (<time datetime="${element.opened}">${element.opened}</time> - <time datetime="${element.closed}">${element.closed}</time>)
                    <p>${element.description}</p>
                </div>
            `;

            let template = document.createElement('template');
            template.innerHTML = html

            main.append(template.content)
        });
    });