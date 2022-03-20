import Tuits from "../components/tuits";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllTuits} from "../services/tuits-service";
import axios from "axios";


const MOCKED_TUITS = [
    {
        _id: "1",
        tuit: "alice's tuit"
    },
    {
        _id: "2",
        tuit: "bob's tuit"
    },
    {
        _id: "3",
        tuit: "charlie's tuit"
    }
];


test('tuit list renders mocked', async () => {
    // TODO: implement this
    const mock = jest.spyOn(axios, 'get');
    mock.mockImplementation(() =>
        Promise.resolve({data: {tuits: MOCKED_TUITS} }));

    const response = await findAllTuits();
    const retrievedTuits = response.tuits;
    render(
        <HashRouter>
            <Tuits tuits={retrievedTuits}/>
        </HashRouter>
    );
    const tuit = screen.getByText(/bob's tuit/i);
    expect(tuit).toBeInTheDocument();
});