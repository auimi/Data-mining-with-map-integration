import fs from 'fs';
import path from 'path';
import cheerio from 'cheerio';

const fetchSchoolData = async (filePath) => {
  const htmlContent = await fs.promises.readFile(filePath, 'utf-8');
  const $ = cheerio.load(htmlContent);

  const school = {
    name: $('#name').text(),
    type: $('#type').text(),
    url: filePath,
    data: $('body').text(),
  };

  return school;
};

const scrapeAndWriteData = async (directoryPath) => {
  const schoolData = [];

  try {
    const files = await fs.promises.readdir(directoryPath);

    for (const file of files) {
      const filePath = path.join(directoryPath, file);

      if (path.extname(file) === '.html') {
        const school = await fetchSchoolData(filePath);
        schoolData.push(school);
      }
    }

    await fs.promises.writeFile('schoolData.json', JSON.stringify(schoolData, null, 2));
    console.log('Data scraped and written to schoolData.json');
  } catch (error) {
    console.error('Error fetching or writing school data:', error);
  }
};

const startWatching = (folderPath) => {
  const watcher = fs.watch(folderPath, { encoding: 'utf-8' }, (eventType, filename) => {
    if (filename && path.extname(filename) === '.html') {
      const filePath = path.join(folderPath, filename);
      console.log(`File ${filePath} changed. Triggering scraping...`);
      scrapeAndWriteData(folderPath);
    }
  });

  console.log(`Watching for changes in ${folderPath}...`);
};

// Specify the path to your local directory
const directoryPath = '/Users/mauisierra/Desktop/schools';

// Initial data scrape and write
scrapeAndWriteData(directoryPath);

// Start watching for changes
startWatching(directoryPath);
