import {createTuit, deleteAllTuits, deleteTuit, findAllTuits, findTuitById} from "../services/tuits-service";
import {createUser} from "../services/users-service";
import {deleteUsersByUsername} from "./services";

describe('can create tuit with REST API', () => {
  // TODO: implement this
    const bobtuit = {
        tuit: "bob's 2nd tuit"
    };

    const ripley = {
        username: 'ellenripley',
        password: 'lv426',
        email: 'ellenripley@aliens.com'
    };

    beforeAll(() => {
        return deleteUsersByUsername(ripley.username);
    })

    afterAll(() => {
        return deleteUsersByUsername(ripley.username);
    })

    test('can create tuit with REST API', async () => {
        const newUser = await createUser(ripley);
        const newTuit = await createTuit(newUser._id, bobtuit);
        expect(newTuit.tuit).toEqual(bobtuit.tuit);
        await deleteTuit(newTuit._id);
    })
});

describe('can delete tuit wtih REST API', () => {
  // TODO: implement this
    const bobtuit = {
        tuit: "bob's 2nd tuit"
    };

    const ripley = {
        username: 'ellenripley',
        password: 'lv426',
        email: 'ellenripley@aliens.com'
    };

    beforeAll(() => {
        return deleteUsersByUsername(ripley.username);
    })

    afterAll(() => {
        return deleteUsersByUsername(ripley.username);
    })

    test('can delete tuit with REST API', async () => {
        const newUser = await createUser(ripley);
        const newTuit = await createTuit(newUser._id, bobtuit);
        const status = await deleteTuit(newTuit._id);

        expect(status.deletedCount).toBeGreaterThanOrEqual(1);
        await deleteTuit(newTuit._id);
    })
});

describe('can retrieve a tuit by their primary key with REST API', () => {
  // TODO: implement this
    const bobtuit = {
        tuit: "bob's 2nd tuit"
    };

    const ripley = {
        username: 'ellenripley',
        password: 'lv426',
        email: 'ellenripley@aliens.com'
    };

    beforeAll(() => {
        return deleteUsersByUsername(ripley.username);
    })

    afterAll(() => {
        return deleteUsersByUsername(ripley.username);
    })

    test('can retrieve a tuit by their primary key with REST API', async () => {
        const newUser = await createUser(ripley);
        const newTuit = await createTuit(newUser._id, bobtuit);

        const retrivedTuit = await findTuitById(newTuit._id);
        expect(retrivedTuit.tuit).toEqual(bobtuit.tuit);
        await deleteTuit(newTuit._id);
    })
});

describe('can retrieve all tuits with REST API', () => {
  // TODO: implement this
    const bobtuit1 = {
        tuit: "bob's 1st tuit"
    };

    const bobtuit2 = {
        tuit: "bob's 2nd tuit"
    };

    const bobtuit3 = {
        tuit: "bob's 3rd tuit"
    };

    const ripley = {
        username: 'ellenripley',
        password: 'lv426',
        email: 'ellenripley@aliens.com'
    };

    const ripley2 = {
        username: 'bob',
        password: '1234',
        email: 'bob@aliens.com'
    };

    const tuits = [bobtuit1, bobtuit2, bobtuit3];


    beforeAll(() => {
        deleteUsersByUsername(ripley.username);
        return deleteAllTuits();
    })

    afterAll(() => {
        deleteUsersByUsername(ripley.username);
        return deleteAllTuits();
    })

    test('can retrieve all tuits with REST API', async () => {
        const newUser = await createUser(ripley);
        const newUser2 = await createUser(ripley2);

        const newTuit1 = await createTuit(newUser._id, bobtuit1);
        const newTuit2 = await createTuit(newUser._id, bobtuit2);
        const newTuit3 = await createTuit(newUser2._id, bobtuit3);

        const retrivedTuits = await findAllTuits();
        expect(retrivedTuits.tuit).toEqual(tuits.tuit);
    })
});