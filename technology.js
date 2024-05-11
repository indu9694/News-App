
const main=document.getElementById('articles-container');


let data;
let dataLength=0;

async function getData(){
    const res =await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6ac6b89925ae4fa7be0134af19540a6d");
    const result=await res.json();
    data=result.articles;
    dataLength=data.Length;
    renderUI();
    console.log("\n: data:", data);

    

}

getData();

function renderUI(){
    for(let i=0;i<16;i++){
        const article=document.createElement('article');
        article.innerHTML=`
        <a href="${data[i].url}" target="_blank">
            <img class="art-img"  src="${data[i].urlToImage}">
            <div class="articles-content">
                <h4 id="heading-1">${data[i].title}</h4>
                <p><b>Author-</b>${data[i].author}</p>
                <p>
                    ${data[i].description}
                </p>
                 
            </div>
        </a>`;
            main.appendChild(article);
    }
}