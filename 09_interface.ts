//  Interface :
/*

    Interface is just like a types, but having some differce :
        - Interface can add new fields to an existing interface.
        - Interface follows inheritance property.

*/

interface myUser {
    readonly dbId: number,
    email: string,
    userID: number,
    googelId?: string,
    // isLogged: () => boolean
    isLogged(): boolean,
    getCoupon( name: string ): number
};

const firstUser: myUser = {
    dbId: 78,
    email: "asd@asd.com",
    userID: 87,
    isLogged() {
        return true
    },
    getCoupon(name: "myUser") {
        return 78
    },
} 