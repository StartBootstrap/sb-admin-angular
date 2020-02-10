# SB Admin Angular

## Quick Start

```bash
git clone git@github.com:startbootstrap/sb-admin-angular.git
cd sb-admin-angular
npm install
npm start
```

`npm start` should open a browser window to <http://localhost:4200>

By default angular runs on port 4200. To change this port you can run:

```bash
# This starts the development server on port 4205,
# but you can use any port you'd like
export PORT=4205 && npm start
```

### Troubleshooting npm start

If you receive memory issues (most likely on Linux, but could technically happen on any system) adjust
`max_old_space_size` in the `ng` command of the `package.json`:

```json
"ng": "node --max_old_space_size=2048 ./node_modules/.bin/ng",
```

You can adjust 2048 to any number you need.

For more information about why you may need `--max_old_space_size`
see [this article](https://medium.com/@ashleydavis75/node-js-memory-limitations-30d3fe2664c0).
However keep in mind that this project only uses node to build the angular application.
There is no production dependency on node.
