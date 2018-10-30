import { expect } from 'chai';

import * as colors from '../src/colors';

describe('Colors', () => {
    describe('Mixed', () => {
        it('should have the correct hex code for black-60', () => {
            expect(colors.black-60).to.equal('#666666');
        });

        it('should have the correct hex code for blue-24', () => {
            expect(colors.blue-24).to.equal('#AEB8E1');
        });

        it('should have the correct hex code for blue-60', () => {
            expect(colors.blue-60).to.equal('#30708f');
        });

        it('should have the correct hex code for earth-11', () => {
            expect(colors.earth-11).to.equal('#FCECC1');
        });

        it('should have the correct hex code for grey-25', () => {
            expect(colors.grey-25).to.equal('#C5BFB9');
        });

        it('should have the correct hex code for orange-44', () => {
            expect(colors.orange-44).to.equal('#F5B307');
        });

        it('should have the correct hex code for purple-23', () => {
            expect(colors.purple-23).to.equal('#B2BAE0');
        });

        it('should have the correct hex code for yellow-28', () => {
            expect(colors.yellow-28).to.equal('#FBE742');
        });
    })
});
