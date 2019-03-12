# A Node.js server with an api to convert vega-spec to SVG string 

A Node.js server with an api to convert vega-spec to SVG string. 

## API Details

You can convert any Vega specification to SVG by sending it to `/vega` with the `spec` query paramter.

Example:

```
curl -X GET \
  http://localhost:3000/vega?spec=<encoded-vega-spec>

```
