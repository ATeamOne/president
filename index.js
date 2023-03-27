const fs = require('fs');
const puppeteer = require('puppeteer');

async function run(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // await page.goto('https://president.az/az/documents'),
    // await page.goto('https://president.az/az/documents/category/letters'),
    // await page.goto('https://president.az/az/documents/category/decrees'),
    // await page.goto('https://president.az/az/documents/category/orders'),
    // await page.goto('https://president.az/az/documents/category/addresses')
    // await page.goto('https://president.az/az/documents/category/statements'),
    await page.goto('https://president.az/az/documents/category/laws')


    // await page.screenshot({path: 'example.png', fullPage:true})
    // await page.pdf({path: 'example.pdf', format:'A4'})

    // const html = await page.content();
    // console.log(html);

    // const title = await page.evaluate(() => document.title);
    // console.log(title)

    // const text = await page.evaluate(() => document.body.innerText);
    // console.log(text)

    // const links = await page.evaluate(() => Array.from(document.querySelectorAll('a'), (e)=>e.href));
    // console.log(links);

    // const courses = await page.evaluate(() => Array.from(document.querySelectorAll('a'), (e)=>e.href));

    // const documents = await page.$$eval('.news-feed .news-feed_feed .news-text', (elements) =>
    // elements.map((e) => ({
    //   title: e.querySelector('.news-text_category .category_title').innerText,
    //   subtitle: e.querySelector('.news-text_category .category_descr').innerText,
    //   date: e.querySelector('.news-text_category .category_date').innerText,
    //   textTitle: e.querySelector('.news-text_body span').innerText,
    //   text: e.querySelector('.news-text_body p').innerText,
    //   textDate: e.querySelector('.news-text_body .text_body-date').innerText
    // })));
//   Save data to JSON file
    // fs.writeFile('documents.json', JSON.stringify(documents), (err) => {
    //     if (err) throw err;
    //     console.log('File saved');
    // });

    // const documentsLetter = await page.$$eval('.news-feed .news-feed_feed .news-text', (elements) =>
    // elements.map((e) => ({
    //   title: e.querySelector('.news-text_category .category_title').innerText,
    //   subtitle: e.querySelector('.news-text_category .category_descr').innerText,
    //   date: e.querySelector('.news-text_category .category_date').innerText,
    //   textTitle: e.querySelector('.news-text_body span').innerText,
    //   text: e.querySelector('.news-text_body p').innerText,
    //   textDate: e.querySelector('.news-text_body .text_body-date').innerText
    // })));

    // fs.writeFile('documentsLetter.json', JSON.stringify(documentsLetter), (err) => {
    //     if (err) throw err;
    //     console.log('File saved');
    // });


    // const documentsDecrees = await page.$$eval('.news-feed .news-feed_feed .news-text', (elements) =>
    // elements.map((e) => ({
    //   title: e.querySelector('.news-text_category .category_title').innerText,
    //   subtitle: e.querySelector('.news-text_category .category_descr').innerText,
    //   date: e.querySelector('.news-text_category .category_date').innerText,
    //   textTitle: e.querySelector('.news-text_body span').innerText,
    //   text: e.querySelector('.news-text_body p').innerText,
    //   textDate: e.querySelector('.news-text_body .text_body-date').innerText
    // })));

    // fs.writeFile('documentsDecrees.json', JSON.stringify(documentsDecrees), (err) => {
    //     if (err) throw err;
    //     console.log('File saved');
    // });

    // const documentsOrders = await page.$$eval('.news-feed .news-feed_feed .news-text', (elements) =>
    // elements.map((e) => ({
    //   title: e.querySelector('.news-text_category .category_title').innerText,
    //   subtitle: e.querySelector('.news-text_category .category_descr').innerText,
    //   date: e.querySelector('.news-text_category .category_date').innerText,
    //   textTitle: e.querySelector('.news-text_body span').innerText,
    //   text: e.querySelector('.news-text_body p').innerText,
    //   textDate: e.querySelector('.news-text_body .text_body-date').innerText
    // })));

    // fs.writeFile('documentsOrders.json', JSON.stringify(documentsOrders), (err) => {
    //     if (err) throw err;
    //     console.log('File saved');
    // });

    // const documentsAddresses = await page.$$eval('.news-feed .news-feed_feed .news-text', (elements) =>
    // elements.map((e) => ({
    //   title: e.querySelector('.news-text_category .category_title').innerText,
    //   subtitle: e.querySelector('.news-text_category .category_descr').innerText,
    //   date: e.querySelector('.news-text_category .category_date').innerText,
    //   textTitle: e.querySelector('.news-text_body span').innerText,
    //   text: e.querySelector('.news-text_body p').innerText,
    //   textDate: e.querySelector('.news-text_body .text_body-date').innerText
    // })));

    // fs.writeFile('documentsAddresses.json', JSON.stringify(documentsAddresses), (err) => {
    //     if (err) throw err;
    //     console.log('File saved');
    // });

    // const documentsStatements = await page.$$eval('.news-feed .news-feed_feed .news-text', (elements) =>
    // elements.map((e) => ({
    //   title: e.querySelector('.news-text_category .category_title').innerText,
    //   subtitle: e.querySelector('.news-text_category .category_descr').innerText,
    //   date: e.querySelector('.news-text_category .category_date').innerText,
    //   textTitle: e.querySelector('.news-text_body span').innerText,
    //   text: e.querySelector('.news-text_body p').innerText,
    //   textDate: e.querySelector('.news-text_body .text_body-date').innerText
    // })));

    // fs.writeFile('documentsStatements.json', JSON.stringify(documentsStatements), (err) => {
    //     if (err) throw err;
    //     console.log('File saved');
    // });

    const documentsLaws = await page.$$eval('.news-feed .news-feed_feed .news-text', (elements) =>
    elements.map((e) => ({
      title: e.querySelector('.news-text_category .category_title').innerText,
      subtitle: e.querySelector('.news-text_category .category_descr').innerText,
      date: e.querySelector('.news-text_category .category_date').innerText,
      textTitle: e.querySelector('.news-text_body span').innerText,
      text: e.querySelector('.news-text_body p').innerText,
      textDate: e.querySelector('.news-text_body .text_body-date').innerText
    })));

    fs.writeFile('documentsLaws.json', JSON.stringify(documentsLaws), (err) => {
        if (err) throw err;
        console.log('File saved');
    });

    await browser.close()
}

run()