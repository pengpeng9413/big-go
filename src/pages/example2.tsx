/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { Button } from 'antd'
import React from 'react'
import Plupload from 'plupload'

const EVENTS = [
    'PostInit',
    'Browse',
    'Refresh',
    'StateChanged',
    'QueueChanged',
    'OptionChanged',
    'BeforeUpload',
    'UploadProgress',
    'FileFiltered',
    'FilesAdded',
    'FilesRemoved',
    'FileUploaded',
    'ChunkUploaded',
    'UploadComplete',
    'Destroy',
    'Error',
  ];

interface Props {
   
}

interface State {}

export default class Upload extends React.Component<Props,State> {
  public uploader: Plupload.Uploader
  constructor(props:Props){
      super(props)
      this.uploader=new Plupload.Uploader({
        browse_button: 'browse',
        url: ` https://www.mocky.io/v2/5cc8019d300000980a055e76`,
        chunk_size: '2MB',
        max_retries: 3,
        headers: {
          'Cache-Control': 'no-cache',
          // 'Accept-Language': Intl.locale === 'zh-CN' ? 'zh' : 'en',
          lan: '1',
          /// Authorization: `bearer ${localStorage.getItem('token')}`,
        }})   
  }

  componentDidMount(){
    this.uploader.init();
    this.uploader.bind("PostInit",this.onPostInit)
    this.uploader.bind("Browse",this.onBrowse)
    this.uploader.bind("Refresh",this.onRefresh)
    this.uploader.bind("StateChanged",this.onStateChanged)
    this.uploader.bind("QueueChanged",this.onQueueChanged)
    this.uploader.bind("OptionChanged",this.onOptionChanged)
    this.uploader.bind("BeforeUpload",this.onBeforeUpload)
    this.uploader.bind("UploadProgress",this.onUploadProgress)
    this.uploader.bind("FileFiltered",this.onFileFiltered)
    this.uploader.bind("FilesAdded",this.onFilesAdded)
    this.uploader.bind("FilesRemoved",this.onFilesRemoved)
    this.uploader.bind("FileUploaded",this.onFileUploaded)
    this.uploader.bind("ChunkUploaded",this.onChunkUploaded)
    this.uploader.bind("UploadComplete",this.onUploadComplete)
    this.uploader.bind("Destroy",this.onDestroy)
    this.uploader.bind("Error",this.onError)
  }
  
  onPostInit(){
      
  }
  onBrowse(){

  }
  onRefresh(){

  }
  onStateChanged(){

  }
  onQueueChanged(){

  }
  onOptionChanged(){

  }
  onBeforeUpload(_uploader: any,_file: any){
    console.log("_uploader",_uploader,"_file",_file)
  }
  onUploadProgress(){

  }
  onFileFiltered(){

  }
  onFilesAdded(){

  }
  onFilesRemoved(){

  }
  onFileUploaded(){

  }
  onChunkUploaded(){

  }
  onUploadComplete(){

  }
  onDestroy(){

  }
  onError(){

  }

  render(){
    console.log("uploader",this.uploader)
    return(<Button onClick={()=>this.uploader.start()}>文件上传</Button>)
  }
}


// React.PureComponent 
// vite 