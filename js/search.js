
const idx = lunr.Index.load(JSON.parse(searchIDX));

function searchSite(query) {
    const result = idx.search(query);
  
    var matches = result.map(item => {
      return site.find(p => item.ref === p.id);
    });
    return convertSearchResultsToLinks(matches, query);
}
function convertSearchResultsToLinks(searchResults, query) {
    if(searchResults) {
        var links = searchResults.map(function(r,index) {
            return`<h5 class="search-title" style="margin-bottom:10px;text-align: left;"><a target="_top" href="${r.page}" class="search-link">${r.name}</a></h5>`;
        });
        
        return links;
    } else { return []; }
}

