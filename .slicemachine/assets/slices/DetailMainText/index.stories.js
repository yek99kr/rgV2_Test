import MyComponent from '../../../../slices/DetailMainText';

export default {
  title: 'slices/DetailMainText'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"detail_main_text","items":[],"primary":{"summary":[{"type":"paragraph","text":"Esse eiusmod reprehenderit culpa magna qui occaecat incididunt excepteur non excepteur id enim.","spans":[]}],"moreInfo":[{"type":"paragraph","text":"Velit reprehenderit in cupidatat eu. Fugiat excepteur exercitation eu reprehenderit in magna magna reprehenderit Lorem est adipisicing veniam.","spans":[]}]},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _NoReadMore = () => <MyComponent slice={{"variation":"noReadMore","name":"NoReadMore","slice_type":"detail_main_text","items":[],"primary":{"moreInfo":[{"type":"paragraph","text":"Pariatur ad velit excepteur non dolor Lorem mollit ullamco officia voluptate. Nostrud consectetur ullamco deserunt labore magna officia id tempor ex culpa deserunt officia in. Dolor sunt incididunt velit voluptate duis aliquip ea.","spans":[]}]},"id":"_NoReadMore"}} />
_NoReadMore.storyName = 'NoReadMore'
