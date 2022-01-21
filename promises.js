const posts = [
  { title: 'Post 1', body: 'This is post 1' },
  { title: 'Post 2', body: 'This is post 2' },
]

const getPosts = () => {
  setTimeout(() => {
    let output = ''
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`
    })
    document.body.innerHTML = output
  }, 1000)
}

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post)

      const error = false

      if (!error) {
        resolve()
      } else {
        reject('Error: Something went wrong.')
      }
    }, 2000)
  })
}

// createPost({title: "Post 3", body: "This is post 3"})
//     .then(getPosts).catch(err => {console.log(err)})

// Promise.all
const promise1 = Promise.resolve('Hello World')
const promise2 = 10
const promise3 = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve('Goodbye')
  }, 2000)
)
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(
  (res) => res.json()
)

Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  console.log(values)
})
