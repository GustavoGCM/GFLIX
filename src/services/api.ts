import * as MovieDb from "moviedb-promise"
import "dot-env"

export const mdb = new MovieDb.MovieDb(process.env.API_KEY!)