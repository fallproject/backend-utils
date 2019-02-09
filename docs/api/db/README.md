---
sidebar: auto
prev: /api/
next: /api/db/mongo/
---
::: tip
Use Destructuring and Submodules for Smaller Bundles.
```js
const { Mongo } = "@fallutils/backend/db"
``` 
:::
# Unified Class-Based Database APIs
## Constructor
### Properties
#### Options
* Type: `Object`
* Database Specific Options
## addItem
### Properties
#### data
* Type: `Object`
* Object with data to be added to the database
#### collection
* Type: `Collection`
* Default: `this._collections[]`
* Implimented In: [Mongo](mongo/)