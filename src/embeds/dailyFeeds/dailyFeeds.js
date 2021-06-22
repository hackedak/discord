const { default: axios } = require('axios');
const xml2js = require('xml2js')
const dailyFeedEmbedGenerator = require('./dailyFeedsTemplate')

class DailyFeeds {

    fetchedFeeds = new Array;


    fetchDailyFeeds = async () => {
        const rss_uri = `https://portswigger.net/daily-swig/rss`;
        let rawFeeds = await axios.get(rss_uri);
        xml2js.parseString(rawFeeds.data, (err, result) => {
            if (err) {
                throw err
            }
            rawFeeds = result.rss.channel[0].item;
        })
        rawFeeds.forEach(element => {
            if (element.hasOwnProperty('guid')) {
                delete element.guid;
            }
        });
        return rawFeeds

    }

    showDailyFeeds = (channel) => {
        let arrayOfFeeds = new Array;
        this.fetchDailyFeeds()
            .then((fetchedData) => {
                fetchedData.slice(0, 5).forEach(element => {
                    arrayOfFeeds.push({
                        name: element.title[0],
                        value: element.description[0]
                    })
                });
            })
            .then(() => {
                dailyFeedEmbedGenerator.fields = arrayOfFeeds
            })
            .then(() => {
                channel.send({ embed: dailyFeedEmbedGenerator });
            })

    }

}

module.exports = DailyFeeds