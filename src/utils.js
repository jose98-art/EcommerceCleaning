import {dirname} from 'path'
import { fileURLToPath } from 'url'
import bcrypt from 'bcrypt'

export const __dirname = dirname(fileURLToPath(import.meta.url))

export const hashDate = async (password) => {
    return bcrypt.hash(password, 10)
}

export const compareHashDate = async (password, passwordDB) => {
    return bcrypt.compare(password, passwordDB)
}

