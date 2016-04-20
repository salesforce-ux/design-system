import publish from '../helpers/publish';

if (process.env.BUILD_SERVER_HOST) {
  publish()((err, r) => console.log('Successfully published build', err, r));
}
