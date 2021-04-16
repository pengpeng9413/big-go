import Audio, {IAudioSchema}from './audio/schema'
import Button,{IButtonSchema} from './button/schema';

interface Ischema {
    [x:string]:IAudioSchema | IButtonSchema
}

const schema:Ischema= {audio:Audio,button:Button}

export default schema