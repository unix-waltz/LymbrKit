import { compare } from "bcrypt"
const checkPassword = async (pw1,pw2) => {
return  compare(pw1,pw2)
}

export default checkPassword