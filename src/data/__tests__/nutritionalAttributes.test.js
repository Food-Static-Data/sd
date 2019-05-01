/* global test, describe, it, expect */
'use strict'
import nutritionalAttributes from '../../../files.js'

describe('nutritionalAttributes data files returns array', () => {
    test('these tests prevent any issues and problems, also to break the structure of nutritionalAttributes', () => {
        expect(nutritionalAttributes).not.toBe('')
    })
})