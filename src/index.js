const axios = require('axios')
const { JSDOM } = require('jsdom')
const fs = require('fs')
async function createSiteDuplicate() {
    await axios.get('https://www.youtube.com/').then(res => {
        const dom = new JSDOM(res.data)
        fs.writeFile('index.html', dom.serialize(), (err) => {
            if (err) console.error(err)
            console.log('Criado')
        })
    }
    )
}
createSiteDuplicate()