import { expect } from 'chai';

import * as colors from '../src/colors';

describe('Colors', () => {
    describe('Mixed', () => {
        it('should have the correct hex code for black60', () => {
            expect(colors.black60).to.equal('#666666');
        });

        it('should have the correct hex code for blue24', () => {
            expect(colors.blue24).to.equal('#AEB8E1');
        });

        it('should have the correct hex code for blue60', () => {
            expect(colors.blue60).to.equal('#30708f');
        });

        it('should have the correct hex code for earth11', () => {
            expect(colors.earth11).to.equal('#FCECC1');
        });

        it('should have the correct hex code for grey25', () => {
            expect(colors.grey25).to.equal('#C5BFB9');
        });

        it('should have the correct hex code for orange44', () => {
            expect(colors.orange44).to.equal('#F5B307');
        });

        it('should have the correct hex code for purple23', () => {
            expect(colors.purple23).to.equal('#B2BAE0');
        });

        it('should have the correct hex code for yellow28', () => {
            expect(colors.yellow28).to.equal('#FBE742');
        });
    })
});
