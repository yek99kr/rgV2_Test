import MyComponent from '../../../../slices/DetailMedia';

export default {
  title: 'slices/DetailMedia'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"detail_media","items":[],"primary":{"media":{"link_type":"Web","url":"http://google.com"},"autoplay":true},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _Header = () => <MyComponent slice={{"variation":"header","name":"Header","slice_type":"detail_media","items":[],"primary":{"media":{"link_type":"Web","url":"https://slicemachine.dev"},"autoplay":true},"id":"_Header"}} />
_Header.storyName = 'Header'
