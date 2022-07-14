const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLInputObjectType } = graphql;



const PlayerType = new GraphQLObjectType({
	name: "Players",
	description: "Club's Player data",
	fields: () => ({
		id: { type: GraphQLInt },
		fullname: { type: GraphQLString },
		status: { type: GraphQLString },
		returned_day: { type: GraphQLInt },
		nationality: { type: GraphQLString },
	})
})


module.exports = PlayerType