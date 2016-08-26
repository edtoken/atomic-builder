import atom from 'Editor/atom';
import { shape as Shape } from 'Editor/creators/createShape';

export default atom({
  preview: require('./preview.png'),
  component: require('./Component').default,
  props: {
    type: 'image',
    content: require('./default.png'),
    settings: {
      align: Shape.align(),
      padding: Shape.padding()
    }
  }
});
