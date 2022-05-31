import { changeName, signIn, signOut } from "../action";
import { profileReducer } from "../reducer"


describe("Проверяем reducer в profileReducer", () => {
    it("changeName", () => {
        const action = changeName("Alex")

        const state = {
            name: "",
            authed: false,
        }

        const newState = profileReducer(state, action);

        const received = {
            name: "Alex",
            authed: false,
        }

        expect(newState).toEqual(received)
    })


    it("signIn", () => {
        const action = signIn()

        const state = {
            name: "Alex",
            authed: false,
        }

        const newState = profileReducer(state, action);

        const received = {
            name: "Alex",
            authed: true,
        }

        expect(newState).toEqual(received)
    })


    it("signOut", () => {
        const action = signOut()

        const state = {
            name: "Alex",
            authed: true,
        }

        const newState = profileReducer(state, action);

        const received = {
            name: "Alex",
            authed: false,
        }

        expect(newState).toEqual(received)
    })
})

