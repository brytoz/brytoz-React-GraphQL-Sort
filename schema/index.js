// SCHEMA DEFINITIONS


// FETCH THE GRAPHQL PACKAGE
const graphql = require('graphql');
// FETCH THE GRAPHQL MODULES FROM THE PACKAGE
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } = graphql;
// CALL THE PLAYER DEFINED GRAPHQL PROGRAM
const PlayerType = require('./Types/PlayerType');

// FEYCH ALL EXPORTED CONSTANTS FROM THE MOCK LAZY DATA
const { players, country, unAvailable, available } = require('../data.js');


// DATA (QUERY ) DEFINITIONS
const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		// GET ALL PLAYERS DATA
		getAllPlayers: {
			type: new GraphQLList(PlayerType),
			args: { id: { type: GraphQLInt } },
			resolve(parent, args) {
				return players
			}
		},
		// DEFINE QUERY FOR AVAILABLE PLAYERS
		available: {
			type: new GraphQLList(PlayerType),
			args: { id: { type: GraphQLInt } },
			resolve(parent, args) {
				return available 
			}
		},
		// DEFINE QUERY FOR UNAVAILABLE PLAYERS
		unAvailable: {
			type: new GraphQLList(PlayerType),
			args: { id: { type: GraphQLInt } },
			resolve(parent, args) {
				return unAvailable
			}
		},
		// DEFINE QUERY FOR filter PLAYERS
		search: {
			type: new GraphQLList(PlayerType),
			args: { id: { type: GraphQLInt } },
			resolve(parent, args, context) {
				const { fullname } = args;
				return  context.fullname.players.find((a) => a.fullname === fullname)
			}
		},
	}
})


// EXPORT THE QUERY MODULE TO BE USED ACROSS THE GRAPHQL CLIENT
module.exports = new graphql.GraphQLSchema({ query: RootQuery })
