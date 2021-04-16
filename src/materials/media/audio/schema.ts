import {
  INumberDefaultType,
  ITextDefaultType,
  INumberConfigType,
  ITextConfigType,
} from './../../../const/form-type';

export type TAudioEditData = Array<INumberConfigType | ITextConfigType>;

export interface IAudioConfig {
  height: INumberDefaultType;
  url: ITextDefaultType;
}

export interface IAudioSchema {
  /** 组件唯一的标识 */
  name:string
  editData: TAudioEditData;
  config: IAudioConfig;
}


// 我们发现这个schema 结构：
// editData 是可编辑的数据属性，都有三个属性：key，name，type
// config 是可配置项，是做为props 接受的值
const Audio: IAudioSchema = {
  name:"audio",
  editData: [
    {
      key: 'height',
      name: '音频高度',
      type: 'Number',
    },
    {
      key: 'url',
      name: '音频链接',
      type: 'Text',
    },
  ],
  config: {
    height: 32,
    url: 'http://io.nainor.com/audio.mp3',
  },
};

export default Audio;
