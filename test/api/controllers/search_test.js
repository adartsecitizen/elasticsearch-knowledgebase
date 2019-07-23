var should = require('should');
const searchService = require('../../../api/controllers/search');

describe('Search Tests', () => {
  it('Some Test', async () => {
    let test = await searchService.searchArticle('utiliza');
  })
});
