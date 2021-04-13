
/** 数字类型配置项 */
export interface INumberConfigType {
    key: string;
    name: string;
    type: 'Number';
    range?: [number, number];
    step?: number;
  }

/** 文本类型配置项 */
export interface ITextConfigType {
    key: string;
    name: string;
    type: 'Text';
  }

/** 默认文本 */
export type ITextDefaultType = string;

/** 默认数字 */
export type INumberDefaultType = number;