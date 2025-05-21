export function yupToFormError(err) {
    const errorObj = {}
      err.inner.forEach((error)=> {
        errorObj[error.path] = error.message;
      })

    return errorObj
}