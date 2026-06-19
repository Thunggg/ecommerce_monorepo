import path from 'path'

console.log('cwd=', process.cwd())

export const workspaceRoot = process.cwd().endsWith('backend') ? path.resolve(process.cwd(), '..') : process.cwd()
