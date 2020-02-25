export default {
  propercase: text => text.split("").map((item,index) => index === 0 ? item.toUpperCase() : item).join(""),
  clone: data => JSON.parse(JSON.stringify(data)),
  numberList: limit => {
    const list = [];
  	for (var i = 0; i < limit; i++) {
      list.push(i);
    }
    return list;
  }
};



// {
	// 	"name": "Gone Girl(2014)",
	// 	"img": "https://upload.wikimedia.org/wikipedia/en/0/05/Gone_Girl_Poster.jpg"
	// },
	// {
	// 	"name": "Deadpool(2016)",
	// 	"img": "https://www.dvd-trailers.gr/dvd/deadpool_2016.jpg"
	// },
	// {
	// 	"name": "Aladdin (2019)",
	// 	"img": "https://upload.wikimedia.org/wikipedia/en/9/9a/Aladdin_%28Official_2019_Film_Poster%29.png"
	// },

	// {
	// 	"name": "Captain Marvel (2019)",
	// 	"img": "https://upload.wikimedia.org/wikipedia/en/8/85/Captain_Marvel_poster.jpg"
	// },

	// {
	// 	"name": "Bird Box(2018)",
	// 	"img": "https://upload.wikimedia.org/wikipedia/en/b/bd/Bird_Box_%28film%29.png"
	// },


	// {
	// 	"name": "The Emoji Movie(2017)",
	// 	"img": "https://upload.wikimedia.org/wikipedia/en/6/63/The_Emoji_Movie_film_poster.jpg"
	// },

	// {
	// 	"name": "Clash of The Titans(2010)",
	// 	"img": "https://1.bp.blogspot.com/_Z3BUX71Sca8/S7avZb1rQLI/AAAAAAAAJv4/ap3fGeACzYw/s400/clashofthetitans-11.jpg"
	// },

	// {
	// 	"name": "Fifty Shades of Grey(2015)",
	// 	"img": "https://upload.wikimedia.org/wikipedia/en/7/73/Fifty_Shades_of_Grey_poster.jpg"
	// },

	// {
	// 	"name": "Twilight(2008)",
	// 	"img": "https://upload.wikimedia.org/wikipedia/en/b/b6/Twilight_%282008_film%29_poster.jpg"
	// }
