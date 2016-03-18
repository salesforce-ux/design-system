import ui from '../../.generated/ui';
import fs from 'fs';
import p from 'path';

describe('All components (except spinners)', function() {

  ui.forEach(group => {
    const components = group.components;
    components.filter(x => x.id != 'spinners').forEach(component => {
      const flavors = component.flavors;
      flavors.forEach(flavor => {
        const path = p.join(group.id, component.id, 'flavors', flavor.id)
        const states = fs.readdirSync(p.join(__dirname, '../../', '.www', path))
        states.forEach(state => {
          const name = `${component.id}_${flavor.id}_${state.split('.')[0]}`
          it('takes a screenshot', client => {
            client
              .url(process.env.HOST + path+'/'+state)
              .waitForElementVisible('body', 5000)
              .resizeWindow(800, 600)
              .screenCapture(name)
              .end();
          });
        })
      });
    });
  });
});
