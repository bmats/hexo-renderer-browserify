# hexo-renderer-browserify

Add [Hexo] support for [Browserify].

## Install

``` bash
$ npm install hexo-renderer-browserify --save
```

## Options

You can configure this plugin in `_config.yml`.

``` yaml
browserify:
  exclude:
    - '**/*.min.js'
```

- **exclude** - Excluded files

See [Browserify API](https://github.com/substack/node-browserify#browserifyfiles--opts) for additional options.

[Hexo]: https://hexo.io/
[Browserify]: http://browserify.org/
