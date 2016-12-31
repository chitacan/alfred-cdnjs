const alfy = require('alfy');

alfy.fetch('https://api.cdnjs.com/libraries', {
  query: {
    search: alfy.input,
    fields: 'version,description'
  }
})
.then(data => {
  const items = data.results
    .filter(d => d.name.length > 1)
    .map(d => {
      const mods = d.repository === null ? {} : {
        alt: {
          arg: `https://cdnjs.com/libraries/${d.name}`,
          subtitle: 'Open cdnjs page'
        }
      };
      return {
        title: `${d.name}@${d.version}`,
        subtitle: d.description,
        arg: d.latest,
        mods
      };
    });
  alfy.output(items);
})
.catch(err => alfy.error(err));
