/*
 * Complete the 'getArticleTitles' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING author as parameter.
 * 
 * URL for cut and paste: 
 * https://jsonmock.hackerrank.com/api/articles?author=<authorName>&page=<num>
 *
 */


const API_URL = 'https://jsonmock.hackerrank.com/api/articles?author=';

async function fetchData(query) {
    return new Promise(function (resolve, reject) {
        https.get(`${API_URL}${query}`, (resp) => {
            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                resolve(JSON.parse(data));

            }).on("error", (err) => {
                reject('Err: ' + err.message);
            });
        })
    })
}

async function getArticleTitles(author) {
    let arrayOfTitles = [], totalPages = 1, currentPage = 1, promises = [];
    let response = await fetchData(author);
    // console.log(response);
    totalPages = response.total_pages;
    currentPage = response.page;

    arrayOfTitles = getTitles(response.data);

    for (let i = currentPage + 1; i <= totalPages; i++) {
        promises.push(fetchData(`${author}&page=${i}`));
    }
    let resp = await Promise.all(promises);
    arrayOfTitles.push(...getArticleFromPromise(resp));
    return arrayOfTitles;
}

function getArticleFromPromise(promisesResp) {
    let arrayOfTitles = [];
    promisesResp.map(article => {
        arrayOfTitles.push(...getTitles(article.data));
    });
    return arrayOfTitles;
}

function getTitles(articles) {
    let arrayOfTitles = [];
    articles.map(article => {
        if (article.title) {
            arrayOfTitles.push(article.title)
        } else if (article.story_title) {
            arrayOfTitles.push(article.story_title)
        }
    });
    return arrayOfTitles;
}

getArticleTitles('zar').then(r => console.log(r));