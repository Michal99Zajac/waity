import passport from 'passport'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import passportLocal from 'passport-local'
import { User } from './entities/user.entity'
import conn from './db'


const LocalStrategy = passportLocal.Strategy

const secret = 'secret'

passport.serializeUser((user: any, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id: string, done) => {
  const user = conn().getRepository(User).findOne(id)

  done(null, user)
})

passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret
}, async (JwtPayload, done) => {
  const user = await conn().getRepository(User).findOne({ id: JwtPayload.sub })

  if (!user) {
    return done(undefined, null)
  } else {
    return done(null, user)
  }
}))

passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, async (username: string, password: string, done) => {
  const user = await conn().getRepository(User).findOne({ email: username })

  if (!user) return done(undefined, false, { message: `email ${username} not found`})

  if (user.password !== password) return done(undefined, false, { message: 'password does not match' })

  return done(null, user)
}))

export default passport