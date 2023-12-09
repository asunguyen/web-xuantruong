const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  dataSlie: state => state.slide.dataSlie
}
// console.log('dataSlie', getters.name)
export default getters
