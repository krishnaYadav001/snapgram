import * as z from "zod"

export const singnupValidation = z.object({
    name: z.string().min(2, {message: 'Name must be atleast more the 2 character'}),

    username: z.string().min(2,{message: 'User Name must be atleast more the 2 character'}),

    email: z.string().min(3),
    
    password: z.string().min(8,{message: 'Password must be atleast of 8 character'}),   
  })