# InsBob web quick start guide
Ignore this file. Just follow payload-samples.txt file.

- Angular Ionic code goes into client directly
- Loopback REST endpoints go into server and common directories
- Do node . to start both FE n BE
- FE UI is deployed at  http://0.0.0.0:3000
- BE Rest can be explored at http://0.0.0.0:3000/explorer
- You can use upload, load the url below to execute actual rest sample commands again IB BE.
-  https://www.getpostman.com/collections/095584a026865f1c8425

- YOU CAN STOP READING HERE UNLESS YOU WANT TO KNOW PARTICULARS.


# loopback-example-angular

```
$ git clone https://github.com/strongloop/loopback-example-angular.git
$ cd loopback-example-angular
$ npm install
$ node . # then browse to localhost:3000
```

A simple todo list using AngularJS on the client-side and LoopBack on the
server-side.

## Prerequisites

### Tutorials

- [Getting started with LoopBack](https://github.com/strongloop/loopback-getting-started)
- [Tutorial series, step 1](https://github.com/strongloop/loopback-example#the-basics)

### Knowledge of

- [Angular](https://angularjs.org/)
- [Angular Resource](https://docs.angularjs.org/api/ngResource/service/$resource)
- [AngularUI Router](https://github.com/angular-ui/ui-router)
- [Bootstrap](http://getbootstrap.com/)
- [Bower](http://bower.io/)
- [LoopBack](http://loopback.io/)
- [LoopBack AngularJS SDK](http://docs.strongloop.com/display/LB/AngularJS+JavaScript+SDK)
- [LoopBack models](http://docs.strongloop.com/display/LB/Defining+models)
- [LoopBack middleware](http://docs.strongloop.com/display/LB/Defining+middleware)

## Procedure

### Create the application

#### Application information

- Name: `loopback-example-angular`
- Directory to contain the project: `loopback-example-angular`

```
$ slc loopback loopback-example-angular
... # follow the prompts
$ cd loopback-example-angular
```

### Create the `Todo` model

#### Model information

- Name: `Todo`
  - Data source: `db (memory)`
  - Base class: `PersistedModel`
  - Expose over REST: `Yes`
  - Custom plural form: *Leave blank*
  - Properties:
    - `content`
      - String
      - Required

```
$ slc loopback:model Todo
... # follow the prompts
```

### Configure the vendor directory

In the project root, create [`.bowerrc`](https://github.com/strongloop/loopback-example-angular/blob/master/.bowerrc).

>Bower installs packages in `bower_components` by default, but we reconfigure
this to `client/vendor` to make [importing files into `index.html`](https://github.com/strongloop/loopback-example-angular/blob/master/client/index.html#L33-L37)
more convenient.

### Install client-side dependencies

From the project root, run:

```
$ bower install angular angular-resource angular-ui-router bootstrap
```

### Create the home page

Create [`index.html`](https://github.com/strongloop/loopback-example-angular/blob/master/client/index.html) in the [`client`](https://github.com/strongloop/loopback-example-angular/blob/master/client) directory.

### Create the main stylesheet

Create a [`css` directory](https://github.com/strongloop/loopback-example-angular/blob/master/client/css) to store stylesheets.

```
$ mkdir client/css
```

In this directory, create [`styles.css`](https://github.com/strongloop/loopback-example-angular/blob/master/client/css/styles.css).

### Serve static assets from the `client` directory

Delete `/server/boot/root.js`.

Add static middleware to the [`files` section in `middleware.json`](https://github.com/strongloop/loopback-example-angular/blob/master/server/middleware.json#L23-L27)
.

### Create `app.js`

Create a [`js` directory](https://github.com/strongloop/loopback-example-angular/blob/master/client/js) to hold scripts files.

```
$ mkdir client/js
```

In this directory, create [`app.js`](https://github.com/strongloop/loopback-example-angular/blob/master/client/js/app.js).

>Notice we declare [`lbServices`](https://github.com/strongloop/loopback-example-angular/blob/master/client/js/app.js#L3) as a dependency. We
will generate this file using the `lb-ng` command in a later step.

### Create `todo.html`

Create a [`views`](https://github.com/strongloop/loopback-example-angular/blob/master/client/views) to store view templates.

```
$ mkdir client/views
```

In this directory, create [`todo.html`](https://github.com/strongloop/loopback-example-angular/blob/master/client/views/todo.html).

### Create `controllers.js`

Create a [`controllers`](https://github.com/strongloop/loopback-example-angular/blob/master/client/js/controllers) directory to store controller
files.

```
$ mkdir client/js/controllers
```

In this directory, create [`todo.js`](https://github.com/strongloop/loopback-example-angular/blob/master/client/js/controllers/todo.js).

### Generate `lb-services.js`

Create a [`services` directory](https://github.com/strongloop/loopback-example-angular/blob/master/client/js/services) to store service files.

```
$ mkdir client/js/services
```

`lb-ng` is automatically installed along with the `slc` command-line tool (ie.
when you ran `npm install -g strongloop`). `lb-ng` takes two arguments: the
path to [`server.js`](https://github.com/strongloop/loopback-example-angular/blob/master/server/server.js) and the path
to the [generated services file](https://github.com/strongloop/loopback-example-angular/blob/master/client/js/services/lb-services.js).
[`lb-services.js`](https://github.com/strongloop/loopback-example-angular/blob/master/client/js/services/lb-services.js) is an Angular service
used to interact with LoopBack models.

Create [`lb-services.js`](https://github.com/strongloop/loopback-example-angular/blob/master/client/js/services/lb-services.js) using the `lb-ng`
command.

```
$ lb-ng server/server.js client/js/services/lb-services.js
```

### Run the application

From the project root, enter `node .` and browse to [`localhost:3000`](http://localhost:3000)
to view the application.

---

[Other LoopBack examples](https://github.com/strongloop/loopback-example)
