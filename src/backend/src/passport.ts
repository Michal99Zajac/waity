import passport from 'passport'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import passportLocal from 'passport-local'
import bcrypt from 'bcrypt'
import { classToClass } from 'class-transformer'
import { User } from './entities/user.entity'
import conn from './db'
import { Restaurant } from './entities/restaurant.entity'


const LocalStrategy = passportLocal.Strategy

const secret = process.env.JWT_SECRET || 'secret'

passport.serializeUser((user: any, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id: string, done) => {
  let user: Restaurant | User | undefined = await conn().getRepository(User).findOne(id)

  if (!user)
    user = await conn().getRepository(Restaurant).findOne(id)

  done(null, user)
})

/**
 * Auth restaurant by jwt and themself
 */
passport.use('user-jwt', new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret
}, async (JwtPayload, done) => {
  const user = await conn().getRepository(User).findOne({ email: JwtPayload.sub })

  if (!user) {
    return done(undefined, null)
  } else {
    return done(null, classToClass(user, { excludeExtraneousValues: true }))
  }
}))

/**
 * Auth restaurant by jwt and themself
 */
passport.use('restaurant-jwt', new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret
}, async (JwtPayload, done) => {
  const restaurant = await conn().getRepository(Restaurant).findOne({ passcode: JwtPayload.sub })

  if (!restaurant) {
    return done(undefined, false)
  } else {
    return done(null, classToClass(restaurant, { excludeExtraneousValues: true }))
  }
}))

/**
 * Login passport for user. To login require is email and password.
 */
passport.use('user-local', new LocalStrategy({ usernameField: 'email', passwordField: 'password' },
  async (email: string, password: string, done) => {
    const user = await conn().getRepository(User).findOne({ email: email }, { select: ['email', 'password']})

    if (!user) return done(undefined, false, { message: `email ${email} not found`})

    if ( ! await bcrypt.compare(password, user.password)) {
      return done(undefined, false, { message: 'password does not match' })
    }

    return done(null, user)
}))

/**
 * Login passport for restaurant. To login require is pascode and password.
 */
passport.use('restaurant-local', new LocalStrategy({ usernameField: 'passcode', passwordField: 'password' },
  async (passcode: string, password: string, done) => {
    const restaurant = await conn().getRepository(Restaurant).findOne({ passcode: passcode }, { select: ['passcode', 'password'] })

    if (!restaurant) return done(undefined, false, { message: `passcode ${passcode} is incorrect`})

    if ( ! await bcrypt.compare(password, restaurant.password)) {
      return done(undefined, false, { message: 'password does not match'})
    }

    return done(null, restaurant)
  }
))

export default passport
