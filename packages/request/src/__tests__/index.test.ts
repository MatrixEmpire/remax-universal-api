'use strict';

import request from '../index';

describe('request', () => {
    it('needs tests', () => {
        request().then(res => {
            expect(res).toBe('test');
        });
    });
});
