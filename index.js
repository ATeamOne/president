const { log } = require('console');
const fs = require('fs');
const puppeteer = require('puppeteer');

const axios = require('axios');

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    let documents = []; 
    let hasPage = true;
    let currentPage = 1;
    do {
        let json = `https://president.az/az/documents/category/letters/${currentPage}/json`
        async function foo() {
            let obj;
            try {
              obj = await axios.get(json).then((res) => res.data);
              for (const resItem of obj.list) {
                let url = 'https://president.az/az/articles/view/' + resItem.id;
                console.log(url);
                await page.goto(url)
                documents.push(await page.$$eval('.main-content_events', (elements) =>
                  (
                    {
                      title: elements[0].querySelector('.breadcrumbs_list li:nth-child(1)').innerText,
                      subtitle: elements[0].querySelector('.breadcrumbs_list li:nth-child(2)').innerText,
                      date: elements[0].querySelector('.news_date').innerText,
                      textTitle: elements[0].querySelector('.news_heading').innerText,
                      text: elements[0].querySelector('.news_paragraph-block').innerText,
                    }
                  )
                ));
              }
            } catch (error) {
              hasPage = false
            }
          }
        await foo();


        currentPage++;
    }
    while (hasPage)


    fs.writeFile('documentsLetters.json', JSON.stringify(documents), (err) => {
        if (err) throw err;
        console.log('File saved');
    });

    await browser.close()
}

run()