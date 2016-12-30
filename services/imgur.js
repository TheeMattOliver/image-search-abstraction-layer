const request = require('request');

exports.getImage = function(search, page = 1) {
	return new Promise((resolve, reject) => {
      let options = {
        url: `https://api.imgur.com/3/gallery/search/${page}?q=${search}`,
        headers: { Authorization: 'Client-ID 1632aa86d5c03f9'},
        json: true,
      };

    function getPics(err, response, body) {
      if(!err && response.statusCode == 200) {
        // filter out any items in response body that are albums - if we left albums
        // in we couldn't add direct links to image and image's context
        body = body.data.filter(image => {
          if(!image.is_album) {
            return image;
          }
          // map over the filtered response and return only a 
          // url, a snippet and the context
        }).map(image => {
          return {
            url: image.link,
            snippet: image.title,
            context: `https://imgur.com${image.id}`
          };
        })
        resolve(body)
      }
    }
  
    request(options, getPics);

  });
};
