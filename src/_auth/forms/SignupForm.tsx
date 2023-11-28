import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from 'react-router-dom'

import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { singnupValidation } from "@/lib/validation"
import Loader from "@/components/shared/Loader"
import { createUserAccount } from "@/lib/appwrite/api"



function SignupForm() {

  const isLoading= false;
   // 1. Define your form.
   const form = useForm<z.infer<typeof singnupValidation>>({
    resolver: zodResolver(singnupValidation),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof singnupValidation>) {
    const newUser= await createUserAccount(values);

    console.log(newUser)
  }
  return (
        <Form {...form}>
          
          <div className="sm:w-420 flex-center flex-col">
          <img src="/assets/images/logo.svg" alt="logo"/>
              <h2 className='h3-bold md:h2-bold pt-5 sm:pt-12'>Create a new account</h2>
              <p className="text-light-3 small-medium md:base-regular mt-2">To use Snapgram enter your details</p>

            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3  mt-2">
               <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel >Name</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel >Username</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input"{...field} />
                    </FormControl>
                    
                    <FormMessage />
                  </FormItem>
                )}
              /> 
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel >Email</FormLabel>
                    <FormControl>
                      <Input type="email" className="shad-input"{...field} />
                    </FormControl>
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel >Password</FormLabel>
                    <FormControl>
                      <Input type="Password" className="shad-input" {...field} />
                    </FormControl>
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="shad-button_primary">
                {isLoading ? (
                  <div className="flex-center gap-2">
                    <Loader/>Loading...
                  </div>
                ): "Sing up"}
                </Button>
                <p className="text-small-regular text-light-2 text-center mt-2">
                  Already have an acoount?
                  <Link to="/sign-in" className="text-primary-500 text-small-semibold ml-1">
                    Log in
                  </Link>
                </p>
            </form>
          </div>
        </Form>
  )
}

export default SignupForm