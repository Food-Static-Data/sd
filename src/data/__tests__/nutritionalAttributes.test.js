/* global test, describe, it, expect */
'use strict'
import {nutritions2FilePath} from '../../../files.js'
import nutritionalAttributes from nutritions2FilePath

describe('nutritionalAttributes data files returns array', () => {
    test('these tests prevent any issues and problems, also to break the structure of nutritionalAttributes', () => {
        expect(nutritionalAttributes).not.toBe('')
    })
})