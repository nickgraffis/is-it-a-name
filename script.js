const fs = require('fs')
const go = async () => {
  const years = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
  let allNames = []
  for (let i = 0; i < years.length; i++) {
    let year = years[i]
    console.log(`${i}/${years.length}`)
    let boys = fs.readFileSync(`./data/${year}/boy_names_${year}.json`, 'utf8')
    allNames = [
      ...allNames,
      ...JSON.parse(boys).names
    ]
    let girls = fs.readFileSync(`./data/${year}/girl_names_${year}.json`, 'utf8')
    allNames = [
      ...allNames,
      ...JSON.parse(girls).names
    ]
  }
  const uniqueNames = [...new Set(allNames)]
  fs.writeFileSync('./data/allNames.json', JSON.stringify(uniqueNames))
}

go()