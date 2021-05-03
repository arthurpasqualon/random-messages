// import { TeamModel } from './events.schema'
// import { TEM_GOL_ID } from '../../config'
// import { Logger } from '../../helpers'
// import { database as DatabaseService } from '../../services'

// export function EventsRepository(database = DatabaseService, teamModel = TeamModel) {
//   const getFacts = async (teamsQuery: Array<{[key: string]: string | undefined}>) => {
//     await database.connect()
//     logger.start('getTeamsInfo', `${teamsQuery}`)
//     const result = await teamModel.find({
//       $or: teamsQuery
//     })

//   logger.end('getTeamInfo', `${teamsQuery}`)

//     return {
//       result,
//     }
//   }

//   return {
//     getTeamsInfo,
//   }
// }
