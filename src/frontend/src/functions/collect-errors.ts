/**
 * collect all errors from error response
 * 
 * @param errors response with all errors json object
 * @returns object with all errors
 */
export function collectErrors(errors: any[]): any {
  const err = <any>{}

  if (Object.keys(errors).includes('message')) {
    err['error'] = ['sth go wrong']

    return err
  }

  errors.forEach((e) => {
    err[e.property] = [...Object.values(e.constraints)]
  })

  return err
}
