
import Audio from './audio/template';
import Button from './button/template';

const mediaTemplate = [Button, Audio];


const MediaTemplate = mediaTemplate.map(v => {
  return { ...v, category: 'test' };
});

export default MediaTemplate;
