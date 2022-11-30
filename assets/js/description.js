fetch(`https://api.rawg.io/api/games?key=1ab0c2418c6f436fb12e30f50bea9231&dates=2019-09-01,2019-09-30&platforms=18,1,7`).then(resposta => {
    return resposta.json()
}).then(response => {
    let data = response.results;
    
    data.map(element => { 
        
        const root = document.getElementById('root');
        const urlParams = new URLSearchParams(window.location.search);
        const id        = urlParams.get('id')
        const div       = document.createElement("div");
        const img       = document.createElement("img");
        const sec_div   = document.createElement("div");
        const ul        = document.createElement("ul");
        const p         = document.createElement("p");
        const first_ul  = document.createElement("ul");
        const second_ul = document.createElement("ul");
        const first_paragraph  = document.createElement("p");
        const second_paragraph = document.createElement("p");
        const third_paragraph  = document.createElement("p");
        const platforms = [];
        const genres    = [];
        const stores    = [];

        if(element.id == id) {
            div.setAttribute('class', 'card');
            div.setAttribute('style', '18rem');
            img.setAttribute('src', element.background_image);
            img.setAttribute('class', 'card-img-top');
            sec_div.setAttribute('class', 'card-body');

            element.platforms.map(elem => {
                platforms.push(elem.platform.name);

                p.innerHTML = 'Plataformas: ';
                ul.appendChild(p);
            });

            for (let i = 0; i < platforms.length; i++) {
                var li         = document.createElement("li");
                
                li.textContent = platforms[i];

                ul.appendChild(li);
            }

            element.genres.map(elem => {
                genres.push(elem.name);

                first_paragraph.innerHTML = 'Gêneros: ';
                first_ul.appendChild(first_paragraph);
            });

            for (let i = 0; i < genres.length; i++) {
                var li1         = document.createElement("li");
                
                li1.textContent = `${genres[i]}`;

                first_ul.appendChild(li1);
            }

            element.stores.map(stored => {
                stores.push(stored.store.name);

                third_paragraph.innerHTML = 'Lojas: ';
                second_ul.appendChild(third_paragraph);
            });

            for (let i = 0; i < stores.length; i++) {
                var li2         = document.createElement("li");
                
                li2.textContent = `${stores[i]}`;

                second_ul.appendChild(li2);
            }

            second_paragraph.style.textAlign = 'center';
            second_paragraph.innerHTML = `Data da Atualização: ${element.updated}`;

            root.setAttribute('class', 'row');

            div.appendChild(img);
            div.appendChild(sec_div);
            sec_div.appendChild(ul);
            sec_div.appendChild(first_ul);
            sec_div.appendChild(second_ul);
            sec_div.appendChild(second_paragraph);
            root.appendChild(div);
        }
    });
});
