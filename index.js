const express = require('express');
const vega = require('vega');
const app = express();
app.get('/vega', (request, response) => {

  const spec = JSON.parse(request.query.spec);
  getSVG(spec, response);
  // let res = render(spec, response);
  // console.log('response', res);

});

async function getSVG(spec, response) {
  const view = new vega.View(vega.parse(spec), {
      loader: vega.loader(),
      logLevel: vega.Warn,
      renderer: 'none'
    })
    .initialize()
    .finalize();

  return (view.toSVG(1))
    .then(_ => {
      //console.log(_);
      console.log("Processed SVG request at -", Date.now()); 
    response
    .set('Cache-Control', `public, max-age=${60 * 60}`)
    .type('svg').send(_); 
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`)); // eslint-disable-line no-console
