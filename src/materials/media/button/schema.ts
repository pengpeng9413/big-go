

export interface IButtonConf {
    type:"primary" | "ghost" | "dashed" | "link" | "text" | "default" | undefined;
    icon:React.ReactNode | null;
    disabled:boolean;
    loading:boolean;
}

export interface IEditData {
    key:string;
    name:string;
    type:string;
}

export interface IButtonSchema {
    name:string;
    editData:Array<IEditData> ;
    config:IButtonConf
}

const button:IButtonSchema={
    name:"button",
    editData:[
        {
            key: 'type',
            name: '按钮类型',
            type: 'Text', 
        },
        {
            key: 'icon',
            name: '按钮类型',
            type: 'Node', 
        },
        {
            key: 'disabled',
            name: '是否被禁用',
            type: 'Boolean', 
        },
        {
            key: 'loading',
            name: '按钮加载状态',
            type: 'Boolean', 
        },
    ],
    config:{
        /** 按钮类型 */
        type:"primary",
        /** 按钮的图标组件 */
        icon: null,
        /** 是否禁用 */
        disabled: false,
        /** 按钮的加载状态 */
        loading: false,
    }
}

export default button