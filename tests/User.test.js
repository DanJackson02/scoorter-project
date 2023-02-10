const { TestWatcher } = require('jest')
const User = require('../src/User')

// User tests here
describe("User class integrity checks",() => {
    const user = new User("Dan","Password1","20")
    it('Initialises a User',() => {
        expect(user).toHaveProperty("username");
        expect(user).toHaveProperty("password");
        expect(user).toHaveProperty("age");
    })
    describe("User should be logged in when requirements are met", () => {
        it("user logged in when password and username are correct", () => {
            user.login('Password1', () => {
                expect(loggedIn).toBe(true);
            });
        });
    });
    describe("User should not be logged in with incorrect password", () => {
        it("throws error when password is incorrect", () => {
            try {
                user.login('incorrectPassword', () => {});
            } catch (error) {
                expect(error.message).toBe('Incorrect Password');
            }
        });
    });
    describe("User logout", () => {
        it("sets loggedIn to false when user logs out", () => {
            user.logout();
            expect(user.loggedIn).toBe(false);
        });
    });
});
