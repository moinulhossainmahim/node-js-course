require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('6112946a9c9ff192a3fdfe26', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('6112847447253c85b57d61ba', 2)
.then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})