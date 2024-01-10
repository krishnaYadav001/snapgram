import * as z from "zod"

export const singnupValidation = z.object({
    name: z.string().min(3, {message: 'Name must be atleast more the 3 character'}),

    username: z.string().min(3,{message: 'User Name must be atleast more the 3 character'}),

    email: z.string().email(),
    password: z.string().min(8,{message: 'Password must be atleast of 8 character'}),   
  })

export const singninValidation = z.object({

    email: z.string().email(),
    password: z.string().min(8,{message: 'Password must be atleast of 8 character'}),   
  }) 

export const PostValidation = z.object({

    caption: z.string().min(5).max(2200),
    file: z.custom<File[]>(),
    location: z.string().min(2).max(100),
    tags: z.string(),
  })