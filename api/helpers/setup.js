const articleIndex = 'article';
const articleType = 'article'

module.exports.setupArticles = async () => {
    await client.indices.create({
        index: 'article'
    })

    for (let i = 0; i < articleList.length; i++) {
        await client.index({
            index: 'article',
            id: i + '',
            type: 'article',
            body: {
                urlName: articleList[i].urlName,
                title: articleList[i].title,
                Step_By_Step: articleList[i].Step_By_Step
            }
        })
    }
}
