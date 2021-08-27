const { ApolloServer, gql } = require("apollo-server")

const typeDefs = gql`

# interface Book {
#   title: String!
#   author: Author!
# }
# type Author{
#     name:String 
# }
# type Course {
#     teacher: String 
# }
# type Textbook implements Book {
#   title: String!
#   author: Author!
#   courses: [Course!]!
# }

# type ColoringBook implements Book {
#   title: String!
#   author: Author!
#   colors: [String!]!
# }


type Book {
    name: String 
    title: String 
}

type Query {
  books: Book 
}

`
const resolvers = {
  
    Query:{
        books:(_, args )=>{
            return books 
        }
    }
}
const server = new ApolloServer({ typeDefs, resolvers })


    async function start() {
        server.listen().then(({ url }) => {
            console.log(`server is ready on ${url}`);
        })
    }
    start() 

    const Author = {
        name:"mohammad"
    }

    const books = {
        name:"math", 
        title:"programing" , 
    }