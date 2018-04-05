import wepy from 'wepy'
let globalData = {}

const getUserInfo = async () => {
  const that = this
  let promise = new Promise((resolve, reject) => {
    if (globalData.userInfo) {
      resolve(globalData.userInfo)
      return
    }
    wepy.getUserInfo({
      success (res) {
        console.log(res)
        globalData.userInfo = res.userInfo
        resolve(res.userInfo)
      },
      fail (err) {
        console.log(err)
        reject(err)
      }
    })
  })

  return await promise
}

module.exports = {
  getUserInfo
} 