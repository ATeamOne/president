const { log } = require('console');
const fs = require('fs');
const puppeteer = require('puppeteer');


async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // let documentsLaws = [];
    // let hasPage = true;
    // let currentPage = 1;
    // do {
    //     let json = `https://president.az/az/first_vice_president_news/index/${currentPage}/json`
    //     async function foo() {
    //         let obj;

    //         const res = await fetch(json)
    //         try {
    //             obj = await res.json();
    //             for (const resItem of obj.list) {
    //                 let url = 'https://president.az/az/articles/view/' + resItem.id;
    //                 console.log(url);
    //                 await page.goto(url)
    //                 documentsLaws.push(await page.$$eval('.main-content_events', (elements) =>
    //                 (
    //                     {
    //                         title: elements[0].querySelector('.breadcrumbs_list li:nth-child(1)')?.innerText,
    //                         subtitle: elements[0].querySelector('.breadcrumbs_list li:nth-child(2)')?.innerText,
    //                         date: elements[0].querySelector('.news_date')?.innerText,
    //                         textTitle: elements[0].querySelector('.news_heading')?.innerText,
    //                         text: elements[0].querySelector('.news_paragraph-block')?.innerText,
    //                     }
    //                 )
    //                 ));
    //             }
    //         } catch (error) {
    //             hasPage = false
    //         }
    //     }
    //     await foo();


    //     currentPage++;
    // }
    // while (hasPage)


    // fs.writeFile('firstVicePresident.json', JSON.stringify(documentsLaws), (err) => {
    //     if (err) throw err;
    //     console.log('File saved');
    // });

    
    // documentsLaws = [];
    // hasPage = true;
    // currentPage = 1;
    let url = 'https://president.az/az/pages/view/first-vice-president/services';
    await page.goto(url)
    const obj = await page.$$eval('.main-content_events', (elements) =>
        (
            {
                manager: elements[0].querySelector('.general-container p:nth-child(1)')?.innerText,
                viceManager: elements[0].querySelector('.general-container p:nth-child(2)')?.innerText,
                assistant1: elements[0].querySelector('.general-container p:nth-child(3)')?.innerText,
                assistant2: elements[0].querySelector('.general-container p:nth-child(4)')?.innerText,
                assistant3: elements[0].querySelector('.general-container p:nth-child(5)')?.innerText,
                assistant4: elements[0].querySelector('.general-container p:nth-child(6)')?.innerText,
            }
        )
    )
    fs.writeFile('firstVicePresidentServices.json', JSON.stringify(obj), (err) => {
        if (err) throw err;
        console.log('File saved');
    });
    await browser.close()
}

run()