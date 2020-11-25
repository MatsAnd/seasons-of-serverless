[👈🏼 &nbsp; Go back](../README.md)<br/>

# Challenge 1: The Perfect Holiday Turkey 🦃

## API

### ``GET /turkey/{weight}``

Provide the weight in lbs (default unit), or specify the unit. Example: ``/turkey/2 kg``<br/>
Currently supported units are lbs, kg and g.

#### Example

<div style="float: right">
  <a href="https://ma-func-sos-01.azurewebsites.net/api/turkey/8">🔗 &nbsp; Open example </a>
</div>

``GET /turkey/8``
```json
{
  "Salt": "0.4 cup",
  "Water": "5.28 cups",
  "Brown Sugar": "1.04 cups",
  "Shallots": "1.6",
  "Cloves of garlic": "3.2",
  "Whole peppercorns": "1.04 tablespoons",
  "Dried juniper berries": "1.04 tablespoons",
  "Fresh rosemary": "1.04 tablespoons",
  "Thyme": "0.48 tablespoon",
  "Brine time": "19.2 hours",
  "Roast time": "120 hours"
}
```