const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({ node: 'http://localhost:9200' })


let articleList = require('../helpers/articles.json');
//config articles

module.exports.searchArticle = async (searchWord) => {
    let results = await client.search({
        index: 'article',
        type: 'article',
        body: {
            query: {
                match: {
                    "Step_By_Step": {
                        "query": searchWord,
                        "fuzziness": 5,
                        "prefix_length": 3
                    }
                }
            }
        }
    });

    console.log(results, 'results.hits.hits._source');
    return results.hits.hits._source;


}

