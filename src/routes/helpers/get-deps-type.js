export default (opts) => {
  let type = ''

  if (opts.dev) {
    type = 'dev'
  } else if (opts.peer) {
    type = 'peer'
  } else if (opts.optional) {
    type = 'optional'
  }

  return type
}
