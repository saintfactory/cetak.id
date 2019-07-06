# Vue
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)

In this example we will be deploying a simple "Hello World" example with Vue CLI.

### Getting started with Vue

- Install the Vue CLI:

```
npm install -g @vue/cli
```

- Create your Vue project:

```
vue create <project name>
```

### Deploy with Now

First we need to create a `now.json` configuration file to instruct Now how to build the project.

For this example we will be using our newest version [Now 2.0](https://zeit.co/now).

By adding the `version` key to the `now.json` file, we can specify which Now Platform version to use.

We also need to define each builders we would like to use. [Builders](https://zeit.co/docs/v2/deployments/builders/overview/) are modules that take a deployment's source and return an output, consisting of [either static files or dynamic Lambdas](https://zeit.co/docs/v2/deployments/builds/#sources-and-outputs).

In this case we are going to use `@now/static-build` to build and deploy our Vue application selecting the `package.json` as our entry point. We will also define a name for our project (optional). The `routes` property makes sure requests like `/non-existent-page` are routed to the Vue `index.html`.

```json
{
    "version": 2,
    "name": "vue",
    "builds": [
        { "src": "package.json", "use": "@now/static-build" }
    ],
    "routes": [
      {"src": "^/js/(.*)", "dest": "/js/$1"},
      {"src": "^/css/(.*)", "dest": "/css/$1"},
      {"src": "^/img/(.*)", "dest": "/img/$1"},
      {"src": ".*", "dest": "/index.html"}
    ]
}
```

Visit our [documentation](https://zeit.co/docs/v2/deployments/configuration) for more information on the `now.json` configuration file.

We also need to include a script in `package.json` named `"now-build"` that specifies what command Now will run on the server to "build" your application. Also notice that we are using `npm run build` that will create a folder called `dist` which Now identifies as the static folder.

```json
{
    "scripts": {
      ...
      "build": "vue-cli-service build",
      "now-build": "npm run build",
    },
}
```

We are now ready to deploy the app.

```
now
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://medium.com/@azraqazravin"><img src="https://avatars2.githubusercontent.com/u/36470351?v=4" width="100px;" alt="Alvin Miftah"/><br /><sub><b>Alvin Miftah</b></sub></a><br /><a href="https://github.com/saintfactory/cetak.id/commits?author=alvinisasi" title="Code">💻</a> <a href="https://github.com/saintfactory/cetak.id/commits?author=alvinisasi" title="Tests">⚠️</a> <a href="#tool-alvinisasi" title="Tools">🔧</a> <a href="#maintenance-alvinisasi" title="Maintenance">🚧</a></td><td align="center"><a href="https://github.com/sodrooome"><img src="https://avatars0.githubusercontent.com/u/37971350?v=4" width="100px;" alt="Ryan"/><br /><sub><b>Ryan</b></sub></a><br /><a href="https://github.com/saintfactory/cetak.id/commits?author=sodrooome" title="Code">💻</a> <a href="https://github.com/saintfactory/cetak.id/commits?author=sodrooome" title="Documentation">📖</a> <a href="#infra-sodrooome" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/saintfactory/cetak.id/commits?author=sodrooome" title="Tests">⚠️</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!