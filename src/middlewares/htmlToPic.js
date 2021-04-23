const { MessageAttachment } = require('discord.js')
const nodeHtmlToImage = require('node-html-to-image')

module.exports = async (name, _htmlTemplate) => {

  const images = await nodeHtmlToImage({
    html: _htmlTemplate,
    quality: 100,
    type: 'jpeg',
    puppeteerArgs: {
      args: ['--no-sandbox'],
    },
    encoding: 'buffer',
  })
// for more configuration options refer to the library

  return new MessageAttachment(images, `${name}.jpeg`)
}