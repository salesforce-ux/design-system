const Either = require('data.either');
const RawSource = require('webpack-sources/lib/RawSource');
const UglifyJS = require('uglify-es');

class Plugin {
  apply(compiler) {
    compiler.plugin('compilation', compilation => {
      compilation.plugin('optimize-chunk-assets', (chunks, callback) => {
        const files = chunks.reduce(
          (files, chunk) => files.concat(chunk.files),
          []
        );
        const sources = files.map(file =>
          Either.try(UglifyJS.minify)(compilation.assets[file].source())
            .map(r => r.code || '')
            .map(c => new RawSource(c))
            .fold(e => Promise.reject(e), s => Promise.resolve(s))
        );
        Promise.all(sources).then(sources => {
          files.forEach((file, index) => {
            compilation.assets[file] = sources[index];
          });
          callback();
        }, callback);
      });
    });
  }
}

module.exports = Plugin;
