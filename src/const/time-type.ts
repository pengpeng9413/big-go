
export interface TTimeItem {
    /** 组件名称 */
    componentName?:string | null;
    /** 组件X 坐标 */
    x:number;
    /** 组件Y 坐标 */
    y:number;
}

export interface ITimeLine {
    past:Array<TTimeItem>;
    present:Array<TTimeItem>;
    feature:Array<TTimeItem>;
}