var browserify = require('browserify');
var assign = require('object-assign');
var minimatch = require('minimatch');

hexo.config.browserify = assign({
  exclude: ['**/*.min.js']
}, hexo.config.browserify);

hexo.extend.renderer.register('js', 'js', function(data, options, callback) {
  options = hexo.config.browserify || options || {};

  var exclude = options.exclude;
  if (exclude && !Array.isArray(exclude)) exclude = [exclude];

  if (data.path && exclude && exclude.length) {
    for (var i = 0, len = exclude.length; i < len; i++) {
      if (minimatch(data.path, exclude[i])) {
        callback(null, data.text);
        return;
      }
    }
  }

  var b = browserify(options);
  b.add(data.path);
  b.bundle(function(err, buf) {
    callback(err, buf && buf.toString());
  });
}, false);
