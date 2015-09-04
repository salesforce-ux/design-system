import path from 'path';
import gulp from 'gulp';

export default function (designSystem, done) {
  console.log('Compiling Aura CSS');
  let generatedPath = path.resolve(__PATHS__.generated, 'aura/css');
  let generatedPathDev = path.resolve(generatedPath, '_dev');
  try {
    designSystem.generateCSS(generatedPath);
    designSystem.generateCSS(generatedPathDev, {
      filter: flavor => flavor.status === 'dev-ready'
    });
  } catch (e) {
    return done(e);
  }
  gulp.src(path.resolve(generatedPath, '**/*'), {
    base: generatedPath
  })
  .pipe(gulp.dest(path.resolve(__PATHS__.www, 'assets/downloads/aura/css')))
  .on('error', done)
  .on('finish', done);
}
