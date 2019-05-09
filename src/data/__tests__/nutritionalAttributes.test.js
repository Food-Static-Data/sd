/* global test, describe, it, expect */
'use strict'
const {nutritions2FilePath} = reuqire('../../../files.js')
const nutritionalAttributes = reuqire(nutritions2FilePath)

describe('nutritionalAttributes data files returns array', () => {
    test('these tests prevent any issues and problems, also to break the structure of nutritionalAttributes', () => {
        expect(nutritionalAttributes).not.toBe('')
    })
})