module.exports = file => () => {
  if (file.endsWith && file.endsWith('/')) {
    return import('@/views/' + file + 'index.vue')
  }
  return import('@/views/' + file + '.vue')
}
